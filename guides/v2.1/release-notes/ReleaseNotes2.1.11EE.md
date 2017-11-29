---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.11 Release Notes
menu_title: Magento Commerce 2.1.11 Release Notes
menu_order: 254
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
version: 2.1
github_link: release-notes/ReleaseNotes2.1.11EE.md
---

*	TOC
{:toc}

*Patch code and release notes were published on December 5,  2017.*


We are pleased to present Magento Commerce  2.1.11. This release includes important enhancements to your Magento software.



## Highlights

Magento 2.1.11 contains over . Look for the following highlights in this release:



## Fixed issues



### Installation, setup, and deployment


### Cache
<!--- 72798 -->* We’ve resolved an issue where store websites do not work when Redis cache is installed and the PhpRedis extension is enabled.


### Cart and checkout
<!--- 80324 -->* Magento now sends email as expected about failed transactions. Previously, Magento logged the error to `support.log` but did not generate a payment failed email when you selected **Admin > Stores > Configuration > General > Store Email Addresses > Custom Email 1 > Sender Email = <your email>**. 



### Catalog
<!--- 83631 -->*  `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns only items that have  existing relations in `catalog_product_entity` table. Previously, this service loaded all quote items (including those with removed products) during initialization.

<!--- 72312 -->* Layered navigation now works correctly when filtering categories that contain configurable products with no available options. 

<!--- 69845 -->* You can now unselect the 'Use Default Value' setting in the store view level without unselecting other attributes. Previously, 


Unselecting 'Use Default Value' on a store view causes other attributes to be unselected or their Use Default Value setting cannot be changed. Unselecting 'Use Default Value' on store view on certain attributes causes other attributes to be unselected as well, and some 'Use Default Value' fields cannot be re-selected. 


### Configurable products

<!--- 83313 -->* "Out of stock options for configurable products still show up in search and layered navigation if Elasticsearch is enabled"
Actual Result:
Layer Navigation shows random results - sometimes out of stock items appear in stock and vice versa. Sometimes the color attribute may not even appear in Layered Navigation.
Expected Result:
You should see only blue and green products in layered navigation


<!--- 76185 -->* 

Magento now displays the correct error message when you try to upload an unsupported file format. Previously, Magento displayed an error message associated with 


When buying a configurable product with a customizable option of type FILE, if user attempts to upload an unsupported file, the error 
"You need to choose options for your item." appears and selected options are unselected.
The error is not related to the actual problem (uploading unsupported file) and merchant considers it is not UI friendly for the customers.
expected results

If the user attempts to upload a file with unsupported file format, a descriptive error associated to invalid file format should be displayed and the selected configurable options should remain selected.

actual results
If the user attempts to upload a file with unsupported file format, the error "You need to choose options for your item." appears (error not associated to the actual problem) and the options selected by the user are lost, forcing the user to re-select the options.






### General
<!--- 83646 -->* Encrypted scope-specific config values fail to decrypt on PHP7 #8591 It seems that scope based config fails to decrypt data on anything but the default store

Actual result:
The user field is blank, and the password field is garbed nonsense, from what I can only assume is a fail to decryp


[GitHub-8591](https://github.com/magento/magento2/issues/8591)



<!--- 82539 -->* Customer segment not automatically refreshing for conditions based on order amount. Customer segment rules are not updated if the condition is based on the number of orders for a specific customer account. 

EXPECTED RESULTS:
Banner should display as soon as the customer account is created since it matches the condition
ACTUAL RESULTS:
The customer segment is not updating automatically and preventing dependent functions such as price rules and banners from activating correctly

<!--- 82242 -->* Fixed amount discount for whole cart applying an extra cent to the discount amount. 
EXPECTED RESULTS:
Discount with the sample products that have a price of $0.00 in the cart should equal 15.00
ACTUAL RESULTS:
Discount with the sample products that have a price of $0.00 in the cart equals 15.01

<!--- 72206 -->* After confirming a customer’s account, the Magento welcome message now displays the customer's first and last name.


<!--- 70322 -->* Products in the cart with a price of $0.00 are causing an extra cent to be applied to the discount amount. 

[GitHub-9453](https://github.com/magento/magento2/issues/9453)

<!--- 69496 -->* Impossible specify Bundle option title on store view level with changes to more than one store view
EXPECTED RESULTS:
You should be able to set the store view title on multiple store views
ACTUAL RESULTS:
After making a change to the store view title on a second store view, the previous store view is now showing the default title for the store view title

### Framework
<!--- 80426 -->* Calling the getCustomAttributes() method on a product instance before it is saved, internal data property structure is changed and extracted incorrectly before saved

### Import/export
<!--- 82554 -->* Unable to import customer addresses with website country restrictions
Setup multiple websites. Website1 - country restrictions set to only France, Website2 - only Spain
Create customer on Websites2 (Spain) with addresses
Export customer addresses
Try to import it back - note that it works fine
Create another customer on Website 1 (France).
Import the same csv
Actual result:
An error


<!--- 69857 -->*  Magento now successfully imports customer multiselect attributes. Previously, when you imported a CSV file with either the option's ID numbers or the option's values, Magento returned an error.

<!--- 69718 -->* now custom options id's are not changed every time product is imported or saved. 
Actual result:
Old option value ids are deleted. New values are added with newly created ids.
Expected result:
Option id's should not be changed




### Payment methods
<!--- 83149 -->* Magento PayPal integration now supports the Indian Rupee currency (INR)


<!--- 71625 -->* Error when trying to refund PayPal Express order. Merchant is not able to create a credit memo due to total mistmach that cause error "Maximum shipping amount allowed to refund is: £4.94".
Per investigation, it looks like there's a rounding issue as I see 1 penny difference in the totals.

<!--- 71522 -->* Checkout using Paypal with configurable product fails and increases QTY of both configurable and simple products. Checkout using Paypal with configurable product fails with error "We can't place an order" and increases QTY of both configurable and simple products. v


<!--- 71185 -->*  Braintree online refund not working for two websites using individual Braintree accounts. 
When using two Braintree accounts for two separate websites, refund processing in Admin Panel does not process correctly and gives the following error on the frontend:
"Sorry, but something went wrong"
The error above is shown when you try and process a refund for an order that is not from the website currently set to default in stores>all stores
EXPECTED RESULTS:
Refund is processed without error.
ACTUAL RESULTS:
Refund does not process.



### Shipping

### Search
<!--- 72246 -->* Elastic search indexation enhancements. In scope of HH performance optimization team has prepared patch to speed up full text indexer (Elastic) procedure. Patch is specific for client code version which is 2.1.4, but should be ported to mainline as valuable optimization. 



#### Elasticsearch



### Staging
<!--- 71669 -->* Incorrect date format with Arabic language locale. When using the Javascript calendar and the Arabic (Kuwait) locale, dates are displayed incorrectly on the product page. Date format is shown as 182017/05 instead of 18/05/2017.


EXPECTED RESULTS
Date should appear in day/month/year format
ACTUAL RESULTS
Date appears as dayyear/month with no separator between the day and year.



### Tax
<!--- 72280 -->* Magento now correctly calculates the tier price percentage when displayed prices include tax. [GitHub-8833](https://github.com/magento/magento2/issues/8833)



<!--- 69716 -->* Default Magento Attribute is not saving. 
Steps to reproduce:
Go to Stores > Attributes > Product
Find and open 'tax_class_id' attribute
Try update attribute (for example: change Visible on Catalog Pages on Storefront from No to Yes)
Click Save Attribute button
Expected result:
Message: You saved the product attribute.
Attribute is saved.

Actual result:
Page goes into bootloop

[GitHub-9669](https://github.com/magento/magento2/issues/9669), [GitHub-8870](https://github.com/magento/magento2/issues/8870), [GitHub-9552](https://github.com/magento/magento2/issues/9552), [GitHub-10029](https://github.com/magento/magento2/issues/10029)


### Translations
<!--- 71591 -->* You can now implement translations from themes (in contrast to translations from modules). 



### URL rewrites

### Varnish
<!--- 83460 -->*  Varnish / Fastly - Magento can cache & return cached cart and similar sensitive data. Improved cache control headers were set to cover the edge case, when the user-specific content like the content of cart may have been cached.

<!--- 71701 -->* In environments running Varnish, the menu item of the active category page is now handled as the active class as expected. Previously, activating cache interfered with Magento setting the appropriate CSS class to active in environments where Varnish was enabled. [GitHub-6609](https://github.com/magento/magento2/issues/6609)


### Visual Merchandiser 
<!--- 70287* -->*  We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).

### Web API framework
<!--- 70498* -->* If a configurable product is part of a shipment being created via REST, only the parent's quantity will be counted towards total shipment item quantity. Previously, Magento counted both the parent and child product of the configurable product, which resulted in a count of two products added to the shopping cart. 


### Wishlist
<!--- 70611 -->* A product assigned a special price now displays this price in the wishlist. Previously, products with special prices displayed regular prices in the wishlist. 





<!--- 84476 -->* Trying to get data from non existent products. 
When calling Products in Cart report, it called data of deleted products resulting in exception trying to access $productData[$item->getProductId()]
Preconditions
<!--- Provide a more detailed information of environment you use -->
<!--- Magento version, tag, HEAD, etc., PHP & MySQL version, etc.. -->
1. Magento 2.1.10
Steps to reproduce
<!--- Provide a set of unambiguous steps to reproduce this bug include code, if relevant -->
1. Delete a product recently sold
1. Open Reports > Marketing > Products in Cart
Expected result
<!--- Tell us what should happen -->
1. List of products
Actual result
<!--- Tell us what happens instead -->
1. Blank list




<!--- 84444 -->*  Mview does not work with Staging. row_id is used instead of entity_id when triggers collect changelogs. This leads to wrong products indexed instead of those being really affected. EE ONLY

<!--- 84432 -->* Exception triggered every time a category that has an image is saved. 

<!--- 84238 -->* Export data from grid not adding custom rendered data magento2. Description
Adding methods to set text values for data pulled from customer_grid_flat table during CSV export
Fixed Issues (if relevant)
magento/magento2#10765

<!--- 84108 -->* Transport variable can not be altered in email_invoice_set_template_vars_before Event (backport MAGETWO-69482 to 2.1) ORDER MANAGEMENT



<!--- 83956 -->* Resolve Notice with undefined index 'value. If you have a custom *offline* payment method it automatically falls in exception group used while fetching all payment methods this cause that payment method don't have *value* key in the definition and as the result - undefined index on order view page in admin panel. My fix adds key *value* as null and it fixes the notice.

#3596

<!--- 83760 -->* Sections missing from Stores > Configuration > General > Design #5256


<!--- 83193 -->* Import configurable_variations does not work as expected. Our partner reports that when trying to assign configurable_variations via import these are not added to the configurable products. EXPECTED RESULTS:
configuration_variations should work
We are trying to update existing simple products using the configuration_variations
ACTUAL RESULTS:
Import reports success > the configuration_variations passes validation, however the simple products are not updated.


<!--- 71515 -->*  Special/lowest price in child of a Configurable Product causes the entire product to show that price


<!--- 70468 -->*  Empty container is displayed when CMS Block is disabled. 
Preconditions
Create and save CMS block with the following attributes:
Title - Sales25off
Status - Disabled
Content - Sales 25off everything!
Storeviews - All store views
Steps
Go to Content->Widgets->Create new
Create new Widget:
Type - CMS Static Block
Layout Updates:
All pages
Page top
Save widget
Expected result 
Page is displayed with no changes
Actual result
Empty container appears on the top of the page

<!--- 66481 -->*  You can now successfully create a product and assign it to a store without encountering the following error: `Unique constraint violation found`. [GitHub-6671](https://github.com/magento/magento2/issues/6671)
  
<!--- 69343 -->* Google Analytics tracking is not working after enabling cookie restriction mode. After being configured in Magento, the tracking script does not appear anywhere on the site. EXPECTED RESULTS
Google Analytics tracking script should appear on the site.
ACTUAL RESULTS
Google Analytics tracking script is not added to the site headers and no tracking occurs. 5596

<!--- 64066 -->* Magento no longer discounts items that belong to an excluded category. Previously, you were unable to exclude products assigned to a specific category due to the cart price rule SALES RULE

<!--- 61133 -->* Wrong drop-down option labels for configurable products when using attributes with custom source. Create an attribute for the product entity with a custom source (attr_test).CONFIGURABLE PRODUCT

<!--- 58515 -->*  Simple product videos now display the embedded video player instead of the thumbnail image. [GitHub-6360](https://github.com/magento/magento2/issues/6360), [GitHub-8882](https://github.com/magento/magento2/issues/8882)

<!--- 59155 -->*  memory_limit issue after running customer_grid indexer. After importing 140K customers I get memory_limit issue after running reindex for customer_grid.


<!--- 57166 -->*  Sitemap generation in wrong folder when vhost is connected to pub folder 2802 SITEMAP



<!--- INTERNAL ONLY  83263 71185 71021 -->

<!--- NOT NEEDED   84545 72376 70373 70157 69577 69512 69344 69213 69107 69036 68871 67681 67402 66565 66446 65467 65466 65049 64742 64743 64729 64429 64459 64146 64126 63226 62621 62040 61164 60755 58503 77969 82224 84325 84298 84266 84011 71576-->*
-->
-->*
 -->*
-->*
-->

 -->

<!--- DUPLICATE -->

<!--- CANCELED 72400 -->

<!--- WON'T FIX 82982 75622 72534 -->
-->*
-->*


<!--- CANNOT REPRODUCE 75121 58460-->

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
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11378">11378</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10441" target="_blank">10441</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11451">11451</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11328" target="_blank">11328</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11674">11674</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7591" target="_blank">7591</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11678">11678</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11523">11523</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10301" target="_blank">10301</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11753">11753</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7927" target="_blank">7927</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11590">11590</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11586" target="_blank">11586</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11761">11761</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11322" target="_blank">11322</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11640">11640</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9007" target="_blank">9007</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11611">11611</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6891" target="_blank">6891</a></td>
    <td><a target="_blank" href="https://github.com/mrodespin">Marc Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11606">11606</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11758">11758</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11729" target="_blank">11729</a></td>
    <td><a target="_blank" href="https://github.com/hauso">HausO</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11728">11728</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/angelo983">@angelo983</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11844">11844</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4808" target="_blank">4808</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11848">11848</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7640" target="_blank">7640</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11932">11932</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10185" target="_blank">10185</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11804">11804</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/thiagolima-bm">Thiago</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11890">11890</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8799" target="_blank">8799</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11920">11920</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11960">11960</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11898" target="_blank">11898</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11621">11621</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12022">12022</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7995" target="_blank">7995</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11316">11316</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5439" target="_blank">5439</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11786">11786</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8846" target="_blank">8846</a></td>
    <td><a target="_blank" href="https://github.com/gomencal">gonzalopelon</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12040">12040</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11996" target="_blank">11996</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12045">12045</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7903" target="_blank">7903</a></td>
    <td><a target="_blank" href="https://github.com/lionelalvarez">@lionelalvarez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11861">11861</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11697" target="_blank">11697</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12092">12092</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lazyguru">Joe Constant</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11432">11432</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11022" target="_blank">11022</a></td>
    <td><a target="_blank" href="https://github.com/davidverholen">David Verholen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11596">11596</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10032" target="_blank">10032</a></td>
    <td><a target="_blank" href="https://github.com/PieterCappelle">Pieter Cappelle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11739">11739</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/navarr">Navarr Barnier</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11631">11631</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9830" target="_blank">9830</a>, <a href="https://github.com/magento/magento2/issues/10530" target="_blank">10530</a></td>
    <td><a target="_blank" href="https://github.com/rogyar">Yaroslav Rogoza</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12111">12111</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12115">12115</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6597" target="_blank">6597</a>, <a href="https://github.com/magento/magento2/issues/8094" target="_blank">8094</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11901">11901</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10767" target="_blank">10767</a></td>
    <td><a target="_blank" href="https://github.com/tr33m4n">Daniel Doyle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11919">11919</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8172" target="_blank">8172</a>, <a href="https://github.com/magento/magento2/issues/8089" target="_blank">8089</a>, <a href="https://github.com/magento/magento2/issues/10507" target="_blank">10507</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12106">12106</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ChuckyK">@ChuckyK</a></td>
  </tr>
</table>

## System requirements
Our technology stack is built on PHP and MySQL. For more information, see <a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


