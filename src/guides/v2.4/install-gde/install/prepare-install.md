---
group: installation-guide
title: Update installation dependencies
functional_areas:
  - Install
  - System
  - Setup
---

## Introduction to Magento installation dependencies {#install-update-depend}

We now use [Composer](http://getcomposer.org) to resolve dependencies before you install the Magento software and extensions.

[Composer](https://glossary.magento.com/composer) is a separate application that manages [PHP](https://glossary.magento.com/php) dependencies. Before you can install the Magento software, you must perform the following tasks in the order shown:

1. [Install the Composer software]({{ page.baseurl }}/install-gde/prereq/dev_install.html).
1. [Create the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) so Composer writes files to the web server docroot as the correct user.
1. Run the [<code>composer install</code> command](#install-composer-install) from your Magento root directory (for example, `/var/www/magento2/`).

The Magento root directory is a subdirectory of your web server's docroot. Need help locating the docroot? Click [here]({{ page.baseurl }}/install-gde/basics/basics_docroot.html).

If the following error displays, see [troubleshooting](https://support.magento.com/hc/en-us/articles/360033818091):

```terminal
file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory
```

For you to be able to run the Magento application, make sure you perform all tasks as a user with privileges to write to the web server docroot. One way to do this is to log in as or switch to the [switch to the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

## Run <code>composer install</code> to update dependencies {#install-composer-install}

Update installation dependencies as follows:

1. Log in to your Magento server as the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner) or [switch to that user]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to the Magento installation directory and run `composer install`. Examples:

   CentOS:

   ```bash
   cd /var/www/html/magento2 && composer install
   ```

   Ubuntu:

   ```bash
   cd /var/www/magento2 && composer install
   ```

   This command updates package dependencies and can take a few minutes to complete.

The following error might display:

```terminal
[Composer\Downloader\TransportException]
The "https://repo.magento.com/archives/magento/composer/magento-composer-1.0.2.0.zip" file could not be downloaded (HTTP/1.1 404 Not Found)
```

If so, create [`auth.json`]({{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-clone-auth) in the Magento file system owner's `<home>/.composer` directory and run `composer install` again.

{% include install/file-system-perms-before_24.md %}

{:.ref-header}
Related topics

Install the Magento software:

*  [Command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html)
