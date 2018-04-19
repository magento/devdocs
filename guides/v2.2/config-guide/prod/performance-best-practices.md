---
layout: default
group: config-guide
title: Performance Configuration Best Practices
version: 2.2
github_link: config-guide/prod/perfance-best-practices.md
functional_areas:
  - Configuration
  - System
  - Setup
---

## Hardware

### CPU

Magento web nodes serve all requests that were not cached or can’t be cached through the complete launch of the application. One CPU core can serve around 2 (sometimes up to 4) Magento requests effectively. This leads us to necessity of putting sufficient number of web nodes/cores for processing all incoming requests without putting them into queue:

**Questions to reviewer:**

1. I don't understand the "N"s in the following equation. Can they deleted? If no, please provide more information about what they represent.

  `N(Cores) = N(Expected Requests) / 2 + N (Expected Cron Processes)`

2. Is right side of the equation

```
Expected requests
________________
2 + Expected Cron Processes
```

or

```
Expected requests
________________  +  Expected Cron Processes
      2
```

If a store expects changing load, the number of web nodes/cores can be increased manually for an active sales period. Alternatively, an auto-scaling model can be used for automatically extending web tiers.

### Memory

The Magento 2 database (as well as any other database) is sensitive to amount of the memory available for storing data and indexes. To allow effective leveraging of MySQL data indexation, the amount of memory should be at least close to half size of data stored in the database.

### Network bandwith

Sufficient network bandwith is one of the key requirements for data exchange between web nodes, database(s), caching/session servers, and other services. Because Magento 2 effectively leverages caching for high performance, your system can actively exchange data with caching servers like Redis. If Redis is located on a remote server, it is necessary to provide a sufficient network channel between web nodes and the caching server so that there is no bottleneck on read/write operations.

## Software

### Operating system

Configurations and optimizations at the operating system level for Magento 2 is much the same as any web application that can be under high load. As the number of concurrent connections handled by the server increases, the number of available sockets can become fully allocated. The Linux kernel supports a mechanism to "reuse" and "recycle" TCP connections. Be aware that more aggressive recycling than re-use may cause issues on the load balancers. To enable these kernel settings, set the following values should in `/etc/sysctl.conf`: 

```
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
```

The kernel parameter `net.core.somaxconn` controls the maximum number of open sockets waiting for connections. This value can be safely increased to 1024, but it should be correlated with ability of server to handle this amount. To enable this kernel parameter, set the following value in `/etc/sysctl.conf`: 

```
net.core.somaxconn = 1024
```

### Web server

Magento 2 fully supports the Nginx and Apache web servers. Sample recommended configuration files for Nginx (`nginx.conf.sample`) and Apache (`.htaccess.sample`) can be found in root directory of the project. The Nginx sample contains settings for better performance and is more ready for production usage. Some of the main configuration best practices defined in the sample file include:

*	Settings for caching static content in a browser
*	Memory and execution time settings for PHP
*	Content compression settings

**Question to reviewer:** We need more information here. I googled `max_children_count` and `nginx`, and the only hit I got was Oleh's slide deck that mentioned the attribute, but gave no details. I found a few results searching on `MaxClients` and `Magento`, but most of the hits appear to be from M1.  These settings not present in the sample config files, so I don't know where these attributes should be set.

> __Note__: The `MaxClients` (Apache) / `max_children_count` (Nginx) attribute defines the number of threads for input requests processing. It should be configured separately from the sample Configuration files. The value should be calculated based on expected load per web-node and set to web server configuration file.

### PHP

Magento 2 fully supports and engages everyone to use latest version of PHP, which is now PHP 7.1. There are several factors to account for when configuring PHP to get maximum speed and efficiency on requests processing.

#### PHP extensions

We recommend limiting the list of active extensions to those that are required for Magento functionality:

* `php-bcmath`
* `php-cli`
* `php-common`
* `php-gd`
* `php-intl`
* `php-mbstring`
* `php-mcrypt`
* `php-opcache`
* `php-pdo`
* `php-soap`
* `php-xml`

Adding more extensions will lead to additional load times for their libraries.

> __Note__: Please pay attention that presence of any profiling and debugging extensions can negatively impact the response time of your pages. As an example, an active xDebug module without any debug session can increase the page response time by up to 30%.

#### PHP Settings

To guarantee successful execution of all Magento scenarios without dumping data or code to disk, it is recommended to set next memory limit:

`memory_limit=768MB`

##### ByteCode

To get maximum speed out of Magento 2 on PHP7, you must activate the OpCache module and properly configure it. These settings are recommended for the module:

```
  opcache.memory_consumption=512MB
  opcache.max_accelerated_files=60000
  opcache.consistency_checks=0
  opcache.validate_timestamps=0
```

### MySQL database

This document does not attempt to provide in-depth MySQL tuning, as it highly depends on the store context and its specificity. We can make some general recommendations that can be applied.

#### MySQL server configuration

There have been many improvements to MySQL as a product with the 5.6 and 5.7 releases. Those achievements allow us to say that MySQL is distributed with good default settings. The most critical settings are:
* `innodb_buffer_pool_instances`: default value is set to 8 to avoid issues with multiple threads attempting to access the same instance.
* `innodb_buffer_pool_size`: defaults to 128MB. Combined with the multiple pool instances described above, this means a default memory allocation of 1024MB. The total size is divided among all the buffer pools. For best efficiency, specify a combination of `innodb_buffer_pool_instances` and `innodb_buffer_pool_size` so that each buffer pool instance is at least 1 gigabyte.
* `max_connections`: default value is 150. The value of the `max_connections` parameter should correlate with the total number of PHP threads configured in the application server. A general recommendation would be 300 for a small and 1,000 for a medium environment.
* `innodb-thread-concurrency`: default value is 0. The correct value for this configuration should be calculated by the formula: `innodb-thread-concurrency = 2 * (NumCPUs + NumDisks)`

### Varnish as recommended Page Cache solution

**Question to reviewer:** Does FPC module mean PageCache module?

The Magento 2 team highly recommends using Varnish as the full page cache server for your store. Now it is fully available in all versions of Magento. The FPC module is still present in Magento 2, but it should be used for development purposes only. It should not be used together with or instead of Varnish.

Varnish should be installed as a separate server in front of the web tier. It should accept all incoming requests and provide cached page copies. To allow Varnish to work effectively with secured pages, an SSL termination proxy can be placed in front of Varnish. Nginx can be used for this purpose.

Magento distributes a sample configuration file for Varnish (versions 4 and 5) that contains all recommended settings for performance. Among them the most critical in terms of performance are:

grace_mode: allows you to instruct Varnish to keep an object in cache beyond its TTL and serve this stale content if your backend is not healthy or if fresh content hasn’t been fetched yet.

backend health check validation: configuration of regular Varnish backend checks for maintaining list of valid and working nodes

> __Note__: Another setting that is not covered in default distributed configuration, but deserves your attention it saintmode (please check official Varnish documentation for more details).

**Question to reviewer** This article discusses installing and configuring saint mode. Does something need to be added for performance best practices?  http://devdocs.magento.com/guides/v2.2/config-guide/varnish/config-varnish-advanced.html

### Caching and Session Server

Magento provides number of options to store your cache and session data, including Redis, Memcache, filesystem and database. Let’s consider what is the best selection for each specific case.

#### Single web node setup

If you plan to serve all your traffic with just one web node, it does not make sense to put your cache on a remote Redis server. Instead, either use the filesystem or on a local Redis server. If you want to use the filesystem, put your cache folders on a volume mounted on a RAM filesystem. If you want to use a local Redis server, we highly recommend configuring Redis so it uses sockets for direct connections, rather than exchange data through HTTP.

#### Multiple web nodes setup

For a multiple web nodes setup, Redis is the best option. Because Magento actively caches lots of data for better performance, pay attention to your network channel between the web nodes and the Redis server. You don't want the channel to become a bottleneck for requests processing.

> __Note__: If you need to serve hundreds and thousands of simultaneous requests, you may need a channel of up to 1GBit (or even wider)  to your Redis server.

## Magento Configuration

Magento 2 provides many settings and tools that can be used and activated that improve response time on the pages as well as provide higher throughput.

### Cron Jobs

All asynchronous operations in Magento 2 Open Source are performed using of Linux cron. See [Configure and run cron]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-cron.html) to configure it correctly.

### Indexers

An indexer can run in either **Update on Save** or **Update on Schedule** mode. Save mode immediately indexes whenever your catalog or other data changes. This mode assumes a low intensity of update and browsing operations in your store, and it can lead to significant delays and data unavailability during high loads. Schedule mode is recommended mode for production usage, because it stores info about data updates and performs indexation by portions in background through specific cron job. You can change the mode of each Magento indexer separately on configuration page: **System >Index Management**

### Caches

When your store is launched in production, all the caches should be activated. This can be easily done by turning them on **System > Cache Managemen**t page. We highly recommend  using Varnish, as it is the most efficient production page cache solution.

### Asynchronous email notifications

The “Asynchronous email notifications” setting causes Magento to move processes that handle  email notifications related to the checkout process and order processing to the background. To enable this feature, go to **Stores > Configuration > Sales > Sales Emails > General Settings > Asynchronous Sending**.

### Asynchronous order data processing

There is a frequent case when intensive sales on a storefront are combined with intensive order processing in the backend office. Magento can be configured to distinguish these two traffic patterns on the database level to avoid conflicts between read and write operations in corresponding tables. With this goal, we provide an option to store and index orders data asynchronously of their placement on frontend. Thus orders will be noted in temporary storage and moved in bulk to the Order Management grid without any collisions. This option can be activated from **Stores > Configuration > Advanced > Developer > Grid Settings > Asynchronous indexing**.

### Deferred stock update

In times of intensive sales, to minimize the number of operations and speed up the order placement process, Magento 2 can defer stock updates related to orders. This option is risky and can only be used together when Backorders are activated in the store, because it  can lead to negative stock quantities. However, this option can bring significant performance improvement on Checkout flows for those stores who can easily re-fill their stock on demand. To activate deferred stock updates, go to **Stores > Configuration > Catalog > Inventory > Product Stock Options > Use Deferred Stock Update**.

> __Note__: This options will be available only after Backorder with any mode is activated.

### Client side optimization settings

Magento 2 provides a variety of configurations for client side optimization, including:

* _Minification of all resources_
  * _JS minification_: `Stores > Configuration > Advanced > Developer > JS Settings > Minify JS Files`
	* _CSS minification_: `Stores > Configuration > Advanced > Developer > CSS Settings > Minify CSS Files`
	* _HTML minification_: `Stores > Configuration > Advanced > Developer > Template Settings > Minify HTML

* _JS resources bundling_: `Stores > Configuration > Advanced > Developer > JS Settings > Enable Javascript Bundling`
  By activating this option, you allow Magento to merge all JS resources into one or a set of bunches that will be loaded to storefront pages. This way you get all JS content to your storefront with few requests to the server. It also helps the browser cache JS resources on the first call and re-use it for all further browsing. This option also brings lazy evaluation, as all JS is loaded as text. It initiates analysis and evaluation of code only after specific actions are triggered on the page. However, this setting is not recommended for that stores where the first page load time is extremely critical, because all loading of JS content will happen exactly on first call.

> __Note__: It is recommended to use third-party tools for minification and bundling (like r.js). Magento built-in mechanisms are not optimal and are shipped as fallback alternative.

> __Note__: Activating the HTTP2 protocol can be a good alternative to using JS bundling. The protocol provides pretty much the same benefits.

> __Note__: Magento does not recommend using deprecated settings like merging JS and CSS files, as they were designed only for synchronously-loaded JS in the HEAD section of the page. Using this technique and can cause bundling and requireJS logic to work incorrectly.

## Magento Production Deployment Flow

Magento Production Deployment Flow is focused on getting a store to reach maximum performance. It requires 3 mandatory steps:

### Deploying static content

Run the following command:

`bin/magento setup:static-content:deploy`

The command causes Magento 2 to

* Analyze all static resources
* Perform merge, minimization and bundling of content
* Read and process themes data
* Analyze themes fallback
* Store all processed and materialized content to specific folder for further usage.

If your static content is not deployed, Magento performs all listed operation on the fly, leading to a significant increase in response time.

Deployment operations are provided with a variety of options for different stores size and fulfillment. The most common is the compact deploy strategy. Please read official documentation for getting more info on all the strategies and options available for your store.

### DI instructions preprocessing / Composer autoload configuration

Run the following command:

`bin/magento setup:di:compile`

Through preprocessing/compilation of DI instructions, Magento

* Reads and process all present configuration
* Analyzes dependencies between classes
* Creates autogenerated files (including proxies, factories, etc.)
* Stores compiled data and configuration in a cache that allows to save up to 25% of time on requests processing.

After compilation completes, we recommend running the following command:

`composer dump-autoload -o`

This command allows composer to rebuild the mapping to project files so that they load faster.

### Setting Production mode

Finally, you need to place your store in Production mode. Production mode is specifically optimized for maximum performance of your store. It also de-activates all developer-specific features. This can be done in your `.htaccess` or `nginx.conf` file:

`SetEnv MAGE_MODE production`

Same setting can be done through corresponding CLI command.

**Question to reviewer:** Should `magento deploy:mode:set production` be mentioned here?

> __Note__: Static content deploy, compilation and mode selection can be also performed together in one CLI command (`bin/magento set:mode production`). The command runs in the background and does not allow you to set additional options on each specific step.

## Pre-launch actions

There are also some recommended but not mandatory steps that can be performed directly before launching your store your store in production mode. The list includes:

* Re-indexing data: to avoid the presence of any inconsistent data in your indexes
* Flushing the cache: to be sure no old or incorrect data are left in cache
* Warm up the cache: calling out most popular or critical store pages in advance, so the cache for them is generated and stored. This operation can be performed with any intellectual crawler or manually (in case of small stores).

## Advanced Setup

Magento 2 is a highly flexible and scalable product containing solutions for merchants of all sizes. This section covers best practices and recommendations on configuring Magento to work with big amounts of data, extreme load, and other enterprise cases.

### Search

By default, Magento uses MySQL for all search operations. Magento Commerce version fully supports and provides you an alternative search engine, ElasticSearch, as a more optimized search solution. With ElasticSearch, the time on query processing will not change with the growth of search results (the way it does with MySQL). ElasticSearch can provide scaling opportunities when you experience increased loads on your store.

To run Magento with ElasticSearch, you don’t need any specific configuration--just install the server and select the ElasticSearch search engine option in Magento admin.

### Indexers fine tuning

When dealing with large amounts of data in your store, how all this information will be re-indexed becomes a concern. The Magento team selected the most loaded indexes and enabled batch indexing that allows you to set a portion of data to be processed on each iteration. This way, the user can tune batch size based on the type and size of data in database.

To manage this setting, you need to edit `batchRowsCount` parameter in the `di.xml` file of the corresponding module. These indexes support this feature:

* Category Product Index (Catalog Module)
* Price Index (Catalog Module)
* EAV Index (Catalog Module)
* Stock Index (CatalogInventory Module)

### Redis

Sometimes one Redis instance is not enough to serve incoming requests. There are many solutions that we can recommend to address this situation.

First, Magento 2 allows you to configure separate cache storage for each cache type. This allows you to install as many separate Redis instances as the number of types of cache that are registered in Magento. Realistically, you might want Redis instances for the most actively used caches, such those as configuration, layout, and blocks.

Another solution can be to place the configuration cache on the filesystem and moving the other caches to the Redis server. With this solution, you will need a separate tool for centralized invalidation of configuration cache on all your web nodes.

You could also use a Redis cluster that allows to perform parallel read/write operations with an automatically-increasing number of nodes. Magento does not provide configuration for this case, but it can be launched with minor customizations.

### Job Server (RabbitMQ)

Magento Commerce supports message queue implemented through RabbitMQ. Magento uses this service for executing numerous asynchronous operations, including B2B catalog operations and asynchronous stock updates. All interfaces for adding more jobs to the job server are distributed with the product and available for custom asynchronous logic implementation in scope of 3rd party extensions. As with any other integration, Magento 2 provides a sample configuration file for RabbitMQ that contains all recommended settings and is fully ready for production usage.

### Database split

Magento Commerce 2 also allows you to scale in terms of your database storage to let you easily serve the growing needs of your business. With this purpose, Magento provides the opportunity to setup up to 3 separate Master databases that serve specific domain areas:

* Main (Catalog) Database
* Checkout Database
* Order Management System (OMS) Database

To configure additional databases, you must

* Create an empty database
* Run one of the following commands:

`bin/magento setup:db-schema:split-quote` (for Checkout Master DB)
`bin/magento setup:db-schema:split-sales` (for OMS Master DB)

These commands migratte specific domain tables from the main database to domain database and change the Magento configuration to allow corresponding connectivity and constraints processing.

By having separate databases for checkout and Order Management, you can distribute the load between your database servers. You can serve more checkouts and process more orders per second without affecting the availability of your сatalog and other operations. We recommend splitting databases for periods of flash or active sales, or using them permanently for naturally high load projects. Migration of present data between databases should be executed under control of your system administrator.  Do not split databases while in production mode.

In addition to master databases, Magento 2 allows you to configure a number of slave databases (1 for each data resource declared in the system). You can add slave database by running the following command:

`bin/magento setup:db-schema:add-slave`

A slave database serves as a full replica of your main database, or one of your domain master databases. It isused for read operations on a specific resource.  Note that this command performs configuration changes but does not configure replication itself. That should be done manually.

After splitting your master database and setting slave databases, Magento automatically regulates connections to a specific DB, making decisions based on the type of request (POST, PUT, GET, etc) and data resource. If Magento or its extensions performs write operations on a GET request, the system automatically switches the connection from slave to master database. It works the same way with master databases: as soon as you work with a checkout-related table, the system redirects all the queries to a specific DB. Meanwhile, all catalog-related queries will go to main database.

For more details on configuration and benefits of multi master/slave configuration, see
[Split database performance solution]({{page.baseurl}}/config-guide/multi-master/multi-master.html).

### Serving media content

Magento does not provide any specific integration to serve and deliver media content. All common approaches can be used together in Magento.

The easiest way of serving media content is delivering and caching it on a Varnish server. This approach assumes either a shared file system for storing media content or a dedicated server pointing to Varnish.

For medium and high load environments, we recommend to use Content Delivery Network (CDN) services like Fastly, Akamai, and others. When working with these services, Magento uses the classic pull approach for content updates. You must configure Magento URLs to work with the corresponding CDN service. By moving media content to a CDN, you will significantly lessen the load on your instances.

### Log storage

The storage of logs and their influence on other disk operations affects the availability of your web nodes, especially in high load situations. We recommend that you minimize logging if you don’t need it. You can also configure logging write logs go on separate storage with high access speed. Note that any bottleneck on accessing logs storage can directly affect processing incoming requests that have logs write or read operations in their flow.
