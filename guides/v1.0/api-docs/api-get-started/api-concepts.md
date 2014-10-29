---
layout: default
title: Programming concepts
---

<div class="container bs-docs-container">
   <div class="row">
      <div class="jumbotron">
         <h1 class="api1" id="programming-concepts">{{ page.title }}</h1>
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
            <h2 class="api2" class="api2" id="api-spi">APIs and SPIs</h2>
            <p>An <i>application programming interface (API)</i> is a set of interfaces and their implementations that a module provides to other modules.</p>
            <p>A <i>service provider interface (SPI)</i> is a set of interfaces that a module uses internally. Other modules
               can implement these interfaces.
            </p>
            <p>What is a "public interface"?
               Discuss versioning and backwards compatibility policies.
               What is an API? What are the types of APIs? For example, service layer.
               What is an SPI? What are the types of SPIs?
               For example, extensibility point, events, interfaces, conventions in the file system, and so on.
            </p>
            <h2 class="api2" id="api-types">Types of API</h2>
            <ul>
               <li>Directory structure</li>
               <li>Configuration files structure</li>
               <li>Events</li>
               <li>Client API</li>
               <li>Provider API (SPI)</li>
            </ul>
            <h2 class="api2" id="api-and-spi">Module Client API and SPI</h2>
            <p>Both API and SPI can be evolved in a backwards-compatible way. But both have their specific limitations.
            <h3 class="api3" id="api-post-release">API post-release evolution</h3>
            <p>After SPI is released, existing behavior can be removed, but none can be added. Existing behavior cannot be modified.</p>
            <p>After API is released, new behavior can be added, but none can be removed. Existing behavior cannot be modified.</p>
            <h3 class="api3" id="spi-post-release">SPI post-release evolution</h3>
            <h3 class="api3" id="mix-spi-and-api">Mix SPI and API</h3>
            <p>We can compare API and SPI evolution constraints:</p>
            <table style="width:100%">
               <colgroup>
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
               </colgroup>
               <thead>
                  <tr style="background-color:lightgray">
                     <th>&nbsp;</th>
                     <th>Remove behavior</th>
                     <th>Modify behavior</th>
                     <th>Add behavior</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th>API</th>
                     <th>-</th>
                     <th>-</th>
                     <th>+</th>
                  </tr>
                  <tr>
                     <th>SPI</th>
                     <th>+</th>
                     <th>-</th>
                     <th>-</th>
                  </tr>
                  <tr>
                     <th>SPI & API</th>
                     <th>-</th>
                     <th>-</th>
                     <th>-</th>
                  </tr>
               </tbody>
            </table>
            <p>When an interface is a part of BOTH API and SPI, it can not be evolved. That is why mixing of API and SPI in one interface should be forbidden.</p>
            <h2 class="api2" id="limited-spi-and-api">Limited SPI and API</h2>
            <p>To increase modularity, composability and post-release evolution of Magento modules, their API and SPI should be decreased. Only important part (Service Layer) of module behavior must be explicitly published in SPI and API. All other interfaces must be declared module-private.</p>
            <h3 class="api3" id="public-api">Public API</h3>
            <p>Only explicitly published interfaces should be declared public API (accessible from other modules). This way module developer can write testable code, and have control on the size of his module public API.</p>
            <p>PHP does not have notion of package-private interfaces. So interfaces can be declared public with annotations (@API). If an interface is declared part of API, all it's implementations are automatically part of API. All interfaces and their implementations not marked as part of API, are considered module-private (accessible only from the module they're declared in). All classes that are part of API must be declared final, to prevent implicit publication to SPI.</p>
            <p><b>Public class example</b></p>
            <blockquote>
               <pre>
/**
 * @api
 */
interface RouterInterface
{
    public function match();
}

final class Mage_Core_Controller_Varien_Router_Base implements RouterInterface
{
    //...
}
</pre>
            </blockquote>
            <p>This way, RouterInterface and all its implementations (Mage_Core_Controller_Varien_Router_Base) become part of module public API (can be used by other modules), while RequestMapper interface is not accessible for other modules.</p>
            <h3 class="api3" id="public-spi">Public SPI</h3>
            <p>Only explicitly published interfaces should be declared public SPI (implementable from other modules). This way module developer can write testable code, and have control on the size of his module's public SPI.</p>
            <p>Interfaces can be declared public with annotations (@SPI). If an interface is declared part of SPI, it's implementations are not declared part of neither API nor SPI. All interfaces and their implementations not marked as part of SPI, are considered module-private (implementable only from the module they're declared in).</p>
            <p><b>Public class example</b></p>
            <blockquote>
               <pre>
/**
 * @spi
 */
interface RouterInterface
{
    public function match();
}
</pre>
            </blockquote>
            <p>This way, RouterInterface becomes part of module public SPI (can be implemented by other modules) This means, that 3PD can implement this interface and declare this implementation in DI configuration.</p>
            <h2 class="api2" id="separation-spi-and-api">Separation of SPI and API</h2>
            <p>If a class is a part of both API and SPI (can be used and reimplemented by 3PD) it should be split to final class and implementation interface. Then final class can become a part of public API and its implementation a part of public SPI.
            <p><b>Example:</b> Magento_AuthorizationInterface is an interface that should be used by all modules to check for dependencies. So this interface is part of API. Simultaneously other modules must be able to provide different implementation of authorization process in the system. So this interface must also be part of SPI:</p>
            <p><b>Mixed API & SPI example</b></p>
            <blockquote>
               <pre>
/**
 * @api
 * @spi
 */
interface Magento_AuthorizationInterface
{
    public function isAllowed($resource);
}
Class that is part of both API and SPI
class Magento_Authorization implements Magento_AuthorizationInterface
{
    public function isAllowed($resource)
    {
        //some behavior here
    }
}
</pre>
            </blockquote>
            <p>To split SPI and API, we declare Magento_AuthorizationInterface as API only. This means it will not be implementable:</p>
            <p><b>API-only interface example</b></p>
            <blockquote>
               <pre>
/**
 * @api
 */
interface Magento_AuthorizationInterface
{
    public function isAllowed($resource);
}
</pre>
            </blockquote>
            <p>And implementation of this interface declares a dependency on implementation SPI interface:</p>
            <p><b>API-only implementation example</b></p>
            <blockquote>
               <pre>
final class Magento_Authorization implements Magento_AuthorizationInterface
{
    public function __construct(Magento_Acl_Policy $policy)
    {
        $this->_policy = $policy;
    }

    public function isAllowed($resource)
    {
        return $this->_policy->isAllowed($resource);
    }
}
</pre>
            </blockquote>
            <p>The SPI part is moved to new interface Magento_Authorization_PolicyInterface. It will be implementable only and not accessible for clients of our module. It will provide an ability to implement different authorization behavior to other modules:</p>
            <p><b>SPI-only interface example</b></p>
            <blockquote>
               <pre>
/**
 * @spi
 */
interface Magento_Authorization_PolicyInterface
{
    public function isAllowed($resource);
}
</pre>
            </blockquote>
            <p>Magento library/module can provide default implementation of SPI interface.</p>
            <p>This way, after the release new methods can be added to API interface, and existing removed from SPI interface. These changes will be backward compatible.</p>
            <h3 class="api3" id="extend-api-client">Extend Client API</h3>
            <p>After the release we can add new method to Client API
            <p><b>API-only implementation example</b></p>
            <blockquote>
               <pre>
final class Magento_Authorization implements Magento_AuthorizationInterface
{
    public function __construct(Magento_Acl_PolicyInterface $policy)
    {
        $this->_policy = $policy;
    }

    public function isAllowed($resource)
    {
        return $this->_policy->isAllowed($resource);
    }

    /**
     * @since 2.0.1.0
     */
    public function isAllAllowed()
    {
        return $this->_policy->isAllowed(null);
    }
}
</pre>
            </blockquote>
            <p>New method is added in a backward compatible way.</p>
            <h2 class="api2" id="plugins">Plugins</h2>
            <p>You can use a plugin to intercept a call to every method in application. A plugin provides a non-conflicting SPI.</p>
            <p>As Client SPI will be limited, plugins must be allowed only for interfaces declared as SPI.</p>
         </div>
      </div>
   </div>
</div>





