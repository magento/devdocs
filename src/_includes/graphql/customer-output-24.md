{% if page.url contains 'graphql/queries/customer.html' %}
{% assign customeraddress_text = '[CustomerAddress](#customerAddressOutput)' %}
{% assign customeroutput_text = '[CustomerOrders](#customerOrders)' %}
{% assign crossref_text = '. See [`orders` input attributes](#orders) for details' %}
{% else %}
{% assign customeraddress_text = 'CustomerAddress' %}
{% assign customeroutput_text = '[CustomerOrders]' %}
{% assign crossref_text = '' %}
{% endif %}

Attribute |  Data Type | Description
--- | --- | ---
`addresses` | {{ customeraddress_text }}  | An array containing the customer's shipping and billing addresses
`created_at` | String | Timestamp indicating when the account was created
`date_of_birth` | String | The customer's date of birth
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`email` | String | The customer's email address
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`group_id` | Int | Deprecated. This attribute is not applicable for GraphQL. The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`id` | Int | Deprecated. This attribute is not applicable for GraphQL.The ID assigned to the customer
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter
`lastname` | String | The customer's family name
`middlename` |String | The customer's middle name
`orders(<FilterCriteria>)` | {{ customeroutput_text }} | A list of the customer's placed orders{{ crossref_text }}
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`reviews(pageSize: Int = 20 currentPage: Int = 1)` | ProductReviews! | The list of reviews of the product
`reward_points` | RewardPoints | Details about the customer's reward points
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)
`wishlist` | Wishlist! | Contains the contents of the customer's wish lists
