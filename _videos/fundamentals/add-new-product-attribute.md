---
youtube_id: cM_9RkWFqqM
duration: "7:36"
group: "Fundamentals of Magento 2 Development"
title: "How to Add a New Product Attribute"
thumbnail: "fundamentals/thumbs/add-attribute.png"
menu_order: 1
---

Adding a product attribute is one of the most popular operations in both Magento 1 and Magento 2.
Attributes are a powerful way to solve many practical tasks related to a product.

This is quite a broad topic, but in this video we will discuss the simple process of adding a dropdown-type attribute to a product.

For this exercise, assume that the sample data set is installed.

*  We will add an attribute called clothing_material with the possible values: Cotton, Leather, Silk, Denim, Fur, and Wool.
*  We will make this attribute visible on the product view page, in bold text.
*  We will assign it to the Default attribute set and add a restriction that any “bottom” clothing, like slacks, cannot be the material Fur.

We will need to take the following steps to add the new attribute:

1. Create a new module.
1. Add an InstallData script.
1. Add a source model.
1. Add a backend model.
1. Add a frontend model.
1. Execute the InstallData script and verify that it works.

Let’s go through each step.

## Step 1: Create a new module

As Magento is modular based, we start the process by creating a new module called `Learning_ClothingMaterial`.

```bash
cd <magento2_root>/app/code
```

```bash
mkdir Learning
```

```bash
mkdir Learning/ClothingMaterial
```

Now, create two files:

`etc/module.xml`

{% collapsible Show code %}

```xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
  <module name="Learning_ClothingMaterial" setup_version="0.0.1">
  </module>
</config>
```

{% endcollapsible %}

`registration.php`

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Learning_ClothingMaterial',
    __DIR__
);
```

{% endcollapsible %}

## Step 2 Create an InstallData script

Next, we need to create the InstallData script.
Because adding an attribute technically adds records into several tables, such as `eav_attribute` and `catalog_eav_attribute,` this is data manipulation, not a schema change.
Therefore we use InstallData instead of InstallSchema.

Create the file `app/code/Learning/ClothingMaterial/Setup/InstallData.php`:

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Learning\ClothingMaterial\Setup;

use Magento\Framework\Setup\InstallDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

/**
* @codeCoverageIgnore
*/
class InstallData implements InstallDataInterface
{
    /**
     * Eav setup factory
     * @var EavSetupFactory
     */
    private $eavSetupFactory;

    /**
     * Init
     * @param EavSetupFactory $eavSetupFactory
     */
    public function __construct(\Magento\Eav\Setup\EavSetupFactory $eavSetupFactory)
    {
        $this->eavSetupFactory = $eavSetupFactory;
    }

    /**
     * {@inheritdoc}
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     * @SuppressWarnings(PHPMD.ExcessiveMethodLength)
     * @SuppressWarnings(PHPMD.NPathComplexity)
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $eavSetup = $this->eavSetupFactory->create();
        $eavSetup->addAttribute(
            \Magento\Catalog\Model\Product::ENTITY,
            'clothing_material',
            [
                'group' => 'General',
                'type' => 'varchar',
                'label' => 'Clothing Material',
                'input' => 'select',
                'source' => 'Learning\ClothingMaterial\Model\Attribute\Source\Material',
                'frontend' => 'Learning\ClothingMaterial\Model\Attribute\Frontend\Material',
                'backend' => 'Learning\ClothingMaterial\Model\Attribute\Backend\Material',
                'required' => false,
                'sort_order' => 50,
                'global' => \Magento\Eav\Model\Entity\Attribute\ScopedAttributeInterface::SCOPE_GLOBAL,
                'is_used_in_grid' => false,
                'is_visible_in_grid' => false,
                'is_filterable_in_grid' => false,
                'visible' => true,
                'is_html_allowed_on_front' => true,
                'visible_on_front' => true
            ]
        );
    }
}
```

{% endcollapsible %}

Let’s take a minute to look at the code.

First of all, we need to use a special setup object, not the one that comes as a parameter.
This is because Catalog is an EAV entity, so to add an attribute, we have to use eavSetup rather than standard one.
This holds true for any EAV entity in Magento 2 (category, product, customer, and so on).

This is why we added eavSetupFactory in a constructor.

For the `install()` method, all we have to do is call the `addAttribute()` method with 3 parameters: entity type, attribute code, and properties.

Those properties define how an attribute behaves.
A full list of properties can be seen in the `catalog_eav_attribute` and `eav_attribute` tables.
Note that there is a mapping between the fields in those tables and the properties in the `addAttribute()` method.

To see all the mappings, you should look at the `\Magento\Catalog\Model\ResourceModel\Setup\PropertyMapper` class.

For now, we’ll just quickly go through most important ones:

*  **group:** Means that we add an attribute to the attribute group “General”, which is present in all attribute sets.
*  **type:** varchar means that the values will be stored in the catalog_eav_varchar table.
*  **label:** A label of the attribute (that is, how it will be rendered in the backend and on the frontend).
*  **source/frontend/backend:** Special classes associated with the attribute:
   *  **source model:** provides a list of options
   *  **frontend:** defines how it should be rendered on the frontend
   *  **backend:** allows you to perform certain actions when an attribute is loaded or saved. In our example, it will be validation.
*  **Global:** defines the scope of its values (global, website, or store)
*  **visible_on_front:** A flag that defines whether an attribute should be shown on the “More Information” tab on the frontend
*  **is_html_allowed_on_front:** Defines whether an attribute value may contain HTML

## Step 3: Add a source model

Next, we need to create the source model:

`app/code/Learning/ClothingMaterial/Model/Attribute/Source/Material.php`

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Learning\ClothingMaterial\Model\Attribute\Source;

class Material extends \Magento\Eav\Model\Entity\Attribute\Source\AbstractSource
{
    /**
     * Get all options
     * @return array
     */
    public function getAllOptions()
    {
        if (!$this->_options) {
            $this->_options = [
                ['label' => __('Cotton'), 'value' => 'cotton'],
                ['label' => __('Leather'), 'value' => 'leather'],
                ['label' => __('Silk'), 'value' => 'silk'],
                ['label' => __('Denim'), 'value' => 'denim'],
                ['label' => __('Fur'), 'value' => 'fur'],
                ['label' => __('Wool'), 'value' => 'wool'],
            ];
        }
        return $this->_options;
    }
}
```

{% endcollapsible %}

As the name implies, the `getAllOptions` method provides a list of all available options.

## Step 4: Add a backend model

Now we will create a backend model:

`app/code/Learning/ClothingMaterial/Model/Attribute/Backend/Material.php`

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Learning\ClothingMaterial\Model\Attribute\Backend;

class Material extends \Magento\Eav\Model\Entity\Attribute\Backend\AbstractBackend
{
    /**
     * Validate
     * @param \Magento\Catalog\Model\Product $object
     * @throws \Magento\Framework\Exception\LocalizedException
     * @return bool
     */
    public function validate($object)
    {
        $value = $object->getData($this->getAttribute()->getAttributeCode());
        if ( ($object->getAttributeSetId() == 10) && ($value == 'wool')) {
            throw new \Magento\Framework\Exception\LocalizedException(
                __('Bottom can not be wool.')
            );
        }
        return true;
    }
}
```

{% endcollapsible %}

In our example, we implement only the `validate()` method.

The backend model may have `beforeSave`, `afterSave`, and `afterLoad` methods that allow the execution of some code at the moment an attribute is saved or loaded.
The backend model is what makes attribute management a really powerful method of customization.

Note that we hardcoded `attributeSetId` here for the sake of time.
In other cases, it could be different.
Make sure to check the `eav_attribute_set` table for the right ID.

## Step 5: Add a frontend model

And finally, we create a frontend model to make our value bold:

{% collapsible Show code %}

```php?start_inline=1
<?php
namespace Learning\ClothingMaterial\Model\Attribute\Frontend;

class Material extends \Magento\Eav\Model\Entity\Attribute\Frontend\AbstractFrontend
{
    public function getValue(\Magento\Framework\DataObject $object)
    {
        $value = $object->getData($this->getAttribute()->getAttributeCode());
        return "<b>$value</b>";
    }
}
```

{% endcollapsible %}

As with the backend model, this is also a very simple class.

## Step 6: Execute the InstallData script and verify that it works

Now we can run our code and check the results:

```bash
cd <magento2_root>
```

```bash
php bin/magento setup:upgrade
```

After you run this, the new attribute should have been added to the database.
You can check the `eav_attribute` and `catalog_eav_attribute` tables to verify that the attribute and its properties are there.
We see ClothingMaterial down here, with the primary key of 155, and its corresponding entry in `catalog_eav_attribute,` with the primary key being 155.

Now, let’s go to the backend, open any configurable product, and we should see that clothing material dropdown.
We’ll set our filters to be a configurable product with the attribute set of “bottom”.

We’ll select the first item. First, we’ll set the clothing material to Fur and attempt to save our attribute. We see that our
backend model has executed successfully, so now we’ll set it to Wool and save it.

Having saved the product, we’ll now move to the frontend.
It should be visible and in bold text.
