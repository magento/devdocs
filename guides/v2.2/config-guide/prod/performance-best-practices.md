# Performance Configuration Best Practices

## Hardware

### CPU

Magento web-nodes will serve all the requests that were not cached or can’t be cached through complete launch of application. One CPU core can serve around 2 (sometimes up to 4) Magento requests effectively. This leads us to necessity of putting sufficient number of web-nodes/cores for processing all incoming requests without putting them into queue:

`N(Cores) = N(Expected Requests) / 2 + N (Expected Cron Processes)`

In case store expects changing load number of web-nodes/cores can be either increased manually specifically for active sales period or auto-scaling model can be used for automatic extension of web tier.

### Memory

Magento 2 database as well as any other database is sensitive to amount of memory available for storing data and indexes. To allow effective leveraging of MySQL data indexation amount of memory should be at least close to half size of data stored in database. 

### Network bandwith 

Sufficient network bandwith is one of the key requirements for data exchange between webnodes, database(s), caching/session servers and other services.
As Magento 2 effectively leverage caching for provision of high performance your system can actively exchange data with caching servers like Redis. In case Redis is located on remote server it is necessary to provide sufficient network channel between web-nodes and caching server so it does not become a bottleneck on read/write operations.

## Software

### Operating system

Configurations and optimizations at the operating system level for Magento 2 is much the same as any web application which can be under high load.
As the number of concurrent connections handled by the server increases the number of available sockets can become fully allocated. The Linux kernel supports a mechanism to "reuse" and "recycle" TCP connections. Be aware that more aggressive recycling than re-use may cause issues on the load balancers.
To enable these kernel settings the following values should be set in `/etc/sysctl.conf`: 

```
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
```

The kernel parameter net.core.somaxconn controls the maximum number of open sockets waiting for connections. This value can be safely increased to 1024. But it should be correlated with ability of server to handle this amount.
To enable these kernel settings the following values should be set in /etc/sysctl.conf: 

```
net.core.somaxconn = 1024
```

### Web server

Between Nginx and Apache options for web-server our team prefers to see Nginx as it better supports high load cases, meanwhile Magento 2 fully supports both as well as provides recommended configuration files for each web-server type Sample configuration file .htaccess.sample, nginx.conf.sample can be found in root directory of the project independently of the version you use. Last contain set of settings for better performance and ready for production usage.
Main configuration practices present in file include but not limited to:

*	Settings for caching of static content in browser
*	Memory and execution time settings for PHP
*	Content compression settings

> __Note__: One of setting that should be configured separately and is not regulated by sample configuration is number of threads for input requests processing: MaxClients (Apache) / max_children_count (Nginx). This one should be calculated basing on expected load per web-node and set to web server configuration file.

### PHP

Magento 2 fully supports and engages everyone to use latest version of PHP, which is now PHP 7.1. There are few things that should be accounted in PHP configuration to get maximum speed and efficiency on requests processing.

#### PHP extensions

We recommend to limit list of active extensions to those that are required for functioning of Magento:

* php-bcmath
* php-cli
* php-common
* php-gd
* php-intl
* php-mbstring
* php-mcrypt
* php-opcache
* php-pdo
* php-soap
* php-xml

Adding more extensions will lead to additional time expenses on loading their libraries. 

> __Note__: Please pay attention that presence of any profiling and debugging extensions can negatively impact response time of your pages. As an example, active xDebug module without any debug session can add up to 30% time to page response.

#### PHP Settings

To guarantee successful execution of all Magento scenarios without dumping data or code to disk it is recommended to set next memory limit:

  memory_limit=768MB

##### ByteCode

You will never get maximum speed out of Magento 2 on PHP7 without activating OpCache module and configuring it the right way. Below you may find recommended settings for the module:

  opcache.memory_consumption=512MB
  opcache.max_accelerated_files=60000
  opcache.consistency_checks=0
  opcache.validate_timestamps=0

### MySQL database

This document does not attempt to provide in-depth MySQL tuning as it highly depends on the store context and its specificity but gives some general recommendations that can be applied.
 
#### MySQL server configuration

There have been many improvements to MySQL as a product with the 5.6 and 5.7 releases. Those achievements allow us to say that MySQL is distributed with good default settings. The most critical settings are:
* `innodb_buffer_pool_instances`: default value is set to 8 to avoid issues with multiple threads attempting to access the same instance.
* `innodb_buffer_pool_size`: defaults to 128MB. Combined with the multiple pool instances described above this means a default memory allocation of 1024MB. The total size is divided among all the buffer pools. For best efficiency, specify a combination of innodb_buffer_pool_instances and innodb_buffer_pool_size so that each buffer pool instance is at least 1 gigabyte.
* `max_connections`: default value is 150. The value of the max_connections parameter should correlate with the total number of PHP threads configured in the application server. A general recommendation would be 300 for a small and 1,000 for a medium environment.
* `innodb-thread-concurrency`: by default, innodb-thread-concurrency is set to 0. The correct value for this configuration should be calculated by the formula: `innodb-thread-concurrency = 2 * (NumCPUs + NumDisks)`

### Varnish as recommended Page Cache solution

Magento 2 team highly recommends to use Varnish as full page cache server for your store. Now it is fully available in all versions of Magento. FPC module is still present in Magento 2 but is recommended just for development purposes and should not be used together with or instead of Varnish. 
Varnish should be installed as a separate server in front of web tier and accept all requests coming to store for providing of cached page copy. To let Varnish work effectively with secured pages SSL termination proxy can be placed in front of Varnish. Nginx can be used for this purpose.
Our product is already distributed with the sample configuration file for Varnish (versions 4 and 5) containing all recommended settings for performance. Among them the most critical in terms of performance are:
grace_mode: allows you to instruct Varnish to keep an object in cache beyond its TTL and serve this stale content if your backend is not healthy or if fresh content hasn’t been fetched yet.
backend health check validation: configuration of regular Varnish backend checks for maintaining list of valid and working nodes

> __Note__: Another setting that is not covered in default distributed configuration, but deserves your attention it saintmode (please check official Varnish documentation for more details).

### Caching and Session Server

Magento provides number of options to store your cache and session data which are Redis, Memcache, filesystem and database. Let’s consider what is the best selection for each specific case.

#### Single web-node setup

In case you plan to serve all your traffic with just one web-node it does not make sense to put your cache to remote Redis server, but either place is in filesystem (good option here will be to put your cache folders to volume mounted on RAM FS) or in local Redis server (in this case we highly recommend to configure Redis so it uses sockets for direct connections rather than exchange data through http).

#### Multi web-nodes setup

For multi web-nodes setup Redis is the best option. Accounting the fact Magento actively cache lots of data for better performance we ask you to pay attention to your network channel between web-nodes and Redis server so it does not become a bottleneck for requests processing. 

> __Note__: For cases when you need to serve hundreds and thousands of simultaneous requests you may need up to 1GBit or even wider channel to your Redis server.

## Magento Configuration

Magento 2 provides a bunch of settings and tools that can be used and activated for getting better response time on the pages as well as provide higher throughput.

### Cron Jobs

All asynchronous operations in Community version of Magento 2 are performed with usage of Linux Cron. To configure it in a right way please refer to official guide by next link: http://devdocs.magento.com/guides/v2.0/config-guide/cli/config-cli-subcommands-cron.html 

### Indexers

There 2 modes of indexers work available in Magento: Update on Save and Update on Schedule. First one allows to perform immediate indexation of your catalog or other data right after it was updated meanwhile assumes low intensity of update and browsing operations in your store and can lead to significant delays and data unavailability in case of high load. Update on Schedule is recommended mode for production usage as allows to store info about data updates and perform indexation by portions in background through specific Cron job.
You can change the mode of each Magento indexer separately on configuration page: `System->Index Management`

### Caches

Magento 2 actively use caching approach for provision of maximum performance to its clients. When your store is launched in production all the caches should be activated. This can be easily done by turning them on System->Cache Management page. We highly recommend to use Varnish as the most efficient production page cache solution.

### Asynchronous email notifications

To save time on sending email notifications during Checkout process and Order processing in backend and move these operations to background Magento 2 provides “Asynchronous email notifications” setting that is available by next path

  Stores->Configuration->Sales->Sales Emails->General Settings->Asynchronous Sending

By using this option all emails related to purchase operations will be sent in background.

### Asynchronous order data processing

There is a frequent case when intensive sales on storefront are combined with intensive order processing in backend office. Magento allows to distinguish these two traffics on DB level to avoid conflicts between read and write operations in corresponding tables. With this goal, we provide an option to store and index orders data asynchronously of their placement on frontend thus orders will be noted in temporary storage and portionally moved to Order Management Grid without any collisions. This option can be activated in your Magento configuration through following path:

  Stores->Configuration->Advanced->Developer->Grid Settings->Asynchronous indexing

### Deferred stock update

In case of intensive sales Magento 2 allows to defer operations of stock update related to orders called to minimize number of operations and speed up order placement process. This option is risky and can be used only together with Backorder activated in store as can lead to negative stock appearance, meanwhile brings significant performance profit on Checkout flows for those stores who can easily re-fill their stock on demand. Option can be activated in next configuration area:

  Stores->Configuration->Catalog->Inventory->Product Stock Options->Use Deferred Stock Update

> __Note__: This options will be available only after Backorder with any mode is activated.

### Client side optimization settings

Magento 2 provides variety of configurations for client side optimization, including:
* _Minification of all resources_
  * _JS minification_: `Stores->Configuration->Advanced->Developer->JS Settings->Minify JS Files`
	* _CSS minification_: `Stores->Configuration->Advanced->Developer->CSS Settings->Minify CSS Files`
	* _HTML minification_: `Stores->Configuration->Advanced->Developer->Template Settings->Minify HTML
* _JS resources bundling_: `Stores->Configuration->Advanced->Developer->JS Settings->Enable Javascript Bundling`
  By activating this option, you allow Magento to merge all JS resources into one or set of bunches that will be loaded to storefront pages. This way you get all JS content to your storefront with less number of requests to server as well as help your browser cache JS resources on first call and re-use it for all further browsing. In addition to loading in bunches this option also brings lazy evaluation as all JS is loaded as text and initiates analysis and evaluation of code only after specific actions are triggers on the page. From other side this setting should not be recommended for that stores where first page load time is extremely critical as with bundling all loading of JS content will happen exactly on first call.

> __Note__: It is recommended to use third-party tools for minification and bundling (like r.js). Magento built in mechanisms are suboptimal and are shipped as fallback alternative. 

> __Note__: Good alternative to usage of JS bundling can be activation of HTTP2 protocol, which provides pretty much the same benefits.

> __Note__: Magento team does not recommend to use deprecated settings like merge of JS and CSS files as they were designed only for synchronously loaded JS in HEAD section of the page and can incorrectly function together with bundling and requireJS logic.

## Magento Production Deployment Flow

Magento Production Deployment Flow is focused on getting store to maximum performance 	and assumes execution of 3 mandatory steps:

### Deploy of static content

  bin/magento setup:static-content:deploy

By executing CLI command above Magento 2 will analyze all static resources, perform merge, minimization and bundling of content, read and process themes data, analyze themes fallback and store all processed and materialized content to specific folder for further usage. In case your static content is not deployed Magento will perform all listed operation on the fly that leads to significant response time increase. Today deploy operation is provided with variety of options for different stores size and fulfillment. Most common is compact deploy strategy meanwhile we recommend you to read official documentation for getting more info on all the strategies and options available for your store.

### DI instructions preprocessing / Composer autoload configuration
  
  bin/magento setup:di:compile
  
Through preprocessing/compilation of DI instructions Magento reads and process all present configuration, analyze dependencies between classes, creates autogenerated files (including proxies, factories, etc.) and stores compiled data and configuration in specific cache that allows to save up to 25% of time on requests processing.
After compilation is complete we recommend to execute next command:

  composer dump-autoload -o

This one will allow composer to rebuild mapping to project files so to load them faster.

### Setting Production mode

Last step that should be performed during production deployment of store is setting of Production mode. This can be done in your .htaccess or nginx.conf file correspondingly:

  SetEnv MAGE_MODE production

Same setting can be done through corresponding CLI command. Production mode is specifically optimized for maximum performance of your store as de-activate all developer specific features.

> __Note__: Static content deploy, compilation and mode selection can be also performed together in one CLI command (bin/magento set:mode production), meanwhile in this case process fully goes in background and does not allow you to set additional options on each specific step.

## Pre-launch actions

There are also some recommended but not mandatory steps that can be performed directly before production launch of your store. The list includes:

* Re-indexation of data: to avoid presence of any inconsistent data in your indexes
* Flushing of the cache: to be sure no old or incorrect data left in cache
* Cache warm up: calling out most popular or critical store pages in advance, so cache for them is generated and stored. This operation can be performed with any intellectual crawler or manually (in case of small store.

## Advanced Setup

Magento 2 is highly flexible and scalable product containing solutions for merchants of all sizes. This section covers best practices and recommendations on configuring Magento for work with big amounts of data, extreme load and other enterprise cases.

### Search

By default, Magento uses MySQL for all search operations, meanwhile Magento Commerce version fully supports and provides you alternative search engine which is ElasticSearch as more optimized search solution. With ElasticSearch time on query processing will not change with the growth of search results (the way it does with MySQL). To run Magento with ElasticSearch you don’t need any specific configuration, but just install server and select corresponding search engine option in Magento admin. ElasticSearch can provide you necessary scaling opportunities in case you experience increase of load in your store.

### Indexers fine tuning

When dealing with large amounts of data in your store it becomes actual on how all this information will be re-indexed. Magento team selected most loaded indexes and integrated opportunity of batch indexation that allows to set portion of data for processing on each iteration. This way user can tune batch size correspondingly to character and size of data in database.
To manage this setting you need to edit batchRowsCount parameter in di.xml file of corresponding module. There are 5 indexes supporting this feature:

* Category Product Index (Catalog Module)
* Price Index (Catalog Module)
* EAV Index (Catalog Module)
* Stock Index (CatalogInventory Module)

### Redis

Sometimes it comes to case when one Redis instance is not enough to serve incoming requests. There are bunch of solutions that we can recommend to stay effective in this situation.

First, Magento 2 allows to configure separate cache storage for each cache type that allows you to install as many separate Redis instances as many types of cache are registered in Magento. Meanwhile it makes sense not for all cache type by only for most actively used as configuration, layout and block caches. 

Semi extension to described solution can be placement of configuration cache in filesystem and putting rest of caches to Redis server. With this solution you will need a separate tool for centralized invalidation of configuration cache on all your web-nodes.

As alternative to recommendation above, you can use Redis cluster that allows to perform parallel read/write operations with automatically increasing number of nodes. Magento does not provide configuration for this case, but it can be launch with minor customizations.

### Job Server (RabbitMQ)

Out of the box Magento Commerce product provides support of MessageQueue implemented through RabbitMQ. Magento already uses this service for executing numeous asynchronous operations including B2B Catalog Operations, Asynchronous Stock Updates, etc. All interfaces for adding more jobs to job server are distributed with the product and available for custom asynchronous logic implementation in scope of 3pd extensions. As with any other integration Magento 2 provides sample configuration file for RabbitMQ that contains all recommended settings and fully ready for production usage.

### Database split

Magento Commerce 2 also allows you to scale in terms of your database storage to let you easily serve growing needs of your business. With this purpose Magento provides opportunity to setup up to 3 separate Master databases serving specific domain areas:

* Main (Catalog) Database
* Checkout Database
* Order Management System (OMS) Database

Configuration of additional databases assumes execution of next steps:

* Creation of an empty database
* Execution one CLI command:

  bin/magento setup:db-schema:split-quote (for Checkout Master DB)
  bin/magento setup:db-schema:split-sales (for OMS Master DB)

These commands will perform migration of specific domain tables from main database to domain database and change Magento configuration to allow corresponding connectivity and constraints processing.
By having separate database for Checkout and Order Management you can distribute load between your database servers and serve more checkouts as well as process more orders per second without affecting availability of your сatalog and other operations. We recommend to split databases for periods of flash or active sales or have them permanently for naturally high load projects. Please pay attention that migration of present data between databases should be executed under control of your system administrator as well as operation is not recommended for execution in production.
In addition to master databases Magento 2 allows to configure free number of slave databases (1 for each data resource declared in the system). Addition of slave database can be done through execution of next CLI command: 

	bin/magento setup:db-schema:add-slave

Slave database plays as a full replica of your main database or one of your domain master databases and is used for read operations on specific resource.  Pay attention that command above performs necessary configuration changes meanwhile does not configure replication itself, that should be done manually.
After splitting youк master database and setting slave databases Magento will automatically regulate connections to specific DB making decision basing on type of request (POST, PUT, GET, etc) and data resource. In case Magento or its extensions performs write operations on GET request system will automatically switch connection from slave to master database. Same way it works with master databases: as soon as you work with checkout related table system will redirect all the queries to specific DB, meanwhile all catalog related queries will go to main database.
For more details on configuration and benefits of multi master/slave configuration please refer to official documentation:
http://devdocs.magento.com/guides/v2.0/config-guide/multi-master/multi-master.html

### Serving media content

Magento does not provide any specific integration to serve and deliver media content, meanwhile all common approaches can be used together in Magento.

The easiest way of serving media content is delivering and caching it on varnish server. This approach assumes either shared file system for storing media content or dedicated server with pointing Varnish to it.

For medium and high load solutions, we recommend to use CDN services, like Fastly, Akamai and others. When working with this services Magento uses classic PULL approach for content update. The only thing you need to make it working is configure Magento URLs to work with corresponding CDN service. By moving media content to CDN you will significantly unload you instances.

### Log storage

One of common issues you may face when dealing with high load is storing of logs and their influence on other disks operations that affects availability of your web-nodes. We recommend to minimize logging in case you don’t need it or configure logging the way logs go to a separate storage with high access speed. Please pay attention that any bottleneck on accessing logs storage can directly affect processing of incoming requests that have logs write or read operation in their flow.
