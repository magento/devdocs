---
group: cloud-guide
title: Magento Cloud Docker release notes
functional_areas:
  - Cloud
  - Setup
  - Configuration
---
The following updates describe the latest improvements to the `{{site.data.var.ct}}` Docker package, which uses the following version sequence: `<major>.<minor>.<patch>`.

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## v1.0.0

-  {:.new}Moved the Docker package to the [new `magento-cloud-docker` repository](https://github.com/magento/magento-cloud-docker) to maintain code quality and provide independent releases.<!--MAGECLOUD-3986-->

-  {:.fix}The `./bin/docker` file overwrites existing Docker binary files, which caused some Docker environments to break. Renamed the `./bin/docker` file to `./bin/magento-docker` to avoid any conflicts.<!-- MAGECLOUD-4038 -->

-  {:.new}The `magento-db: /var/lib/mysql` database volume now persists after you stop and remove the Docker configuration and restores when you restart the Docker configuration. Now, you must manually delete the database volume. See [Database containers]({{page.baseurl}}/cloud/docker/docker-database.html).<!--MAGECLOUD-3978-->

-  {:.new}Added DB dumps and archive files—ZIP, SQL, GZ, and BZ2—to the exclusion list in the `dist/docker-sync.yml` and `dist/mutagen.sh` files. Large files (>1 GB) can cause a period of inactivity and are not necessary to sync.<!--MAGECLOUD-3979-->

-  {:.new}Docker for Linux does not require a third party utility to support file syncing because binding a host directory to a container does not cause the same performance issues. Added the `--sync-enggine=native` option.<!--MAGECLOUD4351-->

-  {:.new}Added the `--rm` option to `./bin/magento-docker` commands for the build and deploy containers. This removes the container after the task is complete.<!--MAGECLOUD-4205-->

-  {:.new}Added the `--sync-engine="native"` option to the `docker-build` command to disable file synchronization when you generate the Docker Compose configuration file in developer mode. Use this option when developing on Linux systems, which do not require file synchronization for local Docker development.<!--MAGECLOUD-4351-->