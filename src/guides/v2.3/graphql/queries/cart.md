---
group: graphql
title: cart query
redirect_from:
  - /guides/v2.3/graphql/reference/quote.html
---

Use the `cart` query to retrieve information about a particular cart.

Cart functionality is defined in the `Quote` module. A Quote represents the contents of a customer's shopping cart. It is responsible for performing tasks such as:

*  Tracking each item in the cart, including the quantity and base cost
*  Determining estimated shipping costs
*  Calculating subtotals, computing additional costs, applying coupons, and determining the payment method

## Syntax

`{cart(cart_id: String!) {Cart}}`

## Example usage

The following query shows the status of a cart that is ready to be converted into an order.

**Request:**

```text
query {
  cart(cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG")
  {
    email
    billing_address {
     city
     country {
      code
      label
      }
     firstname
      lastname
      postcode
      region {
        code
        label
      }
      street
      telephone
    }
    shipping_addresses {
      firstname
      lastname
      street
      city
      region {
        code
        label
      }
      country {
        code
        label
      }
      telephone
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        base_amount {
          value
          currency
        }
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
      selected_shipping_method {
        amount {
          value
          currency
        }
        base_amount {
          value
          currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
      }

    }
    items {
        id
        product {
          name
          sku
        }
        quantity
      }
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
    applied_coupon {
      code
    }
      prices {
        grand_total{
          value
          currency
        }
      }
  }
}
```

**Response:**

```json
{
  "data": {
    "cart": {
      "email": "mshaw@example.com",
      "billing_address": {
        "city": "Calder",
        "country": {
          "code": "US",
          "label": "US"
        },
        "firstname": "Bob",
        "lastname": "Roll",
        "postcode": "49628",
        "region": {
          "code": "MI",
          "label": "Michigan"
        },
        "street": [
          "Magento Pkwy",
          "Main Street"
        ],
        "telephone": "8675309"
      },
      "shipping_addresses": [
        {
          "firstname": "Bob",
          "lastname": "Roll",
          "street": [
            "Magento Pkwy",
            "Main Street"
          ],
          "city": "Austin",
          "region": {
            "code": "TX",
            "label": "Texas"
          },
          "country": {
            "code": "US",
            "label": "US"
          },
          "telephone": "8675309",
          "available_shipping_methods": [
            {
              "amount": {
                "currency": "USD",
                "value": 20
              },
              "available": true,
              "base_amount": {
                "value": 20,
                "currency": "USD"
              },
              "carrier_code": "flatrate",
              "carrier_title": "Flat Rate",
              "error_message": "",
              "method_code": "flatrate",
              "method_title": "Fixed",
              "price_excl_tax": {
                "value": 20,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 20,
                "currency": "USD"
              }
            },
            {
              "amount": {
                "currency": "USD",
                "value": 5
              },
              "available": true,
              "base_amount": {
                "value": 5,
                "currency": "USD"
              },
              "carrier_code": "tablerate",
              "carrier_title": "Best Way",
              "error_message": "",
              "method_code": "bestway",
              "method_title": "Table Rate",
              "price_excl_tax": {
                "value": 5,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 5,
                "currency": "USD"
              }
            },
            {
              "amount": {
                "currency": "USD",
                "value": 11.41
              },
              "available": true,
              "base_amount": {
                "value": 11.41,
                "currency": "USD"
              },
              "carrier_code": "ups",
              "carrier_title": "United Parcel Service",
              "error_message": "",
              "method_code": "03",
              "method_title": "UPS Ground",
              "price_excl_tax": {
                "value": 11.41,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 11.41,
                "currency": "USD"
              }
            },
            {
              "amount": {
                "currency": "USD",
                "value": 26.81
              },
              "available": true,
              "base_amount": {
                "value": 26.81,
                "currency": "USD"
              },
              "carrier_code": "ups",
              "carrier_title": "United Parcel Service",
              "error_message": "",
              "method_code": "12",
              "method_title": "UPS Three-Day Select",
              "price_excl_tax": {
                "value": 26.81,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 26.81,
                "currency": "USD"
              }
            },
            {
              "amount": {
                "currency": "USD",
                "value": 34.27
              },
              "available": true,
              "base_amount": {
                "value": 34.27,
                "currency": "USD"
              },
              "carrier_code": "ups",
              "carrier_title": "United Parcel Service",
              "error_message": "",
              "method_code": "02",
              "method_title": "UPS Second Day Air",
              "price_excl_tax": {
                "value": 34.27,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 34.27,
                "currency": "USD"
              }
            },
            {
              "amount": {
                "currency": "USD",
                "value": 76.12
              },
              "available": true,
              "base_amount": {
                "value": 76.12,
                "currency": "USD"
              },
              "carrier_code": "ups",
              "carrier_title": "United Parcel Service",
              "error_message": "",
              "method_code": "01",
              "method_title": "UPS Next Day Air",
              "price_excl_tax": {
                "value": 76.12,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 76.12,
                "currency": "USD"
              }
            },
            {
              "amount": {
                "currency": "USD",
                "value": 108.52
              },
              "available": true,
              "base_amount": {
                "value": 108.52,
                "currency": "USD"
              },
              "carrier_code": "ups",
              "carrier_title": "United Parcel Service",
              "error_message": "",
              "method_code": "14",
              "method_title": "UPS Next Day Air Early A.M.",
              "price_excl_tax": {
                "value": 108.52,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 108.52,
                "currency": "USD"
              }
            }
          ],
          "selected_shipping_method": {
            "amount": {
              "value": 5,
              "currency": "USD"
            },
            "base_amount": {
              "value": 5,
              "currency": "USD"
            },
            "carrier_code": "tablerate",
            "carrier_title": "Best Way",
            "method_code": "bestway",
            "method_title": "Table Rate"
          }
        }
      ],
      "items": [
        {
          "id": "13",
          "product": {
            "name": "Strive Shoulder Pack",
            "sku": "24-MB04"
          },
          "quantity": 4
        }
      ],
      "available_payment_methods": [
        {
          "code": "cashondelivery",
          "title": "Cash On Delivery"
        },
        {
          "code": "banktransfer",
          "title": "Bank Transfer Payment"
        },
        {
          "code": "purchaseorder",
          "title": "Purchase Order"
        },
        {
          "code": "checkmo",
          "title": "Check / Money order"
        }
      ],
      "selected_payment_method": {
        "code": "banktransfer",
        "title": "Bank Transfer Payment"
      },
      "applied_coupon": null,
      "prices": {
        "grand_total": {
          "value": 133,
          "currency": "USD"
        }
      }
    }
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String | A 32-character string that is created when you [create a cart]({{page.baseurl}}/graphql/mutations/create-empty-cart.html)

## Output attributes {#cart-output}

The top-level `Cart` object is listed first. All interfaces and child objects are listed in alphabetical order.

### Cart object

The `Cart` object can contain the following attributes.

{% include graphql/cart-object.md %}

### AppliedCoupon object {#AppliedCoupon}

The `AppliedCoupon` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The coupon code applied to the order

### AppliedGiftCard object {#AppliedGiftCard}

The `AppliedGiftCard` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`applied_balance` | Money | Applied balance to the current cart
`code` | String | The gift card code applied to the order
`current_balance` | Money | Current balance remaining on the gift card
`expiration_date` | String | Gift card expiration date

### AppliedStoreCredit object {#AppliedStoreCredit}

The `AppliedStoreCredit` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`applied_balance` | Money | The amount of store credit applied to the current cart
`current_balance` | Money | The customer's store credit balance before applying store credit to the cart
`enabled` | Boolean | Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned

### AvailablePaymentMethod object {#AvailablePaymentMethod}

The `AvailablePaymentMethod` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` |  String! | The payment method code
`title` | String! | The payment method title

### AvailableShippingMethod object {#AvailableShippingMethod}

The `AvailableShippingMethod` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money! | The cost of shipping using this shipping method
`available` | Boolean! | Indicates whether this shipping method can be applied to the cart
`base_amount` | Money | The base shipping cost, not including taxes or other cost adjustment. Could be null if method is not available
`carrier_code` | String! | A string that identifies a commercial carrier or an offline shipping method
`carrier_title` | String! | The label for the carrier code
`error_message` | String | Describes an error condition
`method_code` | String | A shipping method code associated with a carrier. Could be null if method is not available
`method_title` | String | The label for the method code. Could be null if method is not available
`price_excl_tax` | Money! | The cost of shipping using this shipping method, excluding tax
`price_incl_tax` | Money! | The cost of shipping using this shipping method, excluding tax

### BillingCartAddress object {#BillingCartAddress}

The `BillingCartAddress` object implements [`CartAddressInterface`](#CartAddressInterface). It does not define any additional attributes.

### CartAddressCountry object {#CartAddressCountry}

The `CartAddressCountry` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | The country code
`label` | String | The display label for the country

### CartAddressInterface {#CartAddressInterface}

The `CartAddressInterface` contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city specified for the billing address
`company` | String | The company specified for the billing address
`country` | [CartAddressCountry](#CartAddressCountry) | The country code and label for the billing address
`customer_notes` | String | Comments made to the customer that accompanies the order
`firstname` | String | The customer's first name
`lastname` | String | The customer's last name
`postcode` | String | The postal code for the billing address
`region` | [CartAddressRegion](#CartAddressRegion) | An object containing the region label and code
`street` | [String] | The street for the billing address
`telephone` | String | The telephone number for the billing address

### CartAddressRegion object {#CartAddressRegion}

The `CartAddressRegion` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | The state or province code
`label` | String | The display label for the region

### CartDiscount object {#CartDiscount}

The `CartDiscount` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money | The amount of all discounts applied to the cart
`label` | [String!]! | A concatenated list of strings that describe each applied discount

### CartItemInterface {#CartItemInterface}

The `CartItemInterface` can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`id` | String | ID of the item
`product` | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html) | Contains attributes that are common to all types of products
`quantity` | Float | The number of items in the cart

### CartItemQuantity object {#CartItemQuantity}

The `CartItemQuantity` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_item_id` | Int! | The unique ID assigned when a customer places an item in the cart
`quantity` | Float! | The quantity of this item selected

### CartPrices object {#CartPrices}

The `CartPrices` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`applied_taxes` | [[CartTaxItem]](#CartTaxItem) | An array containing the names and amounts of taxes applied to the item
`discount` | CartDiscount | The total amount of all discounts applied to the cart
`grand_total` | Money | The total, including discounts, taxes, shipping, and other fees
`subtotal_excluding_tax` | Money | Subtotal without taxes
`subtotal_including_tax` | Money | Subtotal with taxes
`subtotal_with_discount_excluding_tax` | Money | Subtotal with any discounts applied, but not taxes

### CartTaxItem object {#CartTaxItem}

The `CartTaxItem` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money! | The amount of tax applied to the item
`label` | String! | The description of the tax

### SelectedPaymentMethod object {#SelectedPaymentMethod}

The `SelectedPaymentMethod` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The payment method code
`purchase_order_number` | String | The purchase order number
`title` | String! | The payment method title

### SelectedShippingMethod object {#SelectedShippingMethod}

The `SelectedShippingMethod` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money | The cost of shipping using this shipping method
`base_amount` | Money | The base shipping cost, not including taxes or other cost adjustment
`carrier_code` | String | A string that identifies a commercial carrier or an offline shipping method
`carrier_title` | String | The label for the carrier code
`method_code` | String | A shipping method code associated with a carrier
`method_title` | String | The label for the method code

### ShippingCartAddress object {#ShippingCartAddress}

The `ShippingCartAddress` object implements [`CartAddressInterface`](#CartAddressInterface). It can also contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`available_shipping_methods` | [[AvailableShippingMethod]](#AvailableShippingMethod) | An array that lists the shipping methods that can be applied to the cart
`cart_items` | [[CartItemQuantity]](#CartItemQuantity) | An array that lists the items in the cart
`items_weight` | Float | The weight of all items in the cart
`selected_shipping_method` | [SelectedShippingMethod](#SelectedShippingMethod) | An object that describes the selected shipping method

## Related topics

*  [createEmptyCart mutation]({{page.baseurl}}/graphql/mutations/create-empty-cart.html)
*  [addSimpleProductsToCart mutation]({{page.baseurl}}/graphql/mutations/add-simple-products.html)
*  [setBillingAddressOnCart mutation]({{page.baseurl}}/graphql/mutations/set-billing-address.html)
*  [setPaymentMethodOnCart mutation]({{page.baseurl}}/graphql/mutations/set-payment-method.html)
