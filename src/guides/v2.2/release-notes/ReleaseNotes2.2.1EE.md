---
group: release-notes
title: Magento Commerce 2.2.1 Release Notes
---
*Patch code and release notes published on November 7, 2017.*

We are pleased to present Magento Commerce 2.2.1. This release includes numerous functional fixes and enhancements.

## Highlights

Look for the following highlights in this release:

*  Integrated Signifyd Fraud Protection is now available in Magento Open Source. See [Signifyd fraud protection]({{ site.baseurl }}/guides/v2.2/payments-integrations/signifyd/signifyd.html) for more information.

*  Ability to implement translations from themes. We’ve also significantly reduced JavaScript-related translation issues.

*  Improvements to how the PayPal Express Checkout payment method processes virtual products.

*  Multiple enhancements to product security. See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information.

*  Twenty-two community-submitted bug fixes and multiple pull requests.

Looking for more information on these new features as well as many others? Check out  [Magento 2.2 Developer Documentation]({{ site.baseurl }}/guides/v2.2/).

## Security enhancements

Magento 2.2.1 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information.

## Fixed issues

### Installation, upgrade, deployment

<!--- 80225  -->

*  We’ve improved the message that Magento displays during upgrade if any schema or data version in the `setup_modules` database is higher than the current module version in the code. *Fix submitted by community member <a href="https://github.com/schmengler" target="_blank">Fabian Schmengler</a> in pull request <a href="https://github.com/magento/magento2/pull/11064" target="_blank">11064</a>.*

<!--- 71893  -->

*  If you do not specify `—base_url` during installation, all URLs now use the host and port of the current request to create URLs.

<!--- 75452  -->

*  When a callback during commit throws an exception, the calling plugin can now distinguish this exception from an unsuccessful commit and logs an exception. Previously, Magento threw an “Asymmetric transaction rollback error”. [GitHub-9955](https://github.com/magento/magento2/issues/9955)

<!--- 80201  -->

*  We’ve resolved a fatal error in the repository generator. Both `InputException` and `NoSuchEntityException` now require a Phrase object as their first constructor argument.  [GitHub-10601](https://github.com/magento/magento2/issues/10601)

### AMQP

<!--- 72288  -->

*  The `inventoryQtyCounter` consumer now works without having RabbitMQ installed.

### Catalog

<!--- 71520  -->

*  Magento now displays products that are filtered to a particular store view even when the corresponding store view has been deleted. Previously, Magento displayed a continuously spinning  spinner widget and this error message: **A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later.**

<!--- 72382  -->

*  You can now save custom shared catalogs.

<!--- 78522  -->

*  Magento no longer displays a 404 error when you change category permissions from Product Detail pages when multistore view is enabled.

<!--- 75460  -->

*  `LowestPriceOptionsProvider` now returns products with the `tax_class_id` attribute, which is used for price calculation operations such as  tax adjustment. [GitHub-6729](https://github.com/magento/magento2/issues/6729), [GitHub-6457](https://github.com/magento/magento2/issues/6457), [GitHub-7362](https://github.com/magento/magento2/issues/7362)

<!--- 75453  -->

*  The grouped product page now  shows the lowest price for a simple product.  [GitHub-9266](https://github.com/magento/magento2/issues/9266)

<!--- 75221  -->

*  We’ve fixed an issue with `priceScope` that had resulted in the storefront not displaying product prices that should be displayed.

### Cart and checkout

<!--- 71984  -->

*  Magento now provides a **Login** button so that you can resume your checkout process if you return to the check out page after leaving it mid-order.

### Configurable products

<!--- 72582  -->

*  Magento no longer displays the inappropriate  product price when a configurable product has two price options. Previously, Magento displayed the  out-of-stock price of a configurable product when both an out-of-stock and in-stock price were configured.

<!--- 72370  -->

*  Configurable products no longer show up on category page when all children are disabled by a mass action, and the **display out-of-stock products** setting is off.

<!--- 72747  -->

*  If a configurable product is part of a shipment that is being created by REST, only the parent's quantity will count towards the total quantity of shipped items. Previously, Magento counted both child and parent products when calculating quantity.

<!--- 72582  -->

*  Configurable product pricing now reflects only in-stock configurations as expected.

### Frameworks

<!--- 67097  -->

*  You can now run Magento in an environment where Redis cache is installed and the PHPRedis extension is enabled.

<!--- 72860  -->

*  Magento now properly loads default values for `ArraySerialized` fields.

<!--- 75458  -->

*  You can now set a default value to fields with config field type `image` or `file`. [GitHub-10253](https://github.com/magento/magento2/issues/10253)

<!--- 80178, 80179, 80185   -->

*  We’ve removed `Zend_Json` from the data object, test suite, and package information. [GitHub-10306](https://github.com/magento/magento2/issues/10306), [GitHub-10320](https://github.com/magento/magento2/issues/10320), [GitHub-10340](https://github.com/magento/magento2/issues/10340)

<!--- 80180  -->

*  We’ve replaced the usage of `Zend_Json::encode`  in the setup marketplace tests. [GitHub-10329](https://github.com/magento/magento2/issues/10329)

<!--- 80187  -->

*  We’ve removed the usage of `Zend_Json` from the JSON controller. [GitHub-10342](https://github.com/magento/magento2/issues/10342)

<!--- 80186  -->

*  We’ve removed `Zend_Json` from `Setup/Migration.php`. [GitHub-10341](https://github.com/magento/magento2/issues/10341)

<!--- 80177  -->

*  We have replaced `Zend_Json`  with `\Magento\Framework\Serialize\JsonConverter::convert` in customer data.  [GitHub-10259](https://github.com/magento/magento2/issues/10259)

### General

<!--- 80096  -->

*  We've fixed JavaScript date validation on the storefront. Previously, validation of the date of birth field during customer registration when changing the default locale did not work. *Fix submitted by community member <a href="https://github.com/joachimVT" target="_blank">Joachim Vanthuyne</a> in pull request <a href="https://github.com/magento/magento2/pull/11067" target="_blank">11067</a>.*

<!--- 80112  -->

*  We’ve added a CSS selector to remove an additional top-margin that was rendered when you added  a link widget to the footer in the Luma theme. Previously, when you added new footer links, the block of footer links did not line up with the default footer links. *Fix submitted by community member <a href="https://github.com/fragdochkarl" target="_blank">Sandro Wagner</a> in pull request <a href="https://github.com/magento/magento2/pull/11063" target="_blank">11063</a>.*

<!--- 71980  -->

*  You can now remove system customer address and customer attributes from specific forms to prevent them from displaying on the frontend.

<!--- 67296  -->

*  String localizations now work as expected when phrases include text wrapped with single quotation marks.

<!--- 69964  -->

*  PHPCS can now correctly parse the syntax of PHP 7.x return types.

<!--- 72353  -->

*  You can now remove custom attributes from the Use in Forms grid.

<!--- 75455  -->

*  You can now generate unsecured URLs even when the current URL is secure.

<!--- 80204  -->

*  The Checkout authentication popup now contains the correct message. [GitHub-9533](https://github.com/magento/magento2/issues/9533), [GitHub-10627](https://github.com/magento/magento2/issues/10627)

<!--- 80192  -->

*  The **Reset** button no longer causes a JavaScript error on the URL rewrite creation page. [GitHub-10462](https://github.com/magento/magento2/issues/10462)

<!--- 80195  -->

*  Websites that conduct transactions in multiple currencies can now send currency to Google Analytics. [GitHub-10508](https://github.com/magento/magento2/issues/10508)

<!--- 75456  -->

*  The Products Ordered report now shows the simple (child) products of configurable products.

<!--- 80198  -->

*  Creating a new product with a custom attribute set now works as expected. [GitHub-10565](https://github.com/magento/magento2/issues/10565), [GitHub-10575](https://github.com/magento/magento2/issues/10575)

<!--- 80194  -->

*  Cookie lifetime works as expected when you set the form_key value  to zero (0). [GitHub-10528](https://github.com/magento/magento2/issues/10528)

<!--- 75457  -->

*  We’ve fixed an issue where Magento did not retrieve relevant data when displaying reviews if `$displayIfNoReviews` was set to false. [GitHub-4530](https://github.com/magento/magento2/issues/4530)

<!--- 71980  -->

*  You can now remove the system customer address and customer attributes from specific forms and prevent them from displaying on the frontend.

### Indexing

<!--- 72866  -->

*  We’ve fixed multiple issues where indexes were invalidated as a result of typical import, scheduled import, and catalog permission tasks.

### Orders

<!--- 77966  -->

*  You can now use PayPal Express Checkout  to place an order in a split-database environment.

<!--- 72393  -->

*  If a credit card error occurs on an order, the user can now correct the error and successfully create a new order. Previously, Magento displayed the following error on any subsequent order, even when you entered accurate credit card information: "A customer with the same email already exists in an associated website”.

<!--- 80102  -->

*  We’ve added a `name` attribute to the layout default renderer, and you can now add a new column to the **Admin Sales > Order table**. Previously,  the layout default renderer lacked a `name` attribute. *Fix submitted by community member <a href="https://github.com/gsomoza" target="_blank">Gabriel Somoza</a> in pull request <a href="https://github.com/magento/magento2/pull/11076" target="_blank">11076</a>.*

### Payment methods

<!--- 72351  -->

*  Double-clicking the **Place Order** button when using the  Braintree payment method to place an order no longer creates duplicate order requests. [GitHub-10767](https://github.com/magento/magento2/issues/10767)

<!--- 71050  -->

*  Magento now completes processing an order if the customer needs to re-enter credit card information during the order process. Previously, Magento returned this error `No such entity with customerId = 0`.

### Search

<!--- 77777  -->

*  Search terms from the same synonym group now return the same results.

<!--- 75935  -->

*  A search query results are now more consistent. Previously, identical search terms entered in different browser tabs resulted in different search results.

<!--- 71552  -->

*  You can now search for attribute values on the store-view level.

<!--- 72267  -->

*  Magento now displays grouped products in the Shared Catalog page when Elasticsearch is enabled.

### Sitemap

<!--- 75459  -->

*  Sitemap no longer crashes if the scope of the name attribute is set to global. [GitHub-5941](https://github.com/magento/magento2/issues/5941), [GitHub-8999](https://github.com/magento/magento2/issues/8999)

### Staging

<!--- 60953  -->

*  Bundle simple products now reflect expected changes after a scheduled update.

### Visual Merchandiser

<!--- 71554  -->

*  We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).

<!--- 71986  -->

*  Visual Merchandiser now retains page view options and position after you remove a product. Previously, when you removed a product from a category, and you weren't on the first page, Magento returned you to the first page.

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
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11067">11067</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4248" target="_blank">4248</a>, <a href="https://github.com/magento/magento2/issues/6350" target="_blank">6350</a>, <a href="https://github.com/magento/magento2/issues/6858" target="_blank">6858</a>, <a href="https://github.com/magento/magento2/issues/6831" target="_blank">6831</a>, <a href="https://github.com/magento/magento2/issues/9743" target="_blank">9743</a></td>
    <td><a target="_blank" href="https://github.com/joachimVT">Joachim Vanthuyne</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11054">11054</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/schmengler">Fabian Schmengler /></a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11056">11056</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/stevenvdp">Steven Vandeputte</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11058">11058</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Quinten">Quinten Clause</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11063">11063</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6712" target="_blank">6712</a></td>
    <td><a target="_blank" href="https://github.com/fragdochkarl">Sandro Wagner</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11064">11064</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9008" target="_blank">9008</a>, <a href="https://github.com/magento/magento2/issues/9981" target="_blank">9981</a></td>
    <td><a target="_blank" href="https://github.com/schmengler">Fabian Schmengler /></a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11076">11076</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10824" target="_blank">10824</a></td>
    <td><a target="_blank" href="https://github.com/gsomoza">Gabriel Somoza</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11048">11048</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10417" target="_blank">10417</a></td>
    <td><a target="_blank" href="https://github.com/PieterCappelle">Pieter Cappelle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11049">11049</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10697" target="_blank">10697</a></td>
    <td><a target="_blank" href="https://github.com/avdb">@avdb</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11069">11069</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10474" target="_blank">10474</a></td>
    <td><a target="_blank" href="https://github.com/Echron">Stijn Duynslaeger</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11127">11127</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/niccifor">@niccifor</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11138">11138</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/jokeputs">Joke Puts</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11147">11147</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11154">11154</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9877" target="_blank">9877</a></td>
    <td><a target="_blank" href="https://github.com/denysbabenko">Denys Babenko</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11160">11160</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10803" target="_blank">10803</a></td>
    <td><a target="_blank" href="https://github.com/strell">Roman Strelenko</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11200">11200</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7356" target="_blank">7356</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11168">11168</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10738" target="_blank">10738</a></td>
    <td><a target="_blank" href="https://github.com/maksek">Max Yekaterynenko</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11223">11223</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9900" target="_blank">9900</a></td>
    <td><a target="_blank" href="https://github.com/convenient">Luke Rodgers</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11229">11229</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10611" target="_blank">10611</a></td>
    <td><a target="_blank" href="https://github.com/convenient">Luke Rodgers</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11050">11050</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11044" target="_blank">11044</a></td>
    <td><a target="_blank" href="https://github.com/schmengler">Fabian Schmengler /></a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11134">11134</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10775" target="_blank">10775</a></td>
    <td><a target="_blank" href="https://github.com/Zifius">Alexander Turiak</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11084">11084</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9920" target="_blank">9920</a></td>
    <td><a target="_blank" href="https://github.com/rubenRP">Rubén Rodríguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11246">11246</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11231" target="_blank">11231</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">@crissanclick</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11254">11254</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10317" target="_blank">10317</a></td>
    <td><a target="_blank" href="https://github.com/romainruaud">Romain Ruaud</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11155">11155</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11089" target="_blank">11089</a></td>
    <td><a target="_blank" href="https://github.com/renttek">Julian</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11291">11291</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9243" target="_blank">9243</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11165">11165</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7582" target="_blank">7582</a></td>
    <td><a target="_blank" href="https://github.com/bka">Bernhard</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11297">11297</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5105" target="_blank">5105</a></td>
    <td><a target="_blank" href="https://github.com/michielgerritsen">Michiel Gerritsen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11327">11327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10812" target="_blank">10812</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11081">11081</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RakeshJesadiya">Rakesh  Jesadiya</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11183">11183</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11166" target="_blank">11166</a></td>
    <td><a target="_blank" href="https://github.com/larsroettig">Lars Roettig</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11205">11205</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11163" target="_blank">11163</a></td>
    <td><a target="_blank" href="https://github.com/Tomasz-Silpion">Tomasz Gregorczyk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11219">11219</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mszydlo">@mszydlo</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11249">11249</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/navarr">Navarr Barnier</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11345">11345</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/davidangel">David Angel</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11349">11349</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11329" target="_blank">11329</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11390">11390</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8958" target="_blank">8958</a></td>
    <td><a target="_blank" href="https://github.com/jahvi">Javier Villanueva</a></td>
  </tr>
</table>

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)

For more information, [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.2 General Availability (GA) [using Composer]({{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html).

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
