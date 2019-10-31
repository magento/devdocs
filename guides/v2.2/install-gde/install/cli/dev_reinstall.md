---
group: installation-guide
subgroup: 99_contrib
title: Reinstall the Magento software
menu_title: Reinstall the Magento software
menu_order: 200
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

A contributing developer reinstalls Magento by updating `composer.json` to specify the Magento product version and component versions desired and runs `composer update`.

To reinstall the Magento software as a contributing developer:

1. Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the [switch to the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Make a backup copy of `composer.json` in your Magento installation directory:

   ```bash
   cd <magento_root>
   ```

   ```bash
   cp composer.json composer.json.bak
   ```

1. Open `composer.json` in a text editor.
1. Locate the following line:

   ```json
   "require": {
         "magento/product-community-edition": "<version>"
   },
   ```

1. Replace `<version>` with the version to which you want to upgrade, where `<version>` is the product version to use.

   (The product version is in the format `2.0.x`)

<!-- is the `magento/product-community-edition` version from -->.

1. Save your changes to `composer.json` and exit the text editor.
1. Enter the following command:

   ```bash
   composer update
   ```

   Wait for dependencies to update.

1. [Install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli.html).

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
