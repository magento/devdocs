---
group: ui-components-guide
subgroup: concepts
title: uiRegistry
menu_title: uiRegistry
menu_order: 110
---

`uiRegistry` is a in-memory storage, plain storage of entities by keys. Implements the `get()`, `set()`, and `has()` methods.

## JS debugging using uiRegistry {#debug_uiregistry}

To debug the UI component JS, we first need to get a `uiRegistry` instance from the browser console. To do so, use the [RequireJs ID]({{ page.baseurl }}/javascript-dev-guide/javascript/requirejs_concept.html) `uiRegistry`.

In the browser console enter the following:

```js
var registry = require('uiRegistry');
```

Now we have `uiRegistry` instance in the `registry` variable. We can use it to get an instance of any component.

```js
var component = registry.get('%componentName%');
```

For example:

```js
// Admin > Products > Catalog > Add Product
var fieldName = registry.get('product_form.product_form.product-details.container_name.name');
```

Lets look what we have in component variable. It keeps component context with all properties, we can see component file, component name and so on.

```js
console.log(fieldName.name); // product_form.product_form.product-details.container_name.name

fieldName.trigger('validate'); // will invoke validation
fieldName.visible(false); // will hide field from page
fieldName.visible(true);  // will show field again
fieldName.value(); // will show current field value
fieldName.value('New string value'); // will change field value to string 'New string value'
```
