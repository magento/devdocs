---
group: cloud-guide
title: Upgrade
functional_areas:
  - Cloud
  - Configuration
  - Upgrade
---

We recommend that you use the latest version of {{site.data.var.mcd-prod}}. Use the following instructions for the upgrade process.

1. Update the {{site.data.var.mcd-prod}} package version Composer requirement.

   Because {{site.data.var.mcd-prod}} is included in the Composer requirements, you must run the following command to update the package version:

   ```bash
    composer update magento/magento-cloud-docker
   ```

1. Preserve custom configuration.

   {{site.data.var.mcd-prod}} releases sometimes introduce changes to the `docker-compose.yml` file. If you have any custom changes in the `docker-compose.yml` file, move them to the [`docker-compose.override.yml`][Override configuration] file.

After you upgrade to the latest version of the {{site.data.var.mcd-prod}}, you can [use the Docker environment] again.

<!--Link definitions-->

[Override configuration]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html#override-configuration
[use the Docker environment]: {{site.baseurl}}/cloud/docker/docker-launch.html