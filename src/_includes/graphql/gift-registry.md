The `giftRegistry` object returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`created_on` | String! | The date and time the gift registry was created
`dynamic_attributes` | `[GiftRegistryDynamicAttribute]` | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`event_name` | String! | The name the customer assigned to the event
`id` | ID! | The ID assigned to the gift registry
`items` | [[GiftRegistryItemInterface](#giftregistryiteminterface)] | An array of products added to the gift registry
`message` | String! | The message text the customer entered to describe the event
`owner_name` | String! | The customer who created the gift registry
`privacy_settings` | `GiftRegistryPrivacySettings!` | An enum that states whether the gift registry is PRIVATE or PUBLIC
`registrants` | [[GiftRegistryRegistrant](#giftregistryregistrant)]| Contains details about registrant for this gift registry
`shipping_address` | CustomerAddress | Contains the customer's shipping addres
`status` | `GiftRegistryStatus!` | An enum that states whether the gift registry is ACTIVE or INACTIVE
`type` | [[GiftRegistryType](#giftregistrytype)] | Contains details about the type of gift registry

### GiftRegistryType attributes {#giftregistrytype}

The `GiftRegistryType` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`dynamic_attributes_metadata` | [[GiftRegistryDynamicAttributeMetadataInterface](#giftregistrydynamicattributemetadatainterface)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`id` | ID! | The ID assigned to the gift registry
`label` | String! | The display name of the gift registry type

### GiftRegistryRegistrant attributes {#giftregistryregistrant}

The `GiftRegistryRegistrant` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`dynamic_attributes_metadata` | [[GiftRegistryDynamicAttributeMetadataInterface](#giftregistrydynamicattributemetadatainterface)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`email` | String! | The email address of the registrant
`first_name` | String! | The first name of the registrant
`id` | ID! | The ID assigned to the registrant
`last_name` | String! | The last name of the registrant

### GiftRegistryItemInterface attributes {#giftregistryiteminterface}

The `GiftRegistryItemInterface` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`added_on` | String! | The date and time the product was added to the gift registry
`id` | String! | The ID assigned to the gift registry item
`note` | String | A brief message about the gift registry item
`product` | ProductInterface | The details about the product
`quantity` | Float! | The requested quantity of the product
`quantity_fulfilled` | Float! | The fulfilled quantity of the product

### GiftRegistryDynamicAttributeMetadataInterface attributes {#giftregistrydynamicattributemetadatainterface}

{% include graphql/gift-registry-dynamic-interface.md %}
