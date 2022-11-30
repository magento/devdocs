---
group: cloud-guide
title: Upgrade
functional_areas:
  - Cloud
  - Configuration
  - Upgrade
migrated_to: https://developer.adobe.com/commerce/cloud-tools/docker/upgrade-docker-package/
layout: migrated
---

We recommend that you use the latest version of {{site.data.var.mcd-prod}}. The version requirement is specified in the `composer.json` file for your project. Use the following instructions for the upgrade process.

{:.bs-callout-info}
{{site.data.var.mcd-prod}} releases sometimes introduce changes to the format and options in the `docker-compose.yml` file. We recommend creating a back up of your existing `docker-compose.yml` file before upgrading so you can review the changes. If you have custom configurations that you want to preserve across builds, move them to the [`docker-compose.override.yml`][Override configuration] file before you rebuild or upgrade the Docker environment.

{:.procedure}
To update the {{site.data.var.mcd-prod}} package for On-premises projects:

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

1. Preserve custom configuration.

After you upgrade to the latest version of {{site.data.var.mcd-prod}}, [stop and restart the Docker environment].

<!--Link definitions-->

[Override configuration]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html#override-configuration
[stop and restart the Docker environment]: {{site.baseurl}}/cloud/docker/docker-launch.html
