---
layout: default
group: UI_Components_guide
subgroup: concepts
title: About PHP Modifiers in UI components
menu_title: About PHP Modifiers in UI components
menu_order: 7
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_modifier_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## Overview

This topics describes how to use PHP modifiers, that are the server-side part of [UI components configuration]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_architecture_concept.md). Using modifiers is optional, and might be necessary if certain modifications or extensions cannot be performed using the XML configuration.

<p class="q">When should it be used?</p>
<p class="q">Are there alternative ways??</p>

## Common Usage

PHP Modifiers are alternate method of exposure to UI components. Using of modifiers justified if you do not have ability do it with module-specific UI component declaration.

## Adding a PHP modifier

To add a PHP modifier for a UI component, take the following steps:

1. Add a class that implement `\Magento\Ui\DataProvider\Modifier\ModifierInterface` with two methods:
	- `modifyData()`: for modifying UI component's data (for example, the list of options for a select element)
	- `modifyMeta()`: for modifying UI component's metadata (for example, name, label, description, type)
<p class="q">where should I add this class (what directory), what should be its name? should it be "bound" somehow with the UI component it modifiers? My_Module\DataProvider\Modifier\Your_Class?</p>
2. Declare your modifier by adding the following to your module Di configuration `<My_Module>/etc/adminhtml/di.xml`:

   {% highlight xml %}
       <virtualType name="My_Module\Ui\DataProvider\Modifier\Pool" type="Magento\Ui\DataProvider      \Modifier\Pool">
           <arguments>
               <argument name="modifiers" xsi:type="array">
                   <item name="modifier_name" xsi:type="array">
                       <item name="class" xsi:type="string">My_Module\DataProvider\Modifier\Your_Class</item>
                       <item name="sortOrder" xsi:type="number">10</item>
                   </item>
               </argument>
           </arguments>
       </virtualType>
   {% endhighlight %}

http://devdocs.magento.com/guides/v2.0/extension-dev-guide/depend-inj.html

<p class="q">what is sort order, how is it used</p>

3. To be able to use your modifier, to your UI component data provider add a dependency on `\Magento\Ui\DataProvider\Modifier\PoolInterface`. For example, see `\Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider`. 

<p class="q" UI component data provider is it our modifier?</p>
