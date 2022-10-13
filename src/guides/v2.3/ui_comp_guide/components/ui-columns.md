---
group: ui-components-guide
title: Columns component
---

The Columns component is a collection of columns. It renders the `<table>` element and displays the records of the [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) in this table.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `component` | The path to the component’s `.js` file. | String | `Magento_Ui/js/grid/listing` |
| `displayMode` | Initial display mode. | String | `'grid'` |
| `displayModes` | List of available display modes. | {<br />[name: string]: [DisplayMode](#displaymode)<br />} |  `{grid: {value: 'grid',label: 'Grid',template: '${ $.template }'},list: {value: 'list',label: 'List',template: '${ $.listTemplate }'}}` |
| `dndConfig` | Configuration of the [DragAndDrop component]({{ page.baseurl }}/ui_comp_guide/components/ui-draganddrop.html). | Object | Specified in the [DragAndDrop component configuration]({{ page.baseurl }}/ui_comp_guide/components/ui-draganddrop.html). |
| `stickyTmpl` | Path to the `.html` template used for the [Toolbar component]({{ page.baseurl }}/ui_comp_guide/components/ui-toolbar.html) when it receives a fixed position. | String | `ui/grid/sticky/listing` |
| `template` | Path to the component’s `.html` template. | String | `ui/grid/listing` |
| `editorConfig` | Configuration of the InlineEditing component. | Object | Specified in the [InlineEditing component configuration]({{ page.baseurl }}/ui_comp_guide/components/ui-insertlisting.html). |
| `viewSwitcherTmpl` | Path to the `.html` template for rendering the list of available display modes. By default this list is not displayed. | String | `ui/grid/view-switcher` |
| `componentType` | The type of component. | String | `columns` |
| `resizeConfig` | Configurations of [`Resize`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/resize.js) component. | Object | `{name: '${ $.name }_resize',columnsProvider: '${ $.name }',component: 'Magento_Ui/js/grid/resize',enabled: false}` |

### DisplayMode interface {#displaymode}

| Option | Description | Type | Required |
| --- | --- | --- | --- |
| `label` | Label for the list of available modes. | String | Optional |
| `template` | Path to the `.html` template used to render listing in the selected mode. | String | Optional |
| `value` | Mode's identifier. | String | Optional |

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [`Magento/Ui/view/base/web/js/grid/listing.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/listing.js)
-  [`Magento/Ui/view/base/web/templates/list/listing.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/list/listing.html)

## Examples

### Integrate the Columns component as a grid (default) with the Listing component

This is an example of how the Columns component integrates with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    ...
    <columns name="columns_example">
        <column name="column1" sortOrder="10">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 1</label>
                <default>1</default>
            </settings>
        </column>
        <column name="column2" sortOrder="13">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 2</label>
                <default>2</default>
            </settings>
        </column>
        <column name="column3" sortOrder="14">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 3</label>
                <default>3</default>
            </settings>
        </column>
        <column name="column4" sortOrder="15">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 4</label>
                <default>4</default>
            </settings>
        </column>
    </columns>
    ...
</listing>
```

#### Result

![Columns Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-columns-result.png)

### Integrate the Columns component as a list with the Listing component

This is an example of how the Columns component with the list display mode integrates with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    ...
    <columns name="columns_list_example">
        <settings>
            <displayMode>list</displayMode>
        </settings>
        <column name="column1" sortOrder="10">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 1</label>
                <default>1</default>
            </settings>
        </column>
        <column name="column2" sortOrder="13">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 2</label>
                <default>2</default>
            </settings>
        </column>
        <column name="column3" sortOrder="14">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 3</label>
                <default>3</default>
            </settings>
        </column>
        <column name="column4" sortOrder="15">
            <settings>
                <filter>text</filter>
                <dataType>text</dataType>
                <label translate="true">Column 4</label>
                <default>4</default>
            </settings>
        </column>
    </columns>
    ...
</listing>
```

#### Result

![Columns List Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-columns-list-result.png)
