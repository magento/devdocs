---
layout: default
title: Module service contracts
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
               <p>As a modular system, Magento is highly customizable. This flexibility, however, can make it difficult to describe dependencies across the system. Additionally, business logic tends to leak across layers of the Magento system, which manifests as duplicated and inconsistent code.</p>
               <p>To address these issues, Magento introduces module service contracts. A module can define a service contract to provide a well-defined, stable API that other modules and third-party extensions can use. Module service contracts enable you to interact with modules across a system that encapsulates product business logic and data entities for a module. Service contracts preserve data integrity and provide module contracts that current Magento models can implement. Most importantly, these contracts ensure that the API is durable.</p>
               <p>Service contracts enhance the modularity of Magento. Service contracts also make it easy to expose business logic through REST or SOAP interfaces.</p>
               <p>Service contracts define agreements between clients and implementations of services. For a client, a well-defined API it can rely on to be (relatively) stable across upgrades is great. But Magento also wants to allow other implementations to be slotted in as well, and service contracts help here too.</p>
               <p>All service contracts that obey some simple rules can be easily exposed as REST or SOAP without any additional PHP coding. That opens up more external integration possibilities and more creativity in frontend design and technologies. It is also open to all extension developers.</p>
               <p>What is a Magento 2 service contract exactly? To be precise, it is a set of PHP interfaces (and possibly classes) that reside in a new Api directory for a module. For example, the service contract declared in the Magento_Customer module has the PHP namespace of Magento\Customer\Api.</p>
               <p>Immutability of data is fundamental principle and is a large effort.  This design, allows the implementation of the contract to be provided by the models and therefore we lose the programmatic enforcement of immutability.  We will use this loophole to expedite initial refactoring efforts and develop tooling to highlight and address as we iterate to our desired end state of immutability.</p>
               <p>As this figure shows, the service framework, or <i>service layer</i>, sits between the presentation layer and business logic:</p>
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





