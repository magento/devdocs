---
layout: default
group: config-guide
subgroup: 07_conf
title: Module configuration files
menu_title: Module configuration files
menu_order: 5
version: 2.0
github_link: config-guide/config/config-files.md
redirect_from: /guides/v1.0/config-guide/config/config-files.html
---

<h2 id="config-files-overview">Overview of module configuration files</h2>
The responsibilities of the `config.xml` configuration file used in earlier versions of Magento is now divided between several files, located in various module directories. Magento's multiple configuration files load on demand only when a module requests a specific configuration type.

You can use these files&mdash;also referred to as *configuration types*&mdash;to customize specific aspects of your module's behavior.

Multiple modules can declare configuration files that affect the same configuration type (for example, events), and these multiple configuration files are merged.

Following are common terms used in this topic:

<dl>
	<dt>Configuration object</dt>
	<dd>The Magento library or class that is responsible for defining and validating the configuration type. For example, the configuration object for <code>config.xml</code> is <a href=" {{ site.mage2000url }}lib/internal/Magento/Framework/App/Config.php" target="_blank">Magento\Framework\App\Config</a>.</dd>
	<dt>Configuration stage</dt>
	<dd>Stages are defined as <em>primary</em>, <em>global</em>, and <em>area</em>. Each stage determines when configuration type is loaded and merged with same-named configuration types. (For example, <code>module.xml</code> files are merged with other <code>module.xml</code> files.) For more information, see <a href="#config-files-loadmerge">Configuration load and merge</a>.</dd>
	<dt>Configuration scope</dt>
	<dd>Complementary to a configuration stages, a scope defines the configuration type model. For example, <code>adminhtml</code> is an area scope that is loaded with at the stage with other modules' <code>adminhtml</code> configurations. For more information, see <a href="{{page.baseurl}}architecture/modules/mod_and_areas.html">Modules and areas</a>.</dd>
</dl>

<h2 id="config-files-loadmerge">Configuration load and merge</h2>
This section discusses how configuration files are loaded and merged.

<h3 id="config-files-load">How Magento loads configuration files</h3>
Magento loads configuration files in the following order (all paths are relative to your Magento installation directory):

* Primary configuration (`app/etc/di.xml`). This file is used to bootstrap Magento.
* Global configurations from modules (`<your component base dir>/<vendorname>/<component-type>-<component-name>/etc/*.xml`). Collects certain configuration files from all modules and merges them together.
* Area-specific configuration from modules (`<your component base dir>/<vendorname>/<component-type>-<component-name>/etc/<area>/*.xml`). Collects configuration files from all modules and merges them into the global configuration. Some area-specific configurations can override or extend the global configuration.

{% include vendor/types-def.md %}

*	`<component-name>`: Name of your component as defined in `composer.json`.

<h3 id="config-files-load-merge-merge">Configuration file merge</h3>
Nodes in configuration files are merged based on their fully qualified XPaths, which has a special attribute defined in `$idAttributes` array declared as its identifier. This identifier must be unique for all nodes nested under the same parent node.

Magento's merge algorithm follows:

* If node identifiers are equal (or if there is no identifier defined), all underlying content in the node (attributes, child nodes, and scalar content) is overridden.
* If node identifiers are not equal, the node is a new child of the parent node.
* If the original document has multiple nodes with the same identifier, an error is triggered because the identifiers cannot be distinguished.

After configuration files are merged, the resulting document contains all nodes from the original files. 

<h2 id="config-files-classes">Configuration types, objects, and interfaces</h2>
The following sections provide information about configuration types, their corresponding configuration objects, and interfaces you can use to work with the objects:

* <a href="#config-files-classes-objects">Configuration types and objects</a>
* <a href="#config-files-classes-int">Configuration interfaces</a>

<h3 id="config-files-classes-objects">Configuration types and objects</h3>
The following table shows each configuration type and the Magento configuration object to which it relates.

<table>
	<tbody>
		<tr>
			<th>Configuration file</th>
			<th>Description</th>
			<th>Stage</th>
			<th>Configuration object</th>
		</tr>
		<tr>
			<td><code>config.php</code> and <code>env.php</code></td>
			<td><a href="{{page.baseurl}}config-guide/config/config-php.html">Deployment configuration</a></td>
			<td>Loads into memory when Magento initializes</td>
			<td>Has no object, cannot be customized</td>
		</tr>
		<tr>
			<td><code>config.xml</code></td>
			<td>System configuration</td>
			<td>primary, global </td>
			<td><a href=" {{ site.mage2000url }}lib/internal/Magento/Framework/App/Config.php" target="_blank">\Magento\Framework\App\Config</a></td>
		</tr>
		<tr>
			<td><code>di.xml</code></td>
			<td><a href="{{page.baseurl}}extension-dev-guide/depend-inj.html">Dependency injection</a> configuration</td>
			<td>primary, global, area</td>
			<td><a href=" {{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/Config/Config.php" target="_blank">\Magento\Framework\ObjectManager\Config</a></td>
		</tr>
		<tr>
			<td><code>events.xml</code></td>
			<td>Event/observer configuration</td>
			<td>global, area</td>
			<td><a href=" {{ site.mage2000url }}lib/internal/Magento/Framework/Event.php" target="_blank">\Magento\Framework\Event</a></td>
		</tr>
<!--     <tr>
			<td><code>cache.xml</code></td>
			<td>global, area</td>
			<td><a href=" {{ site.mage2000url }}lib/internal/Magento/Framework/Event.php" target="_blank">Magento\Framework\Event</a></td>
		</tr> -->
		<tr>
			<td><code>routes.xml</code></td>
			<td><a href="{{page.baseurl}}extension-dev-guide/routing.html">Route</a> configuration</td>
			<td>area</td>
			<td><a href=" {{ site.mage2000url }}lib/internal/Magento/Framework/App/Route/Config.php" target="_blank">Magento\Framework\App\Route\Config</a></td>
		</tr>
	</tbody>
</table>

<h3 id="config-files-classes-int">Configuration interfaces</h3>
You can interact with configuration files using interfaces under <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config" target="_blank">Magento\Framework\Config</a>. You can also use these interfaces if you create a new configuration types.

`Magento\Framework\Config` provides the following interfaces:

* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config/ConverterInterface.php" target="_blank">Framework\Config\ConverterInterface</a>, which converts the XML into an in-memory array representation of the configurations.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config/DataInterface.php" target="_blank">Framework\Config\DataInterface</a>, which retrieves the configuration data in a specified scope.
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config/FileResolverInterface.php" target="_blank">Framework\Config\FileResolverInterface</a>, which identifies the location of files to be read by `\Magento\Framework\Config\ReaderInterface`
* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config/ReaderInterface.php" target="_blank">Framework\Config\ReaderInterface</a>, which reads the configuration data from storage and selects the storage from which it reads.

	 That is, the file system, database, other storage merges the configuration files according to the merging rules, and validates the configuration files with the validation schemas.

*  <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config/SchemaLocatorInterface.php" target="_blank">Framework\Config\SchemaLocatorInterface</a>, which locates the XSD schema.
*  <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config/ScopeListInterface.php" target="_blank">Framework\Config\ScopeListInterface</a>, which returns a list of scopes.
*  <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config/ValidationStateInterface.php" target="_blank">Framework\Config\ValidationStateInterface</a>, which retrieves the validation state.

#### Related topics

 *  <a href="{{page.baseurl}}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{page.baseurl}}config-guide/config/config-php.html">Magento's deployment configuration</a>
