---
layout: default
group: rest
subgroup: A_rest
title: REST API Reference
menu_title: REST API Reference
menu_order: 1
menu_node: parent
github_link: rest/bk-rest.md
redirect_from: /guides/v1.0/rest/bk-rest.html
---

The REST API documentation can be accessed by [clicking here](http://devdocs.magento.com/swagger/index.html). This documentation describes the REST APIs that are available on Magento 2.0 Community Edition. 

The REST documentation is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build. However, the REST API documentation is static in that the Magento Developers website is not running an instance of Magento 2.0 Community Edition. The **Try Me** button displayed on each API screen will not return real results.

If you install Swagger UI on your server, then you can generate live REST API documentation. Use the following link to generate a JSON schema that includes third-party modules and extension attributes that have been installed on your system. 

`http://<magento_host>/rest/default/schema`

Then save the schema file and load it into your Swagger UI instance.

See <a href="{{ site.gdeurl }}/rest/rest_endpoints.html">REST schema endpoints</a> for a list of available services.
