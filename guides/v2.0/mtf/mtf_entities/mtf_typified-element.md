---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Typified element
menu_order: 5
github_link: mtf/mtf_entities/mtf_typified-element.md
---

<h2>Typified element</h2>

* TOC
{:toc}

## Overview {#mtf_typified-element_overview}

A typified element is a customized, specific part of the GUI with a special logic, for example: Customized Select, Suggest Dropdown, Store View Selector, and so on. All typified elements are the elements of a form.

![Typified element example in browser]({{site.baseurl}}common/images/mtf_typ_element_brows.png)

This example shows the `optgroup` typified element. You can use the [`\Magento\Mtf\Client\Element\OptgroupselectElement`][] class to test it.

This topic discusses how to create classes for a typified element. Also you can learn how to use typified element.

## Structure {#structure}

### Parent class {#parent_class}

Each typified element extends basic class [`\Mtf\Client\Element\SimpleElement`][]. This class implements [`ElementInterface`][] which contains methods such as `click()`, `doubleClick()`, `isVisible()`, `setValue()`, `getValue()`, `getText()`, `find()`, `dragAndDrop()`, `getElements()` etc.

<div class="bs-callout bs-callout-tip">
  <p>As far as all typified elements are the form elements, the most important methods are <code>setValue()</code> and <code>getValue()</code>. These methods are required when you work with form.</p>
</div>

### Basic classes {#basic_class}

All the basic typified elements in the MTF are stored in the `<magento2>\dev\tests\functional\vendor\magento\mtf\Mtf\Client\Element` directory.

### Specific classes {#specific_class}

All the specific typified elements are stored in the `<magento2>\dev\tests\functional\lib\Mtf\Client\Element` directory.

## Mapping {#mapping}

Typified elements can be used in the [form mapping][].

![Typified element mapping example in GUI]({{site.baseurl}}common/images/mtf_typ_element_map_gui.png)

The following is a corresponding mapping with the typified element `optgroupselect`:

{%highlight xml%}
<mapping strict="0">
    <wrapper>store</wrapper>
    <fields>
        <group_id>
            <input>optgroupselect</input>
        </group_id>
        <name />
        <code />
        <is_active>
            <input>select</input>
        </is_active>
    </fields>
</mapping>
{%endhighlight%}

## How to create a class for the typified element {#create}

__Step 1.__ Create a PHP class in the `Magento/Mtf/Client/Element` directory. It must be named according to the following naming convention:

 - There is only 2 capital letters in their names
 - The first letter and a capital `E` in the `Element.php`
 - For example: `MultiselectgrouplistElement.php`
 
__Step 2.__ Extend your class from the [`\Magento\Mtf\Client\Element\SimpleElement`][] [basic class](#basic_class) 

__Step 3.__ Redefine methods of the basic class according to your goals

## How to use {#use}

Use a `find()` method to find the element in the MTF. Put a name of the element that you want to find as a third argument in the method. The name of the element should be the lowercase name of the class but excluding the part `Element`. If a return value is `null`, _simple form input_ is used. For example,

{%highlight php startinline=1%}
/** @var \Mtf\Client\Driver\Selenium\Element\MultiselectlistElement $taxRates */
$taxRates = $this->_rootElement->find($this->taxRateBlock, Locator::SELECTOR_CSS, 'multiselectlist');
return $taxRate->isValueVisible($value);
{%endhighlight%}

[`\Magento\Mtf\Client\Element\SimpleElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SimpleElement.php
[`ElementInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/ElementInterface.php
[form mapping]: {{site.gdeurl}}mtf/mtf_entities/mtf_block.html#mtf_block_mapping
[`\Magento\Mtf\Client\Element\OptgroupselectElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/OptgroupselectElement.php

*[MTF]: Magento Testing Framework
