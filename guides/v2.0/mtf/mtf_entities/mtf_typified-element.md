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

A typified element is an element of the GUI (Select, Multiselect etc). Magento uses typified elements with a special logic, for example: Customized Select, Suggest Dropdown, Store View Selector, and so on. Typified elements are used as elements of a form or a grid.

The MTF enables you to use its classes to test any typified element.

![Typified element example in browser]

This example shows the `optgroup` typified element. You can use the [`\Magento\Mtf\Client\Element\OptgroupselectElement`][] class to test it.

This topic discusses how to create classes for a typified element and use them.

## Structure {#structure}

### General

A typified element class in the MTF contains methods to be used in the test to manipulate the Magento typified element. You can extend a [root class](#root_class), a [basic class](#basic_class), or a [specific class](#specific_class) to cover your typified element.

### Classes and dependencies

#### Root class {#root_class}

The root class for a typified element in the MTF is the [`\Magento\Mtf\Client\Element\SimpleElement`][] class. This class implements [`ElementInterface`][] which contains methods such as `click()`, `doubleClick()`, `isVisible()`, `setValue()`, `getValue()`, `getText()`, `find()`, `dragAndDrop()`, `getElements()` etc.

<div class="bs-callout bs-callout-tip">
  <p>As far as all typified elements are the form elements, the most important methods are <code>setValue()</code> and <code>getValue()</code>. These methods are required when you work with the form.</p>
</div>

#### Basic classes {#basic_class}

Basic typified elements are the web elements typically used in a web application. In the MTF, they are stored in the [`<magento2>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Client/Element`][] directory.

| UI  | MTF class | Notes|
|---|---|---|
| `<input type="checkbox"/>`  |[`/Magento/Mtf/Client/Element/CheckboxElement.php`][]| extends [SimpleElement][]  |
| `<select multiple>`  |[`/Magento/Mtf/Client/Element/MultiselectElement.php`][]| extends [SelectElement][]  |
|`<input type="radio"/>` |[`/Magento/Mtf/Client/Element/RadiobuttonElement.php`][]| extends [SimpleElement][] |
| `<select>`  |[`/Magento/Mtf/Client/Element/SelectElement.php`][]| extends [SimpleElement][] |
| `<select multiple>`  |[`/Magento/Mtf/Client/Element/StrictmultiselectElement.php`][]| extends [MultiselectElement][] | 	
| `<select>` |[`/Magento/Mtf/Client/Element/StrictselectElement.php`][]| extends [SelectElement][] |

#### Specific classes {#specific_class}

Specific typified elements are the web elements specific to the Magento application. In the MTF, they are stored in the [`<magento2>/dev/tests/functional/lib/Magento/Mtf/Client/Element`][] directory.

| UI  | MTF class | Notes|
|---|---|---|
|   | [`/Magento/Mtf/Client/Element/ConditionsElement.php`][]| extends [SimpleElement][] |
|  | [`/Magento/Mtf/Client/Element/DatepickerElement.php`][]   | extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/DropdownmultiselectElement.php`][]   | extends [MultiselectElement][]   |
|  | [`/Magento/Mtf/Client/Element/GlobalsearchElement.php`][]   | extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/JquerytreeElement.php`][]   | extends [Tree][]   |
|  | [`/Magento/Mtf/Client/Element/LiselectstoreElement.php`][]   | extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/MultiselectgrouplistElement.php`][]   | extends [MultiselectElement][]   |
|  | [`/Magento/Mtf/Client/Element/MultiselectlistElement.php`][]   | extends [MultiselectElement][]   |
|  | [`/Magento/Mtf/Client/Element/MultisuggestElement.php`][]   | extends [SuggestElement][]   |
|  | [`/Magento/Mtf/Client/Element/OptgroupselectElement.php`][]   | extends [SelectElement][]   |
|  | [`/Magento/Mtf/Client/Element/SelectstoreElement.php`][]   | extends [SelectElement][]   |
|  | [`/Magento/Mtf/Client/Element/SimplifiedselectElement.php`][]   | extends [SelectElement][]   |
|  | [`/Magento/Mtf/Client/Element/SuggestElement.php`][]   | extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/Tree.php`][]   | extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/TreeElement.php`][]   | extends [Tree][]   |

## Mapping {#mapping}

Typified elements can be used in the [form mapping][].

![Typified element mapping example in GUI]

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

__Step 1.__ Create a PHP class in the `<magento2>/dev/tests/functional/lib/Magento/Mtf/Client/Element` directory.
 
 It must be named according to the following naming convention. Two capital letters in the name: the first letter and a capital `E` in the `Element.php`. For example: `MultiselectgrouplistElement.php`.
 
__Step 2.__ Extend your class from the [root](#root_class), or [basic](#basic_class), or [specific](#specific_class) class

__Step 3.__ Redefine methods of the extended class according to your goals

## How to use {#use}

Use a `find()` method to find an element. Put a name of the element that you want to find as a third argument in the method. The name of the element should be the lowercase name of the class but excluding the part `Element`. If a `return` value is `null`, simple form input is used.


<!-- PICTURE DEFINITIONS -->
[Typified element mapping example in GUI]: {{site.baseurl}}common/images/mtf_typ_element_map_gui.png
[Typified element example in browser]: {{site.baseurl}}common/images/mtf_typ_element_brows.png

<!-- LINK DEFINITIONS -->

[`\Magento\Mtf\Client\Element\SimpleElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SimpleElement.php
[SimpleElement]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SimpleElement.php
[`ElementInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/ElementInterface.php
[form mapping]: {{site.gdeurl}}mtf/mtf_entities/mtf_block.html#mtf_block_mapping
[`\Magento\Mtf\Client\Element\OptgroupselectElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/OptgroupselectElement.php

[`<magento2>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Client/Element`]: https://github.com/magento/mtf/tree/develop/Magento/Mtf/Client/Element
[`<magento2>/dev/tests/functional/lib/Magento/Mtf/Client/Element`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element

<!-- Basic classes -->
[`/Magento/Mtf/Client/Element/CheckboxElement.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/CheckboxElement.php
[`/Magento/Mtf/Client/Element/MultiselectElement.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/MultiselectElement.php
[MultiselectElement]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/MultiselectElement.php
[`/Magento/Mtf/Client/Element/RadiobuttonElement.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/RadiobuttonElement.php
[`/Magento/Mtf/Client/Element/SelectElement.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SelectElement.php
[SelectElement]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SelectElement.php
[`/Magento/Mtf/Client/Element/StrictmultiselectElement.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/StrictmultiselectElement.php
[`/Magento/Mtf/Client/Element/StrictselectElement.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/StrictselectElement.php

<!-- Specific classes -->
[`/Magento/Mtf/Client/Element/ConditionsElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/ConditionsElement.php
[`/Magento/Mtf/Client/Element/DatepickerElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/DatepickerElement.php
[`/Magento/Mtf/Client/Element/DropdownmultiselectElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/DropdownmultiselectElement.php
[`/Magento/Mtf/Client/Element/GlobalsearchElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/GlobalsearchElement.php
[`/Magento/Mtf/Client/Element/JquerytreeElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/JquerytreeElement.php
[`/Magento/Mtf/Client/Element/LiselectstoreElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/LiselectstoreElement.php
[`/Magento/Mtf/Client/Element/MultiselectgrouplistElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/MultiselectgrouplistElement.php
[`/Magento/Mtf/Client/Element/MultiselectlistElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/MultiselectlistElement.php
[`/Magento/Mtf/Client/Element/MultisuggestElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/MultisuggestElement.php
[`/Magento/Mtf/Client/Element/OptgroupselectElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/OptgroupselectElement.php
[`/Magento/Mtf/Client/Element/SelectstoreElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SelectstoreElement.php
[`/Magento/Mtf/Client/Element/SimplifiedselectElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SimplifiedselectElement.php
[`/Magento/Mtf/Client/Element/SuggestElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SuggestElement.php
[SuggestElement]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SuggestElement.php
[`/Magento/Mtf/Client/Element/Tree.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/Tree.php
[Tree]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/Tree.php
[`/Magento/Mtf/Client/Element/TreeElement.php`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/TreeElement.php

<!-- ABBREVIATIONS -->
*[MTF]: Magento Testing Framework
