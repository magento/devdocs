---
group: graphql
title: setNegotiableQuoteShippingMethods mutation
b2b_only: true
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/negotiable-quote/mutations/set-shipping-methods/
layout: migrated
---

The `setNegotiableQuoteShippingMethods` mutation sets one or more delivery methods on a negotiable quote. By default, the following delivery methods are supported:

Label | Carrier code | Method code
--- | --- | ---
DHL | dhl | Varies
Federal Express | fedex | Varies
Flat Rate | flatrate | flatrate
Free Shipping | freeshipping | freeshipping
Best Way | tablerate | bestway
United Parcel Service | ups | Varies
United States Postal Service | usps | Varies

The negotiable quote must be in the UPDATED state to successfully set a shipping address.

This query requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
setNegotiableQuoteShippingMethods(
    input: SetNegotiableQuoteShippingMethodsInput!
): SetNegotiableQuoteShippingMethodsOutput
```

## Example usage

The following example sets the shipping method for a negotiable quote.

**Request:**

```graphql

mutation {
  setNegotiableQuoteShippingMethods(
    input: {
      quote_uid: "z13H2xRCqEiyVoPJmSmekvhOo4GdsVSp",
      shipping_methods: [
        {
          carrier_code: "tablerate"
          method_code: "bestway"
        }
      ]
    }
  ) {
    quote {
      uid
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          carrier_title
          method_code
          method_title
          amount {
            value
            currency
          }
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
    "setNegotiableQuoteShippingMethods": {
      "quote": {
        "uid": "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS",
        "shipping_addresses": [
          {
            "selected_shipping_method": {
              "carrier_code": "tablerate",
              "carrier_title": "Best Way",
              "method_code": "bestway",
              "method_title": "Table Rate",
              "amount": {
                "value": 29.95,
                "currency": "USD"
              }
            }
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `SetNegotiableQuoteShippingMethodsInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object
`shipping_methods` | [ShippingMethodInput]! | An array of shipping methods to apply to the negotiable quote

### ShippingMethodInput object {#ShippingMethodInput}

Attribute |  Data Type | Description
--- | --- | ---
`carrier_code` | String! | A string that identifies a commercial carrier or an offline delivery method
`method_code` | String! | A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page

## Output attributes

The `SetNegotiableQuoteShippingMethodsOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote | The updated negotiable quote

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
