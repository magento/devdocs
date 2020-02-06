---
group: cloud-guide
title: Magento Cloud Docker release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [`{{site.data.var.mcd}}`](https://github.com/magento/magento-cloud-docker) package provides functionality and Docker images to deploy {{ site.data.var.ee }} to a local Cloud environment. These release notes describe the latest improvements to this package, which is a component of [{{ site.data.var.csuite }}]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html).

The `{{site.data.var.mcd}}` package uses the following version sequence: `<major>.<minor>.<patch>`.

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## v1.0.0

-  {:.new}**Created a separate package to deliver `{{site.data.var.mcd-prod}}`**–Moved the source code to deliver {{site.data.var.mcd-prod}} from the `{{site.data.var.ct}}` repository to the [new `magento-cloud-docker` repository](https://github.com/magento/magento-cloud-docker) to maintain code quality and provide independent releases.  The new package is a dependency for {{site.data.var.ct}} v2002.1.0 and later.

   When you update {{site.data.var.ct}}, you also update the `{{site.data.var.mcd}}` package to version 1.0.0. If you used {{site.data.var.mcd-prod}} with an earlier `{{site.data.var.ct}}` release (2002.0.x), review the [backward incompatibilities]({{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html#magento-cloud-docker-changes) and update your project as scripts, commands, and processes as needed.

-  {:.new}**Added versioning to the Docker images**–You must now update the `{{site.data.var.mcd}}` package to get the updated images.<!--MAGECLOUD-4737-->

-  {:.new}**Container updates**–

   -  {:.new}**PHP-FPM container updates**–

      -  {:.new}**Added Node.js support**–Updated the PHP-FPM image to support node, npm, and the grunt-cli capabilities inside the PHP container.<!--MAGECLOUD-3953-->

      -  {:.new}**Added support for [ionCube](https://www.ioncube.com/)**–Updated the default Docker configuration to support ionCube in the local Docker development environment.<!--MAGECLOUD-4354-->

   -  {:.new}**Web container updates**–

      -  {:.new}**Customize NGINX configuration**–Added the capability to mount a custom `nginx.conf` file to the {{site.data.var.mcd-prod}} environment. See [Web container]({{site.baseurl}}/cloud/docker/docker-containers-service.html#web-container).<!--MAGECLOUD-4204-->

      -  {:.new}**Auto-generated NGINX certificates**–The Docker configuration file now includes the configuration to auto-generate NGINX certificates for the Web container.<!--MAGECLOUD-4258-->

   -  {:.new}**New Selenium container**–Added a [Selenium container]({{site.baseurl}}/cloud/docker/docker-containers-service.html#selenium-container) to support {{site.data.var.ee}} application testing using the Magento Functional Testing Framework (MFTF).<!--MAGECLOUD-4040-->

   -  {:.new}**RabbitMQ version support**–Updated the RabbitMQ container configuration to support RabbitMQ version 3.8.<!--MAGECLOUD-4674-->

   -  {:.fix}**Persistent database container**–The `magento-db: /var/lib/mysql` database volume now persists after you stop and remove the Docker configuration and restores when you restart the Docker configuration. Now, you must manually delete the database volume. See [Database containers].<!--MAGECLOUD-3978-->

   -  {:.new}**TLS container updates**–

      -  {:.new}**Updated the container base image to use official image**–The [Magento Cloud TLS container] image is now based on the official `debian:jessie` Docker image.–<!--MAGECLOUD-4163-->

      -  {:.new}**Added support for the [Pound TLS Termination Proxy]**–The [Pound configuration file][`pound.cfg`] adds the following ENV variables to customize the Docker configuration for the TLS container:

         -  **`TimeOut`**–Sets the Time to First Byte (TTFB) timeout value. The default value is 300 seconds.

         -  **`RewriteLocation`**–Determines whether the Pound proxy rewrites the location to the request URL by default. Defaults to `0` to prevent the rewrite from breaking redirects to outside websites like an external SSO site. [Fix submitted by Sorin Sugar](https://github.com/magento/magento-cloud-docker/pull/37)<!--MAGECLOUD-4061-->

      -  {:.new} Increased the timeout value in the TLS container configuration from 15 to 300 seconds. [Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/78)<!--MAGECLOUD-4460-->

   -  {:.new}**Varnish container updates**–

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

   -  {:.new}**Added an option to expose the database port to the host**–Use the `--expose-db-port=<PORT>` option to expose the database port to the host when building the `docker-compose.yml` file: `bin/ece-docker build:compose --expose-db-port=<PORT>`<!--MAGECLOUD-4454--> [Fix submitted by Adarsh Manickam from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/101).

   -  {:.new}**New post-deploy command**–Previously, the post-deploy hooks defined in the `.magento.app.yaml` file ran automatically after you deployed Magento to a Cloud Docker container using the `cloud-deploy` command. Now, you must issue a separate `cloud-post-deploy` command to run the post-deploy hooks after you deploy. See the updated launch instructions for [developer] and [production] mode.<!--MAGECLOUD-3996-->

   -  {:.new}Added the `--rm` option to `./bin/magento-docker` commands for the build and deploy containers. This removes the container after the task is complete.<!--MAGECLOUD-4205-->

   -  {:.new}**Updates to `build:compose` command**–

      -  {:.new}Added the `--sync-engine="native"` option to the `docker-build` command to disable file synchronization when you generate the Docker Compose configuration file in developer mode. Use this option when developing on Linux systems, which do not require file synchronization for local Docker development. See [Synchronizing data in the Docker environment]({{site.baseurl}}/cloud/docker/docker-syncing-data.html).<!--MAGECLOUD-4351, MAGECLOUD-->

   -  {:.new}Changed the default file synchronization setting from `docker-sync` to `native`. [Fix submitted by Mathew Beane from Zilker Technology](https://github.com/magento/magento-cloud-docker/pull/124).<!--MAGECLOUD-5066-->

-  {:.new}**Validation improvements**–

   -  {:.new}Added validation to the deployment process for local Docker development environments to verify that the Cloud environment configuration includes the encryption key required to decrypt the database.  Now, you get an error message in the log if the environment configuration does not specify a value for the encryption key.<!--MAGECLOUD-4423-->

   -  {:.new}Added a container health check to the Elasticsearch service to ensure that the service is ready before continuing with build and deploy processing. If the health check returns an error, the container restarts automatically.<!--MAGECLOUD-4456-->

[Sharing Magento Cloud project data]: {{site.baseurl}}/cloud/docker/docker-containers.html#sharing-magento-cloud-project-data
[Database containers]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[developer]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[production]: {{site.baseurl}}/cloud/docker/docker-mode-production.html
[backward incompatible change]: {{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html
[Magento Cloud TLS container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#tls-container
[Magento Cloud Varnish container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#varnish-container
[Pound TLS Termination Proxy]: https://github.com/mnuessler/docker-tls-termination-proxy/blob/master/README.md
[`pound.cfg`]: https://github.com/magento/magento-cloud-docker/blob/1.0/images/tls/pound.cfg
