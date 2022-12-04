---
group: cloud-guide
title: Start the Docker environment
functional_areas:
  - Cloud
  - Setup
  - Docker
migrated_to: https://developer.adobe.com/commerce/cloud-tools/docker/deploy/production-mode/
layout: migrated
---

Production mode is the default configuration setting for launching the Docker environment with read-only filesystem permissions. This option builds the Docker environment in production mode and verifies configured service versions.

{%include cloud/note-docker-config-reference-link.md%}

**Prerequisites:**

Complete the [installation steps].

{:.procedure}
To launch the Docker environment in production mode:

1. In your local environment, start the Docker configuration generator. You can use the service configuration options, such as `--php`, to [specify a version][services].

   ```bash
   ./vendor/bin/ece-docker build:compose
   ```

1. _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

   ```bash
   cp .docker/config.php.dist .docker/config.php
   ```

1. Build files to containers and run in the background.

   ```bash
   docker-compose up -d
   ```

1. Install {{site.data.var.ee}} in your Docker environment.

   -  Build {{site.data.var.ee}} in the Docker container.

      ```bash
      docker-compose run --rm build cloud-build
      ```

   -  Deploy {{site.data.var.ee}} in the Docker container.

      ```bash
      docker-compose run --rm deploy cloud-deploy
      ```

   -  Run post-deploy hooks.

      ```bash
      docker-compose run --rm deploy cloud-post-deploy
      ```

1. Configure and connect Varnish.

   ```bash
   docker-compose run --rm deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env
   ```

   ```bash
   docker-compose run --rm deploy magento-command setup:config:set --http-cache-hosts=varnish
   ```

1. Clear the cache.

   ```bash
   docker-compose run --rm deploy magento-command cache:clean
   ```

1. _Optional_: Restart services if the static content does not synchronize with all images after generation on build phase.

   ```bash
   docker-compose restart
   ```

1. Access the local storefront by opening one of the following URLs in a browser:

   -  `http://magento2.docker`

   -  `https://magento2.docker`

1. Use the default credentials to log in to the Admin (`https://magento2.docker/admin`).

   -  username = `Admin`
   -  password = `123123q`

1. Access the default email service: `http://magento2.docker:8025`

{%include cloud/note-docker-ssl-not-private-connection.md%}

<!--Link definitions-->
[configure Xdebug]: {{site.baseurl}}/cloud/docker/docker-development-debug.html#configure-xdebug
[Configuration sources]: {{site.baseurl}}/docker/docker-config.html
[installation steps]: {{site.baseurl}}/cloud/docker/docker-installation.html
[latest release of the {{site.data.var.mcd-package}}]: https://github.com/magento/magento-cloud-docker/releases
[services]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-containers