1. Log in to your development system as, or switch to, the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).

1. Enter the following commands in the order shown:

   ```bash
   cd <Magento root dir>
   php bin/magento app:config:dump
   ```

   For example, if Magento is installed in `/var/www/html/magento2`, enter:

   ```bash
   cd /var/www/html/magento2
   php bin/magento app:config:dump
   ```

1. If you use Git, enter the following command to confirm that `app/etc/config.php` was updated:

   ```bash
   git status
   ```

   You should see output similar to the following:

   ```terminal
   On branch m2.2_deploy
   Changed but not updated:
     (use "git add &lt;file>..." to update what will be committed)
     (use "git checkout -- &lt;file>..." to discard changes in working directory)
          modified:   app/etc/config.php
   ```

   {:.bs-callout-warning}
   Do _not_ submit changes to the `generated`, `pub/media`, or `pub/static` directories to source control. You'll generate those files on your build system. The development system likely has code, themes, and so on that are not ready for use on the production system.

1. Check in your changes to `app/etc/config.php` only to source control.

   The Git command follows:

   ```bash
   git add app/etc/config.php && git commit -m "Updated shared configuration" && git push mconfig m2.2_deploy
   ```
