---
group: cloud-guide
title: Deploy variables
functional_areas:
  - Cloud
  - Configuration
---
The following _deploy_ variables control actions in the deploy phase and can inherit and override values from the [Global stage]({{ page.baseurl }}/cloud/env/variables-intro.html#global-variables). Also, you can override the [ADMIN variables]({{ page.baseurl }}/cloud/env/environment-vars_magento.html). Insert these variables in the `deploy` stage of the `.magento.env.yaml` file:

```yaml
stage:
  deploy:
    DEPLOY_VARIABLE_NAME: value
```

For more information about customizing the build and deploy process:

-  [Manage build and deploy actions]({{ site.baseurl }}/guides/v2.1/cloud/project/magento-env-yaml.html)
-  [Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)

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
-  **Version**—Magento 2.1.4 and later

Magento can read multiple Redis instances asynchronously. Set to `true` to automatically use a _read-only_ connection to a Redis instance to receive read-only traffic on a non-master node. This improves performance through load balancing, because only one node needs to handle read-write traffic. Set to `false` to remove any existing read-only connection array from the `env.php` file.

```yaml
stage:
  deploy:
    REDIS_USE_SLAVE_CONNECTION: true
```

You must have a Redis service configured in the `.magento.app.yaml` file and in the `services.yaml` file.

The read-only connection is not available for use in the Integration environment or if you use the [`CACHE_CONFIGURATION` variable](#cache_configuration).

### `SCD_COMPRESSION_LEVEL`

-  **Default**—`6`
-  **Version**—Magento 2.1.4 and later

Specifies which [gzip](https://www.gnu.org/software/gzip){:target="_blank"} compression level (`0` to `9`) to use when compressing static content; `0` disables compression.

```yaml
stage:
  deploy:
    SCD_COMPRESSION_LEVEL: 4
```

### `SCD_EXCLUDE_THEMES`

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

You can configure specific locales per theme as long as the theme is not excluded using the `SCD_EXCLUDE_THEMES` variable during deployment. This is ideal if you want to speed up the deployment process by reducing the amount of unnecessary theme files. For example, you can deploy the _magento/backend_ theme in English and a custom theme in other languages.

The following example deploys the `magento/backend` theme with three locales:

```yaml
stage:
  deploy:
    SCD_MATRIX:
      "magento/backend":
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
      "magento/backend": [ ]
```

### `SCD_THREADS`

-  **Default**:
    -  `1`—Starter environments and Pro Integration environments
    -  `3`—Pro Staging and Production environments
-  **Version**—Available in all versions

Sets the number of threads for static content deployment. Increasing the number of threads speeds up static content deployment; decreasing the number of threads slows it down.

```yaml
stage:
  deploy:
    SCD_THREADS: 2
```

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

We recommend using this option, because running static content deployment during the deployment phase can greatly increase deployment times and downtime for your live site.

```yaml
stage:
  deploy:
    SKIP_SCD: true
```

### `STATIC_CONTENT_SYMLINK`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

Generates symlinks for static content. This setting is vital in the Pro Production environment for the three-node cluster. When this variable is set to `false`, it must copy every file during the deployment, which increases deployment time. Setting `SCD_ON_DEMAND` to `true` disables this variable.

```yaml
stage:
  deploy:
    STATIC_CONTENT_SYMLINK: false
```

### `UPDATE_URLS`

-  **Default**—`true`
-  **Version**—Magento 2.1.4 and later

On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.

```yaml
stage:
  deploy:
    UPDATE_URLS: false
```

You should set this variable to `false` _only_ in Staging or Production environments, where the base URLs cannot change. For Pro, we already set this to `false` for you.

### `VERBOSE_COMMANDS`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

 Enables or disables the [Symfony](https://symfony.com/doc/current/console/verbosity.html){:target="_blank"} debug verbosity level for your logs. Choose the level of detail provided in the logs: `-v`, `-vv`, or `-vvv`.

```yaml
stage:
  deploy:
    VERBOSE_COMMANDS: "-vv"
```
