---
layout: default
group: rest
subgroup: A_rest
title: Generate local REST API reference
menu_title: Generate local API reference
menu_order: 5
version: 2.0
github_link: rest/generate-local.md

---

The REST documentation is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build of Magento 2.0 Community Edition. However, the REST API documentation is static in that the Magento Developers website is not running an instance of Magento.

If you install Swagger UI on your server, then you can generate live REST API documentation. Use the following link to generate a JSON schema that includes third-party modules and extension attributes that have been installed on your system. 

`http://<magento_host>/rest/default/schema`

Then save the schema file and load it into your Swagger UI instance.
