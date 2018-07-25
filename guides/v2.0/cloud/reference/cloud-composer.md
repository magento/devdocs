---
group: cloud
subgroup: 020_tech
title: Composer
menu_title: Composer
menu_node:
menu_order: 5
version: 2.0
github_link: cloud/reference/cloud-composer.md
redirect_from:
  - /guides/v2.0/cloud/cloud-composer.html
  - /guides/v2.1/cloud/cloud-composer.html
functional_areas:
  - Cloud
  - Upgrade
---

We use [Composer](https://getcomposer.org/doc){:target="_blank"} to manage dependencies and upgrades in {{site.data.var.ece}} and provide context about the included packages, what the packages do, and how they fit together. We highly recommend experience with Composer.

Composer is a dependency manager for PHP. Composer manages the dependencies you require on a project by project basis. This means that Composer will pull in all the required libraries, dependencies and manage them all in one place. For {{site.data.var.ece}}, we use `composer.json` and `composer.lock` to manage your modules list, packages, dependencies, and so on for determining upgrades, patches, hotfixes, and more. Magento extension and module developers use `composer.json` to also manage their product installations and upgrades. For details, see [Your project's Composer files](#your-projects-composer-files).

The following sections detail the specifics of {{site.data.var.ece}} composer packages, how they work, and what they do within the code base.

For information on what files should and shouldn't be in source control, see [Project structure]({{ page.baseurl }}/cloud/project/project-start.html). We provide a `.gitignore` file to aid.

## Your project's Composer files
Your project root directory contains `composer.json` and `composer.lock`.

You edit `composer.json` to specify dependencies for your {{site.data.var.ece}} project. For example, when you [install an extension or module]({{ page.baseurl }}/cloud/howtos/install-components.html), you update `composer.json` to add the extension to the list. You can either edit it manually or the [Component Manager]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html) can do it for you.

The file `composer.lock` stores a set of exact version dependencies that satisfy all of the version constraints of every requirement for every package in the dependency tree of the project.

The following commands determine what's in `composer.lock`:

*	`composer update`, which you must run every time you add or remove dependencies in `composer.json`.	`composer update` updates `composer.lock`.
*	`composer install` reads `composer.lock`, not `composer.json`, to download dependencies. You must keep an up-to-date copy of `composer.lock` in your Cloud Git repository.

The workflow is as follows:

1.	Make a change to `composer.json`. For example, edit this file when installing an extension or module.
2.	Run `composer update`.
3.	Add `composer.lock` to or update it in your Cloud Git repository.
4.	Push the changes to the Cloud environment, which causes Cloud to build and deploy the environment.

During the [build phase]({{ page.baseurl }}/cloud/reference/discover-deploy.html), the Cloud environment runs `composer install` on a fresh clone of your Git branch to retrieve the latest dependencies.

## Magento composer commands {#commands}
We use the following commands for Magento:

* `composer install`: Use this command if you know extension and base code is updated. This command uses `composer.lock`, not `composer.json`. The command reads the lock file and checks the versions installed and listed in the file. If new lines are included or the file has a later version, the code is installed. After initial install, using the command only installs new code if you add new extensions or versions to `composer.lock`.
* `composer update`: Use this command when you need to perform complete updates of all extensions and base code. This command uses `composer.json`, not `composer.lock`.

## Magento Commerce (Cloud) packages
The following sections discuss the Composer packages used by {{site.data.var.ee}}:

*	[`magento/magento-cloud-metapackage`](#cloud-composer-cloudmeta)
*	[`magento/magento-cloud-configuration`](#cloud-composer-cloudconfig)
*	[`magento/product-enterprise-edition`](#cloud-composer-prodee)

### magento/magento-cloud-metapackage {#cloud-composer-cloudmeta}
`magento/magento-cloud-metapackage` should be the only package in the `require` section of your `composer.json`. This is a [_metapackage_](https://getcomposer.org/doc/04-schema.md#type){:target="_blank"} and does not contain any code.

The metapackage depends on the appropriate versions of [`magento/magento-cloud-configuration`](#cloud-composer-cloudconfig) and [`magento/product-enterprise-edition`](#cloud-composer-prodee). At any given version, this package requires the same version of `magento/product-enterprise-edition`. Therefore, to use {{site.data.var.ee}} version 2.1.4, for example, `composer.json` must specify a requirement for `magento/magento-cloud-metapackage` version 2.1.4.

This package depends on a floating version of `magento/magento-cloud-configuration` (abbreviated _MCC_). It depends on the major and minor version of MCC that correspond to the specified {{site.data.var.ee}} version, and floats on the patch version so that compatible updates to this packages can be automatically pulled by running `composer update`.

### magento/magento-cloud-configuration (MCC) {#cloud-composer-cloudconfig}
This package contains the following scripts and `magento` commands that automatically perform building and deployment of the codebase on the cloud environment:

 * `pre-deploy.php`
 * `bin/magento magento-cloud:deploy`
 * `bin/magento magento-cloud:build`

`magento/magento-cloud-configuration` also contains patch files that are specific to Cloud.

There is a many-to-one relationship between the MCC version and Magento versions.

For {{site.data.var.ee}}, versions are specified as `2.<x>.<y>`.

MCC versions are specified as: `<100 + x>.<y>.*`. For example, {{site.data.var.ee}} 2.1.4 is associated with MCC 101.4.0. Subsequently, a new version of MCC could be released that corresponds to the same {{site.data.var.ee}} version, and it would be 101.4.1.

We release updated MCC code to add a new patch or to improve the build and deploy hooks.

To check for patches, you can check the `vendor/magento/magento-cloud-configuration/patches` folder.

### magento/product-enterprise-edition {#cloud-composer-prodee}
This {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %} requires Magento application components, including modules, frameworks, themes, and so on.

## Base packages and file marshalling
Magento contains two base packages, `magento/magento2-base` and `magento/magento2-ee-base`. These packages contain interstitial files that cannot be classified as extensions, themes, frameworks, or language packages; for example, sample server configuration files, {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} entry points, and so on.

These files are location-dependent, and cannot reside in the `vendor` directory. They are distributed as part of the base packages, and they rely on hooks located in the `magento/magento-composer-installer` package, which marshals them to the appropriate locations.

One way in which {{site.data.var.ee}} deploys differently than other Magento installations is that it does not marshal base packages on the Cloud environment. This could change in a future Cloud release, but for now, on the Cloud environment specifically, the marshalling functionality of `magento/magento-composer-installer` is disabled.

Therefore, when upgrading to a new Cloud version or adding, removing, or changing any packages that rely on file marshalling, you must:

1.	Run `composer update` locally.

	The new version of the base packages are marshalled out into the Cloud project root directory, which means files are added, removed, and changed.

	File marshalling works on your local system but _not_ on the Cloud server.

2.	Add and commit these updated files to your Cloud Git repository.
3.	Push the changes to your Cloud integration environment.

For more information, see:

* [Upgrade and test Magento Commerce]({{ page.baseurl }}/cloud/project/project-upgrade.html) for upgrading to a new version of Magento
* [Patch and test Magento Commerce]({{ page.baseurl }}/cloud/project/project-patch.html) for applying patches

This makes sure that base files are placed in the correct location and are under source control. If you notice any problems after deploying an updated version of Magento, one of the first things to check should be whether all of the base package files were added to source control.
