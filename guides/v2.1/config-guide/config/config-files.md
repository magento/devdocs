---
group: config-guide
title: Module configuration files
redirect_from: /guides/v1.0/config-guide/config/config-files.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of module configuration files {#config-files-overview}

The responsibilities of the `config.xml` configuration file used in earlier versions of Magento is now divided between several files, located in various {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} directories. Magento's multiple configuration files load on demand only when a module requests a specific configuration type.

You can use these files&mdash;also referred to as *configuration types*&mdash;to customize specific aspects of your module's behavior.

Multiple modules can declare configuration files that affect the same configuration type (for example, events), and these multiple configuration files are merged.

Following are common terms used in this topic:

-   **Configuration object**—The Magento library or class that is responsible for defining and validating the configuration type. For example, the configuration object for <code>config.xml</code> is [Magento\Framework\App\Config]({{ site.mage2000url }}lib/internal/Magento/Framework/App/Config.php).

-   **Configuration stage**—Stages are defined as *primary*, *global*, and *area*. Each stage determines when configuration type is loaded and merged with same-named configuration types. For example, `module.xml` files are merged with other `module.xml` files. For more information, see [Configuration load and merge](#config-files-loadmerge).

-   **Configuration scope**—Complementary to a configuration stages, a scope defines the configuration type model. For example, `adminhtml` is an area scope that is loaded with at the stage with other modules' `adminhtml` configurations. For more information, see [Modules and areas]({{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html).

## Configuration load and merge {#config-files-loadmerge}

This section discusses how configuration files are loaded and merged.

### How Magento loads configuration files {#config-files-load}
Magento loads configuration files in the following order (all paths are relative to your Magento installation directory):

* Primary configuration ([app/etc/di.xml]({{ site.mage2000url }}app/etc/di.xml)). This file is used to bootstrap Magento.
* Global configurations from modules (`<your component base dir>/<vendorname>/<component-type>-<component-name>/etc/*.xml`). Collects certain configuration files from all modules and merges them together.
* Area-specific configuration from modules (`<your component base dir>/<vendorname>/<component-type>-<component-name>/etc/<area>/*.xml`). Collects configuration files from all modules and merges them into the global configuration. Some area-specific configurations can override or extend the global configuration.

{% include vendor/types-def.md %}

*     `<component-name>`: Name of your component as defined in [composer.json]({{ site.mage2000url }}composer.json).

### Configuration file merge {#config-files-load-merge-merge}
Nodes in configuration files are merged based on their fully qualified XPaths, which has a special attribute defined in `$idAttributes` array declared as its identifier. This identifier must be unique for all nodes nested under the same parent node.

Magento's merge algorithm follows:

* If node identifiers are equal (or if there is no identifier defined), all underlying content in the node (attributes, child nodes, and scalar content) is overridden.
* If node identifiers are not equal, the node is a new child of the parent node.
* If the original document has multiple nodes with the same identifier, an error is triggered because the identifiers cannot be distinguished.

After configuration files are merged, the resulting document contains all nodes from the original files.

## Configuration types, objects, and interfaces {#config-files-classes}

The following sections provide information about configuration types, their corresponding configuration objects, and interfaces you can use to work with the objects:

* [Configuration types and objects](#config-files-classes-objects)
* [Configuration interfaces](#config-files-classes-int)

### Configuration types and objects {#config-files-classes-objects}

The following table shows each configuration type and the Magento configuration object to which it relates.

|Configuration file|Description|Stage|Configuration object|
|--- |--- |--- |--- |
|`config.php` and `env.php`|[Deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)|Loads into memory when Magento initializes|Has no object, cannot be customized|
|`config.xml`|System configuration|primary, global|[\Magento\Framework\App\Config]({{ site.mage2000url }}lib/internal/Magento/Framework/App/Config.php)|
|`di.xml`|[Dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) configuration|primary, global, area|[\Magento\Framework\ObjectManager\Config]({{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/Config/Config.php)|
|`events.xml`|Event/observer configuration|global, area|[\Magento\Framework\Event]({{ site.mage2000url }}lib/internal/Magento/Framework/Event.php)|
|`routes.xml`|[Route]({{ page.baseurl }}/extension-dev-guide/routing.html) configuration|area|[Magento\Framework\App\Route\Config]({{ site.mage2000url }}lib/internal/Magento/Framework/App/Route/Config.php)|
{:style="table-layout:auto;"}

### Configuration interfaces {#config-files-classes-int}

You can interact with configuration files using interfaces under [Magento\Framework\Config]({{ site.mage2000url }}lib/internal/Magento/Framework/Config). You can also use these interfaces if you create a new configuration types.

`Magento\Framework\Config` provides the following interfaces:

* [Framework\Config\ConverterInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/ConverterInterface.php), which converts the {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} into an in-memory array representation of the configurations.
* [Framework\Config\DataInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/DataInterface.php), which retrieves the configuration data in a specified scope.
* [Framework\Config\FileResolverInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/FileResolverInterface.php), which identifies the location of files to be read by [Magento\Framework\Config\ReaderInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/ReaderInterface.php).
* [Framework\Config\ReaderInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/ReaderInterface.php), which reads the configuration data from storage and selects the storage from which it reads.

That is, the file system, database, other storage merges the configuration files according to the merging rules, and validates the configuration files with the validation schemas.

*  [Framework\Config\SchemaLocatorInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/SchemaLocatorInterface.php), which locates the XSD schema.
*  [Framework\Config\ScopeListInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/ScopeListInterface.php), which returns a list of scopes.
*  [Framework\Config\ValidationStateInterface]({{ site.mage2000url }}lib/internal/Magento/Framework/Config/ValidationStateInterface.php), which retrieves the validation state.

#### Related topics

 *  [Create or extend configuration types]({{ page.baseurl }}/config-guide/config/config-create.html)
 *  [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)
