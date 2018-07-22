---
layout: default
group: release-notes
title: Magento Open Source 2.1.15 Release Notes
version: 2.1
github_link: release-notes/ReleaseNotes2.1.15CE.md
---

*	TOC
{:toc}


*Patch code and release notes were published on .*


We are pleased to present Magento Open Source 2.1.15. This release includes  multiple enhancements to product security plus  bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.1.15 ) have been ported to 2.2.6 , 1.14.3.10, and 1.9.3.10. 

## Highlights
Magento 2.1.14 contains 38 security fixes and enhancements.  The enhancements help close stored XSS, SQL injection, and cross-site request forgery (CSRF) vulnerabilities. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for more information.

## Fixed issues
In addition to security enhancements, this release contains the following functional fixes. 



### Setup




### Catalog

<!--- ENGCOM-1685 -->* The `Magento\Catalog\Model\ResourceModel\Category\Collection::joinUrlRewrite` method now uses the `storeId` value  set on the actual collection of the store rather than the `storeId` retrieved from the store manager. *Fix submitted by [Alessandro Pagnin](https://github.com/alepane21) in pull request [13756](https://github.com/magento/magento2/pull/13756)*GitHub-13704](https://github.com/magento/magento2/issues/13704)

<!--- ENGCOM-1842 -->* Magento now uses `data-container="product-list"` instead of  `data-container="product-grid"` when displaying a product list. *Fix submitted by [Viral Vasara](https://github.com/viral-wagento) in pull request [15816](https://github.com/magento/magento2/pull/15816)*
[GitHub-15319](https://github.com/magento/magento2/issues/15319)

<!--- ENGCOM-1907 -->* Magento has improved the accuracy of prices requiring more than two digits that are listed on the Product page. Previously, when a product price was represented by more than two digits (for example, $5.43), JavaScript settings always used the rounding logic for two digits only. (For example, the amount 9.4880 was displayed as 9.49.) *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15926](https://github.com/magento/magento2/pull/15926)*GitHub-14249](https://github.com/magento/magento2/issues/14249)

 

### Cart and checkout

<!--- ENGCOM-1269 -->* The minicart now currently displays product names that contain special characters. *Fix submitted by [ampulos](https://github.com/ampulos) in pull request [14665](https://github.com/magento/magento2/pull/14665)*. [GitHub-13652](https://github.com/magento/magento2/issues/13652)


### Cart and checkout



### Configurable products


### Customers


### Directory

<!--- ENGCOM-1948 -->* Magento now supports Canadian Postal codes for Canada can now without space as expected.  *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16031](https://github.com/magento/magento2/pull/16031)*. [GitHub-13899](https://github.com/magento/magento2/issues/13899)




### Email




### Framework

<!--- ENGCOM-1262 -->* Magento now leaves at least one record after cleaning up the changelog tables after restarting MySQL. Previously, the product `version_id` lost the most recent the `auro_increment` value after restarting MySQL. *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [14471](https://github.com/magento/magento2/pull/14471)*. [GitHub-14465](https://github.com/magento/magento2/issues/14465)

<!--- ENGCOM-1410 -->* Magento now displays custom price symbols as expected. Previously, when a merchant created variations for a configurable product, product prices were not readable if they contained a custom price symbol. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [14471](https://github.com/magento/magento2/pull/14471)*. 
[GitHub-14902](https://github.com/magento/magento2/issues/14902)

<!--- ENGCOM-1796 -->* Magento now correctly aligns submenus. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15714](https://github.com/magento/magento2/pull/15714)*. [GitHub-7897](https://github.com/magento/magento2/issues/7897)

<!--- ENGCOM-1908 -->* Magento now supports Malaysian locales. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15927](https://github.com/magento/magento2/pull/15927)*. [GitHub-14089](https://github.com/magento/magento2/issues/14089)



#### Configuration framework


#### Customer 

<!--- ENGCOM-1337 -->*
Preserve user group id when using /V1/customers/:customerId (PUT) 

When you call /V1/customers/:customerId (PUT) and the customer has a group id already and you don't provide groupId in the request the customer group id is set to 1.
This fix preserves the group id.



*Fix submitted by [André Ferraz](https://github.com/ferrazzuk) in pull request [14757](https://github.com/magento/magento2/pull/14757)*. [GitHub-14663](https://github.com/magento/magento2/issues/14663)





### General

<!--- ENGCOM-1272 -->* Magento now checks that a product is assigned to a specific website in a multistore environment before a customer can write a product review. Previously, a customer could write a review for a product that was not assigned to the store they were logged in to..  *Fix submitted by [afirlejczyk](https://github.com/afirlejczyk) in pull request [14673](https://github.com/magento/magento2/pull/14673)*.

<!--- ENGCOM-2233 -->* The `transport` event parameter has been changed from type `Array()` to type `DataObject`. This is a reversion of a chnage that was made in an earlier release. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16601](https://github.com/magento/magento2/pull/16601)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

<!--- ENGCOM-1639 -->* Merchants can now  place an order from grouped product where the quantity of subproducts is less than one unit. Previously, 
you could not place an order from grouped product where subproducts quantity was less than one. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15407](https://github.com/magento/magento2/pull/15407)*. [GitHub-14692](https://github.com/magento/magento2/issues/14692)

<!--- ENGCOM-1699 -->* Magento now sets the `trigger_recollect` attribute  back to 0 after collecting total amounts for the quote. Previously, Magento timed out if a customer tried to reload a quote. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15522](https://github.com/magento/magento2/pull/15522)*. [GitHub-9580](https://github.com/magento/magento2/issues/9580)

<!--- ENGCOM-1693 -->* Magento no longer recalculates prices unnecessarily when refreshing the Catalog page, which has improved product performance. 
*Fix submitted by [Jeroen Van Leusden](https://github.com/JeroenVanLeusden) in pull request [15445](https://github.com/magento/magento2/pull/15445)*.
[GitHub-14941](https://github.com/magento/magento2/issues/14941)


<!--- ENGCOM-1777 -->* The annotation for the `formatDateTime` function in the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file has been corrected. The `locale` and `timezone` have been changed to `param string|null $locale` and `@param string|null $timezone`.  *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15668](https://github.com/magento/magento2/pull/15668)*.[GitHub-15668](https://github.com/magento/magento2/issues/15668)


<!--- ENGCOM-1778 -->* The annotation for the `formatDateTime` function in the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file has been corrected. The `locale` and `timezone` have been changed to `param string|null $locale` and `@param string|null $timezone`. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15669](https://github.com/magento/magento2/pull/15669)*. [GitHub-15601](https://github.com/magento/magento2/issues/15601)

<!--- ENGCOM-1804 -->* We've refactored the JavaScript code in the `spli.phtml` template file for the button widget. *Fix submitted by [Vijay Golani](https://github.com/vijay-wagento) in pull request [15736](https://github.com/magento/magento2/pull/15736)*.
[GitHub-15354](https://github.com/magento/magento2/issues/15354)

<!--- ENGCOM-1841 -->* The misspelling of *setCategoryIds* as *setCateroryIds* has been corrected to *setCategoryIds* throughout the source code. *Fix submitted by [Viral Vasara](https://github.com/viral-wagento) in pull request [15814](https://github.com/magento/magento2/pull/15814)*.

<!--- ENGCOM-1859 -->* Customers can now successfully download and export PDFs after logging in. Previously, customers were redirected to the Admin when trying to download or export data to a PDF right after logging in. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request [15767](https://github.com/magento/magento2/pull/15767)*. [GitHub-15510](https://github.com/magento/magento2/issues/15510)

<!--- ENGCOM-1849 -->* `select` elements now display with the styles you set in `_theme.less` as expected. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15796](https://github.com/magento/magento2/pull/15796)*. [GitHub-15608](https://github.com/magento/magento2/issues/15608)



<!--- ENGCOM-1930, ENGCOM-2096 -->* Client-side email validation now works in Internet Explorer 11.x the same way as it does in Chrome. Previously, a leading or trailing space on the following pages resulted in  client-side validation failure in Magento stores deployed on Internet Explorer 11.x. *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull requests [15874](https://github.com/magento/magento2/pull/15874) and[16297](https://github.com/magento/magento2/pull/16297)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

* Customer Account Login page email field
* Customer Account create page
* Customer Authentication popup when the **Allow Guest Checkout** is  set to **No**


<!--- ENGCOM-1881 -->* `.limiter` now has the same parent selectors (similar to `.pages`) to prevent clashes between styles and layouts. Previously, 
`.limiter` was too generic and was used as single selector for floating the element. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15880](https://github.com/magento/magento2/pull/15880)*. [GitHub-15323](https://github.com/magento/magento2/issues/15323)

<!--- ENGCOM-1903 -->* Changing the `@tab-content__border` variable now affects on the tabs content border as expected. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15917](https://github.com/magento/magento2/pull/15917)*. [GitHub-14999](https://github.com/magento/magento2/issues/14999)

<!--- ENGCOM-1870 -->* The Multiple Payment Methods Enabled setting now works as expected. Previously, Magent threw this error when this setting was enabled: `Found 3 Elements with non - unique Id`. *Fix submitted by [Viral Vasara](https://github.com/viral-wagento) in pull request [15834](https://github.com/magento/magento2/pull/15834)*. [GitHub-15348](https://github.com/magento/magento2/issues/15348)

<!--- ENGCOM-1989 -->* Primary buttons now have new LESS variables that permit you to change  font-weight, font-size, font-family without changing default button attributes. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [16037](https://github.com/magento/magento2/pull/16037)*.[GitHub-15832](https://github.com/magento/magento2/issues/15832)

<!--- ENGCOM-2048 -->* We've added a space between the category page and the main footer on pages using a single column layout. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request [15727](https://github.com/magento/magento2/pull/15727)* [GitHub-12601](https://github.com/magento/magento2/issues/12601)

<!--- ENGCOM-2061 -->* Customers can now successfully log in after resetting their password. Previously, Magento displayed this error "You did not sign in correctly or your account is temporarily disabled" even though new password hash had been updated in the customer entity. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16255](https://github.com/magento/magento2/pull/16255)*. [GitHub-15255](https://github.com/magento/magento2/issues/15255)

<!--- ENGCOM-2080 -->* Magento no longer displays duplicate element IDs forgift messages in the checkout page. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [16264](https://github.com/magento/magento2/pull/16264)*. [GitHub-13415](https://github.com/magento/magento2/issues/13415)

<!--- ENGCOM-2068 -->* The JavaScript code in the `app/code/Magento/Tax/view/adminhtml/templates/class/page/edit.phtml` file has been refactored to meet Magento coding standards. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16270](https://github.com/magento/magento2/pull/16270)*. [GitHub-15352](https://github.com/magento/magento2/issues/15352)

<!--- ENGCOM-2084 -->* Magento now correctly aligns page elements on  the home page and category page of Hot Seller section. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [16287](https://github.com/magento/magento2/pull/16287)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)

<!--- ENGCOM-2108 -->* Fixed issues with the `jQuery UI DatePicker` display of sequential months. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16280](https://github.com/magento/magento2/pull/16280)*. [GitHub-7379](https://github.com/magento/magento2/issues/7379)

<!--- ENGCOM-2244 -->* The `clickableOverlay` option in modals now works as expected. *Fix submitted by [Prince Patel](https://github.com/mageprince) in pull request [16665](https://github.com/magento/magento2/pull/16665)*. [GitHub-7399](https://github.com/magento/magento2/issues/7399)



### JavaScript
<!--- ENGCOM-2167 -->* The Shipping and Estimate Tax page now correctly displays country, city, and postal code fields. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16491](https://github.com/magento/magento2/pull/16491)*. [GitHub-8222](https://github.com/magento/magento2/issues/8222)



### Newsletter
<!--- ENGCOM-2046 -->* Magento now displays the newsletter subscription confirmation message  as expected after a customer clicks the confirmation link in the subscription confirmation email. *Fix submitted by [Rahul Kachhadiya](https://github.com/rahul-kachhadiya) in pull request [15860](https://github.com/magento/magento2/pull/15860)*. [GitHub-14747](https://github.com/magento/magento2/issues/14747)


### Quote

<!--- ENGCOM-1962 -->* Magento no longer throws an error when trying to load quote item collection using the `Magento\Quote\Model\ResourceModel\QuoteItem\Collection::getItems()` method. *Fix submitted by [Neeta Kangiya](https://github.com/neeta-wagento) in pull request [15829](https://github.com/magento/magento2/pull/15829)*.



###  Sales

<!--- ENGCOM-1292 -->* Magento now supports  GNU free fonts in invoice and shipment PDFs. Previously,  PDFs containing  Arabic, Russian, Greek, Indian or Thai alphabets did not correctly render those characters. *Fix submitted by [Ross](https://github.com/rossmc) in pull request [15829](https://github.com/magento/magento2/pull/15829)*. [GitHub-9666](https://github.com/magento/magento2/issues/9666), [GitHub-12323](https://github.com/magento/magento2/issues/12323)


<!--- ENGCOM-1413 -->* An exported invoice's CSV file now contains information specific to the selected invoice only. Previously, when you selected **Invoices** > **Export** > **CSV**, and opened the CSV file, the exported file contained information from more than the selected invoice. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [14903](https://github.com/magento/magento2/pull/14903)*.


<!--- ENGCOM-1727 -->* The incorrect type hinting in PHPDocs has been corrected. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15619](https://github.com/magento/magento2/pull/15619)*. [GitHub-13992](https://github.com/magento/magento2/issues/13992)


### Search
<!--- ENGCOM-2079 -->* You can now use the Enter key to submit a search form. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16281](https://github.com/magento/magento2/pull/16281)*.
[GitHub-13793](https://github.com/magento/magento2/issues/13793)




### Setup
<!--- ENGCOM-1856 -->* The Module Manager now correctly displays the list of modules (**System** > **Tools** > **Web Setup Wizard** > **Module Manager**). Previously, Magento threw a Error 500 when you tried to display the module list. *Fix submitted by [Vijay Golani](https://github.com/vijay-wagento) in pull request [15756](https://github.com/magento/magento2/pull/15756)*. [GitHub-15192](https://github.com/magento/magento2/issues/15192)


###  Sitemap
<!--- ENGCOM-1528 -->* XML sitemap generation can now be scheduled. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15159](https://github.com/magento/magento2/pull/15159)*. [GitHub-5768](https://github.com/magento/magento2/issues/5768)


### Swagger

<!--- ENGCOM-1935 -->* The REST API schema (Swagger) is now  compatible with Search Criteria. We've added a zero index to the array signifier in the `searchCriteria` parameters builder, which supports generation of the correct response when a user tests a  method with  search criteria parameters in Swagger. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15945](https://github.com/magento/magento2/pull/15945)*. [GitHub-11477](https://github.com/magento/magento2/issues/11477)



### Swatches






### Translations

<!--- ENGCOM-2036 -->* You can now translate the `moreButtonText` text string. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16229](https://github.com/magento/magento2/pull/16229)*. [GitHub-16079](https://github.com/magento/magento2/issues/16079)



## Community contributions
We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.



<table>
  <tr>
    <th>Contributing community member</th>
    <th>Pull request</th>
     <th>Related GitHub issue </th>
  </tr>
  <tr>
    <td><a href="https://github.com/ampulos" target="_blank">ampulos</a></td>
    <td>14665</td>
     <td><a href="https://github.com/magento/magento2/issues/13652" target="_blank"></a>13652</td>
  </tr>

   <tr>
    <td><a href="https://github.com/afirlejczyk" target="_blank">afirlejczyk</a></td>
    <td>14673</td>
     <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a></td>
  </tr>

 <tr>
    <td><a href="https://github.com/afirlejczyk" target="_blank">afirlejczyk</a></td>
    <td>13010</td>
     <td><a href="https://github.com/magento/magento2/issues/14673" target="_blank">14673</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/swnsma" target="_blank">Oleksandr Kravchuk</a></td>
    <td>14471</td>
     <td><a href="https://github.com/magento/magento2/issues/14465" target="_blank">14465</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rossmc" target="_blank">Ross</a></td>
    <td>14711</td>
     <td><a href="https://github.com/magento/magento2/issues/9666" target="_blank">9666</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rossmc" target="_blank">Ross</a></td>
    <td>14711</td>
     <td><a href="https://github.com/magento/magento2/issues/12323" target="_blank">12323</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>14902</td>
     <td><a href="https://github.com/magento/magento2/issues/12430" target="_blank">12430</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>14903</td>
     <td><a href="https://github.com/magento/magento2/issues/12714" target="_blank">12714</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/ferrazzuk" target="_blank">André Ferraz</a></td>
    <td>14757</td>
     <td><a href="https://github.com/magento/magento2/issues/14663" target="_blank">14663</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15159</td>
     <td><a href="https://github.com/magento/magento2/issues/5768" target="_blank">5768</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/gwharton" target="_blank">gwharton</a></td>
    <td>15038</td>
     <td><a href="https://github.com/magento/magento2/issues/10210" target="_blank">10210</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15407</td>
     <td><a href="https://github.com/magento/magento2/issues/14692" target="_blank">14692</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/alepane21" target="_blank">Alessandro Pagnin</a></td>
    <td>13756</td>
     <td><a href="https://github.com/magento/magento2/issues/13704" target="_blank">13704</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15522</td>
     <td><a href="https://github.com/magento/magento2/issues/9580" target="_blank">9580</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/JeroenVanLeusden" target="_blank">Jeroen</a></td>
    <td>15445</td>
     <td><a href="https://github.com/magento/magento2/issues/14941" target="_blank">14941</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15619</td>
     <td><a href="https://github.com/magento/magento2/issues/13992" target="_blank">13992</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank">vgelani</a></td>
    <td>15668</td>
     <td><a href="https://github.com/magento/magento2/issues/15601" target="_blank">15601</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank">Vishal Gelani</a></td>
    <td>15668</td>
     <td><a href="https://github.com/magento/magento2/issues/15601" target="_blank">15601</a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/gelanivishal" target="_blank">vgelani</a></td>
    <td>15669</td>
     <td><a href="https://github.com/magento/magento2/issues/15601" target="_blank">15601</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15714</td>
     <td><a href="https://github.com/magento/magento2/issues/7897" target="_blank">7897</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vijay-wagento" target="_blank">Vijay Golani</a></td>
    <td>15736</td>
     <td><a href="https://github.com/magento/magento2/issues/15354" target="_blank">15354</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/vijay-wagento" target="_blank">Vijay Golani</a></td>
    <td>15756</td>
     <td><a href="https://github.com/magento/magento2/issues/15192" target="_blank">15192</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank">Viral Vasara</a></td>
    <td>15816</td>
     <td><a href="https://github.com/magento/magento2/issues/15319" target="_blank">15319</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank">Viral Vasara</a></td>
    <td>15814</td>
     <td><a href="https://github.com/magento/magento2/issues/15590" target="_blank">15590</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/sanjay-wagento" target="_blank">Sanjay Patel</a></td>
    <td>15767</td>
     <td><a href="https://github.com/magento/magento2/issues/15510" target="_blank">15510</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank">Hitesh</a></td>
    <td>15796</td>
     <td><a href="https://github.com/magento/magento2/issues/15608" target="_blank">15608</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank">Viral Vasara</a></td>
    <td>15801</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank">Chirag Matholiya</a></td>
    <td>15797</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank">Chirag Matholiya</a></td>
    <td>15841</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15855</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank">Vitaliy</a></td>
    <td>15290</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15866</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank">Rahul Kachhadiya</a></td>
    <td>15887</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/DanielRuf" target="_blank">Daniel Ruf</a></td>
    <td>15920</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15924</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15925</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank">Dmytro Cheshun</a></td>
    <td>15927</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank">Yaroslav Rogoza</a></td>
    <td>15933</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>15945</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>15943</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/saurabh-parekh" target="_blank"></a>Saurabh Parekh</td>
    <td>15949</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>15643</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dankhrapiyush" target="_blank"></a>Piyush Dankhara</td>
    <td>15874</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>15880</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>15915</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>15917</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank"></a>Dmytro Cheshun</td>
    <td>16026</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16024</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>16031</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16043</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/neeta-wagento" target="_blank"></a>Neeta Kangiya</td>
    <td>15829</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>15776</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/viral-wagento" target="_blank"></a>Viral Vasara</td>
    <td>15834</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank"></a>Rahul Kachhadiya</td>
    <td>15862</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16067</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16081</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16037</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>16102</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/lfluvisotto" target="_blank"></a>Leandro F. L.</td>
    <td>16130</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/hitesh-wagento" target="_blank"></a>Hitesh</td>
    <td>16111</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16039</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16162</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank"></a>Rahul Kachhadiya</td>
    <td>15863</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank"></a>Vitaliy</td>
    <td>15236</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank"></a>Vitaliy</td>
    <td>15287</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/VitaliyBoyko" target="_blank"></a>Vitaliy</td>
    <td>15289</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/tdgroot" target="_blank"></a>Timon de Groot</td>
    <td>15722</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dmytro-ch" target="_blank"></a>Dmytro Cheshun</td>
    <td>15699</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/sanjay-wagento" target="_blank"></a>Sanjay Patel</td>
    <td>15821</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rahul-kachhadiya" target="_blank"></a>Rahul Kachhadiya</td>
    <td>15860</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/sanjay-wagento" target="_blank"></a>Sanjay Patel</td>
    <td>15727</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/tejash-wagento" target="_blank"></a>Tejash Kumbhare</td>
    <td>16226</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16255</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16294</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16270</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16264</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16281</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/dankhrapiyush" target="_blank"></a>Piyush Dankhara</td>
    <td>16297</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/NamrataChangani" target="_blank"></a>Namrata Changani</td>
    <td>16319</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vgelani" target="_blank"></a></td>
    <td>16325</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/chirag-wagento" target="_blank"></a>Chirag Matholiya</td>
    <td>16287</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16347</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/lfluvisotto" target="_blank"></a>Leandro F. L.</td>
    <td>16359</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/lfluvisotto" target="_blank"></a>Leandro F. L.</td>
    <td>16366</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/vasilii-b" target="_blank"></a>Burlacu Vasilii</td>
    <td>16280</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16352</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/rogyar" target="_blank"></a>Yaroslav Rogoza</td>
    <td>16403</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16467</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16475</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/Karlasa" target="_blank"></a>Karla Saaremäe</td>
    <td>16229</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/eduard13" target="_blank"></a>Chitoraga Eduard</td>
    <td>16392</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16491</td>
     <td>8222</td>
  </tr>
<tr>
    <td><a href="https://github.com/gelanivishal" target="_blank"></a>Vishal Gelani</td>
    <td>16547</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/mageprince" target="_blank"></a>Prince Patel</td>
    <td>16577</td>
     <td>N/A</td>
  </tr>
<tr>
    <td><a href="https://github.com/mageprince" target="_blank"></a>Prince Patel</td>
    <td>16577</td>
     <td>N/A</td>
  </tr>







<tr>
    <td><a href="https://github.com/mageprince" target="_blank"></a>Prince Patel</td>
    <td>16586</td>
     <td>N/A</td>
  </tr>




</table>




### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).


old table 
<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Atwix</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14332">14332</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14479">14479</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14348">14348</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14480">14480</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14151">14151</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14117">14117</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14098">14098</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14096">14096</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13806">13806</a></td>
    <td><a target="_blank" href="https://github.com/magento/magento2/issues/4173">4173</a>, <a target="_blank" href="https://github.com/magento/magento2/issues/5808">5808</a>, <a target="_blank" href="https://github.com/magento/magento2/issues/6694">6694</a>, <a target="_blank" href="https://github.com/magento/magento2/issues/3489">3489</a> </td>
  </tr>

  <tr>
    <td>Divante</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13980">13980</a></td>
    <td><a target="_blank" href="https://github.com/magento/magento2/issues/13315">13315</a></td>
  </tr>

  <tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13654">13654</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13658">13658</a>,  <a target="_blank" href="https://github.com/magento/magento2/pull/13486">13486</a></td>
    <td><a target="_blank" href="https://github.com/magento/magento2/issues/13474">13474</a></td>
  </tr>






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


