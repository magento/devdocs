---
layout: default
group: cloud
subgroup: 010_welcome
title: Composer in Cloud
menu_title: Composer in Cloud
menu_node:
menu_order: 45
version: 2.0
github_link: cloud/reference/cloud-composer.md
---

We use [Composer](https://getcomposer.org/doc){:target="_blank"} to manage dependencies and upgrades in Magento Commerce and provide context about the included packages, what the packages do, and how they fit together. We highly recommend experience with Composer.

The following sections detail the specifics of Magento Commerce composer packages, how they work, and what they do within the code base.

## Your project's Composer files
Your project root directory contains `composer.json` and `composer.lock`.

You edit `composer.json` to specify dependencies for your Magento Commerce project. For example, when you install an extension, you update `composer.json` to add the extension to the list. you can either edit it manually or the [Component Manager]({{ page.baseurl }}comp-mgr/bk-compman-upgrade-guide.html) can do it for you.

`composer.lock` stores a set of exact version dependencies that satisfy all of the version constraints of every requirement for every package in the dependency tree of the project.

The following commands determine what's in `composer.lock`:

*	`composer update`, which you must run every time you add or remove dependencies in `composer.json`.

	`composer update` updates `composer.lock`.

*	`composer install` reads `composer.lock`, not `composer.json`, to download dependencies.

	You must keep an up-to-date copy of `composer.lock` in your Cloud Git repository.

The workflow is as follows:

1.	Make a change to `composer.json`. For example, edit this file when installing an extension.
2.	Run `composer update`
3.	Add `composer.lock` to or update it in your Cloud Git repository.
4.	Push the changes to the Cloud environment, which causes Cloud to build and deploy the environment.

During the [build phase]({{ page.baseurl }}cloud/reference/discover-deploy.html), the Cloud environment runs `composer install` on a fresh clone of your Git branch to retrieve the latest dependencies.

## Magento Commerce (Cloud) packages
The following sections discuss the {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} packages used by Magento Commerce:

*	[`magento/magento-cloud-metapackage`](#cloud-composer-cloudmeta)
*	[`magento/magento-cloud-configuration`](#cloud-composer-cloudconfig)
*	[`magento/product-enterprise-edition`](#cloud-composer-prodee)

### `magento/magento-cloud-metapackage` {#cloud-composer-cloudmeta}
`magento/magento-cloud-metapackage` should be the only package in the `require` section of your `composer.json`. This is a [_metapackage_](https://getcomposer.org/doc/04-schema.md#type){:target="_blank"} and does not contain any code.

The metapackage depends on the appropriate versions of [`magento/magento-cloud-configuration`](#cloud-composer-cloudconfig) and [`magento/product-enterprise-edition`](#cloud-composer-prodee). At any given version, this package requires the same version of `magento/product-enterprise-edition`. Therefore, to use Magento EE version 2.1.4, for example, `composer.json` must specify a requirement for `magento/magento-cloud-metapackage` version 2.1.4.

This package depends on a floating version of `magento/magento-cloud-configuration` (abbreviated _MCC_). It depends on the major and minor version of MCC that correspond to the specified Magento EE version, and floats on the patch version so that compatible updates to this packages can be automatically pulled by running `composer update`.

### `magento/magento-cloud-configuration` (MCC) {#cloud-composer-cloudconfig}
This package contains the following scripts and `magento` commands that automatically perform building and deployment of the codebase on the cloud environment:

 * `pre-deploy.php`
 * `bin/magento magento-cloud:deploy`
 * `bin/magento magento-cloud:build`

`magento/magento-cloud-configuration` also contains patch files that are specific to Cloud.

There is a many-to-one relationship between the MCC version and Magento versions.

For Magento EE, versions are specified as `2.<x>.<y>`.

MCC versions are specified as: `<100 + x>.<y>.*`. For example, Magento EE 2.1.4 is associated with MCC 101.4.0. Subsequently, a new version of MCC could be released that corresponds to the same Magento EE version, and it would be 101.4.1.

We release updated MCC code to add a new patch or to improve the build and deploy hooks.

### `magento/product-enterprise-edition` {#cloud-composer-prodee}
This {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %} requires Magento application components, including modules, frameworks, themes, and so on.

## Base packages and file marshaling
Magento contains two base packages, `magento/magento2-base` and `magento/magento2-ee-base`. These packages contain interstitial files that cannot be classified as extensions, themes, frameworks, or language packages; for example, sample server configuration files, {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} entry points, and so on.

These files are location-dependent, and cannot reside in the `vendor` directory. They are distributed as part of the base packages, and they rely on hooks located in the `magento/magento-composer-installer` package, which marshals them to the appropriate locations.

One way in which Magento Commerce deploys differently than other Magento installations is that it does not marshal base packages on the Cloud environment. This could change in a future Cloud release, but for now, on the Cloud environment specifically, the marshaling functionality of `magento/magento-composer-installer` is disabled.

Therefore, when upgrading to a new Cloud version or adding, removing, or changing any packages that rely on file marshaling, you must:

1.	Run `composer update` locally.

	The new version of the base packages are marshaled out into the Cloud project root directory, which means files are added, removed, and changed.

	File marshaling works on your local system but _not_ on the Cloud server.

2.	Add and commit these updated files to your Cloud Git repository.
3.	Push the changes to your Cloud integration environment.

For more information, see [Test a Magento patch]({{ page.baseurl }}cloud/project/project-upgrade.html).

This makes sure that base files are placed in the correct location and are under source control. If you notice any problems after a deploying an updated version of Magento, one of the first things to check should be whether all of the base package files were added to source control.
