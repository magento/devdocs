---
group: cloud
subgroup: 090_configure
title: Set up MySQL service
menu_title: Set up MySQL service
menu_order: 60
menu_node:
level3_menu_node: level3child
level3_subgroup: services
version: 2.1
github_link: cloud/project/project-conf-files_services-mysql.md
functional_areas:
  - Cloud
  - Setup
---

The `mysql` service provides data storage. It's based on [MariaDB](https://mariadb.com/products/subscription-plans){:target="_blank"}, supporting the [XtraDB](https://www.percona.com/software/mysql-database/percona-server/xtradb){:target="_blank"} storage
engine (equivalent to MySQL with InnoDB).

We support MariaDB version 10.0, which includes reimplemented features from MySQL 5.6 and 5.7.

To access the MariaDB database directly, [open an SSH tunnel]({{ page.baseurl }}/cloud/env/environments-start.html#env-start-tunn) and use the
following command:

    mysql -h database.internal -u user

## Set up multiple database users {#cloud-appyaml-mysqlusers}
You can optionally set up multiple databases as well as multiple users with different permissions. By default, there is one endpoint named `mysql` that has administrator access to all defined databases.

To set up multiple databases and users, you must specify multiple endpoints. An _endpoint_ is a user who has privileges you specify.

<div class="bs-callout bs-callout-warning" id="warning" markdown="1">
You can't use multiple _databases_ with {{site.data.var.ee}} at this time. You can, however, create multiple endpoints to restrict access to the `main` database.
</div>

To specify user access, use the `endpoints` nested array. Each endpoint can have access to one or more schemas (databases), and can have different levels of permission on each.

The valid permission levels are:

*   `ro`: Only SELECT queries are allowed.
*   `rw`: SELECT queries as well as INSERT/UPDATE/DELETE queries are allowed.
*   `admin`: All queries are allowed, including DDL queries (CREATE TABLE, DROP TABLE, and so on).

If no endpoints are defined, a single endpoint named `mysql` has `admin` access to the `main` database.

Example:

```
mysqldb:
    type: mysql:10.0
    disk: 2048
    configuration:
        schemas:
            - main
        endpoints:
            admin:
                default_schema: main
                privileges:
                    main: admin
            reporter:
                privileges:
                    main: ro
            importer:
                privileges:
                    main: rw

```

In the preceding example, the endpoint (that is, user) `reporter` has `ro` privileges to the `main` database and endpoint `importer` has `rw` access to the `main` database. This means that:

*   The `admin` user has full control of the database.
*   The `repoter` user has SELECT privileges only.
*   The `importer` user has SELECT, INSERT, UPDATE, and DELETE privileges.

## Add MySQL in services.yaml and .magento.app.yaml {#settings}
To enable MySQL, add the following code with your installed version and allocated disk space in MB to `.magento/services.yaml`.

{% highlight yaml %}
mysql:
    type: mysql:10.0
    disk: 2048
{% endhighlight %}

To configure the relationships for the environment variable, set a relationship in your `.magento.app.yaml` in the Git branch. For example:

{% highlight yaml %}
relationships:
    database: "mydatabase:mysql"
{% endhighlight %}

Merge and deploy the code to set the configurations for Redis. For information on how these changes affect your environments, see [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
* If you configure one MySQL user, you cannot use the [`DEFINER`](http://dev.mysql.com/doc/refman/5.6/en/show-grants.html){:target="_blank"} access control mechanism for stored procedures and views.
* MySQL errors such as `PDO Exception 'MySQL server has gone away` are usually the result of exhausting your existing disk space. Be sure you have sufficient space allocated to the service in [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#disk).
</div>

## Verify environment-related relationships {#cloud-es-config-mg}
We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

To verify this information used for configurations and settings:

1. SSH into the Integration environment with MySQL installed and configured.
2. Enter the following command to pretty-print connection information for MySQL:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'

The response includes all relationships for services and configuration data for that environment. In the response, you will locate data similar to the following for MySQL:

```
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
```