---
group: cloud-guide
subgroup: 170_trouble
title: Resolve issues with HTML minification
menu_title: Resolve issues with HTML minification
menu_order: 30
menu_node:
functional_areas:
  - Cloud
  - Configuration
---

## Resolve issues with HTML minification

This topic discusses solutions to typical issues you might experience by HTML minification.

### Website load errors after scd-dump, build, and deploy

<!-- This issue will be resolved with a later release. -->
After using the command `php bin/magento magento-cloud:scd-dump` to generate config.local.php, your website may encounter errors after build and deploy. When accessing the site, you may receive the error "failed to open stream: No such file or directory" for a series of files.

The issue is due to an issue of enabling HTML minification and the setting in `config.local.php` when using `bin/magento magento-cloud:scd-dump`.

As a work-around, complete the following:

1. Copy the file `app/etc/config.local.php` to your local.
2. Edit and remove the minify section from `config.local.php`:

    ```php
    'template' =>
          array (
            'allow_symlink' => '0',
            'minify_html' => '1',
          ),
    ```

2. Modify the setting for minify in the database with this command:

      update core_config_data set value=0 where path ='dev/template/minify_html'
3. Flush all caches.

    ```bash
    php bin/magento cache:flush
    ```

    ```bash
    redis-cli -h <> -p <> flushall
    ```

4. Remove all `base_url` related items in `config.local.php`.
5. Save changes and complete full deployment of `config.local.php`: push to Git branch, build and deploy, and deploy across environments as needed.
