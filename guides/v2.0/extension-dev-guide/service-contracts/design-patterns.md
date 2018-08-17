---
group: extension-dev-guide
subgroup: 99_Module Development
title: Service contract design patterns
menu_title: Service contract design patterns
menu_order: 4
version: 2.0
redirect_from: /guides/v1.0/extension-dev-guide/service-contracts/design-patterns.html
---

<p>In the programming community, a <i>design pattern</i> is a recommended way of writing code that includes when to use, or not use, the pattern. Think of a {% glossarytooltip 53755359-9916-4677-bff2-f7d26025095a %}design pattern{% endglossarytooltip %} as a best practice with conditions.</p>
<p>Design patterns for service contracts tell you which types of interfaces to define, and how and where to define and implement those  interfaces.</p>

<div class="bs-callout bs-callout-info" id="info">
         <p>Service contract data interfaces are now mutable.</p>
</div>

## Interface types and locations   {#top-level-msc}

<p>A {% glossarytooltip cdf644c4-bc99-4550-a954-dd5ae165785a %}service contract{% endglossarytooltip %} must define data interfaces, which preserve data integrity, and service interfaces, which hide business logic from service requestors.</p>
<p>Data interfaces define functions that return information about data entities, return search results, and set validation rules and return validation results. You must define the data interfaces for a service contract in the <b>Api/Data</b> subdirectory for a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.</p>
<p>
   Service interfaces include management, repository, and {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} interfaces.
   You must define the service interfaces for a service contract in the <b>Api</b> subdirectory for a module.<!--  You can substitute another implementation in this directory. -->
</p>
<!--
   <p>For example, the interfaces in the <b>Magento\Customer\Api</b> {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %} define agreements, or a contract, between clients and implementations of services for the Magento Customer module.
                  </p>
    -->

## Data interfaces   {#data-interfaces}

<p>Define data interfaces in the <b>Api/Data</b> subdirectory for a module.</p>
<p>For example, the data interfaces for the Customer module are in the <b>/app/code/Magento/Customer/Api/Data</b> subdirectory.</p>

### Data search results interfaces   {#search-results-interfaces}

<p>When you pass search criteria to a <code>getList()</code> call, a search results interface is returned with the search results.</p>
<p>You must define one interface for each data {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} for type hinting purposes. That is, the <code>getItems()</code> function in the
   <code>CustomerSearchResultsInterface</code> returns an array of <code>CustomerInterface</code> data entities.
   In <code>GroupSearchResultsInterface</code>, the<code>getItems()</code> function returns an array of <code>GroupInterface</code> data entities.
</p>

## Service interfaces   {#service-interfaces}

<p>Service interfaces include several interface subtypes:</p>
<ul>
   <li>Repository interfaces</li>
   <li>Management interfaces</li>
   <li>Metadata interfaces</li>
</ul>
<p>For file names and coding standards, follow the defined <a href="{{ page.baseurl }}/coding-standards/code-standard-php.html">PHP coding standards</a>.</p>
<p>Place service interfaces in the top-level <b>Api</b> directory for a module.</p>

### Repository interfaces   {#repository-interfaces}

<p>Repository interfaces provide access to persistent data entities.</p>
<p>For example, persistent data entities for the Customer module include Customer, Address, and Group. Consequently, repository interfaces for the Customer module are:</p>
<ul>
   <li><code>CustomerRepositoryInterface</code></li>
   <li><code>AddressRepositoryInterface</code></li>
   <li><code>GroupRepositoryInterface</code></li>
</ul>
<p>Repository interfaces must provide these functions:</p>
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
<p>Each data entity has a corresponding interface. Consequently, the <code>get()</code> function in the corresponding interface, for example, can return the exact type.</p>

### Management interfaces   {#management-interfaces}

<p>Management interfaces provide management functions that are not related to repositories. For example:</p>
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

### Related topics   {#related-topics}

<ul>
   <li><a href="{{ page.baseurl }}/extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a></li>
   <li><a href="{{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a>
   </li>
</ul>
