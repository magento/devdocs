---
group: php-developer-guide
title: Set custom routes
contributor_name: Comwrap GmbH
contributor_link: https://www.comwrap.com
functional_areas:
  - Configuration
---

You can configure REST endpoints in your module to use custom routes (aliases) for URLs instead of the default URLs. For example, you can define the alias `createWidget` to represent `POST V1/widgets`. However, you cannot create an alias for a route that contains one or more variables, such as `PUT V1/widgets/:widgetId`.

To define custom routes, create an `etc/webapi_async.xml` file in your module that contains the following structure:

```xml
<services xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_WebapiAsync:etc/webapi_async.xsd">
    <route url="V1/widgets" method="POST" alias="createWidget" />
    <route url="async/bulk/V1/widget" method="PUT" alias="asyncBulkUpdateWidgets"/>
    .........
</services>
```

This example redefines two routes:

*  All requests made on endpoint `POST /createWidget` will be forwarded to `POST V1/widgets`
*  All requests made on endpoint `PUT /asyncBulkUpdateWidgets` will be forwarded to `PUT async/bulk/V1/widget`

The following table defines the `route` node attributes:

Attribute name | Required | Description
--- | --- | ---
`url` | Yes | An existing REST endpoint. The route can be defined in the module's `webapi.xml` file, or derived, such as those for asynchronous and bulk endpoints.
`method` | Yes | The HTTP request method. One of `GET`, `PUT`, `POST` or `DELETE`.
`alias` | Yes | A string that defines the custom route for the route defined in `url`.
