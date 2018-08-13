---
layout: default
group: release-notes
title: Magento Commerce 2.2.6 Release Notes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.6EE.md
---
*Patch code and release notes published on September , 2018.*




We are pleased to present Magento Commerce 2.2.6. This release includes 25 critical enhancements to product security plus over 150 core code fixes and enhancements. Check out the over 10 community-contributed fixes!

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues.



## Highlights

In addition to 25 critical security fixes, look for the following highlights in this release:


### Core code highlights
This release includes significant performance improvements to the core Magento code:

#### Substantial improvements to performance** focus on catalog indexing, among other features

Seven  performance tuning enhancements related to catalog indexing  


<!-- MAGETWO-87430 -->* Category product indexer logic has been optimized, and re-indexing time has been noticeably reduced.  Previously, when you had many categories (100,0000), Magento could take up to 40 minutes to re-index product catalogs. 

<!-- MAGETWO-91164 -->* The `catalog:image:resize` command execution time has been reduced by 90%. Note: This improvement has necessitated these additional manual steps after you upgrade your Magento shop to 2.2.6: 

	* remove  `pub/media/catalog/product/cache`

	* run `bin/magento catalog:image:resize` 

<!-- MAGETWO-47320 -->* The Catalog Rule re-indexing operation has been optimized, and average re-indexing time, which depends on rule conditions, has improved by more than  80%.  Previously, a full Catalog Rule re-index operation on a medium B2C store took more than 20 minutes. 

<!-- MAGETWO-90572 -->* The time required to load category or product pages for products that are configured with many attributes (more than 500) has been significantly reduced. Refactoring the logic for product attribute retrieval has resulted in a reduction of operating time of almost 90% for certain scenarios. 

<!-- MAGETWO-88670 -->* The time required to load a store’s home page has been reduced noticeably when the top menu contains many categories.  (Load time is still affected by the number of categories and the structure of the top menu.)

<!-- MAGETWO-86143 -->* Merchants can now improve store performance by disabling Magento Report functionality. A new configuration setting  (**System Configuration**: **General** > **Reports** > **General Options**) allows merchants to disable Magento Reports, which is recommended practice  if a merchant's business function do not require this capability.

#### Improvements to the reliability and ease of the checkout process 

<!-- MAGETWO-86490 -->* A shopping cart’s contents remains constant even when the Checkout page is repeatedly reloaded. Previously, if a customer reloaded the checkout page several times, Magento emptied the shopping cart and the customer could not place the order. (This problem primarily affected stores running on HTTPS.)

<!-- MAGETWO-90053-->* Refreshing the checkout page no longer deletes the shipping address when a guest checks out. Previously, when the persistent shopping cart was enabled, refreshing the checkout out page affected information entered into form fields for a guest checkout. 

<!-- MAGETWO-89222-->* The speed at which Magento places an order is no longer affected by how many shipping methods are available. Previously, when a customer placed an order for which multiple shipping methods were available, Magento took more than 20 seconds to place the order.

<!-- MAGETWO-89264-->* The Checkout page now works as expected when the AdBlock extension and Google Analytics are enabled. Previously, when these extensions were enabled, the checkout page would not load, and the loading spinner was displayed indefinitely.


#### Additional enhancements

<!-- MAGETWO-86125-->* Configurable products are now sorted by only visible prices as expected. Previously, sorting a catalog by price resulted in sort results that included the prices of out-of-stock products and disabled child products.

<!-- MAGETWO-91411 -->*  Magento no longer sends duplicate delete requests as a result of an unstable Internet connection. Previously, unintentional mass deletion of products sometimes occurred as a result of an unstable Internet connection. 



### Magento Cloud highlights


* Provided new, simple way to create local development environment: Added possibility for ECE-Tools to deploy local Docker environment from the template or your current version of local code

* Added support for changing store locales without needing configuration import and export

* Simplified workflow for adding robots.txt file and generating sitemap.xml file for single domain configuration without needing change to infrastructure

* SCD_Matrix reduced deployment time by reducing the number of unnecessary theme files. For example, developers can deploy magento/backend theme in English only

* Zero-downtime deployment: Added “connection holding” capability, which ensures no lost connections or site unavailability, providing smooth shopper experience even during deployments involving database schema changes

* Fixed issue with post_deploy hook that cleared the cache in deploy phase vs. post-deploy phase

* Fixed issue to ensure post_deploy phase begins immediately after the deploy phase ends



### Community contribution highlights

Highlights of community contributions include fixes that improve checkout flow and the sorting of simple products:


* Customers can now successfully complete check out when their order contains a configurable product with a configurable option. Previously, customers could not check out when there is a configurable product in the cart with a configurable option, which is now deleted, shopping cart could not be loaded. [GitHub-15467](https://github.com/magento/magento2/issues/15467) Thanks to community member [jonshipman](https://github.com/jonshipman)!  

* Magento multi-store installations now use the store view-specific values from the store configuration settings as expected. Previously, Magento used the default configuration for all store views.  [GitHub-15205](https://github.com/magento/magento2/issues/15205) Thanks to community member [jonshipman](https://github.com/jonshipman)!  

* Magento now maintains the default products sort order of “newest first” when you upgrade your Magento deployment to 2.2.4. Previously, after upgrade, the default products order in categories changed from “newest first” to “oldest first”.  Thanks to community member [Danny Verkade](https://github.com/dverkade)! [GitHub-15627](https://github.com/magento/magento2/issues/15627) 


* Merchants can now successfully change the applied theme setting for a store view (**Content** > **Design** > **Configuration**).  Thanks to community member [Daniel Ruf](https://github.com/DanielRuf)! [GitHub-14968](https://github.com/magento/magento2/issues/14968)


* We’ve reduced the redundant product tax recalculation that previously occurred when Magento loaded category pages, which results in faster page loading. Thanks to community member [Jeroen](https://github.com/JeroenVanLeusden)! [GitHub-14941](https://github.com/magento/magento2/issues/14941)


### Core bundled extension highlights



#### Amazon Pay

Enhancements to Amazon Pay include the following new features :

* Implementation of Magento Payment Gateway

* Improved handling of virtual products by Amazon Pay

* Added entry to admin panel to allow or disallow Amazon Pay to be displayed in the list of payment options

* Combined 'Synchronous, if possible' and 'Asynchronous' settings for authorization mode into one setting.



#### dotmailer

Enhancements to dotmailer include the following new features:

* Record your customers and guests' consent and store it using dotmailer's new Consent Insight

* Improved retry process after a failed attempt to access EDC

* Users can now import only those Magento contacts who've opted-in (customer subscribers, guest subscribers, and other subscribers)

* Users now get warned when they're about to sync non-subscribers into their dotmailer account



#### Klarna

Enhancements to Klarna include support for these new features :

 
* Pass shipping details in capture request

* FRAUD_STOPPED

* Add Shipping and discount order lines to OM calls

* Migrate from hard-coded mapping to dynamic name and assets

* Add link to Klarna Automated onboarding in Admin


#### Magento Shipping





Looking for more information on these new features as well as many others? Check out [Magento 2.2.x Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).


## Fixes
In addition to security enhancements, this release contains the following functional fixes. 



### Installation, setup, and deployment


<!-- ENGCOM-1537 -->* You can now use the `app:config:status` command to check whether configuration propagation is up-to-date. (This fix restores this command, which was inadvertently deleted in a previous release.)  *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [15174](https://github.com/magento/magento2/pull/15174)*. [GitHub-14104](https://github.com/magento/magento2/issues/14104)

<!-- MAGETWO-93192 -->* Configuration backend models are now populated as expected with all fieldset data, which makes it possible to access all configured values from a current group. [GitHub-16712](https://github.com/magento/magento2/issues/16712)

<!-- MAGETWO-90860 -->* The `magento-deploy-ignore` setting in `composer.json` now works as expected. Previously, files specified in this setting were overwritten during deployment. 

<!-- MAGETWO-87120 -->* The `timestamp` fields in `oauth_nonce` now include indexes to avoid deadlocks while on erasing old records. *Fix submitted by [Karl Deux](https://github.com/KarlDeux) in pull request 13328*. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!-- MAGETWO-84651 -->* The `app:config:dump` command now has an argument that supports dumping only the specified settings that are required to prepare static content on a build system, not all system settings. This new option (`config-types`) makes it possible to dump scopes and themes automatically (which are needed for a build system) while managing system settings manually using `config:set --lock-config`. *Fix submitted by [Juan Alonso](https://github.com/jalogut) in pull request 12410*. [GitHub-11396](https://github.com/magento/magento2/issues/11396) 

<!-- ENGCOM-1972 -->* Sorting has been disabled in the  `glob` and `scandir` functions to improve performance. *Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request [16052](https://github.com/magento/magento2/pull/16052)*. 

<!-- ENGCOM-2078 -->* Magento multi-store installations now use the store view-specific values from the store configuration settings as expected. Previously, Magento used the default configuration for all store views. *Fix submitted by [Francesco Marangi](https://github.com/fmarangi) in pull request [15929](https://github.com/magento/magento2/pull/15929)*. [GitHub-15205](https://github.com/magento/magento2/issues/15205),  [GitHub-15245](https://github.com/magento/magento2/issues/15245) ASK ABOUT CONTRIBUTOR


<!-- ENGCOM-2407 -->* Update nginx.config.sample to exclude php5-fpm
title: Update nginx.config.sample to exclude php5-fpm
url: magento/magento2#16883
contributor name: @sean-wcb
contributor link: https://github.com/sean-wcb

M2.2.x is not compatible with php5.x so there's no reason to include it as an option in the nginx.config.sample

This does not fix any issues. However, it does prevent someone from thinking that M2.2.x is compatible with php5.


<!-- ENGCOM-2315 -->*
Add generated code to the psr-0 autoloader section so when optimizing … the autoloader on a production environment the autoloader will find more classes in its classmap. This should result in fewer file_exists calls and might increase the performance a tiny bit.

title: Add generated code to the psr-0 autoloader section so when optimizing?
url: magento/magento2#16435
contributor name: @hostep
contributor link: https://github.com/hostep



<!-- ENGCOM-2029 -->*

title: Setting deploy mode to production with --skip-compilation flag should not clear generated code
url: magento/magento2#16211
contributor name: @platformvaimo
contributor link: https://github.com/platformvaimo

Setting deploy mode to production with --skip-compilation flag should not clear generated code

Changing the deploy mode to production using the --skip-compilation flag will remove the generated code in generated/code/ and generated/metadata/.

The expected result is that generated/code/ and generated/metadata/ should not be cleared.




<!-- ENGCOM-1673 -->*

title: Fixes in config module
url: magento/magento2#15511
contributor name: @mhauri
contributor link: https://github.com/mhauri

This PR fixes two issues in the Magento/Config Module:

The method Magento/Config/Test/Unit/Block/System/Config/Form/Field/ImageTest.php::testGetElementHtmlWithValue() references to a invalid Backend Model on line 77

The anonymous function has an unused use $data in Magento/Config/Model/Config/Importer.php on line 127



<!-- ENGCOM-1448 -->*

title: fix: set message-success in setup if we already have the latest version
url: magento/magento2#15012
contributor name: @DanielRuf
contributor link: https://github.com/DanielRuf

Currently the upgrade check in the setup uses message-error even if we already have the latest version.

set message-success in setup if we already have the latest version


<!-- ENGCOM-1431 -->*
Renamed "Add Block Names to Hints" config setting to represent what it actually does
title: Renamed "Add Block Names to Hints" config setting to represent what it actually does
url: magento/magento2#14939
contributor name: @chris-pook
contributor link: https://github.com/chris-pook

This config name is notoriously misleading as it does not show the block name at all, instead it shows the block class type. Worse still there is a question about this in the Magento2 certification exam which is utterly confusing due to the poor naming of the config setting.







### B2B

<!-- MAGETWO-92388 -->* Company blocked warnings are no longer included in the source code. Previously, source code included these warning strings, which search indexers detected and treated as text. 

<!-- MAGETWO-92375 -->* Category pages now display as expected all products whose SKUs contain either single or double quotation marks. Previously, Magento threw an error when trying to set pricing and structure on a shared catalog when product SKUs contained these characters. 

<!-- MAGETWO-92040 -->* You can now save a company address in a country that is on the allowed list of countries for the non-default website only. Previously, if a customer tried to save an address for a country  allowed on the non-default website only,  Magento threw this error, `Invalid value of "UA" provided for the country_id field`.




<!-- MAGETWO-90824 -->* Companies are now listed as Resource Access 

This permits users to see  companies in the user roles permissions without being a full Admin with "all" resources selected.



The new Company resource so that administrators with limited permissions can 

When creating B2B user roles, 


Can only see companies if the user roll is full administrator
Added "Company" resource for using in user role.
Merchant pointed out there is no option in the permissions to see or not see companies in the user roles permissions unless you are a full admin with "all" resources selected.

When creating b2b user roles, Companies should be listed as Resource Access



actual results: When creating b2b user roles, Companies is not listed as Resource Access and thus, the role has to be created providing full access to all resources, making financial information or other sensible data accessible to all admin users with such role.


This provides the Company resource for administrators with limited privileges. These administrators  can now be granted permissions to see or not see companies in the user roles without having full administrator permissions


Merchant also stated that this is major issue since b2b role has to be assigned all permissions in order to see companies, every backend user in Magento can see the financial results and figures.


When creating b2b user roles, Companies should be listed as Resource Access



add link to UG








<!-- MAGETWO-89971 -->* Magento now displays the correct product total price value on all websites in a B2B deployment. 

<!-- MAGETWO-89888 -->* When **Website Restrictions** are set to **Private Sales: Login Only**, access to the storefront is now restricted to customers who log in, and merchants can still create new companies in the Admin. Previously, when a merchant tried to create a company when this setting was enabled, Magento threw this error, `Can not register new customer due to restrictions are enabled`. 

<!-- MAGETWO-87349 -->* Configurable products can now be added to the requisition list directly from the Category page.


<!-- ENGCOM-1373 -->* Add statement to 'beforeSave' method to allow app:config:import
title: Add statement to 'beforeSave' method to allow app:config:import
url: magento/magento2#14829
contributor name: @bmxmale
contributor link: https://github.com/bmxmale

Fix to app:config:import for beforeSave method on Braintree CountryCreditCard class.





### Bundle products

<!-- MAGETWO-90999 -->* Magento now successfully imports bundle products. 

<!-- MAGETWO- 86218-->* Bundled products that have the **User Defined** field unchecked can now be back ordered. [GitHub-10061](https://github.com/magento/magento2/issues/10061)


<!--  ENGCOM-1863-->* Fixed set template syntax issue  *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15825](https://github.com/magento/magento2/pull/15825)*. 


<!--  ENGCOM-2176-->* Variable as a method parameter might be overridden by the loop

title: Variable as a method parameter might be overridden by the loop
url: magento/magento2#16143
contributor name: @lfluvisotto
contributor link: https://github.com/lfluvisotto

Variable as a method parameter might be overridden by the loop.
Rename the variable in the loop let the code more readable.





### Catalog

<!-- ENGCOM-1455 -->* The Gallery template can now handle Boolean configuration variables. Previously, these configuration variables were typed as string instead of Boolean, which caused JavaScript errors when string values were set to false. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [15020](https://github.com/magento/magento2/pull/15020)*. [GitHub-12285](https://github.com/magento/magento2/issues/12285), [GitHub-15009](https://github.com/magento/magento2/issues/15009)

<!-- ENGCOM-1539 -->* The breadcrumbs component no longer relies on the `mageMenu` widget. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request [15178](https://github.com/magento/magento2/pull/15178)*. [GitHub-14987](https://github.com/magento/magento2/issues/14987)

<!-- ENGCOM-1622 -->* The `data-container` class name is now based on view mode. *Fix submitted by [Sunil](https://github.com/sunilit42) in pull request [15350](https://github.com/magento/magento2/pull/15350)*. [GitHub-15319](https://github.com/magento/magento2/issues/15319)

<!-- ENGCOM-1617 -->* Breadcrumbs now work as expected when a product name contains quotation marks. Previously, the breadcrumbs on the product details page caused this syntax error to be thrown, `SyntaxError: Unexpected token x in JSON`. *Fix submitted by [Jignesh Baldha](https://github.com/jignesh-baldha) in pull request [15347](https://github.com/magento/magento2/pull/15347)*. [GitHub-15037](https://github.com/magento/magento2/issues/15037)

<!-- ENGCOM-1463 -->* Disabling a product now removes it from the flat index as expected. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [15019](https://github.com/magento/magento2/pull/15019)*. [GitHub-14966](https://github.com/magento/magento2/issues/14966)

<!-- ENGCOM-1051 -->* The success message that Magento displays when a customer adds a product to the compare list now contains a link to the comparison list. *Fix submitted by [Andreas von Studnitz](https://github.com/avstudnitz) in pull request [13862](https://github.com/magento/magento2/pull/13862)*. 

<!-- ENGCOM-1953 -->* Cache problems no longer occur when currencies are used without a currency symbol. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15902](https://github.com/magento/magento2/pull/15902)*. 

<!-- ENGCOM-1927 -->* Catalog component blocks now contain correct return type suggestions, and typos have been corrected where needed in the PHPDocs. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15913](https://github.com/magento/magento2/pull/15913)*. 

<!-- ENGCOM-1287 -->* Widget cache errors that resulted in one widget being loaded twice on the storefront have been resolved. *Fix submitted by [Alexandr Kozyr](https://github.com/AlexandrKozyr) in pull request [12764](https://github.com/magento/magento2/pull/12764)*. [GitHub-4389](https://github.com/magento/magento2/issues/4389)

<!-- ENGCOM-1059 -->* Magento no longer makes redundant requests on the 'customer data' on the checkout  page. *Fix submitted by [Andrey Bezyazychnyy](https://github.com/andrewbess) in pull request [14314](https://github.com/magento/magento2/pull/14314)*. [GitHub-13765](https://github.com/magento/magento2/issues/13765)

<!-- MAGETWO-93196 -->* Administrators with permission to change product names on one website only cannot change product names on any other sites. Previously, an administrator with permission to change a product name on one site only could change product names on all websites in a multisite deployment. 

<!-- MAGETWO-93103 -->* Users with limited privileges can now save products as expected.  

<!-- MAGETWO-93071 -->* Magento now uses the current date as expected when setting the start date for a special price. Previously, Magento set the start date for a special price a few years in the future, which prevented the special price for being active.

<!-- MAGETWO-92907 -->* Magento now reliably displays category images on the custom store view level.  Previously, the category image on custom store view level alternately disappeared and appeared after every save operation.

<!-- MAGETWO-92823 -->* Company administrators can now use Quick Order to buy products. Previously, when a company administator tried to use Quick Order to buy products, Magento displayed this error: `The SKU was not found in the catalog`. 

<!-- MAGETWO-92653 -->* You can now successfully search for products  when the **Shared Catalog** setting is enabled.

<!-- MAGETWO-92574 -->* Magento no longer removes downloadable product links after an attribute is updated. 

<!-- MAGETWO-92502 -->* Extra POST requests are no longer sent if the  **Synchronize widget products with backend storage** option is set to **yes**. 

<!-- MAGETWO-92389 -->* You can now create a product date attribute that contains a day value than exceeds 12 (in the format dd/mm/yyyy). Previously, when you created a product attribute with a default date specifying a day greater than 12, Magento did not save the attribute, but instead displayed this error, `Invalid default date`. 

<!-- MAGETWO-91402 -->* You can now use the `Magento\Catalog\Model\ProductRepository` class to assign a product to one website as expected. Previously, using this class to save a product assigned the product to all existing websites, not just the specified one. 

<!-- MAGETWO-91163 -->* Images now load as expected on the product display page (PDP) when the image name contains double quotation marks. 

<!-- MAGETWO-90940 -->* The SEO-friendly URL for the Category page now works as expected. 

<!-- MAGETWO-90768 -->* The **Use Default Value** checkboxes in the design section of the category page are now enabled by default as expected. 

<!-- MAGETWO-92280 -->* Customers can now use the **Add Product By SKU** button to add configurable products to a sales order. 

<!-- MAGETWO-90569 -->* Empty dropdown or swatch type product attributes are no longer visible on the product page. 

<!-- MAGETWO-90367 -->* Attributes that have empty values across all products being compared are not displayed as rows in the comparison table. Previously, Magento displayed these attributes  with an N/A value on the  Compare Products page. 

<!-- MAGETWO-89732 -->* The Catalog page now displays breadcrumbs as expected. 

<!-- MAGETWO-88504 -->* Tiered pricing and quantity increments now work as expected with decimal-based inventories. 

<!-- MAGETWO-88102 -->* Magento now updates the `catalog_category_product_index` table as expected after a category is deleted. 

<!-- MAGETWO-87721 -->* Customizable options are now configured the same for all websites to which a product is added. Previously, when a merchant added a product with customizable options to an additional site, the options were corrupted. 

<!-- MAGETWO-87589 -->* Fixed issue with polluted database for additional stores if attribute data wasn't set for additional stores (use default check box now is set even if tab with the attribute was not opened)

<!-- MAGETWO-87430 -->* Category product indexer logic has been optimized, and re-indexing time has been noticeably reduced.  Previously, when you had many categories (100,0000), Magento could take up to 40 minutes to re-index product catalogs.  

<!-- MAGETWO-86710 -->* Widget selection by Enabled Products no longer causes a fatal error on a storefront when the **Flat Product** is configured. 

<!-- MAGETWO-86295 -->* Merchants can now change the `status` and `update` attributes from the product page. Previously, Magento returned a 404 page when bulk enabling or disabling products in the Admin with a restricted user role that is limited to a specific website. 

<!-- MAGETWO-85682 -->* Magento now maintains the default setting for a product's `status` attribute when you create a new product. Previously, when creating a new product after changing the default option from Enabled to Disabled for this attribute, the status is incorrectly set to enabled by default.

<!-- MAGETWO-84891 -->* The print preview of product comparison results (that is, the page of results that Magento produces when you click **Compare** after selecting two or more products) now displays as expected. Previously, only a subset of page elements was displayed.  


<!-- MAGETWO-82116 -->* Magento now maintains the correct dates in the results of filtering the Admin Product Grid Filter: Set Product as New from Date.  [GitHub-11517](https://github.com/magento/magento2/issues/11517)

<!-- MAGETWO-75427 -->* As you type additional characters into the text field for a product's custom option, the hint showing the number of characters left before reaching the maximum now decreases as expected.

<!-- MAGETWO-60573 -->* Merchants can now set a custom option fixed prices with  negative values in the Admin. [GitHub-7333](https://github.com/magento/magento2/issues/7333)

<!-- MAGETWO-73739 -->* You can now unset a category image on the store-view level when the image is defined on all store views.

<!-- MAGETWO-74021 -->* The Catalog Products List widget can now display products on the storefront that have specific attributes.



<!--  ENGCOM-2383 -->* The shopping cart now displays as expected images of configurable products that have only size options (that is, no color options). Previously, when a customer added a configurable product that had only size options to her shopping cart, the shopping cart did not display the expected product image. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [16863](https://github.com/magento/magento2/pull/16863)*. [GitHub-16843](https://github.com/magento/magento2/issues/16843)




<!--  ENGCOM-2313 -->* Rating Star issue on Product detail Page

 *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16766](https://github.com/magento/magento2/pull/16766)*. [GitHub-16764](https://github.com/magento/magento2/issues/16764)


Steps to reproduce
Go to the Product detail page and select "Review" tab
Now, enter the information such as "Nick name, Summary and Review" and press "Submit Review" button without select any star rating
Issue: Its throws an error Message " Please select one of each of the ratings above". But, by default First Star rating is selected.
Expected result
It should not select any star rating while throwing error message as " Please select one of each of the ratings above".

Actual result
First star rating is showing. 





<!--  ENGCOM-2213 -->* Fix of invalid price for integer currencies when amount less than group size 

After correct fixes in magento/magento2#15909 (magento/magento2#15540) client-side formatting starts corrupt prices in currencies without minor units if price amount is less then number group size (usually equal to 3 numbers).

STR:

Install Magento
Set USD as a base currency
Set JPY as display currency (it also should be enabled as available currency)
Add product with price 0.01 USD
Add currency rate as 110 JPY for 1 USD
Open product page
AC: price 0,001 is displayed (wrongly added 0 to have group separator visible)

ER: price 1 is displayed (no decimal part, no preceding 0)



 *Fix submitted by [Volodymyr Kublytskyi](https://github.com/vkublytskyi) in pull request [16590](https://github.com/magento/magento2/pull/16590)*. [GitHub-11711](https://github.com/magento/magento2/issues/11711)





<!-- ENGCOM-2193 -->*
Wrong price amount on product page

related to how Magento handled  of invalid price for integer currencies when amount less than group size

 *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15909](https://github.com/magento/magento2/pull/15909)*. [GitHub-11711](https://github.com/magento/magento2/issues/11711)



<!-- ENGCOM-1106 -->*

Correctly save Product Custom Option values

Certain permutations of product custom options are impossible to save. For example,

This occurred because the same value object is used for saving all values




 *Fix submitted by [Jeroen Van Leusden](https://github.com/JeroenVanLeusden) in pull request [13569](https://github.com/magento/magento2/pull/13569)*. [GitHub-5067](https://github.com/magento/magento2/issues/5067)




<!-- ENGCOM-1911 -->* missing meta title tag and doesn't show product name if meta title is empty

Expected result
should show product name as brower title and should have meta title tag in html source

 *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15532](https://github.com/magento/magento2/pull/15532)*. [GitHub-15501](https://github.com/magento/magento2/issues/15501)


<!-- ENGCOM-2042 -->* Magento now maintains the default products sort order of “newest first” when you upgrade your Magento deployment to 2.2.4. Previously, after upgrade, the default products order in categories changed from “newest first” to “oldest first”. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15629](https://github.com/magento/magento2/pull/15629)*. [GitHub-15627](https://github.com/magento/magento2/issues/15627)


<!-- ENGCOM-1909-->* 

Fixed the check for allowed HTML tags OR wysiwyg for textarea attribute types.
Fix for options so that they can be rendered as HTML as well.

title: Fixes for #15393
url: magento/magento2#15687
contributor name: @simonjanguapa
contributor link: https://github.com/simonjanguapa

https://github.com/magento/magento2/issues/15393

Multiple Select" product attributes do not render HTML tags on the storefront view

Steps to reproduce
I recently update from Magento 2.2.3 to Magento 2.2.4, and then found this error.
On product page, there is an error.

Expected result
Full product page without error. The links on "More Information" tab is clickable. And then after click browser will load and go to the page on link.

Actual result
The links are broken. Not clickable, but to be a plain text. 


<!-- ENGCOM-2408-->* 
Replacing Usage of Deprecated Methods for Message Manager

title: Replacing Usage of Deprecated Methods for Message Manager.
url: magento/magento2#16924
contributor name: @tiagosampaio
contributor link: https://github.com/tiagosampaio

Replacing usage of deprecated methods for message manager.


<!-- ENGCOM-2390-->* 

title: Array short syntax
url: magento/magento2#16880
contributor name: @lfluvisotto
contributor link: https://github.com/lfluvisotto

Array short syntax, uniformity with other codes using [ ]

 app/code/Magento/Catalog/Test/Unit/Model/ProductTest.php
 app/code/Magento/GroupedProduct/Test/Unit/Model/ProductTest.php
 setup/src/Magento/Setup/Module/Di/Code/Reader/FileScanner.php

<!-- ENGCOM-2270-->*
title: Smallest codestyle fix in Option/Type/Text.php
url: magento/magento2#16566
contributor name: @likemusic
contributor link: https://github.com/likemusic

Seems that it have misplaced bracket position but without bug thanx to dynamic type casting.




<!-- ENGCOM-2132-->* Use correct error message for duplicate error key in product import

title: [Backport 2.2] Use correct error message for duplicate error key in product import
url: magento/magento2#16389
contributor name: @gelanivishal
contributor link: https://github.com/gelanivishal


During product CSV import, when a Url key duplicate is detected after the validation phase, the error message display only the error template but not the actual error details.

<!-- ENGCOM-2093-->* 
title: Admin controller product set save refactor
url: magento/magento2#16217
contributor name: @AnshuMishra17
contributor link: https://github.com/AnshuMishra17

Remove direct use of object manager for admin attribute set save controller using constructor based dependency injection.


<!-- ENGCOM-1703-->* Move breadcrumb json configuration to viewmodel and serialize it using Magento json serializer

title: Move breadcrumb json configuration to viewmodel
url: magento/magento2#15521
contributor name: @diedburn
contributor link: https://github.com/diedburn


<!-- ENGCOM-1464-->* 
Added row_id to the flat action indexer so the value isn't s et to 0 for new products when using index on save

If you use the \Magento\Framework\Api\SearchCriteriaBuilder and the flat product row_id is set to 0. The product isn't shown in the getList of the ProductRepository

title: [BUGFIX] Added row_id to the flat action indexer so the value isn't s?
url: magento/magento2#15010
contributor name: @lewisvoncken
contributor link: https://github.com/lewisvoncken


<!-- ENGCOM-1444-->* 

When a product is opened from a homepage and menu has a link to the homepage,
two home links will be inserted into breadcrumbs.

title: Prevent double home links in breadcrumbs at product page
url: magento/magento2#14994
contributor name: @vovayatsyuk
contributor link: https://github.com/vovayatsyuk

<!-- ENGCOM-1553-->* 


title: [Backport 2.2] Fix for displaying a negative price for a custom option.
url: magento/magento2#15202
contributor name: @dverkade
contributor link: https://github.com/dverkade

Fix for displaying a negative price for a custom option.

Description
Currently a negative price is displayed as +-€ 5,51 for instance. By changing the template to check of the value is actually positive, a negative value will be displayed as -€ 5,51 and a positive value will be displayed as +€ 5,51. When the value is exactly 0 nothing will be displayed after the label.


<!-- ENGCOM-1530-->* 

title: Fixed js error when product has double quote in its name
url: magento/magento2#15162
contributor name: @vovayatsyuk
contributor link: https://github.com/vovayatsyuk

When a product has " symbol in its name - js error appears on the page.


<!-- ENGCOM-1404-->* 
Fixed issue products grid operations in admin cart price rule edit page for user which has no access to CatalogRule module

title: Fixed issue products grid operations in admin cart price rule edit page for user which has no access to CatalogRule module
url: magento/magento2#14886
contributor name: @Neos2007
contributor link: https://github.com/Neos2007

Magento 2.2 have multiple admin user roles with access restrictions to some resources. Role has access to cart price rules, but it restricted to catalog rules rules.


Modify method `Magento\CatalogRule\Block\Adminhtml\Promo\Widget\Chooser\Sku::getGridUrl()` method. Change route parameter which it pass in `getUrl` method from `catalog_rule//chooser` to `/*/chooser`.


<!-- ENGCOM-1302-->* 

Optimize ID to SKU lookup of tier prices


title: [2.2] Optimize ID to SKU lookup of tier prices
url: magento/magento2#14699
contributor name: @toddbc
contributor link: https://github.com/toddbc

Previously, with a large number of tier or group prices, each tier would separately make a database query to lookup the associated SKU.

This instead load the ID to SKU mapping once, and uses it for all tiers.

When lookup up a batch of 100 SKUs with hundreds of tier prices per SKU, this cuts lookup time from on the order of 4s to on the order of 0.1s or less.

When editing a B2B shared catalog with many assigned products that have many associated tiered pricing rules, this results in a 50% decrease in load time.


<!-- ENGCOM-1336-->* Display Wrong Data On Cart Update Page

title: Display Wrong Data On Cart Update Page
url: magento/magento2#14765
contributor name: @nit-it
contributor link: https://github.com/nit-it


If we add configurable product in cart with different options And We need to update 1st item from the cart. So we click edit icon and open Update Cart Page But Quantity and Options display wrong on this page.

Description
This request proposes to set Product options and quantity by checking Item Id.


<!-- ENGCOM-1239-->* 
Fix HTML tags in meta description

title: [Forwardport] Fix HTML tags in meta description
url: magento/magento2#14538
contributor name: @davidwindell
contributor link: https://github.com/davidwindell

fixes issue with HTML tags in meta description if no meta description is provided.

Fixed Issues
HTML tags in meta description
Manual testing scenarios
Ensure a product has no meta description but does have a product description with HTML in it
Visit product on front-end and view page source


<!-- ENGCOM-1909-->* 


Fixed the check for allowed HTML tags OR wysiwyg for textarea attribute types.
Fix for options so that they can be rendered as HTML as well.
title: Fixes for #15393
url: magento/magento2#15687
contributor name: @simonjanguapa
contributor link: https://github.com/simonjanguapa


Steps to reproduce
I recently update from Magento 2.2.3 to Magento 2.2.4, and then found this error.
On product page, there is an error.

Expected result
Full product page without error. The links on "More Information" tab is clickable. And then after click browser will load and go to the page on link.

Actual result
The links are broken. Not clickable, but to be a plain text.

https://github.com/magento/magento2/issues/15393



### CAPTCHA

<!-- MAGETWO-91840 -->* Customers can now successfully log `in when guest checkout is disabled and CAPTCHA is enabled. Previously, Magento threw the "Provided form does not exist" error when a customer tried to log in when CAPTCHA is enabled and guest checkout is disabled. 

<!-- MAGETWO-89615 -->* CAPTCHA validation now works when **Website Restrictions** is enabled. 


<!-- ENGCOM-1973 -->*

Out of the box, \Magento\Captcha\Observer\CaptchaStringResolver class is not covered by unit tests. This PR adds unit tests coverage for the mentioned class.

Added unit test for captcha string resolver

 *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [16065](https://github.com/magento/magento2/pull/16065)*. [GitHub-14966](https://github.com/magento/magento2/issues/14966)



<!-- ENGCOM-2013 -->* Captcha: Added unit test for CheckRegisterCheckoutObserver 


 *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [16160](https://github.com/magento/magento2/pull/16160)*.


 <!-- ENGCOM-2531 -->* Disable autocomplete for captcha inputs
 This PR removes captcha input autocomplete


title: Disable autocomplete for captcha inputs
url: magento/magento2#17114
contributor name: @denistrator
contributor link: https://github.com/denistrator


<!-- ENGCOM-2268 -->* Added unit test for CheckGuestCheckoutObserver

This PR adds a missing unit test for \Magento\Captcha\Observer\CheckGuestCheckoutObserver class.



title: Captcha: Added unit test for CheckGuestCheckoutObserver
url: magento/magento2#16680
contributor name: @rogyar
contributor link: https://github.com/rogyar


<!-- ENGCOM-2090 -->*
The integration test checks that the customer login attempts are being removed after a successful login or account details edit

Added integration tests for checking customer login attempts cleanup

title: Captcha: Added integration tests for checking customer login attempts cleanup
url: magento/magento2#16306
contributor name: @rogyar
contributor link: https://github.com/rogyar



add to test


<!-- ENGCOM-2087 -->*

title: Captcha: Added integration test for checking admin login attempts cleanup
url: magento/magento2#16300
contributor name: @rogyar
contributor link: https://github.com/rogyar

The integration test checks that the admin login attempts are being removed after a successful login





### Cart and checkout
title: Captcha: Added unit test for CheckGuestCheckoutObserver
url: magento/magento2#16680
contributor name: @rogyar
contributor link: https://github.com/rogyar

<!-- ENGCOM-2126 -->* Wrong placeholder for password field in the checkout page


Steps to reproduce
Add a product to cart and go to checkout page.
Enter any registered email so that the password field appears.
The password field shows the placeholder Optional, but when we click on Login button without filling password, it shows the validation error.
Expected result
Since the password is a required field, the placeholder for the password field should not be Optional.
Actual result
The password field in the checkout page is currently seeming conflicting in nature. It is showing Optional in a placeholder, but after validation, it is showing validation error This is a required field.


 *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16379](https://github.com/magento/magento2/pull/16379)*. [GitHub-16378](https://github.com/magento/magento2/issues/16378)




<!-- ENGCOM-1941 -->* The dropdown toggle icon on the shopping cart now works as expected. Previously, the arrow did not change direction as expected when you toggled the Doscount or Tax options. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [15991](https://github.com/magento/magento2/pull/15991)*. 




<!-- ENGCOM-1951 -->* bugfix checkout page cart icon color

On smaller screens checkout page cart icon didn't had hover color and regular color was not implemented through correct variable. (Should be button color, not primary color)



 *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16002](https://github.com/magento/magento2/pull/16002)*. 


<!-- ENGCOM-1154 -->* Hit fast twice F5 on checkout page, customer loggs out automatically

Concurrent (quick reload) requests on checkout cause cart to empty - related to session_regenerate_id

Add to cart, try to checkout, cart is empty but mini-cart has items

 *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [14428](https://github.com/magento/magento2/pull/14428)*. [GitHub-4301](https://github.com/magento/magento2/issues/4301), [GitHub-12362](https://github.com/magento/magento2/issues/12362), [GitHub-13427](https://github.com/magento/magento2/issues/13427)




<!-- ENGCOM-1646 -->* The **Purchased Order Form** button is now correctly aligned. *Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request [15331](https://github.com/magento/magento2/pull/15331)*. [GitHub-15334](https://github.com/magento/magento2/issues/15334)

<!-- ENGCOM-1634-->* The **Purchased Order Form** button is now visible. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15372](https://github.com/magento/magento2/pull/15372)*. [GitHub-15334](https://github.com/magento/magento2/issues/15334)

<!-- ENGCOM-1713 -->* Magento no longer displays duplicate element IDs on the Checkout page. *Fix submitted by [Julien ANQUETIL](https://github.com/julienanquetil) in pull request [15585](https://github.com/magento/magento2/pull/15585)*. [GitHub-13415](https://github.com/magento/magento2/issues/13415)



<!-- ENGCOM-1988 -->* 

appended payment code to ID field to make it unique


In payment step of checkout I cannot unselect #billing-save-in-address-book checkbox in non-first payment method

Steps to reproduce
Log in to your client account.
Add product to cart.
Go to checkout and click next button to be able to choose payment methods.
Open payment method other than the first one.
Uncheck My billing and shipping address are the same checkbox
Choose New address on the billing address dropdown
Fill address
Click on label Save in address book
Expected result
The checkbox is unchecked.
Actual result
The checkbox stays checked regardless click on label

 *Fix submitted by [Rakesh Gangani](https://github.com/rakesh-gangani) in pull request [15344](https://github.com/magento/magento2/pull/15344)*. [GitHub-13692](https://github.com/magento/magento2/issues/13692)



<!-- ENGCOM-1298 -->* The `.block-minicart` element on the mini cart dropdown menu no longer has an empty class. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [14715](https://github.com/magento/magento2/pull/14715)*. [GitHub-14669](https://github.com/magento/magento2/issues/14669)

<!-- MAGETWO-92573 -->* Customers can now add configurable products to their shopping cart when Magento is running on Internet Explorer 11.x.

<!--MAGETWO-87872 -->* The free shipping cart price rule now works as expected when the UPS shipping method is enabled. Previously, UPS Ground shipping method was not available for free shipping at checkout when the UPS shipping method was enabled.

<!-- MAGETWO-82132 -->* Cart price rule condition values now handle commas as expected. 

<!-- MAGETWO-69940 -->* Free shipping coupons now works as expected with Table Rates shipping. Previously, Magento displayed this message when a customer tried to use a free shipping coupon: `Sorry, no quotes are available for this order`.  [GitHub-8172](https://github.com/magento/magento2/issues/8172)

<!-- MAGETWO-91112 -->* Magento now displays correct store view prices for cases when a merchant uses a CSV file to add products by SKU  from the Admin.

<!-- MAGETWO-90190 -->* A merchant can successfully use SKU values that contain capital letters to  add a product  to a cart from the Admin. 

<!-- MAGETWO-90053 -->* A customer logged in guest with enabled persistence can now refresh the checkout page without losing any of the data contained in the checkout form. Previously, under these conditions, Magento reset the shipping address to empty fields. 

<!-- MAGETWO-89222 -->* Performance of the checkout process has been improved by limiting shipping rates requests. Previously, orders took significantly longer to complete. 

<!-- MAGETWO-73537 -->* Magento now maintains browser history as expected when a user navigates from the checkout contact information page to the checkout payment information page.  Previously, when a user tried to retrace her steps after landing on the payment information page, Magento did not return them to the checkout contact information page, but instead landed on a product page.  

<!-- MAGETWO-73736 -->* Magento  now displays a message  when a gift card  card is removed during checkout.

<!-- MAGETWO-86470 -->* Guest orders placed with gift cards can now be canceled. 

<!-- MAGETWO-86490 -->* Magento no longer empties a customer's shopping cart if the checkout page is reloaded several times. Previously, when the checkout page is reloaded several times, Magento empties the cart, and the page reloads to an empty cart page.


<!-- ENGCOM-2255 -->* This PR adds an unit test for \Magento\Checkout\Model\Cart\CollectQuote class.
title: Covered Magento\Checkout\Model\Cart\CollectQuote by Unit Test
url: magento/magento2#16271
contributor name: @eduard13
contributor link: https://github.com/eduard13

move to test 



<!-- ENGCOM-2097 -->*
title: Update webapi.xml to fix typo
url: magento/magento2#15845
contributor name: @mhaack
contributor link: https://github.com/mhaack

Update webapi.xml to fix typo

app/code/Magento/Checkout/etc/webapi.xml


<!-- ENGCOM-840 -->*

Add a link to the cart to the success message when adding a product 

title: Add a link to the cart to the success message when adding a product
url: magento/magento2#13904
contributor name: @avstudnitz
contributor link: https://github.com/avstudnitz


If I add a product to the shopping cart, I want to go to the cart directly after that in many cases without having to search for a link. Thus, the link has been added to the success message now.


<!-- ENGCOM-1430 -->*
title: Change 'Update'-button visibility on change qty event.
url: magento/magento2#14935
contributor name: @likemusic
contributor link: https://github.com/likemusic

When qty value in minicat updated by js, Update-button should have the same behavior like when qty is manually edited.


Change 'Update'-button visibility on change qty event


<!-- ENGCOM-1399 -->*
Fix infinite checkout loader when some script wasn't loaded correctly because of network error

title: Fix infinite checkout loader when some script wasn't loaded correctly because of network error
url: magento/magento2#14874
contributor name: @vovayatsyuk
contributor link: https://github.com/vovayatsyuk


Infinite checkout loader may appear when some module makes a require call but the dependency wasn't returned (Network error).

The patch changes how Magento treats isPending modules. If all dependencies are errored - treat it as loaded.


<!-- ENGCOM-1299 -->* minicart label fixed size issue

title: [2.2] Fix - minicart label fixed size issue
url: magento/magento2#14716
contributor name: @Karlasa
contributor link: https://github.com/Karlasa

minicart qty label had fixed size and with longer translation phrases input field was covering label.

Description
Removed row with width attribute.






### Cleanup

<!-- ENGCOM-2385 -->* Remove extra spaces from Magento/Ui
title: Remove extra spaces from Magento/Ui
url: magento/magento2#16872
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram


<!-- ENGCOM-2354 -->*
title: Code improvement
url: magento/magento2#16821
contributor name: @mage2pratik
contributor link: https://github.com/mage2pratik


<!-- ENGCOM-2305 -->*
Remove commented code & remove space
title: Remove commented code & remove space
url: magento/magento2#16748
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram


<!-- ENGCOM-2290 -->*
Add spelling correction: formatedPrice to formattedPrice 
title: [Backport 2.3] Add spelling correction: formatedPrice to formattedPrice
url: magento/magento2#16726
contributor name: @arnoudhgz
contributor link: https://github.com/arnoudhgz

<!-- ENGCOM-2280 -->*
Corrected return message from ProductRuleTest.php
title: Corrected return message from ProductRuleTest.php
url: magento/magento2#16721
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata

<!-- ENGCOM-2283 -->*
Removed space before ending sentence throughout codebase
title: Removed space before ending sentence.
url: magento/magento2#16717
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata

<!-- ENGCOM-2297 -->* Replacing the method proccessAdditionalValidation by processAdditionalValidation. It's was mistype error.
title: Fixing a Mistype Error
url: magento/magento2#16414
contributor name: @tiagosampaio
contributor link: https://github.com/tiagosampaio

<!-- ENGCOM-2276 -->* 
Fixed typo in SynonymGroupRepositoryInterface

title: Fixed typo in SynonymGroupRepositoryInterface
url: magento/magento2#16711
contributor name: @AnshuMishra17
contributor link: https://github.com/AnshuMishra17

<!-- ENGCOM-2249 -->* 
title: Improved code and remove unnecessary space
url: magento/magento2#16678
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram

https://github.com/magento/magento2/pull/15129

 app/code/Magento/Catalog/Pricing/Price/ConfiguredRegularPrice.php


<!-- ENGCOM-2238 -->* Removed double occurrences from Magento modules
Removed below double occurrences from Magento_Catalog, Magento_Customer, Magento_Downloadable, Magento_Sales , lib and dev test function comments.
title: Removed double occurrences from Magento modules.
url: magento/magento2#16644
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata


<!-- ENGCOM-2177 -->* 

Looks like the execution of dev:di:info duplicates info about plugins by for the or the Preference if the same plugin class and its type were introduced in plugins by class name section.

title: [FIX] dev:di:info duplicates plugin info
url: magento/magento2#16474
contributor name: @Coderimus
contributor link: https://github.com/Coderimus

<!-- ENGCOM-2206 -->* Removed double occurrences from files
Removed double occurrences from jQuery, angular JS files and Magento Setup module's scan function's comment.
redundant field and test case names

title: Removed double occurrences from files.
url: magento/magento2#16581
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata

<!-- ENGCOM-2195 -->*

Updated SynonymGroup.xml by removing extra space from the value of is_required XML node.

title: Updated SynonymGroup.xml
url: magento/magento2#16557
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata

Updated SynonymGroup.xml

<!-- ENGCOM-2186 -->*
Removed unused data

app/code/Magento/Ui/Model/Export/ConvertToCsv.php
 app/code/Magento/Ui/Model/Export/ConvertToXml.php

 title: Clear converted file data
url: magento/magento2#16524
contributor name: @gelanivishal
contributor link: https://github.com/gelanivishal


<!-- ENGCOM-2086 -->*
Added and removed unnecessary translation for label/comment tags

Added translation for label and/or comment tags.
Removed unnecessary translation for label and/or comment tags.



title: Added and removed unnecessary translation for label/comment tags
url: magento/magento2#16090
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks



<!-- ENGCOM-2170 -->*
Fixed spell issue in the library file.

title: Fixed spell issue in library
url: magento/magento2#16495
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata


<!-- ENGCOM-2165 -->*

Properly hyphenate "third-party" in message on this page CONTENT > Design > Configuration


title: Properly hyphenate "third-party"
url: magento/magento2#16489
contributor name: @erikhansen
contributor link: https://github.com/erikhansen

<!-- ENGCOM-2057 -->*

title: Removed double occurrence of 'it' from sentences.
url: magento/magento2#16240
contributor name: @NamrataChangani
contributor link: https://github.com/NamrataChangani

Removed double occurrence of 'it' from sentences.
Correct grammar mistakes in sentences. Replaced Is is to It is.
Fixed wrong input string into csv of Magento_Paypal module for en_US locale.

<!-- ENGCOM-2055 -->*
title: Fixed typo error
url: magento/magento2#16247
contributor name: @vgelani
contributor link: https://github.com/vgelani


<!-- ENGCOM-2040 -->*


title: Correct spelling mistakes in Model and library files.
url: magento/magento2#16230
contributor name: @NamrataChangani
contributor link: https://github.com/NamrataChangani

Correct spelling mistakes(Ex: incorrects, atttribute, appropriate) in Model and library files.


<!-- ENGCOM-1797 -->*
title: BACKPORT 2.2 #15695 Fixed a couple of typos
url: magento/magento2#15715
contributor name: @dverkade
contributor link: https://github.com/dverkade


<!-- ENGCOM-1711 -->*

title: Remove extra semicolon from the files
url: magento/magento2#15594
contributor name: @saurabh-aureate
contributor link: https://github.com/saurabh-aureate




<!-- ENGCOM-1700 -->*
Fixed typo error in method description



title: Fixed typo error
url: magento/magento2#15549
contributor name: @vgelani
contributor link: https://github.com/vgelani


<!-- ENGCOM-1697 -->*
title: Remove extra space and format the code in translation file
url: magento/magento2#15552
contributor name: @saurabh-aureate
contributor link: https://github.com/saurabh-aureate



<!-- ENGCOM-1692 -->*

title: Typo correction
url: magento/magento2#15519
contributor name: @saurabh-aureate
contributor link: https://github.com/saurabh-aureate


<!-- ENGCOM-1676 -->*
Fix typos in Multishipping and User module

title: Fix typos in Multishipping and User module
url: magento/magento2#15513
contributor name: @avoelkl
contributor link: https://github.com/avoelkl


<!-- ENGCOM-1651 -->*

title: [Backport] Removed redundant else statement
url: magento/magento2#15435
contributor name: @rogyar
contributor link: https://github.com/rogyar

The "else" statement removed within a scope of app/code/Magento/ConfigurableImportExport/Model/Import/Product/Type/Configurable.php


<!-- ENGCOM-1647 -->*

title: typo correction
url: magento/magento2#15431
contributor name: @AnshuMishra17
contributor link: https://github.com/AnshuMishra17

Changed requere to require in comments for public function addTaxPercents()

 app/code/Magento/Catalog/Model/ResourceModel/Product/Collection.php


 <!-- ENGCOM-1637 -->*


title: [Backport-2.2] Fixed abstract.js typo
url: magento/magento2#15411
contributor name: @VitaliyBoyko
contributor link: https://github.com/VitaliyBoyko


MagentoUI abstract.js:223 typo in doc block


 <!-- ENGCOM-1592 -->*

 title: Removed duplicate line and added comment on variable
url: magento/magento2#15362
contributor name: @vgelani
contributor link: https://github.com/vgelani

app/code/Magento/Sales/Block/Adminhtml/Order/Create/Totals/Discount.php



 <!-- ENGCOM-1593 -->*

`lib/web/css/source/lib/variables/_typography.less`

title: [Backport-2.2] Unused variable removed
url: magento/magento2#15386
contributor name: @VitaliyBoyko
contributor link: https://github.com/VitaliyBoyko



<!-- ENGCOM-1602-->*
title: Fix typos in variable names
url: magento/magento2#15294
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch


<!-- ENGCOM-1599-->*
Fixed typo mistake in function comment
title: Fixed typo mistake in function comment in  app/code/Magento/Paypal/Model/Api/Nvp.php

url: magento/magento2#15302
contributor name: @NamrataChangani
contributor link: https://github.com/NamrataChangani



<!-- ENGCOM-1588-->*

Fix typos in PHPDocs and comments

title: Fix typos in PHPDocs and comments
url: magento/magento2#15293
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch


<!-- ENGCOM-1580-->*
 typo in method name _getCharg[e]ableOptionPrice

 title: [fix] typo in method name _getCharg[e]ableOptionPrice
url: magento/magento2#15276
contributor name: @mhauri
contributor link: https://github.com/mhauri



<!-- ENGCOM-1587-->*

Fix typo in property name
title: Fix typo in property name
url: magento/magento2#15292
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch

 dev/tests/static/testsuite/Magento/Test/Integrity/Magento/Backend/ControllerAclTest.php



<!-- ENGCOM-1586-->* Fix typo in database column comment

title: [Backport] Fix typo in database column comment
url: magento/magento2#15291
contributor name: @VitaliyBoyko
contributor link: https://github.com/VitaliyBoyko

app/code/Magento/Catalog/Setup/InstallSchema.php


<!-- ENGCOM-1584-->*
typo in private method name getUniq[ue]ImageIndex

title: [fix] typo in private method name getUniq[ue]ImageIndex
url: magento/magento2#15282
contributor name: @mhauri
contributor link: https://github.com/mhauri
Private method name \Magento\Catalog\Console\Command\ImagesResizeCommand::getUniqImageIndex contained typo/misspelling.


<!-- ENGCOM-1582-->*


title: Fix typo in Image::open exception message
url: magento/magento2#15269
contributor name: @t-richards
contributor link: https://github.com/t-richards

Fixes a typo in the \Magento\Framework\Image::open exception message.


<!-- ENGCOM-1572-->*

Removed non-existing argument from constructor's comment block
Added space between to member variables

 app/code/Magento/Translation/Block/Html/Head/Config.php
  app/code/Magento/Translation/Model/Json/PreProcessor.php

title: Removed non-existing argument
url: magento/magento2#15249
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks
 app/code/Magento/Translation/Model/Json/PreProcessor.php

<!-- ENGCOM-1575-->*
title: Fixed typo in method name
url: magento/magento2#15256
contributor name: @olmer
contributor link: https://github.com/olmer

Method name \Magento\Framework\App\Request\Http::removeRepitedSlashes contained typo



<!-- ENGCOM-1470-->*
title: Fixes typo
url: magento/magento2#15053
contributor name: @jee1mr
contributor link: https://github.com/jee1mr

 app/code/Magento/CatalogSearch/Block/Advanced/Form.php


<!-- ENGCOM-1458-->*

title: Fixed typos in .less files
url: magento/magento2#15023
contributor name: @kalpmehta
contributor link: https://github.com/kalpmehta

Fixed few typos in .less files.


<!-- ENGCOM-1427-->*
Removed extra close tag
title: Removed extra close tag
url: magento/magento2#14928
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks

Removed extra close tag (</a>) from view file.


app/code/Magento/Review/view/frontend/templates/view.phtml



<!-- ENGCOM-1409-->*
Removed extra spaces from language file

title: Removed extra spaces from language file
url: magento/magento2#14896
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks


Removed extra spaces from a key-value in en_US.csv file. Because of this extra spaces, it's not translated properly.

<!-- ENGCOM-1406-->*

Fix typo in doc for updateSpecificCoupons

title: Fix typo in doc for updateSpecificCoupons
url: magento/magento2#14891
contributor name: @sjb9774
contributor link: https://github.com/sjb9774

Just a tiny typo correction in the ResourceModel\Coupon.php:updateSpecificCoupons doc, as "its" is the possessive form of "it" and "it's" is a contraction of "it" and "is".


<!-- ENGCOM-1306-->*
Code cleanup, add more visibility

title: Code cleanup, add more visibility
url: magento/magento2#14609
contributor name: @thomas-blackbird
contributor link: https://github.com/thomas-blackbird

I was reading some piece of code when I see te "foreach" and "break" statements. I know that the "break" should be avoided, so here my suggestion to retrieve the key of the first element of the array.
Is there a goal to do it via a foreach and break?

I've fixed also some useless "else" statements and add some ternary operators to replace the conditions where there's only a value assignment.

<!--  ENGCOM-1384 -->*

Updated readme.md file 2.2-develop

title: Updated readme.md file 2.2-develop
url: magento/magento2#14844
contributor name: @sidolov
contributor link: https://github.com/sidolov

Fixed grammar issues in the readme.md file


### CMS content

<!-- MAGETWO-92611-->* Page layout issues that resulted from incorrect module sequence have been corrected. Previously, the  `Magento_theme` module was loaded too late, which resulted in unexpected display issues. 

<!-- ENGCOM-1407-->* Fix aggregations use statements and return values

title: [Backport] Fix aggregations use statements and return values
url: magento/magento2#14893
contributor name: @rogyar
contributor link: https://github.com/rogyar

Several classes have wrong use statements for AggregationInterface (Magento\Framework\Search\AggregationInterface instead of Magento\Framework\Api\Search\AggregationInterface).
Also, setAggregations methods don't return a correct value (incompatible with interface annotation).



### Configurable products

<!-- ENGCOM-1686 -->* Customers can now successfully complete check out when their order contains a configurable product with a configurable option. Previously, customers could not check out when there is a configurable product in the cart with a configurable option, which is now deleted, shopping cart could not be loaded. *Fix submitted by [jonshipman](https://github.com/jonshipman) in pull request [15468](https://github.com/magento/magento2/pull/15468)*. [GitHub-15467](https://github.com/magento/magento2/issues/15467)


<!-- MAGETWO-87047 -->* Magento now displays the manufacturer attribute on the Admin on the Catalog page for configurable products. Previously, Magento displayed these attributes on the simple products catalog page, but not on the configurable products catalog page. 

<!-- MAGETWO-86125 -->* Sorting on the price of configurable products with out-of-stock child products  now works properly. Previously, price sorting of configurable products used the price of out-of-stock and disabled child products.


<!-- ENGCOM-2188 -->* Fix zero price simple failed to resolve as default

When two simple products of a configurable have different prices, the lowest price simple product is expected to resolve as the default price showing on product detail page.

If one of the simple products has price=0, it will fail to resolve as default.

Notice that it is an edge case having price=0 product. It probably is still worth fixing.

title: Fix zero price simple failed to resolve as default
url: magento/magento2#16540
contributor name: @torreytsui
contributor link: https://github.com/torreytsui



<!-- ENGCOM-1512 -->* Add missing false-check to the ConfiguredRegularPrice price-model 

title: Add missing false-check to the ConfiguredRegularPrice price-model
url: magento/magento2#15129
contributor name: @tkotosz
contributor link: https://github.com/tkotosz

parent::getValue() can return false while $this->configuredOptions->getItemOptionsValue only accepts float. So if the parent method returns false then it fails with the following error:

NOTICE: PHP message: PHP Fatal error:  Uncaught TypeError: Argument 1 passed to Magento\Catalog\Pricing\Price\ConfiguredOptions::getItemOptionsValue() must be of the type float, boolean given, called in /app/vendor/magento/module-catalog/Pricing/Price/ConfiguredRegularPrice.php on line 74 and defined in /app/vendor/magento/module-catalog/Pricing/Price/ConfiguredOptions.php:24




### Cookie

<!-- ENGCOM-2403 -->* hide cookie notice instead of reloading site

title: hide cookie notice instead of reloading site
url: magento/magento2#16890
contributor name: @torhoehn
contributor link: https://github.com/torhoehn

hide cookie notice instead of reloading site

Instead of reloading the whole site when a use accepts the cookie notice, it should be accpetable to close the cookie notice only.


 app/code/Magento/Cookie/view/frontend/web/js/notices.js






### Customer account

<!-- MAGETWO-92989 -->* Magento no longer logs out a customer after a successful password change.

<!-- MAGETWO-92507 -->* Magento no longer displays the State/Province instead of the State field on U.S. customer address forms.

<!-- MAGETWO-91327 -->* Customer attributes are now correctly validated on the Admin Order form. Previously, Magento validated attributes\ length  after an order has been submitted, but not on the Admin Order form.

<!-- MAGETWO-89624 -->* Customers no longer lose their session when they switch stores on different domains

<!-- MAGETWO-89849 -->* Non-US and non-Canadian addresses that are displayed in the  **Address Book summary**  field now display the State/Province values as expected if that information was provided.

<!-- MAGETWO-89034 -->* The Checkout page now displays custom address attributes when **Show on front-end** is set to **no**. 

<!-- MAGETWO-88411 -->* Magento now displays the default value for a new Customer attribute that is created from the Admin. Previously, Magento set this value to **no** by default. 

<!-- MAGETWO-73827 -->* Administrators can see all customers when the **Share Customer Accounts** value is set to Global. 

<!--  ENGCOM-1680 -->* User login email validation no longer fails if the field contains aleading or trailing space on Internet Explorer 11.x. *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [15365](https://github.com/magento/magento2/pull/15365)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!--  ENGCOM-1987 -->* Customer accounts are now unlocked as expected after a password reset. *Fix submitted by [Andrea Gaspardo](https://github.com/andreagaspardo) in pull request [15255](https://github.com/magento/magento2/pull/15255)*. [GitHub-15534](https://github.com/magento/magento2/issues/15534)


<!--  ENGCOM-1625 -->* When DOB is enabled on the registration page and existing customer tries to re-registration page, DOB format was changed. 

Steps to reproduce:

Enable DOB: Stores->Configuration->Customers->Customer Configuration->Show Date of Birth=Optional(or Required)
Go to Create New Customer Account page

Expected result:
Empty DOB field

Actual result:
DOB field contains default date "1/1/1970".

date format changed after customer tries to register with 

 *Fix submitted by [KaushikChavda](https://github.com/KaushikChavda) in pull request [15272](https://github.com/magento/magento2/pull/15272)*.


<!--  ENGCOM-2089 -->*  Customer group extension attributes not carried over on save
When saving a customer group, extension attributes should be copied to the new data model that is returned. Unfortunately, this action was not completed and results in unexpected behavior.

title: Customer group extension attributes not carried over on save
url: magento/magento2#16254
contributor name: @JosephMaxwell
contributor link: https://github.com/JosephMaxwell


<!--  ENGCOM-1432 -->*
Move customer.account.dashboard.info.extra block to contact information #14923

title: Move customer.account.dashboard.info.extra block to contact information
url: magento/magento2#14923
contributor name: @JeroenVanLeusden
contributor link: https://github.com/JeroenVanLeusden

Move extension block to contact information. Seems not logic to add this to the newsletter section.

 app/code/Magento/Customer/view/frontend/templates/account/dashboard/info.phtml










### Directory

<!--  ENGCOM-2281 -->* 

Configured different 'Allowed Countries' for 'Default' and Store scopes

Configured different 'Allowed Countries' for 'Default' and Store scopes

title: 'Allowed Countries' - get countries for scope 'default'.
url: magento/magento2#16693
contributor name: @swnsma
contributor link: https://github.com/swnsma

Configured different 'Allowed Countries' for 'Default' and Store scopes



### dotmailer
Fixed a regression issue that caused ROI tracking feature to not track order events properly
	•	Fixed an error that was being caused by the importer
	•	Fixed the catalog sync so it now syncs all products across all created collections when it's configured to sync on store level 
	•	Improved validation for new subscribers so that it's no longer possible for them to get enrolled multiple times into the new subscriber program
	•	Fixed occurrences of unexpected errors during subscriber and/or customer creation



### EAV
<!-- MAGETWO- 90576-->* 

Go to Catalog> Products and create new simple product
Open created product
Find "Special requirements" multiselect attribute and set "General" and "Retailer" values
Save product


Magento now correctly multiselect product attributes 

Using a multiselect product attribute with a custom source model in the adminhtml doesn't render selected value
Fixed incorrect behavior in multi-select with custom product attributes. [GitHub-5445](https://github.com/magento/magento2/issues/5445)

Expected result
Multiselect field retrieves selected value.
Actual result
selected value is saved the first time in the db table catalog_product_entity_varchar, and the attribute is added to the eav_attribute table
but when i load the edit product view the data does not load, i.e. the selected options are not highlighted against the attribute.



### Frameworks

<!--  ENGCOM-2532 -->* 
Using interface instead of model directly


 app/code/Magento/Theme/etc/di.xml

<type name="Magento\Framework\App\Area">
        <arguments>
            <argument name="translator" xsi:type="object">Magento\Framework\Translate</argument>
            <argument name="translator" xsi:type="object">Magento\Framework\TranslateInterface</argument>
            <argument name="design" xsi:type="object">Magento\Theme\Model\Design\Proxy</argument>
        </arguments>
    </type>

title: Using interface instead of model directly
url: magento/magento2#17124
contributor name: @woutersamaey
contributor link: https://github.com/woutersamaey

<!--  ENGCOM-1981 -->* We've added support for variadic arguments from method in generated proxy

Pull request fixes proxy class generation, so class with method with variadic arguments can be also used in proxy class.

Description
In Magento/Framework/ObjectManager/Code/Generator/Proxy (lines 158, 159) I added check if parameter is variadic and if so its name is suffixed by '...', so then in method getMethodBody() proxy method body is generated properly.



 *Fix submitted by [vgelani](https://github.com/vgelani) in pull request [16080](https://github.com/magento/magento2/pull/16080)*. 



<!--  ENGCOM-1915 -->* Annotation in  `_toOptionArray - lib\internal\Magento\Framework\Data\SearchResultProcessor.php` has been corrected. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15892](https://github.com/magento/magento2/pull/15892)*. 




<!--  ENGCOM-1374 -->* Scheduled XML sitemap generation now works as expected. Previously, you could schedule sitemap generation (**Admin** > **Store** > **Configuration** > **Catalog** > **XML sitemap**), but Magento would not generate the sitemap. *Fix submitted by [James Halsall](https://github.com/jameshalsall) in pull request [14822](https://github.com/magento/magento2/pull/14822)*. [GitHub-5768](https://github.com/magento/magento2/issues/5768)




<!--  ENGCOM-1356 -->* 



Reset Password Email Issue on Multi Store from Admin

Login to Magento Backend
Create Multi Store with Two Different Stores
Go to Magento Store Frontend in both the Stores
Register Customer on both the Stores from Frontend
Login to Magento Backend if not loggedin already
go to Customers -> All Customers
Find the Customer Id which you have Registered on the Store 2
Click on Edit Customer
Click on the Reset Password Link on the Top

Expected result
The Customer Registered on the Second Store Should Receive the Mail from the Second Store with the Reset Password Link for the Second Store
Actual result
The Customer Regsitered on the Second Store gets the Email from the Default Store or the First Store

 *Fix submitted by [Rodrigo Mourão](https://github.com/rodrigowebjump) in pull request [14800](https://github.com/magento/magento2/pull/14800)*. [GitHub-5726](https://github.com/magento/magento2/issues/5726)


<!--  ENGCOM-1301 -->* The `trigger_recollect` quote attribute no longer causes a time out. *Fix submitted by [Philipp Sander](https://github.com/philippsander) in pull request [14719](https://github.com/magento/magento2/pull/14719)*. [GitHub-9580](https://github.com/magento/magento2/issues/9580)

<!-- MAGETWO-90538 -->* `Framework\Math\Random` now uses PHP 7.x features, including `random_bytes` and `random_int`.







<!-- MAGETWO-91164 -->* The `catalog:image:resize` command execution time has been reduced by 90%. Note: This improvement has necessitated these additional manual steps after you upgrade your Magento shop to 2.2.6: 

	* remove  `pub/media/catalog/product/cache`

	* run `bin/magento catalog:image:resize` 



<!-- MAGETWO-87731 -->* We've fixed a display error that occurred when both a Critical Admin Notification and Release Notification window were opened.


<!--  ENGCOM-2416 -->* Revert changing file permissions

title: Revert changing file permissions in #15144
url: magento/magento2#16937
contributor name: @ihor-sviziev
contributor link: https://github.com/ihor-sviziev

lib/internal/Magento/Framework/View/Asset/Merged.php
0  lib/internal/Magento/Framework/View/Test/Unit/Asset/MergedTest.php


<!--  ENGCOM-2366 -->* 

title: clean code
url: magento/magento2#16841
contributor name: @GraysonChiang
contributor link: https://github.com/GraysonChiang

Just modify some code, and make it Cleaner more...


<!--  ENGCOM-1684 -->* 

title: [fix] dynamical assigned property in webapi
url: magento/magento2#15515
contributor name: @mhauri
contributor link: https://github.com/mhauri

The constructor in Magento\Webapi\Model\Soap\Fault.php assigns the $exception->getOriginator() to a dynamical property `_soapCode` instead of the existing `_soapFaultCode`. See on line 177



<!--  ENGCOM-1628 -->* 

title: #12820 - Wrong annotation in `_toOptionArray` - magento/framework/Data/?
url: magento/magento2#15336
contributor name: @sanjay-wagento
contributor link: https://github.com/sanjay-wagento

Set correct annotation in `_toOptionArray` - magento/framework/Data/Collection/AbstractDb.php

<!--  ENGCOM-1355 -->* 
Invoice grid shows wrong shipping & handling for partial items invoice. It shows order's shipping & handling instead if invoiced shipping& handling charge

title: Invoice grid shows wrong shipping & handling for partial items invoice. It shows order's shipping & handling instead if invoiced shipping& handling charge
url: magento/magento2#14795
contributor name: @ankurvr
contributor link: https://github.com/ankurvr



<!--  ENGCOM-1304 -->* 
Fix/navigation order function

title: Fix/navigation order function
url: magento/magento2#14726
contributor name: @luke-denton-aligent
contributor link: https://github.com/luke-denton-aligent

The return value from the function now lines up with the PHP documentation for the usort, value_compare_func function

<!--  ENGCOM-1317 -->* 
Fix bug with retry connect and custom db port 
title: [Backport] Fix bug with retry connect and custom db port
url: magento/magento2#14753
contributor name: @julienanquetil
contributor link: https://github.com/julienanquetil

Fix a bug in the MySQL adapter when using non standard port

Manual testing scenarios
Use a database config with port, e.g. localhost:3307
On first call to `_connect()`, the config['host'] parameter is split into config['host'] and config['port']
In the `_query()` function, a situation happens that is suitable for a retry (e.g. a "MySQL has gone away" error)
`_connect()` is called again
Expected result
Connection is reestablished and query tried again

Actual result
"Port must be configured within host parameter" exception





#### Application framework

<!-- MAGETWO-92722 -->* You can now manually add a parameter to `app/etc/env.php: user_admin_email`. When an administrator is created, Magento sends an email  to default store's email and, if present, to the email address defined in `user_admin_email`. NEW FEATURE

<!--  ENGCOM-2240 -->* Remove PDF files after generation

Upon invoice/packingslip/credit memo printing the system generates a PDF file directly in the var directory. I see no reason for keeping these files since they are not accessible publicly via web (sharing purpose). There's no "reuse" purpose as well since on every print action a new file with a new filename is being generated.
This PR provides a logic for removing a PDF file once it's generated.
Currently, it's implemented only within a scope of the invoice printing. Once we agree on the solution, I will adjust other places with PDF generation.

title: Remove PDF files after generation
url: magento/magento2#16401
contributor name: @rogyar
contributor link: https://github.com/rogyar

https://github.com/magento/magento2/issues/3535
Print pdf don't delete file in var folder

https://github.com/magento/magento2/issues/14517

Steps to reproduce
Create invoice
Print invoice
Expected result
PDF Generation (maybe in cache) happens properly for client and user
PDF maybe should not be created at all?
Actual result
Creates PDF copy in the /var folder


<!--  ENGCOM-2371 -->* 

Log when Magento is in maintenance mode
Logging when Magento is in maintenance mode.

Not sure if I'm the only one that fell for this, but I've (embarrassingly) spent hours trying figuring out why Magento was throwing a 500 error; only to find that it was just in maintenance mode...

Logging this will save developers some time, and eliminate some of the guess work involved with troubleshooting obscure errors.
=> var/log/system.log <==
[2018-07-15 19:38:12] main.ERROR: Unable to proceed: the maintenance mode is enabled.

title: Log when Magento is in maintenance mode
url: magento/magento2#16840
contributor name: @Ethan3600
contributor link: https://github.com/Ethan3600



<!--  ENGCOM-2240 -->* 
title: Remove PDF files after generation
url: magento/magento2#16401
contributor name: @rogyar
contributor link: https://github.com/rogyar

https://github.com/magento/magento2/issues/3535

Create invoice
Print invoice
Expected result
PDF Generation (maybe in cache) happens properly for client and user
PDF maybe should not be created at all?





#### JavaScript framework
title: Remove PDF files after generation
url: magento/magento2#16401
contributor name: @rogyar
contributor link: https://github.com/rogyar

https://github.com/magento/magento2/issues/3535





<!--  ENGCOM-1677 -->* lib/web/mage/dropdowns.js fails when autoclose is set to true


Magento's lib/web/mage/dropdowns.js has a bug that prevents a developer from specifying autoclose: false as an option for the dropdown function.



 *Fix submitted by [Brian LaBelle](https://github.com/brian-labelle) in pull request [15499](https://github.com/magento/magento2/pull/15499)*. [GitHub-15469](https://github.com/magento/magento2/issues/15469)


<!-- MAGETWO-89264 -->* Checkout now works when the AdBlock extension and Google Analytics are enabled. Previously, the Checkout page was not accessible,  and Magento displayed the loading spinner.

<!-- MAGETWO-90193 -->* You can now view an entire zoomed product image in Fotorama fullscreen from the FireFox browser. Previously, the image jumps and the user can not view all portions of the image. [GitHub-7978](https://github.com/magento/magento2/issues/7978)


#### Web API framework


<!--  ENGCOM-2012 -->* array_push(...) calls behaving as '$array[] = ...', $array[] = works faster than invoking functions in PHP



the array_push function now added to the list of forbidden functions


 *Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request [16144](https://github.com/magento/magento2/pull/16144)*. 



<!--  ENGCOM-1720 -->* Generated admin API token expires immediately


When you create a token for an admin user and have set the options (Admin Token Lifetime (hours)) to empty, you will get an access denied because the token immediately expires.


Steps to reproduce
Create admin token with /V1/integration/admin/token
Do any other call with this token
Expected result
get result back for given API call
Actual result
Consumer is not authorized to access %resources



 *Fix submitted by [Maikel Martens](https://github.com/krukas) in pull request [15598](https://github.com/magento/magento2/pull/15598)*. [GitHub-15564](https://github.com/magento/magento2/issues/15564)



<!-- MAGETWO-92122 -->* The `GET /V1/returns?searchCriteria` endpoint retrieves `tracks` arrays as expected.

<!-- MAGETWO-86099 -->* The `GET /V1/returns/:id` endpoint retrieves `tracks` arrays as expected.



<!--  ENGCOM-2218 -->* 
Fix type hints in Webapi/Controller/Soap/Request/Handler.php and Webapi/Model/Plugin/GuestAuthorization.php

Fix incorrect case in property annotation in Soap\Server.php on line 34

add undefined property `_appState in Controller\Soap.php` on line 104

Fix method Magento\Webapi\Model\Soap\Fault::toXml() invoked with 1 parameter, 0 required in Soap\FaultTest.php on line 128

title: [Backport] Fix type hints and add undefined property in Webapi [2.3-develop]
url: magento/magento2#16626
contributor name: @mageprince
contributor link: https://github.com/mageprince






#### Cache framework

<!-- MAGETWO-69847 -->* Magento no longer throws an exception when deploying static content on a deployment where Redis is used for cache management. See "Redis and static-content deployment" in [Redis troubleshooting](https://devdocs.magento.com/guides/v2.2/cloud/trouble/redis-troubleshooting.html) for more information. [GitHub-9287](https://github.com/magento/magento2/issues/9287)

<!-- MAGETWO-84109 -->* When a layout is loaded from the cache, Magento now repopulates the list of applied layout handles to prevent any chance of a layout handle being reapplied later. *Fix submitted by [Scott Buchanan](https://github.com/scottsb) in pull request [12314](https://github.com/magento/magento2/pull/12314)*.


### Dashboard


<!--  ENGCOM-1867 -->* Wrong order amount on dashboard on Last orders listing when having more than one website with different currencies

 *Fix submitted by [Ankur Raiyani](https://github.com/ankurvr) in pull request [15661](https://github.com/magento/magento2/pull/15661)*. [GitHub-15660](https://github.com/magento/magento2/issues/15660)

### Directory

<!--  ENGCOM-2073 -->* 
Update Israeli ZIP code mask: 7 digits instead of 5

The Israeli ZIP code format had changed 2 years ago.
Magento uses the 5 digits format. It's old and outdated.
The new format is 7 digits.

title: Update Israeli ZIP code mask: 7 digits instead of 5
url: magento/magento2#16250
contributor name: @itaymesh
contributor link: https://github.com/itaymesh





### General

<!-- MAGETWO-90968 -->* Magento now uses the correct amounts when creating a credit memo for an order that was placed using store credit, a gift card, or reward points. 

<!-- MAGETWO-91411 -->* Magento now removes only the products that were checked for deletion. Previously, Magento removed all products although only a single product was selected for deletion on when accessing a store a slow internet connection. 

<!-- MAGETWO-91928 -->* You can now successfully save a product video for one store view in deployments that have several store views. Previously, when you saved a product video for one store view, Magento saved it for all store views, although customers could play the video on the original store only. 

<!-- MAGETWO-91931 -->* Customer data is now fully loaded after restarting the browser during an unexpired user session. Previously,  the `section_data_ids` section of the session cookie was not preperly completed. [GitHub-14912](https://github.com/magento/magento2/issues/14912)

<!-- MAGETWO-91000 -->* We've fixed an issue with unoptimized SQL queries in customer segments. Previously, the  customer segment was not saved, and MySQL crashed. 

<!-- MAGETWO-90246 -->* When a customer creates a product review, the link to the product from the review in the customer's **My Account** > **My Product Review** is now SEO friendly.

<!-- MAGETWO-87356 -->* The My Invitations page now accurately displays the reward points amount in numbers. Previously, this page displayed the special character `%` instead of numbers. 

<!-- MAGETWO-73512 -->* The Enterprise Reward refund logic  no longer permits administrators to grant double refunds.

<!-- MAGETWO-85112 -->* We moved the`isAllowed` method from `AccessChangeQuoteControl` to a separate service to optimize the logic that supports using recurrent payments in combination with pre-ordered products. *Fix submitted by [Jeroen Van Leusden](https://github.com/JeroenVanLeusden) in pull request [12566](https://github.com/magento/magento2/pull/12566)*.

<!-- MAGETWO-83551 -->* The attribute checking logic has been optimized by reducing redundant checks. *Fix submitted by [Freek Vandeursen](https://github.com/FreekVandeursen) in pull request [11554](https://github.com/magento/magento2/pull/11554)*.

<!-- MAGETWO-86239 -->* Magento no longer validates customer address attribute value length when the minimum/maximum length fields are not displayed on the Admin. 

<!-- ENGCOM-1679 -->* The dropdown menu is now positioned as expected under the link on the UI Component listing. *Fix submitted by [Ankur Raiyani](https://github.com/ankurvr) in pull request [15661](https://github.com/magento/magento2/pull/15661)*. [GitHub-15660](https://github.com/magento/magento2/issues/15660)

<!-- MAGETWO-87120 -->* The timestamp field now includes indexes, which reduces the chances of deadlocks that occur while  erasing old records.  *Fix submitted by [Carlos Lizaga](https://github.com/KarlDeux) in pull request [13328](https://github.com/magento/magento2/pull/13328)*. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!-- ENGCOM-1767 -->*  `setCateroryIds([])` has been corrected to `setCategoryIds([])` throughout the test suites. *Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request [15621](https://github.com/magento/magento2/pull/15621)*. [GitHub-15590](https://github.com/magento/magento2/issues/15590)

<!-- ENGCOM-1762 -->* Menus with nested elements now align correctly. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15645](https://github.com/magento/magento2/pull/15645)*. [GitHub-7897](https://github.com/magento/magento2/issues/7897)




<!-- ENGCOM-1858 -->* 

Steps to reproduce
Log in with an admin user who does not have the permissions Other Settings -> Notifications -> *
Right after login try to download any PDF or export data
Expected result
Download of generated file
Actual result
Redirect to Admin Dashboard
If you are trying a second time to download PDF or export it will work. 

First PDF download / export after login


 *Fix submitted by [Riccardo Tempesta ](https://github.com/phoenix128) in pull request [15539](https://github.com/magento/magento2/pull/15539)*. [GitHub-15510](https://github.com/magento/magento2/issues/15510)



<!-- ENGCOM-1805 -->* Merchants can now apply styling by changing LESS variables in the Luma theme as expected. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15734](https://github.com/magento/magento2/pull/15734)*. [GitHub-15608](https://github.com/magento/magento2/issues/15608)


<!-- ENGCOM-1853 -->* We've removed an unused class from the `lib/_forms.less` file. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15791](https://github.com/magento/magento2/pull/15791)*. 


<!-- ENGCOM-1861 -->* We've removed unnecessary CSS code from  `_actions-toolbar.less`. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15789](https://github.com/magento/magento2/pull/15789)*. 



<!-- ENGCOM-1850 -->* We've removed the uneccessary double semicolon from the style sheets. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15795](https://github.com/magento/magento2/pull/15795)*. 



<!-- ENGCOM-1880 -->* We've removed the unused code from `docs.less`. *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15871](https://github.com/magento/magento2/pull/15871)*. 




<!-- ENGCOM-1860 -->* Add Ability To Separate Frontend / Adminhtml in New Relic

Adds a new setting which, when enabled, reports frontend and adminhtml as separate apps to New Relic.



frontend and adminhtml are in addition to the "main" app which includes both (for backwards compatibility). The user needs to set "New Relic Application Name" to use this feature as the area is appended to the appname setting, separated by and underscore.


Useful as slow transactions in admin activity can cause false positives New Relic alerts / skew average response time metrics. Using this feature allows monitoring and alerting on only frontend traffic by configuring alerts for just the frontend New Relic app.

 *Fix submitted by [Max Chadwick](https://github.com/mpchadwick) in pull request [12935](https://github.com/magento/magento2/pull/12935)*. 



<!-- ENGCOM-1864 -->*  Issue is caused by missing table alias prefixes in field mappings for customer group filter and sorting processors.


In a custom module add the following mysql table for storing customer group preferences with one-to-one relation to customer group:

In a custom module add the following extension attribute to customer group

Refresh caches
Go to Admin -> Customers -> All Customers page.

Expected result
A page is opened normally
Actual result
SQL Error happens:

SQL Error: ambiguous column 'customer_group_id' in 'All customers' page in admin when extension attribute table is joined



Add missing table aliases to fields mapping for Customer Group filter


 *Fix submitted by [Maksim Gopey](https://github.com/Radio) in pull request [15826](https://github.com/magento/magento2/pull/15826)*. 




<!-- ENGCOM-1897 -->* Correct typo correction js files

* Prepare storages congfig.
         * Prepare storages config.

         in file-uploader.js and storage-manager.js 


for example, itertor to iterator, and aditional to additional

 *Fix submitted by [saurabh-aureate](https://github.com/saurabh-aureate) in pull request [15888](https://github.com/magento/magento2/pull/15888)*. 




<!-- ENGCOM-1883 -->* limiter float too generic

Expected result
.limiter should have the same parent selectors like .pages to prevent clashes between styles and layouts
Actual result
.limiter is too generic and is used as single selector for floating the element

 *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15878](https://github.com/magento/magento2/pull/15878)*. 






<!-- ENGCOM-1925 -->*
 Corrected virtula to virtual in scripts.js. 

 *Fix submitted by [Ledian Hymetllari](https://github.com/ledian-hymetllari) in pull request [15878](https://github.com/magento/magento2/pull/15907)*. 




<!-- ENGCOM-1923 -->* removed extraneous margin on product list and product list items

Change in the theme which gives the same effect, but removes the negative margin which was compensated with a padding.




Steps to reproduce
open list view of products on a page
inspect the list .column.main .product-items and one product .products-list .product-item
Expected result
there should not be any extraneous styles
Actual result
there are negative and positive margins which do nothing combined



 *Fix submitted by [Steven de Jong](https://github.com/StevenGuapaBV) in pull request [15936](https://github.com/magento/magento2/pull/15936)*. [GitHub-15308](https://github.com/magento/magento2/issues/15308)


<!-- ENGCOM-1942 -->* The default `FormElementDependenceController` configuration is now extended by custom configuration rather than overridden.  *Fix submitted by [Valerij Ivashchenko](https://github.com/likemusic) in pull request [16001](https://github.com/magento/magento2/pull/16001)*.



<!-- ENGCOM-1958 -->* prevent inline-block issue in name form due to space and font-size

open a page where the name form is eg /customer/account/edit/
compare the space between asterisk / required field indicator to other fields with the required field indicator




 *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [16048](https://github.com/magento/magento2/pull/16048)*. 




<!-- ENGCOM-1959 -->* Correct code formatting

with fixing indentation in LESS files

 *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15811](https://github.com/magento/magento2/pull/15811)*. 



<!-- ENGCOM-1896 -->* Solve overlapping Issue on every Home page & category page of

Alignment & overlapping Issue on every Home page & category page of Hot Seller section

Steps to reproduce
On Home page there are issue worth alignment for after the second row of product listing (Hot seller section)
On Category Page there are section name Hot seller that section also same issue
Expected result
It would be in same alignment either same as second row or first row but alignment will be same

 *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15893](https://github.com/magento/magento2/pull/15893)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)



<!-- ENGCOM-1886 -->*

Currently all old font formats of the default font(s) are used but are not needed.

IE9+ and others support woff and woff2 which are much smaller and better.



 *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15870](https://github.com/magento/magento2/pull/15870)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)




<!-- ENGCOM-2011 -->* We've corrected the return type of methods and  typos in `CategoriesJson.php`, `Engine.php`, `UrlRewrite.php`, and `ObserverConfig.php`. *Fix submitted by [saurabh-aureate](https://github.com/saurabh-aureate) in pull request [15993](https://github.com/magento/magento2/pull/15993)*. 



<!-- ENGCOM-1991 -->* `@escapeNotVerified` annotations were replaced in `name.phtml` and `qty.phtml`. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15532](https://github.com/magento/magento2/pull/15532)*. [GitHub-15501](https://github.com/magento/magento2/issues/15501)



<!-- ENGCOM-2016 -->* The syntax for before-after operators in LESS files has been corrected. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16181](https://github.com/magento/magento2/pull/16181)*. 



<!-- ENGCOM-2018 -->* Redundant keywords have been removed from miscellaneous files. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16182](https://github.com/magento/magento2/pull/16182)*. 




<!-- ENGCOM-2019 -->* We've corrected misspellings in the  comment section of `OrderFixture.php`.  *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16183](https://github.com/magento/magento2/pull/16183)*. 



<!-- ENGCOM-1607 -->* We've removed redundnat function calls in `app/code/Magento/CurrencySymbol/view/adminhtml/templates/grid.phtml`. 
 *Fix submitted by [Saurabh Parekh](https://github.com/saurabh-parekh) in pull request [15346](https://github.com/magento/magento2/pull/15346)*. [GitHub-15355](https://github.com/magento/magento2/issues/15355)


<!-- ENGCOM-1659 -->* 


In the etc/view.xml for the theme if you set the following the zoom does not work as expected:
<var name="magnifier"> <var name="mode">inside</var> <var name="eventType">hover</var> <var name="enabled">true</var> </var>
Instead of an in-frame zoom the lens does not appear. If you change mode back to outside it functions as expected.

Magnifier doesn't work with mode set to inner

 *Fix submitted by [Kacper Chara](https://github.com/kacperchara) in pull request [15382](https://github.com/magento/magento2/pull/15382)*. [GitHub-4977](https://github.com/magento/magento2/issues/4977)

<!-- ENGCOM-1680 -->* Unnecessary leading and trailing spaces have been removed from the customer account login page email field. *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [15365](https://github.com/magento/magento2/pull/15365)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2023 -->* Unnecessary leading and trailing spaces have been removed from fields in the customer account create and login forms. *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [16192](https://github.com/magento/magento2/pull/16192)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2198 -->* Unnecessary leading and trailing spaces have been removed from fields in newsletter, forgot password, checkout login and email to a friend forms. *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [16564](https://github.com/magento/magento2/pull/16564)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2381 -->* Unnecessary leading and trailing spaces have been removed from fields in the customer confirmation form. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16595](https://github.com/magento/magento2/pull/16595)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!-- ENGCOM-2007 -->* The Change Password warning message no longer appears twice. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request [15774](https://github.com/magento/magento2/pull/15774)*. [GitHub-14895](https://github.com/magento/magento2/issues/14895)

<!-- ENGCOM-2559 -->* 

On occasion the admin url may be leaked to the frontend. This can (and has) result in the admin URL being available in search engines. This provides easy targets for brute force/password guessing hacks.

This fix will add a meta tag which instructs Google and other friendly bots not to add the admin URL to search results.
title: Add meta NOINDEX,NOFOLLOW to admin scope to avoid accidental crawling
url: magento/magento2#17163
contributor name: @cmtickle
contributor link: https://github.com/cmtickle

<!-- ENGCOM-2545 -->* 
 a grammatical error on the vault tooltip
 Fixed a grammar error in the "What is this" tooltip for Braintree save for later. Changed "you" to "your".

 title: Fixed a grammatical error on the vault tooltip
url: magento/magento2#17151
contributor name: @kreativedev
contributor link: https://github.com/kreativedev


<!-- ENGCOM-2507 -->* title: Remove commented code
url: magento/magento2#17077
contributor name: @mage2pratik
contributor link: https://github.com/mage2pratik

Remove commented code from files
app/code/Magento/Review/Model/ResourceModel/Rating/Collection.php
 app/code/Magento/Sales/Model/Order/Creditmemo.php
  lib/internal/Magento/Framework/Data/Form/Element/Checkboxes.php
   lib/internal/Magento/Framework/Model/ResourceModel/Db/Relation/ActionPool.php


<!-- ENGCOM-2485 -->*

Remove spaces around amount span

title: Remove spaces around amount span.
url: magento/magento2#17027
contributor name: @likemusic
contributor link: https://github.com/likemusic

There is unnecessary spaces exists around price. Therefor if add some text after span with price there is one crossed space shown after price.

<!-- ENGCOM-2443 -->*

title: fix: add hasrequired notice for create account form and password forg?
url: magento/magento2#16965
contributor name: @DanielRuf
contributor link: https://github.com/DanielRuf


Currently the forms for "create account" and "password forget" do not have the notice for the required fields. This PR adds it.

<!-- ENGCOM-2437 -->*
Slight Changes to Code

title: Slight Changes to Code
url: magento/magento2#16921
contributor name: @tiagosampaio
contributor link: https://github.com/tiagosampaio



<!-- ENGCOM-2398 -->*

title: Add Clean Code
url: magento/magento2#16900
contributor name: @hryvinskyi
contributor link: https://github.com/hryvinskyi


<!-- ENGCOM-2282 -->*
Admin user auth controller refactor

title: Admin user auth controller refactor
url: magento/magento2#16560
contributor name: @AnshuMishra17
contributor link: https://github.com/AnshuMishra17

Refactor the code by removing the direct use of ObjectManager and includes the dependencies using Constructor Dependency Injection

<!-- ENGCOM-2461 -->*
Remove unused comments from `_initDiscount()` function

title: [Backport] Remove unused comments from `_initDiscount()` function
url: magento/magento2#17002
contributor name: @mageprince
contributor link: https://github.com/mageprince


<!-- ENGCOM-2451 -->*

Fixed a couple of spelling mistakes

title: Fixed a couple of spelling mistakes
url: magento/magento2#16980
contributor name: @mage2pratik
contributor link: https://github.com/mage2pratik

app/code/Magento/Catalog/Block/Adminhtml/Product/Attribute/Set/Main/Tree/Attribute.php

app/code/Magento/Catalog/view/adminhtml/web/js/product/weight-handler.js
app/code/Magento/Signifyd/Test/Unit/Controller/Webhooks/HandlerTest.php
app/code/Magento/Ui/view/base/web/js/lib/core/element/element.js
 dev/tests/functional/tests/app/Magento/Widget/Test/Constraint/AssertWidgetCmsPageLink.php, among others


<!-- ENGCOM-2209 -->*

As gallery.less is not part of default styles-l and styles-m files and gallery.less is not using any breakpoints there is no need to import `_responsive.less`

removed `_responsive.less` import from `gallery.less`

title: removed `_responsive.less` import from `gallery.less`
url: magento/magento2#16579
contributor name: @Karlasa
contributor link: https://github.com/Karlasa


<!-- ENGCOM-2384 -->*
Add Confirm Modal Width
title: Add Confirm Modal Width
url: magento/magento2#16861
contributor name: @hryvinskyi
contributor link: https://github.com/hryvinskyi


Added the lost confirm modal width

`lib/web/css/source/components/_modals.less`


<!-- ENGCOM-2370 -->*
Add @api annotation to Filter Group & Sort Order
title: [Backport] Add @api annotation to Filter Group & Sort Order
url: magento/magento2#16845
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram

This PR adds the FilterGroup and SortOrder classes to the public API for the magento/framework component. They are the only pieces of SearchCriteriaInterface that are not identified with an @api annotation. This causes usages of them for searching repositories in modules to depend on the patch level of the framework. Once merged, modules may use them while depending on the major version of the framework.

move to framework


<!-- ENGCOM-2293 -->*
Toolbar pager item has font-size atribute twice, should be defined only once.

title: fix `_utilities.less` font-size issue
url: magento/magento2#16716
contributor name: @Karlasa
contributor link: https://github.com/Karlasa

<!-- ENGCOM-2284 -->*
The e-mail address is responding with an autoreply which tells to use bugcrowd. So just mention bugcrowd instead so people don't loose time typing & encrypting a mail which has no use.


title: Updated security issues details
url: magento/magento2#16685
contributor name: @quisse
contributor link: https://github.com/quisse


<!-- ENGCOM-2194 -->*

Small improvements of docBlock for app/code/Magento/Sales/Model/Order.php docBlock description.
hasInvoices(), hasShipments(), hasCreditmemos() returns int and not bool

title: Fix docBlock for hasInvoices(), hasShipments(), hasCreditmemos()
url: magento/magento2#16554
contributor name: @nuzil
contributor link: https://github.com/nuzil




<!-- ENGCOM-2145 -->*

Fixed type hints and docs for Downloadable Samples block

title: Fixed type hints and docs for Downloadable Samples block
url: magento/magento2#16408
contributor name: @phoenix-bjoern
contributor link: https://github.com/phoenix-bjoern


<!-- ENGCOM-2193 -->* Fix for Wrong price amount on product page

This PR fixes broken currency format for some locales.

title: [Backport] Fix for Wrong price amount on product page
url: magento/magento2#15909
contributor name: @gelanivishal
contributor link: https://github.com/gelanivishal

https://github.com/magento/magento2/issues/11717



<!-- ENGCOM-2159 -->* 
title: fix: change "My Dashboard" to "My Account", fixes #16007
url: magento/magento2#16009
contributor name: @DanielRuf
contributor link: https://github.com/DanielRuf

change "My Dashboard" to "My Account"


<!-- ENGCOM-1717 -->* 
Set correct annotation to formatDateTime function in lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php file

title: set correct annotation
url: magento/magento2#15602
contributor name: @sanjay-wagento
contributor link: https://github.com/sanjay-wagento



<!-- ENGCOM-1658 -->* 

<!-- ENGCOM-1579 -->* 
fixes for instant purchase module from 

title: [backport] fixes for instant purchase module from #15257
url: magento/magento2#15258
contributor name: @mhauri
contributor link: https://github.com/mhauri

The Method get($type) in /Magento/InstantPurchase/Model/ShippingMethodChoose/DeferredShippingMethodChooserPool.php throws an Exception without showing the shipping method $type as it was hardcoded as'chooser'.

<!-- ENGCOM-1618 -->* 
I have added module name on a template file as per Magento standard coding format.

title: Fixed set template syntax issue
url: magento/magento2#15398
contributor name: @vgelani
contributor link: https://github.com/vgelani



<!-- ENGCOM-1476 -->* 
title: fixed documentation about viewModels. The key in xml should be view_m?
url: magento/magento2#15067
contributor name: @Jakhotiya
contributor link: https://github.com/Jakhotiya

\Magento\Backend\Block\Template documents view models and how to use them in blocks. The key used in arguments was viewModel which is wrong. Changed it to view_model and added an extra line about how to call these view models



fixed documentation about viewModels. The key in xml should be view_model instead of viewModel


<!-- ENGCOM-1439 -->* 

Format the javascript code in the template file.


title: Format the javascript code
url: magento/magento2#14967
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks


<!-- ENGCOM-1375 -->* 

title: Fix a non well formed numeric value encountered on Magento/Directory/?
url: magento/magento2#14833
contributor name: @bmxmale
contributor link: https://github.com/bmxmale

Fix notice message after convert price on emails.



Description
main.CRITICAL: Notice: A non well formed numeric value encountered in /srv/magento2/vendor/magento/module-directory/Model/Currency.php on line 219

{"exception":"[object] (Exception(code: 0): Notice: A non well formed numeric value encountered in /srv/magento2/vendor/magento/module-directory/Model/Currency.php on line 219 at /srv/magento2/vendor/magento/framework/App/ErrorHandler.php:61)"}



<!-- ENGCOM-1352 -->* 

Update Readme file for magento2 repository 

title: Update Readme file for magento2 repository
url: magento/magento2#14790
contributor name: @sidolov
contributor link: https://github.com/sidolov

Updated readme.md

Added Maintainers section
Added Contributors section
Changed links to documentation


<!-- ENGCOM-1338 -->* 

Add expanded documentation to AdapterInterface::update 

title: [Backport] Add expanded documentation to AdapterInterface::update
url: magento/magento2#14769
contributor name: @navarr
contributor link: https://github.com/navarr


This adds a long description to AdapterInterface::update detailing how the $where parameter works





### Gift cards 

title: Admin user auth controller refactor
url: magento/magento2#16560
contributor name: @AnshuMishra17
contributor link: https://github.com/AnshuMishra17


<!-- MAGETWO-92988 -->* Magento now displays the **Credit Memo** link  at the top of the page for orders with a total of 0 (zero). Previously, this link was missing, which prevented users from creating a credit memo for the order. 

<!-- MAGETWO-92362 -->*  You can now save gift cards without the price being changed on the Admin to an unacceptable format. Previously, Magento tried to save amounts in unacceptable formats (such as the inclusion of a comma in a four-digit price), which triggered an error.  

<!-- MAGETWO-91925 -->* Magento no longer permits users to save a new gift card  without first completing the required values. Previously, when creating a gift card, users could save the card without having designated an amount, but it could not be purchased. Magento also created a `report.CRITICAL: Warning` in the `system.log`.

<!-- MAGETWO- 91867-->* Orders now retain gift message information on both item and order level. Previously, gift messages disappeared from an order when a customer logs into his account during checkout. 

<!-- MAGETWO-91576 -->* Magento now maintains relationships between new gift card accounts when a customer purchases severalgit cards in the same order. 

<!-- MAGETWO-91400 -->* Magento now refunds only the exact amount used on a gift card if only the partial gift card was  used. Previously, when a customer used a gift card account code to partially pay for an order,  and Magento subsequently created a credit memo for a portion of the order, the full amount of the gift card was refunded.

<!-- MAGETWO-86757 -->* Magento now generates the correct number of gift card codes when the full order is invoiced as the customer selects when creating an order. Previously, for orders that included both physical products and multiple gift cards, the number of gift card codes  generated on an order corresponded to the quantity of the previous physical line items that the user had added to the cart before adding gift cards.



### Google Analytics

<!-- ENGCOM-1825 -->* Google analytics pageview is no longer triggered twice. *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [15765](https://github.com/magento/magento2/pull/15765)*. [GitHub-12221](https://github.com/magento/magento2/issues/12221)


<!-- ENGCOM-2537 -->* Added unit test for order success observer

title: GoogleAnalytics: Added unit test for order success observer
url: magento/magento2#17137
contributor name: @rogyar
contributor link: https://github.com/rogyar

This PR adds missing unit test for Magento\GoogleAnalytics\Observer\SetGoogleAnalyticsOnOrderSuccessPageViewObserver class

### Google Tag Manager

<!-- MAGETWO-91951 -->* The `addToCart` event triggers on the Google Task Manager console only when an item is added to the cart.  Previously, the event was triggered before the cart was updated. 

<!-- MAGETWO-89532 -->* Google Analytics events are now triggered expected. Specifically,  the  `addToCart` and `removeFromCart` events are not triggered until after a customer adds a product to the mini cart. 

<!-- MAGETWO-87955 -->* Magento now accurately updates the mini cart when a customer removes a product while accessing a storefront using Internet Explorer 11.x. Previously, when a customer removed a product from the mini cart, Magento did not remove the product but instead threw this error, `(SCRIPT438: Object doesn't support property or method 'find'. File: sidebar.js, Line: 237, Column: 13 )`. 

<!-- MAGETWO-88806 -->* Google Tag Manager product category data is now fully reported. Previously, the Google Tag Manager product category (Enhanced Ecommerce) data did not report all information. 




### GraphQL





### HTML

<!-- ENGCOM-2178 -->*

Fix responsive tables showing broken heading

title: Fix responsive tables showing broken heading
url: magento/magento2#16517
contributor name: @LordZardeck
contributor link: https://github.com/LordZardeck

When no heading is present in the data-th attribute on a column for a responsive table in Magento, a blank colon is present. This is easily fixed by only showing the before css on an element with the data-th attribute present.



<!-- ENGCOM-1654 -->*

Fix HTML syntax in report.phtml error template
title: Fix HTML syntax in report.phtml error template
url: magento/magento2#15454
contributor name: @abcpremium
contributor link: https://github.com/abcpremium



### Import/export

<!-- ENGCOM-2304 -->* Product import now updates the **Enable Qty Increments** field as expected. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [14379](https://github.com/magento/magento2/pull/14379)*. [GitHub-14351](https://github.com/magento/magento2/issues/14351)


<!-- ENGCOM-1549 -->* 
Magento_ImportExport not supporting unicode characters in column names
title: Fix Magento_ImportExport not supporting unicode characters in column names
url: magento/magento2#15197
contributor name: @tdgroot
contributor link: https://github.com/tdgroot
Column names like vitamin_a_µg were being marked invalid.





### Infrastructure

<!-- MAGETWO-92303 -->* Magento now sends email when the status of an RMA changes to Return Received, Approved, or Rejected. Previously, no email was sent to the customer who created the order.

<!-- MAGETWO-92302 -->* The RMA status label now shows on the email that Magento sends to customers when the status of an RMA changes.

<!-- MAGETWO-72090 -->* Magento now deselects only the attributes you choose to deselect when you deselect the **Use Default Value** setting on a store view for certain attributes. Previously, when you deselected the **Use Default Value** setting on a store view for certain attributes, Magento unselected other attributes as well. 

<!-- MAGETWO-88615 -->* Magento now deploys the translations in `js-translation.json` file when deploying static content.  *Fix submitted by [Sergey Dmitruk](https://github.com/SergeyDmitruk) in pull request [14290](https://github.com/magento/magento2/pull/14290)*. [GitHub-1821](https://github.com/magento/magento2/issues/1821)

<!-- ENGCOM-2304 -->* Magento now updates the `Enable Qty Increments` field as expected during product import. *Fix submitted by [Alexander Lukyanov](https://github.com/sashas777) in pull request [15144](https://github.com/magento/magento2/pull/15144)*. [GitHub-11354](https://github.com/magento/magento2/issues/11354)

<!-- ENGCOM-1875 -->* We've expanded the  HTTP request class byadding the  `isPostRequest` method. *Fix submitted by [Pavel Usachev](https://github.com/pusachev) in pull request [12626](https://github.com/magento/magento2/pull/12626)*. 

<!-- ENGCOM-1952 -->* You can now change only the primary button `font-weight` without changing regular button `font-weight` with LESS variables.
*Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16012](https://github.com/magento/magento2/pull/16012)*. [GitHub-15832](https://github.com/magento/magento2/issues/15832)

<!-- ENGCOM-1917 -->* We've added missing properties to the `Magento/Widget` component and removed a  reference to a non-existent class in the associated tests.  *Fix submitted by [Marcel Hauri](https://github.com/mhauri) in pull request [15647](https://github.com/magento/magento2/pull/15647)*. 

<!-- ENGCOM-1960 -->* We've improved the readability of `app/code/Magento/Backend/Block/Widget/Form/Element/Dependence.php`. *Fix submitted by [Valerij Ivashchenko](https://github.com/likemusic) in pull request [16010](https://github.com/magento/magento2/pull/16010)*. 

<!-- ENGCOM-1611 -->* Template syntax errors in `app/code/Magento/Theme/Block/Html/Breadcrumbs.php` has been corrected. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15339](https://github.com/magento/magento2/pull/15339)*. [GitHub-15345](https://github.com/magento/magento2/issues/15345)

<!-- ENGCOM-2107 -->* The calendar widget (`jQuery UI DatePicker`) now correctly displays more than one month. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16279](https://github.com/magento/magento2/pull/16279)*. [GitHub-7379](https://github.com/magento/magento2/issues/7379)

<!-- ENGCOM-2211 -->* An error with the template notation for `Magento_CatalogWidget` module has been fixed. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16530](https://github.com/magento/magento2/pull/16530)*. [GitHub-16529](https://github.com/magento/magento2/issues/16529)


<!-- ENGCOM-2077 -->* You can now use the `addTabAfter` method to add two or more tabs to the Admin area (for example, the Order View page) in the expected order. Previously, Magento did not preserve the correct sort order for the new tabs. *Fix submitted by [Tiago Sampaio](https://github.com/tiagosampaio) in pull request [16175](https://github.com/magento/magento2/pull/16175)*. [GitHub-16174](https://github.com/magento/magento2/issues/16174)

<!-- ENGCOM-2263 -->* The headers of the User Agent Rules table now align as expected with the content of the table's rows. *Fix submitted by [Justin](https://github.com/JRhyne) in pull request [16704](https://github.com/magento/magento2/pull/16704)*. [GitHub-16703](https://github.com/magento/magento2/issues/16703)

<!-- ENGCOM-2288 -->* We've added `@navigation-level0-item__hover__color` missing variable for mobile and tablet view. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16732](https://github.com/magento/magento2/pull/16732)*. [GitHub-15848](https://github.com/magento/magento2/issues/15848)



<!-- ENGCOM-2336 -->* Store view home pages in multistore deployments no longer display breadcrumbs. Previously, the first store view in a multistore deployment looked fine, but the other dtore views included unneccessary breadcrumbs on the home page.  *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [16732](https://github.com/magento/magento2/pull/16732)*. [GitHub-6504](https://github.com/magento/magento2/issues/6504)

PRIVATE REPO -- ask Lori



<!-- ENGCOM-2412 -->* HTML minification now works as expected. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [16916](https://github.com/magento/magento2/pull/16916)*. [GitHub-5316](https://github.com/magento/magento2/issues/5316)


<!-- ENGCOM-2295 -->* The type of the `transport` event parameter  has been changed to `DataObject`. This change reverts a change from type `DataObject` to `Array()` made in a previous release. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16599](https://github.com/magento/magento2/pull/16599)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)





<!-- ENGCOM-1467 -->* Transport variable cannot be altered in email_invoice_set_template_vars_before Event


*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [15040](https://github.com/magento/magento2/pull/15040)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)





<!-- ENGCOM-2591 -->* 
title: Replaced deprecated methods in 

 app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/ApplyRules.php
app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/Delete.php
app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/Edit.php
 app/code/Magento/CatalogRule/Controller/Adminhtml/Promo/Catalog/Save.php
  app/code/Magento/CatalogRule/Plugin/Indexer/Product/Attribute.php




url: magento/magento2#17227
contributor name: @tiagosampaio
contributor link: https://github.com/tiagosampaio


<!-- ENGCOM-2553 -->* 

title: Replaced deprecated methods.
url: magento/magento2#17035
contributor name: @tiagosampaio
contributor link: https://github.com/tiagosampaio

title: Replaced deprecated methods in (44 files)

Ask Lori


<!-- ENGCOM-2533 -->* 
Uniform jquery variable to "$" as this javascript is partially using "jquery" and partially "$".

The line 62 will cause an error in Internet Explorer if $ is not declared.


title: Update template.js
url: magento/magento2#17129
contributor name: @angelomaragna
contributor link: https://github.com/angelomaragna


<!-- ENGCOM-2522 -->* 

title: [Backport] Fix app/code/Magento/Backend/Block/Media/Uploader.php getConfigJson() method
url: magento/magento2#17099
contributor name: @mageprince
contributor link: https://github.com/mageprince

This method is using an undefined class property `_coreData`, that method cannot work, only crash if called, since it will try to call jsonEncode() method from a null property (even if defined dynamically).

Fix app/code/Magento/Backend/Block/Media/Uploader.php getConfigJson() method

<!-- ENGCOM-2476 -->* Adjust page-main container height for sticky footer;

title: Adjust page-main container height for sticky footer; fixes #15118
url: magento/magento2#17006
contributor name: @denistrator
contributor link: https://github.com/denistrator

Responsive Design, Footers do not snap to bottom of screen on mobile devices
https://github.com/magento/magento2/issues/15118

<!-- ENGCOM-2458 -->* Correct return type of methods in 
 app/code/Magento/Catalog/Controller/Category/View.php
  app/code/Magento/CatalogSearch/Model/Indexer/Fulltext/Action/DataProvider.php
   app/code/Magento/CatalogSearch/Model/ResourceModel/EngineInterface.php

title: Correct return type of methods
url: magento/magento2#16988
contributor name: @mage2pratik
contributor link: https://github.com/mage2pratik

<!-- ENGCOM-2456 -->* Fix misprint ('_requesetd' > '_requested')
Fix misprint: rename `_requesetd` to `_requested'` in  app/code/Magento/Ui/view/base/web/js/lib/core/element/element.js

title: Fix misprint 

url: magento/magento2#16971
contributor name: likemusic
contributor link: https://github.com/likemusic




<!-- ENGCOM-2480 -->* Mobile device style groups incorrect order
Style groups for mobile devices (max-width) are specified in the wrong order.

In `lib/web/css/source/lib/_responsive.less` the style groups run breakpoint-size ascending: 319px, 479px, 639px, 767px, which leads to outputting max-width media queries breakpoint-size ascending - the last-defined breakpoint overrides smaller screen size breakpoints...

title: Resolved : Mobile device style groups incorrect order
url: magento/magento2#16959
contributor name: @tejash-wagento


https://github.com/magento/magento2/issues/14476


<!-- ENGCOM-2447 -->*

https://github.com/magento/magento2/pull/16644

Removed below double occurrences of words from Magento_Catalog, Magento_Customer, Magento_Downloadable, Magento_Sales , lib and dev test function comments.

title: Removed double occurrences from Magento modules
url: magento/magento2#16977
contributor name: @mage2pratik
contributor link: https://github.com/mage2pratik


<!-- ENGCOM-2446 -->* Wrong namespace defined in compare.phtml
title: Wrong namespace defined in compare.phtml
url: magento/magento2#16978
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram


<!-- ENGCOM-2424 -->* Reduce lengthy code of LoginPost

itle: Reduce lengthy code of LoginPost
url: magento/magento2#16928
contributor name: @GlennCheng
contributor link: https://github.com/GlennCheng


<!-- ENGCOM-2396 -->* Fixing annotations for some methods
title: Fixing annotations for some methods.
url: magento/magento2#16899
contributor name: @tiagosampaio
contributor link: https://github.com/tiagosampaio

 lib/internal/Magento/Framework/Acl/AclResource/Config/Converter/Dom.php
  lib/internal/Magento/Framework/Acl/AclResource/Config/SchemaLocator.php
   lib/internal/Magento/Framework/Acl/Loader/ResourceLoader.php


<!-- ENGCOM-2389 -->*
Removed commented code and make it cleaner more.

app/code/Magento/Backend/Block/Dashboard/Bar.php
 app/code/Magento/Catalog/Setup/InstallData.php
  app/code/Magento/Newsletter/Block/Adminhtml/Template/Edit.php
  app/code/Magento/Review/Block/Adminhtml/Add/Form.php
  app/code/Magento/Sales/Model/Order/Creditmemo.php
   app/code/Magento/Sales/view/adminhtml/templates/order/totals.phtml


<!-- ENGCOM-2404 -->*
Microrefactoring in product gallery block helper

title: Microrefactoring in product gallery block helper
url: magento/magento2#16889
contributor name: @likemusic
contributor link: https://github.com/likemusic

app/code/Magento/Catalog/Block/Adminhtml/Product/Helper/Form/Gallery.php


<!-- ENGCOM-2388 -->* Remove duplicated string
title: Remove duplicated string.
url: magento/magento2#16882
contributor name: @likemusic
contributor link: https://github.com/likemusic


"Images And Videos","Images And Videos" - twice repeated.

 app/code/Magento/ProductVideo/i18n/en_US.csv


<!-- ENGCOM-2327 -->*

Avoid undefined index warning when using uppercase reserved word 

title: Avoid undefined index warning when using uppercase reserved word
url: magento/magento2#16785
contributor name: @FreekVandeursen
contributor link: https://github.com/FreekVandeursen

ReservedWordsSniff will trigger an undefined index error if a reserved word is used in uppercase.

Manual testing scenarios
Create a class containing a reserved word, with at least 1 uppercase character (e.g. Bool)
execute phpcs codesniffer with dev/tests/static/framework/Magento/ruleset.xml ruleset
Expected result
Code sniffer error "Cannot use "Bool" in namespace as it is reserved since PHP 7"

Actual result
Code sniffer error "An error occurred during processing; checking has been aborted. The error message was: Undefined index: Bool"

<!-- ENGCOM-2274 -->*
Update regex in ControllerAclTest

title: Update regex in ControllerAclTest
url: magento/magento2#16707
contributor name: @aleron75
contributor link: https://github.com/aleron75

Change regex in ControllerAclTest::getControllerPath() to avoid classes which are under a namespace with a "Controller" part (like for example controller plugins) being interpreted as controllers causing the Act test to fail.

<!-- ENGCOM-2259 -->*
Added title attribute to img tag in knockout template files.


title: Added 'title' attribute to 'img' tag in knockout template files.
url: magento/magento2#16691
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata


<!-- ENGCOM-2256 -->*
Added title attribute to a link to make it compatible with w3c standards


title: Added 'title' attribute to 'a' link.
url: magento/magento2#16689
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata


<!-- ENGCOM-2196 -->*
Search icon should not be defined by minicart icon colors and header icon variables should used instead.

title: fix icon color variable naming
url: magento/magento2#16559
contributor name: @Karlasa
contributor link: https://github.com/Karlasa


<!-- ENGCOM-2202 -->*
Declare module namespace before template path name

When we override any core block to any custom module, It throws an error because it tries to find template file in the custom module if we do not declare module namespace before template path.


Declare module namespace before template path name.
For example: protected `$_template = 'Magento_Customer::form/newsletter.phtml';`

title: [Backport] Declare module namespace before template path name
url: magento/magento2#16576
contributor name: @mageprince
contributor link: https://github.com/mageprince


<!-- ENGCOM-2191 -->*

Corrected function comment for Magento Setup module includeClasses function.

title: Corrected function comment
url: magento/magento2#16549
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata


<!-- ENGCOM-2162 -->*
The CLI command module:status provides a listing of all enabled and disabled modules. However, it is hard to determine whether a certain module is enabled or disabled: You always need scrolling and the output is not easily parsed for further automation. This PR adds a couple of things:

title: Enhancements to module:status command
url: magento/magento2#15543
contributor name: @jissereitsma
contributor link: https://github.com/jissereitsma



<!-- ENGCOM-1979 -->*

title: Fix false cache_lifetime usage in xml layouts
url: magento/magento2#16086
contributor name: @yuriyDne
contributor link: https://github.com/yuriyDne

Fix cache_lifetime usage with false value


<!-- ENGCOM-2143 -->*

CSRF tokens should be considered sensitive strings. While the risk of a malicious actor attempting gleam the form key via a timing attack is very low, we should still follow best practices in verifying this token.

title: Use constant time string comparison in FormKey validator
url: magento/magento2#13509
contributor name: @p0pr0ck5
contributor link: https://github.com/p0pr0ck5


<!-- ENGCOM-2071 -->*
title: Fix missing PHPDocs hinting for AdvancedPricingImportExport module
url: magento/magento2#15872
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch

Fix missing PHPDocs hinting for AdvancedPricingImportExport module classes
Remove redundant @throws hinting
Remove unused import


<!-- ENGCOM-2034 -->*
title: PHPDoc
url: magento/magento2#16215
contributor name: @lfluvisotto
contributor link: https://github.com/lfluvisotto

PHPDoc in methods that were missing



<!-- ENGCOM-2045 -->*
title: Fix case mismatch call (class/method)
url: magento/magento2#16141
contributor name: @lfluvisotto
contributor link: https://github.com/lfluvisotto

Fix case mismatch call (class/method), code quality.


<!-- ENGCOM-2039 -->*

title: 15863: [Forwardport] Refactored javascript code of admin notification modal popup
url: magento/magento2#16216
contributor name: @IvanPletnyov
contributor link: https://github.com/IvanPletnyov

Refactored javascript code of admin notification modal popup


<!-- ENGCOM-1630 -->*
title: chore: remove extraneous cursor property
url: magento/magento2#15305
contributor name: @DanielRuf
contributor link: https://github.com/DanielRuf

cursor is not usable with pointer-events: none. Also this would add the not-allowed cursor which does not make much sense imho.


remove extraneous cursor property

<!-- ENGCOM-1688 -->* Use stored value of method instead of calling same method again.


title: Use stored value of method instead of calling same method again.
url: magento/magento2#15517
contributor name: @saurabh-aureate
contributor link: https://github.com/saurabh-aureate





<!-- ENGCOM-1655 -->*
forgot to add lowercase conversion on grouped product assignation 

title: [Fix] forgot to add lowercase conversion on grouped product assignation
url: magento/magento2#15312
contributor name: @jalogut
contributor link: https://github.com/jalogut



<!-- ENGCOM-1643 -->*

title: Prevent multiple add-to-cart initializations in case of ajax loaded product listing
url: magento/magento2#15409
contributor name: @vovayatsyuk
contributor link: https://github.com/vovayatsyuk

catalogAddToCart widget initialize its functions for all suitable elements:

Template: https://github.com/magento/magento2/blob/2.2-develop/app/code/Magento/Catalog/view/frontend/templates/product/list.phtml#L124
Widget: https://github.com/magento/magento2/blob/2.2-develop/app/code/Magento/Catalog/view/frontend/web/js/catalog-add-to-cart.js#L29
This commit fixes this by additional catalog-addtocart-initialized flag.


<!-- ENGCOM-1641 -->*

title: Refactored javascript code of admin notification modal popup
url: magento/magento2#15341
contributor name: @rahul-kachhadiya
contributor link: https://github.com/rahul-kachhadiya


Refactored javascript code from popup.phtml according to Magento way.
Created a JS component file js/system/messages/popup.js

<!-- ENGCOM-1641 -->*
Removed duplicated phpdoc comment
Fixed class variable phpdoc comment
Removed deprecated private method getSerializer, serializer injected in constructor instead

Fix \Magento\Customer\Model\Customer\NotificationStorage class



title: Fix \Magento\Customer\Model\Customer\NotificationStorage class
url: magento/magento2#15262
contributor name: @adrian-martinez-interactiv4
contributor link: https://github.com/adrian-martinez-interactiv4


<!-- ENGCOM-1520 -->*

title: Fixed Issue #11354 Merged CSS file name generation
url: magento/magento2#15144
contributor name: @sashas777
contributor link: https://github.com/sashas777

https://github.com/magento/magento2/issues/11354

Steps to reproduce
Store >> configuration > advanced > developer
Merge and minify CCS & JS
deleted static content & deploy the static content again
Expected result
change the CCS merged file name
Actual result
always the same file name , example


<!-- ENGCOM-1515 -->*
Add concrete type hints for product and category resources

This helps with static analysis and IDE autocompletion

Description
Attributes and methods have been overridden from the abstract model, where they are declared as AbstractDb type.

title: [Backport] Add concrete type hints for product and category resources
url: magento/magento2#15136
contributor name: @rogyar
contributor link: https://github.com/rogyar


<!-- ENGCOM-1452 -->*
title: chore: use random_int() in some places
url: magento/magento2#15017
contributor name: @DanielRuf
contributor link: https://github.com/DanielRuf

This PR is for evaluating the possible increased security for generating random numbers in some modules.




<!-- ENGCOM-1446 -->* small optimization in if-condition

There is no needs to cast $value to bool in runtime because it have value === '' by if-condition above


title: small optimization in if-condition
url: magento/magento2#15002
contributor name: @likemusic
contributor link: https://github.com/likemusic


<!-- ENGCOM-1453 -->*
title: chore: upgrade Node.js to 8
url: magento/magento2#15018
contributor name: @DanielRuf
contributor link: https://github.com/DanielRuf

Node.s 6 a bit old (4 is EOL since last month), 8 is the current LTS release and 10 is the current stable. So we should check the current Node.js LTS release which will also bring a better performance (and also automatic npm 5 with automatic package-lock.json generation).



<!-- ENGCOM-1434 -->*

title: use "Module_Name::template/path" format instead of using template/path i?
url: magento/magento2#14946
contributor name: @Jakhotiya
contributor link: https://github.com/Jakhotiya


Often third party modules override core block classes. If the source block classes reference a template without specifying module name like "Vendor_Module::template_path" then block render fails with "nvalid template file: " error.



use "Module_Name::template/path" format instead of using template/path in Block class to ensure extensibility of the class. not doing so causes invalid template errors after extending the block class via preference


<!-- ENGCOM-1405 -->*
title: Corrected @param in comment block
url: magento/magento2#14892
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks

Corrected @param in comment block

The parameters mentioned in the comment block above constructor are not identical with the parameters passed in the constructor.

Description
Replaced \Magento\Backend\Helper\Data parameter with \Magento\Backend\Model\UrlInterface to make them identical with contructor.



<!-- ENGCOM-1403 -->*

Changed return type of addToCartPostParams to array
title: Changed return type of addToCartPostParams to array
url: magento/magento2#14876
contributor name: @LordZardeck
contributor link: https://github.com/LordZardeck

app/code/Magento/Catalog/Block/Product/ListProduct.php



<!-- ENGCOM-1270 -->*

Datepicker problem when using non en-US locale

title: Fix: Datepicker problem when using non en-US locale.
url: magento/magento2#14627
contributor name: @tao-s
contributor link: https://github.com/tao-s

Current code convert date format "yyyy/MM/dd" to "YYYYYYYY/MM/DD".



<!-- ENGCOM-1270 -->* title: CSS load order incorrect using default_head_blocks.xml #1821
url: magento/magento2#14290
contributor name: @SergeyDmitruk
contributor link: https://github.com/SergeyDmitruk

For my theme I am loading in two stylesheets: one from a CDN (cdn.css) and one from my theme (local.css). They should be loaded in this order in the DOM but it does not preserve the order indicated by the XML.

This is what I have in default_head_blocks.xml in the correct order:

<css src="https://example.com/cdn.css" src_type="url" />
<css src="css/local.css" />
But in the DOM it does not load in this order: local.css is loaded in first and cdn.css second.

I believe this to be a bug - am I missing additional configuration to set load order for these assets?


Added new attribute 'order' for set loading order .
Those attribute resolve issue about render files for some order.


<!-- ENGCOM-2455 -->*
Change controller to use result redirect factory which fixes error message display on advanced search form.

The way the redirect was initiated from the result controller needed to be changed to use a result redirect so that the error message would be written to the cookie. Without this, the Index controller wouldn't be called when Page Cache was enabled, and the error message would never reach the page.

There is a bug in advanced search form regarding validation messages

https://github.com/magento/magento2/issues/8131

Go on the site "advanced search" and click the submit button below the form without any entries.
Then click for example on the "sign in" link in the top right corner.
Expected result
Validation message (Please specify at least one search term) appears on the same site (advanced search) above the form after you click the submit button.
Actual result
No message appears, rather on random site after you submit the advanced search form without entries.


<!-- MAGETWO-84477 -->* 

Simplified TypeProcessor methods to retrieve method param addition description and array param type


 title: Simplified \Magento\Framework\Reflection\TypeProcessor
 - url: [magento/magento2#12324|https://github.com/magento/magento2/pull/12324]
 - contributor name: @joni-jones
 - contributor link: https://github.com/joni-jones



<!-- MAGETWO-87024 -->* 

A negative basket total is produced when:

tax was applied;
shipping was calculated and saved; and
basket is emptied
This PR fixes the issue by completing an earlier return on tax total collector that failed to unset taxed shipping total information.




### JavaScript
<!-- ENGCOM-1640 -->* Refactor javascript code of button split widget 

*Fix submitted by [Amit](https://github.com/amittiwari024) in pull request [15351](https://github.com/magento/magento2/pull/15351)*. [GitHub-15354](https://github.com/magento/magento2/issues/15354)



### Klarna

* Fixed product tax 


### Module Manager


<!-- ENGCOM-1633 -->* Module Manager module grid is not working 


*Fix submitted by [Alex Gusev](https://github.com/flancer64) in pull request [15211](https://github.com/magento/magento2/pull/15211)*. [GitHub-15192](https://github.com/magento/magento2/issues/15192)



### MSI
<!-- ENGCOM-1869 -->*

*Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15840](https://github.com/magento/magento2/pull/15840)*.



### Newsletter

<!-- MAGETWO-88217 -->* Guest users can now sign up for newsletters for multiple stores. Previously, when a guest user signed up for a newsletter from multiple stores, Magento sent a subscription confirmation message, but did not successfully subscribe the user. 


<!-- MAGETWO-87969 -->* Magento now correctly updates newsletter subscriptions  when the customer is registered on two stores. Previously, when the customer tried to subscribe to the newsletter from a second store, Magento displayed this message, `You are (not) subscribed to "General Subscription"`. 



<!--  ENGCOM-1573 -->* The newsletter subscription confirmation message does not display after a customer clicks the link in email. *Fix submitted by [Kaushik Chavda](https://github.com/KaushikChavda) in pull request [15247](https://github.com/magento/magento2/pull/15247)*. [GitHub-14747](https://github.com/magento/magento2/issues/14747)


<!-- ENGCOM-2144 -->* "Confirmation request" email is sent on customer's newsletter unsubscription

*Fix submitted by [Lyzun Oleksandr](https://github.com/nuzil) in pull request [15464](https://github.com/magento/magento2/pull/15464)*. [GitHub-15218](https://github.com/magento/magento2/issues/15218)


<!-- ENGCOM-2379 -->*

Remove direct use of object manager

Remove the direct use of object manager and loaded the dependency via constructor dependency injection in app/code/Magento/Newsletter/Controller/Adminhtml/Subscriber/MassDelete.php and app/code/Magento/Newsletter/Controller/Adminhtml/Subscriber/MassUnsubscribe.php. 

Unsubscribe the newsletter subscribers using the unsubscription mass action in admin.
Deleted the newsletter subscribers using the delete mass action in admin.



title: Remove direct use of object manager
url: magento/magento2#16851
contributor name: @AnshuMishra17
contributor link: https://github.com/AnshuMishra17

<!-- ENGCOM-2272 -->*

Fix newsletter subscription behaviour for registered customer

title: Fix newsletter subscription behaviour for registered customer.
url: magento/magento2#15479
contributor name: @nuzil
contributor link: https://github.com/nuzil

PR fix remove $isSubscribeOwnEmail var from subscribe($email) method and behaviour will be the same in both cases for subscribe to newsletter action: from MyAccount and from newsletter block.

ask Claire for link to UG



<!-- ENGCOM-2236 -->*

Updated Magento_Newsletter's block file(<root>\app\code\Magento\Newsletter\Block\Adminhtml\Template\Edit.php).
Removed double return statement from function getJsTemplateName comment.

title: Updated Magento_Newsletter's block file.
url: magento/magento2#16645
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata



### Payment methods


<!--  ENGCOM-1462 -->* The `Allmethods config` source model now reports the full list of payment methods as expected. *Fix submitted by [Manuel Schmid](https://github.com/mash1t) in pull request [15032](https://github.com/magento/magento2/pull/15032)*. [GitHub-13460](https://github.com/magento/magento2/issues/13460)

<!-- MAGETWO-85908 -->* You can now cancel an order placed through Cybersource when the fraud filters are triggered.

<!-- MAGETWO- 92625-->* Magento now emails customer order confirmations for orders that are placed through Worldpay.

<!-- MAGETWO-92784 -->* Magento now correctly applies free shipping to an order after the customer applied the free shipping code  during checkout. 

<!-- MAGETWO-92820 -->* Customers can now continue creating an order  after a PayFlow Pro payment has been declined. Previously, under these circumstances. the customer could not continue his purchase. 

<!-- MAGETWO-90571 -->* Magento no longer sends Admin orders to Signifyd for review when Signifyed is disabled on the website on which the administrator is logged in. 

<!-- MAGETWO-90533 -->* Magento now successfully creates shipping labels for a return merchandise authorization (RMA) when using FedEx Smart Post as the shipping option. Previously, Magento threw an error under these circumstances. 

<!-- MAGETWO-89995 -->* Paypal Onboarding has been configured to work for  merchants from  countries other than the United States.

<!-- MAGETWO-88244 -->* Magento now accurately displays the status of PayPal orders. Previously, the status of PayPal orders was displayed only as  **Processing**. 

<!-- MAGETWO-89221 -->* You can now cancel an order that was placed with Braintree when the Braintree authorization had expired. 

<!-- MAGETWO-84495 -->* Magento now sends email about payment failures to customers. Previously, Magento did not send a customer email, but instead logged an error in the `support.log`, and displayed this message on the storefront, **Transaction has been declined. Please try again later**.



<!--  ENGCOM-1648 -->* Resolve Knockout non-unique elements id in console error

Previously, when a merchant tried to enable more then one payment method from the Admin, Magento displayed this error in the console, `Found elements with non-unique id billing-address-form`. *Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request [15349](https://github.com/magento/magento2/pull/15349)*. [GitHub-15348](https://github.com/magento/magento2/issues/15348)


<!-- ENGCOM-2021 -->* Argument 1 passed to Magento\Sales\Model\Order\Payment must be an instance of Magento\Framework\DataObject, none given

*Fix submitted by [Oleh Kravets](https://github.com/xpoback) in pull request [16194](https://github.com/magento/magento2/pull/16194)*. [GitHub-16184](https://github.com/magento/magento2/issues/16184)




<!-- ENGCOM-2149 -->*

Add missing showInStore attributes on Braintree configuration as there are some values that are changeable on store view (title, descriptors, merchant name override) and are not accessible from store view level due to the missing store view level permission for the containing group.


title: Add missing showInStore attributes
url: magento/magento2#16458
contributor name: @aschrammel
contributor link: https://github.com/aschrammel


<!-- ENGCOM-1581 -->*

title: [fix] typo in method name `_exportAddress[s]es`
url: magento/magento2#15275
contributor name: @mhauri
contributor link: https://github.com/mhauri

Method name `\Magento\Paypal\Model\Api\Nvp::_exportAddressses` contained typo
Renamed it to `_exportAddresses`.


<!-- ENGCOM-1513 -->*
Fix outdated address data when using Braintree's "Pay with PayPal" button 

title: Fix outdated address data when using Braintree's "Pay with PayPal" button
url: magento/magento2#15133
contributor name: @vovayatsyuk
contributor link: https://github.com/vovayatsyuk

This commit fixes the case when customer navigates back
to the shipping step and change address fields.


<!-- ENGCOM-1372 -->*
Duplicate Order Confirmation Emails for PayPal Express checkout order 

title: Duplicate Order Confirmation Emails for PayPal Express checkout order
url: magento/magento2#14820
contributor name: @rocketweb
contributor link: https://github.com/rocketweb


Duplicate Order Confirmation Emails PayPal




### Pagecache

<!-- MAGETWO-92757 -->* 

The full page cache now returns a pagetitle: Fix outdated address data when using Braintree's "Pay with PayPal" button
url: magento/magento2#15133
contributor name: @vovayatsyuk
contributor link: https://github.com/vovayatsyuk

This commit fixes the case when customer navigates back
to the shipping step and change address fields.

 when it is opened  the second or more times on the non-default website of a deployment on more than one website. 






### Performance

<!-- MAGETWO-47320 -->* The Catalog Rule re-indexing operation has been optimized, and average re-indexing time (which depends on rule conditions) has improved by more than  80%.  Previously, a full Catalog Rule re-index operation on a medium B2C store took more than 20 minutes. 


<!-- MAGETWO-86143 -->* Merchants can now improve store performance by disabling Magento Report functionality if business function does not require this capability. A new configuration setting  (**System Configuration**: **General** > **Reports** > **General Options**) allows merchants to disable Magento Reports, which is recommended practice  if a merchant's business function do not require this capability.


<!-- MAGETWO-92154 -->* As a developer, using Magento Cloud, I want to be easily able to change my store's locales.

when Magento is in Production mode and the `static_content_on_demand_in_production` flag is enabled, we unlock Locale field for store configurations (menu Stores > Settings > Configuration , section General > General > Locale Options) 
 if locale exists in app/etc/config.php file, the locale will be locked despite the Magento mode. 
the same behavior is for Admin locale, so when Magento is in Production mode and static_content_on_demand_in_production flag is enabled we display the whole list of locales for choosing in adding/edditing admin user (System -> Permissions -> All Users) 

Cloud

Ask cloudvolk for description and link to docs -- add heather's link



 <!-- MAGETWO-90572 -->* The time required to load category or product pages for products that are configured with many attributes (more than 500) has been significantly reduced. Refactoring the logic for product attribute retrieval has resulted in a reduction of operating time of almost 90% for certain scenarios. 

 <!-- MAGETWO-88670 -->* The time required to load a store’s home page has been reduced noticeably when the top menu contains many categories.  (Load time is still affected by the number of categories and the structure of the top menu.)

<!-- ENGCOM-1294 -->* 
Catalog price rule save is too slow

title: Catalog price rule save is too slow #13378
url: magento/magento2#14707
contributor name: @chrom
contributor link: https://github.com/chrom

There are actually more than one thing wrong here:

Function after save of Magento\CatalogRule\Model\Rule walks through collection of products and triggers the reindex, regardless of indexing setting. It may do nothing, but the fact that it does go over the data set makes this action really slow. Plus, depending on third party integrations, it may trigger unwanted sync at this point. And I know that what third party extensions do is not under your control, just pointing out that something is triggered and that is not supposed to happen at this time.
They way it fetches the affected products is wrong. Function getMatchingProductIds will not scope the collection by category. And if that is your only condition, you will get whole catalog, even though the rule will affect only two products in that category. With the large enough set, code will end up checking potentially hundreds of thousands of products instead of just one category.



### Quote

<!-- ENGCOM-1414 -->*

*Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [14904](https://github.com/magento/magento2/pull/14904)*. [GitHub-14869](https://github.com/magento/magento2/issues/14869)


<!-- ENGCOM-1441 -->* Magento now successfully saves the value of `REMOTE_IP` when a customer uses an IPV6 (Internet Protocol version 6) address. Previously, this value was only partially saved in the `sales_order` and `quote` tables.  *Fix submitted by [George Schiopu](https://github.com/georgeschiopu) in pull request [14976](https://github.com/magento/magento2/pull/14976)*. [GitHub-10395](https://github.com/magento/magento2/issues/10395)


<!-- ENGCOM-1885 -->* Coupon codes now work for guest users through the web API as well as from the storefront. *Fix submitted by [Marcin Dykas](https://github.com/Hypo386) in pull request [15320](https://github.com/magento/magento2/pull/15320)*. [GitHub-14056](https://github.com/magento/magento2/issues/14056)

<!-- ENGCOM-2254 -->* Prevent running SQL query on every item in the database when the quote is empty

title: Prevent running SQL query on every item in the database when the quote is empty
url: magento/magento2#16675
contributor name: @LordZardeck
contributor link: https://github.com/LordZardeck



### Reports

<!-- ENGCOM-2215 -->* Remove the timezone from the date when retrieving the current month from a UTC timestamp

Wrong end of month at Reports for Europe/Berlin time zone if month contains 31 day

Remove the timezone from the date when retrieving the current month from a UTC timestamp.

When viewing "Ordered Products Report" on a monthly basis, the date range used does not always include the last day of the month. The reason for this is because the method used to retrieve the number of days in a month converts the startDate of 2018-05-01 00:00:00 Australia/Adelaide
into a UTC timestamp which changes the month. Therefore the timestamp needs to be retrieved from a datetime that is in UTC with the correct month specified.

Expected result
Orders that were created at 31.05.2018 are in the grid

Actual result
Orders that were created at 31.05.2018 are NOT in the grid

*Fix submitted by [Prince Patel](https://github.com/mageprince) in pull request [16584](https://github.com/magento/magento2/pull/16584)*. [GitHub-15940](https://github.com/magento/magento2/issues/15940)



### Review

<!-- ENGCOM-1535 -->* 

title: Removed unused class declaration & code in comment
url: magento/magento2#15173
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks

Removed unused class declaration from controller's index action
Removed unused the code in the comment block from the template file.


 app/code/Magento/Review/view/frontend/templates/redirect.phtml

 app/code/Magento/Version/Controller/Index/Index.php







### Rule 

<!-- MAGETWO-89220 -->* A cart rule using a `subselection` condition no longer automatically grants a discount. 

Cart rule using subselection condition incorrectly gives discount

Merchant has configured a cart rule using subselection condition.

If ALL of these conditions are TRUE :
If total quantity is 2 for a subselection of items in cart matching ALL of these conditions: 
Attribute Set is Default

When putting one configurable product in the cart, the order is getting the discount, when it should require two products in the cart.

EXPECTED RESULTS
Discount should only apply with two products in the cart.

ACTUAL RESULTS
Discount applies with only a single product in the cart



<!-- ENGCOM-1961 -->*Improve retrieval of first array element

Fix the way to retrieve the first item of an array, with reset and key functions.




*Fix submitted by [Thomas Klein](https://github.com/thomas-blackbird) in pull request [16053](https://github.com/magento/magento2/pull/16053)*. [GitHub-15940](https://github.com/magento/magento2/issues/15940)


<!-- ENGCOM-1583 -->* Condition Category Chooser Crashes Page if Store has Several Nested Categories

Steps to reproduce
Create a new Cart Price Rule from Marketing -> Cart Price Rules.
Scroll to "Actions" section and open it.
Under "Apply the rule only to cart items matching the following conditions (leave blank for all items)." section, add a new condition
For the condition attribute, select "Category."
Click on the ellipses, then open the Category Chooser.
Expected result
List of categories should appear to select from.
Actual result
No categories appear and the page becomes unresponsive and eventually crashes.

By not declaring var i = 0, the code is referencing the i declared in the outer function. This causes an infinite loop condition that crashes browsers since multiple methods modify i from the other scope.



*Fix submitted by [Keith Bentrup](https://github.com/keithbentrup) in pull request [15265](https://github.com/magento/magento2/pull/15265)*. [GitHub-15121](https://github.com/magento/magento2/issues/15121)




### Sales

<!-- MAGETWO-93102 -->* Order status now remains in the Complete state after Magento refunds store credit on a partial credit memo. Previously, under these circumstances, Magento changed the status of the order to Closed. 

<!-- MAGETWO-92847 -->* You can now create multiple credit memos in one session and save ach successfully. Previously, Magento displayed this error when you tried to save a second credit memo after creating the first memo: `Could not save credit memo`.

<!-- MAGETWO-92899 -->* Magento now displays any errors that occur during order creation in the browser console. Previously, Magento displayed this message: `Uncaught ReferenceError: order is not defined during order creation` instead of a specific error message. 

<!-- MAGETWO-91466 -->* The `POST /V1/shipment`endpoint processes `tracks` arrays as expected. 

<!-- MAGETWO-90496 -->* Magento no longer reverts to the country associated with the default website when a customer edits the billing address for an order. Previously, if a customer edited the shipping address for an order, Magento would reset the billing address to the default address specified for the default website. 

<!-- ENGCOM-2148 -->* 

When creating a credit memo and checking the "Email" checkbox, you would get an error like:

Fatal error: Uncaught TypeError: Argument 1 passed to Magento\Sales\Block\Order\Email\Items\Order\DefaultOrder::getItemPrice() must be an instance of Magento\Sales\Model\Order\Item, instance of Magento\Sales\Model\Order\Creditmemo\Item given, called in /var/www/sites/magento/vendor/magento/module-sales/view/frontend/templates/email/items/creditmemo/default.phtml on line 34 and defined in /var/www/sites/magento/vendor/magento/module-sales/Block/Order/Email/Items/Order/DefaultOrder.php on line 99
Adding ->getOrderItem() sends the correct type and the error is resolved

title: Credit memo email template file: fixing incorrect object type error
url: magento/magento2#16438
contributor name: @JosephMaxwell
contributor link: https://github.com/JosephMaxwell



<!-- ENGCOM-2085 -->* 
title: Add UpdatedAtListProvider to NotSyncedDataProvider for invoice grid
url: magento/magento2#16286
contributor name: @JeroenVanLeusden
contributor link: https://github.com/JeroenVanLeusden

Invoice updates aren't updated in a grid. Regarding our use case: We create proforma invoices with their own increment ID (e.g. Concept #1), upon shipment we update update the increment ID to use the normal invoice sequence. These changes aren't picked up by the indexer because the UpdatedAtListProvider isn't used.

<!-- ENGCOM-1892 -->* 

title: Create ability to set is_visible_on_front to order status history comment
url: magento/magento2#15637
contributor name: @markoshust
contributor link: https://github.com/markoshust

Create ability to set is_visible_on_front to order status history comment.

Description
The parameter is_visible_on_front is able to be set from the admin, but not from addStatusHistoryComment of the order model. This would provide the ability to set this value from custom code such as event observers.


<!-- ENGCOM-2024 -->* 

title: Declare module namespace before template path name(Magento_Sales::order/info.phtml).
url: magento/magento2#16206
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram

When we override block info(Magento\Sales\Block\Order\Info) to my custom module.
It throws an error and finding order/info.phtml in my custom module.

<!-- ENGCOM-1760 -->* 
title: [Backport] Removed comma(,) from translate attribute
url: magento/magento2#15615
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch

There should be space instead of the comma(,) for separating two tag name inside the value of translate attribute.



<!-- ENGCOM-1529 -->* 

title: Add field to filter to collection
url: magento/magento2#15097
contributor name: @dverkade
contributor link: https://github.com/dverkade

Currently the setup upgrade is looping truth all order addresses and is the checking if the quote_address_id is empty. Changed this so that the collection contains only addresses where the quote_address_id is NULL.

Add field to filter to collection


<!-- ENGCOM-1623 -->* 

title: #14063 - Wrong invoice prefix in multistore setup due to default stor?
url: magento/magento2#15332
contributor name: @sanjay-wagento
contributor link: https://github.com/sanjay-wagento

Wrong invoice prefix in multistore setup due to default store ID

Set correct store id for Invoice


<!-- ENGCOM-1531 -->* 
title: Add Parent Item to order item in repository
url: magento/magento2#14614
contributor name: @JeroenVanLeusden
contributor link: https://github.com/JeroenVanLeusden

When using GET /V1/orders/items/{id} the parent item isn't set. This PR will add the parent item if the parent_item_id is set.






### Sales rules

<!-- MAGETWO-91797 -->* Cart price rules with associated coupons are no longer affected by edits to scheduled updates. 


<!-- ENGCOM-2122 -->* Making Fix missing discount label in checkout compatible with custom discounts.
Based on this pull request: #13141 I change the compare method for searching all the totals that has the discount name making it possible to use a custom module discount that shows there.

title: When searching for the title if search for all the segments that has ?
url: magento/magento2#16093
contributor name: @rsantellan
contributor link: https://github.com/rsantellan






### Search
<!-- ENGCOM-1381 -->* 

Quick search fires error

Steps to reproduce
Type a term into the quick Ajax search field (#search) that doesn't exist in the database
Press Home keyboard key
Expected result
No error
Actual result
TypeError: this.`_getFirstVisibleElement(...).addClass` is not a function

`this._getFirstVisibleElement()` returns false if there are no elements in the search autocomplete. I added check if `this._getFirstVisibleElement()` does not return false before adding select class to the first element when Home or End buttons on keyboard are pressed.



 *Fix submitted by [Julien ANQUETIL](https://github.com/julienanquetil) in pull request [14839](https://github.com/magento/magento2/pull/14839)*. [GitHub-14274](https://github.com/magento/magento2/issues/14274)



<!-- ENGCOM-1616 -->* Submitting search form (mini) with enter key fires event handlers bound by jquery twice

When submitting the search form in the header with the enter key on the keyboard, event handlers that were bound to the form submit (through jQuery) are fired twice.


Expected result
Our created listener is only fired once
Actual result
Listener is fired twice


 *Fix submitted by [Amjad M](https://github.com/amjadm61) in pull request [15340](https://github.com/magento/magento2/pull/15340)*. [GitHub-13793](https://github.com/magento/magento2/issues/13793)


<!-- ENGCOM-1887 -->* fixed Swagger response for searchCriteria

Magento REST API Schema (Swagger) is not compatible with Search Criteria

Expected result
Search criteria described in format compatible with

Actual result
Format not described in a Swagger-compatible manner.
Making searchCriteria-related requests using swagger-api/swagger-codegen clients produces an HTTP 400 response from Magento when request sent in described format.



*Fix submitted by [Jakub](https://github.com/idziakjakub) in pull request [15040](https://github.com/magento/magento2/pull/15040)*. [GitHub-15322](https://github.com/magento/magento2/issues/15322)




<!--  MAGETWO-85786 -->* Catalog not filtered by admin search bar

Previously, If you attempt to use the Search tool in the admin panel, and select "XX in Products" that appears, it brings you to the full catalog view, without narrowing down the list.

If you attempt to use the Search tool in the admin panel, and select "XX in Products" that appears, it brings you to the full catalog view, without narrowing down the list.




*Fix submitted by [Pavel](https://github.com/hannassy) in pull request [12735](https://github.com/magento/magento2/pull/12735)*. [GitHub-7861](https://github.com/magento/magento2/issues/7861)




<!--  ENGCOM-1415 -->* Adding an * to do a customer search

When doing a search in the Customer area of Magento 2. I added an * in the search. When adding the * Magento stays locked and the following message pops up "Something went wrong with processing the default view and we have restored the filter to its original state." .

Expected Result

Any Customer with an * should be found
Actual result

Get an error message
"Something went wrong with processing the default view and we have restored the filter to its original state."

*Fix submitted by [Riccardo Tempesta ](https://github.com/phoenix128) in pull request [14905](https://github.com/magento/magento2/pull/14905)*. [GitHub-14855](https://github.com/magento/magento2/issues/14855)



<!-- ENGCOM-2455 -->* Use Redirect Factory to Allow Error Message Display on Advanced Search
title: Issue 8131 - Use Redirect Factory to Allow Error Message Display on Advanced Search
url: magento/magento2#16952
contributor name: @brobie
contributor link: https://github.com/brobie

https://github.com/magento/magento2/issues/8131
There is a bug in advanced search form regarding validation messages

Steps to reproduce
Go on the site "advanced search" and click the submit button below the form without any entries.
Then click for example on the "sign in" link in the top right corner.
Expected result
Validation message (Please specify at least one search term) appears on the same site (advanced search) above the form after you click the submit button.
Actual result
No message appears, rather on random site after you submit the advanced search form without entries.

<!-- ENGCOM-2245 -->* Prevent servers being slammed from many search suggestion requests 
title: Prevent servers being slammed from many search suggestion requests
url: magento/magento2#16669
contributor name: @LordZardeck
contributor link: https://github.com/LordZardeck

Currently when a customer is typing in the search suggestion box, every character that is typed is immediately sent to the server. Typical auto-complete boxes will have a delay before sending the request to ensure this doesn't happen. This PR simply uses underscore's debounce method to throttle the requests with a default amount of 300ms, following the default configuration of jQuery's delay method: https://api.jqueryui.com/autocomplete/#option-delay




<!-- ENGCOM-1672 -->*

When cloning the minisearch widget and changing the ID's and selectors they still trigger all instances as the label searchLabel is globally searched instead of in the form.

title: fix: support multiple minisearch widget instances
url: magento/magento2#15485
contributor name: @DanielRuf
contributor link: https://github.com/DanielRuf



### Shipping 

<!--  ENGCOM-2033 -->* Estimate Shipping and Tax Form not works due to js error in collapsible.js


*Fix submitted by [Alexander Kras'ko](https://github.com/0m3r) in pull request [16213](https://github.com/magento/magento2/pull/16213)*. [GitHub-8222](https://github.com/magento/magento2/issues/8222)


<!--  ENGCOM-1675 -->*

title: Fix method name (typo)
url: magento/magento2#15514
contributor name: @avoelkl
contributor link: https://github.com/avoelkl

This PR deprecates a current method with a typo and introduces the new method with correct spelling

app/code/Magento/Multishipping/Block/Checkout/AbstractMultishipping.php



### Store

<!--  ENGCOM-1706 -->* Getting wrong frontend-controller, when using storecodes in urls

*Fix submitted by [Elias Kotlyar](https://github.com/EliasKotlyar) in pull request [15566](https://github.com/magento/magento2/pull/15566)*. [GitHub-15565](https://github.com/magento/magento2/issues/15565)


<!--  ENGCOM-1249 -->* Stores -> Terms and Conditions - No Store View shown

*Fix submitted by [afirlejczyk](https://github.com/afirlejczyk) in pull request [14546](https://github.com/magento/magento2/pull/14546)*. [GitHub-13944](https://github.com/magento/magento2/issues/13944)





#### Elasticsearch

<!-- MAGETWO-92142 -->* Bundle products are now indexed as expected in Elasticsearch. 

<!-- MAGETWO-86153 -->* Elasticsearch now correctly calculates the relevance of quick search results according to selected attribute search weights.



#### Admin global search

<!-- MAGETWO-86658 -->* Admin global search preview now works as expected. Previously, this feature worked inconsistently, and search results  differed depending on which area was being searched on (for example, Products, Categories, or Customers). 

<!-- MAGETWO-86289 -->* The Admin global search now returns results that match the keyword for all available pages, or if a user searches in  specific sections, the search feature now returns only the results that matched the key words in those specific sections. Previously, the Admin global search did not return results that matched the specified keywords or did not restrict results to specified sections.

<!-- MAGETWO-85786 -->* Catalogs are now correctly filtered by the Admin search bar. Previously, if you attempted to use the Search tool in the Admin, and selected "XX in Products" that appears, Magento displayed the full catalog view without narrowing down the list. *Fix submitted by [Pavel](https://github.com/hannassy) in pull request 12735*. [GitHub-12193](https://github.com/magento/magento2/issues/12193), [GitHub-7861](https://github.com/magento/magento2/issues/7861)









### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>

<!-- MAGETWO-92217 -->* 

The Free Shipping Cart Price Rule now works as expected when **UPS shipping method** is enabled and **Free Shipping** is set to "For matching items only".


<!-- MAGETWO-91035 -->* The shipping progress dates displayed in tracking popup for FedEx shipping are now accurate. 


<!--  ENGCOM-1589 -->* 

Fix typo in test method's name and test result

dev/tests/functional/tests/app/Magento/Checkout/Test/Block/Onepage/Shipping/Method.php

dev/tests/functional/tests/app/Magento/Shipping/Test/Constraint/AssertCityBasedShippingRateChanged.php



*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15297](https://github.com/magento/magento2/pull/15297)*. 


### Sitemap
<!-- MAGETWO-92781 -->* Sitemaps generated by cron no longer display  `/pub/` in image URLs when  `docroot` is set to `/pub`. Previously, if the `docroot` was set to `pub` and `BASE MEDIA URL` was not set, the cron-generated sitemap  generated wrong images URLs.  


<!-- ENGCOM-1073 -->*

*Fix submitted by [Denys Saltanakhmedov](https://github.com/DenisSaltanahmedov) in pull request 14338*. [GitHub-4788](https://github.com/magento/magento2/issues/4788)

Wrong sitemap product url (fixed in magento/magento2#14338 by @DenisSaltanahmedov) ENGCOM-1073
Fixing wrong sitemap product url
Steps to reproduce
	1.	"Use Categories Path for Product URLs" set to NO in configuration -> catalog -> catalog -> Search Engine Optimization
	2.	Create Categories with products
	3.	Generate sitemap
Actual result
	1.	Sitemap is generating wrong urls containing category slug,


<!-- ENGCOM-1866 -->* Images in XML sitemap are always linked to base store in multistore

*Fix submitted by [Steven de Jong](https://github.com/StevenGuapaBV) in pull request [15689](https://github.com/magento/magento2/pull/15689)*. [GitHub-15588](https://github.com/magento/magento2/issues/15588)


<!-- ENGCOM-1377 -->*

Use index sitemap name as prefix in split sitemaps

title: Use index sitemap name as prefix in split sitemaps
url: magento/magento2#14836
contributor name: @jameshalsall
contributor link: https://github.com/jameshalsall

hen generating large sitemaps which result in a single index sitemap and several smaller split sitemap files, the split sitemap files do not use the same name prefix as the parent.

For example, if you have a sitemap called products.xml then the split sitemap files are named sitemap-1-1.xml, sitemap-1-2.xml etc. which does not make any sense.




### Staging

<!-- MAGETWO-90682 -->* Banners remain assigned to a Cart Rule after a Staging Update is applied. Previously, a banner was unassigned from the Cart Rule after a Staging Update was applied. 

<!-- MAGETWO-91889 -->* Magento now rolls  back updated changes to their pre-update state  when a merchant deletes an active Scheduled Update. Previously, some products were removed from their assigned categories (and categories were removed from the Amdin)  when an active product update was deleted.  

<!-- MAGETWO-92509 -->* You can now successfully re-order a configurable product. Previously, a schedule update for one configurable product affected other ordered configurable products. 

<!-- MAGETWO-89779 -->* Magento no longer unexpectedly locks up CMS pages when a merchant changes a scheduler end date. Previously, when a merchant updated the end date in a CMS page, after the current scheduler ended, Magento generated an error, and the merchant could no longer access any CMS page from the Admin. 



<!-- MAGETWO-72815 -->* Merchants can now edit a schedule update 



Updating a schedule data no longer removes the  product from the Admin product list  after a merchant deleted its active schedule update. 


when a merchant edits the schedule update for a product. 

<!-- MAGETWO-86032 -->* Magento no longer deletes products from the Admin product list after a merchant deletes its active schedule update. This deletion only appeared after the scheduled update time. 




<!--  ENGCOM-2335 -->* Error in Admin > products when module Reviews is disabled 

After disabeling module Reviews, when editing a product an error is displayed


Steps to reproduce
Go to Admin panel
Go to Stores > Configuration > Advanced > Advanced
Disable module Reviews
Go to Products > Products
Try to edit a (any) product
Expected result
Hide reviews tab and no errors
Actual result
Error "Something went wrong"
Reviews tab shows "wait circle"


PRIVATE REPO?


*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [70](https://github.com/magento/magento2/pull/70)*. [GitHub-6264](https://github.com/magento/magento2/issues/6264)



### Store

<!--  ENGCOM-2530 -->* 

title: #16273: Fix bug in method getUrlInStore() of product model
url: magento/magento2#16468
contributor name: @vasilii-b
contributor link: https://github.com/vasilii-b

https://github.com/magento/magento2/issues/16273

Method $product->getUrlInStore() returning extremely long URLs




### Swatches

<!--  ENGCOM-1443 -->* Color attribute taking swatch instead of Drop down option for configurable options

Unable to change attribute type from swatch 
Unable to change attribute type from swatch to dropdown
Product Attributes Not Updating on Frontend
Changing Swatches to Drop-down does not remove swatches from existing products



*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-9307](https://github.com/magento/magento2/issues/9307)





<!--  ENGCOM-1443 -->* Upgrading to 2.1.7 changed dropdown attributes to swatches




<!--  ENGCOM-1443 -->* Product Attributes Not Updating on Frontend

*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-11403](https://github.com/magento/magento2/issues/11403)


<!--  ENGCOM-1443 -->* Changing Swatches to Drop-down does not remove swatches from existing products

*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-11703](https://github.com/magento/magento2/issues/11703)

<!--  ENGCOM-1443 -->* Unable to change attribute type from swatch to dropdown

*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-12695](https://github.com/magento/magento2/issues/12695)





### Tax

<!--  ENGCOM-1551 -->* We’ve reduced the redundant product tax recalculation that previously occurred when Magento loaded category pages, which results in faster page loading. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [15089](https://github.com/magento/magento2/pull/15089)*. [GitHub-14941](https://github.com/magento/magento2/issues/14941)




<!--  ENGCOM-1642 -->* Format the javascript code in Tax module Use javascript inside *.phtml file it's legacy code that we try to refactor according to Magento way.
For that we have <script type="text/x-magento-init" /> tag, where we declare path to JS file and pass parameters if they are needed.



Use javascript inside `*.phtml` file it's legacy code that we try to refactor according to Magento way.
For that we have <script type="text/x-magento-init" /> tag, where we declare path to JS file and pass parameters if they are needed.



*Fix submitted by [vgelani](https://github.com/vgelani) in pull request [15343](https://github.com/magento/magento2/pull/15343)*. [GitHub-15352](https://github.com/magento/magento2/issues/15352)


<!--  ENGCOM-2386 -->* Improve "Invalid country code" error message on tax import

title: Improve "Invalid country code" error message on tax import
url: magento/magento2#16873
contributor name: @adampmoss
contributor link: https://github.com/adampmoss

This change helps when importing tax CSVs by telling the user which country is responsible for the error being thrown. Without this it is a very annoying error to get and the user just has to guess.






### Testing

<!--  ENGCOM-2523 -->* 
title: [Backport] testGetIgnoresFirstSlash method in ObjectManagerTest has lost its purpose (dummy test)
url: magento/magento2#17098
contributor name: @mageprince
contributor link: https://github.com/mageprince


<!--  ENGCOM-2499 -->* Added unit test for DB model in backup module
title: Added unit test for DB model in backup module
url: magento/magento2#17063
contributor name: @rogyar
contributor link: https://github.com/rogyar

This PR adds a missing unit test for \Magento\Backup\Model\Db model.



<!--  ENGCOM-2360 -->*
Magento_Sales integration tests: fix invoice_list fixture var tags 
title: [Backport] Magento_Sales integration tests: fix invoice_list fixture var tags
url: magento/magento2#16831
contributor name: @ronak2ram
contributor link: https://github.com/ronak2ram

In the invoice_list fixture for Magento/Sales integration tests, the var tags changed in this pull request refer to non-existing variables and the other has a wrong type.

<!--  ENGCOM-2239 -->*

Corrected Magento_Framework's test xml file

title: Corrected Magento_Framework's test xml file.
url: magento/magento2#16646
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata

Corrected block name in Magento_Framework's test XML file. block name was written wrong in grou.xml file.


<!--  ENGCOM-2106 -->* Add metadata title in unit test
 lib/internal/Magento/Framework/View/Page/Config.php

  lib/internal/Magento/Framework/View/Test/Unit/Page/ConfigTest.php

title: Add metadata title in unit test
url: magento/magento2#16333
contributor name: @slackerzz
contributor link: https://github.com/slackerzz



### Theme

<!--  ENGCOM-1516 -->* Template file 'header.html' is not found" error while trying to save Design Configuration

Can't change the applied theme

Steps to reproduce
Go to Content > Design > Configuration
Edit the Store View and try to change the "Applied theme" to another
Save Configuration
Expected result
Change the theme
Actual result
Appears the error: "Something went wrong while saving this configuration: Area is already set"

*Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15137](https://github.com/magento/magento2/pull/15137)*. [GitHub-13530](https://github.com/magento/magento2/issues/13530)


<!--  ENGCOM-1516 -->* Merchants can now successfully change the applied theme setting for a store view (**Content** > **Design** > **Configuration**). *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15137](https://github.com/magento/magento2/pull/15137)*. [GitHub-14968](https://github.com/magento/magento2/issues/14968)




<!--  ENGCOM-1922 -->* Changing @tab-content__border variable has no effect in Blank theme
Steps to reproduce
In `Custom/theme/web/css/source/_theme.less` set less variables to:
@tab-content__border-top-status: false;
@tab-content__border: 1px solid #000;

Expected result
Tabs content has border

Actual result
Tabs content has no border

*Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15914](https://github.com/magento/magento2/pull/15914)*. [GitHub-14999](https://github.com/magento/magento2/issues/14999)



### Translation

<!-- MAGETWO-92210 -->* The `translation.json` file now contains translatable strings for the phrases "Store Credit" and "Gift Card". Previously, these strings were not translated for the shopping cart, one-page checkout, and order view in the customer account on the storefront. 


<!-- MAGETWO-92355 -->* We've added  client-side caching of `js-translation.js`.


<!-- ENGCOM-1965 -->* Removed unused translation for `<comment>` tag, because <comment> not found as a child for the node.

app/code/Magento/Analytics/etc/adminhtml/system.xml
app/code/Magento/Catalog/etc/adminhtml/system.xml
app/code/Magento/Swatches/etc/adminhtml/system.xml
pp/code/Magento/Ups/etc/adminhtml/system.xml




 *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15604](https://github.com/magento/magento2/pull/15604)*. \


<!-- ENGCOM-1604 -->* Added language translation for comment tag

Added language translation for comment tags into system.xml file of Signifyd Magento module




Comments are not translated for Signifyd module

Steps to reproduce
Goto STORE > Configuration > SALES > Fraud Proratection
Add translations into en_US.csv for comments for under the input/select fields
Flush cache and check comments
Expected result
All comments should be translated
Actual result
Comments under input/select fields are not translated



*Fix submitted by [Yogesh Suhagiya](https://github.com/Yogeshks) in pull request [15364](https://github.com/magento/magento2/pull/15364)*. [GitHub-15361](https://github.com/magento/magento2/issues/15361)



<!-- ENGCOM-1855 -->* Fix translations

"Item in cart" translation does not work



*Fix submitted by [Vitaliy](https://github.com/VitaliyBoyko) in pull request [15782](https://github.com/magento/magento2/pull/15782)*. 






<!-- ENGCOM-2020 -->* Added translation possibility for moreButtonText


*Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16190](https://github.com/magento/magento2/pull/16190)*. [GitHub-16079](https://github.com/magento/magento2/issues/16079)


<!-- ENGCOM-2257 -->*
title: Added translation function for Magento_Braintree module's template file.
url: magento/magento2#16690
contributor name: @sanganinamrata
contributor link: https://github.com/sanganinamrata


<!-- ENGCOM-2192 -->*

title: Update mini-cart checkout translations
url: magento/magento2#16553
contributor name: @JeroenVanLeusden
contributor link: https://github.com/JeroenVanLeusden

Add missing translations found in app/code/Magento/Checkout/i18n/en_US.csv



<!-- ENGCOM-1591 -->*

Added language translation for labels in Magento_Braintree, Magento_Multishipping and Magento_Paypal extensions



title: Added language translation in template files
url: magento/magento2#15371
contributor name: @rahul-kachhadiya
contributor link: https://github.com/rahul-kachhadiya


<!-- ENGCOM-1609 -->* Added language translation for message string

title: Added language translation for message string
url: magento/magento2#15333
contributor name: @Yogeshks
contributor link: https://github.com/Yogeshks

 app/code/Magento/AdminNotification/Controller/Adminhtml/System/Message/ListAction.php
  app/code/Magento/AdminNotification/i18n/en_US.csv





### UI

<!--  ENGCOM-1542 -->* clickableOverlay option doesn't work

clickableOverlay-less-fix - added pointer-events rule to .modal-popup class to let user click deeper than modals and reach to overlay's div in modal-wrapper div

Problem: modal's overlay div would not catch click event because is covered by modal's div above. That's why modal is would not fire close event when user is clicking outside modal.

My proposition of solution for that issue is add pointer-events: none css rule to modals in theme's less files.



*Fix submitted by [virtua-pmakowski](https://github.com/virtua-pmakowski) in pull request [15172](https://github.com/magento/magento2/pull/15172)*. [GitHub-7399](https://github.com/magento/magento2/issues/7399)







<!--  ENGCOM-1315 -->* Fix to allow use decimals less then 1 in subproducts qty

Quick fix to allow use decimals less then 1 in subproducts qty.

Set "Qty Uses Decimals" = Yes and Minimum Qty Allowed in Shopping Cart" = 0.01 for all products on any grouped product.
Go to groped product page on frontend.
Put for all suproducts qty less than 1.




*Fix submitted by [Valerij Ivashchenko](https://github.com/likemusic) in pull request [14752](https://github.com/magento/magento2/pull/14752)*. [GitHub-14692](https://github.com/magento/magento2/issues/14692)



<!--  ENGCOM-1606 -->* Responsive Design, Footers do not snap to bottom of screen on mobile devices

Responsive Design Footers bottom of screen on mobile devices

When you view Magento pages on a mobile device, the footers do not snap to the bottom of the page. They do in tablet and desktop modes.




*Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15353](https://github.com/magento/magento2/pull/15353)*. [GitHub-15118](https://github.com/magento/magento2/issues/15118)



<!--  ENGCOM-1766 -->* Fixed product tier pricing pagination issue in admin

There is a product which has more than 25 tier price (customer group price) in Advanced Pricing section.

Magento creates the pagination automatically if there are more than 20 customer group price row.

If I click on a next/previous button of pagination, it works properly and navigates the pricing page. But if I enter any page number in the input field and press enter button, it keeps on loading.

Steps to reproduce
Select any product and add more than 25 customer group prices.
Enter any page number to navigate the customer group price page.
Press enter.
Expected result
It should navigate to the entered page number.
Actual result
It keeps on loading the page. 



*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15614](https://github.com/magento/magento2/pull/15614)*. [GitHub-15210](https://github.com/magento/magento2/issues/15210)


<!--  ENGCOM-1982 -->* Navigation dropdown caret icon

Steps to reproduce
create store with sample data
hover over one of the navigation catories
inspect the parent navigation point
Expected result
there should be a caret icon


*Fix submitted by [Tejash Kumbhare](https://github.com/tejash-wagento) in pull request [16082](https://github.com/magento/magento2/pull/16082)*. [GitHub-15220](https://github.com/magento/magento2/issues/15220)





<!--  ENGCOM-2155 -->* Press Esc Key on modal generate a jquery UI error


If you add a product in the cart, then you press the trash icon to delete it a modal window will appear.
If you press the "Esc" key, this js error is raised

*Fix submitted by [Alexander Kras'ko](https://github.com/0m3r) in pull request [16477](https://github.com/magento/magento2/pull/16477)*. [GitHub-14593](https://github.com/magento/magento2/issues/14593)


<!--  ENGCOM-2479 -->* 

title: Categories > Left menu > Item title space fix
url: magento/magento2#16984
contributor name: @rafaelstz
contributor link: https://github.com/rafaelstz

Aligning the distribution of the Title and Items on the left bar, it already has a property to add this margin-bottom, but it's not taking effect, so I added the fix on that PR.



<!--  ENGCOM-2473 -->*

Fixes Black color coding standard

title: Fixes Black color coding standard.
url: magento/magento2#17019
contributor name: @chirag-wagento
contributor link: https://github.com/chirag-wagento



<!--  ENGCOM-2399 -->*
Fixes white color coding standard

title: Fixes white color coding standard.
url: magento/magento2#16903
contributor name: @chirag-wagento
contributor link: https://github.com/chirag-wagento

Change color white coding standard


<!--  ENGCOM-1785 -->*title: [Backport 2.2] Fix minor issues in ui export converter classes
url: magento/magento2#15694
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch

Fix the issue with the dynamically defined ``$filter`` property.
Add missing throws to PHPDocs for methods.


<!--  ENGCOM-1678 -->*

title: Fixes in ui module
url: magento/magento2#15512
contributor name: @mhauri
contributor link: https://github.com/mhauri

This PR fixes two issues in the Magento/Ui Module:

getConfiguration() invoked with 1 parameter, 0 required, see Magento/Ui/Component/Bookmark.php on line 85 and 89

ClassMagento\Ui\Component\Control\ActionPool constructor invoked with 3 parameters, 2 required. see Magento/Ui/Test/Unit/Component/Control/ActionPoolTest.php on line 87


<!--  ENGCOM-1682 -->*

Refactor JavaScript for front-end customer logout

Description
Remove JavaScript from logout.phtml and create JS component for that.

title: Refactor JavsScript for customer logout
url: magento/magento2#15301
contributor name: @patelnimesh1988
contributor link: https://github.com/patelnimesh1988


<!--  ENGCOM-1682 -->*

Moved CSS from media query move it directly to .page-wrapper

title: Moved css from media #TODO
url: magento/magento2#15416
contributor name: @vgelani
contributor link: https://github.com/vgelani


<!--  ENGCOM-1657 -->*
title: Updated font-size variable and standardize #ToDo UI
url: magento/magento2#15421
contributor name: @vgelani
contributor link: https://github.com/vgelani

/ ToDo UI: Check font-size and standardize
Updated font-size variable and standardize as per ToDo UI.



<!--  ENGCOM-1473 -->*

Add 'const' type support to layout arguments

title: Add 'const' type support to layout arguments
url: magento/magento2#15058
contributor name: @IgorVitol
contributor link: https://github.com/IgorVitol

For now in Magento we can not use xsi:type="const" in layout arguments. But it looks like such ability can be very useful. Moreover such code already exists in Magento core, we just need to include/enable it.



<!--  ENGCOM-1547 -->*
title: Move buttons definition to separate file
url: magento/magento2#15194
contributor name: @jissereitsma
contributor link: https://github.com/jissereitsma

When trying to add new buttons with new actions (besides reset, save and saveAndContinue) to a UiComponent form in the backend, it is needed to extend upon at least 2 files: Magento_Ui/js/form/adapter and Magento_Ui/js/form/form. The second file is easily extendable using mixins, but the first one is not: Mainly because the buttons definition is based on a local variable. This PR fixes this by moving the buttons definition in a separate file.


This PR adds a new file buttons.js that is called for in adapter so that someone could create a mixin like follows:

from
 app/code/Magento/Ui/view/base/web/js/form/adapter.js

to 
 app/code/Magento/Ui/view/base/web/js/form/adapter/buttons.js


<!--  ENGCOM-1438 -->*
title: Fixed Overlay Problems
url: magento/magento2#14963
contributor name: @ArtiDjeims
contributor link: https://github.com/ArtiDjeims


If you log in as a Customer, click on mini checkout Icon and then click on Account Menu, mini checkout overlays the Account menu.


<!--  ENGCOM-1313 -->*
Allow multiple tabs ui_components on a page

When multiple UI Components are added on a page, with layout type 'tabs', this leads to an error, since both will try to add a navigation block with hardcoded name 'tabs_nav'.

Manual testing scenarios
Create a page with multiple ui_components with layout type 'tabs' (e.g. 2 modals with forms in adminhtml page)
Expected result
Both UI components will be rendered

Actual result
The second UI component will fail to render with error message "Element with ID 'tabs_nav' already exists"



title: Allow multiple tabs ui_components on a page
url: magento/magento2#14742
contributor name: @FreekVandeursen
contributor link: https://github.com/FreekVandeursen

<!--  ENGCOM-1313 -->*

Style groups for mobile devices (max-width) are specified in the wrong order.

In `lib/web/css/source/lib/_responsive.less` the style groups run breakpoint-size ascending: 319px, 479px, 639px, 767px, which leads to outputting max-width media queries breakpoint-size ascending - the last-defined breakpoint overrides smaller screen size breakpoints...

Fixed Issues (if relevant)
Style groups for mobile devices (max-width) are specified in the wrong order.

https://github.com/magento/magento2/issues/14476








### URL rewrites

<!-- MAGETWO-89905 -->* Categories of the Main menu in the different store view are now updated when Varnish is enabled. 


Workflow of how Magento handles switching between different stores (especially on different domains) was changed to a 2-step redirect, and store switching links does not contain session-related data anymore in order to fix several caching and session sharing issues.



<!-- MAGETWO-73456 --> URL key values are now derived from the  default value set on the default store. Previously, Magento derived the product URL key value from the product name on storeview level. 



<!-- ENGCOM-1283 --> The Magento URL rewrite functionaility now supports the use of special characters in category names. Previously the category tree did not load if a category name contained a special character. 

*Fix submitted by [Vinay Shah](https://github.com/vinayshah) in pull request [13397](https://github.com/magento/magento2/pull/13397)*. [GitHub-13296](https://github.com/magento/magento2/issues/13296)



<!-- ENGCOM-1916 --> Remove parameter from method calling


`_addProductLinkBlock()`
Method definition does not require any parameters. But when it was actually called extra parameter was passed. I remove extra parameter while calling method.





 *Fix submitted by [Saurabh Parekh](https://github.com/saurabh-parekh) in pull request [15891](https://github.com/magento/magento2/pull/15891)*.


<!-- ENGCOM-1656 --> Refactor JavsScript for UrlRewrite module edit pageUse javascript inside *.phtml file it's legacy code that we try to refactor according to Magento way



Use javascript inside `*.phtml` file it's legacy code that we try to refactor according to Magento way

JS Script code should be removed from template file and treated as a separate component





*Fix submitted by [Nimesh Patel](https://github.com/patelnimesh1988) in pull request [15422](https://github.com/magento/magento2/pull/15422)*. [GitHub-15356](https://github.com/magento/magento2/issues/15356)


<!-- ENGCOM-2524 --> Cleanup of undefined mixins parameters and usage of "leaking" variables scope
title: [Backport] Magento UI - Cleanup of undefined mixins parameters and usage of "leaking" variables scope
url: magento/magento2#17097
contributor name: @mageprince
contributor link: https://github.com/mageprince


I removed all fallbacks to variables not existing in the global scope, defined all variables used inside mixins as parameters and added all missing parameters to the places where mixins are invoked.
Also mixin that was used just once, was moved and simplified, to reduce usage of weird LESS scoping, where variables defined in mixin are accessible in the place where mixin is invoked.


<!-- ENGCOM-1314 --> After deleting CMS page via API or in crontab area, according URL rewrites should be removed.


Previously, Deleting CMS page via webapi/cron should remove related URL rewrites 

title: Deleting CMS page via webapi/cron should remove related URL rewrites
url: magento/magento2#14751
contributor name: @unicoder88
contributor link: https://github.com/unicoder88




### Vertex



### Visual Merchandiser

<!-- MAGETWO-90599 -->* Magento now maintains manual sort order and adds newly assigned products to the top of the products list. Previously, Magento reset the manual sort order and sorted products by ID. 


<!-- MAGETWO-92504 -->* Saving a product no longer reverts the selected sort order for a category. Previously, after a merchant saved a product, Magento reverted the sort order that defined the display of products in that category from the defined  sort order to an order defined by product ID. 


### Wishlist


<!--  ENGCOM-1878 -->* Fixed return type hinting in DocBlocks for Wishlist module 

The PR brings adjustments for the incorrect return type hinting for some methods within a scope of Wishlist module




*Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15854](https://github.com/magento/magento2/pull/15854)*. 


<!--  ENGCOM-1949 -->* 

There's an extra parameter upon invoking the toHtml() method in the Wishlist/view/frontend/templates/item/list.phtml file. 

Remove unnecessary parameter from invoking toHtml() method

*Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [16023](https://github.com/magento/magento2/pull/16023)*. 



<!--  ENGCOM-2133 -->* 

Fix login issue through wishlist url which raise error right after login and report after logout.

fix error message after login with wishlist;
fix possibility to logout after login with wishlist;

title: Login with wishlist raise report after logout.
url: magento/magento2#16386
contributor name: @swnsma
contributor link: https://github.com/swnsma


<!--  ENGCOM-2128 -->* 

title: Wishlist update item issue
url: magento/magento2#16372
contributor name: @eduard13
contributor link: https://github.com/eduard13

This PR fixes removing the wishlist item from wishlist while updating it, if instead of id it is sent \Magento\Wishlist\Model\Item object.




<!--  ENGCOM-2035 -->* 

title: Incorrect value NULL was passed to DataObject constructor. It caused ?
url: magento/magento2#16220
contributor name: @Jakhotiya
contributor link: https://github.com/Jakhotiya

Incorrect value NULL was passed to DataObject constructor. It caused fatal error. Fixed it by passing an empty array instead


This error can only be noticed when testing wishlist with browser console open. Section data request for wishlist fails and on further debugging the cause was "Invalid parameter null was passed to \Magento\Framework\DataObject array expected. "


<!--  ENGCOM-1800 -->* 

title: [Backport 2.2] Fixed return type of wishlist's getImageData in DocBlock
url: magento/magento2#15718
contributor name: @rogyar
contributor link: https://github.com/rogyar

\Magento\Wishlist\CustomerData\Wishlist::getImageData() method returns an array but in DocBlock the \Magento\Catalog\Block\Product\Image is highligted as the return type. The fix corrects the return type in method's DockBlock.



<!--  ENGCOM-1668 -->* 

Display variant product image in sidebar "My Wishlist" items block.

Description
In case of configurable product, by default main configurable image was showing in sidebar "My Wishlist" block. By this changes, Magento will show variant product image instead of configurable product image



title: Variant product image in sidebar wishlist block
url: magento/magento2#15477
contributor name: @kishanpatadia
contributor link: https://github.com/kishanpatadia


<!-- not needed- 72024 ENGCOM-1665 1454--> 

## Known issues
91164 -- After upgrading Magento to 2.2.6, you must do the following: 

1) remove the 'pub/media/catalog/product/cache'

2) run `bin/magento catalog:image:resize`



This release includes a fix that optimizes image resizing. 





## Community contributions

~100 GitHub issues fixed; ~350 community pull requests merged.


We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.




### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 

<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull Request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Balance Internet</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
  </tr>

<tr>
    <td>Comwrap</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
  </tr>

<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Divante</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a>, <a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
  </tr>

  <tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Interactiv4</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a> </td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a>, <a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a>, <a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a>, <a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
  </tr>

<tr>
    <td>Inviqa</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>ISM eCompany</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
  </tr>


  <tr>
    <td>MediaCT</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
  </tr>

<tr>
    <td>Something Digital</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13898">13898</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12792" target="_blank">12792</a>, <a href="https://github.com/magento/magento2/issues/13778" target="_blank">13778</a></td>
  </tr>


  <tr>
    <td>Vaimo</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14447">14447</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>

  </tr>

<tr>
    <td>Wagento</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
  </tr>



</table>






### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
