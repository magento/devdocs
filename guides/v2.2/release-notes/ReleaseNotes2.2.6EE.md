---
layout: default
group: release-notes
title: Magento Commerce 2.2.6 Release Notes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.6EE.md
---
*Patch code and release notes published on , 2018.*




We are pleased to present Magento Commerce 2.2.6. This release includes multiple enhancements to product security plus bug fixes and enhancements. Check out the over 150 community-contributed fixes!

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues.



## Highlights

Look for the following highlights in this release:



Looking for more information on these new features as well as many others? Check out [Magento 2.2.x Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).


### Core code highlights
This release includes significant performance improvements to the core Magento code: 



### Community contribution highlights
Highlights of community contributions include  fixes that improve checkout flow and the sorting of simple products:



## Fixes
In addition to security enhancements, this release contains the following functional fixes. 



### Installation, setup, and deployment

<!-- MAGETWO-93192 -->* Config backend models are now populated as expected with all fieldset data, which makes it possible to access all configured values from a current group. [GitHub-16712](https://github.com/magento/magento2/issues/16712)

<!-- MAGETWO-90860 -->* The `magento-deploy-ignore` setting in `composer.json` now works as expected. Previously, files specified in this setting were overwritten during deployment. 

<!-- MAGETWO-87120 -->* The `timestamp` fields in `oauth_nonce` now include indexes to avoid deadlocks while on erasing old records. *Fix submitted by [Karl Deux](https://github.com/KarlDeux) in pull request 13328*. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!-- MAGETWO-84651 -->* * The `app:config:dump` command now has an argument that supports dumping only the specified settings that are required to prepare static content on build system, not all system settings. This new option (`config-types`) makes it possible to dump scopes and themes automatically (which are needed for build system) while managing system settings manually using `config:set --lock-config`. *Fix submitted by [Juan Alonso](https://github.com/jalogut) in pull request 12410*. [GitHub-11396](https://github.com/magento/magento2/issues/11396) 





### B2B

<!-- MAGETWO-92388 -->* Company blocked warnings are no longer included in the source code. Previously, source code included these warning strings, which search indexers detected and treated as text. 

<!-- MAGETWO-92375 -->* Category pages now display as expected all products whose SKUs contain either single or double quotation marks. Previously, Magento threw an error when trying to set pricing and structure on a shared catalog when product SKUs contained these characters. 





<!-- MAGETWO-92040 -->* fix issue with saving company's address if country allowed only for non-default website

Cannot save company with country address that is allowed on non-default website only
ISSUE:
Cannot save company with country address that is allowed on non-default website only
STEPS TO REPLICATE:

Create second website
Set different allowed countries for each website. E.g. For the first website - U.S, for second Ukraine (Under Stores -> Configuration -> GENERAL -> Country options -> Allow countries set different lists of allowed countries on default configuration level, and for every other created website.)
Create Company from admin with address in country allowed on second site only (Ukraine)
EXPECTED RESULTS:
Company saved
ACTUAL RESULTS:
Error appears:
Invalid value of "UA" provided for the country_id field.
Though country is allowed on secondary website


<!-- MAGETWO-90824 -->* The new Company resource so that administrators with limited permissions can 



Can only see companies if the user roll is full administrator
Added "Company" resource for using in user role.
Merchant pointed out there is no option in the permissions to see or not see companies in the user roles permissions unless you are a full admin with "all" resources selected.

When creating b2b user roles, Companies should be listed as Resource Access

actual results: When creating b2b user roles, Companies is not listed as Resource Access and thus, the role has to be created providing full access to all resources, making financial information or other sensible data accessible to all admin users with such role.


This provides the Company resource for administrators with limited privileges. These administrators  can now be granted permissions to see or not see companies in the user roles without having full administrator permissions


Merchant also stated that this is major issue since b2b role has to be assigned all permissions in order to see companies, every backend user in Magento can see the financial results and figures.


When creating b2b user roles, Companies should be listed as Resource Access



add link to UG








<!-- MAGETWO-89971 -->* Fixed B2B company product prices on different websites


The product total price value on the second website is as on the default website

EXPECTED RESULTS:
The product total price value on the second website have to be 30.99;
ACTUAL RESULTS:
The product total price value on the second website is as on the default website 10.99;

Magento now displays the correct product total price value on all websites in a  



<!-- MAGETWO-89888 -->* When **Website Restrictions** are set to **Private Sales: Login Only**, access to the storefront is now restricted to customers who log in, and merchants can still create new companies in the Admin. Previously, when a merchant tried to create a company when this setting was enabled, Magento threw this error, `Can not register new customer due to restrictions are enabled`. 

<!-- MAGETWO-87349 -->* Configurable products can now be added to Requisition List directly from the Category page.





### Bundle products

<!-- MAGETWO-90999 -->* Magento now successfully imports bundle products. 

<!-- MAGETWO- 86218-->* Bundled products that have the **User Defined** field unchecked can now be back ordered. [GitHub-10061](https://github.com/magento/magento2/issues/10061)




### Catalog

<!-- MAGETWO-93196 -->* Administrators with permission to change product names on one website only cannot change product names on any other sites. Previously, an administrator with permission to change a product name on one site only could change product names on all websites in a multisite deployment. 






<!-- MAGETWO-93103 -->* Users with limited privileges can now save products 




Previously, when admin, who has permission only in second site, changes product name (or other not global attributes values) in All store views mode, then product name is changed in both sites.




Cant save products as a limited user
EXPECTED RESULT
Product changes were saved

ACTUAL RESULT
Product changes weren't saved

NOTICE
If you will login as full access admin and unassgin product from first website and then login back as admin from second website and do changes + save - changes will be saved




<!-- MAGETWO-93071 -->* 

Fixed wrong date for Special Price in different locale
When the admin user is using the Russian locale, changing the special price results in a special from date several years in the future preventing the rule from taking effect 

Previously, 




<!-- MAGETWO-92907 -->* Magento now reliably displays category images on the custom store view level.  Previously, the category image on custom store view level alternately disappeared and appeared after every save operation.

<!-- MAGETWO-92823 -->* Company administrators can now use Quick Order to buy products. Previously, when a company administator tried to use Quick Order to buy products, Magento displayed this error: `The SKU was not found in the catalog`. 

<!-- MAGETWO-92653 -->* You can now successfully search for products  when the **Shared Catalog** setting is enabled.

<!-- MAGETWO-92574 -->* Magento no longer removes downloadable product links after an attribute is updated. 









<!-- MAGETWO-92502 -->* Fix issue with double POST requests on page where Recently viewed or Recently Compared widget is inserted

*ACTUAL RESULT:*
POST request made on every page if option "Synchronize widget products with backend storage"  has value *YES*. See [^Screen Shot 2018-06-06 at 14.46.32.png]  [^2018-06-12_1654.png]  [^2018-06-12_1655.png]  [^2018-06-12_1658.png]

*EXPECTED RESULTS*
POST request shouldn't be sent if  option "Synchronize widget products with backend storage" has value *YES*

ASK KEVIN



<!-- MAGETWO-92389 -->* You can now create a product date attribute that contains a day value than exceeds 12 (in the format dd/mm/yyyy). Previously, when you created a product attribute with a default date specifying a day greater than 12, Magento did not save the attribute, but instead displayed this error, `Invalid default date`. 

<!-- MAGETWO-91402 -->* You can now use the `Magento\Catalog\Model\ProductRepository` class to assign a product to one website as expected. Previously, using this class to save a product assigned the product to all existing websites, not just the specified one. 

<!-- MAGETWO-91163 -->* Images now load as expected on the product display page (PDP) when the image name contains double quotation marks. 








<!-- MAGETWO-90940 -->* The SEO-friendly URL for the Category page now works as expected. 

<!-- MAGETWO-90768 -->* The **Use Default Value** checkboxes in the design section of the category page are now enabled by default as expected. 

<!-- MAGETWO-92280 -->* Customers can now use the **Add Product By SKU** button to add configurable products to a sales order. 

<!-- MAGETWO-90569 -->* Empty dropdown or swatch type product attributes are no longer visible on the product page. 

<!-- MAGETWO-90367 -->* Attributes that have empty values across all products being compared are not displayed as rows in the comparison table. Previously, Magento displayed these attributes  with an N/A value on the  Compare Products page. 

<!-- MAGETWO-89732 -->* 




Fixed issue with cataog breadcrumbs appearing.



ACTUAL RESULT
TypeError: this_super is not a function in breadcrumbs.js:30:25. See the screenshots

EXPECTED RESULTS
The page loads without errors with the breadcrumbs.




<!-- MAGETWO-88504 -->* Tiered pricing and quantity increments now work as expected with decimal-based inventories. 

<!-- MAGETWO-88102 -->* Magento now updates the `catalog_category_product_index` table as expected after a category is deleted. 




<!-- MAGETWO-87721 -->* Custom Options are corruputed when saving product to a different website
When adding another site to a product with customizable options, the options get corrupted. Sometimes by splitting into multiple options or duplicating an option.


EXPECTED RESULTS:
Customizable options should be configured the same after saving the second website and before saving.

ACTUAL RESULTS:
In the Split Options Case, there are now two sets of options, the top one with one of the values and the bottom with two of the values. (see RadioButtonAfter.png)
In the Duplicate Option Case, there are now two sets of the same option (see TextFieldAfter.png)




<!-- MAGETWO-87589 -->* Fixed issue with polluted database for additional stores if attribute data wasn't set for additional stores (use default check box now is set even if tab with the attribute was not opened)

<!-- MAGETWO-87430 -->* We've improved the performance of category product indexing when indexing many categories (for example, 100,000 categories).  

<!-- MAGETWO-86710 -->* 

Widget selection by Enabled Products causes a fatal on Storefront in case of "Flat Product" configuration






Fix for issue with Widget selection Enabled product and flat option

<!-- MAGETWO-86295 -->* Merchants can now change the `status` and `update` attributes from the product page. Previously, Magento returned a 404 page when bulk enabling or disabling products in the Admin with a restricted user role that is limited to a specific website. 



<!-- MAGETWO-85682 -->* Magento now maintains the default setting for a product's `status` attribute wwhen you create a new product. Previously, when creating a new product after changing the default option from Enabled to Disabled for this attribute, the status is incorrectly set to enabled by default.

<!-- MAGETWO-84891 -->* The print preview of  product comparison results (the page of results that Magento produces when you click **Compare** after selecting two or more products) now displays as expected. Previously, only a subset of page elements was displayed.  


<!-- MAGETWO-82116 -->* Magento now maintains the correct dates in the results of filtering the Admin Product Grid Filter: Set Product as New from Date.  [GitHub-11517](https://github.com/magento/magento2/issues/11517)

date reverts in past after clicking out of product edit 




<!-- MAGETWO-75427 -->* As you type more characters into the text field for a product's custom option, the hint showing the number of characters left before reaching the maximum now decreases as expected.

<!-- MAGETWO-60573 -->* Merchants can now set a custom option fixed price with a negative value in the Admin. [GitHub-7333](https://github.com/magento/magento2/issues/7333)

<!-- MAGETWO-73739 -->* You can now unset a category image on the store view level when the image defined on all store views.

<!-- MAGETWO-74021 -->* The Catalog Products List widget can now show products on storefront that have specific attributes.


### CAPTCHA

<!-- MAGETWO-91840 -->* Customers can now successfully log `in when guest checkout is disabled and CAPTCHA is enabled. Previously, Magento threw the "Provided form does not exist" error when a customer tried to log in when CAPTCHA is enabled and guest checkout is disabled. 

<!-- MAGETWO-89615 -->* CAPTCHA validation now works when **Website Restrictions** is enabled. 






### Cart

<!-- MAGETWO-92573 -->* Customers can now add configurable products to their shopping cart when Magento is running on Internet Explorer 11.x.

<!--MAGETWO-87872 -->* The Free Shipping cart price rule now works as expected when the UPS shipping method is enabled. Previously, UPS Ground shipping method was not available for free shipping at checkout when the UPS shipping method was enabled.

<!-- MAGETWO-82132 -->* Fixed isue with comma special character in cart price rule condition value results in incorrect rule
Comma special character in cart price rule condition value results in incorrect rule. Cart rule with format 'Price in cart equals or greater than X,XXX' results in two cart rules: 'Price in cart equals or greater than X' and 'Price in cart equals or greater than XXX'




<!-- MAGETWO-69940 -->* Free shipping coupon not working with Table Rates shipping 

[GitHub-8172](https://github.com/magento/magento2/issues/8172)


Free shipping coupon not working with Table Rates shipping - Sorry, no quotes are available for this order

Expected result:

Shipping rate has to change into 0 amount (free shipping)

Actual result:

Shipping rate is still the 

Price for default store view is assigned when adding a product by SKU with a CSV file for second store view's Admin order.

same



<!-- MAGETWO-91112 -->* 

Fixed store resolving for product pricing in Admin panel
Incorrect store view price when adding aproducts by SKU with csv file for Admin order

Price for default store view is assigned when adding a product by SKU with a CSV file for second store view's Admin order.

EXPECTED RESULTS:
Price for second store view is assigned when importing order CSV for second store view Admin order.

ACTUAL RESULTS:
Price for default store view is assigned when importing order CSV for the second store view Admin order



<!-- MAGETWO-90190 -->* A merchant can successfully use SKU values that contain capital letters to  add a product  to a cart from the Admin. 

<!-- MAGETWO-90053 -->* A customer logged in guest with enabled persistence can now refresh the checkout page without losing any of the data contained in the checkout form. Previously, under these conditions, Magento reset the shipping address to empty fields. 

<!-- MAGETWO-89222 -->* Performance of the checkout process has been improved by limiting shipping rates requests. Previously, orders took significantly longer to complete. 

<!-- MAGETWO-73537 -->* Magento now maintains browser history as expected when a user navigates from the checkout contact information page to the checkout payment information page.  Previously, when a user tried to retrace her steps after landing on the payment information page, Magento did not return them to the checkout contact information page, but instead landed on a product page.  

<!-- MAGETWO-73736 -->* Magento  now displays a message  when a gift card  card is removed during checkout.

<!-- MAGETWO-86470 -->* Guest orders placed with gift cards can now be canceled. 

<!-- MAGETWO-86490 -->* Magento no longer empties a customer's shopping cart if the checkout page is reloaded several times. Previously, when the checkout page is reloaded several times, Magento empties the cart, and the page reloads to an empty cart page.



### CMS content

<!-- MAGETWO- 92611-->* 

Layout is broken when module sequence is wrong





### Configurable products

<!-- MAGETWO-87047 -->* Manager now displays the manufacturer attribute on the Admin on the Catalog page for configurable products. Previously, Magento displayed these attributes on the simple products catalog page, but not on the configurable products catalog page. 

<!-- MAGETWO-86125 -->* Sorting on the price of configurable products with out-of-stock child products  now works properly. Previously, price sorting of configurable products used the price of out-of-stock and disabled child products.



### Customer account

<!-- MAGETWO-92989 -->* Magento no longer logs out a customer after a successful password change.

<!-- MAGETWO-92507 -->* Magento no longer displays the State/Province instead of the State field on U.S. customer address forms.

<!-- MAGETWO-91327 -->* Customer attributes are now correctly validated on the Admin Order form. Previously, Magento validated attributes\ length  after an order has been submitted, but not on the Admin Order form.

<!-- MAGETWO-89624 -->* Customers no longer lose their session when they switch stores on different domains

<!-- MAGETWO-89849 -->* Non-US and non-Canadian addresses that are displayed in the  Address Book summary  field now display the State/Province vales as expected if that information was provided.



<!-- MAGETWO-89034 -->* Bug fix for issue when custom address attribute with value "show on front-end - NO" could be shown on Checkout

STEPS TO REPLICATE:
1. Create Custom Customer Address attribute with "Show on frontend" = NO
2. Create customer -> add any address to the account
3. In Magento admin go to edit customer page and add value to a custom attribute
4. Login to frontend
5. add a product to cart and go to checkout

EXPECTED RESULTS:
Customer address block should not display not visible attribute
ACTUAL RESULTS:
Attribute value displayed in Shipping address





<!-- MAGETWO-88411 -->* Magento now displays the default value for a new Customer attribute that is created from the Admin. Previously, Magento set this value to **no** by default. 

<!-- MAGETWO-73827 -->* Administrators can see all customers when the **Share Customer Accounts** value is set to Global. 








### EAV
<!-- MAGETWO- 90576-->* Using a multiselect product attribute with a custom source model in the adminhtml doesn't render selected value
Fixed incorrect behavior in multi-select with custom product attributes. [GitHub-5445](https://github.com/magento/magento2/issues/5445)



### Frameworks

<!-- MAGETWO-90538 -->* `Framework\Math\Random` now uses PHP 7 features. Magento\Framework\Math\Random uses outdated libraries and approaches that should be replaces with PHP 7's random_bytes and random_int

<!-- MAGETWO-91164 -->* after upgrading Magento need to remove 'pub/media/catalog/product/cache' and run bin/magento catalog:image:resize
NEED MORE INFORMATION

<!-- MAGETWO-87731 -->* We've fixed a display error that occurred when both a Critical Admin Notification and Release Notification window were opened.



#### Application framework

<!-- MAGETWO-92722 -->* You can now manually add a parameter to `app/etc/env.php: user_admin_email`. When an administrator is created, Magento sends an email  to default store's email and, if present, to the email address defined in `user_admin_email`. NEW FEATURE


#### JavaScript framework

<!-- MAGETWO-89264 -->* Checkout now works when the AdBlock extension and Google Analytics are enabled. Previously, the Checkout page was not accessible,  and Magento displayed the loading spinner.

<!-- MAGETWO-90193 -->* You can now view an entire zoomed product image in Fotorama fullscreen from the FireFox browser. Previously, the image jumps and the user can not view all portions of the image. [GitHub-7978](https://github.com/magento/magento2/issues/7978)


#### Web API framework

<!-- MAGETWO-92122 -->* RmaRepository REST search method does not return tracks

<!-- MAGETWO-86099 -->* 
RmaRepository REST method does not return tracks










#### Cache framework

<!-- MAGETWO-69847 -->* 

[GitHub-9287](https://github.com/magento/magento2/issues/9287)

Ma
Static Assets deployment throws errors when redis is used for cachegento 2 suddenly does not work with REDIS anymore after upgrade to (M2.1.6)
Static Assets deployment throws errors when redis is used for cache


<!-- MAGETWO-84109 -->* Prevent layout cache corruption in edge case #12314
https://github.com/magento/magento2/pull/12314
https://github.com/scottsb
Scott Buchanan



Scott Buchanan


### General
<!-- MAGETWO- -->* 

<!-- MAGETWO-90968 -->* Fixed rounding of Rewards Points, GiftCard refund history
Wrong amounts are used when creating credit memo for an order placed using Store Credit, Gift Card and Reward Points

<!-- MAGETWO-91411 -->* fixed issue where with one product deleting could be deleted all products from Grid

Magento removes all of the products while only a single one was checked for deletion. It was occurred on a slow internet connection usually.

EXPECTED RESULTS:
Delete action is performed once or action is disabled until product is deleted
ACTUAL RESULTS:
On every delete action first product is removed from grid, products can be accidentally removed


<!-- MAGETWO-91928 -->* Product Videos for different Store Views	
 
 Fix the issue when adding video for different store views are shared between them
 There is a problem saving Product Videos for certain Store View. They have a certain Product Videos (Youtube) for the German Store View (de_ch) and other for the French Store View (fr_ch). If I am in the Admin and open a Product and open the French Store View and add there a Video and save the product. After that I open the German Store View I can still see the video preview image (but without data: url, ..). If I open the fronted in the French Store View I see the Video and I can play it (which is ok) but if I open the German Store View I see the video but can not play it.


<!-- MAGETWO-91931 -->* Cookie `section_data_ids` isn't filled properly after restarting browser application
Fixed cookie issue with section_data_ids isn't filled properly after restarting browser application

[GitHub-14912](https://github.com/magento/magento2/issues/14912)


Customer data is not fully loaded after browser restart though session didn't expired


<!-- MAGETWO-91951 -->* Fixed issue with addToCart and removeFromCart events on Shopping Cart Page and Multiply Checkout that do not trigger in GTM console after product update

When updating the quantity of a product on Cart edit page (/checkout/cart/) GTM 'addToCart' event triggers before updating the cart.

That event must be triggered after updating the cart.
EXPECTED RESULTS:
The 'addToCart' event triggers on the GTM console only when an item is added to the cart

ACTUAL RESULTS:
The 'addToCart' event triggers on the GTM console when an item is tried to be updated on the cart though it is not updated as quantity of the update is not available.

<!-- MAGETWO-91000 -->* Unoptimized SQL query in customer segments

If client is adding customer segment with ordered product conditions SQL query returns over 2M rows result and server goes down (not reproduced on dumps).

EXPECTED RESULTS:
Segment is saved
ACTUAL RESULTS:
Myslq goes down on client's instance



<!-- MAGETWO-90246 -->* Product URLs in front-end Customer Account "My Product Reviews" section are not SEO friendly
When a customer creates a product review, the link to the product from the review in the customer's 'My Account>My Product Review' is not SEO friendly.


EXPECTED RESULTS:
URL should be SEO friendly utilizing the SEO URL key.

ACTUAL RESULTS:
URL is not seo friendly, and does not utilize the SEO URL key



<!-- MAGETWO-87356 -->* Send Invitation Reward Point Details displays percent sign instead of number
When viewing the My Invitations page in the customer account, messages are displaying '%' instead of the reward points amount.

Send this invitation now and earn %s when your invitee signs up on our site. Learn more
Earn %s for purchases your invitees make.
There are no sent invitations.

<!-- MAGETWO-73512 -->* Incorrect Refund Logic with Enterprise Rewards can allow for double-refunds
Actual result:

both fields prefilled with full order amount - $105 and admin is able to return double order amount
admin is able to create an unlimited number of credit memos returning $105 to reward points balance every time
Expected result:

Refund to Store Credit field = 0
Refund Reward Points = 105
It is only possible to create one "Credit Memo" and refund to Reward Points and/or Store Credit balance.



<!-- MAGETWO-85112 -->* Move isAllowed method from AccessChangeQuoteControl to separate service
Jeroen
JeroenVanLeusden
https://github.com/magento/magento2/pull/12566

We are using recurring payments in combination with pre-order products. A small amount of the final price is payed and with the shipment, the remaining amount. In order to do this we always need a customer. We therefore automatically convert guest to shadow customers. This isn't an account the customer can use but we need it for the recurring payment.

https://github.com/magento/magento2/pull/12566



<!-- MAGETWO-83551 -->* Improve attribute checking


https://github.com/magento/magento2/pull/11554
On a store with a large number of attribute sets, a lot of repeated checking is done for the same attributes.

Description
Instead of repeating the checks every time, keep track of the attributes that have already been checked and should be skipped (invisible). This we way we don't have to do the same check for the next attribute set.

Freek Vandeursen
FreekVandeursen




<!-- MAGETWO-86239 -->* Customer Address attribute value length is still validated when min/max length fields are not displayed at the backend

Fixed issue with Customer Address attribute value length is still validated when min/max length fields are not displayed at the backend

Merchant points out if min / max characters are set in the input validation, then even if it is set to none it will still honor the min / max setting. It just hides the fields, if you add input validation back it will show the last setting.

*EXPECTED*
Address are saved

*ACTUAL*
Address are not saved. Error message
"Street Address" length must be equal or less than 5 characters 
or
"Street Address" length must be equal or greater than 3 characters.





### Gift cards 


<!-- MAGETWO-92988 -->* Magento now displays the **Credit Memo** link  at the top of the page for orders with a total of 0 (zero). Previously, this link was missing, which prevented users from creating a credit memo for the order. 

<!-- MAGETWO-92362 -->*  You can now save gift cards without the price being changed on the Admin to an unacceptable format. Previously, Magento tried to save amounts in unacceptable formats (such as the inclusion of a comma in a four-digit price), which triggered an error.  

<!-- MAGETWO-91925 -->* Magento no longer permits users to save a new gift card  without first completing the required values. Previously, when creating a gift card, users could save the card without having designated an amount, but it could not be purchased. Magento also created a `report.CRITICAL: Warning` in the `system.log`.

<!-- MAGETWO- 91867-->* Orders now retain gift message information on both item and order level. Previously, gift messages disappeared from an order when a customer logs into his account during checkout. 

<!-- MAGETWO-91576 -->* Magento now maintains relationships between new gift card accounts when a customer purchases severalgit cards in the same order. 

<!-- MAGETWO-91400 -->* Magento now refunds only the exact amount used on a gift card if only the partial gift card was  used. Previously, when a customer used a gift card account code to partially pay for an order,  and Magento subsequently created a credit memo for a portion of the order, the full amount of the gift card was refunded.

<!-- MAGETWO-86757 -->* Magento now generates the correct number of gift card codes when the full order is invoiced as the customer selects when creating an order. Previously, for orders that included both physical products and multiple gift cards, the number of gift card codes  generated on an order corresponded to the quantity of the previous physical line items that the user had added to the cart before adding gift cards.


### Google Tag Manager

<!-- MAGETWO-87955 -->* Magento now accurately updates the minicart when a customer removes a product while accessing a storefront using Internet Explorer 11.x. Previously, when a customer removed a product from the minicart, Magento did not remove the product but instead threw this error, `(SCRIPT438: Object doesn't support property or method 'find'. File: sidebar.js, Line: 237, Column: 13 )`. 



<!-- MAGETWO-88806 -->* Google Tag Manager Not Reporting Correctly

Fixed Google Tag Manager to trigger events with correct data, like product pricing

Merchant reports, the Google Tag Manager "Product Category (Enhanced Ecommerce)" data is not reporting at all (everything is reporting as "(not set)"). This missing data is affecting a variety of critical reports that we use internally and externally (3rd party service providers, etc.). The 'dataLayer' JavaScript in the source code seems to be missing category data in most event functions, and the only one that appears to include it doesn't seem to get called for some reason 



<!-- MAGETWO-89532 -->* Google Analytics events now work more consistently. Previously, 

Google Analytics - addToCart event triggers before adding to cart
Fixed inconsistent behavior for Google Analytics events
Previously, when updating the quantity of a product in mini-cart, GTM 'addToCart' & 'removeFromCart' event triggers even before updating the cart.

Those events must be triggered after updating the cart.




### Import/export



### Indexing


### INFRASTRUCTURE
<!-- MAGETWO- -->* 

<!-- MAGETWO-92303 -->* ram
No email is sent when changing status to Return Received, Approved, Rejected
No email is sent when changing status to Return Received, Approved, Rejected




<!-- MAGETWO-92302 -->* ram
RMA status label is not showing up on email
Fixed sisue that RMA status label is not showing up on email



<!-- MAGETWO-99442 -->* ram

<!-- MAGETWO-72090 -->* ram
Unselecting 'Use Default Value' on store view causes other attributes to be unselected or their Use Default Value setting cannot be changed	
Unselecting 'Use Default Value' on store view on certain attributes causes other attributes to be unselected as well, and some 'Use Default Value' fields cannot be re-selected.

Expected result:

Both "Use Default Value" check boxes remains checked.
Actual result:

Both "Use Default Value" check boxes unchecked.


<!-- MAGETWO-88615 -->* 

Enabled adding translation from theme to js dictionary

Fixed static deploying for js translations.

js-translation.json file is not getting updated during setup:static-content:deploy but manually when deleted and then running the setup:static-content:deploy, it gets updated.




### Newsletter

<!-- MAGETWO-88217 -->* Guest users can now sign up for newsletters for multiple stores. Previously, when a guest user signed up for newsletter from multiple stores. Magento sent a subscription confirmation message, but did not successfully subscribe the user. 


<!-- MAGETWO-87969 -->* Magento now correctly updates newsletter subscriptions  when the customer is registered on two stores. Previously, when the customer tried to subscribe to the newsletter fro a second store, Magento displayed this message, `You are (not) subscribed to "General Subscription"`. 



### Orders



### Payment methods

<!-- MAGETWO-85908 -->* You can now cancel an order placed through Cybersource if fraud filters are triggered.

<!-- MAGETWO- 92625-->* Magento now emails customers order confirmations for Worldpay orders placed through Worldpay.

<!-- MAGETWO-92784 -->* The free shipping coupon code now works as expected when using the USPS shipping method. Magento now Previously, the order summary did not indicate free shipping with USPS even after the customer applied the free shipping code  during checkout. 

<!-- MAGETWO-92820 -->* Customers can now continue creating an order  after a PayFlow Pro payment has been declined. Previously, under these circumstances. the customer could not continue his purchase. 

<!-- MAGETWO-90571 -->* Magento no longer sends Admin orders to Signifyd for review when Signifyed is disabled on the website on which the administrator is logged in. 

<!-- MAGETWO-90533 -->* Magento now successfully creates shipping labels for a return merchandise authorization (RMA) when using FedEx Smart Post as the shipping option. Previously, Magento threw an error under these circumstances. 

<!-- MAGETWO-89995 -->* Paypal Onboarding has been configured to work for  merchants from non-USA countries.

<!-- MAGETWO-88244 -->* Magento now accurately displays the status of PayPal orders. Previously, the status of PayPal orders was displayed as being in the Processing state only. 

<!-- MAGETWO-89221 -->* You can now cancel an order that was placed with Braintree if the authorization has expired. 

<!-- MAGETWO-84495 -->* Magento now sends email about payment failures to customers. Previously, Magento did not send the customer email, but instead logged an error in the `support.log` and displayed this message on the storefront, `Transaction has been declined. Please try again later`.



### Pagecache

<!-- MAGETWO-92757 -->* The full page cache now returns a page when it is opened  the second or more times on the non-default website of a deployment on more than one website. 






### Performance

<!-- MAGETWO-86143 -->* A new configuration setting is introduced in System Configuration: General -> Reports -> General Options, which allows to disable Magento Reports completely or partially. Magento recommends to disable Reports functionality for performance reasons if merchants' business functions do not require this capability. 

Note that some features like Magento Commerce dynamic customer segments (specifically ones based on viewed products) rely on Reports data collection to function properly. 

Also was fixed issues with inserting data into "customer_visitor" table on each request. Now data persisted only for POST requests

Add ability to disable statistic collecting for Reports module by default.




<!-- MAGETWO-92154 -->* when Magento is in Production mode and static_content_on_demand_in_production flag is enabled we unlock Locale field for store configurations (menu Stores > Settings > Configuration , section General > General > Locale Options) 
 if locale exists in app/etc/config.php file, the locale will be locked despite the Magento mode. 
the same behavior is for Admin locale, so when Magento is in Production mode and static_content_on_demand_in_production flag is enabled we display the whole list of locales for choosing in adding/edditing admin user (System -> Permissions -> All Users) 



<!-- MAGETWO-47320 -->* We've optimized the mechanism used by the Catalog Rule indexer to match products, and consequently the time required to run a full re-index has been signicantly reduced. 


### Rule 

<!-- MAGETWO-89220 -->* A cart rule using a `subselection` condition no longer automatically grants a discount. 



### Sales

<!-- MAGETWO-93102 -->* Order status now remains in the Complete state after Magento refunds store credit on a partial credit memo. Previously, under these circumstances, Magento changed the status of the order to Closed. 

<!-- MAGETWO-92847 -->* You can now create multiple credit memos in one session and save ach successfully. Previously, Magento displayed this error when you tried to save a second credit memo after creating the first memo: `Could not save credit memo`.

<!-- MAGETWO-92899 -->* Magento now displays any errors that during order creation in the browser console. Previously, Magento displayed this message: `Uncaught ReferenceError: order is not defined during order creation` instead of a specific error message. 



<!-- MAGETWO-91466 -->* salesShipmentRepositoryV1 throws error when adding tracking



<!-- MAGETWO-90496 -->* Magento no longer reverts to the country associated with the default website when a customer edits the billing address for an order. Previously, if a customer edited the shipping address for an order, Magento would reset the billing address to the default address specified for the default website. 



### Sales rules

<!-- MAGETWO-91797 -->* Cart price rules with associated coupons are no longer affected by edits to scheduled updates. 






### Search

#### Elasticsearch

<!-- MAGETWO-92142 -->* Bundle products are now indexed as expected in Elasticsearch. 

<!-- MAGETWO-86153 -->* Elasticsearch now correctly calculates the relevance of quick search results according to selected attribute search weights.



#### Admin global search

<!-- MAGETWO-86658 -->* Admin global search preview now works as expected. Previously, this feature worked inconsistently, and search results  differed depending on which area was being searched on (for example, Products, Categories, or Customers). 

<!-- MAGETWO-86289 -->* The Admin global search now returns results that match the keyword for all available pages, or if a user searches in  specific sections, the search feature now returns only the results that matched the key words in those specific sections. Previously, the Admin global search did not return results that matched the specified keywords or did not restrict results to specified sections.

<!-- MAGETWO-85786 -->* Catalogs are now correctly filtered by the Admin search bar. Previously, if you attempted to use the Search tool in the Admin, and selected "XX in Products" that appears, Magento displayed the full catalog view without narrowing down the list. *Fix submitted by [Pavel](https://github.com/hannassy) in pull request 12735*. [GitHub-12193](https://github.com/magento/magento2/issues/12193), [GitHub-7861](https://github.com/magento/magento2/issues/7861)









### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>

<!-- MAGETWO-92217 -->* 

The Free Shipping Cart Price Rule now works as expected when **UPS shipping method** is enabled and **Free Shipping** is set to "For matching items only".


<!-- MAGETWO-91035 -->* The shipping progress dates displayed in tracking popup for FedEx shipping are now accurate. 



### Sitemap
<!-- MAGETWO-92781 -->* Sitemaps generated by cron no longer display  `/pub/` in image URLs when  `docroot` is set to `/pub`. Previously, if the `docroot` was set to `pub` and `BASE MEDIA URL` was not set, the cron-generated sitemap  generated wrong images URLs.  


### Staging

<!-- MAGETWO-90682 -->* Banners remain assigned to a Cart Rule after a Staging Update is applied. Previously, a banner was unassigned from the Cart Rule after a Staging Update was applied. 

<!-- MAGETWO-91889 -->* Magento now rolls  back updated changes to their pre-update state  when a merchant deletes an active Scheduled Update. Previously, some products were removed from their assigned categories (and categories were removed from the Amdin)  when an active product update was deleted.  

<!-- MAGETWO-92509 -->* You can now successfully re-order a configurable product. Previously, a schedule update for one configurable product affected other ordered configurable products. 

<!-- MAGETWO-89779 -->* Magento no longer unexpectedly locks up CMS pages when a merchant changes a scheduler end date. Previously, when a merchant updated the end date in a CMS page, after the current scheduler ended, Magento generated an error, and the merchant could no longer access any CMS page from the Admin. 



<!-- MAGETWO-72815 -->* 



Updating a schedule data no longer removes the  product from the Admin product list  after a merchant deleted its active schedule update. 


when a merchant edits the schedule update for a product. 

<!-- MAGETWO-86032 -->* Magento no longer deletes products from the Admin product list after a merchant deletes its active schedule update. This deletion only appeared after the scheduled update time. 





### Swagger


### Swatches


### Testing

### Translation

<!-- MAGETWO-92210 -->* The `translation.json` file now contains translatable strings for the phrases "Store Credit" and "Gift Card". Previously, these strings were not translated for the shopping cart, one-page checkout, and order view in the customer account on the storefront. 


<!-- MAGETWO-92355 -->* We've added  client-side caching of `js-translation.js`.




### URL rewrites

<!-- MAGETWO-89905 -->Categories of the Main menu in the different Store View are now updated when Varnish is enabled. 


Workflow of how Magento handles switching between different stores (especially on different domains) was changed to a 2-step redirect, and store switching links does not contain session-related data anymore in order to fix several caching and session sharing issues.



<!-- MAGETWO-73456 --> URL key values are now derived from the  default value set on the default store. Previously, Magento derived the product URL key value from the product name on storeview level. 






### Vertex



### Visual Merchandiser

<!-- MAGETWO-90599 -->* Magento now maintains manual sort order and adds newly assigned products to the top of the products list. Previously, Magento reset the manual sort order and sorted products by ID. 


<!-- MAGETWO-92504 -->* Saving a product no longer reverts the selected sort order for a category. Previously, after a merchant saved a product, Magento reverted the sort order that defined the display of products in that category from the defined  sort order to an order defined by product ID. 




The products sorted by the rule will not persist and any changes should be recalculated and updated automatically during reindex. 




<!-- not needed- 72024--> 

## Known issues





## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.


OLD TABLE 

<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
    <th>Contributing community member</th>
  </tr>



<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15929">15929</a></td>
    <td>15205, 15245</td>
    <td><a target="_blank" href="https://github.com/fmarangi">Francesco Marangi</a></td>
  </tr>
  
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13956">13956</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/koenner01">Koen V.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13878">13878</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13769" target="_blank">13769</a></td>
    <td><a target="_blank" href="https://github.com/pawcioma">pawcioma</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13943">13943</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12405" target="_blank">12405</a>, <a href="https://github.com/magento/magento2/issues/12421" target="_blank">12421</a></td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13855">13855</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13804" target="_blank">13804</a></td>
    <td><a target="_blank" href="https://github.com/ankurvr">Ankur Raiyani</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14011">14011</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/chedaroo">Richard Jesudason</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14013">14013</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sandermangel">Sander Mangel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13977">13977</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13607">13607</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13385" target="_blank">13385</a></td>
    <td><a target="_blank" href="https://github.com/shyamranpara">Shyam Ranpara</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">enriquei4</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
    <td><a target="_blank" href="https://github.com/pradeep-wagento">pradeep-wagento</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14044">14044</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/avstudnitz">Andreas von Studnitz</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12929">12929</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10559" target="_blank">10559</a></td>
    <td><a target="_blank" href="https://github.com/srenon">Renon Stewart</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13884">13884</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5463" target="_blank">5463</a></td>
    <td><a target="_blank" href="https://github.com/k4emic">Mads Nielsen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13894">13894</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/evgk">evgk</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13989">13989</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13988" target="_blank">13988</a></td>
    <td><a target="_blank" href="https://github.com/krzksz">Mateusz Krzeszowiak</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14029">14029</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4919" target="_blank">4919</a></td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14042">14042</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/jasperzeinstra">jasperzeinstra</a></td>
  </tr>

   <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14083">14083</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RandeKnight">RandeKnight</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
    <td><a target="_blank" href="https://github.com/Frodigo">Marcin Kwiatkowski</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14121">14121</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14010" target="_blank">14010</a></td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14041">14041</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/KarlDeux">Carlos Lizaga</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14136">14136</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ccasciotti">Cristiano Casciotti</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14154">14154</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/nfourteen">nfourteen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14189">14189</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/EliasZ">Elias</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11707">11707</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/gwharton">gwharton</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14156">14156</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/aschrammel">Andreas Schrammel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14091">14091</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14138" target="_blank">14138</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
    <td><a target="_blank" href="https://github.com/brideo">Nathan McBride</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13716">13716</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13704" target="_blank">13704</a></td>
    <td><a target="_blank" href="https://github.com/alepane21">Alessandro Pagnin</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/cstergianos">cstergianos</a></td>
 </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14303">14303</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13992" target="_blank">13992</a></td>
    <td><a target="_blank" href="https://github.com/cream-julian">cream-julian</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a></td>
    <td><a target="_blank" href="https://github.com/crisdiaz">cristina-diaz</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14358">14358</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mageprince">Prince Patel</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13414">13414</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/VincentMarmiesse">Vincent Marmiesse</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14308">14308</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
    <td><a target="_blank" href="https://github.com/swnsma">Oleksandr Kravchuk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P.</a></td>  
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14361">14361</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11930" target="_blank">11930</a>, <a href="https://github.com/magento/magento2/issues/10700" target="_blank">10700</a> </td>
    <td><a target="_blank" href="https://github.com/xtremeperf">Doug</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14060">14060</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14325">14325</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7816" target="_blank">7816</a>, <a href="https://github.com/magento/magento2/issues/12852" target="_blank">12852</a></td>
    <td><a target="_blank" href="https://github.com/mikewhitby">Mike Whitby</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>
    <td><a target="_blank" href="https://github.com/paveq">Paavo Pokkinen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14288">14288</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14385">14385</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13716" target="_blank">13716</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
    <td><a target="_blank" href="https://github.com/ArjenMiedema">Arjen Miedema</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14350">14350</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14249" target="_blank">14249</a></td>
    <td><a target="_blank" href="https://github.com/cdiacon">Calin</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14403">14403</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/edie-pasek">edie-pasek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14440">14440</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13942">13942</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13582" target="_blank">13582</a></td>
    <td><a target="_blank" href="https://github.com/bordeo">Alex</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14293">14293</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8837" target="_blank">8837</a></td>
    <td><a target="_blank" href="https://github.com/KravetsAndriy">Andriy Kravets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14439">14439</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sanderjongsma">Sander Jongsma</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14445">14445</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14455">14455</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14466">14466</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/NamrataChangani">NamrataChangani</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JDavidVR">David</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a></td>
    <td><a target="_blank" href="https://github.com/afirlejczyk">afirlejczyk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14498">14498</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14504">14504</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/quisse">Tommy Quissens</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13629">13629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Corefix">Theis Corfixen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13831">13831</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/irs">Vadim Kusakin</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2ce/pull/14176">14176</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14049" target="_blank">14049</a></td>
    <td><a target="_blank" href="https://github.com/joost-florijn-kega">joost-florijn-kega</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14319">14319</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6879" target="_blank">6879</a></td>
    <td><a target="_blank" href="https://github.com/MateuszChrapek">MateuszChrapek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13950" target="_blank">13950</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tkotosz">Tibor Kotosz</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14599">14599</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14572" target="_blank">14572</a></td>
    <td><a target="_blank" href="https://github.com/PierreLeMaguer">Pierre LeMaguer</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13016">13016</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9666" target="_blank">9666</a>, <a href="https://github.com/magento/magento2/issues/12323" target="_blank">12323</a></td>
    <td><a target="_blank" href="https://github.com/rossmc">Ross</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14048">14048</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14035" target="_blank">14035</a></td>
    <td><a target="_blank" href="https://github.com/kamilszewczyk">Kamil Szewczyk</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14629">14629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/AnshuMishra17">AnshuMishra17</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14635">14635</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14465" target="_blank">14465</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14668">14668</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/surya07081995">Suraj kumar prasad </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14678">14678</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/strell">Roman Strelenko </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14681">14681</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13652" target="_blank">13652</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14688">14688</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/net32">Isaias</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14696">14696</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

 
</table>

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 

<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull Request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Balance Internet</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
  </tr>

<tr>
    <td>Comwrap</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
  </tr>

<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Divante</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a>, <a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
  </tr>

  <tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Interactiv4</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a> </td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a>, <a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a>, <a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a>, <a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
  </tr>

<tr>
    <td>Inviqa</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>ISM eCompany</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
  </tr>


  <tr>
    <td>MediaCT</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
  </tr>

<tr>
    <td>Something Digital</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13898">13898</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12792" target="_blank">12792</a>, <a href="https://github.com/magento/magento2/issues/13778" target="_blank">13778</a></td>
  </tr>


  <tr>
    <td>Vaimo</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14447">14447</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>

  </tr>

<tr>
    <td>Wagento</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
  </tr>



</table>






### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
