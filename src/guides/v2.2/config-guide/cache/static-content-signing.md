---
group: configuration-guide
title: Static content signing
functional_areas:
  - Configuration
  - System
  - Setup
---

### Static content cache

To improve performance, Magento sets the `Expires` headers for static resources such as images, JavaScript, and [CSS](https://glossary.magento.com/css) files.
Setting the `Expires` header on a static resource tells the browser to [cache](https://glossary.magento.com/cache) the resource at that [URL](https://glossary.magento.com/url) and serve the cached version until it expires.
This is a common [best practice](https://developer.yahoo.com/performance/rules.html#expires=) for caching static resources.

When the browser caches a static resource and that resource changes on the server, you need to clear the browser cache so it can download the new version.
Manually clearing the browser cache works if you are a [website](https://glossary.magento.com/website) administrator, but this is not an appropriate request to make of your users when you want them to download new versions of a static resource.

### Static content signing

[Static content](https://glossary.magento.com/static-content) signing is a Magento feature that allows you to invalidate the browser cache for static resources.
Magento accomplishes this by adding a deployment version to the URL of [static files](https://glossary.magento.com/static-files).

The following is an example of a URL signed with a version:

```terminal
http://magento2.com/pub/static/version1475604434/frontend/Magento/luma/en_US/images/logo.svg
```

When you run the command [`setup:static-content:deploy`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html) to deploy static content, Magento automatically changes the deployment version.
This changes the URL of the static files and forces the browser to load the new version of the files.

Magento enables this feature by default, and we recommend keeping this feature enabled to prevent issues related to browsers serving up old static resources.

You can find the configuration for this feature in [**Stores** > Settings > Configuration > **Advanced** > **Developer** > **Static Files Settings**](http://docs.magento.com/m2/ee/user_guide/system/static-file-signature.html).

![Static Files Settings]({{ site.baseurl }}/common/images/static-files-settings.png)

You can also use the CLI command to determine the status:

```bash
bin/magento config:show dev/static/sign
```

Use the following command to enable or disable static content signing

```bash
bin/magento config:set dev/static/sign <value>
```

Where ```<value>``` is 1 (enabled) or 0 (disabled).

#### Version signatures

Magento appends the version signature as a path component directly after the base URL of static view files to preserve the integrity of relative URLs across static resources.
This also forces the browser to resolve a relative URL to the correct signed source while keeping its content independent of the presence/absence of the signature value.

When a browser requests a signed source from the server, the server uses URL rewrites to strip the signature component from the URL.

### Usage during deployments

After upgrading or modifying static resources, you need to run the `setup:static-content:deploy` command to deploy the version and update the static contents.
This forces the browser to load the updated resources.

If you deploy code on a separate server and move it to production using a code repository to reduce downtime, you also need to add the file `pub/static/deployed_version.txt` to the repository.
This file contains the new version for the deployed static content.
