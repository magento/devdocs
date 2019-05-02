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

The `{{site.data.var.ct}}` package (version 2002.0.13 or later) deploys to a read-only file system in the Docker container, which mirrors the read-only file system deployed in the Production environment. You can use the `docker:build` command in the `{{site.data.var.ct}}` package to generate the Docker Compose configuration and deploy {{site.data.var.ece}} in a Docker container.

## Launch modes

Mode is an additional configuration option for the Docker configuration generator (the `docker:build` command). You can launch your Docker environment in one of two modes:

-   **production**—Production mode is the default for launching the Docker environment. This builds the Docker environment and verifies configured service versions.
-   **developer**—Developer mode supports active development with full, writable filesystem permissions. This mode is slower than production mode because of additional file synchronization operations. This builds the Docker environment in developer mode and verifies configured service versions.

For example, the following command starts the Docker configuration generator for the developer mode:

```bash
./vendor/bin/ece-tools docker:build --mode="developer"
```

To skip the interactive mode, use the `-n, --no-interaction` option.

## Service versions

{{site.data.var.ece}} references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator (the `docker:build` command), you can overwrite a service version with the following optional parameters:

| Service       | Key        | Available versions
| ------------- | ---------- | ------------------
| PHP           | `--php`    | 7.0, 7.1, 7.2
| NGINX         | `--nginx`  | 1.9, latest
| MariaDB       | `--db`     | 10.0, 10.1, 10.2
| Elasticsearch | `--es`     | 1.7, 2.4, 5.2, 6.5
| RabbitMQ      | `--rmq`    | 3.5, 3.7
| Redis         | `--redis`  | 3.0, 3.2, 4.0, 5.0

For example, the following command starts the Docker configuration generator for the developer mode and specifies the PHP version 7.2:

```bash
./vendor/bin/ece-tools docker:build --mode="developer" --php 7.2
```

### Prerequisites

You must have the following software installed on your local workstation:

-  PHP version 7.0 or later
    -  [php@7.1](https://formulae.brew.sh/formula/php@7.1)
    -  [php@7.2](https://formulae.brew.sh/formula/php@7.2)
-  [Composer](https://getcomposer.org)
-  [Docker](https://www.docker.com/get-started)
-  [docker-sync](https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html)—file synchronization is required for developer mode

Before you begin, you must add the following hostname to your `/etc/hosts` file:

```
127.0.0.1 magento2.docker
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

1.  In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to specify a version.

    ```bash
    ./vendor/bin/ece-tools docker:build
    ```

1.  _Optional_: Copy the raw configuration files.

    ```bash
    cp docker/config.php.dist docker/config.php
    ```

1. _Optional_: Convert the PHP configuration files to Docker ENV files.

    ```bash
    ./vendor/bin/ece-tools docker:config:convert
    ```

    This command generates the following Docker ENV files:

    * `docker/config.env`

    {: .bs-callout .bs-callout-info}
    The `{{site.data.var.ct}}` v2002.0.12 package does not support the `docker:config:convert` command.

1.  _Optional_: Configure the Docker global variables in the `docker-compose.yaml` file. For example, you can [enable and configure Xdebug]({{ page.baseurl }}/cloud/docker/docker-development-debug.html).

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

### Developer mode

Continue launching your Docker environment in the _developer_ mode. The developer mode supports active development on your local environment.

1.  Install the `docker-sync` tool using the [Installation instructions](https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html). If you have it installed, continue to the next step.

1.  In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to specify a version.

    ```bash
    ./vendor/bin/ece-tools docker:build --mode="developer"
    ```

1.  _Optional_: Copy the raw configuration files.

    ```bash
    cp docker/config.php.dist docker/config.php
    ```

1.  _Optional_: Convert the PHP configuration files to Docker ENV files.

    ```bash
    ./vendor/bin/ece-tools docker:config:convert
    ```

    This command generates the following Docker ENV files:

    * `docker/config.env`

    {: .bs-callout .bs-callout-info}
    The `{{site.data.var.ct}}` v2002.0.12 package does not support the `docker:config:convert` command.

1.  _Optional_: Configure the Docker global variables in the `docker-compose.yaml` file. For example, you can [enable and configure Xdebug]({{ page.baseurl }}/cloud/docker/docker-development-debug.html).

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
        docker-compose up -d && \
        docker-compose run deploy cloud-deploy && \
        docker-compose run deploy magento-command deploy:mode:set developer && \
        docker-compose run deploy magento-command cache:clean
        ```

    {: .bs-callout .bs-callout-info}
    Developer mode does not require the `build` operation.

## Access local Magento Cloud template
 
 by opening one of the following secure URLs in a browser:

-  [`http://magento2.docker`](http://magento2.docker)

-  [`https://magento2.docker`](https://magento2.docker)

## Stop and start containers

You can stop containers and restore them afterwards using the following methods.

Action | Command
------ | -------
Suspend containers to continue your work later | `docker-compose stop`
Start containers from a suspended state | `docker-compose start`
Stop the synchronization daemon | `docker-sync stop`

#### To stop and remove the Docker configuration:

Remove all components of your local Docker instance including containers, networks, volumes, and images.

```bash
docker-compose down -v
```

#### To stop `docker-sync` daemon:

```bash
docker-sync stop
```
