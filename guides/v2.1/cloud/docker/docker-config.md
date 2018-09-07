---
group: cloud-guide
title: Launch Docker configuration
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

You can use the `{{site.data.var.ct}}` package to generate the Docker compose configuration and deploy {{site.data.var.ece}} in a Docker container.

-  [`{{site.data.var.ct}}` v2002.0.13 or later](#use-13)—deploys to a read-only file system in the Docker container, which mirrors the read-only file system deployed in the Production environment. This version also provides a ` docker:config:convert` command to convert PHP configuration files to Docker ENV files.

-  [`{{site.data.var.ct}}` v2002.0.12](#use-12)—deploys to a writeable file system in the Docker container. This version does not support the `docker:config:convert` command.

#### To launch Docker with `{{site.data.var.ct}}` v2002.0.13 and later: {#use-13}

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

#### To launch Docker with `{{site.data.var.ct}}` v2002.0.12: {#use-12}

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


#### To stop and remove the Docker configuration:

Remove all components of your local Docker instance including containers, networks, volumes, and images.

```bash
docker-compose down
```