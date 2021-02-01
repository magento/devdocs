---
group: ui-components-guide
title: ColumnsControls component
---

The ColumnsControls component is a collection of columns. It provides an interface for showing and hiding columns. The interface contains:

*  The total number of all available columns in a grid.
*  The number of columns currently active/displayed.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `minVisible` | Minimum number of columns that must be visible. | Number | `1` |
| `maxVisible` | Maximum number of columns that can be visible. | Number | `30` |
| `template` | The path to the component’s `.html` template. | String | `ui/grid/controls/columns` |

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

*  [`app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js)
*  [`app/code/Magento/Ui/view/base/web/templates/grid/controls/columns.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/controls/columns.html)

## Examples

### You can simply change "minVisible" and "maxVisible" values in the JS file.

For this, you have to override the vendor JS file in your custom module.

vendor file js path :
/vendor/magento/module-ui/view/base/web/js/grid/controls/columns.js

#### For override JS file follow step Below:

#### First step :
/app/code/[VENDOR_NAME]/[MODULE_NAME]/view/base/requirejs-config.js

```js

var config = {
    map: {
        '*': {
            'Magento_Ui/js/grid/controls/columns':'VENDOR_NAME_MODULE_NAME/js/grid/controls/columns'
        }
    }
}

```

#### Second step :
/app/code/[VENDOR_NAME]/[MODULE_NAME]/view/base/web/js/grid/controls/columns.js
(In this JS change "minVisible" and "maxVisible" values as per your requirement)

```js
return Collection.extend({
        defaults: {
            template: 'ui/grid/controls/columns',
            minVisible: 1,
            maxVisible: 4,
            viewportSize: 18,
            displayArea: 'dataGridActions',
            columnsProvider: 'ns = ${ $.ns }, componentType = columns',
            imports: {
                addColumns: '${ $.columnsProvider }:elems'
            },
            templates: {
                headerMsg: $t('${ $.visible } out of ${ $.total } visible')
            }
        }
    });
```

#### Result

![ColumnsControls component example]({{ site.baseurl }}/common/images/ui_comps/columns-controls-result.png)
