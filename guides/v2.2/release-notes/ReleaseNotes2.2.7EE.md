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



<!-- ENGCOM-2673 -->* You can now enable logs as expected (through the use of **Stores** > **Configuration** > **Advanced** > **Developer** > **Debug** > **Log to file**) when switching from production mode to developer mode. *Fix submitted by [Jay Ghosh](https://github.com/jayankaghosh) in pull request [15335](https://github.com/magento/magento2/pull/15335)*. [GitHub-13480](https://github.com/magento/magento2/issues/13480)

<!-- ENGCOM-2920 -->* You can now filter the customer grid without inadvertently triggering a next-page Ajax call. Previously, when you created an order from the Orders page and tried to filter the customer list, Magento did not filter the list, and displayed the next page of customer entries. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17870](https://github.com/magento/magento2/pull/17870)*. [GitHub-17789](https://github.com/magento/magento2/issues/17789)



### AdminGWS



<!-- MAGETWO-93990 -->* Admin user with permissions for 1 website should not be able to view the All Store Views scope on a product
change logic for restricted admin to show him All store view.

User story:
As an Admin user,
When I am an administrator of a single web-site and I edit a product which is assigned to several other web-sites, then "All Store Views" scope option is not available for me and product edit page is opened for the store view scope which I have access to.
So, that, I do not need to switch to my store view manually every-time when opening a product for editing.




<!-- MAGETWO-90765 -->* Administrators with restricted privileges can now edit and create CMS blocks as expected. Previously, Magento threw an  error like this wwhen an adminstrator tried to edit or create a block: `Warning: array_intersect(): Argument #1 is not an array in /var/www/html/magento2ee/app/code/Magento/AdminGws/Model/Models.php on line 1075 error_123.png`.￼


EE only





### Amazon Pay


### B2B

<!-- MAGETWO-94884 -->* B2B currency switcher causes duplicating of button

STEPS
Setup multiple currencies: MAGETWO-62277
Create an additional Website & Store & Store view
Open Admin > Stores > Configuration > Currency Setup.
Select several Allowed Currencies
Set different Default Currency for each store view
Open Stores > Currency Rates. Enter some values to recalculate prices
Create an order from Admin
Select a user
Switch currency from Order Currency dropdown
EXPECTED RESULT
Only one button Add products by SKU

ACTUAL RESULT
Second Add products by SKU button appears

<!-- MAGETWO-94820 -->* B2B If a secondary admin creates a custom shared catalog and that admin user is deleted, the catalog is deleted also.


ISSUE:
If an additional admin user creates a custom shared catalog and the user is later deleted, the catalog is deleted as well.

STEPS TO REPLICATE:

Install B2B
Create a new admin user
Login as new user and create a new custom shared catalog
Login as original admin user
Delete the additional admin user
Notice the custom catalog that user created is deleted also
EXPECTED RESULTS:
The custom shared catalog should not be deleted when the user that created it is deleted

ACTUAL RESULTS:
The custom shared catalog is deleted when the user that created it is deleted

<!-- MAGETWO-93050 -->* Edit Users for Company on front end in New Tab throws JSON error Partner thinks edit in new tab should be disabled

ISSUE:
Partner is reporting that when Editing Company users from the frontend > selecting the edit user in New tab is throwing a JSON error
He believes editing a User in a New tab should be disabled and not be allowed at all.

Preconditions
Enable B2b features in menu Stores->Configuration->General->B2B Features

STEPS TO REPLICATE:

Register Company Admin on storefront
Navigate to menu Customers->Companies and set status of created company to Active
Check in emails welcoming letter and setup password for company admin
Login as company admin on storefront
In My Account open Company Users tab
Right Click and select open in New Tab, on the Edit link of one of the Users
EXPECTED RESULTS:
New tab should not be allowed, and we should throw a meaningful error

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

<!-- MAGETWO-93145 -->* Magento now sorts bundle summaries according to the criteria set in the Admin. 


<!-- ENGCOM-1832 -->* The price range displayed for bundle products now shows only valid prices. Previously, Magento displayed special prices that had expired, even though the price in the customization and summary area was correct. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15535](https://github.com/magento/magento2/pull/15535)*. [GitHub-15457](https://github.com/magento/magento2/issues/15457)


<!-- MAGETWO-89006 -->* Merchants can now create a return merchandise authorization (RMA)  for a bundled product from a customer's account. 
Previously, Magento did not create the RMA, and the store returned an error.


### Catalog


<!-- MAGETWO-92036 -->* Magento now alerts you to an error when a merchant tries to save a product without completed required fields. 



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




<!-- ENGCOM-2670 -->* You can now save attributes for a configurable product. 

When adding a new product with an image, if a validation error occurs when trying to save the prodcut, the images gets removed from the "Images And Videos" section. If you fix the validation conflict and try to save the product again, an error will occur with "The file "/home/user/www/pub/media/tmp/catalog/product/o/r/pic.png" doesn't exist or not a file"



Save configurable product options after validation error #16597

I have a Magento Installation where I can't save attributes on a configurable product. (simple products work!).

Steps to reproduce
Add new product
Add image to product
Force a validation error by using an already used URL Key for the product
Expected result
Magento should remember the image that was added before validation occurred and save the product with the image.

Create product with image
Actual result
The file "/home/user/www/pub/media/tmp/catalog/product/o/r/pic.png" doesn't exist or not a file



Steps to reproduce
Add a configurable product
Change some attributes (tested with product images and country of manufacturer)
Press Save
Actual Result
The following error occurs:

`Warning: array_filter() expects parameter 1 to be array, string given in /var/www/dev.****.com/htdocs/web/vendor/magento/module-configurable-product/Controller/Adminhtml/Product/Initialization/Helper/Plugin/Configurable.php on line 145`




  *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [16597](https://github.com/magento/magento2/pull/16597)*. [GitHub-7372](https://github.com/magento/magento2/issues/7372), [GitHub-13177](https://github.com/magento/magento2/issues/13177)




<!-- ENGCOM-2675 -->* You can now add a product with a price of zero (0) to a wishlist. *Fix submitted by [sv3n](https://github.com/sreichel) in pull request [17395](https://github.com/magento/magento2/pull/17395)*. [GitHub-16479](https://github.com/magento/magento2/issues/16479)





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



<!-- ENGCOM-2758 -->*  You can now add a custom fieldset  to the Admin category editor without changing the position of  the General section (that is, the section that contains the **Enable category**, **Include in Menu**, and **Category Name** fields). Previously, Magento moved the General section to the last position of the form. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [17540](https://github.com/magento/magento2/pull/17540)*. [GitHub-15041](https://github.com/magento/magento2/issues/15041)




<!-- MAGETWO-94080 -->* Aditional Fix for "Catalog Products List" widget displaying on frontend



<!-- MAGETWO-94062 -->* Quantity Increments of selected simple within a Configurable Product does not work

STEPS TO REPLICATE:
1. Create Configurable Product with Children 
2. In one of the children Simple Products set "Minimum Qty Allowed in Shopping Cart" to "500" and also set "Qty Increments" to "500". 
2. Through front-end select a configuration that will end with your simple product. 
Add 400 to the cart and the following error is given "The fewest you may purchase is 500." this is 
correct and indicates "Minimum Qty Allowed in Shopping Cart" is working as expected. 
3. Clear Shopping Cart 
4. Add 550 of the selected child to the cart that has "Qty Increments" set to "500"

EXPECTED RESULTS:
An error message is given informing user that "Product can only be ordered in increments of 500"

ACTUAL RESULTS:
Product successfully adds to the cart

<!-- MAGETWO-93673 -->* Cannot change attribute set

ISSUE:
If some required attributes moved to another attribute group, then it is not possible to use this attribute set on Product Create Page

STEPS TO REPRODUCE:

Go to Admin > Stores > Attribute Set
Create new attribute set based on Default
Drag and Drop "category_ids" attribute from "Product Details" group to "Content" section (or to any other)
Save Attribute Set
Go to Products > Add Product
Try to change Attribute Set during creation of new product
ACTUAL RESULT:
Error: "A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later."
Spinner does not dissapear
EXPECTED RESULT:
You can change attribute set without errors. Attributes can be moved to any group



<!-- MAGETWO-92682 -->*

No condition in Catalog Staging MView triggers
When Magento indexes are configured to be run On Schedule, Magento MView creates INSERT/UPDATE/DELETE triggers. In the trigger script for UPDATE there is a condition to check if any of the values was really changed, and only then insert a record into changelog table of subscribed indexers. 
However, in Magento Commerce the catalog staging module overrides this functionality to detect entity_id by row_id, and in the generated code there are no conditions. 
Can you please check if a patch for this already exists? Same issue is in the latest 2.2.4




EE ONLY


<!-- MAGETWO-88641 -->* Magento now applies tier prices as expected after a customer logs into their shopping cart. [GitHub-14255](https://github.com/magento/magento2/issues/14255)

<!-- MAGETWO-84894 -->* Magento no longer switches from table to list view on the product page when you add a product from the wishlist to the shopping cart. 

<!-- MAGETWO-73443 -->*  Customers can now add a product to their shopping cart when their session has expired. Previosuly, Magento did not add the 
product, and hung indefinitely while trying to add the product. 





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

rest/all/V1/categories/:categoryID deletes category name

ask cloudvolks






### Cart and checkout

<!-- MAGETWO-93037 -->* Customers can no longer place orders for out-of-stock products. 


 <!-- ENGCOM-2743 -->* 

Fixed undefinded shipping method name issue 


Sometimes it is the case that setting both Carrier title and Method name for a shipping method is redundant and having only the first one set it totally enough. Sadly, in the case of leaving Method name field blank there is a small visual bug displayed in checkout summary box.



"- undefined" displayed in checkout summary when shipping method name is not set



   *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17526](https://github.com/magento/magento2/pull/17526)*. [GitHub-17492](https://github.com/magento/magento2/issues/17492)








 <!-- ENGCOM-2901 -->* Magento now displays the wishlist icon on the shopping cart page on mobile devices. Previously, Magento cut off the wishlist icon on this page when viewed on a mobile device. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [17877](https://github.com/magento/magento2/pull/17877)*. [GitHub-17851](https://github.com/magento/magento2/issues/17851)




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



<!-- MAGETWO-93038 -->* You can now see category changes on the storefront as expected after the changes have been saved. Previously, Magento did not display changes to product categories on the storefront until reindexing occurred even if **update on schedule** was set and the cache had been cleaned.





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

<!-- MAGETWO-93081 -->* Administrators with appropriate permissions can now change the status of a company  to **Rejected**. Previously, Magento did not save the change in status, and threw an error. 


<!-- MAGETWO-93050 -->*  Edit Users for Company on front end in New Tab throws JSON error Partner thinks edit in new tab should be disabled

ISSUE:
Partner is reporting that when Editing Company users from the frontend > selecting the edit user in New tab is throwing a JSON error
He believes editing a User in a New tab should be disabled and not be allowed at all.

Preconditions
Enable B2b features in menu Stores->Configuration->General->B2B Features

STEPS TO REPLICATE:

Register Company Admin on storefront
Navigate to menu Customers->Companies and set status of created company to Active
Check in emails welcoming letter and setup password for company admin
Login as company admin on storefront
In My Account open Company Users tab
Right Click and select open in New Tab, on the Edit link of one of the Users
EXPECTED RESULTS:
New tab should not be allowed, and we should throw a meaningful error

ACTUAL RESULTS:
New Tab opens and JSON error is thrown.







### Configurable products



<!-- ENGCOM-2671 -->* To decide whether a product with the same options is already present in the cart, magento makes a comparison with the string that represents the buyrequest in json format with those saved in the database. When a product is added by the Rest API the option code attribute encoded in the json is a number, whereas from the frontend context it is a string. In this case, this bufix forces the option attribute value in string, creating arrays that will later be converted into json


Convert to string $option->getValue, in order to be compared with other saved options in previous cart items




  *Fix submitted by [zamboten](https://github.com/zamboten) in pull request [15720](https://github.com/magento/magento2/pull/15720)*. [GitHub-15028](https://github.com/magento/magento2/issues/15028)


<!-- MAGETWO-77742 -->* Magento now displays a descriptive error message when you try to upload a file in an unsupported format. Previously, Magento displayed an error that did not relate to the specific upload problem. 

<!-- MAGETWO-75086 -->* Magento now displays the correct selected product options when you click  on  **View Details** for a  product with configurable options.  ￼Previously, Magento displayed the image for the parent product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)



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

<!-- MAGETWO-92831 -->* Currency conversion rate services now work as expected in the Admin. 



### EAV

 <!-- ENGCOM-2642 -->*  Incorrect return value from Product Attribute Repository

 COPY FROM 2.1.16 /ENGCOM-2707

  *Fix submitted by [julianvdrielen](https://github.com/julianvdrielen) in pull request [15691](https://github.com/magento/magento2/pull/15691)*. [GitHub-4803](https://github.com/magento/magento2/issues/4803)


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

<!-- MAGETWO-98990 -->* ?

<!-- MAGETWO-93939 -->* You can now clear the **Date of Birth** field in the customer edit page when accessed from the Admin. 


<!-- ENGCOM-2737 -->* Product image zoom now works as expected in stores running on Safari. *Fix submitted by [Danny Nimmo](https://github.com/dannynimmo) in pull request [17491](https://github.com/magento/magento2/pull/17491)*. [GitHub-17416](https://github.com/magento/magento2/issues/17416)


<!-- ENGCOM-2785 -->* Magento now displays the background of transparent product image watermarks correctly. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17013](https://github.com/magento/magento2/pull/17013)*. [GitHub-16929](https://github.com/magento/magento2/issues/16929)


<!-- ENGCOM-2855 -->* The WYSIWYG editor now displays the backgrounds of .PHG thumbnail images as expected. Previously, transparent background were displayed as black.  *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [16733](https://github.com/magento/magento2/pull/16733)*. [GitHub-14248](https://github.com/magento/magento2/issues/14248)


<!-- ENGCOM-2860 -->*  Magento no longer duplicates events during delete operations. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [17718](https://github.com/magento/magento2/pull/17718)*. [GitHub-17715](https://github.com/magento/magento2/issues/17715)


<!-- ENGCOM-2322 -->* Magento now correctly displays the Datepicker widget when a user scrolls a  page containing it. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16775](https://github.com/magento/magento2/pull/16775)*. [GitHub-7903](https://github.com/magento/magento2/issues/7903)






 <!-- ENGCOM-2628 -->* 
 Fixed "Shop By" button disabling broken on the search page
"Shop By" button disabling broken on the search page

The "Shop By" button becomes disabled once any additional filters are pointless (they would yield the same one product or no products at all). It works like that on category pages (e.g. "women/tops-women/jackets-women.html"), but it's broken on the search page.

The technical cause is the disabling overlay being positioned below the search results / products on the search page, which is way off the button which is positioned above the search results.

Steps to reproduce
click on the "Search" icon and search for "jacket";
resize the window to a mobile size;
click on "Shop By" and choose a filter with one product (e.g. "Category -> Gear");
Expected result
The button "Shop By" should become disabled.
Actual result
The button "Shop By" is still enabled.

Added the class "page-with-filter" in the catalogsearch_result_index.xml for fixing the issue.




  *Fix submitted by [Andrea Rivadossi](https://github.com/AndreaRivadossi) in pull request [15650](https://github.com/magento/magento2/pull/15650)*. [GitHub-13445](https://github.com/magento/magento2/issues/13445)


<!-- MAGETWO-83984-->*
MYSQL Message queue is fetching messages from new to old

EE only 






### Google Tag Manager



<!-- MAGETWO-87437 -->* 

Google Tag Manager dataLayer does not show information about Configurable products

after applying fixes, Google Tag manager shows info about configurable products

The dataLayer for Google Tag Manager only contains information about Simple products like SKU, Name and Price - however they are not available for Configurable products

Expected behavior: The expected behavior is that the product ID, product price, and product name are populated in the add to cart event of the data layer when we click the add to cart button.

Currently, everything is undefined.
Seems like this is an issue for configurable, grouped, and bundled products






### Import/export

<!-- MAGETWO-93223 -->* Magento now displays the correct for import in the **System** > Import History


Import history wrong execution time

Import time is incorrect in System > Import History

PRECONDITIONS:
Set timezone different from system timezone.
Stores > Configuration > General > Locale Options > Timezone

STEPS:

Import file with one product (System > Import)
Check the time of execution (System > Import History)
screenshot
EXPECTED RESULT:
Execution Time should be correct

ACTUAL RESULT:
Execution Time is not correct


### Infrastructure

 <!-- ENGCOM-2783 -->* Link logo in web setup wizard to back-end base URL
 Sidebar shortcut to admin dashboard (Magento logo on top left) has no link in web setup wizard

 Steps to reproduce
Admin dashboard>System>Web Setup Wizard
Click Magento logo on top left
No effect
No way to get back to admin dashboard
Expected result
Click Magento logo on top left>admin dashboard
Actual result
No effect as logo has no link like the other sidebars do

    *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17543](https://github.com/magento/magento2/pull/17543)*. [GitHub-13948](https://github.com/magento/magento2/issues/13948)





 <!-- ENGCOM-2872 -->* 
renamed variable on line 572 & 589, from $keepRation to $keepRatio.


The parameter $keepRation should be called $keepRatio

Steps to reproduce
Look at the resizeFile function on line 572 of the Magento\Cms\Model\Wysiwyg\Images\Storage class.

Expected result
The parameter $keepRation should be $keepRatio

Actual result
The parameter is called $keepRation



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
Navigate "Reports" > Products > Ordered. (Day should be greater than 12) datepicker should be from 1 to 31 Ex. 1/08/2018 - 31/08/2018


Actual result
grid is empty

Same issue if you set in store config locale English (Australia) And add datapicker to any attribute (ex. custom attribute) on frontend. Day should be greater than 12






### Logging

<!-- MAGETWO-93054 -->* Admin action logs now list changes to product quantity as expected. 






### Order management

<!-- MAGETWO-92144 -->* 
Shipment grid show wrong order status
STEPS TO REPLICATE: 1. Place any order 2. Create Invoice and Shipment (order status should be complete) 3. Go to Sales->Shipments 4. Add Order Status column to the grid 5. Check status for existing shipment
EXPECTED RESULTS: Order Status should be Closed ACTUAL RESULTS: Order status is Processing




### Payment methods



#### Braintree

<!-- MAGETWO-93299 -->* Magento no longer throws an error when you try to add a new shipping address to an order paid with using Braintree from the Admin. 

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





### Quote

<!-- MAGETWO-91332 -->* Customers can now request quotes as expected from a storefront running Magento on iOS 11.3.1.







### Reports

<!-- MAGETWO-93729 -->* The scope selector for reports now works as expected. Previously, when a merchant set the scope to **All Websites** , the generated report showed  sales from only a subset of websites.

<!-- MAGETWO-93345 -->* The `.csv` export of Coupon reports now shows the correct total for  selected coupons. Previously, the total line in the `.csv` file showed the totals for all coupons in the selected time period, rather than just the selected coupons.

<!-- MAGETWO-86650 -->* The `.csv` export of the Abandoned Cart report now contains information about all abandoned carts as expected. Previously, this `.csv` file contained only only the first 20 rows of the report. 




 <!-- ENGCOM-2724 -->* 

 Year-to-date dropdown in Stores>Configuration>General>Reports>Dashboard


Fix month dropdown on field Year-to-date in Stores>Configuration>General>Reports>Dashboard




 Expected result
Numerical list appears of numbers 01 to 12.
Actual result
Numerical list appears of following numbers: [01,03,03,05,05,07,07,09,09,10,10,11,11,12,12]

   *Fix submitted by [teddysie](https://github.com/teddysie) in pull request [17383](https://github.com/magento/magento2/pull/17383)*. [GitHub-17289](https://github.com/magento/magento2/issues/17289)


<!-- MAGETWO- 73585-->* The customer wishlist report page on the Admin now displays all expected products. 







### Review

 <!-- ENGCOM-2720-->* Fixed review list ajax if product not exist redirect to 404 page
 Steps to reproduce
Visit review/product/listAjax/id/{{non existent id}/
Expected result
I would expect a 404 not found


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

<!-- MAGETWO-94019 -->* The **Show/Hide** details button on the RMA page now works. 






### Sales


 <!-- ENGCOM-2623 -->* Magento now uses the block tool bar 


 Block totalbar not used in invoice create and credit memo create screens 

 In the following layout files the Magento\Sales\Block\Adminhtml\Order\Totalbar block is defined:

sales_order_creditmemo_new.xml
sales_order_creditmemo_updateqty.xml
sales_order_invoice_new.xml
sales_order_invoice_updateqty.xml
However up on investigation I found that this block doesn't do anything and seems to be deprecated. Even when it does render something there is no styling. All styling is in the file styles-old.less and styling can not be found in the style.less file of the Magento adminhtml theme.

Expected result
Totalbar block renders something.
Actual result
Block doesn't render anything.

 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [16656](https://github.com/magento/magento2/pull/16656)*. [GitHub-16653](https://github.com/magento/magento2/issues/16653)







<!-- MAGETWO-94291 -->* Magento now displays product price and shipping costs in the default currency that was configured for that  specific website for orders created from the Admin. Previously, when you have multi-site configuration with different default currencies for each website, the product and shipping prices shown while creating an admin order are incorrect.





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





<!-- MAGETWO-88858 -->* Minimum order amounts are no longer required when placing an order through the Admin.






### Sales rule


<!-- MAGETWO-93209 -->* You can now use wildcard values in coupon codes. 



### Search

 <!-- ENGCOM-2415 -->* JS files located outside the web/js directory

 Expected result
JS files to be inside web/js as per the dev docs.

 Some JS files are direct children of web rather than web/js. This does not follow instructions from the dev docs thus is confusing.

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

<!-- MAGETWO-86179 -->* Customers can now add a new address to an order during checkout of an order being shipped to multiple addresses. 



<!-- ENGCOM-2704 -->* Multishipping checkout now works as expected. Previously, Magento displayed the `Shipping address is not set` error message  when checking out an order with multiple addresses. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [16753](https://github.com/magento/magento2/pull/16753)*. [GitHub-16555](https://github.com/magento/magento2/issues/16555)


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

 <!-- ENGCOM-2837 -->* With JS minification enabled, the swagger-ui-bundle.js becomes corrupted

 Use '.min' in filenames of already minified js files in the Swagger module so they aren't getting minified again in production, fixes 

 The JS works fine when minification is disabled and the files redeployed.



   *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [17626](https://github.com/magento/magento2/pull/17626)*. [GitHub-16927](https://github.com/magento/magento2/issues/16927)







### Testing

 <!-- ENGCOM-2616 -->* The ProcessCronQueueObserverTest.php integration test now works correctly. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17191](https://github.com/magento/magento2/pull/17191)*. [GitHub-16243](https://github.com/magento/magento2/issues/16243)





### UI

<!-- ENGCOM-2812 -->* Update time12h javascript validation rule to be compatible with js minify #17652

UI validation rule for valid time am/pm doesn't work when js is minified

Steps to reproduce
Run SQL: update core_config_data set value = 1 where path = 'dev/js/minify_files'
bin/magento deploy:mode:set production
Run production compilation scripts
Try to save a ui component that validates against time12h
Expected result
The input field should validate against the time12h validation rule
Actual result
There is a javascript error that happens when the js is minified. The space in the validation rule is stripped.

  *Fix submitted by [Mark Shust](https://github.com/markoshust) in pull request [17652](https://github.com/magento/magento2/pull/17652)*. [GitHub-17648](https://github.com/magento/magento2/issues/17648)






<!-- ENGCOM-2834 -->* Message list component fix: the message type is always error when parameters specified
Component: Magento_Ui/js/model/messageList.js component.
The message type is always "error" when specifying the parameters property.

Steps to reproduce
Use message list component (Magento_Ui/js/model/messageList.js).
Add success message with parameters.

  *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17701](https://github.com/magento/magento2/pull/17701)*. [GitHub-17700](https://github.com/magento/magento2/issues/17700)


<!-- ENGCOM-2607 -->* Error with translation of confirmation modal buttons
Error with translation of confirmation modal buttons

Steps to reproduce
Add a product to cart
Open mincart and click on trash pictogram
Expected result
Confirmation modal with two butttons in french: "Annuler" and "OK"
Actual result
Confirmation modal with two butttons in english: "Cancel" and "OK"



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
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
