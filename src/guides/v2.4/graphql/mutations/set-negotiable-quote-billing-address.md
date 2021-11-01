---
group: graphql
title: setNegotiableQuoteBillingAddresses mutation
b2b_only: true
---

The `setNegotiableQuoteBillingAddresses` mutation assigns the billing address for the specified negotiable quote. You can assign an address from the company user's address book, or define a new one.

To return a list of valid billing addresses, construct a [`company` query]({{page.baseurl}}/graphql/queries/company.html) that includes the `user` input attribute.

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

The following example adds a new billing address to a negotiable quote.

**Request:**

```graphql
mutation {
  setNegotiableQuoteBillingAddress(input: {
    quote_uid: "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS", 
    billing_address: {
      address: {
        company: "TestCo"
        firstname: "Taina"
        lastname: "Garofalo"
        street: "100 Big Oak Tree Dr"
        city: "San Francisco"
        postcode: "9999"
        region: "CA"
        region_id: 12
        country_code: "US"
        telephone: "555 999-9999"
      }
    }
  }) {
    quote {
      billing_address {
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
    "setNegotiableQuoteBillingAddress": {
      "quote": {
        "billing_address": {
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
      }
    }
  }
}
```

## Input attributes

The `SetNegotiableQuoteBillingAddressInput` input object specifies the company user's cart ID and the billing address.

### SetNegotiableQuoteBillingAddressInput attributes {#SetNegotiableQuoteBillingAddressInput}

The `SetNegotiableQuoteBillingAddressInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`billing_address` | [NegotiableQuoteBillingAddressInput!](#NegotiableQuoteBillingAddressInput) | The billing address to be added
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

The `SetNegotiableQuoteBillingAddressOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote | The negotiable quote after setting the billing address

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
