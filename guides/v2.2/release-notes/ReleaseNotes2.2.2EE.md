---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento Commerce 2.2.2 Release Notes
menu_title: Magento Commerce 2.2.2 Release Notes
menu_order: 296
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/ReleaseNotes2.2.2EE.md
---
*Patch code and release notes published on , 2017.* 


We are pleased to present Magento Commerce 2.2.2. This release includes new tools and numerous functional fixes and enhancements, plus a substantial number of contributions from the wider Magento community.


## Highlights

Look for the following highlights in this release:

* Significant new features that streamline the customer experience and provide merchamts with greater insight into their online business.

* Numerous fixes and enhancements to core features, including significant improvements to the payment process. 

* Over one hundred community-submitted bug fixes and multiple pull requests.


### New Features

* **Streamlined Instant Purchase checkout**. Our new streamlined Instant Purchase option uses previously-stored payment credentials and shipping information to bypass steps in the checkout process. 


* **Integrated dotmailer marketing automation software**. Magento is one of the first ecommerce solutions to include the dotmailer marketing automation with their core product. See http://docs.magento.com/m2/ce/user_guide/marketing/dotmailer.html 


* **Advanced Reporting powered by Magento Business Intelligence**. Access easy-to-use order, product, and customer reports right from the Magento Admin to gain new insights and enable data-driven decision making. See [Advanced Reporting](http://docs.magento.com.guides/v2.2/advanced-reporting/overview.html) for more information. 

* **Magento Shipping**. This new feature provides integrated advanced multi-carrier shipping and fulfillment. 

Looking for more information on these new features as well as many others? Check out [Magento 2.2 Developer Documentation](http://devdocs.magento.com/guides/v2.2/).


## Fixes and enhancements

* **Significant enhancements for payment methods**. We've added support for the Indian Rupee (INR) to PayPal Express Checkout as well as a fix for an issue where some Braintree refunds did not work. 

* **Improvements to multi-storeview sites**. Switching store views multiple times no longer results in an error on the storefront. 

* **New functionality for the command-line interface**. We've added interactivity to the `admin:user:create` command and Added ability to handle CLI setup interactively (with prompts).

* You can now the **Enter** key (in addition to a mouse click) to  search tables in the Admin.

* Magento no longer creates duplicate shipments when merchants create shipments with bundled products via API. 



## Fixed issues

### Installation, setup, and deployment

<!--- MAGETWO-82747 -->* We've increased the `memory_limit` of the `.user.ini` files to 2GB. [GitHub-11322](https://github.com/magento/magento2/issues/11322)

<!--- MAGETWO-72301 -->* The contents of the `js-translation.json` files are now correct when you deploy static content with multiple locales.

<!--- MAGETWO-81  -->* We've added a new CLI command to enable and disable the Magento Profiler. [GitHub-9277](https://github.com/magento/magento2/issues/9277)


<!--- MAGETWO-80205 -->* All cron dates are now  saved in a single format and displayed accordingly to user preference/needs. [GitHub-4237](https://github.com/magento/magento2/issues/4237)

<!--- MAGETWO-80209 -->* Static versioning and minification no longer  break email font styles. [GitHub-8241](https://github.com/magento/magento2/issues/8241)

<!--- MAGETWO-82595 -->* You can now successfully upgrade from from 2.1.x to 2.2.0. Previously, when you tried to upgrade from 2.1.9 to 2.2.0, Magento displayed the  "postcode is a required field" error message, and `setup:upgrade` failed. [GitHub-11095](https://github.com/magento/magento2/issues/11095)


### Advanced reporting
<!--- MAGETWO-71458 -->* As Magento Advanced Reporting service provider, I want Advanced Reporting service to be subscribed to by default for all Magento installation, so that user can start using Advanced Reporting service as soon as possible EE ONLY

<!--- MAGETWO-80350 -->* As a Magento developer, I want to investigate a splash screen can be created in magento, so that new features information in a release and advanced reporting splash screen can be embedded in this splash screen.

<!--- MAGETWO-71459 -->* As a Magento Administrator, I want to be able to see a concise description of the new features available after a Magento new installation or upgrade so that I can quickly and easily access new features.


<!--- MAGETWO-83540 -->* The Admin dashboard's Most Viewed Products Tab only gives default attribute set's products.  In magento admin dashboard no products are showing in most viewed product grid if all product are in different attribute sets (not in default attribute set), even with magento sample data this grid is always displaying "We couldn't find any records.". [GitHub-9768](https://github.com/magento/magento2/issues/9768)




### Catalog 
<!--- MAGETWO-83498 -->* You can now enter strings that exceed 255 characters in Admin or frontend input fields. Previously, Magento  saved only the first 255 characters of a long input string. [GitHub-6238](https://github.com/magento/magento2/issues/6238)

<!--- MAGETWO-83477 -->* Magento now renders color attribute swatches correctly for the search result page if sorting for color attribute is enabled. [GitHub-10628](https://github.com/magento/magento2/issues/10628)

<!--- MAGETWO-83174, 83169 -->* The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in catalog_product_entity table. It no longer loads quote items with non-existing products. 

<!--- MAGETWO-83085 -->* Magento no longer duplicates attribute option values. Previously, Magento did not confirm the uniqueness of an attribute option value if you created it using REST. [GitHub-8846](https://github.com/magento/magento2/issues/8846)

<!--- MAGETWO-83066 -->* Magento now saves the correct background color for images. Previously, product images always had a black background when using the Luma theme. [GitHub-8799](https://github.com/magento/magento2/issues/8799)

<!--- MAGETWO-83036 -->* You can now save a product custom option price with a value of 0 (zero) by simply not entering a price. [GitHub-4808](https://github.com/magento/magento2/issues/4808)

<!--- MAGETWO-82972 -->* You can now assign products to categories if those products are already assigned to the category tree. [GitHub-8970](https://github.com/magento/magento2/issues/8970)

<!--- MAGETWO-82946 -->* The `apply_to` setting for attributes is no longer hard-coded. [GitHub-7225](https://github.com/magento/magento2/issues/7225)
<!--- MAGETWO-82755 -->* The add-to-cart checkboxes in Related Products are no longer visible on the storefront. [GitHub-6891](https://github.com/magento/magento2/issues/6891)

<!--- MAGETWO-83627 -->* You can now successfully save and duplicate a simple product. Previously, when you clicked the Save & Duplicate" option for an existing simple product in the Catalog Manager, Magento did not duplicate the product, but threw an error. [GitHub-11532](https://github.com/magento/magento2/issues/11532)


### Cart and checkout

<!--- MAGETWO-83476 -->* You can now view the **Products in cart** report if the cart contains a bundle or a grouped product. Previously, when you viewed the Products in cart report, Magento threw an exception under these conditions. [GitHub-12079](https://github.com/magento/magento2/issues/12079)

<!--- MAGETWO-83194 -->* Magento now recognizes zip codes without spaces for addresses located in the Netherlands. [GitHub-11898](https://github.com/magento/magento2/issues/11898)

<!--- MAGETWO-83780 -->* Addresses with a value of 0 in `saveInAddressBook` are no longer added to the address book for new customers. Previously, if you placed an order as a guest and set the `save_in_address_book` for an address on 0, that address was still copied to the customer address book when registering as a new customer on the checkout success page. [GitHub-7691](https://github.com/magento/magento2/issues/7691)

<!--- MAGETWO-82724 -->* Magento now accepts coupon codes with special characters during checkout. [GitHub-9763](https://github.com/magento/magento2/issues/9763)

<!--- MAGETWO-82057 -->* We've improved cache control headers.


### Configurable products

<!--- MAGETWO-83489 -->* Magento\ConfigurableProduct\Model\Product\Type\Configurable:::loadUsedProducts no longer ignores array keys that are returned by product collections. [GitHub-11880](https://github.com/magento/magento2/issues/11880)


### Frameworks

#### Web API framework
<!--- MAGETWO-83095 -->* We've added an API that permits you to use REST to reset a customer password. 

#### App framework

<!--- MAGETWO-83024 -->* Magento now correctly handles all meta keywords and description in categories and in every product in locales that use non-Latin characters. [GitHub-10682](https://github.com/magento/magento2/issues/10682)

<!--- MAGETWO-82851 -->* You can now include negative values in an XML export file and open the file with Office XML handler. Previously, the export files did not open correctly, and an Office XML handler error log was created.  [GitHub-11729](https://github.com/magento/magento2/issues/11729)

#### Configuration framework

<!--- MAGETWO-82887 -->* The X-Magento-Tags header can now contain containing white space. [GitHub-7640](https://github.com/magento/magento2/issues/7640)

#### Session framework
<!--- MAGETWO-84106 -->* We've removed the 30-second timeout limit for the session locking mechanism when Redis is used for session storage.




### General

<!--- MAGETWO-83495 -->* After logging in customer is now not redirecting to Customer Dashboard by default 
Expected result

after signing in, user should redirected to checkout page, as he want this before signing in

Actual result

will be returned to homepage

[GitHub-10834](https://github.com/magento/magento2/issues/10834)


<!--- MAGETWO-83741 -->* 

Sending emails from Admin in Multi-Store Environment defaults to Primary Store

Expected result

Should send email using FROM EMAIL and FROM NAME of store XYZ.com
Actual result

Magneto sends correct email content, but FROM EMAIL and FROM NAME are both from the primary store ABC.com instead of the store the customer used, XYZ.com. Creates confusion for customer as the FROM information is not the store from which they placed the order. Happens on any email resent from admin--confirmation, shipping, credit, etc.


Email




<!--- MAGETWO-83281 -->* XHTML templates Don't Use Schema URNs

[GitHub-6661](https://github.com/magento/magento2/issues/6661)



<!--- MAGETWO-83279 -->* Magento 2.2.0 Solution for Cross-sell product placeholder image size. Cross-sell product placeholder image size

In a cart page cross-sell product placeholder image size is too much small. Its size should be displayed same like Product listing page placeholder image.

[GitHub-12017](https://github.com/magento/magento2/issues/12017)




<!--- MAGETWO-83270 -->* "Something Went Wrong" error for limited access admin user

When user has access to Dashboard and don't has access to notification, error "something went wrong" appears, because ajax request try to get notifications, but magento try to redirect to "noroute".

Steps to reproduce

Login as an admin user with limited access
Something went wrong error pops up after every page load
Server Logs and Magento Logs don't record any errors
Expected result

Logs should point to the error.

If it is ajax request don't redirect anyway, simple return nothing.

[GitHub-11700](https://github.com/magento/magento2/issues/11700)

<!--- MAGETWO-82710 -->* 

Download back-up .tgz always takes the latest that's created

Steps to reproduce

Create several back-ups
Click on a backup (.tgz), different then the latest to download
Expected result

I would expect the backup I clicked.

[GitHub-10032](https://github.com/magento/magento2/issues/10032)




<!--- MAGETWO-82809 -->* 
Fix datetime type product that show current date when is empty in grids 

Fix datetime type product that show current date when is empty in grids #11636
In the product grid, when a date attribute is listed and the value was empty, the current date was displayed. This was very confusing because I did not know if the value was assigned or not. Now you can see empty cells when is unassigned

[GitHub-11636](https://github.com/magento/magento2/issues/11636)
[GitHub-9869](https://github.com/magento/magento2/issues/9869)


<!--- MAGETWO-83281 -->* 

Improve urn in xhtml 

Improve the urn of xhtml templates



[GitHub-6661](https://github.com/magento/magento2/issues/6661)

<!--- MAGETWO-83278 -->* 

Add validation for number of street lines

Shipping address lines dissapear when street_lines on customer configuration is set to 0.

Steps to reproduce

1.Go into Customer Screen to change the number of address lines required at checkout. Leave it blank for default of 2.
2. Save
3. Clear Cache

Expected result

there should be the default of 2 lines
Actual result

At checkout there are no lines for street address.

[GitHub-7995](https://github.com/magento/magento2/issues/7995)
GENERAL

<!--- MAGETWO-83277 -->* 
Magento 2 Store Code validation regex: doesn't support uppercase letters in store code
Magento 2 Store Code validation regex: doesn't support uppercase letters in store code

Steps to reproduce

Go to stores > all stores
Create Store View
Attempt to create a store code with uppercase letters
Expected result

It should work, or give an error message
Actual result

You get an error message back saying




[GitHub-11996](https://github.com/magento/magento2/issues/11996)

<!--- MAGETWO-83279 -->* 

Solution for Cross-sell product placeholder image size 





[GitHub-12017](https://github.com/magento/magento2/issues/12017)

Theme

<!--- MAGETWO-83277 -->* Magento 2 Store Code validation regex: doesn't support uppercase letters in store code. 
Magento 2 Store Code validation regex: doesn't support uppercase letters in store code

Expected result

It should work, or give an error message
Actual result

You get an error message back saying
[GitHub-11996](https://github.com/magento/magento2/issues/11996)

STORE

<!--- MAGETWO-83270 -->* 

"Something Went Wrong" error for limited access admin use

Steps to reproduce

Login as an admin user with limited access
Something went wrong error pops up after every page load
Server Logs and Magento Logs don't record any errors
Expected result

Logs should point to the error.


[GitHub-11700](https://github.com/magento/magento2/issues/11700)

<!--- MAGETWO-82651 -->* 

<![CDATA[]]>in system.xml translate phrase not work, if comment starts from new line.

[GitHub-7767](https://github.com/magento/magento2/issues/7767)


Translation


<!--- MAGETWO-82652 -->* 

customer objects are equal to eachother after observing event customer_save_after_data_object
Steps to reproduce

Log in with existing user in frontend.
Change first name of customer to 'test35'.
Observe the event 'customer_save_after_data_object'. Two objects are given called : 'orig_customer_data_object' & 'customer_data_object'.
Those two objects are identical to each other. First name in both objects is equal to 'test35'
Expected result

'customer_data_object' firstname should not be equal to 'orig_customer_data_object'
Actual result

orig_customer_data_object and customer_data_object are equal to each other
Screenshot here: http://imgur.com/a/IDV1t
This also happens with last name and email. 

[GitHub-7915](https://github.com/magento/magento2/issues/7915)


<!--- MAGETWO-82658 -->* internal only

Removed Typo in Paypal TestCase didgit => digit


[GitHub-7591](https://github.com/magento/magento2/issues/7591)

FUNCTIONAL TESTS

<!--- MAGETWO-82761 -->* 

Dashboard Fix Y Axis for range

Y-axis on dashboard graph always shows range 0 to 100 in steps of 10. That means quantity and amounts do not match actual value in graph.

Steps to reproduce

Make few orders and look at the graph in admin dashboard
Expected result

Values shown should be matched with y-axis value
Actual result

It always show range 10 to 100 in steps of 10 and values (qty and amounts) doesn't make sense with that values



<!--- MAGETWO-83023 -->* 

Resolve Error While Trying To Load Quote Item Collection Using Magento
[GitHub-8954](https://github.com/magento/magento2/issues/8954)


<!--- MAGETWO-82634 -->* 

Update .htaccess.sample to replace FollowSymLin…


[GitHub-10811](https://github.com/magento/magento2/issues/10811)

Web Server Configuration


<!--- MAGETWO-82645 -->* Moved Customer Groups Menu Item from Other settings to Customers


<!--- MAGETWO-82810 -->* 

Fix label to avoid wrapping poorly,now break by word

Some long labels break by letter, that was a UX problem to some users and confusiing. I've edited a styless-old.less to fix it.


[GitHub-711727](https://github.com/magento/magento2/issues/711727)

[GitHub-77099](https://github.com/magento/magento2/issues/77099)

DASHBOARD


### Import/export

<!--- MAGETWO-83322 -->* Replace fetchOne() in loop with getting product ids from protected property oldSku, which has all necessary information when attributes begin to save, in Magento/CatalogImportExport/Model/Import/Product::saveProductAttributes() to increase efficiency during product import.

Product import is not fetching relation between products sku and entity_id efficiently when inserting attributes data.

Expected result

All relations are loaded using one query per bunch
Actual result

Relations are loaded one by one (multiple times for multiple attributes types)

[GitHub-10920](https://github.com/magento/magento2/issues/10920)




<!--- MAGETWO-83322 -->* 

Sku => Entity_id relations are fetched inefficiently when inserting attributes values during product import.

Replace fetchOne() in loop with getting product ids from protected property oldSku, which has all necessary information when attributes begin to save, in Magento/CatalogImportExport/Model/Import/Product::saveProductAttributes() to increase efficiency during product import.

Steps to reproduce

Run import of products from sample csv
Expected result

All relations are loaded using one query per bunch
Actual result

Relations are loaded one by one (multiple times for multiple attributes types)

[GitHub-10920](https://github.com/magento/magento2/issues/10920)

ImportExport

<!--- MAGETWO-82886 -->* 

When importing products using the System -> Import Products feature, if there problems importing the images, Magento just fails 


[GitHub-4711](https://github.com/magento/magento2/issues/4711)




<!--- MAGETWO-82956 -->* 

Report error csv doesn't work when trying to import a csv file with semicolon delimiter.

Expected result

Import is stopped and all errors are printed.
We can download the report error csv file.
Actual result

Import is stopped but only General system exception happened is printed.
We cannot download the report error csv file because the link doesn't appear.

[GitHub-5015](https://github.com/magento/magento2/issues/5015)





### Indexing
<!--- MAGETWO-80188 -->* Prevent change log entry when nothing has changed [GitHub-4893](https://github.com/magento/magento2/issues/4893)

  



### Newsletters


<!--- MAGETWO-83286 -->* Fix newsletter subscriptions between stores

When user have different accounts in two or more stores newsletter table save the subscription status, store_id and customer_id.
The problem is that when we try to update this information the query result don't keep in mind the store of the user.

Extra info

When looking in the newsletter_subscriber table, instead of there being one record for each customer per store, there's one global record. When customer 1 in store A updates, the store_id in newsletter subscriber is updated to store A's ID. When customer 2 in store B updates, the store_id in newsletter_subscriber is updated to store B's ID.

[GitHub-10014](https://github.com/magento/magento2/issues/10014)



<!--- MAGETWO-83257 -->* Newsletter Subscriber create-date not set, and change_status_at broken

Newsletter Subscriber create-date not set, and change_status_at broken

adds new method beforeSave for Subscriber abstract model if data has changed for `subsriber_status`

Register new subscriber from footer
Go to Admin -> Marketing -> Newsletter Subscribers -> select customer and choose "Unsubscribe" action
2. Registered customer
login as existing customer
go to Account Dashboard -> Newsletters -> "check" or "uncheck" checkbox
save


Register new subscriber from footer
Go to Admin -> Marketing -> Newsletter Subscribers -> select customer and choose "Unsubscribe" action
2. Registered customer
login as existing customer
go to Account Dashboard -> Newsletters -> "check" or "uncheck" checkbox
save

[GitHub-4004](https://github.com/magento/magento2/issues/4004)



<!--- MAGETWO-83286 -->* 

When a customer with the same email address has an account on different multi stores in the same Magento installation, changes to the newsletter subscription in one account affect the other.


Steps to reproduce

Login with customer 1 in store A, go to My Account -> Newsletter Subscriptions, and make sure he's subscribed to the general newsletter
Login with customer 2 in store B, go to My Account -> Newsletter Subscriptions, and make sure he's subscribed to the general newsletter
Unsubscribe customer 1 from the newsletter
Refresh the page for customer 2
Expected result

Customer 1 is unsubscribed
Customer 2 is subscribed
Actual Result

Customer 1 is unsubscribed
Customer 2 is unsubscribed

[GitHub-10014](https://github.com/magento/magento2/issues/10014)

When user have different accounts in two or more stores newsletter table save the subscription status, store_id and customer_id.
The problem is that when we try to update this information the query result don't keep in mind the store of the user.


Newsletter

<!--- MAGETWO-83257 -->* 


Newsletter Subscriber create-date not set, and change_status_at broken


This PR adds new method beforeSave for Subscriber abstract model if data has changed for `subsriber_status`


Expected result

After creation set change_status_at to creation date (confirmation of email if enabled, or just registration time if no confirmation email is sent).
change_status_at is set to when user is subscribed.
Expect change_status_at to contain the date of the status change.
Actual result

I want to sync new newsletter subscribers, so I expect a datetime to filter on, to get new newsletter subscribers. This is not set.
change_status_at is null. It would be nice if this were initialized to the registration date.
User is unsubscribed, status 3, but change_status_at remains null. Integration can't detect user is unsubscribed now.

[GitHub-4004](https://github.com/magento/magento2/issues/4004)


Newsletter









### Orders

<!--- MAGETWO-83271 -->* Order relation child is not set during edit operation
[GitHub-10195](https://github.com/magento/magento2/issues/10195)


<!--- MAGETWO-83271 -->* 
Order relation child is not set during edit operation

Steps to reproduce

Create an order
Edit the order through admin panel
Check relation_child_idand relation_child_real_id fields of the old order.
Expected result

relation_child_idand relation_child_real_id fields are set to the IDs of the new order.
Link to the new order is displayed on old order's admin page
Actual result

Fields are null in the database
Link to the new order is not displayed on old order's admin page


[GitHub-10195](https://github.com/magento/magento2/issues/10195)





<!--- MAGETWO-83174 -->* "Add Products" button has been duplicated after the customer group was changed. 

"Add Products" button has been duplicated after the customer group was changed

Steps to reproduce

Login to admin panel
Go to: Sales - Orders - Create New Order
Select existing customer or create new
Change customer group
Expected result

Button "Add products" ("Add Products", "Add Products By SKU" on EE) should not duplicated.
Actual result

Button "Add products" ("Add Products", "Add Products By SKU" on EE) has been duplicated.
[GitHub-11868](https://github.com/magento/magento2/issues/11868)


<!--- MAGETWO-83084 -->* 

Order grid - Sort by Purchase Date Desc by default
New Orders are not in Order grid after data migration from M 1.7.0.2 to M 2.1.7
As a customer I expect to see new orders at the top of the grid, however during migration from M1 to M2 - order number length changed, as result new orders are NOT located at the top of grid.

[GitHub-10185](https://github.com/magento/magento2/issues/10185)






<!--- MAGETWO-83668 -->* 

Uncaught Error: Call to a member function addItem() on array in app/code/Magento/Sales/Model/Order/Shipment.php(backport to 2.2)


[GitHub-8022](https://github.com/magento/magento2/issues/8022)



<!--- MAGETWO-83745 -->* 

Create order (on Customer edit page) - not working from admin environment


[GitHub-11832](https://github.com/magento/magento2/issues/11832)


<!--- MAGETWO-82953 -->* 

Reference to wrong / non-existing class

Steps to reproduce

In the method Magento\Sales\Model\Order\Pdf\Invoice::getPdf comment out the call to $this->insertOrder(
Go to the backend and print an invoice
Expected result

I should see the invoice without the order details
Actual result

I get a fatal error because the class Zend_Pdf_Color_RGB is not found in the drawHeader method.


[GitHub-11581](https://github.com/magento/magento2/issues/11581)






<!--- MAGETWO-83174 -->* 

"Add Products" button has been duplicated after the customer group was changed. 


 "Add Products" button has been duplicated after the customer group was changed

 Steps to reproduce

Login to admin panel
Go to: Sales - Orders - Create New Order
Select existing customer or create new
Change customer group
Expected result

Button "Add products" ("Add Products", "Add Products By SKU" on EE) should not duplicated.
Actual result

Button "Add products" ("Add Products", "Add Products By SKU" on EE) has been duplicated.

[GitHub-11868](https://github.com/magento/magento2/issues/11868)




### Payment methods
<!--- MAGETWO-71966 -->* Now, Braintree payment method can be used for different merchant accounts per different website from Admin Panel. When using two Braintree accounts for two separate websites, refund processing in Admin Panel does not process correctly and gives the following error on the frontend:
"Sorry, but something went wrong"
The error above is shown when you try and process a refund for an order that is not from the website currently set to default in stores>all stores
Example: website A is set to default and you try to refund the order made on website B
A different error is given when trying to refund an order that was made on the website that is currently set to default in stores>all stores
Example: website A is set to default and you try to refund the order made on website A
"Transaction has been declined. Please try again later."


<!--- MAGETWO-82732 -->* Magento PayPal integration now supports the Indian Rupee currency (INR)


### Reports

<!--- MAGETWO-83197 -->* 

Magento2.1.5 admin shipping report shows wrong currency code
admin shipping report shows wrong currency code

[GitHub-11793](https://github.com/magento/magento2/issues/11793)



<!--- MAGETWO-83197 -->* 

Magento2.1.5 admin shipping report shows wrong currency code
admin shipping report shows wrong currency code

[GitHub-11793](https://github.com/magento/magento2/issues/11793)






<!--- MAGETWO-83476 -->* 

Products in cart report error when we have grouped or bundle product

Changed inner join with left join for prices because bundle and grouped products don't have prices and report generates error if we have them in cart.

Steps to reproduce

Add a grouped or a bundle product to cart. Go to admin->Reports->Marketing->Products in cart and loop through pages or export to csv/excel.

Expected result

Should see the Products in cart report or download csv/xml

Actual result

Exception #0 (Exception): Notice: Undefined offset: [productId] in vendor/magento/module-reports/Model/ResourceModel/Quote/Item/Collection.php on line 222

Reports

[GitHub-12079](https://github.com/magento/magento2/issues/12079)

### SalesRule

<!--- MAGETWO-83033 -->* 

Fix missing discount label in checkout
Expected result

rule label= "May Promo 3% discount -$58.35"
Actual result

i see "discount -$58.35" instead of rule label


[GitHub-11497](https://github.com/magento/magento2/issues/11497)


<!--- MAGETWO-70323 -->* 

Bundle product with a zero-price simple product as option no longer causes error on storefront when added to cart.


[GitHub-8969](https://github.com/magento/magento2/issues/8969)

SalesRule



### Search


<!--- MAGETWO-83477 -->* Color attribute swatches are not rendered correctly for the search result page if sorting for color attribute is enabled.

Color attribute swatches are not visible if sorting is enabled 
If we added attribute to Used for Sorting in Product Listing it tried to cache it while making custom query. So the attribute don't has all needed parameters. Now we cache such attributes with all additional data.

[GitHub-10628](https://github.com/magento/magento2/issues/10628)



<!--- MAGETWO-82904 -->* 

 Magento\Search\Helper\getSuggestUrl() not used in search template.

 Expected result

the custom URL should be used
Actual result

the default "search/ajax/suggest" URL is used


[GitHub-6802](https://github.com/magento/magento2/issues/6802)





<!--- MAGETWO-80203 -->* Eliminated Asymmetric Transaction Error with ElasticSearch.


### Shipping

<!--- MAGETWO-83272 -->* 

Blank page at the checkout 'shipping' step
[GitHub-11197](https://github.com/magento/magento2/issues/11197)


Steps to reproduce

Add any product to the cart as a guest user
Proceed to the checkout
Fill address and customer data
Proceed to the payment step
Click 'Shipping' in the progress bar to return to the shipping step
Click next and proceed again to the payment step
Click 'back' button in the browser
Expected result

The customer is redirected to shipping step and is able to change address data.
Actual result

The shipping step (page) is blank.



<!--- MAGETWO-83278 -->* Shipping address lines dissapear when street_lines on customer configuration is set to 0.
Fixed

If you leave as default, shipping lines disappear


[GitHub-7995](https://github.com/magento/magento2/issues/7995)



<!--- MAGETWO-83197 -->* 

Magento2.1.5 admin shipping report shows wrong currency code. 
Create a single website with multi-store views (2 stores).
2. Go to Stores-Configuration->General->Currency Setup->Currency Options and set it up to show USD currency for the 1 store, and EUR currency (as an example) for the second store.
3. Create 2 orders for each store (go to Sales->Orders), invoices and shippings for them.
4. Go to Admin->Reports->Sales->Shipping and set up the filters so you can see shipments for that orders you created earlier.
5. Currency must change depends on store.

admin shipping report shows wrong currency code

admin->Reports->Sales->Shipping

if i have switch to another store it is showing default currency only. the actual result should show the switched store currency only.



[GitHub-11793](https://github.com/magento/magento2/issues/11793)


<!--- MAGETWO-80191 -->* Correct base_shipping_discount_tax_compensation_amnt field.



### Sitemap
<!--- MAGETWO-83145 -->* Sitemap.xml: lastmod timestamp can contain invalid dates  [GitHub-9151](https://github.com/magento/magento2/issues/9151)



<!--- MAGETWO-83145 -->* 

Sitemap.xml: lastmod timestamp can contain invalid dates 

Expected result

The lastmod value in the xml should contain the created_at timestamp
Actual result

The lastmod value in the xml looks like this:
[GitHub-9151](https://github.com/magento/magento2/issues/9151)





### Swatches

<!--- MAGETWO-83290 -->* Adapt \Magento\Swatches\Model\Plugin\EavAttribute::setProperOptionsArray to make possible that the plugins afterSave in the same module doesn't delete data if they don't found this data with all the options data, as sent via adminhtml form.

Prevent loosing data and default value if data is not populated via adminhtml 

GitHub-10707, GitHub-10737, GitHub-11032, GitHub-9410



<!--- MAGETWO-82955 -->* 

FIX show visual swatches in admin - product attribute

Steps to reproduce

Go to Admin
Open Stores > Attributes > Product
Add New Attribute with Catalog Input Type for Store Owner: Visual Swatch
In Tab Manage Swatch (Values of Your Attribute) click Add Swatch button
Press to chose color or file
Expected result

Drop down menu is show all items


[GitHub-11534](https://github.com/magento/magento2/issues/11534)

Swatches

<!--- MAGETWO-83290 -->* 
Add swatch option: Prevent loosing data and default value if data is not populated via adminhtml 

Adapt \Magento\Swatches\Model\Plugin\EavAttribute::setProperOptionsArray to make possible that the plugins afterSave in the same module doesn't delete data if they don't found this data with all the options data, as sent via adminhtml form.

Impossible to add swatch options via Service Contracts if there is no existing swatch option for attribute




[GitHub-10707](https://github.com/magento/magento2/issues/10707)
[GitHub-10737](https://github.com/magento/magento2/issues/10737)
[GitHub-11032](https://github.com/magento/magento2/issues/11032)
[GitHub-9410](https://github.com/magento/magento2/issues/9410)

Swatches



### Taxes

<!--- MAGETWO-82753 -->* 

"Ignore this notification" isn't working 

Steps to reproduce

Set-up wrong tax settings
Message similar "To apply the discount on prices including tax and ..." will be display as system message.
Click on "ignore this notification"
Expected result

System message (ignoreTaxNotification) shouldn't be displayed in future because it's supposed to be ignored
Actual result

Message is displayed regardless of being on ignore list.

[GitHub-11365](https://github.com/magento/magento2/issues/11365)




### Varnish 

<!--- MAGETWO-83152 -->* Varnish configuration was updated














<!--- MAGETWO-82999 -->* 
Theme: Added html node to page xml root, cause validation error


[GitHub-11697](https://github.com/magento/magento2/issues/11697)


<!--- MAGETWO-82889 -->* 

[GitHub-8236](https://github.com/magento/magento2/issues/8236)


<!--- MAGETWO-82883 -->* Order status doesn't change in order grid  


[GitHub-11032](https://github.com/magento/magento2/issues/11032)
[GitHub-9410](https://github.com/magento/magento2/issues/9410)


<!--- MAGETWO-82562 -->* 
[GitHub-10168](https://github.com/magento/magento2/issues/10168)

<!--- MAGETWO-82537 -->* 
[GitHub-9944](https://github.com/magento/magento2/issues/9944)

<!--- MAGETWO-82463 -->* 
[GitHub-11586](https://github.com/magento/magento2/issues/11586)

<!--- MAGETWO-82431 -->* 
[GitHub-11540](https://github.com/magento/magento2/issues/11540)

<!--- MAGETWO-82426 -->* 

[GitHub-9919](https://github.com/magento/magento2/issues/9919)

<!--- MAGETWO-82426 -->* 
[GitHub-11453](https://github.com/magento/magento2/issues/11453)


<!--- MAGETWO-82426 -->* 
[GitHub-9919](https://github.com/magento/magento2/issues/9919)


<!--- MAGETWO-82338 -->* Store switching is not working every time  #11558

<!--- MAGETWO-82314 -->* 
[GitHub-10583](https://github.com/magento/magento2/issues/10583)


<!--- MAGETWO-82292 -->* 
[GitHub-10810](https://github.com/magento/magento2/issues/10810)


<!--- MAGETWO-82273 -->* 
[GitHub-11092](https://github.com/magento/magento2/issues/11092)

[GitHub-10824](https://github.com/magento/magento2/issues/10824)

<!--- MAGETWO-82179 -->* 
[GitHub-10301](https://github.com/magento/magento2/issues/10301)

<!--- MAGETWO-82177 -->* 

[GitHub-10301](https://github.com/magento/magento2/issues/10301)

<!--- MAGETWO-82004 -->* 
[GitHub-7678](https://github.com/magento/magento2/issues/7678)

<!--- MAGETWO-82001 -->* 
[GitHub-10996](https://github.com/magento/magento2/issues/10996)

<!--- MAGETWO-81995 -->* 

[GitHub-11140](https://github.com/magento/magento2/issues/11140)

<!--- MAGETWO-81994 -->* 
[GitHub-2991](https://github.com/magento/magento2/issues/2991)


<!--- MAGETWO-81993 -->* 
[GitHub-9783](https://github.com/magento/magento2/issues/9783)

<!--- MAGETWO-81977 -->* 
[GitHub-11469](https://github.com/magento/magento2/issues/11469)

[GitHub-11471](https://github.com/magento/magento2/issues/11471)

<!--- MAGETWO-81973 -->* 
[GitHub-9028](https://github.com/magento/magento2/issues/9028)

<!--- MAGETWO-81970 -->* 
[GitHub-5956](https://github.com/magento/magento2/issues/5956)

<!--- MAGETWO-81967 -->* 
[GitHub-10007](https://github.com/magento/magento2/issues/10007)

<!--- MAGETWO-81959 -->* 
[GitHub-10765](https://github.com/magento/magento2/issues/10765)

<!--- MAGETWO-81942 -->* 
[GitHub-11139](https://github.com/magento/magento2/issues/11139)

<!--- MAGETWO-81904 -->* 

[GitHub-11022](https://github.com/magento/magento2/issues/11022)

<!--- MAGETWO-80207 -->* 
[GitHub-10562](https://github.com/magento/magento2/issues/10562)


<!--- MAGETWO-81841 -->* 

<!--- MAGETWO-80311 -->* 

<!--- MAGETWO-72352 -->* You can now implement translations from themes (in contrast to translations from modules).
































<!--- MAGETWO-81989 -->* GitHub-11428 UNRESOLVED

<!--- MAGETWO-82464 -->* GitHub-6770 UNRESOLVED

<!--- MAGETWO-82635 -->* GitHub-7241 UNRESOLVED

<!--- MAGETWO-83494 -->* GitHub-9851 UNRESOLVED

<!--- MAGETWO-83147 -->* GitHub-5574 UNRESOLVED

<!--- MAGETWO-83143 -->* GitHub-9002 UNRESOLVED

<!--- MAGETWO-83252 -->* GitHub-6460 UNRESOLVED

<!--- MAGETWO-83252 -->* GitHub-6460 UNRESOLVED

<!--- MAGETWO-83494 -->* GitHub-9851 UNRESOLVED

<!--- MAGETWO-83147 -->* GitHub-5574 UNRESOLVED

<!--- MAGETWO-83143 -->* GitHub-9002 UNRESOLVED

<!--- MAGETWO-83030 -->* GitHub-7127 UNRESOLVED

<!--- MAGETWO-82957 -->* GitHub-9851 UNRESOLVED

<!--- MAGETWO-82950 -->* GitHub-10834 UNRESOLVED

<!--- MAGETWO-82856 -->* GitHub-10168 UNRESOLVED

<!--- MAGETWO-82818 -->* GitHub-7689 UNRESOLVED

<!--- MAGETWO-82787 -->* GitHub-11347 UNRESOLVED

<!--- MAGETWO-82758 -->* GitHub-10168 UNRESOLVED
<!--- MAGETWO-82635 -->* GitHub-7241 UNRESOLVED

<!--- MAGETWO-82536 -->* GitHub-9851 UNRESOLVED

<!--- MAGETWO-82536 -->* MAGETWO-82119 As a Magento developer, I want to investigate a splash screen can be created in magento, so that new features information in a release and advanced reporting splash screen can be embedded in this splash screen. UNRESOLVED

<!--- MAGETWO-82536 -->* MAGETWO-82236 GitHub-11328 UNRESOLVED

<!--- MAGETWO-82006 -->* GitHub-4848 UNRESOLVED

<!--- MAGETWO-81989 -->* GitHub-10941 UNRESOLVED


<!--- MAGETWO-81971 -->* GitHub-11350 GitHub-11356 UNRESOLVED

<!--- MAGETWO-83686 -->* GitHub-12081 UNRESOLVED

<!--- MAGETWO-83688 -->* GitHub-8172 GitHub-8089 GitHub-10507 UNRESOLVED

<!--- MAGETWO-83844 -->* GitHub-12188 UNRESOLVED

<!--- MAGETWO-83868 -->* UNRESOLVED

<!--- MAGETWO-83867 -->* UNRESOLVED

<!--- MAGETWO-83865 -->* UNRESOLVED










<!--- NOT NEEDED  MAGETWO-83834 MAGETWO-83815 MAGETWO-83783 MAGETWO-83755 MAGETWO-83740 MAGETWO-83682 MAGETWO-83672 MAGETWO-83632 MAGETWO-83621 MAGETWO-83600 MAGETWO-83572 MAGETWO-52974 MAGETWO-62981 MAGETWO-69497 MAGETWO-70725 MAGETWO-76052 MAGETWO-72138 MAGETWO-81987 MAGETWO-81901 MAGETWO-81886 MAGETWO-81830 MAGETWO-81307 MAGETWO-82003 MAGETWO-82117

MAGETWO-82754 MAGETWO-82814 MAGETWO-82854 MAGETWO-82367 MAGETWO-82444 MAGETWO-82535 MAGETWO-82577 MAGETWO-81990 MAGETWO-82001 MAGETWO-82058 MAGETWO-82109 MAGETWO-82300 MAGETWO-80738 MAGETWO-80908 MAGETWO-81445 MAGETWO-81306 MAGETWO-81113 MAGETWO-80781 MAGETWO-80342 MAGETWO-82288 MAGETWO-82283 MAGETWO-82234 MAGETWO-82102 MAGETWO-82069 MAGETWO-82003 MAGETWO-82552 MAGETWO-82707 MAGETWO-82675 MAGETWO-82665 MAGETWO-82577 MAGETWO-82535 MAGETWO-82444 MAGETWO-82367 MAGETWO-82339 MAGETWO-82300 MAGETWO-80188 

MAGETWO-82748 MAGETWO-82707 MAGETWO-83013 MAGETWO-82991 MAGETWO-82979 MAGETWO-82978 MAGETWO-82976 MAGETWO-82952 MAGETWO-82943 MAGETWO-83261 MAGETWO-83247 MAGETWO-83171 MAGETWO-83135 MAGETWO-83132 MAGETWO-83130 MAGETWO-83129 MAGETWO-83128 MAGETWO-83035 MAGETWO-83026 MAGETWO-83490 MAGETWO-83461 MAGETWO-83428 MAGETWO-83310 MAGETWO-83285 MAGETWO-83563
MAGETWO-83551 MAGETWO-83547 MAGETWO-83529 MAGETWO-83537 MAGETWO-83503 MAGETWO-83479 MAGETWO-83532 MAGETWO-83130 MAGETWO-83310 MAGETWO-83247 MAGETWO-83130 MAGETWO-83026 MAGETWO-83013 MAGETWO-82978 MAGETWO-82976 MAGETWO-82954 MAGETWO-82945 MAGETWO-82944 MAGETWO-82941 MAGETWO-82865 MAGETWO-82854 MAGETWO-82814 MAGETWO-82754 MAGETWO-82748 MAGETWO-82733 MAGETWO-83783 MAGETWO-83815 MAGETWO-83815 MAGETWO-83785 MAGETWO-83783 MAGETWO-83600 MAGETWO-70726 MAGETWO-80517 MAGETWO-80738 MAGETWO-80908 MAGETWO-81916 MAGETWO-81990 MAGETWO-82058 MAGETWO-84344 MAGETWO-84531
MAGETWO-84321 MAGETWO-84091 MAGETWO-84051 MAGETWO-84000 MAGETWO-83914 MAGETWO-83898 MAGETWO-83870 MAGETWO-83184 MAGETWO-83004 MAGETWO-82596
MAGETWO-82420 MAGETWO-80736 MAGETWO-72441 -->*  

<!--- WON'T FIX  MAGETWO-69032 MAGETWO-83275 MAGETWO-69032 MAGETWO-83005--> 

<!--- DUPLICATE  MAGETWO-82655 MAGETWO-82082--> 

<!--- CANNOT REPRODUCE  MAGETWO-82309 MAGETWO-82192--> 

<!--- CANCELED  MAGETWO-80190 MAGETWO-80189--> 

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
    <th>Contributing community member</th>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11240">11240</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/leptoquark1">David</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11261">11261</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9968" target="_blank">9968</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11342">11342</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11310" target="_blank">11310</a></td>
    <td><a target="_blank" href="https://github.com/denisristic">Denis Ristic</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11351">11351</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11332" target="_blank">11332</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11359">11359</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11383">11383</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11207" target="_blank">11207</a></td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11406">11406</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10795" target="_blank">10795</a></td>
    <td><a target="_blank" href="https://github.com/peterjaap">Peter Jaap Blaakmeer</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11430">11430</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10941" target="_blank">10941</a></td>
    <td><a target="_blank" href="https://github.com/slackerzz">Lorenzo Stramaccia</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11445">11445</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10007" target="_blank">10007</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11470">11470</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10231" target="_blank">10231</a></td>
    <td><a target="_blank" href="https://github.com/mrodespin">Marc Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11493">11493</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11199">11199</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11176" target="_blank">11176</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11299">11299</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11275" target="_blank">11275</a></td>
    <td><a target="_blank" href="https://github.com/lano-vargas">Juliano Vargas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11381">11381</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10441" target="_blank">10441</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11460">11460</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11140" target="_blank">11140</a></td>
    <td><a target="_blank" href="https://github.com/diglin">Sylvain Rayé</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11505">11505</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mpchadwick">Max Chadwick</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11437">11437</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10765" target="_blank">10765</a></td>
    <td><a target="_blank" href="https://github.com/convenient">Luke Rodgers</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11486">11486</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11495">11495</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9783" target="_blank">9783</a></td>
    <td><a target="_blank" href="https://github.com/diazwatson">Raul E Watson</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11500">11500</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7678" target="_blank">7678</a></td>
    <td><a target="_blank" href="https://github.com/kirmorozov">Kirill Morozov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11555">11555</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ishakhsuvarov">Ievgen Shakhsuvarov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11235">11235</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10824" target="_blank">10824</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11565">11565</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9919" target="_blank">9919</a></td>
    <td><a target="_blank" href="https://github.com/bap14">Brett</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11569">11569</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11317">11317</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5439" target="_blank">5439</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11385">11385</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10856" target="_blank">10856</a></td>
    <td><a target="_blank" href="https://github.com/joni-jones">Ievgen Sentiabov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11510">11510</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/cmuench">Christian Münch</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11499">11499</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10025" target="_blank">10025</a></td>
    <td><a target="_blank" href="https://github.com/joshuaswarren">Joshua Warren</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11522">11522</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10301" target="_blank">10301</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11553">11553</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/heldchen">Thomas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11561">11561</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11540" target="_blank">11540</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11591">11591</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11586" target="_blank">11586</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11057">11057</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6350" target="_blank">6350</a></td>
    <td><a target="_blank" href="https://github.com/joachimVT">Joachim Vanthuyne</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11439">11439</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11328" target="_blank">11328</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11673">11673</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7591" target="_blank">7591</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11675">11675</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7767" target="_blank">7767</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11704">11704</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11677">11677</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11676">11676</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7915" target="_blank">7915</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11250">11250</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10275" target="_blank">10275</a></td>
    <td><a target="_blank" href="https://github.com/romainruaud">Romain Ruaud</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11421">11421</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11022" target="_blank">11022</a></td>
    <td><a target="_blank" href="https://github.com/davidverholen">David Verholen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11440">11440</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5956" target="_blank">5956</a></td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11643">11643</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11635">11635</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10168" target="_blank">10168</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11637">11637</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9944" target="_blank">9944</a></td>
    <td><a target="_blank" href="https://github.com/briscoda">Paul Briscoe</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11710">11710</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9763" target="_blank">9763</a></td>
    <td><a target="_blank" href="https://github.com/gabrielqs-redstage">Gabriel Queiroz Silva</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11690">11690</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11157" target="_blank">11157</a></td>
    <td><a target="_blank" href="https://github.com/andrewhowdencom">Andrew Howden</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11720">11720</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/amenk">Alexander Menk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11734">11734</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11322" target="_blank">11322</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11751">11751</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7927" target="_blank">7927</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11745">11745</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7099" target="_blank">7099</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11749">11749</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9869" target="_blank">9869</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11765">11765</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/bentideswell">Ben Tideswell</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11410">11410</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11365" target="_blank">11365</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11607">11607</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11610">11610</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6891" target="_blank">6891</a></td>
    <td><a target="_blank" href="https://github.com/mrodespin">Marc Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11757">11757</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11729" target="_blank">11729</a></td>
    <td><a target="_blank" href="https://github.com/hauso">HausO</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11363">11363</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6924" target="_blank">6924</a></td>
    <td><a target="_blank" href="https://github.com/tim-bezhashvyly">Tim Bezhashvyly</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11425">11425</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/denisristic">Denis Ristic</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11767">11767</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7640" target="_blank">7640</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11779">11779</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4711" target="_blank">4711</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11827">11827</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4696" target="_blank">4696</a></td>
    <td><a target="_blank" href="https://github.com/bohemiorulo">Raul Encinas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11830">11830</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11581" target="_blank">11581</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11337">11337</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10908" target="_blank">10908</a>, <a href="https://github.com/magento/magento2/issues/11211" target="_blank">11211</a></td>
    <td><a target="_blank" href="https://github.com/thiagolima-bm">Thiago</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11458">11458</a></td>
    <td><a href="https://github.com/magento/magento2/issues/2991" target="_blank">2991</a></td>
    <td><a target="_blank" href="https://github.com/peterjaap">Peter Jaap Blaakmeer</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11595">11595</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10032" target="_blank">10032</a></td>
    <td><a target="_blank" href="https://github.com/PieterCappelle">Pieter Cappelle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11747">11747</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11534" target="_blank">11534</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11824">11824</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10291" target="_blank">10291</a></td>
    <td><a target="_blank" href="https://github.com/briscoda">Paul Briscoe</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11651">11651</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11095" target="_blank">11095</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11802">11802</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8236" target="_blank">8236</a></td>
    <td><a target="_blank" href="https://github.com/thiagolima-bm">Thiago</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11843">11843</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4808" target="_blank">4808</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11854">11854</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ByteCreation">bytecreation</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11397">11397</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9566" target="_blank">9566</a></td>
    <td><a target="_blank" href="https://github.com/michielgerritsen">Michiel Gerritsen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11732">11732</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5015" target="_blank">5015</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11829">11829</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10682" target="_blank">10682</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11933">11933</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11911">11911</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10185" target="_blank">10185</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11817">11817</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8970" target="_blank">8970</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11405">11405</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9028" target="_blank">9028</a></td>
    <td><a target="_blank" href="https://github.com/gabrielqs-redstage">Gabriel Queiroz Silva</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11858">11858</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11697" target="_blank">11697</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11869">11869</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8954" target="_blank">8954</a></td>
    <td><a target="_blank" href="https://github.com/neeta-wagento">@neeta-wagento</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11889">11889</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8799" target="_blank">8799</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11917">11917</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11949">11949</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11868" target="_blank">11868</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11959">11959</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11898" target="_blank">11898</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11620">11620</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11770">11770</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/euronetzrt">Euronet</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11863">11863</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12011">12011</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11996" target="_blank">11996</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12013">12013</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7995" target="_blank">7995</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11785">11785</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8846" target="_blank">8846</a></td>
    <td><a target="_blank" href="https://github.com/gomencal">gonzalopelon</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11993">11993</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11700" target="_blank">11700</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12018">12018</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12017" target="_blank">12017</a></td>
    <td><a target="_blank" href="https://github.com/emiprotech">Emipro Technologies</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11556">11556</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10583" target="_blank">10583</a></td>
    <td><a target="_blank" href="https://github.com/joni-jones">Ievgen Sentiabov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11879">11879</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4004" target="_blank">4004</a></td>
    <td><a target="_blank" href="https://github.com/nemesis-back">IvanK</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11588">11588</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7225" target="_blank">7225</a></td>
    <td><a target="_blank" href="https://github.com/MartinPeverelli">Martin Peverelli</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11958">11958</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11197" target="_blank">11197</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12091">12091</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lazyguru">Joe Constant</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12107">12107</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11880" target="_blank">11880</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11461">11461</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10811" target="_blank">10811</a></td>
    <td><a target="_blank" href="https://github.com/diglin">Sylvain Rayé</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11719">11719</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10920" target="_blank">10920</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11722">11722</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6802" target="_blank">6802</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11857">11857</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11902">11902</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9151" target="_blank">9151</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11947">11947</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tkotosz">Tibor Kotosz</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11962">11962</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11793" target="_blank">11793</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11988">11988</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10195" target="_blank">10195</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12031">12031</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6661" target="_blank">6661</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12082">12082</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12079" target="_blank">12079</a></td>
    <td><a target="_blank" href="https://github.com/mihaifaget">@mihaifaget</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12131">12131</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12139">12139</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9768" target="_blank">9768</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11914">11914</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6238" target="_blank">6238</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11944">11944</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mpchadwick">Max Chadwick</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12144">12144</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11230" target="_blank">11230</a></td>
    <td><a target="_blank" href="https://github.com/wexo-team">WEXO team</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11459">11459</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10810" target="_blank">10810</a></td>
    <td><a target="_blank" href="https://github.com/jonashrem">Jonas Hünig</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11968">11968</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/jalogut">Juan Alonso</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12061">12061</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/atishgoswami">Atish Goswami</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12136">12136</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ChuckyK">@ChuckyK</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11876">11876</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10834" target="_blank">10834</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11274">11274</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10477" target="_blank">10477</a></td>
    <td><a target="_blank" href="https://github.com/marinagociu">Marina Gociu</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11952">11952</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11832" target="_blank">11832</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12001">12001</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11532" target="_blank">11532</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12035">12035</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10014" target="_blank">10014</a></td>
    <td><a target="_blank" href="https://github.com/sbaixauli">Sergio Baixauli</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12077">12077</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10628" target="_blank">10628</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12130">12130</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12141">12141</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12173">12173</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8022" target="_blank">8022</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
</table>


### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.2 General Availability (GA) using Composer.


{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
