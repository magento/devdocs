---
layout: default
group: config-guide
subgroup: 07_conf
title: Create or extend configuration types
menu_title: Create or extend configuration types
menu_order: 10
version: 2.1
github_link21: config-guide/config/config-create.md
---


#### Contents

* <a href="#config-files-extend-create">Extend configuration types</a>
* <a href="#config-files-extend-create-create">Create configuration types</a>
* <a href="#config-files-validate">Validate a configuration type</a>

<h2 id="config-files-extend-create">Extend configuration types</h2>
To extend an existing configuration type, you need only create a configuration file in your module.

For example, to add an event observer, you create `app/etc/events.xml` and declare a new observer.

Because the event configuration type already exists in Magento, the loader and the `events.xsd` validating schema are already present and functional.
   
Your new `events.xml` is automatically collected from your module and merged with other `events.xml` files for other modules.

<h2 id="config-files-extend-create-create">Create configuration types</h2>
To create new configuration type, you must add at minimum:

*  XML configuration files
*  XSD validation schema 
*  A loader

For example, to introduce an adapter for a new search server that enables extensions to configure how its entities are indexed in that server, create:

*  A loader.
*  An XSD schema.
*  Any other classes required for your new type to work.
*  An appropriately named configuration file. For example, `search.xml`. This file is read and validated against your schema.

   If other modules have a `search.xml` file, they are merged with your file when it loads.

To create a new configuration type, extend the `\Magento\Framework\Config\ReaderInterface`, which is <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Config/Reader/Filesystem.php" target="_blank">Magento\Framework\Config\Reader\Filesystem</a> to provide the following parameters:

*  `$fileResolver`. Implements `\Magento\Framework\Config\FileResolverInterface`. This parameter lists the files containing the configurations of your custom type.
*  `$converter`. Implements `\Magento\Framework\Config\ConverterInterface`. This parameter converts the XML into the internal array representation of the configurations.
*  `$schemaLocator`. Implements `\Magento\Framework\Config/SchemaLocatorInterface`. This parameter provides the full path to file(s) containing schema(s) for validation of the individual and merged configuration files.</p>
*  `$validationState`. Implements `\Magento\Framework\Config\ValidationStateInterface`. This parameter defines whether a configuration file should be validated. 
*  `$fileName`. Name of a configuration file. The Reader looks for the file names specified by this parameter in modules' `etc` directories.
*  `$idAttributes`. Array of note attribute IDs.

    For example, to merge the XML files:

       array(
         '</path/to/node>' => '<identifierAttributeName>',
         '</path/to/other/node>' => '<identifierAttributeName>',
       }

* `$defaultScope`. Defines the configuration scope to be read by default. The default value for this parameter is global scope.
 
 After you customize `ReaderInterface`, you can use it to collect, merge, validate, and convert the configuration files to an internal array representation.

<h2 id="config-files-validate">Validate a configuration type</h2>

Each configuration file is validated against a schema specific to its configuration type. Example: events, which, in earlier Magento versions, were configured in `config.xml`, are now configured in `events.xml`.

Configuration files can be validated both before (optional) and after any merge of multiple files affecting the same configuration type. Unless the validation rules for the individual and merged files are identical, you should provide two schemas for validating the configuration files:

* Schema to validate an individual
* Schema to validate a merged file

New configuration files must be accompanied by XSD validation schemas. An XML configuration file and its XSD validation file must have the same name.

If you must use two XSD files for a single XML file, the names of the schemas should be recognizable and associated with the XML file.

If you have an `events.xml` file and a first `events.xsd` file, the XSD files for the merged `events.xml` file could be named `events_merged.xsd`.

To ensure validation of an XML file by appropriate XSD file, you must the Uniform Resource Name (URN) to the XSD file in the XML file. For example:

	<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager:etc/config.xsd">


Your IDE can validate your configuration files at both runtime and during development.

#### Related topics

*  <a href="{{ site.gdeurl21 }}config-guide/config/config-php.html">Module configuration files</a>
*  <a href="{{ site.gdeurl21 }}config-guide/config/config-php.html">Magento's deployment configuration</a>
