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
The Suggest widget is also responsible for:
autocomplete
The Suggest widget source is located in the magento/app/code/Magento/CatalogSearch/view/frontend folder.
The Suggest widget uses the code from the CatalogSearch widget. This widget was then refactored to be template agnostic. It will pass a handlebars template into the widget to be rendered by passing in json parameters into the template. 

app/code/Magento/Search/view/frontend/web/form-mini.js

<p class="q">Need to correct to make the overview quickSearch-specific</p>

<h2>Options</h2>
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
The option that attaches a autocomplete attribute to the search field

Type: String

Default value: off by default

Accepted values: off, on

<h3 id="q_formSelector">formSelector</h3>
The form selector containing the search input field

Type: String 

Default value: No form by default.

<h3 id="q_minSearchLength">minSearchLength</h3>
Minimum number of characters required before suggest triggers
Type: Int
Default value: 2

<h3 id="q_responseFieldElements">responseFieldElements</h3>
Selector for the response elements

Type: String

Default Value: ul li

<h3 id="q_selectClass">selectClass</h3>
Class added to selected suggested term
Type: String
Default value: selected

<h3 id="q_template">template</h3>
Template responsible for rendering returned data(suggested terms).

Type: String

Default value: <li>...</li>

<p class="q">these ones not documented</q>
<li><a href="#q_submitBtn">submitBtn</a></li>
Disable the submit button. Selector

<li><a href="#q_searchLabel">searchLabel</a></li>
Selector of a search input label.

<p class="q">these ones I don't see in code</q>

url
The url that returns the autocomplete suggestions

Type: String
Default value: No url by default.

destinationSelector
HTML wrapper for output, or a DOM element selector.
Default value: null


