---
group: product-recommendations
title: Verify Event Collection
ee_only: True
---

After you [install]({{ page.baseurl }}/recommendations/product-recs.html) and [configure]({{ page.baseurl }}/recommendations/install-configure.html) the `magento/product-recommendations` module, you can verify that the behavioral data is being sent to Magento. Magento uses the `DataServices.js` file to collect and send behavioral data. You can use developer tools available in Chrome, or you can install the Snowplow Chrome extension.

## Verify using developer tools in Chrome

{:.procedure}
To ensure that the event collector JS file is loading on all site pages:

1. In Chrome, choose **Customize and control Google Chrome** then select **More Tools** > **Developer Tools**.
1. Choose the **Network** tab then select the **JS** type.
1. Filter for `ds.`
1. Reload the page.
1. You should see `ds.js` or `ds.min.js` in the **Name** column.

    ![Filter DataServices]({{ page.baseurl }}/recommendations/images/filter-ds.png)

{:.procedure}
To ensure events are firing on pages across your site (home, product, checkout, and so on):

1. Make sure you disable any ad blockers on your browser and accept cookies on the site.
1. In Chrome, choose **Customize and control Google Chrome** (the three vertical dots in the upper right corner of the browser) then select **More Tools** > **Developer Tools**.
1. Choose the **Network** tab and filter for `tp2`.
1. Reload the page.
1. You should see calls under `tp2` in the **Name** column.

    ![Filter tp2]({{ page.baseurl }}/recommendations/images/filter-tp2.png)

## Verify using Snowplow Chrome extension

Install the [Snowplow Analytics Debugger extension for Chrome](https://chrome.google.com/webstore/detail/snowplow-analytics-debugg/jbnlcgeengmijcghameodeaenefieedm). This extension displays the events being collected and sent to Magento.

1. Make sure you disable any ad blockers on your browser and accept cookies on the site.

1. In Chrome, choose **Customize and control Google Chrome** (the three vertical dots in the upper right corner of the browser) then select **More Tools** > **Developer Tools**.

1. Choose the **Snowplow Analytics Debugger** tab.

1. Under the **Event** column, select **Structured Event**.

1. Scroll down until you see **Context Data _n_**. Look for the storefront instance in the **Schema**.

1. Verify that the [SaaS Environment ID](https://docs.magento.com/m2/ce/user_guide/configuration/services/saas.html) is set correctly.

    ![Snowplow filter]({{ page.baseurl }}/recommendations/images/snowplow-filter.png)

If you run into any problems verifying that the events are collected and sent to Magento, [contact support](https://support.magento.com/hc/en-us).

## Verify events are firing correctly

To verify that the events used for metrics are firing correctly, look for the `impression-render`, `view`, and `rec-click` events in the Snowplow Analytics Debugger. See the [full list of events](https://devdocs.magento.com/recommendations/events.html).

![Events for metrics]({{ page.baseurl }}/recommendations/images/event-metric.png)

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/m2/ce/user_guide/stores/compliance-cookie-restriction-mode.html) is enabled, Magento does not collect behavioral data until the shopper consents. If Cookie Restriction Mode is disabled, Magento collects behavioral data by default.
