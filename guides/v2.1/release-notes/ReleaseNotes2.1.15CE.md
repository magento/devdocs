---
layout: default
group: release-notes
title: Magento Open Source 2.1.15 Release Notes
version: 2.1
github_link: release-notes/ReleaseNotes2.1.15CE.md
---

*	TOC
{:toc}


*Patch code and release notes were published on .*


We are pleased to present Magento Open Source  2.1.15. This release includes  multiple enhancements to product security plus  bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.1.15 ) have been ported to 2.2.6 , 1.14.3.10, and 1.9.3.10. 

## Highlights
Magento 2.1.14 contains 38 security fixes and enhancements.  The enhancements help close stored XSS, SQL injection, and cross-site request forgery (CSRF) vulnerabilities. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for more information.

## Fixed issues
In addition to security enhancements, this release contains the following functional fixes. 


<!--- ENGCOM-902 -->* *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14096*. [GitHub-4173](https://github.com/magento/magento2/issues/4173)


### Setup




### Catalog

<!--- ENGCOM-1685 -->* Category\Collection::joinUrlRewrite should use the store set on the collection.

[GitHub-13704](https://github.com/magento/magento2/issues/13704)

The problem is that Magento\Catalog\Model\ResourceModel\Category\Collection::joinUrlRewrite always use the store id from the store manager. I think that it should instead use the storeId set on the actual collection.

Now joinUrlRewrite uses directly the storeManager, but if a store is set directly on the collection, it should use the store set, and not the default passed by the store manager.
The method getStoreId(), if not set, already goes on fallback to the store manager and get the default, so it should be safe to directly use getStoreId().

Alessandro Pagnin 
https://github.com/alepane21


<!--- ENGCOM-1842 -->*
misleading data-container in product list

Steps to reproduce
inspect the product list and see data-container="product-grid"
Expected result
data-container="product-list"
Actual result
data-container="product-grid"

[GitHub-15319](https://github.com/magento/magento2/issues/15319)

https://github.com/magento/magento2/pull/15816

Viral Vasara
viral-wagento




<!--- ENGCOM-1907 -->*

Dmytro Cheshun
dmytro-ch

When using more then 2 digits ex(9.4880 will be displayed as 9.49) for the price the js will override this value and it will format using the round for 2 digits.

Priduct page price is using the hardcoded digits in js

When using more then 2 digits ex(9.4880 will be displayed as 9.49) for the price the js will override this value and it will format using the round for 2 digits.

[GitHub-14249](https://github.com/magento/magento2/issues/14249)

https://github.com/magento/magento2/pull/15926
 

### Cart and checkout
<!--- ENGCOM-1269 -->*


https://github.com/magento/magento2/pull/14665

Fix showing product name with special chars in mini cart.
This code was used in html template to show product name

[GitHub-13652](https://github.com/magento/magento2/issues/13652)


Issue in product title with special chars in mini cart


Steps to reproduce
create a product titled Fusion Backpack ™
go to front end the product title comes up correctly as Fusion Backpack ™ then add it to cart
in the mini cart it shows it as Fusion Backpack ™ and not converting ™ to ™
Expected result
Mini cart should also show the correct product title after converting the html equivalent to characters


ampulos
https://github.com/ampulos






 

### Cart and checkout



### Configurable products







### Customers


### Directory
<!--- ENGCOM-1948 -->*

[GitHub-16031](https://github.com/magento/magento2/issues/16031)


Add new pattern to validate Canada Zip Codes

Postal code (zip code) for Canada should allow postal codes without space

Zip code validation warning on adresses from Canada.
Current validation is A1B 2C3
This should also allow postal code without space A1B2C3


Hitesh
hitesh-wagento


[GitHub-13899](https://github.com/magento/magento2/issues/13899)




### Email




### Framework

<!--- ENGCOM-1262 -->*
Fix empty changelog tables after MySQL restart
https://github.com/magento/magento2/pull/14471
Leave at least one record after tebles cleanup.


Oleksandr Kravchuk
https://github.com/swnsma


[GitHub-14465](https://github.com/magento/magento2/issues/14465)


Product 'version_id' lost last 'auro_increment' value after MySQL restart.




<!--- ENGCOM-1410 -->*
Prices aren't readable when using custom price symbol

[GitHub-14902](https://github.com/magento/magento2/issues/14902)


Yaroslav Rogoza
https://github.com/rogyar

When creating configurations on a configurable product, while assigning prices to configurable products, prices aren's readable when using custom price symbol.

Tommy Quissens
https://github.com/quisse


<!--- ENGCOM-1796 -->*

https://github.com/magento/magento2/pull/15714
Dmytro Cheshun
dmytro-ch

the submenu relative to the "Bottoms 2" element in the image should be aligned next to it


[GitHub-7897](https://github.com/magento/magento2/issues/7897)

Steps to reproduce
hover a menu item which contains some nested elements
Expected result
the submenu relative to the "Bottoms 2" element in the image should be aligned next to it



<!--- ENGCOM-1908 -->*

Add Malaysian Locale Code
https://github.com/magento/magento2/pull/15927
Dmytro Cheshun
dmytro-ch
Malaysian (Malaysia) missing from locale list


[GitHub-14089](https://github.com/magento/magento2/issues/14089)

#### Configuration framework


#### Customer 

<!--- ENGCOM-1337 -->*
Preserve user group id when using /V1/customers/:customerId (PUT) 
https://github.com/magento/magento2/pull/14757
When you call /V1/customers/:customerId (PUT) and the customer has a group id already and you don't provide groupId in the request the customer group id is set to 1.
This fix preserves the group id.


André Ferraz
ferrazzuk

[GitHub-14663](https://github.com/magento/magento2/issues/14663)





### General
<!--- ENGCOM-1272 -->*
Check if proExpected result
Return a 404 page similar to the product page on /catalog/product/view/id/1
Actual result
The page shows up as it would on website 1 with the review form, product image, title, description, add to cart (which throws an error if you try to use it), etc.
duct is assigned to current website 
https://github.com/magento/magento2/pull/14673
Checking if product is assigne to current website, before displaying "Write a review page".

Write a Review page works on multistore for products that are not assigned to that store

https://github.com/afirlejczyk
afirlejczyk




<!--- ENGCOM-2233 -->*
Fixed backwards incompatible change to Transport variable event parameters 

https://github.com/magento/magento2/pull/16601
 the type of event parameter "transport" was incorrectly changed from type DataObject to Array(). This change corrects this back to DataObject.

 We waht to change the payment_html for banktransfer invoices. Unfortunately the instruction is also sent in invioce email. And there the customer already has paid the bill.
Transport variable can not be altered in email_invoice_set_template_vars_before Event

[GitHub-10210](https://github.com/magento/magento2/issues/10210)

gwharton




<!--- ENGCOM-1639 -->*

Fix to allow use decimals less then 1 in subproducts qty 
https://github.com/magento/magento2/pull/15407
It is impossible to place an order from grouped product where subproducts qty less than one.

Yaroslav Rogoza
rogyar

[GitHub-14692](https://github.com/magento/magento2/issues/14692)

Seems that this 'validate-grouped-qty' validation haven't sense because validation should be done on the child elements.

And seems that current implementation is buggy. Seems that sense of this validation is check that sum of qty for all products is more then one. But what sense in it?


<!--- ENGCOM-1699 -->* Add resetting of triggerRecollection flag
In order to prevent collecting totals a few times without necessity, the trigger for recollecting totals should be set to 0 right after the recollecting. Also, backported fix from the 2.2 version.


Yaroslav Rogoza
rogyar

https://github.com/magento/magento2/pull/15522

[GitHub-9580](https://github.com/magento/magento2/issues/9580)


Expected result
The attribute trigger_recollect in a quote should be set to 0 (integer) at some time.
Actual result
In all the magento code, I could only see the attribute trigger_recollect in a quote being set to 1, but never back to 0.









<!--- ENGCOM-1693 -->*
Fix unnecessary recalculation of product list pricing

https://github.com/magento/magento2/pull/15445
Unnecessary recalculation of large product list pricing causes huge slowdowns.

[GitHub-14941](https://github.com/magento/magento2/issues/14941)


Steps to reproduce
Create a catalog where prices are including tax + prices are shown including tax.
Go to a category page and show 100 products per page.
Expected result
System does price calculation very efficiently
Actual result
It recalculates the tax while it shouldn't be doing that.

https://github.com/JeroenVanLeusden





<!--- ENGCOM-1777 -->*
set correct annotation
Set correct annotation to formatDateTime function in lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php file


Vishal Gelani
gelanivishal


[GitHub-15601](https://github.com/magento/magento2/issues/15601)


The annotation for locale and timezone should be @param string|null $locale and @param string|null $timezone
https://github.com/magento/magento2/pull/15668




<!--- ENGCOM-1778 -->*

https://github.com/magento/magento2/pull/15669
Set correct annotation to formatDateTime function in lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php file

Vishal Gelani
gelanivishal

The annotation for locale and timezone should be @param string|null $locale and @param string|null $timezone

[GitHub-15601](https://github.com/magento/magento2/issues/15601)




<!--- ENGCOM-1804 -->*
Refactor javascript code of button split widget

Format the javascript code in the template file spli.phtml for button widget



[GitHub-15354](https://github.com/magento/magento2/issues/15354)

Need to refactor template file and need to call js component which is already created
magento2\app\code\Magento\Ui\view\base\web\js\grid\controls\button\split.js

Vijay Golani
vijay-wagento
https://github.com/magento/magento2/pull/15736




<!--- ENGCOM-1841 -->*

https://github.com/magento/magento2/pull/15814
Browsing through the source code, we found occurences of the word "Caterory" in tests, which seemed as if it would be a typo. Please have a look - and just close it, if we are wrong. ;) Thank you!!!





<!--- ENGCOM-1859 -->* 1859
https://github.com/magento/magento2/pull/15767

First PDF download / export after login


[GitHub-15510](https://github.com/magento/magento2/issues/15510)




Steps to reproduce
Log in with an admin user who does not have the permissions Other Settings -> Notifications -> *
Right after login try to download any PDF or export data
Expected result
Download of generated file
Actual result
Redirect to Admin Dashboard

Sanjay Patel
sanjay-wagento


<!--- ENGCOM-1849 -->*
Styling <select> by changing less variables in Luma theme… 
https://github.com/magento/magento2/pull/15796

Hitesh
hitesh-wagento


[GitHub-15608](https://github.com/magento/magento2/issues/15608)


Expected result
Have "select" elements with the styles you set in theme.less
Actual result
select" elements have different styles




<!--- ENGCOM-1930 -->*

Trim username on customer account login page 

https://github.com/magento/magento2/pull/15874
Trim email address on customer account login page generally when copy and paste.

Description
Trim email address by remove leading or trailing space on the customer account login page email field.

Piyush Dankhara
dankhrapiyush

E11 user login email validation fails if field has leading or trailing space 
Steps to reproduce
Attempt login using IE with a valid user email but place a space either before or after the address.
Try again with Chrome.
Expected result
Client-side email validation should work the same in IE11 as it does in Chrome.
Actual result
Using IE, client-side validation fails with "Please enter a valid email address (Ex: johndoe@domain.com)."
Using Chrome, login succeeds. (padded whitespace is presumably trimmed?)


<!--- ENGCOM-2096 -->*

Trim email address in customer account create and login form 

Description
Trim email address by remove leading or trailing space on following forms.

Customer account login page (Improved PR code #15874)
Customer account create page
Customer authentication popup in case Allow Guest Checkout set to No

Client-side email validation should work the same in IE11 as it does in Chrome.


Piyush Dankhara
dankhrapiyush

https://github.com/magento/magento2/pull/16297

[GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!--- ENGCOM-1881 -->*

limiter float too generic

https://github.com/magento/magento2/pull/15880
Hitesh
hitesh-wagento

[GitHub-15323](https://github.com/magento/magento2/issues/15323)

Steps to reproduce
inspect toolbar in product list
compare styles of .limiter and .pages
Expected result
.limiter should have the same parent selectors like .pages to prevent clashes between styles and layouts
Actual result
.limiter is too generic and is used as single selector for floating the element



<!--- ENGCOM-1903 -->*
https://github.com/magento/magento2/pull/15917
Hitesh
hitesh-wagento

Changing @tab-content__border variable has no effect in Blank theme


Expected result
Tabs content has border

Actual result
Tabs content has no border


[GitHub-14999](https://github.com/magento/magento2/issues/14999)



<!--- ENGCOM-1870 -->*
contributor name: @viral-wagento
contributor link: https://github.com/viral-wagento

Resolve Knockout non-unique elements id in console error

https://github.com/magento/magento2/pull/15834

When enabling more than one payment methods from admin, It is giving an error in the console "Found elements with non-unique id billing-address-form "

[GitHub-15348](https://github.com/magento/magento2/issues/15348)

Multiple Payment Methods Enabled is giving error in console "Found 3 Elements with non - unique Id"



<!--- ENGCOM-1989 -->*

Added new less variables for primary button to change font-weight, font-size, font-family without changing default button attributes

[GitHub-15832](https://github.com/magento/magento2/issues/15832)


There is no @button-primary__font-weight for setting the font weight of the primary buttons.

Expected result
Possibility to change only primary button font-weight without changing regular button font-weight with less variables

Actual result
Primary button don't have specific variable and falling back to variable @button__font-weight

Chirag Matholiya
chirag-wagento

https://github.com/magento/magento2/pull/16037



<!--- ENGCOM-2048 -->*

https://github.com/magento/magento2/pull/15727
Added some style to solve space issue on a category page with one column layout.


[GitHub-12601](https://github.com/magento/magento2/issues/12601)


A space between the category page and the main footer when applying specific settings

Sanjay Patel
sanjay-wagento




<!--- ENGCOM-2061 -->*

unlock customer after password reset
https://github.com/magento/magento2/pull/16255
Vishal Gelani
gelanivishal

Customer who exceeded max login failures not able to login even after reset password

[GitHub-15255](https://github.com/magento/magento2/issues/15255)


Expected result
Customer should be allowed to login successfully as Reset Password completed successfully.
Actual result
Customer receives error "You did not sign in correctly or your account is temporarily disabled" even though new password hash is updated in customer entity



<!--- ENGCOM-2080 -->*
Fix duplicate element id issue
Chirag Matholiya
chirag-wagento

https://github.com/magento/magento2/pull/16264


[GitHub-13415](https://github.com/magento/magento2/issues/13415)

Steps to reproduce
Go to Stores -> Configuration -> Sales -> Sales under Gift Options and set both Allow Gift Messages to YES
Put something in cart and go to checkout or cart page
Expected result
Two forms for gift messages having fields with unique ids
Actual result
Two forms for gift messages having fields with non unique ids



<!--- ENGCOM-2068 -->* Refactor validate code in Tax module

https://github.com/magento/magento2/pull/16270

Refactor javascript validate code in Tax module.
Vishal Gelani
gelanivishal


[GitHub-15352](https://github.com/magento/magento2/issues/15352)

Use javascript inside .phtml file it's legacy code that we try to refactor according to Magento way.







<!--- ENGCOM-2084 -->*
Solve overlapping Issue on category page

https://github.com/magento/magento2/pull/16287

Chirag Matholiya
chirag-wagento


[GitHub-15213](https://github.com/magento/magento2/issues/15213)


Alignment & overlapping Issue on every Home page & category page of Hot Seller section

Steps to reproduce
On Home page there are issue worth alignment for after the second row of product listing (Hot seller section)
On Category Page there are section name Hot seller that section also same issue
Expected result
It would be in same alignment either same as second row or first row but alignment will be same






<!--- ENGCOM-2108 -->*


widget (jQuery UI DatePicker) with numberOfMonths = 2 or more


Steps to reproduce
set options to widget 'numberOfMonths'=> array(1,3),
set options on widget to any non-default values for 'numberOfMonths'
Expected result
jQuery UI DatePicker Widget with a list of months
Actual result
the first month is normal - the remaining corrupted
month header repeat
next month days not show


[GitHub-7379](https://github.com/magento/magento2/issues/7379)

https://github.com/magento/magento2/pull/16280

Burlacu Vasilii
vasilii-b

<!--- ENGCOM-2244 -->*
clickableOverlay-less-fix - added pointer-events rule to .modal- popup class to let user click deeper than modals and reach to overlay's div in modal-wrapper div


Problem: modal's overlay div would not catch click event because is covered by modal's div above. That's why modal is would not fire close event when user is clicking outside modal.

My proposition of solution for that issue is add pointer-events: none css rule to modals in theme's less files.

Prince Patel
mageprince



[GitHub-7399](https://github.com/magento/magento2/issues/7399)

Modal UI: clickableOverlay option doesn't work



### JavaScript
<!--- ENGCOM-2167 -->*
Estimate Shipping and Tax Form not works due to js error in collapsible.js

[GitHub-8222](https://github.com/magento/magento2/issues/8222)

The shipping and estimate tax form don't display the form with country, city, postcode fields.
The form is in the dom, but hidden.
The Cannot read property 'it/checkout/cart/block-shipping' of null javascript error appears in the console.


https://github.com/magento/magento2/pull/16491

Vishal Gelani
gelanivishal


### Newsletter
<!--- ENGCOM-2046 -->*
https://github.com/magento/magento2/pull/15860
Newsletter subscription confirmation message does not display after clicking link in email
Rahul Kachhadiya
https://github.com/rahul-kachhadiya


[GitHub-14747](https://github.com/magento/magento2/issues/14747)

Visit the store homepage.
Enter a valid email address in the newsletter subscription box, press submit.
In the subscription confirmation email, click on the link to confirm the subscription.
Expected result
Magento processes the subscription confirmation.
Magento redirects the user to the homepage with a success message stating the subscription was successful.
Actual result
Magento processes the subscription confirmation.
Magento redirects the user to the homepage, but there is no success message stating the subscription was successful.
Furthermore, if you enter a search term and press submit on the search form, the newsletter confirmation message will appear on the search results page.


### Quote
<!--- ENGCOM-1962 -->*
https://github.com/magento/magento2/pull/15829
Error While Trying To Load Quote Item Collection Using Magento\Quote\Model\ResourceModel\QuoteItem\Collection::getItems()

Neeta Kangiya
https://github.com/neeta-wagento


###  Sales
<!--- ENGCOM-1292 -->*
added GNU Free Font to be used by sales PDFs
The sales PDFs use the Libertine font which is not a unicode font and therefore it does not have full support of characters. It does not support Arabic, Russian, Greek, Indian or Thai alphabets and many more. For example it does not support the Indian rupee currency symbol ( ₹ ) and displays tofu boxes instead, which makes the PDF invoice totals illegible.

[GitHub-12323](https://github.com/magento/magento2/issues/12323)


Invoice PDF doesn't support Thai

Invoice and shipment PDF doesn't support Arabic 

https://github.com/magento/magento2/issues/9666


[GitHub-12323](https://github.com/magento/magento2/issues/12323)

Ross
rossmc

<!--- ENGCOM-1413 -->*
Pass parameter for export button url 

Pass parameter to export button url, configure button in invoice, shipment and creditmemo xml file

Extra rExpected result
Information related to one invoice only is displayed in CSV file

Actual result
Information related to both invoices from both orders is displayed in CSV file

This issue is also reproducible for Shipments and Credit Memos

ecords are in exported CSV file for order

Steps to reproduce
Log in to Admin
Go to Sales > Orders
Open one of the orders from preconditions
Go to Invoices tab
Click Export and select CSV
Open exported CSV file


Expected result
Information related to one invoice only is displayed in CSV file

Actual result
Information related to both invoices from both orders is displayed in CSV file

This issue is also reproducible for Shipments and Credit Memos

Yaroslav Rogoza
rogyar


<!--- ENGCOM-1727 -->*
Fix incorrect type hinting in PHPDocs
Incorrect PHPdoc causes warnings in IDE.

Changes applied:

Changed the return type for setQty method to the type it actually returns.
Removed the hint for never thrown LocalizedException in PHPDocs of register and setQty methods.

[GitHub-13992](https://github.com/magento/magento2/issues/13992)

Dmytro Cheshun
dmytro-ch
https://github.com/magento/magento2/pull/15619


### Search
<!--- ENGCOM-2079 -->*

Submitting search form (mini) with enter key fires event handlers bound by jquery twice

https://github.com/magento/magento2/pull/16281

When submitting the search form in the header with the enter key on the keyboard, event handlers that were bound to the form submit (through jQuery) are fired twice.

When submitting the search form in the header with the enter key on the keyboard, event handlers that were bound to the form submit (through jQuery) are fired twice.

[GitHub-13793](https://github.com/magento/magento2/issues/13793)

Vishal Gelani
gelanivishal



### Setup
<!--- ENGCOM-1856 -->*
Error 500 in Module Manager

https://github.com/magento/magento2/pull/15756

https://github.com/magento/magento2/pull/15756


Vijay Golani
vijay-wagento


Module Manager module grid is not working. Module Manager doesn't show module grid when going through below step:
System > Tools > Web Setup Wizard > Module Manager

[GitHub-15192](https://github.com/magento/magento2/issues/15192)


###  Sitemap
<!--- ENGCOM-1528 -->*Default schedule config for sitemap_generate job added

https://github.com/magento/magento2/pull/15159

Yaroslav Rogoza
rogyar

[GitHub-5768](https://github.com/magento/magento2/issues/5768)


Steps to reproduce
go to admin>store>configurtion>catalog>xml sitemap
turn on generation and set up time.
Expected result
generate sitemap in magento root folder.
Actual result
no xml sitemap is found. 

XML sitemap is not generated by schedule


### Swagger

<!--- ENGCOM-1935 -->*
https://github.com/magento/magento2/pull/15945

Added zero index to array signifier in searchCriteria parameters builder

This fix allows to generate correct response when user want to test method with some search criteria parameters in Swagger.


Magento
 REST API Schema (Swagger) is not compatible with Search Criteria

[GitHub-11477](https://github.com/magento/magento2/issues/11477)


Vishal Gelani
gelanivishal


### Swatches






### Translations

<!--- ENGCOM-2036 -->*
https://github.com/magento/magento2/pull/16229
Karla Saaremäe
Karlasa

Added translation possibility for moreButtonText


[GitHub-16079](https://github.com/magento/magento2/issues/16079)



## Community contributions
We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.



<table>
  <tr>
    <th>Contributing community member</th>
    <th>Pull request</th>
     <th>Related GitHub issue </th>
  </tr>
  <tr>
    <td><a href="https://github.com/ampulos" target="_blank">ampulos</a></td>
    <td>14665</td>
     <td><a href="https://github.com/magento/magento2/issues/13652" target="_blank"></a>13652</td>
  </tr>

   <tr>
    <td><a href="https://github.com/afirlejczyk" target="_blank">afirlejczyk</a></td>
    <td>14673</td>
     <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/afirlejczyk" target="_blank">afirlejczyk</a></td>
    <td>13010</td>
     <td><a href="https://github.com/magento/magento2/issues/14673" target="_blank">14673</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/swnsma" target="_blank">Oleksandr Kravchuk</a></td>
    <td>14471</td>
     <td><a href="https://github.com/magento/magento2/issues/14465" target="_blank">14465</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rossmc" target="_blank">Ross</a></td>
    <td>14711</td>
     <td><a href="https://github.com/magento/magento2/issues/9666" target="_blank">9666</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rossmc" target="_blank">Ross</a></td>
    <td>14711</td>
     <td><a href="https://github.com/magento/magento2/issues/12323" target="_blank">12323</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>14902</td>
     <td><a href="https://github.com/magento/magento2/issues/12430" target="_blank">12430</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>14903</td>
     <td><a href="https://github.com/magento/magento2/issues/12714" target="_blank">12714</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/ferrazzuk" target="_blank">André Ferraz</a></td>
    <td>14757</td>
     <td><a href="https://github.com/magento/magento2/issues/14663" target="_blank">14663</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15159</td>
     <td><a href="https://github.com/magento/magento2/issues/5768" target="_blank">5768</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/gwharton" target="_blank">gwharton</a></td>
    <td>15038</td>
     <td><a href="https://github.com/magento/magento2/issues/10210" target="_blank">10210</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15407</td>
     <td><a href="https://github.com/magento/magento2/issues/14692" target="_blank">14692</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/alepane21" target="_blank">Alessandro Pagnin</a></td>
    <td>13756</td>
     <td><a href="https://github.com/magento/magento2/issues/13704" target="_blank">13704</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15522</td>
     <td><a href="https://github.com/magento/magento2/issues/9580" target="_blank">9580</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/JeroenVanLeusden" target="_blank">Jeroen</a></td>
    <td>15445</td>
     <td><a href="https://github.com/magento/magento2/issues/14941" target="_blank">14941</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15619</td>
     <td><a href="https://github.com/magento/magento2/issues/13992" target="_blank">13992</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank">vgelani</a></td>
    <td>15668</td>
     <td><a href="https://github.com/magento/magento2/issues/15601" target="_blank">15601</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank">Vishal Gelani</a></td>
    <td>15668</td>
     <td><a href="https://github.com/magento/magento2/issues/15601" target="_blank">15601</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/gelanivishal" target="_blank">vgelani</a></td>
    <td>15669</td>
     <td><a href="https://github.com/magento/magento2/issues/15601" target="_blank">15601</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15714</td>
     <td><a href="https://github.com/magento/magento2/issues/7897" target="_blank">7897</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vijay-wagento" target="_blank">Vijay Golani</a></td>
    <td>15736</td>
     <td><a href="https://github.com/magento/magento2/issues/15354" target="_blank">15354</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vijay-wagento" target="_blank">Vijay Golani</a></td>
    <td>15756</td>
     <td><a href="https://github.com/magento/magento2/issues/15192" target="_blank">15192</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank">Viral Vasara</a></td>
    <td>15816</td>
     <td><a href="https://github.com/magento/magento2/issues/15319" target="_blank">15319</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank">Viral Vasara</a></td>
    <td>15814</td>
     <td><a href="https://github.com/magento/magento2/issues/15590" target="_blank">15590</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/sanjay-wagento" target="_blank">Sanjay Patel</a></td>
    <td>15767</td>
     <td><a href="https://github.com/magento/magento2/issues/15510" target="_blank">15510</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank">Hitesh</a></td>
    <td>15796</td>
     <td><a href="https://github.com/magento/magento2/issues/15608" target="_blank">15608</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank">Viral Vasara</a></td>
    <td>15801</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank">Chirag Matholiya</a></td>
    <td>15797</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank">Chirag Matholiya</a></td>
    <td>15841</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15855</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank">Vitaliy</a></td>
    <td>15290</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15866</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank">Rahul Kachhadiya</a></td>
    <td>15887</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/DanielRuf" target="_blank">Daniel Ruf</a></td>
    <td>15920</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15924</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15925</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15927</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15933</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>15945</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>15943</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/saurabh-parekh" target="_blank"></a>Saurabh Parekh</td>
    <td>15949</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>15643</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dankhrapiyush" target="_blank"></a>Piyush Dankhara</td>
    <td>15874</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>15880</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>15915</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>15917</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank"></a>Dmytro Cheshun</td>
    <td>16026</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16024</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>16031</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16043</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/neeta-wagento" target="_blank"></a>Neeta Kangiya</td>
    <td>15829</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>15776</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank"></a>Viral Vasara</td>
    <td>15834</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank"></a>Rahul Kachhadiya</td>
    <td>15862</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16067</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16081</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16037</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>16102</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/lfluvisotto" target="_blank"></a>Leandro F. L.</td>
    <td>16130</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>16111</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16039</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16162</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank"></a>Rahul Kachhadiya</td>
    <td>15863</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank"></a>Vitaliy</td>
    <td>15236</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank"></a>Vitaliy</td>
    <td>15287</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank"></a>Vitaliy</td>
    <td>15289</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/tdgroot" target="_blank"></a>Timon de Groot</td>
    <td>15722</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank"></a>Dmytro Cheshun</td>
    <td>15699</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/sanjay-wagento" target="_blank"></a>Sanjay Patel</td>
    <td>15821</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank"></a>Rahul Kachhadiya</td>
    <td>15860</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/sanjay-wagento" target="_blank"></a>Sanjay Patel</td>
    <td>15727</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/tejash-wagento" target="_blank"></a>Tejash Kumbhare</td>
    <td>16226</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16255</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16294</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16270</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16264</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16281</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dankhrapiyush" target="_blank"></a>Piyush Dankhara</td>
    <td>16297</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/NamrataChangani" target="_blank"></a>Namrata Changani</td>
    <td>16319</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16325</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16287</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16347</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/lfluvisotto" target="_blank"></a>Leandro F. L.</td>
    <td>16359</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/lfluvisotto" target="_blank"></a>Leandro F. L.</td>
    <td>16366</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vasilii-b" target="_blank"></a>Burlacu Vasilii</td>
    <td>16280</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16352</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16403</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16467</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16475</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/Karlasa" target="_blank"></a>Karla Saaremäe</td>
    <td>16229</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/eduard13" target="_blank"></a>Chitoraga Eduard</td>
    <td>16392</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16491</td>
     <td>8222</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16547</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/mageprince" target="_blank"></a>Prince Patel</td>
    <td>16577</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/mageprince" target="_blank"></a>Prince Patel</td>
    <td>16577</td>
     <td>N/A</td>
  </tr>







<tr>
    <td><a href="https://github.com/mageprince" target="_blank"></a>Prince Patel</td>
    <td>16586</td>
     <td>N/A</td>
  </tr>




</table>




### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).


old table 
<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Atwix</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14332">14332</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14479">14479</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14348">14348</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14480">14480</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14151">14151</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14117">14117</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14098">14098</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14096">14096</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13806">13806</a></td>
    <td><a target="_blank" href="https://github.com/magento/magento2/issues/4173">4173</a>, <a target="_blank" href="https://github.com/magento/magento2/issues/5808">5808</a>, <a target="_blank" href="https://github.com/magento/magento2/issues/6694">6694</a>, <a target="_blank" href="https://github.com/magento/magento2/issues/3489">3489</a> </td>
  </tr>

  <tr>
    <td>Divante</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13980">13980</a></td>
    <td><a target="_blank" href="https://github.com/magento/magento2/issues/13315">13315</a></td>
  </tr>

  <tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13654">13654</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13658">13658</a>,  <a target="_blank" href="https://github.com/magento/magento2/pull/13486">13486</a></td>
    <td><a target="_blank" href="https://github.com/magento/magento2/issues/13474">13474</a></td>
  </tr>






## System requirements

Our technology stack is built on PHP and MySQL. For more information, see <a href="http://devdocs.magento.com/guides/v2.1/install-gde/system-requirements2.html" target="_blank">System Requirements</a>.


## Installation

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.1/install-gde/bk-install-guide.html) for comprehensive information about Magento 2.1.x installation and setup. 


## Migration toolkits 

The Magento [Data Migration Tool](http://devdocs.magento.com/guides/v2.1/migration/bk-migration-guide.html) helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install Data Migration Tool](http://devdocs.magento.com/guides/v2.1/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions,  bug reports and code contributions. 


