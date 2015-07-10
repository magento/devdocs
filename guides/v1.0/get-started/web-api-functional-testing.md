The Web API testing framework allows you to test Magento Web API from the client application point of view. The tests can used with either REST or SOAP.

Concrete test is not aware about adapter being used for making requests. Specific adapter is selected based on parameters specified in PHPUnit configuration (see How to Run the Tests section for more details).

<h2>Implementation Details</h2>

The Web API functional testing framework depends on the integration testing framework and reuses most of classes implemented there.


<h3>Custom Annotation for Data Fixtures</h3>

In the Web API functional tests only, the custom annotation  `@magentoApiDataFixture` is available for declaring fixtures. The difference of this annotation from `@magentoDataFixture` is that the fixture will be committed and accessible during HTTP requests made within the test body. The usage rules of `@magentoApiDataFixture` are the same as `@magentoDataFixture` usage rules.

	If data was added to DB using @magentoApiDataFixture, it will not be automatically cleared after test execution in contrast to case when @magentoDataFixture is used
	
No fixtures must be defined in `dev/tests/api-functional`. Instead, they must be taken from `dev/tests/integration`. The integration framework defines most necessary fixtures, and they should be reused during Web API functional testing. If the existing set of fixtures is insufficient, add new fixtures under `dev/tests/integration`. As a result, the fixtures will be available for both testing frameworks. 

To keep your test environment clean, all entities created in fixture files or within tests should be cleared from the DB after test execution. To clear data, register models you create using the static method `Magento_Test_TestCase_WebapiAbstract::setFixture($key, $fixture, $tearDown = self::AUTO_TEAR_DOWN_AFTER_METHOD)`. The `$tearDown` argument defines when to clear the model. The possible values are:

* AUTO_TEAR_DOWN_DISABLED - Never clear the model.
* AUTO_TEAR_DOWN_AFTER_METHOD - Clear after the current test execution.
* AUTO_TEAR_DOWN_AFTER_CLASS - Clear after the current test suite execution.

A registered model can also be accessed using the static method `Magento_Test_TestCase_WebapiAbstract::getFixture($key)`.

<h2>How to Create a New Test</h2>

How to Create New Test
All Web API functional tests should be inherited from the generic test case `Magento_Test_TestCase_WebapiAbstract`. It contains some logic for fixture management, and also has definition of the`_webApiCall()` method, which should be used to perform Web API calls from tests. Clients of `_webApiCall()` are unaware of what adapter will be used to perform remote call.

{% highlight php %}
<?php

class Mage_Webapi_RoutingTest extends Magento_Test_TestCase_WebapiAbstract
{
    public function testBasicRoutingPathAutoDetection()
    {
        $itemId = 1;
        $serviceInfo = array(
                'serviceInterface' => 'Mage_TestModule1_Service_AllSoapAndRestInterfaceV1',
                'method' => 'item',
                'entityId' => $itemId
        );
        $requestData = array('id' => $itemId);
        $item = $this->_webApiCall($serviceInfo, $requestData);
        $this->assertEquals($itemId, $item['id'], "Item was retrieved unsuccessfully");
    }
 
    public function testBasicRoutingExplicitPath()
    {
        $itemId = 1;
        $serviceInfo = array(
            'rest' => array(
                'resourcePath' => '/V1/testmodule1/' . $itemId,
                'httpMethod' => 'GET'
            ),
            'soap' => array(
                'service' => 'testModule1AllSoapAndRest',
                'serviceVersion' => 'V1',
                'operation' => 'testModule1AllSoapAndRestItem'
            )
        );
        $requestData = array('id' => $itemId);
        $item = $this->_webApiCall($serviceInfo, $requestData);
        $this->assertEquals($itemId, $item['id'], "Item was retrieved unsuccessfully");
    }
} ?>
{% endhighlight %}

The test above should is able to test SOAP and REST depending on what adapter is currently used by testing framework. $serviceInfo format is defined by Web API client adapter interface:

{% highlight php %}
<?php

interface Magento_Test_TestCase_Webapi_AdapterInterface
{
    /**
     * Perform call to the specified service method.
     *
     * @param string $serviceInfo <pre>
     * array(
     *     'rest' => array(
     *         'resourcePath' => $resourcePath, // e.g. /products/:id
     *         'httpMethod' => $httpMethod      // e.g. GET
     *     ),
     *     'soap' => array(
     *         'service' => $soapService,           // soap service name e.g. catalogProduct, customer
     *         'serviceVersion' => $serviceVersion, // with 'V' prefix or without it
     *         'operation' => $operation            // soap operation name e.g. catalogProductCreate
     *     ),
     *     OR
     *     'serviceInterface' => $phpServiceInterfaceName, // e.g. Mage_Catalog_Service_ProductInterfaceV1
     *     'method' => $serviceMethodName                  // e.g. create
     *     'entityId' => $entityId                         // is used in REST route placeholder (if applicable)
     * );
     * </pre>
     * @param array $arguments
     * @return array
     */
    public function call($serviceInfo, $arguments = array());
}

 ?>
{% endhighlight %}