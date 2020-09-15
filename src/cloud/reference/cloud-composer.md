---
group: cloud-guide
title: Composer
redirect_from:
  - /cloud/cloud-composer.html
functional_areas:
  - Cloud
  - Upgrade
---

We use [Composer](https://getcomposer.org/doc) to manage {{site.data.var.ece}} dependencies and upgrades and provide context about the included packages, what the packages do, and how they fit together. We highly recommend experience with Composer.

Composer manages required libraries and dependencies for your project and installs them in the `vendor` directory.

## Composer files {#files}

For {{site.data.var.ece}}, we use the `composer.json` and `composer.lock` files, located in the project root directory, to manage the modules list, packages, dependencies, and so on for determining upgrades, patches, hotfixes, and more.

Magento extension and module developers use the `composer.json` file to manage product installations and upgrades. See [Install, manage, and upgrade extensions]({{ site.baseurl }}/cloud/howtos/install-components.html).

The `composer.lock` file stores a set of exact version dependencies that satisfy all of the version constraints of every requirement for every package in the dependency tree of the project.

**Common commands:**

Command | Description
--- | ---
`composer update` | Updates to the latest versions of the dependencies. You must update every time you edit dependencies in the `composer.json` file. This updates the `composer.lock` file.
`composer install` | Reads the `composer.lock` file to download dependencies. You must keep an up-to-date copy of `composer.lock` in your {{site.data.var.ece}} repository.

The workflow is as follows:

1. Make a change to `composer.json`. For example, edit this file when installing an extension or module.
1. Run `composer update`.
1. Add `composer.lock` to or update it in your Cloud Git repository.
1. Push the changes to the Cloud environment, which causes Cloud to build and deploy the environment.

During the [build phase]({{ site.baseurl }}/cloud/reference/discover-deploy.html), the Cloud environment runs `composer install` on a fresh clone of your Git branch to retrieve the latest dependencies.

## magento/magento-cloud-metapackage {#cloud-composer-cloudmeta}

The `vendor/magento/magento-cloud-metapackage` should be the only package in the `require` section of your `composer.json`. This is a [_metapackage_](https://getcomposer.org/doc/04-schema.md#type) and does not contain any code.

The metapackage depends on the appropriate versions of `vendor/magento/ece-patches`, `vendor/magento/ece-tools` and `vendor/magento/product-enterprise-edition`. At any given version, this package requires the same version of `magento/product-enterprise-edition`. For example, to use {{site.data.var.ee}} version 2.2.0, for example, `composer.json` must specify a requirement for `magento/magento-cloud-metapackage` version 2.2.0.

This package depends on a floating version of `vendor/magento/magento-cloud-configuration` (abbreviated _MCC_). It depends on the major and minor version of MCC that correspond to the specified {{site.data.var.ee}} version, and floats on the patch version so that compatible updates to this packages can be automatically pulled by running `composer update`.

The main packages of this metapackage are the following:

-  **vendor/magento/ece-tools**—The `{{site.data.var.ct}}` package is compatible with {{site.data.var.ee}} version 2.1.4 and later to provide a rich set of features you can use to manage your {{site.data.var.ece}} project. It contains scripts and {{site.data.var.ece}} commands designed to help manage your code and automatically build and deploy your projects.
-  **vendor/magento/product-enterprise-edition**—This [metapackage](https://glossary.magento.com/metapackage) requires Magento application components, including modules, frameworks, themes, and so on.
-  **vendor/fastly2/magento2**—This module manages the Fastly CDN & services for the Pro Staging and Production and Starter Production environments. See [Fastly Documentation]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html).
-  **vendor/magento/module-paypal-on-boarding**—This module provides PayPal payment gateway checkout by connecting to your PayPal merchant account. See [PayPal On-Boarding tool]({{ site.baseurl }}/cloud/live/paypal-onboarding.html).

## Base packages and file marshalling

Magento contains two base packages: `magento/magento2-base` and `magento/magento2-ee-base`. These packages contain interstitial files that cannot be classified as extensions, themes, frameworks, or language packages; for example, sample server configuration files, [PHP](https://glossary.magento.com/php) entry points, and so on.

These files are location-dependent, and cannot reside in the `vendor` directory. They are distributed as part of the base packages, and they rely on hooks located in the `magento/magento-composer-installer` package, which marshals them to the appropriate locations.

One way in which {{site.data.var.ece}} deploys differently than other Magento installations is that it does not marshal base packages on the Cloud environment. This could change in a future Cloud release, but for now, on the Cloud environment—specifically, the marshalling functionality of `magento/magento-composer-installer`—it is disabled.

When upgrading to a new {{site.data.var.ece}} version or adding, removing, or changing any packages that rely on file marshaling, you must:

1. Run `composer update` locally.

   The new version of the base packages are marshalled out into the Cloud project root directory, which means files are added, removed, and changed.

   File marshalling works on your local system but _not_ on the Cloud server.

1. Add and commit these updated files to your Cloud Git repository.
1. Push the changes to your Cloud Integration environment.

See [Patch {{site.data.var.ece}}]({{ site.baseurl }}/cloud/project/project-patch.html).

This makes sure that base files are placed in the correct location and are under source control. If you notice any problems after deploying an updated version of Magento, one of the first things to check is whether all of the base package files were added to source control.
