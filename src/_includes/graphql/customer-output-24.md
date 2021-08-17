{% if page.url contains 'graphql/queries/customer.html' %}
{% assign comparelist_text = " '[CompareList](#CompareList)' %}
{% assign customeraddress_text = '[CustomerAddress](#customerAddressOutput)' %}
{% assign customeroutput_text = '[CustomerOrders](#customerOrders)' %}
{% assign crossref_text = '. See [`orders` input attributes](#orders) for details' %}
{% assign productreview_text = '[ProductReviews](#ProductReviews)!' %}
{% assign rewardpoints_text = '[RewardPoints](#RewardPoints)' %}
{% assign wishlist_text = '[Wishlist](#Wishlist)!' %}
{% else %}
{% assign comparelist_text = 'CompareList' %}
{% assign customeraddress_text = 'CustomerAddress' %}
{% assign customeroutput_text = '[CustomerOrders]' %}
{% assign crossref_text = '' %}
{% assign productreview_text = '[ProductReviews]!' %}
{% assign rewardpoints_text = '[RewardPoints]' %}
{% assign wishlist_text = '[Wishlist]!' %}
{% endif %}

Attribute |  Data Type | Description
--- | --- | ---
`addresses` | {{ customeraddress_text }}  | An array containing the customer's shipping and billing addresses
`allow_remote_shopping_assistance` | Boolean! | Indicates whether the customer has enabled remote shopping assistance
`compare_list` | CompareList | The contents of the customer's comparison list
`created_at` | String | Timestamp indicating when the account was created
`date_of_birth` | String | The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`email` | String | The customer's email address
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`group_id` | Int | Deprecated. This attribute is not applicable for GraphQL. The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`id` | Int | Deprecated. This attribute is not applicable for GraphQL. The ID assigned to the customer
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter
`lastname` | String | The customer's family name
`middlename` |String | The customer's middle name
`orders(filter CustomerOrdersFilterInput, currentPage = 1 Int, pageSize = 20 Int)` | {{ customeroutput_text }} | A list of the customer's placed orders{{ crossref_text }}
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`return(uid: ID!)` | Return | Gets details about the specified return request
`returns(pageSize: Int = 20 currentPage: Int = 1)` | Returns | Information about the customer's return requests
`reviews(pageSize: Int = 20 currentPage: Int = 1)` | ProductReviews! | The list of reviews of the product
`reward_points` | {{ rewardpoints_text }} | Details about the customer's reward points
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)
`wishlist` | Wishlist! | Deprecated. Use `wishlist_v2` instead. Contains the contents of the customer's wish lists
`wishlist_v2(id ID!)` | {{ wishlist_text }} | Retrieve the specified wish list identified by the unique ID for a Wishlist object

For B2B, company administrators and users can have the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`job_title` | String | The job title for a B2B company user
`requisition_lists (pageSize = 20 Int, currentPage = 1 Int, filter RequisitionListFilterInput)` | RequisitionLists | Contains the customer's requisition lists
`role`| CompanyRole | The role name and permissions assigned to the company user
`status` | CompanyUserStatusEnum | Indicates whether the company user is ACTIVE or INACTIVE
`team` | CompanyTeam | The team the company user is assigned to
`telephone` | String | The phone number of the company user
