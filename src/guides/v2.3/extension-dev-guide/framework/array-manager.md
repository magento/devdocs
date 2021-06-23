---
group: php-developer-guide
title: Array Manager
contributor_name: Christophe Ferreboeuf
contributor_link: https://crealoz.fr/
---

## Overview

The [`Magento\Framework\Stdlib\ArrayManager`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Stdlib/ArrayManager.php){:target="_blank"} library provides the ability to manage deeply nested associative arrays.
The library is primarily used to handle data from UI components within [DataProviders]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_data_source.html) and [Modifiers]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_modifier_concept.html), which are actually part of a complicated process of parsing XML files in associative arrays.

## Usage

|Method|Description|
|--- |--- |
| `exists` | Checks if the node exists in a given associative array |
| `find` | Finds a node in a nested array and saves its index and parent node reference |
| `findPath` | Get first matching path for elements with specified indexes. It calls PHP `reset` function on `findPaths` results |
| `findPaths` | Gets matching paths for elements with specified indexes. `$startPath` permits to perform a search starting from specific path. `$internalPath` permits to retrieve only elements that are situated under the specified path. |
| `get` | Returns the value of the key (or node) at the end of the path. `null` is returned if the node could not be found. |
| `move` | Moves a value from one path to another |
| `merge` | Merges a value with a node and returns the modified data. |
| `populate` | Populates a nested array, if possible and necessary. |
| `remove` | Removes a node and returns the modified array. |
| `replace` | Updates the existing nodes and returns the modified array |
| `set` | Sets the value into a node and returns modified data. |
| `slicePath` | Retrieves a slice of the specified path. |

Suppose you have the following nested array:

```php
$data = [
    'response' => [
        'status' => 'OK',
        'result' => [
            'items' => [
                0 => 'First result item',
                1 => 'Second result item',
            ],
        ],
        'items' => [
            0 => 'First response item',
            1 => 'Second response item',
        ]
    ],
    'error' => [
        'items' => [
            0 => 'First item',
            1 => 'Second item',
        ]
    ]
];

### Accessing data
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

If we use `findPaths` without specifying `$startPath` or `$internalPath`, the function will return all paths containing `items`.

```php
...

$this->arrayManager->findPaths('items', $data);

...
```

```php
[
  0 => "response/items"
  1 => "error/items"
  2 => "response/result/items"
]
```

If we use `findPaths` with specifying `$startPath`, the function will return paths that contain `items` under the path `response`.

```php
...

$this->arrayManager->findPaths('items', $data, 'response');

...
```

```php
[
  0 => "response/items"
  1 => "response/result/items"
]
```

If we use `findPaths` with specifying `$internalPath`, the function will return paths that contain `items` that are children of element `result`.

```php
...

$this->arrayManager->findPaths('items', $data, null,'result');

...
```

```php
[
  0 => "response/result/items"
]
```

### Array modification

You can use the  `Magento\Framework\Stdlib\ArrayManager` library to populate an array from the given path if it does not exist yet:

```php
...

$this->arrayManager->populate('response/result/headers', $data)

...
```

It is possible to modify array in different manners for several values, `merge` is a good option but just one value,
`set` is preferable. When using `merge`, `move`, `replace`, `populate`, `set` or `remove`, remember that the basic array
is not modified and the modified data is returned by the function for further use. In the following example, the class extends
[Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Related]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/Related.php){:target="_blank"}.

```php
...
use Magento\Ui\Component\Form\Fieldset;
use Magento\Framework\Stdlib\ArrayManager;
...
const DATA_SCOPE_CUSTOM = 'customlink';
...
/**
 * This function will add a new type of link in the product form in back-office.                                                                                  
 * ArrayManager is injected using constructor.
 *
 * @param array $meta
 *
 * @return array
 */
public function modifyMeta(array $meta)
{
    $meta = parent::modifyMeta($meta);
    $meta = $this->arrayManager->merge(
        $this->arrayManager->findPath(static::GROUP_RELATED, $meta, null, 'children'),
        $meta,
        [
            'children' => [
                $this->scopePrefix . static::DATA_SCOPE_CUSTOM => [
                    'children' => [
                        'button_set' => $this->getButtonSet(
                            __('Choose products that will be linked'),
                            __('Add Linked Products'),
                            $this->scopePrefix . static::DATA_SCOPE_CUSTOM
                        ),
                        'modal' => $this->getGenericModal(
                            __('Add Linked Products'),
                            $this->scopePrefix . static::DATA_SCOPE_CUSTOM
                        ),
                        static::DATA_SCOPE_CUSTOM => $this->getGrid($this->scopePrefix . static::DATA_SCOPE_CUSTOM),
                    ],
                    'arguments' => [
                        'data' => [
                            'config' => [
                                'additionalClasses' => 'admin__fieldset-section',
                                'label' => __('Linked Products'),
                                'collapsible' => false,
                                'componentType' => Fieldset::NAME,
                                'dataScope' => '',
                                'sortOrder' => 20,
                            ],
                        ],
                    ]
                ]
            ]
        ]
    );
    $meta = $this->arrayManager->set(static::GROUP_RELATED.static::META_CONFIG_PATH.'/label', $meta, __('Related Products, Up-Sells, Cross-Sells and Custom Link'));
    return $meta;
}
```
