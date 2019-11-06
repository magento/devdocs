---
group: cloud-guide
title: Developer mode
functional_areas:
  - Cloud
  - Setup
  - Docker
---

Developer mode supports an active development environment with full, writable filesystem permissions. This option builds the Docker environment in developer mode and verifies configured service versions. System performance is slower in developer mode because of additional file synchronization operations.

{: .bs-callout-info }
The `{{site.data.var.ct}}` version 2002.0.18 and later supports developer mode.

File synchronization is required for developer mode. Use one of the following tools:

-  [docker-sync][dsync-install]
-  [mutagen][mutagen-install]

Large files (>1 GB) can cause a period of inactivity. DB dumps and archive files—ZIP, SQL, GZ, and BZ2—are not necessary to sync. You can find exclusions to these file types in the `docker-sync.yml` and `mutagen.sh` files.

{:.procedure}
To launch the Docker environment in developer mode:

1. Download a Magento application template from the [Magento Cloud repository][cloud-repo]. Be careful to select the branch that corresponds with the Magento version.

1. Add your [Magento access credentials][magento-creds] to the `auth.json` file.

1. Install the template dependencies.

   ```bash
   composer install
   ```

1. Install the `docker-sync` tool using the [Installation instructions][dsync-install].

   Optionally, you can install the `mutagen.io` tool using the [Installation instructions][mutagen-install]. If you have it installed, continue to the next step.

1. In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to [specify a version][services].

   ```bash
   ./vendor/bin/ece-tools docker:build --mode="developer"
   ```

   By default, the docker-compose configuration uses 'docker-sync' for file synchronization. To use 'mutagen.io' for file synchronization, you must run the command with the `--sync-engine=mutagen` option.

   For example:

   ```bash
   ./vendor/bin/ece-tools docker:build --mode="developer" --sync-engine=mutagen
   ```

1. _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

   ```bash
   cp .docker/config.php.dist .docker/config.php
   ```

1. _Optional_: Configure the Docker global variables in the `docker-compose.yml` file. For example, you can [enable and configure Xdebug][xdebug].

1. Start the file synchronization.

   For the `docker-sync` tool:

   ```bash
   docker-sync start
   ```

   If this is the first installation, expect to wait a few minutes for file synchronization.

   {: .bs-callout-info}
   If you use `mutagen.io` for file synchronization, skip this step. You start `mutagen.io` _after_ deploying the docker containers.

1. Build files to containers and run in the background.

   ```bash
   docker-compose up -d
   ```

1. Start the file synchronization with `mutagen.io`. If you use `docker-sync` for file synchronization, skip this step.

   ```bash
   bash ./mutagen.sh
   ```

1. Deploy Magento in the Docker container.

   ```bash
   docker-compose run deploy cloud-deploy && \
   docker-compose run deploy magento-command deploy:mode:set developer
   ```

   {: .bs-callout-info }
   Developer mode does not require the `build` operation.

1. Configure and connect Varnish.

   ```bash
   docker-compose run deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env && \
   docker-compose run deploy magento-command setup:config:set --http-cache-hosts=varnish
   ```

1. Clear the cache.

   ```bash
   docker-compose run deploy magento-command cache:clean
   ```

1. Access the local Magento Cloud template by opening one of the following URLs in a browser:

   -  [`http://magento2.docker`](http://magento2.docker)

   -  [`https://magento2.docker`](https://magento2.docker)

[cloud-repo]: https://github.com/magento/magento-cloud
[magento-creds]: {{page.baseurl}}/install-gde/prereq/connect-auth.html
[services]: {{page.baseurl}}/cloud/docker/docker-services.html#service-versions
[xdebug]: {{page.baseurl}}/cloud/docker/docker-development-debug.html#configure-xdebug
[dsync-install]: https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html
[mutagen-install]: https://mutagen.io/documentation/introduction/installation/