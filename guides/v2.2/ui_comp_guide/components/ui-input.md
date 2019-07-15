---
group: ui-components-guide
title: Input component
---

The Input component implements the [HTML](https://glossary.magento.com/html) `<input type="text">` field.

## Configuration options

|Option|Description|Type|Default|
|--- |--- |--- |--- |
|`class`|Path to the PHP class responsible for the backend implementation of the component.|String| - |
|`component`|The path to the component’s `.js` file in terms of RequireJS.|String|`Magento_Ui/js/form/element/abstract`|
|`displayArea`|Renders the component in the location that was declared in the layout.|String| `body` |
|`extends`|Extends configuration from specified component.|String| - |
|`formElement`|Form Element.|`hidden`, `file`, `input`, `date`, `boolean`, `checkbox`, `checkboxset`, `email`, `select`, `multiselect`, `text`, `textarea`, `price`, `radioset`, `wysiwyg`|`input`|
|`name`|Element's index in the scope of the current collection that will be used to build its unique identifier.|String| - |
|`provider`|Reference to component data provider. For example, for the "New Customer" page on the back-end side it will be equal to `customer_form.customer_form_data_source` |String| - |
|`sortOrder`|Element's position in the collection|Int| `0` |
|`template`|The path to the component’s `.html` template.|String|`ui/form/field`|
