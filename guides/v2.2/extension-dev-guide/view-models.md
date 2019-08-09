---
group: php-developer-guide
subgroup: 99_Module Development
title: ViewModels
menu_title: ViewModels
menu_order: 10001
---

## Overview

The view model is an abstraction of the view exposing public properties and commands. It allows to offload features and 
business logic from block classes into separate classes that are easier to maintain, test and reuse.

## When to use

Use this approach anytime you need to inject functionality into template files and your code doesn't need to be backwards compatible with Magento 2.1.

{: .bs-callout-info }
viewModels are available in Magento 2.2 onwards, if your code needs to be compatible with older versions of Magento consider adding your logic to blocks. For more information about backward compatibility see [Backward compatibility]({{ page.baseurl }}/contributor-guide/backward-compatible-development/)

## How to write

Let us say that we want to add functionality to a core template with custom logic using a ViewModel in the `cart/item/default.phtml` template found in `Magento/Checkout/view/frontend/layout/checkout_cart_item_renderers.xml`:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
<body>
  <referenceBlock name="checkout.cart.item.renderers.default">
    <arguments>
      <argument name="viewModel" xsi:type="object">Vendor\CustomModule\ViewModel\MyClass</argument>
    </arguments>
  </referenceBlock>
</body>
```

You would also have to implement the right interface in your viewModel class (i.e. `ArgumentInterface`):

```php
namespace Vendor\CustomModule\ViewModel;

class MyClass implements \Magento\Framework\View\Element\Block\ArgumentInterface
{

  public function getTitle()
  {
    return 'Hello World'
  {
}
```

Finally, in `cart/item/default.phtml` template you can access the public methods of your viewModel:

```html
<?php

/** @var $viewModel \Vendor\CustomModule\ViewModel\MyClass */

$viewModel = $block->getViewModel();

?>
<h1><?= $block->escapeHtml($viewModel->getTitle()); ?></h1>

```

## Examples of ViewModels in Magento
- [Magento_Catalog]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/frontend/layout/catalog_product_view.xml#L34){:target="_blank"}
This viewModel is used to inject breadcrumb json with html escaped names into the template file.

https://github.com/magento/magento2/blob/0a1a283cd6a0cf4b98a051867f90150c9490fcec/app/code/Magento/Catalog/view/frontend/layout/catalog_product_view.xml#L34