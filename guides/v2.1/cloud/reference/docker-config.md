---
group: cloud
title: Configure Docker
version: 2.1
github_link: cloud/reference/docker-config.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a Magento 2 template, Docker Compose, and {{site.data.var.ece}} `ece-tools` package.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker){:target="\_blank"} contains build information for the following [Docker hub](https://hub.docker.com/r/magento/){:target="\_blank"} images:

- PHP: magento/magento-cloud-docker-php
    -  PHP-CLI - version 7 and later
    -  PHP-FPM - version 7 and later
- NGINX: magento/magento-cloud-docker-nginx
- Varnish: magento/magento-cloud-docker-varnish

The `ece-tools` package provides a `docker:build` command to generate the Docker Compose configuration. Also, you can specify a version using one of the following options:

- PHP: `--php`
- NGINX: `--nginx`
- MariaDB: `--db`

## Launch a Cloud Docker environment, `ece-tools` v2002.0.13 and later

Use `ece tools` v2002.0.13 or later to generate the Docker compose configuration, convert `.php` configuration files to `.env` files, install {{site.data.var.ece}}, and deploy to a read-only file system in the Docker container.

1.  Download a template from the [Magento Cloud repository](https://github.com/magento/magento-cloud){:target="\_blank"}.

1.  Add your credentials to the `auth.json` file.

1.  Update the template dependencies.

    ```bash
    composer install
    ```

    {: .bs-callout .bs-callout-info}
    You can use the `--ignore-platform-reqs` option to bypass restrictions related to the PHP version.

1. In your local environment, start the Docker configuration generator.

    ```bash
    vendor/bin/ece-tools docker:build
    ```

1. Copy the raw configuration files.

    ```bash
    cp docker/config.php.dist docker/config.php
    ```

    ```bash
    cp docker/global.php.dist docker/global.php
    ```

1. Convert Docker environment configuration files from the raw configs.

    ```bash
    vendor/bin/ece-tools docker:config:convert
    ```

    This converts your `.php` files to `.env` configuration files.

    * `docker/config.env`
    * `docker/global.env`

1. Build files to containers and run Docker in the background.

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

## Launch a Cloud Docker environment, `ece-tools` v2002.0.12

Use `ece-tools` 2002.0.12 to generate the Docker compose configuration and deploy {{site.data.var.ece}} to a writeable file system in the Docker container. To deploy to a read-only file system, upgrade to `ece-tools` v2002.0.13 or later.

1.  Download a template from the [Magento Cloud repository](https://github.com/magento/magento-cloud){:target="\_blank"}.
1.  Add your credentials to `auth.json` file.
1.  Update the template dependencies.

    ```bash
    composer install
    ```

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

1.  Open the `http://localhost:8080` URL in a browser to access your local Magento Cloud template.


1. Access your local Magento Cloud template by opening one of the following secure URLs in a browser:

    -  [`http://localhost:8080`](http://localhost:8080){:target="\_blank"}
    -  [`https://localhost`](https://localhost){:target="\_blank"}

## Stop and remove the Cloud Docker environment

Remove all components of your local Magento Cloud template including containers, networks, volumes, and images.

```bash
docker-compose down
```

## Integration testing with ece-tools
Installing Magento Commerce Cloud in a dedicated Docker environment presents an opportunity for you to customize the following features and capabilities to implement automated integration testing:

-  2-layer configuration for Docker build and Travis CI
-  Customizable Docker Compose file to support a wide range of environment sets
-  Flexible permissions
-  Easy local setup and implementation
