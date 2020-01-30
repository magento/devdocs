---
group: product-recommendations
title: Configuring Recommendations
---

After you [install]({{ page.baseurl }}/recommendations/install.html) the `product-recommendations` module, you need to configure the catalog SaaS export module, set the environment, and specify the SaaS environment ID.

## Configure the Catalog SaaS Export Module {#installcatalogsaas}

The Catalog SaaS Export Module allows you to access your store's catalog data. You create a link to that data via an API key.

{:.bs-callout-info}
The Catalog SaaS export module is a requirement to successfully use the [Product Recommendations JS SDK](https://www.npmjs.com/package/@magento/recommendations-js-sdk). This module requires Magento 2.3 or later.

### Provide API Key {#apikeys}

1. Log in to your Magento account at `https://account.magento.com`.

1. Under the **Magento** tab, select **API Portal** on the sidebar.

1. Generate and copy the API key for **Production**.

    ![]({{ page.baseurl }}/recommendations/images/get-api-key.png)

{:.bs-callout-info}
To ensure the MageID and API key are linked, the user whose MageID was provided at [sign-up]({{ page.baseurl }}/recommendations/install.html#install) needs to be the same user who generates the API key. If you need to change the MageID that was used, <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.

1. In the Magento Admin, click **Stores** on the Admin panel.

1. Under **Settings**, choose **Configuration**.

1. In the panel on the left under **Services**, choose **Magento Services**.

1. In the **API Keys** section, paste your key value into the **Production Api Key** field regardless of whether you are in a production environment or non-production environment.

    ![]({{ page.baseurl }}/recommendations/images/cfg-api-key.png)

## Configure Your Environment {#configureenv}

You need to configure your environment to ensure the data being collected is coming from a production storefront rather than a storefront under test.

1. On the Admin sidebar, tap **Stores**. Then under **Settings**, choose **Configuration**.

1. In the panel on the left under **Services**, choose **Magento Services**.

1. Expand the **Services ID** section.

1. In the **Environment** drop-down, select either **Testing** or **Production**. The **Instance ID** field is auto-populated. Do not remove this ID.

## Enter Your SaaS Environment ID {#envid}

1. On the Admin sidebar, tap **Stores**. Then under **Settings**, choose **Configuration**.

1. In the panel on the left under **Services**, choose **Magento Services**.

1. Expand the **Services ID** section.

1. In the **SaaS Environment ID** field, enter the SaaS Environment ID you received after signing up. If you did not receive your ID, please <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.
