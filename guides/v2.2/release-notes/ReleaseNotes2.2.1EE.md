---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento Commerce 2.2.1 Release Notes
menu_title: Magento Commerce 2.2.1 Release Notes
menu_order: 296
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/ReleaseNotes2.2.1EE.md
---
*Release notes updated October 2.* 


We are pleased to present Magento Commerce 2.2.1. This release includes numerous functional fixes and enhancements.


## Highlights

Look for the following highlights in this release:



Looking for more information on these new features as well as many others? Check out  [Magento 2.2 Developer Documentation](http://devdocs.magento.com/guides/v2.2/).


## Security enhancements
Magento 2.2.1 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.


[Contact us](https://magento.com/company/contact-us) for more information.



## Known issues

Magento 2.2.1  includes the following known issues. Fixes for these issues are scheduled for patch releases in the near future. 




## Fixed issues
This release contains hundreds of fixes and enhancements. 


### Installation, upgrade, deployment

<!--- 80225 -->* We’ve improved the message that Magento displays during upgrade if any schema or data version in the `setup_modules` database is higher than the current module version in the code. *Fix submitted by community member <a href="https://github.com/schmengler" target="_blank">Fabian Schmengler </a> in pull request <a href="https://github.com/magento/magento2/pull/11064" target="_blank">11064</a>.*

<!--- 71893 -->* If you do not specify `—base_url` during installation, all URLS now use the host and port of the current request to create URLs. 

### AMQP

<!--- 72288 -->* The `inventoryQtyCounter` consumer now works without having RabbitMQ installed.





### Catalog

<!--- 71520 -->* Magento now displays products that are filtered to a particular store view even when the corresponding store view has been deleted. Previously, Magento displayed a continuously spinning  spinner widget and this error message: **A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later.**

<!--- 72382 -->*  You can now save custom shared catalogs.

<!--- 78522 -->*  EE ONLY

### Cart and checkout

<!--- 71984 -->* Magento now provides a Login button so that you can resume your checkout process if you return to the check out page after leaving it mid-order.


### Configurable products
<!--- 72582 -->* Magento now longer displays the inappropriate  product price when a configurable product has two price options. Previously, Magento displayed the  out-of-stock price of a configurable product when both an out-of-stock and in-stock price were configured. 

<!--- 72370 -->* Configurable products no longer show up on category page when all children are disabled by a mass action, and the **display out-of-stock products** setting is off.

<!--- 72747 -->* If a configurable product is part of a shipment that is being created by REST, only the parent's quantity will count towards the total quantity of shipped items. Previously, Magento counted both child and parent products when calculating quantity.

<!--- 72582 -->* Configurable product pricing now reflects only in-stock configurations as expected.


### Frameworks

<!--- 67097 -->* You can now run Magento in an environment where Redis cache is installed and the PHPRedis extension is enabled. 



#### Configuration framework

<!--- 72860 -->* Magento now properly loads default values for `ArraySerialized` fields. 


### General
<!--- 80096 -->* We fixed JavaScript date validation on the store front. Previously, validation of the date of birth field during customer registration when the default locale did not work. *Fix submitted by community member <a href="https://github.com/joachimVT" target="_blank">Joachim Vanthuyne</a> in pull request <a href="https://github.com/magento/magento2/pull/11067" target="_blank">11067</a>.*

<!--- 80112 -->* We’ve added a CSS selector to remove an additional top-margin that was rendered when you added  a link widget to the footer in the Luma theme. Previously, when you added a new footer links, the block of footer links did not line up with the default footer links. *Fix submitted by community member <a href="https://github.com/fragdochkarl" target="_blank">Sandro Wagner</a> in pull request <a href="https://github.com/magento/magento2/pull/11063" target="_blank">11063</a>.*

<!--- 71980 -->* You can now remove system customer address and customer attributes from specific forms to prevent them from displaying on the frontend. 

<!---  -->* 

<!--- 72587 -->* Deleting a customer in Admin Panel no longer causes fatal errors upon storefront login or registration.





### Indexing
<!--- 72866 -->* We’ve fixed multiple issues where indexes were invalidated as a result of typical import, scheduled import, and catalog permission tasks. 

  

### Orders
<!--- 77966 -->* You can now use PayPal Express Checkout  to place an order in a split-database environment. 

<!--- 72393 -->* If a credit card error occurs on an order, the user can now correct the error and successfully create a new order. Previously, Magento displayed the following error on any subsequent order, even when you entered accurate credit card information: "A customer with the same email already exists in an associated website”. 

<!--- 80102 -->* We’ve added a `name` attribute to the layout default renderer, and you can now add a new column to the Admin Sales > Order table . Previously,  the layout default renderer lacked a `name` attribute. *Fix submitted by community member <a href="https://github.com/gsomoza" target="_blank">Gabriel Somoza</a> in pull request <a href="https://github.com/magento/magento2/pull/11076" target="_blank">11076</a>.*





### Payment methods

<!--- 72351 -->* Double-clicking the **Place Order** button when using the  Braintree payment method to place an order no longer creates duplicate order requests. #10767 [GitHub-5688](https://github.com/magento/magento2/issues/5688)

<!--- 71050 -->* Magento now completes processing an order if the customer needs to re-enter credit card information during the order process. Previously, Magento returned this error `No such entity with customerId = 0`. 







### Search

<!--- 77777 -->* Search terms from the same synonym group now return the same results.


<!--- 75935 -->* A search query results are now more consistent. Previously, identical search terms entered in different browser tabs resulted in different search results. 

<!--- 71552 -->* You can now search for attribute values on the store-view level. 

<!--- 72267 -->* Magento now displays grouped products in the Shared Catalog page when Elasticsearch is enabled. 


### Staging

<!--- 60953 -->* Bundle simple products now reflect expected changes after a scheduled update. 


Fix submitted by community member <a href="https://github.com/ericrisler" target="_blank">Eric Risler
</a> in pull request <a href="https://github.com/magento/magento2/pull/8474" target="_blank">8474</a>.*


### Visual Merchandiser
<!--- 71554 -->*  We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).

<!--- 71986 -->*  Visual Merchandiser now retains page view options and position after you remove a product. Previously, when you removed a product from a category, and you weren't on the first page, Magento returned you to the first page.


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
    <td><a href="https://github.com/magento/magento2/pull/11067" target="_blank">11067</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/joachimVT" target="_blank">Joachim Vanthuyne</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11054" target="_blank">11054</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/schmengler" target="_blank">Fabian Schmengler</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11056" target="_blank">11056</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/stevenvdp" target="_blank">Steven Vandeputte</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11058" target="_blank">11058</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/Quinten" target="_blank">Quinten Clause</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11063" target="_blank">11063</a></td>
    <td>6712</td>
     <td><a href="https://github.com/fragdochkarl" target="_blank">Sandro Wagner</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11064" target="_blank">11064</a></td>
    <td>9008, 9981</td>
     <td><a href="https://github.com/schmengler" target="_blank">Fabian Schmengler</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11076" target="_blank">11076</a></td>
    <td>10824</td>
     <td><a href="https://github.com/gsomoza" target="_blank">Gabriel Somoza</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11048" target="_blank">11048</a></td>
    <td>10417</td>
     <td><a href="https://github.com/PieterCappelle" target="_blank"></a>Pieter Cappelle</td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11049" target="_blank">11049</a></td>
    <td>10697</td>
     <td><a href="https://github.com/avdb" target="_blank">avdb</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11069" target="_blank">11069</a></td>
    <td>10474</td>
     <td><a href="https://github.com/Echron" target="_blank">Stijn Duynslaeger</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11127" target="_blank">11127</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/niccifor" target="_blank">niccifor</a></td>
  </tr>

<tr>
    <td><a href="https://github.com/magento/magento2/pull/11138" target="_blank">11138</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/jokeputs" target="_blank">Joke Puts</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11147" target="_blank">11147</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/raumatbel" target="_blank">Raul Mateos</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11154" target="_blank">11154</a></td>
    <td>9877</td>
     <td><a href="https://github.com/JTimNolan" target="_blank"></a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11160" target="_blank">11160</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/denysbabenko" target="_blank">Denys Babenko</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11200" target="_blank">11200</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/osrecio" target="_blank">Oscar Recio</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11168" target="_blank">11168</a></td>
    <td>10738</td>
     <td><a href="https://github.com/maksek" target="_blank"></a>Max Yekaterynenko</td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11223" target="_blank">11223</a></td>
    <td>9900</td>
     <td><a href="https://github.com/convenient" target="_blank">Luke Rodgers</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11229" target="_blank">11229</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/convenient" target="_blank">Luke Rodgers</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11050" target="_blank">11050</a></td>
    <td>11044</td>
     <td><a href="https://github.com/schmengler" target="_blank">Fabian Schmengler</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11134" target="_blank">11134</a></td>
    <td>10775</td>
     <td><a href="https://github.com/Zifius" target="_blank">Alexander Turiak</a></td>
  </tr>

<tr>
    <td><a href="https://github.com/magento/magento2/pull/11084" target="_blank">11084</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/rubenRP" target="_blank">Rubén Rodríguez</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11246" target="_blank">11246</a></td>
    <td>11231</td>
     <td><a href="https://github.com/crissanclick" target="_blank">crissanclick</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11254" target="_blank">11254</a></td>
    <td>10317</td>
     <td><a href="https://github.com/romainruaud" target="_blank">Romain Ruaud</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11155" target="_blank">11155</a></td>
    <td>11089</td>
     <td><a href="https://github.com/renttek" target="_blank">Julian</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11291" target="_blank">11291</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/dverkade" target="_blank">dverkade</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11165" target="_blank">11165</a></td>
    <td>7582</td>
     <td><a href="https://github.com/bka" target="_blank">Bernhard</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11297" target="_blank">11297</a></td>
    <td>5105</td>
     <td><a href="https://github.com/michielgerritsen" target="_blank">Michiel Gerritsen</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11327" target="_blank">11327</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/dverkade" target="_blank">dverkade</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11081" target="_blank">11081</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/RakeshJesadiya" target="_blank">Rakesh Jesadiya</a></td>
  </tr>


<tr>
    <td><a href="https://github.com/magento/magento2/pull/11183" target="_blank">11183</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/larsroettig" target="_blank">Lars Roettig</a></td>
  </tr>

<tr>
    <td><a href="https://github.com/magento/magento2/pull/11205" target="_blank">11205</a></td>
    <td>11163</td>
     <td><a href="https://github.com/Tomasz-Silpion" target="_blank">Tomasz Gregorczyk</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11291" target="_blank">11291</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/dverkade" target="_blank">dverkade</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11249" target="_blank">11249</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/navarr" target="_blank">Navarr Barnier</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11345" target="_blank">11345</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/davidangel" target="_blank">David Angel</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11349" target="_blank">11349</a></td>
    <td>11329</td>
     <td><a href="https://github.com/manuelson" target="_blank">Manu Gonzalez Rodriguez</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/11390" target="_blank">11390</a></td>
    <td>8958</td>
     <td><a href="https://github.com/jahvi" target="_blank">Javier Villanueva</a></td>
  </tr>

</tr>

  </table>



### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.2 General Availability (GA) using Composer.


{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
