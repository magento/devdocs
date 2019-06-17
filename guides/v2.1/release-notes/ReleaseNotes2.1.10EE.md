---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.10 Release Notes
menu_title: Magento Commerce 2.1.10 Release Notes
menu_order: 254
level3_menu_node: level3child
level3_subgroup: ee21-relnotes
---

*	TOC
{:toc}

*Patch code and release notes were published on November 7,  2017.*


We are pleased to present Magento Commerce  2.1.10. This release includes important enhancements to your Magento software.

## Highlights

Magento 2.1.10 contains over 50 security fixes and functional enhancements. Look for the following highlights in this release:

* Significant reduction in JavaScript-related translation issues.

* Improvements to how the PayPal Express Checkout payment method processes virtual products.

* Multiple enhancements to product security. See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information.

* Forty-four community-submitted bug fixes and multiple pull requests. These pull requests feature improvements in caching for configurable products (pull request [9809](https://github.com/magento/magento2/pull/11469)) and enhancements to the URL rewrite mechanism (pull request [10164](https://github.com/magento/magento2/pull/10164)).

* Support for management of multiple instances in the same crontab. These two new CLI commands (`cron:install` and `cron:remove`) were submitted by community member [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4).

## Security enhancements

Magento 2.1.10 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information.

## Fixed issues

### Installation, setup, and deployment

<!--- 58072 -->*  Magento no longer creates an `i18n` directory under the system root directory (`/`) when you run the `bin/magento i18n:pack` command to install a language pack. [GitHub-6260](https://github.com/magento/magento2/issues/6260)


<!---  70137-->* Component Manager can now handle custom composer modules. Previously, when you opened  **System > Tools > Web Setup > Component Manager** after using Composer to install a custom extension, a PHP error occurred, and Magento did not display the list of installed extensions. *Fix submitted by [JTimNolan](https://github.com/JTimNolan) in pull request 9692.* [GitHub-6718](https://github.com/magento/magento2/issues/6718)

<!--- 72253 -->*  Custom theme static content now deploys without overriding  static content files.  *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 10753.* [GitHub-7569](https://github.com/magento/magento2/issues/7569), [GitHub-3754](https://github.com/magento/magento2/issues/3754), [GitHub-4725](https://github.com/magento/magento2/issues/4725)

### Cart and checkout

<!--- 68812 -->* You cannot check out as a guest customer until you delete any lingering long-term cookies by clicking **Not me**. Previously, in environments where **Enable Persistence** was set to **Yes**, you could log in as a guest and potentially complete an order that another customer had initiated.

<!--- 57683 -->* Magento now displays the checkout agreement validation for Terms and Condition acknowledgment after a customer has changed his or her payment method. [GitHub-6224](https://github.com/magento/magento2/issues/6224)

<!--- 71985 -->* Magento now provides a **Login** button so that you can resume your checkout process if you return to the check out page after leaving it mid-order.

<!--- 69856 -->* Magento now displays the correct error message when a customer enters an invalid discount code during checkout. [GitHub-7230](https://github.com/magento/magento2/issues/7230)

<!--- 69797 -->* Credit card information now persists as expected after a customer enters a promotion code during checkout. Previously, after a customer entered credit card information and a discount code, and then clicked **Place Order**, Magento emptied the credit card information fields.

<!--- 58914 -->* The `collectRates()` method now obtains full address details for registered customers when the customer opens the Checkout page with an existing shipping address.

### Catalog

<!--- 69080 -->* The quantity field for a product on the checkout page is now properly updated after you change the product quantity.

<!--- 70062 -->* Magento now includes disabled products when filtering product by price in the Admin. Previously, when you filtered products by price in the Admin, the total number of products was less than the unfiltered list of products.


<!--- 69621 -->* You can now sort the attribute table in the Add Attribute section of the Admin’s Product edit panel while you are adding an attribute to a product.

<!--- 70521 -->* You can now save content that you’ve entered using the WYSIWYG editor when the **Enable WYSIWYG Editor** setting is set to **Disabled by Default**. Previously, a JavaScript error occurred.

<!--- 57153 -->* Magento now correctly displays custom options at the store-view level. [GitHub-2908](https://github.com/magento/magento2/issues/2908), [GitHub-5885](https://github.com/magento/magento2/issues/5885), [GitHub-5612](https://github.com/magento/magento2/issues/5612) 

<!--- 69560 -->* Magento no longer displays a price for out-of-stock configurable products. Previously, Magento displayed a price of zero (0) when a configurable product was out-of-stock.

<!--- 72252, 61315 -->* Magento no longer pre-fills the **Set Product as New from Date** or **Design Active Form** dates when you assign a special price in Advanced Pricing. Previously, these fields were pre-filled with the creation date, and any product that was saved with a special price was also incorrectly set as new. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 10751*. [GitHub-4387](https://github.com/magento/magento2/issues/4387), [GitHub-7448](https://github.com/magento/magento2/issues/7448)

<!--- 75315 -->* Product page attribute labels are now translated as expected when languages other than English are used. Previously, these fields were empty. *Fix submitted by [Janusz Janczy](https://github.com/Januszpl) in pull request 10932*. [GitHub-10738](https://github.com/magento/magento2/issues/10738)

<!--- 81968 -->*  Magento now displays product alerts on the Product edit page of the Admin. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11448*. [GitHub-10007](https://github.com/magento/magento2/issues/10007)

<!--- 75222 -->*  We've fixed an issue prices weren't saved correctly when  **Catalog Price Scope** was set to **Website**.

### Configurable products

<!--- 58515, 70606 -->* Simple product videos now display the embedded video player instead of the thumbnail image. [GitHub-6360](https://github.com/magento/magento2/issues/6360), [GitHub-8882](https://github.com/magento/magento2/issues/8882) 


<!--- 58395 -->* You can now save a configurable product for which you’ve set the **Weight** value to **this item has no weight**.  Previously, Magento displayed this error, `Notice: Undefined index: weight in \magento2ce\app\code\Magento\ConfigurableProduct\Model\Product\VariationHandler.php on line 154`.

<!--- 57007 -->* Magento now displays tier prices of simple or virtual products on the configurable products page. [GitHub-3759](https://github.com/magento/magento2/issues/3759)

<!--- 71637, 72251  -->* Fixed an issue with the PHP `getPrice()` method that resulted in various frontend errors, including a fatal error when you try to view a shopping cart that contains an out-of-stock product. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 10750*. [GitHub-10206](https://github.com/magento/magento2/issues/10206), [GitHub-5519](https://github.com/magento/magento2/issues/5519)

<!--- 71136 -->* You can now save a value for an attribute that is shared between related, upsell, or cross-sell products that have different attribute sets. Previously, when a configurable product had another configurable product with a different attribute set as a related product, cross sell, or upsell, and both attribute sets share a multiselect attribute, the value for that multiselect attribute could not be updated for the product.


<!--- 69587 -->* We've fixed the behavior of the configurable attributes cache. Previously, when Magento loaded configurable attributes, it then stored results in the cache. If Magento subsequently tried to load results from the cache, the `hasCacheData` method always returned false. *Fix submitted by [Teun Lassche](https://github.com/thlassche) in pull request 9809*. [GitHub-6999](https://github.com/magento/magento2/issues/6999)

<!--- 63984 -->* Magento now displays the correct configurable product price based on the website to which it is assigned. Previously, Magento displayed the lowest price for the product, no matter which price was assigned to the product on a particular website.

### General

<!--- 63816 -->* We’ve fixed an issue with session behavior that resulted in different customer sessions being shared between different customers on two websites.


<!--- 58526 -->* You can now successfully reset a customer password when the **Website Restrictions** setting is enabled. Previously, Magento redirected you to `customer/account/login/`, from which you could not change a password.


<!--- 70148 -->* Additional Admin users with roles scoped to only one of multiple websites cannot edit CMS pages. Previously, under these circumstances, Magento directed the Admin to an error page.


<!--- 71701 -->* In environments running Varnish, the menu item of the active category page is now handled as the active class as expected. Previously, activating cache interfered with Magento setting the appropriate CSS class to active in environments where Varnish was enabled. [GitHub-6609](https://github.com/magento/magento2/issues/6609)

<!--- 70218 -->* Magento no longer displays an empty minicart when you disable full page cache after login. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 10050*. [GitHub-5377](https://github.com/magento/magento2/issues/5377), [GitHub-4170](https://github.com/magento/magento2/issues/4170), [GitHub-6882](https://github.com/magento/magento2/issues/6882)

<!--- 70838-->*  You can now create a product attribute text swatch with a value of "0" (zero). Previously, Magento displayed the error, `Admin is a required field in the each row`. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 10282*. [GitHub-9619](https://github.com/magento/magento2/issues/9619), [GitHub-10266](https://github.com/magento/magento2/issues/10266)

<!--- 72249 -->* The `validate-email` error string can now be translated.  *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 10745*.  [GitHub-6622](https://github.com/magento/magento2/issues/6622)

<!--- 72250 -->* We've fixed a range of JavaScript translation issues, in particular issues related to interactions between general locale translations and theme CSV files. [GitHub-4883](https://github.com/magento/magento2/issues/4883), [GitHub-5883](https://github.com/magento/magento2/issues/5883), [GitHub-5861](https://github.com/magento/magento2/issues/5861), [GitHub-5820](https://github.com/magento/magento2/issues/5820), [GitHub-5509](https://github.com/magento/magento2/issues/5509), [GitHub-6022](https://github.com/magento/magento2/issues/6022), [GitHub-5995](https://github.com/magento/magento2/issues/5995), [GitHub-7525](https://github.com/magento/magento2/issues/7525), [GitHub-9967](https://github.com/magento/magento2/issues/9967)

<!--- 72278, 69574 -->* Vimeo videos in product gallery now work over HTTPS. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request 10748*. [GitHub-7311](https://github.com/magento/magento2/issues/7311), [GitHub-8574](https://github.com/magento/magento2/issues/8574)

<!--- 75319 -->* We've fixed the problem with the missing HTML `span` tag in the base template file (`app/code/Magento/Review/view/frontend/templates/form.phtml`). *Fix submitted by [Bartek Igielski](https://github.com/Igloczek) in pull request 10934*. [GitHub-6081](https://github.com/magento/magento2/issues/6081)

<!--- 75311 -->* We've improved the responsiveness of Magento 2.1.8 with Sample Data's categories containing text containers. *Fix submitted by [Paweł Szafrański](https://github.com/szafran89) in pull request 10929*. [GitHub-10510](https://github.com/magento/magento2/issues/10510)

<!--- 81305 -->* The WYSIWYG editor no longer displays broken image icons. Previously, this issue occurred on CMS pages and blocks as well as products and categories.  *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request 11309*. [GitHub-10417](https://github.com/magento/magento2/issues/10417)

<!--- 60003 -->* You can now use the Admin to create a return after you’ve added a new return attribute. Previously, the new attribute was not visible, and the return could not be submitted. Magento also displayed this error: `Uncaught Error: cannot call methods on modal prior to initialization; attempted to call method openModal`.

<!--- 72181 -->* You can now remove custom customer and customer address attributes from the Use in Forms list.

<!--- 75222 -->

### Framework

<!--- 70394 -->* Magento no longer produces a DOM schema validation error in developer mode. *Fix submitted by [Andre Flitsch](https://github.com/pixelhed) in pull request 9718*. [GitHub-4731](https://github.com/magento/magento2/issues/4731), [GitHub-7827](https://github.com/magento/magento2/issues/7827)


<!--- 70673 -->* PageCache no longer produces an `Uncaught TypeError: element.prop is not a function` error when the page contains an iframe. *Fix submitted by @ajpevers in pull request 10218*. [GitHub-6818](https://github.com/magento/magento2/issues/6818)

<!--- 70591 -->* You can now generate unsecure URL if current URL is secure. *Fix submitted by [Arshad M](https://github.com/arshadpkm) in pull request 10188*. [GitHub-6175](https://github.com/magento/magento2/issues/6175)

### Google

<!--- 70892 -->* We’ve fixed an Ajax issue that prevented Add to Cart and Remove from Cart events from firing in Google Tag Manager as expected.

### Import/export

<!--- 71983 -->* Magento no longer fails if the CSV file being imported does not contain the `bundle_values` column during an import process that includes bundle products.

<!--- 59720 -->* Magento now allows you to import multiple alternative images with multiple labels that include commas in the description.

<!--- 65066 -->* Customer imports can still complete when  the error count is below the set value in **Allowed Errors Count**, and import behavior is set to **Skip Error Entries**.

### Order management

<!--- 71051 -->* Magento now completes order processing  if the customer needs to re-enter credit card information during the order process. Previously, Magento returned this error, `No such entity with customerId = 0`, and the order did not complete.

<!--- 59125 -->* You can now receive shipping quotes from either the Admin panel or the storefront.

### Payment methods

<!--- 69089 -->* In orders with separate billing and shipping addresses, when you change the billing address but neglect to click **Update** before clicking **Place order**, Magento will not place the order until you click **Update**. Previously, under these conditions, Magento replaced the  edited billing address with the shipping address.

<!--- 72466 -->* We’ve fixed a `PayPal.js` error that occurred when you tried to check out an order that contained a downloadable product.

<!--- 71821 -->* PayPal Express checkout now handles virtual products as expected. Previously,  the checkout page redirected you to the review order page, and Magento displayed the  **Can't place order** message.  Note: This is not associated with PayPal's strategic decision to stop supporting sales of digital goods through PayPal Express Checkout as of January 2017. [GitHub-10615](https://github.com/magento/magento2/issues/10615)

<!--- 69724 -->* Payment methods now retrieve new order status from config as expected. [GitHub-5860](https://github.com/magento/magento2/issues/5860)

### Shipping

<!--- 69898 -->* Magento now handles tracking for FedEx shipments with valid tracking numbers as expected. Previously, Magento displayed an error when you clicked **Track this Shipment**, even when the tracking number was valid.

<!--- 81975 -->* Shipping method radios have duplicate IDs on cart page. *Fix submitted by @peterjaap in pull request 11456*. [GitHub-10795](https://github.com/magento/magento2/issues/10795)

<!--- 81716 -->* Shipment API won't append comment to email. *Fix submitted by @JeroenVanLeusden in pull request 11386*. [GitHub-11207](https://github.com/magento/magento2/issues/11207)

### Search

<!--- 72106 -->* Search synonyms in a group now can declare several words as synonyms. For example, "Elon Musk,tesla" is a valid synonym group, and a search on the phrase "Elon Musk" will also show results for the "tesla" keyword. Previously, you could declare synonyms for each word (for example, "Elon,Musk,Tesla"), but these words didn't work as a phrase. Synonyms are also now case-insensitive.

#### Elasticsearch

<!--- 72246 -->* We’ve enhanced the performance of the Elasticsearch catalog searches.


<!--- 71667 -->* You can now use QuickSearch to search multiselect text values.

<!--- 71569 -->* Search by attribute now works as expected with Elasticsearch.

### Staging

<!--- 64924 -->* The **Set Product as New** checkbox now works as expected.

<!--- 64521 -->* Magento now saves scheduled updates for products with custom options as expected.

<!--- 67402 -->* Scheduled updates now display the correct price for a product. Previously, Magento displayed the “as low as” price for a product in the scheduled update, but the preview option displayed the regular price.

<!--- 63704 -->* When you set up  Scheduled Update to **new** for a configurable product, Magento removes all simple variations  from the configurable product as expected once the update takes effect. Previously, scheduled updates removed all simple variations from a configurable product.

<!--- 64924 -->* The **Set Product as New** checkbox now works as expected. Previously, Magento did not display the product as new on the  frontend,  and the checked box reverted to unchecked when you saved your changes.

### Translations

<!--- 69935 -->* You can now save scheduled changes when running a store with a Japanese locale. Previously, Magento displayed this error, `error: : Future Update Start Time cannot be earlier than current time`.

<!--- 70543 -->* Product attributes' labels are not translated on product edit page. *Fix submitted by [Fernando Fauth](https://github.com/fernandofauth) in pull request 10184*. [GitHub-1980](https://github.com/magento/magento2/issues/1980)

### URL rewrites

<!--- 70505 -->* Slash as category URL suffix gives 404 error on all category pages. Multiple URLs causes duplicated content. Product URL Suffix "/" results in 404 error . Custom URL Rewrite where the request path ends with a forward slash is not matched. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request 10164*. [GitHub-3872](https://github.com/magento/magento2/issues/3872), [GitHub-1980](https://github.com/magento/magento2/issues/1980), [GitHub-4660](https://github.com/magento/magento2/issues/4660), [GitHub-4876](https://github.com/magento/magento2/issues/4876), [GitHub-8264](https://github.com/magento/magento2/issues/8264)

<!---  82312-->* Custom URL Rewrite Not working. *Fix submitted by [Marc Rodriguez](https://github.com/mrodespin) in pull request 11469* [GitHub-10231](https://github.com/magento/magento2/issues/10231)

### Visual Merchandiser

<!--- 57613 -->* Visual Merchandiser now retains page view options and position after you remove a product. Previously, when you removed a product from a category, and you weren't on the first page, Magento returned you to the first page.

<!--- 70287 -->* We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).

### Wishlist

<!--- 70991 -->* Unconfigured bundle products that are included on a wishlist can now be edited or added to a cart. Previously, Magento displayed a 503  error when you either tried to edit or add to the cart any bundle products that were on a wishlist.

<!--- 63698 -->* The wishlist now displays the correct price for bundle products.



<!--- INTERNAL ONLY 66707 66706 64245 64115 75625 75621 75619 75612 67019 71527 -->

<!--- NOT NEEDED  65066 63704 63698 63576 63162 62309 61905 61315 61139 59720 59125 58914 75222 72181 72078 72054 72011 67019 69560 57616 64296 7158771576 71398 71378 71170 71151 71117
 -->

<!--- DUPLICATE 66197-->

<!--- CANCELED 63598-->


<!--- CANNOT REPRODUCE 63824 58536 57024 69478 63098 -->

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
    <td><a href="https://github.com/magento/magento2/pull/9692" target="_blank">9692</a></td>
    <td>6718</td>
     <td><a href="https://github.com/JTimNolan" target="_blank">JTimNolan</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/magento/magento2/pull/9809" target="_blank">9809</a></td>
    <td>6999</td>
     <td><a href="https://github.com/thlassche" target="_blank">Teun Lassche</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10050" target="_blank">10050</a></td>
    <td>5377, 4170, 6882</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10075" target="_blank">10075</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/alessandroniciforo" target="_blank">alessandroniciforo</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9718" target="_blank">9718</a></td>
    <td>4731, 7827, 7827</td>
     <td><a href="https://github.com/pixelhed" target="_blank">Andre Flitsch</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10159" target="_blank">10159</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/fernandofauth" target="_blank">Fernando Fauth</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10164" target="_blank">10164</a></td>
    <td>3872, 1980, 4660, 4876, 8264</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10184" target="_blank">10184</a></td>
    <td>1980</td>
     <td><a href="https://github.com/fernandofauth" target="_blank">Fernando Fauth</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10211" target="_blank">10211</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10218" target="_blank">10218</a></td>
    <td>6818</td>
     <td><a href="https://github.com/ajpevers" target="_blank">Anton Evers</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10188" target="_blank">10188</a></td>
    <td>6175</td>
     <td><a href="https://github.com/arshadpkm" target="_blank">Arshad M</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10260" target="_blank">10260</a></td>
    <td>5651</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10282" target="_blank">10282</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10482" target="_blank">10482</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/okorshenko" target="_blank">Oleksii Korshenko</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10569" target="_blank">10569</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/avdb" target="_blank">avdb</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10695" target="_blank">10695</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/bardkalbakk" target="_blank">Bård Kalbakk</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10714" target="_blank">10714</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/WaPoNe" target="_blank">Bård Kalbakk</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10745" target="_blank">10745</a></td>
    <td>4883, 5509, 5820, 5861, 5883, 5995, 6022, 7525, 9967</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10747" target="_blank">10747</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10750" target="_blank">10750</a></td>
    <td>5519, 10206</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10751" target="_blank">10751</a></td>
    <td>4387, 7448</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
<td><a href="https://github.com/magento/magento2/pull/10557" target="_blank">10557</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/lewisvoncken" target="_blank">Mr. Lewis</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10753" target="_blank">10753</a></td>
    <td>3754, 4725, 7569</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10749" target="_blank">10749</a></td>
    <td>5596</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10748" target="_blank">10748</a></td>
    <td>7311, 8574</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10934" target="_blank">10934</a></td>
    <td>6081</td>
     <td><a href="https://github.com/Igloczek" target="_blank">Bartek Igielski</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10929" target="_blank">10929</a></td>
    <td>10510</td>
     <td><a href="https://github.com/szafran89" target="_blank">Paweł Szafrański</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10932" target="_blank">10932</a></td>
    <td>10738</td>
     <td><a href="https://github.com/Januszpl" target="_blank">Janusz Janczy</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11201" target="_blank">11201</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/osrecio" target="_blank">Oscar Recio</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11309" target="_blank">11309</a></td>
    <td>10417</td>
     <td><a href="https://github.com/PieterCappelle" target="_blank">Pieter Cappelle</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11448" target="_blank">11448</a></td>
    <td>10007</td>
     <td><a href="https://github.com/raumatbel" target="_blank">Raul Mateos</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10975" target="_blank">10975</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/angelo983" target="_blank">angelo983</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11456" target="_blank">11456</a></td>
    <td>10795</td>
     <td><a href="https://github.com/peterjaap" target="_blank">Peter Jaap Blaakmeer</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11506" target="_blank">11506</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/mpchadwick" target="_blank">Max Chadwick</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11361" target="_blank">11361</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/adrian-martinez-interactiv4" target="_blank">adrian-martinez-interactiv4</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11386" target="_blank">11386</a></td>
    <td>11207</td>
     <td><a href="https://github.com/JeroenVanLeusden" target="_blank">Jeroen</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11469" target="_blank">11469</a></td>
    <td>10231</td>
     <td><a href="https://github.com/mrodespin" target="_blank">Marc Rodriguez</a></td>
 </tr>
 </table>

## System requirements
Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html){:target="_blank"}.

{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits
The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){:target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){:target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){:target="_blank"}.

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration){:target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
