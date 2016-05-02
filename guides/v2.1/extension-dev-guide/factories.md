---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Instantiating objects with factories
menu_title: Instantiating objects with factories
menu_order: 6
contributor_name: Classy Llama
contributor_link: http://www.classyllama.com/
github_link: extension-dev-guide/factories.md
---
##{{page.menu_title}}

The most common way to request and work with objects in Magento is using <a href="{{site.gdeurl21}}extension-dev-guide/depend-inj.html##dep-inj-preview-cons">constructor injection</a>.  Objects obtained this way (that is, using injectable classes) follow a singleton pattern, whereby the same instance is always returned by the Object Manager whenever a class is requested.

Most development also requires working with objects that are individual instances of classes (for example, a model representing a database entity).  These are referred to as <a href="{{site.gdeurl21}}extension-dev-guide/depend-inj.html#dep-inj-mod-type-inject">*non-injectables*</a>. Non-injectiables are not obtained directly using constructor injection; instead, instantiate them using *factories*.

### Purpose of factories
Factories are special objects that have only one purpose: to create an instance of one non-injectable class or interface. Unlike other objects, factories are allowed to depend on the object manager. Factories are used to isolate the object manager from business code as the following example shows:

{% highlight php startinline=true %}
class Magento\Core\Model\Config\BaseFactory
{
    protected $_objectManager;

    public function __construct(Magento\Framework\ObjectManager $objectManager)
    {
        $this->_objectManager = $objectManager;
    }

    public function create($sourceData = null)
    {
        return $this->_objectManager->create('Magento\Core\Model\Config\Base', ['sourceData' => $sourceData]);
    }
}
{% endhighlight %}

### Factories are generated classes
Factories are always named identically to the classes they instantiate, suffixed with `Factory`.  (For example, `Magento\Cms\Model\BlockFactory` is responsible for objects of the class <a href="{{ site.mage2000url }}app/code/Magento/Cms/Model/Block.php" target="_blank">Magento\Cms\Model\Block</a>.)

An important thing to understand about factories is that they are an automatically generated class type.  Factory classes do not need to be explicitly defined.  Simply reference a class name with `Factory` appended in a constructor, and Magento automatically generates the factory class if it does not already exist.  (See <a href="{{site.gdeurl21}}extension-dev-guide/code-generation.html">Code generation</a> for more information.)  

Factory classes can be explicitly defined, however, if customization of the typical factory behavior is desired for a specific class. The code in factories provides `typeSafety` (`@return` annotation) so IDEs understand the type of returned object for the type.

### Factories are injectable
Factories themselves are injectables, and therefore constructor injection is still key to the process of instantiating objects.  Receive a factory class via a constructor:

{% highlight php startinline=true %}
function __construct (
    \Magento\Cms\Model\BlockFactory $blockFactory
) {
    $this->blockFactory = $blockFactory;
}
{% endhighlight %}

When an instance of the class is needed, use the factory to instantiate it:

{% highlight php startinline=true %}
$block = $this->blockFactory->create();
{% endhighlight %}

The `_create_` method of factories accepts an array, which is passed as the `$data` array to the instantiated object.

Just as interfaces can be specified in constructor injection to obtain the best object implementing that interface (as defined in dependency injection preferences), factories can be used for such interfaces as well.  For example, requesting an object of the class `Magento\Customer\Api\Data\CustomerInterfaceFactory` in a constructor results in a factory responsible for creating instances of the appropriate dependency injection preference implementing `Magento\Customer\Api\Data\CustomerInterface`.
