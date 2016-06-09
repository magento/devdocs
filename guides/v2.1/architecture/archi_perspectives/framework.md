---
layout: default
group: arch-guide
subgroup: Logical View
title: Magento Framework
menu_title: Magento Framework
menu_order: 4
version: 2.1
github_link21: architecture/archi_perspectives/framework.md
---


<h2>Magento Framework</h2>
The Magento Framework controls how application components interact, including request flow, routing, indexing, caching, and exception handling. It provides services that reduce the effort of creating modules that contain business logic, contributing to the goal of both making Magento code more modular as well as decreasing dependencies. 

This primarily PHP software component is organized into logical groups called <i>libraries</i>, which all modules can call.  Most of the framework code sits under the domain layer or encloses the presentation, service, and domain layers. The framework contains no business logic.
(Although the Magento Framework does not contain resource models, it does contain a library of code to help implement a resource model.) 

<div class="bs-callout bs-callout-info" id="info">
  <p>Note: Don’t confuse the Magento framework with the Zend web application framework that ships with Magento.</p>
</div>

You should never modify Framework files, although if you are extending Magento, you must know how to call Framework libraries. Modules you create will typically inherit from classes and interfaces defined in the Framework directories.  

<h3>Magento Framework responsibilities</h3>
The Magento framework provides libraries that help reduce the effort of creating modules that contain business logic.

The framework is responsible for operations that are useful for potentially all modules, including: 

* handling HTTP protocols
* interacting with the database and filesystem
* rendering content

<h3>Magento Framework organization</h3>
Here is the Magento framework folder structure:

```
Lib/
 ../Internal
    ../Magento
      ../Framework
 ```

* `/lib/internal` contains some non-PHP as well as PHP components. Non-PHP framework libraries includes JavaScript and LESS/CSS. 

* `/lib/internal/Magento/Framework`  contains only PHP code. These are libraries of code plus the application entry point that routes requests to modules (that in turn call the framework libraries). For example,  libraries in the framework help implement a resource model (base classes and interfaces to inherit from) but not the resource models themselves. Certain libraries also support CSS rendering.

* `/lib/web` contains JavaScript and CSS/LESS files. These files reside  under `web` and not `internal` because they are accessible from a web browser, while the PHP code under `internal` is not. (Any code that a web browser must access should be under `web`, while everything else under `internal`.)

<div class="bs-callout bs-callout-info" id="info">
  <p>Note: The <code>lib/internal/Magento/Framework</code> directory maps to the <code>Magento\Framework</code> namespace.</p>
</div>


<h3>Highlights of the Magento Framework</h3>
The Magento Framework (`lib/internal/Magento/Framework/`) provides a robust range of functionality. If you are an extension developer, you may be interested in this subset of Framework namespaces.
 

<table>
   <tbody>
      <tr style="background-color: lightgray">
         <th>Namespace</th>
         <th>Purpose</th>
         
      </tr>
      <tr>
         <td><code>Magento\Framework\Object</code>
         </td>
         <td>Provides standard functionality for storing and retrieving data through magic methods. This is the base class for many Magento classes.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\Model</code>
         </td>
         <td>Contains base Model classes that almost all Magento Model classes extend from.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\AbstractModel</code>
         </td>
         <td></td>
      </tr>
      <tr>
         <td><code>Magento\Framework\Object\AbstractResource</code></td>
         <td></td>
      </tr>
      <tr>
         <td><code>Magento\Framework\Object\Controller</code></td>
         <td>Contains classes to help return different types of results (for example, JSON and redirects).</td>
      </tr>
      <tr>
         <td><code>Magento\Framework\Object\View</code></td>
         <td>Contains code to render pages and layouts.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\Data</code></td>
         <td>Contains additional classes that handle forms.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\URL</code></td>
         <td>Contains code to look up other pages in Magento.</td>
      </tr>
   </tbody>
</table>

<p>Other namespaces under <code>Magento\Framework</code> that will interest extension developers:</p>

<table>
   <tbody>
      <tr style="background-color: lightgray">
         <th>Namespace</th>
         <th>Purpose</th>
         
      </tr><tr>
         <td><code>Magento\Framework\ObjectManager</code>
         </td>
         <td>Used to provide <i>dependency injection</i>. </td>
      </tr><tr>
         <td><code>Magento\Framework\App</code>
         </td>
         <td>Contains framework code that has knowledge about the Magento application. This code bootstraps the application and reads in the initial configuration. It also contains the entry point to the command line tools, the web application, and the cron job. And finally, it routes requests while providing the deployment context (such as reading in the configuration for the database configuration, languages, caching systems).

</td>
      </tr><tr>
         <td><code>Magento\Framework\Api</code>
         </td>
         <td>Contains base classes for advanced functionality of extendable objects through the system (that is, objects that can be extended to add new data through Magento Connection extensions).</td>
      </tr><tr>
         <td><code>Magento\Framework\Config</code>
         </td>
         <td>Contains the generic configuration reader. Each config file has its own specialized reader extending these classes.</td>
      </tr><tr>
         <td><code>Magento\Framework\Filesystem</code>
         </td>
         <td>Contains classes that handle reading from and writing to the file system.</td>
      </tr><tr>
      <tr>
         <td><code>Magento\Framework\HTTP\PhpEnvironment</code>
         </td>
         <td></td>
      </tr><tr>
         <td><code>Magento\Framework\Session</code>
         </td>
         <td></td>
      </tr><tr>
         <td><code>Magento\Framework\Stdlib\Cookie</code>
         </td>
         <td>Code to handle the HTTP request/responses as well as session/cookies is found here.</td>
      </tr><tr>
         <td><code>Magento\Framework\Exception</code>
         </td>
         <td>Contains the basic exceptions that are thrown throughout the Magento codebase.</td>
      </tr>
      <tr>
         <td><code>Magento\Framework\Event</code>
         </td>
         <td>Contains the code that publishes synchronous events and that handles observers for any Magento event is handled here.
</td>
      </tr>
<tr>

         <td><code>Magento\Framework\Validator</code>
         </td>
         <td>Contains the code that validates data (currencies, not empty) and that handles observers for any Magento event.
</td>
      </tr>
      <tr>
      <td><code>Magento\Framework\Amqp</code></td>
      <td><p>Enterprise Edition only.</p>
      <p></p>Supports the Advanced Message Queuing Protocol, which is used by the Magento Message Queue Framework.</td>
      </tr>
</tbody>
</table>


