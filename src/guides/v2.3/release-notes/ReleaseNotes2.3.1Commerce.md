---
group: release-notes
title: Magento Commerce 2.3.1 Release Notes
---

*Release notes published on March 26, 2019 and last edited on June 3, 2020.*

We are pleased to present Magento Commerce 2.3.1.  This release includes over 200 functional fixes to the core product, over 500 pull requests contributed by the community, and  over 30 security enhancements.

This release includes significant contributions from our community members. These contributions range from minor clean-up of core code to the development of substantial features such as Inventory Management and GraphQL. Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are not documented in these core release notes but in separate project-specific sets of notes.

## Apply updated hot fix for CVE-2019-8118

The patch addresses an issue with [CVE-2019-8118](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8118) that was included in Magento 2.3.3 and 2.2.10. While the original fix for that bug stopped the logging of failed login attempts, information collected prior to updating to these current versions may still exist, and previous, unpatched versions of Magento may still have this issue. This hotfix includes both a patch (first released in Oct 2019) that stops the logging of failed login attempts and a new script that clears the login attempts that were previously collected. **We recommend that all merchants download and apply this patch and download and run the clean-up script**. See [Remove failed login attempts from the database](https://support.magento.com/hc/en-us/articles/360040209352) for information on how to download and run the patch and clean-up script.

## Apply patch PRODSECBUG-2233 to address critical remote code execution vulnerability (RCE)

An unauthenticated cross-site scripting vulnerability combined with an authenticated Phar deserialization vulnerability has left this version of Magento Commerce open to serious exploit. An attacker can use these vulnerabilities to inject JavaScript into the Magento Admin and subsequently launch malicious code in a store user’s browser.   **We strongly recommend that all users of the affected versions of Magento download and apply the appropriate patch as soon as possible**.

This issue and the available patches are discussed in the [Extending the June 25 Security Update to Older Versions of Magento](https://community.magento.com/t5/Magento-DevBlog/Extending-the-June-25-Security-Update-to-Older-Versions-of/ba-p/138231)
blog post. You can directly access patch code through your Magento account for Magento Commerce. Locate the patch by the name. We provide both Git-based and Composer-based patches.

## Apply the Scope parameter for Async/Bulk API patch to address an issue with the Async/Bulk REST API

In certain versions of Magento Open Source and Magento Commerce, the Asynchronous and Bulk REST endpoints support the default store view scope only. After this patch is applied to deployments running those versions of Magento, the current Magento message queue implementation
will factor in the store that executes queue operations. See [Patch for Magento Framework Message Queue and Store Scopes](https://community.magento.com/t5/Magento-DevBlog/Patch-for-Magento-Framework-Message-Queue-and-Store-Scopes/ba-p/135209) for a full discussion of this scope-related issue and patch contents. See [Applying patches]({{ page.baseurl }}/comp-mgr/patching.html) for specific instructions on downloading and applying Magento patches. To apply the patch, navigate to the [Magento Security Center](https://magento.com/security/patches), and select the patch associated with the version of Magento you are running.

## Apply the PRODSECBUG-2198 patch to address critical SQL injection vulnerability

A critical SQL injection vulnerability has been identified in 2.3.x Magento code. A fix for this issue is included in Magento 2.3.1. If you cannot immediately apply the full patch, you can quickly protect your store from this vulnerability by installing patch PRODSECBUG-2198.  However, **we strongly encourage all merchants to stay up-to-date on security patches**. See the description of  PRODSECBUG-2198  in the  [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for information on this vulnerability.

Follow these steps to download and apply this patch:

1. Access [My Account](https://account.magento.com/customer/account/login).
1. Navigate to the **Downloads** tab. Select the Magento edition and version you need.
1. Select **Support Patches and Security Patches**, then **PRODSECBUG-2198**.
1. Download the patch and upload to a specific directory in your Magento installation such as `m2-hotfixes` (confirm  that the directory is not accessible publicly).
1. From your project root, apply the patch. `git apply ./m2-hotfixes/<patch-file-name>`.
1. Refresh the cache from the Admin (**System** > **Cache Management**).

## PayPal Payflow Pro active carding activity update

The PayPal Payflow Pro integration in Magento is being actively targeted by carding activity. To resolve these carding activity issues, Magento has provided Composer packages that add an option for Google reCAPTCHA and CAPTCHA to the Payflow Pro checkout form. See [PayPal Payflow Pro active carding activity](https://support.magento.com/hc/en-us/articles/360025515991) for a full discussion of this issue and instructions on downloading these packages. **We strongly recommend that all Payflow Pro merchants download and install these packages to help enhance the security of their storefronts**.

## Apply the Admin Dashboard Image-Charts patch to address deprecation of Google Image Charts

Magento 2.x currently uses Google Image Charts to render static charts in Admin dashboards. Google stopped supporting Google Image Charts on March 14, 2019, and Magento is providing the Admin Dashboard Image-Charts  patch to replace Google Image Charts with the Image-Charts free service. Users of Magento 2.x deployments will not be able to view static charts in Magento 2.x instances unless they download and apply this patch.

See  [Switch from deprecated Google Image Charts to Image-Charts for Magento](https://support.magento.com/hc/en-us/articles/360024850172) for information on downloading and applying this patch.

## Highlights

Look for the following highlights in this release:

### Merchant tool enhancements

#### Page Builder

Page Builder is a drag-and-drop visual content editing tool that lets merchants customize content page layout and create shopping experiences that blend content and commerce without writing HTML or CSS.  Page Builder provides merchants with a powerful set of content types to compose various types of pages and easy drag-and-drop positioning of all content elements for intuitive page editing. Page Builder is available on Magento Commerce only. See [Page Builder User Guide](https://docs.magento.com/m2/ee/user_guide/cms/page-builder.html) and [Page Builder Developer Documentation](https://devdocs.magento.com/page-builder/docs/index.html).

#### Improved order creation workflow in the Admin

The Admin order creation workflow has been refactored to eliminate delays when editing billing and shipping addresses. Processing of these fields now happens only after they are populated.

#### Ability to upload PDP images without compression and downsizing

 Merchants can now upload PDP images larger than 1920 x 1200  without first compressing and downsizing the images. Previously, when a merchant uploaded a high quality product image (larger than 1920 x 1200), Magento resized and compressed the image. Merchants can now set requirements for resizing and compression as well as compression quality and target width and height. <!--- MAGETWO-95299-->

#### Inventory Management 1.1.0 (Community-developed feature!)

The Magento Inventory (was MSI) community project has added multiple new features to this release of Inventory Management. See [Inventory Management Release Notes]({{ page.baseurl }}/inventory/release-notes.html) for information about specific fixes and acknowledgements to community contributors.

*  **Support for Elasticsearch and Inventory Management**. All site searches now return correct products and quantities when Elasticsearch is used as the search engine. (As of this release, only default option from 2.3+)  Searches return results from stock assigned to the website. Advanced features are supported, including filtering search results. Community-developed feature!

*  **Distance Priority Source Selection algorithm (SSA) option**. Merchants can enable this algorithm to reduce fulfillment costs by shipping orders from the closest inventory locations. This SSA option uses address geocoding through the Google Maps API to calculate the shortest distance for deliveries. See [Manage source selection algorithms]({{ page.baseurl }}/rest/modules/inventory/manage-source-selection.html).

*  **Enhancements to mass inventory transfers**. Bulk transfer of inventory has been optimized to improve processing speed and to reduce locking during transfers.

### Improved developer experience

#### Progressive Web Apps (PWA) Studio

PWA Studio is a set of developer tools that allow you to develop, deploy, and maintain a PWA storefront on top of Magento 2.x. See [Magento PWA Documentation](https://magento.github.io/pwa-studio/).

#### GraphQL

Community contributions for this release include major additions to cart actions (create cart, populate cart, set shipping address)  and customers (create customer account). See [Release Notes]({{ page.baseurl }}/graphql/release-notes.html) for information about specific fixes and acknowledgements to community contributors.

### Substantial security enhancements

This release includes over 30 security enhancements that help close cross-site scripting, arbitrary code execution, and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.3.1) have been ported to 2.2.8, 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.

### Performance boosts

**Magento now supports customer accounts with more than 3,000 addresses**. B2B merchants should note the multiple code enhancements that contribute to this performance boost:

*  Customer address handling has been rewritten with UI components that increase platform performance, which in turn streamlines the management of customers with 3000 and more addresses.  <!--- MAGETWO-94346 95249-->

*  The Admin order creation page now handles  customer accounts with 3000 addresses without performance issues. <!--- MC-5683-->

*  Magento now displays the list of additional customer addresses contained in the storefront customer address book  as a grid, which has improved performance for customers with many additional addresses associated with their accounts. [Address Book](https://docs.magento.com/m2/ee/user_guide/customers/account-dashboard-address-book.html) describes how to use this enhanced feature. <!--- MAGETWO-94347-->

*  The shipping and billing data that a user enters during checkout now persists if the user interrupts checkout to continue shopping. Previously, checkout data was deleted after a cart update. <!-- MAGETWO-95067 -->

### Infrastructure improvements

Infrastructure improvements are core enhancements that underlie both merchant and developer features.

*  This release includes a **new Authorizenet extension** to replace the Authorizenet Direct Post module, which implemented an MD5-based hash that Authorize.Net will no longer support as of June 28, 2019. See [Authorize.Net](https://docs.magento.com/m2/ce/user_guide/payment/authorize-net.html) for information on configuring and using this new extension. Information about the deprecation of Authorize.Net Direct Post can be found [here](https://docs.magento.com/m2/ce/user_guide/payment/authorize-net-direct-post.html). Note that Magento released a patch in late February to address this issue on pre-2.3.1 installations of Magento, which is discussed in [Update Authorize.Net Direct Post from MD5 to SHA-512](https://support.magento.com/hc/en-us/articles/360024368392-Update-Authorize-Net-Direct-Post-from-MD5-to-SHA-512).

*  `Accept.js` library is now used for Authorize.Net payments.

*  Magento now supports **Elasticsearch 6.x**. *Fix submitted by community member  Romain Ruaud in pull request [21458](https://github.com/magento/magento2/pull/21458)*. Thank you, Romain! <!--- ENGCOM-4389 -->

*  Update PayPal Express Checkout to `checkout.js v4`. This introduces a modernized checkout flow, faster checkout performance, and new payment options in a single integration that does not have to be updated as new payment methods become available. It also unlocks new payment options including Venmo and PayPal Credit. See [PayPal Express Checkout](https://docs.magento.com/m2/ce/user_guide/payment/paypal-express-checkout.html).

*  Magento now supports **Redis 5.0**. <!--- MC-5201 -->

*  Magento support for PHP has changed slightly as a result of expanding our Elasticsearch support in this release. Magento 2.3.1 is compatible with PHP 7.2.x  and certified  on PHP 7.2.11.

*  You can now isolate and extract MySQL Views from regular database tables with no negative effects on database backup and restoration. Support for MySQL Views was introduced in 2.3.0 with unexpected consequences to the default database backups and restore mechanism. This fix restores expected  backup and restore functionality while preserving MySQL View support the backward compatibility with legacy inventory. *Fix submitted by community member  Stepan Furman in pull request [21151](https://github.com/magento/magento2/pull/21151)*. Thank you, Stepan!

*  Magento now uses version 6.0 of the DHL XML Services schema for the DHL shipping method. <!--- MC-4245-->

*  <!--- MAGETWO-95068-->Checkout information now persists after a cart update**. Information previously entered by a customer during check out (such as shipping address) now persists after the customer updates their shopping cart. Previously, when a customer updated their shopping cart, all information previously entered during check out (such as shipping address) was deleted.

*  Upgrade of Magento Functional Test Framework (MFTF) to 2.3.13.

### Bundled extension enhancements

This release of Magento includes extensions developed by third-party vendors.

#### Amazon Pay

*  Added **multi-currency support** for  EU and U.K. merchants. See [Use multi-currency](https://amzn.github.io/amazon-payments-magento-2-plugin/configuration.html#use-multi-currency) for an introduction to using this new feature with Magento 2.x.  <!--- BUNDLE-1762-->

#### dotdigital Engagement Cloud (formerly dotmailer)

*  dotmailer has been rebranded as dotdigital Engagement Cloud.

*  Support for Marketing preferences has been added to the customer account dashboard area.

*  If enabled, we now display the customer consent text in the customer's account dashboard area as the general subscription text.

*  The abandoned cart and automation process now benefits from a retry function if contacts are pending in dotdigital Engagement Cloud.

#### Magento Shipping

New features for Magento 2.3.1 include:

*  **Shipment Cancellation**.  You can now cancel a shipment that has not yet been dispatched by accessing the shipment and clicking **Cancel Shipment**.

*  **Portal Access via Magento**. You can now access the Magento Shipping portal directly from Magento using the Magento Shipping credentials that are stored in your Magento instance.

Enhancements to existing features include:

*  Multiple improvements to the Shipment workflow user experience.

*  **Batch Processing**. Error messaging and field validation has been added to the batch processing workflow. See xxx for a description of other enhancements to batch processing.

*  **Collection Points**. Available Collection Points have been expanded to cater for both FedEx Hold at Locations and UPS Access Points.

*  Significant user interface changes have been made to the list of locations displayed during checkout. Opening and closing hours are now included when provided by the carrier.

*  **Click & Collect**. The list of Click & Collect locations in checkout has been brought in line with the new Collection Points list. For a description of the new Collection Points list, see xxx.

*  **Carrier Specific Packaging**. Carrier-specific packaging has been added for FedEx. These packages will be available for selection during shipping if a FedEx carrier is configured.

*  **Qualification Experience**. The three Qualification experiences (Ship to Address, Click & Collect, and Collection Points) have been restructured and are now available as outcomes in a single Qualification experience.

*  **Security**. We've closed scenarios that could allow for third-party code execution.

*  **Magento Cart Price Rules**. Cart price rules can now be applied to Magento Shipping.

*  **Dispatch**. We've added additional workflow capabilities during the dispatch process to cater for future carriers.

#### Vertex

*  Added support for B2C VAT.

*  Added support for configurable logging.

## Fixed issues

We've fixed hundreds of issues in the Magento 2.3.1 core code.

### Installation, upgrade, deployment

<!--- MC-6275 -->

*  The commands to enable and disable debug logging have changed to `bin/magento setup:config:set --enable-debug-logging=true | false`. The previous commands, `bin/magento config:set dev/debug/debug_logging 0 | 1` are no longer supported.  See [Logging]({{ page.baseurl }}/config-guide/cli/logging.html).

<!--- ENGCOM-3291 -->

*  Magento now sets the `id_prefix` option on prefix cache keys for the cache frontend during installation. If this option is not set, Magento uses the first 12 bits of the md5 hash of the absolute path to the Magento `app/etc` directory. But if this value is not exactly the same on all web servers, cache invalidation will not work.  *Fix submitted by Fabian Schmengler in pull request [18641](https://github.com/magento/magento2/pull/18641)*. [GitHub-15828](https://github.com/magento/magento2/issues/15828)

<!--- ENGCOM-3059 -->

*  The `./bin/magento config:show` command no longer fails with a fatal error after you run `./bin/magento app:config:dump`. *Fix submitted by Pratik Oza in pull request [18295](https://github.com/magento/magento2/pull/18295)*. [GitHub-17582](https://github.com/magento/magento2/issues/17582)

<!--- MAGETWO-96428 -->

*  The `bin/magento app:config:dump` command now disables all input fields as expected.

<!--- ENGCOM-3280 -->

*  Administrators  that have been assigned a backup module role resource can now access the backup controller as expected. *Fix submitted by Mahesh Singh in pull request [18816](https://github.com/magento/magento2/pull/18816)*. [GitHub-18150](https://github.com/magento/magento2/issues/18150)

<!--- ENGCOM-3160 -->

*  The `getHostUrl()` method has been updated to reference `HTTP_HOST` rather than `SERVER_PORT`. *Fix submitted by Logan Stellway in pull request [18393](https://github.com/magento/magento2/pull/18393)*. [GitHub-18131](https://github.com/magento/magento2/issues/18131)

<!--- MAGETWO-96107 -->

*  Magento no longer displays an extraneous blank option in the country drop-down menu.

<!--- MAGETWO-91764 -->

*  Excessive timeouts no longer result from the discrepancy between storefront and Admin uses of HTTPS. The storefront now  uses HTTPS exclusively while the Admin uses HTTP.

<!--- ENGCOM-3786 -->

*  The `config:set --lock-config` command  now acts as expected on all scopes. Previously, after this command was run, administrators were not able to change the configuration for the default store, but could still change it for other scopes. *Fix submitted by Mahesh Singh in pull request [19880](https://github.com/magento/magento2/pull/19880)*. [GitHub-19609](https://github.com/magento/magento2/issues/19609)

<!--- ENGCOM-3701 -->

*  Magento now skips disabled modules  when compiling static content. *Fix submitted by Shikha Mishra in pull request [19751](https://github.com/magento/magento2/pull/19751)*. [GitHub-19605](https://github.com/magento/magento2/issues/19605)

<!--- MC-5620 -->

*  The `bin/magento setup:upgrade --convert-old-scripts=1` command now supports the conversion of indexes and constraints.

<!--- MC-1364-->

*  The **Allow Dynamic Media URLs in Products and Categories** configuration setting, which was previously accessed from **Stores** > **Configuration** > **Catalog** > **Storefront**, has been removed. The **Use Static URLs for Media Content in WYSIWYG** setting (**Stores** > **Configuration** > **General** > **Content management** > **WYSIWYG Options**) now applies to any media URLs that are entered through the WYSIWYG editor.

### AdminGWS

<!--- MAGETWO-91617 -->

*  Magento now updates the reports table as expected when a new administrator with restricted privileges logs in and selects **Report** > **Products** > **Ordered**. Previously, Magento did not generate this report, and logged an error in `var/log/system.log`.

### Amazon Pay

<!--- BUNDLE-1762 -->

*  Fixed a bug where the Magento order ID was not always correctly represented in Amazon Pay order details.

### Analytics

<!--- ENGCOM-3263  -->

*  You can now save configuration settings from the **Admin**  > **Stores** > **Configuration** > **General** > **Advanced Reporting** without providing an industry value. Previously, Magento did not save configuration settings, and displayed this error:  `Please select a vertical.` *Fix submitted by Pratik Oza in pull request [18782](https://github.com/magento/magento2/pull/18782)*. [GitHub-15259](https://github.com/magento/magento2/issues/15259)

### Authorization

<!--- MAGETWO-95536 -->

*  You can now successfully save a role from the Admin. Previously, when you saved a role from the Admin, Magento removed all  users from the role (no matter which checkbox was checked), and displayed this message: `This user has no tokens`.

### Backend

<!--- ENGCOM-3655 -->

*  `CustomerRepository::getList()` now loads custom attributes that are named `company`. *Fix submitted by Tegan Elizabeth Bold in pull request [19620](https://github.com/magento/magento2/pull/19620)*. [GitHub-17759](https://github.com/magento/magento2/issues/17759)

<!--- ENGCOM-3561 -->

*  Fixed icon behavior on the product customization page. *Fix submitted by Kajal Solanki in pull request [19405](https://github.com/magento/magento2/pull/19405)*. [GitHub-19399](https://github.com/magento/magento2/issues/19399)

<!--- ENGCOM-4054 -->

*  The **Reload Data** button on the Admin now works as expected. *Fix submitted by Eduard Chitora in pull request [20803](https://github.com/magento/magento2/pull/20803)*. [GitHub-20802](https://github.com/magento/magento2/issues/20802)

### Bundle

<!--- ENGCOM-3361  -->

*  Bundle special prices are now correctly rounded when you load and re-save a bundle product. Previously, when you reloaded a bundle with a special price that required four positions after the decimal (for example, 78,9473), Magento rounded the price to two decimal places. *Fix submitted by p-bystritsky in pull request [18987](https://github.com/magento/magento2/pull/18987)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)

<!--- ENGCOM-3391  -->

*  The Bundle Product Option Repository Delete method now removes the correct option. Previously, it removed the first option, regardless of the `optionId` that was specified. *Fix submitted by Burlacu Vasilii in pull request [19027](https://github.com/magento/magento2/pull/19027)*. [GitHub-18979](https://github.com/magento/magento2/issues/18979)

<!--- ENGCOM-3161 MAGETWO-69959  -->

*  Magento no longer overwrites user-defined option quantities with default values when a customer edits a bundle product from a shopping cart. *Fix submitted by Vishal Gelani in pull request [18520](https://github.com/magento/magento2/pull/18520)*. [GitHub-4942](https://github.com/magento/magento2/issues/4942)

<!--- MAGETWO-58212 -->

*  You can now successfully change the attribute set for a bundle product. Previously, the edit bundle page hung, and Magento threw this error: `Uncaught TypeError: Cannot read property 'length' of undefined`. [GitHub-5999](https://github.com/magento/magento2/issues/5999)

<!--- MAGETWO-91628 -->

*  Magento now maintains the correct base price for a bundle product when you add a bundle product in one currency and then add the same bundle product option in a different currency. Previously, when you added the same bundle product option in a different currency, Magento doubled the base price.

<!--- MAGETWO-91679 -->

*  Bundle product SKUs are now built based on the order of the options set in the bundle product.  Previously, SKUs were built based on the order of the selected product ID numbers in ascending order. [GitHub-14262](https://github.com/magento/magento2/issues/14262)

<!--- ENGCOM-3487 3585 -->

*  Magento now adds all selected values to the cart when a customer adds a bundle product option using an input type checkbox. Previously, if a bundle product had three values, Magento added only two options to the cart. *Fix submitted by Mahesh Singh in pull request [19261](https://github.com/magento/magento2/pull/19261) and pull request [19437](https://github.com/magento/magento2/pull/19437)*. [GitHub-19205](https://github.com/magento/magento2/issues/19205)

<!--- ENGCOM-3605 -->

*  Fixed inconsistently sized title box border on the edit bundle product page when adding an item to a bundle product from the Admin. *Fix submitted by Abrar Pathan in pull request [19510](https://github.com/magento/magento2/pull/19510)*. [GitHub-19509](https://github.com/magento/magento2/issues/19509)

<!--- MAGETWO-97617 -->

*  You can now add a bundle product to a requisition list from the category page. Previously, Magento threw this error: `PHP Fatal error: Uncaught Error: Call to a member function getParentProductId() on string in app/code/Magento/RequisitionList/Model/RequisitionListItem/Options/Builder.php:118`.

### B2B

<!--- MAGETWO-91614 -->

*  You can now filter customers by status. Previously, Magento threw an SQL ERROR when you clicked on **Apply Filters** after setting the filter to status.

<!--- MAGETWO-91754 -->

*  Magento now loads the company profile, roles, and permissions information for a company account when **Enable Reward Points Functionality** is set to **no** in the Admin and you flush cache storage.

<!--- MAGETWO-94866 -->

*  Magento now displays products that merchants have added to the public catalog through **Product** > **Edit page** > **Shared Catalog**. Previously, these items appeared if added  through **Catalog** > **Shared Catalog**, but not through **Product** > **Edit page** > **Shared Catalog**.

<!--- MAGETWO-91661 -->

*  Menus now close as expected from the Quick Order page in mobile view.

<!--- MAGETWO-94887 -->

*  Magento no longer displays a duplicate **Add product** button when you change currency from the Order currency drop-down menu while creating an order from the Admin.

<!--- MAGETWO-96598 -->

*  Merchants can now add a product to the default public catalog,  and the product can be accessed by the product URL on the storefront. Previously, Magento did not add the product to the shared catalog and instead displayed this error: `Requested categories don't exist`.

<!--- MAGETWO-97314 -->

*  Magento now displays custom prices in quotes, the shopping cart, and during checkout. Previously, when you moved a product with a custom price to the shopping cart from the Admin, the custom price was lost, and Magento did not display it in the shopping cart.

<!--- MAGETWO-97131 -->

*  A logged-in user can now log out, log in as a guest, and then check out when persistent cart is enabled. Previously, under these circumstances, the customer logged in as guest could not check out, and Magento displayed this error, `No such entity with cartId = null`.

<!--- MAGETWO-97315 -->

*  Magento now correctly displays pricing for configurable products when permissions are set to prevent adding products to cart from a category.

### CAPTCHA

<!--- MAGETWO-94052 -->

*  CAPTCHA now appears as expected in the Log in pop-up window.

### Cart and checkout

<!--- ENGCOM-3194  -->

*  Magento now displays a product's special price on the storefront, product listings, and product detail page as expected when the special price is 0.00. Previously, Magento displayed the regular price, but used the special price for sorting and quote calculations. *Fix submitted by Mahesh Singh in pull request [18631](https://github.com/magento/magento2/pull/18631)*. [GitHub-18268](https://github.com/magento/magento2/issues/18268)

<!--- ENGCOM-3237  -->

*  Custom shipping methods in custom carrier code can now include underscores. *Fix submitted by Jakub in pull request [18689](https://github.com/magento/magento2/pull/18689)*. [GitHub-5021](https://github.com/magento/magento2/issues/5021)

<!--- ENGCOM-3073  -->

*  Magento no longer displays the infinite loading indicator when an error occurs during check out. *Fix submitted by Ihor Sviziev in pull request [18331](https://github.com/magento/magento2/pull/18331)*. [GitHub-18330](https://github.com/magento/magento2/issues/18330)

<!--- ENGCOM-3189  -->

*  The **Clear shopping cart** button now works as expected. Previously, the page reloaded, but the shopping cart was not cleared. *Fix submitted by Luuk Schakenraad in pull request [18596](https://github.com/magento/magento2/pull/18596)*. [GitHub-18475](https://github.com/magento/magento2/issues/18475), [GitHub-18589](https://github.com/magento/magento2/issues/18589)

<!--- ENGCOM-2987  -->

*  Magento now dispatches a `checkout_cart_product_add_before` event in addition to a `checkout_cart_product_add_after` event. *Fix submitted by Leandro Rosa in pull request [18080](https://github.com/magento/magento2/pull/18080)*. [GitHub-17830](https://github.com/magento/magento2/issues/17830)

<!--- MAGETWO-95935 -->

*  Customer address attribute validation during checkout now permits spaces.

<!--- MAGETWO-96812 -->

*  Clicking multiple times on the mini cart icon no longer logs out the current customer. Previously, when a logged-in customer added a product to the cart and then clicked the shopping cart icon multiple times, Magento displayed an empty shopping cart and logged out the customer.

<!--- MAGETWO-95848 -->

*  Customers can now configure options for a configurable product after adding it to their shopping cart.  Previously, under these circumstances, Magento threw a fatal error.

<!--- MAGETWO-95739 -->

*  Magento now validates zip codes for new addresses as expected when the **My billing and shipping address are the same** option is unchecked.

<!--- MAGETWO-94427 -->

*  Magento now updates the mini cart as expected when an administrator updates the product from the Admin. Previously, if a product that had been added to the shopping cart was subsequently disabled from the Admin,  the product was still displayed in the cart.

<!--- MAGETWO-91658 -->

*  Magento now uses the configured default sort order  during checkout to calculate totals. Previously, Magento ignored the configured order and used **Sub Total** > **Shipping** > **Discount** > **Tax** > **Grand Total** to calculate order totals.

<!--- MAGETWO-91530 -->

*  Magento now displays informative error messages when an order paid for with Authorize.Net fails.

<!--- MAGETWO-71375 -->

*  Magento now displays the correct status for orders with zero subtotals. Previously, new order status appeared as pending when it was processing.

<!--- MAGETWO-91730 -->

*  Expired gift cards are no longer applied to a customer's account. Previously, if a gift card applied to a customer account expired, Magento could not complete the checkout process.

<!--- MAGETWO-91517 -->

*  Magento no longer removes the billing and shipping address information for an order when a customer cancels the order by clicking **Cancel and Return** when  using PayPal Website Payments Pro Hosted Solution. Previously, when a customer placed an order and then clicked the **Cancel and Return** link, Magento removed the billing/shipping address and displayed an error.

<!--- MAGETWO-91596 -->

*  You can now update the quantity of grouped products  if the quantity field was left empty when initially added to an Admin order by SKU. Previously, under these circumstances, you could not update the quantity.

<!--- MAGETWO-91733 -->

*  After a session expires, and a customer refreshes the page, Magento displays an empty shopping cart and logs out the customer as expected. Previously, Magento displayed an empty shopping cart but the mini cart still displayed the selected items, and if the customer refreshed the page again, the shopping cart displayed the items.

<!--- MAGETWO-91636 -->

*  Tooltips that are available from the checkout page on mobile devices are now displayed properly. Previously, customers had to scroll to access the tooltip.

<!--- ENGCOM-3578 -->

*  `\Magento\Checkout\Observer\SalesQuoteSaveAfterObserver` now updates the checkout session quote ID as needed. *Fix submitted by Dmytro Cheshun in pull request [19425](https://github.com/magento/magento2/pull/19425)*. [GitHub-19424](https://github.com/magento/magento2/issues/19424)

<!--- ENGCOM-3386 -->

*  Magento now validates the shipping address of a logged-in user using the default shipping address during checkout. *Fix submitted by StasKozar in pull request [19038](https://github.com/magento/magento2/pull/19038)*. [GitHub-18990](https://github.com/magento/magento2/issues/18990)

<!--- ENGCOM-3971 -->

*  Fixed issue displaying numbers that exceed two digits in the **Qty:** box of the **Proceed to Checkout** pop up. *Fix submitted by Parag Chavare in pull request [20612](https://github.com/magento/magento2/pull/20612)*. [GitHub-20611](https://github.com/magento/magento2/issues/20611)

<!--- ENGCOM-3864 -->

*  Added a missing space between the title of the workflow step and the saved address on the first page of the checkout process. *Fix submitted by Arvinda Kumar in pull request [20306](https://github.com/magento/magento2/pull/20306)*. [GitHub-20304](https://github.com/magento/magento2/issues/20304)

<!--- ENGCOM-4019 -->

*  Magento no longer throws a console error during a guest checkout when the list of allowed countries is changed from the Admin. *Fix submitted by Govind Sharma in pull request [20634](https://github.com/magento/magento2/pull/20634)*. [GitHub-20631](https://github.com/magento/magento2/issues/20631)

<!--- ENGCOM-4032 -->

*  The title of the shipping method no longer overlaps with **Edit** on the checkout page. *Fix submitted by Yashwant Rokde in pull request [20428](https://github.com/magento/magento2/pull/20428)*. [GitHub-20427](https://github.com/magento/magento2/issues/20427)

<!--- ENGCOM-3984 -->

*  The **Close** button on the mini cart no longer overlaps with the shipping section when the checkout page is opened on a mobile device. *Fix submitted by Pratik Oza in pull request [20615](https://github.com/magento/magento2/pull/20615)*. [GitHub-20614](https://github.com/magento/magento2/issues/20614)

<!--- ENGCOM-3818 -->

*  Fixed the alignment of the **Apply discount** button  on the checkout page. *Fix submitted by Arvinda Kumar in pull request [20144](https://github.com/magento/magento2/pull/20144)*. [GitHub-20137](https://github.com/magento/magento2/issues/20137)

<!--- MAGETWO-95312 -->

*  Fixed mini cart layout issues.

<!--- MAGETWO-97968 -->

*  The mini cart is now updated as expected when a product in the cart is disabled.

<!--- ENGCOM-3938  -->

*  Fixed problems with the display of the tooltip drop-down pointer on the checkout page in tablet view. *Fix submitted by ranee2jcommerce in pull request [20488](https://github.com/magento/magento2/pull/20488)*. [GitHub-20487](https://github.com/magento/magento2/issues/20487)

<!--- ENGCOM-3153  -->

*  Magento no longer displays a console error when a customer selects one-step checkout. Previously, Magento displayed this JavaScript error: `Cannot read property 'code' of undefined`. *Fix submitted by Ihor Sviziev in pull request [18494](https://github.com/magento/magento2/pull/18494)*. [GitHub-18164](https://github.com/magento/magento2/issues/18164)

<!--- MAGETWO-95939  -->

*  Administrators with appropriate permissions can now manage customer shopping carts from the Admin. Previously, when an administrator clicked **Manage Shopping Cart** from **Admin** > **Customers** > **Customer**, Magento threw an error.

### Cart Price rules

<!--- MAGETWO-96379  -->

*  The Cart Price Rule page now displays correct counter values for the grid as well as accurate pagination.

<!--- MAGETWO-91784 -->

*  Magento no longer permits you to use the up and down arrow keys to enter negative numbers when entering a credit card number on the payment information page during checkout.

### Catalog

<!--- ENGCOM-3516  -->

*  Magento now displays the product page with this message `You need to choose options for your item` when you click **Add to cart** for a new product that has an attribute with the **Use in product listing** property set to **Yes**. Previously, Magento redirected the user to the cart page, and did not add the product to the cart. *Fix submitted by Vishal Gelani in pull request [19322](https://github.com/magento/magento2/pull/19322)*. [GitHub-19315](https://github.com/magento/magento2/issues/19315)

<!--- ENGCOM-3435  -->

*  Magento now directs the user to a 404 page when accessing http://www.domain.com/catalog/product/compare. Previously, Magento threw this error, `Fatal error: Uncaught Error: Cannot call abstract method Magento\Framework\App\ActionInterface::execute()`. *Fix submitted by p-bystritsky in pull request [18987](https://github.com/magento/magento2/pull/18987)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)

<!--- ENGCOM-3450  -->

*  Magento now correctly calculates fixed tier price discount for products with special prices. *Fix submitted by Torben Höhn in pull request [19179](https://github.com/magento/magento2/pull/19179)*. [GitHub-18652](https://github.com/magento/magento2/issues/18652)

<!--- ENGCOM-3421 -->

*  Magento no longer throws an exception when you try to add an image to a product programmatically. *Fix submitted by Yevhenii Dumskyi in pull request [18952](https://github.com/magento/magento2/pull/18952)*. [GitHub-6803](https://github.com/magento/magento2/issues/6803)

<!--- ENGCOM-3365 -->

*  Magento now applies the translations for the selected theme when you enable a custom design theme. Previously, Magento collected the translation files for the active main theme only, which limited the use of different translations within the additional theme. *Fix submitted by Cezary Zeglen in pull request [18998](https://github.com/magento/magento2/pull/18998)*. [GitHub-17625](https://github.com/magento/magento2/issues/17625)

<!--- ENGCOM-3292 -->

*  The `bin/magento catalog:images:resize` command now processes all specified images. *Fix submitted by Vladyslav Podorozhnyi in pull request [18807](https://github.com/magento/magento2/pull/18807)*. [GitHub-18387](https://github.com/magento/magento2/issues/18387)

<!--- ENGCOM-3184 -->

*  You can now create a new product with a special price. Previously, when you saved the newly created product, Magento threw this error: `Special price date from" Failed to parse time string`. *Fix submitted by Hiren Pandya in pull request [18578](https://github.com/magento/magento2/pull/18578)*. [GitHub-18158](https://github.com/magento/magento2/issues/18158)

<!--- ENGCOM-3242 -->

*  You can now insert multiple catalog product list widgets into a CMS page. *Fix submitted by Burlacu Vasilii in pull request [18714](https://github.com/magento/magento2/pull/18714)*. [GitHub-4468](https://github.com/magento/magento2/issues/4468)

<!--- ENGCOM-3202 -->

*  You can now use REST to add a new attribute and configure it with settings such as `is_filterable`. *Fix submitted by Mr. Lewis in pull request [18622](https://github.com/magento/magento2/pull/18622)*. [GitHub-10205](https://github.com/magento/magento2/issues/10205)

<!--- ENGCOM-2998 -->

*  Magento now provides a white-space trimming function for SKUs on the Admin. *Fix submitted by Bartosz Kubicki in pull request [18019](https://github.com/magento/magento2/pull/18019)*. [GitHub-16572](https://github.com/magento/magento2/issues/16572), [GitHub-12300](https://github.com/magento/magento2/issues/12300)

<!--- ENGCOM-3180 -->

*  Magento no longer changes the attribute type of `backend_type` from `varchar` to `int` when the product associated with the attribute is saved or updated in the Admin. *Fix submitted by Vishal Gelani in pull request [18570](https://github.com/magento/magento2/pull/18570)*. [GitHub-9219](https://github.com/magento/magento2/issues/9219)

<!--- ENGCOM-3142 -->

*  The table rate shipping method no longer fails to return a quote when a customer uses a United States  postal code in the form of *five-digit zip - four-digit* extension (for example, 44444-1234). *Fix submitted by Vishal Gelani in pull request [18499](https://github.com/magento/magento2/pull/18499)*. [GitHub-17770](https://github.com/magento/magento2/issues/17770)

<!--- ENGCOM-3129 -->

*  You can now set a Boolean attribute to `is_filterable`, which allows these attributes to be included in layered navigation. *Fix submitted by Mr. Lewis in pull request [18434](https://github.com/magento/magento2/pull/18434)*. [GitHub-3283](https://github.com/magento/magento2/issues/3283)

<!--- ENGCOM-3047 -->

*  `getStoreId()` now consistently returns `int`. Previously, Magento returned `string` for products but `int` for categories, which resulted in a fatal error. Fix submitted by sv3n in pull request [18303](https://github.com/magento/magento2/pull/18303)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)

<!--- ENGCOM-3055 -->

*  `\Magento\Catalog\Model\Product::getQty()` now consistently returns float/double. *Fix submitted by Jay Ghosh in pull request [18149](https://github.com/magento/magento2/pull/18149)*. [GitHub-18094](https://github.com/magento/magento2/issues/18094)

<!--- ENGCOM-3035 -->

*  Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by Pieter Hoste in pull request [18207](https://github.com/magento/magento2/pull/18207)*. [GitHub-13720](https://github.com/magento/magento2/issues/13720)

<!--- ENGCOM-3034 -->

*  The `bin/magento module:uninstall` command  now works as expected with Composer. Previously, there was a discrepancy between `composer.lock` and `composer.json` when this command was used to remove a module. *Fix submitted by Pratik Oza in pull request [18205](https://github.com/magento/magento2/pull/18205)*. [GitHub-17780](https://github.com/magento/magento2/issues/17780)

<!--- ENGCOM-3061 -->

*  `getStoreId()` now consistently returns `int`. *Fix submitted by sv3n in pull request [18303](https://github.com/magento/magento2/pull/18303)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)

<!--- ENGCOM-3078 -->

*  You can now save a product on deployments in single-store mode when the default website has been removed and a new website has been added. *Fix submitted by Eduard Chitoraga in pull request [18210](https://github.com/magento/magento2/pull/18210)*. [GitHub-13405](https://github.com/magento/magento2/issues/13405)

<!--- MAGETWO-96908 -->

*  Attribute values are now updated as expected in the `catalog_product_flat_2` table.

<!--- MAGETWO-95802 -->

*  Dates in the Admin are now formatted correctly for French locales (dd/mm/yyyy).

<!--- MAGETWO-94556 -->

*  Magento now saves and properly indexes a configurable product variant that contains a longer-than-permitted SKU. Previously, when you tried to save this product, Magento threw an error. [GitHub-17436](https://github.com/magento/magento2/issues/17436)

<!--- MAGETWO-95428 -->

*  The product page's Recently Viewed section no longer displays the name of the current product.

<!--- MAGETWO-91837 -->

*  You can now use REST to update a product's media gallery.

<!--- MAGETWO-95818 -->

*  Magento now saves default values for category URL paths in accordance with the **Use Default Value**  and **Create a Permanent Redirect** settings. Previously, in deployments running multiple stores, if a category's URL key was changed and saved, Magento did not change the category's URL key back to the default URL key when saved with the **Use Default Value** box checked and **Create a Permanent Redirect** box unchecked.

<!--- MAGETWO-95826 -->

*  Magnifier now correctly handles zoomed sections of images when the image width/height ratio has a `~2x` difference. Previously, these sections were distorted.

<!--- MAGETWO-61478 -->

*  Magento now retains across categories any value you set for the number of categories displayed per page.

<!--- MAGETWO-95753 -->

*  You can now save products with at least one tier price.

<!--- MAGETWO-66442 -->

*  Changes to product images made under the All Stores scope now affect product images at the store-view level.

<!--- MAGETWO-96290 -->

*  You can now use REST to update category positions.

<!--- MAGETWO-91609 -->

*  Magento now correctly displays the greater than operator (>) when you configure the catalog products list widget for a CMS block.

<!--- MAGETWO-70303 -->

*  Categories that are set to anchor **Yes** and that have disabled subcategories no longer display  products from those disabled subcategories. [GitHub-9002](https://github.com/magento/magento2/issues/9002)

<!--- MAGETWO-91633 -->

*  You can sort a grouped product's associated products across multiple pages. Previously, when you tried to sort associated products, Magento sorted only the products visible on the current page.

<!--- ENGCOM-3281 -->

*  Magento now uses the correct column type when creating temporary tables for a flat catalog. *Fix submitted by Jason Evans in pull request [18818](https://github.com/magento/magento2/pull/18818)*. [GitHub-14571](https://github.com/magento/magento2/issues/14571)

<!--- ENGCOM-3566 -->

*  Attribute indexing no longer ignores custom source model options. *Fix submitted by Joel Rainwater in pull request [19176](https://github.com/magento/magento2/pull/19176)*. [GitHub-417](https://github.com/magento/magento2/issues/417)

<!--- ENGCOM-3597 -->

*  Magento now correctly imports  `product_type` drop-down attributes. Previously, Magento displayed an error message indicating that values for these attributes were incorrect during import.  *Fix submitted by Govind Sharma in pull request [19408](https://github.com/magento/magento2/pull/19408)*. [GitHub-19346](https://github.com/magento/magento2/issues/19346)

<!--- ENGCOM-3592 -->

*  Magento now correctly handles attribute options that begin with zero. Previously, these attribute options  did not work if an option with the same number but lacking the zero already existed. *Fix submitted by SikailoISM in pull request [19451](https://github.com/magento/magento2/pull/19451)*. [GitHub-19436](https://github.com/magento/magento2/issues/19436)

<!--- ENGCOM-3641 -->

*  You can now successfully delete a newly created attribute set. Previously, Magento displayed a 404 error under these circumstances. *Fix submitted by cedcommerce in pull request [19633](https://github.com/magento/magento2/pull/19633)*. [GitHub-19607](https://github.com/magento/magento2/issues/19607)

<!--- ENGCOM-3399 -->

*  You can now use add extension attributes to add category links to a product. Previously, Magento did not add the product links, but behaved unpredictably. *Fix submitted by Giel Berkers in pull request [19080](https://github.com/magento/magento2/pull/19080)*. [GitHub-14861](https://github.com/magento/magento2/issues/14861)

<!--- ENGCOM-3673 -->

*  When a new customer is created, Magento sets a value of zero for any custom attribute if no other value is explicitly provided. Previously, if no value was explicitly assigned, Magento did not save the custom attribute with any value. *Fix submitted by Malyovanets Nickolas in pull request [19341](https://github.com/magento/magento2/pull/19341)*. [GitHub-14510](https://github.com/magento/magento2/issues/14510)

<!--- ENGCOM-3780 -->

*  `CategoryLinkReposity` now lists all possible exceptions. *Fix submitted by Patrick McLain in pull request [20050](https://github.com/magento/magento2/pull/20050)*. [GitHub-20037](https://github.com/magento/magento2/issues/20037)

<!--- ENGCOM-1862 -->

*  Merchants can now assign negative values to the custom option for a product with a fixed price from the Admin. *Fix submitted by Danny Verkade in pull request [15267](https://github.com/magento/magento2/pull/15267)*. [GitHub-7333](https://github.com/magento/magento2/issues/7333)

<!--- ENGCOM-3618 -->

*  Newly added fields are now sorted according to the given `sortOrder` value in the newsletter system configuration file. Previously, you could add a new field, but could not successfully set its position. *Fix submitted by Burlacu Vasilii in pull request [19568](https://github.com/magento/magento2/pull/19568)*. [GitHub-19418](https://github.com/magento/magento2/issues/19418)

<!--- ENGCOM-3430 -->

*  Merchants can now change the position of tabs on a product page. *Fix submitted by Burlacu Vasilii in pull request [19007](https://github.com/magento/magento2/pull/19007)*. [GitHub-4154](https://github.com/magento/magento2/issues/4154)

<!--- ENGCOM-3758 -->

*  An incorrect variable in the phpDoc for `DataBuilder.php` has been corrected. *Fix submitted by Kunj joshi in pull request [19992](https://github.com/magento/magento2/pull/19992)*. [GitHub-19974](https://github.com/magento/magento2/issues/19974)

<!--- ENGCOM-3599 -->

*  You can now perform a mass  update  on product attributes after configuring the minimum cart quantity globally. Previously, Magento did not display the form to update all available attributes but threw an `E_WARNING:` error when you selected **Update attributes**. *Fix submitted by Patrick McLain in pull request [19095](https://github.com/magento/magento2/pull/19095)*. [GitHub-17592](https://github.com/magento/magento2/issues/17592)

<!--- ENGCOM-3946 -->

*  The product compare page now loads as expected when unconfigured attributes display **N/A** or **No**. *Fix submitted by Vivek Kumar in pull request [20231](https://github.com/magento/magento2/pull/20231)*. [GitHub-20229](https://github.com/magento/magento2/issues/20229)

<!--- ENGCOM-3913 -->

*  Magento now correctly sorts configurable products with tier prices or swatches on both the storefront and Admin. Previously, storefront sorting did not match Admin sorting. *Fix submitted by vshatylo in pull request [20407](https://github.com/magento/magento2/pull/20407)*. [GitHub-12194](https://github.com/magento/magento2/issues/12194)

<!--- MAGETWO-97625 -->

*  Magento now correctly duplicates video files when a merchant duplicates a product with an associated video. Previously, the video was duplicated as an image, not a video, and the merchant had to delete the image and re-add the video using **Add Video**.

<!--- MAGETWO-97210  -->

*  Magento no longer hangs when you add a product by SKU to a large category (100,000 or more products).

<!--- ENGCOM-3029 -->

*  We've improved the error message that Magento displays when validating a new (but invalid) product attribute. *Fix submitted by saravananvelu in pull request [17806](https://github.com/magento/magento2/pull/17806)*. [GitHub-17754](https://github.com/magento/magento2/issues/17754)

<!--- ENGCOM-3476 -->

*  `getProductUrl` no longer returns the wrong URL when the current category has no products. *Fix submitted by Erik Pellikka in pull request [19232](https://github.com/magento/magento2/pull/19232)*. [GitHub-17819](https://github.com/magento/magento2/issues/17819)

<!--- ENGCOM-3448 -->

*  The user agent exception now sets the correct templates for product pages. Previously, the `footer.phtml` and `absolute_footer.phtml` templates were loaded from the desktop theme instead of the mobile theme regardless of the user agent. *Fix submitted by Alex Ghiban in pull request [19124](https://github.com/magento/magento2/pull/19124)*. [GitHub-16074](https://github.com/magento/magento2/issues/16074)

<!--- ENGCOM-4093 -->

*  Magento now displays currency symbols as expected for products in the Cost column of the Admin catalog list.  *Fix submitted by Pratik Oza in pull request [20907](https://github.com/magento/magento2/pull/20907)*. [GitHub-20906](https://github.com/magento/magento2/issues/20906)

<!--- ENGCOM-3698 -->

*  Magento now displays breadcrumbs in proper format. Previously, subcategories did not appear in breadcrumbs. *Fix submitted by Brandon Brown in pull request [19781](https://github.com/magento/magento2/pull/19781)*. [GitHub-7967](https://github.com/magento/magento2/issues/7967)

### CatalogInventory

<!--- ENGCOM-3138 -->

*  Magento now validates the quantity of items in the shopping cart against the **Maximum Qty Allowed in Shopping Cart** setting. *Fix submitted by Vishal Gelani in pull request [18481](https://github.com/magento/magento2/pull/18481)*. [GitHub-18477](https://github.com/magento/magento2/issues/18477)

<!--- ENGCOM-3845 -->

*  Magento now correctly applies the **Set Items' Status to be In Stock When Order is Cancelled** attribute setting. Previously, after an order was canceled, Magento increased product stock even when **Set Items' Status to be In Stock When Order is Cancelled** was set to **no**. *Fix submitted by Shikha Mishra in pull request [20252](https://github.com/magento/magento2/pull/20252)*. [GitHub-20121](https://github.com/magento/magento2/issues/20121)

<!--- ENGCOM-3915 -->

*  Removed unnecessary slash from `app/code/Magento/CatalogInventory/etc/di.xml`. This extraneous slash had previously resulted in `Magento\Catalog\Api\ProductRenderListInterface` returning products regardless of visibility. *Fix submitted by Milind Singh in pull request [20410](https://github.com/magento/magento2/pull/20410)*. [GitHub-20409](https://github.com/magento/magento2/issues/20409)

<!--- ENGCOM-3462 -->

*  Magento no longer displays a negative value on the product list page when a product's stock falls below the product's `OutOfStock` threshold value. *Fix submitted by Khodu in pull request [19206](https://github.com/magento/magento2/pull/19206)*. [GitHub-9130](https://github.com/magento/magento2/issues/9130)

<!--- ENGCOM-3771 -->

*  Magento no longer increments stock for products for which stock managing has been disabled. Previously, Magento increased the product quantity count when an order failed if **Manage Stock** was disabled. *Fix submitted by Oleksii Gorbulin in pull request [19997](https://github.com/magento/magento2/pull/19997)*. [GitHub-19482](https://github.com/magento/magento2/issues/19482)

<!--- MAGETWO-96377 -->

*  In a multi-website instance, with a category that contains products belonging to different websites, when the product sort order in a category is changed at the store-view level, the products that belong to a different website gets unassigned from the category.

### Catalog Rule

<!--- ENGCOM-3131 -->

*  Magento no longer throws an exception when you try to edit and save a catalog price rule when the Admin language is set to a language other than English. *Fix submitted by Martin in pull request [18419](https://github.com/magento/magento2/pull/18419)*. [GitHub-12399](https://github.com/magento/magento2/issues/12399)

<!--- ENGCOM-3143 -->

*  If you create a catalog price rule based on categories with nesting level 4 or higher, these categories now maintain the status of their checkboxes when you re-open Category Chooser. Previously, when you reopened these categories, no checkboxes were checked.

### Catalog URL rewrite

<!--- ENGCOM-3438 -->

*  Magento now regenerates product URL rewrites as expected after an administrator changes a product URL key from the Admin and subsequently saves the product attribute URL path value. Previously, product URL rewrites could not be generated after this attribute value was changed. *Fix submitted by p-bystritsky in pull request [19170](https://github.com/magento/magento2/pull/19170)*. [GitHub-18532](https://github.com/magento/magento2/issues/18532), [GitHub-5929](https://github.com/magento/magento2/issues/5929)

<!--- MAGETWO-93425 -->

*  Attempts to rewrite catalog URLs with a `POST /V1/products` endpoint now  work as expected. [GitHub-16789](https://github.com/magento/magento2/issues/16789)

<!--- MAGETWO-91649 -->

*  Magento no longer ignores the store-level `url_key` of child categories when rewriting URLs process for global scope. [GitHub-13513](https://github.com/magento/magento2/issues/13513)

<!--- MAGETWO-91532 -->

*  Magento no longer removes product tier prices when a scheduled update contains an update to the special price.

<!--- MAGETWO-91495 -->

*  You can now save and duplicate a linked product. Previously, Magento did not duplicate the product, and displayed this error: `Invalid data provided for linked products`.

<!--- ENGCOM-4050 -->

*  The store switcher now works in multistore deployments.  Previously, the switcher redirected the user to the home page, not to the alternative store view as expected. *Fix submitted by Janak Bhimani in pull request [19798](https://github.com/magento/magento2/pull/19798)*. [GitHub-19714](https://github.com/magento/magento2/issues/19714)

### Cleanup and simple code refactoring

<!--- ENGCOM-3861 -->

*  Fixed alignment of the details label on the order page in mobile view. *Fix submitted by Arvinda Kumar in pull request [20301](https://github.com/magento/magento2/pull/20301)*. [GitHub-20299](https://github.com/magento/magento2/issues/20299)

<!--- ENGCOM-3835 -->

*  Fixed rendering of the **Add your text** link on the Product page. *Fix submitted by Nainesh Waghale in pull request [20224](https://github.com/magento/magento2/pull/20224)*. [GitHub-20221](https://github.com/magento/magento2/issues/20221)

<!--- ENGCOM-3524 -->

*  Fixed misalignment of the import successful  message icon  in the Admin. *Fix submitted by Kajal Solanki in pull request [19334](https://github.com/magento/magento2/pull/19334)*. [GitHub-19328](https://github.com/magento/magento2/issues/19328)

<!--- ENGCOM-3763 -->

*  Corrected the alignment of Contact us area that is accessed from the storefront page footers. *Fix submitted by suryakant-krish in pull request [19803](https://github.com/magento/magento2/pull/19803)*. [GitHub-19800](https://github.com/magento/magento2/issues/19800)

<!--- ENGCOM-3643 -->

*  Fixed inconsistent spacing on the manage coupon codes page on the Admin. *Fix submitted by Kajal Solanki in pull request [19659](https://github.com/magento/magento2/pull/19659)*. [GitHub-19657](https://github.com/magento/magento2/issues/19657)

<!--- ENGCOM-3573 -->

*  Fixed misalignment of the tax rate checkbox on the Add New Tax Rate page. *Fix submitted by suryakant-krish in pull request [19413](https://github.com/magento/magento2/pull/19413)*. [GitHub-19379](https://github.com/magento/magento2/issues/19379)

<!--- ENGCOM-3571 -->

*  Fixed misalignment of the attribute set name heading border on the Attribute sets pop-up window. *Fix submitted by suryakant-krish in pull request [19414](https://github.com/magento/magento2/pull/19414)*. [GitHub-19371](https://github.com/magento/magento2/issues/19371)

<!--- ENGCOM-3960 -->

*  Fixed misalignment of elements on the shipping information page that Magento displays when you click **Check Out with Multiple Addresses** from the shopping cart. *Fix submitted by [Arvinda Kumar in pull request [20564](https://github.com/magento/magento2/pull/20564)*. [GitHub-20563](https://github.com/magento/magento2/issues/20563)

<!--- ENGCOM-3626 -->

*  Fixed misalignment of the **Choose file** button on the `Select File to Import` page. *Fix submitted by suryakant in pull request [19580](https://github.com/magento/magento2/pull/19580)*. [GitHub-19579](https://github.com/magento/magento2/issues/19579)

<!--- ENGCOM-3320 -->

*  Fixed formatting of the add link table that can be accessed from the Downloadable Information tab. *Fix submitted by Kajal Solanki in pull request [18856](https://github.com/magento/magento2/pull/18856)*. [GitHub-18854](https://github.com/magento/magento2/issues/18854)

<!--- ENGCOM-3951 -->

*  Fixed misalignment of the title of the order page that is accessed when you check a recent order in the sidebar of listing  or account pages. *Fix submitted by Parag Chavare in pull request [20501](https://github.com/magento/magento2/pull/20501)*. [GitHub-20500](https://github.com/magento/magento2/issues/20500)

<!--- ENGCOM-4031 -->

*  Fixed misalignment of  tab content on product pages in mobile view. *Fix submitted by Parag Chavare in pull request [20469](https://github.com/magento/magento2/pull/20469)*. [GitHub-20468](https://github.com/magento/magento2/issues/20468)

<!--- ENGCOM-3727 -->

*  Corrected misspelled argument name `allowDrug` to `allowDrag` in `vendor/magento/module-catalog/view/adminhtml/templates/catalog/product/attribute/set/main.phtml`. *Fix submitted by Govind Sharma in pull request [19918](https://github.com/magento/magento2/pull/19918)*. [GitHub-19917](https://github.com/magento/magento2/issues/19917)

<!--- ENGCOM-3659 -->

*  Fixed the misalignment of the customizable options label on **Admin** > **Catalog** > **Product** > **Customizable Options**. *Fix submitted by Kajal Solanki in pull request [19493](https://github.com/magento/magento2/pull/19493)*. [GitHub-19492](https://github.com/magento/magento2/issues/19492)

<!--- ENGCOM-3706 -->

*  Fixed problem with overlapping UI elements on the cart page when accessed from the mini cart. *Fix submitted by Vishal Gelani in pull request [19839](https://github.com/magento/magento2/pull/19839)*. [GitHub-19836](https://github.com/magento/magento2/issues/19836)

<!--- ENGCOM-3721 -->

*  Fixed alignment issue with the drop-down menu on the mini cart. *Fix submitted by Kajal Solanki in pull request [19508](https://github.com/magento/magento2/pull/19508)*. [GitHub-19507](https://github.com/magento/magento2/issues/19507)

<!--- ENGCOM-3769 -->

*  Fixed alignment issue with radio buttons on the shopping cart page. *Fix submitted by Hitesh in pull request [20022](https://github.com/magento/magento2/pull/20022)*. [GitHub-20021](https://github.com/magento/magento2/issues/20021)

<!--- ENGCOM-3948 -->

*  Fixed alignment of the bundle product radio button on the product page when you click **Customize** and **Add to cart**. *Fix submitted by Parag Chavare in pull request [20519](https://github.com/magento/magento2/pull/20519)*. [GitHub-20518](https://github.com/magento/magento2/issues/20518)

<!--- ENGCOM-3621 -->

*  Fixed alignment of the bundle product information on the configure product page for a bundle product  when creating a new order. *Fix submitted by Abrar Pathan in pull request [19502](https://github.com/magento/magento2/pull/19502)*. [GitHub-19501](https://github.com/magento/magento2/issues/19501)

<!--- ENGCOM-3196  -->

*  The calender icon issue is now correctly aligned on the Advanced Pricing page of the Admin. *Fix submitted by Kajal Solanki in pull request [18638](https://github.com/magento/magento2/pull/18638)*. [GitHub-18581](https://github.com/magento/magento2/issues/18581)

<!--- ENGCOM-4029 -->

*  Fixed alignment issue of time fields in **Admin** > **Configuration** > **General** > **Advanced Reporting** in tablet landscape view. *Fix submitted by Ajay Ajabale in pull request [20581](https://github.com/magento/magento2/pull/20581)*. [GitHub-20580](https://github.com/magento/magento2/issues/20580)

<!--- ENGCOM-3966 -->

*  Fixed misalignment of the confirmation pop-up window that Magento displays in mobile view when you delete a product from your shopping cart. *Fix submitted by Priti in pull request [20196](https://github.com/magento/magento2/pull/20196)*. [GitHub-20176](https://github.com/magento/magento2/issues/20176)

<!--- ENGCOM-3449 -->

*  The `addExpressionFieldToSelect` method no longer modifies columns and instead inserts expressions into the `_fieldsToSelect` private variable (similar to how `addFieldToSelect` does). *Fix submitted by Torben Höhn in pull request [19180](https://github.com/magento/magento2/pull/19180)*. [GitHub-17635](https://github.com/magento/magento2/issues/17635)

<!--- ENGCOM-3240 -->

*  A typo in `app/code/Magento/Deploy/Console/DeployStaticOptions.php` has been corrected. *Fix submitted by Pratik Oza in pull request [18733](https://github.com/magento/magento2/pull/18733)*. [GitHub-2686](https://github.com/magento/magento2/issues/2686)

<!--- ENGCOM-3848 -->

*  Fixed alignment of options on the Admin edit widget page. *Fix submitted by Govind Sharma in pull request [20114](https://github.com/magento/magento2/pull/20114)*. [GitHub-20113](https://github.com/magento/magento2/issues/20113)

<!--- ENGCOM-3901 -->

*  Corrected rendering of the apply discount code field in the Tab portrait view of the shopping cart. *Fix submitted by Ajay Ajabale in pull request [20281](https://github.com/magento/magento2/pull/20281)*. [GitHub-20278](https://github.com/magento/magento2/issues/20278)

<!--- ENGCOM-3899 -->

*  Fixed issue where the horizontal scroll bar did not appear as expected on the compare products page in mobile view. *Fix submitted by Arvinda Kumar in pull request [20368](https://github.com/magento/magento2/pull/20368)*. [GitHub-20367](https://github.com/magento/magento2/issues/20367)

<!--- ENGCOM-3936 -->

*  Added missing bottom border to the list of customizable options on the product page when accessed from the Admin. *Fix submitted by Eduard Chitoraga in pull request [20498](https://github.com/magento/magento2/pull/20498)*. [GitHub-20497](https://github.com/magento/magento2/issues/20497)

<!--- ENGCOM-3792 -->

*  Corrected the position of the header for the design configuration table (**Content** > **Design** > **Configuration**). *Fix submitted by Shikha Mishra in pull request [20072](https://github.com/magento/magento2/pull/20072)*. [GitHub-20024](https://github.com/magento/magento2/issues/20024)

<!--- ENGCOM-3558 -->

*  When you try to save a widget that contains an unexpected character, Magento now displays an informative error message  and does not save the widget. Previously, Magento saved the widget. *Fix submitted by Burlacu Vasilii in pull request [19390](https://github.com/magento/magento2/pull/19390)*. [GitHub-4136](https://github.com/magento/magento2/issues/4136)

<!--- ENGCOM-3821 -->

*  The catalog category merchandiser product list is no longer missing the move cursor in tile view. *Fix submitted by Abrar Pathan in pull request [19817](https://github.com/magento/magento2/pull/19817)*. [GitHub-19816](https://github.com/magento/magento2/issues/19816)

<!--- ENGCOM-3815 -->

*  Corrected alignment of the **Detailed Rating** field on the Edit Review page.  *Fix submitted by Yashwant Rokde in pull request [20132](https://github.com/magento/magento2/pull/20132)*. [GitHub-20120](https://github.com/magento/magento2/issues/20120)

<!--- ENGCOM-3825 -->

*  Corrected alignment of the store switcher in Tab view. *Fix submitted by Arvinda Kumar in pull request [20160](https://github.com/magento/magento2/pull/20160)*. [GitHub-20158](https://github.com/magento/magento2/issues/20158)

<!--- ENGCOM-3820 -->

*  Corrected the number of products listed per row for  desktop (4), tablet (3),  and mobile (2) views. *Fix submitted by Amol Chaudhari in pull request [20168](https://github.com/magento/magento2/pull/20168)*. [GitHub-20140](https://github.com/magento/magento2/issues/20140)

<!--- ENGCOM-3852 -->

*  Hamburger menus no longer appear on pages that do not require menus. *Fix submitted by Amol Chaudhari in pull request [20214](https://github.com/magento/magento2/pull/20214)*. [GitHub-20210](https://github.com/magento/magento2/issues/20210)

<!--- ENGCOM-3842 -->

*  Fixed issue where drop-down toggle arrow did not close as expected on product page. *Fix submitted by Nirav Patel in pull request [20241](https://github.com/magento/magento2/pull/20241)*. [GitHub-20240](https://github.com/magento/magento2/issues/20240)

<!--- ENGCOM-3847 -->

*  The Send email confirmation popup **Close** button no longer overlaps with content. *Fix submitted by Arvinda Kumar in pull request [19986](https://github.com/magento/magento2/pull/19986)*. [GitHub-19985](https://github.com/magento/magento2/issues/19985)

<!--- ENGCOM-3798 -->

*  Corrected formatting issue on **Catalog** > **Category** > **Product** > **Assign products** page. *Fix submitted by David Verholen in pull request [20094](https://github.com/magento/magento2/pull/20094)*. [GitHub-19052](https://github.com/magento/magento2/issues/19052)

<!--- ENGCOM-3869 -->

*  Store switcher now works correctly on mobile devices. *Fix submitted by Arvinda kKumar in pull request [20260](https://github.com/magento/magento2/pull/20260)*. [GitHub-20259](https://github.com/magento/magento2/issues/20259)

<!--- ENGCOM-3894 -->

*  The order view invoice template is now displayed properly in tablet view. *Fix submitted by ranee2jcommerce in pull request [20374](https://github.com/magento/magento2/pull/20374)*. [GitHub-20373](https://github.com/magento/magento2/issues/20373)

<!--- ENGCOM-3848 -->

*  Fixed misalignment of the widget options on the edit widget page. *Fix submitted by Govind Sharma in pull request [20114](https://github.com/magento/magento2/pull/20114)*. [GitHub-20113](https://github.com/magento/magento2/issues/20113)

<!--- ENGCOM-3708 -->

*  Magento now identifies the shipping method in the Shipping section of the order review page for orders that are paid with using PayPal Express. *Fix submitted by Nirav Kadiya in pull request [19788](https://github.com/magento/magento2/pull/19788)*. [GitHub-14712](https://github.com/magento/magento2/issues/14712)

<!--- ENGCOM-3663 -->

*  Fixed checkbox alignment on the account information page. *Fix submitted by suryakant-krish in pull request [19646](https://github.com/magento/magento2/pull/19646)*. [GitHub-19645](https://github.com/magento/magento2/issues/19645)

<!--- ENGCOM-3653 -->

*  Fixed misalignment of search icons on the `onAttribute` page. *Fix submitted by Abrar Pathan in pull request [19643](https://github.com/magento/magento2/pull/19643)*. [GitHub-19642](https://github.com/magento/magento2/issues/19642)

<!--- ENGCOM-3595 -->

*  Fixed an alignment issue with the select and text boxes on the Advance Pricing page. *Fix submitted by Kajal Solanki in pull request [19473](https://github.com/magento/magento2/pull/19473)*. [GitHub-19472](https://github.com/magento/magento2/issues/19472)

<!--- ENGCOM-3627 -->

*  Corrected alignment issue with elements on the default email templates. *Fix submitted by suryakant-krish in pull request [19574](https://github.com/magento/magento2/pull/19574)*. [GitHub-19573](https://github.com/magento/magento2/issues/19573)

<!--- ENGCOM-3678 -->

*  Corrected typo in `SalesRule/Model/ResourceModel/Coupon/Usage.php`. *Fix submitted by Milind Singh in pull request [19726](https://github.com/magento/magento2/pull/19726)*. [GitHub-19721](https://github.com/magento/magento2/issues/19721)

<!--- ENGCOM-4113 -->

*  Fixed alignment of reload CAPTCHA icon on the Admin login  page. *Fix submitted by Govind Sharma in pull request [20914](https://github.com/magento/magento2/pull/20914)*. [GitHub-20911](https://github.com/magento/magento2/issues/20911)

<!--- ENGCOM-4107 -->

*  Fixed alignment of the error message that Magento displays on the add or edit bundle product customizable options tab. *Fix submitted by Kunj Joshi in pull request [20930](https://github.com/magento/magento2/pull/20930)*. [GitHub-20908](https://github.com/magento/magento2/issues/20908)

<!--- ENGCOM-4134 -->

*  Fixed misalignment of the Orders and Returns section that is accessed from the footer of the orders page. *Fix submitted by Amol Chaudhari in pull request [20817](https://github.com/magento/magento2/pull/20817)*. [GitHub-20816](https://github.com/magento/magento2/issues/20816)

<!--- ENGCOM-4057 -->

*  The default design of the **Edit** and **Remove items** buttons on the wishlist page now match. *Fix submitted by Abrar Pathan in pull request [20791](https://github.com/magento/magento2/pull/20791)*. [GitHub-20790](https://github.com/magento/magento2/issues/20790)

<!--- ENGCOM-4074 -->

*  Fixed issues with the shadows that are associated with input box and radio buttons on storefront forms. *Fix submitted by Abrar Pathan in pull request [20861](https://github.com/magento/magento2/pull/20861)*. [GitHub-20859](https://github.com/magento/magento2/issues/20859)

<!--- ENGCOM-3854 -->

*  Fixed  misalignment of the product option fields in the order summary of the checkout page. *Fix submitted by Pratik Oza in pull request [20138](https://github.com/magento/magento2/pull/20138)*. [GitHub-20134](https://github.com/magento/magento2/issues/20134)

<!--- ENGCOM-4053 -->

*  Fixed misalignment of fields on the configure product page that is accessed from the wishlist. *Fix submitted by Priti in pull request [20558](https://github.com/magento/magento2/pull/20558)*. [GitHub-20760](https://github.com/magento/magento2/issues/20760)

<!--- ENGCOM-4036 -->

*  Removed excessive white space from the top of CMS pages when displayed in mobile view. *Fix submitted by ranee2jcommerce in pull request [20756](https://github.com/magento/magento2/pull/20756)*. [GitHub-20755](https://github.com/magento/magento2/issues/20755)

<!--- ENGCOM-3991 -->

*  Fixed misalignment of the advanced search page's price field in mobile view. *Fix submitted by Govind Sharma in pull request [20159](https://github.com/magento/magento2/pull/20159)*. [GitHub-20157](https://github.com/magento/magento2/issues/20157)

<!--- ENGCOM-4066 -->

*  Fixed misalignment of the **View and Edit Cart** link in the mini cart. *Fix submitted by Rajneesh Gupta in pull request [20383](https://github.com/magento/magento2/pull/20383)*. [GitHub-20382](https://github.com/magento/magento2/issues/20382)

<!--- ENGCOM-4016 -->

*  Fixed misalignment of values in the currency rate column in the Order & Account Information area of the New Memo page. *Fix submitted by Dipti in pull request [20610](https://github.com/magento/magento2/pull/20610)*. [GitHub-20609](https://github.com/magento/magento2/issues/20609)

<!--- ENGCOM-3952 -->

*  Added missing PHPDoc comments for methods throughout the code base. *Fix submitted by Leandro F. L. in pull request [19826](https://github.com/magento/magento2/pull/19826)*.

<!--- ENGCOM-4168 -->

*  Fixed misalignment of the My Account page's **Recently Ordered** check box in tab portrait view. *Fix submitted by Ajay Ajabale in pull request [20155](https://github.com/magento/magento2/pull/20155)*. [GitHub-20143](https://github.com/magento/magento2/issues/20143)

<!--- ENGCOM-4001 -->

*  Fixed misalignment of **Schedule Update From** field on the Admin category page when displayed in a browser set to 768 x 1147 resolution. *Fix submitted by Amol Chaudhari in pull request [20403](https://github.com/magento/magento2/pull/20403)*. [GitHub-20402](https://github.com/magento/magento2/issues/20402)

<!--- ENGCOM-4052 -->

*  The Widget Options left navigation block on the Add New widget Page now displays correctly in tablet view. *Fix submitted by Dipti in pull request [20493](https://github.com/magento/magento2/pull/20493)*. [GitHub-20492](https://github.com/magento/magento2/issues/20492)

<!--- ENGCOM-3764 -->

*  Fixed misalignment of logo on Admin home page. *Fix submitted by suryakant-krish in pull request [19792](https://github.com/magento/magento2/pull/19792)*. [GitHub-19791](https://github.com/magento/magento2/issues/19791)

<!--- ENGCOM-4130 -->

*  Fixed misalignment of reviews under My Recent Reviews area of the My account dashboard. *Fix submitted by Priti in pull request [20801](https://github.com/magento/magento2/pull/20801)*. [GitHub-20800](https://github.com/magento/magento2/issues/20800)

<!--- ENGCOM-4150 -->

*  Corrected the behavior of the Option's New Option Type drop-down menu for customizable options.  *Fix submitted by dharmendra-wagento in pull request [20990](https://github.com/magento/magento2/pull/20990)*. [GitHub-20989](https://github.com/magento/magento2/issues/20989)

<!--- ENGCOM-3891 -->

*  Fixed irregularities with updating order status. *Fix submitted by Shikha Mishra in pull request [20349](https://github.com/magento/magento2/pull/20349)*. [GitHub-19258](https://github.com/magento/magento2/issues/19258)

<!--- ENGCOM-3822 -->

*  The `ui-component` validation `error` event now bubbles upwards when an abstract element is nested in a field set. *Fix submitted by Ravi Chandra in pull request [19812](https://github.com/magento/magento2/pull/19812)*. [GitHub-17926](https://github.com/magento/magento2/issues/17926)

### CMS content

<!--- MAGETWO-94429 -->

*  You can now delete from the media gallery browser any files and folders that are symlinked in `pub/media`. Previously, Magento left the image in the media gallery but displayed  no feedback in the product interface.

<!--- ENGCOM-4051 -->

*  Improved the display of images that are uploaded when you click the **Insert Image** button on a CMS page. *Fix submitted by Eduard Chitoraga in pull request [20787](https://github.com/magento/magento2/pull/20787)*. [GitHub-20786](https://github.com/magento/magento2/issues/20786)

### Configurable products

<!--- ENGCOM-3256 -->

*  The `DateTime` class can now parse strings for all supported languages, not just English. Previously, converting from string to PHP `DateTime` object failed for locales other than `en_US`. *Fix submitted by Thiago in pull request [18462](https://github.com/magento/magento2/pull/18462)*. [GitHub-18082](https://github.com/magento/magento2/issues/18082)

<!--- MAGETWO-96594 -->

*  Selected images on the product page of a configurable product are now positioned correctly. [GitHub-18410](https://github.com/magento/magento2/issues/18410)

<!--- ENGCOM-3136 -->

*  You can now successfully save products  with SKU lengths that are less than or equal to 64 digits. Previously, Magento threw a fatal error when you tried to re-save a child product after reducing the length of its 64-digit-long SKU. *Fix submitted by Thiago in pull request [18462](https://github.com/magento/magento2/pull/18462)*. [GitHub-18082](https://github.com/magento/magento2/issues/18082)

<!--- ENGCOM-3674 -->

*  The Cart Sales Rule  now excludes already discounted products from further discounting through a coupon code. *Fix submitted by Malyovanets Nickolas in pull request [19343](https://github.com/magento/magento2/pull/19343)*. [GitHub-14020](https://github.com/magento/magento2/issues/14020)

<!--- ENGCOM-3546 -->

*  Translations for `tier_price.phtml` now work as expected. Previously, these translations were not included in `js-translation.json` and were not visible on the storefront. *Fix submitted by Oleksii Gorbulin in pull request [19094](https://github.com/magento/magento2/pull/19094)*. [GitHub-19085](https://github.com/magento/magento2/issues/19085)

<!--- MAGETWO-96364 -->

*  **Sorting by a price** for configurable products on category pages now works correctly when the **Display Out of Stock Products** setting is enabled.

### cron

<!--- ENGCOM-3062  -->

*  A new `cron.log` file dedicated to logging cron-related information has been added to Magento. This new log file reduces output previously sent to the `system.log` file, making it easier to find non-cron-related information in the `system.log` file.  *Fix submitted by Pieter Hoste in pull request [18209](https://github.com/magento/magento2/pull/18209)*. [GitHub-17190](https://github.com/magento/magento2/issues/17190)

### Customers

<!--- ENGCOM-3390 -->

*  We've added an additional check for the password hash for  customers that have been created from the Admin without a password. Previously, customers created this way could not log in. *Fix submitted by Yevhenii Dumskyi in pull request [19066](https://github.com/magento/magento2/pull/19066)*. [GitHub-19060](https://github.com/magento/magento2/issues/19060)

<!--- ENGCOM-3351 -->

*  Magento now displays the same order total in  the customer information orders grid and orders grid when an order is placed in a currency other than the base currency. Previously, Magento displayed the wrong order total in the Admin's customer information orders tab. *Fix submitted by Anuj Gupta in pull request [18650](https://github.com/magento/magento2/pull/18650)*. [GitHub-18618](https://github.com/magento/magento2/issues/18618)

<!--- ENGCOM-3372 -->

*  Magento no longer displays the forgot password form while a customer is logged in but instead directs the customer to the customer dashboard. *Fix submitted by Oleksii Gorbulin in pull request [19026](https://github.com/magento/magento2/pull/19026)*. [GitHub-18256](https://github.com/magento/magento2/issues/18256)

<!--- ENGCOM-3387 -->

*  The reset password link in the password reset mail sent to customers when they click **Reset password** on the login page now permits customers to reset their password as expected.  *Fix submitted by p-bystritsky in pull request [19026](https://github.com/magento/magento2/pull/19026)*. [GitHub-18256](https://github.com/magento/magento2/issues/18256)

<!--- ENGCOM-3014 -->

*  Magento now maintains alphabetical order for customer groups when you filter customers by group in the Admin.  Previously, groups were sorted by ID. *Fix submitted by Dmytro Cheshun in pull request [18117](https://github.com/magento/magento2/pull/18117)*. [GitHub-18101](https://github.com/magento/magento2/issues/18101)

<!--- ENGCOM-3068 -->

*  Merchants can now edit a customer account if the customer's password has expired. *Fix submitted by Dmytro Cheshun in pull request [18308](https://github.com/magento/magento2/pull/18308)*. [GitHub-18162](https://github.com/magento/magento2/issues/18162)

<!--- MAGETWO-95692 -->

*  Magento now displays the value of a custom customer address attribute  in the column for that attribute when you create a custom customer address attribute and set it to be displayed in the Columns list.  Previously, Magento added the customer code column to the Customer table, but left these columns blank.

<!--- MAGETWO-91704 -->

*  You can now change payment methods after selecting store credit when creating an order from the Admin.

<!--- MAGETWO-91644 -->

*  Customers can now be matched in customer segments based on the number of orders in a multi-site deployment.

<!--- MAGETWO-95925 -->

*  We've improved the performance of the customer segment rule, which has improved site performance.

<!--- MAGETWO-96007 -->

*  Magento no longer unchecks the default billing and shipping address checkboxes when you create or update a customer address using the API.

<!--- MAGETWO-94347 -->

*  Magento now displays the list of additional customer addresses that are contained in the storefront customer address book  as a grid, which has improved performance for customers with many additional addresses associated with their accounts.

<!--- MAGETWO-91720-->

*  When a customer uses a gift card to make a purchase, Magento now applies only the applicable amount to the invoice. Previously, the total amount of the gift card was applied to a customer's store credit for a partial invoice.

<!--- MAGETWO-97397-->

*  Magento now assigns new accounts in multisite deployments  to the customer group that is associated with the default website scope. Previously, a new customer created from the Admin  had their customer group set to the default customer group on the default website scope.

<!--- ENGCOM-3056 -->

*  Customers who have an address associated with a country that has not been set to **allowed** can now successfully reset their password. *Fix submitted by Dmytro Cheshun in pull request [18179](https://github.com/magento/magento2/pull/18179)*. [GitHub-18170](https://github.com/magento/magento2/issues/18170)

<!--- ENGCOM-4028 -->

*  Removed an unneeded space from the title of the My Account page in mobile view. *Fix submitted by Amol Chaudhari in pull request [20725](https://github.com/magento/magento2/pull/20725)*. [GitHub-20723](https://github.com/magento/magento2/issues/20723)

<!--- ENGCOM-3981 -->

*  Removed an empty block on the My Account page sidebar. *Fix submitted by Pratik Oza in pull request [20630](https://github.com/magento/magento2/pull/20630)*. [GitHub-19139](https://github.com/magento/magento2/issues/19139)

<!--- MAGETWO-97411 -->

*  The `Magento\Customer\Model\Customer::getDataModel` method has been optimized, which has reduced the time required to load customer accounts with many addresses.

<!--- MAGETWO-98183 -->

*  **State/Province** field values are no longer required when creating an order from the Admin. Previously, Magento indicated that **State/Province** field values were required even though configuration settings indicated that these values were not required.

<!--- ENGCOM-4063 -->

*  Magento now respects the number of lines permitted in a street address as set in  **Store** > **Configuration** > **Customer** > **Customer Configuration** > **Name and Address Options**. Previously, Magento displayed the last saved values instead of the default value. *Fix submitted by Ievgenii Gryshkun in pull request [20565](https://github.com/magento/magento2/pull/20565)*. [GitHub-13675](https://github.com/magento/magento2/issues/13675)

<!--- ENGCOM-3368 -->

*  Images can now by default be successfully imported from HTTP and redirected to HTTPS. Previously, the image could not be uploaded. *Fix submitted by Rahul Mahto in pull request [18900](https://github.com/magento/magento2/pull/18900)*. [GitHub-18839](https://github.com/magento/magento2/issues/18839)

### Customer attributes

<!--- MAGETWO-96845 -->

*  Magento now loads the customer attribute page as expected, and users can edit attributes, when attributes are set to default values. Previously, Magento did not completely load this page when attributes values were set to default.

<!--- MAGETWO-70968 -->

*  Custom customer address attributes can now be updated when you edit an order's billing address in the Admin.

<!--- MAGETWO-91659 -->

*  You can now create a customer without a phone number when **Show Telephone** is set to optional. Previously, Magento displayed an informative error message and did not let you create the customer.

<!--- ENGCOM-3181 -->

*  Magento now saves  custom customer attributes as expected when  EAV caching is disabled.  Previously, directly saving customer information resulted in data loss. *Fix submitted by Vishal Gelani in pull request [18571](https://github.com/magento/magento2/pull/18571)*. [GitHub-12479](https://github.com/magento/magento2/issues/12479)

### Dashboard

<!--- MAGETWO-95299 -->

*  You can now upload PDP images larger than 1920 x 1200  without compressing and downsizing the images first. Previously, when a merchant uploaded a high quality product image (larger than 1920 X 1200), Magento resized and compressed the image. Merchants can now set requirements for resizing and compression as well as compression quality and target width and height.

<!--- MAGETWO-96975 -->

*  `_sleep` and `__wakeup` have been removed, and a new `PHP.MD` rule has been added to discourage PHP serialization.

<!--- ENGCOM-3857 -->

*  Magento now validates new addresses when created from the address book telephone field on the My Account dashboard page. *Fix submitted by Dipti in pull request [20262](https://github.com/magento/magento2/pull/20262)*. [GitHub-20261](https://github.com/magento/magento2/issues/20261)

### Developer

<!--- ENGCOM-3364 -->

*  Email messages sent from the command line (where the email loads into another block) can now be sent successfully. *Fix submitted by p-bystritsky in pull request [18988](https://github.com/magento/magento2/pull/18988)*. [GitHub-10440](https://github.com/magento/magento2/issues/10440)

### Directory

<!--- ENGCOM-4114 -->

*  The Swagger definition for `eav-data-attribute-option-interface` has been corrected. Previously, when you created a REST call to an endpoint that returns an object of `eav-data-attribute-option-interface` and `is_default` is set to `true`, `is_default` returns an object instead of the expected Boolean. *Fix submitted by Hiren Patel in pull request [20913](https://github.com/magento/magento2/pull/20913)*. [GitHub-18525](https://github.com/magento/magento2/issues/18525)

<!--- ENGCOM-4165 -->

*  `crontab` now updates all currency rates daily  as expected. Previously, `crontab` updated only a subset of the enabled currencies. *Fix submitted by Denis Papec in pull request [18981](https://github.com/magento/magento2/pull/18981)*. [GitHub-18580](https://github.com/magento/magento2/issues/18580)

### Downloadable

<!--- ENGCOM-3384 -->

*  The order confirmation email sent when a guest checks out now includes download links as expected. *Fix submitted by Oleksandr Kravchuk in pull request [19040](https://github.com/magento/magento2/pull/19040)*. [GitHub-18323](https://github.com/magento/magento2/issues/18323), [GitHub-19003](https://github.com/magento/magento2/issues/19003), [GitHub-19034](https://github.com/magento/magento2/issues/19034)

<!--- MAGETWO-91711 -->

*  You can now delete downloadable product links without first deleting sample links.

### EAV

<!--- ENGCOM-3236 -->

*  You can now use the `OptionManagement.delete` method to programmatically delete a product attribute that converts to false. Previously, Magento threw an exception. *Fix submitted by Patrick McLain in pull request [18720](https://github.com/magento/magento2/pull/18720)*. [GitHub-13083](https://github.com/magento/magento2/issues/13083)

<!--- MAGETWO-94848 -->

*  You can now use an attribute set on the product create page after moving the attributes from one attribute group to another.

<!--- ENGCOM-3814 -->

*  The customer EAV decimal attribute now accepts a value of 0. *Fix submitted by Shikha Mishra in pull request [20130](https://github.com/magento/magento2/pull/20130)*. [GitHub-20030](https://github.com/magento/magento2/issues/20030)

<!--- ENGCOM-3797 -->

*  The Magento storefront now correctly displays products with a custom attribute of type  `Media Image`. *Fix submitted by David Verholen in pull request [20096](https://github.com/magento/magento2/pull/20096)*. [GitHub-19054](https://github.com/magento/magento2/issues/19054)

<!--- ENGCOM-3045 -->

*  Magento no longer changes the `source_model` when you create an attribute option through the API. Previously, the `source_model` of an EAV attribute was set to `Magento\Eav\Model\Entity\Attribute\Source\Table` when updating an EAV attribute's options through the API. This eliminated the ability to update this attribute's options through the Admin. *Fix submitted by Pieter Hoste in pull request [18244](https://github.com/magento/magento2/pull/18244)*. [GitHub-13156](https://github.com/magento/magento2/issues/13156)

<!--- ENGCOM-3124 -->

*  Magento no longer throws an SQL Join error when you use a custom EAV entity with the `standard eav_entity` entity table. Previously, this usage resulted in an integrity constraint violation. *Fix submitted by Roman Strelenko in pull request [18437](https://github.com/magento/magento2/pull/18437)*. [GitHub-18131](https://github.com/magento/magento2/issues/18131)

### Email

<!--- MAGETWO-95137 -->

*  The return path e-mail variable `system/smtp/return_path_email` now works as expected.

<!--- ENGCOM-3744 -->

*  Email subject headers now support UTF-8 encoding. *Fix submitted by Alexey Varlamov in pull request [19978](https://github.com/magento/magento2/pull/19978)*. [GitHub-19977](https://github.com/magento/magento2/issues/19977)

### Frameworks

<!--- MAGETWO-97040 -->

*  Magento no longer logs an error when you include properly escaped special characters in store view names. Previously, Magento logged errors in the `exception.log`.

<!--- MAGETWO-96342 -->

*  Magento now attempts to reconnect when a MySQL timeout occurs. Previously, Magento displayed an informative PHP-related message and did not attempt to reconnect.

<!--- MAGETWO-94089 -->

*  You can now set all products that currently have **Set Product as New** set to **yes** set to **no**. This change affects bulk updates, CSV imports, and scheduled updates.

<!--- MAGETWO-95838 -->

*  Attributes in flat tables are now updated after the product is saved when the catalog product flat index is turned on and the indexer is set to **Save on Update**.

<!--- ENGCOM-3538 -->

*  `dev/tools/grunt/configs/themes.js` has been removed from the `.gitignore` file and added to the GitHub repository. Previously, `localthemes.js` was included in  `.gitignore` and replaced during a Magento update. *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [19350](https://github.com/magento/magento2/pull/19350)*. [GitHub-18949](https://github.com/magento/magento2/issues/18949)

<!--- ENGCOM-3295 -->

*  Magento now autoloads vendor root folders and can now run with custom Composer vendor directories. Previously, Magento's autoloader registration failed to generate the correct path when using the `COMPOSER_VENDOR_DIR` setting to specify a vendor path outside of the Magento installation root. *Fix submitted by [Rus0](https://github.com/Rus0) in pull request [18849](https://github.com/magento/magento2/pull/18849)*. [GitHub-17753](https://github.com/magento/magento2/issues/17753)

<!--- ENGCOM-3471 -->

*  Newly added links on the customer dashboard are now shown as current when the link path has been constructed from both default and new elements. Previously, the link was added, but not shown in the current state as expected. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [19134](https://github.com/magento/magento2/pull/19134)*. [GitHub-19099](https://github.com/magento/magento2/issues/19099)

<!--- ENGCOM-3483 -->

*  The `fileUploader` form element in the  `ui_component` form now works as expected. Previously, during file upload, the countable interface was not implemented, and Magento threw this error: `Error Message : Warning: count(): Parameter must be an array or an object that implements Countable`.  *Fix submitted by [gmachure](https://github.com/gmachure) in pull request [19249](https://github.com/magento/magento2/pull/19249)*. [GitHub-19247](https://github.com/magento/magento2/issues/19247)

<!--- ENGCOM-3243 -->

*  Interception cache compilation has been improved, and custom profiler records are now executed in less than a second. Previously, profiled methods consumed about 70% of the first page load after `cache:flush` from either the command-line interface or the Admin. *Fix submitted by Patrick McLain in pull request [18648](https://github.com/magento/magento2/pull/18648)*. [GitHub-17680](https://github.com/magento/magento2/issues/17680)

<!--- ENGCOM-3535 -->

*  `Magento\Framework\Webapi\Rest\Response\Renderer` class's  `_formatValue` method has been refactored to handle ampersands correctly. Previously, an ampersand in any customer text field when using the  web API doubled the encoding. [GitHub-18361](https://github.com/magento/magento2/issues/18361)

<!--- ENGCOM-3846 -->

*  Deprecated interface `\Magento\Framework\Option\ArrayInterface` has been replaced with `\Magento\Framework\Data\OptionSourceInterface` in `lib/internal/Magento/Framework/Option/ArrayPool.php`. *Fix submitted by Milind Singh in pull request [20248](https://github.com/magento/magento2/pull/20248)*. [GitHub-20064](https://github.com/magento/magento2/issues/20064)

<!--- ENGCOM-4166 -->

*  Corrected invalid return type in docblock in `Magento\Framework\HTTP\PhpEnvironment\Request::getHeader()`. Previously, the docblock of the  `Magento\Framework\HTTP\PhpEnvironment\Request::getHeader()` method stated that it would return a `bool` or an instance of `Zend\Http\Header\HeaderInterface()`. However, this method returned either a `bool` or a `string`. *Fix submitted by Milind Singh in pull request [21035](https://github.com/magento/magento2/pull/21035)*. [GitHub-21034](https://github.com/magento/magento2/issues/21034)

<!--- ENGCOM-3117 -->

*  Magento now throws `LogicException($message, 0, $e)` instead of `LogicException($message)` as needed when running validation for communication configuration (`communication.xml`).  Previously, the  validator in `Magento\Framework\Communication\Config\Validator` did not propagate exceptions, which obscured the cause of the error. *Fix submitted by Artsiom Bruneuski in pull request [18416](https://github.com/magento/magento2/pull/18416)*. [GitHub-14555](https://github.com/magento/magento2/issues/14555)

<!--- ENGCOM-4073 -->

*  JavaScript translation issues on the modal buttons that Magento displays when removing items from the product compare page have been resolved. *Fix submitted by Max Fickers in pull request [20109](https://github.com/magento/magento2/pull/20109)*. [GitHub-19705](https://github.com/magento/magento2/issues/19705)

<!--- ENGCOM-4046 -->

*  We've added support for `use` statements in web API interfaces and the use of non-FQN class names in `doctypes`. Previously,  you could not  import class names in interfaces that were used for the web API. *Fix submitted by Riccardo Tempesta in pull request [17424](https://github.com/magento/magento2/pull/17424)*. [GitHub-1537](https://github.com/magento/magento2/issues/1537)

<!--- ENGCOM-3710 -->

*  `Magento/Framework/HTTP/Adapter/Curl.php` now supports setting an HTTP version. *Fix submitted by SikailoISM in pull request [19845](https://github.com/magento/magento2/pull/19845)*. [GitHub-19442](https://github.com/magento/magento2/issues/19442)

<!--- ENGCOM-3425 -->

*  Magento can now read responses from third-party servers that use HTTP/2 if your server also uses HTTP/2. Previously, this inability to read requests from third-party servers that use HTTP/2 prevented access to Magento Marketplace.  *Fix submitted by Vova Yatsyuk in pull request [19143](https://github.com/magento/magento2/pull/19143)*. [GitHub-19127](https://github.com/magento/magento2/issues/19127)

<!--- ENGCOM-3753 -->

*  The AMQP helper has been updated to use host, username, and password configuration from the instance under test. This allows tests to run when the AMQP service is not using default credentials or available on `localhost`. Previously, the `host` value in this helper was hardcoded. *Fix submitted by Patrick McLain in pull request [18978](https://github.com/magento/magento2/pull/18978)*. [GitHub-18953](https://github.com/magento/magento2/issues/18953)

#### Cache framework

<!--- MAGETWO-64282 -->

*  Problems with cache-cleaning for product pages for simple  products that are associated with configurable products  have been resolved. and as a result, product pages now accurately display out-of-stock status.  Previously, when an associated product went out-of-stock, Magento did not update the product page of the configurable product unless you cleaned the cache. [GitHub-8009](https://github.com/magento/magento2/issues/8009)

<!--- MAGETWO-95853 -->

*  The images cache can now be flushed from the Admin (**Admin** > **System** > **Cache Management** and click **Flush Catalog Images Cache**). Previously, you could not delete the directory, and Magento displayed an error on the cache management page.

<!--- MAGETWO-91694 -->

*  Magento now removes disabled products as expected from the flat product table when **Catalog Flat Product** is enabled.

#### Configuration framework

<!--- MAGETWO-97247 -->

*  You can now enable shared catalogs using the `config:set` command. Previously, this command enabled the shared catalog but did not create the necessary permissions to access it.

#### Data framework

<!--- ENGCOM-3268 -->

*  Class `\Magento\Framework\Data\Form\Element\Fieldset` now calls the `getBeforeElementHtml` method. *Fix submitted by Burlacu Vasilii in pull request [18798](https://github.com/magento/magento2/pull/18798)*. [GitHub-2618](https://github.com/magento/magento2/issues/2618)

#### Event framework

<!--- ENGCOM-3422 -->

*  `events.xml` can now have child nodes. *Fix submitted by Lisovyi Yevhenii in pull request [19146](https://github.com/magento/magento2/pull/19146)*. [GitHub-15931](https://github.com/magento/magento2/issues/15931)

#### JavaScript framework

<!--- MAGETWO-56813 -->

*  Wishlist names can now contain apostrophes. Previously, a wishlist whose name contained an apostrophe could not be edited or deleted.

#### Message framework

<!--- MAGETWO-91717 -->

*  Module names can now contain numbers. Previously, `magento/framework-message-queue/etc/queue_base.xml` contained a pattern that did not allow numbers to be used in `instanceType`, which resulted in the invalidation of custom message consumers in this file.

### General fixes

<!--- ENGCOM-3198 -->

*  The navigation arrows in fotorama now stay visible after you close the zoomed fotorama. *Fix submitted by Luuk Schakenraad in pull request [18590](https://github.com/magento/magento2/pull/18590)*. [GitHub-18585](https://github.com/magento/magento2/issues/18585)

<!--- ENGCOM-3239 -->

*  You can now customize the view of tab and accordion components by using mixins to redefine the default variables in the scope of a custom theme. *Fix submitted by Dmytro Cheshun in pull request [18730](https://github.com/magento/magento2/pull/18730)*. [GitHub-18729](https://github.com/magento/magento2/issues/18729)

<!--- ENGCOM-3489 -->

*  Content in  confirmation pop-up windows on the Admin no longer overlap the **Close** button. *Fix submitted by Dmytro Cheshun in pull request [19264](https://github.com/magento/magento2/pull/19264)*. [GitHub-19263](https://github.com/magento/magento2/issues/19263)

<!--- ENGCOM-3346 -->

*  You can now update database credentials from the command line in non-interactive mode using `bin/magento setup:config:set`. *Fix submitted by aheadWorks Capital SIA in pull request [18970](https://github.com/magento/magento2/pull/18970)*. [GitHub-18965](https://github.com/magento/magento2/issues/18965)

<!--- ENGCOM-3165 -->

*  The error message displayed on the Add Product Attribute page has been improved. *Fix submitted by Aman Agarwal in pull request [17800](https://github.com/magento/magento2/pull/17800)*. [GitHub-17754](https://github.com/magento/magento2/issues/17754)

<!--- ENGCOM-3209 -->

*  The datepicker icon is now correctly aligned in the Admin. *Fix submitted by Yaroslav Rogoza in pull request [18627](https://github.com/magento/magento2/pull/18627)*. [GitHub-18605](https://github.com/magento/magento2/issues/18605)

<!--- ENGCOM-3224 -->

*  The magnifier now disappears as expected when a user moves their cursor off an image. *Fix submitted by gwharton in pull request [18702](https://github.com/magento/magento2/pull/18702)*. [GitHub-15035](https://github.com/magento/magento2/issues/15035)

<!--- MAGETWO-91745 -->

*  Product pages that are included in a related products rule that uses a Price (percentage) condition now load correctly. Previously, loaded pages were blank.

<!--- MAGETWO-96405 -->

*  Magento now displays the appropriate thumbnail image for configurable products in requisition lists. Previously, Magento displayed the default placeholder thumbnail image for all configurable products.

<!--- ENGCOM-3588 -->

*  The **Select All** and **Select Visible** buttons on the notification page now work as expected. Previously, these buttons behaved the same. *Fix submitted by Shikha Mishra in pull request [19302](https://github.com/magento/magento2/pull/19302)*. [GitHub-19285](https://github.com/magento/magento2/issues/19285)

<!--- ENGCOM-3389 -->

*  The note that describes the **Use in Layered Navigation: Filterable (no results)**  property now better describes the property. *Fix submitted by Vladyslav Podorozhnyi in pull request [19037](https://github.com/magento/magento2/pull/19037)*. [GitHub-14007](https://github.com/magento/magento2/issues/14007)

<!--- ENGCOM-3258 -->

*  Magento no longer throws SQL errors when table prefixes are used. *Fix submitted by Peter O'Callaghan in pull request [18412](https://github.com/magento/magento2/pull/18412)*. [GitHub-18357](https://github.com/magento/magento2/issues/18357)

### Gift cards

<!--- MAGETWO-91700 -->

*  Magento now consistently validates gift card prices according to the constraints of the relevant store locale.

<!--- MAGETWO-91611 -->

*  Magento now displays the correct creation date for a gift card when the **Lifetime** field is populated.

<!--- ENGCOM-3379 -->

*  Fixed the rendering of the check notifications counters icon on the Admin. *Fix submitted by Abrar Pathan in pull request [19053](https://github.com/magento/magento2/pull/19053)*. [GitHub-18887](https://github.com/magento/magento2/issues/18887)

<!--- ENGCOM-3624 -->

*  `old_path: new_path` path mappings have been added for JavaScript files that have been relocated to `requirejs-config.js`. *Fix submitted by rbayet in pull request [19583](https://github.com/magento/magento2/pull/19583)*. [GitHub-19291](https://github.com/magento/magento2/issues/19291), [GitHub-16302](https://github.com/magento/magento2/issues/16302)

<!--- ENGCOM-3632 -->

*  Calling `getCurrentUrl` on a store no longer adds the  `___store` parameter when **store code in URL** is set to **yes** and the current store is not the same store requested in the URL. *Fix submitted by Nazar in pull request [19135](https://github.com/magento/magento2/pull/19135)*. [GitHub-18941](https://github.com/magento/magento2/issues/18941), [GitHub-16302](https://github.com/magento/magento2/issues/16302)

<!--- ENGCOM-3644 -->

*  The **Click for price** button on the home page now works as expected. *Fix submitted by Ravi Chandra in pull request [19663](https://github.com/magento/magento2/pull/19663)*. [GitHub-15922](https://github.com/magento/magento2/issues/15922)

### Gift message

<!--- MAGETWO-67269 -->

*  Magento no longer displays unselected gift options when a customer selects **Check Out with Multiple Addresses** for an order. Previously, Magento displayed unselected gift options for the order.

<!--- ENGCOM-3985 -->

*  Fixed misalignment of the **Edit** and **Remove** buttons on the gift option popup that Magento displays when a customer adds a product to the shopping cart. *Fix submitted by Ajay Ajabale in pull request [20605](https://github.com/magento/magento2/pull/20605)*. [GitHub-20604](https://github.com/magento/magento2/issues/20604)

### Gift registry

<!--- MAGETWO-95833 -->

*  Magento now shows the correct price for configurable products in a shared gift registry. Previously, Magento displayed the original price instead of the special price for configurable products.

### Gift wrapping

<!--- MAGETWO-91563 -->

*  You can now add gift wrapping to the shopping cart to an already added product without having to add an additional product.

### Google Analytics

<!--- ENGCOM-3058 -->

*  `referenceContainer` has been changed to `referenceBlock` in the Google Analytics module. *Fix submitted by Petar Sambolek in pull request [18290](https://github.com/magento/magento2/pull/18290)*. [GitHub-16497](https://github.com/magento/magento2/issues/16497)

### Google Tag Manager

<!--- MAGETWO-96378 -->

*  The Google Tag Manager `AddToCart` event now fires reliably on the product page when **Stores** > **Configuration** > **Sales** > **Checkout** > **Redirect to Shopping Cart** is set to  **yes**.

### Import/export

<!--- ENGCOM-3203 -->

*  Magento now displays an informative error after you run check data, and also blocks import and product creation, when SKU strings are too long. Previously, the check data process permitted you to proceed with the import, but the import failed due to a system error.  *Fix submitted by Ravi Chandra in pull request [18639](https://github.com/magento/magento2/pull/18639)*. [GitHub-17865](https://github.com/magento/magento2/issues/17865)

<!--- ENGCOM-3228 -->

*  Magento now successfully imports products  that have a fixed price custom option with a price of zero. Previously,  the importer failed when trying to update products with a price of zero.  *Fix submitted by Antun Matanović in pull request [18284](https://github.com/magento/magento2/pull/18284)*. [GitHub-17616](https://github.com/magento/magento2/issues/17616)

<!--- MAGETWO-94671 -->

*  The memory required to export the media gallery has been significantly reduced. [GitHub-17320](https://github.com/magento/magento2/issues/17320)

<!--- MAGETWO-95825-->

*  We've resolved the following issues with imported images:

   *  images of all sizes reverted to the default placeholder size after import.

   *  images that were removed through the Admin before import returned after import. Magento now displays an informative error message if images are not imported as expected.

<!--- MAGETWO-91569 -->

*  Special characters in the CSV import file no longer trigger a general system exception. Previously, special characters (for example, <code>ƒ</code>, <code>ª</code>, and <code>›</code>) halted the check data phase of import.

<!--- MAGETWO-95105 -->

*  URL Key columns that contain  accented characters are now converted properly after the import of a CSV file. Previously, if you manually assigned a URL key to a product in the Admin that contained an accent character or punctuation, Magento converted it to the regular character or removed it.

<!--- MAGETWO-91544 -->

*  Magento now correctly updates existing product URLs during import. Previously, Magento update existing URLs with the new URLs, but displayed a 404 error if you tried to access the product from the new URL.

<!--- MAGETWO-95829 -->

*  Magento now retains product order within a category after import.

<!--- MAGETWO-59265 -->

*  You can now properly set data for drop-down attributes during product import in deployments with multiple storeviews.

<!--- MAGETWO-91657 -->

*  If you enter a value of zero for a customer group price discount by percentage when setting advanced pricing for a product, Magento now prompts you to enter a valid value. Previously, Magento threw an error.

<!--- MAGETWO-58210 -->

*  The import process now supports `add_update` along with the default behavior `append`.  [GitHub-6193](https://github.com/magento/magento2/issues/6193)

<!--- ENGCOM-3083 -->

*  The upsert category process during product import now generates freshly created category URL rewrites globally and not just for the default scope. Previously, Magento created URL rewrites for the default website scope only. *Fix submitted by utietze in pull request [18271](https://github.com/magento/magento2/pull/18271)*. [GitHub-18234](https://github.com/magento/magento2/issues/18234)

<!--- ENGCOM-3823 -->

*  Magento now indicates correct stock status (in stock/out-of-stock) after importing products that have an indicated quantity but a status of out-of-stock from a CSV file. Previously, Magento imported the product quantity correctly, but not the stock status. *Fix submitted by p-bystritsky in pull request [20180](https://github.com/magento/magento2/pull/20180)*. [GitHub-15950](https://github.com/magento/magento2/issues/15950)

<!--- ENGCOM-3809 -->

*  We've resolved multiple issues that users previously encountered when importing configurable products with images and virtual products. Previously, image import failed under certain circumstances, and Magento displayed these messages:  `Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s)` and `Products are imported but configurable product has no image in Magento`.  *Fix submitted by Rajneesh Gupta in pull request [20127](https://github.com/magento/magento2/pull/20127)*. [GitHub-20098](https://github.com/magento/magento2/issues/20098)

<!--- ENGCOM-3977 -->

*  `\Magento\ImportExport\Block\Adminhtml\Export\Filter::_getSelectHtmlWithValue()` method no longer overwrites the `$value` argument. Previously, the same name was used for different `$value` variables. *Fix submitted by Rajneesh Gupta in pull request [20625](https://github.com/magento/magento2/pull/20625)*. [GitHub-20624](https://github.com/magento/magento2/issues/20624)

<!--- MAGETWO-96381 -->

*  Magento now exports configurable products based on swatches with the correct Admin and Default Store View labels. Previously,  the `configurable_variations` column for these configurable products contained the wrong values after import.

### Infrastructure

<!--- ENGCOM-4389  -->

*  Magento now supports Elasticsearch 6.x. *Fix submitted by Romain Ruaud in pull request [21458](https://github.com/magento/magento2/pull/21458)*.

<!--- MC-5201  -->

*  Magento now supports Redis 5.0.

<!--- ENGCOM-4392  -->

*  Expected backup and restoration functionality has been restored and MySQL View support is supported while preserving backward compatibility with pre-existing modules. *Fix submitted by community member Stepan Furman in pull request [21151](https://github.com/magento/magento2/pull/21151)*.

<!--- ENGCOM-3690 -->

*  `transparent.js` has relocated, and orders can now be created from the Admin using PayflowPro and Authorize.Net. Previously, orders created from the Admin using PayflowPro failed, and Magento displayed an informative message indicating that an account number was invalid. *Fix submitted by Patrick McLain in pull request [19764](https://github.com/magento/magento2/pull/19764)*. [GitHub-19763](https://github.com/magento/magento2/issues/19763)

<!--- ENGCOM-3598 -->

*  `json_encode` errors are now caught and logged in the console.log. Previously, the JSON serializer threw an error, which blocked all frontend behavior. *Fix submitted by Tommy Quissens in pull request [16154](https://github.com/magento/magento2/pull/16154)*. [GitHub-14937](https://github.com/magento/magento2/issues/14937)

<!--- ENGCOM-3589 -->

*  `app/bootstrap.php` has been updated to correctly define supported PHP versions. *Fix submitted by Fabrizio Balliano in pull request [19455](https://github.com/magento/magento2/pull/19455)*. [GitHub-19453](https://github.com/magento/magento2/issues/19453)

<!--- ENGCOM-3687 -->

*  An incorrect parameter in `getCreatedAtFormatted($format)` has been corrected. *Fix submitted by Jaimin Sutariya in pull request [19537](https://github.com/magento/magento2/pull/19537)*. [GitHub-17442](https://github.com/magento/magento2/issues/17442)

<!--- ENGCOM-3666 -->

*  A syntax error in `magento2/lib/internal/Magento/Framework/Cache/Backend/Database.php` has been corrected. *Fix submitted by Nirav Kadiya in pull request [19634](https://github.com/magento/magento2/pull/19634)*. [GitHub-13309](https://github.com/magento/magento2/issues/13309)

<!--- ENGCOM-3364 -->

*  Magento no longer throws an error when you send an email from the command line. Previously, Magento threw an exception because `$debugHintsPath` was missing. *Fix submitted by p-bystritsky in pull request [18991](https://github.com/magento/magento2/pull/18991)*. [GitHub-10440](https://github.com/magento/magento2/issues/10440)

*  Message queue topic names generated as a result of asynchronous and bulk REST calls are now based on service contract names. Currently,  topic names reflect the PHP class and method names that should be invoked to handle processing. For example, a topic that was named using the older conventions (`async.V1.customers.POST`) might be named `async.magento.customer.api.accountmanagementinterface.createaccount.post`. This new naming is more semantic and allows the reuse for other Magento services.

### Integration

<!--- ENGCOM-3353 -->

*  Magento no longer throws an exception when you navigate to the OAuth page (**Backend** > **Stores** > **Configuration** > **Services** > **OAuth**). *Fix submitted by Mahesh Singh in pull request [18750](https://github.com/magento/magento2/pull/18750)*. [GitHub-18655](https://github.com/magento/magento2/issues/18655)

<!--- ENGCOM-3355 -->

*  The Last Logged In value displayed on the Admin's customer account page is now updated as expected when a customer is authenticated through REST. *Fix submitted by Prakash in pull request [18973](https://github.com/magento/magento2/pull/18973)*. [GitHub-17488](https://github.com/magento/magento2/issues/17488)

<!--- ENGCOM-3053 -->

*  Integrations are no longer reset after running the `bin/magento setup:upgrade` command. *Fix submitted by Pratik Oza in pull request [18273](https://github.com/magento/magento2/pull/18273)*. [GitHub-12095](https://github.com/magento/magento2/issues/12095)

### Klarna

*  Added support for Magento 2.2.0 through 2.2.1. <!--- BUNDLE-1759-->

*  Changed types for the specific order line items.

*  Corrected issues in the installation and upgrade scripts.

*  Added a try-catch block around checking customer default addresses.

*  Added check to confirm that website T&Cs have been agreed to before authorizing payment.

*  Fixed error with virtual products.

### Layered navigation

<!--- MAGETWO-91753 -->

*  You can now filter products based on color.

### Magento Shipping

*  Updating an order destination prior to creating a shipment  now results in the shipment being sent to the new destination.

*  Shipments that contain the same item across multiple packages will now correctly update the shipped amount.

### MSRP

<!--- MC-10973 -->

*  MAP (minimum advertised price) prices for the simple products that belong to a configurable product are now supported. MAP prices for these products are now successfully handled and displayed  on the configurable product page and  the category page display of the configurable product.

### Newsletter

<!--- ENGCOM-3460 -->

*  Magento now sets the correct `store_id` for each store when a customer subscribes to a newsletter from more than one store. *Fix submitted by Eduard Chitoraga in pull request [19195](https://github.com/magento/magento2/pull/19195)*. [GitHub-19172](https://github.com/magento/magento2/issues/19172)

<!--- ENGCOM-3266 -->

*  Customers are no longer unsubscribed to a newsletter as a result of a password reset email request when **Newsletter Need to Confirm** is set to **yes** on the Admin. *Fix submitted by Janak Bhimani in pull request [18795](https://github.com/magento/magento2/pull/18795)*. [GitHub-17954](https://github.com/magento/magento2/issues/17954)

<!--- MAGETWO-91684 -->

*  Magento now permits only one newsletter subscription per email address. Previously, when a website had multiple store views, a customer could subscribe multiple times to a newsletter with one email address.

<!--- MAGETWO-91768 -->

*  Magento now displays an informative message when you click the unsubscribe link in the newsletter email.

<!--- ENGCOM-3575 -->

*  You can now add a custom field to a newsletter in the position of your choice by editing  the newsletter configuration file (`app/code/Magento/Newsletter/etc/adminhtml/system.xml`).  Previously, you could add a new field but could not select where it would appear in the newsletter.  *Fix submitted by Burlacu Vasilii in pull request [19419](https://github.com/magento/magento2/pull/19419)*. [GitHub-19418](https://github.com/magento/magento2/issues/19418)

<!--- ENGCOM-3431 -->

*  A logged-in user who already has an account can now use the footer to sign up for a newsletter subscription. Previously, this user received an error message, and Magento did not subscribed her to the newsletter. *Fix submitted by Ravi Chandra in pull request [19164](https://github.com/magento/magento2/pull/19164)*. [GitHub-8952](https://github.com/magento/magento2/issues/8952)

<!--- ENGCOM-3574 -->

*  If a customer tries to subscribe to a newsletter with an email that  already has a subscription associated with it, Magento now warns the customer rather than throws an exception. *Fix submitted by Dharmesh Vaja in pull request [19416](https://github.com/magento/magento2/pull/19416)*. [GitHub-19404](https://github.com/magento/magento2/issues/19404)

<!--- ENGCOM-4179 -->

*  You can now search for or reset the filter on newsletter problem reports from the Admin. Previously, Magento did not display filter reports when adminstrators used FireFox.  *Fix submitted by Govind Sharma in pull request [20829](https://github.com/magento/magento2/pull/20829)*. [GitHub-20828](https://github.com/magento/magento2/issues/20828)

### Orders

<!--- MAGETWO-94437 -->

*  The address form in the Admin order creation workflow has been refactored to improve performance.

<!--- MAGETWO-69274 -->

*  Administrators now need sales email privileges to send order comment emails to customers.

### Page cache

<!--- MAGETWO-97234 -->

*  Pages opened by URL redirect now display prices in the currency set for the appropriate store. Previously, the opened page contained prices in the default currency (USD) rather than the selected currency for the store.

### Payment methods

<!--- ENGCOM-3219 -->

*  Magento now populates the estimated billing address  field  on the checkout page with the default billing address as expected when the cart contains virtual products only. Previously, when a signed-in customer with different default shipping and billing addresses had a cart containing only virtual products, the cart estimation field was populated with the default shipping address information  instead of the default billing address information. *Fix submitted by Lucas Calazans in pull request [18095](https://github.com/magento/magento2/pull/18095)*. [GitHub-17744](https://github.com/magento/magento2/issues/17744)

<!--- ENGCOM-3393 -->

*  Invoice PDFs now include a populated FTP (Fixed Product Tax) amount field for orders when using Weee tax and FPT is enabled. Previously, this information was displayed in order and invoice views, bot not captured in the PDF. *Fix submitted by Mahesh Singh in pull request [19061](https://github.com/magento/magento2/pull/19061)*. [GitHub-18617](https://github.com/magento/magento2/issues/18617)

<!--- MAGETWO-96475 -->

*  When an order placed with PayPal fails during checkout, Magento no longer processes payment for the order. Previously, orders that failed during  checkout when being processed through PayPal were processed.

<!--- MAGETWO-96291 -->

*  A pop-up window no longer blocks completion of checkout using Braintree PayPal on a mobile device.

<!--- MAGETWO-95821 -->

*  When a  customer selects PayPal as a payment method but then applies a gift card, Magento now reverts to zero subtotal checkout. Previously, the order failed at the review step if a gift card were applied.

<!--- MAGETWO-91526 -->

*  Orders created with eWay as a payment method now contain the same credit card information, which is included in the Authorize.Net response. Previously, the order did not contain any information regarding the credit card.

<!--- MAGETWO-97243 -->

*  Magento now displays successful orders paid for with eWay. Previously, Magento did not display completed errors even after the transaction was accepted by eWay.

<!--- ENGCOM-3675 -->

*  The `getList()` method now returns the vault data total count as expected. *Fix submitted by Andrea Parmeggiani in pull request [19707](https://github.com/magento/magento2/pull/19707)*. [GitHub-19706](https://github.com/magento/magento2/issues/19706)

<!--- ENGCOM-3156 -->

*  You can now use REST to create an order without payment. Previously, when using REST to submit an order without a payment, Magento threw an error. *Fix submitted by Vishal Gelani in pull request [18521](https://github.com/magento/magento2/pull/18521)*. [GitHub-15652](https://github.com/magento/magento2/issues/15652)

<!--- ENGCOM-3646 -->

*  Payment methods are now grouped properly in the core source model. `\Magento\Payment\Model\Config\Source\Allmethods` class in the Magento core can be used as a source model for backend configuration fields. It displays available payment methods grouped by payment provider. We've added groups for previously missing payment options (PayPal, Authorize.Net, and  Braintree methods). *Fix submitted by Wojtek Naruniec in pull request [19665](https://github.com/magento/magento2/pull/19665)*. [GitHub-19664](https://github.com/magento/magento2/issues/19664)

<!--- ENGCOM-3840 -->

*  Fixed misalignment of the save-for-later checkbox on the Admin create order credit card details page. *Fix submitted by Kajal Solanki in pull request [20233](https://github.com/magento/magento2/pull/20233)*. [GitHub-20232](https://github.com/magento/magento2/issues/20232)

<!--- MC-4239 -->

*  The Authorize.Net payment method has been migrated to the `accept.js` API on both the storefront and Admin.

<!--- MC-5235 -->

*  PayPal Express Checkout has been updated to `checkout.js v4`. This API replaces the deprecated API Express Checkout - NVP/SOAP. This update provides Magento with a single integration but with multiple payment options that merchants can choose when activating the integration​. See [PayPal Express Checkout](https://docs.magento.com/m2/ce/user_guide/payment/paypal-express-checkout.html)

<!--- MAGETWO-83017 -->

*  You can now place an order using Cybersource payment from the Admin.

<!--- MAGETWO-83017 -->

*  Administrators can now set additional Cybersource profile credentials (**Profile ID**, **Access key**, **Secret Key**) from the Admin and place an order from the Admin when different credentials are used on website level. Previously, Cybersource denied payments when a merchant deployed their Admin on a different domain than the store.

<!--- MAGETWO-94946 -->

*  Tax is now calculated as expected for virtual products when PayPal is used as a payment method.

### Performance

<!--- MAGETWO-95249 94346-->

*  New customer address handling improves the processing of many addresses on the Admin customer details page. This functionality was rewritten with UI components to increase platform performance, which in turn facilitates the management of customers with 3000 and more addresses. This refactoring includes these changes:

   *  All actions on the Customer Addresses tab are now performed asynchronously with AJAX. This tab now contains the default billing address and default shipping address UI component blocks, customer addresses listing or grid, and customer address form in a modal window.

   *  `\Magento\Customer\Model\Customer\DataProvider` has been replaced by `\Magento\Customer\Model\Customer\DataProviderWithDefaultAddresses` to support the asynchronous management of customer addresses.

### Product video

<!--- MAGETWO-91707 -->

*  You can now pause product videos on YouTube on storefronts running on Internet Explorer 11.x.

### Quote

<!--- ENGCOM-3416 -->

*  You can now update a shopping cart that contains a reserved order number (for example, 000000651). *Fix submitted by Burlacu Vasilii in pull request [19130](https://github.com/magento/magento2/pull/19130)*. [GitHub-19101](https://github.com/magento/magento2/issues/19101)

<!--- ENGCOM-3226 -->

*  You can now use REST to set billing information for a customer (`customerId`) with an existing address. Previously, Magento threw an exception during address validation. *Fix submitted by Patrick McLain in pull request [18704](https://github.com/magento/magento2/pull/18704)*. [GitHub-17485](https://github.com/magento/magento2/issues/17485)

<!--- MAGETWO-94059 -->

*  You can now request a quote on a storefront running on iOS 11.3.1.

<!--- ENGCOM-3464 -->

*  We fixed an issue with inaccurate floating point calculations during checkout. *Fix submitted by Jay Ghosh in pull request [18185](https://github.com/magento/magento2/pull/18185)*. [GitHub-18027](https://github.com/magento/magento2/issues/18027)

<!--- ENGCOM-3503 -->

*  Magento now saves the correct `quote_item_id` values for products during checkout for an order being shipped to multiple addresses. *Fix submitted by Mahesh Singh in pull request [19192](https://github.com/magento/magento2/pull/19192)*. [GitHub-18349](https://github.com/magento/magento2/issues/18349)

### Reports

<!--- MAGETWO-91553 -->

*  Administrators with their role scope set to `custom` can now view the abandoned carts report.

<!--- ENGCOM-3560 -->

*  Magento no longer displays a negative number in the dashboard to represent a canceled order. *Fix submitted by Nirav Patel in pull request [19372](https://github.com/magento/magento2/pull/19372)*. [GitHub-18754](https://github.com/magento/magento2/issues/18754)

<!--- ENGCOM-4129 -->

*  Magento now refreshes reports statistics as expected when you select the **Refresh Lifetime Statistics** option from the Actions menu of the **Reports** > **Refresh Statistics** page. Previously, you were redirected to a 404 page when you selected this menu option. *Fix submitted by Eduard Chitoraga in pull request [20820](https://github.com/magento/magento2/pull/20820)*. [GitHub-20819](https://github.com/magento/magento2/issues/20819)

<!--- ENGCOM-3257 -->

*  Magento now displays correct prices for products at checkout when a customer uses a credit card and Authorize.Net is enabled. Previously, order items had the original price of $0.0. *Fix submitted by Patrick McLain in pull request [18768](https://github.com/magento/magento2/pull/18768)*. [GitHub-16050](https://github.com/magento/magento2/issues/16050)

### Reviews

<!--- ENGCOM-3486 -->

*  Administrators can now access product ratings in deployments with multiple websites running different locales. *Fix submitted by Saphal Jha in pull request [18888](https://github.com/magento/magento2/pull/18888)*. [GitHub-18192](https://github.com/magento/magento2/issues/18192)

<!--- MAGETWO-95491 -->

*  The  **Save and Next** and **Save and Previous** buttons in **Marketing** > **Reviews** now work as expected.

<!--- ENGCOM-3837 -->

*  You can now add a product review from the Admin.  Previously, when you clicked **New Review**, Magento displayed this error: `Error message showing : A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later`. *Fix submitted by Suneet K. in pull request [20146](https://github.com/magento/magento2/pull/20146)*. [GitHub-20122](https://github.com/magento/magento2/issues/20122)

<!--- ENGCOM-4096 -->

*  Pending Reviews are now correctly labeled under **System** > **User Roles** > **Add New Role** > **Role Resources**, and Magento now displays a new Pending reviews menu under **Marketing** > **User Content**. Previously, Magento displayed the Reviews menu twice.  *Fix submitted by Piyush Dankhara in pull request [20936](https://github.com/magento/magento2/pull/20936)*. [GitHub-20924](https://github.com/magento/magento2/issues/20924)

### Rewards

<!--- MAGETWO-91647 -->

*  Customers are now subscribed as expected to email notifications about reward points.

<!--- MAGETWO-96125 -->

*  Magento now allocates rewards points for converting an invitation to a customer when **Require Emails Confirmation** is set to **yes**.

<!--- ENGCOM-3491 -->

*  The order status label on the  customer order status page  can now be translated. *Fix submitted by p-bystritsk in pull request [19182](https://github.com/magento/magento2/pull/19182)*. [GitHub-14849](https://github.com/magento/magento2/issues/14849)

<!--- MAGETWO-91686 -->

*  `/V1/orders/{id}` now retrieves information about used reward points.

### Return Merchandise Authorizations (RMA)

<!--- MAGETWO-71022 -->

*  Magento now displays the correct amount in the **Remaining Quantity** field after Magento has processed a return.

<!--- MAGETWO-96158 -->

*  Return attributes that have the **Values Required** attribute  set to **no** no longer break the storefront display of those attributes.

<!--- MAGETWO-97259 -->

*  Administrators can now process returns when a request includes a required image attribute. Previously, the Return Items tab displayed a validation error even though the image had  been uploaded, and if you clicked on **Details**, Magento displayed this message: `Please select a file`.

<!--- MAGETWO-97132 -->

*  You can now return bundle products from the Admin. Previously, when you clicked Submit Returns, Magento displayed an informative error message, and did not create an RMA.

### Sales

<!--- MAGETWO-96441 -->

*  You can now remove a custom price from a product during order creation from the Admin.

<!--- ENGCOM-3294 -->

*  The message that Magento displays when a merchant tries to create a credit memo for an order with no shipping charges has been made more informative. *Fix submitted by Burlacu Vasilii in pull request [18844](https://github.com/magento/magento2/pull/18844)*. [GitHub-6731](https://github.com/magento/magento2/issues/6731)

<!--- ENGCOM-3048 -->

*  You can now print order information from the customer dashboard. Previously, when you tried to print  order information from the customer dashboard, Magento displayed this error: `Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php`. *Fix submitted by Pratik Oza in pull request [18272](https://github.com/magento/magento2/pull/18272)*. [GitHub-10530](https://github.com/magento/magento2/issues/10530)

<!--- ENGCOM-3074 -->

*  Magento no longer marks email as **not sent** when the email copy fails due to exception. Previously, Magento marked this email as not sent, and subsequently continued to resend the email. *Fix submitted by Petar Sambolek in pull request [18288](https://github.com/magento/magento2/pull/18288)*. [GitHub-17152](https://github.com/magento/magento2/issues/17152)

<!--- ENGCOM-3378 -->

*  The **Add to Cart** button in the Recently Ordered block now works as expected. *Fix submitted by Oleksandr Miroshnichenko in pull request [19039](https://github.com/magento/magento2/pull/19039)*. [GitHub-13157](https://github.com/magento/magento2/issues/13157)

<!--- ENGCOM-3514 -->

*  Magento now displays bundle products' child products on the **My Account** > **My Orders** > **View Order** page. *Fix submitted by Torben Höhn in pull request [19318](https://github.com/magento/magento2/pull/19318)*. [GitHub-16434](https://github.com/magento/magento2/issues/16434)

<!--- MAGETWO-94245 -->

*  You can now issue a partial refund to store credit for an order made with an online payment method.

<!--- MAGETWO-94472 -->

*  You can now create a credit memo for an order that contains taxes and discounts.  Previously, when you tried to create this credit memo, Magento displayed an informative error.

<!--- MAGETWO-91547 -->

*  You can now create a credit memo for an order with no payment required. Previously, when an order was placed with no payment required, the **Credit Memo** button was not displayed on the order.

<!--- MAGETWO-96488 -->

*  Orders for bundle products created from the Admin now display  correct product prices.

<!--- MAGETWO-63327 -->

*  Company logos are now displayed correctly in printed PDF versions of invoices and shipment statements.

<!--- MAGETWO-96400 -->

*  The Sales table now displays company information in billing and shipping addresses.

<!--- MAGETWO-96987 -->

*  Magento no longer adds giftwrap tax to a credit memo twice.

<!--- MAGETWO-94424 -->

*  Magento now displays product price and shipping costs in the default currency that was configured for that specific website for orders created from the Admin. Previously, when you have multi-site configuration with different default currencies for each website, the product and shipping prices shown while creating an admin order are incorrect.

<!--- ENGCOM-3828 -->

*  Magento now displays a success message when you create an order through the Admin and the **create shipment** and **Email copy of invoice** checkboxes are checked. *Fix submitted by Surabhi Srivastava in pull request [20142](https://github.com/magento/magento2/pull/20142)*. [GitHub-19942](https://github.com/magento/magento2/issues/19942)

<!--- ENGCOM-3887 -->

*  Files uploaded for custom options can now be downloaded even when the product option is no longer available. Previously, these files could not be downloaded.  *Fix submitted by Mahesh Singh in pull request [20354](https://github.com/magento/magento2/pull/20354)*. [GitHub-20277](https://github.com/magento/magento2/issues/20277)

<!--- ENGCOM-3699 -->

*  Fixed an incorrect class name on orders and returns page on the Admin. *Fix submitted by Shikha Mishra in pull request [19784](https://github.com/magento/magento2/pull/19784)*. [GitHub-19780](https://github.com/magento/magento2/issues/19780)

<!--- ENGCOM-3735 -->

*  Fixed misalignment of the **Update Qty** button on the sales order invoice. *Fix submitted by Kajal Solanki in pull request [19799](https://github.com/magento/magento2/pull/19799)*. [GitHub-19796](https://github.com/magento/magento2/issues/19796)

<!--- ENGCOM-3720 -->

*  Credit memos now accurately calculate refunds when default shipping charges are changed to zero. *Fix submitted by Wojtek Naruniec in pull request [19900](https://github.com/magento/magento2/pull/19900)*. [GitHub-19899](https://github.com/magento/magento2/issues/19899)

<!--- ENGCOM-3225 -->

*  The `transportBuilderByStore` class has been removed. Previously, this class was the cause of undesired repeat emails. *Fix submitted by gwharton in pull request [18471](https://github.com/magento/magento2/pull/18471)*. [GitHub-7739](https://github.com/magento/magento2/issues/7739)

<!--- ENGCOM-3452 -->

*  The `last_trans_id` column of the `sales_order_payment` table has been updated to handle the full order reference values for Amazon and Klarna extensions. *Fix submitted by Ian Cassidy in pull request [18620](https://github.com/magento/magento2/pull/18620)*. [GitHub-18615](https://github.com/magento/magento2/issues/18615)

<!--- ENGCOM-3594 -->

*  You can now programmatically  cancel an invoice when the invoice state is set to `STATE_PAID`. *Fix submitted by Max O in pull request [19462](https://github.com/magento/magento2/pull/19462)*. [GitHub-18509](https://github.com/magento/magento2/issues/18509)

<!--- MC-5683 -->

*  The performance of the Admin order creation page when handling many addresses has been improved.

<!--- ENGCOM-3484 -->

*  Magento now displays bundle options  on the Items Ordered tab of the My Account order page. *Fix submitted by Vishal Gelani in pull request [19254](https://github.com/magento/magento2/pull/19254)*. [GitHub-16434](https://github.com/magento/magento2/issues/16434)

<!--- ENGCOM-3755 -->

*  The email that customers receive after completing an order now contains tracking information for their order only. Previously, Magento included tracking information for other orders, too. *Fix submitted by Nazar in pull request [19981](https://github.com/magento/magento2/pull/19981)*. [GitHub-19887](https://github.com/magento/magento2/issues/19887)

### SalesArchive

<!--- MAGETWO-96022 -->

*  Archived orders no longer reappear in the Order Management table after cron runs.

### SalesRule

<!--- MAGETWO-91522 -->

*  The sales rule indexer now runs without error. Previously, the sales rule indexer  returned an error during reindexing because of the `Magento_AdvancedSalesRule` module.

<!--- ENGCOM-3773 -->

*  The payment method option is now displayed under the shopping cart rules condition tab. Previously, when you navigated to **Marketing** > **Promotions** > **Cart Price Rules** and opened the Conditions tab on a rule, Magento did not display payment method options. *Fix submitted by p-bystritsky in pull request [20042](https://github.com/magento/magento2/pull/20042)*. [GitHub-12549](https://github.com/magento/magento2/issues/12549)

### Search

<!--- MAGETWO-91742 -->

*  The default sort order field now works as expected on the Catalog Search results page.

<!--- MAGETWO-91537 -->

*  Searching for a synonym that contains a hyphen and number now returns the same results as any other search term in the group.

<!--- MAGETWO-97235-->

*  Layered navigation for Elasticsearch now includes all product sizes. If the **Filterable (with results)** option is set for a product attribute, then:

   *  Layered navigation includes only those filters for which matching products can be found.

   *  Any attribute value that already applies to all products shown in the list should still appear as an available filter.

   *  Attribute values with a count of zero (0) product matches are omitted from the list of available filters.

See [Filterable attributes](https://docs.magento.com/m2/ee/user_guide/catalog/navigation-layered-filterable-attributes.html) for more information.

<!--- MAGETWO-67779 -->

*  Full text search for Elasticsearch no longer includes the `date` attribute.

<!--- MAGETWO-97495 -->

*  Layered navigation results no longer include price ranges that contain no products.

<!--- ENGCOM-3526 -->

*  Magento now returns a customized layout handle when there are no results for a search. This customized layout handle supports the addition of custom blocks, which permits you to  change the layout of the No results page. *Fix submitted by Yevhenii Dumskyi in pull request [18069](https://github.com/magento/magento2/pull/18069)*. [GitHub-18038](https://github.com/magento/magento2/issues/18038)

<!--- ENGCOM-4045 -->

*  Elasticsearch now correctly returns only products whose SKUs contain dashes when your search criteria specifies SKUs that contain dashes. Previously, search results contained unmatched products as well as products whose SKUs contained dashes. *Fix submitted by Nazar in pull request [20727](https://github.com/magento/magento2/pull/20727)*. [GitHub-20716](https://github.com/magento/magento2/issues/20716), [GitHub-20689](https://github.com/magento/magento2/issues/20689), [GitHub-9988](https://github.com/magento/magento2/issues/9988)

### Shipping

<!--- ENGCOM-3148 -->

*  Magento now displays the appropriate error message when free shipping is not available for an order during check out. *Fix submitted by vaibhavahalpara in pull request [18507](https://github.com/magento/magento2/pull/18507)*. [GitHub-17977](https://github.com/magento/magento2/issues/17977)

<!--- MAGETWO-96218 -->

*  Shipments created through REST now return tracking information as expected. Previously, Magento created shipment notifications without a tracking number when a shipment was created using REST.

<!--- MAGETWO-91599 -->

*  Table rates now work as expected when using the AE code (Armed Forces Europe) when calculating weight vs destination table rates.

<!--- MAGETWO-91702 -->

*  Magento now uses  shipping table rates from the correct store in multistore deployments.

<!--- ENGCOM-3736 -->

*  Magento no longer throws an exception when a customer tries to place an order whose components will be shipped to different addresses. *Fix submitted by Govind Sharma in pull request [19941](https://github.com/magento/magento2/pull/19941)*. [GitHub-19940](https://github.com/magento/magento2/issues/19940)

<!--- ENGCOM-3960 -->

*  Fixed misalignment of elements on the shipping information page that Magento displays when you click **Check Out with Multiple Addresses** from the shopping cart. *Fix submitted by Arvinda Kumar in pull request [20564](https://github.com/magento/magento2/pull/20564)*. [GitHub-20563](https://github.com/magento/magento2/issues/20563)

<!--- MC-4245 -->

*  Magento now uses version 6.0 of the DHL XML Services schema for the DHL shipping method.

### Sitemap

<!--- ENGCOM-3040 -->

*  Sitemaps now display correct base URLs for multi-store deployments. *Fix submitted by Toan Nguyen in pull request [18228](https://github.com/magento/magento2/pull/18228)*. [GitHub-17999](https://github.com/magento/magento2/issues/17999)

### Staging

<!--- MAGETWO-91782 -->

*  An administrator  with a custom (limited) role can now edit and schedule  updates to CMS content pages.

<!--- MAGETWO-91662 -->

*  Shopping cart price is now updated as expected in staging preview mode.

<!--- MAGETWO-91566 -->

*  Restricted users with access to specified sections can now save a scheduled update. Previously, Magento threw a `forbidden` error.

<!--- MAGETWO-91525 -->

*  Updates containing zero objects are now removed as expected from the dashboard. Previously, Magento did not remove updates with zero objects.

<!--- MAGETWO-96106 -->

*  You can now successfully create a CMS static block and schedule it for a staging update. Previously, after the update, Magento displayed an empty container on top of the page instead of the CMS content block.

<!--- MAGETWO-95314 -->

*  Magento no longer throws an error when you use REST to update a product's special price if the product previously had a scheduled update to its special price or had a special price set from the Admin.

### Store

<!--- ENGCOM-1928 -->

*  The switcher-option's link `Magento/Store/view/frontend/templates/switch/languages.phtml` template has been modified to support navigating back to previous pages. Previously, you could not navigate back to the previous store view when you clicked the **Back** button when viewing the store on Firefox.  *Fix submitted by Mobecls in pull request [19037](https://github.com/magento/magento2/pull/19037)*. [GitHub-14007](https://github.com/magento/magento2/issues/14007)

<!--- ENGCOM-3408 -->

*  You can now define the `root_category_id` in the project `config.php`. *Fix submitted by Lars Roettig in pull request [18958](https://github.com/magento/magento2/pull/18958)*. [GitHub-18956](https://github.com/magento/magento2/issues/18956)

### Swatches

<!--- ENGCOM-3360 -->

*  Store views now show the correct swatch values. *Fix submitted by Malyovanets Nickolas in pull request [18988](https://github.com/magento/magento2/pull/18988)*. [GitHub-17890](https://github.com/magento/magento2/issues/17890)

<!--- MAGETWO-95310 -->

*  Product images now display the color option you chose when you applied a color filter in layered navigation. Previously, wrong colors were randomly displayed.

<!--- MAGETWO-59789 -->

*  You can now change the size of a swatch image as expected. [GitHub-6382](https://github.com/magento/magento2/issues/6382)

<!--- MAGETWO-94990 -->

*  All thumbnail images reload as expected after you click on a configurable option when a configurable product detail page has more than fourteen thumbnail images. Previously, not all thumbnail images reloaded.

<!--- ENGCOM-3920 -->

*  You can now change an attribute type from swatch to dropdown without using data.  Previously, changing an attribute type from swatch to dropdown deleted swatch options for all attributes. *Fix submitted by Pieter Hoste in pull request [20421](https://github.com/magento/magento2/pull/20421)*. [GitHub-20396](https://github.com/magento/magento2/issues/20396)

<!--- ENGCOM-3943 -->

*  Fixed styles on the Add Swatch page.

### TargetRule

<!--- MAGETWO-91708 -->

*  Magento no longer throws an exception when Target Rules are set to a rotation mode other than **SHUFFLE**. (You can set rotation modes in **Admin** > **System** > **Configuration** > **Catalog** > **Catalog** > **Rule-Based Product Relations**.)

<!--- MAGETWO-95708 -->

*  Magento no longer throws a fatal error when price is used in a Target Rule for actions.

### Tax

<!--- ENGCOM-3443 -->

*  The **Not yet calculated** string for the tax field in the checkout page's summary section  can now be translated. *Fix submitted by p-bystritsky in pull request [19174](https://github.com/magento/magento2/pull/19174)*. [GitHub-18939](https://github.com/magento/magento2/issues/18939), [GitHub-7849](https://github.com/magento/magento2/issues/7849)

<!--- MAGETWO-91769 -->

*  Credit memos now include only the taxes on the product itself as expected. Previously, the credit memo included the shipping tax as well even when shipping costs were not refunded.

<!--- MAGETWO-91639 -->

*  Tax is no longer added when a customer group is changed to **Valid VAT ID - Intra-Union**, which has no tax rules assigned to it.

<!--- MAGETWO-91521 -->

*  Tax reports now correctly calculate taxes for orders that are placed in a zip code that has two or more tax rates assigned.

<!--- ENGCOM-3564 -->

*  Magento no longer uses the default tax information set in **Stores** > **Configuration** > **Sales** > **Tax** customer, quote, and order data. *Fix submitted by Nirav Kadiya in pull request [19387](https://github.com/magento/magento2/pull/19387)*. [GitHub-16684](https://github.com/magento/magento2/issues/16684)

### Testing

<!--- ENGCOM-3036 -->

*  Integration tests now respect module status as defined in `config-global.php`.  This permits you to enable only the modules you typically keep enabled while still saving system resources. *Fix submitted by Pratik Oza in pull request [18201](https://github.com/magento/magento2/pull/18201)*. [GitHub-15196](https://github.com/magento/magento2/issues/15196)

<!--- ENGCOM-3293 -->

*  Unit test annotations now assert exception messages correctly. [GitHub-6731](https://github.com/magento/magento2/issues/6731)

### Theme

<!--- ENGCOM-3296 -->

*  You can now upload favicons and logo when editing headers for a store view. Previously, Magento threw an error. *Fix submitted by Wiard van Rijin pull request [18851](https://github.com/magento/magento2/pull/18851)*. [GitHub-18688](https://github.com/magento/magento2/issues/18688)

<!--- MAGETWO-91723 -->

*  The text attribute implemented on the product page within the mobile theme now fluidly displays the entire text value. Previously, long values were truncated.

<!--- MAGETWO-95805 -->

*  The user agent rule now sets correct templates for product pages. Previously, the `footer.phtml` and `absolute_footer.phtml` templates were loaded from the desktop theme instead of the mobile theme, regardless of the user agent.

<!--- MAGETWO-91651 -->

*  We've improved the display of the navigation menu on mobile deployments. Previously, Magento displayed only a portion of any submenu accessed from a top menu.

<!--- MAGETWO-91756 -->

*  Wishlist and compare links now appear for related products in portrait mode in mobile view.

<!--- MAGETWO-56094 -->

*  Text now remains in the header area when you resize a page in deployments that are running in Internet Explorer.

<!--- ENGCOM-3669 -->

*  Clicking on the store logo on the home page now reloads the page. *Fix submitted by gwharton in pull request [19198](https://github.com/magento/magento2/pull/19198)*. [GitHub-19142](https://github.com/magento/magento2/issues/19142)

<!--- ENGCOM-3871 -->

*  Fixed misalignment of the **Add to cart** button on the bundle product page in portrait orientation in mobile view.  *Fix submitted by Ajay Ajabale in pull request [20195](https://github.com/magento/magento2/pull/20195)*. [GitHub-20193](https://github.com/magento/magento2/issues/20193)

<!--- ENGCOM-3640 -->

*  Fixed alignment issue with sort results on list product page.  *Fix submitted by suryakant-krish in pull request [19640](https://github.com/magento/magento2/pull/19640)*. [GitHub-19639](https://github.com/magento/magento2/issues/19639)

<!--- ENGCOM-4033 -->

*  The `alt` attribute on the logo image is now properly escaped. *Fix submitted by Erik Pellikka in pull request [19270](https://github.com/magento/magento2/pull/19270)*. [GitHub-19269](https://github.com/magento/magento2/issues/19269)

### Translation and locales

<!--- ENGCOM-3423, 3375 -->

*  Child themes now inherit translations from their parent theme as expected (`en_US.csv` translation dictionary). *Fix submitted by Vladyslav Podorozhnyi in pull request [19018](https://github.com/magento/magento2/pull/19018) and  [19144](https://github.com/magento/magento2/pull/19144)*. [GitHub-17833](https://github.com/magento/magento2/issues/17833)

<!--- ENGCOM-3461 -->

*  Swedish (Finland) locales are now supported. *Fix submitted by p-bystritsky in pull request [19203](https://github.com/magento/magento2/pull/19203)*. [GitHub-13095](https://github.com/magento/magento2/issues/13095)

<!--- ENGCOM-3345 -->

*  The message that Magento displays when you successfully add a product to your cart or shopping list is now available in the i18n translation file. *Fix submitted by Ayaz Mittaqi in pull request [18938](https://github.com/magento/magento2/pull/18938)*. [GitHub-18931](https://github.com/magento/magento2/issues/18931)

### UI

<!--- ENGCOM-3300 -->

*  Removed use of the `escapeJS` method in  `app/code/Magento/SendFriend/view/frontend/templates/send.phtml`. *Fix submitted by Abrar Pathan in pull request [19053](https://github.com/magento/magento2/pull/19053)*. [GitHub-18887](https://github.com/magento/magento2/issues/18887)

<!--- ENGCOM-3267 -->

*  Fixed the misalignment of drop-down menus on the Advanced Pricing page. *Fix submitted by Ashutosh Srivastva in pull request [18790](https://github.com/magento/magento2/pull/18790)*. [GitHub-18775](https://github.com/magento/magento2/issues/18775)

<!--- ENGCOM-3463 -->

*  Magento no longer includes not-yet-visible new orders on the Orders page when you select all orders for a mass action (such as update or cancelation). Previously, when you selected all orders on the Orders page for a mass action, any new order simultaneously being placed on the storefront was included in the mass action. *Fix submitted by Yevhenii Dumskyi in pull request [19204](https://github.com/magento/magento2/pull/19204)*. [GitHub-18983](https://github.com/magento/magento2/issues/18983)

<!--- ENGCOM-3381 -->

*  You can now set default values for the WYSIWYG edit field for editing form UI components. *Fix submitted by Oleksandr Miroshnichenko in pull request [19048](https://github.com/magento/magento2/pull/19048)*. [GitHub-10048](https://github.com/magento/magento2/issues/10048)

<!--- ENGCOM-3330 -->

*  The global search icon on the Admin is now correctly aligned. *Fix submitted by Kajal Solanki in pull request [18940](https://github.com/magento/magento2/pull/18940)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)

<!--- ENGCOM-3037 -->

*  Merchants can now change the currency symbol back to its default value from the Admin in single-store mode. Previously, when a merchant tried to change this symbol back to its default value, Magento displayed a success message, but did not change the currency symbol back to the default value. *Fix submitted by Pratik Oza in pull request [18204](https://github.com/magento/magento2/pull/18204)*. [GitHub-17567](https://github.com/magento/magento2/issues/17567)

<!--- MAGETWO-91751 -->

*  Magento now correctly renders apostrophes as entered in text fields.

<!--- ENGCOM-3106 -->

*  Admin tables now work as expected when single-store mode is set to **on**. Previously, column positioning in these tables was not preserved when the page was refreshed. *Fix submitted by gwharton in pull request [18405](https://github.com/magento/magento2/pull/18405)*. [GitHub-12070](https://github.com/magento/magento2/issues/12070)

<!--- MAGETWO-91496 -->

*  WYSIWYG editor functionality is now available in all rows of the dynamic rows UI component. Previously, this functionality was available in the first row only.

<!--- ENGCOM-3509 -->

*  Fixed incorrect display of the pager on the My Orders page. Previously, the pager obscured page links, which prevented customers from navigating to other pages. *Fix submitted by Kajal Solanki in pull request [19298](https://github.com/magento/magento2/pull/19298)*. [GitHub-19286](https://github.com/magento/magento2/issues/19286)

<!--- ENGCOM-3371 -->

*  Usage of unsupported includes has been removed. Previously, when you chose a user to edit on the customers grid, Magento installations running on Internet Explorer 11.x did not load the expected page, but instead displayed this message: `object does not support method includes`.  *Fix submitted by Oleksandr Miroshnichenko in pull request [19010](https://github.com/magento/magento2/pull/19010)*. [GitHub-18562](https://github.com/magento/magento2/issues/18562)

### URL rewrites

<!--- MAGETWO-95539 -->

*  The storefront now properly displays the order of categories when you move categories in the Admin.

<!--- MAGETWO-91531 -->

*  Product URLs are now based on the configuration information from the Admin, not the order of records in the database. Previously, the order of records in the database affected the generated URL, and some products showed category paths for product URLS when **Use Categories Path for Product URLs** was set to **no**.

<!--- ENGCOM-3925 -->

*  The import process now retains permanent redirects for outdated product URLs as expected. Previously, the import process removed these redirects, and when you tried to open the changed product by the old URL key,  Magento displayed a 404 page. *Fix submitted by Ankur in pull request [20344](https://github.com/magento/magento2/pull/20344)*. [GitHub-20282](https://github.com/magento/magento2/issues/20282)

### VAT

<!--- ENGCOM-4108 -->

*  Greek VAT numbers can now be validated. *Fix submitted by Pieter Hoste in pull request [20548](https://github.com/magento/magento2/pull/20548)*. [GitHub-6960](https://github.com/magento/magento2/issues/6960)

### Visual Merchandiser

<!--- MAGETWO-91602 -->

*  Visual Merchandiser now correctly sorts configurable product prices in Tile view.

### Web API

<!--- MAGETWO-70532 -->

*  The response for `GET V1/orders/:orderId` now contains `bundle_option` and `product_option` information as expected.

<!--- MAGETWO-69021 -->

*  All extension attributes listed in the documentation for `salesOrderRepositoryV1` API are now available.

<!--- ENGCOM-3834 -->

*  Access restrictions on the order API are now enforced as expected. Previously, adminstrators with restricted privileges had complete access to orders. *Fix submitted by Milind Singh in pull request [20170](https://github.com/magento/magento2/pull/20170)*. [GitHub-20169](https://github.com/magento/magento2/issues/20169)

### Wishlist

<!--- MAGETWO-95311 -->

*  Magento no longer retains entries for deleted products in the database `wishlist_item_option` table.

<!--- MAGETWO-91667 -->

*  You can now add a configurable product with no options  to a gift registry from a wishlist.

<!--- ENGCOM-3922 -->

*  You can now remove a comment from a wishlist product as expected. Previously, Magento did not remove the comment, even after you clicked **Update Wish List**. *Fix submitted by Khodu in pull request [20247](https://github.com/magento/magento2/pull/20247)*. [GitHub-20245](https://github.com/magento/magento2/issues/20245)

<!--- ENGCOM-3912 -->

*  Corrected misalignment of the Edit and remove item links on the wish list page when displayed  on a screen with a resolution of 640 x 767. *Fix submitted by Nainesh Waghale in pull request [20400](https://github.com/magento/magento2/pull/20400)*. [GitHub-20399](https://github.com/magento/magento2/issues/20399)

<!--- ENGCOM-3569 -->

*  Pagination controls on the wishlist page have been restored. *Fix submitted by Ratnesh Kumar in pull request [19305](https://github.com/magento/magento2/pull/19305)*. [GitHub-19292](https://github.com/magento/magento2/issues/19292)

## Known issues

**Issue**:  Cart Price rules that were created with undefined end dates (that is, with the **To** field left empty) are not displayed as expected on the Staging dashboard after after upgrading from Magento Open Source to Magento Commerce 2.3.1. <!--- MC-15317-->

**Issue**: The Web Setup Wizard is not available from the Admin under these conditions:

*  base URLs are set to HTTP.

*  **Use Secure URLs in Admin** is set to **on**.

*  HTTPS is disabled.

**Workaround**: You must enable HSTS from **Stores** > **General** > **Web** > **BaseUrls (Secure)**. <!--- MC-15003-->

**Issue**: For Inventory Management, asynchronous migration of data between sources will encounter issues due to changes in Asynchronous APIs with topic names reflecting PHP class and method names. **Workaround**: We recommend using synchronous operations, setting **Run asynchronously** to "No". To configure, see [Configure Global Options](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-options-global.html) in the Magento User Guide.

**Issue**:  The CGI URL gateway in the UPS module has been updated from HTTP to HTTPS. Consequently, the UPS shipping method does not populate correctly. **Workaround**: Confirm that the Gateway URL uses the HTTPS protocol in the [UPS Shipping Method Configuration](https://docs.magento.com/m2/ee/user_guide/configuration/sales/shipping-methods.html). <!--- MAGETWO-98947-->

*Updating an existing setting*:
If UPS Type is set to `United Parcel Service` in the UPS Shipping Method Configuration, you must manually change the protocol of the Gateway URL from HTTP to HTTPS. Example: `https://www.ups.com/using/services/rave/qcostcgi.cgi`

*To configure UPS for the first time*:

*  Navigate to **Stores**  > **Settings**  > **Configuration**  >  **Sales**  > **Shipping Methods**. Then, expand the **UPS** section.

*  At the **UPS Type** field, clear the Use system value checkbox. Then, change **UPS Type** to `United Parcel Service XML`. The Gateway URL populates correctly when this value is selected.

*  Tap **Save Config**.

**Issue**: The Async/Bulk Web APIs support only the default store view. A hot fix for this issue will be available in the near future. This issue has been resolved with the Scope parameter for Async/Bulk API patch, which is now available. See [Patch for Magento Framework Message Queue and Store Scopes](https://community.magento.com/t5/Magento-DevBlog/Patch-for-Magento-Framework-Message-Queue-and-Store-Scopes/ba-p/135209) for a full discussion of this scope-related issue and patch contents.

**Issue:** You cannot use the Magento Extension Manager to install extensions purchased from the Magento Marketplace. **Workaround**: Install extensions from the command line as described in [General CLI installation]({{ site.baseurl }}/extensions/install/). See [Extension Manager shows no extensions in Magento Commerce 2.3.x](https://support.magento.com/hc/en-us/articles/360043980352).

## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-1-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-1-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.1  using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
