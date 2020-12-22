---
youtube_id: 4q43-auwAbU
duration: "4:20"
group: "Fundamentals of Magento 2 Development"
title: "How to Add a JavaScript Module"
thumbnail: "fundamentals/thumbs/add-js-module.png"
menu_order: 1
---

Magento 2 uses requireJS as a tool to define the module structure.
However, in addition to requireJS, Magento 2 also has its own unique way to execute JavaScript code.
You’ll see this in the example we’re using.

We will develop a very simple JavaScript module that only provides the greeting “HELLO WORLD!”.
It will illustrate how Magento 2 works with JavaScript files, executing the code and passing parameters inside a script.
The steps we’ll need to take are:

1. Create a new module.
1. Create a requirejs-config.js and a JavaScript module file.
1. Create a layout update to add a template that will enable the JavaScript module.
1. Create a template file.
1. Add the module and test it.

Let’s go through each step.

## Step 1: Create a new module

We will create a new module called Learning_Js:

```bash
cd <magento2_root>
```

```bash
mkdir app/code/Learning
```

```bash
mkdir app/code/Learning/Js
```

Now create two files:

`app/code/Learning/Js/registration.php`

{% collapsible Show source code %}

```php?start_inline=1
<?php
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Learning_Js',
    __DIR__
);
```

{% endcollapsible %}

`app/code/Learning/Js/etc/module.xml`

{% collapsible Show source code  %}

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Learning_Js" setup_version="0.0.1">
    </module>
</config>
```

{% endcollapsible %}

## Step 2: Create a requirejs-config.js and a JavaScript module file

Next, we’ll create a view folder:

```bash
cd <magento2_root>
```

```bash
mkdir app/code/Learning/Js/view
```

```bash
mkdir app/code/Learning/Js/view/frontend
```

Add the file `app/code/Learning/Js/view/frontend/requirejs-config.js`:

{% collapsible Show source code %}

```js
var config = {
    map: {
        '*': {
            hello:           'Learning_Js/js/hello',
        }
    }
};
```

{% endcollapsible %}

Then add the JavaScript module:

```bash
mkdir app/code/Learning/Js/view/frontend/web
```

```bash
mkdir app/code/Learning/Js/view/frontend/web/js
```

And finally, add the file `app/code/Learning/Js/view/frontend/web/js/hello.js`:

{% collapsible Show source code %}

```js
define([
    "jquery"
], function($){
        "use strict";
        return function(config, element) {
            alert(config.message);
        }
    }
)
```

{% endcollapsible %}

## Step 3: Create a layout update to add a template that will enable the JavaScript module

First, we need to create the layout folder:

```bash
cd <magento2_root>
```

```bash
mkdir app/code/Learning/Js/view/frontend
```

```bash
mkdir app/code/Learning/Js/view/frontend/layout
```

And the add the file `catalog_product_view.xml`:

{% collapsible Show source code %}

```xml
<?xml version="1.0"?>
<page layout="1column" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Magento\Framework\View\Element\Template" template="Learning_Js::hello.phtml" />
        </referenceContainer>
    </body>
</page>
```

{% endcollapsible %}

## Step 4: Create a template file

Now, we’ll create the template that will enable JavaScript.

```bash
cd <magento2_root>
```

```bash
mkdir app/code/Learning/Js/view/frontend/templates
```

In the templates directory, add the file `app/code/Learning/Js/view/frontend/templates/hello.phtml`:

{% collapsible Show source code %}

```html
<div data-mage-init='{"hello": {"message": "HELLO WORLD!"}}'>
    Content
</div>
```

{% endcollapsible %}

This code enables our module.
It may look a little strange to those who have used requirejs before.
As mentioned earlier, Magento 2 has its own unique process for executing JavaScript code.

One way is to use the `data-mage-initattribute`,which takes a JSON object as a parameter (as can be seen in this example).
Each key of that object corresponds to the module and the value is a config.
In this case, the JavaScript module should return a function with two parameters: config and element.
(Again, this can be seen in our example.)

Other popular options for executing JavaScript code in Magento 2 include applying the same configuration to multiple DOM elements, or, when the JavaScript is not related to any DOM nodes, using an asterisk(*) instead of a CSS selector.

## Step 5: Add a module and test it

Finally, let’s add our module and test the result.

```bash
cd <magento2_root>
```

```bash
bin/magento setup:upgrade
```

```bash
bin/magento cache:clean
```

Now we’ll go to any product view page, and we should see the “HELLO WORLD!” message.
