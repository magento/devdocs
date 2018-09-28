---
group: web-api
title: Web API functional testing
---

The Web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} testing framework allows you to test Magento {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}Web API{% endglossarytooltip %} from the client application point of view. The tests can be used with either REST or SOAP. The REST or SOAP {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} that runs the tests is specified in PHPUnit configuration. See [How to Run the Tests](#howto) for more information.

## Implementation Details {#details}

The Web API functional testing framework depends on the integration testing framework and reuses most of classes implemented there.

### Custom Annotations for Data Fixtures {#custom}

In the Web API functional tests only, the custom annotation  `@magentoApiDataFixture` is available for declaring fixtures. The difference of this annotation from `@magentoDataFixture` is that the fixture will be committed and accessible during HTTP requests made within the test body. The usage rules of `@magentoApiDataFixture` are the same as `@magentoDataFixture` usage rules.

{:.bs-callout .bs-callout-tip}
If data was added to the DB using `@magentoApiDataFixture`, it will not be automatically cleared after test execution. The data is cleared when `@magentoDataFixture` is used.

Do not define fixtures in `dev/tests/api-functional`. Instead, they must be taken from `dev/tests/integration`. The integration framework defines most necessary fixtures, and they should be reused during Web API functional testing. If the existing set of fixtures is insufficient, add new fixtures under `dev/tests/integration`. The fixtures will then be available for both testing frameworks.

To keep your test environment clean, clear all entities created in fixture files or within tests itself from the DB after test execution. This can be done either directly in tearDown or by a corresponding rollback for the fixture file. This file should be named the same as a fixture, but with `_rollback` suffix.

## How to Create a New Test {#create}

All Web API functional tests should inherit from the generic test case `Magento\TestFramework\TestCase\WebapiAbstract`. It defines the `_webApiCall()` method, which should be used to perform Web API calls from tests. Clients of `_webApiCall()` are unaware of which adapter will be used to perform the remote call.

```php?start_inline=1
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
}
```

The test above should be able to test SOAP and REST, depending on what adapter is currently used by the testing framework. The format of `$serviceInfo` is defined by the Web API client adapter interface:

```php?start_inline=1
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
```

## How to Run the Tests {#howto}
### Prerequisites {#prereq}

1. Install the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} Soap {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %}.

	Copy `php_soap.dll` or `php_soap.so` to your PHP extensions directory. Edit your `php.ini` file and enable the PHP Soap extension. Usually this means deleting the leading semi-colon in front of the extension. Then restart Apache.

	`extension=php_soap.dll`

2. Before running the functional tests you need to clear your {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}.
Now you are ready to run the tests.

### Running the Tests {#running}

1. Copy `/dev/tests/api-functional/phpunit_rest.xml.dist` and `phpunit_soap.xml.dist` to `/dev/tests/api-functional/phpunit_rest.xml` and `phpunit_soap.xml`.

	a. Specify your Magento instance URL as a value of `TESTS_BASE_URL` in `phpunit.xml`.

	b. Choose the required Web API adapter, `rest` or `soap`, to be used and specify it in `TESTS_WEB_API_ADAPTER`.

2. Copy `/dev/tests/api-functional/config/install-config-mysql.php.dist` to `/dev/tests/api-functional/config/install-config-mysql.php`.

3. Configure your DB connection and install settings in `/dev/tests/api-functional/config/install-config-mysql.php`.  Specify the Magento database. The base URL to access this Magento instance must be specified in `phpunit.xml`.

4. Run `phpunit` using the `/dev/tests/api-functional/phpunit.xml ` configuration file.
