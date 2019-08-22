---
group: release-notes
title: Magento Commerce (Cloud) 2.2.0 Release Notes
---

We are pleased to present {{site.data.var.ece}} 2.2.0 General Availability. This release includes numerous functional fixes and enhancements.

To fully upgrade {{site.data.var.ece}}, see [Upgrade Magento Commerce (Cloud)]({{ site.baseurl }}/guides/v2.2/cloud/project/project-upgrade.html). Specific steps and vital information for upgrading from 2.0.X and 2.1.X are included. For specific changes for deployments, see [Changes in Deployment](#deploy).

{% include cloud/note-ece-tools-release-info.md %}

## Highlights {#highlights}

{{site.data.var.ece}} 2.2.0 includes a wealth of new, exciting features, and hundreds of enhancements and fixes. For full {{site.data.var.ece}} highlights and updates, see [Magento Commerce 2.2.0 Release Notes]({{ site.baseurl }}/guides/v2.2/release-notes/ReleaseNotes2.2.0EE.html)

Look for the following {{site.data.var.ece}} highlights in this release:

* **B2B Commerce functionality** is designed to meet the needs of merchants whose primary customers are companies, rather than consumers. Companies can create and maintain their own accounts, each with teams of buyers with various roles and levels of permission. B2B Commerce functionality also includes a flexible API that integrates with a variety of ERP solutions from Magento partners. B2B is supported for {{site.data.var.ece}} Pro subscriptions. See [B2B Quick Tour](http://docs.magento.com/m2/ce/user_guide/getting-started/quick-tour.html) for an overview of the rich B2B feature set we're introducing in this release, and [Getting Started with Magento Commerce for B2B](http://docs.magento.com/m2/b2b/user_guide/getting-started.html) for a more complete exploration of these new features.

* **Magento Commerce Starter**. In addition to our Pro plan, Magento Cloud (Commerce) now comes in a smaller, Platform-as-a-Service version — Magento Commerce Starter. For an overview of these plans, see [Welcome to Magento Commerce Cloud]({{ site.baseurl }}/guides/v2.2/cloud/bk-cloud.html). For specific information on Starter, see Starter [architecture]({{ site.baseurl }}/guides/v2.2/cloud/basic-information/starter-architecture.html) and [develop and deploy workflow]({{ site.baseurl }}/guides/v2.2/cloud/basic-information/starter-develop-deploy-workflow.html).

* **Staging and Production environments in the UI** for Pro projects. Starting October 23, 2017, all projects created using the free 30-day trial or provisioned for new accounts includes Staging and Production environments in the Project Web Interface.

* **30-day free trials available** for Starter and Pro projects. Starting October 23, 2017, we provide trials for Start and Pro projects. We auto provision your project, configuring basic settings to get you started. You can access a new Onboarding Portal to get started with your project. For more information, see [Subscriptions and plans]({{ page.baseurl }}/cloud/bk-cloud.html).

* **Improvements to the {{site.data.var.ece}} deployment process**. This release includes new build and deployment variables. Users of earlier versions of {{site.data.var.ece}} will note that MCC has been replaced by ece-tools and ece-patches, which allows for patching your {{site.data.var.ece}} without requiring a full installation of base code and the patch. For more information, see [Magento application environment variables]({{ site.baseurl }}/guides/v2.2/cloud/env/environment-vars_magento.html), [Composer]({{ site.baseurl }}/guides/v2.2/cloud/reference/cloud-composer.html), and [Changes in Deployment](#deploy).

* **Upgraded technology stack.**  {{site.data.var.ece}} recommends Fastly 1.2.33 and dropped support for PHP 5.6 and Varnish 3.  We now support PHP 7.1 and Varnish 5, along with Redis 3.2 and MySQL 5.7. All [third-party libraries]({{ site.baseurl }}/guides/v2.2/release-notes/packages-cloud.html) have been upgraded to the latest stable version.

* **Pipeline deployment**, a new deployment process, enables build and deployment stages to minimize production system downtime for site updates. This deployment expands on the previous Configuration Management for {{site.data.var.ece}}. To learn more, see [Configuration Management]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html) and [Pipeline Deployment]({{ page.baseurl }}/config-guide/deployment/pipeline/).

* **Bundled extensions**. This release of Magento includes the first third-party extension that we are bundling with Magento Commerce -- Magento Social. This extension establishes a connection between your store and your corporate Facebook account, and creates a page with products from your catalog. When shoppers click a product, they are redirected to the corresponding product page in your Magento store.

* **Integrated Signifyd fraud protection**. You can learn more about this fraud protection service, which can help merchants eliminate liability for any losses or fees from fraudulent orders, in [Signifyd fraud protection]({{ site.baseurl }}/guides/v2.2/payments-integrations/signifyd/signifyd.html).

* **Significant enhancements in platform security and developer experience**. Security improvements include the removal of unserialize calls and protection of this functionality to increase resilience against dangerous code execution attacks. We have also continued to review and improve our protection against Cross-Site Scripting (XSS) attacks.

* **Performance gains from improvements in indexing, cart, and cache operations**. Customers can browse and shop on a storefront while indexers are running with no visible impact to their experience. Additionally, long-running indexers operate in batches to better manage memory and run times. Cart improvements enable a buyer to create a cart with more than 300 line items, and merchants can process a cart with at least 300 line items. Varnish cache configuration now includes saint and grace mode to ensure Varnish is always presenting a cached page to a shop’s customers.  Enhancements to cache invalidation logic and optimization of edge side include blocks for frequently changing data that significantly boost cache hit ratios.

* **Substantial contributions from our Community members**. Our Community Engineering Team has been working with skilled and enthusiastic community members, and together they've added hundreds of pull requests to the Magento code base. For more information about our Community Engineering Team. see [Magento Community Engineering](https://github.com/magento-engcom).

Looking for more information on these new features as well as many others? Check out  [Magento 2.2 Developer Documentation]({{ site.baseurl }}/guides/v2.2/).

## Security enhancements {#security}

Magento 2.2.0 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

In general, we’ve removed serialize/unserialize from most the code to improve protection against remote code execution attacks. We’ve enhanced protection of code where use of object serialization or unserialization was unavoidable.  Additionally, we’ve increased our use of output escaping to protect against cross-site scripting (XSS) attacks.

[Contact us](https://magento.com/company/contact-us) for more information.

## Known issues {#known}

For all known {{site.data.var.ee}} 2.2.0 GA issues, see [Magento Commerce 2.2.0 Release Notes]({{ site.baseurl }}/guides/v2.2/release-notes/ReleaseNotes2.2.0EE.html).

## Fixed issues {#fixed}

This release contains numerous fixes and enhancements. This section includes only fixes for {{site.data.var.ece}}. For all known {{site.data.var.ee}} 2.2.0 GA issues, see [Magento Commerce 2.2.0 Release Notes]({{ site.baseurl }}/guides/v2.2/release-notes/ReleaseNotes2.2.0EE.html).

<!--RFC-125-->* We removed `var/view_preprocessed` symlinking to fix an issue that was causing JavaScript minification conflicts.

<!-- MAGECLOUD-1355 -->* You can now [manually reset stuck Magento cron jobs]({{ site.baseurl }}/guides/v2.2/cloud/trouble/reset-cron-jobs.html) using a CLI command in all environments via SSH access. The deployment process automatically resets cron jobs. You must [patch magento/ece-tools]({{ site.baseurl }}/guides/v2.2/cloud/project/project-patch.html) to get this update.

<!-- 57167 -->* You can now generate sitemap.xml and robots.txt normally through the Magento Admin panel, without needing to move the file and have a redirect entered. If you are upgrading to 2.2, please enter a [Support ticket] to have any redirects removed for sitemap and robots.txt.

<!-- MAGECLOUD-894 -->* Newly provisioned {{site.data.var.ece}} receive an email to change the Magento Admin password. For enhanced security, we generate a random password for the username "admin" and send an email to the Project Owner to properly set up Admin access for Starter `master` Production environment and the Pro Integration `master` environment.

<!-- MAGECLOUD-1025 MAGECLOUD-930 -->* We added additional environment variables and updated build and deploy hooks to [`.magento.app.yaml`]({{ site.baseurl }}/guides/v2.2/cloud/project/project-conf-files_magento-app.html).

* When upgrading to {{site.data.var.ece}} 2.2.0, you will need to update your `.magento.app.yaml` file and Configuration Management `config.local.php` file. See [Upgrade Magento Commerce (Cloud)]({{ site.baseurl }}/guides/v2.2/cloud/project/project-upgrade.html).

* We provide updated build and deploy variables. For details, see [Magento application environment variables]({{ site.baseurl }}/guides/v2.2/cloud/env/environment-vars_magento.html).

* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on {{site.data.var.ece}}, see [Redis troubleshooting]({{ site.baseurl }}/guides/v2.2/cloud/trouble/redis-troubleshooting.html).

<!--- 55462/52448-->* Magento now correctly displays customer address during account creation. Previously, when you selected a default billing address during creation of a new customer account, Magento would not display the address.

<!---61104 -->* When you delete an image in Admin, Magento no longer deletes it on the server. Previously, Magento deleted it from the server as well, which caused errors for other products (example error message: `Cannot gather stats! Warning!stat(): stat failed for`).

<!--- 68833 -->* We’ve fixed errors in processing valid orders using a PayPal account that had been previously used to pay for a valid order that had problems during checkout.

## Changes in Deployment {#deploy}

When upgrading to {{site.data.var.ece}} 2.2, consider the following changes in deployment:

* `ADMIN_EMAIL` variable must be set. We require the `ADMIN_EMAIL` environment variable configured for deployments. You can set this variable through the Project Web Interface. This is required for new installations and upgrades. For instructions, see [Add admin variables for Admin access]({{ site.baseurl }}/guides/v2.2/cloud/onboarding/onboarding-tasks.html).

* Update and include `config.php` and add a list of all modules. If you use Configuration Management with a `config.local.php` file, you must create a `config.php` and add it to your code. For instructions, see [Configuration Management and upgrading]({{ site.baseurl }}/guides/v2.2/cloud/project/project-upgrade.html).

* The command for generating `config.php` changed in 2.2 from `php bin/magento magento-cloud:scd-dump` to `php vendor/bin/m2-ece-scd-dump`.

* `.magento.app.yaml` has new build and deploy hooks. As part of your upgrade, you should update the `.magento.app.yaml` file with new build and deploy hooks and a set of environment variables. All actions completed by build and deploy are completed by these hooks. For instructions, see [Update .magento.app.yaml]({{ site.baseurl }}/guides/v2.2/cloud/project/project-upgrade.html#update-the-magentoappyaml-file). For additional technical information, we have removed pre-deployment tasks, refined build and deploy tasks, and modified build and deploy variables.

* The deploy variable `GENERATED_CODE_SYMLINK` has been removed. The generated folders `var/generation` and `var/di` have been moved to a `generated/` read-only directory. The folder `var/generation` is now `generated/code` and `var/di` is now `generated/metapackage`.

* With the removal of `GENERATED_CODE_SYMLINK`, you cannot execute `setup:di:compile` directly on a server.

* Modified and updated available build and deploy variables. For a full list, see [Magento application environment variables]({{ site.baseurl }}/guides/v2.2/cloud/env/environment-vars_magento.html). For 2.2, we have removed `skip_di_compilation` and `skip_di_clearing` from `build-options.ini`. These cannot be run for 2.2 in the build phase.

* For 2.2.X, we no longer enable all of your extensions are part of the build process. We will provide a new mechanism in a later release.

## Community contributions {#community}

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of  top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

## System requirements {#requirements}

For {{site.data.var.ece}} requirements, see [Technologies and Requirements]({{ site.baseurl }}/guides/v2.2/cloud/requirements/cloud-requirements.html).

The {{site.data.var.ee}} technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html) and [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

## Installation and upgrade instructions {#install-upgrade}

If installing and working with {{site.data.var.ece}} for the first time, we recommend [First-time local environment setup]({{ page.baseurl }}/cloud/setup/first-time-setup.html).

To test and implement your {{site.data.var.ece}} upgrade, see [Upgrade Magento Commerce (Cloud)]({{ page.baseurl }}/cloud/project/project-upgrade.html). We include upgrade paths and additional instructions for upgrading from 2.0.X and 2.1.X.

You can directly upgrade to {{site.data.var.ece}} 2.2 from the following versions:

* 2.0.X versions: 2.0.14, 2.0.15, 2.0.16
* 2.1.X versions: 2.1.7, 2.1.8, 2.1.9

We have heavily tested and verified upgrades to 2.2 from the latest three versions of 2.0.X and 2.1.X.

You can attempt to upgrade from any version directly to {{site.data.var.ece}} 2.2. We cannot guarantee the results. For example, you should be able to upgrade from 2.0.10 or 2.1.4 directly to 2.2.

If you prefer a secured and verified upgrade path, you can upgrade to one of the verified and tested versions, then directly upgrade to 2.2. For example, you could upgrade from 2.0.10 to 2.0.14, then upgrade to 2.2.
