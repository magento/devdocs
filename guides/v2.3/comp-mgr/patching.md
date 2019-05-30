---
group: software-update-guide
title: Applying a patch to Magento software
functional_areas:
  - Upgrade
---

## Patching the Magento application

This topic discusses the workflow for applying a patch to your Magento application.
There are two general ways of patching Magento, depending on your installation type.

* Composer installation - When you used Composer to install Magento, be sure to get the `%patch_name%.composer.patch` version.
* GitHub/Command line installation - Generally named `%patch_name%.patch`, these patches are installed via the command line.

## First: backup your data

We strongly recommend that patches be tested in a staging/development environment before being deployed to production.
We also strongly recommend that you backup your data before any patches are applied.
To back up your data, please refer to [Back up and roll back the file system][].

## Get the patch

Magento patches can be found in the [Magento Security Center][]. Follow the instructions on the page to download the patch file, depending on your version and installation type. As noted above, download the version that corresponds to your isntallation style.

## Applying a Composer patch for Magento open source and commerce

1. Upload the patch to your `<Magento_root>` directory.
1. Login to the server as your Magneto user.
1. Run the following SSH command:

        patch -p1 < %patch_name%.composer.patch

    (If the above command does not work, try using [-p2 instead of -p1][])

1. For the changes to be reflected, refresh the cache in the Admin under **System** > **Cache Management**.

## Using the command line to apply a patch

If you are a Magento developer or have used the Git method of installing, follow the steps below to install the patch.

1. Login to the server as your Magneto user.
1. Upload the patch files to the `<Magento_root>` folder.
1. If the store is compiled, make sure the compiler is disabled.
1. In the command line interface, run the following commands according to the patch extension:

        patch --p1<patch_file_name.patch

    (If the above command does not work, try using [-p2 instead of -p1][])

1. Use either of the following methods to verify that the patch was installed:

    * Download or view the file: app/etc/applied.patches.list.

    * From the command line, run the patch file with the --list argument for a report of all patch installations.

--list argument

<!-- Link Definitions -->
[Magento Security Center]:https://magento.com/security/patches
[-p2 instead of -p1]:http://man7.org/linux/man-pages/man1/patch.1.html
[Back up and roll back the file system]:https://devdocs.magento.com/guides/v2.3/install-gde/install/cli/install-cli-backup.html