---
layout: default
group: 
subgroup: 
title: How Magento renders prices
menu_title: How Magento renders prices
menu_order: 
github_link21: architecture/behavior/price-render.md
---

<h2 id="m2devgde-pricerend-intro">Introduction to Magento price rendering</h2>

The Magento software renders prices using the Pricing library as follows:

<p><img src="{{ site.baseurl }}common/images/price_rend1.png" alt="Magento\Framework\Pricing\Render\RenderPool searches for renders based on SaleableItem type and PriceCode (createPriceRender, createAmountRender, and createAdjustmentRender methods"></p>

<h2 id="m2devgde-pricerend-api">Price Rendering API</h2>

This section discusses the following APIs:

*	<a href="#m2devgde-pricerend-base-rend">Base Renderer</a>
*	<a href="#m2devgde-pricerend-adjrendint">AdjustmentRenderInterface</a>
*	<a href="#m2devgde-pricerend-amrendint">AmountRenderInterface</a>
*	<a href="#m2devgde-pricerend-pricebox">PriceBox</a>

<h3 id="m2devgde-pricerend-base-rend">Base Renderer</h3>

<a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Pricing/Render.php" target="_blank">Magento\Framework\Pricing\Render</a> extends <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/View/Element/AbstractBlock.php" target="_blank">Magento\Framework\View\Element\AbstractBlock</a> and serves as an entry point.

<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input params</th>
      <th>Return value</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>render</code>
      </td>
      <td>
        <ul>
          <li>
            <code>$priceCode : string</code>
          </li>
          <li>
            <code>$saleableItem : SaleableInterface</code>
          </li>
          <li>
            <code>$arguments : array = []</code>
          </li>
        </ul>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>Renders price</td>
    </tr>
    <tr>
      <td>
        <code>renderAmount</code>
      </td>
      <td>
        <ul>
          <li>
            <code>$amount : AmountInterface</code>
          </li>
          <li>
            <code>$price : PriceInterface</code>
          </li>
          <li>
            <code>$saleableItem :SaleableInterface = null</code>
          </li>
          <li>
            <code>$arguments: array = [] </code>
          </li>
        </ul>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>Renders price amount</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricerend-baserend">Base Render dependencies</h4>

<table>
  <tbody>
    <tr>
      <th>Class/Interface</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>Magento\View\Element\Template\Context</code>
      </td>
      <td>Template context</td>
    </tr>
    <tr>
      <td>
        <code>Magento\Pricing\Render\Layout</code>
      </td>
      <td>Pricing layout</td>
    </tr>
  </tbody>
</table>



<h3 id="m2devgde-pricerend-adjrendint">AdjustmentRenderInterface</h3>

<p><a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Pricing/Render/AdjustmentRenderInterface.php" target="_blank">Magento\Framework\Pricing\Render\AdjustmentRenderInterface</a> is responsible for showing price adjustments according to the system configuration. It has a flexible internal config which allows specifying a separate template for each combination of price type and product type.</p>

<p><code>AdjustmentRender</code> extends <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/View/Element/Template.php" target="_blank">Magento\View\Element\Template</a> and implements its behavior as well.</p>

<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input params</th>
      <th>Return value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>render</code>
      </td>
      <td>
        <code>$html : string <br/> $amountRender : AmountRenderInterface <br/> $arguments : array = [ ]</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        Renders the adjustment
      </td>
    </tr>
    <tr>
      <td>
        <code>getAdjustmentCode</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>
        Gets the code of the corresponding adjustment object
      </td>
    </tr>
    <tr>
      <td>
        <code>getPrice</code>
      </td>
      <td>-</td>
      <td>
        <code>PriceInteface</code>
      </td>
      <td>Retrieves the current Price object</td>
    </tr>
    <tr>
      <td>
        <code>getData</code>
      </td>
      <td>-</td>
      <td>
        <code>array</code>
      </td>
      <td>
        <span>Gets all rendering options</span>
      </td>
    </tr>
    <tr>
      <td>
        <code>getSaleableItem</code>
      </td>
      <td>-</td>
      <td>
        <code>SaleableInterface</code>
      </td>
      <td>Retrieves the current Saleable object</td>
    </tr>
    <tr>
      <td>
        <code>getAdjustment</code>
      </td>
      <td>-</td>
      <td>
        <code>AdjustmentInterface</code>
      </td>
      <td>Retrieves the current adjustment object</td>
    </tr>
    <tr>
      <td>
        <code>getAmountRender</code>
      </td>
      <td>-</td>
      <td>
        <code>AmountRenderInterface</code>
      </td>
      <td>
        Gets amount renderer instance
      </td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricerend-amrendint">AmountRenderInterface</h3>

<p><a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Pricing/Render/AmountRenderInterface.php">Magento\Framework\Pricing\Render\AmountRenderInterface</a> gets the Price Amount object from Price objects and represents the exact price value to be rendered.</p>

  <table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input params</th>
      <th>Return value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>getAmount</code>
      </td>
      <td>-</td>
      <td>
        <code>AmountInterface</code>
      </td>
      <td>Retrieves the Amount object</td>
    </tr>
    <tr>
      <td>
        <code>getPrice</code>
      </td>
      <td>-</td>
      <td>
        <code>PriceInteface</code>
      </td>
      <td>Retrieves the current Price object</td>
    </tr>
    <tr>
      <td>
        <code>getSaleableItem</code>
      </td>
      <td>-</td>
      <td>
        <code>SaleableInterface</code></td>
      <td>Retrieves the current Saleable object</td>
    </tr>
    <tr>
      <td>
        <code>getDisplayValue</code>
      </td>
      <td>-</td>
      <td>
        <code>float</code>
      </td>
      <td>Retrieves the value from the Amount object</td>
    </tr>
    <tr>
      <td>
        <code>convertAndFormatCurrency</code></td>
      <td>
        <code>$amount : float <br/>$includeContainer : boolean = true <br/> $precision : integer = 2 <br/>$currency : string = null</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        Converts and format price value
      </td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricerend-pricebox">PriceBox</h3>

<a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Pricing/Render/PriceBox.php" target="_blank">Magento\Framework\Pricing\Render\PriceBox</a> is a main block that wraps all price rendering related content of particular Price Type.

This is a private class, it cannot be accessed from general layout blocks or templates.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input parameters</th>
      <th>Return value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>getSaleableItem</code>
      </td>
      <td>-</td>
      <td>
        <code>SaleableInterface</code>
      </td>
      <td>Gets current Saleable Item object</td>
    </tr>
    <tr>
      <td>
        <code>getPrice</code>
      </td>
      <td>-</td>
      <td>
        <code>PriceInterface</code>
      </td>
      <td>Gets current Price Object</td>
    </tr>
    <tr>
      <td colspan="1">
        <code>getPriceId</code>
      </td>
      <td colspan="1">
        <code>$defaultPrefix : string = null, <br/> $defaultSuffix : string = null</code>
      </td>
      <td colspan="1">
        <code>string</code>
      </td>
      <td colspan="1">
        Gets price container ID attribute for rendering
      </td>
    </tr>
    <tr>
      <td>
        <code>getPriceType</code>
      </td>
      <td>
        <code>$priceCode : string </code> <br/> <code>$quantity : float=null</code>
      </td>
      <td>
        <code>PriceInterface</code>
      </td>
      <td>Gets Price object by Price Code</td>
    </tr>
    <tr>
      <td>
        <code>renderAmout</code>
      </td>
      <td>
        <code>$amount : AmountInterface<br/>$arguments : array = [] </code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>Retrieves amount HTML for given Amount object and arguments</td>
    </tr>
  </tbody>
</table>




