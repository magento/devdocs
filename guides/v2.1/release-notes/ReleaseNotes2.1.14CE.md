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


We are pleased to present Magento Open Source  2.1.14. This release includes  multiple enhancements to product security plus  bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update) for a comprehensive discussion of these issues.

## Highlights
Magento 2.1.14 contains 38 security fixes and enhancements.  Look for the following highlights in this release:

* **Enhancements that help close authenticated Admin user remote code execution, unauthorized data leaks, and cross-site request forgery (CSRF) vulnerabilities**. See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update) for more information.

## Fixed issues

### Setup

<!--- ENGCOM-902 -->* The `magento cron:run` command now runs scheduled jobs as expected. Previously, cron generated only one job, no matter how many jobs were scheduled. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14096*. [GitHub-4173](https://github.com/magento/magento2/issues/4173)

<!--- ENGCOM-707 -->* The misspelling in the name of the namespace in `Magento\Cron\Observer\ProcessCronQueueObserver.php` has been fixed. Previously, this misspelling resulted in a  fatal error when this class was instantiated and run. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 13949*. [GitHub-4173](https://github.com/magento/magento2/issues/4173)

<!--- ENGCOM-846 -->* The `magento setup:di:compile` command now supports quoting for base paths. Previously, this command tried to exclude paths from the compilation process via regex in the `excludedPathsList` property. However, that property does not use quoting but instead contains the full path to Magento, which resulted in the failure to exclude some paths (for example,`/var/www/magento (1)/`). *Fix submitted by [Ethan3600](https://github.com/Ethan3600) in pull request 13806*. [GitHub-4173](https://github.com/magento/magento2/issues/4173)

<!--- ENGCOM-949 -->* `Store getConfig()` now respects  valid false return values. Previously, this method fetched the default configuration values when a configuration value was set to **no** because  **no** setting IS represented by the system as a string value of 0 (and 0 equals false). *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 13654*.

<!--- ENGCOM-1200 -->* All console commands now return status. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14480*.

<!--- MAGETWO-87870 -->*  We've added the `web/unsecure/base_url` config to both website and store scopes. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 13658*.



### Catalog

<!--- ENGCOM-1223 -->* Magento now checks if `storeId` is not null rather than checking if it's empty. Previously, when `storeId 0 is_empty` returned `true`, Magento could not create a CMS page for all store views.

*Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request 14505*.





<!--- ENGCOM-1172 -->* Magento no longer displays HTML tags in product meta descriptions. *Fix submitted by [Victor Seager](https://github.com/vseager) in pull request 14436*.

<!--- ENGCOM-820 -->* The layout of `catalog_rule_promo_catalog_edit.xml` has been changed to adjust sidebar settings. Specifically, he tlayout attribute value has been changed from  `admin-2columns-left` to `admin-1column`. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request 14022*.

<!--- MAGETWO-87573 -->* The Catalog Price rule's `contains` condition now works as expected when the `contains` condition allows multiple options. 

*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13546*. [GitHub-7723](https://github.com/magento/magento2/issues/7723)





 

### Cart and checkout

<!--- ENGCOM-780 -->* 

Clean up some less code.

Description
Moved some less under .lib-dropdown() variables and added font-weight variable into navigtion.less

title: Backport of PR-13750 for Magento 2.1: Less clean up



*Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request 13987*.

SEE previous releases




<!--- ENGCOM-776 -->* We’ve improved the display of the Payment Methods section of the checkout page on mobile devices. Previously, the layout of page elements was not correctly spaced. *Fix submitted by [Marcin Kwiatkowski](https://github.com/Frodigo) in pull request 13980*. [GitHub-13315](https://github.com/magento/magento2/issues/13315)







<!--- ENGCOM-920 -->* title: [Backport 2.1] MAGETWO-59258: Override module-directory/etc/zip_codes.xml only the last code of a country gets include


When trying to override module-directory/etc/zip_codes.xml from a local module, only the last code of a country gets included.


Expected result
All patterns should be included on the check-out page.
Actual result
Only the last pattern from Module's zip_codes.xml is shown

Override zip_codes.xml


*Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14117*. [GitHub-6694](https://github.com/magento/magento2/issues/6694)




### Configurable products

<!--- ENGCOM-1204 -->* Configurable product price options by store #14479

Pull Request:

title: [Backport 2.1] Configurable product price options by store



Some modules (e.g. Abandoned Cart, Algolia Search etc.) use store emulation functionality (\Magento\Store\Model\App\Emulation::startEnvironmentEmulation) to get product info (including configurable product price) for each store. Unfortunately LowestPriceOptionsProvider class save linked products collection at the $linkedProductMap property based on requested product id only. That is why configurable product price will be the same for other stores after first emulation.


*Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14479*. 






### Customers


<!--- ENGCOM-937 -->* You can now successfully save an address with a blank address field. Previously, when you saved an address that contained no text in an optional address field, Magento threw this error, `'Exception' with message 'Notice: Array to string conversion on line 2903 in lib/internal/Magento/Framework/DB/Adapter/Pdo/Mysql.php will be raised`. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14115*. 




<!--- ENGCOM-1147 -->* Customer_account.xml file abused



he initial problem was that the paypal module was setting the customer dashbaord page to "Billing Agreements", a previous commit of 36cac17 fixed that which I have cherry picked, however there is a related issue - the customer account dashboard title was being set in the controller which was not good, so I've fixed that too.

*Fix submitted by [Mike Whitby](https://github.com/mikewhitby) in pull request 14323*. 

From the Magento Paypal module, this is added in its customer_account.xml file:

<head>
    <title>Billing Agreements</title>
</head>
This is very unwise since the benefit of having the customer_account is that all the pages on there use it to update for the convenience of getting all of the dashboard links and updates.

After adding another page to the route, we now have to awkwardly remove what isn't even page.main.title.






### Email
<!--- ENGCOM-1212 -->* The color of the button on the email template when a user hovers over it has been changed from `@button-primary__color` to `@button-primary__hover__color`. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request 14497*.




### Framework

<!--- ENGCOM-1121 -->* We've added JSON and XML support to the post method in `\Magento\Framework\HTTP\Client\Socket` class. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14348*. 

<!--- ENGCOM-1074 -->* Navigation menus without the `display: inline-block` setting now work as expected on deployments running on Internet Explorer 11.x. Previously, after a page refresh, navigation menus on pages running Luma or Blank themes would not work.*Fix submitted by [Sergiy](https://github.com/sergiy-v) in pull request 14332*. 


<!--- ENGCOM-1062 -->* You can now successfully prevent the removal of a block or container by setting the `remove` attribute to **false**. Previously, setting this attribute to **false** did not cancel the removal of a block or container. *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request 14198*. [GitHub-1931](https://github.com/magento/magento2/issues/1931)

<!--- ENGCOM-947 -->* `String` type was added to `\Magento\Framework\HTTP\Client\Curl`  to support sending JSON or XML requests. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14151*. [GitHub-3489](https://github.com/magento/magento2/issues/3489)




<!--- ENGCOM-944 -->* 



Use specified hashing algo in \Magento\Framework\Encryption\Encryptor::getHash

The ability to store passwords using different hashing algorithms is limited

The reason for this is that although the version of the hashing algorithm is stored against the hashed password, this is not used for creating the hash for comparison, which always defaults to sha256.

[GitHub-5463](https://github.com/magento/magento2/issues/5463)

Steps to reproduce
Create passwords for users hashed using different hashing algorithms (e.g. md5 and sha256)
Attempt to login against these
Expected result
Both would log in
Actual result
1.Those created with sha256 work
2. Those created with anything else (e.g. md5) fail incorrectly




#### Configuration framework

<!--- ENGCOM-1011 -->* title: Backport of PR-8772 for Magento 2.1: magento/magento2#3882


Steps to reproduce
Add a new widget declaration in some widget.xml, but add a comment as a parameter:
<parameters>
    <parameter name="title_text" xsi:type="text" visible="true" required="true" sort_order="20">
        <label translate="true">Title text</label>
    </parameter>
    <!-- it's a comment; what can go wrong? -->
</parameters>
Expected result
When creating a new widget through admin, a single param should appear.
Actual result
Nothing appears: the ajax grabbing the widgets responds with 500 (stack trace below).


An XML comment node as parameter in widget.xml fails with fatal error 

*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 14219*. [GitHub-3882](https://github.com/magento/magento2/issues/3882)





### General


<!--- ENGCOM-1251 -->* Specify the table when adding field to filter

title: Specify the table when adding field to filter


Specify the table when adding field to filter for the collection Eav/Model/ResourceModel/Entity/Attribute/Option/Collection.php
About the collection vendor/magento/module-eav/Model/ResourceModel/Entity/Attribute/Option/Collection.php, the method setAttribbuteFilter call the method addFieldToFilter without specify the table.
So, when we join some tables with a column 'attribute_id' (example: 'catalog_product_entity_int'), we have the error 'ambiguous column name'.


*Fix submitted by [Pierre LeMaguer](https://github.com/PierreLeMaguer) in pull request 14596*. [GitHub-14572](https://github.com/magento/magento2/issues/14572)




<!--- ENGCOM-926 -->* We've added a CodeTriage badge to the `magento/magento2` GitHub repository. See [CodeTriage](https://www.codetriage.com/magento/magento2 ) for more information. *Fix submitted by [Eugene Shakhsuvarov](https://github.com/ishakhsuvarov) in pull request 1454*. 

<!--- ENGCOM-903 -->*  The catalog gallery `allowfullscreen` setting In the theme's `view.xml` file now works as expected. Previously, when you set the gallery's `allowfullscreen` variable to **false**, Magento displayed a white page (instead of the product page) when a customer tapped on a product image on a mobile device. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request 14098*. [GitHub-5808](https://github.com/magento/magento2/issues/5808)




<!--- ENGCOM-1138 -->* We've removed the ability of the Magento Framework to explicitly set file and directory permissions from the default cache backend. Removing this functionality allows permissions to be inherited properly from the file system, and respects SETGID bit and Magento umask settings. 

*Fix submitted by [Doug](https://github.com/xtremeperf) in pull request 14417*. [GitHub-11930](https://github.com/magento/magento2/issues/11930), [GitHub-10700](https://github.com/magento/magento2/issues/10700)


<!--- ENGCOM-1145 -->* Magento now installs the AdminGws module after it installs `Magento_Authorization`. 
*Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request 58*. 

<!--- MAGETWO-88277 -->* We added a RewriteBase directive template to the `.htaccess` file in the  `pub/static` folder. Previously, if you set this directive in the `.htaccess` file in your Magento root directory, the Apache web server would miss files. 

*Fix submitted by [Cristiano Casciotti](https://github.com/ccasciotti) in pull request 13812*. 


<!--- MAGETWO-87606 -->* The `robots.txt` response header content type is now plain text.

*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13550*. [GitHub-13214](https://github.com/magento/magento2/issues/13214)





<!--- MAGETWO-87571 -->* We’ve corrected a problem with _requirejs asset retrieval via static.php in static content versioning.

Pull Request:
 - title: Backport of PR-5028 for Magento 2.1: Load jquery using requirejs to p…

Magento now uses requirejs to loads jquery when printing pages. 


 Load jquery using requirejs to print page

 SEE 2.2.0 55217

*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 13545*. 





### Swagger
<!--- MAGETWO-87607 -->*  You can now use a parameter to change the store code in Swagger, which makes it paossible to test API calls in Swagger for different storeviews.

*Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 13486*. [GitHub-13474](https://github.com/magento/magento2/issues/13474)



### Swatches

<!--- MAGETWO-86331 -->* You can now use JavaScript mixins to extend swatch functionality in all supported browsers.

*Fix submitted by [Renon Stewart](https://github.com/srenon) in pull request 12928*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)





### Translations

<!--- ENGCOM-1231 -->* You can now translate the text associated with rating stars in product reviews. 

*Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request 14524*. 



<!--- ENGCOM-1068 -->* We've fixed issues with the JavaScript translation regex file that previously led to untranslatable strings or parts of strings. 
*Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 14349*. [GitHub-7403](https://github.com/magento/magento2/issues/7403)


<!--- ENGCOM-952 -->* We've added a `mage/translate` component to the customer AJAX login action component, which enables the translation of the  message that Magento displays if an AJAX call fails (`Could not authenticate. Please try again later`). Previously, Magento printed that message in English only, regardless of the storefront's language setting. 
*Fix submitted by [Cristiano Casciotti](https://github.com/ccasciotti) in pull request 14168*. 




<!--- NOT NEEDED  MAGETWO-90963 MAGETWO-89253 MAGETWO-90925 MAGETWO-90841  MAGETWO-90394 MAGETWO-90072 MAGETWO-90069 MAGETWO-90068 MAGETWO-90063 MAGETWO-89614 MAGETWO-89611 MAGETWO-88653 MAGETWO-88648 MAGETWO-88647 MAGETWO-88644 MAGETWO-88606 MAGETWO-88602 MAGETWO-86797 MAGETWO-85137 MAGETWO-85983 ENGCOM-644-->

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


