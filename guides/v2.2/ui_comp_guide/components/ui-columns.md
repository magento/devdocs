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
| `viewSwitcherTmpl` | Path to the .html template for rendering the list of available display modes. By default this list is not displayed. | String | `ui/grid/view-switcher` |
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

- [`Magento/Ui/view/base/web/js/grid/listing.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/listing.js)
