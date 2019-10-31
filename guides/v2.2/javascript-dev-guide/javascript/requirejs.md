---
group: javascript-developer-guide
subgroup: 1_Javascript
title: RequireJS in Magento
---

This topic describes general concepts of how the [RequireJS library](http://requirejs.org){: target="_blank"} is used in Magento, with examples. Please refer to official RequireJS documentation for in-depth explanation.

## RequireJS introduction {#requirejs-intro}

RequireJS is a JavaScript file and module loader. It improves perceived page load times because it allows JavaScript to load in the background. In particular, it enables asynchronous JavaScript loading.

## RequireJS in Magento {#requirejs-in-magento}

### Configuration {#requirejs-config}

All configuration is done in the `requirejs-config.js` file. It has a single root object `config` which contains the configuration options described below. All the configuration settings are optional and are used only when required. The following snippet is a sample `requirejs-config.js` describing the structure of the file. Example [`requirejs-config.js` file]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/base/requirejs-config.js)

```javascript
var config = {
    'map': {...},
    'paths': {...}
    'shim': {...},
    'config': {
        'mixins': {...}
    }
}
```

#### map {#requirejs-config-map}

The `map` configuration maps (connects) any real AMD modules that calls `define()`, to the specified alias. In the snippet below, `*` means all loaded RequireJS modules can use the specified alias.

```javascript
map: {
    '*': {
        alias: 'Vendor_Module/js/complex/path/amd-module'
    }
}
```

Now we can use our `Vendor_Module/js/complex/path/module` using `alias` in any RequireJS module or config file without needing to type the entire path. For example, in Magento, `catalogAddToCart` is mapped to `Magento_Catalog/js/catalog-add-to-cart` and can be used anywhere as a RequireJS module name.

```javascript
map: {
    '*': {
        catalogAddToCart: 'Magento_Catalog/js/catalog-add-to-cart'
    }
}
```

#### paths {#requirejs-config-paths}

The `paths` configuration, similar to `map`, is used for aliasing not just any real AMD module that calls `define()`, but also any JS file (event from a URL), HTML templates, etc. Magento uses this to alias URLs and third party libraries.

```javascript
paths: {
    'alias': 'library/file',
    'another-alias': 'https://some-library.com/file'
}
```

#### deps {#requirejs-config-deps}

The `deps` configuration is used to add a dependency. It can either be used directly under `var config = {}` or under a [shim configuration](#requirejs-config-shim). Adding modules under an independent `deps` configuration will load the specified modules in all pages.

In this snippet, the custom `Vendor_Module/js/module` will be loaded in all pages.

```javascript
deps: ['Vendor_Module/js/module']
```

#### shim {#requirejs-config-shim}

The `shim` configuration is used to build a dependency on a third party library, since we cannot modify it.

When to use the `shim` configuration:

-  To add a new dependency to a third party library
-  To add a new dependency to a third party library which does not use an AMD module
-  To change load order by adding a dependency to a third party library

In this snippet, dependencies are added directly in an array, or it can be specified as an array under the `deps` key. The `exports` key is used to specify under what identifier the module is exported into. This export identifier can be used to access it.

```javascript
shim: {
    '3rd-party-library': ['myJSFile'],
    'another-3rd-party-library': {
        deps: ['myJSFile'],
        exports: 'another3rdPartyLibrary'
    }
}
```

#### mixins {#requirejs-config-mixin}

The `mixins` configuration is used to overwrite component methods of an AMD module which returns either a UI component,a jQuery widget, or a JS object. Unlike the above configuration properties, the `mixins` property is under the `config` property, apart from the parent object called **config**.

In this snippet, `Vendor_Module/js/module-mixin` will overwrite the existing component methods in `Vendor_Module/js/module` with the specified component methods. It is a convention to name the mixin by appending a `-mixin` to the original `path/to/js`, although not required.

```javascript
'config': {
    'mixins': {
        'Vendor_Module/js/module': {
            'Vendor_Module/js/module-mixin': true
        }
    }
}
```

The concept of Javascript mixins itself is explained in depth in [Using Javascript Mixins]({{ page.baseurl }}/javascript-dev-guide/javascript/js_mixins.html).
