---
layout: default
group: 
subgroup: 
title: How Magento calculates prices
menu_title: How Magento calculates prices
menu_order: 
version: 2.0
github_link: architecture/behavior/price-calc.md
redirect_from: /guides/v1.0/architecture/behavior/price-calc.html
---

<h2 id="m2devgde-pricecalc-intro">Introduction to the Magento pricing library</h2>
This article provides in-depth information about Magento price calculation logic implemented in the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing" target="_blank">Magento\Framework\Pricing</a> library.

<h2 id="m2devgde-pricecalc-gen">Price Calculation General Flow</h2>

To use the Pricing library for a product (`SaleableItem`), the product model should implement <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Object/SaleableInterface.php" target="_blank">Magento\Framework\Pricing\Object\SaleableInterface</a>.

The implementation of `SaleableItemInterface` gives access to the `PriceInfo` object of a product, which in turn provides all available `Price` objects or `Adjustments` specific to the product.

The `Price` object provides the Amount calculated by applying or excluding `Adjustments`. And finally, calling the `getValue()` method of the `Amount` object returns a float price (number).

The flow can be illustrated as follows:
<p><img src="{{ site.baseurl }}common/images/price_usage1.png" alt="The diagram SaleableItem to PriceInfoFactory to PriceInfoInterface, from here to Price and to Adjustment, from Price to Adjustment Calculator, from here to Adjustment and to Amount, from Amount to Value"></p>

<h2 id="m2devgde-pricecalc-api">Price Calculation API</h2>

This section discusses the following APIs:

*	<a href="#m2devgde-pricecalc-api_adj">AdjustmentInterface</a>
*	<a href="#m2devgde-pricecalc-calcint">CalculatorInterface</a>
*	<a href="#m2devgde-pricecalc-amint">AmountInterface</a>
*	<a href="#m2devgde-pricecalc-absprice">AbstractPrice</a>
*	<a href="#m2devgde-pricecalc-abs-priceinfo">PriceInfo</a>
*	<a href="#m2devgde-pricecalc-absprice">AbstractPrice</a>

<h3 id="m2devgde-pricecalc-api_adj">AdjustmentInterface</h3>

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Adjustment/AdjustmentInterface.php" target="_blank">Magento\Framework\Pricing\Adjustment\AdjustmentInterface</a> contains the business logic responsible for applying adjustment to the `SaleableItem` final price.

<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input Parameters</th>
      <th>Return Value Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>getAdjustmentCode</code>
      </td>
      <td>-</td>
      <td>
        <code>string</code>
      </td>
      <td>Returns unique adjustment code as used in DI and Layout configurations.</td>
    </tr>
    <tr>
      <td>
        <code>isIncludedInBasePrice</code>
      </td>
      <td>-</td>
      <td>
        <code>boolean</code>
      </td>
      <td>Returns a Boolean flag defining if adjustment amount is included to base price.</td>
    </tr>
    <tr>
      <td>
        <code>isIncludedInDisplayPrice</code>
      </td>
      <td>-</td>
      <td>
        <code>boolean</code>
      </td>
      <td>Returns a Boolean flag defining if adjustment amount should be included in display price.</td>
    </tr>
    <tr>
      <td>
        <code>extractAdjustment</code>
      </td>
      <td>
        <ul>
          <li>
            <code>$amount : float </code>
          </li>
          <li>
            <code>$saleableItem : SaleableInterface</code>
          </li>
        </ul>
      </td>
      <td>
        <code>float</code>
      </td>
      <td>Extracts adjustment from the given amount and returns the result.</td>
    </tr>
    <tr>
      <td>
        <code>applyAdjustment</code>
      </td>
      <td>
        <p>
          <code>$amount : float</code>
        </p>
        <p>
          <code>$saleableItem : SaleableInterface</code>
        </p>
      </td>
      <td>
        <code>float</code>
      </td>
      <td>Adds adjustment amount to the given amount value and returns the resulting value.</td>
    </tr>
    <tr>
      <td>
        <code>isExcludedWith</code>
      </td>
      <td>
        <code>$adjustmentCode : string</code>
      </td>
      <td>
        <code>boolean</code>
      </td>
      <td>Checks if adjustment should be excluded from calculations along with the given adjustment.</td>
    </tr>
    <tr>
      <td>
        <code>getSortOrder</code>
      </td>
      <td>-</td>
      <td>
        <code>integer</code>
      </td>
      <td>Returns the position of the adjustment in the applying adjustments order.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricecalc-calcint">CalculatorInterface</h3>

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Adjustment/CalculatorInterface.php" target="_blank">Magento\Framework\Pricing\Adjustment\CalculatorInterface</a> prepares `Amount` (applies and extracts adjustments) according to the saleable item (product) configuration.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input Parameters</th>
      <th>Return Value Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>getAmount</code>
      </td>
      <td>
        <ul>
          <li>
            <code>$amount</code>
          </li>
          <li>
            <code>$saleableItem : SaleableInterface</code>
          </li>
          <li>
            <code>$exclude [optional]</code>
          </li>
        </ul>
      </td>
      <td>
        <code>AmountInterface</code>
      </td>
      <td>Retrieves the <code>Amount</code> object based on the given float amount, product and exclude option.<br class="atl-forced-newline"/>It is possible to pass <code>true</code> or adjustment code to exclude all or specific adjustment from an amount.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricecalc-calcint-dep">Price Calculator Dependencies</h4>


<table>
  <tbody>
    <tr>
      <th>Class / Interface</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>\Magento\Pricing\Amount\AmountFactory</code> </td>
      <td>Amount objects factory</td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricecalc-amint">AmountInterface</h3>

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Amount/AmountInterface.php" target="_blank">Magento\Framework\Pricing\Amount\AmountInterface</a> is a container of a composite price value information. Price is represented as base amount value and an array of adjustment codes.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input Parameters</th>
      <th colspan="1">Return Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <p>
          <code>getValue</code>
        </p>
      </td>
      <td>
        <p>
          <code>$exclude : string|array = null</code>
        </p>
      </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td>
        Returns full amount value excluding the specified adjustments.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>__toString</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code>string</code>
      </td>
      <td colspan="1">
        Returns full amount value in string format.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getBaseAmount</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td colspan="1">
        Returns base amount part value.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getAdjustmentAmount</code>
        </p>
      </td>
      <td colspan="1">
        <code>$adjustmentCode : String</code>
      </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td colspan="1">
        Returns adjustment amount part value by adjustment code.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getTotalAdjustmentAmount</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td colspan="1">
        Returns the sum of all applied adjustments.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getAdjustmentAmounts</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td colspan="1">
        Return all applied adjustments as array.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>hasAdjustment</code>
        </p>
      </td>
      <td colspan="1">
        <code>$adjustmentCode : string</code>
      </td>
      <td colspan="1">
        <code>boolean</code>
      </td>
      <td colspan="1">Checks if the <code>Amount</code> object contains an <code>Adjustment</code>.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricecalc-absprice">AbstractPrice</h3>

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Price/AbstractPrice.php" target="_blank">Magento\Framework\Pricing\Price\AbstractPrice</a> is responsible for providing information about specific price type.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>input params</th>
      <th>Return value</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>getValue</code>
      </td>
      <td>-</td>
      <td>
        <code>float|boolean</code>
      </td>
      <td>Returns price value or <code>false</code> if price value cannot be returned.</td>
    </tr>
    <tr>
      <td>
        <code>getAmount</code>
      </td>
      <td>-</td>
      <td>
        <code>float</code>
      </td>
      <td>Gets amount object.</td>
    </tr>
    <tr>
      <td>
        <code>getCustomAmount</code>
      </td>
      <td>
        <ul>
          <li>
            <p class="_mce_tagged_br">
              <code>$amount : float = null</code>
            </p>
          </li>
          <li>
            <p class="_mce_tagged_br">
              <code>$exclude : boolean|string = null</code>
            </p>
          </li>
        </ul>
      </td>
      <td>
        <p>
          <code>AmountInterface|boolean|float</code>
        </p>
      </td>
      <td>Calculates custom amount excluding specified adjustments.</td>
    </tr>
    <tr>
      <td>
        <code>getPriceCode</code>
      </td>
      <td>-</td>
      <td>
        <code>AdjustmentInterface</code>
      </td>
      <td>Gets price code.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricecalc-abs-dep">AbstractPrice Dependencies</h4>
<table>
  <tbody>
    <tr>
      <th>Class / Interface</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Object\SaleableInterface</code>
      </td>
      <td>Saleable item (that is Product).</td>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Adjustment\CalculatorInterface</code>
      </td>
      <td>Adjustment calculator.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricecalc-abs-type">Price Types</h4>
Every class implementing a price type should extend <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Price/AbstractPrice.php" target="_blank"><code>Magento\Framework\Pricing\Price\AbstractPrice</code></a>.

<h3 id="m2devgde-pricecalc-abs-priceinfo">PriceInfo</h3>
<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/PriceInfoInterface.php" target="_blank">Magento\Framework\Pricing\PriceInfoInterface</a> holds prices and adjustments collections and provides access to them.

<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>input params</th>
      <th>Return value</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>getPrices</code>
      </td>
      <td>-</td>
      <td>
        <code>PriceInterface[]</code>
      </td>
      <td>Gets all prices.</td>
    </tr>
    <tr>
      <td>
        <code>getPrice</code>
      </td>
      <td>
        <code>$priceCode : string</code>
      </td>
      <td>
        <code>PriceInterface</code>
      </td>
      <td>Gets specific price.</td>
    </tr>
    <tr>
      <td>
        <code>getAdjustments</code>
      </td>
      <td>-</td>
      <td>
        <code>AdjustmentInterface[]</code>
      </td>
      <td>Gets all adjustments.</td>
    </tr>
    <tr>
      <td>
        <code>getAdjustment</code>
      </td>
      <td>
        <code>$adjustmentCode : string</code>
      </td>
      <td>
        <code>AdjustmentInterface</code>
      </td>
      <td>Gets specific adjustment.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricecalc-prinfdep">Price Info Dependencies</h4>
<table>
  <tbody>
    <tr>
      <th>Class / Interface</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Adjustment\Collection</code>
      </td>
      <td>Adjustments collection.</td>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Price\Collection</code>
      </td>
      <td>Prices collection.</td>
    </tr>
  </tbody>
</table>

