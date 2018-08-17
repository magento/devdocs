---
group: migration
subgroup: C_DMTool
title: Configure migration
menu_title: Configure migration
menu_node:
menu_order: 4
version: 2.0
redirect_from: /guides/v1.0/migration/migration-tool-configure.html
functional_areas:
  - Tools
---

## Overview of Data Migration Tool configuration {#migration-configure-over}

After you install the data migration tool, the following directory contains mapping and configuration files:

*	{{site.data.var.ce}}:

	*	`<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/ce-to-ce`: Configuration and scripts for migrating from {{site.data.var.ce}} 1 to {{site.data.var.ce}} 2

*	{{site.data.var.ee}}:

	*	`<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/ce-to-ee`: Configuration and scripts for migrating from {{site.data.var.ce}} 1 to {{site.data.var.ee}} 2
	*	`<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/ee-to-ee`: Configuration and scripts for migrating from {{site.data.var.ee}} 1 to {{site.data.var.ee}} 2

The preceding directories contain subdirectories for each supported version.

## Configuring the migration {#migration-configure}

Before you migrate any data, you must create a `config.xml` configuration file from the provided sample.

To create a configuration file:

1.	Log in to your Magento server as, or switch to, the <a href="{{ page.baseurl }}/install-gde/prereq/apache-user.html">Magento file system owner</a>.

2.	Change to the following directory:

		<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/<migration edition>/<ce or version>

3.	Enter the following command to create a `config.xml` from the provided sample:

		cp config.xml.dist config.xml

4.	Open `config.xml` in a text editor.

5.	Specify the following at minimum:

{% highlight xml %}
<source>
    <database host="127.0.0.1" name="magento1" user="root"/>
</source>
<destination>
    <database host="127.0.0.1" name="magento2" user="root"/>
</destination>
<options>
    <crypt_key />
</options>
{% endhighlight %}

The `<crypt_key>` tag is mandatory to fill. It can be found in `local.xml` file which is located in the directory of Magento 1 instance at `app/etc/local.xml` in `<key>` tag

Optional parameters:

* Database user password: `password=<password>`
* Database custom port: `port=<port>`
* Table prefix: `<source_prefix>`, `<dest_prefix>`

For example, if your database owner's username is `root` with password `pass` and you use the prefix `magento1` in your Magento 1 database, use the following in `config.xml`:

{% highlight xml %}
<source>
    <database host="127.0.0.1" name="magento1" user="root" password="pass"/>
</source>
<destination>
    <database host="127.0.0.1" name="magento2" user="root" password="pass"/>
</destination>
<options>
    <source_prefix>magento1</source_prefix>
    <crypt_key>f3e25abe619dae2387df9fs594f01985</crypt_key>
</options>
{% endhighlight %}

When finished, save your changes to `config.xml` and exit the text editor.

## Work with configuration and mapping files {#migration-config}

The Data Migration Tool uses *mapping files* to enable you to perform custom database mapping between your Magento 1 and Magento 2 databases, including:

*	Changing table names

*	Changing field names

*	Ignoring tables or fields

*	Adapt transferring data of a field to Magento 2 format

Mapping files for supported Magento versions are located in subdirectories of `<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc`

To use the mapping files:

1.	Rename or copy them to remove the `.dist` {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %}.

2.	Edit them using the schema located in

    `<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc`.

3.	Then change config.xml in `<options>` node with the new name of the file.

The `<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc` and `<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/<ce version>` directories contain the following configuration files:

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
	<td><em>{{site.data.var.ee}} only</em>. customer-attr-document-groups.xml.dist</td>
	<td>List of tables used in the custom customer attributes step.</td>
</tr>
<tr>
	<td><em>{{site.data.var.ee}} only</em>. customer-attr-map.xml.dist</td>
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
	<td><em>{{site.data.var.ee}} only</em>. map-sales.xml.dist</td>
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

<tr>
	<td>customer-attribute-groups.xml</td>
	<td>Contains list of attributes that are used in Customer Attributes Step.</td>
</tr>

<tr>
	<td>customer-document-groups.xml</td>
	<td>Contains list of tables that are used in Customer Attributes Step.</td>
</tr>

<tr>
	<td>map-customer.xml</td>
	<td>Map file that is used in Customer Attributes Step.</td>
</tr>

<tr>
	<td>order-grids-document-groups.xml</td>
	<td>Contains list of tables that are used in OrderGrids Step.</td>
</tr>

</tbody>
</table>

You can refer to <a href="{{ page.baseurl }}/migration/migration-tool-internal-spec.html"> Data Migration Tool Technical Specification</a> for more details.

## Next step

<a href="{{ page.baseurl }}/migration/migration-migrate-settings.html">Migrate using data migration tool</a>
