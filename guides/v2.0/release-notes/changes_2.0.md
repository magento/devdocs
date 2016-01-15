---
layout: default
group: release-notes
title: Magento 2.0 Backward Incompatible Changes
menu_title: Backward Incompatible Changes
menu_order: 2
menu_node: 
github_link: release-notes/changes_2.0.md
---

* TOC
{:toc}

This topic contains the backward incompatible changes that have been made in the Magento 2.0 since its release.

## Module Magento_CatalogRule

### Module version 2.0.1 changes

#### Code changes

* General changes
  * Reset button and feature have been removed
* POST data structure changed
  * parent category ID is now posted in the `general` field set scope
  * category data is split from the `general` sub-array to the specific sub-arrays by a field set name:
    
<table>
  <tr>
    <th>2.0.0</th>
    <th>2.0.1</th>
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

* Google Optimizer added
* On\Off fields for the convertation from `select` to `switcher`
  * Preprocessed on category save controller action into PHP true/false boolean value
    
<table>
  <tr>
    <th>Module version 2.0.0</th>
    <th>Module version 2.0.1</th>
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
  * Same as the `on/off` fields
  * Preprocessed on the category save controller action into the PHP true/false boolean value
* Category products grid changes
  * Rendered as a standalone block
  * Initialized via 'magento-init'

#### Form initialization changes

* Form is built with UI components (more info on http://devdocs.magento.com/guides/v2.0/ui-components/ui-form.html )
* Form is extended via form config (category_form.xml - see http://devdocs.magento.com/guides/v2.0/ui-components/ui-definition.html)
* Data provider \Magento\Catalog\Model\Category\DataProvider is used to set data and fields metadata for the form
* Default data is now a part of metadata that is fetched from \Magento\Catalog\Model\Category\DataProvider

#### Flow changes:

* First root category is selected for editing when Products -> Categories menu item is chosen, new category/root category can be created only manually by clicking on corresponding button in menu