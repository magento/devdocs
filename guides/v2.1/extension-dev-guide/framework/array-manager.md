---
group: php-developer-guide
title: Array Manager
subgroup: Framework
menu_title: Array Manager
menu_order: 1500
---

## Overview

The [`Magento\Framework\Stdlib\ArrayManager`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Stdlib/ArrayManager.php){:target="_blank"} class provides a better way of managing the nested arrays. 
Being more specifically, heavily nested associative arrays. It is used primarily when handling data from UiComponents within [DataProviders]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_data_source.html) and [Modifiers]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_modifier_concept.html), which, are actually part of a complicated process of parsing XML files as associative arrays.

## Usage

|Method|Description|
|--- |--- |
| `exists` | Checks if the node exists in a given associative array |
| `get` | This will return the value of the key (or node) at the end of the path, `null` is returned if the node hasn't been found. |
| `move` | Moves a value from one path to another. |
| `remove` | Updates the existing nodes and returns the modified array |
| `replace` | Updates the existing nodes and returns the modified array |
| `set` | Set value into node and returns modified data |

#### Example 1

Let's have a look at the following [LayoutProcessor implementation]({{ site.mage2bloburl }}/1f9186c3b9a96c5e642fd5d3d31ac5c7e1877d2b/app/code/Magento/Checkout/Block/Checkout/LayoutProcessor.php#L143){:target="_blank"}, of how a custom field is added to checkout billing address.

```php
<?php
/**
 * Process js Layout of block
 *
 * @param array $jsLayout
 *
 * @return array
 */
public function process($jsLayout)
{
    ...
    
    if (isset($jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']
        ['children']['shippingAddress']['children']['shipping-address-fieldset']['children'])
    ) {
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']
        ['children']['shippingAddress']['children']['shipping-address-fieldset']['children'];

        ...
    }
    
    ...
}
```

By using the `Magento\Framework\Stdlib\ArrayManager`, we should have it much cleaner and there is no reason to duplicate the checking and getting the needed array.

```php
<?php

use Magento\Framework\Stdlib\ArrayManager;

...
    /**
     * @var ArrayManager
     */
    private $arrayManager;

    /**
     * SomeClass constructor.
     *
     * @param ArrayManager $arrayManager
     */
    public function __construct(ArrayManager $arrayManager)
    {
        $this->arrayManager = $arrayManager;
    }

    /**
     * Process js Layout of block
     *
     * @param array $jsLayout
     *
     * @return array
     */
    public function process($jsLayout): array
    {
        $path = 'components/checkout/children/steps/children/shipping-step/children/shippingAddress/children/shipping-address-fieldset/children';

        if ($fields = $this->arrayManager->get($path, $jsLayout)) {
            ...
        }

        ...
    }

...

```

#### Example 2

Let's suppose you have the following nested array:

```php
$data = [
    'response' => [
        'status' => 'OK',
        'result' => [
            'items' => [
                0 => 'First item',
                1 => 'Second item',
                ...
            ],
            ...
        ]
    ]
]
```

By using `Magento\Framework\Stdlib\ArrayManager`, you should be able to perform the next actions:

```php
...

if ($this->arrayManager->get('response/status', $data) === 'OK') {
    $items = $this->arrayManager->get('response/result/items', $data) ?? [];

    foreach ($items as $item) {
        ...
    }
}

...
```
