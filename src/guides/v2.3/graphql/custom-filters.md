---
group: graphql
title: Filtering with custom attributes
---

As of Magento 2.3.4, the `filter` attribute of the [`products`]({{page.baseurl}}/graphql/queries/products.html) query accepts the `ProductAttributeFilterInput` object. (In previous versions, the `filter` attribute required a `ProductFilterInput` object. This object contained a hard-coded list of filterable attributes, and you could not filter on a custom attribute or any other attribute that was not on the list.)

## Prerequisites

To enable a custom attribute (or any attribute that is not listed by default in the `ProductAttributeFilterInput` object) for filtering, select the attribute on the **Stores** > Attributes > **Product** page in the Admin and edit the following fields:

Field | Setting
--- | ---
**Use in Search** | Yes
**Visible in Advanced Search** | Yes
**Use in Layered Navigation** | Filterable (with results) or Filterable (no results)
**Use in Search Results Layered Navigation** | Yes

## Define the filter for your query

The [`filter`]({{page.baseurl}}/graphql/queries/products.html#ProductFilterInput) definition for your custom attribute requires one of the following input data types:

-  `FilterEqualTypeInput` - Specify this data type when the **Catalog Input Type for Store Owner** field for your custom attribute is set to Yes/No, Select, or Multiple select. Your filter can contain the `eq` or `in` attribute. Use the `eq` attribute to exactly match the specified string. Use the `in` attribute to filter on a comma-separated list of values.
-  `FilterMatchTypeInput` - Specify this data type when the the **Catalog Input Type for Store Owner** field for your custom attribute is set to Text Field or Text Area. Your filter must contain the `match` attribute, which will return all items that exactly match the specified string.
-  `FilterRangeTypeInput` - Specify this data type when the the **Catalog Input Type for Store Owner** field for your custom attribute is set to Price or Date. Your filter can contain one or both of the `to` and `from` attributes, which serve to provide a range of values to filter on.

## Example

In this example, the custom attribute `volume` was assigned to the `bags` attribute group. Running the [`customAttributeMetadata` query]({{page.baseurl}}/graphql/queries/custom-attribute-metadata.html) on this custom attribute reveals that the `label` and `value` values for the attribute's options are as follows:

`label` | `value`
--- | ---
`Large` | `216`
`Medium` | `217`
`Small` | `218`

In this scenario, a `products` search filtered to return items where the `volume` attribute is set to `Large` would be similar to the following:

**Request:**

```graphql
{
  products(filter: { volume: { eq: "216" } }) {
    total_count
    items {
      name
      sku
    }
  }
}
```

**Response:**

The response might be similar to the following:

```json
{
  "data": {
    "products": {
      "total_count": 1,
      "items": [
        {
          "name": "Wayfarer Messenger Bag",
          "sku": "24-MB05"
        }
      ]
    }
  }
}
```

## Output attributes

When a product requires a filter attribute that is not a field on its output schema, inject the attribute name into the class in a module's `di.xml` file.

```xml
<type name="Magento\CatalogGraphQl\Model\Resolver\Products\FilterArgument\ProductEntityAttributesForAst" >
  <arguments>
    <argument name="additionalAttributes" xsi:type="array">
      <item name="field_to_sort" xsi:type="string">field</item>
      <item name="other_field_to_sort" xsi:type="string">other_field</item>
    </argument>
  </arguments>
</type>
```

This example adds `field_to_sort` and `other_field_to_sort` attributes to the `additionalAttributes` array defined in the `ProductEntityAttributesForAst` class. The array already contains the `min_price`, `max_price`, and `category_ids` attributes.
