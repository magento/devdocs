---
layout: default
group: UI_Components
subgroup: concepts
title: About UI Component initialization by layout.js
menu_title: About UI Component initialization by layout.js
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_uilayout_concept.md
---



## About UI Component initialization by layout.js

### Overview

The  layout.js file `<UI_Module_dir>\view\base\web\js\core\renderer\layout.js` is used to initialize UI Components.

In a typical UI Componentâ€™s configuration flow {{link to Olhaâ€™s topic on config flow]], the layout.js is called by app.js (<UI_Module_dir>\view\base\web\js\core\app.js) and receives the componentâ€™s configuration as a parameter.

In the same way, anyone who wants to create a component dynamically (from other components or .phtml template) can call app.js or layout.js and pass as a parameter the configuration of the desired component.

## Details:

In fact, the layout.js module returns `function run(nodes, parent, cached, merge) {..}`

The most commonly used are the first two parameters:
* {array} `nodes` - configuration of the UI Components that we want to initialize. The array is an array of configurations.
* {string} `parent` - parent component for that UI Components

In the layout.js, each item expected in the 'nodes' array can have the following properties:
* -{String} `name` - index of the new UI component
* -{String} `parent` - the name of the component's parent element. If the parent component is not yet initialized, then the layout.js will wait for it to appear in UI Registry (registry.js). {{link to Vovaâ€™s topic about registry.js.}}

Note: The full name of the created UI Component is formed by concatenating the `parent.name + '.' + name`, and then set as the â€™name' property. If a UI component with the same full name already exists, layout.js will skip its initialization.

* -{string} nodeTemplate - template of the new Component (path to .html template)
* -{string} component - constructor of the new Component (path to .js file)
* -{object} config - the object that contains the properties that you want to see in new UI Component. In fact, they can also simply be added directly into item. That means, the following configurations will have the same result:
** var config1 = {name: 'myComp1', config: {myProp: '123123'}}
and
** var config2 = {name: 'myComp1', myProp: '123123'}
* -{array} children - configuration of child elements, if there are any
* -{boolean} isTemplate - if the value is set to `true`, the component configuration will be stored in layout.jsâ€™s private `â€™templatesâ€™` property, and the UI Component will be not initializated. New components can be created dynamically based on this template (see the second example below).
* -{string} provider - Name of the provider UI component. If absent, the parent's provider will be used. {{Link to topic about Data Providers.}}

## Examples:

1) Letâ€™s consider a case when we want to create a UI Component dynamically from another UI component.
    We can put the configuration of the desired UI component directly into layout.js. Below in an example of the componentâ€™s constructor,  which creates the child UI component on initialization:

define([
    'uiLayout',
    'uiCollection'
], function (layout, uiCollection) {
    'use strict';

    return uiCollection.extend({
        defaults: {
            my_newComponentConfig: {
                name: â€˜my_newComponent',
                component: 'Magento_Ui/js/my_newComponent',
                nodeTemplate: 'ui/my_newComponent/mainTemplate',
                parent: '${ $.name }'
            }
        },
        initialize: function () {
            this._super();
            layout([this.my_newComponentConfig]);

            return this;
        }
    });
});


2) Anther option is to create  UI components from the Template component. For example, some component, lets call it â€˜my_rowTemplate', has already been configured with `isTemplate = true` property.

Lets suppose that `rowTemplate`â€™s full name is â€˜my_rowTemplateComponentNameâ€™.

Then, inside of our imaginary parent UI component â€˜my_listComponent' we can add row components using this template configuration:

define([
    'uiLayout',
    'uiCollection'
], function (layout, uiCollection) {
    'use strict';

    return uiCollection.extend({
        defaults: {
            my_rowTemplateConfig: {
                parent: '${ $.name }',
                nodeTemplate: â€˜my_rowTemplateComponentName'
            }
        },

        addRow: function (rowIndex) {
            var my_rowTemplateConfig = this.my_rowTemplateConfig;
            my_rowTemplateConfig.name = rowIndex;
            layout([utils.template(my_rowTemplateConfig)]);
        }
    });
});
