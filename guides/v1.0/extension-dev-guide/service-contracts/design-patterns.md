---
layout: default
title: Service contract design patterns
---

<div class="container bs-docs-container">
   <div class="row">
      <div class="jumbotron">
         <h1 class="api1" id="design-patterns">{{ page.title }}</h1>
      </div>
      <div class="row">
         <div class="col-xs-3">
            <p>&nbsp;</p>
         </div>
         <div class="col-xs-9" role="main">
            <div class="bs-docs-section">
               <p><a href="{{ site.gdeurl }}/extension-dev-guide/service-contracts/design-patterns.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
               <p>In the programming community, a <i>design pattern</i> is a recommended way of writing code that includes when to use, or not use, the pattern. Think of a design pattern as a best practice with conditions.</p>
               <p>Design patterns for service contracts tell you which types of interfaces to define, and how and where to define and implement those  interfaces.</p>
               <!-- <p>If additional patterns emerge, some of these functions might make their way into new patterns. For example, changing a password is never likely to be shared across data entities. Validation on the other hand might, so perhaps a new pattern will emerge to introduce AddressValidationInterface.</p> -->
               <h2 id="top-level-msc">Interface types and locations</h2>
               <p>A service contract must define data interfaces, which preserve data integrity, and service interfaces, which hide business logic from service requestors.</p>
               <p>Data interfaces define functions that return information about data entities, return search results, and set validation rules and return validation results. To build data entities, you use builders. These builders are generated automatically when you set up dependency injection in the <b>di.xml</b> file. You must define the data interfaces for a service contract in the <b>Api/Data</b> subdirectory for a module.</p>
               <p>Service interfaces include management, repository, and metadata interfaces.
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
                     <p>Define only constants and <i>getter</i>, or read, functions in a data interface.</p></li>
                     <li><p>Do not define <i>setter</i>, or write, functions in a data interface.</p>
                  </li>
                  <li><p>Getter functions must take no parameters.</p></li>
                  <li><p>Getter functions can return only:</p>
                  <ul><li>A simple type: Integer, floating point number, string, or boolean</li>
                  <li>An array of a simple type</li>
                  <li>Another data interface</li>
                  </ul>
                  <p>Getter functions cannot return mixed types.</p></li>
                  <li>
                     <p>To populate a data interface, pass data in the constructor.</p>
                  </li><li>
                     <p>Because data interfaces include only getter functions, use <a href="#data-entity-builders">data entity builders</a> to create or modify data entities.</p>
                      <div class="bs-callout bs-callout-info" id="info">
                  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
                  <span class="glyphicon-class"><p>To modify the state of an entity, you create a new entity.</p></span></div>
                  </li>

               </ul>
               <h3 id="data-entity-builders">Data entity builders</h3>
               <p>A data entity builder is a class that provides setter functions that enable you to build data entities.</p>
               <p>You automatically generate and get a handle to builders through the dependency injection framework. After you set up dependency injection in the <b>di.xml</b> file, builders are automatically generated for defined dependencies.</p>
               <p>For example, the <b>CustomerBuilder</b> class with setter functions is created in the <b>var/generated/Magento/Customer/Api/Data</b> directory.

               </p>
               <p>To use a builder to create a data entity:</p>
               <ol>
                  <li>
                     <p>Use a builder
                        to set properties.
                     </p>
                  </li>
                  <li>
                     <p>Call a final <b>create()</b> function to return a new instance for you.</p>
                  </li>
               </ol>
               <p>You cannot modify a data entity instances, and doing so can be dangerous because some code, such as shared caches, relies on immutable data entities.</p>
               <p>Instead, each builder has a <b>populate($entity)</b> function that clones the attributes in one entity into a new entity.</p>
               <p>Then, you can call the setter functions to change any attributes, and, finally, <b>create()</b> a new instance.</p>
               <p>For example:</p>
               <blockquote>
                  <pre>
$this->customerBuilder->populate($customer);
$this->customerBuilder->setGroupId(CustomerGroupServiceInterface::NOT_LOGGED_IN_ID);
$newCustomer = $this->customerBuilder->create();
</pre>
               </blockquote>
               <p>Also, you use the <b>populateWithArray($nameValuePairsArray)</b> function to populate an entity from a HTML form.</p>
               <h3 id="search-results">Data search results interfaces</h3>
               <p>When you pass search criteria to a <b>getList()</b> call, a search results interface is returned with the search results.</p>
               <p>You must define one interface for each data entity for type hinting purposes. That is, <b>getItems()</b> in the
                  <b>CustomerSearchResultsInterface</b> returns an array of <b>CustomerInterface</b> data entities.
                  In <b>GroupSearchResultsInterface</b>, it returns an array of <b>GroupInterface</b> data entities.
               </p>
               <h3 id="validation-results">Validation results</h3>
               <h3 id="validation-rules">Validation rules</h3>
               <h3 id="attribute-metadata">Attribute metadata</h3>
               <p>Metadata interfaces provide information about what attributes are defined for an entity. This includes custom attributes which I will touch on below.</p>
               <h3 id="getters">Getters</h3>
               <p/>
               <h2 id="service-interfaces">Service interfaces</h2>
               <p>Service interfaces include several interface subtypes:</p>
               <ul>
                  <li>Repository interfaces</li>
                  <li>Management interfaces</li>
                  <li>Metadata interfaces</li>
               </ul>
               <p>Service interfaces are placed in the top-level <b>Api</b> directory.
                  Previously defined <a href={{ site.gdeurl }}/guides/v1.0/coding-standards/bk-coding-standards.html">coding standards</a> should be followed, for example AccountManagmentInterface and AccountRepositoryInterface.
               </p>
               <h3 id="repository-interfaces">Repository interfaces</h3>
               <p>Repository interfaces provide access to persistent data entities.</p>
               <p>For example, persistent data entities for the Customer module include Customer, Address, and Group.</p>
               <p>Repository interfaces for the Customer module are:</p>
               <ul>
                  <li>CustomerRepositoryInterface.php</li>
                  <li>AddressRepositoryInterface</li>
                  <li>GroupRepositoryInterface</li>
               </ul>
               <p>Repository interfaces have the following functions:</p>
               <ul>
                  <li>
                     <p><b>save(data entity interface)</b>: Creates a new record if no id present, otherwise updates an existing record with the specified id.</p>
                  </li>
                  <li>
                     <p><b>get(id)</b>: Performs a database lookup by id and returns a data entity interface (such as CustomerInterface or AddressInterface).</p>
                  </li>
                  <li>
                     <p><b>getList(search criteria)</b>: Performs a search for all data entities matching the search criteria and returns a search results interface to give access to the set of matches.</p>
                  </li>
                  <li>
                     <p><b>delete(data entity interface)</b>: Deletes the specified entity (the key is in the entity).</p>
                  </li>
                  <li>
                     <p><b>deleteById(id)</b>: Deletes the specified entity when you only have the key for the entity.</p>
                  </li>
               </ul>
               <p>An interface is defined per data entity so the get() function for example can return exactly the right type.</p>
               <h3 id="management-interfaces">Management interfaces</h3>
               <p>Management interfaces provide management functions that are not related to repositories. For example:</p>
               <ul>
                  <li>
                     <p><b>AccountManagementInterface</b>: Defines the <b>createAccount()</b>, <b>changePassword()</b>, <b>activate()</b>, and <b>isEmailAvailable()</b> functions.</p>
                  </li>
                  <li>
                     <p><b>AddressManagementInterface</b>: Defines the <b>validate()</b> function that validates an address.</p>
                  </li>
               </ul>
               <h3 id="related-topics">Related topics</h3>
               <ul>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-domain-guidelines.html">Guidelines for domain and service layers</a>
                  </li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-create-example.html">Create a service - example</a>
                  </li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>




