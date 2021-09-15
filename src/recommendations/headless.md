---
group: product-recommendations
title: Integrate Product Recommendations into your Headless Storefront
ee_only: True
---

You can integrate Product Recommendations in a headless storefront using either PWA Studio or another frontend application, such as Next.js.

In the context of PWA Studio, the storefront is the frontend application and Adobe Commerce is the connected backend service. PWA Studio uses the Commerce GraphQL and REST services to send or request data. If using another headless storefront, you use the Commerce Storefront SDKs to send or request data. These SDKs allow you to control the storefront event publishing, collecting, and fetching.

1. [Install the Product Recommendations]({{ page.baseurl }}/recommendations/install-configure.html) module.

1. Install and use the [Storefront Events SDK]({{ page.baseurl }}/shared-services/storefront-events-sdk.html) to trigger the behavioral events.

1. Install and use the [Storefront Events Collector]({{ page.baseurl }}/shared-services/storefront-event-collector.html) to send those events to Adobe Sensei.

1. [Create Product Recommendations](https://docs.magento.com/user-guide/marketing/create-new-rec.html) in the Commerce Admin.

1. Install and use the [Recommendations SDK]({{ page.baseurl }}/recommendations/recs-api.html) to fetch the recommendation units on the storefront.
