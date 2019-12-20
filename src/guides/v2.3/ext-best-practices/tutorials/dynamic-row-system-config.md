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
        <section id="general" type="text">
            <group id="quantity_ranges" translate="label" type="text" sortOrder="10" showInDefault="1" showInWebsite="1" showInStore="1">
                <label>Quantity Ranges</label>
                <field id="ranges" translate="label" sortOrder="5" showInDefault="1" showInWebsite="1" showInStore="1">
                    <label>Ranges</label>
                    <frontend_model>Vendor\Module\Block\Adminhtml\Form\Field\Ranges</frontend_model>
                    <backend_model>Magento\Config\Model\Config\Backend\Serialized\ArraySerialized</backend_model>
                </field>
            </group>
        </section>
    </system>
</config>
```

This code adds a new system configuration in **STORES** > Settings > **Configuration** > GENERAL > **General** > **Quantity Ranges**.

## Step 2: Create the block class to describe custom field columns

> `File: app/code/Vendor/Module/Block/Adminhtml/Form/Field/Ranges.php`

```php
<?php
namespace Vendor\Module\Block\Adminhtml\Form\Field;

use Magento\Config\Block\System\Config\Form\Field\FieldArray\AbstractFieldArray;
use Magento\Framework\DataObject;
use Magento\Framework\Exception\LocalizedException;
use Vendor\Module\Block\Adminhtml\Form\Field\TaxColumn;

/**
 * Class Ranges
 */
class Ranges extends AbstractFieldArray
{
    /**
     * @var TaxColumn
     */
    private $taxRenderer;

    /**
     * Prepare rendering the new field by adding all the needed columns
     */
    protected function _prepareToRender()
    {
        $this->addColumn('from_qty', ['label' => __('From'), 'class' => 'required-entry']);
        $this->addColumn('to_qty', ['label' => __('To'), 'class' => 'required-entry']);
        $this->addColumn('price', ['label' => __('Price'), 'class' => 'required-entry']);
        $this->addColumn('tax', [
            'label' => __('Tax'),
            'renderer' => $this->getTaxRenderer()
        ]);
        $this->_addAfter = false;
        $this->_addButtonLabel = __('Add');
    }

    /**
     * Prepare existing row data object
     *
     * @param DataObject $row
     * @throws LocalizedException
     */
    protected function _prepareArrayRow(DataObject $row): void
    {
        $options = [];

        $tax = $row->getTax();
        if ($tax !== null) {
            $options['option_' . $this->getTaxRenderer()->calcOptionHash($tax)] = 'selected="selected"';
        }

        $row->setData('option_extra_attrs', $options);
    }

    /**
     * @return TaxColumn
     * @throws LocalizedException
     */
    private function getTaxRenderer()
    {
        if (!$this->taxRenderer) {
            $this->taxRenderer = $this->getLayout()->createBlock(
                TaxColumn::class,
                '',
                ['data' => ['is_render_to_js_template' => true]]
            );
        }
        return $this->taxRenderer;
    }
}
```

This block prepares the desired columns for inclusion in the new configuration.

## Step 3: Create the block class to describe a column with drop-down input

> `File: app/code/Vendor/Module/Block/Adminhtml/Form/Field/TaxColumn.php`

```php
<?php
declare(strict_types=1);

namespace Vendor\Module\Block\Adminhtml\Form\Field;

use Magento\Framework\View\Element\Html\Select;

class TaxColumn extends Select
{
    /**
     * Set "name" for <select> element
     *
     * @param string $value
     * @return $this
     */
    public function setInputName($value)
    {
        return $this->setName($value);
    }

    /**
     * Set "id" for <select> element
     *
     * @param $value
     * @return $this
     */
    public function setInputId($value)
    {
        return $this->setId($value);
    }

    /**
     * Render block HTML
     *
     * @return string
     */
    public function _toHtml(): string
    {
        if (!$this->getOptions()) {
            $this->setOptions($this->getSourceOptions());
        }
        return parent::_toHtml();
    }

    private function getSourceOptions(): array
    {
        return [
            ['label' => 'Yes', 'value' => '1'],
            ['label' => 'No', 'value' => '0'],
        ];
    }
}
```

This block sets values for the drop-down option.

## Step 4: Clean cache

Clean the Magento cache with the following command:

```bash
bin/magento cache:clean
```
and clean the config with this command:

```bash
bin/magento cache:clean config
```

## Result

The result is a new dynamic system row field in the Admin panel.

![Dynamic Rows System Config]({{ site.baseurl }}/common/images/ext-best-practices/dynamic-rows-config-result.png)

[0]: {{ site.mage2bloburl }}/2.1/app/code/Magento/Config/Block/System/Config/Form/Field/FieldArray/AbstractFieldArray.php
