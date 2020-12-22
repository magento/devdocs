---
group: cloud-guide
title: Developer mode
functional_areas:
  - Cloud
  - Setup
  - Docker
---

Developer mode supports an active development environment with full, writable filesystem permissions. This option builds the Docker environment in developer mode and verifies configured service versions. On macOS and Windows systems, performance is slower in developer mode because of additional file synchronization operations. However, you can improve performance by using either `mutagen` or `docker-sync` file synchronization tools when you generate the `docker-compose.yml` configuration file. See [Synchronizing data in Docker].

{: .bs-callout-info }
The `{{site.data.var.ct}}` version 2002.0.18 and later supports developer mode.

Large files (>1 GB) can cause a period of inactivity. DB dumps and archive files—ZIP, SQL, GZ, and BZ2—are not necessary to sync. You can find exclusions to these file types in the `docker-sync.yml` and `mutagen.sh` files.

{%include cloud/note-docker-config-reference-link.md%}

{:.procedure}
To launch the Docker environment in developer mode:

1. Download a Magento application template from the [Magento Cloud repository][cloud-repo] and copy the files to your {{site.data.var.mcd-prod }} project directory. Be careful to select the branch that corresponds with the Magento version.

1. Add your [Magento access credentials][magento-creds] to the `auth.json` file.

1. Run the installation script, `init-docker.sh` to install template dependencies and add the default hostname to your `/etc/hosts` file.

   ```bash
   curl https://raw.githubusercontent.com/magento/magento-cloud-docker/<magento-cloud-docker-package-version>/bin/init-docker.sh | bash
   ```

   For `<package-version>`, use the [latest release of the {{site.data.var.mcd-package}}].

   You can customize the options for the `init-docker.sh` initialization script your Docker environment. For example, you can specify the PHP version (default is 7.2) and the [{{site.data.var.mcd-prod}} Docker image] (default 1.1). We recommend using the latest version. Run the following command to see the available options:

   ```bash
   curl https://raw.githubusercontent.com/magento/magento-cloud-docker/<magento-cloud-package-version>/bin/init-docker.sh | bash -s -- --help
   ```

1. On macOS or Windows hosts, install the selected file synchronization tool:

   -  [Docker-sync Installation instructions][dsync-install]
   -  [Mutagen.io Installation instructions][mutagen-install]

1. In your local environment, generate the Docker Compose configuration file. You can use the service keys, such as `--php`, to [specify a version][services].

   ```bash
   ./vendor/bin/ece-docker build:compose --mode="developer"
   ```

   If required, set the option for [synchronizing data in Docker]. For example:

   ```bash
   ./vendor/bin/ece-docker build:compose --mode="developer" --sync-engine="mutagen"
   ```

   {:.bs-callout-info}
   You can further customize the Docker Compose configuration file by adding additional options to the `build:compose` command. For example, you can set the software version for a service, or add Xdebug configuration. See [service keys].

1. _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

   ```bash
   cp .docker/config.php.dist .docker/config.php
   ```

1. If you selected `docker-sync` for file synchronization, start the file synchronization.

   For the `docker-sync` tool:

   ```bash
   docker-sync start
   ```

   If this is the first installation, expect to wait a few minutes for file synchronization.

1. Build files to containers and run in the background.

   ```bash
   docker-compose up -d
   ```

1. If you selected `mutagen` for file synchronization, start the file synchronization.

   ```bash
   bash ./mutagen.sh
   ```

   {:.bs-callout-info}
   If you host your Docker environment on Windows and the session start fails, update the `mutagen.sh` file to change the value for the `--symlink-mode` option to `portable`.

1. Install Magento in your Docker environment.

   -  For Magento version 2.4 and 2.4.1 only, run the following command to apply patches before you deploy.

      ```bash
      docker-compose run --rm deploy php ./vendor/bin/ece-patches apply
      ```

   -  Deploy Magento in the Docker container.

      ```bash
      docker-compose run --rm deploy cloud-deploy
      ```

      ```bash
      docker-compose run --rm deploy magento-command deploy:mode:set developer
      ```

   -  Run post-deploy hooks.

       ```bash
       docker-compose run --rm deploy cloud-post-deploy
       ```

      {: .bs-callout-info }
      Developer mode does not require the `build` operation.

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

1. Access the local Magento Cloud template by opening one of the following URLs in a browser:

   -  `http://magento2.docker`

   -  `https://magento2.docker`

<!--Link definitioons-->

[cloud-repo]: https://github.com/magento/magento-cloud
[{{site.data.var.mcd-prod}} Docker image]: https://hub.docker.com/r/magento/magento-cloud-docker-php/tags
[dsync-install]: https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html
[latest release of the {{site.data.var.mcd-package}}]: https://github.com/magento/magento-cloud-docker/releases
[magento-creds]: {{site.baseurl}}/cloud/setup/first-time-setup-import-prepare.html#auth-json
[mutagen-install]: https://mutagen.io/documentation/introduction/installation/
[services]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-containers
[service keys]: {{site.baseurl}}/cloud/docker/docker-containers.html#service-configuration-options
[Synchronizing data in Docker]: {{site.baseurl}}/cloud/docker/docker-syncing-data.html
[xdebug]: {{site.baseurl}}/cloud/docker/docker-development-debug.html#configure-xdebug]
