---
group: release-notes
title: Magento Commerce 2.4.1 Release Notes
---

Magento Commerce 2.4.1 introduces enhancements to performance and security plus significant additions to the B2B feature set. Security enhancements include support for the `SameSite` attribute for cookies and the addition of CAPTCHA protection for payment-related and order-related API endpoints and the Place Order storefront page. B2B improvements focus on the order approval process, B2B shipping methods, expanded logging of Admin actions, and enhanced security on storefront.

This release includes all improvements to core quality that were included in Magento 2.4.0, over 150 new fixes to core code, and over 15 security enhancements. It includes the resolution of almost 300 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in GraphQL.

All known issues identified in Magento 2.4.0 have been fixed in this release.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.4.1 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.4.0-p1) provides. Patch 2.4.0.1 (Composer package 2.4.0-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.4.0. All hot fixes that were applied to the 2.4.0 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.5-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release.

### Substantial security enhancements

This release includes over 15 security fixes and platform security improvements. All security fixes have been backported to Magento 2.4.0-p1 and Magento 2.3.6.

#### Over 15 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See _Security Updates Available for Magento_ for a discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release include:

*  **CAPTCHA** protection has been added to the following product areas:

   *  Place Order storefront page and REST and GraphQL endpoints <!--- MC-36067-->
   *  Payment-related REST and GraphQL endpoints.<!--- MC-36064-->

   CAPTCHA protection for these additional pages is disabled by default. It can be enabled on the Admin in the same way that other pages covered by CAPTCHA are. This protection has been added as an anti-brute force mechanism to protect stores against carding attacks.

*  **Support for the SameSite attribute for cookies**. To support the Google Chrome enforcement of the new cookie classification system, Magento classes that handle cookies have been updated to support the `SameSite` cookie attribute. This attribute is set to `Lax` by default but can be explicitly overridden. <!--- MC-35389-->

*  **Enhanced Magento Scan Tool**. Adobe has partnered with [Sanguine Security](https://sansec.io/), a leader in preventing digital skimming, to integrate their database of over 8700 threat signatures into the Magento Security Scan Tool. This partnership will enable merchants to get real-time insights into the security status of their site through proactive detection of malware and reduction of false positives. Merchants can register for the tool by visiting https://account.magento.com/scanner. For more information, see the [Secure Your Storefront With the Enhanced Magento Security Scan Tool](https://magento.com/blog/magento-news/secure-your-storefront-enhanced-magento-security-scan-tool) blog post.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these functional areas: Customer Account, Catalog, CMS, OMS, Import/Export, Promotions and Targeting, Cart and Checkout, B2B, and Staging and Preview.

*  **Site-Wide Analysis Tool (SWAT) integration with Magento Admin**. (SWAT) provides system insights and instrumentation for Commerce Cloud installations of Magento with 24/7 real-time performance monitoring, reports, and self-service recommendations. Merchants can use the new SWAT Admin role to securely access their SWAT Customer Detail pages through the Magento Admin. For more information, see [SWAT FAQ](https://support.magento.com/hc/en-us/articles/360048646671).<!--- SWAT-807-->

### Performance improvements

*  **Reduction in the size of network transfers between Redis and Magento**. Plugin list configuration is now generated during the execution of the `di:compile` command. This configuration information is written to generated metadata folders based on scope. Previously, this information was stored in cache. Resulting performance improvements include:

   *  Network cache size has decreased by 10 - 15%
   *  Execution time for many scenarios has been improved by 3%<!--- MC-31617-->

*  **Enhanced message queue consumer performance**. Three new configuration settings support a decrease of 20% in consumer queue CPU consumption. These optional parameters provide increased control over consumers and save server resources. See Extension Developer's guide for a description of the `maxIdleTime`, `sleep`, and `onlySpawnWhenMessageAvailable` parameters.

*  **Improved execution time** for `bin/magento` commands.

### Adobe Stock Integration

This release includes Adobe Stock Integration v2.1.0.

### New Media Gallery

The New Media Gallery is now enabled by default in the Admin. Merchants can now perform these actions on images in the Media Gallery:

*  Delete images in bulk
*  Optimize media storage by identifying duplicate images and images that are not used on the storefront
*  Filter images by the storefront area they are used in, including product and category content and CMS blocks
*  Work with image metadata
   *  View metadata from the images uploaded into Media Gallery
   *  Edit image metadata (title, description, and keywords)
   *  Search for images by their metadata

### Page Builder

Page Builder now supports full screen mode, which supports easier editing of content and provides a consistent experience editing content across the Admin. <!--- PB-543-->

### GraphQL

This release adds GraphQL coverage for the following features:

*  **Product reviews**. Customers and guests can write product reviews. Customers can retrieve their product review histories.<!--- MC-32349-->

*  **Gift options**. All customers and guests can add a gift message to their order. On {{site.data.var.ee}}  installations, they can also add gift wrapping, gift receipts, and printed cards to the order.<!--- MC-32345-->

*  **Reward points**. On {{site.data.var.ee}} installations, customers can apply or remove reward points to their carts. They can also view their reward point history.<!--- MC-23366-->

*  **Order history**. All customers can view details about their order histories, including invoices, shipping, and refunds.<!--- MC-20635-->

*  **Add to cart**. Customers can add the following product types to their cart:  Simple, Configurable, Bundled, Grouped, Virtual, Gift Card, and Downloadable. <!--- MC-21513-->

*  **Stored payment methods**. Logged-in customers can now store payment details (including Braintree credit card and Braintree with PayPal) in MyAccount. <!--- MC-32348 35945 35946-->

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on this and other enhancements.

### PWA Studio

PWA Studio v8.0.0 introduces new features and enhancements:

*  Updates to the Venia style guide that apply to design tokens, typography, colors, core components, and page layouts. <!--- PWA-519 419-->

*  Improvements to the Venia mini-cart experience <!--- PWA-236-->

*  Initial support for multiple locales and localized content on the Venia storefront <!--- PWA-295-->

*  Numerous improvements to the MyAccount experience of the Venia storefront <!--- PWA-247-->

See [Magento compatibility](https://magento.github.io/pwa-studio/technologies/magento-compatibility/) for a list of PWA Studio versions and their compatible Magento core versions. For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### B2B

Magento 2.4.1 introduces B2B v1.3.0. This release includes improvements to order approvals, shipping methods, shopping cart, and logging of Admin actions.

#### Improvements to Order Approvals

B2B order approvals have been enhanced to improve usability and to allow for bulk actions on purchase orders.
Improvements to order approval and rejection include the following:

*  **New View Rule page for users without edit privileges**. B2B buyers can now view rules that apply to their company on the new View Rule page when they do not have permission to edit them. <!--- BUNDLE-104 -->

*  **Count alert icon on the Requires My Approval tab**. The Requires My Approval tab in the My Purchase Orders view now displays a counter that indicates the number of pending approval actions. <!--- BUNDLE-102 -->

*  **Bulk order approvals and rejections**. B2B managers and Company Administrators can now perform bulk rejection and approval of purchase orders. These changes allow approvers to approve or reject multiple purchase orders in a single action. <!--- BUNDLE-140 128 111 153 -->

*  Merchants can now search the **Applies to** and **Requires approval from** fields of the My Purchase Orders view and can select multiple user roles during rule creation. <!--- BUNDLE-105 106-->

*  Examples of how to configure Order Approval rules <!--- BUNDLE-103 -->

#### B2B shipping methods enhancements

B2B merchants can now control shipping methods that are offered to each Company. Merchants can configure the following from the Admin:<!--- BUNDLE-160 161 162 -->

*  A specific set of shipping methods for B2B Company accounts
*  The use of All or B2B-specific shipping methods for each Company account
*  A specific list of B2B shipping methods for each Company account

#### Shopping cart improvements

*  Merchants can now allow users to clear the contents of their shopping cart in a single action and can configure this ability independently on each website <!--- BUNDLE-108 -->

*  B2B buyers can now add individual items or the entire contents of their shopping cart directly to a requisition list. <!--- BUNDLE-145 144-->

#### New Admin features

*  B2B merchants can create orders from the Admin on behalf of customers using Payment on Account as the payment method. <!--- BUNDLE-166 178-->

*  Merchants can now directly view all quotes associated with a user from the customer’s detail page. <!--- BUNDLE-139 -->
*  Merchants can now filter the Company Customers table by Company. <!--- BUNDLE-137 -->

*  Admins can now filter customers in the Admin by Sales Rep. <!--- BUNDLE-110 -->

#### Enhanced security on storefront

To reduce creation of fraudulent or spam accounts, merchants can now enable Google reCAPTCHA on the New Company Request form on the storefront. <!--- BUNDLE-154 -->

#### Expanded logging of Admin actions

Admin actions taken in the Company modules are now logged in the Admin Actions Log. Actions are logged from all relevant company modules: `Company`, `NegotiableQuote`, `CompanyCredit`, `SharedCatalog`.  <!--- BUNDLE-180 181 182 183 -->

This release also includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html).

### Magento Functional Testing Framework (MFTF)

MFTF 3.1.0 is now available. See [Magento Functional Testing Framework Changelog](https://github.com/magento/magento2-functional-testing-framework/blob/develop/CHANGELOG.md).

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.1 core code.

### Installation, upgrade, deployment

<!--- MC-36113-->

*  Installation of Magento with third-party extensions that have dependencies on APIs for the Store module in CLI commands no longer fails. Previously, Magento displayed this error message: `The default website isn't defined. Set the website and try again`. This was a known issue in Magento 2.4.0.

<!--- MC-33273-->

*  `bin/magento setup:di:compile` no longer throws a fatal error. Previously, Magento threw an error the first time you ran this command, but the second execution resulted in successful compilation.

<!--- MC-34429-->

*  Upgrade no longer fails when a plugin is declared on `Magento\Framework\Encryption\Encryptor`.

<!--- MC-36231-->

*  Magento now displays an informative error message when some themes are not deployed after running `setup:static-content:deploy`. Previously, when deployment completed successfully but not all packages were deployed, Magento did not display an error. When the  `setup:static-content:deploy` command is executed with enabled parallel processing and each theme requires more time to be deployed then the specified maximum execution time, this command can finish successfully, although themes are not deployed.

<!--- MC-35001-->

*  The **Use default** checkbox for Klarna payments (**Stores** > **Configuration** > **Sales** > **Payment methods** > **Klarna**) now remain checked as expected when website scope changes.

<!--- MC-17959-->

*  Running `/bin/magento config:show vendor_module/general/value` now returns `0` or an empty string as expected. Previously, it returned `Configuration for path: "vendor_module/general/value" doesn't exist`. [GitHub-23290](https://github.com/magento/magento2/issues/23290)

<!--- MC-33788-->

*  Upgrade no longer results in the sudden failure of the Galera cluster. Previously, the Galera cluster exited abruptly after re-indexing immediately after upgrade. During Magento upgrade, index tables are altered and the engine is changed from MEMORY to InnoDB. At this point, the content of these tables becomes out-of-sync between the nodes of the Galera cluster. [GitHub-25334](https://github.com/magento/magento2/issues/25334)

<!--- MC-34254-->

*  Disabling the PageBuilder module no longer affects the rendering of the product page.  Previously, custom layouts on the product page disappeared when the module was disabled, and Magento displayed a blank page.

<!--- ENGCOM-7219-->

<!--- ENGCOM-7459-->

<!--- ENGCOM-7265-->

<!--- ENGCOM-7508-->

<!--- ENGCOM-7800-->

<!--- ENGCOM-7629-->

<!--- ENGCOM-7776-->

<!--- ENGCOM-7853-->

<!--- ENGCOM-7883-->

*  Magento no longer displays the Backup menu when the Backup feature is disabled.

<!--- ENGCOM-8006-->

<!--- ENGCOM-8020-->

*  Attributes are no longer duplicated in the navigation sidebar in deployments where sample data is installed.

<!--- ENGCOM-7987-->

*  Catalog image helper initialization now uses the product model instead of `DataObject`.

<!--- MC-37226-->

Admin users can now save an empty **Customer Token Lifetime (hours)** field (Admin **Stores**  >  **Configurations**  >  **Services**  >  **OAuth**  >  **Access Token Expiration**). [GitHub-29502](https://github.com/magento/magento2/issues/29502)

### AdminGWS

<!--- MC-36164-->

*  Magento no longer displays the **Add Attribute** button (**Stores** > **Attributes** ) or **Add Attribute Set** button (**Stores** > **Attributes** > **Customer** ) when the logged-in administrator lacks the appropriate permissions to create these entities. Previously, Magento threw a 404 error when a website administrator who did not have the appropriate permissions tried to create an **Attribute Set** or **Customer** attribute.

<!--- MC-36230-->

*  Magento no longer throws an error when an administrator with restricted roles for specific websites tries to create a subcategory from the Admin.

### Analytics

<!--- MC-33314-->

*  Administrators with the correct permissions can now access Advanced Reporting and Segment Reports.

<!--- MC-34352-->

*  Magento successfully generates advance reporting data files and sends them as expected to Inventory on deployments with split databases. Previously, Magento did not generate or send the `quotes.csv` file to Inventory, and as a result, Inventory did not generate the expected reports.

### Bundle products

<!--- MC-36281-->

*  Magento no longer throws an exception when you try to create a product in a deployment in which Inventory is installed but the `Magento_InventoryBundleProduct` module is disabled.

<!--- MC-34261-->

*  Magento now correctly calculates offline refunds for orders that contain bundle products.

<!--- MC-24363-->

*  The mini cart now displays the correct prices for bundle products when tier prices are also assigned for simple products. [GitHub-22807](https://github.com/magento/magento2/issues/22807)

<!--- MC-29908-->

<!--- ENGCOM-7499-->

<!--- ENGCOM-7655-->

<!--- ENGCOM-7985-->

### Cache

<!--- MC-36096-->

*  Local cache storage is now retained for the period of time set in **Stores** > **Configuration** > **General** > **Web** > **Default Cookie Settings**. Previously, the expiry date of cookies was hardcoded to one day, which put it out of sync with this setting. As a result, welcome messages did not retain returning customer information for the expected duration.

<!--- ENGCOM-7780-->

<!--- ENGCOM-7073-->

*  Varnish no longer throws a `Connection reset by peer` error when a large catalog is reindexed on schedule.

<!--- ENGCOM-8019-->

<!--- MC-29069-->

*  Full page cache is no longer cleared for unrelated products when a product has been edited in the Admin. [GitHub-25670](https://github.com/magento/magento2/issues/25670)

### Cart and checkout

<!--- MC-36252-->

*  The Products in the Comparison and the Recently Compared Products lists now work as expected. Previously, when the comparison list was expanded, Magento did not display products, even though the section indicated that the list contained products.

<!--- MC-35329-->

*  The **Delete** button on the **Add to Shopping Cart by SKU** section of a customer’s **Manage Shopping Cart** page now works as expected when multiple rows are selected.

<!--- MC-34999-->

*  Magento no longer throws an error when you try to order a product by SKU when the digits you enter match a valid SKU but the case of these digits differ. Previously, when you entered an SKU on **My Account** > **Order by SKU** that did not exactly match a valid SKU, Magento threw an error.

<!--- MC-25042-->

*  A customer’s shipping address is now selected by default at checkout when the address is located in the country identified on the Allow Countries list and that list includes only that country. Previously, Magento did not select the address as default and displayed this error message: `Please specify a regionId in shipping address`.

<!--- MC-24043-->

*  Merchants can now enable **Apply to Shipping Amount** in the Action tab of **Marketing** > **Cart Price Rules** > **Add New Rule** when **Fixed amount discount for whole cart** is applied. [GitHub-24422](https://github.com/magento/magento2/issues/24422)

<!--- MC-23992-->

*  Magento no longer throws an exception when a shopper tries to  unset the persistence cookie after beginning checkout and then navigating to the storefront home page. Previously, when the shopper clicked the **Not you?** link on the home page, Magento threw this exception: The shipping address is missing. Set the address and try again.  [GitHub-24218](https://github.com/magento/magento2/issues/24218)

<!--- MC-33899-->

*  Magento now displays an add-to-cart success message when a customer adds an out-of-stock product to their cart. Previously, the product was added, but Magento did not display a success message.

<!--- MC-35989-->

*  Custom address attributes are now included as expected in the form that displays for the payment step in the checkout workflow.

<!--- MC-36060-->

*  The **State/Province/Region** input box is now enabled as expected on **My account** > **Address Book** > **Add new address**.

<!--- ENGCOM-7746-->

<!--- ENGCOM-7752-->

*  The code that supports closing the mini cart has been refactored to remove the `closeSidebar` function.The appropriate click binding has been added to the `[data-action="close"]` element.

<!--- ENGCOM-7585-->

<!--- ENGCOM-7457-->

*  Validation has been added to the phone field in the checkout workflow.

<!--- ENGCOM-5629-->

<!--- ENGCOM-7949-->

<!--- ENGCOM-7968-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-8019-->

<!--- ENGCOM-7825-->

<!--- ENGCOM-8004-->

<!--- ENGCOM-7950-->

<!--- MC-36418-->

*  Magento now displays a customer registration form when a guest user completes checkout.

<!--- MC-35607-->

### Catalog

<!--- MC-31068-->

<!--- MC-25062-->

*  Deadlocks  no longer occur when the import process executes a bulk insert and the reindex process simultaneously executes a large insert from select. Previously, Magento displayed this error:`PDOException: SQLSTATE[40001]: Serialization failure: 1213 Deadlock found when trying to get lock`. [GitHub-8933](https://github.com/magento/magento2/issues/8933)

<!--- MC-30624-->

*  Magento now sorts bestselling products as expected. Previously, both product count and the pagination of sort results were incorrect. [GitHub-25955](https://github.com/magento/magento2/issues/25955)

<!--- ENGCOM-7292-->

<!--- ENGCOM-7563-->

<!--- ENGCOM-7513-->

<!--- ENGCOM-7420-->

<!--- ENGCOM-7976-->

<!--- MC-34314-->

*  Magento now uses the default option (**Configuration** > **Web** > **Default Layouts** > **Default Product Layout**) that you have selected for the `page_layout` attribute when creating a new product. Previously, your selected default value was not applied.

<!--- MC-34258-->

*  You can now successfully perform mass actions on Inventory product stock. Previously, when you tried to perform a mass action on inventory product stock, Magento displayed a blank page. If you performed this action with Magento in developer mode, Magento threw this error: `Notice: Undefined offset: 32000 in /Users/kodithuw/sites/m23inventory/inventory/InventoryCatalogAdminUi/view/adminhtml/templates/catalog/product/edit/action/inventory.phtml on line 24`

<!--- MC-32552-->

*  The total record count displayed when you click **Add Products** on the Products tab when adding products to a catalog category no longer changes based on product sort order.

### Catalog Rule

<!--- MC-33487-->

*  Magento no longer throws a fatal error when you save a catalog rule with the following conditions: `If ALL of these conditions are FALSE:, If ALL of these conditions are TRUE:, Attribute set is default`

### Cleanup

<!--- ENGCOM-7281-->

*  Corrected misalignment of the Admin Sales Order grid checkbox.

<!--- ENGCOM-7723-->

*  Corrected a misspelling in the shipping address ID getter in the sales order address save handler.

<!--- ENGCOM-7745-->

*  Corrected the `getRegionNameExpresion` method name to `getRegionNameExpression`.

<!--- ENGCOM-7657-->

<!--- ENGCOM-7698-->

<!--- ENGCOM-7753-->

<!--- ENGCOM-7771-->

<!--- ENGCOM-7658-->

*  An incorrect CSS selector in the Shipment page has been corrected.

<!--- ENGCOM-7680-->

<!--- ENGCOM-7925-->

*  The `module:status` command now accepts multiple module names as arguments.

<!--- ENGCOM-7983-->

*  Fixed a typo in the class description of `\Magento\Downloadable\Block\Sales\Order\Email\Items\Downloadable`.

<!--- ENGCOM-7993-->

*  The `TierPriceManagement` class has been refactored to remove redundant code.

<!--- ENGCOM-7830-->

*  `autoload.php` has been refactored to improve readability and return speed.

<!--- ENGCOM-7281-->

<!--- ENGCOM-7723-->

<!--- ENGCOM-7745-->

<!--- ENGCOM-7657-->

<!--- ENGCOM-7698-->

<!--- ENGCOM-7753-->

<!--- ENGCOM-7771-->

<!--- ENGCOM-7658-->

<!--- ENGCOM-7680-->

<!--- ENGCOM-7925-->

<!--- ENGCOM-7983-->

<!--- ENGCOM-7993-->

<!--- ENGCOM-7830-->

### CMS content

<!--- MC-35971-->

*  The Hierarchy tab for a selected default store view now displays the selected parent page as expected.

<!--- ENGCOM-7600-->

<!--- ENGCOM-7602-->

<!--- MC-35480-->

*  Magento now throws an error when a merchant creates a CMS page withte same URL as the Company Structure page. Previously, Magento displayed the CMS page instead of the Company Structure page.

### Configurable products

<!--- ENGCOM-7214-->
<!--- ENGCOM-7787-->
<!--- MC-33523-->

*  Pagination problems with the Configurable Product Edit Current Variations list have been corrected.

<!--- MC-33406-->

*  Magento no longer updates the Related Products price box whenever a shopper selects options for a configurable product. Previously, Magento updated the price box whenever a shopper selected an option for a configurable product.

<!--- MC-29882-->

*  Magento now displays the correct price for configurable products with customizable options on the Admin Create Order page. As expected, the displayed price is a sum of the child product's price and the custom option's price. Previously, Magento displayed only the custom option price. [GitHub-25766](https://github.com/magento/magento2/issues/25766)

<!--- MC-33745-->

*  The order summary now displays the correct discount amount when a cart price rule has been applied. Previously, the rule did not correctly round amounts when calculating shipping discounts.

<!--- MC-33765-->

*  Admin user accounts created from an admin account with a restricted scope can now create a configurable product with attributes as expected. Previously, Magento threw this error: `Notice: Undefined index: value_index in 23develop/app/code/Magento/ConfigurableProduct/Helper/Product/Options/Factory.php on line 101`.

<!--- MC-37255-->

### Cookies

<!--- ENGCOM-7156-->

### cron

<!--- ENGCOM-7863-->

<!--- MC-35884-->

*  Message queue consumer configuration has been extended with new parameters that help control consumers and save server resources and that potentially decrease consumer queue CPU consumption by 20%:

   *  `maxIdleTime` defines the maximum waiting time in seconds for a new message from the queue.
   *  `sleep` specifies time in seconds to sleep before checking if a new message is available in the queue.
   *  `onlySpawnWhenMessageAvailable` identifies whether a consumer should be spawned only when an available message exists in the related queue. This setting is enabled globally by default for all consumers but can be configured per consumer.

### CSS

<!--- ENGCOM-7658-->

<!--- ENGCOM-7678-->

*  Magento no longer duplicates CSS when **Critical CSS** is enabled.

<!--- MC-24981-->

*  The server-side LESS compiler now imports all remote CSS files as expected when you run `bin/magento setup:static-content:deploy -f`. Previously, Magento did not import the remote files and threw an error. [GitHub-25119](https://github.com/magento/magento2/issues/25119)

### Custom customer attributes

<!--- MC-36387-->

*  Corrected alignment issues for the explanatory text about passwords and the **Job Title** field on the Customer Edit Account Information page.

<!--- MC-33645-->

*  Captcha now works as expected when a new customer clicks the **Create an Account** button on the storefront customer registration page. Previously, Magento did not create the customer account and displayed am error when the customer clicked the button.

<!--- MC-34024-->

*  The checkout workflow no longer displays custom customer address attribute values when the customer has not entered any data.

### Customer

<!--- MC-33679-->

*  The region names in Admin customer addresses are now translated as expected.

<!--- ENGCOM-7793-->
<!--- MC-36226-->

*  The **State/Province** fields are now populated as expected on the Edit Address page (**My Account** > **Address book**).

<!--- MC-34655-->

*  Magento no longer throws an error when a customer clicks the **Submit** button multiple times on forms throughout the storefront for which invisible reCAPTCHA has been enabled. Previously, clicking this button multiple times resulted in an internal error similar to this: `Internal error: Make sure you are using reCaptcha V3 api keys`.

<!--- MC-33522-->

*  Saving a deleted customer from the Admin now generates an error message only. Previously, Magenta displayed a blank page and generated a report that contains this string: "0":"No such entity with customerId = 3","1":"#1 Magento\\Customer\\Model CustomerRegistry->retrieve() called at [app\/code\/Magento\/Customer\/Model\/ResourceModel\/CustomerRepository.php:340".

<!--- MC-33357-->

*  Magento now displays an error message as expected when an administrator tries to save an address for a customer whose account has just been deleted. Previously, Magento displayed a blank message box.

<!--- MC-33150-->

*  The labels for address fields in the checkout workflow and the address book have been edited for consistency.

### Customer segment

<!--- MC-33184-->

*  Bulk operations have been refactored to save and refresh  customer segments asynchronously, which has improved the performance of these tasks for deployments that include many customers (greater than 3,000,000).

<!--- MC-36224-->

*  Customer segment conditions now work as expected in a split-database deployment. Previously, Magento threw an error when you tried to edit a customer segment by adding a condition: `SQLSTATE[42S02]: Base table or view not found`

### Directory

<!--- MC-32271-->

*  The format of the State/Province drop-down menu is now consistent across the Admin.

### Downloadable

<!--- MC-29905-->

<!--- MC-35026-->

*  The My Downloadable Products area now displays links to purchased downloadable products that are part of a grouped product as expected.

<!--- MC-34262-->

*  Clicking on a downloadable product's **Sample** button from the Admin product page now downloads a sample as expected. Previously, when you clicked **Sample**, Magento displayed this error: `The product that was requested doesn't exist. Verify the product and try again`.

<!--- ENGCOM-7757-->

<!--- ENGCOM-7796-->

### Dynamic block (formerly banner)

<!--- MC-33266-->

*  Table title now matches the data table (as expected) when you create a dynamic block and add a related catalog price rule.

<!--- MC-33286-->

### Email

<!--- MC-32789-->

*  Magento now sends email notifications about order changes to the correct customer email if the customer email was changed after the order was created.

<!--- MC-36015-->

*  Order update emails that are sent to customers now include the correct order status. Previously, if an order status changed from `processing` to another state, the order email did not reflect the status change.

<!--- MC-34107-->

*  Magento no longer displays misleading messages about existing accounts during guest checkout. Previously, when a guest navigated to the checkout page, then navigated back to the shipping page, Magento displayed this error: `You already have an account with us. Sign in or continue as guest`.

<!--- MC-33905-->

*  Custom email templates now load the same elements as native default email templates. Previously, some elements, including variable values, were missing.

<!--- MC-33700-->

*  You can now create an email template that sends email with  `Content-Type: "text/plain”`.  Previously,  Magento ignored the content type specified in the template.

<!--- ENGCOM-7576-->

<!--- ENGCOM-7177-->

<!--- ENGCOM-7506-->

<!--- ENGCOM-7815-->

<!--- MC-33232-->

*  Notification emails that are sent to sales representatives assigned to a company now include the assigned corporate logo. Previously, the notification email included the default LUMA logo, not the uploaded corporate logo email.

### Frameworks

<!--- MC-35893-->

*  The **Time of day to send data** field of the Admin **Stores** > **Configuration** > GENERAL > **Advanced Reporting** page is now rendered correctly.

<!--- MC-34153-->

*  Shoppers can now change the number of orders that are displayed per page when the Orders list spans multiple pages. Previously, Magento displayed this message when you navigated to the last page of orders and tried to change the number of orders displayed per page: `You have placed no orders`. This was a known issue for Magento 2.4.0.

<!--- MC-35020-->

*  You can now add products to a category when implementing Level 2 cache.

<!--- MC-29755-->

*  `X-Magento-Tags` headers no longer exceed the size permitted by the HTTP specification. Previously, category pages that contain many products returned an `X-Magento-Tag` header that resulted in a 503 error.

<!--- MC-34257-->

*  `sales_order_shipment_track_save_commit_after` is now triggered as expected when you use REST to create a shipment.

<!--- MC-33898-->

*  Magento now displays an informative error message when a `di compile` fails due to a nonexistent dependency. Previously, the message displayed did not identify the class in which the exception occurred.

<!--- MC-32929-->

*  Magento no longer throws the following fatal error when Redis uses all allowed memory: `report.CRITICAL: OOM command not allowed when used memory > 'maxmemory'.`

<!--- MC-18021-->

*  Shoppers can now add multiple products to their cart when the `Persistent` module is disabled. [GitHub-14486](https://github.com/magento/magento2/issues/14486)

### General fixes

<!--- MC-36048-->

*  Sorting products on the Admin (**Stores** > **Attributes** > **Products**) now displays all products that meet your search criteria. Previously, Magento did not display records, and to sort the records, you needed to navigate to the first page of search results.

<!--- MC-36343-->

*  Unnecessary quotation marks and escaping around a URL in `tracking.phtml` have been removed.

<!--- MC-35998-->

*  The `var/log/system.log` now displays a more accurate message when a user tries to access a non-existing resource file under the static directory when SCD OnDemand and production mode are enabled. Magento now logs a 404 error. Previously, Magento logged the same message that is logged when the error occurs in developer mode.

<!--- ENGCOM-7286-->

<!--- ENGCOM-7532-->

<!--- ENGCOM-7577-->

<!--- ENGCOM-7591-->

<!--- ENGCOM-7447-->

<!--- ENGCOM-7299-->

<!--- ENGCOM-7193-->

<!--- ENGCOM-7610-->

<!--- ENGCOM-7565-->

<!--- ENGCOM-7682-->

<!--- ENGCOM-7514-->

<!--- ENGCOM-7588-->

<!--- MC-33744-->

*  Magento no longer displays a CMS page more than once in the site hierarchy if the page is assigned to multiple store views.

<!--- ENGCOM-7511-->

<!--- ENGCOM-7462-->

<!--- ENGCOM-7729-->

<!--- ENGCOM-7810-->

<!--- ENGCOM-7801-->

<!--- ENGCOM-7816-->

<!--- ENGCOM-7724-->

<!--- ENGCOM-7844-->

<!--- ENGCOM-7834-->

<!--- ENGCOM-7854-->

<!--- ENGCOM-7826-->

<!--- ENGCOM-7147-->

<!--- ENGCOM-7868-->

<!--- ENGCOM-7867-->

<!--- ENGCOM-7881-->

<!--- ENGCOM-7857-->

<!--- ENGCOM-7856-->

<!--- ENGCOM-7999-->

*  RSS feed now loads correctly. Previously, the feed did not load the first time, although I loaded as expected when the page was refreshed.

<!--- ENGCOM-7962-->

<!--- MC-35550-->

*  An expired persistent session is now renewed as expected when the shopper logs back in.

<!--- MC-35230-->

*  Password lifetime as set in **Stores** > **Configuration** > **Advanced** > **Admin** is now honored. Previously, if you clicked **Forgot password?** when prompted to reset your password, you could bypass the password reset.

<!--- MC-34369-->

*  Coupon codes are now applied only to the specified product. Previously, Magento applied the coupon code to all products in the cart. [GitHub-28246](https://github.com/magento/magento2/issues/28246)

### Gift cards

<!--- ENGCOM-7661-->

<!--- MC-36118-->

*  Gift Card Accounts now capture order numbers as expected. Previously, the **More information** field in the History tab for the selected gift account did not display order IDs.

<!--- MC-34519-->

*  Using a comma as a decimal separator now works as expected. Previously, the comma separator ignored decimal values.

<!--- MC-34469-->

*  Gift cards are now displayed as expected in the mini cart. Previously, Magento rendered HTML objects as text.

<!--- MC-33851-->

*  Credit memos now correctly reflect the grand total for orders that involved discounted products and that were paid for by a combination of git card and store credit.

### Google Tag Manager

<!--- MC-33729-->

*  Magento no longer throws a JavaScript error during checkout when the **Cookie Restriction Mode** setting and Google Tag Manager are enabled.

### GraphQL

<!--- MC-34485-->

<!--- MC-32949-->

<!--- MC-31084-->

<!--- MC-36646-->

<!--- MC-34187-->

<!--- ENGCOM-7662-->

<!--- ENGCOM-7559-->

<!--- ENGCOM-7638-->

<!--- ENGCOM-7663-->

<!--- ENGCOM-7512-->

<!--- ENGCOM-7743-->

<!--- ENGCOM-7743-->

<!--- ENGCOM-7559-->

<!--- ENGCOM-7707-->

<!--- ENGCOM-7751-->

<!--- ENGCOM-7750-->

<!--- ENGCOM-7216-->

<!--- ENGCOM-7216-->

<!--- ENGCOM-7732-->

<!--- ENGCOM-7733-->

<!--- ENGCOM-7821-->

<!--- ENGCOM-7838-->

<!--- ENGCOM-7839-->

<!--- ENGCOM-7841-->

### Images

<!--- ENGCOM-7691-->

*  HTML markup for thumbnail images has been improved.

### Import/export

<!--- MC-35479-->

*  The `error_report.csv` file now downloads with content and is available inside the `var/import_history/` directory as expected. Previously, this file was not generated after import.

<!--- ENGCOM-7616-->

<!--- ENGCOM-7673-->

<!--- ENGCOM-7995-->

<!--- MC-33730-->

*  Magento now successfully imports customer addresses that contain a region for a country that does not have defined regions. Previously, Magento threw this error: `Please enter a valid region`.

<!--- MC-33277-->

*  Magento now loads the correct Entity Attributes set when a merchant selects an Entity Type when scheduling a new export.

<!--- MC-32956-->

*  The position of products in the `catalog_category_product` table now update as expected when an administrator creates a product in the Admin and assigns it to a category. Previously, the position of new products was always assigned a 0 value.

<!--- MC-34939-->

*  Customer data is now successfully exported from the Admin, and the export data grid displays customer data as expected. Previously, an error related to memory allocation occurred during export.

<!--- MC-34657-->

*  Imported `.cvs` files now capture related product information as expected. Previously, related product information was not consistently uploaded the first time the `.cvs` file was imported.

<!--- MC-37424-->

*  Removed unused construct parameters in `AdvancedPricing.php`. [GitHub-29531](https://github.com/magento/magento2/issues/29531)

### Index

<!--- ENGCOM-7776-->

<!--- ENGCOM-7073-->

*  Magento_CacheInvalidate now handles large tag patterns correctly when doing a `PURGE`. `sendPurgeRequest` has been refactored to handle an array of tags instead of requiring the caller to use `implode()`.

<!--- MC-30568-->

*  Shared indexers now show a status of **valid** after you run `bin/magento indexer:status` after re-indexing. Previously, shared indexers had an **invalid** status after a full re-index.

### Infrastructure

<!--- MC-37243-->

*  Problems loading catalog and product pages on deployments running PHP 7.4.9 no longer occur. Previously, Magento threw this error when you tried to load the catalog and product pages: `There has been an error processing your request. Exception printing is disabled by default for security reasons`. [GitHub-29502](https://github.com/magento/magento2/issues/29502)

<!--- ENGCOM-7994-->

*  All exceptions that occur when layouts are rendered in production mode are now logged in the exception log file (`var/report`). Previously, Magento logged these messages in the system log as critical issues.

<!--- ENGCOM-7154-->

<!--- ENGCOM-7483-->

<!--- ENGCOM-7651-->

<!--- ENGCOM-7484-->

<!--- ENGCOM-7817-->

<!--- ENGCOM-7778-->

<!--- ENGCOM-7713-->

<!--- ENGCOM-7523-->

<!--- ENGCOM-7756-->

<!--- ENGCOM-7820-->

<!--- ENGCOM-7790-->

<!--- ENGCOM-7758-->

<!--- ENGCOM-7781-->

*  `NonComposerComponentRegistration.php` has been refactored.

<!--- ENGCOM-7926-->

*  `ResourceConnection.php` has been refactored to improve class readability.

<!--- ENGCOM-7910-->

*  The README file for the build-in web server has been updated to include all Elasticsearch parameters.

<!--- ENGCOM-7814-->

<!--- ENGCOM-7566-->

<!--- ENGCOM-7906-->

<!--- ENGCOM-8000-->

<!--- ENGCOM-7994-->

### Inventory

<!--- ENGCOM-7979-->

<!--- MC-34701-->

### Layered navigation

<!--- MC-25043-->

*  The layered navigation sidebar now shows Boolean attributes with both options (**yes**/**no**) and matching product counts. Previously, layered navigation did not return a **no** option for Boolean attributes in deployments using Elasticsearch.

<!--- ENGCOM-7493-->

### Logging

<!--- ENGCOM-7692-->

### Media Gallery

<!--- ENGCOM-8014-->

### MFTF

<!--- ENGCOM-7529-->

<!--- ENGCOM-7590-->

<!--- ENGCOM-7343-->

<!--- ENGCOM-7635-->

<!--- ENGCOM-7972-->

<!--- ENGCOM-7972-->

<!--- ENGCOM-7963-->

<!--- ENGCOM-7964-->

<!--- ENGCOM-7928-->

<!--- ENGCOM-7915-->

<!--- ENGCOM-7991-->

### Newsletter

<!--- MC-34714-->

*  Exporting the Newsletter Subscribers list using the `EXCEL XML`  option now results in the export of all rows as expected. Previously, exported data included only the page pagination value, not all rows.

<!--- ENGCOM-7522-->

<!--- ENGCOM-7788-->

<!--- ENGCOM-7739-->

### Orders

<!--- ENGCOM-7858-->

<!--- ENGCOM-7885-->

<!--- ENGCOM-7798-->

*  The order status for a credit memo with zero total is now `Closed`. Previously, Magento report its order status as `Complete`.

### Page Builder

<!--- ENGCOM-7918-->

### Payment methods

<!--- MC-34363-->

*  Magento now displays a message that prompts you to enter mandatory credit card data when you click **Submit** for an Admin order without entering valid payment information. Previously, the Braintree card validator did not throw an error when payment input fields were invalid and the page became inactive.

<!--- MC-33494-->

*  You can now change the shipping method for an order you create from the Admin for a customer whose account has a stored credit card (Braintree). Previously, when you selected a different shipping method, the stored card was not selected, and Magento did not place the order.

#### PayPal

<!--- MC-33879-->

*  The Order Review page of the checkout workflow now displays the correct shipping amount for PayPal through Braintree orders for which the shipping method has been changed during checkout. Previously, when a customer changed the shipping method on the PayPal Order Review page of the checkout workflow, Magento did not update the order total with the correct method.

<!--- MC-34152-->

*  Merchants can now successfully cancel orders that were authorized using PayPal. Previously, Magento did not cancel the order and displayed this error:  `Declined: 10601-Authorization has expired`.

<!--- MC-33330-->

*  Magento no longer empties your cart when you cancel an order by closing the PayPal payment popup window after first completing another order.

### Performance

<!--- MC-31617-->

*  Plugin list configuration is now generated during the execution of the `di:compile` command. This configuration information is written to generated metadata folders based on scope. Previously, this information was stored in cache. Resulting performance improvements include:

   *  Network cache size has decreased by 10 - 15%
   *  Execution time for many scenarios has been improved by 3%.

<!--- ENGCOM-7290-->

<!--- MC-33107-->

*  The performance of checkout with multiple simultaneous orders has been improved.

### Return Merchandise Authorizations (RMA)

<!--- MC-35984-->

*  The Returns page now works as expected after you create a shipping label for a Return Merchandise Authorization (RMA). Previously, merchants could not interact with any page elements on the Returns page after creating a shipping label for an RMA. This was a known issue for 2.4.0, and MC-35984-2.4.0-CE-composer.patch addressed this issue for Magento 2.4.0.

<!--- MC-35826-->

*  Magento now displays either an informative error message or all available products when an administrator with restricted permissions tries to create a return for products that are no longer in the assigned website scope. Previously, Magento displayed a blank page.

### Reviews

<!--- MC-33405-->

*  A unique key for `entity_pk_value-entity_type-store_id` has been added to the `review_entity_summary` table, which prevents the creation of duplicate rows for the same product ID (`entity_pk_value`). Previously, this lack of unique key resulted in duplicate rows for the same product ID and SQL errors.

### Sales

<!--- MC-35675-->

*  Magento no longer assigns a status of Complete after invoicing to an order that requires zero payment.

<!--- MC-35888-->

*  The New Shipment email generated by the REST API now contains the same shipping and customer information as shipments that are created manually from the Admin. Previously, this email did not contain the customer name, tracking information, products ordered, and other order information.

<!--- MC-35837-->

*  Guest user names are now visible as expected in invoice- and shipment-related emails when the emails are loaded or customized from the Admin.

<!--- MC-35707-->

*  The PDF invoice is now translated into the language of the store view where the order has been placed. Previously, the PDF invoice was translated in the language of the Admin.

<!--- MC-35858-->

*  You can now issue a refund as expected from the credit memo page. [GitHub-29014](https://github.com/magento/magento2/issues/29014)

<!--- MC-35353-->

*  Localised region names that are displayed on the storefront Order page are now correctly translated. Previously, the region name was not based on the specified locale unless it was edited in the Admin.

<!--- MC-35633-->

*  Shipments created through the POST `/rest/V1/shipment` endpoint now update orders properly. Previously,  Magento created a shipment, but shipment status remained in the processing state.

### Search

<!--- MC-31304-->

*  You can now search for products by attribute from the Admin Customer view using QuickSearch. Previously, an exception occurred on the catalog search result page.

<!--- MC-32518-->

*  Magento now displays configurable products on the category page as expected after you add a product attribute.

<!--- MC-33952-->

*  Elasticsearch results now include the correct values for each store view’s attribute options. If a Dropdown or Multiple Select attribute has a different option value in the non-default store view than in the default store view, Elasticsearch now indexes that value or returns the product with that value in the results. Previously, Elasticsearch did not index that value or return the product with that value in the results.

<!--- MC-35013-->

*  Searching by SKU now works as expected in advanced search with Elasticsearch 6. Previously, when you tried to search by SKU, Magento displayed this error message: `We can't find any items matching these search criteria. Modify your search`.

<!--- ENGCOM-7222-->

<!--- ENGCOM-7917-->

*  Scope values are now reset as expected on the New Synonym Group form.

### Shipping

<!--- MC-35955-->

*  Customers can now successfully remove reward points on the order review page of the checkout workflow when checking out with multiple addresses. Previously, Magento threw a `404 Not Found` error when a customer clicked the **Remove** button to remove points for any address. This was a known issue in Magento 2.4.0.

<!--- MC-33737-->

*  Magento now displays shipping rates in the correct currency in the checkout workflow for orders specifying FedEx as the shipping method.

<!--- MC-33267-->

*  Multi-page PDFs of shipping labels for orders shipped by UPS now display the correct count.

<!--- MC-35514-->

*  Problems with the JavaScript components of the Create Packages page have been resolved. Previously, Magento did not display the **Create Shipping Label** checkbox on this page, and you could not create a shipping label for an existing order.

### Sitemap

<!--- ENGCOM-7924-->

*  The sitemap in `robots.txt` is now store-specific.

<!--- MC-34617-->

*  Encoded values are now correctly escaped in the `sitemap.xml` file. Previously, when you included encoded characters in a product name or image title, the generated sitemap was invalid.

### Staging

<!--- MC-36458-->

*  The **Set Product as New** attribute label now appears as expected on a product’s detail and scheduled update pages.

<!--- MC-34484-->

*  You can now successfully preview the staging schedule for a CMS block. Previously, Magento threw a fatal error.

<!--- MC-33789-->

*  You can now access the CMS Preview page when editing a CMS page with a scheduled update and re-assigning it from the default store to another store. Previously, Magento threw a 404 error when you clicked on the preview link.

<!--- MC-33572-->

*  You can now use POST `/V1/products/special-price` to update a product’s special price without specifying `price_from` and `price_to` parameter values. Previously, the Special Price API only worked with schedule updates, and if these parameters were empty, Magento returned this error: `The Start Time for Future Update needs to be selected. Select and try again`.

### Store

<!--- MC-35853-->

*  Deleting a previously created store view no longer results in an error in deployments with a split database configuration. Previously, Magento threw an exception.

<!--- MC-32634-->

*  You can now export `config.php` and default website code from one website to install and configure Magento on a second website in a multi website deployment. Previously, the default store and view disappeared after the export, and errors occurred on the storefront.

### Swagger

<!--- ENGCOM-7720-->

### Swatches

<!--- ENGCOM-7845-->

<!--- MC-33147-->

*  Magento now displays tier prices as expected for configurable product variations.

### Tax

<!--- MC-36049-->

*  Magento no longer displays a fixed product tax attribute on the storefront for a product after a merchant has unassigned it from the product’s attribute set.

### Test

<!--- ENGCOM-7593-->

<!--- ENGCOM-7887-->

<!--- ENGCOM-7874-->

*  PHPUnit 9 errors have been fixed in unit tests.

<!--- ENGCOM-7886-->

<!--- ENGCOM-8003-->

*  `SynchronizeFilesInterface` is now covered by integration tests.

<!--- ENGCOM-7142-->

<!--- ENGCOM-7142-->

<!--- ENGCOM-8009-->

### Theme

<!--- MC-34397-->

*  Themes that are added in User Agent Rules are now affected as expected when you run `bin/magento catalog:images:resize`. Previously, only themes that were assigned to stores were affected when `bin/magento catalog:images:resize` was run.

### UI

<!--- MC-36260-->

*  Fixed misalignment of the cursor in the Invoice Comments text area of the invoice associated with an order you have selected from Admin **Sales** > **Orders**.

<!--- MC-36044-->

*  The Create New Order page now displays **Add Products By SKU** and **Add Products** buttons as expected.

<!--- MC-35974-->

*  Magento now displays the Edit Review page properly when a Product Rating is available for the selected product.

<!--- MC-35475-->

*  Magento now correctly displays the Admin customer edit page on an iPhone running Safari.

<!--- MC-35370-->

*  Corrected unnecessary scrolling on the Create New Order page.

<!--- MC-35345-->

*  Directly clicking on the **Export Tax Rates** button of the Add New Tax Rule page ( **Stores**  >  **Tax Rules**) now downloads the `tax_rates.csv` file as expected. Previously, merchants had to click on the edge of the **Export Tax Rates** button. This was a known issue in Magento 2.4.0.

<!--- MC-35313-->

*  The **Add selections to my cart** button on the bottom of the shopping cart now works as expected. This was a known issue in Magento 2.4.0.

<!--- MC-35296-->

*  The **Refresh** button of the **Recently Viewed Products** section of the Customer's Activities page now works as expected. Previously, when you clicked **Refresh**, the product list was not refreshed, and the page scrolled.

<!--- MC-35412-->

*  Magento now correctly displays the calendar icon used for selecting a customer’s date of birth on the Conditions tab of **Customers** > **Segments** > **Add Segment**.

<!--- MC-35658-->

*  The checkout summary section of the checkout workflow no longer flickers when the customer scrolls through this page on Internet Explorer 11.x.

<!--- MC-34602-->

*  Magento now correctly displays the Order by SKU widget on the storefront Category page. Previously, the HTML code for this widget was not rendered, and Magento did not display the **Load a list of SKUs** link.

<!--- MC-37444-->

*  UI components that have been disabled using `this.disabled(true)` no longer appear on the storefront. [GitHub-29098](https://github.com/magento/magento2/issues/29098)

<!--- ENGCOM-7264-->

<!--- ENGCOM-7575-->

<!--- ENGCOM-7507-->

<!--- ENGCOM-7578-->

<!--- ENGCOM-7579-->

<!--- ENGCOM-7579-->

<!--- ENGCOM-7456-->

<!--- ENGCOM-7285-->

<!--- ENGCOM-7631-->

<!--- ENGCOM-7010-->

<!--- ENGCOM-7244-->

<!--- ENGCOM-7770-->

<!--- ENGCOM-7619-->

<!--- ENGCOM-7873-->

<!--- ENGCOM-7639-->

<!--- ENGCOM-7156-->

<!--- ENGCOM-7981-->

<!--- ENGCOM-7911-->

<!--- ENGCOM-8007-->

<!--- ENGCOM-7992-->

<!--- ENGCOM-7967-->

*  The title of the order failure page has been rewritten for accuracy. Previously, when a shopper canceled an order,  Magento displayed a page with this title: We received your order!.

<!--- ENGCOM-8015-->

### TargetRule

<!--- MC-36162-->

### Translation and locales

<!--- MC-20372-->

*  Magento no longer throws an error when an administrator changes the **Date** field during Admin product creation or save when the Admin locale is Chinese or Japanese. [GitHub-24696](https://github.com/magento/magento2/issues/24696)

<!--- ENGCOM-7536-->

<!--- ENGCOM-7535-->

<!--- ENGCOM-7521-->

### URL rewrites

<!--- MC-34483-->

*  You can now successfully preview the staging schedule for a CMS block. Previously, Magento threw a fatal error.

<!--- MC-33028-->

*  Magento now preserves existing catalog URL rewrites as expected when a store view is assigned to a different store. Previously, Magento deleted the store-specific URL rewrites.

### Varnish

<!--- ENGCOM-7761-->

### Vault

<!--- MC-34674-->

*  Magento no longer saves credit card numbers when the **Save for later use** checkbox on the payment section of the checkout workflow is not selected.

### Visual Merchandiser

<!--- MC-35574-->

*  Magento now displays source stock instead of the default product stock when you sort products in Visual Merchandiser and Inventory is enabled.

### Web API framework

<!--- ENGCOM-7618-->

<!--- ENGCOM-7709-->

<!--- ENGCOM-7665-->

<!--- ENGCOM-7612-->

<!--- ENGCOM-7785-->

<!--- ENGCOM-7715-->

<!--- ENGCOM-7829-->

<!--- ENGCOM-7611-->

<!--- MC-36084-->

*  Invoices created using REST now include gift card information similar to the invoices that are created in the Admin. Previously, using POST `\{host}/rest/default/V1/order/3/invoice` to invoice the order did not display the gift card code or gift card amount applied.

<!--- MC-35838-->

*  Merchants with multiple websites can now use the REST API to create and update products while preserving  image and image-role inheritance. Previously, when a merchant used the REST API to create and update products, and a product was updated for store view, the default image roles were loaded and saved for that store view. As a result, the store-view image roles stopped inheriting from the default scope after update.

<!--- MC-36419-->

*  An unscoped integration user account can now access a resource through the REST API when resource permissions allow access.

<!--- MC-35975-->

*  Search criteria filters now work as expected for product attributes that are used during the creation of a configurable product. [GitHub-29126](https://github.com/magento/magento2/issues/29126)

### Website restrictions

<!--- MC-32366-->

*  Enabling website restriction no longer blocks Varnish ESI requests for customers logged in as guest. Previously, these guests could not access the home page main menu.

<!--- MC-32369-->

*  Magento now loads the product home page as expected when website restrictions are enabled.

### Wish list

<!--- MC-35810-->

*  You can now use the wish list search feature to find a product in a public wish list in deployments where support for multiple wish lists is enabled. Previously, after a customer used the wish list search to find a product, selecting it, and clicking **Add to cart**, Magento did not add the product to the cart and displayed this error: `Invalid Form Key. Please refresh the page`.

<!--- MC-35622-->

*  Customers can now change the quantity of a product in a wish list from the wish list itself. Previously, Magento did not update the product quantity and did not display a message.

<!--- MC-35618-->

*  Customers can now change the quantity of a grouped product in a wish list from the wish list itself. Previously, Magento did not update the product quantity or display a message.

<!--- MC-34408-->

*  The storefront Category page now displays the Wish List search widget as expected.

<!--- ENGCOM-7580-->

<!--- ENGCOM-7561-->

<!--- ENGCOM-7660-->

<!--- ENGCOM-7674-->

<!--- ENGCOM-7675-->

<!--- ENGCOM-7564-->

<!--- ENGCOM-7717-->

<!--- MC-36250-->

*  Administrators can now configure a configurable product that has been added by a customer to a wish list from a non-default store. Previously, when the customer had also added the configurable product from a non-default store, Magento threw an error.

### WYSIWYG

<!--- ENGCOM-7559-->

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-1-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-4-1-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.4.1 using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
