---
layout: default
group: UI_Components_guide
subgroup: concepts
title: Configuration flow of UI components
menu_title: Configuration flow of UI components
menu_order: 2
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_config_flow_concept.md
---


## {{page.menu_title}}
{:.no_toc}

## Overview
The following section covers the configuration flow of UI components within the Magento system. Before a UI component is finally displayed on a web page, its configuration undergoes a series of modifications. Starting from the initial reading of the top-level component instance’s XML declaration, all the way to the merging of module-specific options.

When the server generates a page response, the configuration of these components in the [`.xml` declaration file]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html) (which are module-agnostic) is then modified by the `.php` modifiers (which are module-specific), and then finally this combined configuration of module-agnostic and module-specific options is packed into JSON format and added into the HTTP response body.

On the client-side, this JSON is processed by `Magento_Ui/js/core/app` where `Magento_Ui/js/core/app` is an alias for the [`app.js`]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/core/app.js) file. The JSON could be seen in the page source. The `Magento_Ui/js/core/app` creates the UI components instances according to the configuration of the JSON using `uiLayout`.

The Magento JavaScript application bounds these instances to the corresponding `.html` templates, if there are any `.html` templates declared in JSON for that particular component. The top-level UI component is bound to the page by the `scope` Knockout binding. 


## Implementation Details

This section provides more detailed steps about the configuration flow.

Lets consider an example with the top-level UI Component, `form`.

Lets imagine we have the following file structure in our module <My_Module>:

- layout `.xml` file of the Module’s page: `my_page.xml`
- top-level UI Component (form or listing) configuration: `my_form.xml` 
- `.php` modifiers that are specific to the module

Keep in mind that the Magento_UI module contains these important files:

- A general, module-agnostic form definition in the `<form>` node of the `.xml` definition file: `<Magento_Ui_module_dir>/view/base/ui_component/etc/definition.xml`     

- Default `.xhtml` template for the form, which is referenced in `definition.xml`: `<Magento_Ui_module_dir>/view/base/ui_component/templates/form/default.xhtml`
- The Form class, which is referenced in `definition.xml`: `<Magento_Ui_module_dir>/view/base/web/js/form/form.js`

When the request for my_page comes, the server does the following:

1. Determines which UI components are used in this particular layout. In the example, the UI components that are used are defined in the `my_form` component’s `.xml` declaration file.
2. Searches the `.xml` files with name `my_form` among all modules. The server and then merges the `my_form .xml` file(s) into a single configuration object, thus overriding the common properties, so that the latest `my_form .xml` file always has the highest priority.
1. Merges the resulting configuration (from Step 2 above) with the configuration from the UI module `definition.xml`. The UI module `definition.xml` configuration file has the lowest priority, and is overwritten by the merged configuration of all `my_form.xml` files.
2. Translates the resulting configuration into JSON format and adds it to response body the following way:

{%highlight html%}
	<script type="text/x-magento-init">{"*": {"Magento_Ui/js/core/app":{<JSON_configuration>}}}</script>
{%endhighlight%}

Now it is the client's turn to process this JSON and generate the UI component's instances. The flow is following:

1. RequireJS requires `Magento_Ui/js/core/app` and passes [JSON configuration]({{page.baseurl}}javascript-dev-guide/javascript/js_init.html#declarative-notation-using-the-script-typetextx-magento-init--tag-decltag) as an parameter. 
2. The `Magento_Ui/js/core/app` calls `layout.js `and passes the UI component’s configuration into the layout: `<Magento_Ui_module_dir>/view/base/web/js/core/renderer/layout.js`.
3. `layout.js` creates instances of UI Components. That means that each UI component’s configuration must have an explicitly declared `component` property in JSON. This property references the `.js` file. For example, our form has the component declared in JSON like this:	`"my_form":{"component":"Magento_Ui/js/form/form"}`
So the instance of this class is created, and properties from the JSON overwrites the properties from the UI component’s `defaults` property. Then resulting properties become the first-level properties of the newly created UI component's instance, and the original `defaults` property is deleted.
4. The UI Components’ `.html` templates (if there are any) are rendered by Magento `knockout.js` template engine. This means, that [bootstrap.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/lib/knockout/bootstrap.js) (required by `app.js`) passes our own [template engine]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/lib/knockout/template/engine.js) for the Knockout.
5. The `bootstrap.js` binds the component as a Model behind this View (template) using Knockout bindings. The UI components are now displayed on the page, and are fully interactive.
