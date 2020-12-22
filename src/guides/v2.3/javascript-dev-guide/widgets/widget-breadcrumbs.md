---
group: javascript-developer-guide
title: Breadcrumbs widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The Breadcrumbs [widget](https://glossary.magento.com/widget/) builds a list of links that show users where they are on the site relative to other pages.

The Breadcrumbs widget can be used only on the frontend area.

The widget source file is [`<Magento_Theme_module_dir>/view/frontend/web/js/view/breadcrumbs.js`][].

The Breadcrumbs widget template source file is [`<Magento_Theme_module_dir>/view/frontend/web/templates/breadcrumbs.html`][].

## Initialize the Breadcrumbs widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

The following example shows how to instantiate the Breadcrumbs widget:

```javascript
$('#breadcrumbs').breadcrumbs();
```

Where:

-  `#breadcrumbs` is the selector of the block element for which Breadcrumbs are initialized.

The following example shows a PHTML file using the script:

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

The Breadcrumb List is used to configure the breadcrumbs list and represents a simple array that stores breadcrumb items.

The Breadcrumb List source file is [`<Magento_Theme_module_dir>/view/frontend/web/js/model/breadcrumb-list.js`][].

The Breadcrumb widget uses the Breadcrumbs List to configure a list of breadcrumbs which should be rendered.

You should configure the Breadcrumb List before initializing the Breadcrumbs widget. After initializing the widget, the Breadcrumb List does not affect the rendered list of breadcrumbs.

The following example shows how to add a new breadcrumb item to the breadcrumb list:

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
| `title` | The title option of a breadcrumb item is used as the `<a>` tag title attribute. | String |
| `label` | The label option of a breadcrumb item is used as the text of `<a>` tag. | String |

The Breadcrumb List Item Options in the [HTML](https://glossary.magento.com/html):

![Breadcrumb List Item Options HTML]({{ site.baseurl }}/common/images/widget/breadcrumb-list-item-html.png)

## Code sample

The following example shows how to initialize the Breadcrumb widget and pass breadcrumb items to the [Breadcrumbs list](#breadcrumb-list).

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
