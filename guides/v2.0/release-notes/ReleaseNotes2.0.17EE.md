---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.0.17 Release Notes
menu_title: Magento Commerce 2.0.17 Release Notes
menu_order: 262
level3_menu_node: level3child
level3_subgroup: ee20-relnotes 
---

*Patch code and release notes were published on November 7, 2017.* 

We are pleased to present Magento Commerce 2.0.17. This release includes almost 40 security fixes and enhancements to your Magento software.

## Highlights

Magento 2.0.17 contains almost 40 security fixes and enhancements.  Look for the following highlights in this release:

* ability to implement translations from themes. We’ve also significantly reduced JavaScript-related translation issues. 

* improvements to how the PayPal Express Checkout payment method processes virtual products. 

* multiple enhancements to product security. See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information. 

## Security enhancements

Magento 2.0.17 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information.

## Known issue

<!--- 82986 -->*  Magento continues to display the **Close** button after you open an image in the Product page in fullscreen mode, then close it. 

## Fixed issues

### Cart

<!--- 61066 -->*  Magento now permits a customer to share a shopping cart between the store views of the same website, but not between store views of different websites. Previously, Magento did not clear the contents of a shopping cart  when the customer switched between store views on different websites.
 

### Catalog

<!--- 57145 -->*  You can now create a blank attribute option using the drop-down input option on products that do not require an attribute. 
[GitHub-3545](https://github.com/magento/magento2/issues/3545), [GitHub-5485](https://github.com/magento/magento2/issues/5485), [GitHub-4910](https://github.com/magento/magento2/issues/4910)

<!--- 59406 -->*  The category/product indexer now successfully completes a full reindexing of all indexes on large profiles with 500,000 or more products. Previously, Magento successfully generated a large profile, but failed to complete the reindexing of the categories or products, and displayed the following error: "Error 1114: Table is full".


<!--- 58792 -->* The {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} now displays images that Magento resizes during product save operations, rather than resizing the product on the storefront. Previously, the image path contained `store_id`, and during save operations, Magento resized images for  the default store only. 



<!--- 61798 -->* When you delete an image in the Admin, Magento no longer deletes it on the server. Previously, Magento deleted it from the server as well, which caused errors for other products (example error message: `Cannot gather stats! Warning!stat(): stat failed for`).

<!--- 61143 -->* You can now use the WYSIWYG editor to update product descriptions. Previously, when you used the editor to update descriptions, Magento did not apply your changes. 


<!--- 63657 -->* The product attribute `category_ids` can have only **Global** scope. Previously, you could change the scope value of `category_ids` to **Store**.


<!--- 66345 -->* The `\Magento\CatalogInventory\Model\Stock\Status::getStockId()` call now returns the stock ID as expected. Previously, it returned the website ID. 
 

### Configurable products 

<!--- 62593 -->* Sorting configurable products by price now works as expected when a simple product has a special price. [GitHub-4778](https://github.com/magento/magento2/issues/4778)

<!--- 61960 -->* Magento now saves and filters configurable products by their specific options. 

<!--- 61112 -->* Magento now displays all images associated with a selected swatch before it displays other images associated with the configurable product. Previously, Magento did not display all images.   [GitHub-6195](https://github.com/magento/magento2/issues/6195),   [GitHub-4101](https://github.com/magento/magento2/issues/4101)



<!--- 57165 -->* The **Add Products Manually** option now lets you add existing products as well as generate new variations. 

### Framework

<!--- 57816 -->*  Widgets now accept UTF-8 special characters type as input parameters. Previously, you could successfully create a widget, but UTF-8 special characters were broken. [GitHub-4232](https://github.com/magento/magento2/issues/4232) 

<!--- 60778 -->*  Static file generation is no longer affected by a race condition that affected merging CSS files. Previously, this race condition interfered with the proper generation of the product frontend.

### General

<!--- 63651 -->* Magento now moves the `sequence_*` table to the correct database after implementing a split database. 

<!--- 61564 -->* When you edit a product list widget on a CMS page, Magento now shows previously set conditions. Previously, when you tried to edit a product list widget, the condition parameter was empty. [GitHub-6616](https://github.com/magento/magento2/issues/6616)

<!--- 60543 -->* The **Print Shipping Label** link now displays on the product frontend. Previously, the layout for the Shipping and Tracking block did not work properly. 


<!--- 60822 -->* Enabling  **Admin > Stores > Settings > Configuration > Advanced > Developer > Merge CSS files** no longer degrades product performance. Previously, enabling this setting slowed down both frontend and Admin processes. [GitHub-4321](https://github.com/magento/magento2/issues/4321)


<!--- 61060 -->*  Magento no longer generates incorrect URLs in the site map when the **Use Secure URLs in Admin** setting is set to **Yes**. [GitHub-8644](https://github.com/magento/magento2/issues/8644)  

<!--- 62915 -->*  Directive values can now be escaped with quotation marks. Previously, all characters after quotation marks were removed after a save, which resulted in the failure to save widget conditions. [GitHub-3860](https://github.com/magento/magento2/issues/3860) 



<!--- 58089 -->*  We’ve resolved multiple issues with inline translations in the checkout page. 

<!--- 57009 -->*  Magento now correctly calculates a bundle product's price even when it contains only one product in a required product option. Previously, if a bundle product contained only one product in an option, Magento did not update the price. [GitHub-4446](https://github.com/magento/magento2/issues/4446)

<!--- 61270 -->* Cron errors no longer occur when reward points are available and the Subscribe for Points Expiration Notifications setting is set.  

<!--- 66634 -->* We’ve fixed an issue with the PayPal ExpressCheckout functional test.  

<!--- 63456 -->* Magento no longer uses the wrong address template for shipping, invoice and credit memo emails when second website has a different template.

<!--- 58771 -->* Inline translation is now available for button elements. 

<!--- 64962 -->* Log entries no longer show the `current_password` field, which should be hidden. 

<!--- 56380 -->* Backtrace information no longer appears on the frontend.

### Gift card

<!--- 64676 -->* Customers can no longer exceed a gift card balance by using the gift card twice.

### Gift message

<!--- 62627 -->* Gift message options are no longer available at the order level when you’ve disabled them in the Admin.

### Gift wrap

<!--- 62629 -->* Your gift wrapping selection now appears in the shopping cart regardless of whether you've selected a shipping method. Previously, Magento did not display your gift wrapping choice until you selected a shipping method. 

<!--- 62624 -->* Magento no longer displays the gift wrap tax when no gift wrap is selected.

### Import/export

<!--- 67343 -->*  We’ve improved the performance of importing up to 100,000 products from the Admin. 

<!--- 63590 -->* Magento now maintains super attribute ordering of configurable products with multiple super attributes after export or import. Previously, after import or export, the ordering of super attributes was not maintained. [GitHub-6079](https://github.com/magento/magento2/issues/6079)

<!--- 63033 -->* We've fixed an issue where product URL keys (for SKUs) were not auto-generated as expected during import.

<!--- 58392 -->* Magento now imports customer data as expected after the data passes the pre-import validation step. Previously, although data passed this validation step, an error would occur during import, and Magento displayed this message: `Invalid data for insert`. [GitHub-4921](https://github.com/magento/magento2/issues/4921), [GitHub-9469](https://github.com/magento/magento2/issues/9469)

### Order management

<!--- 63585 -->* Magento now uses the address template from store view level of the placed order (similar to how order confirmation email works). Previously, Magento used the wrong address template for order e-mails. 

### Shipping

<!--- 59249 -->*  The Free Shipping rule now works correctly with the table shipping method. Previously, Magento displayed an error at checkout (**This shipping method is not available. To use this shipping method, please contact us.**) instead of assigning a $0 shipping rate. [GitHub-6346](https://github.com/magento/magento2/issues/6346)

### TargetRule

<!--- 63831 -->*  Magento now saves a new product rule when its SKU attribute is enabled for **Use for Promo Rule Conditions**. Previously, you could not save a new rule under these conditions. 

<!--- 63666 -->*  You can now base a Related Product rule on a product attribute, such as color. 

### Web API Framework

<!--- 44060 -->* The SOAP API no longer fails after you run `bin/magento setup:di:compile`. 

<!--- 61908 -->*  You can now use REST to successfully update customer information without unintentionally deleting default billing and shipping address information.

<!--- 62587 -->*  You can now use REST to add a video to a product description. [GitHub-7153](https://github.com/magento/magento2/issues/7153)



<!---  -->

<!--- INTERNAL ONLY 72053 72010 71171 71153  71116 68825 67201 67018 66634 66604 63297 62467 62152 61236 61228 61227 61226 61225 61222 61221 61215 61210 61206 -->

<!--- NOT NEEDED 58771  -->

## System requirements

Our technology stack is built on PHP and MySQL. See
[System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html){: target="_blank"}.


{% include install/releasenotes/ee_install_20.md %}

## Migration toolkits

The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){: target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){: target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){: target="_blank"}.

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration){: target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
