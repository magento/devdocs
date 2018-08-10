---
group: config-guide
subgroup: 20_cqrs
title: Set up optional database replication
menu_title: Set up optional database replication
menu_order: 10
menu_node:
version: 2.0
ee_only: True
functional_areas:
  - Configuration
  - System
  - Setup
---

Setting up database replication provides the following benefits:

*	Provides data backup
*	Enables data analysis without affecting the master database
*	Scalability

MySQL databases replicate asynchronously, which means slaves do not need to be connected permanently to receive updates from the master. 

## Configure database replication   {#config-ee-multidb-slave-conf}

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

## Performance improvement

To improve the performance of master-slave replication, you can filter some tables on slave instances. We recommend filtering all temporary tables with name pattern `search\_tmp\_%` that are used for {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} search.

To do this, add the following line to your `my.cnf` file on your slave instances:

    replicate-wild-ignore-table=%.search\_tmp\_%

For more information about this setting, see [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-slave.html#option_mysqld_replicate-wild-ignore-table){:target="_blank"}.

