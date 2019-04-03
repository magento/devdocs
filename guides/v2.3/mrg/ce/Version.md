---
title: Magento_Version module
---

`Magento\Version` allows to get Magento version and edition by HTTP GET request.

**Request**
```text
http://<magento2-store>/magento_version
```

**Response**
```text
Magento/2.3 (Community)
```

Run the command below to get a full Magento version.

**Command**
```text  
php bin/magento --version
```

**Response**
```text
Magento CLI version 2.3.0
```

Please not that Magento reads current version from the `composer.lock` file that locates in the root of the store. If you want to get Magento version from this file then make search for `magento/product-community-edition` (if you use community edition) or `magento/product-enterprise-edition` (if you use commerce version):
```json
  {
              "name": "magento/product-community-edition",
              "version": "2.3.0",
```
