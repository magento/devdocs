---
layout: howtom2devgde_chapters
title: Plugins
---

<h1 id="plugin-overview">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}dev-guide-devbeta/bk-dev-guide.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="plugin-intro">Introduction</h2>

In Magento 2, you can change, or *extend*, the behavior of any original method in any Magento class.

An *original method* is an existing Magento class method. You can change the behavior of an original method by creating an extension. Extensions use the *Plugin* class to change the behavior of an original method in Magento code.

To ensure that plugins work correctly, you must follow declaration and naming rules.

You use *interception* to reduce conflicts among extensions that change the behavior of the same class or method. You implement interception through the plugin class, which observes public methods, and listener methods in this class. Plugin changes behavior of an original class, but does not change a class itself. Because they can be called sequentially, according to a configured sort order, these plugins do not conflict. This technique is called interception.

Interception ensures that conflicting extensions run without intervention in the system.

<h2 id="plugin-limit">Limitations</h2>

You cannot use plugins for:

* Classes created without dependency injection. That is, you cannot use plugins with classes that you create directly through the new operator.
* Final methods.
* Final classes.

<h2 id="plugin-declare">Declare a plugin</h2>

You declare a plugin for an object in the <code>di.xml</code> file for a module:

<script src="https://gist.github.com/xcomSteveJohnson/c9a36d9ec887c4bbc34d.js"></script>

You must specify these elements:

* `type name`. A class, interface, or virtual type, which the plugin observes.
* `plugin name`. An arbitrary plugin name that identifies a plugin. Also used to merge the configurations for the plugin.
* `plugin type`. The name of a plugin's class or its virtual type. Use the following schema when you specify this element: {ModelName}\Plugin.
* `plugin sortOrder`. The order in which plugins that call the same method are run.
* `plugin disabled`. To disable a plugin, set this element to `true`.

<h2 id="plugin-priority">Prioritize plugins</h2>

Several conditions influence how plugins apply to the same class/interface:

<ul>
   <li>
      <p>Whether a listener method in a plugin should apply before, after, or around an original method.</p>
      <p>Use one or more of the following methods to extend/modify an original method's behavior with the interception functionality:
      <ul>
         <li>Change the arguments of an original method through the before-listener.</li>
         <li>Change the values returned by an original method through the after-listener.</li>
         <li>Change both the arguments and returned values of an original method through the around-listener.</li>
         <li>
            <p>Override an original method (a conflicting change).
            <div class="bs-callout bs-callout-info" id="info">
               <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
               <span class="glyphicon-class">
                  <p>Overriding a class is a conflicting change. Extending a class's behavior is non-conflicting change.</p>
               </span>
            </div>
            </p>
         </li>
      </ul>
   <li>
      <p>The sort order of a plugin.</p>
      <p>This parameter defines the order in which the plugins that use the same type of listener and call the same method are run.</p>
      <p>If several plugins apply to the same original method, the following sequence is observed:
      <ul>
         <li>The before listener in a plugin with the highest priority (that is, with the smallest value of <code>sortOrder</code> argument).</li>
         <li>The around listener in a plugin with the highest priority (that is, with the smallest value of <code>sortOrder</code> argument).</li>
         <li>Other before listeners in plugins according to sort order specified for them (that is, from the smallest to the greatest value).</li>
         <li>Other around listeners in plugins according to the sort order specified for them (that is, from the smallest to the greatest value).</li>
         <li>The after listener in a plugin with the lowest priority (that is, with the greatest value of <code>sortOrder</code> argument).</li>
         <li>Other after listeners in plugins, in the reverse sort order specified for them (that is, from the greatest to the smallest value).</li>
      </ul>
      </p>
   </li>
</ul>

<h2 id="plugin-intro">Example plugins</h2>

<p>To change the arguments of an original method or add some behavior before an original method is called, use the before-listener method.</p>
<p>The before prefix should be added to the name of an original method.</p>
<p>For example:</p>


<pre>
namespace My\Module\Model\Product;

class Plugin
{
    public function beforeSetName(\Magento\Catalog\Model\Product <code>$subject</code>, $name)
    {
        return array('(' . $name . ')');
    }
}
</pre>


<p>To change the values returned by an original method or add some behavior after an original method is called, use the after-listener method.</p>

<p>The after prefix should be added to the name of an original method.</p>

<p>For example:</p>

<script src="https://gist.github.com/xcomSteveJohnson/4a68a7c692536d520ffe.js"></script>


<p>To change both the arguments and returned values of an original method or add some behavior before and after an original method is called, use the around-listener method.</p>

<p>The around prefix should be added to the name of an original method.</p>

<p>For example:</p>

<script src="https://gist.github.com/xcomSteveJohnson/8e25785abf1754c59ccb.js"></script>


<p>The around-listener method receives two parameters (<code>$subject</code> and <code>$proceed</code>) followed by the arguments belonging to an original method.</p>

<p>The <code>$subject</code> parameter provides access to all public methods of the original class.</p>

<p>The <code>$proceed</code> parameter calls the next plugin or method.</p>

<h2 id="config-inheritance">Configuration inheritance</h2>

<p>The configuration inheritance implies that a plugin applied to a class or interface is derived by the classes/interfaces, which implement/inherit an original class/interface.</p>

<p>You can use the configuration inheritance to implement AOP-like functionality with plugins, for instance, to observe the same methods of all models.</p>

<p>You can override the plugins defined in the global scope by changing <code>di.xml</code> file of an area.</p>

<h2 id="compiler-tool">The compiler tool</h2>
<p class="q">Reviewer: More information required. What is the compiler tool and how do I use it?</pre>
<p>The compiler tool automatically generates the classes to manage your plugins.</p>
<p>The compiler tool also handles the performance slowdown caused by configuration inheritance.</p>
