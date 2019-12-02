---
group: release-notes
title: Magento Commerce 2.2.7 Release Notes

---

*Release notes published November 28 and last updated on July 31, 2019.*

We are pleased to present Magento Commerce 2.2.7. This release includes over 30 critical enhancements to product security, over 150 core code fixes and enhancements, and over 100 community-submitted pull requests.

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.7) have been ported to 2.1.16, 1.14.4.0, and 1.9.4.0, as appropriate.

## Apply patch PRODSECBUG-2233 to address critical remote code execution vulnerability (RCE)

An unauthenticated cross-site scripting vulnerability combined with an authenticated Phar deserialization vulnerability has left this version of Magento Commerce open to serious exploit. An attacker can use these vulnerabilities to inject JavaScript into the Magento Admin and subsequently launch malicious code in a store user’s browser.   **We strongly recommend that all users of the affected versions of Magento download and apply the appropriate patch as soon as possible**.

This issue and the available patches are discussed in the [Extending the June 25 Security Update to Older Versions of Magento](https://community.magento.com/t5/Magento-DevBlog/Extending-the-June-25-Security-Update-to-Older-Versions-of/ba-p/138231)
blog post. You can directly access patch code through your Magento account for Magento Commerce. Locate the patch by the name. We provide both Git-based and Composer-based patches.

## Apply patch PRODSECBUG-2198 to address critical SQL injection vulnerability

A SQL injection vulnerability has been identified in pre-2.2.8 Magento code. To quickly protect your store from this vulnerability only, install patch PRODSECBUG-2198.  However, to protect against this vulnerability and others, you must upgrade to Magento Commerce or Open Source  2.2.8. **We strongly suggest that you install these full patches as soon as you can**.

See the description of  PRODSECBUG-2198  in the  [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for information on this vulnerability.

Follow these steps to download and apply this patch:

1. Access [My Account](https://account.magento.com/customer/account/login).

1. Navigate to the **Downloads** tab. Select the Magento edition and version you need.

1. Select **Support Patches and Security Patches**, then **PRODSECBUG-2198**.

1. Download the patch and upload to a specific directory in your Magento installation such as `m2-hotfixes` (confirm  that the directory is not accessible publicly).

1. From your project root, apply the patch.  `git apply ./m2-hotfixes/<patch-file-name>`.

1. Refresh the cache from the Admin (**System** > **Cache Management**).

## Highlights

In addition to over 30 critical security fixes, look for the following highlights in this release:

### Core code highlights

This release includes improvements to general usability of the core code plus enhancements to wishlist, shipping, and B2B features.

#### General improvements

<!-- MAGETWO-93990  -->

*  An administrator with permissions on one website only can no longer access the All Store Views scope for a product that is assigned to multiple websites.

<!-- MAGETWO-87437  -->

*  All relevant attributes are now populated in the Google Tag Manager when a customer adds a product to their shopping cart. Previously, grouped, bundle,  and configurable  product attributes were missing from the Google Tag Manager.

#### Wishlist

<!-- MAGETWO-74289  -->

*  Customers can now choose which wishlist to add a product to when adding products to the wishlist from the shopping cart.

<!-- MAGETWO-86609  -->

*  Products disabled in the Admin  no longer appear in storefront wishlists. Previously, disabled products still appeared in the storefront wishlist, although when a customer clicked on a disabled product, Magento correctly returned “page not found”.

<!-- MAGETWO-89234  -->

*  Magento now displays a success message when a customer successfully updates a wishlist.

<!-- MAGETWO-75086  -->

*  Magento now displays the correct  options when you click  on  **View Details** for a  product with configurable options. ￼Previously, Magento displayed the image for the parent product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)

#### B2B

<!-- MAGETWO-94163  -->

*  Merchants can now successfully update product prices and currencies using **Admin** > **Stores** > **Settings** > **Configuration** > **Currency Setup**.

<!-- MAGETWO-89654  -->

*  Merchants can now create a Company with an optional regional setting. Previously, Magento displayed this message, `Error message: Invalid value of "" provided for the region_id field.`

<!-- MAGETWO-92400  -->

*  Magento now removes information from all fields when you click **Reset** when creating a new Company from the Admin. Previously, Magento cleared all fields except for the **admin email** field.

<!-- MAGETWO-93050  -->

*  Magento no longer permits merchants to open a new tab to edit Company users from the Company Users tab. Previously, when a merchant  tried to open a new tab to edit users,  Magento threw an error.

### Shipping

<!-- MAGETWO-94434  -->

*  The Magento UPS module has been updated to support new UPS API endpoints.

### Magento Functional Test Framework (MFTF)

*  MTFT version 2.3.8 is now packaged with Magento 2.2.7.

### Community contribution highlights

Highlights of community contributions include these fixes:

*  **Bulk Web APIs**  allow all existing REST APIs to accept payloads with multiple entities. These community-contributed bulk APIs support more efficient and scalable implementations that eliminate round-trip network overhead. Like asynchronous APIs, bulk web APIs can be used in conjunction with queues that have also been migrated to {{site.data.var.ce}}. [See Bulk endpoints]({{ page.baseurl }}/rest/bulk-endpoints.html) for more information.

<!-- MAGETWO-86712  -->

*  The email server no longer throws an exception when a customer places an order using a PayPal payment method. Previously, when a customer checked out using PayPal, Magento placed the order, but the email server threw an exception. Thanks to community member [Jason Woods](https://github.com/driskell)!

<!-- ENGCOM-2671  -->

*  You can now use REST to add a configurable product to a shopping cart without creating a duplicate product entry. Thanks to community member [zamboten](https://github.com/zamboten)! [GitHub-15028](https://github.com/magento/magento2/issues/15028)

<!-- ENGCOM-1832  -->

*  The price range displayed for bundle products now shows only valid prices. Previously, Magento displayed special prices that had expired, even though the price in the customization and summary area was correct. Thanks to community member [Riccardo Tempesta](https://github.com/phoenix128)! [GitHub-15457](https://github.com/magento/magento2/issues/15457)

Looking for more information on these new features as well as many others? Check out [Magento Developer Documentation]({{ site.baseurl }}/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).

## Functional fixes

In addition to security enhancements, this release contains the following functional fixes.

### Installation, setup, and deployment

<!---MAGETWO-94174  -->

*  Magento backup functionality is no longer enabled by default, and the code has been deprecated. See [Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html) for more information on backup strategies.

<!-- MAGETWO-95591  -->

*  Customer attribute management issues that merchants  experienced after upgrading to Magento 2.2.6 have been resolved. Previously, after upgrading their stores to Magento 2.2.6, merchants could not create and save a new multiselect or dropdown customer custom attribute, and  existing customer attributes  no longer appeared for editing within the customer's account on the storefront.

<!-- MAGETWO-94764  -->

*  Fixed an issue with the shared configuration settings in `app/etc/config.php` that caused `recursion detected` errors during deployment.

<!-- ENGCOM-2673  -->

*  You can now enable logs as expected (through the use of **Stores** > **Settings** > **Configuration** > **Advanced** > **Developer** > **Debug** > **Log to file**) when switching from production mode to developer mode. *Fix submitted by [Jay Ghosh](https://github.com/jayankaghosh) in pull request [15335](https://github.com/magento/magento2/pull/15335)*. [GitHub-13480](https://github.com/magento/magento2/issues/13480)

<!-- ENGCOM-2920  -->

*  You can now filter the customer grid without inadvertently triggering a next-page Ajax call. Previously, when you created an order from the Orders page and tried to filter the customer list, Magento did not filter the list, and displayed the next page of customer entries. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17870](https://github.com/magento/magento2/pull/17870)*. [GitHub-17789](https://github.com/magento/magento2/issues/17789)

<!-- MAGETWO-94475  -->

*  The `bin/magento` command now works as expected when Magento is not installed. Previously, Magento displayed this error, `Command line user does not have read and write permissions on generated directory. Please address this issue before using Magento command line.`

<!-- ENGCOM-2740  -->

*  Magento no longer throws an error when loading configuration data while running the `setup:di:compile` command. Previously, Magento threw an error when loading configuration data before Magento was installed because no  store-specific or website-specific configuration data was available. (Store and website data is available only after Magento is installed.) *Fix submitted by [Marcel](https://github.com/mimarcel) in pull request [13649](https://github.com/magento/magento2/pull/13649)*.

<!-- ENGCOM-2674  -->

*  You can now set a custom `frontend_model` value in `system.xml` if the name of the module you're using contains an underscore. *Fix submitted by [Ben Tideswell](https://github.com/bentideswell) in pull request [14397](https://github.com/magento/magento2/pull/14397)*.

<!-- ENGCOM-2596  -->

*  Performance of the `setup:upgrade` step  of the update process has been improved for installations containing many orders (greater than 100,000). *Fix submitted by [Aurélien Lavorel](https://github.com/AurelienLavorel) in pull request [16570](https://github.com/magento/magento2/pull/16570)*.

<!-- ENGCOM-2646  -->

*  You can now complete `setup:install` for installations running  an authenticated Redis instance for cache configuration. Previously, Magento did not read the Redis cache options in `env.php` as expected, although  the Redis session password configuration worked as expected.  *Fix submitted by [Guillaume Giordana](https://github.com/guillaumegiordana) in pull request [17078](https://github.com/magento/magento2/pull/17078)*.

<!-- ENGCOM-2721  -->

*  You can now replace the transaction trace driver for the Profiler (`app/bootstrap.php`). For example, with this change you could replace  the default profiler with the OpenTracing API, which can then use its own exporters to express the code to the CNCF Jaeger project. This in turn supports a more granular view of application transactions. *Fix submitted by [Andrew Howden](https://github.com/andrewhowdencom) in pull request [15171](https://github.com/magento/magento2/pull/15171)*.

### AdminGWS

<!-- MAGETWO-93990  -->

*  An administrator with permissions on one website only can no longer access the All Store Views scope for a product that is assigned to multiple websites.

<!-- MAGETWO-90765  -->

*  Administrators with restricted privileges can now edit and create CMS blocks as expected. Previously, Magento threw an  error like this when an administrator tried to edit or create a block: `Warning: array_intersect(): Argument #1 is not an array in /var/www/html/magento2ee/app/code/Magento/AdminGws/Model/Models.php on line 1075 `.￼

### B2B

<!-- MAGETWO-93050  -->

*  Magento no longer permits merchants to open a new tab to edit company users from the company users tabs. Previously, a merchant would try to open a new tab to edit users, and Magento threw an error.

<!-- MAGETWO-92400  -->

*  Magento now removes information from all fields when you click **Reset** when creating a new company from the Admin. Previously, Magento cleared all fields except for the **admin email** field.

<!-- MAGETWO-89654  -->

*  Merchants can now create a company with an optional regional setting. Previously, Magento displayed this message, `Error message: Invalid value of "" provided for the region_id field`.

<!-- MAGETWO-93081  -->

*  Administrators with appropriate permissions can now change the status of a company  to **Rejected**. Previously, Magento did not save the change in status, and threw an error.

<!-- MAGETWO-93050  -->

*  Magento now opens a new window for edit purposes when a merchant selects **Edit User in New Tab** from the company Users page. Previously, when a merchant tried to edit company users from the storefront by selecting  **Edit User in New Tab**, Magento threw a JSON error.

### Bundle products

<!-- MAGETWO-93145  -->

*  Magento now sorts bundle summaries according to the criteria set in the Admin.

<!-- ENGCOM-1832  -->

*  The price range displayed for bundle products now shows only valid prices. Previously, Magento displayed special prices that had expired, even though the price in the customization and summary area was correct. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15535](https://github.com/magento/magento2/pull/15535)*. [GitHub-15457](https://github.com/magento/magento2/issues/15457)

<!-- MAGETWO-89006  -->

*  Merchants can now create a return merchandise authorization (RMA)  for a bundled product from a customer's account. Previously, Magento did not create the RMA, and the store returned an error.

### CAPTCHA

<!-- ENGCOM-2576  -->

*  CAPTCHA code has been refactored to eliminate unnecessary multiple conditions. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [17203](https://github.com/magento/magento2/pull/17203)*.

### Catalog

<!-- MAGETWO-93198  -->

*  Magento now displays the product name  under the product image on the product page.

<!-- MAGETWO-92036  -->

*  Magento now alerts you to an error when a merchant tries to save a product without completed required fields.

<!-- ENGCOM-2555  -->

*  A previous fix for a gallery template issue that was inadvertently reverted has been restored. *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16594](https://github.com/magento/magento2/pull/16594)*. [GitHub-15009](https://github.com/magento/magento2/issues/15009)

<!-- ENGCOM-2650  -->

*  Parent theme image height settings (specified in `view.xml`) no longer override the height settings assigned to individual images. *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request [14537](https://github.com/magento/magento2/pull/14537)*. [GitHub-12250](https://github.com/magento/magento2/issues/12250)

<!-- ENGCOM-2672  -->

*  Magento now maintains product image roles as expected after upgrade. Previously, image roles randomly disappeared from product pages after upgrade. *Fix submitted by [Sam Butler Thompson](https://github.com/Scarraban) in pull request [15606](https://github.com/magento/magento2/pull/15606)*. [GitHub-10687](https://github.com/magento/magento2/issues/10687)

<!-- ENGCOM-2670  -->

*  You can now save attributes for a configurable product after a validation error occurs. Previously, when you added a new product with an image, if a validation error occurred during the product save, Magento removed the images  from the **Images and Videos** section. If you subsequently fixed the validation conflict and attempted to save the product again, Magento threw a descriptive error. *Fix submitted by [Oleksandr Kravchuk](https://github.com/swnsma) in pull request [16597](https://github.com/magento/magento2/pull/16597)*. [GitHub-7372](https://github.com/magento/magento2/issues/7372), [GitHub-13177](https://github.com/magento/magento2/issues/13177)

<!-- ENGCOM-2675  -->

*  You can now add a product with a price of zero (0) to a wishlist. *Fix submitted by [sv3n](https://github.com/sreichel) in pull request [17395](https://github.com/magento/magento2/pull/17395)*. [GitHub-16479](https://github.com/magento/magento2/issues/16479)

<!-- ENGCOM-1605  -->

*  You can now save a title for a product from the **Product** > **Customizable Options** page. *Fix submitted by [Madhumala Krishnan](https://github.com/Madhumalak) in pull request [15357](https://github.com/magento/magento2/pull/15357)*. [GitHub-6305](https://github.com/magento/magento2/issues/6305)

<!-- ENGCOM-2758  -->

*  You can now add a custom fieldset  to the Admin category editor without changing the position of  the General section (that is, the section that contains the **Enable category**, **Include in Menu**, and **Category Name** fields). Previously, Magento moved the General section to the last position of the form. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [17540](https://github.com/magento/magento2/pull/17540)*. [GitHub-15041](https://github.com/magento/magento2/issues/15041)

<!-- MAGETWO-94080  -->

*  The Catalog Products List widget can now display products on the storefront that have specific attributes applied to the default Global scope.

<!-- MAGETWO-94062  -->

*  Magento now displays a descriptive error message  when a customer tries to order a product in increments that are not allowed.

<!-- MAGETWO-92682  -->

*  The Catalog Staging module no longer overrides trigger settings in scheduled indexed operations. Previously, when Magento indexes were configured to run on schedule, Magento  created the appropriate INSERT/UPDATE/DELETE triggers. Consequently, the UPDATE trigger script contained a condition to check if any values were  changed, and only then inserted a record into the changelog table of subscribed indexers. The Catalog Staging module prevented the inclusion of trigger conditions.

<!-- MAGETWO-88641  -->

*  Magento now applies tier prices as expected after a customer logs into their shopping cart. [GitHub-14255](https://github.com/magento/magento2/issues/14255)

<!-- MAGETWO-84894  -->

*  Magento no longer switches from table to list view on the product page when you add a product from the wishlist to the shopping cart.

<!-- MAGETWO-73443  -->

*  Customers can now add a product to their shopping cart when their session has expired. Previously, Magento did not add the product, and hung indefinitely while trying to add the product.

<!-- MAGETWO-73245  -->

*  A merchant can now successfully create and save configurable products from the Admin in a multisite deployment. Previously, when a merchant created a configurable product with customizable options, Magento set its `has_options` and `required_options`  (in the `catalog_product_entity` table) to 0, and the merchant needed to click **Save** again to correctly add the product.

<!-- MAGETWO-93047  -->

*  The `PUT rest/all/V1/categories/:categoryId` endpoint now requires the `name` field.

<!-- ENGCOM-2622  -->

*  Special price expressions now work as expected. Previously, `catalog_product_price` did not generate correct price data. *Fix submitted by Dmitry Chukhnov in pull request [16510](https://github.com/magento/magento2/pull/16510)*.

### Catalog rule

<!-- ENGCOM-2718  -->

*  `date` can now be used as a condition for Catalog Price rules. *Fix submitted by [Glenn Cheng](https://github.com/GlennCheng) in pull request [16855](https://github.com/magento/magento2/pull/16855)*.

### Cart and checkout

<!-- MAGETWO-93037  -->

*  Customers can no longer place orders for out-of-stock products.

<!-- ENGCOM-2743  -->

*  Magento no longer displays an undefined string on the Order Summary page. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17526](https://github.com/magento/magento2/pull/17526)*. [GitHub-17492](https://github.com/magento/magento2/issues/17492)

<!-- ENGCOM-2901  -->

*  Magento now displays the wishlist icon on the shopping cart page on mobile devices. Previously, Magento cut off the wishlist icon on this page when viewed on a mobile device. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [17877](https://github.com/magento/magento2/pull/17877)*. [GitHub-17851](https://github.com/magento/magento2/issues/17851)

<!-- ENGCOM-2789  -->

*  Magento no longer unchecks **My billing and shipping address are the same** checkbox when a customer uses an offline custom payment method for an order. Previously, when a customer used an offline custom payment method for an order, Magento unchecked this  checkbox on the payment step if the shipping address was updated. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [17593](https://github.com/magento/magento2/pull/17593)*. [GitHub-14819](https://github.com/magento/magento2/issues/14819)

<!-- MAGETWO-93038  -->

*  You can now see category changes on the storefront as expected after the changes have been saved. Previously, Magento did not display changes to product categories on the storefront until reindexing occurred even if **update on schedule** was set and the cache had been cleaned.

<!-- MAGETWO-73604  -->

*  Magento now populates the **Default Billing** address field with the shipping address when a customer selects **Save in address book** during checkout. Previously, Magento saved the address, but did not populate the default billing address field as expected.

<!-- ENGCOM-2534  -->

*  Third-party modules can now perform actions after `totals` calculation. (Modules can perform additional actions by adding `.done`, `.fail`, or `.always` tasks to the request promise by creating a JavaScript mixin for the totals processor.) *Fix submitted by [Navarr Barnier](https://github.com/navarr) in pull request [17127](https://github.com/magento/magento2/pull/17127)*.

<!-- ENGCOM-2645  -->

*  Magento no longer adds an empty method to the cart summary. Previously, when the method html was empty, an empty list item resulted, which subsequently  resulted in an extra margin of 20px because of default styling. *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17189](https://github.com/magento/magento2/pull/17189)*.

<!-- ENGCOM-2636  -->

*  The sidebars for the wishlist on the catalog, my account, and checkout pages now render special characters correctly. Previously, the browser displayed `&trade;` instead of rendered special characters on these pages. *Fix submitted by [deepjoshi94](https://github.com/deepjoshi94) in pull request [17070](https://github.com/magento/magento2/pull/17070)*.

<!-- ENGCOM-2665  -->

*  The `disabled attribute` has been removed from the region list. *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [16955](https://github.com/magento/magento2/pull/16955)*.

<!-- ENGCOM-2210  -->

*  The Admin checkout agreement controllers have been refactored to remove the use of `ObjectManager`. *Fix submitted by [AnshuMishra17](https://github.com/AnshuMishra17) in pull request [16505](https://github.com/magento/magento2/pull/16505)*.

### Clean up and minor refactoring

<!-- ENGCOM-2580  -->

*  Problems with the responsive layout  `app/design/frontend/Magento/luma/Magento_Theme/web/css/source/_module.less` have been resolved. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [17217](https://github.com/magento/magento2/pull/17217)*.

<!-- ENGCOM-2549  -->

*  The `text-align` for the `<th>` element of the Subtotal column in the creditmemo email has been corrected. *Fix submitted by [Tomash Khamlai](https://github.com/TomashKhamlai) in pull request [17153](https://github.com/magento/magento2/pull/17153)*.

<!-- ENGCOM-2568  -->

*  The  invalid `knockoutjs` data binding in Braintree PayPal has been fixed. *Fix submitted by [Tiago Sampaio](https://github.com/tiagosampaio) in pull request [17236](https://github.com/magento/magento2/pull/17236)*.

<!-- ENGCOM-2613  -->

*  The overall readability of Shipping Methods sorting has been improved by replacing sort callbacks. *Fix submitted by [Lukasz Bajsarowicz](https://github.com/lbajsarowicz) in pull request [16788](https://github.com/magento/magento2/pull/16788)*.

<!-- ENGCOM-2594  -->

*  Files in `/lib` have been cleaned up. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [17103](https://github.com/magento/magento2/pull/17103)*.

<!-- ENGCOM-2619  -->

*  Unused IDs in `app/code/Magento/Checkout/view/frontend/web/template/billing-address/form.html` and `app/code/Magento/Checkout/Test/Mftf/Section/CheckoutPaymentSection.xml` have been removed. *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [17291](https://github.com/magento/magento2/pull/17291)*.

<!-- ENGCOM-2118  -->

*  Removed unnecessary translation of HTML tags in `app/code/Magento/Catalog/Block/Adminhtml/Form/Renderer/Config/YearRange.php` and `app/code/Magento/Catalog/i18n/en_US.csv`. *Fix submitted by [Yogesh Suhagiya](https://github.com/Yogeshks) in pull request [17291](https://github.com/magento/magento2/pull/17291)*.

<!-- ENGCOM-2651  -->

*  Minor CSS issues in `lib/internal/Magento/Framework/View/Test/Unit/Url/_files/sourceImport.css` have been fixed. *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17365](https://github.com/magento/magento2/pull/17365)*.

<!-- ENGCOM-2762  -->

*  Duplicate code in `app/code/Magento/Ui/view/base/web/js/dynamic-rows/dynamic-rows.js` has been removed. *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17505](https://github.com/magento/magento2/pull/17505)*.

<!-- ENGCOM-2776  -->

*  The code generator for Proxy is no longer missing `returnType` in the method information definition. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [17552](https://github.com/magento/magento2/pull/17552)*.

<!-- ENGCOM-2748  -->

*  The `<script/>` tag has been replaced with `<script type="text/x-magento-init" />` in  `app/code/Magento/Catalog/view/adminhtml/templates/catalog/product/attribute/form.phtml` and `app/code/Magento/Catalog/view/adminhtml/templates/catalog/product/edit/action/attribute.phtml`. Also,  a new JavaScript component with the callback function has been created.  *Fix submitted by [Yogesh Suhagiya](https://github.com/swnsma) in pull request [17527](https://github.com/magento/magento2/pull/17527)*.

<!-- ENGCOM-2632  -->

*  The `$outputHelper` property declaration has been added to `app/code/Magento/Catalog/CustomerData/CompareProducts.php`. *Fix submitted by [Oleksandr Kravchuk](https://github.com/Yogeshks) in pull request [17250](https://github.com/magento/magento2/pull/17250)*.

<!-- ENGCOM-2632  -->

*  The `Magento_Backend` module  has been refactored. *Fix submitted by [Tiago Sampaio](https://github.com/tiagosampaio) in pull request [17101](https://github.com/magento/magento2/pull/17101)*.

<!-- ENGCOM-1666  -->

*  The usage of the `count()` function in for loops has been refactored to improve the performance of the loops that were running `count()` in every iteration throughout the code base. *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [15507](https://github.com/magento/magento2/pull/15507)*.

### CMS content

<!-- ENGCOM-2734  -->

*  A new `OptionSource` of blocks has been added. *Fix submitted by Thomas Klein in pull request [16021](https://github.com/magento/magento2/pull/16021)*.

<!-- MAGETWO-73359  -->

*  You can successfully save a CMS page with the same URL key as another store on a different website but with the same hierarchy.

<!-- ENGCOM-2655  -->

*  The CMS page index has been refactored to remove the Object Manager, and  dependency injection has been added  to the constructor. *Fix submitted by [Vladymyr Hrivinskyi](https://github.com/hryvinskyi) in pull request [17066](https://github.com/magento/magento2/pull/17066)*.

### Configurable products

<!-- ENGCOM-2671  -->

*  You can now use REST to add a configurable product to a shopping cart without creating a duplicate product entry. *Fix submitted by [zamboten](https://github.com/zamboten) in pull request [15720](https://github.com/magento/magento2/pull/15720)*. [GitHub-15028](https://github.com/magento/magento2/issues/15028)

<!-- MAGETWO-77742  -->

*  Magento now displays a descriptive error message when you try to upload a file in an unsupported format. Previously, Magento displayed an error that did not relate to the specific upload problem.

<!-- MAGETWO-75086  -->

*  Magento now displays the correct  options when you click  on  **View Details** for a  product with configurable options.  ￼Previously, Magento displayed the image for the parent product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)

### CMS

<!-- MAGETWO-73359  -->

*  You can successfully save a CMS page with same URL key as another store on a different website but with the same hierarchy.

<!-- ENGCOM-2655  -->

*  The CMS page index has been refactored to remove the Object Manager and added dependency injection to the constructor. *Fix submitted by [Vladymyr Hrivinskyi](https://github.com/hryvinskyi) in pull request [17066](https://github.com/magento/magento2/pull/17066)*.

### Customer

<!-- ENGCOM-2746  -->

*  When editing an Admin user role, Magento now displays the Customer Groups section under the Customers section as expected. Previously, Magento displayed the Customer Groups section under the **Stores** > **Other settings** section. *Fix submitted by [Emipro Technologies Pvt Ltd](https://github.com/emiprotech) in pull request [17515](https://github.com/magento/magento2/pull/17515)*. [GitHub-16499](https://github.com/magento/magento2/issues/16499)

### Directory

<!-- MAGETWO-92831  -->

*  Currency conversion rate services now work as expected in the Admin.

### EAV

<!-- ENGCOM-2642  -->

*  The Product Attribute Repository's incorrect return values have been replaced with values that now adhere to `Magento\Catalog\Api\ProductAttributeRepositoryInterface (extends Magento\Framework\Api\MetadataServiceInterface)` as expected. *Fix submitted by [julianvdrielen](https://github.com/julianvdrielen) in pull request [15691](https://github.com/magento/magento2/pull/15691)*. [GitHub-4803](https://github.com/magento/magento2/issues/4803)

### Email

<!-- MAGETWO-92786  -->

*  Magento now displays the correct width for the welcome email when viewed on a mobile device.

<!-- ENGCOM-2787  -->

*  Magento can no longer send more than 50 emails per cronjob, which will reduce duplicate emails.  *Fix submitted by [iGerchak](https://github.com/iGerchak) in pull request [17484](https://github.com/magento/magento2/pull/15942)*.

### Frameworks

<!-- ENGCOM-2070  -->

*  You can now set values for `MAX_IMAGE_WIDTH` and `MAX_IMAGE_HEIGHT` in **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Images Configuration**, which supports the upload of larger images. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [15942](https://github.com/magento/magento2/pull/15942)*. [GitHub-13747](https://github.com/magento/magento2/issues/13747)

<!-- ENGCOM-2915  -->

*  `functions.php`  now resides in the Framework module. *Fix submitted by [Kristof, Fooman](https://github.com/fooman) in pull request [16800](https://github.com/magento/magento2/pull/16800)*.

<!-- ENGCOM-2570  -->

*  FTP connections can  now use user or password strings with special characters (for example, @ or #). *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [17246](https://github.com/magento/magento2/pull/17246)*.

#### Application framework

<!-- ENGCOM-2382  -->

*  Magento now validates that the required **Purchase Order Number** field is  set as expected during checkout. *Fix submitted by [Pablo](https://github.com/centerax) in pull request [14393](https://github.com/magento/magento2/pull/14393)*. [GitHub-6585](https://github.com/magento/magento2/issues/6585)

#### Database framework

<!-- MAGETWO-83918  -->

*  The `getSize` function now reflects item and page count totals for filtered product collections on the category page.

#### JavaScript framework

<!-- ENGCOM-2291  -->

*  JavaScript validation rules no longer require validation of fields where completion is not required. Previously, customers could not complete forms unless non-required fields were completed. *Fix submitted by [Vitaliy Boyko](https://github.com/VitaliyBoyko) in pull request [16724](https://github.com/magento/magento2/pull/16724)*. [GitHub-16544](https://github.com/magento/magento2/issues/16544)

<!-- ENGCOM-1967  -->

*  You can disable the **Use system value** checkboxes on the Admin as expected. *Fix submitted by [Valerij Ivashchenko](https://github.com/likemusic) in pull request [16000](https://github.com/magento/magento2/pull/16000)*.

#### Session framework

<!-- ENGCOM-1440  -->

*  Magento no longer unexpectedly empties a customer's shopping cart during checkout when concurrent requests occur. *Fix submitted by [Elio Ermini](https://github.com/elioermini) in pull request [14973](https://github.com/magento/magento2/pull/14973)*. [GitHub-12362](https://github.com/magento/magento2/issues/12362)

### General

<!-- MAGETWO-93152  -->

*  Magento now processes zero (0) in email filter fields correctly.

<!-- MAGETWO-93939  -->

*  You can now clear the **Date of Birth** field in the customer edit page when accessed from the Admin.

<!-- ENGCOM-2737  -->

*  Product image zoom now works as expected in stores running on Safari. *Fix submitted by [Danny Nimmo](https://github.com/dannynimmo) in pull request [17491](https://github.com/magento/magento2/pull/17491)*. [GitHub-17416](https://github.com/magento/magento2/issues/17416)

<!-- ENGCOM-2785  -->

*  Magento now displays the background of transparent product image watermarks correctly. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17013](https://github.com/magento/magento2/pull/17013)*. [GitHub-16929](https://github.com/magento/magento2/issues/16929)

<!-- ENGCOM-2855  -->

*  `.png` images from the GD2 image library that have transparent backgrounds now retain their  transparent backgrounds after upload. Previously, these transparent backgrounds were rendered black when you displayed these images after upload. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [16733](https://github.com/magento/magento2/pull/16733)*. [GitHub-14248](https://github.com/magento/magento2/issues/14248)

<!-- ENGCOM-2860  -->

*  Magento no longer duplicates events during delete operations. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [17718](https://github.com/magento/magento2/pull/17718)*. [GitHub-17715](https://github.com/magento/magento2/issues/17715)

<!-- ENGCOM-2322  -->

*  Magento now correctly displays the Datepicker widget when a user scrolls a  page containing it. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16775](https://github.com/magento/magento2/pull/16775)*. [GitHub-7903](https://github.com/magento/magento2/issues/7903)

<!-- ENGCOM-2628  -->

*  Magento now disables the **Shop By** button on the search page when a customer sets additional search filters. *Fix submitted by [Andrea Rivadossi](https://github.com/AndreaRivadossi) in pull request [15650](https://github.com/magento/magento2/pull/15650)*. [GitHub-13445](https://github.com/magento/magento2/issues/13445)

<!-- MAGETWO-83984 -->

*  Magento now processes the oldest message queue entries first instead of last.

<!-- ENGCOM-2875  -->

*  The `setterName` method is now correctly set. *Fix submitted by [insanityinside](https://github.com/insanityinside) in pull request [17773](https://github.com/magento/magento2/pull/17773)*.

<!-- ENGCOM-2896  -->

*  New templates have been added to the GitHub Issue Reporting section. These templates target a broad scope of possible problems, and the proposed descriptions are aimed at simplifying future fixes. *Fix submitted by [Eugene Shakhsuvarov](https://github.com/ishakhsuvarov) in pull request [17817](https://github.com/magento/magento2/pull/17817)*.

### Google Tag Manager

<!-- MAGETWO-87437  -->

*  All relevant attributes are now populated in the Google Tag Manager when a customer adds a product to their shopping cart. Previously, grouped, bundle,  and configurable  product attributes were missing in the Google Tag Manager.

### Import/export

<!-- MAGETWO-93223  -->

*  Magento now displays the correct execution time for an import operation on the **System** > **Import History** page.

### Infrastructure

<!-- ENGCOM-2783  -->

*  The Web Setup wizard icon sidebar shortcut on the Admin now links as expected to the wizard. *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17543](https://github.com/magento/magento2/pull/17543)*. [GitHub-13948](https://github.com/magento/magento2/issues/13948)

<!-- ENGCOM-2872  -->

*  The `$keepRation` parameter in the `Magento\Cms\Model\Wysiwyg\Images\Storage` class has been renamed to `$keepRatio`. *Fix submitted by [Martin Aarts](https://github.com/MartinAarts) in pull request [17776](https://github.com/magento/magento2/pull/17776)*. [GitHub-17587](https://github.com/magento/magento2/issues/17587)

<!-- MAGETWO-73342  -->

*  Customers can now change product status by clicking on either the toggle element or label text, but not by clicking the area around a toggle element. Previously, if a customer  clicked on the area around a toggle element, Magento changed the state of the element. Unintended results could occur if a customer mistakenly clicked on the area around the element and didn't realize that the status had  changed.

<!-- ENGCOM-2736  -->

*  Outdated LESS lib docs have been updated. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [17479](https://github.com/magento/magento2/pull/17479)*.

<!-- ENGCOM-2643  -->

*  The `floatval()` function has been replaced by the use of direct type casting to `(float)` throughout the code base. *Fix submitted by [Marcel Hauri](https://github.com/mhauri) in pull request [16848](https://github.com/magento/magento2/pull/16848)*.

<!-- ENGCOM-2644  -->

*  The `strval()` function has been replaced by the use of direct type casting to `(string)` throughout the code base. *Fix submitted by [Marcel Hauri](https://github.com/mhauri) in pull request [16849](https://github.com/magento/magento2/pull/16849)*.

<!-- ENGCOM-2668  -->

*  The EU-VAT-Numbers `Countrycode`  prefixes have been removed for validation purposes. *Fix submitted by [Drischie](https://github.com/Drischie) in pull request [17385](https://github.com/magento/magento2/pull/17385)*.

<!-- ENGCOM-2634  -->

*  Missing `data-th` selectors have been added to tables. *Fix submitted by [Daniel Ruf](https://github.com/DanielRuf) in pull request [17327](https://github.com/magento/magento2/pull/17327)*.

### Locale

<!-- MAGETWO-94075  -->

*  The DatePicker date filter on **Reports** > **Products** > **Ordered** now works as expected for administrators working in Australian English locales.

### Logging

<!-- MAGETWO-93054  -->

*  Admin action logs now list changes to product quantity as expected.

### Payment methods

<!-- MAGETWO-93299  -->

*  Magento no longer throws an error when you try to add a new shipping address to an order placed with Braintree from the Admin.

<!-- MAGETWO-86712  -->

*  The email server no longer throws an exception when a customer places an order using a PayPal payment method. Previously, when a customer checked out using PayPal, Magento placed the order, but the email server threw an exception. *Fix submitted by [Jason Woods](https://github.com/driskell) in pull request [13133](https://github.com/magento/magento2/pull/13133)*.

### Reports

<!-- MAGETWO-93729  -->

*  The scope selector for reports now works as expected. Previously, when a merchant set the scope to **All Websites** , the generated report showed  sales from only a subset of websites.

<!-- MAGETWO-93345  -->

*  The `.csv` export of Coupon reports now shows the correct total for  selected coupons. Previously, the total line in the `.csv` file showed the totals for all coupons in the selected time period, rather than just the selected coupons.

<!-- MAGETWO-86650  -->

*  The `.csv` export of the Abandoned Cart report now contains information about all abandoned carts as expected. Previously, this `.csv` file contained  only the first 20 rows of the report.

<!-- ENGCOM-2724  -->

*  The **Year-to-date** dropdown accessed from **Stores** > **Settings** > **Configuration** > **General** > **Reports** > **Dashboard** now displays a numerical list that ranges from 01 to 12 as expected. *Fix submitted by [teddysie](https://github.com/teddysie) in pull request [17383](https://github.com/magento/magento2/pull/17383)*. [GitHub-17289](https://github.com/magento/magento2/issues/17289)

<!-- MAGETWO- 73585 -->

*  Wishlist reports are available on the Admin as expected.

### Review

<!-- ENGCOM-2720 -->

*  Magento now displays a `404 page not found` error when a customer tries to navigate to a product review that is not accessible. Previously. Magento displayed a PHP error code. *Fix submitted by Ananth in pull request [15369](https://github.com/magento/magento2/pull/15369)*. [GitHub-13102](https://github.com/magento/magento2/issues/13102)

### Reward

<!-- MAGETWO-93060  -->

*  Magento now throws a descriptive error as expected when using a negative value that contains an invalid minus symbol to update reward points on a customer account.

### Sales

<!-- ENGCOM-2623  -->

*  The `Magento\Sales\Block\Adminhtml\Order\Totalbar` class and totalbar template files  have been deprecated.  These components were formerly included but never implemented in the invoice create and credit memo create layout files. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [16656](https://github.com/magento/magento2/pull/16656)*. [GitHub-16653](https://github.com/magento/magento2/issues/16653)

<!-- MAGETWO-94291  -->

*  Magento now displays product price and shipping costs in the default currency that was configured for that  specific website for orders created from the Admin. Previously, when you have multi-site configuration with different default currencies for each website, the product and shipping prices shown while creating an Admin order are incorrect.

<!-- MAGETWO-94163  -->

*  Merchants can now successfully update product prices and currencies using **Admin** > **Stores** > **Settings** > **Configuration** > **Currency Setup**.

<!-- MAGETWO-88858  -->

*  Admin orders are no longer restricted by a minimum order amount. Previously, Magento required this minimum for both Admin and storefront users.

### Sales rule

<!-- MAGETWO-93209  -->

*  You can now use wildcard values in coupon codes.

### Search

<!-- ENGCOM-2415  -->

*  JavaScript files are now located inside the `web/js` directory. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [16582](https://github.com/magento/magento2/pull/16582)*. [GitHub-16302](https://github.com/magento/magento2/issues/16302)

<!-- MAGETWO-91063  -->

*  Search synonyms are now available for all search engines deployed in your Magento store. Previously, search synonyms did not appear in the Admin menu when Elasticsearch 5.0+ was deployed.

<!-- MAGETWO-92652  -->

*  Product attribute are now displayed as expected in layered navigation with Elasticsearch 5.0+.

<!-- MAGETWO-90497  -->

*  Elasticsearch now works as expected for Chinese locales.

### Shipping

<!-- MAGETWO-86179  -->

*  Customers can now add a new address to an order during checkout of an order being shipped to multiple addresses.

<!-- ENGCOM-2704  -->

*  Multishipping checkout now works as expected. Previously, Magento displayed the `Shipping address is not set` error message  when checking out an order with multiple addresses. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [16753](https://github.com/magento/magento2/pull/16753)*. [GitHub-16555](https://github.com/magento/magento2/issues/16555)

<!-- MAGETWO-94434  -->

*  The Magento UPS module has been updated to support new UPS API endpoints.

<!-- MAGETWO-93810  -->

*  Customers can now view their completed order from the success page for orders that will be shipped to multiple addresses. Previously, when a customer took a link from the order success page to view their just-completed order, Magento displayed this error, **There has been an error processing your request**.

<!-- MAGETWO-92144  -->

*  The Shipment grid now displays the status of completed orders correctly. Previously, the Order Status column of the Shipment grid indicated that a completed order was being processed.

#### Magento Shipping

<!-- BUNDLE-1663  -->

*  Magento Shipping return merchandise authorization (RMA) can no longer be enabled when Magento Shipping is disabled.

### Store

<!--  ENGCOM-2530  -->

*  The `getUrlInStore()` method no longer returns URLs that contain the store code, which has shortened the extremely long URLs it previously returned. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16468](https://github.com/magento/magento2/pull/16468)*. [GitHub-16273](https://github.com/magento/magento2/issues/16273)

### Swagger

<!-- ENGCOM-2837, MAGETWO-93748  -->

*  Swagger now works as expected when JavaScript minification is enabled. Previously, when JavaScript minification was enabled, the `swagger-ui-bundle.js` became corrupted, although Swagger worked fine when minification was subsequently disabled, and the files were redeployed. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [17626](https://github.com/magento/magento2/pull/17626)*. [GitHub-16927](https://github.com/magento/magento2/issues/16927)

### Testing

<!-- ENGCOM-2616  -->

*  The `ProcessCronQueueObserverTest.php` integration test now works correctly. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [17191](https://github.com/magento/magento2/pull/17191)*. [GitHub-16243](https://github.com/magento/magento2/issues/16243)

<!-- ENGCOM-2900  -->

*  Deprecated methods throughout the test suite have been replaced. *Fix submitted by [Tiago Sampaio](https://github.com/tiagosampaio) in pull request [17872](https://github.com/magento/magento2/pull/17872)*.

<!-- ENGCOM-2899  -->

*  An API functional test  for the `/V1/search` (searchV1) resource has been added. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [17840](https://github.com/magento/magento2/pull/17840)*.

<!-- ENGCOM-2907  -->

*  The `\Magento\Sales\Model\Validator` class is now covered by unit tests. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17876](https://github.com/magento/magento2/pull/17876)*.

<!-- ENGCOM-2908  -->

*  The `\Magento\Search\Model\PopularSearchTerms` is now covered by unit tests. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17739](https://github.com/magento/magento2/pull/17739)*.

<!-- ENGCOM-2876  -->

*  The `\Magento\Search\Model\SynonymAnalyzer` class  is now covered by a unit test. *Fix submitted by [Zebra](https://github.com/furseyev) in pull request [17801](https://github.com/magento/magento2/pull/17801)*.

<!-- ENGCOM-2843  -->

*  The Sales Rule model classes are now covered by unit tests. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17710](https://github.com/magento/magento2/pull/17710)*.

<!-- ENGCOM-2830  -->

*  The `\Magento\Review\Observer\ProcessProductAfterDeleteEventObserver` is now covered by unit tests. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [17693](https://github.com/magento/magento2/pull/17693)*.

<!-- ENGCOM-2823  -->

*  The CMS model classes are now covered by unit tests. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17678](https://github.com/magento/magento2/pull/17678)*.

<!-- ENGCOM-2807  -->

*  The `\Magento\Newsletter\Model\Problem` class is now covered by unit tests. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [17633](https://github.com/magento/magento2/pull/17633)*.

<!-- ENGCOM-2780  -->

*  The `\Magento\Braintree\Model\InstantPurchase\CreditCard\TokenFormatter` class is now covered by unit tests. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [17590](https://github.com/magento/magento2/pull/17590)*.

<!-- ENGCOM-2772  -->

*  The `\Magento\Catalog\Test\Unit\Cron\AvailabilityCheckerTest ` and `\Magento\Catalog\Test\Unit\Cron\DeleteOutdatedPriceValuesTest` classes are now covered by unit tests. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17561](https://github.com/magento/magento2/pull/17561)*.

<!-- ENGCOM-2715  -->

*  The `Magento\Braintree\Model\InstantPurchase\CreditCard\AvailabilityChecker` class is now covered by a unit test. [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17454](https://github.com/magento/magento2/pull/17454)*

<!-- ENGCOM-2680  -->

*  The instant purchase PayPal token formatter is now covered by a unit test. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [17405](https://github.com/magento/magento2/pull/17405)*.

<!-- ENGCOM-2657  -->

*  The `\Magento\Braintree\Gateway\Http\Client\TransactionVoid` and `\Magento\Braintree\Gateway\Http\Client\TransactionRefund` classes are now covered by unit tests. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [17368](https://github.com/magento/magento2/pull/17368)*.

<!-- ENGCOM-2632  -->

*  The `\Magento\Catalog\CustomerData\CompareProducts` class is now covered by unit tests. *Fix submitted by [Oleksandr Kravchuk](https://github.com/Yogeshks) in pull request [17250](https://github.com/magento/magento2/pull/17250)*.

<!-- ENGCOM-2828  -->

*  `\Magento\Review\Observer\ProcessProductAfterDeleteEventObserver` is now covered by an integration test. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [17690](https://github.com/magento/magento2/pull/17690)*.

### Translation

<!-- ENGCOM-2863  -->

*  Errors in  `app/code/Magento/Sales/i18n/en_US.csv` have been corrected. *Fix submitted by [Jignesh Baldha](https://github.com/jignesh-baldha) in pull request [17735](https://github.com/magento/magento2/pull/17735)*.

<!-- ENGCOM-2817  -->

*  `translate="title"`  has been added to Admin menus. *Fix submitted by [Yogesh Suhagiya](https://github.com/Yogeshks) in pull request [17521](https://github.com/magento/magento2/pull/17521)*.

<!-- ENGCOM-2799  -->

*  The custom attribute group name on customer and product pages can now be translated. *Fix submitted by [Grayson](https://github.com/GraysonChiang) in pull request [17602](https://github.com/magento/magento2/pull/17602)*.

<!-- ENGCOM-2781  -->

*  Validation error messages can now be translated. *Fix submitted by [Yogesh Suhagiya](https://github.com/Yogeshks) in pull request [17575](https://github.com/magento/magento2/pull/17575)*.

<!-- ENGCOM-2677  -->

*  Error messages in the shopping cart page can now be translated. *Fix submitted by [Yogesh Suhagiya](https://github.com/Yogeshks) in pull request [16777](https://github.com/magento/magento2/pull/16777)*.

### UI

<!-- ENGCOM-2812  -->

*  The JavaScript  validation rule used to validate AM/PM time settings now works as expected when JavaScript is minified. *Fix submitted by Mark Shust in pull request [17652](https://github.com/magento/magento2/pull/17652)*. [GitHub-17648](https://github.com/magento/magento2/issues/17648)

<!-- ENGCOM-2834  -->

*  The message list component message type now has a message type of `success`. Previously, this type was always `error` when the `parameters` property was specified. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17701](https://github.com/magento/magento2/pull/17701)*. [GitHub-17700](https://github.com/magento/magento2/issues/17700)

<!-- ENGCOM-2607  -->

*  The confirmation modal buttons that Magento displays when a customer sends a product to the trash are now translated as expected. *Fix submitted by [Karla Saaremäe](https://github.com/Karlasa) in pull request [17275](https://github.com/magento/magento2/pull/17275)*. [GitHub-17193](https://github.com/magento/magento2/issues/17193)

### User

<!-- MAGETWO-93003  -->

*  Magento no longer displays stores to which an administrator does not have access when the administrator creates a product and assigns it to a store view. Previously, an administrator with permissions set on one website only could view the **All Store Views** scope for a product.

### Wishlist

<!-- MAGETWO-86609  -->

*  Products disabled in the Admin  no longer appear in storefront wishlists. Previously, disabled products still appeared in the storefront wishlist, although when a customer clicked on a disabled product, Magento correctly returned “page not found”.

<!-- MAGETWO-74289  -->

*  Customers can now choose which wishlist to add a product to when adding products to the wishlist from the shopping cart.

<!-- MAGETWO-89234  -->

*  Magento now displays a success message when a customer successfully updates a wishlist.

## Known issues

<!-- BUNDLE-1731  -->

*  Magento  currently does not display the requested quote information when you select Get Quotes for an order from a storefront that supports collection point delivery.

<!-- BUNDLE-1840  -->

*  The Vertex customer tax code that is defined on Vertex Cloud and specified in the **Customer Code** field ignores a new customer tax class if both are specified on the customer detail page in the Magento Admin.

<!-- BUNDLE-1835  -->

*  Customers will not be able to complete purchases  if  merchants configure Klarna payments to work in a different region than the store has been configured for.

<!-- not needed --  MAGETWO-93800 MAGETWO-94468 MAGETWO-94236 MAGETWO-94213 MAGETWO-94174 MAGETWO-94098 MAGETWO-93725 MAGETWO-93105 MAGETWO-92654 MAGETWO-92187 MAGETWO-92169 MAGETWO-91477 MAGETWO-91358 MAGETWO-91288 MAGETWO-89892 MAGETWO-89309 MAGETWO-88233 MAGETWO-86482 MAGETWO-85420 MAGETWO-82084 MAGETWO-73357 MAGETWO-72067 MAGETWO-71157 MAGETWO-95529 MAGETWO-95424 MAGETWO-94762 MAGETWO-94409 MAGETWO-94331 MAGETWO-94300 MAGETWO-94475 -->

## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-7.md %}

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-2-7-partner.md %}

### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

### Installation and upgrade instructions

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
