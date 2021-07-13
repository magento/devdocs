---
group: graphql
title: setNegotiableQuoteShippingAddresses mutation
b2b_only: true
---

The `setNegotiableQuoteShippingAddresses` mutation assigns a previously-defined address as the shipping address for the specified negotiable quote. If the company user needs to add a new shipping address, use the [`setShippingAddressesOnCart` mutation]({{page.baseurl}}/graphql/mutations/set-shipping-address.html) instead.

To return a list of valid shipping addresses, construct a [`company` query]({{page.baseurl}}/graphql/queries/) that includes the `user` input attribute.

This query requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
{
    setNegotiableQuoteShippingAddress(
        input: SetNegotiableQuoteShippingAddressInput!
    ): SetNegotiableQuoteShippingAddressOutput
}
```

## Example usage

The following example adds a predefined shipping address to a negotiable quote.

**Request:**

```graphql
mutation{
  setNegotiableQuoteShippingAddress(input: {customer_address_id: "Mg=="
  quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"}){
    quote {
      uid
      name
      buyer {
        firstname
        lastname
      }
      status
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setNegotiableQuoteShippingAddress": {
      "quote": {
        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
        "name": "April 22 request",
        "buyer": {
          "firstname": "Taina",
          "lastname": "Garofalo"
        },
        "status": "OPEN"
      }
    }
  }
}
```

## Input attributes

The `SetNegotiableQuoteShippingAddressInput` input object specifies the company user's cart ID and other information to identify a new negotiable quote.

### SetNegotiableQuoteShippingAddressInput attributes {#SetNegotiableQuoteShippingAddressInput}

The `SetNegotiableQuoteShippingAddressInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`customer_address_id` | ID! | The unique ID of a `CustomerAddress` object
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object

## Output attributes

The `SetNegotiableQuoteShippingAddressOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote | Contains details about the negotiable quote

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
