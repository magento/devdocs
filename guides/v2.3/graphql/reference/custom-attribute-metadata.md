---
group: graphql
title: CustomAttributeMetadata endpoint
version: 2.3
github_link: graphql/reference/custom-attribute-metadata.md
---

The `customAttributeMetadata` endpoint returns the attribute type, given an attribute code and entity type. All entity attributes can be added to an equivalent GraphQL type, including custom, extension, and EAV (which have precedence set in that order for collisions). The ability to know the type of attribute a given field is obscured from the GraphQL query consumer.


## Example usage

The following query returns the attribute type for various custom and EAV attributes.

**Request**

{% highlight json %}
{
  customAttributeMetadata(attributes:
  [
    {
      attribute_code: "available_sort_by",
      entity_type: "catalog_category"
    },
    {
      attribute_code: "quantity_and_stock_status",
      entity_type: "catalog_product"
    },
    {
      attribute_code: "default_billing",
      entity_type: "customer"
    },
    {
     attribute_code: "region"
     entity_type: "customer_address"
    },
    {
      attribute_code: "media_gallery",
      entity_type: "catalog_product"
    }
  ]
  )
  {
    items
    {
      attribute_code
      entity_type
      attribute_type
    }
  }
 }
 {% endhighlight %}

The key you're storing EAV attributes under
**Response**

{% highlight json %}
{
  "data": {
    "customAttributeMetadata": {
      "items": [
        {
          "attribute_code": "available_sort_by",
          "entity_type": "catalog_category",
          "attribute_type": "EavDataAttributeOptionInterface"
        },
        {
          "attribute_code": "quantity_and_stock_status",
          "entity_type": "catalog_product",
          "attribute_type": "CatalogInventoryDataStockItemInterface[]"
        },
        {
          "attribute_code": "default_billing",
          "entity_type": "customer",
          "attribute_type": "CustomerDataAddressInterface"
        },
        {
          "attribute_code": "region",
          "entity_type": "customer_address",
          "attribute_type": "CustomerDataRegionInterface"
        },
        {
          "attribute_code": "media_gallery",
          "entity_type": "catalog_product",
          "attribute_type": "ProductMediaGallery"
        }
      ]
    }
  }
}
{% endhighlight %}


## Supported attributes

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
`attribute_type` | String | The data type of the attribute (Response only)
`entity_type` | String | The type of entity that defines the attribute
