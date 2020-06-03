---
group: release-notes
title: Magento Commerce 2.3.2 Release Notes
---

*Release notes published on June 25, 2019 and last updated on June 3, 2020.*

We are pleased to present Magento Commerce 2.3.2. This release includes over 200 functional fixes to the core product, over 350 pull requests contributed by the community, and  over 75 security enhancements. It includes  contributions from our community members. These contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.

## New security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.3) provides. Patch 2.3.2.2 (Composer package 2.3.2-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.2.

**If you have already upgraded to the pre-release version of this patch (2.3.2-p1), we strongly recommend that you upgrade to 2.3.2-p2 as soon as possible.**  Patch 2.3.2-p2 contains the critical security fixes that are included in Magento  2.3.3, 2.2.10, 1.9.4.3, and 1.14.4.3, but that are not included in patch 2.3.2-p1.

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.2-p1), see [Install Magento using Composer](https://devdocs-beta.magento.com/guides/v2.3/install-gde/composer.html#get-the-metapackage).

## Apply updated hot fix for CVE-2019-8118

The patch addresses an issue with [CVE-2019-8118](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8118) that was included in Magento 2.3.3 and 2.2.10. While the original fix for that bug stopped the logging of failed login attempts, information collected prior to updating to these current versions may still exist, and previous, unpatched versions of Magento may still have this issue. This hotfix includes both a patch (first released in Oct 2019) that stops the logging of failed login attempts and a new script that clears the login attempts that were previously collected. **We recommend that all merchants download and apply this patch and download and run the clean-up script**. See [Remove failed login attempts from the database](https://support.magento.com/hc/en-us/articles/360040209352) for information on how to download and run the patch and clean-up script.

## Apply the Scope parameter for Async/Bulk API patch to address an issue with the Async/Bulk REST API

In certain versions of Magento Open Source and Magento Commerce, the Asynchronous and Bulk REST endpoints support the default store view scope only. After this patch is applied to deployments running those versions of Magento, the current Magento message queue implementation
will factor in the store that executes queue operations. See [Patch for Magento Framework Message Queue and Store Scopes](https://community.magento.com/t5/Magento-DevBlog/Patch-for-Magento-Framework-Message-Queue-and-Store-Scopes/ba-p/135209) for a full discussion of this scope-related issue and patch contents. See [Applying patches]({{ page.baseurl }}/comp-mgr/patching.html) for specific instructions on downloading and applying Magento patches. Navigate to the [Magento Security Center](https://magento.com/security/patches), and select the patch associated with the version of Magento you are running.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes extensive security enhancements:

*  **75 security enhancements** that help close cross-site scripting (XSS), remote code execution (RCE), and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.2-2.2.9-and-2.1.18-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.3.2) have been ported to 2.2.9, 2.1.18, 1.14.4.2, and 1.9.4.2, as appropriate.

*  **Google reCAPTCHA module for PayPal Payflow checkout**. The new PaypalRecaptcha module adds Google reCAPTCHA and CAPTCHA to the Payflow Pro checkout form.  This enhanced functionality has been added in response to malicious targeting of Magento deployments that implement Payflow Pro. Configuration information can be found in [Google reCAPTCHA](https://docs.magento.com/m2/ee/user_guide/stores/security-google-recaptcha.html).  <!--- MC-15427-->

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will  assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This  will allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Performance boosts

*  **Redesign of checkout page to support customers working with many addresses**. The checkout page now provides the ability to search addresses instead of listing addresses only on the Select shipping and Billing address steps. This new search feature can substantially increase checkout performance for customers with thousands of addresses. It is  disabled by default and  must be enabled from the Admin.  See [Checkout](https://docs.magento.com/m2/ee/user_guide/configuration/sales/checkout.html#Checkout).   <!--- MC-5681--->

*  **Significant improvement to storefront page response time**. The page response times for the catalog, search, and advanced search pages have been significantly improved under high load. <!--- MAGETWO-95294--->

*  **Improved concurrent access to block cache storage**. We have optimized the logic of concurrent access to the block cache, which  has improved the response of storefront pages under high load by approximately 20%.  <!--- MC-6273-->

*  **Product page gallery load optimization**. Product images are now loaded as quickly as other page content. In previous releases, although the product page loaded quickly, product images needed two to four additional seconds to load completely. <!--- MC-15440-->

*  **Improved page rendering through deferred loading and parsing of storefront JavaScript**. All non-critical JavaScript code has been relocated to the bottom of storefront pages, which speeds up page rendering and allows users to see the complete page sooner while nonessential elements remain inactive. To enable this performance enhancement, you must navigate to **Stores** > **Configuration** > **Developer** > **JavaScript Settings** and enable the **Move JS code to the bottom of the page** option.   <!--- MC-15439-->

### Infrastructure improvements

This release contains 130 enhancements to core quality, which improve the quality of the Framework and these modules: `Catalog`, `Sales`, `Checkout/One Page Checkout`,  `UrlRewrite`, `Customer/Customers`, and `UI`. Here are some additional core enhancements:

*  **Braintree payment method is now supported for checkout with multiple addresses**. Previously, you could not use Braintree and Braintree PayPal when checking out an order that was being shipped to multiple addresses.<!--- MAGETWO-98424-->

*  **The CGI URL gateway in UPS module has been updated from HTTP to HTTPS**. The CGI URL gateway endpoint in the UPS module has been updated  from HTTP to HTTPS in response to the disablement of the HTTP gateway by UPS in mid-2019. See [Magento User Guide](https://docs.magento.com/m2/ee/user_guide/shipping/ups.html) for information about using the UPS shipment method. Shipping method configuration settings are described in  [Shipping methods](https://docs.magento.com/m2/ee/user_guide/configuration/sales/shipping-methods.html#UPS). <!--- MAGETWO-98947-->

*  **Google chart API updated to the Image-Charts**. Magento now uses the Image-Charts free service to render static charts in Admin dashboards. Earlier deployments used Google Image Charts, which was deprecated in 2012 and turned off on [March 18, 2019](https://developers.google.com/chart/image/docs/making_charts).

### Merchant tool enhancements

Magento now performs the following tasks as **asynchronous background processes** and sends system messages to alert Admin users when tasks complete. Moving these common administrative tasks to the background frees administrators to work on other tasks while the initial tasks are processing.

*  Discount coupon generation. See [Coupon Code](https://docs.magento.com/m2/ee/user_guide/marketing/price-rules-cart-coupon.html).

<!--- MC-13615-->

*  Mass editing of products.

<!--- MC-13613-->

*  Data export. Previously, connection timeouts occurred during export of large data sets (for example, the export of 200,000 products). See [Export](https://docs.magento.com/m2/b2b/user_guide/system/data-export.html) for more information. <!--- MC-5953-->

### Inventory Management enhancements

*  **New commands** allow merchants to check for reservation inconsistencies and resolve any that occur. See [Inventory CLI reference]({{ page.baseurl }}/inventory/inventory-cli-reference.html).

*  **Improved user interface** for assigning sources to products. This redesigned interface includes:

   *  Support for decimal order quantity
   *  New test scenarios created to cover Credit Memo use cases
   *  New InventoryGraphQl module provides attributes that return correct information about product quantities
   *  Single product save (using asynchronous synchronization with legacy catalog inventory)
   *  Multiple product save
   *  Bulk inventory transfer

*  **New endpoint** for Bulk Partial Stock Transfer to bulk transfer a custom product quantity between sources. See [Inventory Bulk Actions]({{ page.baseurl }}/rest/modules/inventory/bulk-inventory.html).

*  Fixes to multiple  bugs. See [Inventory Management release notes]({{ page.baseurl }}/inventory/release-notes.html).

### GraphQL

GraphQL performance improvements include these enhancements:

*  **GraphQL caching**. GraphQL can now cache the `category`, `cmsBlocks`, `cmsPage`, `products`, and `urlResolver` queries, which improves response times.  To enable this feature, send these queries using HTTP GET. You can send all other queries with HTTP GET, but they are not cached.

*  **Improvements to GraphQL coverage**.  Improved coverage for cart and checkout operations include mutations that provide support for the following actions:

   *  Support for simple and virtual products
   *  Add, update, and delete cart items
   *  Set shipping addresses (with address book support)
   *  Set the billing address (with address book support)
   *  Set shipping methods
   *  Set the payment method (offline methods only)
   *  Place an order

*  **GraphQL performance test scenario coverage**. We have added PWA GraphQL test scenarios for critical checkout and catalog browsing to the performance builds. GraphQL community developers can use the new scenarios to measure storefront performance. <!--- MC-15826, 15922-->

See [Release notes]({{ page.baseurl }}/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### Progressive Web Apps (PWA)

**Improved modular component library**. PWA Studio continues to build out the concept for functional and data components through the Peregrine library. Components can now be reused and scaled for frontend needs. Magento has planned a phased rollout for Peregrine functional and data components, starting with the Search component which is launching with this release.

### BlueFoot to Page Builder content migration

**Assistance for BlueFoot to Page Builder migration**.  The BlueFoot content migration module (PageBuilderDataMigration) enables merchants who are running Magento 2.1.x or 2.2.x with BlueFoot  to upgrade to Magento 2.3.1+ with PageBuilder 1.0 without losing their website content. This module  migrates only content created with native BlueFoot. See [Overview of content migration](https://devdocs.magento.com/page-builder-migration/docs/) for information about module installation and supported content types.

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors.

#### Amazon Pay

Amazon Pay is now compliant with the PSD2 directive for UK and Germany. See [Payment services (PSD 2) - Directive (EU)](https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en) for an introduction to PSD2.

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.2 core code.

### Installation, upgrade, deployment

<!--- ENGCOM-4602-->

*  The `configFactory` `scope` and `scope_code` values are now passed to `configFactory` as data arrays. *Fix submitted by ochnygosch in pull request [22012](https://github.com/magento/magento2/pull/22012)*. [GitHub-21993](https://github.com/magento/magento2/issues/21993)

<!--- ENGCOM-4582-->

*  Magento now renders the value of configuration variables (such as `{{unsecure_base_url}}`) as they are entered in  configuration files rather than saving the resolved value. Previously, Magento resolved the variable to its actual value, which lead to the overwriting the value in the database when the configuration was saved instead of storing the value in the variable. *Fix submitted by Pieter Hoste in pull request [18067](https://github.com/magento/magento2/pull/18067)*. [GitHub-15972](https://github.com/magento/magento2/issues/15972)

<!--- ENGCOM-4751-->

*  Magento no longer throws an error when you use  `app:config:import` to import configuration settings. Previously, the import failed, and Magento threw the following error even when the imported file contained only minor changes to password or URL values: `Please specify the admin custom URL`. *Fix submitted by David Alger in pull request [22281](https://github.com/magento/magento2/pull/22281)*. [GitHub-15090](https://github.com/magento/magento2/issues/15090)

<!--- MAGETWO-95675-->

*  Magento no longer throws an error when executing `bin/magento setup:static-content:deploy` in parallel mode if theme or locale deployment takes more than 400 seconds. Previously, Magento threw the following error under these conditions: `2436; Status: 0`.

<!--- ENGCOM-4794-->

*  Magento no longer throws an error during catalog set up when you run `bin/magento setup:upgrade`. Previously, set up failed, and Magento threw the following error even though no problems existed with your catalog, `Magento\Catalog\Setup\Media does not exist`. *Fix submitted by Pieter Hoste in pull request [22446](https://github.com/magento/magento2/pull/22446)*. [GitHub-22124](https://github.com/magento/magento2/issues/22124)

<!--- ENGCOM-4815-->

*  All fields are now hidden with appropriate dependencies as assigned in the backup configuration settings. *Fix submitted by Keyur Kanani in pull request [22475](https://github.com/magento/magento2/pull/22475)*. [GitHub-22474](https://github.com/magento/magento2/issues/22474)

<!--- ENGCOM-4753-->

*  Updated the email template stylesheet for the Magento default and Luma themes to correctly specify the `.no-link` selector. This update fixes the following less compilation error that displayed when compiling the `email-inline.less` file using less.js compiler v2.73: `extend '.no-link a' has no matches`. *Fix submitted by Pieter Hoste in pull request [22332](https://github.com/magento/magento2/pull/22332)*. [GitHub-22330](https://github.com/magento/magento2/issues/22330)

### AdminGWS

<!--- MAGETWO-99034-->

*  The total displayed on the widgets table (**Content** > **Elements** > **Widgets**) now reflects only the widgets for which the administrator has privilege. Previously, in a multi-site installation, the total displayed included widgets that the administrator did not have access to.

<!--- MAGETWO-98389-->

*  Administrators with access to only one website in a multisite deployments can now access the reports page for that website as expected. Previously, only administrators with access to all websites could access reports.

### Backend

<!--- MAGETWO-98183-->

*  The **State/Province** field is no longer marked as mandatory in the Admin customer address form. Previously, this field was always marked by an asterisk, even when the field was not required.

<!--- ENGCOM-4270-->

*  The icon that identifies a dropdown menu throughout the product interface now reflects the changing state of the dropdown menu's status (expanded or collapsed). *Fix submitted by Eduard Chitoraga in pull request [21197](https://github.com/magento/magento2/pull/21197)*. [GitHub-21196](https://github.com/magento/magento2/issues/21196)

<!--- ENGCOM-3924-->

*  Form fields of type multiline now work as expected on Admin forms. *Fix submitted by Vivek Kumar in pull request [20371](https://github.com/magento/magento2/pull/20371)*. [GitHub-8086](https://github.com/magento/magento2/issues/8086),  [GitHub-18115](https://github.com/magento/magento2/issues/18115)

<!--- ENGCOM-3885-->

*  Fixed display of **Option Title** label on **Catalog** > **Product** > **Customizable Options** > **Add Option**.  *Fix submitted by Arvinda Kumar in pull request [20339](https://github.com/magento/magento2/pull/20339)*. [GitHub-20337](https://github.com/magento/magento2/issues/20337)

<!--- ENGCOM-4377-->

*  Magento now displays the correct date in the Admin for scheduled design changes. Previously, Magento displayed the current date instead of the scheduled date on **Content** > **Design** > **Schedule**. *Fix submitted by Shikha Mishra in pull request [21443](https://github.com/magento/magento2/pull/21443)*. [GitHub-21425](https://github.com/magento/magento2/issues/21425)

<!--- ENGCOM-3664-->

*  Fixed alignment of the **Marketing** > **Cart Price Rules** > **Store View Specific** Labels on the Admin. *Fix submitted by Kajal Solanki in pull request [19637](https://github.com/magento/magento2/pull/19637)*. [GitHub-19632](https://github.com/magento/magento2/issues/19632)

<!--- ENGCOM-4336-->

*  The Change Status option of the mass actions dropdown menu (available on the products and sales pages) now works as expected. *Fix submitted by Ananth Iyer in pull request [20938](https://github.com/magento/magento2/pull/20938)*. [GitHub-20928](https://github.com/magento/magento2/issues/20928)

<!--- ENGCOM-4373-->

*  The option type dropdown on the Admin Customizable Options page now works as expected. *Fix submitted by Oleksandr Miroshnichenko in pull request [21371](https://github.com/magento/magento2/pull/21371)*. [GitHub-20989](https://github.com/magento/magento2/issues/20989)

<!--- ENGCOM-4452-->

*  The JavaScript `minify` field on **Stores** > **Configuration** > **Advanced** > **Developer** is now disabled as expected. *Fix submitted by Ananth Iyer in pull request [21444](https://github.com/magento/magento2/pull/21444)*. [GitHub-21384](https://github.com/magento/magento2/issues/21384)

<!--- ENGCOM-4655-->

*  Magento retains the filter settings you enter on the **Admin** > **System** > **Permissions** > **All Users** list when you click on an item in the filtered list, then return to the list. Previously, if you navigated away from the list and then returned, all filter parameters were lost. *Fix submitted by Jay Ghosh in pull request [22128](https://github.com/magento/magento2/pull/22128)*. [GitHub-21824](https://github.com/magento/magento2/issues/21824)

<!--- ENGCOM-4711-->

*  The web setup wizard now uses the correct base path to check if the setup folder exists. Previously, the wizard checked `base/data/web/magento2/pubsetup` instead of `/data/web/magento2/pub/setup`. *Fix submitted by JeroenVanLeusden in pull request [20182](https://github.com/magento/magento2/pull/20182)*. [GitHub-7623](https://github.com/magento/magento2/issues/7623), [GitHub-11892](https://github.com/magento/magento2/issues/11892)

<!--- ENGCOM-4397-->

*  Magento now redirects to you the Admin home page or a 404 page as expected when you try to access a nonexisting Admin page and **Stores** > **Configuration** > **Advanced** > **Admin** > **Security** > **Add Secret Key to URLs** is enabled. Previously,  redirects did not work properly, and Magento displayed the following message, `The page isn’t redirecting properly`. *Fix submitted by Jitheesh V O in pull request [21455](https://github.com/magento/magento2/pull/21455)*. [GitHub-21454](https://github.com/magento/magento2/issues/21454)

### Back up

<!--- ENGCOM-4782-->

*  Magento now creates the `var/.maintenance.flag`  file as expected when you start a database backup  (**System** > **Tools** > **Backups** > **Database Backup**). Previously, Magento did not create this  file, but instead displayed the following error: `Error: You need more permissions to activate maintenance mode right now. To create the backup, please deselect "Put store into maintenance mode" or update your permissions`. *Fix submitted by Hiren Pandya in pull request [19993](https://github.com/magento/magento2/pull/19993)*. [GitHub-19825](https://github.com/magento/magento2/issues/19825)

### Bundle

<!--- ENGCOM-4507-->

*  Magento now calculates and displays the correct tier price for bundle products. *Fix submitted by Adarsh Khatri in pull request [21469](https://github.com/magento/magento2/pull/21469)*. [GitHub-21467](https://github.com/magento/magento2/issues/21467)

<!--- MAGETWO-98603-->

*  Tier pricing for bundle products now works as expected: Magento displays the correct  price in the cart, and reminds customers that they can buy a specific quantity of the  product for a discount. Previously, Magento did not calculate the price correctly and did not display any informative messages about tier pricing on the category and product pages.

### B2B

<!--- MAGETWO-98791-->

*  You can now add backordered products to the cart when backorders are enabled.

<!--- MAGETWO-99023-->

*  Store switcher now works as expected in deployments that use the shared catalog structure. Previously, the store switcher in the shared catalog structure configuration used the store's `group_id` instead of the `store_id` to filter the product collection.

<!--- MAGETWO-98290-->

*  Magento now displays the correct price on the storefront  for products whose prices have been updated in a shared catalog. Previously, Magento did not update storefront prices when a price in the shared catalog was updated.

<!--- MAGETWO-98563-->

*  The `catalogpermissions_category` indexer in Update On Schedule mode now correctly picks up on the structure of a shared catalog.

### Cache

<!--- ENGCOM-4745-->

*  CMS block cache keys now contain the appropriate store ID in deployments with multiple store views. Previously, Magento always loaded the cached version of the block for the first store view. *Fix submitted by Marius Strajeru in pull request [22302](https://github.com/magento/magento2/pull/22302)*. [GitHub-22299](https://github.com/magento/magento2/issues/22299)

### Cart and checkout

<!--- MAGETWO-97968-->

*  Magento now correctly updates the minicart if a selected product is disabled during the shopping session.

<!--- MAGETWO-98255-->

*  You can now add grouped products to the shopping cart as expected when category permissions are enabled.

<!--- MAGETWO-98620-->

*  Magento now persists the shipping quote in the shopping cart for guest customers when **Persistent Shopping Cart** is enabled.

<!--- ENGCOM-3477-->

*  Magento now persists customer-related values after a guest customer converts her account to a customer account after checkout. Previously, Magento saved these customer-related values as null during account creation after checkout. *Fix submitted by Nazar Klovanych in pull request [19191](https://github.com/magento/magento2/pull/19191)*. [GitHub-19166](https://github.com/magento/magento2/issues/19166)

<!--- ENGCOM-4237-->

*  Guests can now complete checkout when a custom shipping carrier with underscores in the carrier code is used. Previously, Magento threw the following exception under these conditions: `Please specify a shipping method`. *Fix submitted by vovsky in pull request [19505](https://github.com/magento/magento2/pull/19505)*. [GitHub-5021](https://github.com/magento/magento2/issues/5021)

<!--- ENGCOM-3900-->

*  Fixed alignment of the **Update** button on the payment page of the checkout workflow. *Fix submitted by Govind Sharma in pull request [20307](https://github.com/magento/magento2/pull/20307)*. [GitHub-20305](https://github.com/magento/magento2/issues/20305)

<!--- ENGCOM-3849-->

*  Magento no longer displays the infinite loading indicator when you proceed to check out. Previously, Magento displayed the loading indicator, and threw the following JavaScript error: `Cannot read property 'quoteData' of undefined`. *Fix submitted by Ihor Sviziev in pull request [18503](https://github.com/magento/magento2/pull/18503)*. [GitHub-14412](https://github.com/magento/magento2/issues/14412)

<!--- ENGCOM-4355-->

*  Magento now displays an error message as expected when a customer clicks on **Add to cart** without selecting at least one product from the recently ordered  product list. *Fix submitted by Prince Patel in pull request [21401](https://github.com/magento/magento2/pull/21401)*. [GitHub-21398](https://github.com/magento/magento2/issues/21398)

<!--- ENGCOM-4376-->

*  The **Cancel** button on the checkout page now works as expected. *Fix submitted by Jitheesh V O in pull request [21356](https://github.com/magento/magento2/pull/21356)*. [GitHub-21327](https://github.com/magento/magento2/issues/21327)

<!--- MAGETWO-96851-->

*  Magento now provides an option to remove store credit from the Payment page of checkout.

<!--- ENGCOM-4362-->

*  Magento no longer runs `UpdateItemQty` validation before a Clear Shopping Cart action is triggered. Previously, due to the timing of this validation, you could not empty the shopping cart if any product in the cart was out-of-stock. *Fix submitted by Wojtek Naruniec in pull request [21295](https://github.com/magento/magento2/pull/21295)*. [GitHub-21294](https://github.com/magento/magento2/issues/21294)

<!--- MAGETWO-70996-->

*  Magento now uses the value of the default billing address attribute as expected during checkout. [GitHub-8777](https://github.com/magento/magento2/issues/8777)

<!--- ENGCOM-4783-->

*  Magento now validates the shipping information section of checkout as expected. Previously, a customer could proceed to the Payment Details section of checkout without having added valid shipping details. *Fix submitted by Nirav Patel in pull request [22405](https://github.com/magento/magento2/pull/22405)*. [GitHub-21596](https://github.com/magento/magento2/issues/21596)

<!--- ENGCOM-4414-->

*  The `label` elements  on the checkout address input fields are now readable by screen readers. Previously, the  address input fields did not have a `label` element with a valid value, which prevented screen readers from reading the values. *Fix submitted by Scott Buchanan in pull request [21484](https://github.com/magento/magento2/pull/21484)*. [GitHub-10893](https://github.com/magento/magento2/issues/10893)

<!--- ENGCOM-4691-->

*  New downloadable products now show up in a customer's My Downloadable products list after a customer who completed a purchase as a guest then creates an account. *Fix submitted by Jitheesh V O in pull request [21711](https://github.com/magento/magento2/pull/21711)*. [GitHub-21702](https://github.com/magento/magento2/issues/21702)

<!--- MC-5681-->

*  The checkout page now provides the ability to search addresses instead of listing addresses only on the Select shipping and Billing address steps. This new search feature can substantially increase checkout performance for customers with thousands of addresses. It is disabled by default and  must be enabled from the Admin.  See [Checkout](https://docs.magento.com/m2/ee/user_guide/configuration/sales/checkout.html#Checkout).

### Cart Price rules

<!--- MAGETWO-98680-->

*  Magento now displays the Cart Price Rule code on an order details Admin page if free shipping applies. Previously, Magento did not display information about the Sales rule or why shipping was free.

### Catalog

<!--- MAGETWO-57934-->

*  You can now use the term **configurable** as a group name in attribute sets. Previously, Magento threw an error when you used this term as a group name and subsequently tried to add or edit a product. [GitHub-6123](https://github.com/magento/magento2/issues/6123)

<!--- MAGETWO-96429-->

*  Product search results now display the correct special price as set by a scheduled update. Previously, search results displayed the original special price, not the price set by the scheduled update. **This fix can degrade performance in deployments that implement flat catalogs. To avoid this potential performance degradation, consider disabling flat catalogs**.

<!--- MAGETWO-96416-->

*  Clicking on a store's root category now causes only that root category to expand. Previously, Magento expanded all other Root Categories into the top-level categories.

<!--- ENGCOM-3252-->

*  The Magento implementation of the `CategoryManagementInterface::getTree($rootCategoryId)` now provides a tree that is populated with children instead of an empty array. *Fix submitted by Patrick McLain in pull request [18705](https://github.com/magento/magento2/pull/18705)*. [GitHub-17297](https://github.com/magento/magento2/issues/17297)

<!--- MAGETWO-96127-->

*  Magento now maintains correct pagination when a Catalog list has multiple pages of products.  Previously, users were redirected to the first page (instead of the correct page) after navigating to a product from the list and saving it.

<!--- MAGETWO-64260-->

*  We have improved the performance of the grouped product detail pages and category pages that contain a large number of grouped products.

<!--- MAGETWO-98246-->

*  Catalog Permission rules that are set for a category now remain applied when a new category is created at the same level.

<!--- MAGETWO-98335-->

*  You can now use storeview-level attributes to filter products on the products list.

<!--- MAGETWO-97966-->

*  Magento does not display the Country of Manufacture field under the More Information tab of the product page when this value is empty.

<!--- ENGCOM-3767-->

*  A product's  `product:price:amount` metatag now contains the price converted to the appropriate base currency in multistore deployments with stores using different base currencies. Previously, the price in this metatag was always calculated in the base currency. *Fix submitted by Milind Singh in pull request [20011](https://github.com/magento/magento2/pull/20011)*. [GitHub-20010](https://github.com/magento/magento2/issues/20010)

<!--- ENGCOM-4217-->

*  Magento now correctly calculates multi-currency custom option prices when the option price type is `percentage`. Previously, when the multi-currency custom option was set to a percentage price type, Magento calculated the price incorrectly. *Fix submitted by Emipro Technologies Pvt Ltd in pull request [19608](https://github.com/magento/magento2/pull/19608)*. [GitHub-19561](https://github.com/magento/magento2/issues/19561)

<!--- ENGCOM-4065-->

*  The  `product_types_base.xsd`, `product_options.xsd`, `import.xsd`, `export.xsd` files  now allow modules with names that contain  numbers. *Fix submitted by Lisovyi Yevhenii in pull request [20617](https://github.com/magento/magento2/pull/20617)*. [GitHub-14882](https://github.com/magento/magento2/issues/14882)

<!--- ENGCOM-4360-->

*  Magento no longer adds tax twice when adding a new product with tier pricing. Previously, `MinimalTierPriceCalculator` applied the tax twice when calculating the minimal price. *Fix submitted by Jitheesh V O in pull request [21395](https://github.com/magento/magento2/pull/21395)*. [GitHub-21383](https://github.com/magento/magento2/issues/21383)

<!--- ENGCOM-4342-->

*  The Admin product grid now displays default values when no filter is set. *Fix submitted by Eduard Chitoraga in pull request [21363](https://github.com/magento/magento2/pull/21363)*. [GitHub-13338](https://github.com/magento/magento2/issues/13338)

<!--- ENGCOM-3252-->

*  The Magento implementation of the `CategoryManagementInterface::getTree($rootCategoryId)` now provides a tree that is populated with children instead of an empty array. *Fix submitted by Patrick McLain in pull request [18705](https://github.com/magento/magento2/pull/18705)*. [GitHub-17297](https://github.com/magento/magento2/issues/17297)

<!--- ENGCOM-4400-->

*  Magento no longer empties the shopping cart when you click **Enter** after changing a product's quantity. *Fix submitted by Leandro F. L. in pull request [21509](https://github.com/magento/magento2/pull/21509)*. [GitHub-21499](https://github.com/magento/magento2/issues/21499)

<!--- ENGCOM-4451-->

*  Fixed issue with excessive white space on  the related, cross sell and upsell product grids. *Fix submitted by Amol Chaudhari in pull request [21582](https://github.com/magento/magento2/pull/21582)*. [GitHub-21541](https://github.com/magento/magento2/issues/21541)

<!--- ENGCOM-4405-->

*  You can now sort the Admin product list by website. *Fix submitted by Ievgenii Gryshkun in pull request [20512](https://github.com/magento/magento2/pull/20512)*. [GitHub-20511](https://github.com/magento/magento2/issues/20511)

<!--- MAGETWO-53037-->

*  Magento now creates unique values for product attributes as expected when you duplicate a product. Previously, Magento duplicated a product, but both products had the same attribute values.

<!--- MAGETWO-58219-->

*  During product creation, Magento now displays default attribute values from the **Admin** column on the Manage Options (Values of Your Attribute) window when creating options. Previously, Magento displayed options from the default storeview. [GitHub-6507](https://github.com/magento/magento2/issues/6507)

<!--- MAGETWO-98522-->

*  You can now add an out-of-stock item to a product comparison. Previously, Magento displayed a success message, but did not add the item to the comparison. [GitHub-21518](https://github.com/magento/magento2/issues/21518)

<!--- ENGCOM-4749-->

*  The catalog product flat data table for a store view is now populated with data from the specified store view as expected. Previously, this table was populated with data from the default store view. *Fix submitted by Oleg Volkov in pull request [22318](https://github.com/magento/magento2/pull/22318)*. [GitHub-21747](https://github.com/magento/magento2/issues/21747)

<!--- MAGETWO-98366-->

*  Magento now applies the correct tier price for a product after a customer who is assigned to a customer group logs in after first adding items to their cart as a guest. Previously, Magento did not apply the tier price after the customer logged in.

<!--- MAGETWO-98831-->

*  You can now add a product to an order by using the **Add products by SKU** button. Previously, when you tried to add a product this way, Magento displayed the following message: `The SKU was not found in the catalog`.

<!--- MAGETWO-72204-->

*  Tax recalculation has been moved out of the translation into the background for negotiable quotes running in an environment where B2B is deployed. This improves performance and helps avoid server timeouts.

<!--- ENGCOM-4207-->

*  The `product_type` attribute now contains the correct value in the CVS file that is created during export after you create a `custom type_id` attribute. *Fix submitted by Govind Sharma in pull request [20115](https://github.com/magento/magento2/pull/20115)*. [GitHub-19891](https://github.com/magento/magento2/issues/19891)

<!--- ENGCOM-4669-->

*  Magento now increments product quantity correctly when you add products to your cart first as a guest user, and then logged in. Previously, Magento added items separately instead. *Fix submitted by Jitheesh V O in pull request [21501](https://github.com/magento/magento2/pull/21501)*. [GitHub-21375](https://github.com/magento/magento2/issues/21375)

<!--- ENGCOM-4180-->

*  **Meta Keywords** and **Meta Description** are now defined as `textarea` throughout  product forms. *Fix submitted by Amit Vishvakarma in pull request [20556](https://github.com/magento/magento2/pull/20556)*. [GitHub-20555](https://github.com/magento/magento2/issues/20555)

<!--- MAGETWO-99027-->

*  Magento now saves customizable option price input on the store-view level when Catalog Price Scope is set to **Global**.

<!--- MAGETWO-99817-->

*  We have modified the required permissions for updating the `design` fieldset of categories, products, and CMS pages:

   *  Existing roles that have **save** permission for these entities can save everything.

   *  New roles will need to be granted permission to edit design manually.

   *  If you do not have permission to edit the `design` fieldset or use web API endpoints to update a category, Magento does not save your changes and the design properties remain unchanged.

<!--- ENGCOM-3608-->

*  When you configure a price rule for configurable products with swatches, Magento now a shows the special price for products that match the price rule. Previously, Magento displayed both the old price and the special price for the matching configurable products. *Fix submitted by Sarfaraz Bheda in pull request [19376](https://github.com/magento/magento2/pull/19376)*. [GitHub-19276](https://github.com/magento/magento2/issues/19276)

### CatalogInventory

<!--- ENGCOM-4490-->

*  We have fixed the wrong proxy `resourceStock` argument for the `\Magento\CatalogInventory\Observer\UpdateItemsStockUponConfigChangeObserver` in `di.xml`. (Specifically, `<argument name="resourceStock" xsi:type="object">Magento\CatalogInventory\Model\ResourceModel\Stock\Proxy</argument>` has been changed to `<argument name="resourceStockItem" xsi:type="object">Magento\CatalogInventory\Model\ResourceModel\Stock\Item\Proxy</argument>`.) *Fix submitted by VitaliyBoyko in pull request [21731](https://github.com/magento/magento2/pull/21731)*. [GitHub-167](https://github.com/magento/magento2/issues/167)

### Catalog URL rewrite

<!--- ENGCOM-4386-->

*  URL rewrites are no longer overwritten in multisite deployments. *Fix submitted by Anshu Mishra in pull request [21462](https://github.com/magento/magento2/pull/21462)*. [GitHub-21329](https://github.com/magento/magento2/issues/21329)

### Cleanup and simple code refactoring

<!--- ENGCOM-4249-->

*  Corrected the overlapping **Rating** field and **Add to cart** button on the cart page. *Fix submitted by Kajal Solanki in pull request [21178](https://github.com/magento/magento2/pull/21178)*. [GitHub-21177](https://github.com/magento/magento2/issues/21177)

<!--- ENGCOM-3824-->

*  Corrected length of the customer login page input field in tablet view. *Fix submitted by Nainesh Waghale in pull request [20173](https://github.com/magento/magento2/pull/20173)*. [GitHub-20172](https://github.com/magento/magento2/issues/20172)

<!--- ENGCOM-3642-->

*  Fixed misalignment of the checkbox in the fields enclosure on **Admin** > **System** > **Export**. *Fix submitted by suryakant-krish in pull request [19631](https://github.com/magento/magento2/pull/19631)*. [GitHub-19630](https://github.com/magento/magento2/issues/19630)

<!--- ENGCOM-4174-->

*  Corrected misalignment of the products in category checkboxes on the Admin catalog categories page. *Fix submitted by priti2jcommerce in pull request [21022](https://github.com/magento/magento2/pull/21022)*. [GitHub-21021](https://github.com/magento/magento2/issues/21021)

<!--- ENGCOM-4069-->

*  Corrected misalignment of the order item details label in mobile view. *Fix submitted by priti2jcommerce in pull request [20466](https://github.com/magento/magento2/pull/20466)*. [GitHub-20299](https://github.com/magento/magento2/issues/20299)

<!--- ENGCOM-4154-->

*  Corrected misalignment of page elements on the Admin product reorder page. *Fix submitted by Arvinda kumar in pull request [21009](https://github.com/magento/magento2/pull/21009)*. [GitHub-20919](https://github.com/magento/magento2/issues/20919)

<!--- ENGCOM-4202-->

*  You can now open a product's details page from the compare products side bar. *Fix submitted by Eduard Chitoraga in pull request [21102](https://github.com/magento/magento2/pull/21102)*. [GitHub-21101](https://github.com/magento/magento2/issues/21101)

<!--- ENGCOM-4262-->

*  Added padding to the `shippingAddress` telephone tool tip on the shipping page of checkout. *Fix submitted by Abrar Pathan in pull request [20839](https://github.com/magento/magento2/pull/20839)*. [GitHub-20838](https://github.com/magento/magento2/issues/20838)

<!--- ENGCOM-4269-->

*  Corrected misalignment of product prices in the order summary block of the checkout page in tablet view. *Fix submitted by dipti2jcommerce in pull request [20856](https://github.com/magento/magento2/pull/20856)*. [GitHub-20855](https://github.com/magento/magento2/issues/20855)

<!--- ENGCOM-4318-->

*  Corrected size of the pagination drop-down on **Admin** > **Content** > **Blocks**. *Fix submitted by Pratik Oza in pull request [21298](https://github.com/magento/magento2/pull/21298)*. [GitHub-21296](https://github.com/magento/magento2/issues/21296)

<!--- ENGCOM-4250-->

*  Corrected a tabbing issue on the product page. *Fix submitted by Prakash Gunthe in pull request [21079](https://github.com/magento/magento2/pull/21079)*. [GitHub-21077](https://github.com/magento/magento2/issues/21077)

<!--- ENGCOM-4161-->

*  Corrected alignment of page elements on the  Recent Orders section of the My Accounts page in mobile view. *Fix submitted by Nainesh Waghale in pull request [20429](https://github.com/magento/magento2/pull/20429)*. [GitHub-20414](https://github.com/magento/magento2/issues/20414)

<!--- ENGCOM-4461-->

*  Corrected formatting of the Advance Search link in page footers. *Fix submitted by Amol Chaudhari in pull request [21611](https://github.com/magento/magento2/pull/21611)*. [GitHub-20809](https://github.com/magento/magento2/issues/20809)

<!--- ENGCOM-4457-->

*  Corrected alignment of the minicart search logo. *Fix submitted by Amol Chaudhari in pull request [21638](https://github.com/magento/magento2/pull/21638)*. [GitHub-20905](https://github.com/magento/magento2/issues/20905)

<!--- ENGCOM-4475-->

*  Added missing asterisk adjacent to the Checkout Agreements checkbox. *Fix submitted by Karla Saaremäe in pull request [21649](https://github.com/magento/magento2/pull/21649)*. [GitHub-21648](https://github.com/magento/magento2/issues/21648)

<!--- ENGCOM-4595-->

*  Removed unnecessary white space between `li` tags in the product table. *Fix submitted by Akhilesh Singh Shrinet in pull request [21948](https://github.com/magento/magento2/pull/20092)*. [GitHub-21244](https://github.com/magento/magento2/issues/21244), [GitHub-20140](https://github.com/magento/magento2/issues/20140)

<!--- ENGCOM-4629-->

*  The documentation for Travis CI static tests has been improved. *Fix submitted by [Francesco Haymar d'Ettory](https://github.com/Thundar) in pull request [18386](https://github.com/magento/magento2/pull/18386)*. [GitHub-13951](https://github.com/magento/magento2/issues/13951)

<!--- ENGCOM-4606-->

*  Corrected typos on the Admin sales shipment and credit memo pages. *Fix submitted by Vishal Sutariya in pull request [22031](https://github.com/magento/magento2/pull/22031)*. [GitHub-22030](https://github.com/magento/magento2/issues/22030)

<!--- ENGCOM-4637-->

*  The **Equalize product count** operation in Layered Navigation now works as expected. *Fix submitted by Nazar Klovanych in pull request [21968](https://github.com/magento/magento2/pull/21968)*. [GitHub-6715](https://github.com/magento/magento2/issues/6715)

<!--- ENGCOM-4744-->

*  Corrected misalignment of page elements on the pop-up window that Magento displays when you edit an order that contains a downloadable product when the **Links can be purchased separately** option is enabled. *Fix submitted by ansari-krish in pull request [22298](https://github.com/magento/magento2/pull/22298)*. [GitHub-20917](https://github.com/magento/magento2/issues/20917)

<!--- ENGCOM-4594-->

*  Fixed misalignment of the shipping method block on Order pages that are accessed through **Sales** > **Orders**. *Fix submitted by Vishal Sutariya in pull request [21963](https://github.com/magento/magento2/pull/21963)*. [GitHub-21962](https://github.com/magento/magento2/issues/21962)

<!--- ENGCOM-4797-->

*  In the Conditions section of the New Cart Price Rule page in the Admin, the arrow for the `If ALL of these conditions are TRUE` dropdown list field now points in the correct direction. *Fix submitted by Hiren Pandya in pull request [22456](https://github.com/magento/magento2/pull/22456)*. [GitHub-20366](https://github.com/magento/magento2/issues/22434)

### Company

<!--- MAGETWO-98590-->

*  Magento no longer throws an error when you try to export a customer report with a description filter.

<!--- MAGETWO--98665-->

*  Magento now sorts media directories alphabetically during image upload.

<!--- MAGETWO-98698-->

*  Magento now correctly adds Company users when the database prefix schedule contains an underscore. Previously, Magento threw an SQL error and did not add the users.

### Configurable products

<!--- MAGETWO-98013-->

*  Magento no longer describes a configurable product as in-stock in the product list when the product is set to out-of-stock.

<!--- ENGCOM-3963-->

*  Corrected the position of the labels in the configurable product variations table. *Fix submitted by Burlacu Vasilii in pull request [20528](https://github.com/magento/magento2/pull/20528)*. [GitHub-20527](https://github.com/magento/magento2/issues/20527)

<!--- MAGETWO-98088-->

*  Configurable products can no longer be added as a variation of another configurable product in the Admin.

<!--- ENGCOM-4809-->

*  The configurable product page's attribute dropdown menu shows an accurate price and tax is rendered correctly in the final price at the top of the page. Previously, configurable products that had only one configurable attribute displayed a price increase in the dropdown of the tax amount. This affected stores when prices were entered excluding tax and configurable products with only one configurable attribute. *Fix submitted by Daniel Farmer in pull request [22466](https://github.com/magento/magento2/pull/22466)*. [GitHub-22270](https://github.com/magento/magento2/issues/22270)

<!--- ENGCOM-4188-->

*  Configurable products can now be successfully updated through the bulk API using the following API endpoint: `rest/async/bulk/V1/configurable-products/bySku/child`). *Fix submitted by Pedro Sousa in pull request [21083](https://github.com/magento/magento2/pull/21083)*. [GitHub-20366](https://github.com/magento/magento2/issues/20366)

### cron

<!--- MAGETWO-98151-->

*  Added support for [Zookeeper](https://php.net/manual/en/book.zookeeper.php) and flock lock providers. We have also added new options to configure locks during installation:

   *  `--lock-provider=LOCK-PROVIDER`—Lock provider name

   *  `--lock-db-prefix=LOCK-DB-PREFIX`—Installation specific lock prefix to avoid lock conflicts

   *  `--lock-zookeeper-host=LOCK-ZOOKEEPER-HOST`  —Host and port to connect to Zookeeper cluster. For example, 127.0.0.1:2181

   *  `--lock-zookeeper-path=LOCK-ZOOKEEPER-PATH`— The path where Zookeeper will save locks. The default path is /magento/locks

   *  `--lock-file-path=LOCK-FILE-PATH`—The path where file locks will be saved.

  See [Configure the lock provider]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-lock.html).

### Customers

<!--- MAGETWO-93628-->

*  Magento no longer empties your shopping cart after you have reset your password. Previously, if you added items to your shopping cart using a guest account, then logged in and reset your password, Magento emptied your cart. [GitHub-14530](https://github.com/magento/magento2/issues/14530)

<!--- MAGETWO-97549-->

*  Magento now saves dates that are associated with custom customer attributes of type `date`. Previously, Magento did not save these dates, but displayed the following message: `Please enter a valid date`.

<!--- ENGCOM-4146-->

*  The Customer Name Prefix on the customer configuration page no longer displays extraneous white space when an extra separator is added. *Fix submitted by Shikha Mishra in pull request [20896](https://github.com/magento/magento2/pull/20896)*. [GitHub-17861](https://github.com/magento/magento2/issues/17861)

<!--- ENGCOM-4309-->

*  Fixed a horizontal scrolling issue that affected the address book display in mobile view. *Fix submitted by Pratik Oza in pull request [21272](https://github.com/magento/magento2/pull/21272)*. [GitHub-21271](https://github.com/magento/magento2/issues/21271)

<!--- ENGCOM-4413-->

*  The default sort order setting for the shopping cart and customer orders page is now `by create date in descending order`. *Fix submitted by Jitheesh V O in pull request [21498](https://github.com/magento/magento2/pull/21498)*. [GitHub-21493](https://github.com/magento/magento2/issues/21493)

<!--- ENGCOM-4047-->

*  The customer login block (defined as `Magento\Customer\Block\Form\Login`) no longer sets the page title. *Fix submitted by Lisovyi Yevhenii in pull request [20583](https://github.com/magento/magento2/pull/20583)*. [GitHub-13982](https://github.com/magento/magento2/issues/13982)

<!--- MAGETWO-91523-->

*  An admin user with full permissions for all website scopes can now see any country listed in the Countries column or filter in the Customers list. Previously, if one of the website scopes did not allow a country, an admin with full permission could not see it.

<!--- MAGETWO-98087-->

*  Magento no longer applies the default customer group settings to customers that have already been assigned to another group.

<!--- MAGETWO-98087-->

*  Customer groups can now be successfully reassigned during order creation in the Admin.

<!--- ENGCOM-4678-->

*  Customer accounts are now confirmed when a customer clicks the email activation link. Previously, Magento confirmed the customer account even when the customer did not click on the email activation link. *Fix submitted by Shikha Mishra in pull request [22147](https://github.com/magento/magento2/pull/22147)*. [GitHub-22052](https://github.com/magento/magento2/issues/22052)

### Dashboard

<!--- ENGCOM-4601-->

*  Magento no longer throws a 404 error when you click the Most viewed products on the Admin dashboard. *Fix submitted by Vishal Sutariya in pull request [22002](https://github.com/magento/magento2/pull/22002)*. [GitHub-22001](https://github.com/magento/magento2/issues/22001)

### Downloadable

<!--- ENGCOM-4399-->

*  Product prices are no longer duplicated on the Downloadable products page.  *Fix submitted by Govinda Sharma in pull request [20239](https://github.com/magento/magento2/pull/20239)*. [GitHub-20187](https://github.com/magento/magento2/issues/20187)

<!--- ENGCOM-3979-->

*  Sales rule validation has been refactored to eliminate a leak in the salesrule collection. Previously, a poorly constructed SQL query resulted in poor performance. *Fix submitted by Govind Sharma in pull request [20239](https://github.com/magento/magento2/pull/20239)*. [GitHub-20187](https://github.com/magento/magento2/issues/20187)

<!--- ENGCOM-4684-->

*  You can now successfully change the sample file for an existing downloadable product. Previously, when you tried to change this sample file, Magento did not save the new file, and did not display an error message. *Fix submitted by Ravi chandra in pull request [19806](https://github.com/magento/magento2/pull/19806)*. [GitHub-6272](https://github.com/magento/magento2/issues/6272)

<!--- ENGCOM-4685-->

*  A logged-in user's My Downloads page now displays links to the relevant downloadable products when **Order Item Status to Enable Downloads** is set to **Pending**. Previously, Magento displayed only the names of the pending products, and no links for downloadable products were displayed. *Fix submitted by James in pull request [22073](https://github.com/magento/magento2/pull/22073)*. [GitHub-21753](https://github.com/magento/magento2/issues/21753)

<!--- ENGCOM-4345-->

*  Added missing sort order to columns on Downloadable Product links page. *Fix submitted by Mahesh Singh in pull request [21279](https://github.com/magento/magento2/pull/21279)*. [GitHub-21278](https://github.com/magento/magento2/issues/21278)

### EAV

<!--- ENGCOM-4246-->

*  Attribute code validation (specifically, maximum characters allowed) has been improved during attribute creation. *Fix submitted by Eduard Chitoraga in pull request [20526](https://github.com/magento/magento2/pull/20526)*. [GitHub-20766](https://github.com/magento/magento2/issues/20766), [GitHub-20943](https://github.com/magento/magento2/issues/20943)

<!--- ENGCOM-4583-->

*  Initialization has been added to two class variables that can be returned by class methods as parameters of type `array`. Without this initialization, both variables are returned as null, which can cause Magento to throw  an `Invalid argument supplied for foreach()` warning. *Fix submitted by Wojtek Naruniec in pull request [21135](https://github.com/magento/magento2/pull/21135)*. [GitHub-21134](https://github.com/magento/magento2/issues/21134)

<!--- ENGCOM-4553-->

*  The `\Magento\Eav\Model\Entity\Collection\AbstractCollection::importFromArray()` method now returns a usable collection. Previously, the  `_isCollectionLoaded` property was false, and every interaction threw an exception. *Fix submitted by Lorenzo Stramaccia in pull request [21869](https://github.com/magento/magento2/pull/21869)*. [GitHub-21868](https://github.com/magento/magento2/issues/21868)

<!--- ENGCOM-3793-->

*  You can now retrieve product attribute values for store-view scope types in the product collection that is loaded for a specific store. *Fix submitted by Shikha Mishra in pull request [20071](https://github.com/magento/magento2/pull/20071)*. [GitHub-18374](https://github.com/magento/magento2/issues/18374)

<!--- ENGCOM-4152-->

*  You can now programmatically upload an image for the customer attribute. Previously, Magento threw the following error:  `error: Base64 is not defined`. *Fix submitted by Nazar Klovanych in pull request [19988](https://github.com/magento/magento2/pull/19988)*. [GitHub-19983](https://github.com/magento/magento2/issues/19983)

<!--- MAGETWO-98621-->

*  Scope assigned to prices in Catalog Price Scope (set in **Configuration** > **Price**) are now maintained when price is set to empty. Previously, you could not leave leave special prices empty.

<!--- ENGCOM-3810-->

*  Added an `is_array` parameter value check to the `getOptionText($value)` function in `app/code/Magento/Eav/Model/Entity/Attribute/Source/AbstractSource.php` to fix an error that caused Magento to throw a UI error when you make the `_quantity_and_stock_status (Qty)_` product attribute visible in the storefront properties. Previously, the `getOptionText($value)` function expected integer or string input and failed because the `quantity_and_stock_status (Qty)` configuration parameters were passed as an array.` *Fix submitted by Aditi Singh in pull request [20001](https://github.com/magento/magento2/pull/20001)*. [GitHub-13612](https://github.com/magento/magento2/issues/13612)

### Email

<!--- ENGCOM-4512-->

*  Magento no longer sends via asynchronous email sending any sales-related emails  that were created when email sending was disabled once email sending is enabled. *Fix submitted by Serhiy Zhovnir in pull request [21788](https://github.com/magento/magento2/pull/21788)*. [GitHub-21786](https://github.com/magento/magento2/issues/21786)

<!--- ENGCOM-4812-->

*  The Insert variable pop-up window that is accessed from the Email Template Information window is now populated as expected. *Fix submitted by Bartłomiej Szubert in pull request [22469](https://github.com/magento/magento2/pull/22469)*. [GitHub-20111](https://github.com/magento/magento2/issues/20111)

### Frameworks

<!--- MC-15440-->

*  The performance of product image loading has been significantly improved. [GitHub-14667](https://github.com/magento/magento2/issues/14667)

<!--- ENGCOM-3794-->

*  You can now successfully download a downloadable product by clicking the link to the product in your downloadable products list. Previously, when you clicked this link. the page did not open correctly, and Magento threw the following error: `Something went wrong while getting the requested content`. *Fix submitted by Shikha Mishra in pull request [19996](https://github.com/magento/magento2/pull/19996)*. [GitHub-18944](https://github.com/magento/magento2/issues/18944)

<!--- ENGCOM-3932-->

*  Added the `as` attribute to `linkType` in `lib/internal/Magento/Framework/View/Layout/etc/head.xsd` with three possible options: `style`, `script`, and `font`. *Fix submitted by Burlacu Vasilii in pull request [20495](https://github.com/magento/magento2/pull/20495)*. [GitHub-18347](https://github.com/magento/magento2/issues/18347)

<!--- ENGCOM-4212-->

*  Corrected misalignment of the Admin success message icon. *Fix submitted by Kajal Solanki in pull request [21069](https://github.com/magento/magento2/pull/21069)*. [GitHub-19328](https://github.com/magento/magento2/issues/19328)

<!--- ENGCOM-3543-->

*  The use of the `SessionManagerInterface` class has replaced the direct use of  `SessionManager`. *Fix submitted by Jaimin Sutariya in pull request [19274](https://github.com/magento/magento2/pull/19274)*. [GitHub-19359](https://github.com/magento/magento2/issues/19359)

<!--- ENGCOM-4223-->

*  The module ranking in the `app/etc/config` now remains consistent when a new module is added without any other changes. Previously, a module addition affected the module ranking, which resulted in multiple unnecessary conflicts. *Fix submitted by Alexandre Jardin in pull request [21020](https://github.com/magento/magento2/pull/21020)*. [GitHub-8479](https://github.com/magento/magento2/issues/8479)

<!--- ENGCOM-4104-->

*  Magento now logs exceptions during autoloading instead of throwing them. This conforms with PSR-4 guidelines. *Fix submitted by Vinai Kopp in pull request [20950](https://github.com/magento/magento2/pull/20950)*. [GitHub-20773](https://github.com/magento/magento2/issues/20773)

<!--- ENGCOM-4333-->

*  Running the `php bin/magento setup:upgrade` command on modules that have a `db_schema.xml` without an `indexType` now creates the index, and subsequent runs result in no modifications as expected. Previously, running this command multiple times resulted in index creation followed by an error. *Fix submitted by Milind Singh in pull request [21328](https://github.com/magento/magento2/pull/21328)*. [GitHub-21322](https://github.com/magento/magento2/issues/21322)

#### Cache framework

<!--- ENGCOM-3470-->

*  The purge cache feature in `\Magento\CacheInvalidate\Model\PurgeCache::sendPurgeRequest` has been updated to flush the cache on all hosts even if a Varnish server is offline. Magento also displays a warning message about unresponsive cache hosts. Previously, the `bin/magento cache:flush full_page` operation stopped as soon as it encountered a host that was offline. *Fix submitted by Wiard van Rij in pull request [18852](https://github.com/magento/magento2/pull/18852)*. [GitHub-18056](https://github.com/magento/magento2/issues/18056)

#### JavaScript framework

<!--- ENGCOM-4546-->

*  JavaScript validation on UI form components now works as expected. Previously, adding the `validate-per-page-value-list` validation rule resulted in a failure for every non-empty value in the field to which it as applied. *Fix submitted by Roman Kis in pull request [21776](https://github.com/magento/magento2/pull/21776)*. [GitHub-21734](https://github.com/magento/magento2/issues/21734)

### General fixes

<!--- MAGETWO-96983-->

*  The Sodium crypto adapter now consistently returns a `string` in accordance with the strict return type on its signature. Previously, the adapter sometimes did not return a `string`, which resulted in exceptions and a failure to bootstrap Magento. [GitHub-19590](https://github.com/magento/magento2/issues/19590)

<!--- MAGETWO-98317-->

*  Customers who are not logged in can now see the dynamic blocks that have been created for guest accounts. Previously, only customers logged in to the registered guests segment could see these dynamic blocks.

<!--- ENGCOM-4378-->

*  Watermarks now appear on product images as expected. *Fix submitted by Yevhenii Dumskyi in pull request [21338](https://github.com/magento/magento2/pull/21338)*. [GitHub-21154](https://github.com/magento/magento2/issues/21154)

<!--- ENGCOM-4521-->

*  You can now use a period (`.`) for inline CMS content edits. Previously, if you included  a period (`.`) in your edits, Magento displayed the following error: `There are 1 messages requires your attention. Please make corrections to the errors in the table below and re-submit`. *Fix submitted by Nirav Patel in pull request [21376](https://github.com/magento/magento2/pull/21376)*. [GitHub-21374](https://github.com/magento/magento2/issues/21374)

<!--- ENGCOM-4523-->

*  The pagination count of **My Account** > **My addresses** > **Additional Address Data Table** is now correct. *Fix submitted by Dharmesh Vaja in pull request [21399](https://github.com/magento/magento2/pull/21399)*. [GitHub-21396](https://github.com/magento/magento2/issues/21396)

<!--- ENGCOM-4696-->

*  The `fatalErrorHandler` now returns `500` only on fatal errors. Previously, simple deprecation warnings on the page triggered an internal server error, which was invalid. *Fix submitted by WEXO team in pull request [22200](https://github.com/magento/magento2/pull/22200)*. [GitHub-22199](https://github.com/magento/magento2/issues/22199)

<!--- ENGCOM-4774-->

*  CodeSniffer no longer marks correctly aligned `DocBlock` elements as code style violations. *Fix submitted by p-bystritsky in pull request [22321](https://github.com/magento/magento2/pull/22321)*. [GitHub-22317](https://github.com/magento/magento2/issues/22317)

<!--- ENGCOM-4631-->

*  The Adminhtml `textarea` field now accepts the `maxlength` attribute. *Fix submitted by Roman Kis in pull request [21816](https://github.com/magento/magento2/pull/21816)*. [GitHub-21779](https://github.com/magento/magento2/issues/21779)

<!--- ENGCOM-4695-->

*  The Reporting Security Issues section of the [Magento 2 README](https://github.com/magento/magento2/blob/2.3/README.md) file has been updated to reflect use of HackerOne for the Magento 2 Bug Bounty program. *Fix submitted by Andreas Mautz in pull request [22195](https://github.com/magento/magento2/pull/22195)*. [GitHub-22166](https://github.com/magento/magento2/issues/22166)

<!--- ENGCOM-4654-->

*  You can now save an inactive admin user token by navigating to **System** > **Permissions** > **All Users**, and clicking **Save User** on an inactive Admin user. Previously, if you tried to save an inactive Admin user token fom the Admin using this method, Magento threw an error and did not save the token. *Fix submitted by Pratik Oza in pull request [20772](https://github.com/magento/magento2/pull/20772)*. [GitHub-16513](https://github.com/magento/magento2/issues/16513)

<!--- ENGCOM-4706-->

*  We updated `Magento\Msrp\Pricing\MsrpPriceCalculator` to add the `$msrpPriceCalculators` argument. Previously, this argument was missing, which caused Magento to throw a `MsrpPriceCalculator` exception after an upgrade. *Fix submitted by Leandro F. L. in pull request [22197](https://github.com/magento/magento2/pull/22197)*. [GitHub-22190](https://github.com/magento/magento2/issues/22190), [GitHub-22090](https://github.com/magento/magento2/issues/22090)

<!--- ENGCOM-4681-->

*  The `stream_wrapper_unregister('phar')` function in `app/boostrap.php` is now run only when a stream wrapper is registered. Previously, calling `stream_wrapper_unregister('phar')` without checking to see if it were registered triggered a warning. *Fix submitted by Antoine Daudenthun in pull request [22171](https://github.com/magento/magento2/pull/22171)*. [GitHub-22190](https://github.com/magento/magento2/issues/22190), [GitHub-21973](https://github.com/magento/magento2/issues/21973)

<!--- ENGCOM-4055-->

*  The sitemap generation `cron` job no longer flushes the entire cache. A dummy cache tag has been added to the frontend for sitemap and robots generation to prevent the default and `page_cache` from being dropped completely. Previously, the sitemap generation cron job flushed the entire cache. *Fix submitted by David Führ in pull request [20818](https://github.com/magento/magento2/pull/20818)*. [GitHub-14857](https://github.com/magento/magento2/issues/14857)

<!--- ENGCOM-4454-->

*  Magento now sets an accurate `CURRENT_TIMESTAMP` on `updated_at` fields in the database schema. Previously, this timestamp displayed `0000-00-00 00:00:00`. *Fix submitted by Danny Verkade in pull request [21486](https://github.com/magento/magento2/pull/21486)*. [GitHub-21477](https://github.com/magento/magento2/issues/21477)

<!--- ENGCOM-4733-->

*  The `grunt watch` command no longer triggers `livereload` twice. *Fix submitted by Torben Höhn in pull request [22276](https://github.com/magento/magento2/pull/22276)*. [GitHub-19544](https://github.com/magento/magento2/issues/19544)

<!--- ENGCOM-4776-->

*  You can now duplicate a product with translated URL keys over multiple store views without generating non-unique keys. Previously, when a product was duplicated, only one URL key was used and set for all store views. *Fix submitted by Vechirko Yurii in pull request [22178](https://github.com/magento/magento2/pull/22178)*. [GitHub-21737](https://github.com/magento/magento2/issues/21737)

### Gift cards accounts

<!--- MAGETWO-98112-->

*  Gift card accounts are now created as expected when gift card orders are authorized and captured with PayPal Express.

### Google Analytics

<!--- ENGCOM-4313-->

*  The Google Analytics `Anonymize Ip` feature is no longer enabled by default. *Fix submitted by Nazar Klovanych in pull request [21303](https://github.com/magento/magento2/pull/21303)*. [GitHub-21292](https://github.com/magento/magento2/issues/21292)

<!--- MAGETWO-98421-->

*  The Google Tag Manager snippet is now correctly placed in the HTML `head` section. Previously, this snippet was incorrectly positioned lower in the `head` section, which generated HTML validation errors.

### Google Chart API

<!--- MAGETWO-98584 -->

*  The Google chart API has been updated to use Image-Charts. Magento now uses the Image-Charts free service to render static charts in Admin dashboards. Earlier deployments used Google Image Charts, which was deprecated in 2012 and turned off on [March 18, 2019](https://developers.google.com/chart/image/docs/making_charts). [GitHub-21599](https://github.com/magento/magento2/issues/21599)

### Import/export

<!--- MAGETWO-95313-->

*  Magento now imports existing products that have a price change and unchanged `url-key` with no unnecessary updates. Previously, the product's price was updated as expected, but its unchanged `url-key` was deleted.

<!--- MAGETWO-70232-->

*  Magento now displays informative messages when you create a new product and try to set its SKU to one that is assigned to an existing product. Previously, under these circumstances, Magento displayed an informative message, but also imported the newly created product's configurable options to the older product. [GitHub-9457](https://github.com/magento/magento2/issues/9457)

<!--- ENGCOM-4281-->

*  The import process  `replace` method now works as expected. *Fix submitted by Denys Saltanakhmedov in pull request [21189](https://github.com/magento/magento2/pull/21189)*. [GitHub-18761](https://github.com/magento/magento2/issues/18761)

<!--- ENGCOM-4772-->

*  The import process now imports product quantity as expected.  *Fix submitted by Nazar Klovanych in pull request [22382](https://github.com/magento/magento2/pull/22382)*. [GitHub-22355](https://github.com/magento/magento2/issues/22355)

<!--- ENGCOM-3761-->

*  Custom import adapters now validate CSV files as expected if column and data are available. Previously, the CSV file was not validated, and Magento threw the following error: `Notice: Undefined index: sku in /var/www/html/hamtc/vendor/magento/module-import-export/Model/Import/Entity/AbstractEntity.php on line 411`. *Fix submitted by Jaimin Sutariya in pull request [19765](https://github.com/magento/magento2/pull/19765)*. [GitHub-19761](https://github.com/magento/magento2/issues/19761)

<!--- ENGCOM-4600-->

*  The `_coreConfig` field in `Magento/ImportExport/Model/Import` is no longer declared dynamically. *Fix submitted by Roman Kis in pull request [21999](https://github.com/magento/magento2/pull/21999)*. [GitHub-21998](https://github.com/magento/magento2/issues/21998)

<!--- ENGCOM-4722-->

*  Tooltip styles now use the appropriate variables for mobile view. *Fix submitted by Nazar Klovanych in pull request [22382](https://github.com/magento/magento2/pull/22355)*. [GitHub-22246](https://github.com/magento/magento2/issues/22355)

<!--- ENGCOM-4428-->

*  Magento now displays the correct import status data for an import that is created using **System** > **Import** > **Advanced Pricing** > **Add/Update**. *Fix submitted by Denys Saltanakhmedov in pull request [21476](https://github.com/magento/magento2/pull/21476)*. [GitHub-21192](https://github.com/magento/magento2/issues/21192)

<!--- ENGCOM-3993-->

*  When you export product data into a CSV file, the `store_view_code` column now contains data from the chosen product store. Previously, Magento did not populate the `store_view_code` column. *Fix submitted by Valant13 in pull request [19395](https://github.com/magento/magento2/pull/19395)*. [GitHub-17784](https://github.com/magento/magento2/issues/17784), [GitHub-19786](https://github.com/magento/magento2/issues/19786)

### Index

<!--- ENGCOM-4440-->

*  You can now access a list of Admin indexers after creating a custom index. Previously, when you tried to access the indexer list for an Admin, Magento threw a fatal error. *Fix submitted by Cristiano Casciotti in pull request [21575](https://github.com/magento/magento2/pull/21575)*. [GitHub-21510](https://github.com/magento/magento2/issues/21510)

<!--- ENGCOM-3761-->

*  Magento now validates CSV files that are created by custom adapters when you click **Check Data** if column and data are available. Previously, Magento threw an error. *Fix submitted by Jaimin Sutariya in pull request [19765](https://github.com/magento/magento2/pull/19765)*. [GitHub-19761](https://github.com/magento/magento2/issues/19761)

### Infrastructure

*  The default behavior of view models has changed in this release. Instances of view models are now shared by default. As a result, you must add the `attribute shared="false"` on the argument node of the `layout.xml` file if you want a new instance of a view model.

<!--- ENGCOM-4474-->

*  The `FrontController` now explicitly requires actions to specify if they respond to `HEAD` requests. `HEAD` action mapping has also been changed to the  `GET` action interface, which results in `HEAD` requests returning `200` instead of `404`. *Fix submitted by Matti Vapa in pull request [21378](https://github.com/magento/magento2/pull/21378)*. [GitHub-21299](https://github.com/magento/magento2/issues/21299)

<!--- ENGCOM-4482-->

*  We removed the Logic class from the constructor of `Magento\Sales\Model\Order\Address\Validator`. Previously, installation of the product could fail if this class was injected in the constructor through a command in a custom module when this class continued logic. *Fix submitted by Bartłomiej Szubert in pull request [21693](https://github.com/magento/magento2/pull/21693)*. [GitHub-21692](https://github.com/magento/magento2/issues/21692), [GitHub-21752](https://github.com/magento/magento2/issues/21752)

<!--- ENGCOM-4543-->

*  The `productAvailabilityChecks` argument has been added to `Magento\Sales\Model\Order\Reorder\OrderedProductAvailabilityChecker`. Previously, this required argument was missing. *Fix submitted by Roman Kis in pull request [21820](https://github.com/magento/magento2/pull/21820)*. [GitHub-20825](https://github.com/magento/magento2/issues/20825)

<!--- ENGCOM-4562-->

*  The `errors/local.xml` and error page templates are no longer publicly accessible. *Fix submitted by Fabian Schmengler in pull request [20212](https://github.com/magento/magento2/pull/20212)*. [GitHub-20209](https://github.com/magento/magento2/issues/20209)

<!--- ENGCOM-3498-->

*  We added the missing  attributes `validated_country_code` and `validated_vat_number` to `quote_address`. *Fix submitted by Erik Pellikka in pull request [19265](https://github.com/magento/magento2/pull/19265)*. [GitHub-17658](https://github.com/magento/magento2/issues/17658)

<!--- ENGCOM-4147-->

*  We added Type casting to `\Magento\Shipping\Model\Carrier\AbstractCarrier::getTotalNumOfBoxes()` to improve  validation. *Fix submitted by Mudit Shukla in pull request [20898](https://github.com/magento/magento2/pull/20898)*. [GitHub-13319](https://github.com/magento/magento2/issues/13319)

<!--- ENGCOM-4170-->

*  Widget parameters can now contain multidimensional arrays. *Fix submitted by Eduard Chitoraga in pull request [21008](https://github.com/magento/magento2/pull/21008)*. [GitHub-19909](https://github.com/magento/magento2/issues/19909)

<!--- ENGCOM-4627-->

*  The `phpcs` linter plugin now reports all errors and warnings in the terminal as expected. Previously, `phpcs` threw an error instead of reporting errors under certain circumstances. *Fix submitted by Nazar Klovanych in pull request [22081](https://github.com/magento/magento2/pull/22081)*. [GitHub-20186](https://github.com/magento/magento2/issues/20186)

<!--- ENGCOM-4527-->

*  The `getSize()` method in `\Magento\Framework\Data\Collection` now returns results that reflect added filters as expected when the `clear()` method is called after `getSize()`. Previously, this method returned results that always remained the same after the first call and the `clear()` method was ignored.*Fix submitted by Sergey Nezbritskiy in pull request [21670](https://github.com/magento/magento2/pull/21670)*. [GitHub-21654](https://github.com/magento/magento2/issues/21654)

<!--- ENGCOM-4545-->

*  Magento no longer caches absolute file paths in  the validator factory  (`Magento\Framework\Validator\Factory::_initializeConfigList`). Previously, caching absolute file paths resulted in problems during transactions when a customer, a `customer_address`, or quote for a registered customer was saved. *Fix submitted by David Führ in pull request [21856](https://github.com/magento/magento2/pull/21856)*. [GitHub-21842](https://github.com/magento/magento2/issues/21842)

<!--- ENGCOM-4679-->

*  The `QuoteRepository` `get` methods now return an object of instance `Vendor\Module\Model\Quote`. *Fix submitted by Bartłomiej Szubert in pull request [22149](https://github.com/magento/magento2/pull/22149)*. [GitHub-12802](https://github.com/magento/magento2/issues/12802)

<!--- ENGCOM-4585-->

*  Magento no longer throws an exception under these conditions:

   *  A product configuration specifies a **Minimum Qty Allowed in Shopping Cart** as a decimal value less than one

   *  This configuration is later updated to set **Qty Uses Decimals** to **no**. *Fix submitted by Valerij Ivashchenko in pull request [21928](https://github.com/magento/magento2/pull/21928)*. [GitHub-21926](https://github.com/magento/magento2/issues/21926)

### Layered navigation

<!--- ENGCOM-4637-->

*  Setting **price navigation step calculation** for layered navigation to **Automatic (equalize product counts)** now works as expected. Previously, results were not in the equals range, but omitted products. *Fix submitted by Nazar Klovanych in pull request [21968](https://github.com/magento/magento2/pull/21968)*. [GitHub-21960](https://github.com/magento/magento2/issues/21960)

<!--- ENGCOM-4504-->

*  Use of the Yes/No attribute in the Layered Navigation filter no longer degrades filter performance. *Fix submitted by Stephan Kechedzhi in pull request [21772](https://github.com/magento/magento2/pull/21772)*. [GitHub-3283](https://github.com/magento/magento2/issues/3283), [GitHub-21771](https://github.com/magento/magento2/issues/21771)

<!--- ENGCOM-4458-->

*  Magento now retrieves the configuration value (store ID)  that is  based on the current store scope in multistore deployments. Previously, Magento occasionally returned an incorrect configuration scope ID when attempting to resolve a scope ID set to null. *Fix submitted by Pratik Oza in pull request [21633](https://github.com/magento/magento2/pull/21633)*. [GitHub-16939](https://github.com/magento/magento2/issues/16939)

### Logging

<!--- MAGETWO--98102 -->

*  The `support_report.log` and `system.log` files no longer contain duplicate records.

<!--- ENGCOM-4505-->

*  Magento now creates a log entry if an observer does not implement `ObserverInterface` in modes other than developer mode.  Previously, Magento created a log entry when in developer mode only. *Fix submitted by Nazar Klovanych in pull request [21767](https://github.com/magento/magento2/pull/21767)*. [GitHub-21755](https://github.com/magento/magento2/issues/21755)

### Magento Shipping

*  Fixed issue with the event stream cron job.

*  Fixed issue with retrieving shipping labels from some AWS environments.

### New Relic reporting

<!--- MAGETWO-98853-->

*  Improved performance of New Relic queries. The New Relic Reporting module now cleans the Magento 2.x report data to prevent the reporting data store from growing too large and slowing query performance.

<!--- ENGCOM-4634-->

*  Magento 2.x CLI command names are now reported in the transaction names in the New Relic APM Monitoring Data. The transaction name is based on the Magento CLI command name, for example `cli app:config:import`, `cli indexer:reindex`, and `cli cache:flush`. In previous releases, the New Relic transaction names for CLI commands initiated by Magento 2.x CLI command names was missing and reported as unknown. *Fix submitted by Lukasz Bajsarowicz in pull request [22059](https://github.com/magento/magento2/pull/22059)*. [GitHub-22047](https://github.com/magento/magento2/issues/22047)

### Newsletter

<!--- MAGETWO-98617-->

*  You can now change pages at an expected speed from the Admin newsletter subscribers page (**Marketing** > **Communications** > **Newsletter Subscribers**). Previously, it took excessively long to move off this page.

<!--- ENGCOM-3992-->

*  The newsletter subscription input box now displays all text in mobile view. *Fix submitted by Arvinda kumar in pull request [20165](https://github.com/magento/magento2/pull/20165)*. [GitHub-20163](https://github.com/magento/magento2/issues/20163)

### Orders

<!--- MAGETWO-98368-->

*  The quick order form now handles the SKU codes that you enter for configurable products as expected. Previously, Magento threw an error when you tried to enter the SKU for a configurable product, and displayed a link to the simple product which typically returned a 404 page.

<!--- ENGCOM-4673-->

*  Order status is now maintained as expected after a partial refund. Previously, Magento reset order status  to default  after a partial refund. *Fix submitted by Malyovanets Nickolas in pull request [20378](https://github.com/magento/magento2/pull/20378)*. [GitHub-12386](https://github.com/magento/magento2/issues/12386)

<!--- ENGCOM-4739-->

*  Programmatically created invoices now include all items as expected when both simple products and bundled products are mixed in an order. Previously, when  `Magento\Sales\Model\Service\InvoiceService::prepareInvoice` was called without a specified quantity, the function did not discard items as expected after bundled items were processed, which resulted in a partial invoice. *Fix submitted by Ryan Palmer in pull request [22263](https://github.com/magento/magento2/pull/22263)*. [GitHub-22246](https://github.com/magento/magento2/issues/22246)

<!--- ENGCOM-4524-->

*  When you create new extension attributes for orders, these attributes are now correctly joined when querying orders. *Fix submitted by Oleksandr Kravchuk in pull request [21797](https://github.com/magento/magento2/pull/21797)*. [GitHub-8035](https://github.com/magento/magento2/issues/8035)

### Page cache

<!--- MAGETWO-91607-->

*  Page cache is no longer active when maintenance mode is enabled.  Previously, Magento cached  pages from all IP addresses during maintenance mode.

### Payment methods

<!--- MAGETWO-99307-->

*  Magento no longer throws an error indicating that a transaction was declined when Authorize.net successfully processes the order. Previously, orders were successfully created but Authorize.net indicated that the transaction had been declined.  [GitHub-22373](https://github.com/magento/magento2/issues/22373)

<!--- MAGETWO-99094-->

*  Magento creates an order using PayPal PayflowPro as expected when a customer enters all the credit card information that PayPal needs to create the transaction. Previously, Magento did not create the order even though all necessary credit card information has been entered.

<!--- ENGCOM-4192-->

*  Alt attribute text that describes  credit card type or stored payment methods during checkout has been added to support accessibility. *Fix submitted by Patrick McLain in pull request [21090](https://github.com/magento/magento2/pull/21090)*. [GitHub-21089](https://github.com/magento/magento2/issues/21089)

### Performance

<!--- MAGETWO-95294-->

*  Improved catalog/search/advanced search pages response time: We have optimized the products load flow on storefront, which result in significant improvement of category, product, checkout, and search result pages response time. There is at minimum a five times improvement for page response time under high load.

<!--- MC-16005-->

*  Client-side performance has been optimized by moving non-critical JavaScript code to the bottom of the page along with the corresponding deferred parsing and evaluation of this code. This means that users can see rendered pages faster. To enable this performance enhancement, you must navigate to **Stores** > **Configuration** > **Developer** > **JavaScript Settings** and enable the **Move JS code to the bottom of the page** option.

<!--- MAGETWO-96138-->

*  The transfer cart line items and transfer shipping options in the the Shipping step of checkout now work for PayPal. [GitHub-19064](https://github.com/magento/magento2/issues/19064)

<!--- MAGETWO-98424-->

*  The multishipping checkout flow now supports the Braintree payment method.

<!--- ENGCOM-4650-->

*  Magento no longer disables the **Place order** button in the checkout workflow after the customer has supplied the requested email address for orders created with Braintree. *Fix submitted by Roman Kis in pull request [21936](https://github.com/magento/magento2/pull/21936)* [GitHub-21907](https://github.com/magento/magento2/issues/21907)

<!--- MC-6273-->

*  We have optimized the logic of concurrent access to the block cache, which has improved the response of storefront pages under high load by approximately 20%.

### Quote

<!--- ENGCOM-4520-->

*  `QuoteManagement::submitQuote` now logs all root exceptions. Previously, Magento logged only the second exception in `exception.log`.  *Fix submitted by David Führ in pull request [21697](https://github.com/magento/magento2/pull/21697)*. [GitHub-14926](https://github.com/magento/magento2/issues/14926), [GitHub-18752](https://github.com/magento/magento2/issues/18752)

<!--- ENGCOM-4712-->

*  The `x_forwarded_for` field of the Quote Management service now contains the value from `$_SERVER['HTTP_X_FORWARDED_FOR']`. Previously, this field was always empty. This change will permit administrators to see their customer's actual IP addresses (as opposed to 127.0.0.1), which can help identify potentially fraudulent orders. *Fix submitted by Christian Münch in pull request [21787](https://github.com/magento/magento2/pull/21787)*. [GitHub-](https://github.com/magento/magento2/issues/)

### Reports

<!--- MAGETWO-97848-->

*  Reports now include orders from only the websites that the administrator has permissions for in multisite deployments. Previously, a report run by an administrator with access to one website only contained information about products and sales on other websites.

<!--- ENGCOM-3808-->

*  The date range in reports no longer displays the same start and end dates. *Fix submitted by Milind Singh in pull request [20129](https://github.com/magento/magento2/pull/20129)*. [GitHub-20128](https://github.com/magento/magento2/issues/20128)

<!--- ENGCOM-4302-->

*  Magento now includes the amount of a credit memo's refunded discount in its calculation of the value displayed in the total column under **Last Orders** listing on the Admin. *Fix submitted by rav-redchamps in pull request [21283](https://github.com/magento/magento2/pull/21283)*. [GitHub-18754](https://github.com/magento/magento2/issues/18754), [GitHub-21281](https://github.com/magento/magento2/issues/21281)

<!--- ENGCOM-4747-->

*  The downloads report table (**Admin** > **Reports** > **Downloads**) now displays an accurate count of all downloadable products and the number of times they have been downloaded. *Fix submitted by Shikha Mishra in pull request [22291](https://github.com/magento/magento2/pull/22291)*. [GitHub-22223](https://github.com/magento/magento2/issues/22223)

### Reviews

<!--- ENGCOM-4560-->

*  The text for review-related headers under **User Content** on the Admin  has been edited for clarity.  *Fix submitted by Vishal Gelani in pull request [21621](https://github.com/magento/magento2/pull/21621)*. [GitHub-21620](https://github.com/magento/magento2/issues/21620)

### Return Merchandise Authorizations (RMA)

<!--- MAGETWO-97852-->

*  Product-level RMA disabling now works as expected.

### Sales

<!--- ENGCOM-4101-->

*  Corrected problems with the disabling and enabling order-related emails. *Fix submitted by Serhiy Zhovnir in pull request [20953](https://github.com/magento/magento2/pull/20953)*. [GitHub-18698](https://github.com/magento/magento2/issues/18698)

<!--- ENGCOM-4197-->

*  Fixed display of the Luma theme My Account Order status tabs in mobile view.*Fix submitted by Abrar Pathan in pull request [21071](https://github.com/magento/magento2/pull/21071)*. [GitHub-21070](https://github.com/magento/magento2/issues/21070)

<!--- ENGCOM-4241-->

*  You can now change customer groups when creating a new customer during order creation on the Admin. *Fix submitted by gauravagarwal1001 in pull request [21145](https://github.com/magento/magento2/pull/21145)*. [GitHub-6162](https://github.com/magento/magento2/issues/6162), [GitHub-7974](https://github.com/magento/magento2/issues/7974), [GitHub-21144](https://github.com/magento/magento2/issues/21144)

<!--- ENGCOM-4321-->

*  You can now successfully re-order a virtual product. *Fix submitted by Shikha Mishra in pull request [21335](https://github.com/magento/magento2/pull/21335)*. [GitHub-15059](https://github.com/magento/magento2/issues/15059)

<!--- MAGETWO-97423-->

*  When you place an Admin order for a product with a custom price, the `sales_order_item` table now behaves the same as it would for an order of a product with a regular price. Specifically, the price column  contains the custom price excluding tax. Previously, the `sales_order_item` table's price column displayed the custom price including tax.

<!--- ENGCOM-4238-->

*  Form validation now works as expected for fields in the Admin order address edit forms. Previously, when you entered invalid data, Magento did not display an error message and displayed the data. *Fix submitted by Ievgenii Gryshkun in pull request [20840](https://github.com/magento/magento2/pull/20840)*. [GitHub-19360](https://github.com/magento/magento2/issues/19360)

<!--- ENGCOM-3910-->

*  If you retrieve an order, and then use the `getShippingMethod` as object function to retrieve the shipping method, Magento now returns `null` if no shipping method has been defined. Previously, this function returned an undefined index error if a shipping method was not available. *Fix submitted by Mahesh Singh in pull request [20381](https://github.com/magento/magento2/pull/20381)*. [GitHub-20380](https://github.com/magento/magento2/issues/20380)

### SalesRule

<!--- ENGCOM-4215-->

*  We updated the DataProvider and Save Controller files to improve persistence of form data in cart price rules. *Fix submitted by Aditya Yadav in pull request [20895](https://github.com/magento/magento2/pull/20895)*. [GitHub-20888](https://github.com/magento/magento2/issues/2088)

<!--- ENGCOM-4406-->

*  Added a condition `type _Subtotal (Excl. Tax)` to the Cart Price Rule configuration so that you can configure a cart price discount rule discount based on minimum purchase amount that excludes tax. Previously, the subtotal was calculated only with tax included. *Fix submitted by AleksLi in pull request [21288](https://github.com/magento/magento2/pull/21288)*. [GitHub-12396](https://github.com/magento/magento2/issues/12396)

### Search

<!--- MAGETWO-58764-->

*  Catalog search **Minimal Query Length** values are now enforced as expected.

<!--- MAGETWO-97209-->

*  The count of products in layered navigation now equals the number of  products found by search in deployments that run B2B. Previously, fewer products were identified by search than by layered navigation.

<!--- MAGETWO-97830-->

*  Elasticsearch quick search now works as expected when the default attribute set contains a `date` attribute that has been set to **Search = Yes**. Previously, the search page threw an exception and crashed.

<!--- ENGCOM-4109-->

*  The performance of layered navigation queries has been improved. *Fix submitted by Mads Nielsen in pull request [20971](https://github.com/magento/magento2/pull/20971)*. [GitHub-20969](https://github.com/magento/magento2/issues/20969)

<!--- ENGCOM-4481-->

*  The search REST API now returns the correct `total_count` of result items. Previously, the value of `total_count`  equaled `searchCriteria[pageSize]`,  not the total count of the search result items. *Fix submitted by Ronak Patel in pull request [21713](https://github.com/magento/magento2/pull/21713)*. [GitHub-17295](https://github.com/magento/magento2/issues/17295)

<!--- ENGCOM-4761-->

*  The search icon on Admin page headers now works as expected. *Fix submitted by Nirav Patel in pull request [22154](https://github.com/magento/magento2/pull/22154)*. [GitHub-22152](https://github.com/magento/magento2/issues/22152)

<!--- ENGCOM-4620-->

*  Magento now checks concrete class while applying plugins. Previously, when  the pluginized class was virtual-typed by a class with name ending with an autogenerated suffix and without the implementation of the base concrete class, the `di:compile` process failed. *Fix submitted by Riccardo Tempesta in pull request [22046](https://github.com/magento/magento2/pull/22046)*. [GitHub-21916](https://github.com/magento/magento2/issues/21916), [GitHub-21976](https://github.com/magento/magento2/issues/21976)

### Shipping

<!--- ENGCOM-4266-->

*  UPS (non XML) endpoints are now HTTPS instead of  HTTP. *Fix submitted by Josh in pull request [21511](https://github.com/magento/magento2/pull/21511)*.

<!--- ENGCOM-3601-->

*  Magento now provides quotes for DHL shipments when **DHL Content Type** is set to **Non Documents**. *Fix submitted by gwharton in pull request [19487](https://github.com/magento/magento2/pull/19487)*. [GitHub-19485](https://github.com/magento/magento2/issues/19485)

<!--- MAGETWO-98947-->

*  The CGI URL gateway endpoint in the UPS module has been updated from HTTP to HTTPS in response to the disablement of the HTTP gateway by UPS in mid-2019. See [Magento User Guide](https://docs.magento.com/m2/ee/user_guide/shipping/ups.html) for a discussion of using the UPS shipment method. Shipping method configuration settings are described in the [Shipping methods](https://docs.magento.com/m2/ee/user_guide/configuration/sales/shipping-methods.html#UPS).

<!--- MAGETWO-98328-->

*  The tracking pop-up window now displays an accurate value for the delivery date for FedEx shipments in transit.

### Sitemap

<!--- ENGCOM-3683-->

*  Images in the XML sitemap are no longer linked to the base store in a multistore deployment when scheduling start times and daily frequency. *Fix submitted by Nazar Klovanych in pull request [19598](https://github.com/magento/magento2/pull/15012)*. [GitHub-19596](https://github.com/magento/magento2/issues/19596)

<!--- ENGCOM-3844-->

*  Magento now validates sitemap file names to ensure that file names do not exceed length limits. Previously, Magento simply truncated excessively long file names. *Fix submitted by Rajneesh Gupta in pull request [20044](https://github.com/magento/magento2/pull/20044)*. [GitHub-13937](https://github.com/magento/magento2/issues/13937)

### Staging

<!--- MAGETWO-97866-->

*  Products are now marked as new on the storefront when you set a product "As New" in the product page or from a scheduled update. Previously, dates shown in database did not match the dates in the update on the store in deployments running the `en_GB` locale.

### Swatches

<!--- ENGCOM-4347-->

*  Corrected `blackground` to `background` in `Magento_Swatches _module.less`. *Fix submitted by Amol Chaudhari in pull request [21368](https://github.com/magento/magento2/pull/21368)*. [GitHub-21365](https://github.com/magento/magento2/issues/21365)

<!--- ENGCOM-4296-->

*  You can now successfully preselect a configurable product swatch that contains an image. Previously, Magento tried to load the image into the product gallery before initialization completed and threw a JavaScript error. *Fix submitted by Nirav Patel in pull request [19635](https://github.com/magento/magento2/pull/19635)*. [GitHub-18017](https://github.com/magento/magento2/issues/18017)

### Tax

<!--- MAGETWO-97396-->

*  The tax that is applied to a simple child product is now  based on the tax class of that product. Previously, Magento based the tax for a child product on the tax class of its parent product.

<!--- ENGCOM-4022-->

*  The shopping cart full tax summary now displays total tax as expected instead of  individual tax values. *Fix submitted by Nirav Patel in pull request [20682](https://github.com/magento/magento2/pull/20682)*. [GitHub-11358](https://github.com/magento/magento2/issues/11358), [GitHub-19701](https://github.com/magento/magento2/issues/19701)

<!--- ENGCOM-4359-->

*  The value of `product_price_value` in the shopping cart data section  now includes taxes if the configuration settings are set accordingly (**Stores** > **Configuration** > **Sales** > **Tax** > **Shopping Cart Display Settings** > **Display Prices** > **Including Tax**). *Fix submitted by Nick de Kleijn in pull request [20316](https://github.com/magento/magento2/pull/20316)*. [GitHub-20310](https://github.com/magento/magento2/issues/20310)

<!--- MAGETWO-98028-->

*  The tax that is applied to a simple child product is now based on the tax Class of that product. Previously, the tax was based on the tax class of the parent product.

<!--- ENGCOM-4480-->

*  You can now successfully search for a tax rule based on both the **Name** and **Tax Rate** fields. Previously, Magento threw a MySQL error. *Fix submitted by Tuyen Nguyen in pull request [21701](https://github.com/magento/magento2/pull/21701)*. [GitHub-21521](https://github.com/magento/magento2/issues/21521)

### Testing

<!--- ENGCOM-4300-->

*  The `Squiz.Operators.ValidLogicalOperators` PHP-CS rule has been added to the static test rules. *Fix submitted by Maksym Novik in pull request [21275](https://github.com/magento/magento2/pull/21275)*. [GitHub-21062](https://github.com/magento/magento2/issues/21062)

<!--- ENGCOM-4554-->

*  Added missing parameters to failing unit tests for `FormatTests`. *Fix submitted by Kamil Degórski in pull request [21880](https://github.com/magento/magento2/pull/21880)*. [GitHub-21001](https://github.com/magento/magento2/issues/21001)

### Theme

<!--- MAGETWO-98319-->

*  Editing a theme now creates an entry in the Admin action log as expected.

<!--- ENGCOM-3799-->

*  Logo files for transactional emails can now be uploaded successfully using the **Content** > **Configuration** > **Edit theme** > **Transactional Emails** option. Previously, Magento did not upload the logo, and displayed the following error instead: `A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later.` *Fix submitted by chaplynsky in pull request [20092](https://github.com/magento/magento2/pull/20092)*. [GitHub-20091](https://github.com/magento/magento2/issues/20091)

<!--- ENGCOM-4338-->

*  The horizontal scroll widget on the storefront search results page now works as expected when displaying very long search strings. *Fix submitted by Prince Patel in pull request [21360](https://github.com/magento/magento2/pull/21360)*. [GitHub-21359](https://github.com/magento/magento2/issues/21359)

<!--- ENGCOM-4541-->

*  Checkboxes and radio buttons are now highlighted on focus while you navigate a form using the keyboard.  This change is a reversion of an earlier fix (20861), which inadvertently violated accessibility standards for keyboard  navigation. *Fix submitted by Roman Kis in pull request [21820](https://github.com/magento/magento2/pull/21820)*. [GitHub-20825](https://github.com/magento/magento2/issues/20825)

<!--- ENGCOM-4800-->

*  Magento now successfully uploads files from the theme config edit form page when you click the **Select from Gallery** button for the **Logo Image** field. *Fix submitted by Vechirko Yurii in pull request [22132](https://github.com/magento/magento2/pull/22132)*. [GitHub-21032](https://github.com/magento/magento2/issues/21032)

### Translation and locales

<!--- ENGCOM-4503-->

*  Product attribute labels are no longer translated. *Fix submitted by Karla Saaremäe in pull request [21751](https://github.com/magento/magento2/pull/21751)*. [GitHub-21750](https://github.com/magento/magento2/issues/21750)

### UI

<!--- ENGCOM-3937-->

*  You can no longer upload images when the **Use Default Value** setting on the Admin Content tab is enabled. Previously, you could drag an image to this tab even when this setting was enabled. *Fix submitted by Mahesh Singh in pull request [20381](https://github.com/magento/magento2/pull/20381)*. [GitHub-20380](https://github.com/magento/magento2/issues/20380)

<!--- ENGCOM-4148-->

*  The Date field associated with a page on the  Admin Pages table now displays the correct date, not the current date. *Fix submitted by Satya Prakash in pull request [20902](https://github.com/magento/magento2/pull/20902)*. [GitHub-17564](https://github.com/magento/magento2/issues/17564)

<!--- ENGCOM-3898-->

*  Postcodes and zip code fields on the checkout page are empty and invalidated on page load as expected. Previously, Magento validated postcodes and zip codes on the checkout page when the page loaded. *Fix submitted by Danny Verkade in pull request [18633](https://github.com/magento/magento2/pull/18633)*. [GitHub-18630](https://github.com/magento/magento2/issues/18630)

<!--- ENGCOM-4522-->

*  Buttons on the Admin **System** > **Backups** page no longer flicker when the page is reloaded. *Fix submitted by Oleg Volkov in pull request [21791](https://github.com/magento/magento2/pull/21791)*. [GitHub-19835](https://github.com/magento/magento2/issues/19835)

<!--- ENGCOM-4414-->

*  Screen readers can now identify the `label` elements that are linked to  `input` fields for street address fields on the checkout page. Previously, screen readers could not identify these fields because the elements were not populated.  *Fix submitted by Scott Buchanan in pull request [21484](https://github.com/magento/magento2/pull/21484)*. [GitHub-10893](https://github.com/magento/magento2/issues/10893)

<!--- ENGCOM-4596-->

*  Product gallery images no longer open unexpectedly when you move a product image while moving to another page element. *Fix submitted by Denis Kopylov in pull request [21790](https://github.com/magento/magento2/pull/21790)*. [GitHub-21789](https://github.com/magento/magento2/issues/21789)

<!--- ENGCOM-4703-->

*  Magento now cancels previous scrolling actions as expected when you click **Add to cart** on a product page. Previously, Magento scrolled back to the `qty` input box the same number of times as you clicked  **Add to cart**. *Fix submitted by Vechirko Yurii in pull request [22117](https://github.com/magento/magento2/pull/22117)*. [GitHub-21715](https://github.com/magento/magento2/issues/21715)

<!--- ENGCOM-4666-->

*  Magento no longer displays the customer name twice in the welcome message on the log in page after a customer logs in. *Fix submitted by priti2jcommerce in pull request [20832](https://github.com/magento/magento2/pull/20832)*. [GitHub-20830](https://github.com/magento/magento2/issues/20830)

<!--- ENGCOM-4762-->

*  Magento now updates the `created_at` and `updated_at` columns in the `ui_bookmark` table as expected. *Fix submitted by Shikha Mishra in pull request [22340](https://github.com/magento/magento2/pull/22340)*. [GitHub-18557](https://github.com/magento/magento2/issues/18557)

<!--- ENGCOM-4775-->

*  Scrolling now works as expected in pop-up windows on devices running iOS. *Fix submitted by priti2jcommerce in pull request [21150](https://github.com/magento/magento2/pull/21150)*. [GitHub-21147](https://github.com/magento/magento2/issues/21147)

<!--- ENGCOM-3803-->

*  Magento now displays warning messages when validation fails on a form field that has a validation rule associated with it. Previously,  Magento displayed the following error: `Javascript Error: Uncaught TypeError: msg.replace is not a function`, if validation failed on a form field. *Fix submitted by Seth Daugherty in pull request [20079](https://github.com/magento/magento2/pull/20079)*. [GitHub-20078](https://github.com/magento/magento2/issues/20078)

<!--- ENGCOM-3937-->

*  Magento no longer uploads images to the Category page unless the **Use Default Value** attribute is enabled. *Fix submitted by Serhiy Zhovnir in pull request [20461](https://github.com/magento/magento2/pull/20461)*. [GitHub-20376](https://github.com/magento/magento2/issues/20376)

### URL rewrites

<!--- ENGCOM-4357-->

*  Added a feature to manage URL rewrites when the product visibility attribute changes. If the product is made invisible, Magento deletes the URL rewrite. If you change the visibility attribute to true, Magento creates a URL rewrite rule. Previously, changing the visibility attribute sometimes created duplicate product URLs. *Fix submitted by VitaliyBoyko in pull request [20774](https://github.com/magento/magento2/pull/20774)*. [GitHub-20434](https://github.com/magento/magento2/issues/20434)

<!--- MAGETWO-98643-->

*  URLS in Arabic now resolve as expected. Previously, when you created a URL rewrite in Arabic, the browser returned a 404.

<!--- ENGCOM-4586-->

*  Magento now retains filter terms after you apply a filter to the Admin `url_rewrites` table, and subsequently click the **Back** button. *Fix submitted by Vaibhav Bhalerao in pull request [21834](https://github.com/magento/magento2/pull/21834)*. [GitHub-21805](https://github.com/magento/magento2/issues/21805)

### Web API

<!--- ENGCOM-4771-->

*  You can now use REST in scope `all` to save an existing category that does not have a `name` attribute. Previously, Magento threw this exception: `Could not save category with message. The "Name" attribute value is empty. Set the attribute and try again`. *Fix submitted by Nirav Patel in pull request [22362](https://github.com/magento/magento2/pull/22362)*. [GitHub-22309](https://github.com/magento/magento2/issues/22309)

<!--- ENGCOM-4674-->

*  The REST API locale now matches the appropriate store view in multistore deployments. Previously, Magento used the default scope for each store view. *Fix submitted by Julian Wundrak in pull request [19913](https://github.com/magento/magento2/pull/19913)*. [GitHub-19908](https://github.com/magento/magento2/issues/19908)

<!--- ENGCOM-4173-->

*  You can now use the `/rest/all/V1/products/` API to update a product's `category_ids` through `custom_attribute` when the product has no custom attributes. Previously, the `update` command reported success, but categories were not updated. *Fix submitted by Yaroslav Gyryn in pull request [20842](https://github.com/magento/magento2/pull/20842)*. [GitHub-20481](https://github.com/magento/magento2/issues/20481)

<!--- ENGCOM-4786-->

*  The `PUT /V1/products/:sku/media/:entryId` API operation now updates product images as expected. Previously, this operation updated the label, types, and disabled settings, but the actual `file-content` was not replaced with the values that were provided in `base64_encoded_data`. *Fix submitted by Nazar Klovanych in pull request [22424](https://github.com/magento/magento2/pull/22424)*. [GitHub-22402](https://github.com/magento/magento2/issues/22402)

### Wish List

<!--- ENGCOM-4460-->

*  Customer wishlists now include review summaries for included products. *Fix submitted by Denis Kopylov in pull request [21420](https://github.com/magento/magento2/pull/21420)*. [GitHub-21419](https://github.com/magento/magento2/issues/21419)

<!--- MAGETWO-62113-->

*  All phrases in wishlist modal windows are now translated as expected.

<!--- MAGETWO-62728-->

*  The wish list quantity field now has limits on both the type and number of characters that you can enter. Previously, you could enter an extremely large quantity of both number and letters into this field, which resulted in undesirable and inaccurate quantity changes.

<!--- ENGCOM-3715-->

*  Magento now alerts you to the expected minimum quantity of product when you try to add a lesser product quantity to your shopping cart from the wishlist. *Fix submitted by khodu in pull request [19653](https://github.com/magento/magento2/pull/19653)*. [GitHub-9155](https://github.com/magento/magento2/issues/9155)

### WYSIWYG

<!--- ENGCOM-4664-->

*  You can now insert widgets that contain a WYSIWYG field into a form. Previously, when you tried to insert a widget with a `WYSIWYG` parameter into a form, the operation failed. *Fix submitted by James Dinsdale in pull request [20174](https://github.com/magento/magento2/pull/20174)*. [GitHub-19742](https://github.com/magento/magento2/issues/19742)

## Known issues

*  **Issue**: The Async/Bulk Web APIs support only the default store view. A hot fix for this issue will be available in the near future. This issue has been resolved with the Scope parameter for Async/Bulk API patch, which is now available. See [Patch for Magento Framework Message Queue and Store Scopes](https://community.magento.com/t5/Magento-DevBlog/Patch-for-Magento-Framework-Message-Queue-and-Store-Scopes/ba-p/135209) for a full discussion of this scope-related issue and patch contents.

*  **Issue**: The security enhancements that are part of Magento 2.3.2 require the installation of libsodium version 1.0.13 or higher. You will not be able to successfully install Magento Commerce 2.3.2 without first ensuring that your server runs  version 1.0.13 or higher. See [Libsodium releases](https://github.com/jedisct1/libsodium/releases) for a description of the available releases and installation instructions.

{:.bs-callout-warning}
{{site.data.var.ece}} customers must submit a support ticket to upgrade the libsodium package on Pro Production and Staging environments prior to upgrading to {{site.data.var.ee}} 2.3.2. Currently, you cannot upgrade Starter environments to {{site.data.var.ee}} 2.3.2.

*  **Issue:** You cannot use the Magento Extension Manager to install extensions purchased from the Magento Marketplace. **Workaround**: Install extensions from the command line as described in [General CLI installation]({{ site.baseurl }}/extensions/install/). See [Extension Manager shows no extensions in Magento Commerce 2.3.x](https://support.magento.com/hc/en-us/articles/360043980352).

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-2-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-2-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.2  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
