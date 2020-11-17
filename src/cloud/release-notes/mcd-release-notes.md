---
group: cloud-guide
title: Magento Cloud Docker release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [`{{site.data.var.mcd-package}}`](https://github.com/magento/magento-cloud-docker) package provides functionality and Docker images to deploy {{ site.data.var.ee }} to a local Cloud environment. These release notes describe the latest improvements to this package, which is a component of [{{ site.data.var.csuite }}]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html).

The `{{site.data.var.mcd-package}}` package uses the following version sequence: `<major>.<minor>.<patch>`.

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## v1.2.0
*Release date: November 9, 2020*<br/>

-  {:.new}**Container updates–**

   -  {:.new}**PHP-FPM container**–Added support for the gnupg PHP extension. *[Fix submitted by G Arvind from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/210).*<!--MCLOUD-5981-->

   -  {:.fix}**Database container**–Fixed the database container health check by adding the required database password to the health check command.<!--MCLOUD-7122-->

   -  {:.new}**Elasticsearch container**

      -  Added support for Elasticsearch 7.9 for compatibility with upcoming Magento releases.<!--MCLOUD-7190-->

      -  **Elasticsearch plugin configuration**–Added support to use the Elasticsearch plugin configuration information from the `services.yaml` file to generate the `docker-compose.yaml` file for a {{ site.data.var.mcd-prod }} environment. See [Elasticsearch plugins]({{ site.baseurl}}/cloud/docker/docker-containers-service.html#elasticsearch-plugins).<!--MCLOUD-2789-->

      -  **Elasticsearch plugin support**–Added support for the following Elasticsearch plugins: `analysis-icu`, `analysis-phonetic`, `analysis-stempel`, and `analysis-nori`.  The `analysis-icu` and `analysis-phonetic` plugins are installed by default. You can add or remove the `analysis-stempel` and `analysis-nori` plugins as needed.<!--MCLOUD-2789-->

   -  {:.new} **CLI container**

      -  **Run commands inside Docker PHP containers**–Now you can use the Magento Cloud Docker CLI to run commands inside PHP containers in your Docker environment without having to install PHP on the host. For example, the following command builds the configuration:  `./bin/magento-docker php 7.3 vendor/bin/ece-docker build:compose`. See [Magento Cloud Docker CLI]({{ site.baseurl }}/cloud/docker/docker-quick-reference.html#magento-cloud-docker-cli). *[Fix submitted by G Arvind from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/209).*<!--MCLOUD-5982-->

      -  Added the OpenSSH-client to PHP CLI containers. Now, you can use ssh-agent forwarding for Composer if the `composer.json` file contains private git repositories that require an ssh client to use Composer commands.<!--MCLOUD-6008-->

   -  {:.fix}**TLS container**–Now, the [TLS container]({{ site.baseurl}}/cloud/docker/docker-containers-service.html#tls-container) is based on the `https://hub.docker.com/r/magento/magento-cloud-docker-nginx` Docker image instead of the Centos image. This change fixes issues that caused errors when sending HTTPS requests between containers in the Cloud Docker environment.<!--MCLOUD-6469-->

   -  {:.new}**Test container**–Added a test container for Magento application testing, and added the `--with-test` option to the Docker `build:compose` command to create the container only when testing Magento in the Docker environment. See [Magento application testing](https://devdocs.magento.com/cloud/docker/docker-test-app-mftf.html).<!--MCLOUD-6394-->

   -  {:.new}**FPM-XDEBUG container**

      -  {:.new}**Configure Xdebug on Linux**–Added the `--set-docker-host` option to the `ece-docker build:compose` command to configure the `host.docker.internal` value in the Xdebug container. This option is required to use Xdebug on Linux systems. See [Configure Xdebug for Docker]({{ site.baseurl }}/cloud/docker/docker-development-debug.html).<!--MCLOUD-6430-->

      -  {:.fix}Fixed the Xdebug variable configuration for the Docker ENTRYPOINT to resolve `uninitialized "with_xdebug" variable` errors in the logs. *[Fix submitted by Florent Olivaud](https://github.com/magento/magento-cloud-docker/pull/218)*<!--MCLOUD-6043-->

-  {:.new}**Docker configuration changes**

   -  **MailHog configuration**–Now you can use the following `ece-docker build:compose` command options to disable MailHog and specify ports: `--no-mailhog`, `--mailhog-http-port`, and `--mailhog-smtp-port`. See [Set up email]({{ site.baseurl }}/cloud/docker/docker-config.html#set-up-email).<!--MCLOUD-6898, MCLOUD-6660-->

   -  For {{site.data.var.mcd-prod}} 1.2.0 and later, Magento now provides Docker images for each patch version, and the Docker configuration generator creates the Docker configuration with a specified patch version instead of using the latest. Previously, the Docker configuration generator built the configuration using the latest patch version which could break {{ site.data.var.mcd-prod}} environments built using an earlier version.<!--MCLOUD-7093-->

   -  **Specify custom images and versions in custom Magento Cloud Docker configuration**—Updated the `build:custom:compose` command with options to specify custom images and versions when generating a custom Docker compose configuration file (`docker-compose.yaml`). See [Build a custom Docker Compose configuration]({{ site.baseurl }}/cloud/docker/docker-quick-reference.html#build-a-custom-docker-compose-configuration). <!--MCLOUD-7089-->

   -  Updated the Docker host configuration to expose port 443 to enable access to Magento (`https://magento2.docker`) from all CLI containers. You can change the default port by adding the `--tls-port` option when you generate the Docker configuration file.<!--MCLOUD-6806-->

-  {:.fix}Fixed an issue that caused the {{site.data.var.mcd-prod}} build to fail if the `app/etc/env.php` file exists.<!--MCLOUD-6732-->

-  {:.fix}Updated the build configuration to replace named volumes with regular volumes to prevent issues when deploying {{ site.data.var.mcd-prod }} on Linux or Windows Subsystem for Linux (WSL2).<!--MCLOUD-6732-->

-  {:.fix}Updated the {{site.data.var.mcd-prod}} functional tests to support Composer 2.0.<!--MCLOUD-7183-->

## v1.1.2
*Release date: September 9, 2020*<br/>

-  {:.new}Added support for Elasticsearch 7.7<!--MCLOUD-6219-->

## v1.1.1
*Release date: August 5, 2020*<br/>

-  {:.fix}**Updated email configuration**–Updated the default {{ site.var.ece.mcd-product }} configuration to support the MailHog service instead of using SendMail. See [Set up email]({{ site.baseurl }}/cloud/docker/docker-config.html#set-up-email).<!--MCLOUD-5624-->

-  {:.fix}Restored the PS library to the Cloud Docker environment configuration to fix `ps:  command not found` errors.<!--MCLOUD-6621-->

-  {:.fix}Updated the default {{ site.data.var.mcd-prod }} configuration to remove automatic mounting of the database entrypoint and MariaDB volumes to fix `Cannot create container for service db` errors that can occur when starting your Cloud Docker environment.

   Now, you can configure the Cloud Docker environment to mount the database directories by adding the following options to the `ece-docker build:compose` command: `--with-entry-point` and `with-mariadb-conf`. See [Service configuration options]({{site.baseurl}}/cloud/docker/docker-containers.html#service-configuration-options).<!--MCLOUD-6424-->

-  {:.new}**CLI command updates**

{: .docker-service-versions-table}

   Action | Command
   ------ | -------
   Add an entrypoint to the database container to restore the database from backup | `./vendor/bin/ece-docker build:compose --db --with-entrypoint`
   Add a MariaDB configuration volume | `./vendor/bin/ece-docker build:compose --db --mariadb-conf`

<!--Add release notes below-->

## v1.1.0
*Release date: June 25, 2020*<br/>

-  {:.new}**Added support for the Magento split database performance solution**–Now you can configure and deploy a Magento store using the Magento Split database performance solution in the Cloud Docker environment. See [Enable split database solution]({{site.baseurl}}/cloud/docker/docker-split-db.html).<!--MCLOUD-3740-->

-  {:.new}**Support for {{site.data.var.ee}} and {{site.data.var.ce}} deployment**–Now you can use {{site.data.var.mcd-prod}} to deploy a local development environment for projects that are not hosted on the Magento Cloud platform.<!--MCLOUD-5667-->

-  {:.new}**Blackfire.io support**–Added support to use the [Blackfire.io extension]({{site.baseurl}}/cloud/docker/docker-config-blackfire-io.html) for automated performance testing. *[Fix submitted by Adarsh Manickam from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/202)*<!--MCLOUD-5857-->

-  {:.new}**Container updates**

   -  **Varnish**—Now Varnish is the default cache when you deploy Magento in a Cloud Docker environment using a supported version of the Magento Cloud application template. See [Varnish container]({{site.baseurl}}/cloud/docker/docker-containers-service.html#varnish-container).<!--MCLOUD-2634-->

   -  Added the `--no-varnish` option to skip Varnish service installation when you generate the Cloud Docker configuration file.<!--MCLOUD-2634-->

   -  {:.new}**Database**

      -  Added the support for the MySQL database. Now, you can configure the Cloud Docker environment with either MariaDB or MySQL. See [Service configuration options]({{site.baseurl}}/cloud/docker/docker-containers.html#service-configuration-options).<!--MCLOUD-5691-->

      -  Added the ability to set the increment and offset settings for database replication when you generate the Docker compose file. See [Service containers]({{site.baseurl}}/cloud/docker/docker-containers.html#service-containers).<!--MCLOUD-5735-->

   -  {:.new}**PHP-FPM**

      -  Added support for PHP 7.4. *[Fix submitted by Mohanela Murugan from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/198)*<!--MCLOUD-198-->

      -  Added ability to copy a `php.ini` file in the Magento root project directory to the Cloud Docker environment and apply custom PHP settings to the PHP-FPM and CLI containers. See [Customize PHP settings]({{site.baseurl}}/cloud/docker/docker-containers-service.html#customize-php-settings). *[Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/130).*<!--MCLOUD-6012-->

      -  Added a container health check. *[Fix submitted by Visanth Sampath from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/188).*<!--MCLOUD-5752-->

   -  {:.fix}**Node.js**—Updated the default Node.js version from version 8 to version 10 to improve security. Node.js version 8 is deprecated and no longer updated with bug fixes or security patches. *[Fix submitted by Mohan Elamurugan from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/183).*<!--MCLOUD-5586-->

   -  {:.new}**Elasticsearch**

      -  Added support for Elasticsearch 6.8, 7.2, 7.5, and 7.6.<!--MCLOUD-4050, MCLOUD-5855,MCLOUD-5860-->

      -  Added the ability to customize the [Elasticsearch container configuration]({{ site.baseurl }}/cloud/docker/docker-containers-service.html#elasticsearch-container) when you generate the Docker compose configuration file.<!--MCLOUD-3059-->

      -  Added the `--no-es` option to the service configuration options for generating the Docker Compose configuration file. Use this option to skip the Elasticsearch container installation and and use MySQL search instead. This option is supported only for Magento versions 2.3.5 and earlier.<!--MCLOUD-3766-->

   -  {:.new}**FPM-XDEBUG container**—Added a service configuration option to install and configure Xdebug for debugging PHP in your Cloud Docker environment. See [Configure Xdebug]({{site.baseurl}}/cloud/docker/docker-development-debug.html).<!--MCLOUD-4098-->

-  {:.new}**Docker configuration changes**

   -  Added health checks for the PHP-FPM, Redis, Elasticsearch, and MySQL Docker service containers.<!--MCLOUD-3335 and MCLOUD-5856-->

   -  Changed the default file synchronization mode to `native` in Developer mode.<!--MCLOUD-3890 -->

   -  Added version information to the generic Docker service container image when generating the `docker-compose.yml` file.<!--MCLOUD-3878-->

   -  Improved ability to handle large responses from the upstream PHP-FPM container by increasing the `fastcgi_buffers` value for the Nginx server.<!--MCLOUD-5980-->

   -  Improved mutagen file synchronization performance by adding a second sync session to synchronize files in the `vendor` directory. This change prevents mutagen from getting stuck during the file synchronization process. *[Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/127).*<!--MCLOUD-6010-->

   -  {:.new}**CLI command updates**

      {: .docker-service-versions-table}

      Action | Command
      ------ | -------
      Clear Redis cache | `bin/magento-docker flush-redis`
      Clear Varnish cache | `bin/magento-docker flush-varnish`
      Skip default Varnish installation | `.vendor/bin/ece-docker build:compose --no-varnish`<!--MCLOUD-2634-->
      [Customize Elasticsearch options]({{site.baseurl}}/cloud/docker/docker-containers-service.html#elasticsearch-container) | `.vendor/bin/ece-docker    build:compose --es-env-var`<!--MCLOUD-3059-->
      [Remove Elasticsearch configuration]({{site.baseurl}}/cloud/docker/docker-containers-service.html#elasticsearch-container) | `.vendor/bin/ece-docker    build:compose --no-es`<!--MCLOUD-3766-->
      Configure DB container with MySQL version 5.6 or 5.7 |  `./vendor/bin/ece-docker build:compose --db <mysql-version-number> --db-image mysql`<!--MCLOUD-5691-->
      Specify custom Magento base URL | `./vendor/bin/ece-docker build:compose --host=<hostname> --port=<port-number>`<!--MCLOUD-3063-->
      [Add container for Xdebug configuration]({{site.baseurl}}/cloud/docker/docker-development-debug.html) | `.vendor/bin/ece-docker build:compose --mode    developer --sync-engine native --with-xdebug`<!--MCLOUD-4098-->

-  {:.fix}Fixed the configuration of mutagen file synchronization to prevent mutagen from creating stale sessions. *[Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/127).*<!--MCLOUD-6010-->

-  {:.fix}Fixed a configuration issue that caused syntax errors in the Docker compose log when starting the PHP-FPM container. *[Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/129)*<!--MCLOUD-3958-->

-  {:.fix}Fixed volume conflict errors that sometimes occurred when using multiple Docker environments. *[Fix submitted by G Arvind from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/168).*

-  {:.fix}Fixed an issue that caused the `ece-docker build:compose` command to fail if the configuration included Blackfire.io. *[Fix submitted by G Arvind from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/199).* <!--MCLOUD-5797-->

-  {:.fix}Updated the PHP CLI image configuration to prevent out-of-memory errors that occurred when installing multiple packages using {{site.data.var.mcd-prod}}. *[Fix submitted by Mohan Elamurugan from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/197).*<!--MCLOUD-5818-->

-  {:.fix}Added support for multiple MySQL users in the Cloud Docker environment. In earlier releases, the `build:compose` operation failed if the `magento.app.yaml` file specified multiple database users. *[Fix submitted by G Arvind from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/181).*<!--MCLOUD-5670-->

-  {:.fix}Removed `rsyslog` from the {{site.data.var.mcd-prod}} PHP containers to resolve compatibility issues that caused warning notifications during deployment. Magento Cloud Docker does not use the rsyslog utility.<!--MCLOUD-6173-->

## v1.0.0
*Release date: Feb 5, 2020*<br/>

-  {:.new}**Created a separate package to deliver `{{site.data.var.mcd-prod}}`**–Moved the source code to deliver {{site.data.var.mcd-prod}} from the `{{site.data.var.ct}}` repository to the [new `magento-cloud-docker` repository](https://github.com/magento/magento-cloud-docker) to maintain code quality and provide independent releases.  The new package is a dependency for {{site.data.var.ct}} v2002.1.0 and later.

   When you update {{site.data.var.ct}}, you also update the `{{site.data.var.mcd-package}}` package to version 1.0.0. If you used {{site.data.var.mcd-prod}} with an earlier `{{site.data.var.ct}}` release (2002.0.x), review the [backward incompatibilities]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html#magento-cloud-docker-changes) and update your project as scripts, commands, and processes as needed.

-  {:.new}**Added versioning to the Docker images**–You must now update the `{{site.data.var.mcd-package}}` package to get the updated images.<!--MAGECLOUD-4737-->

-  {:.new}**Container updates**–

   -  {:.new}**PHP-FPM container**–

      -  {:.new}**Added Node.js support**–Updated the PHP-FPM image to support node, npm, and the grunt-cli capabilities inside the PHP container.<!--MAGECLOUD-3953-->

      -  {:.new}**Added support for [ionCube](https://www.ioncube.com/)**–Updated the default Docker configuration to support ionCube in the local Docker development environment.<!--MAGECLOUD-4354-->

   -  {:.new}**Web container**–

      -  {:.new}**Customize NGINX configuration**–Added the capability to mount a custom `nginx.conf` file to the {{site.data.var.mcd-prod}} environment. See [Web container]({{site.baseurl}}/cloud/docker/docker-containers-service.html#web-container).<!--MAGECLOUD-4204-->

      -  {:.new}**Auto-generated NGINX certificates**–The Docker configuration file now includes the configuration to auto-generate NGINX certificates for the Web container.<!--MAGECLOUD-4258-->

   -  {:.new}**New Selenium container**–Added a [Selenium container]({{site.baseurl}}/cloud/docker/docker-containers-service.html#selenium-container) to support {{site.data.var.ee}} application testing using the Magento Functional Testing Framework (MFTF).<!--MAGECLOUD-4040-->

   -  {:.new}**RabbitMQ version support**–Updated the RabbitMQ container configuration to support RabbitMQ version 3.8.<!--MAGECLOUD-4674-->

   -  {:.fix}**Persistent database container**–The `magento-db: /var/lib/mysql` database volume now persists after you stop and remove the Docker configuration and restores when you restart the Docker configuration. Now, you must manually delete the database volume. See [Database containers].<!--MAGECLOUD-3978-->

   -  {:.new}**TLS container**–

      -  {:.new}**Updated the container base image to use official image**–The [Magento Cloud TLS container] image is now based on the official `debian:jessie` Docker image.–<!--MAGECLOUD-4163-->

      -  {:.new}**Added support for the [Pound TLS Termination Proxy]**–The [Pound configuration file][`pound.cfg`] adds the following ENV variables to customize the Docker configuration for the TLS container:

         -  **`TimeOut`**–Sets the Time to First Byte (TTFB) timeout value. The default value is 300 seconds.

         -  **`RewriteLocation`**–Determines whether the Pound proxy rewrites the location to the request URL by default. Defaults to `0` to prevent the rewrite from breaking redirects to outside websites like an external SSO site. [Fix submitted by Sorin Sugar](https://github.com/magento/magento-cloud-docker/pull/37)<!--MAGECLOUD-4061-->

      -  {:.new} Increased the timeout value in the TLS container configuration from 15 to 300 seconds. [Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/78)<!--MAGECLOUD-4460-->

   -  {:.new}**Varnish container**–

      -  {:.new}**Updated the container base image to use official image**—The [Magento Cloud Varnish container] is now based on the official `centos` Docker image.<!--MAGECLOUD-4163-->

      -  {:.new}**Improved default timeout configuration**-Added `.first_byte_timeout` and `.between_bytes_timeout` configuration to the Varnish container. Both timeout values default to `300s` (5 minutes). [Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/78)<!--MAGECLOUD-4460-->

      -  {:.fix}**Skip Varnish during Xdebug sessions**–Updated the Varnish container configuration to return `pass` on requests received when Xdebug is enabled. In previous releases, you could not use Xdebug if the Docker environment included Varnish. [Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/111).<!--MAGECLOUD-4873-->

-  {:.new}**Docker configuration changes**–

   -  {:.new}**Manage mounts and volumes for your project**–Added the ability to manage mounts and volumes when launching a Docker environment for local development. See [Sharing Magento Cloud project data].<!--MAGECLOUD-3248-->

   -  {:.new}**Support for network bridge mode**–Added support for network bridge mode to enable connections between Docker containers over the local network.<!--MAGECLOUD-4165-->

   -  {:.new}**Cron container disabled by default**–To improve performance, the Cron container is no longer configured by default when you build the Docker environment. You can use the `--with-cron` option on the Docker build command to add a Cron container to your environment. See [Managing cron jobs]({{site.baseurl}}/cloud/docker/docker-manage-cron-jobs.html).<!--MAGECLOUD-5181-->

   -  {:.new}**Stop synchronizing large backup files**–Added DB dumps and archive files—ZIP, SQL, GZ, and BZ2—to the exclusion list in the `dist/docker-sync.yml` and `dist/mutagen.sh` files. Synchronizing large files (>1 GB) can cause a period of inactivity and backup files do not normally require synchronization since you can regenerate them.<!--MAGECLOUD-3979-->

-  {:.new}**Command changes**–

   -  {:.fix}Renamed the `./bin/docker` file to `./bin/magento-docker` to fix an issue that caused some Docker environments to break because the `./bin/docker` file overwrites existing Docker binary files. This is a [backward incompatible change] that requires updates to your scripts and commands.<!-- MAGECLOUD-4038 -->

   -  {:.new}**Added a service configuration option to expose the database port to the host**–Use the `--expose-db-port=<PORT>` option to expose the database port to the host when building the `docker-compose.yml` file: `bin/ece-docker build:compose --expose-db-port=<PORT>`<!--MAGECLOUD-4454--> [Fix submitted by Adarsh Manickam from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/101).

   -  {:.new}**New post-deploy command**–Previously, the post-deploy hooks defined in the `.magento.app.yaml` file ran automatically after you deployed Magento to a Cloud Docker container using the `cloud-deploy` command. Now, you must issue a separate `cloud-post-deploy` command to run the post-deploy hooks after you deploy. See the updated launch instructions for [developer] and [production] mode.<!--MAGECLOUD-3996-->

   -  {:.new}Added the `--rm` option to `./bin/magento-docker` commands for the build and deploy containers. This removes the container after the task is complete.<!--MAGECLOUD-4205-->

   -  {:.new}**Updates to `build:compose` command**–

      -  {:.new}Added the `--sync-engine="native"` option to the `docker-build` command to disable file synchronization when you generate the Docker Compose configuration file in developer mode. Use this option when developing on Linux systems, which do not require file synchronization for local Docker development. See [Synchronizing data in the Docker environment]({{site.baseurl}}/cloud/docker/docker-syncing-data.html).<!--MCLOUD-3231, MCLOUD-3890-->

   -  {:.new}Changed the default file synchronization setting from `docker-sync` to `native`. [Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/124).<!--MAGECLOUD-5066-->

-  {:.new}**Validation improvements**–

   -  {:.new}Added validation to the deployment process for local Docker development environments to verify that the Cloud environment configuration includes the encryption key required to decrypt the database.  Now, you get an error message in the log if the environment configuration does not specify a value for the encryption key.<!--MAGECLOUD-4423-->

   -  {:.new}Added a container health check to the Elasticsearch service to ensure that the service is ready before continuing with build and deploy processing. If the health check returns an error, the container restarts automatically.<!--MAGECLOUD-4456-->

<!--Link definitions-->
[Sharing Magento Cloud project data]: {{site.baseurl}}/cloud/docker/docker-containers.html#sharing-magento-cloud-project-data
[Database containers]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[developer]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[production]: {{site.baseurl}}/cloud/docker/docker-mode-production.html
[backward incompatible change]: {{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html
[Magento Cloud TLS container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#tls-container
[Magento Cloud Varnish container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#varnish-container
[Pound TLS Termination Proxy]: https://github.com/mnuessler/docker-tls-termination-proxy/blob/master/README.md
[`pound.cfg`]: https://github.com/magento/magento-cloud-docker/blob/1.0/images/tls/pound.cfg

<!--Custom table configuration-->

<!--
  This is a style declaration so that first column does not wrap
-->

<style>
table.docker-service-versions-table td:nth-child(2) {
  width: 500px;
}
</style>
