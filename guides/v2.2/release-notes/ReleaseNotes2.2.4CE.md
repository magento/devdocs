---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento Open Source 2.2.4 Release Notes
menu_title: Magento Open Source 2.2.4 Release Notes
menu_order: 280
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/ReleaseNotes2.2.4CE.md
---
*Patch code and release notes published on May 2, 2018.*

We are pleased to present Magento Open Source 2.2.4. This release includes new tools and numerous functional fixes and enhancements, plus a substantial number of contributions from the wider Magento community.


## Highlights

Look for the following highlights in this release:

* Significant new bundled extensions that will enhance merchants' ability to : Amazon Pay, Vertex, and Klarna Payments. 
    * Amazon Pay. 
    * Vertex.https://marketplace.magento.com/pixafy-tax.html#product.info.details.release_notes
    * Klarna Payments. For more information on Klarna products, see [Klarna Payments](https://marketplace.magento.com/klarna-m2-payments.html#product.info.details.release_notes). 

* Numerous fixes and enhancements to Magento Shipping and DotMailer bundled extensions

* Fixes and enhancements to core features, including significant improvements to performance.

* Almost 200 community contributions. These community contributions include performance-tuning enhancements plus at least 80 engineering fixes. 


Looking for more information on these new features as well as many others? Check out [Magento 2.2 Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Open Source User Guide](http://docs.magento.com/m2/ce/user_guide/getting-started.html).



### Enhancements

<!--- MAGETWO-87293-->* The admin global search is now translatable, extensible,  and  takes into account the ACL settings for the current user. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1167*. [GitHub-7698](https://github.com/magento/magento2/issues/7698)

<!--- MAGETWO-86744 -->* As part of the micro-optimization of the `Magento\Catalog` module, we've replaced `is_null` with strict comparison only for models and block in this module. *Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13171*.

<!--- MAGETWO-86743 -->* 
<!--- MAGETWO-86940 -->* Magento now provides dedicated payment and shipping debug log files to store information specific to those functional areas.

<!--- MAGETWO-87124 -->*  The Emogrifier dependency has been upgraded to ^2.0.0. *Fix submitted by [Oliver Klee](https://github.com/oliverklee) in pull request 13132*.

<!--- MAGETWO-84815 -->* Magento has an automated checker to enforce the short array syntax convention that we are now enforcing in new code. This standard complies with with all requirements of PSR-2. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 12499*. 

#### Dotmailer enhancements
The Dotmailer bundled extension features the following enhancements for this release: 

* New Abandoned Cart report table.

* Ability for merchants to design their own transactional email template.

* Enhancement of syncs of subscriber's sales data. Sales data is now synced only if the sales data option is enabled in config. 

* Ability to set transactional email at the Store level.

* Enhanced validation for deletion of cron job CSV files.

#### Magento Shipping enhancements
This release of Magento Shipping provides the following enhancements and bug fixes:

Enhancements: 

* Provides validation to prevent merchants from indicating that the  package maximum weight greater that the actual package being shipped. 

* Adds international fields to shipment details.

* Adds  tool-tips to inform users about the Locations, Carriers and Packages pages.

* Truncates long carrier nickname on Shipping Partners page.

* Improves appearance of  navigation buttons on carrier connection page.

* Provides ad-hoc Return labels with return shipment tracking. This features builds on `Magento_Rma`. 


Resolution of the following issues:

* Incompatibility with Internet Explorer 11.x.

* Magento checkout price not respecting set currency in Portal.

* Currency conversion issues.

* Duplicated navigation menu during carrier connection.





## Fixes

### Installation, setup, and deployment
<!--- MAGETWO-86496 -->* The `backup` command now works as expected.  *Fix submitted by [Jagriti Joshi](https://github.com/jagritijoshi) in pull request 13066*. [GitHub-12877](https://github.com/magento/magento2/issues/12877)

<!--- MAGETWO-86045 -->* Links to Magento installation documentation in `setup/view/magento/readiness-check/progress.html` are now correct. *Fix submitted by [Jonas Hünig](https://github.com/jonashrem) in pull request 12857*.

<!--- MAGETWO-84506 -->* You can now use the `app:config:status` command to check whether configuration propagation is up-to-date.  *Fix submitted by [Juan Alonso](https://github.com/jalogut) in pull request 12441*.

<!--- MAGETWO-84125 -->* The `bin/magento setup:rollback -d filename.sql` command now works as expected. Previously, this database rollback operation failed on certain versions of Magento (for exmaple, 2.1.9).  *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 12108*. [GitHub-12064](https://github.com/magento/magento2/issues/12064)

<!--- MAGETWO-84081 -->* You can now set API access to integrations for Admin roles, which gives priveleged users the ability to grant limited access to users such as third-party integrators. [GitHub-9684](https://github.com/magento/magento2/issues/9684)

<!--- MAGETWO-81841 -->* You can now enable or disable the Magento Profiler from the command line. [GitHub-9277](https://github.com/magento/magento2/issues/9277)

<!--- MAGETWO-81740 -->* The icons for Extension Manager and Module Manager are now consistent with the main content area and left-hand menu of the Web Setup Wizard. *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 11388*. [GitHub-11236](https://github.com/magento/magento2/issues/11236)

<!--- MAGETWO-80111 -->* Magento now continues operating in maintenance mode if it was previously enabled. Previously, Magento disabled maintenance mode  when you used one of these commands: 
    * `bin\magento module:uninstall`
    * `bin\magento setup:backup`
    * `bin\magento setup:rollback`
    * `bin\magento theme:uninstall`
    * `bin\magento deploy:mode:set production`
*Fix submitted by [Joke Puts](https://github.com/jokeputs) in pull request 11052*. [GitHub-9918](https://github.com/magento/magento2/issues/9918) 

<!--- MAGETWO-85778 -->* You can specify a custom version for static files being deployed, and now nginx sample config files can match these custom  versions, too. *Fix submitted by [Scott Buchanan](https://github.com/scottsb) in pull request 12521*. 

<!--- MAGETWO-85274 -->* The `CrontabManager.php` file has been updated has been updated as follows: If `crontab` has already been populated, the `php bin/magento cron:install` command adds `#~ MAGENTO START` and the rest of code directly to the last row of crontab without any spaces. *Fix submitted by [Michele Fantetti](https://github.com/WaPoNe) in pull request*.

<!--- MAGETWO-85744 -->*  Composer now checks the availability of the `bcmath` PHP module. *Fix submitted by [Mobecls](https://github.com/Mobecls) in pull request 12768*.

<!--- MAGETWO-88149 -->* The `cache_lifetime` default setting for the `Magento\Theme\Block\Html\Footer` block is no longer set to **false**, and the new default setting is **3600**. *Fix submitted by [Barry vd. Heuvel](https://github.com/zolat) in pull request 13762*.

<!--- MAGETWO-87975 -->* The `MaintenanceAllowIps` command now has the `--add` flag, which appends a new IP address to the list of allowed IP addresses. Previously, when you added a new IP address, you had to copy the existing addresses. *Fix submitted by [zolat](https://github.com/barryvdh) in pull request 13586*.

<!--- MAGETWO-87900 -->*  The `config:set` command now has a `lock-config` option, and configuration values are always stored in `app/etc/config.php` instead of `app/etc/env.php`. *Fix submitted by [Andreas von Studnitz](https://github.com/avstudnitz) in pull request 13280*.

<!--- MAGETWO-87859 -->*  Website and store scope now include `web/unsecure/base_url config`. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 13614*.

<!--- MAGETWO-87856 -->*  You can now deploy static content on demand while in production mode.

<!--- MAGETWO-87838 -->* The list of existing IP addresses is now displayed without commas, making it easier to copy and paste. *Fix submitted by [Barry vd. Heuvel](https://github.com/barryvdh) in pull request 13587*.

<!--- MAGETWO-87744 -->* The `DeploymentConfig` reader now always returns an array. *Fix submitted by [Barry vd. Heuvel](https://github.com/barryvdh) in pull request 13584*.

<!--- MAGETWO-83782 -->*  Magento has improved how it manages the size of the `cron_schedule` table. [GitHub-11002](https://github.com/magento/magento2/issues/11002) 

<!--- MAGETWO-82288 -->* Magento now includes a helper object to facilitate access to styling objects in the Symfony console. *Fix submitted by [Wesley Guthrie](https://github.com/wesleywmd) in pull request 11504*.




### Bundle products
<!--- MAGETWO-86022 -->* Save operations now work as expected for bundle products. *Fix submitted by [dzianis-yurevich](https://github.com/dzianis-yurevich) in pull request 12734*. [GitHub-6916](https://github.com/magento/magento2/issues/6916)

<!--- MAGETWO-86882 -->* You can now duplicate a bundle product without stripping the original bundle product of its options. Previously, when you duplicated a product, Magento stripped the original bundle product of its options. *Fix submitted by [MattUnity](https://github.com/MattUnity) in pull request 1217*.



### Catalog

<!--- MAGETWO-87447 -->*  Magento now successfully updates a product's `stock_item` `extension_attribute` parameter for a product previously created using REST. *Fix submitted by [nuzil](https://github.com/nuzil) in pull request 13494*.

<!--- MAGETWO-73262 -->*  When two customers check out concurrently for the same product, one of the check outs now succeeds. Previously, when two customers checked out concurrently for the same product, and the total quantity being ordered is greater than the quantity available, the stock could become negative. *Fix submitted by [Myroslav Dobra](https://github.com/zakdma) in pull request 2133*.

<!--- MAGETWO-87447 -->*  Magento now successfully updates a product's `stock_item` `extension_attribute` parameter for a product previously created using REST. 

<!--- MAGETWO-87477 -->*  The `getUrl` method in `Magento\Catalog\Model\Product\Attribu…` no longer returns image URLs with unexpected double slashes. *Fix submitted by [Igor Tregub](https://github.com/igortregub) in pull request 13498*.

<!--- MAGETWO-73696 -->* When sorting by price, Magento now displays the same number of products no matter how it sorts products in the Catalog Product list. Previously, Magento reduced the product count by the number of disabled products when sorting by price. 

<!--- MAGETWO-75786 -->* The category filter used for layered navigation for configurable products with no available options now counts products accurately. 

<!--- MAGETWO-81916 -->* When you set the `category_ids` attribute to be visible in the storefront catalog, Magento now displays catalog listings as expected. Previously, Magento threw an exception. *Fix submitted by [Manu Gonzalez Rodriguez](https://github.com/manuelson) in pull request 11389*. [GitHub-11341](https://github.com/magento/magento2/issues/11341)

<!--- MAGETWO-81942 -->* Product display issues within categories that have been filtered by price have been resolved: Products are no longer repeated within a category, and random products are no longer included. *Fix submitted by [Mayank Zalavadia](https://github.com/mayankzalavadia) in pull request 11429*. [GitHub-11139](https://github.com/magento/magento2/issues/11139)

<!--- MAGETWO-82313 -->* Updating a product with the REST API (PUT /rest/all/V1/products/example_sku) no longer assigns the product to all websites automatically. (Automatic assignment to all websites now occurs only when you create the product in All Store Views scope.) *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11444*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- MAGETWO-82464 -->* Magento no longer throws an error when you re-save a product attribute with a new name. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11617*. [GitHub-6770](https://github.com/magento/magento2/issues/6770)

<!--- MAGETWO-83399 -->* You can now successfully remove a toolbar from a product listing page. Previously, you could explicitly removed the toolbar from layout configuration, but Magento would return `product_list_toolbar` to the layout. *Fix submitted by [Marius](https://github.com/mariuscris) in pull request 11473*. [GitHub-9413](https://github.com/magento/magento2/issues/9413)

<!--- MAGETWO-84018 -->* The `getAttributeText($attributeCode)` method now returns string values as expected. Previously, this method returned an array of attribute values. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12003*.

<!--- MAGETWO-84087 -->* You can now add customizable options to a product. Previously, when you tried to add a custom option to  product, Magento threw this error: **A 'Uncaught TypeError: Cannot read property 'apply' of undefined' error**. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 11965*. [GitHub-11792](https://github.com/magento/magento2/issues/11792)

<!--- MAGETWO-84311 -->* Magento now correctly decodes single quotation marks in the Admin attribute option input fields. *Fix submitted by [Erfan](https://github.com/erfanimani) in pull request 12133*. [GitHub-12127](https://github.com/magento/magento2/issues/12127)

<!--- MAGETWO-84367 -->* You can now save emojis in custom product options. *Fix submitted by [Carlos Lizaga](https://github.com/KarlDeux) in pull request 12253*.

<!--- MAGETWO-84411 -->* Magento no longer displays unused product attributes  with a value of N/A or NO on the storefront. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12057*. [GitHub-6634](https://github.com/magento/magento2/issues/6634), [GitHub-9961](https://github.com/magento/magento2/issues/9961)

<!--- MAGETWO-84498 -->* The `delay` parameter now works as expected, which permits you to set the delay on the JQuery widget opening or closing. Previously, this parameter was documented, but did not work as expected. *Fix submitted by [Sam Carr](https://github.com/scazz010) in pull request 12161*.

<!--- MAGETWO-84515 -->* Third-party category images now have `size` and `type` properties. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 12161*. 

<!--- MAGETWO-84652 -->* Category page X-Magento-Tags headers no longer contain product cache identities  when category display mode is set to **Static block only**. *Fix submitted by [Atish Goswami](https://github.com/atishgoswami) in pull request 12466*.

<!--- MAGETWO-84665 -->* You can now delete rows in the the `dynamicRows` component. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 921*. [GitHub-8830](https://github.com/magento/magento2/issues/8830)

<!--- MAGETWO-84808 -->* You can now add a new product with custom attributes that has the same name and attributes as a previously deleted product. Previously, Magento did not let you add this new product because a `request_path` with the same value already existed in `table url_rewrite` from the previous product. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 12167*. [GitHub-12110](https://github.com/magento/magento2/issues/12110)

<!--- MAGETWO-84949 -->* The `og:type` meta tag content value has been corrected from `<meta property="og:type" content="og:product" />` to `<meta property="og:type" content="product" />`. *Fix submitted by [Atish Goswami](https://github.com/atishgoswami) in pull request 12530*.

<!--- MAGETWO-85293 -->*  The Product Image Watermark Size Validation message has been revised for accuracy. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 985*. [GitHub-12613](https://github.com/magento/magento2/issues/12613)

<!--- MAGETWO-85294 -->* Magento no longer creates an extraneous new product when you save an existing product whose SKU you've changed.  *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 984*. [GitHub-12535](https://github.com/magento/magento2/issues/12535)

<!--- MAGETWO-85301 -->* cURL requests to delete a product's tier pricing when used on store code **all** now works as expected. Previously, this cURL request deleted the tier pricing but also all the image selections for the product. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 977*. [GitHub-10797](https://github.com/magento/magento2/issues/10797)

<!--- MAGETWO-85307 -->* Sort by Price now works as expected on the catalog search page.*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 929*.  [GitHub-12468](https://github.com/magento/magento2/issues/12468)

<!--- MAGETWO-85545 -->* If an error occurs when you run `catalog:images:resize`, Magento now includes an entry into the log file. Previously, Magento displayed an error message, but did not add a entry into any log files. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1000*. [GitHub-8204](https://github.com/magento/magento2/issues/8204)

<!--- MAGETWO-85546 -->* You can now duplicate and save a product successfully. Previously, you could not successfully duplicate a product, and Magento displayed this message: **Notice: Undefined offset: 0 in /home/software/public_html/vendor/magento/module-catalog/Model/Category/Link/SaveHandler.php on line 124**. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 983*.  [GitHub-12259](https://github.com/magento/magento2/issues/12259)

<!--- MAGETWO-85636 -->* The REST API now saves all product properties as expected. Previously, Magento did not save the price and weight, and these attributes were not returned in the result of the POST request, *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1018*. [GitHub-6486](https://github.com/magento/magento2/issues/6486)

<!--- MAGETWO-86016 -->* Duplicate `email` IDs no longer occur on the Magento default contact page when running Google Chrome  { Version 63.0.3239.84 (Official Build) (64-bit) }. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1036*. [GitHub-12712](https://github.com/magento/magento2/issues/12712)

<!--- MAGETWO-86019 -->* The `hasDataChanges` attribute for loaded EAV collection items now returns `true` or `false` as expected. Previously, this attribute always returned `true`. *Fix submitted by [virtual97](https://github.com/virtual97) in pull request 12736*. [GitHub-12374](https://github.com/magento/magento2/issues/12374)

<!--- MAGETWO-86021 -->* `ajax:addToCart` now contains the `eventData` parameter, with variables for SKU and quantity. *Fix submitted by [Renon Stewart](https://github.com/srenon) in pull request 12875*. 

<!--- MAGETWO-86023 -->* You can now successfully save a new option for a customer product attribute when the value of Admin scope is empty. Previously, Magento threw an exception. *Fix submitted by [virtual97](https://github.com/virtual97) in pull request 12755*. 

<!--- MAGETWO-86662 -->* You can now sort product collections by the `is_saleable` attribute. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1045*. [GitHub-7768](https://github.com/magento/magento2/issues/7768)

<!--- MAGETWO-86547 -->* We've added a failsafe to the `items.phtml` file.  *Fix submitted by [Sam Granger](https://github.com/samgranger) in pull request 13086*. 

<!--- MAGETWO-84267 -->* You can now save a product with customizable options. Previously, if you were trying to add a customizable option (for example, a customer group) to a product, Magento did not let you save the product, the form did not close, and a validation issue was triggered. *Fix submitted by [LuisMi](https://github.com/luismiguelyangehuaman) in pull request 12048*. [GitHub-11528](https://github.com/magento/magento2/issues/11528)

<!--- MAGETWO-85288 -->* Magento now correctly displays stock status for products. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 955*. 

<!--- MAGETWO-82949 -->* Visual Merchandiser now includes website scope when displaying the correct prices and availability of configurable products. 

<!--- MAGETWO-86663 -->* The catalog product list widget now works with multiple SKUs. Previously, Magento displayed this error,**We're sorry, an error has occurred while generating this email**. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1050*. 
 [GitHub-11897](https://github.com/magento/magento2/issues/11897)

<!--- MAGETWO-85876 -->* Magento now loads type-dependent layout handles before more specific ID/SKU layout handles. Previously, when Magento updated a product page layout for a specific ID with `catalog_product_view_id_<product_ID>.xml`, some changes may be overwritten by a less specific `catalog_product_view_type_<product_type>.xml`. *Fix submitted by [Andreas Schrammel](https://github.com/aschrammel) in pull request 12807*. 

<!--- MAGETWO-87897 -->*  Unused temporary variables have been removed from `Adminhtml/Category/Save.html`. *Fix submitted by [Pierre Martin](https://github.com/real34) in pull request 13663*. 

<!--- MAGETWO-87847 -->* Language switching nows works as expected on the Catalog and Product pages. Previously, language switching did not work on these pages in production mode. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1143*. [GitHub-11963](https://github.com/magento/magento2/issues/11963)

<!--- MAGETWO-87526 -->* The subcategory URL path is now updated for a store view according to URL path of its parent category.

<!--- MAGETWO-87514 -->* In cases where  `imagebuilder` makes multiple calls, it no longer re-uses attributes from the first call if attributes from a second call are empty. Previously, `imagebuilder` re-used the attributes from the first call, which lead to unexpected results in storefront image display. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 13438*. 
\
<!--- MAGETWO-87496 -->*  `updateCart.phtml` now uses dynamic rather than hardcoded validators. *Fix submitted by [Gil Greenberg](https://github.com/gil--) in pull request 13462*. 

<!--- MAGETWO-87294 -->* An unused constructor dependency has been removed from the Product Link Save handler. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 13436*. 




### Cart and checkout

<!--- MAGETWO-83780 -->* Magento no longer adds addresses with `saveInAddressBook` set to **0**  to the address book for new customers. Previously, if you placed an order as a guest and set the `save_in_address_book` setting for an address to **0**, Magento still copied that address  to the customer address book when registering as a new customer on the checkout success page. [GitHub-7691](https://github.com/magento/magento2/issues/7691)

<!--- MAGETWO-85297 -->* Magento no longer combines the Custom Checkout and Shipping steps when Magento loads the checkout page. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 975*. 

<!--- MAGETWO-85317 -->* Currency change, Bank Transfer but checkout page shows "Your credit card will be charged for"
*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 993*. 

<!--- MAGETWO-86506 -->* Magneto no longer throws a JavaScript error on the cart from postcode validation when **United States** is deselected in the **Allowed Countries** Admin option (**Admin > Stores > Configuration > General > Default Country**). *Fix submitted by [codekipple](https://github.com/codekipple) in pull request 13051*. 

<!--- MAGETWO-86543 -->* Street format spacing when multiple streets are present is now consistent across **Shipping*** and **Review & Payments** checkout steps. *Fix submitted by [nfourteen](https://github.com/nfourteen) in pull request 13082*. 

<!--- MAGETWO-86896 -->* Magento now displays text on the New Cart Rules page correctly. Previously, labels listed in the Store View Specific Labels section of this page were sometimes truncated or duplicated. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1146*. [GitHub-12231](https://github.com/magento/magento2/issues/12231)

<!--- MAGETWO-86617 -->* When you check out as guest  and click **Create an account** on the success page, you can now click on the customer name to jump to the customer record. *Fix submitted by [Renon Stewart](https://github.com/srenon) in pull request 12998*. 

<!--- MAGETWO-87340 -->* The `XML_PATH_CUSTOMER_MUST_BE_LOGGED` constant has been deprecated. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1148*. [GitHub-7848](https://github.com/magento/magento2/issues/7848)





### Configurable products
<!--- MAGETWO-86781 -->* You can now use custom price symbols when assigning prices to configurable prices. Previously, Magento did not properly display prices for configurable products when you used a custom price symbol when assigning prices. *Fix submitted by [pradeep-wagento](https://github.com/pradeep-wagento) in pull request 13025*. [GitHub](https://github.com/magento/magento2/issues/12430)

<!--- MAGETWO-86311 -->*  Magento now reorders configurable attribute options as expected on the product page. *Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request 12963*. [GitHub-7441](https://github.com/magento/magento2/issues/7441)

<!--- MAGETWO-85782 -->* Magento now displays elements of the **Catalog > Products > Create Configurations** page correctly. Previously, the currency symbol overlapped with the attribute option's price during creation of a configurable product. *Fix submitted by [Vasilina](https://github.com/EfremovaVI) in pull request*. 

<!--- MAGETWO-85777 -->* If you enter an invalid valid for an SKU during the creation of the configurable product, Magento now displays a warning, and does not let you save the product. Previously, you were not warned about invalid SKU values, and when you clicked **Save**, all the product information you entered was lost. *Fix submitted by [Zamaroka](https://github.com/zamoroka) in pull request 12737*. [GitHub-11953](https://github.com/magento/magento2/issues/11953)

<!--- MAGETWO-85634 -->* Magento now correctly runs a partial attribute (EAV) reindex of configurable products whose child products' visibility is set to **Not Visible Individually**. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1023*. [GitHub-12667](https://github.com/magento/magento2/issues/12667)

<!--- MAGETWO-85286 -->*  Magento now displays the ID and `Visibility` parameter of child products when you use the `LinkManagementInterface` service contract to retrieve the ID and visibility of these products. Previously, Magento displayed NULL. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 986*.

<!--- MAGETWO-82888 -->* The product price indexer (`catalog_product_price reindex`) no longer stalls during reindexing. 

<!--- MAGETWO-86918 -->* Product records inside the `catalog_product_super_link` table are no longer updated needlessly when you save a configurable product. Previously, saving configurable product erased and then reinserted records in the `catalog_product_super_link` table even when child products were not changed. This practice quickly resulted in unnecessarily large `catalog_product_super_link` table, especially in multi-website installations.



### Customer accounts

<!--- MAGETWO-86427 -->* Magento now trims extraneous spaces (that is, trailing and leading spaces) when saving the name of a new contact. *Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request 12964*. [GitHub-10415](https://github.com/magento/magento2/issues/10415)

<!--- MAGETWO-85580 -->* We fixed the invalid parameter configuration that was provided for the $block argument of `Magento\\Ui\\Component\\HtmlContent`. *Fix submitted by [Tomasz Gregorczyk](https://github.com/Tomasz-Silpion) in pull request 12964*. 

<!--- MAGETWO-85300 -->* Magento now successfully send email (with content) even when you make a mistake in the email template file name. Previously, when the template name was incorrect, Magento sent the email with no content. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 970*. [GitHub-8437](https://github.com/magento/magento2/issues/8437)

<!--- MAGETWO-85653 -->*  You can now import customer addresses from websites with country restrictions.

<!--- MAGETWO-84862 -->* Magento no longer displays the **Too many password reset requests** error when the `max wait time between password resets` setting has been disabled. Previously, when you attempted to reset a customer's password through the Admin, Magento threw an error even when you disabled the `max wait time between password resets` setting in the store configuration settings. *Fix submitted by [Cole Hafner](https://github.com/coleHafner) in pull request*. [GitHub-11409](https://github.com/magento/magento2/issues/11409)

<!--- MAGETWO-84439 -->* Magento no longer throws an exception when you try to open your account address book immediately after creating a customer. *Fix submitted by [Chris Pook](https://github.com/chris-pook) in pull request 12220*. [GitHub-12180](https://github.com/magento/magento2/issues/12180)
<!--- MAGETWO-83026 -->* The `isConfirmationRequired` method in the `AccountManagement` class is now public, which makes it available for plugins. (For example, you can now develop custom business logic to decide if confirmation is required (yes/no) for certain customers.) *Fix submitted by [Derrick Heesbeen](https://github.com/dheesbeen) in pull request 11878*. 

<!--- MAGETWO-82635 -->* When configuring a customer account, you can now leave the prefix or suffix fields as optional. Previously, if you did not select an option for these fields, Magento defaulted to selecting the first option in the list. *Fix submitted by [Andreas von Studnitz](https://github.com/avstudnitz) in pull request 11462*. [GitHub-7241](https://github.com/magento/magento2/issues/7241)

<!--- MAGETWO-85741 -->* The storefront **Back to Sign in** button now works as expected. Previously, when you clicked that button, Magento simply reloaded the current page. *Fix submitted by [StasKozar](https://github.com/StasKozar) in pull request 12759*. [GitHub-12715](https://github.com/magento/magento2/issues/12715)

<!--- MAGETWO-85672 -->* The `window.checkout.customerLoginUrl` now contains a URL that includes the referer in base64 encoding (for example, https://myshop.com/customer/account/login/referer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0). Previously, the login URL did not include a referer (for example, https://myshop.com/customer/account/login). *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request 12630*.m[GitHub-12627](https://github.com/magento/magento2/issues/12627)

<!--- MAGETWO-86989 -->* When you are on the cart page and click a product's  **Edit** link, the product page now correctly displays the product quantity currently in the cart. *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request 13310*.




### Dashboard
<!--- MAGETWO-86443 -->* The `top destinations` configuration field is now configurable on a store level. Previously, it was configurable on the global level only. *Fix submitted by [Andreas von Studnitz](https://github.com/avstudnitz) in pull request 13052*.

<!--- MAGETWO-86205 -->* When multiple validation errors occur while saving a customer address, Magento now shows unique messages in the `adminhtml` customer edit page. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 12922*.

<!--- MAGETWO-86203 -->* The scroll bar on the Admin store switcher is now scrollable on machines running OSX. *Fix submitted by [Juan Alonso](https://github.com/jalogut) in pull request 12931*.



### Developer

<!--- MAGETWO-83120 -->* Magento no longer throws an error when you try to generate an URN catalog for an empty `misc.xml` file. *Fix submitted by [Timon de Groot](https://github.com/tdgroot) in pull request 11686*. [GitHub-5188](https://github.com/magento/magento2/issues/5188)



### Directory

<!--- MAGETWO-85659 -->* The `\Magento\Directory\Model\PriceCurrency::format()` method no longer fails if you do not configure a conversion rate from the base to the specified currency. Previously, if you did not specify this conversion rate, Magento rendered the price (amount) in the base currency, not the specified currency. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1022*. [GitHub-6965](https://github.com/magento/magento2/issues/6965)

<!--- MAGETWO-85583 -->* Magento now requires that customers select State/Province when shipping orders to India, and the checkout page now provides a drop-down field with appropriate values. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request*. [GitHub-12378](https://github.com/magento/magento2/issues/12378)

<!--- MAGETWO-86170 -->* You can now disable the **State is Required for** field. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request 12917*. [GitHub-12894](https://github.com/magento/magento2/issues/12894)




### EAV attributes

<!--- MAGETWO-86240 -->* Creating new configuration attributes no longer causes naming collisions in the JavaScript UI registry. Previously, when you created a new default attribute and then subsequently created a new product, JavaScript errors occurred.  *Fix submitted by [Volodymyr Zaets](https://github.com/VladimirZaets) in pull request*. [GitHub-12555](https://github.com/magento/magento2/issues/12555)

<!--- MAGETWO-85875 -->* You can now use a single query to retrieve attribute groups from multiple attribute sets. *Fix submitted by [Marius Strajeru](https://github.com/tzyganu) in pull request 12105*. [GitHub-11936](https://github.com/magento/magento2/issues/11936)

<!--- MAGETWO-85772 -->* Magento now saves multiselect attribute for a product that has a related product using another attribute set. Previously, multiselect attribute values were not saved for a product in the Admin panel when it had a related product that used another attribute set. *Fix submitted by [awarche](https://github.com/awarche) in pull request 12767*.

<!--- MAGETWO-85579 -->* The product attribute repository save method  no longer resets the source model to null when you create a new product attribute through code. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1012*. [GitHub-10814](https://github.com/magento/magento2/issues/10814)

<!--- MAGETWO-85302 -->* Magento now uses the correct  `entity_model` in `table eav_entity_type` for invoices (`Magento\Sales\Model\ResourceModel\Order\Invoice`). Previously, in `table eav_entity_type` for `entity_type_code = "invoice"` the `entity_model` was `Magento\Sales\Model\ResourceModel\Order`. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 980*. [GitHub-10123](https://github.com/magento/magento2/issues/10123)

<!--- MAGETWO-84272 -->* When a validation message is returned, Magento no longer displays the attribute code (`$attrCode`), but instead returns the label (`$label`). This change makes it easier to translate messages. *Fix submitted by [Hewerson Freitas](https://github.com/hewersonfreitas) in pull request 12120*. 

<!--- MAGETWO-72597 -->* You can now perform a mass update on products that have more than 60 attributes. 

<!--- MAGETWO-85833 -->* `Magento\Eav\Model\Config::getAttribute` now stops the Profiler before it returns Profiler run time. Previously, `Magento\Eav\Model\Config::getAttribute` did not stop the Profiler from returning early, and consequently reported incorrect run time. *Fix submitted by [Nick Anstee](https://github.com/nicka101) in pull request 12810*.

<!--- MAGETWO-87588 -->*  The `beforeSave` method encodes an attribute value only when it has not yet been encoded. Previously,t the JSON-encoded attribute value was loaded  correctly, but when you saved a product multiple times,  the attribute value was also be encoded multiple times. Consequently, Magento did save the product, and  displayed this error, **Unable to unserialize value**. *Fix submitted by [Tibor Kotosz](https://github.com/tkotosz) in pull request 13551*.

<!--- MAGETWO-87354 -->* The deprecated `each()` function has been removed from the code. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request*. 




### Email

<!--- MAGETWO-83741 -->* Order confirmation emails from the Amdin in multistore environments no longer defaults to the primary store, but instead is sent from the store that the customer used. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. [GitHub-11740](https://github.com/magento/magento2/issues/11740)

<!--- MAGETWO-86881 -->* Magento no longer sends misleading feedback when sending tracking information email. Previously, instead of sending a notice that a shipment was underway, the repsonse sent was, **You sent the shipment**. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1245*. [GitHub-5697](https://github.com/magento/magento2/issues/5697)


### Frameworks

<!--- MAGETWO-86337 -->* You can now switch to default mode from production mode. Previously, if you tried to switch back to default mode, Magento displayed this error, **Cannot switch into given mode 'default'**. *Fix submitted by [Etty](https://github.com/Etty) in pull request 12752*. [GitHub-4292](https://github.com/magento/magento2/issues/4292)


<!--- MAGETWO- 86654-->* `vendor/magento/framework/composer.json` nows declare a dependency on `magento/zendframework1`. Previously, packages depending on `magento/framework` packages failed to execute. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 12990*. [GitHub-12967](https://github.com/magento/magento2/issues/12967)

<!--- MAGETWO-85290 -->* The `filePutContents('file.txt')` now contains content as expected. Previously, Magento threw this error, **The specified "file.text" file could not be written**.  *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 962*. [GitHub-7467](https://github.com/magento/magento2/issues/7467)

<!--- MAGETWO-85770 -->* You can now subscribe to events that contain a number in their name.  *Fix submitted by [Mobecls](https://github.com/Mobecls) in pull request 12758*. [GitHub-5035](https://github.com/magento/magento2/issues/5035)

<!--- MAGETWO-85872 -->* PhpDoc now shows correct parameter types. Previously, PhpDoc showed only a type of `string`, although `array` was also a valid parameter type. *Fix submitted by [Freek Vandeursen](https://github.com/FreekVandeursen) in pull request*.

<!--- MAGETWO-86484 -->* Content no longer jumps when pages are reloaded on the Admin because the notices-wrapper now has a min-height setting. *Fix submitted by [Anna Völkl](https://github.com/avoelkl) in pull request 12985*.

<!--- MAGETWO-86277 -->* We've corrected a typo in the `Magento\Ui\Controller\Adminhtml\Index\Render` action. *Fix submitted by [Nick](https://github.com/punkstar) in pull request 12951*.

<!--- MAGETWO-86154 -->* `X-Magento-Vary` and `PHPSESSID` now have the same expiration time. Previously, the  `X-Magento-Vary` cookie had an expiration of `session`, which meant it was not considered expired until the browser was closed. In contrast, the `PHPSESSID` cookie had a finite expiration time (not `session`). At times, this resulted in the Magento caching the wrong page cached for the logged-in user. 	

<!--- MAGETWO-85992 -->* `\Magento\Config\Model\Config\Structure\Reader::processingDocument`  now throws a more helpful validation exception. *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request 12859*.

<!--- MAGETWO-88146 -->* Creating an observer that uses ObserverInterface no longer triggers a patch-level dependency on `magento/framework`. *Fix submitted by [Kristof](https://github.com/fooman) in pull request 13759*.

<!--- MAGETWO-88115 -->* RewriteBase directive has been added to the `.htaccess` file in `pub/static` to support the potential installation of Magento code under a directory inside the web root. *Fix submitted by [Cristiano Casciotti](https://github.com/ccasciotti) in pull request 13678*.

<!--- MAGETWO-87261 -->*  The doc block of the `walk` method in a collection now correctly describes that the method accepts a string or array.  
*Fix submitted by [ByteCreation](https://github.com/ByteCreation) in pull request 13373*.




#### App framework

<!--- MAGETWO-81802 -->* The customer grid indexer now works as expected.  Previously, this indexer did not work when reindexing using the command line interface during upgrade. *Fix submitted by [Leonid Poluyanov](https://github.com/le0n4eg) in pull request 10838*. [GitHub-10838](https://github.com/magento/magento2/issues/10838)

<!--- MAGETWO-80223 -->*  `expectException()` calls now accept two parameters (instead of one). *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 11099*. [GitHub-11059](https://github.com/magento/magento2/issues/11059)

<!--- MAGETWO-84003 -->*  The `findAccessorMethodName()` method (`Magento\Framework\Reflection\NameFinder`) now provides a more helpful exception message. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 12303*. [GitHub-9764](https://github.com/magento/magento2/issues/9764)

<!--- MAGETWO-84016 -->* Customers with an empty **Date of Birth** field can now be saved even when the field is not marked (or checked on the JavaScript side) as mandatory. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 12302*. [GitHub-12146](https://github.com/magento/magento2/issues/12146)

<!--- MAGETWO-84371 -->* You can now alter the transport variable in the `email_invoice_set_template_vars_before` event. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

<!--- MAGETWO-84372 -->* Validation of South Korean zip codes now supports current zip code format. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 903*. [GitHub-9515](https://github.com/magento/magento2/issues/9515)




#### Configuration framework

<!--- MAGETWO-84464 -->* Scope-based configuration now decrypts data as expected. Previously, scope-based configuration failed to decrypt data on the default store only. *Fix submitted by [DubovykOleksandr](https://github.com/odubovyk) in pull request 8591*.




#### JavaScript framework

<!--- MAGETWO-83401 -->* The <depends> field now works for fields of type `radio` in `system.xml`. *Fix submitted by [Javier Villanueva](https://github.com/jahvi) in pull request 11539*.

<!--- MAGETWO-83993 -->* Magento now sorts fields and amounts as expected  when you extend a dynamic-row element in a `ui_component` and add a sort order attribute with an amount that falls between the other element's amount. *Fix submitted by [Harald Deiser](https://github.com/deiserh) in pull request 11846*.


#### Session framework

<!--- MAGETWO-83373 -->* The Setup Wizard page now loads successfully when the session storage method is memcache.  Previously, Magento returned an HTTP 500 error when you navigated to **System > Tools > Web Setup Wizard Setup Wizard**  in installations where you've configured the session storage method to memcache in `env.php`. *Fix submitted by [Marty S](https://github.com/sylink) in pull request 11608*. [GitHub-83373](https://github.com/magento/magento2/issues/83373)

<!--- MAGETWO-83287 -->* When you add a product to your wishlist after logging out, Magento now redirects you to your account Wishlist page and adds the product. Previously, you were redirected to your wishlist page, but Magento did not add the product. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 12038*. [GitHub-11825](https://github.com/magento/magento2/issues/11825)

<!--- MAGETWO-86880 -->* Anonymous calls using REST no longer trigger the creation of PHP sessions. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1247*. [GitHub-7213](https://github.com/magento/magento2/issues/7213)



#### Web API framework

<!--- MAGETWO-83854 -->* A user who has been denied permissions for Negotiable quote editing can now create customer addresses. 

<!--- MAGETWO-84979 -->* Swagger-ui now works as expected on instances of Magento that are running on non-standard ports. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 12541*.

<!--- MAGETWO-84994 -->* You can now set attribute values to empty strings using REST. Previously, Magento would not let you use REST to pass the following attributes with empty values: `special_from_date`, `special_to_date`, and `special_price`. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 916*. [GitHub-8862](https://github.com/magento/magento2/issues/8862)

<!--- MAGETWO-85534 -->* We've updated the `webapi` module to improve the order of how arguments are merged in multiple `di.xml` files. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 995*. [GitHub-8647](https://github.com/magento/magento2/issues/8647)

<!--- MAGETWO-85538 -->* `SearchCriteriaBuilder` now has a check to determine if sort order should be applied. Previously, `SearchCriteriaBuilder` built wrong criteria (`ORDER BY part`). *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1003*. [GitHub-5738](https://github.com/magento/magento2/issues/5738)






### General


<!--- MAGETWO-86727 -->*  Customer Login/Logout Issue #

*Fix submitted by [Vinay Shah](https://github.com/vinayshah) in pull request 13040*.


If customer logouts and login with out completing its timeout on logout success page, then customer get logout page displayed



<!--- MAGETWO-87341 -->* #11527: Notification messages not disappearing after being displayed 

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1111*. 


[GitHub-11527](https://github.com/magento/magento2/issues/11527)


Expected result
The success message is saved in memory then displayed then deleted from memory. It is displayed once per frontend page load.
Actual result
The success message are stacked, the number displayed equal to the amout of pages you loaded. It looks like they are never deleted from memory.




<!--- MAGETWO-87342 -->*  Sort by Product Name doesn't work with Ancor and available filters. #
Sort by Product Name doesn't work with Ancor and available filters
On the category page when we have filters (as example - we need to define color for products) + "Ancor" is enabled for category - sorting by product name doesn't work correct.
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1192*.




[GitHub-12860](https://github.com/magento/magento2/issues/12860)





<!--- MAGETWO-87657 -->*  


*Fix submitted by [Mkennethsmith](https://github.com/Mkennethsmith) in pull request*.

[GitHub-11252](https://github.com/magento/magento2/issues/11252)


Expected result
the uploaded file appears in the customer form
Actual result
Popup appears stating something went wrong with saving the file
In the apache error log the following appears

Custom attribute - File not allowing uploads


<!--- MAGETWO-86748 -->* remove TestObserver class 
*Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13174*.


The `Magento\ProductAlert\Controller\Add\TestObserver`, as I can see, was used for testing propose. It can run methods for sending product alert (price and stock) emails and, also, error emails for admin: `Magento\ProductAlert\Model\Observer::process()`. The main reason why I created this PR and remove reported class is that it can be run by any logged in customer while `process()` method should be run only by an event or by cron.




<!--- MAGETWO-86722 -->* Updated README file to take resources from 2.2 instead of 2.0. 
*Fix submitted by [Bhargav Mehta](https://github.com/bhargavmehta) in pull request 13161*.

Updated README file so that all the resources provided in README file are upto date.






<!--- MAGETWO-87033 -->* reformatted code to properly aign elements with in an array
*Fix submitted by [Nolwennig Guilbert](https://github.com/Nolwennig) in pull request*.

According to the formatting Array assignement for insertion website_id:1 in store_website table, the values for insertion website_id:0:




<!--- MAGETWO-88155 -->*  Remove not-allowed currencies from the currencies dropdown in Setup 
*Fix submitted by [Ricardo Martins](https://github.com/r-martins) in pull request 13770*.


As reported on #13760 some deprecated currencies were being displayed in the setup process.
This PR removes these and other not-allowed currencies from the setup step 4 (customize your store).





<!--- MAGETWO-87950 -->*  Typo (address not addres) in events.xml  
*Fix submitted by [Renon Stewart](https://github.com/srenon) in pull request 13661*.





<!--- MAGETWO-86886 -->* Type error in Cart/Totals
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12993*.


CartTotalRepository cannot handle extension attributes in quote addresses in 2.2.2
Unset the address extension attributes before trying to create the quote totals.


Type error in Cart/Totals

[GitHub-12993](https://github.com/magento/magento2/issues/12993)

[GitHub-12819](https://github.com/magento/magento2/issues/12819)








<!--- MAGETWO-86883 -->*  The function "isUsingStaticUrlsAllowed" (configuration setting "cms/wysiwyg/use_static_urls_in_catalog") doesn't have any effect with the WYSIWYG editor image insertion
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request*.

[GitHub-12147](https://github.com/magento/magento2/issues/12147)


Steps to reproduce
Set the setting "cms/wysiwyg/use_static_urls_in_catalog"
Add an image using the WYSIWYG editor in the admin panel
Observe that the directive style URL is returned, not the static URL
Expected result
The static URL (i.e. media URL without transformation) should be returned
Actual result
The directive URL is returned.





<!--- MAGETWO-86840 -->* GitHub 12322: Bug with CDATA in XML layout update 
*Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1163*.


When you enter the first time a xml with CDATA it works as expected. After saving the CDATA tag is gone. 

The CDATA tag is added in the database field, so it gets stripped when they view is outputting the code from the database.
A CDATA section cannot contain the string "]]>" and therefore it is not possible for a CDATA section to contain nested CDATA sections. The preferred approach to using CDATA sections for encoding text that contains the triad "]]>" is to use multiple CDATA sections by splitting each occurrence of the triad just before the ">"

[GitHub-12322](https://github.com/magento/magento2/issues/12322)



<!--- MAGETWO-86746 -->* Optimization: module-sales is_null change to strict comparison instead #13155
Some classes are under `// @codingStandardsIgnoreFile` such as Sales module models and cannot be checked during static tests. In this PR I replaced `is_null` with strict comparison only for models in Sales module.

Micro-optimizations for Sales module models
Magento2 has next sniff [MicroOptimizations](https://github.com/magento/magento2/blob/2.2-develop/dev/tests/static/framework/Magento/Sniffs/MicroOptimizations/IsNullSniff.php) It checks next: `is_null must be avoided. Use strict comparison instead.`
*Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 1163*.





<!--- MAGETWO-87899 -->* 5451: Rating titles with whitespace results in broken ID attributes 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1119*.

[GitHub-5451](https://github.com/magento/magento2/issues/5451)



Rating titles with whitespace results in broken ID attributes

The review form uses the rating labels to output element attributes in the FE form.phtml template. These attribute values include IDs that should not include whitespace - this whitespace should be stripped out (likely with str_replace) for all (but one) instances of:



<!--- MAGETWO-86723 -->* #8453: [GitHub] Price outlining in Invoice PDF 
*Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1216*.

The header label 'Price' isn't correctly aligned with the invoice item price:

[GitHub-8453](https://github.com/magento/magento2/issues/8453)



Price outlining in Invoice PDF 

Expected result
Header label 'Price' aligned with the invoice item price
Actual result
The header label 'Price' isn't correctly aligned with the invoice item price:






<!--- MAGETWO-86630 -->* Develop fix for #12221 Google Analytics Pageview Triggered twice 

*Fix submitted by [Bhargav Mehta](https://github.com/bhargavmehta) in pull request 13034*. 

[GitHub-12221](https://github.com/magento/magento2/issues/12221)


Google analytics pageview being triggered twice








<!--- MAGETWO-86564 -->* Magento2.2.0 home page product grid issues 
*Fix submitted by [Punit Vaswani](https://github.com/punitv) in pull request 13081*. 


[GitHub-11796](https://github.com/magento/magento2/issues/11796)

Display 5 products in a row and with no margin addition for the first product on next row (Desktop view).
Display 2 products in a row (Mobile portrait mode).
Display 3 products in a row (Mobile landscape mode).



<!--- MAGETWO-88145 -->*  Fix bug Magento 2.2.2 password reset strength meter #
The form email input field selector at the "password-strength-indicator.js" is generic enough to match any input field "email" in the frontend at that time. This causes the password strength indicator to work in the password reset email screen in the default theme, given that this selector ends up matching the email field of the newsletter subscription form.

However, if you are using a theme in which the newsletter subscription email form is removed, it then causes this password strength validation to break. Moreover, it doesn't make much sense to compare your password with any possible email that is written in the newsletter subscription form.
*Fix submitted by [Alisson Oldoni](https://github.com/aoldoni) in pull request 13429*. 


<!--- MAGETWO-86433 -->* Change of copyright year from 2017 to 2018. 
*Fix submitted by [Bhargav Mehta](https://github.com/bhargavmehta) in pull request 13027*. 



<!--- MAGETWO-86431 -->* Feature space between category page 
*Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request 13026*. 


[GitHub-12601](https://github.com/magento/magento2/issues/12601)


A space between the category page and the main footer when applying specific settings 

Expected result
You can view the contact us page in the menu
Actual result
There is a space between the content and the footer.







<!--- MAGETWO-86248 -->* Respect "Learn More Link" in Recently Viewed Products widget options
 - key: magento/magento2#12946
 1. Create Recently Viewed Products widget.
2. In Widget Options > Product attributes to show, enable `Name`, `Image` and `Price`.
3. On frontend the widget will also display the `Learn More Link`.

*Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 12946*. 

<!--- MAGETWO-86035 -->* Remove unused if statement in order invoice save 
$shippingResponse is undefined in scope.
*Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 12887*. 






<!--- MAGETWO-85780 -->* 
we are running a composer based 2.1.0 install with haproxy and varnish in front of nginx and noticed that the sid variable appears in the URL even if it's disabled in backend.
*Fix submitted by [Roman Strelenko](https://github.com/strell) in pull request*. 

[GitHub-9453](https://github.com/magento/magento2/issues/9453)






<!--- MAGETWO-85779 -->* Menu item dependencies (dependsOnModule, depend… 
*Fix submitted by [Pavel](https://github.com/hannassy) in pull request 12747*. 


[GitHub-9720](https://github.com/magento/magento2/issues/9720)

Steps to reproduce
Log in to admin panel
Open up the top-level menu item that contains the menu items in question
Expected result
The menu items are not visible.

Actual result
The menu items are visible.







<!--- MAGETWO-85773 -->* Fix typo in SINGLE_PRODUCT_LAYOUT_HANLDE

The constant `SINGLE_PRODUCT_LAYOUT_HANLDE` contains a typo. It should be `SINGLE_PRODUCT_LAYOUT_HANDLE`.
*Fix submitted by [Andreas Schrammel](https://github.com/aschrammel) in pull request 12786*. 





<!--- MAGETWO-85713 -->*  Fix issue when tracking link returns 404 page in admin panel

*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request*. 


[GitHub-12206](https://github.com/magento/magento2/issues/12206)


Tracking link returns 404 page in admin panel







<!--- MAGETWO-85643 -->* Add price calculation improvement for product option value price 

*Fix submitted by [Marina Gociu](https://github.com/marinagociu) in pull request 11563*. 


Add price calculation improvement for product option value price

[GitHub-5774](https://github.com/magento/magento2/issues/5774)


Tier price and custom options give bad results




<!--- MAGETWO-85610 -->* Checkout: Whitespace in front of coupon code causes "Coupon code is not valid" 
Checkout: Whitespace in front of coupon code causes "Coupon code is not valid"

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1021*. 


[GitHub-12656](https://github.com/magento/magento2/issues/12656)

Expected result
The Discount should be applied
Actual result
"Coupon code is not valid"
In the logs: PUT /rest/default/V1/guest-carts/64610d8402c5f9e919929442220967ca/coupons/%20H20 HTTP/1.1
Note that whitespace after the coupon code is not being encoded in the PUT string, so the coupon works with trailing whitespace, just not with leading whitespace.



<!--- MAGETWO-85503 -->* New block element "Magento/Rma/Block/Adminhtml/Rma/Edit/Item/Form/Element/Boolean" has been added to allow rendering ability for the boolean RMA attributes on backend



<!--- MAGETWO-85502 -->* 
*Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request*. 

[GitHub-12625](https://github.com/magento/magento2/issues/12625)


when saving a page in magento 2.2.1, 'Modified' date field is not getting updated 
Expected result
The 'Modified' value for the edited page should be current timestamp
Actual result
'Modified' value for the edit page did not change. It's still the same as 'Created' value

Expected result
The 'Modified' value for the edited page should be current timestamp
Actual result
'Modified' value for the edit page did not change. It's still the same as 'Created' value



<!--- MAGETWO-85499 -->* Magento Connect no longer exist 
*Fix submitted by [Miguel Balparda](https://github.com/miguelbalparda) in pull request 12633*. 

[GitHub-12632](https://github.com/magento/magento2/issues/12632)


Steps to reproduce
Login to the admin
Go to Find partners & extensions
Link and image points to Magento Connect
Expected result
Link and image points to Magento Marketplace



<!--- MAGETWO-85311 -->* COPY FROM EARLIER NOTE


<!--- MAGETWO-85298 -->* 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request*.



[GitHub-8011](https://github.com/magento/magento2/issues/8011)

Steps to reproduce
Create a new attribute ad Dropdown field
Set Allow HTML Tags on Storefront to Yes
Create a new value for attribute Attribute including tags (Attribute Name)
Insert in a page a new widget Catalog Product List. In conditions select Attribute is Attribute Name
Expected result
I expect in the list the value "Attribute Name"
Actual result





<!--- MAGETWO-85207 -->* Verification that company collection is not loaded were added to the Company/Plugin/Sales/Model/ResourceModel/Order/Grid/File/CollectionPlugin 

As a result: secondary call to the beforeLoad() method wouldn't cause exception

In the admin for customer accounts where there are orders, the orders are not displaying on Orders tab. A blank page is displayed instead.

Orders grid should display with the customers orders

ACTUAL RESULTS:
The orders grid does not displays as expected and shows a blank page


<!--- MAGETWO-84921 -->* Known issue: 

In Swagger, the text area that contains the payload structure of some POST and PUT operations is not displayed. If a fraction of the text area is displayed, you can click on it to display the payload structure in a text area in the center of the page. If the text area is not displayed at all, then you cannot access the payload structure. 

Workaround: Use the static Swagger site at http://devdocs.magento.com/swagger to navigate to the REST call you want to use, then copy the payload structure to your Swagger instance.



<!--- MAGETWO-84883 -->* The left and the right parts of assignment are equal 
*Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request 12515*. 


 in app/code/Magento/Variable/Block/System/Variable/Edit.php




<!--- MAGETWO-84880 -->* app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php
Correct is 'value' => $this->getProduct()->getData($switchAttributeCode)

*Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request*. 



File: app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php
Correct is 'value' => $this->getProduct()->getData($switchAttributeCode)

File: app/code/Magento/Downloadable/Helper/File.php
Correct is 'xodt' => 'application/vnd.oasis.opendocument.text'








<!--- MAGETWO-84856 -->* Issue 12506: Fixup typo getDispretionPath -> getDispersionPath 
*Fix submitted by [PascalBrouwers](https://github.com/PascalBrouwers) in pull request 12507*. 


[GitHub-12506](https://github.com/magento/magento2/issues/12506)



<!--- MAGETWO-84764 -->* NewRelic: Disables Module Deployments, Creates new Deploy Marker Command 
*Fix submitted by [Kristof](https://github.com/fooman) in pull request 12477*. 

The "report module enable/disable changes as deployment markers" functionality in the Magento_NewRelicReporting module is broken. Irrespective of actual module enabling/disabling, if New Relic's cron is enabled Magento will send a New Relic Deployment markers for every enabled module once per cron period. This is for an hourly cron and an average of 100 modules in a module system, this is approximatly 2,400 event per individual Magento cron server, per day. This is flooding New Relic's systems with -- let's call it a lot -- of traffic. New Relic is taking steps to drop these deployment requests, but they're still a burden on the system. Also, this creates an almost unusable deployment feature in the New Relic UI. Finally, this creates slow running cron and needless network traffic for individual Magento systems.





<!--- MAGETWO-84590 -->* Multishipping for Cybersource: Vault support for Cybersource tokens
Added possibility to use Cybersource on multi-shipping
As a Magento merchant, I want the Magento Vault to be compatible with Cybersource tokens so that Cybersource can be successfully integrated with multishipping functionality.

AC

Users checkouts via Cybersource result in the Magento Vault storing tokens that can be used for further transactions by the Admin





<!--- MAGETWO-84586 -->* Support multishipping with Cybersource payment method
As a Magento merchant, I want my website to support multishipping (sending purchased goods to multiple addresses) for Cybersource as part of the checkout flow.




<!--- MAGETWO-84474 -->* New Orders not being saved to order grid 

[GitHub-10128](https://github.com/magento/magento2/issues/10128)



New Orders not being saved to order grid
Steps to reproduce
Visit site as guest
Put item in cart, go to checkout
Fill out any necessary customer information
Choose internal payment method "Check/Money order"
Place Order
Expected result
E-Mails to customer should be sent, containing all necessary informations about the order
Order should be saved to grid with customer name
Dashboard should show order with customer name
Actual result
Email with order no. is being sent to customer, but the email contains no information about ordered items, only billing and shipping address (Standard Magento email-template being used)
2. Orders are not saved to order grid

Dashboard shows orders as "Guest", order can be opened from dashboard and it seems to be complete with informations about items being ordered

Debug logs are being written, exception logs not.

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 12241*. 








<!--- MAGETWO-84284 -->* Update CAPTCHA labels to reflect the symbols in the CAPTCHA image #12387
The text labels referring to the CAPTCHA image only refer to letters, when there are also numbers in the CAPTCHA images. Meaning the instruction to the user is ambiguous. The message implies to NOT enter the numbers, thus the CAPTCHA doesn't match.


The text labels referring to the CAPTCHA image only refer to letters, when there are also numbers in the CAPTCHA images. Meaning the instruction to the user is ambiguous. The message implies to NOT enter the numbers, thus the CAPTCHA doesn't match.

I've changed the labels in a few places and updated the dictionary file



<!--- MAGETWO-84098 -->* In this pull request a bug that was discovered while the "Share Wishlist" functionality was executed. When a logged in user adds products to the wishlist and then tries to share them using RSS, an exception is thrown: report.INFO: Broken reference: the 'wishlist.email.rss' element cannot be added as child to 'root', because the latter doesn't exist []
*Fix submitted by [MediaCT](https://github.com/mediactbv) in pull request*. 




<!--- MAGETWO-84006 -->* Fix robots.txt content type to 'text/plain' 
*Fix submitted by [Milan Osztromok](https://github.com/tufahu) in pull request 12310*. 


Currently robots.txt response header content type is text/html, it should be plain text.






<!--- MAGETWO-84004 -->* If you extend an dynamic-row element in a ui_component and add a sort order attribute with a amount between the others, the Fields are in the correct order but the label is always the last one.
*Fix submitted by [Harald Deiser](https://github.com/deiserh) in pull request 12310*. 

Fixed a js bug where ui_component labels have the wrong sort order





<!--- MAGETWO-83560 -->* The following is actual only for existing Magento EE/B2B installations and "Update by Schedule" indexer mode. 

New Magento installation with this fix will fix one of deadlock, that occurs on EE version, but for existing Magento EE/B2B installation the following code must be executed for apply needed changes: 

bin/magento indexer:set-mode realtime 
bin/magento indexer:set-mode schedule 


Deadlock on product creation

Steps to reproduce
use jmeter and open sanity.jxm file in GUI mode
enable View Results Tree
run step Others -> API in 4 parallel threads
go to View Results Tree and check results
Expected results
all steps from "API Product Management" were executed successfully (they are green)
Actual results
Step "Create product" from "API Product Management" has errors and the error is






<!--- MAGETWO-82866 -->* Information messages about succesfull/failed actions are displayed when company admin manages "Company Users" section.

ISSUE
There is no success/error message when a company adds a customer on the storefront. On failure response message is " something went wrong.", but no error outputted to the screen.



<!--- MAGETWO-82666 -->* Database backup doesn't include triggers
*Fix submitted by [Denis Ristic](https://github.com/denisristic) in pull request 11369*. 


[GitHub-9036](https://github.com/magento/magento2/issues/9036)

Database backup doesn't include triggers

Steps to reproduce
Do a database backup with setup:backup --db.
Do a database restore with setup:rollback -d.
Expected result
Database is restored and includes triggers.

Actual result
Database is missing triggers, so indexing doesn't work correctly.




<!--- MAGETWO-81128 -->* Credit card form is now available when you create an order from the Admin, even when only one payment method is enabled. Previously, when only one payment method was enabled, the Admin did not render this form.


<!--- MAGETWO-80609 -->* Pattern Validation via UI Component Fails to Interpret String as RegEx Pattern #9919

[GitHub-9919](https://github.com/magento/magento2/issues/9919)



When using a UI Component based form and adding a custom regular expression pattern validation to an input field, the supplied pattern is not properly converted from a string to a javascript RegEx object.

xpected result
The pattern value should be interpreted as a RegEx object OR sent through new RegEx within the javascript.
Actual result
A javascript error is thrown

UNRESOLVED



<!--- MAGETWO-73473 -->* You can now implement translations from themes (in contrast to translations from modules).

<!--- MAGETWO-72865 -->* Full Page Cache is no longer invalidated after you save a predictor category. Previously, all product-related cache data was invalidated, when only a narrow subset of cache tags associated with the `product_id` should have been. 

<!--- MAGETWO-71829 -->* The `is_subscribed` extended parameter is now returned when a web API is used to modify or return information about a customer.






<!--- MAGETWO-70336 -->* 


[GitHub-8830](https://github.com/magento/magento2/issues/8830)


Can't delete row in dynamicRows component
Steps to reproduce
Go to Products -> Catalog
Edit any product
Click Add Attribute button
Create new attribute of type Visual Swatch or Text Swatch
Add swatch
Try to Delete row with Bin icon
Expected result
Row is deleted
Actual result
An error is produced in the js console output




<!--- MAGETWO-88040 -->*  Magento now displays a more meaningful error message if a module name is misspelled in a unit test. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 13740*.

<!--- MAGETWO-87908 -->* Display a more meaningful error message in case of misspelt module name. *Fix submitted by [Jānis Elmeris](https://github.com/JanisE) in pull request 12843*.


<!--- MAGETWO-87940 -->*  Update StorageInterface.php 

*Fix submitted by [David Angel](https://github.com/davidangel) in pull request 13679*. 




<!--- MAGETWO-87921 -->* Fix adding values to system variable collection 
*Fix submitted by [Maksymilian Szydło](https://github.com/mszydlo) in pull request 13596*.



Method mentioned above tried to select field value from joined variable_value table (which doesn't exist). I've replaced incorrect field with two proper ones: plain_value and html_value.




<!--- MAGETWO-87242 -->*  ui active state not removed from previous menu item 
*Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request 13341*. [GitHub-13327](https://github.com/magento/magento2/issues/13327)


The ui-state-active clas is not removed from the previous opened main menu item when you open a new main menu item.
Steps to reproduce
In your browser switch to mobile view so you have the mobile menu
Open the menu
Expand the menu item Women
Now expand the menu item Men
You will see that the ui-state-active class is still also on Women
Expected result
The previous opened main menu item should not have the class ui-state-active
Actual result
The previous opened main menu item has the class ui-state-active







### Gift card

<!--- MAGETWO-88105 -->* Magento now includes a gift card recipient's email address in the gift card account history. Previously, Magento did not include the gift card recipient's name and email address in the gift card account history, even though Magento successfully sent the email. 



### Import/export

<!--- MAGETWO-81368 -->* You can now successfully import product images and image labels from CSV files. Previously after import, the  alt text field on the Admin was empty, even though the label was imported and is visible on the product list page as alt attribute, and the Product Detail page missed the alt attribute on image fields.*Fix submitted by [Ben Robie](https://github.com/brobie) in pull request 11323*.[GitHub-9931](https://github.com/magento/magento2/issues/9931)

<!--- MAGETWO-83726 -->* The CSV file created by using **System > Export** now incorporates the value of `hide_for_product_page`. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 11926*.

<!--- MAGETWO-83957 -->* You can now import a value of zero (0) into a custom attribute when using the Admin product import feature. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12283*. [GitHub-12083](https://github.com/magento/magento2/issues/12083)

<!--- MAGETWO-84448 -->* You can now import or export a specific store view that includes custom options and bundle product options. Previously, the import/export feature did not include store view-level edits for  custom options.

<!--- MAGETWO-85629 -->* Import no longer fails when you import products with image filenames containing round brackets from a CSV file. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1017*. [GitHub-12084](https://github.com/magento/magento2/issues/12084)

<!--- MAGETWO-86657 -->* When you import information about existing customers, Magento no changes only the specific rows for this customer. If rows for other customer attributes ( for example, `group_id`, `store_id`, `created_at`) are absent in the import file, these values are included unchanged. 

<!--- MAGETWO-88044 -->* Magento now provides a test for adding values in the system variable collection unit test. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 13742*.

<!--- MAGETWO-74042 -->* You can now successfully import import configurable products with specified configurable links when the `store_view_code` setting isn't set. Previously, you could successfully import a configurable product with both configurable and additional attributes, but when you viewed the category to which the product belonged, the product was not displayed. [GitHub-5876](https://github.com/magento/magento2/issues/5876)



### Indexing

<!--- MAGETWO-86446 -->* The URL that points to Magento `crontab` documentation has been updated to reflect current cron documentation in `app/code/Magento/Indexer/Model/Message/Invalid.php`. *Fix submitted by [Robbie Thompson](https://github.com/robbie-thompson) in pull request 13050*.

<!--- MAGETWO-83503 -->* You can now view the state of the mview queue in real time, which can be useful when debugging indexing issues. You can now view how many items are in the queue pending processing, as well as view information from the `mview_state` table. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request 12122*.



### Infrastructure

<!--- MAGETWO-86542 -->* Zoom now works as expected when using dropdown menus. Previously, zoom worked fine, but when you hovered over the category dropdown menu to the overlap area of product image and dropdown menu, the zoom was abnormally active,  even the mouse was still on the dropdown menu.
*Fix submitted by [Mayank Zalavadia](https://github.com/mayankzalavadia) in pull request 13084*. [GitHub-5129](https://github.com/magento/magento2/issues/5129)

<!--- MAGETWO-86505 -->* RequireJS loading issues that occur when ad blockers are active have been resolved. Previously, `uBlock` (or any ad blocker) forbade the `trackingCode.js` file from loading, which prompted RequireJS to throw  an  exception. This exception broke the JavaScript execution flow and caused unexpected issues throughout the storefront. *Fix submitted by [Yonn Trimoreau](https://github.com/Yonn) in pull request 13061*.

<!--- MAGETWO-86501 -->* `continue()` has been removed from templates. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 13076*. 

<!--- MAGETWO-85698 -->* The comment that marks the `\Magento\Checkout\Model\Cart` class as deprecated now includes a pointer to an alternative class. This fix is part of an ongoing effort to add pointers to valid replacements when marking methods and classes as deprecated. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 13061*. [GitHub-10133](https://github.com/magento/magento2/issues/11070)

<!--- MAGETWO-85694 -->* A new file (`CODE_OF_CONDUCT.md`) that defines  standards for how to engage in the community has been added. *Fix submitted by [Ievgen Shakhsuvarov](https://github.com/ishakhsuvarov) in pull request 12723*.

<!--- MAGETWO-85332 -->* We've resolved errors that occcurred when loading theme configuration on installations running PHP 7.2. Previously, when Magento loaded theme configuration on an installation running PHP 7.2 and checked that  `$parentPathPieces` was an array before counting it, Magento threw an error when this value was `NULL`. *Fix submitted by [Alan Hardman](https://github.com/Alanaktion) in pull request 12606*.

<!--- MAGETWO-85292 -->* `\Magento\Framework\Data\Tree::getNodeById()` no longer contains an invalid type in its PHPDoc block.  *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 964*. [GitHub-8507](https://github.com/magento/magento2/issues/8507)





### Newsletters

<!--- MAGETWO-83999 -->* The **About Us** and **Customer Service** links of the Order Confirmation email (and  other emails sent to the customer) now work as expected. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. [GitHub-12261](https://github.com/magento/magento2/issues/12261)

<!--- MAGETWO-85783 -->* Magento now sends the newsletter subscription success email as expected a customer successfully subscribes to a newsletter. 
*Fix submitted by [Styopchik](https://github.com/Styopchik) in pull request*. [GitHub-12439](https://github.com/magento/magento2/issues/12439)

<!--- MAGETWO-86435 -->* Magento now uses indexes to retrieve subscriber information during the creation of email to newsletter subscribers. Previously, Magento did not indexes for this task, and performance was poor. *Fix submitted by [Amit Bera](https://github.com/devamitbera) in pull request*. [GitHub-12787](https://github.com/magento/magento2/issues/12787)

<!--- MAGETWO-86562 -->* Magento no longer sends multiple confirmation emails when a customer successfully subscribes to a newsletter. *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request 13044*. [GitHub-12876](https://github.com/magento/magento2/issues/12876)

<!--- MAGETWO-86447 -->* The text of the  **Subscribe to Newsletter** button now wrpas correctly. *Fix submitted by [monaemipro](https://github.com/monaemipro) in pull request 13041*. [GitHub-12320](https://github.com/magento/magento2/issues/12320)



### Orders

<!--- MAGETWO-75840 -->* Magento now shows all products as expected in the Recently Ordered list when you place an order that contains products from multiple stores. Previously, in installations with two storefronts, if you added products from both stores to the same shopping cart, and placed a single order, the recently ordered product list would not show all ordered products. 

<!--- MAGETWO-82577 -->*  The `getDefaultStoreLocale()` method has been added to allow for the fetching of scoped values. Use this method in `getCreatedAtFormatted()` to ensure that Magento translates the  `created_at` order date in emails for the locale being used in that store view. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 11067*.

<!--- MAGETWO-83410 -->*  You can now successfully open the Order edit page for orders that contain an address with extension attributes. Previously, when you tried to open this page, the page load failed with this error, `Recoverable Error: Object of class Magento\Sales\Api\Data\OrderAddressExtension could not be converted to string in .../module-sales/Model/AdminOrder/Create.php on line 503`. 

<!--- MAGETWO-83552 -->* Magento now saves an invoice ID on the credit memo when you create a credit memo from the invoice in the Admin. Previously, 
the invoice ID was not included.  *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 11067*. [GitHub-11669](https://github.com/magento/magento2/issues/11669)

<!--- MAGETWO-83740 -->* Credit memos can have the state open (`\Magento\Sales\Model\Order\Creditmemo::STATE_OPEN`). As a result, you can create a creditmemo with an ID that still has to be refunded, and existing credit memos should be refundable if their state is open. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 11550*.

<!--- MAGETWO-83783 -->* The `Magento\Sales\Service\V1\OrderCreateTest` test now has the correct shipping method fixture. Previously, this test contained an incorrect shipping method fixture, which produced an error whenever an order's shipping method was treated an object. *Fix submitted by [andrew-garside-temando](https://github.com/andrew-garside-temando) in pull request 12227*.
 
<!--- MAGETWO-84219 -->* When you use the REST API to create a credit memo, Magento now sends  credit memo update emails as expected. Previously, under these circumstances, Magento did not send this email, and no other transaction emails were sent ot the customer.  

<!--- MAGETWO-84256 -->* The `getReservedOrderId()` method now uses the current store as expected instead of the default store. *Fix submitted by [Timon de Groot](https://github.com/tdgroot) in pull request 11702*. [GitHub-9055](https://github.com/magento/magento2/issues/9055)

<!--- MAGETWO-85305 -->* When you are editing an order's shipping or billing address, Magento now displays the allowed countries from the correct store view. Previously, possible addresses were derived from the wrong store view. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. [GitHub-12560](https://github.com/magento/magento2/issues/12560)

<!--- MAGETWO-85660 -->* The `\Magento\Sales\Model\Order\Pdf\AbstractPdf::drawLineBlocks` method now works as expected. Previously, when a text block spanned more than one page, Magento threw a `Zend_Pdf_Exception` error, and displayed this error: `Font has not been set`. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1016*. [GitHub-11743](https://github.com/magento/magento2/issues/11743)

<!--- MAGETWO-86845 -->* Magento no longer exports extra records when you export invoices for multiple orders. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request 13208*. [GitHub-12714](https://github.com/magento/magento2/issues/12714)

<!--- MAGETWO-80233 -->* You can now place orders using PayPal when **Payment Action = Order**. Previously, when **Payment Action = Order**, Magento displayed this error when you reached the order review page: **We can't place the order.**

<!--- MAGETWO-86258 -->* The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 12668*. [GitHub-9969](https://github.com/magento/magento2/issues/9969)

<!--- MAGETWO-87292 -->*  Join extension attributes are now added as expected to order results when the order is created using REST. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1168*.

<!--- MAGETWO-87291 -->* The Shipment Tracking REST API now throws an error as expected if the specified order doesn't exist. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1162*. 





### Payment methods

<!--- MAGETWO-84588,MAGETWO-84587 -->* You can now use the Cybersource payment method for multishipping checkout and payment flows.


<!--- MAGETWO-75497 -->* Logged-out customers can no longer see previously saved credit cards. Previously, users logged in as guest could see some payment information from an earlier, canceled order. 

<!--- MAGETWO-81322 -->* When you cancel payment of an order and return to the previous page in the workflow (the checkout page), Magento now provides the shipping address and other information as expected. Previously, Magento did not load the shipping address after you canceled payment of an order and returned to the checkout page. [GitHub-11247](https://github.com/magento/magento2/issues/11247)

<!--- MAGETWO-81395 -->* Third-party developers can now customize payment errors messages for payment integrations based on Magento Payment Provider Gateway. 

<!--- MAGETWO-82910 -->* PayPal Express Checkout now appears as a payment option on the Checkout page when the PayPal buttons are available on the shopping cart page. Previously, PayPal did not appear as a payment method on the Checkout page when the billing agreement was disabled, although the PayPal buttons were still available on the shopping cart page. 

<!--- MAGETWO-83959-->* You can now view order details for an order created with a custom offline payment method. Previously, Magento displayed  PHP warning (undefined index) instead of the order details. *Fix submitted by [Alex](https://github.com/madonzy) in pull request 12296*. [GitHub-3596](https://github.com/magento/magento2/issues/3596)

<!--- MAGETWO-86112 -->*  Magento no longer disables the BrainTree **Place Order** button after a failed payment validation. *Fix submitted by [Ievgen Sentiabov](https://github.com/joni-jones) in pull request 12902*. 

<!--- MAGETWO-86297 -->* The  `is_active` and `is_visible` columns now default to true even when column default values are not set in the `vault_payment_token` installation script. *Fix submitted by [helloitsluke](https://github.com/helloitsluke) in pull request 12965*. 


<!--- MAGETWO-86308 -->* If you've chosen a custom payment method that is offline when you create an order, Magento now displays that payment method's name as expected when you view order details in **Payment & Shipping**. *Fix submitted by [zamoroka](https://github.com/zamoroka) in pull request 12731*. [GitHub-12209](https://github.com/magento/magento2/issues/12209)

<!--- MAGETWO-86351 -->* Paypal now works as expected with virtual products such as gift cards. Previously, when you tried to place an order for a virtual product using PayPal, Magento did not display the PayPal popup when you clicked **Continue PayPal** during checkout.

<!--- MAGETWO-84639 -->* Magento now correctly adds checkout agreements data to  requests and validates payment information when you place an order using PayPal Express. Previously, you could check this box, but Magento did not parse  the agreements data  or pass it  to the set-payment-information API. This failure in turn triggered the CheckoutAgreements validation plugin,  which failed to validate with no agreements data. *Fix submitted by [Ričards Zālītis](https://github.com/therool) in pull request 12401*. 

<!--- MAGETWO-86426 -->* Magento no longer archives active orders that are placed using PayPal Express Checkout. Previously, if you placed an order using PayPal Express Checkout, Magento would place the order as expected but also add it to the list of archived orders. 

<!--- MAGETWO-84647 -->* Magento now correctly displays transparent `.png` watermarks on JPEG images. Previously, Magento did not correctly display a transparent watermark as expected on an image, but instead displayed a white outline of the box where the watermark should be. *Fix submitted by [Elze Kool](https://github.com/elzekool) in pull request 11060*. [GitHub-10661](https://github.com/magento/magento2/issues/10661)





### Performance


<!--- MAGETWO-75769 -->* Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.


<!--- MAGETWO-86742 -->* As part of the micro-optimization of the `Magento\EAV` module, we've replaced `is_null` with strict comparison only for models and block in this module. *Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13169*.


### Quote

<!--- MAGETWO-86439 -->* If you change the currency type of your order-in-progress while viewing the shopping cart, Magento displays a message that shows the minimum order necessary in the new currency. Previously, this minimum was calculated incorrectly. *Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request 13039*.

<!--- MAGETWO-86434 -->* Magento no longers truncates very long telephone numbers in the order page. Previously, Magento cut off very long phone numbers at 20 digits. *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 13015*. [GitHub-10869](https://github.com/magento/magento2/issues/10869)

<!--- MAGETWO-86430 -->* You can now implement a product attribute that sets **Catalog Input Type for Store Owner** equal **Fixed Product Tax** in a multistore environment. *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 13019*.
[GitHub-12393](https://github.com/magento/magento2/issues/12393)

<!--- MAGETWO-85518 -->* Magento now displays all relevant shipping methods when you reorder or retrace your steps backward in checkout process from the payment page. Previously, Magento displayed only one shipping method under these circumstances.  

<!--- MAGETWO-86595 -->* An integrity constraint violation error no longer occurs after you reorder a product with custom options. *Fix submitted by [Vinay Shah](https://github.com/vinayshah) in pull request 13036*. [GitHub-12705](https://github.com/magento/magento2/issues/12705)



### Reports

<!--- MAGETWO-84981 -->* The Products in Cart report is now accurate. Previously, if you created a Products in Cart report (**Open Reports > Marketing > Products in Cart**) after deleting a product in your cart, the report displayed a blank list of products. *Fix submitted by [angelo983](https://github.com/angelo983) in pull request 12539*.

<!--- MAGETWO-88173 -->* You can now successfully export the Ordered Products report to a CSV file. Previously, the export file contained no report data.   


### SalesRule

<!--- MAGETWO-73479 -->* Magento now correctly applies coupon codes that exclude bundle products. Previosuly, Magento these coupons but did not exclude bundle products as expected. 

<!--- MAGETWO-71393 -->* Magento now displays the correct catalog rule price for bundle products with custom options. 

<!--- MAGETWO-86780 -->* Cart prices now displays the Cart Price Rule shipping discount correctly. Previously, when you placed an order, Magento displayed this error: **Payment method is not available**.

<!--- MAGETWO-86786-->* Magento now displays the exact label value that was given in the Admin during the cart price rule creation. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 13141*. [GitHub-11428](https://github.com/magento/magento2/issues/11428), [GitHub-11497](https://github.com/magento/magento2/issues/11497)

<!--- MAGETWO-87013-->*  Magento now correctly displays in Cart Price rules the nesting levels for categories with nesting levels that exceed three levels. 

<!--- MAGETWO-85960-->* Coupon codes that you've applied to an order you've subsequently canceled are now available for re-use as expected. Previously, once you canceled the order you applied the code to, you could not apply it to another order. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request*. [GitHub-12817](https://github.com/magento/magento2/issues/12817)


### Sample data
<!--- MAGETWO-84180 -->* The `sampledata:deploy` and `remove` commands now have `no-update` options. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 12359*.


### Scope
<!--- MAGETWO-88114 -->* A product set to one website now resets correctly for all websites after a special price scheduled update ends.


### Search
<!--- MAGETWO-85637 -->* Magento now displays popular search terms in **SEO & Search > Search Terms** as expected. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1024*. [GitHub-10743](https://github.com/magento/magento2/issues/10743)

<!--- MAGETWO-84370-->* Layer navigation now displays the correct product count. Previously, the layer navigation product count incorrectly included only in-stock products. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 12063*. [GitHub-11946](https://github.com/magento/magento2/issues/11946)


<!--- MAGETWO-85827-->* Grid filtration now handles MySQL special characters as expected. *Fix submitted by [laconica-sergey](https://github.com/laconica-sergey) in pull request 12749*.




### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>



<!--- MAGETWO-86306,  MAGETWO-87934-->* The handling fee configuration of shipping methods is now explicitly cast to 0 to  avoid warnings from PHP 7.1. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 13680*.

<!--- MAGETWO-86400 -->* Unused `count($_items)` in templates have been removed. *Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 12901*.

<!--- MAGETWO-85291 -->* Magento now enforces the minimum order amount during checkout as expected. Previously, you could bypass the minimum order amount logic by clicking **Check Out with Multiple Addresses**, removing products from the order,and then clicking **Update Qty & Addresses**. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 963*. 

<!--- MAGETWO-85586 -->* DHL product codes now match those published in the latest DHL products and services guide. Previously, three  DHL product codes in DHL Shipping module were incorrect. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request 12666*.

<!--- MAGETWO-84589 -->* You can use multishipping checkout flows with Cybersource to complete a purchase.


### Sitemap

<!--- MAGETWO-86349 -->*  `sitemap.xml` now displays URLs without `/home` appended. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 12649*. [GitHub-12446](https://github.com/magento/magento2/issues/12446)




<!--- MAGETWO-85285 -->* Sitemap image links in MultiStore 

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 935*. 

[GitHub-12482](https://github.com/magento/magento2/issues/12482)





<!--- MAGETWO-81525 -->* 
Fatal error: Call getTranslateInline of null when generating some sitemap with errors 
This PR changes the logic for handling errors in the sitemap generation cron. If an exception is thrown when trying to generate any of the sitemaps, the processes is not stopped anymore, but instead the errors are sent by email based on the XML Sitemap configuration. The old `_translateModel` property is not used anymore, and the inline translation is correctly suspended using the `inlineTranslation` property instead.

expected result: An email is delivered to the configured email address and the cron task should be successful.

actual result: Cron task is successful. There are no new emails in Inbox or Spam
*Fix submitted by [Marina Gociu](https://github.com/marinagociu) in pull request*. [GitHub-10502](https://github.com/magento/magento2/issues/10502)


### Swagger
<!--- MAGETWO-87444 -->* The code formatting in the Swagger block and template has been updated. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 13485*.



### Swatches
<!--- MAGETWO-83290-->* You can now use REST to import visual swatch attribute options. Previously, you could not add swatch options using service contracts unless a swatch option already existed for the attribute.  *Fix submitted by [gonzalopelon](https://github.com/gonzalopelon) in pull request 12044*. [GitHub-9410](https://github.com/magento/magento2/issues/9410), [GitHub-10707](https://github.com/magento/magento2/issues/10707), [GitHub-10737](https://github.com/magento/magento2/issues/10737), [GitHub-11032](https://github.com/magento/magento2/issues/11032)

<!--- MAGETWO-86576 -->* Visual swatches that have a color assigned now show that color in the swatch box. Previously, Magento did not display any color in the color swatch box. *Fix submitted by [Chris Pook](https://github.com/chris-pook) in pull request 13101*. [GitHub-11828](https://github.com/magento/magento2/issues/11828)

<!--- MAGETWO-86665 -->* The error message displayed when you do not supply enough information during swatch creation has been edited for clarity and grammatical accuracy. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1117*. [GitHub-5550](https://github.com/magento/magento2/issues/5550)

<!--- MAGETWO-87570 -->* The **Hide from Product Page** option now works for the child product of a configurable product. 


### TargetRule

<!--- MAGETWO-77754 -->* The Related Products rule for up-sell products with customer segments set to Specified now works as expected. 

<!--- MAGETWO-86013 -->* You can now successfully save a Related Product rule. 


### Tax
<!--- MAGETWO-87941 -->*  The default selector on the Admin's tax rule edit page now selects only the correct container (tax rate) following the Tax Rate multiselect. Previously, the default selector selected three elements, which resulted in inaccurate results. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13643*. [GitHub-12791](https://github.com/magento/magento2/issues/12791)

<!--- MAGETWO-87352 -->* We've removed the redundant default discount tax calculation (`tax/calculation/discount_tax`) from `Magento/Tax/etc/config.xml`. *Fix submitted by [Vincent Marmiesse](https://github.com/VincentMarmiesse) in pull request 13449*.

<!--- MAGETWO-87339 -->* The **Not yet calculated** text string immediately adjacent to the string **Tax** on the checkout page is now translated as expected. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1147*. [GitHub-7849](https://github.com/magento/magento2/issues/7849)




### Testing
<!--- MAGETWO-87290 -->* `ConfigurationTest` no longer fails when you install Magento using Composer. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1161*. [GitHub-12574](https://github.com/magento/magento2/issues/12574)

<!--- MAGETWO-87984 -->* We've added `MagentoStyle` as Console Input/output in Travis tests.

<!--- MAGETWO-86859 -->* We've reimplemented tests using Jasmine as part of the process of removing the legacy JavaScript test framework and completely removing `JSTestDriver` support.  *Fix submitted by [Carlos Lizaga](https://github.com/KarlDeux) in pull request*. [GitHub-12342](https://github.com/magento/magento2/issues/12342)

<!--- MAGETWO-86005 -->* `functional.suite.dist.yml` now  handles custom backend names. Previously, the value for the `backend_name` configuration was hardcoded. *Fix submitted by [scribam](https://github.com/scribam) in pull request 12884*.

<!--- MAGETWO-85940 -->* We've added a missing preference for `ObjectManager\ConfigInterface` in integration tests. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 12845*. [GitHub-12844](https://github.com/magento/magento2/issues/12844)

<!--- MAGETWO-85537 -->* Integration Test Annotation `magentoAppArea` no longer breaks with valid values. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 996*. [GitHub-2907](https://github.com/magento/magento2/issues/2907)

<!--- MAGETWO-85520 -->* The inline documentation of the static test for XSS vulnerabilities now reflects that `@escapeNotVerified` is disallowed in Magento versions equal or greater than 2.2. *Fix submitted by [Matthias Zeis](https://github.com/mzeis) in pull request 12639*.


### Tax
<!--- MAGETWO-83402 -->* Magento no longer displays the wrong order tax amounts when using a tax configuration other than Magento defaults. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 12639*. [GitHub-10347](https://github.com/magento/magento2/issues/10347)




### Themes

<!--- MAGETWO-72898 -->* Magento no longer caches warning messages as often as you click the  **Update Shopping Cart** button while the  shopping cart page loads. Previously, Magento cached a warning message each time you clicked this button while  the page loaded in FireFox or Chrome, and this action  resulted in multiple warning messages appearing on the top of the shopping cart page. 

<!--- MAGETWO-85785 -->* If a customer is logged in while  Magento loads, then the welcome message displays the customer's full name. *Fix submitted by [Oleh Kravets](https://github.com/xpoback) in pull request 12738*. [GitHub-12719](https://github.com/magento/magento2/issues/12719)

<!--- MAGETWO-85549 -->* You can now disable the full screen gallery on mobile devices *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1006*. [GitHub-12490](https://github.com/magento/magento2/issues/12490), [GitHub-12285](https://github.com/magento/magento2/issues/12285)

<!--- MAGETWO-86310 -->* Protected method `getHtml` now checks each child for an existing class and then appends the `$outermostClass` if true. Previously, when creating a dependency injection for the `Magento\Theme\Block\Html\Topmenu` class, you could not change class names on children in a `beforeGetHtml` method because  `getHtml` declares `setClass()` on all child items. *Fix submitted by [jonshipman](https://github.com/jonshipman) in pull request 12862*.

<!--- MAGETWO-85708 -->* You can now successfully close full-screem zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if you chose full screen zoom for any product image, you could not close the full screen zoom.


### Translations and locale

<!--- MAGETWO-86286 -->* Inline translations and custom translators now work for Knockout templates. *Fix submitted by [Dmitry Fedyuk](https://github.com/dmitry-fedyuk) in pull request 12953*. [GitHub-2156](https://github.com/magento/magento2/issues/2156)

<!--- MAGETWO-86778 -->* Magento now provides a locale for Swedish (Finland). *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1207*. [GitHub-13095](https://github.com/magento/magento2/issues/13095)

<!--- MAGETWO-87226 -->* Magento now uses current locale (as defined in **Stores > Configuration > Advanced Reporting**) when translating the time zone label. Previously, Magento used operating system settings instead of current locale. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 13408*.

<!--- MAGETWO-86436 -->* Newsletter labels can now handle Chinese language. *Fix submitted by [Dasharth patel](https://github.com/dasharath-wagento) in pull request 13029*. [GitHub-12320](https://github.com/magento/magento2/issues/12320)

<!--- MAGETWO-87575 -->* The module responsible for generating the `js-translations.json` file now contains a routine that translates strings in tags such as `<translate args="This won't be translated"`.  *Fix submitted by [Matti Vapa](https://github.com/mattijv) in pull request 13528*. [GitHub-12081](https://github.com/magento/magento2/issues/12081)


### User interface

<!--- MAGETWO-85784-->* You can now configure a form field with validation range-words. As a result, Category Name is validated, and Category is created (or displays the correct error message, if validation fails). Previously, Magento displayed an error message in the console. *Fix submitted by [Robin Huy](https://github.com/robinhuy) in pull request 12739*.


<!--- MAGETWO-86025 -->* The **Save Block** button on the Add New Block page no longer ignores clicks if the content editor is empty. 
*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1032*. [GitHub-8114](https://github.com/magento/magento2/issues/8114)

<!--- MAGETWO-86438 -->* Magento now disables the promo code input box after a user applies a promo code. *Fix submitted by [Chirag P](https://github.com/chiragp-wagento) in pull request 13030*. 

<!--- MAGETWO-84903 -->* Magento now displays video and images as expected when you select a video or click to view a full-screen image for a configurable product. *Fix submitted by [Chumak Roman](https://github.com/roma84) in pull request 12469*. [GitHub-12268](https://github.com/magento/magento2/issues/12268)


<!--- MAGETWO-83815 -->* The PHP notice that Magento displays when an invalid `ui_component` configuration is used has been improved. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 12239*.


<!--- MAGETWO-83293 -->* Magento has added verification for previously set filter in `Magento/Ui/Component/Filters`, which has eliminated duplication of filters in collection `where` conditions. 


### URL rewrites
<!--- MAGETWO-84955 -->* When using a store code in a URL, Magento now retrieves the value of `Store_Code` from the store if the store code value is empty. Previously, under these circumstances, Magento threw an error. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 12529*. [GitHub-8615](https://github.com/magento/magento2/issues/12450)


### Web API framework
<!--- MAGETWO-85287 -->* You can now use the REST API  to make requests that include a slash (/) in an SKU. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 949*. [GitHub-8615](https://github.com/magento/magento2/issues/8615)


### Wishlist
<!--- MAGETWO-69634 -->* Magento now correctly displays a product's special price when you add it to a wishlist. Previously, if you added a product with a special price to the wishlist, Magento displayed the product with its regular price.

<!--- MAGETWO-85303 -->* You can now remove an item description from a wishlist. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 981*. [GitHub-12582](https://github.com/magento/magento2/issues/12582)



## Known issues

### General





<!--- NOT NEEDED MAGETWO-87169 MAGETWO-87132 MAGETWO-86982 MAGETWO-86846 MAGETWO-86772 MAGETWO-86770 MAGETWO-86767 MAGETWO-86763 MAGETWO-86015 MAGETWO-86002 MAGETWO-73161 MAGETWO-80908 MAGETWO-84209 MAGETWO-84992 MAGETWO-77767 MAGETWO-84480 MAGETWO-83329 MAGETWO-86117 MAGETWO-83977 MAGETWO-84804 MAGETWO-84413 MAGETWO-83974 MAGETWO-82062 MAGETWO-80342 MAGETWO-80738 MAGETWO-85947 MAGETWO-83676 MAGETWO-86132 MAGETWO-85661 MAGETWO-77840 MAGETWO-82061 MAGETWO-81901 MAGETWO-73303 MAGETWO-83343 MAGETWO-83910 MAGETWO-70725 MAGETWO-83754 MAGETWO-73275 MAGETWO-75217 MAGETWO-83958 MAGETWO-87023 MAGETWO-71662 MAGETWO-82078 MAGETWO-84397 MAGETWO-87030 MAGETWO-86452 MAGETWO-85871 MAGETWO-85205 MAGETWO-84967 MAGETWO-84884 MAGETWO-83621 MAGETWO-82451 MAGETWO-82104 MAGETWO-81431 MAGETWO-81189 MAGETWO-73002 MAGETWO-72420 MAGETWO-71790 MAGETWO-71272 MAGETWO-70612 MAGETWO-83366 MAGETWO-85590 MAGETWO-85650 MAGETWO-87844 MAGETWO-89306 MAGETWO-85842 MAGETWO-88282 MAGETWO-88111 MAGETWO-71374 MAGETWO-85904 MAGETWO-87445 MAGETWO-86736 MAGETWO-83899 MAGETWO-86938 MAGETWO-88108 MAGETWO-87963 MAGETWO-87815 MAGETWO-45775 MAGETWO-89538 MAGETWO-89453 MAGETWO-89337 MAGETWO-89261 MAGETWO-89273 MAGETWO-89080 MAGETWO-84507 MAGETWO-86670 
 -->* 
 -->  

<!--- NOT A BUG   MAGETWO-73011 MAGETWO-83817 MAGETWO-86682-->

<!--- WON'T FIX MAGETWO-72116 MAGETWO-64518 MAGETWO-64534 MAGETWO-72116 MAGETWO-72116 MAGETWO-83818 MAGETWO-84772 MAGETWO-84773 MAGETWO-85138 MAGETWO-85983 MAGETWO-81082 MAGETWO-77425 MAGETWO-70376-->

<!--- CANNOT REPRODUCE MAGETWO-58206 MAGETWO-61056 MAGETWO-64734 MAGETWO-68799 MAGETWO-69847 MAGETWO-85986 MAGETWO-88104 MAGETWO-86279 MAGETWO-84074 MAGETWO-86997 MAGETWO-82816 MAGETWO-82052 MAGETWO-81187 MAGETWO-74380 MAGETWO-73075 MAGETWO-71145-->


## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.




### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Open Source 2.2 General Availability (GA) using Composer.


{% include install/releasenotes/ce_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
