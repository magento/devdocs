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

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for develop and testing, or for automation tasks. There are three, essential parts to launching the Magento Cloud Docker environment: a Magento 2 template, Docker Compose, and Magento Cloud Tools.

The [Magento Cloud Docker repository](https://github.com/magento/magento-cloud-docker){:target="\_blank"} contains build information for the following [Docker hub](https://hub.docker.com/r/magento/){:target="\_blank"} images, including the following:

-  PHP: magento/magento-cloud-docker-php
    -  PHP-CLI - version 7 and later
    -  PHP-FPM - version 7 and later
-  NGINX:  magento/magento-cloud-docker-nginx

**Prerequisites**—Select your Magento 2 template.

1.  Download a template from the [Magento Cloud repository](https://github.com/magento/magento-cloud){:target="\_blank"}.
1.  Add your credentials to `auth.json` file.
1.  Update the template dependencies.

    ```bash
    composer install
    ```

#### To launch the Cloud Docker environment:
The Cloud tools provide a command to generate the Docker Compose configuration.

1.  In your local environment, start the Docker configuration generator.

    ```bash
    vendor/bin/ece-tools docker:build
    ``` 

1.  Build files to containers and run in the background.

    ```bash
    docker-compose up -d --build
    ``` 

1.  Start the Magento installer. This step may take time.

    ```bash
    docker-compose run cli magento-installer
    ```

    The installer performs the following Cloud tools operations to launch your project:

    ```terminal
    Run bin/ece-tools build
    Run bin/ece-tools deploy
    Run bin/ece-tools prestart
    Run bin/ece-tools post-deploy
    ```

1.  Open the http://localhost:8080 URL in a browser.

### Integration testing with Cloud tools
A dedicated Docker environment provides the opportunity for you to customize and exercise the following advantages:

-  2-layer configuration for Docker build and Travis CI
-  Customizable Docker Compose file to support a wide range of environment sets
-  Flexible permissions
-  Easy local setup and implementation
