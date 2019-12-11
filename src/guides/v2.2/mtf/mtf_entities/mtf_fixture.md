---
group: functional-testing-framework-guide
title: Fixture
---

An FTF fixture is a list of properties of the Magento [entity](https://glossary.magento.com/entity) under test.

A fixture is represented as an [XML](https://glossary.magento.com/xml) file located in the `Fixture` directory that corresponds to a module in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/functional`. Example for `Widget`:

-  `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget.xml`

You will need fixture:

-  as test data for particular set
-  as precondition for the test

In this chapter, we will create a new fixture and modify it, considering different use cases.

To apply any changes in fixture, run generate tool:

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php generate.php
```

This tool creates [PHP](https://glossary.magento.com/php) classes that are used by the test.

You can check fixture PHP class in corresponding [module](https://glossary.magento.com/module) in the `<magento2_root_dir>/dev/tests/functional/generated/Magento` directory.

## Create new fixture {#mtf_fixture_create}

Let's imagine that we want to create new fixture to test our [Widget](https://glossary.magento.com/widget) module.

Magento has a tool, `generateFixtureXml.php,`, to automatically generate fixture with parameters indicated in arguments. It is located in `<magento2_root_dir>/dev/tests/functional/utils`.

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php -f generateFixtureXml.php -- --name widget --entity_type widget_instance --collection Magento\\Widget\\Model\\Resource\\Widget\\Instance\\Collection
```

 {:.bs-callout-info}
Please note that the generateFixtureXml tool does not replace an existing XML fixture. For example, if you already have `Widget.xml` fixture, you cannot create new one with the same name.

{:.bs-callout-warning}
To work with generateFixtureXml tool, [Magento must be installed.]({{ page.baseurl }}/install-gde/bk-install-guide.html)

In the following table see `generateFixtureXml` arguments.

| Argument        | Semantics                                                     | Value from command above                                         | Note                              |
|:----------------|:--------------------------------------------------------------|:-----------------------------------------------------------------|:----------------------------------|
| `--name`        | Name of fixture.                                              | `widget`                                                         | Required                          |
| `--type`        | Table type for the entity. Can be `eav`, `flat`, `composite`. | `flat`                                                           | Default value: `flat`.            |
| `--entity_type` | Database table name, where entity data is stored.             | `widget_instance`                                                | Required                          |
| `--collection`  | Collection to generate data sets                              | `Magento\\Widget\\Model\\Resource\\Widget\\Instance\\Collection` | Required. Escape all backslashes. |
| `--help`        | List of arguments with definitions.                           |                                                                  |                                   |                                           |

This tool creates a new fixture using data from a database table you specified using the `--entity_type` argument.

Following is the generated Widget fixture located in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget.xml`.

```xml
<?xml version="1.0" encoding="utf-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/fixture.xsd">
    <fixture name="widget"
             module="Magento_Widget"
             type="flat"
             collection="Magento\Widget\Model\Resource\Widget\Instance\Collection"
             repository_class="Magento\Widget\Test\Repository\Widget"
             handler_interface="Magento\Widget\Test\Handler\Widget\WidgetInterface"
             class="Magento\Widget\Test\Fixture\Widget"
             entity_type="widget_instance">
        <field name="instance_id" is_required="1"/>
        <field name="instance_type" is_required="0"/>
        <field name="theme_id" is_required="0"/>
        <field name="title" is_required="0"/>
        <field name="store_ids" is_required="0"/>
        <field name="sort_order" is_required="0"/>
        <field name="widget_parameters" is_required="0"/>
    </fixture>
</config>
```

To generate PHP classes, enter the following commands in the order shown:

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php generate.php
```

That's it!

For a detailed description of XML structure, see next section.

## Read and update your new fixture {#mtf_fixture_read}

Let's look closer at fixture structure.

-  `<config>` is a root node that defines path to `fixture.xsd` schema.
-  `<fixture>` defines fixture configuration.
-  `<data_config>` defines additional fixture configuration for the fixture.
-  `<field>` defines field in fixture.

Following table describes `<fixture>` attributes.

| `<fixture>` attribute   | Semantics                                                                                                                                                                                                      | Value                                   | Example                                                                           | Is required?   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|:----------------------------------------------------------------------------------|:---------------|
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------: | :-------------------------------------------------------------------------------- | :------------: |
| `name`                  | Name of fixture.                                                                                                                                                                                               | string                                  | catalogProductSimple                                                              | required       |
| `module`                | Name of the module in which to place the fixture.                                                                                                                                                              | string                                  | Magento_Catalog                                                                   | required       |
| `class`                 | Path to the PHP class. Generator will use this path to locate automatically generated PHP file.                                                                                                                | string                                  | Magento\Catalog\Test\Fixture\CatalogProductSimple                                 | required       |
| `type`                  | Table type for the entity.                                                                                                                                                                                     | `eav`, `flat`, `virtual`, `composite`   | eav                                                                               | optional       |
| `entity_type`           | Database table name where the entity data is stored. Specify more than one database table as a comma-separated list (for example, `"eav_attribute, catalog_eav_attribute"`) and assign `type = "composite"`.   | string                                  | catalog_product                                                                   | optional       |
| `product_type`          | Type of product. Applicable only for product fixtures.                                                                                                                                                         | string                                  | simple                                                                            | optional       |
| `collection`            | Collection to generate data sets. It is taken from `<magento2_root_dir>/app/code/Magento`.                                                                                                                     | string                                  | Magento\Catalog\Model\Resource\Product\Collection                                 | optional       |
| `identifier`            | Field used to create data set names in the repository.                                                                                                                                                         | string                                  | sku                                                                               | optional       |
| `repository_class`      | Reference to the repository class.                                                                                                                                                                             | string                                  | Magento\Catalog\Test\Repository\CatalogProductSimple                              | optional       |
| `handler_interface`     | Reference to the handler interface class.                                                                                                                                                                      | string                                  | Magento\Catalog\Test\Handler\CatalogProductSimple\CatalogProductSimpleInterface   | optional       |
| `extends`               | Reference to the class from which you want to extend.                                                                                                                                                          | string                                  | \Magento\Widget\Test\Fixture\Widget                                               | optional       |

The following table describes `<field>` attributes.

| `<field>` attribute | Semantics                                                                                                                                                    |           Value            | Example                                             | Is required? |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------:|:----------------------------------------------------|:------------:|
| `name`              | Field name.                                                                                                                                                  |           string           | layout_updates                                      |   required   |
| `is_required`       | Specifies whether field is required on the form.                                                                                                             | 1 - required, 0 - optional | 1                                                   |   optional   |
| `group`             | Tab name that contains field (for example, `title` field is placed on **Storefront properties** tab on widget creation page).                                |           string           | storefront_properties                               |   optional   |
| `source`            | Class that prepares field data for use. See [Add the data source to the fixture field](#mtf_fixture_source).                                                 |           string           | Magento\Widget\Test\Fixture\Widget\LayoutUpdates    |   optional   |
| `repository`        | Reference to  the class that stores data sets for the field. [More details about the repository]({{ page.baseurl }}/mtf/mtf_entities/mtf_fixture-repo.html). |           string           | Magento\Widget\Test\Repository\Widget\LayoutUpdates |   optional   |

The following image shows how XML is connected with GUI of your new widget.

[![]({{ site.baseurl }}/common/images/ftf/mtf_fixture_xml_pic.png)]({{ site.baseurl }}/common/images/ftf/mtf_fixture_xml_pic.png)

Orange arrows show relations between `<field>` nodes of fixture and GUI element of Magento widget, that we are going to test.

As you can see, we added some information to the picture. New text is highlighted in orange.

For convenience, we added a `group` attribute that matches the name of the tab where the UI elements are located. Except for `instance_id`, this field does not display which is why it belongs to the null group.

We also defined a new field, `layout_updates` on the UI but this field is absent from the list of fields in our XML fixture. This is because the field is not present in the database table `widget_instance` specified by the `entity_type`.

Let's manually add a new field and `group` attribute to the `Widget.xml`. See what we have now.

```xml
<?xml version="1.0" encoding="utf-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/fixture.xsd">
    <fixture name="widget"
             module="Magento_Widget"
             type="flat"
             collection="Magento\Widget\Model\Resource\Widget\Instance\Collection"
             repository_class="Magento\Widget\Test\Repository\Widget"
             handler_interface="Magento\Widget\Test\Handler\Widget\WidgetInterface"
             class="Magento\Widget\Test\Fixture\Widget"
             entity_type="widget_instance">
        <field name="instance_id" is_required="1" group="null" />
        <field name="instance_type" is_required="0" group="settings" />
        <field name="theme_id" is_required="0" group="settings" />
        <field name="title" is_required="0" group="storefront_properties" />
        <field name="store_ids" is_required="0" group="storefront_properties" />
        <field name="sort_order" is_required="0" group="storefront_properties" />
        <field name="widget_parameters" is_required="0" group="frontend_options" />
        <field name="layout_updates" is_required="0" group="storefront_properties" />
    </fixture>
</config>
```

To apply the changes, enter the following commands:

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php generate.php
```

## Add a repository to the fixture field {#mtf_fixture_repositoy}

Now we have a new fixture for Widget. All fields are defined and ready to take test data. Let's assume that we are not focused on [layout](https://glossary.magento.com/layout) updates functionality and want to use pre-defined data.

For this goal, link to the repository where all test data has already been defined.

```xml
<field name="layout_updates" repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates" group="storefront_properties" />
```

Repository is located in `Repository` directory of corresponding module. `Repository` directory contains a subdirectory with the name of fixture, and repository XML file in it with the name of fixture field.

The repository is located in `<magento2_root_dir>/dev/tests/functional/app/Magento/Widget/Test/Repository/Widget/LayoutUpdates.xml`.

Following is the code of `LayoutUpdates.xml`. It specifies two data sets that you can choose to define in your test.

```xml
<?xml version="1.0" ?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/Magento/Mtf/Repository/etc/repository.xsd">
    <repository class="Magento\Widget\Test\Repository\Widget\LayoutUpdates">
        <dataset name="all_pages">
            <field name="0" xsi:type="array">
                <item name="page_group" xsi:type="string">Generic Pages/All Pages</item>
                <item name="block" xsi:type="string">Main Content Area</item>
            </field>
        </dataset>

        <dataset name="on_category">
            <field name="0" xsi:type="array">
                <item name="page_group" xsi:type="string">Categories/Non-Anchor Categories</item>
                <item name="for" xsi:type="string">Yes</item>
                <item name="entities" xsi:type="string">category::default_subcategory</item>
                <item name="block" xsi:type="string">Main Content Area</item>
            </field>
        </dataset>
    </repository>
</config>
```

To apply changes, enter following commands:

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php generate.php
```

## Add data source to fixture field {#mtf_fixture_source}

Our new field `layout_updates` is complex and contains different elements and logic, depending on the type of layout chosen.

![Layout update sub elements]({{ site.baseurl }}/common/images/ftf/mtf_layout_update.jpg)

You can use a data source that provides additional processing of the field (for example, parsing or creation of new field).

All data source logic is defined in a PHP file which must be linked as specified in the field's `source` attribute.

It is located in `Fixture` directory of corresponding module. That contains subdirectory with the name of fixture, and source class in it with the name of fixture field. See the following example.

```xml
<field name="layout_updates"
       is_required="0"
       repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates"
       source="Magento\Widget\Test\Fixture\Widget\LayoutUpdates"
       group="storefront_properties" />
```

Let's see our data source file `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget/LayoutUpdates.php`

```php
<?php

namespace Magento\Widget\Test\Fixture\Widget;

use Magento\Mtf\Fixture\FixtureFactory;
use Magento\Mtf\Fixture\DataSource;
use Magento\Mtf\Repository\RepositoryFactory;

/**
 * Prepare Layout Updates for widget.
 */
class LayoutUpdates extends DataSource
{
    /**
     * @constructor
     * @param RepositoryFactory $repositoryFactory
     * @param FixtureFactory $fixtureFactory
     * @param array $params
     * @param array $data
     */
    public function __construct(
        RepositoryFactory $repositoryFactory,
        FixtureFactory $fixtureFactory,
        array $params,
        array $data = []
    ) {
        $this->params = $params;
        if (isset($data['dataset']) && isset($this->params['repository'])) {
            $this->data = $repositoryFactory->get($this->params['repository'])->get($data['dataset']);
            foreach ($this->data as $index => $layouts) {
                if (isset($layouts['entities'])) {
                    $explodeValue = explode('::', $layouts['entities']);
                    $fixture = $fixtureFactory->createByCode($explodeValue[0], ['dataset' => $explodeValue[1]]);
                    $fixture->persist();
                    $this->data[$index]['entities'] = $fixture;
                }
            }
        } else {
            $this->data = $data;
        }
    }
}
```

It is important to note that you should mention repository in data source class to use it for fixture field:

```php
$this->data = $repositoryFactory->get($this->params['repository'])->get($data['dataset']);
```

To apply the changes, enter the following commands:

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php generate.php
```

## Merge fixtures {#mtf_fixture_merge}

We have a module that adds new field to Widget module.

We can create file that adds field `new_field` to our widget fixture.

```xml
<?xml version="1.0" encoding="utf-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/fixture.xsd">
    <fixture name="widget">
        <field name="new_field" is_required="0" group="storefront_properties" />
    </fixture>
</config>
```

To apply the changes, enter the following commands:

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php generate.php
```

`new_field` has been added in fixture `Widget.php`.

## Extend fixture {#mtf_fixture_extend}

Let's assume that you want to add new fixture based on our `Widget.xml` fixture to another Magento entity.

To do that you should supplement your `Widget.xml` code with `extends` attribute in `<fixture>` node. As you already know, `extends` value stores a link to the class from which you want to extend your fixture.

```xml
<?xml version="1.0" encoding="utf-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/fixture.xsd">
    <fixture name="adWidget"
             repository_class="Magento\AdWidget\Test\Repository\AdWidget"
             handler_interface="Magento\AdWidget\Test\Handler\AdWidget\AdWidgetInterface"
             class="Magento\AdWidget\Test\Fixture\AdWidget"
             extends="\Magento\Widget\Test\Fixture\Widget">
        <field name="custom_field" repository="Magento\AdWidget\Test\Repository\AdWidget\CustomField" group="storefront_properties" />
    </fixture>
</config>
```

In this example you will create a new fixture PHP class AdWidget that extends Widget fixture. It creates a fixture with the same name, and a field named `custom_field`.

To generate your new fixture PHP class, enter the following commands:

```bash
cd <magento2_root_dir>/dev/tests/functional/utils
```

```bash
php generate.php
```
