---
group: cloud-guide
title: Upgrading
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

1. Application update

   Since the Magento Cloud Docker is a prt of Composer requirements, you should run next command locally:

   ```bash
    composer update magento/magento-cloud-docker
   ```

1. Preserve custom configuration

   The releases of Cloud Docker might introduce changes to the `docker-compose.yml` file.

   {:.bs-callout-note}

   If you have any  custom changes in `docker-compose.yml` - be sure to move them to `docker-compose.override.yml` custom file.

1. Continue with the Usage topic

   Once you updated the application, continue the process [usage section].

[usage section]: {{site.baseurl}}/cloud/docker/docker-usage.html
