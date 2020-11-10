The `giftRegistry` object returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`created_on` | String! | The date on which the gift registry was created. Only the registry owner can access this attribute
`dynamic_attributes` | `[GiftRegistryDynamicAttribute]` | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`event_name` | String! | The name the customer assigned to the event
`id` | ID! | The ID assigned to the gift registry
`items` | [[GiftRegistryItemInterface](#GiftRegistryItemInterface)] | An array of products added to the gift registry
`message` | String! | The message text the customer entered to describe the event
`owner_name` | String! | The customer who created the gift registry
`privacy_settings` | `GiftRegistryPrivacySettings!` | An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute
`registrants` | [[GiftRegistryRegistrant](#GiftRegistryRegistrant)]| Contains details about each registrant for the event
`shipping_address` | CustomerAddress | Contains the customer's shipping address. Only the registry owner can access this attribute
`status` | `GiftRegistryStatus!` | An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute
`type` | [[GiftRegistryType](#GiftRegistryType)] | Contains details about the type of gift registry

### GiftRegistryDynamicAttribute attributes {#GiftRegistryDynamicAttribute} 

The `GiftRegistryDynamicAttribute` object implements `GiftRegistryDynamicAttributeInterface`. It also defines the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`group` | GiftRegistryDynamicAttributeGroup | An enum that categorizes the dynamic attribute set. The possible values are EVENT_INFORMATION, PRIVACY_SETTINGS, REGISTRANT, GENERAL_INFORMATION, DETAILED_INFORMATION, and SHIPPING_ADDRESS.

### GiftRegistryDynamicAttributeInterface attributes {#GiftRegistryDynamicAttributeInterface}

`GiftRegistryDynamicAttributeInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | ID! | The internal ID of the dynamic attribute
`label` | String! | The display name of the dynamic attribute
`value` | String! | A corresponding value for the code

### GiftRegistryRegistrant attributes {#GiftRegistryRegistrant}

The `GiftRegistryRegistrant` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`dynamic_attributes_metadata` | [[GiftRegistryDynamicAttributeMetadataInterface](#GiftRegistryDynamicAttributeMetadataInterface)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`email` | String! | The email address of the registrant. Only the registry owner can access this attribute
`first_name` | String! | The first name of the registrant
`id` | ID! | The ID assigned to the registrant
`last_name` | String! | The last name of the registrant

### GiftRegistryType attributes {#GiftRegistryType}

The `GiftRegistryType` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`dynamic_attributes_metadata` | [[GiftRegistryDynamicAttributeMetadataInterface](#GiftRegistryDynamicAttributeMetadataInterface)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`id` | ID! | The ID assigned to the gift registry
`label` | String! | The display name of the gift registry type

### GiftRegistryItemInterface attributes {#GiftRegistryItemInterface}

This `GiftRegistryItemInterface` contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`added_on` | String! | The date the product was added to the gift registry
`id` | String! | The ID assigned to the gift registry item
`note` | String | A brief message about the gift registry item
`product` | [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html) | The details about the product
`quantity` | Float! | The requested quantity of the product
`quantity_fulfilled` | Float! | The fulfilled quantity of the product

### GiftRegistryDynamicAttributeMetadataInterface attributes {#GiftRegistryDynamicAttributeMetadataInterface}

{% include graphql/gift-registry-dynamic-interface.md %}
