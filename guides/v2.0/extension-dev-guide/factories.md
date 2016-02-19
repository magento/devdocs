---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Instantiating objects with factories
menu_title: Instantiating objects with factories
menu_order: 6
github_link: extension-dev-guide/factories.md
---
##{{page.menu_title}}

The most common way to request and work with objects in Magento is via constructor injection.  Objects obtained this way (i.e., injectable classes) follow a singleton pattern, whereby the same instance is always returned by the Object Manager whenever a class is requested.

Most development also requires working with objects that are individual instances of classes (e.g., a model representing a database entity).  These are known as non-injectables and are not obtained directly via constructor injection.  The prescribed way of instantiating such objects is via factories.

Factories are special objects that have only one purpose: to create an instance of one non-injectable class or interface. Unlike other objects, factories are allowed to depend on the object manager. Factories are used to isolate object manager from business code:

{% highlight PHP %}
<?php
class Magento\Core\Model\Config\BaseFactory
{
    protected $_objectManager;

    public function __construct(Magento\Framework\ObjectManager $objectManager)
    {
        $this->_objectManager = $objectManager;
    }

    public function create($sourceData = null)
    {
        return $this->_objectManager->create('Magento\Core\Model\Config\Base', array('sourceData' => $sourceData));
    }
} ?>
{% endhighlight %}

Factories are always named identically to the classes they instantiate, suffixed with Factory.  (e.g., Magento\Cms\Model\BlockFactory is responsible for objects of the class Magento\Cms\Model\Block.)

Factories themselves are injectables, and therefore constructor injection is still key to the process of instantiating objects.  Receive a factory class via a constructor:

{% highlight PHP %}
<?php
function __construct (
    \Magento\Cms\Model\BlockFactory $blockFactory
) {
    $this->blockFactory = $blockFactory;
}
?>
{% endhighlight %}

When an instance of the class is needed, use the factory to instantiate it:

{% highlight PHP %}
<?php
$block = $this->blockFactory->create();
?>
{% endhighlight %}

The _create_ method of factories accepts an array, which will be passed as the $data array to the instantiated object.

An important thing to understand about factories is that they are an automatically generated class type.  Factory classes do not need to be explicitly defined.  Simply reference a class name with Factory appended in a constructor, and Magento will automatically generate the factory class if it does not already exist.  (See <a href="{{ site.gdeurl }}extension-dev-guide/code-generation.html">Code Generation</a> for more information.)  Factory classes can be explicitly defined, however, if customization of the typical factory behavior is desired for a specific class.

The code in factories provides “typeSafety” (@return annotation) so IDEs understand the type of returned object for the type.

Just as interfaces can be specified in constructor injection in order to obtain the best object implementing that interface (as defined in DI preferences), factories can be used for such interfaces as well.  For example, requesting an object of the class Magento\Customer\Api\Data\CustomerInterfaceFactory in a constructor will result in a factory responsible for creating instances of the appropriate DI preference implementing Magento\Customer\Api\Data\CustomerInterface.