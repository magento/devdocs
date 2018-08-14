---
group: integration-testing
version: 2.1
title: Database isolation annotation
github_link: /test/integration/annotations/magentoDbIsolation.md
---

Sometimes integration tests make changes in the database.
To isolate these changes, database transaction mechanism is utilized: a transaction must be started before the test, transaction commit must be avoided during the test, and the transaction must be rolled back after the test.
Annotation `@magentoDbIsolation` is used for that purpose.

## Format

> Database isolation annotation

```php?start_inline=1
/**
 * @magentoDbIsolation enabled|disabled
 */
 ```

## Test case isolation

There can be cases when multiple tests perform changes to the database and rely on the changes made by each other.
For example, entity CRUD tests are performed in predefined sequence: _create -> read -> update -> delete_.
Every next test relies on a database state left from the previous one.
If at any point of that sequence (after create) a test fails, the database will be polluted with saved data.
To not obfuscate such tests with error-prone cleanup logic, entire sequence of test can be implemented as a separate test case with `@magentoDbIsolation` enabled on a class level.
For example:

> Test case wrapped into transaction

```php?start_inline=1
/**
 * @magentoDbIsolation enabled
 */
class Some_EntityTest extends PHPUnit\Framework\TestCase
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

## Tests Isolation

If a test among other tests in a test case performs changes to the database, its changes can be isolated from other tests by raising DB isolation on a test level.
An example of a test that pollutes database is `Magento_VersionsCms_Model_IncrementTest`:

> Test that affects a database

```php?start_inline=1
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

{:.bs-callout .bs-callout-info}
Before implementation of this annotation, db isolation of a test used to be done using `@magentoDataFixture` annotation with an empty fixture.
Usage of empty fixture workaround is prohibited now in favor of `@magentoDbIsolation` annotation.
