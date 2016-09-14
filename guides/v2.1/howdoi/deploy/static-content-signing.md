---
layout: default
group: howdoi
subgroup: Deploy
title: Invalidate Browser Cache
menu_title: Invalidate Browser Cache
menu_node: parent
menu_order: 100
version: 2.1
github_link: howdoi/deploy/static-content-signing.md
---

## {{page.title}}
{:.no_toc}

* TOC
{:toc}

### Static Content Cache

To improve performance, Magento sets the Expires headers for static resources such as images, JavaScript, and CSS files.
Setting the Expires header on a static resource tells the browser to cache the resource at that URL and serve the cached version until it expires.
This is a common best practice for caching static resources.

When the browser caches a static resource and that resource changes on the server, you need to clear the browser cache so it can download the new version.
Manually clearing the browser cache works if you are a website administrator, but this is not an appropriate request to make of your users when you want them to download new versions of a static resource.

### Static Content Signing

Static content signing is a Magento feature that allows you to invalidate the browser cache for static resources.
Magento accomplishes this by adding a deployment version to the URL of static files.

Below is an example of a URL signed with a version:

~~~
https://127.0.0.1//magento2/pub/static/version8675309/frontend/magento_plushe/en_US/Magento_Theme/favicon.ico
~~~

When you run the command `setup:static-content:deploy` to [deploy static content]({{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html), Magento automatically changes the deployment version.
This changes the URL of the static files and forces the browser to load the new version of the file.

Magento enables this feature by default, but you can change it in [Stores/System/Configuration/Advanced/Developer/Static Files Settings](http://docs.magento.com/m2/ee/user_guide/system/static-file-signature.html){:target="_blank"}.

![Static Files Settings]({{ site.baseurl }}common/images/static-files-settings.png)

We recommend keeping this feature enabled to prevent issues related to browsers serving up old static resources.
When you enable static content signing, Magento includes the deployment version in the URL of static files.

#### Version Signatures

Magento appends the version signature as a path component directly after the base URL of static view files to preserve the integrity of relative URLs across static resources.
This also forces the browser to resolve a relative URL to the correct signed source while keeping its content independent of the presence/absence of the signature value.

When a browser requests a signed source from the server, the server uses [rewrite rules](http://httpd.apache.org/docs/current/mod/mod_rewrite.html){:target="_blank"} to strip the signature component from the URL.

### Usage during deployments

When you make changes to production through an upgrade or code change, you need to run the `setup:static-content:deploy` command to update the version and expire any static content cached by browsers.

If you have a separate process that runs `setup:static-content:deploy` to generate static files that you then apply to a production instance, you also need to apply `pub/static/deployed_version.txt`.
This file contains the version for the generated static content.
