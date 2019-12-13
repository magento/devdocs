---
group: release-notes
title: Magento Commerce 2.2.5 Release Notes
---
*Patch code and release notes published on July 1, 2018.*

We are pleased to present Magento Commerce 2.2.5. This release includes multiple enhancements to product security plus bug fixes and enhancements. Check out the over 150 community-contributed fixes!

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues.

## Highlights

Look for the following highlights in this release:

*  Enhancements that help close stored XSS, SQL injection, and cross-site request forgery (CSRF) vulnerabilities. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for more information.

*  Resolution of issues that customers were experiencing when upgrading to Magento 2.2.4 in deployments that span multiple websites. Magento multi-store installations were not using the store view-specific values from the store configuration settings if these settings differed from the global default configuration settings. Instead, Magento used the default configuration for all store views. See  [GitHub-15205](https://github.com/magento/magento2/issues/15205) and [GitHub-15245](https://github.com/magento/magento2/issues/15245) for more detailed discussions of the problems some customers encountered. *Fix submitted by Francesco Marangi in pull request 15929*.

*  Substantial improvements to indexing performance.

*  Over 150 **community contributions**.

*  Improvements to our core bundled extensions.

Looking for more information on these new features as well as many others? Check out [Magento 2.2.x Developer Documentation]({{ site.baseurl }}/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).

### Core code highlights

This release includes significant performance improvements to the core Magento code:

*  <!--- MAGETWO-80789  MAGETWO-88808  MAGETWO-89545 -->  Merchants can now  run the catalog search full text indexer and category product indexer in parallel mode by store view, which can significantly decrease  `indexer:reindex` execution time when running Magento with multiple store views and shared catalogs.

*  <!--- MAGETWO-74154 --> Refactoring of the catalog full text indexer has improved indexing performance up to 15% for very large profiles (600,000 products) and product catalogs with many configurable options (5,000 configurable products and 500 options).

*  <!--- MAGETWO-88775 -->Improving the behavior of swatch product attributes has improved search result page performance up to 31% for catalogs with many configurable product options (for example, 5,000 configurable products and 500 options).

### Community contribution highlights

Highlights of community contributions include  fixes that improve checkout flow and the sorting of simple products:

*  <!--- MAGETWO-87115 -->Customers can now create an account from the Order Confirmation page. Previously, a customer could not populate the required fields to create an account from this page, and Magento displayed an error.

*  <!--- MAGETWO-73479 -->Magento now correctly applies coupon codes that exclude bundle products. Previously, Magento applied these coupons but did not exclude bundle products as expected.

*  <!-- MAGETWO-86227 -->When sorting simple products, which catalog promo price rule is applied for, these products are sorted by a regular price instead disregarding the applied promo price.

*  <!-- MAGETWO-73419 -->When sorting simple products with a required custom option, which catalog promo price rule is applied for, these products are sorted by a regular price instead disregarding the applied promo price.

### Highlights (Magento Shipping)

This release of Magento Shipping adds the following new capabilities:

• With core returns, merchants can select carriers to use for returns and send a return label along with forward fulfillment.

• Batch processing increases automation and merchant efficiency by making it easier to process a large volume of shipments in batches.

• Collection points provide the ability for customers to designate a drop point rather than residence for delivery by carrier.

This release of Magento Shipping also includes additional minor enhancements, such as pagination to improve the Admin experience and multiversion API.

## Fixes

In addition to security enhancements, this release contains the following functional fixes.

### Installation, setup, and deployment

<!-- MAGETWO-88237  -->

*  Magento no longer permits you to re-run an already running cron job. *Fix submitted by Paavo Pokkinen in pull request 12497*. [GitHub-10650](https://github.com/magento/magento2/issues/10650)

### Bundle products

<!--- MAGETWO-86354  -->

*  You can now successfully delete an option from a bundle product.

<!--- MAGETWO-73479  -->

*  Magento now correctly applies coupon codes that exclude bundle products. Previously, Magento applied these coupons but did not exclude bundle products as expected.

### Catalog

<!--- MAGETWO-88808  -->

*  Merchants can now run the catalog search full text indexer and category product indexer in parallel mode by store view.

<!--- MAGETWO-88107  -->

*  The `Category\Collection::joinUrlRewrite` method now returns the URL of the store  whose `storeId` is set on the collection. Previously, this method returned the name of the default store. *Fix submitted by Alessandro Pagnin in pull request 13716*. [GitHub-13704](https://github.com/magento/magento2/issues/13704)

<!--- MAGETWO-81957  -->

*  Sorting products by price now applies catalog rules as expected.

<!--- MAGETWO-73419  -->

*  Sorting products with required custom options by price now works as expected.

<!--- MAGETWO-73008  -->

*  Tier pricing for a single product unit now works as expected. If a tier price is set for one product unit, and this price is lower than the product price or special price, then the product price index table is populated with the tier price.

<!--- MAGETWO-71936  -->

*  Magento now successfully saves products when using a locale that formats dates in this way: DD/MM/YYYY. Previously, when you tried to save a product in a locale where dates are formatted this way, Magento did not save the product, and displayed this error: `Invalid input datetime format`. [GitHub-10485](https://github.com/magento/magento2/issues/10485)

<!--- MAGETWO-54740  -->

*  When you import new products using CSV, Magento no longer lists as in stock any products whose CSV values indicate that they should be represented as out-of-stock.

### CMS content

<!--- MAGETWO-89281  -->

*  When working in the media gallery, you can now successfully delete  any files and folders that are symlinked in `pub/media`. Previously, any files or folders that were symlinked inside the `pub/media` directory could not be deleted because there was a validation check that used `realpath` to test whether the file was outside the media directory base path. Since `realpath` resolved symlinks to actual paths, this check would fail if the actual path were outside  the base path, and would prevent action from being completed.

### Configurable products

<!--- MAGETWO-88925  -->

*  Magento now displays the correct  status for a backordered configurable product on the order view page.

<!--- MAGETWO-86661  -->

*  Magento now displays the correct image for a configurable product on the wishlist. Previously, Magento displayed the image for the parent product rather than for the selected variant. *Fix submitted by Roman K. in pull request 1031*. [GitHub-8168](https://github.com/magento/magento2/issues/8168)

<!--- MAGETWO-87570  -->

*  The **Hide from Product Page** option now works for the child product of a configurable product.

<!--- MAGETWO-71662  -->

*  The **Update on Save** re-index operation now works as expected when re-indexing configurable products after changing options. Previously,  when you manually re-indexed from the command line, your changes to configurable product options were not saved.

### Frameworks

<!--- MAGETWO-87964  -->

*  We've bumped the required minimal PHP version to 7.0.13.

### General

<!--- MAGETWO-85296  -->

*  The product repository now uses `store_id` (if set)  when saving attributes for an existing product. Previously, Magento always saved attribute values for an existing product at the default store level. *Fix submitted by p-bystritsky in pull request 967*. [GitHub-7720](https://github.com/magento/magento2/issues/7720), [GitHub-12395](https://github.com/magento/magento2/issues/12395), [GitHub-12186](https://github.com/magento/magento2/issues/12186)

<!--- MAGETWO-82417  -->

*  The placement of Google Tag Manager code now follows the guidelines in the [Google Tag Manager Developer Guide](https://developers.google.com/tag-manager/devguide). (Previously, the Google Tag Manager code was inserted before the `dataLayer` variable was defined.)

<!--- MAGETWO-77754  -->

*  The Related Products rule for up-sell products with customer segments set to **Specified** now works as expected.

### Gift card

<!--- MAGETWO-85536  -->

*  Magento now displays the correct subtotal when a customer adds multiple gift cards of different amounts to his cart.

### Import/export

<!--- MAGETWO-88265  -->

*  The data check on imported customer information now completes as expected. Previously, when you clicked **Check Data** on a large CSV file created by **System** > **Data Transfer** > **Import**, the request failed, and Magento displayed the timeout spinner.

<!--- MAGETWO- 84942 -->

*  If you remove a product's custom options from the CSV file created during product import,  Magento no longer displays the custom options on the storefront.

### Indexing

<!--- MAGETWO-80789  -->

*  The search indexer is now scoped and multithreaded, which improves  layered navigation, search and indexing actions for complex sites with multiple store views and shared catalogs.

### Orders

<!--- MAGETWO-87197  -->

*  Magento now filters recent orders by store on the customer account page  as expected. *Fix submitted by Alexander Shkurko in pull request 13257*.

<!--- MAGETWO-86399  -->

*  The performance and logic of `Magento\Sales\Helper\Guest` has been improved. *Fix submitted by Alexander Shkurko in pull request 12893*.

### Payment methods

<!--- MAGETWO-87832  -->

*  In multistore environments, Magento now retrieves the correct PayPal Payflow Pro credentials. Previously, Magento always retrieved the credentials that are configured for the default store.

### Performance

<!--- MAGETWO-86745  -->

*  We've removed the `count()` method from the condition section for some loops in a small subset of backend files. When this method is used in a loop condition,  it will be executed at every iteration, which can degrade performance. *Fix submitted by Alexander Shkurko in pull request 13173*.

### Search

<!--- MAGETWO-81901  -->

*  Out-of-stock options for configurable products no longer show up in search and layered navigation results.

<!--- MAGETWO-75769  -->

*  Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.

### Shipping

 {:.bs-callout-info}
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).

<!--- MAGETWO-84257  -->

*  Merchants can now choose whether to request and include tax information from UPS in the rate charged to the customer during checkout.  (This permits merchants  to pass on the tax costs to their customer as part of the overall shipping rate.) *Fix submitted by gwharton in pull request 11707*.

### Staging

<!--- MAGETWO-87855  -->

*  Magento now correctly renders the dates on a Cart Rule staging update when an administrator uses a locale with a different date and time format. Previously, these dates were corrupted.

<!--- MAGETWO-85559  -->

*  You can now successfully edit the start date and time for a Catalog Price Rule schedule update. Previously, if you edited this date or time, Magento threw a 404 error when the new start time arrived.

### Swagger

<!--- MAGETWO-84921  -->

*  Swagger now displays the text area that contains the payload structure of all POST and PUT operations.

### Swatches

<!--- MAGETWO-86332  -->

*  You can now use JavaScript mixins to extend swatch functionality in all supported browsers. *Fix submitted by Renon Stewart in pull request 12929*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

### Testing

<!--- MAGETWO-88291  -->

*  You can now use REST to update the `available_payment_methods` company extension attribute. Previously, Magento set to null whatever  value you passed to the database  `company_payment` table.

<!--- MAGETWO-87487  -->

*  The `phpunit.xml` configuration file is now blacklisted during schema validation static tests (particularly `Magento/Test/Integrity/Xml/SchemaTest.php`).

<!--- MAGETWO-81742 MAGETWO-89250  -->

*  The `\Magento\Test\Php\LiveCodeTest::testCodeStyle`  method now uses whitelist files. *Fix submitted by Adrian Martinez in pull request 11376*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

### URL rewrites

<!--- MAGETWO-86554  -->

*  Magento no longer throws a 404 error when a customer navigates from the Catalog page of the default store to a custom Catalog page on a different store.

### Vertex

<!--- BUNDLE-841  -->

*  The correct tax amount is now included as expected in the Order Total that is listed under the Order Summary section of the Orders page. Previously, the **Tax amount** field was missing from the Order Summary section, which resulted in an incorrect Order Total.

<!--- BUNDLE-966  -->

*  The **including tax** and **excluding tax** fields on the Checkout page now contain correctly calculated prices. Previously, Magento displayed  the same price in these fields.

<!--- BUNDLE-977  -->

*  Magento now displays the **Tax amount** field in the Order Summary section of the Checkout page for orders that contain virtual products.

<!--- BUNDLE-904  -->

*  Merchants can now create a Vertex invoice refund as expected after an order has been canceled.

<!--- BUNDLE-1044  -->

*  We’ve improved the performance of the **Admin Create Order** and **Performance Compare Report in Plain Text - Catalog** (server side) actions.

<!--- BUNDLE-976  -->

*  Magento now prompts you to select order status if a customer does not select an option from the Order Status drop down list when setting the **When to send Invoice to Vertex** option.

<!--- BUNDLE-903  -->

*  The **Allow tax quote request at shopping cart page** option has been removed from the Vertex Setting tab.

<!--- BUNDLE-945  -->

*  Magento now disables Vertex API Status as expected when you set the **Enable Vertex Tax Calculation** option to **no**.

<!--- BUNDLE-902  -->

*  Magento now displays the green checkmark and **Vertex invoice has been sent** message as expected when you set an order’s status to **Suspected Fraud**.

<!--- BUNDLE-905  -->

*  Customers no longer receive a notice about negative tax amount after a merchant creates a refund on Vertex Cloud.

### Visual Merchandiser

<!--- MAGETWO-71554  -->

*  We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).

<!--- NOT NEEDED
MAGETWO-91014 MAGETWO-90943 MAGETWO-90541 MAGETWO-90413 MAGETWO-90362 MAGETWO-90071 MAGETWO-90067 MAGETWO-90041 MAGETWO-89974  MAGETWO-89613 MAGETWO-89610  MAGETWO-88890 MAGETWO-88817 MAGETWO-88812 MAGETWO-88646 MAGETWO-88643 MAGETWO-88601 MAGETWO-88509 MAGETWO-88436 MAGETWO-88326 MAGETWO-88289 MAGETWO-87467 MAGETWO-86990 MAGETWO-86046 MAGETWO-85871 MAGETWO-85135 MAGETWO-80093 MAGETWO-73694 MAGETWO-80908
MAGETWO-86046 MAGETWO-90074 MAGETWO-62150 MAGETWO-89547 MAGETWO-45775 MAGETWO-91074 MAGETWO-91123 --->

## Known issues

Merchants are unable to change a store view’s applied theme in Magento 2.2.5. When a merchant tries to change the **Applied theme** setting for a store view (**Content** > **Design** > **Configuration**), Magento does not change the theme, but instead displays this error: `Something went wrong while saving this configuration: Area is already set`. See [GitHub-14968](https://github.com/magento/magento2/issues/14968) for more information. **Workaround**: Merchants who are running 2.2.5 should apply [patch MAGETWO-93036]( https://magento.com/tech-resources/download#download2224)  or  upgrade to 2.2.6 when it becomes available.

The Amazon Pay. dotmailer, Magento Shipping, and Vertex extensions have the following known issues:

### Amazon Pay known issues

*  Clicking **Save Config** on the Payment Methods page while configuring your Amazon Pay settings can result in a JavaScript error. **Workaround**: Refresh the page.

<!-- BUNDLE--1480  -->

*  Magento throws the following exception during checkout if you disable Amazon Pay when installing Magento using the web wizard:  `Exception #0 (UnexpectedValueException): Payment model name is not provided in config!`.  Note that this error occurs only if one or two of the three Amazon modules shipped with Magento are disabled. If all three Amazon modules are disabled, this problem does not occur. [GitHub-16167](https://github.com/magento/magento2/issues/16167) <!--- BUNDLE-1480 -->

<!-- BUNDLE--15453  -->

*  Magento displays the Amazon Pay option during checkout with multiple addresses even though multi shipping is not supported with Amazon Pay.

<!-- BUNDLE--1450  -->

*  Magento does not display the Amazon Pay button during checkout when the customer selects Klarna or PayPal as a payment method for an order containing a virtual product.

<!-- BUNDLE--1427  -->

*  Magento does not display the Amazon Pay button on the Checkout page if an order contains a virtual product.

<!-- BUNDLE--1426  -->

*  Customer cannot return to standard checkout flow by clicking the **Return to standard checkout** button.

<!-- BUNDLE--1425  -->

*  Customer cannot leave the Amazon Pay checkout page and return to the generic checkout page when an order contains virtual products.

<!-- BUNDLE--1424  -->

*  Customers cannot add a new shipping address to an order that contains virtual products.

### dotmailer known issues

The following Dotmailer behaviors have been observed when Magento Commerce for B2B is deployed with split databases:

<!-- BUNDLE--1390  -->

*  Customer, subscriber, and guest data are not being successfully synced. As a result, newly created contacts display the  **Not imported** status in the contact report, and the relevant address books in dotmailer remain empty.

<!-- BUNDLE--1408  -->

*  Review remainder email cannot be sent to a subscribed customer if review remainder emails are not enabled for non-subscribed customers.

<!-- BUNDLE--1398  -->

*  Magento cannot send Customer and Guest Abandoned Cart email if these emails are not allowed for non-subscribed contacts.

<!-- BUNDLE--1389  -->

*  When a merchant clicks the **Run Contact Sync** button, Magento throws an exception when a merchant clicks the Run Contact Sync button.

<!-- BUNDLE--526  -->

*  Magento throws an error during the creation of a subscriber or customer, but still creates the new subscriber or customer.

### Magento Shipping known issues

<!-- BUNDLE--1448  -->

*  A merchant can create multiple return shipments for an already shipped return.

### Vertex known issues

<!-- BUNDLE--1446  -->

*  The order amount on Vertex Cloud differs from the order information displayed by Magento  when Catalog Price Rule is applied.

<!-- BUNDLE--910  -->

*  Magento applies taxes to a custom price even when the **Original Price only** option from the Apply Tax On drop-down list has been selected.

<!-- BUNDLE--1385  -->

*  Magento displays an inaccurate Vertex API Status message when  the **Vertex Address Validation API Url** and **Vertex Validation Function** fields contain invalid values.

<!-- BUNDLE--1399  -->

*  The Transaction Details reports and Transaction Summary reports have slight irregularities.  Magento does not include product price and taxes in the Transaction Details Report "Gross Amount" and "Tax Amount" columns, and does not include product price in the Transaction Summary Report.

<!-- BUNDLE--1405  -->

*  The **Vertex invoice has been sent** message appears momentarily on the Review and Payments page, but not as expected on the Success page.

<!-- BUNDLE--1410  -->

*  When a customer places an order, Magento calculates the amount of tax and sends a Vertex invoice even when the Company Information tab is missing  the company street, company city, and company postal code.

<!-- BUNDLE--1457  -->

*  Magento does not display the Vertex invoice has been sent message as expected when the payment method is Authorize.net and  the order status is Suspect Fraud.

<!-- BUNDLE--1325  -->

*  Magento does not display the Vertex customer code field on the All Customers page as expected, which undermines the ability to filter by customer code.

<!-- BUNDLE--1432  -->

*  Magento does not display the tax section of the Order Summary that is included on the Review and Payments page during checkout when the shopping cart includes a virtual product.

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
    <th>Contributing community member</th>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15929">15929</a></td>
    <td>15205, 15245</td>
    <td><a target="_blank" href="https://github.com/fmarangi">Francesco Marangi</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13956">13956</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/koenner01">Koen V.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13878">13878</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13769" target="_blank">13769</a></td>
    <td><a target="_blank" href="https://github.com/pawcioma">pawcioma</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13943">13943</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12405" target="_blank">12405</a>, <a href="https://github.com/magento/magento2/issues/12421" target="_blank">12421</a></td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13855">13855</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13804" target="_blank">13804</a></td>
    <td><a target="_blank" href="https://github.com/ankurvr">Ankur Raiyani</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14011">14011</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/chedaroo">Richard Jesudason</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14013">14013</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sandermangel">Sander Mangel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13977">13977</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13607">13607</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13385" target="_blank">13385</a></td>
    <td><a target="_blank" href="https://github.com/shyamranpara">Shyam Ranpara</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">enriquei4</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
    <td><a target="_blank" href="https://github.com/pradeep-wagento">pradeep-wagento</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14044">14044</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/avstudnitz">Andreas von Studnitz</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12929">12929</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10559" target="_blank">10559</a></td>
    <td><a target="_blank" href="https://github.com/srenon">Renon Stewart</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13884">13884</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5463" target="_blank">5463</a></td>
    <td><a target="_blank" href="https://github.com/k4emic">Mads Nielsen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13894">13894</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/evgk">evgk</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13989">13989</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13988" target="_blank">13988</a></td>
    <td><a target="_blank" href="https://github.com/krzksz">Mateusz Krzeszowiak</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14029">14029</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4919" target="_blank">4919</a></td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14042">14042</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/jasperzeinstra">jasperzeinstra</a></td>
  </tr>

   <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14083">14083</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RandeKnight">RandeKnight</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
    <td><a target="_blank" href="https://github.com/Frodigo">Marcin Kwiatkowski</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14121">14121</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14010" target="_blank">14010</a></td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14041">14041</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/KarlDeux">Carlos Lizaga</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14136">14136</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ccasciotti">Cristiano Casciotti</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14154">14154</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/nfourteen">nfourteen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14189">14189</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/EliasZ">Elias</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11707">11707</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/gwharton">gwharton</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14156">14156</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/aschrammel">Andreas Schrammel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14091">14091</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14138" target="_blank">14138</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
    <td><a target="_blank" href="https://github.com/brideo">Nathan McBride</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13716">13716</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13704" target="_blank">13704</a></td>
    <td><a target="_blank" href="https://github.com/alepane21">Alessandro Pagnin</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/cstergianos">cstergianos</a></td>
 </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14303">14303</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13992" target="_blank">13992</a></td>
    <td>cream-julian</td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a></td>
    <td><a target="_blank" href="https://github.com/crisdiaz">cristina-diaz</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14358">14358</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mageprince">Prince Patel</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13414">13414</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/VincentMarmiesse">Vincent Marmiesse</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14308">14308</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
    <td><a target="_blank" href="https://github.com/swnsma">Oleksandr Kravchuk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P.</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14361">14361</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11930" target="_blank">11930</a>, <a href="https://github.com/magento/magento2/issues/10700" target="_blank">10700</a> </td>
    <td><a target="_blank" href="https://github.com/xtremeperf">Doug</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14060">14060</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14325">14325</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7816" target="_blank">7816</a>, <a href="https://github.com/magento/magento2/issues/12852" target="_blank">12852</a></td>
    <td><a target="_blank" href="https://github.com/mikewhitby">Mike Whitby</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>
    <td><a target="_blank" href="https://github.com/paveq">Paavo Pokkinen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14288">14288</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14385">14385</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13716" target="_blank">13716</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
    <td><a target="_blank" href="https://github.com/ArjenMiedema">Arjen Miedema</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14350">14350</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14249" target="_blank">14249</a></td>
    <td><a target="_blank" href="https://github.com/cdiacon">Calin</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14403">14403</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/edie-pasek">edie-pasek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14440">14440</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13942">13942</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13582" target="_blank">13582</a></td>
    <td><a target="_blank" href="https://github.com/bordeo">Alex</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14293">14293</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8837" target="_blank">8837</a></td>
    <td>Andriy Kravets</td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14439">14439</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sanderjongsma">Sander Jongsma</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14445">14445</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14455">14455</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14466">14466</a></td>
    <td>N/A</td>
    <td>NamrataChangani</td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JDavidVR">David</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a></td>
    <td><a target="_blank" href="https://github.com/afirlejczyk">afirlejczyk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14498">14498</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14504">14504</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/quisse">Tommy Quissens</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13629">13629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Corefix">Theis Corfixen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13831">13831</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/irs">Vadim Kusakin</a></td>
  </tr>

<tr>
    <td>magento/magento2ce/pull/14176</td>
    <td><a href="https://github.com/magento/magento2/issues/14049" target="_blank">14049</a></td>
    <td><a target="_blank" href="https://github.com/joost-florijn-kega">joost-florijn-kega</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14319">14319</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6879" target="_blank">6879</a></td>
    <td><a target="_blank" href="https://github.com/MateuszChrapek">MateuszChrapek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13950" target="_blank">13950</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tkotosz">Tibor Kotosz</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14599">14599</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14572" target="_blank">14572</a></td>
    <td><a target="_blank" href="https://github.com/PierreLeMaguer">Pierre LeMaguer</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13016">13016</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9666" target="_blank">9666</a>, <a href="https://github.com/magento/magento2/issues/12323" target="_blank">12323</a></td>
    <td><a target="_blank" href="https://github.com/rossmc">Ross</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14048">14048</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14035" target="_blank">14035</a></td>
    <td><a target="_blank" href="https://github.com/kamilszewczyk">Kamil Szewczyk</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14629">14629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/AnshuMishra17">AnshuMishra17</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14635">14635</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14465" target="_blank">14465</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14668">14668</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/surya07081995">Suraj kumar prasad </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14678">14678</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/strell">Roman Strelenko </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14681">14681</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13652" target="_blank">13652</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14688">14688</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/net32">Isaias</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14696">14696</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

</table>

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull Request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Balance Internet</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
  </tr>

<tr>
    <td>Comwrap</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
  </tr>

<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Divante</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a>, <a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
  </tr>

  <tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Interactiv4</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a> </td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a>, <a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a>, <a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a>, <a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
  </tr>

<tr>
    <td>Inviqa</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>ISM eCompany</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
  </tr>

  <tr>
    <td>MediaCT</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
  </tr>

<tr>
    <td>Something Digital</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13898">13898</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12792" target="_blank">12792</a>, <a href="https://github.com/magento/magento2/issues/13778" target="_blank">13778</a></td>
  </tr>

  <tr>
    <td>Vaimo</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14447">14447</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>

  </tr>

<tr>
    <td>Wagento</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
  </tr>

</table>

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)

### Installation and upgrade instructions

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
