---
group: shared-services
title: Context - Adobe Commerce Event SDK Reference
ee_only: True
---

## Functions

The following functions get and set context data.

### mse.context.getCategory

Gets the `Category` context.

Syntax:

```javascript
mse.context.getCategory();
```

### mse.context.getCustomUrl

Gets the `CustomUrl` context.

Syntax:

```javascript
mse.context.getCustomUrl();
```

### mse.context.getMagentoExtension

Gets the `MagentoExtension` context.

Syntax:

```javascript
mse.context.getMagentoExtension();
```

### mse.context.getOrder

Gets the `Order` context.

Syntax:

```javascript
mse.context.getOrder();
```

### mse.context.getPage

Gets the `Page` context.

Syntax:

```javascript
mse.context.getPage();
```

### mse.context.getProduct

Gets the `Product` context.

Syntax:

```javascript
mse.context.getProduct();
```

### mse.context.getRecommendations

Gets the `Recommendations` context.

Syntax:

```javascript
mse.context.getRecommendations();
```

### mse.context.getReferrerUrl

Gets the `ReferrerUrl` context.

Syntax:

```javascript
mse.context.getReferrerUrl();
```

### mse.context.getSearchInput

Gets the `SearchInput` context.

Syntax:

```javascript
mse.context.getSearchInput();
```

### mse.context.getSearchResults

Gets the `SearchResults` context.

Syntax:

```javascript
mse.context.getSearchResults();
```

### mse.context.getShopper

Gets the `Shopper` context.

Syntax:

```javascript
mse.context.getShopper();
```

### mse.context.getShoppingCart

Gets the `ShoppingCart` context.

Syntax:

```javascript
mse.context.getShoppingCart();
```

### mse.context.getStorefrontInstance

Gets the `StorefrontInstance` context.

Syntax:

```javascript
mse.context.getStorefrontInstance();
```

### mse.context.getContext

Gets a custom `Context`.

|Name|Required|Description|
|---|---|---|
|`name`|Yes|`Context` name|

Syntax:

```javascript
mse.context.getContext(name);
```

### mse.context.setCategory

Sets the `Category` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`Category` context|

Syntax:

```javascript
mse.context.setCategory(categoryCtx);
```

### mse.context.setCustomUrl

Sets the `CustomUrl` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`CustomUrl` context|

Syntax:

```javascript
mse.context.setCustomUrl(customUrlCtx);
```

### mse.context.setMagentoExtension

Sets the `MagentoExtension` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`MagentoExtension` context|

Syntax:

```javascript
mse.context.setMagentoExtension(magentoExtensionCtx);
```

### mse.context.setOrder

Sets the `Order` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`Order` context|

Syntax:

```javascript
mse.context.setOrder(orderCtx);
```

### mse.context.setPage

Sets the `Page` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`Page` context|

Syntax:

```javascript
mse.context.setPage(pageCtx);
```

### mse.context.setProduct

Sets the `Product` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`Product` context|

Syntax:

```javascript
mse.context.setProduct(productCtx);
```

### mse.context.setRecommendations

Sets the `Recommendations` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`Recommendations` context|

Syntax:

```javascript
mse.context.setRecommendations(recommendationsCtx);
```

### mse.context.setReferrerUrl

Sets the `ReferrerUrl` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`ReferrerUrl` context|

Syntax:

```javascript
mse.context.setReferrerUrl(referrerUrlCtx);
```

### mse.context.setSearchInput

Sets the `SearchInput` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`SearchInput` context|

Syntax:

```javascript
mse.context.setSearchInput(searchInputCtx);
```

### mse.context.setSearchResults

Sets the `SearchResults` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`SearchResults` context|

Syntax:

```javascript
mse.context.setSearchResults(searchResultsCtx);
```

### mse.context.setShopper

Sets the `Shopper` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`Shopper` context|

Syntax:

```javascript
mse.context.setShopper(shopperCtx);
```

### mse.context.setShoppingCart

Sets the `ShoppingCart` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`ShoppingCart` context|

Syntax:

```javascript
mse.context.setShoppingCart(shoppingCartCtx);
```

### mse.context.setStorefrontInstance

Sets the `StorefrontInstance` context.

|Name|Required|Description|
|---|---|---|
|`context`|Yes|`StorefrontInstance` context|

Syntax:

```javascript
mse.context.setStorefrontInstance(storefrontCtx);
```

### mse.context.setContext

Sets a custom `Context`.

|Name|Required|Description|
|---|---|---|
|`name`|Yes|Context `name`|
|`context`|Yes|Custom context|

Syntax:

```javascript
mse.context.setContext(ctx);
```
