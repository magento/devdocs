---
group: product-recommendations
title: Verifying Recommendations
---

After you [install]({{ page.baseurl }}/recommendations/install.html) and [configure]({{ page.baseurl }}/recommendations/configure.html) the product recommendations module, you can verify that the behavioral data is being sent to Magento. You can use developer tools available in Chrome or you can install the Snowplow Chrome extension.

## Verify Using Developer Tools in Chrome

1. To ensure that the `DataServices.js` file is loading on all site pages:
    * In Chrome, click **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.
    * Click the **Network** tab then select the **JS** type.
    * Filter for `ds.`
    * Reload page.
    * You should see `ds.js` or `ds.min.js`.

1. To ensure events are firing on pages across your site (home, product, checkout, etc):
    * In Chrome, click **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.
    * Click the **Network** tab then select the **XHR** type.
    * Filter for `tp2`.
    * Reload page.
    * You should see calls under `tp2` name.

## Verify Using Snowplow Chrome Extension

1. Make sure you disable any ad blocker on your browser.

1. Install the [Snowplow Analytics Debugger extension for Chrome](https://chrome.google.com/webstore/detail/snowplow-analytics-debugg/jbnlcgeengmijcghameodeaenefieedm). This extension displays the events being collected and sent to Magento.

1. In Chrome, click **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.
    * Click the **Snowplow Analytics Debugger** tab.
    * Under the **Event** column, select **Structured Event**.
    * Scroll down to `storefront-instance` context and verify the following:
        * The SaaS Environment ID you [set during configuration]({{ page.baseurl }}/recommendations/configure.html#installcatalogsaas) is correct.
        * The Instance ID you [set during configuration]({{ page.baseurl }}/recommendations/configure.html#envid) is correct.
        * The Environment value you [set during configuration]({{ page.baseurl }}/recommendations/configure.html#configureenv) is correct.

If you run into any problems verifying that the events are collected and sent to Magento, <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.
