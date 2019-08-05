---
group: ui-components-guide
title: LinkColumn component
---

## Overview

The LinkColumn component implements a column that can display the anchor elements instead of plain text.

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/columns/link.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/link.js)

## LinkColumn configuration

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `link` | The key in a field's record object that contains the link value. | String | `link` |
| `bodyTmpl` | Path to the template that is used to render a column's field in the table's body. | String | `ui/grid/cells/link` |

## Source files

Extends [Column component]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html)
- [`app/code/Magento/Ui/view/base/web/js/grid/columns/link.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/link.js)
