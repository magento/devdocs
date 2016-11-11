---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.0.11 Release Notes
menu_title: Magento EE 2.0.11 Release Notes
menu_order: 22
github_link: release-notes/ReleaseNotes2.0.11EE.md
---
*	TOC
{:toc}


## Magento Enterprise Edition 2.0.11
We are pleased to present Magento Enterprise Edition 2.0.11. This release includes functional enhancements. 



Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.

## Highlights






## Functional fixes

We address the following functional issues in this release.

<!--- 60527-->* New package version is always 100.0.0 after S1 build. If the same new module added to 2.0, 2.1 and 2.2, composer package generated out of this module will have version 100.0.0 for all 3 releases. This will lead to conflicts (there should be no packages with the same version but with different content).
To resolve this conflict and to prevent human errors like in MAGETWO-60477, minor version of new module should be taken from minor part of current Magento version. I.e. if current Magento release is 2.1.3, then all new packages should have version 100.1.0; if Magento release is 2.2.0, new packages should have version 100.2.0. OPEN


<!--- 60066-->* Magento publication INTERNAL ONLY

<!--- 60608-->*  [GITHUB] Paging magento 2 not correct when use group in collection #4767


<!---69646 -->*


<!--- 60292-->*Fix L3 get_github_changes in 2.0-develop INTERNAL ONLY
<!--- -->*





<!--- 59829-->*  Product import with images not working. <a href="https://github.com/magento/magento2/issues/5359" target="_blank">(GITHUB-5359)</a> 


<!--- 59842-->*  File permissions checks take too long and add downtime to deployment. File permission checks before setup:upgrade can greatly slow down the deployment process

<!--- 59447-->* [Cloud] [Solr] Perform Advanced Search using custom "Price" product attribute

<!---59547 -->*  Static versioning now works under nginx. 

<!--- 56076-->*  Versioning of static files (including CSS, JS, fonts, and images) is now enabled by default.

<!--- 55791-->*  Porting of implementation . Make fast open of Review step in Wizard for creation configurable variation.
Pager for each grid group on review step
Test case for further functionality checking

<!---56935 -->* Allowed countries for customer address in admin using storeview configuration. <a href="https://github.com/magento/magento2/issues/2946" target="_blank">(GITHUB-2946)</a> 
<!--- -->*  

<!--- -->*  

<!--- 59414-->*  Escape Special Characters Support. We have situations when special symbols are a part of the CSV file. Currently such special symbols not escaped during file processing in some cases.

<!---59408 -->* Deployment process can't be executed on separate machine OPEN

<!--- 59449-->*  Stock decrements in multi-website doesn't work OPEN

<!--- 59413-->* [Magento Cloud] - Import issue with a multiselect option having special symbols (, and |) OPEN


<!--- 57330-->*  Updated Discover and Maestro/Mastercard BINs OPEN

<!---57703 -->* Caching is not getting flushed via admin back-end with varnish OPEN



<!--- 59050-->*  Portdown MAGETWO-50198. [GITHUB] Options for Configurable product are merged in one product if Reorder #3654. #3820





<!--- 59409-->* [Critical][OMS] Max messages makes the consumer die after existing messages are consumed

<!---59411 -->*   Saving category on catalog with 20k+ products is very slow (from 5mins till 1 hour) 

<!--- 55682-->*   ticket https://jira.corp.magento.com/browse/MAGETWO-55514


<!--- 59716-->*  Investigate URL rewrite behavio

<!--- 58089-->*  Issue with inline translate


<!--- 58205-->* Wrong request parameters error occurs when assigning category to a product

<!--- 56958-->* Styles drop down in WYSIWYG editor does not work

<!--- 55156-->*  If custom text area attribute is created, you can't export   bundle product

<!--- 58793-->*  Unable to edit configurations options after product options lose price on regeneration


<!--- 56803-->* Product catalog Import/export - Date & Timezone issue

<!--- 56001-->* Search box closes randomly on iOS devices

<!--- 56433-->* Creditmemo creation through API change order status

<!--- 55664-->*  Portdown MAGETWO-51428. Duplication of PHP memory settings in sample web-server config files. 

<!--- 59211-->*  Minicart item count is not updated if switch from https to http. <a href="https://github.com/magento/magento2/issues/6487" target="_blank">(GITHUB-6487)</a> 

<!--- 58894-->* Customer is redirected to "Compare Products" Frontend page if tries to remove a Product from comparing


<!--- 58917-->* Error adding simple product to configurable product with advanced configurations

<!--- 59374-->*  Ship To section on Checkout's Review & Payments step, clears out the Ship To address on page reload


<!--- 57894-->* Port Compiler optimizations. INTERNAL ONLY?


<!--- 57513-->* Giftcard Purchase - Order Status - Processing. Partner have set the Braintree payment method Payment Action to Authorize and Capture.
Now if they purchase a giftcard the sales order having Order Status = Processing, 
The invoice is already created.
But order status doesn't get changed to 'Complete'.
And there is no way to change it on admin panel also.
STEPS TO REPLICATE
01. Set Payment method Payment Action to Authorize and Capture. 
02. Purchase a gift card (only giftcard - virtual)
03. Check on admin -> sales ->orders.


<!--- 57134-->*  Web setup wizard not accessible from admin


<!--- 57099-->* Order can't be placed via Payflow Pro payment method

<!--- 57000-->* Simple child product without a special price still shown as "was (original price)" #4442 #5097 #6645

<!--- 58186-->*  RMA module unit tests fail on 2.0.11 dev branch

<!--- 59398-->* [Cloud] Custom theme does not use parent XML configuration on multi thread deployment backport 2.0

<!--- 58065-->* Unable to upgrade with split databases.

<!--- 59415-->*  *As low as* price for configurable product is shown for disabled simple options

<!--- 57130-->* bin/magento commands (setup:cron:run, setup:upgrade, setup:uninstall) should skip session folder

<!---57895 -->* Port Deploy Asset optimizations




<!--- 58037-->* Reloading page on checkout causes shipping method to go "undefined"

<!--- 55785-->*  Lightweight configurable product form load and options displa

<!--- 57336-->* Wrong request parameters error occurs when assigning products to category

<!--- 57172-->* CC Model doesn't assigns cc data passed in additional_data field patch for 2.0.x. <a href="https://github.com/magento/magento2/issues/4741" target="_blank">(GITHUB-4741)</a>

<!--- 57133-->* Item Level Gift Message can not be saved for guest. <a href="https://github.com/magento/magento2/issues/3804" target="_blank">(GITHUB-3804)</a> 


<!--- 57322-->*  Unnecessary redirect to checkout page after Sign-in

<!--- 56875-->* Unable to Save Product
<!--- 56955-->*  Validation message displayed all the time

<!--- 57106-->* Cannot import negative quantity
<!--- 59102-->* Bundle Products - The options you selected are not available
<!--- 58323-->*  Delivery bug fixes for Setup and Import/Export

<!--- 57331-->*  Changing Swatch attribute's property doesn't affect storefront

<!--- 58192-->*  Prices of related products on PDP changes according to product custom options. <a href="https://github.com/magento/magento2/issues/4588" target="_blank">(GITHUB-4588)</a>


<!--- 57162-->* Upgrading M2 is confusing - not clear need to login first to magento.com. <a href="https://github.com/magento/magento2/issues/3059" target="_blank">(GITHUB-3059)</a> 

<!--- 57491-->* Maximum error count when importing because issue URL key for specified store already exists

<!--- 57066-->* Gift Message Data for Sales Order not available for retrieval using API

<!--- 57944-->* Magento 2.0.x and 2.1.x does not respect table prefix during installation. <a href="https://github.com/magento/magento2/issues/5688" target="_blank">(GITHUB-5688)</a>


<!--- 58058-->* Unable to add more than 1 product to a cart from Wishlist. <a href="https://github.com/magento/magento2/issues/5282" target="_blank">(GITHUB-5282)</a> 


<!--- 57844-->* Coupon code override cart rules with no coupon code. <a href="https://github.com/magento/magento2/issues/6294" target="_blank">(GITHUB-6294)</a> 


<!--- 57352-->*  Example password enocurages password reuse


<!--- 58035-->* Configurable product options not saved when editing
<!--- 58614-->*  Cannot checkout reordered products

<!---59394 -->* Wrong algorithm for calculation batch size on category indexing
<!--- 57338-->* Customer is not redirected to checkout on login if guest is disabled
<!--- 57002-->*  Admin user with access to only one website is unable to edit a product

<!--- 57004-->* Scope selector on product page does not display all related websites for restricted user
<!--- 57326-->* Sales Order extension_attributes. <a href="https://github.com/magento/magento2/issues/3967" target="_blank">(GITHUB-3967)</a>


<!--- 57562-->* Sales functional tests fail against ECE 2.0.9 (wrong grand total price)

<!--- 57509-->*  Javascript Bundling produces huge 13MB js files. <a href="https://github.com/magento/magento2/issues/4506" target="_blank">(GITHUB-4506)</a> 

<!--- 57715-->*  User with permissions restricted to a single store can view orders on all stores


<!--- 57069-->* FIXED IN 2.0.10?

<!--- 58466-->*  Adding products changes visual merchandiser order

<!--- 55299-->*  Fast Save of Product Variations
<!--- 58243-->*  Gift amount not shown in order email

<!--- 57498-->* Pagination is absent on Order Status grid
<!--- 56859-->* Attribute for Send Welcome Email From shows wrong store ID
<!---58047 -->*   Importing customer data clears out gender field

<!---57030 -->* Custom zip code mask not working in 2.0.4. <a href="https://github.com/magento/magento2/issues/4131" target="_blank">(GITHUB-4131)</a>

<!--- 56963-->* State/Province field doesn't show as required on the add new address page. <a href="https://github.com/magento/magento2/issues/5279" target="_blank">(GITHUB-5279)</a> 

<!--- 57103-->*  Customer Segments report calculates same customer twice on 2 websites 

<!--- 57384-->* RMA comments are not visible on frontend
<!--- 39489-->* RMA comments are not visible on frontend


<!---58360 -->* Support Module breaks DB dumps 


<!---59424 -->*  Ability to return the product to the stock after Creditmemo API


<!--- 56908-->* UPS not providing shipping rates for Puerto Rico for 2.0


<!--- 57036-->* Unable to upload change robots.txt file via admin panel
<!--- 55444-->* Checkout page freezes when ordering Virtual Gift Card with Authorize.net set to Authorize and Capture
<!--- 57196-->*  Unable to Duplicate a product that has Related, Upsell, and/or Cross-sell products

<!--- 57082-->* Install extension via Web Setup only shows latest version
<!--- 56171-->* File added via customer file (attachement) attribute is not uploaded / found



<!--- 58665 -->* [Firefox] Addresses form is overlapped on Order creation page OPEN

<!--- 60187-->* Non consistent save Product Stock Item via Web API and repository directly

<!--- -->* 
<!--- -->*  

<!--- -->* 
<!--- -->* 

### INTERNAL ONLY

<!--- 59791-->*  INTERNAL ONLY
<!---59667 -->*  INTERNAL ONLY
<!--- 59676-->*  INTERNAL ONLY
<!--- 59677-->*  Prepare code base for 2.0.11-dev INTERNAL ONLY
<!---59646 -->* release notes INTERNAL ONLY







### CANNOT REPRODUCE AND WON'T FIX
<!--- 57471-->*  NOT A BUG
<!--- 58853-->*  WON'T FIX

<!---58798 -->* WON'T FIX
<!---57105 -->* WON'T FIX
<!--- 57802-->* WON'T FIX
<!--- 57169-->* CANNOT REPRODUCE
<!---58083 -->* WON'T FIX
<!--- 58900-->* WON'T FIX
<!--- 59312-->*  CANNOT REPRODUCE
<!--- 58611-->* WON'T FIX
<!--- 57503-->*  CANNOT REPRODUCE
<!--- 57332-->*  CANNOT REPRODUCE
<!--- 56002-->*  CANNOT REPRODUCE
<!--- 57311-->* WON'T FIX
<!--- 56916-->*  WON'T FIX

<!--- 59370-->* WON<!--- 57100-->* CANNOT REPRODUCE
'T FIX OBS

!--- 57145-->* NOT A BUG

<!---57510 -->*   UWON'T FIX









### DUPLICATE

<!--- 59410-->* DUPLICATE
<!--- 58085-->*  DUPLICATE
<!--- 57095-->*  DUPLICATE

<!---59558 -->* DUPLICATE



### OMIT

<!--- 58461-->*  OMIT
<!--- 57016-->* NOT A BUG









### Configurable products
{:.no_toc} 
<!--- 55300 -->* Fast Display and Generation of Product Variations for Configurable Products

<!--- 59950-->* Configurable product option price is displayed incorrectly per website.  

<!--- 57056-->* Configurable product disabling lowest price associated product still shows its price. <a href="https://github.com/magento/magento2/issues/4419" target="_blank">(GITHUB-4419)</a> 






### Performance
{:.no_toc} 





### Tracking and shipping
{:.no_toc} 





### Cart and checkout
{:.no_toc} 





### General fixes
{:.no_toc} 






<!--- Omitted (can't be reproduced or won't fix) (CLONES: ) (INTERNAL ONLY:  ) (WONT FIX: -->

## Known issues


* **Issue**:   **Workaround**: 




## System requirements
Our technology stack is built on PHP and MySQL. See
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_20.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
