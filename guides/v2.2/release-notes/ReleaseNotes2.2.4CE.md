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

<!--- MAGETWO-71662 -->* 

<!--- MAGETWO-86227 -->* 

<!--- MAGETWO-87447 -->*  

<!--- MAGETWO-87477 -->* 
<!--- MAGETWO-73696 -->* 

<!--- MAGETWO-75786 -->* 

<!--- MAGETWO-81916 -->* 

<!--- MAGETWO-81942 -->* 

<!--- MAGETWO-82078 -->* 

<!--- MAGETWO-82313 -->* 

<!--- MAGETWO-82464 -->* 

<!--- MAGETWO-83399 -->* 

<!--- MAGETWO-84018 -->* 

<!--- MAGETWO-84087 -->* 

<!--- MAGETWO-84311 -->* 

<!--- MAGETWO-84367 -->* 

<!--- MAGETWO-84411 -->* 

<!--- MAGETWO-84498 -->* 

<!--- MAGETWO-84515 -->* 

<!--- MAGETWO-84652 -->* 

<!--- MAGETWO-84665 -->* 

<!--- MAGETWO-84808 -->* 

<!--- MAGETWO-84949 -->* 

<!--- MAGETWO-85293 -->* 

<!--- MAGETWO-85294 -->* 

<!--- MAGETWO-85301 -->* 

<!--- MAGETWO-85307 -->* 

<!--- MAGETWO-85545 -->* 

<!--- MAGETWO-85546 -->* 

<!--- MAGETWO-85636 -->* 

<!--- MAGETWO-86016 -->* 

<!--- MAGETWO-86019 -->* 

<!--- MAGETWO-86021 -->* 

<!--- MAGETWO-86023 -->* 

<!--- MAGETWO-86662 -->* 
<!--- MAGETWO-86547 -->* 

<!--- MAGETWO-84267 -->* 

<!--- MAGETWO-85288 -->* 

<!--- MAGETWO-82949 -->* 

<!--- MAGETWO-84397 -->* 

<!--- MAGETWO-86663 -->* 

<!--- MAGETWO-85876 -->* 

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









<!--- MAGETWO-84272 -->* 

<!--- MAGETWO-72597 -->* 

<!--- MAGETWO-85833 -->* 

<!--- MAGETWO-87588 -->*  

<!--- MAGETWO-87354 -->* 


### Email

<!--- MAGETWO-83741 -->* 

<!--- MAGETWO-86881 -->* 


### Frameworks

<!--- MAGETWO-86337 -->* 

<!--- MAGETWO-87124 -->*  

<!--- MAGETWO-86654 -->* X-Magento-Vary & PHPSESSID now have the same expiration time

<!--- MAGETWO-85290 -->* 

<!--- MAGETWO-85770 -->* 

<!--- MAGETWO-85872 -->* 
<!--- MAGETWO-86484 -->* 
<!--- MAGETWO-86277 -->* 
<!--- MAGETWO-86154 -->* 
<!--- MAGETWO-85992 -->* 

<!--- MAGETWO-88146 -->*  

<!--- MAGETWO-88115 -->*  

<!--- MAGETWO-87261 -->*  



#### App framework

<!--- MAGETWO-81802 -->* 

<!--- MAGETWO-80223 -->* 

<!--- MAGETWO-84003 -->* 

<!--- MAGETWO-84016 -->* 

<!--- MAGETWO-84371 -->* 

<!--- MAGETWO-84372 -->* 



#### Configuration framework

<!--- MAGETWO-84464 -->* 

<!--- MAGETWO-84815 -->* 



#### JavaScript framework

<!--- MAGETWO-83401 -->* 

<!--- MAGETWO-83993 -->* 



#### Session framework

<!--- MAGETWO-83373 -->* 

<!--- MAGETWO-83287 -->* 

<!--- MAGETWO-86880 -->* 


#### Testing framework



#### Web API framework

<!--- MAGETWO-70725-->* 

<!--- MAGETWO-83854 -->* 

<!--- MAGETWO-84979 -->* 

<!--- MAGETWO-84994 -->* 

<!--- MAGETWO-85534 -->* 

<!--- MAGETWO-85538 -->* 

<!--- MAGETWO-83754 -->* 



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

<!--- MAGETWO-73275 -->* 
<!--- MAGETWO-75217 -->* 

<!--- MAGETWO-81368 -->* 

<!--- MAGETWO-83726 -->* 

<!--- MAGETWO-83957 -->* 

<!--- MAGETWO-83958 -->* 

<!--- MAGETWO-84448 -->* 

<!--- MAGETWO-85629 -->* 

<!--- MAGETWO-86657 -->* 
<!--- MAGETWO-88044 -->* 

<!--- MAGETWO-87023 -->* unresolved

<!--- MAGETWO-74042 -->* 



### Indexing

<!--- MAGETWO-86446 -->* 

<!--- MAGETWO-83503 -->* 


### Infrastructure
<!--- MAGETWO-86682 -->* 
<!--- MAGETWO-86542 -->* 
<!--- MAGETWO-86505 -->* 
<!--- MAGETWO-86501 -->* 

<!--- MAGETWO-85698 -->* 
<!--- MAGETWO-85694 -->* 

<!--- MAGETWO-85332 -->* 

<!--- MAGETWO-85292 -->* 


### Newsletters

<!--- MAGETWO-83999 -->* 
<!--- MAGETWO-85783 -->* 

<!--- MAGETWO-86435 -->* 
<!--- MAGETWO-86562 -->* 
<!--- MAGETWO-86447 -->* 


### Orders

<!--- MAGETWO-75840 -->* 
<!--- MAGETWO-82577 -->* 

<!--- MAGETWO-83343 -->* 

<!--- MAGETWO-83410 -->* 

<!--- MAGETWO-83552 -->* 

<!--- MAGETWO-83740 -->* 

<!--- MAGETWO-83783 -->* 

<!--- MAGETWO-83868 -->* 

<!--- MAGETWO-83910 -->* 

<!--- MAGETWO-84219 -->* 

<!--- MAGETWO-84256 -->* 

<!--- MAGETWO-85305 -->* 
<!--- MAGETWO-85660 -->* 

<!--- MAGETWO-86845 -->* 

<!--- MAGETWO-80233 -->* 

<!--- MAGETWO-86258 -->* 

<!--- MAGETWO-87292 -->*  

<!--- MAGETWO-87291 -->* 




### Payment methods
<!--- MAGETWO-86940 -->* 

<!--- MAGETWO-84588 -->* 

<!--- MAGETWO-84587 -->*  


<!--- MAGETWO-75497 -->* 

<!--- MAGETWO-81322 -->* 

<!--- MAGETWO-81395 -->* 

<!--- MAGETWO-82910 -->* 

<!--- MAGETWO-83959-->* 

<!--- MAGETWO-86112 -->* 

<!--- MAGETWO-86297 -->* 

<!--- MAGETWO-86308 -->* 

<!--- MAGETWO-86351 -->* 

<!--- MAGETWO-84639 -->* 

<!--- MAGETWO-86426 -->* 

<!--- MAGETWO-84647 -->* 



### Performance

<!--- MAGETWO-86744 -->* 

<!--- MAGETWO-75769 -->* Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.

<!--- MAGETWO-86743 -->* 

<!--- MAGETWO-86742 -->* 

<!--- MAGETWO-88265 -->* unresolved

### Quote

<!--- MAGETWO-86439 -->* 

<!--- MAGETWO-86434 -->* 

<!--- MAGETWO-86430 -->* 

<!--- MAGETWO-85518 -->* Shipping methods list is displaying correctly despite negotiable quotes functionality that caused displaying only one selected method, even after reorder.

<!--- MAGETWO-86595 -->* 



### Reports

<!--- MAGETWO-84981 -->* 

<!--- MAGETWO-88173 -->* 




### SalesRule

<!--- MAGETWO-73303 -->* 

<!--- MAGETWO-73479 -->* 

<!--- MAGETWO-71393 -->* 

<!--- MAGETWO-86780 -->* 

<!--- MAGETWO-86786-->* 

<!--- MAGETWO-87013-->*  

<!--- MAGETWO-85960-->* 


### Sample data

<!--- MAGETWO-84180 -->* 


### Scope

<!--- MAGETWO-88114 -->* Product set to one website resets correctly for all websites after special price scheduled update ends

### Search

<!--- MAGETWO-81901 -->* 

<!--- MAGETWO-85637 -->* 

<!--- MAGETWO- 84370-->* 

<!--- MAGETWO- 87293-->* 

<!--- MAGETWO-85842-->*  unresolved

<!--- MAGETWO-85827-->* 


### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>

<!--- MAGETWO-86306 -->* 

<!--- MAGETWO-86400 -->* 

<!--- MAGETWO-85291 -->* 

<!--- MAGETWO-85586 -->* 

<!--- MAGETWO-87934 -->*  

<!--- MAGETWO-84589 -->*  

### Sitemap

<!--- MAGETWO-86349 -->* 

<!--- MAGETWO-85285 -->* 

<!--- MAGETWO-81525 -->* 


### Staging

<!--- MAGETWO-82061-->* 

<!--- MAGETWO- -->* 

### Swagger


<!--- MAGETWO-87444 -->* 



### Swatches

<!--- MAGETWO-77840-->* 

<!--- MAGETWO-83290-->* 

<!--- MAGETWO-83628 -->* 

<!--- MAGETWO-85661 -->* 

<!--- MAGETWO-86132 -->*  unresolved

<!--- MAGETWO-86576 -->* 

<!--- MAGETWO-86665 -->* 

<!--- MAGETWO-84074 -->* 

<!--- MAGETWO-83676 -->* 

<!--- MAGETWO-87570 -->* 



### TargetRule

<!--- MAGETWO-77754 -->* 
<!--- MAGETWO-86013 -->* 

<!--- MAGETWO-87121 -->*  unresolved

### Tax
<!--- MAGETWO-87941 -->* 

<!--- MAGETWO-87352 -->*

<!--- MAGETWO-87339 -->*


### Testing

<!--- MAGETWO-87487 -->* 

<!--- MAGETWO-87290 -->*   

<!--- MAGETWO-87984 -->* 
 

<!--- MAGETWO-86859 -->* unit tests


<!--- MAGETWO-86005 -->* functional tests



<!--- MAGETWO-85947-->*  benchmarking

<!--- MAGETWO-85940 -->* test framework

<!--- MAGETWO-85537 -->* integration test framework

<!--- MAGETWO-80738 -->* functional tests

<!--- MAGETWO-80342 -->* functional tests

<!--- MAGETWO-85520 -->* static tests

<!--- MAGETWO-82062 -->*  functional tests


### Tax

<!--- MAGETWO-83974 -->* 

<!--- MAGETWO-83402 -->* 


### Themes

<!--- MAGETWO-85785 -->* 

<!--- MAGETWO-85549 -->* 

<!--- MAGETWO-86310 -->* 

<!--- MAGETWO-84413 -->* 

<!--- MAGETWO-85708 -->* Zoom the image can be closed in iPhone or Safari browser

<!--- MAGETWO-84804 -->* 

### Translations and locale

<!--- MAGETWO-83977 -->* 

<!--- MAGETWO-86286 -->* 

<!--- MAGETWO-86778 -->* 

<!--- MAGETWO-87226 -->* 

<!--- MAGETWO-86436 -->* 

<!--- MAGETWO-87575 -->* 


### User interface

<!--- MAGETWO-85784-->* 


<!--- MAGETWO-86025 -->* 



<!--- MAGETWO-86438 -->* 

<!--- MAGETWO-84903 -->* 

<!--- MAGETWO-83815 -->* 

<!--- MAGETWO-83293 -->* 

<!--- MAGETWO-71936 -->* 



### URL rewrites

<!--- MAGETWO-84955 -->* 

<!--- MAGETWO-86554 -->*  


### Varnish

###Visual Merchandiser

<!--- MAGETWO-86117 -->*  


### Web API framework
<!--- MAGETWO-85287 -->* 



### Wishlist

<!--- MAGETWO-69634 -->* 
<!--- MAGETWO-85303 -->* 






## Known issues

### General





<!--- NOT NEEDED MAGETWO-87169 MAGETWO-87132 86982 86846 86772 86770 86767 86763 86015 86002 73161 80908 84209 84992 77767 84480 83329
 -->* 
 -->  

<!--- NOT A BUG   MAGETWO-73011 MAGETWO-83817-->

<!--- WON'T FIX MAGETWO-72116 MAGETWO-64518 MAGETWO-64534 MAGETWO-72116 MAGETWO-72116 MAGETWO-83818 MAGETWO-84772 MAGETWO-84773 MAGETWO-85138 MAGETWO-85983 81082 77425 70376-->

<!--- CANNOT REPRODUCE MAGETWO-58206 MAGETWO-61056 MAGETWO-64734 MAGETWO-68799 MAGETWO-69847 85986 88104 86279-->


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
