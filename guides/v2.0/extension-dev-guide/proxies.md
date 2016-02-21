---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Proxies
menu_title: Proxies
menu_order: 7
contributor_name: Classy Llama
contributor_link: http://www.classyllama.com/
github_link: extension-dev-guide/proxies.md
---
##{{page.menu_title}}

Magento's <a href="{{ site.gdeurl }}extension-dev-guide/depend-inj.html#dep-inj-preview-cons">constructor injection pattern</a> enables you to flexibly manage your class dependencies. However, constructor injection also means that a chain reaction of object instantiation is often the result when you create an object. (The original object has dependencies that have dependencies, and those objects have dependencies, and so on.)

If a class's constructor is particularly resource-intensive, this can lead to unnecessary performance impact when another class depends on it, if the expensive object does not end up being needed during a particular request. (You can display a *dependency graph* of such objects by enabling <a href="{{ site.gdeurl }}config-guide/bootstrap/mage-profiler.html">profiling</a>.)

As an example, consider the following two classes:

{% highlight PHP %}
<?php
class SlowLoading
{
    public function __construct()
    {
        // ... Do something resource intensive
    }

    public function getValue()
    {
        return 'SlowLoading value';
    }
}

class FastLoading
{
    protected $slowLoading;

    public function __construct(
        SlowLoading $slowLoading
    ){
        $this->slowLoading = slowLoading;
    }

    public function getFastValue()
    {
        return 'FastLoading value';
    }

    public function getSlowValue()
    {
        return $this->slowLoading->getValue();
    }
}
?>
{% endhighlight %}

Assume that class `SlowLoading` has a non-trivial performance impact when instantiated (perhaps due to a complex database query or a call to a third-party web API). Because of the dependency injection in the constructor of `FastLoading`, this impact is incurred if `FastLoading` is instantiated.  Note, however, that the `SlowLoading` instance is used only in the method `getSlowValue`, meaning that the resource cost is unnecessary if this method is never called on the `FastLoading` object.

### Proxies are generated code
Magento has a solution for this situation: proxies. <a href="http://en.wikipedia.org/wiki/Proxy_pattern" target="_blank">Proxies</a> extend other classes to become lazy-loaded versions of them. That is, a real instance of the class a proxy extends created only after one of the class's methods is actually called. A proxy implements the same interface as the original class and so can be used as a dependency anywhere the original class can.  Unlike its parent, a proxy has only once dependency: the object manager.

Proxies are generated code and therefore do not need to be manually written.  (See <a href="{{ site.gdeurl }}extension-dev-guide/code-generation.html">Code generation</a> for more information.) Simply reference a class in the form `\Original\Class\Name\Proxy`, and the class is generated if it does not exist.

### Solve the issue using a proxy
Using the preceding example, the constructor signature of FastLoading could be changed as follows:

{% highlight PHP %}
<?php
    public function __construct(
        SlowLoading\Proxy $slowLoading
    ){
        $this->slowLoading = slowLoading;
    }
?>
{% endhighlight %}

Now, the `SlowLoading` class is instantiated&mdash;and therefore the resource intensive constructor operations not performed&mdash;until the SlowLoading object is used (that is, if the `getSlowValue` method is called).

The preceding example of directly referencing a proxy in a constructor parameter would function correctly.  However, a better practice would be to leave the original interface or class reference in your constructor signature and specify the proxy using the dependency injection configuration instead:

{% highlight XML %}
<type name="FastLoading">
    <arguments>
        <argument name="slowLoading" xsi:type="object">SlowLoading\Proxy</argument>
    </arguments>
</type>
{% endhighlight %}

In this way, proxies can be dropped in to replace their corresponding classes&mdash;or proxy replacements _removed_&mdash;without touching application code.

As a practical example of a proxy, you can see the <a href="{{ site.mage2000url }}app/code/Magento/Store/Model/StoreManager.php" target="_blank">StoreManager</a> class and then see the generated `StoreManager` proxy class.