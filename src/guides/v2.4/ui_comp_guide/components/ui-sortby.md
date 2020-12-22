---
group: ui-components-guide
title: Sortby component
contributor_name: Shankar Konar
contributor_link: https://github.com/konarshankar07
---

The Sortby component allows you to sort the column in ascending or descending order.

## Configuration options

|      Option                |   Description                                                                 |      Type      |  Default Value   |
|----------------------------|-------------------------------------------------------------------------------|----------------| -----------------|
| `template`                 | Path to the component .html template.                                         | String         | `ui/grid/sortBy` |
| `options`                  | List of options available for sorting.                                        | Array          | `[]`             |
| `applied`                  | Currently applied sorting.                                                    | Object         | `{}`             |
| `sorting`                  | Specify ascending (`asc`) or descending (`desc`) sorting order for the column.| String         | `asc`            |
| `selectedOption`           | Currently selected option for sorting.                                        | String         |  -               |
| `isVisible`                | Check if component is visible or not.                                         | Boolean        | `true`           |

## Examples

```xml
<listing>
    ...
    <container name="sorting"
               provider="dataProvider"
               displayArea="sorting"
               sortOrder="20"
               component="Magento_Ui/js/grid/sortBy">
               <argument name="data" xsi:type="array">
                   <item name="config" xsi:type="array">
                       <item name="deps" xsi:type="array">
                           <item name="0" xsi:type="string">
                               columnProvider
                           </item>
                       </item>
                   </item>
               </argument>
    </container>
    ...
    <columns name="columnProvider">
        <column name="name">
            <settings>
                <label translate="true">Name</label>
                <visible>false</visible>
                <sortable>true</sortable>
            </settings>
        </column>
        <column name="directory">
            <settings>
                <label translate="true">Directory</label>
                <visible>false</visible>
                <sortable>true</sortable>
            </settings>
        </column>
    </columns>
</listing>

```

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

*  [app\code\Magento\Ui\view\base\web\js\grid\sortBy.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/sortBy.js)
*  [app\code\Magento\Ui\view\base\web\templates\grid\sortBy.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/sortBy.html)

## Result

![Sortby Component]({{ site.baseurl }}/common/images/ui_comps/ui-sortby-result.png)
