---
layout: howtom2devgde_chapters
title: The pricing library
---
 
<p><a href="{{ site.githuburl }}m2devgde/behavior/pricing.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h1 id="m2devgde-pricelib">The pricing library</h1>

<h2 id="m2devgde-pricelib-intro">Overview</h2> 

This article is a practical reference for backend and frontend developers and talks about the usage of the <code>Magento\Framework\Pricing</code> library <!-- ADDLINK -->﻿ in custom modules and how to add price rendering to page templates and layouts. To use the instructions in the article efficiently, you need to have some idea about the Magento application architecture and customizing Magento backend and frontend.

<h2 id="m2devgde-pricelib-integrate">Integrating the Pricing Library to a Custom Module</h2>

To use the Pricing library in a module:

1. Create price calculating and rendering logic extending and implementing library interfaces.

1. Add prices and adjustments in the <code>di.xml</code> of a module.
2. Prepare a layout: create a pricing layout handle (or use the default Magento one) and add a price rendering block to page layouts.
3. Add price rendering to page templates.

Each step is described in details in the following paragraphs. 
If all you need is customizing the way prices are displayed on your pages, skip steps 1 and 2 and proceed directly to layout and template tasks.


<h2 id="m2devgde-pricelib-custom">Custom Logic for Calculating and Rendering Prices</h2>

To implement the price calculation and rendering, add the following to your module code base:

<table>
  <tbody>
    <tr>
      <td>
        <p>
          <strong>Entity</strong>
        </p>
      </td>
      <td>
        <p>
          <strong>Requirement</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>A Saleable entity</p>
      </td>
      <td>
        <p>Implements <code>Magento\Framework\Pricing\Object\SaleableInterface</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>PriceType model</p>
      </td>
      <td>
        <p>Extends <code>Magento\Framework\Pricing\Price\AbstractPrice</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>Amount model</p>
      </td>
      <td>
        <p>Implements<code> Magento\Framework\Pricing\Amount\AmountInterface</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>Adjustment model</p>
      </td>
      <td>
        <p>Implements <code>Magento\Framework\Pricing\Adjustment\AdjustmentInterface</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricelib-custom-price">Adding a Сustom Price Type</h3>

To add a custom price type, create a corresponding class extending the <code>Magento\Framework\Pricing\Price\AbstractPrice</code> abstract class. 

<h2 id="m2devgde-pricelib-di">Adding Prices and Adjustments to Dependency Injection Configuration</h2>
<h3 id="m2devgde-pricelib-custom-price-type">Specifying Price Types to be Available for a Product</h3>

To specify the price types which you plan to use for the corresponding product, add the price type codes to <code>Price\Pool</code> in the module <code>di.xml</code> file. 
For example, the price configuration in the Catalog module <code>di.xml</code> looks as follows:

<b><code>app/code/Magento/Catalog/etc/di.xml</code></b>
<pre>

&lt;virtualType&nbsp;name=&quot;Magento\Catalog\Pricing\Price\Pool&quot;&nbsp;type=&quot;Magento\Framework\Pricing\Price\Pool&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;prices&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;regular_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\RegularPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;final_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\FinalPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;tier_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\TierPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;group_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\GroupPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;special_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\SpecialPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;msrp_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\MsrpPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;base_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\BasePrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;custom_option_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\CustomOptionPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;configured_price&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Price\ConfiguredPrice&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/virtualType&gt;
</pre>
To see the price type codes, navigate to the <a href="#m2devgde-pricelib-def">Default Price Types paragraph</a>. 

<h4 id="m2devgde-pricelib-adj">Specifying Adjustments to be Available for a Product</h4>

To specify what adjustments will be available for a product, add the corresponding adjustments to <code>AdjustmentPool</code> in the <code>di.xml</code> of the module. For example, the adjustments configuration in the Catalog module DI looks as follows:

<b><code>app/code/Magento/Catalog/etc/di.xml</code></b> 
<pre>
&lt;type&nbsp;name=&quot;Magento\Framework\Pricing\Adjustment\Collection&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;adjustments&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;tax&quot;&nbsp;xsi:type=&quot;const&quot;&gt;Magento\Tax\Pricing\Adjustment::ADJUSTMENT_CODE&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;weee&quot;&nbsp;xsi:type=&quot;const&quot;&gt;Magento\Weee\Pricing\Adjustment::ADJUSTMENT_CODE&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/type&gt;
</pre>

To learn more about DI files structure please refer to Using Dependency Injection. <!--ADDLINK -->

<h2 id="m2devgde-pricelib-custom-price-render">Adding Price Rendering to Layout</h2>

`Magento\Framework\Pricing\Render` is the entry point of Pricing. That is, to add Pricing blocks to your pages, you need to add a `Magento\Framework\Pricing\Render` block in the layout files of your pages.
For example:
<pre>
&lt;block&nbsp;class=&quot;Magento\Framework\Pricing\Render&quot;&nbsp;name=&quot;product.price.render.default&quot;&gt;
	&lt;arguments&gt;
&nbsp;		&lt;!--&nbsp;here&nbsp;you&nbsp;specify&nbsp;layout&nbsp;handle&nbsp;name&nbsp;--&gt;
		&lt;argument&nbsp;name=&quot;price_render_handle&quot;&nbsp;xsi:type=&quot;string&quot;&gt;catalog_product_prices&lt;/argument&gt;
		&lt;argument&nbsp;name=&quot;use_link_for_as_low_as&quot;&nbsp;xsi:type=&quot;boolean&quot;&gt;true&lt;/argument&gt;
		&lt;!--&nbsp;set&nbsp;&quot;override&quot;&nbsp;configuration&nbsp;settings&nbsp;here&nbsp;--&gt;
	&lt;/arguments&gt;
&lt;/block&gt;
</pre>
Where the value of the <code>price_render_handle</code> argument is a name of the pricing layout handle, where price displaying configuration is set. For more details about pricing layout handle see the following paragraph.

<h2 id="m2devgde-pricelib-custom-price-config">Pricing Configuration: Setting Price Displaying Options and Adding Prices and Adjustments</h2>

To configure price blocks displaying in layouts, you need to create a separate layout handle for price rendering.

The name of the layout handle is arbitrary. But if you want to use also default Magento layouts for pricing, name the handle (and so the layout file defining it)  `catalog_product_prices.xml`.

To learn about conventional locations of layouts in Magento application, please refer to XML Layouts for Frontend. <!-- ADDLINK -->

For example, here is the `catalog_product_prices.xml` layout file of the Catalog module. The Catalog module defines the basis for a product entity, so its pricing layout handle defines default values: render classes, templates, price types and adjustments. These values can be overridden by settings for particular product types in the `catalog_product_prices.xml` layout handle of the corresponding module. 

<b><code>app/code/Magento/Catalog/view/base/layout/catalog_product_prices.xml</code></b>
<pre>
&lt;layout&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../Core/etc/layout_single.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\Pricing\Render\RendererPool&quot;&nbsp;name=&quot;render.product.prices&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--Argument&nbsp;name&nbsp;is&nbsp;the&nbsp;name&nbsp;of&nbsp;the&nbsp;product&nbsp;entity&nbsp;for&nbsp;which&nbsp;the&nbsp;settings&nbsp;are&nbsp;configured.&nbsp;For&nbsp;example,&nbsp;bundle,&nbsp;grouped&nbsp;or&nbsp;your&nbsp;custom&nbsp;value&nbsp;if&nbsp;you&nbsp;created&nbsp;a&nbsp;new&nbsp;product&nbsp;type.&nbsp;This&nbsp;name&nbsp;is&nbsp;specified&nbsp;in&nbsp;the&nbsp;product_types.xml&nbsp;config&nbsp;of&nbsp;a&nbsp;module.&nbsp;&nbsp;&nbsp;--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;default&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;How&nbsp;to&nbsp;define&nbsp;the&nbsp;render&nbsp;class&nbsp;for&nbsp;other&nbsp;product&nbsp;types?&nbsp;Replace&nbsp;&quot;default&quot;&nbsp;with&nbsp;product&nbsp;type&nbsp;name?&nbsp;--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;default_render_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Render\PriceBox&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;default_render_template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento_Catalog::product/price/default.phtml&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;default_amount_render_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Pricing\Render\Amount&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;default_amount_render_template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento_Catalog::product/price/amount/default.phtml&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;prices&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;special_price&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;render_template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento_Catalog::product/price/special_price.phtml&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;final_price&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;render_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Catalog\Pricing\Render\FinalPriceBox&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;render_template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento_Catalog::product/price/final_price.phtml&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;adjustments&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;What&nbsp;is&nbsp;&quot;default&quot;&nbsp;&nbsp;here?&nbsp;Can&nbsp;it&nbsp;have&nbsp;different&nbsp;value&nbsp;in&nbsp;handles&nbsp;of&nbsp;other&nbsp;modules?&nbsp;--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;default&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;tax&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;adjustment_render_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Tax\Pricing\Render\Adjustment&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;adjustment_render_template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento_Tax::pricing/adjustment.phtml&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&lt;/layout&gt;
</pre>
Class and templates declarations in the pricing layout handles are based on the following fallback structures.

Price classes fallback:

1. <code>$type&nbsp;.&nbsp;'/prices/'&nbsp;.&nbsp;$priceCode&nbsp;.&nbsp;'/render_class',</code>
2. <code>$type&nbsp;.&nbsp;'/default_render_class',</code>
3. <code>'default/prices/'&nbsp;.&nbsp;$priceCode&nbsp;.&nbsp;'/render_class',</code>
4. <code>'default/default_render_class'</code>

Price templates fallback:

1. <code>$type&nbsp;.&nbsp;'/prices/'&nbsp;.&nbsp;$priceCode&nbsp;.&nbsp;'/render_template',</code>
2. <code>$type&nbsp;.&nbsp;'/default_render_template',</code>
3. <code>'default/prices/'&nbsp;.&nbsp;$priceCode&nbsp;.&nbsp;'/render_template',</code>
4. <code>'default/default_render_template'</code>

Amount templates fallback:

1. `$type . '/prices/' . $priceCode . '/amount_render_template'`,
2. `$type . '/default_amount_render_template'`,
3. `'default/prices/' . $priceCode . '/amount_render_template'`,
4. `'default/default_amount_render_template'`.

Adjustment classes templates:

1. `"{$itemType}/adjustments/{$priceType}"`,
2. `"{$itemType}/adjustments/default"`,
3. `"default/adjustments/{$priceType}"`,
4. `"default/adjustments/default"`.

Where:

* `$type/$itemType` – is for type of a product.
* `$priceCode/$priceType` – is for a price type.


<h2 id="m2devgde-pricelib-ins">Inserting Price Rendering to PHTML Templates</h2>
To invoke the price rendering block, you need to add the following code to a page template:
<pre>
$this->getLayout()>getBlock('product.price.render.default')>render(
    '<price type>',
    $product
    $arguments
);
</pre>

Where,

* `<price type>`: the code of the price type
* `$product`: an instance of Saleable Item, for example `Magento\Catalog\Model\Product`
* `$arguments`: is the array of rendering arguments. 

<h2 id="m2devgde-pricelib-def">Default Price Types</h2>
In the following table you can find the complete list of the price types implemented in the Magento application.

<table>
  <tbody>
    <tr>
      <td>
        <p>
          <strong>Code</strong>
        </p>
      </td>
      <td>
        <p>
          <strong>Description</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>base_price</code>
        </p>
      </td>
      <td>
        <p>The minimal price without adding any adjustments</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>regular_price</code>
        </p>
      </td>
      <td>
        <p>The product price specified in the Price field in the Admin panel</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>special_price</code>
        </p>
      </td>
      <td>
        <p>Special price of the product (set for a certain period of time)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>final_price</code>
        </p>
      </td>
      <td>
        <p>The general price display type for displaying final price after applying all required adjustments. Final price is the minimum of all available prices</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>tier_prices</code>
        </p>
      </td>
      <td>
        <p>Tier prices (different pricing for higher quantities). When renderd, the tier prices block is displayed.</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>msrp_price</code>
        </p>
      </td>
      <td>
        <p>
          <a href="http://en.wikipedia.org/wiki/Suggested_retail_price">MSRP price</a>. When rendered, the "Click for price" link and <a href="http://en.wikipedia.org/wiki/Minimum_advertised_price">MAP</a> popup</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>link_price</code>
        </p>
      </td>
      <td>
        <p>Prices of links in a downloadable product</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>catalog_rule_price</code>
        </p>
      </td>
      <td>
        <p>Price after applying a catalog rule</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>attribute_price</code>
        </p>
      </td>
      <td>
        <p>Configurable product attribute price</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>bundle_selection</code>
        </p>
      </td>
      <td>
        <p>Bundle selection price</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>group_price</code>
        </p>
      </td>
      <td>
        <p>Special price for a specific customer group</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>custom_option_price</code>
        </p>
      </td>
      <td>
        <p>Custom option price</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>bundle_option</code>
        </p>
      </td>
      <td>
        <p>Bundle option price</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>configured_price</code>
        </p>
      </td>
      <td>
        <p>Product price with configured options</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>link_price</code>
        </p>
      </td>
      <td>
        <p>Downloadable product link price</p>
      </td>
    </tr>
  </tbody>
</table>

<h2 id="m2devgde-pricelib-def_rend">Default Rendering Arguments</h2>
<p>In the following table you can find the complete list of the rendering arguments implemented in the Magento application</p>
<table>
  <tbody>
    <tr>
      <td>
        <p>
          <strong>Code</strong>
        </p>
      </td>
      <td>
        <p>
          <strong>Value</strong>
        </p>
      </td>
      <td>
        <p>
          <strong>Description</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>zone </code>
        </p>
      </td>
      <td>
        <p>
          <code>string</code>
        </p>
      </td>
      <td>
        <p>Display Zone code</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>skip_adjustments</code>
        </p>
      </td>
      <td>
        <p>
          <code>boolean</code>
        </p>
      </td>
      <td>
        <p>Whether to display price adjustments</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>display_label</code>
        </p>
      </td>
      <td>
        <p>
          <code>string</code>
        </p>
      </td>
      <td>
        <p>Price label, for example <em>Regular Price</em>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>price_id</code>
        </p>
      </td>
      <td>
        <p>
          <code>string</code>
        </p>
      </td>
      <td>
        <p>Price HTML ID</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>include_container</code>
        </p>
      </td>
      <td>
        <p>
          <code>
            boolean
          </code>
        </p>
      </td>
      <td>
        <p>Whether to use the <code>&lt;span/&gt;</code> container for currency symbol rendering</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>id_suffix</code>
        </p>
      </td>
      <td>
        <p>
          <code>string</code>
        </p>
      </td>
      <td>
        <p>
          Price
          HTML
          ID suffix
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>css_classes</code>
        </p>
      </td>
      <td>
        <p>
          <code>string</code>
        </p>
      </td>
      <td>
        <p>User defined CSS style classes to be added to Price Box root element.</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>display_minimal_price </code>
        </p>
      </td>
      <td>
        <p>
          <code>boolean</code>
        </p>
      </td>
      <td>
        <p>Whether a product minimal price should be displayed when available</p>
      </td>
    </tr>
  </tbody>
</table>


