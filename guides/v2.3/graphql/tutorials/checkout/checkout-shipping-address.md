---
layout: tutorial
group: graphql
title: Step 4. Set shipping address
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 40
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use [setShippingAddressesOnCart]({{ page.baseurl }}/graphql/reference/quote.html#set-the-shipping-address-on-a-cart) mutation query to set a shipping address. GraphQl allows to add shipping address in the next ways:
- add new shipping address
- use for shipping a defined billing address
- use the existing customer's address from address book (available for registered customers)

### New shipping address

**Request**

The following mutation query adds new address to quote.

```text
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h"
      shipping_addresses: [
        {
          address: {
            firstname: "John"
            lastname: "Doe"
            company: "Company Name"
            street: ["320 N Crescent Dr", "Beverly Hills"]
            city: "Los Angeles"
            region: "CA"
            postcode: "90210"
            country_code: "US"
            telephone: "123-456-0000"
            save_in_address_book: false
          }
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
        region
        postcode
        telephone
        country {
          code
          label
        }
        address_type
      }
    }
  }
}
```

where
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Response**

`setShippingAddressesOnCart` returns new address details if mutation query has been successfully executed.

```json
{
  "data": {
    "setShippingAddressesOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "firstname": "John",
            "lastname": "Doe",
            "company": "Company Name",
            "street": [
              "320 N Crescent Dr",
              "Beverly Hills"
            ],
            "city": "Los Angeles",
            "region": {
              "code": "CA",
              "label": "California"
            },
            "postcode": "90210",
            "telephone": "123-456-0000",
            "country": {
              "code": "US",
              "label": "US"
            },
            "address_type": "SHIPPING"
          }
        ]
      }
    }
  }
}
```

### Use for shipping a defined billing address

See [Add a new address for billing and shipping]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-billing-address.html) topic.

{:.bs-callout .bs-callout-info}
Send customer's authorization token in the `Authorization` parameter of the header if you set shipping address for a registered customer. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) to get more details.

### Use the existing customer's address

Use a query below to retrieve the list of customer addresses:

**Request**

```text
query {
  customer {
    addresses {
      id
      default_billing
      default_shipping
    }
  }
}
```

**Response**

```text
{
  "data": {
    "customer": {
      "addresses": [
        {
          "id": 2,
          "default_billing": true,
          "default_shipping": false
        },
        {
          "id": 3,
          "default_billing": false,
          "default_shipping": false
        },
        {
          "id": 4,
          "default_billing": false,
          "default_shipping": true
        }
      ]
    }
  }
}
```

Define `customer_address_id` to assign the existing customer address.

**Request**

```text
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "{{ CART_ID }}"
      shipping_addresses: {
          customer_address_id: {{ CUSTOMER_ADDRESS_ID }}
      }
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
        region {
          code
          label
        }
        postcode
        telephone
        country
        {
          code
          label
        }
        address_type
      }
    }
  }
}
```

where
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).
`{{ CUSTOMER_ADDRESS_ID }}` - customer address ID (value from `entity_id` field of `customer_address_entity` table).

**Response**

```json
{
  "data": {
    "setShippingAddressesOnCart": {
      "cart": {
        "shipping_addresses": [
          {
            "firstname": "John",
            "lastname": "Doe",
            "company": "Company Name",
            "street": [
              "320 N Crescent Dr",
              "Beverly Hills"
            ],
            "city": "Los Angeles",
            "region": {
              "code": "CA",
              "label": "California"
            },
            "postcode": "90210",
            "telephone": "123-456-0000",
            "country": {
              "code": "US",
              "label": "US"
            },
            "address_type": "SHIPPING"
          }
        ]
      }
    }
  }
}
```
