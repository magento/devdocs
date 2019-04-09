---
title: Check the Magento version
---

There are the next ways how to get a version of Magento store:
 - through command line
 - through HTTP GET request
 - from Magento backend (admin account is required)
 - from `composer.lock` file
 
#### Command line
The command below returns a full Magento version.

**Command**
```text  
php bin/magento --version
```

**Response**
```text
Magento CLI version 2.3.0
```

#### HTTP GET request
HTTP request allows to get a short information about Magento version.

**Request**
```text
http://<magento2-store>/magento_version
```

**Response**
```text
Magento/2.3 (Community)
```

#### Magento backend

Login as a registered admin user into back-end side of your Magento store. Then go to the bottom of the page. Magento version will be displayed in the right corner above "Account Activity" and "Report an Issue" links:

![Check the Magento version]({{ page.baseurl }}/extension-dev-guide/images/version.png)

#### File `composer.lock`
Please note that Magento reads current version from the `composer.lock` file that locates in the root of the store. If you want to get Magento version from this file then make search for `magento/product-community-edition` (if you use community edition) or `magento/product-enterprise-edition` (if you use commerce version):

```json
  {
              "name": "magento/product-community-edition",
              "version": "2.3.0",
```
