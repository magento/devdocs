---
group: cloud-guide
title: Backward incompatible changes
---

Use the following information to learn about backward incompatible changes that might require you to adjust Cloud configuration and processes for existing Cloud projects when you upgrade to the latest release of the {{site.data.var.ct}} package or other {{site.data.var.csuite}} packages.

### Service version requirement changes

We changed the minimum PHP minimum requirement from 7.1.0 to 7.1.3+ in `{{ site.data.var.ct }}` v2002.1.0 and later. If your environment configuration specifies an earlier version, update the [php configuration]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#configure-php-options) in the `.magento.app.yaml` file.

### Environment configuration changes

   Item | Status | Replacement
   -------- |------- | -------
   `SCD_EXCLUDE_THEMES` variable | Removed in `{{ site.data.var.ct }}` v2002.1.0 | [`SCD_MATRIX`]({{ site.baseurl}}/cloud/env/variables-build.html#scd_matrix)
   `STATIC_CONTENT_THREADS` variable| Removed in `{{ site.data.var.ct }}` v2002.1.0 | [`SCD_THREADS`]({{ site.baseurl}}/cloud/env/variables-build.html#scd_threads)
   `DO_DEPLOY_STATIC_CONTENT` variable | Removed in `{{ site.data.var.ct }}` v2002.1.0 | [`SKIP_SCD`]({{ site.baseurl}}/cloud/env/variables-build.html#skip_scd)
   `STATIC_CONTENT_SYMLINK` variable | Removed in `{{site.data.var.ct}}` v2002.1.0 | None. Now, the build always creates a symlink to the static content directory `pub/static`.
   `build_options.ini` file | Removed in `{{site.data.var.ct}}` v2002.1.0 | Use the [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html)) file to configure environment variables to manage build and deploy actions across all your environments.<br><br>If you build a Cloud environment that includes the `build_options.ini` file, the build fails.

### CLI command changes

The {{site.data.var.ct}} package no longer supports the following CLI commands in version 2002.1.0 and later:

 Command| Replacement
 -------- |-------
`m2-ece-build` | `vendor/bin/ece-tools build`
`m2-ece-deploy` | `vendor/bin/ece-tools deploy`
`m2-ece-scd-dump` | `vendor/bin/ece-tools config:dump`

### Package changes

-  **New magento/magento-cloud-patches package**–We moved {{ site.data.var.ece }} patches and related functionality to a separate package, `magento/magento-cloud-patches` in {{ site.data.var.ct }} version 2002.1.0. See [Release notes for magento/magento-cloud-patches]({{site.baseurl}}/cloud/release-notes/mcp-release-notes.html).

-  **New magento/magento-cloud-docker package**–We moved Docker development functionality to a separate package in {{ site.data.var.ct }} v2002.1.0. See [Release notes for magento/magento-cloud-docker]({{ site.baseurl }}/cloud/release-notes/mcd-release-notes.html).
