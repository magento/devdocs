---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Adding extension attributes to entity
menu_title: Adding extension attributes to entity
menu_order: 20
version: 2.0
github_link: extension-dev-guide/extension_attributes/adding-attributes.md
---

Third party developers cannot change API Data interface in the Magento Core, so the one way to affect interfaces
using configuration is to add extension attributes.

<div class="bs-callout bs-callout-info" id="other-component-types">
  <p>We will demonstrate this on Product entity, Product Repository and Web Api example. </p>
</div>


In order to get product or list of products by Magento API you need to do API request to appropriate service (Product Repository in our case).
In Response we got object with next structure:

### Product response:

{% highlight xml %}
<product>
    <id>1</id>
    <sku>some-sku</sku>
    <custom_attributes><!-- Custom Attributes Data --></custom_attributes>
    <extension_attributes><!-- Here should we add extension attributes data --></extension_attributes>
</product>
{% endhighlight %}

### Product list response:

{% highlight xml %}
<products>
    <item>
        <id>1</id>
        <sku>some-sku</sku>
        <custom_attributes><!-- Custom Attributes Data --></custom_attributes>
        <extension_attributes><!-- Here should we add extension attributes data --></extension_attributes>
    </item>
    <item>
        <id>2</id>
        <sku>some-sku-2</sku>
        <custom_attributes><!-- Custom Attributes Data --></custom_attributes>
        <extension_attributes><!-- Here should we add extension attributes data --></extension_attributes>
    </item>
</products>
{% endhighlight %}

## Add plugin to product repository

In order to add attributes, we need to use after plugin on Product Repository.
Plugin should listen next methods: save, get, getList.

We can add scalar and non-scalar extension attributes.

<div class="bs-callout bs-callout-info" id="other-component-types">
  <p>Scalar is simple attribute. </p>
  <p>Non-scalar attribute can be represented by Data Object. </p>
</div>

{% highlight php %}
    <?php
       public function afterGet
        (
            \Magento\Catalog\Api\ProductRepositoryInterface $subject,
            \Magento\Catalog\Api\Data\ProductInterface $entity
        ) {
            $ourCustomData = $this->customDataRepository->get($entity->getId());

            $extensionAttributes = $entity->getExtensionAttributes(); /** get current extension attributes from entity **/
            $extensionAttributes->setOurCustomData($ourCusomData);
            $entity->setExtensionAttributes($extensionAttributes);

            return $entity;
        }

    ?>
{% endhighlight %}

It is the easiest way to add custom attributes. Because we need to know if entity already has extension attributes.
Also we need to check whether we already has our extension attribute.

AfterGetList is similar to afterGet.

Likewise afterSave plugin should take data from entity and do some manipulations:

{% highlight php %}
    <?php
           public function afterSave
            (
                \Magento\Catalog\Api\ProductRepositoryInterface $subject,
                \Magento\Catalog\Api\Data\ProductInterface $entity
            ) {
                $extensionAttributes = $entity->getExtensionAttributes(); /** get current extension attributes from entity **/
                $ourCustomData = $extensionAttributes->getOurCustomData();
                $this-customDataRepository->save($ourCustomData);

                return $entity;
            }

        ?>
{% endhighlight %}

## Extension Attributes Configuration:

For scalar attributes we can use next configuration:
{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="first_custom_attribute" type="Magento\SomeModule\Api\Data\CustomDataInterface" />
        <attribute code="second_custom_attribute" type="Magento\SomeModule\Api\Data\CustomDataInterface" />
    </extension_attributes>
</config>
{% endhighlight %}

For non-scalar attributes:
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="our_custom_data" type="Magento\SomeModule\Api\Data\CustomDataInterface[]" />
    </extension_attributes>
</config>

In first case we will get the next result:

{% highlight xml %}
<product>
    <id>1</id>
    <sku>some-sku</sku>
    <custom_attributes><!-- Custom Attributes Data --></custom_attributes>
    <extension_attributes>
        <first_custom_attribute>1</first_custom_attribute>
        <second_custom_attribute>2</second_custom_attribute>
    </extension_attributes>
</product>
{% endhighlight %}

In second one:
{% highlight xml %}
<product>
    <id>1</id>
    <sku>some-sku</sku>
    <custom_attributes><!-- Custom Attributes Data --></custom_attributes>
    <extension_attributes>
        <our_custom_data>
                <first_custom_attribute>1</first_custom_attribute>
                <second_custom_attribute>2</second_custom_attribute>
        </our_custom_data>
    </extension_attributes>
</product>
{% endhighlight %}

<a href="https://github.com/magento-south/magento2-samples/tree/MAGETWO-55017/sample-external-links">Sample module on github</a>
