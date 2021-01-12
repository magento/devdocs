---
title: View models
contributor_name: Space 48
contributor_link: https://www.space48.com/
group: php-developer-guide
---

A view model is an abstraction of the view exposing public properties and commands. It allows developers to offload features and business logic from block classes into separate classes that are easier to maintain, test, and reuse.

## When to use view models

Use this approach anytime you need to inject functionality into template files and your code does not need to be backwards compatible with Magento.

 {:.bs-callout-info}
View models are available in Magento 2.2 onwards. If your code must be compatible with older versions of Magento, consider adding your logic to blocks. For more information about backward compatibility, see [Backward compatibility]({{ site.baseurl }}/contributor-guide/backward-compatible-development/).

 {:.bs-callout-info}
The use of helpers in templates is discouraged. It is recommeneded to use view models instead.

## How to write view models

View models can be used by passing the view model class as an argument to a template's block in the page layout configuration file. In the following example snippet, `MyNewViewModel` is the view model class of the OrangeCompany_Catalog module passed as an argument to a block.

```xml
<block name="orangeco.new.viewmodel" template="OrangeCompany_Catalog::example.phtml">
    <arguments>
        <argument name="view_model" xsi:type="object">OrangeCompany\Catalog\ViewModel\MyNewViewModel</argument>
    </arguments>
</block>
```

In the following example, the same view model is used with an existing block in `Magento/Checkout/view/frontend/layout/checkout_cart_item_renderers.xml`.

```xml
<referenceBlock name="checkout.cart.item.renderers.default">
    <arguments>
        <argument name="view_model" xsi:type="object">OrangeCompany\Catalog\ViewModel\MyNewViewModel</argument>
    </arguments>
</referenceBlock>
```

The view model class must always implement the interface `\Magento\Framework\View\Element\Block\ArgumentInterface`. For example:

```php
namespace OrangeCompany\Catalog\ViewModel;

class MyNewViewModel implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
    public function getTitle()
    {
      return 'Hello World';
    }
}
```

You can access the public methods for the view model class in the template:

```html
<?php

/** @var $viewModel \OrangeCompany\Catalog\ViewModel\MyNewViewModel */

$viewModel = $block->getViewModel();

?>
<h1><?= $block->escapeHtml($viewModel->getTitle()); ?></h1>
```

## Examples of view models

-  [Magento Theme](https://github.com/magento/magento2/blob/2.3.3/app/code/Magento/Theme/view/frontend/layout/default.xml#L43-L45 "view_model definition"). This `view_model` is injected into a template to return the target store redirect url.

The following is an example of view model usage within the `Magento/Catalog/view/frontend/layout/catalog_product_view.xml` layout file.

The view model class is passed as an argument to the `product.info.upsell` block in the layout configuration file:

```xml
<block class="Magento\Catalog\Block\Product\ProductList\Upsell" name="product.info.upsell" template="Magento_Catalog::product/list/items.phtml">
    <arguments>
        <argument name="type" xsi:type="string">upsell</argument>
        <argument name="view_model" xsi:type="object">Magento\Catalog\ViewModel\Product\Listing\PreparePostData</argument>
    </arguments>
</block>
```

The following is an example of the view model class `Magento/Catalog/ViewModel/Product/Listing/PreparePostData.php` implementation in the catalog module.

The class must implement the `\Magento\Framework\View\Element\Block\ArgumentInterface` interface class.

```php
namespace Magento\Catalog\ViewModel\Product\Listing;

use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Framework\App\ActionInterface;
use Magento\Framework\Url\Helper\Data as UrlHelper;

/**
 * Check is available add to compare.
 */
class PreparePostData implements ArgumentInterface
{
    /**
     * @var UrlHelper
     */
    private $urlHelper;

    /**
     * @param UrlHelper $urlHelper
     */
    public function __construct(UrlHelper $urlHelper)
    {
        $this->urlHelper = $urlHelper;
    }

    /**
     * Wrapper for the PostHelper::getPostData()
     *
     * @param string $url
     * @param array $data
     * @return array
     */
    public function getPostData(string $url, array $data = []):array
    {
        if (!isset($data[ActionInterface::PARAM_NAME_URL_ENCODED])) {
            $data[ActionInterface::PARAM_NAME_URL_ENCODED] = $this->urlHelper->getEncodedUrl();
        }
        return ['action' => $url, 'data' => $data];
    }
}
```

The following is an example of the view model initialization in the `app/code/Magento/Catalog/view/frontend/templates/product/list/items.phtml` template.

```php
/** @var $viewModel /Magento/Catalog/ViewModel/Product/Listing/PreparePostData */
$viewModel = $block->getViewModel();
$postArray = $viewModel->getPostData(
    $block->escapeUrl($block->getAddToCartUrl($_item)),
    ['product' => $_item->getEntityId()]
);
```
