---
group: php-developer-guide
title: Array Manager
---

## Overview

The [`Magento\Framework\Stdlib\ArrayManager`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Stdlib/ArrayManager.php) library provides the ability to manage deeply nested associative arrays.
The library is primarily used to handle data from UI components within [DataProviders]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_data_source.html) and [Modifiers]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_modifier_concept.html), which are actually part of a complicated process of parsing XML files in associative arrays.

## Usage

|Method|Description|
|--- |--- |
| `exists` | Checks if the node exists in a given associative array |
| `find` | Finds a node in a nested array and saves its index and parent node reference |
| `findPaths` | Gets matching paths for elements with specified indexes. |
| `get` | Returns the value of the key (or node) at the end of the path. `null` is returned if the node could not be found. |
| `move` | Moves a value from one path to another |
| `merge` | Merges a value with a node and returns the modified data. |
| `populate` | Populates a nested array, if possible and necessary. |
| `remove` | Removes a node and returns the modified array. |
| `replace` | Updates the existing nodes and returns the modified array |
| `set` | Sets the value into a node and returns modified data. |
| `slicePath` | Retrieves a slice of the specified path. |

### Example 1

The following example shows how to add a custom field to the checkout billing address using the [LayoutProcessor implementation]({{ site.mage2bloburl }}/1f9186c3b9a96c5e642fd5d3d31ac5c7e1877d2b/app/code/Magento/Checkout/Block/Checkout/LayoutProcessor.php#L143).

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

For a cleaner implementation of the previous example, use the `Magento\Framework\Stdlib\ArrayManager`, library to eliminate duplicate checking and get the required array.

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

### Example 2

Suppose you have the following nested array:

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

You can use the  `Magento\Framework\Stdlib\ArrayManager` library to access items in the array:

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

You can use the  `Magento\Framework\Stdlib\ArrayManager` library to populate an array from the given path:

```php
...

$this->arrayManager->populate('response/result/items', $data)

...
```
