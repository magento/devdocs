---
group: release-notes
title: Magento Commerce 2.3.1 Release Notes
---

*Release notes published .*

We are pleased to present Magento Commerce 2.3.1. This release includes numerous functional fixes and enhancements.  

## Highlights

Magento Commerce 2.3.1 includes a wealth of new features as well as over 200 functional fixes  to the core product. Community contributions include approximately 200 fixes and 300 pull requests. Look for the following highlights in this release:


### Merchant tool enhancements

<!--- MAGETWO-95299-->* **Ability to upload PDP images without compression and downsizing**. Merchants can now upload PDP images larger than 1920x1200  without compressing and downsizing the images first. Previously, when a merchant uploaded a high quality product image (larger than 1920X1200), Magento resized and compressed the image. Merchants can now set requirements for resizing and compression as well as compression quality and target width and height. 



#### PageBuilder

**PageBuilder** is a drag-and-drop visual content editing tool that lets merchants customize the appearance of their storefront without writing any HTML or CSS.  Registered participants will be able to install PageBuilder Beta on Magento 2.3.0 Commerce code.  

Powerful set of content types to compose various types of pages  
Easy drag&drop positioning of all content elements for intuitive page editing 
Adjustable column grid system for endless page layouts 
In-line text editing and drag-in images for prompt quick changes 
Blended content and commerce experience with ability to include products into any place of the content  
Scheduling content created in PageBuilder to any time in the future  
True WYSIWYG that shows the content styled and positioned the same way as on the storefront 

enable merchants to create compelling shopping experiences without writing a line of HTML & CSS 

Content editing limited to certain website areas. Limited PWA theme support. 


#### Inventory Management

* **Support for Elasticsearch and MSI inventory**. All site searches return correct products and quantities when Elasticsearch is used as the search engine (only default option from 2.3+)  Searches return results from Stock assigned to the website. Advanced features are supported, including filtering search results. Community-developed feature!  

* **Distance-based Source Selection Algorithm option**. Merchants can reduce fulfillment cost by shipping orders from closest inventory locations 

	•	A new Source Selection Algorithm (SSA) that can be enabled by merchants  
	•	Adds another shipping option beyond Priority-based algorithm that shipped in 2.3.0  
	•	Calculates shortest distance for deliveries using address geocoding via Google Maps API  
	•	Allows merchant to enter specific Google Maps API key in configuration  
	•	Fallback option uses open source database of Post/ZIPcode Lat/Long to calculate distances without requiring any external API calls  
	•	Fallback option can be downloaded for each active country where merchant has operations  
	•	Distance-based SSA makes recommendations for shipments, but merchant retains full control over each order  
	•	As distances are calculated at the time of shipping, there is no performance degradation during checkout  
	•	Community-developed feature  

Limitation: Google Geocoding API is free up to 2,500 calls/day – higher volume is priced on volume

* **Enhancements to mass inventory transfers**. Mass inventory transfers from admin panel are performant, even in bulk
	•	Optimized performance for mass inventory transfer from the product grid  
	•	Enables bulk transfer more quickly and prevents locking of admin screen  
	•	Compatible with asynchronous processing (message queue)  
	•	Configurable asynchronous batch size in admin settings  
	•	Default setting for asynchronous processing changed to Enabled (was Disabled by default in 2.3.0)  
	•	All features community-developed 

* **In-store pickup fulfillment option for MSI**. Reduce shipping cost and increase customer satisfaction with in-store pickup option 
	•	Allows merchants to enable in-store pickup for selected sources in MSI  
	•	Customers can select pickup option and preferred pickup location during checkout  
	•	Checkout time is reduced because shipping address is no longer required input  
	•	Merchant controls when “Ready for Pickup” notification is sent to customer  
	•	Store pickup orders have a higher reservation priority than shipped orders, to prevent insufficient inventory available in sources to fulfill shipped orders  
	•	Community-developed feature.  

Limitations: In low stock situations, merchants need to transfer inventory from alternate sources before notifying customer  

* **Improved order creation workflow in the Admin**. When placing an order in Admin, there were excessive processing steps made whenever a billing or a shipping field is updated. Which created delays and frustrations when customer representatives were working with customers to place an order.  SOlution: Order creation flow in Admin has been improved and there are no any delays when editing Billing and Shipping address fields any more. All the processing happens only once when Payment and Shipping information is being populated. 


* **Skip URL rewrites multiplication**. Currently when saving a category with lots of products assigned to it (about 1000), there is large amount of data generated and saved into URL rewrites tables which causes performance issues (it is not possible to save a category due to time-out).  Solution: There is a new store view level configuration option "Generate URL Rewrites for Products on Category Save" added to "Configuration->Catalog->Catalog->Search Engine Optimization" section for turning on/off the product URL Rewrites functionality when saving a category. By default the URL rewrites functionality is turned on (set to "Yes"), which means that URL Rewrites are generated as is now, when it is set to "No" the “category/product” URLs are not generated on category save, but when we try to use these URLs on storefront they still works as it is now.  

### Improved developer experience

<!--- MC-5465-->* **Automation of upgrade process dependency assessment**. A new composer plugin `magento/composer-root-update-plugin` automatically updates all dependencies in `composer.json` during a Magento 2.x upgrade. Previously, developers had to perform this step manually by running the `https://devdocs.magento.com/guides/v2.3/comp-mgr/cli/cli-upgrade.html#upgrade-cli-script` upgrade script. 



#### GraphQL

Major improvements in Coverage, Developer Experience, and Security   

•	Checkout  
	•	 Create empty Cart  
	•	 Fetch guest/registered shopper Cart  
	•	 Add simple product to Cart  
	•	 Add configurable product to Cart  
	•	 Add/Remove Coupons to/from Cart  
	•	 Set Shipping Address on Cart  
	•	 Products  
	•	 Swatch color code/image data  
	•	 Customer  
	•	 Create customer account 

### Substantial security enhancements

* Over 30 security fixes to core Magento code


See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.3.0) have been ported to 2.2.7, 2.1.16, 1.14.4.0, and 1.9.4.0, as appropriate.

### Performance

* Magento now supports customer accounts with more than 3,000 addresses. 

* The customer addresses edit page in the Admin was redesigned to include an addresses grid instead of a simple list.  <!--- MAGETWO-95249 -->*

* Order creation page in Admin was fixed (MC-5683) and now works without any performance issues and slowdowns for customer accounts with 3000 addresses.  

* Checkout page was fixed (MC-5681) and now it is possible to checkout successfully for accounts with 3000 addresses.  

* Magento now displays the list of additional customer addresses contained in the storefront customer address book  as a grid, which has improved performance for customers with many additional addresses associated with their accounts. <!--- MAGETWO-94347-->
   



### Core bundled extension enhancements



### Other improvements


	•	Magento now uses the latest version of the DHL schema for DHL shipping methods

	•	Update PayPal Express Checkout to checkout.js v4

	•	Accept.js library is now used for Authorize.NET payments. 

<!--- MAGETWO-95068-->* **Checkout information now persists after a cart update**. Information previously entered by a customer during check out (such as shipping address) now persists after the customer updates their shopping cart. Previously, when a customer updated their shopping cart, all information previously entered during check out (such as shipping address) was deleted. 


* Upgrade of Magento Functional Test Framework (MFTF) to 2.3.6. 




## Fixed issues

We've fixed hundreds of issues in the Magento 2.3.1 core code. 


### Installation, upgrade, deployment

<!--- MC-5465-->* A new composer plugin `magento/composer-root-update-plugin` automatically updates all dependencies in `composer.json` during a Magento 2.x upgrade. Previously, developers had to perform this step manually by running the `https://devdocs.magento.com/guides/v2.3/comp-mgr/cli/cli-upgrade.html#upgrade-cli-script` upgrade script. 


<!--- ENGCOM-3291-->* 

The undocumented `id_prefix` option for the cache frontend is used to prefix cache keys. If it is not set, Magento uses the first 12 bits of the md5 hash of the absolute path to Magentos app/etc directory. But if this is not exactly the same on all web servers, cache invalidation does not work.

To prevent this issue, the value shall be set on installation, so that the fall back on the fly does not happen anymore. Optionally, the value can be specified explicitly.



*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request [18641](https://github.com/magento/magento2/pull/18641)*. [GitHub-15828](https://github.com/magento/magento2/issues/15828)


<!--- ENGCOM-3059-->* The `./bin/magento config:show` command no longer fails with a fatal error after you run `./bin/magento app:config:dump`. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18295](https://github.com/magento/magento2/pull/18295)*. [GitHub-17582](https://github.com/magento/magento2/issues/17582)

<!--- MAGETWO-96428-->* The `bin/magento app:config:dump` command now disables all input fields as expected. 


<!--- ENGCOM-3280-->* 

If Admin Users assigned a Backup module Role Resource, Still was not able to access
Backups controller. Now its fixed.

*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [18816](https://github.com/magento/magento2/pull/18816)*. [GitHub-18150](https://github.com/magento/magento2/issues/18150)


<!--- ENGCOM-3160-->* The `getHostUrl()` method has been updated to reference `HTTP_HOST` rather than `SERVER_PORT`.


When Magento runs using the sandwich hosting set up (nginx-Varnish-nginx), and the backend nginx run on a not standard port (80 nor 443), the base URL is detected wrong in pub/errors/processor.hp

Steps to reproduce
Open any media resource that does not exist and is not allowed in var/resource_config.json

Expected result
Magento's 404 page should be displayed in the browser with a link to configured skin CSS.
Base in the HTML code should be generated based on the requested host





*Fix submitted by [Logan Stellway](https://github.com/loganstellway) in pull request [18393](https://github.com/magento/magento2/pull/18393)*. [GitHub-18131](https://github.com/magento/magento2/issues/18131)



<!--- MAGETWO-96107-->* Magento no longer displays an extraneous blank option in the country dropdown menu. 



<!--- MAGETWO-91764-->* 


The Magento frontend now uses HTTPS exclusively, and the Admin uses HTTP. 

Previously, using the frontend base URL (which used HTTPS) in the Admin resulted in too many redirects. 

Frontend base url https results in admin too many redirects

Stepd to Reproduce:

Log in Admin
Go to Stores->Configurations->Advanced->Admin
Change next data in section 'Admin Base Url'
Use custom admin url - 'Yes'
Custom Admin Url - http://path (for example in my case i used http://myLocalhost/MagentoFolder/)
Use Custom Admin Path - 'Yes'
Custom Admin Path - Custom path(for example 'alex')
Click 'Save Config button'
Go to Stores->Configuration->General->Web
Change next data in section 'Base Urls (Secure)'
Use Secure URLs on Storefront - 'Yes'
Use Secure URLs in Admin - 'Yes'
click 'Save Config button'
Expected Result:

Everything should still work correctly, front-end should be entirely using https and back-end should use http.
Actual Result:

localhost redirected you too many times.



<!--- ENGCOM-3786-->* 


*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [19880](https://github.com/magento/magento2/pull/19880)*. [GitHub-19609](https://github.com/magento/magento2/issues/19609)



config:set --lock-config does not act on other scopes


Steps to reproduce
php bin/magento config:set --lock-config general/store_information/name "Test lock";
php bin/magento app:config:import;
php bin/magento cache:clean;
Expected result
Admin user should not be able to change the configuration.

Actual result
Admin user is not able to change the configuration for the default store, but is able to change it for any other scope (i.e.: store view).



<!--- ENGCOM-3701-->* 


*Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [19751](https://github.com/magento/magento2/pull/19751)*. [GitHub-19605](https://github.com/magento/magento2/issues/19605)


Don't static compile disabled modules


Don't static compile disabled modules

When running static-content:deploy, there are disabled module content in pub/static.

Examples 

Disable modules that have frontend resources.
Run bin/magento setup:static-content:deploy
Observe that pub/static/... contains the resources.

Proposed solution
Check the disabled modules and skip them when compiling static content



### AdminGWS

<!--- MAGETWO-91617-->* Magento now updates the reports table as expected when a new administrator with restricted privileges logs in and selects **Report** > **Products** > **Ordered**. Previously, Magento did not generate this report, and logged an error in `var/log/system.log`. 






<!--- MAGETWO-95828-->* 

Magento now saves information about view actions in the Admin (for example, `customer_index_index`, `indexer_indexer_list`, `catalog_product_index`)  in the Action log as expected. This log permits merchants to see both the changes and the actor who initiated the changes. 


Log of actions in the Admin panel

Issue
The merchant asked how they can enabling logs which add records into the Action Log for "view" actions (eg: customer_index_index, indexer_indexer_list, catalog_product_index).

Steps to reproduce
1. Log into the admin panel
2. Change indexer mode \ or change mode for any index
3. Perform Save operation
4. Check action table

Expected Result
The action is saved in the log table and merchant could see what was changed and who did this.

Actual result
Changes weren't logged






<!--- MAGETWO-91688-->* Administrators with access to only CMS blocks can now successfully log in. Previously, Magento threw an error, and these users could not log in.




### Analytics

<!--- ENGCOM-3263 -->* You can now save configuration from the Admin  > Stores > Configuration > General > Advanced Reporting without providing an industry value. 

Previously, Magento displayed this error, `Please select a vertical.`

Unable to disable without providing Industry value 

Steps to reproduce

Goto **Admin** > **Stores** > **Configuration** > **General** > **Advanced Reporting**

Save config (while Industry is not provided)

Expected result
One should be able to save without providing the Industry value

Actual result
Can't save. A message appears: "Please select a vertical."


*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18782](https://github.com/magento/magento2/pull/18782)*. [GitHub-15259](https://github.com/magento/magento2/issues/15259)



### Authorization


<!--- MAGETWO-95536-->* You can now successfully save a role from the Admin. Previously, when you saved a role from the Admin, Magento removed all  users from the role (no matter which checkbox was checked), and displayed this message, `This user has no tokens`.


### Backend

<!--- ENGCOM-3196 -->* The calender icon issue is now correctly aligned on the Advanced Paricing page of the Admin. *Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18638](https://github.com/magento/magento2/pull/18638)*. [GitHub-18581](https://github.com/magento/magento2/issues/18581)

<!--- ENGCOM-3655-->* 

*Fix submitted by [Tegan Elizabeth Bold](https://github.com/Militree) in pull request [19620](https://github.com/magento/magento2/pull/19620)*. [GitHub-17759](https://github.com/magento/magento2/issues/17759)


 issue causing attribute not loading when using getList


CustomerRepository::getList() does not load custom attribute if the name is "company"

I have custom EAV attributes named "company" for customers, but this is not loaded if I use the CustomerRepository::getList()-method. Other custom attributes seem to be loaded properly.

Steps to reproduce
Create customer EAV attribute named "company" (varchar)
Populate it with some data
Load it with CustomerRepository::get() / getById()
Load it with CustomerRepository::getList()
Expected result
In both the situations, $customer->getCustomAttribute('company')->getValue() should return the value defined for this attribute.

Actual result
The get() / getById()-method loads the proper value, getList() returns NULL.



<!--- ENGCOM-3561-->* 

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19405](https://github.com/magento/magento2/pull/19405)*. [GitHub-19399](https://github.com/magento/magento2/issues/19399)


Add product customization option collapsible design issue

1.Go to -> Catalog Product -> add product from backend
2.Go to -> customization option

icon doesn't change when the row collapses



<!--- ENGCOM-4029-->*

*Fix submitted by [Ajay Ajabale](https://github.com/ajay2jcommerce) in pull request [20581](https://github.com/magento/magento2/pull/20581)*. [GitHub-20580](https://github.com/magento/magento2/issues/20580)

Time fields misaligned in iPad landscape view


In Admin Stores >> Configuration >> General >> Advanced Reporting >> Time of day to send data




### Bundle

<!--- ENGCOM-3361 -->* Bundle special prices are now correctly rounded when you load and resave a bundle product. Previously, when you reloaded a bundle with a special price that requires four positions after the decimal (for example, 78,9473), Magento rounded the price to two decimal places. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [18987](https://github.com/magento/magento2/pull/18987)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)

<!--- ENGCOM-3391 -->* The Bundle Product Option Repository Delete method now removes the correct option. Previously, it removed the first option, regardless of the `optionId` that was specified. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19027](https://github.com/magento/magento2/pull/19027)*. [GitHub-18979](https://github.com/magento/magento2/issues/18979)

<!--- ENGCOM-3161 MAGETWO-69959 -->* Magento no longer overwrites user-defined option quantities with default values when a customer edits a bundle product from a shopping cart. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18520](https://github.com/magento/magento2/pull/18520)*. [GitHub-4942](https://github.com/magento/magento2/issues/4942)

<!--- MAGETWO-58212-->* You can now successfully change the attribute set for a bundle product. Previously, the edit bundle page hung, and Magento threw this error, `Uncaught TypeError: Cannot read property 'length' of undefined`. [GitHub-5999](https://github.com/magento/magento2/issues/5999)

<!--- MAGETWO-91628-->* Magento now maintains the correct base price for a bundle product when you add a bundle product in one currency and then add the same bundle product option in a different currency. Previously, when you added the same bundle product option in a different currency, Magento doubled the base price. 

<!--- MAGETWO-91679-->* Bundle product SKUs are now built based on the order of the associated (selected) product ID numbers in ascending order. Previously, SKUs were built based on the order of the selected product ID numbers in ascending order instead of the order in which the option is added to the bundle product. [GitHub-14262](https://github.com/magento/magento2/issues/14262)

<!--- ENGCOM-3621-->* Fixed alignment of the bundle product information on the configure product page for a bundle product  when creating a new order. *Fix submitted by [Abrar Pathan](https://github.com/abrarpathan19) in pull request [19502](https://github.com/magento/magento2/pull/19502)*. [GitHub-19501](https://github.com/magento/magento2/issues/19501)

<!--- ENGCOM-3948-->* Fixed alignment of the bundle product radio button on the product page when you click **Customize** and **Add to cart**. *Fix submitted by [parag2jcommerce](https://github.com/parag2jcommerce) in pull request [20519](https://github.com/magento/magento2/pull/20519)*. [GitHub-20518](https://github.com/magento/magento2/issues/20518)

<!--- ENGCOM-3487 3585-->* Magento now adds all selected values to the cart when a customer adds a bundle product option with input type checkbox. Previously, if a bundle product had three values, Magento added only two options to the cart. *Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [19261](https://github.com/magento/magento2/pull/19261) and pull request [19437](https://github.com/magento/magento2/pull/19437)*. [GitHub-19205](https://github.com/magento/magento2/issues/19205)

<!--- ENGCOM-3605-->* Fixed inconsistently sized title box border on the edit bundle product page when adding an item to a bundle product from the Admin. *Fix submitted by [Abrar Pathan](https://github.com/abrarpathan19) in pull request [19510](https://github.com/magento/magento2/pull/19510)*. [GitHub-19509](https://github.com/magento/magento2/issues/19509)


### B2B

<!--- MAGETWO-94444-->* Order total values are no longer limited to eight round digits. 

<!--- MAGETWO-95822-->* Layered navigation now displays only the options that are available in the shared catalog. 

<!--- MAGETWO-96407-->* You can now upload an attachment to a customizable option and add the product plus attachment to a requisition list. Previously,  you could upload and add the product to a requisition list, but the attachments were lost.  

<!--- MAGETWO-91614-->* You can now filter customers by status. Previously, Magento threw a SQL ERROR when you clicked on **Apply Filters** after setting the filter to status. 

<!--- MAGETWO-91754-->* Magento now loads the company profile, roles, and permissions sections of a company account when **Enable Reward Points Functionality** is set to **no** in the Admin, and you flush cache storage. 

<!--- MAGETWO-94866-->* Magento now displays products that merchants have added to the public catalog through **Product** > **Edit page** > **Shared Catalog**. Previously, these items appeared if added  through **Catalog** > **Shared Catalog**, but not through **Product** > **Edit page** > **Shared Catalog**. 

<!--- MAGETWO-91661-->* Menus now close as expected from the Quick Order page in mobile view.

<!--- MAGETWO-94887-->* Magento no longer displays a duplicate **Add product** button when you change currency from the Order currency dropdown while creating an order from the Admin. 

<!--- MAGETWO-96598-->* Merchants can now add a product to the default public catalog,  and the product can be accessed by the product URL on the storefront. Previously, Magento did not add the product to the shared catalog and instead displayed this error, `Requested categories don't exist`. 





<!--- MAGETWO-97315-->* ask Misha C

Configurable Product Price is absent on Storefront

Category C has permissions to show Prices but not allow to add to Cart for Customer Group G (Not Logged In Customers in my case)
Configurable Product P (as well as its children) is purchasable & assigned to C & to Shared Catalog, Shared Catalog is generated with P (so that P becomes available on Storefront)
Indexers are valid, the cache is flushed

STEPS
Go to Storefront as G
Open C
 Price isn't displayed for P
 Price is displayed for P (as it works for Simple Products)
Open P directly
 Price isn't displayed
 Price is displayed (as it works for Simple Products)



<!--- MAGETWO-93769-->* You can now populate custom catalogs with many products. Previously, when you tried to populate a custom catalog with an existing large catalog, Magento displayed an informative errorlike this, `PHP Fatal error:  Allowed memory size of 792723456 bytes exhausted (tried to allocate 12288 bytes) in /mnt/data/home/agorbivskyi/dev/m2b2b/vendor/magento/zendframework1/library/Zend/Db/Statement/Pdo.php on line 228`. 

<!--- MAGETWO-97314-->* Magento now displays custom prices in quotes, shopping cart, and during checkout. Previously, when you moved a product with a custom price to the shopping cart from the Admin, the custom price was lost, and Magento did not display it in  the shopping cart.

<!--- MAGETWO-97131-->* A logged-in user can now log out, log in as a guest, and then check out when persistent cart is enabled. Previously, under these circumstances, the customer logged in as guest could not check out, and Magento displayed this error, `No such entity with cartId = null`. 




### CAPTCHA

<!--- MAGETWO-94052-->* CAPTCHA now appears as expected in the Log in popup window.


### Cart and checkout

<!--- ENGCOM-3194 -->* Magento now displays a product's special price on the storefront, product listings, and product detail page as expected when the special price is 0.00. Previously, Magento displayed the regular price, but used the special price for sorting and quote calculations. *Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [18631](https://github.com/magento/magento2/pull/18631)*. [GitHub-18268](https://github.com/magento/magento2/issues/18268)

<!--- ENGCOM-3237 -->* Custom shipping methods in custom carrier code can now include underscores. *Fix submitted by [Jakub](https://github.com/idziakjakub) in pull request [18689](https://github.com/magento/magento2/pull/18689)*. [GitHub-5021](https://github.com/magento/magento2/issues/5021)

<!--- ENGCOM-3073 -->* Magento no longer displays the infinite loading indicator when an error occurs during check out. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [18331](https://github.com/magento/magento2/pull/18331)*. [GitHub-18330](https://github.com/magento/magento2/issues/18330)

<!--- ENGCOM-3189 -->* The **Clear shopping cart** button now works as expected. Previously, the page reloaded, but the shopping cart was not cleared. *Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18596](https://github.com/magento/magento2/pull/18596)*. [GitHub-18475](https://github.com/magento/magento2/issues/18475), [GitHub-18589](https://github.com/magento/magento2/issues/18589)

<!--- ENGCOM-2987 -->* Magento now dispatches a `checkout_cart_product_add_before` event in addition to a `checkout_cart_product_add_after` event. *Fix submitted by [Leandro Rosa](https://github.com/leandro-rosa) in pull request [18080](https://github.com/magento/magento2/pull/18080)*. [GitHub-17830](https://github.com/magento/magento2/issues/17830)

<!--- MAGETWO-95935-->* Customer address attribute validation during checkout now permits spaces. 

<!--- MAGETWO-71344-->* The shopping cart now reflects any product updates made from the mini shopping cart. Previously, changes made to product quantity in the minicart were not propagated to the shopping cart, leading to different subtotals.  

<!--- MAGETWO-96812-->* Clicking multiple times on the minicart icon no longer logs out the current customer. Previously, when a logged-in customer added a product to the cart and then clicked the shopping cart icon multiple times, Magento displayed an empty shopping cart and logged out the customer. 

<!--- MAGETWO-95068-->* Information previously entered by a customer during check out (such as shipping address) now persists  after the customer updates their shopping cart. Previously, when a customer updated their shopping cart, all information previously entered during check out (such as shipping address) was deleted. 

<!--- MAGETWO-96599-->* The one-page checkout page now displays a backorder customer message as needed. [GitHub-11708](https://github.com/magento/magento2/issues/11708)

<!--- MAGETWO-95820-->* Magento now displays orders placed by a new customer before they registered  under the customer's name. Previously, if a customer placed an order while logged in as a guest, and then registered for a new account, Magento associated the order in the Admin with the guest account instead of the customer's real name. 

<!--- MAGETWO-95848-->* Customers can now configure options for a configurable product after adding it to their shopping cart.  Previously, under these circumstances, Magento threw a fatal error.

<!--- MAGETWO-95739-->* Magento now validates zip codes for new addresses as expected when the **My billing and shipping address are the same** option is unchecked. 

<!--- MAGETWO-94427-->* Magento now updates the minicart as expected when an administrator updates the product from the Admin. Previously, if a product that had been added to the shopping cart was subsequently disabled from the Admin,  the product was still displayed in the cart.

<!--- MAGETWO-91658-->* Magento now uses the configured default sort order  during checkout to calculate totals. Previously, Magento ignored the configured order and used `Sub Total > Shipping > Discount > Tax > Grand Total` to calculate order totals. 

<!--- MAGETWO-91530-->* Magento now displays informative error messages when an order paid for with Authorize.net fails. 

<!--- MAGETWO-71375-->* Magento now displays the correct status for orders with zero subtotals. Previously, new order status appeared as pending when it was processing. 

<!--- MAGETWO-91730-->* Expired gift cards are no longer applied to a customer's account. Previously, if a gift card applied to a customer account expired, Magento could not complete the checkout process. 

<!--- MAGETWO-91517-->* Magento no longer removes the billing and shipping address information for an order when a customer cancels an order by clicking **Cancel and Return** when  using PayPal Website Payments Pro Hosted Solution. Previously, when a customer placed an order and then clicked the **Cancel and Return** link, Magento removed the billing/shipping address and displayed an error.

<!--- MAGETWO-91596-->* You can now update the quantity of grouped product  if the quantity field was left empty when initially added to an Admin order by SKU. Previously, under these circumstances, you could not uodate the quantity. 

<!--- MAGETWO-91733-->* After a session expires, and a customer refreshes the page, Magento displays an empty shopping cart and logs out the customer as expected. Previously, Magento displayed an empty shopping cart but the minicart still displayed the selected items, and if the customer refreshed the page again, the shopping cart displayed the items. 

<!--- MAGETWO-91636-->* Tooltips that are available from the checkout page on mobile devices are now displayed properly. Previously, customers had to scroll to access the tooltip. 

<!--- ENGCOM-3706-->* Fixed problem with overlapping UI elements on the cart page when accessed from the minicart. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19839](https://github.com/magento/magento2/pull/19839)*. [GitHub-19836](https://github.com/magento/magento2/issues/19836)

<!--- ENGCOM-3721-->* Fixed alignment issue with dropdown menu on the minicart. *Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19508](https://github.com/magento/magento2/pull/19508)*. [GitHub-19507](https://github.com/magento/magento2/issues/19507)

<!--- ENGCOM-3769-->* Fixed alignment issue with radio uttons on the shopping cart page. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [20022](https://github.com/magento/magento2/pull/20022)*. [GitHub-20021](https://github.com/magento/magento2/issues/20021)

<!--- ENGCOM-3578-->* `\Magento\Checkout\Observer\SalesQuoteSaveAfterObserver` now updates the checkout session quote ID as needed. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [19425](https://github.com/magento/magento2/pull/19425)*. [GitHub-19424](https://github.com/magento/magento2/issues/19424)

<!--- ENGCOM-3386-->* Magento now validates shipping address of a logged-in user using the default shipping address during checkout. *Fix submitted by [StasKozar](https://github.com/StasKozar) in pull request [19038](https://github.com/magento/magento2/pull/19038)*. [GitHub-18990](https://github.com/magento/magento2/issues/18990)

<!--- ENGCOM-3971-->* Fixed issue displaying numbers than exceed two digits in the **Qty:** box of the **Proceed to Checkout** pop up. *Fix submitted by [parag2jcommerce](https://github.com/parag2jcommerce) in pull request [20612](https://github.com/magento/magento2/pull/20612)*. [GitHub-20611](https://github.com/magento/magento2/issues/20611)

<!--- ENGCOM-3861-->* Fixed alignment of the details label on the order page in mobile view. *Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [20301](https://github.com/magento/magento2/pull/20301)*. [GitHub-20299](https://github.com/magento/magento2/issues/20299)

<!--- ENGCOM-3864-->* Added a missing space between the title of the workflow step and the saved address on the first page of the checkout process. *Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [20306](https://github.com/magento/magento2/pull/20306)*. [GitHub-20304](https://github.com/magento/magento2/issues/20304)

<!--- ENGCOM-4019-->* Magento no longer throws a console error during a guest checkout when the list of allowed countries is changed from the Admin. *Fix submitted by [Govind Sharma](https://github.com/GovindaSharma) in pull request [20634](https://github.com/magento/magento2/pull/20634)*. [GitHub-20631](https://github.com/magento/magento2/issues/20631)

<!--- ENGCOM-4032-->* The title of the shipping method nolonger overlaps with **Edit** on the checkoout page. *Fix submitted by [Yashwant Rokde](https://github.com/yashwant2jcommerce) in pull request [20428](https://github.com/magento/magento2/pull/20428)*. [GitHub-20427](https://github.com/magento/magento2/issues/20427)

<!--- ENGCOM-3984-->* The **Close** button on the minicart now longer overlaps with the shipping section when the checkout page is opened on a mobile device. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [20615](https://github.com/magento/magento2/pull/20615)*. [GitHub-20614](https://github.com/magento/magento2/issues/20614)

<!--- ENGCOM-3818-->* Fixed the alignment of the **Apply discount** button  on the checkout page. *Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [20144](https://github.com/magento/magento2/pull/20144)*. [GitHub-20137](https://github.com/magento/magento2/issues/20137)


<!--- MAGETWO-95312-->* 

Cart is not empty after removing the product

STEPS
Go to Storefront, make sure Shopping Cart is empty
Add P to Shopping Cart
Open Shopping Cart
Log in to Admin panel in another tab, change the Price of P
Go to Shopping Cart. Do not update. Remove P.
Go to Home Page


ACTUAL RESULT
 Mini Shopping Cart has its layout broken, the same as Shopping Cart, "Summary" floating block contains Order Total

EXPECTED RESULT
 Mini Shopping Cart contains "You have no items in your shopping cart" sign, the same as Shopping Cart, "Summary" floating block is absent or empty



<!--- ENGCOM-3153 -->* Magento no longer displays a console error when 

Fix "Cannot read property 'code' on undefined" issue

After upgrading from 2.2.5 to 2.2.6 with module One Step Checkout module we started getting js error "Cannot read property 'code' of undefined".
Reason - this module removes all checkout "steps", but in Magento code there is no check that we have at least one step.

Steps to reproduce
Add an item into the cart.
Open Chrome devtools console.
Go to checkout

Expected result
That checkout page doesn't display any console error.

Actual result
The following (down below) console error is appearing in devtools console.

*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [18494](https://github.com/magento/magento2/pull/18494)*. [GitHub-18164](https://github.com/magento/magento2/issues/18164)













#### Cart Price rules

<!--- MAGETWO-96379 -->* The Cart Price Rule page now displays correct counter values for the grid and accurate pagination. 

<!--- MAGETWO-91784-->* Magento no longer permits you to use the up and down arrow keys to enter negative numers when entering a credit card number on the payment information page during checkout.



### Catalog

<!--- ENGCOM-3516 -->* Magento now displays the product page with this message `You need to choose options for your item` when you click **Add to cart** for a new product that has an attribute with the **use in product listing** property set to **Yes**. Previously, Magento redirected the user to the cart page, and did not add the product to the cart. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19322](https://github.com/magento/magento2/pull/19322)*. [GitHub-19315](https://github.com/magento/magento2/issues/19315)


<!--- ENGCOM-3435 -->* 

Expected result
Should be handling the exception and ideally showing 404 page.
Actual result
It is throwing Fatal error:

Fatal error: Uncaught Error: Cannot call abstract method Magento\Framework\App\ActionInterface::execute()


Fatal-error-Uncaught-Error-Cannot-call-abstract-method-Magento-…Framework-App-ActionInterface-execute add execute method to prevent fatal error when go to catalog/product/compare/

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [18987](https://github.com/magento/magento2/pull/18987)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)



<!--- ENGCOM-3450 -->* Magento now correctly calculates fixed tier price discount for prpoducts with special prices. *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [19179](https://github.com/magento/magento2/pull/19179)*. [GitHub-18652](https://github.com/magento/magento2/issues/18652)

<!--- ENGCOM-3421-->* Magento no longer throws an exception when you try to add an image to a product programmatically. *Fix submitted by [Yevhenii Dumskyi](https://github.com/progreg) in pull request [18952](https://github.com/magento/magento2/pull/18952)*. [GitHub-6803](https://github.com/magento/magento2/issues/6803)

<!--- ENGCOM-3365-->* Magento now applies the translations for the selected theme when you enable a custom design theme. Previously, Magento collected the translation files for only the active main theme, which limited the use of different translations within the additional theme. *Fix submitted by [Cezary Zeglen](https://github.com/cezary-zeglen) in pull request [18998](https://github.com/magento/magento2/pull/18998)*. [GitHub-17625](https://github.com/magento/magento2/issues/17625)

<!--- ENGCOM-3292-->* The `bin/magento catalog:images:resize` command now processes all specified images. *Fix submitted by [Vladyslav Podorozhnyi](https://github.com/vpodorozh) in pull request [18807](https://github.com/magento/magento2/pull/18807)*. [GitHub-18387](https://github.com/magento/magento2/issues/18387)

<!--- ENGCOM-3184-->* You can now create a new product with a special price. Previously, when you saved the newly created product, Magento threw this error, `Special price date from" Failed to parse time string`. *Fix submitted by [Hiren Pandya](https://github.com/hiren0241) in pull request [18578](https://github.com/magento/magento2/pull/18578)*. [GitHub-18158](https://github.com/magento/magento2/issues/18158)

<!--- ENGCOM-3242-->* You can now insert multiple catalog product list widgets in a CMS page. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [18714](https://github.com/magento/magento2/pull/18714)*. [GitHub-4468](https://github.com/magento/magento2/issues/4468)

<!--- ENGCOM-3202-->* You can now use REST to add a new attribute and configure it with settings such as `is_filterable`. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [18622](https://github.com/magento/magento2/pull/18622)*. [GitHub-10205](https://github.com/magento/magento2/issues/10205)

<!--- ENGCOM-2998-->* Magento now provides a white-space trimming function for SKUs on the Admin. *Fix submitted by [Bartosz Kubicki](https://github.com/bartoszkubicki) in pull request [18019](https://github.com/magento/magento2/pull/18019)*. [GitHub-16572](https://github.com/magento/magento2/issues/16572), [GitHub-12300](https://github.com/magento/magento2/issues/12300)




<!--- ENGCOM-3180-->* 

Custom Product Attribute changes 'backend_type' when 'is_user_defined = 1' and get updated/saved in Admin Backend


Create a custom Product attribute via Setup of a Custom Module:

Go to the Backend Stores > Attributes > Product
Click on the newly created attribute and save it (with or without modifications).
Expected result
The backend_type doesn't change for the custom attribute.
Actual result
The backend_type got changed from varchar to int

*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18570](https://github.com/magento/magento2/pull/18570)*. [GitHub-9219](https://github.com/magento/magento2/issues/9219)




<!--- ENGCOM-3142-->* The table rate shipping method no longer fails to return a quote when a customer uses an American  post code in the form of *five-digit zip - four-digit* extension (for example, 44444-1234). *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18499](https://github.com/magento/magento2/pull/18499)*. [GitHub-17770](https://github.com/magento/magento2/issues/17770)

<!--- ENGCOM-3129-->* You can now set a Boolean attribute to is_filterable, which allows them to be included in layered navigation. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [18434](https://github.com/magento/magento2/pull/18434)*. [GitHub-3283](https://github.com/magento/magento2/issues/3283)


<!--- ENGCOM-3047-->* 

Cast products "getStoreId()" to int, closes

Cast getStoreId() for products to int (like for categories).


getStoreId() returns a string for products, but int for categories that causes a fatal error in extensions code.

*Fix submitted by [sv3n](https://github.com/sreichel) in pull request [18303](https://github.com/magento/magento2/pull/18303)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)


<!--- ENGCOM-3055-->* `\Magento\Catalog\Model\Product::getQty()` now consistently returns float/double. *Fix submitted by [Jay Ghosh](https://github.com/jayankaghosh) in pull request [18149](https://github.com/magento/magento2/pull/18149)*. [GitHub-18094](https://github.com/magento/magento2/issues/18094)

<!--- ENGCOM-3035-->* Updates to related products now appear as expected in both the storefront product page and the Admin product edit page. Previously, the storefront displayed product updates, but not all related product updates showed up in the Admin. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18207](https://github.com/magento/magento2/pull/18207)*. [GitHub-13720](https://github.com/magento/magento2/issues/13720)

<!--- ENGCOM-3034-->* The `bin/magento module:uninstall` command  now works as expected with Composer. Previously, there was a discrepancy between `composer.lock` and `composer.json` when this command was used to remove a module. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18205](https://github.com/magento/magento2/pull/18205)*. [GitHub-17780](https://github.com/magento/magento2/issues/17780)

<!--- ENGCOM-3061-->* `getStoreId()` now consistently returns `int`. *Fix submitted by [sv3n](https://github.com/sreichel) in pull request [18303](https://github.com/magento/magento2/pull/18303)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)

<!--- ENGCOM-3078-->* You can now save a product on deployments in single-store mode when the default website has been removed and a new website has been added. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [18210](https://github.com/magento/magento2/pull/18210)*. [GitHub-13405](https://github.com/magento/magento2/issues/13405)

<!--- MAGETWO-96908-->* Attribute values are now updated as expected in the `catalog_product_flat_2` table.

<!--- MAGETWO-95802-->* Dates in the Admin are now formatted correctly for French locales (dd/mm/yyyy). EE ONLY

<!--- MAGETWO-94556-->* Magento now saves and properly indexes a configurable product variant that contains a longer-than-permitted SKU. Previously, when you tried to save this product, Magento threw an error. [GitHub-17436](https://github.com/magento/magento2/issues/17436)

<!--- MAGETWO-95314-->* Magento no longer throws an error when you use REST to update a product's special price if the product previously had a scheduled update to its special price or had a special price set from the Admin. EE ONLY -- Staging

<!--- MAGETWO-95428-->* The product page's Recently View section no longer displays the name of the current product. 

<!--- MAGETWO-91837-->* You can now use REST to update a product's media gallery. 

<!--- MAGETWO-95818-->* Magento now saves default values for category URL paths in accordance with the **Use Default Value**  and **Create a Permanent Redirect** settings. Previously, in deployments running multiple stores, if a category's URL key was changed and saved, Magento did not change the category's url key back to the default URL key when saved with the **Use Default Value** box checked and **Create a Permanent Redirect** box unchecked.

<!--- MAGETWO-95826-->* Magnifier now correctly handles zoomed sections of images when the image width/height ratio has a `~2x` difference. Previously, these sections were distorted. 

<!--- MAGETWO-61478-->* Magento now retains across categories any value you set for the number of categories displayed per page. 

<!--- MAGETWO-95753-->* You can now save products with at least one tier price. 

<!--- MAGETWO-66442-->* Changes to product images made under the All Stores scope now affect product images at the store-view level.

<!--- MAGETWO-96290-->* You can now use REST to update category positions. 

<!--- MAGETWO-91609-->* Magento now correctly displays the greater than operator (>) when you configure the catalog products list widget for a CMS block.

<!--- MAGETWO-70303-->* Categories that are set to anchor **Yes** and that have disabled subcategories no longer display  products from those disabled subcategories. [GitHub-9002](https://github.com/magento/magento2/issues/9002)

<!--- MAGETWO-91633-->* You can sort a grouped product's associated products across multiple pages. Previously, when you trid to sort associated products, Magento sorted only the products visible on the current page.

<!--- ENGCOM-3029-->*

Previously, Magento 

Fixed validation while creating new product attributes in admin


Misleading error in Add Product Attribute screen

Navigate to Store->Attributes->Product
Add new attribute
Set Attribute Code to Foo_Bar
Click Save
Expected result

An error message saying that capital letters are not allowed in Attribute Code field
Actual result
Following error message:
Please use only letters (a-z), numbers (0-9) or underscore in this field, and the first character should be a letter.


*Fix submitted by [saravananvelu](https://github.com/saravananvelu) in pull request [17806](https://github.com/magento/magento2/pull/17806)*. [GitHub-17754](https://github.com/magento/magento2/issues/17754)


<!--- ENGCOM-3281-->* Magento now uses the correct column type when creating temporary tables for a flat catalog. *Fix submitted by [Jason Evans](https://github.com/jasonevans1) in pull request [18818](https://github.com/magento/magento2/pull/18818)*. [GitHub-14571](https://github.com/magento/magento2/issues/14571)








<!--- ENGCOM-3566-->* 

Attribute indexing no longer ignores custom source model options. *Fix submitted by [Joel Rainwater](https://github.com/rain2o) in pull request [19176](https://github.com/magento/magento2/pull/19176)*. [GitHub-417](https://github.com/magento/magento2/issues/417)



Currently The indexing of Attribute Values used for the product filters in the category overview only index multiselect attributes that use attribute options. If a custom source model is specified the values are not indexed and thus are not taken into account when filtering products.

To fix the issue in my case I created an interface which all Source Models that should be taken into account while indexing should implement. For Attributes implementing this interface not only attribute options from the DB are indexed but also all options provided by the source model.




When a multiselect Product Attribute uses a custom source model those values are not included when indexing the attribute values for filters on the product grid. The result is those attributes cannot be used as a filter in the product grid.

This was originally opened as issue #417 but was closed as it was considered a feature request and moved to the forums here. The solution is based on @maderlock's comment here but replaced the use of ObjectManager with dependency injection of AttributeRepositoryInterface.



<!--- ENGCOM-3597-->* 


*Fix submitted by [Govind Sharma](https://github.com/GovindaSharma) in pull request [19408](https://github.com/magento/magento2/pull/19408)*. [GitHub-19346](https://github.com/magento/magento2/issues/19346)


Import data 2.2.6 Value for 'product_type' attribute contains incorrect value



Value for 'product_type' attribute contains incorrect value

this issue occurs only with attribute code product_type with dropdown.

Case 1: no issue with code other than product_type
step 1: on vanilla m2 instance, create attribute (dropdown, not required) with code like test_select
step2: add it in default attribute set
3. goto Import download sample file reimport it.
Result: everything works fine

Case 2: Issue with code product_type
step 1: on vanilla m2 instance, create attribute (dropdown, not required) with code product_type
step2: add it in default attribute set
3. goto Import download sample file reimport it.
Result: Error message shows Value for 'product_type' attribute contains incorrect value

<!--- ENGCOM-3592-->* 

*Fix submitted by [SikailoISM](https://github.com/SikailoISM) in pull request [19451](https://github.com/magento/magento2/pull/19451)*. [GitHub-19436](https://github.com/magento/magento2/issues/19436)


Attribute Option with zero at the beginning does not work if there is already option with the same number without the zero [REST API] 

Magento now correctly handles 

Previously, attribute option that begin with  zero did not work if an option with the same number without the zero alreadyy existed.



<!--- ENGCOM-3659-->* 


*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19493](https://github.com/magento/magento2/pull/19493)*. [GitHub-19492](https://github.com/magento/magento2/issues/19492)


Catalog Product - Customizable Options label alignment issue 


Customizable Options label alignment issue

Steps to reproduce
1.Open Catalog > Product > Customizable Options from backend
2.Add option > label alignment








<!--- ENGCOM-3641-->* You can now successfully delete a newly created attribute set. Previously, Magento displayed a 404 error under these circumstances. *Fix submitted by [cedcommerce](https://github.com/cedcommerce) in pull request [19633](https://github.com/magento/magento2/pull/19633)*. [GitHub-19607](https://github.com/magento/magento2/issues/19607)

<!--- ENGCOM-3399-->* You can now use add extension attributes to add category links to a product. Previously, Magento did not add the product links, but behaved unpredictably. *Fix submitted by [Giel Berkers](https://github.com/kanduvisla) in pull request [19080](https://github.com/magento/magento2/pull/19080)*. [GitHub-14861](https://github.com/magento/magento2/issues/14861)



<!--- ENGCOM-3448-->* 

*Fix submitted by [Alex Ghiban](https://github.com/drew7721) in pull request [19124](https://github.com/magento/magento2/pull/19124)*. [GitHub-16074](https://github.com/magento/magento2/issues/16074)



User agent exception not setting the correct templates for product pages.


Steps to reproduce
Create a parent theme ex: parent (extending or not the blank theme)
Create a child theme of parent for the desktop version ex: desktop
Create another child theme of parent for mobile devices ex: mobile
In all themes, create the Magento_Theme/templates/html/footer.phtml file with different content.
In the Admin section Content -> Design -> Configuration edit the Global Scope and set the desktop theme as default. Click Add New User Agent Rule button and add an exception for /(iPhone|iPod|iPad|Android)/i to use the mobile theme.
In a browser visit the site with "Responsive Design Mode" enabled and change the user agent to one one of the above. Note that the categories pages, listings and CMS pages are working fine.
Visit a product page. Note that the desktop footer is loading regardless of the user agent.

Expected result
What I find strange is that some templates are loading fine. For instance the header.phtml header will load proper one form the mobile theme based on the user agent but not the footer.phtml or the absolute_footer.phtml.

Actual result
The footer.phtml and absolute_footer.phtml templates are loading from the desktop theme instead of the mobile theme regardless of the user agent.



<!--- ENGCOM-3673-->* 

*Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [19341](https://github.com/magento/magento2/pull/19341)*. [GitHub-14510](https://github.com/magento/magento2/issues/14510)


Creating custom customer attribute with default value 0 will cause not saving value for customer entity.



Creating custom customer attribute with default value 0 will cause not saving value for customer entity 

Steps to reproduce
Create custom customer attribute of type int with default value 0

Expected Result
When a new customer is created value 0 will be set for above custom attribute if no other value was explicitly provided

Actual result
No value is saved for above custom customer attribute when no value is explicitly provided





<!--- ENGCOM-3476-->* 

*Fix submitted by [Erik Pellikka](https://github.com/ErikPel) in pull request [19232](https://github.com/magento/magento2/pull/19232)*. [GitHub-17819](https://github.com/magento/magento2/issues/17819)


Don't return categoryId from registry if the product doesn't belong in the current category


Wrong product url from getProductUrl when current category has not product object





<!--- ENGCOM-3727-->* Corrected misspelled argument name `allowDrug` to `allowDrag` in `vendor/magento/module-catalog/view/adminhtml/templates/catalog/product/attribute/set/main.phtml`. *Fix submitted by [Govind Sharma](https://github.com/GovindaSharma) in pull request [19918](https://github.com/magento/magento2/pull/19918)*. [GitHub-19917](https://github.com/magento/magento2/issues/19917)

<!--- ENGCOM-3780-->* `CategoryLinkReposity` now lists all possible exceptions. *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [20050](https://github.com/magento/magento2/pull/20050)*. [GitHub-20037](https://github.com/magento/magento2/issues/20037)

<!--- ENGCOM-1862-->* Merchants can now assign negative values to custom option for a product with a fixed price from the Admin. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [15267](https://github.com/magento/magento2/pull/15267)*. [GitHub-7333](https://github.com/magento/magento2/issues/7333)

<!--- ENGCOM-3618-->* Newly added fields are now sorted according to the given `sortOrder` value in the newsletter system configuration file. Previously, you could add a new field, but could not successfully set its position. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19568](https://github.com/magento/magento2/pull/19568)*. [GitHub-19418](https://github.com/magento/magento2/issues/19418)

<!--- ENGCOM-3430-->* Merchants can now change the position of tabs on a product page. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19007](https://github.com/magento/magento2/pull/19007)*. [GitHub-4154](https://github.com/magento/magento2/issues/4154)

<!--- ENGCOM-3758-->* An incorrect variable in the phpDoc for `DataBuilder.php` has been corrected. *Fix submitted by [Kunj joshi](https://github.com/kunj1988) in pull request [19992](https://github.com/magento/magento2/pull/19992)*. [GitHub-19974](https://github.com/magento/magento2/issues/19974)







<!--- ENGCOM-3599-->* 

*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [19095](https://github.com/magento/magento2/pull/19095)*. [GitHub-17592](https://github.com/magento/magento2/issues/17592)


Fix mass product update with group min cart qty



Mass attribute update fails with E_WARNING


Steps to reproduce.
Add some values to «Catalog» → «Inventory» → «Product Stock Options» → «Minimum Qty Allowed in Shopping Cart».
Flush cache.
Go to the Catalog => Products
Select some products in the list
Select "Update attributes" in the action dropdown
Expected result
The form to update all available attributes should be shown.

Actual result
PHP throws an E_WARNING:



<!--- ENGCOM-3946-->* The product compare page now loads as expected when unconfigured attributes display **N/A** or **No**. *Fix submitted by [Vivek Kumar](https://github.com/vivekkumarcedcoss) in pull request [20231](https://github.com/magento/magento2/pull/20231)*. [GitHub-20229](https://github.com/magento/magento2/issues/20229)

<!--- ENGCOM-3913-->* Magento now correctly sorts configurable products with tier prices or swatches on both the storefront and Admin. Previously, storefront sorting did not match Admin sorting. *Fix submitted by [vshatylo](https://github.com/vshatylo) in pull request [20407](https://github.com/magento/magento2/pull/20407)*. [GitHub-12194](https://github.com/magento/magento2/issues/12194)






<!--- ENGCOM-3951-->* 

*Fix submitted by [parag2jcommerce](https://github.com/parag2jcommerce) in pull request [20501](https://github.com/magento/magento2/pull/20501)*. [GitHub-20500](https://github.com/magento/magento2/issues/20500)



parag2jcommerce

Recent Order Product Title Misaligned in Sidebar

Place order
Check recent order in sidebar on listing pages or account pages



<!--- ENGCOM-4031-->* Fixed misalignment of  tab content on the product page in mobile view. *Fix submitted by [parag2jcommerce](https://github.com/parag2jcommerce) in pull request [20469](https://github.com/magento/magento2/pull/20469)*. [GitHub-20468](https://github.com/magento/magento2/issues/20468)




### CatalogInventory

<!--- ENGCOM-3138-->* Magento now validates the quantity of items in th shoppng cart against the **Maximum Qty Allowed in Shopping Cart** setting. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18481](https://github.com/magento/magento2/pull/18481)*. [GitHub-18477](https://github.com/magento/magento2/issues/18477)

<!--- MAGETWO-96364-->* Sorting configurable products by price now works correctly when the **Display Out of Stock Products** setting is enabled.

<!--- ENGCOM-3771-->* 

*Fix submitted by [Oleksii Gorbulin](https://github.com/agorbulin) in pull request [19997](https://github.com/magento/magento2/pull/19997)*. [GitHub-19482](https://github.com/magento/magento2/issues/19482)


Increase product quantity with disabled Manage Stock when place order is failed

After failed order, Magento increase product quantity, make reindex for this product and flush cache while in the product Manage Stock in disabled

Steps to reproduce
In the admin panel set for a product Manage Stock: No and Quantity: 100
Place an order with this product via PayPal, but with a card that does not have enough money to pay for the order

Expected result
Product Quantity is 100

Actual result
Product Quantity is 101




<!--- ENGCOM-3845-->* Magento now correctly applies the **Set Items' Status to be In Stock When Order is Cancelled** attribute setting. Previously, after an order was canceled, Magento increased product stock even when **Set Items' Status to be In Stock When Order is Cancelled** is set to **no**. *Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20252](https://github.com/magento/magento2/pull/20252)*. [GitHub-20121](https://github.com/magento/magento2/issues/20121)

<!--- ENGCOM-3915-->* Removed unnecessary slash from `app/code/Magento/CatalogInventory/etc/di.xml`. This extraneous slash had previously resulted in `Magento\Catalog\Api\ProductRenderListInterface` returning products regardless of visibility. *Fix submitted by [Milind Singh](https://github.com/milindsingh) in pull request [20410](https://github.com/magento/magento2/pull/20410)*. [GitHub-20409](https://github.com/magento/magento2/issues/20409)

<!--- ENGCOM-3462-->* Magento no longer displays a negative value on the product list page when a product's stock falls below the product's `OutOfStock` threshold value. *Fix submitted by [Khodu](https://github.com/khodu) in pull request [19206](https://github.com/magento/magento2/pull/19206)*. [GitHub-9130](https://github.com/magento/magento2/issues/9130)





### Catalog Rule


<!--- ENGCOM-3131-->* Magento no longer throws an exception when you try to edit and save a catalog price rule when the Admin language is set to a language other than English. *Fix submitted by [Martin](https://github.com/Mardl) in pull request [18419](https://github.com/magento/magento2/pull/18419)*. [GitHub-12399](https://github.com/magento/magento2/issues/12399)



<!--- ENGCOM-3143-->*



Fix category tree in cart price rule




Currently if you try to create a catalog price rule based on categories with nesting level 4 or higher (1 being the Default Category), these categories (despite being correctly saved in the condition) won't have their corresponding checkboxes checked when you open the Category Chooser again.




Open form for create new Catalog Rule
In Condition Select^ Product Attribute -> Category
Open Categories Chooser
Select one Category with level = 1, 2 or 3
Select one Category with level > 3 (4, 5, ...)
Click ok & close Category Chooser
Open again Category Chooser and see
that only categories with level <= 3 are selected
and category with level > 3 without selection
Expected result
All selected priviosly categories must be selected, with level > 3
Actual result
Categories with level > 3 are not selected




### Catalog URL rewrite


<!--- ENGCOM-3438-->* Magento now regenerates product URL rewrites as expected after an administrator changes a product URL key from the Admin and subsequently saves the product attribute URL path value. Previously, product URL rewrites could not be generated after this attribute value was changed. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19170](https://github.com/magento/magento2/pull/19170)*. [GitHub-18532](https://github.com/magento/magento2/issues/18532), [GitHub-5929](https://github.com/magento/magento2/issues/5929)


<!--- MAGETWO-93425-->* 

Permanent Redirect for old URL missing via API or no documentation



https://github.com/magento/magento2/issues/16789


ASK KEVIN


<!--- MAGETWO-91649-->* Magento no longer ignores the store-level `url_key` of child categories when rewriting URLs process for global scope. [GitHub-13513](https://github.com/magento/magento2/issues/13513)

<!--- MAGETWO-91532-->* Magento no longer removes product tier prices when a schedule update contains an update to the special price. 

<!--- MAGETWO-91495-->* You can now save and duplicate a linked product. Previously, Magento did not duplicate the product, and displayed this error, `Invalid data provided for linked products`.

EE ONLY



### Cleanup and simple code refactoring

<!--- ENGCOM-3449-->* The `addExpressionFieldToSelect` method no longer modifies columns and instead insert expression into `_fieldsToSelect` private variable (just as `addFieldToSelect` does). *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [19180](https://github.com/magento/magento2/pull/19180)*. [GitHub-17635](https://github.com/magento/magento2/issues/17635)

<!--- ENGCOM-3240-->* A typo in `app/code/Magento/Deploy/Console/DeployStaticOptions.php` has been corrected. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18733](https://github.com/magento/magento2/pull/18733)*. [GitHub-2686](https://github.com/magento/magento2/issues/2686)

<!--- ENGCOM-3848-->* Fixed alignment of options on the admin edit widget page. *Fix submitted by [Govind Sharma](https://github.com/GovindaSharma) in pull request [20114](https://github.com/magento/magento2/pull/20114)*. [GitHub-20113](https://github.com/magento/magento2/issues/20113)

<!--- ENGCOM-3901-->* Corrected rendering of the apply discount code field in the Tab portrait view of the cart page. *Fix submitted by [Ajay Ajabale](https://github.com/ajay2jcommerce) in pull request [20281](https://github.com/magento/magento2/pull/20281)*. [GitHub-20278](https://github.com/magento/magento2/issues/20278)










<!--- ENGCOM-3899-->* 

*Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [20368](https://github.com/magento/magento2/pull/20368)*. [GitHub-20367](https://github.com/magento/magento2/issues/20367)



In Compare Products page showing horizontal scrollbar In body But It should appear in *table-wrapper comparison* div For mobile device


In Compare Products page showing horizontal scrollbar In body But It should appear in table-wrapper comparison div For mobile device

Step 1: Open frontend
Step 2: Add two any product to Compare and open Compare Products page in mobile
Step 3: Here will be horizontal scroll in body




<!--- ENGCOM-3936-->* 

*Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [20498](https://github.com/magento/magento2/pull/20498)*. [GitHub-20497](https://github.com/magento/magento2/issues/20497)


Fixing the styling issue on customizable options


Steps to reproduce 
Open the product page (new or existing one) in Admin Panel
Add several new Customizable Options
Expected result 
The new added options should have a bottom border, for having a good look

Actual result 
The border is missing for the customizable options




<!--- ENGCOM-3792-->* 

*Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20072](https://github.com/magento/magento2/pull/20072)*. [GitHub-20024](https://github.com/magento/magento2/issues/20024)


Fixed Incorrect position of grid header Design Configuration Grid


Incorrect position of grid header Design Configuration Grid

Open the Design Configuration Grid: Content -> Design -> Configuration

Expected result 
The grid header is displayed above the grid


Actual result
The grid header is displayed below the grid.






<!--- ENGCOM-3558-->* 

*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19390](https://github.com/magento/magento2/pull/19390)*. [GitHub-4136](https://github.com/magento/magento2/issues/4136)


Widget condition with unexpected character not preventing from saving

Expected result
It should display an error about unexpected character and not allow to save the widget
Actual result
Upon saving the widget it display and error on frontend (attached)
When trying to edit the widget it displays an error on backend (attached)





<!--- ENGCOM-3821-->* 

*Fix submitted by [Abrar Pathan](https://github.com/abrarpathan19) in pull request [19817](https://github.com/magento/magento2/pull/19817)*. [GitHub-19816](https://github.com/magento/magento2/issues/19816)




Catalog category merchandiser product list missing move cursor in tile view


Steps to reproduce
Magentoadmin -> Catalog -> Category (Default Category) -> Products in Category -> Select tile view for product design view.

Expected result 
Default cursor on hover product item it should be move cursor on move icon And pointer cursor on close icon



<!--- ENGCOM-3815-->* 

*Fix submitted by [Yashwant Rokde](https://github.com/yashwant2jcommerce) in pull request [20132](https://github.com/magento/magento2/pull/20132)*. [GitHub-20120](https://github.com/magento/magento2/issues/20120)


Review Details Detailed Rating misaligned

Steps to reproduce 
Go to admin>>MARKETING>>Click on Reviews>>Edit reviews




<!--- ENGCOM-3825-->* 

*Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [20160](https://github.com/magento/magento2/pull/20160)*. [GitHub-20158](https://github.com/magento/magento2/issues/20158)



Store switcher not aligned proper in tab view


Steps to reproduce 
Step 1: Go to frontend
Step 2: view in responsive view (device with 991px)
Step 3: Now you will get issue (will appear horizontal scroll)





<!--- ENGCOM-3820-->* 

*Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20168](https://github.com/magento/magento2/pull/20168)*. [GitHub-20140](https://github.com/magento/magento2/issues/20140)


Changes for Product-per-row-not-proper-on-listing-page


Product per row not proper on listing page


Steps to reproduce 
1.In any listing page of version 2.3 for allview
2.No of product per row not proper

Expected result 
1.No of product in desktop view should be 4,for tablet view it will be 3 and for mobile view it should be 2







<!--- ENGCOM-3822-->* 

*Fix submitted by [Ravi chandra](https://github.com/ravi-chandra3197) in pull request [19812](https://github.com/magento/magento2/pull/19812)*. [GitHub-17926](https://github.com/magento/magento2/issues/17926)



Fixed The ui-component field validation error not opening accordion tab that owns the field (field does not get focused)



The ui-component field validation error not opening accordion tab that owns the field (field does not get focused)


The issue of event not triggering properly on every call causes issues with Form Validation 'error' events where certain errors don't get properly highlighted when error message is not set properly or does not change. In case rest of the UI state around the error has been changed, the element that caused the actual error, no longer gets highlighted correctly.

In most typical cases this can be encountered when either:

When editing entities where some previously optional field was changed to be required.
Editing entities that were created by a integration.
... or basically any way you could end up with having entities where required value was reset/blanked in the backend.
The steps provided might feel a bit illogical and odd, but serve still to illustrate the issue; similar,
more serious situations with non-visible errors have been encountered on specific projects with 3rd party modules (mostly relates to integrations and data imports that deliver data where some required fields end up being empty when editing forms in admin).





<!--- ENGCOM-3852-->* 

*Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20214](https://github.com/magento/magento2/pull/20214)*. [GitHub-20210](https://github.com/magento/magento2/issues/20210)

Hamburger Icon was available on a page where menu was not present. Issue in responsive view

Expected result
Hamburger icon should not be there when viewing in responsive view as there is no menu on that page
Actual result 
Hamburger icon is available on the page




<!--- ENGCOM-3842-->* 

*Fix submitted by [Nirav Patel](https://github.com/niravkrish) in pull request [20241](https://github.com/magento/magento2/pull/20241)*. [GitHub-20240](https://github.com/magento/magento2/issues/20240)

Admin - dropdown toggle arrow not working on closing


Add/Edit any product
Click on any dropdown and again click on it closing it.
Array will not rotate on closing





<!--- ENGCOM-3847-->* 


*Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [19986](https://github.com/magento/magento2/pull/19986)*. [GitHub-19985](https://github.com/magento/magento2/issues/19985)



Send email confirmation popup close button area overlapping to content

Step 1: Login to admin panel
Step 2: Go to sales > order grid
Step 3: Edit any order
Step 4: Please click on send email from above links 




<!--- ENGCOM-3798-->* 

*Fix submitted by [David Verholen](https://github.com/davidverholen) in pull request [20094](https://github.com/magento/magento2/pull/20094)*. [GitHub-19052](https://github.com/magento/magento2/issues/19052)


Position order showing before the text box 



Catalog > Category > Choose any category > Go to Product in category tab > Assign products.
You will find the position order showing before the text box.





<!--- ENGCOM-3869-->* 

*Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [20260](https://github.com/magento/magento2/pull/20260)*. [GitHub-20259](https://github.com/magento/magento2/issues/20259)


Store switcher not sliding up and down, only dropdown arrow working


Store switcher not sliding up and down, only dropdown arrow working


Step 1: Go to frontend in mobile device
Step 2: click on toggle in left top corner
Step 3: Go to setting tab and see store switcher and click on label (Ref screenshot)

Expected result 
Dropdown should open and close as arrow working




<!--- ENGCOM-3894-->* 

*Fix submitted by [ranee2jcommerce](https://github.com/ranee2jcommerce) in pull request [20374](https://github.com/magento/magento2/pull/20374)*. [GitHub-20373](https://github.com/magento/magento2/issues/20373)


Order view invoices template not display proper on ipad


In admin Go to Sales -> Orders ->click on view -> check invoices tab under Order view




<!--- ENGCOM-3848-->* 

*Fix submitted by [Govind Sharma](https://github.com/GovindaSharma) in pull request [20114](https://github.com/magento/magento2/pull/20114)*. [GitHub-20113](https://github.com/magento/magento2/issues/20113)


Widget option labels are misalinged

In admin content >> Widgets >> Edit widget >> widget options




<!--- ENGCOM-3891-->* 

*Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20349](https://github.com/magento/magento2/pull/20349)*. [GitHub-19258](https://github.com/magento/magento2/issues/19258)



Incorrect orders updated



Steps to reproduce 
Open order grid in two tabs.
Apply filter of order status in both tabs. Both tabs should show same orders. (ex. pending)
Select first order in first tab and change the status of order(ex. change to hold).
Without refresh select same order in second tab and update status(ex. change to cancel)
Expected result 
It should show exception message saying "Cant update order" or "No order to update" with id






<!--- ENGCOM-3708-->* 

*Fix submitted by [Nirav Kadiya](https://github.com/ssp58bleuciel) in pull request [19788](https://github.com/magento/magento2/pull/19788)*. [GitHub-14712](https://github.com/magento/magento2/issues/14712)


Shipping issue on PayPal Express


Steps to reproduce
Make a Payment using PayPal Express
On the Review Page use a 0.00 Value for a Shipping Method
Summary only shows "Delivery & Handling" but not the Method

Expected result
The Shipping Method should be shown in the Summary.
This is only shown when the Price is not set to 0.00 Value, eg. 0.01



<!--- ENGCOM-3663-->* 

*Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [19646](https://github.com/magento/magento2/pull/19646)*. [GitHub-19645](https://github.com/magento/magento2/issues/19645)


Fixed checkbox alignment account information page



Area Frontend: Account information page checkbox alignment issue

Login into Frontend > Choose Account Information > Look at change email and change password checkbox alignment little bit up.





<!--- ENGCOM-3653-->* 

*Fix submitted by [Abrar Pathan](https://github.com/abrarpathan19) in pull request [19643](https://github.com/magento/magento2/pull/19643)*. [GitHub-19642](https://github.com/magento/magento2/issues/19642)


Admin -> Catalog -> Products -> Open any product -> click onAttribute Set
Expected result 
Search icons should be aligned properly it is a little bit cut from the bottom side.
It should be looking consistency like top search icon. http://prntscr.com/lsaev1

Catalog product action multi select search label icon alignment issue




<!--- ENGCOM-3595-->* 

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19473](https://github.com/magento/magento2/pull/19473)*. [GitHub-19472](https://github.com/magento/magento2/issues/19472)


 Advance Pricing - Customer Group Price , Select box and Text box alignment issue



.Open Catalog > Product > Add/Edit Product
2. Open Advance Pricing



<!--- ENGCOM-3627-->* 

*Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [19574](https://github.com/magento/magento2/pull/19574)*. [GitHub-19573](https://github.com/magento/magento2/issues/19573)


Alignment Issue when create a new email template admin 


Login into admin panel > Marketing > Email Templates > Create new Email template Load any default template. Current used For Alignment issue.



<!--- ENGCOM-3678-->* 

*Fix submitted by [Milind Singh](https://github.com/milindsingh) in pull request [19726](https://github.com/magento/magento2/pull/19726)*. [GitHub-19721](https://github.com/magento/magento2/issues/19721)


There is a typo in SalesRule/Model/ResourceModel/Coupon/Usage.php file.




### CMS content

<!--- MAGETWO-57337-->* 

in deployments with multiple storeviews

Previously, when you switched storeviews, Magento



[GitHub-5077](https://github.com/magento/magento2/issues/5077) 


Store View (language) switch leads to 404

Steps to reproduce

Install Magento 2.0.7
Add several store views e.g. "English", "French", "German"
Create a CMS page for "English" store view - e.g. "About Us" with Url Key about-s
Now create the same CMS page for "French" store view e.g. "À propos de nous" with Url Key a-propos-de-nous
Expected result

I can open "About Us" page
I am redirected to homepage when I switch store view (language) as CMS pages are not linked n any way
Actual result

I can open "About Us" page
404 page is show when I switch store view (language)


Steps to reproduce
Install Magento 2.0.7
Add several store views e.g. "English", "French", "German"
Create a CMS page for "English" store view - e.g. "About Us" with Url Key about-s
Now create the same CMS page for "French" store view e.g. "À propos de nous" with Url Key a-propos-de-nous

Expected result
I can open "About Us" page
I am redirected to homepage when I switch store view (language) as CMS pages are not linked n any way

Actual result
I can open "About Us" page
404 page is show when I switch store view (language)
Product categories are general with possibility to translate them in each store view but CMS pages does not work like that. For CMS pages I would expect that user is redirected to homepage as Magento2 can't know which pages represent the same content in different store view.



<!--- MAGETWO-91559-->* Magento now saves only one block when two blocks have the same ID. Previously, when multiple blocks were created with the same ID, and one block was placed on a page, the other blocks with the ID randomly appeared.

<!--- MAGETWO-94429-->* You can now delete from the media gallery browser any files and folders that are symlinked in `pub/media`. Previously, the Magento left the image in the media gallery but gave you no feedback in the product interface. 


### Configurable products

<!--- ENGCOM-3256-->* The DateTime class can now parse strings for all supported languages, not just English. Previously, converting from string to PHP DateTime object  failed for locales other than `en_US`. *Fix submitted by [Thiago](https://github.com/thiagolima-bm) in pull request [18462](https://github.com/magento/magento2/pull/18462)*. [GitHub-18082](https://github.com/magento/magento2/issues/18082)

<!--- MAGETWO-96594-->* Selected images on the product page of a configurable product are now positioned correctly. [GitHub-18410](https://github.com/magento/magento2/issues/18410)  

<!--- ENGCOM-3136-->* You can now successfully save products  with SKU lengths that are less than or equal to 64 digits. Previously, Magento threw a fatal error when you tried to re-save a child product after reducing the length of its 64-digit-long SKU. *Fix submitted by [Thiago](https://github.com/thiagolima-bm) in pull request [18462](https://github.com/magento/magento2/pull/18462)*. [GitHub-18082](https://github.com/magento/magento2/issues/18082)

<!--- ENGCOM-3674-->* The Cart Sales Rule  now excludes already discounted products from further discounting through a coupon code. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [19343](https://github.com/magento/magento2/pull/19343)*. [GitHub-14020](https://github.com/magento/magento2/issues/14020)

<!--- ENGCOM-3546-->* Translations for `tier_price.phtml` now works as expected. Previouslyy, these translations were not included in `js-translation.json`, and not visible on the storefront. *Fix submitted by [Oleksii Gorbulin](https://github.com/agorbulin) in pull request [19094](https://github.com/magento/magento2/pull/19094)*. [GitHub-19085](https://github.com/magento/magento2/issues/19085)



<!--- MAGETWO-96308-->* 

Configurable "As low As" Product Price Not Updating Correctly

Configurable product shows a minimum price of out of stock product

STEPS TO REPLICATE: 
1. Create a configurable product that is configurable by 2 attributes e.g. colour and size.
2. For this instance that the product is available in the colors Red, Yellow and Blue. 
3. Red come in Small and Medium size, Yellow come in Medium and Large size and Blue only comes in Large.
4. The color attribute should be configured before the size attribute. Ensure that the prices set for each size are different (small: £10, medium: £20, large: £30). 
5. Navigate to the configurable product page. 
6. Select each color to see what as low as price it would show

EXPECTED RESULTS: 
Select the colour Red. The price will say "From £10". 
Select the colour Yellow. The price should say "From £20". 
Select the colour Blue. The price will say "From £30".

ACTUAL RESULTS: 
Select the colour Red. The price will say "From £10" because the cheapest product for Red is a small which is £10. 
Select the colour Yellow. The price will say "From £10". This is incorrect as prices for this colour start from £20 as there is no small variant for this colour. 
Select the colour Blue. The price will say "From £30". This is correct but only because the size has a single option. In my test in clean 2.2.5, Blue shows a slow as price of $10 not $30


### cron

<!--- ENGCOM-3062 -->* A new `cron.log` file dedicated to logging cron-related information has been added to Magento. This new log file reduces output previously sent to the `system.log` file, making it easier to find non-cron-related information in the `system.log` file.  *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18209](https://github.com/magento/magento2/pull/18209)*. [GitHub-17190](https://github.com/magento/magento2/issues/17190)


### Customers



<!--- ENGCOM-3390-->* 

Add additional check if password hash is empty in auth process

Added additional check for password hash if the customer was created without a password from admin area.


Steps to reproduce 
Create user at admin area (without password)
User try to login at frontend

Expected result
Succesful login or option to create password for first time user

Actual result
User cannot login and gets blank page
Server logs shows error and PLAIN USER PASSWORD that he tried to use (very wrong idea)


*Fix submitted by [Yevhenii Dumskyi](https://github.com/progreg) in pull request [19066](https://github.com/magento/magento2/pull/19066)*. [GitHub-19060](https://github.com/magento/magento2/issues/19060)


<!--- ENGCOM-3368-->* 

 can't import external http to https redirecting images by default csv import

 I think we should handle 302 redirection. We should check the next header if there is 302 redirection with url.

Steps to reproduce 

use csv import for products, use http image with redirection to https with 302 status.

it shows error
Imported resource (image) could not be downloaded from external
resource due to timeout or access permissions

Expected result 
Image should be imported in magento2 and added to product

Actual result
Image not gets imported in magento.

*Fix submitted by [Rahul Mahto](https://github.com/rahulwebkul) in pull request [18900](https://github.com/magento/magento2/pull/18900)*. [GitHub-18839](https://github.com/magento/magento2/issues/18839)



<!--- ENGCOM-3351-->* Magento now displays the same order total in  the customer information orders grid and orders grid when an order is placed in a currency other than the base currency. Previously, Magento displayed the wrong order total in the Admin's customer information orders tab. *Fix submitted by [Anuj Gupta](https://github.com/anujwebkul) in pull request [18650](https://github.com/magento/magento2/pull/18650)*. [GitHub-18618](https://github.com/magento/magento2/issues/18618)



<!--- ENGCOM-3372-->*

Magento no longer displays 


Forgot password form should not available while customer is logged in

Steps to reproduce 
From customer login page, click on forgot password link.
After landing on forgot password page again click on customer login link.
Provide correct customer credentials to login for customer.

Expected result 
When some one even intentionally hit your-magento-instance.com/customer/account/forgotpassword/ while customer is login it should redirect to customer dashboard instead of opening forgot password page.

Actual result 
lands to customer forgot password page.


*Fix submitted by [Oleksii Gorbulin](https://github.com/agorbulin) in pull request [19026](https://github.com/magento/magento2/pull/19026)*. [GitHub-18256](https://github.com/magento/magento2/issues/18256)


<!--- ENGCOM-3387-->* The reset password link in the password reset mail sent to customers when they click **Reset password** on the login page now permits customers to reset their password as expected.  *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19026](https://github.com/magento/magento2/pull/19026)*. [GitHub-18256](https://github.com/magento/magento2/issues/18256)


<!--- ENGCOM-3014-->* Magento now maintains alphabetical order for customer groups when you filter customers by group in the Admin.  Previously, groups were sorted by ID. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18117](https://github.com/magento/magento2/pull/18117)*. 



<!--- ENGCOM-3068-->*

Merchants can now edit

Fix the issue with customer inline edit when password is expired

The issue appeared because of the success, notice and warning messages considered as error ones.

Cannot edit customer using inline edit if password is expired

Steps to reproduce
Set admin/security/password_is_forced to 0 (Recommended).
Make sure Password Lifetime is past so the message It's time to change your password. is shown.
Open customer grid and try to edit and save using inline editor.
Expected result
Customer is saved.
Actual result
Above grid the message It's time to change your password. is shown

*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18308](https://github.com/magento/magento2/pull/18308)*. [GitHub-18162](https://github.com/magento/magento2/issues/18162)




<!--- MAGETWO-95692-->* 


When you set up a custom customer address attribute and set it to be displayed in the Columns list, Magento now displays the value as expected in the column for that attribute. 

Previously, Magento added the customer code column to the Custoer table, but left these columns blank.



Value of Customer Address Attribute is not shown in the Customers grid

If you set up a custom customer address attribute and set it to be displayed in the Columns list, the column for that attribute will not show the value even though it is saved on the customer's address.

And if you look at the customer_grid_flat table, you will see that the attribute's value isn't copied over

Expected Result
Customer code column added to Customer Grid and value RB111 displayed against customer record

Actual Result
Customer code column added to Customer Grid and all values are blank






<!--- MAGETWO-91704-->* 

You can now change payment methods after selecting store credit when creating an order from the Admin. Previously, when you 

Can't cancel/change payment method after chosen Store Credit

teps.
Login to Admin
Navigate Sales > Orders
Click Create Order
Select created customer
Fill all required fields for order
Use Store Credit
Select shipping method
 ACTUAL RESULTS
Options of Payment Method becomes unavailable and show "No Payment Information Required"

 EXPECTED RESULTS
Options of Payment Method continue to be available




<!--- MAGETWO-91644-->* 

In a multi-site setup, customers are not matched in Customer Segments based on Number of Orders

ISSUE:
In a multi-site configuration, if you create a customer segment based on Number of Orders, those eligible customers are not matched.

Partner inserted a log in the class:
Magento\CustomerSegment\Model\Segment\Condition\Sales\Combine
in the method 
public function getSatisfiedIds($websiteId)
before 
$result = $this->orderResource->getConnection()->fetchCol($select);
to check how it builds the query and verified that the website id is not quoted into the query:

SELECT sales_order.customer_id FROM sales_order
INNER JOIN store ON sales_order.store_id=store.store_id WHERE (sales_order.customer_id IS NOT NULL) AND (store.website_id IN ('')) GROUP BY sales_order.customer_id HAVING (IF(COUNT= 0, 1, 0))

The segment does not work even if the number of orders is set to greater than zero, they believe it's also because of the problem of website ids.

They have also attached the record that magento saves on the magento_customersegment_segment table: magento_customersegment_segment.sql

STEPS TO REPLICATE:

Set up 2 different websites
Create a new customer account on any website and place an order there
Create the following rule (see attached)
If ALL of these conditions are TRUE :
Total Number of Orders is 0 while ANY of these Conditions match
Check the Matched Customers tab
Try changing the number of orders to 1 and check the results
EXPECTED RESULTS:
The new customer without any orders should be returned by the Customer Segment





<!--- MAGETWO-95925-->* 

We've improved the performance 

Customer segment rule causes performance issues on the high loaded merchant's store

fix issue with speed loading when used customer segment rule

ISSUE:
The site is responding very slowly, preventing the merchant from updating products or the customers from making a purchase.

We have provided a patch MDVA-9429 which is based on MAGETWO-91000 (merged into 2.2.6). However, it didn't help to solve performance issues.

ACTUAL RESULT: 
Login time will increased to 1 second in comparison with case when segment rule will be inactive. If you take a look into var/debug/db.log you will see a big query:

EXPECTED RESULT: 
Login time shouldn't be increased or must be decreased.



<!--- MAGETWO-96007-->* Magento no longer unchecks the default billing and shipping address checkboxes when you create or update a customer address using the API. 

<!--- MAGETWO-94347-->* Magento now displays the list of additional customer addresses contained in the storefront customer address book  as a grid, which has improved performance for customers with many additional addresses associated with their accounts. 

<!--- MAGETWO-91720-->* When a customer uses a gift card to make a purchase, Magento now applies only the applicable amount to the invoice. Previously, the total amount of the gift card was applied to a customer's store credit for a partial invoice.

<!--- MAGETWO-97397-->* Magento now assigns new accounts in multisite deployments  to the customer group that is associated with the default website scope. Previously, a new customer created from the Admin  had their customer group set to the default customer group on the default website scope.


<!--- ENGCOM-3056-->* 


<!--- ENGCOM-4028-->* 

*Fix submitted by [Amol Chaudhari](https://github.com/amol2jcommerce) in pull request [20725](https://github.com/magento/magento2/pull/20725)*. [GitHub-20723](https://github.com/magento/magento2/issues/20723)


My-account-page-title-extra-space-on-mobile




<!--- ENGCOM-3981-->* 

*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [20630](https://github.com/magento/magento2/pull/20630)*. [GitHub-19139](https://github.com/magento/magento2/issues/19139)


Empty block rendering in My Account page sidebar fixed using designing changes


When you log in Magento 2.3 you can see a space 2x more than expected created by a block rendered without content.







### Customer attributes

<!--- ENGCOM-3181-->*

Previously, directly saving customer information resulted in data loss. 

Fix Customer custom attributes lost after save 

The customer model has an attribute attribute_set_id that links to its attribute set. It is used while saving, as there is a check to see if its attributes are in the set or not, using this link.
We want to avoid a null attribute_set_id.

Saving Customer Model directly causes loss of data

When saving a customer directly using the Customer Model custom attribute data is lost. This occurs when EAV caching is disabled. It appears you can get around this issue by using the Customer Repository or updateData function of the Customer Model. However, even though save is deprecated I would still expect it to work and looking into this has raised some concerns.
 
What I have found is that when saving directly some attribute set information is missing on the model, if we have a look at the aforementioned updateData function or the Customer Repository save function we see an acknowledgment of this issue in the form of a comment:







*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18571](https://github.com/magento/magento2/pull/18571)*. [GitHub-12479](https://github.com/magento/magento2/issues/12479)





<!--- MAGETWO-96845-->* Magento now loads the customer attribute page as expected, and users can edit attributes, when attributes are set to default values. Previously, Magento did not completely load this page when attributes values were set to default. 

<!--- MAGETWO-66872-->* Customer address attributes are now marked **required** as expected when the **Values Required** setting is overriden on website scope. 

<!--- MAGETWO-64838-->* You can now successfully create an order from the storefront when the customer address custom attribute is set to **required**. 

<!--- MAGETWO-70968-->* Custom customer address attributes can now be updated when you edit an order's billing address in the Admin.

<!--- MAGETWO-96124-->* Magento no longer clears custom customer attributes when a customer's attempt to create a customer account fails. Previously,  Magento cleared these attributes when displaying an error messsage after a customer enters invalid information during account creation. 





### Dashboard

<!--- MAGETWO-95299-->* You can now upload PDP images larger than 1920x1200  without compressing and downsizing the images first. Previously, when a merchant uploaded a high quality product image (larger than 1920X1200), Magento resized and compressed the image. Merchants can now set requirements for resizing and compression as well as compression quality and target width and height. 



<!--- MAGETWO-96975-->* UNRESOLVED

Remove `_sleep` and `__wakeup` from code

PHP serialization is discouraged so `__sleep` and `__wakeup` methods were removed and a new PHP.MD rule added to prevent people from adding new ones






NEW FEATURE



<!--- ENGCOM-3857-->* 

*Fix submitted by [dipti2jcommerce](https://github.com/dipti2jcommerce) in pull request [20262](https://github.com/magento/magento2/pull/20262)*. [GitHub-20261](https://github.com/magento/magento2/issues/20261)


My-Accounttele-phone-field-require-no-validation-appear

In My Account dashboard page when we create new address from address book telephone field is require,but no validation appear while submission



In My Account dashboard page when we create new address from address book telephone field is require,but no validation appear while submission






### Developer

<!--- ENGCOM-3364-->*
Missing $debugHintsPath when sending email via command

Steps to reproduce
Create a console command that sends an email, where the email also loads in another block like {{layout handle="sales_email_order_items" order=$order area="frontend"}}
Expected result
Email should send without error.
Actual result
Email fails with error

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [18988](https://github.com/magento/magento2/pull/18988)*. [GitHub-10440](https://github.com/magento/magento2/issues/10440)


### Downloadable

<!--- ENGCOM-3384-->*

save downloadable product links for order items

Fix save of downloadable links for guest checkout.
During research was found another issue: #19034 which the main reason that problem has appeared.
Events are moved from 'save_commit_after' to 'save_after' to resolve the issue and keep downloadable links save in scope of Sales Order Save transaction.



*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [19040](https://github.com/magento/magento2/pull/19040)*. [GitHub-18323](https://github.com/magento/magento2/issues/18323)

*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [19040](https://github.com/magento/magento2/pull/19040)*. [GitHub-19003](https://github.com/magento/magento2/issues/19003)

*Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [19040](https://github.com/magento/magento2/pull/19040)*. [GitHub-19034](https://github.com/magento/magento2/issues/19034)


<!--- ENGCOM-3320-->*


1.Create new downloadable product

2. Go to "Downloadable Information" tab > Click on "Add link" button for Links and Samples as well, You will see the table header will be messy.



*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18856](https://github.com/magento/magento2/pull/18856)*. [GitHub-18854](https://github.com/magento/magento2/issues/18854)


 
<!--- MAGETWO-91711-->* 

Unable to delete downloadable product links if sample links are not deleted

When creating a downloadable product, if you add a main link and a sample link, the main link cannot be deleted unless the sample link is deleted with it.

EXPECTED RESULTS:
The link is deleted or an error message saying that the sample file must be deleted as well.

ACTUAL RESULTS:
The link is not deleted.




### EAV 

<!--- ENGCOM-3236-->*

Prevent exception when option text converts to false


OptionManagement.validateOption throws NoSuchEntityException for "0" option label

1 Create a product attribute of 'dropdown' type via admin page with one option (Admin value: 0, Default Store View value: 0)
2 Programmatically delete the option using OptionManagement.delete method

Expected result
The option should be delete w/o any errors

Actual result
NoSuchEntityException with message Attribute <somecode> does not contain option with Id <someId> is thrown

*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [18720](https://github.com/magento/magento2/pull/18720)*. [GitHub-13083](https://github.com/magento/magento2/issues/13083)


<!--- ENGCOM-3045-->*

Don't set a source model on the attribute when it's not needed. this avoids accidentally persisting the source model to the database when using multiselect attributes.

This removes calling a setter (setSourceModel) inside a getter (getSource ) which is considered bad practice, since it changes state of an object, and a getter shouldn't change the state of an object.

When updating an eav attribute's options through the API, the source_model of the attribute will be set to 'Magento\Eav\Model\Entity\Attribute\Source\Table'. Not only is this unwanted, it also completely destroys the ability to update this attribute's options through the backend.



*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18244](https://github.com/magento/magento2/pull/18244)*. [GitHub-13156](https://github.com/magento/magento2/issues/13156)


<!--- ENGCOM-3124-->* MAGENTO-18131

Fixed EAV attributes values query

Entity Type ID at Join

Steps to reproduce
Create new Entity Type with InstallData Script. Use eav_entity table as entity table with some random attributes.
Create Default EAV Model, ResourceModel and Collection
Use collection, addFieldToSelect of one of the attributes and load them.
Expected result
Entries with added attribute
Actual result
Integrity constraint violation:

*Fix submitted by [Roman Strelenko](https://github.com/strell) in pull request [18437](https://github.com/magento/magento2/pull/18437)*. [GitHub-18131](https://github.com/magento/magento2/issues/18131)


<!--- MAGETWO-95819-->* Customer registration fields are now translated as expected in multistore deployments that run  multiple locales.




<!--- MAGETWO-94848-->* You can now use an attriute set on the product create page after moving the attributes from one attribute group to another.


<!--- ENGCOM-3814-->* 

*Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [20130](https://github.com/magento/magento2/pull/20130)*. [GitHub-20030](https://github.com/magento/magento2/issues/20030)


Customer EAV Decimal Attribute required allow 0 


Create a new required customer attribute of type decimal with a default of 0 e.g.


Attempt to create a customer on front-end, or attempt to assign the value of 0 through the API.

Expected result 
Customer attribute should be set with a 0 value.

Actual result 
Both of these fail with [Attribute] is a required value.


<!--- ENGCOM-3797-->* 

*Fix submitted by [David Verholen](https://github.com/davidverholen) in pull request [20096](https://github.com/magento/magento2/pull/20096)*. [GitHub-19054](https://github.com/magento/magento2/issues/19054)


Using Media Image custom attribute type could not display on frontend. 




### Email







<!--- MAGETWO-91521-->* 

Reports / Sales / Tax report show incorrect amount

Add two or more tax rates for the same zip code at different rates, ex 7.25 and .125.
Create an order in that zip code.
View Tax report.

Actual result: see bug_in_reports.png 
Expected result: taxreport.png . 


<!--- MAGETWO-95137-->* 

Return path e-mail variable system/smtp/return_path_email doesn't work

Merchant reports that return path is not working when specified on 2.2.3 I have tested it and the email address on the return path is not what was specified. Please advise


<!--- ENGCOM-3744-->* 

*Fix submitted by [Alexey Varlamov](https://github.com/4lexvav) in pull request [19978](https://github.com/magento/magento2/pull/19978)*. [GitHub-19977](https://github.com/magento/magento2/issues/19977)


Set correct email message encoding

E-Mail subject not showing utf-8 characters.


Expected result
Email subject should contain the "Ő" letter in its subject.
Actual result
Email subject contains question mark: 







### Frameworks




<!--- ENGCOM-3425-->* 

Allow to read HTTP/2 response header in curl client

This change fixes ability to read response from third-party servers that use HTTP/2 if your server use HTTP/2 too.


The issue is HTTP/2 sends the following headers HTTP/2 200, HTTP/2 401 and so on. It doesn't have third parameter like HTTP/1.1 has: HTTP/2 200 OK

Cannot connect to Magento 2 market place

Preconditions 
When going to websetup wizard, enter the private and secret key to login to magento market place to install extension
can't login getting error 200

Actual result
[Screenshots, logs or description]


*Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request [19143](https://github.com/magento/magento2/pull/19143)*. [GitHub-19127](https://github.com/magento/magento2/issues/19127)


<!--- ENGCOM-3117-->* 

throw exception InvalidArgumentException during validate scheme

Communication's component validator does not propagate exceptions, obscuring the cause of the error

It was quite hard to understand the issue with my request schema until I went into Magento\Framework\Communication\Config\Validator and changed exception instantiation from new LogicException($message) to new LogicException($message, 0, $e). My issue was to do with this in the end: Each getter must have a doc block. It would be better if it was possible to see that error message out of the box, but instead I was only seeing Request schema definition for topic "..." should reference existing service class. Given ... (while the class obviously existed).



*Fix submitted by [Artsiom Bruneuski](https://github.com/ArtsiomBruneuski) in pull request [18416](https://github.com/magento/magento2/pull/18416)*. [GitHub-14555](https://github.com/magento/magento2/issues/14555)




<!--- MAGETWO-97040-->* 

Magento Framework Escaper - Critical log with special symbols

ISSUE:
The error verified in ENGCOM-102 occurs after changing the Store View name to include a special character like & which doesn't get escaped properly

STEPS TO REPLICATE:

Created one order from frontend
Go to Stores > All Stores and click on "Default Store View"
Change Name field to "Default & Store View"
Click "Save Store View" button
Go to Sales > Orders > and view the new order
Check the exception.log

EXPECTED RESULT: 
No errors in the exception.log

ACTUAL RESULT: 
Error



<!--- MAGETWO-96342-->* 

MySQL connection issue

Some of the merchants create the queue consumers which by default should process 10000 messages max_messages.
In this case consumer process might excides the default net_read_timout or interactive_timeout (8 hours, ie. 28800 seconds).
After this mysql server closes connection, and php process get an fatal PDOStatement::execute() failed with errno=32 Broken pipe in case when Magento connected ower the socket. Or PDOStatement::execute(): MySQL server has gone away and Magento do not make an attempt to recconect.

STEPS TO REPLICATE
Decrease MySql interactive_timeout, net_read_timout, net_write_timeout and wait_timeout to 20 seconds
Enable xdebug, and put breakepoint somewhere between requests to the DB
Waite for 20-21 seconds and release xdebug execution
 ACTUAL RESULT
PHP shows an error and Magento do not make an attempt to reconnect.

 EXPECTED RESULT


 Magento should make an attempt to reconnect, non errors should be shown.






<!--- MAGETWO-94089-->* 

Quans: How to bulk updated Set Product as New to No

Merchant would like to set all product that currently have Set Product as New = Yes to No. Bulk updates, CSV imports and scheduled update does not have this available. Bulk updates allow to modify the New From and New To dates but not the setting from Yes to No.

STEPS TO REPLICATE:

Install Magento EE version.
Go to Catalog > Products > Select mulitple products
Go to the Actions drop-down menu > Update Attributes
Try to "Set Product as New" to "Yes" or "No"
Actual Result:

"Set Product as New" option is missed
"Set Product as New from Date" and "Set Product as New to Date" options are present instead, which cannot be used in EE version, because it contradicts to "Scheduled Update" functionality.
EXPECTED RESULTS:

"Set Product as New" option is present it is possible to set it to "Yes" or "No".
"Set Product as New from Date" and "Set Product as New to Date" are removed.
When merchant set "Set Product as New" = "Yes" in bulk update, then only current versions of the selected products are updated, future scheduled updates ones and rollback versions are not updated.  
Please note this should be fixed only for EE version.

EE ONLY





<!--- MAGETWO-95415-->* 

Can't generate Plugin if object method returns self

Fixed issue with an error when generate plugin if object method returns self

Can't generate plugin class if an injected object has o method with return value as self.

Steps: 

add return value as self into some plugin  realization for example \Magento\CatalogInventory\Model\ResourceModel\Stock\Item
regenerate a code
open generated plugin class ex. Magento\CatalogInventory\Model\ResourceModel\Stock\Item\Interceptor
 Actual result: 

plugin generated with syntaxis errors
Expected result:

plugin generated without syntaxis errors with return type as extended class 



<!--- MAGETWO-95838-->* Attributes in flat tables are now updated after the product is saved when the catalog product flat index is turned on and the indexer is set to **Save on Update**. 


<!--- ENGCOM-3538-->* 

*Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [19350](https://github.com/magento/magento2/pull/19350)*. [GitHub-18949](https://github.com/magento/magento2/issues/18949)


local themes should be added to git repo






<!--- ENGCOM-3295-->* 

*Fix submitted by [Rus0](https://github.com/Rus0) in pull request [18849](https://github.com/magento/magento2/pull/18849)*. [GitHub-17753](https://github.com/magento/magento2/issues/17753)


Autoload for vendor root folders


Magento cannot run with custom Composer vendor directories

When using the COMPOSER_VENDOR_DIR setting to specify a vendor path outside of the Magento installation root, Magento's autoloader registration fails to generate the correct path.



<!--- ENGCOM-3471-->* 

*Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [19134](https://github.com/magento/magento2/pull/19134)*. [GitHub-19099](https://github.com/magento/magento2/issues/19099)


 Link is not correctly shown as Current if contains default parts 


Steps to reproduce 
Add a new link to the customer account navigation using layouts
For path use the default part index, example: vault/index/index/

Open the customer dashboard
Go to the new added link (Demo Link)
Expected result 
The link is marked as current

Actual result 
The new added link isn't marked as current link

<!--- ENGCOM-3483-->* 

*Fix submitted by [gmachure](https://github.com/gmachure) in pull request [19249](https://github.com/magento/magento2/pull/19249)*. [GitHub-19247](https://github.com/magento/magento2/issues/19247)


php 7.2 error : Countable interface not implemented


We created a custom module with ui component form with a file upload field. While the upload, the method `_setUploadFileId from vendor/magento/framework/File/Uploader.php` generate a warning because Countable interface is not implement for a string (PHP version : 7.2.12).
`$file[0] is a string and not an array. So count($file[0])` generate an error.

Previously, Magento threw this error, Error Message : Warning: count(): Parameter must be an array or an object that implements Countable in <base_dir>/vendor/magento/framework/File/Uploader.php on line 550


<!--- ENGCOM-3626-->* 

*Fix submitted by [suryakant](https://github.com/suryakant) in pull request [19580](https://github.com/magento/magento2/pull/19580)*. [GitHub-19579](https://github.com/magento/magento2/issues/19579)



Input type import file alignment issue


Steps to reproduce
Login into admin panel > System >Choose Import > Select any Entity Type > Select File to Import aligment issue.




<!--- ENGCOM-3243-->*

*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [18648](https://github.com/magento/magento2/pull/18648)*. [GitHub-17680](https://github.com/magento/magento2/issues/17680)


Our custom profiler records are now executed in less than second together or not executed at all:


Write intercepted mapping to generated/metadata during compilation


 Interception Cache compilation useless

Previously, Profiled methods above consume about 70% of first page load after cache:flush (via CLI or from admin pannel). E.g. page takes 20 seconds to load. 14 sec is used by 3 above methods.



<!--- ENGCOM-3535-->* 

Customer last name is encoded twice in the XML interface

https://github.com/magento/magento2/issues/18361

Expected result
The customer_lastname tag should contain Foo &amp; Bar Corp

Actual result
The customer_lastname tag contains Foo &amp;amp Bar Corp



<!--- ENGCOM-3846-->* 

*Fix submitted by [Milind Singh](https://github.com/milindsingh) in pull request [20248](https://github.com/magento/magento2/pull/20248)*. [GitHub-20064](https://github.com/magento/magento2/issues/20064)


Magento widgets source models forced to use deprecated interface



\Magento\Framework\Option\ArrayInterface, is marked as deprecated, and \Magento\Framework\Data\OptionSourceInterface should be the replacement.



#### Cache framework

<!--- MAGETWO-64282-->* Problems with cache-cleaning for product pages for simple  products associated with configurable products  have been resolved. and as a result, product pages now now accurately display out-of-stock status.  Previously, when an associated product went out-of-stock, Magento did not update the product page of the configurable product unless you cleaned the cache. [GitHub-8009](https://github.com/magento/magento2/issues/8009)

EE ONLY

<!--- MAGETWO-95853-->* The images cache can now be flushed from the Admin (**Admin** > **System** > **Cache Management** and click **Flush Catalog Images Cache**). Previously, you could not delete the directory, and Magento displayed an error on the cache management page. 

<!--- MAGETWO-91694-->* Magento now removes disabled products as expected from the flat product table when **Catalog Flat Product** is enabled. 




#### Configuration framework

<!--- MAGETWO-97247-->* 



Impossible to enable shared catalog through cli command

It is impossible to enable shared catalog using config:set cli command. This command enable config option in db, but associated event is not triggered. As result, shared catalog was enabled, but needed permissions was not created.

ACTUAL RESULT:
Shared catalog config property was set, but category permissions was not generated.

EXPECTED RESULT:
Shared catalog was enabled properly.


#### CSS framework

<!--- ENGCOM-3643-->* 

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19659](https://github.com/magento/magento2/pull/19659)*. [GitHub-19657](https://github.com/magento/magento2/issues/19657)


Select Option Space issue into backend


alignment  issues on Manage coupon Codes page in Admin


<!--- ENGCOM-3573-->* 

*Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [19413](https://github.com/magento/magento2/pull/19413)*. [GitHub-19379](https://github.com/magento/magento2/issues/19379)


Tax Rate Checkbox alignment issue


Steps to reproduce 
Login into admin panel > Stores > Tax Rules > Click on Add New Tax Rule > Click on Add New Tax Rate
Alignment Issue "Zip/Post is Range" Checkbox.
'
fixed alignment issue in 


<!--- ENGCOM-3571-->* 

*Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [19414](https://github.com/magento/magento2/pull/19414)*. [GitHub-19371](https://github.com/magento/magento2/issues/19371)


Attribute Heading border misaligned

Login to admin panel > Stores > Attribute sets > choose any attribute.
Edit Attribute set name heading border.

<!--- ENGCOM-3966-->* 

*Fix submitted by [Priti](https://github.com/priti2jcommerce) in pull request [20196](https://github.com/magento/magento2/pull/20196)*. [GitHub-20176](https://github.com/magento/magento2/issues/20176)



Confirmation pop-up at mobile view not proper

Steps to reproduce
Add product into cart
remove product from minicart
pop-up not showing proper at mobile view

popup size is now correctly sized and all text visible




#### Data framework

<!--- ENGCOM-3268-->* 

Added form fieldset before html data to \Magento\Framework\Data\Form\Element\Fieldset in getElementHtml() method 

In \Magento\Framework\Data\Form\Element\Fieldset class, there is not called the getBeforeElementHtml() method in getElementHtml(). This stops developers from adding needed information before the fieldset in a easy way.




*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [18798](https://github.com/magento/magento2/pull/18798)*. [GitHub-2618](https://github.com/magento/magento2/issues/2618)




#### Event framework

<!--- ENGCOM-3442-->* 

Improvement the validation of the eav entity attribute

This additional validation, is checking for allowed characters within an eav attribute code, which allows only letters, number, underscores and the first character should be a letter.

<!--- ENGCOM-3422-->* 


*Fix submitted by [Lisovyi Yevhenii](https://github.com/lisovyievhenii) in pull request [19146](https://github.com/magento/magento2/pull/19146)*. [GitHub-15931](https://github.com/magento/magento2/issues/15931)


#### JavaScript framework

<!--- MAGETWO-56813-->* Wishlist names can now contain apostrophes. Previously, a wishlist whose name contained an apostrophe could not be edited or deleted. 



#### Message framework

<!--- MAGETWO-91717-->* Module names can now contain numbers. Previously, `magento/framework-message-queue/etc/queue_base.xml` contained a pattern that did not allow numbers to be used in `instanceType`, which resulted in the invalidation of custom message consumers in this file.




### General fixes

<!--- ENGCOM-3198-->* The navigation arrows in fotorama now stay visible after you close the zoomed fotorama. *Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18590](https://github.com/magento/magento2/pull/18590)*. [GitHub-18585](https://github.com/magento/magento2/issues/18585)

<!--- ENGCOM-3239-->* You can now customize the view of tab and accordion components by using mixins to redefine the default variables in the scope of a custom theme. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18730](https://github.com/magento/magento2/pull/18730)*. [GitHub-18729](https://github.com/magento/magento2/issues/18729)

<!--- ENGCOM-3489-->* Content in  confirmation popups on th Admin no longer overlap the **Close** button.    *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [19264](https://github.com/magento/magento2/pull/19264)*. [GitHub-19263](https://github.com/magento/magento2/issues/19263)

<!--- ENGCOM-3346-->* You can now update database credentials from the command line in non-interactive mode using `bin/magento setup:config:set`. *Fix submitted by [aheadWorks Capital SIA](https://github.com/aheadWorks) in pull request [18970](https://github.com/magento/magento2/pull/18970)*. [GitHub-18965](https://github.com/magento/magento2/issues/18965)


<!--- ENGCOM-3389-->* 

Use in Layered Navigation: Filterable (no results)" property confuse for Price filter

No issues were fixed - only adjusted "Use in Layered Navigation: Filterable (no results)" property note/comment to make it more understandable and dismiss confusion about its effect on Price attribute/filter




I'm trying to set Filterable (no results) for price attribute but it's not working.
There is below note for Use in Layered Navigation setting of product attribute at the backend.
Can be used only with catalog input type Dropdown, Multiple Select and Price.
So I hope it should work for Price attribute too.

Steps to reproduce
Goto: Stores > Attributes > Product
Search price attribute and edit it.
In "Storefront Properties" tab, and set Use in Layered Navigation to Filterable (no results)
Go to category view page.
Apply any other filter like color, size etc except price.
Expected result
All price range links will appear for all values, whether the number of results is zero or greater.
Actual result
Appear only those price range links where the number of results is greater than zero. Other links are removed from layered navigation.


*Fix submitted by [Vladyslav Podorozhnyi](https://github.com/vpodorozh) in pull request [19037](https://github.com/magento/magento2/pull/19037)*. [GitHub-14007](https://github.com/magento/magento2/issues/14007)


<!--- ENGCOM-3165-->* The error message displayed on the Add Product Attribute page has been improved 

Misleading error in Add Product Attribute screen

Updating error message for misleading error in add product attribute code 

Updating validate_code error message to more understandable form i.e initially it was "Please use only letters (a-z), numbers (0-9) or underscore () in this field, and the first character should be a letter" now it is "Please use only lowercase letters (a-z), numbers (0-9) or underscore () in this field, and the first character should be a letter"



*Fix submitted by [Aman Agarwal](https://github.com/aman3103) in pull request [17800](https://github.com/magento/magento2/pull/17800)*. [GitHub-17754](https://github.com/magento/magento2/issues/17754)


<!--- ENGCOM-3209-->* The datepicker icon is now correctly aligned in the Admin. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [18627](https://github.com/magento/magento2/pull/18627)*. [GitHub-18605](https://github.com/magento/magento2/issues/18605)

<!--- ENGCOM-3224-->* The magnifier now disappears as expected when a user moves their cursor off an image. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [18702](https://github.com/magento/magento2/pull/18702)*. [GitHub-15035](https://github.com/magento/magento2/issues/15035)

<!--- MAGETWO-91745-->* Product pages that are included in a related products rule that uses a Price (percentage) condition now load correctly. Previously, loaded pages were blank.

<!--- MAGETWO-96405-->* Magento now displays the appropriate thumbnail image for configurable products in requisition lists. Previously, Magento displayed the deafult placehiolder thumbnal image for all configurable products.  


<!--- ENGCOM-3231 3258-->* 

*Fix submitted by [Peter O'Callaghan](https://github.com/pocallaghan) in pull request [18412](https://github.com/magento/magento2/pull/18412)*. [GitHub-18357](https://github.com/magento/magento2/issues/18357)


SQL error when table prefix used

Hard-coded table names cause errors if a table prefix, passing the table name to getTable resolves this.


checkout_agreement_store doesn't exist

Steps to reproduce
Starting from Magento CE 2.2.5
created a terms and conditions (Store-->Terms and conditions)
upgrade from 2.2.5 to 2.2.6
The Terms and conditions created are not visible in admin (Store-->Terms and conditions)
Expected result
I can edit the old terms and conditions
I can insert a new terms and conditions
Actual result
old terms and conditions are not visible
In production mode I can add a new terms and conditions but is not visible in admin
In developer mode there is an exception:



<!--- ENGCOM-3763-->* 

*Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [19803](https://github.com/magento/magento2/pull/19803)*. [GitHub-19800](https://github.com/magento/magento2/issues/19800)


Corrected the alignment of Contact us area accessed from the footer. 



Steps to reproduce 
Go to frontend > choose to contact us link from footer link.




<!--- ENGCOM-3588-->* backend

*Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [19302](https://github.com/magento/magento2/pull/19302)*. [GitHub-19285](https://github.com/magento/magento2/issues/19285)


Notification page Select Visible items 


On Notification page Select All and Select Visible both works same

Steps to reproduce 
Login to Magento Admin.
Select Notifications (Bell Icon from right top of the screen).
Click on "See All".
Default paging is set to 20 rows per page.
Make sure you have more than 20 notifications so that you can have paging available and some notification are on next pages.
Now from Mass Action dropdown select "Select All" action. This will select only visible notifications (currently 20, as 20 rows per page is setup) instead of all available records.

Actual result 
Only visible (20) records were got selected instead of 137.




### Gift cards

<!--- MAGETWO-95817-->* 


Previously, you could not place 

Magento displayed this message, `Please correct the gift card code`.

Valid Gift Card Account G is generated
Customer Account C
Purchasable Product P
STEPS
Log in as C to Storefront
Add P to Cart
Go to Cart page
Apply G code
Go to My Account > Gift Card page
Redeem G
Go to Cart page
Click Proceed to Checkout
Try to place the Order

ACTUAL RESULT
 "Please correct the gift card code" error message is displayed and the Order can't be placed though Gift Card details seems to be absent on Checkout

EXPECTED RESULT
 Order is successfully placed without G applied



<!--- MAGETWO-91700-->* Magento now consistently validates gift card prices according to the constraints of the relevant store locale. 

<!--- MAGETWO-91611-->* Magento now displays the correct creation date for a gift card when the **Lifetime** field is populated. 


EE ONLY

<!--- ENGCOM-3379-->* 

*Fix submitted by [Abrar Pathan](https://github.com/abrarpathan19) in pull request [19053](https://github.com/magento/magento2/pull/19053)*. [GitHub-18887](https://github.com/magento/magento2/issues/18887)


Magento backend Notifications counter round icon small cut from right side
Login into admin check notifications counters from the top right side.








<!--- ENGCOM-3624-->* 

*Fix submitted by [rbayet](https://github.com/rbayet) in pull request [19583](https://github.com/magento/magento2/pull/19583)*. [GitHub-19291](https://github.com/magento/magento2/issues/19291), [GitHub-16302](https://github.com/magento/magento2/issues/16302)



The issue #16302 has been fixed both in 2.2.x and 2.3.x lines but only the fix in 2.2.x is BC compatible by providing and "old_path : new_path" mapping in the requirejs-config.js.

This means any reference to 'Magento_Payment/transparent' in a third party extension's JS component define() dependency will point correctly to 'Magento_Payment/js/transparent'.

On the other hand, in the 2.3.x line, the changes are simply 


Some JS files are direct children of web rather than web/js. This does not follow instructions from the dev docs thus is confusing.





<!--- ENGCOM-3632-->* 

*Fix submitted by [Nazar](https://github.com/Nazar65) in pull request [19135](https://github.com/magento/magento2/pull/19135)*. [GitHub-18941](https://github.com/magento/magento2/issues/19291), [GitHub-16302](https://github.com/magento/magento2/issues/18941)


Calling getCurrentUrl on Store will wrongly add `"___store"` parameter

I have the config "store code in URL" set to "yes" but when i use the method "getCurrentUrl" on a Store type variable i get the current URL but with the parameter `"___store=[code]"` in it, if the current store is not the one requested in the URL.
I want to use the getCurrentUrl method in order to redirect the user to the correct store based on some custom logic (like the browser language), but i don't want any additional parameters to be in the URL.
Form what i found out by looking around in the code, the parameter `"___store"` is mandatory when the config "use store code in URL" is set to "no" but not when it's set to "yes", as in my case. The store code is already in the URL (as set in system config) and it's not necessary to add any other parameters in the URL to remark this.


<!--- ENGCOM-3644-->* 


*Fix submitted by [Ravi chandra](https://github.com/ravi-chandra3197) in pull request [19663](https://github.com/magento/magento2/pull/19663)*. [GitHub-15922](https://github.com/magento/magento2/issues/15922)

Fixed Click for price in home page not work 



Steps to reproduce
Background merchandise edit product such as sample data (SKU:24-WB04) Added Manufacturer's Suggested Retail Price, which is higher than the price of the product.
Add Catalog Product List widget to home page.
Expected result
Click for price should click.


### Gift message

<!--- MAGETWO-67269-->* 



Gift Options set to no still show up as choices on front end order page

MErchant reported that when a order is set to multiple addresses it presents the gift options. What was found is if on the backend one of the gift options are set to yes it will present that option along with the "Allow Gift Messages on Order Level" option and the "Allow Gift Messages for Order Items" even if they are set to no on the backend. If all of the gift options are set to no, then none of the options will show on the front end.

Go to front end and put a few items in the cart
Go to cart and click on "Check Out with Multiple Addresses"
login to the account 
click on "Go to shipping information"
check the add gift option button

*EXPECTED*
Should show only the available options

*ACTUAL*
Shows the mentioned unavailable options too



<!--- ENGCOM-3985-->* 

*Fix submitted by [Ajay Ajabale](https://github.com/ajay2jcommerce) in pull request [20605](https://github.com/magento/magento2/pull/20605)*. [GitHub-20604](https://github.com/magento/magento2/issues/20604)


Gift option message overlap edit and remove button

Steps to reproduce 
Login Admin
Go to Store >> Configuration >> sales >> sales >>gift option>> enable both settings
add product to cart.
add gift option massage.








### Gift registry

<!--- MAGETWO-95833-->* Magento now shows the correct price for configurable products in a shared gift registry. Previously, Magento displayed the original price instead of the special price for configurable products.


### Gift wrapping

<!--- MAGETWO-91563-->* You can now add gift wrapping to the shopping cart to a already-added product without having to add to additional product. 


### Google Analytics

<!--- ENGCOM-3058-->* `referenceContainer` has been changed to `referenceBlock` in the Google Analytics module. *Fix submitted by [Petar Sambolek](https://github.com/sambolek) in pull request [18290](https://github.com/magento/magento2/pull/18290)*. [GitHub-16497](https://github.com/magento/magento2/issues/16497)



### Google Tag Manager

<!--- MAGETWO-96378-->* The Google Tag Manager `AddToCart` event now fires reliably on the product page when **Stores** > **Configuration** > **Sales** > **Checkout** > **Redirect to Shopping Cart**is set to  **yes**. 


### GraphQL

<!--- ENGCOM-4007-->* 


*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [318](https://github.com/magento/graphql-ce/pull/318)*. [GitHub-317](https://github.com/magento/magento2/issues/317)


Getting values from StoreConfig is not possible
This PR aims to allow developers to get store design configuration (from Html Head, Footer and Header) information using Graphql.










<!--- ENGCOM-4081-->* 

*Fix submitted by [Roman Kis](https://github.com/kisroman) in pull request [337](https://github.com/magento/graphql-ce/pull/337)*. [GitHub-336](https://github.com/magento/magento2/issues/336)




Magento/CatalogGraphQl/Model/Category/LevelCalculator class has fields declared dynamically





When opening the blank or default theme in the Design Editor in 2.0.0.0-dev45 the screen  is completely blank in Firefox and Chrome browsers. 


<!--- ENGCOM-4077-->* 

*Fix submitted by [Stepan Furman](https://github.com/Stepa4man) in pull request [254](https://github.com/magento/graphql-ce/pull/254)*. [GitHub-248](https://github.com/magento/magento2/issues/248)


Added the ability to create customer account through the GraphQL





Price scope should be store level instead of website level

Price scope is limited to global or website on purpose. The reason is that cart is shared on website level and below. If there would be possibility for different price on store view level, you could add product X with price A from one store and price B from another store leading to confusion/calculation issues. There are currently no plans to address this limitation. If needed in a specific case, probably can be done as a custom extension.









<!--- ENGCOM-2967-->* 

The pull enables adding simple products to customer/guest carts via GraphQl mutations.

In order to add simple product to cart the following information can be passed:

product SKUs (required)
quantities (required)
custom options (required if product has required options)
As a result of executing such mutation, the current state of the cart will be returned. Cart items information can vary and depends on product types. For this case, simple cart item contains information about custom options.

*Fix submitted by [Roman Glushko](https://github.com/roma-glushko) in pull request [170](https://github.com/magento/graphql-ce/pull/170)*. [GitHub-141](https://github.com/magento/magento2/issues/141)








<!--- ENGCOM-2964-->* 

Config and basics for all shipping: Ability to enable/disable for frontend of backend specifically

For some of you, this might come as a surprise, but Magento does not support ?disabling? the shipping method on frontend but leaving it on in admin area. OK, thats not 100% correct since you can do some sort of a ?tweak config? that would enable this effect. The thing is that although Magento supports ?global/website/store? configs, shipping methods are turned on/off on a global and website level. On store level you can simply edit the title of a shipping method plus few other things, but usually you cannot enable/disable shipping method on a store level.

Now, imagine a case you only have one website defined in your Magento system, if you go to the admin ?Sales > Orders? and click ?Create New Order? button then the first next screen you see is the ?please select a customer? grid where you choose a customer for which you want to create an order.


*Fix submitted by [Vitaliy](https://github.com/VitaliyBoyko) in pull request [182](https://github.com/magento/graphql-ce/pull/182)*. [GitHub-128](https://github.com/magento/magento2/issues/128)


<!--- ENGCOM-3077-->* 
*Fix submitted by [Arturo Iglesias](https://github.com/ArturoI) in pull request [195](https://github.com/magento/graphql-ce/pull/195)*. [GitHub-160](https://github.com/magento/magento2/issues/160)


<!--- ENGCOM-3537-->* 
*Fix submitted by [Alexandr Voronoy](https://github.com/VoronoyAlexandr) in pull request [262](https://github.com/magento/graphql-ce/pull/262)*. [GitHub-260](https://github.com/magento/magento2/issues/260)


<!--- ENGCOM-3496-->* 
*Fix submitted by [Bartłomiej](https://github.com/bartekszymanski) in pull request [234](https://github.com/magento/graphql-ce/pull/189)*. [GitHub-211](https://github.com/magento/magento2/issues/189)


<!--- ENGCOM-3474-->* 
*Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [240](https://github.com/magento/graphql-ce/pull/240)*. [GitHub-211](https://github.com/magento/magento2/issues/211)

<!--- ENGCOM-3446-->* 
*Fix submitted by [DocSchoko](https://github.com/DocSchoko) in pull request [225](https://github.com/magento/graphql-ce/pull/225)*. [GitHub-222](https://github.com/magento/magento2/issues/222)


<!--- ENGCOM-3071-->* 

*Fix submitted by [Martin Hansen](https://github.com/mhhansen) in pull request [121](https://github.com/magento/graphql-ce/pull/121)*. [GitHub-102](https://github.com/magento/magento2/issues/102)


<!--- ENGCOM-3956-->* 

*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [19663](https://github.com/magento/graphql-ce/pull/312)*. [GitHub-270](https://github.com/magento/magento2/issues/270)


Fix region_id update in updateCustomerAddress mutation #312



Magento throws warning regarding missing date.timezone setting

This commit maps region/region_id to AddressInterface:regionId when
provided as input.

The AddressInterface contains both region and regionId properties which
are mapped to \Magento\Customer\Model\Address by the
AddressRepositoryInterface.

After populating an existing customer address with the user input for region,
the exting regionId was still set on the AddressInterface. When saving
the region property is mapped to the model before regionId.


### Import/export

<!--- ENGCOM-3203-->* Magento now displays an informative error after you run check data, and also blocks import and product creation, when SKU strings are too long. Previously, the check data process permitted you to proceed with the import, but the import failed due to a system error. Products were created with excssively long strings were created with all the values exept SKU empty. *Fix submitted by [Ravi Chandra](https://github.com/ravi-chandra3197) in pull request [18639](https://github.com/magento/magento2/pull/18639)*. [GitHub-17865](https://github.com/magento/magento2/issues/17865)

<!--- ENGCOM-3228-->* Magento now successfully imports products  that have a fixed price custom option with a price of zero. Previously,  ihe importer failed when trying to update products with a price of zero.  *Fix submitted by [Antun Matanović](https://github.com/amatanovic) in pull request [18284](https://github.com/magento/magento2/pull/18284)*. [GitHub-17616](https://github.com/magento/magento2/issues/17616)

<!--- MAGETWO-94671-->* The memory required to export the media gallery has been significantly reduced. [GitHub-17320](https://github.com/magento/magento2/issues/17320)

<!--- MAGETWO-95825-->* We've resolved the following issues with imported images:

	* images of all sizes reverted to the default placeholder size after import.

	* images that were removed through the Admin before import returned after import. 

Magento now displays an informative error message if images are not imported as expected. 

<!--- MAGETWO-91569-->* Special characters in the CSV import file no longer trigger a general system exception. Previously, special characters (for example, <code>ƒ</code>, <code>ª</code>, and <code>›</code>) halted the check data phase of import. 

<!--- MAGETWO-95105-->* URL Key columns that contain  accented characters are now converted properly after the import of a CSV file. Previously, if you manually assigned a URL key to a product in the Admin that contained an accent character or punctuation, Magento converted it to the regular character or removed it. 

<!--- MAGETWO-91544-->* Magento now correctly updates existing product URLs during import. Previously, Magento update existing URLs with the new URLs, but displayed a 404 error if you tried to access the product from the new URL.  

<!--- MAGETWO-95829-->* Magento now retains product order within a category after import. 

<!--- MAGETWO-59265-->* You can now properly set data for drop-down attributes during product import in deployments with multiple storeviews. 





<!--- MAGETWO-91657-->* 

Advanced pricing the bulk discounts by percentage returns error when set

ISSUE
Merchant has pointed out that when setting the advanced pricing and set a customer group price discount by percentage and save the change it returns an error:

Group price must be a number greater than 0.

I have verified this on all available copies 2.2.x. Please advise

REPRODUCE
On backend, Catalog > products
Choose product and click on advanced pricing
In the customer group price box set price to discount and click done and save product page

EXPECTED
When clicking "Done" button, then discount field is validated and js validation message is displayed under the field: "Please enter a valid percentage discount value greater than 0." Like the one we have when entering a value greater than 100 (see screenshot-1.png )

ACTUAL
Product page errors with: Group price must be a number greater than 0.


<!--- MAGETWO-96381-->* 

Magento now exports 

when exporting configurable products based on swatch 

Configurable Product based on Swatch with different Admin & Front labels exported with wrong labels

Both columns should use Admin labels



<!--- MAGETWO-58210-->* 

Magento 2.0.7 Import Products sets default behaviour as append, need add_update

I am importing the products using array instead of csv, And using FireGento_FastSimpleImport2 Module to pass the product array to the import model. I have set the behavior of import to be 'add_append', but getBehavior() method in the Magento/ImportExport/Model/Import/Entity/AbstractEntity class checks the condition and sets behavior as 'append'. I need to know why the product import does not allow add_update behavior? i believe that the append is responsible for multiple stock item entries in the table cataloginventory_stock_item for same item, which generates error in the catalog product grid.



[GitHub-6193](https://github.com/magento/magento2/issues/6193)




<!--- ENGCOM-3083-->* 

Update CategoryProcessor.php

This fix make it possible, that the upsert category process during product import are generating the freshly created category url rewrites globally and not just for the default scope




Steps to reproduce
Create a CSV with Product Information which includes Category String
Category String Contains Category which does not exists so Magento does an "upsertCategory" internally

Expected result
Magento creates URL Rewrites for all websites

Actual result
Magento just create the URL-Rewrite for default website scope.


*Fix submitted by [utietze](https://github.com/utietze) in pull request [18271](https://github.com/magento/magento2/pull/18271)*. [GitHub-18234](https://github.com/magento/magento2/issues/18234)


<!--- ENGCOM-3823-->* 

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [20180](https://github.com/magento/magento2/pull/20180)*. [GitHub-15950](https://github.com/magento/magento2/issues/15950)


Magento2 CSV product import qty and is_in_stock not working correct



Magento2 CSV product import qty and is_in_stock not working correct

Steps to reproduce
Create an CSV file for import products
Set Quantity (field qty) to f.E. 99 and is_in_stock to 0 (we want to have quantity for product but set out of stock)
import CSV
Expected result
Product should have quantity 99 and "Out of Stock"
Actual result
Product has quantity but is "In Stock"



<!--- ENGCOM-3809-->* 

*Fix submitted by [Rajneesh Gupta](https://github.com/irajneeshgupta) in pull request [20127](https://github.com/magento/magento2/pull/20127)*. [GitHub-20098](https://github.com/magento/magento2/issues/20098)


Product image failure when importing through CSV





Expected result
Import 3 virtual products and one configurable product with image
Actual result
When importing: Following Error(s) has been occurred during importing process: 1. Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s): 4
Products are imported but configurable product has no image in Magento 


<!--- ENGCOM-3977-->* 

*Fix submitted by [Rajneesh Gupta](https://github.com/irajneeshgupta) in pull request [20625](https://github.com/magento/magento2/pull/20625)*. [GitHub-20624](https://github.com/magento/magento2/issues/20624)



`\Magento\ImportExport\Block\Adminhtml\Export\Filter::_getSelectHtmlWithValue()` method no longer overwrites self $value argument


<!--- ENGCOM-3524-->* 

Success Message Icon vertically misaligned in admin panel



*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19334](https://github.com/magento/magento2/pull/19334)*. [GitHub-19328](https://github.com/magento/magento2/issues/19328)





### Infrastructure

<!--- ENGCOM-3690-->* 


*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [19764](https://github.com/magento/magento2/pull/19764)*. [GitHub-19763](https://github.com/magento/magento2/issues/19763)



Correct location of transparent.js 



Admin Sales Order Create Fails with PayflowPro


Steps to reproduce 
Create new order in admin panel
Select credit card payment method for PayFlow Pro
Expected result 
Order placement succeeds
Actual result 
Order creation fails with error Invalid account number





<!--- ENGCOM-3598-->* 


*Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request [16154](https://github.com/magento/magento2/pull/16154)*. [GitHub-14937](https://github.com/magento/magento2/issues/14937)


Use the new json serializer which throws an error when failing


Javascript error thrown from uiComponent 'notification_area' if messages are malformed

A javascript error is thrown from the uiComponent notification_area in Magento backend when the parameter $content of the class \Magento\Ui\TemplateEngine\Xhtml\Result::wrapContent is empty or false. As the parameter is provided, no PHP error is thrown and the parameter doesn't have a strict type like string.
The javascript error blocks all others frontend behavior.

Expected result
No javascript error thrown thanks to a try/catch and log the issue
A way to catch json_encode error and provide the issue in console.log
Actual result
error

<!--- ENGCOM-3589-->* 


*Fix submitted by [Fabrizio Balliano](https://github.com/fballiano) in pull request [19455](https://github.com/magento/magento2/pull/19455)*. [GitHub-19453](https://github.com/magento/magento2/issues/19453)


min php version fix 


wrong php version in app/bootstrap.php


Summary 
By mistake I was trying to run M2.3.0 on a PHP5, and the system told me "Magento supports PHP 7.0.2, 7.0.4, and 7.0.6 or later. Please read Magento System Requirements." which is wrong because minimum php version for 2.3 is 7.1.3 https://devdocs.magento.com/guides/v2.3/install-gde/system-requirements-tech.html

Examples 
"Magento supports PHP 7.0.2, 7.0.4, and 7.0.6 or later. Please read Magento System Requirements."


<!--- ENGCOM-3687-->* 


*Fix submitted by [Jaimin Sutariya](https://github.com/jaimin-ktpl) in pull request [19537](https://github.com/magento/magento2/pull/19537)*. [GitHub-17442](https://github.com/magento/magento2/issues/17442)



Resolved bad parameter on function



Order getCreatedAtFormatted has bad params

Steps to reproduce
On any order, call getCreatedAtFormatted($format)
Set string format as expected (short|medium|long|full)
Expected result
It should return order's createAt formated
Actual result
PHP Fatal error: Uncaught TypeError: IntlDateFormatter::`__construct()` expects parameter 2 to be integer, string given in vendor/magento/framework/Stdlib/DateTime/Timezone.php:322


<!--- ENGCOM-3666-->* 

*Fix submitted by [Nirav Kadiya](https://github.com/ssp58bleuciel) in pull request [19634](https://github.com/magento/magento2/pull/19634)*. [GitHub-13309](https://github.com/magento/magento2/issues/13309)


Lifetime update syntax error


magento2/lib/internal/Magento/Framework/Cache/Backend/Database.php

Line 435
['id=?' => $id, 'expire_time = 0 OR expire_time>' => time()]

Should be (question sign is missing):
['id=?' => $id, 'expire_time = 0 OR expire_time>?' => time()]


### Integration

<!--- ENGCOM-3353-->* Magento no longer throws an exception when you navigate to the OAuth page (**Backend** > **Stores** > **Configuration** > **Services** > **OAuth**). *Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [18750](https://github.com/magento/magento2/pull/18750)*. [GitHub-18655](https://github.com/magento/magento2/issues/18655)



<!--- ENGCOM-3355-->*

Fix Authenticating a customer via REST API does not update the last logged in data 

Fixed Last Logged In date when we authenticate a customer via REST API.

Steps to reproduce
Create a new customer account
Login with that customer using the default Magento frontend
View the customer in the Magento admin area, and note that the Last Logged In value has been updated
Request a customer token via this API endpoint: /rest/V1/integration/customer/token
Expected result
Requesting the customer token should also update the last logged in value.

Actual result
Last logged In value does not get updated.
*Fix submitted by [Prakash](https://github.com/prakashpatel07) in pull request [18973](https://github.com/magento/magento2/pull/18973)*. [GitHub-17488](https://github.com/magento/magento2/issues/17488)



<!--- ENGCOM-3053-->*

Correctly convert config integration api resources

Correctly convert config integration api resources
Correctly return config based integration api resources. Currently it does not append "root api resource" (Magento_Backend::admin) which causes the integrations to be reset all the time even when there are no data changes when the Magento\Integration\Setup\Recurring is run (setup:upgrade) because Magento\Authorization\Model\Acl\AclRetriever::getAllowedResourcesByUser returns resource tree including "root api resource" (Magento_Backend::admin) and when they are compared they do not match.

I have a integration configured (System -> Integration). After update to 2.2.1 it keeps complaining about "Reauthorisation", but when you try to reauthorize this fails without any error message.



*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18273](https://github.com/magento/magento2/pull/18273)*. [GitHub-12095](https://github.com/magento/magento2/issues/12095)



### Layered navigation

<!--- MAGETWO-91753-->* You can now filter products based on color. 


EE ONLY


### Newsletter

<!--- ENGCOM-3460-->* Magento now sets the correct store_id for each store when a customer subscribes to a newsletter from more than one stor. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [19195](https://github.com/magento/magento2/pull/19195)*. [GitHub-19172](https://github.com/magento/magento2/issues/19172)



<!--- ENGCOM-3266-->* 

Fix customer unsubscribed issue

Customer get unsubscribe to newsletter on password reset email request with Newsletter Need to Confirm Set to Yes on admin settings

Go to Storefront.
Create customer account and "Sign in".
Go to "Newsletter Subscription" in account page.
Activate checkbox "General Subscription" , a confirmation request has been sent on email with link, dont click on this.
Sign out of customer and go to link "Sign In" click "Forgot Your Password" and fill field to reset password and press button "Reset My Password"
Check you email


Expected result
Customer should stay "Subscribes to newsletter".
Letter with "Set new password" button is present on email.


Actual result
Letter "You have been unsubscribed from the newsletter" on email.
Letter with "Set new password" button is present on email.

*Fix submitted by [Janak Bhimani](https://github.com/janakbhimani) in pull request [18795](https://github.com/magento/magento2/pull/18795)*. [GitHub-17954](https://github.com/magento/magento2/issues/17954)



<!--- MAGETWO-91684-->* Magento now permits only one newsletter subscription per email address. Previously, when a website had multiple store views, a customer could subscribe multiple times to a newsletter with one email address.

<!--- MAGETWO-91768-->* Magento now displays an informative `You have unsubscribed` message when you click the unsubscribe link in the newsletter email. 



<!--- ENGCOM-3575-->* 

*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19419](https://github.com/magento/magento2/pull/19419)*. [GitHub-19418](https://github.com/magento/magento2/issues/19418)


Cannot add additional field to Newsletter system configuration at desired position


As a Magento developer, I want to add some additional settings to the Newsletter system configuration before Success Email Template (as example).

Actual results
With given above, the custom field will appear at the end of fields list in scope of Newsletter system configuration.

Expected result
Newly added field should be sorted according to given sortOrder value.

The issue
The problem is that in the app/code/Magento/Newsletter/etc/adminhtml/system.xml group fields has sortOrder the same - 1.



<!--- ENGCOM-3431-->* 

*Fix submitted by [Ravi chandra](https://github.com/ravi-chandra3197) in pull request [19164](https://github.com/magento/magento2/pull/19164)*. [GitHub-8952](https://github.com/magento/magento2/issues/8952)


Fixed subscribe to newsletter if you already have an account issue #8952 -2.3 develop



You can't subscribe to newsletter if you already have an account

Currently, if a user already has an account they cannot use the footer to sign up for email. This is a terrible user experience...nobody is going to go all the way into their account (or even KNOW to go there) to sign up for the newsletter. People do it from the footer or from popups.






<!--- ENGCOM-3574-->* 

*Fix submitted by [Dharmesh Vaja](https://github.com/Dharmeshvaja91) in pull request [19416](https://github.com/magento/magento2/pull/19416)*. [GitHub-19404](https://github.com/magento/magento2/issues/19404)


fixed news latter issue


When subscribing to newsletter, if email already exists, don't throw exception, but just warn without exception







### Orders

<!--- MAGETWO-94437-->* The address form in the Admin order creation workflow has been refactored to improve performance. See xxx.

<!--- MAGETWO-69274-->* Administrators now need sales email privileges to send order comment emails to customers.





### Page Builder


<!--- MAGETWO-96293-->* The **Reset** button has been removed from all forms in the Admin. 



### Page cache

<!--- MAGETWO-97234-->* 





URL redirect (301) loosing current currency and displays default one

URL redirect (301) loosing current currency and displays default one. It creates unexpected behavior during browsing the site. For example, you have selected CAD currency, but if you click to the link that redirect you to other one, you will see prices with default store currency while you will refresh the page manually.

ACTUAL RESULT: 
Opened page contains prices with the default currency (USD)

EXPECTED RESULT: 
Opened page contains prices with the current selected currency (EUR)


### Payment methods

<!--- ENGCOM-3219-->* Magento now populates the estimated billing address  field  on the checkout page with the default billing address as expected when the cart contains virtual products only. Previously, when a signed-in customer with different default shipping and billing addresses had a cart containing only virtual products, the cart estimation field was populated with the default shipping address information  instead of the default billing address information. *Fix submitted by [Lucas Calazans](https://github.com/LucasCalazans) in pull request [18095](https://github.com/magento/magento2/pull/18095)*. [GitHub-17744](https://github.com/magento/magento2/issues/17744)

<!--- ENGCOM-3393-->* Invoice PDFs now include a populated FTP (Fixed Product Tax) amount field for orders when using Weee tax and FPT is enabled. Prviously, this information was displayed in order and invoice views, bot not captured in the PDF. *Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [19061](https://github.com/magento/magento2/pull/19061)*. [GitHub-18617](https://github.com/magento/magento2/issues/18617)

<!--- MAGETWO-96427-->* Magento now displays the refund offline warning pop-up  when a customer attempts to navigate to the credit memo directly from the order page for orders placed with the PayPal Express Checkout.

<!--- MAGETWO-96475-->*  When an order placed with PayPal fails during checkout, Magento no longer processs payment for the order. Previously, orders that failed during the checkout when being processed through PayPal were processed. 

<!--- MAGETWO-96291-->* A popup no longer blocks completion of check out using Braintree PayPal on a mobile device.

<!--- MAGETWO-95821-->* When a  customer selects PayPal as a payment method but then applies a gift card, Magento now reverts to zero subtotal checkout. Previously, the order failed at the review step if a gift card were applied. 

<!--- MAGETWO-91526-->* Orders created with eway as a payment method now contain the same credit card information, which isincluded in the Authorize.net response. Previously, the order did not contain any information regarding credit card. 

<!--- MAGETWO-97243-->* Magento now displays successful orders paid for with eWay. Previously, Magento did not display completed errors even after the transaction was accepted by eWay. 

<!--- ENGCOM-3675-->* 

*Fix submitted by [Andrea Parmeggiani](https://github.com/textarea) in pull request [19707](https://github.com/magento/magento2/pull/19707)*. [GitHub-19706](https://github.com/magento/magento2/issues/19706)


PaymentTokenRepositoryInterface: missing setTotalCount in getList() method #19707	



Missing setTotalCount method on \Magento\Vault\Model\PaymentTokenRepository->getList method

added setTotalCount($collection->getSize() on $searchResults return object


Expected result
returned the vault data total count
Actual result
null






<!--- ENGCOM-3156-->* 

*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18521](https://github.com/magento/magento2/pull/18521)*. [GitHub-15652](https://github.com/magento/magento2/issues/15652)


Added checks to see if the payment is available



REST API create order POST /V1/orders

Expected result
An order should have been created



<!--- ENGCOM-3646-->* 

*Fix submitted by [Wojtek Naruniec](https://github.com/wojtekn) in pull request [19665](https://github.com/magento/magento2/pull/19665)*. [GitHub-19664](https://github.com/magento/magento2/issues/19664)


Configure missing group for core payment methods 


There is \Magento\Payment\Model\Config\Source\Allmethods class in the Magento core which can be used as source model for backend configuration fields. It displays available payment methods grouped by payment provider. Not all methods shipped with M2 have group defined, so some of them are displayed outside option group. This can be confusing.





<!--- ENGCOM-3840-->* 

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [20233](https://github.com/magento/magento2/pull/20233)*. [GitHub-20232](https://github.com/magento/magento2/issues/20232)


Backend order credit card detail check box misaligned 


Steps to reproduce 
1.Backend -> sale -> order -> create new order/reorder(Perticular order)
2.Under payment method -> credit card -> check save for later checkbox alignment





### Performance

<!--- MAGETWO-95249 94346-->* B2B

Implement handling of large number of addresses on admin edit customer page


As a customer I want to store and operate with large number of customer addressed on customer details page in admin.




New customer address handling in Magento admin is implemented in 2.3.1 
Customer Addresses tab now contains default billing address and default shipping address ui component blocks, customer addresses listing or grid and customer address form on modal window. 
New \Magento\Customer\Model\Customer\DataProviderWithDefaultAddresses is introduced to replace \Magento\Customer\Model\Customer\DataProvider as now customer addresses are managed asynchronously with new \Magento\Customer\Model\Address\DataProvider. 
Customer addresses grid represents listing ui component with filters, grid search, mass delete action. Each customer addresss row has set of actions: edit address, set address as default billing, set address as default shipping, delete address. 
Customer address form represents form to create, update, delete customer address with customer address attributes. 
All actions on customer addresses tab are performed asynchronously with AJAX. 
Now you need to create customer in Magento admin first to be able to add addresses to the customer. 
Customer addresses functionality in Magento admin was rewritten with ui components to increase performance of the platform, to be able to manage customers with 3000 and more addresses. You can now handle large customer addresses profiles with new customer address listing as it does not perform heavy operations with loading customer and address collections. 








### Product video

<!--- MAGETWO-91707-->* You can now pause product videos on YouTube on storefronts running on Internet Explorer 11.x.



### Quote


<!--- ENGCOM-3416-->* You can now update a shopping cart that contains a reserved order number (for example, 000000651). *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19130](https://github.com/magento/magento2/pull/19130)*. [GitHub-19101](https://github.com/magento/magento2/issues/19101)


<!--- ENGCOM-3226-->* You can now use REST to set billing information for a customer (`customerId`) with an existing address

Previously, not setting the customerId with an existing address caused a `NoSuchEntityException` to be thrown during address validation. 


Allow set billing information via API with existing address
Not setting the customerId with an existing address caused a
NoSuchEntityException to be thrown during address validation


*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [18704](https://github.com/magento/magento2/pull/18704)*. [GitHub-17485](https://github.com/magento/magento2/issues/17485)


<!--- MAGETWO-94059-->* You can now request a quote on a storefront running on iOS 11.3.1.


B2B


<!--- ENGCOM-3464-->* 

*Fix submitted by [Jay Ghosh](https://github.com/jayankaghosh) in pull request [18185](https://github.com/magento/magento2/pull/18185)*. [GitHub-18027](https://github.com/magento/magento2/issues/18027)


Floating point overflows in checkout totals fixed



Cart Total is NaN in some circumstances


Steps to reproduce
Put two items in the cart, in our case this is one product at 59,80€ incl. Tax and one product at 9,49€ incl. Tax, Shipping is free
Apply a coupon code (cart price rule) with 100% discount

Expected result
Cart Total should be 0,00 €

Actual result
Cart Total is NaN,N €




<!--- ENGCOM-3503-->* 

*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [19192](https://github.com/magento/magento2/pull/19192)*. [GitHub-18349](https://github.com/magento/magento2/issues/18349)


Fixed for 2.3: Incorrect quote_item_id saved on order items during multiple address checkout 


Incorrect quote_item_id saved on order items during multiple address checkout


Steps to reproduce
Add an item to cart, log in (or create an account), and proceed to multiple address checkout.
Complete all steps of checkout and place order

Expected result
All resulting order_item records in the database have a quote_item_id value that matches the item_id value of the original quote_item record. In other words, the order_item should point at the quote_item.

Actual result
All resulting order_item records in the database have a quote_item_id value that matches the address_item_id value of the original quote_address_item record. In other words, the order item points at the quote_address_item instead of the quote_item.

### Reports

<!--- MAGETWO-95823-->* The Order Sales report now includes only completed orders. Previously, this report included canceled orders. 

<!--- MAGETWO-63069-->* The Refresh Lifetime Statistics feature of reports now  works in deployments with split databases. 

<!--- MAGETWO-91553-->* Admin users with their role scope set to `custom` can now view the abandoned carts report.

EE ONLY

<!--- ENGCOM-3560-->*

*Fix submitted by [Nirav Patel](https://github.com/niravkrish) in pull request [19372](https://github.com/magento/magento2/pull/19372)*. [GitHub-18754](https://github.com/magento/magento2/issues/18754)




fixed Negative order amount in dashboard


Negative order amount in dashboard latest order when order is cancelled where coupon has been used

Steps to reproduce 
Place an order with a coupon code, for example 4.95 EUR off
Cancel the order

Expected result 
Expected to see an order with result of 0 in the dashboard latest orders.

Actual result 
Getting these results



<!--- ENGCOM-3257-->* 

*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [18768](https://github.com/magento/magento2/pull/18768)*. [GitHub-16050](https://github.com/magento/magento2/issues/16050)


Collect totals in placeOrder when no paymentMethod provided


Expected result
Order items should have set original price.
Actual result
Order items have original price $0.0




### Reviews

<!--- ENGCOM-3486-->* Administrators can now access product ratings in deployments with multiple websites running different locales. *Fix submitted by [Saphal Jha](https://github.com/saphaljha) in pull request [18888](https://github.com/magento/magento2/pull/18888)*. [GitHub-18192](https://github.com/magento/magento2/issues/18192)

<!--- MAGETWO-95491-->* The  **Save and Next** and **Save and Previous** buttons in **Marketing** > **Reviews** now work as expected.


<!--- ENGCOM-3837-->* 

*Fix submitted by [Suneet K.](https://github.com/suneet64) in pull request [20146](https://github.com/magento/magento2/pull/20146)*. [GitHub-20122](https://github.com/magento/magento2/issues/20122)


Fixed error while adding new review from admin panel


Steps to reproduce 
Login to admin panel
On left navigation goto Marketing-> User Content-> Reviews
Click New Review
Click any product for review

Expected result 
No error msg should come

Actual result 
Error message showing : A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later.



<!--- ENGCOM-3835-->* 

*Fix submitted by [Nainesh](https://github.com/nainesh2jcommerce) in pull request [20224](https://github.com/magento/magento2/pull/20224)*. [GitHub-20221](https://github.com/magento/magento2/issues/20221)



add your review text is not show uniformly in Mobile view

Steps to reproduce 

Chrome Browser
Mobile View
Home Page
Product listing page

Expected result 

add your review text should be shown in one line

Actual result 

add your review text is not shown uniformly


### Rewards

<!--- MAGETWO-95803-->* Rewards points from a purchase using a coupon code are now added to a  newly created customer account when the account is created immediately after checking out. 

<!--- MAGETWO-91647-->* Customers are now subscribed as expected to email notifications about reward points. 
EE ONLY

<!--- MAGETWO-96125-->* Magento now allocates rewards points for converting an invitation to a customer when **Require Emails Confirmation** is set to **yes**.


<!--- ENGCOM-3491-->*

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19182](https://github.com/magento/magento2/pull/19182)*. [GitHub-14849](https://github.com/magento/magento2/issues/14849)


Sending sales emails the label for order status is not translated.









#### Return Merchandise Authorizations (RMA)

<!--- MAGETWO-96426-->* The return reasons that Magento displays in **Sales** > **Returns** > **Return Items** are now active links as expected.

<!--- MAGETWO-91672-->* The Create New Return page  now correctly displays all fields. Previously, new attributes of type `dropdown` was displayed incorrectly as text rows.

<!--- MAGETWO-71022-->* Magento now displays the correct amount in the **Remaining Quantity** field after Magento has processed a return.

<!--- MAGETWO-96158-->* Return attributes that have the **Values Required** attribute  set to **no** no longer break the storefront display of those attributes.

<!--- MAGETWO-97259-->* Administrators can now process returns when a request includes a required image attribute. Previously, administrators could not process a return if the request included a required image attribute. Previously, the Return Items tab displayed a validation error even though the image had  been uploaded, and if you clicked on **Details**, Magento displayed this message, `Please select a file`.

<!--- MAGETWO-97132-->* You can now return bundle products from thwe Admin. Previously, when you clicked Submit Returns, Magento displayed an informative error message, and did not create an RMA.






### Sales

<!--- ENGCOM-3294-->* The message that Magento displays when a merchant tries to create a crdit memo for an order with no shippping charges has been made more informative. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [18844](https://github.com/magento/magento2/pull/18844)*. [GitHub-6731](https://github.com/magento/magento2/issues/6731)


<!--- ENGCOM-3048-->* You can now print order information from the customer dashboard. Previously, when you tried to print  order information from the customer dashboard, Magento displayed this error, `Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php`. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18272](https://github.com/magento/magento2/pull/18272)*. [GitHub-10530](https://github.com/magento/magento2/issues/10530)




<!--- ENGCOM-3074-->* Magento no longer marks email as "not sent" 

Prevent email being marked as not sent if email copy fails due to exception.


Failure of "Send Order Email Copy" spams customers, every minute, forever.

Magento 2.2.5 resends emails to customers if the "Send Order Email Copy" feature fails. This is due to a naive check in Magento\Sales\Model\Order\Email\Sender.php . It was PR #14051 to fix #13769 that did it.

It doesn't discriminate between a failure in the email copy (probably to a company address) and an email to a customer. If the copy fails repeatedly (I've literally never had this feature work) then it will spam your customers once a minute for ever. This is super dumb.


*Fix submitted by [Petar Sambolek](https://github.com/sambolek) in pull request [18288](https://github.com/magento/magento2/pull/18288)*. [GitHub-17152](https://github.com/magento/magento2/issues/17152)



<!--- ENGCOM-3378-->* 



Fix logic in last-order-items.js and Recently Ordered block.

The left block Last Ordered Items is not showing properly the Add to cart button on the :
data-bind="css: {'no-display': !lastOrderedItems().isShowAddToCart}
Always returning false.
Target JS file is : Magento_Sales/web/js/view/last-ordered-items.js





*Fix submitted by [Oleksandr Miroshnichenko](https://github.com/omiroshnichenko) in pull request [19039](https://github.com/magento/magento2/pull/19039)*. [GitHub-13157](https://github.com/magento/magento2/issues/13157)


<!--- ENGCOM-3514-->* 

Fixed child items showing on My Account order view

On an attempt to view an order on My Account -> My Orders -> View Order page bundle products are displayed without child items. It's an expected behavior since on the Print Order (invoice and shipment as well) a customer is able to see children items of a bundle product.

On building pagination logic for ordered items, the children items were excluded from the list (accidentally or for a purpose). This PR removes this step so all children products are displayed on the order view page (so we have the same behavior everywhere: on the order view page, print pages etc). As for the pagination, after the fix, it counts all products: parent and child upon building the products count and pages. However, it's not an issue since bundle products with the child items make a quite long list of information and it's a good idea to use pagination in that case.

Bundle Product Options not showing in Customer Account - Items Ordered


*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19254](https://github.com/magento/magento2/pull/19254)*. 


*Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [19318](https://github.com/magento/magento2/pull/19318)*. 

[GitHub-16434](https://github.com/magento/magento2/issues/16434)


<!--- MAGETWO-94429-->* You can now delete files and folders that are symlinked in `/pub/media` from the media gallery browser. Previously, these symlinked files could not be deleted due to  a validation check that uses `realpath` to test whether the file is outside of media directory base path.

<!--- MAGETWO-94245-->* You can now issue a partial refund to store credit for an order made with an online payment method.

<!--- MAGETWO-94472-->* You can now create a credit memo for an order that contains taxes and discounts and is placed online.  Previously, when you tried to create this credit memo, Magento displayed an informative error.

B2B

<!--- MAGETWO-91547-->* You can now create a credit memo for an order with no payment required. Previously, when an order was placed with no payment required, the **Credit Memo** button was not displayed on the order.

EE ONLY

<!--- MAGETWO-96488-->* Orders for bundle products created from the Admin now display  correct product prices. 

<!--- MAGETWO-63327-->* Company logos are now displayed correctly in printed PDF versions of invoices and shipment statements. 

<!--- MAGETWO-96400-->* The Sales table now displays company information in billing and shipping addresses. 

<!--- MAGETWO-96987-->* Magento no longer adds giftwrap tax to the credit memo twice. 

<!--- MAGETWO-96432-->* The Admin sales order table now shows updates to the payment method title.  

<!--- MAGETWO-94424-->*  Magento now displays product price and shipping costs in the default currency that was configured for that specific website for orders created from the Admin. Previously, when you have multi-site configuration with different default currencies for each website, the product and shipping prices shown while creating an admin order are incorrect. 

<!--- ENGCOM-3828-->* 

*Fix submitted by [Surabhi Srivastava](https://github.com/Surabhi-Cedcoss) in pull request [20142](https://github.com/magento/magento2/pull/20142)*. [GitHub-19942](https://github.com/magento/magento2/issues/19942)


 Success message is not showing when creating invoice & shipment simultaniously 



Steps to reproduce 
Create order from admin panel.
View order at admin panel and Click "create invoice".
Check the checkbox "create shipment" and "Email copy of invoice" while generating invoice. and click submit invoice button.

Expected result 
Success message should show as "You created the invoice and shipment."

Actual result 
Invoice has been created but no success message is appearing.




<!--- ENGCOM-3887-->* 

*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [20354](https://github.com/magento/magento2/pull/20354)*. [GitHub-20277](https://github.com/magento/magento2/issues/20277)


Uploaded file for custom option can't be downloaded again #20277

Expected result
I can download the file which is attached to the product in the order no matter if the custom option is still available or not.

Actual result
Downloading a file from an order where the custom option is no longer present results in a 404.


<!--- ENGCOM-3699-->* 


*Fix submitted by [Shikha Mishra](https://github.com/shikhamis11) in pull request [19784](https://github.com/magento/magento2/pull/19784)*. [GitHub-19780](https://github.com/magento/magento2/issues/19780)


Fixed Incorrect class name on Orders and returns page

On 'Orders and returns' page legend tag has class admin__legend as on admin area.




<!--- ENGCOM-3735-->* 

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19799](https://github.com/magento/magento2/pull/19799)*. [GitHub-19796](https://github.com/magento/magento2/issues/19796)


Sales Order invoice Update Qty's Button is misaligned


Sales Order invoice Update Qty's Button is misaligned

Steps to reproduce 
1.Login to backend-> Order -> View order
2.Generate Invoice -> Items to Invoice -> Check Update Qty's Button



<!--- ENGCOM-3720-->* 

*Fix submitted by [Wojtek Naruniec](https://github.com/wojtekn) in pull request [19900](https://github.com/magento/magento2/pull/19900)*. [GitHub-19899](https://github.com/magento/magento2/issues/19899)

Credit memo for $0 order without refunded shipping produces negative credit memo

Steps to reproduce
Create Cart Price Rule with 100% discount, applied to shipping, available for everyone
Create simple product with positive stock and price = $100
Place order in backend for the created product with qty =1 and flat rate shipping ($5 by default).
Invoice order (but don't create shipment)
Navigate to Credit Memo form
Change Refund Shipping from 5 to 0
Click "Refund Offline"
Expected result
Credit Memo with Total Refunded = 0 is created
Actual result
Credit Memo with Total Refunded = -$5.00 is created (negative value)


In Magento Commerce in the same case credit memo fails completely with "You can't use more store credit than the order amount." error. In Open Source it goes through with mentioned negative amount. As far as I see, in both cases behavior is incorrect.


<!--- ENGCOM-3755-->* 

*Fix submitted by [Nazar](https://github.com/Nazar65) in pull request [19981](https://github.com/magento/magento2/pull/19981)*. [GitHub-19887](https://github.com/magento/magento2/issues/19887)



Steps to reproduce 
After I pulled 2.3-dev brunch to my code, this commit effected creating new order shipment.
after creating new shipment and exec `$_shipment->getAllTracks()`
in https://example.com/admin_xxxxx/admin/order_shipment/view/shipment_id/382
after tick Notify Customer by Email and click save
the customer receive email with all my tracking number
also if the order converted to shipment \Magento\Sales\Model\Convert\Order->toShipment($order);
then $shipment->getAllTracks() will return all trackers


Expected result 
return trackers if they already exist or empty array if not exist


<!--- ENGCOM-3225-->*

*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [18471](https://github.com/magento/magento2/pull/18471)*. [GitHub-7739](https://github.com/magento/magento2/issues/7739)


Alternative fix for Multi Store Emails issue, Fix Async Emails issues, Fix Multiple Email issues


"From Header set twice" when sending an email
Expected result
Emails have been send to all the saved mails in custom table without any error.
Actual result
My category page have no product for the product id belongs to.






<!--- ENGCOM-3452-->* 

*Fix submitted by [Ian cassidy](https://github.com/iancassidyweb) in pull request [18620](https://github.com/magento/magento2/pull/18620)*. [GitHub-18615](https://github.com/magento/magento2/issues/18615)


updates structure for last_trans_id to match structures for amazon and klarna.



Field restriction incompatibilities between klarna_core_order and sales_order_payment last_trans_id

Steps to reproduce 
Place an order in the Klarna Sandbox
Load the sales_order_payment table and observe the value inside last_trans_id column
Compare this value with the value in the klarna_core_order table
You will see the value inside last_trans_id is 4 characters shorter than that in the klarna_core_order table which is down to the table schema.
Expected result
When placing an order with Klarna the full order reference should be stored in the:
Rowsales_ last_trans_id column.
Actual result 
The value recorded in the last_trans_id column is 4 characters short.

KLARNA AND AMAZON



<!--- ENGCOM-3594-->* 

*Fix submitted by [Max O](https://github.com/omaxmo) in pull request [19462](https://github.com/magento/magento2/pull/19462)*. [GitHub-18509](https://github.com/magento/magento2/issues/18509)


remove condition from invoice cancel


Can't cancelled invoice if invoice state == STATE_PAID

Steps to reproduce
Load a invoice programmatically where state == STATE_PAID
Call $invoice->cancel()
Expected result
The invoice should be canceled.
Actual result
Can't cancel invoice if invoice state == STATE_PAID


### SalesArchive

<!--- MAGETWO-96022-->* Archived orders no longer reappear in the Order Management table after cron runs. 





### SalesRule

<!--- MAGETWO-91522-->* The sales rule indexer now runs without error. Previously, the sales rule indexer  returned an error during reindexing because of the Magento_AdvancedSalesRule module.


<!--- ENGCOM-3773-->* 

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [20042](https://github.com/magento/magento2/pull/20042)*. [GitHub-12549](https://github.com/magento/magento2/issues/12549)


Payment method option is not showing under shopping cart rules condition tab.

I go admin end under left menu:
Marketing > Promotions > Cart Price Rules and create a new Rule: Conditions.






### Search

<!--- MAGETWO-91742-->* The default sort order field now works as expected on the Catalog Search results page. 

<!--- MAGETWO-91537-->* Searching for a synonym that contains a hyphen and number now returns the same results as any other search term in the group.


<!--- MAGETWO-97235-->* Layered navigation for Elasticsearch now includes all product sizes. Previously. 

Not all sizes are available in the layered navigation (on Sample Data) with ElasticSearch


If "Filterable (with results)" option is set for a product attribute then: 

Layered navigation includes only those filters for which matching products can be found. 
Any attribute value that already applies to all products shown in the list should still appear as an available filter. 
Attribute values with a count of zero (0) product matches are omitted from the list of available filters. 


All available sizes XS - XL are available as filters
2

<!--- MAGETWO-67779-->* Full text search for Elasticsearch no longer includes the `date` attribute.

<!--- MAGETWO-97495-->* Layered navigation results no longer includes price ranges that contain no products. 


<!--- ENGCOM-3526-->* 

*Fix submitted by [Yevhenii Dumskyi](https://github.com/progreg) in pull request [18069](https://github.com/magento/magento2/pull/18069)*. [GitHub-18038](https://github.com/magento/magento2/issues/18038)


Add CatalogSearch no results handle


Add a custom layout handle when there are no search results

This is something frontend developers struggle with. When there are no search results, it would be nice to have a customized layout handle to add some custom blocks when there are no search results.

Expected behavior
unique layout update when there are no search results found, it can be a blank file but it needs to be processed when layout is being loaded.
ability to change page layout to 1,2 3 columns that does not affect search page with results
Benefits
customized handle to add content blocks / product blocks when products are not found (some elastic search modules already do that, but they are based on collection count)
abiltiy to change layout of no-result page.
less frustration when coding frontend search pages



### Shipping

<!--- ENGCOM-3148-->* 

add error message in else condition

STORES > Settings > Configuration > Sales > Shipping Methods > Free Shipping > Enabled > select Yes > > Minimum Order Amount > Enter 50 > Show Method if Not Applicable > Select Yes > Save Config

By configuring above settings Free shipping method should show in frontend with the error message if it is not applicable.

But the shipping is only displayed when it is applicable no matter what the option "Show Method if Not Applicable" value is set to.

Show Method if Not Applicable for Free Shipping doesn't work


*Fix submitted by [vaibhavahalpara](https://github.com/vaibhavahalpara) in pull request [18507](https://github.com/magento/magento2/pull/18507)*. [GitHub-17977](https://github.com/magento/magento2/issues/17977)

<!--- MAGETWO-96218-->* Shipments created through REST now return tracking information as expected. Previously, Magento created shipment notifications without a tracking number when shipment was created using REST. 

<!--- MAGETWO-91599-->* Table rates now work as expected when using the AE code (Armed Forces Europe) when calculating weight vs destination table rates. 

<!--- MAGETWO-91702-->* Magento now uses  shipping table rates from the correct store in multistore deployments. 


<!--- ENGCOM-3736-->* 


*Fix submitted by [Govind Sharma](https://github.com/GovindaSharma) in pull request [19941](https://github.com/magento/magento2/pull/19941)*. [GitHub-19940](https://github.com/magento/magento2/issues/19940)



issue resolved:Undefined Variable $itemsOrderItemId


Exception undefined variable itemsOrderItemId while creating shipment through MSI



Steps to reproduce
Login to Admin Panel
On left navigation goto Stores-> Inventory->sources
Create two source
Now goto left navigation Stores-> Inventory->stocks
Create stock with Sales Channels : Main website , and add source created above to the stock
Go to Catalog->products
Click edit button of any products which is type of simple product , now assign two source and add quantity to them, at last save product.
repeat step 7 for another product
Now goto frontend and place order of above mentioned two products of single quantity each.
From admin panel select order and create shipment
Ship only one products from first source.
Now one product shipped from first source
Try to ship that product again.

Expected result 
The process should be done without any error

Actual result 
Showing Exception Notice: undefined variable itemsOrderItemId




<!--- ENGCOM-3960-->* 

*Fix submitted by [Arvinda kumar](https://github.com/cedarvinda) in pull request [20564](https://github.com/magento/magento2/pull/20564)*. [GitHub-20563](https://github.com/magento/magento2/issues/20563)


Go to shipping information, Update qty & Addresses and Enter a new address button Not aligned from left and right in 767px screen size 




### Sitemap

<!--- ENGCOM-3040-->* Sitemaps now display correct base URLs for deployments with  multiple stores. *Fix submitted by [Toan Nguyen](https://github.com/nntoan) in pull request [18228](https://github.com/magento/magento2/pull/18228)*. [GitHub-17999](https://github.com/magento/magento2/issues/17999)



### Staging

<!--- MAGETWO-52222-->*  Return "Is Active" toggle to Catalog Price Rule Page

As s Merchant I want to manage Catalog Rule activity with "Is Active" toggle.

"Active" toggle is present on Catalog Rule Page

her words, the active rule without updates - is a permanent active rule. The user should create an update with "Active = False" to deactivate such rule.




<!--- MAGETWO-96106-->* 

Steps

Go to Content->Widgets->Create new
Create new Widget:
Type - CMS Static Block
Layout Updates:
All pages
Page top
Save widget
Go to Content- Blocks
Edit block Sales25off
Create new staging update
Schedule update to + 5 min to current time
Change block status to Enabled
Save update
Preview update

Expected result
Block is displayed on top of the page

Actual result
Empty container displayed on top of the page


<!--- MAGETWO-91782-->* An administrator  with a custom (limited) role can now edit and schedule  updates to CMS content pages.

<!--- MAGETWO-91662-->* Shopping cart price is now updated as expected in staging preview mode.

<!--- MAGETWO-91566-->* Restricted users with access to specified sections can now save a scheduled update. Previously, Magento threw a "forbidden" error.





<!--- MAGETWO-91525-->* 



Update with 0 objects is not removed by cron	

If create staging update and remove all entities from it it doesn't get removed by cron

EXPECTED RESULTS:
Update is removed from dashboard

ACTUAL RESULTS:
Update with 0 objects are not removed from grid




### Store

<!--- ENGCOM-1928-->* 

Modifies switcher-option's link Magento/Store/view/frontend/templates/switch/languages.phtml template.

 after swithing store view, ___store=xx is added to url. Breaks 'back' functionality.


*Fix submitted by [Mobecls](https://github.com/Mobecls) in pull request [19037](https://github.com/magento/magento2/pull/19037)*. [GitHub-14007](https://github.com/magento/magento2/issues/14007)



<!--- ENGCOM-3408-->* 

Currently is not possible to define the root_category_id in the Project config.php



Fixes for set root_category_id



*Fix submitted by [Lars Roettig](https://github.com/larsroettig) in pull request [18958](https://github.com/magento/magento2/pull/18958)*. [GitHub-18956](https://github.com/magento/magento2/issues/18956)



### Swatches

<!--- ENGCOM-3360-->* Store views now show the correct swatch values. Previously, product swatches did not show 



Product swatches does not shows correct value for related store view


*Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [18988](https://github.com/magento/magento2/pull/18988)*. [GitHub-17890](https://github.com/magento/magento2/issues/17890)


<!--- MAGETWO-95310-->* Product images now display the color option you chose when you apply a color filter in layered navigation. Previously, wrong colors were randomly displayed. 

<!--- MAGETWO-59789-->* You can now change the size of a swatch image as expected. [GitHub-6382](https://github.com/magento/magento2/issues/6382)






<!--- MAGETWO-94990-->* 



Configurable product thumbnail images slow to generate when high number of thumbnails (14+) in vertical navigation

Merchant finds that when a configurable product detail page has more than 14+ thumbnail images in vertical navigation, that when scrolling to see the other thumbnail images, they are initially blank.
When product page is initially loaded all thumbnail images are loaded fine
But when you click on a configurable option triggering the images to reload is when you see some images not loading

EXPECTED RESULTS:
After clicking configurable option, all thumbnails reload

ACTUAL RESULTS:
After clicking configurable option, when clicking arrows to scroll through thumbnails, some thumbnail images do not load.
Click on an image or using a hand drag triggers missing thumbnail images to load

Additional Notes:

This behavior is not observed when using the horizontal navdir



<!--- ENGCOM-3920-->* 

*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [20421](https://github.com/magento/magento2/pull/20421)*. [GitHub-20396](https://github.com/magento/magento2/issues/20396)


Changing attribute from swatch to dropdown deletes swatch options for all attributes

Steps to reproduce 
Create two configurable attributes (A and B) as text/visual swatches, each with multiple options
Create configurable products for both A and B
Change attribute A to be a dropdown

Expected result 
Product configurable on attribute A displays as dropdown
Product configurable on attribute B displays still as swatch

Actual result 
Products with both attribute A and B both display as a dropdown
Products configurable on attribute B display a javascript error (need to reconfirm this)
If you look at table eav_attribute_option_swatch, once the attributes are made this is populated with options for both attributes. After changing the type of attribute A back to dropdown this table clears completely, removing both the swatch option data for attribute A and (incorrectly) attribute B.





<!--- ENGCOM-3943-->* 

Create a new product attribute form. Styles for the swatch input looks broken

Steps to reproduce 
In Admin go to Stores > Attributes > Product > Add New Attribute
In "Attribute Properties" > Catalog Input Type for Store Owner > Choose "Text Swatch"
In Manage Swatch (Values of Your Attribute) > Add Swatch
Expected result 
Styles for the swatch input looks good

Actual result
Styles for the swatch input are broken




### TargetRule EE ONLY

<!--- MAGETWO-91708-->* Magento no longer throws an exception when Target Rules are set to a rotation mode other than **SHUFFLE** (You can set rotation modes in **Admin** > **System** > **Configurations** > **Catalog** > **Catalog** > **Rule-Based Product Relations**).

<!--- MAGETWO-95708-->* Magento no longer throws a fatal error when price is used in a Target Rule for actions. 


### Tax

<!--- ENGCOM-3443-->* The "Not yet calculated" string for the tax field in the summary section of the  checkout page can now be translated. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19174](https://github.com/magento/magento2/pull/19174)*. [GitHub-18939](https://github.com/magento/magento2/issues/18939), [GitHub-7849](https://github.com/magento/magento2/issues/7849)

<!--- MAGETWO-91769-->* Credit memos now include only the taxes on the product as expected. Previously, the credit memo included the shipping tax as well even when shipping costs were not refunded. 

<!--- MAGETWO-91639-->* Tax is no longer added when a customer group is changed to 'Valid VAT ID - Intra-Union', which has no tax rules assigned to it. 

<!--- ENGCOM-3564-->* 

*Fix submitted by [Nirav Kadiya](https://github.com/ssp58bleuciel) in pull request [19387](https://github.com/magento/magento2/pull/19387)*. [GitHub-16684](https://github.com/magento/magento2/issues/16684)


Default tax region/state appears in customer & order data #19387

https://github.com/magento/magento2/issues/16684

Default tax region/state appears in customer & order data

When a default region is set for tax calculation, then this region value gets saved in the customer, quote & order data, which is not a correct behaviour from my pov.

Steps to reproduce
Set a default tax region in Stores > Configuration > Sales > Tax
Complete an order

Expected result
No region should be set in the customer and order data

Actual result
The region value (from default tax value) is set





### Testing

<!--- ENGCOM-3036-->* 

Allow usage of config-global.php when running Integration Tests 

When running Integration Tests (bin/magento dev:tests:run integration), you will need to customize a couple of files to properly setup the testing environment. Part of this procedure is customizing the phpunit.xml which also defines a file TESTS_GLOBAL_CONFIG_FILE (pointing to either etc/config-global.php or etc/config-global.php.dist). However, configuration files defined in this TESTS_GLOBAL_CONFIG_FILE never end up in the sandbox environment. 



A simple example: I don't use the Vertex_Tax-module so I have disabled it, but now my integration test suite is failing because some interceptors of this module expect some data to be populated:



*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18201](https://github.com/magento/magento2/pull/18201)*. [GitHub-15196](https://github.com/magento/magento2/issues/15196)



<!--- ENGCOM-3293-->* Unit test annotations now assert exception messages correctly. [GitHub-6731](https://github.com/magento/magento2/issues/6731)


### Theme

<!--- ENGCOM-3296-->* You can now upload favicons and logo when editing headers for a store view. Previously, Magento threw an error. *Fix submitted by [Wiard van Rij](https://github.com/wiardvanrij) in pull request [18851](https://github.com/magento/magento2/pull/18851)*. [GitHub-18688](https://github.com/magento/magento2/issues/18688)

<!--- MAGETWO-91723-->* The text attribute implemented on the product page within the mobile theme now fluidly displays the entire text value. Previously, long values were truncated.  

<!--- MAGETWO-95805-->* The user agent rule now sets correct templates for product pages. Previously, the `footer.phtml` and `absolute_footer.phtml` templates were loaded from the desktop theme instead of the mobile theme, regardless of the user agent.

<!--- MAGETWO-91651-->* We've improved the display of the navigation menu on mobile deployments. Previously, Magento displayed only a portion of any submenu accessed from a top menu. 

<!--- MAGETWO-91756-->* Wishlist and compare links now appear for related products in portrait mode when viewed on a mobile device.

<!--- MAGETWO-56094-->* Text now remains in the header area when you resize a page in deployments running in Internet Explorer. 



<!--- ENGCOM-3640-->* 

*Fix submitted by [suryakant-krish](https://github.com/suryakant-krish) in pull request [19640](https://github.com/magento/magento2/pull/19640)*. [GitHub-19639](https://github.com/magento/magento2/issues/19639)


Frontend Component theme sort by arrow icon vertical alignment issue


Steps to reproduce
Go to frontend > choose any category > see on product list page > sort by arrow icon alignment.
It is little bit down.






<!--- ENGCOM-3669-->* 

*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [19198](https://github.com/magento/magento2/pull/19198)*. [GitHub-19142](https://github.com/magento/magento2/issues/19142)


Made logo clickable on home page


Home page store loge should be clickable to reload page

Steps to reproduce 
Visit Home page
Try to refresh page by clicking store logo
Nothing happens

Expected result
Page reload - user wants to reload quickly page. Hi thinks it can be made by clicking the logo.
The only option to refresh is F5 (desktop only), or by refreshing browser very small icon. UX suffers on mobile/tablets. Users wants to quickly reload home page - and anyone expects it can be done by clicking store logo

Actual result
Nothing happens when you click logo on home page. But logo is clickable on other pages. User expects logo is clickable on all pages


<!--- ENGCOM-3871-->* 

*Fix submitted by [Ajay Ajabale](https://github.com/ajay2jcommerce) in pull request [20195](https://github.com/magento/magento2/pull/20195)*. [GitHub-20193](https://github.com/magento/magento2/issues/20193)


Bundle-Product-add-to-cart-button-misaligned-on-tab-portrait ::Bundle… 




Ajay Ajabale

Bundle Product add to cart button misaligned on tab portrait view.



Steps to reproduce
In product detail page on "Bundle Product" click "Customize and Add to Cart" show bundle option check "add to cart" button.



### Translation and locales

<!--- ENGCOM-3423, 3375-->* Child themes now inherit translations from their parent theme as expected (`en_US.csv` translation dictionary). *Fix submitted by [Vladyslav Podorozhnyi](https://github.com/vpodorozh) in pull request [19018](https://github.com/magento/magento2/pull/19018) and  [19144](https://github.com/magento/magento2/pull/19144)*. [GitHub-17833](https://github.com/magento/magento2/issues/17833)


<!--- ENGCOM-3300-->* 

I think there is no need to use escapeJs method as we are already using escapeHtml method.
Due to this string getting converted in hexadecimal.

Steps to reproduce 
install magento 2.2.6 with sample data
add any translation (eg German) with the entry: "Email:,E-Mail:,,"
Set shop-> config->catalog->"Email to a friend" -> yes
call a Product -> Email to a Friend

Expected result 
all labels should been shown right

Actual result 
Label "E-Mail" of the invieder is shown wrong like -> "E\u002dMail"

*Fix submitted by [Rahul Mahto](https://github.com/rahulwebkul) in pull request [18889](https://github.com/magento/magento2/pull/18889)*. [GitHub-18779](https://github.com/magento/magento2/issues/18779)


<!--- ENGCOM-3461-->* Swedish (Finland) locales are now supported. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19203](https://github.com/magento/magento2/pull/19203)*. [GitHub-13095](https://github.com/magento/magento2/issues/13095)


<!--- ENGCOM-3345-->* The 

Product added to shopping cart / comparison list message not translated by default

Translation string was missing as the success message is updated

Product added to shopping cart / comparison list message not translated by default

Currently the message that you have added something to your cart is not available in the i18n translation file.

*Fix submitted by [Ayaz Mittaqi](https://github.com/ayazwebkul) in pull request [18938](https://github.com/magento/magento2/pull/18938)*. [GitHub-18931](https://github.com/magento/magento2/issues/18931)


<!--- MAGETWO-95811-->* You can now use the Translate Inline feature to translate all sections of the Admin. 



### UI

<!--- ENGCOM-3300-->* 
I think there is no need to use escapeJs method as we are already using escapeHtml method.
Due to this string getting converted in hexadecimal.


*Fix submitted by [Abrar Pathan](https://github.com/abrarpathan19) in pull request [19053](https://github.com/magento/magento2/pull/19053)*. [GitHub-18887](https://github.com/magento/magento2/issues/18887)

<!--- ENGCOM-3267-->* 

There was a small design issue die to app/code/Magento/Ui/view/base/web/templates/form/field.html file visible="$data.labelVisible" was on child element of the label, because of that parent was still visible even if the label visibility was false.




*Fix submitted by [Ashutosh Srivastva](https://github.com/ashutoshwebkul) in pull request [18790](https://github.com/magento/magento2/pull/18790)*. [GitHub-18775](https://github.com/magento/magento2/issues/18775)



<!--- ENGCOM-3371-->* 

Edit customer in backend leads sometimes to a "loading circle" and error object does not support method "includes"

Replace usage of unsupported includes method with `_.contains`

Edit customer in backend leads sometimes to a "loading circle" and error object does not support method "includes"



*Fix submitted by [Oleksandr Miroshnichenko](https://github.com/omiroshnichenko) in pull request [19010](https://github.com/magento/magento2/pull/19010)*. [GitHub-18562](https://github.com/magento/magento2/issues/18562)





<!--- ENGCOM-3463-->* 

Fix selection of all items which are not visible in ui grid 

When you using select all option in UI grid, massaction js component sends only exclude list to server and Data Provider don't know what scope of ids should be selected from DB. In case if we will select some orders to be canceled and meanwhile some customer will place a new one, this new one order will be canceled too. This issue was fixed.

Select all orders selecting orders which are not visible in order grid.




*Fix submitted by [Yevhenii Dumskyi](https://github.com/progreg) in pull request [19204](https://github.com/magento/magento2/pull/19204)*. [GitHub-18983](https://github.com/magento/magento2/issues/18983)


<!--- ENGCOM-3381-->* You can now set default values for the WYSIWYG edit field for editing form UI components. *Fix submitted by [Oleksandr Miroshnichenko](https://github.com/omiroshnichenko) in pull request [19048](https://github.com/magento/magento2/pull/19048)*. [GitHub-10048](https://github.com/magento/magento2/issues/10048)


<!--- ENGCOM-3330-->* The global search icon on the Admin is now correctly aligned. *Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18940](https://github.com/magento/magento2/pull/18940)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)


<!--- ENGCOM-3037-->* Merchants can now change the currency symbol back to its default value from the Admin in Single-store mode. Previously, when a merchant tried to change this symbol back to its default value, Magento displayed a success message, but did not change the currency symbol back to the default value. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18204](https://github.com/magento/magento2/pull/18204)*. [GitHub-17567](https://github.com/magento/magento2/issues/17567)


<!--- ENGCOM-3106-->* 

Admin Grid column ordering/positioning not working when single store mode set On
New functionality filters out all disabled UI components (based on internal logic some components are not applicable when the store has single store mode enabled) as it affects children length comparison and different useful UX behaviours.


Nope, and it is annoying the heck out of me at the moment. Seems that column positioning doesnt work regardless of whether single store mode is on or off now. This seems a recent change in the latest version.



*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [18405](https://github.com/magento/magento2/pull/18405)*. [GitHub-12070](https://github.com/magento/magento2/issues/12070)




<!--- ENGCOM-3509-->*

Steps to reproduce
Place more than 10 orders (so that pager gets activated) as registered customer.
Go to 'My Orders' in My Account
Pager should be visible

Expected result 
Pager should be displayed correctly (Limiter should float to right side)
image

Actual result 
Pager is broken because the Limiter is over page links and we can't go to any other page.

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [19298](https://github.com/magento/magento2/pull/19298)*. [GitHub-19286](https://github.com/magento/magento2/issues/19286)


<!--- MAGETWO-91496-->* 

In deployment where modules that implement WYSIWYG in the dynamic rows UI component have been installed. 

Magento now 

Instantiating WYSIWYG in DynamicRows

Precondition 
Module that uses WYSIWYG in Dynamic Rows UI component created and installed

Steps

Go to Admin page
Add 2 rows
Expected result

WYSIWYG instance is available in each row
Actual result
WYSIWYG instance is available in the first row only






<!--- MAGETWO-96409-->* 

Unable to add more attributes in size


Merchant reports when trying to add another size to the size attribute swatch but when clicking on save the error "Admin is a required field in the each row." and other error at the top of the screen "The value of Admin scope can't be empty." but the admin field is not empty. When removing the swatch and saving the attribute it removes the first error"Admin is a required field in the each row." but continues to show the other error "The value of Admin scope can't be empty."

EXPECTED
Merchant is capable to see fields and see what he adds to this fields
Attribute saves a new swatch

ACTUAL

Returns the errors:
"Admin is a required field in each row."
"The value of Admin scope can't be empty."
notice: It happens because merchant doesn't see all fields because of big qty of store views that is the cause of this bug


<!--- MAGETWO-91751-->* Magento now correctly renders apostrophes as entered in text fields. 



### URL rewrites

<!--- MAGETWO-95539-->* The storefront now properly displays the order of categories when you move categories in the Admin.



<!--- MAGETWO-91531-->* Product URLs 

Some products use Categories Path for Product URLs

ISSUE:
Some products are showing the category path for product URLs 
Use Categories Path for Product URLs in stores>configuration>catalog>search engine optimization is set to "no"

ACTUAL RESULT: order of records in DB affects URLs on the frontend and ignores configuration in Admin

EXPECTED RESULT: URLs should use only configuration in Admin and not related to DB records order


<!--- ENGCOM-3925-->* 

*Fix submitted by [Ankur](https://github.com/ankur-cedcoss) in pull request [20344](https://github.com/magento/magento2/pull/20344)*. [GitHub-20282](https://github.com/magento/magento2/issues/20282)


Module Catalog Url Rewrite: Permanent Redirect for old URL is missed when product was imported


Module Catalog Url Rewrite: Permanent Redirect for old URL is missed when product was imported

Steps to reproduce
Export some visible product via System-> Data Transfer-> Export.
Change 'url-key' for this product in CSV file.
Import this product via System-> Data Transfer-> Import.

Expected result
When you try to open the changed product by the old URL key you are redirected to the new URL.

Actual result
When you try to open the changed product by the old URL key you receive 404-page.




### Visual Merchandiser

<!--- MAGETWO-91602-->* Visual Merchandiser now correctly sorts configurable product prices in Tile view.



### Web API

<!--- MAGETWO-96331-->* When using the `POST V1/products` endpoint to create a product with a name that already exists, Magento no longer returns the error `"URL key for specified store already exists."`.  Instead, Magento creates a unique URL key for the product. This is the same behavior as when a merchant creates a product with a name that's in use from the Admin UI.


<!--- MAGETWO-70532-->* The response for  `GET V1/orders/:orderId` now contains `bundle_option` and `product_option` information as expected.


<!--- MAGETWO-69021-->* 

salesOrderRepositoryV1 API Missing Extension Attributes

EXPECTED RESULTS:
All extension attributes listed in the documentation to be available

ACTUAL RESULTS:
salesOrderRepositoryV1 API Missing Extension Attributes



<!--- ENGCOM-3834-->* 

*Fix submitted by [Milind Singh](https://github.com/milindsingh) in pull request [20170](https://github.com/magento/magento2/pull/20170)*. [GitHub-20169](https://github.com/magento/magento2/issues/20169)


Order API resources updated


Admin user with restricted "order create" access can "view", "cancel", etc via API

Steps to reproduce
Create an Admin user with Order create access only. (as in image)
Login to Admin panel and verify the access.
Login to API via swagger and call the salesOrderRepositoryV1 and salesOrderManagementV1 API's.

Expected result
User can only create order neither view or cancel

Actual result 
User have the complete order access




### Wishlist

<!--- MAGETWO-62728-->* The quantity field now has limits on both the type and number of characters that can be entered. Previously, you could enter both extremely large number and letters into this field, which resulted in undesiraable and inaccurate changes in quantity. 

<!--- MAGETWO-95311-->* Magento no longer retains entries for deleted products in the database `wishlist_item_option` table.  




<!--- MAGETWO-95837-->* 

Product is added to Wish List with Attributes selected however they were unselected on PDP before	

Configurable Product P (based on "Color" & "Size" in my case - both of Visual Swatch type) is purchasable & available on Storefront
Customer Account C is registered & has empty Wish List & Shopping Cart
STEPS
Log in to Storefront as C
Open P page
Select required Attributes (let's name this state P1)
Unselect selected Attributes
Add product to Wish List
Go to Wish List
Click Add All to Cart button
ACTUAL RESULT
 P1 is added to Cart with Attributes selected

EXPECTED RESULT
 "You need to choose options for your item for P" error message is shown, Cart is still empty



<!--- MAGETWO-91676-->* When you use the orders API to purchase a gift card, Magento now includes the gift card-specific information in the API response. 

<!--- MAGETWO-91667-->* You can now add a configurable product with no options  to a gift registry from a wishlist. 

<!--- ENGCOM-3922-->* 

*Fix submitted by [Khodu](https://github.com/khodu) in pull request [20247](https://github.com/magento/magento2/pull/20247)*. [GitHub-20245](https://github.com/magento/magento2/issues/20245)




wishlist-patch : remove the comment from wishlist product


if we try to remove the comment from wishlist product then the 'Comment' value is not deleted if we try to update it then updated.




<!--- ENGCOM-3912-->* 


*Fix submitted by [Nainesh](https://github.com/nainesh2jcommerce) in pull request [20400](https://github.com/magento/magento2/pull/20400)*. [GitHub-20399](https://github.com/magento/magento2/issues/20399)


 'wishlist-page-edit-remove-item-misalign' :: On wish list page edit, 



On wish list page edit, remove item misalign in 640 X 767 resolution 

Steps to reproduce 
add product to wish list
check edit remove item button on 640 X 767 resolution



<!--- ENGCOM-3569-->* 

*Fix submitted by [Ratnesh Kumar](https://github.com/webkul-ratnesh) in pull request [19305](https://github.com/magento/magento2/pull/19305)*. [GitHub-19292](https://github.com/magento/magento2/issues/19292)



Pagination controls are missing on wishlist page

Steps to reproduce 
Register or login to a customer account.
Navigate to any category page.
Add more than 10 products in wishlist (I tried with adding 40 products into wishlist)

Not showing any pagination on the wishlist page.






## Known issues





## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:


* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.


### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 


### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.


### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html)


For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).


### Installation and upgrade instructions

You can install Magento Commerce 2.3.0  using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.



