---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Constraint
menu_order: 7
github_link: mtf/mtf_entities/mtf_constraint.md
---

<h3>Content</h3>

* TOC
{:toc}

## Constraint overview {#mtf_constraint_overview}
The MTF constraint serves for performing assertions after test execution.
Each constraint name must be unique within application and placed in the module to which the constraint belongs. Constraints run automatically after test flow has been finished.

## Constraint structure {#mtf_constraint_structure}

### `Constraint` directory {#mtf_constraint_directory}

A module in functional tests (`<magento2>/dev/tests/app/Magento/`) stores constraints as PHP classes in `Constraint` directory. The following image shows `Constraint` directory of the Magento_Widget module.

![]({{site.baseurl}}common/images/mtf_constraint_dir.png)

### Constraint structure {#mtf_constraint_assert}

The constraint PHP class must:

* Have unique name created using the following template `Assert{MagentoEntityName}{verification|action|place}`. For example:

  * `AssertUserSuccessDeleteMessage` corresponds to `Assert{entityName}{verification}`
  * `AssertOrderPlaced` corresponds to `Assert{entityName}{action}`
  * `AssertProductForm` corresponds to `Assert{entityName}{place}`

* Be extended from the [Mtf\Constraint\AbstractConstraint](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Constraint/AbstractConstraint.php) class.

* Contain the following methods only: 

  * `pocessAssert` which contains logic of assertion implemented using `PHPUnit_Framework_Assert` class (`<magento2>/dev/tests/functional/vendor/phpunit/phpunit/src/Framework/Assert.php`)
  * `toString` which returns message in case of successful assertion

### Constraint in the test {#mtf_constraint_variation}

[A test case]({{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html) contains constraints as nodes in variations of [data set]({{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html), that are references on PHP classes with corresponding assertions.

Constraints are performed in the order they listed in the data set.

The following example shows `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/TestCase/DeleteWidgetEntityTest.xml` data set with two constraints. 

{%highlight xml%}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/variations.xsd">
    <testCase name="Magento\Widget\Test\TestCase\DeleteWidgetEntityTest" summary="Delete Widget" ticketId="MAGETWO-28459">
        <variation name="DeleteWidgetEntityTestVariation1">
            <data name="widget/dataset" xsi:type="string">default</data>
            <constraint name="Magento\Widget\Test\Constraint\AssertWidgetSuccessDeleteMessage" />
            <constraint name="Magento\Widget\Test\Constraint\AssertWidgetAbsentOnFrontendHome" />
        </variation>
    </testCase>
</config>

{%endhighlight%}

Directly after test, both constraints are performed in the order they listed.

### Constraints tagging

You can tag constraints in `Test/etc/di.xml` of the module using `severity` argument. Severity tagging of constrains is used for customization of test run.

You can use the following tags:

- `high`
- `middle`
- `low`

Only one tag can be assigned to the constraint.

To assign tags do the following:

* Create `di.xml` file in `Test/etc` of the module.
* Assign `severity` to constraints in the following format:

{%highlight xml%}
<type name="Magento\[Module_name]\Test\Constraint\Assert...">
        <arguments>
            <argument name="severity" xsi:type="string">high|middle|low</argument>
        </arguments>
</type>
{%endhighlight%}

For example, `<magento2>/dev/tests/functional/tests/app/Magento/CatalogRule/Test/etc/di.xml`:

{%highlight xml%}
{%remote_markdown https://raw.githubusercontent.com/magento/magento2/develop/dev/tests/functional/tests/app/Magento/CatalogRule/Test/etc/di.xml %}
{%endhighlight%}

## How to create constraint {#mtf_constraint_create}

Use case: We want to assert widget availability in widget grid.

Step 1. What module does it belong?
  
  In our case, we need to create constraint in Magento_Widget module, in `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Constraint`.
  
Step 2. What name should constraint have?
  
  Using [constraint naming principle](#mtf_constraint_assert) our constraint should be named as `AssertWidgetInGrid`.

Step 3. Create `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Constraint/AssertWidgetInGrid.php` with [required structure](#mtf_constraint_assert)

<script src="https://gist.github.com/dshevtsov/c9d9e77e4d48af881f69.js"></script>

Step 4. Implement assertion in `processAssert()`

**Assertion logic**: Take title of the widget from the widget fixture, open the page with a grid, check if the grid has our title.

<script src="https://gist.github.com/dshevtsov/c1e2a8437e0d2b2036bd.js"></script>

## How to use constraint {#mtf_constraint_use}

To add constraint we've created in previous section, add a corresponding node to data set of your test,

{%highlight xml%}
<constraint name="Magento\Widget\Test\Constraint\AssertWidgetInGrid" />
{%endhighlight%}

in order that it must be performed.

{%highlight xml%}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/variations.xsd">
    <testCase name="Magento\Widget\Test\TestCase\CreateWidgetEntityTest" summary="Create Widget" ticketId="MAGETWO-27916">
        <variation name="CreateWidgetEntityTestVariation1">
            <data name="widget/data/code" xsi:type="string">CMS Static Block</data>
            <data name="widget/data/theme_id" xsi:type="string">Magento Luma</data>
            <data name="widget/data/title" xsi:type="string">Title_%isolation%</data>
            <data name="widget/data/store_ids/dataset" xsi:type="string">all_store_views</data>
            <data name="widget/data/widget_instance/dataset" xsi:type="string">on_category</data>
            <data name="widget/data/parameters/dataset" xsi:type="string">cmsStaticBlock</data>
            <constraint name="Magento\Widget\Test\Constraint\AssertWidgetSuccessSaveMessage" />
            <constraint name="Magento\Widget\Test\Constraint\AssertWidgetInGrid" />
            <constraint name="Magento\Widget\Test\Constraint\AssertWidgetOnFrontendInCatalog" />     
        </variation>
    </testCase>
</config>
{%endhighlight%}