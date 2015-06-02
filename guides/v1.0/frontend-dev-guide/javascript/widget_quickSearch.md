---
layout: default
group: fedg
subgroup: Javascript
title: Magento quickSearch widget
menu_order: 2
menu_title: Magento quickSearch widget
github_link: frontend-dev-guide/javascript/widget_quickSearch.md
---

<h2>Overview</h2>

The quickSearch widget is a custom autocomplete widget that populates a list of suggest search terms for the given field. 

The Suggest widget source is <a href="{{site.mage2000url}}app/code/Magento/Search/view/frontend/web/form-mini.js">app/code/Magento/Search/view/frontend/web/form-mini.js</a>.

<h2 id="quicksearch_init">Inititalization</h2>



<h2 id="quicksearch_options">Options</h2>
<ul>
<li><a href="#q_autocomplete">autocomplete</a></li>
<li><a href="#q_minSearchLength">minSearchLength</a></li>
<li><a href="#q_responseFieldElements">responseFieldElements</a></li>
<li><a href="#q_selectClass">selectClass</a></li>
<li><a href="#q_template">template</a></li>
<li><a href="#q_submitBtn">submitBtn</a></li>
<li><a href="#q_searchLabel">searchLabel</a></li>
</ul>

<h3 id="q_autocomplete">autocomplete</h3>
Attaches the `autocomplete` attribute to the search field.

**Type**: String

**Default value**: *'off'*

Accepted values: off, on

<h3 id="q_formSelector">formSelector</h3>
The form selector containing the search input field.

**Type**: String 

**Default value**: No form by default.

<p class="q">Don't see this option (formSelector) in code</q>

<h3 id="q_minSearchLength">minSearchLength</h3>
Minimum number of characters required before the auto suggest triggers.

**Type**: Integer

**Default value**: 2

<h3 id="q_responseFieldElements">responseFieldElements</h3>
Selector for the response elements.

**Type**: String

**Default Value**: *'ul li'*

<h3 id="q_selectClass">selectClass</h3>
Class assigned to the selected suggested term.

**Type**: String
**Default value**: `'selected'`

<h3 id="q_template">template</h3>
Template responsible for rendering returned data(suggested terms).

**Type**: String

**Default value**: `<li></li>` element 


<h3 id="q_submitBtn">submitBtn</h3>
Disable the submit button. 

**Type**: String

**Default value**: *'button[type="submit"]'*

<h3 id="q_searchLabel">searchLabel</h3>
Selector of a search input label.

**Type**: String

**Default value**: *'[data-role=minisearch-label]'*

<p class="q">these ones I don't see in code</q>



