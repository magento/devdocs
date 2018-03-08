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

* Significant new features that streamline the customer experience and provide merchants with greater insight into their online business.

* Numerous fixes and enhancements to core features, including significant improvements to the payment process.

* Ninety-six community-submitted bug fixes and multiple pull requests.


### New Features


Looking for more information on these new features as well as many others? Check out [Magento 2.2 Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Open Source User Guide](http://docs.magento.com/m2/ce/user_guide/getting-started.html).


## Fixes and enhancements


### Installation, setup, and deployment
<!--- MAGETWO-86496 -->* The magento backup command fails under magento 2.2.1. There was no such issue under magento 2.1.8. They are no errors in the database log. Previously, an issue with the database backup process caused the backup process to fail.  [GitHub-12877](https://github.com/magento/magento2/issues/12877) @jagritijoshi Jagriti Joshi https://github.com/jagritijoshi PR13066


<!--- MAGETWO-86045 -->* Some of the links insode theMagento installer to magento installation documentation devdocs are outdated. This PR fixes this within progress.phtml. PR 12857 @jonashrem Jonas Hünig https://github.com/jonashrem

<!--- MAGETWO-84506 -->* Add command `app:config:status` to check whether config propagation is up to date. This command can be used to decide whether `app:config:import` execution is needed during deployments. On version 2.2 a new command `setup:db:status` was added to decide whether executing `setup:upgrade` is required. The purpose of this command was to add the possibility of deploying without executing `setup:upgrade` if module versions are up to date.
With the same objective, a command to check the config status is needed to decide whether `app:config:import` is needed.

*Issue*
If `setup:upgrade` is not executed, we need to always execute `app:config:import` because there is no way to know, if config files are up to date or not. This will mean, we still need to set the maintenance and we cannot simply switch the code to the new version.


enhancement

PR12441 Juan Alonso https://github.com/jalogut jalogut

<!--- MAGETWO-84125 -->* When we start setup:rollback wrong name file was used. Now it is valid. Previously, database roll out failed. NOT NEEDED? PR 12108 [GitHib-12064](https://github.com/magento/magento2/issues/12064)

<!--- MAGETWO-84081 -->* ideally you'd be able to grant users access without giving them full rights. For 3rd party integrators for example. Previously, It's currently not possible to set access to Integrations (API access) for Admin roles. They are only available when Role Resources is set to all [GitHub-9684](https://github.com/magento/magento2/issues/9684)

<!--- MAGETWO-81841 -->* Create CLI command which will make possible to enable/disable Magento Profiler

Provide a description of the changes proposed in the pull request -->
Adjusted `app/bootstrap.php` to have it read out the flagfile `var/profiler.flag` to enable the profiler and added CLI commands to create and remove the file. [GitHub-9277](https://github.com/magento/magento2/issues/9277)

<!--- MAGETWO-81740 -->* Changed side-menu.phtml to have naming in line with the naming in home.phtml. Component was the name in prior to Magento 2.2
Updated the less files to reflect these changes and switched the icons in the menu. The Icons for "Extension Manager" and "Module Manager" are inconsistent in the main content area and left-hand menu of the Web Setup Wizard.
Updated compiled setup.css file. [GitHub-11236](https://github.com/magento/magento2/issues/11236) Danny Verkade - Cream https://github.com/dverkade
PR 11388

<!--- MAGETWO-80111 -->*  Keep maintenance mode on if it was previously enabled. When enabling maintenance mode it will get disabled after using one of the following commands:
`bin\magento module:uninstall`
`bin\magento setup:backup`
`bin\magento setup:rollback`
`bin\magento theme:uninstall`
`bin\magento deploy:mode:set production`
The changes in this PR will first check or maintenance mode was already enabled. If so, it will skip disabling maintenance mode after executing the command.

[GitHub-9918](https://github.com/magento/magento2/issues/9918) 

Joke Puts
https://github.com/jokeputs

PR 11052

 
<!--- MAGETWO-85778 -->* Match flexible static file version in nginx sample config PR12521 Scott Buchanan
scottsb
Magento 2.2 allows you to specify a custom version for static files being deployed. That means it may not necessarily be numeric like it is when using the default timestamp version numbers. This generalizes the nginx sample config to match custom versions as well.



<!--- MAGETWO-85274 -->* Update CrontabManager.php If crontab is already populated, 'php bin/magento cron:install' adds '#~ MAGENTO START' and the rest of code directly to the last row of crontab without any spaces.
Michele Fantetti
WaPoNe



<!--- MAGETWO-85744 -->*  Mobecls
Mobecls
Composer does not check availability of the "bcmath" php module. But Magento framework uses "bccomp" function in getBatchSize method of the Magento\Framework\DB\FieldDataConverter class.
This request proposes to change the com
https://github.com/Mobecls

PR 12768


<!--- MAGETWO-88149 -->* Remove forced setting of cache_lifetime to false in constructor and set default cache_lifetime to 3600
In investigating the issue it was found that the footer block does not have a cache lifetime set and it also has code in its constructor to set the cache lifetime to false. This pull request removes the forcing of cache lifetime to false and sets the default value to 3600 as done so in the \Magento\Theme\Block\Html\Topmenu block.


PR 13762

https://github.com/zolat
zolat


<!--- MAGETWO-87975 -->* Add option to add IP address to existing list

Barry vd. Heuvel
https://github.com/barryvdh



<!--- MAGETWO-87900 -->*  Add option "lock-config" for shell command "config:set"

In most cases, configuration settings should be shared among all development, staging and live instances of a shop. To achieve this, you can use the same mechanism as with the --lock switch described in http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-config-mgmt-set.html.

The only difference is that the configuration values will be stored in app/etc/config.php instead of app/etc/env.php. This file should usually be included in the VCS and thus shared between instances.

PR 13280


Andreas von Studnitz
avstudnitz



<!--- MAGETWO-87859 -->*  Show redirect_to_base config in store scope 
Jeroen
JeroenVanLeusden

https://github.com/JeroenVanLeusden

PR #13614



<!--- MAGETWO-87856 -->*  Added ability deploying static content on demand in production mode

As a merchant, I want static content to be generated on the fly, so my store's downtime is lower and cache can handle the loads. 

Improved "Production Mode" to support SC generation on the fly is implemented
possibility to turn ON/OFF this generation SC in production mode.

enhancement




<!--- MAGETWO-87838 -->* Show maintenance IP-address without commas 

When looking at existing IP-address for the maintenance status, they are shown with commas. But when setting them, commas are not accepted. This is a pretty trivial change, but makes it easier to copy, modify and paste the list of IP-addresses.

PR #13587

Barry vd. Heuvel
barryvdh
https://github.com/barryvdh


<!--- MAGETWO-87744 -->* Ensure DeploymentConfig Reader always returns an array 

When a empty configuration file is ready, this could result in loading invalid configuration, eg. just `1` instead of an array. This will lead to problems with other code, expecting a valid array.

PR #13584

<!--- MAGETWO-83782 -->*   Cron_schedule forever increasing in size. Lots of pending jobs never cleared

The size of cron_schedule table is constantly increasing every minute. The majority of the jobs are in the pending state. Some are marked as success. The cronjob steadily increases in the time taken to complete, at the moment it is taking around 30 seconds to complete, during which time, mysql and php are taking up heavy CPU usage.

A MYSQL query log shows Magento churning through all the pending requests, but they are never marked as success. Hence the ever increasing list of jobs to run.

[GitHub-11002](https://github.com/magento/magento2/issues/11002) 

unresolved




<!--- MAGETWO-82288 -->* Add MagentoStyle as Console Input/output helper object 

PR 11504

..to allow easier access to io helpers in symfony/console

Description
Gives a helper object to access styling objects in symfony console easier.

Wesley Guthrie
wesleywmd

https://github.com/wesleywmd


### Bundle 
<!--- MAGETWO-86022 -->* Fix notice during Update Bundle Product without changes. If we need to update (not new) bundle product and edit any Bundle Items then the saving process works fine.
If we assign a new category and image to the product then the saving process doesn't work.

PR 12734

dzianis-yurevich

https://github.com/dzianis-yurevich

[GitHub-6916](https://github.com/magento/magento2/issues/6916)



<!--- MAGETWO-86882 -->* Duplicating Bundle Product Removes Bundle Options From Original Product.Keeps bundle options intact in original product after duplicate.


MattUnity

https://github.com/MattUnity




<!--- MAGETWO-86354 -->* Deleting bundled options does not work


unresolved


### Catalog


<!--- MAGETWO-87447 -->*  Problem happens during updating product stock item data via REST Post/PUT request /V1/products when previously product was created via REST API call without specified ?stock_item? in extension attributes of call Body.



nuzil
https://github.com/nuzil


<!--- MAGETWO-87477 -->*  Method getUrl in Magento\Catalog\Model\Product\Attribu… #13498
https://github.com/igortregub
Igor Tregub
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

https://github.com/magento/magento2/issues/11341

Manu Gonzalez Rodriguez

https://github.com/manuelson


Attribute category_ids issue

Expected result

Category ids not visible on the front because users are not interested in knowing id categories.

Actual result: exception



<!--- MAGETWO-81942 -->* A solution for Product Repeat Issue after filter on category listing page. #11429
I have traced the issues and finally, I have found the problem. This issues magento/magento2#11139 is occurring just because of product position. When some products position are same on collection at that time we have faced this issue.

Product Repeat Issues after apply price filter on category listing page. Same products display on next page. Also sometimes it gives me random products.

Expected result
Product Should not be repeated on category page when we filter.
https://github.com/magento/magento2/issues/11139

Mayank Zalavadia

https://github.com/mayankzalavadia



<!--- MAGETWO-82313 -->* REST API - Only associate automatically product with all websites when creating product in All Store Views scope

https://github.com/adrian-martinez-interactiv4
adrian-martinez-interactiv4

Updating a product via the REST API using PUT /rest/all/V1/products/example_sku assigns it to all websites automatically.
https://github.com/magento/magento2/issues/11324
Expected result
Products should be assigned to same stores as it was previously (none) as I didn't pass website_ids in extension attributes and I didn't call V1/products/example_sku/websites
Actual result
Product is assigned to all websites even though I didn't explicitly send any website associations



<!--- MAGETWO-82464 -->* 

https://github.com/raumatbel
Raul Mateos
https://github.com/magento/magento2/issues/6770
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

https://github.com/magento/magento2/issues/9413

https://github.com/mariuscris

Marius




<!--- MAGETWO-84018 -->* Wrong return type for getAttributeText($attributeCode) #
When I pass the a multi-select attribute code to getAttributeText($attributeCode) I get an array instead of an string.

Expected result
I would expect the return to be a string type as the return type says.

Actual result
But the result is instead an array of attribute values.

https://github.com/p-bystritsky

p-bystritsky




<!--- MAGETWO-84087 -->* Can't add customizable options to product #11965

If you add custom tab with a name "options" to product form via attribute set, data-index for this tab and options from custom-options will be the same, so I changed targetName from index to name.

https://github.com/magento/magento2/issues/11792
Can't add customizable options to product
Expected result
A new customizable option form should appear
Actual result
Nothing happens on the page
A 'Uncaught TypeError: Cannot read property 'apply' of undefined' error is thrown in the console

https://github.com/RomaKis




<!--- MAGETWO-84311 -->* Single quotation marks are now decoded properly in admin attribute option input fields.

https://github.com/magento/magento2/issues/12127

Expected result
In the admin, the attribute option value text input should say "Nature's Way Supplements"
If you check the value in the database, it should be "Nature's Way Supplements"
Actual result
The text input says: Nature&#039;s Way Supplements
The database entry says: Nature&#039;s Way Supplements

Erfan
https://github.com/erfanimani



<!--- MAGETWO-84367 -->* Can't save emoji in custom product options

Expected result
Either cart would render fine or show an error that specific emoji insertion is not supported
Actual result
The cart is empty 

Carlos Lizaga

https://github.com/KarlDeux
https://github.com/magento/magento2/pull/12253



<!--- MAGETWO-84411 -->* Unused product attributes display with value N/A or NO on storefront. #12057
Attributes with no value set should not display on storefront

https://github.com/magento/magento2/issues/6634
https://github.com/magento/magento2/issues/9961

https://github.com/magento/magento2/issues/9961

https://github.com/p-bystritsky

https://github.com/magento/magento2/pull/12057



<!--- MAGETWO-84498 -->* Fix delay initialization options for customized JQuery UI menu widget #12161
describes the ability to set the delay on the JQuery widget opening/closing with an option 'delay'.

However, in the code, no such option appears and two undocumented options that aren't used do appear.

This PR cleans up the unused variables and passes the delay parameter into JQuery menu widget so it is used.

DEVDOCS

https://github.com/scazz010
Sam Carr






<!--- MAGETWO-84515 -->* Fixed missing 'size' and 'type' props on a third-party category images [Backport 2.2] #12443
Fixes hardcoded 'image' key when processing `ImageBackendModel` attribute.

Vova Yatsyuk
https://github.com/vovayatsyuk





<!--- MAGETWO-84652 -->* Category page X-Magento-Tags headers contains product cache identities even which category display mode is set to "Static block only" #12466
When varnish is selected as the cache engine, If there are products associated to a respective category, and the category `display mode` is set to `Static block only`, on the category page `X-Magento-Tags` headers contains product item cache identities even when no product is displayed for the page.

Atish Goswami
https://github.com/atishgoswami





<!--- MAGETWO-84665 -->* Can't delete row in dynamicRows component

https://github.com/RomaKis


https://github.com/magento/magento2/issues/8830


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



<!--- MAGETWO-84808 -->* Missing cascade into attribute set deletion. #12167
https://github.com/nmalevanec
https://github.com/magento/magento2/issues/12110

Steps to reproduce
Got to attributes set admin page
Delete your custom attributes set
Confirm you want to remove attached products also
Expected result
Table url_rewrite should be cleaned from references to removed products
A new product named like an old one should be insertable via API or admin interface
Actual result
Impossible to add a new product named like an old one because a request_path with the same value as computed already exists in table url_rewrite;



<!--- MAGETWO-84949 -->* Added correction for og:type content value

12530

https://github.com/atishgoswami


<!--- MAGETWO-85293 -->*  Verbiage Update Required: Product Image Watermark size Validation Message. #985
https://github.com/nmalevanec

https://github.com/magento/magento2/issues/12613

Expected result
The system expects the image size defined in 200x300 format as said in on-screen example format. But the validation message is misleading which has uppercase X instead lowercase x.
Actual result
Validation Message Screenshot



<!--- MAGETWO-85294 -->*  Product change sku via repository. #984	

https://github.com/nmalevanec
https://github.com/magento/magento2/issues/12535

Expected result
saved
Actual result
It catches as NoSuchEntityException and creates as a new product




<!--- MAGETWO-85301 -->* catalogProductTierPriceManagementV1 DELETE and POST operation wipes out media gallery selections when used on store code "all". #977

https://github.com/nmalevanec

https://github.com/magento/magento2/issues/10797

With our new integration, make a curl request to delete the tier price, using the store code all (NOT default, that works just fine).

Expected result
The tier price for a quantity of 3 should be deleted from the product, and nothing else.
Actual result
The tier price for a quantity of 3 is deleted from the product, AND all the image selections for the product are deleted as well. (Images are still part of the product's image gallery, but the selections are lost).



<!--- MAGETWO-85307 -->* Sort by Price not working on CatalogSearch Page in Magento 2 #929
https://github.com/RomaKis

https://github.com/magento/magento2/issues/12468

I got an issue on catalogsearch page that sort by price not working after change Product Listing Sort by Price from magento backend.





<!--- MAGETWO-85545 -->* catalog:images:resize = getimagesize(): Read error! #1000

https://github.com/magento/magento2/issues/8204

https://github.com/RomaKis

When I attempt to execute:
php bin\magento catalog:images:resize

After a period of time, I receive this error:

Notice: getimagesize(): Read error! in /vendor/magento/module-catalog/Model/Product/Image.php on line 410

However, no report is pushed into any log file, so there is no way to find out the file causing the read error.


Expected result
It should just skip the offending file, and/or update the log file to indicate which/where the problematic file resides.




<!--- MAGETWO-85546 -->* 2#12259Save and Duplicated product not working #983	
https://github.com/magento/magento2/issues/12259


https://github.com/p-bystritsky



<!--- MAGETWO-85636 -->* 6486: Unable to save certain product properties via Rest API #1018

https://github.com/nmalevanec

Unable to save certain product properties via Rest API

https://github.com/magento/magento2/issues/6486

Steps to reproduce
Create a product via the Rest API, including a price and weight
Expected result
The product is saved with the price and weight
Actual result
The price and weight are not saved and are not returned in the result of the POST request.




<!--- MAGETWO-86016 -->* Latest Google Chrome Browser issue with duplicate id… #1036
Latest Google Chrome Version { Version 63.0.3239.84 (Official Build) (64-bit) } detects duplicate ids and console.log an ERROR


https://github.com/serhii-balko

id="email".
Some pages (e.g. Login Page, Contact Page, ...) contains input element with id="email" too.
Internet browsers detects duplicate ids and console.log an ERROR.





<!--- MAGETWO-86019 -->* 
Fixed hasDataChanges attribute for loaded EAV collection items

https://github.com/magento/magento2/issues/12374

Model hasDataChanges always true

Expected result
hasDataChanges returns false because no data has been changed
Actual result
hasDataChanges returns true
Performance impact on $category->save()



https://github.com/virtual97




<!--- MAGETWO-86021 -->* Add more parameters to ajax:addToCart #12875

https://github.com/srenon
Renon Stewart

The SKU by itself is not very useful because for most third-party integration you will need at minimum SKU and qty.





<!--- MAGETWO-86023 -->* magento/magento2#12294: Bug: Adding Custom Attribute - The value of A… #12755

https://github.com/virtual97

xpected result
Attribute should save rather than trying to collect data that can no longer be entered.



<!--- MAGETWO-86662 -->* Adding 'is_saleable' attribute to sort of product collection causes exception and adding 'is_salable' has no effect. #1045
https://github.com/magento/magento2/issues/7768

n Magento\Catalog\Model\ResourceModel\Product\Collection, addAttributeToSort() has the following lines:

        } elseif ($attribute == 'is_saleable') {
            $this->getSelect()->order("is_saleable " . $dir);
            return $this;
        }
But the generated SQL query selects stock_status_index.stock_status as 'is_salable', not 'is_saleable'. So adding 'is_saleable' causes an SQL exception and since 'is_salable' is not a product attribute, it silently fails to be added to the SQL statement.

https://github.com/nmalevanec
Expected result
The product stock_status is included in the query sort clause.
Actual result
Exceptions:





<!--- MAGETWO-86547 -->* Add failsafe to items.phtml #13086
https://github.com/samgranger
We received a warning that $exist is undefined - not entirely sure what the exact scenario was but adding this as a failsafe.
I have made sure that $exist is defined (null) in the 'default' and 'other' case.






<!--- MAGETWO-84267 -->* #11528 can't save customizable options #12048

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

https://github.com/luismiguelyangehuaman
LuisMi




<!--- MAGETWO-85288 -->* 8624: Stock status not coming back after qty update #955
Stock status not coming back after qty update #8624

Steps to reproduce
Set simple product qty to zero (and you will see it will turns to Out of Stock) & hit Save
Set same product qty to 1 and save
Expected result
After insert qty more than zero - changed new stock status In Stock

Actual result
Still Out of Stock

https://github.com/RomaKis




<!--- MAGETWO-82949 -->* Product's are linked to categories without notice of any website. The visual merchandiser shows to lowest price of in stock and active simples that are associated with the configurable. The stock check ignores the website scope so if a simple is in stock on the website level but out of stock on default level it should been ignored to determine the lowest price. This commit fixes that issue.

Before the fix:

The price of the out of stock simple product was shown.
After the fix:

The price '0,00' is shown.

Visual Merchandiser show prices of out of stock simple products for the associated configurable product




<!--- MAGETWO-86663 -->* 11897: Catalog product list widget not working with multiple sku. #1050

https://github.com/magento/magento2/issues/11897


Steps to reproduce
Added new catalog product list widget
added all condition with multiple SKU
Expected result
showing product with selected SKU on the page
https://github.com/nmalevanec


Actual result
it will not showing any product on the page and showing error as "We're sorry, an error has occurred while generating this email."




<!--- MAGETWO-85876 -->* Reorder adding of page layout handles #12807
https://github.com/aschrammel
Andreas Schrammel

Add type-dependent layout handles before more specific ID/SKU layout
handles.

When updating a product page layout for a specific ID with `catalog_product_view_id_<product_ID>.xml` some changes may be overwritten by a less specific `catalog_product_view_type_<product_type>.xml`.



<!--- MAGETWO-87897 -->*  

<!--- MAGETWO-87847 -->* 

<!--- MAGETWO-87526 -->* Subcategory url path will be updated for store view accordingly to url-path of its parent category 

<!--- MAGETWO-87514 -->* 

<!--- MAGETWO-87496 -->*  


<!--- MAGETWO-87294 -->* 

### Cart and checkout


<!--- MAGETWO-83780 -->* address with saveInAddressBook 0 are still being added to the address book for new customers. If you place an order as a guest and set the save_in_address_book for an address on 0, that address will still be copied to the customer address book when registering as a new customer on the checkout success page.

If you place an order as a guest and set the save_in_address_book for an address on 0, that address will still be copied to the customer address book when registering as a new customer on the checkout success page.

https://github.com/magento/magento2/issues/7691

<!--- MAGETWO-85297 -->* Custom Checkout Step and Shipping Step are Highlighted and Combined upon Checkout page load
Steps to reproduce
Create a custom checkout step. Set the step to appear first.
Start the checkout process
Both my custom step and the shipping step are displaying and highlighted
Upon using the next buttons the steps show up in their own section
Expected result
Shipping step should be hidden since it is now step 2

https://github.com/RomaKis
Roman K.

PR 975




<!--- MAGETWO-85317 -->* Currency change, Bank Transfer but checkout page shows "Your credit card will be charged for" #993

PR 993

https://github.com/RomaKis
Roman K.




<!--- MAGETWO-86506 -->* Fix JS error on cart from postcode validation when 'US' is deselected as an allowed country
PR 13051
https://github.com/codekipple
codekipple

To get this error the Magento store has to have deselected 'United States' in the 'Allowed Countries' admin option. Select any country except 'United States' as the default country:- Admin -> Stores -> configuration -> General -> Default Country




<!--- MAGETWO-86543 -->* Fix Magento_Checkout address formatting 

PR #13082

https://github.com/nfourteen

nfourteen



<!--- MAGETWO-86896 -->* New Cart Rule : Small styles issue because of styles…
 Text is cut because of left margin.

Steps to reproduce
Have configured one website with name SHOP.NAME
Go to Marketing -> Cart Rules -> New Cart Rule
When page load go immediately (no input provided) to section "Store View Specific Labels" and unfold
Check if labels are on left and they are cut. Even more, they duplicate.
Expected result
In one line with others item. After all, not cut.

Serhii
serhii-balko

https://github.com/serhii-balko

[GitHub-12231](https://github.com/magento/magento2/issues/12231)



<!--- MAGETWO-86617 -->* Make customer name link to customer dashboard 
When checking out as a guest customer and click "create an account" on success page to create a customer account, you will not be able to click on the customer name to jump to the customer record.
PR #12998

https://github.com/srenon

Renon Stewart


<!--- MAGETWO-87340 -->* Require Customer To Be Logged In To Checkout 

PR #1148

https://github.com/RomaKis
Roman K.

[GitHub-7848](https://github.com/magento/magento2/issues/7848)



<!--- MAGETWO-73537 -->* Browser history is not maintained when user navigated from Checkout contact info page to check out payment info page. Pressing browser back again, user lands on product's page.
STEPS TO REPRODUCE
1. Add product(s) to cart
2. Go to checkout page 
3. In checkout "Contact information" page fill all the details and click on "Next"
4. User will be landed on Checkout "Payment Info" page. Browser url changed to "/checkout/#payment"
5. Click on browser back.

Is issue reproducible in Magento Version: Yes
Is issue reproducible in Trunk: Yes
Is issue reproducible in the customer's install: Yes

ACTUAL RESULTS
Use is still on payment information page. UI is not changed. But browser url changes to "/checkout".

EXPECTED RESULTS
User will be navigated to /checkout and checkout "contact info" page will be displayed.



unresolved



### Configurable products


<!--- MAGETWO-86781 -->* fixed issue prices aren't readable when using custom price symbol. While assigning prices to configurable products, prices aren's readable when using custom price symbol. When creating configurations on a configurable product, while assigning prices to configurable products, prices aren's readable when using custom price symbol.

PR #13025

https://github.com/pradeep-wagento
pradeep-wagento

[GitHub](https://github.com/magento/magento2/issues/12430)

<!--- MAGETWO-86311 -->*  Sort configurable attribute options by sort_order. Configurable attribute options are not sorted on the product page.


PR 12963

https://github.com/wardcapp

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

https://github.com/EfremovaVI
Vasilina



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


PR #12737

Zamaroka
https://github.com/zamoroka

<!--- MAGETWO-85634 -->* Incorrect partial attribute (EAV) reindex (Update by Schedule) for configurable product with childs visibility "Not Visible Individually" (Update by Schedule) for configurable product with childs visibility "Not Visible Individually"

Incorrect partial attribute (EAV) reindex (Update by Schedule) for configurable product with childs visibility "Not Visible Individually

PR #1023

[GitHub-12667](https://github.com/magento/magento2/issues/12667)

https://github.com/RomaKis




<!--- MAGETWO-85286 -->*  LinkManagement::getChildren() does not include product visibility. LinkManagement::getChildren() does not include product ID's (and visibility) 

When I'm using the Service Contract Magento\ConfigurableProduct\Api\LinkManagementInterface::getChildren($sku), I get an array of child products, but those products don't seem to be complete. For instance, getId() and getVisibility() returns NULL on those child products.



PR 986

https://github.com/nmalevanec


Malyovanets Nickolas




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
https://github.com/magento/magento2/issues/10415

PR 12964

https://github.com/wardcapp

wardcapp





<!--- MAGETWO-85580 -->* invalid parameter configuration provided for argument

Tomasz Gregorczyk
https://github.com/Tomasz-Silpion





<!--- MAGETWO-85300 -->* Silent error when an email template is not found 

Steps to reproduce
Create a custom controller, sending a custom mail, mostly like this
Make a mistake in the template file name
Try to send the mail
Expected result
The mail is correctly sent with content
Actual result
The mail is correctly sent but the body is empty

https://github.com/RomaKis

Roman K.

[GitHub-8437](https://github.com/magento/magento2/issues/8437)




<!--- MAGETWO-84862 -->* Too many password reset requests even when disabled in account address book page.

When attempting to reset a customer's password via the admin, the system tells me 'Too many password reset requests' even when I have disabled the 'max wait time between password resets' in the store configuration settings.

When attempting to reset a customer's password via the admin, the system tells me 'Too many password reset requests' even when I have disabled the 'max wait time between password resets' in the store configuration settings.

[GitHub-11409](https://github.com/magento/magento2/issues/11409)

Cole Hafner
coleHafner




<!--- MAGETWO-84439 -->* Remove unnecessary use operator for Context, causes 503 error in account address book page.

 Unable to open Address book after account creation #12180

PR 12220


Chris Pook
chris-pook

[GitHub-12180](https://github.com/magento/magento2/issues/12180)



<!--- MAGETWO-83026 -->* Made method public so a plugin is possible.

Derrick Heesbeen
dheesbeen

PR  #11878
Customer isConfirmationRequired method exists in two places.
The method in the customer object is public. Which makes it possible to plugin it. 
The method in the accountManagement object is protected. Which makes it impossible to plugin it.

This PR only makes the method in isConfirmationRequired in AccountManagement class public.





<!--- MAGETWO-82635 -->* Always add empty option for prefix and/or suffix if optional 

PR #11462




<!--- MAGETWO-85741 -->* Fix Back to Sign in url on confirmation form #12759
Storefront Back to Sign in button does not work as expected
Expected result
Customer is redirected to Sign In form

Actual result
Page is just reloaded

[GitHub-12715](https://github.com/magento/magento2/issues/12715)



StasKozar

https://github.com/StasKozar






<!--- MAGETWO-85672 -->* 
When disabling the Redirect Customer to Account Dashboard after Logging in setting, the login url should include an referer. This works but not in the window.checkout object.

Expected result
The window.checkout.customerLoginUrl contains an url which includes the referer in base64 encoding. For example: https://myshop.com/customer/account/login/referer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0
Actual result
The login url without referer. For example: https://myshop.com/customer/account/login

PR 12630

https://github.com/quisse
Tommy Quissens



[GitHub-12627](https://github.com/magento/magento2/issues/12627)



<!--- MAGETWO-86989 -->* 
Add the domReady! statement 

PR #13310
When you are on the cart page and click on the 'edit' link for a product you are being redirected to the PDP and the current amount for that product that is in the cart should be filled in the amount field on the PDP.

When you are on the cart page and click on the 'edit' link for a product you are being redirected to the PDP and the current amount for that product that is in the cart should be filled in the amount field on the PDP.

In production mode when the settings minify and merge the javascript files in Stores > Configuration > Advanced > Developer are enabled the jquery selector sometimes (depending on the amount of javascript files) returns no values because the DOM is not ready when the script is executed.

By adding the domReady! statement in the require part we are sure that when the jQuery selector is being filled the DOM is ready.



https://github.com/arnoudhgz
Arnoud Beekman



### Dashboard


<!--- MAGETWO-86443 -->* Make "top destinations" config field configurable on store level 

PR #13052
This makes the configuration field "Top destinations" configurable on store level. It was only available on global level before.
Fixed Issues
You may want to set different Top destination countries depending on website or store view. You could not do that up to now.


Andreas von Studnitz
https://github.com/avstudnitz




<!--- MAGETWO-86205 -->* Handle multiple errors in customer address validation when shown in adminhtml customer edit page 

PR #12922
When multiple validation errors are found trying to save a customer address, errors are not properly shown in adminhtml customer edit page
When multiple validation errors are found trying to save a customer address, errors are not properly shown in adminhtml customer edit page

https://github.com/adrian-martinez-interactiv4

adrian-martinez-interactiv4




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


https://github.com/magento/magento2/issues/11509
https://github.com/magento/magento2/issues/11882

It's not possible to change the "dev/debug/debug_logging" sys config field while in production mode. It should definitely be set to "No" as default (like when switching from developer/default to production) but you should be allowed to change this value even while in production mode.



<!--- MAGETWO-83120 -->* Fix error when generating urn catalog for empty misc.xml 

PR #11686
Fix error when generating urn catalog for existing empty `misc.xml`. I fixed this by creating another DomDocumentFactory, for PhpStorm specific `misc.xml`. This factory checks if the passed data is empty, and if so, create the `misc.xml` xml structure that `\Magento\Developer\Model\XmlCatalog\Format\PhpStorm` expects.

https://github.com/magento/magento2/issues/5188

Error generating URN-catalog when blank one exists

https://github.com/tdgroot
Timon de Groot


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

https://github.com/magento/magento2/issues/6965





<!--- MAGETWO-85583 -->* 

States list is required in India for setting new tax (GST) implementation and for accuracy in shipping address.
This is list of regions need to be appended in InstallData in magento-directory module.

https://github.com/magento/magento2/issues/12378

https://github.com/p-bystritsky

p-bystritsky

Selecting State/Province for India is now required and drop-down field with appropriate values is shown on Checkout page.




<!--- MAGETWO-86170 -->* 
Can't remove State is required for all countries

PR 12917

https://github.com/magento/magento2/issues/12894


### EAV attributes

<!--- MAGETWO-86240 -->* Naming collision in Javascript ui registry (backend) 


https://github.com/VladimirZaets

Volodymyr Zaets

The JS is broken in next case: when new configurable attribute is created with the code name that is equal to "index" property of any uiComponent on the page.
https://github.com/magento/magento2/issues/12555

Add a configurable attribute with attribute code set as "content", or any other name which exists as identifier on the product edit page (for example, "gallery", "review" ,"related").

Add it to the default attribute set

Edit a product.

Expected result
You can properly edit/save the product and add configurations setting that attribute.
Actual result
All kinds of Javascript issues arise when trying to save the product
This is because somehow most HTML elements end up in a registry and are then retrieved on various places.




<!--- MAGETWO-85875 -->* required attribute set id filter on attribute group repository getList
PR 12105

this will enable you to get the attribute groups via a single query for multiple attribute sets? 
Marius Strajeru

https://github.com/tzyganu

https://github.com/magento/magento2/issues/11936



<!--- MAGETWO-85772 -->* Multiselect Attribute is not saved 

Fixed attribute loading for different entities in AbstractEntity

Multiselect Attribute is not saved for a product in the admin panel when it has a related product using another attribute set

Expected result

Multiselect Attribute should be saved for a product in the admin panel when it has a related product using another attribute set.

Actual result

Multiselect Attribute is not saved for a product in the admin panel when it has a related product using another attribute set


PR #12767

https://github.com/awarche
awarche







<!--- MAGETWO-85579 -->* Attribute repository resets sourceModel for new attributes. 

PR #1012
https://github.com/nmalevanec

Malyovanets Nickolas

https://github.com/magento/magento2/issues/10814

When creating a new product attribute through code, product attribute repository save method resets source model to null or something else. Therefore a new attribute is created with an empty option (in case of select or multiselect input type). This happens only for new attributes not when updating exiting attributes.

Expected Result
It is expected that when some data is set on a model, repository should not change or reset it.







<!--- MAGETWO-85302 -->*  Wrong invoice entity_model in table eav_entity_type. 

PR #980 

Malyovanets Nickolas

https://github.com/nmalevanec

https://github.com/magento/magento2/issues/10123









<!--- MAGETWO-84272 -->* Update AbstractBackend.php 

PR #12120

when the validation message is returned, the attribute code is displayed.

That prevents a better translation for other languages, has been adjusted to return the label instead of the attribute code.






<!--- MAGETWO-72597 -->* Impossible to perform mass update on product with 60+ attributes in system
Add ability to perform mass update on product with 60+ attributes in system




<!--- MAGETWO-85833 -->* Stop the profiler when returning early in \Magento\Eav\Model\Config::getAttribute 

Magento\Eav\Model\Config::getAttribute doesn't stop the Profiler when returning early, and thus incorrectly reports run time in these cases.
This pull fixes it by stopping the profiler before returning

#12810

https://github.com/nicka101

Nick Anstee



<!--- MAGETWO-87588 -->*  Fix json encoded attribute backend type to not encode attribute value multiple times 

PR #13551
https://github.com/tkotosz
Tibor Kotosz
the json encoded attribute value loaded back correctly, but if you save a product muliple times then the attribute value will also be encoded muliple times which will cause issue during the next load.

This PR fixes the `beforeSave` method to only encode the attribute value when it is not encoded already.


Expected result:
Product is saved.

Actual result:
Product cant be saved and error message appear "Unable to unserialize value."






<!--- MAGETWO-87354 -->* Usage of deprecated each() function. this fix removes this deprecated function.

Ihor Sviziev
https://github.com/ihor-sviziev


### Email

<!--- MAGETWO-83741 -->* 
Sending emails from Admin in Multi-Store Environment defaults to Primary Store

https://github.com/RomaKis



Steps to reproduce
Create two stores: ABC.com (primary) and XYZ.com
Have customer place order on XYZ.com
Go into admin, click on order from XYZ.com, and resend order confirmation email

Expected result
Should send email using FROM EMAIL and FROM NAME of store XYZ.com
Actual result
Magneto sends correct email content, but FROM EMAIL and FROM NAME are both from the primary store ABC.com instead of the store the customer used, XYZ.com. Creates confusion for customer as the FROM information is not the store from which they placed the order. Happens on any email resent from admin--confirmation, shipping, credit, etc.

https://github.com/magento/magento2/issues/11740


<!--- MAGETWO-86881 -->* Misleading feedback when sending tracking information email 
PR #1245

https://github.com/nmalevanec
Malyovanets Nickolas
. Create order with some non-virtual products.
2. Create invoice and shipment for created order.
3. Navigate to created shipment view page.
4. Press "Send Tracking Information" button and confirm sending email to customer.
5. Check success message is: "An email confirming the order is underway has been sent to the customer."
6. Change en_US.csv in app/code/Magento/Shipping or vendor/magento/module-shipping(in case of composer version), or create your own. Find line with 'An email confirming the order is underway has been sent to the customer.' and change translation to something like "An email confirming the order is underway has been sent to the customer. edited"
7. Clean cache, deploy static content.
8. Repeat steps 3 and 4.
9. Check success message has changed to "An email confirming the order is underway has been sent to the customer. edited".

https://github.com/magento/magento2/issues/5697

When clicking the “Send Tracking Information” button when viewing the shipment info the response is “You sent the shipment”.

Expected result
Notification telling the user that the email confirming the order is underway has been sent.

E.g. "An email confirming the order is underway has been sent to the customer.".

Actual result
Notification telling the user “You sent the shipment”.



### Frameworks

<!--- MAGETWO-86337 -->* Ability to sitch to default mode 

pr #12752	
https://github.com/magento/magento2/issues/4292
Why can't one switch back to default mode ? 
Expected result
Mode switched back to default
Actual result
Error message appears: "Cannot switch into given mode 'default'".

https://github.com/Etty
Etty




<!--- MAGETWO-87124 -->*  Update the Emogrifier dependency to ^2.0.0 

pr #13132

https://github.com/oliverklee
Oliver Klee


Emogrifer 2.0.0 does not introduce any backwards-compatibilty-breaking
API changes. This version adds new features, fixes bugs and improves
the resulting HTML. So the update should be reasonably safe.

<!--- MAGETWO- 86654-->* X-Magento-Vary & PHPSESSID now have the same expiration time
Fix undeclared dependency magento/zendframework1 by magento/framework #12990
https://github.com/ihor-sviziev
Ihor Sviziev

https://github.com/magento/magento2/issues/12967


<!--- MAGETWO-85290 -->* File Put Contents file with empty content. 

https://github.com/nmalevanec
Malyovanets Nickolas

https://github.com/magento/magento2/issues/7467

Expected result
file.txt contains is created
Actual result
getting error The specified "file.text" file could not be written

PR #962



<!--- MAGETWO-85770 -->* Cannot subscribe to events with a number in name 
https://github.com/Mobecls
Mobecls
https://github.com/magento/magento2/issues/5035

I can not to subscribe on change of all sections in Stores ->Configuration using event admin_system_config_changed_section


PR #12758


<!--- MAGETWO-85872 -->* Fix PhpDoc to show correct parameter types 

PhpDoc only shows string as type, although array is a valid parameter type as well.



https://github.com/FreekVandeursen
Freek Vandeursen





<!--- MAGETWO-86484 -->* Fix jumping content on page reload in admin area 

PR #12985
https://github.com/avoelkl
Anna Völkl
This PR sets a min-height on the notices-wrapper, causing the page not to jump any more. 



<!--- MAGETWO-86277 -->* Correctly construct Magento\Framework\Phrase 

PR #12951	

https://github.com/punkstar
Nick





<!--- MAGETWO-86154 -->* Wrong page cached for logged in user	
X-Magento-Vary & PHPSESSID now have the same expiration time

Partner reported that Cookie X-Magento-Vary has expiration "Session" - which means it is not considered expired until the browser is closed.
Cookie PHPSESSID has finite expiration time (not Session) - by default 1 hour. The conflict arises when PHPSESSID cookie is already expired, but "X-Magento-Vary" cookie is still valid. In that case if Varnish storage is empty, it will request the backend (Magento) and get the content for not logged in user (because PHPSESSID is expired), but cache it for logged in user (because X-Magento-Vary is not expired).



<!--- MAGETWO-85992 -->* Throw ValidationException for invalid xml 

PR #12859 

https://github.com/pmclain
Patrick McLain

This change ensures the offending file path is output in the error
report.

Currently, when malformed `$content` is fed into `\Magento\Config\Model\Config\Structure\Reader::processingDocument` and unhandled `\Exception` is thrown. The output fails to indicate the location of the offending file,



<!--- MAGETWO-88146 -->*  Add ObserverInterface to the api 

PR #13759

https://github.com/fooman

Kristof, Fooman

Creating an observer that uses ObserverInterface should not trigger a patch level dependency on magento/framework.



<!--- MAGETWO-88115 -->* Add RewriteBase directive template in .htaccess file into pub/static folder 

PR #13678 
Add RewriteBase directive template in .htaccess file into pub/static folder

https://github.com/ccasciotti
Cristiano Casciotti





<!--- MAGETWO-87261 -->*  Edited doc block of the walk method in a Collection 

PR #13373

https://github.com/ByteCreation
bytecreation

The following callback is created by passing an array that consists of an object and a string. The method of that object will be used in the callback, and each model in the collection will be passed to the method as the first parameter. While this results in a successful callback, the doc block of the walk method of a collection incorrectly reports that it will only accept a string, while the following example uses an array.





#### App framework

<!--- MAGETWO-81802 -->* Magento 2.2.0rc23: Customer Grid Indexer not working 

PR #10838

Cutomer Grid index works properly while upgrading from 2.1 to 2.2

The Customer Grid Indexer doesn't work, when reindexing via CLI.

https://github.com/magento/magento2/issues/10838

Actual result: 
At this stage only problems occuring, which are caused by plugins from extern modules using deprecated functions, classes, etc.)

ask oleskii for attribution


<!--- MAGETWO-80223 -->* Fix syntax of expectException() calls 

PR #11099
https://github.com/schmengler
Fabian Schmengler 
https://github.com/magento/magento2/issues/11059

It seems like during the transition to PHPUnit 6, setExpectedException($class, $message) has been bulk replaced by expectExcpeption($class, $message)

But the new expectException() method only takes one parameter, namely the exception class. To check the message as well, a second method is needed: expectExceptionMessage()






<!--- MAGETWO-84003 -->*  exception message is wrong and misleading in findAccessorMethodName() of Magento\Framework\Reflection\NameFinder 

PR #12303

https://github.com/magento/magento2/issues/9764

https://github.com/RomaKis




<!--- MAGETWO-84016 -->* Fixed 'Non-numeric value' warning on account create/save when DOB field is visible 

PR #12302

broken customer registration page when "Date of Birth" field is visible on the frontend.
not working customer save method when DOB is visible

https://github.com/magento/magento2/issues/12146

Customer with empty "Date of Birth" cannot be saved even when it is not marked (or checked on the JS side) as mandatory.

Vova Yatsyuk

https://github.com/vovayatsyuk



<!--- MAGETWO-84371 -->* 


https://github.com/magento/magento2/issues/10210

Transport variable can not be altered in email_invoice_set_template_vars_before Event
We waht to change the payment_html for banktransfer invoices. Unfortunately the instruction is also sent in invioce email. And there the customer already has paid the bill.

https://github.com/RomaKis




<!--- MAGETWO-84372 -->* South Korea Zip Code Validation incorrect #903

Postal codes in South Korea are 5-digit numeric, whose system newly introduced in August 1, 2015.

https://github.com/magento/magento2/issues/9515

Zip code validation fails on adresses from South Korea since it validates against deprecated format.
Current validation is 123-456. This should be 12345.

https://github.com/RomaKis






#### Configuration framework

<!--- MAGETWO-84464 -->* Encrypted scope-specific config values fail to decrypt on PHP7 #8591

It seems that scope based config fails to decrypt data on anything but the default store

Actual result:
The user field is blank, and the password field is garbed nonsense, from what I can only assume is a fail to decryp

https://github.com/odubovyk

DubovykOleksandr



<!--- MAGETWO-84815 -->* Format generated config files using the short array syntax #12499

 We are using a standard that complies with all requirements of PSR-2 and has some rules inherited from ZF coding standard. Although this document is not published yet.

 Malyovanets Nickolas
https://github.com/nmalevanec






#### JavaScript framework

<!--- MAGETWO-83401 -->* Fix depends field not working for radio elements #11539

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

Javier Villanueva

https://github.com/jahvi




<!--- MAGETWO-83993 -->* Fixed a js bug where ui_component labels have the wrong sort order. #11846
If you extend an dynamic-row element in a ui_component and add a sort order attribute with a amount between the others, the Fields are in the correct order but the label is always the last one.
If you extend an dynamic-row element in a ui_component and add a sort order attribute with a amount between the others, the Fields are in the correct order but the label is always the last one.

Harald Deiser
https://github.com/deiserh











#### Session framework

<!--- MAGETWO-83373 -->* Fix for issue 9633 500 error on setup wizard with memcache #11608
https://github.com/sylink

Marty S
https://jira.corp.magento.com/browse/MAGETWO-83373
Expected result
The Setup Wizard page loading successfully
Actual result
Page returns an HTTP ERROR 500. 





<!--- MAGETWO-83287 -->* Generate new FormKey and replace for oldRequestParams Wishlist #12038
https://github.com/magento/magento2/issues/11825
2.1.9 Item not added to the Wishlist if the user is not logged at the moment he click on the button to add it.

Expected result
You are redirected to the customer account Wishlist page and the product is added.
Actual result
You are redirected to the customer account Wishlist page but the product is not added.




<!--- MAGETWO-86880 -->* WEBAPI: PHP session is always started #1247
Although REST API should be stateless for anonymous calls, PHP session is always created. This is caused by the fact that session_start() is called implicitly from '\Magento\Framework\Session\SessionManager' constructor.

There are 2 issues with this: Spammed PHP session which will never be used, if remote address validation is enabled for sessions, clients with dynamic IP address will get 302 redirect instead of REST API result, and this is undesirable.

https://github.com/magento/magento2/issues/7213
https://github.com/serhii-balko
Serhii




#### Testing framework



#### Web API framework

<!--- MAGETWO-83854 -->* Address Book: Access denied is displaying when user click on add new address
Fixed bug when user with denied permissions for "Negotiable quote editing" was unable to create customer address


<!--- MAGETWO-84979 -->* Fix swagger-ui on instances of Magento running on a non-standard port #12541
https://github.com/JeroenVanLeusden
Jeroen


<!--- MAGETWO-84994 -->* Can't emptying values by magento 2 api #916
https://github.com/magento/magento2/issues/8862
https://github.com/RomaKis




<!--- MAGETWO-85534 -->* [GitHub] Order of how arguments are merged in multiple di.xml-… #995
https://github.com/serhii-balko
Serhii

https://github.com/magento/magento2/issues/8647
Order of how arguments are merged in multiple di.xml-files causes unexpected results #8647
Update the webapi module to explicitly choose the default-renderer when Accept = */*. However, this is not the reason of this bug, but more of a result.





<!--- MAGETWO-85538 -->* SearchCriteriaBuilder builds wrong criteria (ORDER BY part). #1003
https://github.com/nmalevanec
Malyovanets Nickolas
https://github.com/magento/magento2/issues/5738





### General

<!--- MAGETWO-87030 -->* 

<!--- MAGETWO-86727 -->*  

<!--- MAGETWO-87341 -->* 

<!--- MAGETWO-87342 -->*  

<!--- MAGETWO-87657 -->*  

<!--- MAGETWO-86997 -->* 

<!--- MAGETWO-86748 -->* 

<!--- MAGETWO-86722 -->* 


<!--- MAGETWO-87033 -->* 

<!--- MAGETWO-88155 -->*  

<!--- MAGETWO-87950 -->*  



<!--- MAGETWO-86886 -->* 

<!--- MAGETWO-86883 -->* 


<!--- MAGETWO-86840 -->* 

<!--- MAGETWO-88261 -->* 


<!--- MAGETWO-86746 -->* unresolved

<!--- MAGETWO-87899 -->* 

<!--- MAGETWO-86723 -->* 



<!--- MAGETWO-86630 -->* 


<!--- MAGETWO-86564 -->* 

<!--- MAGETWO-88145 -->*  





<!--- MAGETWO-86452 -->* 

<!--- MAGETWO-86433 -->* 

<!--- MAGETWO-86431 -->* 





<!--- MAGETWO-86248 -->* 


<!--- MAGETWO-86035 -->* 





<!--- MAGETWO-85871 -->* unresolved


<!--- MAGETWO-85780 -->* 

<!--- MAGETWO-85779 -->* 

<!--- MAGETWO-85773 -->* 


<!--- MAGETWO-85713 -->* 




<!--- MAGETWO-85643 -->* 

<!--- MAGETWO-85610 -->* 

<!--- MAGETWO-85503 -->* New block element "Magento/Rma/Block/Adminhtml/Rma/Edit/Item/Form/Element/Boolean" has been added to allow rendering ability for the boolean RMA attributes on backend

<!--- MAGETWO-85502 -->* 
<!--- MAGETWO-85499 -->* 


<!--- MAGETWO-85311 -->* COPY FROM EARLIER NOTE


<!--- MAGETWO-85298 -->* 



<!--- MAGETWO-85207 -->* 

<!--- MAGETWO-85205 -->* 

<!--- MAGETWO-84967 -->* 

<!--- MAGETWO-84921 -->* 

<!--- MAGETWO-84884 -->* 

<!--- MAGETWO-84883 -->* 
<!--- MAGETWO-84880 -->* 

<!--- MAGETWO-84856 -->* 

<!--- MAGETWO-84764 -->* 


<!--- MAGETWO-84590 -->* 

<!--- MAGETWO-84586 -->* 

<!--- MAGETWO-84474 -->* 

<!--- MAGETWO-84284 -->* 

<!--- MAGETWO-84098 -->* 

<!--- MAGETWO-84006 -->* 

<!--- MAGETWO-84004 -->* 


<!--- MAGETWO-83621 -->* 

<!--- MAGETWO-83560 -->* 

<!--- MAGETWO-82866 -->* 


<!--- MAGETWO-82816 -->* 


<!--- MAGETWO-82666 -->* 


<!--- MAGETWO-82451 -->* 


<!--- MAGETWO-82417 -->* 


<!--- MAGETWO-82104 -->* 
<!--- MAGETWO-82052 -->* 

<!--- MAGETWO-81957 -->* 

<!--- MAGETWO-81431 -->* 

<!--- MAGETWO-81189 -->* 

<!--- MAGETWO-81187 -->* 

<!--- MAGETWO-81128 -->* 

<!--- MAGETWO-80609 -->* 

<!--- MAGETWO-74380 -->* 

<!--- MAGETWO-73473 -->* 

<!--- MAGETWO-73075 -->* 


<!--- MAGETWO-73002 -->* 

<!--- MAGETWO-72865 -->* 

<!--- MAGETWO-72809 -->* 

<!--- MAGETWO-72420 -->* 

<!--- MAGETWO-71829 -->* 

<!--- MAGETWO-71790 -->* 

<!--- MAGETWO-71272 -->* 

<!--- MAGETWO-71145 -->* 


<!--- MAGETWO-70612 -->* 


<!--- MAGETWO-70336 -->* 

<!--- MAGETWO-88040 -->*  


<!--- MAGETWO-87940 -->*  

<!--- MAGETWO-87921 -->*

<!--- MAGETWO-87908 -->* 

<!--- MAGETWO-87242 -->*  

### Gift card

<!--- MAGETWO-88105 -->* Recepient email is available in gift card account history. Previously, When creating gift card account and sending it to customer first record in history doesn't contain cutomer name and email though email is sent

### Import/export


<!--- MAGETWO-81368 -->* Defaulting missing alt-text for a product to use the product name. #11323
The code in app/code/Magento/Catalog/Block/Product/View/Gallery.php's getGalleryImagesJson() function was setting the image's label to $image->getLabel() regardless of whether the image's label was null or empty. The fix was to test the $image->getLabel() response and if it was empty to use the product's name instead.

https://github.com/magento/magento2/issues/9931

https://github.com/brobie

Ben Robie


<!--- MAGETWO-83726 -->*  Export Products action doesn't consider hide_for_product_page value. #11926
Steps to reproduce
Create a simple product and upload an image.
Change the scope to 1 store view.
Set the image as Hide for product page in that store view.
Got to System -> Export.
Select Products and then Continue.
Expected result
The CSV files should have 2 lines. The default values at the first row of values.
The second lines should contain values on sku, store_view_code and hide_from_product_page columns
Actual result
I've created my simple product with an image. Same values for both store views.

Malyovanets Nickolas
https://github.com/nmalevanec


<!--- MAGETWO-83957 -->* Cannot import zero (0) value into custom attribute #12283
When using the Admin product import feature it is not possible to import a zero (0) value into custom attribute field. Instead the value is unchanged.
https://github.com/magento/magento2/issues/12083
p-bystritsky
https://github.com/p-bystritsky



<!--- MAGETWO-84448 -->* Added an abbility to import/export store view specific product custom options and bundle product options. 
- To import store specific product custom option title and value each product with custom options should have an additional string with store code specified in store_view_code row and required custom option data (store specific "name", "type" and "option_title" it should be changed) in custom_options row.
- To import store specific bundle product option title this option name should be added to the "bundle_values" row (together with data for main store). Bundle option name value should have store code specified in the name key - if store code is "second_store", name key for this option is "name_second_store". 
The full "bundle_value" row will looks like: "name=BundleOption1,name_second_store=BundleOption1 Second Store,type=select,required=1..." 

Previously, Import/export feature does not include storeview level edits for the custom options.



<!--- MAGETWO-85629 -->* Product csv import > fail on round brackets in image filename #1017
Product csv import > fail on round brackets in image filename
https://github.com/magento/magento2/issues/12084
Expected result
Data validated successfully
Actual result
Error message: "Wrong URL/path used for attribute image in row(s):"
https://github.com/p-bystritsky


<!--- MAGETWO-86657 -->* Existing customers import now changes only rows specified information for customers. 
If rows for other customer attributes (group_id, store_id, created_at) are absent in import file - they will remain without any changes. 


<!--- MAGETWO-88044 -->* Fix adding values to system variable collection unit test. #13742	
https://github.com/nmalevanec


<!--- MAGETWO-74042 -->* If user will try to import configurable product with specified configurable links and store view in single row the system should return error on the validation step: 

Product with assigned super attributes should not have specified 'store_view_code' value

Expected
configurable product is created with all linked configurations
Actual
configurable product and its configurations are not linked



### Indexing

<!--- MAGETWO-86446 -->* Updated cron documentation URL to 2.2 

PR #13050
The documentation for setting up the cron jobs has updated significantly since 2.0/2.1, as Magento now automates the creation of the crontab. It is now worth pointing users to the new version of the documentation, as the installation instructions on the old documentation are now redundant.

https://github.com/robbie-thompson

Robbie Thompson





<!--- MAGETWO-83503 -->* Add command to view mview state and queue 

PR #12122

I like the ability to view the mview queue in realtime as its being processed, it can be quite helpful when debugging indexing issues.

This command will actually show how many items are in the list pending processing, as well information from the `mview_state` table.



https://github.com/convenient

Luke Rodgers


### Infrastructure




<!--- MAGETWO-86542 -->* Product details page zoom issue when dropdown menu have overlap area with it. Zoom works fine, but when hover on category dropdown menu to the overlap area of product image and dropdown menu, the zoom is active abnormally, even the mouse is still on the dropdown menu.

PR 13084

https://github.com/magento/magento2/issues/5129

Mayank Zalavadia
https://github.com/mayankzalavadia



<!--- MAGETWO-86505 -->* Fix for requireJS loading issues (for ad blockers) 

PR #13061

https://github.com/Yonn-Trimoreau
Yonn Trimoreau
When uBlock (or any ad blocker) forbids `trackingCode.js` file from loading, the exception thrown by RequireJS breaks the JS execution flow, causing unexpected and random issues elsewhere on the website.
This fix catches the RequireJS script loading error, displays it in the console as is and returns true, to avoid execution flow to be broken.





<!--- MAGETWO-86501 -->* Fix issues caused by using continue in loops #13076
https://github.com/ihor-sviziev
Ihor Sviziev
The main goal of this PR is to remove not used count in templates.







<!--- MAGETWO-85698 -->* Remove deprecation without alternative #11070

https://github.com/schmengler
Fabian Schmengler 
https://github.com/magento/magento2/issues/10133

Please add your expectations for @deprecated annotations
I try to create own code based on the \Magento\Checkout\Controller\Cart\Add class. I see that this class uses \Magento\Checkout\Model\Cart class that has @deprecated annotation. I could use other class in my code but I don't know your expectations - which other class does Magento team use instead of deprecated \Magento\Checkout\Model\Cart?

It would be more pleasantly if @deprecated annotations will have comments that point to expected replacements. 






<!--- MAGETWO-85694 -->* Create CODE_OF_CONDUCT.md #12723
https://github.com/ishakhsuvarov
Ievgen Shakhsuvarov
 A code of conduct defines standards for how to engage in a community. It signals an inclusive environment that respects all contributions. It also outlines procedures for addressing problems between members of your project's community.




<!--- MAGETWO-85332 -->* Fix error loading theme configuration on PHP 7.2 #12606
https://github.com/Alanaktion
Alan Hardman

This fixes an issue loading theme configuration on PHP 7.2 by checking that `$parentPathPieces` is an array before counting it, avoiding an error when the value is `NULL`. 




<!--- MAGETWO-85292 -->* There is invalid type in PHPDoc block of \Magento\Framework\Data\Tree::getNodeById() #964

 There is invalid type in PHPDoc block of \Magento\Framework\Data\Tree::getNodeById()

https://github.com/RomaKis
 Roman K.
https://github.com/magento/magento2/issues/8507
There is invalid type in PHPDoc block of \Magento\Framework\Data\Tree::getNodeById() 




### Newsletters

<!--- MAGETWO-83999 -->* Order confirmation email contains non functioning links
https://github.com/magento/magento2/issues/12261

On the bottom of the Order Confirmation email (and all other emails sent to the customer) there are two links "About Us" and "Customer Service" which do not work - view screenshot

https://github.com/RomaKis

Roman K.



<!--- MAGETWO-85783 -->* 

https://github.com/Styopchik
Styopchik

Newsletter subscription success email not sent after confirmation
Expected result
Should receive the Newsletter Subscription Success email.

Actual result
No email is received, but database is changed from STATUS_UNCONFIRMED to STATUS_SUBSCRIBED.

https://github.com/magento/magento2/issues/12439


<!--- MAGETWO-86435 -->* 


https://github.com/devamitbera

Amit Bera

https://github.com/magento/magento2/issues/12787

Newsletter\Model\Subscriber::loadByEmail() does not use MySQL index 

Expected result
An index should be use to retrieve the subscriber instantly
Actual result
No index is used, resulting in a slow "Using where" query like this:


<!--- MAGETWO-86562 -->* Fix Newsletter Subscribe Workflow 

PR #13044

https://github.com/torhoehn
Torben Höhn
https://github.com/magento/magento2/issues/12876


Multiple newsletter confirmation emails sent

Expected result
There are a couple different results that I'll leave to the Magento core team:

If someone signed up for a Newsletter subscription as a guest, have confirmed that subscription, and then create an account with the same email—then the Magento application could update the Newsletter Subscribers with the customer data and leave the status as Subscribed, thus no Need to Confirm email is sent since they've already confirmed they wanted to receive the newsletter.
The Magento application could change the guest email status to STATUS_UNCONFIRMED, update the guest email with the customer data, and send the Need to Confirm email for the new account.
Actual result
Three Need to Confirm emails are received.





<!--- MAGETWO-86447 -->* Solution For Newsletter subscribe button title wrapped 

PR #13041

monaemipro
https://github.com/monaemipro
https://github.com/magento/magento2/issues/12320



### Orders

<!--- MAGETWO-75840 -->* When 2 stores are set up, now it's possible to add products from both stores to the same shopping cart and place 1 order for both stores.
Recently Ordered block displays only one of two products if they were bought from different store views

When 2 stores are set up, it's possible to add products from both stores to the same shopping cart and place 1 order for both stores. However, in this case, Recently Ordered block in Storefront displays only one product


<!--- MAGETWO-82577 -->* #11067 -- Translate order getCreatedAtFormatted() to store locale (by @JeroenVanLeusden)
Add `getDefaultStoreLocale()` to allow fetching scoped values. Use this in `getCreatedAtFormatted()` so `created_at` date of order will be translated in emails to locale being used in that store view.

https://github.com/JeroenVanLeusden



<!--- MAGETWO-83410 -->*  Potential error on order edit page when address has extension attributes #11787




<!--- MAGETWO-83552 -->* Sets the invoice ID when an invoice is set on the credit memo
Loads the invoice by id on getInvoice if an invoice ID is set on the credit memo

https://github.com/magento/magento2/issues/11669

Expected result
Because I'm refunding an invoice, I'd expect the invoice ID to be saved on the credit memo.
When I create a credit memo from the invoice in the admin pages, the invoice ID is saved on the credit memo




<!--- MAGETWO-83740 -->* Credit memos can have the state open: `\Magento\Sales\Model\Order\Creditmemo::STATE_OPEN`.
This means that it is possible to have a creditmemo with an ID which still has to be refunded.
I'm creating a module that introduces a validation step for refund payments before the actual refund can take place. It uses the open state of credit memos to wait for approval and then refunds the creditmemo. Right now the credit memo is not refundable once it has an ID. I think this is incorrect in case of open credit memos.

Even existing credit memos should be refundable if their state is open #11550


<!--- MAGETWO-83783 -->* Shipping method fixtures not compatible with getShippingMethod(true) in OrderCreateTest #12227
Test `Magento\Sales\Service\V1\OrderCreateTest` has an incorrect shipping method fixture which produces an error when ever something tries to get the orders shipping method as an object.



<!--- MAGETWO-84219 -->* Fixed issue with creditmemo comment via REST API did not send creditmemo update email
When creating credit memo comment using REST api, no transactional email is sent to the customer.




<!--- MAGETWO-84256 -->* Fix getReservedOrderId() to use current store instead of default store 

PR #11702
https://github.com/tdgroot
Timon de Groot

https://github.com/magento/magento2/issues/9055
Default Store is always used when retrieving sequence value's for sales entity's.

Expected result
An increment id using the prefix from the new store view, and an entry in the sequence_order_2 table
Actual result
An increment id using the prefix from the default store view, and an entry in the sequence_order_1 table



<!--- MAGETWO-85305 -->* Back-End issue for multi-store website: when editing Order shipping/billing address - allowed countries are selected from wrong Store View

https://github.com/RomaKis
Roman K.

https://github.com/magento/magento2/issues/12560
Expected result
Address Country drop-down in Admin should take values from 'Allow Countries' setting configured for the Website Store View where that order was made (e.g.: for German store with id = 7)
Actual result
But it's picking the 'Allow Countries' from first store View (with id=1).
If before steps 3 and 4 from "Steps to reproduce" go to Admin > Sales > Create New Order and when creating it select some different Store View (e.g.: Italian, with id = 10) then actual result after "Steps to reproduce" will show allowed countries for that selected Store View (with id = 10, if continue on example).







<!--- MAGETWO-85660 -->* AbstractPdf - ZendException font is not set 

PR 1016

https://github.com/serhii-balko
Serhii

https://github.com/magento/magento2/issues/11743
Fix method \Magento\Sales\Model\Order\Pdf\AbstractPdf::drawLineBlocks, when text block cover more than one page.
After generate new page the font need be setted.




<!--- MAGETWO-86845 -->* pass parameter for export button url

Extra records are in exported CSV file for order
Extra records are in exported CSV file for order #12714
https://github.com/magento/magento2/issues/12714




PR 13208



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





<!--- MAGETWO-86258 -->* Fix for reverting stock twice for cancelled orders #12668
https://github.com/dverkade
Danny Verkade

https://github.com/magento/magento2/issues/9969
Some payment methods in cancel payment action try to cancel current order and restore quote and as the result product qty is increased by 2.

Cancel order and restore quote methods increase stocks twice



<!--- MAGETWO-87292 -->*  Join extension attributes are not added to Order results (REST api) #1168
Join extension attributes are not added to Order results (REST api)
https://github.com/nmalevanec
Malyovanets Nickolas




<!--- MAGETWO-87291 -->* Shipment Tracking REST API should throw an error if order doesn't exist. #1162
 Shipment Tracking REST API should throw an error if order doesn't exist.
https://github.com/RomaKis
Roman K.




### Payment methods
<!--- MAGETWO-86940 -->* Dedicated debug logging files for Payment and Shipping activity
As a Magento developer, I want to have dedicated log files for payment and shipping activity so that it's easy for me to find information relevant to one particular area of functionality and it can be separated from other debugging log noise.

Today all general debug information, if logging is turned on, gets compiled into one file, which makes it hard to find what developers are looking for due to all the noise (example: lots of entries about cache invalidation). There is not enough control to decouple logging info based on functional area.

The proposal is to create dedicated payment and shipping debug log files to store information particular to those functional areas.




<!--- MAGETWO-84588 -->* Multishipping for Cybersource: Negative flows on storefront
Added possibility to use Cybersource payment method on multi-shipping

enhancement

<!--- MAGETWO-84587 -->*  Added multi-shipping support for Cybersource payment method

enhancement

<!--- MAGETWO-75497 -->* Logged out customers can't see previously saved credit cards anymore


<!--- MAGETWO-81322 -->* Shipping address missing after canceled payment redirect to checkout/#payment

Actual result
The shipping address is not loaded.
Address is still present in db.
Other quote info like products/prices are loaded.

I am also facing same issue, when we cancel the payment it take us to cart instead of checkout page and all the fields get emptied.
https://github.com/magento/magento2/issues/11247

Payment method QuickPay


<!--- MAGETWO-81395 -->* 3rd party developers have the possibility to customize payment errors messages for payment integrations based on Magento Payment Provider Gateway, more documentation will be available after merge 

This task is extremely valuable to implement in Magento. First, this would eliminate a large volume of support issues that come in around this functionality (the above GH issue list may not even include all issues). In addition, it is a very commonly requested feature from the community - partners, SIs, extension developers. As an example the group developing the latest version of the Braintree payments extension requested this capability just a few weeks ago. Finally, this enables building much better front-end experiences for the Shoppers and would most certainly increase Magento store conversions. 
The team already has a working prototype completed, so productionalizing this would not be a large effort. Considering very high value and relatively low effort to implement, I consider this a "low hanging fruit" effort worth pulling into the closest patch release. 




<!--- MAGETWO-82910 -->* Fixed Billing Agreements configuration
PayPal disappears as Payment Method from the Checkout page if admin turned off Billing Agreement functionality. At the same time PayPal buttons are still present on the Shopping Cart page and can be used.

actual result: PayPal Express Checkout is absent





<!--- MAGETWO-83959-->* If you have a custom *offline* payment method it automatically falls in exception group used while fetching all payment methods this cause that payment method don't have *value* key in the definition and as the result - undefined index on order view page in admin panel. My fix adds key *value* as null and it fixes the notice.
https://github.com/magento/magento2/issues/3596

I am getting following notice when choose order page in admin panel.
I am getting this notice when set transaction id in my payment module.

If you have a custom offline payment method it automatically falls in exception group used while fetching all payment methods this cause that payment method don't have value key in the definition and as the result - undefined index on order view page in admin panel. My fix adds key value as null and it fixes the notice.

https://github.com/madonzy
Alex



<!--- MAGETWO-86112 -->*  Braintree "Place Order" button is disabled after failed validation 

PR #12902
Ievgen Sentiabov
https://github.com/joni-jones
After failed payment form validation the "Place Order" button is still disabled because `hosted-fields` triggers an error on validation and `isPlaceOrderActionAllowed` is still returns `false`.

Added handler to enable "Place Order" button on failed validation




<!--- MAGETWO-86297 -->* Fix vault_payment_token install script type where column defaults were not set 

PR #12965

https://github.com/helloitsluke
helloitslukeThe is_active and is_visible columns were defaulting to false, however should default to true.

The is_active and is_visible columns were defaulting to false, however should default to true.



<!--- MAGETWO-86308 -->* Substitution payment method - Incorrect message 

PR #12731
https://github.com/zamoroka
zamoroka

https://github.com/magento/magento2/issues/12209
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

PR #12401

https://github.com/therool
Ričards Zālītis

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

PR #11060
https://github.com/magento/magento2/issues/10661

Elze Kool
https://github.com/elzekool




### Performance

<!--- MAGETWO-86744 -->* magento/module-catalog is_null change to strict comparison 

PR #13171

 Optimization: magento/module-catalog is_null change to strict comparison
 https://github.com/Coderimus
 Alexander Shkurko

 This is the one of the optimization PR linked with the is_null() change. I decided to do them per module just to avoid any mistake during delivery and review.
Best regards,







<!--- MAGETWO-75769 -->* Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.




<!--- MAGETWO-86743 -->* Optimization: magento/module-tax is_null change to strict comparison 

PR #13170

This is the one of the optimization PR linked with the `is_null()` change. I decided to do them per module just to avoid any mistake during delivery and review.
https://github.com/Coderimus
Alexander Shkurko





<!--- MAGETWO-86742 -->* magento/module-eav is_null change to strict comparison … 

PR #13169
Alexander Shkurko
https://github.com/Coderimus

Optimization: magento/module-eav is_null change to strict comparison 
*Micro-optimizations for Magento\Tax*
 It checks next: `is_null must be avoided. Use strict comparison instead.`
Some classes are under `// @codingStandardsIgnoreFile` such as Magento\Tax module models and cannot be checked during static tests. In this PR I replaced `is_null` with strict comparison only for models in Magento\Tax module.
This is the one of the optimization PR linked with the is_null() change. I decided to do them per module just to avoid any mistake during delivery and review.




### Quote

<!--- MAGETWO-86439 -->* Feature minimum order amount notice issue 
During currency switch notice message shows wrong calculation of minimum order amount.


PR #13039
This is about notice message of min order amount on cart page.When we have set min order amount and on cart page someone change currency, user see same amount and only currency symbol changed. It should recalculate amount also.
Instead of currency convert, we use price helper then it gives us re calculated price amount in notice message.
https://github.com/neeta-wagento
Neeta Kangiya




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


PR #13015

https://github.com/magento/magento2/issues/10869
https://github.com/dverkade
Danny Verkade - Cream



<!--- MAGETWO-86430 -->* Attribute with "Catalog Input Type for Store Owner" equal "Fixed Product Tax" for Multi-store 


PR #13019
https://github.com/dverkade
Danny Verkade - Cream

https://github.com/magento/magento2/issues/12393
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
PR #13036
Vinay Shah
https://github.com/vinayshah
https://github.com/magento/magento2/issues/12705
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

PR #12539

Trying to get data from non existent products #12539
https://github.com/angelo983
angelo983




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

https://github.com/p-bystritsky
p-bystritsky

https://github.com/magento/magento2/issues/12817

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

This PR adds a `--no-update` flag for sampledata commands. It will be passed to composer, so that the user can add and remove sampledata modules without automatic `composer update`. This way, the actual update can be postponed to a manual composer execution. It gives the developer more control and is especially useful in scenarios where running composer from within bin/magento results in permission issues.

PR #12359 

https://github.com/schmengler
Fabian Schmengler 


### Scope

<!--- MAGETWO-88114 -->* Product set to one website resets correctly for all websites after special price scheduled update ends

Product’s scope is set to one website/store/store view, then a special price is set by scheduled update. At the end of the special price event, the product’s scope is incorrectly set to all websites.

EXPECTED RESULTS:
The product should still be activated in only one website at the end of the scheduled update event.

ACTUAL RESULTS:
The product is incorrectly activated for all websites when the scheduled update event ends.



### Search

<!--- MAGETWO-85637 -->* Magento 2 is not showing Popular Search Terms 


PR #1024

https://github.com/p-bystritsky
p-bystritsky
https://github.com/magento/magento2/issues/10743







<!--- MAGETWO- 84370
-->* Layer navigation showing wrong product count 

PR #12063
https://github.com/magento/magento2/issues/11946




<!--- MAGETWO- 87293-->* Admin Global Search was build in a hurry 

PR #1167

https://github.com/RomaKis
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

https://github.com/magento/magento2/issues/7698


The admin global search is not entirely translatable, extensible and does not take into account the ACL settings for the current user

ENHANCEMENT




<!--- MAGETWO-85827-->* Grid filtration doesn't work for mysql special characters 
PR #12749

Expected result

Grid shows only products with the symbol

###Actual result

Grid shows all products


laconica-sergey
https://github.com/laconica-sergey



### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>

<!--- MAGETWO-86306 -->* Cast handling fee to float #13680

https://github.com/schmengler

Fabian Schmengler 
PHP 7.1 complains with a warning if non-numeric strings are used in calculations (see: http://php.net/manual/en/migration71.other-changes.php)

The handling fee configuration of shipping methods is often an empty string. Prior to PHP 7.1 it was silently casted to 0, now this should happen explicitly to avoid warnings.



<!--- MAGETWO-86400 -->* remove not used count() from templates 

PR #12901

The main goal of this PR is to remove not used `count($_items)` in templates.
Found that in some templates Magento2 counts items for table rendering and other stuff but files, add to this PR, do not use `$_count` variable and `<?php $_count = count($_items) ?>` can be excluded from them.

https://github.com/Coderimus
Alexander Shkurko


<!--- MAGETWO-85291 -->* Can bypass Minimum Order Amount Logic 

PR #963

https://github.com/RomaKis
Roman K.

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

PR #12666

https://github.com/gwharton
gwharton

There are three DHL product codes in the DHL Shipping module that are incorrect.

Description
Product Code "1" changed from "Customer Services" to "Domestic express 12:00"
Product Code "I" changed from "Break bulk economy" to "Domestic express 9:00"
Product Code "O" changed from "Others" to "Domestic express 10:30"

DHL product codes are now inline with those published in latest DHL products and services guide.



<!--- MAGETWO-87934 -->*  Cast handling fee to float 

PR #13680
PHP 7.1 complains with a warning if non-numeric strings are used in calculations
The handling fee configuration of shipping methods is often an empty string. Prior to PHP 7.1 it was silently casted to 0, now this should happen explicitly to avoid warnings.


https://github.com/schmengler
	Fabian Schmengler 




<!--- MAGETWO-84589 -->*  Multishipping for Cybersource: Render custom payment method in Multishipping Checkout
Added possibility to use Cybersource on multi-shipping

As a Magento merchant, I want the multishipping checkout flow to render custom payment methods on storefront so that my customers can use multishipping checkout flows with Cybersource to complete a purchase.

Currently Magento multishipping only supports and renders hardcoded offline payment methods on storefront. This needs to be modified so that custom payment methods can be shown on in the checkout flow.



### Sitemap

<!--- MAGETWO-86349 -->*  Add GetUtilityPageIdentifiers for Manage Custom Pages to be excluded … 

PR #12649

https://github.com/osrecio
Oscar Recio
Remove /home from the sitemap.xml
https://github.com/magento/magento2/issues/12446

I want to remove /home from the sitemap.xml (I want the URL in the sitemap to be "https://domain.com" instead of "https://domain.com/home").




<!--- MAGETWO-85285 -->* Sitemap image links in MultiStore 

PR #935 
https://github.com/RomaKis
Roman K.
https://github.com/magento/magento2/issues/12482




<!--- MAGETWO-81525 -->* 
Fatal error: Call getTranslateInline of null when generating some sitemap with errors 
This PR changes the logic for handling errors in the sitemap generation cron. If an exception is thrown when trying to generate any of the sitemaps, the processes is not stopped anymore, but instead the errors are sent by email based on the XML Sitemap configuration. The old `_translateModel` property is not used anymore, and the inline translation is correctly suspended using the `inlineTranslation` property instead.

expected result: An email is delivered to the configured email address and the cron task should be successful.

actual result: Cron task is successful. There are no new emails in Inbox or Spam

https://github.com/marinagociu
Marina Gociu


https://github.com/magento/magento2/issues/10502

### Swagger


<!--- MAGETWO-87444 -->* Update code formatting in Swagger Block 
Update code formatting in Swagger Block/Template

PR #13485

https://github.com/JeroenVanLeusden
Jeroen




### Swatches


<!--- MAGETWO-83290-->* ask Oleksii -- says no release note is needed, but it's a community engineering fix



<!--- MAGETWO-83628 -->*  When there are multiple variations of the same item in the cart, editing any earlier-added item loads the selected option from the most recent selection

When adding the same configurable product to the cart twice with different configurable options - Magento is displaying the most recently selected option when editing during edit.

EXPECTED RESULTS:
When there are 2 variations of a configurable product in the cart, it should not matter which variation was added the most recently - when you edit an item, it should present the selected options for the item you are editing

ACTUAL RESULTS:
When there are multiple variations of a configurable product in the cart, trying to edit the item that was added first loads the options that were selected for the item that was added most recently


UNRESOLVED




<!--- MAGETWO-86576 -->* Fix issue with swatch colour block not showing in admin panel once colour selected (PHP7.1.x issue). #13101
https://github.com/magento/magento2/issues/11828
Visual Swatches not showing swatch color in admin
Steps to reproduce
Inside admin, go to Stores->Product and click on an attribute that contains visual swatches.
Expected result
Visual Swatches that have a color assigned should show that color in the swatch box.
Actual result
Although the color swatch values are being saved, the visual representation of the color in the box is colorless.

https://github.com/chris-pook

Chris Pook




<!--- MAGETWO-86665 -->* Incorrect language on swatch error 

PR #1117

Malyovanets Nickolas
https://github.com/nmalevanec
https://github.com/magento/magento2/issues/5550

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
<!--- MAGETWO-87941 -->*  Use a selector to only select the correct tax rate sel… #13643

https://github.com/hostep
Pieter Hoste
https://github.com/magento/magento2/issues/12791

I'm having a weird issue on the production environment of one of our webshops. The styling of the Customer & Product Tax class UI components are getting the styling of the tax rate UI component.
This results in a problem with saving the newly selected customer & product class changes. It just selects the corresponding rows from the Tax rate UI component, found at the top of the page.


<!--- MAGETWO-87352 -->* Fix default discount tax calculation in double 

The node `tax/calculation/discount_tax` is in double in file `Magento/Tax/etc/config.xml`.

PR #13449
https://github.com/VincentMarmiesse

Vincent MARMIESSE



<!--- MAGETWO-87339 -->* M2.x.x Translation Missing in Checkout for Tax 

PR #1147
https://github.com/magento/magento2/issues/7849

https://github.com/RomaKis
Roman K.




### Testing

<!--- MAGETWO-87487 -->* phpunit.xml files should be ignored by Magento/Test/Integrity/Xml/SchemaTest.php
Extension developers still use old MFTF and the only option for them to have tests distributed along with the code, is to provide custom phpunit.xml.

Since phpunit.xml is not regular Magento configuration file, it should be blacklisted during some schema validation static tests, particularly Magento/Test/Integrity/Xml/SchemaTest.php







<!--- MAGETWO-87290 -->*   ConfigurationTest fails when installing via composer 

PR #1161

https://github.com/nmalevanec
Malyovanets Nickolas
https://github.com/magento/magento2/issues/12574
An integration test is failing when Magento is built via composer (not when clones from github).

The problem seems to be that basePath is calculated as the app directory but the actual code is in vendor so XML configuration is not found and an uncatched exception is thrown



<!--- MAGETWO-87984 -->* Add MagentoStyle as Console Input/output in Travis tests

PR #13698  (ask Oleksii) 


 

<!--- MAGETWO-86859 -->* 

Carlos Lizaga
https://github.com/KarlDeux

https://github.com/magento/magento2/issues/12342

Currently Magento is using 2 different sets of tools for the JavaScript Testing:

JSTestDriver, which is considered legacy and is not supported anymore by the core team.
Jasmine, which was introduced to replace JSTestDriver. All new JS tests are implemented using it and executed in multiple CI environments, including public Travis CI and Magento's in-house CICD infrastructure.
To remove legacy framework it is required to reimplement remaining tests using Jasmine, and completely remove JSTestDriver support afterwards.



<!--- MAGETWO-86005 -->* Update functional.suite.dist.yml to handle a custom backend name 
In the file `functional.suite.dist.yml`, the value for the `backend_name` configuration is hardcoded. We should be able to customize the value by using the variable `MAGENTO_BACKEND_NAME` defined in the `.env` file.

PR #12884
https://github.com/scribam
scribam








<!--- MAGETWO-85940 -->* Add missing preference for ObjectManager\ConfigInterface in integrati… 

PR #12845

Fabian Schmengler 
https://github.com/schmengler

https://github.com/magento/magento2/issues/12844
I logged which classes were instantiated befor the error and it seems like XmlCatalogGenerateCommand has the object manager config in its dependency graph, but in the integration test environment there is no preference for it.








<!--- MAGETWO-85537 -->* Integration Test Annotation magentoAppArea breaks with some valid values. 

PR #996
https://github.com/nmalevanec
Malyovanets Nickolas

https://github.com/magento/magento2/issues/2907





<!--- MAGETWO-85520 -->* Remove @escapeNotVerified from documentation 

PR #12639

Matthias Zeis
https://github.com/mzeis
The inline documentation of the static test for XSS vulnerabilities doesn't reflect that `@escapeNotVerified` is disallowed in >= 2.2.

Update the comment to reflect the documentation (compare [2.1](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/templates/template-security.html#Static-Test) and [2.2](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/templates/template-security.html)).




### Tax



<!--- MAGETWO-83402 -->* Wrong order tax amounts displayed when using specific tax configuration 

https://github.com/magento/magento2/issues/10347

Wrong order tax amounts displayed when using specific tax configuration 
Pieter Cappelle

https://github.com/PieterCappelle





### Themes

<!--- MAGETWO-85785 -->* 

Use full name in welcome message 

PR #12738
https://github.com/xpoback
Oleh Kravets

https://github.com/magento/magento2/issues/12719

Expected result
Website loads with customer logged in, welcome message contains customer's first and last names

Actual result
Website loads with customer logged in, welcome message does not contain customer's first and last names





<!--- MAGETWO-85549 -->* The option <var name="allowfullscreen">false</var> for mobile device don't work in product view page gallery 
https://github.com/magento/magento2/issues/12490
I can't disable full screen gallery on mobile on magento 2.2.1


Expected result:
fullscrreen is disabled on mobile screens

Actual result:
fullscreen is working




PR #1006

https://github.com/p-bystritsky
p-bystritsky
https://github.com/magento/magento2/issues/12285







<!--- MAGETWO-86310 -->* Change getHtml to append class rather than overwrite for children 
PR #12862

https://github.com/jonshipman
jonshipman

When creating a dependency injection for the Magento\Theme\Block\Html\Topmenu class, we are unable to change class names on children in a beforeGetHtml method because the protected method getHtml declares setClass() on all children items. What this contribution changes is checking each child for an existing class and appends the $outermostClass if true.



<!--- MAGETWO-85708 -->* Zoom the image can be closed in iPhone or Safari browser

If choose full screen zoom for any product image in iPhone 4s, 5s, 6, 6s with Safari browser, It will not unable to close that full screen zoom.
EXPECTED RESULTS:
Zoom the image should be closed
ACTUAL RESULTS:
Zoom the image is not closed








### Translations and locale



<!--- MAGETWO-86286 -->* Fix #2156 Js\Dataprovider uses the RendererInterface. #12953

https://github.com/dmitry-fedyuk
Dmitry Fedyuk

https://github.com/magento/magento2/issues/2156
This lead to the 2 problems:

Inline translation does not work for Knockout templates.
Custom translators (which can be injected as an argument for \Magento\Framework\Phrase\Renderer\Composite) do not work for Knockout templates.








<!--- MAGETWO-86778 -->* No locale for Swedish (Finland). 

PR #1207

Malyovanets Nickolas

https://github.com/nmalevanec
https://github.com/magento/magento2/issues/13095








<!--- MAGETWO-87226 -->* Translate time zone label according to current locale in Stores > Configuration > Advanced Reporting 

PR #13408

https://github.com/adrian-martinez-interactiv4
adrian-martinez-interactiv4

Time zone label gets translated according to operating system settings, instead of using current locale:




<!--- MAGETWO-86436 -->* Newsletter Label is broking on chinese Language 

PR 13029

https://github.com/dasharath-wagento
Dasharth patel
https://github.com/magento/magento2/issues/12320

Set the newsletter subscribe button's title with at least two Chinese characters (either by changing it with your browser's Developer Tool or by switching the CMS language to Chinese)





<!--- MAGETWO-87575 -->* missing translations in the js-translations.json 

PR #13528
https://github.com/mattijv

Matti Vapa
https://github.com/magento/magento2/issues/12081

Since updating one of our stores to Magento 2.2 the translations for 'Item in Cart' are not compiled into the var/view_processed/pub/static/frontend/{Magento-Theme}/{language code}/js-translation.json files, though the translations for 'Items in Cart' are correctly loaded.




### User interface

<!--- MAGETWO-85784-->*  Validate range-words in Form component (UI Component) 

PR #12739

I cannot configure a form field with validation range-words, it different than validate-number-range


Expected result
Category Name is validated and Category is created (or correct error message is displayed, if validation fails)

Actual result
Nothing happens explicitly. Error message appers in browser console.

https://github.com/robinhuy

Robin Huy



<!--- MAGETWO-86025 -->* "Save Block"-button on Add New Block silently ignores clicks if the content is empty. 


PR #1032
https://github.com/RomaKis
Roman K.
https://github.com/magento/magento2/issues/8114
When clicking "Save Block", nothing happens if the content editor is empty.




<!--- MAGETWO-86438 -->* Resolved Checkout-Payment-Wrong promo code cancelled issue 

PR #13030

	https://github.com/chiragp-wagento

 Chirag P
Disabled the input box for promo code when promo code is already applied to the site.
Wrong promo code cancelled issue on Checkout > Payment and Cart page.

Expected result
Promo code input box will be disabled once we apply any promo code.

Actual result
Promo code removed



<!--- MAGETWO-84903 -->* copy from 2.1.13




<!--- MAGETWO-83815 -->* Fixed php notice when invalid ui_component config is used 

PR #12239
Just a tiny fix. Move `$argument['instance']` usage below `isset($argument['instance'])` check.

Vova Yatsyuk

https://github.com/vovayatsyuk





<!--- MAGETWO-83293 -->* Inefficient SQL query on applying filter on sales order grid
Verification for already set filter in Magento/Ui/Component/Filters added. 
As a result filters in collection "where" conditions will not be duplicated.




<!--- MAGETWO-71936 -->* Error: Invalid input datetime format of value "'DD/MM/+********"'
https://github.com/magento/magento2/issues/10485

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

<!--- MAGETWO-84955 -->* Set Current Store from Store Code if isUseStoreInUrl 

PR #12529







<!--- MAGETWO-86554 -->*  Customer is redirected to 404 from Catalog page if switches to the Store with another root Category

Unresolved


### Varnish




### Web API framework
<!--- MAGETWO-85287 -->* REST API unable to make requests with slash (/) in SKU 

PR #949

https://github.com/RomaKis
Roman K.

https://github.com/magento/magento2/issues/8615

Inside the REST API, it is impossible to access a resource that requires an SKU if the SKU contains a forward slash.




### Wishlist

<!--- MAGETWO-69634 -->* Product with a special price must be showed with this price in the wishlist	
Product with special prices are displayed in wishlist with special prices.

If you add a product which has a special price into the wishlist, then product displayed with a regular price.




<!--- MAGETWO-85303 -->* Can't remove item description from wishlist 

https://github.com/magento/magento2/issues/12582


PR #981

https://github.com/p-bystritsky

p-bystritsky



## Known issues

### General





<!--- NOT NEEDED MAGETWO-87169 MAGETWO-87132 86982 86846 86772 86770 86767 86763 86015 86002 73161 80908 84209 84992 77767 84480 83329 86117 83977 84804 84413 83974 82062 80342 80738 85947 83676 86132 85661 77840 82061  81901 73303 83343 83910 70725 83754 73275 75217 83958 87023 71662 82078 84397
 -->* 
 -->  

<!--- NOT A BUG   MAGETWO-73011 MAGETWO-83817 86682-->

<!--- WON'T FIX MAGETWO-72116 MAGETWO-64518 MAGETWO-64534 MAGETWO-72116 MAGETWO-72116 MAGETWO-83818 MAGETWO-84772 MAGETWO-84773 MAGETWO-85138 MAGETWO-85983 81082 77425 70376-->

<!--- CANNOT REPRODUCE MAGETWO-58206 MAGETWO-61056 MAGETWO-64734 MAGETWO-68799 MAGETWO-69847 85986 88104 86279 84074-->


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
