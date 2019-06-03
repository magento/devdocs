---
group: software-update-guide
title: Applying a patch to Magento software
functional_areas:
  - Upgrade
---

## Patching the Magento application

This topic discusses the workflow for applying a patch to your Magento application.

We strongly recommend that patches be tested in a staging/development environment before being deployed to production.

## First: backup your data

We also strongly recommend that you backup your data before any patches are applied.
To back up your data, please refer to [Back up and roll back the file system][].

## Get the patch

Magento patches can be found in the [Magento Security Center][]. Follow the instructions on the page to download the patch file, depending on your version and installation type. As noted above, download the version that corresponds to your isntallation style.

## Using the command line to apply a patch 

1. Login to the server as the Magneto user.
1. Upload the patch files to the `<Magento_root>` folder.
1. If the store is compiled, make sure the compiler is disabled.
1. In the command line interface, run the following commands according to the patch extension:

        patch --p0<patch_file_name.patch  --list

    (If the above command does not work, try using [-p1 instead of -p0][])

1. Use either of the following methods to verify that the patch was installed:

    * Running the patch file with the `--list` argument, as shown above, will list all installed patches.

    * Download or view the file: app/etc/applied.patches.list.

1. For the changes to be reflected, refresh the cache in the Admin under **System** > Tools > **Cache Management**.
1. If your store is compiled, rerun the compiler.

<!-- Link Definitions -->
[Magento Security Center]:https://magento.com/security/patches
[-p1 instead of -p0]:http://man7.org/linux/man-pages/man1/patch.1.html
[Back up and roll back the file system]:https://devdocs.magento.com/guides/v2.3/install-gde/install/cli/install-cli-backup.html