---

group: release-notes
title: Magento Open Source 2.2.9 Release Notes

---

*Patch code and release notes published on June 25 2019.*

We are pleased to present Magento Open Source 2.2.9. This release includes 75 critical enhancements to product security, over 100 core code fixes and enhancements, and  over 200 community-submitted pull requests.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release is focused on substantial security enhancements:

*  **75 security enhancements** that help close cross-site scripting (XSS), remote code execution (RCE), and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.2-2.2.9-and-2.1.18-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.2.9) have been ported to 2.3.2, 2.1.18, 1.14.4.2, and 1.9.4.2, as appropriate.

*  **Google reCAPTCHA module for PayPal Payflow checkout**. The new PaypalRecaptcha module adds Google reCAPTCHA and CAPTCHA to the Payflow Pro checkout form.  This enhanced functionality has been added in response to malicious targeting of Magento deployments that implement Payflow Pro. Configuration information can be found in [Google reCAPTCHA](https://docs.magento.com/m2/ee/user_guide/stores/security-google-recaptcha.html).  <!--- MC-15427-->

### Infrastructure improvements

This release contains 150 enhancements to core quality, which improve the quality of the Framework and these modules: `Catalog`, `Sales`, `Checkout/One Page Checkout`,  `UrlRewrite`, `Customer/Customers`, and `UI`. Here are some additional core enhancements:

*  **Braintree payment method is now supported for checkout with multiple addresses**. Previously, you could not use Braintree and Braintree PayPal when checking out an order that was being shipped to multiple addresses. <!--- MAGETWO-98424-->

*  **The CGI URL gateway in UPS module has been updated from HTTP to HTTPS**.The CGI URL gateway endpoint in the UPS module has been updated  from HTTP to HTTPS in response to the disablement of the HTTP gateway by UPS in mid-2019. See [Magento User Guide](https://docs.magento.com/m2/ee/user_guide/shipping/ups.html) for a discussion of using the UPS shipment method. Shipping method configuration settings are described in the [Shipping methods](https://docs.magento.com/m2/ee/user_guide/configuration/sales/shipping-methods.html#UPS). <!--- MAGETWO-98947-->

*  **Google chart API updated to the Image-Charts**. Magento now uses the Image-Charts free service to render static charts in Admin dashboards. Earlier deployments used Google Image Charts, which was deprecated in 2012 and turned off on [March 18, 2019](https://developers.google.com/chart/image/docs/making_charts). <!--- MAGETWO-98833-->

## Functional fixes

In addition to security enhancements, this release contains the following functional fixes.

### Installation, setup, and deployment

<!-- MAGETWO-98860 -->

*  Magento no longer throws an error when executing `setup:static-content:deploy` in parallel mode if theme or locale deployment takes more than 400 seconds. Previously, Magento threw this error under these conditions, `2436; Status: 0`.

<!-- MAGETWO-76424 -->

*  Magento no longer displays an extraneous blank option in the country drop-down menu on the Country Options page for store configuration settings (**Stores** > **Settings** > **Configuration** > **General** > **Country Options**).

<!-- ENGCOM-4741 -->

*  Magento no longer throws an error when executing `setup:static-content:deploy` in parallel mode if theme or locale deployment takes more than 400 seconds. Previously, Magento threw the following error under these conditions: `2436; Status: 0`. *Fix submitted by David Alger in pull request [22282](https://github.com/magento/magento2/pull/22282)*. [GitHub-15090](https://github.com/magento/magento2/issues/15090)

<!-- ENGCOM-4829 -->

*  All fields are now hidden with appropriate dependencies as assigned in the backup configuration settings. *Fix submitted by Keyur Kanani in pull request [22499](https://github.com/magento/magento2/pull/22499)*. [GitHub-22474](https://github.com/magento/magento2/issues/22474)

<!-- ENGCOM-4791 -->

*  Magento now sets the `id_prefix` option on prefix cache keys for the cache front end during installation. If this option is not set, Magento uses the first 12 bits of the md5 hash of the absolute path to the Magento `app/etc` directory. But if this value is not exactly the same on all web servers, cache invalidation will not work. *Fix submitted by Cash and Carry Furniture in pull request [22439](https://github.com/magento/magento2/pull/22439)*. [GitHub-15828](https://github.com/magento/magento2/issues/15828)

### Backend

<!-- ENGCOM-4517 -->

*  The JavaScript `minify` field on **Stores** > **Configuration** > **Advanced** > **Developer** is now disabled as expected. *Fix submitted by Ananth Iyer in pull request [21800](https://github.com/magento/magento2/pull/21800)*. [GitHub-21384](https://github.com/magento/magento2/issues/21384)

<!-- ENGCOM-4435 -->

*  Magento now displays the correct date in the Admin for scheduled design changes. Previously, Magento displayed the current date instead of the scheduled date on **Content** > **Design** > **Schedule**. *Fix submitted by Pratik Oza in pull request [21568](https://github.com/magento/magento2/pull/21568)*. [GitHub-21425](https://github.com/magento/magento2/issues/21425)

<!-- ENGCOM-4121 -->

*  Fixed alignment issue of time fields in **Admin** > **Configuration** > **General** > **Advanced Reporting** in tablet landscape view.  *Fix submitted by Amol Chaudhari in pull request [20602](https://github.com/magento/magento2/pull/20602)*. [GitHub-20580](https://github.com/magento/magento2/issues/20580)

<!-- ENGCOM-4142 -->

*  Magento now displays a success message when you create an order through the Admin and the **create shipment** and **Email copy of invoice** checkboxes are checked. *Fix submitted by Govind Sharma in pull request [20776](https://github.com/magento/magento2/pull/20776)*. [GitHub-19942](https://github.com/magento/magento2/issues/19942)

<!-- ENGCOM-4229 -->

*  Fixed alignment of reload CAPTCHA icon on the Admin  login  page. *Fix submitted by Pratik Oza in pull request [21162](https://github.com/magento/magento2/pull/21162)*. [GitHub-20911](https://github.com/magento/magento2/issues/20911)

<!-- ENGCOM-4768 -->

*  The web setup wizard now uses the correct base path to check if the setup folder exists. Previously, the wizard checked `base/data/web/magento2/pubsetup` instead of `/data/web/magento2/pub/setup`. *Fix submitted by JeroenVanLeusden in pull request [22369](https://github.com/magento/magento2/pull/22369)*. [GitHub-11892](https://github.com/magento/magento2/issues/11892), [GitHub-7623](https://github.com/magento/magento2/issues/7623)

### Bundle products

<!-- ENGCOM-4041 -->

*  Fixed alignment of the bundle product radio button on the Product page when you click **Customize** and **Add to cart**. *Fix submitted by Amol Chaudhari in pull request [20743](https://github.com/magento/magento2/pull/20743)*. [GitHub-20518](https://github.com/magento/magento2/issues/20518)

<!-- ENGCOM-4557 -->

*  Magento now calculates and displays the correct tier price for bundle products. *Fix submitted by Amol Chaudhari in pull request [21844](https://github.com/magento/magento2/pull/21844)*. [GitHub-21467](https://github.com/magento/magento2/issues/21467)

<!-- ENGCOM-4143 -->

*  Fixed misalignment of the **Add to cart** button on the bundle product page in portrait orientation in mobile view.  *Fix submitted by Amol Chaudhari in pull request [20554](https://github.com/magento/magento2/pull/20554)*. [GitHub-20193](https://github.com/magento/magento2/issues/20193)

<!-- MAGETWO-97226 -->

*  Magento now displays the correct price on the storefront  for products whose prices have been updated in a shared catalog. Previously, Magento did not update storefront prices when a price in the shared catalog was updated.

### Cache

<!-- ENGCOM-4841 -->

*  CMS block cache keys now contain the appropriate store ID in deployments with multiple store views. Previously, Magento always loaded the cached version of the block for the first store view. *Fix submitted by Amol Chaudhari in pull request [22534](https://github.com/magento/magento2/pull/22534)*. [GitHub-22299](https://github.com/magento/magento2/issues/22299)

### Catalog

<!-- MAGETWO-94426 -->

*  Dates in the Admin are now formatted correctly for French locales (dd/mm/yyyy).

<!-- MAGETWO-74081  -->

*  You can now use the term _configurable_ as a group name in attribute sets. Previously, Magento threw an error when you used this term as a group name and subsequently tried to add or edit a product. [GitHub-6123](https://github.com/magento/magento2/issues/6123)

<!-- MAGETWO-98626 -->

*  URLS in Arabic now resolve as expected. Previously, when you created a URL rewrite in Arabic, the browser returned a 404.

<!-- MAGETWO-74455 -->

*  Magento now creates unique values for product attributes as expected when you duplicate a product. Previously, Magento duplicated a product, but both products had the same attribute values.

<!-- MAGETWO-74037 -->

*  During product creation, Magento now displays default attribute values from the **Admin** column on the Manage Options (Values of Your Attribute) window when creating options. Previously, Magento displayed attribute options from the default storeview. [GitHub-6507](https://github.com/magento/magento2/issues/6507)

<!-- MAGETWO-73157 -->

*  Magento now displays informative messages when you create a new product and try to set its SKU to one that is assigned to an existing product. Previously, under these circumstances, Magento displayed an informative message, but also imported the newly created product's configurable options to the older product. [GitHub-9457](https://github.com/magento/magento2/issues/9457)

<!-- MAGETWO-72650 -->

*  Tax recalculation has been moved out of the transaction into the background for negotiable quotes running in an environment where B2B is deployed. This improves performance and helps avoid server timeouts.

<!-- MAGETWO-97472 -->

*  Catalog Permission rules that are set for a category now remain applied when a new category is created at the same level.

<!-- MAGETWO-97405 -->

*  You can now use storeview-level attributes to filter products on the products list.

<!-- MAGETWO-97400 -->

*  The selected store scope view now affects the categories displayed on the product edit page's category tree.

<!-- MAGETWO-97973 -->

*  Magento now calculates and displays the correct tier price for bundle products.

<!-- MAGETWO-95616 -->

*  Magento no longer permits you to change an attribute set if the new set does not have equivalent attributes as the original set. Previously, Magento sometimes threw this exception when you tried to change attribute sets: `Attempt to load value of nonexistent EAV attribute.`

<!-- MAGETWO-97380  -->

*  You can now add grouped products to the shopping cart as expected when category permissions are enabled.

<!-- MAGETWO-97425 -->

*  Magento does not display the **Country of Manufacture** field under the More Information tab of the product page when this value is empty.

<!-- MAGETWO-98470 -->

*  Scope assigned to prices in Catalog Price Scope (set in **Configuration** > **Price**) are now maintained when price is set to empty. Previously, you could not leave  special prices empty.

<!-- MAGETWO-95020 -->

*  Clicking on a store's root category now causes only that root category to expand. Previously, Magento expanded all other Root Categories into the top-level categories.

<!-- ENGCOM-3697 -->

*  Magento now displays breadcrumbs in proper format. Previously, subcategories did not appear in breadcrumbs. *Fix submitted by Brandon Brown in pull request [19760](https://github.com/magento/magento2/pull/19760)*. [GitHub-7967](https://github.com/magento/magento2/issues/7967)

<!-- ENGCOM-4245 -->

*  Fixed misalignment of **Schedule Update From** field on the Admin category page when displayed in a browser set to 768 x 1147 resolution. *Fix submitted by Amol Chaudhari in pull request [20404](https://github.com/magento/magento2/pull/20404)*. [GitHub-20402](https://github.com/magento/magento2/issues/20402)

<!-- ENGCOM-4030  -->

*  Fixed misalignment of product page tab content in mobile view. *Fix submitted by Amol Chaudhari in pull request [20476](https://github.com/magento/magento2/pull/20476)*. [GitHub-20468](https://github.com/magento/magento2/issues/20468)

<!-- ENGCOM-4254 -->

*  Magento now displays currency symbols as expected for products in the Cost column of the Admin catalog list.  *Fix submitted by Pratik Oza in pull request [21157](https://github.com/magento/magento2/pull/21157)*. [GitHub-20906](https://github.com/magento/magento2/issues/20906)

<!-- ENGCOM-4236 -->

*  Corrected the behavior of the Option's New Option Type drop-down menu for customizable options.  *Fix submitted by Pratik Oza in pull request [21159](https://github.com/magento/magento2/pull/21159)*. [GitHub-20989](https://github.com/magento/magento2/issues/20989)

<!-- ENGCOM-4292 -->

*  Magento now correctly calculates multi-currency custom option prices when the option price type is `percentage`. Previously, when the multi-currency custom option was set to a percentage price type, Magento calculated the price  wrong. *Fix submitted by Amol Chaudhari in pull request [21263](https://github.com/magento/magento2/pull/21263)*. [GitHub-19561](https://github.com/magento/magento2/issues/19561)

<!-- ENGCOM-4290 -->

*  You can now create a new product with a special price. Previously, when you saved the newly created product, Magento threw this error, `Special price date from" Failed to parse time string`.  *Fix submitted by Milan Osztromok in pull request [21273](https://github.com/magento/magento2/pull/21273)*. [GitHub-18158](https://github.com/magento/magento2/issues/18158)

<!-- ENGCOM-4327 -->

*  The `product_type` attribute now contains the correct value in the CVS file that is created during export after you create a `custom type_id` attribute. *Fix submitted by Amol Chaudhari in pull request [21208](https://github.com/magento/magento2/pull/21208)*. [GitHub-19891](https://github.com/magento/magento2/issues/19891)

<!-- ENGCOM-4340 -->

*  A  product's  `product:price:amount` metatag now contains the price converted to the appropriate base currency in multistore deployments with stores that use different base currencies. Previously, price in this metatag was always calculated in the base currency. *Fix submitted by Pratik Oza in pull request [21202](https://github.com/magento/magento2/pull/21202)*. [GitHub-20010](https://github.com/magento/magento2/issues/20010)

<!-- ENGCOM-4429 -->

*  Magento no longer adds tax twice when adding a new product with tier pricing. Previously, `MinimalTierPriceCalculator`  applied the tax twice when calculating the minimal price. *Fix submitted by Eduard Chitoraga in pull request [21527](https://github.com/magento/magento2/pull/21527)*. [GitHub-21383](https://github.com/magento/magento2/issues/21383)

<!-- ENGCOM-4447 -->

*  The  `product_types_base.xsd`, `product_options.xsd`, `import.xsd`, `export.xsd` files  now allow modules with names that contain  numbers. *Fix submitted by Lisovyi Yevhenii in pull request [21598](https://github.com/magento/magento2/pull/21598)*. [GitHub-14882](https://github.com/magento/magento2/issues/14882)

<!-- ENGCOM-4182 -->

*  Magento now correctly displays the mass product update attributes page when **Minimum Qty Allowed in Shopping Cart** is set. Previously, Magento displayed this exception: `Exception #0 (Exception): Warning: A non-numeric value encountered in /var/www/html/vendor/magento/module-catalog/view/adminhtml/templates/catalog/product/edit/action/inventory.phtml on line 109 is present`. *Fix submitted by Nazar Klovanych in pull request [21080](https://github.com/magento/magento2/pull/21080)*. [GitHub-21073](https://github.com/magento/magento2/issues/21073)

<!-- ENGCOM-4271 -->

*  You can now open a product's details page from the compare products side bar. *Fix submitted by Eduard Chitoraga in pull request [21238](https://github.com/magento/magento2/pull/21238)*. [GitHub-21101](https://github.com/magento/magento2/issues/21101)

<!-- ENGCOM-4020 -->

*  Magento no longer increments stock for products for which stock managing has been disabled. Previously, Magento increased the product quantity count when an order failed if **Manage Stock** was disabled. *Fix submitted by Amol Chaudhari in pull request [20644](https://github.com/magento/magento2/pull/20644)*. [GitHub-19482](https://github.com/magento/magento2/issues/19482)

<!-- ENGCOM-4514 -->

*  We have replaced the incorrect proxy `resourceStock` argument for the `\Magento\CatalogInventory\Observer\UpdateItemsStockUponConfigChangeObserver` in `di.xml`. (Specifically, `<argument name="resourceStock" xsi:type="object">Magento\CatalogInventory\Model\ResourceModel\Stock\Proxy</argument>`

   with the following argument:

     `<argument name="resourceStockItem" xsi:type="object">Magento\CatalogInventory\Model\ResourceModel\Stock\Item\Proxy</argument>`. ) *Fix submitted by VitaliyBoyko in pull request [21793](https://github.com/magento/magento2/pull/21793)*. [GitHub-167](https://github.com/magento/magento2/issues/167)

<!-- MAGETWO-98794 -->

*  You can now add a product to an order by using the **Add products by SKU** button. Previously, when you tried to add a product this way, Magento displayed this message, `The SKU was not found in the catalog.

### Cart and checkout

<!-- MAGETWO-98569 -->

*  Magento now persists the shipping quote in the shopping cart for guest customers when **Persistent Shopping Cart** is enabled.

<!-- MAGETWO-98365 -->

*  Magento now applies the correct tier price for a product after a customer who is assigned to a customer group logs in after first adding items to their cart as a guest. Previously, Magento did not apply the tier price after the customer logged in.

<!-- MAGETWO-97950 -->

*  Magento now correctly updates the minicart if a selected product is disabled during the shopping session.

<!-- ENGCOM-4013, 4283 -->

*  Corrected misalignment of the order item details label and subtotal label  in mobile view. *Fix submitted by Rajneesh Gupta in pull request [21243](https://github.com/magento/magento2/pull/21243)*. [GitHub-20299](https://github.com/magento/magento2/issues/20299)

<!-- ENGCOM-4127 -->

*  The title of the shipping method no longer overlaps with **Edit** on the checkout page. *Fix submitted by Amol Chaudhari in pull request [20443](https://github.com/magento/magento2/pull/20443)*. [GitHub-20427](https://github.com/magento/magento2/issues/20427)

<!-- ENGCOM-4043 -->

*  Fixed issue displaying numbers that exceed two digits in the **Qty:** box of the **Proceed to Checkout** pop up. *Fix submitted by Amol Chaudhari in pull request [20738](https://github.com/magento/magento2/pull/20738)*. [GitHub-20611](https://github.com/magento/magento2/issues/20611)

<!-- ENGCOM-4133-->

*  Fixed problems with the display of the tooltip drop-down pointer on the checkout page in tablet view. *Fix submitted by Amol Chaudhari in pull request [20490](https://github.com/magento/magento2/pull/20490)*. [GitHub-20487](https://github.com/magento/magento2/issues/20487)

<!-- ENGCOM-4205 -->

*  Fixed misalignment of the **View and Edit Cart** link in the mini cart. *Fix submitted by Rajneesh Gupta in pull request [21124](https://github.com/magento/magento2/pull/21124)*. [GitHub-20382](https://github.com/magento/magento2/issues/20382)

<!-- ENGCOM-4390 -->

*  Magento now persists customer-related values after a guest customer converts her account to a customer account after checkout. Previously, Magento saved these customer-related values as null during account creation after checkout. *Fix submitted by Nazar Klovanych in pull request [21325](https://github.com/magento/magento2/pull/21325)*. [GitHub-19166](https://github.com/magento/magento2/issues/19166)

<!-- ENGCOM-4421 -->

*  Magento now displays an error message as expected when a customer clicks on **Add to cart**  without selecting at least one product from the recently ordered  product list. *Fix submitted by Prince Patel in pull request [21538](https://github.com/magento/magento2/pull/21538)*. [GitHub-21398](https://github.com/magento/magento2/issues/21398)

<!-- ENGCOM-4436  -->

*  The **Cancel** button on the checkout page now works as expected. *Fix submitted by Pratik Oza in pull request [21569](https://github.com/magento/magento2/pull/21569)*. [GitHub-21327](https://github.com/magento/magento2/issues/21327)

<!-- ENGCOM-4479 -->

*  Magento no longer runs `UpdateItemQty` validation before a Clear Shopping Cart action is triggered. Previously, due to the timing of this validation, you could not empty the shopping cart if any product in the cart was out-of-stock. *Fix submitted by Wojtek Naruniec in pull request [21528](https://github.com/magento/magento2/pull/21528)*. [GitHub-21294](https://github.com/magento/magento2/issues/21294)

<!-- ENGCOM-4369 -->

*  Magento no longer displays the infinite loading indicator when you proceed to check out. Previously, Magento displayed the loading indicator, and threw this JavaScript error,  `Cannot read property 'quoteData' of undefined`. *Fix submitted by Amol Chaudhari in pull request [21432](https://github.com/magento/magento2/pull/21432)*. [GitHub-14412](https://github.com/magento/magento2/issues/14412)

<!-- ENGCOM-4630 -->

*  Magento no longer empties the shopping cart when you click **Enter** after changing a product's quantity. *Fix submitted by Leandro F. L. in pull request [21512](https://github.com/magento/magento2/pull/21512)*. [GitHub-21499](https://github.com/magento/magento2/issues/21499)

<!-- ENGCOM-4622 -->

*  Screen readers can now identify the `label` elements that are linked to  `input` fields for street address fields on the checkout page. Previously, screen readers could not identify these fields because the elements were not populated.  *Fix submitted by Amol Chaudhari in pull request [22070](https://github.com/magento/magento2/pull/22070)*. [GitHub-10893](https://github.com/magento/magento2/issues/10893)

<!-- MAGETWO-96375 -->

*  Magento now factors in cart price rule discounts before assessing whether free shipping order minimums have been reached for an order. Previously, Magento assessed free shipping before  discounts were applied.

<!-- ENGCOM-4823 -->

*  Magento now increments product quantity correctly when you add products to your cart first as a guest user, and then logged in. Previously, Magento added items separately instead. *Fix submitted by Amol Chaudhari in pull request [22378](https://github.com/magento/magento2/pull/22378)*. [GitHub-21375](https://github.com/magento/magento2/issues/21375)

<!-- ENGCOM-4477 -->

*  When you configure a price rule for configurable products with swatches, Magento now shows the special price for products that match the price rule. Previously, Magento displayed both the old price and the special price for the matching configurable products. *Fix submitted by Pratik Oza in pull request [21695](https://github.com/magento/magento2/pull/21695)*. [GitHub-19276](https://github.com/magento/magento2/issues/19276)

<!-- ENGCOM-4253 -->

*  **Meta Keywords** and **Meta Description** are now defined as textarea throughout product forms. *Fix submitted by Amol Chaudhari in pull request [21199](https://github.com/magento/magento2/pull/21199)*. [GitHub-20555](https://github.com/magento/magento2/issues/20555)

<!-- ENGCOM-4677 -->

*  The Close button on the mini cart no longer overlaps with the shipping section when the checkout page is opened on a mobile device. *Fix submitted by Pratik Oza in pull request [20844](https://github.com/magento/magento2/pull/20844)*. [GitHub-20614](https://github.com/magento/magento2/issues/20614)

### Cart Price rule

<!-- ENGCOM-4540 -->

*  Added a new condition type Subtotal (Excl. Tax) to configure discounts that exclude the sales tax when calculating the subtotal on a Total Amount cart rule.  See [Price rules](https://docs.magento.com/m2/ee/user_guide/marketing/price-rule-discount-minimum-purchase.html). *Fix submitted by Eduard Chitoraga in pull request [21845](https://github.com/magento/magento2/pull/21845)*. [GitHub-12396](https://github.com/magento/magento2/issues/12396)

### Catalog rule

<!-- MAGETWO-98679 -->

*  Catalog rules are applied as expected after a customer uses Visual Merchandiser  to drag and drop products in a category. Previously, discounts that were applied to products through a catalog rule were dropped after the product was dragged and dropped.

### Checkout agreements

<!-- ENGCOM-3989 -->

*  Magento no longer throws SQL errors when table prefixes are used. *Fix submitted by Vishal Gelani in pull request [18866](https://github.com/magento/magento2/pull/18866)*. [GitHub-18357](https://github.com/magento/magento2/issues/18357), [GitHub-18954](https://github.com/magento/magento2/issues/18954)

### Clean up and minor refactoring

<!-- ENGCOM-4304 -->

*  Removed excessive white space from the top of CMS pages when displayed in mobile view. *Fix submitted by Amol Chaudhari in pull request [20781](https://github.com/magento/magento2/pull/20781)*. [GitHub-20755](https://github.com/magento/magento2/issues/20755)

<!-- ENGCOM- 4123-->

*  Corrected rendering of the apply discount code field in the Tab portrait view of the shopping cart. *Fix submitted by Amol Chaudhari in pull request [20586](https://github.com/magento/magento2/pull/20586)*. [GitHub-20278](https://github.com/magento/magento2/issues/20278)

<!-- ENGCOM-4204 -->

*  Added missing bottom border to the list of customizable options on the Product page when accessed from the Admin. *Fix submitted by Eduard Chitoraga in pull request [20821](https://github.com/magento/magento2/pull/20821)*. [GitHub-20497](https://github.com/magento/magento2/issues/20497)

<!-- ENGCOM-4230 -->

*  Fixed misalignment of the Orders and Returns section that is accessed from the footer of the orders page. *Fix submitted by Amol Chaudhari in pull request [21163](https://github.com/magento/magento2/pull/21163)*. [GitHub-20816](https://github.com/magento/magento2/issues/20816)

<!-- ENGCOM-4239 -->

*  Fixed misalignment of reviews under My Recent Reviews area of the My account dashboard. *Fix submitted by Amol Chaudhari in pull request [21172](https://github.com/magento/magento2/pull/21172)*. [GitHub-20800](https://github.com/magento/magento2/issues/20800)

<!-- ENGCOM-4247 -->

*  The Widget Options left navigation block on the Add New widget Page now displays correctly in tablet view. *Fix submitted by Amol Chaudhari in pull request [20529](https://github.com/magento/magento2/pull/20529)*. [GitHub-20492](https://github.com/magento/magento2/issues/20492)

<!-- ENGCOM- 4535-->

*  Added a missing asterix adjacent to the Checkout Agreements checkbox. *Fix submitted by Amol Chaudhari in pull request [21838](https://github.com/magento/magento2/pull/21838)*. [GitHub-21648](https://github.com/magento/magento2/issues/21648)

### Configurable products

<!-- MAGETWO-97271 -->

*  Configurable products can no longer be added as a variation of another configurable product in the Admin.

<!-- MAGETWO-97332 -->

*  Magento no longer describes a configurable product as in-stock in the product list when the product is set to out-of-stock.

<!-- ENGCOM-4308 -->

*  Fixed misalignment of fields on the Configure Product page that is accessed from the wishlist. *Fix submitted by Amol Chaudhari in pull request [21173](https://github.com/magento/magento2/pull/21173)*. [GitHub-20760](https://github.com/magento/magento2/issues/20760)

<!-- ENGCOM-4092 -->

*  You can now  successfully run `bin/magento setup:upgrade` to upgrade your Magento instance when your deployment lacks the `manufacturer` attribute. Previously, set up did not complete, and Magento displayed this error, `Attribute with ID "Manufacturer" does not exist`.  *Fix submitted by Suneet K. in pull request [19551](https://github.com/magento/magento2/pull/19551)*. [GitHub-18134](https://github.com/magento/magento2/issues/18134)

<!-- ENGCOM-4470 -->

*  Corrected the position of the labels in the configurable product variations table. *Fix submitted by Eduard Chitoraga in pull request [21691](https://github.com/magento/magento2/pull/21691)*. [GitHub-20527](https://github.com/magento/magento2/issues/20527)

<!-- ENGCOM-4754 -->

*  Configurable products can now be successfully updated through the bulk API using the following API endpoint: rest/async/bulk/V1/configurable-products/bySku/child).  *Fix submitted by Amol Chaudhari in pull request [22295](https://github.com/magento/magento2/pull/22295)*. [GitHub-20366](https://github.com/magento/magento2/issues/20366)

### CMS

<!-- MAGETWO-99818 -->

*  We have modified the required permissions for updating the `design` fieldset of categories, products, and CMS pages:

   *  Existing roles that have **save** permission for these entities can save everything.

   *  New roles must be granted permission to edit design manually.

   *  If you do not have permission to edit the `design` fieldset or use web API endpoints to update a category, Magento does not save your changes and the design properties remain unchanged.

<!-- MAGETWO-98990 -->

*  The HTML source editor **Update** and **Cancel** buttons now appear as expected in browsers running Internet Explorer  11.x.

<!-- ENGCOM-4200 -->

*  Improved the display of images that are uploaded when you click the **Insert Image** button on a CMS page. *Fix submitted by Eduard Chitoraga in pull request [21110](https://github.com/magento/magento2/pull/21110)*. [GitHub-20786](https://github.com/magento/magento2/issues/20786)

### Customer

<!-- MAGETWO-98334 -->

*  Customers who are not logged in can now see the dynamic blocks that have been created for guest accounts. Previously, only customers logged in to the registered guests segment could see these dynamic blocks.

<!-- MAGETWO-72961 -->

*  Magento now uses the value of the  default billing address attribute as expected during checkout. [GitHub-8777](https://github.com/magento/magento2/issues/8777)

<!-- MAGETWO-93521  -->

*  Custom customer attributes now show as expected in the Admin customer create and edit forms. Previously, these attributes were not displayed unless configured for display on the Customer Registration or Customer Account Edit forms. [GitHub-14456](https://github.com/magento/magento2/issues/14456)

<!-- ENGCOM-4132 -->

*  Removed an unneeded space from the title of the My Account page in mobile view. *Fix submitted by Amol Chaudhari in pull request [20782](https://github.com/magento/magento2/pull/20782)*. [GitHub-20723](https://github.com/magento/magento2/issues/20723)

<!-- ENGCOM-4187 -->

*  Removed an empty block on the My Account page sidebar. *Fix submitted by Pratik Oza in pull request [20845](https://github.com/magento/magento2/pull/20845)*. [GitHub-19139](https://github.com/magento/magento2/issues/19139)

<!-- ENGCOM-4284 -->

*  The Customer Name Prefix on the customer configuration page no longer displays extraneous  white space when an extra separator is added. *Fix submitted by Pratik Oza in pull request [21245](https://github.com/magento/magento2/pull/21245)*. [GitHub-17861](https://github.com/magento/magento2/issues/17861)

<!-- ENGCOM-4367 -->

*  The customer login block  (defined as `Magento\Customer\Block\Form\Login`)  no longer sets the page title. *Fix submitted by Amol Chaudhari in pull request [21434](https://github.com/magento/magento2/pull/21434)*. [GitHub-13982](https://github.com/magento/magento2/issues/13982)

<!-- ENGCOM-4476 -->

*  The default sort order for the shopping cart and customer orders page now begins with the latest create date and descends. *Fix submitted by Pratik Oza in pull request [21694](https://github.com/magento/magento2/pull/21694)*. [GitHub-21493](https://github.com/magento/magento2/issues/21493)

<!-- ENGCOM-4213 -->

*  Magento now respects the number of lines permitted in a street address as set in  **Store** > **Configuration** > **Customer** > **Customer Configuration** > **Name and Address Options**. Previously, Magento displayed the last saved values instead of the default value. *Fix submitted by Ievgenii Gryshkun in pull request [20566](https://github.com/magento/magento2/pull/20566)*. [GitHub-13675](https://github.com/magento/magento2/issues/13675)

<!-- MAGETWO-97684 -->

*  The **State/Province** field is no longer marked as mandatory in the Admin customer address form. Previously, this field was always marked by an asterisk, even when the field was not required.

<!-- MAGETWO-98044 -->

*  When loading an order for a customer already assigned to a customer group, Magento now shows the assigned customer group in the order information.  Additionally, Magento now saves the group assignment if you change it when creating a customer order. Previously, the customer group reverted to the default configured group assignment for customers with an existing group assignment. On new orders, if you changed the customer group during the ordering process, the new assignment was not saved. When you loaded the customer order, the customer group showed the default group instead of the group assignment applied during the ordering process.

### cron

<!-- MAGETWO-98843 -->

*  Added support for [Zookeeper](https://php.net/manual/en/book.zookeeper.php) and flock lock providers. We've also added new options to configure locks during installation:

   *  `--lock-provider=LOCK-PROVIDER` Lock provider name

   *  `--lock-db-prefix=LOCK-DB-PREFIX` Installation specific lock prefix to avoid lock conflicts

   *  `--lock-zookeeper-host=LOCK-ZOOKEEPER-HOST`  Host and port to connect to Zookeeper cluster. For example, 127.0.0.1:2181

   *  `--lock-zookeeper-path=LOCK-ZOOKEEPER-PATH` The path where Zookeeper will save locks. The default path is /magento/locks

   *  `--lock-file-path=LOCK-FILE-PATH` The path where file locks will be saved.

   See [Configure the lock provider]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-lock.html).

<!-- ENGCOM-4660 -->

*  `crontab` now updates all currency rates daily as expected. Previously, `crontab` updated only a subset of the enabled currencies. *Fix submitted by Denis Papec in pull request [18980](https://github.com/magento/magento2/pull/18980)*. [GitHub-18580](https://github.com/magento/magento2/issues/18580)

### Customer custom attributes

<!-- MAGETWO-97528 -->

*  Magento now saves dates that are associated with custom customer attributes of type `date`. Previously, Magento did not save these dates, but displayed this message, `Please enter a valid date`.

<!-- MAGETWO-96265 -->

*  Magento now loads the customer attribute page as expected, and users can edit attributes, when attributes are set to default values. Previously, Magento did not completely load this page when attributes values were set to default.

### Directory

<!-- ENGCOM-4234 -->

*  The Swagger definition for `eav-data-attribute-option-interface` has been corrected. Previously, when you created a REST call to an endpoint that returns an object of `eav-data-attribute-option-interface` and `is_default` is set to `true`, `is_default` returns an object instead of the expected Boolean. *Fix submitted by Pratik Oza in pull request [21164](https://github.com/magento/magento2/pull/21164)*. [GitHub-18525](https://github.com/magento/magento2/issues/18525)

### Downloadable

<!-- ENGCOM- 4297-->

*  You can now successfully download a downloadable product by clicking the link to the product in your downloadable products list. When you previously clicked this link. the page did not open correctly, and Magento threw this error, `Something went wrong while getting the requested content`. *Fix submitted by Amol Chaudhari in pull request [21262](https://github.com/magento/magento2/pull/21262)*. [GitHub-18944](https://github.com/magento/magento2/issues/18944)

<!-- ENGCOM-4466 -->

*  Added missing sort order to columns on Downloadable Product links page. *Fix submitted by Pratik Oza in pull request [21662](https://github.com/magento/magento2/pull/21662)*. [GitHub-21278](https://github.com/magento/magento2/issues/21278)

<!-- ENGCOM-4816 -->

*  You can now successfully change the sample file for an existing downloadable product. Previously, when you tried to change this sample file, Magento did not save the new file, and did not display an error message.  *Fix submitted by Ravi Chandra in pull request [22471](https://github.com/magento/magento2/pull/22471)*. [GitHub-6272](https://github.com/magento/magento2/issues/6272)

<!-- ENGCOM-4777 -->

*  A logged-in user’s My Downloads page now displays links to the relevant downloadable products when **Order Item Status to Enable Downloads** is set to **Pending**. Previously, Magento displayed only the names of the pending products, and no links for downloadable products were displayed. *Fix submitted by James in pull request [22072](https://github.com/magento/magento2/pull/22072)*. [GitHub-21753](https://github.com/magento/magento2/issues/21753)

### EAV

<!-- ENGCOM-4632 -->

*  Initialization has been added to two class variables that can be returned by class methods as parameters of type `array`. Without this initialization, both variables are returned as null, which can cause Magento to throw  an `Invalid argument supplied for foreach()` warning. *Fix submitted by Wojtek Naruniec in pull request [22086](https://github.com/magento/magento2/pull/22086)*. [GitHub-21134](https://github.com/magento/magento2/issues/21134)

<!-- ENGCOM-4518 -->

*  Magento no longer throws an exception when the  `fixed-Quantity_and_stock_status` attribute has **Change Visible on Catalog Pages on Storefront** enabled. *Fix submitted by Amol Chaudhari in pull request [21802](https://github.com/magento/magento2/pull/21802)*. [GitHub-13612](https://github.com/magento/magento2/issues/13612)

<!-- ENGCOM-4787 -->

*  The `\Magento\Eav\Model\Entity\Collection\AbstractCollection::importFromArray()` method now returns a usable collection. Previously, the `_isCollectionLoaded` property was false, and every interaction threw an exception. *Fix submitted by Lorenzo Stramaccia in pull request [22422](https://github.com/magento/magento2/pull/22422)*. [GitHub-21868](https://github.com/magento/magento2/issues/21868)

### Email

<!-- ENGCOM-4305 -->

*  Corrected problems with  disabling and enabling order-related emails. *Fix submitted by Serhiy Zhovnir in pull request [20954](https://github.com/magento/magento2/pull/20954)*. [GitHub-18698](https://github.com/magento/magento2/issues/18698)

<!-- ENGCOM-4824 -->

*  Magento no longer sends via asynchronous email sending any sales-related emails that were created when email sending was disabled once email sending is enabled. *Fix submitted by Serhiy Zhovnir in pull request [22108](https://github.com/magento/magento2/pull/22108)*. [GitHub-21786](https://github.com/magento/magento2/issues/21786)

### Frameworks

<!-- MAGETWO-98554 -->

*  Magento now sorts media directories alphabetically during image upload.

<!-- ENGCOM-4068 -->

*  Fixed misalignment of the import successful  message icon  in the Admin. *Fix submitted by Kajal Solanki in pull request [19333](https://github.com/magento/magento2/pull/19333)*. [GitHub-19328](https://github.com/magento/magento2/issues/19328)

<!-- ENGCOM- 4286-->

*  Added the `as` attribute to `linkType` in `lib/internal/Magento/Framework/View/Layout/etc/head.xsd` with three possible options: `style`, `script`, and `font`. *Fix submitted by Amol Chaudhari in pull request [21261](https://github.com/magento/magento2/pull/21261)*. [GitHub-18347](https://github.com/magento/magento2/issues/18347)

<!-- ENGCOM-4354 -->

*  The use of the `SessionManagerInterface` class has replaced the direct use of  `SessionManager`. *Fix submitted by Pratik Oza in pull request [21357](https://github.com/magento/magento2/pull/21357)*. [GitHub-19274](https://github.com/magento/magento2/issues/19274)

<!-- ENGCOM-4395 -->

*  The module ranking in  `app/etc/config` now remains consistent when a new module is added but no other changes are made. Previously, a module addition affected the module ranking, which resulted in multiple unnecessary conflicts. *Fix submitted by Eduard Chitoraga in pull request [21423](https://github.com/magento/magento2/pull/21423)*. [GitHub-8479](https://github.com/magento/magento2/issues/8479),[GitHub-16116](https://github.com/magento/magento2/issues/16116)

<!-- ENGCOM-4542 -->

*  Magento now logs exceptions during autoloading instead of throwing exceptions. This conforms with PSR-4 guidelines.  *Fix submitted by Amol Chaudhari in pull request [21435](https://github.com/magento/magento2/pull/21435)*. [GitHub-20773](https://github.com/magento/magento2/issues/20773)

#### Cache framework

<!-- ENGCOM-4183 -->

*  A syntax error in `magento2/lib/internal/Magento/Framework/Cache/Backend/Database.php` has been corrected. *Fix submitted by Nirav Kadiya in pull request [21078](https://github.com/magento/magento2/pull/21078)*. [GitHub-13309](https://github.com/magento/magento2/issues/13309)

#### JavaScript framework

<!-- ENGCOM-4610 -->

*  JavaScript validation on UI form components now works as expected. Previously, adding the `validate-per-page-value-list` validation rule resulted in a failure for every non-empty value in the field to which it as applied. *Fix submitted by Roman Kis in pull request [21813](https://github.com/magento/magento2/pull/21813)*. [GitHub-21734](https://github.com/magento/magento2/issues/21734)

### General

<!-- ENGCOM-2667 -->

*  Sorting on stores from the Admin (**Stores** > **All Stores**) now works as expected. *Fix submitted by afirlejczyk in pull request [17371](https://github.com/magento/magento2/pull/17371)*. [GitHub-7283](https://github.com/magento/magento2/issues/7283)

<!-- ENGCOM-4548 -->

*  Product attribute labels are no longer translated but maintain their store-specific valu *Fix submitted by Pratik Oza in pull request [21864](https://github.com/magento/magento2/pull/21864)*. [GitHub-21750](https://github.com/magento/magento2/issues/21750)

<!-- ENGCOM-4272 -->

*  You can now change customer groups when creating a new customer during order creation on the Admin. *Fix submitted by Amol Chaudhari in pull request [21239](https://github.com/magento/magento2/pull/21239)*. [GitHub-7974](https://github.com/magento/magento2/issues/7974)

<!-- MAGETWO-98000 -->

*  The store switcher now redirects users to the correct store.

### Import/export

<!-- MAGETWO-96895 -->

*  The **Skip error entries** validation method for the import now works as expected. Previously, Magento did not let you skip an invalid entry and prevented import.

<!-- MAGETWO-98694 -->

*  Magento now correctly saves product URL keys in Arabic. Previously, keys in Arabic returned 404 errors.

### Indexers

<!-- ENGCOM-4555 -->

*  You can now access a list of Admin indexers after creating a custom index. Previously, when you tried to access the Admin indexer list,  Magento threw a fatal error. *Fix submitted by Cristiano Casciotti in pull request [21576](https://github.com/magento/magento2/pull/21576)*. [GitHub-21510](https://github.com/magento/magento2/issues/21510)

### Infrastructure

<!-- ENGCOM-4570 -->

*  The `productAvailabilityChecks` argument has been added to `Magento\Sales\Model\Order\Reorder\OrderedProductAvailabilityChecker`. Previously, this required argument was missing. *Fix submitted by Amol Chaudhari in pull request [21920](https://github.com/magento/magento2/pull/21920)*. [GitHub-20825](https://github.com/magento/magento2/issues/20825)

<!-- ENGCOM-4484 -->

*  Logic has been removed from the constructor of `Magento\Sales\Model\Order\Address\Validator`. Previously, installation of the product could fail if this class was injected in the constructor through a command in a custom module when this class contained logic.  *Fix submitted by Bartłomiej Szubert in pull request [21719](https://github.com/magento/magento2/pull/21719)*. [GitHub-21692](https://github.com/magento/magento2/issues/21692)

<!-- ENGCOM-4587 -->

*  You can now use a period (`.`) for inline CMS content edits. Previously, if you included  a period (`.`) in your edits, Magento displayed this error, `There are 1 messages requires your attention. Please make corrections to the errors in the table below and re-submit`. *Fix submitted by Hiren Pandya in pull request [21939](https://github.com/magento/magento2/pull/21939)*. [GitHub-21374](https://github.com/magento/magento2/issues/21374)

<!-- ENGCOM-4626 -->

*  `QuoteManagement::submitQuote` now logs all root exceptions. Previously, Magento logged only the second exception in `exception.log`. *Fix submitted by Lars Roettig in pull request [22037](https://github.com/magento/magento2/pull/22037)*. [GitHub-14926](https://github.com/magento/magento2/issues/14926), [GitHub-18752](https://github.com/magento/magento2/issues/18752)

<!-- ENGCOM-4702 -->

*  Widget parameters can now contain multidimensional arrays. *Fix submitted by Stanislav Ilnytskyi in pull request [22214](https://github.com/magento/magento2/pull/22214)*. [GitHub-19909](https://github.com/magento/magento2/issues/19909)

### Layered navigation

<!-- ENGCOM-4803 -->

*  Setting **price navigation step calculation** for layered navigation to **Automatic (equalize product counts)** now works as expected. Previously, results were not in the equals range, but omitted products. *Fix submitted by Nazar Klovanych in pull request [22453](https://github.com/magento/magento2/pull/22453)*. [GitHub-6715](https://github.com/magento/magento2/issues/6715), [GitHub-21960](https://github.com/magento/magento2/issues/21960)

### Logging

<!-- MAGETWO-97595 -->

*  Editing a theme now creates an entry in the Admin action log as expected.

<!-- ENGCOM-4834 -->

*  The downloads report table (**Admin** > **Reports** > **Downloads**) now displays an accurate count of all downloadable products and the number of times they have been downloaded. *Fix submitted by Shikha Mishra in pull request [22523](https://github.com/magento/magento2/pull/22523)*. [GitHub-22223](https://github.com/magento/magento2/issues/22223)

### MSRP

<!-- MAGETWO-73985 -->

*  MAP (minimum advertised price) prices for the simple products that belong to a configurable product are now supported. MAP prices for these products are now successfully handled and displayed  on the configurable product page and  the category page display of the configurable product.

### Newsletter

<!-- ENGCOM-4303 -->

*  The newsletter subscription input box now displays all text in mobile view. *Fix submitted by dipti2jcommerce in pull request [20370](https://github.com/magento/magento2/pull/20370)*. [GitHub-20163](https://github.com/magento/magento2/issues/20163)

<!-- MAGETWO-96957 -->

*  You can now change pages at an expected speed from the Admin newsletter subscribers page (**Marketing** > **Communications** > **Newsletter Subscribers**). Previously, it took excessively long to move off this page

### Orders

<!-- ENGCOM-4593 -->

*  Magento no longer displays a negative number in the dashboard to represent a canceled order. *Fix submitted by Eduard Chitoraga in pull request [21944](https://github.com/magento/magento2/pull/21944)*. [GitHub-18754](https://github.com/magento/magento2/issues/18754), [GitHub-21281](https://github.com/magento/magento2/issues/21281)

### Page Cache

<!-- MAGETWO-90953 -->

*  Page caching is no longer active when maintenance mode is enabled.  Previously, Magento cached  pages from all IP addresses during maintenance mode.

### Payment methods

<!-- MAGETWO-98991 -->

*  Magento creates an order using PayPal Payflow Pro as expected when a customer enters all the credit card information that PayPal needs to create the transaction. Previously, Magento did not create the order even though all necessary credit card information has been entered.

<!-- MAGETWO-98670 -->

*  Magento now displays the account owner name that you've specified when you add a shipping address when using Braintree through PayPal and are redirected to Magento. Previously, Magento displayed the account owner's name, not the name you specified.

<!-- MAGETWO-98431 -->

*  The PayPal  `securetoken` and `securetokenid`  are no longer vulnerable to compromise.

<!-- MAGETWO-96137 -->

*  The transfer cart line items and transfer shipping options in the the Shipping step of checkout now work for PayPal. [GitHub-19064](https://github.com/magento/magento2/issues/19064)

<!-- ENGCOM-4328 -->

*  Alt attribute text that describes  credit card type or stored payment methods during checkout has been added to support accessibility. *Fix submitted by Amol Chaudhari in pull request [21206](https://github.com/magento/magento2/pull/21206)*. [GitHub-21089](https://github.com/magento/magento2/issues/21089)

<!-- MAGETWO-98111 -->

*  You can now place an order using Cybersource payment from the Admin.

<!-- MAGETWO-97464 -->

*  Product search results now display the correct special price as set by a scheduled update. Previously, search results displayed the original special price, not the price set by the scheduled update.

### Pricing

<!-- MAGETWO-99247 -->

*  Magento now saves customizable option price input on the store-view level when Catalog Price Scope is set to **Global**. Previously, customizable option prices were not saved on the store-view level when Catalog Price Scope was set to **Global**.

<!-- MAGETWO-96062, 97523 -->

*  The quick order form now handles the SKUs that you enter  for configurable products as expected. Previously, Magento threw an error when you tried to enter the SKU for a configurable product.

<!-- MAGETWO-96898 -->

*  Tier pricing for bundle products now works as expected: Magento displays the correct  price in the cart, and reminds customers that they can buy a specific quantity of the  product for a discount. Previously, Magento did not calculate the price correctly, and did not display any informative messages about tier pricing on the category and product pages.

### Reports

<!-- MAGETWO-96883 -->

*  Reports now include orders from only the websites that the administrator has permissions for in multisite deployments. Previously, a report run by an administrator with access to one website only contained information about products and sales on other websites.

<!-- ENGCOM-4445 -->

*  The date range in reports no longer displays the same start and end dates. *Fix submitted by Pratik Oza in pull request [21589](https://github.com/magento/magento2/pull/21589)*. [GitHub-20128](https://github.com/magento/magento2/issues/20128)

<!-- ENGCOM-4834 -->

*  The downloads report table (**Admin** > **Reports** > **Downloads**) now displays an accurate count of all downloadable products and the number of times they have been downloaded. *Fix submitted by Shikha Mishra in pull request [22523](https://github.com/magento/magento2/pull/22523)*. [GitHub-22223](https://github.com/magento/magento2/issues/22223)

### Review

<!-- ENGCOM- 4006-->

*  Fixed rendering of the **Add your text** link on the Product page. *Fix submitted by Amol Chaudhari in pull request [20257](https://github.com/magento/magento2/pull/20257)*. [GitHub-20221](https://github.com/magento/magento2/issues/20221)

<!-- ENGCOM- 4539-->

*  Pending Reviews are now correctly labeled under **System** > **User Roles** > **Add New Role** > **Role Resources**, and Magento now displays a new Pending reviews menu under **Marketing** > **User Content**. Previously, Magento displayed the Reviews menu twice. *Fix submitted by Eduard Chitoraga in pull request [21849](https://github.com/magento/magento2/pull/21849)*. [GitHub-20924](https://github.com/magento/magento2/issues/20924)

### Sales

<!-- MAGETWO-97008 -->

*  When you place an Admin order for a product with a custom price, the `sales_order_item` table now behaves the same as it would for an order of a product with a regular price (specifically, the  price column  contains the custom price excluding tax). Previously, the `sales_order_item` table's price column displayed the custom price including tax.

<!-- MAGETWO-97096 -->

*  Magento now lets you enter new orders in the Admin on non-default websites in multisite deployments where some countries have been restricted.

<!-- ENGCOM-4280 -->

*  Corrected misalignment of page elements on the Admin product reorder page. *Fix submitted by Amol Chaudhari in pull request [21241](https://github.com/magento/magento2/pull/21241)*. [GitHub-20919](https://github.com/magento/magento2/issues/20919)

<!-- ENGCOM-3968 -->

*  The `transportBuilderByStore` class has been removed. Previously, this class was the cause of undesired repeat emails. *Fix submitted by gwharton in pull request [18472](https://github.com/magento/magento2/pull/18472)*. [GitHub-11740](https://github.com/magento/magento2/issues/11740), [GitHub-14945](https://github.com/magento/magento2/issues/14945), [GitHub-14952](https://github.com/magento/magento2/issues/14952), [GitHub-16355](https://github.com/magento/magento2/issues/16355)

<!-- ENGCOM-4403 -->

*  You can now successfully re-order a virtual product. *Fix submitted by Shikha Mishra in pull request [21513](https://github.com/magento/magento2/pull/21513)*. [GitHub-15059](https://github.com/magento/magento2/issues/15059)

<!-- ENGCOM-4272 -->

*  You can now change customer groups when creating a new customer during order creation on the Admin. *Fix submitted by Amol Chaudhari in pull request [21239](https://github.com/magento/magento2/pull/21239)*. [GitHub-6162](https://github.com/magento/magento2/issues/6162)

<!-- ENGCOM-4285 -->

*  Fixed display of the Luma theme My Account Order status tabs in mobile view. *Fix submitted by suryakant-krish in pull request [21250](https://github.com/magento/magento2/pull/21250)*. [GitHub-21070](https://github.com/magento/magento2/issues/21070)

### Sales rule

<!-- MAGETWO-98568 -->

*  Magento now displays the Cart Price Rule code on an order details Admin page if free shipping applies. Previously, Magento did not display information about the Sales rule or why shipping was free.

<!-- ENGCOM-4485 -->

*  Sales rule validation has been refactored to eliminate a leak in the salesrule collection. Previously, a poorly constructed SQL query resulted in poor performance. *Fix submitted by David Führ in pull request [21699](https://github.com/magento/magento2/pull/21699)*. [GitHub-19117](https://github.com/magento/magento2/issues/19117)

<!-- ENGCOM-4718 -->

*  We’ve fixed an error in discount calculations that prevented merchants from creating a rule that set a tex rate and 100% discount. Previously, when a tax rule was applied, and a 100% discount was also applied during check out, the shopping cart displayed a negative grand total. *Fix submitted by Stanislav Ilnytskyi in pull request [22227](https://github.com/magento/magento2/pull/22227)*. [GitHub-10790](https://github.com/magento/magento2/issues/10790)

### Search

<!-- MAGETWO-97374 -->

*  Layered navigation results no longer includes price ranges that contain no products.

<!-- ENGCOM-4082 -->

*  Elasticsearch now correctly returns only products whose SKUs contain dashes when your search criteria specifies SKUs that contain dashes. Previously, search results contained unmatched products as well as products whose SKUs contained dashes. *Fix submitted by Nazar Klovanych in pull request [20876](https://github.com/magento/magento2/pull/20876)*. [GitHub-20716](https://github.com/magento/magento2/issues/20716)

<!-- ENGCOM-4209 -->

*  Fixed misalignment of the advanced search page's price field in mobile view. *Fix submitted by Amol Chaudhari in pull request [21114](https://github.com/magento/magento2/pull/21114)*. [GitHub-20157](https://github.com/magento/magento2/issues/20157)

<!-- ENGCOM-4559 -->

*  Corrected formatting of the Advance Search link in page footers. *Fix submitted by Amol Chaudhari in pull request [21892](https://github.com/magento/magento2/pull/21892)*. [GitHub-20809](https://github.com/magento/magento2/issues/20809)

<!-- ENGCOM-4793 -->

*  The search icon on Admin page headers now works as expected. *Fix submitted by Saphal Jha in pull request [22441](https://github.com/magento/magento2/pull/22441)*. [GitHub-22152](https://github.com/magento/magento2/issues/22152)

### Shipping

<!-- MAGETWO-96001 -->

*  The tracking pop-up window now displays an accurate value for the delivery date for FedEx shipments in transit.

<!-- ENGCOM-3602 -->

*  Magento now provides quotes for DHL shipments when **DHL Content Type** is set to **Non Documents**.  *Fix submitted by gwharton in pull request [19488](https://github.com/magento/magento2/pull/19488)*. [GitHub-19485](https://github.com/magento/magento2/issues/19485)

<!-- ENGCOM-4361 -->

*  If you retrieve an order, and then use the `getShippingMethod` as an object function to retrieve the shipping method, Magento now returns `null` if no shipping method has been defined. Previously, this function returned an undefined index error if a shipping method was not available. *Fix submitted by Mahesh Singh in pull request [20866](https://github.com/magento/magento2/pull/20866)*. [GitHub-20380](https://github.com/magento/magento2/issues/20380)

### Swatches

<!-- MAGETWO-92495 -->

*  Product images now display the color option you chose when you applied a color filter in layered navigation. Previously, wrong colors were randomly displayed.

<!-- ENGCOM-4120 -->

*  You can now change an attribute type from swatch to dropdown without using data.  Previously, changing an attribute type from `swatch` to `dropdown` deleted swatch options for all attributes. *Fix submitted by Amol Chaudhari in pull request [20745](https://github.com/magento/magento2/pull/20745)*. [GitHub-20396](https://github.com/magento/magento2/issues/20396)

<!-- ENGCOM-4477 -->

*  When you configure a price rule for configurable products with swatches, Magento now a shows the special price for products that match the price rule. Previously, Magento displayed both the old price and the special price for the matching configurable products. *Fix submitted by Pratik Oza in pull request [21695](https://github.com/magento/magento2/pull/21695)*. [GitHub-19276](https://github.com/magento/magento2/issues/19276)

### Tax

<!-- ENGCOM-4434 -->

*  You can now successfully search for a tax rule based on both the **Name** and **Tax Rate** fields. Previously, Magento threw an MySQL error. *Fix submitted by Tuyen Nguyen in pull request [21535](https://github.com/magento/magento2/pull/21535)*. [GitHub-21521](https://github.com/magento/magento2/issues/21521)

<!-- ENGCOM-4439 -->

*  The value of `product_price_value` in the shopping cart data section  now includes taxes if the configuration settings are set accordingly (**Stores** > **Configuration** > **Sales** > **Tax** > **Shopping Cart Display Settings** > **Display Prices** > **Including Tax**). *Fix submitted by Pratik Oza in pull request [21570](https://github.com/magento/magento2/pull/21570)*. [GitHub-20310](https://github.com/magento/magento2/issues/20310)

<!-- MAGETWO-96870 -->

*  The tax that is applied to a simple child product is now  based on the tax class of that product. Previously, Magento based the tax for a child product on the tax class of its parent product.

<!-- MAGETWO-97975 -->

*  The tax that is applied to simple child product is now  based on the tax Class of that product. Previously, the tax was based on the tax class of the parent  product.

<!-- ENGCOM-4625 -->

*  The shopping cart full tax summary now displays total tax as expected instead of individual tax values. *Fix submitted by Hiren Pandya in pull request [21961](https://github.com/magento/magento2/pull/21961)*. [GitHub-19701](https://github.com/magento/magento2/issues/19701), [GitHub-11358](https://github.com/magento/magento2/issues/11358)

### Testing

<!-- ENGCOM-4415 -->

*  The `Squiz.Operators.ValidLogicalOperators` PHP-CS rule has been added to the static test rules. *Fix submitted by Maksym Novik in pull request [21543](https://github.com/magento/magento2/pull/21543)*. [GitHub-21062](https://github.com/magento/magento2/issues/21062)

<!-- ENGCOM-4814 -->

*  Integration and functional tests no longer fail when tests encounter filtered configuration values. Previously, Magento threw an error and tests failed if some configuration values were intentionally excluded. *Fix submitted by Bettina in pull request [22415](https://github.com/magento/magento2/pull/22415)*. [GitHub-22307](https://github.com/magento/magento2/issues/22307)

### UI

<!-- ENGCOM-4427 -->

*  Form fields of type multiline now work as expwected on Admin forms. *Fix submitted by Vivek Kumar in pull request [21561](https://github.com/magento/magento2/pull/21561)*. [GitHub-8086](https://github.com/magento/magento2/issues/8086), [GitHub-18115](https://github.com/magento/magento2/issues/18115)

<!-- ENGCOM-4598 -->

*  The default design of the **Edit** and **Remove items** buttons on the wishlist page now match. *Fix submitted by Amol Chaudhari in pull request [21118](https://github.com/magento/magento2/pull/21118)*. [GitHub-20790](https://github.com/magento/magento2/issues/20790)

<!-- ENGCOM-4088  -->

*  Magento no longer throws a console error during a guest checkout when the list of allowed countries is changed from the Admin. *Fix submitted by Amol Chaudhari in pull request [20885](https://github.com/magento/magento2/pull/20885)*. [GitHub-20631](https://github.com/magento/magento2/issues/20631)

<!-- ENGCOM-4011 -->

*  The `ui-component` validation `error` event now bubbles upwards when an abstract element is nested in a field set. *Fix submitted by Prince Patel in pull request [20510](https://github.com/magento/magento2/pull/20510)*. [GitHub-17926](https://github.com/magento/magento2/issues/17926)

<!-- ENGCOM-3974 -->

*  Fixed issue where the drop-down toggle arrow did not close as expected on product pages. *Fix submitted by Nirav Patel in pull request [20616](https://github.com/magento/magento2/pull/20616)*. [GitHub-20240](https://github.com/magento/magento2/issues/20240)

<!-- ENGCOM-4311 -->

*  Fixed the misalignment of drop-down menus on the Advanced Pricing page. *Fix submitted by Pratik Oza in pull request [21229](https://github.com/magento/magento2/pull/21229)*. [GitHub-18775](https://github.com/magento/magento2/issues/18775)

<!-- ENGCOM-4317 -->

*  The icon that identifies a drop-down menu throughout the product interface now reflects the changing state of the drop-down menu's status (expanded or collapsed). *Fix submitted by Eduard Chitoraga in pull request [21320](https://github.com/magento/magento2/pull/21320)*. [GitHub-21196](https://github.com/magento/magento2/issues/21196)

<!-- ENGCOM-4366 -->

*  You can now programmmatically upload an image for the customer attribute. Previously, Magento threw this error,  `error: Base64 is not defined`. *Fix submitted by Nazar Klovanych in pull request [21437](https://github.com/magento/magento2/pull/21437)*. [GitHub-19983](https://github.com/magento/magento2/issues/19983)

<!-- ENGCOM-4444 -->

*  Corrected tabbing issue on the product page. *Fix submitted by Amol Chaudhari in pull request [21588](https://github.com/magento/magento2/pull/21588)*. [GitHub-21077](https://github.com/magento/magento2/issues/21077)

<!-- ENGCOM-4361 -->

*  If you retrieve an order, and then use the `getShippingMethod` as object function to retrieve the shipping method, Magento now returns `null` if no shipping method has been defined. Previously, this function returned an undefined index error if a shipping method was not available. *Fix submitted by Mahesh Singh in pull request [20866](https://github.com/magento/magento2/pull/20866)*. [GitHub-20380](https://github.com/magento/magento2/issues/20380)

<!-- ENGCOM-4820 -->

*  Magento now cancels previous scrolling actions as expected when you click Add to cart on a product page. Previously, Magento scrolled back to the `qty` input box the same number of times as you clicked Add to cart. *Fix submitted by Amol Chaudhari in pull request [22358](https://github.com/magento/magento2/pull/22358)*. [GitHub-21715](https://github.com/magento/magento2/issues/21715)

<!-- ENGCOM-4516 -->

*  Magento now properly renders double hyphens (--)  in attribute tags. Previously, Magento replaced the double hyphen (—-)  in classes with a single hyphen (-), which caused classes that contained the -- to be rewritten.  *Fix submitted by Amol Chaudhari in pull request [21804](https://github.com/magento/magento2/pull/21804)*. [GitHub-10645](https://github.com/magento/magento2/issues/10645)

### URL rewrite

<!-- ENGCOM-4621 -->

*  Magento now retains filter terms after you've applied a filter to the Admin `url_rewrites` table, then click the back button. *Fix submitted by Amol Chaudhari in pull request [21805](https://github.com/magento/magento2/pull/21805)*. [GitHub-21805](https://github.com/magento/magento2/issues/21805)

<!-- ENGCOM-4116 -->

*  The import process now retains permanent redirects for outdated product URLs as expected. Previously, the import process removed these redirects, and when you tried to open the changed product by the old URL key,  Magento displayed a 404 page. *Fix submitted by Shikha Mishra in pull request [20737](https://github.com/magento/magento2/pull/20737)*. [GitHub-20282](https://github.com/magento/magento2/issues/20282)

<!-- ENGCOM-4224 -->

*  The store switcher now works in multistore deployments.  Previously, the switcher redirected the user to the home page, not to the alternative store view as expected. *Fix submitted by Janak Bhimani in pull request [21140](https://github.com/magento/magento2/pull/21140)*. [GitHub-19714](https://github.com/magento/magento2/issues/19714)

<!-- MAGETWO-98208 -->

*  Magento no longer lets you create non-human readable URLs for products.

### VAT ID

<!-- ENGCOM-4232 -->

*  Greek VAT numbers can now be validated. *Fix submitted by Amol Chaudhari in pull request [21169](https://github.com/magento/magento2/pull/21169)*. [GitHub-6960](https://github.com/magento/magento2/issues/6960)

### Web API framework

<!-- MAGETWO-73978 -->

*  Magento now throws an error as expected when you send an APU request that specifies `pageSize` and `currentPage` values that exceed the number of products in the catalog you’re querying. Previously, when you queried a catalog and specified values that exceeded catalog size, the API would ignores the specified `currentPage` value, and returned the same results as the highest valid `currentPage`.

<!-- ENGCOM-4792 -->

*  You can now use REST in scope `all` to save an existing category that does not have a name attribute. Previously, Magento threw this exception, `Could not save category with message. The "Name" attribute value is empty. Set the attribute and try again`. *Fix submitted by Saphal Jha in pull request [22440](https://github.com/magento/magento2/pull/22440)*. [GitHub-22309](https://github.com/magento/magento2/issues/22309)

 <!-- ENGCOM-4837 -->

*  The `PUT /V1/products/:sku/media/:entryId` API operation now updates product images as expected. Previously, this operation updated the label, types, and disabled settings, but the actual `file-content` was not replaced with the values that were provided in `base64_encoded_data`. *Fix submitted by Nirav Patel in pull request [22533](https://github.com/magento/magento2/pull/22533)*. [GitHub-22402](https://github.com/magento/magento2/issues/22402)

### Wishlist

<!-- MAGETWO-73613  -->

*  The quantity field now has limits on both the type and number of characters that can be entered. Previously, you could enter both extremely large number and letters into this field, which resulted in undesirable and inaccurate changes in quantity

<!-- ENGCOM-4513  -->

*  Customer wishlists now include review summaries for included products. *Fix submitted by Amol Chaudhari in pull request [21759](https://github.com/magento/magento2/pull/21759)*. [GitHub-21419](https://github.com/magento/magento2/issues/21419)

## Known issue

*  **Issue**: The Async/Bulk Web APIs support only the default store view. A hot fix for this issue will be available in the near future.

## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-9-issues.md %}

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-2-9-partner.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

### Installation and upgrade instructions

See [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
