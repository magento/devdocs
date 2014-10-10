---
layout: howtom2devgde_chapters
title: Object Manager Helper
---

<h1 id="m2devgde-objmgrhelper">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/code-test/test_object-mgr.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="m2devgde-objmgr-intro">Overview</h2>
<p>In Magento 2, the constructors in block and model classes declare many dependencies.
   Magento 2 uses constructor dependency injection.
</p>
<p>To unit test such classes, you must manually create mocks for all constructor parameters before you can instantiate the class objects.
   If the number of dependencies is ten or greater, this task is time-consuming.
</p>
<p>Use the <code>\Magento\TestFramework\Helper\ObjectManager</code> helper class to simplify this task.
   Its methods automatically create mocks for all required dependencies.
   You can then instantiate a testing object by passing these mocks to a class constructor.
</p>
<p>You can still provide your custom mocks if needed.</p>
<div class="bs-callout bs-callout-info" id="info">
   <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
   <span class="glyphicon-class">
      <p>Do not use the ObjectManager helper class for classes with a small number of dependencies.</p>
   </span>
</div>
<h2 id="help">ObjectManager interface</h2>
<p>The ObjectManager public interface methods enable you to:</p>
<ul>
   <li>Create class instances with automatically mocked dependencies.</li>
   <li>List mocked constructor arguments.</li>
   <li>Create collection instances that contain specified elements.</li>
</ul>
<p>The following table describes the methods:</p>
<table style="width:100%">
   <colgroup>
      <col width="50%">
      <col width="50%">
   </colgroup>
   <thead>
       <tr style="background-color:lightgray">
         <th>Method description</th>
         <th>Usage</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <p>Creates mocks for all constructor dependencies, applies any specified custom mocks from $arguments array, and instantiates the required $className by using constructor with already existing mocks.</p>
            <pre>public function getObject($className, array $arguments = array());</pre>
         </td>
         <td>
            <pre>$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);

// default constructor arguments
$scopePool = $objectManagerHelper->getObject('\Magento\App\Config\ScopePool');

// custom constructor arguments
$cacheMock = $this->getMock('\Magento\Cache\FrontendInterface');
...
$arguments = array('cache' => $cacheMock);
$scopePool = $objectManagerHelper->getObject('\Magento\App\Config\ScopePool', $arguments);</pre>
         </td>
      </tr>
      <tr>
         <td>
            <p>Retrieves a collection instance with mocked getIterator method.</p>
            <pre>public function getCollectionMock($className, array $data);</pre>
            <p>The collection contains elements from the $data array.</p>
         </td>
         <td>
            <pre>$objectManagerHelper = new \Magento\TestFramework\Helper\ObjectManager($this);
// Prepare mock for collection elements
$option = $this->getMock(
    'Magento\Bundle\Model\Option',
    array('getSelections', '__wakeup', 'getData'),
    array(),
    '',
    false
);
$optionCollection = $this->objectManagerHelper->getCollectionMock('Magento\Bundle\Model\Resource\Option\Collection', array($options));</pre>
         </td>
      </tr>
      <tr>
         <td>
            <p>Lists dependency mocks for a specified class.</p>
            <pre>public function getConstructArguments($className, array $arguments = array());</pre>
            <p>In Magento 2.x, several tests introduced mocks for abstract models and blocks.</p>
         <td>
            <pre>$attributeData = array(
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
$attribute = $this->getMockForAbstractClass($attributeClass, $arguments);</pre>
         </td>
      </tr>
   </tbody>
</table>