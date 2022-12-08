---
group: graphql
title: customAttributeMetadata query
redirect_from:
  - /guides/v2.3/graphql/reference/custom-attribute-metadata.html
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/custom-attribute-metadata/
layout: migrated
---

The `customAttributeMetadata` query returns the attribute type, given an attribute code and entity type. All entity attributes can be added to an equivalent GraphQL type, including custom, extension, and EAV (which have precedence set in that order for collisions). The GraphQL query consumer does not have the ability to know a field's attribute type.

## Syntax

`customAttributeMetadata(attributes: [AttributeInput!]!): CustomAttributeMetadata`

## Example usage

The following query returns the attribute type for various custom and EAV attributes.

**Request:**

```graphql
{
  customAttributeMetadata(
    attributes: [
      {
        attribute_code: "size"
        entity_type: "catalog_product"
      }
      {
        attribute_code: "color"
        entity_type: "catalog_product"
      }
    ]
  ) {
    items {
      attribute_code
      attribute_type
      entity_type
      input_type
      attribute_options {
       value
       label
     }
      storefront_properties {
        use_in_product_listing
        use_in_layered_navigation
        use_in_search_results_layered_navigation
        visible_on_catalog_pages
        position
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customAttributeMetadata": {
      "items": [
        {
          "attribute_code": "size",
          "attribute_type": "Int",
          "entity_type": "catalog_product",
          "input_type": "select",
          "attribute_options": [
            {
              "value": "91",
              "label": "55 cm"
            },
            {
              "value": "166",
              "label": "XS"
            },
            {
              "value": "92",
              "label": "65 cm"
            },
            {
              "value": "167",
              "label": "S"
            },
            {
              "value": "93",
              "label": "75 cm"
            },
            {
              "value": "168",
              "label": "M"
            },
            {
              "value": "94",
              "label": "6 foot"
            },
            {
              "value": "169",
              "label": "L"
            },
            {
              "value": "95",
              "label": "8 foot"
            },
            {
              "value": "170",
              "label": "XL"
            },
            {
              "value": "96",
              "label": "10 foot"
            },
            {
              "value": "171",
              "label": "28"
            },
            {
              "value": "172",
              "label": "29"
            },
            {
              "value": "173",
              "label": "30"
            },
            {
              "value": "174",
              "label": "31"
            },
            {
              "value": "175",
              "label": "32"
            },
            {
              "value": "176",
              "label": "33"
            },
            {
              "value": "177",
              "label": "34"
            },
            {
              "value": "178",
              "label": "36"
            },
            {
              "value": "179",
              "label": "38"
            }
          ],
          "storefront_properties": {
            "use_in_product_listing": true,
            "use_in_layered_navigation": "FILTERABLE_WITH_RESULTS",
            "use_in_search_results_layered_navigation": false,
            "visible_on_catalog_pages": false,
            "position": 0
          }
        },
        {
          "attribute_code": "color",
          "attribute_type": "Int",
          "entity_type": "catalog_product",
          "input_type": "select",
          "attribute_options": [
            {
              "value": "49",
              "label": "Black"
            },
            {
              "value": "50",
              "label": "Blue"
            },
            {
              "value": "51",
              "label": "Brown"
            },
            {
              "value": "52",
              "label": "Gray"
            },
            {
              "value": "53",
              "label": "Green"
            },
            {
              "value": "54",
              "label": "Lavender"
            },
            {
              "value": "55",
              "label": "Multi"
            },
            {
              "value": "56",
              "label": "Orange"
            },
            {
              "value": "57",
              "label": "Purple"
            },
            {
              "value": "58",
              "label": "Red"
            },
            {
              "value": "59",
              "label": "White"
            },
            {
              "value": "60",
              "label": "Yellow"
            }
          ],
          "storefront_properties": {
            "use_in_product_listing": true,
            "use_in_layered_navigation": "FILTERABLE_WITH_RESULTS",
            "use_in_search_results_layered_navigation": false,
            "visible_on_catalog_pages": false,
            "position": 0
          }
        }
      ]
    }
  }
}
```

## Input attributes

The `AttributeInput` input object requires the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
`entity_type` | String | The type of entity that defines the attribute, such as `catalog_product`, `catalog_category`, or `customer`

## Output attributes

The `CustomAttributeMetadata` object contains the `items` attribute field, which returns an array of `Attribute` objects. The `Attribute` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
`attribute_options` | [`AttributeOption`] | An array of attribute options
`attribute_type` | String | The data type of the attribute
`entity_type` | String | The type of entity that defines the attribute, such as `catalog_product`, `catalog_category`, or `customer`
`input_type` | String | The frontend input type of the attribute
`storefront_properties` | [StorefrontProperties](#StorefrontProperties) | Contains details about the storefront properties configured for the attribute {#StorefrontProperties}

### AttributeOption object

The `AttributeOption` object contains the name and value of the option.

Attribute |  Data Type | Description
--- | --- | ---
`label` | String | The name of an attribute option
`value` | String | The value assigned to an attribute option

### StorefrontProperties object {#StorefrontProperties}

The `StorefrontProperties` object returns information about a product attribute. Storefront properties are configured in the Admin at **Stores** > Attributes > **Product** > <Attribute Name> > **Storefront Properties**.

Attribute |  Data Type | Description
--- | --- | ---
`position`| Int | The relative position of the attribute in the layered navigation block
`use_in_layered_navigation` | UseInLayeredNavigationOptions | Indicates whether the attribute is filterable with results, without results, or not at all
`use_in_product_listing` | Boolean | Indicates whether the attribute is displayed in product listings
`use_in_search_results_layered_navigation`| Boolean | Indicates whether the attribute can be used in layered navigation on search results pages
`visible_on_catalog_pages`| Boolean | Indicates whether the attribute is displayed on product pages

## Errors

Error | Description
--- | ---
`Field "customAttributeMetadata" argument "attributes" of type "[AttributeInput!]!" is required but not provided` | The `attributes` array parameter is required.
`The attribute with a "xxxx" attributeCode doesn't exist. Verify the attribute and try again` | The given `attribute_code` parameter is invalid.
`Invalid entity_type specified: "xxxx"` | The given `entity_type` is invalid.
`Missing attribute_code for the input entity_type: "xxxx"`| There is no value passed for the `attribute_code` parameter for the given `entity_type` parameter.
`Missing entity_type for the input attribute_code: "xxxx"` | There is no value passed for the `entity_type` parameter for the given `attribute_code` parameter.
`Missing attribute_code/entity_type for the input Empty AttributeInput` | There are no values passed for both `attribute_code` and `entity_type` parameters.