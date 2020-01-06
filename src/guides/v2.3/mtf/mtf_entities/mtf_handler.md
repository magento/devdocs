---
group: functional-testing-framework-guide
title: Handler
---

You can use a handler to set up preconditions and prepare an initial testing environment for particular tests.
For example, your scenario requires a particular [widget](https://glossary.magento.com/widget) that must be implicitly created before the test is started.
You need a [fixture]({{ page.baseurl }}/mtf/mtf_entities/mtf_fixture.html), a [data set]({{ page.baseurl }}/mtf/mtf_entities/mtf_dataset.html), and a handler.
The handler transfers data to the application being tested.
The data is a list of fields from a fixture and values from data sets.

This topic focuses on handlers, and we'll discuss types of handlers as well as how to create and use one.

## Types of handlers {#mtf_handler_types}

The FTF enables you to use any type of handler.

Magento uses the following handlers:

| Type of handler | Mechanism | Example| Tip|
|---|---|---|---|
|UI|Drives the web browser.| Set of scripts for Selenium that simulate user actions to create a widget through a web browser.| The UI handler is much slower then the other handlers. When the test execution time is critical, you should avoid use of the UI handler. The UI handler code is very similar to the code of the test that doesn't contain constraints. If you have a test for widget creation, you can re-use the code, because the code of UI handler that creates widget is very similar.|
|cURL|Sends POST or PUT requests to the server hosting the application that is being tested.|HTTP POST request to the application server, that transfers Widget fixture fields and corresponding values from the data set.|Browser is not involved, that's why the cURL handler works much faster than the UI handler.|
|WebAPI|Sends a POST request using the REST API. [See REST API reference documentation.]({{ page.baseurl }}/rest/bk-rest.html) |Similar to cURL but uses the REST API  entry point. |Has the advantage of testing the API, faster than cURL.|

Furthermore, you can create your own handlers, such as **Direct**, which is very fast because the **Direct** handler sends a direct call to the Magento application using Magento models.
The **Direct** handler requires deep understanding of the Magento application, and also requires access to the Magento code and the database.
Difficulties can be caused when the Magento code and Magento tests are run on different hosts.

## Configuration {#mtf_handler_config}

One fixture can have various handlers.
When we create an [entity](https://glossary.magento.com/entity) in the test we do not indicate which handler to use.
This work is delegated to a fallback, which is a queue of handlers in the priority order specified in [`config.xml`](#mtf_handler_configxml).

### `config.xml` {#mtf_handler_configxml}

The default configuration for handlers is set in [`<magento2>/dev/tests/functional/etc/config.xml.dist`]({{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/functional/etc/config.xml.dist).
Create a duplicate of the file, and keep both, but make changes to the new one, which is called `config.xml`:

```bash
cp config.xml.dist config.xml
```

The following nodes influence handlers:

<table>
<tr><th>Node</th><th>Semantics</th><th>Example</th></tr>
<tr><td><code>&lt;backendLoginUrl&gt;</code></td><td>Reference to the login form of the [Admin](https://glossary.magento.com/admin).</td><td><code>&lt;backendLoginUrl&gt;admin/auth/login&lt;/backendLoginUrl&gt;</code></td></tr>
<tr><td><code>&lt;backendLogin&gt;</code></td><td>A username to access the Admin as a Magento administrator.</td><td><code>&lt;backendLogin&gt;admin&lt;/backendLogin&gt;</code></td></tr>
<tr><td><code>&lt;backendPassword&gt;</code></td><td>A password to access the Admin as a Magento administrator.</td><td><code>&lt;backendPassword&gt;pas$worD&lt;/backendPassword&gt;</code></td></tr>
<tr><td><code>&lt;handler&gt;</code></td><td>Specifies priorities for different types of handler. The less the value, the higher the priority. The highest priority has value <code>0</code>. <code>token</code> contains <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication.html">access token</a> (used by WebAPI handlers only).</td>
<td><pre>
&lt;handler&gt;
  &lt;webapi priority="0"&gt;
    &lt;token&gt;integration_token&lt;/token&gt;
  &lt;/webapi&gt;
  &lt;curl priority="1" /&gt;
  &lt;ui priority="2" /&gt;
&lt;/handler&gt;
</pre>
</td></tr>
</table>

## Handler components {#mtf_handler-components}

### Handler interface {#mtf_handler_interface}

Each handler must implement a handler interface.

You should mention in a fixture the `handler_interface` attribute with a reference to the PHP class: `Magento\[module_name]\Test\Handler\[object_name]\[object_name]Interface` (example for the Widget: `Magento\Widget\Test\Handler\Widget\WidgetInterface`).

Example of `WidgetInterface.php` (should be placed in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`):

```php
<?php

namespace Magento\Widget\Test\Handler\Widget;

use Magento\Mtf\Handler\HandlerInterface;

/**
 * Interface WidgetInterface
 */
interface WidgetInterface extends HandlerInterface
{
    //
}
```

### Handler class {#mtf_handler_conf_hand}

To use the handler class, create [an interface](#mtf_handler_interface), declare a fallback in the [`config.xml`](#mtf_handler_config), and declare interface/class relationships in the [`di.xml`](#mtf_handler_di).
When this class is created, you can call the `persist()` method to create Magento entity (for example, widget).
The method returns data that are matched with fixture fields.
All fixture fields that are matched are assigned values from the handler.

The `persist()` method is declared in the [`InjectableFixture`](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Fixture/InjectableFixture.php) class by path `<magento2_root_dir>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Fixture/InjectableFixture.php`.

```php
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
```

Create the handler in the same directory where the interface is stored: `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/[module_name]/Test/Handler/[object_name]/[type_of_handler].php`

### `di.xml` {#mtf_handler_di}

The `di.xml` file declares relationship between the [interface](#mtf_handler_interface) and the [handler](#mtf_handler_conf_hand) class.
The file must be placed in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/[module_name]/Test/etc/[handler_type]`.

See an example for the Widget cURL handler [`dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`][].

In this example, the `di.xml` file causes the `Curl` class to replace the `WidgetInterface`.

See the directory structure mentioned for the case with the Widget cURL handler:

![]({{ site.baseurl }}/common/images/ftf/mtf_widget_handler_tree.png)

## How to create a cURL handler {#mtf_handler_howto-create-curl}

Let's create a cURL handler that creates a new widget.

*  Create a directory with the name `Widget` in the `Handler` directory of the Magento_Widget module - `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
*  In the same directory, create [the interface](#mtf_handler_interface) for the cURL handler, and call the file `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

  ```php
  <?php

  namespace Magento\Widget\Test\Handler\Widget;

  use Magento\Mtf\Handler\HandlerInterface;

  /**
  * Interface WidgetInterface
  */
  interface WidgetInterface extends HandlerInterface
  {
      //
  }
  ```

*  Create `Curl.php` in the same directory. This file contains a [handler class](#mtf_handler_conf_hand), which defines preparation of a data to create a new widget.

  The following code includes detailed comments for better understanding.
  {:#mtf_curl_script}

  ```php
  <?php

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
  ```

*  Create a [`di.xml`](#mtf_handler_di) file in the `etc/curl` directory of the Magento_Widget module ([`dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`][]).

### cURL authentication classes {#mtf_handler_decor}

In the previously mentioned example of the [Curl.php](#mtf_curl_script) code, authentication in the Admin is realized using the `BackendDecorator` class.

The [FrontendDecorator class](#mtf_handler_curl_frontdecor) manages authentication in the [storefront](https://glossary.magento.com/storefront).

#### BackendDecorator class {#mtf_handler_curl_backdecor}

`BackendDecorator` manages authentication in Admin and saves the Admin's session.

Full class name is `Mtf\Util\Protocol\CurlTransport\BackendDecorator`.

Add to the `Curl.php` the following code:

```php
$curl = new BackendDecorator(new CurlTransport(), new Config());
```

`Config()` takes Admin's configuration from [config.xml](#mtf_handler_configxml), where the username and the password are stored.

#### FrontendDecorator class {#mtf_handler_curl_frontdecor}

`FrontendDecorator` helps to authorize the customer and saves his session.

Full class name is `Mtf\Util\Protocol\CurlTransport\FrontendDecorator`.

Use the following code in the `Curl.php` file:

```php
$curl = new FrontendDecorator(new CurlTransport(), $this->customer);
```

## How to create a UI handler {#mtf_handler_howto-create-ui}

Let's create a UI handler that creates a new widget.

*  Create a directory with the name `Widget` in the `Handler` directory of the Magento_Widget module - `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Handler/Widget`.
*  In the same directory, create [interface](#mtf_handler_interface) for the UI handler, and call the file `WidgetInterface.php`. Our new interface extends `HandlerInterface` class.

  ```php
  <?php

  namespace Magento\Widget\Test\Handler\Widget;

  use Magento\Mtf\Handler\HandlerInterface;

  /**
  * Interface WidgetInterface
  */
  interface WidgetInterface extends HandlerInterface
  {
      //
  }
  ```

*  Create `Ui.php` in the same directory. This file contains a [handler class](#mtf_handler_conf_hand), which defines preparation of a data to create a new widget.

  The code has detailed comments for better understanding.

  ```php
  <?php

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
  ```

*  Create [`di.xml`](#mtf_handler_di) in the `etc/ui` directory of the Magento_Widget [module](https://glossary.magento.com/module).

  ```xml
  <?xml version="1.0" ?>

  <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
      <preference for="Magento\Widget\Test\Handler\Widget\WidgetInterface"
                  type="\Magento\Widget\Test\Handler\Widget\Ui" />
  </config>
  ```

## How to create a WebAPI handler {#mtf_handler_howto-create-webapi}

Let's create a WebAPI handler that creates a new [tax rule](https://glossary.magento.com/tax-rule).

*  Create a directory with the name `TaxRule` in the `Handler` directory of the Magento_Tax module - `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Tax/Test/Handler/TaxRule`.
*  In the same directory, create [interface](#mtf_handler_interface) for the WebAPI handler, and call the file `TaxRuleInterface.php`. Our new interface extends `HandlerInterface` class.

  ```php

  namespace Magento\Tax\Test\Handler\TaxRule;

  use Magento\Mtf\Handler\HandlerInterface;

  /**
  * Interface TaxRuleInterface
  */
  interface TaxRuleInterface extends HandlerInterface
  {
      //
  }
  ```

*  Create `Webapi.php` in the same directory. The file contains a [handler class](#mtf_handler_conf_hand). In the following example WebAPI handler uses some cURL handler methods to prepare data.

  ```php
  <?php

  namespace Magento\Tax\Test\Handler\TaxRule;

  use Magento\Tax\Test\Fixture\TaxRule;
  use Magento\Mtf\Config\DataInterface;
  use Magento\Mtf\Fixture\FixtureInterface;
  use Magento\Mtf\Util\Protocol\CurlTransport;
  use Magento\Mtf\Handler\Webapi as AbstractWebapi;
  use Magento\Mtf\System\Event\EventManagerInterface;
  use Magento\Mtf\Util\Protocol\CurlTransport\WebapiDecorator;

  /**
  * Create Tax Rule via Web API handler.
  */
  class Webapi extends AbstractWebapi implements TaxRuleInterface
  {
      /**
      * Tax Rule cUrl handler.
      *
      * @var Curl
      */
      protected $taxRuleCurl;

      /**
      * @constructor
      * @param DataInterface $configuration
      * @param EventManagerInterface $eventManager
      * @param WebapiDecorator $webapiTransport
      * @param Curl $taxRuleCurl
      */
      public function __construct(
          DataInterface $configuration,
          EventManagerInterface $eventManager,
          WebapiDecorator $webapiTransport,
          Curl $taxRuleCurl
      ) {
          parent::__construct($configuration, $eventManager, $webapiTransport);
          $this->taxRuleCurl = $taxRuleCurl;
      }

      /**
      * Web API request for creating Tax Rule.
      *
      * @param FixtureInterface $fixture
      * @return array
      * @throws \Exception
      */
      public function persist(FixtureInterface $fixture = null)
      {
          /** @var TaxRule $fixture */
          $data = $this->prepareData($fixture);

          $url = $_ENV['app_frontend_url'] . 'rest/V1/taxRules';
          $this->webapiTransport->write($url, $data);
          $response = json_decode($this->webapiTransport->read(), true);
          $this->webapiTransport->close();

          if (empty($response['id'])) {
              $this->eventManager->dispatchEvent(['webapi_failed'], [$response]);
              throw new \Exception('Tax rule creation by Web API handler was not successful!');
          }

          return ['id' => $response['id']];
      }

      /**
      * Returns data for Web API params.
      *
      * @param TaxRule $fixture
      * @return array
      */
      protected function prepareData(TaxRule $fixture)
      {
          $data = $fixture->getData();
          $data = $this->taxRuleCurl->prepareFieldData($fixture, $data, 'tax_rate', 'tax_rate_ids');
          $data = $this->taxRuleCurl->prepareFieldData($fixture, $data, 'tax_product_class', 'product_tax_class_ids');
          $data = $this->taxRuleCurl->prepareFieldData($fixture, $data, 'tax_customer_class', 'customer_tax_class_ids');

          return ['rule' => $data];
      }
  }
  ```

*  Create [`di.xml`](#mtf_handler_di) in the `etc/webapi` directory of the Magento_Tax module.

  ```xml
  <?xml version="1.0" ?>

  <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
      <preference for="Magento\Tax\Test\Handler\TaxRule\TaxRuleInterface"
                  type="\Magento\Tax\Test\Handler\TaxRule\Webapi" />
  </config>
  ```

<!-- Link definitions -->

[`dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`]: {{ site.mage2bloburl }}/2.2/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml
[`dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml`]: {{ site.mage2bloburl }}/2.2/dev/tests/functional/tests/app/Magento/Widget/Test/etc/curl/di.xml
