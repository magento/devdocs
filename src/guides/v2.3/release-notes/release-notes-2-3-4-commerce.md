---
group: release-notes
title: Magento Commerce 2.3.4 Release Notes
---

Magento Commerce 2.3.4 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes over 220 functional fixes to the core product and  over 30 security enhancements. It includes resolution of over 275 contributions by our community members. These community contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

{% include install/pre-release.md %}

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.4) provides. Patch 2.3.3.1 (Composer package 2.3.3-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.3.  For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.3-p1), see [Install Magento using Composer](https://devdocs-beta.magento.com/guides/v2.3/install-gde/composer.html#get-the-metapackage). Security-only patches include only security bug fixes, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Adobe Security Bulletin for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.4) have been ported to 2.2.11, 1.14.4.4, and 1.9.4.4, as appropriate.

#### Security enhancements and fixes to core code

Additional security enhancements include:

* **Removal of custom layout updates and the deprecation of layout updates to remove the opportunity for Remote Code Execution (RCE)**.  The **Custom Layout Update** field on the CMS Page Edit, Category Edit, and Product Edit pages has now been converted to a selector. You can no longer specify an entity-specific layout update with text but instead must create a physical file that  contains the layout updates and select it for use. The name of the file containing an update must follow the  conventions described here. <!--- MC-16129-->

* **Redesigned  content template features so that only whitelisted variables can be added to templates**. This avoids the situation where administrator-defined templates such as email, newsletters, and CMS content can include variables and directives that can directly call PHP functions on objects.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following platform upgrades help enhance website security and PCI compliance.

* **Enhancements to the message queue framework**. Magento now supports the latest release of RabbitMQ v3.8, which is the third-party technology that underlies the Magento message queue framework. <!--- MC-14871-->
  
* **Improved page caching and session storage**. This release has been tested on the latest stable release of Redis v5.0.6. <!--- MC-14877-->

* **Enhanced support for Maria DB 10.2**. This release introduces a new abstraction layer that permits retrieval of information about tables and columns in deployments that implement declarative schema and MariaDB 10.2. Previously, when you ran `setup:upgrade` in a deployment with those features,  Magento threw an error indicating that the the schema was out-of-date. <!--- MC-16319 MC-17633-->

* The core integration of the Authorize.net payment method has been deprecated. Please use the official payment integration that is available on Marketplace.
  
**Note**: Magento 2.3.4 has not been tested with PHP 7.1. PHP 7.1 reached EOL (End of Life) on December 1, 2019. We recommend updating your deployment to a supported version of PHP. See [Magento 2.3 technology stack requirements](https://devdocs.magento.com/guides/v2.3/install-gde/system-requirements-tech.html) for information about supported versions.

### Performance boosts

Merchants and customers will see performance improvements as a result of these enhancements:

* Redundant non-cached requests to the server on catalog pages have been eliminated by refactoring the customer section invalidation mechanism and improving banner cache logic. <!--- MC-19107 MC-19249-->

* PHTML files have been refactored to better support parsing by the bundling mechanism. Our new bundling mechanism now identifies all dependencies on JavaScript. <!--- MC-19242-->

* Added the ability to disable statistic collecting for Reports module by default. A new configuration setting (**System Configuration** > **General** > **Reports** > **General Options**)  allows merchants to completely or partially disable Magento Reports. (Statistics collection for the Reports module is disabled by default. Magento recommends disabling Reports functionality for performance reasons when this capability is not required.)  <!--- MC-20322-->

### Infrastructure improvements

This release contains 250 enhancements to core quality, which improve the quality of the Framework and these modules:  catalog, sales, PayPal, Elasticsearch, import, CMS, and B2B.

### Merchant tool enhancements

* **Integration with Adobe Stock image galleries**. The new bundled Adobe stock integration extension enables merchants to add high quality media assets to their website content without leaving the Magento Admin. Merchants can use the searchable interface in the Magento Media Gallery to explore, preview, license, and deploy stock images in website content.

### Page Builder

Page Builder enhancements for this release include:

* Improved product sorting. Merchants can now sort by product position in category or list of product SKUs, and sort by defined parameters such as name or stock status.

* Improved product carousel. Merchants can choose how to showcase products in their content by selecting from predefined options in Page Builder Products content type.

* The content that merchants create in Page Builder is optimized for rendering on the storefront using the Venia Theme (PWA Studio). Unstructured content (HTML) that Page Builder generates and saves into a data base is converted into structured data that works in React and PWA Studio.

### Inventory Management

Inventory Management enhancements for this release include:

* New in-store pickup feature
* Support for bundle products on non-default stocks
* Performance optimizations

See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### GraphQL

Expanded GraphQL functionality and improvements include the following:

* StoreFront API coverage for Catalog and Checkout
* Pricing schema
* Performance
  
See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases)

### Google Shopping ads Channel

[Google Shopping ads Channel Release Notes](https://devdocs.magento.com/extensions/google-shopping-ads/release-notes/)  describes all changes to this feature for Magento 2.3.x.

### B2B

New B2B features and improvements include the following:

* **Ability to export requisition lists into CSV format**. B2B buyers can then perform batch modification for subsequent import into the shopping cart or import back into the requisition list. <!--- MC-17417-->

* **Granular ACLs for B2B modules**. Merchants can now restrict access to B2B features from the Admin,  controlling which  employees can work with B2B items and settings. <!--- MC-19649-->

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

## Backward-incompatible Changes

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.4 core code.

### Installation, upgrade, deployment

<!--- MC-19749-->
* Upgrades no longer fail when deployments contain store information predefined in `app/etc/config.php`. Previously, MySQL locks occurred during the store import phase of upgrade, and Magento threw an error.

<!--- MC-20135-->
* You can now successfully run `bin/magento setup:static-content:deploy` in developer mode. Previously, attempting to run `bin/magento setup:static-content:deploy` resulted in an error.

<!--- ENGCOM-5619-->
* The `setup:db-declaration:generate-patch` command now generates a patch file using the `revert()` method as expected when the  `--revertable` option is set to **true**. *Fix submitted by Alexander Taranovsky in pull request [23848](https://github.com/magento/magento2/pull/23848)*. [GitHub-23847](https://github.com/magento/magento2/issues/23847)

<!--- ENGCOM-6059-->
* You can now run `bin/magento maintenance:enable` or `bin/magento maintenance:disable` on a deployment with an empty database. Previously, Magento threw an error when you switched maintenance modes with an empty database. *Fix submitted by Ivan Koliadynskyy in pull request [24959](https://github.com/magento/magento2/pull/24959)*. [GitHub-23577](https://github.com/magento/magento2/issues/23577)

<!--- ENGCOM-6040-->
* Magento no longer disables the cache when you run `composer update`. *Fix submitted by adrian-martinez-interactiv4 in pull request [24892](https://github.com/magento/magento2/pull/24892)*. [GitHub-17634](https://github.com/magento/magento2/issues/17634)

<!--- ENGCOM-5724-->
* Vendor names can now contain numbers. Previously, Magento threw an error. *Fix submitted by Jason Sylvester in pull request [24324](https://github.com/magento/magento2/pull/24324)*. [GitHub-8037](https://github.com/magento/magento2/issues/8037)

<!--- MC-19642-->
* Single pipes in `composer.json` files have been changed to double pipes.

### AdminGWS

<!--- MC-18702-->
* Administrators with restricted access can now view **Content** > **Pages**. Previously, when an administrator tried to access this page, Magento displayed this error: The error `You cannot define a correlation namestore_tablemore than once`.  

### Analytics

<!--- ENGCOM-5978-->
* `module-analytics/Model/ExportDataHandler.php` now generates data in the `Docroot/var/` folder as expected. *Fix submitted by Adarsh Manickam in pull request [24773](https://github.com/magento/magento2/pull/24773)*. [GitHub-24708](https://github.com/magento/magento2/issues/24708)

<!--- MC-19638-->
* Clicking on the ESC key no longer closes the Admin Analytics popup dialog that Magento displays when an administrator first logs in.

<!--- MC-19639-->
* Administrators can now use the TAB key only to navigate  between the **Allow** and **Don't Allow** buttons. Previously, an administrator could use the TAB key to navigate out of the dialog.

### Backend

<!--- MC-20622-->
* Magento now sets the correct Admin locale scope when generating email templates. Previously, email sent from the Admin included incorrect static file paths.

### Bundle products

<!--- MC-19438-->
* The price and subtotal shown in the cart and mini cart for bundle products is now based on quantity of items and tier price as expected. Previously, if you added a second product to the cart, Magento doubled the product price that was displayed in the cart.

<!--- MC-18963-->
* The shopping cart now displays correct prices for bundle products when you use the **Add to Cart Button** to add them to cart twice.

<!--- ENGCOM-5534-->
* Bundle products now show the correct price when bundle options include only one multiple select option. *Fix submitted by Rani Priya in pull request [23902](https://github.com/magento/magento2/pull/23902)*. [GitHub-23886](https://github.com/magento/magento2/issues/23886)

### B2B

<!--- MC-17862-->
* You can now access or refresh the Simple Product page for a product created by API. Previously, if you tried to access a product’s page after running `bin/magento cache:flush`, Magento threw an error.

<!--- MC-17007-->
* You can now successfully set a valid customer to active status using the **Active** action that is available from the All Customers list Actions menu. Previously, when you tried to set a valid customer to active, Magento did not change the customer status and let the status field empty, which prevented you from including this customer when creating a company.

<!--- MC-19185-->
* Magento no longer displays an option to review Terms and Conditions  whenever you try to place an order from a quote. Previously,  when you tried to check out from a quote when trying to place an order,  you had to check the terms box before clicking **Place order**, and Magento displayed an error.

<!--- MC-19396-->
* Customer attributes are now displayed as expected on the Add New Company page. Previously, Magento did not display customer attributes on a company's Admin tab even when you enabled the **Values Required** and **Show on Storefront** settings, which prevented you from creating a new company.

<!--- MC-17193-->
* Users with company administrative privileges can no longer submit reorders for accounts other than their own.

<!--- MC-17803-->
* The Request a Quote page (accessed by clicking **Request a Quote** from the shopping cart page) now works as expected in deployments running Internet Explorer 11.x.

<!--- MC-19650-->
* PayPal Express now works as expected as a payment method for quotes. Previously, Magento displayed this error when you tries to complete payment using PayPal Express:  `We can't initialize Express Checkout`.

<!--- MC-20117-->
* Magento now minimizes requisition lists as expected when multiple wishlists are enabled. Previously, the wishlist remained expanded even when you attempted to close it.

<!--- MC-19944-->
* Shared catalogs are now listed and identified as expected in the **Product in Shared Catalogs** tab. Previously, when you saved shared categories for a product, Magento either did not display the categories  or did not display them as selected.

<!--- MAGETWO-67450-->
* Currency rates are no longer duplicated on the Admin Order page.
  
<!--- MC-19837-->
* Magento now handles decimal values in product quantities as expected when adding a product to a requisition list. Previously, when you entered a decimal value as a product quantity, Magento added the item quantity to the the requisition list but omitted the decimal value.

<!--- MC-19836-->
* The Select All checkbox on the Requisition List page now work as expected. Previously, when you deselected all products in a requisition list, the **Select All** checkbox remained enabled.

<!--- MC-20212-->
* The `cron` job that deletes inactive quotes now affects only standard carts, not negotiable quotes. Previously, a cron job deleted negotiable quotes, which resulted in data loss.

<!--- MC-21876-->
* Administrators can now successfully place an order again from the Admin. Previously, if the administrator tried to place the order again from the Admin, the **Same as Billing Address** checkbox always defaulted to **true** when the reorder form was rendered. As a result, the billing address overrode the shipping address, and the original shipping address information was lost.

<!--- MC-19649-->
* Merchants can now restrict access to B2B features from the Admin,  controlling which  employees can work with B2B items and settings.

<!--- MC-20208-->
* Administrators with appropriate permissions can now create a new user when customer prefixes are enabled. Previously, Magento threw an error.

<!--- MC-21459-->
* Magento now uses the language set for the store view in which the order was placed when displaying an order's payment information in the Admin. Previously, Magento always derived this information from  the default store view for all orders created in a multi-site deployment.

<!--- MC-21462-->
* Magento now loads email templates as expected from the Admin **Marketing** > **Email Templates** > **Add New Template** page. Previously, when you tried to add a new template,  Magento displayed this error: `The template did not load. Please review the log for details`.

<!--- MC-21688-->
* Magento now displays all available products as expected from the Admin Create Order page. Previously, Magento did not display all products whether added by SKU or by using **Add Products**.

<!--- MC-17824-->
* The **Manufacturer's Suggested Retail Price** field on the Advanced Pricing page has been re-labeled to **Minimum Advertised Price**.

<!--- MC-19915-->
* You can now successfully create a company from the storefront account of another company. Previously, Magento displayed an informative error message.
  
<!--- MC-17417-->
* You can now export requisition lists into CSV format. B2B buyers can then perform batch modification for subsequent import into the shopping cart or import back into the requisition list.

### Cache

<!--- MC-19712-->
* Full page caching now works as expected for non-default store views.

### Cart and checkout

<!--- MC-21926-->
* Magento now applies the conditions that are imposed by multiple cart price rules correctly. Previously, Magento ignored conditions to remove free shipping when other discounts were valid.

<!--- MC-17869-->
* Magento now correctly applies cart price rules that apply a 100% discount.

<!--- MC-19053-->
* Guest users can now checkout after persistent shopping cart has been disabled. Previously, Magento displayed this error: `No cart with such entityId=0`.

<!--- MC-19152-->
* Magento no longer displays custom dropdown customer address attribute option IDs  on the Review & Payment section of the checkout workflow when a guest checks out. Previously, Magento displayed the option ID instead of the option label for the selected attribute option.

<!--- MC-19637-->
* Billing and Shipping information no longer disappear from the Payment section of the checkout workflow when an AJAX POST request fails.

<!--- MC-19271-->
* Magento now displays an error when you upload an incorrect product SKU while creating an order in a non-default store in a multi-store deployment. Previously, Magento displayed an error when this scenario occurred in the default store.

<!--- MC-19894-->
* Magento no longer displays customer address attribute option IDs  on the dropdown menu of the Shipping section of the checkout workflow. Previously, Magento displayed the option ID instead of the option label for the selected attribute option.
  
<!--- MC-15507-->
* Magento no longer drops or updates the shipping address  after a customer update or adds a new billing address zip/postal code when the **My billing and shipping address are the same** setting is disabled.

<!--- MC-17469-->
* Magento no longer throws a fatal error when you open the shopping cart in a separate window during multishipping checkout.

<!--- MC-17493-->
* Cart Price Rules tables in multi-site deployments now show existing cart price rules as expected. Previously, the Cart Price Rules page displayed the **Search** button, number of records found, and navigation buttons, but did not display the grid of rules.

<!--- ENGCOM-5525-->
* You can now use REST to add a  product with customizable options (for example, type checkbox) to the cart. Previously, Magento threw an informative error when you used the POST `/V1/guest-carts/{cartId}/items` endpoint. *Fix submitted by Denis Kopylov in pull request [23871](https://github.com/magento/magento2/pull/23871)*. [GitHub-23863](https://github.com/magento/magento2/issues/23863)

<!--- ENGCOM-5513-->
* Validation logic has been added to the **Minimum Qty Allowed in Shopping Cart**  field on **Store** > **Configurations** > **Catalog** > **Inventory**. *Fix submitted by Eden Duong in pull request [23896](https://github.com/magento/magento2/pull/23896)*. [GitHub-23895](https://github.com/magento/magento2/issues/23895)

<!--- ENGCOM-5511-->
* Magento now displays correct product quantities on the Items Ordered  tab of the order page when the price includes a decimal value.  *Fix submitted by Eden Duong in pull request [23943](https://github.com/magento/magento2/pull/23943)*. [GitHub-23940](https://github.com/magento/magento2/issues/23940)

<!--- ENGCOM-5454-->
* Magento now saves schedule update settings that are set in **Admin** > **Catalog** > **Categories** > **Category** > **Schedule Design Update** as expected when you change store view. *Fix submitted by kcnariya in pull request [23983](https://github.com/magento/magento2/pull/23983)*. [GitHub-23982](https://github.com/magento/magento2/issues/23982)

<!--- ENGCOM-5685-->
* You can now enable the **uploaded file of file type custom** option for a product from the shopping cart. *Fix submitted by Rani Priya in pull request [24240](https://github.com/magento/magento2/pull/24240)*. [GitHub-24239](https://github.com/magento/magento2/issues/24239)

<!--- ENGCOM-5710-->
* Validation logic has been added to the **Send Payment Failed Email Copy To** field of
**Admin** > **Store** > **Configurations** > **Sales** > **Checkout** > **Payment Failed Email**. *Fix submitted by Eden Duong in pull request [24313](https://github.com/magento/magento2/pull/24313)*. [GitHub-24307](https://github.com/magento/magento2/issues/24307)

<!--- ENGCOM-5649-->
* Magento now refreshes the shopping cart as expected when you remove a product from the cart side block. Previously, when you deleted a product from the shopping cart side block, Magento did not update the shopping cart. *Fix submitted by Ravi Chandra in pull request [22478](https://github.com/magento/magento2/pull/22478)*. [GitHub-11292](https://github.com/magento/magento2/issues/11292)

<!--- ENGCOM-5779-->
* Magento now correctly calculates minicart height when child items contain margins. *Fix submitted by Shankar Konar in pull request [24451](https://github.com/magento/magento2/pull/24451)*. [GitHub-24441](https://github.com/magento/magento2/issues/24441)

<!--- ENGCOM-5790-->
* Magento now displays an informative error message when a customer updates a shopping cart with a product quantity that is not in stock. Previously, under these conditions, Magento displayed an inaccurate error message. *Fix submitted by Gustavo Vicente Dauer in pull request [24380](https://github.com/magento/magento2/pull/24380)*. [GitHub-24366](https://github.com/magento/magento2/issues/24366)

<!--- ENGCOM-5811-->
* You can now update the quantity of a product measured in decimals from the shopping cart when the **Qty uses decimal** setting is enabled. Previously, Magento did not update the product quantity. *Fix submitted by Rani Priya in pull request [24510](https://github.com/magento/magento2/pull/24510)*. [GitHub-24509](https://github.com/magento/magento2/issues/24509)

<!--- ENGCOM-5752-->
* The **Shopping Cart** label has been changed to **Mini Cart** in the sidebar. *Fix submitted by Sunil in pull request [24411](https://github.com/magento/magento2/pull/24411)*. [GitHub-24409](https://github.com/magento/magento2/issues/24409)

<!--- ENGCOM-5807-->
* The **Clear Shopping Cart** button now works as expected when running Magento with Internet Explorer. *Fix submitted by Eden Duong in pull request [24499](https://github.com/magento/magento2/pull/24499)*.  [GitHub-24491](https://github.com/magento/magento2/issues/24491)

<!--- ENGCOM-5807-->
* Magento no longer empties the contents of a customer’s shopping cart when she presses **Enter** after changing a product’s quantity.  *Fix submitted by Eden Duong in pull request [24499](https://github.com/magento/magento2/pull/24499)*.  [GitHub-21499](https://github.com/magento/magento2/issues/21499)

<!--- ENGCOM-5837-->
* Magento now includes the downloadable links associated with a downloadable products when you add the product to the shopping cart and then edit the cart. *Fix submitted by Rani Priya in pull request [24580](https://github.com/magento/magento2/pull/24580)*. [GitHub-24579](https://github.com/magento/magento2/issues/24579)

<!--- ENGCOM-5926-->
* Discount descriptions are now displayed consistently throughout the product interface. *Fix submitted by Max Souza in pull request [24595](https://github.com/magento/magento2/pull/24595)*. [GitHub-3594](https://github.com/magento/magento2/issues/3594)

<!--- ENGCOM-6149-->
* Magento now displays the **Update** and **Delete** buttons as expected in the minicart in mobile view. Previously, these buttons overlapped. *Fix submitted by Adarsh Manickam in pull request [25206](https://github.com/magento/magento2/pull/25206)*. [GitHub-25137](https://github.com/magento/magento2/issues/25137)

<!--- ENGCOM-6072-->
* The storefront and Admin shopping cart summary fields are now displayed consistently  and follow setting preferences. *Fix submitted by Eden Duong in pull request [25037](https://github.com/magento/magento2/pull/25037)*. [GitHub-25036](https://github.com/magento/magento2/issues/25036)

<!--- ENGCOM-6151-->
* The `QuoteManagement::assignCustomer()` method now allows you to merge a guest cart with an active customer cart. As a result, the PUT /V1/guest-carts/:guest-cart-id call works as expected. *Fix submitted by Ivan Koliadynskyy in pull request [24862](https://github.com/magento/magento2/pull/24862)*. [GitHub-24808](https://github.com/magento/magento2/issues/24808)

<!--- MC-21906-->
* Magento no longer displays a disabled product in a cart or on the storefront if it is disabled after a customer has added it to the cart using a coupon code. Previously, under these conditions, Magento threw an error, and the customer could not complete the order.

<!--- MC-20881-->
* Magento now removes the `aria-invalid` attribute or sets the attribute value to false after successful  validation of the address entered into the checkout email field. [GitHub-21573](https://github.com/magento/magento2/issues/21573)

<!--- MC-21706-->
* You can now add products from a non-default website to a cart from the Admin in a multsite deployment. Previously, when you created a cart from the non-default site and tried to create an order in the Admin by adding  items to the cart, Magento did not add the items, but emptied the cart.

### Catalog

<!--- MC-19398-->
* Editing the attribute set of a disabled product no longer enables the product on the storefront.

<!--- MC-19090-->
* Magento now displays category banner images as expected on the category edit and the storefront category pages.

<!--- MC-17251-->
* Magento no longer throws a fatal error during compilation of code that contains a preference for the category product indexer. [GitHub-22769](https://github.com/magento/magento2/issues/22769)

<!--- MC-19872-->
* When an administrator sets the out-of-stock threshold for a product to a negative value and allows backorders below a quantity of  0, customers can backorder a product until the out-of-stock-threshold value matches the product's stock quantity. Previously, the out-of-stock threshold had no effect, and the given product stayed in stock and could be backordered without limit.

<!--- MC-19916-->
* Storeview-specific attributes are now included in layered navigation results even when the **All Store Views** setting is not enabled.

<!--- MAGETWO-45666-->
* Magento now displays the `Refresh Cache` message as expected when you change the layout of the category page.

<!--- MC-16650-->
* Catalog search layered navigation results now include product attributes of type price.

<!--- MAGETWO-98748-->
* Magento now highlights only the most recently selected category as expected on storefront pages that contain multiple categories. Previously, all selected category menus remained highlighted.
  
<!--- MC-19652-->
* The performance of the Product Categories indexer has been improved. Previously, reindexing product categories could take up to 30 minutes.

<!--- MC-18784-->
* Corrected an issue that caused category tree values to return null after upgrading from Magento 2.3.1 when multiple store views exist.[GitHub-23951](https://github.com/magento/magento2/issues/23951)

<!--- MC-16455-->
* Magento no longer ignores  permissions restrictions for category management that are set in the GWS module. Previously, administrators with restricted permissions could change and create categories for which their permissions were restricted.

<!--- MC-19607-->
* Clicking **Delete** on a Product page twice after selecting one or more products no longer deletes all products. [GitHub-15935](https://github.com/magento/magento2/issues/15935)

<!--- MC-20490-->
* The catalog product lists now display as expected when products contain custom attribute conditions.

<!--- MAGETWO-65232-->
* Magento now successfully loads pages that implement the catalog product list widget when products contain custom attribute conditions. Previously, Magento threw this error: `Error filtering template: Notice: Undefined offset: 0 in .../app/code/Magento/CatalogWidget/Model/Rule/Condition/Product.php on line 221`.

<!--- ENGCOM-5679-->
* Merchants can now scroll down the **Create New Product** page to determine whether the product has been saved if they enter invalid values in the **Schedule Design Update** fields. Previously, customers could not scroll to see if the product had been saved. *Fix submitted by Eden Duong in pull request [24242](https://github.com/magento/magento2/pull/24242)*. [GitHub-24241](https://github.com/magento/magento2/issues/24241)

<!--- MC-21933-->
* Type declarations for the `$condition` arguments were removed from two private methods that were created during recent refactoring of product collection code.

### CatalogInventory

<!--- MC-17524-->
* You can now add a child product to the shopping cart if it does not have  a default source assigned

### Catalog rule

<!--- MC-22135-->
* Magento now correctly applies Catalog Price rules in deployments where the time zone is set to `EEST` (Europe/Helsinki) and `Locale = Finnish (Finland)`.

### Cleanup and simple code refactoring

<!--- ENGCOM-5549-->
* The **Are you sure you want to delete this category?** message is now translatable. *Fix submitted by Eden Duong in pull request [24039](https://github.com/magento/magento2/pull/24039)*. [GitHub-24038](https://github.com/magento/magento2/issues/24038)

<!--- ENGCOM-5609-->
* The PayPal setting section of the Admin **Stores** >**Configuration** > **Sales** > **Payment Methods** page now has an expand/collapse icon. *Fix submitted by Eden Duong in pull request [24119](https://github.com/magento/magento2/pull/24119)*. [GitHub-24118](https://github.com/magento/magento2/issues/24118)

<!--- ENGCOM-5632-->
* Links to a sitemap generated at  **Marketing** > **SEO & Search** > **sitemap** is are now  valid. Previously, Magento returned a 404 error when you clicked on the sitemap link. *Fix submitted by Sunil in pull request [23716](https://github.com/magento/magento2/pull/23716)*. [GitHub-23706](https://github.com/magento/magento2/issues/23706)

<!--- ENGCOM-5684-->
* The minicart now displays a product’s file type custom option. *Fix submitted by Rani Priya in pull request [24237](https://github.com/magento/magento2/pull/24237)*. [GitHub-24236](https://github.com/magento/magento2/issues/24236)

<!--- ENGCOM-5792-->
* The spacing of the Select Input box on Admin pages with grids is now consistent with other pages in Magento. *Fix submitted by Nagamaiah333 in pull request [24359](https://github.com/magento/magento2/pull/24359)*. [GitHub-24152](https://github.com/magento/magento2/issues/24152)

<!--- ENGCOM-5784-->
* Fixed misalignment of the scope icon and the store view-specific label on the **Admin** > **Store** > **Settings** > **Order status** > **Create New Status** page. *Fix submitted by Eden Duong in pull request [24449](https://github.com/magento/magento2/pull/24449)*. [GitHub-24440](https://github.com/magento/magento2/issues/24440)

<!--- ENGCOM-5935-->
* The What's this? link in the Remember me section of the storefront login page now behaves as expected. *Fix submitted by Vinicius Rafael Dziuba in pull request [24602](https://github.com/magento/magento2/pull/24602)*. [GitHub-24511](https://github.com/magento/magento2/issues/24511)

<!--- ENGCOM-5968-->
* Corrected misalignment of the checkboxes and associated labels on the Admin **Catalog** >  **Products** > **Update Attributes** page. *Fix submitted by Adarsh Manickam in pull request [24761](https://github.com/magento/magento2/pull/24761)*. [GitHub-24740](https://github.com/magento/magento2/issues/24740)

<!--- ENGCOM-5981-->
* Fixed inconsistent and improper capitalization  in  **Admin** > **Marketing** > **Communications** > **Email Templates** > **Create a New Template** page. *Fix submitted by Adarsh Manickam in pull request [24804](https://github.com/magento/magento2/pull/24804)*. [GitHub-24803](https://github.com/magento/magento2/issues/24803)

<!--- ENGCOM-6033-->
* The `Magento\CatalogUrlRewrite\Model\Storage\DynamicStorage::getCategoryUrlSuffix()` method return value has been changed to type `string`. *Fix submitted by Brent Robert in pull request [24907](https://github.com/magento/magento2/pull/24907)*. [GitHub-24903](https://github.com/magento/magento2/issues/24903)

<!--- ENGCOM-6114-->
* The drop-down icon now remains visible when you click on **Load Template** while creating an email template from the Admin. *Fix submitted by Gaurav Agarwal in pull request [25022](https://github.com/magento/magento2/pull/25022)*. [GitHub-24840](https://github.com/magento/magento2/issues/24840)

<!--- ENGCOM-6145-->
* Fixed alignment of the wishlist icon on the shopping cart in mobile view. *Fix submitted by Shubham Sharma in pull request [25200](https://github.com/magento/magento2/pull/25200)*. [GitHub-20502](https://github.com/magento/magento2/issues/20502)

<!--- ENGCOM-6157-->
* Corrected misalignment and standardized design of the  Other PayPal Payment Solutions  header on the Store Configuration page. *Fix submitted by Arvinda Kumar in pull request [25241](https://github.com/magento/magento2/pull/25241)*. [GitHub-25240](https://github.com/magento/magento2/issues/25240)

<!--- ENGCOM-5550-->
* Duplicate labels in the Admin **Sales** > **Transactions** Payment Method table have been removed. *Fix submitted by Eden Duong in pull request [24041](https://github.com/magento/magento2/pull/24041)*. [GitHub-24040](https://github.com/magento/magento2/issues/24040)

<!--- ENGCOM-5531-->
* Added a missing label on **Marketing** > **Search Synonyms**  > **New Synonym Group**. *Fix submitted by Eden Duong in pull request [23954](https://github.com/magento/magento2/pull/23954)*. [GitHub-23953](https://github.com/magento/magento2/issues/23953)

<!--- ENGCOM-6227-->
* Corrected the misalignment of the **Cache Type** checkboxes throughout the Admin. *Fix submitted by Mateusz Krzeszowiak in pull request [25443](https://github.com/magento/magento2/pull/25443)*. [GitHub-25429](https://github.com/magento/magento2/issues/25429)

<!--- ENGCOM-6147-->
* Fixed display issue with the placeholder text in the newsletter subscription block in the global footer that occurred in mobile view. *Fix submitted by Christos Stergianos in pull request [25184](https://github.com/magento/magento2/pull/25184)*. [GitHub-21592](https://github.com/magento/magento2/issues/21592)
  
### CMS content

<!--- MC-20709-->
* The checkboxes in the Dynamic Block Rotator (used when inserting a widget during the creation of a CMS page) has been corrected, and the widgets are now fully clickable as expected.

<!--- MC-18997-->
* CMS pages now remain assigned to the hierarchy when you create a schedule update for the CMS page.

<!--- ENGCOM-5487-->
* You can now save CMS blocks with no content.  *Fix submitted by Eden Duong in pull request [23801](https://github.com/magento/magento2/pull/23801)*. [GitHub-23800](https://github.com/magento/magento2/issues/23800)

### Command-line interface (CLI commands)

<!--- ENGCOM-5955-->
* Exception handling for CLI commands have been by edited to be specific and informative and relevant to the context in which the error occurs. *Fix submitted by Pavel Bystritsky in pull request [24734](https://github.com/magento/magento2/pull/24734)*. [GitHub-24678](https://github.com/magento/magento2/issues/24678), [GitHub-24043](https://github.com/magento/magento2/issues/24043)

<!--- ENGCOM-5970-->
* `bin/magento setup:backup --media` now successfully backs up a symbolic-linked `pub/media` directory. *Fix submitted by Ivan Koliadynskyy in pull request [24755](https://github.com/magento/magento2/pull/24755)*. [GitHub-13218](https://github.com/magento/magento2/issues/13218)

### Configurable products

<!--- MC-22142-->
* Magento now maintains the sort order of uploaded simple images when they are uploaded through the Create Configurations wizard.

<!--- MC-18810-->
* A configurable product’s options list now shows out-of-stock products as expected when the **Display Out of Stock Products** option is enabled.

<!--- MC-18847-->
* You can now remove special prices from a product without affecting the price of associated products. Previously, after removing the special price from one simple product, Magento stopped displaying the  regular price for all associated simple products.

<!--- MC-20225-->
* The performance of edit and save operations on configurable products has been improved.

<!--- MC-19689-->
* The Admin configurable product list now displays all simple products with a quantity of 0 as expected. Previously, simple product disappeared from this list when a product quantity was set to 0.

<!--- ENGCOM-5937-->
* Magento no longer throws an error when you try to add new attribute options to  a configurable product. *Fix submitted by federeggiani in pull request [24659](https://github.com/magento/magento2/pull/24659)*. [GitHub-14240](https://github.com/magento/magento2/issues/14240)

<!--- ENGCOM-6015-->
* Custom attribute loading now works as expected. Previously, the `getUsedProducts()` method’s optional `$requiredAttributeIds` parameter was not used, which prevented the loading of custom attributes. *Fix submitted by Laura Folco in pull request [24875](https://github.com/magento/magento2/pull/24875)*. [GitHub-24483](https://github.com/magento/magento2/issues/24483)

### Cookies

<!--- ENGCOM-6129-->
* Magento no longer redirects customers to the Cookie CMS-page upon login when the **Redirect to CMS-page if Cookies are Disabled** setting is disabled. *Fix submitted by Eden Duong in pull request [25152](https://github.com/magento/magento2/pull/25152)*. [GitHub-25148](https://github.com/magento/magento2/issues/25148)

### Cron

<!--- ENGCOM-5717-->
* A new flag has been added to the `bin/magento cron:install` command that permits you to add only mandatory entries to the crontab file of the server on which Magento is running. The `--non-optional` flag (or `-d` for short) adds only one or three possible lines to the `crontab` file. Without this flag, `bin/magento cron:install` adds three lines to the `crontab` of the server on which Magento is running. Only one of those added lines is necessary to run Magento, and many installations are configured such that the two optional lines are not needed. *Fix submitted by Alexander Taranovsky in pull request [24187](https://github.com/magento/magento2/pull/24187)*. [GitHub-10040](https://github.com/magento/magento2/issues/10040), [GitHub-24186](https://github.com/magento/magento2/issues/24186)

<!--- ENGCOM-5934-->
* The `php bin/magento cron:run` command now creates adds an entry for `currency_rates_update` in the `cron_schedule` table as expected. *Fix submitted by Bruno Roeder in pull request [24590](https://github.com/magento/magento2/pull/24590)*. [GitHub-23846](https://github.com/magento/magento2/issues/23846)

### Customer

<!--- MC-19824-->
* The condition **Total Number of Orders equals or greater than 0** now affects customer segments as expected. Previously, when a customer segment was created with this condition, only customers with 0 orders applied.

<!--- MC-19016-->
* The **Date of Birth** field on the customer registration form no longer defaults to **1/1/1970** in deployments  that already contain a registered customer with the same email in stores using the `en_AU` locale.
  
<!--- MC-18935-->
* Magento now correctly applies customer segment cart price rules when products are added to cart from different websites in a multi-website deployment. Previously, discounts were not applied correctly for all products in the cart.  

<!--- MC-19302-->
* Magento no longer logs an error in `exception.log` when a customer logs in to a store for which the merchant has created a customer segment defined by the **Up To Date(period)** condition.

<!--- MC-19440-->
* The list of countries accessible from the **Add New Address** field of the checkout workflow now displays only countries that have been defined in **Admin** > **Stores** > **Configuration** > **General**.

<!--- MC-17201-->
* Delegated account creation no longer fails when the customer address contains custom attributes. [GitHub-22952](https://github.com/magento/magento2/issues/22952)

<!--- ENGCOM-5842-->
* Magento now clears the **State/Province** field on the customer address page when you change the value for country while editing a customer address. *Fix submitted by Lucas Calazans in pull request [24597](https://github.com/magento/magento2/pull/24597)*. [GitHub-23460](https://github.com/magento/magento2/issues/23460)

<!--- ENGCOM-6057-->
* Magento now runs validation checks on the values entered into the **Date of Birth** field in the Admin Add New customer page. *Fix submitted by Tiago de Oliveira Castro Teixeira Pinto in pull request [24588](https://github.com/magento/magento2/pull/24588)*. [GitHub-22692](https://github.com/magento/magento2/issues/22692)

### Custom customer attributes

<!--- MC-19696-->
* You can now successfully create and implement a plugin for `Magento\CustomAttributeManagement\Helper\Data`.

<!--- MAGETWO-99838-->
* Magento now displays an informative error message when a customer tries to place an order without adding an address for the payment method and the checkbox **My billing and shipping address are the same** is unchecked.

### Database media storage

<!--- ENGCOM-5498-->
* The `php bin/magento catalog:image:resize` command now processes images from the database as expected when files does not exist locally. *Fix submitted by gwharton in pull request [23913](https://github.com/magento/magento2/pull/23913)*. [GitHub-23911](https://github.com/magento/magento2/issues/23911)

<!--- ENGCOM-5573-->
* Enabling **Flush Catalog Images Cache** on **System** > **Cache Management** now clears all cached image files from both the filesystem and database. Previously, Magnto removed images from the filesystem only. *Fix submitted by Wharton in pull request [24088](https://github.com/magento/magento2/pull/24088)*. [GitHub-23516](https://github.com/magento/magento2/issues/23516)

### Declarative schema

<!--- ENGCOM-6166-->
* The data/schema patch **getAliases()** method now works as expected. *Fix submitted by korostii in pull request [25265](https://github.com/magento/magento2/pull/25265)*. [GitHub-23031](https://github.com/magento/magento2/issues/23031)

### Downloadable products

<!--- ENGCOM-5865-->
* Magento no longer displays a console error when you select all links for  a downloadable product on the storefront. *Fix submitted by Rani Priya in pull request [24634](https://github.com/magento/magento2/pull/24634)*. [GitHub-24633](https://github.com/magento/magento2/issues/24633)

<!--- ENGCOM-6047-->
* Magento now displays the **Unselect all** button on the shopping cart page when a customer selects a downloadable product with multiple options. *Fix submitted by Adarsh Manickam in pull request [24800](https://github.com/magento/magento2/pull/24800)*. [GitHub-24785](https://github.com/magento/magento2/issues/24785)

### Dynamic block (formerly banner)

<!--- MC-21788-->
* Dynamic block content is now invalidated as expected when the store view is changed in a multistore deployment.

<!--- MC-13951-->
* Schema upgrades no longer result in unexpected foreign key re-creation and column modifications.

### EAV

<!--- MC-19777-->
* The product attribute edit page now loads successfully when you try to edit an attribute value from the Admin. Previously, Magento threw a 500 error.

<!--- MC-18701-->
* The Attribute Option update API no longer creates multiple options with the same value.

<!--- MC-19623-->
* The `catalog_product_entity_varchar/catalog_product_entity_int` tables are now updating with correct values. Previously, when you tried to access the product using REST, Magento displayed deleted custom attribute option values.

<!--- ENGCOM-5618-->
* Magento now correctly saves the values assigned to the sort_order and attribute_group_code  attributes by the POST /V1/products/attribute-sets/groups call. *Fix submitted by Eden Duong in pull request [23690](https://github.com/magento/magento2/pull/23690)*. [GitHub-23634](https://github.com/magento/magento2/issues/23634)

<!--- ENGCOM-5977-->
* The `eav_attribute_label` table now contains a unique key constraint on the (`store_id`, `attribute_id`) column pair. *Fix submitted by KaushikChavda in pull request [24582](https://github.com/magento/magento2/pull/24582)*. [GitHub-24581](https://github.com/magento/magento2/issues/24581)

### Email

<!--- ENGCOM-6034-->
* The Registration and Contact us pages now correctly handle customer names that contain non-ASCII characters. Previously, if the customer name contained non-ASCII characters, the user did not receive the email. *Fix submitted by elvinristi in pull request [24906](https://github.com/magento/magento2/pull/24906)*. [GitHub-24902](https://github.com/magento/magento2/issues/24902)

### JavaScript framework

<!--- ENGCOM-5994-->
* Unnecessary define checks have been removed from JavaScript modules that are used by requireJS. *Fix submitted by Bartłomiej Szubert in pull request [24833](https://github.com/magento/magento2/pull/24833)*. [GitHub-22747](https://github.com/magento/magento2/issues/22747)

### General fixes

<!--- ENGCOM-5520-->
* Basic validation steps have been added to fields on the **Store** > **Configuration** > **Catalog** page. *Fix submitted by Eden Duong in pull request [23723](https://github.com/magento/magento2/pull/23723)*. [GitHub-23721](https://github.com/magento/magento2/issues/23721)

<!--- ENGCOM-5468-->
* Magento now displays an error message when validation fails when you click **Generate** on the Manage Coupon Codes page and the applicable sales rule has the **Use Auto Generation** setting is enabled. *Fix submitted by Eden Duong in pull request [23781](https://github.com/magento/magento2/pull/23781)*. [GitHub-23778](https://github.com/magento/magento2/issues/23778)

<!--- ENGCOM-5572-->
* Magento now correctly redirects you to the customer account page when you click the Back button on the Manage Addresses page. *Fix submitted by Eden Duong in pull request [24079](https://github.com/magento/magento2/pull/24079)*. [GitHub-24058](https://github.com/magento/magento2/issues/24058)

<!--- ENGCOM-5762-->
* The New Block form no longer displays a **Store View** field when your deployment is in single-store mode. *Fix submitted by Eden Duong in pull request [24397](https://github.com/magento/magento2/pull/24397)*. [GitHub-24387](https://github.com/magento/magento2/issues/24387)

<!--- ENGCOM-6158-->
* Images now change as expected when you swipe over the image when using a touch screen. *Fix submitted by Eden Duong in pull request [25061](https://github.com/magento/magento2/pull/25061)*. [GitHub-25060](https://github.com/magento/magento2/issues/25060)

### Image

<!--- ENGCOM-5569-->
* The size of images displayed  in RSS feeds is now determined by the `view.xml` file. *Fix submitted by Sunil in pull request [23533](https://github.com/magento/magento2/pull/23533)*. [GitHub-23516](https://github.com/magento/magento2/issues/23516)

### Import/export

<!--- ENGCOM-5992-->
* Magento now creates an advanced price export file as expected when exporting more than 5000 products. Previously, Magento threw an error and did not create the file. *Fix submitted by Mahesh Singh in pull request [24831](https://github.com/magento/magento2/pull/24831)*. [GitHub-24722](https://github.com/magento/magento2/issues/24722)

<!--- ENGCOM-6116-->
* The Scheduled Import Settings page no longer displays fields that have been disabled in configuration settings. *Fix submitted by Eden Duong in pull request [25102](https://github.com/magento/magento2/pull/25102)*. [GitHub-25101](https://github.com/magento/magento2/issues/25101)

<!--- ENGCOM-6079-->
* Removed redundant quotation marks from the CSV field title of the exported order CSV file. *Fix submitted by Alexander Lukyanov in pull request [24969](https://github.com/magento/magento2/pull/24969)*. [GitHub-23465](https://github.com/magento/magento2/issues/23465)

<!--- ENGCOM-6071-->
* The Export page now displays exported files in a grid. Previously, Magento did not list files but instead displayed a message indicating that the CDATA section was too large to display when more than 20,000 records were exported. *Fix submitted by Eduard Chitoraga in pull request [24954](https://github.com/magento/magento2/pull/24954)*. [GitHub-24311](https://github.com/magento/magento2/issues/24311)

### Infrastructure

<!--- ENGCOM-5540-->
* File permissions for non-executable files in GitHub have been changed from 755 to 664 where appropriate. *Fix submitted by Pieter Hoste in pull request [24005](https://github.com/magento/magento2/pull/24005)*. [GitHub-1453](https://github.com/magento/magento2/issues/1453)

<!--- ENGCOM-6044-->
* An incorrect Bool return type for the `setIsActive()` method in `Salesrule Module RuleInterface.php` has been corrected to RuleInterface. *Fix submitted by Bartłomiej Szubert in pull request [24814](https://github.com/magento/magento2/pull/24814)*. [GitHub-13278](https://github.com/magento/magento2/issues/13278)

<!--- ENGCOM-6199-->
* Magento no longer adds a `form_key` field to POST forms that had external action URLs. (*External action URLS* are URLS that do not belonging to shop's base URL.) *Fix submitted by Mateusz Krzeszowiak in pull request [25336](https://github.com/magento/magento2/pull/25336)*. [GitHub-23382](https://github.com/magento/magento2/issues/23382)

### Newsletter

<!--- ENGCOM-6144-->
* Magento now displays empty **Customer First Name** and **Customer Last Name** fields on the Admin **Marketing** > **Newsletter Subscribers** page. Previously, these fields contained the unexpected string `—`. *Fix submitted by Eden Duong in pull request [25058](https://github.com/magento/magento2/pull/25058)*. [GitHub-25057](https://github.com/magento/magento2/issues/25057)

<!--- ENGCOM-6148-->
* Corrected alignment of the Newsletter label and associated checkbox on the Admin customer edit page. *Fix submitted by Arvinda Kumar in pull request [25208](https://github.com/magento/magento2/pull/25208)*. [GitHub-25207](https://github.com/magento/magento2/issues/25207)

### Orders

<!--- ENGCOM-5529-->
* The Order list now displays order information in the currency in which the order was placed, not the current base currency of the store. *Fix submitted by Eden Duong in pull request [23817](https://github.com/magento/magento2/pull/23817)*. [GitHub-23805](https://github.com/magento/magento2/issues/23805)

<!--- ENGCOM-5995-->
* You can now open a storefront from **Sales** > **Orders** > **Customer View**. Previously, the Admin froze, and the page never reloaded. *Fix submitted by Adarsh Manickam in pull request [24845](https://github.com/magento/magento2/pull/24845)*. [GitHub-24779](https://github.com/magento/magento2/issues/24779)

<!--- ENGCOM-6036-->
* The checkbox on the Admin **Create New Order** > **Add Products** page now works as expected in Internet Explorer 11.x. This checkbox now behaves the same across all supported browsers. *Fix submitted by Adarsh Manickam in pull request [24913](https://github.com/magento/magento2/pull/24913)*. [GitHub-12855](https://github.com/magento/magento2/issues/12855)

<!--- ENGCOM-6039-->
* Magento now displays the customer middle name in the customer details on orders and in the new order email sent to customers. *Fix submitted by Sergiy Vasiutynskyi in pull request [24746](https://github.com/magento/magento2/pull/24746)*. [GitHub-23627](https://github.com/magento/magento2/issues/23627)

### Payment methods

<!--- ENGCOM-6124-->
* Magento now correctly stores the attribute `url_path` for non-default stores. *Fix submitted by Dmytro Androshchuk in pull request [25143](https://github.com/magento/magento2/pull/25143)*. [GitHub-25120](https://github.com/magento/magento2/issues/25120)

### Reports

<!--- ENGCOM-5832-->
* This newline seems like a cosmetic issue, but it also affects automatic parsing of the log files. *Fix submitted by Mathew Beane in pull request [24559](https://github.com/magento/magento2/pull/24559)*. [GitHub-24588](https://github.com/magento/magento2/issues/24588)

<!--- ENGCOM-6104-->
* Sorting has been disabled on the New Account column of the New Accounts report. *Fix submitted by Eden Duong in pull request [25034](https://github.com/magento/magento2/pull/25034)*. [GitHub-25033](https://github.com/magento/magento2/issues/25033)

### Reviews

<!--- ENGCOM-5737-->
* The **Reset** button now works as expected on the Admin **Marketing** > **All Reviews** > **New Review** page. *Fix submitted by Shankar Konar in pull request [24318](https://github.com/magento/magento2/pull/24318)*. [GitHub-23990](https://github.com/magento/magento2/issues/23990)

### Sales

<!--- ENGCOM-5516-->
* Validation has been added to **Minimum Order Amount** field  on the **Stores** > **Settings** > **Configuration** > **Sales** page. *Fix submitted by kcnariya in pull request [23898](https://github.com/magento/magento2/pull/23898)*. [GitHub-23897](https://github.com/magento/magento2/issues/23897)

### Search

<!--- MC-18165-->
* Quick search now successfully handles search phrases that contain fewer characters than the configured value.  Previously, quick search ignored the search phrase and returned all products when search string length is lower than configured.

<!--- MC-23218-->
* Magento no longer requires a full search reindex in order for a new product attribute to be searchable on the storefront.

<!--- MC-21717-->
* The storefront now displays a newly added product in its assigned category after you run `bin/magento cron:run && bin/magento cron:run`.

<!--- ENGCOM-5597-->
* Searching on categories from the New Product page now works as expected when you enter a search string that does not match an existing category. Previously, Magento displayed incorrect results instead of indicating zero search results. *Fix submitted by Eden Duong in pull request [23698](https://github.com/magento/magento2/pull/23698)*. [GitHub-23697](https://github.com/magento/magento2/issues/23697)

### Shipping

<!--- ENGCOM-5215-->
* The code for offline shipping methods has been optimized to remove redundant carrier codes. *Fix submitted by Alexander Taranovsky in pull request [23144](https://github.com/magento/magento2/pull/23144)*. [GitHub-23143](https://github.com/magento/magento2/issues/23143)

<!--- ENGCOM-5748-->
* VAT ID is now included on the Shipping page of the checkout workflow as expected. *Fix submitted by Eden Duong in pull request [24403](https://github.com/magento/magento2/pull/24403)*. [GitHub-24402](https://github.com/magento/magento2/issues/24402)

<!--- ENGCOM-5993-->
* The Back button on the Check Out with Multiple Addresses page now returns you to the correct page. Previously, clicking the Back button from this page returned a 404 error. *Fix submitted by Max Souza in pull request [24827](https://github.com/magento/magento2/pull/24827)*. [GitHub-24701](https://github.com/magento/magento2/issues/24701)

### Staging

<!--- MC-10974-->
* Merchants can now manage Catalog Rule activity on the  Catalog Rule page using the **Is Active** toggle button.

### Swatches

<!--- ENGCOM-5716-->
* Magento now displays selected swatch options for a configurable product when you edit that product from the shopping cart. *Fix submitted by Rani Priya in pull request [24308](https://github.com/magento/magento2/pull/24308)*. [GitHub-24306](https://github.com/magento/magento2/issues/24306)

### Tax

<!--- ENGCOM-5545-->
* Validation for maximum length has been added to **Zip/Post Code** field of the New Tax Rate page. *Fix submitted by Eden Duong in pull request [23968](https://github.com/magento/magento2/pull/23968)*. [GitHub-23967](https://github.com/magento/magento2/issues/23967)

<!--- ENGCOM-5558-->
* Corrected inconsistent style on the messages displayed when you click the **Validate VAT Number** button on **Stores** > **Configuration** > **General**. *Fix submitted by Eden Duong in pull request [23739](https://github.com/magento/magento2/pull/23739)*. [GitHub-23738](https://github.com/magento/magento2/issues/23738)

<!--- ENGCOM-6004-->
* Magento now correctly calculates VAT for products when you add them to the cart. *Fix submitted by Bruno Roeder in pull request [24737](https://github.com/magento/magento2/pull/24737)*. [GitHub-23116](https://github.com/magento/magento2/issues/23116)

### Translation and locales

<!--- ENGCOM-5972-->
* Serbian Latin language support has been added to this release, and merchants can now distinguish between Latin and Cyrillic Serbian locales. Locales are now identified as Serbian (Cyrillic, Serbia) and Serbian (Latin, Serbia). *Fix submitted by Bartłomiej Szubert in pull request [22293](https://github.com/magento/magento2/pull/22293)*. [GitHub-12256](https://github.com/magento/magento2/issues/12256), [GitHub-13263](https://github.com/magento/magento2/issues/13263)

### UI

<!--- ENGCOM-5536-->
* Media gallery thumbnails are no longer stretched when images have a horizontal ratio. Previously, these images were pixelated on the product page. *Fix submitted by Nick de Kleijn in pull request [23884](https://github.com/magento/magento2/pull/23884)*. [GitHub-23877](https://github.com/magento/magento2/issues/23877)

<!--- ENGCOM-5533-->
* The tax amount in  sales order emails is now displayed before the row that displays the order’s grand total. *Fix submitted by Nazar Klovanych in pull request [23406](https://github.com/magento/magento2/pull/23406)*. [GitHub-21768](https://github.com/magento/magento2/issues/21768)

<!--- ENGCOM-5535-->
* The **Billing ZIP Code** field on the Orders and Returns page now works as expected. Previously, it was not consistently visible. *Fix submitted by Eden Duong in pull request [23747](https://github.com/magento/magento2/pull/23747)*. [GitHub-23746](https://github.com/magento/magento2/issues/23746)

<!--- ENGCOM-5586-->
* A missing header label has been added to the Admin **System** > **Integrations** table. *Fix submitted by Eden Duong in pull request [24097](https://github.com/magento/magento2/pull/24097)*. [GitHub-24096](https://github.com/magento/magento2/issues/24096)

<!--- ENGCOM-5585-->
* The **New Key** field is now marked as a required field with an asterisk when changing an encryption key on the Admin **System** > **Manage Encryption Key** page. *Fix submitted by Eden Duong in pull request [24099](https://github.com/magento/magento2/pull/24099)*. [GitHub-24098](https://github.com/magento/magento2/issues/24098)

<!--- ENGCOM-5782-->
* Corrected misspelling of “tier” (as in “tier price”) throughout the code base. *Fix submitted by Sunil in pull request [24160](https://github.com/magento/magento2/pull/24160)*. [GitHub-23567](https://github.com/magento/magento2/issues/23567)

<!--- ENGCOM-5823-->
* Standardized the confirmation popup invoked from the Admin Add New Tax Rules window. *Fix submitted by Eduard Chitoraga in pull request [24538](https://github.com/magento/magento2/pull/24538)*. [GitHub-24537](https://github.com/magento/magento2/issues/24537)

<!--- ENGCOM-5958-->
* The Suggested Terms drop-down text in the Admin **Marketing** > **SEO & Search** > **Search Terms** are now in camel case. *Fix submitted by Eden Duong in pull request [24741](https://github.com/magento/magento2/pull/24741)*. [GitHub-24739](https://github.com/magento/magento2/issues/24739)

<!--- ENGCOM-6019-->
* Email previews are now fully responsive. *Fix submitted by Brent Robert in pull request [24881](https://github.com/magento/magento2/pull/24881)*. [GitHub-23754](https://github.com/magento/magento2/issues/23754)

<!--- ENGCOM-6012-->
* You can now confirm changes to the structure of the category tree by either clicking the confirmation dialog **OK** button or using the Enter key on your keyboard. Previously, if you used the Enter key to confirm your changes, the UI reflected your change, but your changes were lost when you refreshed the page. *Fix submitted by MaxRomanov4669 in pull request [24817](https://github.com/magento/magento2/pull/24817)*. [GitHub-24452](https://github.com/magento/magento2/issues/24452)

<!--- ENGCOM-6060-->
* Client validation has been added to shipment tracking numbers. *Fix submitted by Eduard Chitoraga in pull request [24818](https://github.com/magento/magento2/pull/24818)*. [GitHub-24745](https://github.com/magento/magento2/issues/24745)

<!--- ENGCOM-6070-->
* Magento now displays checkout steps in the custom order that is set in `uiComponents SortOrder`. *Fix submitted by Anuj Gupta in pull request [25015](https://github.com/magento/magento2/pull/25015)*. [GitHub-24652](https://github.com/magento/magento2/issues/24652)

<!--- ENGCOM-6122-->
* Removed redundant asterix on the  Configure Product page. *Fix submitted by Adarsh Manickam in pull request [25149](https://github.com/magento/magento2/pull/25149)*. [GitHub-25135](https://github.com/magento/magento2/issues/25135)

<!--- ENGCOM-6123-->
* Removed the box shadow that appeared when you clicked on a disabled swatch for a product on the storefront. *Fix submitted by Adarsh Manickam in pull request [25145](https://github.com/magento/magento2/pull/25145)*. [GitHub-25144](https://github.com/magento/magento2/issues/25144)

<!--- ENGCOM-6117-->
* Magento now displays a pointer icon for the cursor when the cursor hovers over the  **Collapse All/Expand All** button on **Catalog** > **Category** > **Content** Select from Gallery option. *Fix submitted by Eden Duong in pull request [25109](https://github.com/magento/magento2/pull/25109)*. [GitHub-25108](https://github.com/magento/magento2/issues/25108)

<!--- ENGCOM-6134-->
* The **Get Video Information** button on the **Product** > **Images and Videos** > **Add Video** now responds as expected. *Fix submitted by Eduard Chitoraga in pull request [25090](https://github.com/magento/magento2/pull/25090)*. [GitHub-25088](https://github.com/magento/magento2/issues/25088)

<!--- ENGCOM-6152-->
* The storefront now reflects height settings for conditions being added to Terms and Conditions (**Store** > **Terms and Conditions** > **Add New Condition**). Previously, you could set a value for height when creating a condition, but the storefront did not apply this setting. *Fix submitted by Rahul Mahto in pull request [25168](https://github.com/magento/magento2/pull/25168)*. [GitHub-25167](https://github.com/magento/magento2/issues/25167)

### URL rewrites

<!--- MC-19706-->
* Magento now populates the `url_rewrite` table with the new product URL rewrite when you create a new product when single-store mode is enabled. Previously, Magento did not generate a user-friendly URL upon the creation of products when single-store mode was enabled.

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-4-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-4-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.4  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
