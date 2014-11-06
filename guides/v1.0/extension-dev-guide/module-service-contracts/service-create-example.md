---
layout: default
title: Create a service - example
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
               <p>A public interface is a set of code that third-party developers can call, implement, or pluginize. Magento guarantees that this code will not change in subsequent releases without a major version change.
                  Public interfaces for a module reside in the Api folder for a module. For example, the public interfaces for the Customer module reside in the app/code/Magento/Customer/Api folder. Third-party developers should use only these interfaces. You can use other interfaces but Magento does not guarantee that other interface will not be modified or removed in subsequent releases.
               </p>
               <p>A <i>service contract</i> is a set of PHP interfaces and possibly classes that reside in the <code>Api</code> directory for a module.</p>
               <p>For example, the service contract for the <code>Magento_Customer</code> module has the <code>Magento\Customer\Api</code> PHP namespace.</p>
               <p>The top level namespace has all the service interfaces that make sense calling directly from other modules (via PHP code) or binding to REST or SOAP endpoints. (To call a service method from another module, the dependency injection framework is used to locate the implementation of the interface.) These interfaces provide access to business logic that can be called. Within the Api namespace there is a single sub-namespace of Data. This directory contains interfaces to access data structures passed to or returned from functions in the Api directory.</p>
               <p>A service contract preserves data integrity and provides a module contract that current Magento models can implement.</p>
               <p>Service contracts (MSC) replace the Magento 1 service layer.
               </p>
               <p>This will eliminate the new layer and will make adoption of the design easier.  We are calling this approach Service contracts or MSC for short.  This solution is an abstraction of business operations and entities for a module to produces a durable API for client to rely upon.</p>
               <p>As with the Service Layer, immutability of data is fundamental principle and is a large effort.  This design, allows the implementation of the contract to be provided by the models and therefore we lose the programmatic enforcement of immutability.  We will use this loophole to expedite initial refactoring efforts and develop tooling to highlight and address as we iterate to our desired end state of immutability.</p>
               <p>The following diagram shows the module contract by which all integrations will be done.</p>
               <p>A service interface is a *single entry point* to the business logic encapsulated by the service. Therefore, overriding business login in an interface is much easier than in Magento 1.x.</p>
               <p>For example, interfaces of the Customer <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1" target="_blank">module</a> has more than 20 public methods. To override Customer business logic, override methods on the interface. It's much simpler than before. For details, see <a href="{{ site.gdeurl }}extension-dev-guide/services/service-compare-m1-m2.html">Service implementation comparison</a>.</p>
               <h3 id="service-design">Service design</h3>
               <p>A service is a set of PHP interfaces, data types for holding data to be passed across the service layer, and implementations of those interfaces.</p>
               <p>The interfaces and methods should be use-case-oriented. That is, a service's methods should provide logical business operations such as:</p>
               <ul>
                  <li>Create an order</li>
                  <li>Add items to a shopping cart</li>
                  <li>Create a new customer account</li>
                  <li>Compute shipping costs</li>
               </ul>
               <p>Because services can also be easily exposed as REST or SOAP, you can use a single API call to provide and return a rich data structure (rather than requiring many smaller calls with simpler, shallower APIs). This way, a single web service request and response completes an entire operation. The goal also is for a single call to be stateless and atomic, simplifying application design.</p>
               <p>The REST API accepts and returns JSON or XML; the SOAP API accepts and returns XML. Because the data has to be serialized and deserialized, we place restrictions on the data types that can be used. These are referred to as <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/Customer.php">service data objects</a> and they are immutable.</p>
               <p>Service data objects inherit from the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Service/Data" target="_blank">Magento framework's base service data objects classes</a>.</p>
               <h3 id="service-properties">Service properties</h3>
               <p>Properties of a useful service:</p>
               <ul>
                  <li>Simple data structures. The inputs and outputs of every service interface are simple value objects.
                  </li>
                  <li>Data structures used for transferring data to the service shouldn't contain any complex logic.</li>
                  <li>Stateless. Each service method must also be independent and <a href="http://en.wikipedia.org/wiki/Stateless_protocol">stateless</a>, meaning that a service should not maintain any session information between requests. However, a service *can* persist other information between requests, such as the entities that are being created as a result of the request.
                  </li>
                  <li>Versioned. Services also need to be versioned to support graceful evolution of the interface and to prevent conflicts with other modules and applications that might require a different version of the same service.
                  </li>
               </ul>
               <h3 id="service-responsibilities">Service responsibilities</h3>
               <p>A service is responsible for:</p>
               <ul>
                  <li>Validating input</li>
                  <li>Loading the models that are required to implement the business logic based on the inputs</li>
                  <li>Invoking any instance-specific authorization logic (which might be implemented in the model)</li>
                  <li>Invoking the requested business logic on the models
                  </li>
                  <li>Constructing the response. Business logic should be implemented by a model whenever possible. The circumstance in which a service class should enforce business rules is when the business logic is split among multiple models and doesn't make sense to put in any one model.
                  </li>
               </ul>
               <p>A service is _not_ responsible for:</p>
               <ul>
                  <li>Formatting data for the user.
                     Formatting data is the responsibility of service data objects.
                  </li>
                  <li>Operation-level authorization logic (that is, determining the Magento resources to which the caller needs authenticated access)
                     Authorization is performed in the Web API framework based on the caller's role and the minimum resource permissions needed by the exposed API
                     The caller's role is established (by the token or session OD) in the Web API framework
                     Resources are specified in the module's `webapi.xml`
                  </li>
               </ul>
               <p>For more information about how this works, see <a href="{{ site.gdeurl }}get-started/rest/rest-overview.html">Accessing Magento Objects Using REST</a>.</p>
               <p>The Magento 2 service framework defines and exposes extensible features.</p>
               <h2 id="service-interface-patterns-concepts">Service interface patterns and concepts</h2>
               <h2 id="guidelines">Guidelines for segregation of logic between domain and service layers</h2>
               <h2 id="how-to">Example of how to create a typical service</h2>
               <p>mechanics, components</p>
               <h2 id="web-services">How to expose and invoke services as web services</h2>
               <h2>Overview</h2>
               <p>As this figure shows, the service framework, or <i>service layer</i>, sits between the presentation layer and business logic:</p>
               <p><img src="{{ site.baseurl }}common/images/service-layer_block-diagram.png"/></p>
               <p><img src="{{ site.baseurl }}common/images/High_Level_API_Design.png"/></p>
               <p>The service interface accepts requests from web pages and web services, meaning they do not need to know the details of business logic.</p>
               <p>The service layer:</p>
               <ul>
                  <li>Is a functional abstraction that represents the business features available to other parts of an application or Magento.</li>
                  <li>Represents a boundary that encapsulates the business logic a module exposes without revealing any of the details about how that functionality is implemented.</li>
               </ul>
               <p>A service is:</p>
               <ul>
                  <li>An interface definition.
                     <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1" target="_blank">All Customer services interfaces</a>.
                  </li>
                  <li>A class that implements the interface.
                     The service class typically delegates some business logic to other components like models and helpers, making the service class relatively "thin".
                     <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountService.php" target="_blank">Here</a> is a class that implements the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CusomterAccountServiceInterface</a>.
                  </li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/build-svc.html#about-service-data-objects">Service data objects</a> that serialize, deserialize, and format data.</li>
               </ul>
               <h2 id="service-layer-benefits">Benefits of the service layer</h2>
               <p>Benefits include:</p>
               <ul>
                  <li>Enables you to move business logic out of templates, which reduces the size of templates and makes customization easier.</li>
                  <li>Enables all business logic to be easily made available to external applications as web services by creating <tt>webapi.xml</tt> (<a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">sample</a>).</li>
                  <li>Services are versioned, which provides a way for them to be backward-compatible. We recommend, for example, that when you provide V2 of a service you enable V1 of the service to function after upgrading Magento software.</li>
               </ul>
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





