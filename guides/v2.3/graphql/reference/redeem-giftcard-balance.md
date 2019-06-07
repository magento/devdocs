---
group: graphql
title: redeemGiftCardBalanceAsStoreCredit mutation
ee_only: True
---

The `redeemGiftCardBalanceAsStoreCredit` mutation converts the entire balance of a gift card to store credit. As a result, the remaining balance on the gift card is 0.

{:.bs-callout .bs-callout-info}
Run this mutation on behalf of logged-in customers only.

## Syntax

 `mutation: redeemGiftCardBalanceAsStoreCredit(input: GiftCardAccountInput): GiftCardAccount`

## Example usage

The following example redeems the gift card with code `BFR1345Q05`.

**Request**

``` text
mutation {
  redeemGiftCardBalanceAsStoreCredit(
    input: {
      gift_card_code: "BFR1345Q05"
    }
  ) {
    GiftCardAccount {
      balance {
        currency
        value
      }
      code
      expiration_date
      }
    }
  }
}
```

**Response**

```json
{
  "GiftCardAccount": {
    "code": "BFR1345Q05",
    "balance": {
      "currency": "USD",
      "value": 0
    },
    "expiration_date": ""
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