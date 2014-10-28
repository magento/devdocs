---
layout: default
title: Service layer

---

<div class="container bs-docs-container">
   <div class="row">
      <div class="jumbotron">
         <h1 class="api1" id="api-services">{{ page.title }}</h1>
      </div>
      <div class="col-xs-3">
         <p><b>Contents</b></p>
         <div style="" id="category" class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix-top" role="complementary">
         </div>
         <a class="back-to-top" href="#top">
         Back to top
         </a>
         <a href="#" class="bs-docs-theme-toggle">
         Preview theme
         </a>
      </div>
      <div class="col-xs-9" role="main">
         <div class="bs-docs-section">
            <p><a href="{{ site.githuburl }}api-guide/services/service-layer.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
            <h2 class="api2" id="api-guide-service-layer-overview">Overview</h2>
            <p>In Magento, the service layer provides a formal contract between a client and the service provider.
               This contract enables you to implement a service without affecting the client.
            </p>
            <p>Each module in the service layer list its public services in the `Magento\{ModuleName}\Service` folder.</p>
            <p>You can extend the service interfaces to:</p>
            <ul>
               <li>Do this and that.</li>
            </ul>
            <h2 class="api2" id="services">Services</h2>
            <p>Use the following services:</p>
            <ul>
               <li><a href="{{ site.gdeurl }}api-guide/catalog.html">Catalog</a></li>
               <li><a href="{{ site.gdeurl }}api-guide/catalog-inventory.html">Catalog inventory</a></li>
            </ul>
         </div>
      </div>
   </div>
</div>