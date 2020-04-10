---
group: configuration-guide
title: system.xml reference
functional_areas:
  - Configuration
  - System
---

The `system.xml` file is responsible to provide the possibility to manage the System Configuration.
This document provides a general reference for the `system.xml`. The `system.xml` file is located under `etc/adminhtml/system.xml` in a given Magento 2 extension.

As already mentioned, the `system.xml` file is located under `etc/adminhtml/system.xml`. The following code snippet shows the bare skeleton of the file:

``` xml
<?xml version="1.0" ?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Config:etc/system_file.xsd">
    <system>
        <!-- PLACE YOUR MODULE SPECIFIC CONFIGURATION HERE -->  
    </system>
</config>
```

{:.bs-callout-tip}
If you want instant *XSD validation in your IDE, you can run `bin/magento dev:urn-catalog:generate [--ide IDE] [--] <path>`.

## Tab // Sections // Groups // Fields

In the `system.xml`, it is possible to define four different types which are related to each other. The following section will describe the relations between tabs, sections, groups and fields.
The following screenshot displays the Magento 2 System Configuration in the Admin backend. The Red squares mark the different types, that are defined in the `system.xml`:

![Screenshot displaying a configured section in the Magento Admin.](img/magento2-system-configuration.png)

Tabs are used to semantically split different configuration areas. Each Tab can contains one or more sections, which can also be referenced as sub menu. A section contains one or more groups.
Each group lists one or more fields. A group can also be used to add a general description for the following fields. As mentioned, each group can have one or more fields. Fields are the smallest entity
in the system configuration context.

## Sections

A `<section>`-Tag references to either an existing or a new section in the system configuration. The following screenshot shows a rendered section in the Magento Admin:

### Section attribute reference

A `<section>`-Tag can have the following attributes:

| Attribute       | Description                                                                                                                                         | Type     | Required |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------|----------|
| `id`            | Defines the identifier that is used referencing the section.                                                                                        | `typeId` | required |
| `translate`     | Defines the field that should be translatable. Provide `label` to make the label translatable.                                                      | `string` | optional |
| `type`          | Defines the input type of the rendered html element. Defaults to `text`.                                                                            | `string` | optional |
| `sortOrder`     | Defines the sort order of the section. High numbers will push the section to the bottom of the page; low numbers will drive the section to the top. | `float`  | optional |
| `showInDefault` | Defines whether the section is shown in the default store. Specify `1` to show the section and `0` to hide the section.                             | `int`    | optional |
| `showInStore`   | Defines whether the section is shown on store level. Specify `1` to show the section and `0` to hide the section.                                   | `int`    | optional |
| `showInWebsite` | Defines whether the section is shown on website level. Specify `1` to show the section and `0` to hide the section.                                 | `int`    | optional |
| `canRestore`    | Defines if the  section can be restored to default.                                                                                                 | `int`    | optional |
| `advanced`      | Deprecated since 100.0.2.                                                                                                                           | `bool`   | optional |
| `extends`       | By providing an identifier of another section, the content of this node will extend the section that you referenced.                                | `string` | optional |

## Tabs

A `<tab>`-Tag references to either an existing or a new tab in the system configuration.

### Tab attribute reference

A `<tab>`-Tag can have the following attributes:

| Attribute       | Description                                                                                                                                         | Type     | Required |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------|----------|
| `id`        | Defines the identifier that is used referencing the section.                                                                                        | `typeId` | required |
| `translate` | Defines the field that should be translatable. Provide `label` to make the label translatable.                                                      | `string` | optional |
| `type`      | Defines the input type of the rendered html element. Defaults to `text`.                                                                            | `string` | optional |
| `sortOrder` | Defines the sort order of the section. High numbers will push the section to the bottom of the page; low numbers will drive the section to the top. | `float`  | optional |
| `class`     | Adds a defined css class to the rendered tab html element.                                                                                          | `string` | optional |

## Groups

The `<group>`-Tag is used to group fields together.

### Group attribute reference


### Group node reference

| Node                        | Description                                                                                                                                                                               | Type        |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `label`                     | Defines the label that is displayed in the frontend.                                                                                                                                      | string      |
| `fieldset_css`              | Adds one or more css classes to a group fieldset.                                                                                                                                         | string      |
| `frontend_model`            | Specifies a different frontend model to change the rendering and modify the output.                                                                                                       | typeModel   |
| `clone_model`               | Specifies a given model to clone fields.                                                                                                                                                  | typeModel   |
| `clone_fields`              | Enabled or disabled cloning of fields.                                                                                                                                                    | int         |
| `help_url`                  | Not extensible. See below.                                                                                                                                                                | typeUrl     |
| `more_url`                  | Not extensible. See below.                                                                                                                                                                | typeUrl     |
| `demo_link`                 | Not extensible. See below.                                                                                                                                                                | typeUrl     |
| `comment`                   | Adds a comment below the group label. By using `<![CDATA[//]]>` html can be applied.                                                                                                      | string      |
| `hide_in_single_store_mode` | Whether the group should be visible in single store mode. `1` hides the group; `0` shows the group.                                                                                       | int         |
| `field`                     | Define on or more field that should be available under this group.                                                                                                                        | field       |
| `group`                     | Define one or more sub groups.                                                                                                                                                            | unbounded   |
| `depends`                   | Can be used to declare dependencies to other fields. Is used to only show specific fields/groups when a given field has a value of `1`. This node expects a `section/group/field`-string. | depends     |
| `attribute`                 | Custom attributes can be used by frontend models. Ususally used to make a given frontend model more dynamic.                                                                              | attribute   |
| `include`                   | Used to include additional `system_include.xsd` compatible files. Usually used to structure large `system.xml` files.                                                                     | includeType |

{:.bs-callout-warning}
The nodes `more_url`, `demo_url` and `help_url` are defined by a PayPal frontend model that is only used once. These nodes are not reusable.

## Fields


### Field Validation

A field can have one or more validator-classes assigned to make sure that the input of the user meets the requirements of the extension. Validation rules can be applied with the `<validate>`-Tag.
The following example validates a field and adds several different validation rules.

``` xml
<field id="A_CUSTOM_IDENTIFIER" showInDefault="0" showInWebsite="0">
    <validate>required-entry validate-clean-url no-whitespace</validate>
</field>
```

The following validation rules are available:

| Rule                          | Description                                                                                                                      |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| validate-no-html-tags	        | HTML tags are not allowed.                                                                                                       |
| validate-select	            | Please select an option.                                                                                                         |
| validate-no-empty	            | Empty Value                                                                                                                      |
| validate-alphanum-with-spaces	| Please use only letters (a-z or A-Z), numbers (0-9) or spaces only in this field.                                                |
| validate-data	                | Please use only letters (a-z or A-Z), numbers (0-9) or underscore (_) in this field, and the first character should be a letter. |
| validate-street	            | Please use only letters (a-z or A-Z), numbers (0-9), spaces and “#” in this field.                                               |
| validate-phoneStrict	        | Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.                                                   |
| validate-phoneLax	            | Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.                                                   |
| validate-fax	                | Please enter a valid fax number (Ex: 123-456-7890).                                                                              |
| validate-email	            | Please enter a valid email address (Ex: johndoe@domain.com).                                                                     |
| validate-emailSender	        | Please enter a valid email address (Ex: johndoe@domain.com).                                                                     |
| validate-password	            | Please enter 6 or more characters. Leading and trailing spaces will be ignored.                                                  |
| validate-admin-password	    | Please enter 7 or more characters, using both numeric and alphabetic.                                                            |
| validate-url	                | Please enter a valid URL. Protocol is required (http://, https:// or ftp://).                                                    |
| validate-clean-url	        | Please enter a valid URL. For example http://www.example.com or www.example.com.                                                 |
| validate-xml-identifier	    | Please enter a valid XML-identifier (Ex: something_1, block5, id-4).                                                             |
| validate-ssn	                | Please enter a valid social security number (Ex: 123-45-6789).                                                                   |
| validate-zip-us	            | Please enter a valid zip code (Ex: 90602 or 90602-1234).                                                                         |
| validate-date-au	            | Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006.                                     |
| validate-currency-dollar	    | Please enter a valid $ amount. For example $100.00.                                                                              |
