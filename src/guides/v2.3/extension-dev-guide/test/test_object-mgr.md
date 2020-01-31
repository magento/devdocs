---
group:
subgroup: Testing
title: Object Manager helper
menu_title: Object Manager helper
menu_order: 3
---

<p>Block and model class constructors declare many dependencies. The Magento system uses constructor [dependency injection](https://glossary.magento.com/dependency-injection).</p>
<p>To unit test such classes, you must manually create mocks for all constructor parameters before you can instantiate the class objects. If the number of dependencies is ten or greater, this task is time-consuming.</p>
<p>Use the <code>\Magento\TestFramework\Helper\ObjectManager</code> helper class to simplify this task. Its methods automatically create mocks for all required dependencies. You can then instantiate a testing object by passing these mocks to a class constructor.</p>
<p>You can still create your custom mocks, if needed.</p>
 {:.bs-callout-info}
Do not use the ObjectManager helper class for classes with a small number of dependencies.

## ObjectManager methods {#help}

The ObjectManager public interface methods are:

-  [getObject method](#getobject). Creates class instances with automatically mocked dependencies.
-  [getCollectionMock method](#getCollectionMock). Lists mocked constructor arguments.
-  [getConstructArguments method](#getConstructArguments). Creates collection instances that contain specified elements.

### getObject method {#getobject}

<p>Creates mocks for all constructor dependencies and applies any specified custom mocks from <code>$arguments</code> array.</p>
<p>Also, instantiates the required <code>$className</code> by using constructor with already existing mocks.</p>
<p><b>Syntax:</b></p>
<pre>
public function getObject($className,
     array $arguments = []);
</pre>
<p><b>Example:</b></p>
<pre>
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);

// default constructor arguments
$scopePool = $objectManagerHelper->getObject('\Magento\App\Config\ScopePool');

// custom constructor arguments
$cacheMock = $this->getMock('\Magento\Cache\FrontendInterface');
...
$arguments = array('cache' => $cacheMock);
$scopePool = $objectManagerHelper->getObject('\Magento\App\Config\ScopePool',
     $arguments);
</pre>

### getCollectionMock method {#getCollectionMock}

<p>Retrieves a collection instance with mocked getIterator method.</p>
<p><b>Syntax:</b></p>
<pre>
public function getCollectionMock($className,
     array $data);
</pre>
<p>The collection contains elements from the $data array.</p>
<p><b>Example:</b></p>
<pre>
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);
// Prepare mock for collection elements
$option = $this->getMock(
    'Magento\Bundle\Model\Option',
    array('getSelections', '__wakeup', 'getData'),
    [],
    '',
    false
);
$optionCollection =
     $this->objectManagerHelper->getCollectionMock('Magento\Bundle\Model\Resource\Option\Collection',
          array($options));
</pre>

### getConstructArguments method {#getConstructArguments}

<p>Lists dependency mocks for a specified class.</p>
<p><b>Syntax:</b></p>
<pre>
public function getConstructArguments($className,
     array $arguments = []);
</pre>
<p>In the Magento system, several tests introduced mocks for abstract models and blocks.</p>
<p><b>Example:</b></p>
<pre>
$attributeData = array(
    'store_label' => 'Test',
    'attribute_code' => 'test',
    'is_required' => 1,
    'validate_rules' => array(
        'min_text_length' => 0,
        'max_text_length' => 0,
        'input_validation' => 0,
    )
);
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);
$attributeClass = '\Magento\Eav\Model\Entity\Attribute\AbstractAttribute';
$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);
// Retrieve mocked constructor arguments
$arguments = $objectManagerHelper->getConstructArguments(
    $attributeClass,
    array(
        'data' => $attributeData,
    )
);

/** @var $attribute \Magento\Eav\Model\Entity\Attribute\AbstractAttribute|\PHPUnit\Framework\MockObject\MockObject */
$attribute = $this->getMockForAbstractClass($attributeClass,
    $arguments);
</pre>
