---
group: architecture-guide
subgroup: Architectural Basics
title: Security overview
menu_title: Security
menu_order:
---

## Enhanced password management

Magento has strengthened the hashing algorithms (SHA-256) used in password management. Magento now supports Argon2ID13 through the PHP sodium extension, which requires the libsodium library version 1.0.13 or higher.

## Improved prevention of cross-site scripting (XSS) attacks by making escaped data the default

The Magento Framework has adopted conventions that regulate the escaping of data in output. These conventions include the ability to escape  output for [HTML](https://glossary.magento.com/html) pages (HTML, JSON, and JavaScript) and email. Where possible, escaping is transparent to client code. See [Security measures against XSS attacks]({{page.baseurl}}/extension-dev-guide/xss-protection.html) in the [Frontend](https://glossary.magento.com/frontend) Developer Guide.

## More flexible file system ownership and permissions

Starting in version 2.0.6, Magento no longer explicitly sets file system permissions. Instead, we recommend that certain files and directories be writable in a development environment and read-only in a production environment.

To provide you with a simple way to restrict access to the file system in production, we provide the flexibility for you to further restrict those permissions using a [umask](http://www.cyberciti.biz/tips/understanding-linux-unix-umask-value-usage.html).

For an overview, see [Overview of ownership and permissions]({{page.baseurl}}/install-gde/prereq/file-sys-perms-over.html).

For details about ownership and permissions in development and production, see [Magento ownership and permissions in development and production]({{page.baseurl}}).

## Improved prevention of clickjacking exploits

Magento safeguards your store from clickjacking attacks by using an X-Frame-Options HTTP request header. For more information, see [X-Frame-Options header]({{page.baseurl}}/config-guide/secy/secy-xframe.html).

## Use of non-default Magento Admin URL

A simple [Magento Admin](https://glossary.magento.com/magento-admin) [URL](https://glossary.magento.com/url) (like `admin` or `backend`) makes it easy to target attacks on specific locations using automated password guessing. To prevent against this type of attack, Magento by default creates a random Admin URI when you install the product. The CLI command `php bin/magento info:adminuri` is provided so that you can  see the URI if you forget it. You can also use the CLI to change this URI.  Although the use of a non-default admin URL will not secure the site, its use will help prevent large-scale automated attacks. See [Display or change the Admin URI]({{page.baseurl}}/install-gde/install/cli/install-cli-adminurl.html) in Configuration Guide for more information.

{:.ref-header}
Related topics

[Configuration Guide]({{page.baseurl}}/config-guide/bk-config-guide.html)
