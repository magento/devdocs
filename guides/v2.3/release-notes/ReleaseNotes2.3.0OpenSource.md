---
group: release-notes
title: Magento Open Source 2.3.0 Release Notes
---

*Release notes published September 21, 2018.*

We are pleased to present Magento Open Source 2.3.0 Beta. This release includes numerous functional fixes and enhancements. Note that Magento 2.3.0 pre-release code is a work in progress.

For information about signing up for the Magento 2.3 Beta Evaluation program, see [Magento 2.3.0 Beta Quick Start Guide]({{page.baseurl}}/release-notes/2.3.0-quick-start.html). 

## About Magento 2.3.0 Beta release

We welcome all feedback from registered participants on this Beta release. 

## Highlights

Magento Open Source 2.3.0 includes a wealth of new features as well as hundreds of enhancements and fixes to the core product. Look for the following highlights in this release:

### New features

This release introduces significant tools to improve the developer experience: PWA Studio, alternatives to SOAP and REST, and a flexible frontend  API for front-end, headless, and mobile development.



* **PWA Studio** is a set of tools that support the development, deployment and maintenance of progressive web applications. See [Magento PWA documentation](https://magento-research.github.io/pwa-studio/) for information about this toolset as well as information about contributing to this ongoing project.  


* **Declarative schema** simplifies installation and upgrade procedures for Magento and extensions. Declarative schema reduce the need for many database scripts, eliminating the need to maintain these scripts. And here's a big advantage: This features enables Magento to roll out database schema changes in patch releases (not currently possible). This feature supports split and shared database structures and database structure validation. 


* **GraphQL API** provides an alternative to REST and SOAP web APIs for front-end development. See [GraphQL Developer Guide]({{site.baseurl}}/guides/v2.3/graphql/index.html) for more information about Magento's implementation of this data query language.


* **MultiSource Inventory (MSI)** lets merchants manage physical inventory across locations in Magento. Merchants can represent multiple locations (sources) for physical inventory in Magento. Sources can be grouped into stocks to create inventory pools that can be defined for one or more websites. Merchants can manipulate inventory based on sources. Magento also provides an API for source operations that helps merchants customize inventory actions or third-party order management systems to perform the same actions in an automated way. 


* **Amazon Sales Channel** allows you to create and manage Amazon listings and fulfill your orders for both Amazon customers as well customers of your store.  

### Core product improvements

* **Updates to Magento's tech stack (including upgraded PHP support)** include upgrades to Redis, MySQL, Elasticsearch, compatibility with PHP 7.2.  

* **Improvements to import and export**  focus on enhancements to existing processes, including the  addition of new object types. 

* **Elasticsearch support for Magento Community version**. Elasticsearch support was previously provided in Magento Commerce only. 

* **Improvements to release packaging** plus an increase in test automation, results in a faster, more efficient release process and improved product quality. 

* **CMS enhancements** include banner enhancements. You can now create banner content in native Magento WYSIWYG or Page Builder. (Within the product interface, we now use the term  “dynamic block” instead of  “banner”.) We've also updated the WYSIWYG editor to use TinyMCE 4.6. (TinyMCE is now integrated into Magento through an adapter that allows it to be replaced with any other WYSIWYG editor.) 

* **Performance improvements** include JavaScript bundling, which enhances the frontend performance of existing themes. JavaScript bundling also minimizes file size and optimizes processing time to improve page performance in the browser. 

* **Security enhancements** 

    * Cache flush ACL provides granular access to cache management settings to prevent accidental changes that could potentially affect system performance. This ACL also lets merchants control which administrative users can clear site caches. 

    * 2FA/CAPTCHA protects the Admin panel against against stolen passwords and protects stores against bots. 

* **Change in versioning for B2B product** to match the versioning of the core product.

## Known issues

Magento 2.3.0 pre-release code is a work in progress, and readiness of different components may vary. See [Component Status]({{page.baseurl}}/release-notes/component-status.html) for an overview of the health of core code components and modules.



### Issues fixed in 2.3.0 Alpha

The following issues, which were identified in our 2.3.0 Alpha code base, have been fixed in this Beta release:

#### AdminGWS

<!--- 91565 -->*  Restricted Admin users can now successfully create and save product attributes.

<!--- 91616 -->*  Restricted Admins can now create and edit CMS blocks as expected. Previously, Magento displayed this error message when a administrator with restricted privileges tries to create a new CMS block: `Warning: array_intersect(): Argument #1 is not an array in /var/www/html/magento2ee/app/code/Magento/AdminGws/Model/Models.php on line 1075`.


#### Application framework

* <!--- 93723,  92185-->The Magento application framework has been updated to use: 

	* jQuery 3.x 

	* AngularJS  1.6.9 



#### Cart

<!--- 60846 -->* Magento now alerts customers when a previously applied gift card has been removed during checkout. 


#### Cart Price rules

<!--- 94407 -->*  The cart price rule now uses specified conditions correctly when applying discounts on configurable products. 



#### Catalog

<!--- 91575 -->*  Magento now correctly renders print previews of product compare pages. Previously, the print view did not display text from the right side of the product compare page. 

<!--- 91848 -->*  The validation hint on the product custom option page  text field now updates as expected with the number of characters left before hitting the maximum.


<!--- 91837 -->* The `PUT /V1/products/:sku/media/:entryId` call updates a product's media gallery as expected.

<!--- 91689 -->* Single quotation marks in attribute values are no longer  auto-converted to HTML when saved. 


<!--- 91608 -->* The SEO-friendly URL for category pages now works as expected. 


<!--- 45950 -->*  We've optimized queries on loading product attributes when store scope is used.

<!--- 91497 -->*  Products are no longer automatically assigned to websites based on store scope. If a product is assigned to one website only, that relationship is maintained even after the product is saved from the Admin. 


<!--- 91595 -->* Product Display Pages (PDPs) now load as expected when a product name contains a double quotation mark. 
Previously, Magento did not load the image if its name contained double quotation marks.

<!--- 91529 -->* A restricted Admin user who is authorized to access only designated websites can no longer remove products from undesignated websites. 


<!--- 91504 -->* Customers viewing a storefront on a mobile device  can now see the text displayed when clicking on the "More Information" accordion anchor without having to scroll back up. Previously, the Mobile PDP accordion widget did not work as expected on mobile devices. 

<!--- 91473 -->* Magento now maintains designated sort order for products after saving a product in a category. Previously, product sort order reverted to sorting by product ID.

<!--- 91450 -->* You can now filter successfully by date from the Admin on products in multistore environments. Previously, values in the product creation date field (that is, the date set when **Set Product as New from Date** is selected)  were arbitrarily changed, and filtering did not work. 


<!--- 91440 -->*  Attributes with no assigned values on a product are no longer displayed with a  value of N/A in the Compare Products page or block as expected. 


<!--- 91439 -->* Prices are now visible as expected on the category page for a configurable product when you re-enable them from the Admin. Previously, when you re-enabled a previously disabled product and assigned it to a different store, Magento did not display its price on the category or product page. 



<!--- 91435 -->* Category smart rules now work as expected for partial values when conditions include using a dropdown attribute and "contains”.


<!--- 91434 -->* Magento now correctly sets the default option for the `status` attribute when a merchant creates a product. Previously, Magento changed a default setting of disabled (**No**) to **Yes** during product creation.


<!--- 69949 -->* `auto_increment` values are now preserved after restarting the MySQL server.


<!--- 62310 -->* A product’s **Use Default Value** check box for attributes is now unchecked by default when you add a new website to a product’s scope.







#### Checkout

<!--- 91734 -->*   Guest orders placed with gift cards can now be canceled as expected.

<!--- 91624 -->*  Braintree now permits customers to change the billing addresses on orders when paying with a saved card. Previously, Braintree used the same address for both billing and shipping. 

<!--- 91465 -->*  Customers can now change an existing  value in the checkout page’s  **State/Province** field to an alphanumeric value. Previously, when a customer tried to edit this field in this way, Magento did not place the order, and displayed a descriptive error message. 

<!--- 90971 -->*  Magento now successfully processes an order that contains products that will be shipped to multiple shipping addresses. Previously, Magento did not complete the order, but displayed an error message. 

<!--- 62891 -->*  Magento now saves the address that a customer enters during checkout if the customer selects **Save in address book**.  Previously, Magento saved the address, but left the default billing address field empty.





#### Configurable product


<!--- 77744 -->* Magento now displays a helpful error when  a merchant attempts to upload a file in an unsupported file format. 

<!--- 8709 -->* The wishlist now displays the appropriate product image for configurable products with selected options. Previously, Magento displayed the parent image instead of the image of the selected child product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)



#### Custom attributes

<!--- 93754 -->*  Merchants can now create attributes  for customer addresses (**Stores** > **Attributes** > **Customer Address**) as expected. Previously, a merchant could create an attribute, but Magento did not save or display it. 




#### Customer custom attributes


<!--- 91519 -->*  Magento now adds the address entered during checkout to a new account when a custom address attribute is required when creating a user account after checkout. 


<!--- 91509 -->*  User-defined customer attributes are now copied to the `magento_customercustomattributes_sales_flat_order` table after placing an order as expected. 


#### Customers

<!--- 94406 -->*  Magento now loads customer private data only once when system state changes. Previously, "Directory Data" and "Cart" were loaded twice after a user logged in to the system, which caused additional server load and traffic.


<!--- 91760 -->*  Magento now correctly displays both the default and additional shipping addresses  provided during checkout.
Previously, Magento displayed attributes with dropdown and multiple select types with incorrect values (option IDs instead of labels) for shipping addresses on checkout.


#### EAV


<!--- 91580 -->* Magento no longer displays empty product attributes of dropdown/ or swatch type as having a value of **no** on the storefront. 


<!--- 91570 -->* Magento now displays an error message as expected when  it does not save dropdown values as you create them. Previously, Magento did not save the options, but did not alert you in a message. 


#### General

<!--- 91762 -->* Magento now processes the oldest message queue entries first instead of last.

<!--- 67627 -->* You can successfully save a CMS page with same URL key as another store on a different website but with the same hierarchy. 

<!--- 66489 -->* You can now successfully preview a Registry Update email template. Previously, Magento threw a fatal error when you tried to preview this template. 


<!--- 64854 -->* Enterprise Rewards no longer permit double refunds. Previously, problems with the refund logic permitted the inadvertent creation of a double refund. 


<!--- 59789 -->* Swatch images now resize as expected. Previously, even when a product attribute with Catalog Input Type for Store Owner was set to **Visual swatch**, the image size did not adjust as expected. 




#### Import/Export

<!--- 91594 -->* Import now completes successfully when a product’s CSV entry is split over two import “bunches”.  Previously, Magento threw this error, `Cannot add or update a child row: a foreign key constraint fails`, and import failed. 

<!--- 87974 -->* You can now hide an image as expected by using the `hide_from_product_page` attribute during import.





#### Infrastructure


<!--- 93039 --> Note: Several components included by Composer have been updated to the latest patch versions. 

<!--- 68802 -->* Customers can change product status by clicking on the toggle element or by clicking on label text, but not by clicking the area around a toggle element. Previously, if a customer  clicked on the area around a toggle element, Magento changed the state of the element. Unintended results could occur if a customer mistakenly clicked on the area around the element and didn't realize that the status had  changed.



#### Newsletters

<!--- 91701 -->* A customer subscription on one store no longer depends on  the customer’s subscription on another store.



#### Payments

<!--- 94402 -->* The **Billing Address** field now displays the designated billing address as expected  for a registered customer  when checking out with Paypal Express Checkout. Previously, Magento displayed the shipping address in the **Billing Address** field in both the order confirmation email and the Admin.


<!--- 91500 -->* Admin users that are not part of the Administrator group can now complete payment for an order using Braintree.




#### Reports 

<!--- 63173 -->* Wishlist reports are available on the Admin as expected. 





#### Sales

<!--- 91710 -->* The grand total for a credit memo now matches the invoiced total when a discount is applied to shipping charges.

<!--- 59632 -->* The Items Ordered list now updates as expected when the user clicks **OK** when changing the options of a configurable product during creation of an order from the Admin. Previously, the update did not occur until the user clicked **Update Items and Quantities**.


<!--- 91678 -->*  Admin orders are no longer restricted by a minimum order amount. Previously, Magento required this minimum for both Admin and storefront users. 



<!--- 70661 -->* Orders exported to a CSV file now display dates in a consistent format. 
. 


#### Search

<!--- 93994 -->*  Elasticsearch is now the default search engine in Magento. MySQL search has been deprecated. 

<!--- 91625 -->*  Elasticsearch now works as expected in Chinese locales. 


<!--- 59305 -->*  Elasticsearch no longer includes out-of-stock product options in search results. 



#### Shipping

<!--- 94433 -->*  The Magento UPS module has been updated to support new UPS API endpoints.

<!--- 59529 -->*  You can now use `GET .V1/shipments` to search for shipments that contain a shipping label. Previously, using this call caused Magento to throw an exception. [GitHub-6668](https://github.com/magento/magento2/issues/6668)


#### Web API framework

<!--- 64316 -->*  When you create a product with `POST V1/products` whose name matches an existing product, Magento changes the URL key of the new product to a unique value. This matches the behavior when you create a product in Admin. [GitHub-8188](https://github.com/magento/magento2/issues/8188)


<!--- 91540 -->*  Product searches using `GET V1/products` return extension_attributes for configurable products as expected.

<!--- 91568 -->*  You can now include custom attributes when filtering the responses of REST calls.


<!--- 94207 -->*  Magento now returns a 404 error and includes a descriptive error message when a  REST search is performed on a non-existent cart.


#### Wishlist


<!--- 91615 -->*  Registered users can now create new wishlists as expected when multiple wishlists are enabled. Previously, Magento displayed an error.


<!--- 91433 -->*  Magento no longer changes the grid view to list view on the product list page when a customer adds a product from the wishlist section to the cart, and now displays the appropriate success message. 






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

<!--- 82235-->* The `php bin/magento app:config:dump` command no longer adds an extra space to multiline array values every time it runs. Previously, this command inserted extra spaces, which triggered Github to commit these files as changed. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11452*. [GitHub-11328](https://github.com/magento/magento2/issues/11328)

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

<!--- 71544, 71539-->* Google Analytics has improved  support of websites that conduct transactions in multiple currencies. Previously, payment providers that required different base currencies were configured as different websites in a multisite deployment,  and consequently had to send different base currency in Google Analytics.  *Fix submitted by [DominicWatts](https://github.com/DominicWatts) in pull request 10508*. [GitHub-6709](https://github.com/magento/magento2/issues/6709), [GitHub-7471](https://github.com/magento/magento2/issues/7471)


<!--- 71642-->*  Google Adwords now has the ability to provide transaction-specific conversion values in a conversion tracking tag. *Fix submitted by [DominicWatts](https://github.com/DominicWatts) in pull request 10558*. [GitHub-6708](https://github.com/magento/magento2/issues/6708)

<!--- 71833-->* The text in the authentication popup has been corrected to **Checkout as a new customer**. *Fix submitted by [Parker Smith](https://github.com/insanityfarm) in pull request 10627*. [GitHub-9533](https://github.com/magento/magento2/issues/9533)

  

### Indexing

<!---85225 -->* `indexer:status` now outputs information about the schedule mview backlog. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request 12592*.

<!---70883 -->* Magento no longer reindexes entities that have not been changed. Previously, Magento reindexed entries that were not changed but which had a MySQL UPDATE. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 4893*.[GitHub-2987](https://github.com/magento/magento2/issues/2987)

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

<!---82746 -->*  You can now successfully upgrade from 2.1.x to 2.2.0. Previously, when you tried to upgrade from 2.1.9 to 2.2.0, Magento displayed the  **postcode is a required field** error message, and `setup:upgrade` failed. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request 11735*.

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


### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html)


 For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html){:target="_blank"}.

### Installation and upgrade instructions

You can install Magento Open Source 2.3 Beta  using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.





<!--- DUPLICATE MAGETWO-42158 MAGETWO-85224 MAGETWO-84105 MAGETWO-83192 -->

<!--- CANNOT REPRODUCE MAGETWO-83798 MAGETWO-83772  MAGETWO-84068 MAGETWO-84067 MAGETWO-84065 MAGETWO-84044 MAGETWO-84027 MAGETWO-83991 MAGETWO-83985 MAGETWO-83978 MAGETWO-83971 MAGETWO-83969 MAGETWO-83962 MAGETWO-83915 MAGETWO-83909 MAGETWO-83879 MAGETWO-83436 MAGETWO-83536 MAGETWO-83615 MAGETWO-83295 MAGETWO-83297 MAGETWO-83348 MAGETWO-83357 MAGETWO-83387 MAGETWO-83433 MAGETWO-83520 MAGETWO-83557 MAGETWO-83758 MAGETWO-83750 MAGETWO-83748 MAGETWO-83721 MAGETWO-83719 MAGETWO-83715 MAGETWO-83468 MAGETWO-83713 MAGETWO-83712 MAGETWO-83666 MAGETWO-83665 MAGETWO-83623 MAGETWO-83620 MAGETWO-83618 MAGETWO-82510 MAGETWO-83223 MAGETWO-83220 MAGETWO-83213 MAGETWO-83210 MAGETWO-83179 MAGETWO-83098 MAGETWO-83097 MAGETWO-83080 MAGETWO-83015 MAGETWO-82955 MAGETWO-82964 MAGETWO-82575 MAGETWO-82571 MAGETWO-82534 MAGETWO-82909 MAGETWO-82870 MAGETWO-82834 MAGETWO-82822 MAGETWO-82783 MAGETWO-82777 MAGETWO-82775 MAGETWO-82469 MAGETWO-82726 MAGETWO-82719 MAGETWO-82718 MAGETWO-82714 MAGETWO-82703 MAGETWO-82700 MAGETWO-82699 MAGETWO-82697 MAGETWO-82693 MAGETWO-82688 MAGETWO-82644 MAGETWO-82626 MAGETWO-82606 MAGETWO-82604 MAGETWO-82602 MAGETWO-82600 MAGETWO-82594 MAGETWO-82585 MAGETWO-82583 MAGETWO-82514 MAGETWO-82490 MAGETWO-82488 MAGETWO-82482 MAGETWO-82472 MAGETWO-82458 MAGETWO-82454 MAGETWO-82424 MAGETWO-82419 MAGETWO-82410 MAGETWO-82408 MAGETWO-82404 MAGETWO-82401 MAGETWO-82390 MAGETWO-82378 MAGETWO-82376 MAGETWO-82372 MAGETWO-82368 MAGETWO-82362 MAGETWO-82358 MAGETWO-82356 MAGETWO-82350 MAGETWO-82345 MAGETWO-82293 MAGETWO-84319--> 

<!--- INTERNAL ONLY MAGETWO-85926 MAGETWO-82817 MAGETWO-82811 MAGETWO-82225 MAGETWO-81033 MAGETWO-81528 MAGETWO-81532 MAGETWO-81803 MAGETWO-84172 MAGETWO-84131 MAGETWO-85606 MAGETWO-85572 MAGETWO-85517 MAGETWO-85189 MAGETWO-85070 MAGETWO-84197 MAGETWO-84168 MAGETWO-84152 MAGETWO-84131 MAGETWO-84110 MAGETWO-84123 MAGETWO-84068 MAGETWO-84067 MAGETWO-84065 MAGETWO-84044 MAGETWO-84027 MAGETWO-83991 MAGETWO-83985 MAGETWO-83978 MAGETWO-83972 MAGETWO-83971 MAGETWO-83969 MAGETWO-83962 MAGETWO-83915 MAGETWO-83909 MAGETWO-83830 MAGETWO-84079 MAGETWO-86066 MAGETWO-83890 MAGETWO-83821 MAGETWO-83807 MAGETWO-83776 MAGETWO-83699 MAGETWO-81799 MAGETWO-85068 MAGETWO-83187 MAGETWO-83039 MAGETWO-85521 MAGETWO-85515 MAGETWO-85513 MAGETWO-85262 MAGETWO-85259 MAGETWO-85243 MAGETWO-85240 MAGETWO-85237 MAGETWO-85203 MAGETWO-85191 MAGETWO-85147 MAGETWO-85131 MAGETWO-85010 MAGETWO-84906 MAGETWO-84905 MAGETWO-84904 MAGETWO-85057 MAGETWO-83673 MAGETWO-85737 MAGETWO-84976 MAGETWO-85563 MAGETWO-85001 MAGETWO-83040 MAGETWO-83260 MAGETWO-88191 MAGETWO-82951--> 


<!--- WON'T FIX MAGETWO-85927 MAGETWO-85616 MAGETWO-51484 MAGETWO-85605 MAGETWO-85244 MAGETWO-84928 MAGETWO-85132 MAGETWO-83890 MAGETWO-83821 MAGETWO-83807 MAGETWO-82779 MAGETWO-82509 MAGETWO-83188 MAGETWO-82566 -->

<!--- INVALID/NOT A BUG MAGETWO-83422 MAGETWO-83299 --> 


