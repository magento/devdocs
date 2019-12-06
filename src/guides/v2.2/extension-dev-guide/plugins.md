---
group: php-developer-guide
subgroup: 99_Module Development
title: Plugins (Interceptors)
menu_title: Plugins (Interceptors)
menu_order: 10
redirect_from:

---

### Overview

A plugin, or interceptor, is a class that modifies the behavior of public class functions by intercepting a function call and running code before, after, or around that function call. This allows you to *substitute* or *extend* the behavior of original, public methods for any *class* or *interface*.

Extensions that wish to intercept and change the behavior of a *public method* can create a `Plugin` class.

This [interception](https://glossary.magento.com/interception) approach reduces conflicts among extensions that change the behavior of the same class or method. Your `Plugin` class implementation changes the behavior of a class function, but it does not change the class itself. Magento calls these interceptors sequentially according to a configured sort order, so they do not conflict with one another.

#### Limitations

Plugins can not be used on following:

*  Final methods
*  Final classes
*  Non-public methods
*  Class methods (such as static methods)
*  `__construct`
*  Virtual types
*  Objects that are instantiated before `Magento\Framework\Interception` is bootstrapped

### Declaring a plugin

The <code>di.xml</code> file in your [module](https://glossary.magento.com/module) declares a plugin for a class object:

```xml
<config>
    <type name="{ObservedType}">
      <plugin name="{pluginName}" type="{PluginClassName}" sortOrder="1" disabled="false" />
    </type>
</config>
```

You must specify these elements:

*  `type name`. A class or interface which the plugin observes.
*  `plugin name`. An arbitrary plugin name that identifies a plugin. Also used to merge the configurations for the plugin.
*  `plugin type`. The name of a plugin's class or its virtual type. Use the following naming convention when you specify this element: `\Vendor\Module\Plugin\<ClassName>`.

The following elements are optional:

*  `plugin sortOrder`. Plugins that call the same method run them using this order.
*  `plugin disabled`. To disable a plugin, set this element to `true`. The default value is `false`.

### Defining a plugin

By applying code before, after, or around a public method, a plugin extends or modifies that method's behavior.

The first argument for the before, after, and around methods is an object that provides access to all public methods of the observed method's class.

### Plugin method naming convention

It is a Magento best practice to capitalize the first letter of the class method name for which you want to create a plugin before adding `before`, `around` or `after` prefixes to it.

For example, to create a plugin for the `setName` method of some class:

```php
...
    public function setName($name)
    {
        ...
    }
...
```

In the plugin class, the `setName` method may have one of the following names:

*  `beforeSetName`
*  `aroundSetName`
*  `afterSetName`

If the first letter in the name of the class method name for which you want to create a plugin is the `underscore` character, then you do not need to capitalize it in the plugin class.

For example, to create a plugin for the `_construct` method of some class:

```php
...
    public function _construct()
    {
        ...
    }
...
```

Use the following method names for the `_construct` method in the plugin class:

*  `before_construct`
*  `around_construct`
*  `after_construct`

#### Before methods

Magento runs all before methods ahead of the call to an observed method. These methods must have the same name as the observed method with 'before' as the prefix.

You can use before methods to change the arguments of an observed method by returning a modified argument. If there is more than one argument, the method should return an array of those arguments. If the method does not change the argument for the observed method, it should return a `null` value.

Below is an example of a before method modifying the `$name` argument before passing it on to the observed `setName` method.

```php
<?php
namespace My\Module\Plugin;

class ProductAttributesUpdater
{
    public function beforeSetName(\Magento\Catalog\Model\Product $subject, $name)
    {
        return ['(' . $name . ')'];
    }
}
```

#### After methods

Magento runs all after methods following the completion of the observed method. Magento requires these methods have a return value and they must have the same name as the observed method with 'after' as the prefix.

You can use these methods to change the result of an observed method by modifying the original result and returning it at the end of the method.

Below is an example of an after method modifying the return value `$result` of an observed methods call.

```php
<?php
namespace My\Module\Plugin;

class ProductAttributesUpdater
{
    public function afterGetName(\Magento\Catalog\Model\Product $subject, $result)
    {
        return '|' . $result . '|';
    }
}
```

The after methods have access to all the arguments of their observed methods. When the observed method completes, Magento passes the result and arguments to the next after method that follows. If the observed method does not return a result (`@return void`), then it passes a `null` value to the next after method.

Below is an example of an after method that accepts the `null` result and arguments from the observed `login` method for [`Magento\Backend\Model\Auth`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Backend/Model/Auth.php){:target="_blank"}:

```php
<?php
namespace My\Module\Plugin;

class AuthLogger
{
    private $logger;

    public function __construct(\Psr\Log\LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    /**
     * @param \Magento\Backend\Model\Auth $authModel
     * @param null $result
     * @param string $username
     * @return void
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function afterLogin(\Magento\Backend\Model\Auth $authModel, $result, $username)
    {
        $this->logger->debug('User ' . $username . ' signed in.');
    }
}
```

After methods do not need to declare all the arguments of their observed methods except those that the method uses and any arguments from the observed method that come before those used arguments.

The following example is a class with an after method for [`\Magento\Catalog\Model\Product\Action::updateWebsites($productIds, $websiteIds, $type)`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Product/Action.php){:target="_blank"}:

```php

class WebsitesLogger
{
    private $logger;

    public function __construct(\Psr\Log\LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function afterUpdateWebsites(\Magento\Catalog\Model\Product\Action $subject, $result, $productIds, $websiteIds)
    {
        $this->logger->log('Updated websites: ' . implode(', ',  $websiteIds));
    }
}

```

In the example, the `afterUpdateWebsites` function uses the variable `$websiteIds`, so it declares that variable as an argument. It also declares `$productIds` because it comes before `$websiteIds` in the parameter signature of the observed method. The after method did not list `$type` because it did not use it inside the method nor does it come before `$websiteIds`.

{:.bs-callout-warning}
If an argument is optional in the observed method, then the after method should also declare it as optional.

#### Around methods

Magento runs the code in around methods before and after their observed methods. Using these methods allow you to override an observed method. around methods must have the same name as the observed method with 'around' as the prefix.

{:.bs-callout-warning}
Avoid using around method plugins when they are not required because they increase stack traces and affect performance.
The only use case for around method plugins is when the execution of all further plugins and original methods need termination.
Use after method plugins if you require arguments for replacing or altering function results.

Before the list of the original method's arguments, around methods receive a `callable` that will allow a call to the next method in the chain. When your code executes the `callable`, Magento calls the next plugin or the observed function.

{:.bs-callout-warning}
If the around method does not call the `callable`, it will prevent the execution of all the plugins next in the chain and the original method call.

Below is an example of an around method adding behavior before and after an observed method:

```php
<?php
namespace My\Module\Plugin;

class ProductAttributesUpdater
{
    public function aroundSave(\Magento\Catalog\Model\Product $subject, callable $proceed)
    {
        $someValue = $this->doSmthBeforeProductIsSaved();
        $returnValue = null;

        if ($this->canCallProceedCallable($someValue)) {
            $returnValue = $proceed();
        }

        if ($returnValue) {
            $this->postProductToFacebook();
        }

        return $returnValue;
    }
}
```

When you wrap a method which accepts arguments, your plugin must accept those arguments and you must forward them when you invoke the `proceed` callable. You must be careful to match the default parameters and type hints of the original signature of the method.

For example, the following code defines a parameter of type `SomeType`, which is nullable:

```php
<?php
namespace My\Module\Model;

class MyUtility
{
    public function save(SomeType $obj = null)
    {
        //do something
    }
}
```

You should wrap this method with a plugin:

```php
<?php
namespace My\Module\Plugin;

class MyUtilityUpdater
{
    public function aroundSave(\My\Module\Model\MyUtility $subject, callable $proceed, SomeType $obj = null)
    {
      //do something
    }
}
```

Note if you miss `= null` and Magento calls the original method with `null`, [PHP](https://glossary.magento.com/php) would throw a fatal error as your plugin does not accept `null`.

You are responsible for forwarding the arguments from the plugin to the `proceed` callable. If you are not using/modifying the arguments, you could use variadics and argument unpacking to achieve this:

```php
<?php
namespace My\Module\Plugin;

class MyUtilityUpdater
{
    public function aroundSave(\My\Module\Model\MyUtility $subject, callable $proceed, ...$args)
    {
      //do something
      $proceed(...$args);
    }
}
```

### Prioritizing plugins

The `sortOrder` property for plugins determines when to call the before, around, or after methods when more than one plugin is observing the same method.

The prioritization rules for ordering plugins:

*  Before the execution of the observed method, Magento will execute plugins from lowest to greatest `sortOrder`.

   *  During each plugin execution, Magento executes the current plugin's before method.
   *  After the before method completes execution, the current plugin's around method wraps and initiates the next plugin or observed method.

*  Following the execution of the observed method, Magento will execute plugins from greatest to lowest `sortOrder`.

   *  During each plugin execution, the current plugin will first finish executing its around method.
   *  When the around method completes, the plugin executes its after method before moving on to the next plugin.

**Example:**

The table shows the plugins observing the same method with the following properties:

|                          | PluginA          | PluginB                        | PluginC                        | Action           |
| :----------------------: | :--------------: | :----------------------------: | :----------------------------: | :--------------: |
| **sortOrder**            | 10               | 20                             | 30                             |                  |
| **before**               | beforeDispatch() | beforeDispatch()               | beforeDispatch()               |                  |
| **around (first half)**  |                  | aroundDispatch() [first half]  | aroundDispatch() [first half]  |                  |
| **original**             |                  |                                |                                | dispatch()       |
| **around (second half)** |                  | aroundDispatch() [second half] | aroundDispatch() [second half] |                  |
| **after**                | afterDispatch()  | afterDispatch()                | afterDispatch()                |                  |
| :----------------------: | :--------------: | :----------------------------: | :----------------------------: | :--------------: |

The execution flows in the following order:

*  `PluginA::beforeDispatch()`
*  `PluginB::beforeDispatch()`
*  `PluginB::aroundDispatch()` (Magento calls the first half until `callable`)

   *  `PluginC::beforeDispatch()`
   *  `PluginC::aroundDispatch()` (Magento calls the first half until `callable`)

      *  `Action::dispatch()`

   *  `PluginC::aroundDispatch()` (Magento calls the second half after `callable`)
   *  `PluginC::afterDispatch()`

*  `PluginB::aroundDispatch()` (Magento calls the second half after `callable`)
*  `PluginB::afterDispatch()`
*  `PluginA::afterDispatch()`

### Configuration inheritance

Classes and interfaces that are implementations of or inherit from classes that have plugins will also inherit plugins from the parent class.

Magento uses plugins defined in the global scope when the system is in a specific area (such as frontend or backend). You can extend or override these global plugin configurations with an area's `di.xml` file.

For example, the developer can disable a global plugin in the [backend](https://glossary.magento.com/backend) area by disabling it in the specific `di.xml` file for the backend area.

{:.ref-header}
Related topics

*  [Dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html)
*  [Events and observers]({{ page.baseurl }}/extension-dev-guide/events-and-observers.html)
*  [The Plugin Integration Test Kata](http://vinaikopp.com/2016/03/07/04_the_plugin_integration_test_kata){:target="_blank"} by Magento contributor [Vinai Kopp](http://vinaikopp.com/blog/list){:target="_blank"}
*  [The Around Interceptor Kata](http://vinaikopp.com/2016/02/22/03_the_around_interceptor_kata){:target="_blank"} by Magento contributor [Vinai Kopp](http://vinaikopp.com/blog/list){:target="_blank"}
