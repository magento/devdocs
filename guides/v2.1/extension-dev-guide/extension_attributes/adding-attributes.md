---
group: php-developer-guide
subgroup: 99_Module Development
title: Adding extension attributes to entity
menu_title: Adding extension attributes to entity
menu_order: 20
---

Third-party developers cannot change the {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} Data interfaces defined in the Magento Core code.  However, most of these entities have a feature called {% glossarytooltip 45013f4a-21a9-4010-8166-e3bd52d56df3 %}extension attributes{% endglossarytooltip %}.  Check the interface for the methods `getExtensionAttributes()` and `setExtensionAttributes()` to determine if they are available for the entity.

{: .bs-callout .bs-callout-info }
We will demonstrate how to add extension attributes to a Product entity, Product Repository and {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}Web Api{% endglossarytooltip %} example.

In order to retreive a product or a list of products from the Magento API, you need to make an API request to the appropriate service (the Product Repository in this case).  
The response to these requests will return objects with the following structure:

### Product response:

``` xml
<product>
    <id>1</id>
    <sku>some-sku</sku>
    <custom_attributes><!-- Custom Attributes Data --></custom_attributes>
    <extension_attributes><!-- Here should we add extension attributes data --></extension_attributes>
</product>
```

### Product list response:

``` xml
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
```

## Add plugin to product repository

In order to add extension attributes, we need to use an after plugin on Product Repository.
The plugin should follow the methods: save, get, getList.

We can add scalar and non-scalar extension attributes.
Scalar is a simple attribute.
Non-scalar attributes can be represented by Data Object.

``` php
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
```

This is the simplest way to add extension attributes without causing a conflict:  
- We get the {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity's{% endglossarytooltip %} extension attributes, if they are already set.
 - We add our {% glossarytooltip 45013f4a-21a9-4010-8166-e3bd52d56df3 %}extension attribute{% endglossarytooltip %}.
- Finally set the extension attribute on the entity with ours included.  

AfterGetList is similar to afterGet.

Likewise afterSave plugin should take data from entity and do some manipulations before returning it:

``` php
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
```

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

``` xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Catalog\Api\Data\ProductInterface">
        <plugin name="ProductExtensionAttributeOperations" type="Magento\Catalog\Plugin\ProductAttributesLoad"/>
    </type>
</config>
```

## Extension Attributes Configuration:

For scalar attributes we can use next configuration:
``` xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="first_custom_attribute" type="Magento\SomeModule\Api\Data\CustomDataInterface" />
        <attribute code="second_custom_attribute" type="Magento\SomeModule\Api\Data\CustomDataInterface" />
    </extension_attributes>
</config>
```

For non-scalar attributes:
``` xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Catalog\Api\Data\ProductInterface">
        <attribute code="our_custom_data" type="Magento\SomeModule\Api\Data\CustomDataInterface[]" />
    </extension_attributes>
</config>
```

In first case we will get the next result:

``` xml
<product>
    <id>1</id>
    <sku>some-sku</sku>
    <custom_attributes><!-- Custom Attributes Data --></custom_attributes>
    <extension_attributes>
        <first_custom_attribute>1</first_custom_attribute>
        <second_custom_attribute>2</second_custom_attribute>
    </extension_attributes>
</product>
```

In second one:
``` xml
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
```

[Sample module on GitHub](https://github.com/magento/magento2-samples/tree/master/sample-external-links)
