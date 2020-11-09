---
group: cloud-guide
title: Production mode
functional_areas:
  - Cloud
  - Setup
  - Docker
---

Production mode is the default configuration setting for launching the Docker environment with read-only filesystem permissions. This option builds the Docker environment in production mode and verifies configured service versions.

{%include cloud/note-docker-config-reference-link.md%}

{:.procedure}
To launch the Docker environment in production mode:

1. Download a Magento application template from the [Magento Cloud repository][cloud-repo]. Be careful to select the branch that corresponds with the Magento version.

1. Add your [Magento access credentials][magento-creds] to the `auth.json` file.

1. Install the template dependencies and add the default hostname to your `/etc/hosts` file, use the following command to run the Docker initialization script:

   ```bash
   curl https://raw.githubusercontent.com/magento/magento-cloud-docker/<package-version>/bin/init-docker.sh | bash
   ```

   For `<package-version>`, use the [latest release of the {{site.data.var.mcd-package}}].

   You can customize the options for the `init-docker.sh` initialization script your Docker environment. For example, you can specify the PHP version (default is 7.2) and the [Docker image version] (default 1.1). We recommend using the latest version of the Magento Cloud Docker images. Run the following command to see the available options:

   ```bash
   curl https://raw.githubusercontent.com/magento/magento-cloud-docker/1.1.0/bin/init-docker.sh | bash -s -- --help
   ```

1. In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to [specify a version][services].

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

1. Install Magento in your Docker environment.

   -  Build Magento in the Docker container.

      ```bash
      docker-compose run build cloud-build
      ```

   -  Deploy Magento in the Docker container.

      ```bash
      docker-compose run deploy cloud-deploy
      ```

   -  Run post-deploy hooks.

      ```bash
      docker-compose run deploy cloud-post-deploy
      ```

1. Configure and connect Varnish.

   ```bash
   docker-compose run deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env
   ```

   ```bash
   docker-compose run deploy magento-command setup:config:set --http-cache-hosts=varnish
   ```

1. Clear the cache.

   ```bash
   docker-compose run deploy magento-command cache:clean
   ```

1. _Optional_: Restart services if the static content does not synchronize with all images after generation on build phase.

   ```bash
   docker-compose restart
   ```

1. Access the local Magento Cloud template by opening one of the following URLs in a browser:

   -  [`http://magento2.docker`](http://magento2.docker)

   -  [`https://magento2.docker`](https://magento2.docker)

[cloud-repo]: https://github.com/magento/magento-cloud
[Docker image version]: https://hub.docker.com/r/magento/magento-cloud-docker-php/tags
[magento-creds]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
[services]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-containers
[configure Xdebug]: {{site.baseurl}}/cloud/docker/docker-development-debug.html#configure-xdebug
