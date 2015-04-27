---
layout: default
group:  
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
*	<a href="#migration-config">Working with configuration and mapping files</a>
*	<a href="#migration-notes">General notes about using the migration tool</a>
*	<a href="#migration-command">Migrating data, settings, and changes</a>

<div class="bs-callout bs-callout-info" id="info">
<span>This topic is in draft form. Information in this topic might be incorrect or incomplete. Use the <strong>Edit this page on GitHub</strong> link at the top of this topic to send us feedback and suggestions.</p></span>
</div>

<h2 id="migrate-overview">Overview</h2>
We’re pleased you’re considering moving from the world’s #1 eCommerce platform—Magento 1.x—to the eCommerce platform of the future, Magento 2. We’re excited to tell you about this process, which we refer to as migration.

Why a migration rather than an upgrade? Because it’s not automated; you’ll set up a parallel Magento 2 system and migrate data, media files, configuration, themes, code, and so on to it. 

<h3 id="migrate-overview-versions">Supported versions</h3>
We support the following versions for migration:

*	Community Edition (CE) versions 1.6, 1.7, 1.8, and 1.9
*	Enterprise Edition (EE) versions 1.11, 1.12, 1.13, and 1.14

<h3 id="migrate-overview-not">What migration does not cover</h3>
Magento 2 takes advantage of several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences, rapidly respond to changing market dynamics, and scale to new levels. But, these valuable changes mean that some custom code, extensions, and themes cannot be automatically migrated to the new platform. They might need to be adjusted or rebuilt to fit the enhanced Magento 2 architecture.

The migration tool does *not* automatically migrate the following.

#### Extensions and custom code
Design differences between Magento 1 and Magento 2 are so large that custom code and extensions must be manually ported to Magento 2. 

####Media
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
You should perform a full reindex before you enable your Magento 2 on the production sever.

#### Google Shopping
Google Shopping shipped in some older Magento 1 versions but has since been removed.

#### Data that is not supported in Magento 2
Poll, tag, staging modules, and recurring profiles are not currently supported in Magento 2.


<h2 id="migrate-prereq">Prerequisites</h2>
Before you start your migration, you must do all of the following:

*	Set up a Magento 2 system that meets our <a href="{{ site.gdeurl }}/install-gde/system-requirements.html">system requirements</a>.

	Do not start Magento 2 cron jobs.

*	Back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html" target="_blank">dump</a> your Magento 2 database as soon after installation as possible.

*	The Magento 1.x and Magento 2 systems must be reachable on the internet.

	We recommend installing Magento 2 on the same host as Magento 1.x if possible or at least on the same network segment. This helps migration performance.

*	Replicate your Magento 1.x database and perform all migration tasks on this replicated database.

<h2 id="migrate-install">Install the migration tool</h2>
This section discusses how to install the Magento migration tool. To install the migration tool, you must update `composer.json` in the Magento root installation directory to provide the location of the migration tool package. 

Sample data is versioned like Magento code. Before you begin, you can either either:

*	Find the exact version you want at <a href="http://packages.magento.com/#magento/migration-tool" target="_blank">packages.magento.com</a>.
*	Install the latest version using Composer <a href="https://getcomposer.org/doc/01-basic-usage.md#next-significant-release-tilde-and-caret-operators-" target="_blank">next significant release syntax</a>.

To install the migration tool, you must:

1.	Decide the version of `magento/migration-tool` you want as discussed in the preceding section.

2.	Add `"minimum-stability": "beta",` to `composer.json`.

2.	Run the `composer package` and `composer require` commands to update `composer.json`.

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

8.	Enter the following command to require the current version of the sample data package:

		composer require magento/migration-tool:<version>

	where `<version>` is either an exact version or next significant release syntax.

	Exact version example:

		composer require magento/migration-tool:0.74.0-beta4

	Next significant release example:

		composer require magento/migration-tool:~0.74.0-beta4

9.	Wait while dependencies are installed.

<h2 id="migration-config">Working with configuration and mapping files</h2>
The migration tool uses *mapping files* to enable you to perform custom database mapping between your Magento 1.x and Magento 2 databases, including:

*	Changing table names
*	Changing column names
*	Changing field names
*	Ignoring tables or fields

Mapping files for supported Magento versions are located in subdirectories of `<your Magento install dir>/vendor/magento/migration-tool/etc`.

To use the mapping files:

1.	Rename or copy them to remove the `.dist` extension.
2.	Edit them using the schema located in `<your Magento install dir>vendor/magento/migration-tool/etc`.

The `<your Magento install dir>/vendor/magento/migration-tool/etc` directory contains the following configuration files:

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
  <p>Incrememtal migration runs continuously until you stop it by pressing Control+C.</p></span>

