---
group: php-developer-guide
title: Check the Magento version
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use any of the following ways to determine which version of Magento is installed:

-  From the command line
-  With an HTTP GET request
-  From within the Magento Admin
-  By viewing the `composer.lock` file

## Command line

The following command returns the Magento version.

**Command:**

```bash
bin/magento --version
```

**Response:**

```terminal
Magento CLI version 2.3.0
```

## HTTP GET request

An HTTP request returns less detailed information about the Magento version.

**Request:**

```text
http://<magento2-store>/magento_version
```

**Response:**

```text
Magento/2.3 (Community)
```

## Magento Admin

Login to Magento as a registered Admin user. The Magento version is displayed at the bottom right of the page, above the  **Account Activity** and **Report an Issue** links:

![Check the Magento version]({{ page.baseurl }}/extension-dev-guide/images/version.png)

## The `composer.lock` file

If Magento was installed using the `composer install` command, you can search the `<Magento_root>/composer.lock` file for `magento/product-community-edition` or `magento/product-enterprise-edition`, depending on which version of Magento is installed.

```json
  {
    "name": "magento/product-community-edition",
    "version": "2.3.2",
```
