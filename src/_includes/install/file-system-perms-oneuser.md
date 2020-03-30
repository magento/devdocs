To set permissions before you install the Magento software:

1. Log in to your Magento server.
1. Use a file manager application provided by your shared hosting provider to verify write permissions are set on the following directories:

    *  `vendor` (Composer or compressed archive installation)
    *  `app/etc`
    *  `pub/static`
    *  `var`
    *  Any other static resources

1. If you have command-line access, enter the following commands in the order shown:

   ```bash
   cd <magento_root>
   ```

   ```bash
   find var vendor pub/static pub/media app/etc -type f -exec chmod u+w {} +
   ```

   ```bash
   find var vendor pub/static pub/media app/etc -type d -exec chmod u+w {} +
   ```

   ```bash
   chmod u+x bin/magento
   ```

1. To optionally enter all commands on one line, enter the following, assuming Magento is installed in `/var/www/html/magento2`:

   ```bash
   cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod u+w {} + && find var vendor pub/static pub/media app/etc -type d -exec chmod u+w {} + && chmod u+x bin/magento
   ```

   If you haven't done so already, get the Magento software in one of the following ways:

    *  [Compressed archive]({{ page.baseurl }}/install-gde/prereq/zip_install.html)
    *  [Composer metapackage]({{ page.baseurl }}/install-gde/composer.html)
    *  [Clone the repository (contributing developers only)]({{ page.baseurl }}/install-gde/prereq/dev_install.html)

1. After you have set file system ownership and permissions, continue with any of the following:

    *  [Command-line installation]({{ page.baseurl }}/install-gde/install/cli/install-cli.html)
    *  [Setup Wizard installation]({{ page.baseurl }}/install-gde/install/web/install-web.html)

{:.bs-callout-info}
To further restrict permissions after installing the Magento software, you [configure a Magento umask]({{ page.baseurl }}/install-gde/install/post-install-umask.html).

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
