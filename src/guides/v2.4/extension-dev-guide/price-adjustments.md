---
group: php-developer-guide
title: Price Adjustments
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com
---

Price Adjustments adjust the product price as it is displayed on category or product pages.

In this example, we will add `1.79` to each product price.

To create a price adjustment, add the following code to the module's `VENDOR/MODULE/etc/di.xml`:

```xml
<type name="Magento\Framework\Pricing\Adjustment\Collection">
  <arguments>
    <argument name="adjustments" xsi:type="array">
      <item name="devadj" xsi:type="const">VENDOR\MODULE\Pricing\Adjustment::ADJUSTMENT_CODE</item>
    </argument>
  </arguments>
</type>
<type name="Magento\Framework\Pricing\Adjustment\Pool">
  <arguments>
     <argument name="adjustments" xsi:type="array">
        <item name="devadj" xsi:type="array">
           <item name="className" xsi:type="string">VENDOR\MODULE\Pricing\Adjustment</item>
           <item name="sortOrder" xsi:type="string">10</item>
        </item>
     </argument>
  </arguments>
</type>
```

The `VENDOR/MODULE/Pricing/Adjustment.php` file should look like:

```php
namespace VENDOR\MODULE\Pricing;

use Magento\Framework\Pricing\Adjustment\AdjustmentInterface;
use Magento\Framework\Pricing\SaleableInterface;

class Adjustment implements AdjustmentInterface
{

    const ADJUSTMENT_CODE = 'devadj';
    const ADJUSTMENT_VALUE = 1.79;

    /**
     * Get adjustment code
     *
     * @return string
     */
    public function getAdjustmentCode()
    {
        return self::ADJUSTMENT_CODE;
    }

    /**
     * Define if adjustment is included in base price
     *
     * @return bool
     */
    public function isIncludedInBasePrice()
    {
        return true;
    }

    /**
     * Define if adjustment is included in display price
     *
     * @return bool
     */
    public function isIncludedInDisplayPrice()
    {
        return true;
    }

    /**
     * Extract adjustment amount from the given amount value
     *
     * @param float $amount
     * @param SaleableInterface $saleableItem
     * @param null|array $context
     * @return float
     */
    public function extractAdjustment($amount, SaleableInterface $saleableItem, $context = [])
    {
        return $amount - self::ADJUSTMENT_VALUE;
    }

    /**
     * Apply adjustment amount and return result value
     *
     * @param float $amount
     * @param SaleableInterface $saleableItem
     * @param null|array $context
     * @return float
     */
    public function applyAdjustment($amount, SaleableInterface $saleableItem, $context = [])
    {
        return $amount + self::ADJUSTMENT_VALUE;
    }

    /**
     * Check if adjustment should be excluded from calculations along with the given adjustment
     *
     * @param string $adjustmentCode
     * @return bool
     */
    public function isExcludedWith($adjustmentCode)
    {
        return $this->getAdjustmentCode() === $adjustmentCode;
    }

    /**
     * Return sort order position
     *
     * @return int
     */
    public function getSortOrder()
    {
        return 21;
    }
}
```

The `ADJUSTMENT_CODE` constant is a unique code for the adjustment which it gets added to the `Magento\Framework\Pricing\Adjustment\Collection` collection.

The adjustment logic is defined in `extractAdjustment` and `applyAdjustment` functions.

Price adjustments affect storefront product prices.

Price adjustments **will not** affect quote item prices, so when a product is added to the cart, any price adjustments defined above are discarded.

## Add price adjustments for quote items

To adjustments prices for quote items, a custom quote total is added:

Add the following to `VENDOR/MODULE/etc/sales.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Sales:etc/sales.xsd">
    <section name="quote">
        <group name="totals">
            <item name="custom-surcharge" instance="VENDOR\MODULE\Model\Quote\Surcharge" sort_order="1000"/>
        </group>
    </section>
</config>
```

Then in `VENDOR/MODULE/Model/Quote/Surcharge.php`:

```php
namespace VENDOR\MODULE\Model\Quote;

use Magento\Quote\Api\Data\ShippingAssignmentInterface;
use Magento\Quote\Model\Quote\Address\Total;
use Magento\Quote\Model\Quote;

class Surcharge extends \Magento\Quote\Model\Quote\Address\Total\AbstractTotal
{

   const COLLECTOR_TYPE_CODE = 'custom-surcharge';

   /**
    * Custom constructor.
    */
   public function __construct()
   {
       $this->setCode(self::COLLECTOR_TYPE_CODE);
   }

   /**
    * Collect address discount amount
    *
    * @param Quote $quote
    * @param ShippingAssignmentInterface $shippingAssignment
    * @param Total $total
    * @return $this
    */
   public function collect(
        Quote $quote,
        ShippingAssignmentInterface $shippingAssignment,
        Total $total
   ) {
        parent::collect($quote, $shippingAssignment, $total);

        $items = $shippingAssignment->getItems();
        if (!count($items)) {
            return $this;
        }

        $amount = 0;
        foreach($quote->getItemsCollection() as $_quoteItem){
            $amount += $_quoteItem->getQty() * \VENDOR\MODULE\Pricing\Adjustment::ADJUSTMENT_VALUE;
        }

        $total->setTotalAmount(self::COLLECTOR_TYPE_CODE, $amount);
        $total->setBaseTotalAmount(self::COLLECTOR_TYPE_CODE, $amount);
        $total->setCustomAmount($amount);
        $total->setBaseCustomAmount($amount);
        $total->setGrandTotal($total->getGrandTotal() + $amount);
        $total->setBaseGrandTotal($total->getBaseGrandTotal() + $amount);
        return $this;
   }

  /**
    * @param Total $total
    */
   protected function clearValues(Total $total)
   {
       $total->setTotalAmount('subtotal', 0);
       $total->setBaseTotalAmount('subtotal', 0);
       $total->setTotalAmount(self::COLLECTOR_TYPE_CODE, 0);
       $total->setBaseTotalAmount(self::COLLECTOR_TYPE_CODE, 0);
       $total->setSubtotalInclTax(0);
       $total->setBaseSubtotalInclTax(0);
   }

   /**
    * @param Quote $quote
    * @param Total $total
    * @return array
    */
   public function fetch(
       Quote $quote,
       Total $total
   ) {

       $amount = 0;

       foreach ($quote->getItemsCollection() as $_quoteItem) {
            $amount += $_quoteItem->getQty() * \VENDOR\MODULE\Pricing\Adjustment::ADJUSTMENT_VALUE;
       }

       return [
           'code' => $this->getCode(),
           'title' => __('Custom Total'),
           'value' => $amount
       ];
   }

   /**
    * @return \Magento\Framework\Phrase
    */
   public function getLabel()
   {
       return __('Custom Surchange');
   }
}
```

The `COLLECTOR_TYPE_CODE` constant is a unique name of the custom total. It can be accessed with `Magento\Quote\Model\Quote\Address\Total::getTotalAmount`, and set with `Magento\Quote\Model\Quote\Address\Total::setTotalAmount`.

### Display price-adjusted totals on the cart page

To display the price-adjusted total on the cart page, we need to create a few files.

First, add the new total:

`VENDOR/MODULE/view/frontend/layout/checkout_cart_index.xml`:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.cart.totals">
            <arguments>
                <argument name="jsLayout" xsi:type="array">
                    <item name="components" xsi:type="array">
                        <item name="block-totals" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="custom-surcharge" xsi:type="array">
                                    <item name="component" xsi:type="string">VENDOR_MODULE/js/view/cart/totals/surcharge</item>
                                    <item name="config" xsi:type="array">
                                        <item name="title" xsi:type="string" translate="true">Custom Surcharge</item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

Then, define a new component: `VENDOR_MODULE/js/view/cart/totals/surcharge`:

`VENDOR/MODULE/view/frontend/web/js/view/cart/totals/surcharge.js`:

```javascript
define([
    'Magento_Checkout/js/view/summary/abstract-total',
    'Magento_Checkout/js/model/quote'
], function (Component, quote) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'VENDOR_MODULE/summary/surcharge'
        },
        totals: quote.getTotals(),

        /**
         * @return {*|Boolean}
         */
        isDisplayed: function () {
            return this.isFullMode() && this.getPureValue() != 0;
        },

        /**
         * Get surcharge title
         *
         * @returns {null|String}
         */
        getTitle: function () {
            if (!this.totals()) {
                return null;
            }

            return 'Custom Surcharge';
        },

        /**
         * @return {Number}
         */
        getPureValue: function () {
            var price = 0;
            for (var i=0; i < window.checkoutConfig.quoteItemData.length; i++) {
              price += window.checkoutConfig.quoteItemData[i].qty * 1.79;
            }

            return price;
        },

        /**
         * @return {*|String}
         */
        getValue: function () {
            return this.getFormattedPrice(this.getPureValue());
        }
    });
});
```

Then create the template `VENDOR_MODULE/summary/surcharge`:

```html
<!-- ko if: isDisplayed() -->
<tr class="totals surcharge">
    <th class="mark" scope="row">
        <span class="title" data-bind="text: getTitle()"></span>
    </th>
    <td class="amount">
        <span class="price" data-bind="text: getValue(), attr: {'data-th': name}"></span>
    </td>
</tr>
<!-- /ko -->
```

### Display price-adjusted total on the checkout page

To display the price-adjusted total on the checkout page, add it to the `totals` component.

`VENDOR/MODULE/view/frontend/layout/checkout_index_index.xml`:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
            <arguments>
                <argument name="jsLayout" xsi:type="array">
                    <item name="components" xsi:type="array">
                        <item name="checkout" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="sidebar" xsi:type="array">
                                    <item name="children" xsi:type="array">
                                        <item name="summary" xsi:type="array">
                                            <item name="children" xsi:type="array">
                                                <item name="totals" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <item name="discount" xsi:type="array">
                                                            <item name="component" xsi:type="string">VENDOR_MODULE/js/view/cart/totals/surcharge</item>
                                                            <item name="config" xsi:type="array">
                                                                <item name="title" xsi:type="string" translate="true">Custom Surcharge</item>
                                                            </item>
                                                        </item>
                                                    </item>
                                                </item>
                                            </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

The `VENDOR_MODULE/js/view/cart/totals/surcharge` component was defined earlier in the article.

If all has gone smoothly, when run, you should see the adjusted price reflected in the shopping cart.
