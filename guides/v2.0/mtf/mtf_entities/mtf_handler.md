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
- <a href="#mtf_handler-components">Handler components</a>
  - <a href="#mtf_handler_interface">Handler interface</a>
  - <a href="#mtf_handler_conf_hand">Handler class</a>
  - <a href="#mtf_handler_di">di.xml</a>
- <a id="#mtf_handler_howto-create-curl">How to create a cURL Handler</a>
  - <a href="#mtf_handler_decor">cURL authentication classes</a>
- <a href="#mtf_handler_howto-create-ui">How to create a UI Handler</a>
- <a href="#mtf_handler_howto-create-ui">How to create a WebAPI Handler</a>
  
<h2 id="mtf_handler_overview">Handler overview</h2>

You can use a handler to set up preconditions and prepare an initial testing environment for particular tests. For example, your scenario requires a particular widget that must be implicitly created before the test started. You need a fixture, a data set and a handler. The handler transfers data to the application being tested. The data is a list of fields from a fixture and values from data sets.

This topic focuses on handlers, and we'll discuss types of handlers as well as how to create and use one.

<h2 id="mtf_handler_types">Types of handlers</h2>

The MTF enables you to use any type of handler.

Magento uses the following handlers:

| Type of handler | Mechanism | Example| Tip|
|---|---|---|---|
|UI|Drives the web browser.| Set of scripts for Selenium that simulate user actions to create a widget through a web browser.| The UI handler is much slower then the other handlers. When the test execution time is critical, it is better to avoid use of the UI handler. The UI handler code is very similar to the code of the test that doesn't contain constraints. If you have a test for widget creation, it can be very helpful, because the code of UI handler that creates widget is very similar.|
|cURL|Sends POST or PUT requests to a server of an application under the test. |HTTP POST request to the application server, that transfers Widget fixture fields and corresponding values from the dataset.|Browser is not involved, that's why it works much faster than the UI handler.|
|WebAPI|Sends a POST request using the REST API. <a href="{{site.gdeurl}}rest/bk-rest.html">See REST API reference documentation.</a> |Similar to curl but uses the REST API entry point. |Has the advantage of testing the API, faster than cURL.|

Furthermore, you can create your own handlers, such as **Direct** that is very fast, because it sends a direct call to the Magento application using Magento models. It is difficult to create for QA, because it requires deep understanding of the Magento application, and also requires access to the Magento code and the database. Difficulties can be caused when the Magento code and Magento tests are run on different hosts.

<h2 id="mtf_handler_config">Configuration</h2>

One fixture can have various handlers. When we create an entity in the test we do not indicate which handler to use. This work is delegated to a fallback, which is a queue of handlers in the priority order specified in <a href="#mtf_handler_configxml"><code>config.xml</code></a>.

<h3 id="mtf_handler_configxml">config.xml</h3>

The default configuration for handlers is set in <a href="{{site.mage2000url}}dev/tests/functional/etc/config.xml.dist"><code>magento2/dev/tests/functional/etc/config.xml.dist</code></a>. Copy it as `config.xml`, that will be used to add further changes:

    cp config.xml.dist config.xml

The following nodes influence handlers:

<table>
<tr><th>Node</th><th>Semantics</th><th>Example</th></tr>
<tr><td><code>&lt;backendLoginUrl&gt;</code></td><td>Reference to the login form of the Admin.</td><td><code>&lt;backendLoginUrl&gt;admin/auth/login&lt;/backendLoginUrl&gt;</code></td></tr>
<tr><td><code>&lt;backendLogin&gt;</code></td><td>A username to access the Admin as a Magento administrator.</td><td><code>&lt;backendLogin&gt;admin&lt;/backendLogin&gt;</code></td></tr>
<tr><td><code>&lt;backendPassword&gt;</code></td><td>A password to access the Admin as a Magento administrator.</td><td><code>&lt;backendPassword&gt;pas$worD&lt;/backendPassword&gt;</code></td></tr>
<tr><td><code>&lt;handler&gt;</code></td><td>Specifies priorities for different types of handler. The less the value, the higher the priority. The highest priority has value <code>0</code>. <code>token</code> contains <a href="{{site.gdeurl}}get-started/authentication/gs-authentication.html">access token</a> (used by WebAPI handlers only).</td>
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

<h2 id="mtf_handler-components">Handler components</h2>

<h3 id="mtf_handler_interface">Handler interface</h3>

Each handler must implement a handler interface.

You should mention in a fixture the `handler_interface` attribute with a reference to the PHP class: `Magento\[module_name]\Test\Handler\[object_name]\[object_name]Interface` (example for the Widget: `Magento\Widget\Test\Handler\Widget\WidgetInterface`).

Example of `WidgetInterface.php` (should be placed in `magento2/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`):

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

<h3 id="mtf_handler_conf_hand">Handler class</h3>

To use the handler class you should adjust <a href="#mtf_handler_interface">an interface</a>, <a href="#mtf_handler_config">a fallback</a>, and relations from the <a href="#mtf_handler_di"><code>di.xml</code></a>. When this class is created, you can call the `persist()` method to create Magento entity (for example, widget). The method returns data that are matched with fixture fields. All fixture fields that are matched are assigned values from the handler.

The `persist()` method is declared in the <a href="https://github.com/magento/mtf/blob/develop/Magento/Mtf/Fixture/InjectableFixture.php"><code>InjectableFixture</code></a> class by path `magento2/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Fixture/InjectableFixture.php`.

<script src="https://gist.github.com/dshevtsov/3ed7ce601d3b23e94ccd.js"></script>

Create the handler in the same directory where the interface is stored: `magento2/dev/tests/functional/tests/app/Magento/[module_name]/Test/Handler/[object_name]/[type_of_handler].php`

<h3 id="mtf_handler_di">di.xml</h3>

The `di.xml` file declares relation between the <a href="#mtf_handler_interface">interface</a> and the <a href="#mtf_handler_conf_hand">handler</a> class. It must be placed in `magento2/dev/tests/functional/tests/app/Magento/[module_name]/Test/etc/[handler_type]`.

See an example for the Widget cURL handler (`magento2/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`):

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

See the tree of files mentioned for the case with the Widget cURL handler:

<img src="{{ site.baseurl }}common/images/mtf_widget_handler_tree.png">

<h2 id="mtf_handler_howto-create-curl">How to create a cURL Handler</h2>

Let's create a cURL handler that creates a new widget.

* Create a directory with the name `Widget` in the `Handler` directory of the Magento_Widget module - `magento2/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
* In the same directory, create <a href="#mtf_handler_interface">the interface</a> for the cURL handler, and call it `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

* Create `Curl.php` in the same directory. This file contains a <a href="#mtf_handler_conf_hand">handler class</a>, that defines preparation of a data to create a new widget.

The following code includes detailed comments for better understanding.

<div id="mtf_curl_script">
<script src="https://gist.github.com/dshevtsov/ff1aad2e5f11b76af9fb.js"></script>
</div>

* Create <a href="#mtf_handler_di"><code>di.xml</code></a> in the `etc/curl` directory of the Magento_Widget module.

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

<h3 id="mtf_handler_decor">cURL authentication classes</h3>

In the previously mentioned example of the <a href="#mtf_curl_script">Curl.php</a> code, authentication in the Admin is realized using the the `BackendDecorator` class. 

The <a href="#mtf_handler_curl_frontdecor">FrontendDecorator class</a> can help you accessing a storefront.

<h4>BackendDecorator class</h4>

`BackendDecorator` helps to authorize an Admin and saves the Admin's session.

Full class name is `Mtf\Util\Protocol\CurlTransport\BackendDecorator`. 

Add to the `Curl.php` the following code:

{% highlight php %}
$curl = new BackendDecorator(new CurlTransport(), new Config());
{% endhighlight %}

`Config()` takes Admin's configuration from <a href="#mtf_handler_configxml">config.xml</a>, where the username and the password are stored.

<h4 id="mtf_handler_cirl_frontdecor">FrontendDecorator class</h4>

`FrontendDecorator` helps to authorize the customer and saves his session.

Full class name is `Mtf\Util\Protocol\CurlTransport\FrontendDecorator`.

Use in the `Curl.php` the following code:

{% highlight php %}
$curl = new FrontendDecorator(new CurlTransport(), $this->customer);
{% endhighlight %}

<h2 id="mtf_handler_howto-create-ui">How to create a UI Handler</h2>

Let's create a UI handler that creates a new widget.

* Create a directory with the name `Widget` in the `Handler` directory of the Magento_Widget module - `magento2/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
* In the same directory, create <a href="#mtf_handler_interface">interface</a> for the UI handler, and call it `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

<script src="https://gist.github.com/dshevtsov/dbe9b588ffe91bbb5622.js"></script>

* Create `Ui.php` in the same directory. This file contains a <a href="#mtf_handler_conf_hand">handler class</a>.

The code has detailed comments for better understanding.

<script src="https://gist.github.com/dshevtsov/4c6e021570d80d39694c.js"></script>

* Create <a href="#mtf_handler_di"><code>di.xml</code></a> in the `etc/ui` directory of the Magento_Widget module.

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

<h2 id="mtf_handler_howto-create-ui">How to create a WebAPI Handler</h2>

Let's create a WebAPI handler that creates a new tax rule.

* Create a directory with the name `TaxRule` in the `Handler` directory of the Magento_Tax module - `magento2/dev/tests/functional/tests/app/Magento/Tax/Test/Handler/TaxRule`.
* In the same directory, create <a href="#mtf_handler_interface">interface</a> for the WebAPI handler, and call it `TaxRuleInterface.php`. Our new interface extends `HandlerInterface` class.

<script src="https://gist.github.com/dshevtsov/15708f0530aaa70789e0.js"></script>


* Create `Webapi.php` in the same directory. The file contains a <a href="#mtf_handler_conf_hand">handler class</a>.

<script src="https://gist.github.com/dshevtsov/e06d8a4241d14738df01.js"></script>

* Create <a href="#mtf_handler_di"><code>di.xml</code></a> in the `etc/webapi` directory of the Magento_Tax module.

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
    <preference for="Magento\Tax\Test\Handler\TaxRule\TaxRuleInterface"
                type="\Magento\Tax\Test\Handler\TaxRule\Webapi" />
</config>

{%endhighlight%}