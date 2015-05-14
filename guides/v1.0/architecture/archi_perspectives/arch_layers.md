---
layout: default
group: arch-guide
subgroup: Architecture
title: Architecture layers
menu_title: Architecture layers
menu_order: 3
github_link: architecture/archi_perspectives/arch_layers.md
---

<h2 id="presentation">Presentation layer</h2>


<h2 id="service">Service layer</h2>


<h2 id="domain">Domain layer</h2>


<h2 id="persistence">Persistence layer</h2>

Magento uses an active record pattern strategy for persistence. In this system, the model object contains a *resource model* that maps an object to one or more database rows. A resource model is responsible for performing functions such as:

* Executing all CRUD (create, read, update, delete) requests. The resource model contains the SQL code for completing these requests.

* Performing additional business logic. For example, a resource model could perform data validation, start processes before or after data is saved, or perform other database operations.


If you expect to return multiple items from a database query, then you would implement a special type of resource model known as a *collection*. A collection is a class that loads multiple models into an array-like structure based on a set of rules. This is similar to a SQL `WHERE` clause.

A simple resource model defines and interacts with a single table. However, some objects have a vast number of attributes, or they could have a set related objects that have varying numbers of attributes. In these cases, the objects are constructed using Entity-Attribute-Value (EAV) models. As a result, any model that uses an EAV resource has its attributes spread out over a number of MySQL tables. The `Customer` and `Catalog` resource models use EAV attributes.  

<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>


 