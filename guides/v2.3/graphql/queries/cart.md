---
group: graphql
title: cart query
redirect_from:
  - /guides/v2.3/graphql/reference/quote.html
---

Use the `cart` query to retrieve information about a particular cart.

Cart functionality is defined in the `Quote` module. A Quote represents the contents of a customer's shopping cart. It is responsible for performing tasks such as:

* Tracking each item in the cart, including the quantity and base cost
* Determining estimated shipping costs
* Calculating subtotals, computing additional costs, applying coupons, and determining the payment method

## Syntax

`{cart(cart_id: String!) {Cart}}`

## Sample queries

### Cart ready for checkout

The following query shows the status of a cart that is ready to be converted into an order.

**Request**

```graphql
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

**Response**

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

### Cart discounts

In this query, the **Buy 3 tee shirts and get the 4th free** cart price rule from the sample data is active. This rule was modified slightly to add the label `3T1free`.  (If a cart price rule does not have a label, Magento returns a default label of `Discount`.) A custom rule in which the customer saves 10% on the order by applying a discount code is also in effect.

The `3T1free` rule is applied first, and Magento returns the price of a single shirt, $29, as the discount. Magento then applies a 10% discount to the remaining total of the products in the cart.

**Request**

```graphql
{
  cart(cart_id: "v7jYJUjvPeHbdMJRcOfZIeQhs2Xc2ZKT") {
    email
    items {
      id
      prices {
        total_item_discount {
          value
        }
        price {
          value
        }
        discounts {
          label
          amount {
            value
          }
        }
      }
      product {
        name
        sku
      }
      quantity
    }
    applied_coupons {
      code
    }
    prices {
      discounts {
        amount {
          value
        }
        label
      }
      grand_total {
        value
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "cart": {
      "email": "roni_cost@example.com",
      "items": [
        {
          "id": "43",
          "prices": {
            "total_item_discount": {
              "value": 37.7
            },
            "price": {
              "value": 29
            },
            "discounts": [
              {
                "label": "3T1free",
                "amount": {
                  "value": 29
                }
              },
              {
                "label": "10% Off for New Customers",
                "amount": {
                  "value": 8.7
                }
              }
            ]
          },
          "product": {
            "name": "Elisa EverCool&trade; Tee",
            "sku": "WS06"
          },
          "quantity": 4
        }
      ],
      "applied_coupons": [
        {
          "code": "NEW"
        }
      ],
      "prices": {
        "discounts": [
          {
            "amount": {
              "value": 29
            },
            "label": "3T1free"
          },
          {
            "amount": {
              "value": 8.7
            },
            "label": "10% Off for New Customers"
          }
        ],
        "grand_total": {
          "value": 84.76
        }
      }
    }
  }
}
```

### Tier price example

In the following example, tier prices has been established for product `24-UG01` and `24-UG05`, as shown in the following table:

Product | Quantity | Fixed/Discount | Amount
--- | --- | --- | --- |
24-UG01 | 5 | Discount | 5%
24-UG01 | 10 | Discount | 10%
24-UG01 | 15 | Discount | 15%
24-UG05 | 5 | Fixed | $16
24-UG05 | 10 | Fixed | $11

The cart in the example contains 12 units of `24-UG05` and 8 units of `24-UG-01`, so the price of `24-UG05` is $11, and the price of `24-UG01` is $18.05 (5% off).

**Request**

```graphql
query {
  cart(cart_id: "v7jYJUjvPeHbdMJRcOfZIeQhs2Xc2ZKT"){
    items {
      id
      quantity
      product{
        name
        sku
        price_tiers {
          quantity
          final_price {
            value
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
      prices{
        price{
          value
        }
      }
    }
    prices {
      discounts {
        label
        amount {
          value
        }
      }
      subtotal_excluding_tax {
        value
      }
      applied_taxes {
        label
        amount {
          value
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "cart": {
      "items": [
        {
          "id": "65",
          "quantity": 12,
          "product": {
            "name": "Go-Get'r Pushup Grips",
            "sku": "24-UG05",
            "price_tiers": [
              {
                "quantity": 5,
                "final_price": {
                  "value": 16
                },
                "discount": {
                  "amount_off": 3,
                  "percent_off": 15.79
                }
              },
              {
                "quantity": 10,
                "final_price": {
                  "value": 11
                },
                "discount": {
                  "amount_off": 8,
                  "percent_off": 42.11
                }
              }
            ]
          },
          "prices": {
            "price": {
              "value": 11
            }
          }
        },
        {
          "id": "66",
          "quantity": 8,
          "product": {
            "name": "Quest Lumaflex&trade; Band",
            "sku": "24-UG01",
            "price_tiers": [
              {
                "quantity": 5,
                "final_price": {
                  "value": 18.05
                },
                "discount": {
                  "amount_off": 0.95,
                  "percent_off": 5
                }
              },
              {
                "quantity": 10,
                "final_price": {
                  "value": 17.1
                },
                "discount": {
                  "amount_off": 1.9,
                  "percent_off": 10
                }
              },
              {
                "quantity": 15,
                "final_price": {
                  "value": 16.15
                },
                "discount": {
                  "amount_off": 2.85,
                  "percent_off": 15
                }
              }
            ]
          },
          "prices": {
            "price": {
              "value": 18.05
            }
          }
        }
      ],
      "prices": {
        "discounts": [
          {
            "label": "200",
            "amount": {
              "value": 55.28
            }
          }
        ],
        "subtotal_excluding_tax": {
          "value": 276.4
        },
        "applied_taxes": [
          {
            "label": "US-MI-*-Rate 1",
            "amount": {
              "value": 18.24
            }
          }
        ]
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

The top-level `Cart` object is listed first. All child objects are listed in alphabetical order.

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

The `BillingCartAddress` object can contain the following attributes.

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

### CartAddressCountry object {#CartAddressCountry}

The `CartAddressCountry` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | The country code
`label` | String | The display label for the country

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

### CartItemInterface object {#CartItemInterface}

The `CartItemInterface` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`id` | String | ID of the item
`product` | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html) | Contains attributes that are common to all types of products
`quantity` | Float | The number of items in the cart

### CartItemPrices object {#CartItemPrices}

The `CartItemPrices` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`discounts`| [Discount] | An array of discounts to be applied to the cart item
`price` | Money! | The price of the item before any discounts were applied
`row_total` | Money! | The value of the `price` multiplied by the quantity of the item
`row_total_including_tax` | Money! | The value of `row_total` plus the tax applied to the item
`total_item_discount` | Money | The total of all discounts applied to the item

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
`discount` | CartDiscount | Deprecated. Use `discounts` instead
`discounts` | [Discount] | An array containing all discounts applied to the cart
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

### Discount object {#Discount}

A discount can be applied to the cart as a whole or to an item.

If a cart rule does not have a label, Magento uses `Discount` as the default label.

The `Discount` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`amount` | Money! | The amount of the discount applied to the cart
`label` | String! | The description of the discount

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

The `ShippingCartAddress` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`available_shipping_methods` | [[AvailableShippingMethod]](#AvailableShippingMethod) | An array that lists the shipping methods that can be applied to the cart
`cart_items` | [[CartItemQuantity]](#CartItemQuantity) | An array that lists the items in the cart
`city` | String | The city specified for the shipping address
`company` | String | The company specified for the shipping address
`country` | [CartAddressCountry](#CartAddressCountry) | The country code and label for the shipping address
`customer_notes` | String | Comments made to the customer that will accompany the order
`firstname` | String | The recipient's first name
`items_weight` | Float | The weight of all items in the cart
`lastname` | String | The recipient's last name
`postcode` | String | The postal code for the shipping address
`region` | [CartAddressRegion](#CartAddressRegion) | An object containing the region label and code
`selected_shipping_method` | [SelectedShippingMethod](#SelectedShippingMethod) | An object that describes the selected shipping method
`street` | [String] | The street for the shipping address
`telephone` | String | The telephone number for the shipping address

## Related topics

-  [createEmptyCart mutation]({{page.baseurl}}/graphql/mutations/create-empty-cart.html)
-  [addSimpleProductsToCart mutation]({{page.baseurl}}/graphql/mutations/add-simple-products.html)
-  [setBillingAddressOnCart mutation]({{page.baseurl}}/graphql/mutations/set-billing-address.html)
-  [setPaymentMethodOnCart mutation]({{page.baseurl}}/graphql/mutations/set-payment-method.html)
