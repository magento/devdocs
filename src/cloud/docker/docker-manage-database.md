---
group: cloud-guide
title: Manage the database
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-config.html
---

The Cloud Docker development environment provides MySQL services through a MariaDB database deployed to the [Docker database container]. You connect to the database using `docker-compose` commands. You can also import data from an existing Magento project into the database container using the `magento-cloud db:dump` command.

## Connect to the database

There are two ways to connect to the database. Before you begin, locate the database credentials in the `database` section of the `.docker/config.php` file. The examples use the following default credentials:

> Filename: `.docker/config.php`

```php?start_inline=1
return [
    'MAGENTO_CLOUD_RELATIONSHIPS' => base64_encode(json_encode([
        'database' => [
            [
                'host' => 'db',
                'path' => 'magento2',
                'password' => 'magento2',
                'username' => 'magento2',
                'port' => '3306'
            ],
        ],
```
{:.no-copy}

{:.procedure}
To connect to the database using Docker commands:

1. Connect to the CLI container.

   ```bash
   docker-compose run deploy bash
   ```

1. Connect to the database with a username and password.

   ```bash
   mysql --host=db --user=magento2 --password=magento2
   ```

1. Verify the version of the database service.

   ```mysql
   SELECT VERSION();
   +--------------------------+
   | VERSION()                |
   +--------------------------+
   | 10.0.38-MariaDB-1~xenial |
   +--------------------------+
   ```
   {:.no-copy}

{:.procedure}
To connect to the database port:

1. Find the port used by the database. The port can change each time you restart Docker.

   ```bash
   docker-compose ps
   ```

   Sample response:

   ```terminal
             Name                         Command               State               Ports
   --------------------------------------------------------------------------------------------------
   mc-master_db_1              docker-entrypoint.sh mysqld      Up       0.0.0.0:32769->3306/tcp
   ```
   {:.no-copy}

1. Connect to the database with port information from the previous step.

   ```bash
   mysql -h127.0.0.1 -p32769 -umagento2 -pmagento2
   ```

1. Verify the version of the database service.

   ```mysql
   SELECT VERSION();
   +--------------------------+
   | VERSION()                |
   +--------------------------+
   | 10.0.38-MariaDB-1~xenial |
   +--------------------------+
   ```
   {: .no-copy}

[db-image]: https://hub.docker.com/_/mariadb

## Import a database dump

{:.bs-callout-warning}
Before you import a database from an existing Magento installation into a new {{ site.data.var.ece }} environment, you must add the encryption key from the remote environment to the new environment, and then deploy the changes. See [Add the Magento encryption key]({{ site.baseurl}}/cloud/setup/first-time-setup-import-import.html#encryption-key).

{:.procedure}
To import a database dump into the Docker environment:

1. Create a local copy of the remote database.

   ```bash
   magento-cloud db:dump
   ```

   {: .bs-callout-note }
   The `magento-cloud db:dump` command runs the [mysqldump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html) command with the `--single-transaction` flag, which allows you to back up your database without locking the tables.

1. Place the resulting SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` folder.

   The `{{site.data.var.ct}}` package imports and processes the SQL file the next time you build and start the Docker environment using the `docker-compose up` command.

{:.bs-callout-tip}
Although it is a more complex approach, you can use GZIP to import the database by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and import it inside the Docker container.

You can inject a MySQL configuration into the database container at creation by adding the configuration to the `docker-compose-override.yml` file. Add the custom values using an included `my.cnf` file, or add the correct variables directly to the override file as shown in the following examples.

Add a custom `my.cnf` to the `docker-compose.override.yml` file:

```yaml
db:
  volumes:
    - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

{:.procedure}
Add configuration values to the `docker-compose.override.yml` file:

```yaml
  db:
    environment:
      - innodb-buffer-pool-size=134217728
```

## Customize the database container

You can inject a MySQL configuration into the database container at creation by adding the configuration to the `docker-compose-override.yml` file. Add the custom values using an included `my.cnf` file, or add the correct variables directly to the override file as shown in the following examples.

*Add a custom `my.cnf` file to the `docker-compose.override.yml` file:*

```yaml
db:
  volumes:
    - path/to/custom.my.cnf:/etc/mysql/conf.d/custom.my.cnf
```

*Add configuration values to the `docker-compose.override.yml` file:*

```yaml
  db:
    environment:
      - innodb-buffer-pool-size=134217728
```

See [Docker service containers][Docker database container] for details about the Database container and container configuration.

[Docker database container]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html#database-container
