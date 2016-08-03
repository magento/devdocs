---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Example bulk operations implementation
menu_title: Example bulk operations implementation (Enterprise Edition Only)
menu_order: 21
version: 2.2
github_link: extension-dev-guide/implement-bulk.md

---

## {{page.title}}
<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This article applies to Enterprise Edition only">

This document describes how bulk operations can be implemented. There are three primary tasks to accomplish this:

* Create a publisher that sends messages to the message queue.
* Create a consumer that receives and processes messages.
* Configure the message queues

### Create a publisher

A publisher's duties include scheduling a bulk operation. It must generate a `bulkUuid` for each operation, send each operation to the message queue, and report on the status of each operations.

The following code sample shows how these duties can be completed.

{% collapsible Code sample: %}
{% highlight php startinline=true %}

<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

use Magento\Framework\Bulk\BulkManagementInterface;
use Magento\BulkOperations\Api\Data\OperationInterface;
use Magento\BulkOperations\Api\Data\OperationInterfaceFactory;
use Magento\Framework\DataObject\IdentityGeneratorInterface;
use Magento\Authorization\Model\UserContextInterface;
use Magento\Framework\UrlInterface;

/**
 * Class ScheduleBulk
 */
class ScheduleBulk
{
    /**
     * @var BulkManagementInterface
     */
    private $bulkManagement;

    /**
     * @var OperationInterfaceFactory
     */
    private $operationFactory;

    /**
     * @var IdentityGeneratorInterface
     */
    private $identityService;

    /**
     * @var UrlInterface
     */
    private $urlBuilder;

    /**
     * @var UserContextInterface
     */
    private $userContext;

    /**
     * @var \Magento\Framework\Json\Helper\Data
     */
    private $jsonHelper;

    /**
     * ScheduleBulk constructor.
     *
     * @param BulkManagementInterface $bulkManagement
     * @param OperationInterfaceFactory $operartionFactory
     * @param IdentityGeneratorInterface $identityService
     * @param UserContextInterface $userContextInterface
     * @param UrlInterface $urlBuilder
     */
    public function __construct(
        BulkManagementInterface $bulkManagement,
        OperationInterfaceFactory $operartionFactory,
        IdentityGeneratorInterface $identityService,
        UserContextInterface $userContextInterface,
        UrlInterface $urlBuilder,
        \Magento\Framework\Json\Helper\Data $jsonHelper
    ) {
        $this->userContext = $userContextInterface;
        $this->bulkManagement = $bulkManagement;
        $this->operationFactory = $operartionFactory;
        $this->identityService = $identityService;
        $this->urlBuilder = $urlBuilder;
        $this->jsonHelper = $jsonHelper;

    }

    /**
     * Schedule new bulk operation
     *
     * @param array $operationData
     * @throws \Magento\Framework\Exception\LocalizedException
     * @return void
     */
    public function execute($operationData)
    {
        $operationCount = count($operationData);
        if ($operationCount > 0) {
            $bulkUuid = $this->identityService->generateId();
            $bulkDescription = 'Specify here your bulk description';

            $operations = [];
            foreach ($operationData as $operation) {

                $serializedData = [
                    //this data will be displayed in Failed item grid in ID column
                    'entity_id' => $operation['entity_id'],
                    //add here logic to add url for your entity(this link will be displayed in the Failed item grid)
                    'entity_link' => $this->urlBuilder->getUrl('your_url'),
                    //this data will be displayed in Failed item grid in the column "Meta Info"
                    'meta_information' => 'Specify here meta information for your entity',//this data will be displayed in Failed item grid in the column "Meta Info"
                ];
                $data = [
                    'data' => [
                        'bulk_uuid' => $bulkUuid,
                        //topic name must be equal to data specified in the queue.xml
                        'topic_name' => '%your_topic name%',
                        'serialized_data' => $this->jsonHelper->jsonEncode($serializedData),
                        'status' => OperationInterface::STATUS_TYPE_OPEN,
                    ]
                ];

                /** @var OperationInterface $operation */
                $operation = $this->operationFactory->create($data);
                $operations[] = $operation;

            }
            $userId = $this->userContext->getUserId();
            $result = $this->bulkManagement->scheduleBulk($bulkUuid, $operations, $bulkDescription, $userId);
            if (!$result) {
                throw new \Magento\Framework\Exception\LocalizedException(
                    __('Something went wrong while processing the request.')
                );
            }
        }
    }
}
{% endhighlight %}
{% endcollapsible %}

### Create a consumer

A consumer class receives messages from the message queue and changes the status after it is processed. The following example defines a consumer that handles price update bulk operations.

{% collapsible Code sample: %}
{% highlight php startinline=true %}

<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\SharedCatalog\Model\ResourceModel\ProductItem\Price;

use Magento\Framework\Bulk\BulkManagementInterface;
use Magento\BulkOperations\Api\Data\OperationInterface;
use Magento\BulkOperations\Api\Data\OperationInterfaceFactory;
use Magento\Framework\DB\Adapter\ConnectionException;
use Magento\Framework\DB\Adapter\DeadlockException;
use Magento\Framework\DB\Adapter\LockWaitException;

/**
 * Class Consumer
 */
class Consumer
{
    /**
     * @var \Psr\Log\LoggerInterface
     */
    private $logger;

    /**
     * @var \Magento\Framework\Json\Helper\Data
     */
    private $jsonHelper;

    /**
     * @var \Magento\BulkOperations\Model\OperationManagement
     */
    private $operationManagement;

    /**
     * Consumer constructor.
     *
     * @param \Psr\Log\LoggerInterface $logger
     * @param \Magento\Framework\Json\Helper\Data $jsonHelper
     */
    public function __construct(
        \Psr\Log\LoggerInterface $logger,
        \Magento\Framework\Json\Helper\Data $jsonHelper,
        \Magento\Framework\Bulk\OperationManagementInterface $operationManagement
    ) {
        $this->logger = $logger;
        $this->jsonHelper = $jsonHelper;
        $this->operationManagement = $operationManagement;
    }

    /**
     * Processing operation for update price
     *
     * @param \Magento\BulkOperations\Api\Data\OperationInterface $operation
     * @return void
     */
    public function processOperation(\Magento\BulkOperations\Api\Data\OperationInterface $operation)
    {
        $status = OperationInterface::STATUS_TYPE_COMPLETE;
        $errorCode = null;
        $message = null;
        $serializedData = $operation->getSerializedData();
        $unserializedData = $this->jsonHelper->jsonDecode($serializedData);
        try {
            //add here your own logic for async opertions
        } catch (\Zend_Db_Adapter_Exception  $e) {
            //here sample how to process exceptions if they occured
            $this->logger->critical($e->getMessage());
            //you can add here your own type of exception when operation can be retried
            if (
                $e instanceof LockWaitException
                || $e instanceof DeadlockException
                || $e instanceof ConnectionException
            ) {
                $status = OperationInterface::STATUS_TYPE_RETRIABLY_FAILED;
                $errorCode = $e->getCode();
                $message = __($e->getMessage());
            } else {
                $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
                $errorCode = $e->getCode();
                $message = __('Sorry, something went wrong during product prices update. Please see log for details.');
            }

        } catch (\Magento\Framework\Exception\NoSuchEntityException $e) {
            $this->logger->critical($e->getMessage());
            $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
            $errorCode = $e->getCode();

            $message = $e->getMessage();
            unset($unserializedData['entity_link']);
            $serializedData = $this->jsonHelper->jsonEncode($unserializedData);
        } catch (\Magento\Framework\Exception\LocalizedException $e) {
            $this->logger->critical($e->getMessage());
            $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
            $errorCode = $e->getCode();
            $message = $e->getMessage();
        } catch (\Exception $e) {
            $this->logger->critical($e->getMessage());
            $status = OperationInterface::STATUS_TYPE_NOT_RETRIABLY_FAILED;
            $errorCode = $e->getCode();
            $message = __('Sorry, something went wrong during product prices update. Please see log for details.');
        }

        //update operation status based on result performing operation(it was successfully executed or exception occurs
        $this->operationManagement->changeOperationStatus(
            $operation->getId(),
            $status,
            $errorCode,
            $message,
            $serializedData
        );
    }
}

{% endhighlight %}
{% endcollapsible %}

### Configure message queues

The message queue topology must be configured to implement bulk operations. Create or edit the following files in the module's `app/code/<vendor>/<module_name>/etc` directory.

*_NOTE TO REVIEWER: I deleted references to queue.xml because it is deprecated for 2.2_*

* `communication.xml`
* `di.xml`
* `queue_consumer.xml`
* `queue_publisher.xml`
* `queue_topology.xml`

For more information about the `di.xml` file, see [Dependency Injection]({{page.baseurl}}extension-dev-guide/depend-inj.html). For information the other files, see []({{page.baseurl}}/config-guide/mq/config-mq.html).

#### Create `communication.xml`

The `communication.xml` file defines aspects of the message queue system that apply to all topics for the module. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Communication/etc/communication.xsd">
    <topic name="<your_topic_name>" request="Magento\BulkOperations\Api\Data\OperationInterface">
        <handler name="<your_handler_name>" type="<Consumer_Class>" method="<consumer_method>" />
    </topic>
</config>
{% endhighlight %}

#### Create `di.xml`

Add the following type to the module's `di.xml` file.

{% highlight xml %}
<type name="Magento\Framework\MessageQueue\MergerFactory">
    <arguments>
        <argument name="mergers" xsi:type="array">
            <item name="<your_consumer_name>" xsi:type="string"><Merger_Class></item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

#### Create `queue_consumer.xml`

The `queue_consumer.xml` file defines the relationship between a queue and its consumer. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/consumer.xsd">
    <consumer name="<consumer_name>" queue="<queue_name>" connection="amqp" consumerInstance="Magento\Framework\MessageQueue\BatchConsumer" handler="<Consumer_Class>::<Consumer_method>"/>
</config>
{% endhighlight %}

#### Create `queue_publisher.xml`

The `queue_publisher.xml` file defines the exchange where a topic is published. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/consumer.xsd">
    <consumer name="<consumer_name>" queue="<queue_name>" connection="amqp" consumerInstance="Magento\Framework\MessageQueue\BatchConsumer" handler="Consumer_Class::Consumer_method"/>
</config>
{% endhighlight %}

#### Create `queue_topology.xml`
The `queuetopology.xml` file defines the message routing rules and declares queues and exchanges. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/topology.xsd">
    <exchange name="magento" type="topic" connection="amqp">
        <binding id="defaultBinding" topic="" destinationType="queue" destination="<queue_name>"/>
    </exchange>
</config>
{% endhighlight %}

#### Related Topics

* [RabbitMQ Overview]( {{page.baseurl}}config-guide/mq/rabbitmq-overview.html)
* [Bulk Operations]({{page.baseurl}}extension-dev-guide/bulk-operations.html)
