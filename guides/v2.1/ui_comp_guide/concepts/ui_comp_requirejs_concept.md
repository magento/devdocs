---
layout: default
group: UI_Components_guide
subgroup: concepts
title: About AMD modules and RequireJS
menu_title: About AMD modules and RequireJS
menu_order: 4
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_requirejs_concept.md
---

##  {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Overview

This topic discusses JavaScript modules and describes the role which RequireJS plays in Magento.

Magento uses AMD (asynchronous module definition) approach for JavaScript modules loading. Namely, Magento uses RequireJS and its [standard syntax](http://requirejs.org/docs/api.html#config).

## RequireJS configuration location

As Magento has a modular architecture we have an ability to define `requirejs-config.js` for each module, separately for each [area]({{page.baseurl}}architecture/archi_perspectives/components/modules/mod_and_areas.html): `frontend` or `admin`. (Or `base` if it is same for both, `frontend` and `admin`).

Following is the conventional location of `requirejs-config.js` (RequireJS configuration file):

- For modules: `<Module_dir>/view/<area>/requirejs-config.js`
- For themes: `<theme_dir>/requirejs-config.js`

## RequireJS configuration file

`requirejs-config.js` is a valid JavaScript file. It should define the `config` variable, which is a configuration variable.  

### Example of usages

Lets look at an example, the Catalog module. In the `<Magento_Catalog_module_dir>/view/base/requirejs-config.js` file we see the configuration variable:

{%highlight js%}
var config = {
    map: {
        '*': {
            categoryForm:       'Magento_Catalog/catalog/category/form',
            newCategoryDialog:  'Magento_Catalog/js/new-category-dialog',
            categoryTree:       'Magento_Catalog/js/category-tree',
            productGallery:     'Magento_Catalog/js/product-gallery',
            baseImage:          'Magento_Catalog/catalog/base-image-uploader',
            productAttributes:  'Magento_Catalog/catalog/product-attributes'
        }
    },
    deps: [
        'Magento_Catalog/catalog/product'
    ]
};
{%endhighlight%}


The `config` variable contains properties with the `map` and `deps` keys. These properties are equivalent to the native RequireJS properties. For example, in this case  the `map` property contains an object with the keys that are aliases to files and values that are real paths to files.

For a particular area, all modules and themes `requirejs-config.js` files are merged into a single file. This file is written to the `pub/static` directory. This occurs during the first launch of Magento in [develop or default mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html) or during static files generation using the [bin/magento setup:static-content:deploy]({{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html) console command.

The merged configuration will be loaded on the page right after `require.js` and will be used by `require()` and `define()` functions.

Example of how aliases can be used. Open a browser console on any Magento page and type:

{%highlight js%}

	require(['productGallery']); // load the module on the page
	var gallery1 = require('productGallery');
    var gallery2 = require('Magento_Catalog/js/product-gallery');
	console.log(gallery1); // it does not return a simple type
    console.log(gallery1 === gallery2); // they are the same

{%endhighlight%}


Tip: One more way that you can use `require` object is to retrieve a current configuration during runtime. Just type in a browser console:

	require.s.contexts._.config;
