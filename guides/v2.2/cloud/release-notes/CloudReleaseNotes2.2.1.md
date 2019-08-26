---
group: release-notes
subgroup: Release Notes
title: Magento Commerce (Cloud) 2.2.1 Release Notes
menu_title: Magento Commerce (Cloud) 2.2.1 Release Notes
menu_order: 380
level3_menu_node:
level3_subgroup:

---

We are pleased to present {{site.data.var.ece}} 2.2.1. This release includes numerous functional fixes and enhancements.

{:.bs-callout .bs-callout-warning}
We strongly recommend upgrading to Fastly v1.2.33 module for all Magento Commerce (Cloud) implementations that run on 2.0.x, 2.1.x, and 2.2.x. This version includes updates and additions to increase stability, performance, and resolve issues with caching shopping carts. This version of Fastly has specific updates for Magento.

## Highlights {#highlights}

{{site.data.var.ece}} 2.2.1 includes multiple new features, enhancements and fixes. For full {{site.data.var.ece}} highlights and updates, see [Magento Commerce 2.2.1 Release Notes]({{ site.baseurl }}/guides/v2.2/release-notes/ReleaseNotes2.2.1EE.html)

Look for the following {{site.data.var.ece}} highlights in this release:

* **30-day free trials available for Starter and Pro projects**. Starting October 23, 2017, we provide trials for Start and Pro projects. We auto provision your project and configure basic settings to get you started. You can access a new Onboarding Portal to get started with your project. For more information, see [Subscriptions and plans]({{ site.baseurl }}/guides/v2.2/cloud/bk-cloud.html).

* **Staging and Production environments in the UI for Pro projects**. Starting October 23, 2017, all projects created using the free 30-day trial or provisioned for new accounts includes Staging and Production environments in the Project Web Interface.

* **Onboarding Portal for new accounts helps merchants new to Magento Commerce (Cloud) get started with their project**. Quickly ramp up and get started with your project with our [Onboarding Portal]({{ site.baseurl }}/guides/v2.2/cloud/onboarding/onboarding-portal.html): assign a Technical Admin, preview your store, plan your local development environment, walk-through UAT tests, and prep for launching.

Looking for more information on these new features as well as many others? Check out [Magento 2.2 Developer Documentation]({{ site.baseurl }}/guides/v2.2/).

## Security enhancements {#security}

Magento 2.2.1 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

In general, we’ve removed serialize/unserialize from most the code to improve protection against remote code execution attacks. We’ve enhanced protection of code where use of object serialization or unserialization was unavoidable.  Additionally, we’ve increased our use of output escaping to protect against cross-site scripting (XSS) attacks.

[Contact us](https://magento.com/company/contact-us) for more information.

### New Updates

<!--- MAGECLOUD-1057 -->* Magento Commerce (Cloud) supports scopes and [static content deployment strategies]({{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html). We have added the `–s` parameter with a default setting of quick for the static content deployment strategy. You can use the environment variable [SCD_STRATEGY]({{ site.baseurl }}/guides/v2.2/cloud/env/environment-vars_magento.html) to customize and use these strategies with your build and deploy actions. This variable supports the options standard quick, or compact. If you select compact, we override the `STATIC_CONTENT_THREADS` value with 1, which can slow deployment, especially in production environments.

* When you create a new project, we automatically provision the project with the latest Magento Commerce (Cloud) code. The steps include cloning the latest code repository, adding an environment variable for `ADMIN_EMAIL` using the License Owner’s email, setting a default randomized Magento Admin password, and sending emails to the License Owner to access the project and reset the default Magento Admin password. For details, see [Onboarding tasks]({{ site.baseurl }}/guides/v2.2/cloud/onboarding/onboarding-tasks.html).

<!--- MAGECLOUD-1014, 1023 -->* We have created a new log file on environments to capture and compile build and deploy actions. The file is located in the `app/var/log/cloud.log` file inside the Magento root application directory.

## Known issues {#known}

For all known {{site.data.var.ee}} 2.2.1  issues, see [Magento Commerce 2.2.1 Release Notes]({{ site.baseurl }}/guides/v2.2/release-notes/ReleaseNotes2.2.1EE.html).

## Fixed issues {#fixed}

<!-- MAGECLOUD-1355 -->* You can now [manually reset stuck Magento cron jobs]({{ site.baseurl }}/guides/v2.2/cloud/trouble/reset-cron-jobs.html) using a CLI command in all environments via SSH access. The deployment process automatically resets cron jobs. You must [patch magento/ece-tools]({{ site.baseurl }}/guides/v2.2/cloud/project/project-patch.html) to get this update.

<!--- MAGECLOUD-1121 -->* We resolved an issue with the ElasticSearch option being added and saved to `app/etc/env.php`. When ElasticSearch is configured and activated in your environment, the setting properly saves in the `env.php` file. For example:

<code><?php
//........
'system' =>
  array (
    'default' =>
    array (
      'catalog' =>
      array (
        'search' =>
        array (
          'engine' => 'elasticsearch',
          'elasticsearch_server_hostname' => 'elasticsearch.internal',
          'elasticsearch_server_port' => '9200',
        ),
      ),
    ),
  ),
//...
</code>

* The `ADMIN_EMAIL` variable must be set for new and existing projects. We require that you configure the `ADMIN_EMAIL` environment variable for deployments, including new installations and upgrades. You can set this variable through the Project Web Interface.  For instructions, see [Change the Magento Admin URL, username, and password on master]({{ site.baseurl }}/guides/v2.2/cloud/before/before-setup-env-2_clone.html).

## Community contributions {#community}

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the [Magento Commerce 2.2.1 Release Notes]({{ site.baseurl }}/guides/v2.2/release-notes/ReleaseNotes2.2.1EE.html) for more information.

## System requirements {#requirements}

For {{site.data.var.ece}} requirements, see [Technologies and Requirements]({{ site.baseurl }}/guides/v2.2/cloud/requirements/cloud-requirements.html).

The {{site.data.var.ee}} technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html) and [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

## Installation and upgrade instructions {#install-upgrade}

If installing and working with {{site.data.var.ece}} for the first time, we recommend [First-time local environment setup]({{ page.baseurl }}/cloud/setup/first-time-setup.html).

To test and implement your {{site.data.var.ece}} upgrade, see [Upgrade Magento Commerce (Cloud)]({{ page.baseurl }}/cloud/project/project-upgrade.html). We include upgrade paths and additional instructions for upgrading from 2.0.x and 2.1.x.

You can directly upgrade to {{site.data.var.ece}} 2.2 from the following versions:

* 2.0.x versions: 2.0.14, 2.0.15, 2.0.16
* 2.1.x versions: 2.1.7, 2.1.8, 2.1.9

We have heavily tested and verified upgrades to 2.2 from the latest three versions of 2.0.x and 2.1.x.

You can attempt to upgrade from any version directly to {{site.data.var.ece}} 2.2. We cannot guarantee the results. For example, you should be able to upgrade from 2.0.10 or 2.1.4 directly to 2.2.

If you prefer a secured and verified upgrade path, you can upgrade to one of the verified and tested versions, then directly upgrade to 2.2. For example, you could upgrade from 2.0.10 to 2.0.14, then upgrade to 2.2.
