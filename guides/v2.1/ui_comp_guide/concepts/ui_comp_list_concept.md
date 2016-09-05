---
layout: default
group: UI_Components_guide
subgroup: concepts
title: A list of the existing UI components 
menu_title: A list of the existing UI components
menu_order: 5
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_list_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## Overview
This page will contain a list of all Magento UI components. This topic is being updated.

## Magento UI components

### Form
- **UI Component**: [Form](http://devdocs.magento.com/guides/v2.1/ui-components/ui-form.html)  
- **Link to constructor**: [form.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/form.js)
- **Node name in `definition.xml`**: `<form>`
- **Is top-level**: Yes
- **Top-level parent component**: - 
- **Description**: Form component allows performing CRUD operations on an entity.
- **Has template**: Yes

### Listing

- **UI Component**: [Listing](http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html) 
- **Link to constructor**: [listing.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/lib/core/collection.js)
- **Node name in `definition.xml`**: `<listing>`
- **Is top-level**: Yes
- **Top-level parent component**: - 
- **Description**: Listing is a basic component responsible for rendering grids, lists, and tiles.
- **Has template**: Yes.

### Fieldset
- **UI Component**: Fieldset
- **Link to constructor**: [fieldset.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/components/fieldset.js)
- **Node name in `definition.xml`**: `<fieldset>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Container for visually grouped form elements (i.e. buttons, form fields.)
- **Has template**: 

### Field
- **UI Component**: Field
- **Link to constructor**: 
- **Node name in `definition.xml`**: `<field>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Form field's abstract component.
- **Has template**: 

### Group

- **UI Component**: Group
- **Link to constructor**: [group.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/components/group.js) 
- **Node name in `definition.xml`**: `<multiline>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Container for visually grouped fields close together with a single label.
- **Has template**: 


### Tab

- **UI Component**: Tab
- **Link to constructor**: [tab.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/components/tab.js) 
- **Node name in `definition.xml`**: `<tab>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Area for the content accessed by clicking on the Nav.
- **Has template**: 

### Nav

- **UI Component**: Nav
- **Link to constructor**: [tab_group.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/components/tab_group.js)
- **Node name in `definition.xml`**: `<nav>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Creates a navigation bar with individual tabs.
- **Has template**: 

### Insert

- **UI Component**: Insert
- **Link to constructor**: [insert.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/components/insert.js)
- **Node name in `definition.xml`**: `<container>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Abstract component (that is extended by two other components: InsertForm and InsertListing).
- **Has template**: 


### Insert Form

- **UI Component**: Insert Form
- **Link to constructor**: [insert-form.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/components/insert-form.js)
- **Node name in `definition.xml`**: `<insertForm>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Extends 'Insert', allows to dynamically visually insert a Form component.
- **Has template**: 

### Insert Listing

- **UI Component**: Insert Listing
- **Link to constructor**: [insert-listing.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/components/insert-listing.js)
- **Node name in `definition.xml`**: `<insertListing>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Extends the Insert component, allows to dynamically visually insert a Listing component.
- **Has template**:

### Modal

- **UI Component**: [Modal](http://devdocs.magento.com/guides/v2.1/ui-components/ui-modal.html)
- **Link to constructor**: [modal-component.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/modal/modal-component.js) 
- **Node name in `definition.xml`**: `<modal>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Wraps modal widget functionality into the modal UI component.
- **Has template**:

### Button adapter

- **UI Component**: Button adapter
- **Link to constructor**: [button-adapter.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/button-adapter.js) 
- **Node name in `definition.xml`**: `<container>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Wraps the buttons and adds to a form created by the UI component. For example, this component can be used to create a button bar. 
- **Has template**:

###  Form provider 

- **UI Component**: Button adapter
- **Link to constructor**: [provider.js]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/provider.js)
- **Node name in `definition.xml`**: `<dataSource>`
- **Is top-level**: No
- **Top-level parent component**: Form
- **Description**: Provides data for a form.
- **Has template**:



<div class="bs-callout bs-callout-info" id="info">
<p>There is a <code>&lt;container&gt;</code> node in the <code>definition.xml</code> file. Any UI components that are not represented elsewhere in the <code>definition.xml</code> should use the <code>&lt;container&gt;</code> node.</p>
</div>



<!-- 
Notes: the column called Top-level nested... the UI component must be nested in the specific top-level UI component. Or use magic workaround from Olha. -->

