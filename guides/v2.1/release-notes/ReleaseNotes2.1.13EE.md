---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.13 Release Notes
menu_title: Magento Commerce 2.1.13 Release Notes
menu_order: 254
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
version: 2.1
github_link: release-notes/ReleaseNotes2.1.13EE.md
---

*	TOC
{:toc}

*Patch code and release notes were published on May 2, 2018.*



We are pleased to present Magento Commerce  2.1.13. This release includes both new features and many improvements. Check out the many community-contributed fixes!



## Fixed issues


### Setup

<!--- MAGETWO-86298 -->* The sample  `.htaccess` file Options `All -Indexes` directive has been replaced with Options `-Indexes`. Previously, the `All -Indexes` directive caused problems in shared hosting environments. 


- url: https://github.com/magento/magento2/pull/12959
 - contributor name: @dverkade
 - contributor link: https://github.com/dverkade

 https://github.com/magento/magento2/issues/10812




<!--- MAGETWO-69036 -->* Lazy-loaders have been moved from `getter` methods to classes constructor injection, and factory parameters are no longer required. (These parameters will be created inside of constructor methods if they weren't provided.) 

<!--- MAGETWO-58072 -->* Magento no longer creates an `/ i18n` at system root (`/`) in addition to the expected language file when you run `bin/magento i18n:pack` to install a language pack. [GitHub-6260](https://github.com/magento/magento2/issues/6260)

 


### Bundle 
<!--- MAGETWO-69496 -->*  You can now specify a Bundle option title on a store-view level with changes to more than one store view. Previously, after making a change to the store view title of a second store view, the previous store view would show the default title for the store view title. 



### Catalog

<!--- MAGETWO-85781 -->*  Magento now displays the correct final price of configurable products associated with catalog rules. Previously, the final price of a configurable product did not reflect any catalog rules associated with it. 






<!--- MAGETWO-85696 -->*  You can now successfully re-save a product attribute using a new name. Previously, an attempt to re-save the product attribute resulted in an error. 

 - key: magento/magento2#11618
 - url: https://github.com/magento/magento2/pull/11618
 - contributor name: @raumatbel
 - contributor link: https://github.com/raumatbel


https://github.com/magento/magento2/issues/6770





<!--- MAGETWO-85104 -->* Magento now flushes the full page cache for all products that have been reindexed (both child and parent products). Previously, the  configurable product page is not cache-cleaned as expected.

key: magento/magento2#12548
 - url: https://github.com/magento/magento2/pull/12548
 - contributor name: @ajpevers
 - contributor link: https://github.com/ajpevers

  - title: Magento 2.1.3 out of stock associated products to configurable are not full page cache cleaned
   - number: 8009
   - url: https://github.com/magento/magento2/issues/8009







<!--- MAGETWO-84932 -->*  Category page X-Magento-Tags headers no longer contain product cache identities when category display mode is set to **Static block only**. Fix submitted by Atish Goswami in pull request 12522.

 - contributor name: @atishgoswami
 - contributor link: https://github.com/atishgoswami



<!--- MAGETWO-84688 -->*  When you set the `category_ids` attribute to be visible in the storefront catalog, Magento now displays catalog listings as expected. Previously, Magento threw an exception. 


Manu Gonzalez Rodriguez
https://github.com/manuelson






<!--- MAGETWO-84432 -->*  Magento now saves images as expected when you create a new category that contains an image, and then edit and re-save that category.  Previously, it appears that Magento has saved the category as expected, but `exception.log` states that there was a problem saving the images.


 title: [Backport for 2.1 of #9904] #8069: Saving Category with existing imag…
 - key: magento/magento2#12368
 - url: https://github.com/magento/magento2/pull/12368
 - contributor name: @nemesis-back
 - contributor link: https://github.com/nemesis-back


 https://github.com/magento/magento2/issues/8069



<!--- MAGETWO-72312 -->* The category filter used for layered navigation for configurable products with no available options now counts products accurately.

<!--- MAGETWO-59782 -->*  Magento now correctly displays product information after you perform an operation on more than one item. Previously, product information was not correctly aligned on the page. [GitHub-6867](https://github.com/magento/magento2/issues/6867)

<!--- MAGETWO-83631 -->* The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have  existing relations only  in `catalog_product_entity` table. 

<!--- MAGETWO-83204 -->*  The Hide from Product Page option now works for the child product of a configurable product.











### Cart and checkout

<!--- MAGETWO-87195 -->*  



- title: [Backport 2.1] In checkout->multishipping-> new addres clean region when select country without dropdown for states 
 - key: magento/magento2#13367
 - url: https://github.com/magento/magento2/pull/13367
 - contributor name: @enriquei4
 - contributor link: https://github.com/enriquei4

Multishipping Checkout step New Address - Old State is saved when country is changed 

Expected result

Old State "New Jersey" was saved in the address dropdown.
State we saved was "NSW"
Actual result

State that we last select must be saved whether its from dropdown or Field.





<!--- MAGETWO-69701 -->* When two customers check out concurrently for the same product, one of the check outs now succeeds. Previously, when two customers checked out concurrently for the same product, and the total quantity being ordered is greater than the quantity available, the stock could become negative. 


 https://github.com/magento/magento2/issues/6363


<!--- MAGETWO-64171 -->* Display issues no longer prevent a user from adding a shipping address when checking out when running Internet Explorer 11.x. Previously, a registered user could not add a new shipping address in the  shipping step of the checkout process due to display issues. 

<!--- MAGETWO-71229 -->* Magento no longer caches warning messages as often as a customer clicks the Update Shopping Cart button while the shopping cart page loads. Previously, Magento cached a warning message each time a customer clicked this button while the page loaded in FireFox or Chrome, and this action resulted in multiple warning messages appearing on the top of the shopping cart page.



 

### Configurable products

<!--- MAGETWO-86312 -->*   Magento now reorders configurable attribute options as expected on the product page. 
 - key: magento/magento2#12962
 - url: https://github.com/magento/magento2/pull/12962
 - contributor name: @wardcapp
 - contributor link: https://github.com/wardcapp

https://github.com/magento/magento2/issues/7441




<!--- MAGETWO-60140 -->*  You can now disable a child product from a configurable product’s edit page. Previously, the child product’s status 
did not change after you selected **Disable product**.







### Customers
<!--- MAGETWO-85674 -->* `window.checkout.customerLoginUrl` now contains a URL that includes the referer in base64 encoding (for example, https://myshop.com/customer/account/login/referer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0). Previously, the login URL did not include a referer (for example, https://myshop.com/customer/account/login). 

 - url: https://github.com/magento/magento2/pull/12629
 - contributor name: @quisse
 - contributor link: https://github.com/quisse

https://github.com/magento/magento2/issues/12627



<!--- MAGETWO-84861 -->*  Administrators can now reset customer passwords as expected when the **max wait time between password resets** setting has been disabled.  Previously, when an administrator attempted to reset a customer's password from the Admin, Magento displayed this error, `Too many password reset requests`, even when the **max wait time between password resets** setting has been disabled.  


title: [Backport 2.1-develop] #11409: Too many password reset requests even when disabled in settings
 - key: magento/magento2#11436
 - url: https://github.com/magento/magento2/pull/11436
 - contributor name: @adrian-martinez-interactiv4
 - contributor link: https://github.com/adrian-martinez-interactiv4



<!--- MAGETWO-71669 -->* The Arabic language locale now uses the correct date format. Previously, when Magento was deployed using the JavaScript calendar and the Arabic (Kuwait) locale, It did not correctly display dates  on the product page. (Date format was shown as 182017/05 instead of 18/05/2017.)








### Framework

<!--- MAGETWO-86676 -->* `vendor/magento/framework/composer.json` now declares a dependency on `magento/zendframework1`. Previously, packages depending on `magento/framework` packages failed to execute.

 - key: magento/magento2#12991
 - url: https://github.com/magento/magento2/pull/12991
 - contributor name: @ihor-sviziev
 - contributor link: https://github.com/ihor-sviziev

https://github.com/magento/magento2/issues/12967

https://github.com/magento/magento2/issues/12967




#### Configuration framework

<!--- MAGETWO-83646 -->*  Scope-based configuration now decrypts data as expected. Previously, scope-based configuration failed to decrypt data on the default store only. 


https://github.com/magento/magento2/issues/8591




#### Session framework

<!--- MAGETWO-83288 -->* When you add a product to your wishlist after logging out, Magento now redirects you to your account Wishlist page and adds the product. Previously, you were redirected to your wishlist page, but Magento did not add the product.

https://github.com/magento/magento2/issues/11825






#### Zend
<!--- MAGETWO-86300 -->*  We've upgraded the Zend framework `Zend_Service` component. 

title: [Backport to 2.1-develop] Fix #9243 - Upgrade ZF components. Zend_Service
 - key: magento/magento2#12958
 - url: https://github.com/magento/magento2/pull/12958
 - contributor name: @dverkade
 - contributor link: https://github.com/dverkade

https://github.com/magento/magento2/issues/9243






### General

<!--- MAGETWO-86284 -->*  The `htmlentities` function has been replaced with the `htmlspecialchars` function. 

<!--- MAGETWO-85930 -->* You can now delete more than one record using the content block manager. Previously, when working in the content block manager in the Admin, Magento threw a fatal error when you tried to delete more than one record. 


 - key: magento/magento2#12840
 - url: https://github.com/magento/magento2/pull/12840
 - contributor name: @duckchip
 - contributor link: https://github.com/duckchip



https://github.com/magento/magento2/issues/8415






<!--- MAGETWO-85264 -->* The newsletter title string in the block template is no longer hardcoded. 

title: Backport #4958 to 2.1
 - key: magento/magento2#12611
 - url: https://github.com/magento/magento2/pull/12611
 - contributor name: @slackerzz
 - contributor link: https://github.com/slackerzz



<!--- MAGETWO-83631 -->*  The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in catalog_product_entity table, which prevents the loading of quote items for non-existing products.


<!--- MAGETWO-71701 -->*  In environments running Varnish, the menu item of the active category page is now handled as the active class as expected. Previously, activating cache interfered with Magento setting the appropriate CSS class to active in environments where Varnish was enabled. [GitHub-6609](https://github.com/magento/magento2/issues/6609)


<!--- MAGETWO-57064 -->*  The currency switcher now works for widgets on the home page. Previously, if your website supported multiple currencies, the currency switcher did not update the currencies for widgets on the home page.


<!--- MAGETWO-64171 -->*  Customers can now add a new address during the shipping step of the checkout process when accessing the store from Internet Explorer 11.x. Previously, when a customer tried to create a new address from the check out page,  the **Add address** button  was not visible.




### Gift card

<!--- MAGETWO-84806 -->* Magento now includes a gift card recipient's email address in the gift card account history. Previously, Magento did not include the gift card recipient's name and email address in the gift card account history, even though Magento successfully sent the email.



### Index

<!--- MAGETWO-83478 -->*  You can now view the state of the `mview` queue in real time, which can be useful when debugging indexing issues. You can now view how many items are in the queue pending processing, as well as view information from the `mview_state` table.

- title: [2.1] - Add command to view mview state and queue
 - key: magento/magento2#12050
 - url: https://github.com/magento/magento2/pull/12050
 - contributor name: @convenient
 - contributor link: https://github.com/convenient





### Newsletter

<!--- MAGETWO-66793 -->* Merchants can now unsubscribe customers from a newsletter from the Admin.
https://github.com/magento/magento2/issues/6313



### Order management

<!--- MAGETWO-86861 -->*  Invoices now display coupon code information as expected. 




- title: Backport 2.1 for MAGETWO-80428
 - key: magento/magento2#13261
 - url: https://github.com/magento/magento2/pull/13261
 - contributor name: @PieterCappelle
 - contributor link: https://github.com/PieterCappelle

 https://github.com/magento/magento2/issues/10168



<!--- MAGETWO-86259 -->* The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock.  

Pull Request:
 - title: [Backport #12668 into 2.1-develop] Fix for reverting stock twice for cancelled orders
 - key: magento/magento2#12952
 - url: https://github.com/magento/magento2/pull/12952
 - contributor name: @dverkade
 - contributor link: https://github.com/dverkade






### Payment methods

<!--- MAGETWO-86343 -->*  The `is_active` and `is_visible` columns now default to `true` even when column default values are not set in the `vault_payment_token` installation script.


 - key: magento-engcom/magento2ce#1149
 - url: https://github.com/magento-engcom/magento2ce/pull/1149
 - contributor name: @p-bystritsky
 - contributor link: https://github.com/p-bystritsky




<!--- MAGETWO-65734 -->*  Magento now processes credit memos as expected when refunding an order from PayPal. Previously, when Magento refunded  an order from PayPal, it created a credit memo, but the credit memo was not assigned a status (that is, the database status field is `null`), and the order status remained as processing.


<!--- MAGETWO-80643 -->*  Administrators can now create orders in the Admin for stores other than the default when using Paypal Payflow Pro. 


### Reports

<!--- MAGETWO-84476 -->*  When generating the output of **Reports > Marketing > Products in Cart**, Magento no longer calls the data of products that have been deleted from the cart.

- key: magento/magento2#12321 
 - url: https://github.com/magento/magento2/pull/12321 
 - contributor name: @angelo983 
 - contributor link: https://github.com/angelo983 



<!--- MAGETWO-83539 -->* The Admin's Most Viewed Products tab now displays all relevant information about products, even when they are not in the default attribute set. 
  

https://github.com/magento/magento2/issues/9768




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

<!--- MAGETWO-86285 -->* Inline translations and custom translators now work for Knockout templates. 

 - key: magento/magento2#12954
 - url: https://github.com/magento/magento2/pull/12954
 - contributor name: @dverkade
 - contributor link: https://github.com/dverkade
https://github.com/magento/magento2/issues/2156



### UI

<!--- MAGETWO-84852 -->*  Magento now validates XML  against the schema file when saving custom layout update XML in the CMS page in production mode.


  - key: magento/magento2#11860
 - url: https://github.com/magento/magento2/pull/11860
 - contributor name: @adrian-martinez-interactiv4
 - contributor link: https://github.com/adrian-martinez-interactiv4





### Wishlist
<!--- MAGETWO-86204-->* The default value for a wishlist item's `buyRequest` data is now always an array. Previosuly this value was set to `null`.


Fix wishlist item getBuyRequest with no options 
- title: Fix wishlist item getBuyRequest with no options
 - key: magento/magento2#12930
 - url: https://github.com/magento/magento2/pull/12930
 - contributor name: @jameshalsall
 - contributor link: https://github.com/jameshalsall





<!--- NOT NEEDED   MAGETWO-87348  MAGETWO-87346 MAGETWO-87345 MAGETWO-87343 MAGETWO-86760 MAGETWO-85931 MAGETWO-84907 MAGETWO-84733 MAGETWO-71608 MAGETWO-82008 MAGETWO-84138 MAGETWO-83426 MAGETWO-80324 MAGETWO-85206 -->*  
-->  





<!---  CANNOT REPRODUCE MAGETWO-85632 MAGETWO-83400 MAGETWO-81629 MAGETWO-70004 MAGETWO-69476 MAGETWO-65162
MAGETWO-64511 MAGETWO-60553 -->

<!--- WON'T FIX MAGETWO-66481 MAGETWO-54167 MAGETWO-59163 MAGETWO-83313 MAGETWO-71625 MAGETWO-68948 --> 

<!---  INTERNAL ONLY MAGETWO-86454 MAGETWO-85030 MAGETWO-83115 MAGETWO-65534 MAGETWO-85030 MAGETWO-80426 MAGETWO-60154-->*  

<!---  NOT A BUG MAGETWO-75814 -->








## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.





## System requirements
Our technology stack is built on PHP and MySQL. For more information, see <a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


