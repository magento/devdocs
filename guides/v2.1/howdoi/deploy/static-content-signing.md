---
layout: default
group: howdoi
subgroup: Deploy
title: Static Content Signing
menu_title: Deploy Magento to production
menu_node: parent
menu_order: 1
version: 2.1
github_link: howdoi/deploy/static-content-signing.md
---

### Caching of Static Content

For the best performance Magento sets expiration headers for static resources, so browser don't need to retrieve them again every time. Browser will continue to serve cached resource until it expires as long as URL is the same. This is a common best practice for caching static resources. As static resources cached on the browser side, if you change the file, you need to clear browser cache in order for browser to download new version. While this could be applicable for website administrators, this doesn't work for regular shoppers.


### Static Content Signing

Magento has a feature static content signing that allows to invalidate cache for static resources. Magento adds a deployment version of static files to URLs. Every time you run setup:static-content:deploy command, Magento automatically changes deployment version. Browser will threat that as different URL and load new version of the file.

Please make sure this feature is enabled (System / Configuration / Developer / Static Files Settings), otherwise there are could be issues related to the old static resources loaded by browser.

Once signing of static files has been enabled, deployment version is included into corresponding URLs.

Signature is appended as path component directly after base URL for static view files in order to preserve integrity of relative URLs across static resources. It makes a browser to resolve relative URLs to properly signed ones, while keeping contents independent of presence/absence of signature and its value. Rewrite rules of a web server are used to strip the signature component from URLs.

### Deployment

When you deploy changes to production after upgrade to a newer version or code changes, you need to run setup:static-content:deploy command to change URLs for static content.
If you add you code to the repository for in order to reduce downtime and then checkout different tag on production, you need to add pub/static/deployed_version.txt to repo. This file contains version for static content.

Rewrite rules of a web server are used to strip the signature component from URLs.
