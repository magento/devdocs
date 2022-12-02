---
group: graphql
title: compareList query
contributor_name: Atwix
contributor_link: https://www.atwix.com/
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/queries/compare-list/
layout: migrated
---

The `compareList` query retrieves information about a list of products so that the shopper can compare those products.

## Syntax

```graphql
compareList(
    uid: ID!
): CompareList
```

## Example usage

The following query returns the information about products in the comparison list with the unique ID of "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD":

**Request:**

```graphql
{
    compareList(
        uid: "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD"
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
    "compareList": {
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
          "uid": "3",
          "product": {
            "sku": "24-MB03",
            "name": "Crown Summit Backpack",
            "description": {
              "html": "<p>The Crown Summit Backpack is equally at home in a gym locker, study cube or a pup tent, so be sure yours is packed with books, a bag lunch, water bottles, yoga block, laptop, or whatever else you want in hand. Rugged enough for day hikes and camping trips, it has two large zippered compartments and padded, adjustable shoulder straps.</p>\n<ul>\n<li>Top handle.</li>\n<li>Grommet holes.</li>\n<li>Two-way zippers.</li>\n<li>H 20\" x W 14\" x D 12\".</li>\n<li>Weight: 2 lbs, 8 oz. Volume: 29 L.</li>\n<ul>"
            }
          }
        },
        {
          "uid": "4",
          "product": {
            "sku": "24-MB05",
            "name": "Wayfarer Messenger Bag",
            "description": {
              "html": "<p>Perfect for class, work or the gym, the Wayfarer Messenger Bag is packed with pockets. The dual-buckle flap closure reveals an organizational panel, and the roomy main compartment has spaces for your laptop and a change of clothes. An adjustable shoulder strap and easy-grip handle promise easy carrying.</p>\n<ul>\n<li>Multiple internal zip pockets.</li>\n<li>Made of durable nylon.</li>\n</ul>"
            }
          }
        }
      ]
    }
  }
}
```

## Input attributes

The `compareList` query requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID of the comparison list

## Output attributes

The `CompareList` output object contains the following attributes:

{% include graphql/compare-list-output.md %}

## Related topics

*  [addProductsToCompareList mutation]({{page.baseurl}}/graphql/mutations/add-products-to-compare-list.html)
*  [assignCompareListToCustomer mutation]({{page.baseurl}}/graphql/mutations/assign-compare-list-to-customer.html)
*  [createCompareList mutation]({{page.baseurl}}/graphql/mutations/create-compare-list.html)
*  [deleteCompareList mutation]({{page.baseurl}}/graphql/mutations/delete-compare-list.html)
*  [removeProductsFromCompareList mutation]({{page.baseurl}}/graphql/mutations/remove-products-from-compare-list.html)
