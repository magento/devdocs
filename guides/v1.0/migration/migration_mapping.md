---
layout: default
group:  migration
subgroup: mapping
title: Database mapping
menu_title: Database mapping
menu_node: parent
menu_order: 6
github_link: migration/migration-mapping.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#migrate-overview">Overview</a>
*	<a href="#migrate-is">Internal structure</a>
*	<a href="#migrate-autotests">Automatic tests</a>


<div class="bs-callout bs-callout-info" id="info">
<span>This topic is in draft form. Information in this topic might be incorrect or incomplete. Use the <strong>Edit this page on GitHub</strong> link at the top of this topic to send us feedback and suggestions.</p></span>
</div>

<h2 id="migrate-overview">Overview</h2>

This section describes an implementation details of Migration Tool and how to extend its functionality.

<h3 id="migrate-overview">Repositories</h3>

Migration tool repository <a href=" https://github.com/magento/data-migration-tool" target="_blank">migration-tool</a>

<h3 id="migrate-overview">System requirements</h3>

Same as for Magento 2

<h2 id="migrate-is">Internal structure</h2>

<h3 id="migrate-is">Directory structure</h3>

Next diagram represents directory structure of Migration Tool:

<pre>

├ bin
│ └ migrate                 -- entry point
├ etc                       -- configurations of tool
│ ├ ce-1.x.x                -- folder contains version specific set of config files
│ │ ├ map.xml.dist
│ │ ├ config.xml.dist
│ │ ├ settings.xml.dist
│ │ └ ...
│ ├ config.xsd
│ ├ map.xsd
│ ├ magento_path.php
│ └ ...
├ src
│ └ Migration
│   ├ App
│   │ └ Shell.php             -- shell application
│   ├ Handler                 -- contains handlers for specific cases of processing data
│   │ ├ Manager.php
│   │ ├ HandlerInterface.php
│   │ └ AbstractHandler.php
│   ├ Resource                -- contains adapter for connection to data storage and classes to work with structured data
│   │ ├ Adapter
│   │ ├ Document
│   │ ├ Record
│   │ ├ Structure
│   │ ├ Source.php
│   │ └ Destination.php
│   ├ Logger                   -- classes for processing log information
│   │ ├ ConsoleHandler.php
│   │ ├ FileHandler.php
│   │ ├ Logger.php
│   │ ├ Manager.php
│   │ ├ MessageFormatter.php
│   │ └ MessageProcessor.php
│   ├ Step
│   │ ├ EAV
│   │ ├ Map
│   │ └ UrlRewrite
│   ├ Config.php
│   └ Migration.php    -- application
├ tests
│ ├ unit
│ │ └ phpunit.xml.dist
│ ├ static
│ │ └ phpunit.xml.dist
│ └ integration
│   └ phpunit.xml.dist
├ composer.json
└ README.md
</pre>

<h3 id="migrate-is">Entry Point</h3>

Script that runs migration process is located at
magento-root/vendor/magento/migration-tool/bin/migrate


<h3 id="migrate-is">Configuration</h3>

The Schema for configuration file config.xsd is placed under etc/directory. Default configuration file config.xml.dist is created for each version of Magento 1.x. It is placed in separate directories under etc/.

Default configuration file can be replaced by custom one via CLI (see --config <code>&lt;value&gt;</code> parameter).

Configuration file has the following structure:
{% highlight xml %}
<config xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" xs:noNamespaceSchemaLocation="config.xsd">
    <steps mode="settings">
        <step title="Settings step">
            <integrity>Migration\Step\Settings</integrity>
            <data>Migration\Step\Settings</data>
        </step>
    </steps>
    <steps mode="data">
        <step title="Map step">
            <integrity>Migration\Step\Map\Integrity</integrity>
            <data>Migration\Step\Map\Data</data>
            <volume>Migration\Step\Map\Volume</volume>
        </step>
        ...
    </steps>
    <steps mode="delta">
        <step title="Map step">
            <delta>Migration\Step\Map\Delta</delta>
            <volume>Migration\Step\Map\Volume</volume>
        </step>
        ...
    </steps>
    <source>
        <database host="localhost" name="magento1" user="root" password=""/>
    </source>
    <destination>
        <database host="localhost" name="magento2" user="root" password=""/>
    </destination>
    <options>
        <map_file>map-file.xml</map_file>
        <settings_map_file>settings-map-file.xml</settings_map_file>
        <bulk_size>100</bulk_size>
        <custom_option>custom_option_value</custom_option>
        <source_prefix />
        <dest_prefix />
        ...
    </options>
</config>
{% endhighlight %}

* steps - describes all steps that are processed during migration.

* source - configuration for data source. Available source types: database.

* destination - configuration for data destination. Available destination types: database.

* options - list of parameters. Contains both mandatory (map_file, settings_map_file, bulk_size) and optional (custom_option, resource_adapter_class_name, prefix_source, prefix_dest, log_file) parameters.

Use prefix option when documents have a prefix. In that case you don't need to set prefix part for documents in a map file.
It can be set to source and to destination documents. Use the "source_prefix" and "dest_prefix" configuration options accordingly

Configuration data is accessible via \Migration\Config class.




<h2 id="migrate-sv-versions">Step internals</h2>
Migration Process consists of steps.
Step is a unit that provides functionality required for migration some separated data. Step can consist of one or more stages e.g. integrity check, data, volume check, delta.

By default there are several steps (Map, EAV, URL Rewrites ...). But developer can add his own.
Steps related classes are placed into src/Migration/Step directory.
To be executed Step class should be defined in config.xml file.

{% highlight xml %}
<config xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" xs:noNamespaceSchemaLocation="config.xsd">
    <steps mode="mode_name">
        <step title="Step Name">
            <integrity>Migration\Step\StepName\Inegrity</integrity>  <!-- integrity check stage of the step -->
            <data>Migration\Step\StepName\Data</data>
            <volume>Migration\Step\StepName\Volume</volume>
        </step>
        ...
    </steps>
    ...
</config>
{% endhighlight %}

Every stage class must implement StageInterface.

{% highlight php %}
class StageClass implements StageInterface
{
  /**
   * Perform the stage
   *
   * @return bool
   */
  public function perform()
  {
  }
}
{% endhighlight %}

If data stage supports rollback it should implement RollbackInterface interface.

Visualization of step running is provided by Symfony's ProgressBar component (see http://symfony.com/doc/current/components/console/helpers/progressbar.html). It is accessible inside step as LogLevelProcessor.

Main methods for use are:

{% highlight xml %}
$this->progress->start();
$this->progress->advance();
$this->progress->finish();
{% endhighlight %}

##Stages

###Integrity check

Each step has to check that the structure of data source (Magento 1 by default) and the structure of data destination (Magento 2) are compatible. If not - an error will be shown with entities that are not compatible.

###Data Transfer

In case integrity check passed, transferring data is running. In case when some error appears then rollback is run to revert to previous state of Magneto 2. If a step class implements RollbackInterface then "rollback" method will be executed in case of error.

###Volume check

After data has been migrated Volume Check provides additional check that all data was transferred correctly.

###Delta delivery

Delta functionality is responsible for delivering the rest of data that was added after main migration.

##Running Modes

The tool should be run in three different modes in particular order:

1. settings - migration of system settings
2. data - main migration of data
3. delta - migration of the rest of data that was added after main migration

Each mode has its own list of steps to be executed. See config.xml

###Settings migration mode

Settings migration mode of this tool is used to transfer following entities:

1. Websites, stores, store views.
2. Store configuration (mainly Stores->Configuration in M2 or System->Configuration in M1)

All store configuration keeps its data in core_config_data table in database. settings.xml file contains rules for this table that are applied during migration process. This file describes settings that should be ignored, renamed or should change their values. settings.xml file has the following structure:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" xs:noNamespaceSchemaLocation="settings.xsd">
    <key>
        <ignore>
            <path>path/to/ignore*</path>
        </ignore>
        <rename>
            <path>path/to/rename</path>
            <to>new/path/renamed</to>
        </rename>
    <key>
    <value>
        <transform>
            <path>some/key/to/change</path>
            <handler class="Some\Handler\Class"/>
        </transform>
    </value>
</settings>
{% endhighlight %}

Under node <code>&lt;key&gt;</code> there are rules that work with 'path' column of core_config_data table. <code>&lt;ignore&gt;</code> rules make the tool not to transfer some setting. Wildcards can be used in this node. All other settings not listed in <code>&lt;ignore&gt;</code> node, will be migrated. If path of some setting is changed in Magento 2, it should be added to //key/rename node, where old path indicates in //key/rename/path node and new path indicates in //key/rename/to node.

Under node <code>&lt;value&gt;</code> there are rules that work with 'value' column of core_config_data table. These rules aim to transform value of settings by handlers (classes that implement Migration\Handler\HandlerInterface) and adapt it for Magento 2

###Data migration mode

In this mode most of the data will be migrated. Before data migration the integrity check stages run for each step. If integrity check passed the Migration Tool installs deltalog tables (with prefix m2_cl_*) and corresponding triggers to Magento 1 database. And runs data migration stage of steps. When migration is completed without errors the volume check checks data consistency. Next the most valuable migration steps are described. It is Map Step, URL Rewrite Step, EAV Step.

####Map Step

Map step is responsible for transferring most of data from Magento 1 to Magento 2. This step reads instructions from map.xml file (located in etc dir). The file describes differences between data structures of source (Magento 1) and destination (Magento 2). In case Magento 1 contains tables or fields that belong to some extension that does not exist in Magento 2, then these entities can be placed here to ignore them by Map Step. Otherwise it will show an error message. 

Map file has the next format:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<map xmlns:xs="http://www.w3.org/2001/XMLSchema-instance" xs:noNamespaceSchemaLocation="map.xsd">
    <source>
        <document_rules>
            <ignore>
                <document>some_document2</document>
            </ignore>
            <rename>
                <document>some_document</document>
                <to>some_dest_document</to>
            </rename>
            <log_changes>
                <document key="primary_key">some_dest_document</document>
            </log_changes>
        </document_rules>
 
        <field_rules>
            <move>
                <field>some_document1.field1</field>
                <to>some_document1.field2</to>
            </move>
            <ignore>
                <field>some_document3.field8</field>
            </ignore>
            <transform>
                <field>some_document1.field1</field>
                <handler class="\Migration\Handler\Convert">
                    <param name="map" value="[value1:value2;value3:value4;value5:value6;]" />
                </handler>
            </transform>
        </field_rules>
    </source>
    <destination>
        <document_rules>
            <ignore>
                <document>some_document8</document>
            </ignore>
        </document_rules>
 
        <field_rules>
            <transform>
                <field>some_document5.field3</field>
                <handler class="\Migration\Handler\SetValue">
                    <param name="value" value="10" />
                </handler>
            </transform>
        </field_rules>
    </destination>
</map>
{% endhighlight %}

Areas:

* *source* - contains rules of source database.

* *destination* - contains rules of destination database.

Options:

* *ignore* - document or field marked with this option will be ignored and not transferred to destination document.

* *rename* - describes name relations between documents with the different name. In a case when destination document name is not the same with the source document - you can use rename option to set source document name similar to destination table name.

* *move* - sets rule to move specified field from source document to destination document. NOTE: destination document name should be the same with the source document name. If source and destination document names are different - you need to use rename option for document that contains moved field.

* *transform* - is a option that allows user to migrate fields according to behavior described in handlers.

* *handler* - describes transformation behavior for fields. To call the handler you need to specify a handler class name in a <handler> tag. Use <param> tag with the parameter name and value data to pass it to handler.

**Source** available operations:
<table>
<tbody>
	<tr>
		<th>Document</th>
		<th>Field</th>
	</tr>
<tr>
	<td>ignore 
        rename</td>
	<td>ignore
		move 
		transform</td>
</tr>
</tbody>
</table>

**Destination** available operations:
<table>
<tbody>
	<tr>
		<th>Document</th>
		<th>Field</th>
	</tr>
<tr>
	<td>ignore</td>
	<td>ignore</td>
</tr>
</tbody>
</table>

####Wildcards
To ignore documents with similar parts (e.g. document_name_1, document_name_2 e.t.c), you can use wildcard functionality. Just put * symbol instead of repeating part (e.g. document_name_*) and this mask will cover all source or destination documents that meet this mask.

####URL Rewrite Step

This step is quite complex because there are many different algorithms developed in Magento 1 which are not compatible with Magento 2. For different versions of Magento 1 there can be different algorithms. Thus under Step/UrlRewrite folder there are classes that were developed for some of particular versions of Magento and Migration\Step\UrlRewrite\Version191to2000 is one of them. It can transfer URL Rewrites data from Magento 1.9.1 to Magento 2.

####EAV Step

This step transfers all attributes (e.g. product, customer, RMA) from Magento 1 to Magento 2. It uses map-eav.xml file that contains rules similar to the ones in map.xml file for specific cases of processing data.

Some of the tables that are processed in the step:

* eav_attribute
* eav_attribute_group
* eav_attribute_set
* eav_entity_attribute
* catalog_eav_attribute
* customer_eav_attribute
* eav_entity_type
* ...

###Delta migration mode

After main migration some data could have been added to DB of Magento 1 e.g. by customers on store-front. To track this data, database triggers are setup for tables in the beginning of main migration. If some extension has its own tables that need to be tracked for changing its data - then a developer should:

1. add these tables into deltalog.xml file
2. create its own delta class which extends Migration\App\Step\AbstractDelta
3. add name of this class to config.xml into delta mode section

##Data sources

To reach to the data sources of Magento 1 and Magento 2 and operate with its data (select, update, insert, delete) there are many classes in Resource folder. Migration\Resource\Source and Migration\Resource\Destination are main classes. All migration steps use it to operate with data. This data is contained in classes like Migration\Resource\Document, Migration\Resource\Record, Migration\Resource\Structure etc. 

Here is a class diagram of these classes:

<p><img src="{{ site.baseurl }}common/images/Migration Tool Data Structure.png" alt="Migration Tool Data Structure"></p>

##Logging

In order to implement output of migration process and control all possible levels PSR logger, which is used in Magento, is applied. \Migration\Logger\Logger class was implemented to provide logging functionality. To use the logger you should inject it via constructor dependency injection.

<pre><code>class SomeClass
{
    ...
    protected $logger;
 
    public function __construct(\Migration\Logger\Logger $logger)
    {
        $this->logger = $logger;
    }
    ...
}
</code></pre>

After that you can use this class for logging of some events:

<pre><code>$this->logger->info("Some information message");
$this->logger->debug("Some debug message");
$this->logger->error("Message about error operation");
</code></pre>

<!--
-->

<h2 id="migrate-install">Install the migration tool</h2>
This section discusses how to install the Magento migration tool. To install the migration tool, you must update `composer.json` in the Magento root installation directory to provide the location of the migration tool package. 

Sample data is versioned like Magento code. Before you begin, you can either either:

*	Find the exact version you want at <a href="http://packages.magento.com/#magento/migration-tool" target="_blank">packages.magento.com</a>.
*	Install the latest version using Composer <a href="https://getcomposer.org/doc/01-basic-usage.md#next-significant-release-tilde-and-caret-operators-" target="_blank">next significant release syntax</a>.

<h4 id="migrate-install">Install migration tool using composer</h4>

To deploy migration tool, you must:

1.	Decide the version of `magento/migration-tool` you want. 

2. Run the composer config and composer require commands to update composer.json.

NOTE: Migration tools and Magento 2 are tested only if they have the same version. For example, Magento 2 version 0.74.0-beta4 is tested only with Migration tool version 0.74.0-beta4.

To update `composer.json`:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apacheweb">web server user</a> or as a user with `root` privileges.

2.	Change to your Magento installation directory.

3.	Make a backup copy of `composer.json`.

		cp composer.json composer.json.bak

4.	Open `composer.json` in a text editor.

5.	In the first section, add `"minimum-stability": "beta",` before `version`. A snippet follows:

		"name": "magento/project-community-edition",
	    "description": "Magento project (Community Edition)",
	    "type": "project",
	    "minimum-stability": "beta",
	    "version": "0.74.0-beta5",
	    "license": [
	        "OSL-3.0",
	        "AFL-3.0"
	    ],

6.	Save your changes to <code>composer.json</code> and exit the text editor.

7.	Enter the following command to reference Magento packages in `composer.json`:

		composer config repositories.magento composer http://packages.magento.com

8.	Enter the following command to require the current version of the migration tool package:

		composer require magento/migration-tool:<version>

	where `<version>` is either an exact version or next significant release syntax.

	Exact version example:

		composer require magento/migration-tool:0.74.0-beta4

	Next significant release example:

		composer require magento/migration-tool:~0.74.0-beta4

9.	Wait while dependencies are installed.

<h2 id="migration-preconditions">Preconditions before running the tool</h2>

*	Available network connection to Magento 1 and Magento 2 data storage (MySQL)
*	Magento 2 store should be installed but its cron tasks should not be executed
*	Extensions from Magento 1 are ported to Magento 2
*	The codebase of Migration tool depends on Magento Framework of Magento 2 and should be located in magento2-root/vendor/magento/migration-tool directory

	It is recommended to: 
<pre>
1.	make a database dump of Magento 2 just after its installation
2.	set up replication (after MAGETWO-33344)?!? 
</pre>

<h3 id="migration-preconditions">Configuration</h3>

All config files are placed under /etc folder.

Here is list of configuration files required for migration:

<table>
<tbody>
	<tr>
		<th>Configuration file name</th>
		<th>Description</th>
	</tr>
<tr>
	<td>class_map.php</td>
	<td>Magento 1 to Magento 2 class map dictionary. </td>
</tr>
<tr>
	<td>magento_path.php</td>
	<td></td>
</tr>
</tbody>
</table>

The following table discusses each mapping file.

<table>
<tbody>
	<tr>
		<th>Mapping file name</th>
		<th>Description</th>
	</tr>
<tr>
	<td>config.xml.dist</td>
	<td>Main configuration file that specifies the Magento 1.x and Magento 2 database configurations, step configuration, and links to mapping files</td>
</tr>
<tr>
	<td>map.xml.dist</td>
	<td>Map file required for the map step.</td>
</tr>
<tr>
	<td>map-eav.xml.dist<br />
	list-eav.xml.dist</td>
	<td>EAV mapping files.</td>
</tr>
<tr>
	<td>map-log.xml.dist</td>
	<td>Log mapping file.</td>
</tr>
<tr>
	<td>changelog.xml.dist</td>
	<td>Configuration file that specifies the list of tables required for database routines setup.</td>
</tr>
<tr>
	<td>settings.xml.dist</td>
	<td>Setting migration configuration file that specifies rules required for migrating the <code>core_config_data</code> table.</td>
</tr>
<tr>
	<td>deltalog.xml.dist</td>
	<td>Log settings for delta migration.</td>
</tr>

</tbody>
</table>


<h3 id="migration-preconditions">Actions with configuration files before running tool</h3>

The migration tool uses *mapping files* to enable you to perform custom database mapping between your Magento 1.x and Magento 2 databases, including:

*	Changing table names
*	Changing column names
*	Changing field names
*	Ignoring tables or fields

Mapping files for supported Magento versions are located in subdirectories of `<your Magento install dir>/vendor/magento/migration-tool/etc`.

1. go to migration-tool/etc/your-m1-version folder
2. copy config.xml.dist => config.xml
3. change config.xml
  * with yours credentials to MySQL in <config><source><database> for Magento 1 and <config><destination><database> for Magento 2
  * specify <source_prefix> and/or <dest_prefix> in case you use prefixes for tables in Magento 1 or Magneto 2 *!!!!!!*

<h3 id="migration-preconditions">Migration Tool CLI usage</h3>

<pre>
Usage:
  migrate <mode> --config=path/to/config.xml [options]
  migrate --help
 
Possible modes:
  settings            Migrate system configuration
  data                Main migration of data
  delta               Migrate the data is added into Magento after the main migration
 
 
Available options:
  --reset             Reset the current position of migration to start from the beginning
  --config <value>    Path to main configuration file, i.e.: etc/m1_version/config.xml
  --verbose <level>   Verbosity levels: DEBUG, INFO, ERROR
  --help              Help information
</pre>

<h2 id="migration-notes">Running migration</h2>

The migration of data should be performed in specific order. First, it is migration of settings. Then migration of main data and the last one is migration of delta. 

By using --verbose option one can leverage details level of information during migration process.

* ERROR - shows only error messages
* INFO - shows info about current name of mode, step, progress bar etc.
* DEBUG - includes information from INFO level and shows names of tables are processed

<pre>
INFO: verbosity level is used by default
</pre>

Migration tool shows log information on screen and writes into log file simultaneously. The migration.log file locates in var directory of migration tool and can be changed in config.xml

<pre>
During the migration process these options are allowed in Magento 1 store:

* all operations for customers in store-front (creating new customers, placing orders, reviews, etc.)
* order processing for admin users (invoice, shipping creation, etc.)

Other options are forbidden:

* all operations in Magento 2 store either in store-front and in admin side
* changing configurations in Magento 1
* creation price rules in Magento 1
* installing new extensions in Magento 1
* etc.
</pre>

<h3 id="migration-notes">Migration of settings</h3>

In this mode migration tool transfers stores, website and different system configurations like shipping, payment and some tax settings. To run migration of settings staying in magento2-root/vendor/magento/migration-tool folder run:

<pre>
bin/migrate settings --config=path/to/config.xml
</pre>

Example:

<pre>
$ bin/migrate settings --config=etc/ce-1.9.1/config.xml

[2015-05-06 04:43:31][INFO][mode: settings][stage: integrity check][step: Settings step]: started
100% [============================] Remaining Time: 1 sec
[2015-05-06 04:43:32][INFO][mode: settings][stage: data migration][step: Settings step]: started
100% [============================] Remaining Time: 1 sec
[2015-05-06 04:43:32][INFO][mode: settings][stage: data migration][step: Settings step]: Migration completed
</pre>

This mode can be configured by changing special config file (by default it is etc/map/settings.xml file).

<pre>
Be informed that some settings from configuration can not be migrated. So pass through your Magento 2 settings to be sure that all your settings were migrated properly
</pre>

<h3 id="migration-notes">Migration of main data</h3>

In this mode migration tool transfers most of the data from Magneto 1. So it may take some time.
To run migration of main data staying in magento2-root/vendor/magento/migration-tool folder run:

<pre>
bin/migrate data --config=path/to/config.xml
</pre>

Example:

<pre>
$ bin/migrate data --config=etc/ce-1.9.1/config.xml

[2015-05-06 04:43:31][INFO][mode: data][stage: integrity check][step: Map step]: started
100% [============================] Remaining Time: 1 sec
[2015-05-06 04:43:32][INFO][mode: data][stage: data migration][step: Map step]: started
100% [============================] Remaining Time: 1 sec
[2015-05-06 04:43:33][INFO][mode: data][stage: volume check][step: Map step]: started
100% [============================] Remaining Time: 1 sec
[2015-05-06 04:43:34][INFO][mode: data][stage: volume check][step: Map step]: Migration completed
</pre>

The tool will verify that tables and fields from Magento 1 and Magento 2 are consistent (stage: integrity check). If not, an error will be shown with a list of corresponding tables and fields. These entities, for example, can belong to some extensions from Magento 1 and they do not exist in Magento 2 database. There are several ways to fix it:

1. Install corresponding extensions to Magento 2 if it exists
2. Omit transferring these data by adding <code>&lt;ignore&gt;</code> tags to map.xml file. Refer to Migration Tool Developer's Guide for details.

After fixing this issue the tool can be rerun in the same way.

Be informed, Migration Tool constantly saves its current progress position during its running. In case when migration is aborted in the middle it will restore from the last position after next rerunning. But if rerun with --reset option the migration will be run all over again. In this case some data could already have been migrated to Magneto 2. Thus the initial database state of Magento 2 should be restored manually using its database dump previously made.





<h2 id="migration-notes">General notes about using the migration tool</h2>
During the time you're migrating:

*	Do not make any changes in the Magento 1.x Admin Panel
*	Do not alter any code
*	Do not delete any data
*	Do not make any changes in the Magento 2 Admin

You *can*, however, manage orders in your Magento 1.x system.

After performing migration:

1.	In the Magento 2 Admin, flush all caches and reindex all indexes.
2.	Run your Magento 2 cron jobs twice.

<h2 id="migration-configure">Configuring the migration</h2>
Before you migrate any data, you must edit `<your Magento install dir>/vendor/magento/migration-tool/etc/<magento-version>/config.xml` to specify at minimum values for the following:

{% highlight xml %}
	<source version="1.9.1">
        <database host="localhost" name="magento1" user="root"/>
    </source>
    <destination version="2.0.0.0">
        <database host="localhost" name="magento2" user="root"/>
    </destination>
{% endhighlight %}

If you use table prefixes, specify them using `<source_prefix>` and `<dest_prefix>` elements.

<h2 id="migration-command">Migrating data, settings, and changes</h2>
Run the migration tool from the `<your Magento install dir>/vendor/magento/migration-tool/bin` directory.

Command syntax:

	migrate <mode> --config=path/to/config.xml [options]

where `<mode>` can be:

*	`data` to migrate database data
*	`delta` to migrate data that is added to the database since your ran the tool with the `data` option
*	`settings` to migrate Magento Admin Panel settings

where `[options]` can be:

*	`--reset` to start the migration from the beginning
*	`--config <value>` path to `config.xml`
*	`--verbose <level>` DEBUG, INFO, NONE
*	`--help` Help

See one of the following sections:

*	<a href="#migrate-command-settings">Migrating settings</a>
*	<a href="#migrate-command-data">Migrating data</a>
*	<a href="#migrate-command-delta">Incremental migration (delta mode)</a>

<h3 id="migrate-command-settings">Migrating settings</h3>
You should migrate settings first. This mode migrates stores; websites; and different system configuration like shipping, payment and some tax settings. 

To change how settings are migrated, either edit `etc/map/settings.xml` or create a new one).

Command usage:

	<your Magento install dir>/vendor/magento/migration-tool/bin/migrate settings --config=<path to config.xml>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This command does not migrate all configuration settings. Verify all settings in the Magento 2 Admin before proceeding.</p></span>
</div>

<h3 id="migrate-command-data">Migrating data</h3>
When you migrate data, the migration tool verifies that tables and fields are consistent between  Magento 1 and Magento 2. If not, an error displays that lists the problematic tables and fields. These entities, for example, can belong to some extensions from Magento 1 that do not exist in the Magento 2 database.

If you encounter such an error, you can:

*	Install the corresponding extensions in Magento 2 if they exist
*	Ignore them by adding `<ignore>` tags to the `map.xml` file. 

After resolving issues, run the migration tool again.

Command usage:

	<your Magento install dir>/vendor/magento/migration-tool/bin/migrate data --config=<path to config.xml> [--reset]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The migration tool saves its current progress as it runs. If errors or user intervention stop it from running, the migration tool resumes progress at the last known good state.</p>
  <p>To force the migration tool to run from the beginning, use the <code>--reset</code>. In that case, we recommend you restore your Magento 2 database dump to prevent duplication of previously migrated data.</p></span>
</div>

<h3 id="migrate-command-delta">Incremental migration (delta mode)</h3>
Incremental migration enables you to migrate only the changes since you migrated data. For example, you can migrate new customers, orders, and so on.

Command usage:

	<your Magento install dir>/vendor/magento/migration-tool/bin/migrate delta --config=<path to config.xml>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Incremental migration runs continuously until you stop it by pressing Control+C.</p></span>

