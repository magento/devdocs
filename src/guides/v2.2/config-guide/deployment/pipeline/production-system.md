---
group: configuration-guide
title: Production System Setup
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
---

You can have one production system. All of the following must be true:

*  All Magento code is in source control in the same repository as the development and build systems
*  Make sure all of the following are _included_ in source control:

   *  `app/etc/config.php`
   *  `generated` directory (and subdirectories)
   *  `pub/media` directory
   *  `pub/media/wysiwyg` directory (and subdirectories)
   *  `pub/static` directory (and subdirectories)

*  Magento 2.2 or later must be installed and set for [production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode)
*  It has Magento file system ownership and permissions set as discussed in [Prerequisite for your development, build, and production systems]({{ page.baseurl }}/config-guide/deployment/pipeline/technical-details.html#config-deploy-prereq).

## Set up a production machine

To set up a production machine:

1. After installing Magento or pulling it from source control, log in to the production server as, or switch to, the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
1. Create `~/.ssh/.composer/auth.json` if you haven't already done so.

   Create the directory:

   ```bash
   mkdir -p ~/.ssh/.composer
   ```

   Create `auth.json` in that directory.

   `auth.json` must contain your Magento [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).

   A sample follows:

   ```json
   {
      "http-basic": {
         "repo.magento.com": {
            "username": "<your public key>",
            "password": "<your private key>"
         }
      }
   }
   ```

1. Save your changes to `auth.json`.
1. Copy `<Magento root dir>/app/etc/env.php` from your development system to your production system.
1. Open `env.php` in a text editor and change any values necessary (for example, database connection information).
1. Run the [`magento config:set`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html) or [`magento config:set-sensitive`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html) command to set the values of any system-specific or sensitive configuration values, respectively.

   The following section shows an example.

## Set configuration values on your production system

This section discusses how to set sensitive values on your production system using the `magento config:sensitive:set` command.

To set sensitive values:

1. Find a value to set using the [sensitive value reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html).
1. Note the configuration path for the setting.
1. Log in to the production system as, or switch to, the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
1. Change to the Magento installation directory.
1. Enter the following command:

   ```bash
   bin/magento config:sensitive:set {configuration path} {value}
   ```

   For example, to set the value of the YouTube API key to `1234`, enter

   ```bash
   bin/magento config:sensitive:set catalog/product_video/youtube_api_key 1234
   ```

   You can also set one or more values interactively as follows:

   ```bash
   bin/magento config:sensitive:set -i
   ```

   When prompted, enter a value for each sensitive setting or press Enter to skip a value and move to the next one.

1. To verify the value was set, log in to the Magento Admin.
1. Locate the setting in the Admin.

   For example, the YouTube API key setting is located in **Stores** > Settings > **Configuration** > **Catalog** > **Catalog** > **Product Video**.

   The setting is displayed in the Admin and cannot be edited. The following figure shows an example.

   ![Sensitive setting in Admin]({{ site.baseurl }}/common/images/config_sensitive-set.png)
