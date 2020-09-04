---
group: cloud-guide
title: Backward incompatible changes
---

Use the following information to learn about backward incompatible changes that might require you to adjust Cloud configuration and processes for existing Cloud projects when you upgrade to the latest release of the `{{site.data.var.ct}}` package or other {{site.data.var.csuite}} packages.

## {{site.data.var.ct}} changes

Some functionality previously included in the `{{site.data.var.ct}}` package is now provided in separate packages. These packages are composer dependencies for `{{site.data.var.ct}}`, which are installed and updated automatically when you install or update {{site.data.var.ct}}.

The new architecture should not affect your install or update processes.  However, you might need to change some command syntax and processes when working with your {{site.data.var.ece}} project. For details, review the following backward incompatible changes information and the [Cloud Suite release notes].

### Service version requirement changes

We changed the minimum PHP version requirement from 7.0.x to 7.1.x for Cloud projects that use `{{ site.data.var.ct }}` v2002.1.0 and later. If your environment configuration specifies PHP 7.0, update the [php configuration]({{ site.baseurl }}/cloud/project/magento-app-php-application.html) in the `.magento.app.yaml` file.

{:.bs-callout-warning}
Because of the PHP version requirement change, `{{site.data.var.ct}}` 2002.1.0 supports only {{site.data.var.ece}} projects running Magento 2.1.15 or later. If your project uses an earlier release, you must [upgrade the Magento version]({{site.baseurl}}/cloud/project/project-upgrade.html) before you update to `{{site.data.var.ct}}` 2002.1.0.

### Environment configuration changes

The following table provides information about environment variables and other environment configuration files that were removed or deprecated in `{{ site.data.var.ct }}` v2002.1.0.

Item | Replacement
-------- | -------
`SCD_EXCLUDE_THEMES` variable | [`SCD_MATRIX`]({{ site.baseurl}}/cloud/env/variables-build.html#scd_matrix)
`STATIC_CONTENT_THREADS` variable | [`SCD_THREADS`]({{ site.baseurl}}/cloud/env/variables-build.html#scd_threads)
`DO_DEPLOY_STATIC_CONTENT` variable | [`SKIP_SCD`]({{ site.baseurl}}/cloud/env/variables-build.html#skip_scd)
`STATIC_CONTENT_SYMLINK` variable | None. Now, the build always creates a symlink to the static content directory `pub/static`.
`build_options.ini` file | Use the [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html) file to configure environment variables to manage build and deploy actions across all your environments.<br><br>If you build a Cloud environment thatincludes the `build_options.ini` file, the build fails.

### CLI command changes

The following table summarizes CLI command changes in {{ site.data.var.ct }} v2002.1.0 that might require you to update commands or scripts.

 Command| Replacement
 -------- |-------
`m2-ece-build` | `vendor/bin/ece-tools build`
`m2-ece-deploy` | `vendor/bin/ece-tools deploy`
`m2-ece-scd-dump` | `vendor/bin/ece-tools config:dump`
`vendor/bin/ece-tools patch` | `vendor/bin/ece-patches apply`
`vendor/bin/ece-tools docker:build` | `vendor/bin/ece-docker build:compose`
`vendor/bin/ece-tools docker:config:convert` | `vendor/bin/ece-docker  image:generate:php`

In earlier {{ site.data.var.ct }} releases, you could use the `m2-ece-build` and `m2-ece-deploy` commands to configure deployment hooks in the `.magento.app.yaml` file. When you update to v2002.1.0, check the `hooks` configuration in the `.magento.app.yaml` file for the obsolete commands, and replace them if needed.

## Magento Cloud Patches changes

-  **Remove downloaded patches**–The `{{site.data.var.mcp-package}}` package bundles all patches available from the [Magento Technical resources](https://magento.com/tech-resources/download) page and applies them automatically when you deploy to the Cloud.  To prevent patch conflicts after upgrading to {{site.data.var.ct}} 2002.1.0 or later, remove any Magento-supplied patches that you downloaded and added to your project manually.

-  **Updating the apply patches command**–We moved the command for applying patches to Magento Cloud from the `vendor/bin/ece-tools` directory to the `vendor/bin/ece-patches` directory. If you use this command to apply patches manually, use the new path.

   > Manually apply patches

   ```bash
   php ./vendor/bin/ece-patches apply
   ```

## Magento Cloud Docker changes

-  **The minimum PHP version requirement is now PHP 7.1**–If your {{site.data.var.mcd-prod}} host is running an earlier version, upgrade to PHP v7.1 or later.

-  **{{site.data.var.mcd-prod}} command changes**–

   -  **Updating {{site.data.var.mcd-prod}} commands for Docker build operations**–We moved the {{site.data.var.mcd-prod}} commands from the `vendor/bin/ece-tools` directory to the `vendor/bin/ece-docker` directory. Update your scripts and commands to use the new path.

      After upgrading to `{{site.data.var.ct}}` 2002.1.0, use the following command to view available `ece-docker` commands.

      ```bash
      php ./vendor/bin/ece-docker list
      ```

   -  **Updating the Magento Cloud docker-compose commands**–We renamed the path to the command file from `./bin/docker` to `./bin/magento-docker`.  Update your scripts and commands to use the new path.

   -  **Cron container no longer included in default Docker configuration**–Now, you must add the `--with-cron` option to the `ece-docker build:compose` command to include the Cron container in the Docker environment configuration. See [Manage cron jobs]({{site.baseurl}}/cloud/docker/docker-manage-cron-jobs.html).

    Any scripts that previously generated containers with crons will now be lacking crons.

   -  **Using temporary containers**–In previous versions, the containers created by `bin/magento-docker` command operations were not removed, so you could use them for other operations.  Now, the `magento-docker` commands remove any containers they create after the command completes.

      If you want to keep a container created by a docker-compose operation, use the `docker-compose run` command instead of the `bin/magento-docker` command.

   -  **Running post-deploy hooks**–The `cloud-deploy` command no longer runs post deploy hooks. You must use the new `cloud-post-deploy` command to run post deploy hooks after you deploy. Update your scripts to add the command to run post deploy hooks.

      ```php
      bin/magento-docker ece-deploy
      bin/magento-docker ece-post-deploy
      ```

      Alternatively, if you use `docker-compose` commands directly, run the `docker-compose run deploy cloud-post-deploy` command after the deploy command.

-  **Refreshing the database**–The Database container is now stored in a persistent Docker volume named `magento-db`. When you refresh the Docker environment, the database is no longer deleted automatically. If needed, use one of the following commands to manually remove it.

   -  Remove the `magento-db` container:

      ```bash
      docker volume rm magento-db
      ```

   -  Remove all associated volumes when shutting down the Docker containers:

      ```bash
      docker-compose down -v
      ```

-  **Override file synchronization settings for archive and backup files**–Archive and backup files with the following extensions are no longer synchronized when using docker-sync or mutagen:  `*.sql`, `*.gz`, `*.zip`, and `*.bz2`.  You can override the default file synchronization for these file types by renaming the file to end with a different extension. For example: `synchronize-me.zip-backup`

[Cloud Suite release notes]: {{site.baseurl}}/cloud/release-notes/cloud-tools.html
