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
               <h2 id="overview">Overview</h2>
               <p>Magento is a modular system that enables third-party developers to customize and overwrite core parts of its framework. This flexibility, however, comes at a price:</p>
               <ul>
                  <li>
                     <p>Business logic tends to leak across the layers of the Magento system, which manifests as duplicated and inconsistent code.</p>
                  </li>
                  <li>
                     <p>Merchants might find it difficult to upgrade Magento because any customized extensions that they own might not be compatible with the new version of Magento.</p>
                     <p>In this situation, a merchant can either postpone the upgrade or obtain support from the extension developer. However, extensions can have dependencies on other extensions. Magento and third-party developers find it difficult to track and report these dependencies.</p>
                  </li>
               </ul>
               <p>To address these issues, Magento 2 introduces <i>module service contracts</i>.</p>
               <h2 id="what-is-msc">What is a module service contract?</h2>
               <p>A module service contract is a set of PHP interfaces, and possibly classes, that reside in a new <b>Api</b> directory for a module. For example, the service contract declared in the <b>Magento_Customer</b> module has the PHP namespace of <code>Magento\Customer\Api</code>.
                  The interfaces in this namespace define agreements, or a contract, between clients and implementations of services.</p>
                  <p>A module service contract provides:</p>
               <ul>
                  <li>A functional abstraction of available business features.</li>
                  <li>Represents a boundary that encapsulates the business logic a module exposes without revealing any of the details about how that functionality is implemented.</li>
               </ul>
               <p>As shown in the diagram, a service contract is comprised of these components:</p>
               <ul>
                  <li>Data interfaces</li>
                  <li>Repository interfaces</li>
                  <li><p><b>Service interfaces</b>. The service interface accepts requests from web pages and web services, meaning they do not need to know the details of business logic.</p></li>
               </ul>
               <p><img src="{{ site.baseurl }}common/images/High_Level_API_Design.png"/></p>
                  <h2 id="benefits-msc">What are the benefits of service contracts?</h2>
                  <p>The interfaces in a contract provide a well-defined, stable API that other modules and third-party extensions can implement.
              If developers play by the service contract rules, Magento can guarantee compatibility between Magento versions and report system dependencies through <b>composer.json</b> files.</p>
              <p>Module service contracts enable you to interact with modules across a system that encapsulates product business logic and data entities for a module. Service contracts preserve data integrity and provide module contracts that current Magento models can implement. Most importantly, these contracts ensure that the API is durable.
                  Service contracts enhance the modularity of Magento. Service contracts also make it easy to expose business logic through REST or SOAP interfaces.
               </p>
               <p>Service contracts make it easier to upgrade Magento.</p>
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






