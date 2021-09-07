---
group: shared-services
title: Storefront Events SDK
ee_only: True
---

This package serves as the foundation for eventing on an [{{site.data.var.ee}}](https://business.adobe.com/products/magento/magento-commerce.html) storefront. It provides access to a common data layer, and an event publishing and subscription service. Handling these events is up to you, but we provide the [Storefront Event Collector]({{ site.baseurl }}/shared-services/storefront-event-collector.html) package that can listen for events and send them to {{site.data.var.ee}} for processing.

## Installation

This SDK can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg](https://unpkg.com/@adobe/magento-storefront-events-sdk@1.0.1/dist/index.js), and the bundled version is hosted on [npm](https://www.npmjs.com/package/@adobe/magento-storefront-events-sdk).

To load the SDK as a script, use the following snippet.

```html
<script src="https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js"></script>
```

To install the script as a dependency, run this command.

```bash
npm install @adobe/magento-storefront-events-sdk
```

## Quick Start

Once imported, you have access to the four main functions of the Events SDK.

-  [Context]({{ site.baseurl }}/shared-services/storefront-events-api-ref-context.html) - Set context data
-  [Publish]({{ site.baseurl }}/shared-services/storefront-events-api-ref-publish.html) - Publish events
-  [Subscribe]({{ site.baseurl }}/shared-services/storefront-events-api-ref-subscribe.html) - Subscribe to events
-  [Unsubscribe]({{ site.baseurl }}/shared-services/storefront-events-api-ref-unsubscribe.html) - Unsubscribe from events

The following code example shows how to get started.

{:.bs-callout-warning}
Relevant context data must be populated before publishing events that require it.

```javascript
import mse from "@adobe/magento-storefront-events-sdk";

// subscribe to events
mse.subscribe.pageView(pageViewHandler);

// set context data
mse.context.setPage(/* page context */);

// publish events
mse.publish.pageView();

// unsubscribe from events
mse.unsubscribe.pageView(pageViewHandler);
```
## Support

If you have any questions or encounter any issues, reach out here:

-  [GitHub](https://github.com/adobe/magento-storefront-event-collector/issues)
