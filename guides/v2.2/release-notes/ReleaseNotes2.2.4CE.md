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
*Patch code and release notes published on March, 2018.*



We are pleased to present Magento Open Source 2.2.4. This release includes new tools and numerous functional fixes and enhancements, plus a substantial number of contributions from the wider Magento community.


## Highlights

Look for the following highlights in this release:

* Significant new bundled extensions that will enhance merchants' ability to : Amazon Pay, Vertex, and Klarna Payments. 
    * Amazon Pay. 
    * Vertex.https://marketplace.magento.com/pixafy-tax.html#product.info.details.release_notes
    * Klarna Payments. For more information on Klarna products, see [Klarna Payments](https://marketplace.magento.com/klarna-m2-payments.html#product.info.details.release_notes). 

* Numerous fixes and enhancements to Magento Shipping and DotMailer

* Fixes and enhancements to core features, including significant improvements to performance.

* Almost 200 community contributions. These community contributions include performance-tuning enhancements plus at least 80 engineering fixes. 


### New Features


Looking for more information on these new features as well as many others? Check out [Magento 2.2 Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Open Source User Guide](http://docs.magento.com/m2/ce/user_guide/getting-started.html).


## Fixes and enhancements


### Installation, setup, and deployment
<!--- MAGETWO-86496 -->* The magento backup command fails under magento 2.2.1. There was no such issue under magento 2.1.8. They are no errors in the database log. Previously, an issue with the database backup process caused the backup process to fail.  *Fix submitted by [Jagriti Joshi](https://github.com/jagritijoshi) in pull request 13066*. [GitHub-12877](https://github.com/magento/magento2/issues/12877)


<!--- MAGETWO-86045 -->* Some of the links insode theMagento installer to magento installation documentation devdocs are outdated. This PR fixes this within progress.phtml. *Fix submitted by [Jonas Hünig](https://github.com/jonashrem) in pull request 12857*.


<!--- MAGETWO-84506 -->* Add command `app:config:status` to check whether config propagation is up to date. This command can be used to decide whether `app:config:import` execution is needed during deployments. On version 2.2 a new command `setup:db:status` was added to decide whether executing `setup:upgrade` is required. The purpose of this command was to add the possibility of deploying without executing `setup:upgrade` if module versions are up to date.
With the same objective, a command to check the config status is needed to decide whether `app:config:import` is needed.

*Issue*
If `setup:upgrade` is not executed, we need to always execute `app:config:import` because there is no way to know, if config files are up to date or not. This will mean, we still need to set the maintenance and we cannot simply switch the code to the new version. enhancement *Fix submitted by [Juan Alonso](https://github.com/jalogut) in pull request 12441*.


<!--- MAGETWO-84125 -->* When we start setup:rollback wrong name file was used. Now it is valid. Previously, database roll out failed.  *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 12108*. [GitHub-12064](https://github.com/magento/magento2/issues/12064)

<!--- MAGETWO-84081 -->* ideally you'd be able to grant users access without giving them full rights. For 3rd party integrators for example. Previously, It's currently not possible to set access to Integrations (API access) for Admin roles. They are only available when Role Resources is set to all [GitHub-9684](https://github.com/magento/magento2/issues/9684)

<!--- MAGETWO-81841 -->* Create CLI command which will make possible to enable/disable Magento Profiler. Provide a description of the changes proposed in the pull request. Adjusted `app/bootstrap.php` to have it read out the flagfile `var/profiler.flag` to enable the profiler and added CLI commands to create and remove the file. [GitHub-9277](https://github.com/magento/magento2/issues/9277)



<!--- MAGETWO-81740 -->* Changed side-menu.phtml to have naming in line with the naming in home.phtml. Component was the name in prior to Magento 2.2
Updated the less files to reflect these changes and switched the icons in the menu. The Icons for "Extension Manager" and "Module Manager" are inconsistent in the main content area and left-hand menu of the Web Setup Wizard.

Updated compiled setup.css file. *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 11388*. [GitHub-11236](https://github.com/magento/magento2/issues/11236)


<!--- MAGETWO-80111 -->*  Keep maintenance mode on if it was previously enabled. When enabling maintenance mode it will get disabled after using one of the following commands:
`bin\magento module:uninstall`
`bin\magento setup:backup`
`bin\magento setup:rollback`
`bin\magento theme:uninstall`
`bin\magento deploy:mode:set production`
The changes in this PR will first check or maintenance mode was already enabled. If so, it will skip disabling maintenance mode after executing the command.

*Fix submitted by [Joke Puts](https://github.com/jokeputs) in pull request 11052*. [GitHub-9918](https://github.com/magento/magento2/issues/9918) 

 
<!--- MAGETWO-85778 -->* Match flexible static file version in nginx sample config. Magento 2.2 allows you to specify a custom version for static files being deployed. That means it may not necessarily be numeric like it is when using the default timestamp version numbers. This generalizes the nginx sample config to match custom versions as well. *Fix submitted by [Scott Buchanan](https://github.com/scottsb) in pull request 12521*. 



<!--- MAGETWO-85274 -->* Update CrontabManager.php If crontab is already populated, 'php bin/magento cron:install' adds '#~ MAGENTO START' and the rest of code directly to the last row of crontab without any spaces. *Fix submitted by [Michele Fantetti](https://github.com/WaPoNe) in pull request*.



<!--- MAGETWO-85744 -->*  Composer does not check availability of the "bcmath" php module. But Magento framework uses "bccomp" function in getBatchSize method of the Magento\Framework\DB\FieldDataConverter class. *Fix submitted by [Mobecls](https://github.com/Mobecls) in pull request 12768*.



<!--- MAGETWO-88149 -->* Remove forced setting of cache_lifetime to false in constructor and set default cache_lifetime to 3600
In investigating the issue it was found that the footer block does not have a cache lifetime set and it also has code in its constructor to set the cache lifetime to false. This pull request removes the forcing of cache lifetime to false and sets the default value to 3600 as done so in the \Magento\Theme\Block\Html\Topmenu block. *Fix submitted by [Barry vd. Heuvel](https://github.com/zolat) in pull request 13762*.


<!--- MAGETWO-87975 -->* Add option to add IP address to existing list *Fix submitted by [zolat](https://github.com/barryvdh) in pull request 13586*.




<!--- MAGETWO-87900 -->*  Add option "lock-config" for shell command "config:set" In most cases, configuration settings should be shared among all development, staging and live instances of a shop. To achieve this, you can use the same mechanism as with the --lock switch described in http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-config-mgmt-set.html.

The only difference is that the configuration values will be stored in app/etc/config.php instead of app/etc/env.php. This file should usually be included in the VCS and thus shared between instances.
*Fix submitted by [Andreas von Studnitz](https://github.com/avstudnitz) in pull request 13280*.



<!--- MAGETWO-87859 -->*  Show redirect_to_base config in store scope. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 13614*.


<!--- MAGETWO-87856 -->*  Added ability deploying static content on demand in production mode. As a merchant, I want static content to be generated on the fly, so my store's downtime is lower and cache can handle the loads. 

Improved "Production Mode" to support SC generation on the fly is implemented
possibility to turn ON/OFF this generation SC in production mode.

enhancement




<!--- MAGETWO-87838 -->* Show maintenance IP-address without commas 

When looking at existing IP-address for the maintenance status, they are shown with commas. But when setting them, commas are not accepted. This is a pretty trivial change, but makes it easier to copy, modify and paste the list of IP-addresses. *Fix submitted by [Barry vd. Heuvel](https://github.com/barryvdh) in pull request 13587*.





<!--- MAGETWO-87744 -->* Ensure DeploymentConfig Reader always returns an array. When a empty configuration file is ready, this could result in loading invalid configuration, for example,  just `1` instead of an array. This will lead to problems with other code, expecting a valid array. *Fix submitted by [Barry vd. Heuvel](https://github.com/barryvdh) in pull request 13584*.




<!--- MAGETWO-83782 -->*   Cron_schedule forever increasing in size. Lots of pending jobs never cleared. The size of cron_schedule table is constantly increasing every minute. The majority of the jobs are in the pending state. Some are marked as success. The cronjob steadily increases in the time taken to complete, at the moment it is taking around 30 seconds to complete, during which time, mysql and php are taking up heavy CPU usage.

A MYSQL query log shows Magento churning through all the pending requests, but they are never marked as success. Hence the ever increasing list of jobs to run. [GitHub-11002](https://github.com/magento/magento2/issues/11002) 




<!--- MAGETWO-82288 -->* Add MagentoStyle as Console Input/output helper object 

..to allow easier access to io helpers in symfony/console

Description
Gives a helper object to access styling objects in symfony console easier. *Fix submitted by [Wesley Guthrie](https://github.com/wesleywmd) in pull request 11504*.


### Bundle 
<!--- MAGETWO-86022 -->* Fix notice during Update Bundle Product without changes. If we need to update (not new) bundle product and edit any Bundle Items then the saving process works fine.
If we assign a new category and image to the product then the saving process doesn't work.

*Fix submitted by [dzianis-yurevich](https://github.com/dzianis-yurevich) in pull request 12734*. [GitHub-6916](https://github.com/magento/magento2/issues/6916)




<!--- MAGETWO-86882 -->* Duplicating Bundle Product Removes Bundle Options From Original Product.Keeps bundle options intact in original product after duplicate. *Fix submitted by [MattUnity](https://github.com/MattUnity) in pull request 1217*.




### Catalog


<!--- MAGETWO-87447 -->*  Problem happens during updating product stock item data via REST Post/PUT request /V1/products when previously product was created via REST API call without specified ?stock_item? in extension attributes of call Body.
*Fix submitted by [nuzil](https://github.com/nuzil) in pull request 13494*.




<!--- MAGETWO-87477 -->*  Method getUrl in Magento\Catalog\Model\Product\Attribu…
*Fix submitted by [Igor Tregub](https://github.com/igortregub) in pull request 13498*.


Method getUrl in Magento\Catalog\Model\Product\Attribute\Frontend returns image url with double slash 

Expected result
returns image url without double slash
Actual result
will be returned image with double slash




<!--- MAGETWO-73696 -->* Sorting by price column in admin doesn't count disabled products
Fixed issue: Sorting by price column in admin doesn't count disabled products
Expected result

The number of records found should remain the same when sorting on different columns in the Catalog Product grid.

Actual result

When sorting by price, the product count is reduced by the number of disabled products.




<!--- MAGETWO-75786 -->* Fixed issue with incorrect count for category filter at layered navigation for configurable product with no available options

Incorrect count for category filter at layered navigation for configurable with no available options



<!--- MAGETWO-81916 -->* 

*Fix submitted by [Manu Gonzalez Rodriguez](https://github.com/manuelson) in pull request 11389*.


[GitHub-11341](https://github.com/magento/magento2/issues/11341)


Attribute category_ids issue

Expected result

Category ids not visible on the front because users are not interested in knowing id categories.

Actual result: exception



<!--- MAGETWO-81942 -->* A solution for Product Repeat Issue after filter on category listing page.
I have traced the issues and finally, I have found the problem. This issues magento/magento2#11139 is occurring just because of product position. When some products position are same on collection at that time we have faced this issue.

Product Repeat Issues after apply price filter on category listing page. Same products display on next page. Also sometimes it gives me random products.

Expected result
Product Should not be repeated on category page when we filter.
*Fix submitted by [Mayank Zalavadia](https://github.com/mayankzalavadia) in pull request 11429*.


[GitHub-11139](https://github.com/magento/magento2/issues/11139)



<!--- MAGETWO-82313 -->* REST API - Only associate automatically product with all websites when creating product in All Store Views scope

*Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11444*.



Updating a product via the REST API using PUT /rest/all/V1/products/example_sku assigns it to all websites automatically.

[GitHub-11324](https://github.com/magento/magento2/issues/11324)

Expected result
Products should be assigned to same stores as it was previously (none) as I didn't pass website_ids in extension attributes and I didn't call V1/products/example_sku/websites
Actual result
Product is assigned to all websites even though I didn't explicitly send any website associations



<!--- MAGETWO-82464 -->* 

*Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11617*.


[GitHub-6770](https://github.com/magento/magento2/issues/6770)


Re-saving a product attribute with a different name than it's code results in an error
Steps to reproduce
Add a couple of options
Save the attribute
Add a couple of options more
Re-save the attribute
Expected result
Options should be added
No errors should be shown
Actual result
Upon re-saving, Magento tries to re-create the attribute code:




<!--- MAGETWO-83399 -->* This solution solves the issue when you want to not have toolbar block set on product listing. The reason why toolbar persisted even after that was explicit removed from layout configuration, it's because the method Magento\Catalog\Block\Product\ListProduct:getToolbarBlock always returns a toolbar block.

Cannot remove product_list_toolbar in XML

Expected result
The toolbar should be removed from the product list pages.
Actual result
The toolbar remains on the page

[GitHub-9413](https://github.com/magento/magento2/issues/9413)


*Fix submitted by [Marius](https://github.com/mariuscris) in pull request 11473*.




<!--- MAGETWO-84018 -->* Wrong return type for getAttributeText($attributeCode) #
When I pass the a multi-select attribute code to getAttributeText($attributeCode) I get an array instead of an string.

Expected result
I would expect the return to be a string type as the return type says.

Actual result
But the result is instead an array of attribute values.


*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12003*.



<!--- MAGETWO-84087 -->* Can't add customizable options to product

If you add custom tab with a name "options" to product form via attribute set, data-index for this tab and options from custom-options will be the same, so I changed targetName from index to name.

[GitHub-11792](https://github.com/magento/magento2/issues/11792)


Can't add customizable options to product
Expected result
A new customizable option form should appear
Actual result
Nothing happens on the page
A 'Uncaught TypeError: Cannot read property 'apply' of undefined' error is thrown in the console

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 11965*.




<!--- MAGETWO-84311 -->* Single quotation marks are now decoded properly in admin attribute option input fields.

[GitHub-12127](https://github.com/magento/magento2/issues/12127)


Expected result
In the admin, the attribute option value text input should say "Nature's Way Supplements"
If you check the value in the database, it should be "Nature's Way Supplements"
Actual result
The text input says: Nature&#039;s Way Supplements
The database entry says: Nature&#039;s Way Supplements


*Fix submitted by [Erfan](https://github.com/erfanimani) in pull request 12133*.





<!--- MAGETWO-84367 -->* Can't save emoji in custom product options

Expected result
Either cart would render fine or show an error that specific emoji insertion is not supported
Actual result
The cart is empty 

*Fix submitted by [Carlos Lizaga](https://github.com/KarlDeux) in pull request 12253*.





<!--- MAGETWO-84411 -->* Unused product attributes display with value N/A or NO on storefront. #12057
Attributes with no value set should not display on storefront

[GitHub-6634](https://github.com/magento/magento2/issues/6634), [GitHub-9961](https://github.com/magento/magento2/issues/9961)


*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12057*.




<!--- MAGETWO-84498 -->* Fix delay initialization options for customized JQuery UI menu widget
describes the ability to set the delay on the JQuery widget opening/closing with an option 'delay'.

However, in the code, no such option appears and two undocumented options that aren't used do appear.

This PR cleans up the unused variables and passes the delay parameter into JQuery menu widget so it is used.

DEVDOCS

*Fix submitted by [Sam Carr](https://github.com/scazz010) in pull request 12161*.






<!--- MAGETWO-84515 -->* Fixed missing 'size' and 'type' props on a third-party category images [Backport 2.2] #12443
Fixes hardcoded 'image' key when processing `ImageBackendModel` attribute.

*Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 12161*.



<!--- MAGETWO-84652 -->* Category page X-Magento-Tags headers contains product cache identities even which category display mode is set to "Static block only"
When varnish is selected as the cache engine, If there are products associated to a respective category, and the category `display mode` is set to `Static block only`, on the category page `X-Magento-Tags` headers contains product item cache identities even when no product is displayed for the page.

*Fix submitted by [Atish Goswami](https://github.com/atishgoswami) in pull request 12466*.




<!--- MAGETWO-84665 -->* Can't delete row in dynamicRows component

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 921*. [GitHub-8830](https://github.com/magento/magento2/issues/8830)



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



<!--- MAGETWO-84808 -->* Missing cascade into attribute set deletion.

[GitHub-12110](https://github.com/magento/magento2/issues/12110)


Steps to reproduce
Got to attributes set admin page
Delete your custom attributes set
Confirm you want to remove attached products also
Expected result
Table url_rewrite should be cleaned from references to removed products
A new product named like an old one should be insertable via API or admin interface
Actual result
Impossible to add a new product named like an old one because a request_path with the same value as computed already exists in table url_rewrite;

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 12167*.






<!--- MAGETWO-84949 -->* Added correction for og:type content value


*Fix submitted by [Atish Goswami](https://github.com/atishgoswami) in pull request 12530*.






<!--- MAGETWO-85293 -->*  Verbiage Update Required: Product Image Watermark size Validation Message.

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 985*. [GitHub-12613](https://github.com/magento/magento2/issues/12613)

Expected result
The system expects the image size defined in 200x300 format as said in on-screen example format. But the validation message is misleading which has uppercase X instead lowercase x.
Actual result
Validation Message Screenshot



<!--- MAGETWO-85294 -->*  Product change sku via repository. 

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 984*. [GitHub-12535](https://github.com/magento/magento2/issues/12535)


Expected result
saved
Actual result
It catches as NoSuchEntityException and creates as a new product




<!--- MAGETWO-85301 -->* catalogProductTierPriceManagementV1 DELETE and POST operation wipes out media gallery selections when used on store code "all". 

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 977*. [GitHub-10797](https://github.com/magento/magento2/issues/10797)



With our new integration, make a curl request to delete the tier price, using the store code all (NOT default, that works just fine).

Expected result
The tier price for a quantity of 3 should be deleted from the product, and nothing else.
Actual result
The tier price for a quantity of 3 is deleted from the product, AND all the image selections for the product are deleted as well. (Images are still part of the product's image gallery, but the selections are lost).



<!--- MAGETWO-85307 -->* Sort by Price not working on CatalogSearch Page in Magento 2 

[GitHub-12468](https://github.com/magento/magento2/issues/12468)

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 929*. 

I got an issue on catalogsearch page that sort by price not working after change Product Listing Sort by Price from magento backend.





<!--- MAGETWO-85545 -->* catalog:images:resize = getimagesize(): Read error!

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1000*. 


[GitHub-8204](https://github.com/magento/magento2/issues/8204)

When I attempt to execute:
php bin\magento catalog:images:resize

After a period of time, I receive this error:

Notice: getimagesize(): Read error! in /vendor/magento/module-catalog/Model/Product/Image.php on line 410

However, no report is pushed into any log file, so there is no way to find out the file causing the read error.


Expected result
It should just skip the offending file, and/or update the log file to indicate which/where the problematic file resides.




<!--- MAGETWO-85546 -->* 2#12259Save and Duplicated product not working 	

[GitHub-12259](https://github.com/magento/magento2/issues/12259)

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 983*. 





<!--- MAGETWO-85636 -->* 6486: Unable to save certain product properties via Rest API 

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1018*. 


Unable to save certain product properties via Rest API

[GitHub-6486](https://github.com/magento/magento2/issues/6486)


Steps to reproduce
Create a product via the Rest API, including a price and weight
Expected result
The product is saved with the price and weight
Actual result
The price and weight are not saved and are not returned in the result of the POST request.




<!--- MAGETWO-86016 -->* Latest Google Chrome Browser issue with duplicate id 
Latest Google Chrome Version { Version 63.0.3239.84 (Official Build) (64-bit) } detects duplicate ids and console.log an ERROR


https://github.com/serhii-balko

id="email".
Some pages (e.g. Login Page, Contact Page, ...) contains input element with id="email" too.
Internet browsers detects duplicate ids and console.log an ERROR.

*Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1036*. 




<!--- MAGETWO-86019 -->* 
Fixed hasDataChanges attribute for loaded EAV collection items

[GitHub-12374](https://github.com/magento/magento2/issues/12374)


Model hasDataChanges always true

Expected result
hasDataChanges returns false because no data has been changed
Actual result
hasDataChanges returns true
Performance impact on $category->save()

*Fix submitted by [virtual97](https://github.com/virtual97) in pull request 12736*. 







<!--- MAGETWO-86021 -->* Add more parameters to ajax:addToCart 
*Fix submitted by [Renon Stewart](https://github.com/srenon) in pull request 12875*. 

The SKU by itself is not very useful because for most third-party integration you will need at minimum SKU and qty.





<!--- MAGETWO-86023 -->* magento/magento2#12294: Bug: Adding Custom Attribute - The value of A… 

*Fix submitted by [virtual97](https://github.com/virtual97) in pull request 12755*. 

xpected result
Attribute should save rather than trying to collect data that can no longer be entered.



<!--- MAGETWO-86662 -->* Adding 'is_saleable' attribute to sort of product collection causes exception and adding 'is_salable' has no effect. 
[GitHub-7768](https://github.com/magento/magento2/issues/7768)

n Magento\Catalog\Model\ResourceModel\Product\Collection, addAttributeToSort() has the following lines:

        } elseif ($attribute == 'is_saleable') {
            $this->getSelect()->order("is_saleable " . $dir);
            return $this;
        }
But the generated SQL query selects stock_status_index.stock_status as 'is_salable', not 'is_saleable'. So adding 'is_saleable' causes an SQL exception and since 'is_salable' is not a product attribute, it silently fails to be added to the SQL statement.

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1045*. 

Expected result
The product stock_status is included in the query sort clause.
Actual result
Exceptions:





<!--- MAGETWO-86547 -->* Add failsafe to items.phtml 

*Fix submitted by [Sam Granger](https://github.com/samgranger) in pull request 13086*. 

We received a warning that $exist is undefined - not entirely sure what the exact scenario was but adding this as a failsafe.
I have made sure that $exist is defined (null) in the 'default' and 'other' case.






<!--- MAGETWO-84267 -->* #11528 can't save customizable options 

change behavior to close modal
Validation prevents form closing

Steps to reproduce
Go to admin
Go to catalog
Select product
Click advanced pricing
Click add customer group, do not fill any value
Try to close
Expected result
Form is closed
Actual result
Form does not close, validation issue is triggered

*Fix submitted by [LuisMi](https://github.com/luismiguelyangehuaman) in pull request 12048*. 


<!--- MAGETWO-85288 -->* 8624: Stock status not coming back after qty update S
Stock status not coming back after qty update #8624

Steps to reproduce
Set simple product qty to zero (and you will see it will turns to Out of Stock) & hit Save
Set same product qty to 1 and save
Expected result
After insert qty more than zero - changed new stock status In Stock

Actual result
Still Out of Stock

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 955*. 





<!--- MAGETWO-82949 -->* Product's are linked to categories without notice of any website. The visual merchandiser shows to lowest price of in stock and active simples that are associated with the configurable. The stock check ignores the website scope so if a simple is in stock on the website level but out of stock on default level it should been ignored to determine the lowest price. This commit fixes that issue.

Before the fix:

The price of the out of stock simple product was shown.
After the fix:

The price '0,00' is shown.

Visual Merchandiser show prices of out of stock simple products for the associated configurable product




<!--- MAGETWO-86663 -->* 11897: Catalog product list widget not working with multiple sku.

[GitHub-11897](https://github.com/magento/magento2/issues/11897)



Steps to reproduce
Added new catalog product list widget
added all condition with multiple SKU
Expected result
showing product with selected SKU on the page

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1050*. 


Actual result
it will not showing any product on the page and showing error as "We're sorry, an error has occurred while generating this email."




<!--- MAGETWO-85876 -->* Reorder adding of page layout handles

*Fix submitted by [Andreas Schrammel](https://github.com/aschrammel) in pull request 12807*. 


Add type-dependent layout handles before more specific ID/SKU layout
handles.

When updating a product page layout for a specific ID with `catalog_product_view_id_<product_ID>.xml` some changes may be overwritten by a less specific `catalog_product_view_type_<product_type>.xml`.



<!--- MAGETWO-87897 -->*  Refactoring: remove unuseful temporary variable

*Fix submitted by [Pierre Martin](https://github.com/real34) in pull request 13663*. 

…since there is no usage of $data in this method





<!--- MAGETWO-87847 -->* magento/magento2#11963: Magento 2.2 language switching not working on catalog and Product Pages 
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1143*. 


[GitHub-11963](https://github.com/magento/magento2/issues/11963)


 language switching not working on catalog and Product Pages

 It works fine in "development" mode, but doesn't work in "production" mode.



<!--- MAGETWO-87526 -->* URL rewrite for store is not created for child if parent category has non-default URL key on store


Subcategory url path will be updated for store view accordingly to url-path of its parent category 



<!--- MAGETWO-87514 -->* Override attributes when builder used multiple times

*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 13438*. 



Image builder is used few times with different parameters in [```\Magento\Catalog\Block\Product\AbstractProduct::getImage```]





<!--- MAGETWO-87496 -->*  Switch updatecart qty input validators to dynamic instead of hardcoding 

Currently, the edit cart product input has hardcoded validators which differ from the main PDP page. What is the reasoning for this? This prevents custom qty validators applied on normal PDP from applying when you update said product qty.

Currently, the edit cart product input has hardcoded validators which differ from the main PDP page. What is the reasoning for this? This prevents custom qty validators applied on normal PDP from applying when you update said product qty.

updateCart.phtml vs addtocart.phtml

This PR matches both updatecart.phtml and addtocart.phtml qty input validators. Now when you target, afterGetQuantityValidators it will apply to both inputs.

Maybe I am mistaken and there is a real reason they did not originally match?

*Fix submitted by [Gil Greenberg](https://github.com/gil--) in pull request 13462*. 




<!--- MAGETWO-87294 -->* Product Link Save Handler - Remove not used constructor dependency 
*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 13436*. 




### Cart and checkout


<!--- MAGETWO-83780 -->* address with saveInAddressBook 0 are still being added to the address book for new customers. If you place an order as a guest and set the save_in_address_book for an address on 0, that address will still be copied to the customer address book when registering as a new customer on the checkout success page.

If you place an order as a guest and set the save_in_address_book for an address on 0, that address will still be copied to the customer address book when registering as a new customer on the checkout success page.

[GitHub-7691](https://github.com/magento/magento2/issues/7691)



<!--- MAGETWO-85297 -->* Custom Checkout Step and Shipping Step are Highlighted and Combined upon Checkout page load
Steps to reproduce
Create a custom checkout step. Set the step to appear first.
Start the checkout process
Both my custom step and the shipping step are displaying and highlighted
Upon using the next buttons the steps show up in their own section
Expected result
Shipping step should be hidden since it is now step 2

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 975*. 



<!--- MAGETWO-85317 -->* Currency change, Bank Transfer but checkout page shows "Your credit card will be charged for"
*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 993*. 





<!--- MAGETWO-86506 -->* Fix JS error on cart from postcode validation when 'US' is deselected as an allowed country

*Fix submitted by [codekipple](https://github.com/codekipple) in pull request 13051*. 

To get this error the Magento store has to have deselected 'United States' in the 'Allowed Countries' admin option. Select any country except 'United States' as the default country:- Admin -> Stores -> configuration -> General -> Default Country




<!--- MAGETWO-86543 -->* Fix Magento_Checkout address formatting 
*Fix submitted by [nfourteen](https://github.com/nfourteen) in pull request 13082*. 


<!--- MAGETWO-86896 -->* New Cart Rule : Small styles issue because of styles…
 Text is cut because of left margin.

Steps to reproduce
Have configured one website with name SHOP.NAME
Go to Marketing -> Cart Rules -> New Cart Rule
When page load go immediately (no input provided) to section "Store View Specific Labels" and unfold
Check if labels are on left and they are cut. Even more, they duplicate.
Expected result
In one line with others item. After all, not cut.

*Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request*. 




[GitHub-12231](https://github.com/magento/magento2/issues/12231)



<!--- MAGETWO-86617 -->* Make customer name link to customer dashboard 
When checking out as a guest customer and click "create an account" on success page to create a customer account, you will not be able to click on the customer name to jump to the customer record.
PR #

*Fix submitted by [Renon Stewart](https://github.com/srenon) in pull request 12998*. 




<!--- MAGETWO-87340 -->* Require Customer To Be Logged In To Checkout 


*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1148*. 



[GitHub-7848](https://github.com/magento/magento2/issues/7848)





### Configurable products


<!--- MAGETWO-86781 -->* fixed issue prices aren't readable when using custom price symbol. While assigning prices to configurable products, prices aren's readable when using custom price symbol. When creating configurations on a configurable product, while assigning prices to configurable products, prices aren's readable when using custom price symbol.
*Fix submitted by [pradeep-wagento](https://github.com/pradeep-wagento) in pull request 13025*. 


[GitHub](https://github.com/magento/magento2/issues/12430)



<!--- MAGETWO-86311 -->*  Sort configurable attribute options by sort_order. Configurable attribute options are not sorted on the product page.
*Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request 12963*. 


[GitHub-7441](https://github.com/magento/magento2/issues/7441)





<!--- MAGETWO-85782 -->* 
Currency symbol overlaps entered attribute option's price while creating Configurable Product Currency symbol overlaps entered attribute option's price while creating Configurable Product

Steps to reproduce
Log in to Admin
Go to Catalog > Products
Start creating configurable product.
Click Create Configurations button & proceed up to step 3.
Select Apply unique prices by attribute to each SKU in price section.
Select any attribute and start entering option's price.
Expected result
Currency symbol doesn't overlap entered attribute option's price while creating Configurable Product.

Actual result
Currency symbol overlaps entered attribute option's price while creating Configurable Product, see screenshot for details

*Fix submitted by [Vasilina](https://github.com/EfremovaVI) in pull request*. 


<!--- MAGETWO-85777 -->*  Product configuration creator does not warn about invalid SKUs 

Product configuration creator does not warn about invalid SKUs before attempting to save/create the configuration products, thus losing the product configurations set up.
Expected result
There should be warnings about invalid (too long) SKUs.
"Save" button would not work unless the (automatically generated from name + text swatch value) SKUs are edited to be valid (shortened).
Actual result
There are no warnings about invalid SKUs.
Clicking "Save" refreshes the page (losing the unsaved configurations).
Error message 'Product with SKU " Sony Alpha a7R III Mirro -With Free Storage Kit-With Free Storage Kit" does not exist' is displayed.

[GitHub-11953](https://github.com/magento/magento2/issues/11953)

*Fix submitted by [Zamaroka](https://github.com/zamoroka) in pull request 12737*. 


<!--- MAGETWO-85634 -->* Incorrect partial attribute (EAV) reindex (Update by Schedule) for configurable product with childs visibility "Not Visible Individually" (Update by Schedule) for configurable product with childs visibility "Not Visible Individually"

Incorrect partial attribute (EAV) reindex (Update by Schedule) for configurable product with childs visibility "Not Visible Individually


*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1023*. 

[GitHub-12667](https://github.com/magento/magento2/issues/12667)





<!--- MAGETWO-85286 -->*  LinkManagement::getChildren() does not include product visibility. LinkManagement::getChildren() does not include product ID's (and visibility) 

When I'm using the Service Contract Magento\ConfigurableProduct\Api\LinkManagementInterface::getChildren($sku), I get an array of child products, but those products don't seem to be complete. For instance, getId() and getVisibility() returns NULL on those child products.
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 986*.



<!--- MAGETWO-82888 -->* Product Price indexer stuck during reindexing. After upgrading to 2.2.0 catalog_product_price reindex takes more than 1h 30m.
But on 2.1.x it was about 10m.




<!--- MAGETWO-86918 -->* Saving configurable product erases and reinserts records in table "catalog_product_super_link" even with no changes

After saving a configurable product, its child products (super links) are not deleted if there were no changes. So AUTO_INCREMENT identifier (link_id) is not growing every time.

Saving a configurable product, its child products (super links) are deleted and then re-inserted in catalog_product_super_link, causing the AUTO_INCREMENT identifier (link_id) to grow every time. Even if no changes were made before saving. This database column is limited to int(11), so it could be filled up quickly on big sized catalogues in multi-website installations.

EXPECTED RESULTS:
Product records inside catalog_product_super_link table should not be updated.

ACTUAL RESULTS:
Product records inside catalog_product_super_link table have now a new, bigger link_id value.
BEFORE:



### Customer accounts

<!--- MAGETWO-86427 -->* Add trim filter to first, middle and lastname

When you create a new contact, if there is a leading or trailing space with no characters after, those are not being trimmed.

Names should be saved with no trailing/leading spaces as this breaks many search tools.
*Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request 12964*. 

[GitHub-10415](https://github.com/magento/magento2/issues/10415)





<!--- MAGETWO-85580 -->* invalid parameter configuration provided for argument
*Fix submitted by [Tomasz Gregorczyk](https://github.com/Tomasz-Silpion) in pull request 12964*. 



<!--- MAGETWO-85300 -->* Silent error when an email template is not found 

Steps to reproduce
Create a custom controller, sending a custom mail, mostly like this
Make a mistake in the template file name
Try to send the mail
Expected result
The mail is correctly sent with content
Actual result
The mail is correctly sent but the body is empty

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. 



[GitHub-8437](https://github.com/magento/magento2/issues/8437)




<!--- MAGETWO-84862 -->* Too many password reset requests even when disabled in account address book page.

When attempting to reset a customer's password via the admin, the system tells me 'Too many password reset requests' even when I have disabled the 'max wait time between password resets' in the store configuration settings.

When attempting to reset a customer's password via the admin, the system tells me 'Too many password reset requests' even when I have disabled the 'max wait time between password resets' in the store configuration settings.
*Fix submitted by [Cole Hafner](https://github.com/coleHafner) in pull request*. 

[GitHub-11409](https://github.com/magento/magento2/issues/11409)


<!--- MAGETWO-84439 -->* Remove unnecessary use operator for Context, causes 503 error in account address book page.

 Unable to open Address book after account creation #12180
*Fix submitted by [Chris Pook](https://github.com/chris-pook) in pull request 12220*. 

[GitHub-12180](https://github.com/magento/magento2/issues/12180)




<!--- MAGETWO-83026 -->* Made method public so a plugin is possible.
*Fix submitted by [Derrick Heesbeen](https://github.com/dheesbeen) in pull request 11878*. 


Customer isConfirmationRequired method exists in two places.
The method in the customer object is public. Which makes it possible to plugin it. 
The method in the accountManagement object is protected. Which makes it impossible to plugin it.

This PR only makes the method in isConfirmationRequired in AccountManagement class public.





<!--- MAGETWO-82635 -->* Always add empty option for prefix and/or suffix if optional 

PR #11462




<!--- MAGETWO-85741 -->* Fix Back to Sign in url on confirmation form 
Storefront Back to Sign in button does not work as expected
Expected result
Customer is redirected to Sign In form

Actual result
Page is just reloaded
*Fix submitted by [StasKozar](https://github.com/StasKozar) in pull request 12759*. [GitHub-12715](https://github.com/magento/magento2/issues/12715)







<!--- MAGETWO-85672 -->* 
When disabling the Redirect Customer to Account Dashboard after Logging in setting, the login url should include an referer. This works but not in the window.checkout object.

Expected result
The window.checkout.customerLoginUrl contains an url which includes the referer in base64 encoding. For example: https://myshop.com/customer/account/login/referer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0
Actual result
The login url without referer. For example: https://myshop.com/customer/account/login
*Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request 12630*.


[GitHub-12627](https://github.com/magento/magento2/issues/12627)



<!--- MAGETWO-86989 -->* 
Add the domReady! statement 

When you are on the cart page and click on the 'edit' link for a product you are being redirected to the PDP and the current amount for that product that is in the cart should be filled in the amount field on the PDP.

When you are on the cart page and click on the 'edit' link for a product you are being redirected to the PDP and the current amount for that product that is in the cart should be filled in the amount field on the PDP.

In production mode when the settings minify and merge the javascript files in Stores > Configuration > Advanced > Developer are enabled the jquery selector sometimes (depending on the amount of javascript files) returns no values because the DOM is not ready when the script is executed.

By adding the domReady! statement in the require part we are sure that when the jQuery selector is being filled the DOM is ready.
*Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request 13310*.




### Dashboard


<!--- MAGETWO-86443 -->* Make "top destinations" config field configurable on store level 
*Fix submitted by [Andreas von Studnitz](https://github.com/avstudnitz) in pull request 13052*.


This makes the configuration field "Top destinations" configurable on store level. It was only available on global level before.
Fixed Issues
You may want to set different Top destination countries depending on website or store view. You could not do that up to now.






<!--- MAGETWO-86205 -->* Handle multiple errors in customer address validation when shown in adminhtml customer edit page 


When multiple validation errors are found trying to save a customer address, errors are not properly shown in adminhtml customer edit page
When multiple validation errors are found trying to save a customer address, errors are not properly shown in adminhtml customer edit page
*Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 12922*.



<!--- MAGETWO-86203 -->* 

Display scroll bar of admin store switcher in OSX computers. 

PR #12931

if scrollbar is not displayed, people do not notice that the menu is scrollable and you think there is an issue with the stores that are not displayed





### Developer

<!--- MAGETWO-83869 -->* 
Added ability enable debugging in production mode
It's not possible to enable "log to file" (debugging) in production mode. Psr logger debug method does not work by the default in developer mode. 

PR #12207

Psr logger debug method does not work by the default when you just install & switch to the developer mode.
To make that works store config switcher should be turned on (see attached img, by the default, it's turned off).


[GitHub-11509](https://github.com/magento/magento2/issues/11509)
[GitHub-11882](https://github.com/magento/magento2/issues/11882)


It's not possible to change the "dev/debug/debug_logging" sys config field while in production mode. It should definitely be set to "No" as default (like when switching from developer/default to production) but you should be allowed to change this value even while in production mode.




<!--- MAGETWO-83120 -->* Fix error when generating urn catalog for empty misc.xml 


Fix error when generating urn catalog for existing empty `misc.xml`. I fixed this by creating another DomDocumentFactory, for PhpStorm specific `misc.xml`. This factory checks if the passed data is empty, and if so, create the `misc.xml` xml structure that `\Magento\Developer\Model\XmlCatalog\Format\PhpStorm` expects.

[GitHub-5188](https://github.com/magento/magento2/issues/5188)


Error generating URN-catalog when blank one exists
*Fix submitted by [Timon de Groot](https://github.com/tdgroot) in pull request 11686*.


### Directory

<!--- MAGETWO-85659 -->*  \Magento\Directory\Model\PriceCurrency::format() fails without conversion rate 

PR #1022
The issue is about the implementation of the method \Magento\Framework\Pricing\PriceCurrencyInterface::format().

Even though no conversion takes place during the formatting of the given amount, the method only works if a conversion rate from the base currency to the specified currency is configured.

There is no technical need for this limitation.
Expected result
The specified amount should be formatted in the specified currency.

Actual result
The specified amount is surprisingly rendered in the base currency.

[GitHub-6965](https://github.com/magento/magento2/issues/6965)






<!--- MAGETWO-85583 -->* 

States list is required in India for setting new tax (GST) implementation and for accuracy in shipping address.
This is list of regions need to be appended in InstallData in magento-directory module.

[GitHub-12378](https://github.com/magento/magento2/issues/12378)

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request*.


Selecting State/Province for India is now required and drop-down field with appropriate values is shown on Checkout page.




<!--- MAGETWO-86170 -->* 
Can't remove State is required for all countries

PR 12917
[GitHub-12894](https://github.com/magento/magento2/issues/12894)


### EAV attributes

<!--- MAGETWO-86240 -->* Naming collision in Javascript ui registry (backend) 

*Fix submitted by [Volodymyr Zaets](https://github.com/VladimirZaets) in pull request*.



The JS is broken in next case: when new configurable attribute is created with the code name that is equal to "index" property of any uiComponent on the page.

[GitHub-12555](https://github.com/magento/magento2/issues/12555)


Add a configurable attribute with attribute code set as "content", or any other name which exists as identifier on the product edit page (for example, "gallery", "review" ,"related").

Add it to the default attribute set

Edit a product.

Expected result
You can properly edit/save the product and add configurations setting that attribute.
Actual result
All kinds of Javascript issues arise when trying to save the product
This is because somehow most HTML elements end up in a registry and are then retrieved on various places.




<!--- MAGETWO-85875 -->* required attribute set id filter on attribute group repository getList


this will enable you to get the attribute groups via a single query for multiple attribute sets? 

*Fix submitted by [Marius Strajeru](https://github.com/tzyganu) in pull request 12105*.


[GitHub-11936](https://github.com/magento/magento2/issues/11936)




<!--- MAGETWO-85772 -->* Multiselect Attribute is not saved 

Fixed attribute loading for different entities in AbstractEntity

Multiselect Attribute is not saved for a product in the admin panel when it has a related product using another attribute set

Expected result

Multiselect Attribute should be saved for a product in the admin panel when it has a related product using another attribute set.

Actual result

Multiselect Attribute is not saved for a product in the admin panel when it has a related product using another attribute set
*Fix submitted by [awarche](https://github.com/awarche) in pull request 12767*.


<!--- MAGETWO-85579 -->* Attribute repository resets sourceModel for new attributes. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1012*.



[GitHub-10814](https://github.com/magento/magento2/issues/10814)


When creating a new product attribute through code, product attribute repository save method resets source model to null or something else. Therefore a new attribute is created with an empty option (in case of select or multiselect input type). This happens only for new attributes not when updating exiting attributes.

Expected Result
It is expected that when some data is set on a model, repository should not change or reset it.







<!--- MAGETWO-85302 -->*  Wrong invoice entity_model in table eav_entity_type. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 980*.


[GitHub-10123](https://github.com/magento/magento2/issues/10123)









<!--- MAGETWO-84272 -->* Update AbstractBackend.php 

PR #12120

when the validation message is returned, the attribute code is displayed.

That prevents a better translation for other languages, has been adjusted to return the label instead of the attribute code.






<!--- MAGETWO-72597 -->* Impossible to perform mass update on product with 60+ attributes in system
Add ability to perform mass update on product with 60+ attributes in system




<!--- MAGETWO-85833 -->* Stop the profiler when returning early in \Magento\Eav\Model\Config::getAttribute 

Magento\Eav\Model\Config::getAttribute doesn't stop the Profiler when returning early, and thus incorrectly reports run time in these cases.
This pull fixes it by stopping the profiler before returning
*Fix submitted by [Nick Anstee](https://github.com/nicka101) in pull request 12810*.


<!--- MAGETWO-87588 -->*  Fix json encoded attribute backend type to not encode attribute value multiple times 
*Fix submitted by [Tibor Kotosz](https://github.com/tkotosz) in pull request 13551*.

the json encoded attribute value loaded back correctly, but if you save a product muliple times then the attribute value will also be encoded muliple times which will cause issue during the next load.

This PR fixes the `beforeSave` method to only encode the attribute value when it is not encoded already.


Expected result:
Product is saved.

Actual result:
Product cant be saved and error message appear "Unable to unserialize value."






<!--- MAGETWO-87354 -->* Usage of deprecated each() function. this fix removes this deprecated function.
*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request*. 




### Email

<!--- MAGETWO-83741 -->* 
Sending emails from Admin in Multi-Store Environment defaults to Primary Store
*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. 


Steps to reproduce
Create two stores: ABC.com (primary) and XYZ.com
Have customer place order on XYZ.com
Go into admin, click on order from XYZ.com, and resend order confirmation email

Expected result
Should send email using FROM EMAIL and FROM NAME of store XYZ.com
Actual result
Magneto sends correct email content, but FROM EMAIL and FROM NAME are both from the primary store ABC.com instead of the store the customer used, XYZ.com. Creates confusion for customer as the FROM information is not the store from which they placed the order. Happens on any email resent from admin--confirmation, shipping, credit, etc.

[GitHub-11740](https://github.com/magento/magento2/issues/11740)



<!--- MAGETWO-86881 -->* Misleading feedback when sending tracking information email 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1245*.

. Create order with some non-virtual products.
2. Create invoice and shipment for created order.
3. Navigate to created shipment view page.
4. Press "Send Tracking Information" button and confirm sending email to customer.
5. Check success message is: "An email confirming the order is underway has been sent to the customer."
6. Change en_US.csv in app/code/Magento/Shipping or vendor/magento/module-shipping(in case of composer version), or create your own. Find line with 'An email confirming the order is underway has been sent to the customer.' and change translation to something like "An email confirming the order is underway has been sent to the customer. edited"
7. Clean cache, deploy static content.
8. Repeat steps 3 and 4.
9. Check success message has changed to "An email confirming the order is underway has been sent to the customer. edited".

[GitHub-5697](https://github.com/magento/magento2/issues/5697)


When clicking the “Send Tracking Information” button when viewing the shipment info the response is “You sent the shipment”.

Expected result
Notification telling the user that the email confirming the order is underway has been sent.

E.g. "An email confirming the order is underway has been sent to the customer.".

Actual result
Notification telling the user “You sent the shipment”.



### Frameworks

<!--- MAGETWO-86337 -->* Ability to sitch to default mode 

[GitHub-4292](https://github.com/magento/magento2/issues/4292)

Why can't one switch back to default mode ? 
Expected result
Mode switched back to default
Actual result
Error message appears: "Cannot switch into given mode 'default'".
*Fix submitted by [Etty](https://github.com/Etty) in pull request 12752*.




<!--- MAGETWO-87124 -->*  Update the Emogrifier dependency to ^2.0.0 
*Fix submitted by [Oliver Klee](https://github.com/oliverklee) in pull request 13132*.

Emogrifer 2.0.0 does not introduce any backwards-compatibilty-breaking
API changes. This version adds new features, fixes bugs and improves
the resulting HTML. So the update should be reasonably safe.



<!--- MAGETWO- 86654-->* X-Magento-Vary & PHPSESSID now have the same expiration time
Fix undeclared dependency magento/zendframework1 by magento/framework

*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 12990*. 


[GitHub-12967](https://github.com/magento/magento2/issues/12967)



<!--- MAGETWO-85290 -->* File Put Contents file with empty content. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 962*.


[GitHub-7467](https://github.com/magento/magento2/issues/7467)

Expected result
file.txt contains is created
Actual result
getting error The specified "file.text" file could not be written




<!--- MAGETWO-85770 -->* Cannot subscribe to events with a number in name 

*Fix submitted by [Mobecls](https://github.com/Mobecls) in pull request 12758*.

[GitHub-5035](https://github.com/magento/magento2/issues/5035)


I can not to subscribe on change of all sections in Stores ->Configuration using event admin_system_config_changed_section


<!--- MAGETWO-85872 -->* Fix PhpDoc to show correct parameter types 

PhpDoc only shows string as type, although array is a valid parameter type as well.

*Fix submitted by [Freek Vandeursen](https://github.com/FreekVandeursen) in pull request*.


<!--- MAGETWO-86484 -->* Fix jumping content on page reload in admin area 
*Fix submitted by [Anna Völkl](https://github.com/avoelkl) in pull request 12985*.

This PR sets a min-height on the notices-wrapper, causing the page not to jump any more. 



<!--- MAGETWO-86277 -->* Correctly construct Magento\Framework\Phrase 
*Fix submitted by [Nick](https://github.com/punkstar) in pull request 12951*.





<!--- MAGETWO-86154 -->* Wrong page cached for logged in user	
X-Magento-Vary & PHPSESSID now have the same expiration time

Partner reported that Cookie X-Magento-Vary has expiration "Session" - which means it is not considered expired until the browser is closed.
Cookie PHPSESSID has finite expiration time (not Session) - by default 1 hour. The conflict arises when PHPSESSID cookie is already expired, but "X-Magento-Vary" cookie is still valid. In that case if Varnish storage is empty, it will request the backend (Magento) and get the content for not logged in user (because PHPSESSID is expired), but cache it for logged in user (because X-Magento-Vary is not expired).



<!--- MAGETWO-85992 -->* Throw ValidationException for invalid xml 
*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request 12859*.



This change ensures the offending file path is output in the error
report.

Currently, when malformed `$content` is fed into `\Magento\Config\Model\Config\Structure\Reader::processingDocument` and unhandled `\Exception` is thrown. The output fails to indicate the location of the offending file,



<!--- MAGETWO-88146 -->*  Add ObserverInterface to the api 
*Fix submitted by [Kristof](https://github.com/fooman) in pull request 13759*.



Creating an observer that uses ObserverInterface should not trigger a patch level dependency on magento/framework.



<!--- MAGETWO-88115 -->* Add RewriteBase directive template in .htaccess file into pub/static folder 
*Fix submitted by [Cristiano Casciotti](https://github.com/ccasciotti) in pull request 13678*.

Add RewriteBase directive template in .htaccess file into pub/static folder


<!--- MAGETWO-87261 -->*  Edited doc block of the walk method in a Collection 
*Fix submitted by [ByteCreation](https://github.com/ByteCreation) in pull request 13373*.

The following callback is created by passing an array that consists of an object and a string. The method of that object will be used in the callback, and each model in the collection will be passed to the method as the first parameter. While this results in a successful callback, the doc block of the walk method of a collection incorrectly reports that it will only accept a string, while the following example uses an array.





#### App framework

<!--- MAGETWO-81802 -->* Magento 2.2.0rc23: Customer Grid Indexer not working 

PR #10838

Cutomer Grid index works properly while upgrading from 2.1 to 2.2

The Customer Grid Indexer doesn't work, when reindexing via CLI.

[GitHub-10838](https://github.com/magento/magento2/issues/10838)


Actual result: 
At this stage only problems occuring, which are caused by plugins from extern modules using deprecated functions, classes, etc.)

ask oleskii for attribution


<!--- MAGETWO-80223 -->* Fix syntax of expectException() calls 
*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 11099*.

[GitHub-11059](https://github.com/magento/magento2/issues/11059)


It seems like during the transition to PHPUnit 6, setExpectedException($class, $message) has been bulk replaced by expectExcpeption($class, $message)

But the new expectException() method only takes one parameter, namely the exception class. To check the message as well, a second method is needed: expectExceptionMessage()






<!--- MAGETWO-84003 -->*  exception message is wrong and misleading in findAccessorMethodName() of Magento\Framework\Reflection\NameFinder 


[GitHub-9764](https://github.com/magento/magento2/issues/9764)
*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 12303*. 





<!--- MAGETWO-84016 -->* Fixed 'Non-numeric value' warning on account create/save when DOB field is visible 

PR #

broken customer registration page when "Date of Birth" field is visible on the frontend.
not working customer save method when DOB is visible
*Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 12302*.

[GitHub-12146](https://github.com/magento/magento2/issues/12146)



Customer with empty "Date of Birth" cannot be saved even when it is not marked (or checked on the JS side) as mandatory.



<!--- MAGETWO-84371 -->* 

[GitHub-10210](https://github.com/magento/magento2/issues/10210)


Transport variable can not be altered in email_invoice_set_template_vars_before Event
We waht to change the payment_html for banktransfer invoices. Unfortunately the instruction is also sent in invioce email. And there the customer already has paid the bill.

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. 




<!--- MAGETWO-84372 -->* South Korea Zip Code Validation incorrect 

Postal codes in South Korea are 5-digit numeric, whose system newly introduced in August 1, 2015.
[GitHub-9515](https://github.com/magento/magento2/issues/9515)


Zip code validation fails on adresses from South Korea since it validates against deprecated format.
Current validation is 123-456. This should be 12345.

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 903*. 







#### Configuration framework

<!--- MAGETWO-84464 -->* Encrypted scope-specific config values fail to decrypt on PHP7 

It seems that scope based config fails to decrypt data on anything but the default store

Actual result:
The user field is blank, and the password field is garbed nonsense, from what I can only assume is a fail to decryp
*Fix submitted by [DubovykOleksandr](https://github.com/odubovyk) in pull request 8591*.



<!--- MAGETWO-84815 -->* Format generated config files using the short array syntax 

 We are using a standard that complies with all requirements of PSR-2 and has some rules inherited from ZF coding standard. Although this document is not published yet.
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 12499*.








#### JavaScript framework

<!--- MAGETWO-83401 -->* Fix depends field not working for radio elements #

Currently the `<depends>` field only works when used on elements of `select` type, this PR aims to replicate the same functionality for fields with `radios` type.

<depends> field doesn't work in system.xml for "radios" fields

In system.xml file a field can depend on another field value; it will be shown or not depending from previous field choice.
It works fine if the field depends on a "select" field but if you try to use a "radios" field dependency the mechanism doesn't work and the field will always be shown.

Expected result
discount_calculation value = 'automatic' => discount_category is shown
discount_calculation value = 'manual' => discount_category is not shown
Actual result
discount_category is always shown so is not working
If I declare discount_calculation field as "select" type, all works fine
*Fix submitted by [Javier Villanueva](https://github.com/jahvi) in pull request 11539*.




<!--- MAGETWO-83993 -->* Fixed a js bug where ui_component labels have the wrong sort order. 
If you extend an dynamic-row element in a ui_component and add a sort order attribute with a amount between the others, the Fields are in the correct order but the label is always the last one.
If you extend an dynamic-row element in a ui_component and add a sort order attribute with a amount between the others, the Fields are in the correct order but the label is always the last one.
*Fix submitted by [Harald Deiser](https://github.com/deiserh) in pull request 11846*.





#### Session framework

<!--- MAGETWO-83373 -->* Fix for issue 9633 500 error on setup wizard with memcache 
*Fix submitted by [Marty S](https://github.com/sylink) in pull request 11608*.


[GitHub-83373](https://github.com/magento/magento2/issues/83373)

Expected result
The Setup Wizard page loading successfully
Actual result
Page returns an HTTP ERROR 500. 





<!--- MAGETWO-83287 -->* Generate new FormKey and replace for oldRequestParams Wishlist #12038

[GitHub-11825](https://github.com/magento/magento2/issues/11825)



https://github.com/magento/magento2/issues/11825
2.1.9 Item not added to the Wishlist if the user is not logged at the moment he click on the button to add it.

Expected result
You are redirected to the customer account Wishlist page and the product is added.
Actual result
You are redirected to the customer account Wishlist page but the product is not added.




<!--- MAGETWO-86880 -->* WEBAPI: PHP session is always started #
Although REST API should be stateless for anonymous calls, PHP session is always created. This is caused by the fact that session_start() is called implicitly from '\Magento\Framework\Session\SessionManager' constructor.

There are 2 issues with this: Spammed PHP session which will never be used, if remote address validation is enabled for sessions, clients with dynamic IP address will get 302 redirect instead of REST API result, and this is undesirable.
*Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1247*.

[GitHub-7213](https://github.com/magento/magento2/issues/7213)




#### Testing framework



#### Web API framework

<!--- MAGETWO-83854 -->* Address Book: Access denied is displaying when user click on add new address
Fixed bug when user with denied permissions for "Negotiable quote editing" was unable to create customer address


<!--- MAGETWO-84979 -->* Fix swagger-ui on instances of Magento running on a non-standard port 
*Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 12541*.


<!--- MAGETWO-84994 -->* Can't emptying values by magento 2 api 

[GitHub-8862](https://github.com/magento/magento2/issues/8862)
*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 916*. 





<!--- MAGETWO-85534 -->* [GitHub] Order of how arguments are merged in multiple di.xml-… 
*Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 995*.

[GitHub-8647](https://github.com/magento/magento2/issues/8647)

Order of how arguments are merged in multiple di.xml-files causes unexpected results #8647
Update the webapi module to explicitly choose the default-renderer when Accept = */*. However, this is not the reason of this bug, but more of a result.





<!--- MAGETWO-85538 -->* SearchCriteriaBuilder builds wrong criteria (ORDER BY part). 

*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1003*.


[GitHub-5738](https://github.com/magento/magento2/issues/5738)






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

<!--- MAGETWO-81368 -->* Defaulting missing alt-text for a product to use the product name. 
The code in app/code/Magento/Catalog/Block/Product/View/Gallery.php's getGalleryImagesJson() function was setting the image's label to $image->getLabel() regardless of whether the image's label was null or empty. The fix was to test the $image->getLabel() response and if it was empty to use the product's name instead.
*Fix submitted by [Ben Robie](https://github.com/brobie) in pull request 11323*.



[GitHub-9931](https://github.com/magento/magento2/issues/9931)


<!--- MAGETWO-83726 -->* The CSV file created by using **System > Export** now incorporates the value of `hide_for_product_page`. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 11926*.


<!--- MAGETWO-83957 -->* You can now import a value of zero (0) into a custom attribute when using the Admin product import feature. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12283*. [GitHub-12083](https://github.com/magento/magento2/issues/12083)


<!--- MAGETWO-84448 -->* You can now import or export a specific store view that includes custom options and bundle product options. Previously, the import/export feature did not include store view-level edits for  custom options.


<!--- MAGETWO-85629 -->* 

Product csv import > fail on round brackets in image filename
Product csv import > fail on round brackets in image filename
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1017*. [GitHub-12084](https://github.com/magento/magento2/issues/12084)


Expected result
Data validated successfully
Actual result
Error message: "Wrong URL/path used for attribute image in row(s):"


<!--- MAGETWO-86657 -->* 

Existing customers import now changes only the rows specified information for customers. 
If rows for other customer attributes (`group_id`, `store_id`, `created_at`) are absent in the import file, these values are included unchanged. 


<!--- MAGETWO-88044 -->* Fix adding values to system variable collection unit test. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 13742*.

<!--- MAGETWO-74042 -->* If user will try to import configurable product with specified configurable links and store view in single row the system should return error on the validation step: 

Product with assigned super attributes should not have specified 'store_view_code' value

Expected
configurable product is created with all linked configurations
Actual
configurable product and its configurations are not linked



### Indexing

<!--- MAGETWO-86446 -->* The URL that points to Magento `crontab` documentation has been updated to reflect current cron documentation in `app/code/Magento/Indexer/Model/Message/Invalid.php`. *Fix submitted by [Robbie Thompson](https://github.com/robbie-thompson) in pull request 13050*.

<!--- MAGETWO-83503 -->* You can now view the state of the mview queue in real time, which can be useful when debugging indexing issues. You can now view how many items are in the queue pending processing, as well as view information from the `mview_state` table. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request 12122*.


### Infrastructure

<!--- MAGETWO-86542 -->* Product details page zoom issue when dropdown menu have overlap area with it. Zoom works fine, but when hover on category dropdown menu to the overlap area of product image and dropdown menu, the zoom is active abnormally, even the mouse is still on the dropdown menu.
*Fix submitted by [Mayank Zalavadia](https://github.com/mayankzalavadia) in pull request 13084*.


[GitHub-5129](https://github.com/magento/magento2/issues/5129)

<!--- MAGETWO-86505 -->* Fix for requireJS loading issues (for ad blockers) 
*Fix submitted by [Yonn Trimoreau](https://github.com/Yonn) in pull request 13061*.


When uBlock (or any ad blocker) forbids `trackingCode.js` file from loading, the exception thrown by RequireJS breaks the JS execution flow, causing unexpected and random issues elsewhere on the website.
This fix catches the RequireJS script loading error, displays it in the console as is and returns true, to avoid execution flow to be broken.





<!--- MAGETWO-86501 -->* 

Fix issues caused by using continue in loops 
*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 13076*. 


The main goal of this PR is to remove not used count in templates.







<!--- MAGETWO-85698 -->* The comment that marks the `\Magento\Checkout\Model\Cart` class as deprecated now includes a pointer to an alternative class. This fix is part of an ongoing effort to add pointers to valid replacements when marking methods and classes as deprecated. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 13061*. [GitHub-10133](https://github.com/magento/magento2/issues/11070)


<!--- MAGETWO-85694 -->* A new file (CODE_OF_CONDUCT.md) that defines  standards for how to engage in a community
*Fix submitted by [Ievgen Shakhsuvarov](https://github.com/ishakhsuvarov) in pull request 12723*.

 A code of conduct defines standards for how to engage in a community. It signals an inclusive environment that respects all contributions. It also outlines procedures for addressing problems between members of your project's community.




<!--- MAGETWO-85332 -->* Previously, when Magento loaded theme configuration on an installation running PHP 7.2 and checked that  `$parentPathPieces` was an array before counting it, Magento threw an error when this value was `NULL`. 

Fix error loading theme configuration on PHP 7.2 
*Fix submitted by [Alan Hardman](https://github.com/Alanaktion) in pull request 12606*.


This fixes an issue loading theme configuration on PHP 7.2 by checking that `$parentPathPieces` is an array before counting it, avoiding an error when the value is `NULL`. 




<!--- MAGETWO-85292 -->* `\Magento\Framework\Data\Tree::getNodeById()` no longer contains an invalid type in its PHPDoc block.  *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 964*. [GitHub-8507](https://github.com/magento/magento2/issues/8507)





### Newsletters

<!--- MAGETWO-83999 -->* The **About Us** and **Customer Service** links of the Order Confirmation email (and  other emails sent to the customer) now work as expected. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. [GitHub-12261](https://github.com/magento/magento2/issues/12261)


<!--- MAGETWO-85783 -->* Magento now sends the newsletter subscription success email as expected a customer successfully subscribes to a newsletter. 
*Fix submitted by [Styopchik](https://github.com/Styopchik) in pull request*. [GitHub-12439](https://github.com/magento/magento2/issues/12439)


<!--- MAGETWO-86435 -->* 
*Fix submitted by [Amit Bera](https://github.com/devamitbera) in pull request*.


[GitHub-12787](https://github.com/magento/magento2/issues/12787)



Newsletter\Model\Subscriber::loadByEmail() does not use MySQL index 

Expected result
An index should be use to retrieve the subscriber instantly
Actual result
No index is used, resulting in a slow "Using where" query like this:



<!--- MAGETWO-86562 -->* Magento no longer sends multiple confirmation emails when a customer successfully subscribes to a newsletter. *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request 13044*. [GitHub-12876](https://github.com/magento/magento2/issues/12876)


<!--- MAGETWO-86447 -->* The text of the  **Subscribe to Newsletter** button now wrpas correctly. *Fix submitted by [monaemipro](https://github.com/monaemipro) in pull request 13041*. [GitHub-12320](https://github.com/magento/magento2/issues/12320)







### Orders

<!--- MAGETWO-75840 -->* Magento now shows all products as expected in the Recently Ordered list when you place an order that contains products from multiple stores. Previously, in installations with two storefronts, if you added products from both stores to the same shopping cart, and placed a single order, the recently ordered product list would not show all ordered products. 



<!--- MAGETWO-82577 -->*  Translate order getCreatedAtFormatted() to store locale (by @JeroenVanLeusden)
Add `getDefaultStoreLocale()` to allow fetching scoped values. Use this in `getCreatedAtFormatted()` so `created_at` date of order will be translated in emails to locale being used in that store view.
*Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 11067*.



<!--- MAGETWO-83410 -->*  Potential error on order edit page when address has extension attributes #11787




<!--- MAGETWO-83552 -->* Sets the invoice ID when an invoice is set on the credit memo
Loads the invoice by id on getInvoice if an invoice ID is set on the credit memo

[GitHub-11669](https://github.com/magento/magento2/issues/11669)


Expected result
Because I'm refunding an invoice, I'd expect the invoice ID to be saved on the credit memo.
When I create a credit memo from the invoice in the admin pages, the invoice ID is saved on the credit memo




<!--- MAGETWO-83740 -->* 

Credit memos can have the state open: `\Magento\Sales\Model\Order\Creditmemo::STATE_OPEN`.
This means that it is possible to have a creditmemo with an ID which still has to be refunded.
I'm creating a module that introduces a validation step for refund payments before the actual refund can take place. It uses the open state of credit memos to wait for approval and then refunds the creditmemo. Right now the credit memo is not refundable once it has an ID. I think this is incorrect in case of open credit memos.

Even existing credit memos should be refundable if their state is open #11550


<!--- MAGETWO-83783 -->* The `Magento\Sales\Service\V1\OrderCreateTest` test now has the correct shipping method fixture. Previously, this test contained an incorrect shipping method fixture, which produced an error whenever an order's shipping method is treated an object.
 #12227


<!--- MAGETWO-84219 -->* When you use the REST API to create a credit memo, Magento now sends  credit memo update emails as expected. Previously, under these circumstances, Magento did not send this email, and no other transaction emails were sent ot the customer.  




<!--- MAGETWO-84256 -->* The `getReservedOrderId()` method now uses the current store as expected instead of the default store. *Fix submitted by [Timon de Groot](https://github.com/tdgroot) in pull request 11702*. [GitHub-9055](https://github.com/magento/magento2/issues/9055)


<!--- MAGETWO-85305 -->* Back-End issue for multi-store website: when editing Order shipping/billing address - allowed countries are selected from wrong Store View

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request*. 

[GitHub-12560](https://github.com/magento/magento2/issues/12560)


Expected result
Address Country drop-down in Admin should take values from 'Allow Countries' setting configured for the Website Store View where that order was made (e.g.: for German store with id = 7)
Actual result
But it's picking the 'Allow Countries' from first store View (with id=1).
If before steps 3 and 4 from "Steps to reproduce" go to Admin > Sales > Create New Order and when creating it select some different Store View (e.g.: Italian, with id = 10) then actual result after "Steps to reproduce" will show allowed countries for that selected Store View (with id = 10, if continue on example).







<!--- MAGETWO-85660 -->* The \Magento\Sales\Model\Order\Pdf\AbstractPdf::drawLineBlocks method now works as expected. Previously, when a text block spanned more than one page, Magento threw a `Zend_Pdf_Exception` error, and displayed this error: `Font has not been set`. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 1016*. [GitHub-11743](https://github.com/magento/magento2/issues/11743)


<!--- MAGETWO-86845 -->* Magento no longer exports extra records when you export invoices for multiple orders. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request 13208*. [GitHub-12714](https://github.com/magento/magento2/issues/12714)


<!--- MAGETWO-80233 -->* Added support to create later authorizations with PayPal "Order" action
Previously, Paypal cannot place the order when Payment Action = Order. 

ACTUAL RESULTS:
"We cant place order" error shows
../var/log/support_report.log contains:

DETAILS:

When PayPal is set to Authorize mode, the order can be placed successfully.
However, when mode is changed to Order, upon reaching Review page and clicking Place Order, the page refreshes and an error is displayed: "We can't place the order."
I was able to replicate it in clean magento. If Payment action is set to Authorize, it goes through. If Payment Action is set to Order, it gives the error. I didnt check the other payment action Sale. But it is only in Order where you have to enter Merchant ID. Not sure if that's connected to the issue or not.
ADDITIONAL NOTES FROM MERCHANT:

They have an external ERP system that needs to perform the authorization
Magento needs to omit the auth when placing an order on the site so it can be done later by the ERP (ERP APIs don't allow to insert a record based on previously created auth)





<!--- MAGETWO-86258 -->* The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 12668*. [GitHub-9969](https://github.com/magento/magento2/issues/9969)


<!--- MAGETWO-87292 -->*  Join extension attributes are now added as expected to order results when the order is created using REST. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1168*.


<!--- MAGETWO-87291 -->* The Shipment Tracking REST API now throws an error as expected if the specified order doesn't exist. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1162*. 


### Payment methods
<!--- MAGETWO-86940 -->* Magento now provides dedicated payment and shipping debug log files to store information specific to those functional areas

<!--- MAGETWO-84588,MAGETWO-84587 -->* You can now use the Cybersource payment method for multishipping checkout and payment flows


<!--- MAGETWO-75497 -->* Logged-out customers can no longer see previously saved credit cards. Previously, users logged in as guest could see some payment information from an earlier, canceled order. 


<!--- MAGETWO-81322 -->* When you cancel payment of an order and return to the previous page in the workflow (the checkout page), Magento now provides the shipping address and other information as expected. Previously, Magento did not load the shipping address after you canceled payment of an order and returned to the checkout page. [GitHub-11247](https://github.com/magento/magento2/issues/11247)


<!--- MAGETWO-81395 -->* Third-party developers can now customize payment errors messages for payment integrations based on Magento Payment Provider Gateway. 


<!--- MAGETWO-82910 -->* PayPal Express Checkout now appears as a payment option on the Checkout page when the PayPal buttons are available on the shopping cart page. Previously, PayPal did not appear as a payment method on the Checkout page when the billing agreement was disabled, although the PayPal buttons were still available on the shopping cart page. 


<!--- MAGETWO-83959-->* If you have a custom *offline* payment method it automatically falls in exception group used while fetching all payment methods this cause that payment method don't have *value* key in the definition and as the result - undefined index on order view page in admin panel. My fix adds key *value* as null and it fixes the notice.
*Fix submitted by [Alex](https://github.com/madonzy) in pull request*. 

[GitHub-3596](https://github.com/magento/magento2/issues/3596)

I am getting following notice when choose order page in admin panel.
I am getting this notice when set transaction id in my payment module.

If you have a custom offline payment method it automatically falls in exception group used while fetching all payment methods this cause that payment method don't have value key in the definition and as the result - undefined index on order view page in admin panel. My fix adds key value as null and it fixes the notice.


<!--- MAGETWO-86112 -->*  Braintree "Place Order" button is disabled after failed validation 
*Fix submitted by [Ievgen Sentiabov](https://github.com/joni-jones) in pull request 12902*. 

After failed payment form validation the "Place Order" button is still disabled because `hosted-fields` triggers an error on validation and `isPlaceOrderActionAllowed` is still returns `false`.

Added handler to enable "Place Order" button on failed validation




<!--- MAGETWO-86297 -->* The  `is_active` and `is_visible` columns now default to true even when column default values are not set in the `vault_payment_token` installation script. *Fix submitted by [helloitsluke](https://github.com/helloitsluke) in pull request 12965*. 


<!--- MAGETWO-  -->* Substitution payment method - Incorrect message 
*Fix submitted by [zamoroka](https://github.com/zamoroka) in pull request 12731*. 


[GitHub-12209](https://github.com/magento/magento2/issues/12209)


Expected result
We should have message "<payment_method_name> is not available. You still can process offline actions." OR we should have message "Payment method is not available. You still can process offline actions.

Actual result
We have message "is not available. You still can process offline actions."




<!--- MAGETWO-86351 -->* PayPal pop up does not work with virtual product (gift card)
Fixed PayPal popup for virtual products
paypal pop up doesnt show when you're ordering gift cards
reproducible for a customer without any address, when he tries to place an order with one virtual product via Onepage Checkout.
In this case, billing address is optional (PayPal Express doesn't require it) and shipping address for a virtual product isn't required.
So we don't have any address on Review & Payments step






<!--- MAGETWO-84639 -->* Correctly set payment information when using paypal 
*Fix submitted by [Ričards Zālītis](https://github.com/therool) in pull request 12401*. 

Correctly set payment method information when using PayPal Express so the checkout agreements data is correctly added to the request and validated correctly. 
Edited the `Magento_Paypal
/js/action/set-payment-method` to use the `Magento_Checkout/js/action/set-payment-information` so the additional payment/checkout data is correctly added.
Magento 2.2 Paypal Can't Accept Checkout Agreements Before Routing to PayPal 

This could potentially be a module conflict, but after stepping through and inspecting the checkout code I can't find any obvious third-party interference.

When going through standard checkout and selecting PayPal Express at the payment step, there is an agreements checkbox present. However, checking this box does nothing as the agreements data is not parsed and passed to the set-payment-information API. This triggers the CheckoutAgreements validation plugin which fails to validate with no agreements data.

When I override the PayPal JS to add the agreements data to the paymentData before sending to the API, it passes validation but then fails because PayPal doesn't allow setting extension data.



<!--- MAGETWO-86426 -->* Orders placed using PayPal Express Checkout are being populated in the archived orders grid.
STEPS TO REPLICATE:

Go to any product > Add to Cart > Proceed through checkout
Enter required shipping information > select shipping rate > Continue
Select payment method PayPal Express Checkout
Login to the PayPal account > submit order
Note the order number
Go to Sales > Operations > Orders
Notice the order is displaying as expected
Go to Sales > Archive > Orders
Notice the same order is listed in the archive orders
EXPECTED RESULTS:
The order should not be listed in the archive orders

ACTUAL RESULTS:
The order is listed in the archive orders


<!--- MAGETWO-84647 -->* Handle transparncy correctly for watermark 
*Fix submitted by [Elze Kool](https://github.com/elzekool) in pull request 11060*. 


[GitHub-10661](https://github.com/magento/magento2/issues/10661)





### Performance

<!--- MAGETWO-86744 -->* magento/module-catalog is_null change to strict comparison 

*Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13171*.


 Optimization: magento/module-catalog is_null change to strict comparison


 This is the one of the optimization PR linked with the is_null() change. I decided to do them per module just to avoid any mistake during delivery and review.
Best regards,







<!--- MAGETWO-75769 -->* Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.




<!--- MAGETWO-86743 -->* Optimization: magento/module-tax is_null change to strict comparison 
*Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13170*.


This is the one of the optimization PR linked with the `is_null()` change. I decided to do them per module just to avoid any mistake during delivery and review.



<!--- MAGETWO-86742 -->* magento/module-eav is_null change to strict comparison … 
*Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13169*.


Optimization: magento/module-eav is_null change to strict comparison 
*Micro-optimizations for Magento\Tax*
 It checks next: `is_null must be avoided. Use strict comparison instead.`
Some classes are under `// @codingStandardsIgnoreFile` such as Magento\Tax module models and cannot be checked during static tests. In this PR I replaced `is_null` with strict comparison only for models in Magento\Tax module.
This is the one of the optimization PR linked with the is_null() change. I decided to do them per module just to avoid any mistake during delivery and review.




### Quote

<!--- MAGETWO-86439 -->* Feature minimum order amount notice issue 
During currency switch notice message shows wrong calculation of minimum order amount.


This is about notice message of min order amount on cart page.When we have set min order amount and on cart page someone change currency, user see same amount and only currency symbol changed. It should recalculate amount also.
Instead of currency convert, we use price helper then it gives us re calculated price amount in notice message.
*Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request 13039*. 





<!--- MAGETWO-86434 -->* The quote address fields length expanded in the database
field lengths differ across many tables 

Steps to reproduce
place an order
enter a very wide telephone number (+20 characters)
order
Expected result
the very long telephone number should appear in the database as the field is 255 characters long in sales_order_address
Actual result
the telephone number gets cut off after 20 characters as the quote_order_address field is just set to 20 characters VARCHAR
*Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 13015*.


[GitHub-10869](https://github.com/magento/magento2/issues/10869)


<!--- MAGETWO-86430 -->* Attribute with "Catalog Input Type for Store Owner" equal "Fixed Product Tax" for Multi-store 
*Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 13019*.
[GitHub-12393](https://github.com/magento/magento2/issues/12393)



Attribute with "Catalog Input Type for Store Owner" equal "Fixed Product Tax" did not work correctly for multi-stores.
Expected result
The new line with website column.
Actual result
The new line without website column.




<!--- MAGETWO-85518 -->* Shipping methods list is displaying correctly despite negotiable quotes functionality that caused displaying only one selected method, even after reorder.

All Shipping methods not displaying when reordering or going backward in checkout process from payment page
EXPECTED RESULTS:
All shipping methods should be shown when reordering or going backward in the checkout process/restarting the checkout process

ACTUAL RESULTS:
Only previously selected method shown when reordering or going backward in the checkout process/restarting the checkout process

B2B 



<!--- MAGETWO-86595 -->* Integrity constraint violation error after re…
*Fix submitted by [Vinay Shah](https://github.com/vinayshah) in pull request 13036*.


[GitHub-12705](https://github.com/magento/magento2/issues/12705)



Integrity constraint violation error after reordering product with custom options
Expected result
New order page is opened

Actual result
Unable to reorder, error is thrown and logged in var/report





### Reports

<!--- MAGETWO-84981 -->* Trying to get data from non existent products 
When calling Products in Cart report, it called data of deleted products resulting in exception trying to access $productData[$item->getProductId()]

Steps to reproduce
Delete a product recently sold
Open Reports > Marketing > Products in Cart
Expected result
List of products
Actual result
Blank list

*Fix submitted by [angelo983](https://github.com/angelo983) in pull request 12539*.


<!--- MAGETWO-88173 -->* Fix for ordered products report
ISSUE:
Exporting a CSV fo the Products Orderd Report returns an empty CSV containing only the column headers and no data.

STEPS TO REPLICATE:

Go to Reports > Products > Ordered
Enter a From and To date > click Refresh
Notice data of products that have been ordered.
Go to Export To > select CSV > click Export
Notice the CSV file does not contain any of the report data other than the column headers
EXPECTED RESULTS:
Exported CSV file should contain the report data

ACTUAL RESULTS:
Exported CSV file does not contain the report data




### SalesRule

<!--- MAGETWO-73479 -->* Cart Rules are not excluding Bundle Products. EXPECTED RESULTS:
The coupon code should not be able to be applied to the bundle product

ACTUAL RESULTS:
The coupon code that should exclude the bundle product is able to be applied to the product




<!--- MAGETWO-71393 -->* Incorrect catalog rule price for bundle product with custom option. 
Corrected calculation of catalog rule price applied for bundle product with custom option. found that Magento calculates catalog rule price in a different way that it happened before and after manual checking of calculations looks like it's a bug.





<!--- MAGETWO-86780 -->* Cart Price calculates "Cart Price Rule shipping discount" correctly.

NegotiableQuote plugin breaks Cart Price Rule shipping discount	


EXPECTED RESULTS:
"No Payment Required" payment method is shown and are able to place the order

ACTUAL RESULTS:
"No Payment Required" payment method is not shown and upon placing the order, observe that the error is returned: "Payment method is not available".




<!--- MAGETWO-86786-->* Fix missing discount label in checkout 

PR #13141



<!--- MAGETWO-87013-->*  Nesting level for categories now is displayed correctly in Cart Price Rules, for categories that have nesting level more than 3
Merchant reports when creating a new Cart Price Rule, under Actions or Conditions, when using Category as part of the condition, drilling down to the specific categories seem to stop at the third level. We cannot drill any more past that.

If you click the + icon, the page just flickers, but subcategories are not listed down.



<!--- MAGETWO-85960-->* 
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request*.

[GitHub-12817](https://github.com/magento/magento2/issues/12817)


Expected result
Coupon should be available again after all those steps.
Actual result
I can't use coupon again. It says Coupon code is not valid.

Coupon code with canceled order

teps to reproduce
Add new coupon, For example to reproduce this bug easily.
Do an order and apply this coupon code.
Go to admin area and cancel this order.



### Sample data



<!--- MAGETWO-84180 -->* Add a --no-update option to sampledata:deploy and sampledata:remove commands 
*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 12359*.

This PR adds a `--no-update` flag for sampledata commands. It will be passed to composer, so that the user can add and remove sampledata modules without automatic `composer update`. This way, the actual update can be postponed to a manual composer execution. It gives the developer more control and is especially useful in scenarios where running composer from within bin/magento results in permission issues.


### Scope

<!--- MAGETWO-88114 -->* Product set to one website resets correctly for all websites after special price scheduled update ends

Product’s scope is set to one website/store/store view, then a special price is set by scheduled update. At the end of the special price event, the product’s scope is incorrectly set to all websites.

EXPECTED RESULTS:
The product should still be activated in only one website at the end of the scheduled update event.

ACTUAL RESULTS:
The product is incorrectly activated for all websites when the scheduled update event ends.



### Search

<!--- MAGETWO-85637 -->* Magento 2 is not showing Popular Search Terms 
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1024*.


[GitHub-10743](https://github.com/magento/magento2/issues/10743)








<!--- MAGETWO- 84370
-->* Layer navigation showing wrong product count 

PR #12063

[GitHub-11946](https://github.com/magento/magento2/issues/11946)





<!--- MAGETWO- 87293-->* Admin Global Search was build in a hurry 


*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1167*. 

Added new dependency for Backend - to Cms. This dependency was supposed to be here earlier. When we use search - we can press find in CMS, so it leads to CMS page.

1.Install any other language pack
2. Create an admin role that does not have access to orders and an admin user assigned to that role
3. Login as the user created in the step above
4. Search for something in the admin global search.
Expected result
I should see the links to " keywords in Products", " keywords in Customers", " keywords in Pages" only and translated in the selected language.
I should see results for products, pages and customers matching my keywords (this actually works).

Actual result
I see the link "keywords in Orders" that I should not see because I don't have access to orders. Clicking it takes me to an "Access denied" page.
The texts "in products", "in pages"... are not translated

[GitHub-7698](https://github.com/magento/magento2/issues/7698)



The admin global search is not entirely translatable, extensible and does not take into account the ACL settings for the current user

ENHANCEMENT




<!--- MAGETWO-85827-->* Grid filtration doesn't work for mysql special characters 
*Fix submitted by [laconica-sergey](https://github.com/laconica-sergey) in pull request 12749*.



Expected result

Grid shows only products with the symbol

###Actual result

Grid shows all products


### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>

<!--- MAGETWO-86306 -->* Cast handling fee to float
*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 13680*.

PHP 7.1 complains with a warning if non-numeric strings are used in calculations (see: http://php.net/manual/en/migration71.other-changes.php)

The handling fee configuration of shipping methods is often an empty string. Prior to PHP 7.1 it was silently casted to 0, now this should happen explicitly to avoid warnings.



<!--- MAGETWO-86400 -->* remove not used count() from templates 
*Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 12901*.


The main goal of this PR is to remove not used `count($_items)` in templates.
Found that in some templates Magento2 counts items for table rendering and other stuff but files, add to this PR, do not use `$_count` variable and `<?php $_count = count($_items) ?>` can be excluded from them.

<!--- MAGETWO-85291 -->* Can bypass Minimum Order Amount Logic 

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 963*. 


Can bypass Minimum Order Amount Logic


Steps to reproduce
Enable Minimum Order Amount in system config. (Store / Configuration / Sales / Sales / Minimum Order Amount Enable = Yes)
Add products to the cart until you are over min amount.
Click on cart and click on "View and Edit Cart"
Click "Check Out with Multiple Addresses" on right side of page
Remove few product from order, while sum of order will be less than in settings (min order amount)
Then click "Update Qty & Addresses"
And finish order.
Expected result
When hitting the Place Order button would expect to see error about min order.
Actual result
Order goes through just fine.
Again, the theme must have the minicart visible during checkout and must allow for removing product.


<!--- MAGETWO-85586 -->* Fix incorrect DHL Product codes 
*Fix submitted by [gwharton](https://github.com/gwharton) in pull request 12666*.


There are three DHL product codes in the DHL Shipping module that are incorrect.

Description
Product Code "1" changed from "Customer Services" to "Domestic express 12:00"
Product Code "I" changed from "Break bulk economy" to "Domestic express 9:00"
Product Code "O" changed from "Others" to "Domestic express 10:30"

DHL product codes are now inline with those published in latest DHL products and services guide.



<!--- MAGETWO-87934 -->*  Cast handling fee to float 

PHP 7.1 complains with a warning if non-numeric strings are used in calculations
The handling fee configuration of shipping methods is often an empty string. Prior to PHP 7.1 it was silently casted to 0, now this should happen explicitly to avoid warnings.
*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 13680*.



<!--- MAGETWO-84589 -->*  Multishipping for Cybersource: Render custom payment method in Multishipping Checkout
Added possibility to use Cybersource on multi-shipping

As a Magento merchant, I want the multishipping checkout flow to render custom payment methods on storefront so that my customers can use multishipping checkout flows with Cybersource to complete a purchase.

Currently Magento multishipping only supports and renders hardcoded offline payment methods on storefront. This needs to be modified so that custom payment methods can be shown on in the checkout flow.



### Sitemap

<!--- MAGETWO-86349 -->*  Add GetUtilityPageIdentifiers for Manage Custom Pages to be excluded … 
*Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 12649*.

Remove /home from the sitemap.xml

[GitHub-12446](https://github.com/magento/magento2/issues/12446)


I want to remove /home from the sitemap.xml (I want the URL in the sitemap to be "https://domain.com" instead of "https://domain.com/home").




<!--- MAGETWO-85285 -->* Sitemap image links in MultiStore 

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 935*. 

[GitHub-12482](https://github.com/magento/magento2/issues/12482)





<!--- MAGETWO-81525 -->* 
Fatal error: Call getTranslateInline of null when generating some sitemap with errors 
This PR changes the logic for handling errors in the sitemap generation cron. If an exception is thrown when trying to generate any of the sitemaps, the processes is not stopped anymore, but instead the errors are sent by email based on the XML Sitemap configuration. The old `_translateModel` property is not used anymore, and the inline translation is correctly suspended using the `inlineTranslation` property instead.

expected result: An email is delivered to the configured email address and the cron task should be successful.

actual result: Cron task is successful. There are no new emails in Inbox or Spam
*Fix submitted by [Marina Gociu](https://github.com/marinagociu) in pull request*.


[GitHub-10502](https://github.com/magento/magento2/issues/10502)


### Swagger


<!--- MAGETWO-87444 -->* Update code formatting in Swagger Block 
Update code formatting in Swagger Block/Template
*Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 13485*.

### Swatches


<!--- MAGETWO-83290-->* ask Oleksii -- says no release note is needed, but it's a community engineering fix





<!--- MAGETWO-86576 -->* Fix issue with swatch colour block not showing in admin panel once colour selected (PHP7.1.x issue).
*Fix submitted by [Chris Pook](https://github.com/chris-pook) in pull request 13101*.

[GitHub-11828](https://github.com/magento/magento2/issues/11828)


Visual Swatches not showing swatch color in admin
Steps to reproduce
Inside admin, go to Stores->Product and click on an attribute that contains visual swatches.
Expected result
Visual Swatches that have a color assigned should show that color in the swatch box.
Actual result
Although the color swatch values are being saved, the visual representation of the color in the box is colorless.



<!--- MAGETWO-86665 -->* Incorrect language on swatch error
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1117*.



[GitHub-5550](https://github.com/magento/magento2/issues/5550)


While attempting to add a new swatch, I received the following error:

Admin is a required field in the each row

This is a bit odd and should instead read

Admin is a required field in each row"




<!--- MAGETWO-87570 -->* "Hide from Product Page" option does not work for child of configurable product

EXPECTED RESULTS:
if options are selected but image for child product with these options doesn't exist - base image of parent product is shown

ACTUAL RESULTS:
The child product image is shown on the front-end





### TargetRule

<!--- MAGETWO-77754 -->* Related Products Rule for Up-sell Products with Customer Segments Specified Doesn't Work

Partner explains that Related Products Rules are not working for Up-Sells when Customer Segments is set to Specified while Cross-Sells is working without issues. The Related Products Rules for Up-sells when Customer Segments is set to All works without issue.

EXPECTED RESULTS:
Five up-sell products from specified category B should display on a product page for a product from specified category A for a customer logged into account who has a default billing address entered in account profile.

ACTUAL RESULTS:
No up-sell products from specified category B display on a product page for a product from specified category A for a customer logged into account who has a default billing address entered in account profile.







<!--- MAGETWO-86013 -->* It's impossible to save Related Product Rule	EE ONLY

Login to admin
Go to Marketing > Promotions > Related Product Rules
Press Add Rule button:
Rule name = Rule #1
Status = Active
Apply To = Related Products or Up-sells or Cross-sells
Products to Match Multiselect #1 contains A
Products to display Multiselect #1 contains B
Save Related Product Rule

Actual result: Rule is not saved. Notice: Products to match and products ti display tabs loses conditions.
Error message displayed - Array to string conversion in /var/www/html/develop/magento2ee/app/code/Magento/TargetRule/Model/ResourceModel/Index.php on line 372






### Tax
<!--- MAGETWO-87941 -->*  Use a selector to only select the correct tax rate sel…
*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13643*.



[GitHub-12791](https://github.com/magento/magento2/issues/12791)


I'm having a weird issue on the production environment of one of our webshops. The styling of the Customer & Product Tax class UI components are getting the styling of the tax rate UI component.
This results in a problem with saving the newly selected customer & product class changes. It just selects the corresponding rows from the Tax rate UI component, found at the top of the page.


<!--- MAGETWO-87352 -->* Fix default discount tax calculation in double 

The node `tax/calculation/discount_tax` is in double in file `Magento/Tax/etc/config.xml`.
*Fix submitted by [Vincent Marmiesse](https://github.com/VincentMarmiesse) in pull request 13449*.




<!--- MAGETWO-87339 -->* M2.x.x Translation Missing in Checkout for Tax 

*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1147*. 

[GitHub-7849](https://github.com/magento/magento2/issues/7849)


### Testing

<!--- MAGETWO-87487 -->* phpunit.xml files should be ignored by Magento/Test/Integrity/Xml/SchemaTest.php
Extension developers still use old MFTF and the only option for them to have tests distributed along with the code, is to provide custom phpunit.xml.

Since phpunit.xml is not regular Magento configuration file, it should be blacklisted during some schema validation static tests, particularly Magento/Test/Integrity/Xml/SchemaTest.php







<!--- MAGETWO-87290 -->*   ConfigurationTest fails when installing via composer 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1161*.



[GitHub-12574](https://github.com/magento/magento2/issues/12574)


An integration test is failing when Magento is built via composer (not when clones from github).

The problem seems to be that basePath is calculated as the app directory but the actual code is in vendor so XML configuration is not found and an uncatched exception is thrown



<!--- MAGETWO-87984 -->* Add MagentoStyle as Console Input/output in Travis tests

PR #13698  (ask Oleksii) 


 

<!--- MAGETWO-86859 -->* 
*Fix submitted by [Carlos Lizaga](https://github.com/KarlDeux) in pull request*.


[GitHub-12342](https://github.com/magento/magento2/issues/12342)



Currently Magento is using 2 different sets of tools for the JavaScript Testing:

JSTestDriver, which is considered legacy and is not supported anymore by the core team.
Jasmine, which was introduced to replace JSTestDriver. All new JS tests are implemented using it and executed in multiple CI environments, including public Travis CI and Magento's in-house CICD infrastructure.
To remove legacy framework it is required to reimplement remaining tests using Jasmine, and completely remove JSTestDriver support afterwards.



<!--- MAGETWO-86005 -->* Update functional.suite.dist.yml to handle a custom backend name 
In the file `functional.suite.dist.yml`, the value for the `backend_name` configuration is hardcoded. We should be able to customize the value by using the variable `MAGENTO_BACKEND_NAME` defined in the `.env` file.
*Fix submitted by [scribam](https://github.com/scribam) in pull request 12884*.


<!--- MAGETWO-85940 -->* Add missing preference for ObjectManager\ConfigInterface in integrati… 

PR #
*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request 12845*.

[GitHub-12844](https://github.com/magento/magento2/issues/12844)


I logged which classes were instantiated befor the error and it seems like XmlCatalogGenerateCommand has the object manager config in its dependency graph, but in the integration test environment there is no preference for it.








<!--- MAGETWO-85537 -->* Integration Test Annotation magentoAppArea breaks with some valid values. 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 996*.



[GitHub-2907](https://github.com/magento/magento2/issues/2907)






<!--- MAGETWO-85520 -->* Remove @escapeNotVerified from documentation 
*Fix submitted by [Matthias Zeis](https://github.com/mzeis) in pull request 12639*.

The inline documentation of the static test for XSS vulnerabilities doesn't reflect that `@escapeNotVerified` is disallowed in >= 2.2.

Update the comment to reflect the documentation (compare [2.1](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/templates/template-security.html#Static-Test) and [2.2](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/templates/template-security.html)).




### Tax



<!--- MAGETWO-83402 -->* Wrong order tax amounts displayed when using specific tax configuration 
*Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 12639*.

[GitHub-10347](https://github.com/magento/magento2/issues/10347)

Wrong order tax amounts displayed when using specific tax configuration 

### Themes

<!--- MAGETWO-85785 -->* 
*Fix submitted by [Oleh Kravets](https://github.com/xpoback) in pull request 12738*.

Use full name in welcome message 

[GitHub-12719](https://github.com/magento/magento2/issues/12719)


Expected result
Website loads with customer logged in, welcome message contains customer's first and last names

Actual result
Website loads with customer logged in, welcome message does not contain customer's first and last names





<!--- MAGETWO-85549 -->* The option <var name="allowfullscreen">false</var> for mobile device don't work in product view page gallery 
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1006*.

[GitHub-12490](https://github.com/magento/magento2/issues/12490)



I can't disable full screen gallery on mobile on magento 2.2.1


Expected result:
fullscrreen is disabled on mobile screens

Actual result:
fullscreen is working

[GitHub-12285](https://github.com/magento/magento2/issues/12285)







<!--- MAGETWO-86310 -->* Change getHtml to append class rather than overwrite for children 
*Fix submitted by [jonshipman](https://github.com/jonshipman) in pull request 12862*.


When creating a dependency injection for the Magento\Theme\Block\Html\Topmenu class, we are unable to change class names on children in a beforeGetHtml method because the protected method getHtml declares setClass() on all children items. What this contribution changes is checking each child for an existing class and appends the $outermostClass if true.



<!--- MAGETWO-85708 -->* Zoom the image can be closed in iPhone or Safari browser

If choose full screen zoom for any product image in iPhone 4s, 5s, 6, 6s with Safari browser, It will not unable to close that full screen zoom.
EXPECTED RESULTS:
Zoom the image should be closed
ACTUAL RESULTS:
Zoom the image is not closed








### Translations and locale



<!--- MAGETWO-86286 -->* Fix #2156 Js\Dataprovider uses the RendererInterface. 
*Fix submitted by [Dmitry Fedyuk](https://github.com/dmitry-fedyuk) in pull request 12953*.

[GitHub-2156](https://github.com/magento/magento2/issues/2156)

This lead to the 2 problems:

Inline translation does not work for Knockout templates.
Custom translators (which can be injected as an argument for \Magento\Framework\Phrase\Renderer\Composite) do not work for Knockout templates.








<!--- MAGETWO-86778 -->* No locale for Swedish (Finland). 
*Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 1207*.


[GitHub-13095](https://github.com/magento/magento2/issues/13095)









<!--- MAGETWO-87226 -->* Translate time zone label according to current locale in Stores > Configuration > Advanced Reporting 
*Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 13408*.

Time zone label gets translated according to operating system settings, instead of using current locale:




<!--- MAGETWO-86436 -->* Newsletter Label is broking on chinese Language 
*Fix submitted by [Dasharth patel](https://github.com/dasharath-wagento) in pull request 13029*.

[GitHub-12320](https://github.com/magento/magento2/issues/12320)


Set the newsletter subscribe button's title with at least two Chinese characters (either by changing it with your browser's Developer Tool or by switching the CMS language to Chinese)





<!--- MAGETWO-87575 -->* missing translations in the js-translations.json 
*Fix submitted by [Matti Vapa](https://github.com/mattijv) in pull request 13528*.



[GitHub-12081](https://github.com/magento/magento2/issues/12081)


Since updating one of our stores to Magento 2.2 the translations for 'Item in Cart' are not compiled into the var/view_processed/pub/static/frontend/{Magento-Theme}/{language code}/js-translation.json files, though the translations for 'Items in Cart' are correctly loaded.




### User interface

<!--- MAGETWO-85784-->*  Validate range-words in Form component (UI Component) 
*Fix submitted by [Robin Huy](https://github.com/robinhuy) in pull request 12739*.


I cannot configure a form field with validation range-words, it different than validate-number-range


Expected result
Category Name is validated and Category is created (or correct error message is displayed, if validation fails)

Actual result
Nothing happens explicitly. Error message appers in browser console.

<!--- MAGETWO-86025 -->* "Save Block"-button on Add New Block silently ignores clicks if the content is empty. 
*Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1032*. 


[GitHub-8114](https://github.com/magento/magento2/issues/8114)



When clicking "Save Block", nothing happens if the content editor is empty.




<!--- MAGETWO-86438 -->* Resolved Checkout-Payment-Wrong promo code cancelled issue 
*Fix submitted by [Chirag P](https://github.com/chiragp-wagento) in pull request 13030*. 

Disabled the input box for promo code when promo code is already applied to the site.
Wrong promo code cancelled issue on Checkout > Payment and Cart page.

Expected result
Promo code input box will be disabled once we apply any promo code.

Actual result
Promo code removed



<!--- MAGETWO-84903 -->* copy from 2.1.13




<!--- MAGETWO-83815 -->* Fixed php notice when invalid ui_component config is used 
*Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 12239*.

Just a tiny fix. Move `$argument['instance']` usage below `isset($argument['instance'])` check.


<!--- MAGETWO-83293 -->* Inefficient SQL query on applying filter on sales order grid
Verification for already set filter in Magento/Ui/Component/Filters added. 
As a result filters in collection "where" conditions will not be duplicated.




<!--- MAGETWO-71936 -->* Error: Invalid input datetime format of value "'DD/MM/+********"'

[GitHub-10485](https://github.com/magento/magento2/issues/10485)


Steps to reproduce
Login to Magento admin
Open an existing product for edit
Click save
Expected result
Product is saved successfully as no changes are made from the previous state of the product
Actual result
An error Invalid input datetime format of value '25/07/+00201717' appears and the product is not saved
This issue happened when I upgrade from 2.1.7 to 2.1.8. Some products seems to be able to save without an issue but majority of the ones I tried has this error with various values for the actual date.





### URL rewrites

<!--- MAGETWO-84955 -->* When using a store code in a URL, Magento now retrieves the value of `Store_Code` from the store if the store code value is empty. Previously, under these circumstances, Magento threw an error. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 12529*. [GitHub-8615](https://github.com/magento/magento2/issues/12450)


### Web API framework
<!--- MAGETWO-85287 -->* You can now use the REST API  to make requests that include a slash (/) in an SKU. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 949*. [GitHub-8615](https://github.com/magento/magento2/issues/8615)


### Wishlist

<!--- MAGETWO-69634 -->* Magento now correctly displays a product's special price when you add it to a wishlist. Previously, if you added a product with a special price to the wishlist, Magento displayed the product with its regular price.


<!--- MAGETWO-85303 -->* You can now remove an item description from a wishlist. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 981*. [GitHub-12582](https://github.com/magento/magento2/issues/12582)



## Known issues

### General





<!--- NOT NEEDED MAGETWO-87169 MAGETWO-87132 MAGETWO-86982 MAGETWO-86846 MAGETWO-86772 MAGETWO-86770 MAGETWO-86767 MAGETWO-86763 MAGETWO-86015 MAGETWO-86002 MAGETWO-73161 MAGETWO-80908 MAGETWO-84209 MAGETWO-84992 MAGETWO-77767 MAGETWO-84480 MAGETWO-83329 MAGETWO-86117 MAGETWO-83977 MAGETWO-84804 MAGETWO-84413 MAGETWO-83974 MAGETWO-82062 MAGETWO-80342 MAGETWO-80738 MAGETWO-85947 MAGETWO-83676 MAGETWO-86132 MAGETWO-85661 MAGETWO-77840 MAGETWO-82061 MAGETWO-81901 MAGETWO-73303 MAGETWO-83343 MAGETWO-83910 MAGETWO-70725 MAGETWO-83754 MAGETWO-73275 MAGETWO-75217 MAGETWO-83958 MAGETWO-87023 MAGETWO-71662 MAGETWO-82078 MAGETWO-84397 MAGETWO-87030 MAGETWO-86452 MAGETWO-85871 MAGETWO-85205 MAGETWO-84967 MAGETWO-84884 MAGETWO-83621 MAGETWO-82451 MAGETWO-82104 MAGETWO-81431 MAGETWO-81189 MAGETWO-73002 MAGETWO-72420 MAGETWO-71790 MAGETWO-71272 MAGETWO-70612
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
