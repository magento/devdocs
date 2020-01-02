---
group: release-notes
title: Magento Commerce 2.2.2 Release Notes
---
*Patch code and release notes published on December 12, 2017.*

*Release notes updated on January 5, 2018.*

We are pleased to present Magento Commerce 2.2.2. This release includes new tools and numerous functional fixes and enhancements, plus a substantial number of contributions from the wider Magento community.

## Highlights

Look for the following highlights in this release:

*  Significant new features that streamline the customer experience and provide merchants with greater insight into their online business.

*  Numerous fixes and enhancements to core features, including significant improvements to the payment process.

*  Ninety-six community-submitted bug fixes and multiple pull requests.

### New Features

*  **Advanced Reporting powered by Magento Business Intelligence**. Access easy-to-use order, product, and customer reports right from the Magento Admin to gain new insights and enable data-driven decision making. See [Advanced Reporting]({{ site.baseurl }}/guides/v2.2/advanced-reporting/overview.html) for more information.

*  **Magento Shipping** (powered by Temando). This new feature provides integrated advanced multi-carrier shipping and fulfillment.  (In addition to these release notes, you can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{ page.baseurl }}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).)

*  **Streamlined Instant Purchase checkout** (contributed by Creatuity). Our new streamlined Instant Purchase option uses previously stored payment credentials and shipping information to bypass steps in the checkout process. See [Instant Purchase module]({{ site.baseurl }}/guides/v2.2/mrg/ce/instant-purchase/) for more information.

*  **Integrated dotmailer marketing automation software**. Magento is one of the first ecommerce solutions to include the dotmailer marketing automation with their core product. See [Email Marketing Automation](http://docs.magento.com/m2/ce/user_guide/marketing/email-marketing-automation.html).

*  **Magento Functional Testing Framework**.  The Magento Functional Testing Framework (MFTF) is our open-source, cross-platform testing solution. Its purpose is to facilitate functional testing and minimize efforts to perform regression testing. See [Introduction to Magento Functional Testing Framework]({{ site.baseurl }}/mftf/docs/introduction.html).

Looking for more information on these new features as well as many others? Check out [Magento 2.2 Developer Documentation]({{ site.baseurl }}/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).

## Fixes and enhancements

*  **Significant enhancements for payment methods**. We've added support for the Indian Rupee (INR) to PayPal Express Checkout. We've also added a fix for an issue where some Braintree refunds did not work.

*  **Improvements to multi-storeview sites**. Switching store views multiple times no longer results in an error on the storefront.

*  **New functionality for the command-line interface**. We've added interactivity to the `admin:user:create` command and added the ability to handle CLI setup interactively (with prompts).

*  You can now use the **Enter** key (in addition to a mouse click) to  search tables in the Admin.

*  Magento no longer creates duplicate shipments when merchants create shipments with bundled products via API.

## Fixed issues

### Installation, setup, and deployment

<!--- MAGETWO-82747  -->

*  We've increased the `memory_limit` of the `.user.ini` files to 2GB. [GitHub-11322](https://github.com/magento/magento2/issues/11322)

<!--- MAGETWO-72301  -->

*  The contents of the `js-translation.json` files are now correct when you deploy static content with multiple locales.

<!--- MAGETWO-80205  -->

*  All cron dates are now  saved in a single format and displayed according to user preference or needs. [GitHub-4237](https://github.com/magento/magento2/issues/4237)

<!--- MAGETWO-80209  -->

*  Static versioning and minification no longer  break email font styles. [GitHub-8241](https://github.com/magento/magento2/issues/8241)

<!--- MAGETWO-82595  -->

*  You can now successfully upgrade from 2.1.x to 2.2.0. Previously, when you tried to upgrade from 2.1.9 to 2.2.0, Magento displayed the  **postcode is a required field** error message, and `setup:upgrade` failed. *Fix submitted by Mr. Lewis in pull request 11651*. [GitHub-11095](https://github.com/magento/magento2/issues/11095)

<!--- MAGETWO-82634  -->

*  We've replaced `FollowSymLinks` with `SymLinksIfOwnerMatch` in the `htaccess` templates. [GitHub-10811](https://github.com/magento/magento2/issues/10811)

<!--- MAGETWO-82292  -->

*  The `htaccess` template now supports  `apache2.4` commands. *Fix submitted by Jonas Hünig in pull request 11459*. [GitHub-10810](https://github.com/magento/magento2/issues/10810) [GitHub-10810](https://github.com/magento/magento2/issues/10810)

<!--- MAGETWO-82001  -->

*  `configVariables` now contains a variable for VAT numbers. *Fix submitted by JeroenVanLeusden in pull request 11486*.  [GitHub-10996](https://github.com/magento/magento2/issues/10996)

<!--- MAGETWO-82463  -->

*  We've fixed an issue with using the command line to install or remove `crontab`. Previously, installing or removing `crontab` via the command line appended `2>&1` to entries, even those not related to Magento. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11591*. [GitHub-11586](https://github.com/magento/magento2/issues/11586)

<!--- MAGETWO-81577  -->

*  You can now install and uninstall `cron` via the `bin/magento cron:install` command. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11359*.

<!--- MAGETWO-81645  -->

*  The `admin:user:create` command now recognizes the configured table prefix. *Fix submitted by Oscar Recio in pull request 11199*. [GitHub-11176](https://github.com/magento/magento2/issues/11176)

<!--- MAGETWO-82102  -->

*  The default cron success or failure history is now seven days. *Fix submitted by Max Chadwick in pull request 11505*.

<!--- MAGETWO-82234  -->

*  The `admin:user:create` command now asks for the input value if a required option is not passed. *Fix submitted by Christian Münch in pull request 11510*.

<!--- MAGETWO-82747  -->

*  The `.user.ini` files at `/.user.ini` and `/pub/.user.ini` now specify a `memory_limit` value of at least 1G to 2G for debugging purposes. *Fix submitted by Mr. Lewis in pull request 11734*. [GitHub-11322](https://github.com/magento/magento2/issues/11322)

<!--- MAGETWO-82754  -->

*  The `setup:install` command now has an `-i` flag. It validates parameters interactively. *Fix submitted by Denis Ristic in pull request 11425*.

<!--- MAGETWO-84646  -->

*  Magento now restarts cron jobs as needed after a cron job was terminated during execution.

### Catalog

<!--- MAGETWO-83498  -->

*  You can now enter strings that exceed 255 characters in Admin or frontend input fields. Previously, Magento  saved only the first 255 characters of a long input string. [GitHub-6238](https://github.com/magento/magento2/issues/6238)

<!--- MAGETWO-83477  -->

*  Magento now renders color attribute swatches correctly for the search result page if sorting for color attribute is enabled.  *Fix submitted by Roman K. in pull request 12077*. [GitHub-10628](https://github.com/magento/magento2/issues/10628)

<!--- MAGETWO-83174, 83169  -->

*  The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in the `catalog_product_entity` table. Previously, Magento loaded quote items with non-existing products.

<!--- MAGETWO-83085  -->

*  Magento no longer duplicates attribute option values. Previously, Magento did not confirm the uniqueness of an attribute option value if you created it using REST. [GitHub-8846](https://github.com/magento/magento2/issues/8846)

<!--- MAGETWO-83066  -->

*  Magento now saves the correct background color for images. Previously, product images always had a black background when using the Luma theme. [GitHub-8799](https://github.com/magento/magento2/issues/8799)

<!--- MAGETWO-83036  -->

*  You can now save a product custom option price with a value of 0 (zero) by simply not entering a price. *Fix submitted by Raul Mateos in pull request 11843*. [GitHub-4808](https://github.com/magento/magento2/issues/4808)

<!--- MAGETWO-82972  -->

*  You can now assign products to categories if those products are already assigned to the category tree. [GitHub-8970](https://github.com/magento/magento2/issues/8970)

<!--- MAGETWO-82946  -->

*  The `apply_to` setting for attributes is no longer hard-coded. [GitHub-7225](https://github.com/magento/magento2/issues/7225)

<!--- MAGETWO-82755  -->

*  The **Add to cart** checkboxes in Related Products are no longer visible on the storefront when **$canItemsAddToCart** is set to **false**.  *Fix submitted by Marc Rodriguez in pull request 11610*. [GitHub-6891](https://github.com/magento/magento2/issues/6891)

<!--- MAGETWO-83627  -->

*  You can now successfully save and duplicate a simple product. Previously, when you clicked the **Save and Duplicate** option for an existing simple product in the Catalog Manager, Magento did not duplicate the product, but threw an error. *Fix submitted by Roman K. in pull request 12001*. [GitHub-11532](https://github.com/magento/magento2/issues/11532)

<!--- MAGETWO-81967  -->

*  The Magento Admin Product Edit page now displays product alerts as expected.  *Fix submitted by Raul Mateos in pull request 11445*. [GitHub-10007](https://github.com/magento/magento2/issues/10007)

<!--- MAGETWO-82004  -->

*  The `StockItemCriteriaInterface` method `setProductsFilter` now accepts an array of IDs. Previously, this method accepted either a single integer or an array, but returned only one item. *Fix submitted by Kirill Morozov in pull request 11500*. [GitHub-7678](https://github.com/magento/magento2/issues/7678)

<!--- MAGETWO-81456  -->

*  The `$sortByPostion` flag has been added to the `getChildren()` method. *Fix submitted by Denis Ristic in pull request 11342*. [GitHub-11310](https://github.com/magento/magento2/issues/11310)

<!--- MAGETWO-82283  -->

*  `ProductRepository` SKU cache is no longer corrupted when `cacheLimit` is reached . *Fix submitted by Thomas in pull request 11553*.

<!--- MAGETWO-82943  -->

*  Magento no longer displays the perpetual spinner when you  switch custom options types in the Product Edit page. *Fix submitted by Paul Briscoe in pull request 11824*. [GitHub-10291](https://github.com/magento/magento2/issues/10291)

### Cart and checkout

<!--- MAGETWO-81665  -->

*  The default shipping-save-processor now has a payload extender. This feature allows third party extensions to modify the payload for the shipping address selection process. As a result, developers can now add `extension_attributes` while minimizing potential extension conflicts. *Fix submitted by Navarr Barnier in pull request 11249*.

<!--- MAGETWO-83476  -->

*  You can now view the **Products in cart** report if the cart contains a bundle or a grouped product. Previously, when you viewed the Products in Cart report, Magento threw an exception under these conditions. [GitHub-12079](https://github.com/magento/magento2/issues/12079)

<!--- MAGETWO-83194  -->

*  Magento now recognizes zip codes without spaces for addresses located in the Netherlands. [GitHub-11898](https://github.com/magento/magento2/issues/11898)

<!--- MAGETWO-82724  -->

*  Magento now accepts coupon codes with special characters during checkout. *Fix submitted by Gabriel Queiroz Silva in pull request 11710*. [GitHub-9763](https://github.com/magento/magento2/issues/9763)

<!--- MAGETWO-82057  -->

*  We've improved cache control headers.

<!--- MAGETWO-82314  -->

*  Magento no longer throws an exception when you place an order using a new address. Previously, Magento displayed this error, **An error occurred on the server. Please try to place the order again.**. [GitHub-10583](https://github.com/magento/magento2/issues/10583)

<!--- MAGETWO-81904  -->

*  Magento now includes the Filter Groups and the Sort Order of the `$searchCriteria` parameter in the `searchCriteria` Object that is provided for the EAV set repository.  *Fix submitted by David Verholen in pull request 11421*. [GitHub-11022](https://github.com/magento/magento2/issues/11022)

<!--- MAGETWO-81994  -->

*  Magento no longer sets the product price to zero when you use REST to add a product to an empty cart. Previously, Magento displayed an error when you used REST to populate an empty cart. *Fix submitted by Peter Jaap Blaakmeer in pull request 11458*. [GitHub-2991](https://github.com/magento/magento2/issues/2991), [GitHub-2991](https://github.com/magento/magento2/issues/2991)

<!--- MAGETWO-81987  -->

*  You can now translate the placeholder text for the checkout password field.  *Fix submitted by JeroenVanLeusden in pull request 11493*.

<!--- MAGETWO-83495  -->

*  Magento now redirects a user to the checkout page if he logs in after selecting the **Checkout** button. Previously,  a user was redirected to the store home page. *Fix submitted by [@p-bystritsky](https://github.com/p-bystritsky) in pull request 11876*. [GitHub-10834](https://github.com/magento/magento2/issues/10834)

### Configurable products

<!--- MAGETWO-83489  -->

*  `Magento\ConfigurableProduct\Model\Product\Type\Configurable:::loadUsedProducts` no longer ignores array keys that are returned by product collections. [GitHub-11880](https://github.com/magento/magento2/issues/11880)

### Frameworks

<!--- MAGETWO-82675  -->

*  The NGINX configuration sample now contains a health check. *Fix submitted by Andrew Howden in pull request 11690*. [GitHub-11157](https://github.com/magento/magento2/issues/11157)

<!--- MAGETWO-82814  -->

*  Magento now allows underscore characters in module names and also permits their use when modules add a block to the layout via XML. Previously,  Magento did not support underscore characters in module names to be added to the layout via XML. *Fix submitted by Ben Tideswell in pull request 11765*.

<!--- MAGETWO-81467  -->

*  You can now save using the mass action **Update attributes** option when multiselect attributes are set. *Fix submitted by Manu Gonzalez Rodriguez in pull request 11349*. [GitHub-11329](https://github.com/magento/magento2/issues/11329)

#### App framework

<!--- MAGETWO-83024  -->

*  Magento now correctly handles all meta keywords and description in categories and in every product in locales that use non-Latin characters. [GitHub-10682](https://github.com/magento/magento2/issues/10682)

<!--- MAGETWO-82851  -->

*  You can now include negative values in an XML export file and open the file with Office XML handler. Previously, the export files did not open correctly, and an Office XML handler error log was created.  *Fix submitted by hauso in pull request 11757*. [GitHub-11729](https://github.com/magento/magento2/issues/11729), [GitHub-11729](https://github.com/magento/magento2/issues/11729)

<!--- MAGETWO-81977  -->

*  The Magento custom URL rewrite functionality now works as expected when you include redirection of Magento controllers. *Fix submitted by Marc Rodriguez in pull request 11470*. [GitHub-10231](https://github.com/magento/magento2/issues/10231), [GitHub-11469](https://github.com/magento/magento2/issues/11469), [GitHub-11471](https://github.com/magento/magento2/issues/11471)

<!--- MAGETWO-81973  -->

*  Magento now supports the setting of HTTP response status code in redirected responses. [GitHub-9028](https://github.com/magento/magento2/issues/9028)

<!--- MAGETWO-81990  -->

*  Magento now throws a meaningful exception when a virtual theme does not have a physical parent theme. *Fix submitted by David Fecke in pull request 11240*.

<!--- MAGETWO-82236  -->

*  `app:config:dump` no longer adds an extra space to multiline array values. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11439*. [GitHub-11328](https://github.com/magento/magento2/issues/11328)

<!--- MAGETWO-82665  -->

*  The TRAVIS_BRANCH variable is now surrounded by double-quotes instead of single-quotes . *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11704*.

<!--- MAGETWO-83035  -->

*  The doc block of `setValue` in FilterBuilder now reflects that the `setValue` method will accept an array. *Fix submitted by ByteCreation in pull request 11854*.

<!--- MAGETWO-81515  -->

*  `htaccess` syntax now uses `Options -Indexes`  instead of `Options All -Indexes`. Previously, Magento used  `Options All -Indexes`, which resulted in Magento rendering a 500 error page because of high restrictions for Options overrides in shared hosting environments. *Fix submitted by [@Danny Verkade - Cream](https://github.com/dverkade) in pull request 11327*. [GitHub-10812](https://github.com/magento/magento2/issues/10812)

#### Configuration framework

<!--- MAGETWO-82887  -->

*  The X-Magento-Tags header can now contain  white space. *Fix submitted by Malyovanets Nickolas in pull request 11767*. [GitHub-7640](https://github.com/magento/magento2/issues/7640), [GitHub-7640](https://github.com/magento/magento2/issues/7640)

<!--- MAGETWO-82535  -->

*  The config array can now read  all settings from `config`. Previously, the config array was hardcoded to read three settings only. *Fix submitted by Vova Yatsyuk in pull request 11643*.

#### JavaScript framework

<!--- MAGETWO-80207  -->

*  Magento no longer incorrectly overly encodes UTF-8 files when JavaScript Bundling is enabled. Previously, this issue resulted in poor character encoding on the storefront. [GitHub-10562](https://github.com/magento/magento2/issues/10562), [GitHub-6733](https://github.com/magento/magento2/issues/6733)

<!--- MAGETWO-81959  -->

*  Magento now exports the Confirmed email and Account Lock values when you export customer data. Previously, this information was missing from the exported CSV. *Fix submitted by Luke Rodgers in pull request 11437*. [GitHub-10765](https://github.com/magento/magento2/issues/10765), [GitHub-10765](https://github.com/magento/magento2/issues/10765)

<!--- MAGETWO-81146  -->

*  You can now submit the search form from the keyboard. *Fix submitted by Romain Ruaud in pull request 11250*. [GitHub-10275](https://github.com/magento/magento2/issues/10275)

#### Session framework

<!--- MAGETWO-84106  -->

*  We've removed the 30-second timeout limit for the session locking mechanism when Redis is used for session storage.

<!--- MAGETWO-80912  -->

*  A typo in `sessionStorage` polyfill has been corrected.  *Fix submitted by mszydlo in pull request 11219*.

#### Web API framework

<!--- MAGETWO-83095  -->

*  The `customerAccountManagementV1` interface now provides the `POST /V1/customers/resetPassword` endpoint.

### General

<!--- MAGETWO-83281  -->

*  XHTML templates now use schema URNs. [GitHub-6661](https://github.com/magento/magento2/issues/6661)

<!--- MAGETWO-83279  -->

*  The image size used as a cross-sell product placeholder now equals the size of the image used in product listing placeholder images. Previously, the cross-sell product placeholder image was too small. [GitHub-12017](https://github.com/magento/magento2/issues/12017)

<!--- MAGETWO-82710  -->

*  Magento now downloads the backup `.tgz` file that you select for downloading. Previously, no matter which backup you selected, Magento downloaded the most recent backup. *Fix submitted by Pieter Cappelle in pull request 11595*. [GitHub-10032](https://github.com/magento/magento2/issues/10032)

<!--- MAGETWO-82809  -->

*  Magento now leaves a product's date attribute's current date field blank if you do not enter a value. *Fix submitted by [@enriquei4](https://github.com/enriquei4) in pull request 11749*. [GitHub-9869](https://github.com/magento/magento2/issues/9869), [GitHub-11636](https://github.com/magento/magento2/issues/11636), [GitHub-6661](https://github.com/magento/magento2/issues/6661)

<!--- MAGETWO-83277  -->

*  The Magento store code validation `regex` now supports uppercase letters in store code. [GitHub-11996](https://github.com/magento/magento2/issues/11996)

<!--- MAGETWO-82426  -->

*  When you use a UI component-based form and add a custom regular expression pattern validation to an input field, the supplied pattern is now properly converted from a string to a JavaScript RegEx object. *Fix submitted by Brett in pull request 11565*. [GitHub-9919](https://github.com/magento/magento2/issues/9919)

<!--- MAGETWO-82431  -->

*  Magento now sets ISO-valid language code in the HTML header. *Fix submitted by Cristian Sanclemente in pull request 11561*. [GitHub-11540](https://github.com/magento/magento2/issues/11540)

<!--- MAGETWO-82889  -->

*  Magento now validates CMS blocks before creating one.  *Fix submitted by thiagolima-bm in pull request 11802*. [GitHub-8236](https://github.com/magento/magento2/issues/8236), [GitHub-4831](https://github.com/magento/magento2/issues/4831)

<!--- MAGETWO-82537  -->

*  A custom field's name attribute no longer remains empty during form creation. *Fix submitted by Paul Briscoe in pull request 11637*. [GitHub-9944](https://github.com/magento/magento2/issues/9944)

<!--- MAGETWO-81993  -->

*  `widget.xml` files can now contain multiple `depends` parameters.  *Fix submitted by Raul E Watson in pull request 11495*. [GitHub-9783](https://github.com/magento/magento2/issues/9783)

<!--- MAGETWO-81995  -->

*  You can now use an `adminhtml` URL that differs from `admin` and set **Add Store Code to Urls** to **Yes**. *Fix submitted by Sylvain Rayé in pull request 11460*. [GitHub-11140](https://github.com/magento/magento2/issues/11140), [GitHub-11140](https://github.com/magento/magento2/issues/11140)

<!--- MAGETWO-82999  -->

*  You can now add an HTML node to the page XML root of a theme without causing a validation error. [GitHub-11697](https://github.com/magento/magento2/issues/11697)

<!--- MAGETWO-82652  -->

*  The `customer_data_object` firstname is no longer equal to `orig_customer_data_object` after you save an existing user account with a new name or address. *Fix submitted by Roman K. in pull request 11676*. [GitHub-7915](https://github.com/magento/magento2/issues/7915)

<!--- MAGETWO-82658  -->

*  We removed a typo in the Paypal Module. [GitHub-7591](https://github.com/magento/magento2/issues/7591)

<!--- MAGETWO-82761  -->

*  We’ve fixed the dashboard graph’s y-axis range. *Fix submitted by Oscar Recio in pull request 11751*. [GitHub-7927](https://github.com/magento/magento2/issues/7927)

<!--- MAGETWO-83023  -->

*  Magento no longer throws an error when you try to load a quote item collection. [GitHub-8954](https://github.com/magento/magento2/issues/8954)

<!--- MAGETWO-82645  -->

*  Customer Groups are now located in the Magento Admin under **Customers > Customer Groups**. *Fix submitted by Mr. Lewis in pull request 11677*.

<!--- MAGETWO-82810  -->

*  Magento now wraps long label text by word instead of letter. *Fix submitted by [@enriquei4](https://github.com/enriquei4) in pull request 11745*. [GitHub-7099](https://github.com/magento/magento2/issues/7099), [GitHub-711727](https://github.com/magento/magento2/issues/11727)

<!--- MAGETWO-81580  -->

*  Magento now displays and expects the format of birth years to match `yyyy` instead of `yy`. *Fix submitted by Manu Gonzalez Rodriguez in pull request 11351*. [GitHub-11332](https://github.com/magento/magento2/issues/11332)

<!--- MAGETWO-81675  -->

*  Magento now displays the State/Province field after you edit the billing address on sales orders.  *Fix submitted by Raul Mateos in pull request 11381*. [GitHub-10441](https://github.com/magento/magento2/issues/10441)

<!--- MAGETWO-81680  -->

*  You can now successfully sync billing and shipping addresses on Admin Reorder and Admin Customer Create Order page for selected, existing addresses. *Fix submitted by Ievgen Sentiabov in pull request 11385*. [GitHub-10856](https://github.com/magento/magento2/issues/10856)

<!--- MAGETWO-82854  -->

*  The `FixAccountManagementTest` unit test now works as expected. *Fix submitted by [@adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11607*.

<!--- MAGETWO-82954  -->

*  You can now submit a form by pressing **Enter**. *Fix submitted by Raul Encinas in pull request 11827*. [GitHub-4696](https://github.com/magento/magento2/issues/4696)

<!--- MAGETWO-81422  -->

*  The Store View switcher now works as expected. *Fix submitted by thiagolima-bm in pull request 11337*. [GitHub-10908](https://github.com/magento/magento2/issues/10908), [GitHub-11211](https://github.com/magento/magento2/issues/11211)

<!--- MAGETWO-83490  -->

*  We've removed object manager references as well as deprecated calls to `$messageManager`. *Fix submitted by Atish Goswami in pull request 12061*.

<!--- MAGETWO-83672  -->

*  Magento now prepares street data to guarantee that the street array will be converted to a string. *Fix submitted by Vova Yatsyuk in pull request 12130*.

<!--- MAGETWO-83682  -->

*  Disabling and enabling the  WYSIWYG editor with `ui/form/element/helper/service` checkbox now works as expected. *Fix submitted by Vova Yatsyuk in pull request 12141*.

<!--- MAGETWO-83145  -->

*  The `sitemap.xml` `last mod` time stamp now contains the correct date. [GitHub-9151](https://github.com/magento/magento2/issues/9151)

<!--- MAGETWO-82955  -->

*  The Visual Swatch Attribute drop-down menu (accessible from Manage Swatch tab) now works as expected. Previously, when you clicked the **Add Swatch** button from this tab, the drop-down menu was not displayed. *Fix submitted by [@enriquei4](https://github.com/enriquei4) in pull request 11747*. [GitHub-11534](https://github.com/magento/magento2/issues/11534)

<!--- MAGETWO-71458  -->

*  Users are now subscribed by default to the Advanced Reporting service.

<!--- MAGETWO-81679  -->

*  The design rule hint message no longer includes a typo. *Fix submitted by Javier Villanueva in pull request 11390*. [GitHub-8958](https://github.com/magento/magento2/issues/8958)

<!--- MAGETWO-81678  -->

*  Storefront labels and messages now use the American English spelling of “optimization”. *Fix submitted by David Angel in pull request 11345*.

<!--- MAGETWO-80829  -->

*  The **Add page** button now works as expected. Previously, when you clicked **Add page** while logged in to the Admin, and clicked **Save**, Magento did not create a new page, but returned you to the **Orders** page, and displayed this message: **Data key is missing: code-entity**. *Fix submitted by Tomasz Gregorczyk in pull request 11205*. [GitHub-11163](https://github.com/magento/magento2/issues/11163)

### Import/export

<!--- MAGETWO-83322  -->

*  To improve performance, Magento now loads all relations  using one query per bunch. Previously, Magento loaded relations one by one (multiple times for multiple attributes types). [GitHub-10920](https://github.com/magento/magento2/issues/10920)

<!--- MAGETWO-82886  -->

*  Magento now provides more helpful error messages if problems occur during the import of products and images using  **System > Import Products**. [GitHub-4711](https://github.com/magento/magento2/issues/4711)

<!--- MAGETWO-82956  -->

*  Magento now provides better error reporting when an error occurs during the import of a CSV file with a semicolon delimiter. Previously, Magento stopped import, but did not provide a link to the error report CSV file. [GitHub-5015](https://github.com/magento/magento2/issues/5015)

<!--- MAGETWO-81594  -->

*  Exception message was passed as a exception description argument instead of exception message. *Fix submitted by Tim Bezhashvyly in pull request 11363*. [GitHub-6924](https://github.com/magento/magento2/issues/6924)

<!--- MAGETWO-83310  -->

*  Importing an import file to update customer data no loner results in the `entity fields` being removed if the columns were not present on the imported file. *Fix submitted by Juan Alonso in pull request 11968*.

### Indexing

<!--- MAGETWO-80188  -->

*  Magento no longer re-indexes entities if they are unchanged, which improves the performance of the refresh index cron job without any loss of functionality. [GitHub-4893](https://github.com/magento/magento2/issues/4893)

<!--- MAGETWO-80644  -->

*  Magento now correctly resets status to `StateInterface::STATUS_INVALID` if a fatal PHP error occurs during indexing. *Fix submitted by Lars Roettig in pull request 11183*. [GitHub-11166](https://github.com/magento/magento2/issues/11166)

### Infrastructure

<!--- MAGETWO-82273  -->

*  New static block tests  now detect blocks without a name attribute. We've also added a missing block name to allow block customization, and added a name for the order items grid default renderer block. *Fix submitted by Ihor Sviziev in pull request 11235*. [GitHub-10824](https://github.com/magento/magento2/issues/10824)

<!--- MAGETWO-82300  -->

*  We've ported a fix for the Travis CI builds for the  `2.2-develop` branch to the  `2.3-develop` branch. *Fix submitted by Ievgen Shakhsuvarov in pull request 11555*.

<!--- MAGETWO-82003  -->

*  Integration tests now reset the integration test database when `TESTS_CLEANUP` is set to enabled. *Fix submitted by Joshua Warren in pull request 11499*. [GitHub-10025](https://github.com/magento/magento2/issues/10025)

<!--- MAGETWO-82658  -->

*  A typo in  `Paypal/Test/TestCase/OnePageCheckoutTest.xml` has been fixed. *Fix submitted by Mr. Lewis in pull request 11673*. [GitHub-7591](https://github.com/magento/magento2/issues/7591)

<!--- MAGETWO-83572  -->

*  `FileClassScannerTest` no  longer has a dependency upon  `Magento_Catalog`. *Fix submitted by WEXO team in pull request 12144*. [GitHub-11230](https://github.com/magento/magento2/issues/11230)

### Newsletters

<!--- MAGETWO-83257  -->

*  Newsletter subscriptions now work as expected. Previously, Magento did not set the `create-date` field, and the `change_status_at` was broken. [GitHub-4004](https://github.com/magento/magento2/issues/4004)

<!--- MAGETWO-83286  -->

*  When a customer with the same email address has an account on different stores in the same Magento installation, changes to the newsletter subscription in one account no longer affects the other subscription. *Fix submitted by Sergio Baixauli in pull request 12035*. [GitHub-10014](https://github.com/magento/magento2/issues/10014)

<!--- MAGETWO-81326  -->

*  Magento now sends email confirmation of newsletter subscription to a user only when the user is newly subscribed. *Fix submitted by Oscar Recio in pull request 11317*. [GitHub-5439](https://github.com/magento/magento2/issues/5439)

### Orders

<!--- MAGETWO-83271  -->

*  Magento now retains an order's  `relation_child_id` and `relation_child_real_id` field values when you edit the order. Previously, after you edited an order, the values of the `relation_child_id` and `relation_child_real_id` fields of the old order did not persist. [GitHub-10195](https://github.com/magento/magento2/issues/10195)

<!--- MAGETWO-83174  -->

*  Magento no longer duplicates the **Add Products** button after you change the customer group. [GitHub-11868](https://github.com/magento/magento2/issues/11868)

<!--- MAGETWO-83084  -->

*  New orders now appear as expected in the Order table after you migrating data. [GitHub-10185](https://github.com/magento/magento2/issues/10185)

<!--- MAGETWO-83745  -->

*  You can now create an order from the Customer Edit page when working from the Admin. *Fix submitted by Roman K. in pull request 11952*. [GitHub-11832](https://github.com/magento/magento2/issues/11832)

<!--- MAGETWO-83668  -->

*  The `getTracksCollection()` method  now returns collection objects. Previously, this method returned either  collections or arrays.  *Fix submitted by Roman K. in pull request 12173*. [GitHub-8022](https://github.com/magento/magento2/issues/8022)

<!--- MAGETWO-82953  -->

*  References to `Zend_Pdf_Color_RGB`now correctly use the camel-case class name (`Zend_Pdf_Color_Rgb`). Previously, the former class name resulted in references to wrong or nonexistent classes. *Fix submitted by Danny Verkade - Cream in pull request 11830*. [GitHub-11581](https://github.com/magento/magento2/issues/11581)

<!--- MAGETWO-82883  -->

*  The Order table now accurately reflects changes in order status.

<!--- MAGETWO-82562  -->

*  Invoices now display coupon code information. *Fix submitted by Cristian Sanclemente in pull request 11635*. [GitHub-10168](https://github.com/magento/magento2/issues/10168)

<!--- MAGETWO-81428  -->

*  Magento no longer lets you cancel an invoice more than once.  *Fix submitted by Oscar Recio in pull request 11261*. [GitHub-9968](https://github.com/magento/magento2/issues/9968)

<!--- MAGETWO-81647  -->

*  `guest.php` now handles breadcrumb performance as expected. *Fix submitted by Juliano Vargas in pull request 11299*. [GitHub-11275](https://github.com/magento/magento2/issues/11275)

<!--- MAGETWO-81340  -->

*  Magento now sends confirmation emails to customers for orders containing a grouped product. Previously, when you tried to submit an invoice for an order containing a grouped product, Magento threw an error and did not send confirmation email to the customer. *Fix submitted by Michiel Gerritsen in pull request 11297*. [GitHub-5105](https://github.com/magento/magento2/issues/5105)

### Payment methods

<!--- MAGETWO-82732  -->

*  Magento PayPal integration now supports the Indian Rupee currency (INR).

<!--- MAGETWO-71966  -->

*  Braintree online refunds now work when you are using two Braintree accounts on two separate websites. Previously, when using two Braintree accounts for two separate websites, Magento did not process the refund, and displayed this message: **Sorry, but something went wrong**.

<!--- MAGETWO-83270  -->

*  Administrators with limited privileges can now log in without errors. Previously, Magento threw an error, but did not log errors in either the server or Magento logs. [GitHub-11700](https://github.com/magento/magento2/issues/11700)

<!--- MAGETWO-82367  -->

*  Corrected a typo in a translatable string. *Fix submitted by Danny Verkade - Cream in pull request 11569*.

<!--- MAGETWO-80894  -->

*  Magento now displays the correct payment method string as displayed during checkout.  Previously, the translated string associated the payment method title for a particular store view was not consistently displayed. *Fix submitted by Bernhard in pull request 11165*. [GitHub-7582](https://github.com/magento/magento2/issues/7582)

### Reports

<!--- MAGETWO-82179  -->

*  The search for the Customer Review report now works as expected. *Fix submitted by Oscar Recio in pull request 11522*. [GitHub-10301](https://github.com/magento/magento2/issues/10301)

<!--- MAGETWO-83600  -->

*  Magento now reports handled exceptions to New Relic. Previously, Magento displayed only fatal errors. *Fix submitted by Max Chadwick in pull request 11944*.

<!--- MAGETWO-83540  -->

*  The Admin's Most Viewed Products tab now displays all the products in all  attribute sets, not simply the default attribute set. [GitHub-9768](https://github.com/magento/magento2/issues/9768)

### SalesRule

<!--- MAGETWO-70323  -->

*  You can now add a bundle product that includes a simple product with a price of 0 (zero) to your cart. Previously, Magento threw an error. [GitHub-8969](https://github.com/magento/magento2/issues/8969)

<!--- MAGETWO-81161  -->

*  Cart Price rules are now applied to products if dropdown attributes are present. Previously, Magento checked only the items that were visible in the cart against the specified conditions. *Fix submitted by Marina Gociu in pull request 11274*. [GitHub-10477](https://github.com/magento/magento2/issues/10477)

### Search

<!--- MAGETWO-82904  -->

*  The search template now uses the custom URL specified in  `Magento\Search\Helper\getSuggestUrl()` instead of the default. [GitHub-6802](https://github.com/magento/magento2/issues/6802)

<!--- MAGETWO-80203  -->

*  Magento no longer throws an asymmetric transaction error on re-indexing when you use ElasticSearch as your search engine.

### Shipping

 {:.bs-callout-info}
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{ page.baseurl }}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).

<!--- MAGETWO-83278  -->

*  Magento now displays by default of two shipping address lines even when the `street_lines` setting in customer configuration is set to 0 (zero). [GitHub-7995](https://github.com/magento/magento2/issues/7995)

<!--- MAGETWO-83272  -->

*  Magento no longer displays a blank page at the shipping stage of checkout when the user tries to return to the Shipping page from the Payments page by clicking **Back**. [GitHub-11197](https://github.com/magento/magento2/issues/11197)

<!--- MAGETWO-83197  -->

*  The Shipping report available from the Admin now uses the correct currency code. [GitHub-11793](https://github.com/magento/magento2/issues/11793)

<!--- MAGETWO-80191  -->

*  An invoice's `grand_total` and `base_grand_total` now match as expected. Previously, these values differed, leading to a rounding error when calculating the `base_grand_total`.

<!--- MAGETWO-81673  -->

*  Magento now adds a customer note to a shipment invoice when the shipment is created by API and `appendComment` is set to **true**. *Fix submitted by JeroenVanLeusden in pull request 11383*. [GitHub-11207](https://github.com/magento/magento2/issues/11207)

<!--- MAGETWO-81830  -->

*  Shipping method radio buttons no longer have duplicate element IDs on the cart page. Previously, these radio buttons had duplicate IDs,  which made it impossible to select the second method. *Fix submitted by Peter Jaap Blaakmeer in pull request 11406*. [GitHub-10795](https://github.com/magento/magento2/issues/10795)

<!--- MAGETWO-81986  -->

*  The **Shop By** button is now rendered as expected on Android platforms. Previously, the **Shop By** button  and other contents were positioned incorrectly. *Fix submitted by Lorenzo Stramaccia in pull request 11430*. [GitHub-10941](https://github.com/magento/magento2/issues/10941)

<!--- MAGETWO-82748  -->

*  The `freePackageValue` value is now required to be defined. Previously, this value could be undefined, but in some cases was still accessed. *Fix submitted by Alexander Menk in pull request 11720*.

### Tax

<!--- MAGETWO-82753  -->

*  We've fixed a problem with the **Ignore this notification** setting. *Fix submitted by Cristian Sanclemente in pull request 11410*. [GitHub-11365](https://github.com/magento/magento2/issues/11365)

### Translations

<!--- MAGETWO-72352  -->

*  You can now implement translations from themes (in contrast to translations from modules).

<!--- MAGETWO-81970  -->

*  Previously missing translation strings have been added to the UI module. *Fix submitted by JeroenVanLeusden in pull request 11440*. [GitHub-5956](https://github.com/magento/magento2/issues/5956)

<!--- MAGETWO-82651  -->

*  We've fixed an issue with the `<![CDATA[]]>` translate phrase in the `system.xml` file. [*Fix submitted by Malyovanets Nickolas in pull request 11675*. [GitHub-7767](https://github.com/magento/magento2/issues/7767)

<!--- MAGETWO-83547  -->

*  The update `button.phtml` translation has been simplified. *Fix submitted by Karla Saaremäe in pull request 12136*.

### Varnish

<!--- MAGETWO-83152  -->

*  Cache headers for documents now factor in the cookie for the store code as expected.

## Known issues

### General

**Issue**: In Swagger, the text area that contains the payload structure of some POST and PUT operations is not displayed. If a fraction of the text area is displayed, you can click on it to display the payload structure in a text area in the center of the page. If the text area is not displayed at all, then you cannot access the payload structure.

**Workaround**: Use the [static Swagger site]({{ site.baseurl }}/swagger) to navigate to the REST call you want to use, then copy the payload structure to your Swagger instance.

### Magento Shipping issues

We’ve identified the following unresolved issues with this version of Magento Shipping:

**Issue**: Merchants should not use Magento Shipping to connect with FedEx at this time. This option will be removed by Friday, December 15, and any existing shipping options tied to FedEx will no longer work at that time. We will be re-enabling FedEx integration through Magento Shipping at a future date.

**Issue**: Currency conversion problem for shipping methods during checkout when store supports multiple currencies. <!--- BUNDLE-507-->

**Workaround**: Ensure that the experience currency,  base currency, and display currency are the same. Additionally, incorporate these best practices into your shipping method configuration by ensuring that:

*  the Magento Core base currency is the same as the experience currency (**Store > Configuration > Currency Set Up > Base Current**).
*  the Magento Core base currency converter is the same as the experience and base currency (**Store > Currency Rates**)

**Issue**: Selecting a shipping method at checkout can sometimes result in two shipping methods being selected. This issue occurs during checkout. When a user selects a shipping method during checkout, Magento will select two shipping methods. <!--- BUNDLE-508-->

**Workaround**:  Ensure that no two rules with a ‘Show Shipping Method’ outcome can both apply to the scenario. Consider these example rules:

*  Rule 1: Show ‘Free Shipping’ for Country is Canada and Cost is not greater than $99.99
*  Rule 2: Show ‘Free Shipping’ for Country is not Canada and Cost is greater than $100

<!--- NOT NEEDED  MAGETWO-83834 MAGETWO-83755 MAGETWO-83740 MAGETWO-83682 MAGETWO-83672 MAGETWO-83632 MAGETWO-83600  MAGETWO-52974 MAGETWO-62981   MAGETWO-72138  MAGETWO-81886 MAGETWO-81830 MAGETWO-82003 MAGETWO-82117 MAGETWO-84882  MAGETWO-84650 MAGETWO-84649 MAGETWO-84544 MAGETWO-84321 MAGETWO-84000 MAGETWO-83898 MAGETWO-83184 MAGETWO-80474 MAGETWO-80475 MAGETWO-80477 MAGETWO-80477 MAGETWO-80479 MAGETWO-80480 MAGETWO-80481 MAGETWO-80484 MAGETWO-80488 MAGETWO-80568

 MAGETWO-82854 MAGETWO-82367   MAGETWO-82001 MAGETWO-82300   MAGETWO-81306  MAGETWO-82003 MAGETWO-82367 MAGETWO-82339 MAGETWO-82300 MAGETWO-82126 MAGETWO-82125 MAGETWO-80114 MAGETWO-81786

MAGETWO-82748 MAGETWO-82707 MAGETWO-83013 MAGETWO-82991 MAGETWO-82978 MAGETWO-82976 MAGETWO-82952  MAGETWO-83171 MAGETWO-83135 MAGETWO-83132  MAGETWO-83128 MAGETWO-83490 MAGETWO-83428 MAGETWO-83310  MAGETWO-83563
 MAGETWO-83547 MAGETWO-83529 MAGETWO-83537  MAGETWO-83532 MAGETWO-83310  MAGETWO-83130 MAGETWO-83013 MAGETWO-82978 MAGETWO-82976 MAGETWO-82954   MAGETWO-82854 MAGETWO-82748  MAGETWO-83600 MAGETWO-70726 MAGETWO-80517 MAGETWO-84344 MAGETWO-84531
MAGETWO-84321 MAGETWO-84091 MAGETWO-84051 MAGETWO-84000 MAGETWO-83914 MAGETWO-83898 MAGETWO-83870 MAGETWO-83184 MAGETWO-83004 MAGETWO-82596
MAGETWO-82420 MAGETWO-80736 MAGETWO-72441 MAGETWO-81342-->*

<!--- WON'T FIX  MAGETWO-69032 MAGETWO-84421-->

<!--- CANNOT REPRODUCE MAGETWO-82192-->

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
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11240">11240</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/leptoquark1">David</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11261">11261</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9968" target="_blank">9968</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11342">11342</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11310" target="_blank">11310</a></td>
    <td><a target="_blank" href="https://github.com/denisristic">Denis Ristic</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11351">11351</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11332" target="_blank">11332</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11359">11359</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11383">11383</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11207" target="_blank">11207</a></td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11406">11406</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10795" target="_blank">10795</a></td>
    <td><a target="_blank" href="https://github.com/peterjaap">Peter Jaap Blaakmeer</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11430">11430</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10941" target="_blank">10941</a></td>
    <td><a target="_blank" href="https://github.com/slackerzz">Lorenzo Stramaccia</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11445">11445</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10007" target="_blank">10007</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11470">11470</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10231" target="_blank">10231</a></td>
    <td><a target="_blank" href="https://github.com/mrodespin">Marc Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11493">11493</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11199">11199</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11176" target="_blank">11176</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11299">11299</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11275" target="_blank">11275</a></td>
    <td><a target="_blank" href="https://github.com/lano-vargas">Juliano Vargas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11381">11381</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10441" target="_blank">10441</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11460">11460</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11140" target="_blank">11140</a></td>
    <td><a target="_blank" href="https://github.com/diglin">Sylvain Rayé</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11505">11505</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mpchadwick">Max Chadwick</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11437">11437</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10765" target="_blank">10765</a></td>
    <td><a target="_blank" href="https://github.com/convenient">Luke Rodgers</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11486">11486</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11495">11495</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9783" target="_blank">9783</a></td>
    <td><a target="_blank" href="https://github.com/diazwatson">Raul E Watson</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11500">11500</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7678" target="_blank">7678</a></td>
    <td><a target="_blank" href="https://github.com/kirmorozov">Kirill Morozov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11555">11555</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ishakhsuvarov">Ievgen Shakhsuvarov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11235">11235</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10824" target="_blank">10824</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11565">11565</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9919" target="_blank">9919</a></td>
    <td><a target="_blank" href="https://github.com/bap14">Brett</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11569">11569</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11317">11317</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5439" target="_blank">5439</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11385">11385</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10856" target="_blank">10856</a></td>
    <td><a target="_blank" href="https://github.com/joni-jones">Ievgen Sentiabov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11510">11510</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/cmuench">Christian Münch</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11499">11499</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10025" target="_blank">10025</a></td>
    <td><a target="_blank" href="https://github.com/joshuaswarren">Joshua Warren</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11522">11522</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10301" target="_blank">10301</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11553">11553</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/heldchen">Thomas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11561">11561</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11540" target="_blank">11540</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11591">11591</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11586" target="_blank">11586</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11057">11057</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6350" target="_blank">6350</a></td>
    <td><a target="_blank" href="https://github.com/joachimVT">Joachim Vanthuyne</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11439">11439</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11328" target="_blank">11328</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11673">11673</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7591" target="_blank">7591</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11675">11675</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7767" target="_blank">7767</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11704">11704</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11677">11677</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11676">11676</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7915" target="_blank">7915</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11250">11250</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10275" target="_blank">10275</a></td>
    <td><a target="_blank" href="https://github.com/romainruaud">Romain Ruaud</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11421">11421</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11022" target="_blank">11022</a></td>
    <td><a target="_blank" href="https://github.com/davidverholen">David Verholen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11440">11440</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5956" target="_blank">5956</a></td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11643">11643</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11635">11635</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10168" target="_blank">10168</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11637">11637</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9944" target="_blank">9944</a></td>
    <td><a target="_blank" href="https://github.com/briscoda">Paul Briscoe</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11710">11710</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9763" target="_blank">9763</a></td>
    <td><a target="_blank" href="https://github.com/gabrielqs-redstage">Gabriel Queiroz Silva</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11690">11690</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11157" target="_blank">11157</a></td>
    <td><a target="_blank" href="https://github.com/andrewhowdencom">Andrew Howden</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11720">11720</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/amenk">Alexander Menk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11734">11734</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11322" target="_blank">11322</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11751">11751</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7927" target="_blank">7927</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11745">11745</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7099" target="_blank">7099</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11749">11749</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9869" target="_blank">9869</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11765">11765</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/bentideswell">Ben Tideswell</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11410">11410</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11365" target="_blank">11365</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11607">11607</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11610">11610</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6891" target="_blank">6891</a></td>
    <td><a target="_blank" href="https://github.com/mrodespin">Marc Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11757">11757</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11729" target="_blank">11729</a></td>
    <td><a target="_blank" href="https://github.com/hauso">HausO</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11363">11363</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6924" target="_blank">6924</a></td>
    <td>Tim Bezhashvyly</td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11425">11425</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/denisristic">Denis Ristic</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11767">11767</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7640" target="_blank">7640</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11779">11779</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4711" target="_blank">4711</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11827">11827</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4696" target="_blank">4696</a></td>
    <td><a target="_blank" href="https://github.com/bohemiorulo">Raul Encinas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11830">11830</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11581" target="_blank">11581</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11337">11337</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10908" target="_blank">10908</a>, <a href="https://github.com/magento/magento2/issues/11211" target="_blank">11211</a></td>
    <td><a target="_blank" href="https://github.com/thiagolima-bm">Thiago</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11458">11458</a></td>
    <td><a href="https://github.com/magento/magento2/issues/2991" target="_blank">2991</a></td>
    <td><a target="_blank" href="https://github.com/peterjaap">Peter Jaap Blaakmeer</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11595">11595</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10032" target="_blank">10032</a></td>
    <td><a target="_blank" href="https://github.com/PieterCappelle">Pieter Cappelle</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11747">11747</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11534" target="_blank">11534</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11824">11824</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10291" target="_blank">10291</a></td>
    <td><a target="_blank" href="https://github.com/briscoda">Paul Briscoe</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11651">11651</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11095" target="_blank">11095</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11802">11802</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8236" target="_blank">8236</a></td>
    <td><a target="_blank" href="https://github.com/thiagolima-bm">Thiago</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11843">11843</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4808" target="_blank">4808</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11854">11854</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ByteCreation">bytecreation</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11397">11397</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9566" target="_blank">9566</a></td>
    <td><a target="_blank" href="https://github.com/michielgerritsen">Michiel Gerritsen</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11732">11732</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5015" target="_blank">5015</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11829">11829</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10682" target="_blank">10682</a></td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11933">11933</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/dverkade">@dverkade</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11911">11911</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10185" target="_blank">10185</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11817">11817</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8970" target="_blank">8970</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11405">11405</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9028" target="_blank">9028</a></td>
    <td><a target="_blank" href="https://github.com/gabrielqs-redstage">Gabriel Queiroz Silva</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11858">11858</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11697" target="_blank">11697</a></td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11869">11869</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8954" target="_blank">8954</a></td>
    <td><a target="_blank" href="https://github.com/neeta-wagento">@neeta-wagento</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11889">11889</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8799" target="_blank">8799</a></td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11917">11917</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11949">11949</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11868" target="_blank">11868</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11959">11959</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11898" target="_blank">11898</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11620">11620</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/raumatbel">Raul Mateos</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11770">11770</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/euronetzrt">Euronet</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11863">11863</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12011">12011</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11996" target="_blank">11996</a></td>
    <td><a target="_blank" href="https://github.com/manuelson">Manu Gonzalez Rodriguez</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12013">12013</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7995" target="_blank">7995</a></td>
    <td><a target="_blank" href="https://github.com/crissanclick">Cristian Sanclemente</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11785">11785</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8846" target="_blank">8846</a></td>
    <td><a target="_blank" href="https://github.com/gomencal">gonzalopelon</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11993">11993</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11700" target="_blank">11700</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12018">12018</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12017" target="_blank">12017</a></td>
    <td><a target="_blank" href="https://github.com/emiprotech">Emipro Technologies</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11556">11556</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10583" target="_blank">10583</a></td>
    <td><a target="_blank" href="https://github.com/joni-jones">Ievgen Sentiabov</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11879">11879</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4004" target="_blank">4004</a></td>
    <td><a target="_blank" href="https://github.com/nemesis-back">IvanK</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11588">11588</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7225" target="_blank">7225</a></td>
    <td><a target="_blank" href="https://github.com/MartinPeverelli">Martin Peverelli</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11958">11958</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11197" target="_blank">11197</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12091">12091</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/lazyguru">Joe Constant</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12107">12107</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11880" target="_blank">11880</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11461">11461</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10811" target="_blank">10811</a></td>
    <td><a target="_blank" href="https://github.com/diglin">Sylvain Rayé</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11719">11719</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10920" target="_blank">10920</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11722">11722</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6802" target="_blank">6802</a></td>
    <td><a target="_blank" href="https://github.com/nmalevanec">Malyovanets Nickolas</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11857">11857</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">@adrian-martinez-interactiv4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11902">11902</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9151" target="_blank">9151</a></td>
    <td><a target="_blank" href="https://github.com/serhii-balko">Serhii</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11947">11947</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tkotosz">Tibor Kotosz</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11962">11962</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11793" target="_blank">11793</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11988">11988</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10195" target="_blank">10195</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12031">12031</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6661" target="_blank">6661</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">@enriquei4</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12082">12082</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12079" target="_blank">12079</a></td>
    <td><a target="_blank" href="https://github.com/mihaifaget">@mihaifaget</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12131">12131</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12139">12139</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9768" target="_blank">9768</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11914">11914</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6238" target="_blank">6238</a></td>
    <td><a target="_blank" href="https://github.com/lewisvoncken">Mr. Lewis</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11944">11944</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mpchadwick">Max Chadwick</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12144">12144</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11230" target="_blank">11230</a></td>
    <td><a target="_blank" href="https://github.com/wexo-team">WEXO team</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11459">11459</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10810" target="_blank">10810</a></td>
    <td><a target="_blank" href="https://github.com/jonashrem">Jonas Hünig</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11968">11968</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/jalogut">Juan Alonso</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12061">12061</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/atishgoswami">Atish Goswami</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12136">12136</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ChuckyK">@ChuckyK</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11876">11876</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10834" target="_blank">10834</a></td>
    <td><a target="_blank" href="https://github.com/p-bystritsky">@p-bystritsky</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11274">11274</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10477" target="_blank">10477</a></td>
    <td><a target="_blank" href="https://github.com/marinagociu">Marina Gociu</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11952">11952</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11832" target="_blank">11832</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12001">12001</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11532" target="_blank">11532</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12035">12035</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10014" target="_blank">10014</a></td>
    <td><a target="_blank" href="https://github.com/sbaixauli">Sergio Baixauli</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12077">12077</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10628" target="_blank">10628</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12130">12130</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12141">12141</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/vovayatsyuk">Vova Yatsyuk</a></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12173">12173</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8022" target="_blank">8022</a></td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>
</table>

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)

For more information, [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

### Installation and upgrade instructions

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
