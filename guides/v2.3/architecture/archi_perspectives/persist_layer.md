---
group: architecture-guide
title: Persistence layer
---

Magento uses an active record pattern strategy for persistence. In this system, the model object contains a *resource model* that maps an object to one or more database rows. A resource model is responsible for performing functions such as:

*  Executing all CRUD (create, read, update, delete) requests. The resource model contains the SQL code for completing these requests.

*  Performing additional business logic. For example, a resource model could perform data validation, start processes before or after data is saved, or perform other database operations.

If you expect to return multiple items from a database query, then you would implement a special type of resource model known as a *collection*. A collection is a class that loads multiple models into an array-like structure based on a set of rules. This is similar to a SQL `WHERE` clause.

A simple resource model defines and interacts with a single table.

However, some objects have a vast number of attributes, or they could have a set related objects that have varying numbers of attributes. In these cases, the objects are constructed using **Entity-Attribute-Value (EAV)** models.

Any model that uses an EAV resource has its attributes spread out over a number of MySQL tables.

The `Customer`, `Catalog` and `Order` resource models use EAV attributes.

## XML Declarative schema

With Magento 2.3, we introduced Declarative XML Schemas.
These are XML files that are used to specify the final state of the database.
These files replace PHP update scripts that were required when upgrading a module.
These files allow you to skip the progressive upgrade scripts and jump right to the final state of the database.

Read more about writing [declarative XML schemas][].

{:.ref-header}
Related topics

[Architectural diagrams]({{page.baseurl}}/architecture/archi_perspectives/arch_diagrams.html)
[Architectural layers overview]({{page.baseurl}}/architecture/archi_perspectives/ALayers_intro.html)

<!-- Link Definitions -->
[declarative XML schemas]: {{ page.baseurl }}/extension-dev-guide/declarative-schema/db-schema.html
