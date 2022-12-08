---
group: graphql
title: createCompareList mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/mutations/create-compare-list/
layout: migrated
---

The `createCompareList` mutation creates a new comparison list with products specified in the `input` attribute.

Luma uses a widget to display the product name, price, and other information. To present this information without a widget, set the product attributes to be comparable at **Stores** > Attributes > **Product** > <attribute name> > **Storefront Properties** > **Comparable on Storefront**.

## Syntax

```graphql
mutation {
    createCompareList(
        input: CreateCompareListInput
    ) {
        CompareList
    }
}
```

## Example usage

The following example shows how to create a comparison list containing two products.

**Request:**

```graphql
mutation {
    createCompareList(
        input: {
            products: ["1", "2"]
        }
    ) {
        uid
        item_count
        attributes {
            code
            label
        }
        items {
            uid
            product {
                sku
                name
                description {
                    html
                }
            }
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "createCompareList": {
      "uid": "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",
      "item_count": 2,
      "attributes": [
        {
          "code": "sku",
          "label": "SKU"
        },
        {
          "code": "description",
          "label": "Description"
        },
        {
          "code": "short_description",
          "label": "Short Description"
        },
        {
          "code": "activity",
          "label": "Activity"
        }
      ],
      "items": [
        {
          "uid": "1",
          "product": {
            "sku": "24-MB01",
            "name": "Joust Duffle Bag",
            "description": {
              "html": "<p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it's ideal for athletes with places to go.<p>\n<ul>\n<li>Dual top handles.</li>\n<li>Adjustable shoulder strap.</li>\n<li>Full-length zipper.</li>\n<li>L 29\" x W 13\" x H 11\".</li>\n</ul>"
            }
          }
        },
        {
          "uid": "2",
          "product": {
            "sku": "24-MB04",
            "name": "Strive Shoulder Pack",
            "description": {
              "html": "<p>Convenience is next to nothing when your day is crammed with action. So whether you're heading to class, gym, or the unbeaten path, make sure you've got your Strive Shoulder Pack stuffed with all your essentials, and extras as well.</p>\n<ul>\n<li>Zippered main compartment.</li>\n<li>Front zippered pocket.</li>\n<li>Side mesh pocket.</li>\n<li>Cell phone pocket on strap.</li>\n<li>Adjustable shoulder strap and top carry handle.</li>\n</ul>"
            }
          }
        }
      ]
    }
  }
}
```

## Input attributes

The `CreateCompareListInput` input object defines the product IDs for to be compared.

### CreateCompareListInput attributes {#CreateCompareListInput}

The `CreateCompareListInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`products` | [ID!] | An array of product `id` values to add to the comparison list. Note that these are not `uid` values

## Output attributes

The `CompareList` output object contains the following attributes:

{% include graphql/compare-list-output.md %}

## Related topics

*  [compareList query]({{page.baseurl}}/graphql/queries/compare-list.html)
*  [addProductsToCompareList mutation]({{page.baseurl}}/graphql/mutations/add-products-to-compare-list.html)
*  [assignCompareListToCustomer mutation]({{page.baseurl}}/graphql/mutations/assign-compare-list-to-customer.html)
*  [deleteCompareList mutation]({{page.baseurl}}/graphql/mutations/delete-compare-list.html)
*  [removeProductsFromCompareList mutation]({{page.baseurl}}/graphql/mutations/remove-products-from-compare-list.html)
