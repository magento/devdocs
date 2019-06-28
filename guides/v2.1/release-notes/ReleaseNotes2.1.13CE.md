---
group: release-notes
title: Magento Open Source 2.1.13 Release Notes
---

*	TOC
{:toc}


*Patch code and release notes were published on May 2, 2018.*


We are pleased to present Magento Open Source  2.1.13. This release includes both bug fixes and enhancements. Check out the many community-contributed fixes!

## Fixed issues

### Setup

<!--- MAGETWO-86298 -->* The sample  `.htaccess` file Options `All -Indexes` directive has been replaced with Options `-Indexes`. Previously, the `All -Indexes` directive caused problems in shared hosting environments. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 12959*. [GitHub-10812](https://github.com/magento/magento2/issues/10812)

<!--- MAGETWO-69036 -->* Lazy loaders have been moved from `getter` methods to constructor injection in classes, and factory parameters are no longer required. (These parameters will be created inside constructor methods if they weren't provided.)

<!--- MAGETWO-58072 -->* Magento no longer creates an `/ i18n` at system root (`/`) in addition to the expected language file when you run `bin/magento i18n:pack` to install a language pack. [GitHub-6260](https://github.com/magento/magento2/issues/6260)

### Bundle

<!--- MAGETWO-69496 -->*  You can now specify a Bundle option title on a store-view level with changes to more than one store view. Previously, after making a change to the store view title of a second store view, the previous store view would show the default title for the store view title.

### Catalog

<!--- MAGETWO-85781 -->*  Magento now displays the correct final price of configurable products associated with catalog rules. Previously, the final price of a configurable product did not reflect any catalog rules associated with it.

<!--- MAGETWO-85696 -->*  You can now successfully re-save a product attribute using a new name. Previously, an attempt to re-save the product attribute resulted in an error. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11618*. [GitHub-6770](https://github.com/magento/magento2/issues/6770)

<!--- MAGETWO-85104 -->* Magento now flushes the full page cache for all products that have been reindexed (both child and parent products). Previously, the  configurable product page cache was not cleaned as expected. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 12548*. [GitHub-8009](https://github.com/magento/magento2/issues/8009)

<!--- MAGETWO-84932 -->*  Category page X-Magento-Tags headers no longer contain product cache identities when category display mode is set to **Static block only**.  *Fix submitted by [Atish Goswami](https://github.com/atishgoswami) in pull request 12522*.

<!--- MAGETWO-84688 -->*  When you set the `category_ids` attribute to be visible in the storefront catalog, Magento now displays catalog listings as expected. Previously, Magento threw an exception. *Fix submitted by [Manu Gonzalez Rodriguez](https://github.com/manuelson) in pull request*.

<!--- MAGETWO-84432 -->*  Magento now saves images as expected when you create a new category that contains an image, and then edit and re-save that category.  Previously, it appeared that Magento  saved the category as expected, but `exception.log` stated that there was a problem saving the images. *Fix submitted by [IvanK](https://github.com/nemesis-back) in pull request 12368*. [GitHub-8069](https://github.com/magento/magento2/issues/8069)

<!--- MAGETWO-72312 -->* The category filter used for layered navigation for configurable products with no available options now counts products accurately.

<!--- MAGETWO-59782 -->*  Magento now correctly displays product information after you perform an operation on more than one item. Previously, product information was not correctly aligned on the page. [GitHub-6867](https://github.com/magento/magento2/issues/6867)

<!--- MAGETWO-83631 -->* The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have  existing relations only  in `catalog_product_entity` table.

<!--- MAGETWO-83204 -->*  The Hide from Product Page option now works for the child product of a configurable product.

<!--- MAGETWO-87521 -->*   Product page attribute labels are now translated as expected when languages other than English are used. Previously, these fields were empty. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13532*. [GitHub-10738](https://github.com/magento/magento2/issues/10738)

### Cart and checkout

<!--- MAGETWO-87195 -->*  Magento now displays the expected state in the Multishipping New Address form when a customer enters information on the Ship to Multiple Addresses page. *Fix submitted by [enriquei4](https://github.com/enriquei4) in pull request 13367*. [GitHub-8069](https://github.com/magento/magento2/issues/8069)

<!--- MAGETWO-69701 -->* When two customers check out concurrently for the same product, one of the check outs now succeeds. Previously, when two customers checked out concurrently for the same product, and the total quantity being ordered was greater than the quantity available, the stock  became negative. [GitHub-6363](https://github.com/magento/magento2/issues/6363)

<!--- MAGETWO-64171 -->* Display issues no longer prevent a user from adding a shipping address when checking out when running Internet Explorer 11.x. Previously, a registered user could not add a new shipping address in the  shipping step of the checkout process due to display issues.

<!--- MAGETWO-71229 -->* Magento no longer caches warning messages as often as a customer clicks the **Update Shopping Cart** button while the shopping cart page loads. Previously, Magento cached a warning message each time a customer clicked this button while the page loaded in Firefox or Chrome, and this action resulted in multiple warning messages appearing on the top of the shopping cart page.

<!--- MAGETWO-87745 -->* You can now create unique checkbox IDs for the Terms and Conditions part of the checkout process. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13543*. [GitHub-6207](https://github.com/magento/magento2/issues/6207)

### Configurable products

<!--- MAGETWO-86312 -->*   Magento now reorders configurable attribute options as expected on the product page. *Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request 12962*. [GitHub-7441](https://github.com/magento/magento2/issues/7441)

<!--- MAGETWO-60140 -->*  You can now disable a child product from a configurable product’s edit page. Previously, the child product’s status
did not change after you selected **Disable product**.

<!--- MAGETWO-87993 -->*  `LowestPriceOptionsProvider` now returns products with the `tax_class_id` attribute, which is used for price calculation operations such as  tax adjustment. [GitHub-6729](https://github.com/magento/magento2/issues/6729), [GitHub-6457](https://github.com/magento/magento2/issues/6457), [GitHub-7362](https://github.com/magento/magento2/issues/7362) *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 13490*.

### Customers

<!--- MAGETWO-85674 -->* `window.checkout.customerLoginUrl` now contains a URL that includes the referrer in base64 encoding (for example, https://myshop.com/customer/account/login/referrer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0). Previously, the login URL did not include a referrer (for example, https://myshop.com/customer/account/login). *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request 12629*. [GitHub-12627](https://github.com/magento/magento2/issues/12627)

<!--- MAGETWO-84861 -->*  Administrators can now reset customer passwords as expected when the **max wait time between password resets** setting has been disabled.  Previously, when an administrator attempted to reset a customer's password from the Admin, Magento displayed this error, `Too many password reset requests`, even when the **max wait time between password resets** setting had been disabled. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11436*. [GitHub-12627](https://github.com/magento/magento2/issues/12627)

<!--- MAGETWO-71669 -->* The Arabic language locale now uses the correct date format. Previously, when Magento was deployed using the JavaScript calendar and the Arabic (Kuwait) locale, It did not correctly display dates  on the product page. (Date format was shown as 182017/05 instead of 18/05/2017.)


<!--- MAGETWO-84733 -->* Magento now refreshes customer data in `localStorage` upon customer log in, which results in proper loading of the customer's cart. Previously, when a customer with existing cart items logged in using the authentication popup, the mini cart did  not display her cart items. *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request 12246*.

### Framework

<!--- MAGETWO-86676 -->* `vendor/magento/framework/composer.json` now declares a dependency on `magento/zendframework1`. Previously, packages depending on `magento/framework` packages failed to execute. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 12991*. [GitHub-12967](https://github.com/magento/magento2/issues/12967)

#### Configuration framework

<!--- MAGETWO-83646 -->*  Scope-based configuration now decrypts data as expected. Previously, scope-based configuration failed to decrypt data on the default store only. [GitHub-8591](https://github.com/magento/magento2/issues/8591)

#### Session framework

<!--- MAGETWO-83288 -->* When you add a product to your wish list after logging out, Magento now redirects you to your account wish list page and adds the product. Previously, you were redirected to your wish list page, but Magento did not add the product. [GitHub-11825](https://github.com/magento/magento2/issues/11825)

#### Web API framework

<!--- MAGETWO-59726 -->*  When you used REST to create a paginated search of products, Magento now includes `category_id`s   as expected in the `custom_attributes` section of listed products. [GitHub-6127](https://github.com/magento/magento2/issues/6127)

#### Zend

<!--- MAGETWO-86300 -->*  We've upgraded the Zend framework `Zend_Service` component. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 12958*. [GitHub-9243](https://github.com/magento/magento2/issues/9243)

### General

<!--- MAGETWO-86284 -->*  The `htmlentities` function has been replaced with the `htmlspecialchars` function.

<!--- MAGETWO-85930 -->* You can now delete more than one record using the content block manager. Previously, when working in the content block manager in the Admin, Magento threw a fatal error when you tried to delete more than one record. *Fix submitted by [Tristan Hofman](https://github.com/duckchip) in pull request 12840*. [GitHub-8415](https://github.com/magento/magento2/issues/8415)


<!--- MAGETWO-85264 -->* The newsletter title string in the block template is no longer hardcoded. *Fix submitted by [Lorenzo Stramaccia](https://github.com/slackerzz) in pull request 12611*.

<!--- MAGETWO-83631 -->*  The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in `catalog_product_entity` table, which prevents the loading of quote items for non-existing products.


<!--- MAGETWO-71701 -->*  In environments running Varnish, the menu item of the active category page is now handled as the active class as expected. Previously, activating the cache interfered with Magento setting the appropriate CSS class to active in environments where Varnish was enabled. [GitHub-6609](https://github.com/magento/magento2/issues/6609)


<!--- MAGETWO-57064 -->*  The currency switcher now works for widgets on the home page. Previously, if your website supported multiple currencies, the currency switcher did not update the currencies for widgets on the home page.


<!--- MAGETWO-64171 -->*  Customers can now add a new address during the shipping step of the checkout process when accessing the store from Internet Explorer 11.x. Previously, when a customer tried to create a new address from the checkout page,  the **Add address** button  was not visible.

<!--- MAGETWO-58383 -->*  Magento now creates a URL rewrite when you save a newly created CMS page. Previously, when you tried to access a newly created CMS page using information from the **URL Key** field, Magento displayed a 404 error.  [GitHub-5923](https://github.com/magento/magento2/issues/5923)

<!--- MAGETWO-87443 -->* You can now  use the custom layout handler form (`cms_page_view_id_cms_page`).  Previously the cms module added an additional layout update handler with an identifier on page view, and problems occurred when slashes were used in the page identifier. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 13489*.

<!--- MAGETWO-84907 -->* Duplicate array keys in `app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php` and `app/code/Magento/Downloadable/Helper/File.php` have been removed. *Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request 12519*.

### Index

<!--- MAGETWO-83478 -->*  You can now view the state of the `mview` queue in real time, which can be useful when debugging indexing issues. You can now view how many items are in the queue pending processing, as well as view information from the `mview_state` table. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request 12050*.

### Newsletter

<!--- MAGETWO-66793 -->* Merchants can now successfully unsubscribe customers from a newsletter from the Admin. [GitHub-6313](https://github.com/magento/magento2/issues/6313)

### Order management

<!--- MAGETWO-86861 -->*  Invoices now display coupon code information as expected.  *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 13261*. [GitHub-10168](https://github.com/magento/magento2/issues/10168)

<!--- MAGETWO-86259 -->* The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock.  *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 12952*. [GitHub-9969](https://github.com/magento/magento2/issues/9969)

<!--- MAGETWO-84108 -->* You can now alter the transport variable in the `email_invoice_set_template_vars_before` event. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 12135*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

### Payment methods

<!--- MAGETWO-86343 -->*  The `is_active` and `is_visible` columns now default to `true` even when column default values are not set in the `vault_payment_token` installation script. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1149*.

<!--- MAGETWO-65734 -->*  Magento now processes credit memos as expected when refunding an order from PayPal. Previously, when Magento refunded  an order from PayPal, it created a credit memo, but the credit memo was not assigned a status (that is, the database status field is `null`), and the order status remained as processing.

<!--- MAGETWO-80643 -->*  Administrators can now create orders in the Admin for stores other than the default when using Paypal Payflow Pro.

<!--- MAGETWO-86429 -->*  You can now implement a product attribute that sets **Catalog Input Type for Store Owner** equal to **Fixed Product Tax** in a multistore environment. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 13020*. [GitHub-12393](https://github.com/magento/magento2/issues/12393)

### Reports

<!--- MAGETWO-84476 -->*  When generating the output of **Reports** > Marketing > **Products in Cart**, Magento no longer calls the data of products that have been deleted from the cart. *Fix submitted by [angelo983](https://github.com/angelo983) in pull request 12321*.


<!--- MAGETWO-83539 -->* The Admin's Most Viewed Products tab now displays all relevant information about products, even when they are not in the default attribute set. [GitHub-9768](https://github.com/magento/magento2/issues/9768)

<!--- MAGETWO-83094 -->* You can now successfully export the Ordered Products report to a CSV file. Previously, the export file contained no report data.

### Scope

<!--- MAGETWO-80502 -->* Products are now activated only for specified websites after a scheduled update has run. Previously, Magento incorrectly activated the product for all websites when the scheduled update event ended.

### Search

<!--- MAGETWO-72312 -->* Layered navigation now displays the correct product count. Previously, the layered navigation product count incorrectly included only in-stock products.

<!--- MAGETWO-60246 -->* When you switch between multiple currencies on the storefront, Magento now converts the product price into the correct currency. [GitHub-6746](https://github.com/magento/magento2/issues/6746)

### Shipping

<!--- MAGETWO-59660 -->* We've resolved an issue where Magento did not display applicable flat-rate USPS box methods during checkout. [GitHub-6798](https://github.com/magento/magento2/issues/6798)

### Swagger

<!--- MAGETWO-85180 -->*  The code formatting in the Swagger block and template has been updated.

### Swatches

<!--- MAGETWO-83291 -->* You can now use REST to import visual swatch attribute options. Previously, you could not add swatch options using service contracts unless a swatch option already existed for the attribute. *Fix submitted by [gonzalopelon](https://github.com/gomencal) in pull request 12044*. [GitHub-11032](https://github.com/magento/magento2/issues/11032), [GitHub-10707](https://github.com/magento/magento2/issues/10707), [GitHub-10737](https://github.com/magento/magento2/issues/10737), [GitHub-6798](https://github.com/magento/magento2/issues/6798)

### Translations

<!--- MAGETWO-86285 -->* Inline translations and custom translators now work for knockout templates. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 12954*. [GitHub-2156](https://github.com/magento/magento2/issues/2156)

### UI

<!--- MAGETWO-84852 -->*  Magento now validates XML  against the schema file when saving custom layout update XML in the CMS page in production mode. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11860*.

<!--- MAGETWO-87746 -->*  Creating a new product with a custom attribute set now works as expected. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13549*. [GitHub-10565](https://github.com/magento/magento2/issues/10565)


<!--- MAGETWO-83282 -->* Magento no longer displays the current date when a product's date attribute has an empty value. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 12033*.  [GitHub-9869](https://github.com/magento/magento2/issues/9869)

### Wish list

<!--- MAGETWO-86204-->* The default value for a wish list item's `buyRequest` data is now always an array. Previously, this value was set to `null`. *Fix submitted by [James Halsall](https://github.com/jameshalsall) in pull request 12930*.



<!--- NOT NEEDED  MAGETWO-89535 MAGETWO-89066 MAGETWO-88992 MAGETWO-88336 MAGETWO-53814 MAGETWO-60969 MAGETWO-61020 MAGETWO-85904 MAGETWO-85755 MAGETWO-84822 MAGETWO-69577 MAGETWO-69213 MAGETWO-83326 MAGETWO-84738 MAGETWO-87517 MAGETWO-84238 MAGETWO-87517 MAGETWO-84849 MAGETWO-84848 MAGETWO-84346 MAGETWO-87348 MAGETWO-87346 MAGETWO-87343 MAGETWO-86454 MAGETWO-85030 MAGETWO-83115 MAGETWO-65534 MAGETWO-59163 MAGETWO-84138 MAGETWO-80426 MAGETWO-60154 MAGETWO-85206 MAGETWO-83426 MAGETWO-80324 MAGETWO-89646  -->

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.



<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
     <th>Contributing community member</th>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12033" target="_blank">12033</a></td>
    <td>9869</td>
     <td><a href="https://github.com/enriquei4" target="_blank">enriquei4</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/magento/magento2/pull/12373" target="_blank">12373</a></td>
    <td>10765</td>
     <td><a href="https://github.com/Zefiryn" target="_blank">Zefiryn</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12043" target="_blank">12043</a></td>
    <td>9410, 10707, 10737, 11032</td>
     <td><a href="https://github.com/gomencal" target="_blank">gonzalopelon</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12135" target="_blank">12135</a></td>
    <td>10210</td>
     <td><a href="https://github.com/RomaKis" target="_blank">Roman K.</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11807" target="_blank">11807</a></td>
    <td>11341</td>
     <td><a href="https://github.com/manuelson" target="_blank">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12041" target="_blank">12041</a></td>
    <td>11825, 11908</td>
     <td><a href="https://github.com/osrecio" target="_blank">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12246" target="_blank">12246</a></td>
    <td>NA</td>
     <td><a href="https://github.com/pmclain" target="_blank">Patrick McLain</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12137" target="_blank">12137</a></td>
    <td>9768</td>
     <td><a href="https://github.com/RomaKis" target="_blank">Roman K.</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12519" target="_blank">12519</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/lfluvisotto" target="_blank">Leandro F. L.</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11860" target="_blank">11860</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/adrian-martinez-interactiv4" target="_blank">adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/12522" target="_blank">12522</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/atishgoswami" target="_blank">Atish Goswami</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12321" target="_blank">12321</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/angelo983" target="_blank">angelo983</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/11436" target="_blank">11436</a></td>
    <td>11409</td>
     <td><a href="https://github.com/adrian-martinez-interactiv4" target="_blank">adrian-martinez-interactiv4</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12548" target="_blank">12548</a></td>
    <td>8009</td>
     <td><a href="https://github.com/ajpevers" target="_blank">Anton Evers</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12050" target="_blank">12050</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/convenient" target="_blank">Luke Rodgers</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12558" target="_blank">12558</a></td>
    <td>12268</td>
     <td><a href="https://github.com/roma84" target="_blank">Chumak Roman</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12579" target="_blank">12579</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/JeroenVanLeusden" target="_blank">Jeroen</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12368" target="_blank">12368</a></td>
    <td>8069</td>
     <td><a href="https://github.com/nemesis-back" target="_blank">IvanK</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/11618" target="_blank">11618</a></td>
    <td>6770</td>
     <td><a href="https://github.com/raumatbel" target="_blank">Raul Mateos</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12611" target="_blank">12611</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/slackerzz" target="_blank">Lorenzo Stramaccia</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12629" target="_blank">12629</a></td>
    <td>12627</td>
     <td><a href="https://github.com/quisse" target="_blank">Tommy Quissens</a></td>
  </tr>
<tr>
<td><a href="https://github.com/magento/magento2/pull/12840" target="_blank">12840</a></td>
    <td>8415</td>
     <td><a href="https://github.com/duckchip" target="_blank">Tristan Hofman</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12930" target="_blank">12930</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/jameshalsall" target="_blank">James Halsall</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12959" target="_blank">12959</a></td>
    <td>10812</td>
     <td><a href="https://github.com/dverkade" target="_blank">Danny Verkade</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12958" target="_blank">12958</a></td>
    <td>9243</td>
     <td><a href="https://github.com/dverkade" target="_blank">Danny Verkade</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12956" target="_blank">12956</a></td>
    <td>10682</td>
     <td><a href="https://github.com/dverkade" target="_blank">Danny Verkade</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12962" target="_blank">12962</a></td>
    <td>7441</td>
     <td><a href="https://github.com/wardcapp" target="_blank">wardcapp</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12952" target="_blank">12952</a></td>
    <td>9969</td>
     <td><a href="https://github.com/dverkade" target="_blank">Danny Verkade</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12954" target="_blank">12954</a></td>
    <td>2156</td>
     <td><a href="https://github.com/dverkade" target="_blank">Danny Verkade</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12991" target="_blank">12991</a></td>
    <td>12967</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13020" target="_blank">13020</a></td>
    <td>12393</td>
     <td><a href="https://github.com/dverkade" target="_blank">Danny Verkade</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13261" target="_blank">13261</a></td>
    <td>10168</td>
     <td><a href="https://github.com/PieterCappelle" target="_blank">Pieter Cappelle</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13367" target="_blank">13367</a></td>
    <td>8621</td>
     <td><a href="https://github.com/enriquei4" target="_blank">enriquei4</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13489" target="_blank">13489</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13532" target="_blank">13532</a></td>
    <td>10738</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13543" target="_blank">13543</a></td>
    <td>6207</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13549" target="_blank">13549</a></td>
    <td>10565</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
 </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13490" target="_blank">13490</a></td>
    <td>6457, 6729, 7362</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
 </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13916" target="_blank">13916</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/northernco" target="_blank">Northern eCommerce</a></td>
 </tr>
 </table>

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ site.baseurl }}/guides/v2.1/install-gde/system-requirements.html){:target="_blank"}.

## Installation

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.1/install-gde/bk-install-guide.html) for comprehensive information about Magento 2.1.x installation and setup.

## Migration toolkits

The Magento [Data Migration Tool]({{ site.baseurl }}/guides/v2.1/migration/bk-migration-guide.html) helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install Data Migration Tool]({{ site.baseurl }}/guides/v2.1/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions,  bug reports and code contributions.


