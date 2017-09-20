---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.2.0 Release Notes
menu_title: Magento EE 2.2.0 Release Notes
menu_order: 299
level3_menu_node: level3child
level3_subgroup: ee22-relnotes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.0EE.md
---

We are pleased to present Magento Enterprise Edition 2.2.0 General Availability. This release includes numerous functional fixes and enhancements.


## Highlights
Magento Enterprise Edition 2.2.0 includes several new and exciting features:

Look for the following highlights in this release:


* **Significant enhancements in platform security and developer experience**. Security improvements include the removal of specific un-serialize calls and changes to hashing algorithm to improve security for sensitive values. Developers will appreciate  improvements in debugging, customizations, and logging.



* **Upgraded technology stack.**  We've dropped support for PHP 5.6 and Varnish 3.  We now support PHP 7.1, along with Redis 3.2, MySQL 5.7, and Varnish 5 support. All third-party libraries have been upgraded to the latest stable version.


* **Pipeline deployment**, a new deployment process, enables separate build and deployment stages that can run separately. Resource-intensive processes can run on the build server. Pipeline deployment supports easy management of configuration between environments, too. Read more about pipleine deployment [here]({{page.baseurl}}config-guide/deployment/pipeline/).


* **Substantial performance gains from improvements in indexing, cart, and cache operations**. Customers can browse and shop on a storefront while indexers are running. (Long-running indexers operate in batches to better manage memory and run times.) Cart improvements enable a
buyer to create a cart with more than 300 line items, and merchants can process a cart with at least 300 line items.

* ** Bundled extensions**. 


## Security enhancements
Magento 2.2.0 includes over 100 security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

In general, we’ve removed serialize/unserialize from most the code to improve protection against remote code execution attacks. We’ve enhanced protection of code where use of object serialization or unserialization was unavoidable.  Additionally, we’ve increased our use of output escaping to protect against cross-site scripting (XSS) attacks. 

[Contact us](https://magento.com/company/contact-us){:target="_blank"} for more information.

## Known issues

Magento 2.2.0 GA includes the following known issues:

### General Issues

The following issues affect all editions of Magento 2.2.0:

**Issue**:  If you delete a store view, any product grid filtered to that Store View does not load. 
This issue affects Magento installations that include multiple store views. 
If you have set your product filter to a store view you’ve deleted, when you open **Catalog > Products**, Magento displays the following behavior: 

* spinner widget spins indefinitely

* error message: `A technical problem with the If the problem server created an error. Try again to continue what you were doing. persists, try again later."

**Issue**: Errors result when a deleted customer tries to log in or register for new account. When you delete a customer from the  Admin panel, a fatal error occurs if someone tries to log in or register using that deleted customer account.

**Issue**: A mistake entering credit card information during an  order for a new customer can cause subsequent errors even after the user has corrected the  credit card information.  (need JIRA issue to rewrite)

**Issue**: Failure to specify a `– base_url` during installation when using custom server ports results in corrupted static content. 
**Workaround**: You can use the CLI command `config:set web/secure/base_url <base_url>` to set the `base_url` parameter.

**Issue**: Magento does not correctly calculate the Catalog Price rule for bundle products with custom options. 

**Issue**: Visual Merchandiser performance is degraded when Category contains an many products.

### Magento Commerce-only issues

The following issue affects the Commerce edition of Magento 2.2.0:

**Issue**: Store website doesn't work when Redis cache is installed and the PhpRedis extension is enabled.
**Workaround**: Contact Support for a patch (when will this patch be available?)


### Magento Commerce and Cloud-only issues

**Issue**: Magento does not apply the Catalog Price Rule as expected when Persistent Shopping Cart is enabled in installations running Fastly cache. 

**Issue**: Magento displays an error (`“Error 503 Service Unavailable”`) when you try to save a newly-added Catalog Price rule. 




### Commerce (Cloud)-only issues

**Issue**: You cannot export Advanced Pricing information to a CSV file on a server running xxx.  Instead, the export will fail due to a time out. 




### B2B-only issues

**Issue**: Resubmitting an order that contains an out-of-stock product causes an error.  Instead of displaying a message that indicates that a product is out-of-stock, Magento displays this exception: `Warning: Division by zero in \/usr\/share\/nginx\/html\/vendor\/magento\/module-tax\/Model\/Calculation\/AbstractAggregateCalculator.php`

**Issue**: You cannot save a custom shared catalog when the  indexer state table contains duplicates.

**Workaround**: You can remove the duplicate record from the database. 




## Fixed issues

### Installation, upgrade, deployment
<!--- 55357/53777-->* You can now run `magento setup:upgrade --keep-generated` in production mode. Previously, Magento would throw an error when you ran `setup:upgrade` after compiling DI. (This significantly curtailed your ability to deploy continuous integration.) [GitHub-4795](https://github.com/magento/magento2/issues/4795) 

<!--- 56974-->* You can now upgrade 2.0.9 with sample data to 2.1.1. 

<!---56397, 58064-->* You can now upgrade your Magento installation when using multiple master databases for checkout, order management, and product data.


<!---58742-->* We've resolved multiple issues with the upgrade process from 2.0.7 to 2.1.x (for example, editing a category post-upgrade no longer results in a 500 error). 



<!---56977-->* We fixed an issue that blocked using the web installer to successfully set up Magento. Previously, if you tried to install Magento with the web installer, Magento would indicate that the readiness check failed, and installation would not complete. 


<!---60559-->* Magento now successfully updates the queue table during upgrade. Previously, Magento omitted the  `catalog_product_removed_queue` row of the queue table during upgrade from Magento 2.0.x to 2.1.x. 

<!---57343-->*  You can now deploy build processes on a different staging machine than the one you're running your production environment on. 

<!---58312-->* Magento no longer incorrectly shows products as "out of stock" after you update your installation from 2.0.7 to 2.1.0. [GitHub-5222](https://github.com/magento/magento2/issues/5222)

<!---57943-->* Magento 2.0.x and 2.1.x now supports the use of table prefixing during installation. Previously, when you used table prefixing, your Magento installation failed with this error:   "Duplicate key on write or update". [GitHub-5688](https://github.com/magento/magento2/issues/5688)



<!---60832-->* You can now successfully upgrade your Magento installation from CE 2.1.1 to EE 2.1.3. Previously, Magento displayed this error, "Default website not defined" when upgrading because Magento read the list of websites from the database. It now reads from the config file. 


<!--- 62400-->* Third-party command line tools no longer fail when you run `setup:di:compile`.

<!--- 62648-->* Magento now correctly applies {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} configuration parameters to the corresponding {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %}. [GitHub-7943](https://github.com/magento/magento2/issues/7943)


<!--- 71890-->* Magento no longer throws an exception when the configuration checksum is absent on a new installation.

<!--- 64085-->* Fixed HTML inline style used when sending emails when implementing the upgraded `emorgifier` library. [GitHub-8241](https://github.com/magento/magento2/issues/8241)

<!--- 60835-->* We’ve changed how Magento displays status updates during a product upgrade. Previously, potentially vulnerable information such as full paths and module names were displayed in the product GUI, potentially exposing this information to a malicious user. Magento now restricts this potentially vulnerable information to logs that are available to administrators only.

<!--- 70314-->* The `cron:install` command now works as expected in Magento 2.2.0 RC1.x. Previously, the configuration for `crontab` commands contained double quotes that were not escaped, which caused invalid commands to be written to the `crontab` file. [GitHub-10040](https://github.com/magento/magento2/issues/10040)

<!--- 63637-->* Magento now moves the `sequence_*` table to the correct database after implementing a split database.


### AMQP framework

<!---58654-->* The `magento queue:consumers:start` command now works correctly when you provide the `max-messages` argument.

### Cart and checkout

<!--- 53793 -->* Magento now implements the minicart maximum display recently added item setting to your {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %}.  Previously, Magento displayed all the items in the shopping cart, even when the number of items exceeded this limit. [GitHub-4750](https://github.com/magento/magento2/issues/4750)

<!---58036-->* You can now reload a page during {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} without unintentionally changing shipping information. 

<!---58902-->* Custom address attributes now appear in the Checkout summary.  

<!---57497-->* Lengthy {% glossarytooltip ab517fb3-c9ff-4da8-b7f9-00337c57b3a5 %}Order Status{% endglossarytooltip %} tables are now paginated as expected. 

<!---56956-->* Magento now displays the product add validation message ("Product was added to the cart") only after you have successfully added a product to your cart.

<!---58057-->* We've resolved an issue that prevented you from adding more than one product to a {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} from a wishlist. [GitHub-5282](https://github.com/magento/magento2/issues/5282)



<!---59209-->* The number of items in the minicart is now updated correctly when you run Magento in mixed HTTP/HTTPS mode. [GitHub-6487](https://github.com/magento/magento2/issues/6487)


<!---57062-->* The minicart now performs as expected in deployments that span multiple websites. Previously, in a Magento installation that had multiple websites, products that you added to one {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} appeared in the other websites' minicarts.

<!---57843-->* A cart rule with a coupon code no longer overrides a cart rule without a coupon code when multiple {% glossarytooltip b3292cb5-4262-4914-a258-efac79ac8b99 %}cart rules{% endglossarytooltip %} are applied. Previously, when you created two cart rules and applied them to a cart,  the rule with a coupon was applied, but the second rule was not. [GitHub-6294](https://github.com/magento/magento2/issues/6294)

<!---59024-->* Refreshing your browser page while on the Review and Payments page of the checkout process no longer clears information from form fields. Previously, Magento cleared information from the **Ship to** field if you refreshed your browser page during this process. 

<!---60103-->* Magento no longer lets you add a product variation to your shopping cart if the item is out of stock. Previously, Magento permitted you to select an out-of-stock item and when you added it to your cart, displayed the "Product is out of stock" message.

<!---58090-->* We've corrected a problem with Magento throwing an HTTP ERROR 500 intermittently during checkout. 


<!---57168-->* We fixed a {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} error that occurred on the Checkout page after you changed the country in the **Estimate Shipping and Tax** field.

<!---60293 -->* Magento now successfully estimates shipping costs. Previously, when you tried to estimate shipping costs, the load indicator would spin indefinitely, and Magento displayed this exception,```Object doesn't support this action```. [GitHub-5358](https://github.com/magento/magento2/issues/5358), [GitHub-7051](https://github.com/magento/magento2/issues/7051)


<!---56962 -->* Magento now displays the **State/Province** field on the Add New Address page. [GitHub-5279](https://github.com/magento/magento2/issues/5279) 

<!--- -->*




### Catalog

<!--- 65324 -->*  Magento no longer locks the `category_product_entity` table. Unlocking this table reduces the potential of lock-related timeouts that can occur when indexing and checkout operations run in parallel. Previously, Magento locked the `category_product_entity` table. 


<!--- 65251 -->* The {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} now displays images that Magento resizes during product save operations, rather than resizing the product on the storefront. Previously, the image path contained `store_id`,  and during save operations, Magento resized images for images the default store only. 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Users have encountered problems displaying images after upgrading their software to Magento 2.1.6. These problems range from incomplete loading to the total inability to load images.  Consequently, if you saved a product and didn't open it on the storefront before upgrading to 2.1.6, you'll need to apply a workaround. 

**Workaround**: To correct problems with image loading, choose one of these two workarounds:

* Run `php bin/magento catalog:images:resize`

or 

* Save (or resave) the product with the associated image in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel.
</div>


<!--- 66366 -->* The `\Magento\CatalogInventory\Model\Stock\Status\getStockId()` method now returns the correct values.


<!--- 58437-->* The {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} gallery now displays all the images associated with a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %}. Previously, when you clicked on the swatches associated with a configurable product, the gallery displayed only one of several possible images. [GitHub-6195](https://github.com/magento/magento2/issues/6195), [GitHub-4101](https://github.com/magento/magento2/issues/4101)


<!---57832 -->* Magento now displays the **This is a required field** message immediately adjacent to the product options as needed during {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}. Previously, Magento displayed this message at the bottom of the checkout form. 


<!--- 56582-->* You can now save a product with images multiple times. 

<!--- 57420/54320-->* The category page now shows the current price after Magento runs a scheduled update.  Previously, the category page would not update the  price after running a scheduled update.	[GitHub-4945](https://github.com/magento/magento2/issues/4945)


<!---56742-->* You can now sort and filter on the New Review page. [GitHub-5391](https://github.com/magento/magento2/issues/5391)

<!---58511-->* Magento now displays server-side Ajax error messages. 

<!---56964-->* Magento now validates the uniqueness of product attribute values as you create or edit them. Previously, you could add identically named values to an attribute. [GitHub-4881](https://github.com/magento/magento2/issues/4881)

<!--- 62229-->* Magento now displays the price of out-of-stock products on the product page.  

<!--- 58895-->* If you remove an item from the Compare Items list that is displayed on any {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} page, Magento no longer redirects you to the Compare Products page.

<!--- 72112-->* Subcategories no longer show up in the menu when the parent category is disabled or hidden from the menu. [GitHub-10664](https://github.com/magento/magento2/issues/10664) 

<!--- 57719-->* We've corrected a problem with Magento throwing an HTTP ERROR 500 intermittently during checkout.

<!--- 63561-->* The product attribute `category_ids` can have only **Global** scope. Previously, you could change the scope value of `category_ids` to **Store**.

<!--- 53135-->* A price change to a custom option affects only that option. Previously, changing the price of a custom option also affected the price of related products. [GitHub-4588](https://github.com/magento/magento2/issues/4588), [GitHub-5798](https://github.com/magento/magento2/issues/5798), [GitHub-6041](https://github.com/magento/magento2/issues/6041),  [GitHub-6097](https://github.com/magento/magento2/issues/6097)

<!--- 56866-->* The prices you assign to custom options no longer change unexpectedly after you save them. [GitHub-6116](https://github.com/magento/magento2/issues/6116)


### Configurable products
We've enhanced the performance of configurable products in several ways:

<!---57055-->*  You can now successfully disable the lowest price of a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %} and its associated simple products. Previously, Magento displayed a configurable product's lowest price even after you disabled that price.



<!---56998 -->* Magento no longer applies one simple product's special price to another {% glossarytooltip f85f36ad-2942-446e-b711-39f2a16f6364 %}simple product{% endglossarytooltip %} of the same configurable product. Previously, when you set a regular and special price for a child product, all products associated with the same configurable product displayed a regular and special price, even when these amounts were the same. [GitHub-4442](https://github.com/magento/magento2/issues/4442), [GitHub-5097](https://github.com/magento/magento2/issues/5097), [GitHub-6645](https://github.com/magento/magento2/issues/6645) 


<!---54808 -->* You can now edit a product attribute for multiple configurable products. Previously, when you tried to bulk-edit an attribute on a collection of filtered, configurable products, Magento would complete the process without incorporating your edits, and then incorrectly tell you that the products had been edited.


<!---60605-->* Magento no longer throws an {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} when you add a configurable product by {% glossarytooltip fd4bed67-7130-4415-8a6f-ad8d8ef8f25e %}SKU{% endglossarytooltip %} if an associated simple product is out-of-stock. 


<!---61055-->* Magento now correctly displays a product as out-of-stock if its child products are disabled. Previously, the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} page failed to list the product at all, rather than listing it as out-of-stock. 


<!---57044-->* A price change to a custom option affects only that option. Previously, changing the price of a custom option also affected the price of related products. [GitHub-4588](https://github.com/magento/magento2/issues/4588),  [GitHub-5798](https://github.com/magento/magento2/issues/5798), [GitHub-6041](https://github.com/magento/magento2/issues/6041), [GitHub-6097](https://github.com/magento/magento2/issues/6097)


<!--- 65339 -->* The check that Magento runs to confirm a configurable product's readiness for sale is now faster.  (The `isSalable` method checks that a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %} can be sold (that is, is in a saleable state)). 


<!--- 65247 -->* Query optimizations have improved the speed of configurable product price calculation.


<!--- 65246 -->*  Magento no longer calculates configurable product special prices on the category page. Previously, Magento calculated special prices on the category page, but did not display them.  

<!--- 56951-->* Magento now displays configurable products as expected after creation. 


<!--- 70346-->* Magento no longer displays a configurable product on the storefront when its child products are deleted and the **show out-of-stock** setting is set to **No**.

<!--- 71656-->* Configurable products no longer show up on category page when all children are set to "enable product" = "No" and "display out-of-stock products" = "Off".

<!--- 70346-->* Magento no longer displays a configurable product on the storefront when its child products are deleted and the **show out-of-stock** setting is set to **No**.

<!---59879-->* Magento no longer displays the "as low as" label for a disabled price on the Category page.

<!---60098-->* The price you set on the website scope no longer overrides any local settings you set on configurable products at the store view level.



### Email


<!---57496-->* Magento now successfully loads the New Order Email templates. [GitHub-5101](https://github.com/magento/magento2/issues/5101)


<!---57204 -->* The **Send Welcome Email From** field now identifies the store that the customer is associated with. 

<!---59146 -->* Magento no longer sends email when the **Disable email communication** setting is set to **yes**. Previously, Magento sent email even when this setting was enabled. [GitHub-5988](https://github.com/magento/magento2/issues/5988)


### General fixes

<!--- 56892-->*  You can now save products using the multiple select attribute value. Previously, you could not save values if using this attribute. 

<!--- 56126 -->* You can now log in successfully after creating a custom attribute. Previously, Magento would display an error message, and you could not log in, after first creating a custom attribute, then logging out. 

<!--- 55462/52448-->* Magento now correctly displays customer address during account creation. Previously, when you selected a default billing address during creation of a new customer account, Magento would not display the address. 

<!--- 60890 -->* Admin users with restricted permissions can now log in successfully as determined by those permissions. Previously, Magento displayed a fatal error when you logged in under these conditions.

<!---55662-->* We've removed the duplicated {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} settings from the sample web server configuration files. 

<!---57383-->* You can now make Return Merchandise {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}Authorization{% endglossarytooltip %} (RMA) comments visible from the storefront by setting **Stores > Configuration > Sales > RMA Settings > Enable RMA on Storefront**.

<!---57187-->*  When creating a new page with the Add New Page feature, Magento no longer throws a JavaScript error when {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}Layout{% endglossarytooltip %} is set to empty. 

<!---57351-->* We've removed the sample password from the Setup Wizard.

<!---56973-->* You can now assign open-ended start and complete dates for product rules. Previously, if you left the start and end date field blanks when creating a rule, Magento would supply the start and end dates based on the save date. 


<!---58500-->* The Magento Framework now makes its dependency upon the `zendframework/zend-stdlib` library explicit in `composer.json`.  
[GitHub-6442](https://github.com/magento/magento2/issues/6442)


<!---57035-->* You can now upload changes to the `robots.txt` file from the Admin panel. 


<!---57197-->* We've eliminated difficulties saving product information when logged in as Admin. Previously, the Product Save feature worked erratically for Admin users. 

<!---59397-->* Custom themes now inherit parent {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} configuration information as expected.  

<!--- 60248-->* Information set by the **Default Billing Address** and **Default Shipping Address** checkboxes on the Customer page are now saved correctly.

<!---59416 -->* {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} users with appropriate permissions can now reset the passwords of more than one customer at a time. [GitHub-5260](https://github.com/magento/magento2/issues/5260)

<!---59142 -->* Admin interface forms now load data as expected after initializing all components. Previously, under certain conditions, the load indicator would spin indefinitely, and Magento would not load data. 

<!---59810 -->* 59810 Showing reports on the **Reports > Coupons** page no longer throws an error when the user is in a non-default Admin locale.  [GitHub-7037](https://github.com/magento/magento2/issues/7037) 

<!---56941 -->* The list of allowed countries is now configured as part of website scope, not store view scope. [GitHub-2946](https://github.com/magento/magento2/issues/2946)

<!---70318 -->* You can now generate static content without a database connection. [GitHub-10041](https://github.com/magento/magento2/issues/10041) 

<!---61596 -->* Magento no longer removes the simple products associated with a configurable product if you click on the **Save** button more than once while saving the configurable product. Previously, if you clicked on **Save** more than once during an attempt to save a configurable product, Magento removed the simple products that were assigned to it.

<!---58182 -->* The number of items in the minicart is now updated correctly when you run Magento in mixed HTTP/HTTPS mode. [GitHub-6487](https://github.com/magento/magento2/issues/6487)

<!--- 60185 -->* Static content deployment now generates secure content, whether content included secure or non-secure URLs.

<!--- 57210 -->* The {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} gallery now displays all the images associated with a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %}. Previously, when you clicked on the swatches associated with a configurable product, the gallery displayed only one of several possible images. [GitHub-6195](https://github.com/magento/magento2/issues/6195), [GitHub-4101](https://github.com/magento/magento2/issues/4101)



#### Gift cards

<!---57054 -->* Order emails now specify the amount of the {% glossarytooltip f5cdf732-d644-4bd5-9f75-53b01401b7e7 %}gift card{% endglossarytooltip %} that you have purchased. 

<!---56932 -->* The Checkout page no longer freezes when you order a virtual gift card using the Authorize.net Payment Action value set to **Authorize and Capture**.

<!---57512-->*  You can now complete the purchase of a gift card in environments where you have set the Braintree {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} Payment Action to **Authorize and Capture**. Previously, any order made under these conditions would remain indefinitely in the processing stage. 



<!---57353-->* You can now add a gift card with an undefined amount to the Items Ordered table. Previously,  Magento did not permit you to add a gift card of an open value to this table.


#### Gift wrapping

<!--- 70603-->* You can now add gift options to an order if logged in using a secure URL. 

<!--- 62721-->*  The **Allow Gift Wrapping for Order Items** setting now works as expected. Previously, when **Stores > Configuration > Sales > Gift Options** was set to **No**, users  saw the Gift Option link under each product in their {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %}.  



### Images

<!---55447-->* Magento no longer encounters an error when it cannot find a product image file. [GitHub-5184](https://github.com/magento/magento2/issues/5184), [GitHub-5497](https://github.com/magento/magento2/issues/5497), [GitHub-3545](https://github.com/magento/magento2/issues/3545), [GitHub-5871](https://github.com/magento/magento2/issues/5871)

<!---56944-->*  Magento now successfully saves images that you edit in a {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %} editor. Previously, when you tried to change an image by right-clicking it in a WYSIWYG editor and choosing Insert/Edit Image, Magento did not save your changes. 

<!---58335-->* You can now preview uploaded images.
 

<!---56972-->* You can now set an image size for product watermarks. [GitHub-5270](https://github.com/magento/magento2/issues/5270)


<!---55608-->*  Graphics now scroll as expected on mobile devices. [GitHub-5302](https://github.com/magento/magento2/issues/5302)







#### Import/Export

<!---58977-->* You can now successfully import multiselect attributes that contain special symbols or delimiters. Previously, when you tried to import attributes containing delimiters, data validation (and the import) failed.  


<!---56804-->* We've fixed an issue with the correct representation of date and time zones of items in a product {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} during import or export. Previously, Magento exported all dates in the default format (UTC-8), including values that you set to be displayed using another standard. 


<!---57052-->* You can now import negative quantities. Previously, when importing a product quantity  of '-1',  Magento returned an error. 

<!---56018-->* Magento now imports custom options correctly. Previously, when you tried to import a custom option, the import failed, and Magento displayed this error: `Javascript Error: Uncaught RangeError: Maximum call stack size exceeded`. [GitHub-5573](https://github.com/magento/magento2/issues/5573)


<!---57438-->* We’ve added a new way to import images: You can now successfully import images when you set your document root to <your Magento install dir>/pub. Previously, you needed to set document root to `/magento` to import images. Both ways of importing now work. [GitHub-5359](https://github.com/magento/magento2/issues/5359) 


<!---57490-->* Magento now removes category URL keys from the `url_rewrite` table as expected during import. Previously, Magento did not remove these keys, which triggered a failure during import. This subsequently caused Magento to quickly reach the maximum error count, returning this error: "Maximum error count has been reached or system error is occurred!". [GitHub-1471](https://github.com/magento/magento2/issues/1471) 


<!---57981-->* You can now export a {% glossarytooltip fbcfce51-68e2-482f-84d5-f28d84404cff %}bundle product{% endglossarytooltip %} that contains a custom text area attribute.  Previously, if you tried to export this type of bundle product, the export would fail, and Magento displayed the message, "There is no data for the export".


<!--- 64856 -->* Magento now displays imported product images in this order: first, the base image, then the additional images in the order in which they were listed in the {% glossarytooltip 6341499b-ead9-4836-9794-53d95eb48ea5 %}CSV{% endglossarytooltip %} file. Previously, Magento displayed images in this unexpected order: first, an additional image, then the base image, and finally, all remaining additional images.

<!--- 58299 -->* Magento now maintains super attribute ordering of configurable products with multiple super attributes after export or import. Previously, after import or export, the ordering of super attributes was not maintained. [GitHub-6079](https://github.com/magento/magento2/issues/6079)


#### Integration

<!---56961-->* With valid permissions, you can now regain access to your Admin account after it is temporarily disabled due to invalid credentials. Previously, you could not unlock the account of a valid Admin user if it were disabled due to multiple invalid login attempts.


### Indexing

<!---56928-->* We've improved the performance of the algorithm that Magento uses to calculate batch sizes while indexing categories.  


<!---57470 -->* Magento no longer displays an indexing error when Elasticsearch is enabled. Previously, Magento displayed this indexing error when Elasticsearch was enabled:  `mapper_parsing_exception`. 

<!---58703-->* The category/product indexer now successfully completes a full reindexing of all indexes on large profiles with 500,000 or more products. Previously, Magento successfully generated a large profile, but failed to complete the reindexing of the categories or products, and displayed the following error:  "Error 1114: Table is full".


<!--- 58893-->* `IndexerHandlerFactory` no longer tries to cast the `$indexer` object to a String if an error occurs. Since `$indexer` is an object of type `IndexerInterface` and does not have a `__toString()` method, attempting to cast the `$indexer` object to a String previously resulted in an error. [GitHub-5155](https://github.com/magento/magento2/issues/5155)

<!--- 59853-->* The Magento flat indexer now collects correct product data for `ROW_ID`.


<!--- 58559-->* The Magento flat indexer no longer throws an error after flat tables are enabled and reindexed. This fix applies to both product and {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} tables. 


<!--- 65362 -->* Magento now runs a selective partial re-indexing operation after import if you enable **Update on Schedule**. Previously, Magento ran a full reindex no matter which index mode was set. 


### Orders

<!--- 61268, 59424, 56433, 59422--> * We’ve added PHP interfaces that add the ability to change the status of a {% glossarytooltip c8f00e9d-7f70-4561-9773-60da604ba5c9 %}shipment{% endglossarytooltip %}. The new Creditmemo interface supports tasks you can already do through the Magento Admin, including the ability to:

	* support returning multiple units of a configurable product. Previously, when you tried to refund an order, you could refund only one unit of a configurable product, not the amount in the original order. 

	* return the product to stock 

	* change order status after a credit memo has been created.


<!--- 57077-->* You can now set the customer group when creating a new order from the Admin interface. [GitHub-6162](https://github.com/magento/magento2/issues/6162)


<!---57387 -->* You can now print invoices and credit memos from the Order page. 


<!--- 55598/54787 -->* You can now successfully place orders when the Enable and Configure {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}Website{% endglossarytooltip %} Payments Standard Payment Action attribute is set to Sale. Previously, under these conditions, Magento would display an error message and not allow you to complete the purchase. [GitHub-4785](https://github.com/magento/magento2/issues/4785) 


<!--- 50026 -->* Attributes of the `salesInvoiceRepository` methods are now more appropriately type cast. (The datatype is now a nullable float.)  Previously, due to the use of an incorrect datatype, Magento would produce an error when calling the `salesInvoiceRepositoryV1GetList` method. [GitHub-3605](https://github.com/magento/magento2/issues/3605)


<!--- 58832-->* The order comments history no longer duplicates the time that a comment was made. Previously, the time that a comment was made was listed twice.

<!--- 62783-->* Magento now uses the address template from store view level of the placed order (similar to how order confirmation email works). Previously, Magento used the wrong address template for order e-mails.




### Payment methods

<!--- 72305-->* We’ve added support for the change to the USPS API that USPS implemented on September 1, 2017. After installing or upgrading to this release, Magento will display the Domestic rate for USPS, First-Class Mail Parcel as expected. Previously, the USPS First-Class Mail Parcel option was not available after September 1, 2017 on installations running Magento 2.x unless you applied the workaround described [here](http://devdocs.magento.com/guides/v2.1/release-notes/tech_bull_USPS-patch-Sept2017.html). 

<!--- 56695-->* You can now successfully complete Paypal checkout with products that have custom options. [GitHub-5938](https://github.com/magento/magento2/issues/5938)


<!--- 58376-->* PayPal Payflow Pro now uses the currency you've specified in your store settings. Previously, Magento converted the total price into U.S. dollars, no matter which currency was specified in the store settings. 

<!--- 55612-->* Magento no longer displays the **No {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}Payment method{% endglossarytooltip %} available** message when a customer tries to ship items to a billing-restricted country. 

<!--- 62669-->* Third-party payment gateways are now visible from the Admin. [GitHub-7891](https://github.com/magento/magento2/issues/7891)

<!--- 62428-->* Magento now updates you as expected on order comments and order history after you initiate a refund using Braintree. Previously, when you clicked the **Refund** button (to initiate a refund), Magento did not {% glossarytooltip 510de766-1ebd-4546-bf38-c618c9c945d2 %}redirect{% endglossarytooltip %} you to order comments and history information.

<!--- 59036-->* We've fixed an issue with using PayPal Express Checkout to order products with custom options. Previously, although an Admin user could create and configure “File type” custom options, customers could not upload and store files within the order {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}quote{% endglossarytooltip %}. [GitHub-5434](https://github.com/magento/magento2/issues/5434)


#### Braintree

<!--- 56940-->* Kount and 3D Secure now work as expected for Braintree Vault. 

<!--- 54721-->* You can now use Braintree as a payment method when applying reward points or store credit to an order. 

<!---56910-->* The Braintree payment method now works as expected with Vault table prefixing.  

<!---57426-->* Magento no longer encounters an error when using the Braintree Vault payment GET order API call. [GitHub-6215](https://github.com/magento/magento2/issues/6215)



<!---59578 -->* We've enhanced our PayPal and Braintree implementations so that merchants can now:

	* Save customer PayPal account information in the Braintree Vault when using Braintree as a service. This enhancement provides a secure method for charging my customers without prompting them to enter a payment information for multiple purchases or for purchases from multiple devices. We've also added support for Maestro and Discover bins added to the credit card form both for Braintree and PayPal solutions. 




	* Configure dynamic descriptors (Company Name, Phone and URL) for Braintree.  This enhancement supports customers easily identifying a source of transactions in their bank statements. (This will potential simplify the resolution of disputed transactions by supporting the display of the Kount status for Braintree in the Admin interface.) 


<!---59353-->* You can now use JCB and Diners Club credit cards with the Authorize.net payment method.

<!--- 59124-->* Fixed issue with credit card capture information failing to remain associated with its first authorization. [GitHub-6716](https://github.com/magento/magento2/issues/6716)


<!---57086-->* You can now successfully place orders with Braintree when using an alternative {% glossarytooltip 5ac2d367-070a-474c-badf-df2b84fe3b09 %}merchant account{% endglossarytooltip %} ID. (The merchant account does not need to match the 3D Secure authorization merchant account.) [GitHub-5910](https://github.com/magento/magento2/issues/5910)


<!---59637-->*  Braintree no longer encounters an error during checkout when you apply a 100% discount coupon to a product and enable free shipping. Previously, Magento  displayed a spinning loader widget, and your screen froze. The Developer console displayed this error:
`Uncaught Error: [paypal-container] is not a valid DOM Element`. 



#### PayPal

<!--- 59581-->* We've improved and streamlined the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} PayPal configuration interface. 

<!--- 70500-->* Fixed issue related to incorrect stock quantity calculation for bundle and configurable products during place order flow with PayPal Express Checkout.

<!--- 62667-->* Third-party payment gateways are now visible from the Admin. [GitHub-7891](https://github.com/magento/magento2/issues/7891)

<!--- 59086-->* Fixed issue with credit card capture information failing to remain associated with its first authorization. [GitHub-6716](https://github.com/magento/magento2/issues/6716)

<!--- 58676-->* PayPal Express payments no longer fail when there is adequate product inventory to cover your order. Previously, you'd receive this error message: `We can't place the order`. [GitHub-6296](https://github.com/magento/magento2/issues/6296)

### Performance

<!---56927-->* Opening many products from the Admin interface


<!---59708-->* Creating many (2500 - 5000) product variants, both simple and complex {% glossarytooltip 6e836354-0067-48ac-84ce-a4ab7c0c492e %}product types{% endglossarytooltip %}


<!---59806-->* Loading many configurable products with multiple images (for example, configurable products with three attributes and 250 options) [GitHub-6979](https://github.com/magento/magento2/issues/6979)



<!---60041-->* Resizing images on the {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %}

<!---57905-->We've optimized compiler performance (that is, the [`setup:di:compile`]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-compiler.html) command). 


<!--- 57410-->* You can now quickly generate or preview multiple variations of a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %}. (Saving these variations to the database can be time-consuming, if you have several thousand product options, and our efforts to improve performance continue.) Previously, Magento threw an Invalid Form key error is thrown while you tried to save a configurable product with variations. 


<!--- 52660 -->* We've improved the speed of static asset deployment. 

<!--- 52614 -->* The `setup:static-content:deploy` command now provides flags that you can use to exclude or include individual themes, areas, and locales. For more information, see [GitHub-4294](https://github.com/magento/magento2/issues/4294).



<!--- 55300, 55620, 54682-->* We've improved {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} performance when creating 2500 or more product variants. 

<!--- 66400 -->*  Magento now shows a significant decrease in Redis traffic after upgrading 2.1.2 to 2.1.4. 


<!--- 65484 -->* Magento now caches attribute options for the layered navigation feature. This reduces the number of queries to the database, and consequently improves performance.


<!--- 65483 -->* Magento no longer performs unnecessary file check operations (for example, `file_exists`, `is_file`), which improves the performance of the category and product pages. 


<!--- 65480 -->* Magento now caches image metadata, which avoids the time-consuming need to read images for {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} loading.



### PHP

This release introduces the `Magento\Vault\Block\TokenRendererInterface::getToken` method. This method provides details about payment tokens to renderer components, such as public hash and available card or account details. Third-party developers can use this method to implement this functionality in their payment integrations. 






### Pricing
<!--- 54320 -->* The {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} page now displays current, rather than outdated,  product prices.


<!--- 55055 -->* Tier pricing now works correctly with full page {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}. [GitHub-5364](https://github.com/magento/magento2/issues/5364) 


<!--- 45339 -->* Cart Price rules are now applied as expected to {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} conditions. Previously, discounts set in Cart Price rules were not applied during {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}.


### SalesRule

<!--- 55184 -->* You can now select and add a category to a Cart Price rule. Previously, Magento displayed this error: "Uncaught ReferenceError: sales_rule_form is not defined", and did not add the selected category to the condition.  [GitHub-5526](https://github.com/magento/magento2/issues/5526) 

<!--- 55433 -->* A cart rule with a coupon code no longer overrides a cart rule without a coupon code when multiple {% glossarytooltip b3292cb5-4262-4914-a258-efac79ac8b99 %}cart rules{% endglossarytooltip %} are applied. Previously, when you created two cart rules and applied them to a cart, the rule with a coupon was applied, but the second rule was not. [GitHub-6294](https://github.com/magento/magento2/issues/6294) 


### Scope

<!---54704-->* Changing a product price under the website scope now updates the product price across all stores. Previously, any price you set on the {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} level overrode the price set in website scope. [GitHub-5133](https://github.com/magento/magento2/issues/5133) 


<!---56936 -->*  The list of allowed countries is now configured as part of website scope, not store view scope. [GitHub-2946](https://github.com/magento/magento2/issues/2946)  


<!---57001-->* A restricted user can now change storeview- or website- level attributes that are defined within his scope. 

<!---59284-->* You can now select the scope for an action that you are running from the Catalog page's product table. 

<!---59953-->* The price you set on the website scope no longer overrides any local settings you set on configurable products at the store view level.


### Search
<!---59088-->*  Out-of-stock items no longer erroneously appear in results of layered navigation if that product option is out-of-stock.

#### Shipping

<!---57037-->* UPS now generates shipping rates for Puerto Rico postal codes.



### Staging

<!---57346-->*  The {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} page now refreshes as expected after an update. 

<!---71215-->* Magento no longer creates extraneous database values when you schedule new Staging updates.


<!--- 65481 -->* Magento no longer performs unnecessary staging-related flag operations on the Category page. Previously, Magento performed staging-related flag operations even when the Staging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} was not used.  

<!--- 55524/48429-->* You can now delete updates from a campaign's page {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} grid. 


### Static file processing

<!---60603-->* We've corrected a problem with `_requirejs` asset retrieval via `static.php` in {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %} versioning. 

<!---56914-->* Versioning of {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} (including CSS, JS, font, and image files) is now enabled by default. 

<!---57904-->* We've improved the speed of static asset deployment. See <a href="http://devdocs.magento.com/guides/v2.1/config-guide/cli/config-cli-subcommands-static-view.html" target="_blank">Deploy static view files</a> for more information about available options. 

### Swatches


<!--- 65404 -->* Magento no longer creates redundant objects when initializing a configurable product on the Category page.


<!--- 65403 -->* You can now disable swatches for both the {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} page and search results (quick or advanced). To disable swatches from these requests, disable **Stores > Configuration > Catalog > Storefront > Show Swatches in Product List**.

<!--- 65402 -->* The logic that Magento uses to validate swatch attributes has been optimized. 

<!--- 65248 -->* Magento now caches swatch data in the block cache, which improves the responsiveness of the configurable product pages. 

### TargetRule

<!--- 59689 -->* Magento now displays Up-sells on the Product page.


### Tax

<!--- 61120 -->* Magento now correctly calculates tax and order totals when a discount is used for prices that include tax and catalog prices excluding tax. Please note this is not a valid tax configuration and can introduce rounding errors. 


### Testing

<!--- 62388-->* We've fixed a fatal issue that occurred if you executed the CatalogImportExport test before running a subsequent test. Previously, you'd receive this error: ```Failed asserting that false is true```.


<!--- 59680-->* We've fixed a fatal issue that occurred if you ran Travis builds on `imagettfbbox 2.1.2`. Previously, you'd receive this error: 

	```PHP Fatal error: Call to undefined function Magento\Framework\Image\Adapter\imagettfbbox() in /home/travis/build/magento/magento2/lib/internal/Magento/Framework/Image/Adapter/Gd2.php```


### Tier pricing

<!---70377--> Magento now correctly calculates the tier price percentage when displayed prices include tax. https://github.com/magento/magento2/issues/8833

<!---57625-->* Magento no longer resets the tier price during {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}quote{% endglossarytooltip %} recalculation. Previously, when you triggered an automatic quote recalculation (by changing the shipping address, for example), the tier price was lost. (This issue occurred only if the product record in the database had values for `row_id` and `entity_id` that didn't match.)


<!---56922-->*  Magento no longer adds a thousands separator ( , ) to representations of quantities that exceed 1000. [GitHub-5745](https://github.com/magento/magento2/issues/5745) 


### URL rewrites

<!---66480-->* You can now successfully create a product and assign it to a store without encountering the following error: `Unique constraint violation found`. [GitHub-6671](https://github.com/magento/magento2/issues/6671)


### Varnish

<!---58362-->* We've changed the behavior of the Varnish X-header. Only the parent (meta) SKU is now included in the list -- not the SKUs of all child products. [GitHub-6401](https://github.com/magento/magento2/issues/6401)


### Visual merchandiser

<!---58465-->* The order of products in a category display no longer changes when you add a new product to the category. 


### Web API

<!---61018-->* You can now use REST to add video to a product description. [GitHub-7153](https://github.com/magento/magento2/issues/7153)

<!--- 57066-->* The Swagger documentation erroneously indicated that search queries can return detailed information about multiple objects. The description of these APIs now state which API to use to return detailed information about a single object.

<!---59874-->* We've improved the process of using the WebAPI interface to save a product stock item. Previously, this type of save action worked inconsistently.


<!---57039-->* You can now update a product's media gallery through the REST API. 



### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html){:target="_blank"}.

### Installation and upgrade instructions

You can install Magento Enterprise Edition 2.2 General Availability (GA) using Composer.


{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
