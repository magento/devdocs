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

*  [XML](https://glossary.magento.com/xml) configuration files
*  XSD validation schema
*  A loader

For example, to introduce an [adapter](https://glossary.magento.com/adapter) for a new search server that enables extensions to configure how its entities are indexed in that server, create:

*  A loader.
*  An XSD schema.
*  Any other classes required for your new type to work.
*  An appropriately named configuration file. For example, `search.xml`. This file is read and validated against your schema.

   If other modules have a `search.xml` file, they are merged with your file when it loads.

To create a new configuration type, extend the `\Magento\Framework\Config\ReaderInterface`, which is [Magento\Framework\Config\Reader\Filesystem]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/Reader/Filesystem.php) to provide the following parameters:

*  `$fileResolver`. Implements [\Magento\Framework\Config\FileResolverInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/FileResolverInterface.php). This parameter lists the files containing the configurations of your custom type.
*  `$converter`. Implements [\Magento\Framework\Config\ConverterInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/ConverterInterface.php). This parameter converts the XML into the internal array representation of the configurations.
*  `$schemaLocator`. Implements [\Magento\Framework\Config\SchemaLocatorInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/SchemaLocatorInterface.php). This parameter provides the full path to file(s) containing schema(s) for validation of the individual and merged configuration files.
*  `$validationState`. Implements [\Magento\Framework\Config\ValidationStateInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/ValidationStateInterface.php). This parameter defines whether a configuration file should be validated.
*  `$fileName`. Name of a configuration file. The Reader looks for the file names specified by this parameter in modules' `etc` directories.
*  `$idAttributes`. Array of node attribute IDs.

    For example, to merge the XML files:

       array(
         '</path/to/node>' => '<identifierAttributeName>',
         '</path/to/other/node>' => '<identifierAttributeName>',
       }

*  `$defaultScope`. Defines the configuration scope to be read by default. The default value for this parameter is global scope.

 After you customize `ReaderInterface`, you can use it to collect, merge, validate, and convert the configuration files to an internal array representation.

## Validate a configuration type {#config-files-validate}

Each configuration file is validated against a schema specific to its configuration type. Example: events, which, in earlier Magento versions, were configured in `config.xml`, are now configured in `events.xml`.

Configuration files can be validated both before (optional) and after any merge of multiple files affecting the same configuration type. Unless the validation rules for the individual and merged files are identical, you should provide two schemas for validating the configuration files:

*  Schema to validate an individual
*  Schema to validate a merged file

New configuration files must be accompanied by XSD validation schemas. An XML configuration file and its XSD validation file must have the same name.

If you must use two XSD files for a single XML file, the names of the schemas should be recognizable and associated with the XML file.

If you have an `events.xml` file and a first `events.xsd` file, the XSD files for the merged `events.xml` file could be named `events_merged.xsd`.

To ensure validation of an XML file by appropriate XSD file, you must add the Uniform Resource Name (URN) to the XSD file in the XML file. For example:

    <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager:etc/config.xsd">

Your IDE can validate your configuration files at both runtime and during development.

{:.ref-header}
Related topics

*  [Module configuration files]({{ page.baseurl }}/config-guide/config/config-php.html)
*  [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)
