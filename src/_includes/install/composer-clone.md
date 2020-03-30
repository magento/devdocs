First, check if Composer is already installed:

In a command prompt, enter any of the following commands:

-  `composer --help`
-  `composer list --help`

If command help displays, Composer is already installed.

If an error displays, use the following steps to install Composer.

To install Composer:

1. Change to or create an empty directory on your Magento server.

1. Enter the following commands:

   ```bash
   curl -sS https://getcomposer.org/installer | php
   ```

   ```bash
   mv composer.phar /usr/local/bin/composer
   ```

For additional installation options, see the [Composer installation documentation](https://getcomposer.org/download/).
