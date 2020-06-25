---
group: cloud-guide
title: Enable Magento split database solution
functional_areas:
- Cloud
- Setup
- Configuration
- Split database performance solution
---

The Split database performance solution improves scalability by providing three separate databases to manage different functional areas of the Magento application.  The following instructions show how to configure this solution in the {{site.data.var.mcd-prod}} environment, exporting the Magento Sales and Magento Quote data from the main database and creating two separate databases in the Cloud Docker environment.

{:.bs-callout-info}
See the [Magento split database performance solution][] topic in the _Configuration Guide_ for detailed information and extended examples.

{:.procedure}
To add split DB to {{site.data.var.ece}} project configuration:

1. In the root directory of your Magento project, add the database services to the `.magento/services.yaml` configuration file.

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

1. In the `.magento.app.yaml` file, add the relationships for the additional databases.

   ```yaml
   relationships:
       ...
       database-quote: "mysql-quote:mysql"
       database-sales: "mysql-sales:mysql"
      ...
   ```

1. Generate the Docker Compose configuration file.

   ```bash
   php vendor/bin/ece-docker build:compose
   ```

   {:.bs-callout-note}
   As with the 'db' container, you can use the options to set ports to forward to your local environment.

   ```bash
   php vendor/bin/ece-docker build:compose --expose-db-quote-port=<port for quote db service> --expose-db-sales-port=<port for sales db service>
   ```

1. Verify the updated database configuration in the  `./docker-compose.yml` file.

   ```terminal
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

1. Verify that the `./.docker/config.php.dist`  environment configuration file includes the updated database service configuration:

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

1. Build the containers and run in the background.

   ```bash
   docker-compose up -d
   ```

1. Confirm that the `db-quote` and `db-sales` database containers are running.

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

1. Verify that the `MAGENTO_CLOUD_RELATIONSHIPS` variable returns the database access credentials.

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

## Install Magento with the split database solution

After updating the Docker compose configuration file, you must specify the database tables to deploy to the separate database services, and then deploy Magento to the Cloud Docker environment.

{:.procedure}
To deploy Magento to the Cloud environment with the split database configuration:

1. In the `.magento.env.yaml` file in project root, add the `SPLIT_DB` property with the table names to import into the other data.

   ```yaml
   stage:
       deploy:
           SPLIT_DB:
               - quote
               - sales
   ```

1. Run the build phase of deployment process.

   ```bash
   docker-compose run build cloud-build
   ```

1. Run the deploy phase of deployment process.

   ```bash
   docker-compose run deploy cloud-deploy
   ```

1. After deployment, use the database credentials and port information to [manage each database][Manage the database].

<!--Link definitions-->
[Magento split database performance solution]: {{site.baseurl}}/guides/v2.3/config-guide/multi-master/multi-master.html
[Manage the database]: {{site.baseurl}}/cloud/docker/docker-manage-database.html
