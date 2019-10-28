---
title: View models
contributor_name: Space 48
contributor_link: https://www.space48.com/
group: php-developer-guide
---

A view model is an abstraction of the view exposing public properties and commands. It allows developers to offload features and business logic from block classes into separate classes that are easier to maintain, test, and reuse.

## When to use view models

Use this approach anytime you need to inject functionality into template files and your code does not need to be backwards compatible with Magento 2.1.

{: .bs-callout-info }
View models are available in Magento 2.2 onwards. If your code must be compatible with older versions of Magento, consider adding your logic to blocks. For more information about backward compatibility, see [Backward compatibility]({{ page.baseurl }}/contributor-guide/backward-compatible-development/).

## How to write view models

The following example shows how to add functionality to a core template with custom logic using a view model in the `cart/item/default.phtml` template, which is located in the `Magento/Checkout/view/frontend/layout/checkout_cart_item_renderers.xml` file:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
<body>
  <referenceBlock name="checkout.cart.item.renderers.default">
    <arguments>
      <argument name="view_model" xsi:type="object">Vendor\CustomModule\ViewModel\MyClass</argument>
    </arguments>
  </referenceBlock>
</body>
```

You must implement the right interface in your `view_model` class (for example `ArgumentInterface`):

```php
namespace Vendor\CustomModule\ViewModel;

class MyClass implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
  public function getTitle()
  {
    return 'Hello World';
  }
}
```

Finally, in the `cart/item/default.phtml` template, you can access the public methods of your view model:

```html
<?php

/** @var $viewModel \Vendor\CustomModule\ViewModel\MyClass */

$viewModel = $block->getViewModel();

?>
<h1><?= $block->escapeHtml($viewModel->getTitle()); ?></h1>

```

## Examples of View models in Magento

-  [Magento Theme](https://github.com/magento/magento2/blob/2.2.9/app/code/Magento/Theme/view/frontend/layout/default.xml#L43-L47 "view_model definition"). This `view_model` is injected into a template to return the target store redirect url.
