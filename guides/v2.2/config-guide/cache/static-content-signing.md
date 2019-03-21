---
group: configuration-guide
title: Static content signing
functional_areas:
  - Configuration
  - System
  - Setup
---

### Static content cache

To improve performance, Magento sets the `Expires` headers for static resources such as images, JavaScript, and {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} files.
Setting the `Expires` header on a static resource tells the browser to {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} the resource at that {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} and serve the cached version until it expires.
This is a common [best practice](https://developer.yahoo.com/performance/rules.html#expires=) for caching static resources.

When the browser caches a static resource and that resource changes on the server, you need to clear the browser cache so it can download the new version.
Manually clearing the browser cache works if you are a {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} administrator, but this is not an appropriate request to make of your users when you want them to download new versions of a static resource.

### Static content signing

{% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}Static content{% endglossarytooltip %} signing is a Magento feature that allows you to invalidate the browser cache for static resources.
Magento accomplishes this by adding a deployment version to the URL of {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %}.

The following is an example of a URL signed with a version:

~~~
http://magento2.com/pub/static/version1475604434/frontend/Magento/luma/en_US/images/logo.svg
~~~

When you run the command [`setup:static-content:deploy`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html) to deploy static content, Magento automatically changes the deployment version.
This changes the URL of the static files and forces the browser to load the new version of the files.

Magento enables this feature by default, and we recommend keeping this feature enabled to prevent issues related to browsers serving up old static resources.

You can find the configuration for this feature in [**Stores** > Settings > Configuration > **Advanced** > **Developer** > **Static Files Settings**](http://docs.magento.com/m2/ee/user_guide/system/static-file-signature.html).

![Static Files Settings]({{ site.baseurl }}/common/images/static-files-settings.png)

#### Version signatures

Magento appends the version signature as a path component directly after the base URL of static view files to preserve the integrity of relative URLs across static resources.
This also forces the browser to resolve a relative URL to the correct signed source while keeping its content independent of the presence/absence of the signature value.

When a browser requests a signed source from the server, the server uses URL rewrites to strip the signature component from the URL.

### Usage during deployments

After upgrading or modifying static resources, you need to run the `setup:static-content:deploy` command to deploy the version and update the static contents.
This forces the browser to load the updated resources.

If you deploy code on a separate server and move it to production using a code repository to reduce downtime, you also need to add the file `pub/static/deployed_version.txt` to the repository.
This file contains the new version for the deployed static content.
