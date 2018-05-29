---
group: UI_Components_guide
title: Fieldset сomponent
version: 2.2
github_link: ui_comp_guide/components/ui-fieldset.md
---

The Fieldset component implements a container for visually-grouped form elements, such as buttons and form fields.

## Core files

| Type                            | Filename                                                          |
| ------------------------------- | ----------------------------------------------------------------- |
| PHP Class                       | [`Magento/Ui/Component/Form/Fieldset.php`]                        |
| Javascript Module               | [`Magento/Ui/view/base/web/js/form/components/fieldset.js`]      |
| Template                        | [`Magento/Ui/view/base/web/templates/form/fieldset.html`]         |
| Configuration Schema Definition | [`Magento/Ui/view/base/ui_component/etc/definition/fieldset.xsd`] |
{:style="table-layout:auto;"}

## Configuration settings

Extends all [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) and `collapsible` configuration.

### Fieldset component-specific configuration

| Title               | Type    | Default | Description                                                                                                               |
| ------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `disabled`          | Boolean | `false` | Initial component's state. When `true`, users cannot take action on the element.                                          |
| `label`             | String  |         | Caption for an item in the UI component context.                                                                          |
| `visible`           | Boolean | `true`  | Initial component's visibility. When set to `false`, the `display: none` CSS style is added to the component's DOM block. |
| `additionalClasses` | Object  | {}      | Custom classes added to the component's DOM block.                                                                        |
| `level`             | Integer |         | Explicitly indicates the level of nesting([date-level] attribute).                                                        |
{:style="table-layout:auto;"}

### `collapsible` configuration:

| Title         | Type    | Default | Description                                                                       |
| ------------- | ------- | ------- | --------------------------------------------------------------------------------- |
| `collapsible` | Boolean | `false` | Enables/disables the collapsible functionality.                                   |
| `opened`      | Boolean | `false` | Initial collapsible state. Applied when the collapsible functionality is enabled. |
{:style="table-layout:auto;"}

[`Magento/Ui/Component/Form/Fieldset.php`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/Component/Form/Fieldset.php
[`Magento/Ui/view/base/web/js/form/components/fieldset.js`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/form/components/fieldset.js
[`Magento/Ui/view/base/web/templates/form/fieldset.html`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/templates/form/fieldset.html 
[`Magento/Ui/view/base/ui_component/etc/definition/fieldset.xsd`]: https://github.com/magento/magento2/blob/{{page.guide_version}}/app/code/Magento/Ui/view/base/ui_component/etc/definition/fieldset.xsd