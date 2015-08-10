---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Fixture
menu_order: 1
github_link: mtf/mtf_entities/mtf_fixture.md
---
<h2 id="mtf_fixture_content">Content</h2>

- <a href="#mtf_fixture_overview">Fixture overview</a>

- <a href="#mtf_fixture_create">Create new fixture</a>

- <a href="#mtf_fixture_read">Read and update new fixture</a>

- <a href="#mtf_fixture_repositoy">Add repository to the fixture field</a>

- <a href="#mtf_fixture_source">Add data source to the fixture field</a>

- <a href="#mtf_fixture_merge">Merge fixtures</a>

- <a href="#mtf_fixture_extend">Extend fixture</a>

<h2 id="mtf_fixture_overview">Fixture overview</h2>

Fixture in MTF is a list of properties of the Magento entity under test.

Fixture is represented as XML file. It is located in `Fixture` directory, that is in corresponding module in `<magento_root>/dev/tests/functional/tests/app/Magento/functional`. For example for `Widget`:

-  `<magento_root>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget.xml`

You will need fixture:

- as test data for particular set
- as pre-condition for the test

In this chapter we will create a new fixture and modify it, considering different use cases.

To apply any changes of the fixture, you should run generate tool:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php

This tool creates PHP class that is used by the test.

You can check fixture PHP class in corresponding module in `<magento_root>/dev/tests/functional/generated/Magento` directory.

<h2 id="mtf_fixture_create">Create new fixture</h2>

Let's imagine that we want to create new fixture to test our Widget module.

Magento has a special tool that will generate automatically your fixture, with parameters you indicated in arguments.  That is `generateFixtureXml.php,` located in `<magento_root>/dev/tests/functional/utils`.

    cd <magento_root>/dev/tests/functional/utils
    php -f generateFixtureXml.php -- --name widget --entity_type widget_instance --collection Magento\\Widget\\Model\\Resource\\Widget\\Instance\\Collection

<div class="bs-callout bs-callout-info" id="info">
<p>Please note that generateFixtureXml tool does not replace existing XML fixture. For example, if you already have <code>Widget.xml</code> fixture, you cannot create new one with the same name.</p>
</div>

<div class="bs-callout bs-callout-warning">
<p>To work with generateFixtureXml tool, <a href="{{site.gdeurl}}/install-gde/bk-install-guide.html">Magento must be installed.</a></p>
</div>

In the table below see `generateFixtureXml` arguments.

| Argument        | Semantics                                                    | Value                                                            | Note                                      |
|:----------------|:-------------------------------------------------------------|:-----------------------------------------------------------------|:------------------------------------------|
| `--name`        | Name of fixture.                                              | `widget`                                                         | Required                                  |
| `--type`        | Table type for the entity. Can be `eav`, `flat`, `composite`. | `flat`                                                           | Default value: `flat`.                     |
| `--entity_type` | Database table name, where entity data is stored.            | `widget_instance`                                                | Required                                  |
| `--collection`  | Collection to generate data sets                             | `Magento\\Widget\\Model\\Resource\\Widget\\Instance\\Collection` | Required. Escape all backslashes. |
| `--help`        | List of arguments with its definitions.                       |                                                                  |                                           |

This tool takes data from database table, that mentioned in argument, and creates new fixture `<magento_root>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget.xml`.

{% highlight xml%}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
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

{% endhighlight xml%}

To generate PHP class run in your terminal:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php

That's it!

Detailed description of XML structure see in the next section.

<h2 id="mtf_fixture_read">Read and update your new fixture</h2>

Let's look closer at fixture structure.

  - `<config>` is a root node that defines path to `fixture.xsd` schema.
  - `<fixture>` defines fixture configuration.
  - `<data_config>` defines additional fixture configuration for the fixture.
  - `<field>` defines field in fixture.


| `<fixture>` attribute | Semantics                                                                                                                                                                                                   |                 Value                 | Is required? |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------:|:------------:|
| `name`                | Code name of fixture.                                                                                                                                                                                       |                string                 |   required   |
| `module`              | Name of the module to place a fixture.                                                                                                                                                                      |                string                 |   required   |
| `class`               | Reference to the class that will be automatically generated.                                                                                                                                                 |                string                 |   required   |
| `type`                | Table type for the entity.                                                                                                                                                                                  | `eav`, `flat`, `virtual`, `composite` |   optional   |
| `entity_type`         | Database table name where entity data is stored. If more than one name must be defined, then use coma as separator (for example, `"eav_attribute, catalog_eav_attribute"`) and assign `type = "composite"`. |                string                 |   optional   |
| `product_type`        | Additional information about product type, applicable only for product fixtures.                                                                                                                            |                string                 |   optional   |
| `collection`          | Collection to generate data sets. It is taken from Magento code.                                                                                                                                            |                string                 |   optional   |
| `identifier`          | Field that will be used for data set names in repository while generating them using collection.                                                                                                             |                string                 |   optional   |
| `repository_class`    | Reference to the repository class.                                                                                                                                                                           |                string                 |   optional   |
| `handler_interface`   | Reference to the handler interface class.                                                                                                                                                                    |                string                 |   optional   |
| `extends`             | Reference to the class from which you want to extend.                                                                                                                                                       |                string                 |   optional   |



| `<field>` attribute | Semantics                                                                                                                                                        |           Value            | Required/optional |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------:|:-----------------:|
| `name`              | Field name.                                                                                                                                                      |           string           |     required      |
| `is_required`       | Specifies whether field is required on the form.                                                                                                                 | 1 - required, 0 - optional |     optional      |
| `group`             | Tab name that contains field (for example, `title` field is placed on 'Storefront properties' tab on widget creation page).                                      |           string           |     optional      |
| `source`            | Class that prepares field data for the use (see Data Source).                                                                                                    |           string           |     optional      |
| `repository`        | Reference to  the class that stores data sets for the field (<a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html">more details about repository</a>). |           string           |     optional      |

The image below shows how XML is connected with GUI of our new widget.

![XML and GUI relation]({{ site.baseurl }}common/images/mtf_fixture_xml_pic.png)

Orange arrows show relations between `<field>` nodes of fixture and GUI element of Magento widget, that we are going to test.

As you can see, we added some information to the picture. New text is highlighted with orange color.

We added `group`  attribute that is the same as name of the tab, where GUI elements located, for convenience. Except of `instance_id`, this field does not appear on GUI, that's why we spesify it to the group `null`.

Also you can see definition of new field `layout_updates`, that is present on GUI, but is absent in the list of fields in our XML fixture. This happens, because this field is absent in DB table, that we indicated in `entity_type` argument of generateFixtureXml tool (that is`widget_instance`).

Let's manually add new field and `group` attribute to the `Widget.xml`. See what we have now.

{% highlight xml%}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
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

{% endhighlight xml%}

To apply changes run in your terminal:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php

<h2 id="mtf_fixture_repositoy">Add repository to the fixture field </h2>

Now we have new fixture for Widget. All fields are defined and ready to take test data. Let's assume that we are not focused on layout updates functionality and want to use pre-defined data.

For this goal you can add link to repository, where all test data have been already defined.

{% highlight xml%}

<field name="layout_updates" repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates" group="storefront_properties" />

{% endhighlight xml%}

Repository is located in `Repository` directory of corresponding module. That contains subdirectory with the name of fixture, and repository XML file in it with the name of fixture field.

Put repository `LayoutUpdates.xml` in `<magento_roo>/dev/tests/functional/app/Magento/Widget/Test/Repository/Widget/LayoutUpdates.xml`.

Bellow is the code of `LayoutUpdates.xml`. There two datasets defined. Which of them to choose you can define in your test.

{% highlight xml %}
<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
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

{% endhighlight xml %}

To apply changes run in your terminal:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php

<h2 id="mtf_fixture_source">Add data source to the fixture field</h2>

Our new field `layout_updates` is complex and contains different elements and logic, depending on type of layout chosen.

![Layout update subelements]({{ site.baseurl }}common/images/mtf_layout_update.jpg)

For these needs you can use data source, that serves for additional processing of the field (for example, parsing or creation of new field).

All data source logic is defined in PHP file. Link to it must be specified in `source` attribute of the field.

It is located in `Fixture` directory of corresponding module. That contains subdirectory with the name of fixture, and source class in it with the name of fixture field. See example below.

{% highlight xml%}

<field name="layout_updates"
       is_required="0"
       repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates"
       source="Magento\Widget\Test\Fixture\Widget\LayoutUpdates"
       group="storefront_properties" />

{% endhighlight xml%}

Let's see our data source file `<magento_root>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget/LayoutUpdates.php`

<script src="https://gist.github.com/dshevtsov/908bd242c01aded95308.js"></script>

To apply changes run in your terminal:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php
    
<div class="bs-callout bs-callout-warning">
<p>You should mention repository in data source class to use it for fixture field.<br/>
<br/>
Example from <code>LayoutUpdates.php</code><br/>
<code>$this->data = $repositoryFactory->get($this->params['repository'])->get($data['dataset']);</code></p>
</div>

<h2 id="mtf_fixture_merge">Merge fixtures</h2>

We have a module that adds new field to Widget module.

We can create file that adds field `new_field` to our widget fixture.

{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/fixture.xsd">
    <fixture name="widget">
        <field name="new_field" is_required="0" group="storefront_properties" />
    </fixture>
</config>

{% endhighlight xml %}

To apply changes run in your terminal:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php

`new_field` has been added in fixture `Widget.php`.

<h2 id="mtf_fixture_extend">Extend fixture</h2>

Let's assume that you want to add new fixture based on our `Widget.xml` fixture to another Magento entity.

To do that you should supplement your `Widget.xml` code with `extends` attribute in `<fixture>` node. As you already know `extends` value stores a link to the class from which you want to extend your fixture.

{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
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

{% endhighlight xml %}

In this example you will create new fixture PHP class AdWidget that extends Widget fixture. It will create same fixture, and add field `custom_field`.

To generate your new fixture PHP class, run in your terminal:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php

