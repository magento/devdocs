---
layout: default
group:  migration
subgroup: Data migration tool
title: Configure migration
menu_title: Configure migration
menu_node: 
menu_order: 3
github_link: migration/migration-tool-install.md
---

##General rules for successful migration

During the time you're migrating:

*	Do not make any changes in the Magento 1 Admin Panel except for order management (shipping, creating invoice, credit memos etc.)
*	Stop all Magento 1 cron jobs
*	Do not alter any code
*	Do not make changes in the Magento 2 Admin and Storefront

All operations in Magento 1 Storefront are allowed at this time. 

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
    <database host="localhost" name="magento1" user="root" password="pass"/>
</source>
<destination version="2.0.0.0">
    <database host="localhost" name="magento2" user="root"/>
</destination>
<options>
    <source_prefix>magento1</source_prefix>
</options>
{% endhighlight %}

<h2 id="migration-config">Work with configuration and mapping files</h2>
The Data Migration Tool uses *mapping files* to enable you to perform custom database mapping between your Magento 1 and Magento 2 databases, including:

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
	<td>Main configuration file that specifies the Magento 1 and Magento 2 database configurations, step configuration, and links to mapping files</td>
</tr>
<tr>
	<td><em>EE only</em>. customer-attr-document-groups.xml.dist</td>
	<td>List of tables used in the custom customer attributes step.</td>
</tr>
<tr>
	<td><em>EE only</em>. customer-attr-map.xml.dist</td>
	<td>Map file that is used in Custom Customer Attributes Step.</td>
</tr>
<tr>
	<td>deltalog.xml.dist</td>
	<td>Contains the list of tables required for database routines setup.</td>
</tr>
<tr>
	<td>eav-attribute-groups.xml.dist</td>
	<td>Contains list of attributes that are used in Eav Step.</td>
</tr>
<tr>
	<td>eav-document-groups.xml.dist</td>
	<td>Contains list of tables that are used in Eav Step.</td>
</tr>
<tr>
	<td>log-document-groups.xml.dist</td>
	<td>Contains list of tables that are used in Log Step.</td>
</tr>
<tr>
	<td>map-eav.xml.dist</td>
	<td>Map file that is used in EAV Step.</td>
</tr>
<tr>
	<td>map-log.xml.dist</td>
	<td>Log mapping file.</td>
</tr>
<tr>
	<td><em>EE only</em>. map-sales.xml.dist</td>
	<td>Map file that is used in SalesOrder step.</td>
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

You can refer to <a href="MigrationToolInternalSpecification.pdf">Migration Tool Internal Specification</a> for more details.