---
group: cloud
title: Upgrade to ece-tools
version: 2.1
github_link: cloud/project/ece-tools-upgrade-project.md
functional_areas:
  - Cloud
  - Upgrade
---
If you still use a version of Cloud that does not contain the`ece-tools`package, then your project requires an _upgrade_. We deprecated the `magento/magento-cloud-configuration` and `magento/ece-patches` packages in favor of the `ece-tools` package.
 
 You must perform a one-time, manual step to update the `magento/magento-cloud-metapackage` version constraint in the `composer.json` file, located in the root directory. This constraint enables updates for Magento Cloud metapackages—including removing deprecated packages—without upgrading your current {{site.data.var.ee}} version.
 
 If you have already performed this step and you need to update your current `ece-tools` package, see [Update ece-tools]({{page.baseurl}}/cloud/project/ece-tools-update.html).

{% include cloud/note-upgrade.md %}

### Remove deprecated packages
Before performing an upgrade to use the`ece-tools`package, check the `composer.json` file for the following deprecated packages and remove them:

-  `magento-cloud-configuration`
-  `magento/ece-patches`
 
### Update the metapackage {#metapackage}
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

### Upgrade the project

To upgrade your project to use the `ece-tools` package, you need to update the metapackage, update the `.magento.app.yaml` hooks properties, and run a composer update.

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

1.  It may be necessary to update the `ece-tools` package.

    ```bash
    composer update magento/ece-tools
    ```

1.  Add and commit the code changes. In this example, the following files were updated:

    ```terminal
    .magento.app.yaml
    composer.json
    composer.lock
    ```

1.  Push your code changes to the remote server and merge this branch to the Integration branch.

    ```bash
    git push origin <branch name>
    ```
