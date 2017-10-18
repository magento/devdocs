---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.10 Release Notes
menu_title: Magento Commerce 2.1.10 Release Notes
menu_order: 254
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
version: 2.1
github_link: release-notes/ReleaseNotes2.1.10EE.md
---

*	TOC
{:toc}

*Code released:   2017*

*Page updated:   2017*

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.10. This release includes important enhancements to your Magento software.

<div class="bs-callout bs-callout-warning" markdown="1">
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
</div>



## Highlights

Magento 2.1.10 contains over 50 security fixes and enhancements. Look for the following highlights in this release:




## Fixed issues



### Installation, setup, and deployment

<!--- 58072 -->*  Magento no longer creates an `/ i18n`  at system root (/) in addition to the expected language file when you run `php bin/magento i18n:pack` to install a language pack. [GitHub-6260](https://github.com/magento/magento2/issues/6260)


<!---  -->*   

<!---  -->*   

<!---  -->*   

### Cart and checkout

<!--- 68812 -->* You cannot check out as a guest customer until you delete any lingering long-term cookies by clicking **Not me**. Previously, in environments where **Enable Persistence** was set to **Yes**, you could log in as a guest and potentially complete an order that another customer had initiated. 

<!--- 57683 -->* Magento now displays the checkout agreement validation for Terms and Condition acknowledgment after you’ve changed your payment method. [GitHub-6224](https://github.com/magento/magento2/issues/6224)

<!--- 71985 -->* Magento now provides a Login button so that you can resume your checkout process if you return to the check out page after leaving it mid-order.  

<!--- 69856 -->* Magento now displays the correct error message when you enter an invalid discount code during checkout. [GitHub-7230](https://github.com/magento/magento2/issues/7230)

<!--- 69797 -->* Credit card information now persists as expected after a user enters a promotion code during checkout. Previously, after an user entered credit card information and a discount code, and then clicked **Place Order**, Magento emptied the credit card information fields.



### Catalog

<!--- 69080 -->* The quantity field for a product on the checkout page is now properly updated after you change the product quantity. 

<!--- 70062 -->* Magento now includes disabled products when filtering product by price in the Admin. Previously, when you filtered products by price in the Admin, the total number of products was less than the unfiltered list of products. 


<!--- 69621 -->* You can now sort the attribute table in the Add Attribute section of the Admin’s Product edit panel while you are adding an attribute to a product. 

<!--- 70521 -->* You can now save content that you’ve entered using the WYSIWYG editor when the **Enable WYSIWYG Editor** setting is set to **Disabled by Default**. Previously, a JavaScript error occurred. 

<!--- 66481 -->* You can now successfully create a product and assign it to a store without encountering this error, `Unique constraint violation found`. [GitHub-6671](https://github.com/magento/magento2/issues/6671) 

<!--- 57153 -->* Magento now correctly displays custom options at the store-view level. [GitHub-2908](https://github.com/magento/magento2/issues/2908), [GitHub-5885](https://github.com/magento/magento2/issues/5885), [GitHub-5612](https://github.com/magento/magento2/issues/5612) 

<!--- 72280 -->* Magento now correctly calculates the tier price percentage when displayed prices include tax. [GitHub-8833](https://github.com/magento/magento2/issues/8833)



### Configurable products

<!--- 60140 -->*  You can now disable a child product from a configurable product’s edit page. Previously, the child product’s status
did not change after you selected **Disable product**. 

<!--- 58515, 70606 -->* Simple product videos now display the embedded video player instead of the thumbnail image. [GitHub-6360](https://github.com/magento/magento2/issues/6360), [GitHub-8882](https://github.com/magento/magento2/issues/8882) 


<!--- 58395 -->* You can now save a configurable product for which you’ve set the **Weight** value to **this item has no weight**.  Previously, Magento displayed this error, `Notice: Undefined index: weight in \magento2ce\app\code\Magento\ConfigurableProduct\Model\Product\VariationHandler.php on line 154`. 

<!--- 57007 -->* Magento now displays tier prices of simple or virtual products on the configurable products page. [GitHub-3759](https://github.com/magento/magento2/issues/3759)

<!--- 71637 -->*  

<!--- 71136 -->* You can now save a value for an attribute that is shared between related, upsell, or cross-sell products that have different attribute sets. Previously, when a configurable product had another configurable product with a different attribute set as a related product, cross sell, or upsell and both attribute sets share a multiselect attribute, the value for that multiselect attribute could not be updated for the product.

### General
<!--- 63816 -->* We’ve fixed an issue with session behavior that resulted in different customer sessions being shared between different customers on two websites. 


<!--- 58526 -->* You can now successfully reset a customer password when the **Website Restrictions** setting is enabled. Previously, Magento redirected you to `customer/account/login/`, from which you could not change a password. 


<!--- 72206 -->* After confirming a customer’s account, the Magento welcome message now displays the customer's first and last name. 

<!--- 69574 -->* Vimeo videos now work when HTTPS is enabled. [GitHub-7311](https://github.com/magento/magento2/issues/7311) 


<!--- 70148 -->* Additional Admin users with roles scoped to only one of multiple websites can not edit CNS pages. Previously, under these circumstances, Magento directed the Admin to an error page. 


<!--- 71701 -->* In environments running Varnish, the menu item of the active category page is now handled as the active class as expected. Previously, activating cache interfered with Magento setting the appropriate CSS class to active in environments where Varnish was enabled. [GitHub-6609](https://github.com/magento/magento2/issues/6609) 



### Framework
<!--- 72798 -->* We’ve resolved an issue where store websites do not work when Redis cache is installed and the PhpRedis extension is enabled.



### Google
<!--- 70892 -->* We’ve fixed an Ajax issue that prevented Add to Cart and Remove from Cart events from firing in Google Tag Manager as expected. 

### Import/export

<!--- 71983 -->* Magento no longer fails if the CSV file being imported does not contain the `bundle_values` column during an import process that includes bundle products. 


### Order management
<!--- 71051 -->* Magento now completes order processing  if the customer needs to re-enter credit card information during the order process. Previously, Magento returned this error, `No such entity with customerId = 0`, and the order did not complete.

### Payment methods
<!--- 69089 -->* In orders with separate billing and shipping addresses, when you change the billing address but neglect to click **Update** before clicking **Place order**, Magento will not place the order until you click **Update**. Previously, under these conditions, Magento replaced the  edited billing address with the shipping address. 

<!--- 72466 -->* We’ve fixed a `PayPal.js` error that occurred when you tried to check out an order that contained a downloadable product. 

<!--- 71821 -->* PayPal Express checkout now handles virtual products as expected. Previously, the payment process failed when your order included virtual products. [GitHub-10615](https://github.com/magento/magento2/issues/10615)

<!--- 69724 -->* Payment methods now retrieve new order status from config as expected. [GitHub-5860](https://github.com/magento/magento2/issues/5860)


### Shipping
<!--- 69898 -->* Magento now handles tracking for FedEx shipments with valid tracking numbers as expected. Previously, Magento displayed an error when you clicked **Track this Shipment**, even when the tracking number was valid. 



### Search
<!--- 72106 -->* Search synonyms in a group now can declare several words as synonyms. For example, "Elon Musk,tesla" is a valid synonym group, and a search on the phrase "Elon Musk" will also show results for the "tesla" keyword. Previously, you could declare synonyms for each word (for example, "Elon,Musk,Tesla"), but these words didn't work as a phrase. Synonyms are also now case-insensitive.. 

#### Elasticsearch

<!--- 72246 -->* We’ve enhanced the performance of the Elasticsearch catalog searches. 


<!--- 71667 -->* You can now use QuickSearch to search multiselect text values. 
 
<!--- 71569 -->* Search by attribute now works as expected with Elasticsearch. 

### Staging
<!--- 64924 -->* The **Set Product as New** checkbox now works as expected.

<!--- 64521 -->* Magento now saves scheduled updates for products with custom options as expected. 

<!--- 67402 -->* Scheduled updates now display the correct price for a product. Previously, Magento displayed the “as low as” price for a product in the scheduled update, but the preview option displayed the regular price. 


### Translations
<!--- 71591 -->* You can now implement translations from themes (in contrast to translations from modules). 

<!--- 69935 -->* You can now save scheduled changes when running a store with a Japanese locale. Previously, Magento displayed this error, `error: : Future Update Start Time cannot be earlier than current time`. 

### Visual Merchandiser 
<!--- 57613 -->* Visual Merchandiser now retains page view options and position after you remove a product. Previously, when you removed a product from a category, and you weren't on the first page, Magento returned you to the first page. 

<!--- 70287 -->* We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).

### Web API framework
<!--- 70498 -->* If a configurable product is part of a shipment being created via REST, only the parent's quantity will be counted towards total shipment item quantity. Previously, Magento counted both the parent and child product of the configurable product, which resulted in a count of two products added to the shopping cart. 

### Wishlist
<!--- 70991 -->* Unconfigured bundle products that are included on a wishlist can now be edited or added to a cart. Previously, Magento displayed a 503  error when you either tried to edit or add to the cart any bundle products that were on a wishlist. 

<!--- 70611 -->* A product assigned a special price now displays this price in the wishlist. Previously, products with special prices displayed regular prices in the wishlist. 







## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


