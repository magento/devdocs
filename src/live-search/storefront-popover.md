---
group: live-search
title: Storefront Popover
ee_only: True
---

When Live Search is installed, a popover appears in the storefront as shoppers type in the [Search](https://docs.magento.com/user-guide/catalog/search-quick.html) box. With each character typed, the popover is updated with suggested products and thumbnail images of the top search results.

The Live Search popover can be configured to display "search as you type" results for one character or more. The minimum number of characters required for a valid search string is determined by the Catalog Search [Minimal Query Length](https://docs.magento.com/user-guide/catalog/search-configuration.html) configuration setting.

![Live Search popover]({{ page.baseurl }}/live-search/images/storefront-popover.png)
_"Search as you type" popover_

## Disabling the popover

To disable the popover and restore standard [Quick Search](https://docs.magento.com/user-guide/catalog/search-quick.html) functionality, enter the following command:

```text
php bin/magento module:disable Magento_LiveSearchStorefrontPopover
```

## Styling popover elements

Elements of the popover can be styled using CSS classes. For example, the following declarations change the background color of the popover container and footer.

```text
.livesearch.popover-container {
    background-color: lavender;
}

.livesearch.view-all-footer {
    background-color: magenta;
}
```

For more information about styling storefront elements, refer to [Cascading style sheets (CSS)]({{ page.baseurl }}/guides/v2.4/frontend-dev-guide/css-topics/css-overview.html) in the Adobe Commerce [Frontend Developers Guide]({{ page.baseurl }}/guides/v2.4/frontend-dev-guide/bk-frontend-dev-guide.html).

### Popover class selectors

The following class selectors style the popover container and footer.

`livesearch.popover-container`

![Popover container]({{ page.baseurl }}/live-search/images/livesearch-popover-container.png)
_Popover container_

`.livesearch.view-all-footer`

![View all footer]({{ page.baseurl }}/live-search/images/livesearch-view-all-footer.png)
_"View all items" link_

### Suggestion class selectors

`.livesearch.suggestions-container`

![Suggestions container]({{ page.baseurl }}/live-search/images/livesearch-suggestions-container.png)
_Suggestions container_

`.livesearch.suggestions-header`

![Suggestions header]({{ page.baseurl }}/live-search/images/livesearch-suggestions-header.png)
_Suggestions header_

`.livesearch.suggestion`

![Suggestion]({{ page.baseurl }}/live-search/images/livesearch-suggestion.png)
_Suggestion_

### Product class selectors

`.livesearch.products-container`

![Suggestion]({{ page.baseurl }}/live-search/images/livesearch-product-container.png)
_Products container_

`.livesearch.product-result`

![Product result]({{ page.baseurl }}/live-search/images/livesearch-product-result.png)
_Product result_

`.livesearch.product-name`

![Product name]({{ page.baseurl }}/live-search/images/livesearch-product-name.png)
_Product name_

`.livesearch.product-price`

![Product price]({{ page.baseurl }}/live-search/images/livesearch-product-price.png)
_Product price_
