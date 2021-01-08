---
group: php-developer-guide
subgroup: 99_Module Development
title: Factories
menu_title: Factories
menu_order: 6
contributor_name: Classy Llama
contributor_link: http://www.classyllama.com/
---

## Overview

Factories are service classes that instantiate non-injectable classes, that is, models that represent a database [entity](https://glossary.magento.com/entity).
They create a layer of abstraction between the `ObjectManager` and business code.

## Relationship to `ObjectManager`

The `Magento\Framework\ObjectManager` is the class responsible for instantiating objects in the Magento application.
Magento prohibits depending on and directly using the `ObjectManager` in your code.

Factories are an [exception](https://glossary.magento.com/exception) to this rule because they require the `ObjectManager` to instantiate specific models.

The following example illustrates the relationship between a simple factory and the `ObjectManager`:

```php
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
```

## Writing factories

Unless you require specific behavior for your factory classes, you do not need to explicitly define them because they are an [automatically generated]({{ page.baseurl }}/extension-dev-guide/code-generation.html) class type.
When you reference a factory in a class constructor, Magento's [object manager]({{ page.baseurl }}/extension-dev-guide/object-manager.html) generates the factory class if it does not exist.

Factories follow the naming convention `<class-type>Factory` where `<class-type>` is the name of the class the factory instantiates.

For example the automatically generated `Magento\Cms\Model\BlockFactory` class is a factory that instantiates the class [`Magento\Cms\Model\Block`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cms/Model/Block.php).

## Using factories

You can get the singleton instance of a factory for a specific model using [dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html).

The following example shows a class getting the `BlockFactory` instance through the constructor:

```php
function __construct ( \Magento\Cms\Model\BlockFactory $blockFactory) {
    $this->blockFactory = $blockFactory;
}
```

Calling the `create()` method on a factory gives you an instance of its specific class:

```php
$block = $this->blockFactory->create();
```

For classes that require parameters, the automatically generated `create()` function accepts an array of parameters that it passes on to the `ObjectManager` to create the target class.

The example below shows the construction of a `\Magento\Framework\FlagFactory` object by passing in an array of parameters to a factory:

```php
$flag = $this->flagFactory->create([
  'data' =>  ['flag_code' => 'something']
```

The `Flag` class has a `$data` constructor parameter which corresponds to the data key in the `create` array above.

### Interfaces

Factories are smart enough to resolve dependencies and allow you to get the correct instance of an interface as defined in your module's `di.xml`.

For example, in the [`CatalogInventory`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory){:target="_blank"} module, the `di.xml` file contains the following entry:

```xml
<preference for="Magento\CatalogInventory\Api\Data\StockItemInterface" type="Magento\CatalogInventory\Model\Stock\Item" />
```

It instructs Magento to use the specific [`Item`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Model/Stock/Item.php){:target="_blank"} class wherever the [`StockItemInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/Data/StockItemInterface.php){:target="_blank"} is used.
When a class in that [module](https://glossary.magento.com/module) includes the factory `StockItemInterfaceFactory` as a dependency, Magento generates a factory that is capable of creating the specific `Item` objects.
