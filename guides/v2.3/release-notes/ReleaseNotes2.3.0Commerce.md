---
group: release-notes
subgroup: Release Notes
title: Magento Commerce 2.3.0 Release Notes
menu_title: Magento Commerce 2.3.0 Release Notes
menu_order: 300
version: 2.3
github_link: release-notes/ReleaseNotes2.3.0Commerce.md

  
---


We are pleased to present Magento Commerce 2.3.0 Alpha. This release includes numerous functional fixes and enhancements. Note that Magento 2.3.0 pre-release code is a work in progress.

For information about signing up for the Magento 2.3 Alpha Evaluation program, see [Magento 2.3.0 Alpha Quick Start Guide]({{ page.baseurl }}/release-notes/2.3.0-quick-start.html). 

## About Magento 2.3.0 Alpha release

We welcome all feedback from registered participants on this Alpha release, but would especially appreciate feedback on PageBuilder, our new drag-and-drop visual content editing tool. 


## Highlights

Magento Commerce 2.3.0 includes a wealth of new features as well as hundreds of enhancements and fixes to the core product. Look for the following highlights in this release:

### New features

This release introduces significant tools to improve the developer experience: PWA Studio, alternatives to SOAP and REST, and a flexible frontend  API for front-end, headless, and mobile development.

* **PageBuilder** is a drag-and-drop visual content editing tool that lets merchants customize the appearance of their storefront without writing any HTML or CSS. No official documentation is available yet, but you can access the [magento2-page-builder repository](https://github.com/magento/magento2-page-builder) once you have completed signing up for our Alpha program. 


* **PWA Studio** is a set of tools that support the development, deployment and maintenance of progressive web applications. See [Magento PWA documentation](https://magento-research.github.io/pwa-devdocs/) for information about this toolset as well as information about contributing to this ongoing project.  


* **Declarative schema** simplifies installation and upgrade procedures for Magento and extensions. Declarative schemas reduce the need for many database scripts, eliminating the need to maintain these scripts. And here's a big advantage: This features enables Magento to roll out database schema changes in patch releases (not currently possible). This feature supports split and shared database structures and database structure validation. 


* **Graph API** provides an alternative to REST and SOAP web APIs for front-end development. See [GraphQL Developer Guide](https://devdocs.magento.com/guides/v2.3/graphql/index.html) for more information about Magento's implementation of this data query language. 


* **MultiSource Inventory (MSI)** lets merchants manage physical inventory across locations in Magento. Merchants can represent multiple locations (sources) for physical inventory in Magento. Sources can be grouped into stocks to create inventory pools that can be defined for one or more websites. Merchants can manipulate inventory based on sources. Magento also provides an API for source operations that helps merchants customize inventory actions or third-party order management systems to perform the same actions in an automated way. 


* **Amazon Sales Channel**



### Core product improvements

* **Updates to Magento's tech stack (including upgraded PHP support)** include upgrades to Redis, MySQL, Elasticsearch, compatibility with PHP 7.2. 

* **Improvements to import and export**  focus on enhancements to existing processes, including the  addition of new object types. 

* **ElasticSearch support for Magento Community version**. ElasticSearch support was previously provided in Magento Commerce only. 

* **Improvements to release packaging** plus an increase in test automation, results in a faster, more efficient release process and improved product quality. 

* **CMS enhancements** include banner enhancements. You can now create banner content in native Magento WYSIWYG or Page Builder. We've also updated the WYSIWYG editor to use TinyMCE 4.6. (TinyMCE is now integrated into Magento through an adapter that allows it to be replaced with any other WYSIWYG editor.) 

* **Performance improvements** include JavaScript bundling, which enhances the frontend performance of existing themes. JavaScript bundling also minimizes file size and optimizes processing time to improve page performance in the browser. 

* **Security enhancements** 

    * Cache flush ACL provides granular access to cache management settings to prevent accidental changes that could potentially affect system performance. This ACL also lets merchants control which administrative users can clear site caches. 

    * 2FA/CAPTCHA protects the Admin panel against against stolen passwords and protects stores against bots.

* **Change in versioning for B2B product** to match the versioning of the core product. 


## Known issues

Magento 2.3.0 pre-release code is a work in progress, and readiness of different components may vary. See [Component Status]({{page.baseurl}}/release-notes/component-status.html) for an overview of the health of core code components and modules.


## Fixed issues

We've fixed hundreds of issues for Magento 2.3.0. Here's an incomplete list of these fixes. Subsequent versions of these release notes will include a more comprehensive list. 


### Installation, upgrade, deployment
 
<!--- 83409, 81578-->* The `bin/magento setup` command now provides a rollback option that prompts the user to optionally retain files for future rollbacks. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11750*. [GitHub-6460](https://github.com/magento/magento2/issues/6460)


<!--- 82781-->* The `user.ini` files now recommend the correct values for `php_value memory_limit`. 
*Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11760*. [GitHub-11322](https://github.com/magento/magento2/issues/11322)


<!--- 81992-->* You can now use the `bin/magento cron:install`  and `cron:remove` commands to install or uninstall cron across multiple Magento installations with the same crontab. Previously, you could not create different crontab entries for multiple Magento installations that were in different folders because they used the same `#~ MAGENTO START` and `#~ MAGENTO END` suffixes. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11360*. 


<!--- 81965-->* The default time setting for `cron` success  and failure history is now seven days. *Fix submitted by [Max Chadwick](https://github.com/mpchadwick) in pull request 11463*.


<!--- 82752-->* In Magento deployments using multiple languages, the `Framework/translation.php` constructor that sets a store's locale now uses the correct locale. *Fix submitted by [Wiard van Rij](https://github.com/wiardvanrij) in pull request 10913*. [GitHub-10673](https://github.com/magento/magento2/issues/10673)

<!--- 82294-->* The `.htaccess` template now uses apache2.4 syntax. *Fix submitted by [Jonas Hünig](https://github.com/jonashrem) in pull request 11466*. [GitHub-10810](https://github.com/magento/magento2/issues/10810)


<!--- 69895-->* When a callback during commit throws an exception, the calling plugin can now distinguish this exception from a unsuccessful commit, and logs an exception. Previously, Magento threw an “Asymmetric transaction rollback error”. *Fix submitted by [Wayne Theisinger](https://github.com/waynetheisinger) in pull request 9955*.  [GitHub-6497](https://github.com/magento/magento2/issues/6497)


<!---71744 -->* The links that the Admin panel provides to backup packages now link to the expected packages. Previously, these links permitted you to download only the latest backup package. *Fix submitted by [will-b](https://github.com/will-b) in pull request 10593*.  [GitHub-10032](https://github.com/magento/magento2/issues/10032)


<!---71359 -->* All `cron` schedule times are now saved in UTC and then displayed to the user in the expected time zone. Previously, the `cron` schedule times in the database were in local date time formats and not UTC, while the other system dates and times were saved as UTC in the database. This resulted in varying and potentially confusing *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10432*. [GitHub-4237](https://github.com/magento/magento2/issues/4237)





### Cart and checkout

<!---83562 -->* `update button.phtml` has been simplified to optimize translation. *Fix submitted by [Karla Saaremäe](https://github.com/ChuckyK) in pull request 12155*. 

<!--- 83196-->* You can now enter zip codes that contain no spaces for locations in the Netherlands. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11961*. [GitHub-11898](https://github.com/magento/magento2/issues/11898)

<!--- 81823-->* The text that appears above the billing address field on the checkout page has been edited to remove redundancy. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 11399* 

<!--- 81175-->* The One Touch Ordering feature allows users to place orders without going through full checkout. *Fix submitted by [Daniel Korzeniowski](https://github.com/danielkorzeniowski)*. 

<!--- 71761-->* You can now delete the last product in your shopping cart even when the **Minimum Order Amount** setting (**Admin > Sales**) is enabled. Previously, if you tried to delete the last item in your cart under these circumstances, Magento would throw an exception. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10601* [GitHub-6151](https://github.com/magento/magento2/issues/6151)





### Catalog

<!--- 85695-->*  Magento no longer throws an error when you re-save a product attribute with a new name. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11619*. [GitHub-6770](https://github.com/magento/magento2/issues/6770)

<!--- 67509-->* The grouped product page now  shows the lowest price for a simple product. *Fix submitted by [evgk](https://github.com/evgk) in pull request 9266*. [GitHub-9265](https://github.com/magento/magento2/issues/9265)


<!--- 85016-->* You can now add a new product with custom attributes that has the same name and attributes as a previously deleted product. Previously, Magento did not let you add this new product because a `request_path` with the same value already existed in `table url_rewrite` from the previous product. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 12538*. [GitHub-12110](https://github.com/magento/magento2/issues/12110)

<!---83065 -->* Magento now saves the assigned background color for images correctly. Previously, if you updated the background color of a product image, the background color was always black. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11888*.[GitHub-8799](https://github.com/magento/magento2/issues/8799)

<!--- 83038-->* You can now assign and save a custom option assigned a price of 0. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11842*.[GitHub-4808](https://github.com/magento/magento2/issues/4808)

<!--- 82202-->* The ProductRepository SKU cache is no longer corrupted when the value assigned to `cacheLimit` is reached. 
*Fix submitted by [Thomas](https://github.com/heldchen) in pull request 11537*.

<!--- 80828-->* The price filter on a product category page now works as expected. Previously, if you applied this filter to a category listing, Magento displayed redundant product listings and unrelated products.  *Fix submitted by [Mayank Zalavadia](https://github.com/mayankzalavadia) in pull request 11206*. [GitHub-11139](https://github.com/magento/magento2/issues/11139)

<!--- 87614-->* You can now successfully create a product from API Product Management in deployments where the "Update by Schedule" indexer mode is set. (EE only)

<!--- 72620-->* Configurable products are no longer displayed on a category page when all children are disabled by mass action and the **display out-of-stock products** setting is off.

<!--- 85618-->* Magento no longer displays a 404 error when you change category permissions from Product Detail pages when multistore view is enabled.
<!---85617 -->* Magento no longer throws an exception when you add a product with a tiered price reduced to $0.00 to your shopping cart. 


### Configurable products

<!--- 85177 -->* Magento now displays the price of a configurable product as expected even when its simple products are out-of-stock. Previously, Magento displayed a price of 0 for any configurable product price when its simple products were out-of-stock. [GitHub-12578](https://github.com/magento/magento2/issues/12578)

<!--- 70491 -->*  Magento now displays the correct price of product when its special-price option has not been selected. Previously, Magento displayed the expired `special_price` value for a configurable product even when you did not select the product option associated with that price. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 9796*. [GitHub-6457](https://github.com/magento/magento2/issues/6457)

<!--- 70491 -->* Configurable product prices now correctly reflect VAT amounts as set by tax rule settings. Previously, magento displayed a configurable product's old price without the VAT.  *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 9796*. [GitHub-6729](https://github.com/magento/magento2/issues/6729)

<!--- 70491 -->* `LowestPriceOptionsProvider` now works as expected. Previously, Magento displayed expired special prices for configurable products, and displayed other problematic behaviors when working with special prices and configurable products.  *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 9796*. [GitHub-7362](https://github.com/magento/magento2/issues/7362)

<!--- 71670 -->* You can now successfully add a new product that contains a custom attribute set with a multiselect attribute from the Admin.  *Fix submitted by [Teun Lassche](https://github.com/thlassche) in pull request 10575*. [GitHub-10565](https://github.com/magento/magento2/issues/10565)


### Frameworks


#### Application framework

<!---83091 -->* We've removed undefined fields from files in `/lib`. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11662*. 

<!---83034 -->* The doc block that describes `setValue` in `FilterBuilder` now reflects that this method will accept an array. *Fix submitted by [bytecreation](https://github.com/ByteCreation) in pull request 11855*.

<!--- 82664-->* Magento now uses valid ISO language codes in HTML headers. *Fix submitted by [Cristian Sanclemente](https://github.com/crissanclick) in pull request 11644*. [GitHub-11540](https://github.com/magento/magento2/issues/11540)

<!--- 70736-->* Magento can now generate unsecure URLs if the current URL is secure. [GitHub-6175](https://github.com/magento/magento2/issues/6175)

<!--- 82235-->* The `php bin/magento app:config:dump` command no longer adds an extra space to to multiline array values every time it runs. Previously, this command inserted extra spaces, which triggered Github to commit these files as changed. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11452*. [GitHub-11328](https://github.com/magento/magento2/issues/11328)

<!--- 82007-->* The `StockItemCriteriaInterface` method `setProductsFilter` now accepts an array of IDs. Previously, this method accepted either a single integer or an array, but returned only one item. *Fix submitted by [Kirill Morozov](https://github.com/kirmorozov) in pull request 11503*.[GitHub-7678](https://github.com/magento/magento2/issues/7678)



#### Configuration framework

<!---83083 -->* An order's `relation_child_id` and `relation_child_real_id` fields are now accurately set during edit operations. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 11909*. [GitHub-10195](https://github.com/magento/magento2/issues/10195)

<!--- 82998-->* Pages that contain layout files with `block_id` arguments that contain whitespace now load correctly. Previously, Magento threw an error when loading these pages. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 11849*.[GitHub-7640](https://github.com/magento/magento2/issues/7640)

<!---81310 -->* The config array can now read  all settings from `config`. Previously, the config array was hardcoded to read three settings only. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request 11302*.


<!---75458 -->* You can now assign a default value to config fields of type `image` or `file`.  *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10253*.[GitHub-10252](https://github.com/magento/magento2/issues/10252)


#### JavaScript framework

<!--- 85096-->* Magento now displays video and images as expected when you select a video or click to view a full-screen image for a configurable product. *Fix submitted by [Chumak Roman](https://github.com/roma84) in pull request 12556*. [GitHub-12268](https://github.com/magento/magento2/issues/12268)

<!---81426 -->* We've removed duplicate parameters from a Magento UI LESS library mixin. *Fix submitted by [Bartek Igielski](https://github.com/Igloczek) in pull request 11276*.


#### Session framework

<!--- 88084 -->* We’ve removed the 30-second timeout limit for the session locking mechanism when Redis is used for session storage.


### General fixes
<!--- 84853-->* Magento now validates  custom layout update XML against the schema file when you save the XML. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11859*. 

<!--- 88973-->* You can now successfully close full-screen zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if you chose full screen zoom for any product image, you could not close the full screen zoom.

<!--- 72508-->* Deleting a customer in Admin Panel no longer causes fatal errors upon storefront login or registration.

<!---85662 -->* The **Modified** date field is now updated as expected when you save a page in a deployment running Magento 2.2.1.  *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 12637*. [GitHub-12625](https://github.com/magento/magento2/issues/12625)

<!--- 85673-->* When the **Redirect Customer to Account Dashboard after Logging in** setting is disabled, Magento now includes the login URL (including the referer in base64 encoding) from the `window.checkout` object as expected (for example, https://myshop.com/customer/account/login/referer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0). 

<!--- 85539-->* Magento now correctly handles `file` or `image` type customer attributes. Previously, when you tried to save customer information when one of these customer attributes were set, Magento threw an exception and did not save the file. *Fix submitted by [Franciszek Wawrzak](https://github.com/fsw) in pull request 11267*. [GitHub-11252](https://github.com/magento/magento2/issues/11252)

<!--- 83276-->*  You can now use uppercase letters in store codes. *Fix submitted by [Manu Gonzalez Rodriguez](https://github.com/manuelson) in pull request 12010*. [GitHub-11996](https://github.com/magento/magento2/issues/11996)

<!--- 83002 -->* You can now add a new attribute class to a page's XML root by adding an HTML node. Previously, adding an HTML node caused a validation error. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11862*. [GitHub-11697](https://github.com/magento/magento2/issues/11697)

<!--- 84317 -->* The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in the `catalog_product_entity` table. Previously, Magento loaded quote items with non-existing products.

<!---81969 -->* Magento now correctly renders the download link in invoice emails. *Fix submitted by [Jakob Meissner](https://github.com/skymeissner) in pull request 11024*.

<!--- 82342-->* `AuthenticationInterface` now contains API interceptors that enhance user authentication, making it possible (for example) to implement a different hashing algorithm for non-Magento to Magento migrations. *Fix submitted by [Navarr Barnier](https://github.com/navarr) in pull request 11546*.

<!---82667 -->* The Magento UI mixins have been edited to improve performance. Changes include: 
    * removing all fallbacks to variables that don't exist in the global scope
    * defining all variables that are used inside mixins as parameters
    * adding all missing parameters to the areas of the code where mixins are invoked
    * moving and simplifying mixins used only once *Fix submitted by [Bartek Igielski](https://github.com/Igloczek) in pull request 11371*.


<!---82760 -->* The dashboard y-axis range has been enhanced by the addition of an index for y-axis range values. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11752*. [GitHub-7927](https://github.com/magento/magento2/issues/7927)

<!---81622 -->* Lengths for the following fields in the `quote_address` database table have been expanded: `telephone`, `fax`, `region`, and `city`. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request 11286*. [GitHub-10869](https://github.com/magento/magento2/issues/10869)

<!--- 81329-->* `Magento\Framework\Escaper` now contains the `escapeDollarSign` method, which looks for `${` and replaces `$` with `$`  during save actions involving the page and block controller. *Fix submitted by [Lorenzo Stramaccia](https://github.com/slackerzz) in pull request 11286*. [GitHub-10501](https://github.com/magento/magento2/issues/10501)

<!--- 70758-->* Magento now displays product review summaries only when a product has at least one review. *Fix submitted by [Jan Schlosser](https://github.com/decius7bc) in pull request 10248*. [GitHub-4530](https://github.com/magento/magento2/issues/4530)

<!--- 70797-->*   Magento now uses the config field backend model (`system.xml`) to generate default configuration values on the Admin. Previously, The `afterLoad()` method was evoked only after loading the configuration value from the database, and not after loading the configuration from `config.xml`. This caused the default configuration from `config.xml` to be passed to the form-element as `string` instead of `Array`, which resulted in empty configuration fields in the Admin. *Fix submitted by [kweij](https://github.com/kweij) in pull request 7742*. [GitHub-4530](https://github.com/magento/magento2/issues/7741)

<!--- 80193-->* Magento now selects the `CUST_GROUP_ALL` customer group in `adminhtml` after saving an attribute, and all `$customerGroups['value']` is now of type `string`. *Fix submitted by [Manuel Schmid](https://github.com/mash1t) in pull request 10475*. [GitHub-10436](https://github.com/magento/magento2/issues/10436)

<!--- 71544-->* Session cookies now last until the session closes. Previously, Magento interpreted a `form_key` cookie lifetime of 0 to determine the duration of the cookie lifetime, and the cookie expired immediately. *Fix submitted by [Eero Kuusela](https://github.com/ekuusela) in pull request 10528*. [GitHub-10527](https://github.com/magento/magento2/issues/10527)

<!--- 71544, 71539-->* Google Analytics has improved support of websites that conduct transactions in multiple currencies. Previously, payment providers that required different base currencies were configured as different websites in a multisite deployment,  and consequently had to send different base currency in Google Analytics.  *Fix submitted by [DominicWatts](https://github.com/DominicWatts) in pull request 10508*. [GitHub-6709](https://github.com/magento/magento2/issues/6709), [GitHub-7471](https://github.com/magento/magento2/issues/7471)

<!--- 71642-->*  Google Adwords now has the ability to provide transaction-specific conversion values in a conversion tracking tag. *Fix submitted by [DominicWatts](https://github.com/DominicWatts) in pull request 10558*. [GitHub-6708](https://github.com/magento/magento2/issues/6708)

<!--- 71833-->* The text in the authentication popup has been corrected to **Checkout as a new customer**. *Fix submitted by [Parker Smith](https://github.com/insanityfarm) in pull request 10627*. [GitHub-9533](https://github.com/magento/magento2/issues/9533)

  


### Indexing
<!---85225 -->* `indexer:status` now outputs information about the schedule mview backlog. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request 12592*.

<!---70883 -->* Magento no longer reindexes entities that have not been changed. Previously, Magento reindexed entries that that were not changed but which had a MySQL UPDATE. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 4893*.[GitHub-2987](https://github.com/magento/magento2/issues/2987)



### Infrastructure

<!---85588 -->* Magento now requires that customers select State/Province when shipping orders to India,  and the checkout page now provides a drop-down field with appropriate values. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 12378*. [GitHub-12378](https://github.com/magento/magento2/issues/12378)

<!--- 85587-->* We fixed the invalid parameter configuration that was provided for the `$block` argument of `Magento\\Ui\\Component\\HtmlContent`. *Fix submitted by [Tomasz Gregorczyk](https://github.com/Tomasz-Silpion) in pull request 12665*. [GitHub-12452](https://github.com/magento/magento2/issues/12452)

<!---84908 -->* The`app/code/Magento/Downloadable/Helper/File.php` and `app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php` files no longer contain duplicate key arrays. *Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request 12520*.





### Newsletter
<!--- 82942-->* Magento now sends confirmation-of-subscription email to new subscribers only. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11604*.[GitHub-5439](https://github.com/magento/magento2/issues/5439)


### Orders

<!--- 83496-->* Magento no longer copies every address that has `save_in_address_book` set to 0 to the customer address book. Previously, if you placed an order as a guest and set the `save_in_address_book` value for an address to 0, Magento still copied that address to the customer address book when it registered a new customer on the checkout success page. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 11903*.[GitHub-7691](https://github.com/magento/magento2/issues/7691)

<!--- 83154-->* Magento now displays new orders at the top of the orders list as expected when sorting order by purchase date. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 11931*.

<!---82656 -->* The `getTracksCollection()` method  now returns collection objects. Previously, this method returned either collections or arrays. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 11680*. [GitHub-8022](https://github.com/magento/magento2/issues/8022)

<!--- 82653-->* When you place an order in the Admin, Magento now displays the form needed to enter information for  enabled payment methods. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request 11683*. [GitHub-11380](https://github.com/magento/magento2/issues/11380)

<!---82187 -->* The Shipment API now adds a customer note to a shipment if the shipment was created through the API and `appendComment` is set to **true**. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 11519*. [GitHub-11207](https://github.com/magento/magento2/issues/11207)

<!---80916 -->* Magento now displays the State/Province information  on **Order View > Information > Address Information**. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11234* [GitHub-10441](https://github.com/magento/magento2/issues/10441)

<!---71360 -->* Magento now correctly calculates the value of the `base_shipping_discount_tax_compensation_amnt` field. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10435* [GitHub-10255](https://github.com/magento/magento2/issues/10255)

<!--- 69913-->* The Products Ordered report now shows simple (child) products of configurable products. *Fix submitted by [Ranjith VK](https://github.com/vkranjith) in pull request 9908*. [GitHub-9196](https://github.com/magento/magento2/issues/9196)

<!--- 84980-->* The Products in Cart report no longer tries to retrieve the data of deleted products. Previously, when Magento tried to generate this report, it threw an exception. *Fix submitted by [angelo983](https://github.com/angelo983) in pull request 12540*.

<!--- 82176-->* Magento no longer throws a fatal error when you search for a customer from  **Reports > By Customers**. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11524*. [GitHub-10301](https://github.com/magento/magento2/issues/10301)



### Search 
<!--- 83092-->* The unneeded `saveHandler` in the  CatalogSearch indexer declaration has been removed. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11626*.

<!--- 88082-->* Search synonyms in a group now can declare several words as synonyms. For example, "Elon Musk,tesla" is a valid synonym group, and a search on the phrase "Elon Musk" will also show results for the "tesla" keyword. Previously, you could declare synonyms for each word (for example, "Elon,Musk,Tesla"), but these words didn't work as a phrase. Synonyms are also now case-insensitive.

<!--- 72863-->* Searching for a value of an attribute set on the store-view level of a product now returns results. Previously, Magento returned results  only if the attribute value was entered on the all store-view levels.



### Sample data
<!---85584 -->* The `sampledata:deploy` and `remove` commands now have `no-update` options. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request*.



### Search
<!---70316 -->* The **Catalog > Products** page now contains a keyword search. *Fix submitted by [Josef Behr](https://github.com/josefbehr) in pull request 10089*. [GitHub-5785](https://github.com/magento/magento2/issues/5785)

<!---71801 -->* Magento no longer throws an asymmetric transaction error when you reindex in Magento deployments running Elasticsearch. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request 10610*. [GitHub-9930](https://github.com/magento/magento2/issues/9930)



### Sitemap
<!--- 83292-->* Magento now correctly processes global product attributes when generating the sitemap. *Fix submitted by [Ričards Zālītis](https://github.com/therool) in pull request 8999*. [GitHub-5941](https://github.com/magento/magento2/issues/5941)


<!--- 71372-->* It's now easier to add additional items to a sitemap. Previously, `SitemapPlugin` worked inconsistently with large sitemaps. *Fix submitted by [Piotr Kwiecinski](https://github.com/piotrkwiecinski) in pull request 10442*. [GitHub-10045](https://github.com/magento/magento2/issues/10045)




### Swatches

<!--- 83292-->* You can now use REST to import visual swatch attribute options. Previously, you could not add swatch options using service contracts unless a swatch option already existed for the attribute. *Fix submitted by [gonzalopelon](https://github.com/gomencal) in pull request 12044*. [GitHub-9410](https://github.com/magento/magento2/issues/9410), [GitHub-10707](https://github.com/magento/magento2/issues/10707), [GitHub-10737](https://github.com/magento/magento2/issues/10737), [GitHub-11032](https://github.com/magento/magento2/issues/11032)


### Tax

<!--- 83405 -->* Tax total amount is now equal to the sum of the tax details amounts. Previously, Magento displayed the wrong order tax amounts when using specific tax configurations. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 11594*. [GitHub-10347](https://github.com/magento/magento2/issues/10347)

<!---82746 -->*  You can now successfully upgrade from from 2.1.x to 2.2.0. Previously, when you tried to upgrade from 2.1.9 to 2.2.0, Magento displayed the  **postcode is a required field** error message, and `setup:upgrade` failed. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11735*.




### Translation and locales

<!---82650 -->* The `<![CDATA[]]>` statement in `system.xml` now works as expected. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request 11679*. [GitHub-7767](https://github.com/magento/magento2/issues/7767)

<!---71380 -->* The JavaScript translation for validation messages now work for customer account pages. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10445*. [GitHub-5820](https://github.com/magento/magento2/issues/5820)

<!--- 71380-->* Messages on password strength are now translatable. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10445*. [GitHub-5509](https://github.com/magento/magento2/issues/5509)

<!--- 71380-->* The JavaScript translation regex no longer leads to unexpected results and untranslatable strings. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10445*. [GitHub-7403](https://github.com/magento/magento2/issues/7403)

<!--- 71380-->* All messages in Customer Account Create are now translatable. Previously, warning messages about password validation appeared in locale language only. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 10445*. [GitHub-9967](https://github.com/magento/magento2/issues/9967)


### URL rewrites

<!--- 85026-->* Magento now sets the value of `Store_Code` from the current store when this information is included in a URL. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 12545*. [GitHub-12450](https://github.com/magento/magento2/issues/12450)

<!--- 82310-->* Magento now loads *urlrewrite* router before the Magento base router. Previously, the Magento custom URL rewrites functionality did not work when you added an additional redirection (for example, a custom redirection from `/customer/account/create` to another page). *Fix submitted by [Marc Rodriguez](https://github.com/mrodespin) in pull request 11471*. [GitHub-10231](https://github.com/magento/magento2/issues/10231)

<!--- 88091-->* Switching store views now works as expected. Previously, under some conditions, users were redirected to a 404 page.[GitHub-5416](https://github.com/magento/magento2/issues/5416)

<!--- 88091-->* You can now reset a form by clicking **Reset** in **Marketing > SEO & Search > URL Rewrites**. [GitHub-10459](https://github.com/magento/magento2/issues/10459)


### Web API

<!--- 82315 -->* When you use REST to update an existing product, Magento assists the update only to the websites that the was assigned to pre-update. Previously, updating a product using the REST API (`PUT /rest/all/V1/products/example_sku`) assigned the product update to all websites automatically. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11443*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)


### Wishlist

<!--- 85627 -->* Magento now displays an error message if you try to add products to a wishlist without first logging in. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 12681*. 




## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:


* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.


### Additional community fixes 

    * [#9236](https://github.com/magento/magento2/issues/9236) -- Upgrade ZF components. Zend_Json (fixed in [magento/magento2#10259](https://github.com/magento/magento2/pull/10259) and [magento/magento2#10306](https://github.com/magento/magento2/pull/10306) and [magento/magento2#10320](https://github.com/magento/magento2/pull/10320) and [magento/magento2#10329](https://github.com/magento/magento2/pull/10329) and [magento/magento2#10333](https://github.com/magento/magento2/pull/10333) and [magento/magento2#10339](https://github.com/magento/magento2/pull/10339) and [magento/magento2#10340](https://github.com/magento/magento2/pull/10340) and [magento/magento2#10341](https://github.com/magento/magento2/pull/10341) and [magento/magento2#10342](https://github.com/magento/magento2/pull/10342) and [magento/magento2#13137](https://github.com/magento/magento2/pull/13137))



    * [#10645](https://github.com/magento/magento2/issues/10645) -- Adding BEM class in XML via attribute tag causes class to be rewritten (fixed in [magento/magento2#10655](https://github.com/magento/magento2/pull/10655))

    * [#6733](https://github.com/magento/magento2/issues/6733) -- Bad ukrainian character encoding in minicart when Enabled JavaScript Bundling in production mode (fixed in [magento/magento2#10563](https://github.com/magento/magento2/pull/10563))


    * [#10562](https://github.com/magento/magento2/issues/10562) -- Merging / Bundling JS Files Production Mode breaks Regular Expressions (fixed in [magento/magento2#10563](https://github.com/magento/magento2/pull/10563))

    * [#8241](https://github.com/magento/magento2/issues/8241) -- Static versioning and styles minification break email fonts styles (fixed in [magento/magento2#10638](https://github.com/magento/magento2/pull/10638))


    * [#4720](https://github.com/magento/magento2/issues/4720) -- isAdminSecure never used or missing code (fixed in [magento/magento2#10877](https://github.com/magento/magento2/pull/10877))


    * [#9489](https://github.com/magento/magento2/issues/9489) -- Error while resend account confirmation link with special chars (e.g. "+" in email) (fixed in [magento/magento2#10848](https://github.com/magento/magento2/pull/10848))

    * [#9877](https://github.com/magento/magento2/issues/9877) -- getCacheTags for price issue (fixed in [magento/magento2#10930](https://github.com/magento/magento2/pull/10930))

    * [#10803](https://github.com/magento/magento2/issues/10803) -- When canceling order with OrderService, the cancel method always saves the order and returns true, even if the order can not be canceled. (fixed in [magento/magento2#10919](https://github.com/magento/magento2/pull/10919))


    * [#10772](https://github.com/magento/magento2/issues/10772) -- Unable to sort by store configuration default field when different to category's default sorting field (fixed in [magento/magento2#10937](https://github.com/magento/magento2/pull/10937))

    * [#10824](https://github.com/magento/magento2/issues/10824) -- Cannot add new columns to item grid in admin sales_order_view layout (fixed in [magento/magento2#10936](https://github.com/magento/magento2/pull/10936) and [magento/magento2#11092](https://github.com/magento/magento2/pull/11092))


    * [#11000](https://github.com/magento/magento2/issues/11000) -- Magento_Tax module has double discount_tax node in config.xml (fixed in [magento/magento2#11001](https://github.com/magento/magento2/pull/11001))

    * [#10595](https://github.com/magento/magento2/issues/10595) -- Low Stock Report Grid Empty (fixed in [magento/magento2#10935](https://github.com/magento/magento2/pull/10935))


    * [#9900](https://github.com/magento/magento2/issues/9900) -- Cms module collections missing event prefix (fixed in [magento/magento2#11046](https://github.com/magento/magento2/pull/11046))


    * [#10611](https://github.com/magento/magento2/issues/10611) -- Magento admin gets in redirect loop when I login with a role that has no resources assigned (fixed in [magento/magento2#10921](https://github.com/magento/magento2/pull/10921))


    * [#8554](https://github.com/magento/magento2/issues/8554) -- PageCache: async rendering of blocks can corrupt layout cache (fixed in [magento/magento2#11174](https://github.com/magento/magento2/pull/11174))


    * [#9050](https://github.com/magento/magento2/issues/9050) -- Randomly getting an empty  that gets cached (fixed in [magento/magento2#11174](https://github.com/magento/magento2/pull/11174))


    * [#10738](https://github.com/magento/magento2/issues/10738) -- Empty attribute label is displayed on product page when other language used. (fixed in [magento/magento2#11169](https://github.com/magento/magento2/pull/11169))


    * [#9968](https://github.com/magento/magento2/issues/9968) -- Canceled invoice can be canceled again (fixed in [magento/magento2#11073](https://github.com/magento/magento2/pull/11073))


    * [#10922](https://github.com/magento/magento2/issues/10922) -- REST endpoint /V1/store/storeViews is missing is_active value in store data (fixed in [magento/magento2#10923](https://github.com/magento/magento2/pull/10923))


    * [#10441](https://github.com/magento/magento2/issues/10441) -- State/Province Not displayed after edit Billing Address on Sales Orders - Backend Admin. (fixed in [magento/magento2#11234](https://github.com/magento/magento2/pull/11234))


    * [#11295](https://github.com/magento/magento2/issues/11295) -- The following requested cache types are not supported: 'compiled_config'. (fixed in [magento/magento2#11296](https://github.com/magento/magento2/pull/11296))


    * [#11044](https://github.com/magento/magento2/issues/11044) -- magento setup:upgrade prompts to run compilation, even in developer mode (fixed in [magento/magento2#11047](https://github.com/magento/magento2/pull/11047))


    * [#10007](https://github.com/magento/magento2/issues/10007) -- ProductAlert: Product alerts not showing in admin side product edit page (fixed in [magento/magento2#11449](https://github.com/magento/magento2/pull/11449))


    * [#11139](https://github.com/magento/magento2/issues/11139) -- Product Repeat Isuue after filter on category listing page. (fixed in [magento/magento2#11206](https://github.com/magento/magento2/pull/11206))


    * [#10501](https://github.com/magento/magento2/issues/10501) -- Dollar sign before config path or custom variables in cms page content makes listing crash (fixed in [magento/magento2#11315](https://github.com/magento/magento2/pull/11315))


    * [#10231](https://github.com/magento/magento2/issues/10231) -- Custom URL Rewrite Not working (fixed in [magento/magento2#11471](https://github.com/magento/magento2/pull/11471))


    * [#10795](https://github.com/magento/magento2/issues/10795) -- Shipping method radios have duplicate IDs on cart page (fixed in [magento/magento2#11457](https://github.com/magento/magento2/pull/11457))


    * [#11581](https://github.com/magento/magento2/issues/11581) -- Reference to wrong / non-existing class (fixed in [magento/magento2#11582](https://github.com/magento/magento2/pull/11582))


    * [#11586](https://github.com/magento/magento2/issues/11586) -- Cron install / remove via command messes up stderr 2>&1 entries (fixed in [magento/magento2#11587](https://github.com/magento/magento2/pull/11587))


    * [#7915](https://github.com/magento/magento2/issues/7915) -- customer objects are equal to eachother after observing event customer_save_after_data_object  (fixed in [magento/magento2#11649](https://github.com/magento/magento2/pull/11649))


    * [#7591](https://github.com/magento/magento2/issues/7591) -- PayPal module, "didgit" misspelling (fixed in [magento/magento2#11659](https://github.com/magento/magento2/pull/11659))


    * [#11328](https://github.com/magento/magento2/issues/11328) -- app:config:dump adds extra space every time in multiline array value (fixed in [magento/magento2#11452](https://github.com/magento/magento2/pull/11452))


    * [#7767](https://github.com/magento/magento2/issues/7767) -- in system.xml translate phrase not work  (fixed in [magento/magento2#11679](https://github.com/magento/magento2/pull/11679))


    * [#10301](https://github.com/magento/magento2/issues/10301) -- Customer review report search Bug in 2.1.x, 2.2 (fixed in [magento/magento2#11524](https://github.com/magento/magento2/pull/11524))


    * [#11207](https://github.com/magento/magento2/issues/11207) -- Shipment API won't append comment to email (fixed in [magento/magento2#11519](https://github.com/magento/magento2/pull/11519))


    * [#10168](https://github.com/magento/magento2/issues/10168) -- Coupon codes not showing in invoice (fixed in [magento/magento2#11642](https://github.com/magento/magento2/pull/11642))


    * [#11540](https://github.com/magento/magento2/issues/11540) -- Magento sets iso invalid language code in html header (fixed in [magento/magento2#11644](https://github.com/magento/magento2/pull/11644))

    * [#9869](https://github.com/magento/magento2/issues/9869) -- datetime type product attribute showing current date (fixed in [magento/magento2#11636](https://github.com/magento/magento2/pull/11636))

    * [#11534](https://github.com/magento/magento2/issues/11534) --  Values of Visual Swatch Attribute drop down is not work correct (fixed in [magento/magento2#11661](https://github.com/magento/magento2/pull/11661))

    * [#11380](https://github.com/magento/magento2/issues/11380) -- Payment Method Issue in Admin (fixed in [magento/magento2#11683](https://github.com/magento/magento2/pull/11683))

    * [#7099](https://github.com/magento/magento2/issues/7099) -- Admin: field labels wrapping poorly (fixed in [magento/magento2#11727](https://github.com/magento/magento2/pull/11727))

    * [#11322](https://github.com/magento/magento2/issues/11322) -- User.ini files specify 768M - Docs recommend at least 1G (fixed in [magento/magento2#11760](https://github.com/magento/magento2/pull/11760))

    * [#11022](https://github.com/magento/magento2/issues/11022) -- GET v1/products/attribute-sets/sets/list inconsistent return result (fixed in [magento/magento2#11418](https://github.com/magento/magento2/pull/11418))

    * [#7927](https://github.com/magento/magento2/issues/7927) -- Dashboard graph has broken y-axis range (fixed in [magento/magento2#11752](https://github.com/magento/magento2/pull/11752))

    * [#10673](https://github.com/magento/magento2/issues/10673) -- [2.2.0-RC2.2] Static content deploy with multiple locales:  js-translation.json files are the same (fixed in [magento/magento2#10913](https://github.com/magento/magento2/pull/10913))

    * [#5439](https://github.com/magento/magento2/issues/5439) -- Newsletter subscription (fixed in [magento/magento2#11604](https://github.com/magento/magento2/pull/11604))

    * [#11729](https://github.com/magento/magento2/issues/11729) -- Exported Excel with negative number can't be opened by MS Office (fixed in [magento/magento2#11730](https://github.com/magento/magento2/pull/11730))

    * [#4808](https://github.com/magento/magento2/issues/4808) -- The price of product custom option can't be set to 0. (fixed in [magento/magento2#11842](https://github.com/magento/magento2/pull/11842))

    * [#11409](https://github.com/magento/magento2/issues/11409) -- Too many password reset requests even when disabled in settings (fixed in [magento/magento2#11434](https://github.com/magento/magento2/pull/11434))

    * [#8236](https://github.com/magento/magento2/issues/8236) -- CMS blocks are not validated against having same store and identifier (fixed in [magento/magento2#11805](https://github.com/magento/magento2/pull/11805))

    * [#7640](https://github.com/magento/magento2/issues/7640) -- X-Magento-Tags header containing whitespaces causes exception (fixed in [magento/magento2#11849](https://github.com/magento/magento2/pull/11849))

    * [#10185](https://github.com/magento/magento2/issues/10185) -- New Orders are not in Order grid after data migration from M 1.7.0.2 to M 2.1.7 (fixed in [magento/magento2#11931](https://github.com/magento/magento2/pull/11931))

    * [#10195](https://github.com/magento/magento2/issues/10195) -- Order relation child is not set during edit operation. (fixed in [magento/magento2#11909](https://github.com/magento/magento2/pull/11909))

    * [#6948](https://github.com/magento/magento2/issues/6948) -- CatalogImportExport categoryProcessor does not support escaped delimiter (fixed in [magento/magento2#11801](https://github.com/magento/magento2/pull/11801))

    * [#8799](https://github.com/magento/magento2/issues/8799) -- Image brackground  (fixed in [magento/magento2#11888](https://github.com/magento/magento2/pull/11888))

    * [#11697](https://github.com/magento/magento2/issues/11697) -- Theme: Added html node to page xml root, cause validation error (fixed in [magento/magento2#11862](https://github.com/magento/magento2/pull/11862))


    * [#11898](https://github.com/magento/magento2/issues/11898) -- Zip code Netherlands should allow zipcode without space (fixed in [magento/magento2#11961](https://github.com/magento/magento2/pull/11961))


    * [#11996](https://github.com/magento/magento2/issues/11996) -- Magento 2 Store Code validation regex: doesn't support uppercase letters in store code (fixed in [magento/magento2#12010](https://github.com/magento/magento2/pull/12010))


    * [#9768](https://github.com/magento/magento2/issues/9768) -- Admin dashboard Most Viewed Products Tab only gives default attribute set's products (fixed in [magento/magento2#11725](https://github.com/magento/magento2/pull/11725))


    * [#10810](https://github.com/magento/magento2/issues/10810) -- Add support of apache2.4 commands in htaccess  (fixed in [magento/magento2#11466](https://github.com/magento/magento2/pull/11466))


    * [#8022](https://github.com/magento/magento2/issues/8022) -- Uncaught Error: Call to a member function addItem() on array in app/code/Magento/Sales/Model/Order/Shipment.php (fixed in [magento/magento2#11680](https://github.com/magento/magento2/pull/11680))


    * [#7678](https://github.com/magento/magento2/issues/7678) -- StockItemCriteria::setProductsFilter doesn't work with array of ids (fixed in [magento/magento2#11503](https://github.com/magento/magento2/pull/11503))


    * [#7691](https://github.com/magento/magento2/issues/7691) -- address with saveInAddressBook 0 are still being added to the address book for new customers (fixed in [magento/magento2#11903](https://github.com/magento/magento2/pull/11903))


    * [#5956](https://github.com/magento/magento2/issues/5956) -- Untranslatable string "Please enter the same value again." (fixed in [magento/magento2#11834](https://github.com/magento/magento2/pull/11834))


    * [#10347](https://github.com/magento/magento2/issues/10347) -- Wrong order tax amounts displayed when using specific tax configuration (fixed in [magento/magento2#11594](https://github.com/magento/magento2/pull/11594))


    * [#10765](https://github.com/magento/magento2/issues/10765) -- Export data from grid not adding custom rendered data magento2 (fixed in [magento/magento2#12375](https://github.com/magento/magento2/pull/12375) and [magento/magento2#10915](https://github.com/magento/magento2/pull/10915))


    * [#9410](https://github.com/magento/magento2/issues/9410) -- Impossible to add swatch options via Service Contracts if there is no existing swatch option for attribute (fixed in [magento/magento2#12044](https://github.com/magento/magento2/pull/12044))


    * [#10707](https://github.com/magento/magento2/issues/10707) -- Create attribute option via API for swatch attribute fails (fixed in [magento/magento2#12044](https://github.com/magento/magento2/pull/12044))

    * [#10737](https://github.com/magento/magento2/issues/10737) -- Can't import attribute option over API if option is 'visual swatch' (fixed in [magento/magento2#12044](https://github.com/magento/magento2/pull/12044))


    * [#11032](https://github.com/magento/magento2/issues/11032) -- Unable to add new options to swatch attribute (fixed in [magento/magento2#12044](https://github.com/magento/magento2/pull/12044))


    * [#10058](https://github.com/magento/magento2/issues/10058) -- Tablerate->getCsvFile() fails with non-default PHP upload_tmp_dir (fixed in [magento/magento2#12376](https://github.com/magento/magento2/pull/12376))

    * [#12393](https://github.com/magento/magento2/issues/12393) -- Attribute with "Catalog Input Type for Store Owner" equal "Fixed Product Tax" for Multi-store (fixed in [magento/magento2#12397](https://github.com/magento/magento2/pull/12397))


    * [#10869](https://github.com/magento/magento2/issues/10869) -- field lengths differ across many tables (fixed in [magento/magento2#11286](https://github.com/magento/magento2/pull/11286))

    * [#6460](https://github.com/magento/magento2/issues/6460) -- [2.1.1 CE] Rollback/Restore deletes database (--db) backup file in ${webroot}/var/backups. (fixed in [magento/magento2#11750](https://github.com/magento/magento2/pull/11750))


    * [#11095](https://github.com/magento/magento2/issues/11095) -- Magento_Tax "postcode is a required field" when upgrading from 2.1.9 to 2.2 (fixed in [magento/magento2#11735](https://github.com/magento/magento2/pull/11735))


    * [#6634](https://github.com/magento/magento2/issues/6634) -- Yes/No attribute value is not shown on a product details page (fixed in [magento/magento2#10619](https://github.com/magento/magento2/pull/10619))

    * [#12439](https://github.com/magento/magento2/issues/12439) -- Newsletter subscription success email not sent after confirmation (fixed in [magento/magento2#12478](https://github.com/magento/magento2/pull/12478))


    * [#10414](https://github.com/magento/magento2/issues/10414) -- [CMS] Add ability to load block and pages by identifiers (fixed in [magento/magento2#10925](https://github.com/magento/magento2/pull/10925))

    * [#11825](https://github.com/magento/magento2/issues/11825) -- 2.1.9 Item not added to the Wishlist if the user is not logged at the moment he click on the button to add it. (fixed in [magento/magento2#12042](https://github.com/magento/magento2/pull/12042))

    * [#11908](https://github.com/magento/magento2/issues/11908) -- Adding to wishlist doesn't work when not logged in (fixed in [magento/magento2#12042](https://github.com/magento/magento2/pull/12042))


    * [#11324](https://github.com/magento/magento2/issues/11324) -- Updating a product via the REST API assigns it to all websites automatically. (fixed in [magento/magento2#11443](https://github.com/magento/magento2/pull/11443))


    * [#12110](https://github.com/magento/magento2/issues/12110) -- Missing cascade into attribute set deletion (fixed in [magento/magento2#12538](https://github.com/magento/magento2/pull/12538))


    * [#12450](https://github.com/magento/magento2/issues/12450) -- Store not found when adding a ? to site URL. (fixed in [magento/magento2#12545](https://github.com/magento/magento2/pull/12545))


    * [#12268](https://github.com/magento/magento2/issues/12268) -- Gallery issues on configurable product page (fixed in [magento/magento2#12556](https://github.com/magento/magento2/pull/12556))


    * [#10123](https://github.com/magento/magento2/issues/10123) -- Invoice entity_model in table eav_entity_type (fixed in [magento-engcom/magento2ce#997](https://github.com/magento-engcom/magento2ce/pull/997))


    * [#11252](https://github.com/magento/magento2/issues/11252) -- Custom attribute - File not allowing uploads (fixed in [magento/magento2#11267](https://github.com/magento/magento2/pull/11267))

    * [#12378](https://github.com/magento/magento2/issues/12378) -- Regions list in Directory module for India (fixed in [magento-engcom/magento2ce#1015](https://github.com/magento-engcom/magento2ce/pull/1015))


    * [#12452](https://github.com/magento/magento2/issues/12452) -- ACL permissions issue (fixed in [magento/magento2#12665](https://github.com/magento/magento2/pull/12665))


    * [#12660](https://github.com/magento/magento2/issues/12660) -- Invalid parameter configuration provided for $block argument upon no ACL permissions to the block (fixed in [magento/magento2#12665](https://github.com/magento/magento2/pull/12665))


    * [#6770](https://github.com/magento/magento2/issues/6770) -- M2.1.1 : Re-saving a product attribute with a different name than it's code results in an error (fixed in [magento/magento2#11619](https://github.com/magento/magento2/pull/11619))


    * [#12625](https://github.com/magento/magento2/issues/12625) -- when saving a page in magento 2.2.1, 'Modified' date field is not getting updated (fixed in [magento/magento2#12637](https://github.com/magento/magento2/pull/12637))


    * [#12627](https://github.com/magento/magento2/issues/12627) -- Referer is not added to login url in checkout config (fixed in [magento/magento2#12631](https://github.com/magento/magento2/pull/12631))


    * [#2156](https://github.com/magento/magento2/issues/2156) -- Why does \Magento\Translation\Model\Js\DataProvider use \Magento\Framework\Phrase\Renderer\Translate, not \Magento\Framework\Phrase\Renderer\Composite? (fixed in [magento/magento2#12007](https://github.com/magento/magento2/pull/12007))


    * [#5306](https://github.com/magento/magento2/issues/5306) -- Images imported via URL have crazy file paths (fixed in [magento/magento2#12872](https://github.com/magento/magento2/pull/12872))


    * [#12455](https://github.com/magento/magento2/issues/12455) -- Import uploader does not check Content-Disposition header  (fixed in [magento/magento2#12872](https://github.com/magento/magento2/pull/12872))

    * [#12533](https://github.com/magento/magento2/issues/12533) -- Unable to import external jpeg images from a CDN with dynamic URLs. (fixed in [magento/magento2#12872](https://github.com/magento/magento2/pull/12872))

    * [#10682](https://github.com/magento/magento2/issues/10682) -- Meta description and keywords transform to html entities for non latin/cyrilic characters in category and product pages (fixed in [magento/magento2#12955](https://github.com/magento/magento2/pull/12955))

    * [#11236](https://github.com/magento/magento2/issues/11236) -- Web Setup Wizard Icon Inconsistency (fixed in [magento/magento2#12960](https://github.com/magento/magento2/pull/12960))

    * [#9243](https://github.com/magento/magento2/issues/9243) -- Upgrade ZF components. Zend_Service (fixed in [magento/magento2#12957](https://github.com/magento/magento2/pull/12957))

    * [#12555](https://github.com/magento/magento2/issues/12555) -- Naming collision in Javascript ui registry (backend) (fixed in [magento/magento2#12943](https://github.com/magento/magento2/pull/12943))

    * [#7816](https://github.com/magento/magento2/issues/7816) -- Customer_account.xml file abused (fixed in [magento/magento2#12852](https://github.com/magento/magento2/pull/12852))

    * [#7543](https://github.com/magento/magento2/issues/7543) -- Category Top Navigation / Maximal Depth configuration not working (fixed in [magento/magento2#12640](https://github.com/magento/magento2/pull/12640))

    * [#12793](https://github.com/magento/magento2/issues/12793) -- 2.2 Importing Group Products No Longer Works (fixed in [magento/magento2#12853](https://github.com/magento/magento2/pull/12853))


    * [#7441](https://github.com/magento/magento2/issues/7441) -- Configurable attribute options are not sorted (fixed in [magento/magento2#13011](https://github.com/magento/magento2/pull/13011))


    * [#758](https://github.com/magento/magento2/issues/758) -- Coding standards: arrays (fixed in [magento-engcom/magento2ce#1193](https://github.com/magento-engcom/magento2ce/pull/1193))

    * [#4292](https://github.com/magento/magento2/issues/4292) -- Why can't one switch back to default mode ? (fixed in [magento-engcom/magento2ce#1195](https://github.com/magento-engcom/magento2ce/pull/1195))

    * [#9969](https://github.com/magento/magento2/issues/9969) -- Cancel order and restore quote methods increase stocks twice (fixed in [magento/magento2#12949](https://github.com/magento/magento2/pull/12949))

    * [#10415](https://github.com/magento/magento2/issues/10415) -- Customer First and Last names not being trimmed of leading and trailing spaces on save. (fixed in [magento/magento2#13012](https://github.com/magento/magento2/pull/13012))

    * [#2907](https://github.com/magento/magento2/issues/2907) -- Integration Test Annotation magentoAppArea breaks with some valid values (fixed in [magento-engcom/magento2ce#1194](https://github.com/magento-engcom/magento2ce/pull/1194))

    * [#12967](https://github.com/magento/magento2/issues/12967) -- Undeclared dependency magento/zendframework1 by magento/framework (fixed in [magento/magento2#12992](https://github.com/magento/magento2/pull/12992))

    * [#11428](https://github.com/magento/magento2/issues/11428) -- Cart Price Rule Label is not working (fixed in [magento/magento2#13223](https://github.com/magento/magento2/pull/13223))

    * [#11497](https://github.com/magento/magento2/issues/11497) -- Discount Rule does not show Default Rule Label (fixed in [magento/magento2#13223](https://github.com/magento/magento2/pull/13223))

    * [#4711](https://github.com/magento/magento2/issues/4711) -- Improve error reporting for products images import (fixed in [magento-engcom/magento2ce#1201](https://github.com/magento-engcom/magento2ce/pull/1201))

    * [#4696](https://github.com/magento/magento2/issues/4696) -- Admin product search - Pressing enter does not submit (fixed in [magento-engcom/magento2ce#1197](https://github.com/magento-engcom/magento2ce/pull/1197))

    * [#5105](https://github.com/magento/magento2/issues/5105) -- Error While send Invoice with Grouped Products (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#7582](https://github.com/magento/magento2/issues/7582) -- Payment methods in payments title in wrong language (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#8958](https://github.com/magento/magento2/issues/8958) -- Hint mistake in english language (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#9920](https://github.com/magento/magento2/issues/9920) -- stripped-min-length Validation via UI Component Fails with "special" characters (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#10317](https://github.com/magento/magento2/issues/10317) -- Region is being overridden when changing from a required-state country to one that is not required (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#10775](https://github.com/magento/magento2/issues/10775) -- 404 Forbidden sounds not right (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#11163](https://github.com/magento/magento2/issues/11163) -- Magento 2.2.0 Pages showing error: Data key is missing: code-entity (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#11231](https://github.com/magento/magento2/issues/11231) -- Can't close mobile search bar once typed (fixed in [magento-engcom/magento2ce#1282](https://github.com/magento-engcom/magento2ce/pull/1282))

    * [#6802](https://github.com/magento/magento2/issues/6802) -- Magento\Search\Helper\getSuggestUrl() not used in search template (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#6661](https://github.com/magento/magento2/issues/6661) -- XHTML templates Don't Use Schema URNs (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#10811](https://github.com/magento/magento2/issues/10811) -- Replace FollowSymLinks with SymLinksIfOwnerMatch (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#10920](https://github.com/magento/magento2/issues/10920) -- Sku => Entity_id relations are fetched inefficiently when inserting attributes values during product import (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#11230](https://github.com/magento/magento2/issues/11230) -- Unit test fails after fresh installation (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#11793](https://github.com/magento/magento2/issues/11793) -- Magento2.1.5 admin shipping report shows wrong currency code (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#11880](https://github.com/magento/magento2/issues/11880) -- Magento 2.1.9 Configurable::getUsedProducts returns a different array after product collections is cached (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#12079](https://github.com/magento/magento2/issues/12079) -- Products in cart report error when we have grouped or bundle product (fixed in [magento-engcom/magento2ce#1287](https://github.com/magento-engcom/magento2ce/pull/1287))

    * [#8621](https://github.com/magento/magento2/issues/8621) -- M2.1 Multishipping Checkout step New Address - Old State is saved when country is changed (fixed in [magento/magento2#13339](https://github.com/magento/magento2/pull/13339))

    * [#6891](https://github.com/magento/magento2/issues/6891) -- Add-to-cart checkbox still visible when $canItemsAddToCart = false (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#9763](https://github.com/magento/magento2/issues/9763) -- When go checkout,Cart Price Rules 25%test coupon code can go wrong (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#9944](https://github.com/magento/magento2/issues/9944) -- Name attribute shows empty when creating custom fields on product creation form (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#9919](https://github.com/magento/magento2/issues/9919) -- Pattern Validation via UI Component Fails to Interpret String as RegEx Pattern (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#10025](https://github.com/magento/magento2/issues/10025) -- Integration tests don't reset the database (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#10275](https://github.com/magento/magento2/issues/10275) -- Admin global search - submit by enter doesn't work (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#10856](https://github.com/magento/magento2/issues/10856) -- Sync billing with shipping address on Admin Reorder and Admin Customer Create Order page does not work for Existing address selected (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#11157](https://github.com/magento/magento2/issues/11157) -- nginx.sample.conf missing heath_check.php? (fixed in [magento-engcom/magento2ce#1284](https://github.com/magento-engcom/magento2ce/pull/1284))

    * [#4004](https://github.com/magento/magento2/issues/4004) -- Newsletter Subscriber create-date not set, and change_status_at broken (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#7995](https://github.com/magento/magento2/issues/7995) -- If you leave as default, shipping lines disappear (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#9028](https://github.com/magento/magento2/issues/9028) -- You cannot set a 303 redirect response using a result factory (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#8954](https://github.com/magento/magento2/issues/8954) -- Error While Trying To Load Quote Item Collection Using Magento\Quote\Model\ResourceModel\QuoteItem\Collection::getItems() (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#8846](https://github.com/magento/magento2/issues/8846) -- Attribute option value uniqueness is not checked if created via REST Api (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#10583](https://github.com/magento/magento2/issues/10583) -- Checkout place order exception when using a new address (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#11700](https://github.com/magento/magento2/issues/11700) -- "Something Went Wrong" error for limited access admin user (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#12017](https://github.com/magento/magento2/issues/12017) -- Cross-sell product placeholder image size issue (fixed in [magento-engcom/magento2ce#1286](https://github.com/magento-engcom/magento2ce/pull/1286))

    * [#3596](https://github.com/magento/magento2/issues/3596) -- Notice: Undefined index: value in /app/code/Magento/Backend/Block/Widget/Grid/Column/Filter/Select.php on line 72 (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))
    * [#10014](https://github.com/magento/magento2/issues/10014) -- Newsletter subscriptions status not isolated between multi stores (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))

    * [#10477](https://github.com/magento/magento2/issues/10477) -- Cart price rule has failed if use dropdown attribute (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))

    * [#10628](https://github.com/magento/magento2/issues/10628) -- Color attribute swatches are not visible if sorting is enabled (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))

    * [#11140](https://github.com/magento/magento2/issues/11140) -- Going to '/admin' while using storecodes in url and a different adminhtml url will throw exception (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))

    * [#11532](https://github.com/magento/magento2/issues/11532) -- Duplicate Simple Product Throws Error: Undefined offset: 0 in SaveHandler.php on line 122 (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))

    * [#11832](https://github.com/magento/magento2/issues/11832) -- Create order (on Customer edit page) - not working from admin environment (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))

    * [#11941](https://github.com/magento/magento2/issues/11941) -- Invoice for products that use qty decimal rounds down to whole number (fixed in [magento-engcom/magento2ce#1289](https://github.com/magento-engcom/magento2ce/pull/1289))

    * [#7241](https://github.com/magento/magento2/issues/7241) -- No option to start with blank option for prefix and suffix in checkout. (fixed in [magento-engcom/magento2ce#1297](https://github.com/magento-engcom/magento2ce/pull/1297))

    * [#11946](https://github.com/magento/magento2/issues/11946) -- Layer navigation showing  wrong product count  (fixed in [magento-engcom/magento2ce#1297](https://github.com/magento-engcom/magento2ce/pull/1297))

    * [#12206](https://github.com/magento/magento2/issues/12206) -- Tracking link returns 404 page in admin panel (fixed in [magento-engcom/magento2ce#1297](https://github.com/magento-engcom/magento2ce/pull/1297))

    * [#12506](https://github.com/magento/magento2/issues/12506) -- Fixup typo getDispretionPath -> getDispersionPath (fixed in [magento-engcom/magento2ce#1297](https://github.com/magento-engcom/magento2ce/pull/1297))

    * [#12632](https://github.com/magento/magento2/issues/12632) -- Magento Connect no longer exist (fixed in [magento-engcom/magento2ce#1297](https://github.com/magento-engcom/magento2ce/pull/1297))

    * [#12713](https://github.com/magento/magento2/issues/12713) -- Currency symbol overlaps entered attribute option's price while creating Configurable Product (fixed in [magento-engcom/magento2ce#1297](https://github.com/magento-engcom/magento2ce/pull/1297))

    * [#11885](https://github.com/magento/magento2/issues/11885) -- Magento 2.2 Paypal Can't Accept Checkout Agreements Before Routing to PayPal (fixed in [magento-engcom/magento2ce#1299](https://github.com/magento-engcom/magento2ce/pull/1299))

    * [#12294](https://github.com/magento/magento2/issues/12294) -- Bug: Adding Custom Attribute - The value of Admin scope can't be empty (fixed in [magento-engcom/magento2ce#1299](https://github.com/magento-engcom/magento2ce/pull/1299))

    * [#12844](https://github.com/magento/magento2/issues/12844) -- "Cannot instantiate interface Magento\Framework\Interception\ObjectManager\ConfigInterface" error in integration tests (fixed in [magento-engcom/magento2ce#1299](https://github.com/magento-engcom/magento2ce/pull/1299))

    * [#12894](https://github.com/magento/magento2/issues/12894) -- Can't remove State is required for all countries (fixed in [magento-engcom/magento2ce#1299](https://github.com/magento-engcom/magento2ce/pull/1299))

    * [#12900](https://github.com/magento/magento2/issues/12900) -- Braintree "Place Order" button is disabled after failed validation (fixed in [magento-engcom/magento2ce#1299](https://github.com/magento-engcom/magento2ce/pull/1299))

    * [#11828](https://github.com/magento/magento2/issues/11828) -- Visual Swatches not showing swatch color in admin (fixed in [magento-engcom/magento2ce#1302](https://github.com/magento-engcom/magento2ce/pull/1302))

    * [#12320](https://github.com/magento/magento2/issues/12320) -- Newsletter subscribe button title wrapped (fixed in [magento-engcom/magento2ce#1302](https://github.com/magento-engcom/magento2ce/pull/1302) and [magento-engcom/magento2ce#1380](https://github.com/magento-engcom/magento2ce/pull/1380))

    * [#12877](https://github.com/magento/magento2/issues/12877) -- [2.2.1] Magento Database Backup Command Fails (Fix included) (fixed in [magento-engcom/magento2ce#1302](https://github.com/magento-engcom/magento2ce/pull/1302))

    * [#9783](https://github.com/magento/magento2/issues/9783) -- Multiple  parameters in widget.xml not allowed (fixed in [magento-engcom/magento2ce#1283](https://github.com/magento-engcom/magento2ce/pull/1283))

    * [#10941](https://github.com/magento/magento2/issues/10941) -- Responsive Design Issue on Mobile with Magento 2.1.9 (fixed in [magento-engcom/magento2ce#1283](https://github.com/magento-engcom/magento2ce/pull/1283))

    * [#11166](https://github.com/magento/magento2/issues/11166) -- ReindexAll -> getState() is not correct if the Indexer broke with PHP fatal error   (fixed in [magento-engcom/magento2ce#1283](https://github.com/magento-engcom/magento2ce/pull/1283))

    * [#11176](https://github.com/magento/magento2/issues/11176) -- Configured table prefix is not recognized in CLI admin:user:create (fixed in [magento-engcom/magento2ce#1283](https://github.com/magento-engcom/magento2ce/pull/1283))

    * [#11275](https://github.com/magento/magento2/issues/11275) -- Call to a member function addCrumb() (fixed in [magento-engcom/magento2ce#1283](https://github.com/magento-engcom/magento2ce/pull/1283))

    * [#11310](https://github.com/magento/magento2/issues/11310) -- Method "getChildren" sort ordering (fixed in [magento-engcom/magento2ce#1283](https://github.com/magento-engcom/magento2ce/pull/1283))

    * [#5015](https://github.com/magento/magento2/issues/5015) -- Report error csv doesn't work when trying to import a csv file with semicolon delimiter (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285) and [magento-engcom/magento2ce#1203](https://github.com/magento-engcom/magento2ce/pull/1203))

    * [#8970](https://github.com/magento/magento2/issues/8970) -- Cannot assign products to categories not under tree root (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285))

    * [#9742](https://github.com/magento/magento2/issues/9742) -- Default welcome message returns after being deleted (fixed in [magento-engcom/magento2ce#1296](https://github.com/magento-engcom/magento2ce/pull/1296))

    * [#9633](https://github.com/magento/magento2/issues/9633) -- Web Setup Wizard 500 error when session storage is configured to use memcache (fixed in [magento-engcom/magento2ce#1296](https://github.com/magento-engcom/magento2ce/pull/1296))

    * [#9566](https://github.com/magento/magento2/issues/9566) -- Status label is wrong in admin (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285))

    * [#10291](https://github.com/magento/magento2/issues/10291) -- Magento 2 Loading custom option dropdown issue (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285))

    * [#10908](https://github.com/magento/magento2/issues/10908) -- [2.2.0-rc3.0] Language switcher is broken when using multiple times (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285))

    * [#11211](https://github.com/magento/magento2/issues/11211) -- Store View switcher not working on front-end and it throws an error (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285))

    * [#11365](https://github.com/magento/magento2/issues/11365) -- "Ignore this notification" isn't working (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285))

    * [#11669](https://github.com/magento/magento2/issues/11669) -- API salesRefundInvoiceV1 does no save invoice ID on credit memo (fixed in [magento-engcom/magento2ce#1296](https://github.com/magento-engcom/magento2ce/pull/1296))

    * [#11868](https://github.com/magento/magento2/issues/11868) -- "Add Products" button has been duplicated after the customer group was changed (fixed in [magento-engcom/magento2ce#1285](https://github.com/magento-engcom/magento2ce/pull/1285))

    * [#12058](https://github.com/magento/magento2/issues/12058) -- Can't save emoji in custom product options (fixed in [magento-engcom/magento2ce#1296](https://github.com/magento-engcom/magento2ce/pull/1296))

    * [#5188](https://github.com/magento/magento2/issues/5188) -- Error generating URN-catalog when blank one exists (fixed in [magento-engcom/magento2ce#1298](https://github.com/magento-engcom/magento2ce/pull/1298))

    * [#6113](https://github.com/magento/magento2/issues/6113) -- Validate range-words in Form component (UI Component) (fixed in [magento-engcom/magento2ce#1298](https://github.com/magento-engcom/magento2ce/pull/1298))

    * [#9453](https://github.com/magento/magento2/issues/9453) -- Reopened: '?SID' in URL even if disabled (fixed in [magento-engcom/magento2ce#1298](https://github.com/magento-engcom/magento2ce/pull/1298))

    * [#11936](https://github.com/magento/magento2/issues/11936) -- required attribute set id filter on attribute group repository getList (fixed in [magento-engcom/magento2ce#1298](https://github.com/magento-engcom/magento2ce/pull/1298))

    * [#11953](https://github.com/magento/magento2/issues/11953) -- Product configuration creator does not warn about invalid SKUs (fixed in [magento-engcom/magento2ce#1298](https://github.com/magento-engcom/magento2ce/pull/1298))

    * [#12715](https://github.com/magento/magento2/issues/12715) -- Storefront Back to Sign in button does not work as expected (fixed in [magento-engcom/magento2ce#1298](https://github.com/magento-engcom/magento2ce/pull/1298))

    * [#12719](https://github.com/magento/magento2/issues/12719) -- Welcome message is shown with customer's first and last names after confirming account (fixed in [magento-engcom/magento2ce#1298](https://github.com/magento-engcom/magento2ce/pull/1298))

    * [#9764](https://github.com/magento/magento2/issues/9764) -- exception message is wrong and misleading in findAccessorMethodName() of Magento\Framework\Reflection\NameFinder (fixed in [magento-engcom/magento2ce#1323](https://github.com/magento-engcom/magento2ce/pull/1323))

    * [#9684](https://github.com/magento/magento2/issues/9684) -- No ACL set for integrations (fixed in [magento-engcom/magento2ce#1323](https://github.com/magento-engcom/magento2ce/pull/1323))

    * [#10474](https://github.com/magento/magento2/issues/10474) -- Error message in product review form not being translated (fixed in [magento-engcom/magento2ce#1323](https://github.com/magento-engcom/magento2ce/pull/1323))

    * [#11329](https://github.com/magento/magento2/issues/11329) -- Unable to proceed massaction "Update attributes" with required multiple select attribute  (fixed in [magento-engcom/magento2ce#1323](https://github.com/magento-engcom/magento2ce/pull/1323))

    * [#12083](https://github.com/magento/magento2/issues/12083) -- Cannot import zero (0) value into custom attribute (fixed in [magento-engcom/magento2ce#1323](https://github.com/magento-engcom/magento2ce/pull/1323))

    * [#10128](https://github.com/magento/magento2/issues/10128) -- New Orders not being saved to order grid (fixed in [magento-engcom/magento2ce#1325](https://github.com/magento-engcom/magento2ce/pull/1325))

    * [#11740](https://github.com/magento/magento2/issues/11740) -- Sending emails from Admin in Multi-Store Environment defaults to Primary Store (fixed in [magento-engcom/magento2ce#1325](https://github.com/magento-engcom/magento2ce/pull/1325))

    * [#12209](https://github.com/magento/magento2/issues/12209) -- Substitution payment method - Incorrect message (fixed in [magento-engcom/magento2ce#1325](https://github.com/magento-engcom/magento2ce/pull/1325))

    * [#12601](https://github.com/magento/magento2/issues/12601) -- A space between the category page and the main footer when applying specific settings (fixed in [magento-engcom/magento2ce#1325](https://github.com/magento-engcom/magento2ce/pull/1325))

    * [#2991](https://github.com/magento/magento2/issues/2991) -- Products added to cart with REST API give total prices equal to zero (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#5129](https://github.com/magento/magento2/issues/5129) -- Product details page zoom issue when dropdown menu have overlap area with it. (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#6924](https://github.com/magento/magento2/issues/6924) -- Magento 2.1.0 -  "General system exception happened" on Import .csv (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#8255](https://github.com/magento/magento2/issues/8255) -- Export Products action doesn't consider hide_for_product_page value (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#11509](https://github.com/magento/magento2/issues/11509) -- Psr logger debug method does not work by the default in developer mode (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#11882](https://github.com/magento/magento2/issues/11882) -- It's not possible to enable "log to file" (debugging) in production mode (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#12221](https://github.com/magento/magento2/issues/12221) -- Google analytics pageview being triggered twice (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#12787](https://github.com/magento/magento2/issues/12787) -- Newsletter\Model\Subscriber::loadByEmail() does not use MySQL index (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#12876](https://github.com/magento/magento2/issues/12876) -- Multiple newsletter confirmation emails sent (fixed in [magento-engcom/magento2ce#1351](https://github.com/magento-engcom/magento2ce/pull/1351))

    * [#12717](https://github.com/magento/magento2/issues/12717) -- Catalog Products List widget is not displayed on Storefront (fixed in [magento/magento2#12765](https://github.com/magento/magento2/pull/12765))

    * [#4248](https://github.com/magento/magento2/issues/4248) -- Validations not working on customer registration on DOB field.  (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#5846](https://github.com/magento/magento2/issues/5846) -- Product import doesn't import all products, but still gives success message (fixed in [magento-engcom/magento2ce#1343](https://github.com/magento-engcom/magento2ce/pull/1343))

    * [#6350](https://github.com/magento/magento2/issues/6350) -- Frontend: Datepicker/calendar control does not use the store locale (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#6858](https://github.com/magento/magento2/issues/6858) -- DatePicker date format does not reflect user's locale (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#6831](https://github.com/magento/magento2/issues/6831) -- Magento 2.1.1 Invalid input date format 'Invalid date' (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#6712](https://github.com/magento/magento2/issues/6712) -- Footer Links Widget CSS Issue (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#9008](https://github.com/magento/magento2/issues/9008) -- Error Message Is Confusing When Code Base Is Behind Database Module Version (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#9151](https://github.com/magento/magento2/issues/9151) -- Sitemap.xml: lastmod timestamp can contain invalid dates (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#9743](https://github.com/magento/magento2/issues/9743) -- Invalid date when customer validate with French locale (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#9981](https://github.com/magento/magento2/issues/9981) -- M2 suggests running setup:upgrade if version number of module is higher than expected (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#10834](https://github.com/magento/magento2/issues/10834) -- signing in after selecting checkout button, will not end up to checkout page! (fixed in [magento-engcom/magento2ce#1353](https://github.com/magento-engcom/magento2ce/pull/1353))

    * [#8003](https://github.com/magento/magento2/issues/8003) -- Using System Value for Base Currency Results in Config Error (fixed in [magento-engcom/magento2ce#1358](https://github.com/magento-engcom/magento2ce/pull/1358))

    * [#10502](https://github.com/magento/magento2/issues/10502) -- Fatal error: Call getTranslateInline of null when generating some sitemap with errors (fixed in [magento-engcom/magento2ce#1358](https://github.com/magento-engcom/magento2ce/pull/1358))

    * [#11691](https://github.com/magento/magento2/issues/11691) -- Wrong return type for getAttributeText($attributeCode) (fixed in [magento-engcom/magento2ce#1358](https://github.com/magento-engcom/magento2ce/pull/1358))

    * [#12261](https://github.com/magento/magento2/issues/12261) -- Order confirmation email contains non functioning links  (fixed in [magento-engcom/magento2ce#1358](https://github.com/magento-engcom/magento2ce/pull/1358))

    * [#10485](https://github.com/magento/magento2/issues/10485) -- Error: Invalid input datetime format of value '25/07/+00201717' (fixed in [magento/magento2#11306](https://github.com/magento/magento2/pull/11306))

    * [#10580](https://github.com/magento/magento2/issues/10580) -- Set product as new "from" and "to" not being interpreted correctly (fixed in [magento/magento2#11306](https://github.com/magento/magento2/pull/11306))

    * [#12828](https://github.com/magento/magento2/issues/12828) -- Uncaught Error: Script error for: trackingCode error on every frontend page (fixed in [magento-engcom/magento2ce#1342](https://github.com/magento-engcom/magento2ce/pull/1342))


    * [#5774](https://github.com/magento/magento2/issues/5774) -- Tier price and custom options give bad results (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#6916](https://github.com/magento/magento2/issues/6916) -- Update Bundle Product without changes in bundle items  (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#9277](https://github.com/magento/magento2/issues/9277) -- Create new CLI command: enable/disable Magento Profiler (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#10133](https://github.com/magento/magento2/issues/10133) -- Please add your expectations for @deprecated annotations (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#11792](https://github.com/magento/magento2/issues/11792) -- Can't add customizable options to product (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#12374](https://github.com/magento/magento2/issues/12374) -- Model hasDataChanges always true (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#12430](https://github.com/magento/magento2/issues/12430) -- While assigning prices to configurable products, prices aren's readable when using custom price symbol. (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#12705](https://github.com/magento/magento2/issues/12705) -- Integrity constraint violation error after reordering product with custom options (fixed in [magento-engcom/magento2ce#1359](https://github.com/magento-engcom/magento2ce/pull/1359))

    * [#5035](https://github.com/magento/magento2/issues/5035) -- I can not to subscribe on change of all sections in Stores ->Configuration using event admin_system_config_changed_section (fixed in [magento-engcom/magento2ce#1362](https://github.com/magento-engcom/magento2ce/pull/1362))

    * [#9055](https://github.com/magento/magento2/issues/9055) -- Default Store is always used when retrieving sequence value's for sales entity's. (fixed in [magento-engcom/magento2ce#1362](https://github.com/magento-engcom/magento2ce/pull/1362))

    * [#9036](https://github.com/magento/magento2/issues/9036) -- Database backup doesn't include triggers (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#9918](https://github.com/magento/magento2/issues/9918) -- Magento 2 automatically disables maintenance mode after certain actions (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#10438](https://github.com/magento/magento2/issues/10438) -- Potential error on order edit page when address has extension attributes (fixed in [magento-engcom/magento2ce#1362](https://github.com/magento-engcom/magento2ce/pull/1362))

    * [#10697](https://github.com/magento/magento2/issues/10697) -- Product Import: Additional data: Invalid URL key (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#11332](https://github.com/magento/magento2/issues/11332) -- How to Fix the wrong input format of Customer date of birth  (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#11796](https://github.com/magento/magento2/issues/11796) -- Magento2.2.0 home page product grid issues (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#12064](https://github.com/magento/magento2/issues/12064) -- Database Rollback not working with magento 2.1.9? (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#12127](https://github.com/magento/magento2/issues/12127) -- Apostrophe in attribute option value in admin is not handled properly (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#12446](https://github.com/magento/magento2/issues/12446) -- Remove /home from the sitemap.xml (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#12699](https://github.com/magento/magento2/issues/12699) -- Multiselect Attribute is not saved for a product in the admin panel when it has a related product using another attribute set (fixed in [magento-engcom/magento2ce#1362](https://github.com/magento-engcom/magento2ce/pull/1362))

    * [#12714](https://github.com/magento/magento2/issues/12714) -- Extra records are in exported CSV file for order (fixed in [magento-engcom/magento2ce#1361](https://github.com/magento-engcom/magento2ce/pull/1361))

    * [#12860](https://github.com/magento/magento2/issues/12860) -- Sort by Product Name doesn't work with Ancor and available filters (fixed in [magento/magento2#13468](https://github.com/magento/magento2/pull/13468))

    * [#11484](https://github.com/magento/magento2/issues/11484) -- Visual Merchandiser show prices of out of stock simple products for the associated configurable product. (fixed in [magento/magento2#13632](https://github.com/magento/magento2/pull/13632))

    * [#12647](https://github.com/magento/magento2/issues/12647) -- Image Swatch size change not working (fixed in [magento/magento2#13506](https://github.com/magento/magento2/pull/13506))

    * [#13497](https://github.com/magento/magento2/issues/13497) -- Method getUrl in Magento\Catalog\Model\Product\Attribute\Frontend returns image url with double slash (fixed in [magento/magento2#13635](https://github.com/magento/magento2/pull/13635))

    * [#13685](https://github.com/magento/magento2/issues/13685) -- Incompatibilies with jQuery 3 (fixed in [magento/magento2#13686](https://github.com/magento/magento2/pull/13686) and [magento/magento2#13688](https://github.com/magento/magento2/pull/13688))

    * [#11577](https://github.com/magento/magento2/issues/11577) -- TinyMCE (WYSIWYG) doesn't work in admin when JS minify is enabled (fixed in [magento/magento2#13687](https://github.com/magento/magento2/pull/13687))

    * [#13595](https://github.com/magento/magento2/issues/13595) -- loadCache for Block Magento\Theme\Block\Html\Footer dont work (fixed in [magento/magento2#13785](https://github.com/magento/magento2/pull/13785))

    * [#12791](https://github.com/magento/magento2/issues/12791) -- Customer & Product Tax class wrongly styled (fixed in [magento/magento2#13795](https://github.com/magento/magento2/pull/13795))

    * [#13429](https://github.com/magento/magento2/issues/13429) -- Magento 2.2.2 password reset strength meter (fixed in [magento/magento2#13819](https://github.com/magento/magento2/pull/13819))

    * [#9413](https://github.com/magento/magento2/issues/9413) -- Cannot remove product_list_toolbar in XML (fixed in [magento-engcom/magento2ce#1380](https://github.com/magento-engcom/magento2ce/pull/1380))

    * [#10417](https://github.com/magento/magento2/issues/10417) -- Wysywig editor shows broken image icons (fixed in [magento-engcom/magento2ce#1380](https://github.com/magento-engcom/magento2ce/pull/1380))

    * [#13327](https://github.com/magento/magento2/issues/13327) -- Menu ui-state-active not removed from previous opened menu item (fixed in [magento-engcom/magento2ce#1380](https://github.com/magento-engcom/magento2ce/pull/1380))

    * [#11089](https://github.com/magento/magento2/issues/11089) -- setup:config:set --key append instead of replace (fixed in [magento/magento2#13630](https://github.com/magento/magento2/pull/13630))

    * [#13315](https://github.com/magento/magento2/issues/13315) -- Mobile "Payment Methods" step looks bad on mobile (fixed in [magento/magento2#13979](https://github.com/magento/magento2/pull/13979))

    * [#13760](https://github.com/magento/magento2/issues/13760) -- Remove deprecated Brazilian currencies in the setup process (fixed in [magento/magento2#13782](https://github.com/magento/magento2/pull/13782))

    * [#9342](https://github.com/magento/magento2/issues/9342) -- BundleImportExport is missing `selection_can_change_qty` (fixed in [magento-engcom/import-export-improvements#100](https://github.com/magento-engcom/import-export-improvements/pull/100))

    * [#13350](https://github.com/magento/magento2/issues/13350) -- Magento 2.2 Encoding Issue -> Google Analytics (fixed in [magento/magento2#13907](https://github.com/magento/magento2/pull/13907))

    * [#13827](https://github.com/magento/magento2/issues/13827) -- Google Analytics character encoding issue ( \u0020 ) (fixed in [magento/magento2#13907](https://github.com/magento/magento2/pull/13907))

    * [#12404](https://github.com/magento/magento2/issues/12404) -- Output of setup:static-content:deploy contains red color, should be a friendlier color (fixed in [magento/magento2#13975](https://github.com/magento/magento2/pull/13975))

    * [#12405](https://github.com/magento/magento2/issues/12405) -- Magento 2.2.1 - Impossible to create a new storeview (fixed in [magento/magento2#14043](https://github.com/magento/magento2/pull/14043))

    * [#12421](https://github.com/magento/magento2/issues/12421) -- 'Requested store is not found' when trying to create a store view in the back end (fixed in [magento/magento2#14043](https://github.com/magento/magento2/pull/14043))

    * [#13769](https://github.com/magento/magento2/issues/13769) -- Order Email Sender (fixed in [magento/magento2#14051](https://github.com/magento/magento2/pull/14051))

    * [#13652](https://github.com/magento/magento2/issues/13652) -- Issue in product title with special chars in mini cart (fixed in [magento/magento2#13802](https://github.com/magento/magento2/pull/13802))

    * [#14010](https://github.com/magento/magento2/issues/14010) -- Why Report Bugs link not open in new tab? (fixed in [magento/magento2#14016](https://github.com/magento/magento2/pull/14016))

    * [#5463](https://github.com/magento/magento2/issues/5463) -- The ability to store passwords using different hashing algorithms is limited (fixed in [magento/magento2#13885](https://github.com/magento/magento2/pull/13885))

    * [#13006](https://github.com/magento/magento2/issues/13006) -- Drop down values are not showing in catalog product grid magento2 (fixed in [magento/magento2#14174](https://github.com/magento/magento2/pull/14174))

    * [#12711](https://github.com/magento/magento2/issues/12711) -- Default Welcome message is broken on storefront with enabled translate-inline (fixed in [magento/magento2#14177](https://github.com/magento/magento2/pull/14177))

    * [#13556](https://github.com/magento/magento2/issues/13556) -- Sorting in Product Listing via Quantity not work (fixed in [magento/magento2#14179](https://github.com/magento/magento2/pull/14179))

    * [#13988](https://github.com/magento/magento2/issues/13988) -- Mini search field looses focus after its JavaScript is initialized (fixed in [magento/magento2#14180](https://github.com/magento/magento2/pull/14180))

    * [#11512](https://github.com/magento/magento2/issues/11512) -- Incorrect use of 503 status code (fixed in [magento/magento2#14190](https://github.com/magento/magento2/pull/14190))

    * [#13791](https://github.com/magento/magento2/issues/13791) -- Submitting search form (mini) with empty value throws error on preventDefault (fixed in [magento/magento2#14185](https://github.com/magento/magento2/pull/14185))

    * [#13820](https://github.com/magento/magento2/issues/13820) -- IE11 minicart not updating on configurable product page (ES6) (fixed in [magento/magento2#14192](https://github.com/magento/magento2/pull/14192))

    * [#13768](https://github.com/magento/magento2/issues/13768) -- Expired backend password - Attention: Something went wrong (fixed in [magento/magento2#14199](https://github.com/magento/magento2/pull/14199))

    * [#3483](https://github.com/magento/magento2/issues/3483) -- Default country selection issue while creating new customer from backend (fixed in [magento/magento2#14204](https://github.com/magento/magento2/pull/14204))

    * [#4454](https://github.com/magento/magento2/issues/4454) -- CMS Page with  in layout update xml (fixed in [magento/magento2#14205](https://github.com/magento/magento2/pull/14205))

    * [#13804](https://github.com/magento/magento2/issues/13804) -- Invoice grid shows wrong subtotal for partial items invoice. It shows order's subtotal instead if invoiced item's subtotal (fixed in [magento/magento2#14209](https://github.com/magento/magento2/pull/14209))

    * [#13899](https://github.com/magento/magento2/issues/13899) -- Postal code (zip code) for Canada should allow postal codes without space (fixed in [magento/magento2#14215](https://github.com/magento/magento2/pull/14215))

    * [#12792](https://github.com/magento/magento2/issues/12792) -- [2.1.10] No order confirmation email after paying with PayPal Express (fixed in [magento/magento2#14225](https://github.com/magento/magento2/pull/14225))

    * [#13385](https://github.com/magento/magento2/issues/13385) -- SQL query is printed into browser in case of exception (fixed in [magento/magento2#14223](https://github.com/magento/magento2/pull/14223))

    * [#13778](https://github.com/magento/magento2/issues/13778) -- Braintree Paypal Method No Order Confirmation Email Sent (fixed in [magento/magento2#14225](https://github.com/magento/magento2/pull/14225))

    * [#13631](https://github.com/magento/magento2/issues/13631) -- Totals sort order is not respected in customer account order view (fixed in [magento/magento2#14231](https://github.com/magento/magento2/pull/14231))

    * [#7906](https://github.com/magento/magento2/issues/7906) -- Fotorama Gallery too sensitive on Android Devices. (chrome) (fixed in [magento/magento2#14123](https://github.com/magento/magento2/pull/14123))

    * [#13117](https://github.com/magento/magento2/issues/13117) -- Swatch Attribute is not getting save while deleting a swatch row with empty admin scope text (fixed in [magento/magento2#13220](https://github.com/magento/magento2/pull/13220))

    * [#5863](https://github.com/magento/magento2/issues/5863) -- URL Rewrite issues occur very often /catalog/product/view/id/711/s/product-name/category/16/ (fixed in [magento/magento2#14252](https://github.com/magento/magento2/pull/14252))

    * [#8227](https://github.com/magento/magento2/issues/8227) -- After upgrade to 2.1.3 url rewrite problem multi store (fixed in [magento/magento2#14252](https://github.com/magento/magento2/pull/14252))

    * [#8957](https://github.com/magento/magento2/issues/8957) -- Permanent Redirect for old URL missing via API (fixed in [magento/magento2#14252](https://github.com/magento/magento2/pull/14252))

    * [#10073](https://github.com/magento/magento2/issues/10073) -- Magento don't create product redirect if URL key on store view level was changed. (fixed in [magento/magento2#14252](https://github.com/magento/magento2/pull/14252))

    * [#13216](https://github.com/magento/magento2/issues/13216) -- `quoteAddressToFormAddressData` mutates the argument (fixed in [magento/magento2#14250](https://github.com/magento/magento2/pull/14250))

    * [#13240](https://github.com/magento/magento2/issues/13240) -- Permanent 301 redirect is not generated when product url changes on storeview scope (fixed in [magento/magento2#14252](https://github.com/magento/magento2/pull/14252))

    * [#14172](https://github.com/magento/magento2/issues/14172) -- Remove use of setTimeout eval (fixed in [magento/magento2#14173](https://github.com/magento/magento2/pull/14173))

    * [#14267](https://github.com/magento/magento2/issues/14267) -- Use of deprecated $.browser (fixed in [magento/magento2#14270](https://github.com/magento/magento2/pull/14270))

    * [#13992](https://github.com/magento/magento2/issues/13992) -- Incorrect phpdoc should be Shipment\Item not Invoice\Item (fixed in [magento/magento2#14304](https://github.com/magento/magento2/pull/14304))

    * [#14072](https://github.com/magento/magento2/issues/14072) -- Change zip code validation pattern for Japan (fixed in [magento/magento2#14300](https://github.com/magento/magento2/pull/14300))

    * [#14089](https://github.com/magento/magento2/issues/14089) -- Malaysian (Malaysia) missing from locale list (fixed in [magento/magento2#14305](https://github.com/magento/magento2/pull/14305))

    * [#14274](https://github.com/magento/magento2/issues/14274) -- Quick search fires error (fixed in [magento/magento2#14301](https://github.com/magento/magento2/pull/14301))

    * [#14109](https://github.com/magento/magento2/issues/14109) -- `MAX_NUM_COOKIES` doesn't follow the open-closed principle  (fixed in [magento/magento2#14366](https://github.com/magento/magento2/pull/14366))








### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)


 For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html){:target="_blank"}.


### Installation and upgrade instructions

You can install Magento Commerce 2.3 Alpha  using Composer.

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.





<!--- DUPLICATE MAGETWO-42158 MAGETWO-85224 MAGETWO-84105 MAGETWO-83192 -->

<!--- CANNOT REPRODUCE MAGETWO-83798 MAGETWO-83772  MAGETWO-84068 MAGETWO-84067 MAGETWO-84065 MAGETWO-84044 MAGETWO-84027 MAGETWO-83991 MAGETWO-83985 MAGETWO-83978 MAGETWO-83971 MAGETWO-83969 MAGETWO-83962 MAGETWO-83915 MAGETWO-83909 MAGETWO-83879 MAGETWO-83436 MAGETWO-83536 MAGETWO-83615 MAGETWO-83295 MAGETWO-83297 MAGETWO-83348 MAGETWO-83357 MAGETWO-83387 MAGETWO-83433 MAGETWO-83520 MAGETWO-83557 MAGETWO-83758 MAGETWO-83750 MAGETWO-83748 MAGETWO-83721 MAGETWO-83719 MAGETWO-83715 MAGETWO-83468 MAGETWO-83713 MAGETWO-83712 MAGETWO-83666 MAGETWO-83665 MAGETWO-83623 MAGETWO-83620 MAGETWO-83618 MAGETWO-82510 MAGETWO-83223 MAGETWO-83220 MAGETWO-83213 MAGETWO-83210 MAGETWO-83179 MAGETWO-83098 MAGETWO-83097 MAGETWO-83080 MAGETWO-83015 MAGETWO-82955 MAGETWO-82964 MAGETWO-82575 MAGETWO-82571 MAGETWO-82534 MAGETWO-82909 MAGETWO-82870 MAGETWO-82834 MAGETWO-82822 MAGETWO-82783 MAGETWO-82777 MAGETWO-82775 MAGETWO-82469 MAGETWO-82726 MAGETWO-82719 MAGETWO-82718 MAGETWO-82714 MAGETWO-82703 MAGETWO-82700 MAGETWO-82699 MAGETWO-82697 MAGETWO-82693 MAGETWO-82688 MAGETWO-82644 MAGETWO-82626 MAGETWO-82606 MAGETWO-82604 MAGETWO-82602 MAGETWO-82600 MAGETWO-82594 MAGETWO-82585 MAGETWO-82583 MAGETWO-82514 MAGETWO-82490 MAGETWO-82488 MAGETWO-82482 MAGETWO-82472 MAGETWO-82458 MAGETWO-82454 MAGETWO-82424 MAGETWO-82419 MAGETWO-82410 MAGETWO-82408 MAGETWO-82404 MAGETWO-82401 MAGETWO-82390 MAGETWO-82378 MAGETWO-82376 MAGETWO-82372 MAGETWO-82368 MAGETWO-82362 MAGETWO-82358 MAGETWO-82356 MAGETWO-82350 MAGETWO-82345 MAGETWO-82293 MAGETWO-84319--> 

<!--- INTERNAL ONLY MAGETWO-85926 MAGETWO-82817 MAGETWO-82811 MAGETWO-82225 MAGETWO-81033 MAGETWO-81528 MAGETWO-81532 MAGETWO-81803 MAGETWO-84172 MAGETWO-84131 MAGETWO-85606 MAGETWO-85572 MAGETWO-85517 MAGETWO-85189 MAGETWO-85070 MAGETWO-84197 MAGETWO-84168 MAGETWO-84152 MAGETWO-84131 MAGETWO-84110 MAGETWO-84123 MAGETWO-84068 MAGETWO-84067 MAGETWO-84065 MAGETWO-84044 MAGETWO-84027 MAGETWO-83991 MAGETWO-83985 MAGETWO-83978 MAGETWO-83972 MAGETWO-83971 MAGETWO-83969 MAGETWO-83962 MAGETWO-83915 MAGETWO-83909 MAGETWO-83830 MAGETWO-84079 MAGETWO-86066 MAGETWO-83890 MAGETWO-83821 MAGETWO-83807 MAGETWO-83776 MAGETWO-83699 MAGETWO-81799 MAGETWO-85068 MAGETWO-83187 MAGETWO-83039 MAGETWO-85521 MAGETWO-85515 MAGETWO-85513 MAGETWO-85262 MAGETWO-85259 MAGETWO-85243 MAGETWO-85240 MAGETWO-85237 MAGETWO-85203 MAGETWO-85191 MAGETWO-85147 MAGETWO-85131 MAGETWO-85010 MAGETWO-84906 MAGETWO-84905 MAGETWO-84904 MAGETWO-85057 MAGETWO-83673 MAGETWO-85737 MAGETWO-84976 MAGETWO-85563 MAGETWO-85001 MAGETWO-83040 MAGETWO-83260 MAGETWO-88191 MAGETWO-82951--> 


<!--- WON'T FIX MAGETWO-85927 MAGETWO-85616 MAGETWO-51484 MAGETWO-85605 MAGETWO-85244 MAGETWO-84928 MAGETWO-85132 MAGETWO-83890 MAGETWO-83821 MAGETWO-83807 MAGETWO-82779 MAGETWO-82509 MAGETWO-83188 MAGETWO-82566 -->

<!--- INVALID/NOT A BUG MAGETWO-83422 MAGETWO-83299 --> 


