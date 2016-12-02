---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Functional Testing Framework
menu_title: Typified element
menu_order: 5
version: 2.0
github_link: mtf/mtf_entities/mtf_typified-element.md
---

## Overview {#mtf_typified-element_overview}

A typified element is an element of the GUI (Select, Multiselect etc). Magento has custom typified elements with a special logic, for example: Customized Select, Suggest Dropdown, Store View Selector. Typified elements are often used as elements of a form or a grid.

Functional Testing Framework (FTF) enables you to test any typified element.

![A typified element example in the browser]

This example shows the `optgroup` typified element. You can use the [`\Magento\Mtf\Client\Element\OptgroupselectElement`][] class to test it.

This topic discusses how to create classes for a typified element and to use them in tests.

## Structure {#structure}

### General {#general}

A typified element class in the FTF contains methods to be used in the test to manipulate typified elements in the Magento application. You can extend a [basic class](#basic_class) or a [Magento class](#magento_class) to cover your typified element.

<div class="bs-callout bs-callout-tip">
  <p>The most important methods are <code>setValue()</code> and <code>getValue()</code>. These methods are required when you work with a form.</p>
</div>

### Classes and relations with UI {#classes}

There are two types of typified elements: default typified elements and Magento custom typified elements.
 
 * Default typified elements are the web elements that are typically used in a web application
  
 * Magento custom typified elements are the web elements that are specific to the Magento application

#### Default typified elements {#basic_class}

Default typified elements are stored in the `<magento2_root_dir>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Client/Element` directory.

A root class for a typified element is the [`\Magento\Mtf\Client\Element\SimpleElement`][] class. This class implements [`ElementInterface`][] which contains methods such as `click()`, `doubleClick()`, `isVisible()`, `setValue()`, `getValue()`, `getText()`, `find()`, `dragAndDrop()`, `getElements()` etc.

| UI element | FTF class | Notes|
|---|---|---|
| `<input type="checkbox" />`  |[`\Magento\Mtf\Client\Element\CheckboxElement`][]| Extends [SimpleElement][]  |
| `<select multiple />`  |[`\Magento\Mtf\Client\Element\MultiselectElement`][]| Extends [SelectElement][]  |
|`<input type="radio" />` |[`\Magento\Mtf\Client\Element\RadiobuttonElement`][]| Extends [SimpleElement][] |
| `<select />`  |[`\Magento\Mtf\Client\Element\SelectElement`][]| Extends [SimpleElement][] |
| `<select multiple />`  |[`\Magento\Mtf\Client\Element\StrictmultiselectElement`][]| Extends [MultiselectElement][]. `setValue()` sets the exact value, as opposed to [MultiselectElement][]. | 	
| `<select />` |[`\Magento\Mtf\Client\Element\StrictselectElement`][]| Extends [SelectElement][]. `setValue()` sets the exact value, as opposed to [SelectElement][]. |

#### Magento custom typified elements {#magento_class}

Magento custom typified elements are stored in the `<magento2_root_dir>/dev/tests/functional/lib/Magento/Mtf/Client/Element` directory.

| UI element | FTF class | Notes|
|---|---|---|
| `<div class="rule-tree" />`  | [`\Magento\Mtf\Client\Element\ConditionsElement`][]| Extends [SimpleElement][] |
| `<div id="ui-datepicker-div" />` | [`\Magento\Mtf\Client\Element\DatepickerElement`][]   | Extends [SimpleElement][]   |
| `<div class="action-select admin__action-multiselect" />` | [`\Magento\Mtf\Client\Element\DropdownmultiselectElement`][]   | Extends [MultiselectElement][]   |
| `<div class="search-global" />` | [`\Magento\Mtf\Client\Element\GlobalsearchElement`][]   | Extends [SimpleElement][]   |
| `<div class="tree x-tree jstree" />` | [`\Magento\Mtf\Client\Element\JquerytreeElement`][]   | Extends [Tree][]   |
| `<div class="store-switcher />` | [`\Magento\Mtf\Client\Element\LiselectstoreElement`][]   | Extends [SimpleElement][]   |
| `<select class="admin__control-multiselect">` &nbsp;&nbsp;&nbsp;&nbsp;`<option />` <br/> &nbsp;&nbsp;&nbsp;&nbsp;`<optgroup />` <br/>  `</select>` | [`\Magento\Mtf\Client\Element\MultiselectgrouplistElement`][]   | Extends [MultiselectElement][]. Contains `option` and `optgroup` elements.   |
| `<section class="block mselect-list" />` | [`\Magento\Mtf\Client\Element\MultiselectlistElement`][]   | Extends [MultiselectElement][]   |
| `<div class="mage-suggest" />` | [`\Magento\Mtf\Client\Element\MultisuggestElement`][]   | Extends [SuggestElement][]. Allows multiple selection.   |
| `<select>`   <br/>  &nbsp;&nbsp;&nbsp;&nbsp;`<optgroup />` <br/> &nbsp;&nbsp;&nbsp;&nbsp;`<optgroup />` <br/>  `</select>` | [`\Magento\Mtf\Client\Element\OptgroupselectElement`][]   | Extends [SelectElement][]. Contains `optgroup` elements.|
| `<select>` <br/>  &nbsp;&nbsp;&nbsp;&nbsp;`<option />` <br/> &nbsp;&nbsp;&nbsp;&nbsp;`<optgroup />` <br/>  `</select>` | [`\Magento\Mtf\Client\Element\SelectstoreElement`][]   | Extends [SelectElement][]. Contains `option` and `optgroup` elements.  |
| `<select class="admin__control-select">`  <br/> &nbsp;&nbsp;&nbsp;&nbsp;`<optgroup>` <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<option data-title/>` <br/> &nbsp;&nbsp;&nbsp;&nbsp;`</optgroup>` <br/> `</select>`| [`\Magento\Mtf\Client\Element\SimplifiedselectElement`][]   | Extends [SelectElement][]. Contains `option` and `optgroup` elements. `option` has a `data-title` attribute. |
| `<div class="mage-suggest" />` | [`\Magento\Mtf\Client\Element\SuggestElement`][]   | Extends [SimpleElement][]   |
| Not available | [`\Magento\Mtf\Client\Element\Tree`][]   | Abstract class  |
| `<div class="tree x-tree" />` | [`\Magento\Mtf\Client\Element\TreeElement`][]   | Extends [Tree][]   |

## How to create a class for the typified element {#create}

__Step 1.__ Create a PHP class in the `<magento2_root_dir>/dev/tests/functional/lib/Magento/Mtf/Client/Element` directory
 
 It must be named according to the following naming convention. Two capital letters in the name: the first letter and a capital `E` in the `Element.php`. For example: `OptgroupselectElement.php`.
 
{%highlight php %}
 
 <?php

 namespace Magento\Mtf\Client\Element;
 /**
  * Typified element class for option group selectors.
  */
 class OptgroupselectElement
 {
    //
 }
  {%endhighlight %}
 
__Step 2.__ Extend your class from the [default element](#basic_class) or the [Magento custom element](#magento_class) class

{%highlight php startinline=1%} 
class OptgroupselectElement extends SelectElement
{%endhighlight %}

__Step 3.__ Redefine methods of the extended class according to your goals

{%highlight php startinline=1%}
/**
 * Option group locator
 *
 * @var string
 */
protected $optionGroupValue = ".//optgroup[@label = '%s']/option[text() = '%s']";

/**
 * Select value in dropdown that has option groups
 *
 * @param string $value
 * @return void
 */
public function setValue($value)
{
    $this->eventManager->dispatchEvent(['set_value'], [__METHOD__, $this->getAbsoluteSelector()]);
    list($group, $option) = explode('/', $value);
    $xpath = sprintf($this->optionGroupValue, $group, $option);
    $option = $this->find($xpath, Locator::SELECTOR_XPATH);
    $option->click();
}
{%endhighlight %}

## How to use {#use}

Typified elements are used in the [FTF blocks][].
Use a `find()` method to find an element. This method is declared in the [SimpleElement][] class:

{%highlight php startinline=1%}
/**
 * Find element using locator in context of current element
 *
 * @param string $selector
 * @param string $strategy [optional]
 * @param null|string $type [optional]
 * @return ElementInterface
 */
public function find($selector, $strategy = Locator::SELECTOR_CSS, $type = null)
{
    return $this->driver->find($selector, $strategy, $type, $this);
}
{%endhighlight%}

The following code is an example of the `find()` method usage from the [\Magento\Catalog\Test\Block\Adminhtml\Category\Tree][] block:

{%highlight php startinline=1%}
/**
 * Check category in category tree
 *
 * @param Category $category
 * @return bool
 */
public function isCategoryVisible(Category $category)
{
    $categoryPath = $this->prepareFullCategoryPath($category);
    $categoryPath = implode('/', $categoryPath);
    return $this->_rootElement->find($this->treeElement, Locator::SELECTOR_CSS, 'tree')
        ->isElementVisible($categoryPath);
}
{%endhighlight%}

### Mapping {#mapping}

Typified elements can be used in the [form mapping][].

![A typified element mapping example in GUI]

The following code is a corresponding mapping with the typified element `optgroupselect` from the previous image:

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


<!-- PICTURE DEFINITIONS -->

[A typified element mapping example in GUI]: {{site.baseurl}}common/images/ftf/mtf_typ_element_map_gui.png
[A typified element example in the browser]: {{site.baseurl}}common/images/ftf/mtf_typ_element_brows.png


<!-- LINK DEFINITIONS -->

<!-- General -->
[`ElementInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/ElementInterface.php
[form mapping]: {{page.baseurl}}mtf/mtf_entities/mtf_block.html#mtf_block_mapping
[`\Magento\Mtf\Client\Element\OptgroupselectElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/OptgroupselectElement.php
[`<magento2_root_dir>/dev/tests/functional/lib/Magento/Mtf/Client/Element`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element
[FTF blocks]: {{page.baseurl}}mtf/mtf_entities/mtf_block.html
[\Magento\Catalog\Test\Block\Adminhtml\Category\Tree]: {{site.mage2000url}}dev/tests/functional/tests/app/Magento/Catalog/Test/Block/Adminhtml/Category/Tree.php

<!-- Basic classes -->
[`\Magento\Mtf\Client\Element\SimpleElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SimpleElement.php
[SimpleElement]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SimpleElement.php
[`\Magento\Mtf\Client\Element\CheckboxElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/CheckboxElement.php
[`\Magento\Mtf\Client\Element\MultiselectElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/MultiselectElement.php
[MultiselectElement]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/MultiselectElement.php
[`\Magento\Mtf\Client\Element\RadiobuttonElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/RadiobuttonElement.php
[`\Magento\Mtf\Client\Element\SelectElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SelectElement.php
[SelectElement]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/SelectElement.php
[`\Magento\Mtf\Client\Element\StrictmultiselectElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/StrictmultiselectElement.php
[`\Magento\Mtf\Client\Element\StrictselectElement`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Element/StrictselectElement.php

<!-- Magento classes -->
[`\Magento\Mtf\Client\Element\ConditionsElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/ConditionsElement.php
[`\Magento\Mtf\Client\Element\DatepickerElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/DatepickerElement.php
[`\Magento\Mtf\Client\Element\DropdownmultiselectElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/DropdownmultiselectElement.php
[`\Magento\Mtf\Client\Element\GlobalsearchElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/GlobalsearchElement.php
[`\Magento\Mtf\Client\Element\JquerytreeElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/JquerytreeElement.php
[`\Magento\Mtf\Client\Element\LiselectstoreElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/LiselectstoreElement.php
[`\Magento\Mtf\Client\Element\MultiselectgrouplistElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/MultiselectgrouplistElement.php
[`\Magento\Mtf\Client\Element\MultiselectlistElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/MultiselectlistElement.php
[`\Magento\Mtf\Client\Element\MultisuggestElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/MultisuggestElement.php
[`\Magento\Mtf\Client\Element\OptgroupselectElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/OptgroupselectElement.php
[`\Magento\Mtf\Client\Element\SelectstoreElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SelectstoreElement.php
[`\Magento\Mtf\Client\Element\SimplifiedselectElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SimplifiedselectElement.php
[`\Magento\Mtf\Client\Element\SuggestElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SuggestElement.php
[SuggestElement]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/SuggestElement.php
[`\Magento\Mtf\Client\Element\Tree`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/Tree.php
[Tree]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/Tree.php
[`\Magento\Mtf\Client\Element\TreeElement`]: {{site.mage2000url}}dev/tests/functional/lib/Magento/Mtf/Client/Element/TreeElement.php

<!-- ABBREVIATIONS -->
*[FTF]: Functional Testing Framework
