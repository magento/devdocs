---
group: release-notes
title: Magento Commerce 2.3.6 Release Notes
---

Magento Commerce 2.3.6 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes over 160 functional fixes to the core product and over 15 security enhancements.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.3.6 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

We are adding support for PHP 7.4.x in Magento 2.3.7, which is scheduled for release in Q2 2021. This support will introduce breaking changes to Magento 2.3.x deployments. How will this affect your store? See the [PHP 7.4 support for Magento 2.3.x release line](https://community.magento.com/t5/Magento-DevBlog/PHP-7-4-support-for-Magento-2-3-x-release-line/ba-p/458946) DevBlog post.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 15 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security Updates Available for Magento](https://helpx.adobe.com/security/products/magento/apsb20-59.html) for a discussion of these fixed issues.

#### Security enhancements and fixes to core code

Additional security enhancements include:

**CAPTCHA** protection has been added to the following product areas:

*  Place Order storefront page and REST and GraphQL endpoints <!--- MC-36067-->

*  Payment-related REST and GraphQL endpoints.<!--- MC-36064-->

CAPTCHA protection for these additional pages is disabled by default. It can be enabled on the Admin in the same way that other pages covered by CAPTCHA are. This protection has been added as an anti-brute force mechanism to protect stores against carding attacks. See [CAPTCHA](https://docs.magento.com/user-guide/stores/security-captcha.html).

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.6 core code.

### Installation, upgrade, deployment

<!--- MC-35408-->

*  Magento now displays an informative error message when some themes are not deployed after running `setup:static-content:deploy`. Previously, when deployment completed successfully but not all packages were deployed, Magento did not display an error. When the `setup:static-content:deploy` command is executed with enabled parallel processing and each theme requires more time to be deployed then the specified maximum execution time, this command can finish successfully, although themes are not deployed.

<!--- MC-34790-->

*  The **Use default** checkbox for Klarna payments (**Stores** > **Configuration** > **Sales** > **Payment methods** > **Klarna**) now remain checked as expected when website scope changes.

<!--- MC-33648-->

*  Upgrade no longer results in the sudden failure of the Galera cluster. Previously, the Galera cluster exited abruptly after re-indexing immediately after upgrade. During Magento upgrade, index tables are altered and the engine is changed from MEMORY to InnoDB. At this point, the content of these tables becomes out-of-sync between the nodes of the Galera cluster. [GitHub-25334](https://github.com/magento/magento2/issues/25334)

<!--- MC-33199-->

*  `bin/magento setup:di:compile` no longer throws a fatal error. Previously, Magento threw an error the first time you ran this command, but the second execution resulted in successful compilation.

### AdminGWS

<!--- MC-36038-->

*  Magento no longer throws an error when an administrator with restricted roles for specific websites tries to create a subcategory from the Admin.

<!--- MC-33004-->

*  Administrative users with limited role scope can now modify alt text, and Magento saves those values. If an administrative user is not permitted to modify alt text, then the alt text box is grayed out.

<!--- MC-32281-->

*  Administrators with restricted access to one website only in a multi-site deployment can now preview a Scheduled Update for that website. Previously, the staging preview used the default store by default, and if the user did not have access to the default store, Magento threw an exception.

### Amazon Pay

*  Clicking **Return to standard checkout** just before completing checkout with Amazon Pay now returns the shopper to the checkout page that displays all payment methods available to the shopper. Previously, no payment methods were displayed.

### Analytics

<!--- MC-35302-->

*  CSV files that are generated by `analytics_collect_data` are now properly escaped. Previously, these files were not generated with the correct escaping, which prevented the generation of Inventory reports.

<!--- MC-34137-->

*  Magento successfully generates advance reporting data files and sends them as expected to Inventory on deployments with split databases. Previously, Magento did not generate or send the `quotes.csv` file to Inventory, and as a result, Inventory did not generate the expected reports.

### Backend

<!--- MC-30522-->

*  The Products in the Comparison List and the Recently Compared Products features now work as expected. Previously, when the comparison list was expanded, Magento did not display products, even though the section indicated that the list contained products.

### Bundle products

<!--- MC-35484-->

*  Re-importing bundle products now works as expected. Previously, the second import did not change the `catalog_product_relation` table, and the storefront did not display the bundled products because parent-child product relations were not generated correctly.

<!--- MC-33902-->

*  Magento no longer sets prices for fixed-price bundle product child items in quotes.

### Cache

<!--- MC-32022-->

*  `X-Magento-Tags` headers no longer exceed the size permitted by the HTTP specification. Previously, category pages that contain many products return an `X-Magento-Tag` header that resulted in a 503 error.

### Cart and checkout

<!--- MC-36055-->

*  The **State/Province/Region** input box is now enabled as expected on **My account** > **Address Book** > **Add new address**.

<!--- MC-35953-->

*  Custom address attributes are now included as expected in the form displayed for Payment step of the checkout workflow.

<!--- MC-35805-->

*  The shipping method estimator now works as expected when custom address attributes are present on the shipping step of the checkout workflow. Previously, Magento displayed this error message: `{"message":"Error occurred during \"custom_attributes\" processing. A custom attribute is specified with a missing attribute code. Verify the code and try again."}` [GitHub-27505](https://github.com/magento/magento2/issues/27505)

<!--- MC-35351-->

*  Custom customer address attributes fields are now displayed as expected in the storefront checkout workflow.

<!--- MC-35204-->

*  Shoppers can now purchase a virtual gift card using PayPal Braintree without defining a shipment address. Previously, Magento threw an error.

<!--- MC-32160-->

*  Magento now displays the waiting/spinning icon while prices are updated on the cart.

<!--- MC-19818-->

*  Merchants can now enable **Apply to Shipping Amount** in the Action tab of **Marketing** > **Cart Price Rules** > **Add New Rule** when **Fixed amount discount for whole cart** is applied. [GitHub-24422](https://github.com/magento/magento2/issues/24422)

### Catalog

<!--- MC-35781-->

*  Merchants with multiple websites can now use the REST API to create and update products while preserving image and image-role inheritance. Previously, when a merchant used the REST API to create and update products, and a product was updated for store view, the default image roles were loaded and saved for that store view. As a result, the store-view image roles stopped inheriting from the default scope after update.

<!--- MC-35575-->

*  Magento now successfully updates attributes labeled `Product Type`. Previously, because the `product_type` attribute is reserved in Magento core code, Magento displayed this message when you tried to update it: `An attribute with the same code (product_type) already exists.`

<!--- MC-35366-->

*  Problems with product sort order on the storefront have been resolved. Previously, when Magento indexed product prices, it occasionally set a configurable product’s `min_price` and `max_price` to 0 in the `catalog_product_index_price` table, which affected price sort order on the storefront.

<!--- MC-35097-->

*  Shoppers can now re-order an invoiced order of a product with customizable options as expected. Previously, Magento threw this error when a shopper tried to re-order: `{"0":"The product's required option(s) weren't entered. Make sure the options are entered and try again`.

<!--- MC-34082-->

*  Magento now displays all re-enabled products in the storefront as expected. Previously, when a product was disabled and then re-enabled, Magento did not display the product until the Varnish page cache was cleared or the store re-indexed because the page cache was not invalidated after re-enabling a product.

<!--- MC-32751-->

*  Magento now displays the Recently Compared Products widget only after at least one product has been deleted from a product comparison. Previously, this widget was displayed immediately after a shopper added a product for comparison.

<!--- MC-32228-->

*  You can now successfully save an image to a category from the Admin. Previously, after you saved the image, part of the URL was missing, and you couldn’t re-open the image.

<!--- MC-31764-->

*  The **Product in Websites** checkbox of the new product page is now enabled by default for restricted administrative users in multi-site deployments. Previously, the checkbox for the non-default website was not preselected, and if the administrator left the checkbox unselected, Magento displayed an error message.

<!--- MC-31247-->

*  The **Price** condition in Page Builder now works as expected for configurable products.

<!--- MC-35149-->

*  Saving a category now flushes only the block cache that is related to this category. Previously, Magento flushed cache for all category blocks.

<!--- MC-35025-->

*  Magento now correctly represents Arabic thousands grouping and Arabic decimal separator symbols. Previously, Arabic symbols were trimmed. [GitHub-26676](https://github.com/magento/magento2/issues/26676)

<!--- MC-34364-->

*  Consecutive asynchronous price updates no longer interfere with each other and correct status is assigned to each operation. Previously, if an asynchronous price update failed, all subsequent asynchronous price updates will fail until the corresponding queue consumer is restarted.

<!--- MC-33810-->

*  Changes introduced by an earlier bug fix that resulted in HTML errors on the product list page have been reverted.

### Catalog Rule

<!--- MC-34255-->

*  Product and catalog caches now expire as scheduled. Previously, caches expired daily because `сron` ran the `catalogrule_apply_all` task once daily, which re-indexed all catalog rules and dependent indexers, and cleared the cache for all products and categories.

### CMS content

<!--- MC-35478-->

*  Magento now throws an error when a merchant creates a CMS page with the same URL as the Company Structure page. Previously, Magento displayed the CMS page instead of the Company Structure page.

### Configurable products

<!--- MC-33755-->

*  Admin users accounts created from an admin account with a restricted scope can now create a configurable product with attributes as expected. Previously, Magento threw this error: `Notice: Undefined index: value_index in 23develop/app/code/Magento/ConfigurableProduct/Helper/Product/Options/Factory.php on line 101`.

<!--- MC-32351-->

*  Magento no longer links a simple product to a configurable product when the API call to link these products fails.

<!--- MC-33502-->

*  Pagination problems with the Configurable Product Edit Current Variations list have been corrected.

### Custom customer attributes

<!--- MC-33029-->

*  The labels for address fields in the checkout workflow and the address book have been edited for consistency.

<!--- MC-31113-->

*  Magento no longer throws an error when you include an empty customer attribute field in the **Forms to Use In** field while creating a Company account on the storefront. Previously, Magento threw this error: `PHP Fatal error: Uncaught TypeError: Argument 2 passed to Magento\Eav\Model\Attribute\Data\Text::validateLength() must be of the type string, null given`.

### Customer

<!--- MC-36136-->

*  The **State/Province** fields are now populated as expected on the Edit Address page (**My Account** > **Address book**).

<!--- MC-35253-->

*  Customer group is no longer automatically changed for a customer who is assigned to a Company when you edit the customer on the Customer grid.

<!--- MC-33470-->

*  Magento no longer resets a customer’s customer group to the default when a customer saves their account information.

<!--- MC-33458-->

*  Saving a deleted customer from the Admin now generates an error message only. Previously, Magento displayed a blank page and generated a report that contained this string: `"0":"No such entity with customerId = 3","1":"#1 Magento\\Customer\\Model CustomerRegistry->retrieve() called at [app\/code\/Magento\/Customer\/Model\/ResourceModel\/CustomerRepository.php:340"`.

<!--- MC-32314-->

*  Magento now honors customer group settings when you create a new customer from the Admin in a multi-site deployment.

<!--- MC-32178-->

*  The validation logic associated with the **Date of Birth** field of the Customer Registration form no longer triggers a JavaScript error.

<!--- MC-32151-->

*  The Admin view of a customer cart now displays all the products that were added to the cart from multiple websites in a multi-website deployment. Previously, when a customer added a product to their cart from a non-default website, the product was not displayed in the Admin even when **Share customer account** was set to **Global**.

<!--- MC-32122-->

*  The **Invalid Form Key. Please refresh the page** text string on the login page is now translated as expected.

<!--- MC-32121-->

*  Magento now displays the **Credit memo** button after the partial refund of an order. Previously, Magento did not display this button after you created a partial refund, and you could not create a credit memo for the rest of the order.

<!--- MC-31989-->

*  The shopping cart that is accessed from the Admin customer details page now includes only products from the selected customer’s quote. Previously, this cart listed all items in the `quote_item` table.

<!--- MC-31935-->

*  Customer creation from the Admin now honors the default customer group setting as expected.

<!--- MC-31575-->

*  The `PHPSessionId` is now changed as expected after a customer logs out and then logs back in.

<!--- MC-18593-->

*  Data scripts are no longer re-run whenever you attempt to upgrade the database by running `bin/magento setup:upgrade`. Previously, upgrade scripts were re-run unnecessarily, which affected performance. [GitHub-19469](https://github.com/magento/magento2/issues/19469)

### Customer segment

<!--- MC-33303-->

*  Administrators with the correct permissions can now access Advanced Reporting and Segment Reports.

<!--- MC-32849-->

*  We’ve improved the performance of editing and saving customer segments that contain large numbers of customers (more than three million). Previously, when you created or edited a customer segment that contained many customers, Magento threw a 500 error.

### Directory

<!--- MC-33152-->

*  The Default State dropdown menu is now populated by data that is based on the allowed countries that have been assigned to the selected website when you configure a value for the **Default Tax Destination Calculation** field. Previously, this dropdown listed the countries that were assigned to the default website.

<!--- MC-32186-->

*  The format of the State/Province drop-down menu is now consistent across the Admin.

### dotdigital

*  dotdigital now has a Content Security Policy whitelist for specific domains used by this module.

*  Contacts are no longer resubscribed when their `last_subscribed_at` value is `null`.

*  Deletion of automation enrollments and abandoned carts from their respective report grids now works as expected.

*  Handling of the API response dotdigital receives when processing resubscribes has been improved.

*  dotdigital now catches exceptions that are thrown by `unserialize()` to protect against unserializable data being stored for custom attributes.

### Downloadable

<!--- MC-34259-->

*  Clicking on a downloadable product's **Sample** button from the Admin product page now downloads a sample as expected. Previously, when you clicked **Sample**, Magento displayed this error: `The product that was requested doesn't exist. Verify the product and try again`.

<!--- MC-32286-->

*  You can now use an import file to update downloadable products in bulk by SKU and description. Previously, validation errors occurred, and import failed.

<!--- MC-31801-->

*  Administrators with restricted permissions to Catalog can now create a downloadable product. Previously, these administrators could not create a downloadable product, and Magento threw an error.

### Dynamic block (formerly banner)

<!--- MC-33264-->

*  Table title now matches the data table (as expected) when you create a dynamic block and add a related catalog price rule.

### Email

<!--- MC-32850-->

*  Customers are no longer redirected away from the current website when they report a forgotten password in multi-site deployments where customer accounts are shared globally. Previously, customers were redirected to the website on which the account was created.

<!--- MC-32728-->

*  Order confirmation emails sent to customers now include the list of ordered items as expected. Previously, when you created an email template in the Admin by loading and saving the default template, emails generated from this template did not include the list of ordered items. [GitHub-26882](https://github.com/magento/magento2/issues/26882)

### Frameworks

<!--- MC-33759-->

*  `sales_order_shipment_track_save_commit_after` is now triggered as expected when you use the REST API to create a shipment.

<!--- MC-33007-->

*  We have improved the performance of the `Magento\Framework\App\DeploymentConfig\Reader::load` function. Previously, when a request was made to Magento, this function was called repetitively, which resulted in `config.php` and `env.php config` files being loaded each time the method was called.

<!--- MC-32928-->

*  Magento no longer throws the following fatal error when Redis uses all allowed memory: `report.CRITICAL: OOM command not allowed when used memory > 'maxmemory'.`

### General fixes

<!--- MC-35184-->

*  An expired persistent session is now renewed as expected when the shopper logs back in.

<!--- MC-35046-->

*  Merchants can now unassign products from categories as expected. Previously, Magento threw an error similar to this error: `Could not save product "4" with position 0 to category 3`.

<!--- MC-33339-->

*  MAP (minimum advertised price ) now works as expected for group products.

<!--- MC-32374-->

*  New CMS pages are now added as expected to a website’s store page hierarchy.

<!--- MC-19560-->

*  Magento no longer throws an exception when a shopper tries to unset the persistence cookie after beginning checkout and then navigating to the storefront home page. Previously, when the shopper clicked the **Not you?** link on the home page, Magento threw this exception: `The shipping address is missing. Set the address and try again`. [GitHub-24218](https://github.com/magento/magento2/issues/24218)

<!--- MC-17438-->

*  You can now use the `PUT /V1/products/:sku` endpoint to update links to YouTube videos. Previously, Magento displayed a thumbnail for the video, but the video player did not load when you clicked the **Play** button. [GitHub-23194](https://github.com/magento/magento2/issues/23194)

<!--- MC-32147-->

*  You can now use `app/etc/env.php` to change the message broker from MYSQL to AMQP.

### Gift cards

<!--- MC-35819-->

*  Gift Card Accounts now capture order numbers as expected. Previously, the **More information** field in the History tab for the selected gift account did not display order IDs.

<!--- MC-34510-->

*  Using a comma as a decimal separator now works as expected. Previously, the comma separator ignored decimal values.

<!--- MC-34462-->

*  Gift cards are now displayed as expected on the mini cart. Previously, Magento rendered HTML objects as text.

### Google Tag Manager

<!--- MC-33629-->

*  Magento no longer throws a JavaScript error during checkout when the **Cookie Restriction Mode** setting and Google Tag Manager are enabled.

### GroupedProducts

<!--- MC-23209-->

*  Merchants can now successfully send email to a shopper that contains a credit memo for an order that includes a grouped product. Previously, Magento threw a fatal error when the merchant clicked **Send Email**. [GitHub-25617](https://github.com/magento/magento2/issues/25617)

<!--- MC-35077-->

*  The products query now returns all expected data for grouped products. Previously,  `product_links` was an empty array.

### Image

<!--- MC-31707-->

*  Magento now displays PNG images as expected after upload.

### Import/export

<!--- MC-35634-->

*  When an imported product has `qty` set to 0 but `is_in_stock set` to 1 in the CSV file, the product is not listed on the category page, and the product details page lists it as out-of-stock. Previously, products with these values were visible on the storefront after import.

<!--- MC-35448-->

*  The `error_report.csv` file now downloads with content and is available inside the `var/import_history/` directory as expected. Previously, this file was not generated after import.

<!--- MC-35255-->

*  You can now hide product images on the storefront during import.

<!--- MC-35096-->

*  Scheduled imports now run as expected when the import CSV file contains a byte order mark (BOM).

<!--- MC-34639-->

*  Imported CSV files now capture related product information as expected. Previously, related product information was not consistently uploaded the first time the CSV file was imported.

<!--- MC-33625-->

*  Magento now successfully imports customer addresses that contains a region for a country that does not have defined regions. Previously, Magento threw this error: `Please enter a valid region`.

<!--- MC-31765-->

*  Magento now displays the customer list as expected after automatic re-indexing. Previously, although manually running `bin/magento index:reindex` worked, the customer grid did not display customer information after automatic re-indexing.

<!--- MC-31594-->

*  Magento no longer creates duplicate SKUs in the Admin when products are imported by CSV file.

<!--- MC-23088-->

*  Magento no longer throws an error during import when imported data includes a `swatch_image` store-view key has a value of `no_selection`. Previously, Magento threw this error: `Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s): 1`. [GitHub-25026](https://github.com/magento/magento2/issues/25026)

<!--- MC-22212-->

*  Deadlocks no longer occur when the import process executes a bulk insert and the re-index process simultaneously executes a large insert from select. Previously, Magento displayed this error: `PDOException: SQLSTATE[40001]: Serialization failure: 1213 Deadlock found when trying to get lock`. [GitHub-8933](https://github.com/magento/magento2/issues/8933)

<!--- MC-35080-->

*  Customer address `region_id` is no longer assigned a `NULL` value when you import customer addresses using a CSV file (`entity type = "customer address"` and `import behavior = "add/update”`) from which certain field values have been deleted.

### Klarna

*  Magento now correctly refunds a Klarna order when the order contains a product that has been deleted. Previously, Magento threw a fatal error.

*  Default configuration settings for Klarna remain set as expected when you change the configuration scope to a different website. Previously, changing scope resulted in clearing all Klarna settings.

*  The checkout page now opens as expected when a shopper’s cart contains a downloadable product. Previously, the checkout page was blank.

*  Fraud notification messages have been improved.

### Layered navigation

<!--- MC-34591-->

*  Layered navigation, item count, and pagination are now correct when products are not assigned to a category and the **Display Out of Stock Products** setting is enabled.

### Media storage

<!--- MC-32404-->

*  `var/resource_config.json` is no longer regenerated whenever an image is requested by `get.php`. Previously, this file was rewritten on each call to `get.php`.

### Newsletter

<!--- MC-34616-->

*  Exporting the Newsletter Subscribers list using the `Excel XML` option now results in the export of all rows as expected. Previously, exported data included only the page pagination value, not all rows.

<!--- MC-34540-->

*  Magento no longer throws an error when a user subscribes to a newsletter and reCAPTCHA for the newsletter is disabled for the website scope. Previously, when **Use invisible ReCaptcha in newsletter** was set to the default (**yes**) in the default configuration scope but set to **no** in the Main Website scope, the storefront subscription attempt failed, and Magento displayed this error: `Incorrect ReCaptcha validation`.

<!--- MC-31709-->

*  Shoppers subscribing to a newsletter now receive only an email confirming their subscription. Previously, shoppers received two emails: a subscription confirmation and an unsubscribed notification.

### Payment methods

<!--- MC-35154-->

*  Registered shoppers can now checkout successfully when their only defined payment method is Braintree. Previously, the **Place Order** button remained disabled after the shopper entered the correct credit card details unless the shopper had unchecked the **My billing and shipping address are the same** checkbox.

<!--- MC-35132-->

*  Magento now completes Payflow Pro payments successfully when the shopper’s name contains accented letters. Previously, payment did not complete, and Magento logged this error: `report.CRITICAL: String to be escaped was not valid UTF-8 or could not be converted:`.

<!--- MC-34670-->

*  Magento no longer saves credit card numbers when the **Save for later use** checkbox on the payment section of the checkout workflow is not selected.

<!--- MC-34343-->

*  Magento now displays a message that prompts you to enter mandatory credit card data when you click **Submit** for an Admin order without entering valid payment information. Previously, the Braintree card validator did not throw an error when payment input fields were invalid, and the page became inactive.

<!--- MC-31924-->

*  A shopper whose address book contains multiple addresses can now change shipping addresses during checkout when paying with Braintree. Previously, Magento displayed JavaScript code in the address field when the shopper selected a different address from the drop-down menu on the checkout workflow.

<!--- MC-31109-->

*  You can now successfully use PayPal Express to pay for an order when persistent checkout cart is enabled and the **Clear Persistence on Sign Out** setting is set to **no**. Previously, Magento redirected you to the Login page.

### Product alert

<!--- MC-31962-->

*  Unsubscribe actions for product alerts now work as expected. Previously, when a customer clicked on the **Click here to stop alerts for this product** link, Magento displayed a 404 error.

<!--- MC-32839-->

*  Product stock alert unsubscribe now works when a user’s session expired. Previously, when you clicked on the **Click here to stop alerts for this product** link, Magento displayed a 404 error.

### Return Merchandise Authorizations (RMA)

<!--- MC-35796-->

*  Magento now displays either an informative error message or all available products when an administrator with restricted permissions tries to create a return for products that are no longer in the assigned website scope. Previously, Magento displayed a blank page.

<!--- MC-35359-->

*  You can now delete tracking and shipping information for an RMA when JavaScript bundling is enabled.

### Reviews

<!--- MC-32155-->

*  Magento no longer returns a 500 error when you try to open a Category page on the storefront when **Layout = Product – Full Width** has been set from the Design tab of the Category page.

### Sales

<!--- MC-35930-->

*  Order update emails that are sent to customers now include the correct order status. Previously, if an order status changed from `processing` to another state, the order email did not reflect the status change.

<!--- MC-35730-->

*  The New Shipment email generated by `POST /V1/order/:orderId/ship` now contains the same shipping and customer information as shipments that are created manually from the Admin. Previously, this email did not contain the customer name, tracking information, products ordered, and other order information.

<!--- MC-35554-->

*  Magento no longer assigns a status of `Complete` after invoicing an order that requires zero payment.

<!--- MC-35309-->

*  Localized region names that are displayed on the storefront Order page are now correctly translated. Previously, the region name was not based on the specified locale unless it was edited in the Admin.

<!--- MC-34787-->

*  Email sent to customers that contain partial invoices now includes accurate item subtotals. Previously, the subtotal in this email contained was the total of the ordered quantity, not the total amount of the invoiced quantity.

<!--- MC-34782-->

*  `sales_clean_quotes` now efficiently deletes all expired quotes. Previously, `sales_clean_quotes` jobs did not complete due to memory issues, and Magento threw a fatal error.

<!--- MC-33127-->

*  Magento now assigns the correct Group ID when a new customer creates an order in multi-site deployments. Previously, Magento applied the settings from the default customer group.

<!--- MC-31780-->

*  Administrators with restricted permissions that include view permission for credit memos, invoices, and shipments can now view invoices and shipments from the Orders page as expected. Previously, when a restricted administrator tried to view an order, Magento displayed this error: `Something went wrong with processing the default view and we have restored the filter to its original state`.

<!--- MC-19751-->

*  Magento no longer displays an error when a customer adds a quantity of a product to their cart that exceeds half of the existing product stock but does not exceed the total stock. Previously, under these circumstances, Magento displayed this error: `The requested qty is not available`. [GitHub-24365](https://github.com/magento/magento2/issues/24365)

### Sales Rule

<!--- MC-34778-->

*  Coupon codes that have been applied based on shipping method are no longer applied when a shopper changes shipping method. Previously, Magento did not clear coupon codes when shoppers switched shipping methods.

<!--- MC-34733-->

*  Coupon discounts are now calculated correctly when you add a bundle product to the cart after the coupon was applied. Previously, it was incorrectly calculated.

<!--- MC-34621-->

*  Shoppers cannot apply a coupon code more frequently than the **Uses Per Customer** setting permits. Previously, if a shopper had multiple browser windows open and placed multiple orders concurrently, each order received the discount, even though the **Uses Per Customer** setting had a value of **1**.

<!--- MC-33723-->

*  The order summary now displays the correct discount amount when a cart price rule has been applied. Previously, the rule did not correctly round amounts when calculating shipping discounts.

<!--- MC-32216-->

*  Magento now displays category trees as expected when you try to create or edit a Cart Price rule. Previously, selecting a category in the Condition section while creating or editing a rule resulted in JavaScript errors.

<!--- MC-31800-->

*  Magento now applies fixed-amount, whole-cart discounts correctly for orders being shipped to multiple addresses. Previously, this type of discount was applied multiple times when a customer checked out an order using Check Out with Multiple Addresses. [GitHub-25834](https://github.com/magento/magento2/issues/25834)

### Search

<!--- MC-33868-->

*  Elasticsearch results now include the correct values for each store view’s attribute options. If a Dropdown or Multiple Select attribute has a different option value in the non-default store view than in the default store view, Elasticsearch now indexes that value or returns the product with that value in the results. Previously, Elasticsearch didn’t index that value or return the product with that value in the results.

<!--- MC-32420-->

*  Price sorting now works correctly for out-of-stock configurable products.

<!--- MC-35409-->

*  The performance of catalog search has improved. Disabling **Enable Search Suggestions**  (**Stores**  >  **Configuration**  >  **Catalog** >  **Catalog Search**) works as expected. Previously, Magento queried the MySQL search_query table instead of Elasticsearch for autocomplete search suggestions. [GitHub-25534](https://github.com/magento/magento2/issues/25534)

### Sitemap

<!--- MC-35182-->

*  The sitemap generation process now uses custom URL rewrites as expected. Previously, the generated `sitemap.xml` did not include custom URLs.

<!--- MC-34598-->

*  Encoded values are now correctly escaped in `sitemap.xml`. Previously, when you included encoded characters in a product name or image title, the generated sitemap was invalid.

### Staging

<!--- MC-33746-->

*  You can now access the CMS Preview page when editing a CMS page with a scheduled update and re-assigning it from the default store to another store. Previously, Magento threw a 404 error when you clicked on the preview link.

<!--- MC-32931-->

*  Magento no longer changes a product’s date values when an administrator edits other product features. Previously, Magento set the `news_from_date` value to the current date and removed the `news_to_date` value every time the product was saved.

<!--- MC-32686-->

*  Editing an existing schedule no longer results in a duplicated schedule. Previously, when you edited an existing schedule, Magento duplicated it, and when you tried to open the duplicate schedule, Magento threw an error.

<!--- MC-34955-->

*  Sending 0 with the `/rest//V1/products/special-price-information` special price endpoint now saves the price and returns the schedule as expected.

### Store

<!--- MC-35381-->

*  The store-view switcher now works correctly when the store views have different base URLs. Users are now redirected to the corresponding page, category, or product page on the new store view.

<!--- MC-32633-->

*  You can now export `config.php` and default website code from one website to install and configure Magento on a second website in a multi website deployment. Previously, the default store and view disappeared after the export, and errors occurred on the storefront.

<!--- MC-32280-->

*  Magento installation now completes successfully, and stores are created as expected, when store configuration is pre-defined in `config.php`.

### Swatches

<!--- MC-35326-->

*  You can now use the `POST /V1/products/attributes` to add a `text_swatch` type of product attribute. Previously, Magento did not add the option to the attribute and displayed an error.

<!--- MC-33118-->

*  Magento now displays tier prices as expected for configurable product variations.

### Target Rule

<!--- MC-34965-->

*  Loading of product details pages has been optimized. Indices for database tables that optimize target rule conditions queries for many cases have been added.

<!--- MC-32774-->

*  Product rules now apply to out-of-stock products as expected. Previously, Magento did not display out-of-stock products in the related products list even when the .the rule was configured to display out-of-stock products.

<!--- MC-31501-->

*  The related product block that is displayed for a product on the storefront now displays the products that have met the criteria defined in the Related Product Rule. Previously, Magento did not display any related products.

### Theme

<!--- MC-34133-->

*  Shoppers can now successfully change the number of orders per page in the order history multiple times. Previously, when a shopper changed this value more than once, Magento rendered the results page as expected for only the first value entered.

<!--- MC-34120-->

*  Themes that are added in User Agent Rules are now affected as expected when you run `bin/magento catalog:images:resize`. Previously, only themes that were assigned to stores were affected when `bin/magento catalog:images:resize` was run.

### Translation and locales

<!--- MC-20127-->

*  Inline translation now works as expected on the storefront when Admin **Stores** > **Configuration** > **Advanced** > **Developer** > **Translate Inline** > **Enabled for Storefront** is set.

### UI

<!--- MC-31875-->

*  Magento now preserves an attribute’s value when you move the attribute from one group to another.

### URL rewrites

<!--- MC-34439-->

*  Moving a store view to a different website no longer resets URLs. Previously, Magento incorrectly regenerated CMS and product URL rewrites.

<!--- MC-32810-->

*  Magento no longer changes a product’s URL in all stores when a merchant changes a product URL for one store in a multi-site deployment. Previously, if a merchant changed a URL key for one store view, Magento changed the URL for all stores.

### Vertex

*  Taxes are now calculated as expected on orders that contain both physical and virtual products.

*  Vertex now processes products with a price of 0 as expected. Previously, administrators could not create an order with a total of 0.

*  The checkout process now successfully progresses from shipping to payment when using Internet Explorer 11.x with Vertex. Previously, Magento threw a JavaScript error when the shopper tried to proceed from shipping to payment.

*  The process of submitting an invoice to Vertex has been been optimized, and performance has improved.

*  Tax details are now included as expected in the database.

*  Log rotation now works as expected in production mode.

*  Vertex now calculates taxes correctly when a default ZIP code is provided for tax calculation.

*  Updating the billing address with Vertex's recommendation no longer updates the fields on the shipping address.

### Visual Merchandiser

<!--- MC-35000-->

*  You can now add products to a category when implementing Level 2 cache.

### Web API framework

<!--- MC-35299-->

*  Invoices created using the REST API now include gift card information similar to the invoices that are created in the Admin. Previously, using POST `\{host}/rest/default/V1/order/:id/invoice` to invoice the order did not display the gift card code or gift card amount applied.

<!--- MC-34654-->

*  The `default_sort_by` attribute now takes `String` instead of `String[]`.

<!--- MC-33529-->

*  You can now use POST `http://<domain>/rest/V1/categories/` to create or update a category. Previously, Magento did not save the value if the `default_sort_by` value was set as an array. When the `default_sort_by` value was set as a string, Magento threw this error: `Error occurred during \"custom_attributes\" processing. Attribute \"default_sort_by\" has invalid value. The \"string\" value's type is invalid. The \"string[]\" type was expected. Verify and try again.`

<!--- MC-31843-->

*  Bulk order updates using `PUT /async/bulk/V1/orders/:id` now update the order status as expected. Previously, Magento threw this error: `report.ERROR: Property "AdditionalInformation" does not have accessor method "setAdditionalInformation" in class "Magento\Sales\Api\Data\OrderPaymentInterface".`

<!--- MC-33512-->

*  You can now use POST `/V1/products/special-price` to update a product’s special price without specifying a `price_to` parameter value. Previously, attempts to set the price update without the `price_to` parameter specified were unsuccessful.

### Website Restriction

<!--- MC-33471-->

*  Merchants can now create company users from the Company Users in My Account and Company Structure pages in deployments where **Access Restriction** is enabled and **Restriction Mode** is set to **Sales: Login Only**. Previously, Magento threw this error when a merchant tried to create a user: `Can not register new customer due to restrictions are enabled`.

<!--- MC-33176-->

*  Clicking the **Track shipping** button for an order from the Admin now results in tracking information being displayed in a pop-up window as expected. Previously, this link took the administrator to the Log in page.

<!--- MC-32276-->

*  Enabling Website Restriction no longer blocks Varnish ESI requests for customers logged in as guest. Previously, these guests could not access the home page main menu.

### Wishlist

<!--- MC-36090-->

*  Administrators can now configure a configurable product that has been added by a customer to a wishlist from a non-default store. Previously, when the customer had also added the configurable product from a non-default store, Magento threw an error.

<!--- MC-35969-->

*  You can now use the wishlist search feature to find a product in a public wish list in deployments where support for multiple wishlists is enabled. Previously, after a customer used the wishlist search to find a product, selecting it, and clicking **Add to cart**, Magento did not add the product to the cart and displayed this error: `Invalid Form Key. Please refresh the page`.

<!--- MC-35429-->

*  The **Add to cart** button on the shared wishlist page now works as expected for anonymous, guest, and users who are not logged in.

<!--- MC-31936-->

*  You can now navigate and modify wishlists from the cart in deployments running Internet Explorer 11.x. Previously, you could not create, edit, or move a wishlist in this environment.

## Known issues

**Issue**: The new CAPTCHA feature for checkout does not work as expected on the Place Order page when using third-party payment providers. Merchants running Magento 2.3.6 or 2.4.1 who have enabled CAPTCHA protection on the Place Order storefront page will see this error when checking out using a third-party payment provider such as PayPal: `Please provide CAPTCHA code and try again`. **Workaround**: A fix for this issue is now available. See the [Magento Commerce v2.3.6/2.4.1 CAPTCHA in checkout not working](https://support.magento.com/hc/en-us/articles/360051235772) Knowledge Base article. A fix will also be included in our next quarterly patch (Q12021).

**Issue**: Merchants upgrading their stores from 2.3.5-p2 to 2.3.6 will note that two module versions downgrade. These messages reflect the incomplete delivery of two security fixes to the 2.3.x quarterly patches. These fixes for low severity issues are included in Magento 2.3.5-p2, 2.4.1, and 2.4.0-p1 but are missing from Magento 2.3.6. No hot fixes will be provided. These fixes will be merged along with the other security fixes in Magento 2.3.6-p1, which is scheduled for Q12021.

**Issue**: The **Create an Account** button on the Create New Account page remains disabled if a shopper has entered invalid data. This prevents shoppers from re-attempting to create an account after making an error. **Workaround**: Apply patch `MC-38509`. A fix will also be included in our next quarterly releases (2.4.2, 2.4.1-p1 and 2.3.6-p1), which are scheduled for release in Q1 2021. See the [2.4.1 and 2.3.6 create an account button disabled hotfix](https://support.magento.com/hc/en-us/articles/360051130212) Knowledge Base article.  [GitHub-30513](https://github.com/magento/magento2/issues/30513)

**Issue**: Merchants cannot log in to dotdigital from the Admin when dotdigital is enabled. See the [It's impossible to login in the dotdigital via admin panel when dotdigital account is enabled](https://support.magento.com/hc/en-us/articles/360050092291) Knowledge Base article.<!--- BUNDLE-2704-->

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.6 using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
