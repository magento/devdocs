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

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The Magento Cloud Docker environment requires three, essential components: a Magento 2 template, Docker Compose, and Magento Cloud Tools.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker){:target="\_blank"} contains build information for the following [Docker hub](https://hub.docker.com/r/magento/){:target="\_blank"} images:

-  PHP: magento/magento-cloud-docker-php
    -  PHP-CLI - version 7 and later
    -  PHP-FPM - version 7 and later
-  NGINX:  magento/magento-cloud-docker-nginx

The Cloud Tools provides a `docker:build` command to generate the Docker Compose configuration. Also, you can specify a version using one of the following options:

-  PHP: `--php`
-  NGINX: `--nginx`
-  MariaDB: `--db`

#### To launch the Cloud Docker environment:

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

1.  Start the Magento installer. This step may take some time to complete.

    ```bash
    docker-compose run cli magento-installer
    ```

1.  Open the `http://localhost:8080` URL in a browser to access your local Magento Cloud template.

### Integration testing with Cloud tools
Installing Magento Commerce Cloud in a dedicated Docker environment presents an opportunity for you to customize the following features and capabilities to implement automated integration testing:

-  2-layer configuration for Docker build and Travis CI
-  Customizable Docker Compose file to support a wide range of environment sets
-  Flexible permissions
-  Easy local setup and implementation
