---
group: configuration-guide
title: Module configuration files
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of module configuration files {#config-files-overview}

The responsibilities of the `config.xml` configuration file used in earlier versions of Magento is now divided between several files, located in various [module](https://glossary.magento.com/module) directories. Magento's multiple configuration files load on demand only when a module requests a specific configuration type.

You can use these files---also referred to as *configuration types*---to customize specific aspects of your module's behavior.

Multiple modules can declare configuration files that affect the same configuration type (for example, events), and these multiple configuration files are merged.

Following are common terms used in this topic:

-  **Configuration object**—The Magento library or class that is responsible for defining and validating the configuration type. For example, the configuration object for <code>config.xml</code> is [Magento\Framework\App\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Config.php).

-  **Configuration stage**—Stages are defined as *primary*, *global*, and *area*. Each stage determines when configuration type is loaded and merged with same-named configuration types. For example, `module.xml` files are merged with other `module.xml` files. For more information, see [Configuration load and merge](#config-files-loadmerge).

-  **Configuration scope**—Complementary to configuration stages, a scope defines the configuration type model. For example, `adminhtml` is an area scope that is loaded with at the stage with other modules' `adminhtml` configurations. For more information, see [Modules and areas]({{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html).

## Configuration load and merge {#config-files-loadmerge}

This section discusses how configuration files are loaded and merged.

### How Magento loads configuration files {#config-files-load}
Magento loads configuration files in the following order (all paths are relative to your Magento installation directory):

-  Primary configuration ([app/etc/di.xml]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/etc/di.xml)). This file is used to bootstrap Magento.
-  Global configurations from modules (`<your component base dir>/<vendorname>/<component-type>-<component-name>/etc/*.xml`). Collects certain configuration files from all modules and merges them together.
-  Area-specific configuration from modules (`<your component base dir>/<vendorname>/<component-type>-<component-name>/etc/<area>/*.xml`). Collects configuration files from all modules and merges them into the global configuration. Some area-specific configurations can override or extend the global configuration.

{% include vendor/types-def.md %}

-  `<component-name>`: Name of your component as defined in [composer.json]({{ site.mage2bloburl }}/{{ page.guide_version }}/composer.json).

### Configuration file merge {#config-files-load-merge-merge}

Nodes in configuration files are merged based on their fully qualified XPaths, which has a special attribute defined in `$idAttributes` array declared as its identifier. This identifier must be unique for all nodes nested under the same parent node.

Magento's merge algorithm follows:

-  If node identifiers are equal (or if there is no identifier defined), all underlying content in the node (attributes, child nodes, and scalar content) is overridden.
-  If node identifiers are not equal, the node is a new child of the parent node.
-  If the original document has multiple nodes with the same identifier, an error is triggered because the identifiers cannot be distinguished.

After configuration files are merged, the resulting document contains all nodes from the original files.

{:.bs-callout-info}
Note that you can use [\Magento\Framework\Config\Reader\Filesystem]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/Reader/Filesystem.php) class for debugging and understanding the logic behind [configuration files loader]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/Reader/Filesystem.php#L125) and [merge configs]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/Reader/Filesystem.php#L144) process.

## Configuration types, objects, and interfaces {#config-files-classes}

The following sections provide information about configuration types, their corresponding configuration objects, and interfaces you can use to work with the objects:

-  [Configuration types and objects](#config-files-classes-objects)
-  [Configuration interfaces](#config-files-classes-int)

### Configuration types and objects {#config-files-classes-objects}

The following table shows each configuration type and the Magento configuration object to which it relates.

Configuration file|Description|Stage|Configuration object
--- | --- | --- | ---
`address_formats.xml`|Address format declaration|primary, global|[\Magento\Customer\Model\Address\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/Address/Config.php)
`acl.xml`|[Access Control List]({{ page.baseurl }}/get-started/authentication/gs-authentication.html#relationship-between-aclxml-and-webapixml)|global|[\Magento\Framework\Acl\AclResource\Provider]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Acl/AclResource/Provider.php)
`analytics.xml`|[Advanced reporting]({{ page.baseurl }}/advanced-reporting/data-collection.html)|primary, global|[\Magento\Analytics\Model\Config\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Analytics/Model/Config/Reader.php)
`cache.xml`|Cache type declaration|primary, global|[\Magento\Framework\Cache\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Config/Data.php)
`catalog_attributes.xml`|Catalog attributes configuration|global|[\Magento\Catalog\Model\Attribute\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Attribute/Config/Data.php)
`config.php` and `env.php`|[Deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)|These files are readable/writeable by the internal config processor.|Has no object, cannot be customized|
`config.xml`|System configuration|primary, global|[\Magento\Framework\App\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Config.php)
`communication.xml`| [Defines aspects of the message queue system]({{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html#communicationxml)| global | [\Magento\WebapiAsync\Code\Generator\Config\RemoteServiceReader\Communication]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/WebapiAsync/Code/Generator/Config/RemoteServiceReader/Communication.php)
`crontab.xml`|[Configures cron groups]({{ page.baseurl }}/config-guide/cron/custom-cron-ref.html#config-cli-cron-group-conf)| global | [\Magento\Cron\Model\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cron/Model/Config/Data.php)
`cron_groups.xml`|[Specifies cron group options]({{ page.baseurl }}/config-guide/cron/custom-cron-ref.html)| global | [\Magento\Cron\Model\Groups\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cron/Model/Groups/Config/Data.php)
`db_schema.xml`|[Declarative schema]({{ page.baseurl }}/extension-dev-guide/declarative-schema/db-schema.html)|global|[Magento\Framework\Setup\Declaration\Schema]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Setup/Declaration/Schema/SchemaConfig.php)
`di.xml`|[Dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) configuration|primary, global, area|[\Magento\Framework\ObjectManager\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/ObjectManager/Config/Config.php)
`eav_attributes.xml`| Provides EAV attributes configuration | global | [\Magento\Eav\Model\Entity\Attribute\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Eav/Model/Entity/Attribute/Config.php)
`email_templates.xml`| Email templates configuration | global | [\Magento\Email\Model\Template\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Email/Model/Template/Config/Data.php)
`esconfig.xml`| [Elasticsearch locale stopwords config]({{ page.baseurl }}/config-guide/elasticsearch/es-config-stopwords.html#config-create-stopwords) | global | [\Magento\Elasticsearch\Model\Adapter\Index\Config\EsConfig]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Elasticsearch/Model/Adapter/Index/Config/EsConfig.php)
`events.xml`|Event/observer configuration|global, area|[\Magento\Framework\Event]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Event.php)
`export.xml`| Export entity configuration | global | [\Magento\ImportExport\Model\Export\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/ImportExport/Model/Export/Config.php)
`extension_attributes.xml`|[Extension attributes]({{ page.baseurl }}/extension-dev-guide/attributes.html#extension)| global | [\Magento\Framework\Api\ExtensionAttribute\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/ExtensionAttribute/Config.php)
`fieldset.xml`| Defines fieldsets | global | [\Magento\Framework\DataObject\Copy\Config\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DataObject/Copy/Config/Reader.php)
`indexer.xml`| [Declares indexers]({{ page.baseurl }}/extension-dev-guide/indexing-custom.html) | global | [\Magento\Framework\Indexer\Config\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Indexer/Config/Reader.php)
`import.xml`| Declares import entities | global | [\Magento\ImportExport\Model\Import\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/ImportExport/Model/Import/Config.php)
`menu.xml`| Defines menu items for admin panel | adminhtml | [\Magento\Backend\Model\Menu\Config\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Backend/Model/Menu/Config/Reader.php)
`module.xml`| Defines module config data and soft dependency | primary, global | [\Magento\Framework\Module\ModuleList\Loader]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Module/ModuleList/Loader.php)
`mview.xml`| [MView configuration]({{ page.baseurl }}/extension-dev-guide/indexing-custom.html#mview-configuration) | primary, global | [\Magento\Framework\Mview\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Mview/Config/Data.php)
`payment.xml`| Payment module configuration | primary, global | [\Magento\Payment\Model\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Model/Config.php)
`persistent.xml`| [Magento_Persistent]({{ page.baseurl }}/mrg/ce/Persistent.html) configuration file | global | [\Magento\Persistent\Helper\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Persistent/Helper/Data.php)
`pdf.xml`| PDF settings | global | [\Magento\Sales\Model\Order\Pdf\Config\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Order/Pdf/Config/Reader.php)
`product_options.xml`| Provides product options configuration | global | [\Magento\Catalog\Model\ProductOptions\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/ProductOptions/Config.php)
`product_types.xml`| Defines product type | global | [\Magento\Catalog\Model\ProductTypes\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/ProductTypes/Config.php)
`queue_consumer.xml`|[Defines the relationship between an existing queue and its consumer]({{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html#queueconsumerxml) | global | [\Magento\Framework\MessageQueue\Consumer\Config\Xml\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/MessageQueue/Consumer/Config/Xml/Reader.php)
`queue_publisher.xml`|[Defines the exchange where a topic is published.]({{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html#queuepublisherxml)| global | [\Magento\WebapiAsync\Code\Generator\Config\RemoteServiceReader\Publisher]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/WebapiAsync/Code/Generator/Config/RemoteServiceReader/Publisher.php)
`queue_topology.xml`|[Defines the message routing rules, declares queues and exchanges]({{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html#queuetopologyxml)| global | [\Magento\Framework\MessageQueue\Topology\Config\Xml\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/MessageQueue/Topology/Config/Xml/Reader.php)
`reports.xml`| [Advanced reports]({{ page.baseurl }}/advanced-reporting/report-xml.html) | global | [\Magento\Analytics\ReportXml\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Analytics/ReportXml/Config.php)
`resources.xml`| Defines module resource | global | [\Magento\Framework\App\ResourceConnection\Config\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/ResourceConnection/Config/Reader.php)
`routes.xml`|[Route]({{ page.baseurl }}/extension-dev-guide/routing.html) configuration|area|[Magento\Framework\App\Route\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Route/Config.php)
`sales.xml`| Defines sales total configuration | global | [\Magento\Sales\Model\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Sales/Model/Config/Data.php)
`search_engine.xml`| Provides search engine configuration | global | [Magento\Search\Model\SearchEngine\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Search/Model/SearchEngine/Config.php)
`search_request.xml`| Defines catalog search configuration | global | [\Magento\Framework\Search\Request\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Search/Request/Config.php)
`sections.xml` | Defines actions that trigger cache invalidation for private content blocks | frontend | [SectionInvalidationConfigReader]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/etc/di.xml#L137-L148) |
`system.xml`| Defines options for system configuration page | adminhtml | [\Magento\Framework\App\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Config.php)
`validation.xml`| Module validation configuration file | global | [\Magento\Framework\Validator\Factory]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Validator/Factory.php)
`view.xml`| Defines Vendor_Module view config values | global | [\Magento\Framework\View\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/View/Config.php)
`webapi.xml`| [Configures a web API]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html) | global | [\Magento\Webapi\Model\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Webapi/Model/Config.php)
`webapi_async.xml`| [Defines REST custom routes]({{ page.baseurl }}/extension-dev-guide/webapi/custom-routes.html) | global | [\Magento\WebapiAsync\Model\ServiceConfig]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/WebapiAsync/Model/ServiceConfig.php)
`widget.xml`| Defines widgets | global | [\Magento\Widget\Model\Config\Reader]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Widget/Model/Config/Reader.php)
`zip_codes.xml`| Defines zip code format for each country | global | [\Magento\Directory\Model\Country\Postcode\Config\Data]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Directory/Model/Country/Postcode/Config/Data.php)

### Configuration interfaces {#config-files-classes-int}

You can interact with configuration files using interfaces under [Magento\Framework\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config).

You can also use these interfaces if you [create new configuration types]({{ page.baseurl }}/config-guide/config/config-create.html#config-files-extend-create-create).

`Magento\Framework\Config` provides the following interfaces:

-  [Framework\Config\ConverterInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/ConverterInterface.php), which converts the [XML](https://glossary.magento.com/xml) into an in-memory array representation of the configurations.
-  [Framework\Config\DataInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/DataInterface.php), which retrieves the configuration data in a specified scope.
-  [Framework\Config\FileResolverInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/FileResolverInterface.php), which identifies the location of files to be read by [Magento\Framework\Config\ReaderInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/ReaderInterface.php).
-  [Framework\Config\ReaderInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/ReaderInterface.php), which reads the configuration data from storage and selects the storage from which it reads.

That is, the file system, database, other storage merges the configuration files according to the merging rules, and validates the configuration files with the validation schemas.

-  [Framework\Config\SchemaLocatorInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/SchemaLocatorInterface.php), which locates the XSD schema.
-  [Framework\Config\ScopeListInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/ScopeListInterface.php), which returns a list of scopes.
-  [Framework\Config\ValidationStateInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Config/ValidationStateInterface.php), which retrieves the validation state.

{:.ref-header}
Related topics

-  [Create or extend configuration types]({{ page.baseurl }}/config-guide/config/config-create.html)
-  [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)

<!-- Link definitions -->
[RabbitMQ]: http://www.rabbitmq.com
