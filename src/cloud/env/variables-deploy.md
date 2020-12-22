---
group: cloud-guide
title: Deploy variables
functional_areas:
  - Cloud
  - Configuration
redirect_from: 
  - /cloud/trouble/message-queues.html
---

The following _deploy_ variables control actions in the deploy phase and can inherit and override values from the [Global variables]({{ site.baseurl }}/cloud/env/variables-global.html). Insert these variables in the `deploy` stage of the `.magento.env.yaml` file:

```yaml
stage:
  deploy:
    DEPLOY_VARIABLE_NAME: value
```

{% include cloud/customize-build-deploy.md %}

### `CACHE_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Configure Redis page and default caching. When setting the `cm_cache_backend_redis` parameter, you must specify the `server`, `port`, and `database` options.

```yaml
stage:
  deploy:
    CACHE_CONFIGURATION:
      frontend:
        default:
          backend: file
        page_cache:
          backend: file
```

{% include cloud/merge-configuration.md %}

The following example merges new values to an existing configuration:

```yaml
stage:
  deploy:
    CACHE_CONFIGURATION:
      _merge: true
      frontend:
        default:
          backend:
            database: 10
        page_cache:
          backend:
            database: 11
```

If the _REDIS_BACKEND_ variable specifies  `\Magento\Framework\Cache\Backend\RemoteSynchronizedCache`for the backend model, you must use the following configuration structure:

```php
'cache' => [
    'frontend' => [
        'default' => [
             'backend' => '\\Magento\\Framework\\Cache\\Backend\\RemoteSynchronizedCache',
             'backend_options' => [
                 'remote_backend' => '\\Magento\\Framework\\Cache\\Backend\\Redis',
                 'remote_backend_options' => [
                     'persistent' => 0,
                     'server' => 'localhost',
                     'database' => '0',
                     'port' => '6370',
                     'password' => '',
                     'compress_data' => '1',
                 ],
                 'local_backend' => 'Cm_Cache_Backend_File',
                 'local_backend_options' => [
                     'cache_dir' => '/dev/shm/'
                 ]
             ],
             'frontend_options' => [
                 'write_control' => false,
             ],
         ]
    ],
    'type' => [
        'default' => ['frontend' => 'default'],
    ],
]
```

### `CLEAN_STATIC_FILES`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

Enables or disables cleaning [static content files]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview) generated during the build or deploy phase. We recommend the default value _true_ in development.

-  **`true`**—Removes all existing static content before deploying the updated static content.
-  **`false`**—The deployment only overwrites existing static content files if the generated content contains a newer version.

If you make modifications to static content through a separate process, set the value to _false_.

```yaml
stage:
  deploy:
    CLEAN_STATIC_FILES: false
```

Failure to clean static view files before deploying can cause problems if you
deploy updates to existing files without removing the previous versions. Because of [static file fallback]({{ site.baseurl }}/guides/v2.3/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache) rules, fallback operations can display the wrong file if the directory contains multiple versions of the same file.

### `CRON_CONSUMERS_RUNNER`

-  **Default**—`cron_run = false`, `max_messages = 1000`
-  **Version**—Magento 2.2.0 and later

Use this environment variable to confirm message queues are running after a deployment.

-  `cron_run`—A boolean value that enables or disables the `consumers_runner` cron job (default = `false`).
-  `max_messages`—A number specifying the maximum number of messages each consumer must process before terminating (default = `1000`). Although we do not recommend it, you can use `0` to prevent the consumer from terminating.
-  `consumers`—An array of strings specifying which consumer(s) to run. An empty array runs _all_ consumers.

```yaml
stage:
  deploy:
    CRON_CONSUMERS_RUNNER:
      cron_run: true
      max_messages: 1000
      consumers:
        - consumer1
        - consumer2
```

By default, the deployment process overwrites all settings in the `env.php` file. Refer to [Manage message queues]({{ site.baseurl }}/guides/v2.3/config-guide/mq/manage-message-queues.html) for more information about how this works in {{site.data.var.ce}} and {{site.data.var.ee}}.

The following command returns a list of message queue consumers:

```bash
./bin/magento queue:consumers:list
```

### `CONSUMERS_WAIT_FOR_MAX_MESSAGES`

-  **Default**—`false`
-  **Version**—Magento 2.2.0 and later

Configure how consumers process messages from the message queue by choosing one of the following options:

-  `false`—Consumers process available messages in the queue, close the TCP connection, and terminate. Consumers do not wait for additional messages to enter the queue, even if the number of processed messages is less than the `max_messages` value specified in the `CRON_CONSUMERS_RUNNER` deploy variable.

-  `true`—Consumers continue to process messages from the message queue until reaching the maximum number of messages (`max_messages`) specified in the `CRON_CONSUMERS_RUNNER` deploy variable before closing the TCP connection and terminating the consumer process. If the queue empties before reaching `max_messages`, the consumer waits for more messages to arrive.

{:.bs-callout-warning}
If you use workers to run consumers instead of using a cron job, set this variable to true.

```yaml
stage:
  deploy:
    CONSUMERS_WAIT_FOR_MAX_MESSAGES: false
```

### `CRYPT_KEY`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

{:.bs-callout-warning}
You must set the `CRYPT_KEY` value through the Project Web UI instead of the `.magento.env.yaml` file to avoid exposing the key in the source code repository for your environment. See [Set environment and project variables]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).

When you move the database from one environment to another without an installation process, you need the corresponding cryptographic information. Magento uses the encryption key value set in the Web UI as the `crypt/key` value in the `env.php` file.

### `DATABASE_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

If you defined a database in the [relationships property]({{ site.baseurl }}/cloud/project/magento-app-properties.html#relationships) of the `.magento.app.yaml` file, you can customize your database connections for deployment.

```yaml
stage:
  deploy:
    DATABASE_CONFIGURATION:
      some_config: 'some_value'
```

{% include cloud/merge-configuration.md %}

The following example merges new values to an existing configuration:

```yaml
stage:
  deploy:
    DATABASE_CONFIGURATION:
      some_config: 'some_new_value'
      _merge: true
```

Also, you can configure a table prefix.

{:.bs-callout-warning}
If you do not use the merge option with the table prefix, you must provide default connection settings or the deploy fails validation.

The following example uses the `ece_` table prefix with default connection settings instead of using the `_merge` option:

```yaml
stage:
  deploy:
    DATABASE_CONFIGURATION:
      connection:
        default:
          username: user
          host: host
          dbname: magento
          password: password
      table_prefix: 'ece_'
```

Sample output:

```terminal
MariaDB [main]> SHOW TABLES;
+-------------------------------------+
| Tables_in_main                      |
+-------------------------------------+
| ece_admin_passwords                 |
| ece_admin_system_messages           |
| ece_admin_user                      |
| ece_admin_user_session              |
| ece_adminnotification_inbox         |
| ece_amazon_customer                 |
| ece_authorization_rule              |
| ece_cache                           |
| ece_cache_tag                       |
| ece_captcha_log                     |
...
```
{:.no-copy}

### `ELASTICSUITE_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.2.0 and later

Retains customized ElasticSuite service settings between deployments and uses it in the 'system/default/smile_elasticsuite_core_base_settings' section of the main ElasticSuite configuration. If the ElasticSuite composer package is installed, this is configured automatically.

```yaml
stage:
  deploy:
    ELASTICSUITE_CONFIGURATION:
      es_client:
        servers: 'remote-host:9200'
      indices_settings:
        number_of_shards: 1
        number_of_replicas: 0
```

{% include cloud/merge-configuration.md %}

The following example merges a new value to the existing configuration:

```yaml
stage:
  deploy:
    ELASTICSUITE_CONFIGURATION:
      indices_settings:
        number_of_shards: 3
        number_of_replicas: 3
      _merge: true
```

**Known limitations**—

-  Changing the search engine to any type other than `elasticsuite` causes a deploy failure accompanied by an appropriate validation error
-  Removing the ElasticSearch service causes a deploy failure accompanied by an appropriate validation error

{:.bs-callout-info}
For details on using or troubleshooting the Elasticsuite plugin with Magento, see the [Elasticsuite documentation](https://github.com/Smile-SA/elasticsuite).

### `ENABLE_GOOGLE_ANALYTICS`

-  **Default**—`false`
-  **Version**—Magento 2.1.4 and later

Enables and disables Google Analytics when deploying to Staging and Integration environments. By default, Google Analytics is true only for the Production environment. Set this value to `true` to enable Google Analytics in the Staging and Integration environments.

-  **`true`**—Enables Google Analytics on Staging and Integration environments.
-  **`false`**—Disables Google Analytics on Staging and Integration environments.

Add the `ENABLE_GOOGLE_ANALYTICS` environment variable to the `deploy` stage in the `.magento.env.yaml` file:

```yaml
stage:
  deploy:
    ENABLE_GOOGLE_ANALYTICS: true
```

{:.bs-callout-info}
The {{ site.data.var.ece }} deploy process always enables Google Analytics on Production environments.

### `FORCE_UPDATE_URLS`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

On deployment to Pro or Starter Staging and Production environments, this variable replaces Magento base URLs in the database with the project URLs specified by the [`MAGENTO_CLOUD_ROUTES`]({{ site.baseurl }}/cloud/env/variables-cloud.html) variable. Use this setting to override the default behavior of the [UPDATE_URLS](#update_urls) deploy variable which is ignored when deploying to Staging or Production environments.

```yaml
stage:
  deploy:
    FORCE_UPDATE_URLS: true
```

### `LOCK_PROVIDER`

-  **Default**—`file`
-  **Version**—Magento 2.2.5 and later

The lock provider prevents the launch of duplicate cron jobs and cron groups. You must use the `file` lock provider in the Production environment. Starter environments and the Pro Integration environment do not use the [MAGENTO_CLOUD_LOCKS_DIR]({{ site.baseurl }}/cloud/env/variables-cloud.html) variable, so `{{site.data.var.ct}}` applies the `db` lock provider automatically.

```yaml
stage:
  deploy:
    LOCK_PROVIDER: "db"
```

See [Configure the lock]({{site.baseurl}}/guides/v2.3/install-gde/install/cli/install-cli-subcommands-lock.html) in the _Install guide_.

### `MYSQL_USE_SLAVE_CONNECTION`

-  **Default**—`false`
-  **Version**—Magento 2.1.4 and later

Magento can read multiple databases asynchronously. Set to `true` to automatically use a _read-only_ connection to the database to receive read-only traffic on a non-master node. This improves performance through load balancing, because only one node needs to handle read-write traffic. Set to `false` to remove any existing read-only connection array from the `env.php` file.

```yaml
stage:
  deploy:
    MYSQL_USE_SLAVE_CONNECTION: true
```

### `QUEUE_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Use this environment variable to retain customized AMQP service settings between deployments. For example, if you prefer using an existing message queue service, like RabbitMQ, instead of relying on {{site.data.var.ece}} to create it for you, use the `QUEUE_CONFIGURATION` environment variable to connect it to your site:

```yaml
stage:
  deploy:
    QUEUE_CONFIGURATION:
      amqp:
        host: test.host
        port: 1234
      amqp2:
        host: test.host2
        port: 12345
      mq:
        host: mq.host
        port: 1234
```

{% include cloud/merge-configuration.md %}

The following example merges new values to an existing configuration:

```yaml
stage:
  deploy:
    QUEUE_CONFIGURATION:
      _merge: true
      amqp:
        host: changed1.host
        port: 5672
      amqp2:
        host: changed2.host2
        port: 12345
      mq:
        host: changedmq.host
        port: 1234
```

### `REDIS_BACKEND`

-  **Default**—`Cm_Cache_Backend_Redis`
-  **Version**—Magento 2.3.0 and later

Specifies the backend model configuration for the Redis cache.

Magento version 2.3.0 and later includes the following backend models:

-  `Cm_Cache_Backend_Redis`
-  `\Magento\Framework\Cache\Backend\Redis`
-  `\Magento\Framework\Cache\Backend\RemoteSynchronizedCache`

The example how to set `REDIS_BACKEND`

```yaml
stage:
  deploy:
    REDIS_BACKEND: '\Magento\Framework\Cache\Backend\RemoteSynchronizedCache'
```

{:.bs-callout-info}
If you specify `\Magento\Framework\Cache\Backend\RemoteSynchronizedCache` as the Redis backend model, then {{ site.data.var.ct }} generates the cache configuration automatically. See an example [configuration file]({{site.baseurl}}/guides/v2.3/config-guide/cache/two-level-cache.html) in the _Magento Configuration Guide_.

### `REDIS_USE_SLAVE_CONNECTION`

-  **Default**—`false`
-  **Version**—Magento 2.1.16 and later

{:.bs-callout-warning}
Do not enable this variable on scaled architecture (split architecture) projects. It causes Redis connection errors. Redis slaves are still active but will not be used for Redis reads. As an alternative, we recommend the following: use Magento 2.3.5 or later on Cloud projects with a scaled architecture, implement a new Redis backend configuration, and implement L2 caching for Redis.

Magento can read multiple Redis instances asynchronously. Set to `true` to automatically use a _read-only_ connection to a Redis instance to receive read-only traffic on a non-master node. This improves performance through load balancing, because only one node needs to handle read-write traffic. Set to `false` to remove any existing read-only connection array from the `env.php` file.

```yaml
stage:
  deploy:
    REDIS_USE_SLAVE_CONNECTION: true
```

You must have a Redis service configured in the `.magento.app.yaml` file and in the `services.yaml` file.

[ece-tools version 2002.0.18]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html#v2002018) and later uses more fault-tolerant settings. If Magento 2 cannot read data from the Redis _slave_ instance, then it reads data from the Redis _master_ instance.

The read-only connection is not available for use in the Integration environment or if you use the [`CACHE_CONFIGURATION` variable](#cache_configuration).

### `RESOURCE_CONFIGURATION`

-  **Default**—Not set
-  **Version**—Magento 2.1.4 and later

Maps a resource name to a database connection. This configuration corresponds to the `resource` section of the `env.php` file.

{% include cloud/merge-configuration.md %}

The following example merges new values to an existing configuration:

```yaml
stage:
  deploy:
    RESOURCE_CONFIGURATION:
      _merge: true
      default_setup:
        connection: default
```

### `SCD_COMPRESSION_LEVEL`

-  **Default**—`4`
-  **Version**—Magento 2.1.4 and later

Specifies which [gzip](https://www.gnu.org/software/gzip) compression level (`0` to `9`) to use when compressing static content; `0` disables compression.

```yaml
stage:
  deploy:
    SCD_COMPRESSION_LEVEL: 5
```

### `SCD_COMPRESSION_TIMEOUT`

-  **Default**—`600`
-  **Version**—Magento 2.1.4 and later

When the time it takes to compress the static assets exceeds the compression timeout limit, it interrupts the deployment process. Set the maximum execution time, in seconds, for the static content compression command.

```yaml
stage:
  deploy:
    SCD_COMPRESSION_TIMEOUT: 800
```

### `SCD_MATRIX`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

You can configure multiple locales per theme. This customization speeds up the deployment process by reducing the number of unnecessary theme files. For example, you can deploy the _magento/backend_ theme in English and a custom theme in other languages.

The following example deploys the `Magento/backend` theme with three locales:

```yaml
stage:
  deploy:
    SCD_MATRIX:
      "Magento/backend":
        language:
          - en_US
          - fr_FR
          - af_ZA
```

Also, you can choose to _not_ deploy a theme:

```yaml
stage:
  deploy:
    SCD_MATRIX:
      "Magento/backend": [ ]
```

### `SCD_MAX_EXECUTION_TIME`

-  **Default**—_Not set_
-  **Version**—Magento 2.2.0 and later

Allows you to increase the maximum expected execution time for static content deployment.

By default, Magento Commerce sets the maximum expected execution to 900 seconds, but in some scenarios you might need more time to complete the static content deployment for a Cloud project.

```yaml
stage:
  deploy:
    SCD_MAX_EXECUTION_TIME: 3600
```

{% include cloud/note-increase-scd-max-execution-time-variable.md%}

### `SCD_STRATEGY`

-  **Default**—`quick`
-  **Version**—Magento 2.2.0 and later

Allows you to customize the [deployment strategy]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html) for static content. See [Deploy static view files]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-view.html).

Use these options _only_ if you have more than one locale:

-  `standard`—deploys all static view files for all packages.
-  `quick`—minimizes deployment time. This is the default command option, if not specified.
-  `compact`—conserves disk space on the server. In Magento version 2.2.4 and earlier, this setting overrides the value for `scd_threads` with a value of `1`.

```yaml
stage:
  deploy:
    SCD_STRATEGY: "compact"
```

### `SCD_THREADS`

-  **Default**—Automatic
-  **Version**—Magento 2.1.4 and later

Sets the number of threads for static content deployment. The default value is set based on the detected CPU thread count and does not exceed a value of 4. Increasing the number of threads speeds up static content deployment; decreasing the number of threads slows it down. You can set the thread value, for example:

```yaml
stage:
  deploy:
    SCD_THREADS: 2
```

To further reduce deployment time, we recommend using [Configuration Management]({{ site.baseurl }}/cloud/live/sens-data-over.html) with the `scd-dump` command to move static deployment into the build phase.

### `SEARCH_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Use this environment variable to retain customized search service settings between deployments. For example:

```yaml
stage:
  deploy:
   SEARCH_CONFIGURATION:
     engine: elasticsearch
     elasticsearch_server_hostname: hostname
     elasticsearch_server_port: '123456'
     elasticsearch_index_prefix: magento
     elasticsearch_server_timeout: '15'
```

{% include cloud/merge-configuration.md %}

The following example merges a new value to the existing configuration:

```yaml
stage:
  deploy:
    SEARCH_CONFIGURATION:
      engine: elasticsearch
      elasticsearch_server_port: '1234'
      _merge: true
```

### `SESSION_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Configure Redis session storage. You must specify the `save`, `redis`, `host`, `port`, and `database` options for the session storage variable. For example:

```yaml
stage:
  deploy:
    SESSION_CONFIGURATION:
      redis:
        bot_first_lifetime: 100
        bot_lifetime: 10001
        database: 0
        disable_locking: 1
        host: redis.internal
        max_concurrency: 10
        max_lifetime: 10001
        min_lifetime: 100
        port: 6379
      save: redis
```

{% include cloud/merge-configuration.md %}

The following example merges a new value to the existing configuration:

```yaml
stage:
  deploy:
    SESSION_CONFIGURATION:
      _merge: true
      redis:
        max_concurrency: 10
```

### `SKIP_SCD`

-  **Default**— _Not set_
-  **Version**—Magento 2.1.4 and later

Set to `true` to skip static content deployment during the deploy phase.

On the deploy phase, we recommend setting `SKIP_SCD: true` so that the static content build does not happen during the deploy phase. This setting minimizes deployment time and prevents site downtime that can occur if the static content build fails during the deployment. See [Static content deployment]({{site.baseurl}}/cloud/deploy/static-content-deployment.html).

```yaml
stage:
  deploy:
    SKIP_SCD: true
```

### `UPDATE_URLS`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

On deployment, replace Magento base URLs in the database with the project URLs specified by the [`MAGENTO_CLOUD_ROUTES`]({{ site.baseurl }}/cloud/env/variables-cloud.html) variable. This configuration is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.

If you need to update URLs when deploying to Pro or Starter Staging and Production environments,  use the [`FORCE_UPDATE_URLS`](#force_update_urls) variable.

```yaml
stage:
  deploy:
    UPDATE_URLS: false
```

### `VERBOSE_COMMANDS`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Enable or disable the [Symfony](https://symfony.com/doc/current/console/verbosity.html) debug verbosity level for `bin/magento` CLI commands performed during the deployment phase.

{:.bs-callout}
To use the VERBOSE_COMMANDS setting to control the detail in command output for both successful and failed `bin/magento` CLI commands, you must set [MIN_LOGGING_LEVEL]({{ site.baseurl }}/cloud/env/variables-global.html#min_logging_level) `debug`.

Choose the level of detail provided in the logs: `-v`, `-vv`, or `-vvv`.

```yaml
stage:
  deploy:
    VERBOSE_COMMANDS: "-vv"
```
