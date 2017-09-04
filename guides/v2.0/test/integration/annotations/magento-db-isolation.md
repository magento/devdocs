---
layout: default
group: integration-testing
subgroup: 30_Custom_DocBlock_Annotations
title: magentoDbIsolation
menu_title: magentoDbIsolation
version: 2.0
github_link: test/integration/annotations/magento-db-isolation.md
---

Sometimes integration tests make changes in the database. To isolate these changes, database transaction mechanism is utilized: a transaction must be started before the test, transaction commit must be avoided during the test, and the transaction must be rolled back after the test. Annotation @magentoDbIsolation is used for that purpose.


**Database Isolation Annotation Synopsis**

``` php?start_inline=1
/**
 * @magentoDbIsolation enabled|disabled
 */
```

## Tests Isolation

If a test among other tests in a test case performs changes to the database, its changes can be isolated from other tests by raising DB isolation on a test level. An example of a test that pollutes database is Magento_VersionsCms_Model_IncrementTest:

``` php?start_inline=1
/**
 * @magentoDbIsolation enabled
 */
public function testGetNewIncrementId()
{
    $this->assertEmpty($this->_model->getId());
    $this->assertEmpty($this->_model->getIncrementType());
    $this->assertEmpty($this->_model->getIncrementNode());
    $this->assertEmpty($this->_model->getIncrementLevel());
 
    // performs changes in the database
    $this->_model->getNewIncrementId(Magento_VersionsCms_Model_Increment::TYPE_PAGE, 1, 1);
 
    $this->assertEquals(Magento_VersionsCms_Model_Increment::TYPE_PAGE, $this->_model->getIncrementType());
    $this->assertEquals(1, $this->_model->getIncrementNode());
    $this->assertEquals(1, $this->_model->getIncrementLevel());
    $this->assertNotEmpty($this->_model->getId());
}
```

<div class="bs-callout bs-callout-warning" markdown="1">
Before implementation of this annotation, db isolation of a test used to be done using @magentoDataFixture annotation with an empty fixture.
Usage of empty fixture workaround is prohibited now in favor of @magentoDbIsolation annotation.
</div>

## Test Cases Isolation

There can be cases when multiple tests perform changes to the database and rely on the changes made by each other. For example, entity CRUD tests are performed in predefined sequence: create -> read -> update -> delete. Every next test relies on a database state left from the previous one. If at any point of that sequence (after create) a test fails, the database will be polluted with saved data. To not obfuscate such tests with error-prone cleanup logic, entire sequence of test can be implemented as a separate test case with @magentoDbIsolation enabled on a class level. For example:

**Test Case Wrapped into Transaction**

``` php?start_inline=1

/**
 * @magentoDbIsolation enabled
 */
class Some_EntityTest extends PHPUnit_Framework_TestCase
{
    public function testCreate()
    {
        $this->object->setData($this->initialData)->save();
        $this->assertNotEmpty($this->object->getId());
        return $this->object->getId();
    }
 
    /**
     * @depends testCreate
     */
    public function testRead($objectId)
    {
        $this->object->load($objectId);
        $this->assertEquals($this->initialData, $this->object->getData());
        return $objectId;
    }
 
    /**
     * @depends testRead
     */
    public function testUpdate($objectId)
    {
        $this->object->setData($newData)->save();
        $object = new Some_Entity();
        $object->load($objectId);
        $this->assertEquals($newData, $object->getData());
        return $objectId;
    }
 
    /**
     * @depends testUpdate
     */
    public function testDelete($objectId)
    {
        $this->object->delete();
        $object = new Some_Entity();
        $object->load($objectId);
        $this->assertEmpty($object->getData());
    }
}

```