---
title: Extend Catalog Rule Conditions
contributor_name: Ziffity
contributor_link: https://www.ziffity.com/
group: php-developer-guide
---

Catalog price rules can be used to offer products to buyers at a discounted price, based on a set of defined conditions. Catalog price rules do not use coupon codes. The discounts are applied to the final product price in the product listing and the product description page even before adding the product to the shopping cart.
For more information about catalog price rules, refer to [Catalog Rules]({{ site.user_guide_url }}/marketing/price-rules-catalog.html).

## Default Conditions

In the `Conditions` tab, Magento has the following product attributes in the `add conditions` section.

![Catalog Rule Conditions]({{ site.baseurl }}/common/images/conditions-section-v2.png)

## Implementation of Existing Conditions

In the `app/code/Magento/CatalogRule/etc/di.xml` configuration, the following `type` configuration is defined:

```xml
<type name="Magento\CatalogRule\Model\Rule\Condition\Combine">
    <arguments>
        <argument name="data" xsi:type="array">
            <item name="form_name" xsi:type="string">catalog_rule_form</item>
        </argument>
    </arguments>
</type>
<type name="Magento\CatalogRule\Model\Rule\Condition\Product">
    <arguments>
        <argument name="data" xsi:type="array">
            <item name="form_name" xsi:type="string">catalog_rule_form</item>
        </argument>
    </arguments>
</type>
```

In the above configuration, the `catalog_rule_form` is a UI component form. It is defined in `app/code/Magento/CatalogRule/view/adminhtml/ui_component/catalog_rule_form.xml`.

The `Magento\CatalogRule\Model\Rule\Condition\Combine` and the `Magento\CatalogRule\Model\Rule\Condition\Product` classes contain the list of conditions and validations used for creating extended conditions.

The `getNewChildSelectOptions` method in `app/code/Magento/CatalogRule/Model/Rule/Condition/Combine.php` is responsible for the listed conditions. It returns an array of the lists of valid conditions.

Below is the definition of `getNewChildSelectOptions` method:

```php
/**
 * @return array
 */
public function getNewChildSelectOptions()
{
    $productAttributes = $this->_productFactory->create()->loadAttributeOptions()->getAttributeOption();
    $attributes = [];
    foreach ($productAttributes as $code => $label) {
        $attributes[] = [
            'value' => 'Magento\CatalogRule\Model\Rule\Condition\Product|' . $code,
            'label' => $label,
        ];
    }
    $conditions = parent::getNewChildSelectOptions();
    $conditions = array_merge_recursive(
        $conditions,
        [
            [
                'value' => \Magento\CatalogRule\Model\Rule\Condition\Combine::class,
                'label' => __('Conditions Combination'),
            ],
            ['label' => __('Product Attribute'), 'value' => $attributes]
        ]
    );
    return $conditions;
}
```

In the above example, the `$conditions` array will contain the list of valid conditions. Each item in the array will have the `value` and the `label` key with the appropriate values.

The `validate` method from the `app/code/Magento/CatalogRule/Model/Rule/Condition/Product.php` file is responsible for the validations of the conditions defined in the catalog price rules.

Below is the definition of the `validate` method:

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

use Magento\Catalog\Model\Product;
use Magento\Framework\Model\AbstractModel;

/**
 * Validate product attribute value for condition
 *
 * @param Product|AbstractModel $model
 * @return bool
 */
public function validate(AbstractModel $model): bool
{
    $attrCode = $this->getAttribute();
    if ('category_ids' === $attrCode) {
        return parent::validate($model);
    }

    $oldAttrValue = $model->getData($attrCode);
    if ($oldAttrValue === null) {
        if ($this->getOperator() === '<=>') {
            return true;
        }
        return false;
    }

    $this->_setAttributeValue($model);

    $result = $this->validateAttribute($model->getData($attrCode));
    $this->_restoreOldAttrValue($model, $oldAttrValue);

    return (bool)$result;
}
```

In the above example, the `validate` method defines the logic to validate the specified conditions in the catalog price rule.

Note that the `app/code/Magento/CatalogRule/Model/Rule/Condition/Product.php` class extends from the `app/code/Magento/Rule/Model/Condition/Product/AbstractProduct.php` abstract class.

The `app/code/Magento/Rule/Model/Condition/Product/AbstractProduct.php` abstract class extends from the `app/code/Magento/Rule/Model/Condition/AbstractCondition.php` class.

{:.bs-callout-info}
The validation class for the catalog price rule must extend the `Magento\Rule\Model\Condition\AbstractCondition` class.

## Steps to Extend Catalog Rule Conditions

*  Create the `after` plugin for the `getNewChildSelectOptions` method and add your custom condition to it.
*  Add the `type` configuration in `<custom_module_dir>/etc/di.xml`.
*  Create a class that extends the `Magento\Rule\Model\Condition\AbstractCondition` class. Then define the `validate` method with your custom logic.
