---
layout: default
title: Design patterns
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
               <p><a href="{{ site.gdeurl }}/extension-dev-guide/module-service-contracts/design-patterns.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
               <h2 id="what-is-a-design-pattern">What is a design pattern?</h2>
               <p>In the programming community, a <i>design pattern</i> is a recommended way of writing code that includes when to use, or not use, the pattern. Think of a design pattern as a best practice with conditions.</p>
               <p>Design patterns for module service contracts tell you:</p>
               <ul>
                  <li>
                     <p>Which types of interfaces to define</p>
                  </li>
                  <li>
                     <p>How and where to define data and service interfaces</p>
                     <p class="q">Reviewer: Or do the design patterns instruct developers where the interfaces reside so that they can implement them?</p>
                  </li>
                  <li>
                     <p>How and where to implement those interfaces</p>
                  </li>
               </ul>
                <p>If additional patterns emerge, some of these functions might make their way into new patterns. For example, changing a password is never likely to be shared across data entities. Validation on the other hand might, so perhaps a new pattern will emerge to introduce AddressValidationInterface.</p>

               <h2 id="top-level-msc">Overview</h2>
               <p>You must define the interfaces for a module service contract in the <b>Api</b> directory for a module. You can replace the implementation code in this directory.</p>
               <p class="q">Reviewer: What does it mean to "replace the implementation code"?</p>
               <p>For example, the interfaces in the <code>Magento\Customer\Api</code> namespace define agreements, or a contract, between clients and implementations of services for the Magento Customer module.
               </p>
               <h2 id="data-interfaces">Data interfaces</h2>
                  <p>When you define data interfaces, follow these design patterns:</p>
               <ul>
                  <li>
                     <p>Define data interfaces in the <code>Api/Data</code> subdirectory for a module.</p>
                     <p>For example, the data interfaces for the Customer module are defined in the <code>/app/code/Magento/Customer/Api/Data</code> subdirectory.</p>
                  </li>
                  <li>
                     <p>To ensure immutable data objects, define only getters, and no setters, in a data interface.</p>
                  </li>
                  <li>
                     <p>To populate a data interface, pass data in the constructor.</p>
                  </li>
                  <li>
                     <p>To modify the state of an entity, you must create a new entity.</p>
                  </li>
                  <li>
                     <p>Use <a href="#data-interface-builders">builders</a> to make these operations easier.</p>
                  </li>
               </ul>
               <h3 id="data-interface-builders">Data interface builders</h3>
              <p>

Data interfaces include only read, or getter, methods that read from a data entity instance.</p>
<p>So without setter methods, how do you build a data entity?</p>
You use a builder that has a class with setter methods
to set properties. Then, you call a final <code>create()</code> method to return a new instance for you.</p>
<p>Builders are automatically generated for you. For example, a <b>CustomerBuilder</b> class is created in the <b>var/generated/Magento/Customer/Api/Data</b> directory.
This class has setter methods. You get a handle to builders through the dependency injection framework.</p>
<p>You cannot modify a data entity instances, and doing so can be dangerous because some code, such as shared caches, relies on immutable data entities.</p>
<p>Instead, each builder has a <code>populate($entity)</code> method that clones the attributes in one entity into a new entity.</p>
<p>Then, you can call the setter methods to change any attributes, and, finally, <code>create()</code> a new instance.</p>
<p>For example:</p>
<blockquote>
<pre>
$this->customerBuilder->populate($customer);
$this->customerBuilder->setGroupId(CustomerGroupServiceInterface::NOT_LOGGED_IN_ID);
$newCustomer = $this->customerBuilder->create();
</pre>
</blockquote>

<p>Also, you use the <code>populateWithArray($nameValuePairsArray)</code> method to populate an entity from a HTML form.</p>
<h3 id="search-results">Data search results interfaces</h3>
<p>When you pass search criteria to a <code>getList()</code> call, a search results interface is returned with the search results.</p>
<p>You must define one interface for each data entity for type hinting purposes. That is, <code>getItems()</code> in the
<code>CustomerSearchResultsInterface</code> returns an array of <code>CustomerInterface</code> data entities.
In <code>GroupSearchResultsInterface</code>, it returns an array of <code>GroupInterface</code> data entities.</p>
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
               <p>Service interfaces are placed in the top-level <code>Api</code> directory.
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
               <p>Repository interfaces have the following methods:</p>
              <ul>
               <li><p><code>save(data entity interface)</code>: Creates a new record if no id present, otherwise updates an existing record with the specified id.</p></li>
               <li><p><code>get(id)</code>: Performs a database lookup by id and returns a data entity interface (such as CustomerInterface or AddressInterface).</p></li>
               <li><p><code>getList(search criteria)</code>: Performs a search for all data entities matching the search criteria and returns a search results interface to give access to the set of matches.</p></li>
               <li><p><code>delete(data entity interface)</code>: Deletes the specified entity (the key is in the entity).</p></li>
               <li><p><code>deleteById(id)</code>: Deletes the specified entity when you only have the key for the entity.</p></li>
               </ul>
               <p>An interface is defined per data entity so the get() method for example can return exactly the right type.</p>
              <h3 id="management-interfaces">Management interfaces</h3>
               <p>Management interfaces contain various management functions that are not related to repositories. For example:</p>
               <ul><li><p><code>AccountManagementInterface</code>: Contains methods like createAccount(), changePassword(), activate(), and isEmailAvailable().</p></li>
               <li><p><code>AddressManagementInterface</code>: Only has a validate() function to check an address is valid.</p></li>
              </ul>

                    <h3 id="related-topics">Related topics</h3>
               <ul>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/service-design.html">Service design</a></li>
                          </ul>
            </div>
         </div>
      </div>
   </div>
</div>




