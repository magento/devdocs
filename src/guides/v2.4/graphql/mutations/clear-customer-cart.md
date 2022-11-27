---
group: graphql
title: clearCustomerCart mutation
b2b_only: true
contributor_name: EY
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/requisition-list/mutations/clear-customer-cart/
layout: migrated
---
The `clearCustomerCart` mutation clears the customer's cart.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

The following example clears the customer's cart.

**Request:**

``` graphql
mutation {
  clearCustomerCart(
      cartUid: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
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
`cartUid`| String! | The masked ID of the cart.

## Output attributes

The `clearCustomerCart` object returns the status and cart object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | [Cart](#CartObject) | The cart after clearing items.
`status` | Boolean! | Indicates whether cart was cleared.

### Cart object {#CartObject}

The `Cart` object can contain the following attributes.

{% include graphql/cart-object-24.md %}
