---
group: ui-components-guide
subgroup: concepts
title: uiRegistry
menu_title: uiRegistry
menu_order: 110
---

`uiRegistry` is a in-memory storage, plain storage of entities by keys. Implements the `get()`, `set()`, and `has()` methods.

## JS debugging using uiRegistry {#debug_uiregistry}

To debug the UI component JS, we first need to get a `uiRegistry` instance from the browser console. To do so, use the [RequireJs ID]({{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html) `uiRegistry`.

In the browser console enter the following:

```js
var registry = require('uiRegistry');
```

Now we have `uiRegistry` instance in the `registry` variable. We can use it to get an instance of any component.

```js
var component = registry.get('componentName');
```

The `uiRegistry` instance allows you to search for components using property values.
If you know a unique property value of a component that you need to find, you can use the following code to get the component:

```js
var component = registry.get('property = propertyValue');
```

**Examples:**

The following code shows how to get a component by a full component name:

```js
// Admin > Products > Catalog > Add Product
var fieldName = registry.get('product_form.product_form.product-details.container_name.name');
```

The following code shows how to get a component by a property value:

```js
// Admin > Products > Catalog > Add Product
var fieldName = registry.get('index = name');
// or
fieldName = registry.get('inputName = product[name]');
```

The previous example gets the same JS component as using the full component name.

Lets look what we have in component variable. It keeps component context with all properties, we can see component file, component name and so on.

```js
console.log(fieldName.name); // product_form.product_form.product-details.container_name.name

fieldName.trigger('validate'); // will invoke validation
fieldName.visible(false); // will hide field from page
fieldName.visible(true);  // will show field again
fieldName.value(); // will show current field value
fieldName.value('New string value'); // will change field value to string 'New string value'
```
