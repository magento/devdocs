---
group: php-developer-guide
title: WebApi request processors pool
contributor_name: Comwrap GmbH
contributor_link: https://www.comwrap.com
functional_areas:
  - Configuration
---

The request processors pool routes WebApi requests. It is located in the Magento_WebApi module: `Magento\Webapi\Controller\Rest\RequestProcessorPool`

Magento defines the following processors:

{:.fixed}
Processor name | Class | URL pattern | Description
--- | --- | --- | ---
`sync` | `Magento\Webapi\Controller\Rest\SynchronousRequestProcessor` | `/^\\/V\\d+/`| Executes the corresponding service contract.
`syncSchema` | `Magento\Webapi\Controller\Rest\SchemaRequestProcessor` | `schema` | Delivers the schema needed for generating Swagger documentation.
`async` | `Magento\WebapiAsync\Controller\Rest\AsynchronousRequestProcessor` | `/^\\/async(\\/V.+)/` | Performs an asynchronous API request. It executes `Magento\AsynchronousOperations\Model\MassSchedule::publishMass`, which places a single message in the queue.
`asyncSchema` | `Magento\WebapiAsync\Controller\Rest\AsynchronousSchemaRequestProcessor` | `async/schema` | Delivers the schema needed for generating Swagger documentation for asynchronous endpoints.
`asyncBulk` | `Magento\WebapiAsync\Controller\Rest\VirtualType\AsynchronousBulkRequestProcessor` | `/^\\/async\/bulk(\\/V.+)/` | Performs a bulk API request by executing `Magento\AsynchronousOperations\Model\MassSchedule::publishMass`, which places multiple messages in the queue.
`asyncBulkSchema` | `Magento\WebapiAsync\Controller\Rest\VirtualType\AsynchronousBulkSchemaRequestProcessor` | `async/bulk/schema` | Currently not used. Reserved for future use.

 {:.bs-callout-info}
`async` and `asyncBulk` share the same processor but have different URL patterns.

## Create a new processor

To create a custom processor, you must perform the following tasks:

*  Define the custom processor in `webapi_rest/di.xml`.
*  Create a processor class and implement the `Magento\Webapi\Controller\Rest\RequestProcessorInterface` interface.
*  Define the processing rules in the `canProcess` method.
*  Create the processor logic in the `process` method.

### Define the custom processor

Processors must be defined in a module's `webapi_rest/di.xml` file. The following example shows the definition of the default `sync` processor:

```xml
<type name="Magento\Webapi\Controller\Rest\RequestProcessorPool">
    <arguments>
        <argument name="requestProcessors" xsi:type="array">
            <item name="sync" xsi:type="object" sortOrder="100">Magento\Webapi\Controller\Rest\SynchronousRequestProcessor</item>
        </argument>
    </arguments>
</type>
```

## Create the processor class

A custom processor must implement the `Magento\Webapi\Controller\Rest\RequestProcessorInterface` interface, as shown below:

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
declare(strict_types=1);

namespace Magento\Webapi\Controller\Rest;

/**
 *  Request processor interface
 */
interface RequestProcessorInterface
{
    /**
     * Executes the logic to process the request
     *
     * @param \Magento\Framework\Webapi\Rest\Request $request
     * @return void
     * @throws \Magento\Framework\Exception\AuthorizationException
     * @throws \Magento\Framework\Exception\InputException
     * @throws \Magento\Framework\Webapi\Exception
     */
    public function process(\Magento\Framework\Webapi\Rest\Request $request);

    /**
     * Method should return true for all the requests the current processor can process.
     *
     * Invoked in the loop for all registered request processors. The first one wins.
     *
     * @param \Magento\Framework\Webapi\Rest\Request $request
     * @return bool
     */
    public function canProcess(\Magento\Framework\Webapi\Rest\Request $request);
}
```

The `canProcess(\Magento\Framework\Webapi\Rest\Request $request)` method defines whether the current request can be processed. Currently, all implemented processors match current request URLs with the defined patterns.

For example, `Magento\WebapiAsync\Controller\Rest\AsynchronousRequestProcessor` processes asynchronous calls, such as `<host>/rest/async/V1/products`.

```php
const PROCESSOR_PATH = "/^\\/async(\\/V.+)/";

.....

public function canProcess(\Magento\Framework\Webapi\Rest\Request $request)
{
    if ($request->getHttpMethod() === \Magento\Framework\Webapi\Rest\Request::HTTP_METHOD_GET) {
        return false;
    }

    if (preg_match($this->processorPath, $request->getPathInfo()) === 1) {
        return true;
    }
    return false;
}

.....
```

The `process(\Magento\Framework\Webapi\Rest\Request $request)` method executes processor logic.
