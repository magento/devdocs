---
group: extension-dev-guide
title: Register your component
version: 2.1
redirect_from:
  - /guides/v1.0/extension-dev-guide/build/component-registration.html
  - /guides/v2.0/extension-dev-guide/component-registration.html
---

Magento components, including modules, themes, and language packages, must be registered in the Magento system through the Magento `ComponentRegistrar` class.

Each component must have a file called `registration.php` in its root directory. For example, here is the `registration.php` file for Magento's [AdminNotification module]({{ site.mage2000url }}app/code/Magento/AdminNotification/registration.php). Depending on the type of component, registration is performed through `registration.php` by adding to it as follows:

## Register modules {#register-modules}

Register modules with:

     ComponentRegistrar::register(ComponentRegistrar::MODULE, '<VendorName_ModuleName>', __DIR__);

Here `<VendorName>` is the name of the company providing the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and `<ModuleName>` is the name of the module.

Avoid using "Ui" for your custom module name because the <code>%Vendor%_Ui</code> notation, required when specifying paths, might cause issues.

### Example
    use Magento\Framework\Component\ComponentRegistrar;
    ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);

## Register themes {#register-themes}

Register themes with:

     ComponentRegistrar::register(ComponentRegistrar::THEME, '<area>/<vendor>/<theme name>', __DIR__);

Here `<area>` is the functional area of the module (frontend, controller, and so on.), `<vendor>` is the name of the company providing the theme, and `<theme name>` is the name of the {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.

### Example
     ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Magento/luma', __DIR__);

## Register language packages {#register-lagpacks}

Register language packages with:

     ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, '<VendorName>_<packageName>', __DIR__);

Here `<VendorName>` is the name of the company providing the package and `<packageName>` is the name of the package.

### Example
     ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, 'magento_de_de', __DIR__);

## Invoke `registration.php` in `composer.json` with autoload {#register-autoload}

After you create your `registration.php` file and you are creating [your component's composer.json file]({{page.baseurl}}/extension-dev-guide/build/composer-integration.html), invoke your `registration.php` file in the `autoload` section of `composer.json`:

``` json
{
    "name": "Acme-vendor/bar-component",
    "autoload": {
        "psr-4": { "AcmeVendor\\BarComponent\\": "" },
        "files": [ "registration.php" ]
    }
}
```

### Sample `registration.php` file {#register-sample}

``` php
<?php

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);
```

#### Next
[URN schema validation]({{ page.baseurl }}/extension-dev-guide/build/XSD-XML-validation.html)
