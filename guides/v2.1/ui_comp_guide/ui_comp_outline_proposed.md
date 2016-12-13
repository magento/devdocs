---
layout: default
group: UI_Components_guide
subgroup: 
title: UI Components Guide outline (proposed)
menu_title: UI Components Guide outline (proposed)
menu_order: 3
version: 2.1
github_link: ui_comp_guide/ui_comp_outline_proposed.md
---

Below is the proposed structure of the new UI Components Guide. The Frontend development and the DevDocs teams are writing as quickly as we can (linked topics are done!), but as you can see we sill have a lot of topics to write.
If you would like to help us by writing any of the topics that we have not yet gotten do, we welcome your contributions! 

<div class="bs-callout bs-callout-info" id="info">
<p>These are not the exact titles for the sections but rather the content.</p>
</div>

- Overview
- What are UI components 
	- What is a UI component
	- [The architectural structure of a UI component]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_architecture_concept.html)
	- Application workflow description
	- [Configuration flow: the configuration pieces and their part in workflow]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_config_flow_concept.html)
		- Declaration in `definition.xml`
		- [UI component's XML declaration (the instance)]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html)
		- [PHP modifiers]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_modifier_concept.html) 
		- Configuration inside the JS class
	- Data sources
	- Javascript in UI components
		- Basic JS components
			- [`uiClass` as a core of OOP in components (initialize, initConfig, extend, _super, defaults)]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uiclass_concept.html)
			- [`uiElement` as genaral component class]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) 
			- [`uiCollection` as general component for collections]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) 
			- [`uiLayout`  as a built-in initializer]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uilayout_concept.html)
			- `uiRegistry` as a in memory storage
			- Linking properties of UI components
		- [Require JS with UI components]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_requirejs_concept.html)
	- Templates customization rules & techniques (using Knockout.js)
		- Overview of Knockout templates (explain custom bindings, whatever else is important)
		- Templates syntax
			- UI components implement the MVVM pattern (the UI component instance is a ViewModel)
			- New tags and their meaning
		- Custom bindings
			- `afterRender` – allows you to call a method (piece of code that exist in context) after the  rendering of the current DOM node finished
			- `autoselect` – when applied to `<input>` does text selection when `<input>` gets focus. (E.g.: via click)
			- `bindHtml` – same as _html_ binding. But does useful fro Magento app additional staff: applies bindings and process data-mage-init declarations.
			- `collapsible` – allows you to build collapsible panels
			- `datepicker` – only for inputs. Adds datepicker control via calendar.js widget.
			- `fadeVisible` – show/hide an element via jQuery fadeIn/fadeout functions
			- `i18n` – analogue to _text_ binding. Has two features: replace text with translation lib, correctly handle behavior of InlineTranslate module.
			- `keyboard` - attaches keypress handlers to element
			- `mageInit` – has same format as data-mage-init attribute. In opposite to attribute binding handles situation with appear/removal of an element
			- `optgroup` – same as building “option” binding. But allows you to render hierarchy options with the <optgroup> tag.
			- `outerClick` – similar to “click” binding. Handles situation when a click is done outside of an element.
			- `range` – allows you to use the jQuery UI Slider widget.
			- `resizable` – adds the jQuery UI Resizable widget.
			- `scope` – allows you to bind an object from uiRegistry as the scope to particular element. Used in Ui components.
			- `simpleChecked`
			- `staticChecked` - Implements same functionality as a standard 'checked' binding, but with a difference that it wont' change values array if value of DOM element changes.
			- `tooltip` – allows to create tooltip within inner content
			- `template`(render) – inner content will be replaced with the external template. Builtin “template” binding expects that the templates are on the page already. Magento’s one expects to load template from separate external files.
	- Provide simple table of all of UI сomponents
- UI components usage: common use cases, advantages, links to the scenario-based topics
- What changed since 2.0
	- Magento 2.0 vs Magento 2.1: changes in the UI component (XML changes)
		- Grid
		- Form
	- The syntax of UI Components templates has changed
	- New UI Components
		- Insert
		- Modal
		- File Uploader
- Best practices for UI components
	-  Don't rely on DOM instead rely on data structure.
-  Troubleshooting and debugging UI components 
	-  Checklist/workflow for debugging UI components 
	-  PHP app checkpoints
	-  Validate XML:
		-  PHP Storm 
		-  Using developer mode (running in dev mode automatically validates XML)
	-  [Debug UI components JS]({{page.baseurl}}ui_comp_guide/troubleshoot/ui_comp_troubleshoot_js.html)
		-  Common break-points for diagnostic
			-  Loading files (Require.js)
			-  uiLayout
			-  uiRegistry
			-  uiElement/uiCLass
			-  template engine
		-  Using OoB Unit tests as a debug tool
-  Tutorials, Workflow, Process
	-  List of general use cases.
	-  Tutorial: customize the existing instances (ex.: customize product creation form)
	-  Implement an existing UI Comp type with zero behavior customization or changes
	-  Implement an existing, out of the box UI component, but with some behavior customization
	-  Create a custom instance of the custom type (limitations: custom UI component types are not reusable, you need to copy-paste all config each time you want to use it)
-  Common How Tos
	-  How to create category attribute programmatically  
	-  How to add a custom attribute for CMS page (best practice to use Service Layer. Should be added to the CMS form and CMS grid)
	-  How to add a form, where fields have options in drop-down (Select field Backend form)
	-  How to create multi-select with source model in UI component
	-  How to create category attribute thumbnail and upload image using File Uploader Component
	-  How to test if something goes wrong (including php part) 
	-  How to get data into the UI components
	-  How to add image attribute to a category 
	-  How to add custom field to a form dynamically using application. 
	-  How to integrate an jQuery widget?
	-  How implement filter (or sorting order) in existing listing without filed in DB
-  Real-Life Scenarios
-  Specific UI сomponents (Reference material) 
	-  A list of Magento UI components
	-  [Form]({{page.baseurl}}ui_comp_guide/components/ui-form.html)
	-  [Listing]({{page.baseurl}}ui_comp_guide/components/ui-listing-grid.html)
	-  Fieldset
	-  Field
	-  Group
	-  Tab
	-  Nav
	-  Insert
	-  Insert Form
	-  Insert Listing
	-  [Modal]({{page.baseurl}}ui_comp_guide/components/ui-modal.html)
	-  Button adapter
	-  Form provider
	-  Paging
	-  Filters
	-  FilterSearch
	-  FilterSelect
	-  FilterRange
	-  FilterInput
	-  FilterDate
	-  ContainerMassAction
	-  Actions
	-  Action
	-  ActionDelete
	-  Column
	-  Columns
	-  ActionsColumn
	-  SelectionsColumn
	-  Component
	-  Container
	-  Fieldset
	-  Field
	-  Bookmark
	-  InsertForm
	-  InsertListing
	-  ExportButton
	-  ColumnsControls
	-  ListingToolbar
	-  DynamicRows
	-  HtmlContent
	-  Button
	-  DataSource
-  Glossary and Standard Terms

