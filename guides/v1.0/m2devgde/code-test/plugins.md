---
layout: howtom2devgde_chapters
title: Plugins
---

<h1 id="plugin-overview">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/m2devgde-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="plugin-intro">Introduction</h2>

In Magento 2, you can change, or *extend*, the behavior of any original method in any Magento class.

An *original method* is an existing Magento class method. You can change the behavior of an original method by creating an extension. Extensions use the *Plugin* class to change the behavior of an original method in Magento code.

To ensure that plugins work correctly, you must follow declaration and naming rules.

You use *interception* to reduce conflicts among extensions that change the behavior of the same class or method. You implement interception through the plugin class, which observes public methods, and listener methods in this class. Plugin changes behavior of an original class, but does not change a class itself. Because they can be called sequentially, according to a configured sort order, these plugins do not conflict. This technique is called interception.

Interception ensures that conflicting extensions run without intervention in the system.


<h2 id="plugin-intro">Limitations</h2>

You cannot use plugins for:

* Classes created without dependency injection. That is, you cannot use plugins with classes that you create directly through the new operator.
* Final methods.
* Final classes.

<h2 id="plugin-intro">Declare a plugin</h2>

You declare a plugin for an object in the <code>di.xml</code> file for a module:

<blockquote>
<pre>
&lt;config>
    &lt;type name="{ObservedType}">
        &lt;plugin name="{pluginName}" type="{PluginClassName}" sortOrder="1" disabled="true"/>
    &lt;/type>
&lt;/config>
</pre>
</blockquote>

You must specify these elements:

* `type name`. A class, interface, or virtual type, which the plugin observes.
* `plugin name`. An arbitrary plugin name that identifies a plugin. Also used to merge the configurations for the plugin.
* `plugin type`. The name of a plugin's class or its virtual type. Use the following schema when you specify this element: {ModelName}\Plugin.
* `plugin sortOrder`. The order in which plugins that call the same method are run.
* `plugin disabled`. To disable a plugin, set this element to `true`.

<h2 id="plugin-intro">Prioritize plugins</h2>

There are several conditions that influence how plugins apply to the same class/interface:

* Whether a listener method in a plugin should apply before, after, or around an original method. There are four ways to extend/modify an original method's behavior with the interception functionality:
* * Changing the arguments of an original method via the before-listener
* * Changing the values returned by an original method via the after-listener
* * Changing both the arguments and returned values of an original method via the around-listener
* * Overriding an original method (a conflicting change)

Note: Overriding a class is a conflicting change. Extending a class's behavior is non-conflicting change.

The sort order of a plugin. This parameter defines in what order the plugins using the same type of listener and calling the same method are to be executed.

If several plugins apply to the same original method, the following sequence is observed:

* The before listener in a plugin with the highest priority (that is, with the smallest value of `sortOrder` argument).
* The around listener in a plugin with the highest priority (that is, with the smallest value of `sortOrder` argument).
* Other before listeners in plugins according to sort order specified for them (that is, from the smallest to the greatest value).
* Other around listeners in plugins according to the sort order specified for them (that is, from the smallest to the greatest value).
* The after listener in a plugin with the lowest priority (that is, with the greatest value of `sortOrder` argument).
* Other after listeners in plugins, in the reverse sort order specified for them (that is, from the greatest to the smallest value).

<h2 id="plugin-intro">Example plugins</h2>

To change the arguments of an original method or add some behavior before an original method is called, use the before-listener method. The before prefix should be added to the name of an original method. For example:

<blockquote>
<pre>
namespace My\Module\Model\Product;

class Plugin
{
    public function beforeSetName(\Magento\Catalog\Model\Product $subject, $name)
    {
        return array('(' . $name . ')');
    }
}
</pre>
</blockquote>

To change the values returned by an original method or add some behavior after an original method is called, use the after-listener method. The after prefix should be added to the name of an original method. For example:

<blockquote>
<pre>
namespace My\Module\Model\Product;

class Plugin
{
    public function afterGetName(\Magento\Catalog\Model\Product $subject, $result)
    {
        return '|' . $result . '|';
    }
}
</pre>
</blockquote>

To change both the arguments and returned values of an original method or add some behavior before and after an original method is called, use the around-listener method. The around prefix should be added to the name of an original method. For example:

<blockquote>
<pre>
namespace My\Module\Model\Product;

class Plugin
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
</pre>
</blockquote>

The around-listener method will receive two parameters ($subject and $proceed) followed by the arguments belonging to an original method. $subject parameter will provide an access to all public methods of the original class. $proceed parameter will call the next plugin or method.
## Configuration inheritance

The configuration inheritance implies that a plugin applied to a class or interface is derived by the classes/interfaces, which implement/inherit an original class/interface.

You can use the configuration inheritance to implement AOP-like functionality with plugins, for instance, to observe the same methods of all models.

You can override the plugins defined in the global scope by changing di.xml file of an area.
<h2 id="compiler-tool">The compiler tool</h2>

Compiler tool will automatically generate the classes to manage your plugins. Compiler tool is also to be used to handle the performance slowdown caused by configuration inheritance.
<h2 id="generate-interceptions">Generate interceptions</h2>
For details, see "Generating the Utility Classes.""