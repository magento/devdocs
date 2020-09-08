---
group: graphql
title: redeemGiftCardBalanceAsStoreCredit mutation
ee_only: True
---

The `redeemGiftCardBalanceAsStoreCredit` mutation converts the entire balance of a gift card to store credit. The gift card must be redeemable and cannot have a balance of 0 at the time you run the mutation. After successfully running the mutation, the value of the gift card changes to 0.

{:.bs-callout .bs-callout-info}
Run this mutation on behalf of logged-in customers only. [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) describes how to send a request as a customer.

## Syntax

```graphql
mutation {
  redeemGiftCardBalanceAsStoreCredit(
    input: GiftCardAccountInput
  ) {
    GiftCardAccount
  }
}
```

## Example usage

The following example redeems the gift card with code `“056MHP57TJ5C”`.

**Request:**

```graphql
mutation {
  redeemGiftCardBalanceAsStoreCredit(
    input: {
      gift_card_code: "056MHP57TJ5C"
    }
  ) {
    balance {
      currency
      value
    }
    code
    expiration_date
  }
}
```

**Response:**

```json
{
  "data": {
    "redeemGiftCardBalanceAsStoreCredit": {
      "balance": {
        "currency": "USD",
        "value": 0
      },
      "code": "056MHP57TJ5C",
      "expiration_date": null
    }
  }
}
```

## Input attributes

### GiftCardAccountInput object {#GiftCardAccountInput}

The `GiftCardAccountInput` object must contain the following attribute:

Attribute | Data Type | Description
--- | --- | ---
`gift_card_code` | String! | The gift card code

## Output attributes

The `GiftCardAccount` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`balance` | Money | The remaining balance of the gift card, including the currency
`code` | String | The gift card code
`expiration_date` | String | The date when the gift card expires, if any