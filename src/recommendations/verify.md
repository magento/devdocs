---
group: product-recommendations
title: Verify Event Collection
---

After you [install]({{ page.baseurl }}/recommendations/product-recs.html) and [configure]({{ page.baseurl }}/recommendations/configure.html) the product recommendations module, you can verify that the behavioral data is being sent to Magento. Magento uses the `DataServices.js` file to collect and send behavioral data. You can use developer tools available in Chrome, or you can install the Snowplow Chrome extension.

## Verify using developer tools in Chrome

{:.procedure}
To ensure that the `DataServices.js` file is loading on all site pages:

1. In Chrome, choose **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.
1. Choose the **Network** tab then select the **JS** type.
1. Filter for `ds.`
1. Reload the page.
1. You should see `ds.js` or `ds.min.js` in the **Name** column.

    ![Filter DataServices]({{ page.baseurl }}/recommendations/images/filter-ds.png)

{:.procedure}
To ensure events are firing on pages across your site (home, product, checkout, and so on):

1. In Chrome, choose **Customize and control Google Chrome** (the three vertical dots in the upper right corner of the browser) then select **More Tools** > **Developer Tools**.
1. Choose the **Network** tab then select the **XHR** type.
1. Filter for `tp2`.
1. Reload the page.
1. You should see calls under `tp2` in the **Name** column.

    ![Filter tp2]({{ page.baseurl }}/recommendations/images/filter-tp2.png)

## Verify using Snowplow Chrome extension

Install the [Snowplow Analytics Debugger extension for Chrome](https://chrome.google.com/webstore/detail/snowplow-analytics-debugg/jbnlcgeengmijcghameodeaenefieedm). This extension displays the events being collected and sent to Magento.

1. Make sure you disable any ad blockers on your browser.

1. In Chrome, choose **Customize and control Google Chrome** (the three vertical dots in the upper right corner of the browser) then select **More Tools** > **Developer Tools**.

1. Choose the **Snowplow Analytics Debugger** tab.

1. Under the **Event** column, select **Structured Event**.

1. Scroll down until you see **Context Data _n_**. Look for the storefront instance in the **Schema**.

1. Verify that the [SaaS Environment ID]({{ page.baseurl }}/recommendations/configure.html#installcatalogsaas), [Instance ID]({{ page.baseurl }}/recommendations/configure.html#envid), and [Environment value]({{ page.baseurl }}/recommendations/configure.html#configureenv) are set correctly.

    ![Snowplow filter]({{ page.baseurl }}/recommendations/images/snowplow-filter.png)

If you run into any problems verifying that the events are collected and sent to Magento, <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.

## Verify events are firing correctly

To verify that the events used for metrics are firing correctly, look for the `impression-render`, `view`, and `rec-click` events in the Snowplow Analytics Debugger.

![Events for metrics]({{ page.baseurl }}/recommendations/images/event-metric.png)
