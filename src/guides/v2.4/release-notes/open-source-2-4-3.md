---
group: release-notes
title: Magento Open Source 2.4.3 Release Notes
---

Magento Open Source 2.4.3 introduces enhancements to performance and security plus significant platform improvements. Security enhancements include expansion of reCAPTCHA coverage and inclusion of built-in rate limiting. Core composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x.

This release includes over 280 new fixes to core code and 35 security enhancements. It includes the resolution of almost 290 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in GraphQL.

All known issues identified in Magento 2.4.2 have been fixed in this release.

{:.bs-callout-info}
Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.4.2 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release provides (for example, Magento 2.4.1-p1). Patch 2.4.2-p2 is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.4.2. All hot fixes that were applied to the 2.4.2 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.4.1-p1), see [Install Magento using Composer]({{ page.baseurl }}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release.

### Substantial security enhancements

This release includes 35 security fixes and platform security improvements. All security fixes have been backported to Magento 2.4.2-p2 and Magento 2.3.7-p1.

#### Thirty-three security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Adobe Security Bulletin for a discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

*  **Rate limiting is now built-in** to Magento APIs to prevent distributed denial-of-service (DDoS) attacks. Web APIs now impose restrictions on the size or number of resources that can be requested by a client/user. <!--- MC-35358-->

*  **ReCAPTCHA  coverage has been extended** to include:

   *  Web APIs that have corresponding HTML pages are covered through ReCAPTCHA. (This excludes web APIs that are accessed by integrations.) ReCAPTCHA coverage protects endpoints from spam attacks. When web APIs are accessed by a third-party integration service that uses OAuth, ReCAPTCHA is disabled.<!--- MC-34472-->

   *  The Place Order storefront page and payment-related web APIs. ReCAPTCHA protection for these pages is disabled by default and can be enabled from the Admin. This coverage adds an anti-brute force mechanism to protect stores from carding attacks.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Infrastructure improvements

This release contains enhancements that improve the quality of the framework and the following functional areas:

*  Customer Account

*  Catalog

*  CMS

*  OMS

*  Import/Export

*  Promotions and Targeting

*  Cart and Checkout

*  B2B

*  Staging and Preview

**PayPal Pay Later is now supported** in deployments that include PayPal. This feature allows shoppers to pay for an order in bi-weekly installments instead of paying the full amount at time of purchase. <!--- MC-40556-->

### Platform enhancements

Magento 2.4.3 is not yet compatible with PHP 8.x, but the following platform upgrades bring us closer to future compatibility with PHP 8.x.

*  Core Composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x. <!--- MC-39514-->

*  The KnockoutJS library has been upgraded to v3.5.1 (the latest version). <!--- MC-40694-->

*  The deprecated TinyMCE v3 library has been removed. The `Magento_Tinymce3Banner` module and MFTF tests related to TinyMCE v3.x have been removed from Adobe Commerce. <!--- MC-42199 42170 -->

*  Magento 2.4.3 has been tested and confirmed to be compatible with Redis 6.0.12. (Magento 2.4.x remains compatible with Redis 5.x.)

*  Laminas library dependencies have been upgraded to PHP 8.x-compatible versions. Some redundant dependencies have been removed from the `composer.json` file. **Adobe Commerce 2.4.3 uses Laminas 3.4.0**. <!--- MC-39513-->

### Performance enhancements

This release includes enhancements that decrease indexation time for Product Price and Catalog Rule indexers. Merchants can now exclude a website from a customer group or shared catalog, which reduces the number of records for indexing and improves indexing times.

### Adobe Stock Integration

This release includes Adobe Stock Integration v2.1.1.

### GraphQL

This release adds GraphQL coverage for shared routes. The [route query](https://devdocs.magento.com/guides/v2.4/graphql/queries/route.html) and [RoutableInterface](https://devdocs.magento.com/guides/v2.4/graphql/interfaces/routable-interface.html) support routing requests on product, category, and CMS pages. The `urlResolver` query has been deprecated, and its functionality has been superseded by the `route` query.

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### PWA Studio

For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases). See [Magento compatibility](https://magento.github.io/pwa-studio/technologies/magento-compatibility/) for a list of PWA Studio versions and their compatible Magento core versions.

### Vendor Developed Extensions

See the following articles for updates on features and changes for this release:

*  [Amazon Pay](https://docs.magento.com/user-guide/payment/amazon-pay.html)

*  [Braintree](https://docs.magento.com/user-guide/payment/braintree.html)

*  [dotdigital Engagement Cloud]({{ site.baseurl }}/extensions/vendor/dotdigital/release-notes.html)

*  [Klarna](https://docs.magento.com/user-guide/payment/klarna.html)

*  [Vertex Cloud](https://docs.magento.com/user-guide/tax/vertex.html)

*  [Yotpo Product Reviews]({{ site.baseurl }}/extensions/vendor/yotpo/release-notes.html)

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.3 core code.
### Installation, upgrade, deployment

<!--- MC-41154-->

*  The `bin/magento setup:db:status` command now returns a message indicating that everything is up-to-date after a successful upgrade. Previously, Magento displayed this error: `Declarative Schema is not up to date`.

<!--- MC-40031-->

*  Configuration values are now preserved on form reload when the creation of a new configurable product fails. Previously, values were lost during form reload, and Magento displayed this error: `The value specified in the URL Key field would generate a URL that already exists`.

### Adobe Stock Integration

<!--- MC-39754-->

*  Magento now displays an informative message and a link to the Admin **Stores** > **Configuration** > **Advanced** > **System** page on the Search for Adobe Stock page when **API Key (Client ID)** and **Client Secret** are not set. Previously, Magento displayed this error: `We couldn't find any records` and no link.

### Backend

<!--- MC-40389-->

*  Administrators with restricted access (for example, who are assigned access to one website only) can no longer edit categories set to  Global scope.

<!--- MC-39037-->

*  The generated System report (**System** > **Support** > **System Report**) is now rendered correctly. Previously, report content was misaligned.

<!--- MC-30152 ENGCOM-8625-->

*  Magento now turns off validation on the **Price** field as expected when the **Dynamic price** setting is enabled during bundle product creation. Previously, Magento threw a validation error when you removed a value from the **Price field** when the **Dynamic price** setting was enabled. [GitHub-26214](https://github.com/magento/magento2/issues/26214)

<!--- MC-24840-->

*  Infinite redirects no longer occur when the Admin URL differs from the default website URL in deployments where Magento is configured to be accessible from two URLs.

### Bundle products

<!--- MC-41810-->

*  You can now use the `addProductsToCart` mutation to add a bundle product with more than one checkbox option to a cart.

<!--- MC-41614-->

*  Price indexing of bundle products is now executed using temporary tables, which avoids locking database tables. Previously, Magento used physical tables, which resulted in locked tables.

<!--- MC-41177 magento/magento2#32594-->

*  A bundle item’s price can now be set to 0.00. Previously, when you returned to the edit page after setting the price to 0.00, the price returned to its default value. [GitHub-32383](https://github.com/magento/magento2/issues/32383)

<!--- MC-40603-->

*  Order details for orders that contain bundle products now show the correct price for the bundle products if the price were changed before the order was placed.

<!--- MC-40035-->

*  Bundle product stock status is now updated based on the stock status of its child products. Previously, bundle products were shown as out-of-stock when one option was removed from the product, and the bundle product had two options with the same SKU.

<!--- MC-39276-->

*  An administrator can now change the value for a bundle product’s `Shipment Type` attribute after it has been moved to a different attribute group. Previously, this attribute was always saved with a `Together` value if it were moved to an attribute group other than the default group in the attribute set.

<!--- MC-38900-->

*  The GraphQL `setGuestEmailOnCart` mutation now correctly updates guest email. Previously, the quote and quote address tables were not updated.

<!--- MC-37719-->

*  Adding, removing, or updating a child product to a bundle product through REST API calls now triggers re-indexing as expected. Previously, these actions did not trigger re-indexing, and as a result, the bundle product did not change its stock status until manual re-indexing was performed.

<!--- MC-35725 ENGCOM-8568-->

*  Magento now displays the correct price range for bundle products with tier prices. [GitHub-30284](https://github.com/magento/magento2/issues/30284)

<!--- MC-35638-->

*  Magento now displays the same total price as expected on the shopping cart page and in the shipping step of the checkout workflow after the price of a bundle option has changed.

<!--- MC-32617-->

*  You can now successfully configure a bundle product by accessing it from a customer shopping cart. Previously, the Configure Product page never completely loaded, and you could not save your settings.

### CAPTCHA

<!--- MC-41572-->

*  CAPTCHA now correctly validates data provided by a shopper, and CAPTCHA fields are now displayed as expected after a shopper’s multiple unsuccessful attempts to check out with PayPal Payflow Pro.

<!--- MC-41281-->

*  CAPTCHA validation no longer fails randomly on the payment page of the checkout workflow.

<!--- MC-41001-->

*  Magento now displays CAPTCHA fields as expected after you exceed the number of failed completion attempts. Previously, although Magento prompted you to attempt the CAPTCHA challenge again, it did not display the CAPTCHA fields.

<!--- MC-40359-->

*  CAPTCHA now works as expected on the checkout page. Previously, after a shopper correctly answered a CAPTCHA challenge, the loader on the checkout page never completed, and Magento displayed this error: `captchaData[formId] is undefined`. (This error occurred only when the shopper used the same browser from which they had previously accessed a deployment running Magento 2.3.5-p1.)

### Cart and checkout

<!--- MC-41911-->

*  Magento now takes into account locale-specific decimal locators when converting and updating product quantity in the cart.

<!--- MC-40657-->

*  Magento now displays the Terms and Conditions validation message in the relevant block only when a shopper clicks the **Place Order** button. Previously, Magento displayed this message in the "Apply Discount Code" block whenever a shopper changed payment method in the checkout workflow: `The order wasn't placed. First, agree to the terms and conditions, then try placing your order again`.

<!--- MC-40271-->

*  You are now redirected to the checkout page as expected after adding a bundle product to the cart from a Schedule Update preview and clicking the cart.

<!--- MC-32805-->

*  Shoppers are now redirected to the shopping cart page instead of the product page when they try to update the mini cart for an order that contains deleted items. Previously, shoppers were redirected to the product page.

<!--- MC-39581-->

*  Magento now discards changes to the billing address form on the checkout payment step if the shopper fails to click the **Update** button and returned to the shipping step.

<!--- MC-37807 ENGCOM-8530-->

*  Products with a customizable option `(File)` now include active links as expected throughout the multi-shipping checkout process. Previously, this link was missing.

<!--- MC-37689-->

*  The Admin shopping cart now displays product prices in correct currencies for stores that support multiple currencies. Previously, prices were converted to the specified currency more than once — first, when products were added to the cart from the storefront, and then again when the order was subsequently rendered on the Admin.

<!--- MC-35640-->

*  Shoppers can now add a product to their cart whose Minimum Advertised Price (MAP) exceeds its regular product price.

<!--- MC-35289-->

*  Shoppers can now successfully change their billing address from the checkout workflow when checking out with multiple addresses.

<!--- MC-29335-->

*  All paid payment transactions created by guests are now saved to the database and visible in the Admin as expected. Previously, only a small subset of concurrent orders were saved in the database, and most orders were lost due to timeouts that resulted from database locks.

<!--- MC-23989-->

*  Magento now correctly displays inline welcome messages that contain special characters when a guest places a product in the mini cart. Previously, Magento did not add the product to the mini cart or display the welcome message. [GitHub-32250](https://github.com/magento/magento2/issues/32250)

<!--- MC-41165-->

*  The shipping page of the checkout workflow now successfully loads when in-store delivery is enabled. Previously, Magento threw a JavaScript error and the shipping checkout page did not completely render.

<!--- ENGCOM-9006-->

*  Item resolvers are now optional. Previously, when this argument was mandatory, the checkout process for configurable products and grouped products did not complete.

<!--- ENGCOM-8944-->

*  Magento now displays the Payment & Shipping Information section radio buttons as expected during the Admin re-order workflow.

<!--- MC-39158 ENGCOM-8493-->

*  Magento now correctly applies cart price rules with a cart-level fixed discount when the cart contains a bundle product with multiple options. Previously, the cart price rule was not completely applied to the order.

<!--- MC-40983 ENGCOM-8828-->

*  The **Add to cart** button on the category list view now works as expected.

### Catalog

<!--- MC-36787-->

*  Mass update of **Enable Qty Increments** and **Qty Increments** attributes now works as expected. [GitHub-29544](https://github.com/magento/magento2/issues/29544)

<!--- MC-41575-->

*  Magento no longer throws a JavaScript error after you enable recent products synchronization with the Admin. Previously, Magento displayed this JavaScript error: `Cannot read property 'status' of undefined`.

<!--- MC-41534-->

*  Custom theme layout updates are now applied as expected. Previously, custom theme layout updates were ignored.

<!--- MC-41499-->

*  The product category cache is now cleared as expected by `cron` during `indexer_update_all_views”` execution. Previously, product counts on the Category page after re-indexing were incorrect.

<!--- MC-41422-->

*  Attribute values now remain unchanged when an attribute is not specified in a product update REST API request for a store view. Previously, if an attribute were not specified, Magento reset the attribute value to its default scope value.

<!--- MC-41284-->

*  The Admin products grid (Admin **Catalog** > **Products**) now displays the correct product count when products are filtered by SKU.

<!--- MC-40873-->

*  Magento now displays accurate stock status when a product is added to a CMS page when Category Permissions are enabled and prevents the display of price for the specified customer's group. Previously, all products were shown as out-of-stock regardless of the real stock status.

<!--- MC-40859-->

*  The Advanced Pricing Customer Group Price block price input field now has a minimum width of five digits. Previously, only two symbols were visible in this field on low resolution displays.

<!--- MC-40825-->

*  Magento now successfully deletes a product media image after deleting a product. Previously, the product media image remained in the folder after successful deletion of the product.

<!--- MC-40811-->

*  Page layout now updates as expected when you create or edit a product in the Admin and then create a Schedule Design Update. [GitHub-32007](https://github.com/magento/magento2/issues/32007)

<!--- MC-40773-->

*  A custom product attribute with a value of zero can now be successfully saved as blank. Previously, Magento did not update this value to blank.

<!--- MC-40736-->

*  Custom category layout update files now apply to products as expected. Previously, the update file handle (`catalog_category_view_*`) did not match the product handle. [GitHub-27285](https://github.com/magento/magento2/issues/27285)

<!--- MC-40679-->

*  Sorting has been disabled for the Fixed Product Tax (FPT) column of the Admin products list. Previously, the Products page could not be reloaded after the FPT column had been sorted.

<!--- MC-40443-->

*  The Page Builder products widget preview now works as expected in a multi-website deployment when matching products have a different price on each website.

<!--- MC-40344 ENGCOM-8629-->

*  Sorting by position on product search using GET `/rest/V1/products/?searchCriteria[filterGroups]` now works as expected. Previously, product collection did not have a field `position` value for sorting. [GitHub-31591](https://github.com/magento/magento2/issues/31591)

<!--- MC-40122-->

*  Admin users can now see double spaces in the **Name** and **SKU** fields in the product grid. Previously, Magento collapsed multiple spaces into a single space.

<!--- MC-39869-->

*  Products are now displayed as out-of-stock on the storefront when salable quantity on the Admin is 0. Previously, these products were listed as in stock on the storefront, and Magento displayed an active **Add to cart** button. [GitHub-31117](https://github.com/magento/magento2/issues/31117)

<!--- MC-39809-->

*  Administrators can now add products with customizable options `(File)` to the Items Ordered grid from the Shopping Cart section (Customer's Activities column) of the Admin Customer page. Previously, Magento did not add the item to the list because the value was not formatted correctly before being inserted into `\Magento\Catalog\Model\Product\Type\AbstractType::_prepareOptions`.

<!--- MC-39619-->

*  Magento no longer prompts shoppers to select a product option for a bundled product that has one option only.

<!--- MC-39617-->

*  Magento now displays all subcategories in layout updates (anchor and non-anchor categories) during creation of a new widget.

<!--- MC-39569-->

*  The following indexers are no longer invalidated after you add, remove, or reorder products in a category: `catalog_category_product` and `catalogsearch_fulltext` (and their dependents). Previously, these inadvertent removals triggered full re-indexing of sites. A full re-index is now prevented under these conditions when flat catalog is not enabled.

<!--- MC-39481-->

*  The `product` query no longer overwrites default values for all store views in a multi-store deployment when a product name is updated for one store view only. [GitHub-31083](https://github.com/magento/magento2/issues/31083)

<!--- MC-39470 magento/magento2#31492-->

*  Magento updates the total page count as expected when you change the per page value of the Admin Related Products, Up-Sells, and Cross-Sells list. [GitHub-31059](https://github.com/magento/magento2/issues/31059)

<!--- MC-39444-->

*  Administrators can now add products with two or more customizable options `(File)` to an order by SKU.

<!--- MC-39140-->

*  Magento no longer throws an error when an administrator with restricted permissions adds a Product widget to a CMS page in the Admin. Previously, Magento threw this error when the administrator clicked the **Save** button:  `We are sorry, an error has occurred while generating the content`.

<!--- MC-39134-->

*  Product detail pages now open with the date customizable option populated with the date from the previous order when **Use JavaScript Calendar** is enabled. The custom date option value resolver now falls back to an alternative format if the value is not formatted based on the current configuration. Previously, the custom date option value was empty.

<!--- MC-39104-->

*  Magento now displays only one error in the cart when the product is out-of-stock. Previously, Magento displayed redundant messages. [GitHub-27469](https://github.com/magento/magento2/issues/27469)

<!--- MC-38951-->

*  Image positions are now correct when images are imported into a multi-store view deployment. Previously, images uploaded at a store-view level had undefined (NULL) positions in default scope and other store views. As a result, images were inconsistent both across store views and between storefront and Admin.

<!--- MC-38575-->

*  You can now set the `required_options` and `has_options` bundle attributes while creating or updating a bundle product using the REST `product` query. Previously, these custom attributes were set to 0 (zero) despite efforts to set it to 1 (one).

<!--- MC-38483-->

*  Bundle product data that was previously missing is now included in the staging process. This resolves inconsistencies in product behavior when shoppers purchased a bundle product from the product listing page versus adding it directly from a product page.

<!--- MC-35717  magento/partners-magento2ee#427-->

*  Administrators can now add a product with a customizable option `(File)` to an order by SKU.

<!--- MC-30625-->

*  You can now save a product and price without specifying `type_id`. [GitHub-13639](https://github.com/magento/magento2/issues/13639)

<!--- MC-39024-->

*  Group products are now available on the storefront as expected when a REST `PUT /V1/products/:sku/links` request is used to associate a new child product with a new group product. Previously, products were not correctly indexed after running `bin/magento cron:run`.

<!--- ENGCOM-9010 8947-->

*  You can no longer add a product with a `NULL` value in the SKU field. Previously, you could add the product, but when you tried to edit it from the Admin, Magento threw an error.

### Catalog rule

<!--- MC-39896-->

*  The `products` query now returns the current values when a catalog price rule applies to an item. [GitHub-26738](https://github.com/magento/magento2/issues/26738)

<!--- ENGCOM-8367-->

*  Temporary tables `catalogrule_product__temp` are now deleted after a cart or catalog rule expires, is disabled, or becomes inactive.

### CMS content

<!--- MC-41471-->

*  Large images are now resized as expected during upload when the **Enable Frontend Resize** configuration setting is enabled.

<!--- MC-40663 ENGCOM-8883-->

*  Fixed the error handling for the CMS Page save controller. Previously, when an `Error` object was thrown on the `cms_page_prepare_save` event, Magento passed this object to the `addExceptionMessage` function, breaking its contract because this function expects an `Exception`. This was resolved by adding an error message using the `addErrorMessage` function.

<!--- ENGCOM-8949-->

*  Time zones are now applied in the same way in `\Magento\CatalogRule\Model\Indexer\IndexBuilder::reindexById` and `\Magento\CatalogRule\Model\Indexer\IndexBuilder::reindexByIds`.

### Configurable products

<!--- MC-40719-->

*  Magento no longer duplicates product thumbnails in a product’s image gallery when you click on a product’s configurable options.

<!--- MC-37418-->

*  The configuration pop-up that Magento displays when you are editing a configurable product from a wishlist now closes as expected when you click the **OK** button.

<!--- MC-39878  magento/magento2#31472-->

*  Magento now correctly generates invoices for orders that contain only one configurable product.

### cron

<!--- MC-30804-->

*  Cron cleanup queries have been refactored to reduce or eliminate the following performance issues: `cron` jobs remaining stuck in a pending state, increasingly slow MySQL queries, and an increase in CPU usage.

### Custom customer attributes

<!--- MC-41611-->

*  The **State** field on the storefront Customer Account address book is now loaded as and remains a drop-down page element. The **Submit** button is now disabled until all page elements have been completely loaded. Previously, Magento loaded this field as a textbox before rendering it as a drop-down element, and shoppers could enter and save values in the text field, which later caused an error during checkout.

<!--- MC-40358-->

*  Magento now saves custom customer attribute values for B2B users as expected. Previously, creating a company account that contained custom customer attributes triggered a template error, and Magento did not successfully load the form. Adding an argument to the layout of `company_create_account` resolved this issue.

<!--- MC-40329-->

*  Magento no longer throws an error when you save a customer address attribute with a file attachment in the Admin Customer address field when uploading files. This occurred due to a missing return statement in the controller action. Previously, Magento threw this error: `Something went wrong while saving the file`.

<!--- MC-39354-->

*  REST GET Cart API calls now return correct custom attribute values for billing and shipping addresses. Previously, custom address attributes were displayed incorrectly in the order details page in the My account storefront page and in the Admin.

<!--- MC-24495-->

*  Magento now successfully handles files that contains customer address attributes with input type `file (attachment)`. Previously, Magento threw this error during upload of the attached file: `Something went wrong while saving the file`.

### Customer

<!--- MC-40579-->

*  Filtering by account creation date now produces results that comply with configured timezone settings and that capture all relevant created accounts.

<!--- MC-40502-->

*  The customer grid filter now uses a correct website option for a restricted user if the data was previously cached. Previously, the customer grid filter retrieved website parameters from cache and included incorrect data for restricted users.

<!--- MC-39189-->

*  Magento no longer throws an exception on the Admin Customers page when one website is deleted in a multi-website deployment. Previously, when an administrator tried to access the comprehensive customers list, Magento did not display all customers and displayed this error: `The website with id 2 that was requested wasn't found. Verify the website and try again`.

<!--- MC-38913-->

*  Administrators with permission can now re-assign customers to different websites from the customers Account Information tab.

<!--- MC-39852-->

*  You can now upload a file successfully when creating a customer address attribute with an input type of `(File)`. Previously, when you tried to upload and save a file, Magento threw this error: `Something went wrong while saving the file`.

### Directory

<!--- MC-39520-->

*  Magento no longer throws an exception when a shopper enters an invalid zip/postal code during the shipping section of the checkout workflow. [GitHub-23371](https://github.com/magento/magento2/issues/23371)

### Downloadable

<!--- MC-35779-->

*  Magento now displays links to downloadable products in the New Order email when the order contains both a downloadable product and a configurable product with a downloadable option. Previously, Magento displayed the link to the stand-alone downloadable product but not the link to the configurable product with a downloadable option.

### EAV

<!--- MC-41756-->

*  Customer address attribute date values are now saved in four-digit year instead of two-digit format.

### Email

<!--- MC-39757-->

*  The password reset link on the Admin reset password page now works as expected. Previously, when a custom template was used for the reset admin password page, Magento displayed this message when an administrator clicked the link inside the email: `Your password reset link has expired`. This occurred because the custom email template contained the wrong variable for the user ID.

<!--- MC-41588-->

*  Sending customer email from the Admin now works properly when enabled at the store-view level. Previously, Magento did not send customer emails when email notification settings were enabled at the store-view level but not the global level.

<!--- MC-40950-->

*  Magento now sends email as expected in multi-site deployments where not all websites have enabled asynchronous email sending. Previously, if at least one website had this setting disabled, email was not sent from any website, even when enabled. Invoice, Shipment, and Credit Memo emails had similar issues. However, Order Comments, Invoice Comments, Shipment Comments, and Credit Memo Comments emails were sent successfully. [GitHub-31950](https://github.com/magento/magento2/issues/31950)

<!--- MC-30127 magento/magento2#31455-->

*  Invoices and Invoice PDFs now include the same prices for bundle products as expected. Previously, invoice PDFs included the incorrect price for bundle products. [GitHub-12856](https://github.com/magento/magento2/issues/12856)

<!--- ENGCOM-9021-->

*  String casting has been added to the email template filter method to ensure the return value is a `string`. Previously, when an exception was caught while not in developer mode, Magento returned a `phrase` object. This in turn triggered a fatal `Uncaught TypeError`.

<!--- ENGCOM-8807-->

*  Order confirmation emails are now sent as expected when asynchronous sending is enabled (**Stores**  >  **Configuration**  >  **Sales**  > **Sales Emails**  >  **General Settings**  >  **Asynchronous sending**) on one website in a multi-site deployment.

<!--- MC-18023 ENGCOM-9000-->

*  Magento now logs an error as expected when an exception occurs during email send using the Magento contact form.

### Frameworks

<!--- MC-41712-->

*  Parent classes in the Admin are now checked for docblock annotation along with the original class and inherited interfaces. Previously, because parent classes were not checked, performing any customer-related actions in the Admin that triggered an event resulted in an error. Magento logged this error in the exception log: `report.CRITICAL: Method's return type must be specified using @return annotation.`.

<!--- MC-41192-->

*  Magento no longer throws a fatal error when the Redis server is stopped in a deployment in which Redis page caching is enabled.

<!--- MC-40739-->

*  Magento now honors the **Exclude media folder from backup** setting when backup is enabled with `bin/magento config:set system/backup/functionality_enabled 1`. Previously, the Media Folder was backed up despite this setting because the path to `/magento` was formed incorrectly with a double //.

<!--- MC-40654 ENGCOM-8881-->

*  Magento now translates all translatable strings as expected for the Admin cart page. Previously, translation load happened too late and skipped all observers that were subscribed to controller action pre-dispatch. [GitHub-31849](https://github.com/magento/magento2/issues/31849) ENGCOM-8881

<!--- MC-39776-->

*  Form validation on the Create New Customer Account page now works successfully when the **Login as Customer** enable extension setting is disabled. Previously, Magento threw a JavaScript error.

<!--- MC-39193-->

*  Exception handling for child processes forked by `ProcessManager` has been improved. When an exception occurs now, the main process exits and an error message is displayed only once. Previously, multiple indexer failures were logged and messages displayed. [GitHub-30622](https://github.com/magento/magento2/issues/30622)

<!--- MC-39132-->

*  Global Magento plugins (for example, `webapi_rest` and `graphql` ) are no longer triggered for a new custom Magento area type when the `di.xml` of this area file contains no registered plugins.

<!--- MC-38770-->

*  Exceptions that occur during initialization are no longer cached and now trigger a 500 response code.

<!--- ENGCOM-8232-->

*  The last handler merged into a `communication.xml` file no longer overrides all previously created handlers.

### General fixes

<!--- MC-41194-->

*  Magento now displays the correct number of stars on the My Product Reviews page and on the MyAccount page recent reviews. Previously, Magento applied review stars to only the first review and left the other reviews on the page unstarred.

<!--- MC-40653-->

*  Account links in headers now follow WCAG standards. Previously, account links in headers contained duplicated IDs, which caused WCAG validation to fail.

<!--- MC-39765-->

*  Magento no longer throws system log-generated errors when a guest shopper uses an invalid address. Previously, Magento intermittently displayed this error instead of rendering the page: `No such entity with addressId`. [GitHub-15115](https://github.com/magento/magento2/issues/15115)

<!--- MC-39747-->

*  The image resizing process no longer halts for images in unsupported format. Previously, when `catalog:images:resize` encountered an unsupported image format, the process stopped and Magento displayed this error: `bin/magento catalog:images:resize Unsupported image format`.

<!--- MC-38156-->

*  You can no longer change the scope of the `media_gallery` attribute. Previously, when you changed the scope of the `media_gallery` attribute back to `global`, Magento threw an error.

<!--- MC-36818-->

*  Related products that were added as a scheduled update are no longer displayed on a storefront product page after the end date of the update. [GitHub-469](https://github.com/magento/partners-magento2ee/issues/469)

<!--- MC-33499 magento/partners-magento2ee#446-->

*  Filtering now works as expected on the list of scheduled exports when entity type is selected. Previously, the filter did not work, and Magento threw a JavaScript error. [GitHub-361](https://github.com/magento/partners-magento2ee/issues/361)

<!--- MC-30084 ENGCOM-8674-->

*  Category images are now copied as expected from the `catalog/tmp/category` directory to the `catalog/category` directory when categories are saved using the database storage method. The image row in the `media_storage_file_storage` table now also has the correct `directory_id`. [GitHub-11995](https://github.com/magento/magento2/issues/11995)

<!--- MC-24768-->

*  Merchants are now notified about invalidated caches as expected after submitting changes to the CMS hierarchy. Previously, Magento did not invalidate caches while saving CMS hierarchy.

<!--- MC-24725-->

*  Redundant Ajax requests to the cart section of the shopping cart have been reduced. Previously, Magento did not properly load the cart subtotal, which triggered cart reload again.

<!--- MC-23740-->

*  Added validation for URLs to prevent reserved words from inclusion in URL keys. See [Defining Well-Known Uniform Resource Identifiers (URIs)](https://tools.ietf.org/html/rfc5785)

<!--- ENGCOM-9037-->

*  Magento now throws a 404 error when you try to access a non existing category path. Previously, Magento displayed this error: `Trying to access array offset on value of type bool` on deployments running PHP 7.4.

<!--- ENGCOM-8901-->

*  `nowdoc` has replaced `heredoc` in the `Magento_Backend` store switcher.

<!--- ENGCOM-9017-->

*  Updated the `README.md` template.

<!--- ENGCOM-8685-->

*  Added Argentina, Bolivia, Chile, Ecuador, Guyana, Paraguay, Peru, Suriname, and Venezuela to the `directory_country_region` table.

<!--- ENGCOM-8505-->

*  Added Albania, Denmark, Greece, Iceland, Portugal, and Sweden to the `directory_country_region` table.

## Gift cards

<!--- MC-32651-->

*  Price range validation logic has been added to the gift card creation page. Previously, an administrator could create a card with a minimum value that exceeded the maximum value. [GitHub-493](https://github.com/magento/partners-magento2ee/issues/493)

### Gift message

<!--- MC-38655-->

*  The `setGiftOptionsOnCart` mutation now correctly creates gift messages. [GitHub-388](https://github.com/magento/partners-magento2ee/issues/388)

<!--- ENGCOM-8539-->

*  Administrators are now directly redirected into the requested Admin page after login.  Previously, when an administrator logged in, they were redirected to the Admin dashboard (or whichever page was configured as the startup page) and had to manually navigate to their destination.

### Gift registry

<!--- MC-33057-->

*  **Event date** values are now the same on the storefront and Admin during gift registry creation or editing. Previously, each time you edited and saved the gift registry, Magento adjusted the **Event date** one day backward on both the storefront and Admin. [GitHub-466](https://github.com/magento/partners-magento2ee/issues/466)

### Google Tag Manager

<!--- MC-39072-->

*  The UI component for the billing address on the payment page of the checkout workflow now uses quote address correctly when Google Tag Manager is enabled. Previously, a JavaScript error occurred on the payment page.

### GraphQL

<!--- MC-41885-->

*  The GraphQL `products` query now returns attribute options that are sorted in the same sort order as used on the attribute edit page.

<!--- MC-41473-->

*  The response to the `{ category(id: 2){ children { name children { name } } } }` GraphQL request now includes a correctly sorted category tree.

<!--- MC-41030-->

*  The **CartItemPrices** object now contains the new GraphQL field **fixed_product_taxes**, which returns an array of the fixed product taxes that are applied to a cart item. Previously, fixed product taxes that were applied to a cart item were not included in the cart query.

<!--- MC-40920-->

*  Empty requests to GraphQL now throw response code 200 instead of 500. Previously, the GraphQL parser threw an exception before the query result was generated.

<!--- MC-40379-->

*  Disabled products are no longer included in the GraphQL response when GraphQL is used to link upsell products.

<!--- MC-40262-->

*  Merchants can now use the GraphQL `setShippingAddressesOnCart` method to set billing and shipping addresses for a shopper’s cart when guest checkout is disabled.

<!--- MC-39508-->

*  The `categoryList` query no longer throws an exception when it contains multiple fragments on the `CategoryTree` object. [GitHub-31086](https://github.com/magento/magento2/issues/31086)

<!--- MC-38995-->

*  The GraphQL `product` query now returns the correct customer group prices.

<!--- MC-38822-->

*  The GraphQL `products` query response now sorts aggregations according to product attribute position.

<!--- ENGCOM-9087-->

*  The `addGiftRegistryItems` mutation has been deprecated.

<!--- ENGCOM-8462-->

*  Magento no longer throws type errors during GraphQL queries when product and category URL suffixes contain null values.

### Import/export

<!--- MC-41576-->

*  The Category IDs filter for product entities in the Export page Entity Attributes grid now works as expected.

<!--- MC-41439-->

*  Grouped product stock status now updates as expected to out-of-stock when all children products are out-of-stock.

<!--- MC-41184-->

*  Configurable product stock status is now automatically updated as expected when child product stock status is updated by import. Previously, product stock status was not automatically updated when children products stock status was updated by import.

<!--- MC-41151-->

*  You can now save empty values in a Scheduled Export. Previously, Magento updated empty filter values after export creation or save. Both `no` and `not specified` values were represented by zero in the database, and a value of `not selected` was overridden with `no`.

<!--- MC-41092-->

*  The export process now takes into account user role scope when exporting product, stock sources, and customer entities. Previously, the export process ignored user role scope, which permitted the export of private user role export entities.

<!--- MC-40943-->

*  Magento now sets the product tax class to `None` if a product is imported with `tax_class_name` values `None` or `0`. Previously, if `product tax_class_name` was `None` in the CSV file, Magento created a new tax class `None`, which duplicated the existing tax class. If `product tax_class_name` were `0` in the CSV file, Magento ignored that value, and product tax class did not change after import.

<!--- MC-40898-->

*  Admins can now successfully change the `name` of a bundle product’s `bundle_values` from the Admin. Previously, Magento displayed the product as out-of-stock on the storefront after you changed the name from the Admin. Products were also merged with the same SKU into a single bundle-option section.

<!--- MC-40333-->

*  Magento now takes into account user scope when exporting customer data. Previously, when you tried to export customers, Magento exported customer data from all websites.

<!--- MC-40305-->

*  Magento now removes product relationships between up sell, cross sell, and related products during CSV file import as expected when `__EMPTY__VALUE__` is specified in the CSV file.

<!--- MC-40012-->

*  Exporting custom address data for many customers (Admin **System** > **Export**) no longer routinely results in a memory error. Previously, when exporting custom address data, Magento tried to load all customer data, which resulted in memory depletion, and Magento threw a failure-to-allocate-memory error.

<!--- MC-39977-->

*  Duplicate tier prices are no longer imported during the default Magento CSV import process. Previously, validation was missing to prevent the import of duplicate tier prices, and when duplicate tier prices occurred, merchants could not save products. Merchants also saw this error when they tried to schedule a product change: `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry…`.

<!--- MC-39609  magento/magento2#31397-->

*  All product images are now validated during import. Previously, Magento validated only the first image when a product had multiple images. [GitHub-28236](https://github.com/magento/magento2/issues/28236)

<!--- MC-39483-->

*  You can now delete a region from a customer address as expected during import. Previously, the assigned region did not change when a customer address was imported with an empty region.

<!--- MC-38810-->

*  Products with JSON or HTML content as additional product attributes are now exported correctly to a CSV file. Previously, the CSV file contained overlapped data strings in incorrect fields.

## Index

<!--- MC-39718 ENGCOM-8567-->

*  Process Manager now exits with an error when a child process fails. Previously, Process Manager always exited successfully if the number of functions passed to it (for example, indexer dimensions) was lower than the value of the `MAGE_INDEXER_THREADS_COUNT` environment variable. [GitHub-30964](https://github.com/magento/magento2/issues/30964)

<!--- MC-39272-->

*  Products are now available as expected in storefront search results when linking products using a REST PUT `/V1/products/:sku/links` request when indexers mode is set to **Update On Save**.

<!--- MC-38310 magento/magento2#32693-->

*  The catalog price rule indexer now works as expected when the indexer mode is set to **update on save**.

### Infrastructure

<!--- MC-41445-->

*  The Magento dependency `pelago/emogrifier` has been updated from version 3.1.0 to 5.0.0. This update resulted in the introduction of backwards-incompatible changes to the `Magento\Email\Model\Template\Filter` class. The changed code is executed during Magento email templates rendering. See [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html).

<!--- MC-42212-->

*  Corrected an issue with `\Magento\CatalogInventory\Model\Indexer\Stock\CacheCleaner::getCategoryIdsByProductIds` that prevented saving a new product.

<!--- MC-42199-->

*  The deprecated TinyMCE v3 library has been removed. The `Magento_Tinymce3Banner` module and MFTF tests related to TinyMCE v3.x have been removed from Adobe Commerce.

<!--- MC-41497-->

*  Magento no longer throws an `Invalid header value detected` error on the Contact us form when a shopper enters an email address that contains French diacritic marks (such as "é", “è”). Magento now converts UTF-8 letters in the user name to ASCII encoding. Previously, UTF-8 letters were not converted to ASCII encoding in the unique section of the email address.

<!--- MC-39947-->

*  Magento no longer throws a PHP fatal error when a plugin is added to a parent class. [GitHub-31291](https://github.com/magento/magento2/issues/31291)

<!--- ENGCOM-9012-->

*  Updated the README.md files for these modules: `Magento_Msrp`, `Magento_MsrpConfigurableProduct`, `Magento_MsrpGroupedProduct`, `Magento_Multishipping`, `Magento_MysqlMq`.

<!--- magento/partners-magento2ee#501-->

*  `phpcpd` has been updated to v6.0.3 for PHP 8 compatibility.

<!--- ENGCOM-9073-->

*  `ramsey/uuid` has been updated for compatibility with PHP 8.0.

<!--- ENGCOM-8997-->

*  `colinmollenhour/php-redis-session-abstract` has been updated to v1.4.4 for PHP 8 compatibility.

<!--- ENGCOM-8951-->

*  Removed `CliCacheFlushActionGroup` usage (or changed value) for `Wishlist`, `Swatches`, `Translation`, `UrlRewrite`, `Vault`, and `Weee` modules.

<!--- ENGCOM-8889-->

*  Removed usage or changed value of the `CliIndexerReindexActionGroup` action group for the following modules: `Elasticsearch`,  `Elasticsearch6`,  `LayeredNavigation`,  `LoginAsCustomer`,  `Newsletter`,  `UrlRewrite`,  `Weee`, `Wishlist`.

<!--- ENGCOM-8893-->

*  Removed `CliCacheFlushActionGroup` usage for `ConfigurableProduct`, `CatalogUrlRewrite`, `Config`, `Contact`, and `Cookie` modules.

<!--- ENGCOM-8893-->

*  Removed `CliCacheFlushActionGroup` usage (or changed value) for the `Checkout`, `CurrencySymbol`, and `Customer` modules.

<!--- ENGCOM-9001-->

*  Removed `CliCacheFlushActionGroup` use in these modules: `Downloadable`, `Elasticsearch`,`Elasticsearch6`,`Fedex`,`Indexer`,`LayeredNavigation`,`LoginAsCustomer`,`Msrp`, and `Multishipping`.

<!--- ENGCOM-8668-->

*  Removed use of obsolete property `$_isScopePrivate` throughout the code base.

<!--- ENGCOM-8551-->

*  Page layouts are no longer hard-coded in  `Magento\Widget\Block\Adminhtml\Widget\Instance\Edit\Chooser\Container`.  As a result, the `getPageLayouts()` function now returns the actual list of page layouts declared by the different modules as expected. Previously, it returned only hard-coded layouts.

<!--- ENGCOM-8509-->

*  The `composer.lock` file has been updated to the latest version of the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/releases/tag/v60).

<!--- ENGCOM-9016-->

*  The `composer.lock` file has been updated to match the dependencies listed in the `composer.json` file, including a dependency upon the `web-token/jwt-framework` package.

<!--- ENGCOM-9015 -->

*  Added a missing dependency on the `web-token/jwt-framework` package to the `magento/module-jwt-framework-adapter`.

### Media Gallery

<!--- MC-41728-->

*  `bin/magento media-gallery:sync` now fails as expected when processing PNG images that lack XMP information.

<!--- ENGCOM-8814-->

*  Entries in the `catalog_product_entity_media_gallery` table are removed as expected when related products are deleted.

### MFTF

New features and MFTF core bug fixes are described in the [Magento Functional Testing Framework Changelog](https://github.com/magento/magento2-functional-testing-framework/blob/develop/CHANGELOG.md).

<!--- ENGCOM-8496-->

*  The 'indexer:reindex', 'cache:flush' commands and usage of the `AdminReindexAndFlushCache` action group has been removed from tests to improve execution for the following modules: `Bundle`, `Catalog`, `CatalogRule`, `CatalogRuleConfigurable`, `CatalogUrlRewrite`, `Downloadable`, `Indexer`, `Paypal`, and `Sales`.

#### Refactored tests

The following tests have been refactored to improve execution time:

`AdminOrdersReleaseInUnholdStatusTest`  <!--- ENGCOM-8592—-->

`AdminMassOrdersUpdateCancelPendingOrderTest` <!--- ENGCOM-8602-->

`StorefrontConfigurableProductBasicInfoTest`  <!--- ENGCOM-8711-->

`AdminConfigDefaultProductLayoutFromConfigurationSettingTest`  <!--- ENGCOM-8891-->

`AdminCheckDashboardWithChartsTest` <!--- ENGCOM-8897-->

`AdminMassOrdersHoldOnCompleteTest`  <!--- ENGCOM-8897-->

`AdminMassOrdersCancelProcessingAndClosedTest`  <!--- ENGCOM-8670-->

`AdminPanelIsFrozenIfStorefrontIsOpenedViaCustomerViewTest`  <!--- ENGCOM-8601-->

`AdminValidateShippingTrackingNumberTest`  <!--- ENGCOM-8593-->

`AdminMassOrdersHoldOnPendingAndProcessingTest`  (replacement for deprecated `AdminMassOrdersHoldOnPendingAndProcessingTest`) <!--- ENGCOM-8669-->

`AdminSortingByWebsitesTest`  <!--- ENGCOM-8583-->

`AdminMassUpdateProductAttributesMissingRequiredFieldTest` <!--- ENGCOM-8511-->

`AdminCreateOrderAddProductCheckboxTest` <!--- ENGCOM-8492-->

`AdminMassOrdersCancelCompleteAndClosedTest` <!--- ENGCOM-8538-->

`ProductsQtyReturnAfterOrderCancelTest` <!--- ENGCOM-8506-->

`AdminApplyTierPriceToProductWithPercentageDiscountTest` <!--- ENGCOM-8522-->

`AdminUpdateSimpleProductWithRegularPriceInStockEnabledFlatTest`  <!--- ENGCOM-8533-->

`AddOutOfStockProductToCompareListTest`  <!--- ENGCOM-8547-->

`AdminCreateInvoiceTest` <!--- ENGCOM-8581-->

`AdminMassProductPriceUpdateTest` <!--- ENGCOM-8587-->

`CancelOrdersInOrderSalesReportTest`  <!--- ENGCOM-8591-->

`AdminCheckingCreditMemoTotalsTest` <!--- ENGCOM-8606-->

`AdminUpdateSimpleProduct` <!--- ENGCOM-8536-->

#### Action groups

Repetitive actions have been replaced with action groups in these tests:

`AdminCheckConfigurableProductPriceWithDisabledChildProductTest`  <!--- ENGCOM-8574-->

`AdminCreateProductDuplicateUrlkeyTest` <!--- ENGCOM-9007-->

`AdminUpdateSimpleProductWithRegularPriceInStockVisibleInCatalogOnlyTest`  <!--- ENGCOM-9041-->

`AdminUpdateSimpleProductWithRegularPriceInStockDisabledProductTest` <!--- ENGCOM-9002-->

`AdminConfigurableProductCreateTest` <!--- ENGCOM-9013-->

`AdminConfigurableProductCreateTest` <!--- ENGCOM-9013-->

`AdminConfigurableProductRemoveAnOptionTest` <!--- ENGCOM-9038-->

`AdminCreateSimpleProductZeroPriceTest`  <!--- ENGCOM-9040-->

`AdminCreateVirtualProductFillingRequiredFieldsOnlyTest` <!--- ENGCOM-9003-->

`AdminCreateSimpleProductNegativePriceTest` <!--- ENGCOM-900-->

`AdminUpdateSimpleProductWithRegularPriceInStockNotVisibleIndividuallyTest`  <!--- ENGCOM-9011-->

#### New action groups

`AdminFillAccountInformationOnCreateOrderPageActionGroup` <!--- ENGCOM-8495-->

`AssertLinkActionGroup` <!--- ENGCOM-8457-->

`AssertAdminProductIsAssignedToCategoryActionGroup` <!--- ENGCOM-8534-->

`AdminSelectAttributeSetOnEditProductPageActionGroup` <!--- ENGCOM-8566-->

`StorefrontHoverProductOnCategoryPageActionGroup` <!--- ENGCOM-8575-->

`AssertStorefrontCartDiscountActionGroup` <!--- ENGCOM-8431-->

`AdminClickRefundOfflineOnNewMemoPageActionGroup` <!--- ENGCOM-8580-->

`AdminClickAddNewPageOnPagesGridActionGroup`  <!--- ENGCOM-8613-->

`AdminClearFiltersOnGridActionGroup` <!--- ENGCOM-8604-->

`StorefrontGuestCheckoutProceedToPaymentStepActionGroup` <!--- ENGCOM-8582-->

`AdminGoToOrderStatusPageActionGroup`  <!--- ENGCOM-8615-->

`AdminClickInsertWidgetActionGroup` <!--- ENGCOM-8614-->

`ClickPlaceOrderActionGroup` <!--- ENGCOM-8671-->

`AdminOpenCMSPagesGridActionGroup`<!--- ENGCOM-8682-->

`SaveCmsPageActionGroup` <!--- ENGCOM-8683-->

#### Deleted action groups

`CliIndexerReindexActionGroup` <!--- ENGCOM-8525-->
#### Other

Removed usage of `CliIndexerReindexActionGroup` from tests to improve execution time for the `Catalog` module. <!--- ENGCOM-8546—>

### Newsletter

<!--- ENGCOM-8948 MC-40885-->

*  Magento no longer sends newsletter email  to a customer who has been unsubscribed from the newsletter in the time period between newsletter queue creation and the sending of the newsletter.

<!--- ENGCOM-8675-->

*  Magento now honors newsletter enablement settings (**Stores**  >  **Settings**  >  **Configuration**  >  **Customers**  >  **Newsletter**  >  **General Options**). Previously, these settings were always tried from the default scope in multi-store deployments.

<!--- ENGCOM-8551-->

*  The REST call GET `/V1/customers/search` now returns correct information for customers that are subscribed to multiple newsletters.

### Payment methods

<!--- MC-41525-->

*  Magento now renders payment blocks on `frontend` regardless of the area from which the email was sent. (The current area is now emulated as `frontend` before the payment block is rendered.) Previously, payment blocks were rendered in the area from which the email was sent. As a result, whether sales email was triggered from the Admin or by the REST API, URLs for assets attempted to load them from the wrong area (`webapi_rest` or `adminhtml`).

<!--- MC-40810-->

*  Magento now sends the link for a downloadable product to the email address that is specified during checkout. Previously, when a guest shopper used PayPal Express Checkout and entered different email addresses to submit the order and to check out, Magento sent the downloadable product link to the first address.

<!--- MC-38051-->

*  Magento now displays an accurate value for available store credit on the Payment Method page in deployments that support multiple currencies.

<!--- MC-37820-->

*  The payment methods list is now updated as expected when a guest shopper changes an order’s shipping address to a different country during checkout. Previously, changing billing address did not trigger an update of the possible payment methods.

#### PayPal

<!--- MC-39895-->

*  Shoppers can now successfully check out a PayPal Payflow Pro order with a shipping address that contains special characters. Previously, Magento declined payment for these orders.

<!--- MC-39861-->

*  Shoppers are now redirected back to the order success page after a successful payment using PayPal. Previously, shoppers were redirected to a blank page because session data was lost.

### Performance

<!--- MC-41647-->

*  The performance of Admin SKU search on large catalogs has improved. Query optimizer hints now force index usage during query execution.

<!--- MC-41440-->

*  The performance of the  `catalog_product_alert` cron process when running on large tables (several million rows) has been improved. Previously, `catalog_product_alert` loaded all product alerts, which caused an out-of-memory exception.

### Pricing

<!--- MC-41767-->

*  Magento now correctly updates the price of a product with grouped prices when a shopper updates product quantity on the storefront. [GitHub-32669](https://github.com/magento/magento2/issues/32669)

<!--- MC-39282-->

*  Bundle products can now be saved when products have been assigned a tier price and `Magento\Framework\Api\ExtensibleDataObjectConverter` is used to convert product data. Previously, when `Magento\Framework\Api\ExtensibleDataObjectConverter` was used to convert product data to an array when a product was saved, Magento did not save the product and displayed this error: `Notice: Undefined index: price in app/code/Magento/Catalog/Model/Product/Type/Price.php on line 382.`

<!--- MC-36811-->

*  Scheduled price updates are now applied to products already in a shopper’s cart. [GitHub-356](https://github.com/magento/partners-magento2ee/issues/356)

<!--- MC-24693-->

*  Tier price is now applied to a product as expected when quantity increments are enabled and decimal inventory is less than 1. Previously, minimal tier price quantity was set to 1.

### Product video

<!--- MC-39755-->

*  You can now use the **Add Video** button (Admin **Catalog** > **Products**) to consecutively add several videos. Previously, video fields retained the details of the previous video.

<!--- MC-40817-->

*  Entering full-screen mode for a product video on a product page now works as expected on mobile devices. Previously, entering full-screen mode caused the video to pause before exiting full-screen mode.

<!--- MC-39759-->

*  The navigation arrow buttons (**Next** and **Prev**) are now visible as expected on storefront product videos.

<!--- MC-40463-->

*  Merchants can now add Vimeo videos using the **Insert video** button on the product page as expected. Previously, Magento displayed a 404 error. [GitHub-31753](https://github.com/magento/magento2/issues/31753)

### Quote

<!--- MC-39531-->

*  The `/V1/guest-carts/examplecartid/items` call now returns the requested store view. Previously, it returned the first store view in the store, not the requested one.

<!--- MC-33893 ENGCOM-8992-->

*  You can now configure whether to send an invoice. Previously, invoice sending was not configurable, and Magento always sent an invoice after it was created. Invoice and order emails were both sent in the scope of one observer. Separate observers now govern the sending of order email and invoice email. [GitHub-27656](https://github.com/magento/magento2/issues/27656)

### Reports

<!--- MC-39737-->

*  The Last Review date on Admin **Reports** > **Reviews** > **By Products** now displays the correct review date. Previously, Magento displayed the product creation date instead of the review date.

### Reviews

<!--- MC-40116-->

*  Product review rating stars are now correctly calculated in the Review Details section of the My Account page.

<!--- MC-39763-->

*  The Average Product Rating and Product Ratings sections of the product review details page now render correctly. Previously, the review ID was not set when Magento calculated the storefront rating, and the product review template plate was not properly rendered.

<!--- MC-36149-->

*  The **Be the first to review this product** link now changes as expected to a review count after an administrator approves a review.

<!--- ENGCOM-8501-->

*  Administrators can now sort product reviews on the Product Reviews section of the product edit page as expected.

<!--- MC-41003  magento/magento2#32259-->

*  Reviews are now saved with the correct store ID after an administrator approves and saves the review from a different domain than the store.

### Rewards

<!--- MC-39820-->

*  Magento now updates the payment method list when a shopper checking out with multiple addresses and either checks or unchecks the **Store Credit (Reward Points)** option.

### Sales

<!--- MC-39796-->

*  Admin users can now place orders for out-of-stock items when **Backorders are allowed** is enabled (**Stores** > **Configuration** > **Catalog** > **Inventory** > **Product Stock Options**). Previously, Magento threw an error.

<!--- MC-42280-->

*  Shoppers can now find an order on the Orders and Returns page when the last name ends with a white space.

<!--- MC-41438-->

*  Invoices are now created with the correct grand total when a cart price rule assigning a 100% discount is applied to an order that is also subject to catalog product and discount taxes and that qualifies for free shipping. Previously, the order had the correct price, but the invoice did not.

<!--- MC-40384-->

*  Filtering orders by date now returns accurate results. Previously, Magento did not return an order that was placed after 00:00 UTC when you filtered orders by order date.

<!--- MC-40030-->

*  The credit memo grid now displays the correct currency symbol when **Website** scope is used for a **Price** attribute in a multi-store deployment.

<!--- MC-40013-->

*  Payment methods radio buttons no longer disappear on the Payment & Shipping Information section of the checkout workflow after the Admin Create New Order page is reloaded. [GitHub-32106](https://github.com/magento/magento2/issues/32106)

<!--- MC-39891-->

*  Arabic text is now displayed correctly in invoices.

<!--- MC-39864-->

*  Magento now calculates partial credit memo tax totals correctly for credit memos that are based on either an order or an invoice in stores that deploy PayPal Payment Pro as a payment gateway. Previously, for orders with multiple invoices, Magento applied the whole tax of that order for partial invoice cancellation in the credit memo.

<!--- MC-39521 ENGCOM-8528-->

*  Magento no longer creates random database deadlocks when sending new order emails to customers. Previously, deadlocks occurred because Magento saved the entire object and its related objects instead of updated SQL columns. Magento displayed this type of error: `SQLSTATE[40001]: Serialization failure: 1213 Deadlock found when trying to get lock; try restarting transaction`.[GitHub-31090](https://github.com/magento/magento2/issues/31090)

<!--- MC-39353-->

*  The storefront Order detail page now displays the correct shipped product quantity. Previously, product quantities were incorrect because the template for the Order Shipment page rendered **Qty Shipped** as an `int`. This has been changed to `float`.

<!--- MC-39026-->

*  Magento no longer emails copies of an order invoice when the Invoice **Email Copy of Invoice** button is unchecked. Previously, Magento sent email to **Customer** and **Send Invoice Email Copy To**. [GitHub-28511](https://github.com/magento/magento2/issues/28511)

<!--- MC-38973-->

*  Magento no longer creates duplicate address entries for a customer account when creating a new order from the Admin for an existing customer. The **Save in Address Book** check box has been renamed to **Add to Address Book** and is now unchecked in the Admin by default.

<!--- MC-38834-->

*  Magento now uses the logo that has been uploaded in the **Logo for HTML Print View** settings when shoppers print an order from their account. Previously. Magento displayed the LUMA logo instead of the uploaded logo.

<!--- MC-38625-->

*  The pager of order items on the storefront now works as expected when item count exceeds 20. Previously, the pager took into account child products, and the total count was incorrect.

<!--- MC-23915 ENGCOM-8713-->

*  Magento now displays the correct currency symbols for subtotal and shipping and handling values on Order page and Credit Memo page grids. [GitHub-22662](https://github.com/magento/magento2/issues/22662)

<!--- ENGCOM-8486-->

*  Administrators can now successfully add a product to an order from the Admin. Previously, when the administrator clicked the **Add selected products to order** button, Magento displayed the spinning load icon, and the page hung.

### Sales Rule

<!--- MC-40671-->

*  Magento now applies cart price rules with **Maximum Qty Discount is Applied To** or **Discount Qty Step (Buy X)** conditions correctly when multiple cart price rules are applied to the shopping cart. Previously, if a cart price rule with **Maximum Qty Discount is Applied To** or **Discount Qty Step (Buy X)** was applied after another cart price rule, the total discount was reduced to the value configured for **Maximum Qty Discount is Applied To** or **Discount Qty Step (Buy X)** times the product price.

<!--- MC-39827-->

*  The Coupon report now accurately reflects coupon activity in deployments where a split database is implemented.

<!--- MC-39477-->

*  Cart price rules that contain the condition Category **IS NOT** are now applied as expected to configurable child/simple products that are not assigned to a category but whose parent products are assigned.

<!--- MC-39034-->

*  The GraphQL `cart` query now returns the correct grand total for the billing step of a cart when a coupon is applied to the order.

### Search

<!--- MC-41138-->

*  The category page no longer contains these duplicate HTML element IDs: `modes-label`, `mode-list`, `toolbar-amount`, `sorter`, `limiter`.

<!--- MC-40981-->

*  Partial word search results no longer include unexpected or irrelevant matches, and searches produce consistent results on both the storefront and Admin. Magento now uses a different analyzer without a stemmer for partial word searches. Previously, search results displayed products that did not include search keywords. (The default analyzer previously included a stemmer, and because the same analyzer was used at search time for partial word search, the search result could produce unexpected or irrelevant matches.)

<!--- MC-40715-->

*  Quick search now returns results if the search query has multiple words and the product name is configured as not searchable. Previously, if the product name is configured as not searchable, Magento threw a query exception on search queries with multiple words.

<!--- MC-40672-->

*  Search results now include the `weight` attribute as expected when it is configured as searchable.

<!--- MC-40409-->

*  Magento no longer throws an error when you view an empty category page with Elasticsearch enabled. Instead, it renders the page as expected and displays an informative message. Previously, an empty full-text index triggered an exception on a category page.

<!--- MC-40376-->

*  The search field autocomplete feature now works as expected if a shopper clicks outside the search field after beginning her search. Autocomplete suggestions now reappear when the shopper resumes typing. Previously, Magento did not display autocomplete suggestions and clicking in the search box did not make the search suggestions visible again (although typing additional letters did).

<!--- MC-34217-->

*  Searching for a product based on its full or partial SKU in Advanced Search now returns the expected product.

<!--- MC-31395-->

*  Layered navigation filters now display accurate product counts. Previously, product count values from Elasticsearch were not filtered by catalog permissions.

<!--- MC-23881 ENGCOM-8618-->

*  Elasticsearch no longer throws an error when the category URL page parameter exceeds the pagination. [GitHub-23843](https://github.com/magento/magento2/issues/23843)

<!--- MC-24033  magento/magento2#3274-->

*  You can now add a custom Elasticsearch field mapper to `Magento\Elasticsearch\Model\Adapter\FieldMapper\Product\FieldProvider\FieldName\Resolver\CompositeResolver`.

### Shipping

<!--- MC-41464-->

*  Magento now updates product price as expected when a shopper navigates back to the cart page after deleting a product during checkout with multiple addresses.

<!--- MC-41343-->

*  Magento now displays the correct adjusted shipping price when some items in the cart qualify for free shipping. Previously, when a subset of items in the cart qualified for free shipping, Magento did not adjust the shipping price and displayed the full shipping price to the shopper.

<!--- MC-41186-->

*  Admin users who are restricted to a specific website can now create a shipment for an order placed on same website. Previously, Magento threw this exception when an Admin user who lacked permission to the default store view tried to ship an order that was placed in a store view that the Admin user has access to: `Notice: Undefined offset: 1 in /app/code/Magento/Catalog/Model/Product/Attribute/Backend/GroupPrice/AbstractGroupPrice.php on line 293`.

<!--- MC-41069-->

*  Magento now takes into account relevant cart price rule discounts when determining whether an order meets conditions for free DHL shipping.

<!--- MC-40702-->

*  Shipping labels now use base currency as expected instead of order currency for stores that support multiple currencies when an order is placed in a non-base currency.[GitHub-31891](https://github.com/magento/magento2/issues/31891)

<!--- MC-40678-->

*  Magento now displays the correct order subtotal when a shopper returns to the cart page during checkout after navigating away from the multi-shipping page. [GitHub-31889](https://github.com/magento/magento2/issues/31889)

<!--- MC-40541 magento/magento2#31841 -->

*  Editing billing information during Admin order creation no longer changes shipping information for customers with different default shipping and billing addresses. [GitHub-31786](https://github.com/magento/magento2/issues/31786)

<!--- MC-37385 ENGCOM-8578-->

*  Magento no longer unchecks the **Append Comments** checkbox when a shopper clicks **Get shipping methods and rates** and selects a shipping method when creating an order from the Admin.

<!--- MC-36425-->

*  Shoppers can now use the Back browser button to return to the Select Shipping Method page while checking out an order with multiple addresses. Previously, Magento displayed a corrupted Select Shipping Method page. [GitHub-30268](https://github.com/magento/magento2/issues/30268)

<!--- ENGCOM-9096-->

*  Flat rate shipping method charges no longer become zero when a cart price rule is applied during checkout.

<!--- MC-40021 ENGCOM-8983-->

*  Product quantity now remains unchanged as expected after a shopper changes quantity on the Ship to multiple address address page and clicks the browser Back button.

<!--- ENGCOM-9096-->

*  Flat rate shipping method charges no longer become zero when a cart price rule is applied during checkout. [GitHub-21832](https://github.com/magento/magento2/issues/21832)

### Staging

<!--- MC-40850-->

*  Merchants can now successfully save a downloadable product with a linked sample from the downloadable product page after creating a future staging update with an end date. Previously, Magento did not save the product and displayed this message: `The downloadable sample isn't related to the product. Verify the link and try again`.

<!--- MC-40588-->

*  Catalog price rules now apply as expected to products with undefined attribute values. Previously, discounts that were created through a catalog price rule were not applied to products with undefined attributes. [GitHub-461](https://github.com/magento/partners-magento2ee/issues/461)

<!--- MC-40283-->

*  Catalog rules now work as expected in multi-website deployments with stores in different timezones. Previously, Magento applied or deactivated catalog rules on all websites at one time.

<!--- MC-40054-->

*  Tier prices are no longer removed when a schedule update is created for a specific website.

<!--- MC-39784-->

*  You can now save a product from the Downloadable Product page after creating a future staging update with an end date. Previously, Magento did not save the product and displayed this message: `The downloadable link isn't related to the product. Verify the link and try again`. [GitHub-474](https://github.com/magento/partners-magento2ee/issues/474)

### Store

<!--- MC-40538-->

*  Magento no longer treats a string of `0` as an empty value when displaying a store home page. Previously, Magento treated an integer value at the start of a request path as a store ID, which had unintended effects on SEO.

<!--- MC-40313-->

*  Plugins for `\Magento\Framework\App\ActionInterface` under `lib/internal/Magento/Framework/App/Action/Plugin` have been removed to keep with the guideline that plugins should be used to customize behavior of one module from another module. [GitHub-28050](https://github.com/magento/magento2/issues/28050)

<!--- MC-24772-->

*  Magento now displays this message when you try to select `Website` as default when `Store View` is disabled during website creation: `Please enable your Store View before using this Web Site as Default`. Previously, the website crashed, and Magento did not display an alert.

### Tax

<!--- MC-39571-->

*  Magento now takes into account hidden tax during validation of the minimum order amount.

<!--- MC-38025 ENGCOM-8612-->

*  Magento now displays Fixed Product Taxes (FPT) as expected when a shopper navigates back to shopping cart and proceeds to checkout after adding bundle products to the cart. [GitHub-30250](https://github.com/magento/magento2/issues/30250)

<!--- MC-37657 magento/magento2#31850-->

*  Magento now pre-fills the **VAT Number** input fields for both the billing and shipping addresses of the Address Information section of the Admin new order page with saved VAT numbers when an administrator creates an order for an existing customer. [GitHub-31846](https://github.com/magento/magento2/issues/31846)

<!--- ENGCOM-8617 magento-engcom/magento2ee#558-->

*  Magento now displays a  **VAT Number**  field on the customer registration page  when `customer/create_account/vat_frontend_visibility` is enabled.

### Test

<!--- MC-41393-->

*  Test environments have been upgraded to Redis 6.0.12.

<!--- ENGCOM-8529-->

*  Removed `CacheCleaner::cleanAll();` from integration tests.

<!--- ENGCOM-8898-->

*  Added a test for this scenario: Admin users can edit a customer account when the customer is subscribed to a queued newsletter.

### Theme

<!--- MC-41474-->

*  The customer login page no longer displays this message when the **Move JS code to the bottom of the page** setting (**Store** > **Configurations** > **Advance** > **Developer** > **JavaScript Settings**) and cookies are both enabled: `The store will not work correctly in the case when cookies are disabled`.

<!--- MC-40982-->

*  Account links in headers now follow WCAG standards. Previously, account links in headers contained duplicated IDs, which caused WCAG validation to fail.

<!--- MC-40278-->

*  Magento now prioritizes store configuration for a store logo image over layout configuration. Previously, the size of logo images was fixed and did not vary by store.

<!--- MC-35227-->

*  Magento now displays page elements consistently on storefront pages that use standard Magento themes. Previously, not all styles were applied in Blank theme, so not all page elements were displayed in pages using this theme (for example, no magnifier icon was present in the My Orders page search field).

### Translation and locales

<!--- MC-23553-->

*  Brackets that are added to the strings are no longer escaped when inline translation is configured. Previously, the `escapeHtmlAttr` method converted the brackets into HTML entity codes.

<!--- ENGCOM-8694-->

*  Untranslatable phrases in the Admin are now translatable. (This PR contributes to ongoing efforts to make all Admin strings localizable.) [GitHub-11175](https://github.com/magento/magento2/issues/11175)

### UI

<!--- MC-41784-->

*  The Magento Admin footer now displays the correct product version.

<!--- MC-41067-->

*  Pagination for sources is now present as expected during Admin shipment creation.

<!--- MC-40240-->

*  The product grid filter now works correctly when you use custom date attributes to filter products and the Admin user locale is `en_GB`.

<!--- MC-39279-->

*  Pinch-to-zoom gestures now work as expected in the product page image gallery magnifier on iOS devices.

<!--- MC-38787-->

*  Pagination of the Admin product grid search results now starts at page one for each search as expected.

<!--- MC-38423-->

*  Anomalies with the display of the shopping cart when zoomed have been resolved. Previously, display elements overlapped when this page was zoomed.

<!--- MC-38226-->

*  The order review page displayed during checkout with PayPal Express Checkout now loads successfully. Previously, the template contained the unused **Update delivery method** button, which was only partially hidden by the script during page rendering.

<!--- MC-37941-->

*  Rating stars and review text in the Customer Reviews section of the product page are now properly spaced when lengthy rating names are present.

<!--- MC-37688-->

*  Options are now displayed as expected in the Actions drop-down list on the Archive Invoices, Shipments, and Credit Memos pages.

<!--- MC-23729  magento/magento2#31549-->

*  Magento now displays a correct time value when the `datetime` component `timeOnly` option is set to **yes**. [GitHub-23157](https://github.com/magento/magento2/issues/23157)

<!--- ENGCOM-8514 -->

*  You can now remove a layout update after creating a new widget on Admin **Content** > **Widgets**.

<!--- ENGCOM-8502 MC-35716-->

*  The **Remove Layout Update** button now works as expected on any layout you have added from Admin **Content** > **Widgets**. Previously, this button did not work on any layout other than the first selected when adding multiple layouts.

### URL rewrites

<!--- MC-41550-->

*  Product URL rewrites for a specific website in a multi-site deployment are now generated as expected after products are assigned to a website by bulk update.

<!--- MC-40780 magento/magento2#32598-->

*  Magento now correctly generates the URL path for child categories when the **Use Default Value** checkbox for the URL key is enabled for the parent category. Previously, moving a category in the hierarchy resulted in an incorrect `url_path` value when using different URL keys in a multi-store view deployment. [GitHub-16202](https://github.com/magento/magento2/issues/16202)

<!--- MC-40371-->

*  Magento now updates the `url_path` of the category that is assigned to all store scope when you move a category in the category hierarchy. Previously, moving a category in the hierarchy resulted in an incorrect `url_path`.

<!--- MC-39463-->

*  URL redirects that are created from the Admin using a custom URL now work successfully. Previously, GraphQL cached the response from a GraphQL `urlResolver` query and returned the old value after the URL rewrite update.

<!--- MC-38931  magento/magento2#31106-->

*  Product URL rewrites are now removed as expected when a product is removed from a website. [GitHub-24184](https://github.com/magento/magento2/issues/24184)

### User

<!--- MC-40777-->

*  You can now save an effective new user role (Admin **System** > **Permissions** > **User Roles**) with the entire `Catalog` tree selected excluding `Edit Product Design` ( **Catalog** > **Inventory** > **Products** > **Edit Product Design**). Previously, Magento did not save product changes that were made by a user in this role and displayed this error: `Not allowed to edit the product's design attributes`.

<!--- MC-38442-->

*  Magento now uses the correct custom email template when generating email for new Admin users. Previously, Magento used the old default template, which omitted the administrator’s first and last names.

<!--- MC-38122-->

*  Magento now uses the correct email template when sending email to new users. Previously, Magento used the default template even when a custom template was selected.

### VersionCMS

<!--- MC-39953-->

*  Magento now applies the correct theme to a CMS page after you change its layout. Previously, Magento changed the assigned theme to Luma after you saved your layout changes, no matter which theme was assigned to the page.

### Video

<!--- MC-42059 ENGCOM-9039-->

*  Videos are now available in the product gallery as expected when advanced JavaScript bundling is enabled and used.

### Web API framework

<!--- MC-41758-->

*  The Catalog API now correctly updates a product's custom option values by adding new values and removing old values. Previously, the API did not delete the old values.

<!--- MC-34431-->

*  POST `/V1/guest-carts/:cartId/billing-address` now returns address ID as an integer, not a string.

### Widget

<!--- MC-39128-->

*  An administrator can now delete all of a widget’s layout updates. Previously, when a widget had multiple layout updates, an administrator could only delete the first.

<!--- MC-39107-->

*  Clicking the **Add to Cart** button on the product widget no longer results in a page reload. Previously, clicking the **Add to Cart** button on a product widget was causing a current page to reload before the product was added to the cart.

### Wishlist

<!--- MC-40651-->

*  Magento no longer resets a configurable product’s configuration settings when you click the **Edit item** button for the product from a wishlist. [GitHub-32119](https://github.com/magento/magento2/issues/32119)

<!--- MC-40417-->

*  Magento now displays the correct product price when you update a product with a customizable file option in the wishlist. Previously, Magento displayed the wrong product price and did not display a link to the uploaded file.

<!--- MC-39060-->

*  The total product count in a wishlist for a customer with multiple wishlists now match the number of items in the wishlist. Previously, out-of-stock products were included in the total product count.

<!--- MC-36779 magento/magento2#31110-->

*  Magento now removes a product from a wishlist after adding it to an order. [GitHub-30260](https://github.com/magento/magento2/issues/30260)

<!--- MC-34456 ENGCOM-8816-->

*  Shoppers can now add related products to their shopping cart from a wishlist. Previously, Magento added only the configurable product, not the configurable product and its related products when a shopper clicked the **Select all** link of the Related Products section. [GitHub-32274](https://github.com/magento/magento2/issues/32274)

## Known issues

**Known issue**: _JavaScript error when reCAPTCHA is disabled_. If reCAPTCHA is disabled for checkout, checkout proceeds, but Magento displays an `Uncaught TypeError` error in the console log:  This issue will be fixed in a later release. <!--- MC-42589—>

**Known issue**: _Content-Security-Policy error_. The storefront displays the following error in the console log: `The Content-Security-Policy directive frame-ancestors does not support the source expression unsafe-inline`. Storefront performance is not affected. <!--- MC-42613—>

**Known issue**: _Anomalies with PayPal Credit display of gift card amounts_. When PayPal Credit is enabled and multiple gift card amounts are configured, if a buyer changes the amount for the value of a gift card, the storefront does not update the amount for installment payments. <!--- MC-42499-->

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-3-partner.md %}

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-2-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-4-2-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Open Source 2.4.3 using [Composer]({{ page.baseurl }}/install-gde/composer.html).

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
