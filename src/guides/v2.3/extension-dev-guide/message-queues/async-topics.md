---
group: php-developer-guide
title: Topics in Asynchronous API
contributor_name: comwrap GmbH
contributor_link: https://www.comwrap.com
functional_areas:
  - Services
---

Magento Queuing system is using topics exchange for managing messages. More detailed information about topics can be found [here](https://www.rabbitmq.com/tutorials/tutorial-five-python.html){:target="_blank"}.

In Magento, topics are usually defined in communication.xml configuration files. See [Configure message queues]({{ page.baseurl }}/guides/v2.4/extension-dev-guide/message-queues/config-mq.html#communicationxml) https://devdocs.magento.com/guides/v2.4/extension-dev-guide/message-queues/config-mq.html#communicationxml

### Generating of communication.xml

`communication.xml` for asynchronous api, is pre-generated automatically by `WebapiAsync` module. This module also automatically generating topic names for asynchronous processes. File generation processed by `\Magento\WebapiAsync\Code\Generator\Config\RemoteServiceReader\Communication` class, which implements `\Magento\Framework\Config\ReaderInterface` and injected into `\Magento\Framework\Communication\Config\CompositeReader` constructor argument of main `di.xml` file.

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

Sort order is set to 0 and this allow developers to change some aspect of generated configuration in following config readers such as `communication.xml`, `env.php`.

`\Magento\Framework\Communication\Config\CompositeReader::read()` collects configs from defined readers and merge config from them to one config.

Because generation of topics config is based on schema type, generated `<topic>` xml, by default will be returned with `"sync"=true` and `response` based on service response definition. So `WebapiAsync` module will change those settings to `"sync"=false` and `response` set to null. This changes will allow to execute topics in asynchronous mode.

### Topics generation

Asynchronous and Bulk APIs were built on top of standard Rest API. Topics for messages processing of the Asynchronous and Bulk Apis are generated automatically, together with `communication.xml` schema. This is done by `\Magento\WebapiAsync\Model\Config::getServices()`. Current method is responsible for retrieving all service contracts defined in `webapi.xml` files and generate topic names for corresponding asynchronous requests.

`generateTopicNameFromService($serviceInterface, $serviceMethod, $httpMethod)` is responsible for generating topic name based on Service Contract interface, Service Contract method and http method.

As example, from route defined in `webapi.xml`: 

```xml
<route url="/V1/products" method="POST">
    <service class="Magento\Catalog\Api\ProductRepositoryInterface" method="save"/>
    <resources>
        <resource ref="Magento_Catalog::products" />
    </resources>
</route>
```

will be generated the following topic name: 

`async.magento.catalog.api.productrepositoryinterface.save.post`.

It consists of following parts:

* "async." as a prefix
* lower cased service class
* lower cased service method
* lover cased http method

Unfortunately there are no easy way to receive list of all generated topic names, but knowing this pattern developers can easily find required topic name and use it for executing of service contracts in asynchronous manner.

