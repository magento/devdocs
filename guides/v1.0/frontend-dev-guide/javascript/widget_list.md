---
layout: default
group: fedg
subgroup: Javascript
title: Magento Navigation widget
menu_order: 2
menu_title: Magento Navigation widget
github_link: frontend-dev-guide/javascript/widget_list.md
---
<h2>Overview</h2>

Magento List is a widget that provides developers a way to move items from one content section to another(typically a list).
The content can be moved using buttons and links. Once the content is moved the option to remove the element from the destination is passed to the item that was relocated. The widget also has the option to set a limit to the number of items that can be added to the destination. 

The List widget source file is <a href="{{site.mage2000url}}">lib/web/mage/list.js</a>.

<h2>Options</h2>

<ul>
<li><a href="#l_template">template</a></li>
<li><a href="#l_templateWrapper">templateWrapper</a></li>
<li><a href="#l_templateClass">templateClass</a></li>
<li><a href="#l_destinationSelector">destinationSelector</a></li>
<li><a href="#l_itemIndex">itemIndex</a></li>
<li><a href="#l_itemCount">itemCount</a></li>
<li><a href="#l_addButton">addButton</a></li>
<li><a href="#l_removeButton">removeButton</a></li>
<li><a href="#l_maxItems">maxItems</a></li>
<li><a href="#l_maxItemsAlert">maxItemsAlert</a></li>
</ul>

<h3 id="#l_template">template</h3>
Specifies the template for added item

Type: String

Default value: [data-role=item]


<h3 id="#l_templateWrapper">templateWrapper</h3>
Containing element for template

Type: String

Default value: null

<h3 id="#l_templateClass">templateClass</h3>
Class attached to template wrapper

Type: String

Default value: [data-role=container]

<h3 id="#l_destinationSelector">destinationSelector</h3>
Specifies the content destination that the item will be appended to

Type: String

Default value: [data-role=container]

<h3 id="#l_itemIndex">itemIndex</h3>
Number of current item

Type: int

Default value: 0

<h3 id="#l_itemCount">itemCount</h3>
Number of total items

Type: int 

Default value: 0

<h3 id="#l_addButton">addButton</h3>
Selector for the add element, applied to item. 

Type: String

Default value: [data-button=remove]

<h3 id="#l_removeButton">removeButton</h3>
Selector for the remove element, applied to item. 

Type: String

Default value: [data-button=remove]

<h3 id="#l_maxItems">maxItems</h3>
Specifies the number of list items that can be added to destination.

Type: int

Default value: null

<h3 id="#l_maxItemsAlert">maxItemsAlert</h3>
Specifies the alert message displayed when max limit reached.

Type: String

Default value: [data-button=remove]

<h2 id="list_methods">Methods</h2>
destroy()

Removes the added list items from the destination.

This method does not accept any arguments.
Code examples:
Invoke the destroy method:
$( "#element" ).list("destroy");
<p class="q">In the code "destroy" is private, though there's a couple of public methods not documented by Optaros</p>