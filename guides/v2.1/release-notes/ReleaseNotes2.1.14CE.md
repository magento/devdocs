---
layout: default
group: release-notes
title: Magento Open Source 2.1.14 Release Notes
version: 2.1
github_link: release-notes/ReleaseNotes2.1.14CE.md
---

*	TOC
{:toc}


*Patch code and release notes were published on  2018.*


We are pleased to present Magento Open Source  2.1.14. This release includes both bug fixes and enhancements. Check out the many community-contributed fixes!

## Fixed issues


*Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 12959*. [GitHub-10812](https://github.com/magento/magento2/issues/10812)




### Setup

<!--- ENGCOM-902 -->*

*Fix submitted by [simpleadm](https://github.com/simpleadm) in pull request 14096*. [GitHub-4173](https://github.com/magento/magento2/issues/4173)


<!--- ENGCOM-707 -->* 


*Fix submitted by [simpleadm](https://github.com/simpleadm) in pull request 13949*. [GitHub-4173](https://github.com/magento/magento2/issues/4173)


title: Fix misnamed namespace


<!--- ENGCOM-846 -->* Add quoting for base path in DI compile command

*Fix submitted by [Ethan3600](https://github.com/Ethan3600) in pull request 13806*. [GitHub-4173](https://github.com/magento/magento2/issues/4173)



<!--- ENGCOM-949 -->* title: [Backport 2.1-develop] Update Store getConfig() to respect valid false return value
url: magento/magento2#13654
contributor name: @JeroenVanLeusden
contributor link: https://github.com/JeroenVanLeusden





<!--- ENGCOM-1200 -->*
Task is created on request: larsroettig

Pull Request:

title: [Backport 2.1] Return status in console commands
url: magento/magento2#14480
contributor name: @simpleadm
contributor link: https://github.com/simpleadm



<!--- MAGETWO-87870 -->*  Show redirect_to_base config in store scope

 - title: [Backport 2.1-develop] Show redirect_to_base config in store scope
 - url: [magento/magento2#13658|https://github.com/magento/magento2/pull/13658]
 - contributor name: @JeroenVanLeusden
 - contributor link: https://github.com/JeroenVanLeusden




### Catalog

<!--- ENGCOM-1223 -->* Check if store id is not null instead of empty

Pull Request:

title: [Backport] Check if store id is not null instead of empty
url: magento/magento2#14505
contributor name: @quisse
contributor link: https://github.com/quisse



<!--- ENGCOM-1172 -->* Fix HTML tags in meta description

Pull Request:

title: Fix HTML tags in meta description
url: magento/magento2#14436
contributor name: @vseager
contributor link: https://github.com/vseager



<!--- ENGCOM-820 -->* fix catalog_rule_promo_catalog_edit.xml layout
Pull Request:

title: fix catalog_rule_promo_catalog_edit.xml layout
url: magento/magento2#14022
contributor name: @Karlasa
contributor link: https://github.com/Karlasa




<!--- MAGETWO-87573 -->* - title: Backport of PR-8246 for Magento 2.1: Fixes #7723 - saving multi selec…
 - url: [magento/magento2#13546|https://github.com/magento/magento2/pull/13546]
 - contributor name: @hostep
 - contributor link: https://github.com/hostep

https://github.com/magento/magento2/issues/7723

Catalog rule contains-condition not saving multiple selection in 2.1.2


 

### Cart and checkout

<!--- ENGCOM-780 -->* Pull Request:

title: Backport of PR-13750 for Magento 2.1: Less clean up
url: magento/magento2#13987
contributor name: @Karlasa
contributor link: https://github.com/Karlasa



<!--- ENGCOM-776 -->* 

title: Backport of PR-13777. Mobile 'Payments methods' step looks bad on mobile
url: magento/magento2#13980
contributor name: @Frodigo
contributor link: https://github.com/Frodigo

https://github.com/magento/magento2/issues/13315

Mobile "Payment Methods" step looks bad on mobile



<!--- ENGCOM-920 -->* title: [Backport 2.1] MAGETWO-59258: Override module-directory/etc/zip_codes.xml only the last code of a country gets include
url: magento/magento2#14117
contributor name: @simpleadm
contributor link: https://github.com/simpleadm

https://github.com/magento/magento2/issues/6694
Override zip_codes.xml




### Configurable products

<!--- ENGCOM-1204 -->* Configurable product price options by store #14479

Pull Request:

title: [Backport 2.1] Configurable product price options by store
url: magento/magento2#14479
contributor name: @simpleadm
contributor link: https://github.com/simpleadm

Sergey P


Some modules (e.g. Abandoned Cart, Algolia Search etc.) use store emulation functionality (\Magento\Store\Model\App\Emulation::startEnvironmentEmulation) to get product info (including configurable product price) for each store. Unfortunately LowestPriceOptionsProvider class save linked products collection at the $linkedProductMap property based on requested product id only. That is why configurable product price will be the same for other stores after first emulation.








### Customers


<!--- ENGCOM-937 -->* Fix possible bug when saving address with empty street line #14115
Pull Request:

title: [Backport 2.1] MAGETWO-71697: Fix possible bug when saving address with empty street line
url: magento/magento2#14115
contributor name: @simpleadm
contributor link: https://github.com/simpleadm




<!--- MAGETWO-89253 -->* Test, not bug






<!--- ENGCOM-1147 -->* Customer_account.xml file abused
Pull Request:

title: #7816: Customer_account.xml file abused (2.1)
url: magento/magento2#14323
contributor name: @mikewhitby
contributor link: https://github.com/mikewhitby

Customer_account.xml file abused

he initial problem was that the paypal module was setting the customer dashbaord page to "Billing Agreements", a previous commit of 36cac17 fixed that which I have cherry picked, however there is a related issue - the customer account dashboard title was being set in the controller which was not good, so I've fixed that too.



### Email
<!--- ENGCOM-1212 -->* 

fix for button color in email template

Pull Request:

title: [backport] fix for button color in email template
url: magento/magento2#14497
contributor name: @Karlasa
contributor link: https://github.com/Karlasa

On hover button should use @button-primary__hover__color not @button-primary__color



### Framework

<!--- ENGCOM-1121 -->* Add json and xml support to the post method in socket client #14348

title: [Backport 2.1] Add json and xml support to the post method in socket client
url: magento/magento2#14348
contributor name: @simpleadm
contributor link: https://github.com/simpleadm



<!--- ENGCOM-1074 -->* Fix for broken navigation menu on IE11 
Pull Request:

title: Backport: Fix for broken navigation menu on IE11 #14230
url: magento/magento2#14332
contributor name: @sergiy-v
contributor link: https://github.com/sergiy-v


The navigation without the "display: inline-block" sometimes gets broken on Internet Explorer 11. This happens after some refreshes of the page, both on Luma and Blank theme. The problem is that the A element has no display: inline-block or block but also has padding. IE11 understands that differently sometimes without giving any of the inline block properties to the element like width or padding.




<!--- ENGCOM-1062 -->* Can't cancel removal of a block or container in layout by setting remove attribute value to false

title: [Backport] Can't cancel removal of a block or container in layout by setting remove attribute value to false
url: magento/magento2#14198
contributor name: @quisse
contributor link: https://github.com/quisse

https://github.com/magento/magento2/issues/1931

I inherit the blank theme and i wanted to have the top.links visible in the checkout so i created this file:



<!--- ENGCOM-947 -->* title: [Backport 2.1] 8373: Fix CURL Json POST
url: magento/magento2#14151
contributor name: @simpleadm
contributor link: https://github.com/simpleadm

https://github.com/magento/magento2/issues/3489



<!--- ENGCOM-944 -->* Use specified hashing algo in \Magento\Framework\Encryption\Encryptor::getHash

The ability to store passwords using different hashing algorithms is limited

https://github.com/magento/magento2/issues/5463
The reason for this is that although the version of the hashing algorithm is stored against the hashed password, this is not used for creating the hash for comparison, which always defaults to sha256.



#### Configuration framework

<!--- ENGCOM-1011 -->* title: Backport of PR-8772 for Magento 2.1: magento/magento2#3882
url: magento/magento2#14219
contributor name: @hostep
contributor link: https://github.com/hostep

An XML comment node as parameter in widget.xml fails with fatal error 
https://github.com/magento/magento2/issues/3882


#### Session framework

<!--- MAGETWO- -->* 







#### Web API framework

<!--- MAGETWO- -->*  



#### Zend
<!--- MAGETWO- -->* 



### General


<!--- ENGCOM-1251 -->* Specify the table when adding field to filter

title: Specify the table when adding field to filter
url: magento/magento2#14596
contributor name: @PierreLeMaguer
contributor link: https://github.com/PierreLeMaguer

Specify the table when adding field to filter for the collection Eav/Model/ResourceModel/Entity/Attribute/Option/Collection.php
https://github.com/magento/magento2/issues/14572
About the collection vendor/magento/module-eav/Model/ResourceModel/Entity/Attribute/Option/Collection.php, the method setAttribbuteFilter call the method addFieldToFilter without specify the table.
So, when we join some tables with a column 'attribute_id' (example: 'catalog_product_entity_int'), we have the error 'ambiguous column name'.



<!--- ENGCOM-926 -->* Add a CodeTriage badge to magento/magento2

Pull Request:

title: [2.1] Add a CodeTriage badge to magento/magento2
url: magento-engcom/magento2ce#1454
contributor name: @ishakhsuvarov
contributor link: https://github.com/ishakhsuvarov



<!--- ENGCOM-903 -->*  Problem on mobile when catalog gallery allowfullscreen is false

title: [Backport 2.1] MAGETWO-64250 Problem on mobile when catalog gallery allowfullscreen is false
url: magento/magento2#14098
contributor name: @simpleadm
contributor link: https://github.com/simpleadm

 Problem on mobile when catalog gallery allowfullscreen is false



<!--- ENGCOM-1138 -->* Removed cache backend option which explicitly set file permissions
title: [BACKPORT 2.1] Removed cache backend option which explicitly set file permissions
url: magento/magento2#14417
contributor name: @xtremeperf
contributor link: https://github.com/xtremeperf

https://github.com/magento/magento2/issues/11930
setup:di:compile's generated cache files inaccessible by the web-server user 

https://github.com/magento/magento2/issues/10700
Magento 2 Admin panel show loading on each page



<!--- ENGCOM-1145 -->* AdminGws depends on Authorisation tables

Pull Request:

title: AdminGws depends on Authorisation tables
url: magento-partners/magento2ee#58
contributor name: @ajpevers
contributor link: https://github.com/ajpevers


This module should be installed after Magento_Authorization because of $installer->getTable('authorization_role') in `\Magento\AdminGws\Setup\InstallSchema::install





<!--- MAGETWO-88277 -->* Add RewriteBase directive template in .htaccess file into pub/static folder


 this PR adds RewriteBase directive into .htaccess file into pub/static folder, in case the need is to install Magento code under a directory inside the web root. Setting this directive into .htaccess file in Magento root and without setting it into .htaccess under pub/static folder cause a file missing (js and css) by Apache Web Server



Pull Request:
 - title: [Backport 2.1] Add RewriteBase directive template in .htaccess file into pub/static folder
 - url: [magento/magento2#13812|https://github.com/magento/magento2/pull/13812]
 - contributor name: @ccasciotti
 - contributor link: https://github.com/ccasciotti




<!--- MAGETWO-87606 -->* Fix robots.txt content typ… #13550
Pull Request:
 - title: Backport of MAGETWO-84006 for Magento 2.1: Fix robots.txt content typ…
 - url: [magento/magento2#13550|https://github.com/magento/magento2/pull/13550]
 - contributor name: @hostep
 - contributor link: https://github.com/hostep

 https://github.com/magento/magento2/issues/13214

 CHECK IN 2.2.4




<!--- MAGETWO-87571 -->* 

Pull Request:
 - title: Backport of PR-5028 for Magento 2.1: Load jquery using requirejs to p…
 - url: [magento/magento2#13545|https://github.com/magento/magento2/pull/13545]
 - contributor name: @hostep
 - contributor link: https://github.com/hostep

 Load jquery using requirejs to print page

 SEE 2.2.0 55217



### Index

<!--- MAGETWO- -->* 


### Newsletter

<!--- MAGETWO- -->* 


### Order management

<!--- MAGETWO- -->* 

<!--- MAGETWO- -->* 
<!--- MAGETWO- -->* 



### Payment methods

<!--- MAGETWO- -->* 

<!--- MAGETWO- -->* 

<!--- MAGETWO- -->* 

<!--- MAGETWO- -->* 



### Reports

<!--- MAGETWO- -->*  

<!--- MAGETWO- -->* 
 
<!--- MAGETWO- -->*






### Scope
<!--- MAGETWO- -->* 



### Search
<!--- MAGETWO- -->* 

<!--- MAGETWO- -->* 


### Shipping

<!--- MAGETWO- -->* 

### Swagger
<!--- MAGETWO-87607 -->*  Change the store code in Swagger based on a param 

Pull Request:
 - title: [Backport 2.1-develop] Change the store code in Swagger based on a param
 - url: [magento/magento2#13486|https://github.com/magento/magento2/pull/13486]
 - contributor name: @JeroenVanLeusden
 - contributor link: https://github.com/JeroenVanLeusden

 https://github.com/magento/magento2/issues/13474

 The problem is, this doesn't work on our stores, Im not sure if magento's routing is expecting our default store's code to be default, or if it's a shortcut to the default store and not functioning for some other reason

For example, our store code for our default view is mxs, so our URL should be

http://mikesxs.test/rest/mxs/schema?services=all

but swagger isn't picking up on the default store code.

https://github.com/magento/magento2/issues/13474




### Swatches

<!--- MAGETWO-86331 -->* Pull Request:
 - title: Issues #10559 - Extend swatch using mixins (M2.1)
 - url: [magento/magento2#12928|https://github.com/magento/magento2/pull/12928]
 - contributor name: @srenon
 - contributor link: https://github.com/srenon


 https://github.com/magento/magento2/issues/10559





### Translations

<!--- ENGCOM-1231 -->* fix translation issue with rating stars
title: [backport] fix translation issue with rating stars
url: magento/magento2#14524
contributor name: @Karlasa
contributor link: https://github.com/Karlasa

Added possibility to translate "stars" phrase in product reviews
Extending swatch functionality using javascript mixins does not work in Safari and MS Edge




<!--- ENGCOM-1068 -->* Fix JS translation search
title: Backport of PR-10445 for Magento 2.1: Fix JS translation search
url: magento/magento2#14349
contributor name: @hostep
contributor link: https://github.com/hostep


https://github.com/magento/magento2/issues/7403

JS Translation Regex leads to unexpected results and untranslatable strings

Steps to reproduce
Look up the page where the translated string should appear (in this case: the register account page)

Expected result
The password error message is translated

Actual result
The password error message is not translated

The root cause of this, is the regex that selects JS strings for translation, as found in: /app/code/Magento/Translation/etc/di.xml. It's is very buggy and not fail safe. It skips every string that is not strictly formatted according to this regex. In this case the '+' sign causes the string to be skipped by the regex, but there are many more cases where this regex is skipped in JS files (e.g. iteration over parts of strings to translate them).



<!--- ENGCOM-952 -->* Added mage/translate component to customers's ajax login 

Pull Request:

title: [Backport 2.1] Added mage/translate component to customers's ajax login
url: magento/magento2#14168
contributor name: @ccasciotti
contributor link: https://github.com/ccasciotti

Added mage/translate component to customers's ajax login





### UI

<!--- MAGETWO- -->* 

<!--- MAGETWO- -->* 

<!--- MAGETWO- -->* 

### Wish list
<!--- MAGETWO-->* 



<!--- NOT NEEDED  MAGETWO-90963 MAGETWO-90925 MAGETWO-90841  MAGETWO-90394 MAGETWO-90072 MAGETWO-90069 MAGETWO-90068 MAGETWO-90063 MAGETWO-89614 MAGETWO-89611 MAGETWO-88653 MAGETWO-88648 MAGETWO-88647 MAGETWO-88644 MAGETWO-88606 MAGETWO-88602 MAGETWO-86797 MAGETWO-85137 MAGETWO-85983 ENGCOM-644-->

<!--WON'T FIX MAGETWO-58038 MAGETWO-90075 -->

<!--CANNOT REPRODUCE MAGETWO-81479 MAGETWO-87720 -->

<!--DUPLICATE MAGETWO-88069 -->


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
    <td><a href="https://github.com/magento/magento2/pull/13949" target="_blank">13949</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/Ethan3600" target="_blank">Ethan Yehuda</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/magento/magento2/pull/13545" target="_blank">13545</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13546" target="_blank">13546</a></td>
    <td>7723</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13550" target="_blank">13550</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13896" target="_blank">13896</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/Ctucker9233" target="_blank">Ctucker9233</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13812" target="_blank">13812</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/ccasciotti" target="_blank">Cristiano Casciotti</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13658" target="_blank">13658</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/Jeroen" target="_blank">JeroenVanLeusden</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13980" target="_blank">13980</a></td>
    <td>13315</td>
     <td><a href="https://github.com/Frodigo" target="_blank">Marcin Kwiatkowski</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13987" target="_blank">13987</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/Karlasa" target="_blank">Karla Saaremäe</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/14022" target="_blank">14022</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/Karlasa" target="_blank">Karla Saaremäe</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/magento/magento2/pull/13806" target="_blank">13806</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13486" target="_blank">13486</a></td>
    <td>13474</td>
     <td><a href="https://github.com/JeroenVanLeusden" target="_blank">Jeroen</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14096" target="_blank">14096</a></td>
    <td>4173</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14098" target="_blank">14098</a></td>
    <td>5808</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14115" target="_blank">14115</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14117" target="_blank">14117</a></td>
    <td>6694</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/12928" target="_blank">12928</a></td>
    <td>10559</td>
     <td><a href="https://github.com/srenon" target="_blank">Renon Stewart</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14151" target="_blank">14151</a></td>
    <td>3489</td>
     <td><a href="https://github.com/simpleadm" target="_blank">Sergey P</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13886" target="_blank">13886</a></td>
    <td>5463</td>
     <td><a href="https://github.com/k4emic" target="_blank">Mads Nielsen</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14168" target="_blank">14168</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/ccasciotti" target="_blank">Cristiano Casciotti</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/13654" target="_blank">13654</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/JeroenVanLeusden" target="_blank">Jeroen</a></td>
  </tr>
<tr>
<td><a href="https://github.com/magento/magento2/pull/14219" target="_blank">14219</a></td>
    <td>3882</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14198" target="_blank">14198</a></td>
    <td>1931</td>
     <td><a href="https://github.com/quisse" target="_blank">Tommy Quissens</a></td>
  </tr>
<tr>
  <td><a href="https://github.com/magento/magento2/pull/14349" target="_blank">14349</a></td>
    <td>7403</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>
 </table>




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


