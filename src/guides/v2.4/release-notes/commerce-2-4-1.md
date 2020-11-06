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

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security Updates Available for Magento](https://helpx.adobe.com/security/products/magento/apsb20-59.html) for a discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release include:

*  **CAPTCHA** protection has been added to the following product areas:

   *  Place Order storefront page and REST and GraphQL endpoints <!--- MC-36067-->
   *  Payment-related REST and GraphQL endpoints.<!--- MC-36064-->

   CAPTCHA protection for these additional pages is disabled by default. It can be enabled on the Admin in the same way that other pages covered by CAPTCHA are. This protection has been added as an anti-brute force mechanism to protect stores against carding attacks. See [CAPTCHA](https://docs.magento.com/user-guide/stores/security-captcha.html).

*  **Support for the SameSite attribute for cookies**. To support the Google Chrome enforcement of the new cookie classification system, Magento classes that handle cookies have been updated to support the `SameSite` cookie attribute. This attribute is set to `Lax` by default but can be explicitly overridden. <!--- MC-35389-->

*  **Enhanced Magento Scan Tool**. Adobe has partnered with [Sanguine Security](https://sansec.io/), a leader in preventing digital skimming, to integrate their database of over 8700 threat signatures into the Magento Security Scan Tool. This partnership will enable merchants to get real-time insights into the security status of their site through proactive detection of malware and reduction of false positives. Merchants can register for the tool by visiting `https://account.magento.com/scanner`. For more information, see the [Secure Your Storefront With the Enhanced Magento Security Scan Tool](https://magento.com/blog/magento-news/secure-your-storefront-enhanced-magento-security-scan-tool) blog post.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these functional areas: Customer Account, Catalog, CMS, OMS, Import/Export, Promotions and Targeting, Cart and Checkout, B2B, and Staging and Preview.

*  **Site-Wide Analysis Tool (SWAT) integration with Magento Admin**. (SWAT) provides system insights and instrumentation for {{ site.data.var.ece }} installations of Magento with 24/7 real-time performance monitoring, reports, and self-service recommendations. Merchants can use the new SWAT Admin role to securely access their SWAT Customer Detail pages through the Magento Admin. See [SWAT FAQ](https://support.magento.com/hc/en-us/articles/360048646671) for an overview. For usage information, see [SWAT](https://docs.magento.com/user-guide/reports/site-wide-analysis-tool.html). <!--- SWAT-807-->

### Performance improvements

*  **Reduction in the size of network transfers between Redis and Magento**. Plugin list configuration is now generated during the execution of the `bin/magento di:compile` command. This configuration information is written to generated metadata folders based on scope. Previously, this information was stored in cache. Resulting performance improvements include a decrease in network cache size and execution time for many scenarios.<!--- MC-31617-->

*  **Enhanced message queue consumer performance**. Three new configuration settings support a decrease in consumer queue CPU consumption. These optional parameters provide increased control over consumers and save server resources. See [Configure message queues]({{page.baseurl}}/extension-dev-guide/message-queues/config-mq.html) for a description of the `maxIdleTime`, `sleep`, and `onlySpawnWhenMessageAvailable` parameters.

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

Page Builder now supports full screen mode, which supports easier editing of content and provides a consistent experience editing content across the Admin. See [Workspace](https://docs.magento.com/user-guide/cms/page-builder-workspace.html). <!--- PB-543-->

### GraphQL

This release adds GraphQL coverage for the following features:

*  **Product reviews**. Customers and guests can write product reviews. Customers can retrieve their product review histories. See [Create a product review]({{page.baseurl}}/graphql/mutations/create-product-review.html) and [productReviewRatingsMetadata query]({{page.baseurl}}/graphql/queries/product-review-ratings-metadata.html) for information on retrieving information about the reviews infrastructure.<!--- MC-32349-->

*  **Gift options**. All customers and guests can add a gift message to their order. On {{site.data.var.ee}} installations, they can also add gift wrapping, gift receipts, and printed cards to the order. See [`setGiftOptionsOnCart` mutation]({{page.baseurl}}/graphql/mutations/set-gift-options.html) and [`updateCartItems` mutation]({{page.baseurl}}/graphql/mutations/update-cart-items.html) <!--- MC-32345-->

*  **Reward points**. Customers can apply or remove reward points to their carts. They can also view their reward point history. See [`applyRewardPointsToCart`]({{page.baseurl}}/graphql/mutations/apply-reward-points.html) and [`removeRewardPointsFromCart`]({{page.baseurl}}/graphql/mutations/remove-reward-points.html) for a discussion of managing reward points within a cart.<!--- MC-23366-->

*  **Order history**. All customers can view details about their order histories, including invoices, shipping, and refunds.<!--- MC-20635-->

*  **Add to cart**. The [`addProductsToCart` mutation]({{page.baseurl}}/graphql/mutations/add-products-to-cart.html) allows you to add any type of product to the active cart. We recommend using this mutation instead of single-purpose mutations such as `addSimpleProductsToCart`. _Fix submitted by Yaroslav Rogoza in pull request [27914](https://github.com/magento/magento2/pull/27914)_. [GitHub-28524](https://github.com/magento/magento2/issues/28524)  <!--- MC-21513-->

*  **Stored payment methods**. Logged-in customers can now store payment details (including Braintree credit card and Braintree with PayPal) in My Account. <!--- MC-32348 35945 35946-->

*  **Support for wish lists in Magento Open Source**. Added support for Open Source wish lists. You can [add items]({{page.baseurl}}/graphql/mutations/add-products-to-wishlist.html) to, [update items]({{page.baseurl}}/graphql/mutations/update-products-in-wishlist.html) in, and [remove items]({{page.baseurl}}/graphql/mutations/remove-products-from-wishlist.html) from a wish list.

*  **Improved management of customer accounts**. We have added the [`createCustomerV2`]({{page.baseurl}}/graphql/mutations/create-customer-v2.html) and [`updateCustomerV2`]({{page.baseurl}}/graphql/mutations/update-customer-v2.html) mutations to manage customer accounts. These new mutations require different input objects than the `createCustomer` and `updateCustomer` mutations. To change a customer's email address, use the new [`updateCustomerEmail`]({{page.baseurl}}/graphql/mutations/update-customer-email.html) mutation.

*  **Support for Payflow Pro Vault**. Added GraphQL Vault support for the [Payflow Pro Vault]({{page.baseurl}}/graphql/payment-methods/payflow-pro-vault.html) payment method. _Fix submitted by Oleh Usik in pull request [28821](https://github.com/magento/magento2/pull/28821)_. [GitHub-28520](https://github.com/magento/magento2/issues/28520)

*  Updated the GraphQL [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) to include new customer configuration settings. _Fix submitted by Oleh Usik in pull request [27876](https://github.com/magento/magento2/pull/27876)_. [GitHub-28521](https://github.com/magento/magento2/issues/28521)

*  Added the [`requestPasswordResetEmail` mutation]({{page.baseurl}}/graphql/mutations/request-password-reset-email.html), which triggers the password reset email for the provided email address. _Fix submitted by Oleh Usik in pull request [27876](https://github.com/magento/magento2/pull/27876)_. [GitHub-28521](https://github.com/magento/magento2/issues/28521)

*  **Klarna GraphQL**. Added or updated topics on Klarna GraphQL in [Klarna's payment method]({{page.baseurl}}/graphql/payment-methods/klarna.html) and [`createKlarnaPaymentsSession`]({{page.baseurl}}/graphql/mutations/create-klarna-payments-session.html)

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### PWA Studio

PWA Studio v8.0.0 introduces new features and enhancements:

*  Updates to the Venia style guide that apply to design tokens, typography, colors, core components, and page layouts <!--- PWA-519 419-->

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

*  Examples of how to configure Order Approval rules are provided on the Rule Configuration page. <!--- BUNDLE-103 -->

See [Approval rules](https://docs.magento.com/user-guide/customers/account-dashboard-approval-rules.html)

#### B2B shipping methods enhancements

B2B merchants can now control shipping methods that are offered to each Company. Merchants can configure the following from the Admin:<!--- BUNDLE-160 161 162 -->

*  A specific set of shipping methods for B2B Company accounts
*  The use of All or B2B-specific shipping methods for each Company account
*  A specific list of B2B shipping methods for each Company account

#### Shopping cart improvements

*  Merchants can now allow users to clear the contents of their shopping cart in a single action and can configure this ability independently on each website. <!--- BUNDLE-108 -->

*  B2B buyers can now add individual items or the entire contents of their shopping cart directly to a requisition list. <!--- BUNDLE-145 144-->

#### New Admin features

*  B2B merchants can create orders from the Admin on behalf of customers using Payment on Account as the payment method. <!--- BUNDLE-166 178-->
*  Merchants can now directly view all quotes associated with a user from the customer’s detail page. <!--- BUNDLE-139 -->
*  Merchants can now filter the Customers Now Online grid by Company. <!--- BUNDLE-137 -->
*  Admins can now filter customers in the Admin by Sales Rep. <!--- BUNDLE-110 -->

See [B2B Features](https://docs.magento.com/user-guide/configuration/general/b2b-features.html).

#### Enhanced security on storefront

To reduce creation of fraudulent or spam accounts, merchants can now enable Google reCAPTCHA on the New Company Request form on the storefront. See [reCAPTCHA](https://docs.magento.com/user-guide/configuration/security/google-recaptcha-storefront.html).<!--- BUNDLE-154 -->

#### Expanded logging of Admin actions

Admin actions taken in the Company modules are now logged in the Admin Actions Log. Actions are logged from all relevant company modules: `Company`, `NegotiableQuote`, `CompanyCredit`, `SharedCatalog`.
<!--- BUNDLE-180 181 182 183 -->

This release also includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html).

### Magento Functional Testing Framework (MFTF)

MFTF 3.1.0 is now available. See [Magento Functional Testing Framework Changelog](https://github.com/magento/magento2-functional-testing-framework/blob/develop/CHANGELOG.md).

### Vendor Developed Extensions

See the following articles for updates on features and changes for this release:

*  [Amazon Pay](https://docs.magento.com/user-guide/payment/amazon-pay.html)

*  [Braintree](https://docs.magento.com/user-guide/payment/braintree.html)

*  [dotdigital Engagement Cloud](https://docs.magento.com/user-guide/marketing/dotdigital/engagement-cloud.html)

*  [Klarna](https://docs.magento.com/user-guide/payment/klarna.html)

*  [Vertex Cloud](https://docs.magento.com/user-guide/tax/vertex.html)

*  [Yotpo Product Reviews](https://docs.magento.com/user-guide/marketing/yotpo-reviews-intro.html)

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

*  Magento now displays an informative error message when some themes are not deployed after running `bin/magento setup:static-content:deploy`. Previously, when deployment completed successfully but not all packages were deployed, Magento did not display an error. When this command is executed with enabled parallel processing and each theme requires more time to be deployed then the specified maximum execution time, this command can finish successfully, although themes are not deployed.

<!--- MC-35001-->

*  The **Use default** checkbox for Klarna payments (**Stores** > **Configuration** > **Sales** > **Payment methods** > **Klarna**) now remain checked as expected when website scope changes.

<!--- MC-17959 ENGCOM-7629-->

*  Running `/bin/magento config:show vendor_module/general/value` now returns `0` or an empty string as expected. Previously, it returned `Configuration for path: "vendor_module/general/value" doesn't exist`. _Fix submitted by Vadim Malesh in pull request [28549](https://github.com/magento/magento2/pull/28549)._ [GitHub-23290](https://github.com/magento/magento2/issues/23290)

<!--- MC-33788-->

*  Upgrade no longer results in the sudden failure of the Galera cluster. Previously, the Galera cluster exited abruptly after re-indexing immediately after upgrade. During Magento upgrade, index tables are altered, and the engine is changed from `MEMORY` to `InnoDB`. At this point, the content of these tables became out-of-sync between the nodes of the Galera cluster. [GitHub-25334](https://github.com/magento/magento2/issues/25334)

<!--- MC-34254-->

*  Disabling the PageBuilder module no longer affects the rendering of the product page. Previously, custom layouts on the product page disappeared when the module was disabled, and Magento displayed a blank page.

<!--- ENGCOM-7219-->

*  You can now use `bin/magento sampledata:deploy` to deploy sample data as expected after installing Magento using Composer. Previously, Magento threw this error: `Git installations must deploy sample data from GitHub; see https://devdocs.magento.com/guides/v2.3/install-gde/install/sample-data-after-clone.html for more information`. _Fix submitted by Andrii Beziazychnyi in pull request [27481](https://github.com/magento/magento2/pull/27481)_. [GitHub-19481](https://github.com/magento/magento2/issues/19481)

<!--- ENGCOM-7459-->

*  Storefront performance has improved by eliminating the unnecessary loading of the `Datepicker` component. _Fix submitted by Mateusz Krzeszowiak in pull request [27860](https://github.com/magento/magento2/pull/27860)_. [GitHub-28823](https://github.com/magento/magento2/issues/28823)

<!--- ENGCOM-7265-->

*  Executing `bin/magento setup:upgrade` now completes as expected. Previously, Magento displayed printed array content for caches. _Fix submitted by Sathish Subramanian in pull request [27567](https://github.com/magento/magento2/pull/27567)_. [GitHub-27091](https://github.com/magento/magento2/issues/27091)

<!--- ENGCOM-7853-->

*  `bin/magento setup:static-content:deploy --language=all` now deploys all languages that are used on the storefront and all languages configured by Admin users when no language parameter is set. (`en_US` is always deployed by default.) _Fix submitted by Anton Evers in pull request [28922](https://github.com/magento/magento2/pull/28922)_. [GitHub-29218](https://github.com/magento/magento2/issues/29218)

<!--- ENGCOM-7883-->

*  Magento no longer displays the Backup menu when the Backup feature is disabled. _Fix submitted by Eden Duong in pull request [29222](https://github.com/magento/magento2/pull/29222)_. [GitHub-29280](https://github.com/magento/magento2/issues/29280)

<!--- ENGCOM-7987-->

*  Catalog image helper initialization now uses the product model instead of `DataObject`. _Fix submitted by jmonteros422 in pull request [29435](https://github.com/magento/magento2/pull/29435)_. [GitHub-1711](https://github.com/magento/adobe-stock-integration/issues/1711)

<!--- MC-37226-->

*  Admin users can now save an empty **Customer Token Lifetime (hours)** field (Admin **Stores**  >  **Configurations**  >  **Services**  >  **OAuth**  >  **Access Token Expiration**). [GitHub-29502](https://github.com/magento/magento2/issues/29502)

<!-- ENGCOM-7724 -->

*  The **Create Permanent Redirect for old URL** setting is now disabled by default for categories. _Fix submitted by Vadim Malesh in pull request [28752](https://github.com/magento/magento2/pull/28752)_. [GitHub-24922](https://github.com/magento/magento2/issues/24922)

### AdminGWS

<!--- MC-36164-->

*  Magento no longer displays the **Add Attribute** button (**Stores** > **Attributes** or **Add Attribute Set** button (**Stores** > **Attributes** > **Customer**) when the logged-in administrator lacks the appropriate permissions to create these entities. Previously, Magento threw a 404 error when a website administrator who did not have the appropriate permissions tried to create an **Attribute Set** or **Customer** attribute.

<!--- MC-36230-->

*  Magento no longer throws an error when an administrator with restricted roles for specific websites tries to create a subcategory from the Admin.

### Adobe Stock Integration

<!--- ENGCOM-7776-->

*  Images in the Adobe Stock images grid are now properly aligned after filters have been cleared. _Fix submitted by Nazar Klovanych in pull request [28366](https://github.com/magento/magento2/pull/28366)_. [GitHub-824](https://github.com/magento/adobe-stock-integration/issues/824), [GitHub-972](https://github.com/magento/adobe-stock-integration/issues/972)

<!--- ENGCOM-8020-->

*  Added support for reading `exif_image.png` or `exif-image.jpeg` metadata. _Fix submitted by Nazar Klovanych in pull request [29576](https://github.com/magento/magento2/pull/29576)_. [GitHub-1449](https://github.com/magento/adobe-stock-integration/issues/1449)

<!-- ENGCOM-7709 -->

*  The **Used in** section of the Adobe Stock gallery image details page now accurately identifies if the image is associated with a product. _Fix submitted by Nazar Klovanych in pull request [28798](https://github.com/magento/magento2/pull/28798)_. [GitHub-1474](https://github.com/magento/adobe-stock-integration/issues/1474)

<!-- ENGCOM-7873 -->

*  `\Magento\MediaGallery\Model\ResourceModel\Keyword\SaveAssetsKeywords::execute` now deletes the links to the keywords that are not specified on the parameters and insert the new ones when deleting keyword tags while editing image details. _Fix submitted by jmonteros422 in pull request [29207](https://github.com/magento/magento2/pull/29207)_. [GitHub-1391](https://github.com/magento/adobe-stock-integration/issues/1391)

<!-- ENGCOM-7981 -->

*  The `Login failed` message that Magento displays when a merchant clicks **License** for a previously saved, unlicensed Adobe Stock image no longer contains HTML tags. _Fix submitted by yolouiese in pull request [29398](https://github.com/magento/magento2/pull/29398)_. [GitHub-1684](https://github.com/magento/adobe-stock-integration/issues/1684)

<!-- ENGCOM-7976 -->

*  Clicking on the links in the **Used in** section of the image Details page now displays a grid that displays all entities that are filtered by the image. The asset filter is also set and displayed correctly. Previously, Magento did not display the asset title in the **Applied filters** section. _Fix submitted by Nazar Klovanych in pull request [29367](https://github.com/magento/magento2/pull/29367)_. [GitHub-1694](https://github.com/magento/adobe-stock-integration/issues/1694)

<!-- ENGCOM-7976 -->

*  Magento no longer displays the **Used in** section of the image Details page when the image is not in use. _Fix submitted by Nazar Klovanych in pull request [29367](https://github.com/magento/magento2/pull/29367)_. [GitHub-1699](https://github.com/magento/adobe-stock-integration/issues/1699)

<!-- ENGCOM-7976 -->

*  Corrected display issues when adding a new image tag that exceeds the maximum number of characters. _Fix submitted by Nazar Klovanych in pull request [29367](https://github.com/magento/magento2/pull/29367)_. [GitHub-1702](https://github.com/magento/adobe-stock-integration/issues/1702)

<!-- ENGCOM-7976 -->

*  Assets can now be checked as expected using the assets filter on the image Details **Used in** section. _Fix submitted by Nazar Klovanych in pull request [29367](https://github.com/magento/magento2/pull/29367)_. [GitHub-1704](https://github.com/magento/adobe-stock-integration/issues/1704)

<!-- ENGCOM-7976 -->

*  Information about images that are used by different entities (for example, `page` and `category`) is now listed corrected in the image Details page. _Fix submitted by Nazar Klovanych in pull request [29367](https://github.com/magento/magento2/pull/29367)_. [GitHub-1747](https://github.com/magento/adobe-stock-integration/issues/1747)

<!--- ENGCOM-7778-->

*  You can now use the new `UrlFilterApplier` component to apply filters on product,`cms_page`, and `cms_block` grids using the GET URL parameter. _Fix submitted by Gabriel da Gama in pull request [28932](https://github.com/magento/magento2/pull/28932)_. [GitHub-1501](https://github.com/magento/adobe-stock-integration/issues/1501)

<!--- ENGCOM-8019-->

*  Clicking on links in the **Used in** section for an image in the Media Gallery now opens the grid of entities that are filtered by the image as expected. Previously, the image title was not displayed in the applied filters section of the grid. _Fix submitted by Nazar Klovanych in pull request [29429](https://github.com/magento/magento2/pull/29429)_. [GitHub-1694](https://github.com/magento/adobe-stock-integration/issues/1694)

<!--- ENGCOM-8019-->

*  Magento now adds tags correctly when you edit multiple images successively in the Media Gallery. _Fix submitted by Nazar Klovanych in pull request [29429](https://github.com/magento/magento2/pull/29429)_. [GitHub-1755](https://github.com/magento/adobe-stock-integration/issues/1755)

<!--- ENGCOM-8015-->

*  Magento now removes tags for Adobe Stock images after a merchant deletes the tags and saves the image details. Previously, tags were not deleted until the page was refreshed. _Fix submitted by Honeymay Louiese Ignacio in pull request [29400](https://github.com/magento/magento2/pull/29400)_. [GitHub-1703](https://github.com/magento/adobe-stock-integration/issues/1703)

### Amazon Pay

*  Amazon Pay now checks whether a user is already logged in before rendering payment options.

*  Issues with multi-factor authentication and abandoned carts have been resolved.

*  Amazon Pay now correctly populates the `store name` in emails and other displayed locations. If the **Store Name** field in Amazon Pay configuration is empty, the extension retrieves the store's default name (that is, the name you give your store in the Magento Admin).

*  Localization/translation issues for Decline scenarios have been addressed. Displayed text is no longer always in English.

### Analytics

<!--- MC-33314-->

*  Administrators with the correct permissions can now access Advanced Reporting and Segment Reports.

<!--- MC-34352-->

*  Magento successfully generates advance reporting data files and sends them as expected to Inventory on deployments with split databases. Previously, Magento did not generate or send the `quotes.csv` file to Inventory, and as a result, Inventory did not generate the expected reports.

### Braintree

*  Braintree now sends the correct amount to PayPal when a promotion code is applied on the checkout page.

*  Apple Pay now works as expected when Magento Terms & Conditions are enabled on the checkout page.

*  Browser errors no longer occur during checkout on desktop devices when Venmo is enabled from the Admin.

*  Checkout no longer fails when the shopper enters special characters in the **Name** fields of the checkout workflow. Previously, authentication failed because the Braintree 3DS API did not support non-ASCII characters.

*  Magento now displays the correct recipient name in the shipping section of the checkout workflow when placing an order using PayPal.

*  Magento now updates the Order Review page as expected when a shopper changes the shipping method more than once during checkout.

### Bundle products

<!--- MC-36281-->

*  Magento no longer throws an exception when you try to create a product in a deployment in which Inventory is installed but the `Magento_InventoryBundleProduct` module is disabled.

<!--- MC-34261-->

*  Magento now correctly calculates offline refunds for orders that contain bundle products.

<!--- MC-24363-->

*  The mini cart now displays the correct prices for bundle products when tier prices are also assigned for simple products. [GitHub-22807](https://github.com/magento/magento2/issues/22807)

<!--- ENGCOM-7499-->

*  Merchants can now create a credit memo for bundle products that provides a refund without requiring the return of the product. Previously, Magento threw an error. _Fix submitted by Dzung Nguyen in pull request [27455](https://github.com/magento/magento2/pull/27455)_. [GitHub-23440](https://github.com/magento/magento2/issues/23440)

<!--- ENGCOM-7655-->

*  Magento no longer displays redundant validation messages when a shopper adds a bundle product to their cart without selecting a required option. _Fix submitted by Dzung Nguyen in pull request [27455](https://github.com/magento/magento2/pull/27455)_. [GitHub-23440](https://github.com/magento/magento2/issues/23440)

<!-- ENGCOM-7985 MC-29908-->

*  GraphQL now supports placing an order for a bundle product with option type `radio` and `dropdown` with multiple choices. Previously, Magento displayed a message about invalid input for `BundleItem.type: radio/dropdown`. _Fix submitted by Michał Derlatka in pull request [29256](https://github.com/magento/magento2/pull/29256)_. [GitHub-26110](https://github.com/magento/magento2/issues/26110)

### Cache

<!--- MC-36096-->

*  Local cache storage is now retained for the period of time set in **Stores** > **Configuration** > **General** > **Web** > **Default Cookie Settings**. Previously, the expiry date of cookies was hard-coded to one day, which put it out of sync with this setting. As a result, welcome messages did not retain returning customer information for the expected duration.

<!--- ENGCOM-7780-->

*  The number of calls to page cache `config` has been reduced. _Fix submitted by Lukasz Bajsarowicz in pull request [28992](https://github.com/magento/magento2/pull/28992)_. [GitHub-29159](https://github.com/magento/magento2/issues/29159)

<!--- ENGCOM-7073-->

*  Varnish no longer throws a `Connection reset by peer` error when a large catalog is reindexed on schedule. _Fix submitted by Matthew O'Loughlin in pull request [26256](https://github.com/magento/magento2/pull/8815)_. [GitHub-26255](https://github.com/magento/magento2/issues/8815)

<!--- MC-29069-->

*  Full page cache is no longer cleared for unrelated products when a product has been edited in the Admin. [GitHub-25670](https://github.com/magento/magento2/issues/25670)

### Cart and checkout

<!--- ENGCOM-7950-->

*  Direct SQL queries have been replaced by Data Provider, which has improved checkout performance. _Fix submitted by Lukasz Bajsarowicz in pull request [29376](https://github.com/magento/magento2/pull/29376)_. [GitHub-29453](https://github.com/magento/magento2/issues/29453)

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

*  Magento no longer throws an exception when a shopper tries to unset the persistence cookie after beginning checkout and then navigating to the storefront home page. Previously, when the shopper clicked the **Not you?** link on the home page, Magento threw this exception: `The shipping address is missing. Set the address and try again`. [GitHub-24218](https://github.com/magento/magento2/issues/24218)

<!--- MC-33899-->

*  Magento now displays an add-to-cart success message when a customer adds an out-of-stock product to their cart. Previously, the product was added, but Magento did not display a success message.

<!--- MC-35989-->

*  Custom address attributes are now included as expected in the form that displays for the payment step in the checkout workflow.

<!--- MC-36060-->

*  The **State/Province/Region** input box is now enabled as expected on **My Account** > **Address Book** > **Add new address**.

<!--- ENGCOM-7746-->

*  Discounts are now applied as expected to shipping charges when **Apply to Shipping Amount** is enabled. _Fix submitted by Andrii Kalinich in pull request [28839](https://github.com/magento/magento2/pull/28839)_. [GitHub-26723](https://github.com/magento/magento2/issues/26723)

<!--- ENGCOM-7752-->

*  The code that supports closing the mini cart has been refactored to remove the `closeSidebar` function. The appropriate click binding has been added to the `[data-action="close"]` element. _Fix submitted by lumnn in pull request [28906](https://github.com/magento/magento2/pull/28906)_. [GitHub-29161](https://github.com/magento/magento2/issues/29161)

<!--- ENGCOM-7585-->

*  The new **Show "Clear Shopping Cart" button on the cart page** configuration setting provides control over displaying a **Clear Cart** button on the shopping cart view page. By default, this setting is disabled. _Fix submitted by Pavlo Sydorenko in pull request [27917](https://github.com/magento/magento2/pull/27917)_. [GitHub-28705](https://github.com/magento/magento2/issues/28705)

<!--- ENGCOM-7457-->

*  Validation has been added to the phone field in the checkout workflow. _Fix submitted by Oleh Usik in pull request [27537](https://github.com/magento/magento2/pull/27537)_. [GitHub-28800](https://github.com/magento/magento2/issues/28800)

<!--- ENGCOM-5629-->

*  Guest checkout is now disabled as expected when a cart contains downloadable products when the **Shareable** and **Disable Guest Checkout if Cart Contains Downloadable Items** settings are disabled. _Fix submitted by Rani Priya in pull request [23972](https://github.com/magento/magento2/pull/23972)_. [GitHub-23971](https://github.com/magento/magento2/issues/23971)

<!--- ENGCOM-7949-->

*  The success message that Magento displays when a shopper adds a product to their cart from the customer account sidebar now contains a link to the shopper’s shopping cart. _Fix submitted by Ajith in pull request [27977](https://github.com/magento/magento2/pull/27977)_. [GitHub-29097](https://github.com/magento/magento2/issues/29097)

<!--- ENGCOM-7825-->

*  Magento now selects an empty value by default for the prefix dropdown options menu on the checkout workflow. _Fix submitted by Vadim Malesh in pull request [28238](https://github.com/magento/magento2/pull/28238)_. [GitHub-18823](https://github.com/magento/magento2/issues/18823)

<!--- ENGCOM-8004-->

*  The pop-up message that Magento displays when you delete multiple items from a shopping cart now accurately describes the number and type of entities you have selected for deletion. _Fix submitted by Nazar Klovanych in pull request [29490](https://github.com/magento/magento2/pull/29490)_. [GitHub-1749](https://github.com/magento/adobe-stock-integration/issues/1749)

<!--- MC-36418-->

*  Magento now displays a customer registration form when a guest user completes checkout.

<!--- MC-35607-->

*  Custom customer address attributes fields are now displayed as expected in the storefront checkout workflow.

<!--- ENGCOM-7793-->

*  Magento now retrieves the current customer group for an active quote during checkout. Previously, Magento used the customer group that was active when the product was first added to the cart, and if that customer group was deleted before checkout, Magento threw an error. _Fix submitted by Konstantin in pull request [28902](https://github.com/magento/magento2/pull/28902)_. [GitHub-29327](https://github.com/magento/magento2/issues/29327)

### Catalog

<!--- MC-31068-->

*  Magento now removes disabled products from a shopper’s cart before checkout. Previously, when a shopper added a product to their cart that was disabled before checkout completed, Magento removed the disabled product from the cart, but the product remained in the quote, and the shopper could not check out. [GitHub-26680](https://github.com/magento/magento2/issues/26680)

<!--- MC-30624-->

*  Magento now sorts bestselling products as expected. Previously, both product count and the pagination of sort results were incorrect. [GitHub-25955](https://github.com/magento/magento2/issues/25955)

<!--- ENGCOM-7292-->

*  Shoppers can now open a product’s detail page by clicking on the product name in the compare products sidebar. _Fix submitted by Eduard Chitoraga in pull request [27451](https://github.com/magento/magento2/pull/27451)_. [GitHub-21101](https://github.com/magento/magento2/issues/21101)

<!--- ENGCOM-7513-->

*  `children_count` values now remain positive when an administrator deletes categories. Previously, when an administrator deleted categories, the `children_count` for remaining categories was negative. _Fix submitted by Vitaliy Prokopov in pull request [28044](https://github.com/magento/magento2/pull/28044)_. [GitHub-27969](https://github.com/magento/magento2/issues/27969)

<!--- MC-34314-->

*  Magento now uses the default option (**Configuration** > **Web** > **Default Layouts** > **Default Product Layout**) that you have selected for the `page_layout` attribute when creating a new product. Previously, your selected default value was not applied.

<!--- MC-34258-->

*  You can now successfully perform mass actions on Inventory product stock. Previously, when you tried to perform a mass action on inventory product stock, Magento displayed a blank page. If you performed this action with Magento in developer mode, Magento threw this error: `Notice: Undefined offset: 32000 in /Users/kodithuw/sites/m23inventory/inventory/InventoryCatalogAdminUi/view/adminhtml/templates/catalog/product/edit/action/inventory.phtml on line 24`

<!--- MC-32552-->

*  The total record count displayed when you click **Add Products** on the Products tab when adding products to a catalog category no longer changes based on product sort order.

<!-- ENGCOM-7854 -->

*  The `{products(filter: {sku: {eq: "some sku"}}) {…}` query now returns values that have been converted into the expected currency. Previously, `price_tiers.final_price.value` displayed special prices in the base currency. _Fix submitted by Petkovski Marjan in pull request [28890](https://github.com/magento/magento2/pull/28890)_. [GitHub-26121](https://github.com/magento/magento2/issues/26121)

### Catalog Rule

<!--- MC-33487-->

*  Magento no longer throws a fatal error when you save a catalog rule with the following conditions: `If ALL of these conditions are FALSE:, If ALL of these conditions are TRUE:, Attribute set is default`

### Cleanup

<!--- ENGCOM-7281-->

*  Corrected misalignment of the Admin Sales Order grid checkbox. _Fix submitted by Tu Nguyen in pull request [27642](https://github.com/magento/magento2/pull/27642)_. [GitHub-27633](https://github.com/magento/magento2/issues/27633)

<!--- ENGCOM-7723-->

*  Corrected a misspelling in the shipping address ID getter in the sales order address save handler. _Fix submitted by Konstantin in pull request [28810](https://github.com/magento/magento2/pull/28810)_. [GitHub-28982](https://github.com/magento/magento2/issues/28982)

<!--- ENGCOM-7745-->

*  Corrected the `getRegionNameExpresion` method name to `getRegionNameExpression`. _Fix submitted by Pierre Grimaud in pull request [28832](https://github.com/magento/magento2/pull/28832)_. [GitHub-28829](https://github.com/magento/magento2/issues/28829)

<!--- ENGCOM-7657-->

*  A redundant `init` method has been removed from `app/code/Magento/AdvancedPricingImportExport/Model/Import/AdvancedPricing/Validator/Website.php` and `app/code/Magento/AdvancedPricingImportExport/Model/Import/AdvancedPricing/Validator/TierPriceType.php`. _Fix submitted by Oleh Usik in pull request [28650](https://github.com/magento/magento2/pull/28650)_. [GitHub-29009](https://github.com/magento/magento2/issues/29009)

<!--- ENGCOM-7698-->

*  `localStorage` polyfill has been moved from from `base` to `frontend`. _Fix submitted by Ihor Sviziev in pull request [28749](https://github.com/magento/magento2/pull/28749)_. [GitHub-28900](https://github.com/magento/magento2/issues/28900)

<!--- ENGCOM-7753-->

*  Updated the Magento Commerce logo and removed extraneous spaces from the README file. _Fix submitted by Rafael Corr̻êa Gomes in pull request [28891](https://github.com/magento/magento2/pull/28891)_. [GitHub-29056](https://github.com/magento/magento2/issues/29056)

<!--- ENGCOM-7771-->

*  The unnecessary `overflowed` class has been removed from the mini cart sidebar widget. _Fix submitted by lumnn in pull request [28963](https://github.com/magento/magento2/pull/28963)_. [GitHub-29160](https://github.com/magento/magento2/issues/29160)

<!--- ENGCOM-7658-->

*  An incorrect CSS selector in the Shipment page has been corrected. _Fix submitted by Tu Nguyen in pull request [28639](https://github.com/magento/magento2/pull/28639)_. [GitHub-29261](https://github.com/magento/magento2/issues/29261)

<!--- ENGCOM-7680-->

*  The `lib/internal/Magento/Framework/App/Request/Http.php` file has been simplified by optimizing logic and removing redundant variable assignments and over-usage of returns within a function. _Fix submitted by Chris Snedaker in pull request [28608](https://github.com/magento/magento2/pull/28608)_. [GitHub-29381](https://github.com/magento/magento2/issues/29381)

<!--- ENGCOM-7925-->

*  The `bin/magento module:status` command now accepts multiple module names as arguments. _Fix submitted by Chandru Rajendran in pull request [28250](https://github.com/magento/magento2/pull/28250)_. [GitHub-29344](https://github.com/magento/magento2/issues/29344)

<!--- ENGCOM-7983-->

*  Fixed a typo in the class description of `\Magento\Downloadable\Block\Sales\Order\Email\Items\Downloadable`. _Fix submitted by Benjamin Rosenberger in pull request [29451](https://github.com/magento/magento2/pull/29451)_. [GitHub-29470](https://github.com/magento/magento2/issues/29470)

<!--- ENGCOM-7993-->

*  The `TierPriceManagement` class has been refactored to remove redundant code. _Fix submitted by Lukasz Bajsarowicz in pull request [29202](https://github.com/magento/magento2/pull/29202)_. [GitHub-29477](https://github.com/magento/magento2/issues/29477)

<!--- ENGCOM-7830-->

*  `autoload.php` has been refactored to improve readability and return speed. _Fix submitted by Vitaliy Ryaboy in pull request [28923](https://github.com/magento/magento2/pull/28923)_. [GitHub-29527](https://github.com/magento/magento2/issues/29527)

### CMS content

<!--- MC-35971-->

*  The Hierarchy tab for a selected default store view now displays the selected parent page as expected.

<!--- ENGCOM-7602-->

*  Magento no longer throws an error during store view creation when the new store view contains a CMS page with the same URL key as a page in a different store view. _Fix submitted by Vadim Malesh in pull request [28421](https://github.com/magento/magento2/pull/28421)_. [GitHub-28357](https://github.com/magento/magento2/issues/28357)

<!--- MC-35480-->

*  Magento now throws an error when a merchant creates a CMS page with the same URL as the Company Structure page. Previously, Magento displayed the CMS page instead of the Company Structure page.

### Configurable products

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

<!--- ENGCOM-7787-->

*  Magento no longer throws a validation error when you use POST `/V1/products` to a configurable product with an `int` value of 0. Previously, Magento threw this error: `Product with id "%1" does not contain required attribute “%2”.”` _Fix submitted by Vadim Malesh in pull request [29001](https://github.com/magento/magento2/pull/29001)_. [GitHub-13210](https://github.com/magento/magento2/issues/13210)

<!--- ENGCOM-7214-->

*  The configuration options attribute of a parent product are no longer assigned to a new configurable product’s `size` attribute. _Fix submitted by Abel Truong in pull request [27339](https://github.com/magento/magento2/pull/27339)_. [GitHub-26449](https://github.com/magento/magento2/issues/26449)

### Cookies

<!--- ENGCOM-7156-->

*  Magento now creates a maximum of one `mage-translation-file-version` and `mage-translation-storage` cookie per session. _Fix submitted by Ihor Sviziev in pull request [27364](https://github.com/magento/magento2/pull/27364)_. [GitHub-27355](https://github.com/magento/magento2/issues/27355)

### cron

<!--- MC-35884-->

*  Message queue consumer configuration has been extended with new parameters that help control consumers and save server resources and that potentially decrease consumer queue CPU consumption. See [Configure message queues]({{page.baseurl}}/extension-dev-guide/message-queues/config-mq.html) for a description of the `maxIdleTime`, `sleep`, and `onlySpawnWhenMessageAvailable` parameters.

<!--- ENGCOM-7863-->

*  `cron` expressions such as  `3/10 * * * *` are now scheduled as expected. _Fix submitted by Anton Evers in pull request [28930](https://github.com/magento/magento2/pull/28930)_. [GitHub-29240](https://github.com/magento/magento2/issues/29240)

<!--- ENGCOM-7193-->

*   `sales_clean_quotes` no longer loads all expired quotes at once. Previously, Magento failed with this fatal error because all expired quotes were loaded simultaneously: `PHP Fatal error: Allowed memory size of 2147483648 bytes exhausted (tried to allocate 20480 bytes) in /path/to/magento2/vendor/magento/framework/Model/AbstractModel.php on line 359`,

### CSS

<!--- ENGCOM-7678-->

*  Magento no longer duplicates CSS when **Critical CSS** is enabled. _Fix submitted by Tu Nguyen in pull request [28480](https://github.com/magento/magento2/pull/28480)_. [GitHub-26498](https://github.com/magento/magento2/issues/26498)

<!--- MC-24981-->

*  The server-side LESS compiler now imports all remote CSS files as expected when you run `bin/magento setup:static-content:deploy -f`. Previously, Magento did not import the remote files and threw an error. [GitHub-25119](https://github.com/magento/magento2/issues/25119)

### Custom customer attributes

<!--- MC-36387-->

*  Corrected alignment issues for the explanatory text about passwords and the **Job Title** field on the Customer Edit Account Information page.

<!--- MC-33645-->

*  CAPTCHA now works as expected when a new customer clicks the **Create an Account** button on the storefront customer registration page. Previously, Magento did not create the customer account and displayed an error when the customer clicked the button.

<!--- MC-34024-->

*  The checkout workflow no longer displays custom customer address attribute values when the customer has not entered any data.

### Customer

<!--- MC-33679-->

*  The region names in Admin customer addresses are now translated as expected.

<!--- MC-36226-->

*  The **State/Province** fields are now populated as expected on the Edit Address page (**My Account** > **Address book**).

<!--- MC-34655-->

*  Magento no longer throws an error when a customer clicks the **Submit** button multiple times on forms throughout the storefront for which invisible reCAPTCHA has been enabled. Previously, clicking this button multiple times resulted in an internal error similar to this: `Internal error: Make sure you are using reCaptcha V3 api keys`.

<!--- MC-33522-->

*  Saving a deleted customer from the Admin now generates an error message only. Previously, Magento displayed a blank page and generated a report that contains this string: `"0":"No such entity with customerId = 3","1":"#1 Magento\\Customer\\Model CustomerRegistry->retrieve() called at [app\/code\/Magento\/Customer\/Model\/ResourceModel\/CustomerRepository.php:340"`.

<!--- MC-33357-->

*  Magento now displays an error message as expected when an administrator tries to save an address for a customer whose account has just been deleted. Previously, Magento displayed a blank message box.

<!--- MC-33150-->

*  The labels for address fields in the checkout workflow and the address book have been edited for consistency.

<!-- ENGCOM-7244 -->

*  Frontend labels now fall back to store labels if their values are not null. Previously, customer attributes used the default frontend labels. _Fix submitted by Toan Nguyen in pull request [27064](https://github.com/magento/magento2/pull/27064)_. [GitHub-27063](https://github.com/magento/magento2/issues/27063)

<!-- ENGCOM-7147 -->

*  The `sortOrder`number of links in layout XML has been corrected. Previously, this order was reversed and used descending order. _Fix submitted by Tu Nguyen in pull request [27340](https://github.com/magento/magento2/pull/27340)_. [GitHub-27162](https://github.com/magento/magento2/issues/27162)

### Customer segment

<!--- MC-33184-->

*  Bulk operations have been refactored to save and refresh customer segments asynchronously, which has improved the performance of these tasks for deployments that include many customers (greater than 3,000,000).

<!--- MC-36224-->

*  Customer segment conditions now work as expected in a split-database deployment. Previously, Magento threw an error when you tried to edit a customer segment by adding a condition: `SQLSTATE[42S02]: Base table or view not found`.

### Directory

<!--- MC-32271-->

*  The format of the State/Province drop-down menu is now consistent across the Admin.

### dotdigital

*  Order sync no long fails when an order contains product SKUs that no longer exist in the catalog.

*  Empty product categories are no longer included in web insight data.

*  Web behavior tracking now works for merchants with certain theme configurations. A new fallback selector addresses this.

*  The subscriber status data field no loner includes empty values when customer sync was run using cron. (App emulation addresses this issue.)

*  Address book mapping now works as expected when a dotdigital account is enabled at the default level but disabled for the main website.

*  Coupons are now generated (using the external dynamic content URL for coupon generation) for email addresses that contain plus ('+') signs.

*  Contacts are no longer resubscribed when their `last_subscribed_at` value is null.

*  Upgrade errors (dating from 4.5.2) that affected earlier Magento versions have been resolved.

*  A regression issue that was introduced in 4.5.3 that affected using a method to obtain the subscriber status when preparing subscriber export has been fixed.

*  The total figure for synced subscribers (presented in the logs and on screen) is now correctly calculated.

### Downloadable

<!--- MC-35026-->

*  The My Downloadable Products area now displays links to purchased downloadable products that are part of a grouped product as expected.

<!--- MC-34262-->

*  Clicking on a downloadable product's **Sample** button from the Admin product page now downloads a sample as expected. Previously, when you clicked **Sample**, Magento displayed this error: `The product that was requested doesn't exist. Verify the product and try again`.

<!--- ENGCOM-7757-->

*  Shoppers can now download samples of downloadable products that are out-of-stock. Previously, when a shopper tried to download a sample, Magento opened a new tab, but did not display an informative message or begin the download process. _Fix submitted by Vadim Malesh in pull request [28898](https://github.com/magento/magento2/pull/28898)_. [GitHub-23638](https://github.com/magento/magento2/issues/23638)

<!--- ENGCOM-7796-->

*  The exception message that Magento displays when a shopper tries to set a shipping address for a downloadable product has been improved. _Fix submitted by Michał Derlatka in pull request [28904](https://github.com/magento/magento2/pull/28904)_. [GitHub-26107](https://github.com/magento/magento2/issues/26107)

<!-- ENGCOM-7715 -->

*  A product’s `stock_item` data is updated and downloadable product links and samples are preserved as expected when you use a REST PUT call to update `stock_item` values. Previously, after the product update, the product no longer contained links to download content. _Fix submitted by Vadim Malesh in pull request [28799](https://github.com/magento/magento2/pull/28799)_. [GitHub-21811](https://github.com/magento/magento2/issues/21811)

<!--- MC-29905-->

*  Magento now displays a more informative message when a customer sets the shipping address for an order that contains only downloadable products.

### Dynamic block (formerly banner)

<!--- MC-33266-->

*  Table title now matches the data table (as expected) when you create a dynamic block and add a related catalog price rule.

### Email

<!--- MC-32789-->

*  Magento now sends email notifications about order changes to the correct customer email if the customer email was changed after the order was created.

<!--- MC-36015-->

*  Order update emails that are sent to customers now include the correct order status. Previously, if an order status changed from `processing` to another state, the order email did not reflect the status change.

<!--- MC-34107-->

*  Magento no longer displays misleading messages about existing accounts during guest checkout. Previously, when a guest navigated to the checkout page, then navigated back to the shipping page, Magento displayed this error: `You already have an account with us. Sign in or continue as guest`.

<!--- MC-33905-->

*  Custom email templates now load the same elements as native default email templates. Previously, some elements were missing, including variable values.

<!--- MC-33700-->

*  You can now create an email template that sends email with `Content-Type: "text/plain”`. Previously, Magento ignored the content type specified in the template. _Fix submitted by twoonesixdigital in pull request [26474](https://github.com/magento/magento2/pull/26474)_. [GitHub-26471](https://github.com/magento/magento2/issues/26471)

<!--- ENGCOM-7576-->

*  Unnecessary CSS has been removed from the email Preview template. _Fix submitted by Tu Nguyen in pull request [27828](https://github.com/magento/magento2/pull/27828)_. [GitHub-27543](https://github.com/magento/magento2/issues/27543)

<!--- ENGCOM-7177-->

*  Text in the email template that duplicates text already displayed by the footer has been removed. _Fix submitted by Paweł Tylek in pull request [27356](https://github.com/magento/magento2/pull/27356)_. [GitHub-28433](https://github.com/magento/magento2/issues/28433)

<!--- ENGCOM-7506-->

*  Product alert emails are now sent from the store from which the alert is subscribed. Previously, this email was always sent from the default store. _Fix submitted by Maciej Pawłowski in pull request [26534](https://github.com/magento/magento2/pull/26534)_. [GitHub-28968](https://github.com/magento/magento2/issues/28968)

<!--- ENGCOM-7815-->

*  A duplicate `customer.name` variable has been removed from the email template. _Fix submitted by Paweł Tylek in pull request [29054](https://github.com/magento/magento2/pull/29054)_. [GitHub-29087](https://github.com/magento/magento2/issues/29087)

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

*  `sales_order_shipment_track_save_commit_after` is now triggered as expected when you used the REST API to create a shipment.

<!--- MC-33898-->

*  Magento now displays an informative error message when a `di compile` fails due to a nonexistent dependency. Previously, the message displayed did not identify the class in which the exception occurred.

<!--- MC-32929-->

*  Magento no longer throws the following fatal error when Redis uses all allowed memory: `report.CRITICAL: OOM command not allowed when used memory > 'maxmemory'`.

<!--- MC-18021-->

*  Shoppers can now add multiple products to their cart when the `Persistent` module is disabled. [GitHub-14486](https://github.com/magento/magento2/issues/14486)

### General fixes

<!--- MC-36048-->

*  Sorting products on the Admin (**Stores** > **Attributes** > **Products**) now displays all products that meet your search criteria. Previously, Magento did not display records, and to sort the records, you had to navigate to the first page of search results.

<!--- MC-36343-->

*  Unnecessary quotation marks and escaping around a URL in `tracking.phtml` have been removed.

<!--- MC-35998-->

*  The `var/log/system.log` now displays a more accurate message when a user tries to access a non-existing resource file under the static directory and SCD OnDemand and production mode are enabled. Magento now logs a 404 error. Previously, Magento logged the same message that is logged when the error occurs in developer mode.

<!--- ENGCOM-7286-->

*  JavaScript minification now works correctly. The minification file resolver no longer leaks variables to global scope. Previously, `ctx`, `origNameToUrl`, and `baseUrl` variables under window were leaked. _Fix submitted by Mateusz Krzeszowiak in pull request [27622](https://github.com/magento/magento2/pull/27622)_. [GitHub-28110](https://github.com/magento/magento2/issues/28110)

<!--- ENGCOM-7532-->

*  When you debug an error that prevents object creation, Magento now prints as well as logs the original exception message. Previously, the message was only logged. _Fix submitted by Marvin Hinz in pull request [26572](https://github.com/magento/magento2/pull/26572)_. [GitHub-26550](https://github.com/magento/magento2/issues/26550)

<!--- ENGCOM-7577-->

*  Callback execution after database changes are committed has been improved. Previously, if one callback failed with an exception, all callbacks failed. _Fix submitted by Alok Patel in pull request [27134](https://github.com/magento/magento2/pull/27134)_. [GitHub-28167](https://github.com/magento/magento2/issues/28167)

<!--- ENGCOM-7447-->

*  Mixins for modules with no dependencies defined no longer throw this error: `TypeError: Cannot read property 'map' of null`. _Fix submitted by Mateusz Krzeszowiak in pull request [27690](https://github.com/magento/magento2/pull/27690)_. [GitHub-28340](https://github.com/magento/magento2/issues/28340)

<!--- ENGCOM-7299-->

*  Storage polyfill is now loaded and applied only when `localStorage` or `sessionStorage` are not available. _Fix submitted by Mateusz Krzeszowiak in pull request [27619](https://github.com/magento/magento2/pull/27619)_. [GitHub-28381](https://github.com/magento/magento2/issues/28381)

<!--- ENGCOM-7610-->

*  Multi-page storefront orders lists now behave as expected when a shopper changes the number of results displayed per page from the second or subsequent results page. Previously, Magento displayed this error when a shopper changed the number of search results displayed in the **My Account** > **My Orders** list: `You have placed no orders`. _Fix submitted by Vadim Malesh in pull request [28417](https://github.com/magento/magento2/pull/28417)_. [GitHub-28488](https://github.com/magento/magento2/issues/28488)

<!--- ENGCOM-7565-->

*  The deprecated `addWarning` method has been replaced with the `addWarningMessage` method in the Magento core security module. _Fix submitted by kishorekumarkesavan in pull request [28264](https://github.com/magento/magento2/pull/28264)_. [GitHub-28308](https://github.com/magento/magento2/issues/28308)

<!--- ENGCOM-7588-->

*  Code generated using the Magento command-line commands is now consistent with Magento requirements and coding standards. _Fix submitted by Lukasz Bajsarowicz in pull request [28351](https://github.com/magento/magento2/pull/28351)_. [GitHub-28376](https://github.com/magento/magento2/issues/28376)

<!--- MC-33744-->

*  Magento no longer displays a CMS page more than once in the site hierarchy if the page is assigned to multiple store views.

<!--- ENGCOM-7511-->

*  Saving an attribute with `backend_type = static` no longer removes the content of the `frontend_class` field. _Fix submitted by jiten-patel in pull request [27369](https://github.com/magento/magento2/pull/27369)_. [GitHub-27051](https://github.com/magento/magento2/issues/27051)

<!--- ENGCOM-7462-->

*  Unnecessary code and `responsive.js` have been removed from files that are loaded by themes. _Fix submitted by Mateusz Krzeszowiak in pull request [27617](https://github.com/magento/magento2/pull/27617)_. [GitHub-28811](https://github.com/magento/magento2/issues/28811)

<!--- ENGCOM-7856-->

*  Validation has been added to the **Number of Symbols** field on the Admin CAPTCHA configuration page. _Fix submitted by Eden Duong in pull request [29199](https://github.com/magento/magento2/pull/29199)_. [GitHub-29198](https://github.com/magento/magento2/issues/29198)

<!--- ENGCOM-7999-->

*  The RSS feed now loads correctly. Previously, the feed did not load the first time, although it loaded as expected when the page was refreshed. _Fix submitted by Vadim Malesh in pull request [29455](https://github.com/magento/magento2/pull/29455)_. [GitHub-25211](https://github.com/magento/magento2/issues/25211)

<!--- MC-35550-->

*  An expired persistent session is now renewed as expected when the shopper logs back in.

<!--- MC-35230-->

*  Password lifetime as set in **Stores** > **Configuration** > **Advanced** > **Admin** is now honored. Previously, if you clicked **Forgot password?** when prompted to reset your password, you could bypass the password reset.

<!--- MC-34369-->

*  Coupon codes are now applied only to the specified product. Previously, Magento applied the coupon code to all products in the cart. [GitHub-28246](https://github.com/magento/magento2/issues/28246)

<!--- MC-35008-->

*  Cart expiry settings are no longer re-set when an inventory or price update occurs. Previously, when a cart was set to expire in 24 hours, and an inventory update or price update occurred, the indexers populated the `updated_at table`, which re-set the expiry time.

<!--- MC-33313-->

*  Magento no longer throws a fatal error when an administrator assigns a customer who has an active shopping cart to a customer group.

<!-- ENGCOM-7834 -->

*  Selecting a toolbar option from **Developer tools**  >  **Network**  on a product page when running the Chrome browser no longer initializes `toolbar.js` twice. _Fix submitted by Paweł Tylek in pull request [28838](https://github.com/magento/magento2/pull/28838)_. [GitHub-25934](https://github.com/magento/magento2/issues/25934)

<!--- ENGCOM-7420-->

*  Magento now adds an admin user’s ACL role ID to the product category tree cache ID. This will limit the category trees that an admin with limited scope can see as expected. _Fix submitted by quangdo-aligent in pull request [27429](https://github.com/magento/magento2/pull/27429)_. [GitHub-28306](https://github.com/magento/magento2/issues/28306)

### Gift cards

<!--- MC-36118-->

*  Gift card accounts now capture order numbers as expected. Previously, the **More information** field in the History tab for the selected gift account did not display order IDs.

<!--- MC-34519-->

*  Using a comma as a decimal separator now works as expected. Previously, the comma separator ignored decimal values.

<!--- MC-34469-->

*  Gift cards are now displayed as expected in the mini cart. Previously, Magento rendered HTML objects as text.

<!--- MC-33851-->

*  Credit memos now correctly reflect the grand total for orders that involved discounted products and that were paid for by a combination of gift card and store credit.

### Google Tag Manager

<!--- MC-33729-->

*  Magento no longer throws a JavaScript error during checkout when the **Cookie Restriction Mode** setting and Google Tag Manager are enabled.

### GraphQL

<!-- ENGCOM-7661 7662 7559 MC-35646 32345-->

*  Shoppers can select gift message and wrapping options during checkout. GraphQL now covers gift message options for different types of cart items. See [`setGiftOptionsOnCart` mutation]({{page.baseurl}}/graphql/mutations/set-gift-options.html) and [`updateCartItems` mutation]({{page.baseurl}}/graphql/mutations/update-cart-items.html). _Fix submitted by Oleh Usik in pull requests [28519](https://github.com/magento/magento2/pull/28105), [27956](https://github.com/magento/magento2/pull/27956), [28072](https://github.com/magento/magento2/pull/28072), [28072](https://github.com/magento/magento2/pull/28072), and 246 in private repo partners-magento2ee_. [GitHub-253](https://github.com/magento/magento2/issues/28519)

<!-- ENGCOM-7508 -->

*  Customers and guests can write product reviews. Customers can also retrieve their product review histories. See [Create a product review]({{page.baseurl}}/graphql/mutations/create-product-review.html) and [productReviewRatingsMetadata query]({{page.baseurl}}/graphql/queries/product-review-ratings-metadata.html) for information on retrieving information about the reviews infrastructure. _Fix submitted by Eduard Chitoraga in pull request [27882](https://github.com/magento/magento2/pull/27882)_. [GitHub-28523](https://github.com/magento/magento2/issues/28523)

<!-- ENGCOM-7800 7841-->

*  Customers can apply or remove reward points to their carts. They can also view their reward point history. See [`applyRewardPointsToCart`]({{page.baseurl}}/graphql/mutations/apply-reward-points.html) and [`removeRewardPointsFromCart`]({{page.baseurl}}/graphql/mutations/remove-reward-points.html) for a discussion of managing reward points within a cart. _Fix submitted by Petkovski Marjan in pull request 285 in private repo partners-magento2ee and Dmitriy Gallyamov in pull requests 284 and 281 in private repo partners-magento2ee_. [GitHub-28835](https://github.com/magento/magento2/issues/28835), [GitHub-28833](https://github.com/magento/magento2/issues/28833)

<!-- ENGCOM-7968 -->

*  The [`addProductsToCart` mutation]({{page.baseurl}}/graphql/mutations/add-products-to-cart.html) allows you to add any type of product to the active cart. We recommend using this mutation instead of single-purpose mutations such as `addSimpleProductsToCart`. _Fix submitted by Yaroslav Rogoza in pull request [27914](https://github.com/magento/magento2/pull/27914)_. [GitHub-28524](https://github.com/magento/magento2/issues/28524)

<!-- ENGCOM-7801 7816-->

*  GraphQL queries for related products now return values for related products that were created from target rules. Previously, queries for related products (up-sell and cross-sell) only returned values if the related products were added from the product settings. _Fix submitted by Ulzii in pull request 288 in private repo partners-magento2ee_. [GitHub-28566](https://github.com/magento/magento2/issues/28566)

<!--- MC-34187-->

*  The new `availableStores` query returns a list of configuration attributes for multiple stores available under the same website (based on the current store). It does not expose the list of websites. See [`availableStores` query]({{page.baseurl}}/graphql/queries/available-stores.html). _Fix submitted by Dmitriy Gallyamov in pull request [28794](https://github.com/magento/magento2/pull/28794)_. [GitHub-28569](https://github.com/magento/magento2/issues/28569)

<!-- ENGCOM-7512 -->

*  GraphQL now uses only an authorization token to retrieve a type of user and its ID. Previously, GraphQL used an active customer's cookies to retrieve this information when the authorization token was empty. _Fix submitted by Alexander Taranovsky in pull request [27373](https://github.com/magento/magento2/pull/27373)_. [GitHub-28040](https://github.com/magento/magento2/issues/28040)

<!-- ENGCOM-7839 32949-->

*  We have added the [`createCustomerV2`]({{page.baseurl}}/graphql/mutations/create-customer-v2.html) and [`updateCustomerV2`]({{page.baseurl}}/graphql/mutations/update-customer-v2.html) mutations to manage customer accounts. These new mutations require different input objects than the `createCustomer` and `updateCustomer` mutations. To change a customer's email address, use the new [`updateCustomerEmail`]({{page.baseurl}}/graphql/mutations/update-customer-email.html) mutation. _Fix submitted by Michał Derlatka in pull request [28888](https://github.com/magento/magento2/pull/28888)_. [GitHub-28570](https://github.com/magento/magento2/issues/28570)

<!-- ENGCOM-7750 -->

*  `updateCustomer` no longer allows you to set an invalid `INT` value in the `gender` argument. _Fix submitted by Alexander Taranovsky in pull request [28487](https://github.com/magento/magento2/pull/28487)_. [GitHub-28481](https://github.com/magento/magento2/issues/28481)

<!-- ENGCOM-7663 -->

*  You can use the `subscribeEmailToNewsletter` mutation to subscribe customers to a newsletter. See [`subscribeEmailToNewsletter` mutation]({{page.baseurl}}/graphql/mutations/subscribe-email-to-newsletter.html). _Fix submitted by Alexander Taranovsky in pull request [27586](https://github.com/magento/magento2/pull/27586)_. [GitHub-27337](https://github.com/magento/magento2/issues/27337)

<!-- ENGCOM-7216 -->

*  Removed redundant logic in the `setShippingMethodsOnCart` mutation resolver. _Fix submitted by Alexander Taranovsky in pull request [27349](https://github.com/magento/magento2/pull/27349)_. [GitHub-28262](https://github.com/magento/magento2/issues/28262)

<!-- ENGCOM-7638 -->

*  Added test coverage for the `Please provide Email of sender` error associated with the `sendEmailToFriend` mutation. _Fix submitted by Alexander Taranovsky in pull request [28034](https://github.com/magento/magento2/pull/28034)_. [GitHub-28138](https://github.com/magento/magento2/issues/28138)

<!-- ENGCOM-7743 34485-->

*  The `products` query now returns product attribute option labels for the default store view as expected. Previously, this query returned the product attribute option labels that were set for the Admin. _Fix submitted by Dmitriy Gallyamov in pull request [28647](https://github.com/magento/magento2/pull/28647)_. [GitHub-28568](https://github.com/magento/magento2/issues/28568)

<!-- ENGCOM-7743 -->

*  Custom attribute aggregations now return store-specific option values. _Fix submitted by Dmitriy Gallyamov in pull request [28647](https://github.com/magento/magento2/pull/28647)_. [GitHub-28572](https://github.com/magento/magento2/issues/28572)

<!-- ENGCOM-7707 -->

*  Price intervals that are returned in a product aggregation can now be numeric only (no wildcards permitted). _Fix submitted by Dmitriy Gallyamov in pull request [28745](https://github.com/magento/magento2/pull/28745)_. [GitHub-28628](https://github.com/magento/magento2/issues/28628)

<!-- ENGCOM-7729 -->

*  The `categoryList` query now returns the correct response when using fragments. _Fix submitted by Ulzii in pull request [28710](https://github.com/magento/magento2/pull/28710)_. [GitHub-28584](https://github.com/magento/magento2/issues/28584)

<!-- ENGCOM-7732 7733-->

*  GraphQL product search now considers configured category permissions. Previously, product search ignored the **Enable** setting (**Stores**  >  **Configuration**  >  **Catalog**  >  **Catalog** > **Category Permissions**). _Fix submitted by Petkovski Marjan in pull request [28757](https://github.com/magento/magento2/pull/28757) and pull request 271 in private repo `partners-magento2ee`_. [GitHub-28563](https://github.com/magento/magento2/issues/28563

<!--- MC-31084-->

*  You can now add a product to a cart using `addSimpleProductToCart` when other items in the cart are out-of-stock. Previously, Magento returned this error: `Some of the products are out of stock`. [GitHub-26683](https://github.com/magento/magento2/issues/26683)

*  The default GraphQL `Category` method now sorts by category position as expected. _Fix submitted by Derrik Nyomo in pull request [29301](https://github.com/magento/magento2/pull/29301)_. [GitHub-104](https://github.com/magento/catalog-storefront/issues/104)

*  Added support for  wish lists in Magento Open Source. You can [add items]({{page.baseurl}}/graphql/mutations/add-products-to-wishlist.html) to, [update items]({{page.baseurl}}/graphql/mutations/update-products-in-wishlist.html) in, and [remove items]({{page.baseurl}}/graphql/mutations/remove-products-from-wishlist.html) from a wish list. _Fix submitted by Eduard Chitoraga in pull requests [28205](https://github.com/magento/magento2/pull/28205) and 264 in private repo partners-magento2ee_. [GitHub-28551](https://github.com/magento/magento2/issues/28551)

*  The [`addProductsToCart` mutation]({{page.baseurl}}/graphql/mutations/add-products-to-cart.html) allows you to add any type of product to the active cart. We recommend using this mutation instead of single-purpose mutations such as `addSimpleProductsToCart`. _Fix submitted by Yaroslav Rogoza in pull request [27914](https://github.com/magento/magento2/pull/27914)_. [GitHub-28524](https://github.com/magento/magento2/issues/28524)

*  Added GraphQL Vault support for the [Payflow Pro Vault]({{page.baseurl}}/graphql/payment-methods/payflow-pro-vault.html) payment method. _Fix submitted by Oleh Usik in pull request [28821](https://github.com/magento/magento2/pull/28821)_. [GitHub-28520](https://github.com/magento/magento2/issues/28520)

*  Updated the GraphQL [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) to include new customer configuration settings. _Fix submitted by Oleh Usik in pull request [27876](https://github.com/magento/magento2/pull/27876)_. [GitHub-28521](https://github.com/magento/magento2/issues/28521)

*  Added the [`resetPassword` mutation]({{page.baseurl}}/graphql/mutations/reset-password.html). _Fix submitted by Oleh Usik in pull request [27876](https://github.com/magento/magento2/pull/27876)_. [GitHub-28521](https://github.com/magento/magento2/issues/28521)

*  Added the [`requestPasswordResetEmail` mutation]({{page.baseurl}}/graphql/mutations/request-password-reset-email.html), which triggers the password reset email for the provided email address. _Fix submitted by Oleh Usik in pull request [27876](https://github.com/magento/magento2/pull/27876)_. [GitHub-28521](https://github.com/magento/magento2/issues/28521)

*  Added discussion about Klarna GraphQL in [Klarna's payment method]({{page.baseurl}}/graphql/payment-methods/klarna.html) and[`createKlarnaPaymentsSession`]({{page.baseurl}}/graphql/mutations/create-klarna-payments-session.html)

### Images

<!--- ENGCOM-7691-->

*  HTML markup for thumbnail images has been improved. _Fix submitted by Tu Nguyen in pull request [28642](https://github.com/magento/magento2/pull/28642)_. [GitHub-29468](https://github.com/magento/magento2/issues/29468)

### Import/export

<!--- MC-35479-->

*  The `error_report.csv` file now downloads with content and is available inside the `var/import_history/` directory as expected. Previously, this file was not generated after import.

<!--- ENGCOM-7616-->

*  Importing a product by using a CSV file now generates an `error_report.csv` file as expected. Previously, Magento generated the file but removed it after the import completed. _Fix submitted by Vadim Malesh in pull request [28460](https://github.com/magento/magento2/pull/28460)_. [GitHub-28420](https://github.com/magento/magento2/issues/28420)

<!--- ENGCOM-7673-->

*  Removed redundant class imports throughout code base. _Fix submitted by Oleh Usik in pull request [28696](https://github.com/magento/magento2/pull/28696)_. [GitHub-29012](https://github.com/magento/magento2/issues/29012)

<!--- MC-33730-->

*  Magento now successfully imports customer addresses that contain a region for a country that does not have defined regions. Previously, Magento threw this error: `Please enter a valid region`.

<!--- MC-33277-->

*  Magento now loads the correct entity attribute set when a merchant selects an entity type when scheduling a new export.

<!--- MC-32956-->

*  The position of products in the `catalog_category_product` table now updates as expected when an administrator creates a product in the Admin and assigns it to a category. Previously, the position of new products was always assigned a 0 value.

<!--- MC-34939-->

*  Customer data is now successfully exported from the Admin, and the export data grid displays customer data as expected. Previously, an error related to memory allocation occurred during export.

<!--- MC-34657-->

*  Imported CSV files now capture related product information as expected. Previously, related product information was not consistently uploaded the first time the CSV file was imported.

<!--- MC-37424-->

*  Removed unused construct parameters in `AdvancedPricing.php`. [GitHub-29531](https://github.com/magento/magento2/issues/29531)

### Index

<!--- ENGCOM-7073-->

*  `Magento_CacheInvalidate` now handles large tag patterns correctly when doing a `PURGE`. `sendPurgeRequest` has been refactored to handle an array of tags instead of requiring the caller to use `implode()`. _Fix submitted by Matthew O'Loughlin in pull request [26256](https://github.com/magento/magento2/pull/26256)_. [GitHub-26255](https://github.com/magento/magento2/issues/26255)

<!--- MC-30568-->

*  Shared indexers now show a status of **valid** after you run `bin/magento indexer:status` after re-indexing. Previously, shared indexers had an **invalid** status after a full re-index.

### Infrastructure

<!--- MC-37243-->

*  Problems loading catalog and product pages on deployments running PHP 7.4.9 no longer occur. Previously, Magento threw this error when you tried to load the catalog and product pages: `There has been an error processing your request. Exception printing is disabled by default for security reasons`. [GitHub-29502](https://github.com/magento/magento2/issues/29502)

<!--- ENGCOM-7994-->

*  All exceptions that occur when layouts are rendered in production mode are now logged in the exception log file (`var/report`). Previously, Magento logged these messages in the system log as critical issues.

<!--- ENGCOM-7154-->

*  Regular expressions now work properly for large pages as the result of an increase in `ipcre.backtrack_limi`t and `pcre.recursion_limit` to approximately 1000000. _Fix submitted by Mateusz Krzeszowiak in pull request [27270](https://github.com/magento/magento2/pull/27270)_. [GitHub-26026](https://github.com/magento/magento2/issues/26026)

<!--- ENGCOM-7483-->

*  Interceptor generation has been improved. `} else {` statements have been removed from interceptors, and `array_map` has replaced `foreach`. _Fix submitted by Lukasz Bajsarowicz in pull request [27902](https://github.com/magento/magento2/pull/27902)_. [GitHub-28383](https://github.com/magento/magento2/issues/28383)

<!--- ENGCOM-7651-->

*  Array creation is now consistent throughout the class (`app/code/Magento/Sales/Model/Order/Pdf/Items/Invoice/DefaultInvoice.php`). _Fix submitted by Nathan de Graaf in pull request [28515](https://github.com/magento/magento2/pull/28515)_. [GitHub-28795](https://github.com/magento/magento2/issues/28795)

<!--- ENGCOM-7484-->

*  Plugins have been migrated out of the Magento Framework to follow the Magento best practice of prohibiting plugins in the Framework namespace. _Fix submitted by Lukasz Bajsarowicz in pull request [27965](https://github.com/magento/magento2/pull/27965)_. [GitHub-27962](https://github.com/magento/magento2/issues/27962)

<!--- ENGCOM-7713-->

*  Magento no longer throws an `Undefined class constant` error when an interceptor is generated. _Fix submitted by Vova Yatsyuk in pull request [28797](https://github.com/magento/magento2/pull/28797)_. [GitHub-28981](https://github.com/magento/magento2/issues/28981)

<!--- ENGCOM-7523-->

*  Form data now persists when Magento throws an integration exception when you save a integration using a name that is already in use. _Fix submitted by Aditya Yadav in pull request [26660](https://github.com/magento/magento2/pull/26660)_. [GitHub-28143](https://github.com/magento/magento2/issues/28143)

<!--- ENGCOM-7756-->

*  Magento no longer truncates `X-Forwarded-For` headers to 32 characters. _Fix submitted by Ihor Sviziev in pull request [27221](https://github.com/magento/magento2/pull/27221)_. [GitHub-28693](https://github.com/magento/magento2/issues/28693)

<!--- ENGCOM-7820-->

*  The logic that checks if a redirect is internal now works correctly in the Admin when using a custom Admin domain. Previously, problems with this logic resulted in many Admin redirects to the homepage of the default store. _Fix submitted by Vadim Malesh in pull request [29066](https://github.com/magento/magento2/pull/29066)_. [GitHub-28943](https://github.com/magento/magento2/issues/28943)

<!--- ENGCOM-7758-->

*  Problems with the `styles-old.less` file have been eliminated, and linting no longer identifies errors. _Fix submitted by Tu Nguyen in pull request [28895](https://github.com/magento/magento2/pull/28895)_. [GitHub-24004](https://github.com/magento/magento2/issues/24004)

<!--- ENGCOM-7781-->

*  `NonComposerComponentRegistration.php` has been refactored. _Fix submitted by Vitaliy Ryaboy in pull request [28975](https://github.com/magento/magento2/pull/28975)_. [GitHub-29308](https://github.com/magento/magento2/issues/29308)

<!--- ENGCOM-7926-->

*  `ResourceConnection.php` has been refactored to improve class readability. _Fix submitted by Lukasz Bajsarowicz in pull request [29341](https://github.com/magento/magento2/pull/29341)_. [GitHub-29389](https://github.com/magento/magento2/issues/29389)

<!--- ENGCOM-7910-->

*  The README file for the build-in web server has been updated to include all Elasticsearch parameters. _Fix submitted by Yevhenii Dumskyi in pull request [29300](https://github.com/magento/magento2/pull/29300)_. [GitHub-29299](https://github.com/magento/magento2/issues/29299)

<!--- ENGCOM-7814-->

*  The `Magento\CmsUrlRewrite\Plugin\Cms\Model\Store\View::aftersSave` plugin now returns a value as expected. Previously, this plugin did not return a value, and as a result, saving a store view resulted in an error. _Fix submitted by Pieter Hoste in pull request [29035](https://github.com/magento/magento2/pull/29035)_. [GitHub-29034](https://github.com/magento/magento2/issues/29034)

<!--- ENGCOM-7566-->

*  Added the following support for magic methods for `DataObject`:

   *  new extension to support `get/set/has/uns` magic methods (with usage of `__call`)
   *  support for SessionManager, which forwards all calls to the DataObject container
   *  test coverage for extensions
   *  updated tests for Filtered Error check
   *  increased PHPStan check level from 0 to 1. _Fix submitted by Oleksandr Kravchuk in pull request [27905](https://github.com/magento/magento2/pull/27905)_. [GitHub-28303](https://github.com/magento/magento2/issues/28303)

<!--- ENGCOM-7906-->

*  `ScopeConfigInterface` can now be more than a string. The restriction of `magentoConfigFixture` to string only was the inadvertent result of a previous pull request and has been reverted. _Fix submitted by Kristof, Fooman in pull request [29305](https://github.com/magento/magento2/pull/29305)_. [GitHub-29345](https://github.com/magento/magento2/issues/29345)

<!--- ENGCOM-8000-->

*  The `convertConfigTimeToUtc` method no longer throws a fatal error due to sending incorrect parameters to the `Phrase` constructor. _Fix submitted by Kos Rafał in pull request [29483](https://github.com/magento/magento2/pull/29483)_. [GitHub-29525](https://github.com/magento/magento2/issues/29525)

<!-- ENGCOM-7962 -->

*  Price filters now work as expected on grid data when `Magento\Backend\Block\Widget\Grid\Column\Filter\Price::getCondition` and `Magento\Backend\Block\Widget\Grid\Column\Filter\Price::getValue()` return an array with indexes that contain `from` or `to` string data. Previously, Magento threw this error: `Notice: A non well formed numeric value encountered in vendor/magento/module-backend/Block/Widget/Grid/Column/Filter/Price.php on line 197`. _Fix submitted by Nikita Sarychev in pull request [29214](https://github.com/magento/magento2/pull/29214)_. [GitHub-29213](https://github.com/magento/magento2/issues/29213)

<!-- ENGCOM-7911 -->

*  Added an extension point to support adding HTML to the category page. This corrects a bug that was introduced by a previous pull request. _Fix submitted by iGerchak in pull request [29291](https://github.com/magento/magento2/pull/29291)_. [GitHub-29286](https://github.com/magento/magento2/issues/29286)

### Inventory

<!--- ENGCOM-7979-->

*  Unnecessary code comments have been removed from `app/code/Magento/CatalogInventory/Model/StockState.php`. _Fix submitted by Vitaliy Prokopov in pull request [27758](https://github.com/magento/magento2/pull/27758)_. [GitHub-26702](https://github.com/magento/magento2/issues/26702)

### Layered navigation

<!--- MC-25043-->

*  The layered navigation sidebar now shows Boolean attributes with both options (**yes**/**no**) and matching product counts. Previously, layered navigation did not return a **no** option for Boolean attributes in deployments using Elasticsearch.

<!--- ENGCOM-7493-->

*  The swatch layered navigation filter is now consistent with standard filters used throughout Magento. _Fix submitted by Bartłomiej Szubert in pull request [28015](https://github.com/magento/magento2/pull/28015)_. [GitHub-28011](https://github.com/magento/magento2/issues/28011)

### Logging

<!--- ENGCOM-7692-->

*  All broken reference errors are now logged when deployments are in developer mode only. Previously, one error was logged for deployments in production mode, too, which bloated error logs. _Fix submitted by Bartłomiej Szubert in pull request [28735](https://github.com/magento/magento2/pull/28735)_. [GitHub-26504](https://github.com/magento/magento2/issues/26504)

### Media Gallery

<!--- ENGCOM-8014-->

*  The Media Gallery configuration UI (Admin **Stores**  >  **Configuration**  >   **Advanced**  >  **System**) has been reorganized. _Fix submitted by Shankar Konar in pull request [29433](https://github.com/magento/magento2/pull/29433)_. [GitHub-28011](https://github.com/magento/adobe-stock-integration/issues/1738)

<!-- ENGCOM-7972 -->

*  Added tests to cover the **Used In** links for an image in the Media gallery. _Fix submitted by Nazar Klovanych in pull request [29392](https://github.com/magento/magento2/pull/29392)_. [GitHub-1963](https://github.com/magento/adobe-stock-integration/issues/1693)

<!--- ENGCOM-8006-->

*  Magento no longer throws an exception when a merchant tries to save a product with its associated image when the Media Gallery is disabled. _Fix submitted by Nazar Klovanych in pull request [29492](https://github.com/magento/magento2/pull/29492)_. [GitHub-1750](https://github.com/magento/adobe-stock-integration/issues/1750)

### MFTF

<!-- ENGCOM-7963 -->

*  The `AdminSubmitAdvancedInventoryFormActionGroup`, `AdminClickOnAdvancedInventoryLinkActionGroup`, and  `AdminSetStockStatusConfigActionGroup` action groups are now used within tests according to best practice. _Fix submitted by Oleh USIA in pull request [29386](https://github.com/magento/magento2/pull/29386)_. [GitHub-29420](https://github.com/magento/magento2/issues/29420)

<!-- ENGCOM-7964 -->

*  `SearchProductGridByKeywordActionGroup` is now used for search in the product grid. _Fix submitted by Oleh Usik in pull request [29385](https://github.com/magento/magento2/pull/29385)_. [GitHub-29434](https://github.com/magento/magento2/issues/29434)

<!-- ENGCOM-7915 -->

*  `AdminCategoriesClickDoneButtonOnPopupActionGroup` is now used to click **Done** on the Search Categories popup. _Fix submitted by Oleh Usik in pull request [28989](https://github.com/magento/magento2/pull/28989)_. [GitHub-29380](https://github.com/magento/magento2/issues/29380)

<!-- ENGCOM-7529 -->

*  `LoginToStorefrontActionGroup` is now used to replace a sequence of actions that is used for store front customer login. _Fix submitted by Sathish Subramanian in pull request [28113](https://github.com/magento/magento2/pull/28113)_. [GitHub-28165](https://github.com/magento/magento2/issues/28165)

<!-- ENGCOM-7590 -->

*  `AdminUpdateCustomURLRewritesPermanentTest` has been refactored to meet MFTF best practices. _Fix submitted by Kate Kyzyma in pull request [28361](https://github.com/magento/magento2/pull/28361)_. [GitHub-28393](https://github.com/magento/magento2/issues/28393)

<!-- ENGCOM-7343 -->

*  Test names have been changed to meet MFTF conventions. _Fix submitted by Evgeny Levinsky in pull request [27839](https://github.com/magento/magento2/pull/27839)_. [GitHub-28305](https://github.com/magento/magento2/issues/28305)

#### New action groups

<!-- ENGCOM-7991 -->

*  `StorefrontCheckoutClickNextButtonActionGroup` _Fix submitted by Oleh Usik in pull request [29472](https://github.com/magento/magento2/pull/29472)_. [GitHub-29539](https://github.com/magento/magento2/issues/29539)

<!-- ENGCOM-7857 -->

*  `AdminProductFormSaveActionGroup` _Fix submitted by Oleh Usik in pull request [29142](https://github.com/magento/magento2/pull/29142)_. [GitHub-29292](https://github.com/magento/magento2/issues/29292)

<!-- ENGCOM-7928 -->

*  `AdminSaveCategoryActionGroup` _Fix submitted by Oleh Usik in pull request [28993](https://github.com/magento/magento2/pull/28993)_. [GitHub-29388](https://github.com/magento/magento2/issues/29388)

<!-- ENGCOM-7790 -->

*  `AdminProductGridSectionClickFirstRowActionGroup` _Fix submitted by Oleh Usik in pull request [29000](https://github.com/magento/magento2/pull/29000)_. [GitHub-29295](https://github.com/magento/magento2/issues/29295)

<!-- ENGCOM-7591 -->

*  `AdminProductFormCategoryExistInCategoryListActionGroup` and `AdminProductFormCategoryNotExistInCategoryListActionGroup` _Fix submitted by Alexander Steshuk in pull request [28287](https://github.com/magento/magento2/pull/28287)_. [GitHub-28392](https://github.com/magento/magento2/issues/28392)

<!-- ENGCOM-7867 -->

*  `AdminExpandCategoryTreeActionGroup` _Fix submitted by Oleh Usik in pull request [29133](https://github.com/magento/magento2/pull/29133)_. [GitHub-29289](https://github.com/magento/magento2/issues/29289)

<!-- ENGCOM-7881 -->

*  `AdminTaxRateGridOpenPageActionGroup` _Fix submitted by Oleh Usik in pull request [29007](https://github.com/magento/magento2/pull/29007)_. [GitHub-29281](https://github.com/magento/magento2/issues/29281)

<!-- ENGCOM-7868 -->

*  `AdminNavigateNewCustomerActionGroup` _Fix submitted by Oleh Usik in pull request [29134](https://github.com/magento/magento2/pull/29134)_. [GitHub-29287](https://github.com/magento/magento2/issues/29287)

#### New tests

<!-- ENGCOM-7600 -->

*  Added test for deleting a CMS page as an Admin user. _Fix submitted by Dmitry Tsymbal in pull request [28112](https://github.com/magento/magento2/pull/28112)_. [GitHub-28202](https://github.com/magento/magento2/issues/28202)

*  Added the `StorefrontShareCustomerWishlistActionGroup` test for customer wishlist sharing with invalid email addresses. The existing test for wish list sharing (`StorefrontShareWishlistEntityTest`) has been refactored. `StorefrontCustomerShareWishlistActionGroup` has been deprecated.

<!-- ENGCOM-7682 -->

*  Added a test to check for the implementation of the **Only X left Threshold** configuration setting. _Fix submitted by Oleh Usik in pull request [27549](https://github.com/magento/magento2/pull/27549)_. [GitHub-28755](https://github.com/magento/magento2/issues/28755)

### Newsletter

<!--- MC-34714-->

*  Exporting the Newsletter Subscribers list using the `Excel XML` option now results in the export of all rows as expected. Previously, exported data included only the page pagination value, not all rows.

<!--- ENGCOM-7522-->

*  Newsletter subscription emails now use the same HTML tags as other newsletter-related emails. _Fix submitted by Paweł Tylek in pull request [27357](https://github.com/magento/magento2/pull/27357)_. [GitHub-28166](https://github.com/magento/magento2/issues/28166)

<!--- ENGCOM-7788-->

*  Adds a test for deleting newsletter subscriber as an Admin user. _Fix submitted by Dmitry Tsymbal in pull request [28972](https://github.com/magento/magento2/pull/28972)_. [GitHub-29032](https://github.com/magento/magento2/issues/29032)

<!--- ENGCOM-7739-->

*  Added tests for newsletter subscription for guests with a disallowed option in config statements. This test replaces deprecated `VerifyRegistredLinkDisplayedForGuestSubscriptionNoTest` and `StorefrontCreateNewSubscriberActionGroup`. _Fix submitted by Dmitry Tsymbal in pull request [28872](https://github.com/magento/magento2/pull/28872)_. [GitHub-29039](https://github.com/magento/magento2/issues/29039)

### Orders

<!--- ENGCOM-7858-->

*  The `GetAssetIdByContentFieldInterface` and its implementation on `MediaContent` modules now permits Adobe Stock Integration to extend `MediaGallery` filter functionality. _Fix submitted by Gabriel da Gama in pull request [29058](https://github.com/magento/magento2/pull/29058)_. [GitHub-1464](https://github.com/magento/magento2/issues/1464)

<!--- ENGCOM-7885-->

*  The `CustomerAddressI` values for a newly created customer is now validated in quotes. _Fix submitted by Andrii Kalinich in pull request [29139](https://github.com/magento/magento2/pull/29139)_. [GitHub-28793](https://github.com/magento/magento2/issues/28793)

<!--- ENGCOM-7798-->

*  The order status for a credit memo with zero total is now `Closed`. Previously, Magento reported its order status as `Complete`. _Fix submitted by Andrii Kalinich in pull request [29023](https://github.com/magento/magento2/pull/29023)_. [GitHub-22762](https://github.com/magento/magento2/issues/22762)

### Page Builder

<!--- ENGCOM-7918-->

*  The `description` and `short_description` product attributes have been re-ordered to better accommodate planned changes to Page Builder content staging. _Fix submitted by Matt Walters in pull request [29238](https://github.com/magento/magento2/pull/29238)_. [GitHub-543](https://github.com/magento/magento2-page-builder/issues/543)

### Payment methods

<!--- MC-34363-->

*  Magento now displays a message that prompts you to enter mandatory credit card data when you click **Submit** for an Admin order without entering valid payment information. Previously, the Braintree card validator did not throw an error when payment input fields were invalid and the page became inactive.

<!--- MC-33494-->

*  You can now change the shipping method for an order you create from the Admin for a customer whose account has a stored credit card (Braintree). Previously, when you selected a different shipping method, the stored card was not selected, and Magento did not place the order.

#### PayPal

<!--- MC-33879-->

*  The Order Review page of the checkout workflow now displays the correct shipping amount for PayPal through Braintree orders for which the shipping method has been changed during checkout. Previously, when a customer changed the shipping method on the PayPal Order Review page of the checkout workflow, Magento did not update the order total with the correct method.

<!--- MC-34152-->

*  Merchants can now successfully cancel orders that were authorized using PayPal. Previously, Magento did not cancel the order and displayed this error: `Declined: 10601-Authorization has expired`.

<!--- MC-33330-->

*  Magento no longer empties your cart when you cancel an order by closing the PayPal payment popup window after first completing another order.

### Performance

*  Three new configuration settings support a decrease in consumer queue CPU consumption. These optional parameters provide increased control over consumers and save server resources. See [Configure message queues]({{page.baseurl}}/extension-dev-guide/message-queues/config-mq.html) for a description of the `maxIdleTime`, `sleep`, and `onlySpawnWhenMessageAvailable` parameters.

<!--- MC-31617-->

*  Plugin list configuration is now generated during the execution of the `di:compile` command. This configuration information is written to generated metadata folders based on scope. Previously, this information was stored in cache. Resulting performance improvements include:

   *  Network cache size has decreased
   *  Execution time for many scenarios has been improved.

<!--- ENGCOM-7290-->

*  Magento now loads the appropriate slider widget on demand, which has improved page loading. The touch slider widget customization has been moved to a separate file so it can be loaded only on compatible devices. The appropriate slider widget type is now loaded only when range binding is actually used on the page. _Fix submitted by Mateusz Krzeszowiak in pull request [27616](https://github.com/magento/magento2/pull/27616)_. [GitHub-28807](https://github.com/magento/magento2/issues/28807)

<!--- MC-33107-->

*  The performance of checkout with multiple simultaneous orders has been improved.

<!--- MC-25062-->

*  Deadlocks no longer occur when the import process executes a bulk insert and the re-index process simultaneously executes a large insert from select. Previously, Magento displayed this error: `PDOException: SQLSTATE[40001]: Serialization failure: 1213 Deadlock found when trying to get lock`. [GitHub-8933](https://github.com/magento/magento2/issues/8933)

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

*  Magento no longer assigns a status of `Complete` after invoicing to an order that requires zero payment.

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

*  Shipments created through the POST `/rest/V1/shipment` endpoint now update orders properly. Previously, Magento created a shipment, but shipment status remained in the processing state.

<!-- ENGCOM-7639 -->

*  Credit memos now display the payment method that is derived from the scope of the store in which the order was made. Previously, credit memos displayed the name as defined the default store scope. _Fix submitted by Ledian Hymetllari in pull request [27582](https://github.com/magento/magento2/pull/27582)_. [GitHub-27570](https://github.com/magento/magento2/issues/27570)

### Search

<!--- MC-31304-->

*  You can now search for products by attribute from the Admin Customer view using QuickSearch. Previously, an exception occurred on the catalog search result page.

<!--- MC-32518-->

*  Magento now displays configurable products on the category page as expected after you add a product attribute.

<!--- MC-33952-->

*  Elasticsearch results now include the correct values for each store view’s attribute options. If a Dropdown or Multiple Select attribute has a different option value in the non-default store view than in the default store view, Elasticsearch now indexes that value or returns the product with that value in the results. Previously, Elasticsearch did not index that value or return the product with that value in the results.

<!--- MC-35013-->

*  Searching by SKU now works as expected in advanced search with Elasticsearch. Previously, when you tried to search by SKU, Magento displayed this error message: `We can't find any items matching these search criteria. Modify your search`.

<!--- ENGCOM-7222-->

*  Advanced search no longer lets shoppers filter on negative prices. _Fix submitted by Rohan Hapani in pull request [27359](https://github.com/magento/magento2/pull/27359)_. [GitHub-27358](https://github.com/magento/magento2/issues/27358)

<!--- ENGCOM-7917-->

*  Scope values are now reset as expected on the New Synonym Group form. _Fix submitted by Sathish Subramanian in pull request [29206](https://github.com/magento/magento2/pull/29206)_. [GitHub-28947](https://github.com/magento/magento2/issues/28947)

### Shipping

<!--- MC-34734-->

*  Magento now calculates shipping table rates correctly after upgrade. Previously, shipping table rates were calculated based on net price, which excluded VAT.

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

*  The sitemap in `robots.txt` is now store-specific. _Fix submitted by Vadim Malesh in pull request [29331](https://github.com/magento/magento2/pull/29331)_. [GitHub-28901](https://github.com/magento/magento2/issues/28901)

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

*  You can now use POST `/V1/products/special-price` to update a product’s special price without specifying a `price_to` parameter value. Previously, attempts to set the price update without the `price_to` parameter specified were unsuccessful.

### Store

<!--- MC-35853-->

*  Deleting a previously created store view no longer results in an error in deployments with a split database configuration. Previously, Magento threw an exception.

<!--- MC-32634-->

*  You can now export `config.php` and default website code from one website to install and configure Magento on a second website in a multi website deployment. Previously, the default store and view disappeared after the export, and errors occurred on the storefront.

### Swagger

<!--- ENGCOM-7720-->

*  You can now generate a customer token with Swagger. Previously, Swagger did not generate a response code when valid customer access information was entered, and Magento displayed this error: `The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later`. _Fix submitted by Vadim Malesh in pull request [28822](https://github.com/magento/magento2/pull/28822)_. [GitHub-27098](https://github.com/magento/magento2/issues/27098)

### Swatches

<!--- ENGCOM-7845-->

*  Configurable products with swatches now show tier pricing when a shopper clicks **Edit** in the cart. Previously, Magento did not display tier prices in the cart before checkout. _Fix submitted by Sathish Subramanian in pull request [29137](https://github.com/magento/magento2/pull/29137)_. [GitHub-28270](https://github.com/magento/magento2/issues/28270)

<!--- MC-33147-->

*  Magento now displays tier prices as expected for configurable product variations.

### TargetRule

<!--- MC-36162-->

*  The performance of the product page under the following conditions has improved:

   *  The target rule module is installed
   *  Linked product functionality (related, up-sell and cross-sell products) is implemented

### Tax

<!--- MC-36049-->

*  Magento no longer displays a fixed product tax attribute on the storefront for a product after a merchant has unassigned it from the product’s attribute set.

### Test

<!--- ENGCOM-7874-->

*  PHPUnit 9 errors have been fixed in unit tests. _Fix submitted by Anton Evers in pull request [29244](https://github.com/magento/magento2/pull/29244)_. [GitHub-29329](https://github.com/magento/magento2/issues/29329)

<!--- ENGCOM-7995-->

*  Added unit tests for approving a purchase order that was made with a discount that has since expired will place an order at full amount and not update the purchase order total. _Fix submitted by Joan He in pull request [18](https://github.com/magento/partners-magento2-infrastructure/pull/18)_. [GitHub-204](https://github.com/magento/partners-magento2b2b/issues/204)

<!--- ENGCOM-8003-->

*  `SynchronizeFilesInterface` is now covered by integration tests. _Fix submitted by jmonteros422 in pull request [29493](https://github.com/magento/magento2/pull/29493)_. [GitHub-1742](https://github.com/magento/magento2/issues/1742)

<!--- ENGCOM-8009-->

*  A function has been added to `\Magento\TestFramework\TestCase\WebapiAbstract` that enables the comparison of large nested arrays of expected and actual outcomes in tests and permits testers to ignore irrelevant keys in the actual outcome. _Fix submitted by Jekabs in pull request [29458](https://github.com/magento/magento2/pull/29458)_. [GitHub-29498](https://github.com/magento/magento2/issues/29498)

<!-- ENGCOM-7887 -->

*  Corrected the inversion of expected value with actual value in `app/code/Magento/Newsletter/Test/Unit/Model/SubscriptionManagerTest.php`. _Fix submitted by Lukasz Bajsarowicz in pull request [29271](https://github.com/magento/magento2/pull/29271)_. [GitHub-29283](https://github.com/magento/magento2/issues/29283)

<!-- ENGCOM-7886 -->

*  Using `ObjectManager` for instantiating classes during test has been replaced with the new keyword in unit tests. _Fix submitted by Lukasz Bajsarowicz in pull request [29272](https://github.com/magento/magento2/pull/29272)_. [GitHub-29346](https://github.com/magento/magento2/issues/29346)

<!-- ENGCOM-7593 -->

*  Test coverage has been added for these cases of the `updateCustomer` mutation: invalid date of birth, invalid email address, and empty customer last name. _Fix submitted by Alexander Taranovsky in pull request [28304](https://github.com/magento/magento2/pull/28304)_. [GitHub-28394](https://github.com/magento/magento2/issues/28394)

<!--- MC-30844-->

*  The `ApiFunctional TestFramework` GraphQL client now parses headers correctly. [GitHub-26425](https://github.com/magento/magento2/issues/26425)

### Theme

<!--- MC-34397-->

*  Themes that are added in User Agent Rules are now affected as expected when you run `bin/magento catalog:images:resize`. Previously, only themes that were assigned to stores were affected when `bin/magento catalog:images:resize` was run.

### Translation and locales

<!--- MC-20372-->

*  Magento no longer throws an error when an administrator changes the **Date** field during Admin product creation or save when the Admin locale is Chinese or Japanese. [GitHub-24696](https://github.com/magento/magento2/issues/24696)

<!--- ENGCOM-7829-->

*  Magento now checks area (frontend or `adminhtml`) before rendering inline translation markup. Previously, making an API call to `/rest/V1/integration/admin/token` with bad credentials while inline translation was enabled results in the inclusion of inline translation markup around the error message in the API response. _Fix submitted by Zach Nanninga in pull request [28856](https://github.com/magento/magento2/pull/28856)_. [GitHub-28656](https://github.com/magento/magento2/issues/28656)

<!--- ENGCOM-7536-->

*  Bulgarian regions have been added to the `directory_country_region` table. _Fix submitted by Nikola Lardev in pull request [27957](https://github.com/magento/magento2/pull/27957)_. [GitHub-28215](https://github.com/magento/magento2/issues/28215)

<!--- ENGCOM-7535-->

*  The titles and buttons on the Admin **Customers**  >  **Add New Address** and **Edit Product**  >  **Advanced Inventory** modals can now be translated. _Fix submitted by Sathish Subramanian in pull request [28174](https://github.com/magento/magento2/pull/28174)_. [GitHub-28201](https://github.com/magento/magento2/issues/28201)

<!--- ENGCOM-7521-->

*  The term FPT can now be translated on Admin  **Stores**  > **Configuration**  > **Sales**  > **Tax**  > **Fixed Product Taxes**. _Fix submitted by Vadim Malesh in pull request [28108](https://github.com/magento/magento2/pull/28108)_. [GitHub-5477](https://github.com/magento/magento2/issues/5477)

<!-- ENGCOM-7631 -->

*  The **Ship here** button label on the checkout workflow shipping address modal has been changed to match the camel case used for other buttons. This case now matches the case that is used in the translation files. Previously, because of the mismatch in case, this label was not translated. _Fix submitted by WK in pull request [28547](https://github.com/magento/magento2/pull/28547)_. [GitHub-28685](https://github.com/magento/magento2/issues/28685)

### UI

<!--- ENGCOM-7514-->

*  The privacy and cookie policy link in the page footer is now displayed as an active link when the Privacy and Cookie Policy page is displayed. _Fix submitted by Sathish Subramanian in pull request [28004](https://github.com/magento/magento2/pull/28004)_. [GitHub-27985](https://github.com/magento/magento2/issues/27985)

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

*  Directly clicking on the **Export Tax Rates** button of the Add New Tax Rule page (**Stores**  >  **Tax Rules**) now downloads the `tax_rates.csv` file as expected. Previously, merchants had to click on the edge of the **Export Tax Rates** button. This was a known issue in Magento 2.4.0.

<!--- MC-35313-->

*  The **Add selections to my cart** button on the bottom of the shopping cart now works as expected. This was a known issue in Magento 2.4.0.

<!--- MC-35296-->

*  The **Refresh** button of the **Recently Viewed Products** section of the Customer's Activities page now works as expected. Previously, when you clicked **Refresh**, the product list was not refreshed, and the page scrolled.

<!--- MC-35412-->

*  Magento now correctly displays the calendar icon used for selecting a customer’s date of birth on the Conditions tab of **Customers** > **Segments** > **Add Segment**.

<!--- MC-35658-->

*  The checkout summary section of the checkout workflow no longer flickers when a shopper scrolls through this page on Internet Explorer 11.x.

<!--- MC-34602-->

*  Magento now correctly displays the Order by SKU widget on the storefront Category page. Previously, the HTML code for this widget was not rendered, and Magento did not display the **Load a list of SKUs** link.

<!--- MC-37444-->

*  UI components that have been disabled using `this.disabled(true)` no longer appear on the storefront. [GitHub-29098](https://github.com/magento/magento2/issues/29098)

<!--- ENGCOM-7264-->

*  Magento now displays the recently viewed products widget properly in mobile view. _Fix submitted by Tu Nguyen in pull request [27572](https://github.com/magento/magento2/pull/27572)_. [GitHub-27058](https://github.com/magento/magento2/issues/27058)

<!--- ENGCOM-7575-->

*  Changing the position of a product from the Admin is now reflected in the product position on the storefront. _Fix submitted by Oleg Aleksin in pull request [28150](https://github.com/magento/magento2/pull/28150)_. [GitHub-28149](https://github.com/magento/magento2/issues/28149)

<!--- ENGCOM-7507-->

*  The login form style are now consistent with the style on other forms in the Blank theme. Unnecessary styles that set the width for container control wrap input fields have been removed. _Fix submitted by Tu Nguyen in pull request [28084](https://github.com/magento/magento2/pull/28084)_. [GitHub-28059](https://github.com/magento/magento2/issues/28059)

<!--- ENGCOM-7578-->

*  The **OK** button on the mini cart delete product confirmation pop-up now behaves as expected. _Fix submitted by Tu Nguyen in pull request [28083](https://github.com/magento/magento2/pull/28083)_. [GitHub-27095](https://github.com/magento/magento2/issues/27095)

<!--- ENGCOM-7456-->

*  Product gallery elements no longer blink during page load. _Fix submitted by Mateusz Krzeszowiak in pull request [27871](https://github.com/magento/magento2/pull/27871)_. [GitHub-28339](https://github.com/magento/magento2/issues/28339)

<!--- ENGCOM-8007-->

*  The CSS class that controls field width is now applied as expected for the Start Time element throughout the Admin. _Fix submitted by Shankar Konar in pull request [29511](https://github.com/magento/magento2/pull/29511)_. [GitHub-29496](https://github.com/magento/magento2/issues/29496)

<!--- ENGCOM-7992-->

*  The Terms and Conditions text label can now display longer text strings properly. _Fix submitted by Bartłomiej Szubert in pull request [29413](https://github.com/magento/magento2/pull/29413)_. [GitHub-24060](https://github.com/magento/magento2/issues/24060)

<!--- ENGCOM-7967-->

*  The title of the order failure page has been rewritten for accuracy. Previously, when a shopper canceled an order, Magento displayed a page with this title: `We received your order!`. _Fix submitted by Angelo Romano in pull request [29410](https://github.com/magento/magento2/pull/29410)_. [GitHub-29416](https://github.com/magento/magento2/issues/29416)

<!--- ENGCOM-7770-->

*  The total number of canceled items on the canceled order view page is now correctly identified on the canceled order view page. Previously, this field was labeled **Total Due**. _Fix submitted by Madhu Rajawat in pull request [27516](https://github.com/magento/magento2/pull/27516)_. [GitHub-26191](https://github.com/magento/magento2/issues/26191)

<!-- ENGCOM-7579 -->

*  The toggle button on the create configurable product page now works as expected. _Fix submitted by Tu Nguyen in pull request [28032](https://github.com/magento/magento2/pull/28032)_. [GitHub-22702](https://github.com/magento/magento2/issues/22702)

<!-- ENGCOM-7579 -->

*  The advanced attribute properties block icon on the Advanced Attribute Properties page now behaves as expected. _Fix submitted by Tu Nguyen in pull request [28032](https://github.com/magento/magento2/pull/28032)_. [GitHub-26022](https://github.com/magento/magento2/issues/26022)

<!-- ENGCOM-7619 -->

*  The Admin section of the system configuration page now expands to display required fields as expected when you try to save configuration settings for a new module. _Fix submitted by Bartłomiej Szubert in pull request [28285](https://github.com/magento/magento2/pull/28285)_. [GitHub-26427](https://github.com/magento/magento2/issues/26427)

<!-- ENGCOM-7826 -->

*  Corrected behavior of the magnifier when mode is set to `inside`. _Fix submitted by Sean van Zuidam in pull request [29077](https://github.com/magento/magento2/pull/29077)_. [GitHub-29076](https://github.com/magento/magento2/issues/29076)

<!-- ENGCOM-7010 -->

*  Corrected the distractingly long input field width that resulted when a shopper entered an invalid email address in the subscribe field of the page footer. _Fix submitted by Dipesh Rangani in pull request [27106](https://github.com/magento/magento2/pull/27106)_. [GitHub-27099](https://github.com/magento/magento2/issues/27099)

<!-- ENGCOM-7972 -->

*  An `Uncaught ReferenceError` error no longer appears in the dev console when you add a new tag and move the mouse cursor over it. _Fix submitted by Nazar Klovanych in pull request [29392](https://github.com/magento/magento2/pull/29392)_. [GitHub-1700](https://github.com/magento/magento2/issues/1700)

<!--- ENGCOM-7635-->

*  Removed an unused `AdminAnalytics` test (`TrackingScriptTest`). _Fix submitted by Lukasz Bajsarowicz in pull request [28605](https://github.com/magento/magento2/pull/28605)_. [GitHub-28850](https://github.com/magento/magento2/issues/28850)

<!-- ENGCOM-7142 -->

*  Issues with the serialization and unserialization of static properties when running consecutive tests have been resolved. _Fix submitted by Pavel Bystritsky in pull request [26175](https://github.com/magento/magento2/pull/26175)_. [GitHub-28319](https://github.com/magento/magento2/issues/28319), [GitHub-29313](https://github.com/magento/magento2/issues/29313)

### URL rewrites

<!--- MC-34483-->

*  Moving a store view to a different website no longer resets URLs. Previously, Magento incorrectly regenerated CMS and product URL rewrites.

*  You can now successfully preview the staging schedule for a CMS block. Previously, Magento threw a fatal error.

<!--- MC-33028-->

*  Magento now preserves existing catalog URL rewrites as expected when a store view is assigned to a different store. Previously, Magento deleted the store-specific URL rewrites.

### Varnish

<!--- ENGCOM-7761-->

*  Restarting Varnish no longer results in 503 errors. _Fix submitted by Ihor Sviziev in pull request [28137](https://github.com/magento/magento2/pull/28137)_. [GitHub-24353](https://github.com/magento/magento2/issues/24353)

### Vault

<!--- MC-34674-->

*  Magento no longer saves credit card numbers when the **Save for later use** checkbox on the payment section of the checkout workflow is not selected.

### Visual Merchandiser

<!--- MC-35574-->

*  Magento now displays source stock instead of the default product stock when you sort products in Visual Merchandiser and Inventory is enabled.

### Web API framework

<!--- MC-36084-->

*  Invoices created using REST now include gift card information similar to the invoices that are created in the Admin. Previously, using POST `/V1/order/:id/invoice` to invoice the order did not display the gift card code or gift card amount applied.

<!--- MC-35838-->

*  Merchants with multiple websites can now use the REST API to create and update products while preserving image and image-role inheritance. Previously, when a merchant used the REST API to create and update products, and a product was updated for store view, and the default image roles were loaded and saved for that store view. As a result, the store-view image roles stopped inheriting from the default scope after update.

<!--- MC-36419-->

*  An unscoped integration user account can now access a resource through the REST API when resource permissions allow access.

<!--- MC-35975-->

*  Search criteria filters now work as expected for product attributes that are used during the creation of a configurable product. [GitHub-29126](https://github.com/magento/magento2/issues/29126)

<!-- ENGCOM-7785 -->

*  Customer group ID is now validated for POST `/rest/V1/customers` requests. Previously, Magento did not display an error message when you used an invalid `group_id` in these requests. _Fix submitted by Vadim Malesh in pull request [28903](https://github.com/magento/magento2/pull/28903)_. [GitHub-28064](https://github.com/magento/magento2/issues/28064)

<!-- ENGCOM-7611 -->

*  PHP sessions are not created by default for anonymous REST calls. Previously, sessions were started even when unnecessary. _Fix submitted by Maciej Pawłowski in pull request [26032](https://github.com/magento/magento2/pull/26032)_. [GitHub-7213](https://github.com/magento/magento2/issues/7213)

<!-- ENGCOM-7612 -->

*  Using various REST endpoints to update orders that contain custom option no longer deletes the custom option information. Previously, values in `info_buyRequest` were deleted. _Fix submitted by Vadim Malesh in pull request [28483](https://github.com/magento/magento2/pull/28483)_. [GitHub-22431](https://github.com/magento/magento2/issues/22431)

<!-- ENGCOM-7665 -->

*  Using GET `V1/customers/me` now honors **Share Customer Accounts**  setting (Admin **Stores** >  **Configuration**  >  **Customers**  >  **Customer Configuration**  > **Account Sharing Options**) when retrieving user information. _Fix submitted by Pavel Bystritsky in pull request [28213](https://github.com/magento/magento2/pull/28213)_. [GitHub-26089](https://github.com/magento/magento2/issues/26089)

<!-- ENGCOM-7563 -->

*  Address-related extension attributes can be set as data arrays. Previously, Magento threw an error when a POST request that contained  `extension_attributes` was sent to `estimate-shipping-methods`. This bug, which was introduced by a previous commit, affected any extension attribute set on `Magento\Quote\Api\Data\AddressInterface` that were not objects. _Fix submitted by Alexander Menk in pull request [27338](https://github.com/magento/magento2/pull/27338)_. [GitHub-26682](https://github.com/magento/magento2/issues/26682)

<!-- ENGCOM-7618 -->

*  You can now specify a single field when updating a customer with the PUT `V1/customers/:id` endpoint. Previously, the endpoint required you to specify the customer email and other fields that are required to create a customer. _Fix submitted by Vadim Malesh in pull request [28332](https://github.com/magento/magento2/pull/28332)_. [GitHub-21237](https://github.com/magento/magento2/issues/21237)

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

*  The storefront Category page now displays the wish list search widget as expected.

<!--- ENGCOM-7580 7285-->

*  Polyfills for `Map`, `WeakMap`, `FormData`, and `MutationObserver` are now loaded only as needed. _Fix submitted by Dmitry Tsymbal in pull request [28330](https://github.com/magento/magento2/pull/28330) and Mateusz Krzeszowiak in pull request [27618](https://github.com/magento/magento2/pull/27618)_. [GitHub-28377](https://github.com/magento/magento2/issues/28377), [GitHub-28382](https://github.com/magento/magento2/issues/28382)

<!--- ENGCOM-7561-->

*  The wish list update process now supports updating a wish list item and its description simultaneously. _Fix submitted by Eduard Chitoraga in pull request [28222](https://github.com/magento/magento2/pull/28222)_. [GitHub-28261](https://github.com/magento/magento2/issues/28261)

<!--- ENGCOM-7564-->

*  Magento now correctly validates the allowed maximum of wish lists that a shopper can create. _Fix submitted by Eduard Chitoraga in pull request 247 in private repo partners-magento2ee_.

<!--- MC-36250-->

*  Administrators can now configure a configurable product that has been added by a customer to a wish list from a non-default store. Previously, when the customer had also added the configurable product from a non-default store, Magento threw an error.

<!--- ENGCOM-7660-->

*  Added a test for sharing a customer's wish list with more than the allowed number of emails. _Fix submitted by Dmitry Tsymbal in pull request [28641](https://github.com/magento/magento2/pull/28641)_. [GitHub-28720](https://github.com/magento/magento2/issues/28720)

<!--- ENGCOM-7674-->

*  Added a test for deleting items from a customer’s wish list as an Admin user. _Fix submitted by Dmitry Tsymbal in pull request [28632](https://github.com/magento/magento2/pull/28632)_. [GitHub-28721](https://github.com/magento/magento2/issues/28721)

<!--- ENGCOM-7675-->

*  Added a test for disabling wish list functionality. _Fix submitted by Dmitry Tsymbal in pull request [28635](https://github.com/magento/magento2/pull/28635)_. [GitHub-28744](https://github.com/magento/magento2/issues/28744)

<!--- ENGCOM-7580-->

*  Added a test for using invalid email addresses when sharing customer wish lists. `StorefrontShareWishlistEntityTest` has been refactored. `StorefrontCustomerShareWishlistActionGroup` has been deprecated. _Fix submitted by Dmitry Tsymbal in pull request [28330](https://github.com/magento/magento2/pull/28330)_. [GitHub-28377](https://github.com/magento/magento2/issues/28377)

<!--- ENGCOM-7717-->

*  Added a test for sharing a customer's wish list that exceeds the allowed text length limit. _Fix submitted by Dmitry Tsymbal in pull request [28812](https://github.com/magento/magento2/pull/28812)_. [GitHub-28969](https://github.com/magento/magento2/issues/28969)

## Known issues

**Issue**: The new CAPTCHA feature for checkout does not work as expected on the Place Order page when using third-party payment providers. Merchants running Magento 2.3.6 or 2.4.1 who have enabled CAPTCHA protection on the Place Order storefront page will see this error when checking out using a third-party payment provider such as PayPal: `Please provide CAPTCHA code and try again`. **Workaround**: A fix for this issue is now available. See the [Magento Commerce v2.3.6/2.4.1 CAPTCHA in checkout not working](https://support.magento.com/hc/en-us/articles/360051235772) Knowledge Base article. A fix will also be included in our next quarterly patch (Q12021).

**Issue**: Users without administrator privileges cannot currently set up their personal 2FA access. 2FA as implemented in Magento includes two ACL roles. One role affects global system configuration and it is needed only when configuring the system. The second ACL role affects individual user 2FA accounts. An admin user must configure this second type of 2FA ACL. **Workaround**:  After the user has logged in and seen the Access denied screen, they can visit `https://<magento store>/<admin_path>/tfa/tfa/requestconfig/` to force configuration. Note: We do not recommend disabling security settings. However, this workaround is effective only when Admin URL secret keys are disabled.

**Issue**: The **Create an Account** button on the Create New Account page remains disabled if a shopper has entered invalid data. This prevents shoppers from re-attempting to create an account after making an error. **Workaround**: Apply patch `MC-38509`. A fix will also be included in our next quarterly releases (2.4.2, 2.4.1-p1 and 2.3.6-p1), which are scheduled for release in Q1 2021. See the [2.4.1 and 2.3.6 create an account button disabled hotfix](https://support.magento.com/hc/en-us/articles/360051130212) Knowledge Base article.  [GitHub-30513](https://github.com/magento/magento2/issues/30513)

**Issue**: Merchants cannot log in to dotdigital from the Admin in Safari when dotdigital is enabled. See the [It's impossible to login in the dotdigital via admin panel when dotdigital account is enabled](https://support.magento.com/hc/en-us/articles/360050092291) Knowledge Base article.

**Issue**: Vertex address validation does not work during payment when the shopper selects a shipping address that differs from the billing address. The issue will be fixed in Magento 2.4.2. See the [Magento 2.4.1 known issue: Vertex Address Validation message does not disappear after updating address](https://support.magento.com/hc/en-us/articles/360050139631) Knowledge Base article.

**Issue**: Magento displays an empty page when a merchant saves a dotdigital Page Builder form on the Safari browser. **Workaround**: Reload the page to apply your changes. See the [Magento 2.4.1 known issue: empty page after saving dotdigital Page Builder form](https://support.magento.com/hc/en-us/articles/360049819092) Knowledge Base article.

**Issue**: Under certain conditions, Magento automatically signs in customers to previously used Amazon accounts rather prompting them to log in during checkout with Amazon Pay. See the [Magento 2.4.1 known issue: unable to change Amazon account in Google Chrome](https://support.magento.com/hc/en-us/articles/360049814152) Knowledge Base article.

**Issue**: Magento briefly displays an error message on the billing page of the checkout workflow when PayPal Braintree payment and multiple addresses shipment are selected. See the [Magento 2.4.1 known issue: error popping up on Checkout with PayPal Braintree](https://support.magento.com/hc/en-us/articles/360050253211) Knowledge Base article.

**Issue**: Magento displays a non-informative error message when a guest customer tries to place an order with PayPal through Braintree when guest checkout is disabled. See the [Magento 2.4.1 known issue: non-informative error message during guest checkout using Paypal through Braintree](https://support.magento.com/hc/en-us/articles/360050368111) Knowledge Base article.

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

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
