---
group: php-developer-guide
subgroup: 99_Module Development
title: Service contract design patterns
menu_title: Service contract design patterns
menu_order: 4
---

In the programming community, a _design pattern_ is a recommended way of writing code that includes when to use, or not use, the pattern. Think of a [design pattern](https://glossary.magento.com/design-pattern) as a best practice with conditions.

Design patterns for service contracts tell you which types of interfaces to define, and how and where to define and implement those interfaces.

{:.bs-callout-info}
Service contract data interfaces are now mutable.

## Interface types and locations {#top-level-msc}

A [service contract](https://glossary.magento.com/service-contract) must define data interfaces, which preserve data integrity, and service interfaces, which hide business logic from service requestors.

Data interfaces define functions that return information about data entities, return search results, and set validation rules and return validation results. You must define the data interfaces for a service contract in the `Api/Data` subdirectory for a [module](https://glossary.magento.com/module).

Service interfaces include management, repository, and [metadata](https://glossary.magento.com/metadata) interfaces.
You must define the service interfaces for a service contract in the `Api` subdirectory for a module.

## Data interfaces {#data-interfaces}

Define data interfaces in the `Api/Data` subdirectory for a module.

For example, the data interfaces for the Customer module are in the `/app/code/Magento/Customer/Api/Data` subdirectory.

{:.bs-callout-info}
The [SimpleDataObjectConverter]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SimpleDataObjectConverter.php) follows a strict 'camel case' to 'snake case' conversion of data keys (table columns). You should not use `underscores (_)` between alphanumerical characters in column names.
For example, use `default_shipping1` instead of `default_shipping_1`, as the Data Interface method `defaultShipping1` will be converted into `default_shipping1`.

### Data search results interfaces {#search-results-interfaces}

When you pass search criteria to a `getList()` call, a search results interface is returned with the search results.

You must define one interface for each data [entity](https://glossary.magento.com/entity) for type hinting purposes. That is, the `getItems()` function in the
`CustomerSearchResultsInterface` returns an array of `CustomerInterface` data entities.
In `GroupSearchResultsInterface`, the `getItems()` function returns an array of `GroupInterface` data entities.

## Service interfaces {#service-interfaces}

Service interfaces include several interface subtypes:

-  Repository interfaces
-  Management interfaces
-  Metadata interfaces

For file names and coding standards, follow the defined [PHP coding standards]({{ page.baseurl }}/coding-standards/code-standard-php.html).

Place service interfaces in the top-level `Api` directory for a module.

### Repository interfaces {#repository-interfaces}

Repository interfaces provide access to persistent data entities.

For example, persistent data entities for the Customer module include Customer, Address, and Group. Consequently, repository interfaces for the Customer module are:

-  `CustomerRepositoryInterface`
-  `AddressRepositoryInterface`
-  `GroupRepositoryInterface`

Repository interfaces must provide these functions:

Method | Description
--- | ---
`save(data entity interface)` | If entity ID is not specified, creates a record. If entity ID is specified, updates the record for the specified ID.
`get(id)` | Performs a database lookup by ID and returns a data entity interface, such as `CustomerInterface`or `AddressInterface`.
`getList(search criteria)` | Performs a search for all data entities that match specified search criteria and returns a search result interface that gives access to the set of matches.
`delete(data entity interface)` | Deletes a specified entity. The entity contains the key (ID).
`deleteById(id)` | Deletes a specified entity by key (ID).

Each data entity has a corresponding interface. Consequently, the `getById()` function in the corresponding interface, for example, can return the exact type.

### Management interfaces {#management-interfaces}

Management interfaces provide management functions that are not related to repositories. For example:

Interface | Description
--- | ---
`AccountManagementInterface` | Defines the `createAccount()`, `changePassword()`, `activate()`, and `isEmailAvailable()` functions.
`AddressManagementInterface` | Defines the `validate()` function that validates an address.

### Metadata interfaces {#metadata-interfaces}

Metadata interfaces provide methods for retrieving metadata, the interfaces are not related to repositories. For example:

Interface | Description
--- | ---
`AttributeMetadataInterface` | Provides customer attribute metadata and defines the constants used as keys of data array and methods. See more [AttributeMetadataInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Api/Data/AttributeMetadataInterface.php){:target="_blank"}.
`ProductMetadataInterface` | Provides Magento application product metadata. Defines the `getVersion()`, `getEdition()`, `getName()` methods.
`CustomerMetadataManagementInterface` | Interface for managing customer attributes metadata. Defines the constant `ENTITY_TYPE_CUSTOMER`.
`AddressMetadataInterface` | Interface for retrieving information about customer address attributes metadata. Defines the constants `ATTRIBUTE_SET_ID_ADDRESS`, `ENTITY_TYPE_ADDRESS`, `DATA_INTERFACE_NAME`.

{:.ref-header}
Related topics

-  [Service contracts]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-contracts.html)
-  [Configure services as web APIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html)
