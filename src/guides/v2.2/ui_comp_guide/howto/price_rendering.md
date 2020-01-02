---
group: ui-components-guide
title: Render prices on the frontend
---

This article shows how templates and UI components work together to render the price for any product listing(e.g. category, widget, etc).

## About Magento price handling

Magento is able to operate with a variety of prices, taxes, and product types.

The following is a short list of Magento prices:

1. Special Price.
1. Tier Price.
1. Grouped Price.
1. Minimum price of composite products
1. Price range of composite products
1. Manufacturer price (MSRP)

Magento represents these prices as price types (e.g. final price, minimum price, maximum price, regular price) and are separate from the actual price in the code.
For example, Special Price is represented by the final price type in the code.

### Magento taxes classification

Magento handles taxes as price adjustments and has 3 generic types of taxes:

*  Tax
*  Fixed Product Tax
*  Tax for Fixed Product Tax

Applying and rendering taxes is complicated.
A product can have more than one price shown and taxes may or may not apply to all of them.

Example of pricing strategy for bundled products:

![]({{ site.baseurl }}/common/images/bundle_prices.png)

## How to render prices with UI Components

For pages such as a product page, use a [form component][form-component].

For pages such as a product listing page or widgets, use a [listing component][listing-component].

For the purposes of this article, we will use a listing component to render simple products with two types of prices, **regular price** and **special price**, and one type of adjustment, **tax**.

### XML configuration

The [XML configuration file][ui-component-declaration] for UI components shows the parent-child relationship between different UI components and tells Magento which template files to use when rendering.

```xml
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    ...
    <dataSource>
        <!--
            DataProvider should retrieve information about product. In our case will be good to retrieve
            formatted prices with currency code, etc... and raw prices.
            So there will be 4 types of prices:
            {
                ...
                final_price: 13,
                regular_price: 28,
                formatted: {
                    final_price: "$ 13",
                    regular_price: "$ 28",
                },
                adjustments: {
                    tax: 12,
                    formatted: {
                        tax: "$ 12"
                    }
                }
                ...
            }

        -->
        <dataProvider class="SomeVendor\SomeModule\Ui\DataProvider\Listing\DataProvider" name="datasource">
            <settings>
                <requestFieldName/>
                <primaryFieldName/>
            </settings>
        </dataProvider>
    </dataSource>
    <columns name="some_columns" component="SomeVendor_SomeComponent/js/product/list/listing">
        <!--
            Price columns is composite component (it has children),
            so it should have possibility to create those children by itself.

            The structure of prices should be:
                -- Price Box (collection of all prices)
                    --- Price (is responsible for specific price information, also price can hold the collection of adjustments)
                        ---- Adjustment
         -->
        <column name="price" component="SomeVendor_SomeComponent/js/product/list/columns/price-box">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="renders" xsi:type="array">
                        <item name="prices" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="special_price" xsi:type="array">
                                    <item name="label" xsi:type="string" translate="true">Special Price</item>
                                    <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/product/list/columns/final-price</item>
                                    <item name="productType" xsi:type="string">simple</item>
                                    <item name="bodyTmpl" xsi:type="string">SomeVendor_SomeComponent/product/price/special_price</item>
                                    <item name="sortOrder" xsi:type="number">1</item>
                                    <!-- Below the collection of all adjustments is listed -->
                                    <item name="children" xsi:type="array">
                                        <item name="tax" xsi:type="array">
                                            <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/price/adjustment</item>
                                        </item>
                                    </item>
                                </item>
                                <item name="regular_price" xsi:type="array">
                                    <item name="label" xsi:type="string" translate="true">Regular Price</item>
                                    <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/product/list/columns/final-price</item>
                                    <item name="bodyTmpl" xsi:type="string">SomeVendor_SomeComponent/product/price/regular_price</item>
                                    <item name="sortOrder" xsi:type="number">2</item>
                                    <item name="productType" xsi:type="string">simple</item>
                                    <item name="children" xsi:type="array">
                                        <item name="tax" xsi:type="array">
                                            <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/price/adjustment</item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </item>
            </argument>
        </column>
    </columns>
</listing>
```

A good example from the Magento codebase is the Catalog module's [`widget_recently_viewed.xml`][widget-recently-viewed-xml] file.

### Price box component

In the following code sample, the `price-box` component aggregates and creates the `price` components for a specific product.

```javascript
/**
 * Retrieve array of prices, that should be rendered for specific product
 *
 * @param {Array} row
 * @return {Array}
 */
getPrices: function (row) {
    var elems = this.elems() ? this.elems() : ko.getObservable(this, 'elems'),
        result;
    this.initPrices(row);
    result = _.filter(elems, function (elem) {
        return elem.productType === row.productType;
    });

    return result;
},

/**
 * Init dynamic price components
 *
 * @param {Array} row
 * @returns {void}
 */
initPrices: function (row) {
    var prices = this.renders.prices;
    _.sortBy(prices, this._comparePrices);

    _.each(prices, function (priceData) {
        if (!priceData.component) {
            return;
        }

        priceData.parent = this.name;
        priceData.provider = this.provider;
        priceData = utils.template(priceData, this);//convert to format compatible with uiLayout
        prices.push(priceData);
    }, this);

    layout(prices); //layout is service (abstract factory), which create tree of Ui Components from JSON
},

/**
 * Sort callback to compare prices by sort order
 *
 * @param {Number} firstPrice
 * @param {Number} secondPrice
 * @returns {Number}
 * @private
 */
_comparePrices: function (firstPrice, secondPrice) {
    if (firstPrice.sortOrder < secondPrice.sortOrder) {
        return -1;
    }

    if (firstPrice.sortOrder > secondPrice.sortOrder) {
        return 1;
    }

    return 0;
}
```

The preceding code sample is based on the Catalog module's [`price-box` component][price-box].

### Price component

In our example, each price is configured to have its own template, but they all share a common price component called `final-price`.
This component is defined in the following code sample:

```javascript
/**
 * Retrieve specific template
 *
 * @returns {String}
 */
getBody: function () {
    return this.bodyTmpl;
},

/**
 * Check if product has special price.
 *
 * @param {Object} row
 * @return {HTMLElement} special price html
 */
hasSpecialPrice: function (row) {
    return row['price_info']['regular_price'] > row['price_info']['final_price'];
},

/**
 * Get product regular price.
 *
 * @param {Object} row
 * @return {HTMLElement} regular price html
 */
getRegularPrice: function (row) {
    return row['price_info']['formatted']['regular_price'];
},

/**
 * Get product final price.
 *
 * @param {Object} row
 * @return {HTMLElement} final price html
 */
getPrice: function (row) {
    return row['price_info']['formatted']['final_price'];
},

/**
 * Get all price adjustments.
 *
 * @returns {Object}
 */
getAdjustments: function () {
    var adjustments = this.elems();

    _.each(adjustments, function (adjustment) {
        adjustment.source = this.source;
    }, this);

    return adjustments;
}
```

This code sample is based on the Catalog module's [`final-price` component][final-price].

### Price template

The following code sample is for the special price template.
It calls the `hasSpecialPrice` function to check if a special price exists for a product.

If a product has a special price, it calls `getPrice` to get the value and renders any adjustments configured for the price.

```html
<if args="isSalable($row()) && hasSpecialPrice($row())">
    <span class="special-price">
        <span class="price-container">
            <span if="label"
                  class="price-label"
                  text="label"/>

            <span class="price-wrapper"
                  css="priceWrapperCssClasses"
                  attr="priceWrapperAttr"
                  data-price-amount=""
                  data-price-type="finalPrice"
                  html="getPrice($row())"/>

            <each args="data: getAdjustments(), as: '$adj'">
                <render args="$adj.getBody()"/>
            </each>
        </span>
    </span>
</if>
```

This example is based on the [`special_price.html` template file][special-price-html] for Magento Catalog.

### Tax template

The following is sample template code that is rendered for the tax adjustment component:

```html
<if args="displayBothPrices()">
    <span class="price-wrapper price-excluding-tax"
          attr="'data-label': $t('Excl. Tax')"
          data-price-amount=""
          data-price-type="basePrice"
          html="getTax($row())"><!-- You can implement self::getTax function how you want -->
    </span>
</if>
```

## Related Topics

*  [Form component][form-component]
*  [Listing component][listing-component]
*  [Declaring UI Components][ui-component-declaration]

[form-component]: {{ page.baseurl }}/ui_comp_guide/components/ui-form.html
[listing-component]: {{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html
[special-price-html]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/base/web/template/product/price/special_price.html
[widget-recently-viewed-xml]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/frontend/ui_component/widget_recently_viewed.xml
[ui-component-declaration]: {{ page.baseurl }}/ui_comp_guide/howto/new_component_declaration.html
[price-box]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/base/web/js/product/list/columns/price-box.js
[final-price]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/base/web/js/product/list/columns/final-price.js
