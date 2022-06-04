---
group: cloud-guide
title: Developer mode
functional_areas:
  - Cloud
  - Setup
  - Docker
---

Developer mode supports an active development environment with full, writable file system permissions. This option builds the Docker environment in developer mode and verifies configured service versions.

## Performance considerations

On macOS and Windows systems, performance is slower in developer mode because of additional file synchronization operations. However, you can improve performance by using either the `manual-native` or the `mutagen` file synchronization option when you generate the `docker-compose.yml` file. See [Synchronizing data in Docker][sync].

{: .bs-callout-info }
The `{{site.data.var.ct}}` version 2002.0.18 and later supports developer mode.

Large files (>1 GB) can cause a period of inactivity. DB dumps and archive files—ZIP, SQL, GZ, and BZ2—are not necessary to sync. You can find exclusions to these file types in the `mutagen.sh` file.

## Launch Docker in developer mode

{%include cloud/note-docker-config-reference-link.md%}
**Prerequisites:**

-  Complete the [installation steps].
-  [Install file synchronization tools][sync] if needed.

{:.procedure}
To launch the Docker environment in developer mode:

1. In your local project root, generate the Docker Compose configuration file. You can use the service configuration options, such as `--php`, to [specify a version][services].

   ```bash
   ./vendor/bin/ece-docker build:compose --mode="developer"
   ```

   {:.bs-callout-info}
   The `--mode` option in this step determines the mode in a later `deploy` step.

   If required, set the option for [synchronizing data in Docker][sync]. For example:

   ```bash
   ./vendor/bin/ece-docker build:compose --mode="developer" --sync-engine="mutagen"
   ```

   {:.bs-callout-tip}
   You can further customize the Docker Compose configuration file by adding additional options to the `build:compose` command. For example, you can set the software version for a service, or add Xdebug configuration. See [service configuration options].

1. _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

   ```bash
   cp .docker/config.php.dist .docker/config.php
   ```

1. Build files to containers and run in the background.

   ```bash
   docker-compose up -d
   ```

1. If you selected the `manual-native` option, start the file synchronization.

   **To copy all data from the local machine to the Docker volume:**

   ```bash
   ./bin/magento-docker copy-to --all
   ```

   {:.bs-callout-info}
   Additionally, you can provide a specific directory from the local machine to copy to the Docker volume, for example `vendor`:

   ```bash
   ./bin/magento-docker copy-to vendor
   ```

   **To copy all data from the Docker volume to the local machine:**

   ```bash
   ./bin/magento-docker copy-from --all
   ```

   {:.bs-callout-info}
   Additionally, you can provide a specific directory from the Docker volume to copy from, such as `vendor`:

   ```bash
   ./bin/magento-docker copy-from vendor
   ```

1. If you selected `mutagen` for file synchronization, start the file synchronization.

   ```bash
   bash ./mutagen.sh
   ```

   {:.bs-callout-info}
   If you host your Docker environment on Windows and the session start fails, update the `mutagen.sh` file to change the value for the `--symlink-mode` option to `portable`.

1. Install {{site.data.var.ee}} in your Docker environment.

   -  For {{site.data.var.ee}} version 2.4 and 2.4.1 only, run the following command to apply patches before you deploy.

      ```bash
      docker compose run --rm deploy php ./vendor/bin/ece-patches apply
      ```

   -  Deploy {{site.data.var.ee}} in the Docker container.

      ```bash
      docker compose run --rm deploy cloud-deploy
      ```

   -  Run post-deploy hooks.

       ```bash
       docker compose run --rm deploy cloud-post-deploy
       ```

      {: .bs-callout-info }
      Developer mode does not require the `build` operation.

1. Configure and connect Varnish.

   ```bash
   docker compose run --rm deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env
   ```

   ```bash
   docker compose run --rm deploy magento-command setup:config:set --http-cache-hosts=varnish
   ```

1. Clear the cache.

   ```bash
   docker-compose run --rm deploy magento-command cache:clean
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

[installation steps]: {{site.baseurl}}/cloud/docker/docker-installation.html
[magento-creds]: {{site.baseurl}}/cloud/setup/first-time-setup-import-prepare.html#auth-json
[mutagen-install]: https://mutagen.io/documentation/introduction/installation/
[services]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-containers
[service configuration options]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-configuration-options
[sync]: {{site.baseurl}}/cloud/docker/docker-syncing-data.html
[xdebug]: {{site.baseurl}}/cloud/docker/docker-development-debug.html#configure-xdebug]
