---
layout: default
group: UI_Components_guide
subgroup: concepts
title: Configuration Flow of UI Components
menu_title: Configuration Flow of UI Components
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concept/ui_comp_config_flow_concept.md
---


## Configuration Flow of UI Components

The following section covers the configuration flow of UI Components within the Magento system. The final display of a UI Component on a web page involves a series of configuration flows, such as the initial reading of the top-level component instance’s xml declaration, all the way to the merging of module-specific options.

When the server generates a page response, the configuration of these components in [the .xml declaration file]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html) (which are module-agnostic) is then modified by the .php modifiers (which are module-specific), and then finally this combined configuration of module-agnostic and module-specific options is packed into JSON format and added into the HTTP response body.

On the client-side, this JSON is processed by `Magento_Ui/js/core/app` where Magento_Ui/js/core/app is an alias for the app.js file. The JSON is seen in the page source. The `Magento_Ui/js/core/app` creates the UI Components instances according to the configuration of the JSON.

The `Magento_Ui/js/core/app` also bounds these objects to the corresponding .html templates, if there are any .html templates declared in JSON for that particular component.

### Implementation Details

This section provides more detailed steps about the configuration flow.

1. Lets consider an example with the top-level UI Component, `form`.

Lets imagine we have the following file structure in our module <My_Module>:
    1) Layout .xml file of the Module’s page: my_page.xml
    2) Top-level UI Component (form or listing) configuration: my_form.xml
    3) .php modifiers that are specific to the module: ___

Keep in mind that the `UI module’ contains these important files:
    1) A general, module-agnostic form definition in the <form> node of the .xml definition file: Ui\view\base\ui_component\etc\definition.xml
    2) Default form .xhtml template, which is referenced in definition.xml: Ui\view\base\ui_component\templates\form\default.xhtml
    3) The Form component, which is referenced in definition.xml: Ui\view\base\web\js\form\form.js

When the request for my_page comes, the server does the following steps:
1) Determines which UI Components are used in this particular layout. In the example, the UI Components that are used are defined in the my_form component’s declaration file.
2) Searchs the .xml files with name ‘my_form’ among ALL modules. The server and then merges the my_form .xml file(s) into a single configuration object, thus overriding
the common properties, so that the latest my_form .xml file always has the highest priority.
3) Merges the resulting configuration (from Step 2 above) with the configuration from the UI module definition.xml. The UI module definition.xml configuration file has the lowest priority, and is overwritten by the merged configuration of all my_form.xml files.
4) Translates the resulting configuration into JSON format and adds it to response body the following way:

	<script type="text/x-magento-init">{"*": {"Magento_Ui/js/core/app”:{<JSON_configuration>}}}</script>

Now it is the client's turn to process this JSON and generate the UI Components.

The steps are:
1) Require.js requires `Magento_Ui/js/core/app` and passes JSON configuration as an parameter
(link to http://devdocs.magento.com/guides/v2.1/javascript-dev-guide/javascript/js_init.html)
2) The `Magento_Ui/js/core/app` calls the layout.js and passes the UI component’s configuration into the layout: Ui\view\base\web\js\core\renderer\layout.js
3) Layout.js creates instances of UI Components. That means that each UI component’s configuration must have an explicitly declared 'component' property in JSON. This property references the .js file. For example, our form has the component declared in JSON like this:
	“my_form":{"component":"Magento_Ui/js/form/form"}

So the instance of this class is created, and properties from the JSON overwrites the properties from the UI component’s 'defaults' property. Then resulting properties are then made the first-level properties of the newly created UI component, and the original ’defaults' property is deleted.

4) The UI Components’ .html templates (if there are any) are rendered by Magento knockout.js template engine. This means, that bootstrap.js {{Ui\view\base\web\js\lib\knockout\bootstrap.js}} (required by app.js) passes our own template engine {{Ui\view\base\web\js\lib\knockout\template\engine.js}} (link to this in GitHub) for the Knockout.js.

5) The bootstrap.js  binds the component as a Model behind this View (template) using knockout.js bindings. The UI Components are now displayed on the page, and are fully interactive.
