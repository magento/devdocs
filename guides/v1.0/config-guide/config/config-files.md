---
layout: default
group: dev-guide
subgroup: Configuration
title: Configuration files
menu_title: Configuration files
menu_order: 1
github_link: config-guide/config/config-files.md
---

<h2 id="overview">Overview</h2>
<p>In the Magento system, configuration files are simple to use, easy to troubleshoot, and validated automatically.</p>
<p>Configuration performance and memory usage are also improved.</p>
<p>These topics summarize the major features and changes in Magento configuration.</p>
<h3>Migration</h3>
<p>To migrate from earlier Magento versions, you must redefine the configuration files.</p>
<!-- <p>For reference-level details about configuration changes from earlier versions, see Configuration Changes from Magento 1 to Magento 2.</p> -->
<h3>Configuration files</h3>
<p>The <code>config.xml</code> configuration file used in previous versions of Magento is now divided into smaller files that configure specific behaviors and entities.</p>
<p>This division enables on-demand loading of configuration files. Because Magento no longer loads all configuration instructions at once, Magento now loads some files only when an application file requests a specific configuration type.</p>
<p>Multiple extensions can declare configuration files that affect the same configuration type, and these multiple configuration files are merged.</p>
<p>For example, when multiple extensions have <code>events.xml</code> files, event configuration is derived by merging all <code>events.xml</code> files from all extensions.</p>
<h3>Validation</h3>
<p>The smaller configuration files are simpler to validate.
   Each configuration file is now validated against a schema specific to its configuration type.
   For example, events, which previously would have been configured in <code>config.xml</code> along with all other configurations, are now configured in a separate file called <code>events.xml</code>.
   The <code>events.xml</code> file is validated during loading against the <code>events.xsd</code> schema file.
</p>
<h3>Magento\Framework\Config</h3>
<p>All configuration files are processed by the Magento <code>Magento\Framework\Config</code> library component, which loads, merges, and validates XML configuration files and converts them to proper array format.
   During configuration loading, <code>Magento\Framework\Config</code> validates configuration files against schemas in XSD format.
   Each XML configuration type has its own XSD schema.
</p>
<h3>Predefined configuration files</h3>
<p>Predefined configuration files include:</p>
<dl>
   <dt>
      <code>local.xml</code></dt><dd><p>Created during the installation of Magento and loaded on every run of your Magento instance.</p>
<p>This file controls parameters that are specific to each Magento installation, such as connection to database, cryptographic key, database table prefix, session storage configuration.</p>
      <p>These parameters are gathered in a wizard during installation and written to a single <code>local.xml</code>, so your site administrator can configure these values in a single location.</p></dd>
   <dt><code>config.xml</code></dt><dd><p>Contains the configurations specified in the <b>Stores > Configuration</b> menu in the <b>Admin</b> panel for the default, website, and store scopes of your Magento instance.</p>
      <p>This menu is itself configured by the <code>system.xml</code> file, which declares the configuration keys for application configuration and defines how they are displayed the in <b>Stores > Configuration</b>.</p>
   </dd>
  <dt><code>di.xml</code></dt><dd><p>Contains the configurations for dependency injection.</p></dd>
  <dt><code>events.xml</code><dd><p>Lists observers and the events to which they are subscribed.</p>
   </dd>
   <dt><code>routes.xml</code><dd><p>Lists the routes and routers.</p></dd></dl>
<p>This list is not comprehensive. You can find all the changed configuration files in Configuration Changes from Magento 1.x to 2.x.</p>
<h3>Load order for configuration files</h3>
<p>The following groupings determine the load order of configuration files:</p>
<ul>
   <li>
      <p>The primary configuration files, which give the most basic types of configuration such as the database connection and the cache, are loaded on bootstrap. These include only configuration required for the application to start (such as app/etc/di.xml) and installation-specific configuration (such as app/etc/local.xml).</p>
   </li>
   <li>
      <p>Global configuration files are loaded next. They include configuration from all modules common for all application areas, such as settings for which modules are enabled and which routers are used.</p>
   </li>
   <li>
      <p>Area-specific configuration files concerning areas such as adminhtml and frontend are loaded after routing (for instance, routes.xml).</p>
   </li>
</ul>
<p>For some specific configuration files loading is not limited to a single one of these stages.</p>
<p>For instance, <code>di.xml</code> can be loaded at any stage, and <code>config.xml</code> can be loaded either at bootstrap or with the global configuration files.</p>
<h2>How configuration files are merged</h2>
<p>Nodes in configuration files are merged based on their fully qualified XPaths, which has a special attribute defined in <code>$idAttributes</code> array declared as identifier.</p>
<p>This identifier must be unique for all nodes nested under the same parent node.</p>
<p>The following rules apply when you merge two XML documents:</p>
<ul>
   <li>Nodes are merged based on name and then identifier attributes.</li>
   <li>If a file contains multiple nodes with the same identifier, the nodes are distinguished and an error occurs.</li>
</ul>
<p>After two XML documents are merged, the resulting document contains all nodes from the original files.</p>
<p>The second XML file either supplements or overwrites nodes in the first XML file.</p>
<p>In the following example, the node contents of the second file overwrite node contents of first file if both files contain nodes with same name and identifier.</p>
<p>This example shows configuration files and their merge result:</p>
<h2>The Magento\Framework\Config component</h2>
<p><code>Magento\Framework\Config</code> ensures loading, merging, validation, and processing of the configurations. You can change the standard loading procedure by providing your own implementation of its interfaces. Magento\Framework\Config should be used to introduce a new configuration type.</p>
<p><code>Magento\Framework\Config</code> provides the following interfaces for extension developers to manage configuration files:</p>
<ul>
   <li>
      <p><code>\Magento\Framework\Config\DataInterface</code> retrieves the configuration data within a scope.</p>
   </li>
   <li>
      <p><code>\Magento\Framework\Config\ScopeInterface</code> identifies current application scope and provides information about the scope's data.</p>
   </li>
   <li>
      <p><code>\Magento\Framework\Config\FileResolverInterface</code> identifies the set of files to be read by <code>\Magento\Framework\Config\ReaderInterface</code>.</p>
   </li>
   <li>
      <p><code>\Magento\Framework\Config\ReaderInterface</code> reads the configuration data from storage, selects the storage from which it reads.</p>
      <p>That is, the file system, database, other storage merges the configuration files according to the merging rules, and validates the configuration files with the validation schemas.</p>
   </li>
</ul>
<h2>Extend a configuration type</h2>
<p>To extend an existing configuration type in your extension, you create a configuration file within your extension.
   For example, to add an event observer, you create a <code>events.xml</code> file and declare a new observer.
</p>
<p>Because the event configuration type already exists in Magento, the loader and the <code>events.xsd</code> validating schema are already present and functional.
   Your new <code>events.xml</code> file is automatically collected from your extension and merged with the <code>events.xml</code> files for other Magento extensions.
</p>
<h2>Create a configuration type</h2>
<p>To create new configuration type, create:

<ul>
<li>The XML configuration file</li>
<li>The XSD schema that validates it at loading</li>
<li>A loader</li>
</ul>

<p>For example to introduce an adapter for a new search server that enables extensions to configure how its entities are indexed in that server, create:</p>

<ul>
<li>A loader.</li>
<li>An XSD schema.</li>
<li>Any other classes that are required for your new type to work.</li>
<li>An appropriately named configuration file. For example, <code>search.xml</code>. This file is read and validated against your schema.</li>
</ul>

If any other extension declares a <code>search.xml</code> file, it is merged with your file when it loads.</p>

<p>To add a configuration type to the file system, use the default implementation of the <code>\Magento\Framework\Config\ReaderInterface</code>, which is <code>Magento\Framework\Config\Reader\Filesystem</code>. Extend from the default implementation and provide the following parameters:</p>
<ul>
   <li>
      <p><code>$fileResolver</code>. Implements <code>\Magento\Framework\Config\FileResolverInterface</code>. This parameter lists the files containing the configurations of your custom type.</p>
   </li>
   <li>
      <p><code>$converter</code>. Implements <code>\Magento\Framework\Config\ConverterInterface</code>. This parameter is responsible for converting the XML into the internal array representation of the configurations.</p>
   </li>
   <li>
      <p><code>$schemaLocator</code>. Implements <code>\Magento\Framework\Config/SchemaLocatorInterface</code>. This parameter provides the full path to file(s) containing schema(s) for validation of the individual and merged configuration files.</p>
   </li>
   <li>
      <p><code>$validationState</code>. Implements <code>\Magento\Framework\Config\ValidationStateInterface</code>. This parameter defines whether a configuration file should be validated. It is provided by the application by default.</p>
   </li>
   <li>
      <p><code>$fileName</code>. The name of a file containing custom configuration. Reader looks for the file names specified by this parameter in <code>etc</code> directories.</p>
   </li>
   <li>
      <p><code>$idAttributes</code>. An array that contains the ID attributes of a node.
      For example, to merge the XML files:</p>
      <pre>array(
    '&lt;/path/to/node>' => '&lt;identifierAttributeName>',
    '&lt;/path/to/other/node>' => '&lt;identifierAttributeName>',
}</pre>
   </li>
   <li>
      <p><code>$defaultScope</code>. Defines the configuration scope to be read by default. The default value for this parameter is global scope.</p>
   </li>
</ul>
<p>After you customize <code>ReaderInterface</code>, you can use it to collect, merge, validate, and convert the configuration files to an internal array representation.</p>
<h2>Validate a configuration type</h2>
<p>Configuration files can be validated both before (optional) and after any merge of multiple files affecting the same configuration type. Unless the validation rules for the individual and merged files are identical, you should provide two schemas for validating the configuration files:</p>
<ul>
   <li>Schema for an individual file validation</li>
   <li>Schema for a merged file validation</li>
</ul>
<p>New configuration files must be accompanied by XSD validation schemas. An XML configuration file and its XSD validation file must have the same name.</p>
<p>If you must use two XSD files for a single XML file, the names of the schemas should be recognizable and associated with the XML file.</p>
<p>If you have an <code>events.xml</code> file and a first <code>events.xsd</code> file, the XSD files for the merged <code>events.xml</code> file could be named <code>events_merged.xsd</code>.</p>
<p>To ensure validation of an XML file by appropriate XSD file, you must specify the relative path to the XSD file in the XML file. For example:</p>

<pre>
&lt;config
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/ObjectManager/etc/config.xsd"></pre>


<p>IDEs can validate your configuration files at both runtime and development time.</p>
<script type="text/xml">
   SyntaxHighlighter.all()
</script>
