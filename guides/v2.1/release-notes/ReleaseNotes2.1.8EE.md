---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.1.8 Release Notes
menu_title: Magento EE 2.1.8 Release Notes
menu_order: 260
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
github_link: release-notes/ReleaseNotes2.1.8EE.md
---

*	TOC
{:toc}


*Release date: August , 2017*

*Page updated: August , 2017*

We are pleased to present Magento Enterprise Edition 2.1.8. This release includes important enhancements to the security of your Magento software.


Looking for the <a href= "http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes.html" target="_blank">Magento Enterprise Cloud Edition Release Notes</a>?


## Highlights

Magento 2.1.8 contains .  Look for the following highlights in this release:

## Fixed issues and enhancements



### Catalog 

<!--- 58918 -->* You can now create a custom ategory attribute that you can use to upload a custom image for each category. Previously, you could create the attribute, but could not save the image. 


<!--- 58571 -->* The prices you assign to custom options no longer change unexpectedly after you save them.  [GitHub-6116](https://github.com/magento/magento2/issues/6116)


<!--- 59782 -->* Magento now correctly displays product information after you perform an operation on more than one item. Previously, product imformation was not correctly aligned on the page.  [GitHub-6867](https://github.com/magento/magento2/issues/6867)



<!--- 57153 -->* Magento now correctly displays custom options at the store view level. [GitHub-2908](https://github.com/magento/magento2/issues/2908), [GitHub-5885](https://github.com/magento/magento2/issues/5885), [GitHub-5612](https://github.com/magento/magento2/issues/5612)

<!--- 57064 -->* The currency switcher now works for widgets on the home page. Previously, if your website supported multiple currencies, the currency switcher did not update the currencies for widgets on the home page. 



<!--- 67628 -->* You can render the `tax_class_id` attribute nonsearchable. Previously, Magento displayed a 503 error under these circumstances.

<!--- 62630 -->* Magento now accurately displays the total count of products on the Category page. 

<!--- 61797 -->* When you delete an image in the Admin panel, Magento no longer deletes it on the server. Previously, Magento deleted it from the server as well, which caused errors for other products (example error message: "Cannot gather stats! Warning!stat(): stat failed for "). 

<!--- 61729 -->* Magento now displays only the price for product for the store view level. Previously, the category listing page showed the  default store view price as well as the  prices from other store views. 


<!--- 69386 -->* Magento now displays the product image even when `product_image_white_borders` isn't enabled in the theme. Previously, Magento displayed a 404 instead of the image. 

<!--- 63656 -->* The product attribute `category_ids` can have only **Global** scope. Previously, you could change the scope value of `category_ids` to **Store**. 


<!--- 63587 -->* The **Use default URL Key** setting now works on the store-view level. 


<!--- 63157 -->* Magento now displays the correct image when you switch  between a configurable product's options. Previously, Magento loaded  product images from a different product. 


<!--- 56937 -->*  You can now successfully set a SKU mask to empty. Previously,  when a product SKU mask was set to empty, Magento experienced problems loading the Product Add page. [GitHub-5618](https://github.com/magento/magento2/issues/5618)

<!--- 57607 -->*  You can now save product without checking any of its attribute values. Previously, you could save the product, but attribute values remained checked. [GitHub-7687](https://github.com/magento/magento2/issues/7687)



<!--- 67535 -->* Magento now correctly assigns images to duplicated products. 

<!--- 57144 -->* You can now create a blank attribute option using the drop down input option on products that do not require an attribute. 



Option "green" for attribute "color" is not selected. Blank (empty) value is selected.
In Magento 1, merchant would frequently leave the value of attributes using the drop down input option blank on products that did not require that attribute. When creating new products, the attribute value would left blank.
In Magento 2, value is assigned to the attribute for the product as soon as the product is created.

Merchant would like the ability to create a blank attribute option for attributes with the drop down input type.
[GitHub-3545](https://github.com/magento/magento2/issues/3545), [GitHub-5485](https://github.com/magento/magento2/issues/5485), [GitHub-4910](https://github.com/magento/magento2/issues/4910)




<!--- 68810 -->* You can now use special characters like '%' in the WYSIWYG editor. 


<!--- -->* 

<!---  -->*




### Checkout

<!--- 62628 -->* Your gift wrapping selection now appears in the shopping cart regardless of whether you've selected a shipping method. Previously, Magento did not display your gift wrapping choice until you selected a shipping method. 





### Configurable products

<!--- 62091 -->* 

when you save a configurable product and then while it is saving you click on save again, it will remove the simple products assigned to that configurable Configurable products simple products get removed on product save



<!--- 61130 -->* Magento now correctly matches images to products. Previously, after you selected a configurable product, Magento displayed the images for another product.  



<!--- 63578 -->* Magento now correctly displays both configurable and simple products, their attribute values, and visibility values after import if SKU is an integer. [GitHub-5547](https://github.com/magento/magento2/issues/5547)

<!--- 56988 -->* Magento now provides swatch input for the Admin Scope, and attribute fallback mechanism now reverts to the default option value
 if no values specified for specific store view. 


<!--- 69501 -->* Color swatches are now replaced by images on Catalog and Product pages. 



### General

<!--- 64238 -->* mmap cannot allocate memory. Expected result:
Reindex takes some time, Customer Grid (in backend -> System -> Index management) status is set to "Ready"
Actual result:
Reindex fails






<!--- 57291 -->* Magento now successfully uploads the thumbnail images for email logos used in transactional emails. Previously, these thumbnail images were not displayed.


<!--- 57615 -->* Visual Merchandiser `Match products by rule` now works as expected. 


<!--- 60723 -->* Nginx now redirects to the setup page when using port 81. 


<!--- 60542 -->* The "Print Shipping Label" link now displays on the product frontend. Previously, the 
layout for "Shipping and Tracking" block did work properly. 

<!--- 60529 -->* Magento now displays Upsells  on the Product page. 



<!--- 59173 -->*  Magento no longer sends email when the **Disable email communication** setting is set to **yes**. Previously, Magento sent email even when this setting was enabled.  [GitHub-5988](https://github.com/magento/magento2/issues/5988)



<!--- 58855 -->* The Cart Price rule nows affects coupon life as expected. Previously, coupons did not persist longer than the current date if they did not have a designated end-date.  


<!--- 69840 -->* Configuration values no longer return NULL when Redis reaches the linit set in the `max_memory` setting. Previously, when Redis met the limit specified in this setting, ScopeConfig returned a value of NULL for configuration options, which resulted in significant damage to data (for example, deleting all prices assigned to a website from the database).





<!--- 61916 -->* We've improved the algorithm that controls how URL rewrites on the Category Save page are processed. 


<!--- 63814 -->* SalesRule now applies to auto-generated coupon codes as expected. 



<!--- 60777 -->* Static files not being generated correctly on prod(Race condition in merging files). broken front end. 




<!--- 59690 -->* 

 Expected result
Image gets rendered in the description area
Actual Result
Image is not rendered, instead you get broken image link icon Inserted image in product description got broken on front end  [GitHub-6138](https://github.com/magento/magento2/issues/6138)



<!--- 60599 -->* Magento now supports negative values in "Quantity" field for a product. [GitHub-7401](https://github.com/magento/magento2/issues/7401)

<!--- 63454 -->* Magento now uses the address template from store view level of the placed order (similar to how order confirmation email works). Previously, Magento used the wrong address template used for order e-mails. 


<!--- 62914 -->* Directive values can now be escaped with quotation marks. Previously,  all characters after quotation marks were removed after a save, which resulted in the failure to save widget conditions. [GitHub-3860](https://github.com/magento/magento2/issues/3860)

<!--- 62623 -->* Magento no longer displays the gift wrap tax when no gift wrap is selected. 

<!--- 55519 -->* You can now apply gift wrapping to a Grouped product. 


<!--- 61266 -->* Magento no longer permits a shopper to place a re-order once you've disabled one of items in the order. 


<!--- 61097 -->* We've updated UK mobile phone number validation. 

<!--- 57060 -->*  You can now apply free shipping to a specified shipping method when you create order in the Admin. Previously, if you set up a price rule to provide free shipping for one specific shipping method (for exmaple, tablerates), Magento applies the rule  on the front end only, but not on the Admin order creation page. 


<!--- 55361 -->* Cart Price rules are now applied as expected to payment method conditions. Previously, discounts set in Cart Price rules were not applied during checkout. 

<!--- 65161 -->* Customers can no longer apply a coupon code twice. Previously, the "Uses per Coupon" limit did not work for auto-generated coupons. 


<!--- 57051 -->* Widgets now accept UTF-8 special characters type as input parameters. Previously, you could successfully create a widget, but UTF-8 special characters were broken. [GitHub-4232](https://github.com/magento/magento2/issues/4232)


<!--- 60641 -->* Magento now saves a new product rule when its SKU attribute is enabled for Use for Promo Rule Conditions'. Previously, you could not save a new rule under these conditions. 

<!--- 61262 -->* CMS Hierarchy menu is not shown when adding a page to hierarchy (when URL rewrite for new page exists) . EXPECTED RESULTS:
When adding pages to the hierarchy, it should show the added page links without having to delete the URL rewrite
ACTUAL RESULTS:
When adding pages to the hierarchy, it does not show the added page links until deleting the URL rewrites.
URL rewrites

<!--- 63124 -->* Incorrect scope filter caching in UI grids. Grid should be reloaded. Previously, product name must be "Product default Store 2. Product data was not reloaded correctly - Product name is "Product default"
  UI

<!--- 60538 -->* Cache-miss when Fastly is enabled
Fastly cache










### Gift cards

<!--- 64675 -->* Gift card can be used twice exceeding balance amount. EXPECTED RESULTS:
Non-active gift card should no longer be applied to the customer account after redirecting out of checkout and / or logging out of the customer account
ACTUAL RESULTS:
Non-active gift card that was previously applied to a registered customer's account prevents checkout.



<!--- 60680-->* Unable to save modified gift card product. Gift card should be saved according to new configuration Previously, Gift card amounts are still displayed
"Gift card amount 1" = 10
"Gift card amount 2" = 20. 



### Import/Export
<!--- 62995 -->* Some imports do not auto generate the URL key for the product. Product imports not Auto-Generating URL Keys for SKUs. The URL key should be auto generated
ACTUAL RESULTS:
There is no URL key that is generated

<!--- 60548 -->* Advanced Pricing is very slow to import. I am trying to upload advanced pricing. It will only allow for 300 or so rows to be uploaded at a time before the system freezes. The "Please Wait" will stay on screen for hours with no activity.

<!--- 63589 -->* Imported configurable products with multiple super attributes do not retain super attribute ordering. Product super attribute order on the front-end product page should match the original product attribute order after export and import.
The catalog_product_super_attribute table should match the original position values for the previously created product after importing. Previously, View front-end product page and note the attribute sort ordering does not match the order selected in step 5.
Examine catalog_product_super_attribute table and note that the position values do not match the original attribute positions defined when creating the product configurations.
In product export CSV, the configurable_variation_labels field does not affect the position of the super attributes for the imported products.

[GitHub-6079](https://github.com/magento/magento2/issues/6079)
<!--- 61027 -->* Product will be exported only once Product export duplicate rows for product with html special chars in data". Previously, Product exported twice (can be more if have more than one store);. 

<!--- 58760 -->* Customer data imported to the shop.Error message appears: "Invalid data for insert".
P. S. Error occurs because data rows which are going to be inserted have different keys 
 Customer Import - Invalid data for insert [GitHub-4921](https://github.com/magento/magento2/issues/4921)


### Indexing



### Installation and deployment

<!--- 63020 -->*  Static content deployment (SCD) now works when multiple languages are specified. Previously, Magento displayed an error if you tried to deploy static content in more than one language (for example, `bin/magento setup:static-content:deploy en_CA fr_CA de_DE`).

<!--- 59775 -->* Static content deployment now generates secure content, whether content included secure or non-secure URLs.


<!--- 62025 -->* Magento upgrade with sample data completes successfully on the first attempt. Previously, the upgrade process  failed with fatal errors during your first attemtp at upgrade, then succeeded upon re-try. 



<!--- 63650 -->* Magento now moves `sequence_*` table to the correct database after implementing a split database. 


<!--- 59622, 70177 -->*  You can now upgrade Magento 2.0 to version 2.1.x when the `auto_increment` in the database is greater than 1. Previously, when the `auto_increment` in the database exceeded 1, upgrade failed with this error: "The page URL key contains capital letters or disallowed symbols. 



### Order management

<!--- 58533 -->* We've improved the performance of page loading when the order page contains many items. 

<!--- 61780 -->* Only users with permission to view a store can view or process the orders placed on it. Previously, even users with permissions restricted to a single store could view or process  orders on other stores.



<!--- 63819 -->* The purchase date of an order is now displayed in the default time zone of the store and is the same date that is displayed in Order creation page. Previously, the Order table displayed an incorrect purchase date for the order. 


<!--- 61059 -->* Magento no longer generates incorrect URLs in the site map when the **Use Secure URLs in Admin** is set to **Yes**. [GitHub-8644](https://github.com/magento/magento2/issues/8644) 



<!--- 63514 -->* Free shipping promotions no longer apply after you've removed the item that qualified for free shipping from your order. Previously, you could remove the qualifying item, and free shipping was still applied to the remaining order. [GitHub-9451](https://github.com/magento/magento2/issues/9451)


<!--- 60326 -->* Magento now correctly identifies an order being processed when it is placed in a store configured for multiple curriences.  Previously, these orders always were identified as potentially fraudulent.






### Payment methods


<!--- 64922 -->* Magento now displays payment information when you review an order from the Magento Admin. Previously, if you viewed an order via **Sales > Orders** from the Magento Admin, the payment information would be missing. 


<!--- 64730 -->* You can now use PayPal Express to place an order. 


<!--- 63702 -->* PayPal Express payments no longer fail when there is adequate product inventory to cover your order. Previously, you'd receive this error message: We can't place the order. [GitHub-6296](https://github.com/magento/magento2/issues/6296)


### Performance

<!--- 58876 -->* We've improved Mass action performance and reduced the amount of memory that these operations consume. 



### Reports
<!--- 64297 -->* Website column is present in Customer Segment Report and contains correct data. Segments report: no websites shown in grid. Website column is present in Customer Segment Report grid and is blank.


### Sample data

<!--- 64499 -->* 

Error during Sample Data deploying using " auto_increment_increment = 3" as Mysql option

"Something went wrong while installing sample data. Please check var/log/system.log for details. You can retry installing the data now or just start using Magento."




### Search


<!--- 58042 -->* ElasticSearch no longers fails when more than 100 attributes are involved, or when user-defined price attributes are searchable.

<!--- 65249 -->* Segmentation faults no longer occur when doing a `catalogsearch_fulltext` reindex, and indexing succeeds. Previously, in a large database (more than 70k products) the `catalogsearch_fulltext` (MySQL) reindex failed with a `Segmentation fault` message. [GitHub-7963](https://github.com/magento/magento2/issues/7963)


<!--- 53675 -->*  Sorting configurable products by price now works as expected when a simple product has a special price. [GitHub-4778](https://github.com/magento/magento2/issues/4778)


<!--- 57475 -->* Out-of-stock items no longer appear in layered navigation. Previously, when you selected any filter from the layered navigation, it returned products that did not have that option in stock. 


<!--- 64959 -->* Grouped products are now included in Elasticsearch searches. 

Grouped product is present in category. Previously, Grouped product is missing in category when using Elasticsearch as search engine. Category contains no products




### Shipping methods


<!--- 59660 -->* Magento now displays the applicable flat rate USPS box methods during checkout. Previously, Magento displayed no methods. [GitHub-6798](https://github.com/magento/magento2/issues/6798)



### Staging


<!--- 60905 -->* Magento now displays the correct date and time for staging updates. Previously when you saved a new staging update, the scheduled time show was as an hour behind the specified time.


<!--- 61004 -->* You can now create a new scheduled update for a product. Previously. when you tried to create an update, Magento displayed this error:  `Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.`



<!--- 60762 -->* You can now change the End Time of an active update. 


<!--- 66278 -->* The staging dashboard now loads without error when you sort by Status on the dashboard. Previously, the Staging dashboard broke and remained in an infinite loop when you attempted to sort by Status on the dashboard.


<!--- 61267 -->* The view/edit option for a scheduled change is now available for the duration that the scheduled change is in progress. Previously, this view/edit option was removed  while the scheduled change was still in progress, which left no way to edit  or remove it. 



### Tax

<!--- 61131 -->* Magento now correctly calculates tax and order total when a discount is used. Previously, Magento calculated these values incorrectly when discount was used, and Catalog Prices were set to exclude tax. 



### Web API

<!--- 61907 -->* You can now use the REST API to successfully update customer information without unintentionally unsetting default billing and shipping address information. 


<!--- 61135 -->* You can now use the REST API to  add video to a product. [GitHub-7153](https://github.com/magento/magento2/issues/7153)



<!--- INTERNAL ONLY  64299, 64244, 64243, 64242, 64241, 64240, 70084, 67109, 67115, 67101, 66711, 70037, 70036, 67748, 69707, 68990, 68951, 70620, 70617, 60742, 69474, 67110, 64512, 67715, 69637, 66276, 67104, 67105, 67751, 68826 -->


## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


