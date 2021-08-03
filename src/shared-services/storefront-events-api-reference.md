---
group: shared-services
title: Storefront Events API Reference
ee_only: True
---

The SDK API functions are organized into the following sections:

-  [Context](#context)
-  [Publish](#publish)
-  [Subscribe](#subscribe)
-  [Unsubscribe](#unsubscribe)

## Context

The following functions get and set context data.

### mse.context.getCategory

Gets the `Category` context.

Example:

```text
mse.context.getCategory();
```

### mse.context.getCustomUrl

Gets the `CustomUrl` context.

Example:

```text
mse.context.getCustomUrl();
```

### mse.context.getMagentoExtension

Gets the `MagentoExtension` context.

Example:

```text
mse.context.getMagentoExtension();
```

### mse.context.getOrder

Gets the `Order` context.

Example:

```text
mse.context.getOrder();
```

### mse.context.getPage

Gets the `Page` context.

Example:

```text
mse.context.getPage();
```

### mse.context.getProduct

Gets the `Product` context.

Example:

```text
mse.context.getProduct();
```

### mse.context.getRecommendations

Gets the `Recommendations` context.

Example:

```text
mse.context.getRecommendations();
```

### mse.context.getReferrerUrl

Gets the `ReferrerUrl` context.

Example:

```text
mse.context.getReferrerUrl();
```

### mse.context.getSearchInput

Gets the `SearchInput` context.

Example:

```text
mse.context.getSearchInput();
```

### mse.context.getSearchResults

Gets the `SearchResults` context.

Example:

```text
mse.context.getSearchResults();
```

### mse.context.getShopper

Gets the `Shopper` context.

Example:

```text
mse.context.getShopper();
```

### mse.context.getShoppingCart

Gets the `ShoppingCart` context.

Example:

```text
mse.context.getShoppingCart();
```

### mse.context.getStorefrontInstance

Gets the `StorefrontInstance` context.

Example:

```text
mse.context.getStorefrontInstance();
```

### mse.context.getContext

Gets a custom `Context`.

|**Name**|**Required**|**Description**|
|---|---|---|
|`name`|Yes|`Context` name|

Example:

```text
se.context.getContext(name);
```

### mse.context.setCategory

Sets the `Category` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`Category` context|

Example:

```text
mse.context.setCategory(categoryCtx);
```

### mse.context.setCustomUrl

Sets the `CustomUrl` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`CustomUrl` context|

Example:

```text
mse.context.setCustomUrl(customUrlCtx);
```

### mse.context.setMagentoExtension

Sets the `MagentoExtension` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`MagentoExtension` context|

Example:

```text
mse.context.setMagentoExtension(magentoExtensionCtx);
```

### mse.context.setOrder

Sets the `Order` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`Order` context|

Example:

```text
mse.context.setOrder(orderCtx);
```

### mse.context.setPage

Sets the `Page` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`Page` context|

Example:

```text
mse.context.setPage(pageCtx);
```

### mse.context.setProduct

Sets the `Product` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`Product` context|

Example:

```text
mse.context.setProduct(productCtx);
```

### mse.context.setRecommendations

Sets the `Recommendations` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`Recommendations` context|

Example:

```text
mse.context.setRecommendations(recommendationsCtx);
```

### mse.context.setReferrerUrl

Sets the `ReferrerUrl` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`ReferrerUrl` context|

Example:

```text
mse.context.setReferrerUrl(referrerUrlCtx);
```

### mse.context.setSearchInput

Sets the `SearchInput` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`SearchInput` context|

Example:

```text
mse.context.setSearchInput(searchInputCtx);
```

### mse.context.setSearchResults

Sets the `SearchResults` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`SearchResults` context|

Example:

```text
mse.context.setSearchResults(searchResultsCtx);
```

### mse.context.setShopper

Sets the `Shopper` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`Shopper` context|

Example:

```text
mse.context.setShopper(shopperCtx);
```

### mse.context.setShoppingCart

Sets the `ShoppingCart` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`ShoppingCart` context|

Example:

```text
mse.context.setShoppingCart(shoppingCartCtx);
```

### mse.context.setStorefrontInstance

Sets the `StorefrontInstance` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes|`StorefrontInstance` context|

Example:

```text
mse.context.setStorefrontInstance(storefrontCtx);
```

### mse.context.setContext

Sets a custom `Context`.

|**Name**|**Required**|**Description**|
|---|---|---|
|`name`|Yes|Context `name`|
|`context`|Yes|Custom context|

Example:

```text
mse.context.setContext(ctx);
```

## Publish

These functions publish events to notify all subscribers.

### mse.publish.addToCart

Publishes the `addToCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.addToCart(ctx);
```

### mse.publish.customUrl

Publishes the `customUrl` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.customUrl(ctx);
```

### mse.publish.initiateCheckout

Publishes the `initiateCheckout` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.initiateCheckout(ctx);
```

### mse.publish.instantPurchase

Publishes the `instantPurchase` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.instantPurchase(ctx);
```

### mse.publish.pageActivitySummary

Publishes the `pageActivitySummary` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.pageActivitySummary(ctx);
```

### mse.publish.pageView

Publishes the `pageView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.pageView(ctx);
```

### mse.publish.placeOrder

Publishes the `placeOrder` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.placeOrder(ctx);
```

### mse.publish.productPageView

Publishes the `productPageView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.productPageView(ctx);
```

### mse.publish.recsItemAddToCartClick

Publishes the `recsItemAddToCartClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`unitId`|Yes|Recommendations `unitId`|
|`productId`|Yes|Recommended `productId`|
|`context`|No|Custom context|

Example:

```text
mse.publish.recsItemAddToCartClick(unitId, productId, ctx);
```

### mse.publish.recsItemClick

Publishes the `recsItemClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`unitId`|Yes|Recommendations `unitId`|
|`productId`|Yes|Recommended `productId`|
|`context`|No|Custom context|

Example:

```text
mse.publish.recsItemClick(unitId, productId, ctx);
```

### mse.publish.recsRequestSent

Publishes the `recsRequestSent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.recsRequestSent(ctx);
```

### mse.publish.recsResponseReceived

Publishes the `recsResponseReceived` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.recsResponseReceived(ctx);
```

### mse.publish.recsUnitRender

Publishes the `recsUnitRender` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`unitId`|Yes|Recommendations `unitId`|
|`context`|No|Custom context|

Example:

```text
mse.publish.recsUnitRender(unitId, ctx);
```

### mse.publish.recsUnitView

Publishes the `recsUnitView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`unitId`|Yes|Recommendations `unitId`|
|`context`|No|Custom context|

Example:

```text
mse.publish.recsUnitView(unitId, ctx);
```

### mse.publish.referrerUrl

Publishes the `referrerUrl` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.referrerUrl(ctx);
```

### mse.publish.removeFromCart

Publishes the `removeFromCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.removeFromCart(ctx);
```

### mse.publish.searchCategoryClick

Publishes the `searchCategoryClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`searchUnitId`|Yes|Search `unitId`|
|`name`|Yes|Category name|
|`context`|No|Custom context|

Example:

```text
mse.publish.searchCategoryClick(searchUnitId, name, ctx);
```

### mse.publish.searchProductClick

Publishes the `searchProductClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`searchUnitId`|Yes|Search `unitId`|
|`sku`|Yes|Product `sku`|
|`context`|No|Custom context|

Example:

```text
mse.publish.searchProductClick(searchUnitId, sku, ctx);
```

### mse.publish.searchRequestSent

Publishes the `searchRequestSent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`searchUnitId`|Yes|Search `unitId`|
|`context`|No|Custom context|

Example:

```text
mse.publish.searchRequestSent(searchUnitId, ctx);
```

### mse.publish.searchResponseReceived

Publishes the `searchResponseReceived` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`searchUnitId`|Yes|Search `unitId`|
|`context`|No|Custom context|

Example:

```text
mse.publish.searchResponseReceived(searchUnitId, ctx);
```

### mse.publish.searchResultsView

Publishes the `searchResultsView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`searchUnitId`|Yes|Search `unitId`|
|`context`|No|Custom context|

Example:

```text
mse.publish.searchResultsView(searchUnitId, ctx);
```

### mse.publish.searchSuggestionClick

Publishes the `searchSuggestionClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`searchUnitId`|Yes Search `unitId`|
|`suggestion`|Yes|Query `suggestion`|
|`context`|No|Custom context|

Example:

```text
mse.publish.searchSuggestionClick(searchUnitId, suggestion, ctx);
```

### mse.publish.shoppingCartView

Publishes the `shoppingCartView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.shoppingCartView(ctx);
```

### mse.publish.signIn

Publishes the `signIn` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.signIn(ctx);
```

### mse.publish.signOut

Publishes the `signOut` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.signOut(ctx);
```

### mse.publish.updateCart

Publishes the `updateCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|No|Custom context|

Example:

```text
mse.publish.updateCart(ctx);
```

## Subscribe

The following functions subscribe to events.

### mse.subscribe.addToCart

Subscribes to the `addToCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.addToCart(handler, options);
```

### mse.subscribe.customUrl

Subscribes to the `customUrl` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.customUrl(handler, options);
```

### mse.subscribe.dataLayerChange

Subscribes to the `dataLayerChange` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.dataLayerChange(handler, options);
```

### mse.subscribe.dataLayerEvent

Subscribes to the `dataLayerEvent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.dataLayerEvent(handler, options);
```

### mse.subscribe.initiateCheckout

Subscribes to the `initiateCheckout` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.initiateCheckout(handler, options);
```

### mse.subscribe.instantPurchase

Subscribes to the `instantPurchase` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.instantPurchase(handler, options);
```

### mse.subscribe.pageActivitySummary

Subscribes to the `pageActivitySummary` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.pageActivitySummary(handler, options);
```

### mse.subscribe.pageView

Subscribes to the `pageView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.pageView(handler, options);
```

### mse.subscribe.placeOrder

Subscribes to the `placeOrder` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.placeOrder(handler, options);
```

### mse.subscribe.productPageView

Subscribes to the `productPageView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.productPageView(handler, options);
```

### mse.subscribe.recsItemAddToCartClick

Subscribes to the `recsItemAddToCartClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.recsItemAddToCartClick(handler, options);
```

### mse.subscribe.recsItemClick

Subscribes to the `recsItemClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.recsItemClick(handler, options);
```

### mse.subscribe.recsRequestSent

Subscribes to the `recsRequestSent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.recsRequestSent(handler, options);
```

### mse.subscribe.recsResponseReceived

Subscribes to the `recsResponseReceived` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.recsResponseReceived(handler, options);
```

### mse.subscribe.recsUnitRender

Subscribes to the `recsUnitRender` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.recsUnitRender(handler, options);
```

### mse.subscribe.recsUn itView

Subscribes to the `recsUnitView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.recsUnitView(handler, options);
```

### mse.subscribe.referrerUrl

Subscribes to the `referrerUrl` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.referrerUrl(handler, options);
```

### mse.subscribe.removeFromCart

Subscribes to the `removeFromCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.removeFromCart(handler, options);
```

### mse.subscribe.searchCategoryClick

Subscribes to the `searchCategoryClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.searchCategoryClick(handler, options);
```

### mse.subscribe.searchProductClick

Subscribes to the `searchProductClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.searchProductClick(handler, options);
```

### mse.subscribe.searchRequestSent

Subscribes to the `searchRequestSent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.searchRequestSent(handler, options);
```

### mse.subscribe.searchResponseReceived

Subscribes to the `searchResponseReceived` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.searchResponseReceived(handler, options);
```

### mse.subscribe.searchResultsView

Subscribes to the `searchResultsView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No| Listener options|

Example:

```text
mse.subscribe.searchResultsView(handler, options);
```

### mse.subscribe.searchSuggestionClick

Subscribes to the `searchSuggestionClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.searchSuggestionClick(handler, options);
```

### mse.subscribe.shoppingCartView

Subscribes to the `shoppingCartView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No |Listener options|

Example:

```text
mse.subscribe.shoppingCartView(handler, options);
```

### mse.subscribe.signIn

Subscribes to the `signIn` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.signIn(handler, options);
```

### mse.subscribe.signOut

Subscribes to the `signOut` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.signOut(handler, options);
```

### mse.subscribe.updateCart

Subscribes to the `updateCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|
|`options`|No|Listener options|

Example:

```text
mse.subscribe.updateCart(handler, options);
```

## Unsubscribe

The following functions unsubscribe from events.

### mse.unsubscribe.addToCart

Unsubscribes from the `addToCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.addToCart(handler);
```

### mse.unsubscribe.customUrl

Unsubscribes from the `customUrl` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.customUrl(handler);
```

### mse.unsubscribe.dataLayerChange

Unsubscribes from the `dataLayerChange` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.dataLayerChange(handler);
```

### mse.unsubscribe.dataLayerEvent

Unsubscribes from the `dataLayerEvent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.dataLayerEvent(handler);
```

### mse.unsubscribe.initiateCheckout

Unsubscribes from the `initiateCheckout` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.initiateCheckout(handler);
```

### mse.unsubscribe.instantPurchase

Unsubscribes from the `instantPurchase` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.instantPurchase(handler);
```

### mse.unsubscribe.pageActivitySummary

Unsubscribes from the `pageActivitySummary` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.pageActivitySummary(handler);
```

### mse.unsubscribe.pageView

Unsubscribes from the `pageView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.pageView(handler);
```

### mse.unsubscribe.placeOrder

Unsubscribes from the `placeOrder` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.placeOrder(handler);
```

### mse.unsubscribe.productPageView

Unsubscribes from the `productPageView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.productPageView(handler);
```

### mse.unsubscribe.recsItemAddToCartClick

Unsubscribes from the `recsItemAddToCartClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.recsItemAddToCartClick(handler);
```

### mse.unsubscribe.recsItemClick

Unsubscribes from the `recsItemClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.recsItemClick(handler);
```

### mse.unsubscribe.recsRequestSent

Unsubscribes from the `recsRequestSent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.recsRequestSent(handler);
```

### mse.unsubscribe.recsResponseReceived

Unsubscribes from the `recsResponseReceived` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.recsResponseReceived(handler);
```

### mse.unsubscribe.recsUnitRender

Unsubscribes from the `recsUnitRender` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.recsUnitRender(handler);
```

### mse.unsubscribe.recsUnitView

Unsubscribes from the `recsUnitView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.recsUnitView(handler);
```

### mse.unsubscribe.referrerUrl

Unsubscribes from the `referrerUrl` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.referrerUrl(handler);
```

### mse.unsubscribe.removeFromCart

Unsubscribes from the `removeFromCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.removeFromCart(handler);
```

### mse.unsubscribe.searchCategoryClick

Unsubscribes from the `searchCategoryClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.searchCategoryClick(handler);
```

### mse.unsubscribe.searchProductClick

Unsubscribes from the `searchProductClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.searchProductClick(handler);
```

### mse.unsubscribe.searchRequestSent

Unsubscribes from the `searchRequestSent` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes Event handler|

Example:

```text
mse.unsubscribe.searchRequestSent(handler);
```

### mse.unsubscribe.searchResponseReceived

Unsubscribes from the `searchResponseReceived` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.searchResponseReceived(handler);
```

### mse.unsubscribe.searchResultsView

Unsubscribes from the `searchResultsView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.searchResultsView(handler);
```

### mse.unsubscribe.searchSuggestionClick

Unsubscribes from the `searchSuggestionClick` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.searchSuggestionClick(handler);
```

### mse.unsubscribe.shoppingCartView

Unsubscribes from the `shoppingCartView` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.shoppingCartView(handler);
```

### mse.unsubscribe.signIn

Unsubscribes from the `signIn` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.signIn(handler);
```

### mse.unsubscribe.signOut

Unsubscribes from the `signOut` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.signOut(handler);
```

### mse.unsubscribe.updateCart

Unsubscribes from the `updateCart` event.

|**Name**|**Required**|**Description**|
|---|---|---|
|`handler`|Yes|Event handler|

Example:

```text
mse.unsubscribe.updateCart(handler);
```