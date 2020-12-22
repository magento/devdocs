---
group: migration-guide
title: Extend the migration tool
functional_areas:
  - Tools
---

Sometimes the data format and structure created by [Magento extensions](https://marketplace.magento.com/extensions.html){:target="_blank"} or custom code is different between Magento 1 and Magento 2. Use extension points within the Data Migration Tool to migrate this data. If the data format and structure are the same, the tool can automatically migrate the data without user intervention.

During migration, the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step) scans and compares all Magento 1 and Magento 2 tables, including those created by extensions. If the tables are the same, the tool automatically migrates the data. If the tables differ, the tool terminates and notifies the user.

 {:.bs-callout-info}
Read the [Technical Specification]({{ page.baseurl }}/migration/migration-tool-internal-spec.html) before attempting to extend the Data Migration Tool. Also review the [Migration Guide]({{ page.baseurl }}/migration/bk-migration-guide.html) for general information about using the migration tool.

## Minor data format and structure changes

In most cases, the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step) sufficiently resolves minor data format and structure changes using the following methods in the `map.xml` file:

-  Change table or field names with mapping rules
-  Transform data formats with existing handlers or a custom handler

The following shows an example of using both mapping rules and a handler. This example uses a hypothetical Magento 1 extension called "GreatBlog" that has been improved for Magento 2.

```xml
<source>
    <document_rules>
        <ignore>
            <document>great_blog_index</document>
        </ignore>
        <rename>
            <document>great_blog_publication</document>
            <to>great_blog_post</to>
        </rename>
    </document_rules>
    <field_rules>
        <move>
            <field>great_blog_publication.summary</field>
            <to>great_blog_post.title</to>
        </move>
        <ignore>
            <field>great_blog_publication.priority</field>
        </ignore>
        <transform>
            <field>great_blog_publication.body</field>
            <handler class="\Migration\Handler\GreatBlog\NewFormat">
                <param name="switch" value="yes" />
            </handler>
        </transform>
    </field_rules>
</source>
<destination>
    <document_rules>
        <ignore>
            <document>great_blog_rating</document>
        </ignore>
    </document_rules>
    <field_rules>
        <ignore>
            <field>great_blog_post.rating</field>
        </ignore>
    </field_rules>
</destination>
```

-  Do not migrate unnecessary data from the `great_blog_index` index table.
-  The table `great_blog_publication` was renamed to `great_blog_post` in Magento 2, so data will be migrated to the new table.
   -  The `summary` field was renamed to `title`, so data will be migrated to the new field.
   -  The `priority` field was removed and no longer exists in Magento 2.
   -  The data in the `body` field has changed format and should be processed by the custom handler: `\Migration\Handler\GreatBlog\NewFormat`.
-  A new ratings feature was developed for the "GreatBlog" extension in Magento 2.
   -  A new `great_blog_rating` table was created.
   -  A new `great_blog_post.rating` field was created.

### Extend mapping in other steps

Other steps support mapping, such as the [EAV Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav) and the Customer Attributes Step. These steps migrate a predefined list of Magento tables. For example, suppose that the "GreatBlog" extension has an additional field in the `eav_attribute` table and the name changed in Magento 2. Since the table is processed by the [EAV Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav), mapping rules should be written for the `map-eav.xml` file. The `map.xml` and `map-eav.xml` files use the same `map.xsd` schema, so mapping rules remain the same.

## Major data format and structure changes

In addition to the Map Step, there are other steps in the `config.xml` file which migrate data with major format and structure changes, including:

-  [Url Rewrite Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#url-rewrite-step)
-  OrderGrids Step
-  [EAV Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav)

Unlike the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step), these steps scan a predefined list of tables instead of all tables.

For major data format and structure changes, create a custom step.

### Create a custom step

Using the same "GreatBlog" example, suppose the extension has one table in Magento 1, but was redesigned to have two tables in Magento 2.

In Magento 1 there was a single `greatblog_post` table:

| Field     | Type     |
|-----------|----------|
| post_id   | INT      |
| title     | VARCHAR  |
| content   | TEXT     |
| author_id | SMALLINT |
| tags      | TEXT     |

In Magento 2 a new table for tags `greatblog_post_tags` was introduced:

| Field      | Type     |
|------------|----------|
| post_id    | INT      |
| tag        | VARCHAR  |
| sort_order | SMALLINT |

Magento 2 `greatblog_post` table now looks like this:

| Field     | Type     |
|-----------|----------|
| post_id   | INT      |
| title     | VARCHAR  |
| content   | TEXT     |
| author_id | SMALLINT |

To migrate all data from old tables structure to a new one you can create a custom step in the `config.xml` file. For example:

```xml
<steps mode="data">
    ...
    <step title="GreatBlog Step">
        <integrity>Vendor\Migration\Step\GreatBlog\Integrity</integrity>
        <data>Vendor\Migration\Step\GreatBlog\Data</data>
        <volume>Vendor\Migration\Step\GreatBlog\Volume</volume>
    </step>
</steps>
<steps mode="delta">
    ...
    <step title="GreatBlog Step">
        <delta>Vendor\Migration\Step\GreatBlog\Delta</delta>
        <volume>Vendor\Migration\Step\GreatBlog\Volume</volume>
    </step>
</steps>
```

The tool runs steps according to their position in the `config.xml` file; from top to bottom. In our example, the `GreatBlog Step` will run last.

Steps can include four types of classes:

-  Integrity checking
-  Data delivering
-  Volume checking
-  Delta delivering

 {:.bs-callout-info}
Refer to [Configuration]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#configuration), [Step internals]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#step-internals), [Stages]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#step-stages) and [Running modes]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#running-modes) for more information.

Complex SQL queries can be assembled inside these classes to fetch and migrate data. Also, note that these tables should be "ignored" in the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step) because it scans all existing tables and tries to migrate the data unless it is in the `<ignore>` tag of the `map.xml` file.

For Integrity checking, define an additional map file in  the `config.xml` file to verify that tables structure is as we expect.

```xml
<config xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
        xs:noNamespaceSchemaLocation="urn:magento:module:Magento_DataMigrationTool:etc/config.xsd">
    ...
    <options>
        ...
        <greatblog_map_file>app/code/Vendor/Migration/etc/opensource-to-opensource/map-greatblog.xml</greatblog_map_file>
        ...
    </options>
</config>
```

Map file `map-greatblog.xml`:

```xml
<map xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
     xs:noNamespaceSchemaLocation="urn:magento:module:Magento_DataMigrationTool:etc/map.xsd">
    <source>
        <field_rules>
            <ignore>
                <field>greatblog_post.tags</field>
            </ignore>
        </field_rules>
    </source>
    <destination>
        <document_rules>
            <ignore>
                <document>greatblog_post_tags</document>
            </ignore>
        </document_rules>
    </destination>
</map>
```

Integrity checking class `Vendor\Migration\Step\GreatBlog\Integrity` extends `Migration\App\Step\AbstractIntegrity` and contains the `perform` method where we verify table structure:

```php
class Integrity extends \Migration\App\Step\AbstractIntegrity
{
    ...
    /**
     * Integrity constructor.
     * @param ProgressBar\LogLevelProcessor $progress
     * @param Logger $logger
     * @param Config $config
     * @param ResourceModel\Source $source
     * @param ResourceModel\Destination $destination
     * @param MapFactory $mapFactory
     * @param string $mapConfigOption
     */
    public function __construct(
        ProgressBar\LogLevelProcessor $progress,
        Logger $logger,
        Config $config,
        ResourceModel\Source $source,
        ResourceModel\Destination $destination,
        MapFactory $mapFactory,
        $mapConfigOption = 'greatblog_map_file'
    ) {
        parent::__construct($progress, $logger, $config, $source, $destination, $mapFactory, $mapConfigOption);
    }

    /**
     * @inheritDoc
     */
    public function perform()
    {
        $this->progress->start($this->getIterationsCount());
        $this->check(['greatblog_post'], MapInterface::TYPE_SOURCE);
        $this->check(['greatblog_post', 'greatblog_post_tags'], MapInterface::TYPE_DEST);
        $this->progress->finish();
        return $this->checkForErrors();
    }
    ...
}
```

Next you will need to create a class for processing and saving data to Magento 2 database `Vendor\Migration\Step\GreatBlog\Data`:

```php
class Data implements \Migration\App\Step\StageInterface
{
    ...
    /**
     * Data constructor.
     *
     * @param ProgressBar\LogLevelProcessor $progress
     * @param ResourceModel\Source $source
     * @param ResourceModel\Destination $destination
     * @param ResourceModel\RecordFactory $recordFactory
     * @param RecordTransformerFactory $recordTransformerFactory
     * @param MapFactory $mapFactory
     */
    public function __construct(
        ProgressBar\LogLevelProcessor $progress,
        ResourceModel\Source $source,
        ResourceModel\Destination $destination,
        ResourceModel\RecordFactory $recordFactory,
        RecordTransformerFactory $recordTransformerFactory,
        MapFactory $mapFactory
    ) {
        $this->progress = $progress;
        $this->destination = $destination;
        $this->recordFactory = $recordFactory;
        $this->source = $source;
        $this->recordTransformerFactory = $recordTransformerFactory;
        $this->map = $mapFactory->create('greatblog_map_file');
    }

    /**
     * @inheritDoc
     */
    public function perform()
    {
        $sourceDocName = 'greatblog_post';
        $sourceDocument = $this->source->getDocument($sourceDocName);
        $destinationDocName = 'greatblog_post';
        $destinationDocument = $this->destination->getDocument($destinationDocName);
        /** @var \Migration\RecordTransformer $recordTransformer */
        $recordTransformer = $this->recordTransformerFactory->create(
            [
                'sourceDocument' => $sourceDocument,
                'destDocument'   => $destinationDocument,
                'mapReader'      => $this->map
            ]
        );
        $recordTransformer->init();

        $this->progress->start($this->source->getRecordsCount($sourceDocName));
        $pageNumber = 0;
        while (!empty($items = $this->source->getRecords($sourceDocName, $pageNumber))) {
            $pageNumber++;
            $recordsToSave = $destinationDocument->getRecords();
            foreach ($items as $item) {
                $sourceRecord = $this->recordFactory->create(
                    ['document' => $sourceDocument, 'data' => $item]
                );
                $destinationRecord = $this->recordFactory->create(['document' => $destinationDocument]);
                $recordTransformer->transform($sourceRecord, $destinationRecord);
                $recordsToSave->addRecord($destinationRecord);
            }
            $this->destination->saveRecords($destinationDocName, $recordsToSave);

            $tags = $this->getTags($items);
            $this->destination->saveRecords('greatblog_post_tags', $tags);
            $this->progress->advance();
        }

        $this->progress->finish();
        return true;
    }
    ...
}
```

In a Volume class `Vendor\Migration\Step\GreatBlog\Volume`, we check if the data has been fully migrated:

```php
class Volume extends \Migration\App\Step\AbstractVolume
{
    ...
    /**
     * @inheritdoc
     */
    public function perform()
    {
        $documentName = 'greatblog_post';
        $sourceCount = $this->source->getRecordsCount($documentName);
        $destinationCount = $this->destination->getRecordsCount($documentName);
        if ($sourceCount != $destinationCount) {
            $this->errors[] = sprintf(
                'Mismatch of entities in the document: %s Source: %s Destination: %s',
                $documentName,
                $sourceCount,
                $destinationCount
            );
        }

        return $this->checkForErrors(Logger::ERROR);
    }
    ...
}
```

To add delta migration functionality, add a new group to the `deltalog.xml` file.
In `group`, specify the name of tables that will be checked for changes:

```xml
<groups>
    ...
    <group name="delta_greatblog">
        <document key="post_id">greatblog_post</document>
    </group>
</groups>
```

Then, create the `Delta` class `Vendor\Migration\Step\GreatBlog\Delta` that extends `Migration\App\Step\AbstractDelta`:

```php
class Delta extends \Migration\App\Step\AbstractDelta
{
    /**
     * @var string
     */
    protected $mapConfigOption = 'greatblog_map_file';

    /**
     * @var string
     */
    protected $groupName = 'delta_greatblog';

    /**
     * @inheritDoc
     */
    public function perform()
    {
        $sourceDocumentName = 'greatblog_post';
        $idKeys = ['post_id'];
        $page = 0;
        while (!empty($items = $this->source->getChangedRecords($sourceDocumentName, $idKeys, $page++))) {
            $this->destination->deleteRecords(
                'greatblog_post_tags',
                $idKeys,
                $items
            );

            $tags = $this->getTags($items);
            $this->destination->saveRecords('greatblog_post_tags', $tags);
        }

        //parent class will take care of greatblog_post records automatically
        return parent::perform();
    }
}
```

After the custom step implementation provided in the examples, the system will take data from the single Magento 1 table,
process it using `Vendor\Migration\Step\GreatBlog\Data` class and store the data in two Magento 2 tables. New and changed
records will be delivered on delta migration using the `Vendor\Migration\Step\GreatBlog\Delta` class.

## Prohibited extension methods

Since the Data Migration Tool and Magento 2 are constantly evolving, existing steps and handlers are subject to change. We highly recommend not overriding the behavior of steps like the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step), [URL Rewrite Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#url-rewrite-step), and handlers by extending their classes.

Some steps do not support mapping and cannot be changed without altering the code. You can either write an extra step that changes data at the end of migration or create a [GitHub issue](https://github.com/magento/data-migration-tool/issues){:target="_blank"} and ask for a new extension point on the existing step.
