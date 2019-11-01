---
group: release-notes
title: Magento Commerce 2.2.8 Release Notes

---

*Release notes published on March 26, 2019 and last edited on July 31, 2019.*

We are pleased to present Magento Commerce 2.2.8. This release includes over 30 critical enhancements to product security, over 150 core code fixes and enhancements, and  285 community-submitted pull requests.

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.8) have been ported to 2.3.1, 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.

## Apply patch PRODSECBUG-2233 to address critical remote code execution vulnerability (RCE)

An unauthenticated cross-site scripting vulnerability combined with an authenticated Phar deserialization vulnerability has left this version of Magento Commerce open to serious exploit. An attacker can use these vulnerabilities to inject JavaScript into the Magento Admin and subsequently launch malicious code in a store user’s browser.   **We strongly recommend that all users of the affected versions of Magento download and apply the appropriate patch as soon as possible**.

This issue and the available patches are discussed in the [Extending the June 25 Security Update to Older Versions of Magento](https://community.magento.com/t5/Magento-DevBlog/Extending-the-June-25-Security-Update-to-Older-Versions-of/ba-p/138231)
blog post. You can directly access patch code through your Magento account for Magento Commerce. Locate the patch by the name. We provide both Git-based and Composer-based patches.

## Apply patch PRODSECBUG-2198 to address critical SQL injection vulnerability

A critical SQL injection vulnerability has been identified in 2.2.x Magento code. A fix for this issue is included in Magento 2.2.8. If you cannot immediately apply the full patch, you can quickly protect your store from this vulnerability by installing patch PRODSECBUG-2198.  However, **we strongly encourage all merchants to stay up-to-date on security patches**. See the description of  PRODSECBUG-2198  in the  [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for information on this vulnerability.

Follow these steps to download and apply this patch:

1. Access [My Account](https://account.magento.com/customer/account/login).

1. Navigate to the **Downloads** tab. Select the Magento edition and version you need.

1. Select **Support Patches and Security Patches**, then **PRODSECBUG-2198**.

1. Download the patch and upload to a specific directory in your Magento installation such as `m2-hotfixes` (confirm  that the directory is not accessible publicly).

1. From your project root, apply the patch.  `git apply ./m2-hotfixes/<patch-file-name>`.

1. Refresh the cache from the Admin (**System** > **Cache Management**).

## PayPal Payflow Pro active carding activity update

The PayPal Payflow Pro integration in Magento is being actively targeted by carding activity. To resolve these carding activity issues, Magento has provided Composer packages that add an option for Google reCAPTCHA and CAPTCHA to the Payflow Pro checkout form. See [PayPal Payflow Pro active carding activity](https://support.magento.com/hc/en-us/articles/360025515991) for a full discussion of this issue and instructions on downloading these packages. **We strongly recommend that all Payflow Pro merchants download and install these packages to help enhance the security of their storefronts**.

## Apply the Admin Dashboard Image-Charts patch to address deprecation of Google Image Charts

Magento 2.x currently uses Google Image Charts to render static charts in Admin dashboards. Google stopped supporting Google Image Charts on March 14, 2019, and Magento is providing the Admin Dashboard Image-Charts  patch to replace Google Image Charts with the Image-Charts free service. Users of Magento 2.x deployments will not be able to view static charts in Magento 2.x instances unless they download and apply this patch.

See  [Switch from deprecated Google Image Charts to Image-Charts for Magento](https://support.magento.com/hc/en-us/articles/360024850172) for information on downloading and applying this patch.

## Highlights

Look for the following highlights in this release:

### Merchant tool enhancements

*  **Improved order creation workflow in the Admin**. The Admin order creation workflow has been refactored to eliminate delays when editing billing and shipping addresses. Processing of these fields now happens only after they are populated. <!-- MAGETWO-96174 -->

*  **Ability to upload PDP images without compression and downsizing**. Merchants can now upload PDP images larger than 1920 x 1200  without first compressing and downsizing the images. Previously, when a merchant uploaded a high quality product image (larger than 1920 x 1200), Magento resized and compressed the image. Merchants can now set requirements for resizing and compression as well as compression quality and target width and height. <!-- MAGETWO-95299 -->

### Substantial security enhancements

These releases include security enhancements that help close cross-site scripting, arbitrary code execution, and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. All exploitable security issues fixed in this release (2.2.8) have been ported to 2.3.1, 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.

### Infrastructure improvements

*  **Magento now supports Elasticsearch 6.x**. (Elasticsearch 5.x  reached end-of-life on March 11, 2019. For more information, see [Elastic Product End of Life Dates](https://www.elastic.co/support/eol). *Fix submitted by community member Romain Ruaud*. Thank you, Romain!

*  Magento’s implementation of the Authorize.Net Direct Post payment method currently uses MD5 based hash for all M1 and M2 installations. As of June 28, 2019, Authorize.Net will stop supporting MD5 based hash usage. See [Authorize.Net Direct Post](https://docs.magento.com/m2/2.2/ee/user_guide/payment/authorize-net-direct-post.html) for a discussion of this deprecation and the steps you need to take to add the new key you’ll need after deprecation.  <!-- MAGETWO-98129-->*

*  The shipping and billing data that a user enters during checkout now persists if the user interrupts checkout to continue shopping. Previously, checkout data was deleted after a cart update. <!-- MAGETWO-95067 -->

### Bundled extension enhancements

This release of Magento includes extensions developed by third-party vendors.

#### dotdigital Engagement Cloud (formerly dotmailer)

*  dotmailer has been rebranded as dotdigital Engagement Cloud.

#### Magento Shipping

*  Multiple improvements to the Shipment workflow user experience.

*  **Batch Processing**. Error messaging and field validation has been added to the batch processing workflow.

*  **Carrier Specific Packaging**. Carrier-specific packaging has been added for FedEx. These packages will be available for selection during shipping if a FedEx carrier is configured.

*  **Security**. We've closed scenarios that could allow for third-party code execution.

*  **Magento Cart Price Rules**. Cart price rules can now be applied to Magento Shipping.

#### Vertex

*  Added support for B2C VAT.

*  Added support for configurable logging.

## Functional fixes

In addition to security enhancements, this release contains the following functional fixes.

### Installation, setup, and deployment

<!-- MC-5926  -->
*  The `bin/magento setup:config:set --enable-syslog-logging=true|false` command now provides the functionality that Magento previously provided in .  See [Logging]({{ page.baseurl }}/config-guide/cli/logging.html).

<!-- MAGETWO-83474  -->
*  The storefront now  uses HTTPS exclusively and the Admin  uses HTTP without resulting in excessive redirects.

<!-- ENGCOM-2958 -->
*  Controllers with different route IDs and front names  no longer redirect users  to the dashboard when a user clicks on a menu link. *Fix submitted by Laura Folco in pull request [18018](https://github.com/magento/magento2/pull/18018)*. [GitHub-7557](https://github.com/magento/magento2/issues/7557)

<!-- ENGCOM-2723  -->
*  Integrations are no longer reset after running the `bin/magento setup:upgrade` command. *Fix submitted by Pratik Oza in pull request [18273](https://github.com/magento/magento2/pull/18273)*. [GitHub-12095](https://github.com/magento/magento2/issues/12095)

<!-- ENGCOM-3001  -->
*  The `./bin/magento config:show` command no longer fails with a fatal error after you run `./bin/magento app:config:dump`. *Fix submitted by Keyur Shah in pull request [17993](https://github.com/magento/magento2/pull/17993)*. [GitHub-17582](https://github.com/magento/magento2/issues/17582)

<!-- ENGCOM-3104  -->
*  A new `cron.log` file dedicated to logging cron-related information has been added to Magento. This new log file reduces output previously sent to the `system.log` file, making it easier to find non-cron-related information in the `system.log` file. *Fix submitted by Pieter Hoste in pull request [18389](https://github.com/magento/magento2/pull/18389)*. [GitHub-17190](https://github.com/magento/magento2/issues/17190)

<!-- ENGCOM-3207  -->
*  The `getHostUrl()` method has been updated to reference `HTTP_HOST` rather than `SERVER_PORT`. *Fix submitted by Vishal Gelani in pull request [18659](https://github.com/magento/magento2/pull/18659)*. [GitHub-12969](https://github.com/magento/magento2/issues/12969)

<!-- MAGETWO-95411  -->
*  You can now install Magento without first creating an administrator account.

<!-- ENGCOM-3756 -->
*  Magento now skips disabled modules  when compiling static content. *Fix submitted by Shikha Mishra in pull request [19989](https://github.com/magento/magento2/pull/19989)*. [GitHub-19605](https://github.com/magento/magento2/issues/19605)

<!-- ENGCOM-3881  -->
*  The `config:set --lock-config` command  now acts as expected on all scopes. Previously, after this command was run, admin users were not able to change the configuration for the default store, but could still change it for other scopes. *Fix submitted by Mahesh Singh in pull request [20322](https://github.com/magento/magento2/pull/20322)*. [GitHub-19609](https://github.com/magento/magento2/issues/19609)

### Backend

<!-- MAGETWO-96174  -->
*  The address form in the Admin order creation workflow has been refactored to improve performance.

<!-- ENGCOM-3777 -->
*  Calling `getCurrentUrl` on a store no longer adds the  `___store` parameter when **store code in URL** is set to **yes** and the current store is not the same store requested in the URL. *Fix submitted by Shikha Mishra in pull request [19910](https://github.com/magento/magento2/pull/19910)*. [GitHub-19285](https://github.com/magento/magento2/issues/19285)

<!-- ENGCOM-3868  -->
*  `CustomerRepository::getList()` now loads custom attributes named `company`. *Fix submitted by Govind Sharma in pull request [20284](https://github.com/magento/magento2/pull/20284)*. [GitHub-17759](https://github.com/magento/magento2/issues/17759)

### B2B

<!-- MAGETWO-96442  -->
*  Merchants can now add a product to the default public catalog,  and the product can be accessed by the product URL on the storefront. Previously, Magento did not add the product to the shared catalog and instead displayed this error, `Requested categories don't exist`.

<!-- MAGETWO-94884  -->
*  Magento no longer displays a duplicate **Add product** button when you change currency from the Order currency dropdown while creating an order from the Admin.

<!-- MAGETWO-94820  -->
*  Magento no longer deletes custom shared catalogs  when the user that created it is deleted.

<!-- MAGETWO-85125  -->
*  Magento now loads the company profile, roles, and permissions sections of a company account when **Enable Reward Points Functionality** is set to **no** in the Admin, and you flush cache storage.

<!-- MAGETWO-88254  -->
*  Tier pricing remains in effect when you add a product with tier pricing  to an order from the Admin. Previously, Magento converted tier prices to non-discounted product prices when you added more products to the order, applied a custom price to one of the products, or applied a coupon code to the order.

<!-- MAGETWO-90835  -->
*  You can now filter customers by status. Previously, Magento threw an SQL ERROR when you clicked on **Apply Filters** after setting the filter to status.

<!-- MAGETWO-94431  -->
*  Magento now displays products that merchants have added to the public catalog through **Product** > **Edit page** > **Shared Catalog**. Previously, these items appeared if added  through **Catalog** > **Shared Catalog**, but not through **Product** > **Edit page** > **Shared Catalog**.

<!-- MAGETWO-89296  -->
*  Menus now close as expected from the Quick Order page in mobile view.

### Bundle products

<!-- MAGETWO-88810  -->
*  Bundle product SKUs are now built based on the order of the associated (selected) product ID numbers in ascending order. Previously, SKUs were built based on the order of the selected product ID numbers in ascending order instead of the order in which the option is added to the bundle product.

<!-- ENGCOM-2997  -->
*  Magento no longer overwrites user-defined option quantities with default values when a customer edits a bundle product from a shopping cart. *Fix submitted by Joseph Maxwell in pull request [15905](https://github.com/magento/magento2/pull/15905)*. [GitHub-4942](https://github.com/magento/magento2/issues/4942)

<!-- ENGCOM-3275  -->
*  Bundle special prices are now correctly rounded when you load and resave a bundle product. Previously, when you reloaded a bundle with a special price that requires four positions after the decimal (for example, 78,9473), Magento rounded the price to two decimal places. *Fix submitted by magently in pull request [17971](https://github.com/magento/magento2/pull/17971)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)

<!-- MAGETWO-90381  -->
*  Magento now maintains the correct base price for a bundle product when you add a bundle product in one currency and then add the same bundle product option in a different currency. Previously, when you added the same bundle product option in a different currency, Magento doubled the base price.

### CAPTCHA

<!-- MAGETWO-93780  -->
*  CAPTCHA now appears as expected in the Log in popup window.

### Catalog

<!-- ENGCOM-3392  -->
*  Magento now correctly calculates fixed tier price discount for products with special prices. *Fix submitted by Vishal Gelani in pull request [18743](https://github.com/magento/magento2/pull/18743)*. [GitHub-18652](https://github.com/magento/magento2/issues/18652)

<!-- MAGETWO-69650  -->
*  Products no longer display discounted prices in the shopping cart unless discounts have been applied or special or tiered prices are in effect.

<!-- MAGETWO-73140  -->
*  Categories that are set to anchor **Yes** and that have disabled subcategories no longer display  products from those disabled subcategories. [GitHub-9002](https://github.com/magento/magento2/issues/9002)

<!-- MAGETWO-96288  -->
*  You can now use REST to update category positions.

<!-- MAGETWO-95556  -->
*  Magnifier now correctly handles zoomed sections of images when the image width/height ratio has a `~2x` difference. Previously, these sections were distorted.

<!-- MAGETWO-95461  -->
*  You can now save products with at least one tier price.

<!-- MAGETWO-95122  -->
*  Magento now saves default values for category URL paths in accordance with the **Use Default Value**  and **Create a Permanent Redirect** settings. Previously, in deployments running multiple stores, if a category's URL key was changed and saved, Magento did not change the category's URL key back to the default URL key when saved with the **Use Default Value** box checked and **Create a Permanent Redirect** box unchecked.

<!-- MAGETWO-73687  -->
*  Magento now retains across categories any value you set for the number of categories displayed per page.

<!-- MAGETWO-73449  -->
*  Changes to product images made under the All Stores scope now affect product images at the store-view level.

<!-- MAGETWO-93149  -->
*  You can now successfully change and save product order when you use a rule that implements a `contains` condition operator in Virtual Merchandiser. Previously, Magento did not save product position as expected.

<!-- MAGETWO-91070  -->
*  Category pages now display products  when swatch images are missing. Previously, Magento did not display these products, and the console displayed this error message, `Error: [object Object]`.

<!-- ENGCOM-4089  -->
*  Removed unnecessary slash from `app/code/Magento/CatalogInventory/etc/di.xml`. This extraneous slash had previously resulted in `Magento\Catalog\Api\ProductRenderListInterface` returning products regardless of visibility. *Fix submitted by Milind Singh in pull request [20886](https://github.com/magento/magento2/pull/20886)*. [GitHub-20409](https://github.com/magento/magento2/issues/20409)

<!-- MAGETWO-73342  -->
*  Customers can change product status by clicking on the toggle element or by clicking on label text, but not by clicking the area around a toggle element. Previously, if a customer  clicked on the area around a toggle element, Magento changed the state of the element. Unintended results could occur if a customer mistakenly clicked on the area around the element and didn't realize that the status had  changed.

<!-- ENGCOM-2930  -->
*  Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by Pieter Hoste in pull request [17885](https://github.com/magento/magento2/pull/17885)*. [GitHub-14050](https://github.com/magento/magento2/issues/14050)

<!-- ENGCOM-2943  -->
*  You can now save a product on deployments in single-store mode when the default website has been removed and a new website has been added. *Fix submitted by Eduard Chitoraga in pull request [18001](https://github.com/magento/magento2/pull/18001)*. [GitHub-13405](https://github.com/magento/magento2/issues/13405)

<!-- ENGCOM-3047  -->
*  `getStoreId()` now consistently returns `int`. *Fix submitted by sv3n in pull request [18086](https://github.com/magento/magento2/pull/18086)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)

<!-- ENGCOM-3097  -->
*  You can now set a Boolean attribute to `is_filterable`, which allows them to be included in layered navigation. *Fix submitted by Mr. Lewis in pull request [17823](https://github.com/magento/magento2/pull/17823)*. [GitHub-3283](https://github.com/magento/magento2/issues/3283)

<!-- ENGCOM-3050  -->
*  If you create a catalog price rule based on categories with a nesting level 4 or higher, these categories now maintain the status of their checkboxes when you re-open Category Chooser. Previously, when you reopened these categories, no checkboxes were checked.  *Fix submitted by magently in pull request [18175](https://github.com/magento/magento2/pull/18175)*. [GitHub-17493](https://github.com/magento/magento2/issues/17493)

<!-- ENGCOM-3133  -->
*  An incorrect return type in the `StockRegistryInterface` API has been corrected. *Fix submitted by Mr. Lewis in pull request [18427](https://github.com/magento/magento2/pull/18427)*. [GitHub-15085](https://github.com/magento/magento2/issues/15085)

<!-- ENGCOM-3158  -->
*  Magento no longer changes the attribute type of `backend_type` from `varchar` to `int` when the product associated with the attribute is saved or updated in the Admin. *Fix submitted by Bartosz Kubicki in pull request [18196](https://github.com/magento/magento2/pull/18196)*. [GitHub-9219](https://github.com/magento/magento2/issues/9219)

<!-- ENGCOM-3171  -->
*  Magento now validates the quantity of items in the shopping cart against the **Maximum Qty Allowed in Shopping Cart** setting. *Fix submitted by Vishal Gelani in pull request [18552](https://github.com/magento/magento2/pull/18552)*. [GitHub-18477](https://github.com/magento/magento2/issues/18477)

<!-- ENGCOM-3193  -->
*  When a new customer is created, Magento sets a value of zero for any custom attribute if no other value is explicitly provided. Previously, if no value was explicitly assigned, Magento did not save the custom attribute with any value. *Fix submitted by Oleksandr Kravchuk in pull request [16915](https://github.com/magento/magento2/pull/16915)*. [GitHub-14510](https://github.com/magento/magento2/issues/14510)

<!-- ENGCOM-3230  -->
*  `\Magento\Catalog\Model\Product::getQty()` now consistently returns float/double. *Fix submitted by Mr. Lewis in pull request [18424](https://github.com/magento/magento2/pull/18424)*. [GitHub-18094](https://github.com/magento/magento2/issues/18094)

<!-- ENGCOM-3254  -->
*  Magento no longer resets data entered from one WYSIWYG editor when you switch to a second editor when editing catalog categories. *Fix submitted by m.matrafailo in pull request [18535](https://github.com/magento/magento2/pull/18535)*. [GitHub-18534](https://github.com/magento/magento2/issues/18534)

<!-- ENGCOM-3261  -->
*  The **order by price** option for product listings on category pages now works as expected. *Fix submitted by Giel Berkers in pull request [18737](https://github.com/magento/magento2/pull/18737)*. [GitHub-18264](https://github.com/magento/magento2/issues/18264)

<!-- ENGCOM-2930  -->
*  Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by Pieter Hoste in pull request [17885](https://github.com/magento/magento2/pull/17885)*. [GitHub-13720](https://github.com/magento/magento2/issues/13720), [GitHub-14050](https://github.com/magento/magento2/issues/14050)

<!-- ENGCOM-3317  -->
*  Magento now provides a white-space trimming function for SKUs on the Admin. *Fix submitted by Vishal Gelani in pull request [18862](https://github.com/magento/magento2/pull/18862)*. [GitHub-16572](https://github.com/magento/magento2/issues/16572), [GitHub-12300](https://github.com/magento/magento2/issues/12300)

<!-- MAGETWO-93673  -->
*  You can now use an attribute set on the product create page after moving the attributes from one attribute group to another.

<!-- MAGETWO-96258  -->
*  **Sorting by a price** for configurable products on category pages now works correctly when the **Display Out of Stock Products** setting is enabled.

<!-- MAGETWO-96374  -->
*  In a multi-website instance, with a category that contains products belonging to different websites, when the product sort order in a category is changed at the store-view level, the products that belong to a different website gets unassigned from the category.

<!-- MAGETWO-90930  -->
*  Magento now correctly displays the greater than operator (>) when you configure the catalog products list widget for a CMS block.

<!-- ENGCOM-3312  -->
*  You can now insert multiple catalog product list widgets in a CMS page.

<!-- ENGCOM-3373  -->
*  Performance has improved for sessions where  customers browse many product pages. (This performance boost is a result of replacing the jQuery `localStorage` API  with native `localStorage` in `app/code/Magento/Catalog/view/frontend/web/js/product/storage/data-storage.js` and  `app/code/Magento/Catalog/view/frontend/web/js/product/storage/ids-storage.js`.) *Fix submitted by Oleksandr Miroshnichenko in pull request [19014](https://github.com/magento/magento2/pull/19014)*. [GitHub-17813](https://github.com/magento/magento2/issues/17813)

<!-- ENGCOM-3790  -->
*  Magento now correctly imports  `product_type` drop-down attributes. Previously, Magento displayed an error message indicating that values for these attributes were incorrect during import.

<!-- ENGCOM-3800  -->
*  Magento no longer throws an exception when a customer tries to place an order whose components will be shipped to different addresses.

<!-- ENGCOM-4004  -->
*  The `bin/magento catalog:images:resize` command now processes all specified images.

<!-- ENGCOM-4003  -->
*  The message that Magento displays when you successfully add a product to your cart or shopping list is now available in the i18n translation file.

<!-- ENGCOM-3859  -->
*  `getProductUrl` no longer returns the wrong URL when the current category has no products.

<!-- ENGCOM-3978  -->
*  Magento now correctly applies the **Set Items' Status to be In Stock When Order is Cancelled** attribute setting. Previously, after an order was canceled, Magento increased product stock even when **Set Items' Status to be In Stock When Order is Cancelled** is set to **no**.

<!-- ENGCOM-3832  -->
*  Magento no longer displays a negative value on the product list page when a product's stock falls below the product's `OutOfStock` threshold value.

<!-- ENGCOM-3826  -->
*  Deleting an image from **Admin** > **Catalog** > **Categories** now deletes the image as expected. Previously, the deleted image remained in `pub\media\catalog\category`. *Fix submitted by p-bystritsky in pull request [20178](https://github.com/magento/magento2/pull/20178)*. [GitHub-16198](https://github.com/magento/magento2/issues/16198)

<!-- MAGETWO-95898  -->
*  Magento now successfully updates product quantities in the mini-shopping cart for a product that has **Qty Uses Decimals** and **Enable Qty Increments** are enabled. Previously, Magento did not update the product quantity, but displayed this error, `You can buy this product only in quantities of 1.1 at a time`.

<!-- MAGETWO-94988  -->
*  Product images on the storefront are now identical in size, width, height, and DPI to the  image as specified for upload in the Admin.

### Catalog rule

<!-- ENGCOM-3396  -->
*  Magento no longer throws an exception when you try to edit and save a catalog price rule when the Admin language is set to a language other than English.

### Cart and checkout

<!-- MAGETWO-95938  -->
*  Administrators with appropriate permissions can now manage customer shopping carts from the Admin. Previously, when an administrator clicked **Manage Shopping Cart** from **Admin** > **Customers** > **Customer**, Magento threw an error.

<!-- MAGETWO-95846  -->
*  Customers can now configure options for a configurable product after adding it to their shopping cart.  Previously, under these circumstances, Magento threw a fatal error.

<!-- MAGETWO-95067  -->
*  Checkout information now persists after a cart update. Information previously entered by a customer during check out (such as shipping address) now persists after the customer updates their shopping cart. Previously, when a customer updated their shopping cart, all information previously entered during check out (such as shipping address) was deleted

<!-- MAGETWO-94425  -->
*  Magento now updates the minicart as expected when an administrator updates the product from the Admin. Previously, if a product that had been added to the shopping cart was subsequently disabled from the Admin,  the product was still displayed in the cart.

<!-- MAGETWO-91932  -->
*  Magento now validates zip codes for new addresses as expected when the **My billing and shipping address are the same** option is unchecked.

<!-- MAGETWO-91138  -->
*  You can now update the quantity of grouped product  if the quantity field was left empty when initially added to an Admin order by SKU. Previously, under these circumstances, you could not update the quantity.

<!-- MAGETWO-90056  -->
*  Tooltips that are available from the checkout page on mobile devices are now displayed properly. Previously, customers had to scroll to access the tooltip.

<!-- MAGETWO-89397  -->
*  Magento now uses the configured default sort order  during checkout to calculate totals. Previously, Magento ignored the configured order and used **Sub Total** > **Shipping** > **Discount** > **Tax** > **Grand Total** to calculate order totals.

<!-- MAGETWO-87971  -->
*  Magento  no  longer displays any Top destinations in the shopping cart's Country drop-down menu after a customer  removes unneeded destinations.

<!-- MAGETWO-87016  -->
*  Magento no longer removes the billing and shipping address information for an order when a customer cancels an order by clicking **Cancel and Return** when  using PayPal Website Payments Pro Hosted Solution. Previously, when a customer placed an order and then clicked the **Cancel and Return** link, Magento removed the billing/shipping address and displayed an error.

<!-- MAGETWO-87016  -->
*  Expired gift cards are no longer applied to a customer's account. Previously, if a gift card applied to a customer account expired, Magento could not complete the checkout process.

<!-- MAGETWO-72877  -->
*  Magento now displays the correct status for orders with zero subtotals. Previously, new order status appeared as pending when it was processing.

<!-- MAGETWO-62841  -->
*  Magento no longer permits you to use the up and down arrow keys to enter negative numbers when entering a credit card number on the payment information page during checkout.

<!-- MAGETWO-86477  -->
*  Magento now displays informative error messages when an order paid for with Authorize.Net fails.

<!-- ENGCOM-3649  -->
*  `\Magento\Checkout\Observer\SalesQuoteSaveAfterObserver` now updates the checkout session quote ID as needed.

<!-- ENGCOM-3348  -->
*  You can now select a payment method during check for an order placed in a deployment where different payment methods are configured for different countries. *Fix submitted by Rahul Mahto in pull request [18908](https://github.com/magento/magento2/pull/18908)*. [GitHub-18907](https://github.com/magento/magento2/issues/18907)

<!-- ENGCOM-3315  -->
*  Custom shipping methods in custom carrier code can now include underscores.

<!-- ENGCOM-3322  -->
*  The global search icon on the Admin is now correctly aligned. *Fix submitted by Kajal Solanki in pull request [18917](https://github.com/magento/magento2/pull/18917)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)

<!-- ENGCOM-3088  -->
*  Magento no longer displays the infinite loading indicator when an error occurs during check out. *Fix submitted by Ihor Sviziev in pull request [18369](https://github.com/magento/magento2/pull/18369)*. [GitHub-18330](https://github.com/magento/magento2/issues/18330)

<!-- ENGCOM-3154  -->
*  One-step checkout now works as expected. Previously, Magento displayed this console error when you tried to complete an order using one-step checkout, `Uncaught TypeError: Cannot read property 'code' of undefined at UiClass.initialize (/en_US/Magento_Checkout/js/view/progress-bar.js:31:93)`. *Fix submitted by Ihor Sviziev in pull request [18495](https://github.com/magento/magento2/pull/18495)*. [GitHub-18164](https://github.com/magento/magento2/issues/18164)

<!-- ENGCOM-3251  -->
*  The **Clear shopping cart** button now works as expected. Previously, the page reloaded, but the shopping cart was not cleared. *Fix submitted by Luuk Schakenraad in pull request [18597](https://github.com/magento/magento2/pull/18597)*.

<!-- ENGCOM-3195  -->
*  Magento now displays a product's special price on the storefront, product listings, and product detail page as expected when the special price is 0.00. Previously, Magento displayed the regular price, but used the special price for sorting and quote calculations. *Fix submitted by Mahesh Singh in pull request [18604](https://github.com/magento/magento2/pull/18604)*. [GitHub-18268](https://github.com/magento/magento2/issues/18268)

<!-- MAGETWO-86120  -->
*  You can now add gift wrapping to the shopping cart to an already  added product without having to add to additional product.

### Clean up and minor refactoring

<!-- ENGCOM-3935  -->
*  Fixed checkbox alignment on the account information page. *Fix submitted by suryakant-krish in pull request [19646](https://github.com/magento/magento2/pull/19646)*. [GitHub-19645](https://github.com/magento/magento2/issues/19645)

<!-- ENGCOM-3738  -->
*  Corrected misspelled argument name `allowDrug` to `allowDrag` in `vendor/magento/module-catalog/view/adminhtml/templates/catalog/product/attribute/set/main.phtml`.

<!-- ENGCOM-3766  -->
*  Corrected formatting issue on **Catalog** > **Category** > **Product** > **Assign products** page.

<!-- ENGCOM-3903  -->
*  Corrected alignment of the **Detailed Rating** field on the Edit Review page. *Fix submitted by Amol Chaudhari in pull request [20272](https://github.com/magento/magento2/pull/20272)*. [GitHub-20120](https://github.com/magento/magento2/issues/20120)

<!-- ENGCOM-3540  -->
*  Corrected the logic in JavaScript for the **Add to cart** button  and `last-order-items.js`. *Fix submitted by Vishal Gelani in pull request [19357](https://github.com/magento/magento2/pull/19357)*. [GitHub-13157](https://github.com/magento/magento2/issues/13157)

<!-- ENGCOM-4014  -->
*  Fixed misalignment of logo on the Admin home page. *Fix submitted by Rajneesh Gupta in pull request [20544](https://github.com/magento/magento2/pull/20544)*. [GitHub-20399](https://github.com/magento/magento2/issues/20399)

<!-- ENGCOM-3933  -->
*  Fixed misalignment of logo on Admin home page. *Fix submitted by suryakant-krish in pull request [20456](https://github.com/magento/magento2/pull/20456)*. [GitHub-19791](https://github.com/magento/magento2/issues/19791)

<!-- ENGCOM-3853  -->
*  Magento no longer displays a hamburger menu on a page where no menus are present. *Fix submitted by Amol Chaudhari in pull request [20219](https://github.com/magento/magento2/pull/20219)*. [GitHub-20210](https://github.com/magento/magento2/issues/20210)

<!-- ENGCOM-3895  -->
*  Fixed display issue with the customer login page input field length in tablet view. *Fix submitted by Nainesh Waghale in pull request [20369](https://github.com/magento/magento2/pull/20369)*. [GitHub-20172](https://github.com/magento/magento2/issues/20172)

<!-- ENGCOM-3970  -->
*  The email confirmation popup's  **Close** button no longer overlaps with page content. *Fix submitted by Arvinda Kumar in pull request [19986](https://github.com/magento/magento2/pull/19986)*. [GitHub-19985](https://github.com/magento/magento2/issues/19985)

<!-- ENGCOM-3322  -->
*  The global search icon on the Admin is now correctly aligned. *Fix submitted by Kajal Solanki in pull request [18917](https://github.com/magento/magento2/pull/18917)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)

<!-- ENGCOM-3324  -->
*  Removed redundant asterix on **Admin** > **Catalog** > **Display Settings**. *Fix submitted by suryakant-krish in pull request [18922](https://github.com/magento/magento2/pull/18922)*. [GitHub-18918](https://github.com/magento/magento2/issues/18918)

<!-- ENGCOM-3327  -->
*  Corrected typo in  name of event (`catalogsearch_searchable_attributes_load_after`) dispatched by `Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider::getSearchableAttributes`. *Fix submitted by Neeta Kangiya in pull request [18372](https://github.com/magento/magento2/pull/18372)*. [GitHub-18355](https://github.com/magento/magento2/issues/18355)

<!-- ENGCOM-3534  -->
*  Content in  confirmation popups on the Admin no longer overlap the **Close** button. *Fix submitted by Vishal Gelani in pull request [19340](https://github.com/magento/magento2/pull/19340)*. [GitHub-19263](https://github.com/magento/magento2/issues/19263)

<!-- ENGCOM-3527  -->
*  The **Add to Cart** button in the Recently Ordered block now works as expected. *Fix submitted by Vladyslav Podorozhnyi in pull request [19023](https://github.com/magento/magento2/pull/19023)*. [GitHub-17833](https://github.com/magento/magento2/issues/17833)

<!-- ENGCOM-3541  -->
*  Fixed the rendering of the check notifications counters icon on the Admin. *Fix submitted by Vishal Gelani in pull request [19356](https://github.com/magento/magento2/pull/19356)*. [GitHub-18887](https://github.com/magento/magento2/issues/18887)

<!-- ENGCOM-3618  -->
*  You can now add a custom field to a newsletter in the position of your choice by editing  the newsletter configuration file (`app/code/Magento/Newsletter/etc/adminhtml/system.xml`).  Previously, you could add a new field but could not select where it would appear in the newsletter. *Fix submitted by Burlacu Vasilii in pull request [19568](https://github.com/magento/magento2/pull/19568)*. [GitHub-19418](https://github.com/magento/magento2/issues/19418)

<!-- ENGCOM-3748  -->
*  Corrected typo in `SalesRule/Model/ResourceModel/Coupon/Usage.php`. *Fix submitted by Milind Singh] in pull request [19968](https://github.com/magento/magento2/pull/19968)*. [GitHub-19721](https://github.com/magento/magento2/issues/19721)

<!-- ENGCOM-4010  -->
*  Added a missing space between the title of the workflow step and the saved address on the first page of the checkout process. *Fix submitted by Shikha Mishra in pull request [20418](https://github.com/magento/magento2/pull/20418)*. [GitHub-20304](https://github.com/magento/magento2/issues/20304)

<!-- ENGCOM-4040  -->
*  Fixed misalignment of the title of the order page accessed when you check a recent order in the sidebar of listing pages or account pages. *Fix submitted by Amol Chaudhari in pull request [20744](https://github.com/magento/magento2/pull/20744)*. [GitHub-20500](https://github.com/magento/magento2/issues/20500)

<!-- ENGCOM-4058  -->
*  Fixed misalignment of the **Edit** and **Remove** buttons on the gift option popup that Magento displays when a customer adds a product to the shopping cart. *Fix submitted by Ajay Ajabale in pull request [20784](https://github.com/magento/magento2/pull/20784)*. [GitHub-20604](https://github.com/magento/magento2/issues/20604)

<!-- ENGCOM-4090  -->
*  Fixed the alignment of the **Apply discount** button  on the checkout page. *Fix submitted by Amol Chaudhari in pull request [20837](https://github.com/magento/magento2/pull/20837)*. [GitHub-20137](https://github.com/magento/magento2/issues/20137)

<!-- ENGCOM-3882  -->
*  Corrected alignment of the store switcher in Tab view. *Fix submitted by Shikha Mishra in pull request [20325](https://github.com/magento/magento2/pull/20325)*. [GitHub-20158](https://github.com/magento/magento2/issues/20158)

<!-- ENGCOM-3934  -->
*  Corrected the alignment of Contact us area accessed from the storefront page footers. *Fix submitted by suryakant-krish in pull request [20455](https://github.com/magento/magento2/pull/20455)*. [GitHub-19800](https://github.com/magento/magento2/issues/19800)

<!-- ENGCOM-3734  -->
*  Fixed alignment of the **Update Qty** button on the sales order invoice. *Fix submitted by Kajal Solanki( in pull request [19804](https://github.com/magento/magento2/pull/19804)*. [GitHub-19796](https://github.com/magento/magento2/issues/19796)

<!-- ENGCOM-4017  -->
*  Fixed alignment of the currency value rate field on credit memos created from the Admin. *Fix submitted by Dipti in pull request [20613](https://github.com/magento/magento2/pull/20613)*. [GitHub-20609](https://github.com/magento/magento2/issues/20609)

### Configurable products

<!-- ENGCOM-3554  -->
*  Translations for `tier_price.phtml` now works as expected. Previously, these translations were not included in `js-translation.json`, and not visible on the storefront. *Fix submitted by Oleksii Gorbulin in pull request [19377](https://github.com/magento/magento2/pull/19377)*. [GitHub-19085](https://github.com/magento/magento2/issues/19085)

<!-- MAGETWO-89230  -->
*  You can now add a configurable product with no options  to a gift registry from a wishlist.

<!-- ENGCOM-3135  -->
*  Magento no longer throws a fatal error when you try to save a configurable product with an SKU equal to or less than 64 digits. *Fix submitted by Thiago in pull request [18461](https://github.com/magento/magento2/pull/18461)*. [GitHub-18082](https://github.com/magento/magento2/issues/18082)

### CMS

<!-- MAGETWO-94154  -->
*  Files and folders that are symlinked in `pub/media` can now be deleted from the media gallery browser. Previously, these symlinked files or folders inside of the `pub/media` directory could not be deleted because a validation check  uses `realpath` to test whether a file is outside of the media directory base path.

<!-- MAGETWO-91122  -->
*  The WYSIWYG editor no longer arbitrarily removes `aria-role` attributes from  `div` in CMS pages or blocks.

### Customer

<!-- MAGETWO-97151  -->
*  Order creation page in Admin was fixed and now works without any performance issues and slowdowns for customer accounts with 3000 addresses.

<!-- MAGETWO-95990  -->
*  Magento no longer unchecks the default billing and shipping address checkboxes when you create or update a customer address using the API.

<!-- MAGETWO-89847  -->
*  Customers can now be matched in customer segments based on the number of orders in a multi-site deployment

<!-- MAGETWO-87214  -->
*  When a customer uses a gift card to make a purchase, Magento now applies only the applicable amount to the invoice. Previously, the total amount of the gift card was applied to a customer's store credit for a partial invoice.

<!-- MAGETWO-81818  -->
*  Magento now loads customer private data only once when system state changes. Previously, Directory Data and Cart were loaded twice after a user logged in to the system, which caused additional server load and traffic.

<!-- ENGCOM-3052  -->
*  Magento now maintains alphabetical order for customer groups when you filter customers by group in the Admin.  Previously, groups were sorted by ID. *Fix submitted by Dmytro Cheshun in pull request [18280](https://github.com/magento/magento2/pull/18280)*. [GitHub-18101](https://github.com/magento/magento2/issues/18101)

<!-- ENGCOM-3107  -->
*  Merchants can now edit a customer account if the customer's password has expired. *Fix submitted by Dmytro Cheshun in pull request [18414](https://github.com/magento/magento2/pull/18414)*. [GitHub-18162](https://github.com/magento/magento2/issues/18162)

<!-- ENGCOM-3082  -->
*  Magento now saves customer custom attributes as expected when  EAV caching is disabled.  Previously, directly saving customer information resulted in data loss. *Fix submitted by Francesco Haymar d'Ettory in pull request [17968](https://github.com/magento/magento2/pull/17968)*. [GitHub-12479](https://github.com/magento/magento2/issues/12479)

<!-- MAGETWO-96079  -->
*  You can now successfully update your password from the link provided in the email sent when you click **Reset Password** on the Admin.  Previously, Magento did not update the password and displayed this message, `Something went wrong while saving the new password`.

<!-- MAGETWO-87853  -->
*  You can now change payment methods after selecting store credit when creating an order from the Admin.

<!-- ENGCOM-3812  -->
*  Customers who have an address associated with a country that has not been set to **allowed** can now successfully reset their password.

<!-- MAGETWO-93072  -->
*  Magento now displays the value of a custom customer address attribute  in the column for that attribute when you create a custom customer address attribute and set it to be displayed in the Columns list.  Previously, Magento added the customer code column to the Customer table, but left these columns blank.

<!-- MAGETWO-74169  -->
*  Magento displays no traces of the store credit functionality on the front end when you set **Store Credit Functionality** to **no** when installing Magento. [GitHub-5609](https://github.com/magento/magento2/issues/5609)

### Customer custom attributes

<!-- MAGETWO-89039  -->
*  Customer address attribute validation during checkout now permits spaces.

<!-- MAGETWO-95059  -->
*  Merchants can now create attributes  for customer addresses (**Stores** > **Attributes** > **Customer Address**) as expected. Previously, a merchant could create an attribute, but Magento did not save or display it.

<!-- MAGETWO-86686  -->
*  Magento now adds the address entered during checkout to a new account when a custom address attribute is required when creating a user account after checkout.

### Developer

<!-- ENGCOM-2940  -->
*  You can now print order information from the customer dashboard. Previously, when you tried to print  order information from the customer dashboard, Magento displayed this error, `Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php`. *Fix submitted by passtet in pull request [17984](https://github.com/magento/magento2/pull/17984)*. [GitHub-10440](https://github.com/magento/magento2/issues/10440)

### Directory

<!-- ENGCOM-2747  -->
*  Australian country regions are now available from the drop-down menu that Magento displays during the checkout address population steps. *Fix submitted by Maxim Baibakov in pull request [17516](https://github.com/magento/magento2/pull/17516)*. [GitHub-17514](https://github.com/magento/magento2/issues/17514)

### Downloadable

<!-- ENGCOM-3385  -->
*  The order confirmation email sent to the customer during  guest checkout now includes download links for purchased downloadable products as expected. *Fix submitted by Oleksandr Kravchuk in pull request [19036](https://github.com/magento/magento2/pull/19036)*. [GitHub-10934](https://github.com/magento/magento2/issues/10934),
 [GitHub-19003](https://github.com/magento/magento2/issues/19003),  [GitHub-18323](https://github.com/magento/magento2/issues/18323)

<!-- ENGCOM-3584  -->
*  You can now delete a sample link from a downloadable product. Previously, Magento restored a deleted link after you saved the downloadable product. *Fix submitted by Ansari in pull request [19431](https://github.com/magento/magento2/pull/19431)*. [GitHub-19344](https://github.com/magento/magento2/issues/19344)

### EAV

<!-- ENGCOM-3128  -->
*  Magento no longer changes the ute source_model when you create an attribute option through the API. Previously, the `source_model` of an EAV attribute was set to `Magento\Eav\Model\Entity\Attribute\Source\Table` when updating an EAV attribute's options through the API. This eliminated the ability to update this attribute's options through the Admin. *Fix submitted by Pieter Hoste in pull request [18390](https://github.com/magento/magento2/pull/18390)*. [GitHub-13156](https://github.com/magento/magento2/issues/13156)

<!-- ENGCOM-3215  -->
*  Magento no longer throws an SQL Join error when you use a custom EAV entity  with the `standard eav_entity` entity table. Previously, this usage resulted in an integrity constraint violation. *Fix submitted by Oleksii Lisovyi in pull request [18566](https://github.com/magento/magento2/pull/18566)*. [GitHub-18532](https://github.com/magento/magento2/issues/18532)

<!-- ENGCOM-3732  -->
*  You can now retrieve the  product attribute value for store-view scope types in the product collection that is loaded for a specific store. *Fix submitted by Shikha Mishra in pull request [19911](https://github.com/magento/magento2/pull/19911)*. [GitHub-18374](https://github.com/magento/magento2/issues/18374)

### Email

<!-- MAGETWO-95057  -->
*  The return path e-mail variable `system/smtp/return_path_email` now works as expected.

### Frameworks

<!-- ENGCOM-3921  -->
*  Fixed icon behavior on product customization page. *Fix submitted by Kajal Solanki in pull request [19400](https://github.com/magento/magento2/pull/19400)*. [GitHub-19399](https://github.com/magento/magento2/issues/19399)

<!-- ENGCOM-3740  -->
*  Newly added links on the customer dashboard are now shown as current as expected when the link path has been constructed from both default and new elements. Previously, the link was added, but not shown in the current state as expected. *Fix submitted by Eduard Chitoraga in pull request [19927](https://github.com/magento/magento2/pull/19927)*. [GitHub-19099](https://github.com/magento/magento2/issues/19099)

<!-- ENGCOM-3359  -->
*  Class `\Magento\Framework\Data\Form\Element\Fieldset` now calls the `getBeforeElementHtml` method. *Fix submitted by Burlacu Vasilii in pull request [18985](https://github.com/magento/magento2/pull/18985)*. [GitHub-2618](https://github.com/magento/magento2/issues/2618)

<!-- ENGCOM-2942  -->
*  The `bin/magento module:uninstall` command  now works as expected with Composer. Previously, there was a discrepancy between `composer.lock` and `composer.json` when this command was used to remove a module. *Fix submitted by Francesco Haymar d'Ettory in pull request [18002](https://github.com/magento/magento2/pull/18002)*. [GitHub-5797](https://github.com/magento/magento2/issues/5797)

<!-- ENGCOM-3172  -->
*  Magento now throws `LogicException($message, 0, $e)` instead of `LogicException($message)` as needed when running validation for communication configuration (`communication.xml`).  Previously, the  validator in `Magento\Framework\Communication\Config\Validator` did not propagate exceptions, which obscured the cause of the error. *Fix submitted by Vishal Gelani in pull request [18554](https://github.com/magento/magento2/pull/18554)*. [GitHub-14555](https://github.com/magento/magento2/issues/14555)

<!-- MAGETWO-87297  -->
*  Module names can now contain numbers. Previously, `magento/framework-message-queue/etc/queue_base.xml` contained a pattern that did not allow numbers to be used in `instanceType`, which resulted in the invalidation of custom message consumers in this file.

<!-- MAGETWO-95779  -->
*  Attributes in flat tables are now updated after the product is saved when the catalog product flat index is turned on and the indexer is set to **Save on Update**.

<!-- MAGETWO-93183  -->
*  You can now set all products that currently have **Set Product as New** set to **yes** set to **no**. This change affects bulk updates, CSV imports, and scheduled updates.

<!-- ENGCOM-3528  -->
*  Images can now by default be successfully imported from HTTP and redirected to HTTPS. Previously, the image could not be uploaded.

<!-- ENGCOM-3568  -->
*  Interceptor class methods now support nullable return types. *Fix submitted by Oleksandr Kravchuk in pull request [19398](https://github.com/magento/magento2/pull/19398)*. [GitHub-15505](https://github.com/magento/magento2/issues/15505)

<!-- ENGCOM-3479  -->
*  Magento can now read responses from third-party servers that use HTTP/2 if your server also uses HTTP/2. Previously, this inability to read requests from third-party servers that use HTTP/2 prevented access to Magento Marketplace. *Fix submitted by Vishal Gelani in pull request [19239](https://github.com/magento/magento2/pull/19239)*. [GitHub-19127](https://github.com/magento/magento2/issues/19127)

<!-- ENGCOM-3424  -->
*  The node in `events.xml`  can now have child nodes. Previously, a cache flush triggered an exception. *Fix submitted by Lisovyi Yevhenii in pull request [19145](https://github.com/magento/magento2/pull/19145)*. [GitHub-15931](https://github.com/magento/magento2/issues/15931)

#### Cache framework

<!-- MAGETWO-73528  -->
*  Problems with cache-cleaning for product pages for simple  products associated with configurable products  have been resolved. and as a result, product pages now now accurately display out-of-stock status.  Previously, when an associated product went out-of-stock, Magento did not update the product page of the configurable product unless you cleaned the cache. [GitHub-8009](https://github.com/magento/magento2/issues/8009)

<!-- MAGETWO-69766  -->
*  The images cache can now be flushed from the Admin (**Admin** > **System** > **Cache Management** and click **Flush Catalog Images Cache**). Previously, you could not delete the directory, and Magento displayed an error on the cache management page.

#### JavaScript framework

<!-- MAGETWO-74160  -->
*  Wishlist names can now contain apostrophes. Previously, a wishlist whose name contained an apostrophe could not be edited or deleted.

### General

<!-- MAGETWO-89377  -->
*  You can now create a customer without a phone number when **Show Telephone** is set to optional. Previously, Magento displayed an informative error message and did not let you create the customer.

<!-- ENGCOM-3507  -->
*  Resolved issues with pager style. *Fix submitted by Kajal Solanki in pull request [19296](https://github.com/magento/magento2/pull/19296)*. [GitHub-19286](https://github.com/magento/magento2/issues/19286)

<!-- ENGCOM-3301  -->
*  Removed use of `escapeJS` method in  `app/code/Magento/SendFriend/view/frontend/templates/send.phtml`. *Fix submitted by Rahul Mahto in pull request [18886](https://github.com/magento/magento2/pull/18886)*. [GitHub-18779](https://github.com/magento/magento2/issues/18779)

<!-- ENGCOM-2937  -->
*  Merchants can now change the currency symbol back to its default value from the Admin in Single-store mode. Previously, when a merchant tried to change this symbol back to its default value, Magento displayed a success message, but did not change the currency symbol back to the default value. *Fix submitted by magently in pull request [17966](https://github.com/magento/magento2/pull/17966)*. [GitHub-17567](https://github.com/magento/magento2/issues/17567)

<!-- ENGCOM-2938  -->
*  The menu on category pages accessed from the Admin now work as expected when you change from mobile to desktop view. *Fix submitted by Emanuel Arcos in pull request [17990](https://github.com/magento/magento2/pull/17990)*. [GitHub-5402](https://github.com/magento/magento2/issues/5402)

<!-- ENGCOM-3054  -->
*  The WYSIWYG editor now correctly parses directives of files that contain special characters in their URLs. Previously, the editor did not decode base64 special chars. *Fix submitted by adammada in pull request [18215](https://github.com/magento/magento2/pull/18215)*. [GitHub-18138](https://github.com/magento/magento2/issues/18138)

<!-- ENGCOM-3200  -->
*  Navigation arrows in the fotorama zoom now work as expected. *Fix submitted by Luuk Schakenraad in pull request [18595](https://github.com/magento/magento2/pull/18595)*. [GitHub-18585](https://github.com/magento/magento2/issues/18585)

<!-- ENGCOM-3311  -->
*  You can now customize the view of tab and accordion components by using mixins to redefine the default variables in the scope of a custom theme. *Fix submitted by Vishal Gelani in pull request [18875](https://github.com/magento/magento2/pull/18875)*. [GitHub-18729](https://github.com/magento/magento2/issues/18729)

<!-- MAGETWO-87734  -->
*  You can now pause product videos on YouTube on storefronts that are running on Internet Explorer 11.x.

<!-- MAGETWO-90189  -->
*  You can sort a grouped product's associated products across multiple pages. Previously, when you tried to sort associated products, Magento sorted only the products visible on the current page.

<!-- MAGETWO-85932  -->
*  Product pages that are included in a related products rule that uses a Price (percentage) condition now load correctly. Previously, loaded pages were blank.

<!-- MAGETWO-86549  -->
*  After a session expires, and a customer refreshes the page, Magento displays an empty shopping cart and logs out the customer as expected. Previously, Magento displayed an empty shopping cart but the minicart still displayed the selected items, and if the customer refreshed the page again, the shopping cart displayed the items.

<!-- MAGETWO-94423  -->
*  You can now successfully save a role from the Admin. Previously, when you saved a role from the Admin, Magento removed all  users from the role (no matter which checkbox was checked), and displayed this message, `This user has no tokens`.

<!-- MAGETWO-89487  -->
*  Fixed  error message overlapping on the  **Quick Search Form Types** field on **Admin** > **Content** > **Elements** > **Widgets** > **Add Widget**.

<!-- MAGETWO-89438  -->
*  Magento now prompts you to enter a valid value when you enter a value of zero for a customer group price discount by percentage when setting advanced pricing for a product.  Previously, Magento threw an error.

### Gift card

<!-- MAGETWO-90920  -->
*  Magento now displays the correct creation date for a gift card when the **Lifetime** field is populated.

<!-- MAGETWO-87985  -->
*  Magento now consistently validates gift card prices according to the constraints of the relevant store locale.

### Gift registry

<!-- MAGETWO-95738  -->
*  Magento now shows the correct price for configurable products in a shared gift registry. Previously, Magento displayed the original price instead of the special price for configurable products.

<!-- MAGETWO-73447  -->
*  You can now successfully preview a Registry Update email template. Previously, Magento threw a fatal error when you tried to preview this template.

### Google Analytics

<!-- ENGCOM-3091  -->
*  Google Analytics JavaScript is now loaded correctly on the frontend. *Fix submitted by Petar Sambolek in pull request [18375](https://github.com/magento/magento2/pull/18375)*. [GitHub-16497](https://github.com/magento/magento2/issues/16497)

<!-- ENGCOM-2271  -->
*  You can now save configuration from the **Admin**  > **Stores** > **Configuration** > **General** > **Advanced Reporting** without providing an industry value. Previously, Magento did not save configuration settings, and displayed this error:  `Please select a vertical.` *Fix submitted by Sunil in pull request [15366](https://github.com/magento/magento2/pull/15366)*. [GitHub-15259](https://github.com/magento/magento2/issues/15259)

### Image

<!-- MAGETWO-93985  -->
*  Magnifier now works as expected on any supported operating system and browser. Previously, Magnifier did not hover correctly on devices running Windows Chrome or FireFox.

<!-- MAGETWO-94235  -->
*  Images added to a product attribute using the WYSIWYG editor now display as expected on the storefront. Previously, the URL for these images included the Admin CMS directive path in their URL.

### Import/export

<!-- ENGCOM-3877  -->
*  We've resolved multiple issues that users previously encountered when importing configurable products with images and virtual products. Previously, image import failed under certain circumstances, and Magento displayed these messages:  `Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s)` and `Products are imported but configurable product has no image in Magento`.

<!-- ENGCOM-3827  -->
*  Magento now indicates correct stock status (in stock/out-of-stock) after importing products that have an indicated quantity but a status of out-of-stock from a CSV file. Previously, Magento imported the product quantity correctly, but not the stock status. *Fix submitted by p-bystritsky in pull request [20177](https://github.com/magento/magento2/pull/20177)*. [GitHub-15950](https://github.com/magento/magento2/issues/15950)

<!-- ENGCOM-2930  -->
*  Magento now correctly displays all linked products in the correct order in the Admin tables. Previously, Magento displayed all products correctly on the storefront, but products were missing from the Admin display. *Fix submitted by Pieter Hoste in pull request [17885](https://github.com/magento/magento2/pull/17885)*. [GitHub-13720](https://github.com/magento/magento2/issues/13720), [GitHub-14050](https://github.com/magento/magento2/issues/14050)

<!-- ENGCOM-2916  -->
*  Magento does not change or overwrite  `url_key` values when updating product data during import if no values are provided in the import data.  *Fix submitted by Joseph McDermott in pull request [17882](https://github.com/magento/magento2/pull/17882)*. [GitHub-17023](https://github.com/magento/magento2/issues/17023)

<!-- ENGCOM-3321  -->
*  Magento now displays an error message after you run check data when importing new products with SKUs that exceed the maximum permitted length. *Fix submitted by Ravi Chandra in pull request [18591](https://github.com/magento/magento2/pull/18591)*. [GitHub-17865](https://github.com/magento/magento2/issues/17865)

<!-- MAGETWO-93222  -->
*  Magento no longer deletes  `url-key` values for existing products when updating these products with imported data that does not contain `url-key` values.

<!-- MAGETWO-86048  -->
*  Special characters in the CSV import file no longer trigger a general system exception. Previously, special characters (for example, <code>ƒ</code>, <code>ª</code>, and <code>›</code>) halted the check data phase of import.

<!-- MAGETWO-73922  -->
*  You can now properly set data for drop-down attributes during product import in deployments with multiple storeviews.

<!-- MAGETWO-95101  -->
*  URL Key columns that contain  accented characters are now converted properly after the import of a CSV file. Previously, if you manually assigned a URL key to a product in the Admin that contained an accent character or punctuation, Magento converted it to the regular character or removed it.

<!-- MAGETWO-94432  -->
*  You can now hide an image as expected by using the `hide_from_product_page` attribute during import.

<!-- MAGETWO-91283  -->
*  Import now completes successfully when a product’s CSV entry is split over two import bunches.  Previously, Magento threw this error, `Cannot add or update a child row: a foreign key constraint fails`, and import failed.

<!-- MAGETWO-95653  -->
*  Magento now retains product order within a category after import.

<!-- MAGETWO-74012  -->
*  You can now provide your own sample data file for a custom module in `your_module/Files/Sample/your_sample.csv`. Previously, this custom sample file had to be placed in the ImportExport module. [GitHub-6553](https://github.com/magento/magento2/issues/6553)

<!-- MAGETWO-95535  -->
*  Imported images of all sizes no longer revert to the default placeholder size after import.

<!-- MAGETWO-95535  -->
*  Imported images that were removed through the Admin before import remain absent after import. Magento now displays an informative error message if images are not imported as expected.

<!-- ENGCOM-4075  -->
*  The `\Magento\ImportExport\Block\Adminhtml\Export\Filter::_getSelectHtmlWithValue()` method no longer overwrites `$value` arguments. Previously, Magento used the same name for different `$value` variables. *Fix submitted by Rajneesh Gupta in pull request [20863](https://github.com/magento/magento2/pull/20863)*. [GitHub-20624](https://github.com/magento/magento2/issues/20624)

<!-- MAGETWO-74044  -->
*  The import process now supports `add_update` along with the default behavior `append`.  [GitHub-6193](https://github.com/magento/magento2/issues/6193)

<!-- MAGETWO-94072  -->
*  Configurable products based on swatches are now exported with the correct Admin and Default Store View labels. Previously, after import the `configurable_variations` column for these configurable products contained the wrong values.

### Infrastructure

<!-- ENGCOM-3025  -->
*  Magento no longer throws an error when you send an email from the command line. Previously, Magento threw an exception because `$debugHintsPath` was missing. *Fix submitted by passtet in pull request [17984](https://github.com/magento/magento2/pull/17984)*. [GitHub-10440](https://github.com/magento/magento2/issues/10440)

### Integration

<!-- ENGCOM-3102  -->
*  The Last logged In value displayed on the customer account page on the Admin is now updated as expected when a customer is authenticated through REST. *Fix submitted by Prakash in pull request [17978](https://github.com/magento/magento2/pull/17978)*. [GitHub-17488](https://github.com/magento/magento2/issues/17488)

### Layered navigation

<!-- ENGCOM-3388  -->
*  The code comment that describes the `Use in Layered Navigation: Filterable (no results)` property for the price filter has been made more informative. *Fix submitted by Vladyslav Podorozhnyi in pull request [19044](https://github.com/magento/magento2/pull/19044)*. [GitHub-14007](https://github.com/magento/magento2/issues/14007)

<!-- MAGETWO-97000 -->
*  Layered navigation for Elasticsearch now includes all product sizes. If the **Filterable (with results)** option is set for a product attribute, then:

   *  Layered navigation includes only those filters for which matching products can be found.

   *  Any attribute value that already applies to all products shown in the list should still appear as an available filter.

   *  Attribute values with a count of zero (0) product matches are omitted from the list of available filters.

<!-- MAGETWO-85162  -->
*  You can now filter products based on color.

### Magento Shipping

*  Updating an order destination prior to creating a shipment  now results in the shipment being sent to the new destination.

*  Shipments that contain the same item across multiple packages will now correctly update the shipped amount.

### Newsletter

<!-- ENGCOM-3253  -->
*  Customers are no longer unsubscribed to a newsletter as a result of a password reset email request when **Newsletter Need to Confirm** is set to **yes** on the Admin. *Fix submitted by Janak Bhimani in pull request [18643](https://github.com/magento/magento2/pull/18643)*. [GitHub-17954](https://github.com/magento/magento2/issues/17954)

<!-- MAGETWO-88736  -->
*  Magento now permits only one newsletter subscription per email address. Previously, when a website had multiple store views, a customer could subscribe multiple times to a newsletter with one email address.

<!-- MAGETWO-82530  -->
*  Magento now displays an informative `You have unsubscribed` message when you click the unsubscribe link in the newsletter email.

<!-- ENGCOM-3680  -->
*  A logged-in user who already has an account can now use the footer to sign up for a newsletter subscription. Previously, this user received an error message, and Magento did not subscribed her to the newsletter. *Fix submitted by Ravi Chandra in pull request [18912](https://github.com/magento/magento2/pull/18912)*. [GitHub-8952](https://github.com/magento/magento2/issues/8952)

### Offline shipping

<!-- ENGCOM-3079  -->
*  Magento now displays the appropriate error message when free shipping is not available for an order during check out. *Fix submitted by vaibhavahalpara in pull request [17982](https://github.com/magento/magento2/pull/17982)*. [GitHub-17977](https://github.com/magento/magento2/issues/17977)

<!-- ENGCOM-3057  -->
*  The table rate shipping method no longer fails to return a quote when a customer uses an American  post code in the form of *five-digit zip - four-digit* extension (for example, 44444-1234). *Fix submitted by magently in pull request [18166](https://github.com/magento/magento2/pull/18166)*. [GitHub-17770](https://github.com/magento/magento2/issues/17770)

### Payment methods

<!-- MAGETWO-93750  -->
*  Customers are now billed in the appropriate currency for orders that have been paid with using PayPal Payflow Pro. Previously, customers were billed in U.S. dollars even when another currency had been set.

<!-- MAGETWO-94260  -->
*  Magento now displays the correct billing address in the order confirmation email when  **Paypal Express Checkout** is enabled. Previously, Magento displayed the shipping address instead of the billing address.

<!-- MAGETWO-96587  -->
*  When an order placed with PayPal fails during checkout, Magento no longer processes payment for the order. Previously, orders that failed during the checkout when being processed through PayPal were processed.

<!-- ENGCOM-3997  -->
*  Magento now identifies shipping method in the Shipping section of the order review page for orders that are paid with using PayPal Express. *Fix submitted by Nirav Kadiya in pull request [19655](https://github.com/magento/magento2/pull/19655)*. [GitHub-14712](https://github.com/magento/magento2/issues/14712)

<!-- ENGCOM-3691  -->
*  Magento now correctly handles attribute options that begin with zero. Previously, these attribute options  did not work if an option with the same number but lacking the zero already existed. *Fix submitted by SikailoISM in pull request [19612](https://github.com/magento/magento2/pull/19612)*. [GitHub-19436](https://github.com/magento/magento2/issues/19436)

<!-- ENGCOM-3316  -->
*  Magento now populates the estimated billing address  field  on the checkout page with the default billing address as expected when the cart contains virtual products only. Previously, when a signed-in customer with different default shipping and billing addresses had a cart containing only virtual products, the cart estimation field was populated with the default shipping address information  instead of the default billing address information. *Fix submitted by Vishal Gelani in pull request [18863](https://github.com/magento/magento2/pull/18863)*. [GitHub-17744](https://github.com/magento/magento2/issues/17744)

<!-- ENGCOM-2629  -->
*  You can now use REST to create an order without payment. Previously, when using REST to submit an order without a payment, Magento threw an error. *Fix submitted by Michiel Gerritsen in pull request [15683](https://github.com/magento/magento2/pull/15683)*. [GitHub-15652](https://github.com/magento/magento2/issues/15652)

<!-- MAGETWO-96289  -->
*  A popup no longer blocks completion of check out using Braintree PayPal on a mobile device.

<!-- MAGETWO-90929  -->
*  Customers can now check out using PayPal when the **Request Billing Information** feature is not enabled. Previously, Magento threw this error when a customer tried to check out with Braintree through Paypal from the shopping cart,  `Undefined index: billingAddress in /app/aacdg4mgbgw24/vendor/magento/module-braintree/Model/PayPal/Helper/QuoteUpdater.php on line 138`.

<!-- MAGETWO-94857  -->
*  Magento now creates invoices as expected for orders created using Braintree PayPal. Previously, Magento threw an error when a merchant tried to create an invoice for an order from **Admin** > **Sales** > **Order**.

<!-- MAGETWO-95218  -->
*  When a customer selects PayPal as a payment method but then applies a gift card, Magento now reverts to zero subtotal checkout. Previously, the order failed at the review step if a gift card were applied.

### Pricing

<!-- MAGETWO-95721  -->
*  Sorting by price now works as expected. Previously, when a merchant removed a special price or a simple product, the `final_price`, `min_price` and `max_price` attributes of the `catalog_product_index_price` table was changed to 0.0000 instead of reverting back to the original price.

### Quote

<!-- MAGETWO-91332  -->
*  You can now request a quote on a storefront running on iOS 11.3.1.

<!-- MAGETWO-95180  -->
*  Merchants can now create new user roles that do not have  access to quotes.

<!-- ENGCOM-3314  -->
*  You can now use REST to set billing information for a customer (`customerId`) with an existing address. Previously, Magento threw an exception during address validation. *Fix submitted by Vishal Gelani in pull request [18872](https://github.com/magento/magento2/pull/18872)*. [GitHub-17485](https://github.com/magento/magento2/issues/17485)

<!-- ENGCOM-3839  -->
*  You can now update a shopping cart that contains a reserved order number (for example, 000000651). *Fix submitted by Saphal Jha in pull request [20208](https://github.com/magento/magento2/pull/20208)*. [GitHub-19101](https://github.com/magento/magento2/issues/19101)

<!-- ENGCOM-3975  -->
*  We fixed an issue with inaccurate floating point calculations during checkout. *Fix submitted by Shikha Mishra in pull request [20638](https://github.com/magento/magento2/pull/20638)*. [GitHub-18027](https://github.com/magento/magento2/issues/18027)

### Reports

<!-- MAGETWO-90727  -->
*  Magento now updates the reports table as expected when a new administrator with restricted privileges logs in and selects **Report** > **Products** > **Ordered**. Previously, Magento did not generate this report, and logged an error in `var/log/system.log`.

### Review

<!-- ENGCOM-3833  -->
*  Administrators can now access product ratings in deployments with multiple websites running different locales. *Fix submitted by Saphal Jha in pull request [20183](https://github.com/magento/magento2/pull/20183)*. [GitHub-18192](https://github.com/magento/magento2/issues/18192)

<!-- MAGETWO-93988  -->
*  The  **Save and Next** and **Save and Previous** buttons in **Marketing** > **Reviews** now work as expected.

### Reward

<!-- MAGETWO-89737  -->
*  Customers are now subscribed as expected to email notifications about reward points.

<!-- MAGETWO-88674  -->
*  `/V1/orders/{id}` now retrieves information about used reward points.

### RMA

<!-- MAGETWO-96664  -->
*  Magento now displays newly created RMA attributes on the storefront when the **Enable RMA on Storefront** RMA attribute is enabled.

<!-- MAGETWO-94019  -->
*  The **Show/Hide** details button now works as expected on the Returns (RMA) page.

<!-- MAGETWO-94232  -->
*  Return attributes that have the **Values Required** attribute  set to **no** no longer break the storefront display of those attributes.

<!-- MAGETWO-72953  -->
*  Magento now displays the correct amount in the **Remaining Quantity** field after Magento has processed a return.

<!-- MAGETWO-97009  -->
*  Administrators can now process returns when an RMA request includes a required image attribute.

### Sales

<!-- ENGCOM-1429  -->
*  The order status label on the  customer order status page  can now be translated. *Fix submitted by Riccardo Tempesta in pull request [14914](https://github.com/magento/magento2/pull/14914)*. [GitHub-14849](https://github.com/magento/magento2/issues/14849)

<!-- MAGETWO-93155  -->
*  You can now filter orders by customer email. Previously, Magento threw an error when you tried to filter orders by customer email from **Sales** > **Orders**.

<!-- ENGCOM-3791  -->
*  Fixed an incorrect class name on orders and returns pages on the Admin. *Fix submitted by Shikha Mishra in pull request [20080](https://github.com/magento/magento2/pull/20080)*. [GitHub-19780](https://github.com/magento/magento2/issues/19780)

<!-- ENGCOM-3494  -->
*  The `last_trans_id` column of the `sales_order_payment` table has been updated to handle the full order reference values for Amazon and Klarna extensions. *Fix submitted by Ian Cassidy in pull request [18621](https://github.com/magento/magento2/pull/18621)*. [GitHub-18615](https://github.com/magento/magento2/issues/18615)

<!-- ENGCOM-2940  -->
*  You can now print order information from the customer dashboard. Previously, when you tried to print  order information from the customer dashboard, Magento displayed this error, `Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php`. *Fix submitted by Mateusz Chrapek in pull request [17998](https://github.com/magento/magento2/pull/17998)*. [GitHub-9830](https://github.com/magento/magento2/issues/9830) [GitHub-10530](https://github.com/magento/magento2/issues/10530)

<!-- ENGCOM-3092  -->
*  Magento no longer marks email as **not sent** when the email copy fails due to exception. Previously, Magento marked this email as not sent, and subsequently continued to resend the email. *Fix submitted by Petar Sambolek in pull request [18376](https://github.com/magento/magento2/pull/18376)*. [GitHub-17152](https://github.com/magento/magento2/issues/17152)

<!-- MAGETWO-96976  -->
*  Magento no longer adds gift wrap tax to the credit memo twice.

<!-- MAGETWO-94295  -->
*  The **State/province** field that Magento displays for Admin orders that will be shipped to the U.S. is now a drop-down as expected. Previously, the **state/province** field  was not a drop-down menu with states but a text field.

<!-- MAGETWO-94181  -->
*  You can now issue a partial refund to store credit for an order made with an online payment method.

<!-- MAGETWO-73570  -->
*  Company logos are now displayed correctly in printed PDF versions of invoices and shipment statements.

<!-- MAGETWO-93393  -->
*  Magento now uses  the correct table rate shipment when a merchant creates an order through the Admin. Previously, when a merchant  created an order through the Admin and selected the shipping method table rate, Magento took the shipping rate table from the wrong website ID.

<!-- MAGETWO-94458  -->
*  You can now create a credit memo for an order that contains taxes and discounts and is placed online.  Previously, when you tried to create this credit memo, Magento displayed an informative error.

<!-- MAGETWO-86292  -->
*  You can now create a credit memo for an order with no payment required. Previously, when an order was placed with no payment required, the **Credit Memo** button was not displayed on the order.

<!-- MAGETWO-73039  -->
*  Orders exported to a CSV file now display dates in a consistent format.

<!-- MAGETWO-86121  -->
*  Merchants can now ship the remaining items in an order in which some items require a credit memo.

<!-- MAGETWO-96394  -->
*  Orders for bundle products created from the Admin now display  correct product prices.

<!-- MAGETWO-96141  -->
*  You can now remove a custom price from a product during order creation from the Admin.

<!-- ENGCOM-3998  -->
*  The order view invoice template is now displayed properly on the ipad. *Fix submitted by Rajneesh Gupta in pull request [20546](https://github.com/magento/magento2/pull/20546)*. [GitHub-20373](https://github.com/magento/magento2/issues/20373)

<!-- ENGCOM-3999  -->
*  Access restrictions on the order API are now enforced as expected. Previously, administrators with restricted privileges had complete access to orders. *Fix submitted by Rajneesh Gupta in pull request [20542](https://github.com/magento/magento2/pull/20542)*. [GitHub-20169](https://github.com/magento/magento2/issues/20169)

<!-- ENGCOM-3939  -->
*  Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by Prince Patel in pull request [20508](https://github.com/magento/magento2/pull/20508)*. [GitHub-19899](https://github.com/magento/magento2/issues/19899)

<!-- ENGCOM-3874  -->
*  The email that customers receive after completing an order now contains tracking information for only their order. Previously, Magento included tracking information for other orders, too. *Fix submitted by Pratik Oza in pull request [20184](https://github.com/magento/magento2/pull/20184)*. [GitHub-19887](https://github.com/magento/magento2/issues/19887)

<!-- ENGCOM-3880  -->
*  Product option values are now rendered correctly as links when  you view an order that contains a product with a file type option. *Fix submitted by Mahesh Singh in pull request [20353](https://github.com/magento/magento2/pull/20353)*. [GitHub-20352](https://github.com/magento/magento2/issues/20352)

<!-- MAGETWO-73883  -->
*  The Items Ordered list now updates as expected when the user clicks **OK** when changing the options of a configurable product during creation of an order from the Admin. Previously, the update did not occur until the user clicked **Update Items and Quantities**.

### Sales rule

<!-- MAGETWO-86098  -->
*  The cart price rule now uses specified conditions correctly when applying discounts on configurable products.

<!-- MAGETWO-86637  -->
*  The sales rule indexer now runs without error. Previously, the sales rule indexer returned an error during reindexing because of the Magento_AdvancedSalesRule module.

<!-- ENGCOM-3784  -->
*  Magento no longer throws an exception upon cancelation of an order that was placed with a coupon by a guest who, after checkout, created a customer account. *Fix submitted by Andriy Kravets in pull request [19423](https://github.com/magento/magento2/pull/19423)*. [GitHub-19230](https://github.com/magento/magento2/issues/19230)

<!-- MAGETWO-95993  -->
*  Archived orders no longer reappear in the Order Management table after cron runs.

### Search

<!-- MAGETWO-73351  -->
*  Full text search for Elasticsearch no longer includes the `date` attribute.

<!-- MAGETWO-86052  -->
*  The default sort order field now works as expected on the Catalog Search results page.

<!-- MAGETWO-86396  -->
*  Searching for a synonym that contains a hyphen and number now returns the same results as any other search term in the group

<!-- ENGCOM-3811  -->
*  A mistyped `saveHandler` has been removed from the CatalogSearch indexer declaration. *Fix submitted by Dmytro Cheshun in pull request [19984](https://github.com/magento/magento2/pull/19984)*. [GitHub-19982](https://github.com/magento/magento2/issues/19982)

### Shipping

<!-- MAGETWO-c  -->
*  Magento now uses the  shipping table rate from the correct store in multistore deployments.

<!-- MAGETWO-73894  -->
*  You can now use `GET .V1/shipments` to search for shipments that contain a shipping label. Previously, using this call  caused Magento to throw an exception. [GitHub-6668](https://github.com/magento/magento2/issues/6668)

<!-- MAGETWO-91105  -->
*  Table rates now work as expected when using the AE code (Armed Forces Europe) when calculating weight vs destination table rates.

<!-- MAGETWO-96156  -->
*  Shipments that are created through REST now return tracking information as expected. Previously, Magento created shipment notifications without a tracking number when shipment was created using REST.

<!-- MAGETWO-95497  -->
*  Magento now correctly handles U.K. shipping addresses in multisite deployments where the default store's  **Allowed Countries** setting is US only but the store from which the order is placed supports U. K. shipping. Previously, Magento did not complete the order set to ship to a U.K. address, and  displayed this error, `Please check the shipping address information. Invalid value of "GB" provided for the countryId field`.

<!-- ENGCOM-4042  -->
*  Fixed misalignment of elements on the shipping information page that Magento displays when you click **Check Out with Multiple Addresses** from the shopping cart. *Fix submitted by Amol Chaudhari in pull request [20739](https://github.com/magento/magento2/pull/20739)*. [GitHub-20563](https://github.com/magento/magento2/issues/20563)

<!-- ENGCOM-3008  -->
*  Sitemaps now display correct base URLs for deployments with  multiple stores. *Fix submitted by Toan Nguyen in pull request [18000](https://github.com/magento/magento2/pull/18000)*. [GitHub-17999](https://github.com/magento/magento2/issues/17999)

### Staging

<!-- MAGETWO-86541  -->
*  Updates containing zero objects are now removed as expected from the dashboard. Previously, Magento did not remove updates with zero objects.

<!-- MAGETWO-73332  -->
*  The staging dashboard now loads without freezing.

<!-- MAGETWO-67135  -->
*  An administrator  with a custom (limited) role can now edit and schedule  updates to CMS content pages.

<!-- MAGETWO-86102  -->
*  Restricted users with access to specified sections can now save a scheduled update. Previously, Magento threw a `forbidden` error.

### Store

<!-- ENGCOM-3737  -->
*  Calling `getCurrentUrl` on a store no longer adds the  `___store` parameter when **store code in URL** is set to **yes** and the current store is not the same store requested in the URL. *Fix submitted by Nazar in pull request [19945](https://github.com/magento/magento2/pull/19945)*. [GitHub-18941](https://github.com/magento/magento2/issues/18941)

### Swatches

<!-- ENGCOM-3383  -->
*  An administrator with appropriate permissions  can now change a product's default swatch option from the Admin. *Fix submitted by Rostislav Sabischenko in pull request [19012](https://github.com/magento/magento2/pull/19012)*. [GitHub-8348](https://github.com/magento/magento2/issues/8348)

<!-- ENGCOM-2912  -->
*  Store views now show the correct swatch values. *Fix submitted by Misha Medzhytov in pull request [17891](https://github.com/magento/magento2/pull/17891)*. [GitHub-17890](https://github.com/magento/magento2/issues/17890)

<!-- MAGETWO-73862  -->
*  You can now change the size of a swatch image as expected. [GitHub-6382](https://github.com/magento/magento2/issues/6382)

### TargetRule

<!-- MAGETWO-95420  -->
*  Magento no longer throws a fatal error when price is used in a Target Rule for actions.

<!-- MAGETWO-87678  -->
*  Magento no longer throws an exception when Target Rules are set to a rotation mode other than **SHUFFLE**. (You can set rotation modes in **Admin** > **System** > **Configurations** > **Catalog** > **Catalog** > **Rule-Based Product Relations**.)

### Tax

<!-- MAGETWO-94179  -->
*  Tax is now calculated as expected for virtual products when PayPal is used as a payment method.

<!-- ENGCOM-3319  -->
*  Magento no longer uses the default tax information set in **Stores** > **Configuration** > **Sales** > **Tax** customer, quote, and order data.  *Fix submitted by Nirav Kadiya in pull request [18857](https://github.com/magento/magento2/pull/18857)*. [GitHub-16684](https://github.com/magento/magento2/issues/16684)

### Testing

<!-- ENGCOM-3410  -->
*  Unit test annotations now assert exception messages correctly. *Fix submitted by Oleksandr Kravchuk in pull request [19105](https://github.com/magento/magento2/pull/19105)*. [GitHub-18840](https://github.com/magento/magento2/issues/18840)

<!-- ENGCOM-3875  -->
*  `magentoDataIsolation` has been replaced with `magentoDbIsolation` as needed in several integration tests. *Fix submitted by p-bystritsky in pull request [20298](https://github.com/magento/magento2/pull/20298)*. [GitHub-20296](https://github.com/magento/magento2/issues/20296)

<!-- ENGCOM-3021  -->
*  Integration tests now respect module status as defined in `config-global.php`.  This permits you to enable only the modules you typically keep enabled while still saving system resources. *Fix submitted by Jisse Reitsma in pull request [16361](https://github.com/magento/magento2/pull/16361)*. [GitHub-15196](https://github.com/magento/magento2/issues/15196)

### Theme

<!-- MAGETWO-74208  -->
*  Text now remains in the header area when you resize a page in deployments running in Internet Explorer.

<!-- MAGETWO-85037  -->
*  Wishlist and compare links now appear for related products in portrait mode when viewed on a mobile device.

<!-- MAGETWO-89546  -->
*  We've improved the display of the navigation menu on mobile deployments. Previously, Magento displayed only a portion of any submenu accessed from a top menu.

<!-- MAGETWO-94455  -->
*  The user agent rule now sets correct templates for product pages. Previously, the `footer.phtml` and `absolute_footer.phtml` templates were loaded from the desktop theme instead of the mobile theme, regardless of the user agent.

<!-- MAGETWO-87027  -->
*  The text attribute implemented on the product page within the mobile theme now fluidly displays the entire text value. Previously, long values were truncated.

<!-- MAGETWO-94462  -->
*  All thumbnails reload as expected after you click on a configurable option when a configurable product detail page has more than 14 thumbnail images. Previously, not all thumbnails reloaded.

<!-- ENGCOM-3672  -->
*  Clicking on the store logo on the home page now reloads the page. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [19199](https://github.com/magento/magento2/pull/19199)*. [GitHub-19142](https://github.com/magento/magento2/issues/19142)

### UI

<!-- ENGCOM-3973  -->
*  Image files can no longer be uploaded to Admin category pages  by dragging when the upload field has been disabled. *Fix submitted by Serhiy Zhovnir in pull request [20636](https://github.com/magento/magento2/pull/20636)*. [GitHub-20376](https://github.com/magento/magento2/issues/20376)

<!-- ENGCOM-4012  -->
*  Store switcher now works correctly on mobile devices. *Fix submitted by Rajneesh Gupta in pull request [20540](https://github.com/magento/magento2/pull/20540)*. [GitHub-20259](https://github.com/magento/magento2/issues/20259)

<!-- ENGCOM-3308  -->
*  Missing asterisks have been added where needed on the Admin. *Fix submitted by Dmytro Cheshun in pull request [18905](https://github.com/magento/magento2/pull/18905)*. [GitHub-18904](https://github.com/magento/magento2/issues/18904)

<!-- ENGCOM-3306  -->
*  The delete product confirmation popup now closes only when you click the **OK** button. *Fix submitted by Shubham Sharma in pull request [18865](https://github.com/magento/magento2/pull/18865)*. [GitHub-18458](https://github.com/magento/magento2/issues/18458)

<!-- ENGCOM-3174  -->
*  Admin tables now work as expected when single store mode is set to **on**. Previously, column positioning in these tables was not preserved when the page was refreshed. *Fix submitted by Vishal Gelani in pull request [18561](https://github.com/magento/magento2/pull/18561)*. [GitHub-12070](https://github.com/magento/magento2/issues/12070)

<!-- ENGCOM-3177  -->
*  Magento now regenerates product URL rewrites as expected after an administrator changes a product URL key from the Admin and subsequently saves the product attribute URL path value. Previously, product URL rewrites could not be generated after this attribute value was changed. *Fix submitted by Oleksii Lisovyi in pull request [18566](https://github.com/magento/magento2/pull/18566)*. [GitHub-5929](https://github.com/magento/magento2/issues/5929)

<!-- ENGCOM-3313  -->
*  You can now use the `OptionManagement.delete` method to programmatically delete a product attribute that converts to false. Previously, Magento threw an exception. *Fix submitted by Vishal Gelani in pull request [18873](https://github.com/magento/magento2/pull/18873)*. [GitHub-13083](https://github.com/magento/magento2/issues/13083)

<!-- MAGETWO-91403  -->
*  WYSIWYG editor functionality is now available in all rows of the dynamic rows UI component. Previously, this functionality was available in the first row only.

### URL rewrite

<!-- MAGETWO-86419  -->
*  Product URLs are now based on the configuration information from the Admin, not the order of records in the database. Previously, the order of records in the database affected the generated URL, and some products showed category paths for product URLS when **Use Categories Path for Product URLs** was set to **no**.

<!-- MAGETWO-94860  -->
*  The storefront now properly displays the order of categories when you move categories in the Admin.

<!-- MAGETWO-93424  -->
*  Attempts to rewrite catalog URLs with `POST /V1/products` endpoint now  work as expected. [GitHub-16789](https://github.com/magento/magento2/issues/16789)

<!-- MAGETWO-89619  -->
*  Magento no longer ignores the store-level `url_key` of child categories when rewriting URLs process for global scope. [GitHub-13513](https://github.com/magento/magento2/issues/13513)

<!-- MAGETWO-86303  -->
*  Magento now correctly updates existing product URLs during import. Previously, Magento updated existing URLs with the new URLs, but displayed a 404 error if you tried to access the product from the new URL.

<!-- ENGCOM-3175  -->
*  The upsert category process during product import now generates freshly created category URL rewrites globally and not just for the default scope. Previously, Magento created URL rewrites for the default website scope only. *Fix submitted by Vishal Gelani in pull request [18563](https://github.com/magento/magento2/pull/18563)*. [GitHub-18234](https://github.com/magento/magento2/issues/18234)

### Visual Merchandiser

<!-- MAGETWO-91019  -->
*  Visual Merchandiser now correctly sorts configurable product prices in Tile view.

### Web API framework

<!-- MAGETWO-73526  -->
*  You can now create products with same name. Previously, Magento did not create the second  product and displayed this error, `Error "URL key for specified store already exists`.

<!-- MAGETWO-86344  -->
*  Product searches using `GET V1/products` return `extension_attributes` for configurable products as expected.

<!-- MAGETWO-73061  -->
*  The response for `GET V1/orders/:orderId` now contains `bundle_option` and `product_option` information as expected.

<!-- ENGCOM-3929  -->
*  `Magento\Framework\Webapi\Rest\Response\Renderer` class's  `_formatValue` method has been refactored to handle ampersands correctly. Previously, an ampersand in any customer text field when using the WebApi doubled the encoding. [GitHub-18361](https://github.com/magento/magento2/issues/18361)

### Widget

<!-- MAGETWO-85683  -->
*  Magento now correctly renders apostrophes as entered in text fields.

<!-- MAGETWO-93947  -->
*  The product page's Recently Viewed section no longer displays the name of the current product.

<!-- ENGCOM-4037  -->
*  Fixed alignment of options on the Admin edit widget page. *Fix submitted by Amol Chaudhari in pull request [20270](https://github.com/magento/magento2/pull/20270)*. [GitHub-20113](https://github.com/magento/magento2/issues/20113)

### Wishlist

<!-- ENGCOM-3344  -->
*  Default configured values are now rendering on the wishlist product edit page. *Fix submitted by Ratnesh Kumar in pull request [18967](https://github.com/magento/magento2/pull/18967)*. [GitHub-18555](https://github.com/magento/magento2/issues/18555)

<!-- MAGETWO-90812  -->
*  Registered users can now create new wishlists as expected when multiple wishlists are enabled. Previously, Magento displayed an error.

<!-- MAGETWO-93035  -->
*  Magento no longer retains entries for deleted products in the database `wishlist_item_option` table.

### WYSIWG

<!-- ENGCOM-3291  -->
*  The `id_prefix` option for the cache frontend, which is used to prefix cache keys, is now set when Magento is installed. Previously, the performance of all websites in multisite deployments was uneven due to the previous mechanism used to prefix cache keys. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request [18641](https://github.com/magento/magento2/pull/18641)*. [GitHub-15828](https://github.com/magento/magento2/issues/15828)

## Known issues

**Issue**: Cart Price rules that were created with undefined end dates (that is, with the  **To** field left empty) are not displayed as expected on the Staging dashboard after  upgrading from Magento Open Source to Magento Commerce 2.3.1. <!--- MC-15317-->

**Issue**:  The CGI URL gateway in the UPS module has been updated from HTTP to HTTPS. Consequently, the UPS shipping method does not populate correctly. **Workaround**: Confirm that the Gateway URL uses the HTTPS protocol in the [UPS Shipping Method Configuration](https://docs.magento.com/m2/ee/user_guide/configuration/sales/shipping-methods.html). <!--- MAGETWO-98947-->

*Updating an existing setting*:

If UPS Type is set to `United Parcel Service` in the UPS Shipping Method Configuration, you must manually change the protocol of the Gateway URL from HTTP to HTTPS. Example: `https://www.ups.com/using/services/rave/qcostcgi.cgi`

*To configure UPS for the first time*:

1. Navigate to **Stores**  > **Settings**  > **Configuration**  >  **Sales**  > **Shipping Methods**. Then, expand the **UPS** section.

1. At the **UPS Type** field, clear the Use system value checkbox. Then, change **UPS Type** to `United Parcel Service XML`. The Gateway URL populates correctly when this value is selected.

1. Tap **Save Config**.

## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-8-issues.md %}

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-2-8-partner.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

### Installation and upgrade instructions

See [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
