---
group: php-developer-guide
title: Price Adjustments
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com
---

## How Price Adjustments Work

Price Adjustments will adjust product price as it's displayed on category or product pages.  


To introduce new price adjustment one should add the following code to module's `etc/di.xml`:

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

Then `VENDOR/MODULE/Pricing/Adjustment.php` file should look like this:

```php
namespace Goivvy\Review\Pricing;

use Magento\Framework\Pricing\Adjustment\AdjustmentInterface;
use Magento\Framework\Pricing\SaleableInterface;

class Adjustment implements AdjustmentInterface
{
    const ADJUSTMENT_CODE = 'devadj';

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

    public function extractAdjustment($amount, SaleableInterface $saleableItem, $context = [])
    {   
        $return = $amount - 1.79;
        return $return;
    }

    public function applyAdjustment($amount, SaleableInterface $saleableItem, $context = [])
    {   
        $return = $amount + 1.79;
        return $return;
    }

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

Adjustment logic is defined in `extractAdjustment` and `applyAdjustment` functions.


## What Areas Price Adjustments Affect

Price Adjustments affect storefront product prices. 

Price Adjustments **will not** affect quote item prices so when a product is added to the cart any price adjustments defined the way described above are discarded.


## Correct Way To Do Price Adjustments for Quote Items


