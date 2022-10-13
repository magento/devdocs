---
group:
subgroup: Testing
title: Object Manager helper
menu_title: Object Manager helper
menu_order: 3
---

Block and model class constructors declare many dependencies. The Magento system uses constructor [dependency injection](https://glossary.magento.com/dependency-injection).
To unit test such classes, you must manually create mocks for all constructor parameters before you can instantiate the class objects. If the number of dependencies is ten or greater, this task is time-consuming.
Use the `\Magento\Framework\TestFramework\Unit\Helper\ObjectManager` helper class to simplify this task. Its methods automatically create mocks for all required dependencies. You can then instantiate a testing object by passing these mocks to a class constructor.
You can still create your custom mocks, if needed.

{:.bs-callout-info}
Do not use the ObjectManager helper class for classes with a small number of dependencies.

## ObjectManager methods {#help}

The ObjectManager public interface methods are:

-  [getObject method](#getobject). Creates class instances with automatically mocked dependencies.
-  [getCollectionMock method](#getCollectionMock). Lists mocked constructor arguments.
-  [getConstructArguments method](#getConstructArguments). Creates collection instances that contain specified elements.

### getObject {#getobject}

Creates mocks for all constructor dependencies and applies any specified custom mocks from `$arguments` array.
Also, instantiates the required `$className` by using constructor with already existing mocks.

**Syntax**:

```php
public function getObject($className,
     array $arguments = []);
```

**Example**:

```php
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);

// default constructor arguments
$scopePool = $objectManagerHelper->getObject('\Magento\App\Config\ScopePool');

// custom constructor arguments
$cacheMock = $this->getMock('\Magento\Cache\FrontendInterface');
...
$arguments = ['cache' => $cacheMock];
$scopePool = $objectManagerHelper->getObject('\Magento\App\Config\ScopePool',
     $arguments);
```

### getCollectionMock {#getCollectionMock}

Retrieves a collection instance with mocked getIterator method.

**Syntax**:

```php
public function getCollectionMock($className,
     array $data);
```

The collection contains elements from the `$data` array.

**Example**:

```php
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);
// Prepare mock for collection elements
$option = $this->getMock(
    'Magento\Bundle\Model\Option',
    ['getSelections', '__wakeup', 'getData'],
    [],
    '',
    false
);
$optionCollection =
     $this->objectManagerHelper->getCollectionMock('Magento\Bundle\Model\Resource\Option\Collection',
          [$options]);
```

### getConstructArguments {#getConstructArguments}

Lists dependency mocks for a specified class.

**Syntax**:

```php
public function getConstructArguments($className,
     array $arguments = []);
```

In the Magento system, several tests introduced mocks for abstract models and blocks.

**Example**:

```php
$attributeData = [
    'store_label' => 'Test',
    'attribute_code' => 'test',
    'is_required' => 1,
    'validate_rules' => [
        'min_text_length' => 0,
        'max_text_length' => 0,
        'input_validation' => 0,
    ]
];
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);
$attributeClass = '\Magento\Eav\Model\Entity\Attribute\AbstractAttribute';
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);
// Retrieve mocked constructor arguments
$arguments = $objectManagerHelper->getConstructArguments(
    $attributeClass,
    [
        'data' => $attributeData,
    ]
);

/** @var $attribute \Magento\Eav\Model\Entity\Attribute\AbstractAttribute|\PHPUnit\Framework\MockObject\MockObject */
$attribute = $this->getMockForAbstractClass($attributeClass,
    $arguments);
```
