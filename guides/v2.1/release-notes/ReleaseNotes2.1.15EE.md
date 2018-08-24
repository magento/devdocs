---
group: release-notes
title: Magento Commerce 2.1.15 Release Notes
---

*	TOC
{:toc}

*Patch code and release notes were published on September , 2018.*


We are pleased to present Magento Open Source  2.1.15. This release includes  multiple enhancements to product security plus  bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.6-and-2.1.15-security-update) for a comprehensive discussion of these issues.

## Highlights

Magento 2.1.15 contains 38 security fixes and enhancements.  The enhancements help close stored XSS, SQL injection, and cross-site request forgery (CSRF) vulnerabilities. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.6-and-2.1.15-security-update) for more information.

## Fixed issues

In addition to security enhancements, this release contains the following functional fixes

### Installation, configuration, and deployment

<!--- ENGCOM-1856 -->* The Module Manager now correctly displays the list of modules (**System** > **Tools** > **Web Setup Wizard** > **Module Manager**). Previously, Magento threw an error when you tried to display the module list. *Fix submitted by [Vijay Golani](https://github.com/vijay-wagento) in pull request [15756](https://github.com/magento/magento2/pull/15756)*. [GitHub-15192](https://github.com/magento/magento2/issues/15192)


### Banner

<!--- MAGETWO-71381 -->* Banners are now visible only when the rule they are associated with is applied. 




### Catalog

<!--- ENGCOM-1685 -->* The `Magento\Catalog\Model\ResourceModel\Category\Collection::joinUrlRewrite` method now uses the `storeId` value  set on the actual collection of the store rather than the `storeId` retrieved from the store manager. *Fix submitted by [Alessandro Pagnin](https://github.com/alepane21) in pull request [13756](https://github.com/magento/magento2/pull/13756)*GitHub-13704](https://github.com/magento/magento2/issues/13704)

<!--- ENGCOM-1842 -->* Magento now uses `data-container="product-list"` instead of  `data-container="product-grid"` when displaying a product list. *Fix submitted by [Viral Vasara](https://github.com/viral-wagento) in pull request [15816](https://github.com/magento/magento2/pull/15816)* [GitHub-15319](https://github.com/magento/magento2/issues/15319)

<!--- ENGCOM-1907 -->* Magento has improved the accuracy of prices requiring more than two digits that are listed on the Product page. Previously, when a product price was represented by more than two digits (for example, $5.43), JavaScript settings always used the rounding logic for two digits only. (For example, the amount 9.4880 was displayed as 9.49.) *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15926](https://github.com/magento/magento2/pull/15926)*GitHub-14249](https://github.com/magento/magento2/issues/14249)

 

### Cart and checkout

<!--- ENGCOM-1269 -->* The minicart now displays product names that contain special characters. *Fix submitted by [ampulos](https://github.com/ampulos) in pull request [14665](https://github.com/magento/magento2/pull/14665)*. [GitHub-13652](https://github.com/magento/magento2/issues/13652)


### CMS content

<!--- MAGETWO-84366 -->* You can now successfully upload logo images in Internet Explorer.  Previously, Magento did not upload the image, but instead displayed this error: `Object doesn't support property or method 'set'`. 

<!--- MAGETWO-67162 -->* CSS minification is now compatible with CSS3 `calc()` function. [GitHub-8552](https://github.com/magento/magento2/issues/8552)


### Directory

<!--- ENGCOM-1948 -->* Magento now supports Canadian Postal codes without spaces as expected.  *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16031](https://github.com/magento/magento2/pull/16031)*. [GitHub-13899](https://github.com/magento/magento2/issues/13899)


### Framework

<!--- ENGCOM-1262 -->* Magento now leaves at least one record after cleaning up the changelog tables after restarting MySQL. Previously, the product `version_id` lost the most recent  `auro_increment` value after restarting MySQL. *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [14471](https://github.com/magento/magento2/pull/14471)*. [GitHub-14465](https://github.com/magento/magento2/issues/14465)

<!--- ENGCOM-1410 -->* Magento now displays custom price symbols as expected. Previously, when a merchant created variations of a configurable product, product prices were not readable if they contained a custom price symbol. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [14471](https://github.com/magento/magento2/pull/14471)*. 
[GitHub-14902](https://github.com/magento/magento2/issues/14902)

<!--- ENGCOM-1796 -->* Magento now correctly aligns submenus. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15714](https://github.com/magento/magento2/pull/15714)*. [GitHub-7897](https://github.com/magento/magento2/issues/7897)

<!--- ENGCOM-1908 -->* Magento now supports Malaysian locales. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [15927](https://github.com/magento/magento2/pull/15927)*. [GitHub-14089](https://github.com/magento/magento2/issues/14089)

### Customer 

<!--- ENGCOM-1337 -->* Magento now preserves the user group ID when using `/V1/customers/:customerId` (PUT). Previously, Magento set the customer group ID to 1 when you called  `/V1/customers/:customerId` (PUT) and the customer had an assigned group ID. *Fix submitted by [André Ferraz](https://github.com/ferrazzuk) in pull request [14757](https://github.com/magento/magento2/pull/14757)*. [GitHub-14663](https://github.com/magento/magento2/issues/14663)


### General

<!--- ENGCOM-1272 -->* Magento now checks that a product is assigned to a specific website in a multistore environment before a customer can write a product review. Previously, a customer could write a review for a product that was not assigned to the store they were logged in to.  *Fix submitted by [afirlejczyk](https://github.com/afirlejczyk) in pull request [14673](https://github.com/magento/magento2/pull/14673)*.

<!--- ENGCOM-2233 -->* The `transport` event parameter has been changed from type `Array()` to type `DataObject`. This is a reversion of a chnage that was made in an earlier release. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16601](https://github.com/magento/magento2/pull/16601)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

<!--- ENGCOM-1639 -->* Merchants can now place an order for a grouped product where the quantity of subproducts is less than one unit.  *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15407](https://github.com/magento/magento2/pull/15407)*. [GitHub-14692](https://github.com/magento/magento2/issues/14692)

<!--- ENGCOM-1699 -->* Magento now sets the `trigger_recollect` attribute  back to 0 after collecting total amounts for the quote. Previously, Magento timed out if a customer tried to reload a quote. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15522](https://github.com/magento/magento2/pull/15522)*. [GitHub-9580](https://github.com/magento/magento2/issues/9580)

<!--- ENGCOM-1693 -->* Magento no longer recalculates prices unnecessarily when refreshing the Catalog page, which has improved product performance. *Fix submitted by [Jeroen Van Leusden](https://github.com/JeroenVanLeusden) in pull request [15445](https://github.com/magento/magento2/pull/15445)*. [GitHub-14941](https://github.com/magento/magento2/issues/14941)


<!--- ENGCOM-1777 -->* The annotation for the `formatDateTime` function in the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file has been corrected. The `locale` and `timezone` have been changed to `param string|null $locale` and `@param string|null $timezone`.  *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15668](https://github.com/magento/magento2/pull/15668)*.[GitHub-15668](https://github.com/magento/magento2/issues/15668)


<!--- ENGCOM-1778 -->* The annotation for the `formatDateTime` function in the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file has been corrected. The `locale` and `timezone` have been changed to `param string|null $locale` and `@param string|null $timezone`. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15669](https://github.com/magento/magento2/pull/15669)*. [GitHub-15601](https://github.com/magento/magento2/issues/15601)

<!--- ENGCOM-1804 -->* We've refactored the JavaScript code in the `spli.phtml` template file for the button widget. *Fix submitted by [Vijay Golani](https://github.com/vijay-wagento) in pull request [15736](https://github.com/magento/magento2/pull/15736)*.[GitHub-15354](https://github.com/magento/magento2/issues/15354)

<!--- ENGCOM-1841 -->* The misspelling of `setCategoryIds` has been corrected throughout the code base. *Fix submitted by [Viral Vasara](https://github.com/viral-wagento) in pull request [15814](https://github.com/magento/magento2/pull/15814)*.

<!--- ENGCOM-1859 -->* Customers can now successfully download and export PDFs after logging in. Previously, customers were redirected to the Admin when trying to download or export data to a PDF right after logging in. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request [15767](https://github.com/magento/magento2/pull/15767)*. [GitHub-15510](https://github.com/magento/magento2/issues/15510)

<!--- ENGCOM-1849 -->* `select` elements now display with the styles you set in `_theme.less` as expected. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15796](https://github.com/magento/magento2/pull/15796)*. [GitHub-15608](https://github.com/magento/magento2/issues/15608)

<!--- ENGCOM-1930, ENGCOM-2096 -->* Client-side email validation now works in Internet Explorer 11.x the same way as it does in Chrome. Previously, a leading or trailing space on the following pages resulted in  client-side validation failure in Magento stores deployed on Internet Explorer 11.x. *Fix submitted by [Piyush Dankhara](https://github.com/dankhrapiyush) in pull requests [15874](https://github.com/magento/magento2/pull/15874) and[16297](https://github.com/magento/magento2/pull/16297)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

	* Customer Account Login page email field

	* Customer Account create page

	* Customer Authentication popup when the **Allow Guest Checkout** is  set to **No**


<!--- ENGCOM-1881 -->* `.limiter` now has the same parent selectors (similar to `.pages`) to prevent clashes between styles and layouts. Previously, `.limiter` was too generic and was used as single selector for floating the element. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15880](https://github.com/magento/magento2/pull/15880)*. [GitHub-15323](https://github.com/magento/magento2/issues/15323)

<!--- ENGCOM-1903 -->* Changing the `@tab-content__border` variable now affects on the tabs content border as expected. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [15917](https://github.com/magento/magento2/pull/15917)*. [GitHub-14999](https://github.com/magento/magento2/issues/14999)

<!--- ENGCOM-1870 -->* The **Multiple Payment Methods Enabled** setting now works as expected. Previously, Magento threw this error when this setting was enabled: `Found 3 Elements with non - unique Id`. *Fix submitted by [Viral Vasara](https://github.com/viral-wagento) in pull request [15834](https://github.com/magento/magento2/pull/15834)*. [GitHub-15348](https://github.com/magento/magento2/issues/15348)

<!--- ENGCOM-1989 -->* Primary buttons now have new LESS variables that permit you to change  `font-weight`, `font-size`, and `font-family` without changing default button attributes. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [16037](https://github.com/magento/magento2/pull/16037)*.[GitHub-15832](https://github.com/magento/magento2/issues/15832)

<!--- ENGCOM-2048 -->* We've added a space between the category page and the main footer on pages using a single column layout. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request [15727](https://github.com/magento/magento2/pull/15727)* [GitHub-12601](https://github.com/magento/magento2/issues/12601)

<!--- ENGCOM-2061 -->* Customers can now successfully log in after resetting their password. Previously, Magento displayed this error "You did not sign in correctly or your account is temporarily disabled" even though the new password hash had been updated in the customer entity. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16255](https://github.com/magento/magento2/pull/16255)*. [GitHub-15255](https://github.com/magento/magento2/issues/15255)

<!--- ENGCOM-2080 -->* Magento no longer displays duplicate element IDs for gift messages in the checkout page. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [16264](https://github.com/magento/magento2/pull/16264)*. [GitHub-13415](https://github.com/magento/magento2/issues/13415)

<!--- ENGCOM-2068 -->* The JavaScript code in the `app/code/Magento/Tax/view/adminhtml/templates/class/page/edit.phtml` file has been refactored to meet Magento coding standards. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16270](https://github.com/magento/magento2/pull/16270)*. [GitHub-15352](https://github.com/magento/magento2/issues/15352)

<!--- ENGCOM-2084 -->* Magento now correctly aligns page elements on  the home page and category page of the Hot Seller section. *Fix submitted by [Chirag Matholiya](https://github.com/chirag-wagento) in pull request [16287](https://github.com/magento/magento2/pull/16287)*. [GitHub-15213](https://github.com/magento/magento2/issues/15213)

<!--- ENGCOM-2108 -->* Fixed issues with the `jQuery UI DatePicker` display of sequential months. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16280](https://github.com/magento/magento2/pull/16280)*. [GitHub-7379](https://github.com/magento/magento2/issues/7379)

<!--- ENGCOM-2244 -->* The `clickableOverlay` option in modals now works as expected. *Fix submitted by [Prince Patel](https://github.com/mageprince) in pull request [16665](https://github.com/magento/magento2/pull/16665)*. [GitHub-7399](https://github.com/magento/magento2/issues/7399)

<!--- MAGETWO-86935 -->* Users assigned a Restricted User role no longer receive this message, `Something went wrong` when viewing orders. 


<!--- MAGETWO-70329 -->* Magento no longer unnecessarily displays this warning when a customer opens a product page: `The property price is not valid`. [GitHub-7173](https://github.com/magento/magento2/issues/7173)



### Infrastructure

<!--- MAGETWO-64616 -->* The `Layout.eventManager` now correctly dispatches the `layout_render_before` events *before* Magento renders the current layout.



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

<!--- ENGCOM-2079 -->* You can now use the **Enter** key to submit a search form. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16281](https://github.com/magento/magento2/pull/16281)*.
[GitHub-13793](https://github.com/magento/magento2/issues/13793)


###  Sitemap

<!--- ENGCOM-1528 -->* XML sitemap generation can now be scheduled. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [15159](https://github.com/magento/magento2/pull/15159)*. [GitHub-5768](https://github.com/magento/magento2/issues/5768)


### Swagger

<!--- ENGCOM-1935 -->* The REST API schema is now  compatible with search criteria. The `searchCriteria` parameters builder now contains a zero index to the array signifier, which supports generation of the correct response when a user tests a  method with  search criteria parameters in Swagger. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15945](https://github.com/magento/magento2/pull/15945)*. [GitHub-11477](https://github.com/magento/magento2/issues/11477)


### Translations

<!--- ENGCOM-2036 -->* You can now translate the `moreButtonText` text string. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [16229](https://github.com/magento/magento2/pull/16229)*. [GitHub-16079](https://github.com/magento/magento2/issues/16079)


<!--- not needed MAGETWO-93205 MAGETWO-90840 MAGETWO-92177 MAGETWO-93150 MAGETWO-92174 MAGETWO-81310 MAGETWO-88659 MAGETWO-72050 MAGETWO-93265 MAGETWO-93085 MAGETWO-61209 MAGETWO-92199 MAGETWO-92196 MAGETWO-88656 MAGETWO-88668 MAGETWO-83492 MAGETWO-92164 MAGETWO-88593 MAGETWO-88599 MAGETWO-72023 MAGETWO-81472 MAGETWO-91894 MAGETWO-88605 MAGETWO-89747 MAGETWO-92190 MAGETWO-88587 MAGETWO-90411 MAGETWO-90395 MAGETWO-88714  -->

<!---  cannot reproduce MAGETWO-83344 -->


## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the community member who contributed the pull request, the external pull request, and the GitHub issue number associated with the pull request (if available).


### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull Request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Aligent</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/17092">17092</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16585">16585</a></td>
    <td>N/A</td>
</tr>

<tr>
    <td>Ampersand</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/17105">17105</a></td>
     <td>N/A</td>
</tr>

<tr>
    <td>Atwix</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16877">16877</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16392">16392</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16923">16923</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Comwrap</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16923">16923</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17179">17179</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17091">17091</a> </td>
    <td>N/A</td>

  </tr>


<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14380">14380</a> </td>
    <td>N/A</td>
  </tr>


  <tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/17242">17242</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Imagination Media</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/17216">17216</a></td>
    <td>N/A</td>
</tr>

<tr>
    <td>Interactiv4</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/17172">17172</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17192">17192</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17179">17179</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17091">17091</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17212">17212</a></td>
    <td>N/A</td>
  </tr>


<tr>
    <td>ISMecompany</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16619">16619</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16702">16702</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16917">16917</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Mage Specialist</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/16948">16948</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16828">16828</a></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Wagento</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/17022">17022</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17015">17015</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17029">17029</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16992">16992</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16526">16526</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/16797">16797</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17088">17088</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/17240">17240</a></td>
    <td>N/A</td>
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
Dear community members, thank you for your suggestions,  bug reports, and code contributions. 
