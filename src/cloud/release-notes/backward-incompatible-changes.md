---
group: cloud-guide
title: Backward incompatible changes
---

Use the following information to learn about backward incompatible changes that might require you to adjust Cloud configuration and processes for existing Cloud projects when you upgrade to the latest release of the {{site.data.var.ct}} package or other {{site.data.var.csuite}} packages.

### Service version requirement changes

We changed the minimum PHP version requirement from 7.0.x to 7.1.x for Cloud projects that use `{{ site.data.var.ct }}` v2002.1.0 and later. If your environment configuration specifies PHP 7.0, update the [php configuration]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#configure-php-options) in the `.magento.app.yaml` file.

### Environment configuration changes

The following table provides information about environment variables and other environment configuration files that were removed or deprecated in `{{ site.data.var.ct }}` v2002.1.0.

   Item | Replacement
   -------- | -------
   `SCD_EXCLUDE_THEMES` variable | [`SCD_MATRIX`]({{ site.baseurl}}/cloud/env/variables-build.html#scd_matrix)
   `STATIC_CONTENT_THREADS` variable | [`SCD_THREADS`]({{ site.baseurl}}/cloud/env/variables-build.html#scd_threads)
   `DO_DEPLOY_STATIC_CONTENT` variable | [`SKIP_SCD`]({{ site.baseurl}}/cloud/env/variables-build.html#skip_scd)
   `STATIC_CONTENT_SYMLINK` variable | None. Now, the build always creates a symlink to the static content directory `pub/static`.
   `build_options.ini` file | Use the [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html)) file to configure environment variables to manage build and deploy actions across all your environments.<br><br>If you build a Cloud environment that includes the `build_options.ini` file, the build fails.

### CLI command changes

In {{ site.data.var.ct }} v2002.1.0, we removed support for the following CLI commands.

 Command| Replacement
 -------- |-------
`m2-ece-build` | `vendor/bin/ece-tools build`
`m2-ece-deploy` | `vendor/bin/ece-tools deploy`
`m2-ece-scd-dump` | `vendor/bin/ece-tools config:dump`
`vendor/bin/ece-tools patch` | `vendor/bin/ece-patches apply`

In earlier releases of {{ site.data.var.ct }}, you could use the `m2-ece-build` and `m2-ece-deploy` commands to configure deployment hooks in the `.magento.app.yaml` file. When you update to v2002.1.0, check the `hooks` configuration in the `.magento.app.yaml` file for the obsolete commands, and replace them if needed.

### Package changes

-  **New magento/magento-cloud-patches package**–We moved {{ site.data.var.ece }} patches and related functionality to a separate package, `magento/magento-cloud-patches` in {{ site.data.var.ct }} version 2002.1.0. See [Release notes for magento/magento-cloud-patches]({{site.baseurl}}/cloud/release-notes/mcp-release-notes.html).

-  **New magento/magento-cloud-docker package**–We moved Docker development functionality to a separate package in {{ site.data.var.ct }} v2002.1.0. See [Release notes for magento/magento-cloud-docker]({{ site.baseurl }}/cloud/release-notes/mcd-release-notes.html).

### Patches changes

-  Cloud patches bundled all patches provided by [Magento Technical resources](https://magento.com/tech-resources/download). If you have copied any Magento-supplied patches downloaded from the Technical Resources page into your Magento project, remove them to prevent conflicts.
