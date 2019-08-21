---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Breadcrumbs widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

## Overview

The Breadcrumbs [widget](https://glossary.magento.com/widget/) allows building a list of links which should show where you are in relation to other pages in the store.

The Breadcrumbs widget can be used only on the frontend area.

The widget source file is [`<Magento_Theme_module_dir>/view/frontend/web/js/view/breadcrumbs.js`][]

The Breadcrumbs widget template source file is [`<Magento_Theme_module_dir>/view/frontend/web/templates/breadcrumbs.html`][]

## Initialize the Breadcrumbs widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

Generally the Breadcrumbs widget is instantiated like following:

```javascript
$('#breadcrumbs').breadcrumbs();
```

Where:

- `#breadcrumbs` is the selector of the block element for which Breadcrumbs is initialized.

Phtml template file examples using script:

```html
<script>
    require([
            'jquery',
            'breadcrumbs'
        ], function ($) {
            'use strict';
    
            $('#breadcrumbs').breadcrumbs();
        });
</script>
```

## Breadcrumb List

The Breadcrumb List is used to configure the breadcrumbs list.

The Breadcrumb List represents a simple array which stores breadcrumbs items.

The Breadcrumb List source file is [`<Magento_Theme_module_dir>/view/frontend/web/js/model/breadcrumb-list.js`][]

The Breadcrumb widget uses the Breadcrumbs List to configure a list of breadcrumbs which should be rendered. 

The Breadcrumb List should be configured before Breadcrumbs widget initialization. After Breadcrumbs widget initialization the Breadcrumb List does not affect the rendered list of breadcrumbs.

Code example of adding a new breadcrumb item to the Breadcrumb List:

```html
<script>
    require([
        'Magento_Theme/js/model/breadcrumb-list'
    ], function (breadcrumbList) {
        'use strict';

        var breadcrumbs = [
            {
                'name': 'some-page-1',
                'link': '/some/path/1',
                'title': 'Link title for page 1',
                'label': 'Some page 1'
            },
            {
                'name': 'some-page-1',
                'link': '/some/path/2',
                'title': 'Link title for page 1',
                'label': 'Some page 2'
            }
        ];

        breadcrumbs.forEach(function (breadcrumb) {
            breadcrumbList.push(breadcrumb);
        });
    });
</script>
```

### Breadcrumb List Item Options

The Breadcrumb List Items should have the following structure:

| Option | Description | Type |
| --- | --- | --- |
| `name` | The class of a breadcrumb item. | String |
| `link` | The URL link of a breadcrumb item. | String |
| `title` | The title of a breadcrumb item link. | String |
| `label` | The label of a breadcrumb item. | String |

The Breadcrumb List Item Options in the [HTML](https://glossary.magento.com/html):

![Breadcrumb List Item Options HTML]({{ site.baseurl }}/common/images/widget/breadcrumb-list-item-html.png)

## Code sample

The following example shows how to initialize the Breadcrumb widget and pass breadcrumbs items to the [Breadcrumbs list](#breadcrumb_list).

```html
<div class="breadcrumbs" id="breadcrumbs-example"></div>
<script>
    require([
        'jquery',
        'Magento_Theme/js/model/breadcrumb-list',
        'breadcrumbs'
    ], function ($, breadcrumbList) {
        'use strict';

        var breadcrumbs = [
            {
                'name': 'some-page-1',
                'link': '/some/path/1',
                'title': 'Link title for page 1',
                'label': 'Some page 1'
            },
            {
                'name': 'some-page-1',
                'link': '/some/path/2',
                'title': 'Link title for page 1',
                'label': 'Some page 2'
            }
        ];

        // adding breadcrumbs to the Breadcrumb List 
        breadcrumbs.forEach(function (breadcrumb) {
            breadcrumbList.push(breadcrumb);
        });

        // Breadcrumbs widget initialization
        $('#breadcrumbs-example').breadcrumbs();
    });
</script>
```

### Result

The result is the breadcrumbs block with three items.

![Breadcrumb List Item Options HTML]({{ site.baseurl }}/common/images/widget/breadcrumbs-widget-result.png)

<!-- Link Definitions -->
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[`<Magento_Theme_module_dir>/view/frontend/web/js/view/breadcrumbs.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/web/js/view/breadcrumbs.js
[`<Magento_Theme_module_dir>/view/frontend/web/js/model/breadcrumb-list.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/web/js/model/breadcrumb-list.js
[`<Magento_Theme_module_dir>/view/frontend/web/templates/breadcrumbs.html`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/web/templates/breadcrumbs.html
