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

The MTF enables you to use different types of handlers.

Magento uses the following handlers:

| Type of handler | Mechanism | Example| Tip|
|---|---|---|---|
|UI|Drives the web browser.| Set of scripts for Selenium that simulate user actions to create a product through a web browser.| They are much slower comparing to other handlers, so it is better to avoid them in case test execution time is critical in your project. Also we are not supposed to test actions which are performed in preconditions so we can reduce test execution time by moving preconditions actions to the system level. |
|cURL|Sends headless POST request to a server of application under test via HTTP, omitting the web-browser. Request contains a list of fields from a fixture and values from data sets.|HTTP POST request to the application server, that transfers CatalogProductSimple fixture fields and corresponding values from dataset.|Browser is not involved with this type of handler. That is why it works much faster than the UI handler. If you don't know which type of handler to use, then use cURL handler.|
|WebAPI|Sends POST request complying with REST protocol. <a href="{{site.gdeurl}}rest/bk-rest.html">See REST API reference documentation.</a> | |Similar to cURL in realization, but faster in action. Additionally, you test WebAPI itself.|

Furthermore you can create your own handlers, such as:

- **Direct** that sends direct call to the application and uses Magento models. This is the fastest way to set up data. But you must be careful, because direct handlers need access to the Magento code and its database.
- any other handler.

<h2 id="mtf_handler_config">Configuration</h2>

<h3>config.xml</h3>

Configuration for handlers is set in <a href="https://github.com/magento/magento2/blob/master/dev/tests/functional/etc/config.xml"><code>magento2ce/dev/tests/functional/etc/config.xml</code></a>. Nodes that imply on handlers are the following:

<table>
<tr><th>Node</th><th>Semantics</th><th>Example</th></tr>
<tr><td><code>&lt;backendLoginUrl&gt;</code></td><td>Sets relative reference to login form of the Admin.</td><td><code>&lt;backendLoginUrl&gt;admin/auth/login&lt;/backendLoginUrl&gt;</code></td></tr>
<tr><td><code>&lt;backendPassword&gt;</code></td><td>Specifies password value to the Admin.</td><td><code>&lt;backendPassword&gt;pas$worD&lt;/backendPassword&gt;</code></td></tr>
<tr><td><code>&lt;handler&gt;</code></td><td>Specifies priorities for different types of handler. The highest priority has value "0".</td>
<td>{%highlight xml%}
<handler>
       <webapi priority="0" />
       <curl priority="1"/>
       <ui priority="2" />
</handler>
{%endhighlight%}
</td></tr>
</table>

<h3 id="mtf_handler_interface">Handler interface</h3>

If you want to implement the handler, you should define its methods via object interface. Indicate in a fixture the `handler_interface` attribute with a reference to the PHP class: `Magento\[module_name]\Test\Handler\[object_name]\[object_name]Interface` (example for the Widget: `Magento\Widget\Test\Handler\Widget\WidgetInterface`).

Example of `WidgetInterface.php` (`magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget/WidgetInterface.php`):

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

<h3 id="mtf_handler_di">di.xml</h3>

The `di.xml` file declares relation between Interface and Handler. It must be placed in `magento2ce/dev/tests/functional/tests/app/Magento/[module_name]/Test/etc/[handler_type]/di.xml`.

See an example for the Widget cURL handler (should be saved in `magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`):

{%highlight xml%}

<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../../../../../lib/internal/Magento/Framework/ObjectManager/etc/config.xsd">
    <preference for="Magento\Widget\Test\Handler\Widget\WidgetInterface"
                type="\Magento\Widget\Test\Handler\Widget\Curl" />
</config>

{%endhighlight%}

It says "for Widget Interface use cURL Handler".

<h3>Handler</h3>

Save the handler in the same directory where the interface is stored: `magento2ce/dev/tests/functional/tests/app/Magento/[module_name]/Test/Handler/[object_name]/[type_of_handler].php`

See the tree of files mentioned for the case with the Widget cURL handler:

<img src="{{ site.baseurl }}common/images/mtf_widget_handler_tree.png">

<h2 id="mtf_handler_howto-create">How to create a cURL Handler</h2>

Let's create a cURL handler that will create a new widget.

* Step 1. Create a directory with the name `Widget` in the `Handler` directory of the Widget module
* Step 2. In the same directory, create <a href="#mtf_handler_interface">interface</a> for the cURL handler, and call it `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

* Step 3. Create `Curl.php` in the same directory. This file contains handler logic.

The code has detailed comments for better understanding.

<script src="https://github.corp.ebay.com/gist/daponasenko/55f0072c71b48c505fbe.js"></script>

* Step 4. Create <a href="#mtf_handler_di"><code>di.xml</code></a> in the `etc/curl` directory of the Widget module.

{%highlight xml%}

<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../../../../../lib/internal/Magento/Framework/ObjectManager/etc/config.xsd">
    <preference for="Magento\Widget\Test\Handler\Widget\WidgetInterface"
                type="\Magento\Widget\Test\Handler\Widget\Curl" />
</config>

{%endhighlight%}

<h2 id="mtf_handler_howto-create">How to create a UI Handler</h2>

Let's create a UI handler that will create a new widget.

* Step 1. Create a directory with the name `Widget` in the `Handler` directory of the Widget module
* Step 2. In the same directory, create <a href="#mtf_handler_interface">interface</a> for the UI handler, and call it `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

* Step 3. Create `UI.php` in the same directory. This file contains handler logic.

The code has detailed comments for better understanding.

<script src="https://github.corp.ebay.com/gist/daponasenko/6de6c51d5720242d1652.js"></script>

* Step 4. Create <a href="#mtf_handler_di"><code>di.xml</code></a> in the `etc/ui` directory of the Widget module.

{%highlight xml%}

<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../../../../../lib/internal/Magento/Framework/ObjectManager/etc/config.xsd">
    <preference for="Magento\Widget\Test\Handler\Widget\WidgetInterface"
                type="\Magento\Widget\Test\Handler\Widget\UI" />
</config>

{%endhighlight%}