---
group: configuration-guide
title: Create or extend configuration types
functional_areas:
  - Configuration
  - System
  - Setup
---

## Extend configuration types {#config-files-extend-create}

To extend an existing configuration type, you need only create a configuration file in your [module](https://glossary.magento.com/module).

For example, to add an event observer, you create `app/code/{VendorName}/{ModuleName}/etc/events.xml` and declare a new observer.

Because the event configuration type already exists in Magento, the loader and the `events.xsd` validating schema are already present and functional.

Your new `events.xml` is automatically collected from your module and merged with other `events.xml` files for other modules.

## Create configuration types {#config-files-extend-create-create}

To create new configuration type, you must add at minimum:

*  A loader
*  [XSD](https://glossary.magento.com/xsd) validation schema
*  [XML](https://glossary.magento.com/xml) configuration files

For example, to introduce an [adapter](https://glossary.magento.com/adapter) for a new search server that enables extensions to configure how its entities are indexed in that server, create:

*  A loader
*  An XSD schema file
*  An appropriately named configuration file. For example, `search.xml`. This file is read and validated against your schema.
*  Any other classes required for your work.

{:.bs-callout-info}
If new modules have a `search.xml` file, they will be merged with your file when it loads.

### Examples of use

To create a new configuration type:

1. Create your XSD file.
1. Create your XML file.
1. Define your configuration object in your `di.xml`.

    The following example from the Magento_Sales module's [di.xml]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/etc/di.xml) illustrates how a configuration object should look like.

    ```xml
    <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">

        <type name="Magento\Sales\Model\Order\Pdf\Config\Reader">
            <arguments>
                <argument name="fileName" xsi:type="string">pdf.xml</argument>
                <argument name="converter" xsi:type="object">Magento\Sales\Model\Order\Pdf\Config\Converter</argument>
                <argument name="schemaLocator" xsi:type="object">Magento\Sales\Model\Order\Pdf\Config\SchemaLocator</argument>
            </arguments>
        </type>

        <virtualType name="pdfConfigDataStorage" type="Magento\Framework\Config\Data">
            <arguments>
                <argument name="reader" xsi:type="object">Magento\Sales\Model\Order\Pdf\Config\Reader</argument>
                <argument name="cacheId" xsi:type="string">sales_pdf_config</argument>
            </arguments>
        </virtualType>

        <type name="Magento\Sales\Model\Order\Pdf\Config">
            <arguments>
                <argument name="dataStorage" xsi:type="object">pdfConfigDataStorage</argument>
            </arguments>
        </type>
    </config>
    ```

   *  The first type node sets the Reader's filename, associated `Converter` and `SchemaLocator` classes.
   *  Then, the `pdfConfigDataStorage` virtual type node attaches the reader class to an instance of [Magento\Framework\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/Data.php).
   *  And finally, the last type node attaches that config data virtual type to the [Magento\Sales\Model\Order\Pdf\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Pdf/Config.php) class, which is used for actually reading values in from those [pdf.xml]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/etc/pdf.xml) files.

1. Define a reader by extending [Magento\Framework\Config\Reader\Filesystem]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/Reader/Filesystem.php) class and rewrite the following parameters:

   ```php
   $_idAttributes // Array of node attribute IDs.
   ```

**Example:**

```php
namespace Vendor\ModuleName\Model\Config;

class Reader extends \Magento\Framework\Config\Reader\Filesystem
{
    /**
     * List of identifier attributes for merging
     *
     * @var array
     */
    protected $_idAttributes = [
         '</path/to/node_in_your_xml_file>'        => '<identifierAttributeName>',
         '</path/to/other/node_in_your_xml_file>'  => '<identifierAttributeName>',
    ];
}
```

{:.bs-callout-info}
If you prefer to create your own version of the reader you can do so by implementing `\Magento\Framework\Config\ReaderInterface`. For reference see [Magento_Analytics config reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Analytics/ReportXml/Config/Reader.php)

After defining your reader, use it to collect, merge, validate, and convert the configuration files to an internal array representation.

## Validate a configuration type {#config-files-validate}

Each configuration file is validated against a schema specific to its configuration type. Example: events, which, in earlier Magento versions, were configured in `config.xml`, are now configured in `events.xml`.

Configuration files can be validated both before (optional) and after any merge of multiple files affecting the same configuration type. Unless the validation rules for the individual and merged files are identical, you should provide two schemas for validating the configuration files:

*  Schema to validate an individual
*  Schema to validate a merged file

New configuration files must be accompanied by XSD validation schemas. An XML configuration file and its XSD validation file must have the same name.

If you must use two XSD files for a single XML file, the names of the schemas should be recognizable and associated with the XML file.
If you have an `events.xml` file and a first `events.xsd` file, the XSD files for the merged `events.xml` file could be named `events_merged.xsd`.
To ensure validation of an XML file by appropriate XSD file, you must add the Uniform Resource Name (URN) to the XSD file in the XML file. For example:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager:etc/config.xsd">
```

Your IDE can validate your configuration files at both runtime and during development.

{:.ref-header}
Related topics

*  [Module configuration files]({{ page.baseurl }}/config-guide/config/config-php.html)
*  [Configuration file merge]({{ page.baseurl }}/config-guide/config/config-files.html#config-files-load-merge-merge)
*  [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-files.html)
