---
group: cloud-guide
title: Deploy variables
functional_areas:
  - Cloud
  - Configuration
---
The following _deploy_ variables control actions in the deploy phase and can inherit and override values from the [Global variables]({{ page.baseurl }}/cloud/env/variables-global.html). Also, you can override the [ADMIN variables]({{ page.baseurl }}/cloud/env/environment-vars_magento.html). Insert these variables in the `deploy` stage of the `.magento.env.yaml` file:

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

### `CLEAN_STATIC_FILES`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

Enables or disables cleaning [static content files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview) generated during the build or deploy phase. We recommend the default value _true_ in development. If you make modifications to static content through a separate process, set the value to _false_.

-   **`true`**—Removes all existing static content before deploying the updated static content.
-   **`false`**—The deployment only overwrites existing static content files if the generated content contains a newer version.

```yaml
stage:
  deploy:
    CLEAN_STATIC_FILES: true
```

Failure to clean static view files before deploying can cause problems if you
deploy updates to existing files without removing the previous versions. Because of [static file fallback]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache) rules, fallback operations can display the wrong file if the directory contains multiple versions of the same file.

### `CRYPT_KEY`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Use the Project Web UI to set this value. When you move the database from one environment to another without an installation process, you need the corresponding cryptographic information. Magento uses the encryption key value set in the Web UI as the `crypt/key` value in the `env.php` file. This does not overwrite an existing encryption key value in the `env.php` file.

### `DATABASE_CONFIGURATION`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

If you defined a database in the [relationships property]({{ site.baseurl }}/guides/v2.2/cloud/project/project-conf-files_magento-app.html#relationships) of the `.magento.app.yaml` file, you can customize your database connections for deployment.

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

{: .bs-callout .bs-callout-warning}
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
.....
```
{: .no-copy}

### `ENABLE_GOOGLE_ANALYTICS`

-  **Default**—`false`
-  **Version**—Magento 2.1.4 and later

Enables and disables Google Analytics when deploying to Staging and Integration environments. By default, Google Analytics is true only for the Production environment. Set this value to `true` to enable Google Analytics in the Staging and Integration environments.

-   **`true`**—Enables Google Analytics on Staging and Integration environments.
-   **`false`**—Disables Google Analytics on Staging and Integration environments.

Add the `ENABLE_GOOGLE_ANALYTICS` environment variable to the `deploy` stage in the `.magento.env.yaml` file:

```yaml
stage:
  deploy:
    ENABLE_GOOGLE_ANALYTICS: true 
```

{:.bs-callout .bs-callout-info}
The {{ site.data.var.ece }} deploy process always enables Google Analytics on Production environments.

### `FORCE_UPDATE_URLS`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

On deployment to Pro and Starter Staging and Production environments, this variable replaces Magento base URLs in the database with the project URLs specified by the [`MAGENTO_CLOUD_ROUTES`]({{ page.baseurl}}/cloud/env/variables-cloud.html) variable. Use this setting to override the default behavior, which is to ignore the [UPDATE_URLS](#update_urls) variable when deploying to Staging and Production environments. 

```yaml
stage:
  deploy:
    FORCE_UPDATE_URLS: true
```

### `GENERATED_CODE_SYMLINK`

-  **Default**—`true`
-  **Version**—Magento 2.1.x

Generates symlinks for the `var/generation` and `var/di` generated folders.

```yaml
stage:
  deploy:
    GENERATED_CODE_SYMLINK: false
```

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

### `REDIS_USE_SLAVE_CONNECTION`

-  **Default**—`false`
-  **Version**—Magento 2.1.16 and later

Magento can read multiple Redis instances asynchronously. Set to `true` to automatically use a _read-only_ connection to a Redis instance to receive read-only traffic on a non-master node. This improves performance through load balancing, because only one node needs to handle read-write traffic. Set to `false` to remove any existing read-only connection array from the `env.php` file.

```yaml
stage:
  deploy:
    REDIS_USE_SLAVE_CONNECTION: true
```

You must have a Redis service configured in the `.magento.app.yaml` file and in the `services.yaml` file.

[ece-tools version 2002.0.18]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html#v2002018) and later uses more fault-tolerant settings. If Magento 2 cannot read data from the Redis _slave_ instance, then it reads data from the Redis _master_ instance.

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
      _merge: false 
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

### `SCD_EXCLUDE_THEMES` 

{: .bs-callout .bs-callout-warning }
The `SCD_EXCLUDE_THEMES` environment variable is deprecated in [ece-tools version 2002.0.16]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html#v2002016). Use the [SCD_MATRIX variable](#scd_matrix) to control theme configuration.

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Themes include numerous files. Set this variable to `true` if you want to skip copying over theme files during deployment. For example, the Luma theme is included with {{site.data.var.ece}}. You may not need to constantly deploy this theme with your code updates and deployments. To exclude the `magento/luma` theme:

```yaml
stage:
  deploy:
    SCD_EXCLUDE_THEMES: "magento/luma, magento/my-theme"
```

### `SCD_MATRIX`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

You can configure specific locales per theme as long as the theme is not excluded using the [`SCD_EXCLUDE_THEMES` variable](#scd_exclude_themes) during deployment. This configuration is ideal to speed up the deployment process by reducing the amount of unnecessary theme files. For example, you can deploy the _magento/backend_ theme in English and a custom theme in other languages.

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

### `SCD_THREADS`

-  **Default**—Automatic
-  **Version**—Magento 2.1.4 and later

Sets the number of threads for static content deployment. The default value is set based on the detected CPU thread count and does not exceed a value of 4. Increasing the number of threads speeds up static content deployment; decreasing the number of threads slows it down. You can set the thread value, for example:

```yaml
stage:
  deploy:
    SCD_THREADS: 2
```

For Magento version 2.1.11 and earlier, the default value is 1.

To further reduce deployment time, we recommend using [Configuration Management]({{ page.baseurl }}/cloud/live/sens-data-over.html) with the `scd-dump` command to move static deployment into the build phase.

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

We recommend setting this option to `true` because running static content deployment during the deploy phase can significantly increase deployment times and downtime for your live site.

```yaml
stage:
  deploy:
    SKIP_SCD: true
```

### `STATIC_CONTENT_SYMLINK`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

Generates symlinks for static content. This setting is vital in the Pro Production environment for the three-node cluster. When this variable is set to `false`, it must copy every file during the deployment, which increases deployment time. Setting the [`SCD_ON_DEMAND` variable]({{page.baseurl}}/cloud/env/variables-global.html#scd_on_demand) to `true` disables this variable.

If you generate static content during the build phase, it creates a symlink to the content folder.
If you generate static content during the deploy phase, it writes directly to the content folder.
Generating static content on demand disables this variable.

```yaml
stage:
  deploy:
    STATIC_CONTENT_SYMLINK: false
```

### `UPDATE_URLS`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

On deployment, replace Magento base URLs in the database with the project URLs specified by the [`MAGENTO_CLOUD_ROUTES`]({{ page.baseurl }}/cloud/env/variables-cloud.html) variable. This is useful for local development, where base URLs are set up for your local environment. 
When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.

If you need to update URLs when deploying to Pro or Starter Staging and Production environments,  use the [`FORCE_UPDATE_URLS`](#force_update_urls) variable. 

```yaml
stage:
  deploy:
    UPDATE_URLS: false
```

### `VERBOSE_COMMANDS`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

 Enables or disables the [Symfony](https://symfony.com/doc/current/console/verbosity.html) debug verbosity level for your logs. Choose the level of detail provided in the logs: `-v`, `-vv`, or `-vvv`.

```yaml
stage:
  deploy:
    VERBOSE_COMMANDS: "-vv"
```
