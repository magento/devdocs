---
group: cloud
title: Configure Docker
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a Magento 2 template, Docker Compose, and {{site.data.var.ece}} `ece-tools` package.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker){:target="_blank"} contains build information for the following [Docker hub](https://hub.docker.com/r/magento/){:target="_blank"} images:

- PHP: magento/magento-cloud-docker-php
    -  PHP-CLI - version 7 and later
    -  PHP-FPM - version 7 and later
- NGINX: magento/magento-cloud-docker-nginx
- Varnish: magento/magento-cloud-docker-varnish

The `ece-tools` package provides a `docker:build` command to generate the Docker Compose configuration. Also, you can specify a version using one of the following options:

- PHP: `--php`
- NGINX: `--nginx`
- MariaDB: `--db`

## Launch Docker configuration

You can use the `ece-tools` package to generate the Docker compose configuration and deploy {{site.data.var.ece}} in a Docker container.

-  If you use `ece tools` v2002.0.13 or later, {{site.data.var.ece}} deploys to a read-only file system in the Docker container, which mirrors the read-only file system deployed in the Production environment. This version also provides a ` docker:config:convert` command to convert PHP configuration files to Docker ENV files.

-  If you use `ece-tools` v2002.0.12, {{site.data.var.ece}} deploys to a writeable file system in the Docker container. This version does not support the `docker:config:convert` command.

#### To launch Docker with `ece-tools` v2002.0.13 and later:

1.  Download a template from the [Magento Cloud repository](https://github.com/magento/magento-cloud){:target="_blank"}.

1.  Add your credentials to the `auth.json` file.

1.  Install the template dependencies.

    ```bash
    composer install
    ```
    
    {: .bs-callout .bs-callout-info}
    You can use the `--ignore-platform-reqs` option to bypass restrictions related to the PHP version.

1.  In your local environment, start the Docker configuration generator.

    ```bash
    vendor/bin/ece-tools docker:build
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
    vendor/bin/ece-tools docker:config:convert
    ```
    This command generate the following Docker ENV files:

    * `docker/config.env`
    * `docker/global.env`

1.  Build files to containers and run in the background.

    ```bash
    docker-compose up -d --build
    ```

1. Install Magento in your Docker environment.

    * Build Magento in the Docker container:

        ```bash
        docker-compose run build cloud-build
        ```

    * Deploy Magento in the Docker container:

        ```bash
        docker-compose run deploy cloud-deploy
        ```

1.  Access your local Magento Cloud template by opening one of the following secure URLs in a browser:

    -  [`http://localhost:8080`](http://localhost:8080){:target="_blank"}

    -  [`https://localhost`](https://localhost){:target="_blank"}

#### To launch Docker with `ece-tools` v2002.0.12:

1.  Download a template from the [Magento Cloud repository](https://github.com/magento/magento-cloud){:target="_blank"}.

1.  Add your credentials to `auth.json` file.

1.  Install the template dependencies.

    ```bash
    composer install
    ```
    
    {: .bs-callout .bs-callout-info}
    You can use the `--ignore-platform-reqs` option to bypass restrictions related to the PHP version.

1.  In your local environment, start the Docker configuration generator.

    ```bash
    vendor/bin/ece-tools docker:build
    ```

1.  Copy the configuration files.

    ```bash
    cp docker/config.env.dist docker/config.env
    ```

    ```bash
    cp docker/global.env.dist docker/global.env
    ```

1.  Build files to containers and run in the background.

    ```bash
    docker-compose up -d --build
    ```

1.  Install Magento. This step may take some time to complete.

    ```bash
    docker-compose run cli magento-installer
    ```

1.  Access your local Magento Cloud template by opening the following URL in a browser:

    [`http://localhost:8080`](http://localhost:8080){:target="_blank"}


## Stop and remove the Docker configuration

Remove all components of your local Magento Cloud Docker instance including containers, networks, volumes, and images.

```bash
docker-compose down
```

## Automate integration testing

Installing Magento Commerce Cloud in a dedicated Docker environment presents an opportunity for you to customize the following features and capabilities to implement automated integration testing:

-  2-layer configuration for Docker build and Travis CI
-  Customizable Docker Compose file to support a wide range of environment sets
-  Flexible permissions
-  Easy local setup and implementation
