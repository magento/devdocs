---
group: release-notes
title: Magento Commerce 2.3.4 Release Notes
---

Magento Commerce 2.3.4 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes over 220 functional fixes to the core product and  over 30 security enhancements. It includes resolution of over 275 contributions by our community members. These community contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Download and run the DB_CLEANUP_SCRIPT.php script

This hotfix addresses an issue with [CVE-2019-8118](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8118) that was included in Magento 2.3.3 and 2.2.10. While the original fix for that bug stopped the logging of failed login attempts, information collected prior to updating to these current versions may still exist, and previous, unpatched versions of Magento may still have this issue. This hotfix provides a script that clears the login attempts that were previously collected. **We recommend that all merchants download and run this script**. See [Remove failed login attempts from the database](https://support.magento.com/hc/en-us/articles/360040209352) for information on how to download and run this database clean-up script.

## Apply the PayPal Express Checkout issue with region patch for Magento 2.3.4 to address a critical PayPal Express Checkout issue

This issue affects orders placed with PayPal Express Checkout where the order’s shipping address specifies a country region that has been manually entered into the text field rather than selected from the drop-down menu on the Shipping page. When the customer enters a region in the text field, Magento throws this error: `Error 500: NOTICE: PHP message: PHP Fatal error: Uncaught Error: Call to a member function getId() on null in httpdocs/vendor/magento/module-paypal/Model/Api/Nvp.php:1527`.  When the customer selects the country region from the drop-down menu when placing an order, the order is completed successfully.  See [Applying patches]({{page.baseurl}}/comp-mgr/patching.html) for specific instructions on downloading and applying Magento patches. Both Git-based  and Composer-based  patches are available. A fix for this issue will be included in Magento 2.3.5, which is scheduled for release in April 2020.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.4) provides. Patch 2.3.3.1 (Composer package 2.3.3-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.3. All hot fixes that were  applied to the 2.3.3 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.) For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.3-p1), see [Install Magento using Composer](https://devdocs.magento.com/guides/v2.3/install-gde/composer.html). Security-only patches include only security bug fixes, not the additional security enhancements that are included in the full patch.

With this quarterly release, we’ve changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin. Please see [Security updates available for Magento APSB20-02](https://helpx.adobe.com/security/products/magento/apsb20-02.html).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security updates available for Magento (APSB20-02)](https://helpx.adobe.com/security/products/magento/apsb20-02.html) for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.4) have been ported to 2.2.11, 1.14.4.4, and 1.9.4.4, as appropriate.

With this quarterly release, we’ve changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin. Please see [Security updates available for Magento APSB20-02](https://helpx.adobe.com/security/products/magento/apsb20-02.html).

#### Security enhancements and fixes to core code

Additional security enhancements include:

*  **Removal of custom layout updates and the deprecation of layout updates to remove the opportunity for Remote Code Execution (RCE)**. The **Custom Layout Update** field on the CMS Page Edit, Category Edit, and Product Edit pages has now been converted to a selector. You can no longer specify an entity-specific layout update with text but instead must create a physical file that contains the layout updates and select it for use. The name of the file containing an update must follow the conventions described [here](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/layouts/layout-extend.html).  <!--- MC-16129-->

*  **Redesigned  content template features so that only whitelisted variables can be added to templates**. This avoids the situation where administrator-defined templates such as email, newsletters, and CMS content can include variables and directives that can directly call PHP functions on objects. See [Migrating custom email templates](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/templates/template-email-migration.html) and [Email templates](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/templates/template-email.html).

Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following platform upgrades help enhance website security and PCI compliance.

*  **Enhancements to the message queue framework**. Magento now supports the latest release of RabbitMQ v3.8, which is the third-party technology that underlies the Magento message queue framework. <!--- MC-14871-->

*  **Improved page caching and session storage**. This release has been tested on the latest stable release of Redis v5.0.6. <!--- MC-14877-->

*  **Enhanced support for MariaDB 10.2**. Before Magento 2.3.4, when using declarative schema with MariaDB 10.2, Magento threw an error indicating that the schema was not up-to-date after running `bin/magento setup:upgrade`. With this release, we have normalized the values returned by MariaDB, which allows system integrators to use declarative schema with both MySQL and MariaDB. <!--- MC-16319 MC-17633-->

*  The core integration of the Authorize.net payment method has been deprecated. Please use the official payment integration that is available on Marketplace.

**Note**: Magento 2.3.4 has not been tested with PHP 7.1. PHP 7.1 reached EOL (End of Life) on December 1, 2019. We recommend updating your deployment to a supported version of PHP. See [Magento 2.3 technology stack requirements](https://devdocs.magento.com/guides/v2.3/install-gde/system-requirements.html) for information about supported versions.

### Performance boosts

Merchants and customers will see performance improvements as a result of these enhancements:

*  Redundant non-cached requests to the server on catalog pages have been eliminated by refactoring the customer section invalidation mechanism and improving banner cache logic. <!--- MC-19107 MC-19249-->

*  PHTML files have been refactored to better support parsing by the bundling mechanism. Our new bundling mechanism now identifies all dependencies on JavaScript. <!--- MC-19242-->

*  Added the ability to disable statistic collecting for Reports module by default. A new configuration setting (**System Configuration** > **General** > **Reports** > **General Options**)  allows merchants to completely or partially disable Magento Reports. (Statistics collection for the Reports module is disabled by default. Magento recommends disabling Reports functionality for performance reasons when this capability is not required.)  <!--- MC-20322-->

### Infrastructure improvements

This release contains 250 enhancements to core quality, which improve the quality of the Framework and these modules:  catalog, sales, PayPal, Elasticsearch, import, CMS, and B2B.

### Merchant tool enhancements

**Integration with Adobe Stock image galleries**. The new bundled Adobe stock integration extension enables merchants to add high quality media assets to their website content without leaving the Magento Admin. Merchants can use the searchable interface in the Magento Media Gallery to explore, preview, license, and deploy stock images in website content. See [Adobe Stock Integration](https://docs.magento.com/m2/ee/user_guide/cms/adobe-stock.html) and [Using Adobe Stock Images](https://docs.magento.com/m2/ee/user_guide/cms/adobe-stock-manage.html).

### Page Builder

Page Builder enhancements for this release include:

*  Improved product sorting. Merchants can now sort by product position within a category or within a list of product SKUs. Sorting by predefined parameters, such as name or stock status, remains available.

*  Product carousel. Merchants can choose how to showcase products in their content by selecting from predefined options in the Page Builder Products content type: grid or carousel.

*  Content created with Page Builder can now be displayed in storefronts built with PWA Studio using new PWA & Page Builder components. The unstructured content (HTML) that Page Builder generates and saves into a database is converted into structured data that works in React and PWA Studio.

### Inventory Management

Inventory Management enhancements for this release include:

*  Addressed a known performance issue that caused higher than expected loads on the database server in scenarios involving the shopping cart.

*  Updated the Inventory Reservations CLI command to reduce memory usage when finding and compensating for missing reservations on large catalogs.

*  Resolved multiple quality issues, including those related to credit memos, grouped products, source and stock mass actions.

See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### GraphQL

This release includes improved GraphQL coverage for search, layered navigation, cart functionality. The following mutations/queries are available:

*  **Guest carts can now be merged with customer carts.** The [`mergeCarts`]({{page.baseurl}}/graphql/mutations/merge-carts.html) mutation transfers the contents of a guest cart into the cart of a logged-in customer.

*  **A customer can start an order on one device and complete it on another.** Use the [`customerCart`]({{page.baseurl}}/graphql/queries/customer-cart.html) query to obtain the cart ID for a logged-in customer.

*  **Layered navigation can use custom filters.** The `filter` attribute of the [`products`]({{page.baseurl}}/graphql/queries/products.html) query now requires the `ProductAttributeFilterInput` object. You can specify a pre-defined filter in this object, or [define a custom filter]({{page.baseurl}}/graphql/custom-filters.html). As a result, layered navigation on your website filters on the attributes you need.

*  **You can search categories by ID, name, and/or URL key.** The [`categoryList`]({{page.baseurl}}/graphql/queries/category-list.html) query replaces the deprecated `category` query.

*  **The [`ProductInterface`]({{page.baseurl}}/graphql/interfaces/product-interface.html) supports fixed product taxes (such as WEEE).** Use the [`storeConfig`]({{page.baseurl}}/graphql/queries/store-config.html) query to determine whether to store supports these taxes.

*  **The [`cart`]({{page.baseurl}}/graphql/queries/cart.html) object has been enhanced to include information about promotions and applied discounts at the line and cart levels.**

See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

*  PWA and Page Builder integration lets you use Page Builder to define your layout and render that content in a PWA Studio storefront.

*  Improved the getting-started experience through the use of `@magento/create-pwa` to scaffold your initial project using Venia as your template

*  Separation of the logic (Talons) and presentation pieces (`venia-ui`) of certain React hooks in Peregrine. Developers can now swap out either the logic or the presentation side of a component

*  Routing is now handled through the React Router (library of navigational components)

*  Refactored Venia [state management](https://magento.github.io/pwa-studio/technologies/basic-concepts/state-management/) to abstract and reduce dependency on Redux

*  Continued migration from REST to GraphQL

*  Performance improvements (service workers, cache, image optimization)

*  Breadcrumbs for improved storefront navigation

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases)

### dotdigital

*  Live Chat powered by dotdigital enables merchants to increase conversion rates, and keep customers coming back with real-time engagement. All Magento 2.3.x merchants (both Magento Open Source and Magento Commerce) can receive a free live chat agent without the need for a full dotdigital Engagement Cloud license.

*  Engagement Cloud includes a new Chat widget that makes it easy for shoppers to communicate in real time with customers as they shop in your store. Chat can be accessed from the Engagement Cloud section of the Magento configuration, or directly from your Engagement Cloud account. See [Engagement Cloud Chat](https://docs.magento.com/m2/ee/user_guide/marketing/engagement-cloud-chat.html).

*  Merchants can now sync additional campaigns from Engagement Cloud to Magento.

### B2B

New B2B features and improvements include the following:

*  **Ability to export Requisition Lists into CSV format**. B2B buyers can export the contents of Requisition Lists for local editing. These exported lists can then be uploaded into B2B Quick Order for creation of new orders, quotes, or lists. See [Managing Requisition Lists](https://docs.magento.com/m2/b2b/user_guide/customers/account-dashboard-requisition-lists-manage.html).<!--- MC-17417-->

*  **Granular ACLs for B2B modules**. Merchants can now restrict access to B2B features from the Admin, controlling which employees can work with B2B items and settings. <!--- MC-19649-->

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

#### Klarna

Klarna Payments has a new **Data sharing on load** field in the Magento configuration that can be set to share customer data either after the transaction is authorized, or when the Klarna payment method is selected during checkout. See [Setting Up Klarna](https://docs.magento.com/m2/ee/user_guide/payment/klarna-setup.html).

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.4 core code.

### Installation, upgrade, deployment

<!--- MC-19749-->

*  Upgrades no longer fail when deployments contain store information predefined in `app/etc/config.php`. Previously, MySQL locks occurred during the store import phase of upgrade, and Magento threw an error.

<!--- MC-20135-->

*  You can now successfully run `bin/magento setup:static-content:deploy` in developer mode. Previously, attempting to run `bin/magento setup:static-content:deploy` resulted in an error.

<!--- ENGCOM-5619-->

*  The `setup:db-declaration:generate-patch` command now generates a patch file using the `revert()` method as expected when the  `--revertable` option is set to **true**. *Fix submitted by Alexander Taranovsky in pull request [23848](https://github.com/magento/magento2/pull/23848)*. [GitHub-23847](https://github.com/magento/magento2/issues/23847)

<!--- ENGCOM-6059-->

*  You can now run `bin/magento maintenance:enable` or `bin/magento maintenance:disable` on a deployment with an empty database. Previously, Magento threw an error when you switched maintenance modes with an empty database. *Fix submitted by Ivan Koliadynskyy in pull request [24959](https://github.com/magento/magento2/pull/24959)*. [GitHub-23577](https://github.com/magento/magento2/issues/23577)

<!--- ENGCOM-6040-->

*  In rare circumstances, executing `composer update` disabled all Magento caches. This issue no longer occurs. *Fix submitted by adrian-martinez-interactiv4 in pull request [24892](https://github.com/magento/magento2/pull/24892)*. [GitHub-17634](https://github.com/magento/magento2/issues/17634)

<!--- ENGCOM-5724-->

*  Vendor names can now contain numbers. Previously, Magento threw an error. *Fix submitted by Jason Sylvester in pull request [24324](https://github.com/magento/magento2/pull/24324)*. [GitHub-8037](https://github.com/magento/magento2/issues/8037)

<!--- MC-19642-->

*  Single pipes in `composer.json` files have been changed to double pipes.

<!--- ENGCOM-6198-->

*  Patch dependencies no longer cause a patch to be applied twice. Previously, a patch on which there was a dependency was installed twice and entered twice in the `patch_list` table. *Fix submitted by korostii in pull request [24947](https://github.com/magento/magento2/pull/24947)*. [GitHub-24019](https://github.com/magento/magento2/issues/24019)

<!--- ENGCOM-5582-->

*  Static content deployment (`bin/magento setup:static-content:deploy`) no longer results in random deletion of CSS files or multiple exceptions. *Fix submitted by Ihor Sviziev in pull request [22886](https://github.com/magento/magento2/pull/22886)*. [GitHub-22880](https://github.com/magento/magento2/issues/22880)

<!--- ENGCOM-6205-->

*  You can successfully install Magento 2.3.4 with MySQL 8. Previously, installation stopped because the patch triggered forced indexation. However, Magento 2.3.4 is not yet fully compatible with MySQL 8, so use at your own risk. Full support for MySQL 8 is scheduled for Magento 2.4.0. *Fix submitted by Anton Kaplya in pull request [25357](https://github.com/magento/magento2/pull/25357)*. [GitHub-25294](https://github.com/magento/magento2/issues/25294)

<!--- ENGCOM-6218-->

*  You can now use SSL to connect Magento 2.x to an MySQL server. *Fix submitted by Malyovanets Nickolas in pull request [25398](https://github.com/magento/magento2/pull/25398)*. [GitHub-13561](https://github.com/magento/magento2/issues/13561)

<!--- MAGETWO-94919-->

*  Merchants can use a new system configuration setting to specify the API key for a currency provider. This key is needed when using the Currency Converter API  to import currency rates. Previously, a merchant could not import currency rates as expected from **Stores** > **Currency Rates**.

### AdminGWS

<!--- MC-18702-->

*  Administrators with restricted access can now view **Content** > **Pages**. Previously, when an administrator tried to access this page, Magento displayed this error: `You cannot define a correlation namestore_tablemore than once`.

### Analytics

<!--- ENGCOM-5978-->

*  `module-analytics/Model/ExportDataHandler.php` now generates data in the `Docroot/var/` folder as expected. *Fix submitted by Adarsh Manickam in pull request [24773](https://github.com/magento/magento2/pull/24773)*. [GitHub-24708](https://github.com/magento/magento2/issues/24708)

<!--- MC-19638-->

*  Clicking on the ESC key no longer closes the Admin Analytics popup dialog that Magento displays when an administrator first logs in.

<!--- MC-19639-->

*  Administrators can now use the TAB key only to navigate between the **Allow** and **Don't Allow** buttons. Previously, an administrator could use the TAB key to navigate out of the dialog.

### Backend

<!--- MC-20622-->

*  Magento now sets the correct Admin locale scope when generating email templates. Previously, email sent from the Admin included incorrect static file paths.

### Bundle products

<!--- MC-19438-->

*  The price and subtotal shown in the cart and mini cart for bundle products is now based on the quantity of items and tier price as expected. Previously, if you added a second product to the cart, Magento doubled the product price that was displayed in the cart.

<!--- MC-18963-->

*  The shopping cart now displays correct prices for bundle products when you use the **Add to Cart Button** to add them to cart twice.

<!--- ENGCOM-5534-->

*  Bundle products now show the correct price when bundle options include only one multiple select option. *Fix submitted by Rani Priya in pull request [23902](https://github.com/magento/magento2/pull/23902)*. [GitHub-23886](https://github.com/magento/magento2/issues/23886)

<!--- ENGCOM-5773-->

*  The price attribute of a bundle product is now disabled as expected when dynamic prices are enabled. Previously, when the **Allow Alert When Product Comes Back in Stock** setting or the **Allow Alert When Product Price Changes** setting were enabled, prices remained enabled.  *Fix submitted by Arushi Bansal in pull request [24077](https://github.com/magento/magento2/pull/24077)*. [GitHub-23890](https://github.com/magento/magento2/issues/23890)

<!--- ENGCOM-5953-->

*  Magento no longer strips bundled options from a bundle product when you duplicate it. Previously, when you duplicated a bundle product in the Admin, Magento removed the bundled options from the first product and transferred them to the duplicate product. *Fix submitted by Pieter Hoste in pull request [24703](https://github.com/magento/magento2/pull/24703)*. [GitHub-13126](https://github.com/magento/magento2/issues/13126), [GitHub-14112](https://github.com/magento/magento2/issues/14112)

### B2B

<!--- MC-17862-->

*  You can now access or refresh the Simple Product page for a product created by API. Previously, if you tried to access a product’s page after running `bin/magento cache:flush`, Magento threw an error.

<!--- MC-17007-->

*  You can now successfully set a valid customer to active status using the **Active** action that is available from the All Customers list Actions menu. Previously, when you tried to set a valid customer to active, Magento did not change the customer status and left the status field empty, which prevented you from including this customer when creating a company.

<!--- MC-19185-->

*  Magento no longer displays an option to review Terms and Conditions whenever you try to place an order from a quote. Previously,  when you tried to check out from a quote when trying to place an order, you had to check the terms box before clicking **Place order**, and Magento displayed an error.

<!--- MC-19396-->

*  Customer attributes are now displayed as expected on the Add New Company page. Previously, Magento did not display customer attributes on a company's Admin tab even when you enabled the **Values Required** and **Show on Storefront** settings, which prevented you from creating a new company.

<!--- MC-17193-->

*  Users with company administrative privileges can no longer submit reorders for accounts other than their own.

<!--- MC-17803-->

*  The Request a Quote page (accessed by clicking **Request a Quote** from the shopping cart) now works as expected in deployments running Internet Explorer 11.x.

<!--- MC-19650-->

*  PayPal Express now works as expected as a payment method for quotes. Previously, Magento displayed this error when you tried to complete payment using PayPal Express:  `We can't initialize Express Checkout`.

<!--- MC-20117-->

*  Magento now minimizes requisition lists as expected when multiple wishlists are enabled. Previously, the wishlist remained expanded even when you attempted to close it.

<!--- MC-19944-->

*  Shared catalogs are now listed and identified as expected in the **Product in Shared Catalogs** tab. Previously, when you saved shared categories for a product, Magento either did not display the categories  or did not display them as selected.

<!--- MAGETWO-67450-->

*  Currency rates are no longer duplicated on the Admin Order page.

<!--- MC-19837-->

*  Magento now handles decimal values in product quantities as expected when adding a product to a requisition list. Previously, when you entered a decimal value as a product quantity, Magento added the item quantity to the requisition list but omitted the decimal value.

<!--- MC-19836-->

*  The **Select All** checkbox on the Requisition List page now works as expected. Previously, when you deselected all products in a Requisition List, the **Select All** checkbox remained enabled.

<!--- MC-20212-->

*  The `cron` job that deletes inactive quotes now affects only standard carts, not negotiable quotes. Previously, a `cron` job deleted negotiable quotes, which resulted in data loss.

<!--- MC-21876-->

*  Administrators can now successfully place an order again from the Admin. Previously, if the administrator tried to place the order again from the Admin, the **Same as Billing Address** checkbox always defaulted to **true** when the reorder form was rendered. As a result, the billing address overrode the shipping address, and the original shipping address information was lost.

<!--- MC-19649-->

*  Merchants can now restrict access to B2B features from the Admin,  controlling which  employees can work with B2B items and settings.

<!--- MC-20208-->

*  Administrators with appropriate permissions can now create a new user when customer prefixes are enabled. Previously, Magento threw an error.

<!--- MC-21459-->

*  Magento now uses the language set for the store view in which the order was placed when displaying an order's payment information in the Admin. Previously, Magento always derived this information from  the default store view for  orders created in a multi-site deployment.

<!--- MC-21462-->

*  Magento now loads email templates as expected from the Admin **Marketing** > **Email Templates** > **Add New Template** page. Previously, when you tried to add a new template,  Magento displayed this error: `The template did not load. Please review the log for details`.

<!--- MC-21688-->

*  Magento now displays all available products as expected from the Admin Create Order page. Previously, Magento did not display all products whether added by SKU or by using **Add Products**.

<!--- MC-17824-->

*  The **Manufacturer's Suggested Retail Price** field on the Advanced Pricing page has been re-labeled to **Minimum Advertised Price**.

<!--- MC-19915-->

*  You can now successfully create a company from the storefront account of another company. Previously, Magento displayed an error message.

<!--- MC-17417-->

*  B2B buyers can now export Requisition Lists as a CSV file for local editing. These exported lists can then be uploaded into B2B Quick Order for creation of new orders, quotes, or list.

<!--- MC-19631-->

*  Prices are now shown and calculated correctly when additional products are added to a Quote by an administrative user. Previously, prices were shown as 0.00 for added products.

### Cache

<!--- MC-19712-->

*  Full-page caching now works as expected for non-default store views.

### Cart and checkout

<!--- MC-21926-->

*  Magento now applies the conditions that are imposed by multiple cart price rules correctly. Previously, Magento ignored conditions to remove free shipping when other discounts were valid.

<!--- MC-17869-->

*  Magento now correctly applies cart price rules that apply a 100% discount.

<!--- MC-99490-->

*  Gift messaging and gift wrapping options are now saved as expected for an order being shipped to multiple addresses. Previously, gift messages and gift wrapping did not appear in the final steps of the checkout workflow.

<!--- MC-19053-->

*  Guest users can now checkout after persistent shopping cart has been disabled. Previously, Magento displayed this error: `No cart with such entityId=0`.

<!--- MC-19152-->

*  Magento no longer displays custom dropdown customer address attribute option IDs  on the Review & Payment section of the checkout workflow when a guest checks out. Previously, Magento displayed the option ID instead of the option label for the selected attribute option.

<!--- MC-19637-->

*  Billing and Shipping information no longer disappear from the Payment section of the checkout workflow when an AJAX POST request fails.

<!--- MC-19271-->

*  Magento now displays an error when you upload an incorrect product SKU while creating an order in a non-default store in a multi-store deployment. Previously, Magento displayed an error when this scenario occurred in the default store.

<!--- MC-19894-->

*  Magento no longer displays customer address attribute option IDs  on the dropdown menu of the Shipping section of the checkout workflow. Previously, Magento displayed the option ID instead of the option label for the selected attribute option.

<!--- MC-15507-->

*  Magento no longer drops or updates the shipping address  after a customer update or adds a new billing address zip/postal code when the **My billing and shipping address are the same** setting is disabled.

<!--- MC-17469-->

*  Magento no longer throws a fatal error when you open the shopping cart in a separate window during multishipping checkout.

<!--- MC-17493-->

*  Cart Price Rules tables in multi-site deployments now show existing cart price rules as expected. Previously, the Cart Price Rules page displayed the **Search** button, number of records found, and navigation buttons, but did not display the grid of rules.

<!--- ENGCOM-5525-->

*  You can now use REST to add a  product with customizable options (for example, type checkbox) to the cart. Previously, Magento threw an informative error when you used the POST `/V1/guest-carts/{cartId}/items` endpoint. *Fix submitted by Denis Kopylov in pull request [23871](https://github.com/magento/magento2/pull/23871)*. [GitHub-23863](https://github.com/magento/magento2/issues/23863)

<!--- ENGCOM-5513-->

*  Validation logic has been added to the **Minimum Qty Allowed in Shopping Cart**  field on **Store** > **Configurations** > **Catalog** > **Inventory**. *Fix submitted by Eden Duong in pull request [23896](https://github.com/magento/magento2/pull/23896)*. [GitHub-23895](https://github.com/magento/magento2/issues/23895)

<!--- ENGCOM-5511-->

*  Magento now displays correct product quantities on the Items Ordered  tab of the order page when the price includes a decimal value.  *Fix submitted by Eden Duong in pull request [23943](https://github.com/magento/magento2/pull/23943)*. [GitHub-23940](https://github.com/magento/magento2/issues/23940)

<!--- ENGCOM-5454-->

*  Magento now saves the schedule update settings that are set in **Admin** > **Catalog** > **Categories** > **Category** > **Schedule Design Update** as expected when you change store view. *Fix submitted by kcnariya in pull request [23983](https://github.com/magento/magento2/pull/23983)*. [GitHub-23982](https://github.com/magento/magento2/issues/23982)

<!--- ENGCOM-5685-->

*  You can now enable the **uploaded file of file type custom** option for a product from the shopping cart. *Fix submitted by Rani Priya in pull request [24240](https://github.com/magento/magento2/pull/24240)*. [GitHub-24239](https://github.com/magento/magento2/issues/24239)

<!--- ENGCOM-5710-->

*  Validation logic has been added to the **Send Payment Failed Email Copy To** field of **Admin** > **Store** > **Configurations** > **Sales** > **Checkout** > **Payment Failed Email**. *Fix submitted by Eden Duong in pull request [24313](https://github.com/magento/magento2/pull/24313)*. [GitHub-24307](https://github.com/magento/magento2/issues/24307)

<!--- ENGCOM-5649-->

*  Magento now refreshes the shopping cart as expected when you remove a product from the cart side block. Previously, when you deleted a product from the shopping cart side block, Magento did not update the shopping cart. *Fix submitted by Ravi Chandra in pull request [22478](https://github.com/magento/magento2/pull/22478)*. [GitHub-11292](https://github.com/magento/magento2/issues/11292)

<!--- ENGCOM-5779-->

*  Magento now correctly calculates minicart height when child items contain margins. *Fix submitted by Shankar Konar in pull request [24451](https://github.com/magento/magento2/pull/24451)*. [GitHub-24441](https://github.com/magento/magento2/issues/24441)

<!--- ENGCOM-5790-->

*  Magento now displays an informative error message when a customer updates a shopping cart with a product quantity that is not in stock. Previously, under these conditions, Magento displayed an inaccurate error message. *Fix submitted by Gustavo Vicente Dauer in pull request [24380](https://github.com/magento/magento2/pull/24380)*. [GitHub-24366](https://github.com/magento/magento2/issues/24366)

<!--- ENGCOM-5811-->

*  You can now update the quantity of a product measured in decimals from the shopping cart when the **Qty uses decimal** setting is enabled. Previously, Magento did not update the product quantity. *Fix submitted by Rani Priya in pull request [24510](https://github.com/magento/magento2/pull/24510)*. [GitHub-24509](https://github.com/magento/magento2/issues/24509)

<!--- ENGCOM-5752-->

*  The **Shopping Cart** label has been changed to **Mini Cart** in the sidebar. *Fix submitted by Sunil in pull request [24411](https://github.com/magento/magento2/pull/24411)*. [GitHub-24409](https://github.com/magento/magento2/issues/24409)

<!--- ENGCOM-5807-->

*  The **Clear Shopping Cart** button now works as expected when running Magento with Internet Explorer. *Fix submitted by Eden Duong in pull request [24499](https://github.com/magento/magento2/pull/24499)*.  [GitHub-24491](https://github.com/magento/magento2/issues/24491)

<!--- ENGCOM-5807-->

*  Magento no longer empties the contents of a customer’s shopping cart when she presses **Enter** after changing a product’s quantity.  *Fix submitted by Eden Duong in pull request [24499](https://github.com/magento/magento2/pull/24499)*.  [GitHub-21499](https://github.com/magento/magento2/issues/21499)

<!--- ENGCOM-5837-->

*  Magento now includes the downloadable links associated with a downloadable product when you add the product to the shopping cart and then edit the cart. *Fix submitted by Rani Priya in pull request [24580](https://github.com/magento/magento2/pull/24580)*. [GitHub-24579](https://github.com/magento/magento2/issues/24579)

<!--- ENGCOM-5926-->

*  Discount descriptions are now displayed consistently throughout the product interface. *Fix submitted by Max Souza in pull request [24595](https://github.com/magento/magento2/pull/24595)*. [GitHub-3594](https://github.com/magento/magento2/issues/3594)

<!--- ENGCOM-6149-->

*  Magento now displays the **Update** and **Delete** buttons as expected in the minicart in mobile view. Previously, these buttons overlapped. *Fix submitted by Adarsh Manickam in pull request [25206](https://github.com/magento/magento2/pull/25206)*. [GitHub-25137](https://github.com/magento/magento2/issues/25137)

<!--- ENGCOM-6072-->

*  The storefront and Admin shopping cart summary fields are now displayed consistently  and reflect setting preferences. *Fix submitted by Eden Duong in pull request [25037](https://github.com/magento/magento2/pull/25037)*. [GitHub-25036](https://github.com/magento/magento2/issues/25036)

<!--- ENGCOM-6151-->

*  The `QuoteManagement::assignCustomer()` method now allows you to merge a guest cart with an active customer cart. As a result, the `PUT /V1/guest-carts/:guest-cart-id` call works as expected. *Fix submitted by Ivan Koliadynskyy in pull request [24862](https://github.com/magento/magento2/pull/24862)*. [GitHub-24808](https://github.com/magento/magento2/issues/24808)

<!--- MC-21906-->

*  Magento no longer displays a disabled product in a cart or on the storefront if it is disabled after a customer has added it to the cart using a coupon code. Previously, under these conditions, Magento threw an error, and the customer could not complete the order.

<!--- MC-20881-->

*  Magento now removes the `aria-invalid` attribute or sets the attribute value to **false** after successful  validation of the address entered into the checkout email field. [GitHub-21573](https://github.com/magento/magento2/issues/21573)

<!--- MC-21706-->

*  You can now add products from a non-default website to a cart from the Admin in a multi-site deployment. Previously, when you created a cart from the non-default site and tried to create an order in the Admin by adding  items to the cart, Magento did not add the items, but emptied the cart.

<!--- ENGCOM-5732-->

*  Magento no longer adds attribute values to the cart URL when you add a configurable product to the shopping cart from the product details page. *Fix submitted by Geeta Modi in pull request [24254](https://github.com/magento/magento2/pull/24254)*. [GitHub-21450](https://github.com/magento/magento2/issues/21450)

<!--- MC-21756-->

*  Persistent shopping cart now works as expected. Previously, Magento changed the customer group to `NOT_LOGGED_IN` before collecting quote totals if an order was placed using persistent shopping cart.

<!--- MC-18918-->

*  The shopping cart that contains items no longer displays a subtotal and order total of zero when the **Clear Persistence on Sign Out** setting is disabled and the **Redirect Customer to Account Dashboard after Logging in** setting is enabled.

<!--- ENGCOM-5521-->

*  Quote item prices are no longer NULL in cart-related events. *Fix submitted by Eden Duong in pull request [23839](https://github.com/magento/magento2/pull/23839)*. [GitHub-18685](https://github.com/magento/magento2/issues/18685)

<!--- MC-21568-->

*  Magento now successfully saves the shipping information that a customer enters when persistent cart is enabled and after a customer has logged in after her session has expired but before the interval specified by the Persistence Lifetime value has been exceeded. Previously, Magento did not save the shipping information, and displayed an error. [GitHub-23908](https://github.com/magento/magento2/issues/23908)

### Catalog

<!--- MC-19398-->

*  Editing the attribute set of a disabled product no longer enables the product on the storefront.

<!--- MC-19090-->

*  Magento now displays category banner images as expected on the category edit and the storefront category pages.

<!--- MC-17251-->

*  Magento no longer throws a fatal error during compilation of code that contains a preference for the category product indexer. [GitHub-22769](https://github.com/magento/magento2/issues/22769)

<!--- MC-19872-->

*  When an administrator sets the out-of-stock threshold for a product to a negative value and allows backorders below a quantity of  0, customers can backorder a product until the out-of-stock-threshold value matches the product's stock quantity. Previously, the out-of-stock threshold had no effect, and the given product stayed in stock and could be backordered without limit.

<!--- MC-19916-->

*  Storeview-specific attributes are now included in layered navigation results even when the **All Store Views** setting is not enabled.

<!--- MAGETWO-45666-->

*  Magento now displays the `Refresh Cache` message as expected when you change the layout of the category page.

<!--- MC-16650-->

*  Catalog search layered navigation results now include product attributes of type price.

<!--- MAGETWO-98748-->

*  Magento now highlights only the most recently selected category as expected on storefront pages that contain multiple categories. Previously, all selected category menus remained highlighted.

<!--- MC-19652-->

*  The performance of the Product Categories indexer has been improved. Previously, reindexing product categories could take up to 30 minutes.

<!--- MC-18784-->

*  Corrected an issue that caused category tree values to return null after upgrading from Magento 2.3.1 when multiple store views exist. [GitHub-23951](https://github.com/magento/magento2/issues/23951)

<!--- MC-16455-->

*  Magento no longer ignores  permissions restrictions for category management that are set in the GWS module. Previously, administrators with restricted permissions could change and create categories for which their permissions were restricted.

<!--- MC-19607-->

*  Clicking **Delete** on a Product page twice after selecting one or more products no longer deletes all products. [GitHub-15935](https://github.com/magento/magento2/issues/15935)

<!--- MC-20490-->

*  The catalog product lists are now displayed as expected when products contain custom attribute conditions.

<!--- MAGETWO-65232-->

*  Magento now successfully loads pages that implement the catalog product list widget when products contain custom attribute conditions. Previously, Magento threw this error: `Error filtering template: Notice: Undefined offset: 0 in .../app/code/Magento/CatalogWidget/Model/Rule/Condition/Product.php on line 221`.

<!--- ENGCOM-5679-->

*  Merchants can now scroll down the **Create New Product** page to determine whether the product has been saved if they enter invalid values in the **Schedule Design Update** fields. Previously, customers could not scroll to see if the product had been saved. *Fix submitted by Eden Duong in pull request [24242](https://github.com/magento/magento2/pull/24242)*. [GitHub-24241](https://github.com/magento/magento2/issues/24241)

<!--- ENGCOM-6127-->

*  Quote model extension attributes are now properly encoded and present on the checkout page as expected. Previously, these attributes were present as empty objects {}. *Fix submitted by skylineop in pull request [24771](https://github.com/magento/magento2/pull/24771)*. [GitHub-15959](https://github.com/magento/magento2/issues/15959)

<!--- MC-21755-->

*  Changing attributes sets now removes the attribute from the layered navigation and search results as expected.

<!--- MC-19737-->

*  The **Date** field customizable option for products now saves accurate values for stores in different time zones.

<!--- MC-19031-->

*  Custom attributes listed on the **Stores** > **Attributes** > **Product** > **Add New Attribute** page are now sorted alphabetically as expected. Previously, custom product attributes were sorted by value ID.

<!--- MC-15341-->

*  The default value for the **Products per Page on Grid**  setting  was updated to 12. This setting affects the number of products that are displayed on the storefront for products when the list view is specified. This change will affect new customers and customer who have not previously saved this setting.

<!--- ENGCOM-5739-->

*  You can now  change the page layout of the `catalog_product_view` page from a custom theme by changing `<theme_dir>/Magento_Catalog/layout/override/base/catalog_product_view.xml`. *Fix submitted by ochnygosch in pull request [24367](https://github.com/magento/magento2/pull/24367)*. [GitHub-24362](https://github.com/magento/magento2/issues/24362)

### CatalogInventory

<!--- MC-17524-->

*  You can now add a child product to the shopping cart if it does not have  a default source assigned.

### Catalog rule

<!--- MC-22135-->

*  Magento now correctly applies Catalog Price rules in deployments where the time zone is set to `EEST` (Europe/Helsinki) and `Locale = Finnish (Finland)`.

### Cleanup and simple code refactoring

<!--- ENGCOM-5549-->

*  The **Are you sure you want to delete this category?** message is now translatable. *Fix submitted by Eden Duong in pull request [24039](https://github.com/magento/magento2/pull/24039)*. [GitHub-24038](https://github.com/magento/magento2/issues/24038)

<!--- ENGCOM-5609-->

*  The PayPal setting section of the **Admin** > **Stores** >**Configuration** > **Sales** > **Payment Methods** page now has an expand/collapse icon. *Fix submitted by Eden Duong in pull request [24119](https://github.com/magento/magento2/pull/24119)*. [GitHub-24118](https://github.com/magento/magento2/issues/24118)

<!--- ENGCOM-5632-->

*  An incorrect XML namespace URL was removed from the generated sitemaps displayed at **Marketing** > **SEO & Search** > **Sitemap**. Previously, Magento returned a 404 error when you clicked on the sitemap link. *Fix submitted by Sunil in pull request [23716](https://github.com/magento/magento2/pull/23716)*. [GitHub-23706](https://github.com/magento/magento2/issues/23706)

<!--- ENGCOM-5684-->

*  The minicart now displays a product’s file type custom option. *Fix submitted by Rani Priya in pull request [24237](https://github.com/magento/magento2/pull/24237)*. [GitHub-24236](https://github.com/magento/magento2/issues/24236)

<!--- ENGCOM-5792-->

*  The spacing of the Select Input box on Admin pages with grids is now consistent with other pages in Magento. *Fix submitted by Nagamaiah333 in pull request [24359](https://github.com/magento/magento2/pull/24359)*. [GitHub-24152](https://github.com/magento/magento2/issues/24152)

<!--- ENGCOM-5784-->

*  Fixed misalignment of the scope icon and the store view-specific label on the **Admin** > **Store** > **Settings** > **Order status** > **Create New Status** page. *Fix submitted by Eden Duong in pull request [24449](https://github.com/magento/magento2/pull/24449)*. [GitHub-24440](https://github.com/magento/magento2/issues/24440)

<!--- ENGCOM-5935-->

*  The What's this? link in the Remember me section of the storefront login page now behaves as expected. *Fix submitted by Vinicius Rafael Dziuba in pull request [24602](https://github.com/magento/magento2/pull/24602)*. [GitHub-24511](https://github.com/magento/magento2/issues/24511)

<!--- ENGCOM-5968-->

*  Corrected misalignment of the checkboxes and associated labels on the **Admin** > **Catalog** >  **Products** > **Update Attributes** page. *Fix submitted by Adarsh Manickam in pull request [24761](https://github.com/magento/magento2/pull/24761)*. [GitHub-24740](https://github.com/magento/magento2/issues/24740)

<!--- ENGCOM-5981-->

*  Fixed inconsistent and improper capitalization in the **Admin** > **Marketing** > **Communications** > **Email Templates** > **Create a New Template** page. *Fix submitted by Adarsh Manickam in pull request [24804](https://github.com/magento/magento2/pull/24804)*. [GitHub-24803](https://github.com/magento/magento2/issues/24803)

<!--- ENGCOM-6033-->

*  The `Magento\CatalogUrlRewrite\Model\Storage\DynamicStorage::getCategoryUrlSuffix()` method return value has been changed to type `string`. *Fix submitted by Brent Robert in pull request [24907](https://github.com/magento/magento2/pull/24907)*. [GitHub-24903](https://github.com/magento/magento2/issues/24903)

<!--- ENGCOM-6114-->

*  The drop-down icon now remains visible when you click on **Load Template** while creating an email template from the Admin. *Fix submitted by Gaurav Agarwal in pull request [25022](https://github.com/magento/magento2/pull/25022)*. [GitHub-24840](https://github.com/magento/magento2/issues/24840)

<!--- ENGCOM-6145-->

*  Fixed alignment of the wishlist icon on the shopping cart in mobile view. *Fix submitted by Shubham Sharma in pull request [25200](https://github.com/magento/magento2/pull/25200)*. [GitHub-20502](https://github.com/magento/magento2/issues/20502)

<!--- ENGCOM-6157-->

*  Corrected misalignment and standardized design of the  Other PayPal Payment Solutions  header on the Store Configuration page. *Fix submitted by Arvinda Kumar in pull request [25241](https://github.com/magento/magento2/pull/25241)*. [GitHub-25240](https://github.com/magento/magento2/issues/25240)

<!--- ENGCOM-5550-->

*  Duplicate labels in the Admin **Sales** > **Transactions** Payment Method table have been removed. *Fix submitted by Eden Duong in pull request [24041](https://github.com/magento/magento2/pull/24041)*. [GitHub-24040](https://github.com/magento/magento2/issues/24040)

<!--- ENGCOM-5531-->

*  Added a missing label on **Marketing** > **Search Synonyms**  > **New Synonym Group**. *Fix submitted by Eden Duong in pull request [23954](https://github.com/magento/magento2/pull/23954)*. [GitHub-23953](https://github.com/magento/magento2/issues/23953)

<!--- ENGCOM-6227-->

*  Corrected the misalignment of the **Cache Type** checkboxes throughout the Admin. *Fix submitted by Mateusz Krzeszowiak in pull request [25443](https://github.com/magento/magento2/pull/25443)*. [GitHub-25429](https://github.com/magento/magento2/issues/25429)

<!--- ENGCOM-6147-->

*  Fixed display issue with the placeholder text in the newsletter subscription block in the global footer that occurred in mobile view. *Fix submitted by Christos Stergianos in pull request [25184](https://github.com/magento/magento2/pull/25184)*. [GitHub-21592](https://github.com/magento/magento2/issues/21592)

### CMS content

<!--- MC-20709-->

*  The checkboxes in the Dynamic Block Rotator (used when inserting a widget during the creation of a CMS page) have been corrected, and the widgets are now fully clickable as expected.

<!--- MC-18997-->

*  CMS pages now remain assigned to the hierarchy when you create a schedule update for the CMS page.

<!--- ENGCOM-5487-->

*  You can now save CMS blocks with no content.  *Fix submitted by Eden Duong in pull request [23801](https://github.com/magento/magento2/pull/23801)*. [GitHub-23800](https://github.com/magento/magento2/issues/23800)

### Command-line interface (CLI commands)

<!--- ENGCOM-5955-->

*  Exception handling messages for CLI commands have been  edited to be specific, informative, and relevant to the context in which the error occurs. *Fix submitted by Pavel Bystritsky in pull request [24734](https://github.com/magento/magento2/pull/24734)*. [GitHub-24678](https://github.com/magento/magento2/issues/24678), [GitHub-24043](https://github.com/magento/magento2/issues/24043)

<!--- ENGCOM-5970-->

*  `bin/magento setup:backup --media` now successfully backs up a symbolically linked `pub/media` directory. *Fix submitted by Ivan Koliadynskyy in pull request [24755](https://github.com/magento/magento2/pull/24755)*. [GitHub-13218](https://github.com/magento/magento2/issues/13218)

### Configurable products

<!--- MC-22142-->

*  Magento now maintains the sort order of uploaded simple images when they are uploaded through the Create Configurations wizard.

<!--- MC-18810-->

*  A configurable product’s options list now shows out-of-stock products as expected when the **Display Out of Stock Products** option is enabled.

<!--- MC-18847-->

*  You can now remove special prices from a product without affecting the price of associated products. Previously, after removing the special price from one simple product, Magento stopped displaying the  regular price for all associated simple products.

<!--- MC-20225-->

*  The performance of edit and save operations on configurable products has been improved.

<!--- MC-19689-->

*  The Admin configurable product list now displays all simple products with a quantity of 0 as expected. Previously, a simple product disappeared from this list when a product quantity was set to 0.

<!--- ENGCOM-5937-->

*  Magento no longer throws an error when you try to add new attribute options to  a configurable product. *Fix submitted by federeggiani in pull request [24659](https://github.com/magento/magento2/pull/24659)*. [GitHub-14240](https://github.com/magento/magento2/issues/14240)

<!--- ENGCOM-6015-->

*  Custom attribute loading now works as expected. Previously, the `getUsedProducts()` method’s optional `$requiredAttributeIds` parameter was not used, which prevented the loading of custom attributes. *Fix submitted by Laura Folco in pull request [24875](https://github.com/magento/magento2/pull/24875)*. [GitHub-24483](https://github.com/magento/magento2/issues/24483)

### Cookies

<!--- ENGCOM-6129-->

*  Magento no longer redirects customers to the Cookie CMS page upon login when the **Redirect to CMS-page if Cookies are Disabled** setting is disabled. *Fix submitted by Eden Duong in pull request [25152](https://github.com/magento/magento2/pull/25152)*. [GitHub-25148](https://github.com/magento/magento2/issues/25148)

### Cron

<!--- ENGCOM-5717-->

*  A new flag has been added to the `bin/magento cron:install` command that permits you to add only mandatory entries to the `crontab` file of the server on which Magento is running. The `--non-optional` flag (or `-d` for short) adds only one of three possible lines to the `crontab` file. Without this flag, `bin/magento cron:install` adds three lines to the `crontab` of the server. Only one of those added lines is necessary to run Magento, and many installations are configured such that the two optional lines are not needed. *Fix submitted by Alexander Taranovsky in pull request [24187](https://github.com/magento/magento2/pull/24187)*. [GitHub-10040](https://github.com/magento/magento2/issues/10040), [GitHub-24186](https://github.com/magento/magento2/issues/24186)

<!--- ENGCOM-5934-->

*  The `bin/magento cron:run` command now  adds an entry for `currency_rates_update` in the `cron_schedule` table as expected. *Fix submitted by Bruno Roeder in pull request [24590](https://github.com/magento/magento2/pull/24590)*. [GitHub-23846](https://github.com/magento/magento2/issues/23846)

### Customer

<!--- MC-19824-->

*  The condition **Total Number of Orders equals or greater than 0** now affects customer segments as expected. Previously, when a customer segment was created with this condition, only customers with no orders (0) were affected.

<!--- MC-19016-->

*  The **Date of Birth** field on the customer registration form no longer defaults to **1/1/1970** in deployments  that already contain a registered customer with the same email in stores using the `en_AU` locale.

<!--- MC-18935-->

*  Magento now correctly applies customer segment cart price rules when products are added to cart from different websites in a multi-website deployment. Previously, discounts were not applied correctly for all products in the cart.

<!--- MC-19302-->

*  Magento no longer logs an error in `exception.log` when a customer logs in to a store for which the merchant has created a customer segment defined by the **Up To Date(period)** condition.

<!--- MC-19440-->

*  The list of countries accessible from the **Add New Address** field of the checkout workflow now displays only countries that have been defined in **Admin** > **Stores** > **Configuration** > **General**.

<!--- MC-17201-->

*  Delegated account creation no longer fails when the customer address contains custom attributes. [GitHub-22952](https://github.com/magento/magento2/issues/22952)

<!--- ENGCOM-5842-->

*  Magento now clears the **State/Province** field on the customer address page when you change the value for country while editing a customer address. *Fix submitted by Lucas Calazans in pull request [24597](https://github.com/magento/magento2/pull/24597)*. [GitHub-23460](https://github.com/magento/magento2/issues/23460)

<!--- ENGCOM-6057-->

*  Magento now runs validation checks on the values entered into the **Date of Birth** field in the Admin Add New customer page. *Fix submitted by Tiago de Oliveira Castro Teixeira Pinto in pull request [24588](https://github.com/magento/magento2/pull/24588)*. [GitHub-22692](https://github.com/magento/magento2/issues/22692)

<!--- MC-17925-->

*  Spaces are now trimmed as expected from values entered into the customer account **Phone** field.

<!--- ENGCOM-5971-->

*  The Reset Password Confirmation Link email is now scoped appropriately for global customers. Previously, Magento always sent email from the default store, not the store to which the customer was assigned.  *Fix submitted by Roman Kis in pull request [24783](https://github.com/magento/magento2/pull/24783)*. [GitHub-23295](https://github.com/magento/magento2/issues/23295)

### Custom customer attributes

<!--- MC-19696-->

*  You can now successfully create and implement a plugin for `Magento\CustomAttributeManagement\Helper\Data`.

<!--- MAGETWO-99838-->

*  Magento now displays an informative error message when a customer tries to place an order without adding an address for the payment method and the **My billing and shipping address are the same** checkbox is unchecked.

### Database media storage

<!--- ENGCOM-5498-->

*  The `bin/magento catalog:image:resize` command now processes images from the database as expected when files do not exist locally. *Fix submitted by gwharton in pull request [23913](https://github.com/magento/magento2/pull/23913)*. [GitHub-23911](https://github.com/magento/magento2/issues/23911)

<!--- ENGCOM-5573-->

*  Enabling **Flush Catalog Images Cache** on **System** > **Cache Management** now clears all cached image files from both the filesystem and database. Previously, Magnto removed images from the filesystem only. *Fix submitted by gwharton in pull request [24088](https://github.com/magento/magento2/pull/24088)*. [GitHub-23516](https://github.com/magento/magento2/issues/23516)

### Declarative schema

<!--- ENGCOM-6166-->

*  The data/schema patch `getAliases()` method now works as expected. *Fix submitted by korostii in pull request [25265](https://github.com/magento/magento2/pull/25265)*. [GitHub-23031](https://github.com/magento/magento2/issues/23031)

<!--- MC-22807-->

*  The `WISHLIST_ITEM_OPTION_PRODUCT_ID_CATALOG_PRODUCT_ENTITY_ENTITY_ID` foreign key has been removed from declarative schema.

### Downloadable products

<!--- ENGCOM-5865-->

*  Magento no longer displays a console error when you select all links for  a downloadable product on the storefront. *Fix submitted by Rani Priya in pull request [24634](https://github.com/magento/magento2/pull/24634)*. [GitHub-24633](https://github.com/magento/magento2/issues/24633)

<!--- ENGCOM-6047-->

*  Magento now displays the **Unselect all** button on the shopping cart page when a customer selects a downloadable product with multiple options. *Fix submitted by Adarsh Manickam in pull request [24800](https://github.com/magento/magento2/pull/24800)*. [GitHub-24785](https://github.com/magento/magento2/issues/24785)

### Dynamic block (formerly banner)

<!--- MC-21788-->

*  Dynamic block content is now invalidated as expected when the store view is changed in a multistore deployment.

<!--- MC-13951-->

*  Schema upgrades no longer result in unexpected foreign key re-creation and column modifications.

<!--- MC-19851-->

*  Cart Price rules now remain attached as expected to a dynamic block when you add the rule to related promotions and then open the Related Dynamic Blocks tab.

<!--- MC-19000-->

*  Checkboxes that are positioned inside the list of widgets on **Admin** > **Content** > **Widgets** are now fully clickable as expected.

<!--- MC-19738-->

*  Magento no longer displays a dynamic block after its associated cart price rule has expired or been set to inactive.

<!--- MC-22387-->

*  The Visibility Column on the Dynamic Block grid now accurately reflects the scope assigned to the listed dynamic blocks.

### EAV

<!--- MC-19777-->

*  The product attribute edit page now loads successfully when you try to edit an attribute value from the Admin. Previously, Magento threw a 500 error.

<!--- MC-18701-->

*  The Attribute Option update API no longer creates multiple options with the same value.

<!--- MC-19623-->

*  The `catalog_product_entity_varchar/catalog_product_entity_int` tables are now updating with correct values. Previously, when you tried to access the product using REST, Magento displayed deleted custom attribute option values.

<!--- ENGCOM-5618-->

*  Magento now correctly saves the values assigned to the `sort_order` and `attribute_group_code` attributes by the `POST /V1/products/attribute-sets/groups` call. *Fix submitted by Eden Duong in pull request [23690](https://github.com/magento/magento2/pull/23690)*. [GitHub-23634](https://github.com/magento/magento2/issues/23634)

<!--- ENGCOM-5367-->

*  You can now perform mass actions on items in a grid that uses an EAV collection. Previously, grids created with the now-deprecated `Magento\Backend\Block\Widget\Grid` (as many third-party extensions are) threw an exception when you tried to perform a mass action. *Fix submitted by Thomas Klein in pull request [23452](https://github.com/magento/magento2/pull/23452)*.[GitHub-23451](https://github.com/magento/magento2/issues/23451)

### Email

<!--- ENGCOM-6034-->

*  The Registration and Contact us pages now correctly handle customer names that contain non-ASCII characters. Previously, if the customer name contained non-ASCII characters, the user did not receive the email. *Fix submitted by elvinristi in pull request [24906](https://github.com/magento/magento2/pull/24906)*. [GitHub-24902](https://github.com/magento/magento2/issues/24902)

<!--- ENGCOM-5571-->

*  The product page Send Email to Friend email form is now sent from the email address configured as **sender** in the system configuration **General Contact** field. Previously, Magento displayed an error because the value in this field was handled  as a user-defined value, not a static value. *Fix submitted by Eden Duong in pull request [23684](https://github.com/magento/magento2/pull/23684)*. [GitHub-23646](https://github.com/magento/magento2/issues/23646)

<!--- ENGCOM-5626-->

*  Validation logic has been added to the email fields on  **Admin** > **Stores** > **Configuration** > **Sales** >  **Sales Emails**. *Fix submitted by Eden Duong in pull request [24138](https://github.com/magento/magento2/pull/24138)*. [GitHub-24137](https://github.com/magento/magento2/issues/24137)

<!--- ENGCOM-5710-->

*  Validation logic has been added to the **Send Payment Failed Email Copy To** field of  **Admin** > **Stores** > **Configuration** > **Sales** > **Checkout**. *Fix submitted by Eden Duong in pull request [24313](https://github.com/magento/magento2/pull/24313)*. [GitHub-24312](https://github.com/magento/magento2/issues/24312)

### Frameworks

<!--- MC-19686-->

*  Customers no longer have problems logging in to a Magento deployment on which `bin/magento customer:hash:upgrade` has been run and that also runs PHP 7.2.19 and has the sodium extension installed (libsodium  1.0.13 or greater). [GitHub-23517](https://github.com/magento/magento2/issues/23517)

<!--- MC-17633-->

*  The `bin/magento setup:db:status` command now returns successfully after you’ve run `bin/magento setup:upgrade` on a deployment running Maria DB version 10.2. Previously, the `bin/magento setup:db:status` command returned this message: `Declarative Schema is not up to date` and indicated that we need to run `bin/magento setup:upgrade`. [GitHub-19597](https://github.com/magento/magento2/issues/19597)

<!--- MC-19701-->

*  Country lists now provide a translation of Taiwan as Taiwan, Province of China.

<!--- MC-18193-->

*  Magento now sends sales-related email to the correct customer when `sales_emails` cron has an error.

<!--- MC-21481-->

*  The `magento/framework/Mail/Template/TransportBuilder.php` class has been refactored to make sure that `$this->messageData` is updated when `$email` is an `array` and `isset($this->messageData[$addressType])` is set to **false**.

<!--- MC-22153-->

*  Magento no longer throws an error when you open an image from the product image gallery from the storefront product detail page. Previously, Magento returned this JavaScript error in the console: `TypeError: The expression cannot be converted to return the specified type`.

<!--- MAGETWO-99401-->

*  Order-related `save_after_commit` callbacks are now called for guest checkouts as expected. Previously, they were not dispatched.

<!--- MC-17332-->

*  The product counter and page lister on **Catalog** > **Products** now works correctly after the **Add Store Code to Urls** setting has been enabled or disabled.

<!--- MC-19250-->

*  The new CONSUMERS_WAIT_FOR_MAX_MESSAGES environment variable lets merchants configure how consumers process messages from the message queue. You can set this variable by adding the `consumers-wait-for-messages` option to `bin magento queue:consumers:start`. Using this option can help Magento deployments avoid being affected by long delays in message queue processing. See [Start message queue consumers](https://devdocs.magento.com/guides/v2.3/config-guide/mq/manage-message-queues.html).

### JavaScript framework

<!--- ENGCOM-5994-->

*  Unnecessary define checks have been removed from JavaScript modules that are used by requireJS. *Fix submitted by Bartłomiej Szubert in pull request [24833](https://github.com/magento/magento2/pull/24833)*. [GitHub-22747](https://github.com/magento/magento2/issues/22747)

<!--- ENGCOM-5815-->

*  Excluding minified JavaScript files from the generated JavaScript bundles using the `view.xml` file inside a theme now works as expected. Previously, you needed to explicitly provide both the non-minified filename and the minified filename. Only the exact filename as it exists on the filesystem is needed now. The other variant is handled automatically. This reduces the size of the generated JavaScript bundle files in default Magento themes and may also improve the JavaScript bundle file size in custom themes. *Fix submitted by Pieter Hoste in pull request [24506](https://github.com/magento/magento2/pull/24506)*. [GitHub-4506](https://github.com/magento/magento2/issues/4506), [GitHub-13558](https://github.com/magento/magento2/issues/13558), [GitHub-14357](https://github.com/magento/magento2/issues/14357)

### General fixes

<!--- ENGCOM-5520-->

*  Basic validation steps have been added to fields on the **Store** > **Configuration** > **Catalog** page. *Fix submitted by Eden Duong in pull request [23723](https://github.com/magento/magento2/pull/23723)*. [GitHub-23721](https://github.com/magento/magento2/issues/23721)

<!--- ENGCOM-5468-->

*  Magento now displays an error message when validation fails when you click **Generate** on the Manage Coupon Codes page and the applicable sales rule has the **Use Auto Generation** setting  enabled. *Fix submitted by Eden Duong in pull request [23781](https://github.com/magento/magento2/pull/23781)*. [GitHub-23778](https://github.com/magento/magento2/issues/23778)

<!--- ENGCOM-5572-->

*  Magento now correctly redirects you to the customer account page when you click the **Back** button on the Manage Addresses page. *Fix submitted by Eden Duong in pull request [24079](https://github.com/magento/magento2/pull/24079)*. [GitHub-24058](https://github.com/magento/magento2/issues/24058)

<!--- ENGCOM-5762-->

*  The New Block form no longer displays a **Store View** field when your deployment is in single-store mode. *Fix submitted by Eden Duong in pull request [24397](https://github.com/magento/magento2/pull/24397)*. [GitHub-24387](https://github.com/magento/magento2/issues/24387)

<!--- ENGCOM-6158-->

*  Images now change as expected when you swipe over the image when using a touch screen. *Fix submitted by Eden Duong in pull request [25061](https://github.com/magento/magento2/pull/25061)*. [GitHub-25060](https://github.com/magento/magento2/issues/25060)

<!--- ENGCOM-5468-->

*  Magento now displays an informative error message if validation fails when clicking **Generate** when managing coupon codes from the Admin. *Fix submitted by Eden Duong in pull request [23781](https://github.com/magento/magento2/pull/23781)*. [GitHub-23778](https://github.com/magento/magento2/issues/23778)

<!--- ENGCOM-5528-->

*  Access Control Permissions (ACLs) have been improved for the following cart-related tasks: export CSV and Excel file of abandoned cart and abandoned products reports. Previously, administrators with no permission to this information could export these reports. *Fix submitted by Eden Duong in pull request [23925](https://github.com/magento/magento2/pull/23925)*. [GitHub-23924](https://github.com/magento/magento2/issues/23924)

<!--- ENGCOM-5538-->

*  Validation logic has been added to the **Sort order** field of the New Rating form (**Stores** > **Rating**).  *Fix submitted by Eden Duong in pull request [23985](https://github.com/magento/magento2/pull/23985)*. [GitHub-23984](https://github.com/magento/magento2/issues/23984)

<!--- ENGCOM-5577-->

*  You can now successfully  filter products by multiple attributes in the Step 2: Attribute Values  section of the Admin Create Product Configuration page. Previously, only one of the selected values were retained when you tried to filter. *Fix submitted by Eden Duong in pull request [24000](https://github.com/magento/magento2/pull/24000)*. [GitHub-23999](https://github.com/magento/magento2/issues/23999)

<!--- ENGCOM-5594-->

*  Problems with less compilation  in Magento's blank theme when using an alternative less compiler than the one that ships with Magento by default have been resolved. *Fix submitted by Pieter Hoste in pull request [24001](https://github.com/magento/magento2/pull/24001)*. [GitHub-23619](https://github.com/magento/magento2/issues/23619)

<!--- ENGCOM-5631-->

*  Magento now extracts handles from layout updates before merging layouts. *Fix submitted by Sergey Solo in pull request [23918](https://github.com/magento/magento2/pull/23918)*. [GitHub-5901](https://github.com/magento/magento2/issues/5901)

<!--- ENGCOM-5638-->

*  The `Convert to Plain Text?`  confirmation message that Magento displays when you click **Delete** on the Admin Edit Email Template page now follows Magento design guidelines. *Fix submitted by Eden Duong in pull request [24083](https://github.com/magento/magento2/pull/24083)*. [GitHub-24082](https://github.com/magento/magento2/issues/24082)

<!--- ENGCOM-5655-->

*  The outdated URL for the HTTP Strict Transport Security page (accessed from **Admin** > **Store** > **Configuration** > **General** > **Web**) has been updated to `app/code/Magento/Backend/etc/adminhtml/system.xml`. *Fix submitted by Eden Duong in pull request [24165](https://github.com/magento/magento2/pull/24165)*. [GitHub-24164](https://github.com/magento/magento2/issues/24164)

<!--- ENGCOM-5661-->

*  Validation logic has been added to the **Layered Navigation Price Step** field of the **Admin** > **Catalog** > **Categories** page. *Fix submitted by Eden Duong in pull request [24170](https://github.com/magento/magento2/pull/24170)*. [GitHub-24169](https://github.com/magento/magento2/issues/24169)

<!--- ENGCOM-5659-->

*  Validation logic has been added to the **Oauth** field of the **Admin** > **Store** > **Configuration** > **Service** page. *Fix submitted by Eden Duong in pull request [24173](https://github.com/magento/magento2/pull/24173)*. [GitHub-24172](https://github.com/magento/magento2/issues/24172)

<!--- ENGCOM-5672-->

*  Validation logic has been added to the **Connection Timeout in Seconds** field of the **Admin** > **Store** > **Configuration** > **General** > **Currency Setup**  page. *Fix submitted by Eden Duong in pull request [24205](https://github.com/magento/magento2/pull/24205)*. [GitHub-24204](https://github.com/magento/magento2/issues/24204)

<!--- ENGCOM-5682-->

*  Magento now displays a confirmation message when you choose a mass delete operation on subscribers on the  **Admin** > **Marketing** > **Newsletter Subscribers** page.  *Fix submitted by Eden Duong in pull request [24249](https://github.com/magento/magento2/pull/24249)*. [GitHub-24248](https://github.com/magento/magento2/issues/24248)

<!--- ENGCOM-5704-->

*  Validation logic has been added to the sort order field on the **Admin** > **Stores** > **All Stores** > **Create Store View or Website**  page. *Fix submitted by Eden Duong in pull request [24294](https://github.com/magento/magento2/pull/24294)*. [GitHub-24293](https://github.com/magento/magento2/issues/24293)

<!--- ENGCOM-5761-->

*  XML attributes are now encoded to allow special symbols in tag attributes. *Fix submitted by Sergey Solo in pull request [24336](https://github.com/magento/magento2/pull/24336)*.

<!--- ENGCOM-5131-->

*  Validation logic has been added to options for dynamically created product attributes before Magento adds these attribute values to the product database. Magento now checks whether the `optionArray` exists in the database before adding it. Previously, Magento created duplicate options for the same store.  *Fix submitted by Maksym Novik in pull request [21424](https://github.com/magento/magento2/pull/21424)*. [GitHub-16852](https://github.com/magento/magento2/issues/16852)

<!--- ENGCOM-5805-->

*  Calls to `catalogProductTierPriceManagementV1GetListGet` now handle requests as expected. Previously, calls failed when querying a configurable product. *Fix submitted by Ashutosh Srivastva in pull request [24502](https://github.com/magento/magento2/pull/24502)*. [GitHub-24410](https://github.com/magento/magento2/issues/24410)

<!--- ENGCOM-5746-->

*  The HTML `br` tag is now an allowed tag. *Fix submitted by Denis Solovyov in pull request [24392](https://github.com/magento/magento2/pull/24392)*. [GitHub-24329](https://github.com/magento/magento2/issues/24329)

<!--- ENGCOM-5840-->

*  The Admin notification counter now correctly handles double-digit values. *Fix submitted by Alexandre Thurow in pull request [24589](https://github.com/magento/magento2/pull/24589)*. [GitHub-23473](https://github.com/magento/magento2/issues/23473)

<!--- ENGCOM-5863-->

*  You can now successfully select an image from the image gallery when you configure a theme (**Admin** > **Content** > **Configuration**). *Fix submitted by Rani Priya in pull request [24431](https://github.com/magento/magento2/pull/24431)*. [GitHub-24430](https://github.com/magento/magento2/issues/24430)

<!--- ENGCOM-6229-->

*  Modal triggers can now be added after module initialization. *Fix submitted by Mateusz Krzeszowiak in pull request [25435](https://github.com/magento/magento2/pull/25435)*. [GitHub-9671](https://github.com/magento/magento2/issues/9671)

<!--- ENGCOM-6158-->

*  You can now swipe on different images in the fullscreen product gallery on touch devices or when touch emulation is enabled in Chrome. *Fix submitted by Mateusz Krzeszowiak in pull request [25233](https://github.com/magento/magento2/pull/25233)*. [GitHub-25231](https://github.com/magento/magento2/issues/25231)

<!--- ENGCOM-5738-->

*  The Admin Address Country drop-down list now takes its values from  the **Allow Countries**  setting that is configured for the Website Store View where the order was made.  *Fix submitted by Oleksii Lisovyi in pull request [24345](https://github.com/magento/magento2/pull/24345)*. [GitHub-12560](https://github.com/magento/magento2/issues/12560)

<!--- ENGCOM-6043-->

*  The Available Countries list  (**Stores** > **General**) has been updated to include the countries identified in the latest version of the Common Locale Data Repository (version  36). *Fix submitted by Bartłomiej Szubert in pull request [24927](https://github.com/magento/magento2/pull/24927)*. [GitHub-24710](https://github.com/magento/magento2/issues/24710)

<!--- ENGCOM-5640-->

*  Magento no longer serializes user data multiple times when data is loaded by the `loadByUsername` method. *Fix submitted by Jamie Saunders in pull request [23827](https://github.com/magento/magento2/pull/23827)*. [GitHub-23824](https://github.com/magento/magento2/issues/23824)

<!--- ENGCOM-6065-->

*  Method chaining now works as expected in extensions and customizations that are based on a product collection entity. *Fix submitted by Mahesh Singh in pull request [24973](https://github.com/magento/magento2/pull/24973)*. [GitHub-24964](https://github.com/magento/magento2/issues/24964)

<!--- ENGCOM-5909-->

*  The use of ObjectManager in the core code has been replaced  with factories and constructor dependency injections wherever possible. *Fix submitted by Yurii in pull request [24661](https://github.com/magento/magento2/pull/24661)*. [GitHub-24646](https://github.com/magento/magento2/issues/24646)

<!--- ENGCOM-5733-->

*  Magento now displays a bad request error message when the confirmation link sent to the new customer email is not valid. *Fix submitted by Alexander Taranovsky in pull request [24331](https://github.com/magento/magento2/pull/24331)*. [GitHub-24330](https://github.com/magento/magento2/issues/24330)

<!--- MC-19904-->

*  Catalog event start and end dates are not changed when you edit the event.

<!--- ENGCOM-5592-->

*  Running `diff -rq ./build-1/ ./build-2/`  on two different builds of the same commit now yields the same results in generated/metadata folders. Previously, these results were not reproducible.  *Fix submitted by Ihor Sviziev in pull request [23325](https://github.com/magento/magento2/pull/23325)*. [GitHub-23324](https://github.com/magento/magento2/issues/23324)

### Gift cards

<!--- MC-16375-->

*  Guests can now pay for gift cards with PayPal (Braintree) when Payment Action is set to Authorize and Capture.

<!--- MC-17542-->

*  Fixed a condition that caused an error with  grand total calculations when a gift card was applied to a cart.

### Gift wrapping

<!--- MC-18005-->

*  Magento now correctly processes orders that include gift wrapping for multiple products when an order is paid for using PayPal Express. Previously, Magento displayed this error: `PayPal gateway has rejected request. The totals of the cart item amounts do not match order amounts (#10413: Transaction refused because of an invalid argument. See additional error messages for details)`.

### Google Tag Manager

<!--- ENGCOM-4731-->

*  Magento no longer throws a fatal error (500 error) when you try to enable  Google Tag Manager.  *Fix submitted by Raul E Watson*. [GitHub-20164](https://github.com/magento/magento2/issues/20164)

### Image

<!--- ENGCOM-5569-->

*  The size of images displayed in RSS feeds is now determined by the `view.xml` file. *Fix submitted by Sunil in pull request [23533](https://github.com/magento/magento2/pull/23533)*. [GitHub-23516](https://github.com/magento/magento2/issues/23516)

<!--- ENGCOM-5635-->

*  The content attribute for `msapplication-TileImage` now resolves to a localised theme path.  *Fix submitted by Burlacu Vasilii in pull request [21798](https://github.com/magento/magento2/pull/21798)*. [GitHub-5023](https://github.com/magento/magento2/issues/5023)

<!--- ENGCOM-5639-->

*  When you move a category, the list of categories prepared for re-indexing now includes all affected subcategories when Flat Catalog is enabled. Previously, the order of categories on the storefront remained incorrect until the flat category was re-indexed. *Fix submitted by Sergey Solo in pull request [23820](https://github.com/magento/magento2/pull/23820)*. [GitHub-3993](https://github.com/magento/magento2/issues/3993)

<!--- MC-15523-->

*  Watermarks cannot be configured for swatch images.

### Import/export

<!--- ENGCOM-5992-->

*  Magento now creates an advanced price export file as expected when exporting more than 5000 products. Previously, Magento threw an error and did not create the file. *Fix submitted by Mahesh Singh in pull request [24831](https://github.com/magento/magento2/pull/24831)*. [GitHub-24722](https://github.com/magento/magento2/issues/24722)

<!--- ENGCOM-6116-->

*  The Scheduled Import Settings page no longer displays fields that have been disabled in configuration settings. *Fix submitted by Eden Duong in pull request [25102](https://github.com/magento/magento2/pull/25102)*. [GitHub-25101](https://github.com/magento/magento2/issues/25101)

<!--- ENGCOM-6079-->

*  Removed redundant quotation marks from the CSV field title of the exported order CSV file. *Fix submitted by Alexander Lukyanov in pull request [24969](https://github.com/magento/magento2/pull/24969)*. [GitHub-23465](https://github.com/magento/magento2/issues/23465)

<!--- ENGCOM-6071-->

*  The Export page now displays exported files in a grid. Previously, Magento did not list files but instead displayed a message indicating that the CDATA section was too large to display when more than 20,000 records were exported. *Fix submitted by Eduard Chitoraga in pull request [24954](https://github.com/magento/magento2/pull/24954)*. [GitHub-24311](https://github.com/magento/magento2/issues/24311)

<!--- MC-21974-->

*  Exported CSV are now sorted based on time when you run `bin/magento cron:run`. Previously, exported CSV results were displayed randomly, and you could not filter or sort exported items.

<!--- MC-20112-->

*  You can now import empty values (`__EMPTY__VALUE__`) from a CSV file at the store-view level.

<!--- MC-20229-->

*  Magento now handles URL rewrites correctly when you import data for an existing product.

<!--- MC-19661-->

*  You can now exclude attributes from a CSV file when setting up an export (**System** > **Data Transfer (Export)**). Previously, the checkboxes on this page did not work.

<!--- MC-18710-->

*  Magento now correctly processes product prices during export when the **All Store Views** scope is set. Previously, the logic for updating the price in custom options in non-default websites was missing when the **Catalog** > **Price** setting is set to **Website**.

<!--- MC-19399-->

*  Magento now respects website scope settings when you export product data in a CSV file.

<!--- MC-18815-->

*  Magento now adds newly imported images after previously imported ones. Previously, Magento added these most recently imported images randomly.

<!--- MC-15256-->

*  You can now successfully import customer data that has not been modified when generating the CSV file with the **Add/Update Complex Data behavior** option.

<!--- ENGCOM-5799 5751-->

*  Corrected spacing issue in the `Magento_Config` file. *Fix submitted by Alexander Taranovsky in pull request [24420](https://github.com/magento/magento2/pull/24420)*. [GitHub-5246](https://github.com/magento/magento2/issues/5246)

<!--- ENGCOM-5702-->

*  Magento now correctly imports product quantity from a CSV file. Previously, the quantity field for a product could be **0**, but the status field  would indicate **in stock**. *Fix submitted by kristiancharb in pull request [24053](https://github.com/magento/magento2/pull/24053)*. [GitHub-23042](https://github.com/magento/magento2/issues/23042)

<!--- ENGCOM-5860-->

*  Magento now displays an error message as expected when you select **Import Tax Rates** without selecting a file for import on (**Admin** > **Import & Export Tax Rates**).  *Fix submitted by Eden Duong in pull request [24643](https://github.com/magento/magento2/pull/24643)*. [GitHub-24642](https://github.com/magento/magento2/issues/24642)

<!--- MC-22390-->

*  You can now successfully import an image from an external URL.

### Index

<!--- MC-18833-->

*  The `POST /V1/products/tier-prices` call now considers account indexer mode as expected.

<!--- MC-21897-->

*  Partial reindexing operations no longer throw an exception when catalog permissions functionality is disabled and the `catalogpermissions_product_cl` table has non-reindexed rows. Previously,  the `vendor/magento/module-catalog-permissions/Model/Indexer/Plugin/IndexerConfigData.php::afterGet()` plugin terminated a loaded instance of `catalogpermissions_product` indexer under these conditions.

<!--- MC-22021-->

*  Query performance and indexer execution (`bin/magento indexer:reindex`) has been improved.

<!--- ENGCOM-5624-->

*  Magento no longer throws a fatal error when you create a preference for the category product indexer before running `bin/magento setup:di:compile`. *Fix submitted by Diego Cabrejas in pull request [23300](https://github.com/magento/magento2/pull/23300)*. [GitHub-22769](https://github.com/magento/magento2/issues/22769)

<!--- ENGCOM-5910-->

*  During re-indexing, Magento now deletes only products that have been identified as out-of-stock  when filtered by `$entityIds`. *Fix submitted by Bruce in pull request [24415](https://github.com/magento/magento2/pull/24415)*. [GitHub-24414](https://github.com/magento/magento2/issues/24414)

### Infrastructure

<!--- ENGCOM-5540-->

*  File permissions for non-executable files in GitHub have been changed from 755 to 664 where appropriate. *Fix submitted by Pieter Hoste in pull request [24005](https://github.com/magento/magento2/pull/24005)*. [GitHub-1453](https://github.com/magento/magento2/issues/1453)

<!--- ENGCOM-6044-->

*  An incorrect Boolean return type for the `setIsActive()` method in `Salesrule Module RuleInterface.php` has been corrected to `RuleInterface`. *Fix submitted by Bartłomiej Szubert in pull request [24814](https://github.com/magento/magento2/pull/24814)*. [GitHub-13278](https://github.com/magento/magento2/issues/13278)

<!--- ENGCOM-6199-->

*  Magento no longer adds a `form_key` field to POST forms that have external action URLs. (*External action URLS* are URLS that do not belonging to shop's base URL.) *Fix submitted by Mateusz Krzeszowiak in pull request [25336](https://github.com/magento/magento2/pull/25336)*. [GitHub-23382](https://github.com/magento/magento2/issues/23382)

<!--- MC-18190-->

*  The dictionary was removed from the `zxcvbn.js` library, and the following performance improvements have resulted: 1) The size of the `zxcvbn` library has been reduced from 395 KB to 11.3 KB on customer registration, customer edit, and customer forgot password pages; 2) The time required for asynchronously loading this library has been reduced by 90%.

<!--- ENGCOM-5634-->

*  The `scopeData()` method now returns a `DateTime` value that is scoped to the specified store locale. Previously, this method was not fully implemented.  *Fix submitted by Eden Duong in pull request [23693](https://github.com/magento/magento2/pull/23693)*. [GitHub-23359](https://github.com/magento/magento2/issues/23359)

<!--- ENGCOM-5683-->

*  The `getAttributeRawValue` method now returns a store-specific value even when there is no default value. Previously, no store value was returned when a default value was not present. *Fix submitted by semajeg in pull request [23369](https://github.com/magento/magento2/pull/23369)*. [GitHub-16382](https://github.com/magento/magento2/issues/16382)

<!--- ENGCOM-5554-->

*  The performance of the `ProductMetadata::getVersion` method has been improved as a result of adding the caching of the product version. This method is called by many third-party extensions to determine the version of Magento. *Fix submitted by David Verholen in pull request [24030](https://github.com/magento/magento2/pull/24030)*. [GitHub-24025](https://github.com/magento/magento2/issues/24025)

<!--- ENGCOM-6119-->

*  You can now add products with custom options of all types to the shopping cart. *Fix submitted by Alexandr Skrashuk in pull request [25055](https://github.com/magento/magento2/pull/25055)*. [GitHub-24726](https://github.com/magento/magento2/issues/24726)

<!--- ENGCOM-6186-->

*  Decimal numbers have been added to the Sample File in Import CSV section. Previously, using the **Download Sample File** option on the product’s import CSV page created a sample CSV file with a weight of 1, which was of limited use. *Fix submitted by Cristian Sanclemente in pull request [25317](https://github.com/magento/magento2/pull/25317)*. [GitHub-23920](https://github.com/magento/magento2/issues/23920)

<!--- ENGCOM-6171-->

*  A deprecated method in `\Magento\MysqlMq\Model\Driver\Exchange` has been replaced. Previously, this method caused an exception. *Fix submitted by Tjitse in pull request [25289](https://github.com/magento/magento2/pull/25289)*. [GitHub-21904](https://github.com/magento/magento2/issues/21904)

<!--- ENGCOM-5757-->

*  You can now add handlers directly to the `di.xml`. Previously, you needed to extend the helper class and register the handlers. *Fix submitted by Thomas Klein in pull request [24405](https://github.com/magento/magento2/pull/24405)*. [GitHub-12371](https://github.com/magento/magento2/issues/12371)

<!--- ENGCOM-6234-->

*  You can now add a handler directly to the `di.xml` of a product template instead of adding a handler by extending the helper class and registering the handlers. *Fix submitted by Tomash Khamlai in pull request [25466](https://github.com/magento/magento2/pull/25466)*. [GitHub-25468](https://github.com/magento/magento2/issues/25468)

<!--- ENGCOM-5539-->

*  Magento no longer returns an empty string when calling `$this->_escaper->escapeXssInUrl(“0”);`, but instead returns the expected 0 value. *Fix submitted by Will Palmer in pull request [23988](https://github.com/magento/magento2/pull/23988)*. [GitHub-23987](https://github.com/magento/magento2/issues/23987)

### Inventory

<!--- MC-17606-->

*  You can now save an edited product when `max_sale_qty` is set to the Magento default value. [GitHub-23319](https://github.com/magento/magento2/issues/23319)

### Layered navigation

<!--- ENGCOM-5802-->

*  Layered navigation is no longer visible when you set display mode to **Static Block only** on a particular category. *Fix submitted by Mahesh Singh in pull request [24497](https://github.com/magento/magento2/pull/24497)*. [GitHub-24031](https://github.com/magento/magento2/issues/24031)

### Media storage

<!--- MC-19156-->

*  Magento now retrieves images from the proper cache in multi-store deployments.

### Newsletter

<!--- ENGCOM-6144-->

*  Magento now displays empty **Customer First Name** and **Customer Last Name** fields on the **Admin** > **Marketing** > **Newsletter Subscribers** page. Previously, these fields contained the unexpected string `—`. *Fix submitted by Eden Duong in pull request [25058](https://github.com/magento/magento2/pull/25058)*. [GitHub-25057](https://github.com/magento/magento2/issues/25057)

<!--- ENGCOM-6148-->

*  Corrected alignment of the **Newsletter** label and associated checkbox on the Admin customer edit page. *Fix submitted by Arvinda Kumar in pull request [25208](https://github.com/magento/magento2/pull/25208)*. [GitHub-25207](https://github.com/magento/magento2/issues/25207)

<!--- ENGCOM-5555-->

*  The **Subscribe** button is now visible on the Subscribe form as expected. Previously, an  sr-only element hid this button.  *Fix submitted by KrielkipNL in pull request [24028](https://github.com/magento/magento2/pull/24028)*. [GitHub-24027](https://github.com/magento/magento2/issues/24027)

<!--- MC--->

*  The **Subscribe to Newsletter** checkbox now works as expected when **Stores** > **Configuration** > **Customer** > **Customer Configuration** > **Account Sharing** is set to **Global**.

<!--- ENGCOM-5530-->

*  Customers are no longer sent unsubscribe to newsletter emails when they register for a new account and the **Sign Up for Newsletter** setting is set to **on**.  *Fix submitted by Eden Duong in pull request [23737](https://github.com/magento/magento2/pull/23737)*. [GitHub-23729](https://github.com/magento/magento2/issues/23729)

<!--- MC-17948-->

*  The newsletter template preview now displays images as expected. Previously, any images included in the template were not correctly displayed, and you need to scroll to view the entire image.

### Orders

<!--- ENGCOM-5529-->

*  The Order list now displays order information in the currency in which the order was placed, not the current base currency of the store. *Fix submitted by Eden Duong in pull request [23817](https://github.com/magento/magento2/pull/23817)*. [GitHub-23805](https://github.com/magento/magento2/issues/23805)

<!--- ENGCOM-5995-->

*  You can now open a storefront from **Sales** > **Orders** > **Customer View**. Previously, the Admin froze, and the page never reloaded. *Fix submitted by Adarsh Manickam in pull request [24845](https://github.com/magento/magento2/pull/24845)*. [GitHub-24779](https://github.com/magento/magento2/issues/24779)

<!--- ENGCOM-6036-->

*  The checkbox on the **Admin** > **Create New Order** > **Add Products** page now works as expected in Internet Explorer 11.x. This checkbox now behaves the same across all supported browsers. *Fix submitted by Adarsh Manickam in pull request [24913](https://github.com/magento/magento2/pull/24913)*. [GitHub-12855](https://github.com/magento/magento2/issues/12855)

<!--- ENGCOM-6039-->

*  Magento now displays the customer middle name in the customer details on orders and in the new order email sent to customers. *Fix submitted by Sergiy Vasiutynskyi in pull request [24746](https://github.com/magento/magento2/pull/24746)*. [GitHub-23627](https://github.com/magento/magento2/issues/23627)

<!--- ENGCOM-5591-->

*  Magento now updates the `сustomer_email` value in the `quote` and `sales_order` tables as expected when a customer changes their email address. *Fix submitted by Artem Voloznov in pull request [24049](https://github.com/magento/magento2/pull/24049)*. [GitHub-24012](https://github.com/magento/magento2/issues/24012)

<!--- ENGCOM-5475-->

*  Customers can now cancel an order that they created using a coupon while logged in as a guest. Previously, when they tried to cancel the order, Magento threw an error. *Fix submitted by Pavel Bystritsky in pull request [20577](https://github.com/magento/magento2/pull/20577)*. [GitHub-19230](https://github.com/magento/magento2/issues/19230)

<!--- ENGCOM-5552-->

*  Magento now displays a warning message when you click the **Apply Coupon Code** button without filling in the coupon code when creating an order. *Fix submitted by Eden Duong in pull request [24016](https://github.com/magento/magento2/pull/24016)*. [GitHub-24015](https://github.com/magento/magento2/issues/24015)

<!--- ENGCOM-6112-->

*  Magento now sends New Order email as expected when the **Send Order Email Copy To** field contains a comma followed by a blank space. *Fix submitted by Eden Duong in pull request [25085](https://github.com/magento/magento2/pull/25085)*. [GitHub-25072](https://github.com/magento/magento2/issues/25072)

<!--- ENGCOM-6185-->

*  An incorrect critical log entry (`No such entity with customerId = xxx`) in the `exception.log` file has been corrected. Previously, Magento logged this entry, which was a false positive that was created when a logged-in customer did not have an active quote.  *Fix submitted by Pieter Hoste in pull request [25307](https://github.com/magento/magento2/pull/25307)*. [GitHub-24009](https://github.com/magento/magento2/issues/24009)

### Payment methods

<!--- MC-18783-->

*  You can now use Paypal Payflow Pro to complete an order  in deployments running Internet Explorer 11.x.

<!--- MC-19735-->

*  Magento now successfully processes orders that are shipped to multiple addresses when Braintree with PayPal is used as the payment method. Previously, Magento successfully completed only one order, and Magento declined to process the other orders.

<!--- MC-19296-->

*  Guests can now successfully pay for an order using PayPal Express Checkout. Previously, Magento did not process the order and displayed this message: `To check out, please sign in with your email address`.

<!--- MC-19538-->

*  You can now successfully complete an order using Braintree with PayPal when Shipping Flat Rate is activated. Previously, Magento displayed an informative error.

<!--- MC-19008-->

*  Magento no longer displays the PayPal Credit option on the checkout workflow on the storefront when this option is disabled in the Admin.

<!--- MC-18365-->

*  Magento now properly concatenates first and last names in PayPal Express address fields.

<!--- MC-18194-->

*  The Saved Credit Card Feature with Vault feature nows displays accurate card information in the order information page as expected for orders paid for with Payflow Pro.

<!--- MC-19114-->

*  The **Qty to Refund** field on the credit memo of an order paid for with Authorize.net is now editable.

<!--- MC-19542-->

*  Magento no longer throws a fatal error when you enter an invalid shipping address when placing an order with Braintree with Paypal.

<!--- MC-19917-->

*  Magento no longer displays duplicate **Place Order** buttons on the Review Order page for orders made with PayPal Express.

<!--- MC-21467-->

*  You can now successfully add new products to the cart when placing a re-order from the Admin when the original order used a coupon and the Braintree payment method.

<!--- MC-22006-->

*  Magento no longer displays the **PayPal Express Checkout** button on product pages or the shopping cart when the **Display on Product Details Page** and **Display on Shopping Cart (Advanced Settings)** settings are disabled.

<!--- ENGCOM-5630-->

*  Magento no longer displays the  **PayPal Credit** button when the **Checkout with PayPal** button is displayed on the shopping cart. *Fix submitted by Oleksii Lisovyi in pull request [24121](https://github.com/magento/magento2/pull/24121)*. [GitHub-22525](https://github.com/magento/magento2/issues/22525),[GitHub-22528](https://github.com/magento/magento2/issues/22528)

<!--- ENGCOM-5710-->

*  Validation logic has been added to the **Send Payment Failed Email Copy To**  field of **Admin** > **Store** > **Configurations** > **Sales** > **Checkout**. *Fix submitted by Eden Duong in pull request [24313](https://github.com/magento/magento2/pull/24313)*. [GitHub-24302](https://github.com/magento/magento2/issues/24302), [GitHub-24304](https://github.com/magento/magento2/issues/24304)

<!--- ENGCOM-5804-->

*  The Stored Payment Methods section of the customer dashboard no longer depends on Braintree being enabled. Removing this dependency permits custom payment methods to also use this section. *Fix submitted by prabhatrawat-webkul in pull request [24501](https://github.com/magento/magento2/pull/24501)*. [GitHub-23205](https://github.com/magento/magento2/issues/23205)

<!--- ENGCOM-5849-->

*  Magento no longer throws JavaScript errors when a customer tries to pay for an order using PayPal when the shipping address fields are incomplete. *Fix submitted by Anton in pull request [24622](https://github.com/magento/magento2/pull/24622)*. [GitHub-24618](https://github.com/magento/magento2/issues/24618)

<!--- ENGCOM-5925-->

*  Removed the redundant XML code in the `<payflow_advanced>` node of the PayPal `config.xml` configuration file. Previously, this redundancy caused errors. *Fix submitted by yupik in pull request [24694](https://github.com/magento/magento2/pull/24694)*. [GitHub-23880](https://github.com/magento/magento2/issues/23880)

<!--- MC-15140-->

*  The **Enable this Solution** setting is now set back to **no** for  PayPal Express as expected when a customer clicks on **Cancel** on the “There is already another PayPal solution enabled. Enable this solution instead?” popup during PayPal Express checkout.

<!--- ENGCOM-6153-->

*  The Braintree `ClientToken` is now disabled when the  Braintree payment method is disabled for the current store view. *Fix submitted by Andrey Legayev in pull request [25223](https://github.com/magento/magento2/pull/25223)*. [GitHub-25343](https://github.com/magento/magento2/issues/25343)

### Performance

<!--- MC-16108-->

*  The Cache User Defined Attributes system configuration option was added to **Admin** > **System Config** > **Advanced** > **Developer** section > **Caching Setting**. This option supports the caching of user-defined EAV attributes while they are being retrieved. Caching system EAV attributes during retrieval improves the performance of many tasks by decreasing the number of insert and select requests to the database. With this release, all system EAV attributes are cached by default. However, developers can also cache user-defined attributes by setting **Cache User Defined Attributes** to **yes**. System EAV attributes that should be cached while being retrieved are defined in `di.xml` in the `attributesForPreload` argument of `Magento\Eav\Model\Config`.

<!--- MC-19107-->

*  The dynamic block cache logic has been refactored to improve banner load time. Previously, slow load times resulting in timeouts on both the storefront and Admin.

<!--- MC-20322-->

*  Statistics collection for the Reports module is now disabled by default. A new configuration setting (**System Configuration** > **General** > **Reports** > **General Options**)  allows merchants to completely or partially disable Magento Reports. (Statistics collection for the Reports module is disabled by default. Magento recommends disabling Reports functionality for performance reasons when this capability is not required.)

<!--- MC-19791-->

*  The performance of sales order update operations has improved.

<!--- MC-19107 MC-19249-->

*  Redundant non-cached requests to the server on catalog pages have been eliminated by refactoring the customer section invalidation mechanism and improving banner cache logic.

<!--- MC-19242-->

*  PHTML files have been refactored to better support parsing by the bundling mechanism. Our new bundling mechanism now identifies all dependencies on JavaScript.

### Reports

<!--- ENGCOM-6104-->

*  Sorting has been disabled on the New Account column of the New Accounts report. *Fix submitted by Eden Duong in pull request [25034](https://github.com/magento/magento2/pull/25034)*. [GitHub-25033](https://github.com/magento/magento2/issues/25033)

<!--- ENGCOM-5832-->

*  A missing newline  has  been added to the end of `var/report` report output, which has improved the automatic parsing of log files. *Fix submitted by Mathew Beane in pull request [24559](https://github.com/magento/magento2/pull/24559)*. [GitHub-24588](https://github.com/magento/magento2/issues/24588)

<!--- ENGCOM-5590-->

*  Magento no longer throws a console error when you click **Select All** on the **Newsletter Problems Report** page. *Fix submitted by Eden Duong in pull request [24104](https://github.com/magento/magento2/pull/24104)*. [GitHub-24102](https://github.com/magento/magento2/issues/24102)

### Reviews

<!--- ENGCOM-5737-->

*  The **Reset** button now works as expected on  **Admin** > **Marketing** > **All Reviews** > **New Review** page. *Fix submitted by Shankar Konar in pull request [24318](https://github.com/magento/magento2/pull/24318)*. [GitHub-23990](https://github.com/magento/magento2/issues/23990)

<!--- MC-17630-->

*  **Select All** on the coupon list of the Manage Coupon Codes page now works as expected.

<!--- ENGCOM-5774-->

*  Magento no longer displays the **Add New Review** button on the **Admin** > **Marketing** > **All Reviews** > **New Review** page if no product is present.  *Fix submitted by Eden Duong in pull request [24399](https://github.com/magento/magento2/pull/24399)*. [GitHub-24310](https://github.com/magento/magento2/issues/24310)

<!--- ENGCOM-6113-->

*  The product detail page now scrolls as expected when you click on the Review or Add Your Review link. Previously, the page did not scroll, and Magento displayed a JavaScript error.  *Fix submitted by Gaurav Agarwal in pull request [25051](https://github.com/magento/magento2/pull/25051)*. [GitHub-25039](https://github.com/magento/magento2/issues/25039)

### Return Merchandise Authorizations (RMA)

<!--- MC-17926-->

*  Using the `DELETE V1/returns/:id` call now deletes an RMA as expected.

<!--- MC-19769-->

*  RMAs for the disabled child products of a configurable product are no longer available in the storefront.

<!--- MC-19762-->

*  The Returns tab on a customer’s **Account** > **My Orders** page now behaves as expected. Previously, if a customer clicked on the Refunds tab on her **Account** > **My Orders** page, the Returns tab disappeared.

<!--- MC-17939-->

*  RMAs created with the  `POST V1/returns/` call now render correctly on the Admin.

<!--- MC-19857-->

*  The amount displayed in the **Remaining Amount** field of **Admin** > **Stores** > **Configuration** > **Sales** > **Sales** > **RMA Settings** is now accurate. Previously, this amount corresponded to the total of items that were originally bought but not the actual remaining amount.

<!--- MC-19258-->

*  Magento no longer sends duplicate emails to a customer when an RMA return is created.

<!--- MC-19433-->

*  The **Print** button on the **Admin** > **Return** > **Packages** list now works as expected.

<!--- MC-20986-->

*  You can now create an RMA from the storefront when a product is listed as out-of-stock.

### Rewards

<!--- MC-19017-->

*  Merchants can now create a credit memo for an order that was paid for with reward points. Previously, Magento displayed this error: `You can't use more store credit than the order amount`.

<!--- MC-19428-->

*  Magento now refunds the correct amount of reward points (and rounds up as necessary) when a merchant creates a partial refund of an order that was paid for with reward points.

<!--- MC-19189-->

*  The checkout workflow now includes a **Cancel** button that permits a customer to cancel the application of reward points before checkout completes.

<!--- MC-19430-->

*  Magento now returns the correct number of reward points when creating partial refunds for an order that was paid for with reward points. Previously, Magento doubled the reward points when creating the second  partial credit memo.

### Sales

<!--- ENGCOM-5516-->

*  Validation has been added to **Minimum Order Amount** field  on the **Stores** > **Settings** > **Configuration** > **Sales** page. *Fix submitted by kcnariya in pull request [23898](https://github.com/magento/magento2/pull/23898)*. [GitHub-23897](https://github.com/magento/magento2/issues/23897)

<!--- MC-19400-->

*  Invoice email is now sent automatically as expected when the **Payment Action** setting for a payment method set to **Authorize and capture**.

<!--- MC-19303-->

*  The order view section of the checkout workflow now shows the correct shipping price for an order to be shipped to multiple addresses.

<!--- MC-21699-->

*  Tax rates and amounts now change as expected when the billing address for an order is changed from the Admin.

<!--- MC-20193-->

*  Magento now sends email to customers when an invoice is created. Previously, even when the relevant configuration setting was enabled, Magento did not automatically send this email. [GitHub-13466](https://github.com/magento/magento2/issues/13466)

<!--- MC-20387-->

*  Coupon codes for free shipping are displayed like other coupon codes. Previously, coupon codes for free shipping were not displayed on the order summary of the checkout workflow.

<!--- MAGETWO-72172-->

*  You can no longer add disabled variations of a configurable product to a shopping cart from the Admin.

<!--- MC-19798-->

*  The **Quote Lifetime (days)**  setting, which specifies the number of days that a quoted price remains valid, now works as expected.

### Sales Rule

<!--- MC-19716-->

*  You can now change action settings for a scheduled update of a Cart rule. Previously, Magento did not save an action condition if you added it to the cart rule’s scheduled update.

<!--- MC-19238-->

*  Magento no longer displays an error when  a customer clicks **Subscribe to Order Status** on an order page, and now subscribes the customer to the XML feed as expected.

<!--- MAGETWO-96379-->

*  The counter values on the **Marketing** > **Cart Price Rules** grid now match the number of rules listed in the grid as expected.

<!--- MC-19260-->

*  Magento now applies coupon codes correctly when an order subtotal dips below the threshold specified in the applicable cart price rule. Previously, Magento applied the coupon correctly momentarily, then removed the coupon code during the tax and shipping sections of the checkout workflow.

### Search

<!--- MC-21962-->

*  The pagination of multipage search results now works are expected. Previously, if you navigated away from the first page of search results, Magento displayed this error: `We can't find products matching the selection`.

<!--- MC-21808-->

*  MySQL performance for search queries has been optimized, and merchants running sites with many search queries will notice improvements in query speed.

<!--- MC-18165-->

*  Quick search now successfully handles search phrases that contain fewer characters than the configured value.  Previously, quick search ignored the search phrase and returned all products when search string length was lower than configured.

<!--- MC-23218-->

*  Magento no longer requires a full search reindex in order for a new product attribute to be searchable on the storefront.

<!--- MC-21717-->

*  The storefront now displays a newly added product in its assigned category after you run `bin/magento cron:run && bin/magento cron:run`.

<!--- ENGCOM-5597-->

*  Searching on categories from the New Product page now works as expected when you enter a search string that does not match an existing category. Previously, Magento displayed incorrect results instead of indicating zero search results. *Fix submitted by Eden Duong in pull request [23698](https://github.com/magento/magento2/pull/23698)*. [GitHub-23697](https://github.com/magento/magento2/issues/23697)

<!--- MC-20381-->

*  Elasticsearch now successfully finds products on the storefront using the  values of dropdown attributes.

<!--- MC-19906-->

*  Elasticsearch now correctly handles search queries that include words that contain diacritics as well as spellings of those words that are entered without the correct diacritics.

<!--- MC-17947-->

*  You can now search the **Sales** > **Orders** list by email address.

<!--- MC-19849-->

*  Running `bin/magento indexer:reindex catalogsearch_fulltext` no longer results in the deletion of an index-related database table.

<!--- MC-19537-->

*  Elasticsearch results now display all products as expected when the **Configuration** > **Catalog** > **Storefront** > **Allow All Products Per Page** is set to **yes**. Previously, Magento displayed this error: `We can't find products matching the selection`.

<!--- MC-19527-->

*  Category pages now work as expected when Price Navigation Step Calculation is set to **Automatic (equalize product counts)**.

<!--- MC-20250-->

*  Magento no longer throws an exception when you initiate an advanced search using product name and SKU.

<!--- MC-15759-->

*  Elasticsearch now successfully handles search queries that contain a question mark followed by a semicolon (?;).

<!--- ENGCOM-5587-->

*  Validation logic has been added to the **Number of results** and **Number of Uses** fields of **Admin** > **Marketing** > **Search Terms**.  *Fix submitted by Eden Duong in pull request [24101](https://github.com/magento/magento2/pull/24101)*. [GitHub-24100](https://github.com/magento/magento2/issues/24100)

<!--- ENGCOM-5596-->

*  Magento no longer logs a warning when a catalog search query contains multiple custom option values. *Fix submitted by Eden Duong in pull request [23687](https://github.com/magento/magento2/pull/23687)*. [GitHub-23557](https://github.com/magento/magento2/issues/23557)

<!--- ENGCOM-5662-->

*  The undefined variable in the `getStoreValuesForForm` method has been defined. *Fix submitted by Ronak Parmar in pull request [23059](https://github.com/magento/magento2/pull/23059)*. [GitHub-23055](https://github.com/magento/magento2/issues/23055)

<!--- ENGCOM-6106-->

*  Elasticsearch 6.x now works only with Elasticsearch 6.x clients on the storefront. *Fix submitted by Pavel Bystritsky in pull request [24974](https://github.com/magento/magento2/pull/24974)*. [GitHub-24781](https://github.com/magento/magento2/issues/24781)

<!--- ENGCOM-5861-->

*  Elasticsearch clients can now use SSL without enabling HTTP Auth. *Fix submitted by Ihor Sviziev in pull request [24636](https://github.com/magento/magento2/pull/24636)*. [GitHub-22297](https://github.com/magento/magento2/issues/22297)

<!--- ENGCOM-5834-->

*  Elasticsearch no longer creates a double index when Magento throws an exception when it saves an index as a cron job fails. *Fix submitted by Vladislav Slesarenko in pull request [24552](https://github.com/magento/magento2/pull/24552)*. [GitHub-24550](https://github.com/magento/magento2/issues/24550)

### Shipping

<!--- ENGCOM-5215-->

*  The code for offline shipping methods has been optimized to remove redundant carrier codes. *Fix submitted by Alexander Taranovsky in pull request [23144](https://github.com/magento/magento2/pull/23144)*. [GitHub-23143](https://github.com/magento/magento2/issues/23143)

<!--- ENGCOM-5748-->

*  VAT ID is now included on the Shipping page of the checkout workflow as expected. *Fix submitted by Eden Duong in pull request [24403](https://github.com/magento/magento2/pull/24403)*. [GitHub-24402](https://github.com/magento/magento2/issues/24402)

<!--- ENGCOM-5993-->

*  The Back button on the Check Out with Multiple Addresses page now returns you to the correct page. Previously, clicking the **Back** button from this page returned a 404 error. *Fix submitted by Max Souza in pull request [24827](https://github.com/magento/magento2/pull/24827)*. [GitHub-24701](https://github.com/magento/magento2/issues/24701)

<!--- MC-22114-->

*  UPS Mail Innovations tracking now works as expected. Previously, Magento displayed this error: `Tracking information is currently not available. Please contact us for more information or email us at support@example.com`.

<!--- MC-21738-->

*  Cart Price rules now work as expected for orders that are shipped to multiple addresses.

<!--- MC-18366-->

*  Shipping notification emails sent to customers now contain a link to order tracking.

<!--- MC-16684-->

*  Shipping calculations now load correctly from the shopping cart.

<!--- MC-19105-->

*  You can now successfully re-order a configurable product when shipping the order to multiple addresses. Previously, Magento duplicated this product during re-order.

<!--- MC-18519-->

*  Magento now displays the correct cost for shipping in the shopping cart when you return to the cart from the checkout page for an order being shipped to multiple addresses.

<!--- MC-18215-->

*  You can now create a shipping label as expected. Previously, Magento displayed this error: `Cannot do shipment for the order","Invalid security or form key. Please refresh the page`.

<!--- MAGETWO-99043-->

*  Magento now loads shipping methods as expected in the checkout workflow when running in Internet Explorer 11.x. Previously, when you tried to load shipping methods in the checkout workflow, Magento did not load these methods and displayed this error: `SCRIPT438: Object doesn't support property or method entries`. [GitHub-22119](https://github.com/magento/magento2/issues/22119)

<!--- ENGCOM-5691-->

*  Magento no longer displays **Shipping Method: undefined - Fixed** on the final page of the checkout workflow when a shipping method with an undefined or empty  method name is selected.  *Fix submitted by wbeltranc in pull request [24265](https://github.com/magento/magento2/pull/24265)*. [GitHub-19853](https://github.com/magento/magento2/issues/19853)

<!--- ENGCOM-5674-->

*  New order pages for orders that contain only virtual products no longer display a Shipping and Handling total.  *Fix submitted by Eden Duong in pull request [24213](https://github.com/magento/magento2/pull/24213)*. [GitHub-24212](https://github.com/magento/magento2/issues/24212)

<!--- ENGCOM-5703-->

*  Validation logic has been added to the **Sort Order** field of **Admin** > **Store** > **Configuration** > **Sales**  >  **Shipping methods**.  *Fix submitted by Eden Duong in pull request [24296](https://github.com/magento/magento2/pull/24296)*. [GitHub-24295](https://github.com/magento/magento2/issues/24295)

<!--- MAGETWO-62508-->

*  The `POST  /V1/shipment/track` call now throws an error. [GitHub-7760](https://github.com/magento/magento2/issues/7760)

### Sitemap

<!--- ENGCOM-5801-->

*  Magento no longer displays multiple success notifications when you click on the **Save** button on **Marketing** > **Sitemap**. *Fix submitted by Bartłomiej Szubert in pull request [24482](https://github.com/magento/magento2/pull/24482)*. [GitHub-21610](https://github.com/magento/magento2/issues/21610)

<!--- ENGCOM-5917-->

*  The path that you specify when creating a sitemap is no longer transferred to the beginning of the URL that is included in any sitemap-related error message. *Fix submitted by Hailong in pull request [24675](https://github.com/magento/magento2/pull/24675)*. [GitHub-24623](https://github.com/magento/magento2/issues/24623)

<!--- ENGCOM-5844-->

*  We’ve corrected several problems with image URLs in sitemap generation. Previously,  sitemap image URLs had the  wrong cache path, and image size was incorrect.  *Fix submitted by Krzysztof Daniel in pull request [24605](https://github.com/magento/magento2/pull/24605)*. [GitHub-4511](https://github.com/magento/magento2/issues/4511), [GitHub-4511](https://github.com/magento/magento2/issues/5321), [GitHub-24484](https://github.com/magento/magento2/issues/24484)

### Staging

<!--- MC-10974-->

*  Merchants can now manage Catalog Rule activity on the  Catalog Rule page using the **Is Active** toggle button.

<!--- MC-19407-->

*  Magento no longer adds a new row to the `changelog` table whenever an EAV attribute is updated and its value remains unchanged.

<!--- MC-18731-->

*  Preview staging now works when the store code is added to the URL as expected. Previously, the requested timestamp was not added to `href` links on the page, and Magento could not determine which version to display.

<!--- MC-19270-->

*  Media gallery image positions are no longer overridden by a scheduled change.

<!--- MC-19765-->

*  CMS pages no longer store the wrong date in the `custom_theme_from`  field  when locale and country are set to locales other than `en_US`.

<!--- MC-17653-->

*  You can now schedule updates for Catalog Price rules when applied to a `date` attribute. Previously, Magento threw an error.

<!--- MC-19013-->

*  Administrators with the appropriate credentials can now schedule updates from a non-default site in a multi-site deployment. Previously, Magento did not create an update and displayed this error:  `Something went wrong while saving the Magento\Catalog\Api\Data\ProductInterface`.

<!--- MC-21903-->

*  Product updates can now be successfully scheduled when Magento is installed with DB prefixes set.

<!--- MC-19414-->

*  The Low Stock report now accurately displays low stock levels. Previously,  this report showed a product level of zero (0) even when product stock exceeded zero.

<!--- MC-19951-->

*  The value of the `news_from_date` attribute that Magento creates for a product’s scheduled update now equals the current time as expected. Previously, `\Magento\Catalog Staging\Observer\UpdateProductDataAttributes::execute` used the current staging version start and end times for all products, not only for the products that belong to this staging version.

### Store

<!--- MC-20394-->

*  Redirect URLs are no longer truncated  after three slashes.

<!--- MC-19306-->

*  Magento installation no longer fails with pre-defined stores in `app/etc/config.php` due to MySQL locks.

<!--- MC-19585-->

*  CMS pages no longer redirect to the home page of the original store when you change store view in a multi-store deployment.

### Swagger

<!--- ENGCOM-5853 5610-->

*  Swagger schemas no longer fail when the GET endpoint has parameters that contain extension attributes. *Fix submitted by Oleksandr Kravchuk in pull request [24627](https://github.com/magento/magento2/pull/24627) and [24117](https://github.com/magento/magento2/pull/24117)*. [GitHub-24626](https://github.com/magento/magento2/issues/24626), [GitHub-24116](https://github.com/magento/magento2/issues/24116)

### Swatches

<!--- ENGCOM-5716-->

*  Magento now displays selected swatch options for a configurable product when you edit that product from the shopping cart. *Fix submitted by Rani Priya in pull request [24308](https://github.com/magento/magento2/pull/24308)*. [GitHub-24306](https://github.com/magento/magento2/issues/24306)

<!--- MC-19739-->

*  You can now add options values to text swatch and visual swatch attributes using `POST V1/products/attributes/<attribute_code>/options`.

<!--- MC-19669-->

*  Magento now loads product images as expected when you switch between product variations (for example, size or color).

<!--- MC-19683-->

*  Magento now displays the correct “as low as” price on the storefront for a configurable product with multiple attributes that include a `color` attribute. Previously, Magento did not display the lowest price.

### Target Rule

<!--- MC-21900-->

*  The `Product Category does not contain` target rule condition now works as expected.

### Tax

<!--- ENGCOM-5545-->

*  Validation for maximum length has been added to **Zip/Post Code** field of the New Tax Rate page. *Fix submitted by Eden Duong in pull request [23968](https://github.com/magento/magento2/pull/23968)*. [GitHub-23967](https://github.com/magento/magento2/issues/23967)

<!--- ENGCOM-5558-->

*  Corrected inconsistent style on the messages displayed when you click the **Validate VAT Number** button on **Stores** > **Configuration** > **General**. *Fix submitted by Eden Duong in pull request [23739](https://github.com/magento/magento2/pull/23739)*. [GitHub-23738](https://github.com/magento/magento2/issues/23738)

<!--- ENGCOM-6004-->

*  Magento now correctly calculates VAT for products when you add them to the cart. *Fix submitted by Bruno Roeder in pull request [24737](https://github.com/magento/magento2/pull/24737)*. [GitHub-23116](https://github.com/magento/magento2/issues/23116)

<!--- MC-17014-->

*  You can now successfully save a fixed product tax  (FPT) to a product that is assigned to a specific website.

<!--- ENGCOM-5919-->

*  Inconsistent sorting of fixed product tax  (FPT and tax totals has been resolved on the Admin order, create invoice, invoice, create credit memo,  and credit memo pages. *Fix submitted by Mahesh Singh in pull request [24663](https://github.com/magento/magento2/pull/24663)*. [GitHub-24225](https://github.com/magento/magento2/issues/24225)

### Translation and locales

<!--- ENGCOM-5972-->

*  Serbian Latin language support has been added to this release, and merchants can now distinguish between Latin and Cyrillic Serbian locales. Locales are now identified as Serbian (Cyrillic, Serbia) and Serbian (Latin, Serbia). *Fix submitted by Bartłomiej Szubert in pull request [22293](https://github.com/magento/magento2/pull/22293)*. [GitHub-12256](https://github.com/magento/magento2/issues/12256), [GitHub-13263](https://github.com/magento/magento2/issues/13263)

<!--- MC-20118-->

*  The Arabic Date Selector now shows the date in the correct format. Previously, when the site was set to Arabic (Saudi Arabia), the storefront date selector always displayed a date of `GGGG`.

<!--- ENGCOM-5663-->

*  The country names on the checkout, shipping, and billing address forms are now translatable. *Fix submitted by Bartłomiej Szubert in pull request [24179](https://github.com/magento/magento2/pull/24179)*. [GitHub-22956](https://github.com/magento/magento2/issues/22956)

### Testing

<!--- ENGCOM-5940-->

*  Integration tests have been added for ProductAlert Stock notifications. *Fix submitted by Yurii in pull request [24291](https://github.com/magento/magento2/pull/24291)*. [GitHub-23279](https://github.com/magento/magento2/issues/23279)

### UI

<!--- ENGCOM-5536-->

*  Media gallery thumbnails are no longer stretched when images have a horizontal ratio. Previously, these images were pixelated on the product page. *Fix submitted by Nick de Kleijn in pull request [23884](https://github.com/magento/magento2/pull/23884)*. [GitHub-23877](https://github.com/magento/magento2/issues/23877)

<!--- ENGCOM-5533-->

*  The tax amount in  sales order emails is now displayed before the row that displays the order’s grand total. *Fix submitted by Nazar Klovanych in pull request [23406](https://github.com/magento/magento2/pull/23406)*. [GitHub-21768](https://github.com/magento/magento2/issues/21768)

<!--- ENGCOM-5535-->

*  The **Billing ZIP Code** field on the Orders and Returns page now works as expected. Previously, it was not consistently visible. *Fix submitted by Eden Duong in pull request [23747](https://github.com/magento/magento2/pull/23747)*. [GitHub-23746](https://github.com/magento/magento2/issues/23746)

<!--- ENGCOM-5586-->

*  A missing header label has been added to the **Admin** > **System** > **Integrations** table. *Fix submitted by Eden Duong in pull request [24097](https://github.com/magento/magento2/pull/24097)*. [GitHub-24096](https://github.com/magento/magento2/issues/24096)

<!--- ENGCOM-5585-->

*  The **New Key** field is now marked as a required field with an asterisk when changing an encryption key on the **Admin** > **System** > **Manage Encryption Key** page. *Fix submitted by Eden Duong in pull request [24099](https://github.com/magento/magento2/pull/24099)*. [GitHub-24098](https://github.com/magento/magento2/issues/24098)

<!--- ENGCOM-5782-->

*  Corrected misspelling of “tier” (as in “tier price”) throughout the code base. *Fix submitted by Sunil in pull request [24160](https://github.com/magento/magento2/pull/24160)*. [GitHub-23567](https://github.com/magento/magento2/issues/23567)

<!--- ENGCOM-5823-->

*  Standardized the confirmation popup invoked from the Admin Add New Tax Rules page. *Fix submitted by Eduard Chitoraga in pull request [24538](https://github.com/magento/magento2/pull/24538)*. [GitHub-24537](https://github.com/magento/magento2/issues/24537)

<!--- ENGCOM-5958-->

*  The Suggested Terms drop-down text in **Admin** > **Marketing** > **SEO & Search** > **Search Terms** are now in camel case. *Fix submitted by Eden Duong in pull request [24741](https://github.com/magento/magento2/pull/24741)*. [GitHub-24739](https://github.com/magento/magento2/issues/24739)

<!--- ENGCOM-6019-->

*  Email previews are now fully responsive. *Fix submitted by Brent Robert in pull request [24881](https://github.com/magento/magento2/pull/24881)*. [GitHub-23754](https://github.com/magento/magento2/issues/23754)

<!--- ENGCOM-6012-->

*  You can now confirm changes to the structure of the category tree by either clicking the confirmation dialog **OK** button or using the Enter key on your keyboard. Previously, if you used the Enter key to confirm your changes, the UI reflected your change, but your changes were lost when you refreshed the page. *Fix submitted by MaxRomanov4669 in pull request [24817](https://github.com/magento/magento2/pull/24817)*. [GitHub-24452](https://github.com/magento/magento2/issues/24452)

<!--- ENGCOM-6060-->

*  Client validation has been added to shipment tracking numbers. *Fix submitted by Eduard Chitoraga in pull request [24818](https://github.com/magento/magento2/pull/24818)*. [GitHub-24745](https://github.com/magento/magento2/issues/24745)

<!--- ENGCOM-6070-->

*  Magento now displays checkout steps in the custom order that is set in `uiComponents SortOrder`. *Fix submitted by Anuj Gupta in pull request [25015](https://github.com/magento/magento2/pull/25015)*. [GitHub-24652](https://github.com/magento/magento2/issues/24652)

<!--- ENGCOM-6122-->

*  Removed a redundant asterisk on the Configure Product page. *Fix submitted by Adarsh Manickam in pull request [25149](https://github.com/magento/magento2/pull/25149)*. [GitHub-25135](https://github.com/magento/magento2/issues/25135)

<!--- ENGCOM-6123-->

*  Removed the box shadow that appeared when you clicked on a disabled swatch for a product on the storefront. *Fix submitted by Adarsh Manickam in pull request [25145](https://github.com/magento/magento2/pull/25145)*. [GitHub-25144](https://github.com/magento/magento2/issues/25144)

<!--- ENGCOM-6117-->

*  Magento now displays a pointer icon for the cursor when the cursor hovers over the **Collapse All/Expand All** button on **Catalog** > **Category** > **Content** Select from Gallery option. *Fix submitted by Eden Duong in pull request [25109](https://github.com/magento/magento2/pull/25109)*. [GitHub-25108](https://github.com/magento/magento2/issues/25108)

<!--- ENGCOM-6134-->

*  The **Get Video Information** button on the **Product** > **Images and Videos** > **Add Video** page now responds as expected. *Fix submitted by Eduard Chitoraga in pull request [25090](https://github.com/magento/magento2/pull/25090)*. [GitHub-25088](https://github.com/magento/magento2/issues/25088)

<!--- ENGCOM-6152-->

*  The storefront now reflects height settings for conditions that are added to Terms and Conditions (**Store** > **Terms and Conditions** > **Add New Condition**). Previously, you could set a value for height when creating a condition, but the storefront did not apply this setting. *Fix submitted by Rahul Mahto in pull request [25168](https://github.com/magento/magento2/pull/25168)*. [GitHub-25167](https://github.com/magento/magento2/issues/25167)

<!--- ENGCOM-5644-->

*  The **Edit Attribute Set Name** label was corrected to **Attribute Set Information** on **Admin** > **Store** > **Attribute Set** > **New Attribute Set**. *Fix submitted by Eden Duong in pull request [24148](https://github.com/magento/magento2/pull/24148)*. [GitHub-24147](https://github.com/magento/magento2/issues/24147)

<!--- ENGCOM-5747-->

*  Corrected issue with highlighting on the storefront sales order page. *Fix submitted by Rani Priya in pull request [24396](https://github.com/magento/magento2/pull/24396)*. [GitHub-24395](https://github.com/magento/magento2/issues/24395)

<!--- ENGCOM-6011-->

*  Corrected multiple misspellings throughout the Admin and corrected a comment in the Admin that was not translatable. *Fix submitted by Bruno Roeder in pull request [24832](https://github.com/magento/magento2/pull/24832)*. [GitHub-22169](https://github.com/magento/magento2/issues/22169), [GitHub-24721](https://github.com/magento/magento2/issues/24721)

<!--- ENGCOM-6136-->

*  You can now  use `@submenu-desktop__padding`  to override the padding in the `.lib-main-navigation-desktop` mixin by using `@submenu-desktop__padding`. *Fix submitted by Mahesh Singh in pull request [25176](https://github.com/magento/magento2/pull/25176)*. [GitHub-23170](https://github.com/magento/magento2/issues/23170)

<!--- ENGCOM-6224-->

*  The performance of the accordion widget has been improved. Previously, when you clicked to open a closed element, the currently open element closed instantaneously without a transition. *Fix submitted by Gabriel da Gama in pull request [24994](https://github.com/magento/magento2/pull/24994)*. [GitHub-24807](https://github.com/magento/magento2/issues/24807)

<!--- ENGCOM-6209-->

*  Corrected misalignment of page elements on the minicart checkout page when the cart contains a configurable product. *Fix submitted by Arvinda Kumar in pull request [25368](https://github.com/magento/magento2/pull/25368)*. [GitHub-25366](https://github.com/magento/magento2/issues/25366)

<!--- ENGCOM-6216-->

*  The tooltip associated with the **Product Additional Options** field for the order on the customer dashboard is now fully visible. *Fix submitted by Torben Höhn in pull request [25393](https://github.com/magento/magento2/pull/25393)*. [GitHub-25392](https://github.com/magento/magento2/issues/25392)

<!--- MC-17003-->

*  The Credit Memo page now has an **Update Totals** button as expected.

<!--- MC-18348-->

*  You can now enable the  **No layout updates** setting for categories when the Page Builder module is enabled.

<!--- MC-20108-->

*  You can now filter orders by date in stores running the `en_GB` locale.

<!--- MC-18763-->

*  Checkboxes that occur within widgets are now  fully clickable in the Admin.

<!--- MC-19866-->

*  Redundant attributes that were present in the CMS widget body have been removed.

<!--- MC-17149-->

*  UI components configuration has been corrected to eliminate potential for overlapping text labels.

<!--- MC-19783-->

*  The weight attribute label is now displayed for attributes in attribute sets.

<!--- ENGCOM-5459-->

*  Corrected issues with the **Admin** > **Marketing** > **User Contents** > **Reviews** **Created** date display. *Fix submitted by Syed Imtiyaz Hasan in pull request [23699](https://github.com/magento/magento2/pull/23699)*. [GitHub-23575](https://github.com/magento/magento2/issues/23575)

<!--- ENGCOM-5608-->

*  The current tab is now marked as active as expected in the customer account sidebar. *Fix submitted by Eden Duong in pull request [24078](https://github.com/magento/magento2/pull/24078)*. [GitHub-24068](https://github.com/magento/magento2/issues/24068)

<!--- ENGCOM-5524-->

*  `bin/magento app:config:import` and `bin/magento setup:upgrade` no longer fail due to a `TEXT` field limitation from `flag_data` in the flag table.  The `flag_data` field has been increased to `MEDIUMTEXT` (accepting 16MB).  *Fix submitted by Andreas Schrammel in pull request [13580](https://github.com/magento/magento2/pull/13580)*. [GitHub-11657](https://github.com/magento/magento2/issues/11657)

<!--- ENGCOM-5643-->

*  The **Unselect all** text string is no longer appended to the `HTML` element of the Compare icon on the product details page when you click this icon.  *Fix submitted by Shankar Konar in pull request [23774](https://github.com/magento/magento2/pull/23774)*. [GitHub-23705](https://github.com/magento/magento2/issues/23705)

<!--- ENGCOM-5589-->

*  Clicking on the **Visibility** header on **Admin** > **Marketing** > **All Reviews** or **Pending Review** now disables the sort ability as expected.  *Fix submitted by Eden Duong in pull request [24106](https://github.com/magento/magento2/pull/24106)*. [GitHub-24105](https://github.com/magento/magento2/issues/24105)

<!--- ENGCOM-5627-->

*  The Action column is now the last column of the **Admin** > **Content** > **Configuration** grid. *Fix submitted by Eden Duong in pull request [24140](https://github.com/magento/magento2/pull/24140)*. [GitHub-24139](https://github.com/magento/magento2/issues/24139)

<!--- ENGCOM-5647 5647 5665-->

*  Validation logic has been added to the required fields on **Admin** > **Content** > **Widget** > **Add Widget**. *Fix submitted by Eden Duong in pull requests [24155](https://github.com/magento/magento2/pull/24155) and [24163](https://github.com/magento/magento2/pull/24163)*. [GitHub-24154](https://github.com/magento/magento2/issues/24154)

<!--- ENGCOM-5614-->

*  You can now perform bulk delete operations on widgets in **Admin** > **Content** > **Widgets**. *Fix submitted by Burlacu Vasilii in pull request [20765](https://github.com/magento/magento2/pull/20765)*. [GitHub-20764](https://github.com/magento/magento2/issues/20764)

<!--- ENGCOM-5695-->

*  The Admin navigation sidebar menu now has toggle functionality for opening and closing menu items.  *Fix submitted by Sudheer Kumar Gajjala in pull request [24211](https://github.com/magento/magento2/pull/24211)*. [GitHub-24210](https://github.com/magento/magento2/issues/24210)

<!--- ENGCOM-5607-->

*  The TinyMCE editor now saves content with inline style tags as expected. *Fix submitted by gwharton in pull request [24114](https://github.com/magento/magento2/pull/24114)*. [GitHub-22867](https://github.com/magento/magento2/issues/22867)

<!--- ENGCOM-5570-->

*  Merchants can now use virtual configurable variants to assign a weight to a virtual product. *Fix submitted by Arushi Bansal in pull request [24013](https://github.com/magento/magento2/pull/24013)*. [GitHub-23977](https://github.com/magento/magento2/issues/23977)

### URL rewrites

<!--- MC-22635-->

*  We have reverted the following fix, which was included in 2.3.3, because it changed expected system behavior: "Magento no longer removes the query string from URLs when the query string is preceded by a slash. Previously, when a customer opened a URL that contained a trailing slash and query string (for example, http://magento.host.com/sample-url-key/?cupcakes), Magento redirected the user to a URL that omitted the slash (http://magento.host.com/sample-url-key)".

<!--- MC-19706-->

*  Magento now populates the `url_rewrite` table with the new product URL rewrite when you create a new product when single-store mode is enabled. Previously, Magento did not generate a user-friendly URL upon the creation of products when single-store mode was enabled.

<!--- ENGCOM-5446-->

*  URL rewrites are no longer lost if an exception is thrown or a deadlock occurs during URL regeneration. Previously, when exceptions or deadlocks occurred, URLs were not regenerated, and Magento displayed 404 pages. *Fix submitted by Stanislav Ilnytskyi in pull request [23430](https://github.com/magento/magento2/pull/23430)*. [GitHub-23429](https://github.com/magento/magento2/issues/23429)

<!--- MC-18561-->

*  CMS pages now redirect correctly after you change the store view.

<!--- MC-19213-->

*  Category-specific URL rewrites are now generated as expected when importing and assigning a product to a category.

<!--- MC-18368-->

*  A category schedule update no longer unchecks the **Use default value** setting on the URL key for the store view.

<!--- MC-21737-->

*  The performance of MySQL queries on `url_rewrite` operations  has been improved. Previously, Magento ran a full scan of the table, and the query was very slow.

<!--- MC-21716-->

*  `CatalogURLRewrite` no longer generates an extra product URL during product creation.

<!--- ENGCOM-6124-->

*  Magento now correctly stores the attribute `url_path` for non-default stores. *Fix submitted by Dmytro Androshchuk in pull request [25143](https://github.com/magento/magento2/pull/25143)*. [GitHub-25120](https://github.com/magento/magento2/issues/25120)

<!--- MAGETWO-69825-->

*  The following reserved keywords cannot be used as URL keys: `admin`,`soap`, `rest`, `graphql`, and any custom Admin path.

### Visual Merchandiser

<!--- MC-18672-->

*  You can now change the sort order of products across pages for a multi-page category list. Previously, you could change the sort order for categories on one page only.

<!--- MC-21033-->

*  You can now sort products in a category by special prices (either ascending or descending order). Previously, when you tried to sort by special price, Magento displayed an informative error and directed you to the dashboard.

### Web API framework

<!--- MC-19432-->

*  When you use a call such as `POST V1/carts/mine/items` to add a product to a cart but do not include the `quote_id` parameter, Magento now returns a `400 Bad Request` error as expected. Previously, Magento generated a `404 Not Found` error.

<!--- ENGCOM-5574-->

*  Added the **Stores** > **Settings** > **Configuration** > **General** > **Currency Setup** > **Currency Converter API** >  **API Key** field to enable currency rate retrievals from http://free.currencyconverterapi.com. *Fix submitted by Eden Duong in pull request [24008](https://github.com/magento/magento2/pull/24008)*. [GitHub-24007](https://github.com/magento/magento2/issues/24007)

<!--- ENGCOM-5987-->

*  You can now set expiration times for REST API Auth tokens in minutes and seconds. Previously, expiration times were defined in hours only. *Fix submitted by Ivan Koliadynskyy in pull request [24769](https://github.com/magento/magento2/pull/24769)*. [GitHub-24716](https://github.com/magento/magento2/issues/24716)

<!--- ENGCOM-5821-->

*  The `GET V1/attributeMetadata/customerAddress/attribute/prefix` and `GET V1/attributeMetadata/customerAddress/attribute/suffix` calls now return options as expected. *Fix submitted by Eden Duong in pull request [24519](https://github.com/magento/magento2/pull/24519)*. [GitHub-24518](https://github.com/magento/magento2/issues/24518)

### Wishlist

<!--- ENGCOM-5715-->

*  Wishlists now display values for product custom file types.  *Fix submitted by Rani Priya in pull request [24320](https://github.com/magento/magento2/pull/24320)*. [GitHub-24319](https://github.com/magento/magento2/issues/24319)

<!--- ENGCOM-5760-->

*  Verification logic has been added to the wishlist so that it reflects accurate stock status of listed products. *Fix submitted by Rus0 in pull request [24300](https://github.com/magento/magento2/pull/24300)*. [GitHub-21519](https://github.com/magento/magento2/issues/21519)

<!--- MC-19950-->

*  Magento no longer displays a JavaScript error when you try to remove an item from a wishlist. Previously, Magento removed the Item from the wishlist  but displayed a JavaScript error in the console.

<!--- MC-19060-->

*  Wishlist SKU counts now reflect the actual products listed. Previously, the SKU count was incorrect after a product was disabled.

<!--- MC-18196-->

*  Products that are deleted from a wishlist from the Admin are now deleted from the storefront wishlist, too.

<!--- MC-20139-->

*  The Admin wishlist display now lists the correct configurable products for all wishlists no matter which stores the wishlists were assigned to. Previously,  wishlists viewed from the Admin displayed only products that belonged to the default website.

### WYSIWYG

<!--- ENGCOM-5727-->

*  The Admin WYSIWYG editor no longer hangs when an image upload dialog opens. Previously, Magento displayed the spinner cursor until you refreshed the page. *Fix submitted by Pavel Bystritsky in pull request [24333](https://github.com/magento/magento2/pull/24333)*. [GitHub-23966](https://github.com/magento/magento2/issues/23966)

<!--- MC-18709-->

*  You can now open the Media Gallery without error. Previously, when you tried to open the Media gallery, Magento displayed the spinner icon on Media Gallery popup.

<!--- MC-19062-->

*  You can now upload a video from the WYSIWYG editor.

<!--- MC-17574-->

*  The WYSIWYG editor now saves quotation marks correctly. Previously, quotation marks were converted to `&quot;`.

## Known issues

*  **Issue**: This release introduces an enhancement to the invalidation logic for customer data sections that is not compatible with pre-2.3.4 deployments. You can no longer invalidate custom customer sections in `etc/frontend/sections.xml` files by declaring an action node without specifying any related sections. See [Magento 2.3 backward incompatible changes]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html) for a discussion of this change.

*  **Issue**: Magento throws an error when a customer places an order with PayPal Express Checkout and the order’s shipping address specifies a country region that has been manually entered into the text field rather than selected from the drop-down menu on the Shipping page. **Workaround**: Apply the PayPal Express Checkout issue with region patch for Magento 2.3.4  (Git-based or Composer-based). A fix for this issue will be included in Magento 2.3.5, which is scheduled for release in April 2020.

*  **Issue:** You cannot use the Magento Extension Manager to install extensions purchased from the Magento Marketplace. **Workaround**: Install extensions from the command line as described in [General CLI installation]({{ site.baseurl }}/extensions/install/). See [Extension Manager shows no extensions in Magento Commerce 2.3.x](https://support.magento.com/hc/en-us/articles/360043980352).

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-4-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-4-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.4  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
