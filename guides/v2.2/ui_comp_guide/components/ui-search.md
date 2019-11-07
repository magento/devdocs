---
group: ui-components-guide
title: Search component
---

The Search component allows searching through the grid records. It is a generic tool for filtering content that aggregates all other filter elements.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `label` | The search field label. | String | `$t('Keyword')` |
| `placeholder` | Value displayed when the search field is empty. | String | `'Search by keyword'` |
| `statefull`.`value` | Defines that `value` property is automatically saved in the configured storage if a change. | Boolean | `true` |
| `template` | Path to the component’s `.html` template. | String | `ui/grid/search/search` |

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/search/search.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/search/search.js)
-  [app/code/Magento/Ui/view/base/web/templates/grid/search/search.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/search/search.html)

## Examples

### Integrate Search component with Listing component

This is an example of how the Search component integrates with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    ...
    <listingToolbar>
        ...
        <filterSearch name="fulltext"/>
    </listingToolbar>
    ...
</listing>
```

#### Result

![Search Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-search-result.png)
