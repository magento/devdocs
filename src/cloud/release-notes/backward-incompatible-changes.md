---
group: release-notes
title: Backward Incompatible Changes
---

Use the following information to learn about backward incompatible changes that require you to adjust Cloud configuration and processes for existing Cloud projects when you upgrade to the latest release of the {{site.data.var.ct}} package or other {{site.data.var.csuite}} packages.

### Service version requirement changes

**PHP minimum version requirement**–In {{ site.data.var.ct }} v2002.1.0 and later, the minimum php version requirement is 7.1.3+. If your environment configuration specifies an earlier version, update the [php configuration]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#configure-php-options) in the `.magento.app.yaml` file. 

### Environment variable changes

The following environment variables have been removed from the `{{site.var.data.ct}}` package:

-  `SCD_EXCLUDE_THEMES`–use the `SCD_MATRIX` variable instead.
-  `STATIC_CONTENT_THREADS`–use the `SCD_THREADS` variable the instead.
-  `DO_DEPLOY_STATIC_CONTENT`–use the `SKIP_SCD` variable instead.
-  `STATIC_CONTENT_SYMLINK`–Now, the `{{site.data.var.ct}}` always generates symlinks for static content in the `pub/static` directory when you generate static content during the build process.

### CLI command changes

The {{site.var.data.ct}} package no longer supports the following CLI commands:

- `m2-ece-build`–use the `vendor/bin/ece-tools build` instead
- `m2-ece-deploy`–use the `vendor/bin/ece-tools deploy` instead
- `m2-ece-scd-dump`–use the `vendor/bin/ece-tools config:dump` instead

### Removed support the `build_options.ini` file

Use the `.magento.env.yaml` file instead. If you build a Cloud environment that includes the `build_options.ini` file, the build fails.

### Package changes

-  **New `magento/magento-cloud-patches` package**–In {{ site.data.var.ct }} v2002.22.0 and later, we moved {{ site.data.var.ece }} patches and related functionality to a separate package,`magento/magento-cloud-patches`. See [Release notes for magento/magento-cloud-patches]({{site.baseurl}}/cloud/release-notes/mcp-release-notes.md).

- **New `magento/magento-cloud-docker` package**–In {{ site.data.var.ct }} v2002.1.0 and later, we moved Docker development functionality to a separate package, `magento-cloud-docker`. See [Release notes for magento/magento-cloud-docker]({{site.baseurl}}/cloud/release-notes/mcd-release-notes.md).
