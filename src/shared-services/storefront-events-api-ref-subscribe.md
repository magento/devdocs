---
group: shared-services
title: Subscribe - Adobe Commerce Event SDK Reference
ee_only: True
migrated_to: https://developer.adobe.com/commerce/services/shared-services/storefront-events/sdk/subscribe/
layout: migrated
---
## Functions

The following functions subscribe to events.

### mse.subscribe.addToCart

Subscribes to the `addToCart` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.addToCart(handler, options);
```

### mse.subscribe.customUrl

Subscribes to the `customUrl` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.customUrl(handler, options);
```

### mse.subscribe.dataLayerChange

Subscribes to the `dataLayerChange` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.dataLayerChange(handler, options);
```

### mse.subscribe.dataLayerEvent

Subscribes to the `dataLayerEvent` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.dataLayerEvent(handler, options);
```

### mse.subscribe.initiateCheckout

Subscribes to the `initiateCheckout` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.initiateCheckout(handler, options);
```

### mse.subscribe.instantPurchase

Subscribes to the `instantPurchase` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.instantPurchase(handler, options);
```

### mse.subscribe.pageActivitySummary

Subscribes to the `pageActivitySummary` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.pageActivitySummary(handler, options);
```

### mse.subscribe.pageView

Subscribes to the `pageView` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.pageView(handler, options);
```

### mse.subscribe.placeOrder

Subscribes to the `placeOrder` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.placeOrder(handler, options);
```

### mse.subscribe.productPageView

Subscribes to the `productPageView` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.productPageView(handler, options);
```

### mse.subscribe.recsItemAddToCartClick

Subscribes to the `recsItemAddToCartClick` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.recsItemAddToCartClick(handler, options);
```

### mse.subscribe.recsItemClick

Subscribes to the `recsItemClick` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.recsItemClick(handler, options);
```

### mse.subscribe.recsRequestSent

Subscribes to the `recsRequestSent` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.recsRequestSent(handler, options);
```

### mse.subscribe.recsResponseReceived

Subscribes to the `recsResponseReceived` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.recsResponseReceived(handler, options);
```

### mse.subscribe.recsUnitRender

Subscribes to the `recsUnitRender` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.recsUnitRender(handler, options);
```

### mse.subscribe.recsUn itView

Subscribes to the `recsUnitView` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.recsUnitView(handler, options);
```

### mse.subscribe.referrerUrl

Subscribes to the `referrerUrl` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.referrerUrl(handler, options);
```

### mse.subscribe.removeFromCart

Subscribes to the `removeFromCart` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.removeFromCart(handler, options);
```

### mse.subscribe.searchCategoryClick

Subscribes to the `searchCategoryClick` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.searchCategoryClick(handler, options);
```

### mse.subscribe.searchProductClick

Subscribes to the `searchProductClick` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.searchProductClick(handler, options);
```

### mse.subscribe.searchRequestSent

Subscribes to the `searchRequestSent` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.searchRequestSent(handler, options);
```

### mse.subscribe.searchResponseReceived

Subscribes to the `searchResponseReceived` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.searchResponseReceived(handler, options);
```

### mse.subscribe.searchResultsView

Subscribes to the `searchResultsView` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No| Listener options|

Syntax:

```javascript
mse.subscribe.searchResultsView(handler, options);
```

### mse.subscribe.searchSuggestionClick

Subscribes to the `searchSuggestionClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.searchSuggestionClick(handler, options);
```

### mse.subscribe.shoppingCartView

Subscribes to the `shoppingCartView` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No |Listener options|

Syntax:

```javascript
mse.subscribe.shoppingCartView(handler, options);
```

### mse.subscribe.signIn

Subscribes to the `signIn` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.signIn(handler, options);
```

### mse.subscribe.signOut

Subscribes to the `signOut` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.signOut(handler, options);
```

### mse.subscribe.updateCart

Subscribes to the `updateCart` event.

|Name|Required|Description|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Syntax:

```javascript
mse.subscribe.updateCart(handler, options);
```
