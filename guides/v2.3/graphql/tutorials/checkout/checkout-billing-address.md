---
layout: tutorial
group: graphql
title: Step 5. Set billing address
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 5
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

{:.bs-callout .bs-callout-tip}
Billing address must always be set.

Use [setBillingAddressOnCart]({{ page.baseurl }}/graphql/reference/quote.html#set-the-billing-address-on-cart-attributes) mutation query to set a billing address. GraphQl allows to add billing address in the next ways:
- add new billing address
- add new billing address and set it as a shipping addresses  
- use the existing customer's address from address book (available for registered customers)

### New billing address

The following mutation adds a new billing address.

**Request**

```text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{{ CART_ID }}"
      billing_address: {
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
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
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

```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "John",
          "lastname": "Doe",
          "company": "Company Name",
          "street": [
            "320 N Crescent Dr",
            "Beverly Hills"
          ],
          "city": "Los Angeles",
          "postcode": "90210",
          "telephone": "123-456-0000",
          "country": {
            "code": "US",
            "label": "US"
          },
          "address_type": "BILLING"
        }
      }
    }
  }
}
```

### Add a new address for billing and shipping

The following mutation adds a new billing address and sets it as a shipping address too.

**Request**

```text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{{ CART_ID }}"
      billing_address: {
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
          use_for_shipping: true
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
        postcode
        telephone
        country {
          code
          label
        }
        address_type
      }
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
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

**Response**

```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "John",
          "lastname": "Doe",
          "company": "Company Name",
          "street": [
            "320 N Crescent Dr",
            "Beverly Hills"
          ],
          "city": "Los Angeles",
          "postcode": "90210",
          "telephone": "123-456-0000",
          "country": {
            "code": "US",
            "label": "US"
          },
          "address_type": "BILLING"
        },
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

### Use the existing customer address

**Request**
```text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{{ CART_ID }}"
      billing_address: {
          customer_address_id: {{ CUSTOMER_ADDRESS_ID }}
      }
    }
  ) {
    cart {
      billing_address {
        city
      }
    }
  }
}
```

**Request**

```text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{{ CART_ID }}"
      billing_address: {
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
#         use_for_shipping: true
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
        postcode
        telephone
        country {
          code
          label
        }
        address_type
      }
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
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

**Response**
```json
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "John",
          "lastname": "Doe",
          "company": "Company Name",
          "street": [
            "320 N Crescent Dr",
            "Beverly Hills"
          ],
          "city": "Los Angeles",
          "postcode": "90210",
          "telephone": "123-456-0000",
          "country": {
            "code": "US",
            "label": "US"
          },
          "address_type": "BILLING"
        },
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
