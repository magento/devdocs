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

Extensions that wish to intercept and change the behavior of a *public method* can create a `Plugin` class which are referred to as plugins.

This [interception](https://glossary.magento.com/interception) approach reduces conflicts among extensions that change the behavior of the same class or method. Your `Plugin` class implementation changes the behavior of a class function, but it does not change the class itself. Because they can be called sequentially according to a configured sort order, these interceptors do not conflict with one another.

#### Limitations

Plugins cannot be used with any of the following:

* Final methods
* Final classes
* Non-public methods
* Static methods
* `__construct`
* Virtual types
* Objects that are instantiated before `Magento\Framework\Interception` is bootstrapped
* Objects that are not instantiated by the ObjectManager (e.g. by using `new` directly).

### Declaring a plugin

A plugin for a class object is declared in the <code>di.xml</code> file in your [module](https://glossary.magento.com/module).

```xml 
<config>
    <type name="{ObservedType}">
      <plugin name="{pluginName}" type="{PluginClassName}" sortOrder="1" />
    </type>
</config>
```

You must specify these elements:

* `type name`: A class or interface which the plugin observes.
* `plugin name`: An arbitrary plugin name that identifies a plugin. Also used to merge the configurations for the plugin.
* `plugin type`: The name of a plugin's class or its virtual type. Use the following naming convention when you specify this element: `\Vendor\Module\Plugin\<ModelName>Plugin`.

The following elements are optional:

* `plugin sortOrder`: The order in which plugins that call the same method are run.
* `plugin disabled`: To disable a plugin, set this element to `true`. The default value is `false`.
  * Use this property to disable core or third-party plugins in your `di.xml` file.

### Defining a plugin

A plugin is used to extend or modify a public method's behavior by applying code before, after, or around that observed method.

The first argument for the before, after, and around methods is an object that provides access to all public methods of the observed method's class.

#### Before methods

Before methods run prior to an observed method. These methods must have the same name as the observed method with 'before' as the prefix.

You can use before methods to change the arguments of an observed method by returning a modified argument. If there are multiple arguments, the method should return an array of those arguments. Returning `null` will indicate that the arguments for the observed method should not be modified.

Below is an example of a before method modifying the `$name` argument before passing it on to the observed `setName` method.

```php 
<?php
namespace My\Module\Plugin;

class ProductPlugin
{
    public function beforeSetName(\Magento\Catalog\Model\Product $subject, $name)
    {
        return ['(' . $name . ')'];
    }
}
```

#### After methods

After methods run following the completion of the observed method. These methods must have the same name as the observed method with 'after' as the prefix.

These methods can be used to modify the results of an observed method and are required to have a return value.

Below is an example of an after method modifying the return value `$result` of an observed methods call.

```php 
<?php
namespace My\Module\Plugin;

class ProductPlugin
{
    public function afterGetName(\Magento\Catalog\Model\Product $subject, $result)
    {
        return '|' . $result . '|';
    }
}
```

#### Around methods

Around methods are defined such that their code is run both before and after the observed method. This allows you to completely override a method. Around methods must have the same name as the observed method with 'around' as the prefix.

Before the list of the original method's arguments, around methods receive a `callable` that will allow a call to the next method in the chain. When the `callable` is called, the next plugin or the observed function is called.

{: .bs-callout .bs-callout-warning }
If the around method does not call the `callable`, it will prevent the execution of all the plugins next in the chain and the original method call.

Below is an example of an around method adding behavior before and after an observed method:

```php 
<?php
namespace My\Module\Plugin;

class ProductPlugin
{
    public function aroundSave(\Magento\Catalog\Model\Product $subject, callable $proceed)
    {
        $this->doSmthBeforeProductIsSaved();
        $returnValue = $proceed();
        if ($returnValue) {
            $this->postProductToFacebook();
        }
        return $returnValue;
    }
}
```

When you wrap a method which accepts arguments, your plugin must also accept those arguments and you must forward them when you invoke the <code>proceed</code> callable. You must be careful to match the original signature of the method with regards to default parameters and type hints.

For example, the following code defines a parameter of type <code>SomeType</code> which is nullable:

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

If you wrapped this method with a plugin like below:

```php 
<?php
namespace My\Module\Plugin;

class MyUtilityPlugin
{
    public function aroundSave(\My\Module\Model\MyUtility $subject, callable $proceed, SomeType $obj)
    {
      //do something
    }
}
```

Note the missing <code>= null</code>. Now, if the original method was called with <code>null</code> [PHP](https://glossary.magento.com/php) would throw a fatal error as your plugin does not accept <code>null</code>.

It is also worth noting that you are responsible for forwarding the arguments from the plugin to the <code>proceed</code> callable. If you are not using/modifying the arguments, you could use variadics and argument unpacking to achieve this simply:

```php 
<?php
namespace My\Module\Plugin;

class MyUtilityPlugin
{
    public function aroundSave(\My\Module\Model\MyUtility $subject, callable $proceed, ...$args)
    {
      //do something
      $proceed(...$args);
    }
}
```

### Prioritizing plugins

The `sortOrder` property for plugins determine when their before, after, or around methods get called when several plugins are observing the same method.

The prioritization rules for ordering plugins:

* Prior to execution of the observed method, plugins will be executed from lowest to greatest `sortOrder`.

  * During each plugin execution, the current plugin's before method is executed first.
  * After the before plugin is executed, the current plugin's around method will wrap and execute the next plugin or observed method.

* Following the execution of the observed method, plugins will be executed from greatest to lowest `sortOrder`.

  * During each plugin execution, the current plugin will first finish executing its around method.
  * When the around method is complete, the plugin executes its after method before moving on to the next plugin.

**Example**

Given the following plugins observing the same method with the following properties:

|               | PluginA          | PluginB          | PluginC          |
| :-----------: | :--------------: | :--------------: | :--------------: |
| **sortOrder** | 10               | 20               | 30               |
| **before**    | beforeDispatch() | beforeDispatch() | beforeDispatch() |
| **around**    |                  | aroundDispatch() | aroundDispatch() |
| **after**     | afterDispatch()  | afterDispatch()  | afterDispatch()  |

The execution flow will be as follows:

  * `PluginA::beforeDispatch()`
  * `PluginB::beforeDispatch()`
  * `PluginB::aroundDispatch()` (Only the first half until `callable` is called)

    * `PluginC::beforeDispatch()`
    * `PluginC::aroundDispatch()` (Only the first half until `callable` is called)

      * `Action::dispatch()`

    * `PluginC::aroundDispatch()` (Only the second half after `callable` is called)
    * `PluginC::afterDispatch()`

  * `PluginB::aroundDispatch()` (Only the second half after `callable` is called)
  * `PluginB::afterDispatch()`
  * `PluginA::afterDispatch()`

### Configuration inheritance

All plugins added for interfaces and inherited classes will be added to classes that implement or inherit those classes and interfaces.

Plugins defined in the global scope will be applied when the system is in a specific area (i.e. frontend, backend, etc). These global plugin configuration can also be extended or overridden via an area's `di.xml`.

For example, the developer can disable a global plugin in the [backend](https://glossary.magento.com/backend) area by disabling it in the specific `di.xml` file for the backend area.

### Related topics

*  [Dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html)
*  [Events and observers]({{ page.baseurl }}/extension-dev-guide/events-and-observers.html)

### Related information

* [The Plugin Integration Test Kata](http://vinaikopp.com/2016/03/07/04_the_plugin_integration_test_kata){:target="_blank"} by Magento contributor [Vinai Kopp](http://vinaikopp.com/blog/list){:target="_blank"}
* [The Around Interceptor Kata](http://vinaikopp.com/2016/02/22/03_the_around_interceptor_kata){:target="_blank"} by Magento contributor [Vinai Kopp](http://vinaikopp.com/blog/list){:target="_blank"}
