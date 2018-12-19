---
group: cloud-guide
title: Launch Docker configuration
redirect_from:
  - /guides/v2.1/cloud/reference/docker-config.html
  - /guides/v2.2/cloud/reference/docker-config.html
  - /guides/v2.3/cloud/reference/docker-config.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The `{{site.data.var.ct}}` package v2002.0.13 or later deploys to a read-only file system in the Docker container, which mirrors the read-only file system deployed in the Production environment. You can use the `docker:build` command in the `{{site.data.var.ct}}` package to generate the Docker compose configuration and deploy {{site.data.var.ece}} in a Docker container. 

{{site.data.var.ece}} references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator, you can overwrite a service version with the following optional parameters:

| Service       | Key        | Default value | Possible values
| ------------- | ---------- | ------------- | ----------------
| PHP           | `--php`    | 7.1           | 7.0, 7.1, 7.2
| NGINX         | `--nginx`  | latest        | 1.9, latest
| MariaDB       | `--db`     | 10            | 10.0, 10.1, 10.2
| Elasticsearch | `--es`     | 2.4           | 1.7, 2.4, 5.2
| RabbitMQ      | `--rmq`    | 3.5           | 3.5, 3.7
| Redis         | `--redis`  | 3.2           | 3.0, 3.2, 4.0
{:style="table-layout:auto;"}

This version also provides a `docker:config:convert` command to convert PHP configuration files to Docker ENV files.

#### Prerequisites

You must have the following software installed on your local workstation:

-  PHP version 7.0 or later
    -  [php@7.1](https://formulae.brew.sh/formula/php@7.1)
    -  [php@7.2](https://formulae.brew.sh/formula/php@7.2)
-  [Composer](https://getcomposer.org)
-  [Docker](https://www.docker.com/get-started)

Before you begin, you must add the following hostname to your `/etc/hosts` file:

```
127.0.0.1 magento2.docker
```

#### To launch Docker:

1.  Download a template from the [Magento Cloud repository](https://github.com/magento/magento-cloud).

1.  Add your credentials to the `auth.json` file.

1.  Install the template dependencies.

    ```bash
    composer install
    ```

1.  In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to specify a version.

    ```bash
    ./vendor/bin/ece-tools docker:build
    ```

1.  Copy the raw configuration files.

    ```bash
    cp docker/config.php.dist docker/config.php
    ```

    ```bash
    cp docker/global.php.dist docker/global.php
    ```

1. Convert the PHP configuration files to Docker ENV files.

    ```bash
    ./vendor/bin/ece-tools docker:config:convert
    ```
    This command generates the following Docker ENV files:

    * `docker/config.env`
    * `docker/global.env`

    {: .bs-callout .bs-callout-info}
    The `{{site.data.var.ct}}` v2002.0.12 package does not support the `docker:config:convert` command.

1.  Build files to containers and run in the background.

    ```bash
    docker-compose up -d
    ```

1. Install Magento in your Docker environment.

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

1.  Access your local Magento Cloud template by opening one of the following secure URLs in a browser:

    -  [`http://magento2.docker`](http://magento2.docker)

    -  [`https://magento2.docker`](https://magento2.docker)

#### To stop containers and restore them afterwards:

Suspend containers to continue your work later.

```bash
docker-compose stop
```

Start containers from suspended state.

```bash
docker-compose start
```

#### To stop and remove the Docker configuration:

Remove all components of your local Docker instance including containers, networks, volumes, and images.

```bash
docker-compose down -v
```
