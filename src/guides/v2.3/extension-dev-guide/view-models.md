---
title: View models
contributor_name: Space 48
contributor_link: https://www.space48.com/
group: php-developer-guide
---

A view model is an abstraction of the view exposing public properties and commands. It allows developers to offload features and business logic from block classes into separate classes that are easier to maintain, test, and reuse.

## When to use view models

Use this approach anytime you need to inject functionality into template files and your code does not need to be backwards compatible with Magento 2.1.

 {:.bs-callout-info}
View models are available in Magento 2.2 onwards. If your code must be compatible with older versions of Magento, consider adding your logic to blocks. For more information about backward compatibility, see [Backward compatibility]({{ page.baseurl }}/contributor-guide/backward-compatible-development/).

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

## Examples of View models in Magento

-  [Magento Theme](https://github.com/magento/magento2/blob/2.3.3/app/code/Magento/Theme/view/frontend/layout/default.xml#L43-L45 "view_model definition"). This `view_model` is injected into a template to return the target store redirect url.
