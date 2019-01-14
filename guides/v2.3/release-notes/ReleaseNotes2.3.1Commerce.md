---
group: release-notes
title: Magento Commerce 2.3.1 Release Notes
---

*Release notes published .*

We are pleased to present Magento Commerce 2.3.1. This release includes numerous functional fixes and enhancements.  

## Highlights

Magento Commerce 2.3.1 includes a wealth of new features as well as hundreds of enhancements and fixes to the core product. Look for the following highlights in this release:


### Merchant tool enhancements


* **PageBuilder** is a drag-and-drop visual content editing tool that lets merchants customize the appearance of their storefront without writing any HTML or CSS. PageBuilder Beta code will be available in 2018 Q4. Registered participants will be able to install PageBuilder Beta on Magento 2.3.0 Commerce code.  Watch this space for more information about participating in the PageBuilder Beta program plus installation instructions. 


### Improved developer experience



### Substantial security enhancements

* Over 30 security fixes to core Magento code


See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.3.0) have been ported to 2.2.7, 2.1.16, 1.14.4.0, and 1.9.4.0, as appropriate.


### Core bundled extension enhancements



### Other improvements



* Upgrade of Magento Functional Test Framework (MFTF) to 2.3.6. 




## Fixed issues

We've fixed hundreds of issues in the Magento 2.3.1 core code. 


### Installation, upgrade, deployment


<!--- ENGCOM-3291-->* 

The undocumented id_prefix option for the cache frontend is used to prefix cache keys. If it is not set, Magento uses the first 12 bits of the md5 hash of the absolute path to Magentos app/etc directory. But if this is not exactly the same on all web servers, cache invalidation does not work.

To prevent this issue, the value shall be set on installation, so that the fall back on the fly does not happen anymore. Optionally, the value can be specified explicitly.



*Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request [18641](https://github.com/magento/magento2/pull/18641)*. [GitHub-15828](https://github.com/magento/magento2/issues/15828)


<!--- ENGCOM-3059-->* 

The ./bin/magento config:show command fails with a fatal error after running ./bin/magento app:config:dump



 ./bin/magento config:show fails with a fatal error 




*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18295](https://github.com/magento/magento2/pull/18295)*. [GitHub-17582](https://github.com/magento/magento2/issues/17582)



<!--- ENGCOM-3280-->* 

If Admin Users assigned a Backup module Role Resource, Still was not able to access
Backups controller. Now its fixed.

*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [18816](https://github.com/magento/magento2/pull/18816)*. [GitHub-18150](https://github.com/magento/magento2/issues/18150)


<!--- ENGCOM-3160-->* 

Updates getHostUrl() method to reference HTTP_HOST rather than SERVER_PORT.

When Magento runs using the sandwich hosting set up (nginx-Varnish-nginx), and the backend nginx run on a not standard port (80 nor 443), the base URL is detected wrong in pub/errors/processor.hp

Steps to reproduce
Open any media resource that does not exist and is not allowed in var/resource_config.json
Expected result
Magento's 404 page should be displayed in the browser with a link to configured skin CSS.
Base in the HTML code should be generated based on the requested host





*Fix submitted by [Logan Stellway](https://github.com/loganstellway) in pull request [18393](https://github.com/magento/magento2/pull/18393)*. [GitHub-18131](https://github.com/magento/magento2/issues/18131)



<!--- MAGETWO-96107-->* Magento no longer displays an extraneous blank option in the country dropdown menu. 

<!--- MAGETWO-96428-->* The `bin/magento app:config:dump` command now disables all input fields as expected. 


<!--- MAGETWO-91764-->* 



### AdminGWS

<!--- MAGETWO-91617-->* Magento now updates the reports table as expected when a new administrator with restricted privileges logs in and selects **Report** > **Products** > **Ordered**. Previously, Magento did not generate this report, and logged an error in `var/log/system.log`. 






<!--- MAGETWO-95828-->* 

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






<!--- MAGETWO-91688-->* Administrators with access to only  CMS blocks can now successfully log in. Previously, Magento threw an error, and the user could not log in.




### Analytics

<!--- ENGCOM-3263 -->* 

Unable to disable without providing Industry value 

Steps to reproduce
Goto Backend > Stores > Configuration > General > Advanced Reporting
Save config (while Industry is not provided)
Expected result
One should be able to save without providing the Industry value
Actual result
Can't save. A message appears: "Please select a vertical."


*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18782](https://github.com/magento/magento2/pull/18782)*. [GitHub-15259](https://github.com/magento/magento2/issues/15259)



### Authorization


<!--- MAGETWO-95536-->* You can now successfully save a role from the Admin. Previously, when you saved a role from the Admin, Magento removed all  users from the role (no matter which checkbox was checked), and displayed this message, `This user has no tokens`.


### Backend

<!--- ENGCOM-3196 -->* 

solved calender icon issue in advance pricing in adminpanel

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18638](https://github.com/magento/magento2/pull/18638)*. [GitHub-18581](https://github.com/magento/magento2/issues/18581)



### Bundle

<!--- ENGCOM-3361 -->* 

Bundle Special Prices not correctly rounded

When adding a Special Price to a bundle like 78,9473% (4 decimals), it's saved ok in the database.
If you load the same bundle and save again, it's changed to 78.95% (2 decimals)




*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [18987](https://github.com/magento/magento2/pull/18987)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)





<!--- ENGCOM-3391 -->* 

API: Bundle Product Option Repository Delete method removes incorrect option


API: Bundle Product Option Repository Delete method removes incorrect option

Expected result (*)
Option with OptionId specified in request removed
Actual result (*)
First option always removed, regardless of optionId specified

*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19027](https://github.com/magento/magento2/pull/19027)*. [GitHub-18979](https://github.com/magento/magento2/issues/18979)




<!--- ENGCOM-3161 -->* 

On editing a Bundle product from shopping cart the user defined quantities of the options are overwritten

Install Magento CE 2.0.6
Create a Bundle product with at least one option of type radio and enable user defined quantity
Add more then one product to the option and enable user defined quantity
Open the Bundle product on frontend
Change the quantity of an option
Add the Bundle product to the shopping cart
Go to the shopping cart
Press the "Edit" button in order to edit the Bundle product
Expected result
The quantity of the option should be the user defined one
Actual result
The quantity of the option is not the user defined one. It is the selections' default quantity.

*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18520](https://github.com/magento/magento2/pull/18520)*. [GitHub-4942](https://github.com/magento/magento2/issues/4942)




<!--- MAGETWO-95813-->* 


Only two bundle options are added to the cart

Bundle Product P contains several checkbox options with 3 values each. In original reported case it's a native Sample Data product Sprite Yoga Companion Kit with changed 1st & 3rd options from radio to checkbox, and changed Default Qty of 3rd option to 2 for each value. Please find a video attached.
STEPS
Open P on Storefront
Customize it due to screenshot attached
Click Add to Cart button
View Mini Cart


ACTUAL RESULT
 Mini Cart misses every 3rd value from every checkbox option

EXPECTED RESULT
 Mini Cart contains all selected options





<!--- MAGETWO-58212-->* You can now successfully change the attribute set for a bundle product. Previously, the edit bundle page hung, and Magento threw this error, `Uncaught TypeError: Cannot read property 'length' of undefined`. 

https://github.com/magento/magento2/issues/5999


<!--- MAGETWO-91628-->* 

<!--- MAGETWO-69959-->* 

<!--- MAGETWO-91679-->* 



### B2B

<!--- MAGETWO-94444-->* 

Order total value is limited by 8 round digits

The DECIMAL(12,4) means that whole size of number is 12 digits, 4 of them are fractional part. This means that round part of order total is limited by 8 digits and cannot be greater than 99 999 999.9999 equivalent in store currency, or as of current currency rates the total value amount equivalent is limited:

for TRY - 13M USD
for JPY - 900 000 USD
for KRW (South Korean Won) - 93 000 USD equivalent
 Actual:

B2B merchants that trade in low-rate currencies or may have large total amount in any currency may have no ability to accept orders and create quotes with large total amounts. (It's a low priority issue for retail as total amounts even in KWR are usually lower than the limit).
 Expected:

B2B merchants have sane limits on order total in low rate currencies. Recommended sizing for decimals is 20,4.





<!--- MAGETWO-95822-->*  Layered navigation now displays only the options that are available in the shared catalog. 


<!--- MAGETWO-96407-->* You can now upload an attachment to a customizable option and add the product plus attachment to a requisition list. Previously,  you could upload and add the product to a requisition list, but the attachments were lost.  



 
<!--- MAGETWO-96413-->* 

Restricted Admin User Backend Order Creation Issue With B2B


Test case:

Create second website W with a store
Create admin user role R with restricted scope (W website only) & all resources
Create admin user U with the role R
Login as U to the admin and create a new order for a new user


Actual result:

Add Product buttons block is not displayed.
After address fields are filled and click "Get shipping methods and rates" the exception is returned by Ajax:

After Magento_NegotiableQuote functionality is disabled, everything works:






<!--- MAGETWO-91614-->* You can now filter customers by status. Previously, Magento threw a SQL ERROR when you clicked on **Apply Filters** after setting the filter to status. 






<!--- MAGETWO-94887-->* 

B2B currency switcher causes duplicating of button

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



<!--- MAGETWO-91754-->* Magento now loads the company profile, roles, and permissions sections of a company account when **Enable Reward Points Functionality** is set to **no** in the Admin, and you flush cache storage. 

<!--- MAGETWO-94866-->* Magento now displays products that merchants have added to the public catalog through **Product** > **Edit page** > **Shared Catalog**. Previously, these items appeared if added  through **Catalog** > **Shared Catalog**, but not through **Product** > **Edit page** > **Shared Catalog**. 

<!--- MAGETWO-91661-->* Menus now close as expected from the Quick Order page in mobile view.

<!--- MAGETWO-96598-->* 

<!--- MAGETWO-97315-->* 

<!--- MAGETWO-93769-->* 

<!--- MAGETWO-97314-->* 

<!--- MAGETWO-97131-->* 


### CAPTCHA

<!--- MAGETWO-94052-->* CAPTCHA now appears as expected in the Log in popup window.


### Cart and checkout

<!--- ENGCOM-3194 -->*

Fixed issue of product with a special price of 0.00, this is not shown on the frontend. Not in the product listings and also not on the product detail page.

Product Special Price is set to 0 then its not visible on product listing and Product View page, but when
we add product in cart, its price added to 0 in cart. In this pull request i have fixed this issue, now
Special price is displaying 0 as well. 



*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [18631](https://github.com/magento/magento2/pull/18631)*. [GitHub-18268](https://github.com/magento/magento2/issues/18268)


<!--- ENGCOM-3237 -->*

This fix allows to add custom shipping method with underscore in custom carrier code.



*Fix submitted by [Jakub](https://github.com/idziakjakub) in pull request [18689](https://github.com/magento/magento2/pull/18689)*. [GitHub-5021](https://github.com/magento/magento2/issues/5021)


<!--- ENGCOM-3073 -->*

Fix throwing error by checkout error processor model

Infinite loading indicator when server returned error

Expected result
Loading indicator should be hidden
No shipping methods should be available
Actual result
Infinite scrolling in "Shipping methods" appeared



*Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [18331](https://github.com/magento/magento2/pull/18331)*. [GitHub-18330](https://github.com/magento/magento2/issues/18330)


<!--- ENGCOM-3153 -->*

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


<!--- ENGCOM-3189 -->*

Empty cart button does not work

Click the button "Clear shopping Cart"
Expected result (*)
I expect the shopping cart to be cleared
Actual result (*)
The page reloads, the shopping cart is not cleared

*Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18596](https://github.com/magento/magento2/pull/18596)*. [GitHub-18475](https://github.com/magento/magento2/issues/18475)

*Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18596](https://github.com/magento/magento2/pull/18596)*. [GitHub-18589](https://github.com/magento/magento2/issues/18589)


<!--- ENGCOM-2987 -->*

Add checkout_cart_product_add_before event

Even though there is a checkout_cart_product_add_after event. Now we're stuck with controller_action_predispatch_checkout_cart_add which of course does not catch all cases since there are multiple (custom) ways to add a product to the cart.

Best option now is to create a plugin, but an event would be nicer.

Expected result
Events checkout_cart_product_add_before and checkout_cart_product_add_after are dispatched.
Actual result
Only checkout_cart_product_add_after event is dispatched.

*Fix submitted by [Leandro Rosa](https://github.com/leandro-rosa) in pull request [18080](https://github.com/magento/magento2/pull/18080)*. [GitHub-17830](https://github.com/magento/magento2/issues/17830)




<!--- MAGETWO-95935-->* Customer address attribute validation during checkout now permits spaces. 

<!--- MAGETWO-71344-->* The shopping cart now reflects any product updates made from the mini shopping cart. Previously, changes made to product quantity in the minicart were not propagated to the shopping cart, leading to different subtotals.  

<!--- MAGETWO-96812-->* Clicking multiple times on the minicart icon no longer logs out the current customer. Previously, when a logged-in customer added a product to the cart and then clicked the shopping cart icon multiple times, Magento displayed an empty shopping cart and logged out the customer. 

<!--- MAGETWO-95068-->* Information previously entered by a customer during check out (such as shipping address) now persists as expected after the customer updates their shopping cart. Previously, when a customer updated their shopping cart, all information previously entered during check out (such as shipping address) was deleted. 





<!--- MAGETWO-96599-->* 

Backorder customer notification is not shown in Magento 2.2.0 / 2.1.9 on One page checkout

Steps to reproduce

Go into stores > configuration > invetory : Set Display out of stock products: Yes, select Manage Stock: Yes. Set Backorders; Allow Qty below 0 and notify customer.
Create new simple product.
Set stock status, in Stock.
Set quantity below 0. In my case, this was done by customer buying a unit when it was at 0.
Select advanced inventory, check so that the Manage Stock is Yes, qty below 0 and for Backorders: Allow Qty Below 0 and Notify Customer.
Save product.
Go to storefront and add the product to cart.
Select Proceed to Checkout, in the minicart.
Expected result
Show message about "Backorder".

Actual result
No message is shown.

https://github.com/magento/magento2/issues/11708





<!--- MAGETWO-95820-->* Magento now displays orders placed by a new customer before they registered  under the customer's name. Previously, if a customer placed an order while logged in as a guest, and then registered for a new account, Magento associated the order in the Admin with the guest account instead of the customer's real name. 

<!--- MAGETWO-95848-->* Customers can now configure options for a configurable product after adding it to their shopping cart.  Previously, under these circumstances, Magento threw a fatal error.



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







<!--- MAGETWO-95739-->* Magento now validates zip codes for new addresses as expected when the **My billing and shipping address are the same** option is unchecked. 

<!--- MAGETWO-94427-->* Magento now updates the minicart as expected when an administrator updates the product from the Admin. Previously, if a product that had been added to the shopping cart was subsequently disabled from the Admin,  the product was still displayed in the cart.




<!--- MAGETWO-91658-->* 

Wrong Checkout Totals Sort Order in cart

STEPS TO REPLICATE:

Go to backend store Configuration > Sales > Checkout Totals Sort Order,
Check default sort order Sub Total > Discount > Shipping > Tax > Grand Total.
Set Shipping = 29
Create product
Create Cart rice Rule
Go to Frontend
Add product to cart
Apply Rule
Check Totals Sort Order


EXPECTED RESULTS:

Sort order should be as in a configuration


ACTUAL RESULTS:

Sub Total > Shipping > Discount > Tax > Grand Total


<!--- MAGETWO-91530-->* Magento now displays helpful error messages when an order paid for with Authorize.net fails. 





<!--- MAGETWO-71375-->* 

Zero Subtotal Orders have incorrect status

Merchant has set up Zero Subtotal Check. The New Order Status is set to Processing.

They are using a coupon to discount a product 100%

The status of the order should be processing, but appears as pending

EXPECTED RESULTS
Order status should be processing

ACTUAL RESULTS
Order status is pending




<!--- MAGETWO-91730-->* Expired gift cards are no longer applied to a customer's account. Previously, if a gift card applied to a customer account expired, Magento could not complete the checkout process. 




<!--- MAGETWO-91517-->* 

Cancel and Return link removes billing and shipping address


For orders using PayPal Website Payments Pro Hosted Solution, after clicking the Cancel and Return link, the billing /shipping address is removed and placing an order returns an error message:


EXPECTED RESULTS:
Billing and shipping address information should remain when redirected back to checkout after clicking the cancel and return link.



ACTUAL RESULTS:
Billing and shipping address information deleted when redirected back to checkout after clicking the cancel and return link.




<!--- MAGETWO-91596-->* You can now update the quantity of grouped product  if the quantity field was left empty when initially added to an Admin order by SKU. Previously, under these circumstances, you could not uodate the quantity. 

<!--- MAGETWO-91733-->* 

<!--- MAGETWO-91636-->* 


#### Cart Price rules

<!--- MAGETWO-96379 -->* 

Cart Price Rule grid count and pagination is wrong

ACTUAL RESULT
 Grid counters values do not match the rules listed in the grid

"X records found" does not match the amount or rules listed (12 rules)
Pagination is off, it shows that there are 2 pages. When clicking next page, the page is empty
EXPECTED RESULT
 Grid counters values do match the amount of rules listed in the grid

"X records found" matches the amount or rules listed (12 rules)
Pagination matches the amount or rules listed in the grid. Only enabled if there are more than 20 records.

<!--- MAGETWO-91784-->* 


### Catalog

<!--- ENGCOM-3516 -->* 

Create a product attribute, for example Size with several values (S, M and L). This attribute must have property "use in product listing" set to Yes.
Create a product that uses this attribute with a configuration setting. Define different quantities for each values. Set this product as new for the current month.
Create a block with a widget for new products (choose the grid template) and add this block at any page.
On this page click on Add to cart (from a computer, not smartphone) for this new product.
Expected result
User should see the product page with the message "You need to choose options for your item."

Actual result
User is redirected to the cart page and the product is not added to the cart.


*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [19322](https://github.com/magento/magento2/pull/19322)*. [GitHub-19315](https://github.com/magento/magento2/issues/19315)


<!--- ENGCOM-3435 -->* 

Expected result
Should be handling the exception and ideally showing 404 page.
Actual result
It is throwing Fatal error:

Fatal error: Uncaught Error: Cannot call abstract method Magento\Framework\App\ActionInterface::execute()


Fatal-error-Uncaught-Error-Cannot-call-abstract-method-Magento-…Framework-App-ActionInterface-execute add execute method to prevent fatal error when go to catalog/product/compare/

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [18987](https://github.com/magento/magento2/pull/18987)*. [GitHub-17638](https://github.com/magento/magento2/issues/17638)



<!--- ENGCOM-3450 -->* 

Fixed tierprice discount not calculated correctly if has specialprice 

Expected result 
The tierprice discount calculated by specialprice and show all the tierprice
Actual result 
The price and the "Discount" value on frontend for qty=2 is not visible
The tierprice percent for qty=300 is 1% instead of 25% on frontend


*Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [19179](https://github.com/magento/magento2/pull/19179)*. [GitHub-18652](https://github.com/magento/magento2/issues/18652)


<!--- ENGCOM-3421-->* 

Fix Notice and Exception while adding image to product programmatically 

Expected result
Image gets added

Actual result
Exception gets thrown:




*Fix submitted by [Yevhenii Dumskyi](https://github.com/progreg) in pull request [18952](https://github.com/magento/magento2/pull/18952)*. [GitHub-6803](https://github.com/magento/magento2/issues/6803)


<!--- ENGCOM-3365-->* 

Fix translations of category design theme not being applied

Currently if you enable custom design theme for category the translations of selected theme are not used. This commit fixes the problem.

Translations done within a theme that's enabled through a category Design change aren't used

When having an additional theme, which is activated for a certain category, and with certain translations, they are not picked up by Magento. Magento seems to only collect the translation files for the active main theme, which results in the inability to use different translations within the additional theme.



*Fix submitted by [Cezary Zeglen](https://github.com/cezary-zeglen) in pull request [18998](https://github.com/magento/magento2/pull/18998)*. [GitHub-17625](https://github.com/magento/magento2/issues/17625)


<!--- ENGCOM-3292-->* 

catalog:images:resize total images count calculates incorrectly

Assumption from issue: >>"catalog:images:resize fails to process all images -> Possible underlying Magento/Framework/DB/Query/Generator issue".
However, there is a problem with total images count calculation select 

 catalog:images:resize fails to process all images -> Possible underlying Magento/Framework/DB/Query/Generator issue


*Fix submitted by [Vladyslav Podorozhnyi](https://github.com/vpodorozh) in pull request [18807](https://github.com/magento/magento2/pull/18807)*. [GitHub-18387](https://github.com/magento/magento2/issues/18387)



<!--- ENGCOM-3184-->* 

Special price date from issue resolve

Fixed issue of 2.2.6 "Special price date from" Failed to parse time string

In magento 2.2.6 when Account locale set to it_IT and admin user create one new product and set it's special price then it will gives error while saving the product that failed to parse time string. In this Pull Request I have fixed this issue. By modifing date format before it's parse to Date object.

Expected result
The product has been saved
Actual result
`DateTime::__construct(): Failed to parse time string (20/09/2018) at position 0 (2): Unexpected character`

*Fix submitted by [Hiren Pandya](https://github.com/hiren0241) in pull request [18578](https://github.com/magento/magento2/pull/18578)*. [GitHub-18158](https://github.com/magento/magento2/issues/18158)



<!--- ENGCOM-3242-->* 

Fix for Issue #4468 "Unable to insert multiple catalog product list widgets (with pager) in CMS page"

Unable to insert multiple catalog product list widgets in CMS page




*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [18714](https://github.com/magento/magento2/pull/18714)*. [GitHub-4468](https://github.com/magento/magento2/issues/4468)


<!--- ENGCOM-3202-->* 

Always set the entity_type_id for updating product attributes because the route contains the specification products/attributes

REST API /V1/products/attributes does not update all properties

Using Magento 2.1.7 with the REST API - POST /V1/products/attributes - I can add a new attribute and configure it with settings such as is_filterable.

This is all fine but if I then want to change this setting I can't. I have tried with POST and with PUT /V1/products/attributes/{attributeCode}. The command works as in it will update, for instance, the frontend label in the eav_attribute table, but it does not seem to have any effect on values in the catalog_eav_attribute table.

*Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [18622](https://github.com/magento/magento2/pull/18622)*. [GitHub-10205](https://github.com/magento/magento2/issues/10205)


<!--- ENGCOM-2998-->* 
Adding trimming sku value function to sku backend model

I have added function to sku backend model which trimms value from whitespace.





*Fix submitted by [Bartosz Kubicki](https://github.com/bartoszkubicki) in pull request [18019](https://github.com/magento/magento2/pull/18019)*. [GitHub-16572](https://github.com/magento/magento2/issues/16572)

*Fix submitted by [Bartosz Kubicki](https://github.com/bartoszkubicki) in pull request [18019](https://github.com/magento/magento2/pull/18019)*. [GitHub-12300](https://github.com/magento/magento2/issues/12300)



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



<!--- ENGCOM-3078-->* 

[Forwardport] Fixes saving product in single-store mode if website_id <> 1 
This PR fixes the saving product in a single store mode, where the default website was removed, and a new one it is used instead.

No such entity error when saving product in single-store mode if website_id <> 1


*Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [18210](https://github.com/magento/magento2/pull/18210)*. [GitHub-13405](https://github.com/magento/magento2/issues/13405)



<!--- ENGCOM-3142-->* 

Fix table rate failing for zip+4 address

Currently when a customer uses an American ZIP+4 postcode, the table rate shipping method fails to return a quote.

*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18499](https://github.com/magento/magento2/pull/18499)*. [GitHub-17770](https://github.com/magento/magento2/issues/17770)



<!--- ENGCOM-3129-->* 

Added Filter Support for Yes/No #18434	

Currently it is only possible to set an attribute to is_filterable to attributes with catalog input type Dropdown, Multiple Select and Price. But in some cases you want a Yes/No (boolean) attribute to be filterable.

«Yes/No» attributes should be allowed in the Layered Navigation





*Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [18434](https://github.com/magento/magento2/pull/18434)*. [GitHub-3283](https://github.com/magento/magento2/issues/3283)


<!--- ENGCOM-3047-->* 

Cast products "getStoreId()" to int, closes

Cast getStoreId() for products to int (like for categories).


getStoreId() returns a string for products, but int for categories that causes a fatal error in extensions code.

*Fix submitted by [sv3n](https://github.com/sreichel) in pull request [18303](https://github.com/magento/magento2/pull/18303)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)


<!--- ENGCOM-3055-->* 

type casted $qty to float in \Magento\Catalog\Model\Product::setQty()


PHPDocs blocks say getQty() should return float/int, but in most cases it returns a string. This is no problem until I use strict type declaration for my own extensions and trust in annotations.

\Magento\Catalog\Model\Product::getQty() should return float/double now, as mentioned in it's Doc-block

*Fix submitted by [Jay Ghosh](https://github.com/jayankaghosh) in pull request [18149](https://github.com/magento/magento2/pull/18149)*. [GitHub-18094](https://github.com/magento/magento2/issues/18094)




<!--- ENGCOM-3035-->* 

Make sure all linked products (related, upsells, crosss ells) show up in the backend grids and in the correct order

Steps to reproduce
Update products related products using csv and update via magento default import.
Flush the cache storage and reindexing .
Check the frontend and backend
Expected result
Updated related products should come in the frontend of product page and backend of product edit page
Actual result
The update related products are showing in the frontend .But only 2 related products are showing in the backend

and

I imported four related products for a product. The related products are showing in the frontend.But only two related products are showing in the backend. I have run index and cleared cache. But the issue is still exist.

*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18207](https://github.com/magento/magento2/pull/18207)*. [GitHub-13720](https://github.com/magento/magento2/issues/13720)




<!--- ENGCOM-3034-->* 

Fix module uninstall shell command and composer removal w/out regression 

There is a discrepancy between composer.lock and composer.json when removing a module via bin/magento module:uninstall command. Also, the output is wrong and the guide says it should do otherwise.
The removal option in the code solved the previous issue #5797 , but caused the new issue. The new change solves both.

Module uninstall does not work with composer


*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18205](https://github.com/magento/magento2/pull/18205)*. [GitHub-17780](https://github.com/magento/magento2/issues/17780)

<!--- ENGCOM-3061-->* 

Cast products getStoreId() to int

Inconsistent return type for getStoreId()

getStoreId() returns a string for products, but int for categories that causes a fatal error in extensions code.




*Fix submitted by [sv3n](https://github.com/sreichel) in pull request [18303](https://github.com/magento/magento2/pull/18303)*. [GitHub-18079](https://github.com/magento/magento2/issues/18079)


<!--- ENGCOM-3078-->* 

This PR fixes the saving product in a single store mode, where the default website was removed, and a new one it is used instead.

After upgrading to Magento 2.2.1 I'm no longer able to save products while the website is in single store mode. The website has previously had multiple store views.
I've been able to replicate the issue on a clean install of Magento 2.2.2
The problem is likely related to the fact that website_id != 1


*Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [18210](https://github.com/magento/magento2/pull/18210)*. [GitHub-13405](https://github.com/magento/magento2/issues/13405)



<!--- MAGETWO-96908-->* 

Wrong attribute value in flat table

Attribute value was not updated in catalog_product_flat_2 table.

STEPS TO REPRODUCE:

Enable catalog and category flat in Configuration->Catalog->Catalog->Storefront
Create product attribute 'brand' (dropdown) with two options: option1 and option2 (Used in Product Listing = Yes)
Add this attribute to Default attribute set
Create a second storeview
Create new product or update existed: brand = option1
Do a full reindex and check the product in flat table catalog_product_flat1: brand value = option1 (id = 15 in my case)
Swich to new store view and change option to option2
Do a full reindex and check catalog_product_flat2

Expected result: brand value = 'option2'

Actual result: brand value is still 'option1' (but id was updated to a proper one, in my case = 16). Also on storefront ,I see an updated attribute value for a new store view (option2)






<!--- MAGETWO-91542-->* 

Product belongs to categories with and without event does not shown




<!--- MAGETWO-95802-->* Dates in the Admin are now formatted correctly for French locales (dd/mm/yyyy).


Commerce only



<!--- MAGETWO-94556-->* 

Undefined variables during product save

The issue reporting template does not provide guides for missing keys specifically. I have attempted to fit in the missing isset() checks I have noticed

TEPS TO REPRODUCE
1. Create Configurable Product
2. Before saving the parent product, make sure that at least one configuration has a SKU that is longer than allowed.
3. Save and the validation will complain about the length exceeding 64 characters
4. Correct the SKU and make sure the length is shorter than the limit of 64 characters
5. Save the product. The error is now reproduced.


EXPECTED RESULT

Expected product to be created and indexed properly.



https://github.com/magento/magento2/issues/17436




<!--- MAGETWO-95314-->* Magento no longer throws an error when you use REST to update a product's special price if the product previously had a scheduled update to its special price or had a special price set from the Admin. 


EE ONLY -- Staging



<!--- MAGETWO-95428-->* 

Recently viewed block shows the product which is currenly open

STEPS TO REPLICATE:
1. Open admin 
2. Create "Recently viewed" widget and populate it to display on the PDP 
3. Open storefront 
4. Open any product page 
5. Scroll page down to the "Recently viewed" section

EXPECTED RESULTS:
The widget should not contain current product

ACTUAL RESULTS:
"Recently viewed" section contains current product



<!--- MAGETWO-91837-->* You can now use REST to update a product's media gallery. 



<!--- MAGETWO-95818-->* 

Default value for category URL path does not save	

For a multistore, if a category's url key is changed (with 'Use Default Value' and 'Create a Permanent Redirect' boxes are unchecked) and saved, then category's url key will not change back to default url key when saved with 'Use Default Value' box checked and 'Create a Permanent Redirect' box unchecked.


EXPECTED RESULTS:
Category's url key changes back to the default 'bags' for store_id = 1.

ACTUAL RESULTS:
Category's url key remains 'bags-test' for store_id = 1.




<!--- MAGETWO-95826-->* Magnifier now correctly handles zoomed sections of images when the image width/height ratio has a `~2x` difference. Previously, these sections were distorted. 



<!--- MAGETWO-61478-->* Magento now retains the 

Number of Products displayed per page not retained when visiting a different category

EXPECTED RESULTS:
When visiting multiple categories, once the number of displayed per page on one category has been changed, it should be retained from one category to another

ACTUAL RESULTS:
When visiting multiple categories, once the number of displayed per page on one category has been changed, the next category will display the default number of products per page



<!--- MAGETWO-95753-->* You can now save products with at least one tier price. 

<!--- MAGETWO-66442-->* Changes to product images made under the All Stores scope now affect product images at the store-view level.

<!--- MAGETWO-96290-->* You can now use REST to update category positions. 




<!--- MAGETWO-91609-->* 

Problems with operator more/less in the "catalog Products List" widget

*ISSUE*
Merchant provided information showing when configuring the catalog products list widget for the cms block, the operator when chosen for "greater than" adds an html symbol instead of the greater than > symbol.

Once it is created and you view the code it shows `>` instead of >. When you look at the image block instead of the code and hover your mouse over the image it will show the code and it shows the actual > symbol instead of the html symbol `>`.




<!--- MAGETWO-70303-->* 

Categories that are set to anchor **Yes** and that have disabled subcategories no longer display  products from those disabled subcategories.


https://github.com/magento/magento2/issues/9002


<!--- MAGETWO-91633-->* 



### CatalogInventory

<!--- ENGCOM-3138-->* 

Added validation on maximum quantity allowed in shopping cart



*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [18481](https://github.com/magento/magento2/pull/18481)*. [GitHub-18477](https://github.com/magento/magento2/issues/18477)

<!--- MAGETWO-96364-->* Sorting configurable products by price now works correctly when the **Display Out of Stock Products** setting is enabled.



### Catalog Rule


<!--- ENGCOM-3131-->*

Exception Error in Catalog Price Rule while Backend language is not English 



*Fix submitted by [Martin](https://github.com/Mardl) in pull request [18419](https://github.com/magento/magento2/pull/18419)*. [GitHub-12399](https://github.com/magento/magento2/issues/12399)

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


<!--- ENGCOM-3438-->*

Saving Product does not update URL rewrite

Saving product attribute URL Path value causes broken Product URL Rewrites regeneration after changing product URL key.

If there is a product with set URL Path attribute value, product URL Rewrites can't be re-generated clearly after changing product URL Key from Admin panel.





*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19170](https://github.com/magento/magento2/pull/19170)*. [GitHub-18532](https://github.com/magento/magento2/issues/18532)

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19170](https://github.com/magento/magento2/pull/19170)*. [GitHub-5929](https://github.com/magento/magento2/issues/5929)


<!--- MAGETWO-93425-->* 

Permanent Redirect for old URL missing via API or no documentation



https://github.com/magento/magento2/issues/16789


ASK KEVIN


<!--- MAGETWO-91649-->* Magento no longer ignores the store-level `url_key` of child categories when rewriting URLs process for global scope.


https://github.com/magento/magento2/issues/13513


<!--- MAGETWO-91532-->* 

<!--- MAGETWO-91495-->* 


### Cleanup and simple code refactoring

<!--- ENGCOM-3449-->*

Fix Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection method addExpressionFieldToSelect result gets overwritten by addFieldToSelect.

I changed the behaviour of addExpressionFieldToSelect method to not modify columns and instead insert expression into `_fieldsToSelect` private variable (same as addFieldToSelect does).




*Fix submitted by [Torben Höhn](https://github.com/torhoehn) in pull request [19180](https://github.com/magento/magento2/pull/19180)*. [GitHub-17635](https://github.com/magento/magento2/issues/17635)


<!--- ENGCOM-3240-->*

Correct a typo in the reference to ISO language codes in  app/code/Magento/Deploy/Console/DeployStaticOptions.php



*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18733](https://github.com/magento/magento2/pull/18733)*. [GitHub-2686](https://github.com/magento/magento2/issues/2686)






### CMS content

<!--- MAGETWO-57337-->* 

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

https://github.com/magento/magento2/issues/5077

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



<!--- MAGETWO-91559-->* 

Static blocks with same ID appear in place of correct block

Previously, when multiple blocks were created with the same ID, and one block was placed on a page, the other blocks with the ID  randomly appeared.




<!--- MAGETWO-94429-->* You can now delete from the media gallery browser any files and folders that are symlinked in `pub/media`. Previously, the Magento left the image in the media gallery but gave you no feedback in the product interface. 


### Configurable products

<!--- ENGCOM-3256-->* 

Convert string to DateTime object for languages other than English

Converting from string into PHP DateTime object is failing for locales other than en_US. This PR aims to solve this problem.


DateTime class can parse a given string if it is in English, but it fails for other languages. To solve this issue, we have used IntlDateFormatter class for parsing string dates.


*Fix submitted by [Thiago](https://github.com/thiagolima-bm) in pull request [18462](https://github.com/magento/magento2/pull/18462)*. [GitHub-18082](https://github.com/magento/magento2/issues/18082)


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



<!--- MAGETWO-95834-->* You can now successfully save a newly created configurable product that uses existing attributes. Previously, under these circumstances, Magento displayed this error, `Notice: Undefined index: newProduct in vendor/magento/module-configurable-product/Controller/Adminhtml/Product/Initialization/Helper/Plugin/Configurable.php on line 161`.

<!--- MAGETWO-96594-->* 




### cron

<!--- ENGCOM--->* 

*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18209](https://github.com/magento/magento2/pull/18209)*. [GitHub-17190](https://github.com/magento/magento2/issues/17190)


### Customers

<!--- ENGCOM-3014-->* 

Change sort order for customer group options

Change sort order for customer group options. The customer groups will be listed alphabetically.

Wrong sort order for customer groups in customer grid filter




*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18117](https://github.com/magento/magento2/pull/18117)*. 

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



<!--- ENGCOM-3351-->*

Wrong order total in customer information orders tab in admin panel 

Expected result
Order total is same in "customer information orders grid" and "orders grid"

Customer information orders grid's order total differs from the "orders grid", Order total (in customer information orders grid) is showing wrong if order is placed except base currency. In this pull request
I have fixed it.

*Fix submitted by [Anuj Gupta](https://github.com/anujwebkul) in pull request [18650](https://github.com/magento/magento2/pull/18650)*. [GitHub-18618](https://github.com/magento/magento2/issues/18618)



<!--- ENGCOM-3372-->*

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


<!--- ENGCOM-3387-->*

Reset password throws error

Steps to reproduce
Clicked on "Reset password" on the login page
Entered e-mailadres and submitted form
Clicked on link in the password reset mail
Entered password two times and submit form by clicking "reset password"

Expected result
Password is changed and the user can login with the new password

Actual result
Error occurred "something went wrong while saving the new password".

*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19026](https://github.com/magento/magento2/pull/19026)*. [GitHub-18256](https://github.com/magento/magento2/issues/18256)


<!--- ENGCOM-3014-->*
Change sort order for customer group options

Wrong sort order for customer groups in customer grid filter

Steps to reproduce
imagine you've 50 customer groups (not only 3 default)
go to admin customer grid and filter by group
Expected result
customer groups are listed alphabetically
Actual result
customer groups are listed by ID (this is really unfavourable if you have a lot of groups)



*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18117](https://github.com/magento/magento2/pull/18117)*. 



<!--- ENGCOM-3068-->*

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


When you set up a custom customer address attribute and set it to be displayed in the Columns list, Magento now displays the value as expected in the column for that attribute. Previously, 


Value of Customer Address Attribute is not shown in the Customers grid

If you set up a custom customer address attribute and set it to be displayed in the Columns list, the column for that attribute will not show the value even though it is saved on the customer's address.

And if you look at the customer_grid_flat table, you will see that the attribute's value isn't copied over

Expected Result
Customer code column added to Customer Grid and value RB111 displayed against customer record

Actual Result
Customer code column added to Customer Grid and all values are blank






<!--- MAGETWO-91704-->* 

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

<!--- MAGETWO-94347-->* 


<!--- MAGETWO-91720-->* 

<!--- MAGETWO-97397-->* 



### Customer attributes

<!--- ENGCOM-3181-->*

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






<!--- MAGETWO-70968-->* 

Custom Customer Address attribute cannot be updated when editing the billing address of an order in the admin




EXPECTED RESULTS:
The new custom customer address attribute should be updated when doing so in the admin panel

ACTUAL RESULTS:
Custom Customer Address attribute cannot be updated when editing the billing address of an order in the admin






<!--- MAGETWO-96124-->* 
Custom Customer Attributes get cleared in case of invalid Customer Account creation on Storefront.

STEPS TO REPLICATE:

Create custom customer attributes for each Input type (e.g. text, dropdown, date, etc.)
Set Forms to Use In = Customer Registration
Set Show on Storefront = Yes
Go to Storefront as a guest
Click Create an Account link located in the header so that "Create New Customer Account" page is opened
Specify early added Email
Fill all other fields validly
Click Create an Account submit button
EXPECTED RESULTS:
Error message reloads the page so that custom attribute fields are still filled by Customer

ACTUAL RESULTS:
Error message reloads the page so that custom attribute fields become empty




### Dashboard

<!--- MAGETWO-96975-->* UNRESOLVED

Remove `_sleep` and `__wakeup` from code

PHP serialization is discouraged so `__sleep` and `__wakeup` methods were removed and a new PHP.MD rule added to prevent people from adding new ones


<!--- MAGETWO-95299-->* NEW FEATURE

Ability to upload PDP images without compression and downsizing

I want to be able to upload high quality PDP images which have size more than 1920x1200 without any resizing and compression,

So, that the uploaded picture quality remains as is and do not downsampled by Magento.





### Datepicker

<!--- ENGCOM-3209-->*

Fixed incorrect datepicker icon position in admin panel 

The datepicker icons position in the admin panel is incorrect after porting a fix that is not actual for Magento 2.2+



*Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [18627](https://github.com/magento/magento2/pull/18627)*. [GitHub-18605](https://github.com/magento/magento2/issues/18605)




### Declarative schema

<!--- MAGETWO-96493-->* UNRESOLVED

kevin



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





### Email







<!--- MAGETWO-91521-->* 

Reports / Sales / Tax report show incorrect amount

Add two or more tax rates for the same zip code at different rates, ex 7.25 and .125.
Create an order in that zip code.
View Tax report.

Actual result: see bug_in_reports.png 
Expected result: taxreport.png . 


<!--- MAGETWO-95137-->* 



### Frameworks

<!--- ENGCOM-3034-->* 
 Fix module uninstall shell command and composer removal w/out regression

 There is a discrepancy between composer.lock and composer.json when removing a module via bin/magento module:uninstall command. Also, the output is wrong and the guide says it should do otherwise.
The removal option in the code solved the previous issue #5797 , but caused the new issue. The new change solves both.

*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18205](https://github.com/magento/magento2/pull/18205)*. [GitHub-5797](https://github.com/magento/magento2/issues/5797)


<!--- ENGCOM-3256-->* 

Convert string to DateTime object for languages other than English #18083

Converting from string into PHP DateTime object is failing for locales other than en_US. This PR aims to solve this problem.

Datetime Error on Newsletter Template

Steps to reproduce
Go to Admin->Marketing->Newsletter Template
Select "Queue Newsletter" from right dropdown
Select a "Queue Date Start" and try to save it
Expected result
Saved
Actual result
`DateTime::__construct(): Failed to parse time string (29/giu/2016 01:22:19) at position 0 (2): Unexpected character`

*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18940](https://github.com/magento/magento2/pull/18940)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)



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



<!--- MAGETWO-95838-->* 

Attribute in Flat table should update after the product is saved.

Custom product attribute does not update when using Catalog Product Flat tables

ISSUE:
When Catalog Product Flat Index is turned on AND Indexer is set to Save on Update,
changes to attributes do not update in the Index.

EXPECTED RESULTS:
Attribute in Flat table should update after the product is saved. (Without running "indexer:reindex catalog_product_flat")

ACTUAL RESULTS:
Attribute in Flat table does not update


#### Cache framework


<!--- MAGETWO-64282-->* 

Out of stock associated products to configurable are not full page cache cleaned #8009

https://github.com/magento/magento2/issues/8009

Magento 2.1.3 out of stock associated products to configurable are not full page cache cleaned

Actual result:
The configurable product page is not cache cleaned.

Expected result:
On short, the simple associated product is not marked as out of stock on configurable product page.
The configurable product page should have it's options updated visually. More exactly, the associated simple product unique combinations of options should be marked as 'out of stock'. In the case of sku 'WT09', we should see the 'disabled' swatch for that associated simple product.
If you clean cache from console you'll see the expected result. Cleaning cache from console after each purchase is not a solution.




<!--- MAGETWO-95853-->* 

Cant flush Images cache in admin

ACTUAL RESULTS:
Directory cannot be deleted. You will get an error on "Cache Management" page

EXPECTED RESULTS:
N/A , probably should display a more precise error message, indicating that new images have already been re-generated after flushing - perhaps introduce a delay to allow the the image cache to be flushed completely, before proceeding with the regeneration

<!--- MAGETWO-91694-->* 

#### Configuration framework

<!--- MAGETWO-97247-->* 


#### Data framework

<!--- ENGCOM-3268-->* 

Added form fieldset before html data to \Magento\Framework\Data\Form\Element\Fieldset in getElementHtml() method 

In \Magento\Framework\Data\Form\Element\Fieldset class, there is not called the getBeforeElementHtml() method in getElementHtml(). This stops developers from adding needed information before the fieldset in a easy way.




*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [18798](https://github.com/magento/magento2/pull/18798)*. [GitHub-2618](https://github.com/magento/magento2/issues/2618)




#### Event framework

<!--- ENGCOM-3442-->* 

Improvement the validation of the eav entity attribute

This additional validation, is checking for allowed characters within an eav attribute code, which allows only letters, number, underscores and the first character should be a letter.




*Fix submitted by [Lisovyi Yevhenii](https://github.com/lisovyievhenii) in pull request [19146](https://github.com/magento/magento2/pull/19146)*. [GitHub-15931](https://github.com/magento/magento2/issues/15931)


#### JavaScript framework

<!--- MAGETWO-56813-->* Wishlist names can now contain apostrophes. Previously, a wishlist whose name contained an apostrophe could not be edited or deleted. 



#### Message framework

<!--- MAGETWO-91717-->* 




### General fixes

<!--- ENGCOM-3198-->* 

Fix disappearing navigation arrows in fotorama zoom

Expected result 
I expect to see navigation arrows
I expect them to stay visible when navigating through images
I expect the navigation arrows in the non-zoomed fotorama to stay visible after closing the zoomed fotorama

Actual result
I do not see navigation arrows
After I click on a thumbnail, the navigation arrows become visible. After I click on a different thumbnail, they disappear again. And so on.
After closing the zoomed fotorama with no visible navigation arrows, they are also invisible on the non-zoomed fotorama.

*Fix submitted by [Luuk Schakenraad](https://github.com/luukschakenraad) in pull request [18590](https://github.com/magento/magento2/pull/18590)*. [GitHub-18585](https://github.com/magento/magento2/issues/18585)


<!--- ENGCOM-3239-->* 

Sections LESS mixins: fix the issue with missing rules and incorrect default variables

When you try to customize the view of "tabs" and "accordion" components by redefining the default variables in the scope of a custom theme, the following issues appear:

The text color for active "accordion" control is not applied.
The text-decoration for active control is not working for both "accordion" and "tabs" components.
There are also incorrectly defined default variables for mixins. (e.g. accordion control visited and tab control hover variables etc.).



*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [18730](https://github.com/magento/magento2/pull/18730)*. [GitHub-18729](https://github.com/magento/magento2/issues/18729)


<!--- ENGCOM-3489-->* 

Content overlaps the "close" button

The confirmation popups are broken due to the reduced width.
Looks like the expected width is 50rem. This rule has been added by the following commit: 2f133c8
In this case, we just need to resolve the issue related to content overlapping the "close" button.

Broken backend popup view


*Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [19264](https://github.com/magento/magento2/pull/19264)*. [GitHub-19263](https://github.com/magento/magento2/issues/19263)


<!--- ENGCOM-3346-->* 

Added default value(y) for confirmation question

*Fix submitted by [aheadWorks Capital SIA](https://github.com/aheadWorks) in pull request [18970](https://github.com/magento/magento2/pull/18970)*. [GitHub-18965](https://github.com/magento/magento2/issues/18965)


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


<!--- ENGCOM-3165-->* 

Updating error message for misleading error in add product attribute code 

Updating validate_code error message to more understandable form i.e initially it was "Please use only letters (a-z), numbers (0-9) or underscore () in this field, and the first character should be a letter" now it is "Please use only lowercase letters (a-z), numbers (0-9) or underscore () in this field, and the first character should be a letter"



*Fix submitted by [Aman Agarwal](https://github.com/aman3103) in pull request [17800](https://github.com/magento/magento2/pull/17800)*. [GitHub-17754](https://github.com/magento/magento2/issues/17754)


<!--- ENGCOM-3209-->* 

Fixed incorrect datepicker icon position in admin panel #18627

*Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [18627](https://github.com/magento/magento2/pull/18627)*. [GitHub-18605](https://github.com/magento/magento2/issues/18605)


<!--- ENGCOM-3224-->* 

Magnifier function does not disappear after mouse-off the image from the bottom 

Magnifier function does not disappear after mouse-off the image from the bottom
This PR adds the onMouseLeave event

Gallery Magnifier hover event does not always cancel magnifier when mouse leaves gallery 


*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [18702](https://github.com/magento/magento2/pull/18702)*. [GitHub-15035](https://github.com/magento/magento2/issues/15035)



<!--- MAGETWO-91745-->* 

Product pages that are part of a related products rule that uses Price (percentage) condition load blank page

ISSUE:
Product pages that are part of a related products rule that uses Price (percentage) condition load blank page

EXPECTED RESULTS:
The product page should load

ACTUAL RESULTS:
Product pages that are part of a related products rule that uses Price (percentage) condition load blank page




<!--- MAGETWO-96405-->* Magento now displays the appropriate thumbnail image for configurable products in requisition lists. Previously, Magento displayed the deafult placehiolder thumbnal image for all configurable products.  


### Gift cards

<!--- MAGETWO-95817-->* 

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


### Gift registry

<!--- MAGETWO-95833-->* Magento now shows the correct price for configurable products in a shared gift registry. Previously, Magento displayed the original price instead of the special price for configurable products.


### Gift wrapping

<!--- MAGETWO-91563-->* 

Gift wrapping selection does not display in shopping cart	

Gift wrapping selection does not show in shopping cart on product level unless additional gift option is added.



### Google Analytics

<!--- ENGCOM-3058-->* 

Fix wrong reference in google analytics module layout xml 

Simple change of reference (referenceContainer to referenceBlock) for Google Analytics module.

 Google Analytics not added to head correctly

*Fix submitted by [Petar Sambolek](https://github.com/sambolek) in pull request [18290](https://github.com/magento/magento2/pull/18290)*. [GitHub-16497](https://github.com/magento/magento2/issues/16497)



### Google Tag Manager

<!--- MAGETWO-96378-->* The Google Tag Manager `AddToCart` event now fires reliably on the product page when **Stores** > **Configuration** > **Sales** > **Checkout** > **Redirect to Shopping Cart**is set to  **yes**. 


### GraphQL

<!--- ENGCOM-2967-->* 

The pull enables adding simple products to customer/guest carts via GraphQl mutations.

In order to add simple product to cart the following information can be passed:

product SKUs (required)
quantities (required)
custom options (required if product has required options)
As a result of executing such mutation, the current state of the cart will be returned. Cart items information can vary and depends on product types. For this case, simple cart item contains information about custom options.

*Fix submitted by [Roman Glushko](https://github.com/roma-glushko) in pull request [170](https://github.com/magento/graphql-ce/pull/170)*. [GitHub-141](https://github.com/magento/magento2/issues/141)


<!--- ENGCOM-3071-->* 

Fix regexp when filter by root category id 

At present, if you query the category tree requesting the Root Category (id = 1), query returns empty.
This is caused by the regular expression that filters the catalog_category_entity.path column table, which includes for all cases, a slash (/) at the beginning.
In the case of the Root Category, there's no slash at the begging.


*Fix submitted by [Martin Hansen](https://github.com/mhhansen) in pull request [121](https://github.com/magento/graphql-ce/pull/121)*. [GitHub-102](https://github.com/magento/magento2/issues/102)
*Fix submitted by [Martin Hansen](https://github.com/mhhansen) in pull request [121](https://github.com/magento/graphql-ce/pull/121)*. [GitHub-100](https://github.com/magento/magento2/issues/100)






<!--- ENGCOM-2964-->* 


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






### Import/export

<!--- ENGCOM-3035-->* 
Make sure all linked products (related, upsells, crosssells) show up in the backend grids and in the correct order

I imported four related products for a product. The related products are showing in the frontend. But only two related products are showing in the backend. I have run index and cleared cache. But the issue is still exist.






*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [18207](https://github.com/magento/magento2/pull/18207)*. [GitHub-14050](https://github.com/magento/magento2/issues/14050)

<!--- ENGCOM-3203-->* 

Fix SKU limit in import new product



import new products via csv: products are created with empty value when strings are too long (more than 71 characters)


*Fix submitted by [Ravi Chandra](https://github.com/ravi-chandra3197) in pull request [18639](https://github.com/magento/magento2/pull/18639)*. [GitHub-17865](https://github.com/magento/magento2/issues/17865)



<!--- ENGCOM-3083-->* 

Update CategoryProcessor.php

This fix make it possible, that the upsert category process during product import are generating the freshly created category url rewrites globally and not just for the default scope



*Fix submitted by [utietze](https://github.com/utietze) in pull request [18271](https://github.com/magento/magento2/pull/18271)*. [GitHub-18234](https://github.com/magento/magento2/issues/18234)



<!--- ENGCOM-3228-->* 
save the custom option price when it is 0
Importer fails when updating an existing product with custom options
Importer fails when updating an existing product with custom options

The importer fails when trying to update products which have a fixed price custom option with a price of zero.
This probably won't happen in production mode as notices would likely be disabled.

It looks like this error might be due to a record for price is expected to exist in the catalog_product_option_type_price table. Is it possible that this record wasn't created due to the zero price?
*Fix submitted by [Antun Matanović](https://github.com/amatanovic) in pull request [18284](https://github.com/magento/magento2/pull/18284)*. [GitHub-17616](https://github.com/magento/magento2/issues/17616)



<!--- MAGETWO-94671-->* 




The major issue with media gallery in export was fixed, memory needed to export large amounts of products significantly reduced

STEPS TO REPRODUCE
1. Generate 20,000+ products by performance toolkit.
2. Go to System -> Data Transfer -> Export
3. Select Products for Entity Type and CSV for Export File Format.
4. Click Continue

EXPECTED RESULT
1. CSV file is exported.

ACTUAL RESULT
1. Export fails.

https://github.com/magento/magento2/issues/17320








<!--- MAGETWO-95825-->* 

Images revert to default placeholder on import

STEPS TO REPRODUCE:

Install latest Magento 2.2.X version (or use 2.2-develop)
Create a simple product and upload image (image will have all possible roles: Thumbnail, Small, Base etc.)
Export this product via Import/Export functionality
Change an exported CSV file and set for all image columns nonexistent image name. For example: change /u/p/uploaded.jpg to incorrect.jpg
Save your CSV file
Go to Import and import this file via Behavior = Add/Update
You will get an error: 1. Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s): 1 and it's OK.
Go to your product in admin panel
You will see that image that you uploaded on the Step 2 doesn't have any roles
ACTUAL RESULT: 
Correct product image that was uploaded on creating product lost all roles

EXPECTED RESULT: 
If image wasn't uploaded during import and you get an error like 1. Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s): 1, then actual product image shouldn't lose roles.




<!--- MAGETWO-91569-->* Special characters in the CSV import file no longer trigger a general system exception. Previously, special characters (for example, <code>ƒ</code>, <code>ª</code>, and <code>›</code>) halted the check data phase of import. 

<!--- MAGETWO-95105-->* URL Key columns that contain  accented characters are now converted properly after the import of a CSV file. Previously, if you manually assigned a URL key to a product in the Admin that contained an accent character or punctuation, Magento converted it to the regular character or removed it. 

<!--- MAGETWO-91544-->* Magento now correctly updates existing product URLs during import. Previously, Magento update existing URLs with the new URLs, but displayed a 404 error if you tried to access the product from the new URL.  



<!--- MAGETWO-95829-->* 


Product positions are incorrect after import

If Product is assigned to Category via Import, then it's position inside Category isn't taken into account & is being changed by 1 each time Merchant re-saves the Category



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

<!--- MAGETWO-58210-->* 



### Integration

<!--- ENGCOM-3353-->*

Magento 2.3.0-beta18: ReflectionException on Backend -> Stores -> Configuration -> Services -> OAuth page 

When navigating to Stores -> Configuration -> Services -> OAuth and open this section,
Page displays blank and throws an exception: main.CRITICAL: Class text comment does not exist
I have fixed it in this pull request.

*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [18750](https://github.com/magento/magento2/pull/18750)*. [GitHub-18655](https://github.com/magento/magento2/issues/18655)



<!--- ENGCOM-3355-->*

Fix Authenticating a customer via REST API does not update the last logged in data 

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

<!--- MAGETWO-91753-->* 


### Newsletter

<!--- ENGCOM-3460-->* 

Fixing the customer subscribing from different stores 

Newsletter subscription does not set the correct store_id if already subscribed


*Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [19195](https://github.com/magento/magento2/pull/19195)*. [GitHub-19172](https://github.com/magento/magento2/issues/19172)

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

<!--- MAGETWO-91768-->* 


### Orders

<!--- MAGETWO-94437-->* asked Lori and K

Improve order creation flow

Improve admin order creation flow according to new customer requirements

When placing an order via the Backend, excessive AJAX calls are made whenever a billing or a shipping field is updated. This creates delays and frustrations when customer representatives are working with customers to place an order.



<!--- MAGETWO-91628-->* 

<!--- MAGETWO-69274-->* 


### Page Builder


<!--- MAGETWO-96293-->* The **Reset** button has een removed from all  forms in the Admin. 



### Page cache

<!--- MAGETWO-97234-->* 


### Payment methods

<!--- ENGCOM-3219-->* 

Adding logic to get default billing address used on Cart and Checkout 

Fixing the bug when the cart is virtual and the estimate was getting the shipping address instead billing address.


When you have a cart containing only virtual products and are a signed-in customer with different default shipping and billing addresses, the default shipping address information will be populated in the cart estimation field instead of the default billing address information - providing an incorrect estimation of tax charges.



*Fix submitted by [Lucas Calazans](https://github.com/LucasCalazans) in pull request [18095](https://github.com/magento/magento2/pull/18095)*. [GitHub-17744](https://github.com/magento/magento2/issues/17744)




<!--- ENGCOM-3393-->* 

Issue of Wee Tax When using FPT, the FPT-total show up at the cart/checkout but is missing at the pdf invoice.

If we enable FPT and add it to the product, after placing order, FTP amount field is displaying on Order view, Invoice view etc, when downloading Invoice Pdf, FTP amount field was missing. In this pull request


*Fix submitted by [Mahesh Singh](https://github.com/maheshWebkul721) in pull request [19061](https://github.com/magento/magento2/pull/19061)*. [GitHub-18617](https://github.com/magento/magento2/issues/18617)



<!--- MAGETWO-96427-->* Magento now displays the refund offline warning pop-up  when a customer attempts to navigate to the credit memo directly from the order page for orders placed with the PayPal Express Checkout.






<!--- MAGETWO-96475-->* 

Investigation an issue that an exception appears after an order has been payed

ACTUAL RESULTS:
Orders that fail during the checkout processes when being processed through PayPal via Braintree are being charged in Braintree

EXPECTED RESULTS:

If an order is created it should be canceled, if a payment transaction is submitted - it should be voided


<!--- MAGETWO-96291-->* 

Cannot proceed to Braintree PayPal from iPhone

When using braintree paypal express and going through checkout on an iphone, in Magento 2.2.5 it force opens a new page. In Magento 2.2.6 and later, this forced new page is blocked as a popup, which presents a problem for them, mainly because this setting is on by default and they expected the same behavior.

EXPECTED RESULTS:
Customer expected forced popup/new page to be allowed.

ACTUAL RESULTS:
New page blocked in 2.2-develop



<!--- MAGETWO-95821-->* When a  customer selects PayPal as a payment method but then applies a gift card, Magento now reverts to zero subtotal checkout. Previously, the order failed at the review step if a gift card were applied. 


<!--- MAGETWO-91526-->* 

<!--- MAGETWO-97243-->* 


### Performance

<!--- MAGETWO-95249-->* 

<!--- MAGETWO-94346-->* 





### Product video

<!--- MAGETWO-91707-->* You can now pause product videos on YouTube on storefronts running on Internet Explorer 11.x.



### Quote


<!--- ENGCOM-3416-->* 

 Fixed issue "Can not update cart with a reserved order number like 000000651

 Previously Can not update cart with a reserved order number



*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [19130](https://github.com/magento/magento2/pull/19130)*. [GitHub-19101](https://github.com/magento/magento2/issues/19101)


<!--- ENGCOM-3226-->* 

Allow set billing information via API with existing address
Not setting the customerId with an existing address caused a
NoSuchEntityException to be thrown during address validation


*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [18704](https://github.com/magento/magento2/pull/18704)*. [GitHub-17485](https://github.com/magento/magento2/issues/17485)


<!--- MAGETWO-94059-->* You can now request a quote on a storefront running on iOS 11.3.1.


B2B



### Reports

<!--- MAGETWO-95823-->* The Order Sales report now includes only completed orders. Previously, this report included canceled orders. 

<!--- MAGETWO-63069-->* The Refresh Lifetime Statistics feature of reports now  works in deployments with split databases. 

<!--- MAGETWO-91553-->* 




### Review

<!--- ENGCOM-3486-->* 
*Fix submitted by [Saphal Jha](https://github.com/saphaljha) in pull request [18888](https://github.com/magento/magento2/pull/18888)*. [GitHub-18192](https://github.com/magento/magento2/issues/18192)
Refresh Statistics does not work
Expected results: Refresh Statistics works without problem ('Updated' columns with date)
F 





<!--- MAGETWO-95491-->* 

Product Review "Save and Next" and "Save and Previous" not working

The buttons "Save and Next" and "Save and Previous" in Marketing > Reviews does not work as expected.

EXPECTED RESULTS:
After Step 4, you should see the second review you added
After Step 7, you should see the second to last review you added

ACTUAL RESULTS:
After saving and using either button you don't end up with the previous or next review (by review ID)



### Rewards

<!--- MAGETWO-95803-->* Rewards points from a purchase using a coupon code are now added to a  newly created customer account when the account is created immediately after checking out. 

<!--- MAGETWO-91647-->* Customers are now subscribed as expected to email notifications about reward points. 


EE ONLY

<!--- MAGETWO-91628-->* 

<!--- MAGETWO-96125-->* 



#### Return Merchandise Authorizations (RMA)

<!--- MAGETWO-96426-->* 

RMA return reason is clipped in the Sales > Returns > Return Items grid - It looks like a link but does nothing
When a shopper returns an item from their account on the front end and uses Return reason Other and fills in the text box with their reason, it is clipped in the admin panel backend under Sales > Returns > Return Items


Expected Results

Something should happen when you click on the Return reason that looks like a link

ACTUAL RESULTS:
The Return Reason is clipped and does not display the entire reason.  It looks like a link and behaves like one until you click on it.  Nothing happens and you can read the entire Return reason description
 




<!--- MAGETWO-91672-->* 

Broken layout "Create New Return" when add not required dropdown attribute

STEPS TO REPLICATE:
1. Enable RMA on frontend
2. Create new RMA attribute

Type Dropdown
Required = No
Add several value
3. Place order -> Create Invoice and Shipment
4. Login to fronted
5. Go to order review page
6. Click Create Return
EXPECTED RESULTS:
" Create New Return " page show correctly all fields(see attach)
ACTUAL RESULTS:
New dropdown attribute displays as several text rows






<!--- MAGETWO-71022-->* 
After return "RMA" is complete in Admin, "remaining quantity" in customer account shows incorrect value

EXPECTED RESULTS:
Remaining quantity should reflect the proper amount of products left after a return is completed.

ACTUAL RESULTS:
Remaining quantity does not reflect the proper amount of products left after a return is completed.




<!--- MAGETWO-96158-->* 


<!--- MAGETWO-97259-->* 

<!--- MAGETWO-97132-->* 




### Rule

<!--- MAGETWO-96402-->* 
CustomerSegment module overwrites custom rules

Merchant believes there is a bug in the CustomerSegment module that overwrites custom rules created in a separate module


Expected Result
Condition appears

Actual Result
Condition is missed




### Sales

<!--- ENGCOM-3294-->* 

Resolves 6731 by adding a custom message for refunding shipping 

Steps to reproduce
Create a order with 0$ in shipment
Complete the order
Create new creditmemo
Add something in "Refund shipping"
Expected result
I would suggest a error "You can not refund shipping when shipping is zero"
With the current error message the admin would try to create this creditmemo for long time, because the error is so "Try again later..."

*Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [18844](https://github.com/magento/magento2/pull/18844)*. [GitHub-6731](https://github.com/magento/magento2/issues/6731)


<!--- ENGCOM-3048-->* 

When trying to print the order information from customer's account view the following error is placed in httpd logs:
Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php
The cause of this was additional AJAX request taking place after closing the print prompt as discussed by @ihor-sviziev in #9830, trying to render print information one additional time, however without registry properly initialized, it results in the error. I've changed the block that was causing this issue to be uncachable, which seems to be fixing the problem. I've also added changes that were added to 2.1 from #10530 that were not present in 2.2.


Viewing an order in the customer dashboard and clicking the print order link causes the following entry in httpd error_log:

PHP Fatal error: Call to a member function getRealOrderId() on null in /vendor/magento/module-sales/Block/Order/PrintShipment.php on line 58


Print order error

*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18272](https://github.com/magento/magento2/pull/18272)*. [GitHub-10530](https://github.com/magento/magento2/issues/10530)


<!--- ENGCOM-3074-->* 

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


<!--- MAGETWO-94429-->* 

Files and folders symlinked in pub/media cannot be deleted from media gallery browser

Any files or folders symlinked inside pub/media directory are unable to be deleted because there is a validation check which uses realpath to test whether the file is outside of media directory base path. Since realpath resolves symlinks to actual paths, this check will fail if actual path is outside of base path and will prevent action from being completed.

Expected Result:
image is removed from media gallery after ajax request completes.

Actual result: 
image remains in media gallery with no UI feedback. Response from XHR payload includes exception message "Directory /var/www/magento/pub/media/example/ is not under storage root path."




<!--- MAGETWO-94245-->* 

 It is not possible to refund to Store Credit when partial payment made with Online method

 Fix issue that occurs with partial refund if order was payed with online payment

 Steps to Reproduce:

Create a customer
Go to Admin > Customer > Store Credit. Add $50 store credits to the account
Login on the frontend. Add products to a cart that order amount = $100
Place order using $50 store credit as partial payment and online payment method such as Braintree for other $50.
In Admin go to that order and Invoice the order if necessary.
Open the invoice and click on Credit Memo
Click "Refund Online" or "Refund Offline"
ACTUAL RESULTS:

$50 is refunded, order is closed and it is not possible to return another $50 to store credit any more.
EXPECTED RESULTS:

$50 is refunded, order is still active, it is possible to create a credit memo and refund another $50 to store credit or offline. It should be always possible to refund full order amount.


<!--- MAGETWO-94472-->* B2B

Unable to create credit memo for order placed via online payment with taxes and discounts

Actual result:
user get error

{"0":"Maximum shipping amount allowed to refund is: $5.89","1":"#0 \/mnt\/data\/home\/agorbivskyi\/dev\/22develop\/app\/code\/Magento\/Sales\/Model\/Order\/Creditmemo.php(347)
Expected result:
Credit Memo page opened without errors



<!--- MAGETWO-91547-->* EE ONLY

[2.3] Unable to create Credit memo for order with no payment required

When an order is placed with 0 payment required, the "Credit Memo" button does not get displayed on the order.

Actual result
"Credit memo" option is not available for zero dollar order.

This should still be an available option in case the customer decides to return the item, otherwise the merchant will not be able to return it to stock without manually adjusting the inventory

0 then credit memo is not available. 
Now we check Grand Total of the order whether it is equal to 0. 



<!--- MAGETWO-96488-->* 

Wrong price calculation for bundle product on creating order from the admin panel



<!--- MAGETWO-63327-->* EE ONLY

Store logo overlapped by text in printed pdf for return

Steps to reproduce

Create any order and create invoice, shipment and return for it
Go to Stores > Settings > Conifguration > Sales > Sales > Invoice and Packing Slip Design
Upload attached image (200x50px as recommended in user guide)
Save Config
Go to Sales > Operations > Returns > Any return request > View
Click Print
Actual result:
Logo is cut off at the bottom.

Expected result:
Logo should display without being cut off when sized to recommendation of the user guide

 Logo displays correctly for invoices and shipments



<!--- MAGETWO-96400-->* 

Company address attribute not displayed in Sales grid

ISSUE
Company address attribute not displayed in Sales grid
STEPS TO REPLICATE:
1. Create Customer with filled Company field in Address
2. Place order
3. Go to backend > Sales>Orders
4. Check Billing and Shipping columns

EXPECTED RESULTS:
Billing and shipping address should contain Company information

ACTUAL RESULTS:
Company information missing in billing and shipping address



<!--- MAGETWO-96987-->* 

GiftWrap Tax Amount is being added to the Credit Memo Twice

When creating a credit memo for an Order that has Gift Wrapping, the Tax amount from the Gift Wrap item is added to the Base Tax Amount again even though it already includes the Gift Wrap Tax amount. [^giftwrap-issue.mp4]

Actual results
Scroll down to the Totals of the Credit Memo and you'll notice that the Tax amount is higher than on the Order itself
Expected result
Tax amount for the Credit Memo is the same as for Invoice





<!--- MAGETWO-96432-->* 

[2.3.x] Payment method title does not update in the admin sales order grid

If you update the Payment method title, it does not show the updated title in the admin sales order grid

STEPS TO REPLICATE:
1. Go to the Stores > Configuration > Sales > Payment Methods > Check / Money Order and change default title 
2. Create a test order with Check / Money order payment method 
3.Go to the admin panel - Sales - Orders 
4. Notice the payment method shows as Check / Money Order rather than the new title

EXPECTED RESULTS:
If you update the Payment method title, it should show the updated title in the admin sales order grid

ACTUAL RESULTS:
If you update the Payment method title, it does not show the updated title in the admin sales order grid


<!--- MAGETWO-94424-->* 




### SalesArchive

<!--- MAGETWO-96022-->* 

Archived Orders Reappear in Order Management Grid

Fixed issue when archived Orders Reappeared in Order Management Grid




### SalesRule


<!--- MAGETWO-96410-->* 

[2.3.x] The cart rule cannot effect the cart



<!--- MAGETWO-91522-->* 

Sales Rule indexer process unknown error

SSUE:
Sales Rule indexer process returns an error during reindexing caused by the Magento_AdvancedSalesRule module.

ACTUAL RESULTS:
Error during reindexing


### Search

<!--- MAGETWO-91742-->* 
"Sort by" not working on Catalog Search results page

After changing the Product Listing Sort by in System > Config > Catalog > Catalog > Storefront, the default sort on search results is still relevance and sort by option on the search results page does not work.

STEPS TO REPLICATE:
1. Login to admin panel
2. Navigate to System > Config > Catalog > Catalog > Storefront > Product Listing Sort by
3. Update the configuration to 'Product Name'
4. Navigate to store front
5. search by any keyword which gives out results
6. Observed the default sort is 'Relevance'
7. Change the sort by option to 'Product Name'
8. Still sorted by Relevance.

EXPECTED RESULTS:
The default sort order field for search result is the same as in the field "Product Listing Sort by". The sort by option should work when used

ACTUAL RESULTS:
The default sort order field for search result does not match with the field "Product Listing Sort by" value. The sort by option does not work when used



<!--- MAGETWO-91537-->* Search synonyms results missing for words including hyphen and numbers
ISSUE:
No results are returned for search synonyms containing hyphen and numbers, example "alesse-28"

STEPS TO REPLICATE:

Go to Marketing > SEO & Search > Search Synonyms > New Synonym Group
Add the following synonyms seperated by a comma:
joust
alesse-28
Save Synonym Group
Reindex if needed
Go to front end > search for "joust"
Notice results
search for "alesse-28"
Notice no results returned
EXPECTED RESULTS:
Searching for a synonym with a hyphen and number should return the same results as any other search term in the group.

ACTUAL RESULTS:
Searching for a synonym with a hyphen and number returns no results



<!--- MAGETWO-91537-->* 

Search synonyms results missing for words including hyphen and numbers
No results are returned for search synonyms containing hyphen and numbers, example "alesse-28"

STEPS TO REPLICATE:

Go to Marketing > SEO & Search > Search Synonyms > New Synonym Group
Add the following synonyms seperated by a comma:
joust
alesse-28
Save Synonym Group
Reindex if needed
Go to front end > search for "joust"
Notice results
search for "alesse-28"
Notice no results returned


<!--- MAGETWO-97235-->* 

<!--- MAGETWO-67779-->* 

<!--- MAGETWO-97495-->* 



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





### Sitemap

<!--- ENGCOM-3040-->* 

Fix sitemap grid render incorrect base urls for multiple stores 

In Magento/Sitemap/Block/Adminhtml/Grid/Renderer/Link.php, we've created new instance for \Magento\Sitemap\Model\Sitemap. That lead to $sitemap->getStoreId() is NULL all the time, the sitemap.xml generated still using correct store id because of we load $sitemap instance from the collection which retrieve data directly from the database.

So to fix this issue, we should set the store id for the current sitemap object based on store id retrieved from the current row.

Sitemap grid display incorrect base URL in the grid if using multiple stores


*Fix submitted by [Toan Nguyen](https://github.com/nntoan) in pull request [18228](https://github.com/magento/magento2/pull/18228)*. [GitHub-17999](https://github.com/magento/magento2/issues/17999)



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


<!--- MAGETWO-91662-->* 

<!--- MAGETWO-91566-->* 

<!--- MAGETWO-91525-->* 




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

<!--- ENGCOM-3360-->* 
show correct text swatch values per store view
Show correct text swatches values per store view.


Product swatches does not shows correct value for related store view


*Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [18988](https://github.com/magento/magento2/pull/18988)*. [GitHub-17890](https://github.com/magento/magento2/issues/17890)


<!--- MAGETWO-95310-->* Product images now display the color option you chose when you apply a color filter in layered navigation. Previously, wrong colors were randomly displayed. 




<!--- MAGETWO-59789-->* YOu can now change the size of a swatch image as expected.  


https://github.com/magento/magento2/issues/6382





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



### TargetRule

<!--- MAGETWO-91708-->* Magento no longer throws an exception when Target Rules are set to a rotation mode other than **SHUFFLE** (You can set rotation modes in **Admin** > **System** > **Configurations** > **Catalog** > **Catalog** > **Rule-Based Product Relations**).


EE ONLY



<!--- MAGETWO-95708-->* Magento no longer throws a fatal error when price is used in a Target Rule for actions. 

EE ONLY



### Tax


<!--- ENGCOM-3443-->* 

"Not yet calculated" for the tax in the summary section in the checkout was not being translated.

Now the correct function call for js translations is made.


"Not yet calculated" for the tax in the summary section in the checkout is not translatable




*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19174](https://github.com/magento/magento2/pull/19174)*. [GitHub-18939](https://github.com/magento/magento2/issues/18939)
*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19174](https://github.com/magento/magento2/pull/19174)*. [GitHub-7849](https://github.com/magento/magento2/issues/7849)



<!--- MAGETWO-91769-->* Credit memos now include only the taxes on the product as expected. Previously, the credit memo included the shipping tax as well even when shipping costs were not refunded. 


<!--- MAGETWO-91639-->* 

Tax is added despite customer group changes

Tax is added despite customer group changes based on VAT Id validation

STEPS TO REPLICATE:

Enable Automatic Assignment to Customer Group
Set Group for Valid VAT ID - Intra-Union
Enable Show VAT Number on Storefront
Enable Validate on Each Transaction
Add tax rule for tax class for United Kingdom
Add tax class for 'Valid VAT ID - Intra-Union' group
Register customer on storefront
Add United kingdom address so that tax will be added
Add product to cart
Go to customer account and add VAT ID
Go to shopping cart
EXPECTED RESULTS:
Tax shouldn't be added as customer group is changed to 'Valid VAT ID - Intra-Union' that has no tax rules assigned
ACTUAL RESULTS:
Tax is added





### Testing

<!--- ENGCOM-3036-->*

Allow usage of config-global.php when running Integration Tests 

When running Integration Tests (bin/magento dev:tests:run integration), you will need to customize a couple of files to properly setup the testing environment. Part of this procedure is customizing the phpunit.xml which also defines a file TESTS_GLOBAL_CONFIG_FILE (pointing to either etc/config-global.php or etc/config-global.php.dist). However, configuration files defined in this TESTS_GLOBAL_CONFIG_FILE never end up in the sandbox environment. This issue was also encountered in another issue #15196



A simple example: I don't use the Vertex_Tax-module so I have disabled it, but now my integration test suite is failing because some interceptors of this module expect some data to be populated:



*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18201](https://github.com/magento/magento2/pull/18201)*. [GitHub-15196](https://github.com/magento/magento2/issues/15196)

<!--- ENGCOM-3293-->*
Fixed invalid unit tests annotations that assert exception messages. With these changes, unit tests will assert exception messages correctly



 [GitHub-6731](https://github.com/magento/magento2/issues/6731)


### Theme

<!--- ENGCOM-3296-->*

Fixes theme header logo and icon upload
With the change of "fileuploader" to "imageuploader" the correct formElement was not updated to match the new "imageuploader".



*Fix submitted by [Wiard van Rij](https://github.com/wiardvanrij) in pull request [18851](https://github.com/magento/magento2/pull/18851)*. [GitHub-18688](https://github.com/magento/magento2/issues/18688)


<!--- MAGETWO-91723-->* The text attribute implemented on the product page within the mobile theme now fluidly displays the entire text value. Previously, long values were truncated.  



<!--- MAGETWO-95805-->* The user agent rule now sets correct templates for product pages. Previously, the `footer.phtml` and `absolute_footer.phtml` templates were loaded from the desktop theme instead of the mobile theme, regardless of the user agent.

<!--- MAGETWO-91651-->* We've improved the display of the navigation menu on mobile deployments. Previously, Magento displayed only a portion of any submenu accessed from a top menu. 


<!--- MAGETWO-91756-->* 

<!--- MAGETWO-560941-->* 


### Translation and locales

<!--- ENGCOM-3423, 3375-->* 

Child theme does not inherit translations from parent theme
Theme inheritance does not work as expected with translation dictionaries. The child theme does not use any translations defined in it's parent theme's en_US.csv translation dictionary.




*Fix submitted by [Vladyslav Podorozhnyi](https://github.com/vpodorozh) in pull request [19018](https://github.com/magento/magento2/pull/19018) and  [19144](https://github.com/magento/magento2/pull/19144)*. [GitHub-17833](https://github.com/magento/magento2/issues/17833)


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


<!--- ENGCOM-3461-->* 
Adds locale for Swedish (Finland).



*Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [19203](https://github.com/magento/magento2/pull/19203)*. [GitHub-13095](https://github.com/magento/magento2/issues/13095)


<!--- ENGCOM-3345-->* 
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


<!--- ENGCOM-3381-->* 

WYSIWYG unable to set default value in ui component

Fix default value for wysiwyg component.


Steps to reproduce
Create a form uicomponent
Create a wysiwyg editor field
Add a default value
Expected result
The default value should be used when no value is set. This works properly for other fields like textarea's etc.
Actual result
The default value is not used. Editor is empty

*Fix submitted by [Oleksandr Miroshnichenko](https://github.com/omiroshnichenko) in pull request [19048](https://github.com/magento/magento2/pull/19048)*. [GitHub-10048](https://github.com/magento/magento2/issues/10048)



<!--- ENGCOM-3330-->* 

Fixed-Global-search icon misaligned 

1.Login to admin panel
2.click on global search



*Fix submitted by [Kajal Solanki](https://github.com/speedy008) in pull request [18940](https://github.com/magento/magento2/pull/18940)*. [GitHub-18913](https://github.com/magento/magento2/issues/18913)


<!--- ENGCOM-3037-->* 

currency symbol setting back to default
Currency symbol cannot be changed back to default value from admin panel in Single-store mode
Set "Enable Single-Store Mode" to Yes" in Stores -> Configuration -> General -> Single-Store Mode fieldset
Steps to reproduce
Login to Admin Panel
Go to Stores -> Currency Symbols
Change any currency symbol value
Save Currency Symbols
Change currency symbol back to the default value (or check "Use Standard" checkbox)
Save Currency Symbols

Expected result
Currency Symbol is set back to the default value

Actual result
A success message is shown, but currency symbol is not changed back to the default value



*Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [18204](https://github.com/magento/magento2/pull/18204)*. [GitHub-17567](https://github.com/magento/magento2/issues/17567)


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


<!--- MAGETWO-91751-->* 




### URL rewrites

<!--- MAGETWO-95539-->* 

The storefront now properly displays the order of categories when you move categories in the Admin. Previously, 


Moving Category generate duplicate url_rewrite when 4th level category exist and is translated

EXPECTED RESULTS:
Categories should be moved without any errors in the admin and the frontend should show the current order of categories without any errors

ACTUAL RESULTS:
If you didn't clear cache and you kept your frontend open from when you were checking it earlier with the French storeview, everything looks fine. But if you cleared cache or you switch from the French storeview to the default storeview, it will show an error



<!--- MAGETWO-91531-->* 

Some products use Categories Path for Product URLs

ISSUE:
Some products are showing the category path for product URLs 
Use Categories Path for Product URLs in stores>configuration>catalog>search engine optimization is set to "no"

ACTUAL RESULT: order of records in DB affects URLs on the frontend and ignores configuration in Admin

EXPECTED RESULT: URLs should use only configuration in Admin and not related to DB records order




### Visual Merchandiser

<!--- MAGETWO-91602-->* Visual Merchandiser now correctly sorts configurable product prices in Tile view.



### Web API

<!--- MAGETWO-96331-->* When using the `POST V1/products` endpoint to create a product with a name that already exists, Magento no longer returns the error `"URL key for specified store already exists."`.  Instead, Magento creates a unique URL key for the product. This is the same behavior as when a merchant creates a product with a name that's in use from the Admin UI.


<!--- MAGETWO-70532-->* The response for  `GET V1/orders/:orderId` now contains `bundle_option` and `product_option` information as expected.


<!--- MAGETWO-69021-->* 



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

<!--- MAGETWO-91667-->* 



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



