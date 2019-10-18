---
group: testing
title: Database isolation annotation
---

To isolate database changes between tests, the Integration testing framework (ITF) implements the `@magentoDbIsolation` annotation.
When the `@magentoDbIsolation` is enabled, the ITF:

-  starts a database transaction before the test/test case.
-  avoids a database commit during the test/test case.
-  restores the database after the test/test case.

## Format

Database isolation annotation:

```php?start_inline=1
/**
 * @magentoDbIsolation enabled|disabled
 */
 ```

## Test case declaration

Use test case declarations when a sequence of tests introduces changes to the database and relies on the changes made by each other.
For example, typical CRUD tests: _create -> read -> update -> delete_.
Every next test relies on a database state after the previous one.
If at any point of that sequence (after creation) the test fails, the database will be polluted with test data.
To apply a database rollback after the test case, create a separate test case with `@magentoDbIsolation` enabled at a class level.

Example:

```php?start_inline=1
/**
 * @magentoDbIsolation enabled
 */
class Some\EntityTest extends \PHPUnit\Framework\TestCase
{
    public function testCreate()
    {
        $this->object->setData($this->initialData)->save();
        $this->assertNotEmpty($this->object->getId());
        return $this->object->getId();
    }

    public function testRead($objectId)
    {
        $this->object->load($objectId);
        $this->assertEquals($this->initialData, $this->object->getData());
        return $objectId;
    }

    public function testUpdate($objectId)
    {
        $this->object->setData($newData)->save();
        $object = new Some_Entity();
        $object->load($objectId);
        $this->assertEquals($newData, $object->getData());
        return $objectId;
    }

    public function testDelete($objectId)
    {
        $this->object->delete();
        $object = new Some_Entity();
        $object->load($objectId);
        $this->assertEmpty($object->getData());
    }
}
```

## Test declaration

To isolate changes made to database by a single test, enable the `@magentoDbIsolation` for the test.

```php?start_inline=1
/**
* @magentoDbIsolation enabled
*/
public function testSave()
{
    $taxClassDataObject = $this->taxClassFactory->create();
    $taxClassDataObject->setClassName(self::SAMPLE_TAX_CLASS_NAME)
        ->setClassType(TaxClassManagementInterface::TYPE_CUSTOMER);
    $taxClassId = $this->taxClassRepository->save($taxClassDataObject);
    $this->assertEquals(self::SAMPLE_TAX_CLASS_NAME, $this->taxClassModel->load($taxClassId)->getClassName());
}
```
