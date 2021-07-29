---
group: shared-solutions
title: Storefront Events API Reference
ee_only: True
---

The SDK API functions are organized into the following sections:

-  [Context](#context)
-  [Publish](#publish)
-  [Subscribe](#subscribe)
-  [Unsubscribe](#unsubscribe)

## Context

These functions get and set context data.

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

|**Name**|**Required**|**Description**
|---|---|---|
|`name` | Yes | Context name |

Example: 

```text
se.context.getContext(name);
```

### mse.context.setCategory

Sets the `Category` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context` | Yes | Category context |

Example:

```text
mse.context.setCategory(categoryCtx);
```

### mse.context.setCustomUrl

Sets the `CustomUrl` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context`|	Yes |	CustomUrl context|

Example:

```text
mse.context.setCustomUrl(customUrlCtx);
```

### mse.context.setMagentoExtension

Sets the `MagentoExtension` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context`|	Yes |MagentoExtension context|

Example:

```text
mse.context.setMagentoExtension(magentoExtensionCtx);
```

### mse.context.setOrder

Sets the `Order` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context`|	Yes |	Order context|

```text
mse.context.setOrder(orderCtx);
```

### mse.context.setPage

Sets the `Page` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context` |Yes |Page context |

Example:

```text
mse.context.setPage(pageCtx);
```

### mse.context.setProduct

Sets the `Product` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context`|Yes	|Product context |

Example:

```text
mse.context.setProduct(productCtx);
```

### mse.context.setRecommendations

Sets the `Recommendations` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context` |Yes |	Recommendations context |

Example:

```text
mse.context.setRecommendations(recommendationsCtx);
```

### mse.context.setReferrerUrl

Sets the `ReferrerUrl` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context` |Yes |ReferrerUrl context |

Example:

```text
mse.context.setReferrerUrl(referrerUrlCtx);
```

### mse.context.setSearchInput

Sets the `SearchInput` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context` |Yes |SearchInput context |

Example:

```text
mse.context.setSearchInput(searchInputCtx);
```

### mse.context.setSearchResults

Sets the `SearchResults` context.

|**Name**|**Required**|**Description**
|---|---|---|
|`context`|Yes	|SearchResults context |

Example:

```text
mse.context.setSearchResults(searchResultsCtx);
```

### mse.context.setShopper

Sets the `Shopper` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes |Shopper context|

Example:

```text
mse.context.setShopper(shopperCtx);
```

### mse.context.setShoppingCart

Sets the `ShoppingCart` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes |ShoppingCart context |

Example:

```text
mse.context.setShoppingCart(shoppingCartCtx);
```

### mse.context.setStorefrontInstance

Sets the `StorefrontInstance` context.

|**Name**|**Required**|**Description**|
|---|---|---|
|`context`|Yes	|StorefrontInstance context |

Example:

```text
mse.context.setStorefrontInstance(storefrontCtx);
```

### mse.context.setContext

Sets a custom `Context`.

|**Name**|**Required**|**Description**|
|---|---|---|
|`name` |Yes |Context name |
|`context` |Yes |Custom context |

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
context	No	Custom context.

Example:

```text
mse.publish.addToCart(ctx);
```

### mse.publish.customUrl

Publishes the `customUrl` event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.customUrl(ctx);
```

### mse.publish.initiateCheckout

Publishes the initiateCheckout event.

|**Name**|**Required**|**Description**|
|---|---|---|


context	No	Custom context.

Example:

```text
mse.publish.initiateCheckout(ctx);
```

### mse.publish.instantPurchase

Publishes the instantPurchase event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.instantPurchase(ctx);
```

### mse.publish.pageActivitySummary

Publishes the pageActivitySummary event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.pageActivitySummary(ctx);
```

### mse.publish.pageView

Publishes the pageView event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.pageView(ctx);
```

### mse.publish.placeOrder

Publishes the placeOrder event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.placeOrder(ctx);
```

### mse.publish.productPageView

Publishes the productPageView event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.productPageView(ctx);
```

### mse.publish.recsItemAddToCartClick

Publishes the recsItemAddToCartClick event.

|**Name**|**Required**|**Description**|
|---|---|---|
unitId	Yes	Recommendations unit id.
productId	Yes	Recommended product id.
context	No	Custom context.

Example:

```text
mse.publish.recsItemAddToCartClick(unitId, productId, ctx);
```

### mse.publish.recsItemClick

Publishes the recsItemClick event.

|**Name**|**Required**|**Description**|
|---|---|---|
unitId	Yes	Recommendations unit id.
productId	Yes	Recommended product id.
context	No	Custom context.

Example:

```text
mse.publish.recsItemClick(unitId, productId, ctx);
```

### mse.publish.recsRequestSent

Publishes the recsRequestSent event.

|**Name**|**Required**|**Description**|
|---|---|---|

context	No	Custom context.

Example:

```text
mse.publish.recsRequestSent(ctx);
```

### mse.publish.recsResponseReceived

Publishes the recsResponseReceived event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.recsResponseReceived(ctx);
```

### mse.publish.recsUnitRender

Publishes the recsUnitRender event.

|**Name**|**Required**|**Description**|
|---|---|---|
unitId	Yes	Recommendations unit id.
context	No	Custom context.

Example:

```text
mse.publish.recsUnitRender(unitId, ctx);
```

### mse.publish.recsUnitView

Publishes the recsUnitView event.

|**Name**|**Required**|**Description**|
|---|---|---|
unitId	Yes	Recommendations unit id.
context	No	Custom context.

Example:

```text
mse.publish.recsUnitView(unitId, ctx);
```

### mse.publish.referrerUrl

Publishes the referrerUrl event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.referrerUrl(ctx);
```

### mse.publish.removeFromCart

Publishes the removeFromCart event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.removeFromCart(ctx);
```

### mse.publish.searchCategoryClick

Publishes the searchCategoryClick event.

|**Name**|**Required**|**Description**|
|---|---|---|
searchUnitId	Yes	Search unit id.
name	Yes	Category name.
context	No	Custom context.

Example:

```text
mse.publish.searchCategoryClick(searchUnitId, name, ctx);
```

### mse.publish.searchProductClick

Publishes the searchProductClick event.

|**Name**|**Required**|**Description**|
|---|---|---|
searchUnitId	Yes	Search unit id.
sku	Yes	Product sku.
context	No	Custom context.

Example:

```text
mse.publish.searchProductClick(searchUnitId, sku, ctx);
```

### mse.publish.searchRequestSent

Publishes the searchRequestSent event.

|**Name**|**Required**|**Description**|
|---|---|---|

searchUnitId	Yes	Search unit id.
context	No	Custom context.

Example:

```text
mse.publish.searchRequestSent(searchUnitId, ctx);
```

### mse.publish.searchResponseReceived

Publishes the searchResponseReceived event.

|**Name**|**Required**|**Description**|
|---|---|---|
searchUnitId	Yes	Search unit id.
context	No	Custom context.

Example:

```text
mse.publish.searchResponseReceived(searchUnitId, ctx);
```

### mse.publish.searchResultsView

Publishes the searchResultsView event.

|**Name**|**Required**|**Description**|
|---|---|---|
searchUnitId	Yes	Search unit id.
context	No	Custom context.

Example:

```text
mse.publish.searchResultsView(searchUnitId, ctx);
```

### mse.publish.searchSuggestionClick

Publishes the searchSuggestionClick event.

|**Name**|**Required**|**Description**|
|---|---|---|
searchUnitId	Yes	Search unit id.
suggestion	Yes	Query suggestion.
context	No	Custom context.

Example:

```text
mse.publish.searchSuggestionClick(searchUnitId, suggestion, ctx);
```

### mse.publish.shoppingCartView

Publishes the shoppingCartView event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.shoppingCartView(ctx);
```

### mse.publish.signIn

Publishes the signIn event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.signIn(ctx);
```

### mse.publish.signOut

Publishes the signOut event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.signOut(ctx);
```

### mse.publish.updateCart

Publishes the updateCart event.

|**Name**|**Required**|**Description**|
|---|---|---|
context	No	Custom context.

Example:

```text
mse.publish.updateCart(ctx);
```

## Subscribe

These functions subscribe to events.

## Unsubscribe

These functions unsubscribe from events.

