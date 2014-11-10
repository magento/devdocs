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
                     <p>Customized extensions that merchants own might not be compatible with new versions of Magento. Merchants might be reluctant to upgrade Magento.</p>
                  </li>
                  <li>
                     <p>Customized extensions can have dependencies on other extensions. Magento and third-party developers find it difficult to track and report these dependencies.</p>
                  </li>
               </ul>
               <p>To address these issues, Magento 2 introduces <i>module service contracts</i>.</p>
               <h2 id="what-is-msc">What is a module service contract?</h2>
               <p>A module service contract is a set of PHP interfaces and possibly classes that provide a well-defined, durable API that other modules and third-party extensions can use. A module service contract is also an easy way to expose business logic through REST or SOAP interfaces.</p>
               <p>The interfaces defined for a module service contract must reside in the <b>Api</b> directory for a module.
                  For example, the service contract declared for the <b>Customer</b> module has the PHP <code>Magento\Customer\Api</code> namespace.
                  The interfaces in this namespace define agreements, or a contract, between clients and implementations of services.
               </p>
               <p>Magento models can implement the interfaces defined by a
                  module service contract.
               </p>
               <p>As shown in the diagram, a service contract includes:</p>
               <ul>
                  <li>Data interfaces</li>
                  <li>Repository interfaces</li>
                  <li>
                     <p><b>Service interfaces</b>. The service interface accepts requests from web pages and web services, meaning they do not need to know the details of business logic.</p>
                  </li>
               </ul>
               <p><img src="{{ site.baseurl }}common/images/High_Level_API_Design.png"/></p>
               <h2 id="benefits-msc">What are the benefits of service contracts?</h2>
               <p>The interfaces in a module service contract provide a well-defined, durable API that other modules and third-party extensions can implement.</p>
               <p>If developers play by a set of service contract rules, service contracts enable Magento to:</p>
               <ul>
                  <li>
                     <p>Guarantee compatibility among Magento versions, which makes it easier for merchants to upgrade Magento.</p>
                  </li>
                  <li>
                     <p>Report system dependencies through <b>composer.json</b> files.</p>
                  </li>
                  <li>
                     <p>Provide a functional abstraction of available business features.
                     </p>
                     <p>Module service contracts enable you to interact with modules across a system that encapsulates product business logic and data entities for a module.</p>
                  <p>Enforce a boundary that encapsulates the business logic a module exposes without revealing any of the details about how that functionality is implemented.
                     This solution is an abstraction of business operations and entities for a module to produces a durable API for client to rely upon.</p>
                  </li>
                  <li>Preserve data integrity and enhance the modularity of Magento.</li>
                  <li>Make it easy to expose business logic through REST or SOAP interfaces.</li>
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




