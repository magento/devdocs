---
group: extensions
title: Install Amazon Sales Channel
---

{:.bs-callout .bs-callout-warning}
Amazon Sales Channel versions 4.0+ are only supported when integrated with Magento 2.3.x versions.

The Amazon Sales Channel extension installs and adds features to integrate your Magento catalog with Amazon Seller Accounts to sell through the Amazon Marketplace. To review additional information, see the [Amazon Sales Channel Marketplace](http://marketplace.magento.com/magento-module-amazon.html) page.

## Requirements

-  **Magento Instance**: Amazon Sales Channel can be installed on instances with {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}} versions 2.3.x. We no longer support the extension on Magento 2.1, Magento 2.2, or Magento 1.
-  **Magento Web Account**: You should have a Magento web account, which is used to create and track an API key.
-  **API Key**: Get a Amazon Sales Channel API key through your Magento web account. The following instructions include these steps.

## Install

Amazon Sales Channel install is a `.zip` file available from the Magento Marketplace. It includes a composer.json which provides the name `magento/amazon-sales-channel` and the available version.

1. Log in with your Magento web account.

1. Click the **Marketplace** tab, then click **My Purchases**.

1. Locate and select Amazon Sales Channel.

1. On the extension page, select the version.

1. For the component name and version, click **Technical Details**.

1. Click **Download**.
1. Export the contents to your Magento root.

1. Follow all instructions for Extension [Installation]({{ site.baseurl }}/extensions/install/).

1. Update the services connector entry in your `composer.json` file.

   -  Add the extension's name and version to your composer.json file.

   -  Navigate to your Magento project directory and update your composer.json file.

     ```bash
     composer require magento/services-connector:~1.0.3
     ```

   -  Enter your [authentication keys]({{ site.baseurl }}/guides/v{{ site.version }}/install-gde/prereq/connect-auth.html). Your public key is your username; your private key is your password.

   -  Wait for Composer to finish updating your project dependencies and make sure there aren't any errors.

1. After installing, enter an [API Key](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-verify-api-key.html) to complete configuration.

## Add the Amazon Sales Channel API key

See [Add or Verify the Amazon API Key](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-verify-api-key.html) to continue.

## Amazon Sales Channel configuration options

You have the following options for configuring Amazon Sales Channel. You do not need to modify these settings to begin onboarding and selling on Amazon. We recommend advanced administrators consider these options.

1. Log into the Magento Admin.

1. On the _Admin_ sidebar, go to **Stores** > _Settings_ > **Configuration**.

1. Click **Sales Channels**, then **Global Settings**.

1. For **Clear Log History**, define the interval for clearing the collected logs. Options include Once Daily, Once Weekly, and Once Monthly (default).

1. Advanced users recommended: **Background Tasks (CRON) Source**. All background tasks are handled by CRON jobs using the Magento CRON. Advanced users can change this setting to Command Line (CLI) CRON.

1. Click **Save Config**.

## Update

1. Log in with your [Magento web account](https://account.magento.com/applications/customer/login/).

1. Click the **Marketplace** tab, then open **My Profile**.

1. Click **My Purchases**.

1. Locate and select Amazon Sales Channel.

1. On the extension page, select the version.

1. For the component name and version, click **Technical Details**.

1. Click **Download**.

Complete the upgrade following the instructions [Upgrade an extension]({{site.baseurl}}/extensions/install/#upgrade-an-extension).
