---
group: php-developer-guide
title: WebApi Request Processors Pool
contributor_name: Comwrap GmbH
contributor_link: https://www.comwrap.com
functional_areas:
  - Configuration
---

Request Processors Pool is responsible routing of WebApi requests. 

Processors Pool is located in Magento_WebApi module: `Magento\Webapi\Controller\Rest\RequestProcessorPool`

Single processors are defined in `webapi_rest/di.xml`

Synchronous Requests Processor example:
```
<type name="Magento\Webapi\Controller\Rest\RequestProcessorPool">
    <arguments>
        <argument name="requestProcessors" xsi:type="array">
            <item name="sync" xsi:type="object" sortOrder="100">Magento\Webapi\Controller\Rest\SynchronousRequestProcessor</item>
        </argument>
    </arguments>
</type>
```

Processor always has to implement `Magento\Webapi\Controller\Rest\RequestProcessorInterface` interface.

```
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
     * Method should return true for all the request current processor can process.
     *
     * Invoked in the loop for all registered request processors. The first one wins.
     *
     * @param \Magento\Framework\Webapi\Rest\Request $request
     * @return bool
     */
    public function canProcess(\Magento\Framework\Webapi\Rest\Request $request);
}

```

Interface consists of the following methods:

`canProcess(\Magento\Framework\Webapi\Rest\Request $request)` - this method defines if current processor can be processed. Currently all implemented processors are matching current request URL with defined patterns. 

Example:

* Request URL: `MAGENTO_URL/rest/async/V1/products` will be executed by processor `Magento\WebapiAsync\Controller\Rest\AsynchronousRequestProcessor`:
```
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

`process(\Magento\Framework\Webapi\Rest\Request $request)` - executes processor logic.


### Predefined processors

Currently Magento has a six processors defined in source code: 

Processor name | Class | URL Pattern | Description
--- | --- | --- | ---
`sync` | `Magento\Webapi\Controller\Rest\SynchronousRequestProcessor` | `/^\\/V\\d+/`| Executes correspondent Service Contract.
`syncSchema` | `Magento\Webapi\Controller\Rest\SchemaRequestProcessor` | `schema` | Deliver schema for Swagger Generation.
`async` | `Magento\WebapiAsync\Controller\Rest\AsynchronousRequestProcessor` | `/^\\/async(\\/V.+)/` | Asynchronous API request. Executes `Magento\AsynchronousOperations\Model\MassSchedule::publishMass` which place single message to the queue.
`asyncSchema` | `Magento\WebapiAsync\Controller\Rest\AsynchronousSchemaRequestProcessor` | `async/schema` | Deliver schema for Asynchronous Swagger Generation.
`asyncBulk` | `Magento\WebapiAsync\Controller\Rest\VirtualType\AsynchronousBulkRequestProcessor` | `/^\\/async\/bulk(\\/V.+)/` | Bulk API request. Executes `Magento\AsynchronousOperations\Model\MassSchedule::publishMass` which place multiple messages to the queue.
`asyncBulkSchema` | `Magento\WebapiAsync\Controller\Rest\VirtualType\AsynchronousBulkSchemaRequestProcessor` | `async/bulk/schema` | Currently not used. Reserved to future needs.

{: .bs-callout .bs-callout-info }
`async` and `asyncBulk` are sharing the same processor but different url patterns.

### Modifications

Developers can provide new processors.

* Define new processor in `webapi_rest/di.xml`.
* Create processor class and implement `Magento\Webapi\Controller\Rest\RequestProcessorInterface` interface.
* Define processing rule in `canProcess` method
* Create processor logic in `process` method