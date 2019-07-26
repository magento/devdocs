---
group: release-notes
title: Magento Commerce 2.3.3 Release Notes
---

*Patch code and release notes published on *

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
* The short form versions of the `—lock-env`  and  `—lock-config`  ` bin/magento config:set` options now work as expected. *Fix submitted by [Satya Prakash](https://github.com/satyaprakashpatel) in pull request [22720](https://github.com/magento/magento2/pull/22720)*. [GitHub-22395](https://github.com/magento/magento2/issues/22395)

<!--- ENGCOM-5184-->
* Magento now displays an exception message when an error occurs during static content deployment. Previously, if an error occurred, Magento showed the stack trace only. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [22884](https://github.com/magento/magento2/pull/22884)*. [GitHub-22882](https://github.com/magento/magento2/issues/22882)


### AdminGWS EE ONLY

<!--- MAGETWO-99801--> 
* An administrator with permission to a website now has access to the website’s theme configuration. Previously, this administrator could update the theme for the store view that is associated to a website, but not for the website. 


<!--- MAGETWO-99062-->
* Administrators with role scope set to **custom** can now view roles and user information.


<!--- MAGETWO-99711-->

<!--- MAGETWO-98256-->
* An administrator with access rights to one website only in a multisite deployment can now mass-update products for that website only. Previously, this administrator could not mass-update products on any website in the deployment. 

<!--- MAGETWO-99411-->
* An administrator with restricted privileges  can now successfully create a catalog price rule. Previously, a restricted administrator could create a catalog price rule, but when they saved it, Magento displayed an error, and does not generate any scheduled update to set it to inactive.

<!--- MC-17879-->




### Backend

<!--- MC-17275-->

<!--- MC-17675-->

<!--- MC-17609-->


### Back up


### Bundle

<!--- MAGETWO-99371-->
* You can now successfully check out  bundle products using the Braintree payment method with the payment method set to **Authorize and Capture**. 



### B2B EE ONLY

<!--- MAGETWO-99846-->
* The `Magento_SharedCatalog::manage` role is now defined in the `acl.xml` file.

<!--- MAGETWO-99325--> 
* Magento now maintains custom prices for products in both the catalog and shopping cart after a quote is recalculated. Previously, the product price reverted to the default price after you recalculated the quote. 

<!--- MAGETWO-91614-->
* You can now successfully filter customer by status in the **Customers** > **All Customers* table. Previously, Magento threw an SQL error and displayed this message: `Something went wrong with processing the default view and we have restored the filter to its original state`.

<!--- MAGETWO-99436-->
* Magento now displays the category tree as expected when you choose **Set Pricing and Structure** on a new shared catalog. 


<!--- MAGETWO-99379-->
* It is now significantly quicker to create a new company account from the storefront. It now takes the same amount of time to create a new company account on the storefront as from the Admin. Previously, it took much longer to create a new company account on the storefront. 

<!--- MAGETWO-94004-->

<!--- MAGETWO-98825-->
* Magento now correctly applies category permissions depending upon the scope values you set. Previously, when you enabled shared catalogs for only one website in a multisite deployment, Magento applied catalog permissions globally instead of to the designated website only. 


<!--- MC-16245-->

<!--- MAGETWO-99871-->
* Magento now issues only a single request to the server when you change an order’s shipping address to a non-default address. Previously, Magento issued multiple requests to the server when you changed an order’s shipping address, which affected performance. 

<!--- MAGETWO-99368-->
* Non-administrative users who have been granted access privileges to catalogs and shared catalogs now also have access to the menu that permits them to manage these catalogs. Previously, these non-Admin users had permission to access the shared catalog, but not the menu that would permit them to manage the shared catalog. 

<!--- MAGETWO-99123-->
* Guests can now access available  product options for a configurable product when one of its simple product options is out of stock but the configurable product is listed as in-stock in the shared catalog. Previously, under these circumstances, the options drop-down menu for the configurable product was empty, which prevented guests from ordering available options. 


<!--- MAGETWO-99302-->
* The State/Province drop-down menu available from the Admin Edit Customer form no longer lists duplicate entries for states and provinces.   


<!--- MAGETWO-71835-->

<!--- MAGETWO-71309-->
* Magento no longer highlights quote totals  on draft quotes. 



### Cache

<!--- MAGETWO-98650-->



### Cart and checkout

<!--- MAGETWO-97317-->

<!--- MAGETWO-99075-->

<!--- MAGETWO-48570-->

<!--- MC-17755-->

<!--- MAGETWO-99370-->

<!--- ENGCOM-4126-->
* Administrators with appropriate permissions can now view the contents of a registered customer’s cart from the Admin customer edit interface. *Fix submitted by [Rav](https://github.com/rav-redchamps) in pull request [20918)(https://github.com/magento/magento2/pull/20918)*. 

<!--- ENGCOM-5071-->
* Magento now applies the sort preferences that you set in website scope configuration for a particular website to the layout of the checkout page. Previously, sort order for elements of this page was derived from the default configuration, not website-specific values. *Fix submitted by [Karan Shah](https://github.com/krnshah) in pull request [22387](https://github.com/magento/magento2/pull/22387)*. [GitHub-22380](https://github.com/magento/magento2/issues/22380)





### Cart Price rules

<!--- ENGCOM-5086-->
* Coupon codes now work as expected. Previously, coupons sent for specific dates in a cart price rule were not applied. *Fix submitted by [Adarsh Shukla](https://github.com/this-adarsh) in pull request [22718](https://github.com/magento/magento2/pull/22718)*. [GitHub-18183](https://github.com/magento/magento2/issues/18183)



### Catalog

<!--- MAGETWO-99890-->

<!--- MAGETWO-63599-->

<!--- MAGETWO-98708-->

<!--- MC-17706--> EE ONLY

<!--- MAGETWO-98804--> EE ONLY

<!--- MAGETWO-69893-->

<!--- MAGETWO-70599-->

<!--- MAGETWO-64923-->

<!--- MAGETWO-59400-->

<!--- MAGETWO-99587-->

<!--- MAGETWO-99748-->

<!--- MAGETWO-59978-->

<!--- MAGETWO-59431-->

<!--- MAGETWO-98748-->

<!--- ENGCOM-5371-->
* Customers no longer receive product alerts after they have unsubscribed from product alerts. Previously, the product alert was not removed from the `product_alert_stock` table as expected, but Magento still displayed this message on the storefront: **You will no longer receive stock alerts for this product**.  *Fix submitted by [yuriichayka](https://github.com/yuriichayka) in pull request [23459](https://github.com/magento/magento2/pull/23459)*. [GitHub-22814](https://github.com/magento/magento2/issues/22814)

<!--- ENGCOM-5387-->
* Magento no longer automatically assigns a storeID to a saved product that is not assigned to a store.  *Fix submitted by [manishgoswamij](https://github.com/manishgoswamij) in pull request [23500](https://github.com/magento/magento2/pull/23500)*. [GitHub-23383](https://github.com/magento/magento2/issues/23383), [GitHub-23500](https://github.com/magento/magento2/issues/23500)

<!--- ENGCOM-5410-->
* Corrected misspellings in lib/web/css/docs/source/_actions-toolbar.less and  lib/web/css/docs/source/_layout.less. *Fix submitted by [Prashant Sharma](https://github.com/prashantsharmacedcoss) in pull request [22624)(https://github.com/magento/magento2/pull/22624)*. 

<!--- ENGCOM-5067-->
* Magento now displays the currency code as expected in the Cost column of the Admin catalogproduct list. *Fix submitted by [Vlad Veselov](https://github.com/orlangur) in pull request [22739](https://github.com/magento/magento2/pull/22739)*. [GitHub-20906](https://github.com/magento/magento2/issues/20906)


### CatalogInventory

<!--- MAGETWO-99941-->

<!--- MAGETWO-99585-->

<!--- MC-17513-->



### Catalog rule

<!--- MAGETWO-99592-->

<!--- MAGETWO-99873-->

<!--- MC-17460-->


### Catalog URL rewrite

<!--- MAGETWO-91589-->




### Cleanup and simple code refactoring

<!--- ENGCOM-3817-->
 * Corrected poor positioning  of the Shop By menu on product pages in mobile view (iphone5).  *Fix submitted by [Arvinda Kumar](https://github.com/cedarvinda) in pull request [20135](https://github.com/magento/magento2/pull/20135)*. [GitHub-20124](https://github.com/magento/magento2/issues/20124)



<!--- ENGCOM-4840-->
* Corrected misalignment of Wishlist and Compare icons on the product page. *Fix submitted by [sanjaychouhan-webkul](https://github.com/sanjaychouhan-webkul) in pull request [22532](https://github.com/magento/magento2/pull/22532)*. [GitHub-22527](https://github.com/magento/magento2/issues/22527)

<!--- ENGCOM-4788-->
* Store view-specific labels are no longer truncated in the left navigation menu of the Cart Price Rule Store View Specific Labels window (**Marketing** > **Cart Price rule** > **Labels** ).  *Fix submitted by [Sudhanshu Bajaj](https://github.com/sudhanshu-bajaj) in pull request [22423](https://github.com/magento/magento2/pull/22423)*. [GitHub-22406](https://github.com/magento/magento2/issues/22406)

<!--- ENGCOM-5059-->
* Added missing header to the Customer Sales Order table and corrected multiple typos. *Fix submitted by [Vishal Sutariya](https://github.com/vishal-7037) in pull request [22643](https://github.com/magento/magento2/pull/22643)*. [GitHub-22641](https://github.com/magento/magento2/issues/22641)

<!--- ENGCOM-5054-->
* Improved awkward formatting of the customer account create page in mobile view. *Fix submitted by [Arvinda Kumar](https://github.com/cedarvinda) in pull request [22656](https://github.com/magento/magento2/pull/22656)*. [GitHub-22647](https://github.com/magento/magento2/issues/22647)

<!--- ENGCOM-5061-->
* The checkbox on the Add New Tax Rule form has been redesigned to match the Admin checkbox. *Fix submitted by [Surabhi Srivastava](https://github.com/Surabhi-Cedcoss) in pull request [22655](https://github.com/magento/magento2/pull/22655)*. [GitHub-22640](https://github.com/magento/magento2/issues/22640)

<!--- ENGCOM-5281-->
* Corrected typo in CONTRIBUTING.md. *Fix submitted by [Raul E Watson](https://github.com/diazwatson) in pull request [23244](https://github.com/magento/magento2/pull/23244)*. 


<!--- ENGCOM-5408-->
* Corrected poor spacing in the Gift message section of the My Account page. *Fix submitted by [Amjad M](https://github.com/amjadm61) in pull request [23226](https://github.com/magento/magento2/pull/23226)*. [GitHub-22950](https://github.com/magento/magento2/issues/22950)

<!--- ENGCOM-5344-->
* The asterisk (*) sign is now constantly positioned when used throughout the Admin. *Fix submitted by [Atish Goswami](https://github.com/atishgoswami) in pull request [22650](https://github.com/magento/magento2/pull/22650)*. [GitHub-13227](https://github.com/magento/magento2/issues/13227)


<!--- ENGCOM-5326-->
* Corrected misspelling in `app/code/Magento/Ui/Block/Wrapper.php`. *Fix submitted by [Ravi Chandra](https://github.com/ravi-chandra3197) in pull request [23335)(https://github.com/magento/magento2/pull/23335)*. 

<!--- ENGCOM-5287-->
* Corrected typo in tooltip toggle selector. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [23248](https://github.com/magento/magento2/pull/23248)*. 

<!--- ENGCOM-5068-->
* Corrected misalignment of the Compare Products and My Wish List counters in the sidebar. *Fix submitted by [sanjaychouhan-webkul](https://github.com/sanjaychouhan-webkul) in pull request [22742](https://github.com/magento/magento2/pull/22742)*. [GitHub-22676](https://github.com/magento/magento2/issues/22676)
 

<!--- ENGCOM-5089-->
 * Corrected scrolling behavior on Product page. Previously, after you clicked on  a product's reviews count on a product page, you had to scroll in order to see customer reviews.  *Fix submitted by [sanjaychouhan-webkul](https://github.com/sanjaychouhan-webkul) in pull request [22794](https://github.com/magento/magento2/pull/22794)*. [GitHub-21558](https://github.com/magento/magento2/issues/21558)

<!--- ENGCOM-5126-->
* Magento now displays the  cursor to the right of the search keyword box as expected after multiple clicks on the search field in mobile view. *Fix submitted by [sanjaychouhan-webkul](https://github.com/sanjaychouhan-webkul) in pull request [22795](https://github.com/magento/magento2/pull/22795)*. [GitHub-22736](https://github.com/magento/magento2/issues/22736)

<!--- ENGCOM-5125-->
* Refactored the page title of the billing agreements page. *Fix submitted by [Amit Vishvakarma](https://github.com/amitvishvakarma) in pull request [22876](https://github.com/magento/magento2/pull/22876)*. [GitHub-22875](https://github.com/magento/magento2/issues/22875)

<!--- ENGCOM-5125-->
* 


### CMS content

<!--- MAGETWO-99695-->
* Corrected alignment of the search suggestion panel with the **Advance reporting**  button.  *Fix submitted by [webkul-ajaysaini](https://github.com/webkul-ajaysaini) in pull request [22520](https://github.com/magento/magento2/pull/22520)*. [GitHub-22506](https://github.com/magento/magento2/issues/22506)



### Configurable products

<!--- MAGETWO-99443-->

<!--- MAGETWO-99550-->

<!--- ENGCOM-4844-->
* The configurable product gallery now displays images in correct order when the list of images exceeds 10 images.  Correct order complies with the order assigned in the Admin. *Fix submitted by [Mateusz Wira](https://github.com/Wirson) in pull request [22287](https://github.com/magento/magento2/pull/22287)*. [GitHub-22249](https://github.com/magento/magento2/issues/22249)



### cron



### Customers

<!--- MAGETWO-99647-->

<!--- MAGETWO-99493-->

<!--- MAGETWO-99496--> EE ONLY

<!--- MAGETWO-99355--> EE ONLY

<!--- MAGETWO-88905-->

<!--- MAGETWO-93522-->

<!--- MAGETWO-99584-->

<!--- MC-17769-->



### Custom customer attributes

<!--- MAGETWO-99451-->


### Dashboard

### Directory

<!--- MAGETWO-99424-->


### Downloadable


### EAV

<!--- MC-17505-->

<!--- MC-17623-->


### Email

<!--- ENGCOM-5090-->
* The Template Preview tab now loads with the default content that was assigned during the creation of a New Shipment email template as expected. Previously, the Template Preview Tab did not load the default content. *Fix submitted by [Gaurav Agarwal](https://github.com/gauravagarwal1001) in pull request [22791](https://github.com/magento/magento2/pull/22791)*. [GitHub-22788](https://github.com/magento/magento2/issues/22788)




### Frameworks

<!--- MAGETWO-99888-->

<!--- MC-17583-->

<!--- MAGETWO-99140-->



#### Cache framework



#### JavaScript framework

<!--- MAGETWO-99535-->

<!--- ENGCOM-5118-->
* Magento now displays previously missing validation messages on the storefront when JavaScript errors are caught by validation scripts in DatePicker form elements. *Fix submitted by [Ravi Chandra](https://github.com/ravi-chandra3197) in pull request [21397](https://github.com/magento/magento2/pull/21397)*. [GitHub-3795](https://github.com/magento/magento2/issues/3795)



### General fixes

<!--- MAGETWO-93061-->

<!--- MAGETWO-99677-->

<!--- MAGETWO-36337-->

<!--- MAGETWO-70681-->

<!--- MC-17511-->

<!--- MAGETWO-97316-->

<!--- ENGCOM-5171-->
* Magento no longer  includes canceled orders when calculating how many times a coupon code is used.  *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [20579](https://github.com/magento/magento2/pull/20579)*. [GitHub-12817](https://github.com/magento/magento2/issues/12817)

<!--- ENGCOM-5022-->
* Code Sniffer no longer marks correctly aligned DocBlock elements as code style violations. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [22444](https://github.com/magento/magento2/pull/22444)*. [GitHub-22317](https://github.com/magento/magento2/issues/22317)


### Gift cards accounts EE ONLY

<!--- MC-17124--> 

<!--- MAGETWO-99367-->

<!--- MAGETWO-99425-->


### Gift wrapping

<!--- MC-17276--> EE ONLY

### Google Analytics



### Google Chart API


### Google Tag Manager EE ONLY

<!--- MAGETWO-99026-->

### Image

<!--- ENGCOM-4838-->
* You can now programmatically  move an image to the gallery using the  	`addImageToMediaGallery` method with `$move`. Previously, when you tried to move an image programmatically, Magento threw this exception: `[InvalidArgumentException] File 'pub/media/import/' doesn't exist`.  *Fix submitted by [dudzio12](https://github.com/dudzio12) in pull request [22020](https://github.com/magento/magento2/pull/22020)*. [GitHub-21978](https://github.com/magento/magento2/issues/21978)




### Import/export

<!--- MAGETWO-99894-->

<!--- MAGETWO-98729-->
* Magento now successfully saves product URL keys in Arabic.


<!--- MAGETWO-98801-->

<!--- MAGETWO-99509-->
* You can now successfully download a CSV file after export. Previously, Magento redirected you to the Admin dashboard when you tried to download the CSV file created during export.


<!--- MAGETWO-99927-->

<!--- MAGETWO-60918-->
* Magento no longer throws a fatal error during import or export if the category path contains deleted category IDs.  



### Index



### Infrastructure

<!--- ENGCOM-5352-->
* You can now use copy service on extension attributes for classes that extend Data Object. *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [23387](https://github.com/magento/magento2/pull/23387)*. [GitHub-23386](https://github.com/magento/magento2/issues/23386)


<!--- ENGCOM-5356-->
* Remove extraneous closing tag from the store-switcher template. *Fix submitted by [Alastair Mucklow](https://github.com/sta1r) in pull request [23403)(https://github.com/magento/magento2/pull/23403)*. 


### Layered navigation



### Logging




### Magento Shipping




### New Relic reporting



### Newsletter

<!--- MAGETWO-99636-->
* Magento now sends only a subscribe email when you create an account from an email invitation. Previously, when you subscribed to a newsletter from a registration link received through an email invitation, you received an email that subscribed you to the newsletter and also received an email that unsubscribed you.

<!--- MAGETWO-71785-->
* You can now export newsletter subscribers from the Admin. Previously, Magento displayed this error when you selected a subscriber name and clicked **Export**: `error: URI too long`.   

### Orders

<!--- ENGCOM-5405-->
* The creditmemo `getOrder()` method now returns the expected extension attributes for an order. Previously, this methodic not load orders correctly. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [23358](https://github.com/magento/magento2/pull/23358)*. [GitHub-23345](https://github.com/magento/magento2/issues/23345)




### Page cache

### Page Builder

<!--- MC-16233-->


### Payment methods

<!--- MC-17337-->

<!--- MAGETWO-99035-->
* Customers can now successfully place an order when the order is partially paid for by gift card or when a discount is applied to the order. Previously, customers could not place an order, and Magento displayed this error: `error: Field format error: 10413-The totals of the cart item amounts do not match order amounts`.


<!--- MC-17462-->

<!--- MAGETWO-99383-->

<!--- MAGETWO-99624-->
* Customers can now place the order for virtual products with a zero subtotal checkout payment. after entering address information. Previously, customers could not place an order for virtual products with a zero subtotal checkout payment if they modified their address, and Magento displayed this message:  `The requested Payment Method is not available`. 


<!--- MC-17236-->

<!--- MAGETWO-99586-->
* You can now cancel orders placed with PayPal Express even after authorization has expired. 

<!--- MC-17576-->

<!--- MC-17966-->

<!--- MC-16769-->

<!--- MAGETWO-99112-->
* The Admin sales list now displays each order’s payment method. [GitHub-22231](https://github.com/magento/magento2/issues/22231)

<!--- ENGCOM-5105-->
* Magento now displays stored payment methods and billing agreements if the related payment method is active. Previously, Magento displayed disabled payment methods in the customer dashboard. *Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [22850](https://github.com/magento/magento2/pull/22850)*. [GitHub-6659](https://github.com/magento/magento2/issues/6659)

<!--- ENGCOM-4839-->
* Magento no longer saves credit card information when the   **Save for later use** checkbox on the payment page is not enabled  during order creation.  *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [19767](https://github.com/magento/magento2/pull/19767)*. [GitHub-19515](https://github.com/magento/magento2/issues/19515)


### Performance



### Pricing

<!--- MAGETWO-99152-->
* You can now save a special price that exceeds three characters in Japanese Yen. Previously, you could not apply denominations that exceeded three characters with a comma separator when representing Japanese Yen.

<!--- MAGETWO-98844-->
* You can now set product price that exceeds 100,000,000. 



### Quote



### Reports

<!--- ENGCOM-5413-->
* The default date range for report filters is now set to the past month instead of the past 18 years. Previously, the default was set to 18 years, which resulted in errors in the filtered results. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [23607](https://github.com/magento/magento2/pull/23607)*. [GitHub-23606](https://github.com/magento/magento2/issues/23606)




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

<!--- MAGETWO-98832-->

<!--- MAGETWO-99605-->
* You can now use quotation marks  to create exact search terms in the Admin menu search grid  (**Customers** > **All Customers**). 

<!--- MC-17269-->
* The date format used in tables throughout the product interface is now based on the Admin-defined locale. 

<!--- MAGETWO-72172-->
* Magento no longer lets you add a disabled variation of configurable product to the shopping cart from the Admin.

<!--- MAGETWO-99883-->
* Magento now includes the correct price for a discounted product when the Customer Group is not set to the default group. Previously, when you re-ordered a discounted product, the correct price was not displayed in the Items Ordered field.



### SalesRule  EE ONLY

<!--- MAGETWO-99725--> 
* You can now update the conditions of an existing Scheduled update for a Cart Price Rule. Previously, when you tried to change the SKU condition for an update, Magento did not save or apply your changes. 
 


### Search

<!--- MAGETWO-99769-->
*  Search results now reflect the search weight you assign to product attributes in attribute configuration.

<!--- MAGETWO-99669-->


### Shipping

<!--- MC-17502-->
* You can now use Cybersource as a payment method when multishipping is enabled. Previously, when you tried to place an order, Magento threw this error: `Invalid Form Key. Please refresh the page`.  This resulted from a problem with auto-attaching a form key on the submit event  when one form contained another form.

<!--- ENGCOM-5110-->
* The Order Tracking page now displays the Contact us link as expected  when this feature is enabled and the designated shipping carrier is not available on the Order page. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [22823](https://github.com/magento/magento2/pull/22823)*. [GitHub-22822](https://github.com/magento/magento2/issues/22822)

<!--- ENGCOM-5109-->
* Magento no longer tries to validate UPS required fields (UPS Access License Number, User ID, and Password fields)  when UPS shipping is not active. *Fix submitted by [Serhiy Zhovnir](https://github.com/serhiyzhovnir) in pull request [22787](https://github.com/magento/magento2/pull/22787)*. [GitHub-22786](https://github.com/magento/magento2/issues/22786)


### Sitemap

<!--- MC-16312-->
* Magento now generates all relevant product URLS when **Use Categories Path for Product URLs** setting is enabled. 


### Staging EE ONLY

<!--- MAGETWO-98187--> 
* Magento no longer removes the child products of a grouped product after the group product’s schedule update has expired. 

<!--- MAGETWO-99378-->


### Swatches




### Target Rule EE ONLY

<!--- MAGETWO-99448-->
* Deleting products no longer triggers exception errors. Previously, the target rule that was used to identify the product triggered an exception.



### Tax





### Testing

<!--- MC-16371-->
* The CheckoutWithBraintreePaypalMinicartTest now works as expected. 

<!--- MC-5806-->
* The Dependency static test now detects URL dependencies as expected. 


### Theme



### Translation and locales

<!--- ENGCOM-5196-->
* White space between words now appears as expected in non-English websites. *Fix submitted by [Alexey Arendarenko](https://github.com/alexeya-ven) in pull request [23081](https://github.com/magento/magento2/pull/23081)*. [GitHub-23080](https://github.com/magento/magento2/issues/23080)


### UI

<!--- MC-17922-->
* The calendar date picker now updates values as expected when the linked input value is changed. 

<!--- MAGETWO-99361-->
* The URL rewrites category tree now includes all relevant categories. Previously, when you selected **For Category** after  selecting **Create URL Rewrite** from (**Marketing** > **Url Rewrites**),  Magento  did not include most categories in the resulting view.

<!--- MAGETWO-99832-->
* Magento now saves order views with the date ranges you enter while creating the filter (**Sales** > **Orders**). Previously, when you opened a saved filtered order view, Magento indicated that the dates you entered were invalid. 

<!--- ENGCOM-4923-->
* Form element validation is now triggered as expected when form validation rules change. Previously, when you changed form validation rules for a form element during runtime, the new validation rules were not applied. *Fix submitted by [Roman Kis](https://github.com/kisroman) in pull request [21992](https://github.com/magento/magento2/pull/21992)*. [GitHub-21473](https://github.com/magento/magento2/issues/21473)

<!--- ENGCOM-5067-->
* The arrow toggle page element now works as expected throughout the Admin. *Fix submitted by [Arvinda Kumar](https://github.com/cedarvinda) in pull request [22644](https://github.com/magento/magento2/pull/22644)*. [GitHub-22636](https://github.com/magento/magento2/issues/22636)

<!--- ENGCOM-5083-->
* The height setting in `.admin__control-textarea` component is no longer hard-coded. Previously, this hard-coded value prevented you from changing the height of this text field through the UI.  *Fix submitted by [Serhiy Zhovnir](https://github.com/serhiyzhovnir) in pull request [22779](https://github.com/magento/magento2/pull/22779)*. [GitHub-22771](https://github.com/magento/magento2/issues/22771)

<!--- ENGCOM-5148-->
* Added appropriate white space between elements of product descriptions on the product list view. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [22931](https://github.com/magento/magento2/pull/22931)*. [GitHub-20788](https://github.com/magento/magento2/issues/20788)

<!--- ENGCOM-5176-->
* Scrolling now behaves as expected on the create order page.  *Fix submitted by [Denis Kopylov](https://github.com/Den4ik) in pull request [23035](https://github.com/magento/magento2/pull/23035)*. [GitHub-23034](https://github.com/magento/magento2/issues/23034)


### URL rewrites

<!--- MAGETWO-99830-->
* Redundant URLK rewrite operations that were triggered by category operations have been eliminated, and page load performance has been improved. Previously,  adding or deleting products to a category triggered URL rewrite regeneration for all products with changed positions. 

<!--- MAGETWO-96663-->
* Magento no longer removes the query string from URLs when the query string is preceded by a slash. Previously, when a customer opened a URL that contained a trailing slash and query string (for example, http://magento.host.com/sample-url-key/?cupcakes), Magento redirected the user to a URL that omitted the slash (http://magento.host.com/sample-url-key). 

<!--- ENGCOM-5195-->
* URL redirects now work as expected when you click **Save** after editing a product view from the Customer tab (**Customer** > ** Product Reviews** > ** Edit Review**).  *Fix submitted by [Ravi Chandra](https://github.com/ravi-chandra3197) in pull request [22426](https://github.com/magento/magento2/pull/22426)*. [GitHub-22425](https://github.com/magento/magento2/issues/22425)


### Visual Merchandiser

<!--- MAGETWO-96129-->
* You can now add tier price conditions to smart categories.

<!--- MAGETWO-98937-->
* The Visual Merchandiser product list now renders properly when product names exceed 50 characters. 


### Web API


### Website restriction

<!--- MAGETWO-99868--> EE ONLY
* Administrators with appropriate permissions can now create a new customer account on the Admin when the **Website Restriction** setting  is enabled. Previously, Magento threw this exception: `Can not register new customer due to restrictions are enabled`.

### Wish List

<!--- MAGETWO-99228-->
* Wishlists now accurately reflect product availability when  a product has been added to a wishlist and then subsequently disabled. Previously, the wishlist displayed these contradictory messages: **You have no items in your wish list** and **1 item in wish list**. 



### WYSIWYG



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

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.3  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
