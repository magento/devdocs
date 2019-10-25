---
group: javascript-developer-guide
subgroup: 1_Javascript
title: RequireJS in Magento
---  

## Overview {#requirejs-overview}  

This topic describes general concepts of how the [RequireJS library](http://requirejs.org){: target="_blank"} is used in Magento with examples. Please refer to official RequireJS documentation for indepth explanation.

## RequireJS Introduction {#requirejs-intro}

RequireJS is a JavaScript file and module loader. It improves the perceived page load time because it allows JavaScript to load in the background; in particular, it enables asynchronous JavaScript loading.

## RequireJS in Magento {#requirejs-in-magento}

### Configuration

All the configuration goes into the `requirejs-config.js` file. It has one root object `config` which can contain the configuration options described in below. All the configuration options are optional and are used when required only. The following snippet is a sample `requirejs-config.js` describing the structure of the file.

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

####   Map

The `map` configuration aliases any real AMD module that calls `define()` , to the specified alias for purpose of simplicity and ease of use. In the below snippet, `*` means all loaded RequireJS modules can use the specified alias.

```javascript
'map': {
    '*': {
        'alias': 'Vendor_Module/js/complex/path/amd-module'
    }
}
```

Now we can use our `Vendor_Module/js/complex/path/module` using `alias` in any RequireJS module or config file without needing to type the entire path.

#### Paths

The `paths`  configuration, similar to `map` configuration is used for aliasing not just any real AMD module that calls `define()`, but also any JS file (event from a URL), HTML templates, etc. Magento heavily uses this to alias URLs and also for third party libraries. Again, it is done only for the purpose of simplicity and ease of use. 

```javascript
'paths': {
    'alias': 'library/file',
    'another-alias': 'https://some-library.com/file'
}
```

#### Shim

The `shim` configuration is used to build a dependency on a third party library, since we cannot modify it. 

When to use the `shim` configuration:

-  To add a new dependency to a third party library
-  To add a new dependency to a third party library which doesn't use an AMD module
-  To change load order by adding a dependency to a third party library

In the below snippet, dependencies can be added directly in an array, or it can be specified as an array under the `deps` key. The `exports` key is used to specify under what identifier the module is exported into. This export identifier can be used to access it.

```javascript
'shim': {
    '3rd-party-library': ['myJSFile'],
    '3rd-party-library': {
        deps: ['myJSFile'],
        exports: '3rdPartyLibrary'
    }
}
```

#### Mixin

The `mixins` configuration is used to overwrite component methods of an AMD module which returns either a UI component, or a jQuery widget, or a JS object. Unlike the above configuration properties, the `mixins` property is under the `config` property, apart from the parent object being called **config**. 

In the below snippet, `Vendor_Module/js/module-mixin` will overwrite with the specified component methods, the existing component methods in `Vendor_Module/js/module`. It is a general naming convention to name the mixin by appending a `-mixin` to the original `path/to/js`, although not necessary.

```javascript
'config': {
    'mixins': {
        'Vendor_Module/js/module': {
            'Vendor_Module/js/module-mixin': true
        }
    }
}
```

The concept of Javascript mixins itself is explained in depth in [Using Javascript Mixins](https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/js_mixins.html).
