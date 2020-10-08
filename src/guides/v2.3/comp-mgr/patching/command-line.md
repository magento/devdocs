---
group: software-update-guide
title: Apply patches using Command Line tools
functional_areas:
  - Upgrade
---

{:.procedure}
To apply patches from the command line:

1. Upload the local file into the `<Magento_root>` directory on the server using FTP, SFTP, SSH or your normal transport method.
1. Log into the server as the [Magento admin user][] and verify the file is in the correct directory.
1. In the command line interface, run the following commands according to the patch extension:

   ```bash
   patch < patch_file_name.patch
   ```

   The command assumes the file to be patched is located relative to the patch file.

    {:.bs-callout-info}
   If the command line shows: `File to patch:`, it means it cannot locate the intended file, even if the path seems correct. In the box displayed in the command line terminal, the first line shows the file to be patched. Copy the file path and paste it into the `File to patch:` prompt and press `Enter` and the patch should complete.

1. For the changes to be reflected, refresh the cache in the Admin under **System** > Tools > **Cache Management**.

   Alternatively, the patch can be applied locally with the same command, then committed and pushed normally.

<!-- Link Definitions -->

[Magento Admin user]:{{ page.baseurl }}/config-guide/cli/config-cli.html#config-install-cli-first
