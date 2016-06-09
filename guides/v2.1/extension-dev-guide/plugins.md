---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Magento plug-ins
menu_title: Magento plug-ins
menu_order: 10
version: 2.1
github_link21: extension-dev-guide/plugins.md
---

##{{page.menu_title}}


*  <a href="#plugin-intro">Introduction to Magento plug-ins</a>
*  <a href="#plugin-limit">Limitations</a>
*  <a href="#plugin-declare">Declare a plug-in</a>
*  <a href="#plugin-priority">Prioritize plug-ins</a>
*  <a href="#plugin-example">Example plug-ins</a>
*  <a href="#config-inheritance">Configuration inheritance</a>


<h2 id="plugin-intro">Introduction to Magento plug-ins</h2>

Magento enables you to change, or *extend*, the behavior of any original, public method in any Magento class. You can change the behavior of an *original method* by creating an extension. These extensions use the `Plugin` class and are therefore referred to as plug-ins.

To ensure that plug-ins work correctly, you must follow declaration and naming rules.

You use *interception* to reduce conflicts among extensions that change the behavior of the same class or method. You implement interception using the `Plugin` class, which observes public methods, and listener methods in this class. A plug-in changes behavior of an original class, but does not change a class itself. Because they can be called sequentially, according to a configured sort order, these plug-ins do not conflict.

Interception ensures that conflicting extensions run without intervention.

<h2 id="plugin-limit">Limitations</h2>

You cannot use plug-ins for:

<!-- * Classes created without dependency injection. That is, you cannot use plugins with classes that you create directly through the new operator. -->
* Final methods / classes
* Non-public methods
* Class methods (such as static methods)
* Inherited methods
* __construct
* Virtual types

<h2 id="plugin-declare">Declare a plug-in</h2>

You declare a plugin for an object in the <code>di.xml</code> file for a module:

<script src="https://gist.github.com/xcomSteveJohnson/c9a36d9ec887c4bbc34d.js"></script>

You must specify these elements:

* `type name`. A class, interface, or virtual type, which the plug-in observes.
* `plugin name`. An arbitrary plug-in name that identifies a plug-in. Also used to merge the configurations for the plug-in.
* `plugin type`. The name of a plug-in's class or its virtual type. Use the following schema when you specify this element: `\Vendor\Module\Plugin\<ModelName>Plugin`.
* `plugin sortOrder`. The order in which plug-ins that call the same method are run.
* `plugin disabled`. To disable a plug-in, set this element to `true`.

<h2 id="plugin-priority">Prioritize plug-ins</h2>

Several conditions influence how plug-ins apply to the same class or interface:

*  Whether a listener method in a plug-in should apply before, after, or around an original method.

   Use one or more of the following methods to extend or modify an original method's behavior with the interception functionality:

   *  Change the arguments of an original method using the before-listener.

       The before-listener also:

       *   Does not require you to declare unused arguments from the original method. See [Magento\Framework\Interception\Interceptor.php]({{site.mage2100url}}lib/internal/Magento/Framework/Interception/Interceptor.php#L118-L126){:target="_blank"} for details.
       *   Returns nothing if it modifies no arguments.

   *  Change the values returned by an original method using the after-listener.
   *  Change both the arguments and returned values of an original method using the around-listener.

      Unlike `before` or `after`, the `around` listener prevents the execution of the original method.
   *  Override an original method (which is referred to as a *conflicting change*).

      <div class="bs-callout bs-callout-info" id="info">
          <p>Overriding a class is a <em>conflicting</em> change. Extending a class's behavior is a <em>non-conflicting</em> change.
      </div>

*  The sort order of a plug-in.

   This parameter defines the order in which the plug-ins that use the same type of listener and call the same method are run.

   If several plug-ins apply to the same original method, the following sequence is observed:

   *  The before listener in a plug-in with the highest priority (that is, with the smallest value of <code>sortOrder</code> argument).
   *  The around listener in a plug-in with the highest priority (that is, with the smallest value of <code>sortOrder</code> argument).
   *  Other before listeners in plug-ins according to sort order specified for them (that is, from the smallest to the greatest value).
   *  Other around listeners in plug-ins according to the sort order specified for them (that is, from the smallest to the greatest value).
   *  The after listener in a plug-in with the lowest priority (that is, with the greatest value of <code>sortOrder</code> argument).
   *  Other after listeners in plug-ins, in the reverse sort order specified for them (that is, from the greatest to the smallest value).


<h2 id="plugin-example">Example plug-ins</h2>
To change the arguments of an original method or add some behavior before an original method is called, use the before-listener method. The method should return the changed argument, or an array of arguments, if the original method had multiple arguments. If the method returns `null`, no arguments are changed.

Prefix the name of the original method with `before` as the following sample shows:

{% highlight PHP %}
<?php

namespace My\Module\Plugin;

class ProductPlugin
{
    public function beforeSetName(\Magento\Catalog\Model\Product $subject, $name)
    {
        return ['(' . $name . ')'];
    }
}
?>
{% endhighlight %}

To change the values returned by an original method or add some behavior after an original method is called, use the after-listener method.

Prefix the name of the original method with `after` as the following sample shows:

{% highlight PHP %}
<?php

namespace My\Module\Plugin;

class ProductPlugin
{
    public function afterGetName(\Magento\Catalog\Model\Product $subject, $result)
    {
        return '|' . $result . '|';
    }
}
?>
{% endhighlight %}

To change both the arguments and returned values of an original method or add some behavior before and after an original method is called, use the around-listener method.

Prefix the name of the original listener with `around` as the following sample shows:

{% highlight PHP %}
<?php

namespace My\Module\Plugin;

class ProductPlugin
{
    public function aroundSave(\Magento\Catalog\Model\Product $subject, \Closure $proceed)
    {
        $this->doSmthBeforeProductIsSaved();
        $returnValue = $proceed();
        if ($returnValue) {
            $this->postProductToFacebook();
        }
        return $returnValue;
    }
}
?>
{% endhighlight %}

The around-listener method receives two parameters (`$subject` and `$proceed`), followed by the arguments belonging to an original method.

The `$subject` parameter provides access to all public methods of the original class.

The `$proceed` parameter calls the next plug-in or method.

<h2 id="config-inheritance">Configuration inheritance</h2>

<p>The configuration inheritance implies that a plug-in applied to a class or interface is derived by the classes or interfaces, which implement or inherit an original class or interface.</p>

You can use the configuration inheritance to implement AOP-like functionality with plug-ins, for instance, to observe the same methods of all models.

You can override the plug-ins defined in the global scope by changing `di.xml` file of an area.

#### Related topics

*  <a href="{{ site.gdeurl21 }}extension-dev-guide/depend-inj.html#dep-inj-compile">Definition compiler tool</a>
*  <a href="{{ site.gdeurl21 }}extension-dev-guide/depend-inj.html">Dependency injection</a>

#### Related information
* [The Plugin Integration Test Kata](http://vinaikopp.com/2016/03/07/04_the_plugin_integration_test_kata){:target="_blank"} by Magento contributor [Vinai Kopp](http://vinaikopp.com/blog/list)
* [The Around Interceptor Kata](http://vinaikopp.com/2016/02/22/03_the_around_interceptor_kata){:target="_blank"} by Magento contributor [Vinai Kopp](http://vinaikopp.com/blog/list)
