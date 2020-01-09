---
group: cloud-guide
title: Services
functional_areas:
  - Cloud
  - Setup
---

The `services.yaml` file defines the services supported and used by {{site.data.var.ece}}, such as MySQL, Redis, and ElasticSearch. You do not need to subscribe to external service providers. This file is in the `.magento` directory of your project.

The deploy script uses the configuration files in the `.magento` directory to provision the environment with the configured services. A service becomes available to your application if it is included in the `relationships` property of the `.magento.app.yaml` file. The `services.yaml` file contains the _type_ and _disk_ values. Service type defines the service _name_ and _version_. Changing a service configuration causes a deployment to provision the environment with the updated services.

This affects the following environments:

-  All Starter environments including Production `master`
-  Pro Integration environments

{:.bs-callout-tip}
For Pro, you must enter a [Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) to install or update services in the Staging and Production environments. Indicate the service changes needed and include your updated `.magento.app.yaml` and `services.yaml` files in the ticket.

## Default and supported services

We support and deploy the following services:

-  [`mysql`]({{ site.baseurl }}/cloud/project/project-conf-files_services-mysql.html)
-  [`redis`]({{ site.baseurl }}/cloud/project/project-conf-files_services-redis.html)
-  [`elasticsearch`]({{ site.baseurl }}/cloud/project/project-conf-files_services-elastic.html)
-  [`rabbitmq`]({{ site.baseurl }}/cloud/project/project-conf-files_services-rabbit.html)

You can view default versions and disk values in the the current, [default `services.yaml` file](https://github.com/magento/magento-cloud/blob/master/.magento/services.yaml). The following sample shows the `mysql`, `redis`, and `elasticsearch` services defined in the `services.yaml` configuration file:

```yaml
mysql:
    type: mysql:<version>
    disk: 2048

redis:
    type: redis:<version>

elasticsearch:
    type: elasticsearch:<version>
    disk: 1024
```

## Service values

You must provide the _type_ values: service _name_ and _version_. If the service uses persistent storage, then you must provide a _disk_ value. Use the following format:

```yaml
<name>:
    type: <name>:<version>
    disk: <value-MB>
```

### `name`

The `name` value identifies the service in the project. You can only use lower case alphanumeric characters: `a` to `z` and `0` to `9`, such as `redis`.

This _name_ value is used in the `relationships` property of the `.magento.app.yaml` configuration file:

```yaml
relationships:
    redis: "<name>:redis"
```

You can name multiple instances of each service type. For example, we could use multiple Redis instances—one for session and one for cache.

```yaml
redis:
    type: redis:<version>

redis2:
    type: redis:<version>
```

Renaming a service in the `services.yaml` file **permanently removes** the following:

-  The existing service before creating a new service with the new name you specify.
-  All existing data for the service is removed. We strongly recommend you [snapshot your environment]({{ site.baseurl }}/cloud/project/project-webint-snap.html) before you change the name of an existing service.

### `type`

The `type` value specifies the service name and version. For example:

```yaml
mysql:
    type: mysql:10.2
```

### `disk`

The `disk` value specifies the size of the persistent disk storage (in MB) to allocate to the service. Services that use persistent storage, such as MySQL, must provide a disk value. Services that use memory instead of persistent storage, such as Redis, do not require a disk value.

```yaml
mysql:
    type: mysql:10.2
    disk: 2048
```

The current default storage amount per project is 5GB, or 5120MB. You can distribute this amount between your application and each of its services.

## Service relationships

In {{ site.data.var.ece }} projects, service [*relationships*]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#relationships) configured in the `.magento.app.yaml` file determine which services are available to your application.

You can retrieve the configuration data for all service relationships from the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ site.baseurl }}/cloud/env/variables-cloud.html) environment variable. The configuration data includes service name, type, and version along with any required connection details such as port number and login credentials.

{:.procedure}
To verify relationships in local environment:

1. In your local environment, show the relationships for the active environment.

   ```bash
   magento-cloud relationships
   ```

1. Confirm the `service` and `type` from the response. The response provides connection information, such as the IP address and port number.

   **Abbreviated sample response**:

   ```terminal
   redis:
       -
   ...
           type: 'redis:3.2'
           port: 6379
   elasticsearch:
       -
   ...
           type: 'elasticsearch:6.5'
           port: 9200
   database:
       -
   ...
           type: 'mysql:10.0'
           port: 3306
   ```

{:.procedure}
To verify relationships in remote environments:

1. Use SSH to log in to the remote environment.

1. List the relationships configuration data for all services configured in the environment.

   ```bash
   echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
   ```

   or

   ```bash
   php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
   ```

1. Confirm the `service` and `type` from the response. The response provides connection information, such as the IP address and port number and any required username and password credentials.

## Service versions

The following table lists the services used in {{site.data.var.ece}} and their version compatibility with the [Magento Cloud template](https://github.com/magento/magento-cloud).

Service   |  Magento 2.3  | Magento 2.2
--------- | ------------- | ------------
`elasticsearch` | Magento 2.3.1 and later—1.7, 2.4, 5.2, 6.5<br>Magento 2.3.0—1.7, 2.4, 5.2 | Magento versions 2.2.8 and later—1.7, 2.4, 5.2, 6.5<br>Magento 2.2.0 to 2.2.7—1.7, 2.4, 5.2
`mariadb` | 10.0 to 10.2  | 10.0 to 10.2
`nginx`   | 1.9           | 1.9
`node`    | 6, 8, 10, 11  | 6, 8, 10, 11
`php`     | Magento 2.3.3 and later—7.1, 7.2, 7.3<br>Magento 2.3.0 to 2.3.2—7.1, 7.2 | Magento 2.2.10 and later—7.1, 7.2<br>Magento 2.2.5 to 2.2.9—7.0, 7.1<br>Magento 2.2.4 and earlier—7.0.2, 7.0.4, ~7.0.6, 7.1<br><br>**Note:** Beginning with {{ site.data.var.ct }} v2002.1.0, you must use PHP version 7.1.3 or later for both Magento 2.2 and 2.3.
`rabbitmq`| 3.5, 3.7, 3.8      | 3.5
`redis`   | 3.2, 4.0, 5.0 | 3.2, 4.0, 5.0
`varnish` | Magento 2.3.3 and later—4.0, 5.0, 6.2<br>Magento 2.3.0 to 2.3.2—4.0, 5.0 | 4.0, 5.0

{:.bs-callout-info}
When you set up the Elasticsearch service, check to ensure that you use a version that is compatible with the installed [Elasticsearch PHP](https://github.com/elastic/elasticsearch-php) client. See [Check Elasticsearch software compatibility]({{ site.baseurl }}/cloud/project/project-conf-files_services-elastic.html#elasticsearch-software-compatibility).
