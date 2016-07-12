---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Functional Testing Framework
menu_title: Constraint
menu_order: 7
version: 2.0
github_link: mtf/mtf_entities/mtf_constraint.md
---

<h2>Constraint</h2>

* TOC
{:toc}

## Constraint overview {#mtf_constraint_overview}

The Functional Testing Framework (FTF) constraint performs assertions after a test flow. A test flow is a set of test steps without assertions.
Each constraint name must be globally unique in Magento application and must be placed in the module to which it belongs. Constraints run automatically after test flow has finished.

![Constraints and test flow]({{site.baseurl}}common/images/mtf_constraint_flow.png)

## Constraint structure {#mtf_constraint_structure}

### `Constraint` directory {#mtf_constraint_directory}

A module in functional tests (`<magento2>/dev/tests/app/Magento/`) stores constraints in the `Constraint` directory. The following image shows the `Constraint` directory of the Magento_Widget module.

![]({{site.baseurl}}common/images/mtf_constraint_dir.png)

### Constraint class {#mtf_constraint_assert}

The constraint PHP class must:

* Have unique name created using the following template `Assert{MagentoEntityName}{verification|action|place}`. For example:

  * `AssertUserSuccessDeleteMessage` corresponds to `Assert{entityName}{verification}`
  * `AssertOrderPlaced` corresponds to `Assert{entityName}{action}`
  * `AssertProductForm` corresponds to `Assert{entityName}{place}`

* Extend the [Magento\Mtf\Constraint\AbstractConstraint](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Constraint/AbstractConstraint.php) class.

* Contain the following methods: 

  * `processAssert()` which contains assertions. A `PHPUnit_Framework_Assert` class (`<magento2>/dev/tests/functional/vendor/phpunit/phpunit/src/Framework/Assert.php`) can be used to simplify assertions.
  * `toString()` which returns a success message if the assertion is performed successfully

### Constraint arguments

In the FTF, [data set][] values are shared with a test class and constraints. A node name in data set can be complex like `item1/item2/item3`. The argument name in `processAssert()` must be the same as the `item1` to transfer data from data set to constraint.
 
If a data set variable is used in the test, and is overwritten, it is transferred as altered to the constraint. Variables can be overwritten in the _injectable_ [test case][]  class in `test()`, `__inject()` and `__prepare()` methods, and then passed to the constraint class by `return`. Furthermore, any returned value of these methods can be used as an argument in constraint.

An object that is not defined in the data set or isn't returned from the test case is created using the Object Manager.

Let's see the following images for the `CreateSimpleProductEntityTest` test and the `AssertProductPricesOnCategoryPage` constraint. Data set from the diagrams contains three variables with data: `product`, `category` and `price`.

<img src="{{ site.baseurl }}common/images/mtf_constraint_arguments_green.png" width="800" />

<span style="color: #21610B; font-weight:bold">Green arrows</span> show that `product` value is transferred to the test and the constraint.

<img src="{{ site.baseurl }}common/images/mtf_constraint_arguments_orange.png" width="800" />

<span style="color: #FF8000; font-weight:bold">Orange arrows</span> show that `category` variable is transferred to the test directly, overwritten by `testCreate()` method and only then transferred to constraint.

<img src="{{ site.baseurl }}common/images/mtf_constraint_arguments_blue.png" width="800"/>

<span style="color: #0000FF; font-weight:bold">Blue arrow</span> shows that `price` value is transferred to the constraint only.

### Constraint in the test {#mtf_constraint_variation}

A [test case][]'s constraints are nodes in variations of a data set. The data set has references to the PHP classes with assertions.

Constraints are performed in order they listed in the data set. However, you can use `prev` (previous) and `next` attributes to set your custom order.

{%highlight xml%}
<constraint name="Magento\Catalog\Test\Constraint\AssertCategorySaveMessage" next="Magento\Catalog\Test\Constraint\AssertCategoryForm"/>
<constraint name="Magento\Catalog\Test\Constraint\AssertCategoryForm" prev="Magento\Catalog\Test\Constraint\AssertCategorySaveMessage" next="Magento\Catalog\Test\Constraint\AssertCategoryPage"/>
<constraint name="Magento\Catalog\Test\Constraint\AssertCategoryPage" prev="Magento\Catalog\Test\Constraint\AssertCategoryForm" />
{%endhighlight%}

<div class="bs-callout bs-callout-warning">
    <p>Constraint failure causes interruption of constraints execution within variation, and a test continues to perform from the next variation.</p>
</div>

A test can contain constraints from different modules.

<div class="bs-callout bs-callout-warning">
  <p>Be careful when you use constraints from another module. A module that is referred by constraint can be disabled, that fails in the test execution. It is safe to use constraints of different modules in one test case if that modules have hard dependencies.
  </p>
</div>

The following example shows the `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/TestCase/DeleteWidgetEntityTest.xml` [data set][] with two constraints. 

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

Immediately after the test steps complete, both constraints are performed in the order listed.

### Tagging

Tagging enables you to indicate what constraints must be called.

You can tag constraints in `<module>/Test/etc/di.xml` using a `severity` argument. Severity tagging of constraints is used for the customization of test run.

You can use the following severity tags:

- `high`
- `middle`
- `low`

To assign severity tags do the following:

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

Use case: We want to assert widget availability in a widget grid.

Step 1. What module does it belong?
  
  Widget grid and widget fixture are related to the Magento_Widget module.
  Thus, we need to create constraint in the Magento_Widget module, in `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Constraint`.
  
Step 2. What name should constraint have?
  
  Using [constraint naming principle](#mtf_constraint_assert), the constraint should be named as `AssertWidgetInGrid`.

Step 3. Create `<magento2>/dev/tests/functional/tests/app/Magento/Widget/Test/Constraint/AssertWidgetInGrid.php` with [required structure](#mtf_constraint_assert)

{% highlight php %}

<?php

namespace Magento\Widget\Test\Constraint;

use Magento\Mtf\Constraint\AbstractConstraint;

/**
 * Assert widget is available in widget grid.
 */
class AssertWidgetInGrid extends AbstractConstraint
{
    /**
     * Assert widget availability in widget grid.
     * 
     * @return void
     */
    public function processAssert()
    {

    }

    /**
     * Returns a string representation of the object.
     *
     * @return string
     */
    public function toString()
    {
        return 'Widget is present in widget grid.';
    }
}

{% endhighlight %}

Step 4. Implement assertion in `processAssert()`

**Assertion logic**: Take title of the widget from the widget [fixture][], open the page with a grid, check if the grid has our title.

{% highlight php %}

<?php

namespace Magento\Widget\Test\Constraint;

use Magento\Widget\Test\Fixture\Widget;
use Magento\Widget\Test\Page\Adminhtml\WidgetInstanceIndex;
use Magento\Mtf\Constraint\AbstractConstraint;

/**
 * Assert widget is available in widget grid.
 */
class AssertWidgetInGrid extends AbstractConstraint
{
    /**
     * Assert widget availability in widget grid.
     * 
     * @return void
     */
    public function processAssert(Widget $widget, WidgetInstanceIndex $widgetInstanceIndex)
    {
        $filter = ['title' => $widget->getTitle()];
        $widgetInstanceIndex->open();
        \PHPUnit_Framework_Assert::assertTrue(
            $widgetInstanceIndex->getWidgetGrid()->isRowVisible($filter),
            'Widget with title \'' . $widget->getTitle() . '\' is absent in Widget grid.'
        );
    }

    /**
     * Returns a string representation of the object.
     *
     * @return string
     */
    public function toString()
    {
        return 'Widget is present in widget grid.';
    }
}

{% endhighlight %}

## How to use constraint {#mtf_constraint_use}

To use constraint we've created in previous section, add a corresponding node to the [data set][] of your test

{%highlight xml%}
<constraint name="Magento\Widget\Test\Constraint\AssertWidgetInGrid" />
{%endhighlight%}

in the order that it must be performed.

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

<!-- LINK DEFINITIONS -->

[data set]: {{page.baseurl}}mtf/mtf_entities/mtf_dataset.html
[fixture]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html
[test case]: {{page.baseurl}}mtf/mtf_entities/mtf_testcase.html
