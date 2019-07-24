---
group: cloud-guide
title: Services
functional_areas:
  - Cloud
  - Setup
---

The `services.yaml` file defines the services supported and used by {{site.data.var.ece}}, such as MySQL, Redis, and ElasticSearch. You do not need to subscribe to external service providers. This file is in the `.magento` directory of your project.

The deploy script uses the values defined in configuration files in the `.magento` directory. After deployment, the script deletes the directory and its contents. Your local development environment is not affected.

{% include cloud/note-pro-using-yaml-support.md %}

## How this file works {#howitworks}

A service becomes available to your application when configure in the `relationships` property of the `.magento.app.yaml` file. The `.magento.app.yaml` and `services.yaml` files set the services, applications, and configurations to build and include in an environment. Changing a service causes a deployment to provision the environment with the update services.

This affects the following environments:

-  All Starter environments including Production `master`
-  Pro Integration environments

{:.bs-callout-tip}
For Pro, you must enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to install or update services in the Staging and Production environments. Indicate the service changes needed and your updated `.magento.app.yaml` and `services.yaml` files in the ticket.

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

You must provide name and type for each service, and a disk value if the service uses persistent storage. For example:

```yaml
name:
    type: name:<version>
    disk: value
```

### `name`

The `name` value identifies the service in the project and consists only of lower case alphanumeric characters: `a` to `z` and `0` to `9`, such as `redis`. You can have multiple instances of each service type. For example, we use multiple Redis instances, one for session and one for cache.

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

The `type` value specifies the version of your service. Use the format: `type:version`

### `disk`

The `disk` value specifies the size of the persistent disk storage (in MB) to allocate to the service. Services that use persistent storage must provide a disk value.

For example, the current default storage amount per project is 5GB, or 5120MB. You can distribute this amount between your application and each of its services.

## Using the services

For services to be available to an application in your project, you must specify [*relationships*]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#relationships) between applications and services in the `.magento.app.yaml` file.
