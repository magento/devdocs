---
group: cloud-guide
title: Configure services
functional_areas:
  - Cloud
  - Setup
redirect_from:
  - /cloud/project/project-conf-files_services.html
---

The `services.yaml` file defines the services supported and used by {{site.data.var.ece}}, such as MySQL, Redis, and ElasticSearch. You do not need to subscribe to external service providers. This file is in the `.magento` directory of your project.

The deploy script uses the configuration files in the `.magento` directory to provision the environment with the configured services. A service becomes available to your application if it is included in the [`relationships`]({{ site.baseurl }}/cloud/project/magento-app-properties.html#relationships) property of the `.magento.app.yaml` file. The `services.yaml` file contains the _type_ and _disk_ values. Service type defines the service _name_ and _version_.

Changing a service configuration causes a deployment to provision the environment with the updated services, which affects the following environments:

-  All Starter environments including Production `master`
-  Pro Integration environments

{%include cloud/note-pro-using-yaml-support.md%}

## Default and supported services

The cloud infrastructure supports and deploys the following services:

-  [`mysql`]({{ site.baseurl }}/cloud/project/services-mysql.html)
-  [`redis`]({{ site.baseurl }}/cloud/project/services-redis.html)
-  [`elasticsearch`]({{ site.baseurl }}/cloud/project/services-elastic.html)
-  [`rabbitmq`]({{ site.baseurl }}/cloud/project/services-rabbit.html)

You can view default versions and disk values in the current, [default `services.yaml` file](https://github.com/magento/magento-cloud/blob/master/.magento/services.yaml). The following sample shows the `mysql`, `redis`, and `elasticsearch` services defined in the `services.yaml` configuration file:

```yaml
mysql:
    type: mysql:<version>
    disk: 5120

redis:
    type: redis:<version>

elasticsearch:
    type: elasticsearch:<version>
    disk: 1024
```

## Service values

You must provide the <service-id> and service type configuration `type: <name>:<version>`.
If the service uses persistent storage, then you must provide a _disk_ value.

Use the following format:

```yaml
<service-id>:
    type: <name>:<version>
    disk: <value-MB>
```

### `service-id`

The `service-id` value identifies the service in the project. You can only use lower case alphanumeric characters: `a` to `z` and `0` to `9`, such as `redis`.

This _service-id_ value is used in the [`relationships`]({{ site.baseurl }}/cloud/project/magento-app-properties.html#relationships) property of the `.magento.app.yaml` configuration file:

```yaml
relationships:
    redis: "<name>:redis"
```

You can name multiple instances of each service type. For example, you could use multiple Redis instances—one for session and one for cache.

```yaml
redis:
    type: redis:<version>

redis2:
    type: redis:<version>
```

Renaming a service in the `services.yaml` file **permanently removes** the following:

-  The existing service before creating a service with the new name you specify.
-  All existing data for the service is removed. Adobe strongly recommends that you [snapshot your environment]({{ site.baseurl }}/cloud/project/project-webint-snap.html) before you change the name of an existing service.

### `type`

The `type` value specifies the service name and version. For example:

```yaml
mysql:
    type: mysql:10.3
```

Use [`Service versions`](#service-versions) table to see supported services and their versions

### `disk`

The `disk` value specifies the size of the persistent disk storage (in MB) to allocate to the service. Services that use persistent storage, such as MySQL, must provide a disk value. Services that use memory instead of persistent storage, such as Redis, do not require a disk value.

```yaml
mysql:
    type: mysql:10.3
    disk: 5120
```

The current default storage amount per project is 5GB, or 5120MB. You can distribute this amount between your application and each of its services.

## Service relationships

In {{ site.data.var.ece }} projects, service [*relationships*]({{ site.baseurl }}/cloud/project/magento-app-properties.html#relationships) configured in the `.magento.app.yaml` file determine which services are available to your application.

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
           type: 'redis:3.8'
           port: 6379
   elasticsearch:
       -
   ...
           type: 'elasticsearch:6.6'
           port: 9200
   database:
       -
   ...
           type: 'mysql:10.3'
           port: 3306
   ```

{:.procedure}
To verify relationships in remote environments:

1. Use SSH to log in to the remote environment.

1. List the relationships configuration data for all services configured in the environment.

   ```bash
   echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
   ```

   or, use the following {{ site.data.var.ct }} CLI command to view relationships:

   ```bash
   php ./vendor/bin/ece-tools env:config:show services
   ```

1. Confirm the `service` and `type` from the response. The response provides connection information, such as the IP address and port number and any required username and password credentials.

## Service versions

{%include cloud/note-cloud-services-compatibility.md%}

The following table lists the services used in {{site.data.var.ece}} and the service version compatibility with the [Magento Cloud template](https://github.com/magento/magento-cloud). The {{site.data.var.ee}} columns show the service versions that are compatible with that latest version for {{site.data.var.ee}}. The **Version Notes** column specifically calls out compatibility differences from latest, and any other relevant service compatibility notes.

{:.error-table}
| Service         | {{site.data.var.ee}} 2.4 | {{site.data.var.ee}} 2.3  | {{site.data.var.ee}} 2.2   | Version Notes                             |
| --------------- | ------------------------ | ------------------------- | -------------------------- | ----------------------------------------- |
| `elasticsearch` | 7.7, 7.9                 | 6.8, 7.5, 7.7, 7.9        | 5.2, 6.5                   | **Commerce 2.3.1 to 2.3.4**— 5.2, 6.5<br>**Commerce 2.3.0**— 5.2<br>**Commerce 2.2.0 to 2.2.7**— 5.2 |
| `mariadb`       | 10.2 to 10.4             | 10.1 to 10.3              | 10.1 to 10.2               | **Commerce 2.3.0 to 2.3.5**— 10.1 to 10.2 |
| `nginx`         | 1.9                      | 1.9                       | 1.9                        |                                           |
| `node`          | 6, 8, 10, 11             | 6, 8, 10, 11              | 6, 8, 10, 11               | Node.js is managed in the `.magento.app.yaml` [dependencies]({{site.baseurl}}/cloud/project/magento-app-properties.html#dependencies) property. |
| `php`           | 7.3, 7.4                 | 7.2, 7.3, 7.4             | 7.1, 7.2                   | **Note:** Beginning with {{ site.data.var.ct }} v2002.1.0, you must use PHP template version 7.1.3 or later for both 2.2 and 2.3.<br><br>**Commerce 2.3.3**— 7.1, 7.2, 7.3<br>**Commerce 2.3.0 to 2.3.2**— 7.1, 7.2 <br>**Commerce 2.2.5 to 2.2.9**— 7.0, 7.1<br>**Commerce 2.2.4 and earlier**— 7.0.2, 7.0.4, ~7.0.6, 7.1 |
| `rabbitmq`      | 3.8                      | 3.7, 3.8                  | 3.5                        | **Commerce 2.3.0 to 2.3.3**— 3.7          |
| `redis`         | 5.x, 6.x                 | 5.x, 6.x                  | 3.2, 5.0, 6.x              | **Commerce 2.3.0**— 3.2                   |
| `varnish`       | 6.x                      | 4.0, 5.0, 6.2             | 4.0, 5.0                   | **Note:** You must use the [Fastly service]({{site.baseurl}}/cloud/cdn/cloud-fastly.html) for caching. Varnish is available only for local development.<br><br>**Commerce 2.3.0 to 2.3.2**— 4.0, 5.0 |

{:.bs-callout-info}
When you set up the Elasticsearch service, check to ensure that you use a version that is compatible with the installed [Elasticsearch PHP](https://github.com/elastic/elasticsearch-php) client. See [Check Elasticsearch software compatibility]({{ site.baseurl }}/cloud/project/services-elastic.html#elasticsearch-software-compatibility).

### Software EOL checks

During the deployment process, {{site.data.var.ct}} checks installed service versions against the end-of-life (EOL) dates for each service.

-  If a service version is within three months of the EOL date, a notification displays in the deploy log.
-  If the EOL date is in the past, a warning notification displays.

To maintain store security, update installed software versions before they reach EOL. You can review the EOL dates in the [{{ site.data.var.ct }} `eol.yaml` file](https://github.com/magento/ece-tools/blob/develop/config/eol.yaml).

## Change service version

You can upgrade the installed service version for compatibility with the {{site.data.var.ee}} version deployed in your Cloud environment.

You cannot downgrade the service version for an installed service directly. However, you can create a service with the required version. See [Downgrade service version](#downgrade-version).

Use the [Service versions](#service-versions) table to check service version compatibility by {{site.data.var.ee}} version. Some service versions supported by {{ site.data.var.ee }} are not supported on {{ site.data.var.ece }}.

### Upgrade installed service version

You can upgrade the installed service version by updating the service configuration in the `services.yaml` file.

1. Change the [`type`](#type) value for the service in the `.magento/services.yaml` file:

   > Original service definition

   ```yaml
   mysql:
       type: mysql:10.2
       disk: 2048
   ```

   > Updated service definition

   ```yaml
   mysql:
       type: mysql:10.3
       disk: 5120
   ```

1. Add, commit, and push your code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Upgrade MySQL from MariaDB 10.2 to 10.3."
   ```

   ```bash
   git push origin <branch-name>
   ```

### Downgrade version

You cannot downgrade an installed service directly. You have two options:

-  Rename an existing service with the new version, which removes the existing service and data, and adds a new one.

-  Create a service and save the data from the existing service.

When you change the service version, you must update the service configuration in the `services.yaml` file, and update the relationships in the `.magento.app.yaml` file.

{:.procedure}
To downgrade a service version by renaming an existing service:

1. Rename the existing service in the `.magento/services.yaml` file and change the version.

   {:.bs-callout-warning}
   Renaming an existing service replaces it and deletes all data. If you need to retain the data, create a service instead of renaming the existing one.

   For example, to downgrade the MariaDB version for the _mysql_ service from version 10.3 to 10.2, change the existing  _service-id_ and _type_ configuration.

   > Original `services.yaml` definition

     ```yaml
     mysql:
         type: mysql:10.4
         disk: 5120
     ```

   > New `services.yaml` definition

     ```yaml
     mysql2:
          type: mysql:10.3
          disk: 5120
     ```

1. Update the relationships in the `.magento.app.yaml` file.

   > Original `.magento.app.yaml` configuration

   ```yaml
   relationships:
       database: "mysql:mysql"
   ```

   > Updated `.magento.app.yaml` configuration

   ```yaml
   relationships:
       database: "mysql2:mysql"
   ```

1. Add, commit, and push your code changes.

{:.procedure}
To downgrade a service by creating an additional service:

1. Add an additional service definition to the `services.yaml` file for your project with the downgraded version specification. See _mysql2_ in the following example:

   > services.yaml

   ```yaml
   mysql:
       type: mysql:10.4
       disk: 5120
   mysql2:
       type: mysql:10.3
       disk: 5120
   ```

1. Change the relationships configuration in the `.magento.app.yaml` file to use the new service.

   > Original `.magento.app.yaml` configuration

     ```yaml
     relationships:
         database: "mysql:mysql"
     ```

   > New `.magento.app.yaml` configuration

     ```yaml
     relationships:
         database: "mysql2:mysql"
     ```

1. Add, commit, and push your code changes.

<!--Custom column widths for service version table-->
<style>
table.error-table td:nth-child(1) {
  width: 100px;
}
table.error-table td:nth-child(2) {
  width: 100px;

table.error-table td:nth-child(3) {
  width: 200px;
}
</style>
