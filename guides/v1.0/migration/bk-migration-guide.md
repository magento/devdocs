---
layout: default
group:  migration
subgroup: Migration
title: Migration guide
menu_title: Migration guide
menu_node: parent
menu_order: 1
github_link: migration/bk-migration-guide.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#migrate-overview">Overview</a>
*	<a href="#migrate-prereq">Prerequisites</a>
*	<a href="#migrate-install">Install the migration tool</a>
*	<a href="#migration-config">General notes about using the migration tool</a>
*	<a href="#migration-notes">Work with configuration and mapping files</a>
*	<a href="#migration-command">Migrating settings, data and changes</a>
*	<a href="#migrate-command-media">Manual migration</a>
*	<a href="#migrate-command-after">Post-migration tasks</a>

<div class="bs-callout bs-callout-info" id="info">
<span>This topic is in draft form. Information in this topic might be incorrect or incomplete. Use the <strong>Edit this page on GitHub</strong> link at the top of this topic to send us feedback and suggestions.</p></span>
</div>

<h2 id="migrate-overview">Overview</h2>
We’re pleased you’re considering moving from the world’s #1 eCommerce platform—Magento 1.x—to the eCommerce platform for the future, Magento 2. We’re also excited to share the details about this process, which we refer to as migration.

Magento 2 migration involves four components: data, extensions, themes, and customizations. 

*	Data: We’ve developed the Magento 2 Data Migration Tool to help you efficiently port all of your key product, customer, and order data, store configurations, promotions and more to Magento 2. This paper provides information on the tool and best practices for using it to migrate your data

*	Custom code: Code is not ported because it cannot be automated.

*	Themes and Customizations: Magento 2 uses several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences and scale to new levels. To take advantage of these advances, developers will need to make changes to their themes and customizations. Documentation is available online for creating Magento 2 themes, layouts, and customizations.

Just like an upgrade between 1.x versions (for example, from v1.12 to v1.14), the level of effort to migrate from Magento 1.x to Magento 2.0 depends upon how you have built your site and its level of customization.  Initial estimates indicate that an average Magento 2 migration is only about 20% larger than a Magento 1.x upgrade. Over the coming months, as we proceed with testing and the merchant beta program, we will be able to refine this number so you can plan your budgets and timelines. 
 
<h3 id="migrate-overview-versions">Supported versions</h3>
We support the following versions for migration:

*	Enterprise Edition (EE) version 1.9.1.0 
*	Community Edition (CE) version 1.14.1.0 

We also plan to support:

*  EE 1.11.x, EE 1.12.x, EE 1.13.x, and EE 1.14.x
*  CE 1.6.x, CE 1.7.x, CE 1.8.x, and CE 1.9.x

<h3 id="migrate-overview-not">What migration does not cover</h3>
Magento 2 uses new technologies. That allows merchants to create innovative shopping experiences and rapidly respond to changing market dynamics. These valuable changes mean that some custom code, extensions, and themes cannot be automatically migrated to the new platform. They might need to be adjusted or rebuilt to fit the enhanced Magento 2 architecture.

The migration tool does *not* automatically migrate the following.

#### Extensions and custom code
Design differences between Magento 1 and Magento 2 are so large that custom code and extensions must be manually ported to Magento 2. 

#### Media
Media assets include, for example, images for products, categories, WYSIWYG editor, and so on. Should be copied manually.

#### Storefront design

* Design in files (css, js, templates, XML layouts) changed its location and format. It can be developed and integrated after migration of settings
* Layout Updates stored in DB. Placed through Magento 1 Admin in CMS Pages, CMS Widgets, Category Pages and Product Pages. Should be migrated manually after migration of main data.

#### Web services credentials
You must manually create credentials for SOAP, XML-RPC and REST in Magento 2.

#### Admin users
Admin users and ACL rules for them. Should be covered manually.

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

*	After installation back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html" target="_blank">dump</a> your Magento 2 database as soon as possible.

*	Check that the data migration tool has a network connection the Magento 1.x and Magento 2 databases.

	Open ports in your firewall so the migration tool can communicate with the databases.

*	To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database.

*	Migrate Magento 1.x extension code to Magento 2.0.

	Reach out to your extension providers to see if they have been ported yet.

<h2 id="migrate-install">Install the migration tool</h2>
Installation is discussed in:

*	Magento Community Edition (CE): <a href="https://github.com/magento/data-migration-tool-ce/blob/master/README.md" target="_blank">README.md</a>
<!-- *	Magento Enterprise Edition (EE): <a href="https://github.com/magento/data-migration-tool-ee/README.md" target="_blank">README.md</a>
 -->

<h2 id="migration-notes">General notes about using the migration tool</h2>
During the time you're migrating:

*	Do not make any changes in the Magento 1.x Admin Panel except for order management (shipping, creating invoice, credit memos etc.)
*	Stop all Magento 1.x cron jobs
*	Do not alter any code
*	Do not make changes in the Magento 2 Admin and Storefront

All operations in Storefront are allowed at this time. 

<h2 id="migration-configure">Configuring the migration</h2>
Before you migrate any data, you must edit `<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/<ce or ee version>/config.xml` to specify at minimum values for the following:

{% highlight xml %}
	<source version="1.9.1">
        <database host="localhost" name="magento1" user="root"/>
    </source>
    <destination version="2.0.0.0">
        <database host="localhost" name="magento2" user="root"/>
    </destination>
{% endhighlight %}

Optional parameters:

*	Database user password: `password=<password>`
*	Table prefix: `<source_prefix>`, `<dest_prefix>`.

For example, if your database owner's user name is `root` with password `pass` and you use the prefix `magento1` in your Magento 1 database, use the following in `config.xml`:

{% highlight xml %}
    <source version="1.9.1">
        <database host="localhost" name="magento1" user="root" password="pass"/>  </source> <destination version="2.0.0.0">
        <database host="localhost" name="magento2" user="root"/> </destination> <options>
       <source_prefix>magento1</source_prefix>
    </options>

{% endhighlight %}

<h2 id="migration-config">Work with configuration and mapping files</h2>
The migration tool uses *mapping files* to enable you to perform custom database mapping between your Magento 1.x and Magento 2 databases, including:

*	Changing table names
*	Changing field names
*	Ignoring tables or fields
*	Adapt transferring data of a field to Magento 2 format

Mapping files for supported Magento versions are located in subdirectories of `<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc`

To use the mapping files:

1.	Rename or copy them to remove the `.dist` extension.
2.	Edit them using the schema located in `<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc`.
3.	Then change config.xml in `<options>` node with the new name of the file.

The `<your Magento 2 install dir>/vendor/magento/data-migration-tool/<ce or ee version>/etc` directory contains the following configuration files:

Even though you will be working with `map.xml.dist` file most of the time, the following table discusses each mapping and other files.

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
	<td>eav-attribute-groups.xml.dist</td>
	<td>List of attributes required to process the EAV step.</td>
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

You can refer to <a href="MigrationToolDeveloper'sGuide.pdf">Data Mapping Guide</a> for more details.

<h2 id="migration-command">Migrating settings, data and changes</h2>
Run the migration tool from the `<your Magento 2 install dir>/vendor/magento/data-migration-tool/bin` directory.

Command syntax:

	php migrate <mode> --config=path/to/config.xml [options]

where `<mode>` can be:

*	`data` to migrate database data
*	`delta` to migrate data that is added to the database since your ran the tool with the `data` option
*	`settings` to migrate Magento Admin Panel settings

where `[options]` can be:

*	`--reset` to start the migration from the beginning
*	`--config <value>` path to `config.xml`
*	`--verbose <level>` DEBUG, INFO, NONE (default is INFO)
*	`--help` Displays help for the command

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Logs are written to the <code>&lt;your Magento install dir>/vendor/magento/migration-tool/var</code> directory.</p></span>
</div>

The following sections should be performed in a specific order:

1.	<a href="#migrate-command-settings">Migrating settings</a>
3.	<a href="#migrate-command-data">Migrating data</a>
4.	<a href="#migrate-command-delta">Incremental migration (delta mode)</a>

<h3 id="migrate-command-settings">Migrating settings</h3>
You should migrate settings first. This mode migrates stores; websites; and different system configuration like shipping, payment and some tax settings. 

To change how settings are migrated:

1. Rename or copy `settings.xml.dist` in a folder `"etc/<ce or ee version>/"` to remove the .dist extension.
2. Make your changes in settings.xml file.
3. Make changes to config.xml `<settings_map_file>` tag so it would have a new file name of the settings file.

Command usage:

	cd <your Magento 2 install dir>/vendor/magento/data-migration-tool/bin
	php migrate settings --config=<path to config.xml>

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

	cd <your Magento 2 install dir>/vendor/magento/data-migration-tool/bin
	php migrate data --config=<path to config.xml> [--reset]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The migration tool saves its current progress as it runs. If errors or user intervention stop it from running, the migration tool resumes progress at the last known good state.</p>
  <p>To force the migration tool to run from the beginning, use the <code>--reset</code> argument. In that case, we recommend you restore your Magento 2 database dump to prevent duplicating previously migrated data.</p></span>
</div>

<h3 id="migrate-command-delta">Incremental migration (delta mode)</h3>
Incremental migration enables you to migrate only the changes since you migrated data. These are all data that was added on Storefront by customers (created orders, reviews, changes in customer profiles etc.) and all operations with orders in Admin Panel.

Command usage:

	cd <your Magento 2 install dir>/vendor/magento/data-migration-tool/bin
	php migrate delta --config=<path to config.xml>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Incremental migration runs continuously until you stop it by pressing Control+C.</p></span>
</div>

<h2 id="migrate-command-media">Manual migration</h2>
You must manually migrate all of the following:

### Media
This section discusses how to manually migrate media files.

#### Media files stored in the database
This section applies to you *only* if you store media files in the Magento database and should be performed before migration of data.

If media files are stored in the Magento 1 database, use the following steps:

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

#### Media files on the file system
All media files (for example, images for products, categories, the WYSIWYG editor, and so on) should be copied manually from `<your Magento 1 install dir>/media` to `<your Magento 2 install dir>/pub/media`. 

However, do *not* copy `.htaccess` files located in the Magento 1 `media` folder. Magento 2 has its own `.htaccess` that should be preserved. 

### Storefront design        
* Design in files (css, js, templates, XML layouts) changed its location and format. 
* Layout Updates stored in DB. Placed through Magento 1 Admin in CMS Pages, CMS Widgets, Category Pages and Product Pages. 

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
