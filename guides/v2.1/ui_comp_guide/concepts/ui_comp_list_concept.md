---
layout: default
group: UI_Components_guide
subgroup: concepts
title: A list of the existing UI components and usage examples
menu_title: A list of the existing UI components and usage examples
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_list_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## Overview
{:.no_toc}

This topic provides a complete list of all UI components implemented in Magento. It also gives examples of usage for them.

| 1. UI Component                                                                           | Link to constructor                                                                                                                   | Node name in definition.xml | Is top-level | Top-level parent component     | 2. Description                                                                                                         | Has template |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|--------------|----------------------|---------------------------------------------------------------------------------------------------------------------|--------------|
| [Form|(http://devdocs.magento.com/guides/v2.1/ui-components/ui-form.html)]            | [fom.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/form.js]                               | <form>                      | Yes          |                      | Form component allows performing CRUD operations on an entity.                                                      |              |
| [Listing|(http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html)] | [listing.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/lib/core/collection.js]                 | <listing>                   | Yes          |                      | Listing is a basic component responsible for rendering grids, lists, and tiles.                                      |              |
| Fieldset                                                                            | [fieldset.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/fieldset.js]             | <fieldset>                  |              | Form                 | Container for visually grouped form elements (i.e. buttons, form fields.).                                                                        |              |
| Field                                                                               | --                                                                                                                                          | <field>                     |              | Form                 | Form field's abstract component                                                                                     |              |
| Group                                                                               | [group.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/group.js]                   | <multiline>                 |              | Form                 | Container for visually grouped fields close together with a single label                                                                    |              |
| Nav                                                                                 | [tab_group.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/tab_group.js]           | <nav>       (reverse this and tab later)   | Form                 | Creates a navigation bar with individual tabs                                                                                                                   |              |
| Tab                                                                                 | [tab.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/tab.js]                       | <tab>                       |              | Form                 | Area for the content accessed by clicking on the nav                                                                       |              |
| Insert                                                                              | [insert.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/insert.js]                 | *<container>                |              |                      | Abstract component (that is extended by two other components: InsertForm and InsertListing.                             |              |
| Insert Form                                                                         | [insert-form.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/insert-form.js]       | <insertForm>                |              | Form                 | Extends 'Insert', allows to dynamically visually insert a Form component                                     |              |
| Insert Listing                                                                      | [insert-listing.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/insert-listing.js] | <insertListing>             |              | Form                 | Extends 'Insert', allows to dynamically visually insert a Listing component                                  |              |
| Modal                                                                               | [modal-component.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/modal/modal-component.js]         | <modal>                     |              | Form                 | Wraps modal widget functionality into the modal UI Component                                                                  |              |
| Button                                                                              | [button.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/components/button.js]                 | <button>                    |              | ?? Ask later         | Allows to configure the target UI Components, their methods and parameters to pass, which will be executed on click |              |
| Button adapter                                                                      | [button-adapter.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/button-adapter.js]            | *<container>                |              | Form                 | Wraps the buttons and adds to a form created by the UI Component. For example, this component can be used to create a button bar.                                                      |              |

| Form provider                                                                       | [provider.js|https://github.com/magento/magento2/blob/develop/app/code/Magento/Ui/view/base/web/js/form/provider.js]                        | <dataSource>                |              | Form                 | Provides data for a form.                                                                                              | No           |
|   Form provider's client                                                              | [client.js|]                                                                                                                                |                             |              |                      |                                                                                                                     |              |







Notes: there is a <container> node in the definition.xml file. Any UI components that are not represented elsewhere in the definition.xml should use the <container> node.
Notes: the column called Top-level nested... the UI component must be nested in the specific top-level UI component. Or use magic workaround from Olha.

