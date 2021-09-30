---
group: product-recommendations
title: Integrate Product Recommendations into your Headless Storefront
ee_only: True
---

You can integrate Product Recommendations in a headless storefront using either [PWA Studio](https://magento.github.io/pwa-studio/) or a custom frontend technology, such as React or Vue JS.

Product Recommendations require [behavioral and catalog data ](https://devdocs.magento.com/recommendations/product-recs.html#types-of-data)to operate. The catalog data sync process remains unchanged in a headless implementation, but changes are needed for behavioral data collection. 

The roles of the custom storefront using Product Recommendations are two-fold: 
1. send behavioral data to Adobe Sensei so that these events can be analyzed to compute Product Recommendation results; additional data can be sent to enable product recommendation [metrics reporting](https://docs.magento.com/user-guide/marketing/recommendation-metrics.html) 
2. fetch product recommendation results and render them on the page 

Both of these actions can be performed using available SDKs as described below. 

Use the following workflow to integrate your headless storefront with Product Recommendations.

1. [Install the Product Recommendations]({{ page.baseurl }}/recommendations/install-configure.html) module.

1. Install and use the [Storefront Events SDK]({{ page.baseurl }}/shared-services/storefront-events-sdk.html) to fire the [behavioral events](https://devdocs.magento.com/recommendations/events.html).
The minimum required events to enable product recommendations are product view, add-to-cart, and place-order. 
To enable metrics reporting (link), the following additional events are required: 
recommendation-unit impression-render
recommendation-unit view
recommendation-unit rec-click
recommendation-unit rec-add-to-cart-click (if an add-to-cart button is present in the Recs template) 
--


<br class="Apple-interchange-newline">

1. When the events are fired, use the [Storefront Events Collector]({{ page.baseurl }}/shared-services/storefront-event-collector.html) as a handler to send them to Adobe Sensei.

1. Once behavioral data collection is orchestrated using above steps, the business user can [create Product Recommendations](https://docs.magento.com/user-guide/marketing/create-new-rec.html) in the Commerce Admin.

1. Use the [Recommendations SDK]({{ page.baseurl }}/recommendations/recs-api.html) to fetch the recommendation units on the storefront. It returns necessary product data to render recommendation units on a page.
