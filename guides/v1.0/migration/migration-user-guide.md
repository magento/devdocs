---
layout: default
group:  migration
subgroup: Migration
title: Migration user guide&mdash;DRAFT 
menu_title: Migration user guide&mdash;DRAFT 
menu_node: parent
menu_order: 1
github_link: install-gde/migration/migration-user-guide.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#migrate-overview">Overview</a>
*	<a href="#migrate-prereq">Prerequisites</a>
*	<a href="#migrate-install">Install the migration tool</a>
*	<a href="#migration-config">Work with configuration and mapping files</a>
*	<a href="#migration-notes">General notes about using the migration tool</a>
*	<a href="#migration-command">Migrating data, settings, and changes</a>
*	<a href="#migrate-command-media">Manual migration</a>
*	<a href="#migrate-command-after">Post-migration tasks</a>

<div class="bs-callout bs-callout-info" id="info">
<span>This topic is in draft form. Information in this topic might be incorrect or incomplete. Use the <strong>Edit this page on GitHub</strong> link at the top of this topic to send us feedback and suggestions.</p></span>
</div>

<h2 id="migrate-overview">Overview</h2>
We’re pleased you’re considering moving from the world’s #1 eCommerce platform—Magento 1.x—to the eCommerce platform for the future, Magento 2. We’re also excited to share the details about this process, which we refer to as migration.

Magento 2 migration involves four components: data, extensions, themes, and customizations. 

*	Data: We’ve developed the Magento 2 Data Migration Tool to help you efficiently port all of your key product, customer, and order data, store configurations, promotions and more to Magento 2. This paper provides information on the tool and best practices for using it to migrate your data

*	Extensions: We are actively working with the Magento development community to help ensure the most widely used extensions will be updated, vetted, and available on Magento Connect when Magento 2 becomes generally available. More information on developing extensions for Magento 2 is available in Magento 2 Extension Developer Guide

*	Themes and Customizations: Magento 2 uses several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences and scale to new levels. To take advantage of these advances, developers will need to make changes to their themes and customizations. Documentation is available online for creating Magento 2 themes, layouts, and customizations.

Just like an upgrade between 1.x versions (for example, from v1.12 to v1.14), the level of effort to migrate from Magento 1.x to Magento 2.0 depends upon how you have built your site and its level of customization.  Initial estimates indicate that an average Magento 2 migration is only about 20% larger than a Magento 1.x upgrade. Over the coming months, as we proceed with testing and the merchant beta program, we will be able to refine this number so you can plan your budgets and timelines. 
 
<h3 id="migrate-overview-versions">Supported versions</h3>
We support the following versions for migration:

*	Community Edition (CE) versions 1.6, 1.7, 1.8, and 1.9
*	Enterprise Edition (EE) versions 1.11, 1.12, 1.13, and 1.14

<h3 id="migrate-overview-not">What migration does not cover</h3>
Magento 2 takes advantage of several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences, rapidly respond to changing market dynamics, and scale to new levels. But, these valuable changes mean that some custom code, extensions, and themes cannot be automatically migrated to the new platform. They might need to be adjusted or rebuilt to fit the enhanced Magento 2 architecture.

The migration tool does *not* automatically migrate the following.

#### Extensions and custom code
Design differences between Magento 1 and Magento 2 are so large that custom code and extensions must be manually ported to Magento 2. 

#### Media
Media assets include, for example, images for products, categories, WYSIWYG editor, and so on. You must copy these manually from `<your Magento 1 install dir>/media` directory to `<your Magento 2 install dir>/pub/media` directory.

#### Storefront design
Cascading Stylesheets (CSS), JavaScript, templates, and XML layouts are implemented differently in Magento 2 and must be migrated manually.

#### Layouts
Layout updates implemented in Magento 1 cannot be used in Magento 2. You must migrate the following manually:

*	XML in CMS category pages in the Magento Admin
*	Layout updates specified in widget instances

#### Web services credentials
You must manually create credentials for SOAP, XML-RPC and REST in Magento 2.

#### Indexed data
You should perform a full reindex before you enable Magento 2 on the production sever.

#### Google Shopping
Google Shopping shipped in some older Magento 1 versions but has since been removed.

#### Data that is not supported in Magento 2
Poll, tag, staging modules, and recurring profiles are not currently supported in Magento 2.

<h2 id="migrate-prereq">Prerequisites</h2>
Before you start your migration, you must do all of the following:

*	Set up a Magento 2.0 system that meets our <a href="{{ site.gdeurl }}/install-gde/system-requirements.html">system requirements</a>.

	Set up your system using a topology and design that at least matches your existing Magento 1.x system.

*	Do not start Magento 2.0 cron jobs.

*	Back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html" target="_blank">dump</a> your Magento 2 database as soon after installation as possible.

*	The Magento 1.x and Magento 2 databases must be able to communicate with each other.

	Open firewall ports for MySQL and reduce network latency between your Magento 1.x and 2.0 databases as much as possible to improve migration performance.

*	To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database.

*	Migrate Magento 1.x extension code to Magento 2.0.

	Reach out to your extension providers to see if they have been ported yet.

<h2 id="migrate-install">Install the migration tool</h2>
Installation is discussed in:

*	Magento Community Edition (CE): <a href="https://github.com/magento/data-migration-tool-ce/README.md">README.md</a>
*	Magento Enterprise Edition (EE): <a href="https://github.com/magento/data-migration-tool-ee/README.md">README.md</a>

<h2 id="migration-config">Work with configuration and mapping files</h2>
The migration tool uses *mapping files* to enable you to perform custom database mapping between your Magento 1.x and Magento 2 databases, including:

*	Changing table names
*	Changing column names
*	Changing field names
*	Ignoring tables or fields

Mapping files for supported Magento versions are located in subdirectories of `<your Magento 2 install dir>/vendor/magento/data-migration-tool>/etc`.

To use the mapping files:

1.	Rename or copy them to remove the `.dist` extension.
2.	Edit them using the schema located in `<your Magento 2 install dir>/vendor/magento/data-migration-tool>/etc`.

The `<your Magento 2 install dir>/vendor/magento/data-migration-tool>/<ce or ee version>/etc` directory contains the following configuration files:

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
	<td>class-map.xml.dist</td>
	<td>Dictionary of class mappings between Magento 1 and Magento 2</td>
</tr>
<tr>
	<td>config.xml.dist</td>
	<td>Main configuration file that specifies the Magento 1.x and Magento 2 database configurations, step configuration, and links to mapping files</td>
</tr>
<tr>
	<td><em>EE only</em>. customer-attr-document-groups.xml.dist</td>
	<td>List of tables used in the custom customer attributes step.</td>
</tr>
<tr>
	<td><em>EE only</em>. customer-attr-map.xml.dist</td>
	<td>Map file for the custom customer attributes step.</td>
</tr>
<tr>
	<td>deltalog.xml.dist</td>
	<td>Contains the list of tables required for database routines setup.</td>
</tr>
<tr>
	<td>eav-document-groups.xml.dist</td>
	<td>List of tables required to process the EAV step.</td>
</tr>
<tr>
	<td>log-document-groups.xml.dist</td>
	<td>List of tables required to process the log step.</td>
</tr>
<tr>
	<td>map-eav.xml.dist</td>
	<td>EAV mapping files.</td>
</tr>
<tr>
	<td>map-log.xml.dist</td>
	<td>Log mapping file.</td>
</tr>
<tr>
	<td><em>EE only</em>. map-sales.xml.dist</td>
	<td>Log mapping file.</td>
</tr>
<tr>
	<td>map.xml.dist</td>
	<td>Mapping file required for the map step.</td>
</tr>
<tr>
	<td>settings.xml.dist</td>
	<td>Setting migration configuration file that specifies rules required for migrating the <code>core_config_data</code> table.</td>
</tr>

</tbody>
</table>

<h2 id="migration-notes">General notes about using the migration tool</h2>
During the time you're migrating:

*	Do not make any changes in the Magento 1.x Admin Panel except for except for order management and shipping
*	Stop all Magento 1.x cron jobs
*	Do not alter any code
*	Do not delete any data
*	Do not make any changes in the Magento 2 Admin

After performing migration:

1.	In the Magento 2 Admin, flush all caches and reindex all indexes.
2.	Run your Magento 2 cron jobs.

<h2 id="migration-configure">Configuring the migration</h2>
Before you migrate any data, you must edit `<your Magento 2 install dir>/vendor/magento/data-migration-tool>/etc/<ce-or-ee-version>/<magento-version>/config.xml` to specify at minimum values for the following:

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
Run the migration tool from the `<your Magento 2 install dir>/vendor/magento/data-migration-tool>/bin` directory.

Command syntax:

	migrate <mode> --config=path/to/config.xml [options]

where `<mode>` can be:

*	`data` to migrate database data
*	`delta` to migrate data that is added to the database since your ran the tool with the `data` option
*	`settings` to migrate Magento Admin Panel settings

where `[options]` can be:

*	`--reset` to start the migration from the beginning
*	`--config <value>` path to `config.xml`
*	`--verbose <level>` DEBUG, INFO, NONE (default is INFO)
*	`--help` Help

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Logs are written to the <code>&lt;your Magento install dir>/vendor/magento/migration-tool/var</code> directory.</p></span>
</div>

See the following sections in the order shown:

1.	<a href="#migrate-command-settings">Migrating settings</a>
3.	<a href="#migrate-command-data">Migrating data</a>
4.	<a href="#migrate-command-delta">Incremental migration (delta mode)</a>

<h3 id="migrate-command-settings">Migrating settings</h3>
You should migrate settings first. This mode migrates stores; websites; and different system configuration like shipping, payment and some tax settings. 

To change how settings are migrated, either edit `etc/map/settings.xml` or create a new one).

Command usage:

	<your Magento 2 install dir>/vendor/magento/data-migration-tool>/bin/migrate settings --config=<path to config.xml>

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

	<your Magento 2 install dir>/vendor/magento/data-migration-tool>/bin/migrate data --config=<path to config.xml> [--reset]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The migration tool saves its current progress as it runs. If errors or user intervention stop it from running, the migration tool resumes progress at the last known good state.</p>
  <p>To force the migration tool to run from the beginning, use the <code>--reset</code>. In that case, we recommend you restore your Magento 2 database dump to prevent duplicatingfv previously migrated data.</p></span>
</div>

<h3 id="migrate-command-delta">Incremental migration (delta mode)</h3>
Incremental migration enables you to migrate only the changes since you migrated data. For example, you can migrate new customers, orders, and so on.

Command usage:

	<your Magento 2 install dir>/vendor/magento/data-migration-tool>/bin/migrate delta --config=<path to config.xml>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Incremental migration runs continuously until you stop it by pressing Control+C.</p></span>
</div>

<h2 id="migrate-command-media">Manual migration</h2>
You must manually migrate all of the following:

### Media
*	If media files are stored in the Magento 1 database, use the following steps:

	1.	Log in to the Magento 1 Admin Panel as an administrator.
	2.	Click **System** > **Configuration** > ADVANCED > **System**. 
	3.	In the right pane, scroll to **Storage Configuration for Media**.
	4.	From the **Select Media Database** list, click the name of your media storage database. 
	5.	Click **Synchronize**.

After that, use the following steps:

	1.	Log in to the Magento 2 Admin as an administrator.
	2.	Click **Stores** > **Configuration** > ADVANCED > **System**. 
	3.	In the right pane, scroll to **Storage Configuration for Media**.
	4.	From the **Select Media Database** list, click the name of your media storage database. 
	5.	Click **Synchronize**.

*	All media files (for example, images for products, categories, the WYSIWYG editor, and so on) should be copied manually from `<your Magento 1 install dir>/media` to `<your Magento 2 install dir>/pub/media`. 

	However, do *not* copy `.htaccess` files located in the Magento 1 `media` folder. Magento 2 has its own `.htaccess` that should be preserved. 

### Templates and layouts        
Templates and layouts (that is, CSS, JavaScript, and XML layout files) changed location and format between Magento 1 and Magento 2. 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Layout updates implemented in Magento 1 <em>cannot</em> be used in Magento 2 (namely, XML placed in the Magento Admin in CMS category pages and layout updates specified in widget instances).</p></span>
</div>

### ACLs
*	You must manually re-create all credentials for web services APIs (that is, SOAP, XML-RPC, and REST).
*	You must manually re-create all administrative users and associate them with access privileges.

<h2 id="migrate-command-after">Post-migration tasks</h2>
After you have completed your migration and thoroughly tested your new Magento 2 site, perform the following tasks:

*	Put Magento 1 in maintenance mode and permanently stop all Admin Panel activities
*	Start Magento 2 cron jobs
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean" target="_blank">Flush all Magento 2 cache types</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex" target="_blank">Reindex all Magento 2 indexers</a>
*	Change DNS, load balancers, and so on to point to Magento 2 production hardware
