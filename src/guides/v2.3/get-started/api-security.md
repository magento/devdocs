---
group: web-api
title: API security
functional_areas:
  - Integration
---

This topic describes best practices for [API security](https://owasp.org/www-project-api-security/).

## Rate limiting

Imposing restrictions on the size and number of resources that a user can request through an API can help mitigate denial-of-service (DoS) vulnerabilities. By default, the following built-in API rate limiting is available:

-  REST requests containing inputs representing a list of entities are limited to a default maximum of 20 entities
-  REST and GraphQL queries that allow paginated results are limited to a default maximum of 300 items per page

{:.bs-callout-info}
In addition, the Admin provides a configuration setting for limiting session sizes for Admin users and storefront visitors.

You can customize the default limits programmatically using [class constructor arguments]({{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html).

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

By default, any one of these arrays can include up to 20 items, but you can override the default by specifying a new value for the `complexArrayItemLimit` argument in the `EntityArrayValidator` class constructor inside your module's `di.xml` file.

The `EntityArrayValidator` class constructor restricts the number of inputs allowed to this parameter. By default, the maximum value is `20`. You can change the default in your module's `di.xml` file. The following example changes the limit to `30`:

```xml
<type name="Magento\Framework\Webapi\Validator\EntityArrayValidator">
    <arguments>
        <argument name="complexArrayItemLimit" xsi:type="number">30</argument>
    </arguments>
</type>
```

### Maximum page size

The `SearchCriteriaValidator` class constructor limits the maximum page size, which controls the pagination of various web API responses. By default, the maximum value is `300`. You can change the default in your module's `di.xml` file. The following example changes the limit to `200`:

```xml
<type name="Magento\Framework\Webapi\Validator\SearchCriteriaValidator">
    <arguments>
        <argument name="maximumPageSize" xsi:type="number">200</argument>
    </arguments>
</type>
```

[GraphQL security configuration]({{page.baseurl}}/graphql/security-configuration.html) describes how to set the maximum page size in GraphQL.

### Default page size

The `ServiceInputProcessor` class constructor defines the default page size, which controls the pagination of various web API responses. You can change the default value of `20` in your custom module's `di.xml` file. The following example changes the default page size to `25`:

```xml
<type name="Magento\Framework\Webapi\ServiceInputProcessor">
    <arguments>
        <argument name="defaultPageSize" xsi:type="number">25</argument>
    </arguments>
</type>
```
