---
group: release-notes
title: Adobe Commerce 2.4.3 Release Notes
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/release/notes/adobe-commerce/2-4-3.html
status: migrated
---

{{ site.data.var.ee }} 2.4.3 introduces enhancements to performance and security plus significant platform improvements. Security enhancements include expansion of reCAPTCHA coverage and inclusion of built-in rate limiting. Core composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x.

This release includes over 370 new fixes to core code and 33 security enhancements. All known issues identified in the {{ site.data.var.ee }} 2.4.2 release notes have been fixed in this release.

{:.bs-callout-info}
Quarterly releases may contain backward-incompatible changes (BIC). {{ site.data.var.ee }} 2.4.3 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

See [{{site.data.var.ee}} 2.4.2-p2 release notes]({{page.baseurl}}/release-notes/2-4-2-p2.html) for information about {{ site.data.var.ee }} 2.4.2-p2.
## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Apply MC-43048__set_rate_limits__2.4.3.patch to address issue with API rate limiting

This hotfix provides a solution for the issue where Web APIs cannot process requests that contain more than 20 items in an array. This issue affects deployments running {{ site.data.var.ce }} 2.4.3, {{ site.data.var.ee }} 2.4.3, or Magento 2.3.7-p1. Built-in rate limiting was added to these releases to prevent denial-of-service (DoS) attacks, and the default maximum was set to 20. This patch reverts the default limit to a higher value. If you suspect that your store is experiencing a DoS attack, Adobe recommends lowering the default input limits to a lower value to restrict the number of resources that can be requested. See the [Web API unable to process requests with more than 20 items in array](https://support.magento.com/hc/en-us/articles/4406893342093) Knowledge Base article.

## Apply AC-384__Fix_Incompatible_PHP_Method__2.4.3_ce.patch to address PHP fatal error on upgrade

The following fatal error can occur during upgrade to {{ site.data.var.ee }} 2.4.3:

```terminal
PHP Fatal error: Uncaught Error: Call to undefined function Magento\Framework\Filesystem\Directory\str_contains() in [...]/magento/vendor/magento/framework/Filesystem/Directory/DenyListPathValidator.php:74
```

This error results from the use of the `str_contains` function, which is an PHP 8.x function. {{ site.data.var.ee }} 2.4.3 does not support PHP 8.x. This hotfix replaces this function with a supported PHP 7.x function. See the [{{site.data.var.ee}} upgrade 2.4.3, 2.3.7-p1 PHP Fatal error Hotfix](https://support.magento.com/hc/en-us/articles/4408021533069-Adobe-Commerce-upgrade-2-4-3-2-3-7-p1-PHP-Fatal-error-Hotfix) Knowledge Base article.

## Apply `AC-3022.patch` to continue offering DHL as a shipping carrier

DHL has introduced schema version 6.2 and will deprecate schema version 6.0 in the near future. Adobe Commerce 2.4.4 and earlier versions that support the DHL integration support only version 6.0. Merchants deploying these releases should apply `AC-3022.patch` at their earliest convenience to continue offering DHL as a shipping carrier. See the [Apply a patch to continue offering DHL as shipping carrier](https://support.magento.com/hc/en-us/articles/7707818131597-Apply-a-patch-to-continue-offering-DHL-as-shipping-carrier) Knowledge Base article for information about downloading and installing the patch.

## Highlights

Look for the following highlights in this release.

### Substantial security enhancements

This release includes 33 security fixes and platform security improvements. Many of these security fixes have been backported to Magento 2.4.2-p2 and Magento 2.3.7-p1.

#### Thirty-three security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Adobe Security Bulletin](https://helpx.adobe.com/security/products/magento/apsb21-64.html) for a discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

*  A **new Composer plugin** helps prevent dependency confusion and identifies malicious packages with the same names as internal packages on the public package repository. See the [Adobe Releases New Composer Plugin with Magento 2.4.3 Release](https://magento.com/blog/best-practices/adobe-releases-new-composer-plugin-magento-243-release) blog post.

*  **Rate limiting is now built in to Magento APIs** to prevent denial-of-service (DoS) attacks. Web APIs now impose restrictions on the size or number of resources (the default maximum is set to 20 and can be configured to a different value based on business need) that can be requested by a client. See [Rate limiting]({{page.baseurl}}/get-started/api-security.html) for information about configuring these restrictions. <!--- MC-35358-->

*  **ReCAPTCHA  coverage has been extended** to include:

   *  Web APIs that have corresponding HTML pages are covered through ReCAPTCHA. (This excludes web APIs that are accessed by integrations.) ReCAPTCHA coverage protects endpoints from spam attacks. When web APIs are accessed by a third-party integration service that uses OAuth, ReCAPTCHA is disabled.<!--- MC-34472-->

   *  The Place Order storefront page and payment-related web APIs. ReCAPTCHA protection for these pages is disabled by default and can be enabled from the Admin. This coverage adds an anti-brute force mechanism to protect stores from carding attacks.

{:.bs-callout-info}
Starting with the release of {{site.data.var.ee}} 2.3.2, we will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

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

**New `use_application_lock` indexing mode**. The `use_application_lock` mode lets you enable re-indexing through either the use of environment variables or by configuring the `app/etc/env.php` file. You no longer need to manually reset the indexer after failure with this mode enabled. See [Using application lock mode for reindex processes]({{page.baseurl}}/extension-dev-guide/indexing.html#using-application-lock-mode-for-reindex-processes).

### Platform enhancements

Magento 2.4.3 is not yet compatible with PHP 8.x, but the following platform upgrades bring us closer to future compatibility with PHP 8.x.

*  Core Composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x. <!--- MC-39514-->

*  The KnockoutJS library has been upgraded to v3.5.1 (the latest version). <!--- MC-40694-->

*  The deprecated TinyMCE v3 library has been removed. The `Magento_Tinymce3Banner` module and MFTF tests related to TinyMCE v3.x have been removed from {{site.data.var.ee}}. <!--- MC-42199 42170 -->

*  Magento 2.4.3 has been tested and confirmed to be compatible with Redis 6.0.12. (Magento 2.4.x remains compatible with Redis 5.x.)

*  Laminas library dependencies have been upgraded to PHP 8.x-compatible versions. Some redundant dependencies have been removed from the `composer.json` file. **{{site.data.var.ee}} 2.4.3 uses Laminas 3.4.0**. <!--- MC-39513-->

### Performance enhancements

This release includes enhancements that decrease indexation time for Product Price and Catalog Rule indexers. Merchants can now exclude a website from a customer group or shared catalog, which reduces the number of records for indexing and improves indexing times.

### Live Search

[Live Search]({{ site.user_guide_url }}/live-search/overview.html) powered by [Adobe Sensei](https://www.adobe.com/sensei.html) delivers an intuitive search experience by using artificial intelligence and machine-learning algorithms to perform a deep analysis of aggregated visitor data. See [Live Search Release Notes]({{ site.baseurl }}/live-search/release-notes.html).

### GraphQL

This release adds GraphQL support for the following features:

*  **Shared catalogs**<!--- PWA-1294-->

*  **Wish lists**. The [addWishlistItemsToCart mutation]({{page.baseurl}}/graphql/mutations/add-wishlist-items-to-cart.html) moves items from the specified wish list to the customer's cart. <!--- magento/partners-magento2ee#449-->

*  **Gift registries**. Tasks covered include: <!--- PWA-1290-->

   *  Use the [giftRegistry query]({{page.baseurl}}/graphql/queries/gift-registry.html) to return the contents of the customer's gift registries.

   *  Search for gift registries by [type]({{page.baseurl}}/graphql/queries/gift-registry-type-search.html), [email]({{page.baseurl}}/graphql/queries/gift-registry-email-search.html), or [ID]({{page.baseurl}}/graphql/queries/gift-registry-id-search.html).

   *  [Create]({{page.baseurl}}/graphql/mutations/create-gift-registry.html), [update]({{page.baseurl}}/graphql/mutations/update-gift-registry.html), or [delete]({{page.baseurl}}/graphql/mutations/remove-gift-registry.html) gift registries.

   *  [Update]({{page.baseurl}}/graphql/mutations/update-gift-registry-items.html) or [remove]({{page.baseurl}}/graphql/mutations/remove-gift-registry-items.html) items from a gift registry.

   *  [Move all items]({{page.baseurl}}/graphql/mutations/move-cart-items-to-gift-registry.html) from the cart to the gift registry. <!--- ENGCOM-9082 9087-->

   *  [Add]({{page.baseurl}}/graphql/mutations/add-gift-registry-registrants.html), [update]({{page.baseurl}}/graphql/mutations/update-gift-registry-registrants.html), or [remove]({{page.baseurl}}/graphql/mutations/remove-gift-registry-registrants.html) registrants from a gift registry.

   *  [Share]({{page.baseurl}}/graphql/mutations/share-gift-registry.html) a gift registry with invitees.

*  **Negotiable quotes**. See the [`negotiableQuote`]({{page.baseurl}}/graphql/queries/negotiable-quote.html) and [`negotiableQuotes`]({{page.baseurl}}/graphql/queries/negotiable-quotes.html) queries. <!--- PWA-1292-->

   New mutations include:

   *  [`requestNegotiableQuote`]({{page.baseurl}}/graphql/mutations/request-negotiable-quote.html)

   *  [`setNegotiableQuoteShippingAddresses`]({{page.baseurl}}/graphql/mutations/set-negotiable-quote-shipping-address.html)

   *  [`updateNegotiableQuoteQuantities`]({{page.baseurl}}/graphql/mutations/update-negotiable-quote-quantities.html)

   *  [`removeNegotiableQuoteItems`]({{page.baseurl}}/graphql/mutations/remove-negotiable-quote-items.html)

   *  [`closeNegotiableQuotes`]({{page.baseurl}}/graphql/mutations/close-negotiable-quotes.html)

   *  [`deleteNegotiableQuotes`]({{page.baseurl}}/graphql/mutations/delete-negotiable-quotes.html).

*  **Shared routes**. The [route query]({{page.baseurl}}/graphql/queries/route.html) and [RoutableInterface]({{page.baseurl}}/graphql/interfaces/routable-interface.html) support routing requests on product, category, and CMS pages. The `urlResolver` query has been deprecated, and its functionality has been superseded by the `route` query.

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### B2B

Magento 2.4.3 introduces B2B v1.3.2. This release includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html).

### Page Builder

Page Builder is now available as a bundled extension in {{site.data.var.ce}}. It is now the default content editing tool for {{ site.data.var.ee }} 2.4.3 and {{ site.data.var.ce }} 2.4.3. It can replace the WYSIWG editor with any third-party module.

Page Builder replaces the TinyMCE editor in the following Admin areas:

*  CMS Page
*  CMS Block
*  Category Description
*  Product Description

All the content created in TinyMCE has been migrated into Page Builder as HTML.

### PWA Studio

For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases). See [Magento compatibility](https://developer.adobe.com/commerce/pwa-studio/integrations/adobe-commerce/version-compatibility/) for a list of PWA Studio versions and their compatible Magento core versions.

### Upgrade Compatibility Tool

The scope of the [Upgrade Compatibility Tool](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/overview.html) has been expanded based on feedback from the community. Join our [#upgrade-compatibility-tool](https://magentocommeng.slack.com/archives/C019Y143U9F) Slack channel to get support from the Adobe product team and the community, as well as to help guide the future direction of the tool.
### Cloud managed services updates

This release includes enhancements to our support for Amazon Simple Storage Service (AWS S3)  and Amazon Aurora cloud managed services. It provides certified support for AWS ElastiCache, AWS ElasticSearch, and AWS Managed Queues (Rabbit MQ). (We have tested the functionality, performance, and integration of these services with {{site.data.var.ee}}.)

### Adobe Stock Integration

This release includes Adobe Stock Integration v2.1.1.

### Vendor Developed Extensions

See the following topics for updates on features and changes for this release:

*  [Amazon Pay]({{ site.user_guide_url }}/payment/amazon-pay.html). Amazon Pay has been deprecated and will be removed in a later Magento 2.4.x release. Magento 2.4.3 and higher will contain only updates for compatibility and fixes for major bugs.

*  [Braintree]({{ site.user_guide_url }}/payment/braintree.html)

*  [dotdigital Engagement Cloud]({{ site.baseurl }}/extensions/vendor/dotdigital/release-notes.html)

*  [Klarna]({{ site.user_guide_url }}/payment/klarna.html)

*  [Vertex Cloud]({{ site.user_guide_url }}/tax/vertex.html)

*  [Yotpo Product Reviews]({{ site.baseurl }}/extensions/vendor/yotpo/release-notes.html)

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.3 core code.

### Installation, upgrade, deployment

<!--- MC-41154-->

*  The `bin/magento setup:db:status` command now returns a message indicating that everything is up-to-date after a successful upgrade. Previously, Magento displayed this error: `Declarative Schema is not up to date`.

<!--- MC-40031 -->

*  Configuration values are now preserved on form reload when the creation of a new configurable product fails. Previously, values were lost during form reload, and Magento displayed this error: `The value specified in the URL Key field would generate a URL that already exists`. [GitHub-32102](https://github.com/magento/magento2/issues/32102)

<!--- MC-37596-->

*  Magento no longer throws an exception when you run `bin/magento setup:upgrade` to upgrade from a {{site.data.var.ce}} deployment with Redis to {{site.data.var.ee}}.

<!--- MC-34453-->

*  Previously created cart price rules are now displayed on the Content Staging dashboard page after a deployment is upgraded from {{site.data.var.ce}} to {{site.data.var.ee}}.

<!--- ENGCOM-8508 -->

*  Magento deployments running on Galera Cluster now support more customers. [GitHub-31038](https://github.com/magento/magento2/issues/31038)

<!--- ENGCOM-9036 MC-41938 -->

*  Administrators can now successfully log in to a deployment when Magento has been installed with either the `—use-rewrites=0` option or with `web/seo/use_rewrites` set to 0 in `core_config_data_table`. [GitHub-32100](https://github.com/magento/magento2/issues/32100)

<!--- ENGCOM-8451 -->

*  Updated `sortOrder` load for `AsyncCssPlugin`. Magento now loads `AsyncCssPlugin` before `JsFooterPlugin`. [GitHub-30882](https://github.com/magento/magento2/issues/30882)

<!--- ENGCOM-8701 -->

*  `Magento\Config\Model\Config\PathValidator` now checks display path to determine if an element exists, and if it has a config path, uses the `config.xml` path instead for validation. [GitHub-27678](https://github.com/magento/magento2/issues/27678)

<!--- ENGCOM-8684 -->

*  Compiling Less files with Grunt or by server-side compilation now yields the same results. Previously. `.abs- styles`, which extends other `.abs- styles` in `_extends.less`, were not output properly when compiled with Grunt. This resulted in differences between production and development deployments. [GitHub-7231](https://github.com/magento/magento2/issues/7231)

### AdminGWS

<!--- MC-40703-->

*  Admin GWS now uses `int` values for the `website_id` SQL condition in Admin collections for administrators with custom permissions.

### Adobe Stock Integration

<!--- MC-39754-->

*  Magento now displays an informative message and a link to the Admin **Stores** > **Configuration** > **Advanced** > **System** page on the Search for Adobe Stock page when **API Key (Client ID)** and **Client Secret** are not set. Previously, Magento displayed this error: `We couldn't find any records` and no link.

### Backend

<!--- MC-40389-->

*  Administrators with restricted access (for example, who are assigned access to one website only) can no longer edit categories set to  Global scope.

<!--- MC-39037-->

*  The generated System report (**System** > **Support** > **System Report**) is now rendered correctly. Previously, report content was misaligned.

<!--- MC-30152 ENGCOM-8625-->

*  Magento now turns off validation on the **Price** field as expected when the **Dynamic price** setting is enabled during bundle product creation. Previously, Magento threw a validation error when you removed a value from the **Price** field when the **Dynamic price** setting was enabled. [GitHub-26214](https://github.com/magento/magento2/issues/26214)

<!--- MC-24840-->

*  Infinite redirects no longer occur when the Admin URL differs from the default website URL in deployments where Magento is configured to be accessible from two URLs.

### Bundle products

<!--- MC-41810-->

*  You can now use the `addProductsToCart` mutation to add a bundle product with more than one checkbox option to a cart.

<!--- MC-41614-->

*  Price indexing of bundle products is now executed using temporary tables, which avoids locking database tables. Previously, Magento used physical tables, which resulted in locked tables.

<!--- MC-41177 magento/magento2#32594-->

*  A bundle item's price can now be set to 0.00. Previously, when you returned to the edit page after setting the price to 0.00, the price returned to its default value. [GitHub-32383](https://github.com/magento/magento2/issues/32383)

<!--- MC-40603-->

*  Order details for orders that contain bundle products now show the correct price for the bundle products if the price were changed before the order was placed.

<!--- MC-40035-->

*  Bundle product stock status is now updated based on the stock status of its child products. Previously, bundle products were shown as out-of-stock when one option was removed from the product, and the bundle product had two options with the same SKU.

<!--- MC-39276-->

*  An administrator can now change the value for a bundle product's `Shipment Type` attribute after it has been moved to a different attribute group. Previously, this attribute was always saved with a `Together` value if it were moved to an attribute group other than the default group in the attribute set.

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

<!--- MC-30317 ENGCOM-7141-->

*  Merchants can now assign a unique price for a bundle product on each store view of a multistore deployment. Website-specific prices are saved in the `catalog_product_bundle_selection_price` table. Previously, Magento did not base a bundle product's price on website scope even when  **Stores** > **Configuration** > **Catalog** > **Catalog** > **Price** > **Catalog Price Scope** was set to `Website`. No website-specific prices were saved in `catalog_product_bundle_selection_price`. [GitHub-12584](https://github.com/magento/magento2/issues/12584)

<!--- ENGCOM-8705 MC-38953-->

*  Invoices for bundle products now display the correct quantity for the associated simple products when **Dynamic Pricing** is disabled. Previously, simple products associated with the bundle product had the quantity of the parent product, not the bundle product). [GitHub-30802](https://github.com/magento/magento2/issues/30802)

<!--- magento/magento2#30374 MC-36930-->

*  The `updateProductsInWishlist` mutation now successfully updates items that belong to a bundle product in a wish list. Previously, instead of updating the wish list item, this mutation deleted the item and created a new one, which changed the item ID.

<!--- MC-38575-->

*  You can now set the `required_options` and `has_options` bundle attributes as expected while creating or updating a bundle product using the `POST /V1/product/:sku` endpoint. Previously, these custom attributes were set to 0 (zero) despite efforts to set it to 1 (one).

<!--- MC-38483-->

*  Bundle product data that was previously missing is now included in the staging process. This resolves inconsistencies in product behavior when shoppers purchased a bundle product from the product listing page versus adding it directly from a product page.

### Cache

<!--- ENGCOM-8554-->

*  The `varnish6.vcl` file has been updated to bypass caching of the customer page.

### CAPTCHA

<!--- MC-41572-->

*  CAPTCHA now correctly validates data provided by a shopper, and CAPTCHA fields are now displayed as expected after a shopper's multiple unsuccessful attempts to check out with PayPal Payflow Pro.

<!--- MC-41281-->

*  CAPTCHA validation no longer fails randomly on the payment page of the checkout workflow.

<!--- MC-41001-->

*  Magento now displays CAPTCHA fields as expected after you exceed the number of failed completion attempts. Previously, although Magento prompted you to attempt the CAPTCHA challenge again, it did not display the CAPTCHA fields.

<!--- MC-40359-->

*  CAPTCHA now works as expected on the checkout page. Previously, after a shopper correctly answered a CAPTCHA challenge, the loader on the checkout page never completed, and Magento displayed this error: `captchaData[formId] is undefined`. (This error occurred only when the shopper used the same browser from which they had previously accessed a deployment running Magento 2.3.5-p1.)

<!--- ENGCOM-8630-->

*  `_.isEmpty()` checks in the `defaultCaptcha.js` file now complete successfully. Previously, these checks did not complete, and as result, the checkout page failed to load after upgrade. [GitHub-31641](https://github.com/magento/magento2/issues/31641)

### Cart and checkout

<!--- MC-41911-->

*  Magento now takes into account locale-specific decimal locators when converting and updating product quantity in the cart.

<!--- MC-41574-->

*  Orders no longer omit a provided customer name with a shipping address. Previously, names were omitted because the `same_as_billing` flag was not saved in the database.

<!--- MC-40946-->

*  Links to gift registries now persist as expected when you edit a product in the shopping cart. Previously, these links disappeared when you clicked the **Update Cart** button.

<!--- MC-40696-->

*  All queue messages for consumer `quoteItemCleaner` now change their status to `complete` as expected after the deletion of several products. Previously, only one message for this consumer changed their status to `complete`, and the rest changed status to `in progress`.

<!--- MC-40657-->

*  Magento now displays the Terms and Conditions validation message in the relevant block only when a shopper clicks the **Place Order** button. Previously, Magento displayed this message in the Apply Discount Code block whenever a shopper changed payment method in the checkout workflow: `The order wasn't placed. First, agree to the terms and conditions, then try placing your order again`.

<!--- MC-40271 magento/partners-magento2ee#476-->

*  You are now redirected to the checkout page as expected after adding a bundle product to the cart from a Schedule Update preview and clicking the cart. [GitHub-447](https://github.com/magento/partners-magento2ee/issues/447)

<!--- MC-39581-->

*  Magento now discards changes to the billing address form on the checkout payment step if the shopper fails to click the **Update** button and returned to the shipping step.

<!--- MC-39517  magento/partners-magento2ee#460-->

*  Magento now displays an informative error message and does not update product quantity when a shopper adds an invalid product quantity and clicks the **Update items and Quantities** button on the Manage Shopping cart page. Previously, Magento upgraded the product quantity and did not display an error message. [GitHub-459](https://github.com/magento/partners-magento2ee/issues/459)

<!--- MC-37807 ENGCOM-8530-->

*  Products with a customizable option `(File)` now include active links as expected throughout the multi-shipping checkout process. Previously, this link was missing. [GitHub-31095](https://github.com/magento/magento2/issues/31095)

<!--- MC-37689-->

*  The Admin shopping cart now displays product prices in correct currencies for stores that support multiple currencies. Previously, prices were converted to the specified currency more than once — first, when products were added to the cart from the storefront, and then again when the order was subsequently rendered on the Admin.

<!--- MC-36703  magento/partners-magento2ee#439-->

*  Magento now empties the shopping cart as expected after an administrator completes an order from the Admin that was created by a shopper on the storefront. Previously, when the customer logged back in after the administrator completed the order, the storefront cart still contained order contents. [GitHub-30262](https://github.com/magento/magento2/issues/30262)

<!--- MC-35640-->

*  Shoppers can now add a product to their cart whose Minimum Advertised Price (MAP) exceeds its regular product price.

<!--- MC-35289-->

*  Shoppers can now successfully change their billing address from the checkout workflow when checking out with multiple addresses.

<!--- MC-29335-->

*  All paid payment transactions created by guests are now saved to the database and visible in the Admin as expected. Previously, only a small subset of concurrent orders were saved in the database, and most orders were lost due to timeouts that resulted from database locks. [GitHub-25862](https://github.com/magento/magento2/issues/25862)

<!--- MC-23989 magento/magento2#32251 -->

*  Magento now correctly displays inline welcome messages that contain special characters when a guest places a product in the mini cart. Previously, Magento did not add the product to the mini cart or display the welcome message. [GitHub-32250](https://github.com/magento/magento2/issues/32250)

<!--- MC-41165-->

*  The shipping page of the checkout workflow now successfully loads when in-store delivery is enabled. Previously, Magento threw a JavaScript error and the shipping checkout page did not completely render.

<!--- ENGCOM-9006-->

*  Added the `itemResolvers` argument to the catalog `di.xml` file. As a result, checkout is no longer broken if configurable and grouped product modules are disabled. [GitHub-30860](https://github.com/magento/magento2/issues/30860)

<!--- ENGCOM-8944-->

*  Magento now displays the radio buttons in the **Payment & Shipping Information** section as expected during the Admin re-order workflow. [GitHub-30257](https://github.com/magento/magento2/issues/30257)

<!--- MC-39158 ENGCOM-8493-->

*  Magento now correctly applies cart price rules with a cart-level fixed discount when the cart contains a bundle product with multiple options. Previously, the cart price rule was not completely applied to the order. [GitHub-30952](https://github.com/magento/magento2/issues/30952)

<!--- MC-40983 ENGCOM-8828-->

*  The **Add to cart** button on the category list view now works as expected. [GitHub-32232](https://github.com/magento/magento2/issues/32232)

<!--- ENGCOM-8490-->

*  You can now use POST `/V1/carts/mine/items` to add a custom quantity of grouped products to a cart. [GitHub-26909](https://github.com/magento/magento2/issues/26909)

<!--- ENGCOM-8886-->

*  Magento no longer populates the billing address area of the checkout workflow with the shipping address. Previously, when the **State/Province** field for the billing address was empty, and shipping and billing addresses differed, Magento populated the billing address **State/Province** field with information from the shipping address. [GitHub-31608](https://github.com/magento/magento2/issues/31608)

### Catalog

<!--- MC-36787-->

*  Mass update of **Enable Qty Increments** and **Qty Increments** attributes now works as expected. [GitHub-29544](https://github.com/magento/magento2/issues/29544)

<!--- MC-41801-->

*  You can now successfully duplicate a shared catalog that contains numeric-only SKUs. Previously, Magento threw an error when you tried to duplicate a shared catalog because the `\Magento\Catalog\Model\ProductIdLocator` class did not work correctly with numeric-only SKUs.

<!--- MC-41575-->

*  Magento no longer throws a JavaScript error after you enable recent products synchronization with the Admin. Previously, Magento displayed this JavaScript error: `Cannot read property 'status' of undefined`.

<!--- MC-41534-->

*  Custom theme layout updates are now applied as expected. Previously, custom theme layout updates were ignored.

<!--- MC-41499-->

*  The product category cache is now cleared as expected by `cron` during `indexer_update_all_views` execution. Previously, product counts on the Category page after re-indexing were incorrect.

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

<!--- MC-40811 magento/magento2#32042-->

*  Page layout now updates as expected when you create or edit a product in the Admin and then create a Schedule Design Update. [GitHub-32007](https://github.com/magento/magento2/issues/32007)

<!--- MC-40773-->

*  A custom product attribute with a value of zero can now be successfully saved as blank. Previously, Magento did not update this value to blank.

<!--- MC-40736 ENGCOM-8789-->

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

<!--- MC-35717  magento/partners-magento2ee#427-->

*  Administrators can now add a product with a customizable option `(File)` to an order by SKU. [GitHub-30285](https://github.com/magento/magento2/issues/30285)

<!--- MC-30625-->

*  You can now save a product and price without specifying `type_id`. [GitHub-13639](https://github.com/magento/magento2/issues/13639)

<!--- MC-39024-->

*  Group products are now available on the storefront as expected when a REST `PUT /V1/products/:sku/links` request is used to associate a new child product with a new group product. Previously, products were not correctly indexed after running `bin/magento cron:run`.

<!--- ENGCOM-9010 8947-->

*  You can no longer create a product with a `NULL` SKU value. Previously, you could create a product without a SKU value through a custom importer or directly in the database, but when you tried to edit it from the Admin, Magento threw an error. [GitHub-27411](https://github.com/magento/magento2/issues/27411), [GitHub-32525](https://github.com/magento/magento2/issues/32525)

<!--- ENGCOM-8902-->

*  Adding required custom options to a simple product no longer removes it from parent composite products without warning. Magento now displays an informative warning and does not save the product.  Previously, Magento saved the product changes and did not display a warning. [GitHub-30492](https://github.com/magento/magento2/issues/30492)

### Catalog rule

<!--- MC-39896-->

*  The `products` query now returns the current values when a catalog price rule applies to an item. [GitHub-26738](https://github.com/magento/magento2/issues/26738)

<!--- ENGCOM-8367-->

*  Temporary tables that begin with `catalogrule_product__temp` are now deleted as expected when re-indexing fails after a cart or catalog rule expires, is disabled, or becomes inactive. [GitHub-22273](https://github.com/magento/magento2/issues/22273)

<!--- ENGCOM-8949-->

*  Time zones are now applied in the same way in `\Magento\CatalogRule\Model\Indexer\IndexBuilder::reindexById` and `\Magento\CatalogRule\Model\Indexer\IndexBuilder::reindexByIds`. [GitHub-29549](https://github.com/magento/magento2/issues/29549)

### CMS content

<!--- MC-41471-->

*  Large images are now resized as expected during upload when the **Enable Frontend Resize** configuration setting is enabled.

<!--- MC-40663 ENGCOM-8883-->

*  Fixed the error handling for the CMS Page save controller. Previously, when an `Error` object was thrown on the `cms_page_prepare_save` event, Magento passed this object to the `addExceptionMessage` function, breaking its contract because this function expects an `Exception`. This was resolved by adding an error message using the `addErrorMessage` function. [GitHub-30149](https://github.com/magento/magento2/issues/30149)

<!--- MC-33490 magento/partners-magento2ee#435 -->

*  You can now assign a new page to multiple nodes from the CMS Edit page Hierarchy tab. Previously, a unique constraint violation occurred when you tried to assign the page to a node. [GitHub-363](https://github.com/magento/partners-magento2ee/issues/363)

### Configurable products

<!--- MC-40719-->

*  Magento no longer duplicates product thumbnails in a product's image gallery when you click on a product's configurable options.

<!--- MC-37418-->

*  The configuration pop-up that Magento displays when you are editing a configurable product from a wish list now closes as expected when you click the **OK** button.

<!--- MC-39878  magento/magento2#31472-->

*  Magento now correctly generates invoices for orders that contain only one configurable product. [GitHub-31143](https://github.com/magento/magento2/issues/31143)

<!--- ENGCOM-8673-->

*  Shoppers can now add configurable products to their cart from a non-default store view. Previously, when the shopper on a non-default store view tried to add a configurable product, Magento displayed this error: `Could not add item to cart. Please check required options and try again`. [GitHub-31660](https://github.com/magento/magento2/issues/31660)

### Content security Policy CSP)

<!--- ENGCOM-8577-->

*  Content Security Policy now supports the loading of base64-encoded images and fonts through `data: scheme`.

### cron

<!--- MC-30804-->

*  Cron clean up queries have been refactored to reduce or eliminate the following performance issues: `cron` jobs remaining stuck in a pending state, increasingly slow MySQL queries, and an increase in CPU usage. [GitHub-26507](https://github.com/magento/magento2/issues/26507)

<!--- ENGCOM-8571-->

*  `cronjobs` that have been in status `running` for more than 24 hours are now automatically changed to status `error`.  As a result, a new instance of that job can run again and you do not need to manually change job status when a job incorrectly remains set to status `running`. Previously,  if a `cronjob` were stuck in status `running`, Magento prevented new instances of the same job from starting, and you had to manually change job status. [GitHub-8933](https://github.com/magento/magento2/issues/8933)

<!--- ENGCOM-8571-->

*  `cron` jobs now complete as expected and no longer throw this serialization error:  `[Magento\Framework\DB\Adapter\DeadlockException]SQLSTATE[40001]: Serialization failure: 1213 Deadlock found when trying to get lock; try restarting transaction, query was: DELETE FROM cron_schedule WHERE (status = 'missed') AND (job_code in ('indexer_reindex_all_invalid', 'indexer_update_all_views', 'indexer_clean_all_changelogs')) AND (created_at < '2018-09-28 18:32:28')`. [GitHub-18409](https://github.com/magento/magento2/issues/18409)

<!--- ENGCOM-8571-->

*  `indexer_update_all_views`  cron jobs now run as expected after a previous failure. The failed run is marked as a failure in the `cron_schedule schedule`, and the subsequent run does not automatically fail. Previously, the `cron_schedule` table filled with pending jobs, and `indexer_update_all_views` cron job did not run. [GitHub-23054](https://github.com/magento/magento2/issues/23054)

<!--- ENGCOM-8571-->

*  `cron` deadlocks no longer occur as a result of `cron` trying to set a lock in large deployments where groups overlapped. [GitHub-8933](https://github.com/magento/magento2/issues/8933)

<!--- ENGCOM-8571-->

*  `cron` deadlocks no longer occur on the `cron_schedule` table after only a few `cron` jobs have run. [GitHub-22438](https://github.com/magento/magento2/issues/22438)

### Custom customer attributes

<!--- MC-41611-->

*  The **State** field on the storefront Customer Account address book is now loaded as and remains a drop-down page element. The **Submit** button is now disabled until all page elements have been completely loaded. Previously, Magento loaded this field as a textbox before rendering it as a drop-down element, and shoppers could enter and save values in the text field, which later caused an error during checkout.

<!--- MC-40906 magento/partners-magento2ee#509-->

*  Magento now correctly displays custom customer address attributes on both storefront and Admin order pages. Previously, the selected option of the dropdown attribute was missing from the Address information section, and the value of the input attribute contained the attribute code. [GitHub-508](https://github.com/magento/partners-magento2ee/issues/508)

<!--- MC-40329-->

*  Magento no longer throws an error when you save a customer address attribute with a file attachment in the Admin Customer address field when uploading files. This occurred due to a missing return statement in the controller action. Previously, Magento threw this error: `Something went wrong while saving the file`.

<!--- MC-39354-->

*  REST GET Cart API calls now return correct custom attribute values for billing and shipping addresses. Previously, custom address attributes were displayed incorrectly in the order details page in the My account storefront page and in the Admin.

<!--- MC-24495-->

*  Magento now successfully handles files that contains customer address attributes with input type `file (attachment)`. Previously, Magento threw this error during upload of the attached file: `Something went wrong while saving the file`.

### Customer

<!--- MC-41216-->

*  Store credit email now takes into account the selected scope and is sent from the correct email address.

<!--- MC-40579-->

*  Filtering by account creation date now produces results that comply with configured timezone settings and that capture all relevant created accounts.

<!--- MC-40502-->

*  The customer grid filter now uses a correct website option for a restricted user if the data was previously cached. Previously, the customer grid filter retrieved website parameters from cache and included incorrect data for restricted users.

<!--- MC-39189-->

*  Magento no longer throws an exception on the Admin Customers page when one website is deleted in a multi-website deployment. Previously, when an administrator tried to access the comprehensive customers list, Magento did not display all customers and displayed this error: `The website with id 2 that was requested wasn't found. Verify the website and try again`.

<!--- MC-38913-->

*  Administrators with permission can now re-assign customers to different websites from the customer's Account Information tab.

<!--- MC-39852-->

*  You can now upload a file successfully when creating a customer address attribute with an input type of `(File)`. Previously, when you tried to upload and save a file, Magento threw this error: `Something went wrong while saving the file`.

### Customer segment

<!--- MC-40999-->

*  Magento now displays related products based on customer segments on the storefront as expected. Previously, Magento did not display this section when a related products rule was created for specific customer segments.

<!--- MC-40503-->

*  Dynamic blocks are now shown for registered customers in their shopping carts when the corresponding customer segment is applied for both guests and registered customers. Previously, Magento displayed the block only for guests.

<!--- MC-40385-->

*  Customer segments are now automatically updated after an order is placed from the Admin. Previously, after creating an Admin order, the Admin user had to manually refresh related segment data by navigating to related customer segments and click the **Refresh Segment Data** button.

<!--- MC-39490-->

*  Magento now displays dynamic blocks in the shopping cart for all customers in the relevant customer segments. Previously, guests did not see a block even when the customer segment included both guests and registered customers.

<!--- MC-39464-->

*  Database performance issues that result from customer segmentation rules using the `Product was Ordered` condition have been resolved.

<!--- MC-38895-->

*  A customer segment event observer for REST/SOAP API has been added. As a result, customer segments are now automatically updated as expected if the criteria defined in the segments are matched when orders are placed through the REST/SOAP API.

<!--- MC-38346-->

*  A customer segment events processor has been added for GraphQL requests. Previously, cart price rule discounts were not applied to the shopping cart when a customer segment was used in a cart price rule condition. [GitHub-371](https://github.com/magento/partners-magento2ee/issues/371)

### Directory

<!--- MC-39520-->

*  Magento no longer throws an exception when a shopper enters an invalid zip/postal code during the shipping section of the checkout workflow. [GitHub-23371](https://github.com/magento/magento2/issues/23371)

### Downloadable

<!--- MC-35779-->

*  Magento now displays links to downloadable products in the New Order email when the order contains both a downloadable product and a configurable product with a downloadable option. Previously, Magento displayed the link to the stand-alone downloadable product but not the link to the configurable product with a downloadable option.

### Dynamic block (formerly banner)

<!--- MC-40327-->

*  Dynamic blocks are now displayed only on the specified page. Previously, Magento displayed all banners that were assigned to the widget on all pages if no dynamic blocks were specified.

<!--- MC-39839-->

*  You can now save dynamic blocks with empty content.

### EAV

<!--- MC-41756-->

*  Customer address attribute date values are now saved in four-digit format instead of two-digit format.

### Email

<!--- MC-39757-->

*  The password reset link on the Admin reset password page now works as expected. Previously, when a custom template was used for the reset admin password page, Magento displayed this message when an administrator clicked the link inside the email: `Your password reset link has expired`. This occurred because the custom email template contained the wrong variable for the user ID.

<!--- MC-41588-->

*  Sending customer email from the Admin now works properly when enabled at the store-view level. Previously, Magento did not send customer emails when email notification settings were enabled at the store-view level but not the global level.

<!--- MC-40950-->

*  Magento now sends email as expected in multi-site deployments where not all websites have enabled asynchronous email sending. Previously, if at least one website had this setting disabled, email was not sent from any website, even when enabled. Invoice, Shipment, and Credit Memo emails had similar issues. However, Order Comments, Invoice Comments, Shipment Comments, and Credit Memo Comments emails were sent successfully. [GitHub-31950](https://github.com/magento/magento2/issues/31950)

<!--- MC-34323 magento/partners-magento2ee#505-->

*  The email message that Magento sends when you share a gift registry from the Admin now contains a valid link to the registry location. Previously, taking this link resulted in a 404 error. [GitHub-504](https://github.com/magento/partners-magento2ee/issues/504)

<!--- MC-30127 magento/magento2#31455-->

*  Invoices and invoice PDFs now include the same prices for bundle products as expected. Previously, invoice PDFs included the incorrect price for bundle products. [GitHub-12856](https://github.com/magento/magento2/issues/12856)

<!--- ENGCOM-9021-->

*  String casting has been added to the email template filter method to ensure the return value is a `string`. Previously, when an exception was caught while not in developer mode, Magento returned a `phrase` object. This in turn triggered a fatal `Uncaught TypeError`. [GitHub-32671](https://github.com/magento/magento2/issues/32671)

<!--- ENGCOM-8807-->

*  Order confirmation emails are now sent as expected when asynchronous sending is enabled (**Stores**  >  **Configuration**  >  **Sales**  > **Sales Emails**  >  **General Settings**  >  **Asynchronous sending**) on one website in a multi-site deployment. [GitHub-31950](https://github.com/magento/magento2/issues/31950)

<!--- MC-18023 ENGCOM-9000-->

*  Magento now logs an error as expected when an exception occurs as a customer attempts to send an email from the Contact Us form. [GitHub-23645](https://github.com/magento/magento2/issues/23645)

### Frameworks

<!--- MC-41712-->

*  Parent classes in the Admin are now checked for docblock annotation along with the original class and inherited interfaces. Previously, because parent classes were not checked, performing any customer-related actions in the Admin that triggered an event resulted in an error. Magento logged this error in the exception log: `report.CRITICAL: Method's return type must be specified using @return annotation.`.

<!--- MC-41192-->

*  Magento no longer throws a fatal error when the Redis server is stopped in a deployment in which Redis page caching is enabled.

<!--- MC-40739-->

*  Magento now honors the **Exclude media folder from backup** setting when backup is enabled with `bin/magento config:set system/backup/functionality_enabled 1`. Previously, the Media Folder was backed up despite this setting because the path to `/magento` was formed incorrectly with a double //.

<!--- MC-40654 ENGCOM-8881-->

*  Magento now translates all translatable strings as expected for the Admin cart page. Previously, translation load happened too late and skipped all observers that were subscribed to controller action pre-dispatch. [GitHub-31849](https://github.com/magento/magento2/issues/31849)

<!--- MC-39776-->

*  Form validation on the Create New Customer Account page now works successfully when the **Login as Customer** enable extension setting is disabled. Previously, Magento threw a JavaScript error.

<!--- MC-39537-->

*  Using `bin/magento setup:db-schema:split-sales` to move database tables now works as expected. Tables are now created and populated with data correctly. Previously, because the check for table existence was incorrect, Magento threw `SQLSTATE` errors when you ran `bin/magento setup:db-schema:split-sales`.

<!--- MC-39193-->

*  Exception handling for child processes forked by `ProcessManager` has been improved. When an exception occurs now, the main process exits and an error message is displayed only once. Previously, multiple indexer failures were logged and multiple messages were displayed. [GitHub-30622](https://github.com/magento/magento2/issues/30622)

<!--- MC-39132-->

*  Global Magento plugins (for example, `webapi_rest` and `graphql` ) are no longer triggered for a new custom Magento area type when the `di.xml` of this area file contains no registered plugins.

<!--- MC-38770-->

*  Exceptions that occur during initialization are no longer cached and now trigger a 500 response code.

<!--- MC-33179  magento/partners-magento2ee#431-->

*  Merchants can now assign or delete an image to and from a catalog event by store view. Previously, when you changed store view while editing a catalog event, the **Delete Image** checkbox was not active, and Magento displayed this error: `Uncaught ReferenceError: toggleValueElements is not defined at HTMLInputElement.onclick`. [GitHub-364](https://github.com/magento/partners-magento2ee/issues/364)

<!--- ENGCOM-8232-->

*  The last handler merged into a `communication.xml` file no longer overrides all previously created handlers. [GitHub-29528](https://github.com/magento/magento2/issues/29528)

### General fixes

<!--- MC-41194-->

*  Magento now displays the correct number of stars on the My Product Reviews page and on the MyAccount page recent reviews. Previously, Magento applied review stars to only the first review and left the other reviews on the page unstarred.

<!--- MC-40653-->

*  Account links in headers now follow WCAG standards. Previously, account links in headers contained duplicated IDs, which caused WCAG validation to fail.

<!--- MC-40528-->

*  Magento now saves catalog event dates in UTC time zones. Previously, Magento saved catalog event dates in the user's time zone.

<!--- MC-39765-->

*  Magento no longer throws system log-generated errors when a guest shopper uses an invalid address. Previously, Magento intermittently displayed this error instead of rendering the page: `No such entity with addressId`. [GitHub-15115](https://github.com/magento/magento2/issues/15115)

<!--- MC-39747-->

*  The image resizing process no longer halts for images in unsupported format. Previously, when `catalog:images:resize` encountered an unsupported image format, the process stopped and Magento displayed this error: `bin/magento catalog:images:resize Unsupported image format`.

<!--- ENGCOM-8925-->

*  WEBP and AVIF support for logo images has been added to the Admin. [GitHub-32495](https://github.com/magento/magento2/issues/32495)

<!--- MC-38156-->

*  You can no longer change the scope of the `media_gallery` attribute. Previously, when you changed the scope of the `media_gallery` attribute back to `global`, Magento threw an error.

<!--- MC-36818  magento/partners-magento2ee#470-->

*  Related products that were added as a scheduled update are no longer displayed on a storefront product page after the end date of the update. [GitHub-469](https://github.com/magento/partners-magento2ee/issues/469)

<!--- MC-34489 magento/partners-magento2ee#491-->

*  Magento now displays an accurate, informative message when you click on **Manage Items** on the My Account Gift Registry page and registry products are out-of-stock. Previously, Magento threw this error: `Error: Call to a member function getId() …`. [GitHub-490](https://github.com/magento/partners-magento2ee/issues/490)

<!--- MC-33667-->

*  You can now add a CMS page from the Add New Page page to the website root hierarchy as expected.

<!--- MC-33499 magento/partners-magento2ee#446-->

*  Filtering now works as expected on the list of scheduled exports when entity type is selected. Previously, the filter did not work, and Magento threw a JavaScript error. [GitHub-361](https://github.com/magento/partners-magento2ee/issues/361)

<!--- MC-30084 ENGCOM-8674-->

*  Category images are now copied as expected from the `catalog/tmp/category` directory to the `catalog/category` directory when categories are saved using the database storage method. The image row in the `media_storage_file_storage` table now also has the correct `directory_id`. [GitHub-11995](https://github.com/magento/magento2/issues/11995)

<!--- MC-24768-->

*  Merchants are now notified about invalidated caches as expected after submitting changes to the CMS hierarchy. Previously, Magento did not invalidate caches while saving CMS hierarchy.

<!--- MC-24725-->

*  Redundant AJAX requests to the cart section of the shopping cart have been reduced. Previously, Magento did not properly load the cart subtotal, which triggered cart reload again.

<!--- MC-23740-->

*  Added validation for URLs to prevent reserved words from inclusion in URL keys. See [Defining Well-Known Uniform Resource Identifiers (URIs)](https://tools.ietf.org/html/rfc5785)

<!--- ENGCOM-9037-->

*  On deployments running PHP 7.4, Magento now returns a 404 error when the **Generate "category/product" URL Rewrites** setting is set to **No**, and a shopper tries to access a non-existent category path. Previously, Magento returned a 500 error stating: `Trying to access array offset on value of type bool`. [GitHub-31984](https://github.com/magento/magento2/issues/31984)

<!--- MC-32257 magento/partners-magento2ee#507-->

*  You can now successfully edit a product that was created using an attribute set from which **Design Group And Schedule Design Update** groups had been removed.  Previously, when you tried to edit a product created from that attribute set, Magento threw a fatal error. [GitHub-44](https://github.com/magento/partners-magento2ee/issues/44)

<!--- ENGCOM-8901-->

*  `nowdoc` has replaced `heredoc` in the `Magento_Backend` store switcher. [GitHub-32262](https://github.com/magento/magento2/issues/32262)

<!--- ENGCOM-8539-->

*  Administrators are now directly redirected into the requested Admin page after login.  Previously, when an administrator logged in, they were redirected to the Admin dashboard (or whichever page was configured as the startup page) and had to manually navigate to their destination. [GitHub-31042](https://github.com/magento/magento2/issues/31042)

<!--- ENGCOM-8685-->

*  Added Argentina, Bolivia, Chile, Ecuador, Guyana, Paraguay, Peru, Suriname, and Venezuela regions to the `directory_country_region` table. [GitHub-31169](https://github.com/magento/magento2/issues/31169)

<!--- ENGCOM-8505-->

*  Added Albania, Denmark, Greece, Iceland, Portugal, and Sweden regions to the `directory_country_region` table. [GitHub-31040](https://github.com/magento/magento2/issues/31040)

<!--- MC-30104 magento/magento2#31480 -->

*  Messages are now flagged as errors in the MysqlMQ message queue when exceptions occur. [GitHub-18140](https://github.com/magento/magento2/issues/18140)

<!--- ENGCOM-8579-->

*  Magento now references the correct class object when loading tax info for the Admin credit memo and invoice pages. [GitHub-31197](https://github.com/magento/magento2/issues/31197)

<!--- MC-40346-->

*  Royal Mail Click & Drop integration now works as expected. Previously, Magento threw this error when you tried to activate his integration: `Sorry! Something went wrong. Please try again later`. [GitHub-28996](https://github.com/magento/magento2/issues/28996)

<!--- ENGCOM-8498-->

*  Magento now displays an informative error message when an incorrect shipment, credit memo, or invoice ID is passed in a URL. Previously, Magento threw a fatal error. [GitHub-30424](https://github.com/magento/magento2/issues/30424)

<!--- ENGCOM-8632-->

*  Recursion in the location of static files has been removed.  Magento now displays a 404 page instead of a 500 error. Previously, a bug in the default NGINX configuration lead to infinite recursion. [GitHub-31530](https://github.com/magento/magento2/issues/31530)

<!--- ENGCOM-8550-->

*  The name of the `cms_index_noroute.xml` file has been corrected to `cms_noroute_index.xml`. [GitHub-31300](https://github.com/magento/magento2/issues/31300)

<!--- ENGCOM-8516-->

*  The `.editorconfig` file has been refactored to correct the automatic formatting of `db_schema_whitelist.json` files. [GitHub-31171](https://github.com/magento/magento2/issues/31171)

<!--- ENGCOM-9018-->

*  Resizing a browser window no longer triggers duplicate binding magnifier events. [GitHub-30788](https://github.com/magento/magento2/issues/30788)

<!--- ENGCOM-8722-->

*  Magento no longer throws an SQL exception when filtering `Magento\Users\Model\ResourceModel\Users\Collection` by `user_id`. [GitHub-31216](https://github.com/magento/magento2/issues/31216)

### Gift cards

<!--- MC-40412-->

*  Pending payment charges are now removed from a gift card as expected when a gift card is canceled. Previously, Magento threw an error when `cron` ran after the gift card was deleted.

<!--- MC-37658-->

*  Shoppers can now remove gift cards from an order on the Review Order page when checking out with multiple addresses. Previously, Magento did not remove the gift card from the order when the shopper selected the card and then clicked **Remove**.

<!--- MC-34407-->

*  Magento now displays the new price of a gift card in the shopping cart when you change the value of the gift card after adding it the cart.

<!--- MC-32651-->

*  Price range validation logic has been added to the gift card creation page. Previously, an administrator could create a card with a minimum value that exceeded the maximum value. [GitHub-493](https://github.com/magento/partners-magento2ee/issues/493)

<!--- MC-32638979 magento/partners-magento2ee#40851-->

*  The `addRequisitionListItemsToCart` query now returns the amount of a custom gift card as expected when the request does not contain a value for `allow_open_amount`.

<!--- MC-32373-->

### Gift message

<!--- MC-38655-->

*  The `setGiftOptionsOnCart` mutation now correctly creates gift messages. [GitHub-388](https://github.com/magento/partners-magento2ee/issues/388)

### Gift registry

<!--- MC-33057 magento/partners-magento2ee#467-->

*  **Event date** values are now the same on the storefront and Admin during gift registry creation or editing. Previously, each time you edited and saved the gift registry, Magento adjusted the **Event date** one day backward on both the storefront and Admin. [GitHub-466](https://github.com/magento/partners-magento2ee/issues/466)

<!--- MC-32587  magento/partners-magento2ee#511-->

*  Magento no longer displays disabled products in gift registries. Previously, if a product were disabled after being added to a gift registry, Magento displayed this message when a shopper accessed the registry: `Error: Call to a member function getId() …`. [GitHub-510](https://github.com/magento/partners-magento2ee/issues/510)

### Gift wrapping

<!--- MC-38260-->

*  Translation of gift wrap labels for store views now works as expected.

<!--- MC-36749-->

*  Gift wrapping is now applied as expected to orders being shipped to multiple addresses.

<!--- MC-34820-->

*  Magento now removes gift wrapping charges from the shopping cart when all products have been removed.

<!--- MC-32259 magento/partners-magento2ee#500-->

*  Credit Memo totals are now correct when the credit memo contains gift wrap and configurable product charges. Previously, the gift wrap tax amount was not always included in the credit memo total. [GitHub-34](https://github.com/magento/partners-magento2ee/issues/34)

### Google Analytics

<!--- ENGCOM-8450-->

*  Magento no longer throws an error when an administrator tries to load a page on the storefront when Google Analytics is enabled. A CSP entry for `connect-src` has been added to allow AJAX requests to www.google-analytics.com. [GitHub-30880](https://github.com/magento/magento2/issues/30880)

### Google Tag Manager

<!--- MC-39072-->

*  The UI component for the billing address on the payment page of the checkout workflow now uses quote address correctly when Google Tag Manager is enabled. Previously, a JavaScript error occurred on the payment page.

### GraphQL

<!--- MC-41885-->

*  The GraphQL `products` query now returns attribute options that are sorted in the same sort order as used on the attribute edit page.

<!--- MC-41473-->

*  The response to the `{ category(id: 2){ children { name children { name } } } }` GraphQL request now includes a correctly sorted category tree.

<!--- MC-41030-->

*  The `CartItemPrices` object now contains the new GraphQL field `fixed_product_taxes`, which returns an array of the fixed product taxes that are applied to a cart item. Previously, fixed product taxes that were applied to a cart item were not included in the cart query.

<!--- MC-40920-->

*  Empty requests to GraphQL now throw response code 200 instead of 500. Previously, the GraphQL parser threw an exception before the query result was generated.

<!--- MC-40867 magento/partners-magento2ee#532--->

*  The `applyRewardPointsToCart` mutation now updates a cart's grand total to accurately reflect the value of the reward points deducted. [GitHub-486](https://github.com/magento/partners-magento2ee/issues/486)

<!--- MC-40379-->

*  Disabled products are no longer included in the GraphQL response when GraphQL is used to link upsell products.

<!--- MC-40262-->

*  Merchants can now use the GraphQL `setShippingAddressesOnCart` method to set billing and shipping addresses for a shopper's cart when guest checkout is disabled.

<!--- MC-39508-->

*  The `categoryList` query no longer throws an exception when it contains multiple fragments on the `CategoryTree` object. [GitHub-31086](https://github.com/magento/magento2/issues/31086)

<!--- MC-38995-->

*  The GraphQL `product` query now returns the correct customer group prices.

<!--- MC-38822-->

*  The GraphQL `products` query response now sorts aggregations according to product attribute position.

<!--- ENGCOM-8462-->

*  Magento no longer throws type errors during GraphQL queries when product and category URL suffixes contain null values. [GitHub-30909](https://github.com/magento/magento2/issues/30909)

<!--- magento/magento2#31164-->

*  The `CustomizableDateValue` object now contains the `type` attribute. Its value is an enumeration that can be set to DATE, DATE_TIME, or TIME.

<!---  magento/partners-magento2ee#421-->

*  The [`dynamicBlocks` query]({{page.baseurl}}/graphql/queries/dynamic-blocks.html) returns the contents of dynamic blocks that match the specified filters.

<!--- ENGCOM-8603-->

*  The POST `V1/products/special-price-delete` request now deletes only the price with a specified `store_id` as expected. Previously, the call removed all special prices for the specified  SKU from all stores. [GitHub-25907](https://github.com/magento/magento2/issues/25907)

<!---  magento/partners-magento2ee#280 -->

*  Fixed an error with the `country_code` attribute in the `createGiftRegistry` mutation.

<!--- magento/partners-magento2ee#280 -->

*  Fixed problems with the `giftRegistryUid` attribute of the `updateGiftRegistryItems` mutation.

<!--- magento/partners-magento2ee#280 -->

*  Added an additional check to prevent the `updateGiftRegistryRegistrants` mutation from being used to add random people as a registrants to a gift registry.

<!--- magento/magento2#31380 -->

*  The `addConfigurableProductsToCart` mutation now returns the correct thumbnail of the specified product. Previously, it returned the thumbnail of the parent product.

<!--- ENGCOM-8477-->

*  The `products` query no longer exposes a product's special price when the special price period is set for a future date. [GitHub-30210](https://github.com/magento/magento2/issues/30210), [GitHub-29631](https://github.com/magento/magento2/issues/29631)

<!--- magento-engcom/magento2ee#576-->

*  The `customer` query response now includes the `total_giftcard` attribute as part of the `OrderTotal` object.

<!--- MC-41084 ENGCOM-9042 -->

*  Corrected a problem that caused the `products` query to return erroneous info about price tiers on items that do not have tier pricing set. [GitHub-32279](https://github.com/magento/magento2/issues/32279)

### Image

<!--- MC-38951-->

*  You can now set the required_options and has_options bundle attributes as expected while creating or updating a bundle product using the POST `/V1/product/:sku` endpoint. Previously, these custom attributes were set to 0 (zero) despite efforts to set it to 1 (one).

### Import/export

<!--- MC-41576-->

*  The Category IDs filter for product entities in the Export page Entity Attributes grid now works as expected.

<!--- MC-41439 ENGCOM-9005-->

*  Grouped product stock status now updates as expected to out-of-stock when all child products are out-of-stock. [GitHub-32647](https://github.com/magento/magento2/issues/32647)

<!--- MC-41184-->

*  Configurable product stock status is now automatically updated as expected when child product stock status is updated by import. Previously, product stock status was not automatically updated when child products stock status was updated by import.

<!--- MC-41151-->

*  You can now save empty values in a scheduled export. Previously, Magento updated empty filter values after export creation or save. Both `no` and `not specified` values were represented by zero in the database, and a value of `not selected` was overridden with `no`.

<!--- MC-41092-->

*  The export process now takes into account user role scope when exporting product, stock sources, and customer entities. Previously, the export process ignored user role scope, which permitted the export of private user role export entities.

<!--- MC-40943-->

*  Magento now sets the product tax class to `None` if a product is imported with `tax_class_name` values `None` or `0`. Previously, if `product tax_class_name` was `None` in the CSV file, Magento created a new tax class `None`, which duplicated the existing tax class. If `product tax_class_name` were `0` in the CSV file, Magento ignored that value, and product tax class did not change after import.

<!--- MC-40898-->

*  Administrators can now successfully change the `name` of a bundle product's `bundle_values` from the Admin. Previously, Magento displayed the product as out-of-stock on the storefront after you changed the name from the Admin. Products were also merged with the same SKU into a single bundle-option section.

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

### Index

<!--- MC-39718 ENGCOM-8567-->

*  Process Manager now exits with an error when a child process fails. Previously, Process Manager always exited successfully if the number of functions passed to it (for example, indexer dimensions) was lower than the value of the `MAGE_INDEXER_THREADS_COUNT` environment variable. [GitHub-30964](https://github.com/magento/magento2/issues/30964)

<!--- MC-39272-->

*  Products are now available as expected in storefront search results when linking products using a REST PUT `/V1/products/:sku/links` request when indexer mode is set to **Update on Save**.

<!--- MC-38310 magento/magento2#32693-->

*  The catalog price rule indexer now works as expected when the indexer mode is set to **Update on Save**. [GitHub-370](https://github.com/magento/partners-magento2ee/issues/370)

<!--- ENGCOM-8890-->

*  Deleting a disabled category that does not include a product now has no effect on catalog search and category flat index tables. Previously, deleting an inactive category triggered a full re-index. [GitHub-23297](https://github.com/magento/magento2/issues/23297)

<!--- ENGCOM-8599 8474-->

*  Custom indexers can now use different entity column names for subscriptions. Previously,  the database trigger used the column name from the indexer last set to **Update by Schedule** rather than the designated indexer. [GitHub-21853](https://github.com/magento/magento2/issues/21853)

<!--- ENGCOM-8887-->

*  Magento no longer sends AJAX requests to reload customer data sections (`Magento_Customer/js/section-config`) that are unaffected by the request. [GitHub-31948](https://github.com/magento/magento2/issues/31948)

<!--- MC-39569-->

*  The following indexers are no longer invalidated after you add, remove, or reorder products in a category: `catalog_category_product` and `catalogsearch_fulltext` (and their dependents). Previously, these inadvertent removals triggered full re-indexing of sites. A full re-index is now prevented under these conditions when flat catalog is not enabled.

### Infrastructure

<!--- MC-41445-->

*  The Magento dependency `pelago/emogrifier` has been updated from version 3.1.0 to 5.0.0. This update resulted in the introduction of backwards-incompatible changes to the `Magento\Email\Model\Template\Filter` class. The changed code is executed during Magento email templates rendering. See [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html).

<!--- MC-42212-->

*  Corrected an issue with `\Magento\CatalogInventory\Model\Indexer\Stock\CacheCleaner::getCategoryIdsByProductIds` that prevented saving a new product.

<!--- MC-42199-->

*  The deprecated TinyMCE v3 library has been removed. The `Magento_Tinymce3Banner` module and MFTF tests related to TinyMCE v3.x have been removed from {{site.data.var.ee}}.

<!--- MC-41497-->

*  Magento no longer throws an `Invalid header value detected` error on the Contact us form when a shopper enters an email address that contains French diacritic marks (such as "é", "è"). Magento now converts UTF-8 letters in the user name to ASCII encoding. Previously, UTF-8 letters were not converted to ASCII encoding in the unique section of the email address.

<!--- MC-39947-->

*  Magento no longer throws a PHP fatal error when a plugin is added to a parent class. [GitHub-31291](https://github.com/magento/magento2/issues/31291)

<!--- ENGCOM-9012-->

*  Updated the README.md files for these modules: `Magento_Msrp`, `Magento_MsrpConfigurableProduct`, `Magento_MsrpGroupedProduct`, `Magento_Multishipping`, `Magento_MysqlMq`. [GitHub-32577](https://github.com/magento/magento2/issues/32577)

<!--- magento/partners-magento2ee#501-->

*  `phpcpd` has been updated to v6.0.3 for PHP 8 compatibility.

<!--- ENGCOM-9073-->

*  `ramsey/uuid` has been updated for compatibility with PHP 8.0. [GitHub-31777](https://github.com/magento/magento2/issues/31777), [GitHub-826](https://github.com/magento/magento2-functional-testing-framework/issues/826)

<!--- ENGCOM-8997-->

*  `colinmollenhour/php-redis-session-abstract` has been updated to v1.4.4 for PHP 8 compatibility. [GitHub-32709](https://github.com/magento/magento2/issues/32709)

<!--- ENGCOM-8527-->

*  Corrected an invalid combination of tabs and spaces in the `phpstan.neon` file. [GitHub-31239](https://github.com/magento/magento2/issues/31239)

<!--- ENGCOM-8668-->

*  Removed use of obsolete property `$_isScopePrivate` throughout the code base. [GitHub-30506](https://github.com/magento/magento2/issues/30506)

<!--- ENGCOM-8551-->

*  Page layouts are no longer hard-coded in  `Magento\Widget\Block\Adminhtml\Widget\Instance\Edit\Chooser\Container`.  As a result, the `getPageLayouts()` function now returns the actual list of page layouts declared by the different modules as expected. Previously, it returned only hard-coded layouts. [GitHub-31168](https://github.com/magento/magento2/issues/31168)

<!--- ENGCOM-8509-->

*  The `composer.lock` file has been updated to the latest version of the Magento Coding Standard. [GitHub-31152](https://github.com/magento/magento2/issues/31152)

<!--- ENGCOM-9015 -->

*  Added a missing dependency on the `web-token/jwt-framework` package to the `magento/module-jwt-framework-adapter`. [GitHub-32578](https://github.com/magento/magento2/issues/32578)

<!--- ENGCOM-9019 -->

*  Passive listeners have been added to the `fotorama.js` library to improve lighthouse metrics score. [GitHub-31140](https://github.com/magento/magento2/issues/31140)

<!--- ENGCOM-9014 -->

*  The README.md file for the Google Analytics module has been updated. [GitHub-32616](https://github.com/magento/magento2/issues/32616)

<!--- ENGCOM-8375 -->

*  Process Manager now handles exceptions properly in forked processes. The main process now exits, and Magento now displays an error message only once. Also, the exceptions from the forked processes are now handled when they are thrown in the main process. Previously, Magento logged multiple indexer failures and displayed multiple error messages.  [GitHub-30622](https://github.com/magento/magento2/issues/30622)

<!--- ENGCOM-8544 -->

*  Magento no longer throws an error when a plugin is added to a parent class. (The `optionsProvider` parameter is now declared after `getContentIdentities` in `Assest.php`.) Previously, Magento threw this error:  `Error: Cannot instantiate interface Magento\Framework\Data\OptionSourceInterface`. [GitHub-31291](https://github.com/magento/magento2/issues/31291)

<!--- ENGCOM-8549 -->

*  Executing `Magento\Framework\Filesystem\Io\Ftp::ls()` on an empty folder now returns an empty array as expected. Previously, Magento threw this exception: `Invalid argument supplied for foreach() in vendor/magento/framework/Filesystem/Io/Ftp.php…`. [GitHub-31288](https://github.com/magento/magento2/issues/31288)

<!--- ENGCOM-8791 -->

*  The `update` method for both Role and Rules has been marked as deprecated in `app/code/Magento/Authorization/Model/Role.php`. [GitHub-30756](https://github.com/magento/magento2/issues/30756)

<!--- ENGCOM-8946 -->

*  Concatenation for SameSite cookie parameters has been corrected. Previously, incorrect concatenation appended the `lex` suffix to `value`, `domain`, and other parameters. [GitHub-26377](https://github.com/magento/magento2/issues/26377), [GitHub-32440](https://github.com/magento/magento2/issues/32440)

<!--- ENGCOM-8698 ENGCOM-9034 -->

*  `allure-framework/allure-phpunit` has been upgraded to v1.3.1 throughout the code base. Previously, Magento displayed this error:  `Warning: Use of undefined constant GLOB_BRACE - assumed 'GLOB_BRACE' (this will throw an Error in a future version of PHP) in /var/www/html/src/vendor/allure-framework/allure-phpunit/src/Yandex/Allure/Adapter/AllureAdapter.php:74.` [GitHub-24635](https://github.com/magento/magento2/issues/24635)

<!--- ENGCOM-8783 -->

*  Magento now displays more informative errors when errors occur running `bin/magento` commands in production mode. Previously, either Magento  displayed no error messages or displayed messages that lacked information. [GitHub-32786](https://github.com/magento/magento2/issues/32786)

<!--- ENGCOM-8953 -->

*  The `ArrayIterator` PHP object has been updated to work as expected with PHP 7.4. [GitHub-32088](https://github.com/magento/magento2/issues/32088)

<!--- ENGCOM-8469 -->

*  Magento no longer throws an error when a customer tries to complete an order when no shipping carriers are available. Instead, it displays the checkout page and this message: `Sorry, no quotes are available for this order at this time`. Previously, Magento displayed a blank checkout page and recorded this message in the exception log: `array_keys() expects parameter 1 to be array, null given`. [GitHub-30830](https://github.com/magento/magento2/issues/30830)

<!--- ENGCOM-8557 -->

*  Magento no longer logs each cookie as a separate context. The `$_COOKIE` array has also been converted to a string. Previously, because each cookie was logged as a separate context, when the number of cookies exceeded 50, Magento logged this message: `Unable to send the cookie. Maximum number of cookies would be exceeded`. [GitHub-31334](https://github.com/magento/magento2/issues/31334)

### Invoice

<!--- ENGCOM-8472 -->

*  When creating new invoices in the Admin, the **Email Copy of** checkbox now works as expected. Previously, the checkbox was ignored if the global setting to send invoice emails was enabled in **Sales Emails**. It is now consistent and operates the same way as the shipment and credit memo creation pages. [GitHub-28511](https://github.com/magento/magento2/issues/28511)

### Media Gallery

<!--- MC-41728-->

*  `bin/magento media-gallery:sync` now fails as expected when processing PNG images that lack XMP information.

<!--- ENGCOM-8814-->

*  Entries in the `catalog_product_entity_media_gallery` table are removed as expected when related products are deleted. [GitHub-17727](https://github.com/magento/magento2/issues/17727)

<!--- ENGCOM-8945-->

*  Image details can now be updated in the Media Gallery when JavaScript minification is enabled. Previously, image details were not saved, and Magento displayed this error: `TypeError: Cannot read property 'call' of undefined in jquery.validate`. [GitHub-31633](https://github.com/magento/magento2/issues/31633)

### MFTF

New features and MFTF core bug fixes are described in the [Magento Functional Testing Framework Changelog](https://github.com/magento/magento2-functional-testing-framework/blob/develop/CHANGELOG.md).

<!--- ENGCOM-8496-->

*  The `magento indexer:reindex` and `cache:flush` commands and the `AdminReindexAndFlushCache` action group have been removed from tests to improve execution for the following modules: `Bundle`, `Catalog`, `CatalogRule`, `CatalogRuleConfigurable`, `CatalogUrlRewrite`, `Downloadable`, `Indexer`, `Paypal`, and `Sales`. [GitHub-31031](https://github.com/magento/magento2/issues/31031)

<!--- ENGCOM-8562-->

*  `AdminSubmitCategoriesPopupActionGroup` has been added to tests to prevent test failure. [GitHub-31251](https://github.com/magento/magento2/issues/31251)

<!--- ENGCOM-8562-->

*  Tests have been refactored with `StorefrontCheckQuickSearchStringActionGroup` and `StorefrontAssertProductNameOnProductMainPageActionGroup` (existing action groups). [GitHub-31251](https://github.com/magento/magento2/issues/31251)

#### Refactored tests

The following tests have been refactored to improve execution time:

`AddOutOfStockProductToCompareListTest`  <!--- ENGCOM-8547-->

`AdminApplyTierPriceToProductWithPercentageDiscountTest` <!--- ENGCOM-8522-->

`AdminCheckingCreditMemoTotalsTest` <!--- ENGCOM-8606-->

`AdminCheckDashboardWithChartsTest` <!--- ENGCOM-8897-->

`AdminConfigDefaultProductLayoutFromConfigurationSettingTest`  <!--- ENGCOM-8891-->

`AdminCreateInvoiceTest` <!--- ENGCOM-8581-->

`AdminCreateOrderAddProductCheckboxTest` <!--- ENGCOM-8492-->

`AdminMassOrdersCancelCompleteAndClosedTest` <!--- ENGCOM-8538-->

`AdminMassOrdersCancelProcessingAndClosedTest`  <!--- ENGCOM-8670-->

`AdminMassOrdersHoldOnCompleteTest`  <!--- ENGCOM-8897-->

`AdminMassOrdersHoldOnPendingAndProcessingTest`  (replacement for deprecated `AdminMassOrdersHoldOnPendingAndProcessingTest`) <!--- ENGCOM-8669-->

`AdminMassOrdersUpdateCancelPendingOrderTest` <!--- ENGCOM-8602-->

`AdminMassProductPriceUpdateTest` <!--- ENGCOM-8587-->

`AdminMassUpdateProductAttributesMissingRequiredFieldTest` <!--- ENGCOM-8511-->

`AdminOrdersReleaseInUnholdStatusTest`  <!--- ENGCOM-8592—-->

`AdminPanelIsFrozenIfStorefrontIsOpenedViaCustomerViewTest`  <!--- ENGCOM-8601-->

`AdminSortingByWebsitesTest`  <!--- ENGCOM-8583-->

`AdminUpdateSimpleProduct` <!--- ENGCOM-8536-->

`AdminUpdateSimpleProductWithRegularPriceInStockEnabledFlatTest`  <!--- ENGCOM-8533-->

`AdminValidateShippingTrackingNumberTest`  <!--- ENGCOM-8593-->

`CancelOrdersInOrderSalesReportTest`  <!--- ENGCOM-8591-->

`ProductsQtyReturnAfterOrderCancelTest` <!--- ENGCOM-8506-->

`StorefrontConfigurableProductBasicInfoTest`  <!--- ENGCOM-8711-->
#### Action groups

Repetitive actions have been replaced with action groups in these tests:

`AdminCheckConfigurableProductPriceWithDisabledChildProductTest`  <!--- ENGCOM-8574-->

`AdminConfigurableProductCreateTest` <!--- ENGCOM-9013-->

`AdminConfigurableProductRemoveAnOptionTest` <!--- ENGCOM-9038-->

`AdminCreateProductDuplicateUrlkeyTest` <!--- ENGCOM-9007-->

`AdminCreateSimpleProductNegativePriceTest` <!--- ENGCOM-900-->

`AdminCreateSimpleProductZeroPriceTest`  <!--- ENGCOM-9040-->

`AdminCreateVirtualProductFillingRequiredFieldsOnlyTest` <!--- ENGCOM-9003-->

`AdminUpdateSimpleProductWithRegularPriceInStockDisabledProductTest` <!--- ENGCOM-9002-->

`AdminUpdateSimpleProductWithRegularPriceInStockNotVisibleIndividuallyTest`  <!--- ENGCOM-9011-->

`AdminUpdateSimpleProductWithRegularPriceInStockVisibleInCatalogOnlyTest`  <!--- ENGCOM-9041-->

#### New action groups

`AdminClearFiltersOnGridActionGroup` <!--- ENGCOM-8604-->

`AdminClickAddNewPageOnPagesGridActionGroup`  <!--- ENGCOM-8613-->

`AdminClickInsertWidgetActionGroup` <!--- ENGCOM-8614-->

`AdminClickRefundOfflineOnNewMemoPageActionGroup` <!--- ENGCOM-8580-->

`AdminFillAccountInformationOnCreateOrderPageActionGroup` <!--- ENGCOM-8495-->

`AdminGoToOrderStatusPageActionGroup`  <!--- ENGCOM-8615-->

`AdminOpenCMSPagesGridActionGroup`<!--- ENGCOM-8682-->

`AdminSelectAttributeSetOnEditProductPageActionGroup` <!--- ENGCOM-8566-->

`AssertAdminProductIsAssignedToCategoryActionGroup`  (replaces filtering Products Grid by SKU and clicking the first row (in order to decrease test execution time) <!--- ENGCOM-8535 8534-->

`AssertLinkActionGroup` <!--- ENGCOM-8457-->

`AssertStorefrontCartDiscountActionGroup` <!--- ENGCOM-8431-->

`ClickPlaceOrderActionGroup` <!--- ENGCOM-8671-->

`SaveCmsPageActionGroup` <!--- ENGCOM-8683-->

`StorefrontAssertProductNameIsNotOnProductMainPageActionGroup` <!--- ENGCOM-8562-->

`StorefrontGuestCheckoutProceedToPaymentStepActionGroup` <!--- ENGCOM-8582-->

`StorefrontHoverProductOnCategoryPageActionGroup` <!--- ENGCOM-8575-->

`StorefrontSelectCustomizeAndAddToTheCartButtonActionGroup` <!--- ENGCOM-8573-->

#### Deleted action groups

<!--- ENGCOM-8525 8558 8608 8546 8695 8889 8681 8627 8714-->

*  Removed  `CliIndexerReindexActionGroup` (or changed value) from tests to improve execution time for the `Backend`, `Bundle`, `BundleImportExport`, `Catalog`, `CatalogRule`, `CatalogSearch`, `Checkout`, `Downloadable`,  `Elasticsearch`,  `Elasticsearch6`,  `Indexer`, `LayeredNavigation`,  `LoginAsCustomer`,  `Newsletter`, `Sales`, `SalesRule`, `Search`, `Store`,  `Swatches`, `UrlRewrite`, `Weee`, and `Wishlist`modules.

<!--- ENGCOM-8893 8951 8893 9001 8715 8724 8721 8843-->

*  Removed `CliCacheFlushActionGroup` from `Catalog`, `CatalogUrlRewrite`, `Checkout`, `Config`, `ConfigurableProduct`,`Contact`, `Cookie`, `CurrencySymbol`, `Customer`, `Downloadable`, `Elasticsearch`, `Elasticsearch6`, `Fedex`, `Indexer`, `LayeredNavigation`,`LoginAsCustomer`, `Msrp`, `Multishipping`, `Sales`, `Swatches`, `Translation`, `UrlRewrite`, `Vault`, `Weee`, and `Wishlist` modules.

### Newsletter

<!--- ENGCOM-8948 MC-40885-->

*  Magento no longer sends newsletter email  to a customer who has been unsubscribed from the newsletter in the time period between newsletter queue creation and the sending of the newsletter. [GitHub-32116](https://github.com/magento/magento2/issues/32116)

<!--- ENGCOM-8675-->

*  Magento now honors newsletter enablement settings (**Stores**  >  **Settings**  >  **Configuration**  >  **Customers**  >  **Newsletter**  >  **General Options**). Previously, these settings were always retrieved from the default scope in multi-store deployments. [GitHub-31188](https://github.com/magento/magento2/issues/31188)

<!--- ENGCOM-8551-->

*  The REST call GET `/V1/customers/search` now returns correct information for customers that are subscribed to multiple newsletters. [GitHub-31168](https://github.com/magento/magento2/issues/31168)

<!--- ENGCOM-8817-->

*  Caching subscription status has been removed from the newsletter plugin. [GitHub-19345](https://github.com/magento/magento2/issues/19345)

### Order

<!--- MC-40963-->

*  Magento now correctly calculates an invoiced customer balance when returning store credit to a customer account for a partially invoiced order.

<!--- ENGCOM-8710-->

*  Magento now saves a modified order as expected when it saves a refunded customer balance. [GitHub-393](https://github.com/magento/partners-magento2ee/issues/393)

### Payment methods

<!--- MC-41525-->

*  Magento now renders payment blocks on `frontend` regardless of the area from which the email was sent. (The current area is now emulated as `frontend` before the payment block is rendered.) Previously, payment blocks were rendered in the area from which the email was sent. As a result, whether sales email was triggered from the Admin or by the REST API, URLs for assets attempted to load them from the wrong area (`webapi_rest` or `adminhtml`).

<!--- MC-40810-->

*  Magento now sends the link for a downloadable product to the email address that is specified during checkout. Previously, when a guest shopper used PayPal Express Checkout and entered different email addresses to submit the order and to check out, Magento sent the downloadable product link to the first address.

<!--- MC-38051-->

*  Magento now displays an accurate value for available store credit on the Payment Method page in deployments that support multiple currencies.

<!--- MC-37820-->

*  The payment methods list is now updated as expected when a guest shopper changes an order's shipping address to a different country during checkout. Previously, changing billing address did not trigger an update of the possible payment methods.

#### PayPal

<!--- MC-39895-->

*  Shoppers can now successfully check out a PayPal Payflow Pro order with a shipping address that contains special characters. Previously, Magento declined payment for these orders.

<!--- MC-39861-->

*  Shoppers are now redirected back to the order success page after a successful payment using PayPal. Previously, shoppers were redirected to a blank page because session data was lost.

### Performance

<!--- MC-41647-->

*  The performance of Admin SKU search on large catalogs has improved. Query optimizer hints now force index usage during query execution.

<!--- MC-41440-->

*  The performance of the `catalog_product_alert` `cron` process when running on large tables (several million rows) has been improved. Previously, `catalog_product_alert` loaded all product alerts, which caused an out-of-memory exception.

<!--- ENGCOM-8752-->

*  Magento no longer loads all CMS pages when needing only one edit page to render an Admin form.  These pages now load faster. [GitHub-30936](https://github.com/magento/magento2/issues/30936)

<!--- ENGCOM-8510-->

*  Numeric values in `WHERE IN` expressions are now cast as number, not as string, which improves query performance in some versions of MariaDB. [GitHub-31135](https://github.com/magento/magento2/issues/31135)

*  The `use_application_lock` mode lets you enable re-indexing through either the use of environment variables or by configuring the `app/etc/env.php` file. You no longer need to manually reset the indexer after failure with this mode enabled. When this mode is not enabled, you must manually reset the indexer after failure. See [Using application lock mode for reindex processes]({{page.baseurl}}/extension-dev-guide/indexing.html#using-application-lock-mode-for-reindex-processes)

### Pricing

<!--- MC-41767-->

*  Magento now correctly updates the price of a product with grouped prices when a shopper updates product quantity on the storefront. [GitHub-32669](https://github.com/magento/magento2/issues/32669)

<!--- MC-39282-->

*  Bundle products can now be saved when products have been assigned a tier price and `Magento\Framework\Api\ExtensibleDataObjectConverter` is used to convert product data. Previously, when `Magento\Framework\Api\ExtensibleDataObjectConverter` was used to convert product data to an array when a product was saved, Magento did not save the product and displayed this error: `Notice: Undefined index: price in app/code/Magento/Catalog/Model/Product/Type/Price.php on line 382.`

<!--- MC-36811-->

*  Scheduled price updates are now applied to products already in a shopper's cart. [GitHub-356](https://github.com/magento/partners-magento2ee/issues/356)

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

*  Invoice sending is now configurable. Previously, invoice sending was not configurable, and Magento always sent an invoice after it was created. Invoice and order emails were both sent in the scope of one observer. Separate observers now govern the sending of order email and invoice email. [GitHub-27656](https://github.com/magento/magento2/issues/27656)

### Reports

<!--- MC-40998-->

*  All system reports can now be viewed on and downloaded from the Magento Cloud instance. Previously, you could not download system reports for Logs, Data, Design, or Stores.

<!--- MC-39737-->

*  The Last Review date on Admin **Reports** > **Reviews** > **By Products** now displays the correct review date. Previously, Magento displayed the product creation date instead of the review date.

### Return Merchandise Authorizations (RMA)

<!--- MC-41866-->

*  The RMA `resolution` attribute is no longer shown as required when the attribute field value `required` is set to **no**.

<!--- MC-41808-->

*  You can now select multiple orders for return from the Admin. Previously, Magento threw an error when you clicked **Submit** after selecting multiple returns and selecting Closing from the Actions dropdown menu.

<!--- MC-41759-->

*  Magento now sends email notification to customers as expected after you change the status of a return using the REST API.

<!--- MC-39981  magento/partners-magento2ee#442 -->

*  Magento now filters records according to filter values in the Admin customer returns grid. Previously, Magento directed you to the Admin All Customers page, and clicking the **Reset Filter** button also redirected to this page. [GitHub-436](https://github.com/magento/partners-magento2ee/issues/436)

### Reviews

<!--- MC-40116-->

*  Product review rating stars are now correctly calculated in the Review Details section of the My Account page.

<!--- MC-39763-->

*  The Average Product Rating and Product Ratings sections of the product review details page now render correctly. Previously, the review ID was not set when Magento calculated the storefront rating, and the product review template was not properly rendered.

<!--- MC-36149-->

*  The **Be the first to review this product** link now changes as expected to a review count after an administrator approves a review.

<!--- ENGCOM-8501 MC-30270-->

*  Administrators can now sort product reviews on the Product Reviews section of the product edit page as expected. [GitHub-30270](https://github.com/magento/magento2/issues/30270)

<!--- MC-41003  magento/magento2#32259-->

*  Reviews are now saved with the correct store ID after an administrator approves and saves the review from a different domain than the store. [GitHub-17510](https://github.com/magento/magento2/issues/17510)

### Rewards

<!--- MC-41159-->

*  Merchants can now cancel an order that was placed totally or partially using reward points after the customer that placed the order has been removed from the system.

<!--- MC-40037-->

*  Merchants can now remove reward points from cart price rules. Previously, when a merchant tried to set **Reward Points** to 0 when creating a cart price rule, the previous value for reward point quantity persisted.

<!--- MC-39890-->

*  Reward points for product reviews are now associated with the relevant website when multiple reviews are approved from Admin **Marketing** > **Pending Reviews** grid. Previously, reward points were not displayed on the storefront and were not linked to the relevant website in the Admin.

<!--- MC-39820-->

*  Magento now updates the payment method list when a shopper checking out with multiple addresses either checks or unchecks the **Store Credit (Reward Points)** option.

### Sales

<!--- MC-39796-->

*  Admin users can now place orders for out-of-stock items when the **Backorders are allowed** setting is enabled (**Stores** > **Configuration** > **Catalog** > **Inventory** > **Product Stock Options**). Previously, Magento threw an error.

<!--- MC-42280-->

*  Shoppers can now find an order on the Orders and Returns page when the last name ends with a white space.

<!--- MC-41438-->

*  Invoices are now created with the correct grand total when a cart price rule assigning a 100% discount is applied to an order that is also subject to catalog product and discount taxes and that qualifies for free shipping. Previously, the order had the correct price, but the invoice did not. [GitHub-30853](https://github.com/magento/magento2/issues/30853)

<!--- MC-40384-->

*  Filtering orders by date now returns accurate results. Previously, Magento did not return an order that was placed after 00:00 UTC when you filtered orders by order date.

<!--- MC-40030-->

*  The credit memo grid now displays the correct currency symbol when **Website** scope is used for a **Price** attribute in a multi-store deployment.

<!--- MC-40013 ENGCOM-8781-->

*  Payment methods radio buttons no longer disappear on the Payment & Shipping Information section of the checkout workflow after the Admin Create New Order page is reloaded. [GitHub-32106](https://github.com/magento/magento2/issues/32106)

<!--- MC-39891-->

*  Arabic text is now displayed correctly in invoices.

<!--- MC-39864-->

*  Magento now calculates partial credit memo tax totals correctly for credit memos that are based on either an order or an invoice in stores that deploy PayPal Payment Pro as a payment gateway. Previously, for orders with multiple invoices, Magento applied the whole tax of that order for partial invoice cancellation in the credit memo.

<!--- MC-39521 ENGCOM-8528-->

*  Magento no longer creates random database deadlocks when sending new order emails to customers. Previously, deadlocks occurred because Magento saved the entire object and its related objects instead of updated SQL columns. Magento displayed this type of error: `SQLSTATE[40001]: Serialization failure: 1213 Deadlock found when trying to get lock; try restarting transaction`. [GitHub-31090](https://github.com/magento/magento2/issues/31090)

<!--- MC-39353-->

*  The storefront Order detail page now displays the correct shipped product quantity. Previously, product quantities were incorrect because the template for the Order Shipment page rendered **Qty Shipped** as an `int`. This has been changed to `float`.

<!--- MC-39026-->

*  Magento no longer emails copies of an order invoice when the **Email Copy of Invoice** button is unchecked. Previously, Magento sent email to **Customer** and **Send Invoice Email Copy To**. [GitHub-28511](https://github.com/magento/magento2/issues/28511)

<!--- MC-38973-->

*  Magento no longer creates duplicate address entries for a customer account when creating a new order from the Admin for an existing customer. The **Save in Address Book** check box has been renamed to **Add to Address Book** and is now unchecked in the Admin by default.

<!--- MC-38834-->

*  Magento now uses the logo that has been uploaded in the **Logo for HTML Print View** settings when shoppers print an order from their account. Previously, Magento displayed the LUMA logo instead of the uploaded logo.

<!--- MC-38625-->

*  The pager of order items on the storefront now works as expected when item count exceeds 20. Previously, the pager took into account child products, and the total count was incorrect.

<!--- MC-23915 ENGCOM-8713-->

*  Magento now displays the correct currency symbols for subtotal and shipping and handling values on Order page and Credit Memo page grids. [GitHub-22662](https://github.com/magento/magento2/issues/22662)

<!--- ENGCOM-8486-->

*  Administrators who use Safari can now successfully add a product to an order from the Admin. Previously, when the administrator clicked the **Add selected products to order** button, Magento displayed the spinning load icon, and the page hung. [GitHub-30265](https://github.com/magento/magento2/issues/30265)

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

*  Quick search now returns results if the search query has multiple words and the product name is configured as not searchable. Previously, if the product name was configured as not searchable, Magento threw a query exception on search queries with multiple words.

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

*  You can now add a custom Elasticsearch field mapper to `Magento\Elasticsearch\Model\Adapter\FieldMapper\Product\FieldProvider\FieldName\Resolver\CompositeResolver`. [GitHub-24350](https://github.com/magento/magento2/issues/24350)

<!--- ENGCOM-9029 MC-24026-->

*  Developers can now change Elasticsearch mappings. Previously, dynamic templates sent to the Elasticsearch server in the default mappings were hard-coded, which prevented developers from indexing in Elasticsearch any extra data associated with a custom module. [GitHub-24363](https://github.com/magento/magento2/issues/24363)

<!--- ENGCOM-8464 -->

*  Search fields (form minisearch) now work as expected when Search Suggestions are disabled. [GitHub-30584](https://github.com/magento/magento2/issues/30584)

### Shipping

<!--- MC-41464-->

*  Magento now updates shipping price as expected when a shopper navigates back to the cart page after deleting a product during checkout with multiple addresses.

<!--- MC-41343-->

*  Magento now displays the correct adjusted shipping price when some items in the cart qualify for free shipping. Previously, when a subset of items in the cart qualified for free shipping, Magento did not adjust the shipping price and displayed the full shipping price to the shopper.

<!--- MC-41186-->

*  Administrators who are restricted to a specific website can now create a shipment for an order placed on the same website. Previously, Magento threw this exception when an administrator  who lacked permission to the default store view tried to ship an order that was placed in a store view that the administrator had access to: `Notice: Undefined offset: 1 in /app/code/Magento/Catalog/Model/Product/Attribute/Backend/GroupPrice/AbstractGroupPrice.php on line 293`.

<!--- MC-41069-->

*  Magento now takes into account relevant cart price rule discounts when determining whether an order meets conditions for free DHL shipping.

<!--- MC-40702 ENGCOM-8728-->

*  Shipping labels now use base currency as expected instead of order currency for stores that support multiple currencies when an order is placed in a non-base currency. [GitHub-31891](https://github.com/magento/magento2/issues/31891)

<!--- MC-40678 magento/magento2#31925-->

*  Magento now displays the correct order subtotal when a shopper returns to the cart page during checkout after navigating away from the multi-shipping page. [GitHub-31889](https://github.com/magento/magento2/issues/31889)

<!--- MC-40541 magento/magento2#31841 -->

*  Editing billing information during Admin order creation no longer changes shipping information for customers with different default shipping and billing addresses. [GitHub-31786](https://github.com/magento/magento2/issues/31786)

<!--- MC-37385 ENGCOM-8578-->

*  Magento no longer unchecks the **Append Comments** checkbox when a shopper clicks **Get shipping methods and rates** and selects a shipping method when creating an order from the Admin. [GitHub-30256](https://github.com/magento/magento2/issues/30256)

<!--- MC-36425-->

*  Shoppers can now use the Back browser button to return to the Select Shipping Method page while checking out an order with multiple addresses. Previously, Magento displayed a corrupted Select Shipping Method page. [GitHub-30268](https://github.com/magento/magento2/issues/30268)

<!--- MC-40021 ENGCOM-8983-->

*  Product quantity now remains unchanged as expected after a shopper changes quantity on the Ship to multiple address address page and clicks the browser Back button. [GitHub-31956](https://github.com/magento/magento2/issues/31956)

<!--- ENGCOM-9096-->

*  Flat rate shipping method charges no longer become zero when a cart price rule is applied during checkout. [GitHub-21832](https://github.com/magento/magento2/issues/21832)

<!--- ENGCOM-8537-->

*  Magento no longer throws an error when a merchant tries to ship an order using DHL when the **Create shipping label** checkbox is enabled and the product name contains unicode characters. Previously, Magento displayed this error when requesting label creation: `The response is in wrong format`. [GitHub-31032](https://github.com/magento/magento2/issues/31032)

<!--- ENGCOM-8952 -->

*  You can successfully place an order from the Admin in a multi-site deployment in which `United States` is enabled on one website and`Disable all countries` is enabled as the default scope on the other website. Previously, Magento did not place the order and displayed this error: `Please check the shipping address information. "regionId" is required. Enter and try again`. [GitHub-30577](https://github.com/magento/magento2/issues/30577)

### Staging

<!--- MC-39807-->

*  The Schedule Block Update feature now works as expected in deployments implementing Fastly. Previously, Magento did not update block content because Fastly cache tags were not invalidated, and Fastly continued to serve outdated content.

<!--- MC-41142-->

*  The cart price rule staging preview is now loaded in the appropriate website when assigned to multiple website store views. Previously, the cart price rule staging preview was loaded in the default store view regardless of the assigned websites.

<!--- MC-40916-->

*  Special prices for products in the non-default store view are now set to the default value as expected after a scheduled update has ended.

<!--- MC-40850  magento/partners-magento2ee#489-->

*  Merchants can now successfully save a downloadable product with a linked sample from the downloadable product page after creating a future staging update with an end date. Previously, Magento did not save the product and displayed this message: `The downloadable sample isn't related to the product. Verify the link and try again`. [GitHub-488](https://github.com/magento/partners-magento2ee/issues/488)

<!--- MC-40734-->

*  Magento no longer executes large database queries that include all product IDs during preview of a schedule update of a category. Instead, the category filter is applied to the product collection to make a temporary table for staging previews of the category. Previously, Magento inserted all products into a temporary table for the staging preview, which degraded performance.

<!--- MC-40714-->

*  The `Magento_SalesRuleStaging` module no longer triggers errors during upgrade from Magento 2.3.x.

<!--- MC-40697-->

*  Magento now displays catalog rule conditions with correct data when you view a schedule update. Previously, if you viewed a schedule update that was created with conditions, Magento did not display conditions or displayed conditions with incorrect data.

<!--- MC-40604-->

*  The **Use default value** checkbox for a product remains checked after a scheduled update is unchecked before the update.

<!--- MC-40588 magento/partners-magento2ee#463-->

*  Catalog price rules now apply as expected to products with undefined attribute values. Previously, discounts that were created through a catalog price rule were not applied to products with undefined attributes. [GitHub-461](https://github.com/magento/partners-magento2ee/issues/461)

<!--- MC-40283-->

*  Catalog rules now work as expected in multi-website deployments with stores in different timezones. Previously, Magento applied or deactivated catalog rules on all websites at one time.

<!--- MC-40054-->

*  Tier prices are no longer removed when a schedule update is created for a specific website.

<!--- MC-39784 magento/partners-magento2ee#475-->

*  You can now save a product from the Downloadable Product page after creating a future staging update with an end date. Previously, Magento did not save the product and displayed this message: `The downloadable link isn't related to the product. Verify the link and try again`. [GitHub-474](https://github.com/magento/partners-magento2ee/issues/474)

### Store

<!--- MC-40538-->

*  Magento no longer treats a string of `0` as an empty value when displaying a store home page. Previously, Magento treated an integer value at the start of a request path as a store ID, which had unintended effects on SEO.

<!--- MC-40313  magento/magento2#31970-->

*  Plugins for `\Magento\Framework\App\ActionInterface` under `lib/internal/Magento/Framework/App/Action/Plugin` have been removed to keep with the guideline that plugins should be used to customize behavior of one module from another module. [GitHub-28050](https://github.com/magento/magento2/issues/28050)

<!--- MC-24772-->

*  Magento now displays this message when you try to select `Website` as default when `Store View` is disabled during website creation: `Please enable your Store View before using this Web Site as Default`. Previously, the website crashed, and Magento did not display an alert.

### Tax

<!--- MC-39571-->

*  Magento now takes into account hidden tax during validation of the minimum order amount.

<!--- MC-38025 ENGCOM-8612-->

*  Magento now displays Fixed Product Taxes (FPT) as expected when a shopper navigates back to their shopping cart and proceeds to checkout after adding bundle products to the cart. [GitHub-30250](https://github.com/magento/magento2/issues/30250)

<!--- MC-37657 magento/magento2#31850-->

*  Magento now pre-fills the **VAT Number** input fields for both the billing and shipping addresses of the Address Information section of the Admin new order page with saved VAT numbers when an administrator creates an order for an existing customer. [GitHub-31846](https://github.com/magento/magento2/issues/31846)

<!--- ENGCOM-8617 magento-engcom/magento2ee#558-->

*  Magento now displays a **VAT Number** field on the customer registration page when `customer/create_account/vat_frontend_visibility` is enabled. [GitHub-31326](https://github.com/magento/magento2/issues/31326)

### Test

 <!--- MC-41393-->

*  Test environments have been upgraded to Redis 6.0.12.

<!--- ENGCOM-8529-->

*  Removed `CacheCleaner::cleanAll();` from integration tests. [GitHub-31074](https://github.com/magento/magento2/issues/31074)

<!--- ENGCOM-8898-->

*  Added a test for this scenario: Admin users can edit a customer account when the customer is subscribed to a queued newsletter. [GitHub-30645](https://github.com/magento/magento2/issues/30645)

<!--- ENGCOM-8484-->

*  Removed the `cache:flush` command from tests to improve execution time for the `Catalog`, `CatalogUrlRewrite`,  and `LoginAsCustomer` modules. [GitHub-31056](https://github.com/magento/magento2/issues/31056)

<!--- ENGCOM-8499-->

*  Redundant parameters have been removed and POST changed to GET where needed in `\Magento\Logging\Model\ProcessorTest::testLoggingProcessorLogsActionShipping`.

### Theme

<!--- MC-41474-->

*  The customer login page no longer displays this message when the **Move JS code to the bottom of the page** setting (**Store** > **Configurations** > **Advance** > **Developer** > **JavaScript Settings**) and cookies are both enabled: `The store will not work correctly in the case when cookies are disabled`.

<!--- MC-40982-->

*  Account links in headers now follow WCAG standards. Previously, account links in headers contained duplicated IDs, which caused WCAG validation to fail.

<!--- MC-40278-->

*  Magento now prioritizes store configuration for a store logo image over layout configuration. Previously, the size of logo images was fixed and did not vary by store.

<!--- MC-35227-->

*  Magento now displays page elements consistently on storefront pages that use standard Magento themes. Previously, not all styles were applied in Blank theme, so not all page elements were displayed in pages using this theme. (For example, no magnifier icon was present in the My Orders page search field.)

### Translation and locales

<!--- MC-23553 ENGCOM-8839-->

*  Brackets that are added to strings are no longer escaped when inline translation is configured. Previously, the `escapeHtmlAttr` method converted the brackets into HTML entity codes. [GitHub-32000](https://github.com/magento/magento2/issues/32000)

<!--- ENGCOM-8694-->

*  Untranslatable phrases in the Admin are now translatable. (This pull request contributes to ongoing efforts to make all Admin strings localizable.) [GitHub-11175](https://github.com/magento/magento2/issues/11175)

<!--- ENGCOM-8584-->

*  Text strings in the template that are used to manage stored payment methods (**My Account**  >  **Stored Payment Methods** ) are now translatable. [GitHub-31211](https://github.com/magento/magento2/issues/31211)

<!--- MC-30798 ENGCOM-8717-->

*  Order emails sent from the Admin now use the store locale not the locale that is associated with the administrator's account. [GitHub-26521](https://github.com/magento/magento2/issues/26521)

### UI

<!--- MC-41784-->

*  The Admin footer now displays the correct product version.

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

<!--- MC-38235 magento/partners-magento2ee#492 -->

*  Alignment issues with the tabs on the Admin invitation page (Admin **Marketing** > **Private Sales** > **Invitations**) have been resolved. Previously, the Tab display for invitations that had been accepted by a customer were misaligned. [GitHub-333](https://github.com/magento/partners-magento2ee/issues/333)

<!--- MC-38226 magento/magento2#32008-->

*  The order review page displayed during checkout with PayPal Express Checkout now loads successfully. Previously, the template contained the unused **Update delivery method** button, which was only partially hidden by the script during page rendering. [GitHub-32006](https://github.com/magento/magento2/issues/32006)

<!--- MC-37941 magento/magento2#31892-->

*  Rating stars and review text in the Customer Reviews section of the product page are now properly spaced when lengthy rating names are present. [GitHub-31890](https://github.com/magento/magento2/issues/31890)

<!--- MC-37688-->

*  Options are now displayed as expected in the Actions drop-down list on the Archive Invoices, Shipments, and Credit Memos pages.

<!--- MC-23729  magento/magento2#31549-->

*  Magento now displays a correct time value when the `datetime` component `timeOnly` option is set to **yes**. [GitHub-23157](https://github.com/magento/magento2/issues/23157)

<!--- ENGCOM-8514 -->

*  You can now remove a layout update after creating a new widget on Admin **Content** > **Widgets**.  [GitHub-29936](https://github.com/magento/magento2/issues/29936)

<!--- ENGCOM-8502 MC-35716-->

*  The **Remove Layout Update** button now works as expected on any layout you have added from Admin **Content** > **Widgets**. Previously, this button did not work on any layout other than the first selected when adding multiple layouts. [GitHub-30286](https://github.com/magento/magento2/issues/30286)

<!--- ENGCOM-8524 -->

*  Magento now uses the page title that is set in the layout file as the browser page title for the Customer Account Edit file. Previously, the `Magento\Customer\Controller\Account\Edit` controller action enforced the page title value to `Account Information`. [GitHub-30724](https://github.com/magento/magento2/issues/30724)

<!--- ENGCOM-8896 8826-->

*  Checkboxes that permit merchants to toggle between showing and hiding passwords have been added to these pages:
   *  Customer Login
   *  Customer Registration
   *  Customer Edit  (Change Password section)
   *  Customer Set New Password [GitHub-31557](https://github.com/magento/magento2/issues/31557)

<!--- ENGCOM-8545 -->

*  Removed a redundant header in grid cells that appeared when an administrator added a product to a grouped product set after changing the attribute set. [GitHub-30911](https://github.com/magento/magento2/issues/30911)

<!--- ENGCOM-8895 -->

*  Magento now displays a `DateRange` filter on the Logged in area of the **Customer**  >  **Login** page. Previously, Magento displayed a `Text` filter. [GitHub-30328](https://github.com/magento/magento2/issues/30328)

<!--- ENGCOM-9009 -->

*  JavaScript has been removed from template files and moved into separate files to reduce rendering issues on Admin pages. Previously, Admin pages did not render properly in deployments in which minification of HTML had been enabled. Magento displayed this error: `An error has happened during application run. See exception log for details`. [GitHub-32454](https://github.com/magento/magento2/issues/32454)

<!--- ENGCOM-9044 -->

*  The `dropdownDialog` widget now loads only the draggable and resizable `jquery-ui` chunks it needs. Previously, it loaded large amounts of unnecessary code, which inflated load time and reduced performance. [GitHub-32810](https://github.com/magento/magento2/issues/32810)

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

<!--- ENGCOM-8719 -->

*  Added a `main_table` reference to the `store_id` in the `addStoreFilter` function of the `app/code/Magento/UrlRewrite/Model/ResourceModel/UrlRewriteCollection.php` collection. Previously, problems occurred whenever a `join` is added to the collection on a table that also contains a `store_id` column. [GitHub-31853](https://github.com/magento/magento2/issues/31853)

<!--- ENGCOM-8894 -->

*  The `PUT /V1/products/:sku` REST endpoint now re-generates product URL rewrites as expected. Previously, the endpoint re-generated product `url_key` values but not URL rewrites. [GitHub-30316](https://github.com/magento/magento2/issues/30316)

### User

<!--- MC-40777  magento/magento2#31998-->

*  You can now save an effective new user role (Admin **System** > **Permissions** > **User Roles**) with the entire `Catalog` tree selected excluding `Edit Product Design` ( **Catalog** > **Inventory** > **Products** > **Edit Product Design**). Previously, Magento did not save product changes that were made by a user in this role and displayed this error: `Not allowed to edit the product's design attributes`. [GitHub-31973](https://github.com/magento/magento2/issues/31973)

<!--- MC-38442-->

*  Magento now uses the correct custom email template when generating email for new administrators. Previously, Magento used the old default template, which omitted the administrator's first and last names.

<!--- MC-38122-->

*  Magento now uses the correct email template when sending email to new users. Previously, Magento used the default template even when a custom template was selected.

### VersionCMS

<!--- MC-39953-->

*  Magento now applies the correct theme to a CMS page after you change its layout. Previously, Magento changed the assigned theme to Luma after you saved your layout changes, no matter which theme was assigned to the page.

<!--- MC-40431-->

*  Administrators with restricted roles can now successfully add, update, or duplicate the pages that he has access to that are assigned to a hierarchy node. Previously, Magento threw a fatal error under these conditions.

### Video

<!--- MC-42059 ENGCOM-9039-->

*  Videos are now available in the product gallery as expected when advanced JavaScript bundling is enabled and used. [GitHub-32501](https://github.com/magento/magento2/issues/32501)

<!--- ENGCOM-8532-->

*  YouTube videos for simple products that belong to a configurable product now work as expected. Previously, images were ordered by ID instead of position. Consequently, some videos were treated like images. [GitHub-29690](https://github.com/magento/magento2/issues/29690)

### Visual Merchandiser

<!--- MC-40797-->

*  The performance of Admin category page loads with Visual Merchandiser has improved. Loading Admin category pages no longer generates large database queries.

### Web API framework

<!--- MC-41758-->

*  The Catalog API now correctly updates a product's custom option values by adding new values and removing old values. Previously, the API did not delete the old values.

<!--- MC-34431-->

*  POST `/V1/guest-carts/:cartId/billing-address` now returns address ID as an integer, not a string.

### Website restriction

<!--- MC-38516-->

*  Shoppers are now redirected to the page they were trying to access before they were prompted to log in. Previously, in deployments where website restrictions were enabled and Restriction Mode were set to **Private Sales: Login Only**, shoppers were redirected to the store home page.

### Widget

<!--- MC-39128-->

*  An administrator can now delete all of a widget's layout updates. Previously, when a widget had multiple layout updates, an administrator could delete only the first.

<!--- MC-39107-->

*  Clicking the **Add to Cart** button on the product widget no longer results in a page reload. Previously, clicking the **Add to Cart** button on a product widget caused a current page to reload before the product was added to the cart.

<!--- MC-23590-->

*  The CMS hierarchy node link widget in TinyMCE now renders hierarchy links as expected when the **Anchor Custom Text** field is empty.

### Wish list

<!--- MC-40651 ENGCOM-8769-->

*  Magento no longer resets a configurable product's configuration settings when you click the **Edit item** button for the product from a wish list. [GitHub-32119](https://github.com/magento/magento2/issues/32119)

<!--- MC-40417-->

*  Magento now displays the correct product price when you update a product with a customizable file option in the wish list. Previously, Magento displayed the wrong product price and did not display a link to the uploaded file.

<!--- MC-39060-->

*  The total product count in a wish list for a customer with multiple wish lists now matches the number of items in the wish list. Previously, out-of-stock products were included in the total product count.

<!--- MC-36779 magento/magento2#31110-->

*  Magento now removes a product from a wish list after adding it to an order. [GitHub-30260](https://github.com/magento/magento2/issues/30260)

<!--- MC-34456 ENGCOM-8816-->

*  Shoppers can now add related products to their shopping cart from a wish list. Previously, Magento added only the configurable product, not the configurable product and its related products when a shopper clicked the **Select all** link of the Related Products section. [GitHub-32274](https://github.com/magento/magento2/issues/32274)

## Known issues

**Issue**: _JavaScript error when reCAPTCHA is disabled_. If reCAPTCHA is disabled for checkout, checkout proceeds, but Magento displays an `Uncaught TypeError` error in the console log.  This issue will be fixed in a later release. <!--- MC-42589 42649-->

**Issue**: _Content Security Policy error_. The storefront displays the following error in the console log: `The Content-Security-Policy directive frame-ancestors does not support the source expression unsafe-inline`. Storefront performance is not affected. <!--- MC-42613-->

**Issue**: _Anomalies with PayPal Credit display of gift card amounts_. When PayPal Credit is enabled and multiple gift card amounts are configured, if a shopper changes the amount for the value of a gift card, the storefront does not update the amount for installment payments. A fix for this issue will be included in {{ site.data.var.ee }} 2.4.4 and {{ site.data.var.ce }} 2.4.4.<!--- MC-42499 AC-344-->

**Issue**:  _The **Add to order** button does not work for products added to the cart by SKU_.  Magento displays this error message when you click on the **Add to order** button after adding products to the order by SKU: `An error has happened during application run`. Products are not added to the cart. **Workaround**: Use the Add Products feature. <!--- AC-345-->

**Issue**: The GraphQL `category` and `categoryList` queries ignore Category permissions that determine whether categories in a shared catalog are hidden or exposed. The storefront currently displays all categories that have been assigned or unassigned to the shared catalog. This affects {{site.data.var.ee}} 2.4.3 deployments that implement a PWA storefront for which B2B shared catalogs have been enabled. <!--- MC-42528-->

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-3-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-4-3-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{page.baseurl}}/install-gde/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.4.3 using [Composer]({{ page.baseurl }}/install-gde/composer.html).

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
