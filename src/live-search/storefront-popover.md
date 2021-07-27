---
group: live-search
title: Storefront Popover
ee_only: True
---

When Live Search is installed, a popover appears in the storefront as shoppers type in the [Search](https://docs.magento.com/user-guide/catalog/search-quick.html) box. With each character typed, the popover is updated with suggested products and thumbnail images of the top search results.

The Live Search popover can be configured to display "search as you type" results for one character or more. The minimum number of characters required for a valid search string is determined by the Catalog Search [Minimal Query Length](https://docs.magento.com/user-guide/catalog/search-configuration.html) configuration setting.

The selection of [searchable attributes](https://docs.magento.com/user-guide/stores/attributes-product.html#storefront-properties) can impact the speed of the response. Although the difference might be milliseconds, the more data that must be processed, the slower the response. Therefore, give some thought to the attributes that are defined as searchable. To optimize search, focus on high-value attributes and avoid those that contain a large amount of text, such as `Description`.

![Live Search popover]({{ page.baseurl }}/live-search/images/storefront-popover.png)
_Storefront popover_

## Styling popover elements

The selection of fields that appear in the popover is not configurable. However, elements of the popover can be styled using CSS classes. For example, the following declarations change the background color of the popover container and footer.

```css
.livesearch.popover-container {
    background-color: lavender;
}

.livesearch.view-all-footer {
    background-color: magenta;
}
```

For more information about styling storefront elements, refer to [Cascading style sheets (CSS)]({{ page.baseurl }}/guides/v2.4/frontend-dev-guide/css-topics/css-overview.html) in the [Frontend Developers Guide]({{ page.baseurl }}/guides/v2.4/frontend-dev-guide/bk-frontend-dev-guide.html).

### Class selectors

The following class selectors can be used to style the container, suggestion, and product elements in the popover.

-  `.livesearch.popover-container`
-  `.livesearch.view-all-footer`
-  `.livesearch.suggestions-container`
-  `.livesearch.suggestions-header`
-  `.livesearch.suggestion`
-  `.livesearch.products-container`
-  `.livesearch.product-result`
-  `.livesearch.product-name`
-  `.livesearch.product-price`

### Container Class Selectors

![Popover container]({{ page.baseurl }}/live-search/images/livesearch-popover-container.png)
_.livesearch.popover-container_

![View all footer]({{ page.baseurl }}/live-search/images/livesearch-view-all-footer.png)
_.livesearch.view-all-footer_

### Suggestion Class Selectors

![Suggestions container]({{ page.baseurl }}/live-search/images/livesearch-suggestions-container.png)
_.livesearch.suggestions-container_

![Suggestions header]({{ page.baseurl }}/live-search/images/livesearch-suggestions-header.png)
_.livesearch.suggestions-header_

![Suggestion]({{ page.baseurl }}/live-search/images/livesearch-suggestion.png)
_.livesearch.suggestion_

### Product Class Selectors

![Product container]({{ page.baseurl }}/live-search/images/livesearch-product-container.png)
_.livesearch.products-container_

![Product result]({{ page.baseurl }}/live-search/images/livesearch-product-result.png)
_.livesearch.product-result_

![Product name]({{ page.baseurl }}/live-search/images/livesearch-product-name.png)
_.livesearch.product-name_

![Product price]({{ page.baseurl }}/live-search/images/livesearch-product-price.png)
_.livesearch.product-price_

## Disabling the popover

To disable the popover and restore standard [Quick Search](https://docs.magento.com/user-guide/catalog/search-quick.html) functionality, enter the following command:

```bash
bin/magento module:disable Magento_LiveSearchStorefrontPopover
```
