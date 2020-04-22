---
group: cloud-guide
title: Prepare Magento Cloud Docker to deploy Magento split database performance solution
functional_areas:
- Cloud
- Setup
- Configuration
- Split database performance solution
---

## Prepare Magento Cloud Docker to deploy Magento split database performance solution
To prepare the configuration before deploying the split db architecture, you must modify several files:

1. Add the following database services to the `.magento/services.yaml` configuration file:

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

2. In the `magento.app.yaml` file, add the relationships for the additional databases:

```yaml
relationships:
    ...
    database-quote: "mysql-quote:mysql"
    database-sales: "mysql-sales:mysql"
   ...
```

3. Generate the Docker Compose configuration file:
```bash
php vendor/bin/ece-docker build:compose
```
NOTES: As with the 'db' container, you can use the options to set the ports to forward to your local environment:
  
```bash
php vendor/bin/ece-docker build:compose --expose-db-quote-port=<port for quotee db service> --expose-db-sales-port=<port for sales db service>
```

4. Аfter generation, open the file `./docker-compose.yml` and you will see that the configuration for database services has been added:

```bash
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
     
5.  Verify that the `./.docker/config.php.dist`  environment configuration file includes the updated database service configuration:

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

6. Run containers

```bash
docker-compose up -d
```

7. Ensure that additional database containers are running. The "db-quote" and "db-sales" containers must be present:

```bash
docker-compose ps
            Name                           Command                  State                Ports
-------------------------------------------------------------------------------------------------------
...
magento-cloud_db-quote_1        docker-entrypoint.sh mysqld      Up             0.0.0.0:32873->3306/tcp
magento-cloud_db-sales_1        docker-entrypoint.sh mysqld      Up             0.0.0.0:32874->3306/tcp
magento-cloud_db_1              docker-entrypoint.sh mysqld      Up             0.0.0.0:32872->3306/tcp
...
```

8. In the environment variable 'MAGENTO_CLOUD_RELATIONSHIPS' of "deploy" service has also added data about credentials to access new database services. 

```bash
docker-compose run deploy bash -c "echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp"
```

Expected result:

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
 
Now everything is ready to install Magento with Split Databases