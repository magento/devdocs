---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Factories
menu_title: Factories
menu_order: 6
contributor_name: Classy Llama
contributor_link: http://www.classyllama.com/
version: 2.0
github_link: extension-dev-guide/factories.md
---
## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

### Overview

Factories are service classes that instantiate non-injectable classes, i.e. models that represent a database entity.
They create a layer of abstraction between the `ObjectManager` and business code.

### Relationship to `ObjectManager`

The `Magento\Framework\ObjectManager` is the class responsible for instantiating objects in the Magento application.
Magento prohibits depending on and directly using the `ObjectManager` in your code.

Factories are an exception to this rule because they require the `ObjectManager` to instantiate specific models.

The following example illustrates the relationship between a simple factory and the `ObjectManager`:

{% highlight php startinline=true %}
namespace Magento\Framework\App\Config;

class BaseFactory
{
  /**
   * @var \Magento\Framework\ObjectManagerInterface
   */
  protected $_objectManager;
  
  /**
   * @param \Magento\Framework\ObjectManagerInterface $objectManager
   */
  public function __construct(\Magento\Framework\ObjectManagerInterface $objectManager)
  {
    $this->_objectManager = $objectManager;
  }
  /**
   * Create config model
   * @param string|\Magento\Framework\Simplexml\Element $sourceData
   * @return \Magento\Framework\App\Config\Base
   */
  public function create($sourceData = null)
  {
    return $this->_objectManager->create(\Magento\Framework\App\Config\Base::class, ['sourceData' => $sourceData]);
  }
}
{% endhighlight %}

<div class="bs-callout bs-callout-warning" markdown="1">
You may notice in the Magento 2 codebase that some core classes still call the `ObjectManager` directly.

These instances are bits of legacy code from Magento 1 that need porting or exist for backwards compatibility purposes.

They are not tacit endorsements of using the `ObjectManager` directly.  
</div>

### Writing factories

Factory classes do not need to be explicitly defined because they are an [automatically generated]({{page.baseurl}}extension-dev-guide/code-generation.html) class type.
When you reference a factory in a class constructor, Magento generates the factory class if it does not exist.
If you require specific behavior for a factory, you have the option of manual creation.

Factories follow the naming convention `<class-type>Factory` where `<class-type>` is the name of the class the factory instantiates.

For example the automatically generated `Magento\Cms\Model\BlockFactory` class is a factory that instantiates the class [`Magento\Cms\Model\Block`]({{site.mage2000url}}app/code/Magento/Cms/Model/Block.php).


### Using factories

You can get the singleton instance of a factory for a specific model through [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html##dep-inj-preview-cons){:target="_blank"}.

The following example shows a class getting the `BlockFactory` instance through the constructor:

{% highlight php startinline=true %}
function __construct (
    \Magento\Cms\Model\BlockFactory $blockFactory
) {
    $this->blockFactory = $blockFactory;
}
{% endhighlight %}

Calling the `create()` method on a factory gives you an instance of its specific class:

{% highlight php startinline=true %}
$block = $this->blockFactory->create();
{% endhighlight %}

For classes that require parameters, the automatically generated `create()` function accepts an array of parameters that it passes on to the `ObjectManager` to create the target class.

#### Interfaces

Factories are smart enough to resolve dependencies and allow you to get the correct instance of an interface as defined in your module's `di.xml`.

For example, in the [`CatalogInventory`]({{site.mage2000url}}app/code/Magento/CatalogInventory){:target="_blank"} module, the `di.xml` file contains the following entry:

{% highlight xml %}
<preference for="Magento\CatalogInventory\Api\Data\StockItemInterface" type="Magento\CatalogInventory\Model\Stock\Item" />
{% endhighlight %}

It instructs Magento to use the specific [`Item`]({{site.mage2000url}}app/code/Magento/CatalogInventory/Model/Stock/Item.php){:target="_blank"} class wherever the [`StockItemInterface`]({{site.mage2000url}}app/code/Magento/CatalogInventory/Api/Data/StockItemInterface.php){:target="_blank"} is used.
When a class in that module includes the factory `StockItemInterfaceFactory` as a dependency, Magento generates a factory that is capable of creating the specific `Item` objects.
