---
group: release-notes
title: Magento Open Source 2.2.4 Release Notes
---
*Patch code and release notes published on May 2, 2018.* *Release notes revised on July 1, 2018.*

We are pleased to present Magento Open Source 2.2.4. This release includes new tools and numerous functional fixes and enhancements, plus a substantial number of contributions from the wider Magento community.

## Highlights

Look for the following highlights in this release:

*  **Significant new bundled extensions** that add instant and accurate tax and shipping calculations right from the cart:

   *  **Amazon Pay** provides a trusted, familiar way for customers to check in and check out. See [Amazon pay](https://pay.amazon.com/us/merchant) for a full description of the advantages this solution offers merchants and their customers.

   *  **Vertex** simplifies and automates the complexity of calculating sales tax. Check out the Magento User guide discussion of [Vertex](http://docs.magento.com/m2/ce/user_guide/tax/vertex.html), too.

   *  **Klarna Payments** is a new payment method. With Klarna Payments, merchants can provide customers with the option to pay now, pay later, or pay by installment for their purchases. See  [Magento User Guide](http://docs.magento.com/m2/ce/user_guide/payment/klarna.html) for information on using Klarna with Magento.  For more information on Klarna products, see [Klarna Payments](https://marketplace.magento.com/klarna-m2-payments.html#product.info.details.release_notes).

*  **Numerous fixes and enhancements to the Magento Shipping and dotmailer** bundled extensions. Merchants can now use [dotmailer](http://docs.magento.com/m2/ce/user_guide/marketing/email-marketing-automation.html) to create their own transactional email templates. [Magento Shipping](http://docs.magento.com/m2/ce/user_guide/shipping/magento-shipping.html) capabilities have been expanded, too.

*  Fixes and enhancements to core features, including **performance improvements** that enable faster shopping with image loading and search performance enhancements.

*  Almost 200 **community contributions**. These community contributions include performance-tuning enhancements plus at least 80 engineering fixes.

Looking for more information on these new features as well as many others? Check out [Magento 2.2.x Developer Documentation]({{ site.baseurl }}/guides/v2.2/) and the [Magento Open Source User Guide](http://docs.magento.com/m2/ce/user_guide/getting-started.html).

### Enhancements

This section describes changes in this release that are not full-fledged features or bug fixes, but that add noticeable improvements to product performance or ease-of-use.

<!--- MAGETWO-87293 -->

*  The admin global search is now translatable, extensible,  and  takes into account the ACL settings for the current user. See [Using global search](http://docs.magento.com/m2/ce/user_guide/stores/admin-global-search.html) for more information. *Fix submitted by Roman K. in pull request 1167*. [GitHub-7698](https://github.com/magento/magento2/issues/7698)

<!--- MAGETWO-84815  -->

*  Magento has an automated checker to enforce the short array syntax convention that we are now enforcing in new code. This standard complies with all requirements of PSR-2. *Fix submitted by Nickolas Malyovanets in pull request 12499*.

<!--- MAGETWO-86940  -->

*  Magento now provides dedicated payment and shipping debug log files to store information specific to those functional areas.

<!--- MAGETWO-87124  -->

*  The Emogrifier dependency has been upgraded to 2.0.0 or later. *Fix submitted by Oliver Klee in pull request 13132*.

<!--- MAGETWO-86744, MAGETWO-86743, MAGETWO-86746, MAGETWO-86742 -->

*  We've replaced `is_null` with strict comparison only for models and block in the following modules: `Catalog`, `Tax`, `Sales`, and `EAV`. *Fixes submitted by Alexander Shkurko in pull requests 13171, 13170, 1163*.

#### dotmailer enhancements

The dotmailer bundled extension features the following enhancements for this release:

*  New Abandoned Cart report table

*  Ability for merchants to design their own transactional email template

*  Enhancement of syncs of subscriber's sales data. Sales data is now synced only if the sales data option is enabled in config.

*  Ability to set transactional email at the Store level

*  Enhanced validation for deletion of cron job CSV files

## Known issue

**Note**: The following known issue has been resolved in Magento Commerce and Open Source 2.2.5. We recommend that all users of 2.2.4 upgrade to 2.2.5 at their earliest convenience. If you are unable to upgrade to 2.2.5, [Patch MAGETWO-92926](https://magento.com/tech-resources/download#download2217) provides a fix for this issue.

Customers have reported the following behavior after upgrading to Magento 2.2.4 in deployments that span multiple websites:

Magento multi-store installations do not use the store view-specific values from the store configuration settings if these settings have different values than the global default configuration settings.  Instead, Magento uses the default configuration for all store views. [GitHub-15205](https://github.com/magento/magento2/issues/15205),  [GitHub-15245](https://github.com/magento/magento2/issues/15245)

We do not recommend upgrading to Magento 2.2.4 if you deploy across multiple websites. Note that this problem is not triggered if you have only a single website with multiple stores or store views.

## Fixes

### Installation, setup, and deployment

<!--- MAGETWO-86496  -->

*  The `backup` command now works as expected.  *Fix submitted by Jagriti Joshi in pull request 13066*. [GitHub-12877](https://github.com/magento/magento2/issues/12877)

<!--- MAGETWO-86045  -->

*  Links to Magento installation documentation in `setup/view/magento/readiness-check/progress.html` are now correct. *Fix submitted by Jonas Hünig in pull request 12857*.

<!--- MAGETWO-84506  -->

*  You can now use the `app:config:status` command to check whether configuration propagation is up-to-date.  *Fix submitted by Juan Alonso in pull request 12441*.

<!--- MAGETWO-84125  -->

*  The `bin/magento setup:rollback -d filename.sql` command now works as expected. Previously, this database rollback operation failed on certain versions of Magento (for example, 2.1.9).  *Fix submitted by Roman K. in pull request 12108*. [GitHub-12064](https://github.com/magento/magento2/issues/12064)

<!--- MAGETWO-84081  -->

*  You can now set API access to integrations for Admin roles, which gives privileged users the ability to grant limited access to users such as third-party integrators. [GitHub-9684](https://github.com/magento/magento2/issues/9684)

<!--- MAGETWO-81841  -->

*  You can now enable or disable the Magento Profiler from the command line. [GitHub-9277](https://github.com/magento/magento2/issues/9277)

<!--- MAGETWO-81740  -->

*  The icons for Extension Manager and Module Manager are now consistent with the main content area and left-hand menu of the Web Setup Wizard. *Fix submitted by Danny Verkade in pull request 11388*. [GitHub-11236](https://github.com/magento/magento2/issues/11236)

<!--- MAGETWO-80111  -->

*  Magento now continues operating in maintenance mode if it was previously enabled. Previously, Magento disabled maintenance mode  when you used one of these commands:

   *  `bin\magento module:uninstall`
   *  `bin\magento setup:backup`
   *  `bin\magento setup:rollback`
   *  `bin\magento theme:uninstall`
   *  `bin\magento deploy:mode:set production`

*Fix submitted by Joke Puts in pull request 11052*. [GitHub-9918](https://github.com/magento/magento2/issues/9918)

<!--- MAGETWO-85778  -->

*  You can specify a custom version for static files being deployed, and now nginx sample config files can match these custom  versions, too. *Fix submitted by Scott Buchanan in pull request 12521*.

<!--- MAGETWO-85274  -->

*  The `CrontabManager.php` file has been updated as follows: If `crontab` has already been populated, the `php bin/magento cron:install` command adds `#~ MAGENTO START` and the rest of code directly to the last row of crontab without any spaces. *Fix submitted by Michele Fantetti in pull request*.

<!--- MAGETWO-85744  -->

*  The `ext-bcmath` PHP extension is now required in Open Source. Previously, it was required for Commerce only. *Fix submitted by Mobecls in pull request 12768*.

<!--- MAGETWO-88149  -->

*  The `cache_lifetime` default setting for the `Magento\Theme\Block\Html\Footer` block is no longer set to **false**, and the new default setting is **3600**. *Fix submitted by zolat in pull request 13762*.

<!--- MAGETWO-87975  -->

*  The `magento maintenance:allow-ips` command now has the `--add` flag, which appends a new IP address to the list of allowed IP addresses. Previously, when you added a new IP address, you had to copy the existing addresses. *Fix submitted by Barry vd. Heuvel in pull request 13586*.

<!--- MAGETWO-87900  -->

*  The `config:set` command now has a `lock-config` option, and configuration values are always stored in `app/etc/config.php` instead of `app/etc/env.php`. *Fix submitted by Andreas von Studnitz in pull request 13280*.

<!--- MAGETWO-87859  -->

*  In the `Backend/etc/adminhtml/system.xml` file, the `url` group and `redirect_to_base` field are now configured so that the `showInWebsite` and `showInStore` attributes are set to `1`. *Fix submitted by JeroenVanLeusden in pull request 13614*.

<!--- MAGETWO-87856  -->

*  You can now deploy static content on demand while in production mode.

<!--- MAGETWO-87838  -->

*  The output of the `magento maintenance:status` command no longer inserts a comma in between IP addresses, making it easier to copy and paste the values. *Fix submitted by Barry vd. Heuvel in pull request 13587*.

<!--- MAGETWO-87744  -->

*  The `DeploymentConfig` reader now always returns an array. *Fix submitted by Barry vd. Heuvel in pull request 13584*.

<!--- MAGETWO-83782  -->

*  Magento has improved how it manages the size of the `cron_schedule` table. [GitHub-11002](https://github.com/magento/magento2/issues/11002)

<!--- MAGETWO-82288  -->

*  Magento now includes a helper object to facilitate access to styling objects in the Symfony console. *Fix submitted by Wesley Guthrie in pull request 11504*.

<!--- MAGETWO-83120  -->

*  Magento no longer throws an error when you try to generate an URN catalog for an empty `misc.xml` file. *Fix submitted by Timon de Groot in pull request 11686*. [GitHub-5188](https://github.com/magento/magento2/issues/5188)

<!--- MAGETWO-84180  -->

*  The `sampledata:deploy` and `remove` commands now have `no-update` options. *Fix submitted by Fabian Schmengler in pull request 12359*.

<!--- MAGETWO-88155  -->

*  The currencies dropdown menu that is available during the setup process (step 4 -- customize your store) no longer displays unallowed currencies. *Fix submitted by Ricardo Martins in pull request 13770*.

<!--- MAGETWO-82666  -->

*  A database backup created by `setup:backup --db` and restored with `setup:rollback -d` now includes triggers as expected.  Previously, the restored database did not include triggers, which meant that indexes could not work correctly. *Fix submitted by Denis Ristic in pull request 11369*. [GitHub-9036](https://github.com/magento/magento2/issues/9036)

### Bundle products

<!--- MAGETWO-86022  -->

*  Save operations now work as expected for bundle products. *Fix submitted by dzianis-yurevich in pull request 12734*. [GitHub-6916](https://github.com/magento/magento2/issues/6916)

<!--- MAGETWO-86882  -->

*  You can now duplicate a bundle product without stripping the original bundle product of its options.  *Fix submitted by MattUnity in pull request 1217*.

### Catalog

<!--- MAGETWO-87447  -->

*  Magento now successfully updates a product's `stock_item` `extension_attribute` parameter for a product previously created using REST. *Fix submitted by nuzil in pull request 13494*.

<!--- MAGETWO-73262  -->

*  When two customers check out concurrently for the same product, one of the checkouts now succeeds. Previously, when two customers checked out concurrently for the same product, and the total quantity being ordered is greater than the quantity available, the stock could become negative. *Fix submitted by Myroslav Dobra in pull request 2133*.

<!--- MAGETWO-87477  -->

*  The `getUrl` method in `Magento\Catalog\Model\Product\Attribu…` no longer returns image URLs with unexpected double slashes. *Fix submitted by Igor Tregub in pull request 13498*.

<!--- MAGETWO-73696  -->

*  When sorting by price, Magento now displays the same number of products no matter how it sorts products in the Catalog Product list. Previously, Magento reduced the product count by the number of disabled products when sorting by price.

<!--- MAGETWO-75786  -->

*  The category filter used for layered navigation for configurable products with no available options now counts products accurately.

<!--- MAGETWO-81916  -->

*  When you set the `category_ids` attribute to be visible in the storefront catalog, Magento now displays catalog listings as expected. Previously, Magento threw an exception. *Fix submitted by Manu Gonzalez Rodriguez in pull request 11389*. [GitHub-11341](https://github.com/magento/magento2/issues/11341)

<!--- MAGETWO-81942  -->

*  Product display issues within categories that have been filtered by price have been resolved: Products are no longer repeated within a category, and random products are no longer included. *Fix submitted by Mayank Zalavadia in pull request 11429*. [GitHub-11139](https://github.com/magento/magento2/issues/11139)

<!--- MAGETWO-82313  -->

*  Updating a product with the REST API (`PUT /rest/all/V1/products/example_sku`) no longer assigns the product to all websites automatically. (Automatic assignment to all websites now occurs only when you create the product in All Store Views scope.) *Fix submitted by adrian-martinez-interactiv4 in pull request 11444*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- MAGETWO-82464  -->

*  Magento no longer throws an error when you re-save a product attribute with a new name. *Fix submitted by Raul Mateos in pull request 11617*. [GitHub-6770](https://github.com/magento/magento2/issues/6770)

<!--- MAGETWO-83399  -->

*  You can now successfully remove a toolbar from a product listing page. Previously, you could explicitly remove the toolbar from layout configuration, but Magento would return `product_list_toolbar` to the layout. *Fix submitted by mariuscris in pull request 11473*. [GitHub-9413](https://github.com/magento/magento2/issues/9413)

<!--- MAGETWO-84018  -->

*  The `getAttributeText($attributeCode)` method now returns string values as expected. Previously, this method returned an array of attribute values. *Fix submitted by p-bystritsky in pull request 12003*.

<!--- MAGETWO-84087  -->

*  You can now add customizable options to a product. Previously, when you tried to add a custom option to  product, Magento threw this error: `A 'Uncaught TypeError: Cannot read property 'apply' of undefined' error`. *Fix submitted by Roman K. in pull request 11965*. [GitHub-11792](https://github.com/magento/magento2/issues/11792)

<!--- MAGETWO-84311  -->

*  Magento now correctly decodes single quotation marks in the Admin attribute option input fields. *Fix submitted by erfanimani in pull request 12133*. [GitHub-12127](https://github.com/magento/magento2/issues/12127)

<!--- MAGETWO-84367  -->

*  You can now save emojis in custom product options. *Fix submitted by Carlos Lizaga in pull request 12253*.

<!--- MAGETWO-84498  -->

*  The `delay` parameter now works as expected, which permits you to set the delay on the JQuery widget opening or closing. Previously, this parameter was documented, but did not work as expected. *Fix submitted by Sam Carr in pull request 12161*.

<!--- MAGETWO-84515  -->

*  Third-party category images now have `size` and `type` properties. *Fix submitted by Vova Yatsyuk in pull request 12161*.

<!--- MAGETWO-84652  -->

*  Category page X-Magento-Tags headers no longer contain product cache identities  when category display mode is set to **Static block only**. *Fix submitted by Atish Goswami in pull request 12466*.

<!--- MAGETWO-84665  -->

*  You can now delete rows in the `dynamicRows` component. *Fix submitted by Roman K. in pull request 921*. [GitHub-8830](https://github.com/magento/magento2/issues/8830)

<!--- MAGETWO-84808  -->

*  You can now add a new product with custom attributes that has the same name and attributes as a previously deleted product. Previously, Magento did not let you add this new product because a `request_path` with the same value already existed in `table url_rewrite` from the previous product. *Fix submitted by Nickolas Malyovanets in pull request 12167*. [GitHub-12110](https://github.com/magento/magento2/issues/12110)

<!--- MAGETWO-84949  -->

*  The `og:type` meta tag content value has been corrected from `<meta property="og:type" content="og:product" />` to `<meta property="og:type" content="product" />`. *Fix submitted by Atish Goswami in pull request 12530*.

<!--- MAGETWO-85293  -->

*  The Product Image Watermark Size Validation message has been revised for accuracy. *Fix submitted by Nickolas Malyovanets in pull request 985*. [GitHub-12613](https://github.com/magento/magento2/issues/12613)

<!--- MAGETWO-85294  -->

*  Magento no longer creates an extraneous new product when you save an existing product whose SKU you've changed.  *Fix submitted by Nickolas Malyovanets in pull request 984*. [GitHub-12535](https://github.com/magento/magento2/issues/12535)

<!--- MAGETWO-85301  -->

*  cURL requests to delete a product's tier pricing when used on store code **all** now works as expected. Previously, this cURL request deleted the tier pricing but also all the image selections for the product. *Fix submitted by Nickolas Malyovanets in pull request 977*. [GitHub-10797](https://github.com/magento/magento2/issues/10797)

<!--- MAGETWO-85307  -->

*  Sort by Price now works as expected on the catalog search page. *Fix submitted by Roman K. in pull request 929*.  [GitHub-12468](https://github.com/magento/magento2/issues/12468)

<!--- MAGETWO-85545  -->

*  If an error occurs when you run `catalog:images:resize`, Magento now includes an entry into the log file. Previously, Magento displayed an error message, but did not add an entry into any log files. *Fix submitted by Roman K. in pull request 1000*. [GitHub-8204](https://github.com/magento/magento2/issues/8204)

<!--- MAGETWO-85546  -->

*  You can now duplicate and save a product successfully. Previously, you could not successfully duplicate a product, and Magento displayed this message: `Notice: Undefined offset: 0 in /home/software/public_html/vendor/magento/module-catalog/Model/Category/Link/SaveHandler.php on line 124`. *Fix submitted by p-bystritsky in pull request 983*.  [GitHub-12259](https://github.com/magento/magento2/issues/12259)

<!--- MAGETWO-85636  -->

*  The REST API now saves all product properties as expected. Previously, Magento did not save the price and weight, and these attributes were not returned in the result of the POST request. *Fix submitted by Nickolas Malyovanets in pull request 1018*. [GitHub-6486](https://github.com/magento/magento2/issues/6486)

<!--- MAGETWO-86016  -->

*  Duplicate `email` IDs no longer occur on the Magento default contact page when running Google Chrome  { Version 63.0.3239.84 (Official Build) (64-bit) }. *Fix submitted by serhii-balko in pull request 1036*. [GitHub-12712](https://github.com/magento/magento2/issues/12712)

<!--- MAGETWO-86019  -->

*  The `hasDataChanges` attribute for loaded EAV collection items now returns `true` or `false` as expected. Previously, this attribute always returned `true`. *Fix submitted by virtual97 in pull request 12736*. [GitHub-12374](https://github.com/magento/magento2/issues/12374)

<!--- MAGETWO-86021  -->

*  `ajax:addToCart` now contains the `eventData` parameter, with variables for SKU and quantity. *Fix submitted by Renon Stewart in pull request 12875*.

<!--- MAGETWO-86023  -->

*  You can now successfully save a new option for a product custom attribute when the value of Admin scope is empty. Previously, Magento threw an exception. *Fix submitted by virtual97 in pull request 12755*.

<!--- MAGETWO-86662  -->

*  You can now sort product collections by the `is_saleable` attribute. *Fix submitted by Nickolas Malyovanets in pull request 1045*. [GitHub-7768](https://github.com/magento/magento2/issues/7768)

<!--- MAGETWO-86547  -->

*  We've added a failsafe to the `items.phtml` file.  *Fix submitted by Sam Granger in pull request 13086*.

<!--- MAGETWO-84267  -->

*  You can now save a product with customizable options. Previously, if you were trying to add a customizable option (for example, a customer group) to a product, Magento did not let you save the product, the form did not close, and a validation issue was triggered. *Fix submitted by luismiguelyangehuaman in pull request 12048*. [GitHub-11528](https://github.com/magento/magento2/issues/11528)

<!--- MAGETWO-85288  -->

*  Magento now correctly displays stock status for products. *Fix submitted by Roman K. in pull request 955*.

<!--- MAGETWO-86663  -->

*  The catalog product list widget now works with multiple SKUs. Previously, Magento displayed this error, `We're sorry, an error has occurred while generating this email`. *Fix submitted by Nickolas Malyovanets in pull request 1050*.
 [GitHub-11897](https://github.com/magento/magento2/issues/11897)

<!--- MAGETWO-85876  -->

*  Magento now loads type-dependent layout handles before more specific ID/SKU layout handles. Previously, when Magento updated a product page layout for a specific ID with `catalog_product_view_id_<product_ID>.xml`, some changes were overwritten by a less specific `catalog_product_view_type_<product_type>.xml`. *Fix submitted by Andreas Schrammel in pull request 12807*.

<!--- MAGETWO-87897  -->

*  Unused temporary variables have been removed from `Adminhtml/Category/Save.html`. *Fix submitted by Pierre Martin in pull request 13663*.

<!--- MAGETWO-87847  -->

*  Language switching now works as expected on the Catalog and Product pages. Previously, language switching did not work on these pages in production mode. *Fix submitted by p-bystritsky in pull request 1143*. [GitHub-11963](https://github.com/magento/magento2/issues/11963)

<!--- MAGETWO-87526  -->

*  The subcategory URL path is now updated for a store view according to the URL path of its parent category.

<!--- MAGETWO-87514  -->

*  In cases where  `imagebuilder` makes multiple calls, it no longer re-uses attributes from the first call if attributes from a second call are empty. Previously, `imagebuilder` re-used the attributes from the first call, which lead to unexpected results in storefront image display. *Fix submitted by Ihor Sviziev in pull request 13438*.

<!--- MAGETWO-87496  -->

*  `updateCart.phtml` now uses dynamic rather than hardcoded validators. *Fix submitted by Gil Greenberg in pull request 13462*.

<!--- MAGETWO-87294  -->

*  An unused constructor dependency has been removed from the Product Link Save handler. *Fix submitted by Ihor Sviziev in pull request 13436*.

<!--- MAGETWO-88116  -->

*  The Low Stock report now accurately lists all out-of-stock products. Previously, this report was not accurate when the All Websites view was selected. *Fix submitted by gwharton in pull request 13682*. [GitHub-10595](https://github.com/magento/magento2/issues/10595)

<!--- MAGETWO-85163  -->

*  We've improved the visibility of products when displayed by category, and you can now filter by status. *Fix submitted by Peter Jaap Blaakmeer in pull request 12564*.

<!--- MAGETWO-85575  -->

*  Magento now correctly sets a `product_links` position attribute even when the attribute value is not set in a GET request. Previously, only the first two of each link type were shown in the backend or in a GET request response, even though Magento correctly added the product links to the database. *Fix submitted by Mohammad Haj-Salem in pull request 12650*.

### Cart and checkout

<!--- MAGETWO-83780  -->

*  Magento no longer adds addresses with `saveInAddressBook` set to **0**  to the address book for new customers. Previously, if you placed an order as a guest and set the `save_in_address_book` setting for an address to **0**, Magento still copied that address  to the customer address book when registering as a new customer on the checkout success page. [GitHub-7691](https://github.com/magento/magento2/issues/7691)

<!--- MAGETWO-85297  -->

*  Magento no longer combines the Custom Checkout and Shipping steps when Magento loads the checkout page. *Fix submitted by Roman K. in pull request 975*.

<!--- MAGETWO-85317  -->

*  You can now successfully change currency for an order before you complete the order. Previously, if you changed currency, when you  proceeded with  checkout by choosing as Bank Transfer Payment as Payment Method, Magento displayed, **Your credit card will be charged for**. *Fix submitted by Roman K. in pull request 993*. [GitHub-12526](https://github.com/magento/magento2/issues/12526)

<!--- MAGETWO-86506  -->

*  Magento no longer throws a JavaScript error on the cart from postcode validation when **United States** is deselected in the **Allowed Countries** Admin option (**Admin > Stores > Settings > Configuration > General > Default Country**). *Fix submitted by codekipple in pull request 13051*.

<!--- MAGETWO-86543  -->

*  Street format spacing when multiple streets are present is now consistent across **Shipping** and **Review & Payments** checkout steps. *Fix submitted by nfourteen in pull request 13082*.

<!--- MAGETWO-86896  -->

*  Magento now displays text on the New Cart Rules page correctly. Previously, labels listed in the Store View Specific Labels section of this page were sometimes truncated or duplicated. *Fix submitted by serhii-balko in pull request 1146*. [GitHub-12231](https://github.com/magento/magento2/issues/12231)

<!--- MAGETWO-86617  -->

*  When you check out as guest  and click **Create an account** on the success page, you can now click on the customer name to jump to the customer record. *Fix submitted by Renon Stewart in pull request 12998*.

<!--- MAGETWO-87340  -->

*  The `XML_PATH_CUSTOMER_MUST_BE_LOGGED` constant has been deprecated. *Fix submitted by Roman K. in pull request 1148*. [GitHub-7848](https://github.com/magento/magento2/issues/7848)

<!--- MAGETWO-88332  -->

*  `dropdownDialog` is now required when the minicart is available. *Fix submitted by Alexander Menk in pull request 13830*.

<!--- MAGETWO-87196  -->

*  The Check Out with Multiple Addresses page now displays an empty state field as expected when a customer changes from one address to another. *Fix submitted by enriquei4 in pull request 13364*. [GitHub-8621](https://github.com/magento/magento2/issues/8621)

### Configurable products

<!--- MAGETWO-86781  -->

*  You can now use custom price symbols when assigning prices to configurable prices. Previously, Magento did not properly display prices for configurable products when you used a custom price symbol when assigning prices. *Fix submitted by pradeep-wagento in pull request 13025*. [GitHub-12430](https://github.com/magento/magento2/issues/12430)

<!--- MAGETWO-86311  -->

*  Magento now reorders configurable attribute options as expected on the product page. *Fix submitted by wardcapp in pull request 12963*. [GitHub-7441](https://github.com/magento/magento2/issues/7441)

<!--- MAGETWO-85782  -->

*  Magento now displays elements of the **Catalog > Products > Create Configurations** page correctly. Previously, the currency symbol overlapped with the attribute option's price during creation of a configurable product. *Fix submitted by Vasilina in pull request*.

<!--- MAGETWO-85777  -->

*  If you enter an invalid value for an SKU during the creation of the configurable product, Magento now displays a warning and does not let you save the product. Previously, you were not warned about invalid SKU values, and when you clicked **Save**, all the product information you entered was lost. *Fix submitted by Zamaroka in pull request 12737*. [GitHub-11953](https://github.com/magento/magento2/issues/11953)

<!--- MAGETWO-85634  -->

*  Magento now correctly runs a partial attribute (EAV) reindex of configurable products whose child products' visibility is set to **Not Visible Individually**. *Fix submitted by Roman K. in pull request 1023*. [GitHub-12667](https://github.com/magento/magento2/issues/12667)

<!--- MAGETWO-85286  -->

*  Magento now displays the ID and `Visibility` parameter of child products when you use the `LinkManagementInterface` service contract to retrieve the ID and visibility of these products. Previously, Magento displayed NULL. *Fix submitted by Nickolas Malyovanets in pull request 986*.

<!--- MAGETWO-82888  -->

*  The product price indexer (`catalog_product_price reindex`) no longer stalls during reindexing.

<!--- MAGETWO-86918  -->

*  Product records inside the `catalog_product_super_link` table are no longer updated needlessly when you save a configurable product. Previously, saving configurable product erased and then reinserted records in the `catalog_product_super_link` table even when child products were not changed. This practice quickly resulted in an unnecessarily large `catalog_product_super_link` table, especially in multi-website installations.

### Customer accounts

<!--- MAGETWO-86427  -->

*  Magento now trims trailing and leading spaces when saving the name of a new contact. *Fix submitted by wardcapp in pull request 12964*. [GitHub-10415](https://github.com/magento/magento2/issues/10415)

<!--- MAGETWO-85580  -->

*  We fixed the invalid parameter configuration that was provided for the `$block` argument of `Magento\\Ui\\Component\\HtmlContent`. *Fix submitted by Tomasz Gregorczyk in pull request 12964*.

<!--- MAGETWO-85300  -->

*  Magento now successfully sends email (with content) even when you make a mistake in the email template file name. Previously, when the template name was incorrect, Magento sent the email with no content. *Fix submitted by Roman K. in pull request 970*. [GitHub-8437](https://github.com/magento/magento2/issues/8437)

<!--- MAGETWO-85653  -->

*  You can now import customer addresses from websites with country restrictions.

<!--- MAGETWO-84862  -->

*  Magento no longer displays the `Too many password reset requests` error when the **max wait time between password resets** setting has been disabled. Previously, when you attempted to reset a customer's password through the Admin, Magento threw an error even when you disabled the `max wait time between password resets` setting in the store configuration settings. *Fix submitted by Cole Hafner in pull request*. [GitHub-11409](https://github.com/magento/magento2/issues/11409)

<!--- MAGETWO-84439  -->

*  Magento no longer throws an exception when you try to open your account address book immediately after creating a customer. *Fix submitted by Chris Pook in pull request 12220*. [GitHub-12180](https://github.com/magento/magento2/issues/12180)

<!--- MAGETWO-83026  -->

*  The `isConfirmationRequired` method in the `AccountManagement` class is now public, which makes it available for plugins. (For example, you can now develop custom business logic to decide if confirmation is required (yes/no) for certain customers.) *Fix submitted by Derrick Heesbeen in pull request 11878*.

<!--- MAGETWO-82635  -->

*  When configuring a customer account, you can now leave the prefix or suffix fields as optional. Previously, if you did not select an option for these fields, Magento defaulted to selecting the first option in the list. *Fix submitted by Andreas von Studnitz in pull request 11462*. [GitHub-7241](https://github.com/magento/magento2/issues/7241)

<!--- MAGETWO-85741  -->

*  The storefront **Back to Sign in** button now works as expected. Previously, when you clicked that button, Magento simply reloaded the current page. *Fix submitted by StasKozar in pull request 12759*. [GitHub-12715](https://github.com/magento/magento2/issues/12715)

<!--- MAGETWO-85672  -->

*  The `window.checkout.customerLoginUrl` now contains a URL that includes the referrer in base64 encoding (for example, https://myshop.com/customer/account/login/referrer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0). Previously, the login URL did not include a referrer (for example, https://myshop.com/customer/account/login). *Fix submitted by Tommy Quissens in pull request 12630*. [GitHub-12627](https://github.com/magento/magento2/issues/12627)

<!--- MAGETWO-86989  -->

*  When you are on the cart page and click a product's  **Edit** link, the product page now correctly displays the product quantity currently in the cart. *Fix submitted by Arnoud Beekman in pull request 13310*.

<!--- MAGETWO-87657  -->

*  You can now create a custom attribute of type file for Customer objects as expected. Previously,  you could create the custom attribute, but the file would not upload. *Fix submitted by Mkennethsmith in pull request 13563*. [GitHub-11252](https://github.com/magento/magento2/issues/11252)

<!--- MAGETWO-87950  -->

*  The event `customer_address_after_save_viv_observer` is now spelled correctly in the Customer `events.xml` file.. *Fix submitted by Renon Stewart in pull request 13661*.

<!--- MAGETWO-71829  -->

*  The `is_subscribed` extended parameter is now returned when a web API is used to modify or return information about a customer.

### Dashboard

<!--- MAGETWO-86443  -->

*  The `top destinations` configuration field is now configurable on a store level. Previously, it was configurable on the global level only. *Fix submitted by Andreas von Studnitz in pull request 13052*.

<!--- MAGETWO-86205  -->

*  When multiple validation errors occur while saving a customer address, Magento now shows unique messages in the `adminhtml` customer edit page. *Fix submitted by adrian-martinez-interactiv4 in pull request 12922*.

<!--- MAGETWO-86203  -->

*  The scroll bar on the Admin store switcher is now scrollable on machines running OSX. *Fix submitted by Juan Alonso in pull request 12931*.

### Directory

<!--- MAGETWO-85659  -->

*  The `\Magento\Directory\Model\PriceCurrency::format()` method no longer fails if you do not configure a conversion rate from the base to the specified currency. Previously, if you did not specify this conversion rate, Magento rendered the price (amount) in the base currency, not the specified currency. *Fix submitted by Nickolas Malyovanets in pull request 1022*. [GitHub-6965](https://github.com/magento/magento2/issues/6965)

<!--- MAGETWO-85583  -->

*  Magento now requires that customers select State/Province when shipping orders to India, and the checkout page now provides a drop-down field with appropriate values. *Fix submitted by p-bystritsky in pull request*. [GitHub-12378](https://github.com/magento/magento2/issues/12378)

<!--- MAGETWO-86170  -->

*  You can now disable the **State is Required for** field. *Fix submitted by Burlacu Vasilii in pull request 12917*. [GitHub-12894](https://github.com/magento/magento2/issues/12894)

### EAV attributes

<!--- MAGETWO-86240  -->

*  Creating new configuration attributes no longer causes naming collisions in the JavaScript UI registry. Previously, when you created a new default attribute and then subsequently created a new product, JavaScript errors occurred.  *Fix submitted by Volodymyr Zaets in pull request 12945*. [GitHub-12555](https://github.com/magento/magento2/issues/12555)

<!--- MAGETWO-85875  -->

*  You can now use a single query to retrieve attribute groups from multiple attribute sets. *Fix submitted by Marius Strajeru in pull request 12105*. [GitHub-11936](https://github.com/magento/magento2/issues/11936)

<!--- MAGETWO-85772  -->

*  Magento now saves multiselect attribute for a product that has a related product using another attribute set. Previously, multiselect attribute values were not saved for a product in the Admin panel when it had a related product that used another attribute set. *Fix submitted by awarche in pull request 12767*.

<!--- MAGETWO-85579  -->

*  The product attribute repository save method  no longer resets the source model to null when you create a new product attribute through code. *Fix submitted by Nickolas Malyovanets in pull request 1012*. [GitHub-10814](https://github.com/magento/magento2/issues/10814)

<!--- MAGETWO-85302  -->

*  Magento now uses the correct  `entity_model` in `table eav_entity_type` for invoices (`Magento\Sales\Model\ResourceModel\Order\Invoice`). Previously, in `table eav_entity_type` for `entity_type_code = "invoice"` the `entity_model` was `Magento\Sales\Model\ResourceModel\Order`. *Fix submitted by Nickolas Malyovanets in pull request 980*. [GitHub-10123](https://github.com/magento/magento2/issues/10123)

<!--- MAGETWO-84272  -->

*  When a validation message is returned, Magento no longer displays the attribute code (`$attrCode`), but instead returns the label (`$label`). This change makes it easier to translate messages. *Fix submitted by Hewerson Freitas in pull request 12120*.

<!--- MAGETWO-72597  -->

*  You can now perform a mass update on products that have more than 60 attributes.

<!--- MAGETWO-85833  -->

*  `Magento\Eav\Model\Config::getAttribute` now stops the Profiler before it returns Profiler run time. Previously, `Magento\Eav\Model\Config::getAttribute` did not stop the Profiler from returning early, and consequently reported incorrect run time. *Fix submitted by Nick Anstee in pull request 12810*.

<!--- MAGETWO-87588  -->

*  The `beforeSave` method encodes an attribute value only when it has not yet been encoded. Previously, the JSON-encoded attribute value was loaded  correctly, but when you saved a product multiple times,  the attribute value was also encoded multiple times. Consequently, Magento did save the product, and  displayed this error, **Unable to unserialize value**. *Fix submitted by Tibor Kotosz in pull request 13551*.

<!--- MAGETWO-87354  -->

*  The deprecated `each()` function has been removed from the code. *Fix submitted by Ihor Sviziev in pull request*.

### Email

<!--- MAGETWO-83741  -->

*  Order confirmation emails from the Admin in multistore environments no longer default to the primary store, but instead are sent from the store that the customer used. *Fix submitted by Roman K. in pull request*. [GitHub-11740](https://github.com/magento/magento2/issues/11740)

<!--- MAGETWO-86881  -->

*  Magento no longer sends misleading feedback when sending tracking information email. Previously, instead of sending a notice that a shipment was underway, this response was sent, **You sent the shipment**. *Fix submitted by Nickolas Malyovanets in pull request 1245*. [GitHub-5697](https://github.com/magento/magento2/issues/5697)

### Frameworks

<!--- MAGETWO-86337  -->

*  You can now switch to default mode from production mode. Previously, if you tried to switch back to default mode, Magento displayed this error, `Cannot switch into given mode 'default'`. *Fix submitted by Etty in pull request 12752*. [GitHub-4292](https://github.com/magento/magento2/issues/4292)

<!--- MAGETWO- 86654 -->

*  `vendor/magento/framework/composer.json` now declares a dependency on `magento/zendframework1`. Previously, packages depending on `magento/framework` packages failed to execute. *Fix submitted by Ihor Sviziev in pull request 12990*. [GitHub-12967](https://github.com/magento/magento2/issues/12967)

<!--- MAGETWO-85290  -->

*  The `filePutContents('file.txt')` now contains content as expected. Previously, Magento threw this error, `The specified "file.text" file could not be written`.  *Fix submitted by Nickolas Malyovanets in pull request 962*. [GitHub-7467](https://github.com/magento/magento2/issues/7467)

<!--- MAGETWO-85770  -->

*  You can now subscribe to events that contain a number in their name.  *Fix submitted by Mobecls in pull request 12758*. [GitHub-5035](https://github.com/magento/magento2/issues/5035)

<!--- MAGETWO-85872  -->

*  PhpDoc now shows correct parameter types. Previously, PhpDoc showed only a type of `string`, although `array` was also a valid parameter type. *Fix submitted by Freek Vandeursen in pull request 12826*.

<!--- MAGETWO-86484  -->

*  Content no longer jumps when pages are reloaded on the Admin because  `notices-wrapper` now has a `min-height` setting. *Fix submitted by Anna Völkl in pull request 12985*.

<!--- MAGETWO-86277  -->

*  We've corrected a typo in the `Magento\Ui\Controller\Adminhtml\Index\Render` action. *Fix submitted by Nick in pull request 12951*.

<!--- MAGETWO-86154  -->

*  `X-Magento-Vary` and `PHPSESSID` now have the same expiration time. Previously, the  `X-Magento-Vary` cookie had an expiration of `session`, which meant it was not considered expired until the browser was closed. In contrast, the `PHPSESSID` cookie had a finite expiration time (not `session`). At times, this resulted in  Magento caching the wrong page for the logged-in user.

<!--- MAGETWO-85992  -->

*  `\Magento\Config\Model\Config\Structure\Reader::processingDocument`  now throws a more helpful validation exception. *Fix submitted by Patrick McLain in pull request 12859*.

<!--- MAGETWO-88146  -->

*  Creating an observer that uses `ObserverInterface` no longer triggers a patch-level dependency on `magento/framework`. *Fix submitted by Kristof in pull request 13759*.

<!--- MAGETWO-88115  -->

*  RewriteBase directive has been added to the `.htaccess` file in `pub/static` to support the potential installation of Magento code under a directory inside the web root. *Fix submitted by Cristiano Casciotti in pull request 13678*.

<!--- MAGETWO-87261  -->

*  The doc block of the `walk` method in a collection now correctly describes that the method accepts a string or array. *Fix submitted by ByteCreation in pull request 13373*.

<!--- MAGETWO-82069  -->

*  The report processor now returns an HTTP 500 status code (which better communicates the need for user action) instead of a 503 status code. *Fix submitted by Andrew Howden in pull request 11513*. [GitHub-11512](https://github.com/magento/magento2/issues/11512)

#### App framework

<!--- MAGETWO-81802  -->

*  The customer grid indexer now works as expected.  Previously, this indexer did not work when reindexing using the command-line interface during upgrade. *Fix submitted by Leonid Poluyanov in pull request 10838*. [GitHub-10838](https://github.com/magento/magento2/issues/10838)

<!--- MAGETWO-80223  -->

*  `expectException()` calls now accept two parameters (instead of one). *Fix submitted by Fabian Schmengler in pull request 11099*. [GitHub-11059](https://github.com/magento/magento2/issues/11059)

<!--- MAGETWO-84003  -->

*  The `findAccessorMethodName()` method (`Magento\Framework\Reflection\NameFinder`) now provides a more helpful exception message. *Fix submitted by Roman K. in pull request 12303*. [GitHub-9764](https://github.com/magento/magento2/issues/9764)

<!--- MAGETWO-84016  -->

*  Customers with an empty **Date of Birth** field can now be saved even when the field is not marked (or checked on the JavaScript side) as mandatory. *Fix submitted by Vova Yatsyuk in pull request 12302*. [GitHub-12146](https://github.com/magento/magento2/issues/12146)

<!--- MAGETWO-84371  -->

*  You can now alter the transport variable in the `email_invoice_set_template_vars_before` event. *Fix submitted by Roman K. in pull request 12132*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

<!--- MAGETWO-84372  -->

*  Validation of South Korean zip codes now supports current South Korean zip code format. *Fix submitted by Roman K. in pull request 903*. [GitHub-9515](https://github.com/magento/magento2/issues/9515)

#### Configuration framework

<!--- MAGETWO-84464  -->

*  Scope-based configuration now decrypts data as expected. Previously, scope-based configuration failed to decrypt data on the default store only. *Fix submitted by DubovykOleksandr in pull request 8591*.

#### JavaScript framework

<!--- MAGETWO-83401  -->

*  The `depends` field now works for fields of type `radio` in `system.xml`. *Fix submitted by Javier Villanueva in pull request 11539*.

<!--- MAGETWO-83993  -->

*  Magento now sorts fields and amounts as expected  when you extend a dynamic-row element in a `ui_component` and add a sort order attribute with an amount that falls between the other elements' amount. *Fix submitted by Harald Deiser in pull request 11846*.

#### Session framework

<!--- MAGETWO-83373  -->

*  The Setup Wizard page now loads successfully when the session storage method is memcache.  Previously, Magento returned an HTTP 500 error when you navigated to **System > Tools > Web Setup Wizard Setup Wizard**  in installations where you've configured the session storage method to memcache in `env.php`. *Fix submitted by Marty S in pull request 11608*. [GitHub-9633](https://github.com/magento/magento2/issues/9633)

<!--- MAGETWO-83287  -->

*  When you add a product to your wish list after logging out, Magento now redirects you to your account wish list page and adds the product. Previously, you were redirected to your wish list page, but Magento did not add the product. *Fix submitted by Oscar Recio in pull request 12038*. [GitHub-11825](https://github.com/magento/magento2/issues/11825)

<!--- MAGETWO-86880  -->

*  Anonymous calls using REST no longer trigger the creation of PHP sessions. *Fix submitted by serhii-balko in pull request 1247*. [GitHub-7213](https://github.com/magento/magento2/issues/7213)

#### Web API framework

<!--- MAGETWO-83854  -->

*  A user who has been denied permissions for negotiable quote editing can now create customer addresses.

<!--- MAGETWO-84979  -->

*  Swagger now works as expected on instances of Magento that are running on non-standard ports. *Fix submitted by JeroenVanLeusden in pull request 12541*.

<!--- MAGETWO-84994  -->

*  You can now set attribute values to empty strings using REST. Previously, Magento would not let you use REST to pass the following attributes with empty values: `special_from_date`, `special_to_date`, and `special_price`. *Fix submitted by Roman K. in pull request 916*. [GitHub-8862](https://github.com/magento/magento2/issues/8862)

<!--- MAGETWO-85534  -->

*  We've updated the `webapi` module to improve the order of how arguments are merged in multiple `di.xml` files. *Fix submitted by serhii-balko in pull request 995*. [GitHub-8647](https://github.com/magento/magento2/issues/8647)

<!--- MAGETWO-85538  -->

*  `SearchCriteriaBuilder` now has a check to determine if sort order should be applied. Previously, `SearchCriteriaBuilder` built wrong criteria (`ORDER BY part`). *Fix submitted by Nickolas Malyovanets in pull request 1003*. [GitHub-5738](https://github.com/magento/magento2/issues/5738)

<!--- MAGETWO-84666  -->

*  Anonymous Web API access to the Admin now unlocks REST catalog calls without requiring `auth` tokens. *Fix submitted by Roman K. in pull request 904*. [GitHub-9468](https://github.com/magento/magento2/issues/9468)

#### Zend framework

<!--- MAGETWO-86654  -->

*  `vendor/magento/framework/composer.json` now declares a dependency on `magento/zendframework1`. Previously, packages depending on `magento/framework` packages failed to execute. *Fix submitted by Ihor Sviziev in pull request 12990*.

### General

<!--- MAGETWO-86727  -->

*  A customer can now successfully log out of a session and then immediately log back in. Previously, if a customer logged out and then attempted to log in without the logout success page first completing its timeout, Magento displayed the logout page. *Fix submitted by Vinay Shah in pull request 13040*.

<!--- MAGETWO-87341  -->

*  Magento now displays notification messages for only the expected duration. Previously, Magento displayed these messages indefinitely within a session. *Fix submitted by p-bystritsky in pull request 1111*. [GitHub-11527](https://github.com/magento/magento2/issues/11527)

<!--- MAGETWO-87342  -->

*  Sorting by product name now works as expected when filters are applied. *Fix submitted by p-bystritsky in pull request 1192*. [GitHub-12860](https://github.com/magento/magento2/issues/12860)

<!--- MAGETWO-86748  -->

*  We've removed the `Magento\ProductAlert\Controller\Add\TestObserver` class. *Fix submitted by Alexander Shkurko in pull request 13174*.

<!--- MAGETWO-86722  -->

*  In the top-level README file in the Magento Open Source repository, all links to DevDocs have been updated to 2.2. *Fix submitted by Bhargav Mehta in pull request 13161*.

<!--- MAGETWO-87033  -->

*  Elements within an array in `store_website` table are now correctly formatted. *Fix submitted by Nolwennig Guilbert in pull request 13324*.

<!--- MAGETWO-86886  -->

*  A type error in `CartTotalRepository` has been resolved. Previously, `CartTotalRepository` could not handle extension attributes in quote addresses, and Magento threw a `PHP Fatal error:  Uncaught TypeError`. *Fix submitted by p-bystritsky in pull request 12993*. [GitHub-12993](https://github.com/magento/magento2/issues/12993), [GitHub-12819](https://github.com/magento/magento2/issues/12819)

<!--- MAGETWO-86883  -->

*  The WYSIWYG editor image insertion process now takes into account the static URLs configuration value (configuration setting `cms/wysiwyg/use_static_urls_in_catalog`). *Fix submitted by Nickolas Malyovanets in pull request 1215.* [GitHub-12147](https://github.com/magento/magento2/issues/12147)

<!--- MAGETWO-86840  -->

*  The `<![CDATA[]]>` statement in the `system.xml` file  now works as expected. Previously, when you entered an XML layout update with CDATA for the first time,  it worked as expected. After you saved the file, however, the `CDATA` tag disappeared. *Fix submitted by serhii-balko in pull request 1163*. [GitHub-12322](https://github.com/magento/magento2/issues/12322)

<!--- MAGETWO-87899  -->

*  Magento now strips out unnecessary whitespace in the attribute value IDs used on the review form. Previously, rating titles with whitespace resulted in broken ID attributes. *Fix submitted by Nickolas Malyovanets in pull request 1119*. [GitHub-5451](https://github.com/magento/magento2/issues/5451)

<!--- MAGETWO-86723  -->

*  The header label **Price** in the invoice PDF is now correctly aligned with the invoice item's price. *Fix submitted by serhii-balko in pull request 1216*. [GitHub-8453](https://github.com/magento/magento2/issues/8453)

<!--- MAGETWO-86630  -->

*  Google Analytics `pageview` is no longer triggered twice. *Fix submitted by Bhargav Mehta in pull request 13034*. [GitHub-12221](https://github.com/magento/magento2/issues/12221)

<!--- MAGETWO-86564  -->

*  Minor display issues on the Magento home product page  have been resolved.  *Fix submitted by Punit Vaswani in pull request 13081*. [GitHub-11796](https://github.com/magento/magento2/issues/11796)

<!--- MAGETWO-88145  -->

*  We've removed a condition from the password reset strength meter that caused a JavaScript error. *Fix submitted by Alisson Oldoni in pull request 13429*.

<!--- MAGETWO-86433  -->

*  The copyright year has been updated to 2018. *Fix submitted by Bhargav Mehta in pull request 13027*.

<!--- MAGETWO-86431  -->

*  Magento now displays the Contact Us page in the menu as expected. Previously, Magento displayed unnecessary space between the category page and the main footer. *Fix submitted by Sanjay Patel in pull request 13026*. [GitHub-12601](https://github.com/magento/magento2/issues/12601)

<!--- MAGETWO-86248  -->

*  The `Learn More Link` widget option in the Recently Viewed Products widget now respects its setting. *Fix submitted by JeroenVanLeusden in pull request 12946*.

<!--- MAGETWO-86035  -->

*  An unused `if` statement in the order invoice `Save.php` has been removed. *Fix submitted by JeroenVanLeusden in pull request 12887*.

<!--- MAGETWO-85780  -->

*  The `sid` variable no longer appears in the storefront URL even if it has been  disabled in the Admin. Previously, even when the Magento setting **General > Web > Session Validation Settings > Use SID on Storefront** was set to **No**, the `sid` variable no longer appears in the URL. *Fix submitted by Roman Strelenko in pull request 12743*. [GitHub-9453](https://github.com/magento/magento2/issues/9453)

<!--- MAGETWO-85779  -->

*  The menu item handling has been refactored to read item data from two different sources:

   *  from original XML definition if the cache is empty
   *  from transformed item data when available in the cache. *Fix submitted by Pavel in pull request 12747*. [GitHub-9720](https://github.com/magento/magento2/issues/9720)

<!--- MAGETWO-85773  -->

*  A typo in the `SINGLE_PRODUCT_LAYOUT_HANLDE` constant has been fixed. *Fix submitted by Andreas Schrammel in pull request 12786*.

<!--- MAGETWO-85713  -->

*  The tracking link no longer returns a 404 error in the Admin. *Fix submitted by Ihor Sviziev in pull request*. [GitHub-12206](https://github.com/magento/magento2/issues/12206)

<!--- MAGETWO-85643  -->

*  The product option value price calculation has been improved. Previously, tier prices and customs options were not calculated correctly. *Fix submitted by Marina Gociu in pull request 11563*. [GitHub-5774](https://github.com/magento/magento2/issues/5774)

<!--- MAGETWO-85610  -->

*  White space that is prepended to a coupon code no longer causes an error. Previously, Magento did not apply the coupon and displayed this message: `Coupon code is not valid`. *Fix submitted by Roman K. in pull request 1021*. [GitHub-12656](https://github.com/magento/magento2/issues/12656)

<!--- MAGETWO-85502  -->

*  The **modified** date field on editing pages is now updated as expected. *Fix submitted by Oscar Recio in pull request*. [GitHub-12625](https://github.com/magento/magento2/issues/12625)

<!--- MAGETWO-85499  -->

*  Links to Magento Connect on the Partners and Extensions page have been removed and replaced with links to Magento Marketplace. *Fix submitted by Miguel Balparda in pull request 12633*. [GitHub-12632](https://github.com/magento/magento2/issues/12632)

<!--- MAGETWO-85298  -->

*  HTML tags have been removed from the display of  attribute names in the dropdown menu of the Catalog Product list. *Fix submitted by Nickolas Malyovanets in pull request 968*. [GitHub-8011](https://github.com/magento/magento2/issues/8011)

<!--- MAGETWO-85207  -->

*  Magento now displays the orders that are associated with customer accounts on the Orders page.  Previously, in the Admin display of customer accounts that have orders associated with them, Magento did not display  orders on the  Orders tab but instead displayed a blank page.

<!--- MAGETWO-81128  -->

*  The credit card form is now available when you create an order from the Admin, even when only one payment method is enabled. Previously, when only one payment method was enabled, the Admin did not render this form.

<!--- MAGETWO-72865  -->

*  Full Page Cache is no longer invalidated after you save a predictor category. Previously, all product-related cache data was invalidated, when only a narrow subset of cache tags associated with the `product_id` should have been.

<!--- MAGETWO-88040  -->

*  Magento now displays a more meaningful error message when a module name is misspelled in a unit test. *Fix submitted by Nickolas Malyovanets in pull request 13740*.

<!--- MAGETWO-87908  -->

*  Magento now displays a more meaningful error message when a module name is misspelled in `registration.php`. *Fix submitted by Jānis Elmeris in pull request 12843*.

<!--- MAGETWO-87940  -->

*  In the line `Perform login specific action` in  `StorageInterface.php`,  `login` has been replaced with  `logout`. *Fix submitted by David Angel in pull request 13679*.

<!--- MAGETWO-87921  -->

*  The incorrect field value in the joined `variable_value` table has been replaced with two values: `plain_value` and `html_value`. *Fix submitted by Maksymilian Szydło in pull request 13596*.

<!--- MAGETWO-84880  -->

*  Duplicate array keys in `app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php` and  `app/code/Magento/Downloadable/Helper/File.php`  have been removed. *Fix submitted by Leandro F. L. in pull request 12513*.

<!--- MAGETWO-84856  -->

*  The typo in the  `getDispretionPath`  function name has been corrected to `getDispersionPath`. *Fix submitted by PascalBrouwers in pull request 12507*. [GitHub-12506](https://github.com/magento/magento2/issues/12506)

<!--- MAGETWO-84474  -->

*  Magento now saves new orders created by guest accounts to the Order display as expected. Previously, Magento did not display the order with the customer information assigned to it, and although Magento sent email containing the order ID,  the email did not contain information about the ordered items. *Fix submitted by Roman K. in pull request 12241*. [GitHub-10128](https://github.com/magento/magento2/issues/10128)

<!--- MAGETWO-84284  -->

*  CAPTCHA labels now reflect both the symbols and letters associated with the CAPTCHA image. Previously, the text labels referred to the CAPTCHA image referred to letters only, despite there being numbers in the CAPTCHA images, too. This ambiguity had the potential to mislead users about which  text to enter. *Fix submitted by RhodriOwainDavies in pull request 12387*.

<!--- MAGETWO-84006  -->

*  The `robots.txt` response header content type is now plain text. *Fix submitted by Milan Osztromok in pull request 12310*.

<!--- MAGETWO-84098  -->

*  Customers can now successfully use RSS to share their wish lists. Previously, when a logged-in user added products to the wish list and then tried to share them using RSS, Magento threw this exception: `report.INFO: Broken reference: the 'wishlist.email.rss' element cannot be added as child to 'root', because the latter doesn't exist` *Fix submitted by mediactbv in pull request*.

<!--- MAGETWO-87242  -->

*  When you select a new main menu option, the previously selected  menu item now loses the `ui-state-active` class as expected. *Fix submitted by Arnoud Beekman in pull request 13341*. [GitHub-13327](https://github.com/magento/magento2/issues/13327)

<!--- MAGETWO-85311  -->

*  Issues with displaying full-screen images and video on the configurable product page have been resolved. Previously, Magento displayed video associated with product options on this page as images, rather than video, and full-screen mode for images ignored the configurations settings in `view.xml`. *Fix submitted by Ievgen Shakhsuvarov in pull request 991*. [GitHub-12268](https://github.com/magento/magento2/issues/12268)

<!--- MAGETWO-84764  -->

*  We've fixed issues with the "report module enable/disable changes as deployment markers" functionality in the `Magento_NewRelicReporting` module. Previously, if New Relic's cron was enabled,  Magento  sent a New Relic deployment marker for every enabled module once per cron period. This resulted in an excessive number of events. *Fix submitted by Kristof in pull request 12477*.

<!--- MAGETWO-86240  -->

*  The New Product Configuration process now works as expected from the Admin.  Previously, on the last step of this process, Magento displayed the `the element.disabled is not a function` message, and did not create the product variations as expected. [GitHub-12555](https://github.com/magento/magento2/issues/12555)

<!--- MAGETWO-88278  -->

*  Save operations on CMS pages now load from `pageRepository`. *Fix submitted by JeroenVanLeusden in pull request 13814*.

<!--- MAGETWO-88435  -->

*  Magento now correctly displays product titles when displaying Sales information in Google Analytics.  Previously, Magento replaced spaces in product names with their HTML values (for example, `\u0020`). *Fix submitted by Julien Anquetil in pull request 13844*. [GitHub-13827](https://github.com/magento/magento2/issues/13827), [GitHub-13350](https://github.com/magento/magento2/issues/13350)

### Import/export

<!--- MAGETWO-81368  -->

*  You can now successfully import product images and image labels from CSV files. Previously after import, the  alt text field on the Admin was empty, even though the label was imported and was visible on the product list page as alt attribute, and the Product Detail page missed the alt attribute on image fields. *Fix submitted by Ben Robie in pull request 11323*. [GitHub-9931](https://github.com/magento/magento2/issues/9931)

<!--- MAGETWO-83726  -->

*  The CSV file created by using **System > Export** now incorporates the value of `hide_for_product_page`. *Fix submitted by Nickolas Malyovanets in pull request 11926*.

<!--- MAGETWO-83957  -->

*  You can now import a value of zero (0) into a custom attribute when using the Admin product import feature. *Fix submitted by p-bystritsky in pull request 12283*. [GitHub-12083](https://github.com/magento/magento2/issues/12083)

<!--- MAGETWO-84448  -->

*  You can now import or export a specific store view that includes custom options and bundle product options. Previously, the import/export feature did not include store view-level edits for  custom options.

<!--- MAGETWO-85629  -->

*  Import no longer fails when you import products with image filenames containing round brackets from a CSV file. *Fix submitted by p-bystritsky in pull request 1017*. [GitHub-12084](https://github.com/magento/magento2/issues/12084)

<!--- MAGETWO-86657  -->

*  When you import information about existing customers, Magento now changes only the specific rows for this customer. If rows for other customer attributes (for example, `group_id`, `store_id`, `created_at`) are absent in the import file, these values are included unchanged.

<!--- MAGETWO-88044  -->

*  Magento now provides a test for adding values in the system variable collection unit test. *Fix submitted by Nickolas Malyovanets in pull request 13742*.

<!--- MAGETWO-74042  -->

*  You can now successfully  import configurable products with specified configurable links when the `store_view_code` setting isn't set. Previously, you could successfully import a configurable product with both configurable and additional attributes, but when you viewed the category to which the product belonged, the product was not displayed. [GitHub-5876](https://github.com/magento/magento2/issues/5876)

<!--- MAGETWO-88251  -->

*  Save operations on CMS blocks now load from `pageRepository`. *Fix submitted by JeroenVanLeusden in pull request 13796*.

<!--- MAGETWO-86448  -->

*  The default storefront welcome message now works as expected when the **Translate Inline**  (**Stores > Settings > Configuration > Advanced > Developer >**) setting is enabled. *Fix submitted by Paresh Pansuriya in pull request 13038*. [GitHub-12711](https://github.com/magento/magento2/issues/12711)

<!--- MAGETWO-88340  -->

*  You can now use the layout update XML field to include custom CSS in CMS pages. [GitHub-4454](https://github.com/magento/magento2/issues/4454)

<!--- MAGETWO-88435  -->

*  Magento now correctly displays product titles when displaying Sales information in Google Analytics.  Previously, Magento replaced spaces in product names with their HTML values (for example, `\u0020`). *Fix submitted by Julien Anquetil in pull request 13844*. [GitHub-13827](https://github.com/magento/magento2/issues/13827), [GitHub-13350](https://github.com/magento/magento2/issues/13350)

### Indexing

<!--- MAGETWO-86446  -->

*  The URL that points to Magento `crontab` documentation has been updated to reflect current cron documentation in `app/code/Magento/Indexer/Model/Message/Invalid.php`. *Fix submitted by Robbie Thompson in pull request 13050*.

<!--- MAGETWO-83503  -->

*  You can now view the state of the mview queue in real time, which can be useful when debugging indexing issues. You can now view how many items are in the queue pending processing, as well as view information from the `mview_state` table. *Fix submitted by Luke Rodgers in pull request 12122*.

### Infrastructure

<!--- MAGETWO-86542  -->

*  Zoom now works as expected when using dropdown menus. Previously, zoom worked fine, but when you hovered over the category dropdown menu to the overlap area of product image and dropdown menu, the zoom was abnormally active,  even though the mouse was still on the dropdown menu. *Fix submitted by Mayank Zalavadia in pull request 13084*. [GitHub-5129](https://github.com/magento/magento2/issues/5129)

<!--- MAGETWO-86505  -->

*  RequireJS loading issues that occur when ad blockers are active have been resolved. Previously, `uBlock` (or any ad blocker) forbade the `trackingCode.js` file from loading, which prompted RequireJS to throw  an  exception. This exception broke the JavaScript execution flow and caused unexpected issues throughout the storefront. *Fix submitted by Yonn Trimoreau in pull request 13061*.

<!--- MAGETWO-86501  -->

*  `continue()` has been removed from templates. *Fix submitted by Ihor Sviziev in pull request 13076*.

<!--- MAGETWO-85698  -->

*  The comment that marks the `\Magento\Checkout\Model\Cart` class as deprecated now includes a pointer to an alternative class. This fix is part of an ongoing effort to add pointers to valid replacements when marking methods and classes as deprecated. *Fix submitted by Fabian Schmengler in pull request 13061*. [GitHub-10133](https://github.com/magento/magento2/issues/11070)

<!--- MAGETWO-85694  -->

*  A new file (`CODE_OF_CONDUCT.md`) that defines  standards for how to engage in the community has been added. *Fix submitted by Ievgen Shakhsuvarov in pull request 12723*.

<!--- MAGETWO-85292  -->

*  `\Magento\Framework\Data\Tree::getNodeById()` no longer contains an invalid type in its PHPDoc block.  *Fix submitted by Roman K. in pull request 964*. [GitHub-8507](https://github.com/magento/magento2/issues/8507)

<!--- MAGETWO-85179  -->

*  We’ve resolved naming collisions that previously occurred  in the Javascript UI registry. Previously, these naming collisions resulted in the following behaviors: Magento displayed the `element.disabled is not a function` message, and did not create product variations as expected. [GitHub-12555](https://github.com/magento/magento2/issues/12555)

### Newsletters

<!--- MAGETWO-83999  -->

*  The **About Us** and **Customer Service** links of the Order Confirmation email (and  other emails sent to the customer) now work as expected. *Fix submitted by Roman K. in pull request*. [GitHub-12261](https://github.com/magento/magento2/issues/12261)

<!--- MAGETWO-85783  -->

*  Magento now sends the newsletter subscription success email as expected when a customer successfully subscribes to a newsletter. *Fix submitted by Styopchik in pull request*. [GitHub-12439](https://github.com/magento/magento2/issues/12439)

<!--- MAGETWO-86435  -->

*  Magento now uses indexes to retrieve subscriber information during the creation of email to newsletter subscribers. Previously, Magento did not use indexes for this task, and performance was poor. *Fix submitted by Amit Bera in pull request*. [GitHub-12787](https://github.com/magento/magento2/issues/12787)

<!--- MAGETWO-86562  -->

*  Magento no longer sends multiple confirmation emails when a customer successfully subscribes to a newsletter. *Fix submitted by Torben Höhn in pull request 13044*. [GitHub-12876](https://github.com/magento/magento2/issues/12876)

<!--- MAGETWO-86447  -->

*  The text of the  **Subscribe to Newsletter** button now wraps correctly. *Fix submitted by monaemipro in pull request 13041*. [GitHub-12320](https://github.com/magento/magento2/issues/12320)

### Orders

<!--- MAGETWO-75840  -->

*  Magento now shows all products as expected in the Recently Ordered list when a customer places an order that contains products from multiple stores. Previously, in installations with two storefronts, if a customer added products from both stores to the same shopping cart, and placed a single order, the recently ordered product list would not show all ordered products.

<!--- MAGETWO-82577  -->

*  The `getDefaultStoreLocale()` method has been added to allow for the fetching of scoped values. Use this method in `getCreatedAtFormatted()` to ensure that Magento translates the  `created_at` order date in emails for the locale being used in that store view. *Fix submitted by JeroenVanLeusden in pull request 11067*.

<!--- MAGETWO-83410  -->

*  You can now successfully open the Order edit page for orders that contain an address with extension attributes. Previously, when you tried to open this page, the page load failed with this error, `Recoverable Error: Object of class Magento\Sales\Api\Data\OrderAddressExtension could not be converted to string in .../module-sales/Model/AdminOrder/Create.php on line 503`.

<!--- MAGETWO-83552  -->

*  Magento now saves an invoice ID on the credit memo when you create a credit memo from the invoice in the Admin. Previously, the invoice ID was not included.  *Fix submitted by Anton Evers in pull request 11067*. [GitHub-11669](https://github.com/magento/magento2/issues/11669)

<!--- MAGETWO-83740  -->

*  Credit memos can have the state open (`\Magento\Sales\Model\Order\Creditmemo::STATE_OPEN`). As a result, you can create a credit memo with an ID that still has to be refunded, and existing credit memos should be refundable if their state is open. *Fix submitted by Anton Evers in pull request 11550*.

<!--- MAGETWO-83783  -->

*  The `Magento\Sales\Service\V1\OrderCreateTest` test now has the correct shipping method fixture. Previously, this test contained an incorrect shipping method fixture, which produced an error whenever an order's shipping method was treated an object. *Fix submitted by andrew-garside-temando in pull request 12227*.

<!--- MAGETWO-84219  -->

*  When you create a credit memo comment with `POST /V1/creditmemo/:id/comments`, Magento now sends  credit memo update emails as expected. Previously,  Magento did not send this email, and no other transaction emails were sent to the customer.

<!--- MAGETWO-84256  -->

*  The `getReservedOrderId()` method now uses the current store as expected instead of the default store. *Fix submitted by Timon de Groot in pull request 11702*. [GitHub-9055](https://github.com/magento/magento2/issues/9055)

<!--- MAGETWO-85305  -->

*  When you are editing an order's shipping or billing address, Magento now displays the allowed countries from the correct store view. Previously, possible addresses were derived from the wrong store view. *Fix submitted by Roman K. in pull request*. [GitHub-12560](https://github.com/magento/magento2/issues/12560)

<!--- MAGETWO-85660  -->

*  The `\Magento\Sales\Model\Order\Pdf\AbstractPdf::drawLineBlocks` method now works as expected. Previously, when a text block spanned more than one page, Magento threw a `Zend_Pdf_Exception` error, and displayed this error: `Font has not been set`. *Fix submitted by serhii-balko in pull request 1016*. [GitHub-11743](https://github.com/magento/magento2/issues/11743)

<!--- MAGETWO-86845  -->

*  Magento no longer exports extra records when you export invoices for multiple orders. *Fix submitted by Sanjay Patel in pull request 13208*. [GitHub-12714](https://github.com/magento/magento2/issues/12714)

<!--- MAGETWO-80233  -->

*  You can now place orders using PayPal when **Payment Action = Order**. Previously, when **Payment Action = Order**, Magento displayed this error when you reached the order review page: `We can't place the order.`

<!--- MAGETWO-86258  -->

*  The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock. *Fix submitted by Danny Verkade in pull request 12668*. [GitHub-9969](https://github.com/magento/magento2/issues/9969)

<!--- MAGETWO-87292  -->

*  Join extension attributes are now added as expected to order results when the order is created using REST. *Fix submitted by Nickolas Malyovanets in pull request 1168*.

<!--- MAGETWO-87291  -->

*  The Shipment Tracking REST API now throws an error as expected if the specified order doesn't exist. *Fix submitted by Roman K. in pull request 1162*.

<!--- MAGETWO-83868  -->

*  Invoices now display the exact quantity of a product ordered, even if it is a fractional unit (for example,  6.5). Previously, when Magento tried to invoice an order that had products with quantities that required decimals, it rounded down the quantity to the nearest whole number in the invoice. *Fix submitted by Nickolas Malyovanets in pull request 11997*.  [GitHub-11941](https://github.com/magento/magento2/issues/11941)

### Payment methods

<!--- MAGETWO-84588,MAGETWO-84587, MAGETWO-84590  -->

*  The multishipping checkout  flow now supports the CyberSource payment method. This payment method is supported on Magento Commerce only. However,  as part of the process of adding CyberSource support, we've made improvements to the Multishipping module to simplify integration process for other payment methods.

<!--- MAGETWO-75497  -->

*  Logged-out customers can no longer see previously saved credit cards. Previously, users logged in as guest could see some payment information from an earlier, canceled order.

<!--- MAGETWO-81395  -->

*  Third-party developers can now customize payment errors messages for payment integrations based on the Magento Payment Provider Gateway.

<!--- MAGETWO-82910  -->

*  PayPal Express Checkout now appears as a payment option on the Checkout page when the PayPal buttons are available on the shopping cart page. Previously, PayPal did not appear as a payment method on the Checkout page when the billing agreement was disabled, although the PayPal buttons were still available on the shopping cart page.

<!--- MAGETWO-83959 -->

*  You can now view order details for an order created with a custom offline payment method. Previously, Magento displayed  PHP warning (undefined index) instead of the order details. *Fix submitted by Alex in pull request 12296*. [GitHub-3596](https://github.com/magento/magento2/issues/3596)

<!--- MAGETWO-86112  -->

*  Magento no longer disables the BrainTree **Place Order** button after a failed payment validation. *Fix submitted by Ievgen Sentiabov in pull request 12902*.

<!--- MAGETWO-86297  -->

*  The  `is_active` and `is_visible` columns now default to true even when column default values are not set in the `vault_payment_token` installation script. *Fix submitted by helloitsluke in pull request 12965*.

<!--- MAGETWO-86308  -->

*  If you've chosen a custom payment method that is offline when you create an order, Magento now displays that payment method's name as expected when you view order details in **Payment & Shipping**. *Fix submitted by zamoroka in pull request 12731*. [GitHub-12209](https://github.com/magento/magento2/issues/12209)

<!--- MAGETWO-86351  -->

*  PayPal now works as expected with virtual products such as gift cards. Previously, when you tried to place an order for a virtual product using PayPal, Magento did not display the PayPal popup when you clicked **Continue PayPal** during checkout.

<!--- MAGETWO-84639  -->

*  Magento now correctly adds checkout agreements data to  requests and validates payment information when you place an order using PayPal Express. Previously, you could check this box, but Magento did not parse  the agreements data  or pass it  to the set-payment-information API. This failure in turn triggered the `CheckoutAgreements` validation plugin,  which failed to validate. *Fix submitted by Ričards Zālītis in pull request 12401*.

<!--- MAGETWO-86426  -->

*  Magento no longer archives active orders that are placed using PayPal Express Checkout. Previously, if you placed an order using PayPal Express Checkout, Magento would place the order as expected but also add it to the list of archived orders.

<!--- MAGETWO-84647  -->

*  Magento now correctly displays transparent `.PNG` watermarks on JPEG images. Previously, Magento did not correctly display a transparent watermark as expected on an image, but instead displayed a white outline of the box where the watermark should be. *Fix submitted by Elze Kool in pull request 11060*. [GitHub-10661](https://github.com/magento/magento2/issues/10661)

<!--- MAGETWO-88235  -->

*  We've improved the display of the Payment Methods section of the checkout page on mobile devices. Previously, the layout of page elements was not correctly spaced. *Fix submitted by Marcin Kwiatkowski in pull request 13777*. [GitHub-13315](https://github.com/magento/magento2/issues/13315)

<!--- MAGETWO-87289  -->

*  Magento now correctly updates the credit memo total when a merchant issues a refund. *Fix submitted by serhii-balko in pull request 1185*. [GitHub-11798](https://github.com/magento/magento2/issues/11798)

### Performance

<!--- MAGETWO-84480  -->

*  The addition of a cache for the `getimagesize()` function has improved product image loading.

<!--- MAGETWO-45775  -->

*  Each cache type now has its own separate cache storage.

<!--- MAGETWO-86736  -->

*  We’ve optimized the initialization of the Product View block, which gives an 11% performance improvement for simple product views.

<!--- MAGETWO-75769  -->

*  Magento now caches  search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached. This enhancement can result in up to a 36% improvement for cacheable search terms.

### Quote

<!--- MAGETWO-86439  -->

*  If a customer changes the currency type of his order-in-progress while viewing the shopping cart, Magento displays a message that shows the minimum order necessary in the new currency. Previously, this minimum was calculated incorrectly. *Fix submitted by Neeta Kangiya in pull request 13039*.

<!--- MAGETWO-86434  -->

*  Magento no longer truncates very long telephone numbers in the order page. Previously, Magento cut off very long phone numbers at 20 digits. *Fix submitted by Danny Verkade in pull request 13015*. [GitHub-10869](https://github.com/magento/magento2/issues/10869)

<!--- MAGETWO-86430  -->

*  You can now implement a product attribute that sets **Catalog Input Type for Store Owner** equal to **Fixed Product Tax** in a multistore environment. *Fix submitted by Danny Verkade in pull request 13019*. [GitHub-12393](https://github.com/magento/magento2/issues/12393)

<!--- MAGETWO-85518  -->

*  When a customer is on the payment page and tries to reorder or retrace her steps backward through the checkout process, Magento now displays all the relevant shipping methods. Previously, Magento displayed only one shipping method under these circumstances.

<!--- MAGETWO-86595  -->

*  An integrity constraint violation error no longer occurs after you reorder a product with custom options. *Fix submitted by Vinay Shah in pull request 13036*. [GitHub-12705](https://github.com/magento/magento2/issues/12705)

### Reports

<!--- MAGETWO-84981  -->

*  The Products in Cart report is now accurate. Previously, if you created a Products in Cart report (**Open Reports** > Marketing > **Products in Cart**) after deleting a product from the catalog, the report displayed a blank list of products. *Fix submitted by angelo983 in pull request 12539*.

<!--- MAGETWO-88173  -->

*  You can now successfully export the Ordered Products report to a CSV file. Previously, the export file contained no report data.

### SalesRule

<!--- MAGETWO-71393  -->

*  Magento now displays the correct catalog rule price for bundle products with custom options.

<!--- MAGETWO-86780  -->

*  Cart prices now displays the Cart Price Rule shipping discount correctly. Previously, when you placed an order, Magento displayed this error: `Payment method is not available`.

<!--- MAGETWO-86786 -->

*  Magento now displays the exact label value that was given in the Admin during the cart price rule creation. *Fix submitted by Ihor Sviziev in pull request 13141*. [GitHub-11428](https://github.com/magento/magento2/issues/11428), [GitHub-11497](https://github.com/magento/magento2/issues/11497)

<!--- MAGETWO-87013 -->

*  Magento now correctly displays in Cart Price rules the nesting levels for categories with nesting levels that exceed three levels.

<!--- MAGETWO-85960 -->

*  Coupon codes that a customer applies to a subsequently canceled order are now available for re-use as expected. Previously, once a customer canceled this order, he could not apply the coupon code to another order. *Fix submitted by p-bystritsky in pull request*. [GitHub-12817](https://github.com/magento/magento2/issues/12817)

### Search

<!--- MAGETWO-85637  -->

*  Magento now displays popular search terms in **SEO & Search > Search Terms** as expected. *Fix submitted by p-bystritsky in pull request 1024*. [GitHub-10743](https://github.com/magento/magento2/issues/10743)

<!--- MAGETWO-84370 -->

*  Layered navigation now displays the correct product count. Previously, the layered navigation product count incorrectly included only in-stock products. *Fix submitted by Roman K. in pull request 12063*. [GitHub-11946](https://github.com/magento/magento2/issues/11946)

<!--- MAGETWO-85827 -->

*  Grid filtration now handles MySQL special characters as expected. *Fix submitted by laconica-sergey in pull request 12749*.

### Shipping

 {:.bs-callout-info}
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{ page.baseurl }}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).

<!--- MAGETWO-86306,  MAGETWO-87934 -->

*  The handling fee configuration of shipping methods is now explicitly cast to 0 to  avoid warnings from PHP 7.1. *Fix submitted by Fabian Schmengler in pull request 13680*.

<!--- MAGETWO-86400  -->

*  Unused `count($_items)` in templates have been removed. *Fix submitted by Alexander Shkurko in pull request 12901*.

<!--- MAGETWO-85291  -->

*  Magento now enforces the minimum order amount during checkout as expected. Previously, you could bypass the minimum order amount logic by clicking **Check Out with Multiple Addresses**, removing products from the order,and then clicking **Update Qty & Addresses**. *Fix submitted by Roman K. in pull request 963*.

<!--- MAGETWO-85586  -->

*  DHL product codes now match those published in the latest DHL products and services guide. Previously, three  DHL product codes in the DHL Shipping module were incorrect. *Fix submitted by gwharton in pull request 12666*.

### Sitemap

<!--- MAGETWO-86349  -->

*  `sitemap.xml` now displays URLs without `/home` appended. *Fix submitted by Oscar Recio in pull request 12649*. [GitHub-12446](https://github.com/magento/magento2/issues/12446)

<!--- MAGETWO-85285  -->

*  Sitemaps generated in a multi-store environment now include the correct URLs for each store (that is, `http://storename.com/` instead of `http://defaultstore.com/`). *Fix submitted by Roman K. in pull request 935*. [GitHub-12482](https://github.com/magento/magento2/issues/12482)

<!--- MAGETWO-81525  -->

*  Magento now handles errors that occur during sitemap generation in a less intrusive way. If Magento throws an exception when generating a sitemap, it now sends the errors through email as configured in the sitemap configuration XML. The former `_translateModel` property is not used anymore, and the inline translation is correctly suspended using the `inlineTranslation` property instead. *Fix submitted by Marina Gociu in pull request*. [GitHub-10502](https://github.com/magento/magento2/issues/10502)

### Swagger

<!--- MAGETWO-87444  -->

*  The code formatting in the Swagger block and template has been updated. *Fix submitted by JeroenVanLeusden in pull request 13485*.

### Swatches

<!--- MAGETWO-83290 -->

*  You can now use REST to import visual swatch attribute options. Previously, you could not add swatch options using service contracts unless a swatch option already existed for the attribute.  *Fix submitted by gonzalopelon in pull request 12044*. [GitHub-9410](https://github.com/magento/magento2/issues/9410), [GitHub-10707](https://github.com/magento/magento2/issues/10707), [GitHub-10737](https://github.com/magento/magento2/issues/10737), [GitHub-11032](https://github.com/magento/magento2/issues/11032)

<!--- MAGETWO-86576  -->

*  Visual swatches that have a color assigned now show that color in the swatch box. Previously, Magento did not display any color in the color swatch box. *Fix submitted by Chris Pook in pull request 13101*. [GitHub-11828](https://github.com/magento/magento2/issues/11828)

<!--- MAGETWO-86665  -->

*  The error message displayed when you do not supply enough information during swatch creation has been edited for clarity and grammatical accuracy. *Fix submitted by Nickolas Malyovanets in pull request 1117*. [GitHub-5550](https://github.com/magento/magento2/issues/5550)

### Tax

<!--- MAGETWO-87941  -->

*  The default selector on the Admin's tax rule edit page now selects only the correct container (tax rate) following the Tax Rate multiselect. Previously, the default selector selected three elements, which resulted in inaccurate results. *Fix submitted by Pieter Hoste in pull request 13643*. [GitHub-12791](https://github.com/magento/magento2/issues/12791)

<!--- MAGETWO-87352  -->

*  We've removed the redundant default discount tax calculation (`tax/calculation/discount_tax`) from `Magento/Tax/etc/config.xml`. *Fix submitted by Vincent Marmiesse in pull request 13449*.

<!--- MAGETWO-87339  -->

*  The **Not yet calculated** text string immediately adjacent to the string **Tax** on the checkout page is now translated as expected. *Fix submitted by Roman K. in pull request 1147*. [GitHub-7849](https://github.com/magento/magento2/issues/7849)

<!--- MAGETWO-83402  -->

*  Magento no longer displays incorrect tax amounts for orders when using a non-default tax configuration.. *Fix submitted by Pieter Cappelle in pull request 12639*. [GitHub-10347](https://github.com/magento/magento2/issues/10347)

### Testing

<!--- MAGETWO-87290  -->

*  `ConfigurationTest` no longer fails when you install Magento using Composer. *Fix submitted by Nickolas Malyovanets in pull request 1161*. [GitHub-12574](https://github.com/magento/magento2/issues/12574)

<!--- MAGETWO-87984  -->

*  We've added `MagentoStyle` as console Input/output in Travis tests.

<!--- MAGETWO-86859  -->

*  We've reimplemented tests using Jasmine as part of the process of removing the legacy JavaScript test framework and completely removing `JSTestDriver` support.  *Fix submitted by Carlos Lizaga in pull request*. [GitHub-12342](https://github.com/magento/magento2/issues/12342)

<!--- MAGETWO-86005  -->

*  `functional.suite.dist.yml` now  handles custom backend names. Previously, the value for the `backend_name` configuration was hardcoded. *Fix submitted by scribam in pull request 12884*.

<!--- MAGETWO-85940  -->

*  We've added a missing preference for `ObjectManager\ConfigInterface` in integration tests. *Fix submitted by Fabian Schmengler in pull request 12845*. [GitHub-12844](https://github.com/magento/magento2/issues/12844)

<!--- MAGETWO-85537  -->

*  Integration Test Annotation `magentoAppArea` no longer breaks with valid values. *Fix submitted by Nickolas Malyovanets in pull request 996*. [GitHub-2907](https://github.com/magento/magento2/issues/2907)

<!--- MAGETWO-85520  -->

*  The inline documentation of the static test for XSS vulnerabilities now reflects that `@escapeNotVerified` is disallowed in Magento versions equal or greater than 2.2. *Fix submitted by Matthias Zeis in pull request 12639*.

<!--- MAGETWO-88174  -->

*  We've added integration tests for product URL rewrite generation. *Fix submitted by Adrien Louis-Rossignol in pull request 13567*. [GitHub-5863](https://github.com/magento/magento2/issues/5863), [GitHub-8227](https://github.com/magento/magento2/issues/8227), [GitHub-8957](https://github.com/magento/magento2/issues/8957), [GitHub-10073](https://github.com/magento/magento2/issues/10073), [GitHub-13240](https://github.com/magento/magento2/issues/13240)

### Themes

<!--- MAGETWO-72898  -->

*  Magento no longer caches warning messages as often as a customer clicks the  **Update Shopping Cart** button while the  shopping cart page loads. Previously, Magento cached a warning message each time a customer clicked this button while  the page loaded in Firefox or Chrome, and this action  resulted in multiple warning messages appearing on the top of the shopping cart page.

<!--- MAGETWO-85785  -->

*  If a customer is logged in while  Magento loads, then the welcome message displays the customer's full name. *Fix submitted by Oleh Kravets in pull request 12738*. [GitHub-12719](https://github.com/magento/magento2/issues/12719)

<!--- MAGETWO-85549  -->

*  You can now disable the full screen gallery on mobile devices *Fix submitted by p-bystritsky in pull request 1006*. [GitHub-12490](https://github.com/magento/magento2/issues/12490), [GitHub-12285](https://github.com/magento/magento2/issues/12285)

<!--- MAGETWO-86310  -->

*  Protected method `getHtml` now checks each child for an existing class and then appends the `$outermostClass` if true. Previously, when creating a dependency injection for the `Magento\Theme\Block\Html\Topmenu` class, you could not change class names on children in a `beforeGetHtml` method because  `getHtml` declares `setClass()` on all child items. *Fix submitted by jonshipman in pull request 12862*.

<!--- MAGETWO-85708  -->

*  Customers  can now successfully close full-screen zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if a customer chose full screen zoom for any product image, he  could not close the full screen zoom.

### Translations and locale

<!--- MAGETWO-86286  -->

*  Inline translations and custom translators now work for Knockout templates. *Fix submitted by Dmitry Fedyuk in pull request 12953*. [GitHub-2156](https://github.com/magento/magento2/issues/2156)

<!--- MAGETWO-86778  -->

*  Magento now provides a locale for Swedish (Finland). *Fix submitted by Nickolas Malyovanets in pull request 1207*. [GitHub-13095](https://github.com/magento/magento2/issues/13095)

<!--- MAGETWO-87226  -->

*  Magento now uses current locale (as defined in **Stores > Settings > Configuration > Advanced Reporting**) when translating the time zone label. Previously, Magento used operating system settings instead of current locale. *Fix submitted by adrian-martinez-interactiv4 in pull request 13408*.

<!--- MAGETWO-86436  -->

*  Newsletter labels can now handle Chinese language. *Fix submitted by Dasharth patel in pull request 13029*. [GitHub-12320](https://github.com/magento/magento2/issues/12320)

<!--- MAGETWO-87575  -->

*  The module responsible for generating the `js-translations.json` file now contains a routine that translates strings in tags such as `<translate args="This won't be translated"`.  *Fix submitted by Matti Vapa in pull request 13528*. [GitHub-12081](https://github.com/magento/magento2/issues/12081)

### User interface

<!--- MAGETWO-85784 -->

*  You can now configure a form field with validation range-words. As a result, Category Name is validated, and Category is created (or displays the correct error message, if validation fails). Previously, Magento displayed an error message in the console. *Fix submitted by Robin Huy in pull request 12739*.

<!--- MAGETWO-86025  -->

*  The **Save Block** button on the Add New Block page no longer ignores clicks if the content editor is empty. *Fix submitted by Roman K. in pull request 1032*. [GitHub-8114](https://github.com/magento/magento2/issues/8114)

<!--- MAGETWO-86438  -->

*  Magento now disables the promo code input box after a user applies a promo code. *Fix submitted by Chirag P in pull request 13030*.

<!--- MAGETWO-84903  -->

*  Magento now displays video and images as expected when you select a video or click to view a full-screen image for a configurable product. *Fix submitted by Chumak Roman in pull request 12469*. [GitHub-12268](https://github.com/magento/magento2/issues/12268)

<!--- MAGETWO-83815  -->

*  The PHP notice that Magento displays when an invalid `ui_component` configuration is used has been improved. *Fix submitted by Vova Yatsyuk in pull request 12239*.

<!--- MAGETWO-83293  -->

*  Magento has added verification for previously set filters in `Magento/Ui/Component/Filters`, which has eliminated duplication of filters in collection `where` conditions.

<!--- MAGETWO-87994  -->

*  Inconsistency in the animation of the Admin spinner progress indicator has been corrected. *Fix submitted by Neill Robson in pull request 13700*.

### URL rewrites

<!--- MAGETWO-84955  -->

*  When using a store code in a URL, Magento now retrieves the value of `Store_Code` from the store if the store code value is empty. Previously, under these circumstances, Magento threw an error. *Fix submitted by Oscar Recio in pull request 12529*. [GitHub-8615](https://github.com/magento/magento2/issues/12450)

### Web API framework

<!--- MAGETWO-85287  -->

*  You can now use the REST API  to make requests that include a slash (/) in an SKU. *Fix submitted by Roman K. in pull request 949*. [GitHub-8615](https://github.com/magento/magento2/issues/8615)

### Wish list

<!--- MAGETWO-69634  -->

*  Magento now correctly displays a product's special price when you add it to a wish list. Previously, if you added a product with a special price to the wish list, Magento displayed the product with its regular price.

<!--- MAGETWO-85303  -->

*  You can now remove an item description from a wish list. *Fix submitted by p-bystritsky in pull request 981*. [GitHub-12582](https://github.com/magento/magento2/issues/12582)

<!--- NOT NEEDED MAGETWO-87169 MAGETWO-87132  MAGETWO-86846 MAGETWO-80908  MAGETWO-84992  MAGETWO-84480 MAGETWO-83329 MAGETWO-86117 MAGETWO-83977 MAGETWO-84804 MAGETWO-84413 MAGETWO-83974 MAGETWO-82062 MAGETWO-80342     MAGETWO-85661 MAGETWO-77840  MAGETWO-73303 MAGETWO-83343 MAGETWO-83910 MAGETWO-70725  MAGETWO-75217 MAGETWO-83958 MAGETWO-87023 MAGETWO-82078 MAGETWO-84397 MAGETWO-87030 MAGETWO-86452  MAGETWO-85205 MAGETWO-84967 MAGETWO-84884 MAGETWO-83621 MAGETWO-82451 MAGETWO-81431 MAGETWO-81189 MAGETWO-73002  MAGETWO-71790 MAGETWO-71272  MAGETWO-83366 MAGETWO-85590 MAGETWO-85650 MAGETWO-87844 MAGETWO-89306 MAGETWO-85842 MAGETWO-88282 MAGETWO-88111 MAGETWO-71374 MAGETWO-85904 MAGETWO-87445 MAGETWO-86736 MAGETWO-83899 MAGETWO-86938 MAGETWO-88108 MAGETWO-87963 MAGETWO-87815 MAGETWO-45775 MAGETWO-89538 MAGETWO-89453 MAGETWO-89337 MAGETWO-89261 MAGETWO-89273 MAGETWO-89080 MAGETWO-84507 MAGETWO-86670 MAGETWO-84883 MAGETWO-89248 MAGETWO-82571 MAGETWO-83659 MAGETWO-84649 MAGETWO-83328 MAGETWO-80622 MAGETWO-87865 MAGETWO-71608 MAGETWO-83571 MAGETWO-83869 MAGETWO-84650-->

<!--- WON'T FIX   MAGETWO-72116 MAGETWO-72116 MAGETWO-84772 MAGETWO-84773 MAGETWO-86982 -->

<!--- CANNOT REPRODUCE MAGETWO-58206  MAGETWO-83676 MAGETWO-73275-->

## Known issue

Merchants are unable to change a store view’s applied theme in Magento 2.2.4. When a merchant tries to change the **Applied theme** setting for a store view (**Content** > **Design** > **Configuration**), Magento does not change the theme, but instead displays this error: `Something went wrong while saving this configuration: Area is already set`. See [GitHub-14968](https://github.com/magento/magento2/issues/14968) for more information. **Workaround**:  Merchants who are running Magento 2.2.4 should **upgrade to 2.2.5, then apply [patch MAGETWO-93036]( https://magento.com/tech-resources/download#download2224)**.

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
    <td>Anton Evers</td>
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
    <td>Marty S</td>
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
    <td>magento-engcom/magento2ce/pull/1007</a></td>
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
    <td><a target="_blank" href="https://github.com/hiren2615">Hiren Patel</a></td>
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

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
