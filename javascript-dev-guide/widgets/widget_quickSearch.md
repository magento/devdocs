---
group: javascript-developer-guide
subgroup: 3_Widgets
title: QuickSearch widget
menu_order: 13
menu_title: QuickSearch widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_quickSearch.html
functional_areas:
  - Search
---

## Overview

The quickSearch {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} is a custom autocomplete widget that populates a list of suggested search terms for a given field. 

The suggest widget source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Search/view/frontend/web/form-mini.js" target="_blank"><code>&lt;Magento_Search_module_dir&gt;/view/frontend/web/form-mini.js</code></a>.

## Initialize the quickSearch widget   {#quicksearch_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

## Options   {#quicksearch_options}

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


### `autocomplete`   {#q_autocomplete}

Attaches the `autocomplete` attribute to the search field.

**Type**: String

**Default value**: `off`

**Accepted values**: `off`, `on`


### `formSelector`   {#q_formSelector}

The form selector containing the search input field.

**Type**: String 

**Default value**: No form by default.


### `minSearchLength`   {#q_minSearchLength}

Minimum number of characters required before the auto suggest triggers.

**Type**: Integer

**Default value**: `2`

### `responseFieldElements`   {#q_responseFieldElements}

Selector for the response elements.

**Type**: String

**Default Value**: `ul li`

### `searchLabel`   {#q_searchLabel}

Selector of a search input label.

**Type**: String

**Default value**: `[data-role=minisearch-label]`

### `selectClass`   {#q_selectClass}

Class assigned to the selected suggested term.

**Type**: String

**Default value**: `selected`

### `submitBtn`   {#q_submitBtn}

Disable the submit button. 

**Type**: String

**Default value**: `button[type="submit"]`

### `template`   {#q_template}

Template responsible for rendering returned data (suggested terms).

**Type**: String

**Default value**: `<li></li>` element.


