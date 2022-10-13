---
group: javascript-developer-guide
subgroup: 1_Javascript
title: Locate JavaScript components
functional_areas:
  - Testing
---

## Overview {#js_debug_overview}

This topic discusses how to define which [JavaScript](https://glossary.magento.com/javascript) components and widgets are used on a particular Magento store page.

## Locate JS components: walkthrough {#locate_widget}

To locate scripts used for a certain element:

1. Open the store page in a browser, and locate the element\'s `class` or `id` using browser debugging tools, such as Firebug (Firefox) or Inspect Element (Chrome).
1. Select to view the page source.
1. Find the corresponding element in the page source and see if there are `data-mage-init` or `<script type="text/x-magento-init">` calls on this element, its children or parents. The calls contain the names of the scripts, as described in [JavaScript initialization].
1. To find the source file of the used script:
   1. In the `<head></head>` section of the page source, click link to `requirejs-config.js` file. The file contains the Magento RequireJS configuration, collected from all modules of the current [theme](https://glossary.magento.com/theme).

      {:.bs-callout-tip}
      Alternatively, you can open the `requirejs-config.js` file from the file system: `pub/static/frontend/<Vendor>/<theme>/<locale>/requirejs-config.js`

   1. In the `var config = {...}` section of `requirejs-config.js`, find the required script name, and view the path to its source file. This path is relative to certain directories, depending on whether it contains [module](https://glossary.magento.com/module) reference:

      -  If the module context is not specified, the path is relative to `<theme_dir>/web` (current theme). If the file is not found there, according to the assets fallback, it is searched for in the parent theme `web` directory, and then the `lib/web`(library) directory. For example, `knockoutjs/knockout` [script name]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/base/requirejs-config.js#L10) resolves to `lib/web/knockoutjs/knockout.js`.
      -  If the module context is specified, the path is relative to `<theme_dir>/<Namespace>_<Module>/web` (current theme module). If the file is not found there, according to the assets fallback, it is searched for in the same location in the parent theme files, and then in the `<module_dir>` (module) directory. For example, `Magento_Catalog/js/list` [script name]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/frontend/requirejs-config.js#L9) resolves to `Magento_Catalog/view/frontend/web/js/list.js`.

## Locate JS component: example

As we discussed in the preceding section, you use browser debugging tools to define which JavaScript component or [widget](https://glossary.magento.com/widget) is used for an element. An example follows. To find what JS components are used for displaying the main navigation menu in the Luma theme:

Using the Inspect Element feature of the browser, define that the menu section `id` is `store.menu`:

![Using the Inspect Element define the id]

Search the page source for `store.menu` (illustration follows):

![Search the page source for the store.menu string]

We can see that there\'s a `data-mage-init` attribute in the scope of the `<div id= "store.menu"></div>`

```js
data-mage-init='{"menu":{"responsive":true, "expanded":true, "position":{"my":"left top","at":"left bottom"}}}
```

According to the JS components initialization notation, this means that this code calls `menu.js`.

To find the source file of `menu.js`, open `requirejs-config.js` by clicking the link to it in the section of the page source. The path to `menu.js` is specified there as follows:

```js
"menu": "mage/menu",
```

This means we should check for `mage/menu.js` the following locations, in the following priority order (according to the [assets fallback rules]):

1. `<Magento_Luma_theme_dir>/web/js` (current theme JS files)
1. `<Magento_Blank_theme_dir>/web/js` (parent theme JS files)
1. `lib/web` (library files)

There is no `mage/menu.js` in the current theme or parent theme JS files, so the source file for menu component used for the main navigation menu is [`lib/web/mage/menu.js`]

[Using the Inspect Element define the id]: {{site.baseurl}}/common/images/fdg_js_debug1.png
[Search the page source for the store.menu string]: {{site.baseurl}}/common/images/fdg_js_debug2.png
[assets fallback rules]: {{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static
[`lib/web/mage/menu.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/menu.js
[JavaScript initialization]: {{site.baseurl}}/videos/fundamentals/add-a-javascript-module/
[assets fallback]: {{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static
