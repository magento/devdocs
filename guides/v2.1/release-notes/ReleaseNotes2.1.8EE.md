---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.8 Release Notes
menu_title: Magento Commerce 2.1.8 Release Notes
menu_order: 258
level3_menu_node: level3child
level3_subgroup: ee21-relnotes
---

*	TOC
{:toc}

*Code released: August 9, 2017*

*Page updated: August 14, 2017*

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.8. This release includes important enhancements to your Magento software.

## Highlights

Magento 2.1.8 contains over 100 functional fixes and enhancements as well as pull requests from the community.  Look for the following highlights in this release:


* **multiple enhancements to static content deployment and generation**

* **improvements to Elasticsearch performance**, indexing of large catalogs, cache tuning, and **URL re-writes**

* **reduction in the amount of memory that mass actions require**, and performance optimization  

* **faster deployments** for multi-language sites

## What's new in these release notes?

With this release, we're inaugurating a new feature of our release notes: descriptions of community-supplied code fixes that were submitted through the Community Engineering program. Thank you, community members!


If a community member has provided a fix, we identify the fix with the phrase, "*Fix provided by community member @member_name*". We've also included a table that identifies the GitHub issue, PR, and community member who created that PR.

## Fixed issues and enhancements

This release includes both improvements we've made internally and those submitted by the community through our Community Engineering program.  

### Catalog

<!--- 58918 -->* You can now create a custom attribute for a category that successfully uploads a custom image. Previously, you could create the attribute, but could not save the image.


<!--- 58571 -->* The prices you assign to custom options no longer change unexpectedly after you save them.  [GitHub-6116](https://github.com/magento/magento2/issues/6116)



<!--- 59782 -->* Magento now correctly displays product information after you perform an operation on more than one item. Previously, product information was not correctly aligned on the page.  [GitHub-6867](https://github.com/magento/magento2/issues/6867)


<!--- 57064 -->* The currency switcher now works for widgets on the home page. Previously, if your website supported multiple currencies, the currency switcher did not update the currencies for widgets on the home page.




<!--- 62630 -->* The Category page now displays the correct total count of products.

<!--- 61797 -->* When you delete an image in Admin, Magento no longer deletes it on the server. Previously, Magento deleted it from the server as well, which caused errors for other products (example error message: `Cannot gather stats! Warning!stat(): stat failed for`).

<!--- 61729 -->* Magento now displays  the price for a product for the store view level only. Previously, the category listing page showed the  default store view price as well as the  prices from other store views.


<!--- 69386 -->* Magento previously displayed a 404 error message instead of a product image when the `product_image_white_borders` parameter wasn't enabled. The product image is now displayed correctly.

<!--- 63656 -->* The product attribute `category_ids` can have only **Global** scope. Previously, you could change the scope value of `category_ids` to **Store**.


<!--- 63587 -->* The **Use default URL Key** setting now works on the store-view level.


<!--- 63157 -->* Magento now displays the correct image when you switch  between a configurable product's options. Previously, Magento loaded  product images from a different product.


<!--- 56937 -->*  You can now successfully set an SKU mask to empty. Previously,  when a product SKU mask was set to empty, Magento experienced problems loading the Product Add page. [GitHub-5618](https://github.com/magento/magento2/issues/5618)

<!--- 57607 -->*  When you deselect one or more of a product's multi-select attributes, Magento now saves these changes correctly. [GitHub-7687](https://github.com/magento/magento2/issues/7687)



<!--- 67535 -->* Magento now correctly assigns images to duplicated products.

<!--- 57144 -->* You can now create a blank attribute option using the drop-down input option on products that do not require an attribute.
[GitHub-3545](https://github.com/magento/magento2/issues/3545), [GitHub-5485](https://github.com/magento/magento2/issues/5485), [GitHub-4910](https://github.com/magento/magento2/issues/4910)

<!--- 69151 -->* Product link types are no longer hardcoded. *Fix submitted by community member [Rafael Kassner](https://github.com/kassner){:target="_blank"} in pull request [9601](https://github.com/magento/magento2/pull/9601){:target="_blank"}.*

<!--- 59690 -->* Magento now renders images as expected in the product description area. Previously, Magento did not render images in this area, and would display a broken link.  [GitHub-6138](https://github.com/magento/magento2/issues/6138)

<!--- 69238 -->* Magento now preserves image transparency when resizing images. *Fix submitted by community member [Rafael Kassner](https://github.com/kassner){:target="_blank"} in pull request [9662](https://github.com/magento/magento2/pull/9662){:target="_blank"}.*

<!--- 69665 -->* The value of `item_zone` on the product detail page now remains set correctly when you change products via the related/upsell products list. [GitHub-9562](https://github.com/magento/magento2/issues/9562), [GitHub-6746](https://github.com/magento/magento2/issues/6746)   *Fix submitted by community member [@Pieter Hoste](https://github.com/hostep){:target="_blank"}.*

### Checkout

<!--- 62628 -->* Your gift wrapping selection now appears in the shopping cart regardless of whether you've selected a shipping method. Previously, Magento did not display your gift wrapping choice until you selected a shipping method.

<!--- 65656 -->* You can complete your order after entering a new shipping address during checkout. Previously, Magento would not let you place an order if you entered a new shipping address during checkout.



<!--- 68875 -->* Shipping method radio buttons are no longer disabled when the Checkout page is refreshed.  [GitHub-7497](https://github.com/magento/magento2/issues/7497), [GitHub-9485](https://github.com/magento/magento2/issues/9485)  *Fix submitted by community member [@Ilia Rachkulik](https://github.com/rachkulik){:target="_blank"} in pull request [9485](https://github.com/magento/magento2/pull/9485){:target="_blank"}.*

<!--- 68902 -->* Magento now highlights in any red fields that are missing shipping information when you proceed to checkout. *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9500](https://github.com/magento/magento2/pull/9500){:target="_blank"}.*

### Configurable products

<!--- 62091 -->* Magento no longer removes the simple products associated with a configurable product if you click on the **Save** button more than once while saving the configurable product. Previously, if you clicked on **Save** more than once during an attempt to save a configurable product, Magento removed the simple products that were assigned to it.


<!--- 61130 -->* Magento now correctly matches images to products. Previously, after you selected a configurable product, Magento displayed the images for another product.  



<!--- 63578 -->* Magento now correctly displays both configurable and simple products, their attribute values, and visibility values after import if SKU is an integer. [GitHub-5547](https://github.com/magento/magento2/issues/5547)

<!--- 56988 -->* Magento now provides swatch input for the Admin Scope, and the attribute fall back mechanism now reverts to the default option value
 if no values are specified for specific store view. [GitHub-5143](https://github.com/magento/magento2/issues/5143), [GitHub-5142](https://github.com/magento/magento2/issues/5142)


<!--- 69501 -->* Color swatches are now replaced by images on the Catalog and Product pages.

### General

<!--- 64238 -->* Reindexing no longer fails due to mmap memory allocation issues when reindexing many (1,000,000) customers. Previously, when initiating reindexing through **System** > Tools > **Index Management**, reindexing failed.

<!--- 57291 -->* Magento now successfully uploads the thumbnail images for email logos that are used in transactional emails. Previously, these thumbnail images were not displayed.


<!--- 57615 -->* Visual Merchandiser `Match products by rule` now works as expected.


<!--- 60542 -->* The **Print Shipping Label** link now displays on the product frontend. Previously, the layout for the "Shipping and Tracking" block did not work properly.

<!--- 60529 -->* Magento now displays Up-sells on the Product page.

<!--- 59173 -->*  Magento no longer sends email when the **Disable email communication** setting is set to **yes**. Previously, Magento sent email even when this setting was enabled.  [GitHub-5988](https://github.com/magento/magento2/issues/5988)

<!--- 58855 -->* The Cart Price rule now affects coupon life as expected. Previously, coupons did not persist longer than the current date if they did not have a designated end-date.  

<!--- 63814 -->* SalesRule now applies to auto-generated coupon codes as expected.

<!--- 60777 -->* Static file generation is no longer affected by a race condition that affected merging CSS files. Previously, this race condition interfered with the proper generation of the product frontend.  

<!--- 60599 -->* Magento now supports negative values in **Quantity** field for a product. [GitHub-7401](https://github.com/magento/magento2/issues/7401)

<!--- 63454 -->* Magento now uses the address template from store view level of the placed order (similar to how order confirmation email works). Previously, Magento used the wrong address template for order e-mails.

<!--- 62914 -->* Directive values can now be escaped with quotation marks. Previously,  all characters after quotation marks were removed after a save, which resulted in the failure to save widget conditions. [GitHub-3860](https://github.com/magento/magento2/issues/3860)

<!--- 62623 -->* Magento no longer displays the gift wrap tax when no gift wrap is selected.

<!--- 55519 -->* You can now apply gift wrapping to a Grouped product.

<!--- 61266 -->* Magento no longer permits a shopper to place a re-order once you've disabled one of items in the order.

<!--- 61097 -->* We've updated UK mobile phone number validation.

<!--- 55361 -->* Cart Price rules are now applied as expected to payment method conditions. Previously, discounts set in Cart Price rules were not applied during checkout.

<!--- 65161 -->* Customers can no longer apply a coupon code twice. Previously, the "Uses per Coupon" limit did not work for auto-generated coupons.

<!--- 57051, 67621 -->* Widgets now accept UTF-8 special characters type as input parameters. Previously, you could successfully create a widget, but UTF-8 special characters were broken. [GitHub-4232](https://github.com/magento/magento2/issues/4232) *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9333](https://github.com/magento/magento2/pull/9333){:target="_blank"}.*


<!--- 60641 -->* Magento now saves a new product rule when its SKU attribute is enabled for **Use for Promo Rule Conditions**. Previously, you could not save a new rule under these conditions.

<!--- 61262 -->* You no longer need to delete the URL rewrite to force Magento to display links after adding pages to the CMS hierarchy. Previously, when you added new pages to the CMS hierarchy, Magento did not show the links to the new pages until you deleted the URL rewrites.


<!--- 63124 -->* Magento frontend scope filters now work as expected. Previously, Magento did not reload product information correctly when you applied a filter using **Catalog > Product**.

<!--- 60538 -->* We fixed an issue where cache-misses sometimes occurred when Fastly cache was implemented.  Previously, the header information included in the response sometimes prevented the caching of this page. To minimize this potential problem, Magento now does not include  header empty of real content  in the response.

<!--- 69152 -->* Resolved issue with selecting widgets in TinyMCE. [GitHub-9655](https://github.com/magento/magento2/issues/9655), [GitHub-9518](https://github.com/magento/magento2/issues/9518)  *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9540](https://github.com/magento/magento2/pull/9540){:target="_blank"}.*

<!--- 67614 -->* You can now remove breadcrumbs without removing the page meta title from the category view and product view pages.  Previously, the page meta title is visible only if the breadcrumbs block was defined in XML.  [GitHub-4427](https://github.com/magento/magento2/issues/4427) *Fix submitted by community member  [@latenights](https://github.com/latenights){:target="_blank"} in pull request [9324](https://github.com/magento/magento2/pull/9324){:target="_blank"}.*

<!--- 68903 -->* The WYSIWYG editor now performs more consistently.  [GitHub-4828](https://github.com/magento/magento2/issues/4828), [GitHub-6222](https://github.com/magento/magento2/issues/6222),  [GitHub-6815](https://github.com/magento/magento2/issues/6815)  *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9499](https://github.com/magento/magento2/pull/9499){:target="_blank"}.*



<!--- 69062 -->* The email logo image function now works as expected.   [GitHub-5352](https://github.com/magento/magento2/issues/5352),  [GitHub-5633](https://github.com/magento/magento2/issues/5633),  [GitHub-5916](https://github.com/magento/magento2/issues/5916) [GitHub-6275](https://github.com/magento/magento2/issues/6275),  [GitHub-9590](https://github.com/magento/magento2/issues/9590)  *Fix submitted by community member  [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9590](https://github.com/magento/magento2/pull/9590){:target="_blank"}.*

<!--- 68774 -->* The login popup window now works as expected in portrait mode on an iPad. [GitHub-6451](https://github.com/magento/magento2/issues/6451)   *Fix submitted by community member [Ihor Sviziev](https://github.com/ihor-sviziev){:target="_blank"} in pull request [9396](https://github.com/magento/magento2/pull/9396){:target="_blank"}.*


<!--- 69023 -->* Wishlists now display the correct product price.  [GitHub-6866](https://github.com/magento/magento2/issues/6866) *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9571](https://github.com/magento/magento2/pull/9571){:target="_blank"}.*

<!--- 69541 -->* We’ve fixed a JavaScript error on Product page that prevented  Magento from updating color swatches  or updating product prices correctly. [GitHub-7959](https://github.com/magento/magento2/issues/7959) *Fix submitted by community member [Abhisek Pandey](https://github.com/dreamworkers){:target="_blank"} in pull request [7959](https://github.com/magento/magento2/pull/7959){:target="_blank"}.*

<!--- 69019 -->* We resolved an issue where  interface constructors broke Magento compilation.   [GitHub-8607](https://github.com/magento/magento2/issues/8607)  *Fix submitted by community member [@LoganayakiK](https://github.com/LoganayakiK){:target="_blank"} in pull request [9524](https://github.com/magento/magento2/pull/9524){:target="_blank"}.*

<!--- 69922 -->* You can now set a negative quantity for a product.  [GitHub-9139](https://github.com/magento/magento2/issues/9139), [GitHub-7401](https://github.com/magento/magento2/issues/7401) *Fix submitted by community member [Poogudivanan](https://github.com/poongud){:target="_blank"} in pull request [9139](https://github.com/magento/magento2/pull/9139){:target="_blank"}.*

<!--- 69543 -->*  Magento no longer caches layered navigation options with the wrong store ID.  [GitHub-9679](https://github.com/magento/magento2/issues/9679)  *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9704](https://github.com/magento/magento2/pull/9704){:target="_blank"}.*

<!--- 70077 -->* Magento now correctly displays usernames that exceed 20 characters.

<!--- 67522 -->* You can now upload `.apng` and `.ico` images as fav icons without error. *Fix submitted by community member [Michele Fantetti](https://github.com/WaPoNe){:target="_blank"} in pull request [8880](https://github.com/magento/magento2/pull/8880){:target="_blank"}.*

<!--- 67620 -->* Clicking **Insert image**  twice on the Add Banner page no longer produces a JavaScript error. *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9332](https://github.com/magento/magento2/pull/9332){:target="_blank"}.*

<!--- 67753 -->* Dynamic dragging-and-dropping of rows now works correctly. *Fix submitted by community member [Navarr Barnier](https://github.com/navarr){:target="_blank"} in pull request [9376](https://github.com/magento/magento2/pull/9376){:target="_blank"}.*


<!--- 69236 -->* The Store Configuration page (**Stores > Settings > Configuration**) now loads templates for Change Email and for Change Email and Password forms. *Fix submitted by community member [Rafael Kassner](https://github.com/kassner){:target="_blank"} in pull request [9661](https://github.com/magento/magento2/pull/9661){:target="_blank"}.*

<!--- 69234 -->* We've removed a previously published fix that corrected a problem using the TinyMCE editor to select and edit images. [GitHub-9518](https://github.com/magento/magento2/issues/9518) *Fix submitted by community member [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9655](https://github.com/magento/magento2/pull/9655){:target="_blank"}.*

### Gift cards

<!--- 64675 -->* Customers can no longer exceed a gift card balance by using the gift card twice.



<!--- 60680-->* You can now save the configuration settings of a gift card product.

### Import/Export

<!--- 62995 -->* We've fixed an issue where product URL keys (for SKUs) were no auto-generated as expected during import.


<!--- 60548 -->* We've improved the import speed of advanced pricing data. Previously, the import process for this information frequently stopped after the import of approximately 300 rows of data, and Magento displayed this message: `Please Wait`.



<!--- 63589 -->* Magento now maintains super attribute ordering of configurable products with multiple super attributes after export or import. Previously, after import or export, the ordering of super attributes was not maintained. [GitHub-6079](https://github.com/magento/magento2/issues/6079)


<!--- 61027 -->* Magento now exports rows only once when product information contains HTML special characters. Previously, Magento exported rows containing product information that included HTML characters at least twice.  



<!--- 58760 -->* Magento now imports customer data as expected after the data passes the pre-import validation step. Previously, although data passed this validation step, an error would occur during import, and Magento displayed this message: `Invalid data for insert`. [GitHub-4291](https://github.com/magento/magento2/issues/4291), [GitHub-9469](https://github.com/magento/magento2/issues/9469)

<!--- 69228 -->*  Magento now allows comma-separated X-Forwarded-For headers. This modification ensures that the correct client IP can be returned if the `getRemoteAddress` method gets one via the `alternativeHeaders` variable. (Magento accomplishes this by getting the first IP in the list after detecting for a comma-separated IP list.) *Fix submitted by community member [Rafael Kassner](https://github.com/kassner){:target="_blank"}.*

### Installation and deployment

<!--- 63020 -->*  Static content deployment (SCD) now works when multiple languages are specified. Previously, Magento displayed an error if you tried to deploy static content in more than one language (for example, `bin/magento setup:static-content:deploy en_CA fr_CA de_DE`).

<!--- 59775 -->* Static content deployment now generates secure content, whether content included secure or non-secure URLs.


<!--- 63650 -->* Magento now moves the `sequence_*` table to the correct database after implementing a split database.


<!--- 59622, 70177 -->*  You can now upgrade Magento 2.0 to version 2.1.x when the `auto_increment` setting in the database is greater than 1. Previously, when the `auto_increment` value exceeded 1, upgrade failed with this error: "The page URL key contains capital letters or disallowed symbols.

<!--- 69235 -->* The `setup:di:compile` command no longer fails under these circumstances: 1) `magento/data-migration-tool` is a regular dependency; 2) you have not installed the `dev` dependencies with Composer (`--no-dev`).

<!--- 60723 -->* Nginx now redirects to the setup page when using port 81.

<!--- 69840 -->* Configuration values no longer return NULL when Redis reaches the limit set in the `max_memory` setting. Previously, when Redis met the limit specified in this setting, `ScopeConfig` returned a value of NULL for configuration options, which resulted in significant damage to data (for example, deleting all prices assigned to a website from the database).

### Order management

<!--- 58533 -->* We've improved the performance of page loading when the order page contains many items.

<!--- 61780 -->* Only users with permission to view a store can view or process the orders placed on it.



<!--- 63819 -->* The purchase date of an order is now displayed in the default time zone of the store and is the same date that is displayed in the Order creation page. Previously, the Order table displayed an incorrect purchase date for the order.


<!--- 61059 -->* Magento no longer generates incorrect URLs in the site map when the **Use Secure URLs in Admin** setting is set to **Yes**. [GitHub-8644](https://github.com/magento/magento2/issues/8644)



<!--- 63514 -->* Free shipping promotions no longer apply after you've removed the item that qualified for free shipping from your order. Previously, you could remove the qualifying item, and free shipping was still applied to the remaining order. [GitHub-9451](https://github.com/magento/magento2/issues/9451)


<!--- 60326 -->* Magento now correctly identifies an order being processed when it is placed in a store configured for multiple currencies.  Previously, these orders always were identified as potentially fraudulent. [GitHub-4263](https://github.com/magento/magento2/issues/4263)

### Payment methods

<!--- 68811 -->*  Magento now permits you to run reference transactions in a different currency than the currency that the authorization uses. Previously, Magento did not support sending authorizations in any currency other than U.S. dollars.  


<!--- 64922 -->* Magento now displays payment information when you review an order from the Magento Admin. Previously, if you viewed an order via **Sales > Orders** from the Magento Admin, the payment information would be missing.



<!--- 63702, 64730 -->* PayPal Express payments no longer fail when there is adequate product inventory to cover your order. Previously, you'd receive this error message: `We can't place the order`. [GitHub-6296](https://github.com/magento/magento2/issues/6296)

### Performance

<!--- 58876 -->* We’ve optimized the performance of mass actions resulting in faster response time and reduced memory usage.

<!--- 67724, 67725 -->* We’ve improved checkout speed by removing unused Widget JS, Widget Configuration, and regions based on your stores configuration to reduce asset load on checkout pages.  [GitHub-4868](https://github.com/magento/magento2/issues/4868), [GitHub-6997](https://github.com/magento/magento2/issues/6997), [GitHub-9364](https://github.com/magento/magento2/issues/9364) *Fix submitted by community member  [Pieter Hoste](https://github.com/hostep){:target="_blank"} in pull request [9365](https://github.com/magento/magento2/pull/9365){:target="_blank"}.*

<!--- 61916 -->* We've improved the algorithm that controls how URL rewrites on the Category Save page are processed.

### Quotes

<!--- 69223 -->* Magento now successfully defines extension attributes for a quote billing address. [GitHub-9646](https://github.com/magento/magento2/issues/9646)  *Fix submitted by community member [Eero Kuusela](https://github.com/ekuusela){:target="_blank"} in pull request [9647](https://github.com/magento/magento2/pull/9647){:target="_blank"}.*

### Reports

<!--- 64297 -->* The website column in Customer Segment report now contains correct data. Previously, this column was blank in the **Reports > Customer > Segments** report.


<!--- 68938 -->* You can now successfully export the Low Stock report.  [GitHub-9428](https://github.com/magento/magento2/issues/9428)  *Fix submitted by community member [Jayakanth Rajan](https://github.com/mikebox){:target="_blank"} in pull request [9487](https://github.com/magento/magento2/pull/9487){:target="_blank"}.*

<!--- 67523 -->* We've changed the severity of some errors from critical to info in `var/log/system.log`.  [GitHub-5627](https://github.com/magento/magento2/issues/5627)  *Fix submitted by community member [@malachy-mcconnell](https://github.com/malachy-mcconnell){:target="_blank"}.*

### Sample data

<!--- 64499 -->* You can now successfully install Magento with sample data when   **auto_increment_increment** is set to **3**  in the `options` file. Previously, installation completed successfully, but Magento displayed this error: `Something went wrong while installing sample data. Please check var/log/system.log for details. You can retry installing the data now or just start using Magento.`

### Search

<!--- 58042 -->* Elasticsearch does not throw errors when there are more than 100 searchable attributes or when user-defined price attributes are marked searchable.

<!--- 65249 -->* Segmentation faults no longer occur when doing a `catalogsearch_fulltext` re-index, and indexing succeeds. Previously, in a large database (more than 70,000 products), the `catalogsearch_fulltext` (MySQL) re-index failed with a `Segmentation fault` message. [GitHub-7963](https://github.com/magento/magento2/issues/7963)


<!--- 53675 -->*  Sorting configurable products by price now works as expected when a simple product has a special price. [GitHub-4778](https://github.com/magento/magento2/issues/4778)


<!--- 57475 -->* Out-of-stock items no longer erroneously appear in results of layered navigation if that product option is out-of-stock.


<!--- 64959 -->* We've resolved an issue where grouped products were not displayed in category pages when Elasticsearch was used as the search engine.

<!--- 67628 -->* You can render the `tax_class_id` attribute nonsearchable. Previously, Magento displayed a 503 error under these circumstances.

### Shipping methods

<!--- 59660 -->* We've resolved an issue where Magento did not display applicable flat-rate USPS box methods during checkout. [GitHub-6798](https://github.com/magento/magento2/issues/6798)

<!--- 57060 -->*  You can now apply free shipping to a specified shipping method when you create order in the Admin. Previously, if you set up a price rule to provide free shipping for one specific shipping method (for example, table rates), Magento applies the rule  on the frontend only, but not on the Admin order creation page.

### Staging

<!--- 60905 -->* Magento now displays the correct date and time for staging updates. Previously, when your current time in Daylight Saving time, and your target time was in Standard time, your target time was incorrect.


<!--- 61004 -->* You can now create a new scheduled update for a product. Previously. when you tried to create an update, Magento displayed this error:  `Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.`



<!--- 60762 -->* You can now change the end time of an active update.


<!--- 66278 -->* The staging dashboard now loads without error when you sort by status on the dashboard. Previously, the staging dashboard broke and remained in an infinite loop when you attempted to sort by status on the dashboard.


<!--- 61267 -->* The view/edit option for a scheduled change is now available for the duration that the scheduled change is in progress. Previously, you could not view or edit a  scheduled change when it was in progress, which left no way to edit or remove it.

### Tax

<!--- 61131 -->* Magento now correctly calculates tax and order totals when a discount is used for prices that include tax and catalog prices excluding tax.  Please note this is not a valid tax configuration and can introduce rounding errors.

### Web API

<!--- 61907 -->* You can now use  REST to successfully update customer information without unintentionally deleting default billing and shipping address information.


<!--- 61135 -->* You can now use  REST to  add video to a product description. [GitHub-7153](https://github.com/magento/magento2/issues/7153)

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
    <td><a href="https://github.com/magento/magento2/pull/8880" target="_blank">8880</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/WaPoNe" target="_blank">Michele Fantetti</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9092" target="_blank">9092</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5627" target="_blank"> (GITHUB-5627)</a></td>
    <td><a href="https://github.com/malachy-mcconnell" target="_blank">@malachy-mcconnell</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9324" target="_blank">9324</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4427" target="_blank"> (GITHUB-4427)</a></td>
    <td><a href="https://github.com/latenights" target="_blank">@latenights</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9332" target="_blank">9332</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9333" target="_blank">9333</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4232" target="_blank"> (GITHUB-4232)</a> </td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9364" target="_blank">9364</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4868" target="_blank"> (GITHUB-4868)</a>, <a href="https://github.com/magento/magento2/issues/6997" target="_blank"> (GITHUB-6997)</a>, <a href="https://github.com/magento/magento2/issues/9364" target="_blank"> (GITHUB-9364)</a></td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9365" target="_blank">9365</a></td>
    <td>d><a href="https://github.com/magento/magento2/issues/4868" target="_blank"> (GITHUB-4868)</a>, <a href="https://github.com/magento/magento2/issues/6997" target="_blank"> (GITHUB-6997)</a>,<a href="https://github.com/magento/magento2/issues/9364" target="_blank"> (GITHUB-9364)</a></td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9376" target="_blank">9376</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/navarr" target="_blank">Navarr Barnier</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9396" target="_blank">9396</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6451" target="_blank"> (GITHUB-6451)</a></td>
    <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9485" target="_blank">9485</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7497" target="_blank"> (GITHUB-7497)</a>, <a href="https://github.com/magento/magento2/issues/9485" target="_blank"> (GITHUB-9485)</a></td>
    <td><a href="https://github.com/rachkulik" target="_blank">Ilia Rachkulik</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9487" target="_blank">9487</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9428" target="_blank"> (GITHUB-9428)</a></td>
    <td><a href="https://github.com/mikebox" target="_blank">Jayakanth Rajan</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9499" target="_blank">9499</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4828" target="_blank"> (GITHUB-4828)</a>, <a href="https://github.com/magento/magento2/issues/6222" target="_blank"> (GITHUB-6222)</a>,  <a href="https://github.com/magento/magento2/issues/6815" target="_blank"> (GITHUB-6815)</a></td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9500" target="_blank">9500</a></td>
    <td>N/A</td>Pieter Hoste
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9524" target="_blank">9524</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8607" target="_blank"> (GITHUB-8607)</a></td>
    <td><a href="https://github.com/LoganayakiK" target="_blank">@LoganayakiK</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9571" target="_blank">9571</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6866" target="_blank"> (GITHUB-6866)</a></td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9590" target="_blank">9590</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5352" target="_blank"> (GITHUB-5352)</a>,  <a href="https://github.com/magento/magento2/issues/5633" target="_blank"> (GITHUB-5633)</a>, <a href="https://github.com/magento/magento2/issues/5916" target="_blank"> (GITHUB-5916)</a>, <a href="https://github.com/magento/magento2/issues/6275" target="_blank"> (GITHUB-6275)</a>,  <a href="https://github.com/magento/magento2/issues/9590" target="_blank"> (GITHUB-9590)</a></td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9601" target="_blank">9601</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/kassner" target="_blank">Rafael Kassner</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9647" target="_blank">9647</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9646" target="_blank"> (GITHUB-9646)</a></td>
    <td><a href="https://github.com/ekuusela" target="_blank">Eero Kuusela</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/magento/magento2/pull/9653" target="_blank">9653</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/kassner" target="_blank">@kassner</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/magento/magento2/pull/9655" target="_blank">9655</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9518" target="_blank"> (GITHUB-9518)</a></td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/magento/magento2/pull/9660" target="_blank">9660</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/kassner" target="_blank">Rafael Kassner</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/magento/magento2/pull/9661" target="_blank">9661</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/kassner" target="_blank">Rafael Kassner</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/magento/magento2/pull/9662" target="_blank">9662</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/kassner" target="_blank">Rafael Kassner</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/magento/magento2/pull/9704" target="_blank">9704</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9679" target="_blank"> (GITHUB-9679)</a>
</td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/magento/magento2/pull/9770" target="_blank">9770</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9139" target="_blank"> (GITHUB-9139)</a>
</td>
    <td><a href="https://github.com/poongud" target="_blank">Poogudivanan</a></td>
  </tr>

<tr>
    <td><a href="https://github.com/magento/magento2/pull/9776" target="_blank">9776</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7959" target="_blank"> (GITHUB-7959)</a></td>
    <td><a href="https://github.com/dreamworkers" target="_blank">Abhisek Pandey</a></td>
  </tr>

<tr>
    <td><a href="https://github.com/magento/magento2/pull/9841" target="_blank">9841</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9562" target="_blank"> (GITHUB-9562)</a>,
 <a href="https://github.com/magento/magento2/issues/6746" target="_blank"> (GITHUB-6746)</a></td>
    <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
    <td><a href="https://github.com/magento/magento2/pull/10011" target="_blank">10011</a></td>
    <td>N/A</td>
    <td><a href="https://github.com/lazyguru" target="_blank">Joe Constant</a></td>
  </tr>


</table>









<!--- INTERNAL ONLY  64299, 64244, 64243, 64242, 64241, 64240, 70084, 67109, 67115, 67101, 66711, 70037, 70036, 67748, 69707, 68990, 68951, 70620, 70617, 60742, 69474, 67110, 64512, 67715, 69637, 66276, 67104, 67105, 67751, 68826, 67261 -->

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see
[System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html){:target="_blank"}.


{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits

The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){:target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){:target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){:target="_blank"}.

The [Code Migration Toolkit](https://github.com/magento/code-migration){:target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
