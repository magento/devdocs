---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento CE 2.0.11 Release Notes
menu_title: Magento CE 2.0.11 Release Notes
menu_order: 21
level3_menu_node: level3child
level3_subgroup: ce20-relnotes 
github_link: release-notes/ReleaseNotes2.0.11CE.md
---
*	TOC
{:toc}


We are pleased to present Magento Community Edition 2.0.11. 


## Highlights
Magento 2.0.11 contains more than 70 bug fixes and enhancements, including these highlights:


* **Management of configurable products with many variations** in the Magento Admin interface without degrading performance.

* **Upgrade to Magento 2.0.11 without issue** when using multiple master databases for checkout, order management, and product data.

* **Successful import or export CSV files with data that contains special symbols** (that is, symbols that are not escaped during file processing, such as <i>,</i> or <i>|</i>).

* The Sales module provides **two new web API endpoints** that allow you to process refunds from an order or invoice. Previously, these actions could only be performed from Admin. After you install this patch, you can:

	* Create a credit memo (complete or partial) for a particular order or invoice.

	* Add details about refunded items to an order or invoice.

	* Update the status and state of an order or invoice after actions are performed.

	* Notify a customer about refunded items or order or invoice.


	REST integrators can use `POST /V1/invoice/{invoiceId}/refund` and `/V1/order/{orderId}/refund` to perform these actions. SOAP integrators can call `salesRefundInvoiceV1` and `salesRefundOrderV1`.



## Functional fixes

We address the following functional issues in this release.


### Cart and checkout
{:.no_toc} 

<!--- 61232-->* You can now reload a page during checkout without unintentionally changing shipping information. 

<!--- 61249-->* Magento no longer displays the spinning loader widget after you click the **Place Order** button. Previously, Magento displayed the spinning loader, even after you'd successfully placed an order. 

<!--- 61127-->* Magento now indicates that a product is out-of-stock if you disable it. Previously, Magento did not display the name of an out-of-stock product at all. 

<!--- 59211-->* The number of items in the minicart is now updated correctly when you run Magento in mixed HTTP/HTTPS mode. <a href="https://github.com/magento/magento2/issues/6487" target="_blank">(GITHUB-6487)</a> 

<!--- 59374-->* Refreshing your browser page while on the Review and Payments page of the checkout process no longer clears information from form fields. Previously, Magento cleared information from the **Ship to** field if you refreshed your browser page during this process. 

<!--- 58058-->* We've resolved an issue that prevented you from adding more than one product from the wishlist to your shopping cart. <a href="https://github.com/magento/magento2/issues/5282" target="_blank">(GITHUB-5282)</a> 


<!--- 56955-->* Magento now displays the product add validation message ("Product was added to the cart") only after you've successfully added a product to your cart.

<!--- 58037-->* You can now reload a page during checkout without unintentionally changing shipping information. 

<!--- 58614-->* You can now successfully reorder a product. Previously, if you tried to reorder a product, the checkout page did not load, and Magento displayed this error: "Uncaught TypeError: Cannot read property 'length' of undefined". 

<!--- 57844-->* A cart rule with a coupon code no longer overrides a cart rule without a coupon code when multiple cart rules are applied. Previously, when you created two cart rules and applied them to a cart, the rule with a coupon was applied, but the second rule was not. <a href="https://github.com/magento/magento2/issues/6294" target="_blank">(GITHUB-6294)</a> 



### Configurable products
{:.no_toc} 

<!--- 55791-->* We've improved the performance of the review step to create a configurable product.

<!--- 59050-->* You can now successfully reorder a configurable product. Previously, if you created an order that includes multiple products, one of which is a reorder, options for these products were confused. <a href="https://github.com/magento/magento2/issues/3654" target="_blank">(GITHUB-3654)</a>, <a href="https://github.com/magento/magento2/issues/3820" target="_blank">(GITHUB-3820)</a>

<!--- 58793-->* You can now successfully edit configuration options when creating a configurable product. Previously, the **Edit Configuration** button did not work as expected.

<!--- 58917 -->* You can now successfully add a simple child product to a configurable product with advanced configurations. 

<!--- 57000-->* We no longer apply one simple product's special price to another simple product of the same configurable product. Previously, when you set both a regular and a special price for a child product, all products associated with the same configurable product displayed a regular and special price, even when these amounts were the same. <a href="https://github.com/magento/magento2/issues/4442" target="_blank">(GITHUB-4442)</a>, <a href="https://github.com/magento/magento2/issues/5097" target="_blank">(GITHUB-5097)</a>, <a href="https://github.com/magento/magento2/issues/6645" target="_blank">(GITHUB-6645)</a> 

<!--- 59415-->* Magento no longer displays the *as low as* price for a configurable product's simple options if the options are disabled.

<!--- 58035-->* You can now edit a single product attribute and apply it to multiple configurable products. Previously, when you tried to bulk-edit an attribute on a collection of filtered, configurable products, Magento would complete the process without incorporating your edits, then incorrectly tell you that the products had been edited.

<!--- 58192-->* A price change to a custom option affects only that option. Previously, changing the price of a custom option also affected the price of related products. <a href="https://github.com/magento/magento2/issues/4588" target="_blank">(GITHUB-4588)</a>

<!--- 59950-->* Configurable product option price is displayed correctly per website.

<!--- 57056-->* You can now successfully disable the lowest price of a configurable product and its associated simple products. Previously, Magento displayed a configurable product's lowest price even after you disabled that price. <a href="https://github.com/magento/magento2/issues/4419" target="_blank">(GITHUB-4419)</a>




### Email
{:.no_toc} 

<!--- 56859-->* The **Send Welcome Email From** field now accurately identifies the store that the customer is associated with. 

<!--- 57133-->* You can now save a gift message when ordering a gift while logged in as a guest. Previously, Magento did not save this information, and you encountered an error. <a href="https://github.com/magento/magento2/issues/3804" target="_blank">(GITHUB-3804)</a> 

### General fixes
{:.no_toc} 


<!--- 59503-->* Magento now creates a URL rewrite for the new URL key of a product as expected. Previously, after you saved a change to the URL key of a product by selecting the **Create Permanent Redirect for old URL** option, Magento did not rewrite the old URL to the new URL.

<!--- 61106-->* The Product page now displays swatches based on the color swatch attribute. Previously, the Product page did not display swatches. 

<!--- 57336-->* Magento no longer displays a "Wrong request parameters" error when you try to assign products to a category at the store view level. Previously, you encountered a `levelWrong` request parameters error when you assigned products to a category.

<!--- 59461-->* The Magento Framework now makes its dependencies explicit in the `composer.json` file. <a href="https://github.com/magento/magento2/issues/6442" target="_blank">(GITHUB-6442)</a>



<!--- 59449-->* Magento now decrements stock as expected in a multi-website environment. 

<!--- 55682-->* The catalog category now retrieves prices from the price index update as expected. 

<!--- 56001-->* The search field now works as expected on iOS devices using the Safari browser. Previously on these devices, the search box closed randomly. 

<!--- 55664-->* We've removed the duplicate PHP settings from the sample web server configuration files.

<!--- 58894-->* The Compare Products page now works as expected. Previously, you were erroneously redirected to another page when you removed an item from the Compare Products sidebar. 



<!--- 57134-->* You can now return to the Magento Admin from the Web Setup Wizard (**System > Tools > Web Setup Wizard**). Previously, you had to log back in to the Magento Admin after you ran the Web Setup Wizard.

 

<!--- 59398-->* Custom themes now inherit parent XML configuration information as expected. 

<!--- 57322-->* Magento no longer redirects users to the Checkout page after login. Now, if you set **Redirect Customer to Account Dashboard after Logging in**  value to **Yes**, users will be redirected to the Account Dashboard page. If you set this value to **No**, then users will stay on the home page after login. 

<!--- 59102-->* Customers can now continue shopping after selecting an unavailable bundle product. Previously, if a customer selected a bundle product that was no longer available, he would encounter a fatal error. 

<!--- 57331-->* The Magento storefront now reflects changes in the swatch attribute properties as expected. 

<!--- 57326-->* The Sales Order object can now contain more than one `extension_attribute`.  <a href="https://github.com/magento/magento2/issues/3967" target="_blank">(GITHUB-3967)</a>

<!--- 57352-->* We've removed the sample password from the Setup wizard.

<!--- 57338-->* Customers are now redirected as expected to the destination URL identified in the **Redirect to My Account After Log-in** setting. Previously, customers were redirected to the My Account page, no matter which URL you identified in this setting.


<!--- 57498-->* Lengthy Order Status tables are now paginated as expected.

<!---57030 -->* We've fixed a problem with [custom zip code masks]({{ page.baseurl }}/howdoi/checkout/checkout_zip.html) in previous versions of Magento. <a href="https://github.com/magento/magento2/issues/4131" target="_blank">(GITHUB-4131)</a>


<!--- 57036-->* You can now upload changes to the `robots.txt` file from the Magento Admin. 



<!--- 62030-->* Users need view permission to the store to which the customers belong in order to see information about those customers. Previously, a user could see information about customers that belonged to websites or stores for which the user did not have explicit permission to view. 


### Images
{:.no_toc} 

<!--- 59829-->* We've added a new way to import images: You can now successfully import images when you set  your document root to  `<your Magento install dir>/pub`. Previously, you needed to set document root to `/magento` to import images. Both ways of importing now work. <a href="https://github.com/magento/magento2/issues/5359" target="_blank">(GITHUB-5359)</a> 

<!--- 56171-->* You can now preview uploaded images. 


### Import/Export
{:.no_toc} 

<!--- 55156-->* You can now export a bundle product that contains a custom text attribute. Previously, if you tried to export this type of bundle product, the export failed, and Magento displayed the message, "There is no data for the export". 

<!--- 59413-->* You can now successfully import multiselect attributes that contain special characters or delimiters. Previously, when you tried to import attributes that contained delimiters, data validation (and the import) failed. 

<!---58047 -->* Importing customer data no longer sets the Gender attribute to a blank field. 

<!---57106-->* You can now import negative quantities.  

<!--- 57162-->* Magento now prompts you to log in before attempting to upgrade. Previously, it was not clear that you needed to log in first before initiating an upgrade.  <a href="https://github.com/magento/magento2/issues/3059" target="_blank">(GITHUB-3059)</a> 

<!--- 57491-->* Magento no longer randomly displays the following error during import after a file passes the data check: "Maximum error count has been reached or system error is occurred!". 


<!--- 56803-->* We've fixed an issue with the representation of date and time zones of items in the product catalog during import or export. Previously, Magento converted all data into the default format (UTC-8), including values that you set to be displayed using another standard. 




### Installation, upgrade, and deployment
{:.no_toc} 

<!--- 57082-->* The Component Manager now shows a list of all available versions of an extension for installation. Previously, the Web Setup component manager showed only the latest version of the extension. 

<!--- 57130-->* During upgrade, we now check directory permissions recursively except for the `var/session` directory. We skip that directory because the web server usually owns those files.

<!--- 57944-->* Magento 2.0.x now supports the use of table prefixing during installation. Previously, when you used table prefixing, your Magento installation failed with this error: "Duplicate key on write or update". <a href="https://github.com/magento/magento2/issues/5688" target="_blank">(GITHUB-5688)</a>



### Orders
{:.no_toc} 

<!--- 61268, 59424, 56433--> * We’ve added PHP interfaces that add the ability to change the status of a shipment. The new Creditmemo interface supports tasks you can already do through the Magento Admin, including the ability to:

	* support returning multiple units of a configurable product. Previously, when you tried to refund an order, you could refund only one unit of a configurable product, not the amount in the original order. 

	* return the product to stock 

	* change order status after a credit memo has been created.

<!--- 57681-->* You can now reorder an item that is currently invoiced or being shipped. Previously, if you tried to reorder, Magento did not add the item to your shopping cart, and displayed an error. <a href="https://github.com/magento/magento2/issues/6278" target="_blank">(GITHUB-6278)</a>

<!--- 57715-->* A user can view orders only on stores to which they've been assigned permission. Previously, an Admin user with permissions for only one store could view orders from all stores on the same website. 



### Payment methods
{:.no_toc} 

<!--- 57099-->* You can now successfully place an order using the Payflow Pro payment method. 

<!--- 57172 -->* We've fixed an issue with how Magento captures and validates payment information. Previously, after you entered valid credit card information, Magento prompted you to re-enter the information, and displayed this error: "Please  enter a valid credit card expiration date". <a href="https://github.com/magento/magento2/issues/4741" target="_blank">(GITHUB-4741)</a>



### Performance
{:.no_toc} 

<!--- 60187, 55785,59394, 57894, 55300 -->* We’ve improved the performance of these tasks:


	* Loading the Configurable Product page

	* Creating many (2500 - 5000) product variations

	* Calculating batch sizes while indexing categories

	* Compiling. (We’ve optimized compiler performance to run faster.)
 
<!--- 57509-->* We've also streamlined the JavaScript bundling process, which reduces the size of bundled files. <a href="https://github.com/magento/magento2/issues/4506" target="_blank">(GITHUB-4506)</a> 



### Scope
{:.no_toc}

<!--- 58205-->* You can now successfully assign products to a category on the store view level. Previously, Magento displayed this error when you tried to assign products to a category: "Wrong request parameters". 

<!--- 57002-->* A restricted user can now change the attributes (either at the store view or website level) attributes that are defined in his scope. Previously, Admin users with access to only one website could not edit a product, no matter how their scope was set. 

<!--- 57004-->* The scope selector on the Product page now accurately displays all related websites for a restricted user. 


### Static file processing
{:.no_toc}

<!--- 56076-->* Versioning of static files (including CSS, JavaScript, fonts, and images) is now enabled by default.

<!---59547-->* Static asset signing now works under nginx. For more information, see <a href="http://docs.magento.com/m2/ce/user_guide/system/static-file-signature.html" target="_blank">Using Static File Signatures</a>.




### Web APIs
{:.no_toc} 


<!--- 57066-->* The Swagger documentation erroneously indicated that search queries can return detailed information about multiple objects. The description of these APIs now state which API to use to return detailed information about a single object.

<!--- 59315-->* We've fixed an issue where updating product stock did not persist correctly when saving products through either the web API or directly in the repository. 























## Known issues


* **Issue**: When editing a product, you cannot edit customizable options on the store view level. That is, a change to one option affects products on all stores. Also, the ‘Use Default Value’ checkbox for the option title does not work. Unchecking this box and then changing the title affects all store views. 


<!--- 57199-->* **Issue**: When you add a new product and re-index using Varnish, Magento does not display the product on the frontend, even after you purge the cache and re-index. **Workaround**: Purge the Varnish cache using the Varnish admin CLI. 


* **Issue**: A Paypal SSL CURL communication error can occur if your Magento installation is not running the minimal required TLS version. Older versions of Magento might not run the minimal version, which is TLS 1.2. If your version doesn't, then Magento displays this error: `curl: (35) Cannot communicate securely with peer: no common encryption algorithm(s)`. **Workaround**: Upgrade CURL to a minimum version of 7.39.0.


* **Issue**: Mass actions can be slow and consume excessive memory unless you increase the default PHP settings for your installation. These default settings for your Magento installation typically support the processing of about 1,000 variables. If you try a mass action that involves 1000 or more variables, the mass action might fail. **Workaround**: You can reduce processing time and performance by increasing your default PHP memory settings to 1 GB.

* **Issue**: Gallery doesn't show all images added to configurable options.


* **Issue**: The Add Products Manually link is not available after removing all variations. **Workaround**: Retain at least one variation or use the **Choose a different product option** option.


* **Issue**: When you log in to run a system upgrade, Magento displays this error: `Encountered end of file`.  **Workaround**: Upgrade your SSL protocol to a minimum of TLS 1.0. 









<!--- INTERNAL ONLY 59791, 59667, 59676, 59677, 59646, 61119, 55862, 60428, 60527, 60292, 58186, 57562, 59716, 58360, 58323 -->


<!--- CANNOT REPRODUCE 57169, 59312, 57503, 57332, 56002, 57100, 61181, 61218, 61803 -->


<!--- NOT A BUG 57471, 57145, 61177, 61192, 61121, 57016, 61160, 61343, 61172 -->


<!---  WON'T FIX 58853, 58798, 57105, 57802, 58083, 58900, 58611, 57311, 56916, 59370, 57510, 61242, 61339, 59414, 59408, 57330, 59411, 56958 -->

<!---  DUPLICATE 59410, 58085, 57095, 59558, 58095, 61149, 58095, 61254 -->


<!---  OMIT 58461-->




## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}


## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
