---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Persistence layer
menu_title: Persistence layer
menu_order: 4
version: 2.0
github_link: architecture/archi_perspectives/persist_layer.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/persist_layer.html
---

Magento uses an active record pattern strategy for persistence. In this system, the model object contains a *resource model* that maps an object to one or more database rows. A resource model is responsible for performing functions such as:

* Executing all CRUD (create, read, update, delete) requests. The resource model contains the SQL code for completing these requests.

* Performing additional business logic. For example, a resource model could perform data validation, start processes before or after data is saved, or perform other database operations.

If you expect to return multiple items from a database query, then you would implement a special type of resource model known as a *collection*. A collection is a class that loads multiple models into an array-like structure based on a set of rules. This is similar to a SQL `WHERE` clause.

A simple resource model defines and interacts with a single table. However, some objects have a vast number of attributes, or they could have a set related objects that have varying numbers of attributes. In these cases, the objects are constructed using Entity-Attribute-Value (EAV) models. As a result, any model that uses an EAV resource has its attributes spread out over a number of MySQL tables. The `Customer` and `Catalog` resource models use EAV attributes.

## Related topics {#related}

<a href="{{page.baseurl}}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/ALayers_intro.html">Architectural layers overview</a>
