---
group: extension-best-practices
subgroup: 02_Extension-Coding
title: Creating a dynamic row system config
menu_title: Creating a dynamic row system config
menu_order: 1010
functional_areas:
  - Standards
---

This tutorial shows you how to add a new dynamic rows system configuration in the [Magento admin](https://glossary.magento.com/magento-admin), by extending the [Magento/Config/Block/System/Config/Form/Field/FieldArray/AbstractFieldArray][0]{:target="_blank"} class.

## Step 1: Add a new system field

> `etc/adminhtml/system.xml`

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Config:etc/system_file.xsd">
    <system>
        <section id="general" translate="label" type="text">
            <group id="quantity_ranges" translate="label" type="text" sortOrder="10" showInDefault="1" showInWebsite="1" showInStore="1">
                <label>Quantity Ranges</label>
                <field id="ranges" translate="label" sortOrder="5" showInDefault="1" showInWebsite="1" showInStore="1">
                    <label>Ranges</label>
                    <frontend_model>[vendor]\[module]\Block\Adminhtml\Form\Field\Ranges</frontend_model>
                    <backend_model>Magento\Config\Model\Config\Backend\Serialized\ArraySerialized</backend_model>
                </field>
            </group>
        </section>
    </system>
</config>
```

This code adds a new system config in **STORES** > Settings > **Configuration** > GENERAL > **General** > **Quantity Ranges**.

## Step 2: Create the front-end model class

> `Block/Adminhtml/Form/Field/Ranges.php`

```php
<?php
namespace Learning\GreetingMessage\Block\Adminhtml\Form\Field;

use Magento\Config\Block\System\Config\Form\Field\FieldArray\AbstractFieldArray;

/**
 * Class Ranges
 */
class Ranges extends AbstractFieldArray
{
    /**
     * Prepare rendering the new field by adding all the needed columns
     */
    protected function _prepareToRender()
    {
        $this->addColumn('from_qty', ['label' => __('From'), 'class' => 'required-entry']);
        $this->addColumn('to_qty', ['label' => __('To'), 'class' => 'required-entry']);
        $this->addColumn('price', ['label' => __('Price'), 'class' => 'required-entry']);
        $this->_addAfter = false;
        $this->_addButtonLabel = __('Add');
    }
}
```

This block prepares the desired columns for inclusion in the new config.

## Result

The result is a new dynamic system row field in the Admin panel.

![Dynamic Rows System Config]({{ site.baseurl }}/common/images/ext-best-practices/dynamic-rows-config-result.png)

[0]: {{ site.mage2bloburl }}/2.1/app/code/Magento/Config/Block/System/Config/Form/Field/FieldArray/AbstractFieldArray.php
