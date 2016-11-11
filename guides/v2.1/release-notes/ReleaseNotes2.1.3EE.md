---
layout: default
group: release-notes
subgroup: 02_ReleaseNotes
title: Magento EE 2.1.3 Release Notes
menu_title: Magento EE 2.1.3 Release Notes
menu_order: 10
version: 2.1
github_link: release-notes/ReleaseNotes2.1.3EE.md
---

*	TOC
{:toc}


## Magento Enterprise Edition 2.1.3
We are pleased to present Magento Enterprise Edition 2.1.3. This release includes security enhancements and several functional fixes.



Backward-incompatible changes are documented in [Magento 2.1 backward incompatible changes]({{ page.baseurl }}release-notes/backward-incompatible-changes-2.1.html).


## Highlights

Magento 2.1.3 contains multiple bug fixes and enhancements, including

* performance improvements

* API enhancements

* improvements to configurable product processing

* payment method enhancements

* new browser support




## Functional fixes and enhancements
We address the following functional fixes and enhancements in this release.



### Indexing


<!---56928-->* We've improved the performance of the algorithm that Magento uses to calculate batch while indexing categories.  


<!---57470 -->* Magento no longer throws an indexing error when Elastic search is enabled.

<!---58703-->* The Category/Product indexer now successfully completes a full reindexing of all indexers on large profiles with 500k+ products. Previously, Magento successfully generated a large profile, but failed to complete the reindexing of the categories or products.







### Import/Export

<!---58977-->* Import issue with a multiselect option having special symbols (, and |). 

<!---56804-->* Fixed issue with the correct representation of date and timezones of items in product catalog during import or export. Previously, Magento exported all dates in the default format (UTC-8), including values you set to be displayed using another standard. 


<!---57052-->* You can now import negative quantities. Previously, when importing a product quantity  of '-1',  Magento returned an error. 

<!---56018-->* Magento now imports custom options correctly. <a href="https://github.com/magento/magento2/issues/5573" target="_blank">(GITHUB-5573)</a> 


<!---57438-->* You can now successfully import images if you've set document root to `/pub`. Previously, you needed to set document root to `/magento` to import images. <a href="https://github.com/magento/magento2/issues/5359" target="_blank">(GITHUB-5359)</a>


<!---57490-->* Magento now removes category URL keys from the `url_rewrite` table as expected. Previously, Magento did not remove these keys, which resulted in failed import processes and quickly reaching the maximum error count. When importig products, the store returns an error: "Maximum error count has been reached or system error is occurred!". Import should complete without issues. <a href="https://github.com/magento/magento2/issues/1471" target="_blank">(GITHUB-1471)</a> 


<!---57981-->* You can now export a bundle product that containa a custom Text Area attribute.  Previously, if you tried to export this type of bundle product, the export would fail, and Magento displayed the message, "There is no data for the export".

<!---60479-->* Importing existing products with 'Replace' behavior gives no errors and deletes them. 
















### Installation and upgrade

<!---56397, 58064-->* Unable to Upgrade with Split Databases

<!---58742-->* We've resolved multiple issues with the upgrade process from 2.0.7 to 2.1.x (for example, editing a category post-upgrade no longer results in a 500 error). 

<!---56977-->* We fixed an issue successfully setting up Magento using the web installer. Previously, if you tried to install Magento with the web installer, Magento would indicate that the readiness check failed, and not complete installation. 


<!---60559-->* Queue `catalog_product_removed_queue` does not exists after upgrade. OPEN

<!---57343-->*  You can now deploy build processes on a different staging machine than the one you're running your production environment on. 

<!---58312-->* Products are no longer  “out of stock” after update from 2.0.7 to 2.1.0 <a href="https://github.com/magento/magento2/issues/5222" target="_blank">(GITHUB-5222)</a> 

<!---57943-->* Magento 2.0.x and 2.1.x does not respect table prefix during installation. <a href="https://github.com/magento/magento2/issues/5688" target="_blank">(GITHUB-5688)</a> 




### Performance
We've improved the performance of these tasks: 

<!---56927-->* Opening many products from the Admin interface.


<!---55300-->* Creating many (2500 - 5000) product variants  


<!---58433-->* Saving category on catalog with 20k+ products is very slow (from 5mins till 1 hour) OPEN

<!---59806-->* Loading many configurable products with multiple images (for example, configurable products with three attirbutes and 250 options). <a href="https://github.com/magento/magento2/issues/6979" target="_blank">(GITHUB-6979)</a> 






### Configurable products

We've enhanced the performance of configurable products in several ways:

<!---57055/52717-->*  You can now successfully disable the lowest price of a configurable product and its associated simple products. Previously, Magento displayed a configurable product's lowest price even after you disabled the price. <a href="https://github.com/magento/magento2/issues/4419" target="_blank">(GITHUB-4419)</a>



<!---56998 -->* Magento no longer applies one simple product's special price to another simple product of the same configurable product. Previously, when you set a regular and special price for a child product, all products associated with the same configurable product displayed a regular and special price, even when these amounts were the same. <a href="https://github.com/magento/magento2/issues/4442" target="_blank">(GITHUB-4442)</a>, <a href="https://github.com/magento/magento2/issues/5097" target="_blank">(GITHUB-5097)</a>, <a href="https://github.com/magento/magento2/issues/6645" target="_blank">(GITHUB-6645)</a>


<!---58291-->* Magento no longer displays the "Invalid Form Key" exception when you try to save a configurable product with more than fifty options.

<!---54808 -->* You can now edit a product attribute for multiple configurable products. Previously, when you tried to bulk-edit an attribute on a collection of filtered, configurable products, Magento would complete the process without effecting the edits and then incorrectly tell you that the products had been edited.

<!---59953-->* The price you set on the website scope no longer overrides any local settings you set on configurable products on the storeview level.

<!---60483-->* Catalog broken when all child products of configurable are disabled

<!---54808-->* Unable to mass-edit a product attribute for a configurable product
























### Payment methods

<!---56910-->* The Braintree payment method now works as expected with Vault table prefixing.  


<!---57426-->* Magento no longer throws an error when using the Braintree Vault payment GET order API call. <a href="https://github.com/magento/magento2/issues/6215" target="_blank">(GITHUB-6215)</a>


<!---59578 -->* Merge PayPal Ask MAGETWO-40517 and MAGETWO-52475


As a Merchant i want to have an ability to vault PayPal accounts when using Braintree as a service so i can offer quick an secure method to re-charge my customers without asking them to log in to PayPal from every singe device they use
As a Merchant i want to have an ability to re-order and edit order using transaction saved in Vault for guest customer so i can offer quick an secure method to re-charge my customers without asking them a payment details again
As a Merchant i want to have Maestro and Discover bins updated to latest ones so i can accept all possible cards from the customers increasing my conversion
Acceptance Criteria:
(Must Haves)
Maestro and Discover bins added to the credit card form both for Braintree and PayPal solutions
Customer is able to save PayPal details with the merchant's store using Vault to make future purchases
Admin user is able to re-order and edit order using transaction saved in Vault for guest customer
Helps links are updated to reflect latest knowledge base articles hosted by Braintree

As a Merchant i want to have an ability to send dynamic descriptors to the Braintree so i can allow customers to easily identify a source of transactions in their bank statements and so i can avoid spending time on resolving disputed transactions filed accidentally
Card
As a Merchant i want to show Kount status for Braintree in the admin panel so i can easily identify fraud and offer a better service to the customers
Acceptance Criteria:
(Should Haves)
(Bug) Kount transactions are not processed
Merchant can configure Dynamic Descriptors (Company Name, Phone and URL) system configuration parameters to be passed to Braintree
Phone/ZIP code validation before submitting those to Braintree

<!---59353-->* You can now use JCB and Diners Club credit cards with the Authorize.net payment method.
<!--- 59124-->* Fixed issue with credit card capture information failing to remain associated with its first authorization. <a href="https://github.com/magento/magento2/issues/6716" target="_blank">(GITHUB-6716)</a> 

<!---57086-->* You can now successfully place orders with Braintree when using an alternative merchant account ID. (Merchant account does not need to match the 3D Secure authorization merchant account.) <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a> 




### Tier pricing

<!---57625-->* Magento no longer resets the tier price during quote recalculation. Previously, when you triggered an automatic quote recalculation (by changing the shipping address, for example), the tier price was lost. (This issue occured only if the product record in the database has values for `row_id` and `entity_id` that don't match.)


<!---56922-->*  Magento no longer adds a thousand separator ( , ) to representations of quantities that exceed 1000.  <a href="https://github.com/magento/magento2/issues/5745" target="_blank">(GITHUB-5745)</a> 



















### APIs

<!---56961-->* With valid permissions, you can now regain access to your Admin account after temporary disablement due to invalid Admin credentials. 


<!---57297-->* Category empties when updating product with REST API. When updating products using the REST V1 PUT API request, the category the product is assigned to becomes empty. Creating new products works correctly. OPEN


<!---60460-->* Remove minor changes in Payment and Vault API


<!---57039-->* You can now update a product's media gallery through the REST API. 


<!---56432-->* Creditmemo creation through API change order status

<!---59422-->* Ability to return the product to the stock after Creditmemo API

<!---56428-->* Invoice creation through API change order status.







### Gift cards


<!---57054 -->* Order emails now specify the amount of the gift card that you've purchased. 

<!---56932 -->* The Checkout page no longer freezes when you order a virtual gift card using the Authorize.net Payment Action value set to Authorize and Capture.

<!---57512-->*  You can now complete the purchase of a gift card in environments where you have set the Braintree payment method Payment Action to Authorize and Capture. Previously, any order made under these conditions would remain indefinitely in the 'processing' stage. 



<!---57353-->* You can now add a gift card with an undefined amount to the Items Ordered table. Previously,  Magento did not permit you to add a gift card of an open value into this table.












### Orders

<!--- 57077-->* You can now set the customer group when creating a new order from the Admin dashboard.  <a href="https://github.com/magento/magento2/issues/6162" target="_blank">(GITHUB-6162)</a> 

<!---57387 -->* You can now print invoices and credit memos from the Order page. 








### Cart and checkout
{:.no_toc} 

<!---58036-->* You can now reload a page during checkout without unintentionally changing shipping information. 

<!---58902-->* Custom address attributes now appear in the Checkout summary.  

<!---57497-->* Lengthy Order Status tables are now paginated as expected. 

<!---56956-->* Magento now displays the product add validation message ("Product was added to the cart") only after you've successfully added a product to your cart.

<!---58057-->* We've resolved an issue adding more than one product to a shopping cart from a wishlist. <a href="https://github.com/magento/magento2/issues/5282" target="_blank">(GITHUB-5282)</a> 

<!---59209-->* The number of items in the minicart is now updated correctly when you run Magento in mixed HTTP/HTTPS mode. <a href="https://github.com/magento/magento2/issues/6487" target="_blank">(GITHUB-6487)</a> 

<!---60143-->* You can now successfully create a new checkout agreement. <a href="https://github.com/magento/magento2/issues/7171" target="_blank">(GITHUB-7171)</a> 

<!---57168-->* We fixed a JavaScript error that occured on the Checkout page after you change the country in the Estimate Shipping and Tax field.

<!---57062-->* The minicart now performs as expected in deployments that span multiple websites. Previously, the client has two websites and after adding products in one website those same products are appearing in the other websites minicart

<!---57843-->* Coupon code override cart rules with no coupon code. When two cart rules are created and can be applied to the cart and on of the rule has a coupon then the rule with the coupon will be applied and the second rule will not.<a href="https://github.com/magento/magento2/issues/7171" target="_blank">(GITHUB-6294)</a> ?







### Tracking and shipping
{:.no_toc}  

<!---57037-->* UPS now generates shipping rates for Puerto Rico postal codes.




### Staging

<!---51776-->* Staging cannot be turned off during web installation

<!---60456-->* Staging modules could be disabled partially

<!---57346-->*  The CMS page now refreshes as expected after an update. 




### Images
<!---55447-->* Magento no longer throws an exception when it cannot find a product image file. <a href="https://github.com/magento/magento2/issues/5184" target="_blank">(GITHUB-5184)</a>, <a href="https://github.com/magento/magento2/issues/5497" target="_blank">(GITHUB-5497)</a>,  <a href="https://github.com/magento/magento2/issues/3545" target="_blank">(GITHUB-3545)</a>, <a href="https://github.com/magento/magento2/issues/5871" target="_blank">(GITHUB-5871)</a>

<!---56944-->*  Magento now successfully saves images that you edit in a WYSIWYG editor. 

<!---58335-->* You can now preview uploaded images.

<!---60041-->* Resize images mechanism is broken on frontend 2.1.3

<!---56972-->* You can now set an image size for product watermarks. <a href="https://github.com/magento/magento2/issues/5270" target="_blank">(GITHUB-5270)</a> 

<!---55608-->*  Graphics now scroll as expected on mobile devices. <a href="https://github.com/magento/magento2/issues/5302" target="_blank">(GITHUB-5302)</a> 







### General fixes
{:.no_toc} 


<!---57144-->* You can now assign a blank value to an attribute. <a href="https://github.com/magento/magento2/issues/3545" target="_blank">(GITHUB-3545)</a>, <a href="https://github.com/magento/magento2/issues/4910" target="_blank">(GITHUB-4910)</a>,  <a href="https://github.com/magento/magento2/issues/3545" target="_blank">(GITHUB-3545)</a>, <a href="https://github.com/magento/magento2/issues/5485" target="_blank">(GITHUB-5485)</a>

<!---59024-->* Refreshing your browser page while on the Review and Payments page of the checkout process no longer clears information from form fields. Previously, Magento cleared information from the Ship to field if you refreshed your browser page during this process. 

<!---55662-->* We've removed the duplicated PHP settings from the sample web server configuration files. 


<!---58465-->* The order of products in a category display no longer changes when you add a new product to the category. 


<!---55351, 56936 -->*  The list of allowed countries is now configured as part of website scope, not storeview scope.  <a href="https://github.com/magento/magento2/issues/2946" target="_blank">(GITHUB-2946)</a>


<!---57905-->* Port Compiler optimizations to 2.1.x ASK FOR CLARIFICATION


<!---57904-->* Port Deploy Asset optimizations to 2.1.x ASK FOR CLARIFICATION

<!---57375-->*  ACL for Visual Merchandiser. Create a new role called 'Merch' and assign all role resources under 'Products'. 
2. Create a user and assign him/her this role. 
 Once you login as the user created in step 2, you will not be able to resequence the products.
 Additional ACL setting Visual Merchandiser is present under Product->Catalog. If setting is off user with the corresponding role can see only product grid and can't not see visual merchandising functionality


<!--- 59581-->* Enhanced the Magento Admin Payment panel look and feel. 

<!---57001-->* A restricted user can now change storeview- or website- level attributes that are defined within his scope. 

<!---57044-->* A price change to a custom option affects only that option. Previously, changing the price of a custom option affected the price of related products.  <a href="https://github.com/magento/magento2/issues/4588" target="_blank">(GITHUB-4588)</a>,  <a href="https://github.com/magento/magento2/issues/5798" target="_blank">(GITHUB-5798)</a>, <a href="https://github.com/magento/magento2/issues/6041" target="_blank">(GITHUB-6041)</a>, <a href="https://github.com/magento/magento2/issues/6097" target="_blank">(GITHUB-6097)</a> 

<!---57197-->*  Administrators with appropriate permissions can now save products successfully. 

<!---56914-->* Versioning of static files (including CSS, JS, font, and image files) is now enabled by default. 

<!---56962 -->* Magento now displays the State/Province field on the Add New Address page. <a href="https://github.com/magento/magento2/issues/5279" target="_blank">(GITHUB-5279)</a>


<!---57383-->* You can now make Return Merchandise Authorization (RMA) comments visible from the storefront by setting Stores > Configuration > Sales > RMA Settings > Enable RMA on Storefront.


<!---57187-->*  When creating a new page with the Add New Page feature, Magento no longer throws a JavaScript error when Layout is set to empty. 

<!---57204 -->* The Send Welcome Email From field now identifies the store that the customer is associated with. 


<!---57035-->* You can now upload changes to the `robots.txt` file from the Admin dashboard. 

<!---59284-->* You can now select the scope of an action that you are running from the Catalog page's product table. 


<!---58654-->* The `magento queue:consumers:start` command now works correctly when you provide the `max-messages` argument.


<!---58353-->* We've enhanced the default config pattern.   See <a href="http:/devdocs.magento.com/guides/v2.1/pattern-library/getting-user-input/use_default_config/use_default_config.html" target="_blank">Use Default Config</a>  UNRESOLVED


<!---57496-->* Magento now successfully loads the New Order Email templates. 


<!---60662-->* Extension Manager not exist. 


<!---60553-->* Product Customizable Options do not work per store view	

<!---60607-->* Paging magento 2 not correct when use group in collection. <a href="https://github.com/magento/magento2/issues/4767" target="_blank">(GITHUB-4767)</a>  


<!---60496-->* Customer custom attribute of type 'file' don`t saving after invalid form data. 

<!---60064-->* Compare Database Data and Structure

<!---60366-->* Cannot Enable Production Mode. 

<!---57351-->* Example password encourages password reuse. The setup wizards includes example of secure password. This is bad idea since people will copy paste it and use it making their systems less secure. 

<!---58359-->* Support Module breaks DB dumps

<!---56742-->* You can now sort and filter on the New Review page. <a href="https://github.com/magento/magento2/issues/6294" target="_blank">(GITHUB-5391)</a> 

<!---58511-->* Magento now displays server-side Ajax error messages. 


<!---59874-->* Non consistent save Product Stock Item via Web API and repository directly. After saving product via repository stock item is updated. 


<!---59894-->*  Email Associated with PayPal Merchant Account Adaptation for On-Boarding ?

<!---60053-->* Revert major changes in PaymentAdapter






### Cloud infrastructure

<!---58090-->* We've corrected a problem with Magento throwing HTTP ERROR 500 intermittently during checkout. 

<!---59397, 60696-->* Custom themes now use parent XML configuration on multithread deployments. Previously, 

<!---58362-->* We've changed the behavior of the Varnish X-header. Only the parent (meta) SKU is included in the list -- not the SKUs of all child products. <a href="https://github.com/magento/magento2/issues/6401" target="_blank">(GITHUB-6401)</a>


























<!---INTERNAL ONLY: 59791, 59678, 59645, 56585, 57593, 60536, 60060, 60062, 60064, 59873, 60348, 60471, 60561, 59675, 60289, 60525, 60554, 60427
-->


<!---DUPLICATE: 55974, 55853, 56929, 57507, 58829, 60457-->

<!---WON'T FIX: 57329, 57310, 56879, 58088,  55299, 58660, 59293, 58660, 58460, 59300, 60105, 59627, 59293, 60586, 58916, 56957, 59376-->

<!---CANNOT REPRODUCE: 57502-->









## Known issues




* **Issue**: Varnish cache not cleared from Admin  <a href="https://github.com/magento/magento2/issues/7296" target="_blank">(GITHUB-7296)</a>. **
System->Cache Management never clears it. Does not clear full page cache


Workaround**: 
<!--- -->




* **Issue**: Varnish cache not cleared from Admin  <a href="https://github.com/magento/magento2/issues/7296" target="_blank">(GITHUB-7296)</a>. **
System->Cache Management never clears it. Does not clear full page cache


Workaround**: 
<!--- -->




* **Issue**:  ST compiler supplies ObjectManagerInterface to direct third party dependencies  <a href="https://github.com/magento/magento2/issues/7296" target="_blank">(GITHUB-7296)</a>. ** 



Workaround**: 
<!--- 59945-->




* **Issue**: Varnish cache not cleared from Admin  <a href="https://github.com/magento/magento2/issues/7296" target="_blank">(GITHUB-7296)</a>. **
System->Cache Management never clears it. Does not clear full page cache


Workaround**: 
<!--- -->



* **Issue**: Varnish cache not cleared from Admin  <a href="https://github.com/magento/magento2/issues/7296" target="_blank">(GITHUB-7296)</a>. **
System->Cache Management never clears it. Does not clear full page cache


Workaround**: 
<!--- -->





## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.




{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
