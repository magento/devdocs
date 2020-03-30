---
group: ui-components-guide
title: ActionsColumn component
---

The ActionsColumns component implements a table's column responsible for displaying and performing a list of record-related actions.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `Magento_Ui/js/grid/columns/actions` |
| `bodyTmpl` | Path to the `.html` template used to render a column's field in the table's body. | String | `ui/grid/cells/actions` |
| `draggable` | Defines whether a user can change column's position in the table by grabbing column's header and dragging it across the table. | Boolean | `false` |
| `fieldClass` | Additional CSS classes added to the column's field elements. | {[name: string]: Boolean} | `{'data-grid-actions-cell': true}` |
| `sortable` | Whether column's fields can be used to sort records in the table. | Boolean | `false` |
| `templates.actions` | A list of actions that will be displayed in column's fields. | {[name: String]: `ActionItem`} | `-` |

### ActionItem interface

| Option | Description | Type | Required |
| --- | --- | --- | --- |
| `callback` | Custom action's handler. | [ColumnAction]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html#column_action) \| Array &lt;ColumnAction&gt; | Optional |
| `confirm` | Confirmation message shown before applying the action. | `{title: string, message: string}` | Optional |
| `href` | The link to open on when the column's element is clicked. | String | Optional |
| `index` | Action's identifier. | String | Required |
| `label` | Label to be displayed in the field. | String | Required |

## Source files

Extends [`Column`]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html):

-  [`app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js)
-  [`app/code/Magento/Ui/view/base/web/templates/grid/cells/actions.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/cells/actions.html)

## Examples

### Integrate ActionsColumns component with Listing component

```xml
<listing>
    ...
    <columns>
        ...
        <actionsColumn name="actions" class="Vendor\Module\Ui\Component\Listing\Column\Actions">
            <settings>
                <label translate="true">Actions</label>
            </settings>
        </actionsColumn>
    </columns>
    ...
</listing>
```

The `Vendor\Module\Ui\Component\Listing\Column\Actions` class needs to extend the [`Magento\Ui\Component\Listing\Columns\Column`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/Component/Listing/Columns/Column.php) class and add actions data via `prepareDataSource()` method.

```php
<?php

namespace Vendor\Module\Ui\Component\Listing\Column;

use Magento\Ui\Component\Listing\Columns\Column;

/**
 * Class Actions
 */
class Actions extends Column
{
    /**
     * Prepare Data Source
     *
     * @param array $dataSource
     * @return array
     */
    public function prepareDataSource(array $dataSource)
    {
        if (isset($dataSource['data']['items'])) {
            foreach ($dataSource['data']['items'] as & $item) {
                // here we can also use the data from $item to configure some parameters of an action URL
                $item[$this->getData('name')] = [
                    'edit' => [
                        'href' => '/edit',
                        'label' => __('Edit')
                    ],
                    'remove' => [
                        'href' => '/remove',
                        'label' => __('Remove')
                    ],
                    'duplicate' => [
                        'href' => '/duplicate',
                        'label' => __('Duplicate')
                    ],
                ];
            }
        }

        return $dataSource;
    }
}
```

#### Result

![ActionsColumn Component example]({{ site.baseurl }}/common/images/ui_comps/actions-column-result.png)
