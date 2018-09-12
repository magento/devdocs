---
group: javascript-developer-guide
subgroup: 3_Widgets
title: QuickSearch widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_quickSearch.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_quickSearch.html
functional_areas:
  - Search
---

## Overview

The quickSearch {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} is a custom autocomplete widget that populates a list of suggested search terms for a given field. 

The suggest widget source is [`<Magento_Search_module_dir>/view/frontend/web/form-mini.js`].

## Initialize the quickSearch widget {#quicksearch_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript] topic.

## Options {#quicksearch_options}

-   [autocomplete](#q_autocomplete)
-   [formSelector](#q_formSelector)
-   [minSearchLength](#q_minSearchLength)
-   [responseFieldElements](#q_responseFieldElements)
-   [searchLabel](#q_searchLabel)
-   [selectClass](#q_selectClass)
-   [submitBtn](#q_submitBtn)
-   [template](#q_template)


### `autocomplete` {#q_autocomplete}
Attaches the `autocomplete` attribute to the search field.

**Type**: String

**Default value**: `off`

**Accepted values**: `off`, `on`


### `formSelector` {#q_formSelector}
The form selector containing the search input field.

**Type**: String 

**Default value**: No form by default.


### `minSearchLength` {#q_minSearchLength}
Minimum number of characters required before the auto suggest triggers.

**Type**: Integer

**Default value**: `2`

### `responseFieldElements` {#q_responseFieldElements}
Selector for the response elements.

**Type**: String

**Default Value**: `ul li`

### `searchLabel` {#q_searchLabel}
Selector of a search input label.

**Type**: String

**Default value**: `[data-role=minisearch-label]`

### `selectClass` {#q_selectClass}
Class assigned to the selected suggested term.

**Type**: String

**Default value**: `selected`

### `submitBtn` {#q_submitBtn}
Disable the submit button. 

**Type**: String

**Default value**: `button[type="submit"]`

### `template` {#q_template}
Template responsible for rendering returned data (suggested terms).

**Type**: String

**Default value**: `<li></li>` element.


[`<Magento_Search_module_dir>/view/frontend/web/form-mini.js`]: {{site.mage2000url}}app/code/Magento/Search/view/frontend/web/form-mini.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
