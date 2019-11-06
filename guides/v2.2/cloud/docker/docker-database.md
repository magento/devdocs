---
group: cloud-guide
title: Database container
functional_areas:
  - Cloud
  - Docker
  - Configuration
---
The database container is based on the [mariadb][db-image] image.

-  Port: 3306
-  Volumes:
   -  `/var/lib/mysql`
   -  `./docker/mysql`

To import a database dump, place the SQL file into the `.docker/mysql/docker-entrypoint-initdb.d` folder.

The `{{site.data.var.ct}}` package imports and processes the SQL file the next time you build and start the Docker environment using the `docker-compose up` command.

Although it is a more complex approach, you can use GZIP by _sharing_ the `.sql.gz` file using the `.docker/mnt` directory and importing it inside the Docker container.

## Connect to the database

There are two ways to connect to the database. Before you begin, you can find the database credentials in the `database` section of the `.docker/config.php` file. The examples use the following default credentials:

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
{: .no-copy}

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
   {: .no-copy}

{:.procedure}
To connect to the database:

1. Find the port used by the database. The port may change each time you restart Docker.

   ```bash
   docker-compose ps
   ```

   Sample response:

   ```terminal
             Name                         Command               State               Ports
   --------------------------------------------------------------------------------------------------
   mc-master_db_1              docker-entrypoint.sh mysqld      Up       0.0.0.0:32769->3306/tcp
   ```
   {: .no-copy}

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