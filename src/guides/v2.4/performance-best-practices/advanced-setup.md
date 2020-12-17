---
group: performance-best-practices
title: Advanced setup
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento 2 is a highly flexible and scalable product containing solutions for merchants of all sizes. This section covers best practices and recommendations on configuring Magento to work with large amounts of data, extreme load, and other enterprise cases.

## Calibrate index performance

When dealing with large amounts of data, re-indexing can become a concern. The Magento team selected the most loaded indexes and enabled batch indexing, which  allows you to set a portion of data to be processed on each iteration. This way, the user can tune batch sizes based on the type and size of data in the database.

To manage this setting, edit the `batchRowsCount` parameter in the `di.xml` file of the corresponding module. The following indexes support this feature:

*  Category Product Index (Catalog Module)
*  Price Index (Catalog Module)
*  EAV Index (Catalog Module)
*  Stock Index (CatalogInventory Module)

You can tune indexer performance by adjusting the index batching size variables. This controls how many entities are processed at a time by the indexer. In some situations, we have seen significant decreases in indexing time.

For example, if you are running a profile similar to B2B Medium, you can override the configuration value `batchRowsCount` in `app/code/Magento/catalog/etc/di.xml` and override the default value of `5000` to `1000`. This reduces the full indexing time from 4 hours down to 2 hours with a default MySQL configuration.

 {:.bs-callout-info}
We have not enabled batching for the catalog rules indexer. Merchants with a large number of catalog rules need to adjust their MySQL configuration to optimize indexing time. In this case, editing your MySQL configuration file and allocating more memory to the TMP_TABLE_SIZE and MAX_HEAP_TABLE_SIZE configuration values (the default is 16M for both) will improve performance for this indexer, but will result in MySQL consuming more RAM.

## Set up Redis

Sometimes one Redis instance is not enough to serve incoming requests. There are several solutions that we can recommend to address this situation.

First, Magento allows you to configure separate cache storage for each cache type. This allows you to install as many separate Redis instances as the number of types of cache that are registered in Magento. Realistically, you might want Redis instances for the most actively used caches, such as configuration, layout, and blocks.

Another solution can be to place the configuration cache on the file system and move the other caches to the Redis server. With this solution, you need a separate tool for centralized invalidation of configuration cache on all your web nodes.

You could also use a Redis cluster that performs parallel read/write operations with an automatically-increasing number of nodes. Magento does not provide configuration for this case, but it can be launched with minor customizations.

## Set up RabbitMQ

{{site.data.var.ce}} and {{site.data.var.ee}} support message queues implemented through RabbitMQ. Magento uses this service for executing numerous asynchronous operations, including B2B catalog operations and asynchronous stock updates. All interfaces for adding more jobs to the job server are distributed with the product and are available for custom asynchronous logic implementation in the scope of third-party extensions. As with any other integration, Magento provides a sample configuration file for RabbitMQ that contains all recommended settings and is fully ready for production usage.

## Split the database

{{site.data.var.ee}} allows you to configure scalable database storage to meet the needs of a growing business. You can set up three separate master databases that serve specific domains:

*  Main (Catalog) Database
*  Checkout Database
*  Order Management System (OMS) Database

To configure additional databases, you must create an empty database and run one of the following commands:

For Checkout Master DB

```bash
bin/magento setup:db-schema:split-quote
```

For OMS Master DB

```bash
bin/magento setup:db-schema:split-sales
```

These commands migrate specific domain tables from the main database to a domain database. They also change the Magento configuration to allow corresponding connectivity and constraints processing.

By having separate databases for checkout and Order Management, you can distribute the load between your database servers. You can serve more checkouts and process more orders per second without affecting the availability of your catalog and other operations. We recommend splitting databases for periods of flash or active sales, or using them permanently for naturally high-load projects. Migration of present data between databases should be executed under the supervision of your system administrator.  Do not split databases while in Production mode.

In addition to master databases, Magento allows you to configure a number of slave databases (one for each data resource declared in the system). A slave database serves as a full replica of your main database, or one of your domain master databases. It is issued for read operations on a specific resource.

You can add a slave database by running the following command:

```bash
bin/magento setup:db-schema:add-slave
```

This command performs configuration changes but does not configure replication itself. That should be done manually.

After splitting your master database and setting slave databases, Magento automatically regulates connections to a specific database, making decisions based on the type of request (POST, PUT, GET, etc) and data resource. If Magento or its extensions performs write operations on a GET request, the system automatically switches the connection from slave to master database. It works the same way with master databases: as soon as you work with a checkout-related table, the system redirects all the queries to a specific database. Meanwhile, all catalog-related queries will go to the main database.

For more details on the configuration and the benefits of multiple master/slave configuration, see
[Split database performance solution]({{page.baseurl}}/config-guide/multi-master/multi-master.html).

## Serve media content

Magento does not provide any specific integration to serve and deliver media content. All common approaches can be used together in Magento.

The easiest way of serving media content is delivering and caching it on a Varnish server. This approach assumes either a shared file system for storing media content or a dedicated server pointing to Varnish.

For medium- and high-load environments, we recommend using Content Delivery Network (CDN) services like Fastly, Akamai, and others. When working with these services, Magento uses the classic pull approach for content updates. You must configure Magento URLs to work with the corresponding CDN service. By moving media content to a CDN, you will significantly lessen the load on your instances.

## Configure log storage

The storage of logs and their influence on other disk operations affects the availability of your web nodes, especially in high-load situations. We recommend that you minimize logging if you don’t need it. You can also configure logging so that it writes on a separate storage system that has high-access speeds. Note that any bottleneck on accessing log storage can directly affect the processing of incoming requests that log write or read operations as part of their flow.
