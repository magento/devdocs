---
group: graphql
title: addProductsToCompareList mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/mutations/add-products-to-compare-list/
status: migrated
---

The `addProductsToCompareList` mutation adds products to the comparison list.

You must specify the unique ID of the comparison list as well as a list of product IDs to be added to the comparison list.

## Syntax

```graphql
mutation {
    addProductsToCompareList(
        input: AddProductsToCompareListInput
    ) {
        CompareList
    }
}
```

## Example usage

The following example shows how to add two products to the existing comparison list with the `uid` value of `sssXyGZkTFksdPnxNoK1ut6OiV4bbchD`.

**Request:**

```graphql
mutation {
  addProductsToCompareList(
    input: {
      uid: "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",
      products: ["3", "4"]
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
    "addProductsToCompareList": {
      "uid": "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",
      "item_count": 4,
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
        },
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

The `AddProductsToCompareListInput` input object defines the product IDs to be compared within an existing comparison list.

### AddProductsToCompareListInput attributes {#addProductsToCompareListInput}

The `AddProductsToCompareListInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`products` | [ID!]! | An array of product `id` values to add to the comparison list. Note that these are not `uid` values
`uid` | ID! | The unique ID of a `CompareList` object

## Output attributes

The `CompareList` output object contains the following attribute:

{% include graphql/compare-list-output.md %}

## Related topics

*  [compareList query]({{page.baseurl}}/graphql/queries/compare-list.html)
*  [assignCompareListToCustomer mutation]({{page.baseurl}}/graphql/mutations/assign-compare-list-to-customer.html)
*  [createCompareList mutation]({{page.baseurl}}/graphql/mutations/create-compare-list.html)
*  [deleteCompareList mutation]({{page.baseurl}}/graphql/mutations/delete-compare-list.html)
*  [removeProductsFromCompareList mutation]({{page.baseurl}}/graphql/mutations/remove-products-from-compare-list.html)
