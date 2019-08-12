---
group: release-notes
title: Magento Commerce 2.3.3 Release Notes
---

*Patch code and release notes published on*

We are pleased to present Magento Commerce 2.3.3.  This release includes over  functional fixes to the core product, over  pull requests contributed by the community, and  over 75 security enhancements. It includes  contributions from our community members. These contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.




## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes extensive security enhancements:

* **75 security enhancements** that help close cross-site scripting (XSS), remote code execution (RCE), and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.3-2.2.10-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.3.2) have been ported to 2.2.10, 1.14.4.3, and 1.9.4.3, as appropriate.


{:.bs-callout .bs-callout-note}
Starting with the release of Magento Commerce 2.3.2, Magento will  assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This  will allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Performance boosts



### Infrastructure improvements

This release contains  enhancements to core quality, which improve the quality of the Framework and these modules: `Catalog`, `Sales`, `Checkout/One Page Checkout`,  `UrlRewrite`, `Customer/Customers`, and `UI`. Here are some additional core enhancements:


### Merchant tool enhancements



### Inventory Management enhancements


* Fixes to multiple  bugs. See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html).

### GraphQL

GraphQL performance improvements include these enhancements:


See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### Progressive Web Apps (PWA)

* **Improved modular component library**. PWA Studio continues to build out the concept for functional and data components through the Peregrine library. Components can now be reused and scaled for frontend needs. Magento has planned a phased rollout for Peregrine functional and data components, starting with the Search component which is launching with this release.



### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors.

#### Amazon Pay

Amazon Pay is now compliant with the PSD2 directive for UK and Germany. See [Payment services (PSD 2) - Directive (EU)](https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en) for an introduction to PSD2.

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.3 core code.

### Installation, upgrade, deployment

<!--- MAGETWO-99616-->
* Magento font icons now load as expected when deployment optimization is implemented.

<!--- ENGCOM-5056-->
* The short form versions of the `—lock-env`  and  `—lock-config`  ` bin/magento config:set` options now work as expected. *Fix submitted by Satya Prakash in pull request [22720](https://github.com/magento/magento2/pull/22720)*. [GitHub-22395](https://github.com/magento/magento2/issues/22395)

<!--- ENGCOM-5184-->
* Magento now displays an exception message when an error occurs during static content deployment. Previously, if an error occurred, Magento showed the stack trace only. *Fix submitted by Ihor Sviziev in pull request [22884](https://github.com/magento/magento2/pull/22884)*. [GitHub-22882](https://github.com/magento/magento2/issues/22882)

<!--- ENGCOM-5002-->
* You can now use JSON to  set a configuration value for a configuration option through the command line. *Fix submitted by Shikha Mishra in pull request [22513](https://github.com/magento/magento2/pull/22513)*. [GitHub-22396](https://github.com/magento/magento2/issues/22396)

<!--- MC-18052--> ee only
* `\Magento\Setup\SplitDbTest::testUpgradeWithSplitDb` no longer fails by default.

<!--- MC-18697--> 
* PHP unit tests no longer fail by default when Magento is installed from Composer.

### AdminGWS EE ONLY

<!--- MAGETWO-99801--> 
* An administrator with permission to a website now has access to the website’s theme configuration. Previously, this administrator could update the theme for the store view that is associated to a website, but not for the website. 

<!--- MAGETWO-99062-->
* Administrators with role scope set to **custom** can now view roles and user information.

<!--- MAGETWO-99711--> 
* Administrators with restricted access to Catalog and Content can now mass-update products. Previously, when an administrator tried to mass-update products, Magento did not update the products, and displayed an empty menu for **Stores**. 

<!--- MAGETWO-98256-->
* An administrator with access rights to one website only in a multisite deployment can now mass-update products for that website only. Previously, this administrator could not mass-update products on any website in the deployment. 

<!--- MAGETWO-99411-->
* An administrator with restricted privileges  can now successfully create a catalog price rule. Previously, a restricted administrator could create a catalog price rule, but when they saved it, Magento displayed an error, and does not generate any scheduled update to set it to inactive.

<!--- MC-17879-->
* Magento now applies the correct role scope for administrators in multisite deployments. (Post data is now saved in the session and re-rendered to user only if the validation fails.)  Previously, when you had two administrative roles with different website scopes, and you viewed one role before saving it and opening the second role, the Website scope attributed to the second role was incorrectly taken from the first role. 

<!--- MC-18148-->
* Administrators with restricted permissions can now edit companies. Previously, even when the administrator had restricted but appropriate permission to edit companies, Magento displayed this error: `The requested company is not found`.

<!--- MC-18070--> 
* Administrators that have access to all websites can now see a complete list of websites, stores, and store views no matter which edit operations  that a administrator with restricted access might perform. Additionally, any edit operation done by another admin user with limited access (for example, limited to one website) will not affect the fully privileged account. Previously, administrators with full access could not see the full list for all websites after an administrator with limited website-level access makes updates.

<!--- MAGETWO-97867-->
* We've improved the performance of logging into the Admin for users with limited permissions. Previously, logging in as an administrator with limited permissions was significantly slower than logging in as a administrator with full access. 

### Backend

<!--- MC-17275-->
* The Magento Admin now loads without issue after you change store domain or set cookies to a different domain. Previously, the page did not redirect as expected.

<!--- MC-17675-->
* The Admin no longer displays incorrect currency codes when the default base currency differs from the default website currency. 	

<!--- MC-17609-->
* The store view drop-down menu no longer displays unnecessary symbols. 


### Bundle

<!--- MAGETWO-99371-->
* You can now successfully check out  bundle products using the Braintree payment method with the payment method set to **Authorize and Capture**. 

<!--- ENGCOM-5360-->
* Discount coupons now work as expected for bundle products that include both virtual and simple products when **Ship Bundle Items** setting is set to **Separately**.  *Fix submitted by Nikolay Sumrak in pull request [22987)(https://github.com/magento/magento2/pull/22987)*. 


### B2B EE ONLY

<!--- MAGETWO-99846-->
* The `Magento_SharedCatalog::manage` role is now defined in the `acl.xml` file.

<!--- MAGETWO-99325--> 
* Magento now maintains custom prices for products in both the catalog and shopping cart after a quote is recalculated. Previously, the product price reverted to the default price after you recalculated the quote. 

<!--- MAGETWO-91614-->
* You can now successfully filter customer by status in the **Customers** > **All Customers** table. Previously, Magento threw an SQL error and displayed this message: `Something went wrong with processing the default view and we have restored the filter to its original state`.

<!--- MAGETWO-99436-->
* Magento now displays the category tree as expected when you choose **Set Pricing and Structure** on a new shared catalog. 

<!--- MAGETWO-99379-->
* It is now significantly quicker to create a new company account from the storefront. It now takes the same amount of time to create a new company account on the storefront as from the Admin. Previously, it took much longer to create a new company account on the storefront. 

<!--- MAGETWO-94004-->
* You can now successfully configure bundle, grouped, and configurable products from the Admin when shared catalogs are enabled and you’ve added products to an order by SKU.

<!--- MAGETWO-98825-->
* Magento now correctly applies category permissions depending upon the scope values you set. Previously, when you enabled shared catalogs for only one website in a multi-site deployment, Magento applied catalog permissions globally instead of to the designated website only. 

<!--- MC-16245-->
* Export files now include all columns (including those not visible in the Company list) and their data. Previously, the `State/Province` columns of the exported CSV file were empty.

<!--- MC-15524-->
* Magento no longer displays the **Created/Last Updated from-to** fields for quotes that are not associated with the administrator that is currently logged-in. 

<!--- MC-17642-->
* Magento now displays an informative message when the site takes some time to process a user's attempt to use Quick Order to add an empty SKU to their shopping cart. Previously, users could not navigate to another page while the browser hung, and Magento did not display  message. 

<!--- MC-18481-->
* Magento now correctly updates SKU quantity when you use Quick Order and manually enter SKU in the **Enter Multiple SKU's** field when using Internet Explorer 11.x. 

<!--- MAGETWO-97316-->
* The behavior of the Catalog page Requisition list menu has been corrected.  

<!--- MAGETWO-99871-->
* Magento now issues only a single request to the server when you change an order’s shipping address to a non-default address. Previously, Magento issued multiple requests to the server when you changed an order’s shipping address, which affected performance. 

<!--- MAGETWO-99368-->
* Non-administrative users who have been granted access privileges to catalogs and shared catalogs now also have access to the menu that permits them to manage these catalogs. Previously, these non-Admin users had permission to access the shared catalog, but not the menu that would permit them to manage the shared catalog. 

<!--- MAGETWO-99123-->
* Guests can now access available  product options for a configurable product when one of its simple product options is out of stock but the configurable product is listed as in-stock in the shared catalog. Previously, under these circumstances, the options drop-down menu for the configurable product was empty, which prevented guests from ordering available options. 

<!--- MAGETWO-99302-->
* The State/Province drop-down menu available from the Admin Edit Customer form no longer lists duplicate entries for states and provinces.

<!--- MAGETWO-71835-->
* The Shared Catalog column tooltip on the Admin product list  now sorts values alphabetically.  

<!--- MAGETWO-71309-->
* Magento no longer highlights quote totals  on draft quotes. 

<!--- MC-17276--> 
* Magento now recalculates cart subtotals as expected when one of the ordered products that belongs to a shared catalog  is disabled from the Admin. Previously, when you reloaded the cart after one of its products had been disabled, Magento reloaded the cart page with this exception: `Exception #0 (Magento\Framework\Exception\NoSuchEntityException): The product that was requested doesn't exist. Verify the product and try again`.

<!--- MC-15900-->
* Magento now successfully saves customer segments after you've deleted a customer from the Admin. Previously, Magento threw an error and displayed this message: `We can't save the segment right now`.
  
### Cache

<!--- MAGETWO-98650-->
* Full-page cache no longer clears out the checkout session data on uncached pages when the `Magento_Persistent` module was disabled.

<!--- MAGETWO-54438--> 
* Magento now displays simple products on the storefront after the cancellation of an order that contains the bundled simple product. Previously, products did not appear on the storefront after an order containing the bundle product to which the simple product belongs was canceled.

<!--- MC-18565-->
* Magento now correctly calculates the total product quantity when you enter multiple SKU values in Quick Order. 


### Cart and checkout

<!--- MAGETWO-97317-->
* The REST API call for adding an item to a cart now includes the product’s price when it returns the product from an already populated cart. Previously, the item’s price was not returned if that cart had been emptied before the call was made.

<!--- MAGETWO-99075-->
* Magento now submits an order only once when an order is submitted using **Enter**. Previously, Magento submitted several `payment-information` requests, and several orders with the same quote ID were placed.

<!--- MAGETWO-48570-->
* Products added to a shopping cart through REST now display correct product prices.  Previously, the shopping cart displayed product prices of zero. [GitHub-2991](https://github.com/magento/magento2/issues/2991)

<!--- MC-17755-->
* Magento now displays an informative message when an error is thrown after the user’s Internet connection has been reset after placing an order. 

<!--- MAGETWO-99370-->
* You cannot add product quantities that require four digits to the shopping cart. Previously, Magento could not add four-digit product quantities to the cart. 

<!--- ENGCOM-4126-->
* Administrators with appropriate permissions can now view the contents of a registered customer’s cart from the Admin customer edit interface. *Fix submitted by Rav in pull request [20918)(https://github.com/magento/magento2/pull/20918)*. 

<!--- ENGCOM-5071-->
* Magento now applies the sort preferences that you set in website scope configuration for a particular website to the layout of the checkout page. Previously, sort order for elements of this page was derived from the default configuration, not website-specific values. *Fix submitted by Karan Shah in pull request [22387](https://github.com/magento/magento2/pull/22387)*. [GitHub-22380](https://github.com/magento/magento2/issues/22380)

<!--- MC-17808-->
* The Review & Payment section of the One Page checkout no longer displays custom customer attribute code when a guest checks out.

<!--- MC-18281-->
* The checkout order summary now displays the correct number of ordered items. 

<!--- ENGCOM-5357-->
* The minicart loader is now visible when you add a product to the minicart. *Fix submitted by Geeta Modi in pull request [23394](https://github.com/magento/magento2/pull/23394)*. 


### Cart Price rules

<!--- ENGCOM-5086-->
* Coupon codes now work as expected. Previously, coupons sent for specific dates in a cart price rule were not applied. *Fix submitted by Adarsh Shukla in pull request [22718](https://github.com/magento/magento2/pull/22718)*. [GitHub-18183](https://github.com/magento/magento2/issues/18183)



### Catalog

<!--- MAGETWO-99890-->
* You can now use the Select all option when creating a mass-update action when the total number of products exceeds the number of displayed products per page. Previously, Magento updated  only the number of products that were displayed per  page were updated.

<!--- MAGETWO-63599-->
* Magento no longer throws an error when you execute `php bin\magento catalog:images:resize` and our deployment contains images with a zero byte size. Instead, it skips the offending file and updates the log file to indicate where the problematic file resides. [GitHub-8204](https://github.com/magento/magento2/issues/8204)

<!--- MAGETWO-98708-->
* You can now successfully clone a product with a linked product. Previously, cloning  failed and Magento displayed this error:  `The linked products data is invalid. Verify the data and try again`. 

<!--- MC-17706--> EE ONLY
* A product that belongs to a category where the permissions do not allow adding it to cart can now be added to the cart from a different category. Previously, you could not a product to the cart if one of the categories to which it belongs does not permit adding it the cart. 

<!--- MAGETWO-98804--> EE ONLY
* Magento now displays the correct currency to the Admin **Catalog** > **Products**  list  in deployments where websites are assigned different currencies. Previously, the products on the Admin Category page displayed  the base currency even when **Product Price Scope** was set to **Per Website** and the website was assigned a different currency.

<!--- MAGETWO-69893-->
* Magento disables the **New Category** button on the Product page from an administrator with restricted permissions for managing categories. Previously, these administrators could see the **New Category** button, and Magento threw a 403 error when one of these administrators with restricted permissions tried to create a category. 

<!--- MC-17640-->
* The Items Ordered table (**Admin** > **Sales** > **Orders**) no longer displays bundle option discount amounts with tags. 

<!--- MC-17218-->
* Magento now creates resized images for all products for which images exist and lists the errors  when you run `php bin/catalog:image:resize`. Previously, execution halted at the first missing image.

<!--- MC-17387-->
* You can now add a bundle product from a wishlist to your shopping cart. Previously, Magento threw a fatal error 

<!--- MAGETWO-92712-->
* `\Magento\Catalog\Model\CategoryList::getList` now returns a sorted list of categories as expected.

<!--- MAGETWO-70599-->
* The Admin Product Edit page and Customers page now load without JavaScript errors. [GitHub-5967](https://github.com/magento/magento2/issues/5967)

<!--- MAGETWO-64923-->
* A duplicated product that has been set to **Stock and Enabled** now appears as expected on the storefront. 

<!--- MAGETWO-59400-->
* An invalid join condition in Product Flat Indexer has been refactored, and product relations are now correctly joined by `entity_id` field. Previously, products were joined incorrectly during catalog re-indexing when staging was enabled. 

<!--- MAGETWO-99587-->
* Custom options prices that are assigned to a website scope no longer rewrite prices on all scopes.

<!--- MAGETWO-59978-->
* Videos in product descriptions now appear as they do in the Admin WYSIWYG editor. Previously, videos in the storefront product descriptions had the incorrect height. 

<!--- MAGETWO-59431-->
* Sample data now scales correctly when resized in mobile view.

<!--- ENGCOM-5371-->
* Customers no longer receive product alerts after they have unsubscribed from product alerts. Previously, the product alert was not removed from the `product_alert_stock` table as expected, but Magento still displayed this message on the storefront: **You will no longer receive stock alerts for this product**.  *Fix submitted by yuriichayka in pull request [23459](https://github.com/magento/magento2/pull/23459)*. [GitHub-22814](https://github.com/magento/magento2/issues/22814)

<!--- ENGCOM-5387-->
* Magento no longer automatically assigns a storeID to a saved product that is not assigned to a store.  *Fix submitted by manishgoswamij in pull request [23500](https://github.com/magento/magento2/pull/23500)*. [GitHub-23383](https://github.com/magento/magento2/issues/23383), [GitHub-23500](https://github.com/magento/magento2/issues/23500)

<!--- ENGCOM-5410-->
* Corrected misspellings in `lib/web/css/docs/source/_actions-toolbar.less` and  `lib/web/css/docs/source/_layout.less`. *Fix submitted by Prashant Sharma in pull request [22624](https://github.com/magento/magento2/pull/22624)*. 

<!--- ENGCOM-5067-->
* Magento now displays the currency code as expected in the Cost column of the Admin catalog product list. *Fix submitted by Vlad Veselov in pull request [22739](https://github.com/magento/magento2/pull/22739)*. [GitHub-20906](https://github.com/magento/magento2/issues/20906)

<!--- MAGETWO-99489-->
* The Add to Cart button is no longer visible to users who do not have Add to Cart category permissions. Previously, guest users could add items to the cart without being granted Add to Cart permission. 


<!--- MC-5777--> asked Misha if really fixed

<!--- MC-17020-->
* We’ve refined how Magento validates partial permissions.  Design edit permissions for categories, products, and CMS pages are now validated for each endpoint (web API and other) outside of the related model-layer classes. The web API now returns an error when design-related fields are being overridden. Previously, this behavior was ignored.

<!--- MC-10966-->
* Product availability is no longer tied to events associated with the categories to which they belong. Instead, Magento now uses the current category event for the page on which the product is displayed. Previously, products that were tied to categories with no events could be purchased, and products that were tied to expired events could not be purchased. 

<!--- MC-17765-->
* Magento now renames images with the same name in the `pub/media/catalog/category` directory. Previously, images with the same name that belonged to different categories were not uploaded properly. [GitHub-23376](https://github.com/magento/magento2/issues/23376)


### CatalogInventory

<!--- MAGETWO-99941-->
* The status (in stock or out of stock) of a configurable product in the Admin now matches the status displayed on the storefront. 

<!--- MAGETWO-99585-->
* Magento now correctly updates the `qty_backordered` value in the  `sales_order_item` table after you create an order that contains a backordered item. 

<!--- MC-17513-->
* Stock status records for all products are now added as expected  to the `cataloginventory_stock_status` table after a partial re-indexing.



### Catalog rule

<!--- MAGETWO-99592-->
* You can now use Visual Merchandiser to drag and drop products without losing product information. Previously, all discounts for products in the affected category was lost after dragging and dropping products.  

<!--- MAGETWO-99873-->
* Coupon expiration dates now match the end date of the staging update the coupons are assigned to. 

<!--- MC-17460-->
* A coupon's expiration date and time now matches the `end_date` value set in the staging update. Previously, coupon expiration dates could differ from the expiration date set by the sales rule. 

<!--- MC-18254-->

### Cleanup and simple code refactoring

<!--- ENGCOM-3817-->
 * Corrected poor positioning  of the Shop By menu on product pages in mobile view (iphone5).  *Fix submitted by Arvinda Kumar in pull request [20135](https://github.com/magento/magento2/pull/20135)*. [GitHub-20124](https://github.com/magento/magento2/issues/20124)

<!--- ENGCOM-4840-->
* Corrected misalignment of Wishlist and Compare icons on the product page. *Fix submitted by sanjaychouhan-webkul in pull request [22532](https://github.com/magento/magento2/pull/22532)*. [GitHub-22527](https://github.com/magento/magento2/issues/22527)

<!--- ENGCOM-4788-->
* Store view-specific labels are no longer truncated in the left navigation menu of the Cart Price Rule Store View Specific Labels window (**Marketing** > **Cart Price rule** > **Labels** ).  *Fix submitted by Sudhanshu Bajaj in pull request [22423](https://github.com/magento/magento2/pull/22423)*. [GitHub-22406](https://github.com/magento/magento2/issues/22406)

<!--- ENGCOM-5059-->
* Added missing header to the Customer Sales Order table and corrected multiple typos. *Fix submitted by Vishal Sutariya in pull request [22643](https://github.com/magento/magento2/pull/22643)*. [GitHub-22641](https://github.com/magento/magento2/issues/22641)

<!--- ENGCOM-5054-->
* Improved awkward formatting of the customer account create page in mobile view. *Fix submitted by Arvinda Kumar in pull request [22656](https://github.com/magento/magento2/pull/22656)*. [GitHub-22647](https://github.com/magento/magento2/issues/22647)

<!--- ENGCOM-5061-->
* The checkbox on the Add New Tax Rule form has been redesigned to match the Admin checkbox. *Fix submitted by Surabhi Srivastava in pull request [22655](https://github.com/magento/magento2/pull/22655)*. [GitHub-22640](https://github.com/magento/magento2/issues/22640)

<!--- ENGCOM-5281-->
* Corrected typo in CONTRIBUTING.md. *Fix submitted by Raul E Watson in pull request [23244](https://github.com/magento/magento2/pull/23244)*. 


<!--- ENGCOM-5408-->
* Corrected poor spacing in the Gift message section of the My Account page. *Fix submitted by Amjad M in pull request [23226](https://github.com/magento/magento2/pull/23226)*. [GitHub-22950](https://github.com/magento/magento2/issues/22950)

<!--- ENGCOM-5344-->
* The asterisk  sign is now constantly positioned when used throughout the Admin. *Fix submitted by Atish Goswami in pull request [22650](https://github.com/magento/magento2/pull/22650)*. [GitHub-13227](https://github.com/magento/magento2/issues/13227)

<!--- ENGCOM-5326-->
* Corrected misspelling in `app/code/Magento/Ui/Block/Wrapper.php`. *Fix submitted by Ravi Chandra in pull request [23335](https://github.com/magento/magento2/pull/23335)*. 

<!--- ENGCOM-5287-->
* Corrected typo in the tooltip toggle selector. *Fix submitted by Karla Saaremäe in pull request [23248](https://github.com/magento/magento2/pull/23248)*. 

<!--- ENGCOM-5068-->
* Corrected misalignment of the Compare Products and My Wish List counters in the sidebar. *Fix submitted by sanjaychouhan-webkul in pull request [22742](https://github.com/magento/magento2/pull/22742)*. [GitHub-22676](https://github.com/magento/magento2/issues/22676)
 

<!--- ENGCOM-5089-->
 * Corrected scrolling behavior on Product page. Previously, after you clicked on  a product's reviews count on a product page, you had to scroll in order to see customer reviews.  *Fix submitted by sanjaychouhan-webkul in pull request [22794](https://github.com/magento/magento2/pull/22794)*. [GitHub-21558](https://github.com/magento/magento2/issues/21558)

<!--- ENGCOM-5126-->
* Magento now displays the  cursor to the right of the search keyword box as expected after multiple clicks on the search field in mobile view. *Fix submitted by sanjaychouhan-webkul in pull request [22795](https://github.com/magento/magento2/pull/22795)*. [GitHub-22736](https://github.com/magento/magento2/issues/22736)

<!--- ENGCOM-5125-->
* Refactored the page title of the billing agreements page. *Fix submitted by Amit Vishvakarma in pull request [22876](https://github.com/magento/magento2/pull/22876)*. [GitHub-22875](https://github.com/magento/magento2/issues/22875)

<!--- ENGCOM-3817-->
* The Shop By Menu no longer overlays the **Sort By** label on the product listing page. *Fix submitted by Arvinda Kumar in pull request [20135](https://github.com/magento/magento2/pull/20135)*. [GitHub-20124](https://github.com/magento/magento2/issues/20124)


<!--- ENGCOM-5124-->
* Adjusted the position of the store-view label on **Admin** > **Content** > **Design** > **Configuration** > **Theme**.  *Fix submitted by Kajal Solanki in pull request [22926](https://github.com/magento/magento2/pull/22926)*. [GitHub-22924](https://github.com/magento/magento2/issues/22924)

<!--- ENGCOM-5376-->
* Fixed spacing issue on **Admin** > **System** > **Import**. *Fix submitted by Kajal Solanki in pull request [21128](https://github.com/magento/magento2/pull/21128)*. 


### CMS content

<!--- MAGETWO-99695-->
* Corrected alignment of the search suggestion panel with the **Advance reporting**  button.  *Fix submitted by webkul-ajaysaini in pull request [22520](https://github.com/magento/magento2/pull/22520)*. [GitHub-22506](https://github.com/magento/magento2/issues/22506)

<!--- MC-5527-->
* You can now remove text that is placed adjacent to a TinyMCE4 widget.


### Configurable products

<!--- MAGETWO-99443-->
* Magento now validates the uniqueness of attribute option values during product creation. Previously, Magento did not save the product and displayed this error: `The value of Admin must be unique`.

<!--- MAGETWO-99550-->
* The design of the tax rule form check box now matches the Admin checkbox design.

<!--- ENGCOM-4844-->
* The configurable product gallery now displays images in correct order when the list of images exceeds 10 images.  Correct order complies with the order assigned in the Admin. *Fix submitted by Mateusz Wira in pull request [22287](https://github.com/magento/magento2/pull/22287)*. [GitHub-22249](https://github.com/magento/magento2/issues/22249)

<!--- MAGETWO-99500-->
* You can now use REST to assign positions to configurable product attributes. Previously, when you use REST to assign positions to configurable product attributes, the position value was overwritten after you linked simple products to the configurable product.


### cron

<!--- ENGCOM-5210-->
* Runtime exception handling for cron jobs has been improved.  When an exception occurs now, the current  run is marked as **failed** in the `cron_schedule`  table, the when the next run completes correctly, Magento updates job status at the end of the `cron_schedule` table. When a job previously failed, the `cron_schedule`  table was filled with pending jobs, no job for `indexer_update_all_views` was run (with no corresponding output in `var/log/cron.log`, and no status updates were appended to the `cron_schedule` table.

<!--- ENGCOM-5335-->
* Cron jobs are no longer duplicated. Previously, after a cron job was run, Magento cleared the cache and processed the job again. *Fix submitted by Douglas Radburn in pull request [23312](https://github.com/magento/magento2/pull/23312)*. 

<!--- MC-18477-->
* Consumers run from `cron` no longer create deadlocks in the database. 
  
### Customers

<!--- MAGETWO-99647-->
* Custom customer address attribute are populated with the  values that have been assigned for the selected  address when the **Same As Billing Address** setting is disabled. Previously, when a merchant tried to change an address while creating an order from the Admin, the drop-down menu of available addresses was not populated. 

<!--- MAGETWO-99493-->
* The account status list now updates as expected to correctly indicate when an account's lock status after `cron` is run.  Previously, this list displayed status as  unlocked only.

<!--- MAGETWO-99496--> EE ONLY
* You can now create and successfully save a customer attribute when the **Use in Filter Options** and **Use in Search Options** settings are set to **no**. Previously, Magento did not display these attributes, and they could not be edited.


<!--- MAGETWO-99355--> EE ONLY
* You can now create a customer segment that exceeds 1,500,000 customers. Previously, Magento threw a 500 error when you tried to create a customer segment that large.

<!--- MAGETWO-88905-->
* Import checks now finish successfully when the csv file contains a customer `gender` field. Previously, Magento threw this error:  `Value for gender attribute contains incorrect value, see acceptable values on settings specified for Admin in row(s): 1`. 

<!--- MAGETWO-93522-->
* Custom customer attributes are now always displayed in the Admin customer create and edit forms. Previously, the Admin did not display these attributes  unless they are configured to show on either the Customer Registration or Customer Account Edit forms. [GitHub-14456](https://github.com/magento/magento2/issues/14456)

<!--- MAGETWO-99584-->
* You can now create an order from the Admin when  you have a customer segment for customers with 0 or more orders. Previously, if you had a customer segment for customers with 0 or more orders, an SQL error occurred when you tried to create an order in the Admin.
  
<!--- MC-17769-->
* You can now create an order from the Admin with a customer segment based on zero  or more orders and the table prefix is specified. Previously, Magento threw an error when you tried to create an order from the Admin under these conditions. 

<!--- MC-18250-->
* The **Phone Number** field is now marked as required on the My account page.

<!--- ENGCOM-5378-->
* Magento no longer displays editable text fields for customer phone numbers and zip codes if customers have not saved an address. *Fix submitted by Kazim Noorani in pull request [23494](https://github.com/magento/magento2/pull/23494)*. 


### Custom customer attributes

<!--- MAGETWO-99451-->
* Custom customer address attribute values are populated as expected when an administrator changes a customer's  address during order creation from the Admin. Previously, the custom attribute drop-down was empty.

<!--- MC-17928-->
* You can now edit a customer address from the Admin (**Admin** > **Customer** > **Address** > **Edit Address**) when the customer address attribute is of type `file` or `image`. Previously, Magento did not display the Edit Address form when you clicked on **Edit Address**. 

### Database media storage

<!--- ENGCOM-5469-->
* The PDF logo file is now database-aware. Consequently, logo images always appears at the top of the PDF, even after the local pub/media directory is cleared. *Fix submitted by gwharton in pull request [23752](https://github.com/magento/magento2/pull/23752)*. [GitHub-23751](https://github.com/magento/magento2/issues/23751)

<!--- ENGCOM-5431-->
* The `catalog:images:resize` function is now database-media-storage-mode aware. As a result, resized images are now extracted from the database if they don’t exist locally prior to resizing, and are now stored back into the database once the resize operation completes. *Fix submitted by gwharton in pull request [23598](https://github.com/magento/magento2/pull/23598)*. [GitHub-23595](https://github.com/magento/magento2/issues/23595), [GitHub-23594](https://github.com/magento/magento2/issues/23594), [GitHub-23596](https://github.com/magento/magento2/issues/23596)

<!--- ENGCOM-5442-->
* The  **use default value** checkbox on the Media Storage Location configuration setting has been removed. Previously, that page’s JavaScript routines interfered with that option, and consequently, the checkbox could be enabled but was still ignored. *Fix submitted by gwharton in pull request [23710](https://github.com/magento/magento2/pull/23710)*. [GitHub-23597](https://github.com/magento/magento2/issues/23597)




### Directory

<!--- MAGETWO-99424-->
* The country drop-down list no longer includes an extraneous zero (0) when the allowed countries in the list differ from countries identified as top destinations. 



### Downloadable

<!--- ENGCOM-5157-->
* Downloadable products are now immediately accessible after they’ve been paid for. Previously, a downloadable product’s status remained in the pending state after payment for the product has been completed.  *Fix submitted by Shikha Mishra in pull request [22658](https://github.com/magento/magento2/pull/22658)*. [GitHub-22545](https://github.com/magento/magento2/issues/22545)

<!--- MAGETWO-98656--> 
* New downloadable products now appear in the customer's downloadable products section after a customer checks out as a guest and then creates an account.


### EAV

<!--- MC-17505-->
* Starting and ending spaces are now trimmed from phone numbers before JavaScript validation. Previously, Magento did not trim these spaces displayed this error: `*Phone Number* contains non-numeric characters`

<!--- MC-17623-->
* You can now  save multiselect and select attribute options when swatches modules are disabled.
[GitHub-23326](https://github.com/magento/magento2/issues/23326)



### Email

<!--- ENGCOM-5433-->
* Email created using a CSS-heavy template is now sent successfully. Previously, these emails were rejected by the server with this message:  `Message too big`.  *Fix submitted by gwharton in pull request [23649](https://github.com/magento/magento2/pull/23649)*. [GitHub-23643](https://github.com/magento/magento2/issues/23643)

<!--- ENGCOM-5090-->
* The Template Preview tab now loads with the default content that was assigned during the creation of a New Shipment email template as expected. Previously, the Template Preview Tab did not load the default content. *Fix submitted by Gaurav Agarwal in pull request [22791](https://github.com/magento/magento2/pull/22791)*. [GitHub-22788](https://github.com/magento/magento2/issues/22788)

<!--- ENGCOM-5393-->
* All emails are now sent with correct MIME encoding. *Fix submitted by gwharton in pull request [23535)(https://github.com/magento/magento2/pull/23535)*. 


### Frameworks

<!--- MAGETWO-99888-->
* The `equalArrays` function in `lib/web/mage/utils/compare.js` has been refactored to remove quadratic complexity. Previously, this feature  significantly retarded  Admin operations that were performed  on large number of products  (for example, adding a product to category by SKU).

<!--- MC-17583-->
* The performance of resize image operations has been improved. Previously, an SQL operation involved in the process returned redundant data, which resulted in images being saved multiple times. 

<!--- MAGETWO-99140-->
* The error message that Magento displays when the user creates an attribute that starts with the reserved word `container` has been improved. For example, when a user created product attributes named  `container_attributename` and `attributename`, Magento threw this error: `Exception in Magento/Framework/View/Element/UiComponentFactory.php` rather than nstating which user behavior was causing the system problem.

#### JavaScript framework

<!--- MAGETWO-99535-->
* The cursor on the email field of the login page now behaves as expected when running Magento on Safari. Previously, the cursor repeatedly moved to the end of the email address field when you tried to edit this field. 

<!--- ENGCOM-5118-->
* Magento now displays previously missing validation messages on the storefront when JavaScript errors are caught by validation scripts in DatePicker form elements. *Fix submitted by Ravi Chandra in pull request [21397](https://github.com/magento/magento2/pull/21397)*. [GitHub-3795](https://github.com/magento/magento2/issues/3795)



### General fixes

<!--- MAGETWO-93061-->
* Magento now displays the correct content for a selected store  in multi-site deployments where the websites have the same URL but the CMS pages have different content. 

<!--- MAGETWO-99677-->
* Enabling a product now clears the full-page cache for PDP if product is not assigned to a category.

<!--- MAGETWO-36337-->
* The **Save in address book** checkbox on the Shipping Address section of the Admin Create Order page now behaves as expected. When this checkbox is enabled, the address in the Shipping Address field is saved, and merchants can disable or enable the checkbox.  

<!--- MAGETWO-70681-->
* All the `store_name` fields used in Sales and Quote modules is changed from type `text`  to type `varchar`, and field length has been extended to 255 symbols.

<!--- MC-17511-->
* Preloading of fonts has been moved from Blank theme to Luma.

<!--- ENGCOM-5171-->
* Magento no longer  includes canceled orders when calculating how many times a coupon code is used.  *Fix submitted by Pavel Bystritsky in pull request [20579](https://github.com/magento/magento2/pull/20579)*. [GitHub-12817](https://github.com/magento/magento2/issues/12817)

<!--- ENGCOM-5022-->
* Code Sniffer no longer marks correctly aligned DocBlock elements as code style violations. *Fix submitted by Pavel Bystritsky in pull request [22444](https://github.com/magento/magento2/pull/22444)*. [GitHub-22317](https://github.com/magento/magento2/issues/22317)

<!--- ENGCOM-5066-->
* Tier prices can now be float values. Previously, Magento converted float percentage value to `int` before saving it.  *Fix submitted by Maksym Novik in pull request [19584](https://github.com/magento/magento2/pull/19584)*. [GitHub-18651](https://github.com/magento/magento2/issues/18651)

<!--- MC-18094--> 
* Full page cache works as expected for non-default store views. 

<!--- MC-18270-->
* Magento no longer creates a persistent cart session for logged-in users when the persistent cart feature has been disabled. Previously, Magento did not empty shopping carts for users when the user logged out.

<!--- ENGCOM-5375-->
* The unused namespace import was removed from the  `CartTotalRepository.php` file. *Fix submitted by UlyanaKiklevich in pull request [23457](https://github.com/magento/magento2/pull/23457)*. 

<!--- MC-17934-->
* The back-in-stock alert emails that Magento sends to both wholesale and general customers now include the appropriate  wholesale and general  product prices. 

<!--- MC-14837-->
* The `MsrpSampleData` module installation script no longer generates incorrect data. Previously, the installation script of this module does not set any data from fixtures due to incorrect dependencies between sample data modules


### Gift cards accounts EE ONLY

<!--- MC-17124--> 
* Magento no longer creates a new gift card after issuing an online refund for another card. Previously, Magento created a new gift card account and sent the customer the previous gift card code and a new code. 

<!--- MAGETWO-99367-->
* All strings on storefront gift card messages can now be translated. 

<!--- MAGETWO-99425-->
* Magento no longer closes an order that is paid for with the partial redemption of a gift card. Previously, if an order is paid partially using gift card, and a partial refund is issued for that order, the order becomes closed.




### Gift registry

<!--- MC-18540-->
* Magento no longer displays a console error during checkout when the cart contains a product from the gift registry. Previously, due to a missing function, Magento displayed this error: `checkout-data-resolver.js:248 Uncaught TypeError: addrs.isDefaultBilling is not a function`.

### Google Tag Manager EE ONLY

<!--- MAGETWO-99026-->
* `getLoadedProductCollection() ` has been refactored to support PHP 7.2.


### Image

<!--- ENGCOM-4838-->
* You can now programmatically  move an image to the gallery using the  `addImageToMediaGallery` method with `$move`. Previously, when you tried to move an image programmatically, Magento threw this exception: `[InvalidArgumentException] File 'pub/media/import/' doesn't exist`.  *Fix submitted by dudzio12 in pull request [22020](https://github.com/magento/magento2/pull/22020)*. [GitHub-21978](https://github.com/magento/magento2/issues/21978)


### Import/export

<!--- MAGETWO-99894-->
* Import statistics now accurately reflect the results of import.

<!--- MAGETWO-98729-->
* Magento now successfully saves product URL keys in Arabic.

<!--- MAGETWO-98801-->
* Only modified or updated product records are flushed from the catalog cache after importing, re-indexing, and running `bin/magento cron:run --group index`. Previously, all products in the catalog were flushed. 

<!--- MAGETWO-99509-->
* You can now successfully download a CSV file after export. Previously, Magento redirected you to the Admin dashboard when you tried to download the CSV file that was created during export.

<!--- MAGETWO-99927-->
* Products are successfully updated through import of an CSV file in **Add/Update** mode. Previously,  the import process failed, and Magento displayed this error: `The value specified in the URL Key field would generate a URL that already exists`. 

<!--- MAGETWO-60918-->
* Magento no longer throws a fatal error during import or export if the category path contains deleted category IDs.  

<!--- MC-18472-->
* The import process maintain custom option prices that were assigned to different websites and scope before import. Previously, after import, these custom option prices were set to the default scope values. 

### Index

<!--- MAGETWO-99439-->
* We’ve improved the processing of memory tables in Galera Cluster.

<!--- MC-17981-->
* The pricing index can now be fully rebuilt and moved into the active price database table in a reasonable amount of time. Previously, this index ran without completing. [GitHub-22156](https://github.com/magento/magento2/issues/22156)

<!--- MC-17929-->
* The performance of product flat data re-indexing has improved. [GitHub-23462](https://github.com/magento/magento2/issues/23462)


### Infrastructure

<!--- ENGCOM-5352-->
* You can now use copy service on extension attributes for classes that extend Data Object. *Fix submitted by Oleksandr Kravchuk in pull request [23387](https://github.com/magento/magento2/pull/23387)*. [GitHub-23386](https://github.com/magento/magento2/issues/23386)

<!--- ENGCOM-5356-->
* Remove extraneous closing tag from the store-switcher template. *Fix submitted by Alastair Mucklow in pull request [23403](https://github.com/magento/magento2/pull/23403)*. 

<!--- ENGCOM-5462-->
* `\Magento\ConfigurableProduct\Pricing\Price\PriceResolverInterface` has been added to the `di.xml` file.  *Fix submitted by Eden Duong in pull request [23753](https://github.com/magento/magento2/pull/23753)*. [GitHub-23717](https://github.com/magento/magento2/issues/23717)

<!--- ENGCOM-5174-->
* Validation of forms that contain multiple fields with identical names has been improved. Previously, Magento validated the first file in the form but did not validate subsequent fields with that name.  *Fix submitted by Jay Ghosh in pull request [15383](https://github.com/magento/magento2/pull/15383)*. [GitHub-8258](https://github.com/magento/magento2/issues/82
<!--- ENGCOM-5337-->
* Magento now identifies review entity IDs programmatically instead of retrieving a hard-coded value. *Fix submitted by Danilo Argentiero in pull request [23353](https://github.com/magento/magento2/pull/23353)*.

<!--- ENGCOM-5384-->
* The array type hints in the Visibility model have been corrected from `int` to `string`. *Fix submitted by Patrick McLain in pull request [23532](https://github.com/magento/magento2/pull/23532)*. 

<!--- MC-15163--> asked Max :L

### Newsletter

<!--- MAGETWO-99636-->
* Magento now sends only a subscribe email when you create an account from an email invitation. Previously, when you subscribed to a newsletter from a registration link received through an email invitation, you received an email that subscribed you to the newsletter and also received an email that unsubscribed you.

<!--- MAGETWO-71785-->
* You can now export newsletter subscribers from the Admin. Previously, Magento displayed this error when you selected a subscriber name and clicked **Export**: `error: URI too long`.   

### Orders

<!--- ENGCOM-5405-->
* The creditmemo `getOrder()` method now returns the expected extension attributes for an order. Previously, this methodic not load orders correctly. *Fix submitted by Pavel Bystritsky in pull request [23358](https://github.com/magento/magento2/pull/23358)*. [GitHub-23345](https://github.com/magento/magento2/issues/23345)

<!--- ENGCOM-5398-->
* Magento now displays an informative error message when you try to update an order’s product quantity and shipping address when the product quantity field is empty.  *Fix submitted by Shankar Konar in pull request [23360](https://github.com/magento/magento2/pull/23360)*. 

### Page Builder

<!--- MC-16233-->
* The **Be the First to Review Product** link now directs the user to the product review form at the bottom of the product page as expected in deployments with PageBuilder deployed. 

<!--- MC-18009-->
* Disabled products now appear in the list of available products in the search results of the Page Builder link attribute (on buttons, images, banners, sliders). Previously, these products didn’t appear in search results, which prevented users from being able to create content that went live with a schedule update.

### Payment methods

<!--- MC-17337-->
* Magento now displays a more informative error message (`CVV verification failed` )when you enter an invalid CVV code while using the Braintree payment method. Previously, Magento displayed a generic error message.

<!--- MAGETWO-99035-->
* Customers can now successfully place an order when the order is partially paid for by gift card or when a discount is applied to the order. Previously, customers could not place an order, and Magento displayed this error: `error: Field format error: 10413-The totals of the cart item amounts do not match order amounts`.

<!--- MC-17462-->
* Magento now successfully creates orders that contain both simple and virtual products and that are created with Braintree and with ** Checkout with Multiple Addresses** enabled. Previously, Magento listed an order created with these features as an empty order with a grand total of zero on the Orders list. 

<!--- MAGETWO-99383-->
* Magento no longer processes payment for an order that has an empty email field in the quote. Previously, Braintree processed the payment, but displayed an error message on the storefront and did not create the order.

<!--- MAGETWO-99624-->
* Customers can now place the order for virtual products with a zero subtotal checkout payment. after entering address information. Previously, customers could not place an order for virtual products with a zero subtotal checkout payment if they modified their address, and Magento displayed this message:  `The requested Payment Method is not available`. 

<!--- MC-17236-->
* Magento now displays Chinese locale text strings for PayPal buttons as expected.  

<!--- MAGETWO-99586-->
* You can now cancel orders placed with PayPal Express even after authorization has expired. 

<!--- MC-16769-->
* The Transactions tab now displays the correct status for a capture transaction for an order that was placed with the Authorize.net `Accept.js` payment method. 

<!--- MAGETWO-99112-->
* The Admin sales list now displays each order’s payment method. [GitHub-22231](https://github.com/magento/magento2/issues/22231)

<!--- ENGCOM-5105-->
* Magento now displays stored payment methods and billing agreements if the related payment method is active. Previously, Magento displayed disabled payment methods in the customer dashboard. *Fix submitted by Torben Höhn in pull request [22850](https://github.com/magento/magento2/pull/22850)*. [GitHub-6659](https://github.com/magento/magento2/issues/6659)

<!--- ENGCOM-4839-->
* Magento no longer saves credit card information when the   **Save for later use** checkbox on the payment page is not enabled  during order creation.  *Fix submitted by Patrick McLain in pull request [19767](https://github.com/magento/magento2/pull/19767)*. [GitHub-19515](https://github.com/magento/magento2/issues/19515)

<!--- ENGCOM-5451-->
* Magento now disables the Order page’s  **Place Order** button until billing information has been updated when placing an order with Authorize.net. Previously, this button remained enabled, no matter the status of the order in progress. *Fix submitted by Eden Duong in pull request [23718](https://github.com/magento/magento2/pull/23718)*. [GitHub-23624](https://github.com/magento/magento2/issues/23624)

<!--- MC-17753-->
* Magento now displays an informative email message about invalid credentials when a user tries to pay for an order with the Authorize.net payment method that has an incompletely configured Authorize.net `accept js` account.

<!--- MC-17984-->
* You can now place an order from the Admin using Authorize.net as the payment method. Previously, Magento did not place the order and displayed this message: `Transaction has been declined. Please try again later`. 

<!--- MC-16289-->
* The **Credentials** button on the Configure PayPal Express Checkout page (**Admin** > **Stores** > **Configuration**  > **Sales**  > **Payment Methods** > **PayPal Express Checkout**) are now displayed properly in modes.

<!--- MAGETWO-99586-->
* You can now cancel an order created with PayPal Express when the authorization for the order has expired

<!--- MC-17576--> 
* Magento no longer throws an error when  you place an order using a custom payment method in deployments running Signifyd. Previously,  when you tried  to place an order using a custom payment method, an error related to the merge of signifyd_payment_mapping.xml files occurred.

<!--- MC-18689--> asked Misha

<!--- ENGCOM-5504-->
* Data type validation now occurs on data entered into the minimum and maximum order totals for all payment methods accessed under **Store** > **Configurations** > **Sales** > **Payment Method**. Previously, you could enter invalid at a types into these files, and Magento saved these values as the wrong data type. *Fix submitted by Eden Duong in pull request [23917](https://github.com/magento/magento2/pull/23917)*. [GitHub-23916](https://github.com/magento/magento2/issues/23916)

<!--- ENGCOM-4752-->
* The **PayPal Express Checkout** button now appears on the product details page only when the **Display on Product Details Page** and  **Enable Instant Purchase** configuration settings are enabled.  *Fix submitted by Nazar Klovanych in pull request [22260](https://github.com/magento/magento2/pull/22260)*. [GitHub-22045](https://github.com/magento/magento2/issues/22045), [GitHub-22134](https://github.com/magento/magento2/issues/22134)

<!--- ENGCOM-5452-->
* The location of the Zero Subtotal Checkout payment settings has been changed to **Stores**  > **Configuration** > **Sales**  > **Payment Methods**.  *Fix submitted by Andrea Parmeggiani in pull request [23679](https://github.com/magento/magento2/pull/23679)*. [GitHub-23678](https://github.com/magento/magento2/issues/23678)

### Pricing

<!--- MAGETWO-99152-->
* You can now save a special price that exceeds three characters in Japanese Yen. Previously, you could not apply denominations that exceeded three characters with a comma separator when representing Japanese Yen.

<!--- MAGETWO-98844-->
* You can now set product price that exceeds 100,000,000. 

### Reports

<!--- ENGCOM-5413-->
* The default date range for report filters is now set to the past month instead of the past 18 years. Previously, the default was set to 18 years, which resulted in errors in the filtered results. *Fix submitted by Yaroslav Rogoza in pull request [23607](https://github.com/magento/magento2/pull/23607)*. [GitHub-23606](https://github.com/magento/magento2/issues/23606)

<!--- MC-18195-->
* The start and finish date in reports now correspond to the entered  values when you create a report from the Admin. Previously, the start and finish dates  in the displayed report was one day earlier than you entered.

<!--- ENGCOM-5505-->
* The access controls on the **Reports** > **Product** > **Downloads** have been refactored to permit access to only administrators with the correct permissions. Previously, administrators with no access to this area could access the Downloads report. *Fix submitted by Eden Duong in pull request [23901](https://github.com/magento/magento2/pull/23901)*. [GitHub-23900](https://github.com/magento/magento2/issues/23900)
  
### Reviews

<!--- MAGETWO-99591-->
* Administrators with restricted privileges to reviews can now edit review status from the pending reviews list. 


### Return Merchandise Authorizations (RMA)

<!--- MAGETWO-98012-->
* Magento now autopopulates fields as expected when you create a Return Merchandise Authorization (RMA) using REST. Previously, the following fields were null: `customer_id`, `rma_entity_id`, `created_at`, and `entity_id`.
  
<!--- MC-17431-->
* Magento now displays only enabled shipping methods on the Return details page. Previously, shipping methods that were disabled for RMA were displayed in the Carrier dropdown menu on the Return details page. 

<!--- MAGETWO-60741-->
* Clicking **Show Packages** on a Returns page (**My Account** > **My Returns**  > **Return**) now opens a new page about the selected package.  Previously, clicking on this link resulted in a 404 error page. 


### Reward

<!--- MAGETWO-99901--> 
* Magento no longer sends reward point balance notification email to  clients  whose accounts have the **Subscribe for Balance Updates** setting disabled.

EE ONLY

<!--- MC-17798-->
* Online refunds now work as expected  when the **Refund Reward Points Automatically** configuration setting is enabled. Previously, the Refund button was disabled under these conditions. 


### Sales

<!--- MAGETWO-99691-->
* The Orders Total now reflects relevant product discounts when you re-order a product. Previously, discounts were not included when you re-ordered.

<!--- MAGETWO-99460-->
* Custom order statuses no longer override default statuses in drop-down menus.

<!--- MAGETWO-99430-->
* The Admin payment method validation now uses the updated billing address country for orders placed in the Admin. Previously, order creation failed when the **Payment from Applicable Countries** setting was set to **Specific Countries** and a non-US country was selected from the Payment from Specific Countries list. 

<!--- MAGETWO-99364-->
* You can now edit an order that contains a custom address attribute on its order form. Previously, Magento threw this error if you tried to edit an order with a custom address attribute: `We can't update the order address right now`.

<!--- MAGETWO-99605-->
* You can now use quotation marks  to create exact search terms in the Admin menu search grid  (**Customers** > **All Customers**). 

<!--- MC-17269-->
* The date format used in tables throughout the product interface is now based on the Admin-defined locale. 

<!--- MAGETWO-72172-->
* Magento no longer lets you add a disabled variation of configurable product to the shopping cart from the Admin.

<!--- MAGETWO-99883-->
* Magento now includes the correct price for a discounted product when the Customer Group is not set to the default group. Previously, when you re-ordered a discounted product, the correct price was not displayed in the Items Ordered field.

<!--- MC-17860-->
* Magento no longer adds a product that is selected but not explicitly added to the cart to an order when you create an order from the Admin. 

<!--- MC-17797-->
* Magento no longer throws a fatal error when you click **View Order** on an order that contains a product that was available when the order was created but which was subsequently  deleted from the storefront. 

<!--- MAGETWO-98832-->



### SalesRule  EE ONLY

<!--- MAGETWO-99725--> 
* You can now update the conditions of an existing Scheduled update for a Cart Price Rule. Previously, when you tried to change the SKU condition for an update, Magento did not save or apply your changes. 
 
<!--- MC-18696--> 
* Magento now displays the Cart Price Rules list (**Marketing** > **Promotions** > **Cart Price Rules**) as expected when you add a new rule. Previously, the grid was not visible.


### Search

<!--- MAGETWO-99769-->
* Search results now reflect the search weight you assign to product attributes in attribute configuration.

<!--- ENGCOM-5402-->
* Search by keyword now supports searching on zero (0). *Fix submitted by jeysmook in pull request [23424](https://github.com/magento/magento2/pull/23424)*. 

<!--- MAGETWO-99669-->
* You can now use Elasticsearch to run a query that includes the `<` character. Previously, when you used this symbol in a query, Magento threw this error: 
`{"0":"SQLSTATE[42000]: Syntax error or access violation: 1064 syntax error, unexpected $end, query was: SELECT`.


### Shipping

<!--- MC-17502-->
* You can now use Cybersource as a payment method when multishipping is enabled. Previously, when you tried to place an order, Magento threw this error: `Invalid Form Key. Please refresh the page`.  This resulted from a problem with auto-attaching a form key on the submit event  when one form contained another form.

<!--- ENGCOM-5110-->
* The Order Tracking page now displays the Contact us link as expected  when this feature is enabled and the designated shipping carrier is not available on the Order page. *Fix submitted by Eduard Chitoraga in pull request [22823](https://github.com/magento/magento2/pull/22823)*. [GitHub-22822](https://github.com/magento/magento2/issues/22822)

<!--- ENGCOM-5109-->
* Magento no longer tries to validate UPS required fields (UPS Access License Number, User ID, and Password fields)  when UPS shipping is not active. *Fix submitted by Serhiy Zhovnir in pull request [22787](https://github.com/magento/magento2/pull/22787)*. [GitHub-22786](https://github.com/magento/magento2/issues/22786)

<!--- ENGCOM-5379-->
* You can now use more than 35 characters in the shipper’s address field when booking a UPS shipment or generating a UPS shipment label. Previously, if this address exceeded 35 characters, Magento threw an error. *Fix submitted by Ankur Raiyani in pull request [23523)(https://github.com/magento/magento2/pull/23523)*. 

<!--- MC-18004--> EE ONLY
* Merchants can now create shipping labels for return merchandise authorizations. Previously, when a merchant tried to create a shipping label, Magento displayed this error: `No authorized items or allowed shipping methods`.


### Sitemap

<!--- MC-16312-->
* Magento now generates all relevant product URLS when **Use Categories Path for Product URLs** setting is enabled. 


### Staging EE ONLY

<!--- MAGETWO-98187--> 
* Magento no longer removes the child products of a grouped product after the group product’s schedule update has expired. 

<!--- MAGETWO-99378-->
Magento now displays the correct product Short Description for the selected update in deployments where there are multiple schedule updates.

<!--- MC-15298-->
* Administrators can now opt out of analytics tracking on the Admin. See Users Guide for more information.

<!--- MC-15519-->
* The database compare tool no longer shows the incorrect comparison results for these entities:
  
    `sales_creditmemo`

    `sales_creditmemo_grid`

    `sales_order_grid`

    `sales_order_payment`

    `sales_order_status_history`


### Swatches

<!--- ENGCOM-5020-->
* You can update the dropdown attributes (**Admin** > **Stores** > **Attributes** > **Product**) when swatches have been disabled.  Previously, when swatches were disabled,   Magento displayed this error in the console: `Uncaught TypeError: panel.addClass is not a function`. *Fix submitted by Mark van der Sanden in pull request [22560](https://github.com/magento/magento2/pull/22560)*. [GitHub-20843](https://github.com/magento/magento2/issues/20843)

### Target Rule EE ONLY

<!--- MAGETWO-99448-->
* Deleting products no longer triggers exception errors. Previously, the target rule that was used to identify the product triggered an exception.

<!--- MC-18464-->
* Magento now returns more informative error messages when a misconfigured target rule caused an error. 

### Templates

<!--- ENGCOM-5440-->
* The  Insert Variables popup window is now populated with template variables as expected. (This window is acted from **Marketing** > **Email Templates** > **Add New Template**.) *Fix submitted by Mahesh Singh in pull request [23173](https://github.com/magento/magento2/pull/23173)*. [GitHub-23135](https://github.com/magento/magento2/issues/23135)


### Testing

<!--- MC-16371 MC-18277 MC-18750 MC-11031 MC-15749-->
* The following tests have been improved: `CheckoutWithBraintreePaypalMinicartTest``, `Magento\Catalog\Setup\Patch\Schema\ChangeTmpTablesEngine`, `MAGETWO-69516: Cart Price Rule with related Banner for specific Customer Segment is persisted under long-term cookie`, `Magento\FunctionalTestingFramework.functional.StorefrontUKCustomerCheckoutWithCouponTest`,`Mftf Test: StorefrontApplyCategoryPermissionsToSecondWebsiteTest`.

<!--- MC-5806-->
* The Dependency static test now detects URL dependencies as expected. 

<!--- MC-13909-->
* `CreateCmsPageEntityMultipleStoreViewsTest` no longer fails on variation `CreateCmsPageEntityMultipleStoreViewsTestVariation1`.

<!--- MC-18699-->
* `Magento.Framework.Image.Adapter.InterfaceTest.testValidateUploadFileException` with data set `image_empty` no longer fails on 2.3.3-develop.
  
<!--- ENGCOM-5470-->
* `CommentLevelsSniff` now works correctly with the `@magento_import` statement. Previously, when you ran `Magento\Test\Less\LiveCodeTest`, Magento threw an error on lines containing `@magento_import`. *Fix submitted by Pavel Bystritsky in pull request [23790](https://github.com/magento/magento2/pull/23790)*. [GitHub-23789](https://github.com/magento/magento2/issues/23789)



### Translation and locales

<!--- ENGCOM-5196-->
* White space between words now appears as expected in non-English websites. *Fix submitted by Alexey Arendarenko in pull request [23081](https://github.com/magento/magento2/pull/23081)*. [GitHub-23080](https://github.com/magento/magento2/issues/23080)


### UI

<!--- MC-17922-->
* The calendar date picker now updates values as expected when the linked input value is changed. 

<!--- MAGETWO-99361-->
* The URL rewrites category tree now includes all relevant categories. Previously, when you selected **For Category** after  selecting **Create URL Rewrite** from (**Marketing** > **Url Rewrites**),  Magento  did not include most categories in the resulting view.

<!--- MAGETWO-99832-->
* Magento now saves order views with the date ranges you enter while creating the filter (**Sales** > **Orders**). Previously, when you opened a saved filtered order view, Magento indicated that the dates you entered were invalid. 

<!--- ENGCOM-4923-->
* Form element validation is now triggered as expected when form validation rules change. Previously, when you changed form validation rules for a form element during runtime, the new validation rules were not applied. *Fix submitted by Roman Kis in pull request [21992](https://github.com/magento/magento2/pull/21992)*. [GitHub-21473](https://github.com/magento/magento2/issues/21473)

<!--- ENGCOM-5067-->
* The arrow toggle page element now works as expected throughout the Admin. *Fix submitted by Arvinda Kumar in pull request [22644](https://github.com/magento/magento2/pull/22644)*. [GitHub-22636](https://github.com/magento/magento2/issues/22636)

<!--- ENGCOM-5083-->
* The height setting in `.admin__control-textarea` component is no longer hard-coded. Previously, this hard-coded value prevented you from changing the height of this text field through the UI.  *Fix submitted by Serhiy Zhovnir in pull request [22779](https://github.com/magento/magento2/pull/22779)*. [GitHub-22771](https://github.com/magento/magento2/issues/22771)

<!--- ENGCOM-5148-->
* Added appropriate white space between elements of product descriptions on the product list view. *Fix submitted by Hitesh in pull request [22931](https://github.com/magento/magento2/pull/22931)*. [GitHub-20788](https://github.com/magento/magento2/issues/20788)

<!--- ENGCOM-5176-->
* Scrolling now behaves as expected on the create order page.  *Fix submitted by Denis Kopylov in pull request [23035](https://github.com/magento/magento2/pull/23035)*. [GitHub-23034](https://github.com/magento/magento2/issues/23034)

<!--- MC-16334-->
* Page element layout issues on  **Stores** > **Configuration** > **Advanced** > **Admin** have been resolved. Previously, when you expanded the security block on this page, the **Use system value** text appeared at the top of the page, not adjacent to the checkbox it applied to.

<!--- MC-17003-->
* The missing **Update Totals** button has been added to the Credit Memo page.	

<!--- ENGCOM-5512-->
* Magento now displays an error message as needed when you click the  **Catalog** > **Products** > **Create Configurations** button and submit invalid data. Previously, Magento did not display the error message after validation due to lack of autofocus on the error field.
*Fix submitted by Eden Duong in pull request [23905](https://github.com/magento/magento2/pull/23905)*. [GitHub-23904](https://github.com/magento/magento2/issues/23904)

<!--- ENGCOM-5473-->
* The toggle icon on the **Catalog** > **Products** > **New Product (Configurable)** > **Create Configuration** page now works as expected. *Fix submitted by Eden Duong in pull request [23803)(https://github.com/magento/magento2/pull/23803)*. [GitHub-22702](https://github.com/magento/magento2/issues/22702)

<!--- ENGCOM-5467-->
* Magento no longer validates data in the **Discount Amount** field after page load until the user performs an action in the Create New Catalog Rule form. Previously, Magento ran validation checks on that field despite its inactivity and threw an error. *Fix submitted by Eden Duong in pull request [23779](https://github.com/magento/magento2/pull/23779)*. [GitHub-23777](https://github.com/magento/magento2/issues/23777)

<!--- ENGCOM-5453-->
* You can now edit the status label for the storefront from the Admin in single-store mode. Previously, there was no status field available from **Stores** > **Order Status** when single-store mode was enabled.  *Fix submitted by Eden Duong in pull request [23681](https://github.com/magento/magento2/pull/23681)*. [GitHub-22654](https://github.com/magento/magento2/issues/22654)
  
<!--- ENGCOM-5070-->
* The design of the Review & Payments **Apply Discount Coupon** box of the checkout page  has been improved.  *Fix submitted by Abrar Pathan in pull request [21215](https://github.com/magento/magento2/pull/21215)*. [GitHub-21214](https://github.com/magento/magento2/issues/21214)

<!--- ENGCOM-5278-->
* The `always` action that precedes the opening of the alert and confirm widgets is now called once. Previously, 	the  `always triggering` text was logged twice after you clicked the **OK** button. *Fix submitted by Eduard Chitoraga in pull request [23234](https://github.com/magento/magento2/pull/23234)*. [GitHub-23233](https://github.com/magento/magento2/issues/23233)


### URL rewrites

<!--- MAGETWO-99830-->
* Redundant URL rewrite operations that were triggered by category operations have been eliminated, and page load performance has been improved. Previously,  adding or deleting products to a category triggered URL rewrite regeneration for all products with changed positions. 

<!--- MAGETWO-96663-->
* Magento no longer removes the query string from URLs when the query string is preceded by a slash. Previously, when a customer opened a URL that contained a trailing slash and query string (for example, http://magento.host.com/sample-url-key/?cupcakes), Magento redirected the user to a URL that omitted the slash (http://magento.host.com/sample-url-key). 

<!--- ENGCOM-5195-->
* URL redirects now work as expected when you click **Save** after editing a product view from the Customer tab (**Customer** > **Product Reviews** > **Edit Review**).  *Fix submitted by Ravi Chandra in pull request [22426](https://github.com/magento/magento2/pull/22426)*. [GitHub-22425](https://github.com/magento/magento2/issues/22425)

<!--- ENGCOM-5435-->
* Magento now correctly renders the value of a product’s customizable option field of type `Area` when you enter a multi-line  value the Admin. Previously, a must-line value was rendered with an HTML `<br>` tag as part of the value. *Fix submitted by Sunil in pull request [23524](https://github.com/magento/magento2/pull/23524)*. [GitHub-23510](https://github.com/magento/magento2/issues/23510)

<!--- ENGCOM-5397-->
* You can now use a plus sign (+) character in in content contained within a widget  on a CMS page. Previously, Magento did not render the character, although it appeared in the page content stored in the database and when editing the widget.  *Fix submitted by Sarfaraz Bheda in pull request [23496](https://github.com/magento/magento2/pull/23496)*. 


### Visual Merchandiser

<!--- MAGETWO-96129-->
* You can now add tier price conditions to smart categories.

<!--- MAGETWO-98937-->
* The Visual Merchandiser product list now renders properly when product names exceed 50 characters. 

### Web API framework

<!--- ENGCOM-5162-->
* Magento now renders shipment details for an order without a fatal error when you use REST to create a shipment. *Fix submitted by Milind Singh in pull request [22687](https://github.com/magento/magento2/pull/22687)*. [GitHub-22686](https://github.com/magento/magento2/issues/22686)
 

### Website restriction EE ONLY

<!--- MAGETWO-99868--> 
* Administrators with appropriate permissions can now create a new customer account on the Admin when the **Website Restriction** setting  is enabled. Previously, Magento threw this exception: `Can not register new customer due to restrictions are enabled`.

### Wish List

<!--- MAGETWO-99228-->
* Wishlists now accurately reflect product availability when  a product has been added to a wishlist and then subsequently disabled. Previously, the wishlist displayed these contradictory messages: **You have no items in your wish list** and **1 item in wish list**. 

<!--- MAGETWO-99312-->
* Wishlist names can now be edited from the storefront. 

<!--- MAGETWO-97216-->
* The `Magento\FunctionalTestingFramework.functional.StorefrontAddMultipleStoreProductsToWishlistTest` test (add products to wishlist from different stores) no longer fails randomly.

<!--- MC-18800-->
* The wishlist no longer shows an item that has been disabled on the Admin. 

<!--- ENGCOM-5514-->
* Wishlist items now display decimal values as appropriate. Previously, Magento saved  decimal quantities for wishlist items but did not display these values in the wishlist on the storefront. *Fix submitted by Max Fickers in pull request [23933](https://github.com/magento/magento2/pull/23496)*. [GitHub-23932](https://github.com/magento/magento2/issues/23932)

## Known issues


## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).



### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.


### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.3  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
