---
group: php-developer-guide
title: Register your component
---

Magento components, including modules, themes, and language packages, must be registered in the Magento system through the Magento `ComponentRegistrar` class.

Each component must have a file called `registration.php` in its root directory. For example, here is the `registration.php` file for Magento's [AdminNotification module]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/AdminNotification/registration.php). Depending on the type of component, registration is performed through `registration.php` by adding to it as follows:

## Register modules {#register-modules}

Register modules with:

```php
ComponentRegistrar::register(ComponentRegistrar::MODULE, '<VendorName_ModuleName>', __DIR__);
```

Here `<VendorName>` is the name of the company providing the [module](https://glossary.magento.com/module) and `<ModuleName>` is the name of the module.

Avoid using "Ui" for your custom module name because the <code>%Vendor%_Ui</code> notation, required when specifying paths, might cause issues.

### Example

```php
use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);
```

## Register themes {#register-themes}

Register themes with:

```php
ComponentRegistrar::register(ComponentRegistrar::THEME, '<area>/<vendor>/<theme name>', __DIR__);
```

Here `<area>` is the functional area of the module (frontend, controller, and so on.), `<vendor>` is the name of the company providing the theme, and `<theme name>` is the name of the [theme](https://glossary.magento.com/theme).

### Example

```php
use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Magento/luma', __DIR__);
```

## Register language packages {#register-langpacks}

Register language packages with:

```php
ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, '<VendorName>_<packageName>', __DIR__);
```

Here `<VendorName>` is the name of the company providing the package and `<packageName>` is the name of the package.

### Example

```php
use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, 'magento_de_de', __DIR__);
```

## Register libraries {#register-libraries}

Libraries should be registered using

```php
ComponentRegistrar::register(ComponentRegistrar::LIBRARY, '<vendor>/<library_name>', __DIR__);
```

Here `<vendor>` is the name of the company providing the library. `<library_name>` is the library name.

### Example

```php
use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::LIBRARY, 'magento/framework', __DIR__);
```

## Invoke `registration.php` in `composer.json` with autoload {#register-autoload}

After you create your `registration.php` file and you are creating [your component's composer.json file]({{page.baseurl}}/extension-dev-guide/build/composer-integration.html), invoke your `registration.php` file in the `autoload` section of `composer.json`:

```json
{
 "name": "Acme-vendor/bar-component",
 "autoload": {
    "psr-4": { "AcmeVendor\\BarComponent\\": "" },
    "files": [ "registration.php" ]
 }
}
```

### Sample `registration.php` file {#register-sample}

```php
use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);
```

{:.ref-header}
Next step

[URN schema validation]({{ page.baseurl }}/extension-dev-guide/build/XSD-XML-validation.html)
