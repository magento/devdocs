---
layout: default
group: release-notes
title: Magento Open Source 2.2.5 Release Notes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.5CE.md
---
*Patch code and release notes published on June 12, 2018.* 

This release includes multiple enhancements to product security plus bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues.


## Highlights

Look for the following highlights in this release:

* Enhancements that help close stored XSS, SQL injection, and cross-site request forgery (CSRF) vulnerabilities. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for more information.

* Substantial improvements to indexing performance. 

* Over 150 **community contributions**.

* Improvements to our core bundled extensions. 

Looking for more information on these new features as well as many others? Check out [Magento 2.2.x Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Open Source User Guide](http://docs.magento.com/m2/ce/user_guide/getting-started.html).




## Fixes
In addition to security enhancements, this release contains the following functional fixes. 

### Installation, setup, and deployment

<!-- MAGETWO-88237 -->  * Magento no longer permits you to re-run an already running cron job. *Fix submitted by [Paavo Pokkinen](https://github.com/paveq) in pull request 12497*. [GitHub-10650](https://github.com/magento/magento2/issues/10650)



### Bundle products
<!--- MAGETWO-86354 -->* You can now successfully delete an option from a bundle prodct. 

<!--- MAGETWO-73479 -->* Magento now correctly applies coupon codes that exclude bundle products. Previously, Magento applied these coupons but did not exclude bundle products as expected. 



### Catalog
<!--- MAGETWO-88808 -->* Merchants can now run the catalog search full text indexer and category product indexer in parallel mode by store view

<!--- MAGETWO-88107 -->* The `Category\Collection::joinUrlRewrite` method now returns the URL of the store  whose `storeId` is set on the collection. Previously, this method returned the name of the default store. *Fix submitted by [Alessandro Pagnin](https://github.com/alepane21) in pull request 13716*. [GitHub-13704](https://github.com/magento/magento2/issues/13704)

<!--- MAGETWO-81957 -->* Sorting products by price now applies catalog rules as expected. 

<!--- MAGETWO-73419 -->* Sorting products with required custom options by price now works as expected. 

<!--- MAGETWO-73008 -->* Tier pricing for a single product unit now works as expected. If a tier price is set for one product unit, and this price is lower than the product price or special price, then the product price index table is populated with tier price.

<!--- MAGETWO-71936 -->* Magento now successfully saves products when using a locale that formats dates in this way: DD/MM/YEAR. Previously, when you tried to save a product in a locale where dates are formatted this way, Magento did not save the product, and displayed this error: `Invalid input datetime format`. [GitHub-10485](https://github.com/magento/magento2/issues/10485)

<!--- MAGETWO-54740 -->* When you import new products using CVS, Magento no longer lists as in stock any products whose CSV values indicate that they should be represented as out-of-stock. 



### Cart and checkout
<!--- MAGETWO-87115 -->* Users can now create an account from the Order Confirmation page. Previously, a customer could not populate the required fields to create an account from this page, and Magento displayed an error. 


### CMS content
<!--- MAGETWO-89281 -->* When working in the media gallery, you can now successfully delete  any files and folders that are symlinked in `pub/media`. Previously, any files or folders that were symlinked inside the `pub/media` directory could not be deleted because there is a validation check that uses `realpath` to test whether the file is outside the media directory base path. Since `realpath` resolves symlinks to actual paths, this check will fail if actual path is outside of base path and will prevent action from being completed.



### Configurable products

<!--- MAGETWO-88925 -->* Magento now displays the correct  status for a backordered configurable product on the order view page. 

<!--- MAGETWO-86661 -->* Magento now displays the correct image for a configurable product on the wishlist. Previously, Magento displayed the image for the parent product ragher than for the selected variant. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request 1031*. [GitHub-8168](https://github.com/magento/magento2/issues/8168)

<!--- MAGETWO-87570 -->* * The **Hide from Product Page** option now works for the child product of a configurable product. 

<!--- MAGETWO-71662 -->* The **Update On Save** re-index operation now works as expected when re-indexing configurable products after changing options. Previously,  when you manually re-index from the command line, your changes to configurable product options were not not saved. 


### Frameworks
<!--- MAGETWO-87964 -->* We've bumped the required minimal PHP version to 7.0.13.


### General
<!--- MAGETWO-85296 -->* The product repository now uses `store_id` (if set)  when saving attributes for an existing product. Previously, Magento always saved attribute values for an existin product at the default store level. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request 967*. [GitHub-7720](https://github.com/magento/magento2/issues/7720), [GitHub-12395](https://github.com/magento/magento2/issues/12395), [GitHub-12186](https://github.com/magento/magento2/issues/12186)

<!--- MAGETWO-82417 -->* The placement of Google Tag Manager code now follows the guidelines in the [Google Tag Manager Developer Guide](https://developers.google.com/tag-manager/devguide). (Previously, the Google Tag Manager code was inserted before the `dataLayer` variable was defined.)

<!--- MAGETWO-77754 -->* The Related Products rule for up-sell products with customer segments set to **Specified** now works as expected. 



### Gift card EE only
<!--- MAGETWO-85536 -->* Magento now displays the correct subtotal when a customer adds multiple gift cards of different amounts to their cart. 


### Import/export
<!--- MAGETWO-88265 -->* The data check on imported customer information now completes as expected. Previously, when you clicked Check Data on a large CSV file created by **System > Data Transfer > Import**, the request failed, and Magento displayed the timeout spinner. 

<!--- MAGETWO- 84942-->* If you remove a product's custom options from the CSV file created during product import,  Magento no longer displays the custom options on the storefront. 



### Indexing
<!--- MAGETWO-80789 -->* The Search indexer is now scoped and multi-threaded, which improves  layered navigation, search and indexing actions for complex sites with multiple store views and shared catalogs.


### Orders
<!--- MAGETWO-87197 -->* Magento now filters recent orders by store on the customer account page  as expected. *Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13257*. 

<!--- MAGETWO-86399 -->* The performance and logic of `Magento\Sales\Helper\Guest` has been improved. *Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 12893*. 


### Payment methods
<!--- MAGETWO-87832 -->* In multistore environments, Magento now retrieves the correct PayPal Payflow Pro credentials. Previously, Magento always retrieved the credentials configured for the default store. 



### Performance
<!--- MAGETWO-86745 -->* We've removed the `count()` method from the condition section for some loops in a small subset of backend files. When this method is used in a loop condition,  it will be executed at every iteration, which can degrade performance. *Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request 13173*. 


### Search
<!--- MAGETWO-81901 -->* Out-of-stock options for configurable products no longer show up in search and layered navigation results.

<!--- MAGETWO-75769 -->* Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.


### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>

<!--- MAGETWO-84257 -->* Merchants can now choose whether to request and include tax information from UPS in the rate charged to the customer during checkout.  (This permits merchants  to pass on the tax costs to their customer as part of the overall shipping rate. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request 11707*. 



### Swagger
<!--- MAGETWO-84921 -->* Swagger now displays the text area that contains the payload structure of all POST and PUT operations. 


### Swatches
<!--- MAGETWO-86332 -->*  You can now use JavaScript mixins to extend swatch functionality in all supported browsers. *Fix submitted by [Renon Stewart](https://github.com/srenon) in pull request 12929*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)


### Testing
<!--- MAGETWO-88291 -->* You can now use REST to update the `available_payment_methods` company extension attribute. Previously, Magento set whatever  value you passed in to null in the database  `company_payment` table. 

<!--- MAGETWO-87487 -->* The `phpunit.xml` configuration file is now blacklisted during schema validation static tests (particularly `Magento/Test/Integrity/Xml/SchemaTest.php`). 

<!--- MAGETWO-81742 MAGETWO-89250 -->* The `\Magento\Test\Php\LiveCodeTest::testCodeStyle`  method now uses whitelist files. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11376*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)


### URL rewrites
<!--- MAGETWO-86554 -->* Magento no longer throws a 404 error when a customer navigates from the Catalog page of the default store to a custom Catalog on a different store. 


### Visual Merchandiser

<!--- MAGETWO-71554 -->* We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).



<!--- NOT NEEDED  
MAGETWO-91014 MAGETWO-90943 MAGETWO-90541 MAGETWO-90413 MAGETWO-90362 MAGETWO-90071 MAGETWO-90067 MAGETWO-90041 MAGETWO-89974  MAGETWO-89613 MAGETWO-89610  MAGETWO-88890 MAGETWO-88817 MAGETWO-88812 MAGETWO-88646 MAGETWO-88643 MAGETWO-88601 MAGETWO-88509 MAGETWO-88436 MAGETWO-88326 MAGETWO-88289 MAGETWO-87467 MAGETWO-86990 MAGETWO-86046 MAGETWO-85871 MAGETWO-85135 MAGETWO-80093 MAGETWO-73694 MAGETWO-80908
MAGETWO-86046 MAGETWO-90074 MAGETWO-62150 MAGETWO-89547 MAGETWO-45775 MAGETWO-91074 MAGETWO-91123 --->





## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

old table 


<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
    <th>Contributing community member</th>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12171">12171</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7691" target="_blank">7691</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11407">11407</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9277" target="_blank">9277</a></td>
    <td><a target="_blank" href="https://github.com/peterjaap">Peter Jaap Blaakmeer</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11997">11997</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11941" target="_blank">11941</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12283">12283</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12083" target="_blank">12083</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12296">12296</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3596" target="_blank">3596</a></td>
    <td><a target="_blank" href="https://github.com/madonzy">Alex</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12303">12303</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9764" target="_blank">9764</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12310">12310</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13214" target="_blank">13214</a></td>
    <td><a target="_blank" href="https://github.com/tufahu">Milan Osztromok</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12332">12332</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9684" target="_blank">9684</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11787">11787</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10438" target="_blank">10438</a></td>
    <td><a target="_blank" href="https://github.com/joni-jones">Ievgen Sentiabov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12003">12003</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11691" target="_blank">11691</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12308">12308</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12261" target="_blank">12261</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12302">12302</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12146" target="_blank">12146</a></td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11320">11320</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10502" target="_blank">10502</a></td>
    <td><a target="_blank" href="https://github.com/marinagociu">Marina Gociu</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11429">11429</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11139" target="_blank">11139</a></td>
    <td><a target="_blank" href="https://github.com/mayankzalavadia">Mayank Zalavadia</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11809">11809</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8003" target="_blank">8003</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11592">11592</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10347" target="_blank">10347</a></td>
    <td><a target="_blank" href="https://github.com/PieterCappelle">Pieter Cappelle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11539">11539</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9360" target="_blank">9360</a></td>
    <td><a target="_blank" href="https://github.com/jahvi">Javier Villanueva</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11965">11965</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11792" target="_blank">11792</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12048">12048</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11528" target="_blank">11528</a></td>
    <td><a target="_blank" href="https://github.com/luismiguelyangehuaman">LuisMi</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12108">12108</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12064" target="_blank">12064</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11473">11473</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9413" target="_blank">9413</a></td>
    <td><a target="_blank" href="https://github.com/mariuscris">Marius</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11670">11670</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11669" target="_blank">11669</a></td>
    <td><a target="_blank" href="https://github.com/ajpevers">Anton Evers</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11992">11992</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11740" target="_blank">11740</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12036">12036</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9410" target="_blank">9410</a>, <a href="https://github.com/magento/magento2/issues/10707" target="_blank">10707</a>,  <a href="https://github.com/magento/magento2/issues/10737" target="_blank">10737</a>, <a href="https://github.com/magento/magento2/issues/11032" target="_blank">11032</a></td>
    <td><a target="_blank" href="https://github.com/gomencal">gonzalopelon</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12241">12241</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10128" target="_blank">10128</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/903">903</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9515" target="_blank">9515</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12132">12132</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10210" target="_blank">10210</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11389">11389</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11341" target="_blank">11341</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12133">12133</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12127" target="_blank">12127</a></td>
    <td><a target="_blank" href="https://github.com/erfanimani">Erfan</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12253">12253</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12058" target="_blank">12058</a></td>
    <td><a target="_blank" href="https://github.com/KarlDeux">Carlos Lizaga</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12328">12328</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9742" target="_blank">9742</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/904">904</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9468" target="_blank">9468</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12057">12057</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6634" target="_blank">6634</a>, <a href="https://github.com/magento/magento2/issues/9961" target="_blank">9961</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11323">11323</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9931" target="_blank">9931</a></td>
    <td><a target="_blank" href="https://github.com/brobie">Ben Robie</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11388">11388</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11236" target="_blank">11236</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">Danny Verkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11485">11485</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11484" target="_blank">11484</a></td>
    <td><a target="_blank" href="https://github.com/joost-florijn-kega">joost-florijn-kega</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11926">11926</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8255" target="_blank">8255</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12207">12207</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11509" target="_blank">11509</a>, <a href="https://github.com/magento/magento2/issues/11882" target="_blank">11882</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11052">11052</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9918" target="_blank">9918</a></td>
    <td><a target="_blank" href="https://github.com/jokeputs">Joke Puts</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12038">12038</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11825" target="_blank">11825</a>, <a href="https://github.com/magento/magento2/issues/11908" target="_blank">11908</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12499">12499</a></td>
    <td><a href="https://github.com/magento/magento2/issues/758" target="_blank">758</a></td>
    <td><a target="_blank" href="https://github.com/cykirsch">cykirsch</a></td>
  </tr>
 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11444">11444</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11324" target="_blank">11324</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">adrian-martinez-interactiv4</a></td>
  </tr>
 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11608">11608</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9633" target="_blank">9633</a></td>
    <td><a target="_blank" href="https://github.com/sylink">Marty S</a></td>
 </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11617">11617</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6770" target="_blank">6770</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11099">11099</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11059" target="_blank">11059</a></td>
    <td><a target="_blank" href="https://github.com/schmengler">Fabian Schmengler</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11435">11435</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11409" target="_blank">11409</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">adrian-martinez-interactiv4</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12167">12167</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12110" target="_blank">12110</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12469">12469</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12268" target="_blank">12268</a></td>
    <td><a target="_blank" href="https://github.com/roma84">Chumak Roman</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/991">991</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12268" target="_blank">12268</a></td>
    <td><a target="_blank" href="https://github.com/ishakhsuvarov">Ievgen Shakhsuvarov</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12507">12507</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12506" target="_blank">12506</a></td>
    <td><a target="_blank" href="https://github.com/PascalBrouwers">PascalBrouwers</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/935">935</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12482" target="_blank">12482</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/970">970</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8437" target="_blank">8437</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/986">986</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8176" target="_blank">8176</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/985">985</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12613" target="_blank">12613</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12220">12220</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12180" target="_blank">12180</a></td>
    <td><a target="_blank" href="https://github.com/chris-pook">Chris Pook</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12529">12529</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12450" target="_blank">12450</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/929">929</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12468" target="_blank">12468</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/962">962</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7467" target="_blank">7467</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/975">975</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8410" target="_blank">8410</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/981">981</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12582" target="_blank">12582</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/916">916</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8862" target="_blank">8862</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/968">968</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8011" target="_blank">8011</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/993">993</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12526" target="_blank">12526</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/984">984</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12535" target="_blank">12535</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/964">964</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8507" target="_blank">8507</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/980">980</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10123" target="_blank">10123</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11702">11702</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9055" target="_blank">9055</a></td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/963">963</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8601" target="_blank">8601</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/977">977</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10797" target="_blank">10797</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/982">982</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12560" target="_blank">12560</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/996">996</a></td>
    <td><a href="https://github.com/magento/magento2/issues/2907" target="_blank">2907</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1003">1003</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5738" target="_blank">5738</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/983">983</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12259" target="_blank">12259</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1000">1000</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8204" target="_blank">8204</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1006">1006</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12285" target="_blank">12285</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1012">1012</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10814" target="_blank">10814</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12633">12633</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12632" target="_blank">12632</a></td>
    <td><a target="_blank" href="https://github.com/miguelbalparda">Miguel Balparda</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/995">995</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8647" target="_blank">8647</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento-engcom/magento2ce/pull/1007">1007</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12378" target="_blank">12378</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12063">12063</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11946" target="_blank">11946</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12661">12661</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12452" target="_blank">12452</a>, <a href="https://github.com/magento/magento2/issues/12660" target="_blank">12660</a></td>
    <td><a target="_blank" href="https://github.com/Tomasz-Silpion">Tomasz Gregorczyk</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1017">1017</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12084" target="_blank">12084</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1021">1021</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12656" target="_blank">12656</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1023">1023</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12667" target="_blank">12667</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1024">1024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10743" target="_blank">10743</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11563">11563</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5774" target="_blank">5774</a></td>
    <td><a target="_blank" href="https://github.com/marinagociu">Marina Gociu</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/949">949</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8615" target="_blank">8615</a></td>
    <td><a target="_blank" href="https://github.com/facundocapua">Facundo Capua</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11070">11070</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10133" target="_blank">10133</a></td>
    <td><a target="_blank" href="https://github.com/schmengler">Fabian Schmengler </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12730">12730</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12713" target="_blank">12713</a></td>
    <td><a target="_blank" href="https://github.com/EfremovaVI">Vasilina </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12743">12743</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9453" target="_blank">9453</a></td>
    <td><a target="_blank" href="https://github.com/strell">Roman Strelenko </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12747">12747</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9720" target="_blank">9720</a></td>
    <td><a target="_blank" href="https://github.com/hannassy">Pavel </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1022">1022</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6965" target="_blank">6965</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12630">12630</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12627" target="_blank">12627</a></td>
    <td><a target="_blank" href="https://github.com/quisse">Tommy Quissens</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12732">12732</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12206" target="_blank">12206</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12739">12739</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6113" target="_blank">6113</a></td>
    <td><a target="_blank" href="https://github.com/Zamoroka">Zamoroka</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12738">12738</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12719" target="_blank">12719</a></td>
    <td><a target="_blank" href="https://github.com/xpoback">Oleh Kravets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12758">12758</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5035" target="_blank">5035</a></td>
    <td><a target="_blank" href="https://github.com/Mobecls">Mobecls</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12759">12759</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12715" target="_blank">12715</a></td>
    <td><a target="_blank" href="https://github.com/StasKozar">StasKozar</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1016">1016</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11743" target="_blank">11743</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11462">11462</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7241" target="_blank">7241</a></td>
    <td><a target="_blank" href="https://github.com/avstudnitz">Andreas von Studnitz</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11686">11686</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5188" target="_blank">5188</a></td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12105">12105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11936" target="_blank">11936</a></td>
    <td><a target="_blank" href="https://github.com/tzyganu">Marius Strajeru</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12636">12636</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12625" target="_blank">12625</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12737">12737</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11953" target="_blank">11953</a></td>
    <td><a target="_blank" href="https://github.com/Zamoroka">Zamoroka</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12751">12751</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12439" target="_blank">12439</a></td>
    <td><a target="_blank" href="https://github.com/Styopchik">Styopchik</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1036">1036</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12712" target="_blank">12712</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12734">12734</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6916" target="_blank">6916</a></td>
    <td><a target="_blank" href="https://github.com/dzianis-yurevich">dzianis-yurevich</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12736">12736</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12374" target="_blank">12374</a></td>
    <td><a target="_blank" href="https://github.com/virtual97">virtual97</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12401">12401</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11885" target="_blank">11885</a></td>
    <td><a target="_blank" href="https://github.com/therool">Ričards Zālītis</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12845">12845</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12844" target="_blank">12844</a></td>
    <td><a target="_blank" href="https://github.com/schmengler">Fabian Schmengler </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12294">12294</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12755" target="_blank">12755</a></td>
    <td><a target="_blank" href="https://github.com/virtual97">virtual97 </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12902">12902</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12900" target="_blank">12900</a></td>
    <td><a target="_blank" href="https://github.com/joni-jones">Ievgen Sentiabov </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12945">12945</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12555" target="_blank">12555</a></td>
    <td><a target="_blank" href="https://github.com/VladimirZaets">Volodymyr Zaets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12752">12752</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4292" target="_blank">4292</a></td>
    <td><a target="_blank" href="https://github.com/Etty">Etty</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12953">12953</a></td>
    <td><a href="https://github.com/magento/magento2/issues/2156" target="_blank">2156</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">Danny Verkade</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12963">12963</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7441" target="_blank">7441</a></td>
    <td><a target="_blank" href="https://github.com/wardcapp">wardcapp</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13015">13015</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10869" target="_blank">10869</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">Danny Verkade</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12649">12649</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12446" target="_blank">12446</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12917">12917</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12894" target="_blank">12894</a></td>
    <td><a target="_blank" href="https://github.com/vasilii-b">Burlacu Vasilii</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13019">13019</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12393" target="_blank">12393</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">Danny Verkade</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11369">11369</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9036" target="_blank">9036</a></td>
    <td><a target="_blank" href="https://github.com/denisristic">Denis Ristic</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12731">12731</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12209" target="_blank">12209</a></td>
    <td><a target="_blank" href="https://github.com/Zamoroka">Zamoroka</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12964">12964</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10415" target="_blank">10415</a></td>
    <td><a target="_blank" href="https://github.com/wardcapp">wardcapp</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13026">13026</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12601" target="_blank">12601</a></td>
    <td><a target="_blank" href="https://github.com/sanjay-wagento">Sanjay Patel</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13041">13041</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12320" target="_blank">12320</a></td>
    <td><a target="_blank" href="https://github.com/monaemipro">monaemipro</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13029">13029</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12320" target="_blank">12320</a></td>
    <td><a target="_blank" href="https://github.com/dasharath-wagento">dasharath-wagento</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13081">13081</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11796" target="_blank">11796</a></td>
    <td><a target="_blank" href="https://github.com/punitv">Punit Vaswani</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13061">13061</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12828" target="_blank">12828</a></td>
    <td><a target="_blank" href="https://github.com/Yonn-Trimoreau">Yonn Trimoreau</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13084">13084</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5129" target="_blank">5129</a></td>
    <td><a target="_blank" href="https://github.com/mayankzalavadia">Mayank Zalavadia</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1018">1018</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6486" target="_blank">6486</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12668">12668</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9969" target="_blank">9969</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">Danny Verkade</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13034">13034</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12221" target="_blank">12221</a></td>
    <td><a target="_blank" href="https://github.com/bhargavmehta">Bhargav Mehta</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13036">13036</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12705" target="_blank">12705</a></td>
    <td><a target="_blank" href="https://github.com/vinayshah">Vinay Shah</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13044">13044</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12876" target="_blank">12876</a></td>
    <td><a target="_blank" href="https://github.com/torhoehn">Torben Höhn</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1032">1032</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8114" target="_blank">8114</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1216">1216</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8453" target="_blank">8453</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12990">12990</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12967" target="_blank">12967</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13033">13033</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12787" target="_blank">12787</a></td>
    <td><a target="_blank" href="https://github.com/devamitbera">Amit Bera</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13066">13066</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12877" target="_blank">12877</a></td>
    <td><a target="_blank" href="https://github.com/jagritijoshi">Jagriti Joshi</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1117">1117</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5550" target="_blank">5550</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13101">13101</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11828" target="_blank">11828</a></td>
    <td><a target="_blank" href="https://github.com/chris-pook">Chris Pook</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1207">1207</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13095" target="_blank">13095</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13141">13141</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11428" target="_blank">11428</a>, <a href="https://github.com/magento/magento2/issues/11497" target="_blank">11497</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13025">13025</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12430" target="_blank">12430</a></td>
    <td><a target="_blank" href="https://github.com/pradeep-wagento">pradeep-wagento</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1163">1163</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12322" target="_blank">12322</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13208">13208</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12714" target="_blank">12714</a></td>
    <td><a target="_blank" href="https://github.com/sanjay-wagento">Sanjay Patel</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/955">955</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8624" target="_blank">8624</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1050">1050</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11897" target="_blank">11897</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
</tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1215">1215</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12147" target="_blank">12147</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1186">1186</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12819" target="_blank">12819</a>, <a href="https://github.com/magento/magento2/issues/12993" target="_blank">12993</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12406">12406</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12342" target="_blank">12342</a></td>
    <td><a target="_blank" href="https://github.com/KarlDeux">Carlos Lizaga</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1217">1217</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13126" target="_blank">13126</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1045">1045</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7768" target="_blank">7768</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1146">1146</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12231" target="_blank">12231</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1245">1245</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5697" target="_blank">5697</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1247">1247</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7213" target="_blank">7213</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12936">12936</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5948" target="_blank">5948</a></td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11060">11060</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10661" target="_blank">10661</a></td>
    <td><a target="_blank" href="https://github.com/elzekool">Elze Kool</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13341">13341</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13327" target="_blank">13327</a></td>
    <td><a target="_blank" href="https://github.com/arnoudhgz">Arnoud Beekman</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13364">13364</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8621" target="_blank">8621</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">enriquei4</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1162">1162</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7760" target="_blank">7760</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1147">1147</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7849" target="_blank">7849</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1192">1192</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12860" target="_blank">12860</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1148">1148</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7848" target="_blank">7848</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1111">1111</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11527" target="_blank">11527</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1167">1167</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7698" target="_blank">7698</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1161">1161</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12574" target="_blank">12574</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1185">1185</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11798" target="_blank">11798</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13498">13498</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13497" target="_blank">13497</a></td>
    <td><a target="_blank" href="https://github.com/igortregub">Igor Tregub</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13528">13528</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12081" target="_blank">12081</a></td>
    <td><a target="_blank" href="https://github.com/mattijv">Matti Vapa</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13563">13563</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11252" target="_blank">11252</a></td>
    <td><a target="_blank" href="https://github.com/Mkennethsmith">Mkennethsmith</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1095">1095</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12817" target="_blank">12817</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1143">1143</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11963" target="_blank">11963</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">p-bystritsky</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13643">13643</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12791" target="_blank">12791</a></td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13761">13761</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13429" target="_blank">13429</a></td>
    <td><a target="_blank" href="https://github.com/aoldoni">Alisson Oldoni</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13770">13770</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13760" target="_blank">13760</a></td>
    <td><a target="_blank" href="https://github.com/r-martins">Ricardo Martins</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1119">1119</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5451" target="_blank">5451</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1168">1168</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8035" target="_blank">8035</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Nickolas Malyovanets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13762">13762</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13595" target="_blank">13595</a></td>
    <td><a target="_blank" href="https://github.com/zolat">zolat</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13682">13682</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10595" target="_blank">10595</a></td>
    <td><a target="_blank" href="https://github.com/gwharton">gwharton</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13777">13777</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13315" target="_blank">13315</a></td>
    <td><a target="_blank" href="https://github.com/Frodigo">Marcin Kwiatkowski</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13811">13811</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13791" target="_blank">13791</a></td>
    <td><a target="_blank" href="https://github.com/koenner01">Koen V.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13038">13038</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12711" target="_blank">12711</a></td>
    <td><a target="_blank" href="https://github.com/pareshpansuriya">Paresh Pansuriya</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13567">13567</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5863" target="_blank">5863</a>, <a href="https://github.com/magento/magento2/issues/8227" target="_blank">8227</a>, <a href="https://github.com/magento/magento2/issues/8957" target="_blank">8957</a>, <a href="https://github.com/magento/magento2/issues/10073" target="_blank">10073</a>, <a href="https://github.com/magento/magento2/issues/13240" target="_blank">13240</a></td>
    <td><a target="_blank" href="https://github.com/adrien-louis-r">Adrien Louis-Rossignol</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13787">13787</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13768" target="_blank">13768</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13817">13817</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4454" target="_blank">4454</a></td>
    <td><a target="_blank" href="https://github.com/cedricziel">Cedric Ziel</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13844">13844</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13350" target="_blank">13350</a>, <a href="https://github.com/magento/magento2/issues/13827" target="_blank">13827</a></td>
    <td><a target="_blank" href="https://github.com/julienanquetil">Julien ANQUETIL</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/1159">1159</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7765" target="_blank">7765</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11513">11513</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11512" target="_blank">11512</a></td>
    <td><a target="_blank" href="https://github.com/andrewhowdencom">Andrew Howden</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13217">13217</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13216" target="_blank">13216</a></td>
    <td><a target="_blank" href="https://github.com/vaaralav">Ville Vaarala</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13641">13641</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13631" target="_blank">13631</a></td>
    <td><a target="_blank" href="https://github.com/schmengler">Fabian Schmengler </a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13709">13709</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12404" target="_blank">12404</a></td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13861">13861</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13006" target="_blank">13006</a></td>
    <td><a target="_blank" href="https://github.com/hiren-wagento">Hiren Patel</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13930">13930</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13899" target="_blank">13899</a></td>
    <td><a target="_blank" href="https://github.com/tadeobarranco">Tadeo Barranco</a></td>
  </tr>



</table>






### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)


### Installation and upgrade instructions
See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.



## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
