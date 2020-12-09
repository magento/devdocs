---
group: graphql
title: clearCustomerCart mutation
b2b_only: true
contributor_name: EY
---
The `clearCustomerCart` mutation clears the customer's cart.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

## Syntax

```graphql
mutation {
  clearCustomerCart(
    cartUid: String!
  ) {
    ClearCustomerCartOutput
  }
}
```

## Example usage

The following example adds products to requisition list.

**Request:**

``` graphql
mutation {
  clearCustomerCart(
      cartUid: "1"
    ) {
        status
    }
}
```

**Response:**

``` json
{
  "data": {
    "clearCustomerCart": {
        "status": "true"
    }
  }
}
```

## Input attributes

The `clearCustomerCart` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`cartUid`| String! | Indicates whether cart was cleared

## Output attributes

The `clearCustomerCart` object returns the status and cart object.

Attribute |  Data Type | Description
--- | --- | ---
`status` | Boolean! | The requisition list after the items were added
`cart` | [Cart](#CartObject) | The cart after clearing items

### Cart object {#CartObject}

The `Cart` object can contain the following attributes.

{% include graphql/cart-object-24.md %}