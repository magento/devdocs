The `Company` object can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`acl_resources` [CompanyAclResource] | Returns the list of all resources defined within the company
`company_admin` | [Customer]({{page.baseurl}}/graphql/queries/customer.html) | An object containing information about the company administrator
`email` | String | The email address of the company contact
`id` | ID! | The ID assigned to the company
`legal_address` | CompanyLegalAddress | The address where the company is registered to conduct business
`legal_name` | String | The full legal name of the company
`name` | String | The name of the company
`payment_methods` | [String] The list of payment methods available to a company
`reseller_id` | String | The resale number that is assigned to the company for tax reporting purposes
`role(id: ID!)` | CompanyRole | Returns information about the specified company role
`roles(pageSize: Int = 20, currentPage: Int = 1 )` | CompanyRoles! | Returns the list of company roles
`sales_representative` |  CompanySalesRepresentative | The company sales representative
`structure(rootId: ID = 0 depth: Int = 10 )` | CompanyStructure | Returns the company structure of teams and customers in depth-first order
`team(id: ID!)` | CompanyTeam | Returns the specified company team
`user(id: ID!)` | Customer | Returns the specified company user
`users(filter: CompanyUsersFilterInput, pageSize: Int = 20, currentPage: Int = 1)`| CompanyUsers | Returns the company users that match the specified filter
`vat_id` | String | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes

### CompanyAclResource attributes {#CompanyAclResource}

The `CompanyAclResource` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`children` | [CompanyAclResource!] | An array of sub-resources
`id` | ID! | The ID assigned to the ACL resource
`sortOrder` | Int | ACL resource sort order
`text` | String | The label assigned to the ACL resource

### CompanyAdmin attributes {#CompanyAdmin}

The `CompanyAdmin` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the company administrator
`firstname` | String! | The company administrator's first name
`gender` | Int | The company administrator's gender (Male - 1, Female - 2, Not Specified - 3)
`id` | ID! | The ID assigned to the company administrator
`job_title` | String | The job title of the company administrator
`lastname` | String! | The company administrator's last name

### CompanyLegalAddress attributes {#CompanyLegalAddress}

The `CompanyLegalAddress` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String! | The city where the company is registered to conduct business
`country_id` | CountryCodeEnum! | Company's country ID. See the [`countries` query]({{page.baseurl}}/graphql/queries/directory-countries.html)
`postcode` | String! | The ZIP/postal code of the company
`region` | CustomerAddressRegionInput! | An object containing the region name and/or region ID where the company is registered to conduct business
`street` | [String!]! | An array of strings that define the street address where the company is registered to conduct business
`telephone` | String! | The primary phone number of the company.

### CompanyRole attributes {#CompanyRole}

The `CompanyRole` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`id`| ID! | The ID assigned to the role
`name` | String | The name assigned to the role
`permissions` | [CompanyAclResource] | A list of permission resources defined for a role
`users_count` | Int | The total number of users assigned the specified role

### CompanyRoles attributes {#CompanyRoles}

The `CompanyRoles` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`items` | [CompanyRole] | A list of company roles that match the specified filter criteria
`page_info` | SearchResultPageInfo | Pagination meta data
`total_count` | Int | The total number of roles matching the specified filter

### CompanySalesRepresentative attributes {#CompanySalesRepresentative}

The `CompanySalesRepresentative` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the company sales representative
`firstname` | String! | The company sales representative's first name
`lastname` | String! | The company sales representative's last name

### CompanyUsers attributes {#CompanyUsers}

The `CompanyUsers` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[Customer]]({{page.baseurl}}/graphql/queries/customer.html) | An array of `CompanyUser` objects that match the specified search criteria
`page_info` | SearchResultPageInfo | Pagination meta data
`total_count` | Int | The number of objects returned
