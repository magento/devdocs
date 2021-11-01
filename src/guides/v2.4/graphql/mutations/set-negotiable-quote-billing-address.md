---
group: graphql
title: setNegotiableQuoteBillingAddresses mutation
b2b_only: true
---

The `setNegotiableQuoteBillingAddresses` mutation assigns the billing address for the specified negotiable quote. You can assign an address from the company user's address book, or define a new one.

To return a list of valid shipping addresses, construct a [`company` query]({{page.baseurl}}/graphql/queries/) that includes the `user` input attribute.

This query requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
{
    setNegotiableQuoteBillingAddress(
        input: SetNegotiableQuoteBillingAddressInput! 
    ): SetNegotiableQuoteBillingAddressOutput
}
```

## Example usage

The following example adds a predefined billing address to a negotiable quote.

**Request:**

```graphql
mutation{
  setNegotiableQuoteBillingAddresses(input: {customer_address_id: "Mg=="
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

```

## Input attributes

The `SetNegotiableQuoteBillingAddressInput` input object specifies the company user's cart ID and other information to identify a new negotiable quote.

### SetNegotiableQuoteBillingAddressInput attributes {#SetNegotiableQuoteBillingAddressInput}

The `SetNegotiableQuoteBillingAddressInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`billing_address` | NegotiableQuoteBillingAddressInput! | The billing address to be added
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object

### NegotiableQuoteBillingAddressInput attributes {#NegotiableQuoteBillingAddressInput}

Attribute |  Data Type | Description
--- | --- | ---
`address` | [NegotiableQuoteAddressInput](#NegotiableQuoteAddressInput) | Defines a billing address
`customer_address_uid` | ID | The unique ID of a `CustomerAddress` object
`same_as_shipping` | Boolean | Indicates whether to set the billing address to be the same as the existing shipping address on the negotiable quote
`use_for_shipping` | Boolean | Indicates whether to set the shipping address to be the same as this billing address

### NegotiableQuoteAddressInput {#NegotiableQuoteAddressInput}

{% include graphql/negotiable-quote-address-input.md %}

## Output attributes

The `SetNegotiableQuoteShippingAddressOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote | Contains details about the negotiable quote

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
