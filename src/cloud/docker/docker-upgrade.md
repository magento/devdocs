---
group: cloud-guide
title: Upgrade
functional_areas:
  - Cloud
  - Configuration
  - Upgrade
---

We recommend that you use the latest version of {{site.data.var.mcd-prod}}. The version requirement is specified in the `composer.json` file for your project. Use the following instructions for the upgrade process.

{:.bs-callout-info}
{{site.data.var.mcd-prod}} releases sometimes introduce changes to the `docker-compose.yml` file. If you have any custom changes in the `docker-compose.yml` file, move them to the [`docker-compose.override.yml`][Override configuration] file.

{:.procedure}
To update the {{site.data.var.mcd-prod}} package:

1. On your local workstation, update the {{site.data.var.mcd-prod}} package using Composer.

   ```bash
    composer update magento/magento-cloud-docker --with-dependencies
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Update magento/magento-cloud-docker"
   ```

   ```bash
   git push origin <branch-name>
   ```

After you upgrade to the latest version of the {{site.data.var.mcd-prod}}, you can [use the Docker environment] again.

<!--Link definitions-->

[Override configuration]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html#override-configuration
[use the Docker environment]: {{site.baseurl}}/cloud/docker/docker-launch.html
