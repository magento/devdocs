---
group: cloud-guide
title: Configure Split Databases for Docker
functional_areas:
- Cloud
- Setup
- Configuration
- Debug
- Split Databases
---

## Configure Split Databases for Docker
To prepare the configuration before deploying the split db architecture, you will need to modify several files:

1. Add the next database services to the config file `.magento/services.yaml`:

```yaml
 ...
mysql-quote:
    type: mysql:10.2
    disk: 512
mysql-sales:
    type: mysql:10.2
    disk: 512
 ...
```

4. Add the next relationships to the config file `.magento.app.yaml`:

```yaml
relationships:
    ...
    database-quote: "mysql-quote:mysql"
    database-sales: "mysql-sales:mysql"
   ...
```

5. Let's now generate the file by running the cli command:
```shell script
php vendor/bin/ece-docker build:compose
```
NOTES: As with the 'db' container, you can use the options to set the ports to forward to your local environment:
  
```shell script
php vendor/bin/ece-docker build:compose --expose-db-quote-port=<port for quotee db service> --expose-db-sales-port=<port for sales db service>
```

6. Аfter generation, open the file `./docker-compose.yml` and you will see that the configuration for database services has been added:

```shell script
$ cat  ./docker-compose.yml
...
services:
  ...
  db-quote:
    hostname: db-quote.magento2.docker
    image: 'mariadb:10.2'
    environment:
      - MYSQL_ROOT_PASSWORD=magento2
      - MYSQL_DATABASE=magento2
      - MYSQL_USER=magento2
      - MYSQL_PASSWORD=magento2
    ports:
      - '3306'
    volumes:
      - 'magento-db-quote:/var/lib/mysql'
      - 'docker-entrypoint-quote:/docker-entrypoint-initdb.d'
      - 'mariadb-conf:/etc/mysql/mariadb.conf.d'
      - 'docker-mnt:/mnt:delegated'
    networks:
      magento:
        aliases:
          - db-quote.magento2.docker
  db-sales:
    hostname: db-sales.magento2.docker
    image: 'mariadb:10.2'
    environment:
      - MYSQL_ROOT_PASSWORD=magento2
      - MYSQL_DATABASE=magento2
      - MYSQL_USER=magento2
      - MYSQL_PASSWORD=magento2
    ports:
      - '3306'
    volumes:
      - 'magento-db-sales:/var/lib/mysql'
      - 'docker-entrypoint-sales:/docker-entrypoint-initdb.d'
      - 'mariadb-conf:/etc/mysql/mariadb.conf.d'
      - 'docker-mnt:/mnt:delegated'
    networks:
      magento:
        aliases:
          - db-sales.magento2.docker
...
```
     
6. The file `./.docker/config.php.dist` was generated with next configurations:

```php
<?php

return [
    'MAGENTO_CLOUD_RELATIONSHIPS' => base64_encode(json_encode([
       //...
        'database-sales' => [
            [
                'host' => 'db-sales',
                'path' => 'magento2',
                'password' => 'magento2',
                'username' => 'magento2',
                'port' => '3306'
            ]
        ],
        'database-quote' => [
            [
                'host' => 'db-quote',
                'path' => 'magento2',
                'password' => 'magento2',
                'username' => 'magento2',
                'port' => '3306'
            ]
        ],
    ])),
   //...
];
```

7. Run 

```shell script
docker-compose up -d
```

8. Run command 

```shell script
docker-compose run deploy bash
```

9. In the environment variable, 'MAGENTO_CLOUD_RELATIONSHIPS' of "deploy" service has also added data to access new database services. 
Run command in the container: ` echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp `:

```json
{
   "database-quote" : [
      {
         "host" : "db-quote",
         "port" : "3306",
         "path" : "magento2",
         "username" : "magento2",
         "password" : "magento2"
      }
   ],
   "database-sales" : [
      {
         "path" : "magento2",
         "port" : "3306",
         "username" : "magento2",
         "host" : "db-sales",
         "password" : "magento2"
      }
   ]
}
 ```

10. Yuo can use this credentials to connect to DB services
11. Exit from container and run `docker-compose ps`:

```shell script
docker-compose ps
            Name                           Command                  State                Ports
-------------------------------------------------------------------------------------------------------
...
magento-cloud_db-quote_1        docker-entrypoint.sh mysqld      Up             0.0.0.0:32873->3306/tcp
magento-cloud_db-sales_1        docker-entrypoint.sh mysqld      Up             0.0.0.0:32874->3306/tcp
magento-cloud_db_1              docker-entrypoint.sh mysqld      Up             0.0.0.0:32872->3306/tcp
...
```

12. Yuo can use this ports to connect to DB services from your host
 
Now everything is ready to install Magento with Split Databases


   ![Xdebug Helper options]({{ site.baseurl }}/common/images/cloud-xdebug_helper-options.png){:width="400px"}

[docker-config]: {{site.baseurl}}/cloud/docker/docker-config.html
[Xdebug Helper extension]: https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc?hl=en