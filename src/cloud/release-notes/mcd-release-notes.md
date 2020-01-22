---
group: cloud-guide
title: Magento Cloud Docker release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Magento Cloud Docker](https://github.com/magento/magento-cloud-docker) package provides functionality and Docker images to deploy {{ site.data.var.ee }} to a local Cloud environment. These release notes describe the latest improvements to this package, which is a component of [{{ site.data.var.csuite }}]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html).

The {{site.data.var.mcd}} package uses the following version sequence: `<major>.<minor>.<patch>`.

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## v1.0.0

-  {:.new}**Added a stand-alone Magento Cloud Docker package**–Moved the Docker package to the [new `magento-cloud-docker` repository](https://github.com/magento/magento-cloud-docker) to maintain code quality and provide independent releases.<!--MAGECLOUD-3986-->

-  {:.new}**Container updates**–

   -  {:.new}**New Selenium container**–Added a [Selenium container]({{site.baseurl}}/cloud/docker/docker-containers-service.html#selenium-container) to support {{site.data.var.ee}} application testing using the Magento Functional Testing Framework (MFTF).<!--MAGECLOUD-4040-->

   -  {:.new}**RabbitMQ version support**–Updated the RabbitMQ container configuration to support RabbitMQ version 3.8.<!--MAGECLOUD-4674-->

   -  {:.new}**Updated the Magento PHP image to support Node.js**–Updated the PHP image to support node, npm, and the grunt-cli capabilities inside the PHP container.<!--MAGECLOUD-3953-->

   -  {:.fix}**Persistent database container**–The `magento-db: /var/lib/mysql` database volume now persists after you stop and remove the Docker configuration and restores when you restart the Docker configuration. Now, you must manually delete the database volume. See [Database containers].<!--MAGECLOUD-3978-->

-  {:.new}**Docker configuration changes**–

   -  {:.new}**Manage mounts and volumes for your project**–Added the ability manage mounts and volumes when launching a Docker environment for local development. See [Sharing Magento Cloud project data].<!--MAGECLOUD-3248-->

   -  {:.new}**Support for network bridge mode**–Added support for network bridge mode to enable connections between Docker containers over the local network.<!--MAGECLOUD-4165-->

   -  {:.new}**Stop synchronizing large backup files**–Added DB dumps and archive files—ZIP, SQL, GZ, and BZ2—to the exclusion list in the `dist/docker-sync.yml` and `dist/mutagen.sh` files. Synchronizing large files (>1 GB) can cause a period of inactivity and backup files do normally require synchronization.<!--MAGECLOUD-3979-->

-  {:.new}**Command changes**–

   -  {:.new}**New `cloud-post-deploy` command**–Previously, the post-deploy hooks defined in the `.magento.app.yaml` file ran automatically after you deployed Magento to a Cloud Docker container using the `cloud-deploy` command. Now, you must issue a separate `cloud-post-deploy` command to run the post-deploy hooks after you deploy. See the updated launch instructions for [developer] and [production] mode.<!--MAGECLOUD-3996-->

   -  {:.new}Added the `--rm` option to `./bin/magento-docker` commands for the build and deploy containers. This removes the container after the task is complete.<!--MAGECLOUD-4205-->

   -  {:.new}Added the `--sync-engine="native"` option to the `docker-build` command to disable file synchronization when you generate the Docker Compose configuration file in developer mode. Use this option when developing on Linux systems, which do not require file synchronization for local Docker development.<!--MAGECLOUD-4351-->

   -  {:.fix}Renamed the `./bin/docker` file to `./bin/magento-docker` to fix an issue that caused some Docker environments to break because the `./bin/docker` file overwrites existing Docker binary files. This is a [backward incompatible change] that requires updates to your scripts and commands.<!-- MAGECLOUD-4038 -->

-  {:.new}**Validation improvements**–

   -  {:.new}Added validation to the deployment process for local Docker development environments to verify that the Cloud environment configuration includes the encryption key required to decrypt the database.  Now, you get an error message in the log if the environment configuration does not specify a value for the encryption key.<!--MAGECLOUD-4423-->

   -  {:.new}Added a container health check to the Elasticsearch service to ensure that the service is ready before continuing with build and deploy processing. If the health check returns an error, the container restarts automatically.<!--MAGECLOUD-4456-->

[Sharing Magento Cloud project data]: {{site.baseurl}}/cloud/docker/docker-containers.html#sharing-magento-cloud-project-data
[Database containers]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[developer]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[production]: {{site.baseurl}}/cloud/docker/docker-mode-production.html
[backward incompatible change]: {{site.baseurl}}/cloud/release-notes/backward-incompatible-changes.html#docker-updates
