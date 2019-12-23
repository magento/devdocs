---
group: ui-components-guide
title: FiltersChips component
---

The FiltersChips component provides UI controls that allows users to remove the previously-applied values of the [Filters]({{ page.baseurl }}/ui_comp_guide/components/ui-filters.html) and [Search]({{ page.baseurl }}/ui_comp_guide/components/ui-search.html) components.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `component` | The path to the component’s `.js` file. | String | `Magento_Ui/js/grid/filters/chips` |
| `componentType` | The type of component. | String | `filtersChips` |
| `template` | Path to the component’s `.html` template. | String | `ui/grid/filters/chips` |

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/filters/chips.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/filters/chips.js)
-  [app/code/Magento/Ui/view/base/web/templates/grid/filters/chips.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/filters/chips.html)

## Examples

### Integrate the FiltersChips component as a grid (default) with the Filters component

This is an example of how the FiltersChips component integrates with the [Filters]({{ page.baseurl }}/ui_comp_guide/components/ui-filters.html) component:

```xml
<listing>
    <listingToolbar>
        <filters name="listing_filters">
            <settings>
                <chipsConfig>
                    <param name="component" xsi:type="string">Magento_Ui/js/grid/filters/chips</param>
                    <param name="componentType" xsi:type="string">filtersChips</param>
                    <param name="template" xsi:type="string">ui/grid/filters/chips</param>
                </chipsConfig>
            </settings>
        </filters>
    </listingToolbar>
</listing>
```

#### Result

![FiltersChips Component example]({{ site.baseurl }}/common/images/ui_comps/ui-filterschips-result.png)
