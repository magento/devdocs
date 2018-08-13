---
layout: default
group: release-notes
title: Magento Open Source 2.2.6 Release Notes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.6CE.md
---
*Patch code and release notes published on  2018.* 

This release includes multiple enhancements to product security plus bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

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





### Bundle products

<!-- MAGETWO-90999 -->* Magento now successfully imports bundle products. 

<!-- MAGETWO- 86218-->* Bundled products that have the **User Defined** field unchecked can now be back ordered. [GitHub-10061](https://github.com/magento/magento2/issues/10061)


<!--  ENGCOM-1863-->* Fixed set template syntax issue  *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15825](https://github.com/magento/magento2/pull/15825)*. 




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




### CAPTCHA

<!-- MAGETWO-91840 -->* Customers can now successfully log `in when guest checkout is disabled and CAPTCHA is enabled. Previously, Magento threw the "Provided form does not exist" error when a customer tried to log in when CAPTCHA is enabled and guest checkout is disabled. 

<!-- MAGETWO-89615 -->* CAPTCHA validation now works when **Website Restrictions** is enabled. 


<!-- ENGCOM-1973 -->*

Out of the box, \Magento\Captcha\Observer\CaptchaStringResolver class is not covered by unit tests. This PR adds unit tests coverage for the mentioned class.

Added unit test for captcha string resolver

 *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [16065](https://github.com/magento/magento2/pull/16065)*. [GitHub-14966](https://github.com/magento/magento2/issues/14966)



<!-- ENGCOM-2013 -->* Captcha: Added unit test for CheckRegisterCheckoutObserver 


 *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [16160](https://github.com/magento/magento2/pull/16160)*.



### Cart and checkout


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



### CMS content

<!-- MAGETWO-92611-->* Page layout issues that resulted from incorrect module sequence have been corrected. Previously, the  `Magento_theme` module was loaded too late, which resulted in unexpected display issues. 


### Configurable products

<!-- ENGCOM-1686 -->* Customers can now successfully complete check out when their order contains a configurable product with a configurable option. Previously, customers could not check out when there is a configurable product in the cart with a configurable option, which is now deleted, shopping cart could not be loaded. *Fix submitted by [jonshipman](https://github.com/jonshipman) in pull request [15468](https://github.com/magento/magento2/pull/15468)*. [GitHub-15467](https://github.com/magento/magento2/issues/15467)


<!-- MAGETWO-87047 -->* Magento now displays the manufacturer attribute on the Admin on the Catalog page for configurable products. Previously, Magento displayed these attributes on the simple products catalog page, but not on the configurable products catalog page. 

<!-- MAGETWO-86125 -->* Sorting on the price of configurable products with out-of-stock child products  now works properly. Previously, price sorting of configurable products used the price of out-of-stock and disabled child products.



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


### dotmailer
Fixed a regression issue that caused ROI tracking feature to not track order events properly
  • Fixed an error that was being caused by the importer
  • Fixed the catalog sync so it now syncs all products across all created collections when it's configured to sync on store level 
  • Improved validation for new subscribers so that it's no longer possible for them to get enrolled multiple times into the new subscriber program
  • Fixed occurrences of unexpected errors during subscriber and/or customer creation



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



#### Application framework

<!-- MAGETWO-92722 -->* You can now manually add a parameter to `app/etc/env.php: user_admin_email`. When an administrator is created, Magento sends an email  to default store's email and, if present, to the email address defined in `user_admin_email`. NEW FEATURE


#### JavaScript framework

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










#### Cache framework

<!-- MAGETWO-69847 -->* Magento no longer throws an exception when deploying static content on a deployment where Redis is used for cache management. See "Redis and static-content deployment" in [Redis troubleshooting](https://devdocs.magento.com/guides/v2.2/cloud/trouble/redis-troubleshooting.html) for more information. [GitHub-9287](https://github.com/magento/magento2/issues/9287)

<!-- MAGETWO-84109 -->* When a layout is loaded from the cache, Magento now repopulates the list of applied layout handles to prevent any chance of a layout handle being reapplied later. *Fix submitted by [Scott Buchanan](https://github.com/scottsb) in pull request [12314](https://github.com/magento/magento2/pull/12314)*.


### Dashboard


<!--  ENGCOM-1867 -->* Wrong order amount on dashboard on Last orders listing when having more than one website with different currencies

 *Fix submitted by [Ankur Raiyani](https://github.com/ankurvr) in pull request [15661](https://github.com/magento/magento2/pull/15661)*. [GitHub-15660](https://github.com/magento/magento2/issues/15660)



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


### Gift cards 


<!-- MAGETWO-92988 -->* Magento now displays the **Credit Memo** link  at the top of the page for orders with a total of 0 (zero). Previously, this link was missing, which prevented users from creating a credit memo for the order. 

<!-- MAGETWO-92362 -->*  You can now save gift cards without the price being changed on the Admin to an unacceptable format. Previously, Magento tried to save amounts in unacceptable formats (such as the inclusion of a comma in a four-digit price), which triggered an error.  

<!-- MAGETWO-91925 -->* Magento no longer permits users to save a new gift card  without first completing the required values. Previously, when creating a gift card, users could save the card without having designated an amount, but it could not be purchased. Magento also created a `report.CRITICAL: Warning` in the `system.log`.

<!-- MAGETWO- 91867-->* Orders now retain gift message information on both item and order level. Previously, gift messages disappeared from an order when a customer logs into his account during checkout. 

<!-- MAGETWO-91576 -->* Magento now maintains relationships between new gift card accounts when a customer purchases severalgit cards in the same order. 

<!-- MAGETWO-91400 -->* Magento now refunds only the exact amount used on a gift card if only the partial gift card was  used. Previously, when a customer used a gift card account code to partially pay for an order,  and Magento subsequently created a credit memo for a portion of the order, the full amount of the gift card was refunded.

<!-- MAGETWO-86757 -->* Magento now generates the correct number of gift card codes when the full order is invoiced as the customer selects when creating an order. Previously, for orders that included both physical products and multiple gift cards, the number of gift card codes  generated on an order corresponded to the quantity of the previous physical line items that the user had added to the cart before adding gift cards.



### Google Analytics

<!-- ENGCOM-1825 -->* Google analytics pageview is no longer triggered twice. *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [15765](https://github.com/magento/magento2/pull/15765)*. [GitHub-12221](https://github.com/magento/magento2/issues/12221)


### Google Tag Manager

<!-- MAGETWO-91951 -->* The `addToCart` event triggers on the Google Task Manager console only when an item is added to the cart.  Previously, the event was triggered before the cart was updated. 

<!-- MAGETWO-89532 -->* Google Analytics events are now triggered expected. Specifically,  the  `addToCart` and `removeFromCart` events are not triggered until after a customer adds a product to the mini cart. 

<!-- MAGETWO-87955 -->* Magento now accurately updates the mini cart when a customer removes a product while accessing a storefront using Internet Explorer 11.x. Previously, when a customer removed a product from the mini cart, Magento did not remove the product but instead threw this error, `(SCRIPT438: Object doesn't support property or method 'find'. File: sidebar.js, Line: 237, Column: 13 )`. 

<!-- MAGETWO-88806 -->* Google Tag Manager product category data is now fully reported. Previously, the Google Tag Manager product category (Enhanced Ecommerce) data did not report all information. 




### Import/export

<!-- ENGCOM-2304 -->* Product import now updates the **Enable Qty Increments** field as expected. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [14379](https://github.com/magento/magento2/pull/14379)*. [GitHub-14351](https://github.com/magento/magento2/issues/14351)


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



### Pagecache

<!-- MAGETWO-92757 -->* 

The full page cache now returns a page when it is opened  the second or more times on the non-default website of a deployment on more than one website. 






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



### Quote

<!-- ENGCOM-1414 -->*

*Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [14904](https://github.com/magento/magento2/pull/14904)*. [GitHub-14869](https://github.com/magento/magento2/issues/14869)


<!-- ENGCOM-1441 -->* Magento now successfully saves the value of `REMOTE_IP` when a customer uses an IPV6 (Internet Protocol version 6) address. Previously, this value was only partially saved in the `sales_order` and `quote` tables.  *Fix submitted by [George Schiopu](https://github.com/georgeschiopu) in pull request [14976](https://github.com/magento/magento2/pull/14976)*. [GitHub-10395](https://github.com/magento/magento2/issues/10395)


<!-- ENGCOM-1885 -->* Coupon codes now work for guest users through the web API as well as from the storefront. *Fix submitted by [Marcin Dykas](https://github.com/Hypo386) in pull request [15320](https://github.com/magento/magento2/pull/15320)*. [GitHub-14056](https://github.com/magento/magento2/issues/14056)



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



### Sales rules

<!-- MAGETWO-91797 -->* Cart price rules with associated coupons are no longer affected by edits to scheduled updates. 






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


### Shipping 

<!--  ENGCOM-2033 -->* Estimate Shipping and Tax Form not works due to js error in collapsible.js


*Fix submitted by [Alexander Kras'ko](https://github.com/0m3r) in pull request [16213](https://github.com/magento/magento2/pull/16213)*. [GitHub-8222](https://github.com/magento/magento2/issues/8222)




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
  1.  "Use Categories Path for Product URLs" set to NO in configuration -> catalog -> catalog -> Search Engine Optimization
  2.  Create Categories with products
  3.  Generate sitemap
Actual result
  1.  Sitemap is generating wrong urls containing category slug,


<!-- ENGCOM-1866 -->* Images in XML sitemap are always linked to base store in multistore

*Fix submitted by [Steven de Jong](https://github.com/StevenGuapaBV) in pull request [15689](https://github.com/magento/magento2/pull/15689)*. [GitHub-15588](https://github.com/magento/magento2/issues/15588)



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




### Testing

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






<!-- not needed- 72024--> 

## Known issues
91164 -- After upgrading Magento to 2.2.6, you must do the following: 

1) remove the 'pub/media/catalog/product/cache'

2) run `bin/magento catalog:image:resize`



This release includes a fix that optimizes image resizing. 






## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. 

old table


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
