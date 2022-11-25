---
group: cloud-guide
title: Set up MySQL service
functional_areas:
  - Cloud
  - Setup
redirect_from:
  - /cloud/project/project-conf-files_services-mysql.html  
---

The `mysql` service provides persistent data storage based on [MariaDB](https://mariadb.com/) versions 10.2 to 10.4, supporting the [XtraDB](https://www.percona.com/software/mysql-database/percona-server/xtradb) storage engine and reimplemented features from MySQL 5.6 and 5.7.

{% include install/maria-db.md %}

{:.bs-callout-warning}
Be careful when upgrading MariaDB from version 10.1 to 10.2. MariaDB 10.1 is the last version that supports _XtraDB_ as the storage engine.  MariaDB 10.2 uses _InnoDB_ for the storage engine. After you upgrade from 10.1 to 10.2, you cannot roll back the change. {{site.data.var.ee}} supports both storage engines; however, you must check extensions and other systems used by your project to make sure they are compatible with MariaDB 10.2. See [Incompatible Changes Between 10.1 and 10.2](https://mariadb.com/kb/en/upgrading-from-mariadb-101-to-mariadb-102/#incompatible-changes-between-101-and-102).

{% include cloud/service-config-integration-starter.md %}

{:.procedure}
To enable MySQL:

1. Add the required name, type, and disk value (in MB) to the `.magento/services.yaml` file.

   ```yaml
   mysql:
       type: mysql:<version>
       disk: 5120
   ```

   {:.bs-callout-tip}
   MySQL errors, such as `PDO Exception: MySQL server has gone away`, can occur as a result of insufficient disk space. Verify that you have allocated sufficient disk space to the service in the [`.magento/services.yaml`]({{ site.baseurl }}/cloud/project/magento-app-properties.html#disk) file.

1. Configure the relationships in the `.magento.app.yaml` file.

   ```yaml
   relationships:
       database: "mysql:mysql"
   ```

1. Add, commit, and push your code changes.

   ```bash
   git add .magento.app.yaml .magento/services.yaml && git commit -m "Enable mysql service" && git push origin <branch-name>
   ```

1. [Verify the service relationships]({{ site.baseurl }}/cloud/project/services.html#service-relationships).

   {%include cloud/tip-change-installed-service-version.md%}

## Configure MySQL database

You have the following options when configuring the MySQL database:

-  **`schemas`**—A schema defines a database. The default schema is the `main` database.
-  **`endpoints`**—Each endpoint represents a credential with specific privileges. The default endpoint is `mysql`, which has `admin` access to the `main` database.
-  **`properties`**—Properties are used to define additional database configurations.

The following is a basic example configuration in the `.magento/services.yaml` file:

```yaml
mysql:
    type: mysql:10.4
    disk: 5120
    configuration:
        properties:
            optimizer_switch: "rowid_filter=off"
            optimizer_use_condition_selectivity: 1
```

The `properties` in the above example modifies the default `optimizer` settings as [recommended in the Performance Best Practices guide]({{ site.baseurl }}{{ site.gdeurl }}/performance-best-practices/configuration.html#indexers).

### Set up multiple database users

Optionally, you can set up multiple users with different permissions for accessing the `main` database.

By default, there is one endpoint named `mysql` that has administrator access to the database. To set up multiple database users, you must define multiple endpoints in the `services.yaml` file and declare the relationships in the `.magento.app.yaml` file. For Pro Staging and Production environments, submit a Support ticket to request the additional user.

Use a nested array to define the endpoints for specific user access. Each endpoint can designate access to one or more schemas (databases) and different levels of permission on each.

The valid permission levels are:

-  `ro`: Only SELECT queries are allowed.
-  `rw`: SELECT queries and INSERT, UPDATE, and DELETE queries are allowed.
-  `admin`: All queries are allowed, including DDL queries (CREATE TABLE, DROP TABLE, and so on).

For example:

```yaml
mysql:
    type: mysql:10.4
    disk: 5120
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
        properties:
            optimizer_switch: "rowid_filter=off"
            optimizer_use_condition_selectivity: 1
```

In the preceding example, the `admin` endpoint provides admin-level access to the `main` database, the `reporter` endpoint provides read-only access, and the `importer` endpoint provides read-write access, which means:

-  The `admin` user has full control of the database.
-  The `reporter` user has SELECT privileges only.
-  The `importer` user has SELECT, INSERT, UPDATE, and DELETE privileges.

Add the endpoints defined in the above example to the `relationships` property of the `.magento.app.yaml` file. For example:

```yaml
relationships:
    database: "mysql:admin"
    databasereporter: "mysql:reporter"
    databaseimporter: "mysql:importer"
```

{:.bs-callout-info}
If you configure one MySQL user, you cannot use the [`DEFINER`](https://dev.mysql.com/doc/refman/5.6/en/show-grants.html) access control mechanism for stored procedures and views.

## Connect to the database

Accessing the MariaDB database directly requires you to use a SSH to log in to the remote Cloud environment, and connect to the database.

1. Use SSH to log in to the remote environment.

   ```bash
   magento-cloud ssh
   ```

1. Retrieve the MySQL login credentials from the `database` and `type` properties in the [$MAGENTO_CLOUD_RELATIONSHIPS]({{ site.baseurl }}/cloud/project/magento-app-properties.html#relationships) variable.

   ```bash
   echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
   ```

   or

   ```bash
   php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
   ```

   In the response, find the MySQL information. For example:

   ```json
   "database" : [
      {
         "password" : "",
         "rel" : "mysql",
         "hostname" : "nnnnnnnn.mysql.service._.magentosite.cloud",
         "service" : "mysql",
         "host" : "database.internal",
         "ip" : "###.###.###.###",
         "port" : 3306,
         "path" : "main",
         "cluster" : "projectid-integration-id",
         "query" : {
            "is_master" : true
         },
         "type" : "mysql:10.3",
         "username" : "user",
         "scheme" : "mysql"
      }
   ],
   ```

1. Connect to the database.

   -  For Starter, use the following command:

      ```bash
      mysql -h database.internal -u <username>
      ```

   -  For Pro, use the following command with hostname, port number, username, and password retrieved from the `$MAGENTO_CLOUD_RELATIONSHIPS` variable.

      ```bash
      mysql -h <hostname> -P <number> -u <username> -p'<password>'
      ```

{:.bs-callout-tip}
You can use the `magento-cloud db:sql` command to connect to the remote database and run SQL commands.

## Connect to secondary database

Sometimes, you have to connect to the secondary database to improve database performance or resolve database locking issues. If this configuration is required, use `"port" : 3304` to establish the connection. See the [{{ site.data.var.ece }} database best practice](https://support.magento.com/hc/en-us/articles/360049045351) article in the _{{site.data.var.ee}} Help Center_.

## Troubleshooting

See the following {{site.data.var.ee}} Support articles for help with troubleshooting MySQL problems:

-  [Checking slow queries and processes MySQL](https://support.magento.com/hc/en-us/articles/360030903091-Checking-slow-queries-and-processes-MySQL-)
-  [Create database dump on Cloud](https://support.magento.com/hc/en-us/articles/360003254334-Create-database-dump-on-Cloud)
-  [Data Migration Tool troubleshooting](https://support.magento.com/hc/en-us/articles/360033020451-Data-Migration-Tool-troubleshooting)
-  [{{site.data.var.ee}} upgrade: compact to dynamic tables 2.2.x, 2.3.x to 2.4.x](https://support.magento.com/hc/en-us/articles/360048389631-Magento-upgrade-compact-to-dynamic-tables-2-2-x-2-3-x-to-2-4-x-)
