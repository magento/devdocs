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

-  {:.new}Moved the Docker package to the [new `magento-cloud-docker` repository](https://github.com/magento/magento-cloud-docker) to maintain code quality and provide independent releases.<!--MAGECLOUD-3986-->

-  {:.new}**Support for Magento application testing**–Added a [Selenium container]({{site.baseurl}}/cloud/docker/docker-containers-service.html#selenium-container) to support {{site.data.var.ee}} application testing using the Magento Functional Testing Framework (MFTF).<!--MAGECLOUD-4040-->

-  {:.new}Added a container health check to the Elasticsearch service to ensure that the service is ready before continuing with build and deploy processing. If the health check returns an error, the container restarts automatically.<!--MAGECLOUD-4456-->

-  {:.new}Added support for RabbitMQ version 3.8.<!--MAGECLOUD-4674-->

-  {:.fix}The `magento-db: /var/lib/mysql` database volume now persists after you stop and remove the Docker configuration and restores when you restart the Docker configuration. Now, you must manually delete the database volume. See [Database containers]({{site.baseurl}}/cloud/docker/docker-database.html).<!--MAGECLOUD-3978-->

-  {:.new}Added DB dumps and archive files—ZIP, SQL, GZ, and BZ2—to the exclusion list in the `dist/docker-sync.yml` and `dist/mutagen.sh` files. Large files (>1 GB) can cause a period of inactivity and are not necessary to sync.<!--MAGECLOUD-3979-->

-  {:.new}Added the `--rm` option to `./bin/magento-docker` commands for the build and deploy containers. This removes the container after the task is complete.<!--MAGECLOUD-4205-->

-  {:.new}Added the `--sync-engine="native"` option to the `docker-build` command to disable file synchronization when you generate the Docker Compose configuration file in developer mode. Use this option when developing on Linux systems, which do not require file synchronization for local Docker development.<!--MAGECLOUD-4351-->

-  {:.new}Added validation to the deployment process for local Docker development environments to verify that the Cloud environment configuration includes the encryption key required to decrypt the database.  Now, you get an error message in the log if the envirionment configuration does not specify a value for the encryption key.<!--MAGECLOUD-4423-->

-  {:.fix}The `./bin/docker` file overwrites existing Docker binary files, which caused some Docker environments to break. Renamed the `./bin/docker` file to `./bin/magento-docker` to avoid any conflicts.<!-- MAGECLOUD-4038 -->
