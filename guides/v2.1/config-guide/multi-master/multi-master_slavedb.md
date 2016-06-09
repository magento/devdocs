---
layout: default
group: config-guide
subgroup: 20_cqrs
title: Set up optional database replication
menu_title: Set up optional database replication
menu_order: 10
menu_node: 
version: 2.1
github_link21: config-guide/multi-master/multi-master_slavedb.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png">

<h2 id="config-ee-multidb-slave-over">Overview of database replication</h2>
Setting up database replication provides the following benefits:

*	Provides data backup
*	Enables data analysis without affecting the master database
*	Scalability

MySQL databases replicate asynchronously, which means slaves do not need to be connected permanently to receive updates from the master. 

<h2 id="config-ee-multidb-slave-conf">Configure database replication</h2>
An in-depth discussion of database replication is beyond the scope of this guide. To set it up, you can consult a resource like:

*	<a href="https://dev.mysql.com/doc/refman/5.6/en/replication.html" target="_blank">MySQL documentation</a>
*	<a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-master-slave-replication-in-mysql" target="_blank">How To Set Up Master Slave Replication in MySQL (digitalocean)</a>

Magento provides sample MySQL configurations for your slave databases. A simple configuration is provided with the `ResourceConnections` class `README.md`.

The following is more advanced and is provided for your information only:

{% highlight PHP startinline=true %}
	return array (
   //...
  'db' =>
  array (
    'connection' =>
    array (
      'indexer' =>
      array (
        'host' => 'default-master-host',
        'dbname' => 'magento',
        'username' => 'magento',
        'password' => 'magento',
        'active' => '1',
        'persistent' => NULL,
      ),
      'default' =>
      array (
        'host' => 'default-master-host',
        'dbname' => 'magento',
        'username' => 'magento',
        'password' => 'magento',
        'active' => '1',
      ),
      'checkout' =>
      array (
        'host' => 'checkout-master-host',
        'dbname' => 'checkout',
        'username' => 'magento',
        'password' => 'magento',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
      'sales' =>
      array (
        'host' => 'sales-master-host',
        'dbname' => 'sales',
        'username' => 'magento',
        'password' => 'magento',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
    ),
    'slave_connection' =>
    array (
      'default' =>
      array (
        'host' => 'default-slave-host',
        'dbname' => 'magento',
        'username' => 'read_only',
        'password' => 'password',
        'active' => '1',
      ),
      'checkout' =>
      array (
        'host' => 'checkout-slave-host',
        'dbname' => 'checkout',
        'username' => 'read_only',
        'password' => 'password',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
      'sales' =>
      array (
        'host' => 'sales-slave-host',
        'dbname' => 'sales',
        'username' => 'read_only',
        'password' => 'password',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
    ),
    'table_prefix' => '',
  ),
//.......
{% endhighlight %}

