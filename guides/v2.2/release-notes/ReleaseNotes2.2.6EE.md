---
layout: default
group: release-notes
title: Magento Commerce 2.2.6 Release Notes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.6EE.md
---
*Patch code and release notes published on , 2018.*




We are pleased to present Magento Commerce 2.2.6. This release includes multiple enhancements to product security plus bug fixes and enhancements. Check out the over 150 community-contributed fixes!

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues.



## Highlights

Look for the following highlights in this release:



Looking for more information on these new features as well as many others? Check out [Magento 2.2.x Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).


### Core code highlights
This release includes significant performance improvements to the core Magento code:

**Substantial improvements to performance** focus on catalog indexing, among other features: 

* <!-- MAGETWO-87430 -->* Category product indexer logic has been optimized, and re-indexing time has been noticeably reduced.  Previously, when you had many categories (100,0000), Magento could take up to 40 minutes to re-index product catalogs. 

* <!-- MAGETWO-91164 -->* The `catalog:image:resize` command execution time has been reduced by 90%. Note: This improvement has necessitated these additional manual steps after you upgrade your Magento shop to 2.2.6: 

	* remove  `pub/media/catalog/product/cache`

	* run `bin/magento catalog:image:resize` 

*  <!-- MAGETWO-47320 -->* The Catalog Rule re-indexing operation has been optimized, and average re-indexing time, which depends on rule conditions, has improved by more than  80%.  Previously, a full Catalog Rule re-index operation on a medium B2C store took more than 20 minutes. 

 <!-- MAGETWO-90572 -->* The time required to load category or product pages for products that are configured with many attributes (more than 500) has been significantly reduced. Refactoring the logic for product attribute retrieval has resulted in a reduction of operating time of almost 90% for certain scenarios. 

 <!-- MAGETWO-88670 -->* The time required to load a store’s home page has been reduced noticeably when the top menu contains many categories.  (Load time is still affected by the number of categories and the structure of the top menu.)

<!-- MAGETWO-86143 -->* Merchants can now improve store performance by disabling Magento Report functionality. A new configuration setting  (**System Configuration**: **General** > **Reports** > **General Options**) allows merchants to disable Magento Reports, which is recommended practice  if a merchant's business function do not require this capability.


### Community contribution highlights
Highlights of community contributions include  fixes that improve checkout flow and the sorting of simple products:


* Customers can now successfully complete check out when their order contains a configurable product with a configurable option. Previously, customers could not check out when there is a configurable product in the cart with a configurable option, which is now deleted, shopping cart could not be loaded. [GitHub-15467](https://github.com/magento/magento2/issues/15467) Thanks to community member [jonshipman](https://github.com/jonshipman)!  

* Magento multi-store installations now use the store view-specific values from the store configuration settings as expected. Previously, Magento used the default configuration for all store views.  [GitHub-15205](https://github.com/magento/magento2/issues/15205) Thanks to community member [jonshipman](https://github.com/jonshipman)!  

* Magento now maintains the default products sort order of “newest first” when you upgrade your Magento deployment to 2.2.4. Previously, after upgrade, the default products order in categories changed from “newest first” to “oldest first”.  Thanks to community member [Danny Verkade](https://github.com/dverkade)! [GitHub-15627](https://github.com/magento/magento2/issues/15627) 


* Merchants can now successfully change the applied theme setting for a store view (**Content** > **Design** > **Configuration**).  Thanks to community member [Daniel Ruf](https://github.com/DanielRuf)! [GitHub-14968](https://github.com/magento/magento2/issues/14968)


* We’ve reduced the redundant product tax recalculation that previously occurred when Magento loaded category pages, which results in faster page loading. Thanks to community member [Jeroen](https://github.com/JeroenVanLeusden)! [GitHub-14941](https://github.com/magento/magento2/issues/14941)





## Fixes
In addition to security enhancements, this release contains the following functional fixes. 



### Installation, setup, and deployment


<!-- ENGCOM-1537 -->* 

You can now use the `app:config:status` command to check whether configuration propagation is up-to-date. Fix submitted by Juan Alonso in pull request 12441.







But when trying this out on a cleanly installed Magento 2.2.4, that new command doesn't seem to exist.

This is because the line which was added to the di.xml file of the Magento_Deploy module by #12441 was (accidentally?) removed in e6b6c65#diff-2bf3eac66ec091433127117dae63d6a5L34

Just to be sure, the commit which introduced the problem is fixing this issue: #14104 and I verified that restoring this one line in the di.xml file has no influence on issue #14104, so I'm pretty sure that line was accidentally removed (probably by a merge conflict or something like that).





 *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [15174](https://github.com/magento/magento2/pull/15174)*. [GitHub-14104](https://github.com/magento/magento2/issues/14104)



<!-- MAGETWO-93192 -->* Configuration backend models are now populated as expected with all fieldset data, which makes it possible to access all configured values from a current group. [GitHub-16712](https://github.com/magento/magento2/issues/16712)





<!-- MAGETWO-90860 -->* The `magento-deploy-ignore` setting in `composer.json` now works as expected. Previously, files specified in this setting were overwritten during deployment. 

<!-- MAGETWO-87120 -->* The `timestamp` fields in `oauth_nonce` now include indexes to avoid deadlocks while on erasing old records. *Fix submitted by [Karl Deux](https://github.com/KarlDeux) in pull request 13328*. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!-- MAGETWO-84651 -->* The `app:config:dump` command now has an argument that supports dumping only the specified settings that are required to prepare static content on a build system, not all system settings. This new option (`config-types`) makes it possible to dump scopes and themes automatically (which are needed for a build system) while managing system settings manually using `config:set --lock-config`. *Fix submitted by [Juan Alonso](https://github.com/jalogut) in pull request 12410*. [GitHub-11396](https://github.com/magento/magento2/issues/11396) 


<!-- ENGCOM-1972 -->* Sorting has been disabled in the  `glob` and `scandir` functions to improve performance. *Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request [16052](https://github.com/magento/magento2/pull/16052)*. 



<!--  MAGETWO-84651 -->* The `app:config:dump` command

 locks every configuration setting no alternative to dump specific setting only  

*Fix submitted by [Juan Alonso](https://github.com/jalogut) in pull request [12410](https://github.com/magento/magento2/pull/12410)*. [GitHub-11396](https://github.com/magento/magento2/issues/11396) 

<!-- ENGCOM-2078 -->* Magento multi-store installations now use the store view-specific values from the store configuration settings as expected. Previously, Magento used the default configuration for all store views. *Fix submitted by [Francesco Marangi](https://github.com/fmarangi) in pull request [15929](https://github.com/magento/magento2/pull/15929)*. [GitHub-15205](https://github.com/magento/magento2/issues/15205),  [GitHub-15245](https://github.com/magento/magento2/issues/15245) ASK ABOUT CONTRIBUTOR



### B2B

<!-- MAGETWO-92388 -->* Company blocked warnings are no longer included in the source code. Previously, source code included these warning strings, which search indexers detected and treated as text. 

<!-- MAGETWO-92375 -->* Category pages now display as expected all products whose SKUs contain either single or double quotation marks. Previously, Magento threw an error when trying to set pricing and structure on a shared catalog when product SKUs contained these characters. 





<!-- MAGETWO-92040 -->* fix issue with saving company's address if country allowed only for non-default website

Cannot save company with country address that is allowed on non-default website only
ISSUE:
Cannot save company with country address that is allowed on non-default website only
STEPS TO REPLICATE:

Create second website
Set different allowed countries for each website. E.g. For the first website - U.S, for second Ukraine (Under Stores -> Configuration -> GENERAL -> Country options -> Allow countries set different lists of allowed countries on default configuration level, and for every other created website.)
Create Company from admin with address in country allowed on second site only (Ukraine)
EXPECTED RESULTS:
Company saved
ACTUAL RESULTS:
Error appears:
Invalid value of "UA" provided for the country_id field.
Though country is allowed on secondary website


<!-- MAGETWO-90824 -->* The new Company resource so that administrators with limited permissions can 



Can only see companies if the user roll is full administrator
Added "Company" resource for using in user role.
Merchant pointed out there is no option in the permissions to see or not see companies in the user roles permissions unless you are a full admin with "all" resources selected.

When creating b2b user roles, Companies should be listed as Resource Access

actual results: When creating b2b user roles, Companies is not listed as Resource Access and thus, the role has to be created providing full access to all resources, making financial information or other sensible data accessible to all admin users with such role.


This provides the Company resource for administrators with limited privileges. These administrators  can now be granted permissions to see or not see companies in the user roles without having full administrator permissions


Merchant also stated that this is major issue since b2b role has to be assigned all permissions in order to see companies, every backend user in Magento can see the financial results and figures.


When creating b2b user roles, Companies should be listed as Resource Access



add link to UG








<!-- MAGETWO-89971 -->* Fixed B2B company product prices on different websites


The product total price value on the second website is as on the default website

EXPECTED RESULTS:
The product total price value on the second website have to be 30.99;
ACTUAL RESULTS:
The product total price value on the second website is as on the default website 10.99;

Magento now displays the correct product total price value on all websites in a  



<!-- MAGETWO-89888 -->* When **Website Restrictions** are set to **Private Sales: Login Only**, access to the storefront is now restricted to customers who log in, and merchants can still create new companies in the Admin. Previously, when a merchant tried to create a company when this setting was enabled, Magento threw this error, `Can not register new customer due to restrictions are enabled`. 

<!-- MAGETWO-87349 -->* Configurable products can now be added to the requisition list directly from the Category page.





### Bundle products

<!-- MAGETWO-90999 -->* Magento now successfully imports bundle products. 

<!-- MAGETWO- 86218-->* Bundled products that have the **User Defined** field unchecked can now be back ordered. [GitHub-10061](https://github.com/magento/magento2/issues/10061)


<!--  ENGCOM-1863-->* Fixed set template syntax issue  *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15825](https://github.com/magento/magento2/pull/15825)*. 




### Catalog

<!-- ENGCOM-1455 -->* 

Update Gallery Template to handle boolean config Variables

Due to changes implemented in the resolution to #12285, boolean configuration variables are now properly typed booleans, instead of the strings "true" and "false".

Without this fix applied, config vals that were true were being output in the gallery template javascript as : 1 and values that were false were being output as :

This causes javascript errors for any item that is set to false.



(Some) Variables set in the theme's view.xml for the gallery widget appear to be ignored in 2.2.4 (This may also affect other variables, I don't know)



The option <var name="allowfullscreen">false</var> for mobile device don't work in product view page gallery 





 *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [15020](https://github.com/magento/magento2/pull/15020)*. [GitHub-12285](https://github.com/magento/magento2/issues/12285), [GitHub-15009](https://github.com/magento/magento2/issues/15009)



<!-- ENGCOM-1539 -->* The breadcrumbs component no longer relies on the `mageMenu` widget. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request [15178](https://github.com/magento/magento2/pull/15178)*. [GitHub-14987](https://github.com/magento/magento2/issues/14987)

<!-- ENGCOM-1622 -->* The `data-container` class name is now based on view mode. *Fix submitted by [Sunil](https://github.com/sunilit42) in pull request [15350](https://github.com/magento/magento2/pull/15350)*. [GitHub-15319](https://github.com/magento/magento2/issues/15319)

<!-- ENGCOM-1617 -->* Breadcrumbs now work as expected when a product name contains quotation marks. Previously, the breadcrumbs on the product details page caused this syntax error to be thrown, `SyntaxError: Unexpected token x in JSON`. *Fix submitted by [Jignesh Baldha](https://github.com/jignesh-baldha) in pull request [15347](https://github.com/magento/magento2/pull/15347)*. [GitHub-15037](https://github.com/magento/magento2/issues/15037)



<!-- ENGCOM-1463 -->* Disabling a product does not remove it from the flat index



 *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [15019](https://github.com/magento/magento2/pull/15019)*. [GitHub-14966](https://github.com/magento/magento2/issues/14966)



<!-- ENGCOM-1051 -->* The success message that Magento displays when a customer adds a product to the compare list now contains a link to the comparison list. *Fix submitted by [Andreas von Studnitz](https://github.com/avstudnitz) in pull request [13862](https://github.com/magento/magento2/pull/13862)*. 


<!-- ENGCOM-1953 -->* 


Complete the fix for cache issue due to the currencies with no symbol 
Using getCurrencySymbol() leads to a bug for currencies where there is no currency symbol - cache ends up being non-unique. Using currency code for caching is a more foolproof way.

 *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15902](https://github.com/magento/magento2/pull/15902)*. 



<!-- ENGCOM-1927 -->* Catalog component blocks now contain correct return type suggestions, and typos have been corrected where needed in the PHPDocs. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15913](https://github.com/magento/magento2/pull/15913)*. 



<!-- ENGCOM-1287 -->* 

Previously, 


Widget cache error


Expected result
	1.	Two widgets appear on homepage with the same products, but different titles.
Actual result
	1.	First widget loaded shows twice depending on sort order

 *Fix submitted by [Alexandr Kozyr](https://github.com/AlexandrKozyr) in pull request [12764](https://github.com/magento/magento2/pull/12764)*. [GitHub-4389](https://github.com/magento/magento2/issues/4389)


<!-- ENGCOM-1059 -->* Magento no longer makes redundant requests on the 'customer data' on checkout cart page. *Fix submitted by [Andrey Bezyazychnyy](https://github.com/andrewbess) in pull request [14314](https://github.com/magento/magento2/pull/14314)*. [GitHub-13765](https://github.com/magento/magento2/issues/13765)


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




<!-- MAGETWO-87721 -->* 



Custom Options are corruputed when saving product to a different website
When adding another site to a product with customizable options, the options get corrupted. Sometimes by splitting into multiple options or duplicating an option.


EXPECTED RESULTS:
Customizable options should be configured the same after saving the second website and before saving.

ACTUAL RESULTS:
In the Split Options Case, there are now two sets of options, the top one with one of the values and the bottom with two of the values. (see RadioButtonAfter.png)
In the Duplicate Option Case, there are now two sets of the same option (see TextFieldAfter.png)




<!-- MAGETWO-87589 -->* Fixed issue with polluted database for additional stores if attribute data wasn't set for additional stores (use default check box now is set even if tab with the attribute was not opened)

<!-- MAGETWO-87430 -->* Category product indexer logic has been optimized, and re-indexing time has been noticeably reduced.  Previously, when you had many categories (100,0000), Magento could take up to 40 minutes to re-index product catalogs.  

<!-- MAGETWO-86710 -->* Widget selection by Enabled Products no longer causes a fatal error on a storefront when the **Flat Product** is configured. 

<!-- MAGETWO-86295 -->* Merchants can now change the `status` and `update` attributes from the product page. Previously, Magento returned a 404 page when bulk enabling or disabling products in the Admin with a restricted user role that is limited to a specific website. 

<!-- MAGETWO-85682 -->* Magento now maintains the default setting for a product's `status` attribute when you create a new product. Previously, when creating a new product after changing the default option from Enabled to Disabled for this attribute, the status is incorrectly set to enabled by default.

<!-- MAGETWO-84891 -->* The print preview of  product comparison results (the page of results that Magento produces when you click **Compare** after selecting two or more products) now displays as expected. Previously, only a subset of page elements was displayed.  


<!-- MAGETWO-82116 -->* Magento now maintains the correct dates in the results of filtering the Admin Product Grid Filter: Set Product as New from Date.  [GitHub-11517](https://github.com/magento/magento2/issues/11517)

date reverts in past after out of product edit 




<!-- MAGETWO-75427 -->* As you type more characters into the text field for a product's custom option, the hint showing the number of characters left before reaching the maximum now decreases as expected.

<!-- MAGETWO-60573 -->* Merchants can now set a custom option fixed price with a negative value in the Admin. [GitHub-7333](https://github.com/magento/magento2/issues/7333)

<!-- MAGETWO-73739 -->* You can now unset a category image on the store view level when the image defined on all store views.

<!-- MAGETWO-74021 -->* The Catalog Products List widget can now show products on storefront that have specific attributes.





<!--  ENGCOM-2383 -->* Configurable Product with Only Size Options (No Color Options) Shows No Image in Cart


Steps to reproduce
Create a configurable product with multiple size options, but no color options
Assign an image(s) only to the configurable product (not to child/simple products)
Visit the product page in the store front and add it to cart.
Expected result
Product image should show on cart page (coming from configurable product)
Actual result
No product image on cart page (mini cart does show the image)




 *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [16863](https://github.com/magento/magento2/pull/16863)*. [GitHub-16843](https://github.com/magento/magento2/issues/16843)


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




<!-- ENGCOM-1941 -->* fix for dropdown toggle icon in cart

Open cart page. Toggle discount or Tax dropdown.
Expected: arrow down changes to arrow up.
Currently: arrow down changes to arrow left.

Previously, arrow did not change direction as expected when you toggled the 



 *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [15991](https://github.com/magento/magento2/pull/15991)*. 


<!-- ENGCOM-1951 -->* bugfix checkout page cart icon color

On smaller screens checkout page cart icon didn't had hover color and regular color was not implemented through correct variable. (Should be button color, not primary color)



 *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16002](https://github.com/magento/magento2/pull/16002)*. 


<!-- ENGCOM-1154 -->* Hit fast twice F5 on checkout page, customer loggs out automatically

Concurrent (quick reload) requests on checkout cause cart to empty - related to session_regenerate_id

Add to cart, try to checkout, cart is empty but mini-cart has items

 *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [14428](https://github.com/magento/magento2/pull/14428)*. [GitHub-4301](https://github.com/magento/magento2/issues/4301), [GitHub-12362](https://github.com/magento/magento2/issues/12362), [GitHub-13427](https://github.com/magento/magento2/issues/13427)




<!-- ENGCOM-1646 -->* set alignment purchase order form and place order button 


Purchased Order Form button should visible properly



Enable Purchase Order Payment Method from Admin
Add Product to cart
Go to Checkout
Enter Address Details and select Shipping Method
Go to Review and Payment Method



 *Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request [15331](https://github.com/magento/magento2/pull/15331)*. [GitHub-15334](https://github.com/magento/magento2/issues/15334)




<!-- ENGCOM-1634-->* Fixed Purchased Order Form button should visible properly

 *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15372](https://github.com/magento/magento2/pull/15372)*. [GitHub-15334](https://github.com/magento/magento2/issues/15334)





<!-- ENGCOM-1713 -->* Duplicated elements id in checkout page

Steps to reproduce
Go to Stores -> Configuration -> Sales -> Sales under Gift Options and set both Allow Gift Messages to YES
Put something in cart and go to checkout or cart page
Expected result
Two forms for gift messages having fields with unique ids
Actual result




 *Fix submitted by [Julien ANQUETIL](https://github.com/julienanquetil) in pull request [15585](https://github.com/magento/magento2/pull/15585)*. [GitHub-13415](https://github.com/magento/magento2/issues/13415)



<!-- ENGCOM-1988 -->* appended payment code to ID field to make it unique


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



<!-- ENGCOM-1298 -->* 

Steps to reproduce
Add product to cart
Open dev tools and find .block-minicart element
Expected result
.block-minicart element doesn't have empty class
Actual result
.block-minicart element has empty class

Css class "empty" is always present on minicart dropdown

 *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [14715](https://github.com/magento/magento2/pull/14715)*. [GitHub-14669](https://github.com/magento/magento2/issues/14669)



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


<!--  ENGCOM-1680 -->* IE11 user login email validation fails if field has leading or trailing space

 *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [15365](https://github.com/magento/magento2/pull/15365)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)


<!--  ENGCOM-1987 -->* unlock customer after password reset

 *Fix submitted by [Andrea Gaspardo](https://github.com/andreagaspardo) in pull request [15255](https://github.com/magento/magento2/pull/15255)*. [GitHub-15534](https://github.com/magento/magento2/issues/15534)


<!--  ENGCOM-1625 -->* ate format changed after customer tries to register with 

 *Fix submitted by [KaushikChavda](https://github.com/KaushikChavda) in pull request [15272](https://github.com/magento/magento2/pull/15272)*.




### EAV
<!-- MAGETWO- 90576-->* 
Magento now correctly multiselect product attributes 

Using a multiselect product attribute with a custom source model in the adminhtml doesn't render selected value
Fixed incorrect behavior in multi-select with custom product attributes. [GitHub-5445](https://github.com/magento/magento2/issues/5445)



### Frameworks

<!--  ENGCOM-1981 -->* Adding support for variadic arguments fro method in generated proxy

Pull request fixes proxy class generation, so class with method with variadic arguments can be also used in proxy class.

Description
In Magento/Framework/ObjectManager/Code/Generator/Proxy (lines 158, 159) I added check if parameter is variadic and if so its name is suffixed by '...', so then in method getMethodBody() proxy method body is generated properly.

 *Fix submitted by [vgelani](https://github.com/vgelani) in pull request [16080](https://github.com/magento/magento2/pull/16080)*. 



<!--  ENGCOM-1915 -->* Wrong annotation in _toOptionArray : lib\internal\Magento\Framework\D


Manual testing scenarios
Please check request parameter in toOptionArray  magento/framework/Data/Collection/AbstractDb.php



 *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15892](https://github.com/magento/magento2/pull/15892)*. 




<!--  ENGCOM-1374 -->* XML sitemap is not generated by schedule

Steps to reproduce
go to admin>store>configurtion>catalog>xml sitemap
turn on generation and set up time.
Expected result
generate sitemap in magento root folder.
Actual result
no xml sitemap is found.

 *Fix submitted by [James Halsall](https://github.com/jameshalsall) in pull request [14822](https://github.com/magento/magento2/pull/14822)*. [GitHub-5768](https://github.com/magento/magento2/issues/5768)




<!--  ENGCOM-1356 -->* Reset Password Email Issue on Multi Store from Admin

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


<!--  ENGCOM-1301 -->* Quote Attribute trigger_recollect causes a timeout

 *Fix submitted by [Philipp Sander](https://github.com/philippsander) in pull request [14719](https://github.com/magento/magento2/pull/14719)*. [GitHub-9580](https://github.com/magento/magento2/issues/9580)





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

<!-- MAGETWO-69847 -->* Static Assets deployment no longer throws errors when Redis is used for cache. [GitHub-9287](https://github.com/magento/magento2/issues/9287)

asked cloudvolks


<!-- MAGETWO-84109 -->* When a layout is loaded from the cache, it now repopulates the list of applied layout handles to prevent any chance of a layout handle being reapplied later. 

enhancement?

Prevent layout cache corruption in edge case #12314
https://github.com/magento/magento2/pull/12314
https://github.com/scottsb
Scott Buchanan




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

First PDF download / export after login


 *Fix submitted by [Riccardo Tempesta ](https://github.com/phoenix128) in pull request [15539](https://github.com/magento/magento2/pull/15539)*. [GitHub-15510](https://github.com/magento/magento2/issues/15510)



<!-- ENGCOM-1805 -->* Merchants can now apply styling by changing LESS variables in the Luma theme as expected. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15734](https://github.com/magento/magento2/pull/15734)*. [GitHub-15608](https://github.com/magento/magento2/issues/15608)


<!-- ENGCOM-1853 -->*

 *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15791](https://github.com/magento/magento2/pull/15791)*. 


<!-- ENGCOM-1861 -->*

 *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15789](https://github.com/magento/magento2/pull/15789)*. 



<!-- ENGCOM-1850 -->* We've removed the double semicolon from the style sheets. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15795](https://github.com/magento/magento2/pull/15795)*. 



<!-- ENGCOM-1880 -->*

 *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15871](https://github.com/magento/magento2/pull/15871)*. 




<!-- ENGCOM-1860 -->* Add Ability To Separate Frontend / Adminhtml in New Relic

 *Fix submitted by [Max Chadwick](https://github.com/mpchadwick) in pull request [12935](https://github.com/magento/magento2/pull/12935)*. 



<!-- ENGCOM-1864 -->*

 *Fix submitted by [Maksim Gopey](https://github.com/Radio) in pull request [15826](https://github.com/magento/magento2/pull/15826)*. 




<!-- ENGCOM-1897 -->* Correct typo correction js files

 *Fix submitted by [saurabh-aureate](https://github.com/saurabh-aureate) in pull request [15888](https://github.com/magento/magento2/pull/15888)*. 




<!-- ENGCOM-1883 -->* limiter float too generic

 *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15878](https://github.com/magento/magento2/pull/15878)*. 






<!-- ENGCOM-1925 -->*


 *Fix submitted by [Ledian Hymetllari](https://github.com/ledian-hymetllari) in pull request [15878](https://github.com/magento/magento2/pull/15907)*. 




<!-- ENGCOM-1923 -->* removed extraneous margin

 *Fix submitted by [Steven de Jong](https://github.com/StevenGuapaBV) in pull request [15936](https://github.com/magento/magento2/pull/15936)*. [GitHub-15308](https://github.com/magento/magento2/issues/15308)


<!-- ENGCOM-1942 -->* Extend default config instead overwrite

 *Fix submitted by [Valerij Ivashchenko](https://github.com/likemusic) in pull request [16001](https://github.com/magento/magento2/pull/16001)*.



<!-- ENGCOM-1958 -->* prevent inline-block issue in name form due to space and font-size

 *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [16048](https://github.com/magento/magento2/pull/16048)*. 




<!-- ENGCOM-1959 -->* Correct code formatting

 *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15811](https://github.com/magento/magento2/pull/15811)*. 



<!-- ENGCOM-1896 -->* Solve overlapping Issue on every Home page & category page of

 *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15893](https://github.com/magento/magento2/pull/15893)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)



<!-- ENGCOM-1886 -->*

 *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15870](https://github.com/magento/magento2/pull/15870)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)


<!-- ENGCOM-2011 -->* Correct return type of methods and typo correction

 *Fix submitted by [saurabh-aureate](https://github.com/saurabh-aureate) in pull request [15993](https://github.com/magento/magento2/pull/15993)*. 



	<!-- ENGCOM-1991 -->* missing meta title tag and doesn't show product name if meta title is empty

 *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15532](https://github.com/magento/magento2/pull/15532)*. [GitHub-15501](https://github.com/magento/magento2/issues/15501)






	<!-- ENGCOM-2016 -->* Fixed syntax for before-after operators in less files


 *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16181](https://github.com/magento/magento2/pull/16181)*. 







	<!-- ENGCOM-2018 -->* Removed double occurrence of keywords from sentences

 *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16182](https://github.com/magento/magento2/pull/16182)*. 




<!-- ENGCOM-2019 -->* Correct sentence in comment section in class file

 *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16183](https://github.com/magento/magento2/pull/16183)*. 



<!-- ENGCOM-1607 -->* Function is unnecessarily called multiple time

 *Fix submitted by [Saurabh Parekh](https://github.com/saurabh-parekh) in pull request [15346](https://github.com/magento/magento2/pull/15346)*. [GitHub-15355](https://github.com/magento/magento2/issues/15355)


<!-- ENGCOM-1659 -->* Magnifier doesn't work with mode set to inner

 *Fix submitted by [Kacper Chara](https://github.com/kacperchara) in pull request [15382](https://github.com/magento/magento2/pull/15382)*. [GitHub-4977](https://github.com/magento/magento2/issues/4977)




<!-- ENGCOM-1680 -->* Trim email address by remove leading or trailing space on the customer account login page email field.


 *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [15365](https://github.com/magento/magento2/pull/15365)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)


<!-- ENGCOM-2023 -->* Trim email address in customer account create and login form

 *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [16192](https://github.com/magento/magento2/pull/16192)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)






<!-- ENGCOM-2198 -->* Trim email address in newsletter, forgot password, checkout login and email to a friend form


 *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull request [16564](https://github.com/magento/magento2/pull/16564)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)


Trim email address by remove leading or trailing space on following forms.

Newsletter
Checkout login
Forgot your password
Email to a Friend


<!-- ENGCOM-2381 -->* Trim issue on customer confirmation form

 *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16595](https://github.com/magento/magento2/pull/16595)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)




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


<!-- MAGETWO-87955 -->* Magento now accurately updates the minicart when a customer removes a product while accessing a storefront using Internet Explorer 11.x. Previously, when a customer removed a product from the minicart, Magento did not remove the product but instead threw this error, `(SCRIPT438: Object doesn't support property or method 'find'. File: sidebar.js, Line: 237, Column: 13 )`. 



<!-- MAGETWO-88806 -->* Google Tag Manager Not Reporting Correctly

Fixed Google Tag Manager to trigger events with correct data, like product pricing

Merchant reports, the Google Tag Manager "Product Category (Enhanced Ecommerce)" data is not reporting at all (everything is reporting as "(not set)"). This missing data is affecting a variety of critical reports that we use internally and externally (3rd party service providers, etc.). The 'dataLayer' JavaScript in the source code seems to be missing category data in most event functions, and the only one that appears to include it doesn't seem to get called for some reason 



<!-- MAGETWO-89532 -->* Google Analytics events now work more consistently. Previously, 

Google Analytics - addToCart event triggers before adding to cart
Fixed inconsistent behavior for Google Analytics events
Previously, when updating the quantity of a product in mini-cart, GTM 'addToCart' & 'removeFromCart' event triggers even before updating the cart.

Those events must be triggered after updating the cart.




### Import/export

<!-- ENGCOM-2304 -->* Product import doesn't change `Enable Qty Increments` field


 *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [14379](https://github.com/magento/magento2/pull/14379)*. [GitHub-14351](https://github.com/magento/magento2/issues/14351)




### Indexing


### Infrastructure

<!-- MAGETWO-92303 -->* Magento now sends email when the status of an RMA changes to Return Received, Approved, or Rejected. Previously, no email was sent to the customer who created the order.

<!-- MAGETWO-92302 -->* The RMA status label now shows on the email that Magento sends to customers when the status of an RMA changes.

<!-- MAGETWO-72090 -->* Magento now deselects only the attributes you choose to deselect when you deselect the **Use Default Value** setting on a store view for certain attributes. Previously, when you deselected the **Use Default Value** setting on a store view for certain attributes, Magento unselected other attributes as well. 




<!-- MAGETWO-88615 -->* Magento now deploys the translations in `js-translation.json` file when deploying static content.  

CSS load order incorrect using default_head_blocks.xml 


 *Fix submitted by [Sergey Dmitruk](https://github.com/SergeyDmitruk) in pull request [14290](https://github.com/magento/magento2/pull/14290)*. [GitHub-1821](https://github.com/magento/magento2/issues/1821)



<!-- ENGCOM-2304 -->* Merged CSS file name generation

 *Fix submitted by [Alexander Lukyanov](https://github.com/sashas777) in pull request [15144](https://github.com/magento/magento2/pull/15144)*. [GitHub-11354](https://github.com/magento/magento2/issues/11354)


<!-- ENGCOM-1875 -->* Fixed condition with usage "hack" isPostRequest method

 *Fix submitted by [Pavel Usachev](https://github.com/pusachev) in pull request [12626](https://github.com/magento/magento2/pull/12626)*. 


<!-- ENGCOM-1952 -->*
 *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16012](https://github.com/magento/magento2/pull/16012)*. [GitHub-15832](https://github.com/magento/magento2/issues/15832)




<!-- ENGCOM-1917 -->*

 *Fix submitted by [Marcel Hauri](https://github.com/mhauri) in pull request [15647](https://github.com/magento/magento2/pull/15647)*. 




<!-- ENGCOM-1960 -->*Small refactoring to better code readability

 *Fix submitted by [Valerij Ivashchenko](https://github.com/likemusic) in pull request [16010](https://github.com/magento/magento2/pull/16010)*. 




	<!-- ENGCOM-1611 -->* Template syntax in block file

*Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [15339](https://github.com/magento/magento2/pull/15339)*. [GitHub-15345](https://github.com/magento/magento2/issues/15345)







<!-- ENGCOM-2107 -->* Calendar widget (jQuery UI DatePicker) with numberOfMonths = 2 or more

*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16279](https://github.com/magento/magento2/pull/16279)*. [GitHub-7379](https://github.com/magento/magento2/issues/7379)



<!-- ENGCOM-2211 -->* Rewriting product listing widget block breaks its template rendering

*Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16530](https://github.com/magento/magento2/pull/16530)*. [GitHub-16529](https://github.com/magento/magento2/issues/16529)


<!-- ENGCOM-2077 -->* Admin tabs order not working properly

*Fix submitted by [Tiago Sampaio](https://github.com/tiagosampaio) in pull request [16175](https://github.com/magento/magento2/pull/16175)*. [GitHub-16174](https://github.com/magento/magento2/issues/16174)



<!-- ENGCOM-2263 -->* User Agent Rules table headers do match content of rows. #

*Fix submitted by [Justin](https://github.com/JRhyne) in pull request [16704](https://github.com/magento/magento2/pull/16704)*. [GitHub-16703](https://github.com/magento/magento2/issues/16703)


<!-- ENGCOM-2288 -->* no navigation-level0-item__hover__color

*Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16732](https://github.com/magento/magento2/pull/16732)*. [GitHub-15848](https://github.com/magento/magento2/issues/15848)



<!-- ENGCOM-2336 -->* Fix Bread Crumbs on Home Page in Multistore

PRIVATE REPO -- ask Lori


*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [16732](https://github.com/magento/magento2/pull/16732)*. [GitHub-6504](https://github.com/magento/magento2/issues/6504)




<!-- ENGCOM-2412 -->* HTML minification problem with php tag with a comment and no space at the end

*Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [16916](https://github.com/magento/magento2/pull/16916)*. [GitHub-5316](https://github.com/magento/magento2/issues/5316)


<!-- ENGCOM-2295 -->* Transport variable can not be altered in email_invoice_set_template_vars_before Event

Fixed backwards incompatible change to Transport variable event parameters

We waht to change the payment_html for banktransfer invoices. Unfortunately the instruction is also sent in invioce email. And there the customer already has paid the bill.


*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16599](https://github.com/magento/magento2/pull/16599)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)





<!-- ENGCOM-1467 -->* Transport variable can not be altered in email_invoice_set_template_vars_before Event


*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [15040](https://github.com/magento/magento2/pull/15040)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)



### JavaScript
<!-- ENGCOM-1640 -->* Refactor javascript code of button split widget 

*Fix submitted by [Amit](https://github.com/amittiwari024) in pull request [15351](https://github.com/magento/magento2/pull/15351)*. [GitHub-15354](https://github.com/magento/magento2/issues/15354)


### Module Manager


<!-- ENGCOM-1633 -->* Module Manager module grid is not working Magento 2.2.4


*Fix submitted by [Alex Gusev](https://github.com/flancer64) in pull request [15211](https://github.com/magento/magento2/pull/15211)*. [GitHub-15192](https://github.com/magento/magento2/issues/15192)



### MSI
<!-- ENGCOM-1869 -->*

*Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15840](https://github.com/magento/magento2/pull/15840)*.



### Newsletter

<!-- MAGETWO-88217 -->* Guest users can now sign up for newsletters for multiple stores. Previously, when a guest user signed up for newsletter from multiple stores. Magento sent a subscription confirmation message, but did not successfully subscribe the user. 


<!-- MAGETWO-87969 -->* Magento now correctly updates newsletter subscriptions  when the customer is registered on two stores. Previously, when the customer tried to subscribe to the newsletter fro a second store, Magento displayed this message, `You are (not) subscribed to "General Subscription"`. 



<!--  ENGCOM-1573 -->* Newsletter subscription confirmation message does not display after clicking link in email

*Fix submitted by [Kaushik Chavda](https://github.com/KaushikChavda) in pull request [15247](https://github.com/magento/magento2/pull/15247)*. [GitHub-14747](https://github.com/magento/magento2/issues/14747)


<!-- ENGCOM-2144 -->* "Confirmation request" email is sent on customer's newsletter unsubscription

*Fix submitted by [Lyzun Oleksandr](https://github.com/nuzil) in pull request [15464](https://github.com/magento/magento2/pull/15464)*. [GitHub-15218](https://github.com/magento/magento2/issues/15218)



### Payment methods


<!--  ENGCOM-1462 -->* Allmethods config source model does not always report the full list of payment methods 

*Fix submitted by [Manuel Schmid](https://github.com/mash1t) in pull request [15032](https://github.com/magento/magento2/pull/15032)*. [GitHub-13460](https://github.com/magento/magento2/issues/13460)



<!-- MAGETWO-85908 -->* You can now cancel an order placed through Cybersource if fraud filters are triggered.

<!-- MAGETWO- 92625-->* Magento now emails customers order confirmations for Worldpay orders placed through Worldpay.

<!-- MAGETWO-92784 -->* The free shipping coupon code now works as expected when using the USPS shipping method. Magento now Previously, the order summary did not indicate free shipping with USPS even after the customer applied the free shipping code  during checkout. 

<!-- MAGETWO-92820 -->* Customers can now continue creating an order  after a PayFlow Pro payment has been declined. Previously, under these circumstances. the customer could not continue his purchase. 

<!-- MAGETWO-90571 -->* Magento no longer sends Admin orders to Signifyd for review when Signifyed is disabled on the website on which the administrator is logged in. 

<!-- MAGETWO-90533 -->* Magento now successfully creates shipping labels for a return merchandise authorization (RMA) when using FedEx Smart Post as the shipping option. Previously, Magento threw an error under these circumstances. 

<!-- MAGETWO-89995 -->* Paypal Onboarding has been configured to work for  merchants from non-USA countries.

<!-- MAGETWO-88244 -->* Magento now accurately displays the status of PayPal orders. Previously, the status of PayPal orders was displayed as being in the Processing state only. 

<!-- MAGETWO-89221 -->* You can now cancel an order that was placed with Braintree if the authorization has expired. 

<!-- MAGETWO-84495 -->* Magento now sends email about payment failures to customers. Previously, Magento did not send the customer email, but instead logged an error in the `support.log` and displayed this message on the storefront, `Transaction has been declined. Please try again later`.



<!--  ENGCOM-1648 -->* Resolve Knockout non-unique elements id in console error

When enabling more then one payment methods from admin , It is giving error in the console "Found elements with non-unique id billing-address-form "

*Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request [15349](https://github.com/magento/magento2/pull/15349)*. [GitHub-15348](https://github.com/magento/magento2/issues/15348)


<!-- ENGCOM-2021 -->* Argument 1 passed to Magento\Sales\Model\Order\Payment must be an instance of Magento\Framework\DataObject, none given

*Fix submitted by [Oleh Kravets](https://github.com/xpoback) in pull request [16194](https://github.com/magento/magento2/pull/16194)*. [GitHub-16184](https://github.com/magento/magento2/issues/16184)



### Pagecache

<!-- MAGETWO-92757 -->* 

The full page cache now returns a page when it is opened  the second or more times on the non-default website of a deployment on more than one website. 






### Performance

<!-- MAGETWO-47320 -->* The Catalog Rule re-indexing operation has been optimized, and average re-indexing time, which depends on rule conditions, has improved by more than  80%.  Previously, a full Catalog Rule re-index operation on a medium B2C store took more than 20 minutes. 


<!-- MAGETWO-86143 -->* Merchants can now improve store performance by disabling Magento Report functionality. A new configuration setting  (**System Configuration**: **General** > **Reports** > **General Options**) allows merchants to disable Magento Reports, which is recommended practice  if a merchant's business function do not require this capability.


<!-- MAGETWO-92154 -->* As a developer, using Magento Cloud, I want to be easily able to change my store's locales.

when Magento is in Production mode and the `static_content_on_demand_in_production` flag is enabled, we unlock Locale field for store configurations (menu Stores > Settings > Configuration , section General > General > Locale Options) 
 if locale exists in app/etc/config.php file, the locale will be locked despite the Magento mode. 
the same behavior is for Admin locale, so when Magento is in Production mode and static_content_on_demand_in_production flag is enabled we display the whole list of locales for choosing in adding/edditing admin user (System -> Permissions -> All Users) 

Cloud

Ask cloudvolk for description and link to docs



 <!-- MAGETWO-90572 -->* The time required to load category or product pages for products that are configured with many attributes (more than 500) has been significantly reduced. Refactoring the logic for product attribute retrieval has resulted in a reduction of operating time of almost 90% for certain scenarios. 

 <!-- MAGETWO-88670 -->* The time required to load a store’s home page has been reduced noticeably when the top menu contains many categories.  (Load time is still affected by the number of categories and the structure of the top menu.)



### Quote

<!-- ENGCOM-1414 -->*

*Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [14904](https://github.com/magento/magento2/pull/14904)*. [GitHub-14869](https://github.com/magento/magento2/issues/14869)


<!-- ENGCOM-1441 -->* REMOTE_IP gets saved partially when using IPV6

*Fix submitted by [George Schiopu](https://github.com/georgeschiopu) in pull request [14976](https://github.com/magento/magento2/pull/14976)*. [GitHub-10395](https://github.com/magento/magento2/issues/10395)





<!-- ENGCOM-1885 -->* Coupon API not working for guest user

*Fix submitted by [Marcin Dykas](https://github.com/Hypo386) in pull request [15320](https://github.com/magento/magento2/pull/15320)*. [GitHub-14056](https://github.com/magento/magento2/issues/14056)


### Reports

<!-- ENGCOM-2215 -->* Remove the timezone from the date when retrieving the current month from a UTC timestamp

*Fix submitted by [Prince Patel](https://github.com/mageprince) in pull request [16584](https://github.com/magento/magento2/pull/16584)*. [GitHub-15940](https://github.com/magento/magento2/issues/15940)



### Rule 

<!-- MAGETWO-89220 -->* A cart rule using a `subselection` condition no longer automatically grants a discount. 

<!-- ENGCOM-1961 -->*Improve retrieval of first array element


*Fix submitted by [Thomas Klein](https://github.com/thomas-blackbird) in pull request [16053](https://github.com/magento/magento2/pull/16053)*. [GitHub-15940](https://github.com/magento/magento2/issues/15940)


<!-- ENGCOM-1583 -->* Condition Category Chooser Crashes Page if Store has Several Nested Categories

*Fix submitted by [Keith Bentrup](https://github.com/keithbentrup) in pull request [15265](https://github.com/magento/magento2/pull/15265)*. [GitHub-15121](https://github.com/magento/magento2/issues/15121)




### Sales

<!-- MAGETWO-93102 -->* Order status now remains in the Complete state after Magento refunds store credit on a partial credit memo. Previously, under these circumstances, Magento changed the status of the order to Closed. 

<!-- MAGETWO-92847 -->* You can now create multiple credit memos in one session and save ach successfully. Previously, Magento displayed this error when you tried to save a second credit memo after creating the first memo: `Could not save credit memo`.

<!-- MAGETWO-92899 -->* Magento now displays any errors that occur during order creation in the browser console. Previously, Magento displayed this message: `Uncaught ReferenceError: order is not defined during order creation` instead of a specific error message. 

<!-- MAGETWO-91466 -->* The `POST /V1/shipment`endpoint processes `tracks` arrays as expected. 

<!-- MAGETWO-90496 -->* Magento no longer reverts to the country associated with the default website when a customer edits the billing address for an order. Previously, if a customer edited the shipping address for an order, Magento would reset the billing address to the default address specified for the default website. 



<!-- ENGCOM-1467 -->*


*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [15040](https://github.com/magento/magento2/pull/15040)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

### Sales rules

<!-- MAGETWO-91797 -->* Cart price rules with associated coupons are no longer affected by edits to scheduled updates. 






### Search
<!-- ENGCOM-1381 -->* 

 *Fix submitted by [Julien ANQUETIL](https://github.com/julienanquetil) in pull request [14839](https://github.com/magento/magento2/pull/14839)*. [GitHub-14274](https://github.com/magento/magento2/issues/14274)

<!-- ENGCOM-1616 -->* 

 *Fix submitted by [Amjad M](https://github.com/amjadm61) in pull request [15340](https://github.com/magento/magento2/pull/15340)*. [GitHub-13793](https://github.com/magento/magento2/issues/13793)


<!-- ENGCOM-1887 -->* fixed Swagger response for searchCriteria

*Fix submitted by [Jakub](https://github.com/idziakjakub) in pull request [15040](https://github.com/magento/magento2/pull/15040)*. [GitHub-15322](https://github.com/magento/magento2/issues/15322)




<!--  MAGETWO-85786 -->* Catalog not filtered by admin search bar

*Fix submitted by [Pavel](https://github.com/hannassy) in pull request [12735](https://github.com/magento/magento2/pull/12735)*. [GitHub-7861](https://github.com/magento/magento2/issues/7861)




<!--  ENGCOM-1415 -->* Adding an * to do a customer search

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


<!--  ENGCOM-1589 -->* Fix typo in test method's name and test result

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

PRIVATE REPO?


*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [70](https://github.com/magento/magento2/pull/70)*. [GitHub-6264](https://github.com/magento/magento2/issues/6264)



### Swagger


### Swatches

<!--  ENGCOM-1443 -->* Color attribute taking swatch instead of Drop down option for configurable options

*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-9307](https://github.com/magento/magento2/issues/9307)



<!--  ENGCOM-1443 -->* Upgrading to 2.1.7 changed dropdown attributes to swatches


*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-9923](https://github.com/magento/magento2/issues/9923)



<!--  ENGCOM-1443 -->* Product Attributes Not Updating on Frontend

*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-11403](https://github.com/magento/magento2/issues/11403)


<!--  ENGCOM-1443 -->* Changing Swatches to Drop-down does not remove swatches from existing products

*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-11703](https://github.com/magento/magento2/issues/11703)

<!--  ENGCOM-1443 -->* Unable to change attribute type from swatch to dropdown

*Fix submitted by [Eugene Shab](https://github.com/eugene-shab) in pull request [12771](https://github.com/magento/magento2/pull/12771)*. [GitHub-12695](https://github.com/magento/magento2/issues/12695)





### Tax

<!--  ENGCOM-1551 -->* We’ve reduced the redundant product tax recalculation that previously occurred when Magento loaded category pages, which results in faster page loading. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [15089](https://github.com/magento/magento2/pull/15089)*. [GitHub-14941](https://github.com/magento/magento2/issues/14941)




<!--  ENGCOM-1642 -->* Format the javascript code in Tax module

*Fix submitted by [vgelani](https://github.com/vgelani) in pull request [15343](https://github.com/magento/magento2/pull/15343)*. [GitHub-15352](https://github.com/magento/magento2/issues/15352)




### Testing

### Theme

<!--  ENGCOM-1516 -->* Template file 'header.html' is not found" error while trying to save Design Configuration

*Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15137](https://github.com/magento/magento2/pull/15137)*. [GitHub-13530](https://github.com/magento/magento2/issues/13530)


<!--  ENGCOM-1516 -->* Merchants can now successfully change the applied theme setting for a store view (**Content** > **Design** > **Configuration**). *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15137](https://github.com/magento/magento2/pull/15137)*. [GitHub-14968](https://github.com/magento/magento2/issues/14968)




<!--  ENGCOM-1922 -->* Changing @tab-content__border variable has no effect in B

*Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15914](https://github.com/magento/magento2/pull/15914)*. [GitHub-14999](https://github.com/magento/magento2/issues/14999)



### Translation

<!-- MAGETWO-92210 -->* The `translation.json` file now contains translatable strings for the phrases "Store Credit" and "Gift Card". Previously, these strings were not translated for the shopping cart, one-page checkout, and order view in the customer account on the storefront. 


<!-- MAGETWO-92355 -->* We've added  client-side caching of `js-translation.js`.


<!-- ENGCOM-1965 -->* 

 *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15604](https://github.com/magento/magento2/pull/15604)*. \


<!-- ENGCOM-1604 -->* Comments are not translated for Signifyd module

*Fix submitted by [Yogesh Suhagiya](https://github.com/Yogeshks) in pull request [15364](https://github.com/magento/magento2/pull/15364)*. [GitHub-15361](https://github.com/magento/magento2/issues/15361)



<!-- ENGCOM-1855 -->* Fix translations

*Fix submitted by [Vitaliy](https://github.com/VitaliyBoyko) in pull request [15782](https://github.com/magento/magento2/pull/15782)*. 






<!-- ENGCOM-2020 -->* Added translation possibility for moreButtonText


*Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16190](https://github.com/magento/magento2/pull/16190)*. [GitHub-16079](https://github.com/magento/magento2/issues/16079)








### UI

<!--  ENGCOM-1542 -->* clickableOverlay option doesn't work

*Fix submitted by [virtua-pmakowski](https://github.com/virtua-pmakowski) in pull request [15172](https://github.com/magento/magento2/pull/15172)*. [GitHub-7399](https://github.com/magento/magento2/issues/7399)







<!--  ENGCOM-1315 -->* validate-grouped-qty' validation is meaningless

*Fix submitted by [Valerij Ivashchenko](https://github.com/likemusic) in pull request [14752](https://github.com/magento/magento2/pull/14752)*. [GitHub-14692](https://github.com/magento/magento2/issues/14692)



<!--  ENGCOM-1606 -->* Responsive Design, Footers do not snap to bottom of screen on mobile devices

*Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [15353](https://github.com/magento/magento2/pull/15353)*. [GitHub-15118](https://github.com/magento/magento2/issues/15118)



<!--  ENGCOM-1766 -->* Fixed product tier pricing pagination issue in admin

*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15614](https://github.com/magento/magento2/pull/15614)*. [GitHub-15210](https://github.com/magento/magento2/issues/15210)


<!--  ENGCOM-1982 -->* Navigation dropdown caret icon

*Fix submitted by [Tejash Kumbhare](https://github.com/tejash-wagento) in pull request [16082](https://github.com/magento/magento2/pull/16082)*. [GitHub-15220](https://github.com/magento/magento2/issues/15220)





<!--  ENGCOM-2155 -->* Press Esc Key on modal generate a jquery UI error

*Fix submitted by [Alexander Kras'ko](https://github.com/0m3r) in pull request [16477](https://github.com/magento/magento2/pull/16477)*. [GitHub-14593](https://github.com/magento/magento2/issues/14593)

### URL rewrites

<!-- MAGETWO-89905 -->* Categories of the Main menu in the different store view are now updated when Varnish is enabled. 


Workflow of how Magento handles switching between different stores (especially on different domains) was changed to a 2-step redirect, and store switching links does not contain session-related data anymore in order to fix several caching and session sharing issues.



<!-- MAGETWO-73456 --> URL key values are now derived from the  default value set on the default store. Previously, Magento derived the product URL key value from the product name on storeview level. 



<!-- ENGCOM-1283 --> The Magento URL rewrite functionaility now supports the use of special characters in category names. Previously the category tree did not load if a category name contained a special character. 

*Fix submitted by [Vinay Shah](https://github.com/vinayshah) in pull request [13397](https://github.com/magento/magento2/pull/13397)*. [GitHub-13296](https://github.com/magento/magento2/issues/13296)



<!-- ENGCOM-1916 --> 

 *Fix submitted by [Saurabh Parekh](https://github.com/saurabh-parekh) in pull request [15891](https://github.com/magento/magento2/pull/15891)*.


<!-- ENGCOM-1656 --> Refactor JavsScript for UrlRewrite module edit page


*Fix submitted by [Nimesh Patel](https://github.com/patelnimesh1988) in pull request [15422](https://github.com/magento/magento2/pull/15422)*. [GitHub-15356](https://github.com/magento/magento2/issues/15356)




### Vertex



### Visual Merchandiser

<!-- MAGETWO-90599 -->* Magento now maintains manual sort order and adds newly assigned products to the top of the products list. Previously, Magento reset the manual sort order and sorted products by ID. 


<!-- MAGETWO-92504 -->* Saving a product no longer reverts the selected sort order for a category. Previously, after a merchant saved a product, Magento reverted the sort order that defined the display of products in that category from the defined  sort order to an order defined by product ID. 


### Wishlist


<!--  ENGCOM-1878 -->* Fixed return type hinting in DocBlocks for Wishlist module 


*Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15854](https://github.com/magento/magento2/pull/15854)*. 


<!--  ENGCOM-1949 -->* Remove unnecessary parameter from invoking toHtml() method

*Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [16023](https://github.com/magento/magento2/pull/16023)*. 






<!-- not needed- 72024--> 

## Known issues
91164 -- After upgrading Magento to 2.2.6, you must do the following: 

1) remove the 'pub/media/catalog/product/cache'

2) run `bin/magento catalog:image:resize`



This release includes a fix that optimizes image resizing. 





## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.


OLD TABLE 

<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
    <th>Contributing community member</th>
  </tr>



<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15929">15929</a></td>
    <td>15205, 15245</td>
    <td><a target="_blank" href="https://github.com/fmarangi">Francesco Marangi</a></td>
  </tr>
  
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13956">13956</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/koenner01">Koen V.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13878">13878</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13769" target="_blank">13769</a></td>
    <td><a target="_blank" href="https://github.com/pawcioma">pawcioma</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13943">13943</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12405" target="_blank">12405</a>, <a href="https://github.com/magento/magento2/issues/12421" target="_blank">12421</a></td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13855">13855</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13804" target="_blank">13804</a></td>
    <td><a target="_blank" href="https://github.com/ankurvr">Ankur Raiyani</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14011">14011</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/chedaroo">Richard Jesudason</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14013">14013</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sandermangel">Sander Mangel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13977">13977</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13607">13607</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13385" target="_blank">13385</a></td>
    <td><a target="_blank" href="https://github.com/shyamranpara">Shyam Ranpara</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">enriquei4</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
    <td><a target="_blank" href="https://github.com/pradeep-wagento">pradeep-wagento</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14044">14044</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/avstudnitz">Andreas von Studnitz</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12929">12929</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10559" target="_blank">10559</a></td>
    <td><a target="_blank" href="https://github.com/srenon">Renon Stewart</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13884">13884</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5463" target="_blank">5463</a></td>
    <td><a target="_blank" href="https://github.com/k4emic">Mads Nielsen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13894">13894</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/evgk">evgk</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13989">13989</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13988" target="_blank">13988</a></td>
    <td><a target="_blank" href="https://github.com/krzksz">Mateusz Krzeszowiak</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14029">14029</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4919" target="_blank">4919</a></td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14042">14042</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/jasperzeinstra">jasperzeinstra</a></td>
  </tr>

   <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14083">14083</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RandeKnight">RandeKnight</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
    <td><a target="_blank" href="https://github.com/Frodigo">Marcin Kwiatkowski</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14121">14121</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14010" target="_blank">14010</a></td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14041">14041</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/KarlDeux">Carlos Lizaga</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14136">14136</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ccasciotti">Cristiano Casciotti</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14154">14154</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/nfourteen">nfourteen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14189">14189</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/EliasZ">Elias</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11707">11707</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/gwharton">gwharton</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14156">14156</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/aschrammel">Andreas Schrammel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14091">14091</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14138" target="_blank">14138</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
    <td><a target="_blank" href="https://github.com/brideo">Nathan McBride</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13716">13716</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13704" target="_blank">13704</a></td>
    <td><a target="_blank" href="https://github.com/alepane21">Alessandro Pagnin</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/cstergianos">cstergianos</a></td>
 </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14303">14303</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13992" target="_blank">13992</a></td>
    <td><a target="_blank" href="https://github.com/cream-julian">cream-julian</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a></td>
    <td><a target="_blank" href="https://github.com/crisdiaz">cristina-diaz</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14358">14358</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mageprince">Prince Patel</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13414">13414</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/VincentMarmiesse">Vincent Marmiesse</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14308">14308</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
    <td><a target="_blank" href="https://github.com/swnsma">Oleksandr Kravchuk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P.</a></td>  
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14361">14361</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11930" target="_blank">11930</a>, <a href="https://github.com/magento/magento2/issues/10700" target="_blank">10700</a> </td>
    <td><a target="_blank" href="https://github.com/xtremeperf">Doug</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14060">14060</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14325">14325</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7816" target="_blank">7816</a>, <a href="https://github.com/magento/magento2/issues/12852" target="_blank">12852</a></td>
    <td><a target="_blank" href="https://github.com/mikewhitby">Mike Whitby</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>
    <td><a target="_blank" href="https://github.com/paveq">Paavo Pokkinen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14288">14288</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14385">14385</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13716" target="_blank">13716</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
    <td><a target="_blank" href="https://github.com/ArjenMiedema">Arjen Miedema</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14350">14350</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14249" target="_blank">14249</a></td>
    <td><a target="_blank" href="https://github.com/cdiacon">Calin</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14403">14403</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/edie-pasek">edie-pasek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14440">14440</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13942">13942</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13582" target="_blank">13582</a></td>
    <td><a target="_blank" href="https://github.com/bordeo">Alex</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14293">14293</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8837" target="_blank">8837</a></td>
    <td><a target="_blank" href="https://github.com/KravetsAndriy">Andriy Kravets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14439">14439</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sanderjongsma">Sander Jongsma</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14445">14445</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14455">14455</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14466">14466</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sanganinamrata">Namrata</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JDavidVR">David</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a></td>
    <td><a target="_blank" href="https://github.com/afirlejczyk">afirlejczyk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14498">14498</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14504">14504</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/quisse">Tommy Quissens</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13629">13629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Corefix">Theis Corfixen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13831">13831</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/irs">Vadim Kusakin</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2ce/pull/14176">14176</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14049" target="_blank">14049</a></td>
    <td><a target="_blank" href="https://github.com/joost-florijn-kega">joost-florijn-kega</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14319">14319</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6879" target="_blank">6879</a></td>
    <td><a target="_blank" href="https://github.com/MateuszChrapek">MateuszChrapek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13950" target="_blank">13950</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tkotosz">Tibor Kotosz</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14599">14599</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14572" target="_blank">14572</a></td>
    <td><a target="_blank" href="https://github.com/PierreLeMaguer">Pierre LeMaguer</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13016">13016</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9666" target="_blank">9666</a>, <a href="https://github.com/magento/magento2/issues/12323" target="_blank">12323</a></td>
    <td><a target="_blank" href="https://github.com/rossmc">Ross</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14048">14048</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14035" target="_blank">14035</a></td>
    <td><a target="_blank" href="https://github.com/kamilszewczyk">Kamil Szewczyk</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14629">14629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/AnshuMishra17">AnshuMishra17</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14635">14635</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14465" target="_blank">14465</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14668">14668</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/surya07081995">Suraj kumar prasad </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14678">14678</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/strell">Roman Strelenko </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14681">14681</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13652" target="_blank">13652</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14688">14688</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/net32">Isaias</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14696">14696</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

 
</table>

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
