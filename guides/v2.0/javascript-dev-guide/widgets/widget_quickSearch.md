---
layout: default
group: jsdg
subgroup: 3_Widgets
title: QuickSearch widget
menu_order: 13
menu_title: QuickSearch widget
version: 2.0
github_link: javascript-dev-guide/widgets/widget_quickSearch.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_quickSearch.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_quickSearch.html
---

<h2>Overview</h2>

The quickSearch widget is a custom autocomplete widget that populates a list of suggested search terms for a given field. 

The suggest widget source is <a href="{{site.mage2000url}}app/code/Magento/Search/view/frontend/web/form-mini.js" target="_blank"><code>&lt;Magento_Search_module_dir&gt;/view/frontend/web/form-mini.js</code></a>.

<h2 id="quicksearch_init">Initialize the quickSearch widget</h2>
For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{page.baseurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.


<h2 id="quicksearch_options">Options</h2>
<ul>
<li><a href="#q_autocomplete">autocomplete</a></li>
<li><a href="#q_formSelector">formSelector</a></li>
<li><a href="#q_minSearchLength">minSearchLength</a></li>
<li><a href="#q_responseFieldElements">responseFieldElements</a></li>
<li><a href="#q_searchLabel">searchLabel</a></li>
<li><a href="#q_selectClass">selectClass</a></li>
<li><a href="#q_submitBtn">submitBtn</a></li>
<li><a href="#q_template">template</a></li>
</ul>


<h3 id="q_autocomplete"><code>autocomplete</code></h3>
Attaches the `autocomplete` attribute to the search field.

**Type**: String

**Default value**: `off`

**Accepted values**: `off`, `on`


<h3 id="q_formSelector"><code>formSelector</code></h3>
The form selector containing the search input field.

**Type**: String 

**Default value**: No form by default.


<h3 id="q_minSearchLength"><code>minSearchLength</code></h3>
Minimum number of characters required before the auto suggest triggers.

**Type**: Integer

**Default value**: `2`

<h3 id="q_responseFieldElements"><code>responseFieldElements</code></h3>
Selector for the response elements.

**Type**: String

**Default Value**: `ul li`

<h3 id="q_searchLabel"><code>searchLabel</code></h3>
Selector of a search input label.

**Type**: String

**Default value**: `[data-role=minisearch-label]`

<h3 id="q_selectClass"><code>selectClass</code></h3>
Class assigned to the selected suggested term.

**Type**: String

**Default value**: `selected`

<h3 id="q_submitBtn"><code>submitBtn</code></h3>
Disable the submit button. 

**Type**: String

**Default value**: `button[type="submit"]`

<h3 id="q_template"><code>template</code></h3>
Template responsible for rendering returned data (suggested terms).

**Type**: String

**Default value**: `<li></li>` element.


