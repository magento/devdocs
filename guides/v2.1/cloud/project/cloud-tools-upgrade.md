---
group: cloud
title: Upgrade Cloud tools
version: 2.1
github_link: cloud/project/cloud-tools-upgrade.md
functional_areas:
  - Cloud
  - Upgrade
---
We use [Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html) for upgrading to the {{site.data.var.ece}} tools (`ece-tools`). Typically, an _update_ includes patches and available hotfixes as part of the `magento-cloud-metapackage`. If you still use a version of Cloud that does not contain ece-tools, then your project requires an _upgrade_.

Before beginning the upgrade process, create a new, active branch from Integration and checkout the branch to your local workstation. Dedicating a branch to the upgrade process helps to avoid interference with your work in progress. Your project root folder must contain an `auth.json` file for authentication.
We deprecated the `magento/magento-cloud-configuration` and `magento/ece-patches` packages.

### Upgrade project to use ece-tools

1.  Modify the build and deploy hook commands in your `magento.app.yaml` file.

    ```yaml
    hooks:
        # We run build hooks before your application has been packaged.
        build: |
            php ./vendor/bin/ece-tools build
        # We run deploy hook after your application has been deployed and started.
        deploy: |
            php ./vendor/bin/ece-tools deploy
        # We run post deploy hook to clean and warm the cache. Available with ECE-Tools 2002.0.10.
        post_deploy: |
            php ./vendor/bin/ece-tools post-deploy
    ```

1.  Update the package version constraint for `magento/magento-cloud-metapackage` in the `composer.json` file. See [Update the metapackage](#metapackage).

    ```bash
    composer update magento/magento-cloud-metapackage
    ```

1.  Remove the deprecated package.

    When upgrading **to ece-tools from 2.1.x,** remove the `magento-cloud-configuration` package:

    ```bash
     composer remove magento/magento-cloud-configuration
    ```

    When upgrading **to ece-tools from 2.2.x**, remove the `ece-patches` package:

    ```bash
    composer remove magento/ece-patches
    ```

1.  Perform an update to ece-tools using Composer.

    ```bash
     composer update magento/ece-tools
    ```

1.  Commit the code changes.

    ```bash
    git add composer.lock && git commit -m "Update magento/ece-tools"
    ```

1.  Push your code changes to the remote server.

    ```bash
    git push origin <branch name>
    ```

### Update the metapackage {#metapackage}
We are deprecating the `magento/magento-cloud-configuration` and `magento/ece-patches` packages.

You must perform a one-time, manual step to update the package version constraint for `magento/magento-cloud-metapackage` in the `composer.json` file, located in the root directory. This constraint enables updates for Magento Cloud metapackages—including removing deprecated packages—without upgrading your current {{site.data.var.ee}} version.

Each {{site.data.var.ee}} version requires a different constraint based on the following:

```
>=current_version <next_version
```

You can always find the latest metapackage constraint in the [`magento-cloud` template](https://github.com/magento/magento-cloud/blob/master/composer.json).

The following example places a constraint for the Magento Cloud metapackage to any version greater than or equal to the current version 2.2.0 and lower than next version 2.2.1:

```json
"require": {
    "magento/magento-cloud-metapackage": ">=2.2.0 <2.2.1"
},
```
### Keep Cloud tools up-to-date
The upgrade to ece-tools process is a one-time procedure, but you can use the following steps to update the Cloud tools after each release:

1.  On your local workstation, perform an update using Composer.

    ```bash
    composer update magento/ece-tools
    ```

1.  Commit the code changes.

    ```bash
    git add composer.lock && git commit -m "Update magento/ece-tools"
    ```

1.  Push your code changes to the remote server.

    ```bash
    git push origin <branch name>
    ```
