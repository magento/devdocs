---
title: Magento_ResourceConnections module
ee_only: true
---

{% include mrg/note.md %}

Magento\ResourceConnections module adds a mechanism to segregate database connections between master and slave
database servers based on the request type.

For each master database connection (except the indexer connection) that are configured in db/connection section
of app/etc/env.php you can add one slave connection that can be configured in db/slave_connection.
Configuration format is the same as db/connection. Slave connection name must be the same as associated master
connection name. To enable slave connections for specific resources create a slave connection configuration
by adding slave_connection node as below:

```php
<?php
return array (
    //...
    'db' =>
        array (
            'connection' =>
                array (
                    'default' =>
                        array (
                            'host' => 'default-master-host',
                            'dbname' => 'magento',
                            'username' => 'magento',
                            'password' => 'magento',
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
        ),
        'table_prefix' => '',
    ),
    //.......
```
To add slave connection for resources other than 'default' repeat the step and add to db/slave_connection
new element with same name and slave configuration for specified resource.
Config structure retains backward compatibility if module is turned off.

WARNING: 'indexer' connection is not designed to have slave configuration.

