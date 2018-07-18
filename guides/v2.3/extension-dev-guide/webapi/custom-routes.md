---
group: extension-dev-guide/webapi
title: Custom Routes
contributor_name: Comwrap GmbH
contributor_link: https://www.comwrap.com
github_link: extension-dev-guide/webapi/custom-routes.md
functional_areas:
  - Configuration
---

## Custom Routes for REST API endpoints 

Route customisation for REST API endpoints allows to use custom aliases as route urls instead of default urls.
Developer is able to replace any default endpoint with his own alias by using XML configuration file.
 
All route customizations must be defined inside of configuration file `webapi_async.xml` by using `<route />` nodes.


### Example:

`<services xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_WebapiAsync:etc/webapi_async.xsd">
    <route url="V1/products" method="POST" alias="createProducts" />
    <route url="async/bulk/V1/cmsPage" method="PUT" alias="asyncBulkCmsPages"/>
    .........
</services>`

In current example we have two routes redefined:

* All requests made on endpoint `POST /createProducts` will be forwarded to `POST V1/products`
* All requests made on endpoint `PUT /asyncBulkCmsPages` will be forwarded to `PUT async/bulk/V1/cmsPage`

### Route node attributes

Attribute name | Required | Description
--- | --- | ---
`url` | yes | Existed REST API endpoint.
`method` | yes | HTTP request method. Take one of the following values: `GET`, `PUT`, `POST` or `DELETE`.
`alias` | yes | String, which will be used in REST request routes instead of `url`. Will point to route url of existed REST API service.  
