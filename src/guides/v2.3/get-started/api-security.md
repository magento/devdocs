---
group: web-api
title: API security
functional_areas:
- Integration
---

This topic describes best practices for [API security](https://owasp.org/www-project-api-security/).

## Input limiting

Imposing restrictions on the size and number of resources that a user can request through an API can help mitigate denial-of-service (DoS) vulnerabilities. By default, the following built-in API rate limiting is available:

-  REST requests containing inputs representing a list of entities. When enabled, the default maximum is 20
-  REST and GraphQL queries that allow paginated results can be limited maximum number of items per page. When enabled, the default maximum is 300
-  REST queries that allow paginated results can have a default number of items per page imposed, When enabled, the default maximum is 20

By default, these input limits are disabled but can be enabled via admin UI system configuration and also via the command line.

Please note that while there are some simple examples for configuring these values via CLI below, all of the values can be [configured per website and per store view]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html#config-cli-config-set) in additional to being configurable globally. for more details. In addition, these values can also be configure [via `env.php`]({{ page.baseurl }}
/config-guide/prod/config-reference-configphp.html#system) as well as via [environment variables]({{ page.baseurl }}/config-guide/deployment/pipeline/example/environment-variables.html).

{:.bs-callout-info}
In addition, the Admin provides a configuration setting for limiting session sizes for Admin users and storefront visitors.

### Enabling the input limiting system

To enable these input limiting features via admin UI, go to `Stores -> Configuration -> Services` and set `Enable Input Limits` to `Yes` under `GraphQl Input Limits` and/or `Web Api Input Limits`.

Or to enable via CLI, you can run

```shell
bin/magento config:set webapi/validation/input_limit_enabled 1
```

Once input limiting has been enabled, the default values for each limitation listed above will be used unless more specific limits are configured (such as via admin UI or CLI). However, you can also customize the default limits programmatically using [class constructor arguments]({{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html).

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

By default, any one of these arrays can include up to 20 items, but you can change this value in the configuration UI via `Stores -> Configuration -> Services -> Web API Input Limits -> Input List Limit` or via CLI using the `webapi/validation/complex_array_limit` configuration path.

### Maximum page size

The `SearchCriteriaValidator` class constructor limits the maximum page size, which controls the pagination of various web API responses. By default, the maximum value is `300`. You can change the default in the configuration UI via `Stores -> Configuration -> Services` in the `Maximum Page Size` field under `Web API Input Limits` and/or `GraphQl Input Limits`. Or via CLI using either the `webapi/validation/complex_array_limit` or `graphql/validation/maximum_page_size` configuration path.

[GraphQL security configuration]({{page.baseurl}}/graphql/security-configuration.html) describes how to set the maximum page size in GraphQL.

### Default page size

The `ServiceInputProcessor` class constructor defines the default page size, which controls the pagination of various web API responses. You can change the default value of `20` in the configuration UI via `Stores -> Configuration -> Services -> Web API Input Limits -> Default Page Size` or via CLI using the `webapi/validation/default_page_size` configuration path.
