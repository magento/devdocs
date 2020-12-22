---
group: extension-best-practices
subgroup: Tutorials
title: Serialized to JSON data upgrade
menu_title: Serialized to JSON data upgrade
menu_order: 1000
---

## Overview

The following tutorial lists the steps needed to create an upgrade script that converts the data stored in the database from the default [PHP](https://glossary.magento.com/php) serialized format to JSON format.

Use this tutorial to create an upgrade script to update your [extension](https://glossary.magento.com/extension) to work with Magento 2.2 and above.

## Before you begin

Identify the data you need to convert to JSON in the database.

Your extension *must* convert data in the following cases:

1. The extension stores serialized data provided by a core [module](https://glossary.magento.com/module) that now uses the JSON format.
1. The extension uses the automatic serializing mechanism provided by the Magento framework (i.e. the extension declares `\Magento\Framework\Model\ResourceModel\Db\AbstractDb::$_serializableFields`).

Your extension will continue working in Magento 2.2 and above in the following cases, but we recommend you switch to using the JSON format for security reasons:

1. The extension stores its own serialized data.
1. The extension is responsible for serializing and unserializing data stored in core tables.

### API Overview

This tutorial uses the following framework [API](https://glossary.magento.com/api) in the following ways:

*  `\Magento\Framework\DB\FieldDataConverter` - This class converts values for a field in a table from one format to another.
   *  `\Magento\Framework\DB\FieldDataConverterFactory` - This class creates instances of the `FieldDataConverter` with the appropriate data converter implementation.
   *  `\Magento\Framework\DB\AggregatedFieldDataConverter` - This is a service class that allows specifying multiple fields from different tables at once. This class creates instances of the `FieldDataConverter` class and accepts a list of `\Magento\Framework\DB\FieldToConvert` value objects with field information. A single `convert()` method call is limited to one DB connection.
*  `\Magento\Framework\DB\DataConverter\DataConverterInterface` - This interface is for classes that convert data between different formats or types of data.
*  `\Magento\Framework\DB\FieldDataConverter` - This class accepts query modifiers for updating specific rows. Here is API for the query modifiers part:
   *  `\Magento\Framework\DB\Select\QueryModifierInterface` - Interface for classes that add a condition to the database query to target specific entries.
   *  `\Magento\Framework\DB\Select\QueryModifierFactory` - This class creates instances of specific implementations of `QueryModifierInterface`.
   *  `\Magento\Framework\DB\Select\InQueryModifier` - An implementation of the `QueryModifierInterface` that adds an IN condition to a query.
   *  `\Magento\Framework\DB\Select\LikeQueryModifier` - An implementation of the `QueryModifierInterface` that adds a LIKE condition to a query.
   *  `\Magento\Framework\DB\Select\CompositeQueryModifier` - An implementation of the `QueryModifierInterface` that allows the application of multiple query modifiers.

  You can create your own query modifier or use any of the ones listed in the `app/etc/di.xml` file.

*  `\Magento\Framework\Module\Manager` - This class checks the status of a module.

## Step 1: Create the basic upgrade script {#step-1}

The upgrade script is what runs during the upgrade step of your extension's [lifecycle][1].
Create the `UpgradeData.php` file in the `Setup` directory inside your extension's root directory.

Inside the file, create the class `UpgradeData` which implements `\Magento\Framework\Setup\UpgradeDataInterface`.

Example upgrade script content:

{% collapsible Show upgrade script content%}

```php
namespace Magento\CustomModule\Setup;

class UpgradeData implements \Magento\Framework\Setup\UpgradeDataInterface
{
    /**
     * @var \Magento\Framework\DB\FieldDataConverterFactory
     */
    private $fieldDataConverterFactory;

    /**
     * @var \Magento\Framework\DB\Select\QueryModifierFactory
     */
    private $queryModifierFactory;

    /**
     * @var \Magento\Framework\DB\Query\Generator
     */
    private $queryGenerator;

    /**
     * Constructor
     *
     * @param \Magento\Framework\DB\FieldDataConverterFactory $fieldDataConverterFactory
     * @param \Magento\Framework\DB\Select\QueryModifierFactory $queryModifierFactory
     * @param \Magento\Framework\DB\Query\Generator $queryGenerator
     */
    public function __construct(
        \Magento\Framework\DB\FieldDataConverterFactory $fieldDataConverterFactory,
        \Magento\Framework\DB\Select\QueryModifierFactory $queryModifierFactory,
        \Magento\Framework\DB\Query\Generator $queryGenerator
    ) {
          $this->fieldDataConverterFactory = $fieldDataConverterFactory;
          $this->queryModifierFactory = $queryModifierFactory;
          $this->queryGenerator = $queryGenerator;
    }

    /**
     * {@inheritdoc}
     */
    public function upgrade(
        \Magento\Framework\Setup\ModuleDataSetupInterface $setup,
        \Magento\Framework\Setup\ModuleContextInterface $context
    ) {
          if (version_compare($context->getVersion(), '2.0.1', '<')) {
              $this->convertSerializedDataToJson($setup);
          }
    }

    /**
     * Upgrade to version 2.0.1, convert data for the sales_order_item.product_options and quote_item_option.value
     * from serialized to JSON format
     *
     * @param \Magento\Framework\Setup\ModuleDataSetupInterface $setup
     * @return void
     */
    private function convertSerializedDataToJson(\Magento\Framework\Setup\ModuleDataSetupInterface $setup)
    {
        // Upgrade logic here
    }
}
```

{% endcollapsible %}

## Step 2: Check that the module exists {#step-2}

Any module can replace another module in Magento.
If your extension stores data in the tables of another module or it serializes or unserializes data stored in core modules, make sure the module exists and is active before executing the upgrade logic.

Use the `\Magento\Framework\Module\Manager` class to check the status of the module your extension depends on.

Add this dependency in the constructor of your upgrade script class:

{% collapsible Show code %}
```php
if ($this->moduleManager->isEnabled('Magento_Sales')) {
    // Upgrade logic goes here
}
```
{% endcollapsible %}

## Step 3: Write the conversion logic {#step-3}

The [conversion](https://glossary.magento.com/conversion) logic in your script depends on how your extension stores the serialized data.

If your extension stores serialized data in different ways, you will need to use different conversion methods.

### Step 3a: Convert data in a column for all rows {#step-3a}

Use a `FieldDataConverterFactory` to create a `FieldDataConverter` instance with the appropriate data converter.

Convert data for a column in a table using:

{% collapsible Show code %}
```php
$fieldDataConverter = $this->fieldDataConverterFactory->create(SerializedToJson::class);

$fieldDataConverter->convert(
    $setup->getConnection(),
    $setup->getTable('my_table'),
    'entity_id',
    'field'
);
```
{% endcollapsible %}

### Step 3b: Convert data in specific rows for a field {#step-3b}

| option_id | code           | value                         |
| --- | --- | --- |
| 1         | `my_option`      | `a:1:{s:3:"foo";s:3:"bar";}`   |
| 2         | `another_option` | &lt;non-serialized string&gt; |
| 3         | `my_option`      | `a:1:{s:3:"foo";s:3:"bar";}`    |

If you need to convert specific rows in the column, you can use a query modifier to update values using a condition.

The following code sample upgrades the data for options in the `value` column in the `quote_item_option` table with the code `my_option`.

{% collapsible Show code %}
```php
$fieldDataConverter = $this->fieldDataConverterFactory->create(
    \Magento\Framework\DB\DataConverter\SerializedToJson::class
);

// Convert data for the option with static name in quote_item_option.value
$queryModifier = $this->queryModifierFactory->create(
    'in',
    [
        'values' => [
            'code' => [
                'my_option'
            ]
        ]
    ]
);
$fieldDataConverter->convert(
    $setup->getConnection(),
    $setup->getTable('quote_item_option'),
    'option_id',
    'value',
    $queryModifier
);
```
{% endcollapsible %}

#### Use values from another table in the condition

The following tables show how the `type` and `option_id` columns from the `catalog_product_option` table form the unique `code` value for custom options in the `quote_item_option` table.

> `catalog_product_option` table

| option_id | product_id | type             |
| --------- | ---------- | ---------------- |
| 1001      | 1          | my_custom_option |
| 1002      | 2          | my_custom_option |
| 1003      | 5          | my_custom_option |

> `quote_item_option` table

| option_id | code                  | value                         |
| --------- | --------------------- | ----------------------------- |
| 1         | my_custom_option_1001 | `a:1:{s:3:"foo";s:3:"bar";}`   |
| 2         | another_option        | &lt;non-serialized string&gt; |
| 3         | my_custom_option_1002 | `a:1:{s:3:"foo";s:3:"bar";}`    |
| 4         | my_custom_option_1003 | `a:1:{s:3:"foo";s:3:"bar";}`   |

To update custom options data in the `quote_item_option` table:

{% collapsible Show code %}
```php
$fieldDataConverter = $this->fieldDataConverterFactory->create(
    \Magento\Framework\DB\DataConverter\SerializedToJson::class
);
// Convert data for the option with dynamic name in quote_item_option.value
$select = $setup->getConnection()
    ->select()
    ->from(
        $setup->getTable('catalog_product_option'),
        ['option_id']
    )
    ->where('type = ?', 'my_custom_option');
$iterator = $this->queryGenerator->generate('option_id', $select);
foreach ($iterator as $selectByRange) {
    $codes = $setup->getConnection()->fetchCol($selectByRange);
    $codes = array_map(
        function ($id) {
            return 'my_custom_option_' . $id;
        },
        $codes
    );
    $queryModifier = $this->queryModifierFactory->create(
        'in',
        [
            'values' => [
                'code' => $codes
            ]
        ]
    );
    $fieldDataConverter->convert(
        $setup->getConnection(),
        $setup->getTable('quote_item_option'),
        'option_id',
        'value',
        $queryModifier
    );
}
```
{% endcollapsible %}

### Step 3c: Convert nested serialized data {#step-3c}

If your module uses nested serialized data in the database, create a custom data converter to hold the logic for converting the data.

The following example is a custom data converter class that converts data in the `product_options` column in the `sales_order_item` table.
This field contains nested serialized data that needs conversion.

Since you cannot assume the format of the data when initially converted, the following example also checks the format and uses the appropriate methods to unserialize and serialize the data using the original format.

{% collapsible Show code %}

```php
namespace Magento\CustomModule\Setup;

use Magento\Framework\Serialize\Serializer\Serialize;
use Magento\Framework\Serialize\Serializer\Json;

/**
 * Serializer used to convert data in product_options field
 */
class SerializedToJsonDataConverter implements \Magento\Framework\DB\DataConverter\DataConverterInterface
{
    /**
     * @var Serialize
     */
    private $serialize;

    /**
     * @var Json
     */
    private $json;

    /**
     * Constructor
     *
     * @param Serialize $serialize
     * @param Json $json
     */
    public function __construct(
        Serialize $serialize,
        Json $json
    ) {
        $this->serialize = $serialize;
        $this->json = $json;
    }

    /**
     * Convert from serialized to JSON format
     *
     * @param string $value
     * @return string
     */
    public function convert($value)
    {
        $isSerialized = $this->isSerialized($value);
        $unserialized = $isSerialized
          ? $this->serialize->unserialize($value)
          : $this->json->unserialize($value);
        if (isset($unserialized['options'])) {
            foreach ($unserialized['options'] as $key => $option) {
                if ($option['option_type'] === 'my_custom_option') {
                    $unserialized['options'][$key]['option_value'] = $this->json->serialize(
                        $this->serialize->unserialize(
                            $option['option_value']
                        )
                    );
                }
            }
        }
        if (isset($unserialized['my_option'])) {
            $unserialized['my_option'] = $this->json->serialize(
                $this->serialize->unserialize(
                    $unserialized['my_option']
                )
            );
        }
        return $isSerialized
          ? $this->serialize->serialize($unserialized)
          : $this->json->serialize($unserialized);
    }

    /**
     * Check if value is serialized string
     *
     * @param string $value
     * @return boolean
     */
    private function isSerialized($value)
    {
        return (boolean) preg_match('/^((s|i|d|b|a|O|C):|N;)/', $value);
    }
}
```

{% endcollapsible %}

After creating your custom data converter class, use the `FieldDataConverterFactory` to create a `FieldDataConverter` instance with your custom converter:

{% collapsible Show code %}
```php

// Convert options in sales_order_item.product_options
$fieldDataConverter = $this->fieldDataConverterFactory->create(
    \Magento\CustomModule\Setup\SerializedToJsonDataConverter::class
);
$fieldDataConverter->convert(
    $setup->getConnection(),
    $setup->getTable('sales_order_item'),
    'item_id',
    'product_options'
);
```
{% endcollapsible %}

### Step 3d: Convert data in a multi-database setup {#step-3d}

{{site.data.var.ee}} supports storing Quote, Sales, and Inventory data in separate databases.
Use the specific connections for each of these modules to update your extension's stored data for the entities of these modules.

The following code sample obtains the Sales module connection and uses it during data update.
{% collapsible Show code %}
```php
/** \Magento\Sales\Setup\SalesSetupFactory $salesSetup */
$salesSetup = $this->salesSetupFactory->create(['setup' => $setup]);

$fieldDataConverter->convert(
    $salesSetup->getConnection(),
    $salesSetup->getTable('sales_order_item'),
    'item_id',
    'product_options'
);
```
{% endcollapsible %}

### Step 3e: Convert data from multiple fields

Use the `\Magento\Framework\DB\AggregatedFieldDataConverter` class to update multiple files instead of `\Magento\Framework\DB\FieldDataConverter`.

The following code sample updates two fields in different tables taking into account setup version of the module.
It is possible to aggregate fields for the same connection only. If it is necessary to use multiple connections in one setup script, multiple calls to `\Magento\Framework\DB\AggregatedFieldDataConverter::convert()` must be made.
{% collapsible Show code %}
```php
/** \Magento\Sales\Setup\SalesSetupFactory $salesSetup */
$salesSetup = $this->salesSetupFactory->create(['setup' => $setup]);

$fieldsToUpdate = [
    new FieldToConvert(
        SerializedToJson::class,
        $salesSetup->getTable('sales_invoice_item'),
        'entity_id',
        'tax_ratio'
    ),
];
if (version_compare($setupVersion, '2.0.5', '<')) {
    $fieldsToUpdate[] = new FieldToConvert(
        SerializedDataConverter::class,
        $salesSetup->getTable('sales_order_item'),
        'item_id',
        'product_options'
    );
}
$this->aggregatedFieldConverter->convert($fieldsToUpdate, $salesSetup->getConnection());
```
{% endcollapsible %}

## Related Topics

*  [Serialize Library][0]
*  [Extension Lifecycle][1]

[0]: {{ page.baseurl }}/extension-dev-guide/framework/serializer.html "Serialize Library"
[1]: {{ page.baseurl }}/extension-dev-guide/prepare/lifecycle.html "Extension Lifecycle"
