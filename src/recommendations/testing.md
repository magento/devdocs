---
group: product-recommendations
title: Verifying Recommendations
---

After you [install]({{ page.baseurl }}/recommendations/install.html) and [configure]({{ page.baseurl }}/recommendations/configure.html) the product recommendations module, you can verify that the behavioral data is being sent to Magento. You can use developer tools available in Chrome or you can install the Snowplow Chrome extension.

## Verify using developer tools in Chrome

{:.procedure}
To ensure that the `DataServices.js` file is loading on all site pages:

1. In Chrome, choose **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.
1. Choose the **Network** tab then select the **JS** type.
1. Filter for `ds.`
1. Reload page.
1. You should see `ds.js` or `ds.min.js`.

    ![]({{ page.baseurl }}/recommendations/images/filter-ds.png)

{:.procedure}
To ensure events are firing on pages across your site (home, product, checkout, and so on):

1. In Chrome, choose **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.
1. Choose the **Network** tab then select the **XHR** type.
1. Filter for `tp2`.
1. Reload page.
1. You should see calls under `tp2` name.

    ![]({{ page.baseurl }}/recommendations/images/filter-tp2.png)

## Verify using Snowplow Chrome extension

1. Make sure you disable any ad blockers on your browser.

1. Install the [Snowplow Analytics Debugger extension for Chrome](https://chrome.google.com/webstore/detail/snowplow-analytics-debugg/jbnlcgeengmijcghameodeaenefieedm). This extension displays the events being collected and sent to Magento.

1. In Chrome, choose **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.

1. Choose the **Snowplow Analytics Debugger** tab.

1. Under the **Event** column, select **Structured Event**.

1. Scroll down to `storefront-instance` context and verify that the [SaaS Environment ID]({{ page.baseurl }}/recommendations/configure.html#installcatalogsaas), [Instance ID]({{ page.baseurl }}/recommendations/configure.html#envid), and [Environment value]({{ page.baseurl }}/recommendations/configure.html#configureenv) are set correctly.

    ![]({{ page.baseurl }}/recommendations/images/snowplow-filter.png)

If you run into any problems verifying that the events are collected and sent to Magento, <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.
