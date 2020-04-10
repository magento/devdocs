---
group: extension-best-practices
title: Custom import entity
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This tutorial shows you how to extend the [Magento/ImportExport/Model/Import/Entity/AbstractEntity][0]{:target="_blank"} class to import data into your custom module's table.
The current import entities can be found in **System** > **Import**:

-  Advanced Pricing
-  Products
-  Customers and Addresses (single file)
-  Customers Main File
-  Customer Addresses

To begin, suppose we have a custom table with the following structure:

| entity_id | name | duration |
| --- | --- | --- |
|           |  |  |

## Step 1: Adding a new entity type

Declare the new import entity:

> `etc/import.xml`

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_ImportExport:etc/import.xsd">
    <entity name="learning" label="Learning Courses Import" model="OrangeCompany\Learning\Model\Import\Courses"
            behaviorModel="Magento\ImportExport\Model\Source\Import\Behavior\Basic" />
</config>
```

Extending the **Magento_ImportExport** module, we create a dependency to it in the `module.xml` file.

> `etc/module.xml`

```xml
...
<sequence>
    <module name="Magento_ImportExport" />
</sequence>
...
```

## Step 2: Defining the import model

As we extend the [Magento/ImportExport/Model/Import/Entity/AbstractEntity][0]{:target="_blank"}, we implement the following abstract methods:

-  `_importData` - Import data rows
-  `getEntityTypeCode` - EAV entity type code getter
-  `validateRow` - Validating the row

> `OrangeCompany/Learning/Model/Import/Courses.php`

{% collapsible File content for Courses.php %}

```php
namespace OrangeCompany\Learning\Model\Import;

use Exception;
use Magento\Framework\App\ResourceConnection;
use Magento\Framework\DB\Adapter\AdapterInterface;
use Magento\Framework\Json\Helper\Data as JsonHelper;
use Magento\ImportExport\Helper\Data as ImportHelper;
use Magento\ImportExport\Model\Import;
use Magento\ImportExport\Model\Import\Entity\AbstractEntity;
use Magento\ImportExport\Model\Import\ErrorProcessing\ProcessingErrorAggregatorInterface;
use Magento\ImportExport\Model\ResourceModel\Helper;
use Magento\ImportExport\Model\ResourceModel\Import\Data;

/**
 * Class Courses
 */
class Courses extends AbstractEntity
{
    const ENTITY_CODE = 'learning';
    const TABLE = 'learning_courses';
    const ENTITY_ID_COLUMN = 'entity_id';

    /**
     * If we should check column names
     */
    protected $needColumnCheck = true;

    /**
     * Need to log in import history
     */
    protected $logInHistory = true;

    /**
     * Permanent entity columns.
     */
    protected $_permanentAttributes = [
        'entity_id'
    ];

    /**
     * Valid column names
     */
    protected $validColumnNames = [
        'entity_id',
        'name',
        'duration'
    ];

    /**
     * @var AdapterInterface
     */
    protected $connection;

    /**
     * @var ResourceConnection
     */
    private $resource;

    /**
     * Courses constructor.
     *
     * @param JsonHelper $jsonHelper
     * @param ImportHelper $importExportData
     * @param Data $importData
     * @param ResourceConnection $resource
     * @param Helper $resourceHelper
     * @param ProcessingErrorAggregatorInterface $errorAggregator
     */
    public function __construct(
        JsonHelper $jsonHelper,
        ImportHelper $importExportData,
        Data $importData,
        ResourceConnection $resource,
        Helper $resourceHelper,
        ProcessingErrorAggregatorInterface $errorAggregator
    ) {
        $this->jsonHelper = $jsonHelper;
        $this->_importExportData = $importExportData;
        $this->_resourceHelper = $resourceHelper;
        $this->_dataSourceModel = $importData;
        $this->resource = $resource;
        $this->connection = $resource->getConnection(ResourceConnection::DEFAULT_CONNECTION);
        $this->errorAggregator = $errorAggregator;
    }

    /**
     * Entity type code getter.
     *
     * @return string
     */
    public function getEntityTypeCode()
    {
        return static::ENTITY_CODE;
    }

    /**
     * Get available columns
     *
     * @return array
     */
    public function getValidColumnNames(): array
    {
        return $this->validColumnNames;
    }

    /**
     * Row validation
     *
     * @param array $rowData
     * @param int $rowNum
     *
     * @return bool
     */
    public function validateRow(array $rowData, $rowNum): bool
    {
        if (isset($this->_validatedRows[$rowNum])) {
            return !$this->getErrorAggregator()->isRowInvalid($rowNum);
        }

        $this->_validatedRows[$rowNum] = true;

        return !$this->getErrorAggregator()->isRowInvalid($rowNum);
    }

    /**
     * Import data
     *
     * @return bool
     *
     * @throws Exception
     */
    protected function _importData(): bool
    {
        switch ($this->getBehavior()) {
            case Import::BEHAVIOR_DELETE:
                $this->deleteEntity();
                break;
            case Import::BEHAVIOR_REPLACE:
                $this->saveAndReplaceEntity();
                break;
            case Import::BEHAVIOR_APPEND:
                $this->saveAndReplaceEntity();
                break;
        }

        return true;
    }

    /**
     * Delete entities
     *
     * @return bool
     */
    private function deleteEntity(): bool
    {
        $rows = [];
        while ($bunch = $this->_dataSourceModel->getNextBunch()) {
            foreach ($bunch as $rowNum => $rowData) {
                $this->validateRow($rowData, $rowNum);

                if (!$this->getErrorAggregator()->isRowInvalid($rowNum)) {
                    $rowId = $rowData[static::ENTITY_ID_COLUMN];
                    $rows[] = $rowId;
                }

                if ($this->getErrorAggregator()->hasToBeTerminated()) {
                    $this->getErrorAggregator()->addRowToSkip($rowNum);
                }
            }
        }

        if ($rows) {
            return $this->deleteEntityFinish(array_unique($rows));
        }

        return false;
    }

    /**
     * Save and replace entities
     *
     * @return void
     */
    private function saveAndReplaceEntity()
    {
        $behavior = $this->getBehavior();
        $rows = [];
        while ($bunch = $this->_dataSourceModel->getNextBunch()) {
            $entityList = [];

            foreach ($bunch as $rowNum => $row) {
                if (!$this->validateRow($row, $rowNum)) {
                    continue;
                }

                if ($this->getErrorAggregator()->hasToBeTerminated()) {
                    $this->getErrorAggregator()->addRowToSkip($rowNum);

                    continue;
                }

                $rowId = $row[static::ENTITY_ID_COLUMN];
                $rows[] = $rowId;
                $columnValues = [];

                foreach ($this->getAvailableColumns() as $columnKey) {
                    $columnValues[$columnKey] = $row[$columnKey];
                }

                $entityList[$rowId][] = $columnValues;
                $this->countItemsCreated += (int) !isset($row[static::ENTITY_ID_COLUMN]);
                $this->countItemsUpdated += (int) isset($row[static::ENTITY_ID_COLUMN]);
            }

            if (Import::BEHAVIOR_REPLACE === $behavior) {
                if ($rows && $this->deleteEntityFinish(array_unique($rows))) {
                    $this->saveEntityFinish($entityList);
                }
            } elseif (Import::BEHAVIOR_APPEND === $behavior) {
                $this->saveEntityFinish($entityList);
            }
        }
    }

    /**
     * Save entities
     *
     * @param array $entityData
     *
     * @return bool
     */
    private function saveEntityFinish(array $entityData): bool
    {
        if ($entityData) {
            $tableName = $this->connection->getTableName(static::TABLE);
            $rows = [];

            foreach ($entityData as $entityRows) {
                foreach ($entityRows as $row) {
                    $rows[] = $row;
                }
            }

            if ($rows) {
                $this->connection->insertOnDuplicate($tableName, $rows, $this->getAvailableColumns());

                return true;
            }

            return false;
        }
    }

    /**
     * Delete entities
     *
     * @param array $entityIds
     *
     * @return bool
     */
    private function deleteEntityFinish(array $entityIds): bool
    {
        if ($entityIds) {
            try {
                $this->countItemsDeleted += $this->connection->delete(
                    $this->connection->getTableName(static::TABLE),
                    $this->connection->quoteInto(static::ENTITY_ID_COLUMN . ' IN (?)', $entityIds)
                );

                return true;
            } catch (Exception $e) {
                return false;
            }
        }

        return false;
    }

    /**
     * Get available columns
     *
     * @return array
     */
    private function getAvailableColumns(): array
    {
        return $this->validColumnNames;
    }
}
```

{% endcollapsible %}

### Data validation

Sometimes, there is a need to validate data before inserting it into table. To do that, we have to add all our validation rules to `validateRow` method.

```php
/**
 * Row validation
 *
 * @param array $rowData
 * @param int $rowNum
 *
 * @return bool
 */
public function validateRow(array $rowData, $rowNum): bool
{
    $name = $rowData['name'] ?? '';
    $duration = (int) $rowData['duration'] ?? 0;

    if (!$name) {
        $this->addRowError('NameIsRequired', $rowNum);
    }

    if (!$duration) {
        $this->addRowError('DurationIsRequired', $rowNum);
    }

    if (isset($this->_validatedRows[$rowNum])) {
        return !$this->getErrorAggregator()->isRowInvalid($rowNum);
    }

    $this->_validatedRows[$rowNum] = true;

    return !$this->getErrorAggregator()->isRowInvalid($rowNum);
}
```

We need to instantiate our new validation rules:

```php
/**
 * Init Error Messages
 */
private function initMessageTemplates()
{
    $this->addMessageTemplate(
        'NameIsRequired',
        __('The name cannot be empty.')
    );
    $this->addMessageTemplate(
        'DurationIsRequired',
        __('Duration should be greater than 0.')
    );
}
```

And finally, call the `initMessageTemplates` method within `__construct` method:

```php
public function __construct(
    ...
) {
    ...

    $this->initMessageTemplates();
}
```

The validation rules will be checking for a required **name** and a greater than 0 **duration**.

![Validating Data]({{ site.baseurl }}/common/images/ext-best-practices/import-validation.png)

## Step 3. Providing the sample file

To add the ability to download a sample csv file for our new entity, create the following file:

``OrangeCompany/Learning/Files/Sample/learning.csv``

With the following content:

```text
entity_id,name,duration
,"First Course",90
,"Second Course",120
```

{:.bs-callout-info}
When updating the table's data, you must provide the `entity_id` value for each row.

Next, register the sample file for our entity.

> `etc/di.xml`

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\ImportExport\Model\Import\SampleFileProvider">
        <arguments>
            <argument name="samples" xsi:type="array">
                <item name="learning" xsi:type="string">OrangeCompany_Learning</item>
            </argument>
        </arguments>
    </type>
</config>
```

## Result

As result, the new Entity Type and the sample CSV are available:

![Import Entity]({{ site.baseurl }}/common/images/ext-best-practices/import-entity.png)

[0]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/ImportExport/Model/Import/Entity/AbstractEntity.php
