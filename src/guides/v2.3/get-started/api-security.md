---
group: web-api
title: API security
functional_areas:
  - Integration
---

This topic describes best practices for [API security](https://owasp.org/www-project-api-security/).

## Input limiting

Imposing restrictions on the size and number of resources that a user can request through an API can help mitigate denial-of-service (DoS) vulnerabilities. By default, the following built-in API rate limiting is available:

-  REST requests containing inputs that represent a list of entities. When enabled, the default maximum is 20 for synchronous requests and 5,000 for asynchronous requests.
-  REST and GraphQL queries that allow paginated results can be limited to a maximum number of items per page. When enabled, the default maximum is 300.
-  REST queries that allow paginated results can have a default number of items per page imposed. When enabled, the default maximum is 20.

By default, these input limits are disabled, but you can use the following methods to enable them:

-  Set the values in the [Admin](https://docs.magento.com/user-guide/configuration/services/magento-web-api.html).
-  Run the [`bin/magento config:set` command]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html#config-cli-config-set).
-  Add entries to the [`env.php` file]({{ page.baseurl }}/config-guide/prod/config-reference-configphp.html#system).
-  Set [environment variables]({{ page.baseurl }}/config-guide/deployment/pipeline/example/environment-variables.html).

When input limiting has been enabled, the system uses the default value for each limitation listed above. You can also configure custom values.

Although some simple examples for configuring these values from the CLI are provided below, all of the values can be [configured per website and per store view]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html#config-cli-config-set) in addition to being configurable globally. In addition, these values can also be configured [via `env.php`]({{ page.baseurl }}/config-guide/prod/config-reference-configphp.html#system)
as well as via [environment variables]({{ page.baseurl }}/config-guide/deployment/pipeline/example/environment-variables.html).

{:.bs-callout-info}
In addition, the Admin provides a configuration setting for limiting session sizes for Admin users and storefront visitors.

### Enable the input limiting system

To enable these input limiting features from the Admin, go to **Stores** > Settings > **Configuration** > **Services** > **Web Api Limits** or **GraphQL Input Limits** and set **Enable Input Limits** to **Yes**.

To enable with the CLI, run one or both of the following commands:

```bash
bin/magento config:set webapi/validation/input_limit_enabled 1
```

```bash
bin/magento config:set graphql/validation/input_limit_enabled 1
```

### Maximum parameter inputs

The `EntityArrayValidator` class constructor limits the number of objects that can be given to inputs that represent arrays of objects. For example, the `PUT /V1/guest-carts/{cartId}/collect-totals` endpoint contains the input parameter `additionalData->extension_attributes->gift_messages`, which represents a list of gift message information objects.

There are four possible input arrays:

-  `additional_data`
-  `agreement_ids`
-  `gift_messages`
-  `custom_attributes`

```json
{
  "paymentMethod": {
    "po_number": "string",
    "method": "string",
    "additional_data": [
      "string"
    ],
    "extension_attributes": {
      "agreement_ids": [
        "string"
      ]
    }
  },
  "shippingCarrierCode": "string",
  "shippingMethodCode": "string",
  "additionalData": {
    "extension_attributes": {
      "gift_messages": [
        {
          "gift_message_id": 0,
          "customer_id": 0,
          "sender": "string",
          "recipient": "string",
          "message": "string",
          "extension_attributes": {
            "entity_id": "string",
            "entity_type": "string",
            "wrapping_id": 0,
            "wrapping_allow_gift_receipt": true,
            "wrapping_add_printed_card": true
          }
        }
      ]
    },
    "custom_attributes": [
      {
        "attribute_code": "string",
        "value": "string"
      }
    ]
  }
}
```

By default, any one of these arrays can include up to 20 items, but you can change this value in the configuration UI via **Stores** > Settings > **Configuration** > **Services** > **Web API Input Limits** > **Input List Limit** or via CLI using the `webapi/validation/complex_array_limit` configuration path.

### Input limit for REST endpoints

Some REST endpoints can contain a high number of elements, and developers need a way to set the limit for each endpoint. The limit for a specific REST endpoint can be set in the `webapi.xml` configuration file for synchronous requests and `webapi_async.xml` for asynchronous requests.
To do this, assign a value for the `<data input-array-size-limit/>` attribute within a `<route>` definition. The value for `input-array-size-limit` must be a non-negative integer.

The following example sets the input limit for the `/V1/some-custom-route` route.
If the route works synchronously, open the `<module_dir>/etc/webapi.xml` configuration file. Otherwise, open `<module_dir>/etc/webapi_async.xml`.
Add the `data` tag with the `input-array-size-limit` attribute to the route configuration. 

```xml
<?xml version="1.0"?>
<!--
Some custom module
-->
<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <route url="/V1/some-custom-route" method="POST">
        <service class="Vendor\Module\Api\EntityRepositoryInterface" method="save"/>
        <resources>
            <resource ref="Vendor_Entity::entities" />
        </resources>
        <data input-array-size-limit="5" /> <!--  limit only for route `/V1/some-custom-route`  -->
    </route>
</routes>
```

Clear the configuration cache for the changes to take effect.

```bash
bin/magento cache:clear config
```

### Values by default for REST endpoints

If you need to change the default limits for REST endpoints, then edit the `webapi` section of the `<magento_root>/app/etc/env.php` file as follows:
```conf
[
//...
    'webapi' => [
        'sync' => [
            'default_input_array_size_limit' => <non-negative value>, //overrides values for synchronous REST endpoints
        ],
        'async' => [
            'default_input_array_size_limit' => <non-negative value>, //overrides values for asynchronous REST endpoints
        ],
    ]
//...
];
```

### Maximum page size

The maximum page size setting controls the pagination of various web API responses. By default, the maximum value is `300`. You can change the default in the Admin by selecting **Stores** > Settings > **Configuration** > **Services** > **Web API Input Limits** or **GraphQl Input Limits** >  **Maximum Page Size** field.

[GraphQL security configuration]({{page.baseurl}}/graphql/security-configuration.html) describes how to set the maximum page size in GraphQL.

### Default page size

The Default Page Size setting controls the pagination of various web API responses. You can change the default value of `20` in the Admin by selecting **Stores** > Settings > **Configuration** > **Services** > **Web API Input Limits** > **Default Page Size**. To change the value from the CLI, run the following command:

```shell
bin/magento config:set webapi/validation/default_page_size 30
```
