---
group: software-update-guide
title: Applying patches
functional_areas:
  - Upgrade
---

This topic discusses the workflow for applying a patch to your Magento application.

We strongly recommend that patches be tested in a staging/development environment before being deployed to production.

## First: backup your data

We also strongly recommend that you back up your data before any patches are applied.
To back up your data, refer to [Back up and roll back the file system][].

## Get the patch

Magento patches can be found in the [Magento Security Center][]. Follow the instructions on the page to download the patch file, depending on your version and installation type.

## How patches work

Patch (or diff) files are text files that note:

* The file(s) to be changed.
* The line number to begin the change and the number of lines to be changed.
* The new code to swap in.

When the [patch][] program is run, this file is read in and the specified changes are made to the file(s).

## Using the command line to apply a patch

1. Upload the local file into the `<Magento_root>` on the server using FTP, SFTP, SSH or your normal transport method.  
1. Login to the server as the [Magento admin user][] and verify the file is in the correct directory.
1. In the command line interface, run the following commands according to the patch extension:

        patch < patch_file_name.patch

   The command assumes the file to be patched is located relative to the patch file.

{: .bs-callout-info}
If the command line shows: `File to patch:`, it means it cannot locate the intended file, even if the path seems correct.
In the box displayed in the command line terminal, the first line shows the file to be patched.
Copy the file path and paste it into the `File to patch:` prompt and press `Enter` and the patch should complete.

5. For the changes to be reflected, refresh the cache in the Admin under **System** > Tools > **Cache Management**.

Alternatively, the patch can be applied locally with the same command, then committed and pushed normally.

## Using Composer to install patches

It is possible to install a patch with Composer, but it takes a few more steps.
Please refer to the [Magento Help Center][] for details on how to use Composer to do patch installation.

<!-- Link Definitions -->
[Magento Security Center]:https://magento.com/security/patches
[-p1 instead of -p0]:http://man7.org/linux/man-pages/man1/patch.1.html
[Back up and roll back the file system]:https://devdocs.magento.com/guides/v2.3/install-gde/install/cli/install-cli-backup.html
[patch]:https://en.wikipedia.org/wiki/Patch_(Unix)
[Magento Help Center]:https://support.magento.com/hc/en-us/articles/360005484154-Create-a-patch-for-a-Magento-2-Composer-installation-from-a-GitHub-commit
[Magento Admin user]:https://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli.html#config-install-cli-first
