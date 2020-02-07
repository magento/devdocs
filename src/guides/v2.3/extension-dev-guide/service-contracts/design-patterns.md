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
You must define the service interfaces for a service contract in the `Api` subdirectory for a module.<!--  You can substitute another implementation in this directory. -->

<!--
   <p>For example, the interfaces in the <b>Magento\Customer\Api</b> [namespace](https://glossary.magento.com/namespace) define agreements, or a contract, between clients and implementations of services for the Magento Customer module.
                  </p>
    -->

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

<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Function</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>
         <p><code>save(data entity interface)</code></p>
      </td>
      <td>
         <p>If an ID is not specified, creates a record.</p>
         <p>If an ID is specified, updates the record for the specified ID.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>get(id)</code></p>
      </td>
      <td>
         <p>Performs a database lookup by ID.</p>
         <p>Returns a data entity interface, such as <code>CustomerInterface</code> or <code>AddressInterface</code>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>getList(search criteria)</code></p>
      </td>
      <td>
         <p>Performs a search for all data entities that match specified search criteria.</p>
         <p>Returns a search results interface that gives access to the set of matches.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>delete(data entity interface)</code></p>
      </td>
      <td>
         <p>Deletes a specified entity. The entity contains the key (ID).</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>deleteById(id)</code></p>
      </td>
      <td>
         <p>Deletes a specified entity by key (ID).</p>
      </td>
   </tr>
</table>

Each data entity has a corresponding interface. Consequently, the `get()` function in the corresponding interface, for example, can return the exact type.

### Management interfaces {#management-interfaces}

Management interfaces provide management functions that are not related to repositories. For example:

<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Interface</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>
         <p><code>AccountManagementInterface</code></p>
      </td>
      <td>
         <p>Defines the <code>createAccount()</code>, <code>changePassword()</code>, <code>activate()</code>, and <code>isEmailAvailable()</code> functions.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>AddressManagementInterface</code></p>
      </td>
      <td>
         <p>Defines the <code>validate()</code> function that validates an address.</p>
      </td>
   </tr>
</table>

{:.ref-header}
Related topics

-  [Service contracts]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-contracts.html)
-  [Configure services as web APIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html)
