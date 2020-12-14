---
group: release-notes
title: Magento Commerce 2.3.3 Release Notes
---

*Patch code and release notes published on October 8, 2019 and last updated on June 3, 2020.*

Magento Commerce 2.3.3 offers significant platform upgrades, substantial security changes, and PSD2-compliant core payment methods.

This release includes over 170 functional fixes to the core product and  over 75 security enhancements. It includes over 200 contributions from our community members. These contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

{% include install/pre-release.md %}

## New security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.3) provides. Patch 2.3.2.2 (Composer package 2.3.2-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.2.

**If you have already upgraded to the pre-release version of this patch (2.3.2-p1), we strongly recommend that you upgrade to 2.3.2-p2 as soon as possible.**  Patch 2.3.2-p2 contains the critical security fixes that are included in Magento  2.3.3, 2.2.10, 1.9.4.3, and 1.14.4.3, but that are not included in patch 2.3.2-p1.

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.2-p1), see [Install Magento using Composer](https://devdocs-beta.magento.com/guides/v2.3/install-gde/composer.html#get-the-metapackage).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.

## Download and run the DB_CLEANUP_SCRIPT.php script

This hotfix addresses an issue with [CVE-2019-8118](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8118) that was included in Magento 2.3.3 and 2.2.10. While the original fix for that bug stopped the logging of failed login attempts, information collected prior to updating to these current versions may still exist, and previous, unpatched versions of Magento may still have this issue. This hotfix provides a script that clears the login attempts that were previously collected. **We recommend that all merchants download and run this script**. See [Remove failed login attempts from the database](https://support.magento.com/hc/en-us/articles/360040209352) for information on how to download and run this database clean-up script.

## Apply the Catalog pagination issue on Elasticsearch 6.x patch to resolve a critical search result pagination issue

This patch resolves issues that users of Magento 2.3.3 experience in deployments where  Elasticsearch 6.x is used as the catalog search engine.
Users who attempt to navigate past the first page of search results are unsuccessful, and Magento displays an error message. After this patch is installed, users will be able to page through all search results. See [Applying patches](https://devdocs.magento.com/guides/v2.3/comp-mgr/patching.html) for specific instructions on downloading and applying Magento patches. To find the patch, navigate to [Tech Resources](https://magento.com/tech-resources/download), and select the 'Catalog pagination issue on Elasticsearch 6.x' patch associated with the version of Magento you are running.

## Apply the EmailMessageInterface backward compatibility issue patch to resolve an email interface backward-incompatibility issue

This patch addresses backward-incompatibility issues that extension developers may have experienced after the introduction of `Magento\Framework\Mail\EmailMessageInterface`,  which was released in Magento 2.3.3. In the scope of this patch, the new `EmailMessageInterface` inherits from the old `MessageInterface`, and core modules are changed back to rely on `MessageInterface`. **Merchants should apply this patch as soon as possible, especially if their deployments include extensions or customizations that use the mail interface**.

See [Applying patches](https://devdocs.magento.com/guides/v2.3/comp-mgr/patching.html) for specific instructions on downloading and applying Magento patches. To find the patch, navigate to [Tech Resources](https://magento.com/tech-resources/download), and select the EmailMessageInterface backward compatibility issue  patch associated with the version of Magento you are running.

## Apply the Method chaining fix for product collection patch to resolve an issue with broken method chaining in some extensions

This patch addresses changes that were introduced in Magento 2.3.3 that resulted in problems with extensions and customizations of the product collection feature that rely on method chaining contracts. The `addAttributeToFilter` method (in file `app/code/Magento/Catalog/Model/ResourceModel/Product/Collection.php`) was refactored without a return statement, which broke the method chaining that is used extensively in customizations of this feature. This patch refactors the method to add the missing return statement and ensure that method chaining works as expected.

See [Applying patches](https://devdocs.magento.com/guides/v2.3/comp-mgr/patching.html) for specific instructions on downloading and applying Magento patches. To find the patch, navigate to [Tech Resources](https://magento.com/tech-resources/download), and select the Method chaining fix for product collection patch associated with the version of Magento you are running.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

*  PSD2 compliance to core payment methods
*  Fixes for 75 critical security issues
*  Significant platform-security enhancements that boost XSS (cross-site scripting) protection against future exploits. This effort is the culmination of several months of concentrated effort on Magento's part to reduce our backlog of security enhancements.

#### Core payment methods integrations are now compliant with PSD2 regulations

The European Union recently revised the Payment Services Directive (PSD) regulation with an updated version – PSD2. This revised regulation goes into effect on September 14, 2019, and will significantly affect  most payment processing involving credit cards or bank transfers.  See the Magento Forum DevBlog post [3D Secure 2.0 changes](https://community.magento.com/t5/Magento-DevBlog/3D-Secure-2-0-changes/ba-p/136460) for more information on Magento Payment Provider Recommendations and a wealth of links to PSD2 regulation discussions.

This release contains the following major PSD-related changes:

*  The **Braintree payment method now complies with PSD2 regulations**. Its core integration API has been upgraded to the latest JavaScript SDK v3 API, which is a requirement for supporting native Braintree 3D Secure 2.0 adoption. Braintree transactions are now also verified by using the native Braintree 3D Secure 2.0 service.

*  Authorize.net now provides the ability, through the `cardholderAuthentication` request field, to make 3D Secure verification through third-party services such as CardinalCommerce. Starting with this release, **Authorize.net accept.js integration will support 3DS 2.0 through CardinalCommerce**.

<!--- MAGETWO-99739 -->

*  The Cybersource and eWay payment modules have been deprecated in this release to comply with PSD2 SCA regulation, which takes effect on September 14, 2019. Use the official Marketplace extensions for these features instead.

#### Security enhancements and fixes to core code

*  **75 security enhancements**  that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.3-2.2.10-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.3.3) have been ported to 2.2.10, 1.14.4.3, and 1.9.4.3, as appropriate.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following upgrades to core platform components boost platform security and support PCI compliance:

<!--- MC-14862-->

*  Magento 2.3.3 now supports **PHP 7.3.x (tested with PHP 7.3.8) and PHP 7.2.x (tested with 7.2.21)**.

<!--- MC-14863-->

*  Magento now supports **Varnish 6.2.0**.

<!--- MC-14912-->

*  Zend Framework 2 Components have been upgraded to the Active/LTS versions. See [Support and Long Term Support Policies](https://framework.zend.com/long-term-support) for a discussion of Zend Framework long-term support policy.

### Performance boosts

<!--- MC-4244-->

*  Merchants now have the ability to turn off the automatic URL rewrite generation that occurs by default on products when the category they belong to is saved. The new **Generate "category/product" URL Rewrites**  configuration option controls this behavior. When this feature is enabled, Magento will generate a lot of data when saving a category that contains many assigned products. This generated data is saved into rewrite tables that can degrade Magento performance.

<!--- MC-15763-->

*  Page load speeds have been improved by moving non-critical CSS elements to the bottom of the page. This enables the browser to render and display a storefront page more quickly. This setting is disabled by default, but you can enable it using **Stores** > **Configuration** > **Advanced** > **Developer** > **CSS Settings** > **Use CSS critical path**. For more information, see [CSS critical path documentation]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-critical-path.html).

<!--- MC-16887-->

*  The `jQuery/ui` library has been refactored into separate widgets so that core modules load only the widgets they need. This update improves the performance of core storefront tasks including the loading of category, configurable product, home, and checkout pages. Magento recommends that module developers update custom storefront code to remove the `jquery/ui` dependency. Otherwise, a performance degradation warning message might be displayed in the console.

<!--- MC-16046-->

*  Store pages now display text in readable system fonts while loading custom fonts, which significantly increases page load speed. Merchants who deploy stores that implement large CSS files and many fonts will notice the greatest improvement.

### Infrastructure improvements

This release contains  enhancements to core quality, which improve the quality of the Framework and these modules: `Catalog`, `Sales`, `Checkout/One Page Checkout`,  `UrlRewrite`, `Customer`, and `Ui`. Here are some additional core enhancements:

*  The WYSIWYG editor has been upgraded to TinyMCE v. 4.9.5​.

### Merchant tool enhancements

<!--- MC-15298-->

As part of our efforts to better understand the Admin user experience and improve product design, Magento is introducing the tracking of user actions and events on the Admin. After you upgrade to Magento 2.3.3, the first administrative user who logs into the Admin will be prompted to **Allow admin usage data collection**. If the user agrees to data collection, the data captured from Admin activity is sent to Adobe Analytics for analysis and reporting. Typical events include page views, save actions, and changes to Magento mode. See Store Admin for more information.

### Page Builder

Page Builder enhancements for this release include:

*  Upgrade to TinyMCE v4.9.5, which improves the experience of editing inline.
*  Admin users can now explicitly define product order.
*  Managing HTML content has been made easier for non-technical users.

### Inventory Management enhancements

Fixes to multiple  bugs. See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html).

### GraphQL

Expanded GraphQL functionality and improved coverage for PayPal payment integrations, gift cards, and store credit features. Added mutations and queries that support these tasks:

*  Process payments through PayPal Express checkout, Payflow Pro and Link Express Checkout, and other supported PayPal payment methods, Authorize.net, and Braintree
*  Redeem gift cards and convert to store credit balance for logged-in users
*  Update shopping carts for guest users to apply or remove gift cards and check card balance
*  Update shopping carts to apply or remove store credit and check store credit balance
*  Add configurable products to cart

See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

PWA Studio 4.0.0 contains new hooks in Peregrine. Existing components have also been refactored to convert them into re-useable Peregrine hooks. For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### Google Shopping ads Channel

The Google Shopping ads Channel Marketplace extension is now available as a bundled extension.

### Magento Shipping

Due to the impending shutdown of Temando (the provider of the technology behind Magento Shipping), it is no longer possible to create a new Magento Shipping account. Support for current Magento Shipping deployments for all existing customers will continue. For detailed status information and recommendations for new shipping implementations in Magento, see our product information page.

This release of Magento Shipping includes:

*  Improvements to batch-order processing, carrier integration, shipping method preview in the shipping portal, checkout.

*  Support for bundled products and prepackage options.

See [Magento Shipping](https://docs.magento.com/m2/ee/user_guide/shipping/magento-shipping.html).

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It introduces a new vendor-supplied extension—Yotpo.

#### Amazon Pay

Amazon Pay is now compliant with the PSD2 directive for UK and Germany. See [Payment services (PSD 2) - Directive (EU)](https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en) for an introduction to PSD2.

#### dotdigital

*  Improved product catalog sync for bundled and custom products.

*  Enhanced communications for abandoned cart.

#### Klarna

*  Merchants can now disable the sending of customer information.

*  New options now support B2B transactions in select markets.

*  PayBright, a Canadian payment coverage option, is now supported.

See [Klarna](https://docs.magento.com/m2/ee/user_guide/payment/klarna.html).

#### Vertex

*  Added support for Vertex Flexible Fields. Vertex flexible fields allow merchants to send additional information to the tax engine, which  can then be used in Tax Assist Rules to refine a product’s applicable tax.

*  Several attributes are provided by default, including administrator-created Customer attributes, Address attributes, and Product attributes. Documentation is provided in the module’s README file on how integrators can add additional options to these attributes.

<!--- BUNDLE-2151-->

*  You can now add custom fields to the Vertex connector.

#### Yotpo

The [Yotpo](https://www.yotpo.com) user-generated content management platform is now integrated with the Magento Admin. Yotpo provides tools for merchants to gather, curate, and manage user-generated content such as product reviews. For more information on configuring and launching Yotpo from the Admin, see Yotpo Product Reviews.

## Backward-incompatible Changes

This release introduces a new, immutable `EmailMessageInterface` that supports the sending of multi-part MIME-type content in email. The  `Magento\Framework\Mail\Template\TransportBuilder` and `Magento\Newsletter\Model\Queue\TransportBuilder` structures were refactored to use this new `EmailMessageInterface` instead of `MessageInterface`, which was previously used. If you are a Magento extension developer and rely on `\Magento\Email\Model\Transport::getMessage()` or `\Magento\Framework\Mail\TransportInterface::getMessage()`, those methods will now return the new `EmailMessageInterface`.

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.3 core code.

### Installation, upgrade, deployment

<!--- MAGETWO-99616-->

*  Magento font icons now load as expected when deployment optimization is implemented.

<!--- ENGCOM-5056-->

*  The short form versions of the `—lock-env`  and  `—lock-config`  `bin/magento config:set` options now work as expected. *Fix submitted by Satya Prakash in pull request [22720](https://github.com/magento/magento2/pull/22720)*. [GitHub-22395](https://github.com/magento/magento2/issues/22395)

<!--- ENGCOM-5184-->

*  Magento now displays an exception message when an error occurs during static content deployment. Previously, if an error occurred, Magento showed the stack trace only. *Fix submitted by Ihor Sviziev in pull request [22884](https://github.com/magento/magento2/pull/22884)*. [GitHub-22882](https://github.com/magento/magento2/issues/22882)

<!--- ENGCOM-5002-->

*  You can now use JSON to  set a configuration value for a configuration option through the command line. *Fix submitted by Shikha Mishra in pull request [22513](https://github.com/magento/magento2/pull/22513)*. [GitHub-22396](https://github.com/magento/magento2/issues/22396)

<!--- MC-18052 -->

*  The `\Magento\Setup\SplitDbTest::testUpgradeWithSplitDb` command no longer fails by default.

<!--- MC-18697-->

*  PHP unit tests no longer fail by default when Magento is installed from Composer.

<!--- ENGCOM-5241-->

*  Removed the obsolete `system.xml` file from the `app/code/Magento/Theme/etc` directory. *Fix submitted by Alexander Taranovsky in pull request [23140](https://github.com/magento/magento2/pull/23140)*. [GitHub-23138](https://github.com/magento/magento2/issues/23138)

<!--- ENGCOM-5187-->

*  Magento now displays a more informative message when a data patch cannot be applied due to an exception. *Fix submitted by Ash Smith in pull request [23046](https://github.com/magento/magento2/pull/23046)*. [GitHub-23045](https://github.com/magento/magento2/issues/23045)

<!--- ENGCOM-5264-->

*  The static content deployment progress bar now works as expected. *Fix submitted by Amit Vishvakarma in pull request [23216](https://github.com/magento/magento2/pull/23216)*. [GitHub-23213](https://github.com/magento/magento2/issues/23213)

<!--- ENGCOM-5395-->

*  The `setup:upgrade` command now throws an exception if the `app:config:import` command fails. *Fix submitted by Simon Frost in pull request [23310](https://github.com/magento/magento2/pull/23310)*.

<!--- ENGCOM-5441-->

*  Fields that have been disabled through configuration settings (**Admin** > **Stores** > **Configuration** > **General** > **General** > **Store Information**) can no longer be overwritten from the Admin. *Fix submitted by Rafael Kassner in pull request [22891](https://github.com/magento/magento2/pull/22891)*. [GitHub-22890](https://github.com/magento/magento2/issues/22890)

<!--- ENGCOM-4644-->

*  The Magento installation process no longer checks for `dev php` extension dependencies from non-root `composer.json` files. *Fix submitted by Oleksii Lisovyi in pull request [22116](https://github.com/magento/magento2/pull/22116)*  [GitHub-21136](https://github.com/magento/magento2/issues/21136)

<!--- ENGCOM-5098-->

*  Parallel execution of static content deployment has been improved to prevent errors and make it more stable. *Fix submitted by David Alger in pull request [22607](https://github.com/magento/magento2/pull/22607)*. [GitHub-21852](https://github.com/magento/magento2/issues/21852)

<!--- ENGCOM-5500-->

*  Magento now runs an additional check when determining the password hashing algorithm to use for the libsodium library to see if it supports `argon2id`. The `bin/magento` command did not run successfully if the version of libsodium that you were running did not include `argon2id` support. *Fix submitted by Matei Stefanescu in pull request [23866](https://github.com/magento/magento2/pull/23866)*. [GitHub-23405](https://github.com/magento/magento2/issues/23405)

### AdminGWS

<!--- MAGETWO-99801-->

*  An administrator with permission to a website now has access to the theme configuration for the website. Previously, administrators with website permission could update only the theme for the store view that is associated with a website, not the theme for the website itself.

<!--- MAGETWO-99062-->

*  Administrators with role scope set to **custom** can now view roles and user information.

<!--- MAGETWO-99711-->

*  Administrators with restricted access to Catalog and Content can now mass-update products. Previously, when an administrator tried to mass-update products, Magento did not update the products, and displayed an empty menu for **Stores**.

<!--- MAGETWO-98256-->

*  An administrator with access rights to one website only in a multisite deployment can now mass-update products for that website only. Previously, this administrator could mass-update products on any website in the deployment.

<!--- MAGETWO-99411-->

*  An administrator with restricted privileges can now successfully create a catalog price rule. Previously, a restricted administrator could create a catalog price rule, but when they saved it, Magento displayed an error and did not generate any scheduled update to set the new price rule to inactive.

<!--- MC-17879-->

*  Magento now applies the correct role scope for administrators in multisite deployments. (Post data is now saved in the session and re-rendered for a user only if the validation fails.)  Previously, when you had two administrative roles with different website scopes, and you viewed one role before saving it and opening the second role, the website scope attributed to the second role was incorrectly taken from the first role.

<!--- MC-18148-->

*  Administrators with restricted permissions can now edit companies. Previously, even when the administrator had restricted but appropriate permission to edit companies, Magento displayed this error: `The requested company is not found`.

<!--- MC-18070-->

*  Administrators that have access to all websites can now see a complete list of websites, stores, and store views no matter which edit operations  that a administrator with restricted access might perform. Additionally, any edit operation done by another admin user with limited access (for example, limited to one website) will not affect the fully privileged account. Previously, administrators with full access could not see the full list for all websites after an administrator with limited website-level access makes updates.

<!--- MAGETWO-97867-->

*  We have improved the Admin login performance for users with limited permissions. Previously, the Admin login process for users with restricted access was significantly slower than it was for users with full administrative access.

### Backend

<!--- MC-17275-->

*  The Magento Admin now loads without issue after you change the store domain or set cookies to a different domain. Previously, the page did not redirect as expected.

<!--- MC-17675-->

*  The Admin no longer displays incorrect currency codes when the default base currency differs from the default website currency.

<!--- MC-17609-->

*  The store view drop-down menu no longer displays unnecessary symbols.

### Bundle products

<!--- MAGETWO-99371-->

*  You can now successfully check out bundle products using the Braintree payment method with the payment method set to **Authorize and Capture**.

<!--- ENGCOM-5360-->

*  Discount coupons now work as expected for bundle products that include both virtual and simple products when the **Ship Bundle Items** setting is set to **Separately**. *Fix submitted by Nikolay Sumrak in pull request [22987](https://github.com/magento/magento2/pull/22987)*.

### B2B

<!--- MAGETWO-99846-->

*  The `Magento_SharedCatalog::manage` role is now defined in the `acl.xml` file.

<!--- MAGETWO-99325-->

*  Magento now maintains custom prices for products in both the catalog and shopping cart after a quote is recalculated. Previously, the product price reverted to the default price after you recalculated the quote.

<!--- MAGETWO-91614-->

*  You can now successfully filter customer by status in the **Customers** > **All Customers** table. Previously, Magento threw an SQL error and displayed this message: `Something went wrong with processing the default view and we have restored the filter to its original state`.

<!--- MAGETWO-99436-->

*  Magento now displays the category tree as expected when you choose **Set Pricing and Structure** on a new shared catalog.

<!--- MAGETWO-99379-->

*  You can now create a new company account from the storefront in the same amount of time it takes to create an account from the Admin. Previously, it took much longer to create a new company account on the storefront.

<!--- MAGETWO-94004-->

*  You can now successfully configure bundle, grouped, and configurable products from the Admin when shared catalogs are enabled and you have added products to an order by SKU.

<!--- MAGETWO-98825-->

*  Magento now correctly applies category permissions depending upon the scope values you set. Previously, when you enabled shared catalogs for only one website in a multi-site deployment, Magento applied catalog permissions globally instead of to the designated website only.

<!--- MC-16245-->

*  Export files now include all columns (including those not visible in the Company list) and their data. Previously, the `State/Province` columns of the exported CSV file were empty.

<!--- MC-15524-->

*  Magento no longer displays the **Created/Last Updated from-to** fields for quotes that are not associated with the administrator that is currently logged in.

<!--- MC-17642-->

*  Magento now displays an informative message when a customer adds an empty SKU to their shopping cart with Quick Order. Previously, users could not navigate to another page during the process, and Magento did not display a message to the user.

<!--- MC-18481-->

*  Magento now correctly updates SKU quantities when you use Quick Order and manually enter a SKU in the **Enter Multiple SKUs** field when using Internet Explorer 11.x.

<!--- MC-18565-->

*  Magento now correctly calculates the total product quantity when you enter multiple SKU values in Quick Order.

<!--- MAGETWO-97316-->

*  The behavior of the Catalog page Requisition list menu has been corrected

<!--- MAGETWO-99871-->

*  Magento now issues a single request to the server when you change the shipping address for an order to a non-default address. Previously, Magento issued multiple requests to the server when you changed the shipping address, which negatively affected performance.

<!--- MAGETWO-99368-->

*  Non-administrative users who have been granted access privileges to catalogs and shared catalogs now also have access to the menu that permits them to manage these catalogs. Previously, these non-Admin users had permission to access the shared catalog, but not the menu that would permit them to manage the shared catalog.

<!--- MAGETWO-99123-->

*  Guests can now access available product options for a configurable product when one of its simple product options is out of stock but the configurable product is listed as in-stock in the shared catalog. Previously, under these circumstances, the options drop-down menu for the configurable product was empty, which prevented guests from ordering available options.

<!--- MAGETWO-99302-->

*  The State/Province drop-down menu available from the Admin Edit Customer form no longer lists duplicate entries for states and provinces.

<!--- MAGETWO-71835-->

*  The Shared Catalog column tooltip on the Admin product list now sorts values alphabetically

<!--- MAGETWO-71309-->

*  Magento no longer highlights quote totals on draft quotes.

<!--- MC-17276-->

*  Magento now recalculates cart subtotals as expected when one of the ordered products that belongs to a shared catalog  is disabled from the Admin. Previously, when you reloaded the cart after one of its products had been disabled, Magento reloaded the cart page with this exception: `Exception #0 (Magento\Framework\Exception\NoSuchEntityException): The product that was requested doesn't exist. Verify the product and try again`.

<!--- MC-15900-->

*  Magento now successfully saves customer segments after you have deleted a customer from the Admin. Previously, Magento threw an error and displayed this message: `We can't save the segment right now`.

### Cache

<!--- MC-14863-->

*  Varnish cache support has been upgraded for compatibility with version 6.2.0.

<!--- MAGETWO-98650-->

*  Full-page cache no longer clears out the checkout session data on uncached pages when the `Magento_Persistent` module is disabled. [GitHub-21614](https://github.com/magento/magento2/issues/21614)

<!--- MAGETWO-54438-->

*  Magento now displays simple products on the storefront after the cancellation of an order that contains the bundled simple product. Previously, products did not appear on the storefront after an order containing the bundle product to which the simple product belongs was canceled.

<!--- ENGCOM-5143-->

*  The Varnish health check no longer fails to the presence of `id_prefix` in `env.php`. Previously, Varnish returned a `503 Backend fetch failed` error. *Fix submitted by Nazar Klovanych in pull request [22307](https://github.com/magento/magento2/pull/22307)*. [GitHub-22143](https://github.com/magento/magento2/issues/22143)

### Cart and checkout

<!--- MAGETWO-97317-->

*  The REST calls for adding an item to a cart (`POST V1/guest-carts/:cartId/items` and `POST V1/guest-carts/:cartId/items`) now include the product price when a call returns the product from an already populated cart. Previously, the item price was not returned if that cart had been emptied before the call was made.

<!--- MAGETWO-99075-->

*  Magento now submits an order only once when an order is submitted using **Enter**. Previously, Magento submitted several `payment-information` requests, and several orders with the same quote ID were placed.

<!--- MAGETWO-48570-->

*  Products added to a shopping cart through REST now display correct product prices. Previously, the shopping cart displayed product prices of zero. [GitHub-2991](https://github.com/magento/magento2/issues/2991)

<!--- MC-17755-->

*  Magento now displays an informative message when an error is thrown after the user Internet connection has been reset after placing an order.

<!--- MAGETWO-99370-->

*  You can now add product quantities that require four digits to the shopping cart. Previously, Magento could not add four-digit product quantities to the cart.

<!--- ENGCOM-4126-->

*  Administrators with appropriate permissions can now view the contents of a cart for a registered customer from the Admin customer edit interface. *Fix submitted by Rav in pull request [20918](https://github.com/magento/magento2/pull/20918)*.

<!--- ENGCOM-5071-->

*  Magento now applies the sort preferences that you set in website scope configuration for a particular website to the layout of the checkout page. Previously, sort order for elements of this page was derived from the default configuration, not website-specific values. *Fix submitted by Karan Shah in pull request [22387](https://github.com/magento/magento2/pull/22387)*. [GitHub-22380](https://github.com/magento/magento2/issues/22380)

<!--- MC-17808-->

*  The Review & Payment section of the One Page Checkout no longer displays custom customer attribute code when a guest checks out.

<!--- MC-18281-->

*  The checkout order summary now displays the correct number of ordered items.

<!--- ENGCOM-5357-->

*  The minicart loader is now visible when you add a product to the minicart. *Fix submitted by Geeta Modi in pull request [23394](https://github.com/magento/magento2/pull/23394)*. [GitHub-23377](https://github.com/magento/magento2/issues/23377)

<!--- ENGCOM-5026-->

*  Magento no longer throws an array-to-string conversion error when a customer changes the country setting from one-page checkout. Instead, shipping method, tax values, and payment providers now change according to country selection. Previously, Magento displayed an error about array-to-string conversion. *Fix submitted by Grzegorz Bogusz in pull request [22558](https://github.com/magento/magento2/pull/22558)*. [GitHub-12612](https://github.com/magento/magento2/issues/12612)

<!--- ENGCOM-5026-->

*  Magento now validates the VAT number as expected during checkout when the customer address region field is empty. Previously, Magento threw an informative error: `Internal Error. Details are available in Magento log file` if the `regionId` was not set. *Fix submitted by Grzegorz Bogusz in pull request [22558](https://github.com/magento/magento2/pull/22558)*. [GitHub-22556](https://github.com/magento/magento2/issues/22556),

<!--- ENGCOM-5443-->

*  Magento now creates an invoice for an order that has a zero subtotal when **Automatically Invoice All Items** is set to **yes**. *Fix submitted by Eden Duong in pull request [23688](https://github.com/magento/magento2/pull/23688)*. [GitHub-23211](https://github.com/magento/magento2/issues/23211)

### Cart Price rules

<!--- ENGCOM-5086-->

*  Coupon codes now work as expected. Previously, coupons sent for specific dates in a cart price rule were not applied. *Fix submitted by Adarsh Shukla in pull request [22718](https://github.com/magento/magento2/pull/22718)*. [GitHub-18183](https://github.com/magento/magento2/issues/18183)

### Catalog

<!--- MAGETWO-99890-->

*  You can now use the Select all option when creating a mass-update action when the total number of products exceeds the number of displayed products per page. Previously, Magento only selected and applied mass-update actions to the number of products that were displayed per page. *Fix submitted by Shikha Mishra in pull request [22704](https://github.com/magento/magento2/pull/22704)*. [GitHub-22004](https://github.com/magento/magento2/issues/22004)

<!--- MAGETWO-63599-->

*  Magento no longer throws an error when you run the `php bin/magento catalog:images:resize` command on a  deployment that contains images with a zero byte size. Instead, the operation skips the offending file and updates the log file to indicate where the problematic file resides. [GitHub-8204](https://github.com/magento/magento2/issues/8204)

<!--- MAGETWO-98708-->

*  You can now successfully clone a product with a linked product. Previously, cloning  failed and Magento displayed this error:  `The linked products data is invalid. Verify the data and try again`.

<!--- MC-17706 -->

*  A product that belongs to a category where the permissions do not allow adding it to cart can now be added to the cart from a different category. Previously, you could not add a product to the cart if one of the categories to which it belongs does not permit adding it the cart.

<!--- MAGETWO-98804 -->

*  Magento now displays the correct currency in the the Admin **Catalog** > **Products**  list  in deployments where websites are assigned different currencies. Previously, the products on the Admin Category page displayed the base currency even when **Product Price Scope** was set to **Per Website** and the website was assigned a different currency.

<!--- MAGETWO-69893-->

*  Magento disables the **New Category** button on the Product page if the user is an administrator with restricted permissions for managing categories. Previously, the button was active, and Magento threw a 403 error if the restricted user clicked the button to create a category.

<!--- MC-17640-->

*  The Items Ordered table (**Admin** > **Sales** > **Orders**) no longer displays bundle option discount amounts with tags.

<!--- MC-17218-->

*  Magento now creates resized images for all products for which images exist and lists the errors when you run the `php bin/catalog:image:resize` command. Previously, execution halted at the first missing image.

<!--- MC-17387-->

*  You can now add a bundle product from a wishlist to your shopping cart. Previously, Magento threw a fatal error.

<!--- MAGETWO-92712-->

*  The `\Magento\Catalog\Model\CategoryList::getList` operation now returns a sorted list of categories as expected.

<!--- MAGETWO-70599-->

*  The Admin Product Edit page and Customers page now load without JavaScript errors. [GitHub-5967](https://github.com/magento/magento2/issues/5967)

<!--- MAGETWO-64923-->

*  A duplicated product that has been set to **Is in Stock** and **Enabled** now appears as expected on the storefront.

<!--- MAGETWO-59400-->

*  An invalid join condition in Product Flat Indexer has been refactored, and product relations are now correctly joined by the `entity_id` field. Previously, products were joined incorrectly during catalog re-indexing when staging was enabled.

<!--- MAGETWO-99587-->

*  Custom options prices that are assigned to a website scope no longer rewrite prices on all scopes.

<!--- MAGETWO-59978-->

*  Videos in product descriptions now appear as they do in the Admin WYSIWYG editor. Previously, videos in the storefront product descriptions had the incorrect height.

<!--- MAGETWO-59431-->

*  Sample data now scales correctly when resized in mobile view.

<!--- ENGCOM-5371-->

*  Customers no longer receive product alerts after they have unsubscribed from product alerts. Previously, the product alert was not removed from the `product_alert_stock` table as expected, but Magento still displayed this message on the storefront: **You will no longer receive stock alerts for this product**. *Fix submitted by yuriichayka in pull request [23459](https://github.com/magento/magento2/pull/23459)*. [GitHub-22814](https://github.com/magento/magento2/issues/22814)

<!--- ENGCOM-5387-->

*  Magento no longer automatically assigns a `storeID` to a saved product that is not assigned to a store. *Fix submitted by manishgoswamij in pull request [23500](https://github.com/magento/magento2/pull/23500)*. [GitHub-23383](https://github.com/magento/magento2/issues/23383), [GitHub-23500](https://github.com/magento/magento2/issues/23500)

<!--- ENGCOM-5410-->

*  Corrected misspellings in the `lib/web/css/docs/source/_actions-toolbar.less` and  `lib/web/css/docs/source/_layout.less` files. *Fix submitted by Prashant Sharma in pull request [22624](https://github.com/magento/magento2/pull/22624)*.

<!--- ENGCOM-5067-->

*  Magento now displays the currency code as expected in the Cost column of the Admin catalog product list. *Fix submitted by Vlad Veselov in pull request [22739](https://github.com/magento/magento2/pull/22739)*. [GitHub-20906](https://github.com/magento/magento2/issues/20906)

<!--- MAGETWO-99489-->

*  The **Add to Cart** button is no longer visible to users who do not have Add to Cart category permissions. Previously, guest users could add items to the cart without being granted Add to Cart permission.

<!--- MC-5777-->

*  Catalog rules are now applied as expected in deployments that are running Magento Commerce. Previously, there was a discrepancy between the time zone in which catalog rule staging was set (UTC timezone) and the Magento timezone, which is the time zone that the storefront uses.

<!--- MC-17020-->

*  We’ve refined how Magento validates partial permissions. Design edit permissions for categories, products, and CMS pages are now validated for each endpoint (web API and other) outside of the related model-layer classes. The web API now returns an error when design-related fields are being overridden. Previously, this behavior was ignored.

<!--- MC-10966-->

*  Product availability is no longer tied to events associated with the categories to which they belong. Instead, Magento now uses the current category event for the page on which the product is displayed. Previously, products that were tied to categories with no events could be purchased, and products that were tied to expired events could not be purchased.

<!--- MC-17765-->

*  Magento now renames images with the same name in the `pub/media/catalog/category` directory. Previously, images with the same name that belonged to different categories were not uploaded properly. [GitHub-23376](https://github.com/magento/magento2/issues/23376)

<!--- ENGCOM-5063-->

*  Magento now displays a validation alert message when you click **Add Attribute**, and then click **Add selected** without first selecting an attribute. Previously, when you clicked **Add selected**, Magento selected all possible attributes. *Fix submitted by Mahesh Singh in pull request [22724](https://github.com/magento/magento2/pull/22724)*. [GitHub-22639](https://github.com/magento/magento2/issues/22639)

<!--- ENGCOM-5419-->

*  The catalog products filter now filters on enabled or disabled status as expected. Previously, the SQL generated by the `Magento\Catalog\Ui\DataProvider\Product\ProductCollection` class omitted the `attribute_id` condition, which resulted in any attribute of the same type (`int` or `varchar`, for example) matching the query if the values were the same. *Fix submitted by Matti Vapa in pull request [23444](https://github.com/magento/magento2/pull/23444)*. [GitHub-23435](https://github.com/magento/magento2/issues/23435)

<!--- ENGCOM-5134-->

*  `ProductRepository` now updates and saves existing products with changed SKUs as expected. Previously, Magento threw an error, and you were not able to save the product. *Fix submitted by Pavel Bystritsky in pull request [22933](https://github.com/magento/magento2/pull/22933)*. [GitHub-22870](https://github.com/magento/magento2/issues/22870)

<!--- ENGCOM-5439-->

*  You can now change the position of the last two related products in a list of related products that spans multiple pages. Previously, drag and drop functionality allowed you to change only the position of products  on the current page. *Fix submitted by Maxim Tkachuk in pull request [22984](https://github.com/magento/magento2/pull/22984)*. [GitHub-14071](https://github.com/magento/magento2/issues/14071)

<!--- ENGCOM-4591-->

*  The **Select from gallery** button on the category edit page now works as expected. Previously, the image was not saved, and Magento did not display an image in the image preview. *Fix submitted by Bartłomiej Szubert in pull request [21131](https://github.com/magento/magento2/pull/21131)*. [GitHub-19872](https://github.com/magento/magento2/issues/19872), [GitHub-22092](https://github.com/magento/magento2/issues/22092)

### CatalogInventory

<!--- MAGETWO-99941-->

*  The status (in stock or out of stock) of a configurable product in the Admin now matches the status displayed on the storefront.

<!--- MAGETWO-99585-->

*  Magento now correctly updates the `qty_backordered` value in the  `sales_order_item` table after you create an order that contains a backordered item.

<!--- MC-17513-->

*  Stock status records for all products are now added as expected  to the `cataloginventory_stock_status` table after a partial re-indexing.

### Catalog rule

<!--- MAGETWO-99592-->

*  You can now use Visual Merchandiser to drag and drop products without losing product information. Previously, all discounts for products in the affected category were lost after dragging and dropping products

<!--- MAGETWO-99873-->

*  Coupon expiration dates now match the end date of the staging update the coupons are assigned to.

<!--- MC-17460-->

*  Coupon expiration dates and times now match the `end_date` value set in the staging update. Previously, coupon expiration dates could differ from the expiration date set by the sales rule.

<!--- MC-18254-->

*  The CatalogRule module now handles discrepancies between the Magento time zone offset and the system time zone offset (which is in UTC). Previously, when the Magento time zone offset was greater than the system time zone offset, the active ranges set for special prices were inaccurate. This is a consequence of how  catalog price rules special prices are stored and updated. (Catalog price rules special prices are stored in the `catalogrule_product_price` table. This table’s daily update is triggered by the `catalogrule_apply_all` cron job, which is scheduled at 01:00 every day. Cron schedule times are scheduled in Magento timezone.)

### Cleanup and simple code refactoring

<!--- ENGCOM-3817-->

*  Corrected poor positioning  of the Shop By menu on product pages in mobile view on an iPhone 5. *Fix submitted by Arvinda Kumar in pull request [20135](https://github.com/magento/magento2/pull/20135)*. [GitHub-20124](https://github.com/magento/magento2/issues/20124)

<!--- ENGCOM-4840-->

*  Corrected misalignment of Wishlist and Compare icons on the product page. *Fix submitted by sanjaychouhan-webkul in pull request [22532](https://github.com/magento/magento2/pull/22532)*. [GitHub-22527](https://github.com/magento/magento2/issues/22527)

<!--- ENGCOM-4788-->

*  Store view-specific labels are no longer truncated in the left navigation menu of the Cart Price Rule Store View Specific Labels window (**Marketing** > **Cart Price rule** > **Labels** ). *Fix submitted by Sudhanshu Bajaj in pull request [22423](https://github.com/magento/magento2/pull/22423)*. [GitHub-22406](https://github.com/magento/magento2/issues/22406)

<!--- ENGCOM-5059-->

*  Added missing header to the Customer Sales Order table and corrected multiple typos. *Fix submitted by Vishal Sutariya in pull request [22643](https://github.com/magento/magento2/pull/22643)*. [GitHub-22641](https://github.com/magento/magento2/issues/22641)

<!--- ENGCOM-5054-->

*  Improved awkward formatting of the customer account create page in mobile view. *Fix submitted by Arvinda Kumar in pull request [22656](https://github.com/magento/magento2/pull/22656)*. [GitHub-22647](https://github.com/magento/magento2/issues/22647)

<!--- ENGCOM-5061-->

*  The checkbox on the Add New Tax Rule form has been redesigned to match the Admin checkbox. *Fix submitted by Surabhi Srivastava in pull request [22655](https://github.com/magento/magento2/pull/22655)*. [GitHub-22640](https://github.com/magento/magento2/issues/22640)

<!--- ENGCOM-5281-->

*  Corrected typo in CONTRIBUTING.md. *Fix submitted by Raul E Watson in pull request [23244](https://github.com/magento/magento2/pull/23244)*.

<!--- ENGCOM-5408-->

*  Corrected poor spacing in the Gift message section of the My Account page. *Fix submitted by Amjad M in pull request [23226](https://github.com/magento/magento2/pull/23226)*. [GitHub-22950](https://github.com/magento/magento2/issues/22950)

<!--- ENGCOM-5344-->

*  The asterisk sign indicating a required field is now consistently positioned throughout the Admin. *Fix submitted by sanjaychouhan-webkul in pull request [22800](https://github.com/magento/magento2/pull/22800)*. [GitHub-22638](https://github.com/magento/magento2/issues/22638)

<!--- ENGCOM-5326-->

*  Corrected misspelling in the `app/code/Magento/Ui/Block/Wrapper.php` file. *Fix submitted by Ravi Chandra in pull request [23335](https://github.com/magento/magento2/pull/23335)*.

<!--- ENGCOM-5287-->

*  Corrected typo in the tooltip toggle selector. *Fix submitted by Karla Saaremäe in pull request [23248](https://github.com/magento/magento2/pull/23248)*.

<!--- ENGCOM-5068-->

*  Corrected misalignment of the Compare Products and My Wish List counters in the sidebar. *Fix submitted by sanjaychouhan-webkul in pull request [22742](https://github.com/magento/magento2/pull/22742)*. [GitHub-22676](https://github.com/magento/magento2/issues/22676)

<!--- ENGCOM-5089-->

*  Corrected scrolling behavior on Product page. Previously, after you clicked on a product reviews count on a product page, you had to scroll in order to see customer reviews. *Fix submitted by sanjaychouhan-webkul in pull request [22794](https://github.com/magento/magento2/pull/22794)*. [GitHub-21558](https://github.com/magento/magento2/issues/21558)

<!--- ENGCOM-5126-->

*  Magento now displays the  cursor to the right of the search keyword box as expected after multiple clicks on the search field in mobile view. *Fix submitted by sanjaychouhan-webkul in pull request [22795](https://github.com/magento/magento2/pull/22795)*. [GitHub-22736](https://github.com/magento/magento2/issues/22736)

<!--- ENGCOM-5125-->

*  Refactored the page title of the billing agreements page. *Fix submitted by Amit Vishvakarma in pull request [22876](https://github.com/magento/magento2/pull/22876)*. [GitHub-22875](https://github.com/magento/magento2/issues/22875)

<!--- ENGCOM-3817-->

*  The Shop By Menu no longer overlays the **Sort By** label on the product listing page. *Fix submitted by Arvinda Kumar in pull request [20135](https://github.com/magento/magento2/pull/20135)*. [GitHub-20124](https://github.com/magento/magento2/issues/20124)

<!--- ENGCOM-5124-->

*  Adjusted the position of the store-view label on **Admin** > **Content** > **Design** > **Configuration** > **Theme**. *Fix submitted by Kajal Solanki in pull request [22926](https://github.com/magento/magento2/pull/22926)*. [GitHub-22924](https://github.com/magento/magento2/issues/22924)

<!--- ENGCOM-5376-->

*  Fixed spacing issue on **Admin** > **System** > **Import**. *Fix submitted by Kajal Solanki in pull request [21128](https://github.com/magento/magento2/pull/21128)*.

<!--- ENGCOM-5340-->

*  Fixed misspelling in the `app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php` file. *Fix submitted by Ravi Chandra in pull request [23366](https://github.com/magento/magento2/pull/23366)*.

<!--- ENGCOM-5342-->

*  Removed unnecessary `<span>` element from the **Test connection** button. *Fix submitted by Shankar Konar in pull request [23367](https://github.com/magento/magento2/pull/23367)*.

<!--- ENGCOM-5291-->

*  The `lib/internal/Magento/Framework/Mview/View.php` file has been refactored to improve readability. *Fix submitted by Lukasz Bajsarowicz in pull request [23240](https://github.com/magento/magento2/pull/23240)*.

### CMS content

<!--- MAGETWO-99695-->

*  Corrected alignment of the search suggestion panel with the **Advance reporting**  button. *Fix submitted by webkul-ajaysaini in pull request [22520](https://github.com/magento/magento2/pull/22520)*. [GitHub-22506](https://github.com/magento/magento2/issues/22506)

<!--- MC-5527-->

*  You can now remove text that is placed adjacent to a TinyMCE4 widget.

### Configurable products

<!--- MAGETWO-99443-->

*  Magento now validates the uniqueness of attribute option values during product creation. Previously, Magento did not save the product and displayed this error: `The value of Admin must be unique`.

<!--- MAGETWO-99550-->

*  The design of the tax rule form check box now matches the Admin checkbox design.

<!--- ENGCOM-4844-->

*  The configurable product gallery now displays images in the correct order when the image list has more than 10 images. The correct order complies with the order assigned in the Admin. *Fix submitted by Mateusz Wira in pull request [22287](https://github.com/magento/magento2/pull/22287)*. [GitHub-22249](https://github.com/magento/magento2/issues/22249)

<!--- MAGETWO-99500-->

*  You can now use the `POST V1/configurable-products/:sku/child` call to assign positions to configurable product attributes as expected. Previously, when you use REST to assign positions to configurable product attributes, the position value was overwritten after you linked simple products to the configurable product.

<!--- ENGCOM-4825-->

*  Setting the **Update Product Preview Image** to **no**  now works as expected. Previously, when you clicked on a size or image that represented  another variation for a configurable product, Magento displayed the image for one of the simple products associated with the configurable product. *Fix submitted by Ravi Chandra in pull request [19184](https://github.com/magento/magento2/pull/19184)*. [GitHub-16446](https://github.com/magento/magento2/issues/16446)

<!--- ENGCOM-5385-->

*  The `POST V1/configurable-products/:sku/options` call now adds attribute options to a configurable product as expected. This resolves issues previously caused by the  MySQL table imposing a unique constraint on `product_id` and  `attribute_id` values. *Fix submitted by Lieven Pouwelse in pull request [23529](https://github.com/magento/magento2/pull/23529)*. [GitHub-9798](https://github.com/magento/magento2/issues/9798)

### Coupon

<!--- ENGCOM-5292-->

*  The **Apply** button now functions as expected when you create a new order and apply a coupon from the Admin. Previously, clicking **Apply** removed the coupon instead of applying it. *Fix submitted by Gaurav Agarwal in pull request [23250](https://github.com/magento/magento2/pull/23250)*. [GitHub-23238](https://github.com/magento/magento2/issues/23238)

### Cron

<!--- ENGCOM-5210-->

*  Runtime exception handling for cron jobs has been improved. Now, when an exception occurs, the current run is marked as **failed** in the `cron_schedule`  table. Then, when the next run completes correctly, Magento updates job status at the end of the `cron_schedule` table. Previously, when a job failed, the `cron_schedule`  table was filled with pending jobs; the `indexer_update_all_views` job was not run; no output was sent to the `var/log/cron.log` file, and no status updates were appended to the `cron_schedule` table.

<!--- ENGCOM-5335-->

*  Cron jobs are no longer duplicated. Previously, after a cron job was run, Magento cleared the cache and processed the job again. *Fix submitted by Douglas Radburn in pull request [23312](https://github.com/magento/magento2/pull/23312)*.

<!--- MC-18477-->

*  Consumers run from `cron` no longer create deadlocks in the database.

<!--- ENGCOM-5099-->

*  The `magento_newrelicreporting_cron` cron job now successfully completes as expected. Previously, `magento_newrelicreporting_cron` threw this error: `Warning: Invalid argument supplied for foreach() in /var/www/shop_test/src/www/vendor/magento/module-configurable-product/Model/ResourceModel/Product/Type/Configurable/Product/Collection.php on line 83`.

### Customer

<!--- MAGETWO-99647-->

*  Custom customer address attributes are populated with the * values that have been assigned for the selected  address when the **Same As Billing Address** setting is disabled. Previously, when a merchant tried to change an address while creating an order from the Admin, the drop-down menu of available addresses was not populated.

<!--- MAGETWO-99493-->

*  The account status list now updates as expected to correctly indicate the account lock status after `cron` is run. Previously, this list displayed status as unlocked only.

<!--- MAGETWO-99496 -->

*  You can now create and successfully save a customer attribute when the **Use in Filter Options** and **Use in Search Options** settings are set to **no**. Previously, Magento did not display these attributes, and they could not be edited.

<!--- MAGETWO-99355 -->

*  You can now create a customer segment that exceeds 1,500,000 customers. Previously, Magento threw a 500 error when you tried to create a customer segment that large.

<!--- MAGETWO-88905-->

*  Import checks now finish successfully when the csv file contains a customer `gender` field. Previously, Magento threw this error:  `Value for gender attribute contains incorrect value, see acceptable values on settings specified for Admin in row(s): 1`.

<!--- MAGETWO-93522-->

*  Custom customer attributes are now always displayed in the Admin customer create and edit forms. Previously, the Admin did not display these attributes unless they were configured to show on either the Customer Registration or Customer Account Edit forms. [GitHub-14456](https://github.com/magento/magento2/issues/14456)

<!--- MAGETWO-99584-->

*  You can now create an order from the Admin when  you have a customer segment for customers with 0 or more orders. Previously, if you had a customer segment for customers with 0 or more orders, an SQL error occurred when you tried to create an order in the Admin.

<!--- MC-17769-->

*  You can now create an order from the Admin with a customer segment based on zero  or more orders and the table prefix is specified. Previously, Magento threw an error when you tried to create an order from the Admin under these conditions.

<!--- MC-18250-->

*  The **Phone Number** field is now marked as required on the My account page.

<!--- ENGCOM-5378-->

*  Magento no longer displays editable text fields for customer phone numbers and zip codes if customers have not saved an address. *Fix submitted by Kazim Noorani in pull request [23494](https://github.com/magento/magento2/pull/23494)*.

<!--- ENGCOM-5048-->

*  Magento no longer duplicates the state/province fields of customer addresses in Admin forms. *Fix submitted by Shikha Mishra in pull request [22637](https://github.com/magento/magento2/pull/22637)*. [GitHub-22484](https://github.com/magento/magento2/issues/22484)

<!--- ENGCOM-4581-->

*  Newly created customer accounts now require confirmation. Previously, Magento directly confirmed the new account even if the customer never logged in or confirmed the account. *Fix submitted by Maksym Novik in pull request [21394](https://github.com/magento/magento2/pull/21394)*. [GitHub-14492](https://github.com/magento/magento2/issues/14492)

### Custom customer attributes

<!--- MAGETWO-99451-->

*  Custom customer address attribute values are populated as expected when an administrator changes a customer address during order creation from the Admin. Previously, the custom attribute drop-down was empty.

<!--- MC-17928-->

*  You can now edit a customer address from the Admin (**Admin** > **Customer** > **Address** > **Edit Address**) when the customer address attribute is of type `file` or `image`. Previously, Magento did not display the Edit Address form when you clicked on **Edit Address**.

### Database media storage

<!--- ENGCOM-5469-->

*  The PDF logo file is now database-aware. Consequently, logo images always appear on PDF invoices, even after the local `pub/media` directory is cleared. *Fix submitted by gwharton in pull request [23752](https://github.com/magento/magento2/pull/23752)*. [GitHub-23751](https://github.com/magento/magento2/issues/23751)

<!--- ENGCOM-5431-->

*  The `bin/magento catalog:images:resize` command is now database-media-storage-mode aware. As a result, resized images are now extracted from the database if they don’t exist locally prior to resizing, and are now stored back into the database once the resize operation completes. *Fix submitted by gwharton in pull request [23598](https://github.com/magento/magento2/pull/23598)*. [GitHub-23595](https://github.com/magento/magento2/issues/23595), [GitHub-23594](https://github.com/magento/magento2/issues/23594), [GitHub-23596](https://github.com/magento/magento2/issues/23596)

<!--- ENGCOM-5442-->

*  The  **use default value** checkbox on the Media Storage Location configuration setting has been removed. Previously, the JavaScript routines on the page interfered with that option, and consequently, the checkbox could be enabled but was still ignored. *Fix submitted by gwharton in pull request [23710](https://github.com/magento/magento2/pull/23710)*. [GitHub-23597](https://github.com/magento/magento2/issues/23597)

<!--- ENGCOM-4828 4802-->

*  Transactional email now copies the configured email logo image from the database when the logo file does not exist in the local `pub/media` directory. Previously,  emails used the default LUMA logo if it did not exist in the local directory. *Fix submitted by gwharton in pull requests [21675](https://github.com/magento/magento2/pull/21675) and [21674](https://github.com/magento/magento2/pull/21674)*. [GitHub-21672](https://github.com/magento/magento2/issues/21672)

<!--- ENGCOM-5198-->

*  Magento now copies any image needed for the Admin Product Edit page from the database to local storage as needed. Previously, if the image was not in local storage, Magento used a placeholder image. *Fix submitted by gwharton in pull request [21605](https://github.com/magento/magento2/pull/21605)*. [GitHub-21604](https://github.com/magento/magento2/issues/21604), [GitHub-21546](https://github.com/magento/magento2/issues/21546)

### Directory

<!--- MAGETWO-99424-->

*  The country drop-down list no longer includes an extraneous zero (0) when the allowed countries in the list differ from countries identified as top destinations. [GitHub-23141](https://github.com/magento/magento2/issues/23141)

### Downloadable products

<!--- ENGCOM-5157-->

*  Downloadable products are now immediately accessible after they have been paid for. Previously, a downloadable product’s status remained in the pending state after payment for the product has been completed. *Fix submitted by Shikha Mishra in pull request [22658](https://github.com/magento/magento2/pull/22658)*. [GitHub-22545](https://github.com/magento/magento2/issues/22545)

<!--- MAGETWO-98656-->

*  New downloadable products now appear in the downloadable products section after a customer checks out as a guest and then creates an account.

### EAV

<!--- MC-17505-->

*  Starting and ending spaces are now trimmed from phone numbers before JavaScript validation. Previously, Magento did not trim these spaces and displayed this error: `*Phone Number* contains non-numeric characters`.

<!--- MC-17623-->

*  You can now  save multiselect and select attribute options when swatches modules are disabled. [GitHub-23326](https://github.com/magento/magento2/issues/23326)

### Email

<!--- ENGCOM-5433-->

*  Email created using a CSS-heavy template is now sent successfully. Previously, these emails were rejected by the server with this message:  `Message too big`. *Fix submitted by gwharton in pull request [23649](https://github.com/magento/magento2/pull/23649)*. [GitHub-23643](https://github.com/magento/magento2/issues/23643)

<!--- ENGCOM-5090-->

*  The Template Preview tab now loads with the default content that was assigned during the creation of a New Shipment email template as expected. Previously, the Template Preview tab did not load the default content. *Fix submitted by Gaurav Agarwal in pull request [22791](https://github.com/magento/magento2/pull/22791)*. [GitHub-22788](https://github.com/magento/magento2/issues/22788)

<!--- ENGCOM-5393-->

*  All emails are now sent with correct MIME encoding. *Fix submitted by gwharton in pull request [23535](https://github.com/magento/magento2/pull/23535)*.

### Frameworks

<!--- MC-14912-->

*  Zend Framework 2 Components have been upgraded to the Active/LTS versions. See [Support and Long Term Support Policies](https://framework.zend.com/long-term-support) for a discussion of Zend Framework long-term support policy.

<!--- MAGETWO-99888-->

*  The `equalArrays` function in `lib/web/mage/utils/compare.js` file has been refactored to remove quadratic complexity. Previously, this feature significantly slowed Admin operations that were performed on large number of products  (for example, adding a product to category by SKU).

<!--- MC-17583-->

*  The performance of resize image operations has been improved. Previously, an SQL operation involved in the process returned redundant data, which resulted in images being saved multiple times.

<!--- MAGETWO-99140-->

*  The error message that Magento displays when the user creates an attribute that starts with the reserved word `container` has been improved. For example, when a user created product attributes named  `container_attributename` and `attributename`, Magento threw this error: `Exception in Magento/Framework/View/Element/UiComponentFactory.php` rather than stating which user behavior was causing the system problem.

<!--- ENGCOM-3260-->

*  The Magento Framework API now has a module manager to detect module features and support enablement of third-party modules. *Fix submitted by Navarr Barnier in pull request [18748](https://github.com/magento/magento2/pull/18748)*.

#### JavaScript framework

<!--- MAGETWO-99535-->

*  The cursor on the email field of the login page now behaves as expected when running Magento on Safari. Previously, the cursor repeatedly moved to the end of the email address field when you tried to edit this field.

<!--- ENGCOM-5118-->

*  Magento now displays previously missing validation messages on the storefront when JavaScript errors are caught by validation scripts in DatePicker form elements. *Fix submitted by Ravi Chandra in pull request [21397](https://github.com/magento/magento2/pull/21397)*. [GitHub-3795](https://github.com/magento/magento2/issues/3795)

### General fixes

<!--- MAGETWO-93061-->

*  Magento now displays the correct content for a selected store  in multi-site deployments where the websites have the same URL but the CMS pages have different content.

<!--- MAGETWO-99677-->

*  Enabling a product now clears the full-page cache for PDP if the product is not assigned to a category.

<!--- MAGETWO-36337-->

*  The **Save in address book** checkbox on the Shipping Address section of the Admin Create Order page now behaves as expected. When this checkbox is enabled, the address in the Shipping Address field is saved, and merchants can disable or enable the checkbox.

<!--- MAGETWO-70681-->

*  Updated the length for the `store_name` field used in `sales_order` database table. The field length has been extended from 32 to 255 symbols.

<!--- MC-17511-->

*  Preloading of fonts has been moved from the Blank theme to the Luma theme.

<!--- ENGCOM-5171-->

*  Magento no longer includes canceled orders when calculating how many times a coupon code has been used. *Fix submitted by Pavel Bystritsky in pull request [20579](https://github.com/magento/magento2/pull/20579)*. [GitHub-12817](https://github.com/magento/magento2/issues/12817)

<!--- ENGCOM-5022-->

*  Code Sniffer no longer marks correctly aligned DocBlock elements as code style violations. *Fix submitted by Pavel Bystritsky in pull request [22444](https://github.com/magento/magento2/pull/22444)*. [GitHub-22317](https://github.com/magento/magento2/issues/22317)

<!--- ENGCOM-5066-->

*  Tier prices can now be float values. Previously, Magento converted float percentage values to `int` before saving it. *Fix submitted by Maksym Novik in pull request [19584](https://github.com/magento/magento2/pull/19584)*. [GitHub-18651](https://github.com/magento/magento2/issues/18651)

<!--- MC-18094-->

*  Full page cache works as expected for non-default store views.

<!--- MC-18270-->

*  Magento no longer creates a persistent cart session for logged-in users when the persistent cart feature has been disabled. Previously, Magento did not empty shopping carts for users when the user logged out.

<!--- ENGCOM-5375-->

*  The unused namespace import was removed from the  `CartTotalRepository.php` file. *Fix submitted by Ulyana Kiklevich in pull request [23457](https://github.com/magento/magento2/pull/23457)*.

<!--- MC-17934-->

*  The back-in-stock alert emails that Magento sends to both wholesale and general customers now include the appropriate  wholesale and general  product prices.

<!--- MC-14837-->

*  The `MsrpSampleData` module installation script no longer generates incorrect data. Previously, this installation script did not set any data from fixtures due to incorrect dependencies between sample data modules.

<!--- ENGCOM-5377-->

*  Tooltips have been added to the store-view labels for CMS tables and blocks. *Fix submitted by Dipesh Rangani in pull request [23474](https://github.com/magento/magento2/pull/23474)*.

<!--- ENGCOM-5390-->

*  Validation of `max-word` data now works as expected for forms. *Fix submitted by Sunil in pull request [23541](https://github.com/magento/magento2/pull/23541)*.

<!--- ENGCOM-5267-->

*  Magento now subscribes a customer to a price or stock notification when they opt to subscribe to a  price or  stock alert on a product page without first logging in. Previously, Magento redirected the customer  to a 404 page. *Fix submitted by Arjen Miedema in pull request [23218](https://github.com/magento/magento2/pull/23218)*.

<!--- ENGCOM-5228-->

*  The sendfriend feature now verifies product visibility as expected. Previously, this  feature verified product status only. *Fix submitted by Mateusz Wira in pull request [23118](https://github.com/magento/magento2/pull/23118)*. [GitHub-23053](https://github.com/magento/magento2/issues/23053)

<!--- ENGCOM-5135-->

*  Search input is no longer missing the `aria-expanded`  required attribute. Previously, the W3C HTML validator threw errors for the `#search` element. *Fix submitted by Geeta Modi in pull request [22942](https://github.com/magento/magento2/pull/22942)*. [GitHub-18337](https://github.com/magento/magento2/issues/18337)

<!--- ENGCOM-5129-->

*  The **Use Default Value** check boxes on the Advanced Pricing  pop-up window  now remain checked on both the **Special From** and **Special To** dates,  and display the values set in the All Store scope. *Fix submitted by Mahesh Singh in pull request [22521](https://github.com/magento/magento2/pull/22521)*. [GitHub-22511](https://github.com/magento/magento2/issues/22511)

<!--- ENGCOM-5300-->

*  The Recently Viewed feature now accurately lists the products and category paths that the user has recently visited. Previously, this list was inaccurate when the **Use Categories Path for Product URLs**  setting was disabled. *Fix submitted by Atish Goswami in pull request [22650](https://github.com/magento/magento2/pull/22650)*. [GitHub-13227](https://github.com/magento/magento2/issues/13227)

<!--- MC-16233-->

*  The **Be the First to Review Product** link now directs the user to the product review form at the bottom of the product page as expected in deployments that include Page Builder.

<!--- MC-19684-->

*  You can now set the **minute** values for Analytics data collection (**Store** > **Configuration** > **General** > **Advanced Reporting**). Previously, due to an earlier fix that has now been reverted (see [GitHub-8258](https://github.com/magento/magento2/issues/8258)), validation failed when you set a value that exceeded 24.

<!--- ENGCOM-4843-->

*  The `getProductUrl()` method now returns the product URL for a specified website. Previously, this method did not let you retrieve the product URL for a specified website in multisite deployments. *Fix submitted by Nazar Klovanych in pull request [21876](https://github.com/magento/magento2/pull/21876)*. [GitHub-4247](https://github.com/magento/magento2/issues/4247)

### Gift cards accounts

<!--- MC-17124-->

*  Magento no longer creates a new gift card after issuing an online refund for another card. Previously, Magento created a new gift card account and sent the customer the previous gift card code and a new code.

<!--- MAGETWO-99367-->

*  All strings on storefront gift card messages can now be translated.

<!--- MAGETWO-99425-->

*  Magento no longer closes an order that is paid for with the partial redemption of a gift card. Previously, if an order is paid partially using gift card, and a partial refund is issued for that order, the order becomes closed.

### Gift registry

<!--- MC-18540-->

*  Magento no longer displays a console error during checkout when the cart contains a product from the gift registry. Previously, due to a missing function, Magento displayed this error: `checkout-data-resolver.js:248 Uncaught TypeError: addrs.isDefaultBilling is not a function`.

### Google Tag Manager

<!--- MAGETWO-99026-->

*  `getLoadedProductCollection()` has been refactored to support PHP 7.2.

### Image

<!--- ENGCOM-4838-->

*  You can now programmatically  move an image to the gallery using the  `addImageToMediaGallery` method with `$move`. Previously, when you tried to move an image programmatically, Magento threw this exception: `[InvalidArgumentException] File 'pub/media/import/' doesn't exist`. *Fix submitted by dudzio12 in pull request [22020](https://github.com/magento/magento2/pull/22020)*. [GitHub-21978](https://github.com/magento/magento2/issues/21978)

<!--- ENGCOM-5173-->

*  The performance of the `catalog:images:resize` command has been improved. This command now resizes only the images that are actually in use  and lists any  errors. *Fix submitted by Timon de Groot in pull request [23005](https://github.com/magento/magento2/pull/23005)*. [GitHub-22808](https://github.com/magento/magento2/issues/22808)

### Import/export

<!--- MAGETWO-99894-->

*  Import statistics now accurately reflect the results of import.

<!--- MAGETWO-98729-->

*  Magento now successfully saves product URL keys in Arabic.

<!--- MAGETWO-98801-->

*  Only modified or updated product records are flushed from the catalog cache after importing, re-indexing, and running `bin/magento cron:run --group index`. Previously, all products in the catalog were flushed.

<!--- MAGETWO-99509-->

*  You can now successfully download a CSV file after export. Previously, Magento redirected you to the Admin dashboard when you tried to download the CSV file that was created during export.

<!--- MAGETWO-99927-->

*  Products are successfully updated through import of an CSV file in **Add/Update**  mode. Previously,  the import process failed, and Magento displayed this error: `The value specified in the URL Key field would generate a URL that already exists`.

<!--- MAGETWO-60918-->

*  Magento no longer throws a fatal error during import or export if the category path contains deleted category IDs.

<!--- MC-18472-->

*  The import process maintain custom option prices that were assigned to different websites and scope before import. Previously, after import, these custom option prices were set to the default scope values.

<!--- ENGCOM-5028-->

*  You can now update products through import of a CSV file when the updated products have `product_id` values that range widely (for example, a value 1 to a value 6000). Previously,  when you initiated the import of the CSV file (**Admin** > **System** > **Import** > **Product** > **Add/Update**), Magento threw this error: `General error: 1114 The table 'catalog_product_index_price_temp' is full occurs`. *Fix submitted by Mateusz Wegrzycki in pull request [22575](https://github.com/magento/magento2/pull/22575)*. [GitHub-22028](https://github.com/magento/magento2/issues/22028)

### Index

<!--- MAGETWO-99439-->

*  We have improved the processing of memory tables in the Galera Cluster.

<!--- MC-17981-->

*  The pricing index can now be fully rebuilt and moved into the active price database table in a reasonable amount of time. Previously, this index ran without completing. [GitHub-22156](https://github.com/magento/magento2/issues/22156)

<!--- MC-17929-->

*  We improved the performance of product flat data re-indexing. [GitHub-23462](https://github.com/magento/magento2/issues/23462)

<!--- ENGCOM-5320-->

*  You can now filter administrative users by ID. Previously, when you tried to filter these users by ID, Magento threw a 500 error. *Fix submitted by Jeroen in pull request [23267](https://github.com/magento/magento2/pull/23267)*. [GitHub-23266](https://github.com/magento/magento2/issues/23266)

### Infrastructure

<!--- MC-14862-->

*  Magento 2.3.3 now supports PHP 7.3.x (tested with PHP 7.3.8) and PHP 7.2.x (tested with 7.2.21).

<!--- MC-14863-->

*  Varnish cache now supports version 6.2.0.

<!--- ENGCOM-5352-->

*  You can now use copy service on extension attributes for classes that extend Data Object. *Fix submitted by Oleksandr Kravchuk in pull request [23387](https://github.com/magento/magento2/pull/23387)*. [GitHub-23386](https://github.com/magento/magento2/issues/23386)

<!--- ENGCOM-5356-->

*  Removed an extraneous closing tag from the store-switcher template. *Fix submitted by Alastair Mucklow in pull request [23403](https://github.com/magento/magento2/pull/23403)*.

<!--- ENGCOM-5462-->

*  `\Magento\ConfigurableProduct\Pricing\Price\PriceResolverInterface` has been added to the `di.xml` file. *Fix submitted by Eden Duong in pull request [23753](https://github.com/magento/magento2/pull/23753)*. [GitHub-23717](https://github.com/magento/magento2/issues/23717)

<!--- ENGCOM-5174-->

*  We improved validation of forms that contain multiple fields with identical names. Previously, Magento validated the first file in the form, but did not validate subsequent fields with that name. *Fix submitted by Jay Ghosh in pull request [15383](https://github.com/magento/magento2/pull/15383)*. [GitHub-8258](https://github.com/magento/magento2/issues/8258)

<!--- ENGCOM-5337-->

*  Magento now identifies review entity IDs programmatically instead of retrieving a hard-coded value. *Fix submitted by Danilo Argentiero in pull request [23353](https://github.com/magento/magento2/pull/23353)*.

<!--- ENGCOM-5384-->

*  The array type hints in the Visibility model now correctly reference `string` instead of `int`. *Fix submitted by Patrick McLain in pull request [23532](https://github.com/magento/magento2/pull/23532)*.

<!--- ENGCOM-5121-->

*  The `getListByCustomerId` function in `PaymentTokenManagementInterface` now returns an array. *Fix submitted by Serhiy Zhovnir in pull request [22914](https://github.com/magento/magento2/pull/22914)*. [GitHub-22899](https://github.com/magento/magento2/issues/22899)

<!--- ENGCOM-5147-->

*  The description of the `setStoreId` function has been amended to more clearly explain how the function helps load CMS pages. *Fix submitted by Mahesh Singh in pull request [22772](https://github.com/magento/magento2/pull/22772)*. [GitHub-22767](https://github.com/magento/magento2/issues/22767)

<!--- ENGCOM-5139-->

*  The `phpcs` script for PHP_CodeSniffer now displays all errors and warnings in the console. Previously, Magento threw a fatal error when it encountered an uncaught type error. *Fix submitted by Nazar Klovanych in pull request [22947](https://github.com/magento/magento2/pull/22947)*. [GitHub-20186](https://github.com/magento/magento2/issues/20186)

<!--- MC-15163-->

*  The `oauth` handshake is now followed by a redirect as expected for third-party integrations.

### Magento Shipping

Due to the impending shutdown of Temando (the provider of the technology behind Magento Shipping), it is no longer possible to create a new Magento Shipping account. Support for current Magento Shipping deployments for all existing customers will continue. For detailed status information and recommendations for new shipping implementations in Magento, see our product information page.

### Newsletter

<!--- MAGETWO-99636-->

*  Magento now sends only a subscribe email when you create an account from an email invitation. Previously, you received two emails -- one that subscribed you to the newsletter, and another that unsubscribed you.

<!--- MAGETWO-71785-->

*  You can now export newsletter subscribers from the Admin. Previously, Magento displayed this error when you selected a subscriber name and clicked **Export**: `error: URI too long`.

### Orders

<!--- ENGCOM-5405-->

*  The creditmemo `getOrder()` method now returns the expected extension attributes for an order. Previously, this method did not load orders correctly. *Fix submitted by Pavel Bystritsky in pull request [23358](https://github.com/magento/magento2/pull/23358)*. [GitHub-23345](https://github.com/magento/magento2/issues/23345)

<!--- ENGCOM-5398-->

*  Magento now displays an informative error message when you try to update the product quantity and shipping address for an order when the product quantity field is empty. *Fix submitted by Shankar Konar in pull request [23360](https://github.com/magento/magento2/pull/23360)*.

### Payment methods

This release includes the following changes to integrations for core payment methods to support compliance with PSD2 regulations:

<!--- MAGEDTWO-99606 99867-->

*  The Braintree payment method now complies with PSD2 regulations. The core integration API for Braintree now supports the latest JavaScript SDK v3 API, which is a requirement for supporting native Braintree 3D Secure 2.0 adoption. Braintree transactions are now also verified by using the native Braintree 3D Secure 2.0 service.

<!--- MAGEDTWO-99736 -->

*  Authorize.net now provides 3D Secure verification through third-party services through the `cardholderAuthentication` request field. Starting from this release, the Authorize.net `accept.js` integration will support 3DS 2.0 through CardinalCommerce.

<!--- MAGEDTWO-99739 -->

*  The Cybersource and eWay payment modules have been deprecated in this release to comply with PSD2 SCA regulation, which takes effect on September 14, 2019. Use the official Marketplace extensions for these features instead.

#### Other payment issues

<!--- MC-17337-->

*  Magento now displays a more informative error message (`CVV verification failed`) when you enter an invalid CVV code while using the Braintree payment method. Previously, Magento displayed a generic error message.

<!--- MAGETWO-99035-->

*  Customers can now successfully place an order when the order is partially paid for by gift card or when a discount is applied to the order. Previously, customers could not place an order, and Magento displayed this error: `error: Field format error: 10413-The totals of the cart item amounts do not match order amounts`.

<!--- MC-17462-->

*  When you create orders using Braintree, Magento now successfully creates the orders that contain both simple and virtual products with the **Checkout with Multiple Addresses** option enabled. Previously, Magento listed an order created with these features as an empty order with a grand total of zero on the Orders list.

<!--- MAGETWO-99383-->

*  Magento no longer processes payment for an order that has an empty email field in the quote. Previously, Braintree processed the payment, but displayed an error message on the storefront and did not create the order.

<!--- MAGETWO-99624-->

*  Customers can now place an order for virtual products that have a zero subtotal  after they have entered address information. Previously, customers could not place an order for virtual products with a zero subtotal after they modified their address, and Magento displayed this message:  `The requested Payment Method is not available`.

<!--- MC-17236-->

*  Magento now displays Chinese locale text strings for PayPal buttons as expected.

<!--- MAGETWO-99586-->

*  You can now cancel orders placed with PayPal Express even after authorization has expired.

<!--- MC-16769-->

*  The Transactions tab now displays the correct status for a capture transaction for an order that was placed with the Authorize.net `Accept.js` payment method.

<!--- MAGETWO-99112-->

*  The Admin sales list now displays the payment method for each order. [GitHub-22231](https://github.com/magento/magento2/issues/22231)

<!--- ENGCOM-5105-->

*  Magento now displays stored payment methods and billing agreements if the related payment method is active. Previously, Magento displayed disabled payment methods in the customer dashboard. *Fix submitted by Torben Höhn in pull request [22850](https://github.com/magento/magento2/pull/22850)*. [GitHub-6659](https://github.com/magento/magento2/issues/6659)

<!--- ENGCOM-4839-->

*  Magento no longer saves credit card information when the  **Save for later use** checkbox on the payment page is not enabled during order creation. *Fix submitted by Patrick McLain in pull request [19767](https://github.com/magento/magento2/pull/19767)*. [GitHub-19515](https://github.com/magento/magento2/issues/19515)

<!--- ENGCOM-5451-->

*  When placing an order with Authorize.net, Magento now disables the Order page's **Place Order** button until billing information has been updated. Previously, this button remained enabled, no matter the status of the order in progress. *Fix submitted by Eden Duong in pull request [23718](https://github.com/magento/magento2/pull/23718)*. [GitHub-23624](https://github.com/magento/magento2/issues/23624)

<!--- MC-17753-->

*  Magento now displays an informative email message about invalid credentials when a user tries to pay for an order with the Authorize.net payment method that has an incompletely configured Authorize.net `accept.js` account.

<!--- MC-17984-->

*  You can now place an order from the Admin using Authorize.net as the payment method. Previously, Magento did not place the order and displayed this message: `Transaction has been declined. Please try again later`.

<!--- MC-16289-->

*  The **Credentials** button on the Configure PayPal Express Checkout page (**Admin** > **Stores** > **Configuration**  > **Sales**  > **Payment Methods** > **PayPal Express Checkout**) is now displayed properly in modes.

<!--- MC-17576-->

*  Magento no longer throws an error when you place an order using a custom payment method in deployments running Signifyd. Previously, when you tried to place an order using a custom payment method, an error related to the merge of `signifyd_payment_mapping.xml` files occurred.

<!--- ENGCOM-5504-->

*  Data type validation now occurs on data entered into the minimum and maximum order totals for all payment methods accessed under **Store** > **Configurations** > **Sales** > **Payment Method**. Previously, you could add values with invalid data types, and Magento saved these values with the wrong data type. *Fix submitted by Eden Duong in pull request [23917](https://github.com/magento/magento2/pull/23917)*. [GitHub-23916](https://github.com/magento/magento2/issues/23916)

<!--- ENGCOM-4752-->

*  The **PayPal Express Checkout** button now appears on the product details page only when the **Display on Product Details Page** and  **Enable Instant Purchase** configuration settings are enabled. *Fix submitted by Nazar Klovanych in pull request [22260](https://github.com/magento/magento2/pull/22260)*. [GitHub-22045](https://github.com/magento/magento2/issues/22045), [GitHub-22134](https://github.com/magento/magento2/issues/22134)

<!--- ENGCOM-5452-->

*  The location of the Zero Subtotal Checkout payment settings has been changed to **Stores** > **Configuration** > **Sales** > **Payment Methods**. *Fix submitted by Andrea Parmeggiani in pull request [23679](https://github.com/magento/magento2/pull/23679)*. [GitHub-23678](https://github.com/magento/magento2/issues/23678)

<!--- ENGCOM-5324-->

*  Magento now displays the loading icon while processing a Braintree payment until the user is redirected to the new Order page. *Fix submitted by Kunal Soni in pull request [22675](https://github.com/magento/magento2/pull/22675)*. [GitHub-20038](https://github.com/magento/magento2/issues/20038)

### Performance

<!--- MC-4244-->

*  Merchants now have the ability to turn off the automatic URL rewrite generation that occurs by default on products when the category they belong to is saved. The new **Generate "category/product" URL Rewrites**  configuration option controls this behavior. When this feature is enabled, Magento will generate a lot of data when saving a category that contains many assigned products. This generated data is saved into rewrite tables that can degrade Magento performance.

<!--- MC-15763-->

*  Page load speeds have been improved by moving non-critical CSS elements to the bottom of the page. This enables the browser to render and display a storefront page more quickly. This setting is disabled by default, but you can enable it using **Stores** > **Configuration** > **Advanced** > **Developer** > **CSS Settings** > **Use CSS critical path**. For more information, see [CSS critical path documentation]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-critical-path.html).

<!--- MC-16887-->

*  The `jQuery/ui` library has been refactored into separate widgets so that core modules load only the widgets they need. This update improves the performance of core storefront tasks including the loading of category, configurable product, home, and checkout pages. Magento recommends that module developers update custom storefront code to remove the `jquery/ui` dependency. Otherwise, a performance degradation warning message might be displayed in the console.

<!--- MC-16046-->

*  Store pages now display text in readable system fonts while loading custom fonts, which significantly increases page load speed. Merchants who deploy stores that implement large CSS files and many fonts will notice the greatest improvement.

### Pricing

<!--- MAGETWO-99152-->

*  You can now save a special price that exceeds three characters in Japanese Yen. Previously, you could not apply denominations that exceeded three characters with a comma separator when representing  Yen.

<!--- MAGETWO-98844-->

*  You can now set product price that exceeds 100,000,000.

### Reports

<!--- ENGCOM-5413-->

*  The default date range for report filters is now set to the past month instead of the past 18 years. Previously, the default was set to 18 years, which resulted in errors in the filtered results. *Fix submitted by Yaroslav Rogoza in pull request [23607](https://github.com/magento/magento2/pull/23607)*. [GitHub-23606](https://github.com/magento/magento2/issues/23606)

<!--- MC-18195-->

*  The start and finish date in reports now correspond to the entered  values when you create a report from the Admin. Previously, the start and finish dates  in the displayed report was one day earlier than you entered.

<!--- ENGCOM-5505-->

*  The access controls on the **Reports** > **Product** > **Downloads** page have been refactored to permit access to only administrators with the correct permissions. Previously, administrators with no access to this area could access the Downloads report. *Fix submitted by Eden Duong in pull request [23901](https://github.com/magento/magento2/pull/23901)*. [GitHub-23900](https://github.com/magento/magento2/issues/23900)

<!--- ENGCOM-5052-->

*  Selecting **Show by year** when filtering  **Reports** > **Products**  > **Ordered** now results in a list of products sold per year that is grouped by product quantity in descending order. Previously, Magento displayed a list of products sold per year that contained multiple entries for a single product on a per-order basis. *Fix submitted by Surabhi Srivastava in pull request [22087](https://github.com/magento/magento2/pull/22087)*. [GitHub-22646](https://github.com/magento/magento2/issues/22646), [GitHub-22087](https://github.com/magento/magento2/issues/22087)

### Reviews

<!--- MAGETWO-99591-->

*  Administrators with restricted privileges to reviews can now edit review status from the pending reviews list.

### Return Merchandise Authorizations (RMA)

<!--- MAGETWO-98012-->

*  Magento now autopopulates fields as expected when you create a Return Merchandise Authorization (RMA) using REST. Previously, the following fields were null: `customer_id`, `rma_entity_id`, `created_at`, and `entity_id`.

<!--- MC-17431-->

*  Magento now displays only enabled shipping methods on the Return details page. Previously, shipping methods that were disabled for RMA were displayed in the Carrier dropdown menu on the Return details page.

<!--- MAGETWO-60741-->

*  Clicking **Show Packages** on a Returns page (**My Account** > **My Returns**  > **Return**) now opens a new page about the selected package. Previously, clicking on this link resulted in a 404 error page.

### Reward

<!--- MAGETWO-99901-->

*  Magento no longer sends reward point balance notification email to  clients  whose accounts have the **Subscribe for Balance Updates** setting disabled.

<!--- MC-17798-->

*  Online refunds now work as expected  when the **Refund Reward Points Automatically** configuration setting is enabled. Previously, the **Refund** button was disabled under these conditions.

### Sales

<!--- MAGETWO-99691-->

*  The Orders Total now reflects relevant product discounts when you re-order a product. Previously, discounts were not included when you re-ordered.

<!--- MAGETWO-99460-->

*  Custom order statuses no longer override default statuses in drop-down menus.

<!--- MAGETWO-99430-->

*  The Admin payment method validation now uses the updated billing address country for orders placed in the Admin. Previously, order creation failed when the **Payment from Applicable Countries** setting was set to **Specific Countries** and a non-US country was selected from the Payment from Specific Countries list.

<!--- MAGETWO-99364-->

*  You can now edit an order that contains a custom address attribute on its order form. Previously, Magento threw this error if you tried to edit an order with a custom address attribute: `We can't update the order address right now`.

<!--- MAGETWO-99605-->

*  You can now use quotation marks  to create exact search terms in the Admin menu search grid  (**Customers** > **All Customers**).

<!--- MC-17269-->

*  The date format used in tables throughout the product interface is now based on the Admin-defined locale.

<!--- MAGETWO-72172-->

*  Magento no longer lets you add a disabled variation of configurable product to the shopping cart from the Admin.

<!--- MAGETWO-99883-->

*  Magento now includes the correct price for a discounted product when the Customer Group is not set to the default group. Previously, when you re-ordered a discounted product, the correct price was not displayed in the Items Ordered field.

<!--- MC-17860-->

*  Magento no longer adds to an order any selected products that have not been explicitly added to the cart when you create an order from the Admin.

<!--- MC-17797-->

*  Magento no longer throws a fatal error when you click **View Order** on an order that contains a product that was available when the order was created but that was subsequently  deleted from the storefront.

<!--- MAGETWO-98832-->

*  The Allowed Countries drop-down list that is available in multisite deployments now reflects the settings that  are configured in **Stores**  > **Configuration**  > **General** >  **General**  > **Country Options**  >  **Allow Countries**.

### SalesRule

<!--- MAGETWO-99725-->

*  You can now update the conditions of an existing Scheduled update for a Cart Price Rule. Previously, when you tried to change the SKU condition for an update, Magento did not save or apply your changes.

<!--- MC-18696-->

*  Magento now displays the Cart Price Rules list (**Marketing** > **Promotions** > **Cart Price Rules**) as expected when you add a new rule. Previously, the grid was not visible.

### Search

<!--- MAGETWO-99769-->

*  Search results now reflect the search weight that you assign to product attributes in attribute configuration.

<!--- ENGCOM-5402-->

*  Search by keyword now supports searching on zero (0). *Fix submitted by jeysmook in pull request [23424](https://github.com/magento/magento2/pull/23424)*.

<!--- MAGETWO-99669-->

*  You can now use Elasticsearch to run a query that includes the `<` character. Previously, when you used this symbol in a query, Magento threw this error: `{"0":"SQLSTATE[42000]: Syntax error or access violation: 1064 syntax error, unexpected $end, query was: SELECT`.

<!--- MC-18009-->

*  Disabled products now appear in the list of available products in the search results of the Page Builder link attribute–on buttons, images, banners, sliders. Previously, these products did not appear in search results, which prevented users from creating content that went live with a schedule update.

### Shipping

<!--- MC-17502-->

*  You can now use Cybersource as a payment method when multishipping is enabled. Previously, when you tried to place an order, Magento threw this error: `Invalid Form Key. Please refresh the page`. This resulted from a problem with auto-attaching a form key on the submit event  when one form contained another form.

<!--- ENGCOM-5110-->

*  The Order Tracking page now displays the Contact us link as expected  when this feature is enabled and the designated shipping carrier is not available on the Order page. *Fix submitted by Eduard Chitoraga in pull request [22823](https://github.com/magento/magento2/pull/22823)*. [GitHub-22822](https://github.com/magento/magento2/issues/22822)

<!--- ENGCOM-5109-->

*  Magento no longer tries to validate UPS required fields (UPS Access License Number, User ID, and Password fields)  when UPS shipping is not active. *Fix submitted by Serhiy Zhovnir in pull request [22787](https://github.com/magento/magento2/pull/22787)*. [GitHub-22786](https://github.com/magento/magento2/issues/22786)

<!--- ENGCOM-5379-->

*  You can now use more than 35 characters in the shipper’s address field when booking a UPS shipment or generating a UPS shipment label. Previously, if this address exceeded 35 characters, Magento threw an error. *Fix submitted by Ankur Raiyani in pull request [23523](https://github.com/magento/magento2/pull/23523)*.

<!--- MC-18004 -->

*  Merchants can now create shipping labels for return merchandise authorizations. Previously, when a merchant tried to create a shipping label, Magento displayed this error: `No authorized items or allowed shipping methods`.

<!--- ENGCOM-5381-->

*  Magento now validates values entered into the **quantity** field on the Shipping to Multiple Addresses page. *Fix submitted by Nirmal Raval in pull request [23477](https://github.com/magento/magento2/pull/23477)*.

<!--- ENGCOM-5455-->

*  The updates that a customer makes to the shipping address during the checkout shipping step is maintained during the billing step. Previously, the information in the **Ship To** area was updated with empty values in the billing step when the **My billing and shipping address are the same** setting is set to **no**. *Fix submitted by rsimmons07 in pull request [23656](https://github.com/magento/magento2/pull/23656)*. [GitHub-22112](https://github.com/magento/magento2/issues/22112)

### Sitemap

<!--- MC-16312-->

*  Magento now generates all relevant product URLS when the **Use Categories Path for Product URLs** setting is enabled.

<!--- ENGCOM-5240-->

*  The sitemap product generation for the **Use Categories Path for Product URLs** setting has been refactored. *Fix submitted by Sergiy Vasiutynskyi in pull request [23129](https://github.com/magento/magento2/pull/23129)*. [GitHub-22934](https://github.com/magento/magento2/issues/22934), [GitHub-4788](https://github.com/magento/magento2/issues/4788)

### Staging

<!--- MAGETWO-98187-->

*  Magento no longer removes the child products of a grouped product after the group product’s schedule update has expired.

<!--- MAGETWO-99378-->

*  Magento now displays the correct product Short Description for the selected update in deployments where there are multiple schedule updates.

<!--- MC-15298-->

*  Magento is introducing the tracking of user actions and events on the Admin as part of our efforts to better understand the Admin user experience and improve product design.The first administrator who logs into the Admin after upgrading to Magento 2.3.3 will see the **Allow admin usage data collection** pop-up window, from which they can decline or agree to participate. Once data is captured, it is sent to Adobe Analytics for analysis and reporting. Typical events include page views, save actions, and changes to Magento mode. See [Store Admin](https://docs.magento.com/m2/ce/user_guide/stores/admin.html) for more information.

<!--- MC-15519-->

*  The database compare tool no longer shows the incorrect comparison results for these entities:

    `sales_creditmemo`
    `sales_creditmemo_grid`
    `sales_order_grid`
    `sales_order_payment`
    `sales_order_status_history`

### Swatches

<!--- ENGCOM-5020-->

*  You can update the dropdown attributes (**Admin** > **Stores** > **Attributes** > **Product**) when swatches have been disabled. Previously, when swatches were disabled, Magento displayed this error in the console: `Uncaught TypeError: panel.addClass is not a function`. *Fix submitted by Mark van der Sanden in pull request [22560](https://github.com/magento/magento2/pull/22560)*. [GitHub-20843](https://github.com/magento/magento2/issues/20843)

<!--- ENGCOM-5175-->

*  The image gallery now correctly loads images for swatch colors. Previously, the gallery did not switch to the designated first image as expected. *Fix submitted by Milind Singh in pull request [23033](https://github.com/magento/magento2/pull/23033)*. [GitHub-23030](https://github.com/magento/magento2/issues/23030)

### Target Rule

<!--- MAGETWO-99448-->

*  Deleting products no longer triggers exception errors. Previously, the target rule that was used to identify the product triggered an exception.

<!--- MC-18464-->

*  Magento now returns more informative error messages when a misconfigured target rule caused an error.

### Templates

<!--- ENGCOM-5440-->

*  The  Insert Variables popup window is now populated with template variables as expected. (This window is accessed from **Marketing** > **Email Templates** > **Add New Template**.) *Fix submitted by Mahesh Singh in pull request [23173](https://github.com/magento/magento2/pull/23173)*. [GitHub-23135](https://github.com/magento/magento2/issues/23135)

### Testing

<!--- MC-16371 MC-18277 MC-18750 MC-11031 MC-15749-->

*  The following tests have been improved:

   *  `CheckoutWithBraintreePaypalMinicartTest`
   *  `Magento\Catalog\Setup\Patch\Schema\ChangeTmpTablesEngine`
   *  `MAGETWO-69516: Cart Price Rule with related Banner for specific Customer Segment is persisted under long-term cookie`
   *  `Magento\FunctionalTestingFramework.functional.StorefrontUKCustomerCheckoutWithCouponTest`
   *  `Mftf Test: StorefrontApplyCategoryPermissionsToSecondWebsiteTest`

<!--- MC-5806-->

*  The Dependency static test now detects URL dependencies as expected.

<!--- MC-13909-->

*  `CreateCmsPageEntityMultipleStoreViewsTest` no longer fails on variation `CreateCmsPageEntityMultipleStoreViewsTestVariation1`.

<!--- ENGCOM-5470-->

*  `CommentLevelsSniff` now works correctly with the `@magento_import` statement. Previously, when you ran `Magento\Test\Less\LiveCodeTest`, Magento threw an error on lines that contained `@magento_import`. *Fix submitted by Pavel Bystritsky in pull request [23790](https://github.com/magento/magento2/pull/23790)*. [GitHub-23789](https://github.com/magento/magento2/issues/23789)

<!--- ENGCOM-3132-->

*  Magento now deletes the stub modules that tests create. Previously, integration tests created stub modules in `app/code`, which could potentially affect production code. *Fix submitted by Andreas von Studnitz in pull request [18459](https://github.com/magento/magento2/pull/18459)*. [GitHub-12696](https://github.com/magento/magento2/issues/12696)

### Translation and locales

<!--- ENGCOM-5196-->

*  White space between words now appears as expected in non-English websites. *Fix submitted by Alexey Arendarenko in pull request [23081](https://github.com/magento/magento2/pull/23081)*. [GitHub-23080](https://github.com/magento/magento2/issues/23080)

<!--- ENGCOM-5334-->

*  The payment method area of the shipment and credit memo emails that are sent to customers now have correctly translated strings. *Fix submitted by Alexey Arendarenko in pull request [23338](https://github.com/magento/magento2/pull/23338)*.

### UI

<!--- MC-16887-->

*  The `jQuery/ui` library has been refactored into separate widgets so that core modules load only the widgets they need. This update improves the performance of core storefront tasks including the loading of category, configurable product, home, and checkout pages. Magento recommends that module developers update custom storefront code to remove the `jquery/ui` dependency. Otherwise, a performance degradation warning message might be displayed in the console.

<!--- MC-17922-->

*  The calendar date picker now updates values as expected when the linked input value is changed.

<!--- MAGETWO-99361-->

*  The URL rewrites category tree now includes all relevant categories. Previously, when you selected **For Category** after selecting **Create URL Rewrite** from (**Marketing** > **Url Rewrites**), Magento did not include most categories in the resulting view.

<!--- MAGETWO-99832-->

*  Magento now saves order views with the date ranges you enter while creating the filter (**Sales** > **Orders**). Previously, when you opened a saved filtered order view, Magento indicated that the dates you entered were invalid.

<!--- ENGCOM-4923-->

*  Form element validation is now triggered as expected when form validation rules change. Previously, when you changed form validation rules for a form element during runtime, the new validation rules were not applied. *Fix submitted by Roman Kis in pull request [21992](https://github.com/magento/magento2/pull/21992)*. [GitHub-21473](https://github.com/magento/magento2/issues/21473)

<!--- ENGCOM-5067-->

*  The arrow toggle page element now works as expected throughout the Admin. *Fix submitted by Arvinda Kumar in pull request [22644](https://github.com/magento/magento2/pull/22644)*. [GitHub-22636](https://github.com/magento/magento2/issues/22636)

<!--- ENGCOM-5083-->

*  The height setting in `.admin__control-textarea` component is no longer hard-coded. Previously, this hard-coded value prevented you from changing the height of this text field through the UI. *Fix submitted by Serhiy Zhovnir in pull request [22779](https://github.com/magento/magento2/pull/22779)*. [GitHub-22771](https://github.com/magento/magento2/issues/22771)

<!--- ENGCOM-5148-->

*  Added appropriate white space between elements of product descriptions on the product list view. *Fix submitted by Hitesh in pull request [22931](https://github.com/magento/magento2/pull/22931)*. [GitHub-20788](https://github.com/magento/magento2/issues/20788)

<!--- ENGCOM-5176-->

*  Scrolling now behaves as expected on the create order page. *Fix submitted by Denis Kopylov in pull request [23035](https://github.com/magento/magento2/pull/23035)*. [GitHub-23034](https://github.com/magento/magento2/issues/23034)

<!--- MC-16334-->

*  Page element layout issues on  **Stores** > **Configuration** > **Advanced** > **Admin** have been resolved. Previously, when you expanded the security block on this page, the **Use system value** text appeared at the top of the page, not adjacent to the checkbox it applied to.

<!--- MC-17003-->

*  The missing **Update Totals** button has been added to the Credit Memo page.

<!--- ENGCOM-5512-->

*  Magento now displays an error message as needed when you click the  **Catalog** > **Products** > **Create Configurations** button and submit invalid data. Previously, Magento did not display the error message after validation due to lack of autofocus on the error field. *Fix submitted by Eden Duong in pull request [23905](https://github.com/magento/magento2/pull/23905)*. [GitHub-23904](https://github.com/magento/magento2/issues/23904)

<!--- ENGCOM-5473-->

*  The toggle icon on the **Catalog** > **Products** > **New Product (Configurable)** > **Create Configuration** page now works as expected. *Fix submitted by Eden Duong in pull request [23803](https://github.com/magento/magento2/pull/23803)*. [GitHub-22702](https://github.com/magento/magento2/issues/22702)

<!--- ENGCOM-5467-->

*  Magento no longer validates data in the **Discount Amount** field after page load until the user performs an action in the Create New Catalog Rule form. Previously, Magento ran validation checks on that field despite its inactivity, and threw an error. *Fix submitted by Eden Duong in pull request [23779](https://github.com/magento/magento2/pull/23779)*. [GitHub-23777](https://github.com/magento/magento2/issues/23777)

<!--- ENGCOM-5453-->

*  You can now edit the status label for the storefront from the Admin in single-store mode. Previously, there was no status field available from **Stores** > **Order Status** when single-store mode was enabled. *Fix submitted by Eden Duong in pull request [23681](https://github.com/magento/magento2/pull/23681)*. [GitHub-22654](https://github.com/magento/magento2/issues/22654)

<!--- ENGCOM-5070-->

*  The design of the Review & Payments **Apply Discount Coupon** box of the checkout page has been improved. *Fix submitted by Abrar Pathan in pull request [21215](https://github.com/magento/magento2/pull/21215)*. [GitHub-21214](https://github.com/magento/magento2/issues/21214)

<!--- ENGCOM-5278-->

*  The `always` action that precedes the opening of the alert and confirm widgets is now called once. Previously, the `always triggering` text was logged twice after you clicked the **OK** button. *Fix submitted by Eduard Chitoraga in pull request [23234](https://github.com/magento/magento2/pull/23234)*. [GitHub-23233](https://github.com/magento/magento2/issues/23233)

<!--- ENGCOM-4623-->

*  Magento now sets the `last` CSS class to the top menu when one or more parent items are not active. As a result, menu items will be filtered before they are processed for HTML output. *Fix submitted by Arnoud Beekman in pull request [22071](https://github.com/magento/magento2/pull/22071)*. [GitHub-13266](https://github.com/magento/magento2/issues/13266)

<!--- ENGCOM-5155-->

*  The form reset feature now clears the **date** field in Admin forms as expected. *Fix submitted by Nirav Patel in pull request [23007](https://github.com/magento/magento2/pull/23007)*. [GitHub-22940](https://github.com/magento/magento2/issues/22940)

<!--- ENGCOM-5107-->

*  You can now specify custom fonts for use in your deployment. Previously, the `.lib-font-face()` mixin required that you include the font in all the formats listed (for example, `eot`, `woff2`, `woff`, `ttf`, and `svg`). If your font was not available in these formats, Magento displayed a 404 error. *Fix submitted by Karla Saaremäe in pull request [22854](https://github.com/magento/magento2/pull/22854)*. [GitHub-4628](https://github.com/magento/magento2/issues/4628)

<!--- ENGCOM-5325-->

*  The **Refund** button on the credit memo page now remains active after a merchant enters a value in the Refund Totals section. *Fix submitted by Nishant Jariwala in pull request [23286](https://github.com/magento/magento2/pull/23286)*. [GitHub-23285](https://github.com/magento/magento2/issues/23285)

<!--- ENGCOM-5386-->

*  The behavior of the mobile menu JavaScript now triggers at the same breakpoint as the mobile menu styles. *Fix submitted by bobemoe in pull request [23528](https://github.com/magento/magento2/pull/23528)*. [GitHub-8298](https://github.com/magento/magento2/issues/8298)

<!--- ENGCOM-5358-->

*  The `font-size` setting for all `input-field` labels with a tooltip is no longer set to 0, and time fields are separated by colons (:) as expected. *Fix submitted by Geeta Modi in pull request [23393](https://github.com/magento/magento2/pull/23393)*. [GitHub-21974](https://github.com/magento/magento2/issues/21974)

<!--- ENGCOM-5321-->

*  Magento now displays the Admin grid header as expected when there are no buttons in the toolbar. *Fix submitted by Shankar Konar in pull request [23247](https://github.com/magento/magento2/pull/23247)*.

### URL rewrites

<!--- MC-4244-->

*  Merchants now have the ability to turn off the automatic URL rewrite generation that occurs by default on products when the category they belong to is saved. The new **Generate "category/product" URL Rewrites**  configuration option controls this behavior. When this feature is enabled, Magento will generate a lot of data when saving a category that contains many assigned products. This generated data is saved into rewrite tables that can degrade Magento performance.

<!--- MAGETWO-99830-->

*  Redundant URL rewrite operations that were triggered by category operations have been eliminated, and page load performance has been improved. Previously, updating a category to add or delete products triggered URL rewrite regeneration for all products with changed positions.

<!--- MAGETWO-96663-->

*  Magento no longer removes the query string from URLs when the query string is preceded by a slash. Previously, when a customer opened a URL that contained a trailing slash and query string (for example, `http://magento.host.com/sample-url-key/?cupcakes`), Magento redirected the user to a URL that omitted the slash (`http://magento.host.com/sample-url-key`).

<!--- ENGCOM-5195-->

*  URL redirects now work as expected when you click **Save** after editing a product view from the Customer tab (**Customer** > **Product Reviews** > **Edit Review**). *Fix submitted by Ravi Chandra in pull request [22426](https://github.com/magento/magento2/pull/22426)*. [GitHub-22425](https://github.com/magento/magento2/issues/22425)

<!--- ENGCOM-5435-->

*  Magento now correctly renders the value of a product’s customizable option field of type `Area` when you enter a multi-line value from the Admin. Previously, a multi-line value was rendered with an HTML `<br>` tag as part of the value. *Fix submitted by Sunil in pull request [23524](https://github.com/magento/magento2/pull/23524)*. [GitHub-23510](https://github.com/magento/magento2/issues/23510)

<!--- ENGCOM-5397-->

*  You can now use a plus sign (+) character in content contained within a widget on a CMS page. Previously, Magento did not render the character, although it appeared in the page content stored in the database and when editing the widget. *Fix submitted by Sarfaraz Bheda in pull request [23496](https://github.com/magento/magento2/pull/23496)*.

<!--- ENGCOM-5330-->

*  Product URLs are now updated as expected after Magento changes the URL key of the category in multi-site deployment. *Fix submitted by Alastair Mucklow in pull request [23309](https://github.com/magento/magento2/pull/23309)*. [GitHub-23074](https://github.com/magento/magento2/issues/23074)

### Vertex

*  Incorrect Customer Codes are no longer sent when Vertex invoices are set to send during an order status change.

*  Resolved an issue where assisted parameters were not requested and logged during Invoice calls made during Order Status Change.

*  Calls to Vertex are now made when string values exceed the maximum allowed length in the Vertex SDK.

*  Tax code, vertex tax code, and invoice text codes are now saved for orders created during Guest Checkout.

*  Guest Orders are no longer invoiced twice if logging was enabled.

*  Shipping is now included on a Vertex invoice if that invoice was sent in the same request that its order was created in if that order was placed using guest checkout.

*  Taxes for Magento Commerce gift wrap are now properly written to the Vertex tax journal.

### Visual Merchandiser

<!--- MAGETWO-96129-->

*  You can now add tier price conditions to smart categories.

<!--- MAGETWO-98937-->

*  The Visual Merchandiser product list now renders properly when product names exceed 50 characters.

### Web API framework

<!--- ENGCOM-5162-->

*  Magento now renders shipment details for an order without a fatal error when you use REST to create a shipment. *Fix submitted by Milind Singh in pull request [22687](https://github.com/magento/magento2/pull/22687)*. [GitHub-22686](https://github.com/magento/magento2/issues/22686)

<!--- ENGCOM-5116-->

*  You can now use REST to update a customer that has no associated `store_id` without unintentionally changing other information. Previously, Magento changed the `store_id` to the default `store_id` if this field was left empty in the PUT request. *Fix submitted by Mateusz Wira in pull request [22893](https://github.com/magento/magento2/pull/22893)*. [GitHub-22869](https://github.com/magento/magento2/issues/22869)

<!--- ENGCOM-5192-->

*  Swagger now accepts requests in XML and can display results in the same format. *Fix submitted by Simon Schröer in pull request [23025](https://github.com/magento/magento2/pull/23025)*.

<!--- ENGCOM-5312-->

*  The `POST` on `/orders` REST calls no longer fail when properties in the request body are out of order. Previously, when billing address data preceded customer data in the Order Create API JSON payload, the billing address email was not populated, so the order was empty. *Fix submitted by Mateusz Wira in pull request [23048](https://github.com/magento/magento2/pull/23048)*.

### Website restriction

<!--- MAGETWO-99868-->

*  Administrators with appropriate permissions can now create a new customer account on the Admin when the **Website Restriction** setting is enabled. Previously, Magento threw this exception: `Can not register new customer due to restrictions are enabled`.

### Wishlist

<!--- MAGETWO-99228-->

*  Wishlists now accurately reflect product availability when a product has been added to a wishlist and then subsequently disabled. Previously, the wishlist displayed these contradictory messages: **You have no items in your wish list** and **1 item in wish list**.

<!--- MAGETWO-99312-->

*  Wishlist names can now be edited from the storefront.

<!--- MAGETWO-97216-->

*  The `Magento\FunctionalTestingFramework.functional.StorefrontAddMultipleStoreProductsToWishlistTest` test no longer fails randomly.

<!--- MC-18800-->

*  The wishlist no longer shows an item that has been disabled on the Admin.

<!--- ENGCOM-5514-->

*  Wishlist items now display decimal values as appropriate. Previously, Magento saved decimal quantities for wishlist items but did not display these values in the wishlist on the storefront. *Fix submitted by Max Fickers in pull request [23933](https://github.com/magento/magento2/pull/23933)*. [GitHub-23932](https://github.com/magento/magento2/issues/23932)

## Known issues

**Issue**:
With this release, the `\Magento\Framework\Mail\MessageInterface` class has been replaced with `\Magento\Framework\Mail\EmailMessageInterface`. This new class supports the sending of multi-part MIME-type content within email and extends the existing `MailMessageInterface` and `MessageInterface` classes to ensure backward compatibility and provide a transition period for extension developers. Extension developers and merchants who are deploying third-party extensions that implement `\Magento\Framework\Mail\MessageInterface` should be aware of these changes.

The  `Magento\Framework\Mail\Template\TransportBuilder` and `Magento\Newsletter\Model\Queue\TransportBuilder` structures were refactored to return this new `EmailMessageInterface` instead of the `MessageInterface`,  which was previously returned. Although the signature of the `Transport::getMessage()` method was not changed, extensions can start using the new `EmailMessageInterface`.

**Workaround**: In deployments that include third-party customizations, the old `MessageInterface` might still be instantiated. How you prevent this instantiation depends upon the particular usage of `MessageInterface` in your code. See the Magento forum DevBlog post [Backward-incompatible Changes in the Mail Library for Magento 2.3.3](https://community.magento.com/t5/Magento-DevBlog/Backward-incompatible-Changes-in-the-Mail-Library-for-Magento-2/ba-p/144787) for more information. **This issue has been addressed in the EmailMessageInterface backward compatibility issue patch, which was released on October 14, 2019. Merchants should apply this patch as soon as possible, especially if their deployments include extensions or customizations that use the Mail interface.**

**Issue**:
Method chaining does not work as expected in extensions and customizations that are based on a product collection entity. Many extensions rely on product collection entities, which represent a list of products that satisfy search and filtering criteria. In the process of refactoring the `addAttributeToFilter` method, method chaining as it was implemented in Magento versions earlier than 2.3.3 was broken. **Workaround**: Apply the Method chaining fix for product collection patch. See [Applying patches](https://devdocs.magento.com/guides/v2.3/comp-mgr/patching.html) for specific instructions on downloading and applying Magento patches.

**Issue:** You cannot use the Magento Extension Manager to install extensions purchased from the Magento Marketplace. **Workaround**: Install extensions from the command line as described in [General CLI installation]({{ site.baseurl }}/extensions/install/). See [Extension Manager shows no extensions in Magento Commerce 2.3.x](https://support.magento.com/hc/en-us/articles/360043980352).

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-3-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-3-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/guides/v2.3/install-gde/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.3  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
