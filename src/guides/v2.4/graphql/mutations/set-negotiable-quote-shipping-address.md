---
group: graphql
title: setNegotiableQuoteShippingAddresses mutation
b2b_only: true
---

The `setNegotiableQuoteBillingAddresses` mutation assigns the shipping address for the specified negotiable quote. You can assign an address from the company user's address book, or define a new one.

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
  setNegotiableQuoteShippingAddress(input: 
    {
      customer_address_id: "Mg=="
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
    })
    {
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

The `SetNegotiableQuoteShippingAddressInput` input object specifies the company user's cart ID and one or more shipping addresses.

### SetNegotiableQuoteShippingAddressInput attributes {#SetNegotiableQuoteShippingAddressInput}

The `customer_address_id` field is deprecated. If you specify both the `customer_address_id` and `shipping_addresses` field, the system returns an error.

The `SetNegotiableQuoteShippingAddressInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`customer_address_id` | ID! | Deprecated. Use `NegotiableQuoteShippingAddressInput.customer_address_uid` instead. The unique ID of a `CustomerAddress` object
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object
`shipping_addresses` | [NegotiableQuoteShippingAddressInput!] | An array of shipping addresses to apply to the negotiable quote

### NegotiableQuoteShippingAddressInput {#NegotiableQuoteShippingAddressInput}

The `NegotiableQuoteShippingAddressInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`address` | NegotiableQuoteAddressInput | A shipping address
`customer_address_uid` | ID | An ID from the company user's address book that uniquely identifies the address to be used for shipping
`customer_notes` | String | Text provided by the company user

### NegotiableQuoteAddressInput {#NegotiableQuoteAddressInput}

{% include graphql/negotiable-quote-address-input.md %}

## Output attributes

The `SetNegotiableQuoteShippingAddressOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote | Contains details about the negotiable quote

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
