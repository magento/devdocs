---
group: product-recommendations
title: Configuring Recommendations
---

After you [install]({{ page.baseurl }}/recommendations/install.html) the `product-recommendations` module, you need to configure the catalog SaaS export module, set the environment, and specify the SaaS environment ID.

## Install and Configure the Catalog SaaS Export Module {#installcatalogsaas}

The Catalog SaaS Export Module allows you to access your store's catalog data. You create a link to that data via an API key.

{:.bs-callout-info}
The Catalog SaaS export module is a requirement to successfully use the [Product Recommendations JS SDK](https://www.npmjs.com/package/@magento/recommendations-js-sdk). This module requires Magento 2.3 or later.

### Install the SaaS Export Module

1. Update your `composer.json` file in the Magento root installation directory to provide the location of the SaaS Export module.

1. Log in to your Magento server as, or switch to, the Magento file system owner.

1. Change to your Magento root directory.

1. Enter the following commands:

    ```bash
    composer config repositories.magento composer https://repo.magento.com
    ```

    and

    ```bash
    composer require magento/saas-export
    ```

1. [Verify and enable the module]({{ page.baseurl }}/extensions/install/#verify-the-extension).

### Configure the Catalog SaaS Export Module {#apikeys}

1. Log in to your Magento account at `https://account.magento.com`.

1. Under the **Magento** tab, select **API Portal** on the sidebar.

1. Generate and copy the API key for **Production**.

    ![]({{ page.baseurl }}/recommendations/images/get-api-key.png)

1. In the Magento Admin, click **Stores** on the Admin panel.

1. Under **Settings**, choose **Configuration**.

1. In the panel on the left under **Services**, choose **Magento Services**.

1. In the **API Keys** section, paste your key value into the **Production Api Key** field regardless of whether you are in a production environment or non-production environment.

    ![]({{ page.baseurl }}/recommendations/images/cfg-api-key.png)

## Configure Your Environment {#configureenv}

After you have installed the DataServices module, you need to configure your environment to ensure the data being collected is coming from a production storefront rather than a storefront under test.

1. On the Admin sidebar, tap **Stores**. Then under **Settings**, choose **Configuration**.

1. In the panel on the left under **Services**, choose **Magento Services**.

1. Expand the **Services ID** section.

1. In the **Environment** drop-down, select either **Testing** or **Production**. Starting with version 3.0.2, the **Instance ID** field is auto-populated. Earlier versions required that you manually enter this ID.

{:.bs-callout-info}
By explicitly setting the environment for data collection, Magento excludes testing data, such as load testing, from the calculations used to generate the recommendations. If you set the **Environment** to **Production** on a development site, the data Magento gathers to train the ML models and generate recommendations will not be accurate.

## Enter Your SaaS Environment ID {#envid}

1. On the Admin sidebar, tap **Stores**. Then under **Settings**, choose **Configuration**.

1. In the panel on the left under **Services**, choose **Magento Services**.

1. Expand the **Services ID** section.

1. In the **SaaS Environment ID** field, enter the SaaS Environment ID you received after signing up. If you did not receive your ID, please contact Magento by emailing: `magento-product-recs-feedback@adobe.com`.
