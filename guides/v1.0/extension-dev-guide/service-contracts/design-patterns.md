---
layout: default
group: extension-dev-guide
subgroup: Concepts
title: Service contract design patterns
menu_title: Service contract design patterns
menu_order: 3
github_link: extension-dev-guide/service-contracts/design-patterns.md
---

<p>In the programming community, a <i>design pattern</i> is a recommended way of writing code that includes when to use, or not use, the pattern. Think of a design pattern as a best practice with conditions.</p>
<p>Design patterns for service contracts tell you which types of interfaces to define, and how and where to define and implement those  interfaces.</p>

<h2 id="top-level-msc">Interface types and locations</h2>
<p>A service contract must define data interfaces, which preserve data integrity, and service interfaces, which hide business logic from service requestors.</p>
<p>Data interfaces define functions that return information about data entities, return search results, and set validation rules and return validation results. To build data entities, you use builders. These builders are generated automatically when you set up dependency injection in the <b>di.xml</b> file. You must define the data interfaces for a service contract in the <b>Api/Data</b> subdirectory for a module.</p>
<p>
   Service interfaces include management, repository, and metadata interfaces.
   You must define the service interfaces for a service contract in the <b>Api</b> subdirectory for a module.<!--  You can substitute another implementation in this directory. -->
</p>
<!--
   <p>For example, the interfaces in the <b>Magento\Customer\Api</b> namespace define agreements, or a contract, between clients and implementations of services for the Magento Customer module.
                  </p>
    -->
<h2 id="data-interfaces">Data interfaces</h2>
<p>Define data interfaces in the <b>Api/Data</b> subdirectory for a module.</p>
<p>For example, the data interfaces for the Customer module are in the <b>/app/code/Magento/Customer/Api/Data</b> subdirectory.</p>
<p>To ensure immutable data objects, follow these design patterns for data interfaces:</p>
<ul>
   <li>
      <p>Define only constants and <i>getter</i>, or read, functions in a data interface.</p>
   </li>
   <li>
      <p>Do not define <i>setter</i>, or write, functions in a data interface.</p>
   </li>
   <li>
      <p>Getter functions must take no parameters.</p>
   </li>
   <li>
      <p>A getter function can return only one of these objects:</p>
      <ul>
         <li>A simple type: Integer, floating point number, string, or boolean</li>
         <li>An array of a simple type</li>
         <li>Another data interface</li>
      </ul>
      <p>Getter functions cannot return mixed types.</p>
   </li>
   <li>
      <p>To populate a data interface, pass data in the constructor.</p>
   </li>
   <li>
      <p>Because data interfaces include only getter functions, use <a href="#data-entity-builders">data entity builders</a> to create or modify data entities.</p>
      <div class="bs-callout bs-callout-info" id="info">
         <p>You cannot modify data entity instances. Instead, you use builder functions to clone attributes for a specified entity into a new entity, change any attributes, and create a new instance.</p>
      </div>
   </li>
</ul>
<h3 id="data-entity-builders">Data entity builders</h3>
<p>A data entity builder is a class that provides setter functions that enable you to build data entities.</p>
<p>You automatically generate and get a handle to builders through the dependency injection framework. After you set up dependency injection in the <b>di.xml</b> file, builders are automatically generated for defined dependencies.</p>
<!--
<p class="q">Reviewer: Exactly how do settings in di.xml cause builders to be generated?</p>
 -->
<p>For example, the <code>CustomerBuilder</code> class with setter functions is automatically generated in the <b>var/generated/Magento/Customer/Api/Data</b> subdirectory.
</p>
<h4 id="build-data-entity">Build a data entity</h4>
<p>To use builder functions to build a data entity:</p>
<ol>
   <li>Call setter functions to set attributes.</li>
   <li>Call the <code>final</code> <code>create()</code> function to return a new instance.</li>
</ol>
<p>For example:</p>

   <pre>
$this->customerBuilder->setGroupId(CustomerGroupServiceInterface::NOT_LOGGED_IN_ID);
...
$newCustomer = $this->customerBuilder->create();
</pre>

<h4 id="modify-data-entity">Modify a data entity</h4>
<p>You cannot modify data entity instances, and doing so can be dangerous because some code, such as shared caches, relies on immutable data entities.</p>
<p>Instead, each builder has a <code>populate($entity)</code> function that clones entity attributes into a new entity.</p>
<p>To use builder functions to modify a data entity:</p>
<ol>
   <li>Call the <code>populate($entity)</code> function to clone attributes for a specified entity into a new entity.</li>
   <li>Call setter functions to change any attributes.</li>
   <li>Call the <code>final</code> <code>create()</code> function to create a new instance.</li>
</ol>
<p>For example:</p>

   <pre>
$this->customerBuilder->populate($customer);
$this->customerBuilder->setGroupId(CustomerGroupServiceInterface::NOT_LOGGED_IN_ID);
$newCustomer = $this->customerBuilder->create();
</pre>

<div class="bs-callout bs-callout-info" id="info">
   <p>To populate an entity from an HTML form, use the <code>populateWithArray($nameValuePairsArray)</code> function.</p>
</div>
<h3 id="search-results">Data search results interfaces</h3>
<p>When you pass search criteria to a <code>getList()</code> call, a search results interface is returned with the search results.</p>
<p>You must define one interface for each data entity for type hinting purposes. That is, the <code>getItems()</code> function in the
   <code>CustomerSearchResultsInterface</code> returns an array of <code>CustomerInterface</code> data entities.
   In <code>GroupSearchResultsInterface</code>, the<code>getItems()</code> function returns an array of <code>GroupInterface</code> data entities.
</p>
<!--
<h3 id="validation-rules">Validation rules</h3>
<p class="q">Reviewer: What are patterns for validation rules interfaces?</p>
<h3 id="validation-results">Validation results</h3>
<p class="q">Reviewer: What are patterns for validation results interfaces?</p>
<h3 id="attribute-metadata">Attribute metadata</h3>
<p>Metadata interfaces provide information about what attributes are defined for an entity. This includes custom attributes.</p>
<p class="q">Reviewer: What are patterns for attribute metadata interfaces?</p>
 -->
<h2 id="service-interfaces">Service interfaces</h2>
<p>Service interfaces include several interface subtypes:</p>
<ul>
   <li>Repository interfaces</li>
   <li>Management interfaces</li>
   <li>Metadata interfaces</li>
</ul>
<p>For file names and coding standards, follow the defined <a href="{{ site.gdeurl }}coding-standards/code-standard-php.html">PHP coding standards</a>.</p>
<p>Place service interfaces in the top-level <b>Api</b> directory for a module.</p>
<h3 id="repository-interfaces">Repository interfaces</h3>
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
<h3 id="management-interfaces">Management interfaces</h3>
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
<h3 id="related-topics">Related topics</h3>
<ul>
   <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a></li>
   <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a>
   </li>
</ul>







