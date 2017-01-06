---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento CE 2.0.12 Release Notes
menu_title: Magento CE 2.0.12 Release Notes
menu_order: 168
version: 2.0
level3_menu_node: level3child
level3_subgroup: ce20-relnotes 
github_link: release-notes/ReleaseNotes2.0.12CE.md
---
We are pleased to present Magento Community Edition 2.0.12. 



## Highlights
Magento 2.0.12 contains more than 20 bug fixes and enhancements, including these highlights:



## Functional fixes

We address the following functional issues in this release.

## Checkout
<!---  58946-->* The Magento application now displays custom address attributes on the checkout summary. 


<!--- 60877 -->* The **Use Default Checkboxes for Custom Options** option now works as expected. Previously, the checkboxes under the option title and value title were not rendered correctly, and the feature did not work.


<!--- 61113 -->* Magento now displays the "Thank you for your purchase!" message after a customer successfully checks out. Previously, the Magento application did not display this message, even though the HTML code was present. <a href="https://github.com/magento/magento2/issues/6968" target="_blank">(GITHUB-6968)</a>







## Configurable products

<!---  58504-->* You can now directly add a configurable product (with all possible options defined) to your shopping cart from the category page. Previously,  you had to review a product on the product page before completing the process of adding it to your shopping cart. <a href="https://github.com/magento/magento2/issues/2574" target="_blank">(GITHUB-2574)</a>, <a href="https://github.com/magento/magento2/issues/5850" target="_blank">(GITHUB-5850)</a>, <a href="https://github.com/magento/magento2/issues/5882" target="_blank">(GITHUB-5882)</a>, <a href="https://github.com/magento/magento2/issues/6572" target="_blank">(GITHUB-6572)</a>,  <a href="https://github.com/magento/magento2/issues/5558" target="_blank">(GITHUB-5558)</a>


## Import/export

<!--- 61264 -->* The Magento application can now import `additional_images` that are tagged with labels that contain a comma separator.

<!--- 61075 -->* The Magento application no longer deletes a product after you select the Replace option while importing a product. Previously,  Magento deleted the product rather than replacing it.  





## Miscellaneous


<!--- 61022 -->* You can now create a new order from the Magento server side. <a href="https://github.com/magento/magento2/issues/5533" target="_blank">(GITHUB-5533)</a>,  <a href="https://github.com/magento/magento2/issues/6855" target="_blank">(GITHUB-6855)</a>


<!--- 61151-->* Magento now displays an error message as expected when a user tries to add less than the specified minimum quantity of a product to his shopping cart. 

<!--- 61091 -->* The Free Shipping method now shows up as an available option when you create an order in the Magento backend. <a href="https://github.com/magento/magento2/issues/2939" target="_blank">(GITHUB-2939)</a>


<!--- 60724 -->* The Magento application now redirects you to the Setup page as expected when you specify a particular port when installing the application using Nginx. Previously, Magento did not redirect you to the Setup page, and instead displayed this message in `var/report`: `You cannot install Magento using the Setup Wizard because the Magento setup directory cannot be accessed`. 

<!--- 60327 -->* Magento no longer assigns all orders a status of Suspected Fraud in multi-currency store configurations. <a href="https://github.com/magento/magento2/issues/4263" target="_blank">(GITHUB-4263)</a>

<!--- 61146 -->* An Admin user with restricted permissions no longer has access to all orders. 

<!--- 60055 -->* Admin users can no longer create an empty URL key for a category. Previously, the Magento application let Admin users create an empty URL key, which lead to numerous category-related errors.

<!--- 60965 -->* New custom attributes are now visible together with other address details when you add a new address. 

<!--- 57519-->* Requests to Edge Side Includes (ESI) now return data. Previously, requests to ESI did not return data because the requested block was absent in the layout. 


<!--- 62647 -->* The Magento application now successfully saves a product even when you include an empty Custom Options row (**Products > Catalog > Custom Options**). Previously, under these conditions, Magento displayed the `Invalid option value` error message, and did not save the product.  

<!--- 61628 -->* The **Match products by rule** option in the Admin interface now works as expected. 

<!--- 62654 --> You can now successfully match products by rule with an AND condition on Category Rule. Previously, this operation did not return any matched products.  


<!--- 62680 --> Admin users need view permission to the store to which the customers belong in order to see information about those customers. Previously, an Admin user could see information about customers that belonged to websites or stores for which the user did not have explicit permission to view.



## Payment methods

<!--- 56925 -->* You can now ship items to a country from which you have not authorized payment. Previously, when a customer tried to ship an order to a country from which the store was not authorized to receive payment, the Magento application displays this message, `"No Payment method available"`.

<!--- 62661 --> You can now cancel check out of an order you are making with the Worldpay payment option without emptying your shopping cart. Previously, when you canceled a checkout operation while using this payment method, the Magento application emptied your shopping cart. 



## Travis builds

<!--- 62455 -->* We've fixed a Travis build failure. 




<!--- NOT A BUG --> 

<!--- 62727 --> 

<!--- 62795 -->


<!--- INTERNAL ONLY --> 


<!--- 62121 -->






<!--- CANNOT REPRODUCE --> 

<!--- 61148 -->

<!--- 62793 --> 

<!--- 62581 --> 

<!--- 62574 --> 

<!--- 62671 --> 




## Known issues





## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}


## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
