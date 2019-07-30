---
group: javascript-developer-guide
subgroup: 3_Widgets
title: QuickSearch widget
functional_areas:
  - Search
---

## Overview

The quickSearch [widget](https://glossary.magento.com/widget) is a custom autocomplete widget that populates a list of suggested search terms for a given field. 

The suggest widget source is [`<Magento_Search_module_dir>/view/frontend/web/js/form-mini.js`].

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
-   [isExpandable](#q_isExpandable)

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

**Default value**: 

```html
<li class="<%- data.row_class %>" id="qs-option-<%- data.index %>" role="option">
    <span class="qs-option-name">
       <%- data.title %>
    </span>
    <span aria-hidden="true" class="amount">
       <%- data.num_results %>
    </span>
</li>
```

### `isExpandable` {#q_isExpandable}

The isExpandable option is used to show and hide search input field on devices with max width 768px.

**Type**: Boolean

**Default value**: `null`

### `suggestionDelay` {#q_suggestionDelay}

The suggestionDelay option prevents spamming the server with requests by waiting till the user has stopped typing for period of time.

**Type**: Integer

**Default value**: `300`

[`<Magento_Search_module_dir>/view/frontend/web/js/form-mini.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Search/view/frontend/web/js/form-mini.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
