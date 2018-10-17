---

group: release-notes
title: Magento Open Source 2.2.7 Release Notes

---

*Patch code and release notes were published on November 26, 2018.*


We are pleased to present Magento Open Source 2.2.7. This release includes over 40 critical enhancements to product security, over 150 core code fixes and enhancements, and over 350 community-submitted pull requests. 

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.6) have been ported to 2.1.15, 1.14.3.10, and 1.9.3.10, as appropriate.





## Highlights

In addition to over 40 critical security fixes, look for the following highlights in this release:


### Core code highlights

This release includes improvements to general usability of the core code plus enhancements to wishlist and shipping features. 

#### General improvements

<!-- MAGETWO-93990 -->* An administrator with permissions on one website only can no longer access the All Store Views scope for a product that is assigned to multiple websites.

<!-- MAGETWO-87437 -->* All relevant attributes are now populated in the Google Tag Manager when a customer adds a product to their shopping cart. Previously, grouped, bundle,  and configurable  product attributes were missing from the Google Tag Manager. 

*  Magento Functional Test Framework (MFTF) 2.3.8 has been merged to Magento 2.2.7. 


#### Wishlist

<!-- MAGETWO-74289 -->* Customers can now choose which wishlist to add a product to when adding products to the wishlist from the shopping cart.

<!-- MAGETWO-86609 -->* Products disabled in the Admin still appear no longer appear in storefront wishlists. Previously, disabled products still appeared in the storefront wishlist, although when a customer clicked on a disabled product, Magento correctly returned “page not found”. 

<!-- MAGETWO-89234 -->* Magento now displays a success message when a customer successfully updates a wishlist.
 
<!-- MAGETWO-75086 -->* Magento now displays the correct selected product options when you click  on  **View Details** for a  product with configurable options. ￼Previously, Magento displayed the image for the parent product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)


### Shipping

<!-- MAGETWO-94434 -->* The Magento UPS module has been updated to support new UPS API endpoints.


* The Magento Shipping **Click & Collect** feature offers merchants the ability to:

	* Provide Click & Collect as a shipping option to customers, enabling them to directly collect shipments from designated source locations or stores 

	* Configure source locations available for Click & Collect pick-ups

	* Updates to Shipment Form for UPS (US only)

	Customers can also select Click & Collect locations during checkout. This feature is supported by workflows and notifications for Click & Collect pick up, packing, and collection. 




### Community contribution highlights

Highlights of community contributions include these fixes:

<!-- MAGETWO-86712 -->* The email server no longer throws an exception when a customer places an order using a PayPal payment method. Previously, when a customer checked out using PayPal, Magento placed the order, but the email server threw an exception. Thanks to community member [Jason Woods](https://github.com/driskell)!

<!-- ENGCOM-2671 -->* You can now use REST to add a configurable product to a shopping cart without creating a duplicate product entry. Thanks to community member [zamboten](https://github.com/zamboten)! [GitHub-15028](https://github.com/magento/magento2/issues/15028)

<!-- ENGCOM-1832 -->* The price range displayed for bundle products now shows only valid prices. Previously, Magento displayed special prices that had expired, even though the price in the customization and summary area was correct. Thanks to community member [Riccardo Tempesta](https://github.com/phoenix128)! [GitHub-15457](https://github.com/magento/magento2/issues/15457) 





## Fixes

In addition to security enhancements, this release contains the following functional fixes. 


### Installation, setup, and deployment


<!-- MAGETWO-94764 -->* Fixed an issue with the shared configuration settings in `app/etc/config.php` that caused `recursion detected` errors during deployment.

<!-- ENGCOM-2673 -->* You can now enable logs as expected (through the use of **Stores** > **Configuration** > **Advanced** > **Developer** > **Debug** > **Log to file**) when switching from production mode to developer mode. *Fix submitted by [Jay Ghosh](https://github.com/jayankaghosh) in pull request [15335](https://github.com/magento/magento2/pull/15335)*. [GitHub-13480](https://github.com/magento/magento2/issues/13480)

<!-- ENGCOM-2920 -->* You can now filter the customer grid without inadvertently triggering a next-page Ajax call. Previously, when you created an order from the Orders page and tried to filter the customer list, Magento did not filter the list, and displayed the next page of customer entries. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17870](https://github.com/magento/magento2/pull/17870)*. [GitHub-17789](https://github.com/magento/magento2/issues/17789)

<!-- MAGETWO-94475 -->* The `bin/magento` command now works as expected when Magento is not installed. Previously, Magento displayed this error, `Command line user does not have read and write permissions on generated directory. Please address this issue before using Magento command line.` 





### AdminGWS

<!-- MAGETWO-93990 -->* An adminstrator with permissions on one website only can no longer access the All Store Views scope for a product that is assigned to multiple websites.




### Bundle products

<!-- MAGETWO-93145 -->* Magento now sorts bundle summaries according to the criteria set in the Admin. 

<!-- ENGCOM-1832 -->* The price range displayed for bundle products now shows only valid prices. Previously, Magento displayed special prices that had expired, even though the price in the customization and summary area was correct. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15535](https://github.com/magento/magento2/pull/15535)*. [GitHub-15457](https://github.com/magento/magento2/issues/15457)

<!-- MAGETWO-89006 -->* Merchants can now create a return merchandise authorization (RMA)  for a bundled product from a customer's account. 
Previously, Magento did not create the RMA, and the store returned an error.

### Catalog

<!-- MAGETWO-93198 -->* Magento now displays the product name  under the product image on the product page.

<!-- MAGETWO-92036 -->* Magento now alerts you to an error when a merchant tries to save a product without completed required fields. 

<!-- ENGCOM-2555 -->* Previous fix for a gallery template issue that was inadvertently reverted has been restored. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16594](https://github.com/magento/magento2/pull/16594)*. [GitHub-15009](https://github.com/magento/magento2/issues/15009)

<!-- ENGCOM-2650 -->* Parent theme image height settings (specified in `view.xml`) no longer override the height settings assigned to individual images. *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request [14537](https://github.com/magento/magento2/pull/14537)*. [GitHub-12250](https://github.com/magento/magento2/issues/12250)

<!-- ENGCOM-2672 -->* Magento now maintains product image roles as expected after upgrade. Previously, image roles randomly disappeared from product pages after upgrade. *Fix submitted by [Sam Butler Thompson](https://github.com/Scarraban) in pull request [15606](https://github.com/magento/magento2/pull/15606)*. [GitHub-10687](https://github.com/magento/magento2/issues/10687)

<!-- ENGCOM-2670 -->* You can now save attributes for a configurable product after a validation error occurs. Previously, when you added a new product with an image, if a validation error occurred during the product save, Magento removed the images  from the **Images And Videos** section. If you subsequently fixed the validation conflict and attempted to save the product again, Magento threw a descriptive error. *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [16597](https://github.com/magento/magento2/pull/16597)*. [GitHub-7372](https://github.com/magento/magento2/issues/7372), [GitHub-13177](https://github.com/magento/magento2/issues/13177)

<!-- ENGCOM-2675 -->* You can now add a product with a price of zero (0) to a wishlist. *Fix submitted by [sv3n](https://github.com/sreichel) in pull request [17395](https://github.com/magento/magento2/pull/17395)*. [GitHub-16479](https://github.com/magento/magento2/issues/16479)

<!-- ENGCOM-1605 -->* You can now save a title for a product from the **Product** > **Customizable Options** page. *Fix submitted by [Madhumala Krishnan](https://github.com/Madhumalak) in pull request [15357](https://github.com/magento/magento2/pull/15357)*. [GitHub-6305](https://github.com/magento/magento2/issues/6305)

<!-- ENGCOM-2758 -->*  You can now add a custom fieldset  to the Admin category editor without changing the position of  the General section (that is, the section that contains the **Enable category**, **Include in Menu**, and **Category Name** fields). Previously, Magento moved the General section to the last position of the form. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [17540](https://github.com/magento/magento2/pull/17540)*. [GitHub-15041](https://github.com/magento/magento2/issues/15041)


<!-- MAGETWO-94080 -->* ASKED BRUCE

<!-- MAGETWO-94062 -->* Magento now displays a descriptive error message  when a customer tries to order a product in increments that are not allowed.

<!-- MAGETWO-88641 -->* Magento now applies tier prices as expected after a customer logs into their shopping cart. [GitHub-14255](https://github.com/magento/magento2/issues/14255)

<!-- MAGETWO-84894 -->* Magento no longer switches from table to list view on the product page when you add a product from the wishlist to the shopping cart. 

<!-- MAGETWO-73443 -->*  Customers can now add a product to their shopping cart when their session has expired. Previously, Magento did not add the 
product, and hung indefinitely while trying to add the product. 

<!-- MAGETWO-73245 -->* A merchant can now successfully create and save configurable products from the Admin in a multisite deployment. Previously, when a merchant created a configurable product with customizable options, Magento set its `has_options` and `required_options`  (in the `catalog_product_entity` table) to 0, and the merchant needed to click **Save** again to correctly add the product.  


<!-- MAGETWO-93047 -->





### Cart and checkout

<!-- MAGETWO-93037 -->* Customers can no longer place orders for out-of-stock products. 

<!-- ENGCOM-2743 -->* Magento no longer displays an undefined string on the Order Summary page. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17526](https://github.com/magento/magento2/pull/17526)*. [GitHub-17492](https://github.com/magento/magento2/issues/17492)

<!-- ENGCOM-2901 -->* Magento now displays the wishlist icon on the shopping cart page on mobile devices. Previously, Magento cut off the wishlist icon on this page when viewed on a mobile device. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [17877](https://github.com/magento/magento2/pull/17877)*. [GitHub-17851](https://github.com/magento/magento2/issues/17851)

<!-- ENGCOM-2789 -->* Magento no longer unchecks **My billing and shipping address are the same** checkbox when a customer uses an offline custom payment method for an order. Previously, when a customer used an offline custom payment method for an order, Magento unchecked this  checkbox on payment step if the shipping address was updated. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [17593](https://github.com/magento/magento2/pull/17593)*. [GitHub-14819](https://github.com/magento/magento2/issues/14819)

<!-- MAGETWO-93038 -->* You can now see category changes on the storefront as expected after the changes have been saved. Previously, Magento did not display changes to product categories on the storefront until reindexing occurred even if **update on schedule** was set and the cache had been cleaned.

<!-- MAGETWO-73604 -->* Magento now populates the **Default Billing** address field with the shipping address when a customer selects **Save in address book** during checkout. Previously, Magento saved the address, but did not populate the default billing address field as expected. 





### Configurable products

<!-- ENGCOM-2671 -->* You can now use REST to add a configurable product to a shopping cart without creating a duplicate product entry. *Fix submitted by [zamboten](https://github.com/zamboten) in pull request [15720](https://github.com/magento/magento2/pull/15720)*. [GitHub-15028](https://github.com/magento/magento2/issues/15028)

<!-- MAGETWO-77742 -->* Magento now displays a descriptive error message when you try to upload a file in an unsupported format. Previously, Magento displayed an error that did not relate to the specific upload problem. 

<!-- MAGETWO-75086 -->* Magento now displays the correct selected product options when you click  on  **View Details** for a  product with configurable options.  ￼Previously, Magento displayed the image for the parent product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)



### CMS

<!-- MAGETWO-73359 -->* You can successfully save a CMS page with same URL key as another store on a different website but with the same hierarchy. 




### Customer

<!-- ENGCOM-2746 -->* Magento now displays the Customer group menu under the Customers  as expected. Previously, Magento displayed the customer group menu  under the Customers menu on the Admin, but displayed it  under **Store** > **Other settings** menu while assigning a user role. *Fix submitted by [Emipro Technologies Pvt Ltd](https://github.com/emiprotech) in pull request [17515](https://github.com/magento/magento2/pull/17515)*. [GitHub-16499](https://github.com/magento/magento2/issues/16499)











### Directory

<!-- MAGETWO-92831 -->* Currency conversion rate services now work as expected in the Admin. 





### EAV

<!-- ENGCOM-2642 -->*  The Product Attribute Repository's incorrect return values have been replaced with values that now adhere to `Magento\Catalog\Api\ProductAttributeRepositoryInterface (extends Magento\Framework\Api\MetadataServiceInterface)` as expected. *Fix submitted by [julianvdrielen](https://github.com/julianvdrielen) in pull request [15691](https://github.com/magento/magento2/pull/15691)*. [GitHub-4803](https://github.com/magento/magento2/issues/4803)



### Email

<!-- MAGETWO-92786 -->* Magento now displays the correct width for the welcome email when viewed on a mobile device.  





### Frameworks

<!-- ENGCOM-2070 -->* You can now set values for `MAX_IMAGE_WIDTH` and `MAX_IMAGE_HEIGHT` in **Stores** > **Configuration** > **Advanced** > **System** > **Images Configuration**, which supports the upload of larger images. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [15942](https://github.com/magento/magento2/pull/15942)*. [GitHub-13747](https://github.com/magento/magento2/issues/13747)



#### Application framework

<!-- ENGCOM-2382 -->* Magento now validates that the required **Purchase Order Number** field is  set as expected during checkout. *Fix submitted by [Pablo](https://github.com/centerax) in pull request [14393](https://github.com/magento/magento2/pull/14393)*. [GitHub-6585](https://github.com/magento/magento2/issues/6585)




#### Database framework

<!-- MAGETWO-83918 -->* The `getSize` function now reflects item and page count totals for filtered product collections on the category page. 


#### JavaScript framework

<!-- ENGCOM-2291 -->* JavaScript validation rules no longer require validation of fields where completion is not required. Previously, customers could not complete forms unless non-required fuelds were completed. *Fix submitted by [Vitaliy Boyko](https://github.com/VitaliyBoyko) in pull request [16724](https://github.com/magento/magento2/pull/16724)*. [GitHub-16544](https://github.com/magento/magento2/issues/16544)




#### Session framework

<!-- ENGCOM-1440 -->* Magento no longer unexpectedly empties a customer's shopping cart during checkout when concurrent requests occur. *Fix submitted by [Elio Ermini](https://github.com/elioermini) in pull request [14973](https://github.com/magento/magento2/pull/14973)*. [GitHub-12362](https://github.com/magento/magento2/issues/12362)



### General
<!-- MAGETWO-93152 -->* Magento now processes zero (0) in email filter fields correctly. 

<!-- MAGETWO-93939 -->* You can now clear the **Date of Birth** field in the customer edit page when accessed from the Admin. 

<!-- ENGCOM-2737 -->* Product image zoom now works as expected in stores running on Safari. *Fix submitted by [Danny Nimmo](https://github.com/dannynimmo) in pull request [17491](https://github.com/magento/magento2/pull/17491)*. [GitHub-17416](https://github.com/magento/magento2/issues/17416)

<!-- ENGCOM-2785 -->* Magento now displays the background of transparent product image watermarks correctly. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17013](https://github.com/magento/magento2/pull/17013)*. [GitHub-16929](https://github.com/magento/magento2/issues/16929)

<!-- ENGCOM-2855 -->* The WYSIWYG editor now displays the backgrounds of .PHG thumbnail images as expected. Previously, transparent background were displayed as black.  *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [16733](https://github.com/magento/magento2/pull/16733)*. [GitHub-14248](https://github.com/magento/magento2/issues/14248)

<!-- ENGCOM-2860 -->*  Magento no longer duplicates events during delete operations. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [17718](https://github.com/magento/magento2/pull/17718)*. [GitHub-17715](https://github.com/magento/magento2/issues/17715)

<!-- ENGCOM-2322 -->* Magento now correctly displays the Datepicker widget when a user scrolls a  page containing it. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16775](https://github.com/magento/magento2/pull/16775)*. [GitHub-7903](https://github.com/magento/magento2/issues/7903)

<!-- ENGCOM-2628 -->* Magento now disables the **Shop By** button on the search page when a customer sets additional search filters. *Fix submitted by [Andrea Rivadossi](https://github.com/AndreaRivadossi) in pull request [15650](https://github.com/magento/magento2/pull/15650)*. [GitHub-13445](https://github.com/magento/magento2/issues/13445)

<!-- MAGETWO-83984-->* Magento now processes the oldest message queue entries first instead of last.










### Google Tag Manager

<!-- MAGETWO-87437 -->* All relevant attributes are now populated in the Google Tag Manager when a customer adds a product to their shopping cart. Previously, grouped, bundle,  and configurable  product attributes were missing in the Google Tag Manager. 



### Import/export

<!-- MAGETWO-93223 -->* Magento now displays the correct execution time for an import operation on the **System** > **Import History** page. 



### Infrastructure

<!-- ENGCOM-2783 -->* The Web Setup wizard icon sidebar shortcut on the Admin now links as expected to the wizard. *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17543](https://github.com/magento/magento2/pull/17543)*. [GitHub-13948](https://github.com/magento/magento2/issues/13948)

<!-- ENGCOM-2872 -->* The `$keepRation` parameter in the `Magento\Cms\Model\Wysiwyg\Images\Storage` class has been renamed to `$keepRatio`. *Fix submitted by [Martin Aarts](https://github.com/MartinAarts) in pull request [17776](https://github.com/magento/magento2/pull/17776)*. [GitHub-17587](https://github.com/magento/magento2/issues/17587)

<!-- MAGETWO-73342 -->* Customers can now change product status by clicking on either the toggle element or label text, but not by clicking the area around a toggle element. Previously, if a customer  clicked on the area around a toggle element, Magento changed the state of the element. Unintended results could occur if a customer mistakenly clicked on the area around the element and didn't realize that the status had  changed.



### Locale

<!-- MAGETWO-94075 -->* The DatePicker date filter on **Reports** > **Products** > **Ordered** now works as expected for administrators working in Australian English locales. 





### Logging

<!-- MAGETWO-93054 -->* Admin action logs now list changes to product quantity as expected. 






### Payment methods



#### Braintree
<!-- MAGETWO-93299 -->* Magento no longer throws an error when you try to add a new shipping address to an order paid with using Braintree from the Admin. 







#### PayPal

<!-- MAGETWO-86712 -->* The email server no longer throws an exception when a customer places an order using a PayPal payment method. Previously, when a customer checked out using PayPal, Magento placed the order, but the email server threw an exception. *Fix submitted by [Jason Woods](https://github.com/driskell) in pull request [13133](https://github.com/magento/magento2/pull/13133)*. 


### Reports

<!-- MAGETWO-93729 -->* The scope selector for reports now works as expected. Previously, when a merchant set the scope to **All Websites** , the generated report showed  sales from only a subset of websites.

<!-- MAGETWO-93345 -->* The `.csv` export of Coupon reports now shows the correct total for  selected coupons. Previously, the total line in the `.csv` file showed the totals for all coupons in the selected time period, rather than just the selected coupons.

<!-- MAGETWO-86650 -->* The `.csv` export of the Abandoned Cart report now contains information about all abandoned carts as expected. Previously, this `.csv` file contained only only the first 20 rows of the report. 

<!-- ENGCOM-2724 -->* The **Year-to-date** dropdown accessed from **Stores** > **Configuration** > **General** > **Reports** > **Dashboard** now displays a numerical list that ranges from 01 to 12 as expected. *Fix submitted by [teddysie](https://github.com/teddysie) in pull request [17383](https://github.com/magento/magento2/pull/17383)*. [GitHub-17289](https://github.com/magento/magento2/issues/17289)


<!-- MAGETWO- 73585-->* Wishlist reports are available on the Admin as expected. 




### Review

<!-- ENGCOM-2720-->* Magento now displays a `404 page not found` error when a customer tries to navigate to a product review that is not accessible. Previously. Magento displayed a PHP error code. *Fix submitted by [Ananth](https://github.com/Ananth747) in pull request [15369](https://github.com/magento/magento2/pull/15369)*. [GitHub-13102](https://github.com/magento/magento2/issues/13102)


### Sales


<!-- ENGCOM-2623 -->* The `Magento\Sales\Block\Adminhtml\Order\Totalbar` class and totalbar template file  have been deprecated.  These components were formerly included but never implemented in the invoice create and credit memo create layout files. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [16656](https://github.com/magento/magento2/pull/16656)*. [GitHub-16653](https://github.com/magento/magento2/issues/16653)


<!-- MAGETWO-94291 -->* Magento now displays product price and shipping costs in the default currency that was configured for that  specific website for orders created from the Admin. Previously, when you have multi-site configuration with different default currencies for each website, the product and shipping prices shown while creating an admin order are incorrect.

<!-- MAGETWO-94163 -->* Merchants can now successfully update product prices and currencies using **Admin** > **Stores** > **Configuration** > **Currency Setup**. 

<!-- MAGETWO-88858 -->* Admin orders are no longer restricted by a minimum order amount. Previously, Magento required this minimum for both Admin and storefront users.









### Sales rule
<!-- MAGETWO-93209 -->* You can now use wildcard values in coupon codes. 




### Search


<!-- ENGCOM-2415 -->* JavaScript files are now located inside the `web/js` directory. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16582](https://github.com/magento/magento2/pull/16582)*. [GitHub-16302](https://github.com/magento/magento2/issues/16302)

<!-- MAGETWO-91063 -->* Search synonyms are now available for all search engines deployed in your Magento store. Previously, search synonyms did not appear in the Admin menu when Elasticsearch 5.0+ was deployed. 

<!-- MAGETWO-92652 -->* Product attribute are now displayed as expected in layered navigation with Elasticsearch 5.0+.






### Shipping 

<!-- MAGETWO-86179 -->* Customers can now add a new address to an order during checkout of an order being shipped to multiple addresses. 

<!-- ENGCOM-2704 -->* Multishipping checkout now works as expected. Previously, Magento displayed the `Shipping address is not set` error message  when checking out an order with multiple addresses. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [16753](https://github.com/magento/magento2/pull/16753)*. [GitHub-16555](https://github.com/magento/magento2/issues/16555)

<!-- MAGETWO-94434 -->* The Magento UPS module has been updated to support new UPS API endpoints.

<!-- MAGETWO-93810 -->* Customers can now view their completed order from the success page for orders that will be shipped to multiple addresses. Previously, when a customer took a link from the order success page to view their just-completed order, Magento displayed this error, **There has been an error processing your request**.




#### Elasticsearch

<!-- MAGETWO-90497 -->* Elasticsearch now works as expected for Chinese locales. 




### Shipping

<!-- MAGETWO-92144 -->* The Shipment grid now displays the status of completed orders correctly. Previously, the Order Status column of the Shipment grid indicated that a completed was being processed.



### Store
<!--  ENGCOM-2530 -->* The `getUrlInStore()` method no longer returns URLs that contain the store code, which has shortened the extremely long URLs it previously returned. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16468](https://github.com/magento/magento2/pull/16468)*. [GitHub-16273](https://github.com/magento/magento2/issues/16273)



### Swagger

<!-- MAGETWO-93748 -->* Swagger now  works as expected when JavaScript minification and merging are enabled. 


<!-- ENGCOM-2837 -->* Swagger now works as expected when JavaScript minification is enabled. Previously, when JavaScript minification was enabled, the swagger-ui-bundle.js became corrupted, although Swagger worked fine when minification was subsequently disabled, and the files were redeployed. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [17626](https://github.com/magento/magento2/pull/17626)*. [GitHub-16927](https://github.com/magento/magento2/issues/16927)



### Testing

<!-- ENGCOM-2616 -->* The ProcessCronQueueObserverTest.php integration test now works correctly. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17191](https://github.com/magento/magento2/pull/17191)*. [GitHub-16243](https://github.com/magento/magento2/issues/16243)



### UI

<!-- ENGCOM-2812 -->* The JavaScript  validation rule used to validate AM/PM time settings now works as expected when JavaScript is minified. *Fix submitted by [Mark Shust](https://github.com/markoshust) in pull request [17652](https://github.com/magento/magento2/pull/17652)*. [GitHub-17648](https://github.com/magento/magento2/issues/17648)

<!-- ENGCOM-2834 -->* The message list component message type now has a message type of success. Previously, this type was always `error` when the `parameters` property was specified. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17701](https://github.com/magento/magento2/pull/17701)*. [GitHub-17700](https://github.com/magento/magento2/issues/17700)

<!-- ENGCOM-2607 -->* The confirmation modal buttons that Magento displays a customer sends a product to the trash are now translated as expected. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [17275](https://github.com/magento/magento2/pull/17275)*. [GitHub-17193](https://github.com/magento/magento2/issues/17193)


### User

<!-- MAGETWO-93003 -->* Magento no longer displays stores to which an administrator does not have access when the administrator creates a product and assigns it to a store view. Previously, an administrator with permissions set on one website only could view the **All Store Views** scope for a product.



### Wishlist


<!-- MAGETWO-86609 -->*  Products disabled in the Admin still appear no longer appear in storefront wishlists. Previously, disabled products still appeared in the storefront wishlist, although when a customer clicked on a disabled product, Magento correctly returned “page not found”. 

<!-- MAGETWO-74289 -->* Customers can now choose which wishlist to add a product to when adding products to the wishlist from the shopping cart.

<!-- MAGETWO-89234 -->* Magento now displays a success message when a customer successfully updates a wishlist.


## Known issues

<!-- BUNDLE-1728 -->* Vertex does not correctly assess taxes for each product of an order that is being shipped to multiple addresses. 

<!-- BUNDLE-1746 -->* Magento calculates shipping costs incorrectly for orders of bundle products that contain at least one a virtual product when Vertex is enabled.




<!-- not needed --  MAGETWO-93800 MAGETWO-94468 MAGETWO-94236 MAGETWO-94213 MAGETWO-94174 MAGETWO-94098 MAGETWO-93725 MAGETWO-93105 MAGETWO-92654 MAGETWO-92187 MAGETWO-92169 MAGETWO-91477 MAGETWO-91358 MAGETWO-91288 MAGETWO-89892 MAGETWO-89309 MAGETWO-88233 MAGETWO-86482 MAGETWO-85420 MAGETWO-82084 MAGETWO-73357 MAGETWO-72067 MAGETWO-71157 MAGETWO-95529 MAGETWO-95424 MAGETWO-94762 MAGETWO-94409 MAGETWO-94331 MAGETWO-94300 MAGETWO-94475 --> 








## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.



### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-7.md %}



### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 




### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html).


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
