---
group: cloud
title: Upgrade to ece-tools
version: 2.1
functional_areas:
  - Cloud
  - Upgrade
---
If you still use a version of {{site.data.var.ece}} that does not contain the `ece-tools` package, then your project requires an _upgrade_. We deprecated the `magento/magento-cloud-configuration` and `magento/ece-patches` packages in favor of the `ece-tools` package.

You must perform a one-time, manual step to update the `magento/magento-cloud-metapackage` version constraint in the `composer.json` file, located in the root directory. This constraint enables updates for {{site.data.var.ece}} metapackages—including removing deprecated packages—without upgrading your current {{site.data.var.ee}} version. If your project contains the `{{site.data.var.ct}}` package and you have updated the metapackage, you can skip the following upgrade and see [Update {{site.data.var.ct}}]({{page.baseurl}}/cloud/project/ece-tools-update.html).

{% include cloud/note-upgrade.md %}

## Remove deprecated packages

Before performing an upgrade to use the `{{site.data.var.ct}}` package, check the `composer.lock` file for the following deprecated packages:

-  `magento/magento-cloud-configuration`
-  `magento/ece-patches`

## Update the metapackage {#metapackage}

Each {{site.data.var.ee}} version requires a different constraint based on the following:

```
>=current_version <next_version
```

You can always find the latest metapackage constraint in the [`magento-cloud` template](https://github.com/magento/magento-cloud/blob/master/composer.json).

The following example places a constraint for the {{site.data.var.ece}} metapackage to any version greater than or equal to the current version 2.2.0 and lower than next version 2.2.1:

```json
"require": {
    "magento/magento-cloud-metapackage": ">=2.2.0 <2.2.1"
},
```

## Upgrade the project

To upgrade your project to use the `ece-tools` package, you need to update the metapackage, update the `.magento.app.yaml` hooks properties, and perform a Composer update.

#### To upgrade project to use ece-tools:

1.  Update the `magento/magento-cloud-metapackage` version constraint in the `composer.json` file.

    ```bash
    composer require "magento/magento-cloud-metapackage": ">=2.2.0 <2.2.1" --no-update
    ```

1.  Update the metapackage.

    ```bash
    composer update magento/magento-cloud-metapackage
    ```
  
1.  Modify the hook commands in the `magento.app.yaml` file.

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

1.  Check for and remove the [deprecated packages](#remove-deprecated-packages). The deprecated packages can prevent a successful upgrade.

    ```bash
    composer remove magento/magento-cloud-configuration
    ```

    ```bash
    composer remove magento/ece-patches
    ```

1.  It may be necessary to update the `{{site.data.var.ct}}` package.

    ```bash
    composer update magento/ece-tools
    ```

1.  Add and commit the code changes. In this example, the following files were updated:

    ```terminal
    .magento.app.yaml
    composer.json
    composer.lock
    ```

1.  Push your code changes to the remote server and merge this branch with the `integration` branch.

    ```bash
    git push origin <branch name>
    ```
