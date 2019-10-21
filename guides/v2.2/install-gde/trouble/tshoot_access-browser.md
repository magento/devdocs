---
group: installation-guide
subgroup: 02_access
title: Cannot access Magento software in a web browser
menu_title: Cannot access Magento software in a web browser
menu_node:
menu_order: 2
functional_areas:
  - Install
  - System
  - Setup
---

### Symptom: The following message displays when you try to access the Magento storefront or Admin:

```text
Whoops, it looks like you have an invalid PHP version.
Magento supports PHP 5.5 or newer.
```

#### Solution

Either upgrade [PHP](https://glossary.magento.com/php) or restart Apache (Apache might not be using the same PHP version as is on the file system).

### Symptom: A 404 (Not Found) error displays.

#### Solution

Try the following:

*  Make sure [Apache server rewrites]({{ page.baseurl }}/install-gde/prereq/apache.html) are enabled.

   If Apache server rewrites are set incorrectly, static files aren't served from the correct location.

*  Likely an issue with the base URL you entered during the installation. You specify the base URL as the value of `--base-url=` when installing Magento from the command line or as the value of the **Your Store Address** field on the Web Configuration page of the web installer.

   The base URL *must* start with the scheme (such as `http://`) and end with a trailing slash (/). Run the installer again with a valid value and try accessing Magento afterward.

   To restart Apache:

   *  Ubuntu: `service apache2 restart`
   *  CentOS: `service httpd restart`
