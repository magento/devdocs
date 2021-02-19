The `CompanyRole` object contains details about a company role and permissions. It contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | Role ID
`name` | String | The display name of the role
`permissions` | [CompanyAclResource] | A list of permission resources defined for a role
`users_count` | Int | Total number of users with such role within company structure