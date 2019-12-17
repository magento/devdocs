---
group: cloud-guide
title: Set up MySQL service
functional_areas:
  - Cloud
  - Setup
---

The `mysql` service provides persistent data storage based on [MariaDB](https://mariadb.com/) versions 10.0 and later, supporting the [XtraDB](https://www.percona.com/software/mysql-database/percona-server/xtradb) storage engine and reimplemented features from MySQL 5.6 and 5.7.

{% include cloud/service-config-integration-starter.md %}

## Enable MySQL

1. Add the required name, type, and disk value (in MB) to the `.magento/services.yaml` file.

   ```yaml
   mysql:
       type: mysql:<version>
       disk: 2048
   ```

1. Configure the relationships in the `.magento.app.yaml` file.

   ```yaml
   relationships:
       database: "mysql:mysql"
   ```

1. Add, commit, and push your code changes.

   ```bash
   git add -A && git commit -m "Enable mysql service" && git push   origin <branch-name>
   ```

1. [Verify the service relationships]({{ site.baseurl }}/cloud/project/project-conf-files_services.html#service-relationships).

{:.bs-callout-tip}
MySQL errors such as `PDO Exception: MySQL server has gone away` may be a result of exhausting existing disk space. Verify that you have allocated sufficient disk space to the service in the [`.magento/services.yaml`]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#disk) file.

## Set up multiple database users

Optionally, you can set up multiple databases as well as multiple users with different permissions.

An _endpoint_ is a set of credentials (or users) with specific privileges. By default, there is one endpoint named `mysql` that has administrator access to all defined databases. To set up multiple database users, you must define multiple endpoints in the services.yaml file and declare the relationships in the .magento.app.yaml file.

{:.bs-callout-warning}
You cannot use multiple _databases_ with {{site.data.var.ee}} at this time, but you **can** create multiple endpoints to restrict access to the `main` database.

Use a nested array to define the endpoints for specific user access. Each endpoint can designate access to one or more schemas (databases) and different levels of permission on each.

The valid permission levels are:

-  `ro`: Only SELECT queries are allowed.
-  `rw`: SELECT queries and INSERT, UPDATE, and DELETE queries are allowed.
-  `admin`: All queries are allowed, including DDL queries (CREATE TABLE, DROP TABLE, and so on).

If no endpoints are defined, a single endpoint named `mysql` has `admin` access to the `main` database. For example:

```yaml
mysql:
    type: mysql:10.2
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

In the preceding example, the `admin` endpoint provides admin-level access to the `main` database, the `reporter` endpoint provides read-only access, and the `importer` endpoint provides read-write access. This means that:

-  The `admin` user has full control of the database.
-  The `repoter` user has SELECT privileges only.
-  The `importer` user has SELECT, INSERT, UPDATE, and DELETE privileges.

You must add the endpoints defined in the above example to the `relationships` property of the `.magento.app.yaml` file. For example:

```yaml
relationships:
    database: "mysql:admin"
    databasereporter: "mysql:reporter"
    databaseimporter: "mysql:importer"
```

 {:.bs-callout-info}
If you configure one MySQL user, you cannot use the [`DEFINER`](http://dev.mysql.com/doc/refman/5.6/en/show-grants.html) access control mechanism for stored procedures and views.

## Connect to the database

Accessing the MariaDB database directly requires you to use a SSH to log in to the remote server, and connect to the database.

1. Log in to the remote server using SSH.

1. Retrieve the MySQL login credentials from the `database` and `type` properties in the [$MAGENTO_CLOUD_RELATIONSHIPS]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#relationships) variable.

   ```bash
   echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
   ```

      or

   ```bash
   php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
   ```

   In the response, find the MySQL information, for example:

   ```json
   {
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
         "type" : "mysql:10.0",
         "username" : "user",
         "scheme" : "mysql"
      }
   ],
   ```

1. Connect to the database:

   -  For Starter, use the following command:

   ```bash
   mysql -h database.internal -u <username>
   ```

   -  For Pro, use the following command with db, username, and password retrieved from the `$MAGENTO_CLOUD_RELATIONSHIPS` variable.

   ```bash
   mysql -h<db> -p<number> -u<username> -p<password>
   ```
