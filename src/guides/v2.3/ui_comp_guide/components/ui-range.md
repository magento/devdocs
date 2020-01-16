---
group: ui-components-guide
title: Range component
---

The Range component implements the range for filtering rows in a grid. Visually, this component represents two input fields of `date` or `text` type, for entering the "from" and "to" range limits.

## Configuration options

| Option | Description | Type | Default Value |
| -------- | --------------------- | --------------------- | --------------------- |
| `class` | Path to the PHP class responsible for the backend implementation of the component. | String | `Magento\Ui\Component\Filters\Type\Range` |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `Magento_Ui/js/grid/filters/range` |
| `isRange` | Defines range filter. | Boolean | `true` |
| `rangeType` | Defines what kind of input elements the range contains.<br/>For example, if the value is `date`, then range includes two date fields. | String | - |
| `template` | Path to the component’s `.html` template. | String | `ui/grid/filters/elements/group` |

## Source files

Extends [`Multiline`]({{ page.baseurl }}/ui_comp_guide/components/ui-multiline.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/filters/range.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/filters/range.js)
-  [app/code/Magento/Ui/view/base/web/templates/grid/filters/elements/group.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/filters/elements/group.html)

## Examples

### DateRange

This is an example of how to add a date range filter type:

```xml
<listing>
    <columns>
        <column name="period">
            <settings>
                <filter>dateRange</filter>
                <label translate="true">Period</label>
            </settings>
        </column>
    </columns>
</listing>
```

#### Result

![DateRange filter type]({{ site.baseurl }}/common/images/ui_comps/date-range-result.png)

### TextRange

This is an example of how to add a text range filter type:

```xml
<listing>
    <columns>
        <column name="size">
            <settings>
                <filter>textRange</filter>
                <label translate="true">Size</label>
            </settings>
        </column>
    </columns>
</listing>
```

#### Result

![TextRange filter type]({{ site.baseurl }}/common/images/ui_comps/text-range-result.png)

### Methods and events

The following [API](https://glossary.magento.com/api) methods are available:

-  `buildChildren()` - create a configuration for the child components.
-  `clear()` - clear child elements data.
-  `hasData()` - check if some children element has data.
