---
group: cloud-guide
title: Launch Docker
redirect_from:
  - /guides/v2.1/cloud/reference/docker-config.html
  - /guides/v2.2/cloud/reference/docker-config.html
  - /guides/v2.3/cloud/reference/docker-config.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The `{{site.data.var.ct}}` package (version 2002.0.13 or later) deploys to a read-only file system by default in the Docker environment, which mirrors the read-only file system deployed in the Production environment. You can use the `docker:build` command in the `{{site.data.var.ct}}` package to generate the Docker Compose configuration and deploy {{site.data.var.ece}} in a Docker container.

## Launch modes

_Mode_ is an additional configuration option for the Docker configuration generator (the `docker:build` command). This mode does not affect the Magento mode. It determines the {{site.data.var.ece}} file system installation and read-only or read-write behavior.

You can launch your Docker environment in one of the following modes:

-   **production**—Production mode is the default configuration setting for launching the Docker environment with read-only filesystem permissions. This option builds the Docker environment in production mode and verifies configured service versions.
-   **developer**—Developer mode supports an active development environment with full, writable filesystem permissions. This option builds the Docker environment in developer mode and verifies configured service versions. System performance is slower in developer mode because of additional file synchronization operations.

For example, the following command starts the Docker configuration generator for the developer mode:

```bash
./vendor/bin/ece-tools docker:build --mode="developer"
```

To skip the interactive mode, use the `-n, --no-interaction` option.

## Service versions

{{site.data.var.ece}} references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator (the `docker:build` command), you can overwrite a service version with the following optional parameters:

| Service       | Key        | Available versions
| ------------- | ---------- | ------------------
| Elasticsearch | `--es`     | 1.7, 2.4, 5.2, 6.5
| MariaDB       | `--db`     | 10.0, 10.1, 10.2
| NGINX         | `--nginx`  | 1.9, latest
| Node          | `--node`   | 6, 8, 10, 11
| PHP           | `--php`    | 7.0, 7.1, 7.2
| RabbitMQ      | `--rmq`    | 3.5, 3.7
| Redis         | `--redis`  | 3.2, 4.0, 5.0

The `docker:build` command runs in interactive mode and verifies the configured service versions. To skip the interactive mode, use the `-n, --no-interaction` option.

For example, the following command starts the Docker configuration generator for the developer mode and specifies the PHP version 7.2:

```bash
./vendor/bin/ece-tools docker:build --mode="developer" --php 7.2
```

### Prerequisites

You must have the following software installed on your local workstation:

-  PHP version 7.1 or later
    -  [php@7.1](https://formulae.brew.sh/formula/php@7.1)
    -  [php@7.2](https://formulae.brew.sh/formula/php@7.2)
-  [Composer](https://getcomposer.org)
-  [Docker](https://www.docker.com/get-started)
-  [docker-sync](https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html)—file synchronization is required for developer mode

Before you begin, you must add the following hostname to your `/etc/hosts` file:

```
127.0.0.1 magento2.docker
```

Alternatively, you can run the following command to add it to the file:

```bash
echo "127.0.0.1 magento2.docker" | sudo tee -a /etc/hosts
```

### Stopping default Apache instance on Mac OS

Because Mac OS provides built-in Apache service, and may occupy port `80`, you must stop the service with the following command:

```bash
sudo apachectl stop
```

#### To launch Docker:

1.  Download a Magento application template from the [Magento Cloud repository](https://github.com/magento/magento-cloud). Be careful to select the branch that corresponds with the Magento version.

1.  Add your [Magento access credentials]({{page.baseurl}}/install-gde/prereq/connect-auth.html) to the `auth.json` file.

1.  Install the template dependencies.

    ```bash
    composer install
    ```

1.  Continue with steps for [Production mode](#production-mode) or [Developer mode](#developer-mode).

### Production mode

Continue launching your Docker environment in the default _production_ mode.

1.  In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to [specify a version](#service-versions).

    ```bash
    ./vendor/bin/ece-tools docker:build
    ```

1.  _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

    ```bash
    cp docker/config.php.dist docker/config.php
    ```

    Convert custom PHP configuration files to Docker ENV files.

    ```bash
    ./vendor/bin/ece-tools docker:config:convert
    ```

    This generates the following Docker ENV files:

    * `docker/config.env`

    {: .bs-callout .bs-callout-info}
    The `{{site.data.var.ct}}` version 2002.0.12 package does not support the `docker:config:convert` command.

1.  _Optional_: Configure the Docker global variables in the `docker-compose.yml` file. For example, you can [enable and configure Xdebug]({{ page.baseurl }}/cloud/docker/docker-development-debug.html).

1.  Build files to containers and run in the background.

    ```bash
    docker-compose up -d
    ```

1.  Install Magento in your Docker environment.

    - Build Magento in the Docker container:

        ```bash
        docker-compose run build cloud-build
        ```

    - Deploy Magento in the Docker container:

        ```bash
        docker-compose run deploy cloud-deploy
        ```

    {: .bs-callout .bs-callout-info}
    For `{{site.data.var.ct}}` v2002.0.12, install Magento with the `docker-compose run cli magento-installer` command.

1.  Configure and connect Varnish.

    ```bash
    docker-compose run deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env
    ```

1.  Clear the cache.

    ```bash
    docker-compose run deploy magento-command cache:clean
    ```

1.  [Access the Magento instance](#access-magento-instance).

### Developer mode

Continue launching your Docker environment in the _developer_ mode. The developer mode supports active development on your local environment.

{: .bs-callout .bs-callout-info}
The `{{site.data.var.ct}}` version 2002.0.18 and later supports developer mode.


1.  Install the `docker-sync` tool using the [Installation instructions](https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html). If you have it installed, continue to the next step.

1.  In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to [specify a version](#service-versions).

    ```bash
    ./vendor/bin/ece-tools docker:build --mode="developer"
    ```

1.  _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

    ```bash
    cp docker/config.php.dist docker/config.php
    ```

    Convert custom PHP configuration files to Docker ENV files.

    ```bash
    ./vendor/bin/ece-tools docker:config:convert
    ```

    This generates the following Docker ENV files:

    * `docker/config.env`

1.  _Optional_: Configure the Docker global variables in the `docker-compose.yml` file. For example, you can [enable and configure Xdebug]({{ page.baseurl }}/cloud/docker/docker-development-debug.html).

1.  Start the file synchronization.

    ```bash
    docker-sync start
    ```

1.  Build files to containers and run in the background.

    ```bash
    docker-compose up -d
    ```

1. Install Magento in your Docker environment.

    - Deploy Magento in the Docker container:

        ```bash
        docker-compose run deploy cloud-deploy && \
        docker-compose run deploy magento-command deploy:mode:set developer
        ```

    {: .bs-callout .bs-callout-info}
    Developer mode does not require the `build` operation.

1.  Configure and connect Varnish.

    ```bash
    docker-compose run deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env
    ```

1.  Clear the cache.

    ```bash
    docker-compose run deploy magento-command cache:clean
    ```

1.  [Access the Magento instance](#access-magento-instance).

## Access Magento instance

You can access the local Magento Cloud template by opening one of the following URLs in a browser:

-  [`http://magento2.docker`](http://magento2.docker)

-  [`https://magento2.docker`](https://magento2.docker)

## Stop and start containers

You can stop containers and restore them afterwards using the following methods.

Action | Command
------ | -------
Suspend containers to continue your work later | `docker-compose stop`
Start containers from a suspended state | `docker-compose start`
Stop the synchronization daemon | `docker-sync stop`
Start the synchronization daemon | `docker-sync start`

#### To stop and remove the Docker configuration:

Remove all components of your local Docker instance including containers, networks, volumes, and images.

```bash
docker-compose down -v
```

#### To stop `docker-sync` daemon:

```bash
docker-sync stop
```

## Advanced usage

### Extending docker-compose.yml configuration

You can use Docker's built-in [extension mechanism](https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files).

1.  Create a `docker-compose-dev.yml` file inside your project's root directory and add the following content:

    ```yaml
    version: '2'
    services:
      deploy:
        environment:
          - ENABLE_SENDMAIL=true
    ```

    This replaces the default value of the `ENABLE_SENDMAIL` environment variable.

1.  Pass both configuration files while executing your commands. For example:

    ```bash
    docker-compose -f docker-compose.yml -f docker-compose-dev.yml run deploy bash
    ```
