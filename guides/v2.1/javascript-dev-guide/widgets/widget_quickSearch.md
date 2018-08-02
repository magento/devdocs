---
group: jsdg
subgroup: 3_Widgets
title: QuickSearch widget
menu_order: 13
menu_title: QuickSearch widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_quickSearch.md
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_quickSearch.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_quickSearch.html
functional_areas:
  - Search
---

## Overview

The quickSearch {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} is a custom autocomplete widget that populates a list of suggested search terms for a given field. 

The suggest widget source is [<code>&lt;Magento_Search_module_dir&gt;/view/frontend/web/form-mini.js</code>]({{ site.mage2000url }}app/code/Magento/Search/view/frontend/web/form-mini.js" target="_blank).

## Initialize the quickSearch widget {#quicksearch_init}
For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank) topic.


## Options {#quicksearch_options}
<ul>
<li>[autocomplete](#q_autocomplete)</li>
<li>[formSelector](#q_formSelector)</li>
<li>[minSearchLength](#q_minSearchLength)</li>
<li>[responseFieldElements](#q_responseFieldElements)</li>
<li>[searchLabel](#q_searchLabel)</li>
<li>[selectClass](#q_selectClass)</li>
<li>[submitBtn](#q_submitBtn)</li>
<li>[template](#q_template)</li>
</ul>


### <code>autocomplete</code> {#q_autocomplete}
Attaches the `autocomplete` attribute to the search field.

**Type**: String

**Default value**: `off`

**Accepted values**: `off`, `on`


### <code>formSelector</code> {#q_formSelector}
The form selector containing the search input field.

**Type**: String 

**Default value**: No form by default.


### <code>minSearchLength</code> {#q_minSearchLength}
Minimum number of characters required before the auto suggest triggers.

**Type**: Integer

**Default value**: `2`

### <code>responseFieldElements</code> {#q_responseFieldElements}
Selector for the response elements.

**Type**: String

**Default Value**: `ul li`

### <code>searchLabel</code> {#q_searchLabel}
Selector of a search input label.

**Type**: String

**Default value**: `[data-role=minisearch-label]`

### <code>selectClass</code> {#q_selectClass}
Class assigned to the selected suggested term.

**Type**: String

**Default value**: `selected`

### <code>submitBtn</code> {#q_submitBtn}
Disable the submit button. 

**Type**: String

**Default value**: `button[type="submit"]`

### <code>template</code> {#q_template}
Template responsible for rendering returned data (suggested terms).

**Type**: String

**Default value**: `<li></li>` element.


