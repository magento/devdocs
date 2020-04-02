---
group: cloud-guide
title:  Restore configuration files
functional_areas:
  - Cloud
  - Deploy
redirect_to: https://support.magento.com/hc/en-us/articles/360033182871
---

The deployment process creates a backup file for each configuration file:

-  `app/etc/config.php.bak`—contains system-specific settings and is auto-generated during build if it does not exist
-  `app/etc/env.php.bak`—contains sensitive configuration data

If you encounter problems resulting from a missing or altered configuration file, you can restore them using the ECE tools `backup:restore` command.

{:.bs-callout-info}
The BAK files are a product of the deployment process. If you manually change a configuration file after the deployment, your changes are not reflected in the existing BAK files.

To restore the configuration files:

1. Log in to your remote repository using  [SSH]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh).
1. List the available backup files.

   ```bash
   ./vendor/bin/ece-tools backup:list
   ```

   ```terminal
   The list of backup files:
   app/etc/env.php
   app/etc/config.php
   ```

1. Restore the configuration files.

   ```bash
   ./vendor/bin/ece-tools backup:restore
   ```

   You receive a list of the existing configuration files affected by the restore.

   ```terminal
   app/etc/env.php file exists! If you want to rewrite existed files use --force
   app/etc/config.php file exists! If you want to rewrite existed files use --force
   ```

1. Use the `--force` option to overwrite all files.

   ```bash
   ./vendor/bin/ece-tools backup:restore --force
   ```

   ```terminal
   Command backup:restore with option --force will rewrite your existed files. Do you want to continue [y/N]?y
   Backup file app/etc/env.php was restored.
   Backup file app/etc/config.php was restored.
   ```

1. Optionally, you can restore a specific configuration file.

   ```bash
   ./vendor/bin/ece-tools backup:restore --force --file=app/etc/config.php
   ```

   ```terminal
   Command backup:restore with option --force will rewrite your existed files. Do you want to continue [y/N]?y
   Backup file app/etc/config.php was restored.
   ```
