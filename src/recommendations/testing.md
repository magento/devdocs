---
group: product-recommendations
title: Testing Recommendations
---

Testing Recs on pre-production environment

Can always test on “more like this” (Doesn’t require behave data)
Could potentially use “most popular” if you generate enough clicks on storefront


## Verify Data is Being Captured

```from Misha:
Confirm that behavioral events are being sent
Without snowplow addon
Confirm ds.js or ds.min.js is loaded on the page
Debug network requests
```

we said this...but how can we confirm without chrome extension?

After you configure your storefront, verify that the behavioral data is being sent to Magento:

1. Make sure you disable any ad blocker on your browser.
2. Install the [Snowplow Event Tracker extension for Chrome](https://chrome.google.com/webstore/detail/snowplow-inspector/maplkdomeamdlngconidoefjpogkmljm). This extension displays the events being collected and sent to Magento.
3. To see the flow of events in the tracker, go to your production website and click on products, categories, etc.
