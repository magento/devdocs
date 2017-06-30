---
layout: default
group: UI_Components_guide
subgroup: how tos
title: Render prices on frontend with Ui component
menu_title: Render prices on frontend with Ui component
menu_order: 1
version: 2.2
github_link: ui_comp_guide/howto/price_rendering.md
---

## Magento price classification

This article is about product pricing rendering. It discover how to render price for any product listing (category, widget, etc...) with help of Ui Component.
Also article is about creating parent-child relationships between ui components and creating ui components dynamicly on frontend side.
Mechanism of prices in Magento is a bit complicated. This is due to high variety of 
prices, taxes and product types, Magento can operate with. Here is the short list of Magento prices:

#### Short List of Magento Prices
- Special Price. 
- Tier Price. 
- Grouped Price.
- Minimum price of composite products
- Price range of composite products
- Manufacturer price (MSRP)

Those prices are represented with a lot of price types, that are used in Magento internally (e.g. final price, minimum price, maximum price, regular price.) and are apart from, prices listed before,
the code represeyntation of the prices we have. For instance, Special Price is represented by final price type in the code.

## Magento taxes classification

Magento has 3 generic types of taxes: Tax, Fixed Product Tax and Tax for Fixed Product Tax.
Applying and rendering taxes is complicated, because one product can have few prices shown, and sometimes 
taxes should be applied to all of them, sometimes - no (for instance, taxes for regular price should be omitted).

Example of pricing strategy for bundle product:
<img src="{{ site.baseurl }}common/images/bundle_prices.png" />

Taxes are kind of adjustments in Magento.

## How to render prices with Ui Component

First of all, form or listing component should be created.
For pages, like product page this should be _form_ component, and for pages like product listing, widgets - _listing_ component.
Lets consider price rendering on example of listing component.
Lets assume we have only simple products, with 2 types of prices: **regular price** and **special price**, and with one type of adjustments - **tax**.
Adjustments should be applied only to one price. If we have special price, it should be it, otherwise - regular price.

**Listing example**:

{%highlight xml%}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    ...
    <datasource>
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
    </datasource>
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
{%endhighlight%}

The main point is that we aggregate prices in price-box component, and then try to create prices for specific kind of product.
Note that in case of listing we can have few different types of products. And we should handle this.
All prices will be created, but on template level we can ban some prices, if they do not match expectations:
For example, if product do not have special price, we can just ignore special price.

Lets see at the code of price-box component:

**Price box component:**

{%highlight javascript%}
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
        },
    }
{%endhighlight%}

Obviously we also have price-box template, which call <code>getPrices()</code> method.
After calling those method standard Magento js <code>uiLayout</code> create prices, and put them into the cache.
Each price has its own template and common component, lets see the common component code:

**Price component:**

{%highlight javascript%}
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
{%endhighlight%}

How template it looks like?

**Price template:**

{%highlight html%}
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
{%endhighlight%}

So template check whether special price exists, and if yes, it loop through all adjustments that belongs to this price (You can configure them in xml, mentioned above).
Ordinarily in your adjustment template you have access to row data and can fetch product taxes as you want.

**Tax template**:
{%highlight html%}
    <if args="displayBothPrices()">
        <span class="price-wrapper price-excluding-tax"
              attr="'data-label': $t('Excl. Tax')"
              data-price-amount=""
              data-price-type="basePrice"
              html="getTax($row())"><!-- You can implement self::getTax function how you want -->
        </span>
    </if>
{%endhighlight%}

Actually, Magento has example of product prices rendering. So it is acceptable, just to reuse them in your own ui Component. 
Look into: **widget_recently_viewed.xml** and **widget_recently_compared.xml** ui components to find how it works and to reuse price rendering.
