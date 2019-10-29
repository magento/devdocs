---
group: extensions
title: Install Google Shopping ads Channel
---

The Google Shopping ads Channel extension installs and adds Google Shopping features to Magento. To review additional information, see the [Google Shopping ads Channel Marketplace page](http://marketplace.magento.com/magento-google-shopping-ads.html).

## Requirements

-  **Magento Instance**: Google Shopping ads Channel is compatible with instances on {{site.data.var.ce}} and {{site.data.var.ee}} versions 2.2.4+ and 2.3.x. The extension is not compatible with Magento 2.1 or Magento 1.
-  **Magento Web Account**: You should have a Magento web account, which is used to create and track an API key.
-  **API Key**: Get a Google Shopping ads API key through your Magento web account. See [Add an API Key](https://docs.magento.com/m2/ee/user_guide/sales-channels/google-ads/verify-api-key.html).
-  **Google accounts**: During [onboarding](https://docs.magento.com/m2/ee/user_guide/sales-channels/google-ads/onboarding-google.html), you will create and configure any required Google accounts and settings. Consider using email accounts for your business as the account will be the primary owner (admin) of the Google, Google Merchant Center, and Google Ads accounts you set in this integration.

   -  Google account: We recommend using a Google account for your business or company, not a personal Google account.

   -  Google Merchant Center account: You will create these accounts during onboarding. You cannot use an existing GMC account. If you have store URLs claimed and verified by an existing GMC account, you will need to unclaim.

   -  Google Ads account: You will create these accounts during onboarding. You cannot use an existing Google ads account.

## Install

Google Shopping ads Channel install is a `.zip` file available from the Magento Marketplace. It includes a composer.json which provides the name `magento/google-shopping-ads` and the available version.

1. Log in with your Magento web account.
1. Click the **Marketplace** tab, then click **My Purchases**.
1. Locate and select Google Shopping ads Channel.
1. On the extension page, select the version from the drop-down menu.
1. For the component name and version, click **Technical Details**.
1. Click **Download**.
1. Export the contents to your Magento root.
1. Follow all instructions for Extension [Installation]({{site.baseurl}}/extensions/install/).
1. After installing, enter an API Key to complete configuration.

See [Onboarding Google Shopping ads](https://docs.magento.com/m2/ce/user_guide/sales-channels/google-ads/onboarding-google.html) to continue.

## Add an API Key

See [add an API Key](https://docs.magento.com/m2/ee/user_guide/sales-channels/google-ads/verify-api-key.html){:target="_blank"}.

## Update

If an update for Google Shopping ads Channel is available, a message displays when opening Google Shopping ads Channel.

![Update available](images/update.png)

1. Click **Update**.
1. Log in with your Magento web account.
1. Click the **Marketplace** tab, then click **My Purchases**.
1. Locate and select Google Shopping ads Channel.
1. On the extension page, select the version from the drop-down menu.
1. For the component name and version, click **Technical Details**.
1. Click **Download**.

Complete the upgrade following the instructions [Upgrade an extension]({{site.baseurl}}/extensions/install/#upgrade-an-extension).
