---
layout: default
group: howdoi
subgroup: product-create-page
title: Customization via Modifiers classes for data and metadata
menu_title: Customization via Modifiers classes for data and metadata
menu_node: parent
menu_order: 3
github_link: howdoi/product-create-page/extension_class.md
---

Modifier classes should be used when static declaration is not applicable. For example, meta structure of form can vary significantly depending
on product type, attribute set, ACL, additional data that should be loaded from DB according to meta structure and vice a versa -
additional meta should be declared dynamically according to DB data and structure.

Class responsible for data and metadata preparation for product form is `Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider`.
Modifiers pool `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool` (virtual type) is injected to it using `__construct()` method
and preference for it is defined in di.xml. All modifiers that are located in pool are added to it via di.xml.
Example of how custom modifier can be added in `di.xml` of module:

`app/code/Magento/CatalogInventory/etc/adminhtml/di.xml`:


{%highlight xml%}
     <virtualType name="Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool">
        <arguments>
            <argument name="modifiers" xsi:type="array">
                <item name="advancedInventory" xsi:type="array">
                    <item name="class" xsi:type="string">Magento\CatalogInventory\Ui\DataProvider\Product\Form\Modifier\AdvancedInventory</item>
                    <item name="sortOrder" xsi:type="number">20</item>
                </item>
            </argument>
        </arguments>
    </virtualType>
{%endhighlight%}

The `sortOrder` parameter defines order of invocation (of methods `modifyData()`, `modifyMeta()`) among other modifiers in pool.

Code of Modifier class:

`Magento\CatalogInventory\Ui\DataProvider\Product\Form\Modifier\AdvancedInventory`:

{%highlight php%}
...

use Magento\Catalog\Model\Locator\LocatorInterface;
use Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\AbstractModifier;
use Magento\CatalogInventory\Api\StockRegistryInterface;
use Magento\CatalogInventory\Model\Source\Stock;
use Magento\Framework\Stdlib\ArrayManager;

class AdvancedInventory extends AbstractModifier
{
    const STOCK_DATA_FIELDS = 'stock_data';

    /**
     * @var LocatorInterface
     */
    protected $locator;

    /**
     * @var StockRegistryInterface
     */
    private $stockRegistry;

    /**
     * @var Stock
     */
    private $stock;

    /**
     * @var ArrayManager
     */
    protected $arrayManager;

    /**
     * @var array
     */
    protected $meta = [];

     ...

    public function modifyData(array $data)
    {
        $fieldCode = 'quantity_and_stock_status';

        $model = $this->locator->getProduct();
        $modelId = $model->getId();

        $stockItem = $this->stockRegistry->getStockItem(
            $modelId,
            $model->getStore()->getWebsiteId()
        );

        $stockData = $stockItem->getData();
        if (!empty($stockData)) {
            $data[$modelId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS] = $stockData;
        }
        if (isset($stockData['is_in_stock'])) {
            $data[$modelId][self::DATA_SOURCE_DEFAULT][$fieldCode]['is_in_stock'] =
                (int)$stockData['is_in_stock'];
        }

        return $this->prepareStockData($data);
    }

    protected function prepareStockData(array $data)
    {
        $productId = $this->locator->getProduct()->getId();
        $stockDataFields = [
            'qty_increments',
            'min_qty',
            'min_sale_qty',
            'max_sale_qty',
            'notify_stock_qty',
        ];

        foreach ($stockDataFields as $field) {
            if (isset($data[$productId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS][$field])) {
                $data[$productId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS][$field] =
                    (float)$data[$productId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS][$field];
            }
        }

        return $data;
    }

    public function modifyMeta(array $meta)
    {
        $this->meta = $meta;
        $this->prepareMeta();
        return $this->meta;
    }

    private function prepareMeta()
    {
        $fieldCode = 'quantity_and_stock_status';
        $pathField = $this->arrayManager->findPath($fieldCode, $this->meta, null, 'children');

        if ($pathField) {
            $labelField = $this->arrayManager->get(
                $this->arrayManager->slicePath($pathField, 0, -2) . '/arguments/data/config/label',
                $this->meta
            );
            $fieldsetPath = $this->arrayManager->slicePath($pathField, 0, -4);

            $this->meta = $this->arrayManager->merge(
                $pathField . '/arguments/data/config',
                $this->meta,
                [
                    'label' => __('Stock Status'),
                    'value' => '1',
                    'dataScope' => $fieldCode . '.is_in_stock',
                    'scopeLabel' => '[GLOBAL]',
                ]
            );
            $this->meta = $this->arrayManager->merge(
                $this->arrayManager->slicePath($pathField, 0, -2) . '/arguments/data/config',
                $this->meta,
                [
                    'label' => __('Stock Status'),
                    'scopeLabel' => '[GLOBAL]',
                ]
            );

            $container['arguments']['data']['config'] = [
                'formElement' => 'container',
                'componentType' => 'container',
                'component' => "Magento_Ui/js/form/components/group",
                'label' => $labelField,
                'breakLine' => false,
                'dataScope' => $fieldCode,
                'scopeLabel' => '[GLOBAL]',
                'source' => 'product_details',
                'sortOrder' =>
                    (int) $this->arrayManager->get(
                        $this->arrayManager->slicePath($pathField, 0, -2) . '/arguments/data/config/sortOrder',
                        $this->meta
                    ) - 1,
            ];
            $qty['arguments']['data']['config'] = [
                'component' => 'Magento_CatalogInventory/js/components/qty-validator-changer',
                'dataType' => 'number',
                'formElement' => 'input',
                'componentType' => 'field',
                'visible' => '1',
                'require' => '0',
                'additionalClasses' => 'admin__field-small',
                'dataScope' => 'qty',
                'validation' => [
                    'validate-number' => true,
                    'validate-digits' => true,
                ],
                'imports' => [
                    'handleChanges' => '${$.provider}:data.product.stock_data.is_qty_decimal',
                ],
                'sortOrder' => 10,
            ];
            $advancedInventoryButton['arguments']['data']['config'] = [
                'displayAsLink' => true,
                'formElement' => 'container',
                'componentType' => 'container',
                'component' => 'Magento_Ui/js/form/components/button',
                'template' => 'ui/form/components/button/container',
                'actions' => [
                    [
                        'targetName' => 'product_form.product_form.advanced_inventory_modal',
                        'actionName' => 'toggleModal',
                    ],
                ],
                'title' => __('Advanced Inventory'),
                'provider' => false,
                'additionalForGroup' => true,
                'source' => 'product_details',
                'sortOrder' => 20,
            ];
            $container['children'] = [
                'qty' => $qty,
                'advanced_inventory_button' => $advancedInventoryButton,
            ];

            $this->meta = $this->arrayManager->merge(
                $fieldsetPath . '/children',
                $this->meta,
                ['quantity_and_stock_status_qty' => $container]
            );
        }
    }
}
{%endhighlight%}

Modifier class should implement interface `Magento\Ui\DataProvider\Modifier` (or extend `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier`).
As you can see, methods `modifyMeta(array $meta)` and `modifyData(array $data)` accept as a parameter data and meta created/modified by previous modifiers.
If modifier is first in pool - meta and data will be empty.

UI elements can be added to meta property having structure same as in xml declaration.
You can create nested structures of elements adding them to "children" key of any element.

Added meta/data will be merged with meta/data that comes from xml declaration (last can be absent).

Let's summarize steps that you need for customization of product form via Modifier classes
1. Create modifier class that implements interface Magento\Ui\DataProvider\Modifier (or extends Magento\Catalog\Ui\DataProvider\Product\Form\Modifier).
Implement methods modifyData() and/or modifyMeta().
2. Define modifier as dependency to pool Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool via adminhtml/di.xml of your module.

<div class="bs-callout bs-callout-tip">
  <p>To access product model within your modifier it's recommended to use instance of Magento\Catalog\Model\Locator\LocatorInterface.</p>
</div>

Please, take a look at other examples of modifiers in code base of Magento:
app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AdvancedPricing.php
app/code/Magento/ConfigurableProduct/Ui/DataProvider/Product/Form/Modifier/Data/AssociatedProducts.php
app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AttributeSet.php
app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/Eav.php
etc