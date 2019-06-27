---
group: cloud-guide
title: Services
functional_areas:
  - Cloud
  - Setup
---

Use the `services.yaml` file to configure all of your services supported and used by {{site.data.var.ece}}. These services include MySQL, Redis, ElasticSearch (for 2.1.X and later), and so on. You do not need to subscribe to external service providers.This file is located in the `.magento` directory in your project. See the latest sample of the [`services.yaml`](https://github.com/magento/magento-cloud/blob/master/.magento/services.yaml) file.

When you push your Git branch, our deploy script uses the values defined by configuration files in the `.magento` directory. After deployment, the script deletes the directory and its contents. Your local development environment is not affected.

{% include cloud/note-pro-using-yaml-support.md %}

## How this file works {#howitworks}

The `.magento.app.yaml` and `services.yaml` files set the services, applications, and configurations to build and include in an environment. If you add services with specific versions, the initial push and deployment of your branches with these updated files directs the PaaS environment to provision the environment with those services. When you make changes to the services, the environment updates.

This affects the following environments:

-  All Starter environments including Production `master`
-  Pro Integration environments

To install and update services in Pro Staging and Production environments (IaaS), you must enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html). Indicate the service changes needed and your updated `.magento.app.yaml` and `services.yaml` files in the ticket.

## Default services {#cloud-yaml-services-default}

The following is the default `services.yaml` file:

```yaml
mysql:
    type: mysql:10.0
    disk: 2048

redis:
    type: redis:3.0
```

Modify this file to use specific and additional services in your deployment. See the [`type`](#cloud-yaml-services-type) section to see the services we support and deploy for you if you add them to the file.

## Service values

To add a service, you add the following data to `services.yaml`:

```yaml
name:
    type: name:version
    disk: value
```

For example:

```yaml
mysql:
    type: mysql:10.0
    disk: 2048
```

### `name` {#cloud-yaml-services-name}

Identifies the service in the project. The `name` can consist only of lower case alphanumeric characters: `a` to `z` and `0` to `9`. For example, Redis is entered as `redis`.

You can have multiple instances of each service type. For example, you could have multiple Redis instances. For example, we use multiple Redis instances, one for session and one for cache.

```yaml
redis:
    type: redis:3.0

redis2:
    type: redis:3.0
```

Be aware, if you rename a service in the `services.yaml` file, the following is **permanently removed**:

-  The existing service before creating a new service with the new name you specify.
-  All existing data for the service is removed. We strongly recommend you [snapshot your environment]({{ page.baseurl }}/cloud/project/project-webint-snap.html) before you change the name of an existing service.

### `type` {#cloud-yaml-services-type}

The `type` of your service in the format: `type:version`

We support and deploy the following services:

-  [`mysql`]({{ page.baseurl }}/cloud/project/project-conf-files_services-mysql.html)
-  [`redis`]({{ page.baseurl }}/cloud/project/project-conf-files_services-redis.html)
-  [`elasticsearch`]({{ page.baseurl }}/cloud/project/project-conf-files_services-elastic.html)
-  [`rabbitmq`]({{ page.baseurl }}/cloud/project/project-conf-files_services-rabbit.html)

### `disk` {#cloud-yaml-services-disk}

Specifies the size of the persistent disk storage (in MB) allocated to the service.

For example, the current default storage amount per project is 5GB, or 5120MB. You can distribute this amount between your application and each of its services. See [relationships]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#relationships).

## Using the services

For services to be available to an application in your project, you must specify [*relationships*]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#relationships) between applications and services in `.magento.app.yaml`.
