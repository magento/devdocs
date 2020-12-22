---
group: ui-components-guide
title: The uiLayout service object
---

The `uiLayout` service object is a JavaScript function object used for initializing and configuring UI components.
This object is defined in the [`layout.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/core/renderer/layout.js) file in the UI module.

## `run()` method

The `run()` method is the class entry point represented by `uiLayout` and has the following signature:

`run(nodes, parent, cached, merge)`

| Parameter | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| `nodes`   | Object  | Configuration object for a UI component  |
| `parent`  | Object  | The parent component of the UI component |
| `cached`  | Boolean | Determines if `nodes` should be cached   |
| `merge`   | Boolean | Determines if `nodes` should be merged   |

If `cached` is set to `true`, the key for the cache is constructed from the object keys in the `node` parameter.
Use the `cached` and `merge` parameters when a UI component needs to be updated during runtime.

### `nodes` configuration object

The `nodes` parameter is a JavaScript object used by the `run()` method to determine how a UI component is created.

This object can have the following properties:

| Property       | Type    | Description                                                                                          |
| -------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `name`         | String  | Name of the component.                                                                               |
| `parent`       | String  | Full name of the component's parent element.                                                         |
| `template`     | String  | Path to the component's `.html` template.                                                            |
| `config`       | Object  | Configuration properties for the UI component.                                                       |
| `children`     | Object  | Configuration nodes for children components.                                                         |
| `isTemplate`   | Boolean | Whether to save the configuration as a template.                                                     |
| `nodeTemplate` | String  | The full name of a saved configuration template.                                                     |
| `provider`     | String  | The full name of the DataSource UI component. This property is inherited from the parent if skipped. |

#### Naming

The name of the property is the shortened name of the component.
It is used as the `index` property of the generated instance.

The full name of the created UI component is the concatenation of the parent's `name` property and the component's `name` property.
If an instance with the same full name already exists, `uiLayout` will skip initialization.

#### Parent initialization

If the parent component is not yet initialized, `uiLayout` waits for it to appear in the `uiRegistry`.

#### Configuration template

When `isTemplate` is set to `true`, `uiLayout` stores the configuration in a private `templates` variable instead of initializing the component.

You can use this stored configuration to create dynamic component instances during runtime by specifying the full name of the configuration in `nodeTemplate`.
If the configuration is found, `uiLayout` uses that configuration instead of the current values.

## Code samples

The example module referenced in the following examples uses `OrangeCo` as its company value and `Sample` as the module name.

It also assumes the existence of the following files:

*  `app/code/OrangeCo/Sample/view/base/web/js/my-new-component.js`
*  `app/code/OrangeCo/Sample/view/base/web/templates/my-new-component/main-template.html`

### Create a child component

You can use `uiLayout` to create a UI component instance that is a child of another UI component.

The following example creates an instance of the `my-new-component` component that is a child of the `uiCollection` component.

**Example component file:** `app/code/OrangeCo/Sample/view/base/web/js/sample.js`

``` js
define([
    'uiLayout',
    'uiCollection'
], function (layout, Collection) {
    'use strict';

    return Collection.extend({
        defaults: {
            myNewComponentConfig: {
                name: 'myNewComponent',
                component: 'OrangeCo_Sample/js/my-new-component',
                nodeTemplate: 'OrangeCo_Sample/my-new-component/main-template',
                parent: '${ $.name }'
            }
        },
        initialize: function () {
            this._super();
            layout([this.myNewComponentConfig]);

            return this;
        }
    });
});
```

The component instance is created when `myNewComponentConfig` is passed on to the `uiLayout` service object:

`layout([this.myNewComponentConfig]);`

This instance is stored in the `uiRegistry` with other components and rendered using the logic for rendering `uiCollection` children templates.

### Use a configuration template

You can use the configuration of one UI component to create another UI component.
The `isTemplate` configuration for the original UI component must be `true` to save its configuration as a template in `uiLayout`.

In the following example, a custom Table UI component is created using an existing configuration template with the name `my_row_template_component_name`.

The [`mageUtils`](https://github.com/magento/magento2/tree/2.3/lib/web/mage/utils) helper library is also used in this example to create the new component based on `myRowTemplateConfig`.

**Example component file:** `app/code/OrangeCo/Sample/view/base/web/js/table.js`

``` js
define([
    'uiLayout',
    'uiCollection',
    'mageUtils'
], function (layout, Collection, utils) {
    'use strict';

    return Collection.extend({
        defaults: {
            myRowTemplateConfig: {
                parent: '${ $.name }',
                nodeTemplate: 'my_row_template_component_name'
            }
        },

        addRow: function (rowIndex) {
            var objectFromTemplate,
                myRowTemplateConfig = this.myRowTemplateConfig;

            myRowTemplateConfig.name = rowIndex;
            objectFromTemplate = utils.template(myRowTemplateConfig);
            layout([objectFromTemplate]);
        }
    });
});
```
