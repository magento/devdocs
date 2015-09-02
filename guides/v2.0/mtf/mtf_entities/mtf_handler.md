---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Handler
menu_order: 3
github_link: mtf/mtf_entities/mtf_handler.md
---

<h2 id="mtf_handler_overview">Handler overview</h2>

We will use handler to set up preconditions and prepare the initial testing environment for particular tests. For example, your scenario requires a particular product that must be implicitly created before test started. You will need a fixture, a data set and handler. Handler serves to transfer data to testing application.

This topic will discuss types of handlers in the MTF, as well as how to create and use a handler.

<h2 id="mtf_handler_types">Types of handlers</h2>

МТФ предоставляет возможность использования хендлеров.

Using different types of handlers you can choose a proper one.

Magento uses the following handlers:

| Type of handler | Mechanism | Example| Tip|
|---|---|---|---|
|UI|Drives the web browser.| Set of scripts for Selenium that simulate user actions to create a product through a web browser.| They are much slower comparing to other handlers, so it is better to avoid them in case test execution time is critical in your project. Also we are not supposed to test actions which are performed in preconditions so we can reduce test execution time by moving preconditions actions to the system level. |
|cURL|Sends headless POST request to a server of application under test via HTTP, omitting the web-browser. Request contains a list of fields from a fixture and values from data sets.|HTTP POST request to the application server, that transfers CatalogProductSimple fixture fields and corresponding values from dataset.|Browser is not involved with this type of handler. That is why it works much faster than the UI handler. If you don't know which type of handler to use, then use cURL handler.|
|WebAPI|Sends POST request complying with REST protocol. <a href={{site.gdeurl}}rest/bk-rest.html>See REST API reference documentation.</a> | |Similar to cURL in realization, but faster in action. Additionally, you test WebAPI itself.|

Furthermore you can create your own handlers, such as:

- **Direct** that sends direct call to the application and uses Magento models. This is the fastest way to set up data. But you must be careful, because direct handlers need access to the Magento code and its database.
- any other handler.

<h2 id="mtf_handler_config">Configuration</h2>

Configuration is set in `magento2ce/dev/tests/functional/etc/config.xml`.

Nodes that imply on handlers are the following:

|Node|Semantics|Example|
|---|---|---|
|`<backendLoginUrl>`| Sets relative reference to login form of the Admin.| `<backendLoginUrl>admin/auth/login</backendLoginUrl>`|
|`<backendLogin>`|  Specifies login value to the Admin|`<backendLogin>admin</backendLogin>`|
|`<backendPassword>`|Specifies password value to the Admin|`<backendPassword>123123q</backendPassword>`
|`<handler>`|Specifies priorities for different types of handler.| |

<table>
<tr>
  <th>Node</th>
  <th>Semantics</th>
  <th>Example</th>
</tr>
<tr>
  <td><code><backendLoginUrl></code></td>
  <td>Sets relative reference to login form of the Admin.</td>
  <td>{%highlight xml%}<backendLoginUrl>admin/auth/login</backendLoginUrl>{%endhighlight%}</td>
</tr>

</table>

Приоритеты будут устанавливаться в конфиге https://github.corp.ebay.com/magento-qmt/magento2ce/blob/develop/dev/tests/functional/etc/config.xml

<handler>
       <webapi priority="0" />
       <curl priority="1"/>
       <ui priority="2" />
</handler>



<script src="https://github.corp.ebay.com/gist/daponasenko/55f0072c71b48c505fbe.js"></script>