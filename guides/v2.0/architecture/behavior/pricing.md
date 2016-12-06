---
layout: default
group:
subgroup:
title: Using Magento Pricing library
menu_title: Using Magento Pricing library
menu_order:
version: 2.0
github_link: architecture/behavior/pricing.md
redirect_from: /guides/v1.0/architecture/behavior/pricing.html
---

## Magento Pricing library: implementation and usage {#m2devgde-pricelib-intro}
{:.no_toc}

This topic discusses how to use the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing" target="_blank">Magento\Framework\Pricing</a> library in your module and how to add price rendering to page templates and layouts.

* TOC
{:toc}

## Use the pricing library in your module {#m2devgde-pricelib-integrate}

To use the pricing library in a module:

1. Create price calculating and rendering logic extending and implementing library interfaces.

2. Add prices and adjustments in the <code>di.xml</code> of a module.

3. Prepare a layout: create a pricing layout handle (or use the default Magento one) and add a price rendering block to page layouts.

4. Add price rendering to page templates.

Each step is described in the following paragraphs.

If all you need is to customize the way prices are displayed on your pages, skip steps 1 and 2 and proceed directly to layout and template tasks.

## Implement price calculation and rendering {#m2devgde-pricelib-custom}

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
        <p>Saleable entity</p>
      </td>
      <td>
        <p>Implements <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Object/SaleableInterface.php" target="_blank">Magento\Framework\Pricing\Object\SaleableInterface</a>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>PriceType model</p>
      </td>
      <td>
        <p>Extends <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Price/AbstractPrice.php" target="_blank">Magento\Framework\Pricing\Price\AbstractPrice</a>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>Amount model</p>
      </td>
      <td>
        <p>Implements <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Amount/AmountInterface.php" target="_blank">Magento\Framework\Pricing\Amount\AmountInterface</a>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>Adjustment model</p>
      </td>
      <td>
        <p>Implements <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Pricing/Adjustment/AdjustmentInterface.php" target="_blank">Magento\Framework\Pricing\Adjustment\AdjustmentInterface</a>
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Add a custom price type {#m2devgde-pricelib-custom-price}

To add a custom price type, create a corresponding class extending `AbstractPrice`.

## Configure prices and adjustments {#m2devgde-pricelib-di}

To specify the price types which you plan to use for the corresponding product, add the price type codes to <code>Price\Pool</code> in the module's <code>di.xml</code> file.

An example of Catalog module price configuration in its <a href="{{ site.mage2000url }}app/code/Magento/Catalog/etc/di.xml" target="_blank">di.xml</a>.

Price type codes are discussed in <a href="#m2devgde-pricelib-def">Default price types</a>.

### Specify adjustments for a product {#m2devgde-pricelib-adj}

To specify what adjustments will be available for a product, add the corresponding adjustments to <code>AdjustmentPool</code> in the module's <code>di.xml</code>. An example of Catalog module price adjustments is shown in <a href="{{ site.mage2000url }}app/code/Magento/Catalog/etc/di.xml" target="_blank">di.xml</a>.

[//]: # "Steve removed this topic that the link leads to for dev beta because it's incomplete: To learn more about dependency injection files structure, see <a href="{{page.baseurl}}extension-dev-guide/depend-inj.html">Dependency injection</a>."

## Add price rendering to a layout {#m2devgde-pricelib-custom-price-render}

`Magento\Framework\Pricing\Render` is the entry point of Pricing. That is, to add Pricing blocks to your pages, you need to add a `Magento\Framework\Pricing\Render` block in the layout files of your pages.

For example:

<script src="https://gist.github.com/xcomSteveJohnson/08821ad203003c6eda7a.js"></script>

The value of the <code>price_render_handle</code> argument is the name of the pricing layout handle, where price displaying configuration is set. For more details about pricing layout handle see the following paragraph.

## Configure price display options {#m2devgde-pricelib-custom-price-config}

To configure price blocks displaying in layouts, you need to create a separate layout handle for price rendering.

The name of the layout handle is arbitrary. But if you want to use also default Magento layouts for pricing, name the handle (and so the layout file defining it) `catalog_product_prices.xml`.

To learn about locations of layouts in Magento application, see <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>.

For example, the Catalog module's <a href="{{ site.mage2000url }}app/code/Magento/Catalog/view/base/layout/catalog_product_prices.xml" target="_blank">catalog_product_prices.xml</a> defines the basis for a product entity, so its pricing layout handle defines default values: render classes, templates, price types and adjustments. These values can be overridden by settings for particular product types in the `catalog_product_prices.xml` layout handle of the corresponding module.

Class and template declarations in the pricing layout handles are based on the following fallback structures.

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

## Insert price rendering into PHTML templates {#m2devgde-pricelib-ins}

To invoke the price rendering block, you need to add the following code to a page template:
<pre>
$this->getLayout()->getBlock('product.price.render.default')->render(
    '&lt;price type>',
    $product
    $arguments
);
</pre>

where:

* `<price type>`: the code of the price type

* `$product`: an instance of Saleable Item, for example `Magento\Catalog\Model\Product`

* `$arguments`: is the array of rendering arguments.

## Default price types {#m2devgde-pricelib-def}

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
        <p>Tier prices (different pricing for higher quantities). When rendered, the tier prices block is displayed.</p>
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
          <a href="http://en.wikipedia.org/wiki/Suggested_retail_price" target="_blank">MSRP price</a>. When rendered, the "Click for price" link and <a href="http://en.wikipedia.org/wiki/Minimum_advertised_price" target="_blank">MAP</a> pop-up</p>
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

## Default rendering arguments {#m2devgde-pricelib-def_rend}

In the following table you can find the complete list of the rendering arguments implemented in the Magento application.

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
