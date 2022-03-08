---
group: live-search
title: Storefront Popover
ee_only: True
---
When Live Search is [installed]({{ site.user_guide_url }}/live-search/install.html), a popover appears in the storefront as shoppers type in the [Search]({{ site.user_guide_url }}/catalog/search-quick.html) box. With each character typed, the popover is updated with suggested products and thumbnail images of the top search results.

Live Search returns results for a query of two characters or more. For a partial match, the maximum number of characters per word is 20. The number of characters in a "search as you type" query is not configurable.

{:.bs-callout-info}
The Live Search storefront popover is available only for stores that use the _Luma_ theme, or a customized theme that is based on _Luma_. The _Luma_ theme is included in the Commerce sample data. The popover does not support the _Blank_ theme. See [Working with a modified theme](#working-with-a-modified-theme) for more information.

## Searchable attributes

The following attributes are always searchable:

-  `sku`
-  `name`
-  `categories`

Review the set of product attributes that are [searchable]({{ site.user_guide_url }}/stores/attributes-product.html#storefront-properties) (`searchable=true`) to produce highly targeted results. Some attributes that are search-enabled by default, such as `description`, can have the opposite effect and reduce the precision of search results. For example, if a person searches for "shorts" and there are shirts in the catalog with a description that includes "short sleeves", the shirts are also returned. To improve the relevancy of the results, make attributes searchable that contain content that has a clear and concise meaning. Avoid using attributes that contain less precise, lengthy text.

![Live Search popover]({{ page.baseurl }}/live-search/images/storefront-popover.png)
_Storefront popover_

## Popover page size

The page size of the storefront popover determines how many lines of autocompleted products can be returned. Previously, the page size of the popover was hardcoded to six lines. The `page_size` value is now a configurable setting that is passed to the constructor. During the Live Search installation, the `page_size` value changes to the current value of the [Catalog Search](https://docs.magento.com/user-guide/configuration/catalog/catalog.html#catalog-search) - `Autocomplete Limit` setting. Merchants can change the page size of the popover by updating the value in the configuration. By default, the Catalog Search - Autocomplete Limit value is set to eight lines (or rows).

## Styling popover elements

The popover always displays the product `name` and `price`, and the selection of fields is not configurable. However, elements of the popover can be styled using CSS classes. For example, the following declarations change the background color of the popover container and footer.

```css
.livesearch.popover-container {
    background-color: lavender;
}

.livesearch.view-all-footer {
    background-color: magenta;
}
```
### Container visibility

The parent component of the `.livesearch.popover-container` is `.search-autocomplete`.  The `.active` class indicates the visibility of the container. The `.active` class is conditionally added when the popover is open.

```css
.search-autocomplete.active   /* visible */
.search-autocomplete          /* not visible */
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

![View all footer]({{ page.baseurl }}/live-search/images/livesearch-view-all-footer.png)\\
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

## Working with a modified theme

The storefront popover can be used with a customized [theme]({{ site.baseurl }}/guides/v2.3/frontend-dev-guide/themes/theme-overview.html) that inherits the required files from _Luma_. The `top.search` block in the `header-wrapper` of the `Magento_Search` module must not be modified.

```html
<referenceContainer name="header-wrapper">
   <block class="Magento\Framework\View\Element\Template" name="top.search" as="topSearch" template="Magento_Search::form.mini.phtml">
      <arguments>
         <argument name="configProvider" xsi:type="object">Magento\Search\ViewModel\ConfigProvider</argument>
      </arguments>
   </block>
</referenceContainer>
```

## Disabling the popover

To disable the popover and restore standard [Quick Search]({{ site.user_guide_url }}/catalog/search-quick.html) functionality, enter the following command:

```bash
bin/magento module:disable Magento_LiveSearchStorefrontPopover
```
