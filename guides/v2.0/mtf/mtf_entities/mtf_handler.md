---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Handler
menu_order: 3
github_link: mtf/mtf_entities/mtf_handler.md
---

- <a href="#mtf_handler_overview">Handler overview</a>
- <a href="#mtf_handler_types">Types of handlers</a>
- <a href="#mtf_handler_config">Configuration</a>
  - <a href="#mtf_handler_configxml">config.xml</a>
  - <a href="#mtf_handler_interface">Handler interface</a>
  - <a href="#mtf_handler_di">di.xml</a>
  - <a href="#mtf_handler_conf_hand">Handler</a>
  - <a href="#mtf_handler_decor">BackendDecorator and FrontendDecorator</a>
- <a id="#mtf_handler_howto-create-curl">How to create a cURL Handler</a>
- <a href="#mtf_handler_howto-create-ui">How to create a UI Handler</a>
  
<h2 id="mtf_handler_overview">Handler overview</h2>

We will use a handler to set up preconditions and prepare an initial testing environment for particular tests. For example, your scenario requires a particular widget that must be implicitly created before the test started. You will need a fixture, a data set and a handler. The handler serves to transfer data to an application under test. The data contains a list of fields from a fixture and values from data sets.

This topic will discuss types of handlers in the MTF, as well as how to create and use a handler.

<h2 id="mtf_handler_types">Types of handlers</h2>

The MTF enables you to use any type of handler.

Magento uses the following handlers:

| Type of handler | Mechanism | Example| Tip|
|---|---|---|---|
|UI|Drives the web browser.| Set of scripts for the Selenium that simulate user actions to create a widget through a web browser.| The UI handler is much slower then the other handlers. When the test execution time is critical, it is better to avoid use of the UI handler. Also we are not supposed to test the actions which are performed in preconditions, so we can reduce the test execution time by moving preconditions actions to the system level. The code is very similar to the code of the test that doesn't contain constraints.|
|cURL|Sends headless POST or PUT request to a server of an application under the test via HTTP, omitting the web-browser. |The HTTP POST request to the application server, that transfers Widget fixture fields and corresponding values from the dataset.|Browser is not involved, that's why it works much faster than the UI handler. If you don't know which type of handler to use, then use cURL handler.|
|WebAPI|Sends POST request complying with REST protocol. <a href="{{site.gdeurl}}rest/bk-rest.html">See REST API reference documentation.</a> |cURL example is applicable, but with the different entry point. |Similar to the cURL in realization, but faster in action. Additionally, you test WebAPI itself.|

Furthermore you can create your own handlers, such as:

- **Direct** that sends direct call to the application and uses Magento models. This is the fastest way to set up data. But you should be careful, because direct handlers require access to the Magento code and its database.
- any other handler.

<h2 id="mtf_handler_config">Configuration</h2>

One fixture can have various handlers. When we create an entity in the test we do not indicate which handler to use. We use a fallback, that is a queue of handlers lined by priorities. Priorities are adjusted in `config.xml`.

<h3 id="mtf_handler_configxml">config.xml</h3>

The default configuration for handlers is set in <code>magento2ce/dev/tests/functional/etc/config.xml.dist</code>. It should be saved as `config.xml`to be used by system:

    cp config.xml.dist config.xml

The following nodes imply on handlers:

<table>
<tr><th>Node</th><th>Semantics</th><th>Example</th></tr>
<tr><td><code>&lt;backendLoginUrl&gt;</code></td><td>Reference to the login form of the Admin.</td><td><code>&lt;backendLoginUrl&gt;admin/auth/login&lt;/backendLoginUrl&gt;</code></td></tr>
<tr><td><code>&lt;backendLogin&gt;</code></td><td>A username to access the Admin.</td><td><code>&lt;backendLogin&gt;admin&lt;/backendLogin&gt;</code></td></tr>
<tr><td><code>&lt;backendPassword&gt;</code></td><td>A password to access the Admin.</td><td><code>&lt;backendPassword&gt;pas$worD&lt;/backendPassword&gt;</code></td></tr>
<tr><td><code>&lt;handler&gt;</code></td><td>Specifies priorities for different types of handler. The highest priority has value "0". <code>token</code> contains <a href="{{site.gdeurl}}get-started/authentication/gs-authentication.html">access token</a>.</td>
<td><pre>
&lt;handler&gt;
  &lt;webapi priority=&quot;0&quot;&gt;
    &lt;token&gt;integration_token&lt;/token&gt;
  &lt;/webapi&gt;
  &lt;curl priority=&quot;1&quot; /&gt;
  &lt;ui priority=&quot;2&quot; /&gt;
&lt;/handler&gt;
</pre>
</td></tr>
</table>

<h3 id="mtf_handler_interface">Handler interface</h3>

Each handler must implement a handler interface.

You should mention in a fixture the `handler_interface` attribute with a reference to the PHP class: `Magento\[module_name]\Test\Handler\[object_name]\[object_name]Interface` (example for the Widget: `Magento\Widget\Test\Handler\Widget\WidgetInterface`).

Example of `WidgetInterface.php` (should be placed in `magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`):

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

<h3 id="mtf_handler_di">di.xml</h3>

The `di.xml` file declares relation between the <a href="#mtf_handler_interface">interface</a> and the <a href="#mtf_handler_conf_hand">handler</a>. It must be placed in `magento2ce/dev/tests/functional/tests/app/Magento/[module_name]/Test/etc/[handler_type]`.

See an example for the Widget cURL handler (`magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`):

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

It says, "substitute the `WidgetInterface` interface with the `cURL` class".

<h3 id="mtf_handler_conf_hand">Handler</h3>

We can determine the handler class using <a href="#mtf_handler_interface">an interface</a>, <a href="#mtf_handler_config">a fallback</a>, and dependencies from the <a href="#mtf_handler_di"><code>di.xml</code></a>. When this class is created, we can call the `persist()` method and transfer the current fixture in a method's argument. The method returns data that will be matched with fixture fields. All fields that are matched will be assigned with values from handler.

<script src="https://gist.github.com/dshevtsov/3ed7ce601d3b23e94ccd.js"></script>

<div class="bs-callout bs-callout-tip">
  <p>The <code>persist()</code> method is declared in the <code>InjectableFixture</code> class by path <code>magento2ce/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Fixture/InjectableFixture.php</code>. </p>
</div>

Create the handler in the same directory where the interface is stored: `magento2ce/dev/tests/functional/tests/app/Magento/[module_name]/Test/Handler/[object_name]/[type_of_handler].php`

See the tree of files mentioned for the case with the Widget cURL handler:

<img src="{{ site.baseurl }}common/images/mtf_widget_handler_tree.png">

<h3 id="mtf_handler_decor">BackendDecorator and FrontendDecorator</h3>

When you want to pass authorization in the storefront or Admin using the cURL, you can use the `BackendDecorator` and the `Decorator` classes.

<h4>BackendDecorator class</h4>

Full name is `Mtf\Util\Protocol\CurlTransport\BackendDecorator`. 

BackendDecorator helps to authorize an admin and saves his session.

Add to the `Curl.php` the following code:

{% highlight php %}
$curl = new BackendDecorator(new CurlTransport(), new Config());
{% endhighlight %}

`Config()` takes admin's configuration from <a href="#mtf_handler_configxml">config.xml</a>, where the username and the password are stored.

<h4>FrontendDecorator class</h4>

Full name is `Mtf\Util\Protocol\CurlTransport\FrontendDecorator`.

Decorator helps to authorize the customer and saves his session.

Add to the `Curl.php` the following code:

{% highlight php %}
$curl = new FrontendDecorator(new CurlTransport(), $this->customer);
{% endhighlight %}

<h2 id="mtf_handler_howto-create-curl">How to create a cURL Handler</h2>

Let's create a cURL handler that will create a new widget.

* Step 1. Create a directory with the name `Widget` in the `Handler` directory of the Widget module - `magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
* Step 2. In the same directory, create <a href="#mtf_handler_interface">the interface</a> for the cURL handler, and call it `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

* Step 3. Create `Curl.php` in the same directory. This file contains handler logic.

The following code includes detailed comments for better understanding.

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

<h2 id="mtf_handler_howto-create-ui">How to create a UI Handler</h2>

Let's create a UI handler that will create a new widget.

* Step 1. Create a directory with the name `Widget` in the `Handler` directory of the Magento_Widget module - `magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
* Step 2. In the same directory, create <a href="#mtf_handler_interface">interface</a> for the UI handler, and call it `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

* Step 3. Create `Ui.php` in the same directory. This file contains handler logic.

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
                type="\Magento\Widget\Test\Handler\Widget\Ui" />
</config>

{%endhighlight%}

