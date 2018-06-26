---
group: graphql
title: Customer endpoint
version: 2.3
github_link: graphql/reference/customer.md
---

The `Customer` endpoint returns information about a customer account.

Currently, GraphQL relies on [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html). To successfully return information about a customer, you must be logged in as a customer in the same browser you are using to make GraphQL calls. The GraphQL call returns information about this customer.

## Query structure

`customer: Customer`

## Supported attributes

Attribute |  Data Type | Description
--- | --- | ---
`created_at` | String | Timestamp indicating when the account was created
`group_id` | Int | The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`firstname` | String | The customer's first name
`middlename` |String | The customer's middle name
`lastname` | String | The customer's family name
`suffix` | String | A value such as Sr., Jr., or III
`email` | String | The customer's email address. Required
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | The customer's date of birth
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)
`id` | Int | The ID assigned to the customer
`addresses` | [CustomerAddresses]  | An array containing the customer's shipping and billing addresses
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter

### CustomerAddress object

The values assigned to attributes such as `firstname` and `lastname` in this object may be different from those defined in the Customer object.

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the address object
`customer_id` | Int | The customer ID
`region` | CustomerAddressesRegion | An object containing the region name, region code, and region ID
`region_id` | Int | A number that uniquely identifies the state, province, or other area
`country_id` | String | The customer's country
`street` | [String] | An array of strings that define the street number and name
`company` | String | The customer's company
`telephone` | String | The telephone number
`fax` | String | The fax number
`postcode` | String | The customer's ZIP or postal code
`city` | String | The city or town
`firstname` | String | The first name of the person associated with the shipping/billing address
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`default_billing` | Boolean | Indicates whether the address is the default billing address
`reward_update_notification` | Int | The number of the email template to use for notifications about reward updates. This attribute is defined in the Reward module.
`reward_warning_notification` | Int | The number of the email template to use for notifications about rewards points expiring. This attribute is defined in the Reward module.


## Example usage

The following call returns information about the logged-in customer.

**Request**

{% highlight json %}
{
  customer
  {
    firstname
    lastname
    suffix
    email
    id
      addresses{
        firstname
        lastname
        street
        city
        region_id
        postcode
        country_id
        telephone
    }
   }
}
{% endhighlight %}

**Response**

``` json
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "suffix": null,
      "email": "jdoe@example.com",
      "id": 3,
      "addresses": [
        {
          "firstname": "John",
          "lastname": "Doe",
          "street": [
            "123 Elm Street"
          ],
          "city": "Anytown",
          "region_id": 57,
          "postcode": "78758",
          "country_id": "US",
          "telephone": "512 555-1212"
        }
      ]
    }
  }
}
```
