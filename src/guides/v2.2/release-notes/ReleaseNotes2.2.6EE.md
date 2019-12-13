---
group: release-notes
title: Magento Commerce 2.2.6 Release Notes

---

*Patch code and release notes were published on September 18, 2018 and last revised October 29, 2018.*

We are pleased to present Magento Commerce 2.2.6. This release includes 25 critical enhancements to product security, over 150 core code fixes and enhancements, and over 350 community-submitted pull requests.

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.6-and-2.1.15-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.6) have been ported to 2.1.15, 1.14.3.10, and 1.9.3.10, as appropriate.

## Highlights

In addition to 25 critical security fixes, look for the following highlights in this release:

### Core code highlights

This release includes significant performance improvements to the core Magento code:

#### **Substantial improvements to performance**

Performance-tuning enhancements focus on catalog indexing and include:

<!-- MAGETWO-87430  -->

*  Category product indexer logic has been optimized, and re-indexing time has decreased up to 98%, from 40 minutes to one minute for 100,000 categories.  Previously, when your store contained many categories (100,0000), Magento could take up to 40 minutes to re-index product catalogs.

<!-- MAGETWO-91164  -->

*  The `catalog:image:resize` command execution time has been reduced by up to 90% in the release. However, this improvement necessitates these additional steps after upgrading your Magento instance to 2.2.6:

   *  Remove   `pub/media/catalog/product/cache` . (Removing this folder frees up space.)

   *  Run `bin/magento catalog:image:resize`  to generate a new image cache.  (This step is necessary because we’ve changed the path to cached images and must remove the previously cached images.)

<!-- MAGETWO-47320  -->

*  The catalog rule re-indexing operation has been optimized, and the average re-indexing time (which depends on rule conditions) has improved by more than  80%.  Previously, a full catalog rule re-index operation on a medium B2C store took more than 20 minutes.

<!-- MAGETWO-92447  -->

*  The catalog price indexer is now scoped and multithreaded, which improves the performance of layered navigation, search, and indexing actions for Magento instances with multiple websites and stores. This makes it possible to parallelize catalog price indexing by websites and customer groups. To re-index in parallel mode, add the `MAGE_INDEXER_THREADS_COUNT` environment variable to `env.php`.

<!-- MAGETWO-90572  -->

*  The time required to load category or product pages for products that are configured with many attributes (more than 500) has been significantly reduced. Refactoring the logic for product attribute retrieval has resulted in a reduction of load time of almost 90% for scenarios with a large number of product attribute sets. (Performance will not noticeably improve for deployments with only one attribute set configured with 500 attributes. However, deployments with many attribute sets that contain only a few attributes will show significant performance improvement. For example, a deployment with 100 attribute sets, each of which contains 50 attributes, might see a 40-90% reduction in load time.)

<!-- MAGETWO-88670  -->

*  The time required to load a store’s home page has been reduced noticeably when the top menu contains many categories.  (Load time is still affected by the number of categories and the structure of the top menu.)

<!-- MAGETWO-86143  -->

*  Merchants can now improve store performance by disabling Magento Report functionality. A new configuration setting  (**System Configuration:** **General** > **Reports** > **General Options**) allows merchants to disable Magento Reports, which is recommended practice  if a merchant's business function does not require this capability.

#### **Improvements to the reliability and ease of the checkout process**

<!-- MAGETWO-86490  -->

*  A shopping cart’s contents remain constant even when the checkout page is repeatedly reloaded. Previously, if a customer reloaded the checkout page several times, Magento emptied the shopping cart, and the customer could not place the order. (This problem primarily affected stores running on HTTPS.)

<!-- MAGETWO-90053 -->

*  Refreshing the checkout page no longer deletes the shipping address when a guest checks out. Previously, when the persistent shopping cart was enabled, refreshing the checkout page affected information entered into form fields for a guest checkout.

<!-- MAGETWO-89222 -->

*  The speed at which Magento places an order is no longer affected by how many shipping methods are available. Previously, when a customer placed an order for which multiple shipping methods were available, Magento took more than 20 seconds to place the order.

#### **Additional enhancements**

<!-- MAGETWO-86125 -->

*  Configurable products are now sorted by visible prices as expected. Previously, sorting a catalog by price produced  sort results that included the prices of out-of-stock products and disabled child products.

<!-- MAGETWO-91411  -->

*  Magento no longer sends duplicate delete requests as a result of an unstable Internet connection. Previously, unintentional mass deletion of products sometimes occurred as a result of an unstable Internet connection.

### **Magento Cloud highlights**

*  We've added a [Docker Compose]({{ site.baseurl }}/cloud/docker/docker-config.html) configuration to the Cloud `ece-tools` repository for deploying a local development environment.

*  Merchants can now [change store locales]({{ site.baseurl }}/cloud/live/sens-data-over.html#change-locales) without the exporting and importing configuration process.

*  A new [workflow]({{ site.baseurl }}/cloud/trouble/robots-sitemap.html) lets merchant add a `robots.txt` file and generate a `sitemap.xml` file for a single domain configuration without requiring a change to the infrastructure.

*  Merchants can now define multiple locales for each theme using the new [`SCD_MATRIX`]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_matrix) environment variable, which reduces the amount of theme files to deploy.

*  Zero-downtime deployment has been implemented through a “connection holding” capability, which ensures no lost connections or site unavailability, providing smooth shopper experience even during deployments involving database schema changes.

*  We've fixed an issue that caused downtime between the deploy and post-deploy phase. Now, the `post_deploy` phase begins immediately after the deploy phase ends.

### **Community contribution highlights**

Highlights of community contributions include fixes that improve checkout flow and the sorting of simple products:

*  Customers can now successfully complete an order when it contains a  configurable product with an option that is deleted after the product has been placed in the shopping cart. Previously, the shopping cart could not load the shopping cart after the configurable option was deleted.  Thanks to community member jonshipman! [GitHub-15467](https://github.com/magento/magento2/issues/15467)

*  Magento now maintains the default sort order for products (“newest first”) when you upgrade your Magento deployment. Previously, after upgrade, the default product order in categories changed from “newest first” to “oldest first”.  Thanks to community member Danny Verkade! [GitHub-15627](https://github.com/magento/magento2/issues/15627)

*  Merchants can now successfully change the applied theme setting for a store view (**Content** > **Design** > **Configuration**).  Thanks to community member Daniel Ruf! [GitHub-14968](https://github.com/magento/magento2/issues/14968)

*  Magento loads pages faster because it no longer redundantly calculates product taxes when loading category pages. Thanks to community member JeroenVanLeusden! [GitHub-14941](https://github.com/magento/magento2/issues/14941)

### **Core bundled extension highlights**

This release includes many enhancements to our core bundled extensions:

#### Amazon Pay

Enhancements to Amazon Pay include these features:

*  Implementation of the  [Magento payment provider gateway]({{ page.baseurl }}/payments-integrations/payment-gateway/payment-gateway-intro.html), which provides developers a mechanism for integrating stores with payment providers.

*  Improved handling of virtual products.

*  New entry in the Admin that allows  Amazon Pay to be displayed in the list of payment options.

*  Combined `Synchronous, if possible` and `Asynchronous` settings for authorization mode into one setting. Current settings are now `Immediate` (previously `Synchronous`) and `Automatic` (a combination of the previous `Synchronous, if possible` and `Asynchronous`).

#### dotmailer

Enhancements to dotmailer include these new features:

*  You can now request and capture the consent of customers and guests using dotmailer’s new Consent Insight.

*  You can import only those Magento contacts who have opted in (customer subscribers, guest subscribers, and other subscribers).

*  A warning alerts you when you are about to sync non-subscribers into a dotmailer account.

*  Improvements have been made to the retry process that results after a failed attempt to access EDC.

#### Klarna

Enhancements to Klarna include support for these new features:

*  The Klarna Payments section now includes a link to Klarna automated onboarding and account sign in.

*  If an approved order is later identified as fraudulent, Klarna notifies the merchant and requests that they try to stop the order from being delivered. In addition, Klarna attempts to cancel the order automatically by sending notification to the merchant. See [Managing Your Account](https://docs.magento.com/m2/ce/user_guide/payment/klarna-manage.html) for more information.

*  Shipping and discount order lines have been added to order management calls.

*  Klarna now passes shipping details in capture requests.

*  The Klarna API now returns the name and logo URL to use for each payment method instead of hard-coding the payment method names into the module.

For more information on these new features, see [Klarna](https://docs.magento.com/m2/ce/user_guide/payment/klarna.html).

#### Magento Shipping

*  **Batch Processing** provides merchants with the ability to

   *  Specify and modify packages and experiences for orders assigned to a batch

   *  Book shipments for a batch

   *  Print all packing slips and printing labels for the batch

*  New **Shipment Reference**  field associates bookings between a carrier and a customer

#### Magento Social

Magento has removed the  Magento Social  Facebook integration, and no longer supports the extension.

Looking for more information on these new features as well as many others? Check out [Magento Developer Documentation]({{ site.baseurl }}/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).

## Fixes

In addition to security enhancements, this release contains the following functional fixes.

### Installation, setup, and deployment

<!-- ENGCOM-1537  -->

*  You can now use the `app:config:status` command to check whether configuration propagation is up-to-date. (This fix restores this command, which was inadvertently deleted in a previous release.)  *Fix submitted by Pieter Hoste in pull request [15174](https://github.com/magento/magento2/pull/15174)*. [GitHub-14104](https://github.com/magento/magento2/issues/14104)

<!-- MAGETWO-84651  -->

*  The `app:config:dump` command now has an argument that supports dumping only the specified settings that are required to prepare static content on a build system, not all system settings. This new option (`config-types`) makes it possible to dump scopes and themes automatically (which are needed for a build system) while managing system settings manually using `config:set --lock-config`. *Fix submitted by Juan Alonso in pull request [12410](https://github.com/magento/magento2/pull/12410)*. [GitHub-11396](https://github.com/magento/magento2/issues/11396)

<!-- MAGETWO-93192  -->

*  Configuration backend models are now populated as expected with all fieldset data, which makes it possible to access all configured values from a current group. [GitHub-16712](https://github.com/magento/magento2/issues/16712)

<!-- MAGETWO-90860  -->

*  The `magento-deploy-ignore` setting in `composer.json` now works as expected. Previously, files specified in this setting were overwritten during deployment.

<!-- MAGETWO-87120  -->

*  The `timestamp` fields in `oauth_nonce` now include indexes to avoid deadlocks while erasing old records. *Fix submitted by Carlos Lizaga in pull request [13328](https://github.com/magento/magento2/pull/13328)*. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!-- ENGCOM-1972  -->

*  Sorting has been disabled in the  `glob` and `scandir` functions to improve performance. *Fix submitted by Leandro F. L. in pull request [16052](https://github.com/magento/magento2/pull/16052)*.

<!-- ENGCOM-2407  -->

*  The `nginx.config.sample` file no longer includes an option for PHP 5.x. (Magento 2.2.x is not compatible with PHP 5.x.) *Fix submitted by Sean Breeden in pull request [16883](https://github.com/magento/magento2/pull/16883)*.

<!-- ENGCOM-2315  -->

*  Autoloading performance has improved on production environments as a result of the reduction in `file_exists` calls. *Fix submitted by Pieter Hoste in pull request [16435](https://github.com/magento/magento2/pull/16435)*.

<!-- ENGCOM-2029  -->

*  Setting deploy mode to production mode by  using the `--skip-compilation` flag no longer clears generated code in `generated/code/` and `generated/metadata/`. *Fix submitted by platformvaimo in pull request [16211](https://github.com/magento/magento2/pull/16211)*.

<!-- ENGCOM-1673  -->

*  We've made two changes to `Magento/Config` module: `Magento/Config/Test/Unit/Block/System/Config/Form/Field/ImageTest.php::testGetElementHtmlWithValue()` method no longer references a invalid backend model, and  the anonymous function no longer has an unused `$data` in `Magento/Config/Model/Config/Importer.php`. *Fix submitted by Marcel Hauri in pull request [15511](https://github.com/magento/magento2/pull/15511)*.

<!-- ENGCOM-1448  -->

*  The upgrade check implemented during setup now indicates success if the latest version of Magento is already installed. Previously, the message indicated that the latest product version was already installed was presented as error. *Fix submitted by Daniel Ruf in pull request [15012](https://github.com/magento/magento2/pull/15012)*.

<!-- ENGCOM-1431  -->

*  The **Add Block Names to Hints** configuration setting has been renamed to **Add Block Class Type to Hints**. *Fix submitted by Chris Pook in pull request [14939](https://github.com/magento/magento2/pull/14939)*.

<!-- MAGETWO-93758  -->

*  The `cron:run` command now reads `cron/enabled` configuration setting and if this value is set to **1** (the default value), then the `cron:run` command will execute. A value of **0** determines that `cron:run` will not be executed, and prompts Magento to send the customer email indicating that `cron` is disabled.

<!-- MAGETWO-93981 -->

*  New command-line interface (CLI) commands support setting and showing indexer dimension modes:

   *  `bin/magento indexer:set-dimensions-mode`  sets  indexer dimensions mode

   *  `bin/magento indexer:show-dimensions-mode` shows dimensions mode of indexer

### Amazon Pay

<!-- BUNDLE-1453  -->

*  Amazon Pay no longer appears as an option during checkout when a customer selects  **Check Out with Multiple Addresses**. Previously, Magento displayed Amazon Pay as an option, even though Amazon Pay does not support multishipping.

<!-- BUNDLE-1324  -->

*  You can now change and save Amazon Pay configuration settings from **Configuration**  > **Sales** > **Payment Methods**  > **Amazon Pay** when deploying Magento in a Cloud environment. Previously, Magento did not save changed settings.

### B2B

<!-- MAGETWO-92388  -->

*  Company blocked warnings are no longer included in the source code. Previously, source code included these warning strings, which search indexers detected and treated as text.

<!-- MAGETWO-92375  -->

*  Category pages now display as expected all products whose SKUs contain either single or double quotation marks. Previously, Magento threw an error when trying to set pricing and structure on a shared catalog when product SKUs contained these characters.

<!-- MAGETWO-92040  -->

*  In multisite environments, you can now save the address of a company that is allowed only on the non-primary website. Previously, if a merchant tried to save a company address from the default website, Magento displayed this error, `Invalid value of "UA" provided for the 'country_id' field`.

<!-- MAGETWO-90824  -->

*  Access to the Companies resource can now be explicitly set on the Roles Resources page in Admin. Previously, this resource was available only to top-level administrators with all resources selected.

<!-- MAGETWO-89971  -->

*  Magento now displays the correct product total price value on all websites in a B2B deployment. Previously, Magento did not apply cart price rules for product prices on non-primary websites, but instead displayed the product price assigned to products on the primary website to all websites.

<!-- MAGETWO-89888  -->

*  When **Website Restrictions** are set to **Private Sales: Login Only**, access to the storefront is now restricted to customers who log in, and merchants can still create new companies in the Admin. Previously, when a merchant tried to create a company when this setting was enabled, Magento threw this error, `Can not register new customer due to restrictions are enabled`.

<!-- MAGETWO-87349  -->

*  Configurable products can now be added to the requisition list directly from the Category page.

<!-- ENGCOM-1373  -->

*  The `beforeSave` method on Braintree `CountryCreditCard` class now has a statement that supports `app:config:import`. Previously, Magento threw an exception during  import if it encountered an empty field in the Braintree configuration file.  *Fix submitted by Mateusz Lerczak in pull request [14829](https://github.com/magento/magento2/pull/14829)*.

<!-- MAGETWO-92748  -->

*  Guests can now view products as expected when shared catalogs are enabled. Previously, if a merchant added a product when shared catalogs were enabled, guest users could not view the product, even when shared catalogs were later disabled.

<!-- MAGETWO-92823  -->

*  Company administrators can now use Quick Order to buy products. Previously, when a company administator tried to use Quick Order to buy products, Magento displayed this error: `The SKU was not found in the catalog`.

<!-- MAGETWO-92653  -->

*  You can now successfully search for products  when the **Shared Catalog** setting is enabled.

### Bundle products

<!-- MAGETWO-90999  -->

*  Magento now successfully imports bundle products. Previously, bundle products were not visible in the product catalog, and were listed as out-of-stock on the storefront.

<!--  ENGCOM-1863 -->

*  The `Magento_Bundle` module name has been added to the relevant template files to meet Magento standard coding format. *Fix submitted by Namrata in pull request [15825](https://github.com/magento/magento2/pull/15825)*.

<!--  ENGCOM-2176 -->

*  The `option` variable has been renamed to `quoteItemOption` to improve code readability in `app/code/Magento/Bundle/Model/Product/Type.php`. *Fix submitted by Leandro F. L. in pull request [16143](https://github.com/magento/magento2/pull/16143)*.

<!-- MAGETWO-86218 -->

*  Magento now accurately displays the status of bundle product stock when **Add to Cart** is enabled for bundle products. Previously, bundle products with the **User Defined** field unchecked could not be back ordered as expected. [GitHub-10061](https://github.com/magento/magento2/issues/10061)

### Catalog

<!-- ENGCOM-1539  -->

*  The breadcrumbs component no longer relies on the `mageMenu` widget. *Fix submitted by Vova Yatsyuk in pull request [15178](https://github.com/magento/magento2/pull/15178)*. [GitHub-14987](https://github.com/magento/magento2/issues/14987)

<!-- ENGCOM-1622  -->

*  The `data-container` class name is now based on view mode. *Fix submitted by sunilit42 in pull request [15350](https://github.com/magento/magento2/pull/15350)*. [GitHub-15319](https://github.com/magento/magento2/issues/15319)

<!-- ENGCOM-1617  -->

*  Breadcrumbs now work as expected when a product name contains quotation marks. Previously, the breadcrumbs on the product details page caused this syntax error to be thrown, `SyntaxError: Unexpected token x in JSON`. *Fix submitted by Jignesh Baldha in pull request [15347](https://github.com/magento/magento2/pull/15347)*. [GitHub-15037](https://github.com/magento/magento2/issues/15037)

<!-- ENGCOM-1463  -->

*  Disabling a product now removes it from the flat index as expected. *Fix submitted by Mr. Lewis in pull request [15019](https://github.com/magento/magento2/pull/15019)*. [GitHub-14966](https://github.com/magento/magento2/issues/14966)

<!-- ENGCOM-1051  -->

*  The success message that Magento displays when a customer adds a product to the compare list now contains a link to the comparison list. *Fix submitted by Andreas von Studnitz in pull request [13862](https://github.com/magento/magento2/pull/13862)*.

<!-- ENGCOM-1953  -->

*  Cache problems no longer occur when currencies are used without a currency symbol. *Fix submitted by Dmytro Cheshun in pull request [15902](https://github.com/magento/magento2/pull/15902)*.

<!-- ENGCOM-1927  -->

*  Catalog component blocks now contain correct return type suggestions, and typos have been corrected where needed in the PHPDocs. *Fix submitted by Dmytro Cheshun in pull request [15913](https://github.com/magento/magento2/pull/15913)*.

<!-- ENGCOM-1287  -->

*  Widget cache errors that resulted in one widget being loaded twice on the storefront have been resolved. *Fix submitted by Alexandr Kozyr in pull request [12764](https://github.com/magento/magento2/pull/12764)*. [GitHub-4389](https://github.com/magento/magento2/issues/4389)

<!-- ENGCOM-1059  -->

*  Magento no longer makes redundant requests on the 'customer data' on the checkout  page. *Fix submitted by Andrey Bezyazychnyy in pull request [14314](https://github.com/magento/magento2/pull/14314)*. [GitHub-13765](https://github.com/magento/magento2/issues/13765)

<!-- MAGETWO-93196  -->

*  Administrators with permission to change product names on one website only cannot change product names on any other sites. Previously, an administrator with permission to change a product name on one site only could change product names on all websites in a multisite deployment.

<!-- MAGETWO-93103  -->

*  Administrators with limited privileges can now save products as expected.

<!-- MAGETWO-93071  -->

*  Magento now uses the current date as expected when setting the start date for a special price. Previously, Magento set the start date for a special price a few years in the future, which prevented the special price for being active.

<!-- MAGETWO-92907  -->

*  Magento now reliably displays category images on the custom store view level.  Previously, the category image on custom store view level alternately disappeared and appeared after every save operation.

<!-- MAGETWO-92574  -->

*  Magento no longer removes downloadable product links after an attribute is updated.

<!-- MAGETWO-92502  -->

*  Extra POST requests are no longer sent if the  **Synchronize widget products with backend storage** option is set to **yes**.

<!-- MAGETWO-92389  -->

*  You can now create a product date attribute that contains a day value than exceeds 12 (in the format dd/mm/yyyy). Previously, when you created a product attribute with a default date specifying a day greater than 12, Magento did not save the attribute, but instead displayed this error, `Invalid default date`.

<!-- MAGETWO-91402  -->

*  You can now use the `Magento\Catalog\Model\ProductRepository` class to assign a product to one website as expected. Previously, using this class to save a product assigned the product to all existing websites, not just the specified one.

<!-- MAGETWO-91163  -->

*  Images now load as expected on the product display page (PDP) when the image name contains double quotation marks.

<!-- MAGETWO-90940  -->

*  The SEO-friendly URL for the Category page now works as expected.

<!-- MAGETWO-90768  -->

*  The **Use Default Value** checkboxes in the design section of the category page are now enabled by default as expected.

<!-- MAGETWO-92280  -->

*  Customers can now use the **Add Product By SKU** button to add configurable products to a sales order.

<!-- MAGETWO-90569  -->

*  Empty dropdown or swatch type product attributes are no longer visible on the product page.

<!-- MAGETWO-90367  -->

*  Attributes that have empty values across all products being compared are not displayed as rows in the comparison table. Previously, Magento displayed these attributes  with an N/A value on the  Compare Products page.

<!-- MAGETWO-89732  -->

*  The Catalog page now displays breadcrumbs as expected.

<!-- MAGETWO-88504  -->

*  Tiered pricing and quantity increments now work as expected with decimal-based inventories.

<!-- MAGETWO-88102  -->

*  Magento now updates the `catalog_category_product_index` table as expected after a category is deleted.

<!-- MAGETWO-87721  -->

*  Customizable options are now configured the same for all websites to which a product is added. Previously, when a merchant added a product with customizable options to an additional site, the options were corrupted.

<!-- MAGETWO-87589  -->

*  The **Use default value** option is no longer unchecked unless the user overrides the value of the attribute in the store view scope. Previously, after creating an item, if the user changed to store view scope and did not make any modifications to the item's attributes and only clicked **Save**, most of the attributes that were set as **Use default value** became unchecked.

<!-- MAGETWO-87430  -->

*  Category product indexer logic has been optimized, and re-indexing time has been noticeably reduced.  Previously, when you had many categories (100,000), Magento could take up to 40 minutes to re-index product catalogs.

<!-- MAGETWO-86710  -->

*  Widget selection by Enabled Products no longer causes a fatal error on a storefront when the **Flat Product** is configured.

<!-- MAGETWO-86295  -->

*  Merchants can now change the `status` and `update` attributes from the product page. Previously, Magento returned a 404 page when bulk enabling or disabling products in the Admin with a restricted user role that is limited to a specific website.

<!-- MAGETWO-85682  -->

*  Magento now maintains the default setting for a product's `status` attribute when you create a new product. Previously, when creating a new product after changing the default option from Enabled to Disabled for this attribute, the status is incorrectly set to enabled by default.

<!-- MAGETWO-84891  -->

*  The print preview of product comparison results (that is, the page of results that Magento produces when you click **Compare** after selecting two or more products) now  displays as expected. Previously, only a subset of page elements was displayed.

<!-- MAGETWO-82116  -->

*  Magento now maintains the correct dates in the results of filtering the Admin Product Grid Filter: Set Product as New from Date.  [GitHub-11517](https://github.com/magento/magento2/issues/11517)

<!-- MAGETWO-75427  -->

*  As you type additional characters into the text field for a product's custom option, the hint showing the number of characters left before reaching the maximum now decreases as expected.

<!-- MAGETWO-60573  -->

*  Merchants can now set custom option fixed prices with  negative values in the Admin. [GitHub-7333](https://github.com/magento/magento2/issues/7333)

<!-- MAGETWO-73739  -->

*  You can now unset a category image on the store-view level when the image is defined on all store views.

<!-- MAGETWO-74021  -->

*  The Catalog Products List widget can now display products on the storefront that have specific attributes.

<!--  ENGCOM-2383  -->

*  The shopping cart now correctly displays images of configurable products that have only size options (that is, no color options). Previously, when a customer added a configurable product that had only size options to her shopping cart, the shopping cart did not display the expected product image. *Fix submitted by Ronak Patel in pull request [16863](https://github.com/magento/magento2/pull/16863)*. [GitHub-16843](https://github.com/magento/magento2/issues/16843)

<!--  ENGCOM-2313  -->

*  Magento now throws an exception as expected  when a user tries to submit a product review without selecting a star rating. Previously, if a user submitted a product review without selecting a star rating, Magento assigned a one-star rating.

<!--  ENGCOM-2213  -->

*  Magento now successfully displays product prices in currencies without minor units if the price amount is less then the number group size.  [GitHub-11711](https://github.com/magento/magento2/issues/11711)

<!-- ENGCOM-2193  -->

*  Magento now displays the correct  price on the product page for storefronts running Japanese locales. *Fix submitted by Vishal Gelani in pull request [15909](https://github.com/magento/magento2/pull/15909)*. [GitHub-11711](https://github.com/magento/magento2/issues/11711)

<!-- ENGCOM-1106  -->

*  Magento now correctly saves the value of a product's custom options. Previously, Magento saved all objects by using the same value object for all values. *Fix submitted by Jeroen Van Leusden in pull request [13569](https://github.com/magento/magento2/pull/13569)*. [GitHub-5067](https://github.com/magento/magento2/issues/5067)

<!-- ENGCOM-1911  -->

*  Magento now displays the product name as browser title as expected. Previously, the meta title tag was missing, which prevented Magento from displaying the product name. *Fix submitted by Riccardo Tempesta in pull request [15532](https://github.com/magento/magento2/pull/15532)*. [GitHub-15501](https://github.com/magento/magento2/issues/15501)

<!-- ENGCOM-2042  -->

*  Magento now maintains the default products sort order of “newest first” when you upgrade your Magento deployment to 2.2.4. Previously, after upgrade, the default products order in categories changed from “newest first” to “oldest first”. *Fix submitted by Danny Verkade in pull request [15629](https://github.com/magento/magento2/pull/15629)*. [GitHub-15627](https://github.com/magento/magento2/issues/15627)

<!-- ENGCOM-1909 -->

*  Links on product pages are now linkable as expected. Previously, when Magento displayed a product page, none of the provided links were clickable. *Fix submitted by simonjanguapa in pull request [15687](https://github.com/magento/magento2/pull/15687)*. [GitHub-15393](https://github.com/magento/magento2/issues/15393)

<!-- ENGCOM-2408 -->

*  Deprecated methods in Message Manager have been replaced with valid methods. *Fix submitted by Tiago Sampaio in pull request [16924](https://github.com/magento/magento2/pull/16924)*.

<!-- ENGCOM-2390 -->

*  Array short syntax usage has been standardized in these files: `app/code/Magento/Catalog/Test/Unit/Model/ProductTest.php`, `app/code/Magento/GroupedProduct/Test/Unit/Model/ProductTest.php`, and `setup/src/Magento/Setup/Module/Di/Code/Reader/FileScanner.php`. *Fix submitted by Leandro F. L. in pull request [16880](https://github.com/magento/magento2/pull/16880)*.

<!-- ENGCOM-2132 -->

*  The error message that Magento displayed when a duplicate error key occurred during product import has been improved. *Fix submitted by Vishal Gelani in pull request [16389](https://github.com/magento/magento2/pull/16389)*.

<!-- ENGCOM-2093 -->

*  We've removed the direct use of the object manager when saving Admin attribute sets. *Fix submitted by AnshuMishra17 in pull request [16217](https://github.com/magento/magento2/pull/16217)*.

<!-- ENGCOM-1703 -->

*  Breadcrumb JSON configuration has been moved to the view model and serialized using the Magento JSON serializer. *Fix submitted by Diederick Bruin in pull request [15521](https://github.com/magento/magento2/pull/15521)*.

<!-- ENGCOM-1464 -->

*  `row_id` has been added to the flat action indexer,  ensuring that index values are not set to `0` for new products when using index on save. Previously, if you used `\Magento\Framework\Api\SearchCriteriaBuilder`, and the flat `product row_id` is set to `0`, Magento did not show the product in the `getList` of the `ProductRepository`. *Fix submitted by Mr. Lewis in pull request [15010](https://github.com/magento/magento2/pull/15010)*.

<!-- ENGCOM-1444 -->

*  Magento no longer inserts redundant links to the homepage  into breadcrumbs on the product page. *Fix submitted by Vova Yatsyuk in pull request [14994](https://github.com/magento/magento2/pull/14994)*.

<!-- ENGCOM-1553 -->

*  Magento now correctly displays product information for products that have a negative price as a custom option.  *Fix submitted by Danny Verkade in pull request [15202](https://github.com/magento/magento2/pull/15202)*.

<!-- ENGCOM-1530 -->

*  Product names can now contain a double quotation mark character (`"`). Previously, when a product name contained this character, Magento threw a JavaScript error. *Fix submitted by Vova Yatsyuk in pull request [15162](https://github.com/magento/magento2/pull/15162)*.

<!-- ENGCOM-1404 -->

*  Administrators who lack access to the CatalogRule module can now perform operations as expected in the Admin cart price rule edit page. *Fix submitted by Neos2007 in pull request [14886](https://github.com/magento/magento2/pull/14886)*.

<!-- ENGCOM-1336 -->

*  Magento now updates product options and quantity by checking the item ID when updating a cart that contains configurable products with different options. *Fix submitted by Nitin Khalasi in pull request [14765](https://github.com/magento/magento2/pull/14765)*.

<!-- ENGCOM-1239 -->

*  Product meta descriptions no longer contain unnecessary HTML tags. *Fix submitted by David Windell in pull request [14538](https://github.com/magento/magento2/pull/14538)*.

<!-- MAGETWO-90367 -->

*  Attributes that have empty values across all products being compared are not displayed on the Compare Products page as rows in the comparison table. Previously, these attributes were displayed with a value of **N/A**.

<!-- MAGETWO-82116 -->

*  Magento now maintains the correct dates in the results of filtering the Admin Product Grid Filter: Set Product as New from Date. [GitHub-11517](https://github.com/magento/magento2/issues/11517)

<!-- MAGETWO-92823 -->

*  Company Admin can now use Quick Order to buy products. Previously, when a company administator tried to use Quick Order to buy products, Magento displayed this error: `The SKU was not found in the catalog`.

### CAPTCHA

<!-- MAGETWO-91840  -->

*  Customers can now successfully log in when guest checkout is disabled and CAPTCHA is enabled. Previously, Magento threw the `Provided form does not exist` error when a customer tried to log in under these conditions.

<!-- MAGETWO-89615  -->

*  CAPTCHA validation now works when the **Website Restrictions** setting is enabled.

<!-- ENGCOM-1973  -->

*  The `\Magento\Captcha\Observer\CaptchaStringResolver` class is now covered by unit tests. *Fix submitted by Yaroslav Rogoza in pull request [16065](https://github.com/magento/magento2/pull/16065)*. [GitHub-14966](https://github.com/magento/magento2/issues/14966)

<!-- ENGCOM-2013  -->

*  The `CheckRegisterCheckoutObserver` class  is now covered by unit tests. *Fix submitted by Yaroslav Rogoza in pull request [16160](https://github.com/magento/magento2/pull/16160)*.

<!-- ENGCOM-2268  -->

*  The `\Magento\Captcha\Observer\CheckGuestCheckoutObserver` class is now covered by unit tests. *Fix submitted by Yaroslav Rogoza in pull request [16680](https://github.com/magento/magento2/pull/16680)*.

<!-- ENGCOM-2531  -->

*  Autocomplete for CAPTCHA inputs has been disabled. *Fix submitted by Denis Belevtsov in pull request [17114](https://github.com/magento/magento2/pull/17114)*.

<!-- ENGCOM-2090  -->

*  Integration tests now check that customer login attempts are removed after a successful login or account details edit. *Fix submitted by Yaroslav Rogoza in pull request [16306](https://github.com/magento/magento2/pull/16306)*.

<!-- ENGCOM-2087  -->

*  Integration tests now check that administrator login attempts are removed after a successful login or account details edit. *Fix submitted by Yaroslav Rogoza in pull request [16300](https://github.com/magento/magento2/pull/16300)*.

<!-- ENGCOM-2268  -->

*  The `CheckGuestCheckoutObserver` class is now covered by unit tests. *Fix submitted by Yaroslav Rogoza in pull request [16680](https://github.com/magento/magento2/pull/16680)*.

### Cart and checkout

<!-- ENGCOM-2126  -->

*  Placeholders for the password field  no longer suggest that a password is optional. Previously, the placeholder for the password field in the checkout page suggested that the password was optional, but after validation, Magento indicated that the password field  was mandatory. *Fix submitted by hitesh-wagento in pull request [16379](https://github.com/magento/magento2/pull/16379)*. [GitHub-16378](https://github.com/magento/magento2/issues/16378)

<!-- ENGCOM-1941  -->

*  The dropdown toggle icon on the shopping cart now works as expected. Previously, the arrow did not change direction as expected when you toggled the Discount or Tax options. *Fix submitted by Karla Saaremäe in pull request [15991](https://github.com/magento/magento2/pull/15991)*.

<!-- ENGCOM-1951  -->

*  The shopping cart icon on the checkout page on mobile screens now displays hover color and regular color as expected. *Fix submitted by Karla Saaremäe in pull request [16002](https://github.com/magento/magento2/pull/16002)*.

<!-- ENGCOM-1154  -->

*  Customers are not unexpectedly logged out if the customers hits the F5 key twice during checkout. *Fix submitted by adrian-martinez-interactiv4 in pull request [14428](https://github.com/magento/magento2/pull/14428)*. [GitHub-4301](https://github.com/magento/magento2/issues/4301), [GitHub-12362](https://github.com/magento/magento2/issues/12362), [GitHub-13427](https://github.com/magento/magento2/issues/13427)

<!-- ENGCOM-1646  -->

*  The **Purchased Order Form** button is now correctly aligned. *Fix submitted by Neeta Kangiya in pull request [15331](https://github.com/magento/magento2/pull/15331)*. [GitHub-15334](https://github.com/magento/magento2/issues/15334)

<!-- ENGCOM-1634 -->

*  The **Purchased Order Form** button is now visible. *Fix submitted by hitesh-wagento in pull request [15372](https://github.com/magento/magento2/pull/15372)*. [GitHub-15334](https://github.com/magento/magento2/issues/15334)

<!-- ENGCOM-1713  -->

*  Magento no longer displays duplicate element IDs on the Checkout page. *Fix submitted by Julien ANQUETIL in pull request [15585](https://github.com/magento/magento2/pull/15585)*. [GitHub-13415](https://github.com/magento/magento2/issues/13415)

<!-- ENGCOM-1988  -->

*  During the payment step of checkout, a customer can now successfully deselect the **Billing save-in address book** checkbox in a selected payment method other than the default method.  *Fix submitted by Rakesh Gangani in pull request [15344](https://github.com/magento/magento2/pull/15344)*. [GitHub-13692](https://github.com/magento/magento2/issues/13692)

<!-- ENGCOM-1298  -->

*  The `.block-minicart` element on the mini cart dropdown menu no longer has an empty class. *Fix submitted by Karla Saaremäe in pull request [14715](https://github.com/magento/magento2/pull/14715)*. [GitHub-14669](https://github.com/magento/magento2/issues/14669)

<!-- MAGETWO-92573  -->

*  Customers can now add configurable products to their shopping cart when Magento is running on Internet Explorer 11.x.

<!--MAGETWO-87872  -->

*  The free shipping cart price rule now works as expected when the UPS shipping method is enabled. Previously, UPS Ground shipping method was not available for free shipping at checkout when the UPS shipping method was enabled.

<!-- MAGETWO-82132  -->

*  Cart price rule condition values now handle commas as expected.

<!-- MAGETWO-69940  -->

*  Free shipping coupons now work as expected with Table Rates shipping. Previously, Magento displayed this message when a customer tried to use a free shipping coupon: `Sorry, no quotes are available for this order`.  [GitHub-8172](https://github.com/magento/magento2/issues/8172)

<!-- MAGETWO-91112  -->

*  Magento now displays correct store view prices for cases when a merchant uses a CSV file to add products by SKU  from the Admin.

<!-- MAGETWO-90190  -->

*  A merchant can successfully use SKU values that contain capital letters to  add a product  to a cart from the Admin.

<!-- MAGETWO-90053  -->

*  Refreshing the checkout page no longer deletes the shipping address when a guest checks out. Previously, when the persistent shopping cart was enabled, refreshing the checkout out page affected information entered into form fields for a guest checkout.

<!-- MAGETWO-89222  -->

*  The speed at which Magento places an order is no longer affected by how many shipping methods are available. Previously, when a customer placed an order for which multiple shipping methods were available, Magento took more than 20 seconds to place the order.

<!-- MAGETWO-73537  -->

*  Magento now maintains browser history as expected when a user navigates from the checkout contact information page to the checkout payment information page.  Previously, when a user tried to retrace her steps after landing on the payment information page, Magento did not return them to the checkout contact information page, but instead landed on a product page.

<!-- MAGETWO-73736  -->

*  Magento now displays a message  when a gift card  card is removed during checkout.

<!-- MAGETWO-86470  -->

*  Guest orders placed with gift cards can now be canceled.

<!-- MAGETWO-86490  -->

*  A shopping cart’s contents remains constant even when the Checkout page is repeatedly reloaded. Previously, if a customer reloaded the checkout page several times, Magento emptied the shopping cart and the customer could not place the order. (This problem primarily affected stores running on HTTPS.)

<!-- ENGCOM-840  -->

*  The message that Magento displays when a customer has successfully added a product to his shopping cart now contains a link to the cart.  *Fix submitted by Andreas von Studnitz in pull request [13904](https://github.com/magento/magento2/pull/13904)*.

<!-- ENGCOM-1430  -->

*  The Update button now behaves the same whether product quantity is manually edited or changed by JavaScript. *Fix submitted by Valerij Ivashchenko in pull request [14935](https://github.com/magento/magento2/pull/14935)*.

<!-- ENGCOM-1399  -->

*  Magento no longer displays the infinite checkout loader when a module that is loading  makes a `require` call, but the dependency is not returned (typically due to network error). *Fix submitted by Vova Yatsyuk in pull request [14874](https://github.com/magento/magento2/pull/14874)*.

<!-- ENGCOM-1299  -->

*  The minicart quantity label no longer has a fixed length. *Fix submitted by Karla Saaremäe in pull request [14716](https://github.com/magento/magento2/pull/14716)*.

<!-- MAGETWO-93347  -->

*  Double-clicking on the **Proceed to checkout** button from the minicart no longer returns an empty shopping cart.

### Cleanup

Our community contributors have made many helpful, minor corrections to spelling and code syntax throughout the code base.

#### Spelling corrections

<!-- ENGCOM-2290  -->

*  Corrected misspelling of `formatedPrice` throughout the code base. *Fix submitted by Arnoud Beekman in pull request [16726](https://github.com/magento/magento2/pull/16726)*.

<!-- ENGCOM-2280  -->

*  Corrected return message from `ProductRuleTest.php`. *Fix submitted by Namrata in pull request [16721](https://github.com/magento/magento2/pull/16721)*.

<!-- ENGCOM-2297  -->

*  Replaced the `proccessAdditionalValidation` method with `processAdditionalValidation`. *Fix submitted by Tiago Sampaio in pull request [16414](https://github.com/magento/magento2/pull/16414)*.

<!-- ENGCOM-2276  -->

*  Corrected misspelling in `SynonymGroupRepositoryInterface`. *Fix submitted by AnshuMishra17 in pull request [16711](https://github.com/magento/magento2/pull/16711)*.

<!-- ENGCOM-2170  -->

*  Corrected misspelling in  library file. *Fix submitted by Namrata in pull request [16495](https://github.com/magento/magento2/pull/16495)*.

<!-- ENGCOM-2165  -->

*  Corrected punctuation in the message displayed on **CONTENT** > **Design** > **Configuration**. *Fix submitted by Erik Hansen in pull request [16489](https://github.com/magento/magento2/pull/16489)*.

<!-- ENGCOM-2040  -->

*  Correct misspellings in Model and library files. *Fix submitted by Namarata in pull request [16230](https://github.com/magento/magento2/pull/16230)*.

<!-- ENGCOM-1581  -->

*  Corrected misspelling in  `_exportAddressses` method name. *Fix submitted by Marcel Hauri in pull request [15275](https://github.com/magento/magento2/pull/15275)*.

<!-- ENGCOM-1647  -->

*  Corrected misspelling in comments for `addTaxPercents()` in `app/code/Magento/Catalog/Model/ResourceModel/Product/Collection.php`. *Fix submitted by AnshuMishra17 in pull request [15431](https://github.com/magento/magento2/pull/15431)*.

<!-- ENGCOM-1637  -->

*  Corrected misspelling in `abstract.js`. *Fix submitted by VitaliyBoyko in pull request [15411](https://github.com/magento/magento2/pull/15411)*.

<!-- ENGCOM-1797  -->

*  Corrected misspellings in `app/code/Magento/Sales/Block/Adminhtml/Order/Create/Sidebar/AbstractSidebar.php`, `app/code/Magento/Ui/view/base/web/js/form/components/fieldset.js`, `app/code/Magento/Ui/view/base/web/js/form/components/group.js`,  `setup/pub/angular-sanitize/angular-sanitize.js`, and `setup/pub/angular-sanitize/angular-sanitize.min.js.map`.  *Fix submitted by Danny Verkade in pull request [15715](https://github.com/magento/magento2/pull/15715)*.

<!-- ENGCOM-1692  -->

*  Corrected misspelling in `app/code/Magento/Catalog/Model/Product/Type/AbstractType.php`. *Fix submitted by Saurabh Parekh in pull request [15519](https://github.com/magento/magento2/pull/15519)*.

<!-- ENGCOM-1676  -->

*  Corrected misspellings in Multishipping and User modules. *Fix submitted by Anna Völkl in pull request [15513](https://github.com/magento/magento2/pull/15513)*.

<!-- ENGCOM-1599 -->

*  Corrected a misspelling in function comment in `app/code/Magento/Paypal/Model/Api/Nvp.php` *Fix submitted by Namrata in pull request [15302](https://github.com/magento/magento2/pull/15302)*.

<!-- ENGCOM-1588 -->

*  Corrected misspellings in PHPDocs and comments. *Fix submitted by Dmytro Cheshun in pull request [15293](https://github.com/magento/magento2/pull/15293)*.

<!-- ENGCOM-1580 -->

*  Corrected typo in method name `_getCharg[e]ableOptionPrice`. *Fix submitted by Marcel Hauri in pull request [15276](https://github.com/magento/magento2/pull/15276)*.

<!-- ENGCOM-1586 -->

*  Corrected typo in database column comment in `app/code/Magento/Catalog/Setup/InstallSchema.php`. *Fix submitted by VitaliyBoyko in pull request [15291](https://github.com/magento/magento2/pull/15291)*.

<!-- ENGCOM-1584 -->

*  Corrected misspelling in the name of private method `\Magento\Catalog\Console\Command\ImagesResizeCommand::getUniq[ue]ImageIndex`. *Fix submitted by Marcel Hauri in pull request [15282](https://github.com/magento/magento2/pull/15282)*.

<!-- ENGCOM-1582 -->

*  Corrected typo in the `\Magento\Framework\Image::open` exception message. *Fix submitted by Tom Richards in pull request [15269](https://github.com/magento/magento2/pull/15269)*.

<!-- ENGCOM-1406 -->

*  Corrected misspelling in `ResourceModel\Coupon.php:updateSpecificCoupons`. *Fix submitted by Stephen Biston in pull request [14891](https://github.com/magento/magento2/pull/14891)*.

<!-- ENGCOM-1575 -->

*  Corrected typo in the name of the `\Magento\Framework\App\Request\Http::removeRepitedSlashes` method. *Fix submitted by Igor Tripolskiy in pull request [15256](https://github.com/magento/magento2/pull/15256)*.

<!-- ENGCOM-1470 -->

*  Corrected misspelling in `app/code/Magento/CatalogSearch/Block/Advanced/Form.php`. *Fix submitted by Jeevan M R in pull request [15053](https://github.com/magento/magento2/pull/15053)*.

<!-- ENGCOM-1458 -->

*  Corrected misspelling in `.less` files. *Fix submitted by Kalpesh Mehta in pull request [15023](https://github.com/magento/magento2/pull/15023)*.

<!-- ENGCOM-2057  -->

*  Removed double occurrence of 'it' from sentences and corrected minor grammar error. *Fix submitted by Namrata in pull request [16240](https://github.com/magento/magento2/pull/16240)*.

<!-- ENGCOM-2097  -->

*  Fixed typo in `app/code/Magento/Checkout/etc/webapi.xml`. *Fix submitted by Markus Haack in pull request [15845](https://github.com/magento/magento2/pull/15845)*.

<!-- ENGCOM-1897  -->

*  Corrected misspelling in `file-uploader.js` and `storage-manager.js`. *Fix submitted by Saurabh Parekh in pull request [15888](https://github.com/magento/magento2/pull/15888)*.

<!-- ENGCOM-1925  -->

*  Corrected misspelling in `scripts.js`. *Fix submitted by Ledian Hymetllari in pull request [15878](https://github.com/magento/magento2/pull/15907)*.

<!-- ENGCOM-2545  -->

*  Corrected grammar error in the "What is this" tooltip for the Braintree vault tool tip. *Fix submitted by kreativedev in pull request [17151](https://github.com/magento/magento2/pull/17151)*.

<!-- ENGCOM-2456  -->

*  Renamed `_requesetd` to `_requested` in  `app/code/Magento/Ui/view/base/web/js/lib/core/element/element.js`. *Fix submitted by Valerij Ivashchenko in pull request [16971](https://github.com/magento/magento2/pull/16971)*.

<!-- ENGCOM-2447  -->

*  Removed double occurrences of words from `Magento_Catalog`, `Magento_Customer`, `Magento_Downloadable`, `Magento_Sales`,  and `lib` and `dev` test function comments. *Fix submitted by Pratik Oza in pull request [16977](https://github.com/magento/magento2/pull/16977)*.

<!--  ENGCOM-1589  -->

*  Correct misspelling in method name and result in these files: `dev/tests/functional/tests/app/Magento/Checkout/Test/Block/Onepage/Shipping/Method.php` and `dev/tests/functional/tests/app/Magento/Shipping/Test/Constraint/AssertCityBasedShippingRateChanged.php`. *Fix submitted by Dmytro Cheshun in pull request [15297](https://github.com/magento/magento2/pull/15297)*.

#### Minor corrections to code and code formatting

<!-- ENGCOM-2385  -->

*  Removed extra spaces from `Magento/Ui`. *Fix submitted by Ronak Patel in pull request [16872](https://github.com/magento/magento2/pull/16872)*.

<!-- ENGCOM-2354  -->

*  Improved code formatting. *Fix submitted by Pratik Oza in pull request [16821](https://github.com/magento/magento2/pull/16821)*.

<!-- ENGCOM-2305  -->

*  Removed comments and unnecessary spaces. *Fix submitted by Ronak Patel in pull request [16748](https://github.com/magento/magento2/pull/16748)*.

<!-- ENGCOM-2283  -->

*  Removed space before ending sentence throughout code base. *Fix submitted by Namrata in pull request [16717](https://github.com/magento/magento2/pull/16717)*.

<!-- ENGCOM-2249  -->

*  Removed unnecessary spaces in `app/code/Magento/Catalog/Pricing/Price/ConfiguredRegularPrice.php`. *Fix submitted by Ronak Patel in pull request [15129](https://github.com/magento/magento2/pull/15129)*.

<!-- ENGCOM-2238  -->

*  Removed double occurrences of words from the lib and dev test function comments and from these modules: `Magento_Catalog`, `Magento_Customer`, `Magento_Downloadable`, and `Magento_Sales`. *Fix submitted by Namrata in pull request [16644](https://github.com/magento/magento2/pull/16644)*.

<!-- ENGCOM-2206  -->

*  Removed double occurrences from `jQuery`, Angular JS files and the `Magento_Setup` module's scan function's comment. *Fix submitted by Namrata in pull request [16581](https://github.com/magento/magento2/pull/16581)*.

<!-- ENGCOM-2195  -->

*  Removed extra space from the value of the `is_required` XML node in `SynonymGroup.xml`. *Fix submitted by Namrata in pull request [16557](https://github.com/magento/magento2/pull/16557)*.

<!--  ENGCOM-2366  -->

*  Minor corrections to code throughout the code base. *Fix submitted by GraysonChiang in pull request [16841](https://github.com/magento/magento2/pull/16841)*.

<!-- ENGCOM-2186  -->

*  Removed unused data from `app/code/Magento/Ui/Model/Export/ConvertToCsv.php` and `app/code/Magento/Ui/Model/Export/ConvertToXml.php`. *Fix submitted by Vishal Gelani in pull request [16524](https://github.com/magento/magento2/pull/16524)*.

<!-- ENGCOM-2086  -->

*  Removed unnecessary translations for label and comment tags and added missing translation strings. *Fix submitted by Yogesh Suhagiya in pull request [16090](https://github.com/magento/magento2/pull/16090)*.

<!-- ENGCOM-2177  -->

*  Removed redundant plug-in information (`dev:di:info`). *Fix submitted by Alexander Shkurko in pull request [16474](https://github.com/magento/magento2/pull/16474)*.

<!-- ENGCOM-1711  -->

*  Removed redundant semicolon from these files: `app/code/Magento/Tax/Model/Sales/Total/Quote/CommonTaxCollector.phpMagento/Multishipping/Test/Unit/Block/Checkout/SuccessTest.php` and  `app/code/Magento/Tax/Model/Sales/Total/Quote/CommonTaxCollector.php`. *Fix submitted by Saurabh Parekh in pull request [15594](https://github.com/magento/magento2/pull/15594)*.

<!-- ENGCOM-1700  -->

*  Corrected errors in method description in `app/code/Magento/Config/Block/System/Config/Form.php`,  `app/code/Magento/ConfigurableImportExport/Model/Import/Product/Type/Configurable.php`, and  `app/code/Magento/Customer/Model/Session.php`. *Fix submitted by Vishal Gelani in pull request [15549](https://github.com/magento/magento2/pull/15549)*.

<!-- ENGCOM-1697  -->

*  Removed extra space and formatted the code in `app/code/Magento/Captcha/i18n/en_US.csv`. *Fix submitted by Saurabh Parekh in pull request [15552](https://github.com/magento/magento2/pull/15552)*.

<!-- ENGCOM-1651  -->

*  Removed the redundant `else` statement in `app/code/Magento/ConfigurableImportExport/Model/Import/Product/Type/Configurable.php`. *Fix submitted by Yaroslav Rogoza in pull request [15435](https://github.com/magento/magento2/pull/15435)*.

<!-- ENGCOM-2270 -->

*  Fixed misplaced bracket in `Option/Type/Text.php`. *Fix submitted by Valerij Ivashchenko in pull request [16566](https://github.com/magento/magento2/pull/16566)*.

<!-- ENGCOM-1592  -->

*  Removed a duplicate line and added comment in `app/code/Magento/Sales/Block/Adminhtml/Order/Create/Totals/Discount.php`. *Fix submitted by Vishal Gelani in pull request [15362](https://github.com/magento/magento2/pull/15362)*.

<!-- ENGCOM-1593  -->

*  Removed unused variable in `lib/web/css/source/lib/variables/_typography.less`. *Fix submitted by VitaliyBoyko in pull request [15386](https://github.com/magento/magento2/pull/15386)*.

<!-- ENGCOM-1602 -->

*  Corrected variable names in `LockAdminUserWhenEditingIntegrationTest` and `AssertCityBasedShippingRateChanged`, among others. *Fix submitted by Dmytro Cheshun in pull request [15294](https://github.com/magento/magento2/pull/15294)*.

<!-- ENGCOM-1587 -->

*  Corrected property name in  `dev/tests/static/testsuite/Magento/Test/Integrity/Magento/Backend/ControllerAclTest.php`. *Fix submitted by Dmytro Cheshun in pull request [15292](https://github.com/magento/magento2/pull/15292)*.

<!-- ENGCOM-1572 -->

*  Removed non-existing argument from the constructor's comment block in  `app/code/Magento/Translation/Block/Html/Head/Config.php` and added space where needed in  `app/code/Magento/Translation/Model/Json/PreProcessor.php`. *Fix submitted by Yogesh Suhagiya in pull request [15249](https://github.com/magento/magento2/pull/15249)*.

<!-- ENGCOM-1427 -->

*  Removed redundant close tag from `app/code/Magento/Review/view/frontend/templates/view.phtml`. *Fix submitted by Yogesh Suhagiya in pull request [14928](https://github.com/magento/magento2/pull/14928)*.

<!-- ENGCOM-1409 -->

*  Removed extra spaces from a key-value pair in the `en_US.csv`language file. *Fix submitted by Yogesh Suhagiya in pull request [14896](https://github.com/magento/magento2/pull/14896)*.

<!-- ENGCOM-1306 -->

*  Cleaned up `foreach` and `break` statements in `app/code/Magento/Rule/Model/Condition/AbstractCondition.php`. *Fix submitted by Thomas Klein in pull request [14609](https://github.com/magento/magento2/pull/14609)*.

<!--  ENGCOM-1384  -->

*  Corrected grammar in `README.md`. *Fix submitted by Stanislav Idolov in pull request [14844](https://github.com/magento/magento2/pull/14844)*.

<!--  ENGCOM-2218  -->

*  Corrected type hints in `Webapi/Controller/Soap/Request/Handler.php` and `Webapi/Model/Plugin/GuestAuthorization.php`. Also corrected case in property annotation  in `Soap\Server.php` and added undefined property `_appState` in `Controller\Soap.php`. *Fix submitted by Prince Patel in pull request [16626](https://github.com/magento/magento2/pull/16626)*.

<!--  ENGCOM-2218  -->

*  Corrected `Magento\Webapi\Model\Soap\Fault::toXml()` method invocation in `Soap\FaultTest.php`. *Fix submitted by Prince Patel in pull request [16626](https://github.com/magento/magento2/pull/16626)*.

<!-- ENGCOM-1853  -->

*  We've removed an unused class from the `lib/_forms.less` file. *Fix submitted by Chirag Matholiya in pull request [15791](https://github.com/magento/magento2/pull/15791)*.

<!-- ENGCOM-1861  -->

*  We've removed unnecessary CSS code from  `_actions-toolbar.less`. *Fix submitted by Chirag Matholiya in pull request [15789](https://github.com/magento/magento2/pull/15789)*.

<!-- ENGCOM-1850  -->

*  We've removed the unnecessary double semicolon from the style sheets. *Fix submitted by Namrata in pull request [15795](https://github.com/magento/magento2/pull/15795)*.

<!-- ENGCOM-1880  -->

*  We've removed the unused code from `docs.less`. *Fix submitted by Daniel Ruf in pull request [15871](https://github.com/magento/magento2/pull/15871)*.

<!-- ENGCOM-1923  -->

*  Removed extraneous negative margin on product list and product list items. *Fix submitted by Steven de Jong in pull request [15936](https://github.com/magento/magento2/pull/15936)*. [GitHub-15308](https://github.com/magento/magento2/issues/15308)

<!-- ENGCOM-1959  -->

*  Indentation issues with LESS files have been resolved. *Fix submitted by hitesh-wagento in pull request [15811](https://github.com/magento/magento2/pull/15811)*.

<!-- ENGCOM-2016  -->

*  The syntax for before-after operators in LESS files has been corrected. *Fix submitted by Namrata in pull request [16181](https://github.com/magento/magento2/pull/16181)*.

<!-- ENGCOM-2018  -->

*  Redundant keywords have been removed from miscellaneous files. *Fix submitted by Namrata in pull request [16182](https://github.com/magento/magento2/pull/16182)*.

<!-- ENGCOM-2019  -->

*  We've corrected misspellings in the  comment section of `OrderFixture.php`.  *Fix submitted by Namrata in pull request [16183](https://github.com/magento/magento2/pull/16183)*.

<!-- ENGCOM-1680  -->

*  Unnecessary leading and trailing spaces have been removed from the customer account login page email field. *Fix submitted by Piyush Dankhara in pull request [15365](https://github.com/magento/magento2/pull/15365)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2023  -->

*  Unnecessary leading and trailing spaces have been removed from fields in the customer account create and login forms. *Fix submitted by Piyush Dankhara in pull request [16192](https://github.com/magento/magento2/pull/16192)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2198  -->

*  Unnecessary leading and trailing spaces have been removed from fields in newsletter, forgot password, checkout login and email to a friend forms. *Fix submitted by Piyush Dankhara in pull request [16564](https://github.com/magento/magento2/pull/16564)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2381  -->

*  Unnecessary leading and trailing spaces have been removed from fields in the customer confirmation form. *Fix submitted by Vishal Gelani in pull request [16595](https://github.com/magento/magento2/pull/16595)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2507  -->

*  Removed unnecessary commented code from these files: `app/code/Magento/Review/Model/ResourceModel/Rating/Collection.php`, `app/code/Magento/Sales/Model/Order/Creditmemo.php`, `lib/internal/Magento/Framework/Data/Form/Element/Checkboxes.php`, and `lib/internal/Magento/Framework/Model/ResourceModel/Db/Relation/ActionPool.php`. *Fix submitted by Pratik Oza in pull request [17077](https://github.com/magento/magento2/pull/17077)*.

<!-- ENGCOM-2485  -->

*  Removed unnecessary spaces from the price value in `app/code/Magento/Catalog/view/base/templates/product/price/amount/default.phtml`. *Fix submitted by Valerij Ivashchenko in pull request [17027](https://github.com/magento/magento2/pull/17027)*.

<!-- ENGCOM-2461  -->

*  Remove unused comments from `_initDiscount()` function. *Fix submitted by Prince Patel in pull request [17002](https://github.com/magento/magento2/pull/17002)*.

<!-- ENGCOM-2451  -->

*  Corrected misspellings in multiple files, including `app/code/Magento/Catalog/Block/Adminhtml/Product/Attribute/Set/Main/Tree/Attribute.php`, `app/code/Magento/Catalog/view/adminhtml/web/js/product/weight-handler.js`, `app/code/Magento/Signifyd/Test/Unit/Controller/Webhooks/HandlerTest.php`, `app/code/Magento/Ui/view/base/web/js/lib/core/element/element.js`, and `dev/tests/functional/tests/app/Magento/Widget/Test/Constraint/AssertWidgetCmsPageLink.php`. *Fix submitted by Pratik Oza in pull request [16980](https://github.com/magento/magento2/pull/16980)*.

<!-- ENGCOM-1439  -->

*  Corrected formatting of the JavaScript code in the `app/code/Magento/Ui/view/base/templates/control/button/split.phtml` and `app/code/Magento/Ui/view/base/web/js/grid/controls/button/split.jstemplate` files. *Fix submitted by Yogesh Suhagiya in pull request [14967](https://github.com/magento/magento2/pull/14967)*.

<!-- ENGCOM-2071  -->

*  Removed redundant `@throws` hinting and unused import for `AdvancedPricingImportExport` module classes. *Fix submitted by Dmytro Cheshun in pull request [15872](https://github.com/magento/magento2/pull/15872)*.

<!-- ENGCOM-2034  -->

*  Added missing PHPDoc to methods throughout the code base. *Fix submitted by Leandro F. L. in pull request [16215](https://github.com/magento/magento2/pull/16215)*.

<!-- ENGCOM-2045  -->

*  Fixed mismatches in case between class and method name spellings. *Fix submitted by Leandro F. L. in pull request [16141](https://github.com/magento/magento2/pull/16141)*.

<!-- ENGCOM-1760  -->

*  Removed an unnecessary comma from the `translate` attribute in `app/code/Magento/Sales/etc/adminhtml/system.xml`. *Fix submitted by Dmytro Cheshun in pull request [15615](https://github.com/magento/magento2/pull/15615)*.

### CMS content

<!-- MAGETWO-92611 -->

*  Page layout issues that resulted from incorrect module sequence have been corrected. Previously, the  `Magento_theme` module was loaded too late, which resulted in unexpected display issues.

<!-- ENGCOM-1407 -->

*  Corrected use statements and return values in `AggregationInterface`. *Fix submitted by Yaroslav Rogoza in pull request [14893](https://github.com/magento/magento2/pull/14893)*.

### Configurable products

<!-- ENGCOM-1686  -->

*  Customers can now successfully complete checkout when their order contains a configurable product with a configurable option. Previously, customers could not check out when there is a configurable product in the cart with a configurable option, which is now deleted, shopping cart could not be loaded. *Fix submitted by jonshipman in pull request [15468](https://github.com/magento/magento2/pull/15468)*. [GitHub-15467](https://github.com/magento/magento2/issues/15467)

<!-- MAGETWO-87047  -->

*  Magento now displays the manufacturer attribute on the Admin on the Catalog page for configurable products. Previously, Magento displayed these attributes on the simple products catalog page, but not on the configurable products catalog page.

<!-- MAGETWO-86125  -->

*  Configurable products are now sorted by only visible prices as expected. Previously, sorting a catalog by price resulted in sort results that included the prices of out-of-stock products and disabled child products.

<!-- ENGCOM-2188  -->

*  When two simple products of a configurable product have different prices, Magento now uses the lowest price as the default price on the product detail page. Previously, if one of the simple products had price=0, Magento did not use it as the default. *Fix submitted by Torrey Tsui in pull request [16540](https://github.com/magento/magento2/pull/16540)*.

<!-- ENGCOM-1512  -->

*  The missing check for a `false` value has been added  to  `ConfiguredRegularPrice`. Previously, when the parent method returned false, Magento threw this fatal error: `NOTICE: PHP message: PHP Fatal error:  Uncaught TypeError: Argument 1 passed to Magento\Catalog\Pricing\Price\ConfiguredOptions::getItemOptionsValue() must be of the type float, boolean given, called in /app/vendor/magento/module-catalog/Pricing/Price/ConfiguredRegularPrice.php on line 74 and defined in /app/vendor/magento/module-catalog/Pricing/Price/ConfiguredOptions.php:24`. *Fix submitted by Tibor Kotosz in pull request [15129](https://github.com/magento/magento2/pull/15129)*.

<!-- ENGCOM-2194  -->

*  Fixed the DocBlock for `hasInvoices()`, `hasShipments()`, and `hasCreditmemos()` in `app/code/Magento/Sales/Model/Order.php`. *Fix submitted by Lyzun Oleksandr in pull request [16554](https://github.com/magento/magento2/pull/16554)*.

<!-- ENGCOM-2145  -->

*  Fixed type hints and docs for the Downloadable Samples block. *Fix submitted by Björn Kraus in pull request [16408](https://github.com/magento/magento2/pull/16408)*.

### Cookies

<!-- ENGCOM-2403  -->

*  Magento now responds to a customer accepting a cookie notice by simply hiding the notice. Previously, Magento reloaded the entire site when a user accepted the cookie notice. *Fix submitted by Torben Höhn in pull request [16890](https://github.com/magento/magento2/pull/16890)*.

### Customer account

<!-- MAGETWO-92989  -->

*  Magento no longer logs out a customer after a successful password change.

<!-- MAGETWO-92507  -->

*  Magento no longer displays the State/Province instead of the State field on U.S. customer address forms.

<!-- MAGETWO-91327  -->

*  Customer attributes are now correctly validated on the Admin Order form. Previously, Magento validated attributes\length  after an order has been submitted, but not on the Admin Order form.

<!-- MAGETWO-89624  -->

*  Customers no longer lose their session when they switch stores on different domains.

<!-- MAGETWO-89849  -->

*  Non-U.S. and non-Canadian addresses that are displayed in the  **Address Book summary**  field now display the State/Province values as expected if that information was provided.

<!-- MAGETWO-89034  -->

*  The checkout page no longer displays custom address attributes when **Show on frontend** is set to **no**.

<!-- MAGETWO-88411  -->

*  Magento now displays the default value for a new Customer attribute that is created from the Admin. Previously, Magento set this value to **no** by default.

<!-- MAGETWO-73827  -->

*  Administrators can see all customers when the **Share Customer Accounts** value is set to Global.

<!--  ENGCOM-1680  -->

*  User login email validation no longer fails if the field contains a leading or trailing space on Internet Explorer 11.x. *Fix submitted by Piyush Dankhara in pull request [15365](https://github.com/magento/magento2/pull/15365)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!--  ENGCOM-1987  -->

*  Customer accounts are now unlocked as expected after a password reset. *Fix submitted by Andrea Gaspardo in pull request [15255](https://github.com/magento/magento2/pull/15255)*. [GitHub-15534](https://github.com/magento/magento2/issues/15534)

<!--  ENGCOM-1625  -->

*  Magento no longer changes the format of Date of Birth information when this field is enabled on the Create New Customer Account page, and an existing customer tries to re-register. *Fix submitted by KaushikChavda in pull request [15272](https://github.com/magento/magento2/pull/15272)*.

<!--  ENGCOM-2089  -->

*  When saving a customer group, Magento now copies extension attributes to the new data model that is returned. Previously, this action was not completed, and Magento behaved unpredictably. *Fix submitted by Joseph Maxwell in pull request [16254](https://github.com/magento/magento2/pull/16254)*.

<!--  ENGCOM-1432  -->

*  The `customer.account.dashboard.info.extra` block has been moved to contact information from the newsletter section in `app/code/Magento/Customer/view/frontend/templates/account/dashboard/info.phtml`. *Fix submitted by JeroenVanLeusden in pull request [14923](https://github.com/magento/magento2/pull/14923)*.

### Directory

<!--  ENGCOM-2281  -->

*  You can now configure different Allowed Countries for default and store scopes. *Fix submitted by Oleksandr Kravchuk in pull request [16693](https://github.com/magento/magento2/pull/16693)*.

### dotmailer

*  The ROI tracking feature now tracks order events properly.

*  The importer now works as expected.

*  Catalog sync now syncs all products across all created collections when it is configured to sync on the store level.

*  The validation process for new subscribers no longer permits subscribers to be enrolled multiple times into the new subscriber program.

*  Unexpected errors during subscriber or customer creation no longer occur.

<!-- BUNDLE-526  -->

*  A merchant can now successfully create a new user and displays the appropriate welcome message. Previously, Magento threw an error during the creation of a customer or subscriber, although the new user/subscriber was created.

### EAV

<!-- MAGETWO-73062 -->

*  Magento now displays the fixed product tax attribute label as expected according to the specified store view.

<!-- MAGETWO-90576 -->

*  Magento now correctly renders multiselect product attributes with a custom source model in  `adminhtml`. Previously, the selected value was saved the first time in the `catalog_product_entity_varchar` table, and the attribute was added to the `eav_attribute` table, but the selected options were not highlighted against the attribute.

### Frameworks

<!-- ENGCOM-2370  -->

*  `@api` annotation has been added to the `magento/framework` component of the Filter Group and Sort Order classes. *Fix submitted by Ronak Patel in pull request [16845](https://github.com/magento/magento2/pull/16845)*.

<!--  ENGCOM-2532  -->

*  `app/code/Magento/Theme/etc/di.xml` now uses `Translate` instead of `TranslateInterface`. *Fix submitted by Wouter Samaey in pull request [17124](https://github.com/magento/magento2/pull/17124)*.

<!--  ENGCOM-1981  -->

*  Classes with methods that contain variadic arguments can be also used in proxy classes. *Fix submitted by Vishal Gelani in pull request [16080](https://github.com/magento/magento2/pull/16080)*.

<!--  ENGCOM-1915  -->

*  The annotation in  `_toOptionArray - lib\internal\Magento\Framework\Data\SearchResultProcessor.php` has been corrected. *Fix submitted by Namrata in pull request [15892](https://github.com/magento/magento2/pull/15892)*.

<!--  ENGCOM-1374  -->

*  Scheduled XML sitemap generation now works as expected. Previously, you could schedule sitemap generation (**Admin** > **Store** > **Configuration** > **Catalog** > **XML sitemap**), but Magento would not generate the sitemap. *Fix submitted by James Halsall in pull request [14822](https://github.com/magento/magento2/pull/14822)*. [GitHub-5768](https://github.com/magento/magento2/issues/5768)

<!--  ENGCOM-1356  -->

*  In multi-site deployments, a customer requesting a password reset on a non-default store should receive the password reset email from the non-default, not the primary, store. Previously, this password reset email was sent from the default store. *Fix submitted by Rodrigo Mourão in pull request [14800](https://github.com/magento/magento2/pull/14800)*. [GitHub-5726](https://github.com/magento/magento2/issues/5726)

<!--  ENGCOM-1301  -->

*  The `trigger_recollect` quote attribute no longer causes a time out. *Fix submitted by Philipp Sander in pull request [14719](https://github.com/magento/magento2/pull/14719)*. [GitHub-9580](https://github.com/magento/magento2/issues/9580)

<!-- MAGETWO-90538  -->

*  `Framework\Math\Random` now uses PHP 7.x features, including `random_bytes` and `random_int`.

<!-- MAGETWO-91164  -->

*  The `catalog:image:resize` command execution time has been reduced by up to 90% in the release. However, this improvement necessitates these additional steps after upgrading your Magento instance to 2.2.6:

   *  Remove   `pub/media/catalog/product/cache`. (Removing this folder frees up space.)

   *  Run `bin/magento catalog:image:resize`  to generate a new image cache.  (This step is necessary because we’ve changed the path to cached images and must remove the previously cached images.)

<!-- MAGETWO-87731  -->

*  We've fixed a display error that occurred when both a Critical Admin Notification and Release Notification window were opened.

<!--  ENGCOM-2416  -->

*  Changes that were made to file permissions for  `lib/internal/Magento/Framework/View/Asset/Merged.php` and its associated test that were made in an earlier release have been reverted. *Fix submitted by Ihor Sviziev in pull request [16937](https://github.com/magento/magento2/pull/16937)*.

<!--  ENGCOM-1684  -->

*  The constructor in `Magento\Webapi\Model\Soap\Fault.php` now assigns `$exception->getOriginator()` to `_soapFaultCode` instead of to the dynamical property `_soapCode`. *Fix submitted by Marcel Hauri in pull request [15515](https://github.com/magento/magento2/pull/15515)*.

<!--  ENGCOM-1628  -->

*  Corrected annotation in `_toOptionArray` in `lib/internal/Magento/Framework/Data/Collection/AbstractDb.php`. *Fix submitted by Sanjay Patel in pull request [15336](https://github.com/magento/magento2/pull/15336)*.

<!--  ENGCOM-1355  -->

*  The invoice table now displays the correct shipping and handling for a partial items invoice. *Fix submitted by Ankur Raiyani in pull request [14795](https://github.com/magento/magento2/pull/14795)*.

<!--  ENGCOM-1304  -->

*  The return values from the `usort` and `value_compare_func` function now matches  the PHP documentation for these functions. *Fix submitted by luke-denton-aligent in pull request [14726](https://github.com/magento/magento2/pull/14726)*.

<!--  ENGCOM-1317  -->

*  MySQL adapter can now reconnect successfully  when using a nonstandard port. Previously, Magento threw this error, `Port must be configured within host parameter`. *Fix submitted by Julien ANQUETIL in pull request [14753](https://github.com/magento/magento2/pull/14753)*.

#### Application framework

<!-- MAGETWO-92722  -->

*  You can now manually add a parameter to `app/etc/env.php: user_admin_email`. When an administrator is created, Magento sends an email  to default store's email and, if present, to the email address defined in `user_admin_email`.

<!--  ENGCOM-2240  -->

*  Magento now removes unneeded PDF files after generation. Previously, Magento saved a copy of every generated invoice PDF in `/var`.  *Fix submitted by Yaroslav Rogoza in pull request [16401](https://github.com/magento/magento2/pull/16401)*. [GitHub-3535](https://github.com/magento/magento2/issues/3535), [GitHub-14517](https://github.com/magento/magento2/issues/14517)

<!--  ENGCOM-2371  -->

*  Logs now indicate when Magento is in maintenance mode, which will help the debugging process. *Fix submitted by Ethan Yehuda in pull request [16840](https://github.com/magento/magento2/pull/16840)*.

#### JavaScript framework

<!--  ENGCOM-1677  -->

*  `lib/web/mage/dropdowns.js` no longer fails when autoclose is set to **true**. *Fix submitted by Brian LaBelle in pull request [15499](https://github.com/magento/magento2/pull/15499)*. [GitHub-15469](https://github.com/magento/magento2/issues/15469)

<!-- MAGETWO-90193  -->

*  You can now view an entire zoomed product image in Fotorama fullscreen from the FireFox browser. Previously, the image jumps and the user cannot view all portions of the image. [GitHub-7978](https://github.com/magento/magento2/issues/7978)

#### Web API framework

<!--  ENGCOM-2012  -->

*  The `array_push` function has been added to the list of forbidden functions. *Fix submitted by Leandro F. L. in pull request [16144](https://github.com/magento/magento2/pull/16144)*.

<!--  ENGCOM-1720  -->

*  A generated admin API token no longer expires immediately. Previously, when you created a token for an Admin user and have set   **Admin Token Lifetime (hours))**  to empty, Magento denied access  because the token immediately expired. *Fix submitted by Maikel Martens in pull request [15598](https://github.com/magento/magento2/pull/15598)*. [GitHub-15564](https://github.com/magento/magento2/issues/15564)

<!-- MAGETWO-92122  -->

*  The `GET /V1/returns?searchCriteria` endpoint retrieves `tracks` arrays as expected.

<!-- MAGETWO-86099  -->

*  The `GET /V1/returns/:id` endpoint retrieves `tracks` arrays as expected.

<!-- MAGETWO-73527  -->

*  `catalogProductAttributeRepository` now returns the `frontend_labels` value as expected.

#### Cache framework

<!-- MAGETWO-69847  -->

*  Magento no longer throws an exception when deploying static content on a deployment where Redis is used for cache management. [GitHub-9287](https://github.com/magento/magento2/issues/9287)

<!-- MAGETWO-84109  -->

*  When a layout is loaded from the cache, Magento now repopulates the list of applied layout handles to prevent any chance of a layout handle being reapplied later. *Fix submitted by Scott Buchanan in pull request [12314](https://github.com/magento/magento2/pull/12314)*.

### Dashboard

<!--  ENGCOM-1867  -->

*  The dashboard now displays the correct order amount on orders when deploying Magento on multiple storefronts with different currencies. *Fix submitted by Ankur Raiyani in pull request [15661](https://github.com/magento/magento2/pull/15661)*. [GitHub-15660](https://github.com/magento/magento2/issues/15660)

### Directory

<!--  ENGCOM-2073  -->

*  Magento now supports seven-digit Israeli postal code masks. *Fix submitted by Itay Raz in pull request [16250](https://github.com/magento/magento2/pull/16250)*.

### General

<!-- MAGETWO-90968  -->

*  Magento now uses the correct amounts when creating a credit memo for an order that was placed using store credit, a gift card, or reward points.

<!-- MAGETWO-91411  -->

*  Magento no longer sends duplicate delete requests as a result of an unstable Internet connection. Previously, unintentional mass deletion of products sometimes occurred as a result of an unstable Internet connection.

<!-- MAGETWO-91928  -->

*  You can now successfully save a product video for one store view in deployments that have several store views. Previously, when you saved a product video for one store view, Magento saved it for all store views, although customers could play the video on the original store only.

<!-- MAGETWO-91931  -->

*  Customer data is now fully loaded after restarting the browser during an unexpired user session. Previously,  the `section_data_ids` section of the session cookie was not properly completed. [GitHub-14912](https://github.com/magento/magento2/issues/14912)

<!-- MAGETWO-91000  -->

*  We've fixed an issue with unoptimized SQL queries in customer segments. Previously, the  customer segment was not saved, and MySQL crashed.

<!-- MAGETWO-90246  -->

*  When a customer creates a product review, the link to the product from the review in the customer's **My Account** > **My Product Review** is now SEO friendly.

<!-- MAGETWO-87356  -->

*  The My Invitations page now accurately displays the reward points amount in numbers. Previously, this page displayed the special character `%` instead of numbers.

<!-- MAGETWO-73512  -->

*  The Enterprise Reward refund logic  no longer permits administrators to grant double refunds.

<!-- MAGETWO-85112  -->

*  We moved the `isAllowed` method from `AccessChangeQuoteControl` to a separate service to optimize the logic that supports using recurrent payments in combination with pre-ordered products. *Fix submitted by Jeroen Van Leusden in pull request [12566](https://github.com/magento/magento2/pull/12566)*.

<!-- MAGETWO-83551  -->

*  The attribute checking logic has been optimized by reducing redundant checks. *Fix submitted by Freek Vandeursen in pull request [11554](https://github.com/magento/magento2/pull/11554)*.

<!-- MAGETWO-86239  -->

*  Magento no longer validates customer address attribute value length when the minimum/maximum length fields are not displayed on the Admin.

<!-- ENGCOM-1679  -->

*  The dropdown menu is now positioned as expected under the link on the UI Component listing. *Fix submitted by Ankur Raiyani in pull request [15661](https://github.com/magento/magento2/pull/15661)*. [GitHub-15660](https://github.com/magento/magento2/issues/15660)

<!-- MAGETWO-87120  -->

*  The timestamp field now includes indexes, which reduces the chances of deadlocks that can occur while  erasing old records.  *Fix submitted by Carlos Lizaga in pull request [13328](https://github.com/magento/magento2/pull/13328)*. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!-- ENGCOM-1767  -->

*  `setCateroryIds([])` has been corrected to `setCategoryIds([])` throughout the test suites. *Fix submitted by Neeta Kangiya in pull request [15621](https://github.com/magento/magento2/pull/15621)*. [GitHub-15590](https://github.com/magento/magento2/issues/15590)

<!-- ENGCOM-1762  -->

*  Menus with nested elements now align correctly. *Fix submitted by hitesh-wagento in pull request [15645](https://github.com/magento/magento2/pull/15645)*. [GitHub-7897](https://github.com/magento/magento2/issues/7897)

<!-- ENGCOM-1858  -->

*  An administrator can now successfully download a PDF or export data immediately after log in. Previously, an administrator could not download a PDF or export data successfully after log in, but was redirected to the Admin dashboard. *Fix submitted by Riccardo Tempesta  in pull request [15539](https://github.com/magento/magento2/pull/15539)*. [GitHub-15510](https://github.com/magento/magento2/issues/15510)

<!-- ENGCOM-1805  -->

*  Merchants can now apply styling by changing LESS variables in the Luma theme as expected. *Fix submitted by hitesh-wagento in pull request [15734](https://github.com/magento/magento2/pull/15734)*. [GitHub-15608](https://github.com/magento/magento2/issues/15608)

<!-- ENGCOM-1860  -->

*  Added a service configuration setting—Send Adminhtml and Frontend as Separate Apps—to collect and send separate data for frontend and adminhtml applications for New Relic reporting. See [New Relic Reporting]( https://docs.magento.com/m2/ce/user_guide/reports/new-relic-reporting.html?Highlight=New%20Relic%20service). *Fix submitted by Max Chadwick in pull request [12935](https://github.com/magento/magento2/pull/12935)*.

<!-- ENGCOM-1864  -->

*  Table alias prefixes in field mappings for customer group filter and sorting processors that were previously missing have been restored. Previous to this restoration, Magento threw this error when a merchant opened **Admin** > **Customers** > **All Customers**: `SQL Error: ambiguous column 'customer_group_id' in 'All customers' page in admin when extension attribute table is joined`. *Fix submitted by Maksim Gopey in pull request [15826](https://github.com/magento/magento2/pull/15826)*.

<!-- ENGCOM-1883  -->

*  `.limiter` now has the same parent selectors as `.pages`, which prevents clashes between styles and layouts. Previously, `.limiter` float was too generic. *Fix submitted by hitesh-wagento in pull request [15878](https://github.com/magento/magento2/pull/15878)*.

<!-- ENGCOM-1942  -->

*  The default `FormElementDependenceController` configuration is now extended by custom configuration rather than overridden.  *Fix submitted by Valerij Ivashchenko in pull request [16001](https://github.com/magento/magento2/pull/16001)*.

<!-- ENGCOM-1958  -->

*  `inline-block` issues with space and font-size in the Name form have been resolved. *Fix submitted by Daniel Ruf in pull request [16048](https://github.com/magento/magento2/pull/16048)*.

<!-- ENGCOM-1896  -->

*  Alignment and layout issues on  home  and category pages of the Hot Seller section have been resolved. *Fix submitted by Chirag Matholiya in pull request [15893](https://github.com/magento/magento2/pull/15893)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)

<!-- ENGCOM-1886  -->

*  Updated old font formats of the default fonts (`woff` and `woff2`). *Fix submitted by Daniel Ruf in pull request [15870](https://github.com/magento/magento2/pull/15870)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)

<!-- ENGCOM-2011  -->

*  We've corrected the return type of methods and  typos in `CategoriesJson.php`, `Engine.php`, `UrlRewrite.php`, and `ObserverConfig.php`. *Fix submitted by Saurabh Parekh in pull request [15993](https://github.com/magento/magento2/pull/15993)*.

<!-- ENGCOM-1991  -->

*  `@escapeNotVerified` annotations were replaced in `name.phtml` and `qty.phtml`. *Fix submitted by Riccardo Tempesta in pull request [15532](https://github.com/magento/magento2/pull/15532)*. [GitHub-15501](https://github.com/magento/magento2/issues/15501)

<!-- ENGCOM-1607  -->

*  We've removed redundant function calls in `app/code/Magento/CurrencySymbol/view/adminhtml/templates/grid.phtml`. *Fix submitted by Saurabh Parekh in pull request [15346](https://github.com/magento/magento2/pull/15346)*. [GitHub-15355](https://github.com/magento/magento2/issues/15355)

<!-- ENGCOM-1659  -->

*  `magnifier.js` now works no matter which mode is set. (`magnifier.js` offers the option of setting mode to 'inside' for an in-frame zoom.) *Fix submitted by Kacper Chara in pull request [15382](https://github.com/magento/magento2/pull/15382)*. [GitHub-4977](https://github.com/magento/magento2/issues/4977)

<!-- ENGCOM-2007  -->

*  The Change Password warning message no longer appears twice. *Fix submitted by Sanjay Patel in pull request [15774](https://github.com/magento/magento2/pull/15774)*. [GitHub-14895](https://github.com/magento/magento2/issues/14895)

<!-- ENGCOM-2559  -->

*  You can now add the `NOINDEX,NOFOLLOW` meta tag to the admin scope to instruct Google and other friendly bots to refrain from adding the Admin URL to search results. *Fix submitted by Itay Raz in pull request [17163](https://github.com/magento/magento2/pull/17163)*.

<!-- ENGCOM-2443  -->

*  The Create Account and Password Forget forms now include the required notice for relevant fields. *Fix submitted by Daniel Ruf in pull request [16965](https://github.com/magento/magento2/pull/16965)*.

<!-- ENGCOM-2437  -->

*  Reworked the  `addError`, `addSuccess` methods in several files. *Fix submitted by Tiago Sampaio in pull request [16921](https://github.com/magento/magento2/pull/16921)*.

<!-- ENGCOM-2398  -->

*  Minor improvements to  `app/code/Magento/CatalogRule/Model/Rule/Job.php` and `app/code/Magento/GroupedProduct/Model/Product/Initialization/Helper/ProductLinks/Plugin/Grouped.php`. *Fix submitted by Vladymyr Hrivinskyi in pull request [16900](https://github.com/magento/magento2/pull/16900)*.

<!-- ENGCOM-2282  -->

*  Refactored `app/code/Magento/User/Controller/Adminhtml/`  by removing the direct use of ObjectManager and included the dependencies using constructor dependency injection. *Fix submitted by AnshuMishra17 in pull request [16560](https://github.com/magento/magento2/pull/16560)*.

<!-- ENGCOM-2209  -->

*  `gallery.less` no longer imports `_responsive.less`. *Fix submitted by Karla Saaremäe in pull request [16579](https://github.com/magento/magento2/pull/16579)*.

<!-- ENGCOM-2384  -->

*  Added missing `width` property for the confirmation modal in `lib/web/css/source/components/_modals.less`. *Fix submitted by Vladymyr Hrivinskyi in pull request [16861](https://github.com/magento/magento2/pull/16861)*.

<!-- ENGCOM-2293  -->

*  Removed the redundant `font-size` attribute from the toolbar pager in  `lib/web/css/source/lib/_utilities.less`. *Fix submitted by Karla Saaremäe in pull request [16716](https://github.com/magento/magento2/pull/16716)*.

<!-- ENGCOM-2284  -->

*  Updated the "Reporting security issues" section of `README.md` to recommend that users create a bugcrowd account.  *Fix submitted by Tommy Quissens in pull request [16685](https://github.com/magento/magento2/pull/16685)*.

<!-- ENGCOM-2193  -->

*  The currency format that was previously broken for some locales now works as expected. Previously, broken currency formats resulted in an incorrect price amount on the product page. *Fix submitted by Vishal Gelani in pull request [15909](https://github.com/magento/magento2/pull/15909)*. [GitHub-11717](https://github.com/magento/magento2/issues/11717)

<!-- ENGCOM-2159  -->

*  Changed the **My Dashboard** string to **My Account** in multiple files. *Fix submitted by Daniel Ruf in pull request [16009](https://github.com/magento/magento2/pull/16009)*.

<!-- ENGCOM-1717  -->

*  Corrected the annotation to the `formatDateTime` function in `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file. *Fix submitted by Sanjay Patel in pull request [15602](https://github.com/magento/magento2/pull/15602)*.

<!-- ENGCOM-1658  -->

*  The `clickableOverlay` option now works as expected. *Fix submitted by virtua-pmakowski in pull request [15172](https://github.com/magento/magento2/pull/15172)*. [GitHub-7399](https://github.com/magento/magento2/issues/7399)

<!-- ENGCOM-1579  -->

*  The Instant Purchase module now works as expected. Previously, the `get($type)` method in `/Magento/InstantPurchase/Model/ShippingMethodChoose/DeferredShippingMethodChooserPool.php` threw an exception without showing the shipping method $type as it was hardcoded as 'chooser'. *Fix submitted by Marcel Hauri in pull request [15258](https://github.com/magento/magento2/pull/15258)*.

<!-- ENGCOM-1618  -->

*  Template files now follow Magento standard coding format. *Fix submitted by Vishal Gelani in pull request [15398](https://github.com/magento/magento2/pull/15398)*.

<!-- ENGCOM-1476  -->

*  Corrected `viewModel` to `view_model` where needed in `\Magento\Backend\Block\Template`. *Fix submitted by Abhishek Jakhotiya in pull request [15067](https://github.com/magento/magento2/pull/15067)*.

<!-- ENGCOM-1375  -->

*  Non-well-formed numeric values that were encountered in `app/code/Magento/Directory/Model/Currency.php` have been resolved. *Fix submitted by Mateusz Lerczak in pull request [14833](https://github.com/magento/magento2/pull/14833)*.

<!-- ENGCOM-1352  -->

*  The `README` file for the `magento2` repository now has Maintainers and Contributors sections. *Fix submitted by Stanislav Idolov in pull request [14790](https://github.com/magento/magento2/pull/14790)*.

<!-- ENGCOM-1338  -->

*  The documentation for `AdapterInterface::update` has been improved. *Fix submitted by Navarr Barnier in pull request [14769](https://github.com/magento/magento2/pull/14769)*.

<!-- MAGETWO-93272  -->

*  The product video feature is now GDPR-compliant.

### Gift cards

<!-- MAGETWO-92988  -->

*  Magento now displays the **Credit Memo** link  at the top of the page for orders with a total of 0 (zero). Previously, this link was missing, which prevented users from creating a credit memo for the order.

<!-- MAGETWO-92362  -->

*  You can now save gift cards without the price being changed on the Admin to an unacceptable format. Previously, Magento tried to save amounts in unacceptable formats (such as the inclusion of a comma in a four-digit price), which triggered an error.

<!-- MAGETWO-91925  -->

*  Magento no longer permits users to save a new gift card  without first completing the required values. Previously, when creating a gift card, users could save the card without having designated an amount, but the card could not be purchased. Magento also created a `report.CRITICAL: Warning` error message in the `system.log`.

<!-- MAGETWO- 91867 -->

*  Orders now retain gift message information on both item and order level. Previously, gift messages disappeared from an order when a customer logged into his account during checkout.

<!-- MAGETWO-91576  -->

*  Magento now maintains relationships between new gift card accounts when a customer purchases several gift cards in the same order.

<!-- MAGETWO-91400  -->

*  Magento now refunds only the exact amount used on a gift card if only the part of the gift card was  used. Previously, when a customer used a gift card account code to partially pay for an order,  and Magento subsequently created a credit memo for a portion of the order, the full amount of the gift card was refunded.

<!-- MAGETWO-86757  -->

*  Magento now generates the same number of gift card codes when the full order is invoiced as the customer selected when creating an order. Previously, for orders that included both physical products and multiple gift cards, the number of gift card codes  generated on an order corresponded to the quantity of the previous physical line items that the user had added to the cart before adding gift cards.

### Gift message

<!-- MAGETWO-91867  -->

*  Orders now retain gift message information on both item and order level. Previously, gift messages disappeared from an order when a customer logged into his account during checkout.

### Google Analytics

<!-- ENGCOM-1825  -->

*  Google analytics pageview is no longer triggered twice. *Fix submitted by Torben Höhn in pull request [15765](https://github.com/magento/magento2/pull/15765)*. [GitHub-12221](https://github.com/magento/magento2/issues/12221)

<!-- ENGCOM-2537  -->

*  `Magento\GoogleAnalytics\Observer\SetGoogleAnalyticsOnOrderSuccessPageViewObserver` is now covered by unit tests. *Fix submitted by Yaroslav Rogoza in pull request [17137](https://github.com/magento/magento2/pull/17137)*.

### Google Tag Manager

<!-- MAGETWO-91951  -->

*  The `addToCart` event triggers on the Google Task Manager console only when an item is added to the cart.  Previously, the event was triggered before the cart was updated.

<!-- MAGETWO-89532  -->

*  Google Analytics events are now triggered as expected. Specifically,  the  `addToCart` and `removeFromCart` events are not triggered until after a customer adds a product to the mini cart.

<!-- MAGETWO-87955  -->

*  Magento now accurately updates the mini cart when a customer removes a product while accessing a storefront using Internet Explorer 11.x. Previously, when a customer removed a product from the mini cart, Magento did not remove the product but instead threw this error, `(SCRIPT438: Object doesn't support property or method 'find'. File: sidebar.js, Line: 237, Column: 13 )`.

<!-- MAGETWO-88806  -->

*  Google Tag Manager product category data is now fully reported. Previously, the Google Tag Manager product category (Enhanced Ecommerce) data did not report all information.

### HTML

<!-- ENGCOM-2178  -->

*  Responsive table headers now work as expected. Previously, when no heading was present in the `data-th` attribute on a column for a responsive table in Magento, only a colon was present. *Fix submitted by Sean Templeton in pull request [16517](https://github.com/magento/magento2/pull/16517)*.

<!-- ENGCOM-1654  -->

*  Corrected HTML syntax in the `report.phtml` error template. *Fix submitted by abcpremium in pull request [15454](https://github.com/magento/magento2/pull/15454)*.

### Import/export

<!-- ENGCOM-2304  -->

*  Product import now updates the **Enable Qty Increments** field as expected. *Fix submitted by Sergey P in pull request [14379](https://github.com/magento/magento2/pull/14379)*. [GitHub-14351](https://github.com/magento/magento2/issues/14351)

<!-- ENGCOM-1549  -->

*  `Magento_ImportExport` now supports unicode characters in column names. Previously, column names such `vitamin_a_µg` were  marked invalid. *Fix submitted by Timon de Groot in pull request [15197](https://github.com/magento/magento2/pull/15197)*.

### Infrastructure

<!-- MAGETWO-92303  -->

*  Magento now sends email when the status of a Return Merchandise Authorization (RMA) changes to Return Received, Approved, or Rejected. Previously, no email was sent to the customer who created the order.

<!-- MAGETWO-89442  -->

*  Return Merchandise Authorization (RMA) calls now return order items and comments as expected.

<!-- MAGETWO-92302  -->

*  The RMA status label now shows on the email that Magento sends to customers when the status of an RMA changes.

<!-- MAGETWO-72090  -->

*  Magento now deselects only the attributes you choose to deselect when you set the **Use Default Value** setting on a store view to **no** for certain attributes. Previously, when you deselected the **Use Default Value** setting on a store view for certain attributes, Magento unselected other attributes as well.

<!-- MAGETWO-88615  -->

*  Magento now deploys the translations in `js-translation.json` file when deploying static content.  *Fix submitted by Sergey Dmitruk in pull request [4814](https://github.com/magento/magento2/pull/4814)*.

<!-- ENGCOM-2304  -->

*  Magento now updates the `Enable Qty Increments` field as expected during product import. *Fix submitted by Alexander Lukyanov in pull request [15144](https://github.com/magento/magento2/pull/15144)*. [GitHub-11354](https://github.com/magento/magento2/issues/11354)

<!-- ENGCOM-1875  -->

*  We've expanded the  HTTP request class by adding the  `isPostRequest` method. *Fix submitted by Pavel Usachev in pull request [12626](https://github.com/magento/magento2/pull/12626)*.

<!-- ENGCOM-1952  -->

*  You can now change only the primary button `font-weight` without changing regular button `font-weight` with LESS variables. *Fix submitted by Karla Saaremäe in pull request [16012](https://github.com/magento/magento2/pull/16012)*. [GitHub-15832](https://github.com/magento/magento2/issues/15832)

<!-- ENGCOM-1917  -->

*  We've added missing properties to the `Magento/Widget` component and removed a  reference to a non-existent class in the associated tests.  *Fix submitted by Marcel Hauri in pull request [15647](https://github.com/magento/magento2/pull/15647)*.

<!-- ENGCOM-1960  -->

*  We've improved the readability of `app/code/Magento/Backend/Block/Widget/Form/Element/Dependence.php`. *Fix submitted by Valerij Ivashchenko in pull request [16010](https://github.com/magento/magento2/pull/16010)*.

<!-- ENGCOM-1611  -->

*  Template syntax errors in `app/code/Magento/Theme/Block/Html/Breadcrumbs.php` have been corrected. *Fix submitted by Namrata in pull request [15339](https://github.com/magento/magento2/pull/15339)*. [GitHub-15345](https://github.com/magento/magento2/issues/15345)

<!-- ENGCOM-2107  -->

*  The calendar widget (`jQuery UI DatePicker`) now correctly displays more than one month. *Fix submitted by Burlacu Vasilii in pull request [16279](https://github.com/magento/magento2/pull/16279)*. [GitHub-7379](https://github.com/magento/magento2/issues/7379)

<!-- ENGCOM-2211  -->

*  An error with the template notation for `Magento_CatalogWidget` module has been fixed. *Fix submitted by Namrata in pull request [16530](https://github.com/magento/magento2/pull/16530)*. [GitHub-16529](https://github.com/magento/magento2/issues/16529)

<!-- ENGCOM-2077  -->

*  You can now use the `addTabAfter` method to add two or more tabs to the Admin  (for example, the Order View page) in the expected order. Previously, Magento did not preserve the correct sort order for the new tabs. *Fix submitted by Tiago Sampaio in pull request [16175](https://github.com/magento/magento2/pull/16175)*. [GitHub-16174](https://github.com/magento/magento2/issues/16174)

<!-- ENGCOM-2263  -->

*  The headers of the User Agent Rules table now align as expected with the content of the table's rows. *Fix submitted by Justin in pull request [16704](https://github.com/magento/magento2/pull/16704)*. [GitHub-16703](https://github.com/magento/magento2/issues/16703)

<!-- ENGCOM-2288  -->

*  We've added `@navigation-level0-item__hover__color` missing variable for mobile and tablet view. *Fix submitted by hitesh-wagento in pull request [16732](https://github.com/magento/magento2/pull/16732)*. [GitHub-15848](https://github.com/magento/magento2/issues/15848)

<!-- ENGCOM-2336  -->

*  Store view home pages in multistore deployments no longer display breadcrumbs. Previously, the first store view in a multistore deployment looked fine, but the other store views included unnecessary breadcrumbs on the home page.  *Fix submitted by Oleksandr Kravchuk in pull request [16732](https://github.com/magento/magento2/pull/16732)*. [GitHub-6504](https://github.com/magento/magento2/issues/6504)

<!-- ENGCOM-2412  -->

*  HTML minification now works as expected. *Fix submitted by Ronak Patel in pull request [16916](https://github.com/magento/magento2/pull/16916)*. [GitHub-5316](https://github.com/magento/magento2/issues/5316)

<!-- ENGCOM-2295  -->

*  The type of the `transport` event parameter  has been changed to `DataObject`. This change reverts a change from type `DataObject` to `Array()` made in a previous release. *Fix submitted by gwharton in pull request [16599](https://github.com/magento/magento2/pull/16599)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

<!-- ENGCOM-1467  -->

*  Transport variable can now be altered in the `email_invoice_set_template_vars_before` event. *Fix submitted by gwharton in pull request [15040](https://github.com/magento/magento2/pull/15040)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

<!-- ENGCOM-2591  -->

*  Replaced deprecated methods in the `app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/ApplyRules.php`, `app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/Delete.php`, `app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/Edit.php`, `app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/Save.php`, and `app/code/Magento/CatalogRule/Plugin/Indexer/Product/Attribute.php`. *Fix submitted by Tiago Sampaio in pull request [17227](https://github.com/magento/magento2/pull/17227)*.

<!-- ENGCOM-2553  -->

*  Replaced deprecated methods in 44 files. *Fix submitted by Tiago Sampaio in pull request [17035](https://github.com/magento/magento2/pull/17035)*.

<!-- ENGCOM-2533  -->

*  The `template.js` has been updated to make the `jquery` variable consistently use `$`. Previously, JavaScript in the `template.js` sometimes used `jquery` and sometimes `$`, and Magento threw an error when running in Internet Explorer. *Fix submitted by Angelo Maragna in pull request [17129](https://github.com/magento/magento2/pull/17129)*.

<!-- ENGCOM-2522  -->

*  Corrected an undefined class property in the `app/code/Magento/Backend/Block/Media/Uploader.php getConfigJson()` method.  *Fix submitted by Prince Patel in pull request [17099](https://github.com/magento/magento2/pull/17099)*.

<!-- ENGCOM-2476  -->

*  Corrected sticky footer in `page-main` container height on mobile devices. *Fix submitted by Denis Belevtsov in pull request [17006](https://github.com/magento/magento2/pull/17006)*. [GitHub-15118](https://github.com/magento/magento2/issues/15118)

<!-- ENGCOM-2458  -->

*  Corrected the return type of methods in `app/code/Magento/Catalog/Controller/Category/View.php`, `app/code/Magento/CatalogSearch/Model/Indexer/Fulltext/Action/DataProvider.php`, and `app/code/Magento/CatalogSearch/Model/ResourceModel/EngineInterface.php`. *Fix submitted by Pratik Oza in pull request [16988](https://github.com/magento/magento2/pull/16988)*.

<!-- ENGCOM-2480  -->

*  Style groups for mobile devices (`max-width`) are now specified in the correct order. *Fix submitted by Tejash Kumbhare in pull request [16959](https://github.com/magento/magento2/pull/16959)*. [GitHub-14476](https://github.com/magento/magento2/issues/14476)

<!-- ENGCOM-2446  -->

*  Corrected the namespace that is defined in `compare.phtml`. *Fix submitted by Ronak Patel in pull request [16978](https://github.com/magento/magento2/pull/16978)*.

<!-- ENGCOM-2424  -->

*  Edited verbose code in  `app/code/Magento/Customer/Controller/Account/LoginPost.php`. *Fix submitted by Glenn Cheng in pull request [16928](https://github.com/magento/magento2/pull/16928)*.

<!-- ENGCOM-2396  -->

*  Fixed annotations in the following methods: `lib/internal/Magento/Framework/Acl/AclResource/Config/Converter/Dom.php`, `lib/internal/Magento/Framework/Acl/AclResource/Config/SchemaLocator.php`, and `lib/internal/Magento/Framework/Acl/Loader/ResourceLoader.php`. *Fix submitted by Tiago Sampaio in pull request [16899](https://github.com/magento/magento2/pull/16899)*.

<!-- ENGCOM-2389  -->

*  Removed or edited code comments in the following files:

   *  `app/code/Magento/Backend/Block/Dashboard/Bar.php`

   *  `app/code/Magento/Catalog/Setup/InstallData.php`

   *  `app/code/Magento/Newsletter/Block/Adminhtml/Template/Edit.php`

   *  `app/code/Magento/Review/Block/Adminhtml/Add/Form.php`

   *  `app/code/Magento/Sales/Model/Order/Creditmemo.php`

   *  `app/code/Magento/Sales/view/adminhtml/templates/order/totals.phtml`. *Fix submitted by Pratik Oza in pull request [16891](https://github.com/magento/magento2/pull/16891)*.

<!-- ENGCOM-2404  -->

*  Improved product gallery block helper code (`app/code/Catalog/Block/Adminhtml/Product/Helper/Form/Gallery.php`). *Fix submitted by Valerij Ivashchenko in pull request [16889](https://github.com/magento/magento2/pull/16889)*.

<!-- ENGCOM-2388  -->

*  Removed duplicated string from `app/code/Magento/ProductVideo/i18n/en_US.csv`. *Fix submitted by Valerij Ivashchenko in pull request [16882](https://github.com/magento/magento2/pull/16882)*.

<!-- ENGCOM-2327  -->

*  Refactored code in `dev/tests/static/framework/Magento/Sniffs/NamingConventions/ReservedWordsSniff.php` so that an undefined index warning is no longer triggered when using uppercase reserved word *Fix submitted by Freek Vandeursen in pull request [16785](https://github.com/magento/magento2/pull/16785)*.

<!-- ENGCOM-2274  -->

*  Regex in `ControllerAclTest::getControllerPath()` has been changed to avoid classes that are under a namespace with a controller component (such as controller plugins) being interpreted as controllers. *Fix submitted by Freek Vandeursen in pull request [16707](https://github.com/magento/magento2/pull/16707)*.

<!-- ENGCOM-2259  -->

*  Knockout template files now include a `title` attribute in the `img` tag. *Fix submitted by Namrata in pull request [16691](https://github.com/magento/magento2/pull/16691)*.

<!-- ENGCOM-2256  -->

*  Added `title` attribute to links as needed for compatibility with w3c standards to these files: `app/code/Magento/Backend/view/adminhtml/templates/page/header.phtml`,  `app/code/Magento/Backend/view/adminhtml/templates/widget/form/element/gallery.phtml`,  `app/code/Magento/Theme/view/frontend/templates/html/bugreport.phtml`, `app/code/Magento/Theme/view/frontend/templates/html/header/logo.phtml`,  and `app/code/Magento/Ui/view/base/web/templates/block-loader.html`. *Fix submitted by Namrata in pull request [16689](https://github.com/magento/magento2/pull/16689)*.

<!-- ENGCOM-2196  -->

*  Search icons are now defined by header icon variables. *Fix submitted by Karla Saaremäe in pull request [16559](https://github.com/magento/magento2/pull/16559)*.

<!-- ENGCOM-2202  -->

*  Module namespace is now defined before template path name. Previously, when we overrode any core block to any custom module, Magento threw an error because trying to find the template file in the custom module if the module namespace is not defined before the template path. *Fix submitted by Prince Patel in pull request [16576](https://github.com/magento/magento2/pull/16576)*.

<!-- ENGCOM-2191  -->

*  Corrected the comment for the `Magento_Setup` module `includeClasses` function. *Fix submitted by Namrata in pull request [16549](https://github.com/magento/magento2/pull/16549)*.

<!-- ENGCOM-2162  -->

*  The  `module:status` command now clearly provides an easily parsed listing of all enabled and disabled modules. *Fix submitted by Jisse Reitsma in pull request [15543](https://github.com/magento/magento2/pull/15543)*.

<!-- ENGCOM-1979  -->

*  Fixed the `false` value for the `cache_lifetime` argument in `Magento/Swatches/view/frontend/layout/checkout_cart_configure_type_configurable.xml`. *Fix submitted by yuriyDne in pull request [16086](https://github.com/magento/magento2/pull/16086)*.

<!-- ENGCOM-2143  -->

*  CSRF tokens are now considered sensitive strings. *Fix submitted by Robert in pull request [13509](https://github.com/magento/magento2/pull/13509)*.

<!-- ENGCOM-2039  -->

*  Refactored JavaScript code in `popup.phtml` and `popup.js`. *Fix submitted by IvanPletnyov in pull request [16216](https://github.com/magento/magento2/pull/16216)*.

<!-- ENGCOM-1630  -->

*  Removed extraneous cursor property. *Fix submitted by Daniel Ruf in pull request [15305](https://github.com/magento/magento2/pull/15305)*.

<!-- ENGCOM-1688  -->

*  `app/code/Magento/Marketplace/view/adminhtml/templates/partners.phtml` now uses the stored value of the `getPartners` method instead of calling same method again. *Fix submitted by Saurabh Parekh in pull request [15517](https://github.com/magento/magento2/pull/15517)*.

<!-- ENGCOM-1655  -->

*  Added missing lowercase conversion on grouped product assignation. *Fix submitted by Juan Alonso in pull request [15312](https://github.com/magento/magento2/pull/15312)*.

<!-- ENGCOM-1643  -->

*  Removed code responsible for multiple add-to-cart initializations when Magento loads the product listing. *Fix submitted by Vova Yatsyuk in pull request [15409](https://github.com/magento/magento2/pull/15409)*.

<!-- ENGCOM-1641  -->

*  Refactored JavaScript code from `popup.phtml` to meet Magento coding standards. *Fix submitted by Rahul Kachhadiya in pull request [15341](https://github.com/magento/magento2/pull/15341)*.

<!-- ENGCOM-1577  -->

*  Removed redundant PHPdoc comment and deprecated private method `getSerializer` in `\Magento\Customer\Model\Customer\NotificationStorage` class. *Fix submitted by adrian-martinez-interactiv4 in pull request [15262](https://github.com/magento/magento2/pull/15262)*.

<!-- ENGCOM-1520  -->

*  CSS code is now automatically updated in the browser. Previously, users had to press **CTRL+F5**  to see CSS changes. *Fix submitted by Alexander Lukyanov in pull request [15144](https://github.com/magento/magento2/pull/15144)*. [GitHub-11354](https://github.com/magento/magento2/issues/11354)

<!-- ENGCOM-1515  -->

*  Concrete type hints for product and category resources have been added to `app/code/Magento/Catalog/Model/Category.php` and `app/code/Magento/Catalog/Model/Product.php` to help with static analysis and IDE autocompletion. *Fix submitted by Yaroslav Rogoza in pull request [15136](https://github.com/magento/magento2/pull/15136)*.

<!-- ENGCOM-1452  -->

*  Replaced `rand` with `rand_int` in several modules. *Fix submitted by Daniel Ruf in pull request [15017](https://github.com/magento/magento2/pull/15017)*.

<!-- ENGCOM-1446  -->

*  Optimized `if-condition` in `/Magento/Catalog/Controller/Adminhtml/Product/Initialization/Helper/AttributeFilter.php`. *Fix submitted by Valerij Ivashchenko in pull request [15002](https://github.com/magento/magento2/pull/15002)*.

<!-- ENGCOM-1453  -->

*  We've upgraded to Node.js 8 from Node.js 6. *Fix submitted by Daniel Ruf in pull request [15018](https://github.com/magento/magento2/pull/15018)*.

<!-- ENGCOM-1434  -->

*  Replaced `template/path` with `Module_Name::template/path` in the block class to ensure extensibility of the class. Previously, if the source block classes referenced a template without specifying the module name, then block render failed with this error: `Invalid template file`. *Fix submitted by Abhishek Jakhotiya in pull request [14946](https://github.com/magento/magento2/pull/14946)*.

<!-- ENGCOM-1405  -->

*  Replaced the `\Magento\Backend\Helper\Data` parameter with `\Magento\Backend\Model\UrlInterface` to make them identical with the  constructor. *Fix submitted by Abhishek Jakhotiya in pull request [14946](https://github.com/magento/magento2/pull/14946)*.

<!-- ENGCOM-1403  -->

*  The return type of `addToCartPostParams` in `app/code/Magento/Catalog/Block/Product/ListProduct.php` has been changed to array. *Fix submitted by Sean Templeton in pull request [14946](https://github.com/magento/magento2/pull/14946)*.

<!-- ENGCOM-1270  -->

*  Datepicker now correctly converts date formats in locales other than `en-US`. *Fix submitted by Tao Sasaki in pull request [14627](https://github.com/magento/magento2/pull/14627)*.

<!-- ENGCOM-1270  -->

*  `default_head_blocks.xml` now contains the `order` attribute for setting the load order of stylesheets. *Fix submitted by Tao Sasaki in pull request [14290](https://github.com/magento/magento2/pull/14290)*.

<!-- ENGCOM-2455  -->

*  Magento now displays validation messages on the advanced search form as expected if you submit the advanced search form without entries. [GitHub-8131](https://github.com/magento/magento2/issues/8131)

<!-- MAGETWO-84477  -->

*  `\Magento\Framework\Reflection\TypeProcessor` methods have been simplified.

<!-- MAGETWO-87024  -->

*  Magento no longer unsets the taxed shipping total information before returning the total tax.

### JavaScript

<!-- ENGCOM-1640  -->

*  Refactored the  JavaScript code of the button split widget. *Fix submitted by amittiwari024 in pull request [15351](https://github.com/magento/magento2/pull/15351)*. [GitHub-15354](https://github.com/magento/magento2/issues/15354)

### Klarna

<!-- BUNDLE-1489  -->

*  Magento no longer throws multiple JavaScript errors when a customer selects Klarna from the Review & Payments page.

### Module Manager

<!-- ENGCOM-1633  -->

*  Module Manager module grid now works as expected. *Fix submitted by Alex Gusev in pull request [15211](https://github.com/magento/magento2/pull/15211)*. [GitHub-15192](https://github.com/magento/magento2/issues/15192)

### Newsletter

<!-- MAGETWO-88217  -->

*  Guest users can now sign up for newsletters for multiple stores. Previously, when a guest user signed up for a newsletter from multiple stores, Magento sent a subscription confirmation message, but did not successfully subscribe the user.

<!-- MAGETWO-87969  -->

*  Magento now correctly updates newsletter subscriptions  when the customer is registered on two stores. Previously, when the customer tried to subscribe to the newsletter from a second store, Magento displayed this message, `You are (not) subscribed to "General Subscription"`.

<!--  ENGCOM-1573  -->

*  The newsletter subscription confirmation message does not display after a customer clicks the link that is included in the confirmation email. *Fix submitted by Kaushik Chavda in pull request [15247](https://github.com/magento/magento2/pull/15247)*. [GitHub-14747](https://github.com/magento/magento2/issues/14747)

<!-- ENGCOM-2144  -->

*  Magento now sends a confirmation request email to the customer when she unsubscribes to a newsletter. *Fix submitted by Lyzun Oleksandr in pull request [15464](https://github.com/magento/magento2/pull/15464)*. [GitHub-15218](https://github.com/magento/magento2/issues/15218)

<!-- ENGCOM-2379  -->

*  Removed the direct use of the object manager and loaded the dependency via constructor dependency injection in `app/code/Magento/Newsletter/Controller/Adminhtml/Subscriber/MassDelete.php` and `app/code/Magento/Newsletter/Controller/Adminhtml/Subscriber/MassUnsubscribe.php`. *Fix submitted by AnshuMishra17 in pull request [16851](https://github.com/magento/magento2/pull/16851)*.

<!-- ENGCOM-2272  -->

*  Newsletter registration now works the same when registered customers subscribe from My Account and or from the newsletter block. *Fix submitted by Lyzun Oleksandr in pull request [15479](https://github.com/magento/magento2/pull/15479)*.

<!-- ENGCOM-2236  -->

*  Removed the redundant return statement from  `getJsTemplateName` function comment in the `Magento_Newsletter`'s block file. *Fix submitted by Namrata in pull request [16645](https://github.com/magento/magento2/pull/16645)*.

### Payment methods

#### Braintree

<!-- MAGETWO-89221  -->

*  You can now cancel an order that was placed with Braintree when the Braintree authorization had expired.

<!-- MAGETWO-84929  -->

*  All invoices now have the merchant account ID set in the store configuration for the Braintree payment method. Previously, the default merchant account ID was sent to Braintree for any subsequent partial order invoices after the initial invoice is generated.

<!-- ENGCOM-2149  -->

*  Braintree configuration (`app/code/Magento/Braintree/etc/adminhtml/system.xml`) now contains `showInStore` attributes. *Fix submitted by Andreas Schrammel in pull request [16458](https://github.com/magento/magento2/pull/16458)*.

<!-- ENGCOM-1513  -->

*  Magento now retains the correct address information when a customer using Braintree's **Pay with PayPal** button to complete an order navigates back to the shipping step and changes the shipping address fields. *Fix submitted by Vova Yatsyuk in pull request [15133](https://github.com/magento/magento2/pull/15133)*.

#### PayPal

<!-- MAGETWO-92820  -->

*  Customers can now continue creating an order  after a PayFlow Pro payment has been declined. Previously, under these circumstances. the customer could not continue his purchase.

<!-- MAGETWO-89995  -->

*  Paypal Onboarding has been configured to work for  merchants from  countries other than the United States.

<!-- MAGETWO-88244  -->

*  Magento now accurately displays the status of PayPal orders. Previously, the status of PayPal orders was displayed only as  **Processing**.

<!-- ENGCOM-1372  -->

*  Magento no longer sends duplicate order confirmation emails when a customer uses PayPal Express to complete an order. *Fix submitted by Rocket Web in pull request [14820](https://github.com/magento/magento2/pull/14820)*.

<!-- MAGETWO-88759  -->

*  Tax amount calculation for payments processed through PayPal now works as expected. Previously, Magento sent the wrong amount to PayPal when a discount was applied to an order.

<!--  ENGCOM-1462  -->

*  The `Allmethods config` source model now reports the full list of payment methods as expected. *Fix submitted by Manuel Schmid in pull request [15032](https://github.com/magento/magento2/pull/15032)*. [GitHub-13460](https://github.com/magento/magento2/issues/13460)

<!-- MAGETWO-85908  -->

*  You can now cancel an order placed through Cybersource when the fraud filters are triggered.

<!-- MAGETWO- 92625 -->

*  Magento now emails customer order confirmations for orders that are placed through Worldpay.

<!-- MAGETWO-92784  -->

*  Magento now correctly applies free shipping to an order after the customer applied the free shipping code  during checkout.

<!-- MAGETWO-90571  -->

*  Magento no longer sends Admin orders to Signifyd for review when Signifyd is disabled on the website on which the administrator is logged in.

<!-- MAGETWO-90533  -->

*  Magento now successfully creates shipping labels for a return merchandise authorization (RMA) when using FedEx Smart Post as the shipping option. Previously, Magento threw an error under these circumstances.

<!-- MAGETWO-84495  -->

*  Magento now sends email about payment failures to customers. Previously, Magento did not send a customer email, but instead logged an error in  `support.log`, and displayed this message on the storefront, **Transaction has been declined. Please try again later**.

<!--  ENGCOM-1648  -->

*  Magento no longer throws an error when multiple payment methods  are enabled. Previously, when a merchant tried to enable more than one payment method from the Admin, Magento displayed this error in the console, `Found elements with non-unique id billing-address-form`. *Fix submitted by Neeta Kangiya in pull request [15349](https://github.com/magento/magento2/pull/15349)*. [GitHub-15348](https://github.com/magento/magento2/issues/15348)

<!-- MAGETWO-92625  -->

*  Magento now sends order confirmation emails as expected for orders purchased with WorldPay.

<!-- ENGCOM-2021  -->

*  A type error in the payment void method of the Authorizenet module has been fixed. *Fix submitted by Oleh Kravets in pull request [16194](https://github.com/magento/magento2/pull/16194)*. [GitHub-16184](https://github.com/magento/magento2/issues/16184)

### Pagecache

<!-- MAGETWO-92757  -->

*  Full-page cache now works as expected in multistore deployments. Previously, when you opened the URL of a non-default store in a multistore deployment, full-page cache did not return the URL.

### Performance

<!-- MAGETWO-47320  -->

*  The catalog rule re-indexing operation has been optimized, and average re-indexing time (which depends on rule conditions) has improved by more than  80%.  Previously, a full catalog rule re-index operation on a medium B2C store took more than 20 minutes.

<!-- MAGETWO-86143  -->

*  Merchants can now improve store performance by disabling Magento Report functionality if business function does not require this capability. A new configuration setting  (**System Configuration**: **General** > **Reports** > **General Options**) allows merchants to disable Magento Reports, which is recommended practice  if a merchant's business function does not require this capability.

<!-- MAGETWO-92154  -->

*  You can change store locale without the exporting and importing configuration process. While Magento is in Production and the `SCD_ON_DEMAND` is enabled, the Magento store and admin locale options are available. See [Change locales]({{ site.baseurl }}/cloud/live/sens-data-over.html#change-locales).

<!-- MAGETWO-90572  -->

*  The time required to load category or product pages for products that are configured with many attributes (more than 500) has been significantly reduced. Refactoring the logic for product attribute retrieval has resulted in a reduction of load time of almost 90% for certain scenarios.

<!-- MAGETWO-88670  -->

*  The time required to load a store’s home page has been reduced noticeably when the top menu contains many categories.  (Load time is still affected by the number of categories and the structure of the top menu.)

<!-- ENGCOM-1294 -->

*  The speed of catalog price rule save operations has been improved by these changes:

   *  elimination of unnecessary reindexing

   *  improvement to the way that the `getMatchingProductIds` function fetches products, which has eliminated unnecessary checks of the data set. *Fix submitted by Andrey Zabara in pull request [14707](https://github.com/magento/magento2/pull/14707)*.

<!-- ENGCOM-1302 -->

*  The ID to SKU lookup process for tier prices has been optimized. Previously, with a large number of tier or group prices, each tier would separately make a database query to look up the associated SKU. *Fix submitted by Todd Christensen in pull request [14699](https://github.com/magento/magento2/pull/14699)*.

### Product video

<!-- MAGETWO-93792  -->

*  Magento now populates the YouTube video URL and Title fields with the same values as are populated on the default store view on multisite deployments. (These fields are global scope attributes and should be the same on all storefronts.) Previously, Magento left these fields blank in multisite deployments.

### Quote

<!-- ENGCOM-1414  -->

*  Magento now displays the correct product price for an order created from the Admin in multisite deployments. Previously, when an order was created from the Admin in a multisite deployment where products were assigned different prices per store view, Magento defaulted to the product price of the primary storeview if the order was edited or updated. *Fix submitted by Riccardo Tempesta in pull request [14904](https://github.com/magento/magento2/pull/14904)*. [GitHub-14869](https://github.com/magento/magento2/issues/14869)

<!-- ENGCOM-1441  -->

*  Magento now successfully saves the value of `REMOTE_IP` when a customer uses an IPV6 (Internet Protocol version 6) address. Previously, this value was only partially saved in the `sales_order` and `quote` tables.  *Fix submitted by George Schiopu in pull request [14976](https://github.com/magento/magento2/pull/14976)*. [GitHub-10395](https://github.com/magento/magento2/issues/10395)

<!-- ENGCOM-1885  -->

*  Coupon codes now work for guest users through the web API as well as from the storefront. *Fix submitted by Marcin Dykas in pull request [15320](https://github.com/magento/magento2/pull/15320)*. [GitHub-14056](https://github.com/magento/magento2/issues/14056)

<!-- ENGCOM-2254  -->

*  Magento no longer runs an SQL query on every item in the database when a quote is empty, which has improved the performance of the checkout process. *Fix submitted by Sean Templeton in pull request [16675](https://github.com/magento/magento2/pull/16675)*.

### Reports

<!-- ENGCOM-2215  -->

*  The timezone has been removed from the date when Magento retrieves the current month from a UTC timestamp. *Fix submitted by Prince Patel in pull request [16584](https://github.com/magento/magento2/pull/16584)*. [GitHub-15940](https://github.com/magento/magento2/issues/15940)

### Review

<!-- ENGCOM-1535  -->

*  Removed the unused class declaration from controller's index action and the unused code in the comment block from the template file in `app/code/Magento/Review/view/frontend/templates/redirect.phtml` and `app/code/Magento/Version/Controller/Index/Index.php`. *Fix submitted by Yogesh Suhagiya in pull request [15173](https://github.com/magento/magento2/pull/15173)*.

### Rule

<!-- MAGETWO-89220  -->

*  A cart rule that uses  a `subselection` condition now works as executed. Previously, cart rules with this condition automatically granted a discount.

<!-- ENGCOM-1961  -->

*  The retrieval of first array elements in the following files has been improved: `app/code/Magento/Rule/Model/Action/AbstractAction.php` and `app/code/Magento/Rule/Model/Condition/Combine.php`. *Fix submitted by Thomas Klein in pull request [16053](https://github.com/magento/magento2/pull/16053)*. [GitHub-15940](https://github.com/magento/magento2/issues/15940)

<!-- ENGCOM-1583  -->

*  The condition category chooser now handles multiple nested categories as expected. Previously,  if a cart rule contained several nested categories, no categories appeared on the page, the page  became unresponsive,  and  eventually crashed. *Fix submitted by Keith Bentrup in pull request [15265](https://github.com/magento/magento2/pull/15265)*. [GitHub-15121](https://github.com/magento/magento2/issues/15121)

### Sales

<!-- MAGETWO-93102  -->

*  Order status now remains in the Complete state after Magento refunds store credit on a partial credit memo. Previously, under these circumstances, Magento changed the status of the order to Closed.

<!-- MAGETWO-92847  -->

*  You can now create multiple credit memos in one session and save each successfully. Previously, Magento displayed this error when you tried to save a second credit memo after creating the first memo: `Could not save credit memo`.

<!-- MAGETWO-92899  -->

*  Magento now displays any errors that occur during order creation in the browser console. Previously, Magento displayed this message: `Uncaught ReferenceError: order is not defined during order creation` instead of a specific error message.

<!-- MAGETWO-91466  -->

*  The `POST /V1/shipment` endpoint processes `tracks` arrays as expected.

<!-- MAGETWO-90496  -->

*  Magento no longer reverts to the country associated with the default website when a customer edits the billing address for an order. Previously, if a customer edited the shipping address for an order, Magento would reset the billing address to the default address specified for the default website.

<!-- ENGCOM-2148  -->

*  Credit memo email template file incorrect object types have been corrected. Previously, when a merchant created a credit memo and checked the **Email** checkbox, Magento threw an error. *Fix submitted by Joseph Maxwell in pull request [16438](https://github.com/magento/magento2/pull/16438)*.

<!-- MAGETWO-89238  -->

*  Performance issues that resulted from disabling invoice emails have been resolved.

<!-- ENGCOM-2085  -->

*  The Invoices grid now reflects changes in invoice state as expected. *Fix submitted by JeroenVanLeusden in pull request [16286](https://github.com/magento/magento2/pull/16286)*.

<!-- ENGCOM-1892  -->

*  You can now set the `is_visible_on_front` parameter from the `addStatusHistoryComment` of the order mode. Previously, you could set the `is_visible_on_front` parameter  from the Admin only. *Fix submitted by Mark Shust in pull request [15637](https://github.com/magento/magento2/pull/15637)*.

<!-- ENGCOM-2024  -->

*  Module name space is now declared before the template pathname in `Magento_Sales::order/info.phtml`. *Fix submitted by Ronak Patel in pull request [16206](https://github.com/magento/magento2/pull/16206)*.

<!-- ENGCOM-1529  -->

*  The `addFieldToFilter` has been added to `addressCollection` in  `app/code/Magento/Sales/Setup/UpgradeData.php`, which optimizes the process of collecting addresses during upgrade. *Fix submitted by Dmytro Cheshun in pull request [15615](https://github.com/magento/magento2/pull/15615)*.

<!-- ENGCOM-1623  -->

*  Invoice prefixes now contain the correct store ID when Magento is deployed in a multistore environment. Previously, Magento always created the invoice number using the default store view ID. *Fix submitted by Sanjay Patel in pull request [15615](https://github.com/magento/magento2/pull/15615)*. [GitHub-14063](https://github.com/magento/magento2/issues/14063)

<!-- ENGCOM-1531  -->

*  The `GET /V1/orders/items/{id}` request now returns `parent_item`. *Fix submitted by Sanjay Patel in pull request [15615](https://github.com/magento/magento2/pull/15615)*.

### Sales rules

<!-- MAGETWO-91797  -->

*  Cart price rules with associated coupons are no longer affected by edits to scheduled updates.

<!-- ENGCOM-2122  -->

*  The  `discount` label in the `app/code/Magento/SalesRule/view/frontend/web/js/view/summary/discount.js` file is now compatible with custom module discount.  *Fix submitted by Rodrigo Santellan in pull request [16093](https://github.com/magento/magento2/pull/16093)*.

### Search

<!-- ENGCOM-1381  -->

*  Magento no longer throws an error when a customer uses quick search to search on a term that does not exist in the search database. Previously, Magento returned this error, `TypeError: this._getFirstVisibleElement(...).addClass is not a function`. *Fix submitted by Julien ANQUETIL in pull request [14839](https://github.com/magento/magento2/pull/14839)*. [GitHub-14274](https://github.com/magento/magento2/issues/14274)

<!-- ENGCOM-1616  -->

*  Customers can now use the **Enter** key to submit searches from a page header. Previously, when a customer used the **Enter** key to submit a search query, event handlers that were bound to the form submit (through jQuery) were fired twice. *Fix submitted by Amjad M in pull request [15340](https://github.com/magento/magento2/pull/15340)*. [GitHub-13793](https://github.com/magento/magento2/issues/13793)

<!-- ENGCOM-1887  -->

*  Swagger now handles `searchCriteria`-related requests as expected. *Fix submitted by Jakub in pull request [15040](https://github.com/magento/magento2/pull/15040)*. [GitHub-15322](https://github.com/magento/magento2/issues/15322)

<!--  MAGETWO-85786  -->

*  The Admin panel search now filters catalogs as expected. Previously, if a merchant tried to narrow a search when using the Search tool in the Admin panel, Magento displayed the full catalog view without narrowing down the list. *Fix submitted by Pavel in pull request [12735](https://github.com/magento/magento2/pull/12735)*. [GitHub-7861](https://github.com/magento/magento2/issues/7861)

<!--  ENGCOM-1415  -->

*  You can now use an asterix when searching on customer names. Previously, if you used an asterix in a search query, Magento displayed this message, `Something went wrong with processing the default view and we have restored the filter to its original state.` *Fix submitted by Riccardo Tempesta  in pull request [14905](https://github.com/magento/magento2/pull/14905)*. [GitHub-14855](https://github.com/magento/magento2/issues/14855)

<!-- ENGCOM-2455  -->

*  Magento now displays validation messages as needed on advanced searches. Previously, Magento did not display a message even after a customer submitted the advanced search form with no entries. *Fix submitted by Ben Robie in pull request [16952](https://github.com/magento/magento2/pull/16952)*. [GitHub-8131](https://github.com/magento/magento2/issues/8131)

<!-- ENGCOM-2245  -->

*  Server load has been reduced for advanced searching.  Previously, when a customer entered text in the search suggestion box, Magento immediately sent every character to the server. The auto-complete box now delays  sending the request. *Fix submitted by Sean Templeton in pull request [16669](https://github.com/magento/magento2/pull/16669)*.

<!-- ENGCOM-1672  -->

*  You can now successfully clone the minisearch widget. *Fix submitted by Daniel Ruf in pull request [15485](https://github.com/magento/magento2/pull/15485)*.

### Shipping

<!--  ENGCOM-2033  -->

*  The shipping and estimated tax form now display country, city, and postcode fields as expected. *Fix submitted by [Alexander Kras'ko](https://github.com/0m3r) in pull request [16213](https://github.com/magento/magento2/pull/16213)*. [GitHub-8222](https://github.com/magento/magento2/issues/8222)

<!--  ENGCOM-1675  -->

*  A method with a misspelled name was deprecated and the new method with correct spelling added to `app/code/Magento/Multishipping/Block/Checkout/AbstractMultishipping.php`. *Fix submitted by Anna Völkl in pull request [15514](https://github.com/magento/magento2/pull/15514)*.

### Store

<!--  ENGCOM-1706  -->

*  Magento now adds the correct store code to product URLs in stores with more than one store view when  **Stores** > **Settings** > **Configuration** > **General** > **Web** > **Add Store Code to Urls** is set to **yes**. *Fix submitted by Elias Kotlyar in pull request [15566](https://github.com/magento/magento2/pull/15566)*. [GitHub-15565](https://github.com/magento/magento2/issues/15565)

<!--  ENGCOM-1249  -->

*  Magento now displays store views as expected when you select **Stores** > **Terms and Conditions**. *Fix submitted by afirlejczyk in pull request [14546](https://github.com/magento/magento2/pull/14546)*. [GitHub-13944](https://github.com/magento/magento2/issues/13944)

#### Elasticsearch

<!-- MAGETWO-92142  -->

*  Bundle products are now indexed as expected in Elasticsearch.

<!-- MAGETWO-86153  -->

*  Elasticsearch now correctly calculates the relevance of quick search results according to selected attribute search weights.

#### Admin global search

<!-- MAGETWO-86658  -->

*  Admin global search preview now works as expected. Previously, this feature worked inconsistently, and search results  differed depending on which area was being searched  (for example, Products, Categories, or Customers).

<!-- MAGETWO-86289  -->

*  The Admin global search now returns results that match the keyword for all available pages, or if a user searches in  specific sections, the search feature now returns only the results that matched the key words in those specific sections. Previously, the Admin global search did not return results that matched the specified keywords and did not restrict results to specified sections.

<!-- MAGETWO-85786  -->

*  Catalogs are now correctly filtered by the Admin search bar. Previously, if you attempted to use the Search tool in the Admin, and selected "XX in Products", Magento displayed the full catalog view without narrowing down the list. *Fix submitted by Pavel in pull request 12735*. [GitHub-12193](https://github.com/magento/magento2/issues/12193), [GitHub-7861](https://github.com/magento/magento2/issues/7861)

### Shipping

<div class="bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>

<!-- MAGETWO-92217  -->

*  The free shipping cart price rule now works as expected when **UPS shipping method** is enabled and **Free Shipping** is set to "For matching items only".

<!-- MAGETWO-91035  -->

*  The shipping progress dates displayed in tracking popup for FedEx shipping are now accurate.

### Sitemap

<!-- MAGETWO-92781  -->

*  Sitemaps generated by `cron` no longer display  `/pub/` in image URLs when  `docroot` is set to `/pub`. Previously, if the `docroot` was set to `pub` and `BASE MEDIA URL` was not set, the cron-generated sitemap  generated incorrect image URLs.

<!-- ENGCOM-1073  -->

*  Magento now generates correct product URLs for sitemaps. Previously, when the **Use Categories Path for Product URLs** attribute was set to **no**  in **Configuration** >  **Catalog** > **Search Engine Optimization**, Magento generated the wrong product URL in the sitemap.

<!-- ENGCOM-1866  -->

*  Images in XML sitemap are no longer always linked to the primary store in a multistore deployment. *Fix submitted by Steven de Jong in pull request [15689](https://github.com/magento/magento2/pull/15689)*. [GitHub-15588](https://github.com/magento/magento2/issues/15588)

<!-- ENGCOM-1377  -->

*  Split sitemaps now use the index sitemap name as a prefix. Previously, when generating large sitemaps that result in a single index sitemap and several smaller split sitemap files, the split sitemap files did not use the same name prefix as the parent. *Fix submitted by James Halsall in pull request [14836](https://github.com/magento/magento2/pull/14836)*.

### Staging

<!-- MAGETWO-90682  -->

*  Banners remain assigned to a cart rule after a staging Update is applied. Previously, a banner was unassigned from the cart rule after a staging update was applied.

<!-- MAGETWO-91889  -->

*  Magento now rolls  back updated changes to their pre-update state  when a merchant deletes an active Scheduled Update. Previously, some products were removed from their assigned categories (and categories were removed from the Admin) when an active product update was deleted.

<!-- MAGETWO-92509  -->

*  You can now successfully re-order a configurable product. Previously, a schedule update for one configurable product affected other ordered configurable products.

<!-- MAGETWO-89779  -->

*  Magento no longer unexpectedly locks up CMS pages when a merchant changes a scheduler end date. Previously, when a merchant updated the end date for a CMS page after the current scheduler ended, Magento generated an error, and the merchant could no longer access any CMS page from the Admin.

<!-- MAGETWO-72815  -->

*  Merchants can now edit a schedule update as expected. Previously, updating schedule data removed the  product from the Admin product list.

<!-- MAGETWO-86032  -->

*  Magento no longer deletes products from the Admin product list after a merchant deletes its active schedule update. This deletion only appeared after the scheduled update time.

<!--  ENGCOM-2335  -->

*  Magento no longer throws an error when a merchant edits a product from the Admin when reviews are disabled. *Fix submitted by Oleksandr Kravchuk in pull request [70](https://github.com/magento/magento2/pull/70)*. [GitHub-6264](https://github.com/magento/magento2/issues/6264)

<!-- MAGETWO-83706  -->

*  Scheduled updates to an existing group price or special price no longer remove the previously configured price. Previously, Magento removed the configured price or reverted the price to its original value after the scheduled update expired.

### Store

<!--  ENGCOM-2530  -->

*  The `getUrlInStore()` method no longer returns URLs that contain the store code, which has shortened the extremely long URLs it previously returned. *Fix submitted by Burlacu Vasilii in pull request [16468](https://github.com/magento/magento2/pull/16468)*. [GitHub-16273](https://github.com/magento/magento2/issues/16273)

### Swatches

<!--  ENGCOM-1443 -->

*  The process of switching attribute input type has been fixed, which resolves multiple issues that customers were experiencing when working with swatches, including:

   *  inability to change attribute types from `swatch` to `dropdown`

   *  inability to remove swatches from existing products when changing an attribute type from `swatch`

   *  no updates to product attributes on the storefront. *Fix submitted by Eugene Shab in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-9307](https://github.com/magento/magento2/issues/9307), [GitHub-11403](https://github.com/magento/magento2/issues/11403), [GitHub-11703](https://github.com/magento/magento2/issues/11703), [GitHub-12695](https://github.com/magento/magento2/issues/12695)

### Tax

<!--  ENGCOM-1551  -->

*  Redundant product tax recalculation has been reduced during the loading of category pages, which has improved page loading. *Fix submitted by JeroenVanLeusden in pull request [15089](https://github.com/magento/magento2/pull/15089)*. [GitHub-14941](https://github.com/magento/magento2/issues/14941)

<!--  ENGCOM-1642  -->

*  JavaScript code in the `*.phtml` file of the Tax module has been refactored to meet Magento coding standards. *Fix submitted by Vishal Gelani in pull request [15343](https://github.com/magento/magento2/pull/15343)*. [GitHub-15352](https://github.com/magento/magento2/issues/15352)

<!--  ENGCOM-2386  -->

*  The `Invalid country code` error message that sometimes occurred during import of tax CSV files now includes the name of the country whose data is causing the error. Previously, the message did not identify which country's data caused the error. *Fix submitted by Adam Moss in pull request [16873](https://github.com/magento/magento2/pull/16873)*.

### Testing

<!--  ENGCOM-2523  -->

*  The `testGetIgnoresFirstSlash` method in `ObjectManagerTest` has been updated. *Fix submitted by Prince Patel in pull request [17098](https://github.com/magento/magento2/pull/17098)*.

<!--  ENGCOM-2499  -->

*  The `\Magento\Backup\Model\Db` model is now covered by unit tests. *Fix submitted by Yaroslav Rogoza in pull request [17063](https://github.com/magento/magento2/pull/17063)*.

<!--  ENGCOM-2239  -->

*  Corrected block name in the `Magento_Framework` test XML file. *Fix submitted by Namrata in pull request [16646](https://github.com/magento/magento2/pull/16646)*.

<!--  ENGCOM-2106  -->

*  Metadata titles in `lib/internal/Magento/Framework/View/Page/Config.php` are now covered by a unit test. *Fix submitted by Lorenzo Stramaccia in pull request [16333](https://github.com/magento/magento2/pull/16333)*.

<!-- ENGCOM-2255  -->

*  The `\Magento\Checkout\Model\Cart\CollectQuote` class is now covered by a unit test. *Fix submitted by Chitoraga Eduard in pull request [16271](https://github.com/magento/magento2/pull/16271)*.

### Theme

<!--  ENGCOM-1516  -->

*  Merchants can now successfully change the applied theme. Previously, Magento displayed an error when a merchant tried to save changes to the applied theme on **Content** > **Design** > **Configuration**. *Fix submitted by Daniel Ruf in pull request [15137](https://github.com/magento/magento2/pull/15137)*. [GitHub-13530](https://github.com/magento/magento2/issues/13530)

<!--  ENGCOM-1516  -->

*  Merchants can now successfully change the applied theme setting for a store view (**Content** > **Design** > **Configuration**). *Fix submitted by Daniel Ruf in pull request [15137](https://github.com/magento/magento2/pull/15137)*. [GitHub-14968](https://github.com/magento/magento2/issues/14968)

<!--  ENGCOM-1922  -->

*  Changing the `@tab-content__border` variable in Blank theme now works as expected. *Fix submitted by hitesh-wagento in pull request [15914](https://github.com/magento/magento2/pull/15914)*. [GitHub-14999](https://github.com/magento/magento2/issues/14999)

### Translation

<!-- MAGETWO-92210  -->

*  The `translation.json` file now contains translatable strings for the phrases "Store Credit" and "Gift Card". Previously, these strings were not translated for the shopping cart, one-page checkout, or order view in the customer account on the storefront.

<!-- MAGETWO-92355  -->

*  We've added  client-side caching of `js-translation.js`.

<!-- ENGCOM-1965  -->

*  Removed the unused translation for `comment` tag from these files: `app/code/Magento/Analytics/etc/adminhtml/system.xml`, `app/code/Magento/Catalog/etc/adminhtml/system.xml`, `app/code/Magento/Swatches/etc/adminhtml/system.xml`, and `app/code/Magento/Ups/etc/adminhtml/system.xml`. *Fix submitted by Yaroslav Rogoza in pull request [15604](https://github.com/magento/magento2/pull/15604)*.

<!-- ENGCOM-1604  -->

*  Added language translation capability  for `comment` tags in the  `system.xml` file of the Signifyd  module. *Fix submitted by Yogesh Suhagiya in pull request [15364](https://github.com/magento/magento2/pull/15364)*. [GitHub-15361](https://github.com/magento/magento2/issues/15361)

<!-- ENGCOM-1855  -->

*  All previously unsupported `translate` tags in the mini cart template are now supported. *Fix submitted by VitaliyBoyko in pull request [15782](https://github.com/magento/magento2/pull/15782)*.

<!-- ENGCOM-2020  -->

*  The string for `moreButtonText` in `app/code/Magento/Swatches/view/frontend/web/js/swatch-renderer.js` can now be translated. *Fix submitted by Karla Saaremäe in pull request [16190](https://github.com/magento/magento2/pull/16190)*. [GitHub-16079](https://github.com/magento/magento2/issues/16079)

<!-- ENGCOM-2257  -->

*  Added language translation capability to the Braintree module's template file. *Fix submitted by Namrata in pull request [16690](https://github.com/magento/magento2/pull/16690)*.

<!-- ENGCOM-2192  -->

*  Added mini cart checkout-related translations that were missing from `app/code/Magento/Checkout/i18n/en_US.csv`. *Fix submitted by JeroenVanLeusden in pull request [16553](https://github.com/magento/magento2/pull/16553)*.

<!-- ENGCOM-1591  -->

*  Added language translation capability for labels in the Braintree, Multishipping, and PayPal modules. *Fix submitted by Rahul Kachhadiya in pull request [15371](https://github.com/magento/magento2/pull/15371)*.

<!-- ENGCOM-1609  -->

*  Added language translation capability for  message strings in  `app/code/Magento/AdminNotification/Controller/Adminhtml/System/Message/ListAction.php` and `app/code/Magento/AdminNotification/i18n/en_US.csv`. *Fix submitted by Yogesh Suhagiya in pull request [15333](https://github.com/magento/magento2/pull/15333)*.

### UI

<!--  ENGCOM-1542  -->

*  The `clickableOverlay` option now works as expected, which improves the performance of modal popups. *Fix submitted by virtua-pmakowski in pull request [15172](https://github.com/magento/magento2/pull/15172)*. [GitHub-7399](https://github.com/magento/magento2/issues/7399)

<!--  ENGCOM-1315  -->

*  Customers can now place orders from grouped products where the quantity of subproducts is less than one. *Fix submitted by Valerij Ivashchenko in pull request [14752](https://github.com/magento/magento2/pull/14752)*. [GitHub-14692](https://github.com/magento/magento2/issues/14692)

<!--  ENGCOM-1606  -->

*  Footers now behave as expected when displaying Magento on a mobile device. *Fix submitted by Chirag Matholiya in pull request [15353](https://github.com/magento/magento2/pull/15353)*. [GitHub-15118](https://github.com/magento/magento2/issues/15118)

<!--  ENGCOM-1766  -->

*  The pagination of customer group prices in Advanced Pricing when viewed on the Admin now works as expected. *Fix submitted by Dmytro Cheshun in pull request [15614](https://github.com/magento/magento2/pull/15614)*. [GitHub-15210](https://github.com/magento/magento2/issues/15210)

<!--  ENGCOM-1982  -->

*  Magento now displays a caret icon as expected when a user hovers his mouse over a navigation category on a storefront. *Fix submitted by Tejash Kumbhare in pull request [16082](https://github.com/magento/magento2/pull/16082)*. [GitHub-15220](https://github.com/magento/magento2/issues/15220)

<!--  ENGCOM-2155  -->

*  Users can now press the **Esc** button on  the delete-from-cart confirmation pop-up window  without generating a `jQuery` UI error. Previously, when a customer added a product to the shopping cart, then pressed the trash icon to delete it, Magento displayed this confirmation pop-up window, but threw an error when the customer pressed the window's **Esc** button.  *Fix submitted by [Alexander Kras'ko](https://github.com/0m3r) in pull request [16477](https://github.com/magento/magento2/pull/16477)*. [GitHub-14593](https://github.com/magento/magento2/issues/14593)

<!--  ENGCOM-2479  -->

*  The alignment **Title** and **Items** on the left bar has been corrected. *Fix submitted by Rafael Corrêa Gomes in pull request [16984](https://github.com/magento/magento2/pull/16984)*.

<!--  ENGCOM-2473  -->

*  The black color coding standard has been changed from `color: #000;` to `color: @color-black;`. *Fix submitted by Chirag Matholiya in pull request [17019](https://github.com/magento/magento2/pull/17019)*.

<!--  ENGCOM-2399  -->

*  The white color coding standard has been changed from `color: #fff;` to `color: @color-white;`. *Fix submitted by Chirag Matholiya in pull request [16903](https://github.com/magento/magento2/pull/16903)*.

<!--  ENGCOM-1785  -->

*  Minor issues with the dynamically defined ``$filter`` property and missing throws to PHPDocs for methods in the UI export converter classes have been corrected. *Fix submitted by Dmytro Cheshun in pull request [15694](https://github.com/magento/magento2/pull/15694)*.

<!--  ENGCOM-1678  -->

*  The `ClassMagento\Ui\Component\Control\ActionPool` constructor and `getConfiguration()` in the UI module are now invoked with the correct number of parameters. *Fix submitted by Marcel Hauri in pull request [15512](https://github.com/magento/magento2/pull/15512)*.

<!--  ENGCOM-1682  -->

*  Unneeded JavaScript was removed from `logout.phtml` and replaced with a new JavaScript component. *Fix submitted by Nimesh Patel in pull request [15301](https://github.com/magento/magento2/pull/15301)*

<!--  ENGCOM-2605  -->

*  Page wrapper CSS has been moved from media query to `.page-wrapper`. *Fix submitted by Vishal Gelani in pull request [15416](https://github.com/magento/magento2/pull/15416)*.

<!--  ENGCOM-1657  -->

*  The `font-size` variable has been updated and standardized. *Fix submitted by Vishal Gelani in pull request [15421](https://github.com/magento/magento2/pull/15421)*.

<!--  ENGCOM-1473  -->

*  Layout arguments now  support for the `const` type. *Fix submitted by Igor Vitol in pull request [15058](https://github.com/magento/magento2/pull/15058)*.

<!--  ENGCOM-1547  -->

*  Button definitions have been moved to the new `buttons.js` file. *Fix submitted by Jisse Reitsma in pull request [15194](https://github.com/magento/magento2/pull/15194)*.

<!--  ENGCOM-1438  -->

*  Overlay issues with the mini cart have been resolved. Previously, if you logged in as a customer, then clicked on the mini cart icon and then the Account menu, the mini cart overlaid the Account menu. *Fix submitted by Arthur James in pull request [14963](https://github.com/magento/magento2/pull/14963)*.

<!--  ENGCOM-1313  -->

*  Magento now supports multiple `ui_components` with layout type `tabs` on a page. Previously, the second UI component failed to render, and Magento displayed this error, `Element with ID 'tabs_nav' already exists`. *Fix submitted by Freek Vandeursen in pull request [14742](https://github.com/magento/magento2/pull/14742)*.

<!--  ENGCOM-1313  -->

*  The order of style groups for mobile devices has been corrected. [GitHub-14476](https://github.com/magento/magento2/issues/14476)

<!-- ENGCOM-1869  -->

*  Dynamic data rows no longer fail due to a read operation after a delete condition. Previously, Magento threw an undefined JavaScript error. *Fix submitted by Chirag Matholiya in pull request [15840](https://github.com/magento/magento2/pull/15840)*. [GitHub-911](https://github.com/magento-engcom/msi/issues/911)

### URL rewrites

<!-- MAGETWO-89905  -->

*  Categories of the Main menu in the different store view are now updated when Varnish is enabled.

<!-- MAGETWO-73456  -->

*  URL key values are now derived from the  default value set on the default store. Previously, Magento derived the product URL key value from the product name on storeview level.

<!-- ENGCOM-1283  -->

*  The Magento URL rewrite functionality now supports the use of special characters in category names. Previously, the category tree did not load if a category name contained a special character. *Fix submitted by Vinay Shah in pull request [13397](https://github.com/magento/magento2/pull/13397)*. [GitHub-13296](https://github.com/magento/magento2/issues/13296)

<!-- ENGCOM-1916  -->

*  An unnecessary parameter has been removed from `_addProductLinkBlock()`.  *Fix submitted by Saurabh Parekh in pull request [15891](https://github.com/magento/magento2/pull/15891)*.

<!-- ENGCOM-1656  -->

*  Template files have been refactored to follow Magento coding standards. *Fix submitted by Nimesh Patel in pull request [15422](https://github.com/magento/magento2/pull/15422)*. [GitHub-15356](https://github.com/magento/magento2/issues/15356)

<!-- ENGCOM-2524  -->

*  Undefined mixin parameters are now defined and variable scope has been improved in `lib/web/css/source/lib/_icons.less`, `lib/web/css/source/lib/_pages.less`, and `lib/web/css/source/lib/_utilities.less`. *Fix submitted by Prince Patel in pull request [17097](https://github.com/magento/magento2/pull/17097)*.

<!-- ENGCOM-1314  -->

*  Magento now removes URL rewrites as expected after you delete a CMS page through the API or in the `crontab` area. *Fix submitted by Roman in pull request [14751](https://github.com/magento/magento2/pull/14751)*.

<!-- MAGETWO-89905  -->

*  Main menu categories  in  different store views are now updated as expected when Varnish is enabled.

### Visual Merchandiser

<!-- MAGETWO-90599  -->

*  Magento now maintains manual sort order and adds newly assigned products to the top of the products list. Previously, Magento reset the manual sort order and sorted products by ID.

<!-- MAGETWO-92504  -->

*  Saving a product no longer reverts the selected sort order for a category. Previously, after a merchant saved a product, Magento reverted the sort order that defined the display of products in that category from the defined  sort order to an order defined by product ID.

### Vertex

<!-- BUNDLE-1399  -->

*  The Gross Amount and Tax Amount columns in the Transaction Details Report file  now include price and tax for products as expected.

### Wishlist

<!--  ENGCOM-1878  -->

*  Incorrect return type hinting in DocBlocks has been corrected for several methods in the Wishlist module. *Fix submitted by Yaroslav Rogoza in pull request [15854](https://github.com/magento/magento2/pull/15854)*.

<!--  ENGCOM-1949  -->

*  Removed an unnecessary parameter from the `toHtml()` method in `Wishlist/view/frontend/templates/item/list.phtml`. *Fix submitted by Yaroslav Rogoza in pull request [16023](https://github.com/magento/magento2/pull/16023)*.

<!--  ENGCOM-2133  -->

*  Magento no longer thows errors when you log in using the wishlist URL. *Fix submitted by Oleksandr Kravchuk in pull request [16386](https://github.com/magento/magento2/pull/16386)*.

<!--  ENGCOM-2128  -->

*  Magento no longer removes a product from the wishlist when you update a wishlist item. *Fix submitted by Chitoraga Eduard in pull request [16372](https://github.com/magento/magento2/pull/16372)*.

<!--  ENGCOM-2035  -->

*  Magento now passes empty arrays (instead of null values) into the DataObject constructor. Previously, a null value was passed, which caused a fatal error. *Fix submitted by Abhishek Jakhotiya in pull request [16220](https://github.com/magento/magento2/pull/16220)*.

<!--  ENGCOM-1800  -->

*  The `\Magento\Wishlist\CustomerData\Wishlist::getImageData()` method DocBlock now correctly indicates that the method returns an array. *Fix submitted by Yaroslav Rogoza in pull request [15718](https://github.com/magento/magento2/pull/15718)*.

<!--  ENGCOM-1668  -->

*  Magento now displays the correct product image for the selected configurable product variant in the  My Wishlist sidebar. Previously, Magento always displayed the image associated with the default configurable product in the  My Wishlist sidebar. *Fix submitted by kishanpatadia in pull request [15477](https://github.com/magento/magento2/pull/15477)*.

<!-- not needed- 72024 ENGCOM-1665 1454 72051 93668 93674 93239 93320 90029 86243 87525 88658 91372 88667 92175 93204 83975 91412 86480 87966 88005 92178 86104 73638 93066 92165 82785 93042 93093 84387 93067 92162 81926 92983 92693 92200 92751 83992 92312 90837 92197 73967 90570 88655 92468 88592 74766 91989 81470 91894 89726 9057589342 84209 72982 86471 88604 88598 89746 89744 91791 93960 92191 93182 84093 82025 89301 92012 89988 92400 92747 87418 93799 -->

## Known issues

**Issue**: Merchants cannot save a newly created multiselect or dropdown customer attribute or edit existing customer attributes from the customer’s account on the storefront after upgrade to Magento 2.2.6.

**Workaround**: Download and apply  Magento Commerce Support Patch MAGETWO-95591 after logging into your account from the partner portal. This issue will be fixed in Magento Commerce 2.2.7, which is scheduled for release by the end of 2018.

**Issue**: The `catalog:image:resize` command execution time has been reduced by up to 90% in the release. However, this improvement necessitates these additional steps after upgrading your Magento instance to 2.2.6:

*  Remove   `pub/media/catalog/product/cache`. The path for cached images was changed in this release, which explains why you need to clean this directory after upgrade to free up space.

*  Run `bin/magento catalog:image:resize`  to generate a new image cache.  This step is necessary because we’ve changed the path to cached images and must remove the previously cached images.

## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-6-issues.md %}

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull Request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Aligent Consulting</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14726">14726</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Ampersand</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13185">13185</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16540">16540</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Atwix</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14338">14338</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14893">14893</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15136">15136</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15291">15291</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15292">15292</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15293">15293</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15294">15294</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15386">15386</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15411">15411</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15435">15435</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15615">15615</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15718">15718</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15614">15614</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15694">15694</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15782">15782</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15854">15854</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15297">15297</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16023">16023</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15902">15902</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16065">16065</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15604">15604</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16160">16160</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15872">15872</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16300">16300</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16306">16306</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16279">16279</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16086">16086</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16372">16372</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16271">16271</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16680">16680</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17063">17063</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17137">17137</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16401">16401</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16468">16468</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4788" target="_blank">4788</a>, <a href="https://github.com/magento/magento2/issues/3535" target="_blank">3535</a>, <a href="https://github.com/magento/magento2/issues/14517" target="_blank">14517</a>, <a href="https://github.com/magento/magento2/issues/15210" target="_blank">15210</a>, <a href="https://github.com/magento/magento2/issues/7379" target="_blank">7379</a>, <a href="https://github.com/magento/magento2/issues/16273" target="_blank">16273</a></td>
  </tr>

<tr>
    <td>Basecom</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15765">15765</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16890">16890</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12221" target="_blank">12221</a></td>
  </tr>

<tr>
    <td>Classy Llama</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16489">16489</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Comwrap</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14886">14886</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15464">15464</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15479">15479</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16554">16554</a></td>
    <td><a href="https://github.com/magento/magento2/issues/15218" target="_blank">15218</a></td>
  </tr>

<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14751">14751</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14379">14379</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14351" target="_blank">14351</a></td>
  </tr>

<tr>
    <td>Corra</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15023">15023</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>DEG</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16952">16952</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8131" target="_blank">8131</a></td>
  </tr>

<tr>
    <td>Divante</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14546">14546</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15382">15382</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15320">15320</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13944" target="_blank">13944</a>, <a href="https://github.com/magento/magento2/issues/4977" target="_blank">4977</a>, <a href="https://github.com/magento/magento2/issues/14056" target="_blank">14056</a></td>
  </tr>

<tr>
    <td>Experius</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15010">15010</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15019">15019</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14966" target="_blank">14966</a></td>
  </tr>

<tr>
    <td>Guapa</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15689">15689</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15936">15936</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15687">15687</a></td>
    <td><a href="https://github.com/magento/magento2/issues/15588" target="_blank">15588</a>, <a href="https://github.com/magento/magento2/issues/15308" target="_blank">15308</a>, <a href="https://github.com/magento/magento2/issues/15393" target="_blank">15393</a></td>
  </tr>

<tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12566">12566</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14923">14923</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14614">14614</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15089">15089</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16286">16286</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16553">16553</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13569">13569</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14941" target="_blank">14941</a>, <a href="https://github.com/magento/magento2/issues/5067" target="_blank">5067</a></td>
  </tr>

<tr>
    <td>Imagination Media</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16984">16984</a></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Interactiv4</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14428">14428</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15262">15262</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16946">16946</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4301" target="_blank">4301</a>, <a href="https://github.com/magento/magento2/issues/12362" target="_blank">12362</a>, <a href="https://github.com/magento/magento2/issues/13427" target="_blank">13427</a></td>
  </tr>

<tr>
    <td>Inviqa</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14836">14836</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14822">14822</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15129">15129</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5768" target="_blank">5768</a></td>
  </tr>

  <tr>
    <td>ISM eCompany</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16386">16386</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16693">16693</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Krish TechnoLabs</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16206">16206</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16576">16576</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16584">16584</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16626">16626</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16678">16678</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16748">16748</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16821">16821</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16831">16831</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16845">16845</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16872">16872</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16916">16916</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16891">16891</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16977">16977</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16978">16978</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16980">16980</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17002">17002</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16863">16863</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16988">16988</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17077">17077</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17097">17097</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17098">17098</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17099">17099</a></td>
    <td><a href="https://github.com/magento/magento2/issues/15940" target="_blank">15940</a>, <a href="https://github.com/magento/magento2/issues/5316" target="_blank">5316</a>, <a href="https://github.com/magento/magento2/issues/16843" target="_blank">16843</a></td>
  </tr>

<tr>
    <td>MageSpecialist</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14905">14905</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14904">14904</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15539">15539</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15532">15532</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16333">16333</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16393">16393</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14905" target="_blank">14905</a>, <a href="https://github.com/magento/magento2/issues/14904" target="_blank">14904</a>, <a href="https://github.com/magento/magento2/issues/15539" target="_blank">15539</a>, <a href="https://github.com/magento/magento2/issues/15532" target="_blank">15532</a>, <a href="https://github.com/magento/magento2/issues/16333" target="_blank">16333</a>, <a href="https://github.com/magento/magento2/issues/16393" target="_blank">16393</a></td>
  </tr>

<tr>
    <td>MediaCT</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16726">16726</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Netz98</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15032">15032</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13460" target="_blank">13460</a></td>
  </tr>

<tr>
    <td>Perficient</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15499">15499</a></td>
    <td><a href="https://github.com/magento/magento2/issues/15469" target="_blank">15469</a></td>
  </tr>

<tr>
    <td>Phoenix Media GmbH</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16408">16408</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Rocket Web</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14820">14820</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Something Digital</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14699">14699</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12935">12935</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Space 48</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14976">14976</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16873">16873</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10395" target="_blank">10395</a></td>
  </tr>

<tr>
    <td>Two Jay</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/17163">17163</a></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Wagento</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15331">15331</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15332">15332</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15336">15336</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15353">15353</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15459">15459</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15602">15602</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15349">15349</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15621">15621</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15645">15645</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15734">15734</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15789">15789</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15791">15791</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15840">15840</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15878">15878</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15914">15914</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15811">15811</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15893">15893</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/15913">15913</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16082">16082</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16379">16379</a>,  <a target="_blank" href="https://github.com/magento/magento2/pull/16082">16082</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16732">16732</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16903">16903</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17019">17019</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16959">16959</a></td>
    <td><a href="https://github.com/magento/magento2/issues/15848" target="_blank">15848</a>, <a href="https://github.com/magento/magento2/issues/14476" target="_blank">14476</a>, <a href="https://github.com/magento/magento2/issues/15334" target="_blank">15334</a>, <a href="https://github.com/magento/magento2/issues/15118" target="_blank">15118</a>, <a href="https://github.com/magento/magento2/issues/14153" target="_blank">14153</a>, <a href="https://github.com/magento/magento2/issues/15348" target="_blank">15348</a>, <a href="https://github.com/magento/magento2/issues/15590" target="_blank">15590</a>, <a href="https://github.com/magento/magento2/issues/7897" target="_blank">7897</a>, <a href="https://github.com/magento/magento2/issues/15608" target="_blank">15608</a>, <a href="https://github.com/magento/magento2/issues/15323" target="_blank">15323</a>, <a href="https://github.com/magento/magento2/issues/14999" target="_blank">14999</a>, <a href="https://github.com/magento/magento2/issues/15213" target="_blank">15213</a>, <a href="https://github.com/magento/magento2/issues/15220" target="_blank">15220</a>, <a href="https://github.com/magento/magento2/issues/14895" target="_blank">14895</a>, <a href="https://github.com/magento/magento2/issues/16378" target="_blank">16378</a></td>

  </tr>

<tr>
    <td>Webjump</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14800">14800</a></td>
    <td><a target="_blank" href="https://github.com/magento/magento2/issues/5726">5726</a></td>
  </tr>

</table>

### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html).

### Installation and upgrade instructions

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
