---
group: php-developer-guide
subgroup: 99_Module Development
title: Proxies
menu_title: Proxies
menu_order: 7
contributor_name: Classy Llama
contributor_link: http://www.classyllama.com/
---

Magento's [constructor injection pattern]({{ page.baseurl }}/extension-dev-guide/depend-inj.html#constructor-injection) enables you to flexibly manage your class dependencies. However, constructor injection also means that a chain reaction of object instantiation is often the result when you create an object. (The original object has dependencies that have dependencies, and those objects have dependencies, and so on.)

If a class's constructor is particularly resource-intensive, this can lead to unnecessary performance impact when another class depends on it, if the expensive object does not end up being needed during a particular request. (You can display a *dependency graph* of such objects by enabling [profiling]({{ page.baseurl }}/config-guide/bootstrap/mage-profiler.html).)

As an example, consider the following two classes:

```php
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
        $this->slowLoading = $slowLoading;
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
```

Assume that class `SlowLoading` has a non-trivial performance impact when instantiated (perhaps due to a complex database query or a call to a third-party web API). Because of the dependency injection in the constructor of `FastLoading`, this impact is incurred if `FastLoading` is instantiated.  Note, however, that the `SlowLoading` instance is used only in the method `getSlowValue`, meaning that the resource cost is unnecessary if this method is never called on the `FastLoading` object.

### Proxies are generated code

Magento has a solution for this situation: proxies. [Proxies](http://en.wikipedia.org/wiki/Proxy_pattern){:target="_blank"} extend other classes to become lazy-loaded versions of them. That is, a real instance of the class a proxy extends is created only after one of the class's methods is actually called. A proxy implements the same interface as the original class and so can be used as a dependency anywhere the original class can.  Unlike its parent, a proxy has only one dependency: the object manager.

Proxies are generated code and therefore do not need to be manually written.  (See [Code generation]({{ page.baseurl }}/extension-dev-guide/code-generation.html) for more information.) Simply reference a class in the form `\Original\Class\Name\Proxy`, and the class is generated if it does not exist.

Using the preceding example, a proxy can be passed into the constructor arguments instead of the original class, using DI configuration as follows:

```xml
<type name="FastLoading">
    <arguments>
        <argument name="slowLoading" xsi:type="object">SlowLoading\Proxy</argument>
    </arguments>
</type>
```

With the proxy used in place of `SlowLoading`, the `SlowLoading` class will not be instantiated---and therefore, the resource intensive constructor operations not performed---until the `SlowLoading` object is used (that is, if the `getSlowValue` method is called).

Because DI configuration is used to inject a proxy, proxies can be dropped in to replace their corresponding classes - or proxy replacements _removed_ - without touching application code.

As a practical example of a proxy, you can see the [StoreManager]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Store/Model/StoreManager.php){:target="_blank"} class and then see the generated `StoreManager` proxy class.
