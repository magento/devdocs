---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Magento Content Staging Basics
menu_title: Basics
version: 2.1
github_link: extension-dev-guide/staging/basics.md
---

MCS introduced a new functionality that enables you to manage system entities changes by schedule. For example, a product or a category may have several scheduled changes, those changes will be applied consequentially with the time.
As an additional valuable feature a merchant can preview previously scheduled data. A preview works instantly, a merchant can specify an arbitrary pointer (time) in future to build the preview.

## Schema Changes

To build such a complex but interesting solution we have had to make the following assumptions:

 - Entity can have several representations in the main table, each representation (table row) represents entity at the specific moment in time.
   - Entity should have two mandatory identifiers:
   - Entity identifier (`ENTITY_ID`) identifies entity in the system. Due to the fact that entity may have several versions, the main table is designed in the way to store multiple rows with the same entity identifier.
 - Row identifier (`ROW_ID`), each single row in the main table represents entity at the specific moment in time. Row identifier represents this state.
 - Each row in the main table should know about the time when this row becomes a valid representation of entity (`CREATED_IN`), and when this row becomes outdated (`UPDATED_IN`). Magento uses `UNIX_TIMESTAMP` as a source of version identifiers.

The mentioned  assumptions explain the changes that we have between CE and EE database schemas in 2.1 release.

Let’s review the changes that were introduced for Catalog module (product entity).

It is impossible to use the entity identifier field `ENTITY_ID` as a unique identifier for rows of the `'catalog_product_entity'` table, since a single product may have several scheduled versions with the same values of the entity identifier field. A combination of an entity identifier and time of a version creation describes uniqueness for the main  table rows. The combination has an equivalent in the table - primary key of the main table – `ROW_ID`.

`ROW_ID` is a shortcut for entity at the scheduled moment in time.

To guarantee uniqueness of entity identifier Magento has introduced a new additional sequence table. Using primary auto increment key of the sequence table, Magento generates values for entity identifier.

Moreover, a new sequence table plays additional role – managing foreign constraints between tables which depend on entity directly. Example: Wishlist item knows nothing about product versions and depends directly on product entity.

This is quite logical, because foreign key should base on unique key – sequence table is is the only table that has an unique index of object identifiers.

Each entity version contains a full list of existing attributes. Attributes can be represented as a field in the main table or as “one to many“ relation (linked tables), such as EAV tables, product options etc. As a result, the relation between attributes and the main table can be described using `row_id`.

For products we have the following list of attributes: EAV, Tier Prices, Options (Custom, Configurable, Bundle, etc). Any of them can be changed for a scheduled version.

Also there are relations: between products and categories, products and websites. We can not manage those relations for a scheduled version. (Basic reason for this is because each entity may have its own version and managing the mapping between versions may appear unpredictable). For this kind of relations we will use entity identifiers for both sides.

In case we need to manage the relation inside the attribute (example for Configurable product attribute can refer to a particular Simple product), the attribute depends on version `ROW_ID` but link will refer to a particular entity of Simple product. We can observe the same behavior for Bundle products.

## CRUD Operations

The schema changes encourage us to reconsider the operations that we have for an entity. Our new approach is built in accordance with MVCC. As a result, we can reuse the basics from it.

With the new entity creation MCS creates a new row in the main table. The sequence table provides an entity identifier for a new row. `ROW_ID` is served by auto increment primary key. A new row uses default values  for the creation and expiration time, 1 and maximal integer value. There are quite logical defaults due to the fact that we are using `UNIX_TIMESTAMP` for the version identifiers.

In case of update MCS creates an additional row instead of updating the exiting one. A new entry contains the information about the updated entity with the full set of attributes. As a result, the main table has two records instead of one. MCS knows about the exact version value for the update operation; this value is a representation of time when this change should be applied. Update operation expires a previous row, by writing the version identifier into its `UPDATED_IN` field. For a new row `CREATED_IN` field will be populated according to the scheduled time, `UPDATED_IN` field will be calculated as the next  one on a list of possible future versions. In case the next version (for the current one) does not exist, the default value (max integer) will be used.

For read operation we need to specify an exact version we want to receive. For production, the application stores the last applied version in a database and uses it automatically for an each query. For the preview, this version will specified in accordance with user selection.

To select actual values the application will use the following rule. Creation time of the selected data must be greater or equal to the requested version, and an expiration time must be strictly less than the requested version. It is easy to translate this rule into SQL WHERE condition:

{% highlight sql %}
SELECT * FROM catalog_product_entity WHERE creation_in <= requestedVersion AND updated_in > requestedVersion;
{% endhighlight %}

Since an entity may have attributes which are stored in other tables. These attributes refer to the main table by `ROW_ID` and only actual data will be selected for particular request.

This approach is quite flexible, it allows us to determine a version for the request and collect the data which correspond to it.

MCS has two options for deletion. In case a merchant wants to delete a particular version, the application deletes the entry with the corresponding data and updates the previous version with the information about a new “next” version in time. Merchant can delete an entity, in this case all entity versions will be deleted.

MCS automatically substitutes CRUD operations for the supported entities.

## Extensions Compatibility

By default, MCS supports Service Contracts and Collections. Extensions which use Service Contracts or Collections automatically work with MCS.  For each query that uses the main table the following condition will be applied (for created_in, updated_in) to select an actual version.

A developer can face schema incompatibility only in case their query uses attribute tables directly. By the way, writing the direct queries into the database is not a recommended way how to extend existing behavior. Magento provides a way how to build queries compatible for both versions CE and EE. Magento changes the schema in a predictable way. Each entity that has attributes stored in the outer table uses the primary key to link them with the main table. This rule works for all Magento versions, as a result it is always correct to use the primary key for JOINs between the main table and attribute tables.

To write a query compatible with any edition of Magento a developer should follow the next rules:

 - Use the main table in each query that selects attributes, only the main table has information about an entity identifier. Attributes table has knowledge only about the reference.
 - To build a direct query between the main table and an attribute table, use the primary key of the main table instead of entity identifier field.
 
Following those two simple rules, developer extension will be compatible with any of Magento editions, regardless of the fact if MCS was installed.

## Adding New Attribute Tables

Magento provides the way how to programmatically add an additional attribute table for the existing entity. For CE a developer can introduce an additional attribute table, this table refers to the main table by entity identifier. In order to rebuild this reference to link directly to the entity version instead of entity, a developer can use Basic Installer introduced with 2.1 release. This installer specifies migration between a regular schema and a schema that supports  multiple versions for an entity.

`\Magento\Staging\Setup\BasicSetup`

Also a developer needs to introduce a new module for schema migration. This module will have a strict dependency on the corresponding MCS module and will run upgrade only in case MCS module exists and is enabled.
A developer can use recurring upgrade to keep the reference between entities, when one of them has a multiple versions representation.

`\Magento\Framework\Setup\ExternalFKSetup`


<!-- ABBREVIATIONS -->

*[CE]: Community Edition
*[EE]: Enterprise Edition
*[MCS]: Magento Content Staging
*[MVCC]: Multiversion Concurrency Control