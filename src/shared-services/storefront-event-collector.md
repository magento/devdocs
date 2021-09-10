---
group: shared-services
title: Storefront Event Collector
ee_only: True
---

This package listens for and handles events sent from the [{{site.data.var.ee}} Storefront Events SDK]({{ site.baseurl }}/shared-services/storefront-events-sdk.html). It runs as a side effect and is meant to be a convenience for users who want to send events to {{site.data.var.ee}} for processing.

## Installation

The collector can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg](https://unpkg.com/@adobe/magento-storefront-event-collector@1.0.0/dist/index.js), and the bundled version is hosted on [npm](https://www.npmjs.com/package/@adobe/magento-storefront-event-collector).

To load the SDK as a script, use the following snippet.

```html
<script src="https://unpkg.com/@adobe/magento-storefront-event-collector/dist/index.js"></script>
```

To install the script as a dependency, run this command.

```bash
npm install @adobe/magento-storefront-event-collector
```

## Quick Start

After loading the collector script, or importing the package as shown below, there is nothing else that needs to be done.

```bash
import "@adobe/magento-storefront-event-collector";
```

The collector then begins listening for the following events. When any of these events are fired, the collector runs the associated handler and sends the event along with any relevant information to {{site.data.var.ee}} for further processing.

-  `addToCart`
-  `instantPurchase`
-  `pageView`
-  `placeOrder`
-  `productPageView`
-  `recsItemAddToCartClick`
-  `recsItemClick`
-  `recsRequestSent`
-  `recsResponseReceived`
-  `recsUnitRender`
-  `recsUnitView`
-  `searchProductClick`
-  `searchRequestSent`
-  `searchResponseReceived`
-  `searchResultsView`
-  `searchSuggestionClick`
-  `shoppingCartView`

## Support

If you have any questions or encounter any issues, reach out here:

-  [GitHub](https://github.com/adobe/magento-storefront-event-collector/issues)
-  [Zendesk](https://account.magento.com/customer/account/login/referer/aHR0cHM6Ly9hY2NvdW50Lm1hZ2VudG8uY29tL3plbmRlc2svbG9naW4vaW5kZXgv/)