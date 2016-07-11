---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Functional Testing Framework
menu_title: Handler
menu_order: 3
version: 2.0
github_link: mtf/mtf_entities/mtf_handler.md
---

<h2>Handler</h2>

* TOC
{:toc}
  
## Handler overview {#mtf_handler_overview}

You can use a handler to set up preconditions and prepare an initial testing environment for particular tests. For example, your scenario requires a particular widget that must be implicitly created before the test is started. You need <a href="{{page.baseurl}}mtf/mtf_entities/mtf_fixture.html">a fixture</a>, a data set, and a handler. The handler transfers data to the application being tested. The data is a list of fields from a fixture and values from data sets.

This topic focuses on handlers, and we'll discuss types of handlers as well as how to create and use one.

## Types of handlers {#mtf_handler_types}

The FTF enables you to use any type of handler.

Magento uses the following handlers:

| Type of handler | Mechanism | Example| Tip|
|---|---|---|---|
|UI|Drives the web browser.| Set of scripts for Selenium that simulate user actions to create a widget through a web browser.| The UI handler is much slower then the other handlers. When the test execution time is critical, you should avoid use of the UI handler. The UI handler code is very similar to the code of the test that doesn't contain constraints. If you have a test for widget creation, you can re-use the code, because the code of UI handler that creates widget is very similar.|
|cURL|Sends POST or PUT requests to the server hosting the application that is being tested.|HTTP POST request to the application server, that transfers Widget fixture fields and corresponding values from the data set.|Browser is not involved, that's why the cURL handler works much faster than the UI handler.|
|WebAPI|Sends a POST request using the REST API. <a href="{{page.baseurl}}rest/bk-rest.html">See REST API reference documentation.</a> |Similar to cURL but uses the REST API entry point. |Has the advantage of testing the API, faster than cURL.|

Furthermore, you can create your own handlers, such as **Direct**, which is very fast because the **Direct** handler sends a direct call to the Magento application using Magento models. The **Direct** handler requires deep understanding of the Magento application, and also requires access to the Magento code and the database. Difficulties can be caused when the Magento code and Magento tests are run on different hosts.

## Configuration {#mtf_handler_config}

One fixture can have various handlers. When we create an entity in the test we do not indicate which handler to use. This work is delegated to a fallback, which is a queue of handlers in the priority order specified in <a href="#mtf_handler_configxml"><code>config.xml</code></a>.

### `config.xml` {#mtf_handler_configxml}

The default configuration for handlers is set in <a href="{{site.mage2000url}}dev/tests/functional/etc/config.xml.dist"><code>&lt;magento2&gt;/dev/tests/functional/etc/config.xml.dist</code></a>.  Create a duplicate of the file, and keep both, but make changes to the new one, which is called `config.xml`:

    cp config.xml.dist config.xml

The following nodes influence handlers:

<table>
<tr><th>Node</th><th>Semantics</th><th>Example</th></tr>
<tr><td><code>&lt;backendLoginUrl&gt;</code></td><td>Reference to the login form of the Admin.</td><td><code>&lt;backendLoginUrl&gt;admin/auth/login&lt;/backendLoginUrl&gt;</code></td></tr>
<tr><td><code>&lt;backendLogin&gt;</code></td><td>A username to access the Admin as a Magento administrator.</td><td><code>&lt;backendLogin&gt;admin&lt;/backendLogin&gt;</code></td></tr>
<tr><td><code>&lt;backendPassword&gt;</code></td><td>A password to access the Admin as a Magento administrator.</td><td><code>&lt;backendPassword&gt;pas$worD&lt;/backendPassword&gt;</code></td></tr>
<tr><td><code>&lt;handler&gt;</code></td><td>Specifies priorities for different types of handler. The less the value, the higher the priority. The highest priority has value <code>0</code>. <code>token</code> contains <a href="{{page.baseurl}}get-started/authentication/gs-authentication.html">access token</a> (used by WebAPI handlers only).</td>
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

## Handler components {#mtf_handler-components}

### Handler interface {#mtf_handler_interface}

Each handler must implement a handler interface.

You should mention in a fixture the `handler_interface` attribute with a reference to the PHP class: `Magento\[module_name]\Test\Handler\[object_name]\[object_name]Interface` (example for the Widget: `Magento\Widget\Test\Handler\Widget\WidgetInterface`).

Example of `WidgetInterface.php` (should be placed in `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`):

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Handler\HandlerInterface;

/**
 * Interface WidgetInterface
 */
interface WidgetInterface extends HandlerInterface
{
    //
}

{% endhighlight %}

### Handler class {#mtf_handler_conf_hand}

To use the handler class, create <a href="#mtf_handler_interface">an interface</a>, declare a fallback in the <a href="#mtf_handler_config"><code>config.xml</code></a>, and declare interface/class relationships in the <a href="#mtf_handler_di"><code>di.xml</code></a>. When this class is created, you can call the `persist()` method to create Magento entity (for example, widget). The method returns data that are matched with fixture fields. All fixture fields that are matched are assigned values from the handler.

The `persist()` method is declared in the <a href="https://github.com/magento/mtf/blob/develop/Magento/Mtf/Fixture/InjectableFixture.php"><code>InjectableFixture</code></a> class by path `<magento2>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Fixture/InjectableFixture.php`.

{% highlight php %}

<?php
/**
 * Persists Fixture Data into application.
 *
 * @return void
 */
public function persist()
{
    $this->eventManager->dispatchEvent(['persist_before'], [get_class($this)]);
    if (!empty($this->handlerInterface)) {
        $result = $this->handlerFactory->create($this->handlerInterface)->persist($this);
        if (!empty($result)) {
            foreach ($result as $key => $value) {
                $this->data[$key] = $value;
            }
        }
    }
    $this->eventManager->dispatchEvent(['persist_after'], [get_class($this)]);
}

{% endhighlight %}

Create the handler in the same directory where the interface is stored: `<magento2>/dev/tests/functional/tests/app/Magento/[module_name]/Test/Handler/[object_name]/[type_of_handler].php`

### `di.xml` {#mtf_handler_di}

The `di.xml` file declares relationship between the <a href="#mtf_handler_interface">interface</a> and the <a href="#mtf_handler_conf_hand">handler</a> class. The file must be placed in `<magento2>/dev/tests/functional/tests/app/Magento/[module_name]/Test/etc/[handler_type]`.

See an example for the Widget cURL handler (`<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`):

{%highlight xml%}

{% remote_markdown https://raw.githubusercontent.com/magento/magento2/develop/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml %}

{%endhighlight%}

 In this example, the `di.xml` file causes the `Curl` class to replace the `WidgetInterface`.

See the directory structure mentioned for the case with the Widget cURL handler:

<img src="{{ site.baseurl }}common/images/mtf_widget_handler_tree.png">

## How to create a cURL handler {#mtf_handler_howto-create-curl}

Let's create a cURL handler that creates a new widget.

* Create a directory with the name `Widget` in the `Handler` directory of the Magento_Widget module - `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
* In the same directory, create <a href="#mtf_handler_interface">the interface</a> for the cURL handler, and call the file `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Handler\HandlerInterface;

/**
 * Interface WidgetInterface
 */
interface WidgetInterface extends HandlerInterface
{
    //
}

{% endhighlight %}

* Create `Curl.php` in the same directory. This file contains a <a href="#mtf_handler_conf_hand">handler class</a>, which defines preparation of a data to create a new widget.

The following code includes detailed comments for better understanding.
{: #mtf_curl_script}

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 
namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Fixture\FixtureInterface;
use Magento\Mtf\Handler\Curl as AbstractCurl;
use Magento\Mtf\Util\Protocol\CurlTransport;
use Magento\Mtf\Util\Protocol\CurlTransport\BackendDecorator;

/**
 * Curl handler for creating widgetInstance/frontendApp.
 */
class Curl extends AbstractCurl
{
    /**
     * Mapping values for data.
     *
     * @var array
     */
    protected $mappingData = [
        'code' => [
            'CMS Page Link' => 'cms_page_link',
        ],
        'block' => [
            'Main Content Area' => 'content',
            'Sidebar Additional' => 'sidebar.additional',
            'Sidebar Main' => 'sidebar.main',
        ]
    ];
    
    /**
     * Post request for creating widget instance.
     *
     * @param FixtureInterface $fixture [optional]
     * @throws \Exception
     * @return null|array instance id
     */
    public function persist(FixtureInterface $fixture = null)
    {
        // Prepare data to send it using cURL.
        $data = $this->prepareData($fixture);
        // Build url to send post request to create widget.
        $url = $_ENV['app_backend_url'] . 'admin/widget_instance/save/code/'
            . $data['code'] . '/theme_id/' . $data['theme_id'];
        // Create CurlTransport instance to operate with cURL. BackendDecorator is used to log in to Magento backend.
        $curl = new BackendDecorator(new CurlTransport(), $this->_configuration);
        // Send request to url with prepared data.
        $curl->write($url, $data);
        // Read response.
        $response = $curl->read();
        // Close connection to server.
        $curl->close();
        // Verify whether request has been successful (check if success message is present).
        if (!strpos($response, 'data-ui-id="messages-message-success"')) {
            throw new \Exception("Widget instance creation by curl handler was not successful! Response: $response");
        }
        // Get id of created widget in order to use in other tests.
        $id = null;
        if (preg_match_all('/\/widget_instance\/edit\/instance_id\/(\d+)/', $response, $matches)) {
            $id = $matches[1][count($matches[1]) - 1];
        }
        return ['id' => $id];
    }
    
    /**
     * Prepare data to create widget.
     *
     * @param FixtureInterface $widget
     * @return array
     */
    protected function prepareData(FixtureInterface $widget)
    {
        // Replace UI fixture values with values that are applicable for cURL. Property $mappingData is used.
        $data = $this->replaceMappingData($widget->getData());
        // Perform data manipulations to prepare the cURL request based on input data.
        ...
        return $data;
    }
    // Additional methods.
}

{% endhighlight %}

* Create <a href="#mtf_handler_di"><code>di.xml</code></a> in the `etc/curl` directory of the Magento_Widget module.

{%highlight xml%}

{% remote_markdown https://raw.githubusercontent.com/magento/magento2/develop/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml %}

{%endhighlight%}

### cURL authentication classes {#mtf_handler_decor}

In the previously mentioned example of the <a href="#mtf_curl_script">Curl.php</a> code, authentication in the Admin is realized using the `BackendDecorator` class. 

The <a href="#mtf_handler_curl_frontdecor">FrontendDecorator class</a> manages authentication in the storefront.

#### BackendDecorator class {#mtf_handler_curl_backdecor}

`BackendDecorator` manages authentication in Admin and saves the Admin's session.

Full class name is `Mtf\Util\Protocol\CurlTransport\BackendDecorator`. 

Add to the `Curl.php` the following code:

{% highlight php %}
$curl = new BackendDecorator(new CurlTransport(), new Config());
{% endhighlight %}

`Config()` takes Admin's configuration from <a href="#mtf_handler_configxml">config.xml</a>, where the username and the password are stored.

#### FrontendDecorator class {#mtf_handler_cirl_frontdecor}

`FrontendDecorator` helps to authorize the customer and saves his session.

Full class name is `Mtf\Util\Protocol\CurlTransport\FrontendDecorator`.

Use the following code in the `Curl.php` file:

{% highlight php %}
$curl = new FrontendDecorator(new CurlTransport(), $this->customer);
{% endhighlight %}

## How to create a UI handler {#mtf_handler_howto-create-ui}

Let's create a UI handler that creates a new widget.

* Create a directory with the name `Widget` in the `Handler` directory of the Magento_Widget module - `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
* In the same directory, create <a href="#mtf_handler_interface">interface</a> for the UI handler, and call the file `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Handler\HandlerInterface;

/**
 * Interface WidgetInterface
 */
interface WidgetInterface extends HandlerInterface
{
    //
}

{% endhighlight %}

* Create `Ui.php` in the same directory. This file contains a <a href="#mtf_handler_conf_hand">handler class</a>, which defines preparation of a data to create a new widget.

The code has detailed comments for better understanding.

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 
namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Fixture\FixtureInterface;
use Magento\Mtf\Handler\Curl as AbstractCurl;
use Magento\Mtf\Util\Protocol\CurlTransport;
use Magento\Mtf\Util\Protocol\CurlTransport\BackendDecorator;

/**
 * Curl handler for creating widgetInstance/frontendApp.
 */
class Curl extends AbstractCurl
{
    /**
     * Mapping values for data.
     *
     * @var array
     */
    protected $mappingData = [
        'code' => [
            'CMS Page Link' => 'cms_page_link',
        ],
        'block' => [
            'Main Content Area' => 'content',
            'Sidebar Additional' => 'sidebar.additional',
            'Sidebar Main' => 'sidebar.main',
        ]
    ];
    
    /**
     * Post request for creating widget instance.
     *
     * @param FixtureInterface $fixture [optional]
     * @throws \Exception
     * @return null|array instance id
     */
    public function persist(FixtureInterface $fixture = null)
    {
        // Prepare data to send it using cURL.
        $data = $this->prepareData($fixture);
        // Build url to send post request to create widget.
        $url = $_ENV['app_backend_url'] . 'admin/widget_instance/save/code/'
            . $data['code'] . '/theme_id/' . $data['theme_id'];
        // Create CurlTransport instance to operate with cURL. BackendDecorator is used to log in to Magento backend.
        $curl = new BackendDecorator(new CurlTransport(), $this->_configuration);
        // Send request to url with prepared data.
        $curl->write($url, $data);
        // Read response.
        $response = $curl->read();
        // Close connection to server.
        $curl->close();
        // Verify whether request has been successful (check if success message is present).
        if (!strpos($response, 'data-ui-id="messages-message-success"')) {
            throw new \Exception("Widget instance creation by curl handler was not successful! Response: $response");
        }
        // Get id of created widget in order to use in other tests.
        $id = null;
        if (preg_match_all('/\/widget_instance\/edit\/instance_id\/(\d+)/', $response, $matches)) {
            $id = $matches[1][count($matches[1]) - 1];
        }
        return ['id' => $id];
    }
    
    /**
     * Prepare data to create widget.
     *
     * @param FixtureInterface $widget
     * @return array
     */
    protected function prepareData(FixtureInterface $widget)
    {
        // Replace UI fixture values with values that are applicable for cURL. Property $mappingData is used.
        $data = $this->replaceMappingData($widget->getData());
        // Perform data manipulations to prepare the cURL request based on input data.
        ...
        return $data;
    }
    // Additional methods.
}

{% endhighlight %}

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
        xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <preference for="Magento\Widget\Test\Handler\Widget\WidgetInterface"
                type="\Magento\Widget\Test\Handler\Widget\Ui" />
</config>

{%endhighlight%}

## How to create a WebAPI handler {#mtf_handler_howto-create-webapi}

Let's create a WebAPI handler that creates a new tax rule.

* Create a directory with the name `TaxRule` in the `Handler` directory of the Magento_Tax module - `<magento2>/dev/tests/functional/tests/app/Magento/Tax/Test/Handler/TaxRule`.
* In the same directory, create <a href="#mtf_handler_interface">interface</a> for the WebAPI handler, and call the file `TaxRuleInterface.php`. Our new interface extends `HandlerInterface` class.

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Handler\HandlerInterface;

/**
 * Interface WidgetInterface
 */
interface WidgetInterface extends HandlerInterface
{
    //
}

{% endhighlight %}
* Create `Webapi.php` in the same directory. The file contains a <a href="#mtf_handler_conf_hand">handler class</a>. In the following example WebAPI handler uses some cURL handler methods to prepare data. 

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 
namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Fixture\FixtureInterface;
use Magento\Mtf\Handler\Curl as AbstractCurl;
use Magento\Mtf\Util\Protocol\CurlTransport;
use Magento\Mtf\Util\Protocol\CurlTransport\BackendDecorator;

/**
 * Curl handler for creating widgetInstance/frontendApp.
 */
class Curl extends AbstractCurl
{
    /**
     * Mapping values for data.
     *
     * @var array
     */
    protected $mappingData = [
        'code' => [
            'CMS Page Link' => 'cms_page_link',
        ],
        'block' => [
            'Main Content Area' => 'content',
            'Sidebar Additional' => 'sidebar.additional',
            'Sidebar Main' => 'sidebar.main',
        ]
    ];
    
    /**
     * Post request for creating widget instance.
     *
     * @param FixtureInterface $fixture [optional]
     * @throws \Exception
     * @return null|array instance id
     */
    public function persist(FixtureInterface $fixture = null)
    {
        // Prepare data to send it using cURL.
        $data = $this->prepareData($fixture);
        // Build url to send post request to create widget.
        $url = $_ENV['app_backend_url'] . 'admin/widget_instance/save/code/'
            . $data['code'] . '/theme_id/' . $data['theme_id'];
        // Create CurlTransport instance to operate with cURL. BackendDecorator is used to log in to Magento backend.
        $curl = new BackendDecorator(new CurlTransport(), $this->_configuration);
        // Send request to url with prepared data.
        $curl->write($url, $data);
        // Read response.
        $response = $curl->read();
        // Close connection to server.
        $curl->close();
        // Verify whether request has been successful (check if success message is present).
        if (!strpos($response, 'data-ui-id="messages-message-success"')) {
            throw new \Exception("Widget instance creation by curl handler was not successful! Response: $response");
        }
        // Get id of created widget in order to use in other tests.
        $id = null;
        if (preg_match_all('/\/widget_instance\/edit\/instance_id\/(\d+)/', $response, $matches)) {
            $id = $matches[1][count($matches[1]) - 1];
        }
        return ['id' => $id];
    }
    
    /**
     * Prepare data to create widget.
     *
     * @param FixtureInterface $widget
     * @return array
     */
    protected function prepareData(FixtureInterface $widget)
    {
        // Replace UI fixture values with values that are applicable for cURL. Property $mappingData is used.
        $data = $this->replaceMappingData($widget->getData());
        // Perform data manipulations to prepare the cURL request based on input data.
        ...
        return $data;
    }
    // Additional methods.
}

{% endhighlight %}

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
        xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <preference for="Magento\Tax\Test\Handler\TaxRule\TaxRuleInterface"
                type="\Magento\Tax\Test\Handler\TaxRule\Webapi" />
</config>

{%endhighlight%}
