---
group: php-developer-guide
title: Topics in Asynchronous API
contributor_name: comwrap GmbH
contributor_link: https://www.comwrap.com
functional_areas:
  - Services
---

The Magento Queuing system uses 'topic exchange' for managing messages. More information about topics can be found [here](https://www.rabbitmq.com/tutorials/tutorial-five-python.html){:target="_blank"}.

In Magento, topics are usually defined in a `communication.xml` configuration file. See [Configure message queues]({{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html#communicationxml)

### Generating of communication.xml

A `communication.xml` is pre-generated automatically by the `WebapiAsync` module. This module also generates topic names for asynchronous processes. Generated files are processed by the `\Magento\WebapiAsync\Code\Generator\Config\RemoteServiceReader\Communication` class, which implements `\Magento\Framework\Config\ReaderInterface` and is injected into `\Magento\Framework\Communication\Config\CompositeReader` as a constructor argument of the main `di.xml` file.

```xml
<type name="Magento\Framework\Communication\Config\CompositeReader">
    <arguments>
        <argument name="readers" xsi:type="array">
            <item name="asyncServiceReader" xsi:type="array">
                <item name="reader" xsi:type="object">Magento\WebapiAsync\Code\Generator\Config\RemoteServiceReader\Communication</item>
                <item name="sortOrder" xsi:type="string">0</item>
            </item>
            <item name="xmlReader" xsi:type="array"> ... </item>
            ...
        </argument>
    </arguments>
</type>
```

Sort order is set to 0 by default. This allows developers to change some aspects of the generated configuration in configuration readers, such as `communication.xml`, `env.php`.

`\Magento\Framework\Communication\Config\CompositeReader::read()` collects configuration records from defined readers and merges these records into a single configurataion.

Because the generation of thge topics configuration is based on schema type, the generated `<topic>` XML is returned with `"sync"=true`. The `response` attribut is based on the service response definition. So the `WebapiAsync` module changes those settings to `"sync"=false` and `response` is set to null. These changes will allow Magento to execute topics asynchronously.

### Topics generation

Asynchronous and Bulk APIs are built on top of the standard Rest API. Topics for message processing fo asynchronous and bulk APIs are generated automatically, together with the `communication.xml` schema. This is done by `\Magento\WebapiAsync\Model\Config::getServices()`. The current method is responsible for retrieving all service contracts defined in `webapi.xml` files and generates topic names for the corresponding asynchronous requests.

`generateTopicNameFromService($serviceInterface, $serviceMethod, $httpMethod)` is responsible for generating a topic name based on the service contract interface, the service contract method, and the HTTP method.

As example, the route defined in `webapi.xml`:

```xml
<route url="/V1/products" method="POST">
    <service class="Magento\Catalog\Api\ProductRepositoryInterface" method="save"/>
    <resources>
        <resource ref="Magento_Catalog::products" />
    </resources>
</route>
```

will generate the following topic name:

`async.magento.catalog.api.productrepositoryinterface.save.post`.

It consists of following parts:

*  "async." as a prefix
*  lower cased service class
*  lower cased service method
*  lover cased http method

Unfortunately, there are no easy way to get a list of all generated topic names, but knowing this pattern, developers can find the required topic name and use it for executing service contracts in asynchronously.
