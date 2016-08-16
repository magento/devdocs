---
layout: default
group: UI_Components
subgroup: troubleshoot
title: Debug UI components JavaScript
menu_title: Debug UI components JavaScript
menu_order: 1
version: 2.1
github_link: ui_comp_guide/troubleshoot/ui_comp_troubleshoot.md
---

## Debug UI Components JavaScript
Review the following methods for debugging the JavaScript within UI components.

### Debugging using Knockout.js  plugin

Installation knockout debugging plugin for GoogleChrome:

	1) Open your GoogleChrome browser.
	2) Expand GoogleChrome options dropdown
	3) Select "Setting" item
	4) Go to "Extensions" tab
	5) Scroll to end page and press "Go more extensions link"
	6) In search field write "Knockoutjs context debugger" and press "Enter" key
	7) Press "Add to chrome" button

After we added _Knockoutjs context debugger_ plugin to Google Chrome, now we can open "developer tools" panel and see "Knockout context" tab.

To get some component context need find html node from component template and go to "Knockout context". In this tab we will see component context with all properties and methods list.

We expect that UI component has been added via layouts and tag `<uiComponent name=""/>`. You should go to the page where you expect an UI component.

Consider simple example:
Launch magento backend, go to catalog tab and press "Create new product" button and then inspect "Product Name" field. Go to "Knockout context" tab.
We see full "Product name" field context, where we can find js component file, component name, etc.

### Debugging using the uiRegistry

The uiRegistry is a component that stores all components hierarchy. For more information about uiRegistry we can look at [uiRegistry page]({{page.baseurl}}....).

To debug the UI component JS, we first need to get a `uiRegistry` instance from the browser console. To do so, use the [RequireJs ID]({{page.baseurl}}....require.js topic) (alias or full path to the `.js` file that stores the `uiRegistry` class). 

To get the `uiRegistry` instance, in the browser console enter the following:

{%highlight js%}
var registry = require('uiRegistry');
{%endhighight%}

Now we have uiRegistry instance in the `registry` variable. We can use it to get an instance of any component. 

{%highlight js%}
var component = registry.get('%componentName%'); 
{%endhighight%}

For example:

{%highlight js%}
// Admin area > Catalog > Products > Create new Product
var fieldName = registry.get('product_form.product_form.product-details.container_name.name'); 
{%endhighight%}

For more information about using more complex queries, refer to [uiRegistry topic]({{page.baseurl}}.....).

Lets look what we have in component variable. It keeps component context with all properties, we can see component file, component name, etc.

{%highlight js%}
console.log(fieldName.name); // product_listing.product_listing_source
console.log(fieldName.data); // Object { name: 'product_listing.product_listing_source', ... }

fieldName.trigger('validate'); // will invoke validation
fieldName.visible(false); // will hide field from page
fieldName.visible(true);  // will show field again
fieldName.value(); // will show current field value
fieldName.value('New string value'); // will change field value to string 'New string value'
{%endhighight%}

Do we need to add more context, considering that we have a troubleshooting check list??????