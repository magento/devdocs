---
group: cloud-guide
title: Set up MySQL service
functional_areas:
  - Cloud
  - Setup
---

The `mysql` service provides persistent data storage. It is based on [MariaDB](https://mariadb.com/), supporting the [XtraDB](https://www.percona.com/software/mysql-database/percona-server/xtradb) storage engine.

We support MariaDB version 10.2, which includes reimplemented features from MySQL 5.6 and 5.7.

Using SSH, log in to the remote server and access the MariaDB database directly:

```bash
mysql -h database.internal -u user
```

{% include cloud/service-config-integration-starter.md %}

## Set up multiple database users

Optionally, you can set up multiple databases as well as multiple users with different permissions.

An _endpoint_ is a set of credentials (or users) with specific privileges. By default, there is one endpoint named `mysql` that has administrator access to all defined databases. To set up multiple databases and users, you must specify multiple endpoints.

{: .bs-callout-warning}
You cannot use multiple _databases_ with {{site.data.var.ee}} at this time. You **can** create multiple endpoints to restrict access to the `main` database.

To specify user access, use the `endpoints` nested array. Each endpoint can have access to one or more schemas (databases), and can have different levels of permission on each.

The valid permission levels are:

-  `ro`: Only SELECT queries are allowed.
-  `rw`: SELECT queries and INSERT/UPDATE/DELETE queries are allowed.
-  `admin`: All queries are allowed, including DDL queries (CREATE TABLE, DROP TABLE, and so on).

If no endpoints are defined, a single endpoint named `mysql` has `admin` access to the `main` database. For example:

```yaml
mysqldb:
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

In the preceding example, the endpoint (user) `reporter` has read-only privileges to the `main` database and endpoint `importer` has read-write access to the `main` database. This means that:

-  The `admin` user has full control of the database.
-  The `repoter` user has SELECT privileges only.
-  The `importer` user has SELECT, INSERT, UPDATE, and DELETE privileges.

## Enable MySQL

1.  Add the required name, type, and disk value (in MB) to the `.magento/services.yaml` file.

  ```yaml
  mysql:
      type: mysql:10.2
      disk: 2048
  ```

1.  Configure the relationships in the `.magento.app.yaml` file.

  ```yaml
  relationships:
      database: "mydatabase:mysql"
  ```

1.  Add, commit, and push your code changes.

    ```bash
    git add -A && git commit -m "Enable mysql service" && git push origin <branch-name>
    ```

{: .bs-callout-info }
-  If you configure one MySQL user, you cannot use the [`DEFINER`](http://dev.mysql.com/doc/refman/5.6/en/show-grants.html) access control mechanism for stored procedures and views.
-  MySQL errors such as `PDO Exception 'MySQL server has gone away` are usually the result of exhausting your existing disk space. Be sure you have sufficient space allocated to the service in [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#disk).

## Verify environment-related relationships

We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

{% include cloud/pretty-print-services.md %}