---
group: extension-dev-guide
subgroup: 99_Module Development
title: Adding extension attributes to entity
menu_title: Adding extension attributes to entity
menu_order: 20
version: 2.1
---

Third party developers cannot change {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} Data interface in the Magento Core, so the one way to affect interfaces
using configuration is to add {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} attributes.

<div class="bs-callout bs-callout-info" id="other-component-types">
  <p>We will demonstrate this on Product entity, Product Repository and {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}Web Api{% endglossarytooltip %} example. </p>
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

{% highlight php inline=true %}
public function afterGet
(
    \Magento\Catalog\Api\ProductRepositoryInterface $subject,
    \Magento\Catalog\Api\Data\ProductInterface $entity
) {
    $ourCustomData = $this->customDataRepository->get($entity->getId());

    $extensionAttributes = $entity->getExtensionAttributes(); /** get current extension attributes from entity **/
    $extensionAttributes->setOurCustomData($ourCustomData);
    $entity->setExtensionAttributes($extensionAttributes);

    return $entity;
}
{% endhighlight %}

It is the easiest way to add custom attributes. Because we need to know if {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} already has extension attributes.
Also we need to check whether we already has our {% glossarytooltip 45013f4a-21a9-4010-8166-e3bd52d56df3 %}extension attribute{% endglossarytooltip %}.

AfterGetList is similar to afterGet.

Likewise afterSave plugin should take data from entity and do some manipulations:

{% highlight php inline=true %}
public function afterSave
(
    \Magento\Catalog\Api\ProductRepositoryInterface $subject,
    \Magento\Catalog\Api\Data\ProductInterface $entity
) {
    $extensionAttributes = $entity->getExtensionAttributes(); /** get current extension attributes from entity **/
    $ourCustomData = $extensionAttributes->getOurCustomData();
    $this->customDataRepository->save($ourCustomData);

    return $entity;
}
{% endhighlight %}

But if some entity doesn't have implementation to fetch extension attributes, we will always retrieve `null` and each time when we fetch extension attributes we need to check if they are `null` - need to create them. To avoid such code duplication, we need to create `afterGet` plugin for our entity with extension attributes.

Let's assume the product entity doesn't have any implementation of extension attributes, so our plugin might looks like this:

``` php?start_inline=1

use Magento\Catalog\Api\Data\ProductExtensionInterface;
use Magento\Catalog\Api\Data\ProductInterface;
use Magento\Catalog\Api\Data\ProductExtensionFactory;

class ProductAttributesLoad
{
    /**
     * @var ProductExtensionFactory
     */
    private $extensionFactory;

    /**
     * @param ProductExtensionFactory $extensionFactory
     */
    public function __construct(ProductExtensionFactory $extensionFactory)
    {
        $this->extensionFactory = $extensionFactory;
    }

    /**
     * Loads product entity extension attributes
     *
     * @param ProductInterface $entity
     * @param ProductExtensionInterface|null $extension
     * @return ProductExtensionInterface
     */
    public function afterGetExtensionAttributes(
        ProductInterface $entity,
        ProductExtensionInterface $extension = null
    ) {
        if ($extension === null) {
            $extension = $this->extensionFactory->create();
        }

        return $extension;
    }
}

```

And now need to bind our plugin to `ProductInterface`:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Catalog\Api\Data\ProductInterface">
        <plugin name="ProductExtensionAttributeOperations" type="Magento\Catalog\Plugin\ProductAttributesLoad"/>
    </type>
</config>
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
{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="our_custom_data" type="Magento\SomeModule\Api\Data\CustomDataInterface[]" />
    </extension_attributes>
</config>
{% endhighlight %}

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

<a href="https://github.com/magento/magento2-samples/tree/master/sample-external-links">Sample module on github</a>
