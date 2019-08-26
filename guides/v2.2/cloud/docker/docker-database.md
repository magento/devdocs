---
group: cloud-guide
title: Connect to the database
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

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

#### To connect to the database using Docker commands:

1.  Connect to the CLI container.

    ```bash
    docker-compose run deploy bash
    ```

1.  Connect to the database with a username and password.

    ```bash
    mysql --host=db --user=magento2 --password=magento2
    ```

1.  Verify the version of the database service.

    ```mysql
    SELECT VERSION();
    +--------------------------+
    | VERSION()                |
    +--------------------------+
    | 10.0.38-MariaDB-1~xenial |
    +--------------------------+
    ```
    {: .no-copy}

#### To connect to the database:

1.  Find the port used by the database. The port may change each time you restart Docker.

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

1.  Connect to the database with port information from the previous step.

    ```bash
    mysql -h127.0.0.1 -p32769 -umagento2 -pmagento2
    ```

1.  Verify the version of the database service.

    ```mysql
    SELECT VERSION();
    +--------------------------+
    | VERSION()                |
    +--------------------------+
    | 10.0.38-MariaDB-1~xenial |
    +--------------------------+
    ```
    {: .no-copy}
