---
layout: default
group: config-guide
subgroup: 08_Caching
title: Static Content Signing
menu_title: Static Content Signing
menu_node:
menu_order: 100
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.2
github_link: config-guide/cache/static-content-signing.md
---

### Static content cache

To improve performance, Magento sets the `Expires` headers for static resources such as images, JavaScript, and CSS files.
Setting the `Expires` header on a static resource tells the browser to cache the resource at that URL and serve the cached version until it expires.
This is a common [best practice](https://developer.yahoo.com/performance/rules.html#expires=){:target="_blank"} for caching static resources.

When the browser caches a static resource and that resource changes on the server, you need to clear the browser cache so it can download the new version.
Manually clearing the browser cache works if you are a website administrator, but this is not an appropriate request to make of your users when you want them to download new versions of a static resource.

### Static content signing

Static content signing is a Magento feature that allows you to invalidate the browser cache for static resources.
Magento accomplishes this by adding a deployment version to the URL of static files.

The following is an example of a URL signed with a version:

~~~
http://magento2.com/pub/static/version1475604434/frontend/Magento/luma/en_US/images/logo.svg
~~~

When you run the command [`setup:static-content:deploy`]({{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html) to deploy static content, Magento automatically changes the deployment version.
This changes the URL of the static files and forces the browser to load the new version of the files.

Magento enables this feature by default, and we recommend keeping this feature enabled to prevent issues related to browsers serving up old static resources.

You can find the configuration for this feature in [**Stores > System > Configuration > Advanced > Developer > Static Files Settings**](http://docs.magento.com/m2/ee/user_guide/system/static-file-signature.html){:target="_blank"}.

![Static Files Settings]({{ site.baseurl }}common/images/static-files-settings.png)

#### Version signatures

Magento appends the version signature as a path component directly after the base URL of static view files to preserve the integrity of relative URLs across static resources.
This also forces the browser to resolve a relative URL to the correct signed source while keeping its content independent of the presence/absence of the signature value.

When a browser requests a signed source from the server, the server uses URL rewrites to strip the signature component from the URL.

### Usage during deployments

After upgrading or modifying static resources, you need to run the `setup:static-content:deploy` command to deploy the version and update the static contents.
This forces the browser to load the updated resources.

If you deploy code on a separate server and move it to production using a code repository to reduce downtime, you also need to add the file `pub/static/deployed_version.txt` to the repository.
This file contains the new version for the deployed static content.
