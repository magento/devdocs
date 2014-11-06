---
layout: default
title: Service interface patterns and concepts
---

<div class="container bs-docs-container">
   <div class="row">
      <div class="jumbotron">
         <h1 class="api1" id="coding-standards">{{ page.title }}</h1>
      </div>
      <div class="row">
         <div class="col-xs-3">
            <p>&nbsp;</p>
         </div>
         <div class="col-xs-9" role="main">
            <div class="bs-docs-section">
               <p><a href="{{ site.githuburl }}guides/v1.0/extension-dev-guide/services/services.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
               <h2 id="repository-interfaces">Repository interfaces</h2>

<p>Repository interfaces give access to persistent data entities. In the case of the Customer module, persistent data entities include Customer, Address, and Group. Hence there are three interfaces CustomerRepositoryInterface, AddressRepositoryInterface, and GroupRepositoryInterface. Repository interfaces have the following methods:</p>

*     save(data entity interface): Creates a new record if no id present, otherwise updates an existing record with the specified id.
*     get(id): Performs a database lookup by id and returns a data entity interface (such as CustomerInterface or AddressInterface).
*     getList(search criteria): Performs a search for all data entities matching the search criteria and returns a search results interface to give access to the set of matches.
*     delete(data entity interface): Deletes the specified entity (the key is in the entity).
*     deleteById(id): Deletes the specified entity when you only have the key for the entity.

An interface is defined per data entity so the get() method for example can return exactly the right type.

## Management interfaces

Management interfaces contain various management functions that are not related to repositories. For example,

*     AccountManagementInterface: Contains methods like createAccount(), changePassword(), activate(), and isEmailAvailable().
*     AddressManagementInterface: Only has a validate() function to check an address is valid.

If additional patterns emerge, some of these functions may make their way into new patterns. For example, changing a password is never likely to be shared across data entities. Validation on the other hand might, so perhaps a new pattern will emerge to introduce AddressValidationInterface.

## Data Entity Interface

The Customer module currently defines 3 data entities: Customer, Address, and Group.

To me data entities are one of the cool side benefits of service contracts. I think of them like as being a part of the “Magento logical schema”. There are normally database tables under these entities, but the database tables could be complicated – for example some attributes may be stored in an EAV table (so one data entity may be represented by a set of MySQL database tables). So data entities reveal a simpler data model than the underlying relational database schema.

For example, the data entity model for the Customer module can be shown as follows:

## Customer Data Entities

It just makes it easier to understand the Magento data model being able to talk about data entities at a level higher than MySQL tables.

Further, an idea is to eventually allow different storage technologies for different data collections. For example, use a NoSQL database to replace product tables. There are challenges here still to solve (like how to deal with database transactions that cross database technologies), but separating the conceptual model of Customer from the physical MySQL database schema representation makes this easier to comprehend.

Oh, if you poke around in the Magento\Customer\Api\Data directory you may also notice RegionInterface. Region is not a data entity as it does not have a Repository Interface. The Region class is only used to group related business logic. The data for a Region instance is stored in the Address entity.

## Builders

If you look at the data entities you may notice there are only methods to read from a data entity instance. So how do you create a data entity in PHP code? The answer is Magento is using the “builder” pattern where you have a class with setter methods to set all the properties, then you call a final create() method to return a new instance for you. If you hunt around the GitHub repo you won’t find the builder code. This is because they are automatically generated for you. For example, there will be a CustomerBuilder class created in the var/generated/Magento/Customer/Api/Data directory. This class will have all the setter methods. (Again, you get a handle to builders via the Magento 2 dependency injection framework.)

So how can you modify an instance of a data entity you got from somewhere? The answer is simple: you can’t!  Actually doing so can be dangerous as some sections of code rely on entities not being changed (e.g. in shared caches). Instead, each builder has a populate($entity) method that will clone the attributes out of one entity into a new entity. You can then call the setter methods to change any attributes, then finally create() a new instance.

<blockquote>
<pre>
$this->customerBuilder->populate($customer);
$this->customerBuilder->setGroupId(CustomerGroupServiceInterface::NOT_LOGGED_IN_ID);
$newCustomer = $this->customerBuilder->create();
</pre>
</blockquote>

There is also a populateWithArray($nameValuePairsArray) for say populating an entity from a HTML form.

## Search Results Interface

A Search Results Interface is returned by a getList() call that is passed search criteria. It provides access to the results of a search. An interface needs to be defined per data entity for type hinting purposes. That is, getItems() in CustomerSearchResultsInterface returns an array of CustomerInterface data entities; in GroupSearchResultsInterface it returns an array of GroupInterface data entities.

(Yeah, it would be kinda nice if PHP had generic types like Java or Hack. We are driving for type safety and hinting in APIs in Magento 2, so we are resisting a generic SearchResultsInterface that just returns an array with no hinting of the types of values in the array. In Java or Hack you would instead say something like SearchResults<Customer>. But it has not been a big deal so far.)

## Metadata Interfaces

<p>Metadata interfaces provide information about what attributes are defined for an entity. This includes custom attributes which I will touch on below.</p>

               <h3 id="related-topics">Related topics</h3>
               <ul>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/service-design.html">Service design</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/service-build.html">How to build a service</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/service-how-to-use.html">How a Client Uses a Service</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/service-compare-m1-m2.html">Services Use Case&mdash;Magento 1 and Magento 2 Side-By-Side</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/service-create-customer.html">Services Use Case&mdash;Creating a Customer</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>





