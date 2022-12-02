---
group: configuration-guide
title: Build System Setup
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/deployment/build-system.html
layout: migrated
---

You can have one build system that meets the following requirements:

-  All Magento code is under source control in the same repository as the development and production systems
-  Make sure all of the following are _included_ in source control:

   -  `app/etc/config.php`
   -  `generated` directory (and subdirectories)
   -  `pub/media` directory
   -  `pub/media/wysiwyg` directory (and subdirectories)
   -  `pub/static` directory (and subdirectories)

-  Must have a compatible PHP version installed
-  Must have Composer installed
-  It has file system ownership and permissions set as discussed in [Prerequisite for your development, build, and production systems][].
-  The build system does not need Magento to be installed, but the code must be available to it.

{:.bs-callout-warning}
The database connection not required if it is already contained in `config.php` (see [Export the configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html)). Otherwise, the database connection is required.

{:.bs-callout-info}
The build machine can be on its own host or on the same host as an installed Magento system.

## Configure the build machine

The following sections discuss how to configure the build machine.

### Install Composer

{% include install/composer-clone.md %}

### Install PHP

Install PHP on [CentOS] or [Ubuntu][].

### Set up the build system

To set up the build system:

1. Log in to the build system as, or switch to, the file system owner.
1. Retrieve the Magento code from source control.

   If you use Git, use the following command:

   ```bash
   git clone [-b <branch name>] <repository URL>
   ```

1. Change to the Magento root directory and enter:

   ```bash
   composer install
   ```

1. Wait for Magento dependencies to update.
1. Set ownership:

   ```bash
   chown -R <magento file system owner name>:<web server username> .
   ```

   For example,

   ```bash
   chown -R magento_user:apache .
   ```

1. If you use Git, open `.gitignore` in a text editor.
1. Start each of the following lines with a `#` character to comment them out:

   ```conf
   # app/etc/config.php
   # pub/media/*
   # generated/*
   # pub/media/*.*
   # pub/media/wysiwyg/*
   # pub/static/*
   ```

1. Save your changes to `.gitignore` and exit the text editor.
1. If you use Git, use the following commands to commit the change:

   ```bash
   git add .gitignore && git commit -m "Modify .gitignore for build and production"
   ```

   See the [`.gitignore` reference]({{ page.baseurl }}/config-guide/prod/config-reference-gitignore.html) for more information.

1. The build system should use either [default mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#default-mode) or [developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode):

   ```bash
   bin/magento deploy:mode:set <mode>
   ```
   `<mode>` is required. It can be either `default` or `developer`.

{:.ref-header}
Related topics

-  [Set up your development systems][]
-  [Set up your production system][]

<!-- Link Definitions -->
[CentOS]: https://wiki.centos.org/HowTos/php7
[Ubuntu]: https://help.ubuntu.com/lts/serverguide/php.html
[Prerequisite for your development, build, and production systems]: {{ page.baseurl }}/config-guide/deployment/pipeline/technical-details.html#config-deploy-prereq
[`.gitignore` reference]: {{ page.baseurl }}/config-guide/prod/config-reference-gitignore.html
[Set up your development systems]: {{ page.baseurl }}/config-guide/deployment/pipeline/development-system.html
[Set up your production system]: {{ page.baseurl }}/config-guide/deployment/pipeline/production-system.html
