---
group: graphql
title: setNegotiableQuoteShippingAddresses mutation
b2b_only: true
---

The `setNegotiableQuoteBillingAddresses` mutation assigns the shipping address for the specified negotiable quote. You can assign an address from the company user's address book, or define a new one. The negotiable quote must be in the UPDATED state to successfully set a shipping address.

To return a list of valid shipping addresses, construct a [`company` query]({{page.baseurl}}/graphql/queries/company.html) that includes the `user` input attribute.

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
mutation {
  setNegotiableQuoteShippingAddress(input: {
    quote_uid: "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS"
    shipping_addresses: {
      customer_address_uid: "MQ=="
    }
  }) {
    quote {
      shipping_addresses {
        company
        firstname
        lastname
        street
        city
        region {
          label
          code
        }
        country {
          label
          code
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
    "setNegotiableQuoteShippingAddress": {
      "quote": {
        "shipping_addresses": [
          {
            "company": "TestCo",
            "firstname": "Taina",
            "lastname": "Garofalo",
            "street": [
              "100 Big Oak Tree Dr"
            ],
            "city": "San Francisco",
            "region": {
              "label": "California",
              "code": "CA"
            },
            "country": {
              "label": "US",
              "code": "US"
            }
          }
        ]
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
