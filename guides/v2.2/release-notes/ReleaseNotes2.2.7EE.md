---
group: release-notes
title: Magento Commerce 2.2.7 Release Notes

---

*Patch code and release notes were published on November , 2018.*




We are pleased to present Magento Commerce 2.2.7. This release includes 25 critical enhancements to product security, over 150 core code fixes and enhancements, and over 350 community-submitted pull requests. 

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.6-and-2.1.15-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.6) have been ported to 2.1.15, 1.14.3.10, and 1.9.3.10, as appropriate.



## Highlights

In addition to 25 critical security fixes, look for the following highlights in this release:


### Core code highlights

This release includes significant performance improvements to the core Magento code:


### **Magento Cloud highlights**






### **Community contribution highlights**

Highlights of community contributions include fixes that improve checkout flow and the sorting of simple products:





### **Core bundled extension highlights**

This release includes many enhancements to our core bundled extensions: 

#### Amazon Pay

Enhancements to Amazon Pay include these features:



#### dotmailer

Enhancements to dotmailer include these new features:





#### Klarna

Enhancements to Klarna include support for these new features:


For more information on these new features, see [Klarna](https://docs.magento.com/m2/ce/user_guide/payment/klarna.html). 




#### Magento Shipping

 The **Click & Collect** feature offers merchants the ability to:

	* Provide Click & Collect as a shipping option to customers, enabling them to directly collect shipments from designated source locations or stores 

	* Configure source locations available for Click & Collect pick-ups

	* Updates to Shipment Form for UPS (US only)
Consumers can also select Click & Collect locations during check-out. This feature is supported by workflows and notifications for Click & Collect pick up, packing, and collection. 





Looking for more information on these new features as well as many others? Check out [Magento Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).

*Fix submitted by [Alessandro Pagnin](https://github.com/alepane21) in pull request 13716*. [GitHub-13704](https://github.com/magento/magento2/issues/13704)

## Fixes


In addition to security enhancements, this release contains the following functional fixes. 


### Installation, setup, and deployment


<!-- MAGETWO-94764 -->* The "recursion detected" error during a deployment

ASK CLOUD



<!-- ENGCOM-2673 -->* 



Unable to activate logs after switching from production mode to developer

I can't enable logs in config (Stores > Configuration > Advanced > Developer > Debug > Log to file) because the select field is disabled.

fix: Set the ENV value of dev/debug/debug_logging to null when deployment mode is "developer"




 *Fix submitted by [Jay Ghosh](https://github.com/jayankaghosh) in pull request [15335](https://github.com/magento/magento2/pull/15335)*. [GitHub-13480](https://github.com/magento/magento2/issues/13480)




<!-- ENGCOM-2920 -->* Next Page button triggered when filtering Customer grid

Steps to reproduce
Go to "Sales -> Orders"
"Create new order"
Customer grid is displayed
Focus on any column filter (i.e. text box in email column)
Press ENTER to trigger the filter
Expected result
Filter's AJAX call is triggered
Results don't change because the filter input was empty
Grid is still showing the same page.
Actual result
Filter's AJAX call is triggered
Next Page AJAX call is triggered at the same time (see screenshots)
Results don't change because the filter input was empty
Grid is showing the next page now


   *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17870](https://github.com/magento/magento2/pull/17870)*. [GitHub-17789](https://github.com/magento/magento2/issues/17789)



### AdminGWS



<!-- MAGETWO-93990 -->*

<!-- MAGETWO-90765 -->*
Unable edit\create CMS/Block content by restricted admin

ACTUAL RESULTS: Warning: array_intersect(): Argument #1 is not an array in /var/www/html/magento2ee/app/code/Magento/AdminGws/Model/Models.php on line 1075 error_123.png￼
Expected CMS block for restricted admin is created


EE only





### Amazon Pay

<!-- BUNDLE- -->* 

### B2B

<!-- MAGETWO-94884 -->* 


<!-- MAGETWO-94820 -->* 

<!-- MAGETWO-93050 -->* 

<!-- MAGETWO-92400 -->* 
Reset button on Company page not removed email
STEPS TO REPLICATE: 1. Install B2B  2. Start to create new Company in admin 3. Input all required fields 4. Click Reset button
ACTUAL RESULTS: All fields except "admin email" are removed
Expected results Admin email should be removed as well


<!-- MAGETWO-89654 -->* 
Merchants can now create a Company with an optional regional setting. Previously, Magento displayed this message, `Error message: Invalid value of "" provided for the region_id field.`.


Creating a company with optional region setting is not possible

STEPS TO REPLICATE:
	▪	Magento Commerce B2B 2.2.2
	▪	PHP 7.1.14
	▪	Set setting "general/region/display_all" to "0"
	▪	Try to create a Company in the backend for example Germany
	▪	Select a country in which the region/state is not required
EXPECTED RESULTS: The company gets created
ACTUAL RESULTS:

 Error message: Invalid value of "" provided for the region_id field.





### Bundle products

<!-- MAGETWO-93145 -->* 

<!-- ENGCOM-1832 -->* 

Bundle Products price range is showing expired special price from bundle options

Expected result
no special price should be shown for bundle product price range.
Actual result
It is showing special price , when the special price for simple product has already been expired.
but the price in customization and summary box is right




  *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15535](https://github.com/magento/magento2/pull/15535)*. [GitHub-15457](https://github.com/magento/magento2/issues/15457)



<!-- MAGETWO-89006 -->* 

Merchants can now create a return merchandise authorization (RMA)  for a bundled product on the customer account. 
Previously, Magento did not create the RMA, and the store returned an error.

SSUE When creating RMA on the customer account for a bundled product, the store returns an error:
There is an error in quantities for item Sprite Yoga Companion Kit.
STEPS TO REPRODUCE
	1.	Enabled RMA on the storefront
	2.	Create an order with a configurable product for an existing customer
	3.	Invoice and ship the order
	4.	Log as customer on the storefront
	5.	View Order in customer account
	6.	Click link to create a return
	7.	Enter return information and click submit
Is issue reproducible in Magento Version: Yes Is issue reproducible in the latest available release: Yes Is issue reproducible in the customer's install: Yes
EXPECTED RESULTS Return should be created
ACTUAL RESULTS No return is created and the store returns an error.



### Catalog

<!-- MAGETWO-94080 -->* 
<!-- MAGETWO-93047 -->* 

<!-- MAGETWO-92036 -->* 

<!-- ENGCOM-2555 -->* restored previous fix for  gallery template issue. (This fix was unintentionally reverted in a previous release.)


*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16594](https://github.com/magento/magento2/pull/16594)*. [GitHub-15009](https://github.com/magento/magento2/issues/15009)



<!-- ENGCOM-2650 -->* 

View.xml is inheriting image sizes from parent (so an optional field is replaced by the value of parent)

I want to resize my images to a width of 250px and keep the aspect ratio (so I'm not adding a height tag). Instead of resizing the image to the full height of the image, Magento takes the height for that image from the parent theme's view.xml.

COPY FROM 2.1.16



 *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request [14537](https://github.com/magento/magento2/pull/14537)*. [GitHub-12250](https://github.com/magento/magento2/issues/12250)


<!-- ENGCOM-2672 -->* 

COPY FROM 2.1.16 -- engcom-2750


 *Fix submitted by [Sam Butler Thompson](https://github.com/Scarraban) in pull request [15606](https://github.com/magento/magento2/pull/15606)*. [GitHub-10687](https://github.com/magento/magento2/issues/10687)




<!-- ENGCOM-2670 -->* 

Save configurable product options after validation error #16597

I have a Magento Installation where I can't save attributes on a configurable product. (simple products work!).




Steps to reproduce
Add a configurable product
Change some attributes (tested with product images and country of manufacturer)
Press Save
Actual Result
The following error occurs:

`Warning: array_filter() expects parameter 1 to be array, string given in /var/www/dev.****.com/htdocs/web/vendor/magento/module-configurable-product/Controller/Adminhtml/Product/Initialization/Helper/Plugin/Configurable.php on line 145`




  *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [16597](https://github.com/magento/magento2/pull/16597)*. [GitHub-7372](https://github.com/magento/magento2/issues/7372), [GitHub-13177](https://github.com/magento/magento2/issues/13177)




<!-- ENGCOM-2675 -->* 

[Backport] Fixed add to wishlist issue on product price 0

Issue in adding the wishlist of "zero price" product

Expected result
It should allow to add the product in whishlist.
Actual result
Instead its throwing error message about price type in the file path: Vendor/magento/module-catalog/Pricing/Price/ConfiguredOptions.php






  *Fix submitted by [sv3n](https://github.com/sreichel) in pull request [17395](https://github.com/magento/magento2/pull/17395)*. [GitHub-16479](https://github.com/magento/magento2/issues/16479)





<!-- ENGCOM-1605 -->* 

Resolved product custom option title save issue

an't save customizable options Magento 2.1.0

Steps to reproduce

Go to Catalog/Product then edit a product
In Customizable Options tab, add option:
Option Title: Test
Option Type: Dropdown

Expected result

Option should be saved
Actual result

Can't save option with Title: 0


  *Fix submitted by [Madhumala Krishnan](https://github.com/Madhumalak) in pull request [15357](https://github.com/magento/magento2/pull/15357)*. [GitHub-6305](https://github.com/magento/magento2/issues/6305)



<!-- ENGCOM-2758 -->* 

 Adding a new fieldset to the admin category editor changes the position of the 'General' fieldset

 When a custom fieldset is added to the admin category editor, the General section (the one with "Enable category", "Include in Menu" and "Category Name") moves to the last position of the form.

   *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [17540](https://github.com/magento/magento2/pull/17540)*. [GitHub-15041](https://github.com/magento/magento2/issues/15041)


<!-- MAGETWO-94080 -->*

<!-- MAGETWO-94062 -->*

<!-- MAGETWO-93673 -->*

<!-- MAGETWO-92682 -->*

No condition in Catalog Staging MView triggers
When Magento indexes are configured to be run On Schedule, Magento MView creates INSERT/UPDATE/DELETE triggers. In the trigger script for UPDATE there is a condition to check if any of the values was really changed, and only then insert a record into changelog table of subscribed indexers. 
However, in Magento Commerce the catalog staging module overrides this functionality to detect entity_id by row_id, and in the generated code there are no conditions. 
Can you please check if a patch for this already exists? Same issue is in the latest 2.2.4




EE ONLY


<!-- MAGETWO-92036 -->*

The error icon does not appear on sections with required attributes that are empty when click on 'save' button

Fixed issue when the error icon does not appear on sections with required attributes that are empty when click on 'save' button
ISSUE:
Error icon on tabs not showing, if there is data missing on save

EXPECTED RESULTS: When a required field is not entered on product creation and you try to save it, the ￼ icon should be shown for the tab / section where the attribute is located
ACTUAL RESULTS: When a required field is not entered on product creation and you try to save it, the ￼ icon is not shown for the tab / section where the attribute is located


<!-- MAGETWO-88641 -->*

Tier price not applied instantly after logging in Shopping Cart

STEPS TO REPLICATE: 1. Create customer group "TEST" 2. Crete Customer and assign it to TEST group 3. Create Product with tire price for Test group 4. Open frontend as guest user 5. Add product to cart 6. Click "Sign In " and Login as Customer from step 2 7. Observe product prices
EXPECTED RESULTS: main section and summary should display tier price
ACTUAL RESULTS: the main section displays the regular price "Summary" block shows the tier price and after several seconds refreshed to tier price (The same issue is reproduced in Shipping page too when login at the shipping step)


[GitHub-14255](https://github.com/magento/magento2/issues/14255)






<!-- MAGETWO-84894 -->*

ProductListing: Grid view is getting changed to List view when user adding product from wishlist section.


On product listing page, Grid view is getting changed to List view when user adding product from wishlist section and success message should displayed in the grid view.

ACTUAL RESULTS Success message is not displayed but the products view is changed from grid view to list vie
EXPECTED RESULTS Success message should displayed and the page should remain in list view/




<!-- MAGETWO-73443 -->*

Customers can now add a product 


Adding a product to cart from category page with an expired session does not allow product to be added

If you attempt to add a product to cart from a category page with an expired session it does not allow the product to be added. It is stuck showing "adding" for the product.

STEPS TO REPLICATE:
	1.	Navigate to a category page (Ex. /gear/bags.html)
	2.	Click on "view site info" icon in the browser URL bar (This is using Chrome but any browser can be used if you know how to access cookies)
	3.	Click on "#cookies in use"
	4.	Expand the URL shown
	5.	Expand cookies
	6.	Remove PHPSESSID and form_key to replicate an expired session
	7.	Do not refresh the page and click "add to cart"
	8.	Notice the page is stuck "adding" the product
EXPECTED RESULTS: The page should provide a message to refresh
ACTUAL RESULTS: It does not allow the product to be added. It is stuck showing "adding" for the product.





<!-- MAGETWO-73245 -->*


Add product to website will reset has_options and required_options


Steps to reproduce:
	•	Create a 2nd website.
	•	Create a configurable product with any attribute.
	•	Add a Customizable Option
	•	Click Save button.
	•	Open the tab Product in Websites and add you configurable product to your created website.
	•	Click Save button

Expected result:
	•	Entry in table catalog_product_entity should have has_options and required_options set to 1

Actual result:
	•	The columns has_options and required_options are set to 0
	•	If you click Save button again in the backend it will set has_options and required_options to 1




<!-- MAGETWO-93047 -->*








### Cart and checkout

<!-- MAGETWO-93037 -->* 

 <!-- ENGCOM-2743 -->* 

Fixed undefinded shipping method name issue 


Sometimes it is the case that setting both Carrier title and Method name for a shipping method is redundant and having only the first one set it totally enough. Sadly, in the case of leaving Method name field blank there is a small visual bug displayed in checkout summary box.



"- undefined" displayed in checkout summary when shipping method name is not set



   *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17526](https://github.com/magento/magento2/pull/17526)*. [GitHub-17492](https://github.com/magento/magento2/issues/17492)








 <!-- ENGCOM-2901 -->* 


 Resolved : Wishlist icon cut on Shopping cart page in mobile view #17851 #17877



   *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [17877](https://github.com/magento/magento2/pull/17877)*. [GitHub-17851](https://github.com/magento/magento2/issues/17851)




 <!-- ENGCOM-2789 -->* 

 Fixing the address checkbox being unchecked on payment step. #17593

When an offline custom payment method is used, the 'My billing and shipping address are the same' checkbox from payment step is unchecked, if the shipping address is updated.

Custom Payment Method doesn't uncheck 'My billing and shipping address are the same'

In Magento 2.2.2, 2.2.3 there is no way to get the Magento behavior on My billing and shipping address are the same checkbox when a new custom Offline Payment Method is used.

Expected result
My billing and shipping address are the same it should be unchecked

Actual result
My billing and shipping address are the same is checked, but the address information below doesn't reflect the last changes.



*Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [17593](https://github.com/magento/magento2/pull/17593)*. [GitHub-14819](https://github.com/magento/magento2/issues/14819)



<!-- MAGETWO-93038 -->*


<!-- MAGETWO-73604 -->*

The **Default Billing** address field is populated with the shipping address.




New address is not marked as "Default Billing"


Steps to reproduce:
	1.	Create new customer (without addresses) from the front end
	2.	Start shopping, add a product to cart and proceed to checkout.
	3.	Add address in shipping and mark "save in address book";
	4.	On Payment step have billing address same as shipping checked.
	5.	Complete order.
	6.	Go to "My account" and check address
Actual result: Address is saved, but marked as "Default Shipping", default billing address is empty.
Expected result: "Default Billing" address not empty and should be the same as shipping












### Cleanup


Our community contributors have made many helpful, minor corrections to spelling and code syntax throughout the code base. 

#### Spelling corrections




#### Minor corrections to code and code formatting




### Company

<!-- MAGETWO-93081 -->* 

<!-- MAGETWO-93050 -->* 





### Configurable products

<!-- MAGETWO-73245 -->* 

<!-- ENGCOM-2671 -->* To decide whether a product with the same options is already present in the cart, magento makes a comparison with the string that represents the buyrequest in json format with those saved in the database. When a product is added by the Rest API the option code attribute encoded in the json is a number, whereas from the frontend context it is a string. In this case, this bufix forces the option attribute value in string, creating arrays that will later be converted into json


Convert to string $option->getValue, in order to be compared with other saved options in previous cart items




  *Fix submitted by [zamboten](https://github.com/zamboten) in pull request [15720](https://github.com/magento/magento2/pull/15720)*. [GitHub-15028](https://github.com/magento/magento2/issues/15028)


<!-- MAGETWO-77742 -->* 
Error message when uploading unsupported file format
When buying a configurable product with a customizable option of type FILE, if user attempts to upload an unsupported file, the error  "You need to choose options for your item." appears and selected options are unselected. The error is not related to the actual problem (uploading unsupported file) and merchant considers it is not UI friendly for the customers.

Expected results: 
If the user attempts to upload a file with unsupported file format, a descriptive error associated to invalid file format should be displayed - "File '<file name uploaded by user>' for '<option name>' has an invalid extension."  and the selected configurable options should remain selected.

Actual results: 

If the user attempts to upload a file with unsupported file format, the error "You need to choose options for your item." appears (error not associated to the actual problem) and the options selected by the user are lost, forcing the user to re-select the options.





<!-- MAGETWO-75086 -->* 

Child product image should be shown in Wishist if options are selected for configurable product
PRECONDITIONS
	▪	Configurable product visible on the frontend has been created (with image).
	▪	Simple product assigned to created configurable has been created (with images).
	▪	Registered customer exists
STEPS TO REPRODUCE
1. Go to frontend, login as registered customer  2. Open created configurable product  3. Select options for existed simple on configurable product information page  4. Click Add to Wishlist


EXPECTED RESULT
￼ Selected options are displayed by clicking on View Details link.  ￼ As Image for selected options - image of child product with these options is displayed
ACTUAL RESULT
￼ Selected options are displayed by clicking on View Details link.  ￼ As Image for selected options - parent configurable product's image is shown


[GitHub-8168](https://github.com/magento/magento2/issues/8168)



Configurable product on wishlist shows parent image instead variation image 


Expected result
	1.	Wishlist should display variation product image instead of parent
	2.	Currently this is done for checkout page and cart and we are able to select from backend if we want parent or child product image to be displayed




### CMS

<!-- MAGETWO-73359 -->* 
CMS Page does not save when same url key with hierarchy for Multi-store

When saving a CMS Page with same url key as another store on a different website but with the same hierarchy, the process errors out and displays
Something went wrong while saving the page
In the database magento_versionscms_hierarchy_node table contains the cms page information for hierarchy. Even though UNIQUE KEY `MAGENTO_VERSIONSCMS_HIERARCHY_NODE_REQUEST_URL_SCOPE_SCOPE_ID` (`request_url`,`scope`,`scope_id`), always the scope is "default" and scope_id = 0 instead of correct scope and scope_id.
After you see the error, you can no longer edit any of the cms pages until the duplicate row is deleted and the following error is displayed on the screen.



EXPECTED RESULTS: Page should save with using duplicate URL key / hierarchy path for separate websites
ACTUAL RESULTS: Error when saving a CMS page with duplicate URL key / hierarchy path for separate websites




### Customer

 <!-- ENGCOM-2746 -->* Solution for User role issue with customer group #17515
 ISSUE:
When trying to update Reward Points on a customer account with a negative value, it doesn't trigger an error if the number contains an invalid character — instead of -

STEPS TO REPLICATE:

Go to Customers > All Customers and modify any customer account
Click on the Reward Points tab
If there are no points available, add some points and click on Save and Continue Edit
Click on the Reward Points tab and enter –200 (note that the - is not a minus symbol)
Click on Save
EXPECTED RESULTS:
If trying to deduct reward points from an account, and the negative value contains/uses an invalid minus symbol, an invalid number error should be thrown

ACTUAL RESULTS:
No errors and no changes to reward points

  *Fix submitted by [Emipro Technologies Pvt Ltd](https://github.com/emiprotech) in pull request [17515](https://github.com/magento/magento2/pull/17515)*. [GitHub-16499](https://github.com/magento/magento2/issues/16499)












### Directory

<!-- MAGETWO-92831 -->* 




### EAV

 <!-- ENGCOM-2642 -->*  Incorrect return value from Product Attribute Repository

 COPY FROM 2.1.16 /ENGCOM-2707

  *Fix submitted by [julianvdrielen](https://github.com/julianvdrielen) in pull request [15691](https://github.com/magento/magento2/pull/15691)*. [GitHub-4803](https://github.com/magento/magento2/issues/4803)


### Email


<!-- MAGETWO-92786 -->* 




### Frameworks

<!-- ENGCOM-2070 -->* You can now set values for `MAX_IMAGE_WIDTH` and `MAX_IMAGE_HEIGHT` in **Stores** > **Configuration** > **Advanced** > **System** > **Images Configuration**, which supports the upload of larger images. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [15942](https://github.com/magento/magento2/pull/15942)*. [GitHub-13747](https://github.com/magento/magento2/issues/13747)



#### Application framework


<!-- ENGCOM-2382 -->* Magento now validates that the required **Purchase Order Number** field is  set as expected during checkout. *Fix submitted by [Pablo](https://github.com/centerax) in pull request [14393](https://github.com/magento/magento2/pull/14393)*. [GitHub-6585](https://github.com/magento/magento2/issues/6585)


#### Database framework

<!-- MAGETWO-83918 -->* The getSize function now reflects item and page count totals for filtered product collections on the category page. 


#### JavaScript framework

<!-- ENGCOM-2291 -->* JavaScript validation rules no longer require validation of fields where completion is not required. Previously, customers could not complete forms unless non-required fuelds were completed. *Fix submitted by [Vitaliy Boyko](https://github.com/VitaliyBoyko) in pull request [16724](https://github.com/magento/magento2/pull/16724)*. [GitHub-16544](https://github.com/magento/magento2/issues/16544)




#### Session framework

<!-- ENGCOM-1440 -->* Magento no longer unexpectedly empties a customer's shopping cart during checkout when concurrent requests occur. *Fix submitted by [Elio Ermini](https://github.com/elioermini) in pull request [14973](https://github.com/magento/magento2/pull/14973)*. [GitHub-12362](https://github.com/magento/magento2/issues/12362)



### General

<!-- MAGETWO-98990 -->*

<!-- MAGETWO-93939 -->* 

<!-- ENGCOM-2737 -->* Product image zoom now works as expected in stores running on Safari. *Fix submitted by [Danny Nimmo](https://github.com/dannynimmo) in pull request [17491](https://github.com/magento/magento2/pull/17491)*. [GitHub-17416](https://github.com/magento/magento2/issues/17416)







<!-- ENGCOM-2785 -->* Magento now displays the background of transparent product image watermarks correctly. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17013](https://github.com/magento/magento2/pull/17013)*. [GitHub-16929](https://github.com/magento/magento2/issues/16929)



<!-- ENGCOM-2855 -->* The WYSIWYG editor now displays the backgrounds of .PHG thumbnail images as expected. Previously, transparent background were displayed as black.  *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [16733](https://github.com/magento/magento2/pull/16733)*. [GitHub-14248](https://github.com/magento/magento2/issues/14248)


<!-- ENGCOM-2860 -->*  Magento no longer duplicates events during delete operations. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [17718](https://github.com/magento/magento2/pull/17718)*. [GitHub-17715](https://github.com/magento/magento2/issues/17715)


<!-- ENGCOM-2322 -->* 

*Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16775](https://github.com/magento/magento2/pull/16775)*. [GitHub-7903](https://github.com/magento/magento2/issues/7903)






 <!-- ENGCOM-2628 -->* 

  *Fix submitted by [Andrea Rivadossi](https://github.com/AndreaRivadossi) in pull request [15650](https://github.com/magento/magento2/pull/15650)*. [GitHub-13445](https://github.com/magento/magento2/issues/13445)


<!-- MAGETWO-83984-->*
MYSQL Message queue is fetching messages from new to old

EE only 


<!-- MAGETWO-93939 -->*




### Google Tag Manager



<!-- MAGETWO-87437 -->* 

Google Tag Manager dataLayer does not show information about Configurable products

after applying fixes, Google Tag manager shows info about configurable products

The dataLayer for Google Tag Manager only contains information about Simple products like SKU, Name and Price - however they are not available for Configurable products

Expected behavior: The expected behavior is that the product ID, product price, and product name are populated in the add to cart event of the data layer when we click the add to cart button.

Currently, everything is undefined.
Seems like this is an issue for configurable, grouped, and bundled products






### HTML




### Import/export

<!-- MAGETWO-93223 -->* 


### Infrastructure

 <!-- ENGCOM-2783 -->* 
    *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17543](https://github.com/magento/magento2/pull/17543)*. [GitHub-13948](https://github.com/magento/magento2/issues/13948)





 <!-- ENGCOM-2872 -->* 


   *Fix submitted by [Martin Aarts](https://github.com/MartinAarts) in pull request [17776](https://github.com/magento/magento2/pull/17776)*. [GitHub-17587](https://github.com/magento/magento2/issues/17587)



<!-- MAGETWO-73342 -->* 

Clicking on area around the label of a toggle element results in the element's state being changed


If you click on the area around a toggle element, such as the Enable Product attribute on a product, it changes the state of the element.

Look in 2.3

Clicking on the area around the label of a toggle element no longer results in a change to the element's state. Previously, if you clicked on the area around the label of a toggle element, Magento changed the element state. 




### Klarna



### Locale

<!-- MAGETWO-94075 -->* 

DateTime::`__construct()`: Failed to parse time string (30/01/2018) at position 0 (3): Unexpected character

TEPS TO REPLICATE:
Create admin user with Locale English (Australia)
Login as this admin
Navigate "Reports" > Products > Ordered.
Find "`products" using date filter (Day should be greater than 12) datepicker should be from 1 to 31 Ex. 1/08/2018 - 31/08/2018


Actual result
grid is empty

Same issue if you set in store config locale English (Australia) And add datapicker to any attribute (ex. custom attribute) on frontend. Day should be greater than 12






### Logging

<!-- MAGETWO-93054 -->* 

Fixed issue with admin logs don't detail quantity changes

Admin logs don't detail quantity changes

ISSUE:

Admin action logs report contain changes that weren't made by admin.
Doesn't log quantity changes if admin did they
STEPS TO REPLICATE:

Edit any product in the catalog
Change quantity and save
Open System>Action Logs>Report
Open last product save action
EXPECTED RESULTS:
Only actions that were made by admin reflected, quantity change action is logged.

ACTUAL RESULTS:
Lots of attributes that weren't changed is logged, quantity change action is not logged





### Order management

<!-- MAGETWO-92144 -->* 
Shipment grid show wrong order status
STEPS TO REPLICATE: 1. Place any order 2. Create Invoice and Shipment (order status should be complete) 3. Go to Sales->Shipments 4. Add Order Status column to the grid 5. Check status for existing shipment
EXPECTED RESULTS: Order Status should be Closed ACTUAL RESULTS: Order status is Processing




### Payment methods



#### Braintree

<!-- MAGETWO-93299 -->* 

Error occurs when entering a new shipping address on admin order paid with Braintree

ISSUE:
An error occurs when trying to add a new address to a new order in the admin:

cannot place two elements in "#braintree_cc_exp_year"

actual result: Once the new shipping address is accepted, the error is displayed

expected result: The address is saved without an error








#### PayPal

<!-- MAGETWO-86712 -->* 

Magento PayPal checkout fails if email sending fails / other payment does not 
	1.	Description If PayPal checkout is used and, for whatever reason, the email sender throws an exception (maybe third-party integration fails to send), the PayPal order is still placed but the user is shown Something went wrong message and ends up in review page.
This is in contrast to a cash payment or other payment method where the order is placed successfully.
If PayPal checkout is used and, for whatever reason, the email sender throws an exception (maybe third-party integration fails to send), the PayPal order is still placed but the user is shown Something went wrong message and ends up in review page.
This is in contrast to a cash payment or other payment method where the order is placed successfully.
Pull Request:
 - title: Magento PayPal checkout fails if email sending fails / other payment does not
 - url: [magento/magento2#13133|https://github.com/magento/magento2/pull/13133]
 - contributor name: @driskell
 - contributor link: https://github.com/driskell




### Pagecache




### Quote

<!-- MAGETWO-91332 -->* 
Cannot request a quote on storefront (IOS 11.3.1)

est devices:  iPhone SE, iPad NEW (2017)  iOS 11.3.1
Browsers:  Safari, Chrome
Preconditions:
	1.	Install Magento B2B on cloud instance (Enabled all B2B features)
	2.	Create company with admin user
	3.	Create simple product
Steps to reproduce:
	1.	Login to frontend as company admin
	2.	Add product to the shopping cart
	3.	Go to shopping cart
	4.	Click "Request a quote"
	5.	Fill all needed fields
	6.	Click "Send Request"
Expected result:  Quote successfully requested
Actual result: Nothing happens






### Reports

<!-- MAGETWO-93729 -->* Fix scope selector for reports

Steps for reproduce

1. Stores->all stores->Add new StoreView "Canadian"
2. Add new website and store view "Ukrainian"
3. Set Canadian currency as Canadian dollar.
4. Set Ukrainian currency as Ukrainian hryvnia.
5. add new product to both websites.
6. add currency rates to currencies.
6. place orders from default, canadian and ukrainian storeviews.
7. add invoices to all this orders.
8. open orders reports.

Expected result:

When "All Websites" is selected, the report shows only $USD orders - it should show sales from all websites. - 3 order

Actual result:

When "All Websites" is selected, the report shows show sales from all websites. - 3 orders






<!-- MAGETWO-93345 -->* 
Wrong totals shown in exported Coupon Report

STEPS TO REPRODUCE

Create a few orders using different coupons.
Go to Reports>Coupons
Select any dates with orders that used coupons
Select Specific Coupon
Choose a Coupon
Export report as CSV
EXPECTED RESULTS
The total line in the CSV file should show totals for the selected coupon.

ACTUAL RESULTS
The total line in the CSV file shows the totals for all coupons in the selected time period.

<!-- MAGETWO-86650 -->* Abandoned Cart report exports only current page
Fixed issue when Abandoned Cart report exports only current page

Abandoned carts report exports to csv/xml file, only rows from current page in admin grid.

STEPS TO REPRODUCE

Make sure you have more than 20 customers with abandoned carts (for example 25)
Go to Reports>Abandoned Carts
On Abandoned Carts report page, click export (CSV/Excel XML)
EXPECTED RESULTS:
All abandoned carts should be exported

ACTUAL RESULTS:
Only first 20 rows are exported



 <!-- ENGCOM-2724 -->* 

   *Fix submitted by [teddysie](https://github.com/teddysie) in pull request [17383](https://github.com/magento/magento2/pull/17383)*. [GitHub-17289](https://github.com/magento/magento2/issues/17289)


<!-- MAGETWO- 73585-->* 

The customer wishlist report page on the Admin now displays the expected products. 


<!-- MAGETWO- 86650-->* 

The Abandoned Cart report now exports 

Abandoned Cart report exports only current page

Fixed issue when Abandoned Cart report exports only current page


Abandoned carts report exports to csv/xml file, only rows from current page in admin grid.
STEPS TO REPRODUCE
	1.	Make sure you have more than 20 customers with abandoned carts (for example 25)
	2.	Go to Reports>Abandoned Carts
	3.	On Abandoned Carts report page, click export (CSV/Excel XML)
EXPECTED RESULTS: All abandoned carts should be exported
ACTUAL RESULTS: Only first 20 rows are exported


<!-- MAGETWO-93345-->* 






### Review

 <!-- ENGCOM-2720-->* 


   *Fix submitted by [Ananth](https://github.com/Ananth747) in pull request [15369](https://github.com/magento/magento2/pull/15369)*. [GitHub-13102](https://github.com/magento/magento2/issues/13102)



### Reward

<!-- MAGETWO-93060 -->*
Cannot update points with negative value if minus sign is an invalid character
When trying to update Reward Points on a customer account with a negative value, it doesn't trigger an error if the number contains an invalid character — instead of -

STEPS TO REPLICATE:

Go to Customers > All Customers and modify any customer account
Click on the Reward Points tab
If there are no points available, add some points and click on Save and Continue Edit
Click on the Reward Points tab and enter –200 (note that the - is not a minus symbol)
Click on Save
EXPECTED RESULTS:
If trying to deduct reward points from an account, and the negative value contains/uses an invalid minus symbol, an invalid number error should be thrown

ACTUAL RESULTS:
No errors and no changes to reward points

ee only

### RMA

<!-- MAGETWO-94019 -->*

On Returns(RMA) details, Show/Hide details button does nothing

STEPS TO REPLICATE:
1. Enable RMA on Frontend
2. Create new one RMA attribute that shows in frontend
3. Place Order 
4. Create Invoice and Shippment
5. Create Return from frontend
6. In admin change RMA status and fill custom attribute
7. Open RMA on frontend
8. Clic "Show/Hide details" button

ACTUAL RESULTS:
The button does not work

EXPECTED RESULT:
The button is worked





### Sales


 <!-- ENGCOM-2623 -->* 

 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [16656](https://github.com/magento/magento2/pull/16656)*. [GitHub-16653](https://github.com/magento/magento2/issues/16653)







<!-- MAGETWO-94291 -->* Wrong product and shipping prices are applying on admin orders

ISSUE:
Merchant reported that when you have multi-site configuration with different default currencies for each website, the product and shipping prices shown while creating an admin order are incorrect.

Issue is reproducible in clean 2.2.5 with B2B (merchant's version) and also in 2.2-develop with B2B 1.0-develop

expected: When creating an order in the Admin panel, product price and shipping must be displayed in the default currency that was configured to the specific website.

actual: When creating an order in the Admin panel, product price and shipping are shown with different currency than the default currency configured for such website.



<!-- MAGETWO-94163 -->* Magento 2 B2B cannot switch currency in Admin order
Create an additional store view
Open Admin > Stores > Configuration > Currency Setup.
Select several Allowed Currencies
Set different Default Currency for each store view
Open Stores > Currency Rates. Enter some values to recalculate prices
Create an order from Admin
Select a user
Add a product to the order
Switch currency from Order Currency dropdown

expected results: 
Price and currency symbol are updated


actual results: 
Price and currency symbol are not updated





<!-- MAGETWO-88858 -->* 

Minimum Order amount required in Admin orders

ISSUE:
Minimum order amound is required when placing an order through the admin. The setting is not limited to the front end customers only. This was not the case in 1.x versions.

EXPECTED RESULTS: Admin orders should not be restricted by the minimum order amount.
ACTUAL RESULTS: Admin orders are restircted to the minimum order amount set





### Sales rule


<!-- MAGETWO-93209 -->* Wildcard values for coupon codes

Added possibility to specify special characters in coupon codes

ISSUE: Wildcard values for coupon codes

STEPS TO REPRODUCE:
1. Go to Admin > Create a Sales Rule with coupon code "2?ds5!2d"
2. Go on the frontend and add product to the cart
3. Try to apply coupon "2?ds5!2d"

Actual result: coupon code cannot be applied

Expected result: coupon applied


### Search

 <!-- ENGCOM-2415 -->* 

   *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16582](https://github.com/magento/magento2/pull/16582)*. [GitHub-16302](https://github.com/magento/magento2/issues/16302)


<!-- MAGETWO-91063 -->* 

 Search synonyms are now available regardless of search engine deployed in your Magento store when 

"Search Synonyms" disappear from backend menu when search engine set to Elasticsearch 5


Steps to reproduce:
	1.	Go to Stores> Configuration> CATALOG> Catalog> Catalog Search
	2.	Set Search Engine to "Elasticsearch 5.0+"
	3.	Clean cache, perform reindex
	4.	Go to Marketing> SEO & Search
Actual result: "Search Synonyms" disappear from backend menu
Expected result: "Search Synonyms" should be available regardless of search engine

<!-- MAGETWO-92652 -->* 

Product attribute not displayed in layered navigation with Elasticsearch 5.0+


Steps to reproduce
	1.	Choose the color attribute or create new attribute and set attribute properties to:
	◦	Use in Layered Navigation = Filterable (with results)
	◦	Use in Search Results Layered Navigation = Yes
	2.	Create configurable product with the color attribute or attribute created in step #1 with some options.
	3.	Navigate to the category page on the store front.
￼ Expected result:
	•	Verify that under the layered navigation panel, attribute options are visible under the color attribute or attribute created in step #1.
￼ Actual result:
	•	Attribute not show in the layered navigation panel.






### Shipping 

<!-- MAGETWO-86179 -->* Cannot add address when editing Billing Address during checkout
fix issue with adding billing address on multiply checkout

ISSUE
When ordering with multiple addresses, adding a billing address does not work.

STEPS TO REPRODUCE

Create customer account
Add multiple address to account
On store front, add several products to the shopping cart
Go to shopping cart page
Choose to check out with multiple addresses
Assign products to different address
Continue checkout to billing step
On Billing step, click Edit Billing Address
Click Add New Address
Is issue reproducible in Magento Version: 2.1.9
Is issue reproducible in Trunk: No
Is issue reproducible in the customer's install: Yes

EXPECTED RESULTS
Customer should be directed to page to add new address.

ACTUAL RESULTS
Nothing happens when clicking the New Address button





<!-- ENGCOM-2704 -->* 


  *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [16753](https://github.com/magento/magento2/pull/16753)*. [GitHub-16555](https://github.com/magento/magento2/issues/16555)


<!-- MAGETWO-94434 -->* 

UPS API removal - Dec 2018 
Magento UPS module is using some unsupported API calls that will be removed in December 2018. The module needs to be updated to replace the old API calls with new API endpoints:

From UPS API Support: 
API URLs starting with www.ups.com/ups.app/xml/ or https://www.ups.com/webservices/ are not currently supported. These URLs will be disabled and eliminated on December 31, 2018

Please update your URLs as shown in the Developer Guides posted on ups.com. The new URLs begin with https://onlinetools.ups.com/ .

TASKS:

Need to identify all occurrences of outdated API endpoints and the functionality they provide
Research how to use the new API endpoints to replace the old and keep the same functionality in the product
Eliminate usage of old API calls and replace with new

CHECK 2.1.16





<!-- MAGETWO-93810 -->* Unable to view order Placed via Checked Out with Multiple Addressees
Steps to Reproduce

1. Go to storefront and add simple product to the shopping cart
2. Click on cart icon and select "View and edit cart" link 
3. Click on "Check Out with Multiple Addresses" link on summary section.
4. Click "Sing in" button and login with created test customer account
5. Select address from "Send To" drop-down list and click "Go To Shipping information" button
6. Select shipping method and click "Continue to Billing information" button
7. Select Payment method - Check / Money order and click "Go to review Your Order"
8. Click "Place Order" button and click on order link on Success page


Result:
Order information should viewed

Actual Result:
"There has been an error processing your request
Exception printing is disabled by default for security reasons.
Error log record number: ____________"(see attachment)






<!-- MAGETWO-86179 -->* 
Cannot add address when editing Billing Address during checkout


Previously, when placing an order with multiple addresses, customers could not add a billing address to the order.


ISSUE When ordering with multiple addresses, adding a billing address does not work.
STEPS TO REPRODUCE
	1.	Create customer account
	2.	Add multiple address to account
	3.	On store front, add several products to the shopping cart
	4.	Go to shopping cart page
	5.	Choose to check out with multiple addresses
	6.	Assign products to different address
	7.	Continue checkout to billing step
	8.	On Billing step, click Edit Billing Address
	9.	Click Add New Address
Is issue reproducible in Magento Version: 2.1.9 Is issue reproducible in Trunk: No Is issue reproducible in the customer's install: Yes
EXPECTED RESULTS Customer should be directed to page to add new address.
ACTUAL RESULTS Nothing happens when clicking the New Address button


### Swagger

<!-- MAGETWO-93748 -->*. Swagger not working when js minification and merging are enabled


PRECONDITIONS:
enable Merge JavaScript Files
enable Enable JavaScript Bundling
enable Minify JavaScript Files
remove pub/static files
redeploy static content

EXPECTED RESULTS
SWAGGER loaded successfully.

ACTUAL RESULTS:
Error in browser console:
[Error] SyntaxError: Unexpected identifier 'Sindre' (df5162b027e833419d3bb735a8b8cbe9.js:257)

### Swatches


<!-- MAGETWO-95426 -->* Unable to set default option for swatch attribute

UNRESOLVED



<!-- MAGETWO-95424 -->*

UNRESOLVED



#### Elasticsearch

<!-- MAGETWO-93038 -->* Category not updating until full reindex

the issue with updating category after full reindex is fixed
ISSUE
You can not get category changes to show on front end until they do a reindexing indexers regardless if "update on schedule" is set and cache cleaned.

*REPRODUCE*

Set indexers to "update on schedule" (System > Index Management > Select all, Choose Update by Schedule and click on Submit button )
Enable "Use Flat Catalog" for categories and products (Stores > Configurations > Catalog > Catalog > Storefront > Choose Yes in Use Flat Catalog Category and Use Flat Catalog Product dropboxes)
Set up Elasticsearch ( Stores > Configurations > Catalog > Catalog > Catalog Search > Choose the version which is you need
in Search Engine dropbox)
Clear cache and perform full reindex
Add a product to a category (Create simple product simple1, create subcategory cat1, and assign simple1 to cat1)
Run cron several times until indexer_update_all_views cron job is processed successfully
Does the product show on the front end?
*EXPECTED*
Yes
*ACTUAL*
No




<!-- MAGETWO-90497 -->* Elasticsearch for Chinese produces error

ISSUE: elasticsearch for Chinese locale doesn't work as expected





<!-- MAGETWO-90497 -->* 

Elasticsearch now works as expected for Chinese locale. 



Removed Chinese stemmer as unsupported


The product is not searchable


ISSUE: elasticsearch for Chinese locale doesn't work as expected
STEPS TO REPRODUCE:
	1.	Install fresh Magento without Sample Data
	2.	Go to Admin > Stores > Configuration > Locale Options
	3.	Change scope to "Main website" and change Locale to "Chinese (China)"
	4.	Setup elasticsearch
	5.	Flush cache
	6.	Create a product
	7.	Go to elasticsearch logs and observe the error:











### Shipping

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>



<!-- MAGETWO-92144 -->* 
Shipment grid show wrong order status

STEPS TO REPLICATE:
1. Place any order
2. Create Invoice and Shipment (order status should be complete)
3. Go to Sales->Shipments
4. Add Order Status column to the grid
5. Check status for existing shipment

EXPECTED RESULTS:
Order Status should be Closed
ACTUAL RESULTS:
Order status is Processing




### Store

<!--  ENGCOM-2530 -->* The `getUrlInStore()` method no longer returns URLs that contain the store code, which has shortened the extremely long URLs it previously returned. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16468](https://github.com/magento/magento2/pull/16468)*. [GitHub-16273](https://github.com/magento/magento2/issues/16273)


### Swagger

 <!-- ENGCOM-2837 -->* 

   *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [17626](https://github.com/magento/magento2/pull/17626)*. [GitHub-16927](https://github.com/magento/magento2/issues/16927)



### Swatches


### Tax






### Testing

 <!-- ENGCOM-2616 -->* 

 *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17191](https://github.com/magento/magento2/pull/17191)*. [GitHub-16243](https://github.com/magento/magento2/issues/16243)





### UI

<!-- ENGCOM-2812 -->* 

  *Fix submitted by [Mark Shust](https://github.com/markoshust) in pull request [17652](https://github.com/magento/magento2/pull/17652)*. [GitHub-17648](https://github.com/magento/magento2/issues/17648)






<!-- ENGCOM-2834 -->* 

  *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17701](https://github.com/magento/magento2/pull/17701)*. [GitHub-17700](https://github.com/magento/magento2/issues/17700)


<!-- ENGCOM-2607 -->* 

 *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [17275](https://github.com/magento/magento2/pull/17275)*. [GitHub-17193](https://github.com/magento/magento2/issues/17193)




### User

<!-- MAGETWO-93003 -->* Admin user with permissions for 1 website can view the All Store Views scope on a product

Fixed store resolving for products scope.

Steps to reproduce
Create a new admin role with only access to the second website, and also a user account
Login as the second website admin
Go to Products > Catalog and creat a product

Actual result
"Product in website" has all store view
After assign product to the default (not permitted) website get an exception "Please assign this item to a store view."

Expected result
Only one store is available in "Product in website" section







### Wishlist

<!-- MAGETWO-86609 -->*  Products disabled in the Admin still appear no longer appear in storefront wishlists. Previously, disabled products still appear in the storefront wishlist, although when a customer clicked on a disabled product, Magento correctly returned “page not found”. 


<!-- MAGETWO-74289 -->* 
Customers can now choose which wishlist to add a product to when adding products to the wishlist from the shopping cart.




<!-- MAGETWO-89234 -->* 
Wishlist update does not return a success message 
ISSUE
ECE Merchant has pointed out that when an update is made to the wishlist it does not return a success message indicating there was an update, however when you look the update was made. If you click the "Update Wish List" button the page is refresh but there's no message indicating there was an update.


EXPECTED RESULTS ￼ After making any changes to wishlist and clicking on the "Update wishlist" button, the page must return a green update success message
ACTUAL ￼ No success update is returned
EXPECTED RESULTS ￼ After making any changes to wishlist and clicking on the "Update wishlist" button, the page must return a green update success message
ACTUAL ￼ No success update is returned






<!-- not needed-  --> 






## Known issue




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
