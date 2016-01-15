---
layout: default
group: release-notes
title: Magento 2.0 Backward Incompatible Changes
menu_title: Backward Incompatible Changes
menu_order: 2
menu_node: 
github_link: release-notes/changes_2.0.md
---

This topic contains the backward incompatible changes that have been made in the Magento 2.0 since its release.

* TOC
{:toc}

## Module Magento_Catalog

### Module version 2.0.3 changes

#### Code changes

* General changes
  * **Reset** button has been removed
* POST data structure changed
  * The parent category ID `parent_id` is now posted in the `general` field set scope
  * The category data is split from the `general` sub-array to the specific sub-arrays by a field set name:
    
<table>
  <tr>
    <th>Module version 2.0.2</th>
    <th>Module version 2.0.3</th>
  </tr>
  <tr>
    <td>
    {%highlight php startinline=1%}
    [
        'general' => [
            'name' => 'Category',
            'is_enabled' => 1,
            'layout_update' => '<XML CODE>',
            'enabled' => 1
        ],
        ...
    ]
    
    {%endhighlight%}
    </td>
    <td>
    {%highlight php startinline=1%}
    [
        'general' => [
            'name' => 'Category',
            'is_enabled' => 1,
            'parent_id' => 3
        ],
        'custom_layout' => [
            'layout_update' => '<XML CODE>',
            'enabled' => 1
        ],
        ...
    ]
    {%endhighlight%}
    </td>
  </tr>
</table>

* The Google Optimizer POST data moved to a specific sub-array
* An `On\Off` fields 
  * An input type changed from `select` to `switcher`
  * Preprocessed on the category save controller action into the PHP true/false boolean value
    
<table>
  <tr>
    <th>Module version 2.0.2</th>
    <th>Module version 2.0.3</th>
  </tr>
  <tr>
    <td>
    Select option value (int, string)
    </td>
    <td>
    String:{'true'|'false'}
    </td>
  </tr>
</table>

* Checkboxes and radio buttons
  * Work as the `on/off` fields
  * Preprocessed on the category save controller action into the PHP true/false boolean value
* Category products grid
  * Rendered by UI component as a standalone block
  * Initialized via `magento-init` event

#### Form initialization changes

* A form is built with the UI components ([more info about form component](http://devdocs.magento.com/guides/v2.0/ui-components/ui-form.html) )
* The form is extended using the form configuration file `<magento2>/app/code/Magento/Catalog/view/adminhtml/ui_component/category_form.xml` (see [Overview of UI components](http://devdocs.magento.com/guides/v2.0/ui-components/ui-definition.html))
* The data provider `\Magento\Catalog\Model\Category\DataProvider` is used to set data and fields metadata for the form
* The default form data is now a part of metadata that is fetched from the `\Magento\Catalog\Model\Category\DataProvider`

#### Flow changes

* When **Products -> Categories** menu item is chosen, the first root category is selected for editing by default. A **New category**/**Root category** can be created only manually by choosing the corresponding button in the menu.