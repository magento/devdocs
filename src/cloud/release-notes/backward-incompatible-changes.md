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

-  The {{site.data.var.mcp}} package bundles all patches available from the [Magento Technical resources](https://magento.com/tech-resources/download) page. If you have downloaded any Magento-supplied patches from this site and copied them into your Magento project, remove them to prevent conflicts.

### Cloud Docker changes

#### Minimum PHP version increased
Change: PHP 7.1 is now the minimum version required to work with {{site.data.var.mcd}}. 

Workaround: Upgrade to PHP 7.1 or higher on your host machine.

#### Renamed bin/docker
Change: The command `bin/docker` has been renamed to `bin/magento-docker`.

Workaround: Replace instances of `bin/docker` with `bin/magento-docker` in your scripts and commands.

#### Docker command change
Change: `bin/magento-docker` commands now remove the containers they create after one-off commands. 
    
Workaround: No workaround is needed unless you relied on the leftover containers created after using `magento-docker` commands. If you did use those leftover containers, you can instead run the commands manually using `docker-compose run`.

#### Synced file change
Change: `*.sql`, `*.gz`, `*.zip`, and `*.bz2` files are no longer synced when using docker-sync or mutagen.

Workaround: Usually, files with these extensions are backup files that do not need to be synced. If you need to sync a file with one of these extensions, rename the file so  it does not end with  `.sql`, `.gz`, `.zip`, or `.bz2`.

#### magento-db volume
Change: The database container is now stored in a persistent Docker volume called `magento-db`. If you want to remove the database when you refresh the Docker environment, you must delete it manually. It is no longer deleted automatically when you run the `docker-compose down` command. 

Workaround: You can remove all associated volumes when shutting down containers by with `docker-compose -v`. Alternatively, you can manually remove the volume by running `docker volume rm magento-db`.


#### Post-deploy separated
Change: The `cloud-deploy` command no longer runs post deploy hooks. This has been moved to a separate command called `cloud-post-deploy`.

Workaround: After running `bin/magento-docker ece-deploy`, run `bin/magento-docker ece-post-deploy`. Alternatively, if you're using `docker-compose` commands directly, run `docker-compose run deploy cloud-post-deploy` after the deploy command.
