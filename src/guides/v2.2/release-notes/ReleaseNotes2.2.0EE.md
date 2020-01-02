---
group: release-notes
title: Magento Commerce 2.2.0 Release Notes
menu_title: Magento Commerce 2.2.0 Release Notes
---

*Release notes updated June 4, 2018.*

We are pleased to present Magento Commerce 2.2.0 General Availability. This release includes numerous functional fixes and enhancements.

## Highlights

Magento Commerce 2.2.0 includes a wealth of new, exciting features, and hundreds of enhancements and fixes. Look for the following highlights in this release:

*  **B2B Commerce functionality** is designed to meet the needs of merchants whose primary customers are companies, rather than consumers. Companies can create and maintain their own accounts, each with teams of buyers with various roles and levels of permission. B2B Commerce functionality also includes a flexible API that integrates with a variety of ERP solutions from Magento partners. See [B2B Quick Start](http://docs.magento.com/m2/b2b/user_guide/quick-tour/b2b-quick-start.html) for an overview of the rich B2B feature set we're introducing in this release, and [Getting Started with Magento Commerce for B2B](http://docs.magento.com/m2/b2b/user_guide/getting-started.html) for a more complete exploration of these new features.

*  **Magento Commerce Starter.** In addition to our Pro version, Magento Cloud (Commerce) now comes in a smaller, platform-as-a-service version — Magento Commerce Starter. This subscription plan differs from our Enterprise Cloud version in some key ways. For an overview of these versions, see [Welcome to Magento Commerce Cloud]({{ site.baseurl }}/cloud/bk-cloud.html).

*  **Improvements to the Magento Commerce (Cloud) deployment process**. This release includes new build and deployment variables. Users of earlier versions of Magento Commerce (Cloud) will note that MCC has been replaced by ece-tools and ece-patches, which allows for patching your Magento Commerce (Cloud) without requiring a full installation of base code and the patch.

*  **Bundled extensions**. This release of Magento includes the first third-party extension that we are bundling with Magento Commerce -- Magento Social. This extension establishes a connection between your store and your corporate Facebook account, and creates a page with products from your catalog. When shoppers click a product, they are redirected to the corresponding product page in your Magento store.

*  **Integrated Signifyd fraud protection**. You can learn more about this fraud protection service, which can help merchants eliminate liability for any losses or fees from fraudulent orders, in [Signifyd fraud protection]({{ site.baseurl }}/guides/v2.2/payments-integrations/signifyd/signifyd.html).

*  **Significant enhancements in platform security and developer experience**. Security improvements include the removal of unserialize calls and protection of this functionality to increase resilience against dangerous code execution attacks. We have also continued to review and improve our protection against Cross-Site Scripting (XSS) attacks.

*  **Upgraded technology stack.**  We've dropped support for PHP 5.6, Varnish 3, and Solr.  We now support PHP 7.1 and Varnish 5, along with Redis 3.2 and MySQL 5.7. All third-party libraries have been upgraded to the latest stable version. Note: Although we’ve dropped support for Solr with this release, Solr code will remain in the Magento code base until a later release.

*  **Pipeline deployment**, a new deployment process, enables build and deployment stages to minimize production system downtime for site updates. Resource-intensive processes can run on the build server. Pipeline deployment supports easy management of configuration between environments, too. Read more about pipeline deployment [here]({{ page.baseurl }}/config-guide/deployment/pipeline/).

*  **Performance gains from improvements in indexing, cart, and cache operations**. Customers can browse and shop on a storefront while indexers are running with no visible impact to their experience. Additionally, long-running indexers operate in batches to better manage memory and run times. Cart improvements enable a buyer to create a cart with more than 300 line items, and merchants can process a cart with at least 300 line items. Varnish cache configuration now includes saint and grace mode to ensure Varnish is always presenting a cached page to a shop’s customers.  Enhancements to cache invalidation logic and optimization of edge side include blocks for frequently changing data that significantly boost cache hit ratios.

*  **Substantial contributions from our Community members**. Our Community Engineering Team has been working with skilled and enthusiastic community members, and together they've added hundreds of pull requests to the Magento code base. For more information about our Community Engineering Team. see [Magento Community Engineering](https://github.com/magento-engcom).

Looking for more information on these new features as well as many others? Check out  [Magento 2.2 Developer Documentation]({{ site.baseurl }}/guides/v2.2/).

## Security enhancements

Magento 2.2.0 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

In general, we’ve removed serialize/unserialize from most the code to improve protection against remote code execution attacks. We’ve enhanced protection of code where use of object serialization or unserialization was unavoidable.  Additionally, we’ve increased our use of output escaping to protect against cross-site scripting (XSS) attacks.

[Contact us](https://magento.com/company/contact-us) for more information.

## Known issues

Magento 2.2.0 GA includes the following known issues. Fixes for these issues are scheduled for  patch releases in the near future.

### General Issues

The following issues affect all editions of Magento 2.2.0:

**Issue**:  This issue affects Magento installations that include multiple store views. If you delete a store view, any product grid filtered to that Store View does not load. If you've set your product filter to a store view you’ve deleted, when you open **Catalog > Products**, Magento displays the following behavior:

*  spinner widget spins indefinitely

*  error message: `A technical problem with the server created an error. Try again to continue what you were doing. If the problem  persists, try again later.`

**Issue**: Errors result when a deleted customer tries to log in or register for new account. When you delete a customer from the  Admin panel, a fatal error occurs if someone tries to log in or register using that deleted customer account.

**Issue**: A mistake entering credit card information during an  order for a new customer can cause subsequent errors even after the user has corrected the  credit card information.

**Issue**: Failure to specify a `– base_url` during installation when using custom server ports results in unresolved static content.
**Workaround**: You can use the CLI command `config:set web/secure/base_url <base_url>` to set the `base_url` parameter.

**Issue**: Magento does not correctly calculate the Catalog Price rule for bundle products with custom options.

**Issue**: Visual Merchandiser performance is degraded when Category contains  many products.

**Issue**: The Performance Toolkit does not currently work.

### Magento Commerce-only issues

The following issues affect the Commerce edition of Magento 2.2.0:

**Issue**: Store website doesn't work when Redis cache is installed and the PhpRedis extension is enabled.
**Workaround**: Contact Support for a patch.

**Issue**: Magento does not apply the Catalog Price Rule as expected when Persistent Shopping Cart is enabled in installations running Fastly cache.

**Issue**: Magento displays an error (`“Error 503 Service Unavailable”`) when you try to save a newly-added Catalog Price rule.

**Issue**: This issue affects the default configuration of category permissions in a multi-storeview environment. When the **use category path in product URL** value  is set to **false**, and the user navigates to the product page for a product contained in that category, he is redirected to a 404 error page.  **Workaround:** [Log in to your account](https://account.magento.com/customer/account/login), then download and apply `MDVA-6272_EE_2.2.0_composer.patch`.

### B2B-only issues

**Issue**: Resubmitting an order that contains an out-of-stock product causes an error.  Instead of displaying a message that indicates that a product is out-of-stock, Magento displays this exception: `Warning: Division by zero in \/usr\/share\/nginx\/html\/vendor\/magento\/module-tax\/Model\/Calculation\/AbstractAggregateCalculator.php`

**Issue**: You cannot save a customized shared catalog when the  indexer state table contains duplicates. **Workaround**: Remove the duplicate record from the database.

**Issue**: You cannot export Advanced Pricing information to a CSV file on a server running a medium-sized Magento installation (that is, one that supports approximately 40,000 SKUs, 300 shared catalogs, and three store views).  Instead, the export will fail due to a time out.

## Fixed issues

This release contains hundreds of fixes and enhancements.

### Installation, upgrade, deployment

<!--- 55357/53777/45357 -->

*  You can now run `magento setup:upgrade --keep-generated` in production mode. Previously, Magento would throw an error when you ran `setup:upgrade` after compiling dependency injection. (This significantly curtailed your ability to deploy continuous integration.) [GitHub-4795](https://github.com/magento/magento2/issues/4795)

<!---56397, 58064 -->

*  You can now upgrade your Magento installation when using multiple master databases for checkout, order management, and product data.

<!---56977, 54716 -->

*  We fixed an issue that blocked using the web installer to successfully set up Magento. Previously, if you tried to install Magento with the web installer, Magento would indicate that the readiness check failed, and installation would not complete.

<!---57343 -->

*  You can now deploy build processes on a different staging machine than the one you're running your production environment on.

<!---57943 -->

*  Magento 2.0.x and 2.1.x now support the use of table prefixing during installation. Previously, when you used table prefixing, your Magento installation failed with this error:   "Duplicate key on write or update". [GitHub-5688](https://github.com/magento/magento2/issues/5688)

<!--- 62400 -->

*  Third-party command line tools no longer fail when you run `setup:di:compile`.

<!--- 62648 -->

*  Magento now correctly applies [website](https://glossary.magento.com/website) configuration parameters to the corresponding [store view](https://glossary.magento.com/store-view). [GitHub-7943](https://github.com/magento/magento2/issues/7943)

<!--- 64085 -->

*  Fixed HTML inline style used when sending emails when implementing the upgraded `emorgifier` library. [GitHub-8241](https://github.com/magento/magento2/issues/8241)

<!--- 60835 -->

*  We’ve changed how Magento displays status updates during a product upgrade. Previously, potentially vulnerable information such as full paths and module names were displayed in the product GUI, potentially exposing this information to a malicious user. Magento now restricts this potentially vulnerable information to logs that are available to administrators only.

<!--- 70314 -->

*  The `cron:install` command now works as expected in Magento 2.2.0. Previously, the configuration for `crontab` commands contained double quotes that were not escaped, which caused invalid commands to be written to the `crontab` file. [GitHub-10040](https://github.com/magento/magento2/issues/10040)

<!--- 63637 -->

*  Magento now moves the `sequence_*` table to the correct database after implementing a split database.

<!---71890  -->

*  Magento no longer throws an exception when the configuration checksum is absent on a new installation.

<!--- 70573 -->

*  It is now possible to configure Redis settings for session storage, default cache, and full page cache from the command line.

<!--- 59342 -->

*  Custom themes now inherit parent [XML](https://glossary.magento.com/xml) configuration information as expected.

<!--- 54722 -->

*  We've removed the sample password from the Setup Wizard

<!--- 71173 -->

*  You can now enable JavaScript minification without error. Previously, after enabling JS minification, the Magento Admin displayed 404 errors when accessing JavaScript elements.

<!--- 70869 -->

*  Magento no longer displays console errors after CSS merging and minification is enabled. Previously, when CSS merging and minification was enabled, the storefront was not displayed as expected, and the `styles-l.min.css` and `print.min.css` files could not be found.

<!--- 69854 -->

*  You can now successfully use the `config:set` command to set allowed or default currencies.

<!--- 46636 -->

*  Nginx now redirects to the setup page when using port 81.

<!--- 69544 -->

*  We've added the `dev:template-hints:enable` and `dev:template-hints:disable` commands to manage template hints. *Fix submitted by community member Miguel Balparda in pull request [9778](https://github.com/magento/magento2/pull/9778){:target="_blank"}.*

<!--- 67501 -->

*  We've added the `dev:query-log:enable` and  `dev:query-log:disable` to manage database query logging.  *Fix submitted by community member Federico Rivollier in pull request [9264](https://github.com/magento/magento2/pull/9264){:target="_blank"}.*

<!---67537  -->

*  We've added the `varnish:vcl:generate` command to create the Varnish VCL file. *Fix submitted by community member Piotr Kwiecinski in pull request [9286](https://github.com/magento/magento2/pull/9286){:target="_blank"}.*

<!--- 69524  -->

*  Magento now adds a new record to the quote table and adds the  current date and time to the `created_at` field. Previously, this field was not updated.

<!--- 57820  -->

*  The installation script no longer creates files in the root directory for missing modules when you install a community-created language pack. Translation packs created by the community often include translations for Magento Commerce modules. When you install these translation packs on an Open Source installation, the Commerce modules are missing. Previously, the installation script creates a file in the root directory for these Commerce modules instead of skipping them. [GitHub-6260](https://github.com/magento/magento2/issues/6260)

<!--- 56743  -->

*  We've fixed issues with upgrading installations with split databases.

<!--- 63022  -->

*  Static content deployment (SCD) now works when multiple languages are specified. Previously, Magento displayed an error if you tried to deploy static content in more than one language (for example, `bin/magento setup:static-content:deploy en_CA fr_CA de_DE`).

<!--- 57656  -->

*  The import URL directive now contains base URL and locale placeholders instead of the real URL.

<!--- 55757  -->

*  Magento now works as expected on an Apache `php-fpm` environment.

<!--- 63295  -->

*  The `DOCUMENT_ROOT` directory is now writable. Previously, installation failed because this directory was not writable.

<!--- 67082 -->

*  When upgrading Magento from 2.1.x to 2.2, the `quote_address.free_shipping` column is the same whether you upgraded from a previous installation of Magento or performed a fresh installation. Previously, different upgrade/installation options affected the contents of this column.

<!--- 62655 -->

*  Command-line users now have read and write permissions to the  `var/generation` directory. [GitHub-7933](https://github.com/magento/magento2/issues/7933)

<!--- 61431 -->

*  The Magento command-line interface now sets the correct exit codes when an upgrade task fails. [GitHub-7576](https://github.com/magento/magento2/issues/7576)

<!--- 58849 -->

*  You can now disable the Review module without incurring an error in the Product Edit page. Previously, if you tried to edit a product after disabling the review module, Magento displayed this error: "Something went wrong". [GitHub-6704](https://github.com/magento/magento2/issues/6704)

<!--- 56816 -->

*  You can now use Component Manager to enable a previously disabled module. Previously, when you ran `bin/magento module:disable Magento_AnyModule`, then tried to re-enable  that module, Magento fails to enable it and any previously enabled cache types, and module installation fails. [GitHub-6078](https://github.com/magento/magento2/issues/6078)

<!--- 58132 -->

*  We’ve fixed problems with the uninstall process. Previously, when Magento tries to uninstall a module using composer, it simultaneously tried to update the `symfony/process` version. However,  because the `module:uninstall`  command uses   `symfony/process`, the command stopped running. [GitHub-5797](https://github.com/magento/magento2/issues/5797)

<!--- 58132 -->

*  We’ve fixed problems with the uninstall process. Previously, when Magento tries to uninstall a module using composer, it simultaneously tried to update the `symfony/process` version. However,  because the `module:uninstall`  command uses   `symfony/process`, the command stopped running. [GitHub-5797](https://github.com/magento/magento2/issues/5797)

### AMQP

<!---58654, 57177 -->

*  The `magento queue:consumers:start` command now works correctly when you provide the `max-messages` argument.

<!--- 70516-->

*  Magento no longer indicates errors when you install without AMQP. Previously, Magento displayed the following error:

   ```text
   `report.CRITICAL: Error Connecting to server (0): Failed to parse address ":" {"exception":"[object] (PhpAmqpLib\\Exception\\AMQPRuntimeException(code: 0): Error Connecting to server (0): Failed to parse address \":\" at /vendor/php-amqplib/php-amqplib/PhpAmqpLib/Wire/IO/StreamIO.php:106)"} []`
   ```

<!--- 70518 -->

*  You can now override queue publishers configuration through the `env.php` file.

<!--- 66993 -->

*  Magento now re-processes queue messages if the consumer process is terminated.

<!--- 58081 -->

*  Magento no longer inserts HTTPSS:// for HTTPS in a store address when you install Magento using an HTTPS address over SSL. [GitHub-6262](https://github.com/magento/magento2/issues/6262)

### Cart and checkout

<!--- 53793  -->

*  Magento now implements the minicart maximum display recently added item setting to your [shopping cart](https://glossary.magento.com/shopping-cart).  Previously, Magento displayed all the items in the shopping cart, even when the number of items exceeded this limit. [GitHub-4750](https://github.com/magento/magento2/issues/4750)

<!---58036 -->

*  You can now reload a page during [checkout](https://glossary.magento.com/checkout) without unintentionally changing shipping information.

<!---58902 -->

*  Custom address attributes now appear in the Checkout summary.

<!---57497 -->

*  Lengthy [Order Status](https://glossary.magento.com/order-status) tables are now paginated as expected.

<!---56956 -->

*  Magento now displays the product add validation message ("Product was added to the cart") only after you have successfully added a product to your cart.

<!---58057 -->

*  We've resolved an issue that prevented you from adding more than one product to a [shopping cart](https://glossary.magento.com/shopping-cart) from a wishlist. [GitHub-5282](https://github.com/magento/magento2/issues/5282)

<!---59209 -->

*  The number of items in the minicart is now updated correctly when you run Magento in mixed HTTP/HTTPS mode. [GitHub-6487](https://github.com/magento/magento2/issues/6487)

<!---57062 -->

*  The minicart now performs as expected in deployments that span multiple websites. Previously, in a Magento installation that had multiple websites, products that you added to one [website](https://glossary.magento.com/website) appeared in the other websites' minicarts.

<!---57843 -->

*  A cart rule with a coupon code no longer overrides a cart rule without a coupon code when multiple [cart rules](https://glossary.magento.com/cart-rules) are applied. Previously, when you created two cart rules and applied them to a cart,  the rule with a coupon was applied, but the second rule was not. [GitHub-6294](https://github.com/magento/magento2/issues/6294)

<!---59024 -->

*  Refreshing your browser page while on the Review and Payments page of the checkout process no longer clears information from form fields. Previously, Magento cleared information from the **Ship to** field if you refreshed your browser page during this process.

<!---60103 -->

*  Magento no longer lets you add a product variation to your shopping cart if the item is out of stock. Previously, Magento permitted you to select an out-of-stock item and when you added it to your cart, displayed the "Product is out of stock" message.

<!---58090 -->

*  We've corrected a problem with Magento throwing an HTTP ERROR 500 intermittently during checkout.

<!---57168 -->

*  We fixed a [JavaScript](https://glossary.magento.com/javascript) error that occurred on the Checkout page after you changed the country in the **Estimate Shipping and Tax** field.

<!---60293  -->

*  Magento now successfully estimates shipping costs. Previously, when you tried to estimate shipping costs, the load indicator would spin indefinitely, and Magento displayed this exception,```Object doesn't support this action```. [GitHub-5358](https://github.com/magento/magento2/issues/5358), [GitHub-7051](https://github.com/magento/magento2/issues/7051)

<!---56962  -->

*  Magento now displays the **State/Province** field on the Add New Address page. [GitHub-5279](https://github.com/magento/magento2/issues/5279)

<!--- 69657 -->

*  Credit card information now persists as expected after a user enters a promotion code during checkout. Previously, After an user enters credit card information, then discount code and then click **Place Order**. The credit card information fields are emptied and user has to enter the credit card information again to proceed with the order transaction.

<!--- 64544 -->

*  You can complete your order after entering a new shipping address during checkout. Previously, Magento would not let you place an order if you entered a new shipping address during checkout.

<!--- 64399 -->

*  Magento no longer throws an exception when a customer updates their shopping cart after you've enabled the Minimum Order setting. *Fix submitted by community member <a href="https://github.com/ericrisler" target="_blank">Eric Risler</a> in pull request [8474](https://github.com/magento/magento2/pull/8474){:target="_blank"}.*

<!--- 67323 -->

*  You can now translate the  FPT label on the checkout page. *Fix submitted by community member Oleksii Korshenko in pull request [9204](https://github.com/magento/magento2/pull/9204){:target="_blank"}.*

<!--- 69230 -->

*  Magento no longer truncates bill-to names and shio-to names to 20 characters in the Admin.  *Fix submitted by community member Isolde in pull request [9654](https://github.com/magento/magento2/pull/9654){:target="_blank"}.*

<!--- 69375 -->

*  You can now delete the last item in your cart when the Minimum Order setting is enabled. *Fix submitted by community member storbahn in pull request [9714](https://github.com/magento/magento2/pull/9714){:target="_blank"}.*

<!--- 69379 -->

*  You can now create unique checkbox IDs for the Terms and Conditions part of the checkout process. *Fix submitted by community member Bernhard in pull request [9717](https://github.com/magento/magento2/pull/9717){:target="_blank"}.*

<!--- 69533 -->

*  Magento now correctly displays the coupon label in the shopping cart during checkout. *Fix submitted by community member Sylvain Rayé in pull request [9721](https://github.com/magento/magento2/pull/9721){:target="_blank"}.*

<!--- 69848 -->

*  Magento now pre-fills prefixes and suffixes in the quote shipping address *Fix submitted by community member Anton Evers in pull request [9925](https://github.com/magento/magento2/pull/9925){:target="_blank"}.*

<!--- 70052 -->

*  The country drop-down box now correctly shows the countries for which the current store and customer account are configured. *Fix submitted by community member Marcel in pull request [9429](https://github.com/magento/magento2/pull/9429){:target="_blank"}.*

<!--- 56411 -->

*  The shopping cart now handles products with custom options. [GitHub-5612](https://github.com/magento/magento2/issues/5612)

<!--- 63200 -->

*  Magento now requires completion of the State field during the check out process if this field has been configured as required.

<!--- 63635 -->

*  Checkout now loads as expected in Safari private mode. [GitHub-7942](https://github.com/magento/magento2/issues/7942), [GitHub-7329](https://github.com/magento/magento2/issues/7329), [GitHub-8358](https://github.com/magento/magento2/issues/8358)

<!--- 61368 -->

*  Minicart now shows all products you’ve added, whether you added them while signed-in or not. Previously, the minicart contained only products that you added while signed in. [GitHub-7500](https://github.com/magento/magento2/issues/7500)

<!--- 59807 -->

*  Magento now displays the ”Thank you for your purchase!" on the checkout success page.

<!--- 60352 -->

*  Magento now displays the correct error message when you enter an invalid discount code when making a payment. [GitHub-7230](https://github.com/magento/magento2/issues/7230)

<!--- 47017 -->

*  You can now directly add a configurable product to your shopping cart from category page. [GitHub-2574](https://github.com/magento/magento2/issues/2574), [GitHub-5850](https://github.com/magento/magento2/issues/5850), [GitHub-5882](https://github.com/magento/magento2/issues/5882), [GitHub-6572](https://github.com/magento/magento2/issues/6572), [GitHub-5558](https://github.com/magento/magento2/issues/5558), [GitHub-4184](https://github.com/magento/magento2/issues/4184)

<!--- 58345 -->

*  Magento now displays out-of-stock products in the shopping cart. Previously, if a product’s status changed between the time you added it to the cart and you proceeded to check out, Magento removed the product from your cart. [GitHub-6583](https://github.com/magento/magento2/issues/6583)

<!--- 60110 -->

*  When you select `New Address` while reviewing order information during check out, Magento now profiles the username and country fields, but leaves the address fields empty. Previously, Magento did not leave the address fields empty, and the checkout process failed. [GitHub-6869](https://github.com/magento/magento2/issues/6869)

<!--- 57682 -->

*  Checkout agreement validation now works as expected after you change payment method. [GitHub-6224](https://github.com/magento/magento2/issues/6224)

<!--- 58059 -->

*  The shopping cart now displays a shipping rate that reflects tax settings. Previously, the prices displayed in your shopping cart were not adjusted to include these settings. [GitHub-6166](https://github.com/magento/magento2/issues/6166)

<!--- 58059 -->

*  The shopping cart now displays a shipping rate that reflects tax settings. Previously, the prices displayed in your shopping cart were not adjusted to include these settings. [GitHub-6166](https://github.com/magento/magento2/issues/6166)

### Catalog

<!--- 65324, 66829  -->

*  Magento no longer locks the `category_product_entity` table. Unlocking this table reduces the potential of lock-related timeouts that can occur when indexing and checkout operations run in parallel. Previously, Magento locked the `category_product_entity` table.

<!--- 65251  -->

*  The [storefront](https://glossary.magento.com/storefront) now displays images that Magento resizes during product save operations, rather than resizing the product on the storefront. Previously, the image path contained `store_id`,  and during save operations, Magento resized images for images the default store only.

<!--- 66366  -->

*  The `\Magento\CatalogInventory\Model\Stock\Status\getStockId()` method now returns the correct values.

<!--- 58437 -->

*  The [storefront](https://glossary.magento.com/storefront) gallery now displays all the images associated with a [configurable product](https://glossary.magento.com/configurable-product). Previously, when you clicked on the swatches associated with a configurable product, the gallery displayed only one of several possible images. [GitHub-6195](https://github.com/magento/magento2/issues/6195), [GitHub-4101](https://github.com/magento/magento2/issues/4101)

<!---57832  -->

*  Magento now displays the **This is a required field** message immediately adjacent to the product options as needed during [checkout](https://glossary.magento.com/checkout). Previously, Magento displayed this message at the bottom of the checkout form.

<!--- 57420/54320 -->

*  The category page now shows the current price after Magento runs a scheduled update.  Previously, the category page would not update the  price after running a scheduled update. [GitHub-4945](https://github.com/magento/magento2/issues/4945)

<!---56742 -->

*  You can now sort and filter on the New Review page. [GitHub-5391](https://github.com/magento/magento2/issues/5391)

<!---58511 -->

*  Magento now displays server-side Ajax error messages.

<!---56964 -->

*  Magento now validates the uniqueness of product attribute values as you create or edit them. Previously, you could add identically named values to an attribute. [GitHub-4881](https://github.com/magento/magento2/issues/4881)

<!--- 62229 -->

*  Magento now displays the price of out-of-stock products on the product page.

<!--- 58895 -->

*  If you remove an item from the Compare Items list that is displayed on any [Category](https://glossary.magento.com/category) page, Magento no longer redirects you to the Compare Products page.

<!--- 72112 -->

*  Subcategories no longer show up in the menu when the parent category is disabled or hidden from the menu. [GitHub-10664](https://github.com/magento/magento2/issues/10664)

<!--- 57719 -->

*  We've corrected a problem with Magento throwing an HTTP ERROR 500 intermittently during checkout.

<!--- 63561 -->

*  The product attribute `category_ids` can have only **Global** scope. Previously, you could change the scope value of `category_ids` to **Store**.

<!--- 53135 -->

*  A price change to a custom option affects only that option. Previously, changing the price of a custom option also affected the price of related products. [GitHub-4588](https://github.com/magento/magento2/issues/4588), [GitHub-5798](https://github.com/magento/magento2/issues/5798), [GitHub-6041](https://github.com/magento/magento2/issues/6041),  [GitHub-6097](https://github.com/magento/magento2/issues/6097)

<!--- 56866 -->

*  The prices you assign to custom options no longer change unexpectedly after you save them. [GitHub-6116](https://github.com/magento/magento2/issues/6116)

<!--- 50123 -->

*  You can now create a blank attribute option using the drop-down input option on products that do not require an attribute. [GitHub-3545](https://github.com/magento/magento2/issues/3545), [GitHub-5485](https://github.com/magento/magento2/issues/5485), [GitHub-4910](https://github.com/magento/magento2/issues/4910)

<!--- 54718 -->

*  Magento no longer encounters an error when it cannot find a product image file. [GitHub-5184](https://github.com/magento/magento2/issues/5184), [GitHub-5497](https://github.com/magento/magento2/issues/5497), [GitHub-5871](https://github.com/magento/magento2/issues/5871)

<!---55346  -->

*  You can now successfully set an SKU mask to empty. Previously, when a product SKU mask was set to empty, Magento experienced problems loading the Product Add page. [GitHub-5618](https://github.com/magento/magento2/issues/5618)

<!---47698  -->

*  Magento now correctly displays custom options at the store-view level. [GitHub-2908](https://github.com/magento/magento2/issues/2908), [GitHub-5885](https://github.com/magento/magento2/issues/5885), [GitHub-5612](https://github.com/magento/magento2/issues/5612)

<!---54648  -->

*  Magento now provides swatch input for the Admin Scope, and the attribute fall back mechanism now reverts to the default option value
 if no values are specified for specific store view. [GitHub-5143](https://github.com/magento/magento2/issues/5143), [GitHub-5142](https://github.com/magento/magento2/issues/5142)

<!--- 57989  -->

*  You can now create a custom attribute for a category that successfully uploads a custom image. Previously, you could create the attribute, but could not save the image.

<!--- 57023 -->

*  Sorting configurable products by price now works as expected when a simple product has a special price. [GitHub-4778](https://github.com/magento/magento2/issues/4778)

<!--- 70987  -->

*  Magento no longer displays an error when you open a product with a Fixed Product Tax attribute enabled.

<!--- 59315 -->

*  We've improved the process of using the WebAPI interface to save a product stock item. Previously, this type of save action worked inconsistently.

<!---57564  -->

*  You can no longer change or fake a product price from the Magento [storefront](https://glossary.magento.com/storefront) and then complete an order with that faked price.

<!--- 56868, 56582  -->

*  You can now save a product with images multiple times.

<!--- 70750, 67618 -->

*  View permissions to high-level product categories now work as expected. Previously, Magento displayed only the product categories that users who belonged to the NOT_LOGGED_IN customer group were permitted to view, no matter which user logged in. Additionally, a user restricted to browse a category could still see the category in the top-level navigation menu if the page were previously cached in FPC.

<!---70877  -->

*  You can now successfully add a product to the compare list. Previously, when you tried to add a product to a compare list, Magento displayed an error.

<!--- 70790 -->

*  You can now remove custom options from simple products. Previously, when you tried to remove a custom option from a product, Magento did not remove the options, and displayed an error message.

<!--- 62637 -->

*  You can now successfully set the **Enable Product** attribute to **no**.

<!--- 61095 -->

*  Magento no longer permits a shopper to place a re-order once you've disabled one of items in the order.

<!--- 64250 -->

*  Fixed an issue that occurred in the Catalog Gallery on mobile displays when the `allowfullscreen` setting is enabled. *Fix submitted by community member Dennis van Schaik in pull request [8434](https://github.com/magento/magento2/pull/8434){:target="_blank"}.*

<!--- 64403 -->

*  Magento now successfully loads re-ordered related products when Edge-Mode is activated. *Fix submitted by community member [@kirashet666](https://github.com/kirashet666){:target="_blank"} in pull request [8467](https://github.com/magento/magento2/pull/8467){:target="_blank"}.*

<!--- 64999  -->

*  Magento now displays cross-sells as expected when you use the `product/list/items.phtml` template. *Fix submitted by community member Koen V in pull request [8602](https://github.com/magento/magento2/pull/9662){:target="_blank"}.*

<!--- 65364 -->

*  Magento now displays the **Yes** or **No** attribute value on Product pages. *Fix submitted by community member Timo Klement in pull request [8623](https://github.com/magento/magento2/pull/8623){:target="_blank"}.*

<!--- 65334 -->

*  Setting the **show_out_of_stock** attribute to **No** now works as expected. *Fix submitted by community member Theis Corfixen in pull request [8736](https://github.com/magento/magento2/pull/8736){:target="_blank"}.*

<!--- 69297 -->

*  Magento now uses parent names (instead of SKU-based names) when creating configurable products. *Fix submitted by community member Pascal Brouwers in pull request [9681](https://github.com/magento/magento2/pull/9681){:target="_blank"}.*

<!---70256  -->

*  You can now create an `etc/view.xml` file containing an `images` tag with an attribute `module`. *Fix submitted by community member Marius Strajeru in pull request [10052](https://github.com/magento/magento2/pull/10052){:target="_blank"}.*

<!--- 70345 -->

*  Magento now displays the Category selection UI under Conditions when you select a rule for editing. *Fix submitted by community member duckchip in pull request [10094](https://github.com/magento/magento2/pull/10094){:target="_blank"}.*

<!--- 63062 -->

*  Magento now displays the correct image when you switch between a configurable product's options. Previously, Magento loaded product images from a different product.

<!--- 66885 -->

*  The Magento WYSIWYG editor now handles special characters such as percent sign (%).  [GitHub-9452](https://github.com/magento/magento2/issues/9452)

<!--- 63601 -->

*  The `indexer:reindex catalog_category_product` process can now handle more than 500 products in a category.

<!--- 62426 -->

*  Magento now displays  the price set at store view-level for a product that has different prices set on the global and store view level.

<!--- 71445 -->

*  Out-of-stock options for configurable products no longer show up in search and layered navigation results.

<!--- 67628 -->

*  You can render the `tax_class_id` attribute nonsearchable. Previously, Magento displayed a 503 error under these circumstances.

<!--- 63320 -->

*  If you’ve enabled persistent shopping cart, you can now check out even after your session has expired.

<!--- 61826 -->

*  Magento no longer throws an error when you try to save a product with imported custom options.

<!--- 62468 -->

*  Magento now displays the product price even when the product is out-of-stock.

<!--- 64710 -->

*  `productWebsiteLink` no longer deletes a product’s custom origins.

<!--- 56943 -->

*  Magento now successfully handles purchases of product with minimum quantities of less than one. [GitHub-5570](https://github.com/magento/magento2/issues/5570)

<!--- 52577 -->

*  Magento no longer pre-fills the **Set Product as New From Date** field when you set a special price for a product. [GitHub-4387](https://github.com/magento/magento2/issues/4387)

<!--- 60613 -->

*  When you edit a widget’s  existing condition, Magento now loads the SKU grid with all available SKUs. [GitHub-6985](https://github.com/magento/magento2/issues/6985)

<!--- 56978 -->

*  Changing a product price under the website scope now updates the product price across all stores. Previously, any price you set on the store view level overrode the price set in website scope. [GitHub-5133](https://github.com/magento/magento2/issues/5133), [GitHub-7251](https://github.com/magento/magento2/issues/7251)

<!--- 60602 -->

*  Combine rule conditions now work as expected for product list  widgets. [GitHub-7274](https://github.com/magento/magento2/issues/7274)

<!--- 59256 -->

*  Component Manager now handles custom Composer modules. Previously, when you tried to install a custom extension using **System > Tools > Web Setup > Component Manager**, Magento displayed the spinning widget indefinitely. [GitHub-6718](https://github.com/magento/magento2/issues/6718)

<!--- 59234 -->

*  We’ve fixed an issue with sorting products by tier price. Previously, if you enabled the Used for Sorting in Product Listing field in the Edit Tier Price Attribute page. and then selected sort by tier price on the storefront, Magento displayed an error message. [GitHub-6751](https://github.com/magento/magento2/issues/6751)

<!--- 59130  -->

*  Products returned by an API product paginated search now include `category_ids` as a member of `custom_attributes`. [GitHub-6127](https://github.com/magento/magento2/issues/6127)

<!--- 58053  -->

*  Product images in Magento installations with multiple store views are now assigned as expected to each store view. [GitHub-6259](https://github.com/magento/magento2/issues/6259)

<!--- 59130  -->

*  Products returned by an API product paginated search now include `category_ids` as a member of `custom_attributes`. [GitHub-6127](https://github.com/magento/magento2/issues/6127)

<!--- 58053  -->

*  Product images in Magento installations with multiple store views are now assigned as expected to each store view. [GitHub-6259](https://github.com/magento/magento2/issues/6259)

<!--- 56943 -->

*  Magento now successfully handles purchases of product with minimum quantities of less than one. [GitHub-5570](https://github.com/magento/magento2/issues/5570)

<!--- 58290  -->

*  Magento no longer adds an empty product option to each PUT request. Previously, Magento added an empty option even when the options array was empty. [GitHub-5963](https://github.com/magento/magento2/issues/5963)

### Configurable products

<!---57055 -->

*  You can now successfully disable the lowest price of a [configurable product](https://glossary.magento.com/configurable-product) and its associated simple products. Previously, Magento displayed a configurable product's lowest price even after you disabled that price.

<!---56998  -->

*  Magento no longer applies one simple product's special price to another [simple product](https://glossary.magento.com/simple-product) of the same configurable product. Previously, when you set a regular and special price for a child product, all products associated with the same configurable product displayed a regular and special price, even when these amounts were the same. [GitHub-4442](https://github.com/magento/magento2/issues/4442), [GitHub-5097](https://github.com/magento/magento2/issues/5097), [GitHub-6645](https://github.com/magento/magento2/issues/6645)

<!---54808  -->

*  You can now edit a product attribute for multiple configurable products. Previously, when you tried to bulk-edit an attribute on a collection of filtered, configurable products, Magento would complete the process without incorporating your edits, and then incorrectly tell you that the products had been edited.

<!---60605 -->

*  Magento no longer throws an [exception](https://glossary.magento.com/exception) when you add a configurable product by [SKU](https://glossary.magento.com/sku) if an associated simple product is out-of-stock.

<!---61055 -->

*  Magento now correctly displays a product as out-of-stock if its child products are disabled. Previously, the [category](https://glossary.magento.com/category) page failed to list the product at all, rather than listing it as out-of-stock.

<!---57044 -->

*  A price change to a custom option affects only that option. Previously, changing the price of a custom option also affected the price of related products. [GitHub-4588](https://github.com/magento/magento2/issues/4588),  [GitHub-5798](https://github.com/magento/magento2/issues/5798), [GitHub-6041](https://github.com/magento/magento2/issues/6041), [GitHub-6097](https://github.com/magento/magento2/issues/6097)

<!--- 65339  -->

*  The check that Magento runs to confirm a configurable product's readiness for sale is now faster.  (The `isSalable` method checks that a [configurable product](https://glossary.magento.com/configurable-product) can be sold (that is, is in a salable state)).

<!--- 65247  -->

*  Query optimizations have improved the speed of configurable product price calculation.

<!--- 65246  -->

*  Magento no longer calculates configurable product special prices on the category page. Previously, Magento calculated special prices on the category page, but did not display them.

<!--- 56951 -->

*  Magento now displays configurable products as expected after creation.

<!--- 70346 -->

*  Magento no longer displays a configurable product on the storefront when its child products are deleted and the **show out-of-stock** setting is set to **No**.

<!--- 71656 -->

*  Configurable products no longer show up on category page when all children are set to **enable product = No** and **display out-of-stock products = Off**.

<!---59879 -->

*  Magento no longer displays the **as low as** label for a disabled price on the Category page.

<!---60098 -->

*  The price you set on the website scope no longer overrides any local settings you set on configurable products at the store view level.

<!---52717, 59649 -->

*  You can now successfully disable the lowest price of a configurable product and its associated simple products. Previously, Magento displayed a configurable product's lowest price even after you disabled the price. [GitHub-4419](https://github.com/magento/magento2/issues/4419)

<!---60483 -->

*  Magento now correctly displays a product as out-of-stock if its child products are disabled. Previously, the [category](https://glossary.magento.com/category) page failed to list the product at all, rather than listing it as out-of-stock.

<!--- 61058 -->

*  Magento now displays the correct drop-down option labels for configurable products when using attributes with custom source.

<!--- 63014 -->

*  Magento now shows the correct price of a configurable product based in installations that run multiple websites.

<!--- 54653 -->

*  We’ve improved the performance of Magento installations that contain configurable products with many (1600+) options.

<!--- 56591 -->

*  We’ve resolved some issues with the display of configurable products on the Magento frontend after product creation.

<!--- 59307 -->

*  Magento now displays only the set price for a configurable product, not its set price and “as low as” price. Previously, Magento showed both prices if a minimum price was not configured.

<!---61596  -->

*  Magento no longer removes the simple products associated with a configurable product if you click on the **Save** button more than once while saving the configurable product. Previously, if you clicked on **Save** more than once during an attempt to save a configurable product, Magento removed the simple products that were assigned to it.

<!---64221  -->

*  Special prices now display correctly for future discounts [GitHub-8375](https://github.com/magento/magento2/issues/8375)

<!---52925  -->

*  Magento no longer applies one simple product's special price to another simple product of the same configurable product. Previously, when you set a regular and special price for a child product, all products associated with the same configurable product displayed a regular and special price, even when these amounts were the same. [GitHub-4442](https://github.com/magento/magento2/issues/4442), [GitHub-5097](https://github.com/magento/magento2/issues/5097), [GitHub-6645](https://github.com/magento/magento2/issues/6645)

<!---59512  -->

*  Magento now shows the correct product price for products that you add to the wish list from the category page. [GitHub-6866](https://github.com/magento/magento2/issues/6866)

<!---57995  -->

*  Videos now play as expected on simple products as they do  for configurable products. Previously, simple product videos were displayed as thumbnail images only.[GitHub-6360](https://github.com/magento/magento2/issues/6360)

<!---57279  -->

*  Users no longer lose configurable product data when you change the interface locale to Chinese (China) or Arabic (Egypt).

### Email

<!---57496 -->

*  Magento now successfully loads the New Order Email templates. [GitHub-5101](https://github.com/magento/magento2/issues/5101)

<!---57204  -->

*  The **Send Welcome Email From** field now identifies the store that the customer is associated with.

<!---59146  -->

*  Magento no longer sends email when the **Disable email communication** setting is set to **yes**. Previously, Magento sent email even when this setting was enabled. [GitHub-5988](https://github.com/magento/magento2/issues/5988)

### Frameworks

<!--- 60611 -->

*  Static file generation is no longer affected by a race condition that affected merging CSS files. Previously, this race condition interfered with the proper generation of the product frontend.

<!---71257  -->

*  The ability to disable module output has been removed from Admin. If you disabled module output from Admin in a previous release, you must manually configure these settings. See [Disable module output]({{ page.baseurl }}/config-guide/config/disable-module-output.html) for details.

<!---69868  -->

*  Static tests run in a Windows environment no longer fail due to file path mismatches. *Fix submitted by community member barbazul in pull request [9902](https://github.com/magento/magento2/pull/9902){:target="_blank"}.*

<!---63154  -->

*  Magento now displays special characters in store names in email subject lines. Previously, special characters in the store name were converted to numerical character references in the email subject field. [GitHub-8094](https://github.com/magento/magento2/issues/8094)

<!---56947  -->

*  You can now link a simple product to a configurable one. Previously, when you tried to use REST to link a simple product  to a configurable one, the products were not linked even though Magento responded, `Status Code: 200 OK`.

#### Admin framework

<!--- 57805  -->

*  You can no longer delete a currently logged-in user.

<!--- 57629  -->

*  Inline editing in Admin now includes ACL checks. Previously, the Quick Edit editor did not respect permissions.

#### Application framework

<!--- 64901  -->

*  Magento now supports new top level domains for email addresses. [GitHub-4547](https://github.com/magento/magento2/issues/4547)

<!--- 70010  -->

*  Page titles in layout files are not translatable. *Fix submitted by community member Anton Evers in pull request [9992](https://github.com/magento/magento2/pull/9992){:target="_blank"}.*

<!--- 67500  -->

*  The `setup:static-content:deploy`, `setup:di:compile` and `deploy:mode:set` commands now return non-zero exit code if an error occurs. *Fix submitted by community member Pablo Ivulic in pull request [7780](https://github.com/magento/magento2/pull/7780){:target="_blank"}.*

<!--- 67408 -->

*  We've changed the `select` protected property to `query` in the AbstractSearchResult class. *Fix submitted by community member Alex Gusev in pull request [5043](https://github.com/magento/magento2/pull/5043){:target="_blank"}.*

<!---67260 -->

*  `\Magento\Framework\Interception\Code\Generator\Interceptor` now supports interceptors for generating for methods that return references. [GitHub-9167](https://github.com/magento/magento2/issues/9167)

<!---58394 -->

*  The Magento Framework now makes its dependency upon the `zendframework/zend-stdlib` library explicit in `composer.json`. [(GITHUB-6442)](https://github.com/magento/magento2/issues/6442){:target="_blank"}

#### Configuration framework

<!--- 69894  -->

*  Configuration values no longer return NULL when Redis reaches the limit set in the `max_memory` setting. Previously, when Redis met the limit specified in this setting, `ScopeConfig` returned a value of NULL for configuration options, which resulted in significant damage to data (for example, deleting all prices assigned to a website from the database).

<!--- 65003  -->

*  The currency setup in Admin no longer throws an `in_array` error when a single value is selected. *Fix submitted by community member Derik Nel in pull request [8077](https://github.com/magento/magento2/pull/8077){:target="_blank"}.*

<!--- 65422  -->

*  Magento now writes all default configuration values to the `config.php` file.

#### JavaScript framework

<!--- 71180  -->

*  Customers can now place orders as expected when Magento is running a French locale in production mode. Previously, customers could not complete a transaction in a storefront running a French locale, although they could if they switched to the storefront running the English locale.

<!--- 58285  -->

*  Magento now displays server-side Ajax error messages.

<!--- 69674  -->

*  JavaScript mixins now work when you add a `urlArgs` argument to a `require_js` file. *Fix submitted by community member James Reed in pull request [9665](https://github.com/magento/magento2/pull/9665){:target="_blank"}.*

#### Session framework

<!--- 57118  -->

*  The Magento storefront and Admin panel no longer share form keys. Previously, if a user were navigating both a storefront and  the Admin simultaneously,  he would be unexpectedly redirected to the Admin dashboard. [GitHub-6201](https://github.com/magento/magento2/issues/6201)

#### Zend framework

Thanks to our hardworking Magento Open Source community members for the following contributions!

<!--- 67511 -->

*  We’ve removed  `Zend_Json` from Magento Theme and replaced it with a new serializer class. *Fix submitted by community member David Manners in pull request [9262](https://github.com/magento/magento2/pull/9262){:target="_blank"}.*

<!--- 67510 -->

*  We’ve removed `Zend_Json` from the Weee module. *Fix submitted by community member David Manners We’ve removed pull request [9261](https://github.com/magento/magento2/pull/9261){:target="_blank"}.*

<!--- 69369 -->

*  We’ve replaced the direct usage of `Zend_Json` with a call to the `Json_Help` class. *Fix submitted by community member David Manners in pull request [9344](https://github.com/magento/magento2/pull/9344){:target="_blank"}.*

<!--- 69451 -->

*  We’ve replaced  `Zend_Json` in the configurable product block test. *Fix submitted by community member David Manners in pull request [9753](https://github.com/magento/magento2/pull/9753){:target="_blank"}.*

<!--- 69452 -->

*  We’ve removed `Zend_Json` from form elements. *Fix submitted by community member David Manners in pull request [9754](https://github.com/magento/magento2/pull/9754){:target="_blank"}.*

<!--- 69371 -->

*  We’ve replaced the Magento Framework's `Zend_Session` interface usage with SessionHandlerInterface. *Fix submitted by community member Timon de Groot in pull request [9285](https://github.com/magento/magento2/pull/9285){:target="_blank"}.*

<!--- 69157 -->

*  We’ve removed `Zend_Wildfire` and `Zend_Controller` from the codebase. *Fix submitted by community member Isolde in pull request [9622](https://github.com/magento/magento2/pull/9622){:target="_blank"}.*

<!--- 69152 -->

*  We've resolved issues with selecting widgets in TinyMCE. [GitHub-9655](https://github.com/magento/magento2/issues/9655), [GitHub-9518](https://github.com/magento/magento2/issues/9518) *Fixes submitted by community member Pieter Hoste in pull request [9540](https://github.com/magento/magento2/pull/9540){:target="_blank"} and community member Bernhard in pull request [9711](https://github.com/magento/magento2/pull/9711){:target="_blank"}.*

<!--- 69591 -->

*  We’ve replaced `Zend_Log` with `Psr\Log\LoggerInterface`. *Fix submitted by community member Timon de Groot in pull request [9285](https://github.com/magento/magento2/pull/9285){:target="_blank"}.*

<!--- 68770 -->

*  Magento no longer throws a `Zend_Db_Statement_Exception` when a user opens an empty Category page. *Fix submitted by community member adrian-martinez-interactiv4 in pull request [9400](https://github.com/magento/magento2/pull/9400){:target="_blank"}.*

### General fixes

<!--- 56892 -->

*  You can now save products using the multiple select attribute value. Previously, you could not save values if using this attribute.

<!--- 56126  -->

*  You can now log in successfully after creating a custom attribute. Previously, Magento would display an error message, and you could not log in, after first creating a custom attribute, then logging out.

<!--- 55462/52448 -->

*  Magento now correctly displays customer address during account creation. Previously, when you selected a default billing address during creation of a new customer account, Magento would not display the address.

<!--- 60890  -->

*  Admin users with restricted permissions can now log in successfully as determined by those permissions. Previously, Magento displayed a fatal error when you logged in under these conditions.

<!---55662 -->

*  We've removed the duplicated [PHP](https://glossary.magento.com/php) settings from the sample web server configuration files.

<!---57383 -->

*  You can now make Return Merchandise [Authorization](https://glossary.magento.com/authorization) (RMA) comments visible from the storefront by setting **Stores > Settings > Configuration > Sales > RMA Settings > Enable RMA on Storefront**.

<!---57187 -->

*  When creating a new page with the Add New Page feature, Magento no longer throws a JavaScript error when [Layout](https://glossary.magento.com/layout) is set to empty.

<!---57351 -->

*  We've removed the sample password from the Setup Wizard.

<!---56973 -->

*  You can now assign open-ended start and complete dates for product rules. Previously, if you left the start and end date field blanks when creating a rule, Magento would supply the start and end dates based on the save date.

<!---58500 -->

*  The Magento Framework now makes its dependency upon the `zendframework/zend-stdlib` library explicit in `composer.json`.  [GitHub-6442](https://github.com/magento/magento2/issues/6442)

<!---57035 -->

*  You can now upload changes to the `robots.txt` file from the Admin panel.

<!---57197 -->

*  We've eliminated difficulties saving product information when logged in as Admin. Previously, the Product Save feature worked erratically for Admin users.

<!---59397 -->

*  Custom themes now inherit parent [XML](https://glossary.magento.com/xml) configuration information as expected.

<!--- 60248 -->

*  Information set by the **Default Billing Address** and **Default Shipping Address** checkboxes on the Customer page are now saved correctly.

<!---59416  -->

*  [Admin](https://glossary.magento.com/admin) users with appropriate permissions can now reset the passwords of more than one customer at a time. [GitHub-5260](https://github.com/magento/magento2/issues/5260)

<!---59142  -->

*  Admin interface forms now load data as expected after initializing all components. Previously, under certain conditions, the load indicator would spin indefinitely, and Magento would not load data.

<!---59810  -->

*  Showing reports on the **Reports > Coupons** page no longer throws an error when the user is in a non-default Admin locale.  [GitHub-7037](https://github.com/magento/magento2/issues/7037)

<!---70318  -->

*  You can now generate static content without a database connection. [GitHub-10041](https://github.com/magento/magento2/issues/10041)

<!--- 60185  -->

*  Static content deployment now generates secure content, whether content included secure or non-secure URLs.

<!--- 56062  -->

*  The Recently Viewed Products block now appears as expected when the full page cache is enabled. [GitHub-3890](https://github.com/magento/magento2/issues/3890)

<!--- 56077  -->

*  We've resolved an issue that prevented you from adding more than one product to a [shopping cart](https://glossary.magento.com/shopping-cart) from a wishlist. [GitHub-5282](https://github.com/magento/magento2/issues/5282)

<!--- 52850 -->

*  Widgets now accept UTF-8 special characters type as input parameters. Previously, you could successfully create a widget, but UTF-8 special characters were broken. [GitHub-4232](https://github.com/magento/magento2/issues/4232) *Fix submitted by community member Pieter Hoste in pull request [9333](https://github.com/magento/magento2/pull/9333){:target="_blank"}.*

<!---65631  -->

*  Magento now sends email that provides updates on the status of RMA authorization.

<!--- 71415 -->

*  Mass actions now work as expected on the Customer grid. Previously, Magento could not process more than 20 items at a time.

<!--- 71179  -->

*  Customers who subscribe to a newsletter are now subscribed as expected after confirming their account. Previously, Magento unsubscribed customers from the newsletter after confirming their account.

<!---56314  -->

*  Fixed issue with using the Magento Commerce invitations feature to insert malicious JavaScript and subsequently execute it in the Admin context.

<!--- 56778  -->

*  You can now save products using the multiple select attribute value. Previously, you could not save values if using this attribute.

<!--- 54725 -->

*  You can now assign open-ended start and complete dates for product rules. Previously, if you left the start and end date field blanks when creating a rule, Magento would supply the start and end dates based on the save date.

<!--- 59785 -->

*  Magento no longer generates incorrect URLs in the site map when the **Use Secure URLs in Admin** setting is set to **Yes**. [GitHub-8644](https://github.com/magento/magento2/issues/8644)

<!--- 69606 -->

*  We’ve resolved a conflict that occurred after you changed a base URL. Previously, after you changed a `base_url` value (**Stores->Configuration > General > Web > Base URLs (Secure)**), Magento would update the base URL, then resubscribe, potentially resulting in a failure during the next update secure `base_url` call.

<!--- 70683 -->

*  Magento now displays newly registered customers in the Admin customer list as expected.

<!--- 67619 -->

*  The Customer Segment page no longer shows non-matching customers when a customer logs in and you refresh the Customer Segment page.

<!--- 67048 -->

*  You can now add a `translate` attribute to any String argument in the `di.xml` file for any class. This attribute provides an ability on the level of dependency injection configuration to specify that an argument can be translated. The actual translation of strings is handled by another Magento component.

<!--- 59322 -->

*  Magento frontend scope filters now work as expected. Previously, Magento did not reload product information correctly when you applied a filter using **Catalog > Product**.

<!--- 58298 -->

*  Only users with permission to view a store can view or process the orders placed on it.

<!--- 63736 -->

*  You can render the `tax_class_id` attribute nonsearchable. Previously, Magento displayed a 503 error under these circumstances.

<!--- 59966 -->

*  We fixed an issue where cache-misses sometimes occurred when Fastly cache was implemented. Previously, the header information included in the response sometimes prevented the caching of this page. To minimize this potential problem, Magento now does not include header empty of real content in the response.

<!--- 65000 -->

*  Fixed the location of the `wishlist.js` file. *Fix submitted by community member [Koen V.](https://github.com/koenner01){:target="_blank"} in pull request [8633](https://github.com/magento/magento2/pull/8633){:target="_blank"}.*

<!--- 66506 -->

*  You can no longer download products  after you’ve set order state to `STATE_CANCELED`.  *Fix submitted by community member nazarpadalka in pull request [8917](https://github.com/magento/magento2/pull/8917){:target="_blank"}.*

<!--- 66232 -->

*  Fixed a typo in the Pull Request Template. *Fix submitted by community member tomislavsantek in pull request [8908](https://github.com/magento/magento2/pull/8908){:target="_blank"}.*

<!--- 66694 -->

*  You now receive an error message as expected if you try to submit a product review while not logged in. *Fix submitted by community member quienti in pull request [9001](https://github.com/magento/magento2/pull/9001){:target="_blank"}.*

<!--- 67042 -->

*  Fixed grammar error in the customer dashboard. *Fix submitted by community member Petar Sambolek in pull request [9080](https://github.com/magento/magento2/pull/9080){:target="_blank"}.*

<!--- 67320 -->

*  The popup window in the Safari browser now closes properly. *Fix submitted by community member Hans Schouten in pull request [8824](https://github.com/magento/magento2/pull/8824){:target="_blank"}.*

<!--- 67054 -->

*  We’ve fixed minor performance issues when you use `/pub` as `docroot`. *Fix submitted by community member Joseph Maxwell in pull request [9094](https://github.com/magento/magento2/pull/9094){:target="_blank"}.*

<!--- 70310 -->

*  The Actions dropdown menu is now properly aligned in the Admin when the action column is not the last column. *Fix submitted by community member Marius Strajeru in pull request [10082](https://github.com/magento/magento2/pull/10082){:target="_blank"}.*

<!--- 70029 -->

*  Magento now deletes pending entries in `cron_schedule` when you reconfigure a cron job. *Fix submitted by community member Anton Evers in pull request [9957](https://github.com/magento/magento2/pull/9957){:target="_blank"}.*

<!--- 69886 -->

*  We’ve fixed the cron timestamp method. *Fix submitted by community member Anton Evers in pull request [9943](https://github.com/magento/magento2/pull/9943){:target="_blank"}.*

<!--- 69373 -->

*  You can now save customers with unique attributes. *Fix submitted by community member storbahn in pull request [9712](https://github.com/magento/magento2/pull/9712){:target="_blank"}.*

<!--- 69555 -->

*  The `Magento_Framework/View/Layout/etc/elements.xsd` file `blockReferenceType` definition now allows for the optional argument template. *Fix submitted by community member jissereitsma in pull request [9772](https://github.com/magento/magento2/pull/9772){:target="_blank"}.*

<!--- 59135 -->

*  Customer sessions for different customers are no longer shared on installations on multiple websites. [GitHub-4842](https://github.com/magento/magento2/issues/4842), [GitHub-6468](https://github.com/magento/magento2/issues/6468)

<!--- 63116 -->

*  Magento now handles quotation marks in product names. Previously,  quotation marks in product names caused a JSON error on the Product page.  [GitHub-8059](https://github.com/magento/magento2/issues/8059)

<!--- 59590 -->

*  The website column in Customer Segment report now contains correct data. Previously, this column was blank in the **Reports > Customer > Segments** report.

<!--- 60962 -->

*  When you add an address, new custom attributes are now displayed together, along with other address details.

<!--- 60746 -->

*  You can now edit the default store view and save it under a different name. [GitHub-7349](https://github.com/magento/magento2/issues/7349)

<!--- 57553 -->

*  You can now reset a customer password if **website restrictions** is enabled. Previously, you were redirected to `customer/account/login/` with no possibility to reset the password.

<!--- 59258 -->

*  When you override `module-directory/etc/zip_codes.xml` from a local module, all country codes  are now included as expected. Previously, only the last country code was included, which affected the custom  check out process. [GitHub-6694](https://github.com/magento/magento2/issues/6694)

<!--- 60633 -->

*  `.htaccess` deny code execution now works as expected for  Apache and  php-fpm. [GitHub-6766](https://github.com/magento/magento2/issues/6766)

<!--- 57675 -->

*  Magento now displays the WYSIWYG editor as expected. [GitHub-6222](https://github.com/magento/magento2/issues/6222), [GitHub-4828](https://github.com/magento/magento2/issues/4828), [GitHub-6815](https://github.com/magento/magento2/issues/6815)

<!--- 57796 -->

*  Magento now renders images as expected in the product description area. Previously, Magento did not render images in this area, and would display a broken link. [GitHub-6138](https://github.com/magento/magento2/issues/6138)

### Gift cards

<!---57054  -->

*  Order emails now specify the amount of the [gift card](https://glossary.magento.com/gift-card) that you have purchased.

<!---56932  -->

*  The Checkout page no longer freezes when you order a virtual gift card using the Authorize.net Payment Action value set to **Authorize and Capture**.

<!---57512 -->

*  You can now complete the purchase of a gift card in environments where you have set the Braintree [payment method](https://glossary.magento.com/payment-method) Payment Action to **Authorize and Capture**. Previously, any order made under these conditions would remain indefinitely in the processing stage.

<!---57353 -->

*  You can now add a gift card with an undefined amount to the Items Ordered table. Previously,  Magento did not permit you to add a gift card of an open value to this table.

<!---64645 -->

*  Customers can no longer exceed a gift card balance by using the gift card twice.

<!---61013 -->

*  You can now save the configuration settings of a gift card product.

<!---61353 -->

*  Gift card accounts are now automatically generated after an invoice is created, when the Authorize and Capture payment action on Authorize.net Direct Post is enabled.

### Gift registry

<!--- 59159  -->

*  The State/Province dropdown menu now works as expected in the frontend gift registry.

<!--- 69153 -->

*  We’ve fixed inconsistent gift options checkbox labels in  both the  CSV file (`app\code\Magento\GiftMessage\i18n\en_US.csv`) and PHTML file (`app\code\Magento\GiftMessage\view\frontend\templates\inline.phtml`). *Fix submitted by community member vpiyappan in pull request [9421](https://github.com/magento/magento2/pull/9421){:target="_blank"}.*

### Gift wrapping

<!--- 62721 -->

*  The **Allow Gift Wrapping for Order Items** setting now works as expected. Previously, when **Stores > Settings > Configuration > Sales > Gift Options** was set to **No**, users  saw the Gift Option link under each product in their [shopping cart](https://glossary.magento.com/shopping-cart).

<!--- 70603 -->

*  You can now add gift options to an order if logged in using a secure URL

<!--- 59821 -->

*  Your gift wrapping selection now appears in the shopping cart regardless of whether you've selected a shipping method. Previously, Magento did not display your gift wrapping choice until you selected a shipping method.

<!--- 59948 -->

*  Magento no longer displays the gift wrap tax when no gift wrap is selected.

<!--- 56982 -->

*  You can now save products using the multiple select attribute value. Previously, you could not save values if using this attribute.

<!--- 70267 -->

*  We’ve fixed an issue with fetching quote item by ID. *Fix submitted by community member Mladen Ilic in pull request [10059](https://github.com/magento/magento2/pull/10059){:target="_blank"}.*

<!--- 70466 -->

*  We’ve corrected the ACL for the Developer Section resource. *Fix submitted by community member Pascal Brouwers in pull request [10149](https://github.com/magento/magento2/pull/10149){:target="_blank"}.*

<!--- 70469 -->

*  Layout merging no longer fails when you save a widget that contains the grave accent character in the data. *Fix submitted by community member Timon de Groot in pull request [10151](https://github.com/magento/magento2/pull/10151){:target="_blank"}.*

<!--- 70419  -->

*  Magento now uses the correct order when uploading image to the Admin using  **Content > Design**. *Fix submitted by community member Ihor Sviziev in pull request [10126](https://github.com/magento/magento2/pull/10126){:target="_blank"}.*

### Google Analytics

<!--- 67427 -->

*  We’ve added the missing single quote (‘) to the Google API Tracking code. *Fix submitted by community member Petar Sambolek in pull request [9084](https://github.com/magento/magento2/pull/9084){:target="_blank"}.*

<!--- 69374 -->

*  Google Analytics tracking now works when Cookie Restriction is enabled. *Fix submitted by community member Bernhard in pull request [9713](https://github.com/magento/magento2/pull/9713){:target="_blank"}.*

### HTML

<!--- 67487 -->

*  The CSS minify option no longer removes the whitespace around the minus (-) sign. Also, this option is now compatible with the `calc()` CSS function.  *Fix submitted by community member Petar Sambolek in pull request [9027](https://github.com/magento/magento2/pull/9027){:target="_blank"}.*

### Images

<!---55447 -->

*  Magento no longer encounters an error when it cannot find a product image file. [GitHub-5184](https://github.com/magento/magento2/issues/5184), [GitHub-5497](https://github.com/magento/magento2/issues/5497), [GitHub-3545](https://github.com/magento/magento2/issues/3545), [GitHub-5871](https://github.com/magento/magento2/issues/5871)

<!---56944 -->

*  Magento now successfully saves images that you edit in a [WYSIWYG](https://glossary.magento.com/wysiwyg) editor. Previously, when you tried to change an image by right-clicking it in a WYSIWYG editor and choosing Insert/Edit Image, Magento did not save your changes.

<!---58335, 42954 -->

*  You can now preview uploaded images.

<!---56972 -->

*  You can now set an image size for product watermarks. [GitHub-5270](https://github.com/magento/magento2/issues/5270)

<!---55608 -->

*  Graphics now scroll as expected on mobile devices. [GitHub-5302](https://github.com/magento/magento2/issues/5302)

<!--- 55234 -->

*  Magento now successfully saves images that you edit in a [WYSIWYG](https://glossary.magento.com/wysiwyg) editor. Previously, when you tried to change an image by right-clicking it in a WYSIWYG editor and choosing Insert/Edit Image, Magento did not save your changes.

<!--- 58031 -->

*  Inserted images on the content block of Category no longer reference the Admin URL. Previously, when you used the Wysiwyg editor to insert an image into the Content block of a Category, the image URL on the frontend would reference the Admin location. When you subsequently logged out of the Admin panel, and refreshed the Category page, the image is no longer available.

#### Import/Export

<!---58977 -->

*  You can now successfully import multiselect attributes that contain special symbols or delimiters. Previously, when you tried to import attributes containing delimiters, data validation (and the import) failed.

<!---57052 -->

*  You can now import negative quantities. Previously, when importing a product quantity  of '-1',  Magento returned an error.

<!---56018 -->

*  Magento now imports custom options correctly. Previously, when you tried to import a custom option, the import failed, and Magento displayed this error: `Javascript Error: Uncaught RangeError: Maximum call stack size exceeded`. [GitHub-5573](https://github.com/magento/magento2/issues/5573)

<!---57438, 57135 -->

*  We’ve added a new way to import images: You can now successfully import images when you set your document root to `your_Magento_install_dir/pub`. Previously, you needed to set document root to `/magento` to import images. Both ways of importing now work. [GitHub-5359](https://github.com/magento/magento2/issues/5359)

<!---57490 -->

*  Magento now removes category URL keys from the `url_rewrite` table as expected during import. Previously, Magento did not remove these keys, which triggered a failure during import. This subsequently caused Magento to quickly reach the maximum error count, returning this error: "Maximum error count has been reached or system error is occurred!". [GitHub-1471](https://github.com/magento/magento2/issues/1471)

<!---57981 -->

*  You can now export a [bundle product](https://glossary.magento.com/bundle-product) that contains a custom text area attribute.  Previously, if you tried to export this type of bundle product, the export would fail, and Magento displayed the message, "There is no data for the export".

<!--- 58299  -->

*  Magento now maintains super attribute ordering of configurable products with multiple super attributes after export or import. Previously, after import or export, the ordering of super attributes was not maintained. [GitHub-6079](https://github.com/magento/magento2/issues/6079)

<!--- 55237  -->

*  Magento now correctly displays both configurable and simple products, their attribute values, and visibility values after import if SKU is an integer. [GitHub-5547](https://github.com/magento/magento2/issues/5547)

<!--- 58316 -->

*  Magento now imports customer data as expected after the data passes the pre-import validation step. Previously, although data passed this validation step, an error would occur during import, and Magento displayed this message: `Invalid data for insert`. [GitHub-4921](https://github.com/magento/magento2/issues/4921), [GitHub-9469](https://github.com/magento/magento2/issues/9469)

<!--- 71013 -->

*  The export process now populates values in the configurable variations column for configurable products as expected. Previously, when exporting more than one product, the values for the configurable variations column for configurable products were not included.

<!--- 64643, 64856 -->

*  Magento now displays imported product images in this order: first, the base image, then the additional images in the order in which they were listed in the [CSV](https://glossary.magento.com/csv) file. Previously, Magento displayed images in this unexpected order: first, an additional image, then the base image, and finally, all remaining additional images.

<!--- 56588 -->

*  Magento now runs a selective partial re-indexing operation after import if you enable **Update on Schedule**. Previously, Magento ran a full reindex no matter which index mode was set.

<!--- 53428, 56804 -->

*  We've fixed an issue with the correct representation of date and time zones of items in a product [catalog](https://glossary.magento.com/catalog) during import or export. Previously, Magento exported all dates in the default format (UTC-8), including values that you set to be displayed using another standard.

<!--- 65667 -->

*  Magento now successfully imports customer multiselect attributes. Previously, when you imported a CSV file with either the option's ID numbers or the option's values, Magento returned an error.

<!--- 67240 -->

*  Magento now displays more verbose information about duplicated information with links to action for troubleshooting the import process. Previously, Magento displayed duplicated or incomplete information on the product page after import.

<!--- 61025 -->

*  Magento now exports rows only once when product information contains HTML special characters. Previously, Magento exported rows containing product information that included HTML characters at least twice.

<!--- 60067 -->

*  We've improved the import speed of advanced pricing data. Previously, the import process for this information frequently stopped after the import of approximately 300 rows of data, and Magento displayed this message: `Please Wait`.

<!--- 64902  -->

*  The CatalogImportExport uploader now handles HTTPS images as expected. *Fix submitted by community member Clement Beudot in pull request [8278](https://github.com/magento/magento2/pull/8278){:target="_blank"}.*

<!---58976  -->

*  You can now successfully import multiselect attributes that contain special symbols or delimiters. Previously, when you tried to import attributes containing delimiters, data validation (and the import) failed.

<!---61104  -->

*  When you delete an image in Admin, Magento no longer deletes it on the server. Previously, Magento deleted it from the server as well, which caused errors for other products (example error message: `Cannot gather stats! Warning!stat(): stat failed for`).

<!---66270  -->

*  The exported sheet now generates or renders data for columns that indicate associations for configurable products.

<!---59743  -->

*  Magento no longer deletes a product after you select the Replace option while importing a product. Previously, Magento deleted the product rather than replacing it.

<!---59715  -->

*  Magento can now import `additional_images` that are tagged with labels that contain a comma separator.

<!---58289  -->

*  We've fixed an issue where product URL keys (for SKUs) were not auto-generated as expected during import. [GitHub-5188](https://github.com/magento/magento2/issues/5188)

<!---58385  -->

*  Magento now updates attribute sets as expected when importing  products from CSV. [GitHub-5498](https://github.com/magento/magento2/issues/5498)

<!---63835  -->

*  The CatalogImportExport uploader can now handle HTTPS images. Previously, if the URL of a file contained HTTPS, the uploader  still used the HTTP provider to retrieve the image, which lead to an error. [GitHub-8277](https://github.com/magento/magento2/issues/8277)

<!--- 57675 -->

*  Magento now displays the WYSIWYG editor as expected. [GitHub-6222](https://github.com/magento/magento2/issues/6222), [GitHub-4828](https://github.com/magento/magento2/issues/4828), [GitHub-6815](https://github.com/magento/magento2/issues/6815)

<!--- 56014 -->

*  The Admin’s Most Viewed Products tab now displays correct product prices. Previously, prices for products in Most Viewed Products tab were incorrectly listed as $0. [GitHub-5660](https://github.com/magento/magento2/issues/5660)

<!--- 57796 -->

*  Magento now renders images as expected in the product description area. Previously, Magento did not render images in this area, and would display a broken link. [GitHub-6138](https://github.com/magento/magento2/issues/6138)

#### Integrations

<!---56961, 54795 -->

*  With valid permissions, you can now regain access to your Admin account after it is temporarily disabled due to invalid credentials. Previously, you could not unlock the account of a valid Admin user if it were disabled due to multiple invalid login attempts.

<!--- 61867 -->

*  Web API tokens now have a default expiration period: 4 hours for Admin tokens and 1 hour for Customer tokens. This can be changed in the [Admin Panel configuration settings]({{ site.baseurl }}/guides/v2.2/get-started/authentication/gs-authentication-token.html#admin-and-customer-access-tokens)

<!--- 69610 -->

*  You can now edit `authentication_lock` from the Admin. *Fix submitted by community member Elias Kotlyar in pull request [9820](https://github.com/magento/magento2/pull/9820){:target="_blank"}.*

### Indexing

<!---56928 -->

*  We've improved the performance of the algorithm that Magento uses to calculate batch sizes while indexing categories.

<!---57470  -->

*  Magento no longer displays an indexing error when Elasticsearch is enabled. Previously, Magento displayed this indexing error when Elasticsearch was enabled:  `mapper_parsing_exception`.

<!---58703 -->

*  The category/product indexer now successfully completes a full reindexing of all indexes on large profiles with 500,000 or more products. Previously, Magento successfully generated a large profile, but failed to complete the reindexing of the categories or products, and displayed the following error:  "Error 1114: Table is full".

<!--- 58893 -->

*  `IndexerHandlerFactory` no longer tries to cast the `$indexer` object to a String if an error occurs. Since `$indexer` is an object of type `IndexerInterface` and does not have a `__toString()` method, attempting to cast the `$indexer` object to a String previously resulted in an error. [GitHub-5155](https://github.com/magento/magento2/issues/5155)

<!--- 59853 -->

*  The Magento flat indexer now collects correct product data for `ROW_ID`.

<!--- 58559 -->

*  The Magento flat indexer no longer throws an error after flat tables are enabled and reindexed. This fix applies to both product and [catalog](https://glossary.magento.com/catalog) tables.

<!--- 65362  -->

*  Magento now runs a selective partial re-indexing operation after import if you enable **Update on Schedule**. Previously, Magento ran a full reindex no matter which index mode was set.

<!--- 55154  -->

*  `IndexerHandlerFactory` no longer tries to cast the `$indexer` object to a String if an error occurs. Since `$indexer` is an object of type `IndexerInterface` and does not have a `__toString()` method, attempting to cast the `$indexer` object to a String previously resulted in an error. [GitHub-5155](https://github.com/magento/magento2/issues/5155)

<!--- 23764 -->

*  The category/product indexer now successfully completes a full reindexing of all indexes on large profiles with 500,000 or more products. Previously, Magento successfully generated a large profile, but failed to complete the reindexing of the categories or products, and displayed the following error: "Error 1114: Table is full".

<!---71242  -->

*  We’ve resolved failures with indexing in installations that implemented catalogs containing at least 5,000 - 6,000 SKUs.

<!--- 55589 -->

*  We've improved the performance of the algorithm that Magento uses to calculate batch sizes while indexing categories.

<!--- 60824 -->

*  Reindexing no longer results in an SQL error that prevents bundle products from being reindexed, and results in wrong product prices.

### Orders

<!--- 61268, 59424, 56433, 59422-->

*  We’ve added PHP interfaces that add the ability to change the status of a [shipment](https://glossary.magento.com/shipment). The new Creditmemo interface supports tasks you can already do through the Magento Admin, including the ability to:

   *  support returning multiple units of a configurable product. Previously, when you tried to refund an order, you could refund only one unit of a configurable product, not the amount in the original order.

   *  return the product to stock

   *  change order status after a credit memo has been created.

<!--- 57077 -->

*  You can now set the customer group when creating a new order from the Admin interface. [GitHub-6162](https://github.com/magento/magento2/issues/6162)

<!---57387  -->

*  You can now print invoices and credit memos from the Order page.

<!--- 55598/54787  -->

*  You can now successfully place orders when the Enable and Configure [Website](https://glossary.magento.com/website) Payments Standard Payment Action attribute is set to Sale. Previously, under these conditions, Magento would display an error message and not allow you to complete the purchase. [GitHub-4785](https://github.com/magento/magento2/issues/4785)

<!--- 50026  -->

*  Attributes of the `salesInvoiceRepository` methods are now more appropriately type cast. (The data type is now a nullable float.)  Previously, due to the use of an incorrect data type, Magento would produce an error when calling the `salesInvoiceRepositoryV1GetList` method. [GitHub-3605](https://github.com/magento/magento2/issues/3605)

<!--- 58832 -->

*  The order comments history no longer duplicates the time that a comment was made. Previously, the time that a comment was made was listed twice.

<!--- 62783 -->

*  Magento now uses the address template from store view level of the placed order (similar to how order confirmation email works). Previously, Magento used the wrong address template for order e-mails.

<!--- 59052  -->

*  Magento now correctly identifies an order being processed when it is placed in a store configured for multiple currencies. Previously, these orders always were identified as potentially fraudulent.

<!--- 56150 -->

*  The order comments history no longer duplicates the time that a comment was made. Previously, the time that a comment was made was listed twice.

<!--- 54813  -->

*  You can now add a gift card with an undefined amount to the Items Ordered table. Previously, Magento did not permit you to add a gift card of an open value to this table.

<!--- 58074 -->

*  The **Print Shipping Label** link now displays on the product frontend. Previously, the layout for the Shipping and Tracking block did not work properly.

<!---66428  -->

*  You can now create an order through Admin  if there is a `translate csv` for order-header. *Fix submitted by community member Pascal Brouwers in pull request [6856](https://github.com/magento/magento2/pull/6856){:target="_blank"}.*

<!---69378  -->

*  You can now use a second credit memo to successfully issue a full refund for a credit memo with adjustment fees. *Fix submitted by community member Max Pronko in pull request [9715](https://github.com/magento/magento2/pull/9715){:target="_blank"}.*

<!---69551  -->

*  Coupon codes are now included in  invoice print outs. *Fix submitted by community member Belgacem Naoui in pull request [9780](https://github.com/magento/magento2/pull/9780){:target="_blank"}.*

<!---69909  -->

*  The Orders grid now displays correct order dates. *Fix submitted by community member  Anton Evers in pull request [9941](https://github.com/magento/magento2/pull/9941){:target="_blank"}.*

<!---68795  -->

*  Magento now displays the correct order time in the Sales Order grid in the Admin panel. [GitHub-9426](https://github.com/magento/magento2/issues/9426)

<!--- 60587  -->

*  We’ve increased the size of the `sales_order_payment.cc_number_enc` field. [GitHub-7334](https://github.com/magento/magento2/issues/7334)

<!--- 57312 -->

*  We’ve fixed an issue with an undefined offset in the `order\config.php` file. [GitHub-6111](https://github.com/magento/magento2/issues/6111)

<!--- 59905 -->

*  The Create Order page now works as expected after you select **Update items and quantities**.

<!--- 59586 -->

*  Magento no longer creates unnecessary  loaders during checkout with an order that contains virtual products.

<!--- 57846 -->

*  New orders no longer stay in the processing state after you click the Place Order button. Previously, new orders stayed in the processing state even after you clicked Place Order. [GitHub-5860](https://github.com/magento/magento2/issues/5860)

<!--- 60692 -->

*  You can now use either the parent order item ID or child product order item ID when using  the REST API (`/V1/order/:orderId/invoice : POST method API`)  to create an invoice for an order containing bundle products. [GitHub-6988](https://github.com/magento/magento2/issues/6988)

<!--- 58722 -->

*  We’ve increased the size of the `shipping_method` column in the `sales_order` and `quote_address` tables. [GitHub-6475](https://github.com/magento/magento2/issues/6475)

<!--- 56938 -->

*  Magento now creates the shipping address as expected when you  use REST to create an order.  Previously, when you used REST to create an order, then subsequently viewed the order from the Admin, Magento threw an error.

<!--- 53005 -->

*  Magento now displays all tax details as expected on the Admin order page. Previously, Magento did not save the order tax rate information, and the full tax summary was incomplete.

<!--- 57880 -->

*  You can now cancel an order of a bundle product. [GitHub-5194](https://github.com/magento/magento2/issues/5194)

<!--- 57312 -->

*  We’ve fixed an issue with an undefined offset in the `order\config.php` file. [GitHub-6111](https://github.com/magento/magento2/issues/6111)

<!--- 56014 -->

*  The Admin’s Most Viewed Products tab now displays correct product prices. Previously, prices for products in Most Viewed Products tab were incorrectly listed as $0. [GitHub-5660](https://github.com/magento/magento2/issues/5660)

<!--- 57846 -->

*  New orders no longer stay in the processing state after you click the Place Order button. Previously, new orders stayed in the processing state even after you clicked Place Order. [GitHub-5860](https://github.com/magento/magento2/issues/5860)

### Payment methods

<!--- 72305 -->

*  We’ve added support for the change to the USPS API that USPS implemented on September 1, 2017. After installing or upgrading to this release, Magento will display the Domestic rate for USPS, First-Class Mail Parcel as expected. Previously, the USPS First-Class Mail Parcel option was not available after September 1, 2017 on installations running Magento 2.x.

<!--- 56695 -->

*  You can now successfully complete Paypal checkout with products that have custom options. [GitHub-5938](https://github.com/magento/magento2/issues/5938)

<!--- 62669 -->

*  Third-party payment gateways are now visible from the Admin. [GitHub-7891](https://github.com/magento/magento2/issues/7891)

<!--- 55612 -->

*  Magento no longer displays the **No [Payment method](https://glossary.magento.com/payment-method) available** message when a customer tries to ship items to a billing-restricted country.

<!--- 57923 -->

*  Magento no longer displays the **No [Payment method](https://glossary.magento.com/payment-method) available** message when a customer tries to ship items to a billing-restricted country.

<!--- 69750 -->

*  Magento now successfully completes checkout when a custom address attribute is added. Previously, an error occurred during checkout when the user added a required custom address attribute.

<!--- 66959 -->

*  Removed a duplicate method call to the `getLinkField` method in the `Magento\Catalog\Model\ResourceModel\Category` class. *Fixed by will-b in pull request [9057](https://github.com/magento/magento2/pull/9057){:target="_blank"}.*

<!--- 54412 -->

*  During order creation, you can now continue with a payment after clicking the **Back** button to the payment selection window. [GitHub-4580](https://github.com/magento/magento2/issues/4580)

<!--- 64413 -->

*  The expiration year validator now works as expected. [GitHub-8482](https://github.com/magento/magento2/issues/8482)

*  We've introduced the `Magento\Vault\Block\TokenRendererInterface::getToken` method. This method provides details about payment tokens to renderer components, such as public hash and available card or account details. Third-party developers can use this method to implement this functionality in their payment integrations.

<!--- 56345 -->

*  Error messages associated with the `Authorize.net` payment method are now translated to fit the configured locale. [GitHub-5934](https://github.com/magento/magento2/issues/5934)

<!--- 58722 -->

*  We’ve increased the size of the `shipping_method` column in the `sales_order` and `quote_address` tables. [GitHub-6475](https://github.com/magento/magento2/issues/6475)

<!---56347  -->

*  We’ve fixed an issue with the REST API that previously resulted in the PayPal gateway rejecting requests. [GitHub-10410](https://github.com/magento/magento2/issues/10410)

#### Braintree

<!--- 55530  -->

*  You can now place orders from the Admin using the Braintree payment method.

<!---59578 -->

*  We've enhanced our PayPal and Braintree implementations so that merchants can now:

   *  Save customer PayPal account information in the Braintree Vault when using Braintree as a service. This enhancement provides a secure method for charging my customers without prompting them to enter a payment information for multiple purchases or for purchases from multiple devices. We've also added support for Maestro and Discover BINs added to the credit card form both for Braintree and PayPal solutions.

   *  Configure dynamic descriptors (Company Name, Phone and URL) for Braintree.  This enhancement supports customers easily identifying a source of transactions in their bank statements. (This will potential simplify the resolution of disputed transactions by supporting the display of the Kount status for Braintree in the Admin interface.)

<!--- 56940 -->

*  Kount and 3D Secure now work as expected for Braintree Vault.

<!--- 62428 -->

*  Magento now updates you as expected on order comments and order history after you initiate a refund using Braintree. Previously, when you clicked the **Refund** button (to initiate a refund), Magento did not redirect you to order comments and history information.

<!--- 54721 -->

*  You can now use Braintree as a payment method when applying reward points or store credit to an order.

<!---56910 -->

*  The Braintree payment method now works as expected with Vault table prefixing.

<!---57426 -->

*  Magento no longer encounters an error when using the Braintree Vault payment GET order API call. [GitHub-6215](https://github.com/magento/magento2/issues/6215)

<!---59353 -->

*  You can now use JCB and Diners Club credit cards with the Authorize.net payment method.

<!--- 59124 -->

*  Fixed issue with credit card capture information failing to remain associated with its first authorization. [GitHub-6716](https://github.com/magento/magento2/issues/6716)

<!---57086 -->

*  You can now successfully place orders with Braintree when using an alternative [merchant account](https://glossary.magento.com/merchant-account) ID. (The merchant account does not need to match the 3D Secure authorization merchant account.) [GitHub-5910](https://github.com/magento/magento2/issues/5910)

<!---59637 -->

*  Braintree no longer encounters an error during checkout when you apply a 100% discount coupon to a product and enable free shipping. Previously, Magento  displayed a spinning loader widget, and your screen froze. The Developer console displayed this error: `Uncaught Error: [paypal-container] is not a valid DOM Element`.

<!--- 56344 -->

*  The Braintree payment method now works as expected with Vault table prefixing.

<!--- 71371 -->

*  Merchants can now accept payment on a Suspected Fraud order without Magento altering the amount in Total Paid. Previously, when a merchant accepted payment for an order with a status of Suspected Fraud, Magento doubled the payment amount.

<!--- 59573 -->

*  Braintree no longer encounters an error during checkout when you apply a 100% discount coupon to a product and enable free shipping. Previously, Magento displayed a spinning loader widget, and your screen froze. The Developer console displayed this error: `Uncaught Error: [paypal-container] is not a valid DOM Element`.

<!--- 69340 -->

*  The Braintree PayPal locale now has its own setting. [GitHub-9639](https://github.com/magento/magento2/issues/9639)

<!--- 63460  -->

*  You can now modify the product quantities  of a previous order and re-order it using the saved credit card information from the first order.

#### PayPal

<!--- 59581 -->

*  We've improved and streamlined the [Magento Admin](https://glossary.magento.com/magento-admin) PayPal configuration interface.

<!--- 58376 -->

*  PayPal Payflow Pro now uses the currency you've specified in your store settings. Previously, Magento converted the total price into U.S. dollars, no matter which currency was specified in the store settings.

<!--- 59036 -->

*  We've fixed an issue with using PayPal Express Checkout to order products with custom options. Previously, although an Admin user could create and configure “File type” custom options, customers could not upload and store files within the order [quote](https://glossary.magento.com/quote). [GitHub-5434](https://github.com/magento/magento2/issues/5434)

<!--- 70500 -->

*  Fixed issue related to incorrect stock quantity calculation for bundle and configurable products during place order flow with PayPal Express Checkout.

<!--- 62667 -->

*  Third-party payment gateways are now visible from the Admin. [GitHub-7891](https://github.com/magento/magento2/issues/7891)

<!--- 59086 -->

*  Fixed issue with credit card capture information failing to remain associated with its first authorization. [GitHub-6716](https://github.com/magento/magento2/issues/6716)

<!--- 58676 -->

*  PayPal Express payments no longer fail when there is adequate product inventory to cover your order. Previously, you'd receive this error message: `We can't place the order`. [GitHub-6296](https://github.com/magento/magento2/issues/6296)

<!--- 71307 -->

*  Paypal errors no longer occur when Fixed Product Tax (FPT) is enabled. Previously, when a product had a FPT, Paypal Express reported an error when you tried to place the order.

<!--- 58162 -->

*  PayPal Payflow Pro now uses the currency you've specified in your store settings. Previously, Magento converted the total price into U.S. dollars, no matter which currency was specified in the store settings.

<!--- 63551 -->

*  When refunding an order from PayPal, Magento now creates a credit memo  with the correct status.

<!---   -->

*  The exported sheet now generates or renders data for columns that indicate associations for configurable products.

<!--- 68833  -->

*  We’ve fixed errors in processing valid orders using a PayPal account that had been previously used to pay for a valid order that had problems during checkout.

<!---60589 -->

*  We’ve resolved a loader issue with Payflow Pro. The loader image is now invisible after redirecting to the payment page/success page or error page. [GitHub-7159](https://github.com/magento/magento2/issues/7159),  [GitHub-9296](https://github.com/magento/magento2/issues/9296)

<!---64833 -->

*  PayPal Express checkout no longer discards address line 2 for billing and shipping addresses. [GitHub-8313](https://github.com/magento/magento2/issues/8313)

<!---60572 -->

*  The checkout page no longer freezes when you try to use PayPal to pay for a purchase that contains a downloadable product. Previously, a `PayPal.js` error occurred. [GitHub-7000](https://github.com/magento/magento2/issues/7000)

### Performance

This release includes substantial improvements to Magento caching, image processing, and re-indexing, among other enhancements.

<!--- 52660  -->

*  We've improved the speed of static asset deployment and now support a variety of asset deployment strategies that can be used to optimize speed and size of assets deployed. Indexers can now be run with 256M of PHP RAM and default MySQL configuration settings.  Developers can further tune memory usage to improve indexer performance (in some cases up to 100% improvement).  Please see [Magento Optimization Guide]({{ page.baseurl }}/config-guide/prod/prod_perf-optimize.html)  for further details.

<!--- 55300, 55620, 54682 -->

*  We've improved [storefront](https://glossary.magento.com/storefront) performance when creating 2500 or more product variants.

<!--- 58277  -->

*  The processing speed of category URL rewrites for catalogs containing more than 20,000 products has greatly improved.

<!---56927 -->

*  Opening many products from the Admin interface is now faster.

<!---59708 -->

*  Creating many (2500 - 5000) product variants, both simple and complex [product types](https://glossary.magento.com/product-types) is more efficient.

<!--- 57410 -->

*  You can now quickly generate or preview multiple variations of a [configurable product](https://glossary.magento.com/configurable-product). (Saving these variations to the database can be time-consuming, if you have several thousand product options, and our efforts to improve performance continue.) Previously, Magento threw an Invalid Form key error is thrown while you tried to save a configurable product with variations.

<!--- 65483  -->

*  Magento no longer performs unnecessary file check operations (for example, `file_exists`, `is_file`), which improves the performance of the category and product pages.

<!---57905 -->

*  We've optimized compiler performance (that is, the [`setup:di:compile`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html) command).

<!--- 66855 -->

*  We’ve improved the performance of the Display Time for Category Edit page for catalogs with many products or categories.  [GitHub-7469](https://github.com/magento/magento2/issues/7469)

#### Image processing

<!---60041 -->

*  We've improved the process of resizing images on the [frontend](https://glossary.magento.com/frontend).

<!--- 59806  -->

*  The process of loading many configurable products with multiple images (for example, configurable products with three attributes and 250 options) is more efficient. [(GITHUB-6979)](https://github.com/magento/magento2/issues/6979){:target="_blank"}

#### Caching

<!--- 65480  -->

*  Magento now caches image metadata, which avoids the time-consuming need to read images for [metadata](https://glossary.magento.com/metadata) loading.

<!--- 65484  -->

*  Magento now caches attribute options for the layered navigation feature. This reduces the number of queries to the database, and consequently improves performance.

<!--- 62691  -->

*  We’ve optimized and streamlined how we cache EAV attributes by removing unnecessary SQL queries.

### PHP

<!--- 69964  -->

*  PHPCS can now correctly parse the syntax of PHP 7.x return types.

<!--- 45339  -->

*  Cart Price rules are now applied as expected to [payment method](https://glossary.magento.com/payment-method) conditions. Previously, discounts set in Cart Price rules were not applied during [checkout](https://glossary.magento.com/checkout).

### Sample data

<!--- 67020  -->

*  Magento now handles the `catalog_product_entity_media_gallery_value.position` value the same whether you’ve installed or upgraded the product. Previously, these values differed depending upon whether you upgraded or freshly installed your Magento code.

<!--- 70299  -->

*  You can now successfully install Magento with sample data when **auto_increment_increment** is set to **3** in the `options` file. Previously, installation completed successfully, but Magento displayed this error: `Something went wrong while installing sample data. Please check var/log/system.log for details. You can retry installing the data now or just start using Magento.`

### SalesRule

<!--- 55184  -->

*  You can now select and add a category to a Cart Price rule. Previously, Magento displayed this error: "Uncaught ReferenceError: sales_rule_form is not defined", and did not add the selected category to the condition.  [GitHub-5526](https://github.com/magento/magento2/issues/5526)

<!--- 55433  -->

*  A cart rule with a coupon code no longer overrides a cart rule without a coupon code when multiple [cart rules](https://glossary.magento.com/cart-rules) are applied. Previously, when you created two cart rules and applied them to a cart, the rule with a coupon was applied, but the second rule was not. [GitHub-6294](https://github.com/magento/magento2/issues/6294)

<!--- 67089  -->

*  The SalesRule table  is the same whether you’ve freshly installed or updated Magento 2.2.

<!--- 62405  -->

*  Magento no longer discounts items that belong to an excluded category. Previously, you were unable to exclude products assigned to a specific category due to the cart price rule.

<!--- 58677  -->

*  The Cart Price rule now affects coupon life as expected. Previously, coupons did not persist longer than the current date if they did not have a designated end-date.

<!--- 60756  -->

*  Customers can no longer apply a coupon code twice. Previously, the "Uses per Coupon" limit did not work for auto-generated coupons.

<!--- 58334  -->

*  Magento now implements free shipping  if there is a Cart Price Rule match. [GitHub-6584](https://github.com/magento/magento2/issues/6584)

<!--- 63403  -->

*  SalesRule now applies to auto-generated coupon codes as expected.

<!--- 59047  -->

*  You can now create a cart price rule  without any date range restrictions. Previously, if you left the **From** and **To** dates empty, Magento filled them in with the current date. [GitHub-6762](https://github.com/magento/magento2/issues/6762), [GitHub-6122](https://github.com/magento/magento2/issues/6122)

<!--- 59089  -->

*  When you change the currency associated with store, Magento also adjusts the currency in all product listings. [GitHub-6746](https://github.com/magento/magento2/issues/6746)

<!--- 56871  -->

*  Non-administrative users with access rights to Products, Marketing, Promotions, and Cart Price rules can now search for categories in Cart Price rules. GitHub-6168](https://github.com/magento/magento2/issues/6168)

<!--- 56871  -->

*  Non-administrative users with access rights to Products, Marketing, Promotions, and Cart Price rules can now search for categories in Cart Price rules. GitHub-6168](https://github.com/magento/magento2/issues/6168)

### Scope

<!---54704 -->

*  Changing a product price under the website scope now updates the product price across all stores. Previously, any price you set on the [store view](https://glossary.magento.com/store-view) level overrode the price set in website scope. [GitHub-5133](https://github.com/magento/magento2/issues/5133)

<!---56936  -->

*  The list of allowed countries is now configured as part of website scope, not store view scope. [GitHub-2946](https://github.com/magento/magento2/issues/2946)

<!---57001, 54460 -->

*  A restricted user can now change storeview- or website- level attributes that are defined within his scope.

<!---59284, 59282 -->

*  You can now select the scope for an action that you are running from the Catalog page's product table.

<!---59953 -->

*  The price you set on the website scope no longer overrides any local settings you set on configurable products at the store view level.

<!---54458, 57003 -->

*  The Product page scope selector now displays all related websites associated with a restricted user.

### Search

<!---59088 -->

*  Out-of-stock items no longer erroneously appear in results of layered navigation if that product option is out-of-stock.

<!---52905 -->

*  Magento now factors in the Weight attribute as expected when you use advanced search on grouped products.

<!--- 71562  -->

*  The Elasticsearch indexer search-by-attribute functionality now works as expected.

<!--- 57868  -->

*  Elasticsearch does not throw errors when there are more than 100 searchable attributes or when user-defined price attributes are marked searchable.

<!---63249  -->

*  ElasticSearch now includes data about composite products in its search index. Previously, search results did not include this data.

<!---65245  -->

*  Magento now sends the `parent_id` of a deleted configurable product variation to ElasticSearch. Previously, Magento didn’t send this information to the ElasticSearch server if the simple product associated with a configurable product were changed.

<!---56356  -->

*  Segmentation faults no longer occur when doing a `catalogsearch_fulltext` re-index, and indexing succeeds. Previously, in a large database (more than 70,000 products), the `catalogsearch_fulltext` (MySQL) re-index failed with a `Segmentation fault` message. [GitHub-7963](https://github.com/magento/magento2/issues/7963)

<!---58964  -->

*  Magento now implements the Attribute Weight Boosting Function for Elasticsearch.

<!---64367  -->

*  Magento now handles special characters in an Elasticsearch request as expected. Previously, Magento displayed a MySQL syntax error in search requests that contained special characters. [GitHub-8335](https://github.com/magento/magento2/issues/8335)

<!---59477  -->

*  Attribute weighting now works correctly for the MySQL adapter. [GitHub-9020](https://github.com/magento/magento2/issues/9020)

<!---56097  -->

*  Magento no longer throws an indexing error when Elastic search is enabled.

### Shipping

<!---57037 -->

*  UPS now generates shipping rates for Puerto Rico postal codes.

<!--- 71749  -->

*  Magento now displays tracking information when selected for the second shipping label created for the DHL shipping method. Previously, when you tried to display a completed DHL shipping label, Magento displayed an exception.

<!--- 58062 -->

*  Refreshing your browser page while on the Review and Payments page of the checkout process no longer clears information from form fields. Previously, Magento cleared information from the **Ship to** field if you refreshed your browser page during this process.

<!--- 57992 -->

*  You can now reload a page during [checkout](https://glossary.magento.com/checkout) without unintentionally changing shipping information.

<!--- 70646 -->

*  You can now save the settings you enter when creating a shipping label on an existing shipment. Previously, clicking the **Save** button resulted in an error, and the shipping label was not saved.

<!--- 67053  -->

*  Added missing translation to label `argument xml`.  *Fix submitted by community member Mr Khoa in pull request [9095](https://github.com/magento/magento2/pull/9095){:target="_blank"}.*

<!--- 64909 -->

*  Magento no longer throws a fatal error when you create a new shipment for a placed order.

<!--- 62276 -->

*  The State/Province field now changes to an input field as expected after you select United Kingdom when filling out the shipping address during checkout

<!--- 58664 -->

*  The Free Shipping rule now works as expected with table rate shipping.[GitHub-6346](https://github.com/magento/magento2/issues/6346)

<!--- 62662 -->

*  Magento now passes the correct object to the  `\Magento\Shipping\Model\Shipping::collectRatesByAddress` method. [GitHub-7309](https://github.com/magento/magento2/issues/7309)

<!--- 60523 -->

*  Magento now displays the checkout page or cart as expected when you try to edit a virtual item from the multi shipping page. Previously, Magento displayed a 404 error page instead of redirecting to the checkout page or shopping cart. [GitHub-7257](https://github.com/magento/magento2/issues/7257)

<!--- 58730 -->

*  Magento now displays UPS rates on the initial load of the checkout page. Previously, although shipping rates showed up properly at the cart level, the payment page did not load the correct shipping options. [GitHub-6564](https://github.com/magento/magento2/issues/6564)

<!--- 59149 -->

*  We've resolved an issue where Magento did not display applicable flat-rate USPS box methods during checkout. [GitHub-6798](https://github.com/magento/magento2/issues/6798)

<!--- 58664 -->

*  The Free Shipping rule now works as expected with table rate shipping. [GitHub-6346](https://github.com/magento/magento2/issues/6346)

### Sitemap

<!--- 60523 -->

*  Sitemap image URLs now match the URLs on product pages. *Fix submitted by community member Petar Sambolek in pull request [9082](https://github.com/magento/magento2/pull/9082){:target="_blank"}.*

<!--- 70056 -->

*  The sitemap is no longer generated in the wrong folder when `vhost` is connected to `/pub`. *Fix submitted by community member Joseph Maxwell in pull request [9094](https://github.com/magento/magento2/pull/9094){:target="_blank"}.*

### Staging

<!---57346, 53078 -->

*  The [CMS](https://glossary.magento.com/cms) page now refreshes as expected after an update.

<!---71215 -->

*  Magento no longer creates extraneous database values when you schedule new Staging updates.

<!--- 65481  -->

*  Magento no longer performs unnecessary staging-related flag operations on the Category page. Previously, Magento performed staging-related flag operations even when the Staging [module](https://glossary.magento.com/module) was not used.

<!--- 55524/48429 -->

*  You can now delete updates from a campaign's page [entity](https://glossary.magento.com/entity) grid.

<!--- 71708 -->

*  You can now create a staging update for a product that contains a unique attribute in its attribute set. Previously, under these conditions, Magento displayed this error: `The value of attribute "test" must be unique’`.

<!---71373  -->

*  You can now install Magento Commerce without staging modules.

<!---56065, 59851 -->

*  The Magento flat indexer no longer throws an error after flat tables are enabled and reindexed. This fix applies to both product and [catalog](https://glossary.magento.com/catalog) tables. It also now collects correct product data for `ROW_ID`

<!--- 68998, 61425 -->

*  The staging dashboard now loads without error when you sort by status on the dashboard. Previously, the staging dashboard broke and remained in an infinite loop when you attempted to sort by status on the dashboard.

<!--- 70671 -->

*  You can now preview an update from the dashboard and click on links and see how the entire instance would look like for a store between some dates. Previously, the links from the Preview page were broken.

<!--- 70656 -->

*  Magento now displays the correct content on the preview page for a scheduled update.

<!--- 70922 -->

*  Magento now applies all scheduled product changes to all scopes.

<!--- 60556 -->

*  The view/edit option for a scheduled change is now available for the duration that the scheduled change is in progress. Previously, you could not view or edit a scheduled change when it was in progress, which left no way to edit or remove it.

<!--- 60677 -->

*  You can now create a new scheduled update for a product. Previously. when you tried to create an update, Magento displayed this error: `Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.`

<!--- 55867  -->

*  Magento now displays the correct date and time for staging updates. Previously, when your current time in Daylight Saving time, and your target time was in Standard time, your target time was incorrect.

<!--- 65540 -->

*  Magento now correctly assigns images to duplicated products.

<!--- 58651 -->

*  Scheduled Update no longer removes simple variations from Configurable products. Previously, if you set up a scheduled update to toggle the **New** setting on a configurable product, Magento removes all simple variations from the configurable product once the update takes effect.

<!--- 63159  -->

*  Content staging values for fields are now saved in database.

<!--- 64461  -->

*  When you import products  that exist in the CSV file, but not on the store (including categories), Magento now populates the categories as expected.

<!--- 67754  -->

*  Magento no longer deletes images associated with categories scheduled for update after you modify the image.

<!--- 59687  -->

*  Once the time frame for the scheduled update has passed, Magento removes the special price and displays the original price.

<!--- 54512  -->

*  You can now remove a product or category from a campaign.

<!--- 65657  -->

*  You can now preview a scheduled update for a category that contains a recently viewed block.

<!---60534 -->

*  We’ve resolved a scheduling issue that previously resulted in Magento displaying a 404 error on most frontend pages. This occurred if you deleted a Catalog Rule with an end date, then ran an update.

<!---62646 -->

*  You can now save simple products created in 2.0.x environments after upgrading to environments running Magento 2.1.x. Previously, you could not successfully save the opened product after upgrading.

### Static file processing

<!---60603 -->

*  We've corrected a problem with `_requirejs` asset retrieval via `static.php` in [static content](https://glossary.magento.com/static-content) versioning.

<!---56914 -->

*  Versioning of [static files](https://glossary.magento.com/static-files) (including CSS, JS, font, and image files) is now enabled by default.

<!---57904 -->

*  We've improved the speed of static asset deployment. See [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html){:target="_blank"} for more information about available options.

<!--- 52614  -->

*  The `setup:static-content:deploy` command now provides flags that you can use to exclude or include individual themes, areas, and locales. For more information, see [GitHub-4294](https://github.com/magento/magento2/issues/4294).

### Swatches

<!--- 65404  -->

*  Magento no longer creates redundant objects when initializing a configurable product on the Category page.

<!--- 65403  -->

*  You can now disable swatches for both the [Catalog](https://glossary.magento.com/catalog) page and search results (quick or advanced). To disable swatches from these requests, disable **Stores > Settings > Configuration > Catalog > Storefront > Show Swatches in Product List**.

<!--- 65402  -->

*  We've optimized the logic that Magento uses to validate swatch attributes.

<!--- 65248  -->

*  Magento now caches swatch data in the block cache, which improves the responsiveness of the configurable product pages.

<!--- 60045  -->

*  Magento now correctly matches images to products. Previously, after you selected a configurable product, Magento displayed the images for another product.

<!--- 66417  -->

*  Magento no longer displays a notice error when you create a text swatch attribute while the **update product preview image** setting  is set to **Yes**. *Fix submitted by community member Pascal Brouwers in pull request [6707](https://github.com/magento/magento2/pull/6707){:target="_blank"}.*

### TargetRule

<!--- 59689  -->

*  Magento now displays Up-sells on the Product page.

<!--- 70853  -->

*  We’ve fixed an SQL error that previously caused a logical error during the creation of a TargetRule. (This issue affected the `modifyConditionByCategoryIdsAttribute` function.)

### Tax

<!--- 61120  -->

*  Magento now correctly calculates tax and order totals when a discount is used for prices that include tax and catalog prices excluding tax. Please note this is not a valid tax configuration and can introduce rounding errors.

<!--- 59801  -->

*  We’ve improved the performance of the Tax Rules form in installations containing many tax rates.

<!--- 70641  -->

*  You can now create a tax rule when running Magento in Mozilla Firefox and Internet Explorer. Previously, you could not select a tax rate, and Magento displayed an error.

<!--- 59514  -->

*  The `tax_region_id` value is no longer hard-coded in the `\Magento\Tax\Setup\InstallData` file.

### Testing

<!--- 62388 -->

*  We've fixed a fatal issue that occurred if you executed the CatalogImportExport test before running a subsequent test. Previously, you'd receive this error: ```Failed asserting that false is true```.

<!--- 59680 -->

*  We've fixed a fatal issue that occurred if you ran Travis builds on `imagettfbbox 2.1.2`. Previously, you'd receive this error:

   ```terminal
   PHP Fatal error: Call to undefined function Magento\Framework\Image\Adapter\imagettfbbox() in /home/travis/build/magento/magento2/lib/internal/Magento/Framework/Image/Adapter/Gd2.php
   ```

<!--- 64462 -->

*  `StdoTest` is now marked as skipped. *Fix submitted by community member David Manners in pull request [8487](https://github.com/magento/magento2/pull/8487){:target="_blank"}.*

### Tier pricing

<!---70377 -->

*  Magento now correctly calculates the tier price percentage when displayed prices include tax. [GitHub-8833](https://github.com/magento/magento2/issues/8833)

<!---57625 -->

*  Magento no longer resets the tier price during [quote](https://glossary.magento.com/quote) recalculation. Previously, when you triggered an automatic quote recalculation (by changing the shipping address, for example), the tier price was lost. (This issue occurred only if the product record in the database had values for `row_id` and `entity_id` that didn't match.)

<!---56922 -->

*  Magento no longer adds a thousands separator ( , ) to representations of quantities that exceed 1000. [GitHub-5745](https://github.com/magento/magento2/issues/5745)

<!---55055 -->

*  Tier pricing now works correctly with full page cache. [GitHub-5364](https://github.com/magento/magento2/issues/5364)

### Translation and locales

<!---67296 -->

*  String localizations now work as expected when phrases include text wrapped with single quotation marks.

<!---69728 -->

*  Translations now work for layered navigation attribute options. *Fix submitted by community member Pieter Hoste in pull request [9873](https://github.com/magento/magento2/pull/9873){:target="_blank"}.*

### URL rewrites

<!---66480 -->

*  You can now successfully create a product and assign it to a store without encountering the following error: `Unique constraint violation found`. [GitHub-6671](https://github.com/magento/magento2/issues/6671)

<!---67315, 67299  -->

*  The `catalog_url_rewrite_product_category` table is the same whether you’ve freshly installed or updated Magento 2.2.

<!---70663 -->

*  You can now assign products to a category when **Match Products by rule** is enabled.

<!---61549 -->

*  The **Use default URL Key** setting now works on the store-view level.

<!---58796 -->

*  You no longer need to delete the URL rewrite to force Magento to display links after adding pages to the CMS hierarchy. Previously, when you added new pages to the CMS hierarchy, Magento did not show the links to the new pages until you deleted the URL rewrites.

<!---70255  -->

*  We've fixed several issues with how Magento processes URLs with trailing slashes. *Fix submitted by community member Ihor Sviziev in pull request [10043](https://github.com/magento/magento2/pull/10043){:target="_blank"}.*

<!---60037  -->

*  Admin users can no longer create an empty URL key for a category. Previously, Magento let Admin users create an empty URL key, which lead to category-related errors.

<!---56862  -->

*  Magento now rewrites URLs as expected when you save a product while running Magento in single-store mode. [GitHub-5929](https://github.com/magento/magento2/issues/5929)

<!---56863  -->

*  Magento now rewrites URLs as expected when you save a CMS page while running Magento in single-store mode. [GitHub-5923](https://github.com/magento/magento2/issues/5923)

<!---64295  -->

*  URL rewrites are now correctly generated for multiple store views during product import.  [GitHub-8396](https://github.com/magento/magento2/issues/8396)

<!---56863  -->

*  Magento now rewrites URLs as expected when you save a CMS page while running Magento in single-store mode. [GitHub-5923](https://github.com/magento/magento2/issues/5923)

### Varnish

<!---58362 -->

*  We've changed the behavior of the Varnish X-header. Only the parent (meta) SKU is now included in the list -- not the SKUs of all child products. [GitHub-6401](https://github.com/magento/magento2/issues/6401)

<!--- 69372 -->

*  Varnish no longer caches Cookie Restriction Mode Overlay. *Fix submitted by community member Bernhard in pull request 9711.*

*  Varnish now supports `grace` and `saint` mode to ensure that customers always see cached pages.

<!--- 52923 -->

*  Viewing the page with HTTPS instead of HTTP no longer causes the Category menu to disappear in installations using Varnish cache.  [GitHub-4540](https://github.com/magento/magento2/issues/4540)

### Visual Merchandiser

<!---58465, 56775 -->

*  The order of products in a category display no longer changes when you add a new product to the category.

<!---54491 -->

*  Visual Merchandiser `Match products by rule` now works as expected.

### Web API

<!---61018 -->

*  You can now use REST to add video to a product description. [GitHub-7153](https://github.com/magento/magento2/issues/7153)

<!---57039 -->

*  The `PUT /V1/products/:sku/media/:entryId` correctly updates a product's media gallery and image role.

<!---64047 -->

*  A null value may now be specified to unset the `special_price` attribute.

<!---52340  -->

*  The Swagger documentation erroneously indicated that search queries can return detailed information about multiple objects. The description of these APIs now state which API to use to return detailed information about a single object.

<!--- 59871 -->

*  You can now use REST to successfully update customer information without unintentionally deleting default billing and shipping address information.

<!--- 70743 -->

*  You can now use a REST request to retrieve a shopping cart that contained a product with custom options. Previously, you could not use a REST request to retrieve a shopping cart that contained a product with custom options.

<!--- 60908 -->

*  The `PUT /V1/products/:sku/media/:entryId` correctly updates a product's media gallery and image role.

<!---63667  -->

*  Searching for products via REST API using a store code in the URL returns products from all stores. [GitHub-8121](https://github.com/magento/magento2/issues/8121)

<!---58348  -->

*  You can now use the REST API to create a configurable product with a linked child product. [(GITHUB-5243)](https://github.com/magento/magento2/issues/5243){:target="_blank"}

<!---58338  -->

*  The REST API now successfully handles attribute options that start with a number. [GitHub-5715](https://github.com/magento/magento2/issues/5715)

<!---56347  -->

*  We’ve fixed an issue with the REST API that previously resulted in the PayPal gateway rejecting requests. [GitHub-10410](https://github.com/magento/magento2/issues/10410)

<!---58269  -->

*  You can now save a billing address using the REST  ’useForShipping' parameter. Previously use of the parameter resulted in a Rest API V1 error. [GitHub-6557](https://github.com/magento/magento2/issues/6557), [GitHub-5180](https://github.com/magento/magento2/issues/5180)

<!---58609  -->

*  We’ve resolved issues updating `default_frontend_label` using REST. [GitHub-5963](https://github.com/magento/magento2/issues/5963)

<!---58652  -->

*  Magento now sends REST multiselect attribute values in compatible formats. Previously, putting an unchanged GET returned errors on the multiselect attribute, and the only way to clear a multi-select field of all selections was to delete the product and re-create it. [GitHub-6120](https://github.com/magento/magento2/issues/6120)

<!---58338  -->

*  The REST API now successfully handles attribute options that start with a number. [GitHub-5715](https://github.com/magento/magento2/issues/5715)

## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of  top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)

### Installation and upgrade instructions

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){:target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){:target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){:target="_blank"}.

The [Code Migration Toolkit](https://github.com/magento/code-migration){:target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
