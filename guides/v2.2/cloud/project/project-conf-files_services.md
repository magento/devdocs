---
group: cloud-guide
title: Services
functional_areas:
  - Cloud
  - Setup
---

The `services.yaml` file defines the services supported and used by {{site.data.var.ece}}, such as MySQL, Redis, and ElasticSearch. You do not need to subscribe to external service providers. This file is in the `.magento` directory of your project.

The deploy script uses the configuration files in the `.magento` directory to provision the environment with the configured services. A service becomes available to your application if it is included in the `relationships` property of the `.magento.app.yaml` file. The `services.yaml` file contains the service _name_, _type_, and _disk_ values. Changing a service configuration causes a deployment to provision the environment with the updated services.

This affects the following environments:

-  All Starter environments including Production `master`
-  Pro Integration environments

{:.bs-callout-tip}
For Pro, you must enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to install or update services in the Staging and Production environments. Indicate the service changes needed and include your updated `.magento.app.yaml` and `services.yaml` files in the ticket.

## Default and supported services

We support and deploy the following services:

-  [`mysql`]({{ page.baseurl }}/cloud/project/project-conf-files_services-mysql.html)
-  [`redis`]({{ page.baseurl }}/cloud/project/project-conf-files_services-redis.html)
-  [`elasticsearch`]({{ page.baseurl }}/cloud/project/project-conf-files_services-elastic.html)
-  [`rabbitmq`]({{ page.baseurl }}/cloud/project/project-conf-files_services-rabbit.html)

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

Minimally, you must provide a `name` and `type` value for each service. If the service uses persistent storage, then you must provide a `disk` value. Use the following format:

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
-  All existing data for the service is removed. We strongly recommend you [snapshot your environment]({{ page.baseurl }}/cloud/project/project-webint-snap.html) before you change the name of an existing service.

### `type`

The `type` value specifies the version of the service. For example:

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

{{site.data.var.ece}} uses the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}/cloud/env/environment-vars_cloud.html) environment variable to retrieve environment-related relationships. For services to be available to an application in your project, you must specify [*relationships*]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#relationships) between applications and services in the `.magento.app.yaml` file.

#### To verify relationships in local environment:

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
    {:.no-copy}

#### To verify relationships in remote environments:

1. Use SSH to log in to the remote environment.

1. Create `pretty-print` to show all relationships for services and configuration data for that environment.

    ```bash
    php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
    ```

1. Confirm the `service` and `type` from the response. The response provides connection information, such as the IP address and port number.
