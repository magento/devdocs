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

The `NegotiableQuoteShippingAddressInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String! | The city specified for the billing or shipping address
`company` | String | The company name
`country_code` | String! | The country code and label for the billing or shipping address
`firstname` | String! | The first name of the company user
`lastname` | String! | The last name of the company user
`postcode` | String | The ZIP or postal code of the billing or shipping address
`region` | String | A string that defines the state or province of the billing or shipping address
`region_id` | Int | An integer that defines the state or province of the billing or shipping address
`save_in_address_book` | Boolean | Determines whether to save the address in the customer's address book. The default value is true
`street` | [String!]! | An array containing the street for the billing or shipping address
`telephone` | String | The telephone number for the billing or shipping address

## Output attributes

The `SetNegotiableQuoteShippingAddressOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote | Contains details about the negotiable quote

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
