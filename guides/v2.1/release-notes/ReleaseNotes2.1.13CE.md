---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.1.13 Release Notes
menu_title: Magento Open Source 2.1.13 Release Notes
menu_order: 154
level3_menu_node: level3child
level3_subgroup: ce21-relnotes 
version: 2.1
github_link: release-notes/ReleaseNotes2.1.13CE.md
---

*	TOC
{:toc}


*Patch code and release notes were published on March  2018.*



We are pleased to present Magento Open Source  2.1.13. This release includes many bug fixes and enhancements. Check out the many community-contributed fixes!

## Fixed issues


### Setup

<!--- MAGETWO-86298 -->* The sample  `.htaccess` file Options `All -Indexes` directive has been replaced with Options `-Indexes`. Previously, the `All -Indexes` directive caused problems in shared hosting environments. *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 12959*. [GitHub-10812](https://github.com/magento/magento2/issues/10812)

<!--- MAGETWO-69036 -->* Lazy-loaders have been moved from `getter` methods to classes constructor injection, and factory parameters are no longer required. (These parameters will be created inside of constructor methods if they weren't provided.) 

<!--- MAGETWO-58072 -->* Magento no longer creates an `/ i18n` at system root (`/`) in addition to the expected language file when you run `bin/magento i18n:pack` to install a language pack. [GitHub-6260](https://github.com/magento/magento2/issues/6260)

 

### Bundle 
<!--- MAGETWO-69496 -->*  You can now specify a Bundle option title on a store-view level with changes to more than one store view. Previously, after making a change to the store view title of a second store view, the previous store view would show the default title for the store view title. 



### Catalog

<!--- MAGETWO-85781 -->*  Magento now displays the correct final price of configurable products associated with catalog rules. Previously, the final price of a configurable product did not reflect any catalog rules associated with it. 

<!--- MAGETWO-85696 -->*  You can now successfully re-save a product attribute using a new name. Previously, an attempt to re-save the product attribute resulted in an error. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11618*. [GitHub-6770](https://github.com/magento/magento2/issues/6770)

<!--- MAGETWO-85104 -->* Magento now flushes the full page cache for all products that have been reindexed (both child and parent products). Previously, the  configurable product page is not cache-cleaned as expected. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 12548*. [GitHub-8009](https://github.com/magento/magento2/issues/8009)

<!--- MAGETWO-84932 -->*  Category page X-Magento-Tags headers no longer contain product cache identities when category display mode is set to **Static block only**.  *Fix submitted by [Atish Goswami](https://github.com/atishgoswami) in pull request 12522*. 

<!--- MAGETWO-84688 -->*  When you set the `category_ids` attribute to be visible in the storefront catalog, Magento now displays catalog listings as expected. Previously, Magento threw an exception. *Fix submitted by [Manu Gonzalez Rodriguez](https://github.com/manuelson) in pull request*.

<!--- MAGETWO-84432 -->*  Magento now saves images as expected when you create a new category that contains an image, and then edit and re-save that category.  Previously, it appears that Magento has saved the category as expected, but `exception.log` states that there was a problem saving the images. *Fix submitted by [IvanK](https://github.com/nemesis-back) in pull request 12368*. [GitHub-8069](https://github.com/magento/magento2/issues/8069)

<!--- MAGETWO-72312 -->* The category filter used for layered navigation for configurable products with no available options now counts products accurately.

<!--- MAGETWO-59782 -->*  Magento now correctly displays product information after you perform an operation on more than one item. Previously, product information was not correctly aligned on the page. [GitHub-6867](https://github.com/magento/magento2/issues/6867)

<!--- MAGETWO-83631 -->* The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have  existing relations only  in `catalog_product_entity` table. 

<!--- MAGETWO-83204 -->*  The Hide from Product Page option now works for the child product of a configurable product.


### Cart and checkout

<!--- MAGETWO-87195 -->*  Magento now displays the expected state in the Multishipping New Address form when a customer enters information on the Ship to Multiple Addresses page. *Fix submitted by [enriquei4](https://github.com/enriquei4) in pull request 13367*. [GitHub-8069](https://github.com/magento/magento2/issues/8069)

<!--- MAGETWO-69701 -->* When two customers check out concurrently for the same product, one of the check outs now succeeds. Previously, when two customers checked out concurrently for the same product, and the total quantity being ordered is greater than the quantity available, the stock could become negative. [GitHub-6363](https://github.com/magento/magento2/issues/6363)

<!--- MAGETWO-64171 -->* Display issues no longer prevent a user from adding a shipping address when checking out when running Internet Explorer 11.x. Previously, a registered user could not add a new shipping address in the  shipping step of the checkout process due to display issues. 

<!--- MAGETWO-71229 -->* Magento no longer caches warning messages as often as a customer clicks the Update Shopping Cart button while the shopping cart page loads. Previously, Magento cached a warning message each time a customer clicked this button while the page loaded in FireFox or Chrome, and this action resulted in multiple warning messages appearing on the top of the shopping cart page.



 

### Configurable products

<!--- MAGETWO-86312 -->*   Magento now reorders configurable attribute options as expected on the product page. *Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request 12962*. [GitHub-7441](https://github.com/magento/magento2/issues/7441)

<!--- MAGETWO-60140 -->*  You can now disable a child product from a configurable product’s edit page. Previously, the child product’s status 
did not change after you selected **Disable product**.




### Customers
<!--- MAGETWO-85674 -->* `window.checkout.customerLoginUrl` now contains a URL that includes the referer in base64 encoding (for example, https://myshop.com/customer/account/login/referer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0). Previously, the login URL did not include a referer (for example, https://myshop.com/customer/account/login). *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request 12629*. [GitHub-12627](https://github.com/magento/magento2/issues/12627)

<!--- MAGETWO-84861 -->*  Administrators can now reset customer passwords as expected when the **max wait time between password resets** setting has been disabled.  Previously, when an administrator attempted to reset a customer's password from the Admin, Magento displayed this error, `Too many password reset requests`, even when the **max wait time between password resets** setting has been disabled. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11436*. [GitHub-12627](https://github.com/magento/magento2/issues/12627)

<!--- MAGETWO-71669 -->* The Arabic language locale now uses the correct date format. Previously, when Magento was deployed using the JavaScript calendar and the Arabic (Kuwait) locale, It did not correctly display dates  on the product page. (Date format was shown as 182017/05 instead of 18/05/2017.)




### Framework

<!--- MAGETWO-86676 -->* `vendor/magento/framework/composer.json` now declares a dependency on `magento/zendframework1`. Previously, packages depending on `magento/framework` packages failed to execute. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 12991*. [GitHub-12967](https://github.com/magento/magento2/issues/12967)




#### Configuration framework

<!--- MAGETWO-83646 -->*  Scope-based configuration now decrypts data as expected. Previously, scope-based configuration failed to decrypt data on the default store only. [GitHub-8591](https://github.com/magento/magento2/issues/8591)



#### Session framework

<!--- MAGETWO-83288 -->* When you add a product to your wishlist after logging out, Magento now redirects you to your account Wishlist page and adds the product. Previously, you were redirected to your wishlist page, but Magento did not add the product. [GitHub-11825](https://github.com/magento/magento2/issues/11825)


#### Zend
<!--- MAGETWO-86300 -->*  We've upgraded the Zend framework `Zend_Service` component. *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 12958*. [GitHub-9243](https://github.com/magento/magento2/issues/9243)



### General

<!--- MAGETWO-86284 -->*  The `htmlentities` function has been replaced with the `htmlspecialchars` function. 

<!--- MAGETWO-85930 -->* You can now delete more than one record using the content block manager. Previously, when working in the content block manager in the Admin, Magento threw a fatal error when you tried to delete more than one record. *Fix submitted by [Tristan Hofman](https://github.com/duckchip) in pull request 12840*. [GitHub-8415](https://github.com/magento/magento2/issues/8415)


<!--- MAGETWO-85264 -->* The newsletter title string in the block template is no longer hardcoded. *Fix submitted by [Lorenzo Stramaccia](https://github.com/slackerzz) in pull request 12611*. 

<!--- MAGETWO-83631 -->*  The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in catalog_product_entity table, which prevents the loading of quote items for non-existing products.


<!--- MAGETWO-71701 -->*  In environments running Varnish, the menu item of the active category page is now handled as the active class as expected. Previously, activating cache interfered with Magento setting the appropriate CSS class to active in environments where Varnish was enabled. [GitHub-6609](https://github.com/magento/magento2/issues/6609)


<!--- MAGETWO-57064 -->*  The currency switcher now works for widgets on the home page. Previously, if your website supported multiple currencies, the currency switcher did not update the currencies for widgets on the home page.


<!--- MAGETWO-64171 -->*  Customers can now add a new address during the shipping step of the checkout process when accessing the store from Internet Explorer 11.x. Previously, when a customer tried to create a new address from the check out page,  the **Add address** button  was not visible.




### Gift card

<!--- MAGETWO-84806 -->* Magento now includes a gift card recipient's email address in the gift card account history. Previously, Magento did not include the gift card recipient's name and email address in the gift card account history, even though Magento successfully sent the email.



### Index

<!--- MAGETWO-83478 -->*  You can now view the state of the `mview` queue in real time, which can be useful when debugging indexing issues. You can now view how many items are in the queue pending processing, as well as view information from the `mview_state` table. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request 12050*. [GitHub-8415](https://github.com/magento/magento2/issues/8415)



### Newsletter

<!--- MAGETWO-66793 -->* Merchants can now unsubscribe customers from a newsletter from the Admin. [GitHub-6313](https://github.com/magento/magento2/issues/6313)



### Order management

<!--- MAGETWO-86861 -->*  Invoices now display coupon code information as expected.  *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 13261*. [GitHub-10168](https://github.com/magento/magento2/issues/10168)

<!--- MAGETWO-86259 -->* The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock.  *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 12952*. 



### Payment methods

<!--- MAGETWO-86343 -->*  The `is_active` and `is_visible` columns now default to `true` even when column default values are not set in the `vault_payment_token` installation script. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 1149*. 

<!--- MAGETWO-65734 -->*  Magento now processes credit memos as expected when refunding an order from PayPal. Previously, when Magento refunded  an order from PayPal, it created a credit memo, but the credit memo was not assigned a status (that is, the database status field is `null`), and the order status remained as processing.

<!--- MAGETWO-80643 -->*  Administrators can now create orders in the Admin for stores other than the default when using Paypal Payflow Pro. 


### Reports

<!--- MAGETWO-84476 -->*  When generating the output of **Reports > Marketing > Products in Cart**, Magento no longer calls the data of products that have been deleted from the cart. *Fix submitted by [angelo983](https://github.com/angelo983) in pull request 12321*.


<!--- MAGETWO-83539 -->* The Admin's Most Viewed Products tab now displays all relevant information about products, even when they are not in the default attribute set. [GitHub-9768](https://github.com/magento/magento2/issues/9768)
 
<!--- MAGETWO-83094 -->* You can now successfully export the Ordered Products report to a CSV file. Previously, the export file contained no report data.






### Scope
<!--- MAGETWO-80502 -->* Products are now activated only for specified websites after a scheduled update has run. Previously, Magento incorrectly activated the product for all websites when the scheduled update event ended.




### Search
<!--- MAGETWO-72312 -->* Layered navigation now displays the correct product count. Previously, the layered navigation product count incorrectly included only in-stock products.

### Shipping

<!--- MAGETWO-59660 -->* We've resolved an issue where Magento did not display applicable flat-rate USPS box methods during checkout. [GitHub-6798](https://github.com/magento/magento2/issues/6798) 


### Swagger
<!--- MAGETWO-85180 -->*  The code formatting in the Swagger block and template has been updated. 


### Translations

<!--- MAGETWO-86285 -->* Inline translations and custom translators now work for Knockout templates. *Fix submitted by [Danny Verkade - Cream](https://github.com/dverkade) in pull request 12954*. [GitHub-2156](https://github.com/magento/magento2/issues/2156) 


### UI

<!--- MAGETWO-84852 -->*  Magento now validates XML  against the schema file when saving custom layout update XML in the CMS page in production mode. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11860*.

### Wishlist
<!--- MAGETWO-86204-->* The default value for a wishlist item's `buyRequest` data is now always an array. Previosuly this value was set to `null`. *Fix submitted by [James Halsall](https://github.com/jameshalsall) in pull request 12930*.

 -



<!--- NOT NEEDED   MAGETWO-87348  MAGETWO-87346 MAGETWO-87345 MAGETWO-87343 MAGETWO-86760 MAGETWO-85931 MAGETWO-84907 MAGETWO-84733 MAGETWO-71608 MAGETWO-82008-->


<!---  CANNOT REPRODUCE MAGETWO-85632 MAGETWO-83400 MAGETWO-81629 MAGETWO-70004 MAGETWO-69476 MAGETWO-65162
MAGETWO-64511 MAGETWO-60553 -->

<!--- WON'T FIX MAGETWO-66481 MAGETWO-54167MAGETWO-59163  -->

<!---  INTERNAL ONLY MAGETWO-86454 MAGETWO-85030 MAGETWO-83115 MAGETWO-65534 -->

<!---  NOT A BUG MAGETWO-75814 -->


## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.




## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 

