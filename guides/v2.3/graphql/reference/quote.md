---
group: graphql
title: quote endpoint
---

A quote represents the contents of a customer's shopping cart. It is responsible for performing tasks such as:

* Tracking each item in the cart, including the quantity and base cost
* Determining estimated shipping costs
* Calculating subtotals, computing additional costs, applying coupons, and determining the payment method

{:.bs-callout .bs-callout-tip}
Except for `createEmptyCart`, the mutations defined in this topic are available in the 2.3-develop branch of the [graphql-ce repository](https://github.com/magento/graphql-ce).

## Query
Use the `Cart` query to retrieve information about a particular cart.

### Syntax

`{cart(cart_id: String!) {Cart}}`

### Cart attributes
The `Cart` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`applied_coupon` | code | Contains the coupon code if used 
`billing_address` | [CartAddress](#cartAddressAttributes) | Contains the billing address specified in the customer's cart
`cart_id` | String | The unique ID that identifies the customer's cart
`items` | [CartItemInterface](#cartItemsInterface) | Contains the items in the customer's cart
`shipping_addresses` | [CartAddress](#cartAddressAttributes) | Contains one or more shipping addresses

### Cart address attributes {#cartAddressAttributes}
The `CartAddress` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`address_type` | AddressTypeEnum | Specifies if the type of address is SHIPPING or BILLING
`cart_items` | CartItemQuantity | Contains the cart item IDs and quantity of each item
`city` | String | The city specified for the shipping or billing address 
`company` | String | The company specified for the shipping or billing address
`country` | [CartAddressCountry] | The country code and label for the shipping or billing address
`customer_notes` | String | Comments made to the customer that accompanies the order
`firstname` | String | The customer's first name
`items_weight` | Float | The total weight of the items in the cart
`lastname` | String | The customer's last name
`postcode` | String | The postal code for the shipping or billing address
`region` | CartAddressRegion | An object containing the region name, region code, and region ID
`street` | [String] | The street for the shipping or billing address
`telephone` | String | The telephone number for the shipping or billing address

### Cart item interface attributes {#cartItemsInterface}
The `CartItemInterface` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`id` | String | ID of the item
`product` | [ProductInterface]({{ page.baseurl }}/graphql/reference/product-interface-implementations.html) | Contains attributes that are common to all types of products
`qty` | Float | The number of items in the cart

### Example usage

The following returns information about a cart given a `cart_id`. Note that the `cart_id` specified is for demonstration purposes only. You will need to [generate](#createEmptyCart) your own `cart_id` for this example to work.

**Request**

``` text
{
  cart(cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C") {
    cart_id
    billing_address {
      lastname
      firstname
      postcode
    }
    items {
      id
      qty
    }
    shipping_addresses {
      company
      postcode
      lastname
      firstname
    }
  }
}
```
**Response**

```text
{
  "data": {
    "cart": {
      "cart_id": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C",
      "items": [
        {
         "id": "22",
         "qty": 1
        }
      ],
      "billing_address": 
      {
        "lastname": "Roll",
        "firstname": "Bob",
        "postcode": "78759"
      },
      "shipping_addresses": [
        {
         "company": "Magento",
         "postcode": "78759",
         "lastname": "Roll",
         "firstname": "Bob"
        }
      ]
    }
  }
}
```

## Mutations

### Create an empty cart {#createEmptyCart}

The `createEmptyCart` mutation creates an empty shopping cart for a guest or logged in customer. If you are creating a cart for a logged in customer, you must include the customer's authorization token in the header of the request.

#### Syntax

`mutation: {createEmptyCart: String}`

**Request**

``` text
mutation {
  createEmptyCart
}
```

**Response**

The response is the quote ID, which is sometimes called the cart ID. The remaining examples in this topic will use this cart ID.

```json
{
  "data": {
    "createEmptyCart": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"}
  }
}
```

### Adding simple products to a cart

Adds simple items to a specific cart.

### Add simple products to cart attributes
The `addSimpleProductsToCart` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cartItems` | SimpleProductCartItemInput | The list of items to add to the cart
`cart_id` | String | The unique ID that identifies the customer's cart

#### Syntax

`mutation: {addSimpleProductsToCart(input: AddSimpleProductsToCartInput) {AddSimpleProductsToCartOutput}}`

#### Example usage

The following example adds two Joust Duffle Bags to the cart.

**Request**

``` text
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C", 
      cartItems: [
        {
          data: {
            qty: 2
            sku: "24-MB01"
          }
        }
       ]
    }
  ) {
    cart {
      cart_id
      items {
        product {
          name
        }
        qty
      }
    }
  }
}
```

**Response**

```text
{
  "data": {
    "addSimpleProductsToCart": {
      "cart": {
        "cart_id": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C",
        "items": [
          {
            "product": {
              "name": "Joust Duffle Bag"
            },
            "qty": 2
          }
        ]
      }
    }
  }
}
```

### Updating billing and shipping information
{:.no_toc}

You can set the billing and shipping addresses on a cart.

### Set the billing address on cart attributes
The `SetBillingAddressOnCart` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`billing_address` | [BillingAddressInput](#billingAddressInput) | The billing address for a specific cart
`cart_id` | String | The unique ID that identifies the customer's cart

### Set the billing address input attributes {#billingAddressInput}
The `SetBillingAddressInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#cartAddressInput) | The billing address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address
`use_for_shipping` | Boolean | Specifies whether to use the billing address for the shipping address (`True`/`False`)

### Cart address input attributes {#cartAddressInput}
The `CartAddressInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city specified for the billing address 
`company` | String | The company specified for the billing address
`country_code` | String | The country code and label for the billing address
`customer_notes` | String | Comments made to the customer that accompanies the order
`firstname` | String | The customer's first name
`lastname` | String | The customer's last name
`postcode` | String | The postal code for the billing address
`region` | String | The region code and label for the billing address
`save_in_address_book` | Boolean | Specifies whether to save the address (`True`/`False`)
`street` | [String] | The street for the billing address
`telephone` | String | The telephone number for the billing address

### Set the billing address on a cart

Use the `setBillingAddressOnCart` mutation to set a new billing address for a specific cart.

#### Syntax

`mutation: {setBillingAddressOnCart(input: SetBillingAddressOnCartInput) {SetBillingAddressOnCartOutput}}`

#### Example usage

The following example creates a new billing address for a specific cart.

**Request**

``` text
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      billing_address: {
        address: {
          firstname: "Bob"
          lastname: "Roll"
          company: "Magento"
          street: ["Magento Pkwy", "Main Street"]
          city: "Austin"
          region: "TX"
          postcode: "78758"
          country_code: "US"
          telephone: "8675309"
          save_in_address_book: False
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
      }
    }
  }
}
```

**Response**

```text
{
  "data": {
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "Bob",
          "lastname": "Roll",
          "company": "Magento",
          "street": [
            "Magento Pkwy",
            "Main Street"
          ],
          "city": "Austin",
          "postcode": "78758",
          "telephone": "8675309"
        }
      }
    }
  }
}
```

### Set the shipping address on a cart

Use the `setShippingAddressesOnCart` mutation to set a new shipping address for a specific cart.

#### Syntax

`mutation: {setShippingAddressesOnCart(input: SetShippingAddressesOnCartInput) {SetShippingAddressesOnCartOutput}}`

#### Example usage

The following example creates a new shipping address for a specific cart.

**Request**

``` text
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      shipping_addresses: [
        {
          address: {
            firstname: "Bob"
            lastname: "Roll"
            company: "Magento"
            street: ["Magento Pkwy", "Main Street"]
            city: "Austin"
            region: "TX"
            postcode: "78758"
            country_code: "US"
            telephone: "8675309"
            save_in_address_book: False
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
        postcode
        telephone
      }
    }
  }
}
```

**Response**

```text
{
  "data": {
    "createEmptyCart": "6XZA7q1ooLEI0jLz8DfFrfruEqgxGzlt"
  }
}
```

### Add and remove coupons from a cart
{:.no_toc}

You can use mutations to add or remove coupons from a specified cart.

### Coupon attributes
{:.no_toc}
The add and remove coupon from cart objects can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String | The unique ID that identifies the customer's cart
`coupon_code` | String | The coupon code

### Apply coupon to cart

Adds a coupon code to a cart.

#### Syntax

`mutation: {applyCouponToCart(input: ApplyCouponToCartInput) {ApplyCouponToCartOutput}}`

#### Example usage

The following call adds a coupon code called `test2019` to a cart.

**Request**

``` text
mutation {
  applyCouponToCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      coupon_code: "test2019"
    }
  ) {
    cart {
      applied_coupon {
        code
      }
    }
  }
}
```

**Response**

```text
{
  "data": {
    "applyCouponToCart": {
      "cart": {
        "applied_coupon": {
          "code": "test2019"
        }
      }
    }
  }
}
```

### Remove coupon from cart

Removes a coupon from the specified cart.

#### Syntax

`mutation: {removeCouponFromCart(input: RemoveCouponFromCartInput){ RemoveCouponFromCartOutput}}`

#### Example usage

The following example removes a coupon from the cart.

**Request**

``` text
mutation {
  removeCouponFromCart(input: { cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C" }) {
    cart {
      applied_coupon {
        code
      }
    }
  }
}
```

**Response**

```text
{
  "data": {
    "removeCouponFromCart": {
      "cart": {
        "applied_coupon": {
          "code": "test2019"
        }
      }
    }
  }
}
```