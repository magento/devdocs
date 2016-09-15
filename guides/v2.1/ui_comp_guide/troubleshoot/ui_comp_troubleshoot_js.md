---
layout: default
group: UI_Components_guide
subgroup: troubleshoot
title: Debug UI components JavaScript
menu_title: Debug UI components JavaScript
menu_order: 1
version: 2.1
github_link: ui_comp_guide/troubleshoot/ui_comp_troubleshoot_js.md
---

## {{page.menu_title}}

{:.no_toc}

## Overview

This article describes how to define what UI components are used on a particular page, their JavaScript components and what data they use.

To define the UI components used on a page, you can use browser built-in developer tools, or install additionally a plugin, for example Knockoutjs context debugger for Google Chrome.

**Contents**
* TOC
{:toc}


## Debugging using Knockout.js plugin

To install the knockout debugging plugin for Google Chrome, take the following steps:

1. Open your Google Chrome browser.
2. Expand Google Chrome options drop-down (hamburger in upper right).
3. Select **Settings**.
4. In left pane, select **Extensions**.
5. Scroll to end of the page and click **Get more extensions** link.
6. In the **Search** field write **Knockoutjs context debugger** and press the **Enter** key.
7. In the result, find the extension named **Knockoutjs context debugger** (usually the first result), and click **Add to Chrome**.

To define the UI component using the plugin:

1. Open the required page in Chrome.
2. Point to the required element on the page, right-click and select **Inspect**. The developer tools panel opens.
3. In the right column of the panel, click the **Knockout context** tab. The tab displays the name and the configuration of the UI component instance.

A simple example:

1. Launch Magento Admin.
2. Navigate to **Products** > **Catalog** and click **Add Product**. The product creation page opens.
3. Right-click on the **Product Name** field and click **Inspect**. Go to the **Knockout context** tab. Here you can see the full context of the field, where you can find JS component file, component name, etc.
![Image Example]({{site.baseurl}}common/images/ui_comp_troubleshoot_chrome1.png)

## Debugging using pure Knockout

To retrieve the context within markup, you can also use the instance of Knockout: 

At first we need to get a Knockout instance from the browser console. To do so, use the [RequireJS ID]({{page.baseurl}} ui_comp_guide/concepts/ui_comp_requirejs_concept.html) `knockout`.

{%highlight js%}
var ko = require('knockout');
{%endhighlight%}

Now we have Knockout instance in the `ko` variable. We can use it to get a context of any DOM element.

{%highlight js%}
var context = ko.contextFor($0);
{%endhighlight%}

, where `$0` is a [special variable](https://developers.google.com/web/tools/chrome-devtools/debug/command-line/command-line-reference#section-1) in browser console. It contains a link to a DOM element that is last inspected.

For example:
{%highlight js%}
// Admin > Products > Catalog > Add Product
// Inspect "Product Name"
var fieldName = ko.contextFor($0).$data;

console.log(fieldName.name); // product_form.product_form.product-details.container_name.name
{%endhighlight%}

## Debugging using the uiRegistry

`uiRegistry` is a in-memory storage. Plain storage of entities by keys. Implements the `get()`, `set()`, and `has()` methods.

To debug the UI component JS, we first need to get a `uiRegistry` instance from the browser console. To do so, use the [RequireJs ID]({{page.baseurl}} ui_comp_guide/concepts/ui_comp_requirejs_concept.html) `uiRegistry`.

In the browser console enter the following:

{%highlight js%}
var registry = require('uiRegistry');
{%endhighlight%}

Now we have `uiRegistry` instance in the `registry` variable. We can use it to get an instance of any component.

{%highlight js%}
var component = registry.get('%componentName%');
{%endhighlight%}

For example:

{%highlight js%}
// Admin > Products > Catalog > Add Product
var fieldName = registry.get('product_form.product_form.product-details.container_name.name');
{%endhighlight%}

Lets look what we have in component variable. It keeps component context with all properties, we can see component file, component name and so on.

{%highlight js%}
console.log(fieldName.name); // product_form.product_form.product-details.container_name.name

fieldName.trigger('validate'); // will invoke validation
fieldName.visible(false); // will hide field from page
fieldName.visible(true);  // will show field again
fieldName.value(); // will show current field value
fieldName.value('New string value'); // will change field value to string 'New string value'
{%endhighlight%}
