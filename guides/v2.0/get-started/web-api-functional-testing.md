---
layout: default
group: get-started
subgroup: A_Concepts
title: Web API functional testing
menu_title: Web API functional testing
menu_order: 1
version: 2.0
github_link: get-started/web-api-functional-testing.md
redirect_from: /guides/v1.0/get-started/web-api-functional-testing.html
---

## Web API functional testing
{:.no_toc}

The Web API testing framework allows you to test Magento Web API from the client application point of view. The tests can be used with either REST or SOAP. The REST or SOAP adapter that runs the tests is specified in PHPUnit configuration. See [How to Run the Tests](#howto) for more information.


<h2 id="details">Implementation Details</h2>

The Web API functional testing framework depends on the integration testing framework and reuses most of classes implemented there.


<h3 id="custom">Custom Annotations for Data Fixtures</h3>

In the Web API functional tests only, the custom annotation  `@magentoApiDataFixture` is available for declaring fixtures. The difference of this annotation from `@magentoDataFixture` is that the fixture will be committed and accessible during HTTP requests made within the test body. The usage rules of `@magentoApiDataFixture` are the same as `@magentoDataFixture` usage rules.

<div class="a" id="info">

<p>If data was added to the DB using <code>@magentoApiDataFixture</code>, it will not be automatically cleared after test execution. The data is cleared when <code>@magentoDataFixture</code> is used.</p>
</div>

Do not define fixtures in `dev/tests/api-functional`. Instead, they must be taken from `dev/tests/integration`. The integration framework defines most necessary fixtures, and they should be reused during Web API functional testing. If the existing set of fixtures is insufficient, add new fixtures under `dev/tests/integration`. The fixtures will then be available for both testing frameworks.

To keep your test environment clean, clear all entities created in fixture files or within tests itself from the DB after test execution. This can be done either directly in tearDown or by a corresponding rollback for the fixture file. This file should be named the same as a fixture, but with `_rollback` suffix.

<h2 id="create">How to Create a New Test</h2>

All Web API functional tests should inherit from the generic test case `Magento\TestFramework\TestCase\WebapiAbstract`. It defines the `_webApiCall()` method, which should be used to perform Web API calls from tests. Clients of `_webApiCall()` are unaware of which adapter will be used to perform remote call.

{% highlight php %}
<?php
namespace Magento\Webapi\Routing;

class CoreRoutingTest extends \Magento\TestFramework\TestCase\WebapiAbstract
{
    public function testBasicRoutingExplicitPath()
    {
        $itemId = 1;
        $serviceInfo = [
            'rest' => [
                'resourcePath' => '/V1/testmodule1/' . $itemId,
                'httpMethod' => \Magento\Framework\Webapi\Rest\Request::HTTP_METHOD_GET,
            ],
            'soap' => [
                'service' => 'testModule1AllSoapAndRestV1',
                'operation' => 'testModule1AllSoapAndRestV1Item',
            ],
        ];
        $requestData = ['itemId' => $itemId];
        $item = $this->_webApiCall($serviceInfo, $requestData);
        $this->assertEquals('testProduct1', $item['name'], "Item was retrieved unsuccessfully");
    }
} ?>
{% endhighlight %}

The test above should is able to test SOAP and REST depending on what adapter is currently used by testing framework. $serviceInfo format is defined by Web API client adapter interface:

{% highlight php %}
<?php

namespace Magento\TestFramework\TestCase\Webapi;

interface AdapterInterface
{
    /**
     * Perform call to the specified service method.
     *
     * @param array $serviceInfo <pre>
     * array(
     *     'rest' => array(
     *         'resourcePath' => $resourcePath, // e.g. /products/:id
     *         'httpMethod' => $httpMethod,     // e.g. GET
     *         'token' => '21hasbtlaqy8t3mj73kjh71cxxkqj4aq'    // optional : for token based Authentication. Will
     *                                                             override default Oauth based authentication provided
     *                                                             by test framework
     *     ),
     *     'soap' => array(
     *         'service' => $soapService,    // soap service name with Version suffix e.g. catalogProductV1, customerV2
     *         'operation' => $operation     // soap operation name e.g. catalogProductCreate
     *     )
     * );
     * </pre>
     * @param array $arguments
     * @param string|null $storeCode if store code not provided, default store code will be used
     * @param \Magento\Integration\Model\Integration|null $integration
     * @return array|string|int|float|bool
     */
    public function call($serviceInfo, $arguments = [], $storeCode = null, $integration = null);
}
 ?>
{% endhighlight %}

<h2 id="howto">How to Run the Tests</h2>
<h3 id="prereq">Prerequisites</h3>
1. Install the PHP Soap extension.

	Copy `php_soap.dll` or `php_soap.so` to your PHP extensions directory. Edit your `php.ini` file and enable the PHP Soap extension. Usually this means deleting the leading semi-colon in front of the extension. Then restart Apache.

	`extension=php_soap.dll`

2. Before running the functional tests you need to clear your cache.
Now you are ready to run the tests.

<h3 id="running">Running the Tests</h3>
1. Copy `/dev/tests/api-functional/phpunit.xml.dist` to `/dev/tests/api-functional/phpunit.xml`
	a. Specify your Magento instance URL as a value of `TESTS_BASE_URL` in `phpunit.xml`.
	b. Choose the required Web API adapter, `rest` or `soap`, to be used and specify it in `TESTS_WEB_API_ADAPTER`.

2. Copy `/dev/tests/api-functional/config/install-config-mysql.php.dist` to `/dev/tests/api-functional/config/install-config-mysql.php`.

3. Configure your DB connection and install settings in `/dev/tests/api-functional/config/install-config-mysql.php`.  Specify the Magento database. The base URL to access this Magento instance must be specified in `phpunit.xml`.

4. Run `phpunit` using the `/dev/tests/api-functional/phpunit.xml ` configuration file.
