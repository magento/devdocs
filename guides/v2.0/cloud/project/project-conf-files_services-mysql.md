---
layout: default
group: cloud
subgroup: 10_project
title: Set up the mysql service
menu_title: Set up the mysql service
menu_order: 31
menu_node: 
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services-mysql.md
---

The `mysql` service provides data storage. It's based on [MariaDB](https://mariadb.com/products/subscription-plans){:target="_blank"}, supporting the [XtraDB](https://www.percona.com/software/mysql-database/percona-server/xtradb){:target="_blank"} storage
engine (equivalent to MySQL with InnoDB).

We support MariaDB version 10.0, which includes reimplemented features from MySQL 5.6 and 5.7.

To access the MariaDB database directly, [open an SSH tunnel]({{page.baseurl}}cloud/env/environments-start.html#env-start-tunn) and use the
following command: 

    mysql -h database.internal -u user

## Relationship
The format exposed in the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}cloud/env/environment-vars_cloud.html) follows:

{% highlight bash %}
{
  "database": [
    {
      "host": "database.internal",
      "ip": "192.0.2.150",
      "password": "",
      "path": "main",
      "port": 3306,
      "query": {
          "is_master": true
      },
      "scheme": "mysql",
      "username": "user"
    }
  ]
}
{% endhighlight %}

## Usage example
In your `.magento/services.yaml`:

{% highlight yaml %}
mysql:
    type: mysql:10.0
    disk: 2048
{% endhighlight %}

In your `.magento.app.yaml`:

{% highlight yaml %}
relationships:
    database: "mydatabase:mysql"
{% endhighlight %}

You can use the preceding service in a configuration file of your application as follows:

{% highlight php startinline=true %}
$relationships = getenv("MAGENTO_CLOUD_RELATIONSHIPS");
if (!$relationships) {
  return;
}

$relationships = json_decode(base64_decode($relationships), TRUE);

foreach ($relationships['database'] as $endpoint) {
  if (empty($endpoint['query']['is_master'])) {
    continue;
  }
  $container->setParameter('database_driver', 'pdo_' . $endpoint['scheme']);
  $container->setParameter('database_host', $endpoint['host']);
  $container->setParameter('database_port', $endpoint['port']);
  $container->setParameter('database_name', $endpoint['path']);
  $container->setParameter('database_user', $endpoint['username']);
  $container->setParameter('database_password', $endpoint['password']);
  $container->setParameter('database_path', '');
}
{% endhighlight %}

#### Notes
*   There is a single MySQL user, so you can not use the [`DEFINER`](http://dev.mysql.com/doc/refman/5.6/en/show-grants.html){:target="_blank"} access control mechanism for stored procedures and views.
*   MySQL errors such as `PDO Exception 'MySQL server has gone away` are usually simply the result of exhausting your existing disk space. Be sure you have sufficient space allocated to the service in [`.magento/services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html#cloud-yaml-platform-disk).
