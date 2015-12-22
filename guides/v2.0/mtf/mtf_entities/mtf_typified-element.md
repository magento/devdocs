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

A typified element is an element of the GUI (Select, Multiselect etc). Magento has custom typified elements with a special logic, for example: Customized Select, Suggest Dropdown, Store View Selector. Typified elements are used as elements of a form or a grid.

The MTF enables you to use its classes to test any typified element.

![Typified element example in browser]

This example shows the `optgroup` typified element. You can use the [`\Magento\Mtf\Client\Element\OptgroupselectElement`][] class to test it.

This topic discusses how to create classes for a typified element and use them.

## Structure {#structure}

### General

A typified element class in the MTF contains methods to be used in the test to manipulate the Magento typified element. You can extend a [basic class](#basic_class), or a [Magento class](#magento_class) to cover your typified element.

<div class="bs-callout bs-callout-tip">
  <p>The most important methods are <code>setValue()</code> and <code>getValue()</code>. These methods are required when you work with the form.</p>
</div>

### Classes and relations with UI

#### Default typified elements {#basic_class}

Basic typified elements are the web elements typically used in a web application. They are stored in the [`<magento2>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Client/Element`][] directory.

A root class for a typified element is the [`\Magento\Mtf\Client\Element\SimpleElement`][] class. This class implements [`ElementInterface`][] which contains methods such as `click()`, `doubleClick()`, `isVisible()`, `setValue()`, `getValue()`, `getText()`, `find()`, `dragAndDrop()`, `getElements()` etc.

| UI element | MTF class | Notes|
|---|---|---|
| `<input type="checkbox" />`  |[`/Magento/Mtf/Client/Element/CheckboxElement.php`][]| Extends [SimpleElement][]  |
| `<select multiple>`  |[`/Magento/Mtf/Client/Element/MultiselectElement.php`][]| Extends [SelectElement][]  |
|`<input type="radio" />` |[`/Magento/Mtf/Client/Element/RadiobuttonElement.php`][]| Extends [SimpleElement][] |
| `<select>`  |[`/Magento/Mtf/Client/Element/SelectElement.php`][]| Extends [SimpleElement][] |
| `<select multiple>`  |[`/Magento/Mtf/Client/Element/StrictmultiselectElement.php`][]| Extends [MultiselectElement][]. `setValue()` sets the exact value, as opposed to [MultiselectElement][]. | 	
| `<select>` |[`/Magento/Mtf/Client/Element/StrictselectElement.php`][]| Extends [SelectElement][]. `setValue()` sets the exact value, as opposed to [SelectElement][]. |

#### Magento typified elements {#magento_class}

Magento typified elements are the web elements specific to the Magento application. They are stored in the [`<magento2>/dev/tests/functional/lib/Magento/Mtf/Client/Element`][] directory.

| UI element | MTF class | Notes|
|---|---|---|
|   | [`/Magento/Mtf/Client/Element/ConditionsElement.php`][]| Extends [SimpleElement][] |
|  | [`/Magento/Mtf/Client/Element/DatepickerElement.php`][]   | Extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/DropdownmultiselectElement.php`][]   | Extends [MultiselectElement][]   |
|  | [`/Magento/Mtf/Client/Element/GlobalsearchElement.php`][]   | Extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/JquerytreeElement.php`][]   | Extends [Tree][]   |
|  | [`/Magento/Mtf/Client/Element/LiselectstoreElement.php`][]   | Extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/MultiselectgrouplistElement.php`][]   | Extends [MultiselectElement][]   |
|  | [`/Magento/Mtf/Client/Element/MultiselectlistElement.php`][]   | Extends [MultiselectElement][]   |
|  | [`/Magento/Mtf/Client/Element/MultisuggestElement.php`][]   | Extends [SuggestElement][]   |
|  | [`/Magento/Mtf/Client/Element/OptgroupselectElement.php`][]   | Extends [SelectElement][]   |
|  | [`/Magento/Mtf/Client/Element/SelectstoreElement.php`][]   | Extends [SelectElement][]   |
|  | [`/Magento/Mtf/Client/Element/SimplifiedselectElement.php`][]   | Extends [SelectElement][]   |
|  | [`/Magento/Mtf/Client/Element/SuggestElement.php`][]   | Extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/Tree.php`][]   | Extends [SimpleElement][]   |
|  | [`/Magento/Mtf/Client/Element/TreeElement.php`][]   | Extends [Tree][]   |

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
 
__Step 2.__ Extend your class from the [basic](#basic_class), or [Magento](#magento_class) class

__Step 3.__ Redefine methods of the extended class according to your goals

## How to use {#use}

Use a `find()` method to find an element. Put a name of the element that you want to find as a third argument in the method. The name of the element should be the lowercase name of the class but excluding the part `Element`. If the method returns the value `null`, simple form input is used.


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

<!-- Magento classes -->
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
