---
group: release-notes
title: Magento Commerce 2.3.0 Release Notes
---

*Release notes published November 28, 2018 and last updated on June 3, 2020.*

We are pleased to present Magento Commerce 2.3.0 General Availability. This release includes numerous functional fixes and enhancements.

## Apply updated hot fix for CVE-2019-8118

The patch addresses an issue with [CVE-2019-8118](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8118) that was included in Magento 2.3.3 and 2.2.10. While the original fix for that bug stopped the logging of failed login attempts, information collected prior to updating to these current versions may still exist, and previous, unpatched versions of Magento may still have this issue. This hotfix includes both a patch (first released in Oct 2019) that stops the logging of failed login attempts and a new script that clears the login attempts that were previously collected. **We recommend that all merchants download and apply this patch and download and run the clean-up script**. See [Remove failed login attempts from the database](https://support.magento.com/hc/en-us/articles/360040209352) for information on how to download and run the patch and clean-up script.

## Apply patch PRODSECBUG-2233 to address critical remote code execution vulnerability (RCE)

An unauthenticated cross-site scripting vulnerability combined with an authenticated Phar deserialization vulnerability has left this version of Magento Commerce open to serious exploit. An attacker can use these vulnerabilities to inject JavaScript into the Magento Admin and subsequently launch malicious code in a store user’s browser.   **We strongly recommend that all users of the affected versions of Magento download and apply the appropriate patch as soon as possible**.

This issue and the available patches are discussed in the [Extending the June 25 Security Update to Older Versions of Magento](https://community.magento.com/t5/Magento-DevBlog/Extending-the-June-25-Security-Update-to-Older-Versions-of/ba-p/138231)
blog post. You can directly access patch code through your Magento account for Magento Commerce. Locate the patch by the name. We provide both Git-based and Composer-based patches.

## Apply patch PRODSECBUG-2198 to address critical SQL injection vulnerability

A critical SQL injection vulnerability has been identified in pre-2.3.1 Magento code. To quickly protect your store from this vulnerability only, install patch PRODSECBUG-2198.  However, to protect against this vulnerability and others, you must upgrade to Magento Commerce or Open Source  2.3.1. **We strongly suggest that you install these full patches as soon as you can**.

See the description of  PRODSECBUG-2198  in the  [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for information on this vulnerability.

## Highlights

Magento Commerce 2.3.0 includes a wealth of new features as well as hundreds of enhancements and fixes to the core product. Look for the following highlights in this release:

### Merchant tool enhancements

*  **Inventory Management (provided by [Magento Inventory (was MSI)](https://github.com/magento/inventory))** is now available with Magento 2.3.0. It lets merchants manage inventory for all product types in a single warehouse and across complex shipping networks. Merchants can manage these locations as sources, tracking on-hand inventory quantities per product. Stocks map these sources and sales channels (websites) to provide an accurate, salable quantity as inventory pools for concurrent checkout and product reservations. Inventory Management also updates order and shipment options, giving you full control over your stock.

    Magento Inventory is a Magento Community Engineering special project open to contributors. To take part and contribute, see the [Magento Inventory GitHub](https://github.com/magento/inventory) repository and [wiki](https://github.com/magento/inventory/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C5FU5E2HY) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.
   *  [Inventory Management overview]({{ page.baseurl }}/inventory/index.html) for developer documentation
   *  [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) for merchant information and instructions

*  **CMS enhancements** include banner enhancements. You can now create banner content in native Magento WYSIWYG (or Page Builder. See the  `Page Builder` discussion below. (Within the product interface, we now use the term  *dynamic block* instead of  *banner*.) We've also updated the WYSIWYG editor to use TinyMCE 4.6. (TinyMCE is now integrated into Magento through an adapter that allows it to be replaced with any other WYSIWYG editor.)

*  **PageBuilder** is a drag-and-drop visual content editing tool that lets merchants customize the appearance of their storefront without writing any HTML or CSS. Registered participants can install PageBuilder Beta on {{site.data.var.ee}} 2.3.0 code. See check [Magento 2.3 product availability](https://devdocs.magento.com/release/availability.html) and [Magento blog](https://magento.com/blog/magento-news/magento-2.3-new-tools-fuel-your-growth-2019).

### Improved developer experience

*  **PWA Studio** is a set of tools that support the development, deployment and maintenance of progressive web applications. See [Magento PWA documentation](https://magento.github.io/pwa-studio/) for information about this toolset as well as information about contributing to this ongoing project.

*  **Declarative schema** simplifies installation and upgrade procedures for Magento and extensions. Declarative schema reduce the need for many database scripts, eliminating the need to maintain these scripts. And here's a big advantage: This features enables Magento to roll out database schema changes in patch releases (not currently possible). This feature supports split and shared database structures and database structure validation.

*  **GraphQL API** is now available with Magento 2.3.0. This API provides an alternative to REST and SOAP web APIs for custom frontend development, including headless storefronts and PWAs. See [GraphQL Developer Guide]({{site.baseurl}}/guides/v2.3/graphql/index.html) for more information about Magento's implementation of this data query language. GraphQL is a Magento Community Engineering special project open to contributors. To take part and contribute, see the [GraphQL GitHub](https://github.com/magento/graphql-ce) repository and [wiki](https://github.com/magento/graphql-ce/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C8076E0KS) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

*  **Asynchronous Web APIs** allow any previous Magento REST APIs to be called asynchronously. This community-contributed feature includes separate status APIs that have been created to check the status of each request. Developers can now use the asynchronous APIs  in conjunction with queues that have also been migrated to Magento Open Source. See [Asynchronous web endpoints]({{ page.baseurl }}/rest/asynchronous-web-endpoints.html) for more information.

*  **Bulk Web APIs**  allow all existing REST APIs to accept payloads with multiple entities. These community-contributed bulk APIs support more efficient and scalable implementations that eliminate round-trip network overhead. Like asynchronous APIs, bulk web APIs can be used in conjunction with queues that have also been migrated to Magento Open Source. [See Bulk endpoints]({{ page.baseurl }}/rest/bulk-endpoints.html) for more information.

*  **Updates to Magento's tech stack (including upgraded PHP support to maintain PCI compliance)** include upgrades to Redis, MySQL, Elasticsearch, and compatibility with PHP 7.2.x.

### Substantial security enhancements

*  Over 30 security fixes to core Magento code

*  Cache flush ACL provides granular access to cache management settings to prevent accidental changes that could potentially affect system performance. This ACL also lets merchants control which administrative users can clear site caches.

*  2FA/CAPTCHA protects the Admin panel against stolen passwords and affects stores against bots.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.3.0) have been ported to 2.2.7, 2.1.16, 1.14.4.0, and 1.9.4.0, as appropriate.

### Core bundled extension enhancements

#### Amazon Payments

*  Added branding to the Amazon Pay configuration section in the Admin

*  Improved extension architecture and performance

#### dotmailer

*  dotmailer now supports the Magento Commerce split database mode.

#### Klarna Payments

*  Added descriptive text to the Refund API call

*  Added a link to the Klarna merchant portal

*  Added a detailed Klarna message in the Magento Admin where needed

*  Added an initial Magento Functional Test Framework (MFTF) test and support for future tests

*  Extended cleanser filtering

*  Added support for PHP 7.2 and dropped support for PHP 5.6

#### Magento Shipping

*  The Magento Shipping **Click & Collect** feature offers merchants the ability to:

   *  Provide Click & Collect as a shipping option to customers, enabling them to directly collect shipments from designated source locations or stores

   *  Configure source locations available for Click & Collect pick-ups

   *  Updates to Shipment Form for UPS (U.S. only)

   *  Customers can also select Click & Collect locations during checkout. This feature is supported by workflows and notifications for Click & Collect pick up, packing, and collection.

*  The batch details page now displays collection point addresses, as applicable

*  Activation notices can now be translated.

*  Tracking popups for multi-package shipments are now displayed.

*  The dispatch details page has been enhanced.

#### Vertex

*  The Magento implementation of Vertex now supports Vertex O Series 7.0.

### Other improvements

*  **Elasticsearch support for Magento Open Source version**. Elasticsearch support was previously provided in Magento Commerce only.

*  **Improvements to release packaging** plus an increase in test automation, results in a faster, more efficient release process and improved product quality.

*  **Change in versioning for B2B product** to match the versioning of the core product.

*  Upgrade of Magento Functional Test Framework (MFTF) to 2.3.6.

## Fixed issues

We've fixed hundreds of issues in the Magento 2.3.0 core code.

### Installation, upgrade, deployment

<!---MAGETWO-94173 -->

*  Magento backup functionality is no longer enabled by default, and the code has been deprecated. See [Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html) for more information on backup strategies.

<!---MAGETWO-86717 -->

*  All existing installation and data scripts have been converted into declarative schema data patches for easier deployment.

<!--- MAGETWO-83409, MAGETWO-81578-->

*  The `bin/magento setup` command now provides a rollback option that prompts the user to optionally retain files for future rollbacks. *Fix submitted by Oscar Recio in pull request 11750*. [GitHub-6460](https://github.com/magento/magento2/issues/6460)

<!--- MAGETWO-82781-->

*  The `user.ini` files now recommend the correct values for `php_value memory_limit`. *Fix submitted by Mr. Lewis in pull request [11760](https://github.com/magento/magento2/pull/11760)*. [GitHub-11322](https://github.com/magento/magento2/issues/11322)

<!--- MAGETWO-81992-->

*  You can now use the `bin/magento cron:install`  and `cron:remove` commands to install or uninstall cron across multiple Magento installations with the same crontab. Previously, you could not create different crontab entries for multiple Magento installations that were in different folders because they used the same `#~ MAGENTO START` and `#~ MAGENTO END` suffixes. *Fix submitted by adrian-martinez-interactiv4 in pull request [11360](https://github.com/magento/magento2/pull/11360)*.

<!--- MAGETWO-81965-->

*  The default time setting for `cron` success  and failure history is now seven days. *Fix submitted by Max Chadwick in pull request [11463](https://github.com/magento/magento2/pull/11463)*.

<!--- MAGETWO-82752-->

*  In Magento deployments using multiple languages, the `Framework/translation.php` constructor that sets a store's locale now uses the correct locale. *Fix submitted by Wiard van Rij in pull request [10913](https://github.com/magento/magento2/pull/10913)*. [GitHub-10673](https://github.com/magento/magento2/issues/10673)

<!--- MAGETWO-82294-->

*  The `.htaccess` template now uses Apache 2.4 syntax. *Fix submitted by Jonas Hünig in pull request [11466](https://github.com/magento/magento2/pull/11466)*. [GitHub-10810](https://github.com/magento/magento2/issues/10810)

<!--- MAGETWO-69895-->

*  When a callback during commit throws an exception, the calling plugin can now distinguish this exception from an unsuccessful commit, and logs an exception. Previously, Magento threw an asymmetric transaction rollback error. *Fix submitted by Wayne Theisinger in pull request [9955](https://github.com/magento/magento2/pull/9955)*.  [GitHub-6497](https://github.com/magento/magento2/issues/6497)

<!---MAGETWO-71744 -->

*  The links that the Admin panel provides to backup packages now link to the expected packages. Previously, these links permitted you to download only the latest backup package. *Fix submitted by will-b in pull request [10593](https://github.com/magento/magento2/pull/10593)*.  [GitHub-10032](https://github.com/magento/magento2/issues/10032)

<!---MAGETWO-71359 -->

*  All `cron` schedule times are now saved in UTC and then displayed to the user in the expected time zone. Previously, the `cron` schedule times in the database were in local date time formats and not UTC, while the other system dates and times were saved as UTC in the database. *Fix submitted by Anton Evers in pull request [10432](https://github.com/magento/magento2/pull/10432)*. [GitHub-4237](https://github.com/magento/magento2/issues/4237)

<!---MAGETWO-94844 -->

*  You can install and deploy Magento without first creating an administrator account.

<!---MAGETWO-93699 -->

*  Improved the cron job management process during the deploy phase to prevent database locks and other critical issues. Now, all cron jobs stop during the deploy phase and restart after deployment completes.

<!---MAGETWO-91863 -->

*  Statistics collection for the Reports module is now disabled by default. To enable or partially disable it, see **Stores** > **Settings** > **Configuration** > **General** > **Reports**. Note that certain product features, such as  Magento Commerce dynamic customer segments (specifically the ones based on viewed products), rely on Reports data collection to function properly.

<!---MAGETWO-88281 -->

*  You can now add a new IP address to an existing list by appending the new address with the `- add` flag rather than replacing a former address with a new one.  *Fix submitted by serhii-balko in pull request [13783](https://github.com/magento/magento2/pull/13783)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!---MAGETWO-88045 -->

*  Magento now provides an input/output helper object that supports easier access to styling objects in the Symfony console. *Fix submitted by Malyovanets Nickolas in pull request [13741](https://github.com/magento/magento2/pull/13741)*.

<!---MAGETWO-88258 -->

*  The `.htaccess` file in the `pub/static` folder now includes a `RewriteBase` directive, which supports the installation of Magento under a directory inside the web root. Note: Setting this directive in the `.htaccess` file in Magento root  without setting it in `.htaccess` under `pub/static`  will result in a missing file.  *Fix submitted by Malyovanets Nickolas in pull request [13788](https://github.com/magento/magento2/pull/13788)*.

<!---MAGETWO-88017 -->

*  The list of IP addresses for maintenance status no longer includes commas, which facilitates directly copy and pasting the addresses as needed.  *Fix submitted by Malyovanets Nickolas in pull request [13727](https://github.com/magento/magento2/pull/13727)*.

<!---MAGETWO-86567 -->

*  `PhpFormatter` has been refactored to recursively return the array representation using short array syntax `[]` instead of long `array()`. If the given variable is not an array, it uses the standard `var_export` behavior. This change supports Magento coding standards. *Fix submitted by Malyovanets Nickolas in pull request [1193](https://github.com/magento/magento2/pull/1193)*. [GitHub-758](https://github.com/magento/magento2/issues/758)

<!---MAGETWO-86276 -->

*  The icons that represent the Extension Manager and Module Manager in the main area and left-hand menu of the Web Setup Wizard have been refactored for consistency with Magento UI guidelines. *Fix submitted by Danny Verkade in pull request [12960](https://github.com/magento/magento2/pull/12960)*. [GitHub-11236](https://github.com/magento/magento2/issues/11236)

<!--- MAGETWO-87025 -->

*  You can now deploy static content on demand while in production mode.

<!--- MAGETWO-84646 -->

*  Magento now restarts cron jobs as needed after a cron job was terminated during execution.

<!--- MAGETWO-88212 85273 -->

*  The `CrontabManager.php` file has been updated as follows: If `crontab` has already been populated, the `bin/magento cron:install` command adds `#~ MAGENTO START` and the rest of code directly to the last row of crontab without any spaces. *Fix submitted by Michele Fantetti in pull request [12609](https://github.com/magento/magento2/pull/12609)*.

<!--- MAGETWO-71059 -->

*  `Zend_Json` in the setup `PackagesAuth` has been replaced with the new `Serializer\Json`. [GitHub-9236](https://github.com/magento/magento2/issues/9236)

<!--- MAGETWO-71896 -->

*  Static versioning and minification no longer  break email font styles. [GitHub-8241](https://github.com/magento/magento2/issues/8241)

<!--- MAGETWO-82461 -->

*  We've fixed an issue with using the command line to install or remove `crontab`. Previously, installing or removing `crontab`  via the command line appended `2>&1` to entries, even those not related to Magento. [GitHub-11586](https://github.com/magento/magento2/issues/11586)

<!--- ENGCOM-1187 -->

*  The **Back** button that was previously accessible during the first step of installation has been disabled. *Fix submitted by Mastiuhin Oleksandr in pull request  [14460](https://github.com/magento/magento2/pull/14460)*. [GitHub-14307](https://github.com/magento/magento2/issues/14307)

<!--- ENGCOM-1108 -->

*  Multifields that previously lacked labels in forms now display labels. *Fix submitted by rostyslav-hymon in pull request  [14383](https://github.com/magento/magento2/pull/14383)*. [GitHub-7428](https://github.com/magento/magento2/issues/7428)

<!--- ENGCOM-1360 -->

*  The `app:config:dump` command now has an argument that supports dumping only the specified settings that are required to prepare static content on a build system, not all system settings. This new option (`config-types`) makes it possible to dump scopes and themes automatically (which are needed for a build system) while managing system settings manually using `config:set --lock-config`.  *Fix submitted by Ihor Sviziev in pull request [14807](https://github.com/magento/magento2/pull/14807)*.  [GitHub-11396](https://github.com/magento/magento2/issues/11396)

<!--- MAGETWO-86569 -->

*  You can now switch to default mode from production mode. Previously, if you tried to switch back to default mode, Magento displayed this error, `Cannot switch into given mode 'default'`. [GitHub-4292](https://github.com/magento/magento2/issues/4292)

<!--- MAGETWO-87152 -->

*  The Web Setup wizard now loads successfully when session storage is configured to use memcache in `env.php`. [GitHub-9633](https://github.com/magento/magento2/issues/9633)

<!--- MAGETWO-87562 -->

*  Triggers now work as expected during database backup. Previously, triggers were missing, which resulted in incorrect indexing. [GitHub-9036](https://github.com/magento/magento2/issues/9036)

<!--- MAGETWO-87562 -->

*  Magento no longer automatically disables maintenance mode during a scheduled back up. [GitHub-9918](https://github.com/magento/magento2/issues/9918)

<!--- MAGETWO-87562 -->

*  Database rollback with SSH now works as expected. [GitHub-12064](https://github.com/magento/magento2/issues/12064)

<!---MAGETWO-87524 -->

*  New command-line interface commands that support enabling and disabling the Magento Profiler have been added. See [Enable profiling (MAGE_PROFILER)]({{ page.baseurl }}/config-guide/bootstrap/mage-profiler.html) for more information. [GitHub-9277](https://github.com/magento/magento2/issues/9277)

<!---MAGETWO-87646 -->

*  A fatal error no longer occurs when you run `bin/magento sampledata:deploy`  before installing Magento.  *Fix submitted by Quaternion in pull request [13571](https://github.com/magento/magento2/pull/13571)*.

*  Disabling the Amazon Payments feature while using the Web Wizard to  install Magento no longer breaks the checkout process.

#### Web server configuration

<!---MAGETWO-87916 -->

*  `web/unsecure/base_url` config has been added to website and store scope. *Fix submitted by JeroenVanLeusden in pull request [13659](https://github.com/magento/magento2/pull/13659)*.

<!---MAGETWO-87748 -->

*  The `static/` string has been removed from the `resource` parameter, allowing `static.php` to generate the specified resource correctly. *Fix submitted by Daniel in pull request [13361](https://github.com/magento/magento2/pull/13361)*.

<!---MAGETWO-94349 -->

*  Fixed an issue with the shared configuration settings in `app/etc/config.php` that caused `recursion detected` errors during deployment.

<!---MAGETWO-70764 -->

*  You can now set a default value to fields with config field type `image` or `file`. [GitHub-10253](https://github.com/magento/magento2/issues/10253)

<!---MAGETWO-71061 -->

*  We’ve removed `Zend_Json` from `Setup/Migration.php`. [GitHub-10341](https://github.com/magento/magento2/issues/10341)

<!--- ENGCOM-2610 -->

*  The licenses listed in `composer.json` have been updated for accuracy. *Fix submitted by Marcel Hauri in pull request  [17268](https://github.com/magento/magento2/pull/17268)*. [GitHub-17225](https://github.com/magento/magento2/issues/17225)

<!--- ENGCOM-2125 -->

*  Magento multi-store installations now use the store view-specific values from the Store Configuration if they differ from the global default configuration settings. Previously, Magento loaded the wrong home page in multi-store deployments. *Fix submitted by hitesh-wagento in pull request  [16046](https://github.com/magento/magento2/pull/16046)*. [GitHub-15205](https://github.com/magento/magento2/issues/15205), [GitHub-15245](https://github.com/magento/magento2/issues/15245)

<!--- ENGCOM-748 -->

*  Magento no longer displays deprecated currencies in the currency dropdown menu that is displayed during the setup process. *Fix submitted by Malyovanets Nickolas in pull request  [13782](https://github.com/magento/magento2/pull/13782)*. [GitHub-13760](https://github.com/magento/magento2/issues/13760)

<!--- ENGCOM-838 -->

*  You can now successfully create a new store view from the Admin. Previously, Magento displayed this message when you attempted to create a new storeview: `Requested store is not found`. *Fix submitted by Pieter Hoste in pull request  [14043](https://github.com/magento/magento2/pull/14043)*. [GitHub-12421](https://github.com/magento/magento2/issues/12421), [GitHub-12405](https://github.com/magento/magento2/issues/12405)

<!--- ENGCOM-850 -->

*  Magento now sends order sent email as expected. *Fix submitted by pawcioma in pull request  [14051](https://github.com/magento/magento2/pull/14051)*. [GitHub-13769](https://github.com/magento/magento2/issues/12421), [GitHub-12405](https://github.com/magento/magento2/issues/13769)

<!--- ENGCOM-805 -->

*  The output of the `setup:static-content:deploy` command has been  changed to a less alarming color.  *Fix submitted by Pieter Hoste in pull request [13975](https://github.com/magento/magento2/pull/13975)*.  [GitHub-12404](https://github.com/magento/magento2/issues/12404)

<!--- ENGCOM-1419 -->

*  XML sitemap generation can now be scheduled.  *Fix submitted by rostyslav-hymon in pull request [14908](https://github.com/magento/magento2/pull/14908)*.  [GitHub-5768](https://github.com/magento/magento2/issues/5768)

<!--- MAGETWO-87155-->

*  Issues with the database backup command have been resolved. [GitHub-1287](https://github.com/magento/magento2/issues/12877)

<!---MAGETWO-87449 -->

*  Magento now displays a more informative message you update a module and then switch to a different branch of source control that contains a lower version of that module. [GitHub-9981](https://github.com/magento/magento2/issues/9981)

<!---MAGETWO-87154 -->

*  Disabling the **State is Required for** field from **Stores** > **Settings** > **Configuration** > **General** > **General** > **State Options** now works as expected. [GitHub-12894](https://github.com/magento/magento2/issues/12894)

### AdminGS

<!-- MAGETWO-91337 -->

*  Admin global search preview now works as expected. Previously, this feature worked inconsistently, and search results  differed depending on which area was being searched  (for example, Products, Categories, or Customers).

<!--- MAGETWO-91565 -->

*  Restricted administrative users can now successfully create and save product attributes.

<!--- MAGETWO-91616 -->

*  Restricted administrative users can now create and edit CMS blocks as expected. Previously, Magento displayed this error message when an administrator with restricted privileges tried to create a new CMS block: `Warning: array_intersect(): Argument #1 is not an array in /var/www/html/magento2ee/app/code/Magento/AdminGws/Model/Models.php on line 1075`.

<!--- ENGCOM-1143 -->

*  The `Magento_Authorization` module is now installed after `Magento_Authorization` to satisfy `Magento_Authorization`'s dependency upon authorization tables. *Fix submitted by Anton Evers in pull request 56 (magento-partners/magento2ee)*.

### Analytics

<!---MAGETWO-87520-->

*  PHPDocs have been added as needed for methods throughout the code base. *Fix submitted by Aki Ojalehto in pull request [13337](https://github.com/magento/magento2/pull/13337)*.

<!--- MAGETWO-85059 -->

*  Users are now subscribed by default to the Advanced Reporting service.

### Backend

<!---ENGCOM-1831 -->

*  Customers can now successfully download and export PDFs after logging in. Previously, customers were redirected to the Admin when trying to download or export data to a PDF right after logging in.  *Fix submitted by Sanjay Patel in pull request [15766](https://github.com/magento/magento2/pull/15766)*.  [GitHub-15510](https://github.com/magento/magento2/issues/15510)

<!---ENGCOM-2158 -->

*  Admin tabs are now ordered as expected. Previously, when you used the `addTabAfter` method to add two or more tabs to the Admin (for example, to the order view page), the sort order of the tabs was incorrect.  *Fix submitted by Tiago Sampaio in pull request [16412](https://github.com/magento/magento2/pull/16412)*.  [GitHub-16174](https://github.com/magento/magento2/issues/16174)

<!---ENGCOM-2339 -->

*  The headers of the User Agent Rules table now align as expected with the content of the table's rows.  *Fix submitted by Justin in pull request [16792](https://github.com/magento/magento2/pull/16792)*.  [GitHub-16703](https://github.com/magento/magento2/issues/16703)

<!---ENGCOM-2919 -->

*  The **Enter** button on the customer grid now filters the table as expected. Previously, clicking **Enter**  did not filter contents but simply changed the display to the next page of the grid.  *Fix submitted by Ronak Patel in pull request  [17650](https://github.com/magento/magento2/pull/17650)*. [GitHub-17789](https://github.com/magento/magento2/issues/17789)

<!--- ENGCOM-870 -->

*  The **Report an Issue** link on Admin pages now opens in a new tab. *Fix submitted by Danilo Argentiero in pull request  [14016](https://github.com/magento/magento2/pull/14016)*. [GitHub-14010](https://github.com/magento/magento2/issues/14010)

### Banner (now Dynamic Block)

<!---MAGETWO-71816-->

*  The Magento CMS banner has been renamed to dynamic block to better represent this feature. Banners from **Content** > **Banners** have been renamed across the Admin and the code base. Correspondingly, the Magento widget banner rotator type (from **Content** > **Widget** > **Widget type**) has been renamed to dynamic blocks rotator.

<!---MAGETWO-42047-->

*  You can now create dynamic block (formerly banners) content from the WYSIWYG editor. You can create store-specific content for dynamic blocks  by switching between scopes using the Magento Scope Selector.

### Bundle

<!---MAGETWO-87524 -->

*  You can now successfully save updates to bundle products. [GitHub-6916](https://github.com/magento/magento2/issues/6916)

<!---MAGETWO-86659 -->

*  Unused `count()` methods have been removed from template files throughout the code base. *Fix submitted by Ihor Sviziev in pull request [13138](https://github.com/magento/magento2/pull/13138)*.

<!--- MAGETWO-90797 -->

*  You can now successfully delete an option from a bundle product.

<!---ENGCOM-1389 -->

*  Imported bundle products are now assigned stock status as expected. Previously, when you imported a new or replacement bundle product, Magento did not generate an entry  in `cataloginventory_stock_status`, and as a result,  Magento could not successfully display the product on the storefront. *Fix submitted by Adam Paterson in pull request  [14016](https://github.com/magento-engcom/import-export-improvements/pull/104)*. [GitHub-12330](https://github.com/magento/magento2/issues/12330)

<!---ENGCOM-1830 -->

*  Magento no longer includes expired special prices for bundle options when displaying product price ranges. *Fix submitted by Sanjay Patel in pull request [15768](https://github.com/magento/magento2/pull/15768)*.  [GitHub-15457](https://github.com/magento/magento2/issues/15457)

<!---MAGETWO-87058 -->

*  Reports now handle bundle and group products as expected. Previously, when a merchant viewed the Products in cart report, the report gives error if the cart contains a bundle or a grouped product. [GitHub-12079](https://github.com/magento/magento2/issues/12079)

### B2B

<!---MAGETWO-94031 -->

*  Magento now opens a new window for edit purposes when a merchant selects **Edit User in New Tab** from the Company Users page. Previously, when a merchant tried to edit Company users from the storefront by selecting **Edit User in New Tab**, Magento threw a JSON error.

<!---MAGETWO-93695 -->

*  Administrators with appropriate permissions can now change the status of a company to **Rejected**. Previously, Magento did not save the change in status, and threw an error.

<!-- MAGETWO-93784 -->

*  Guests can now view products as expected when shared catalogs are enabled. Previously, if a merchant added a product when shared catalogs were enabled, guest users could not view the product, even when shared catalogs were later disabled.

<!-- MAGETWO-93721 -->

*  Category pages now display as expected all products whose SKUs contain either single or double quotation marks. Previously, Magento threw an error when trying to set pricing and structure on a shared catalog when product SKUs contained these characters.

<!-- MAGETWO-93704 -->

*  You can now successfully search for products  when the **Shared Catalog** setting is enabled.

<!-- MAGETWO-92951 -->

*  Customers can now use the **Add Product By SKU** button to add configurable products to a sales order.

<!-- MAGETWO-92124 -->

*  Access to the Companies resource can now be explicitly set on the Roles Resources page in Admin. Previously, this resource was available only to top-level administrators with all resources selected.

<!--- MAGETWO-90133 -->

*  Magento now displays informative messages about both successful and failed actions when a company administrator adds or deletes entries in the  Company Users section. Previously, Magento displayed this error message: `Something went wrong`  in the response body, and did not display a message.

<!--- MAGETWO-91697 -->

*  Tier prices for already added products no longer change when a merchant adds additional products to an order from the Admin. Previously, the tier price of products in an order changed when the merchant added more products to the order, applied  a custom price to one of the products, or  applied a coupon code to the order.

<!--- MAGETWO-91648 -->

*  Merchants can now create a company for which the region or state is not required. Previously, Magento did not create this company, and displayed this error: `Invalid value of "" provided for the region_id field`.

<!--- MAGETWO-90288 -->

*  Magento now displays the orders that are associated with customer accounts on the Orders page.  Previously, in the Admin display of customer accounts that have orders associated with them, Magento did not display  orders on the  Orders tab but instead displayed a blank page.

<!--- MAGETWO-95924 -->

*  Merchants can now create new user roles that do not have  access to Quotes.

<!--- MAGETWO-94234 -->

*  Merchants can now successfully update product prices and currencies using **Stores** > **Settings** > **Configuration** > **General** > **Currency Setup**.

### CAPTCHA

<!-- MAGETWO-93718 -->

*  Customers can now successfully log in when guest checkout is disabled and CAPTCHA is enabled. Previously, Magento threw the `Provided form does not exist` error when a customer tried to log in under these conditions.

<!-- MAGETWO-92127 -->

*  CAPTCHA validation now works when the **Website Restrictions** setting is enabled.

### Cart and checkout

<!--- MAGETWO-87524 -->

*  Magento no longer displays an integrity constraint violation error after when a customer reorders a  product with custom options. [GitHub-12705](https://github.com/magento/magento2/issues/12705)

<!--- MAGETWO-87152 -->

*  You can now save emoji in custom product options. [GitHub-12058](https://github.com/magento/magento2/issues/12058)

<!--- MAGETWO-90132 -->

*  Magento no longer caches warning messages as often as a customer clicks the **Update Shopping Cart** button while the shopping cart page loads. Previously, Magento cached a warning message each time a customer clicked this button while the page loaded in Firefox or Chrome, and this action resulted in multiple warning messages appearing on the top of the shopping cart page.

<!--- MAGETWO-87126 -->

*  Magento now displays the expected state in the Multishipping New Address form when a customer enters information on the Ship to Multiple Addresses page. *Fix submitted by enriquei4 in pull request [13367](https://github.com/magento/magento2/pull/13367)*. [GitHub-8069](https://github.com/magento/magento2/issues/8069)

<!---MAGETWO-83562 -->

*  `update button.phtml` has been simplified to optimize translation. *Fix submitted by Karla Saaremäe in pull request 12155*.

<!--- MAGETWO-83196-->

*  You can now enter zip codes that contain no spaces for locations in the Netherlands. *Fix submitted by Oscar Recio in pull request [11961](https://github.com/magento/magento2/pull/11961)*. [GitHub-11898](https://github.com/magento/magento2/issues/11898)

<!--- MAGETWO-81823-->

*  The text that appears above the billing address field on the checkout page has been edited to remove redundancy. *Fix submitted by Vova Yatsyuk in pull request [11399](https://github.com/magento/magento2/pull/11399)*

<!--- MAGETWO-81175-->

*  The One Touch Ordering feature allows users to place orders without going through full checkout. *Fix submitted by Daniel Korzeniowski*.

<!--- MAGETWO-71761-->

*  You can now delete the last product in your shopping cart even when the **Minimum Order Amount** setting (**Stores** > **Settings** > **Configuration** > **Sales** > **Sales**) is enabled. Previously, if you tried to delete the last item in your cart under these circumstances, Magento would throw an exception. *Fix submitted by Anton Evers in pull request [10601](https://github.com/magento/magento2/pull/10601)* [GitHub-6151](https://github.com/magento/magento2/issues/6151)

<!--- MAGETWO-86894-->

*  The checkout agreements `getList` method was refactored to include a new listing interface that supports the ability to set search criteria. *Fix submitted by Stanislav Idolov in pull request [13221](https://github.com/magento/magento2/pull/13221)*.

<!--- MAGETWO-86787-->

*  The shopping cart totals description on the checkout page now displays  discount labels as expected. *Fix submitted by Ihor Sviziev in pull request [13223](https://github.com/magento/magento2/pull/13223)*.

<!--- MAGETWO-85890-->

*  The checkout controller's JSON usage has been updated to use `$this->resultFactory->create(ResultFactory::TYPE_JSON);` instead of the object manager.

<!-- MAGETWO-92137 -->

*  Refreshing the checkout page no longer deletes the shipping address when a guest checks out. Previously, when the persistent shopping cart was enabled, refreshing the check out  page affected information entered into form fields for a guest checkout.

<!-- MAGETWO-91771 -->

*  Cart price rule condition values now handle commas as expected.

<!--- MAGETWO-90296 -->

*  When a customer is on the payment page and tries to reorder or retrace her steps backward through the checkout process, Magento now displays all the relevant shipping methods. Previously, Magento displayed only one shipping method under these circumstances.

<!--- MAGETWO-90294 -->

*  You can now successfully change currency for an order before you complete the order. Previously, if you changed currency, when you  proceeded to checkout by choosing a Bank Transfer Payment as Payment Method, Magento displayed this message:  **Your credit card will be charged for**. *Fix submitted by Roman K. in pull request [993](https://github.com/magento/magento2/pull/993)*. [GitHub-12526](https://github.com/magento/magento2/issues/12526)

<!--- MAGETWO-90292 -->

*  Magento no longer combines the Custom Checkout and Shipping steps when Magento loads the checkout page. *Fix submitted by Roman K. in pull request [975](https://github.com/magento/magento2/pull/975)*.

<!--- MAGETWO-60846 -->

*  Magento now alerts customers when a previously applied gift card has been removed during checkout.

<!--- MAGETWO-91734 -->

*  Guest orders placed with gift cards can now be canceled as expected.

<!--- MAGETWO-91624 -->

*  Braintree now permits customers to change the billing address on orders when paying with a saved card. Previously, Braintree used the same address for both billing and shipping.

<!--- MAGETWO-91465 -->

*  Customers can now change an existing  value in the checkout page’s  **State/Province** field to an alphanumeric value. Previously, when a customer tried to edit this field in this way, Magento did not place the order, and displayed a descriptive error message.

<!--- MAGETWO-90971 -->

*  Magento now successfully processes an order that contains products that will be shipped to multiple shipping addresses. Previously, Magento did not complete the order, but displayed an error message.

<!--- MAGETWO-62891 -->

*  Magento now saves the address that a customer enters during checkout if the customer selects **Save in address book**.  Previously, Magento saved the address, but left the default billing address field empty.

<!--- ENGCOM-1347 -->

*  Excess requests on the checkout page have been removed. Previously, `customer/section/load` was called four times when Magento loaded the cart for the first time. *Fix submitted by Andrey Bezyazychnyy in pull request [14782](https://github.com/magento/magento2/pull/14782)*.  [GitHub-15457](https://github.com/magento/magento2/issues/15457)

<!--- ENGCOM-1716 -->

*  The alignment of the **Purchased Order Form** button on the Review & Payments page has been corrected. *Fix submitted by Oscar Recio in pull request [15577](https://github.com/magento/magento2/pull/15577)*.  [GitHub-15334](https://github.com/magento/magento2/issues/15334)

<!--- ENGCOM-1039 -->

*  `$.browser` has been deprecated and removed from the code base. *Fix submitted by Jonathan Kingston in pull request [14270](https://github.com/magento/magento2/pull/14270)*.  [GitHub-14267](https://github.com/magento/magento2/issues/14267)

<!--- ENGCOM-978 -->

*  The minicart now updates as expected when a customer adds a configurable product to the cart while accessing the storefront on a device running Internet Explorer 11.x. *Fix submitted by Mastiuhin Oleksandr in pull request [14192](https://github.com/magento/magento2/pull/14192)*.  [GitHub-13820](https://github.com/magento/magento2/issues/13820)

<!--- ENGCOM-2959 -->

*  Magento no longer unchecks the **My billing and shipping address are the same** checkbox when a customer uses an offline custom payment method for an order. Previously, when a customer used an offline custom payment method for an order, Magento unchecked this  checkbox on payment step if the shipping address was updated.  *Fix submitted by Jignesh Baldha in pull request [17628](https://github.com/magento/magento2/pull/17628)*. [GitHub-14819](https://github.com/magento/magento2/issues/14819)

<!--- ENGCOM-2833 -->

*  Magento no longer displays an undefined string on the Order Summary page.  *Fix submitted by Vishal Gelani in pull request [17697](https://github.com/magento/magento2/pull/17697)*. [GitHub-17492](https://github.com/magento/magento2/issues/17492)

<!--- ENGCOM-2017 -->

*  Unnecessary blank lines have been removed from `app/code/Magento/Catalog/etc/adminhtml/menu.xml`. *Fix submitted by Namrata in pull request [16180](https://github.com/magento/magento2/pull/16180)*.

<!--- ENGCOM-2181 -->

*  Placeholders for the password field  no longer suggest that a password is optional. Previously, the placeholder for the password field in the checkout page suggested that the password was optional, but after validation, Magento indicated that the password field  was mandatory.  *Fix submitted by hitesh-wagento in pull request [16521](https://github.com/magento/magento2/pull/16521)*. [GitHub-16378](https://github.com/magento/magento2/issues/16378)

<!--- ENGCOM-861 -->

*  The minicart now correctly displays product titles that contain special characters. *Fix submitted by afirlejczyk in pull request [13802](https://github.com/magento/magento2/pull/13802)*.  [GitHub-13652](https://github.com/magento/magento2/issues/13652)

<!--- ENGCOM-2027 -->

*  A shipment step has been added to `OnePageCheckoutOfflinePaymentMethodsTest`. *Fix submitted by Malyovanets Nickolas in pull request [16164](https://github.com/magento/magento2/pull/16164)*.  [GitHub-1164](https://github.com/magento/magento2/issues/1164)

<!-- MAGETWO-87057 -->

*  Newly registered customers can now successfully complete an order after entering a new address. Previously, Magento displayed this message on the checkout page, `An error occurred on the server. Please try to place the order again.` [GitHub-10583](https://github.com/magento/magento2/issues/10583)

<!-- MAGETWO-87442 -->

*  Merchants can now successfully add products to the shopping cart using REST. Previously, the shopping cart displayed a total price of zero (0) for products creating from the Admin using REST. [GitHub-2991](https://github.com/magento/magento2/issues/2991)

<!-- MAGETWO-87449 -->

*  Customers can now successfully sign in after first clicking the **Checkout** button. [GitHub-10834](https://github.com/magento/magento2/issues/10834)

<!-- MAGETWO-93963 -->

*  Magento now successfully processes an order even when the customer quickly double-clicks on the minicart’s **Proceed to checkout** button. Previously, if a customer double-clicked this button while the page was loading, Magento emptied the shopping cart.

<!--- ENGCOM-1474 -->

*  Magento now displays a pre-filled edit form for checkout agreements when single-store mode is enabled.  *Fix submitted by gwharton in pull request [15063](https://github.com/magento/magento2/pull/15063)*.  [GitHub-7822](https://github.com/magento/magento2/issues/7822)

#### Cart Price rules

<!--- MAGETWO-94407 -->

*  The cart price rule now uses specified conditions correctly when applying discounts on configurable products.

<!-- MAGETWO-87064 -->

*  Magento no longer throws an error when a customer applies a discount code on the checkout page. [GitHub-9763](https://github.com/magento/magento2/issues/9763)

### Catalog

<!--- MAGETWO-87979 -->

*  The `getUrl` method  in `Magento\Catalog\Model\Product\Attribute\Frontend\Image` no longer returns an image URL with double slashes.  *Fix submitted by Malyovanets Nickolas in pull request [13635](https://github.com/magento/magento2/pull/13635)*. [GitHub-13497](https://github.com/magento/magento2/issues/13497)

<!--- ENGCOM-2773 -->

*  An incorrect return type in the `StockRegistryInterface` API has been corrected. *Fix submitted by Burlacu Vasilii in pull request [17562](https://github.com/magento/magento2/pull/17562)*. [GitHub-15085](https://github.com/magento/magento2/issues/15085)

<!--- MAGETWO-87153 -->

*  Magento no longer throws an error when you try to create a new URN catalog for a project when a blank one already exists in PHP storm. [GitHub-5188](https://github.com/magento/magento2/issues/5188)

<!--- MAGETWO-87313 -->

*  You can now save a product after updating multiple select attributes through mass action. [GitHub-11329](https://github.com/magento/magento2/issues/11329)

<!--- MAGETWO-87562 -->

*  Magento now currently handles apostrophes in attribute option values created from the Admin. [GitHub-12127](https://github.com/magento/magento2/issues/12127)

<!-- MAGETWO-87151 -->

*  The Save & Duplicate option in the catalog manager now works as expected. [GitHub-11532](https://github.com/magento/magento2/issues/11532)

<!--- ENGCOM-1226 -->

*  Magento now displays the default validation message for `validate-item-quantity` as expected. *Fix submitted by Mastiuhin Oleksandr in pull request [14508](https://github.com/magento/magento2/pull/14508)*.  [GitHub-13582](https://github.com/magento/magento2/issues/13582)

<!--- ENGCOM-1103 -->

*  The `Magento\Catalog\Model\ResourceModel\Category\Collection::joinUrlRewrite` method now uses the `storeId` value  set on the actual collection of the store rather than the `storeId` retrieved from the store manager. *Fix submitted by rostyslav-hymon in pull request [14381](https://github.com/magento/magento2/pull/14381)*. [GitHub-13704](https://github.com/magento/magento2/issues/13704)

<!--- MAGETWO-71832 -->

*  Magento no longer displays unused product attributes  with a value of N/A or NO on the storefront.

<!--- ENGCOM-1174-->

*  Editing an order with backordered items from the Admin now results in a new order with backordered items  correctly marked. *Fix submitted by Mastiuhin Oleksandr in pull request [14444](https://github.com/magento/magento2/pull/14444)*.  [GitHub-10057](https://github.com/magento/magento2/issues/10057)

<!--- ENGCOM-1188-->

*  Magento no longer overrides prices with more than two digits after the decimal (for example, 9.4880) by rounding the last two digits. *Fix submitted by Mastiuhin Oleksandr in pull request [14461](https://github.com/magento/magento2/pull/14461)*.  [GitHub-14249](https://github.com/magento/magento2/issues/14249)

<!--- ENGCOM-2345 -->

*  Magento now throws an exception as expected  when a user tries to submit a product review without selecting a star rating. Previously, if a user submitted a product review without selecting a star rating, Magento assigned a one-star rating.  *Fix submitted by Karla Saaremäe in pull request [16808](https://github.com/magento/magento2/pull/16808)*. [GitHub-16764](https://github.com/magento/magento2/issues/16764)

<!--- ENGCOM-1295-->

*  Merchants can now successfully change the default label of the **country of manufacture** attribute for an existing product from the Admin.  *Fix submitted by rostyslav-hymon in pull request [14714](https://github.com/magento/magento2/pull/14714)*.  [GitHub-6879](https://github.com/magento/magento2/issues/6879)

<!--- ENGCOM-963-->

*  You can now sort products by quantity from the category page. *Fix submitted by Dmytro Paidych in pull request [14179](https://github.com/magento/magento2/pull/14179)*.  [GitHub-13556](https://github.com/magento/magento2/issues/13556)

<!--- ENGCOM-1653-->

*  Magento no longer creates pagination automatically when a product has more than 20 tier prices in the Advanced Pricing area. *Fix submitted by saravananvelu in pull request [15360](https://github.com/magento/magento2/pull/15360)*.  [GitHub-15210](https://github.com/magento/magento2/issues/15210)

<!--- MAGETWO-93949-->

*  Magento now alerts you to an error when a merchant tries to save a product without completing required fields.

<!--- MAGETWO-75329-->

*  You can now sort products by the store configuration default field  even when this value differs from category default sort by setting. [GitHub-10772](https://github.com/magento/magento2/issues/10772)

<!--- MAGETWO-81966-->

*  Magento now displays product alerts in the Admin product edit page when a customer is subscribed to a product's stock or price. [GitHub-10007](https://github.com/magento/magento2/issues/10007)

<!--- ENGCOM-2869-->

*  The `data-container` class name is now based on view mode.  *Fix submitted by Malyovanets Nickolas in pull request [17751](https://github.com/magento/magento2/pull/17751)*. [GitHub-15319](https://github.com/magento/magento2/issues/15319)

<!--- ENGCOM-2852-->

*  Parent theme image height settings (specified in `view.xml`) no longer override the height settings assigned to individual images.  *Fix submitted by Malyovanets Nickolas in pull request [17725](https://github.com/magento/magento2/pull/17725)*. [GitHub-15319](https://github.com/magento/magento2/issues/12250)

<!--- ENGCOM-2793-->

*  You can now save a title for a product from the **Product** > **Customizable Options** page.  *Fix submitted by Jignesh Baldha in pull request [17607](https://github.com/magento/magento2/pull/17607)*. [GitHub-6305](https://github.com/magento/magento2/issues/6305)

<!--- ENGCOM-2792-->

*  You can now add a custom fieldset  to the Admin category editor without changing the position of  the General section (that is, the section that contains the **Enable category**, **Include in Menu**, and **Category Name** fields). Previously, Magento moved the General section to the last position of the form.  *Fix submitted by Jignesh Baldha in pull request [17604](https://github.com/magento/magento2/pull/17604)*. [GitHub-15041](https://github.com/magento/magento2/issues/15041)

<!--- ENGCOM-2751-->

*  Magento now maintains product image roles as expected after upgrade. Previously, image roles randomly disappeared from product pages after upgrade.  *Fix submitted by Eduard Chitoraga in pull request [17554](https://github.com/magento/magento2/pull/17554)*. [GitHub-10687](https://github.com/magento/magento2/issues/10687)

<!--- ENGCOM-2302-->

*  REST search queries in which the `condition_type` is set to `in` or `nin` now return results for all specified values. *Fix submitted by Eduard Chitoraga in pull request  [16742](https://github.com/magento/magento2/pull/16742)*. [GitHub-14035](https://github.com/magento/magento2/issues/14035)

<!--- ENGCOM-2373-->

*  A type error in the payment void method of the Authorizenet module has been fixed.  *Fix submitted by JeroenVanLeusden in pull request [16838](https://github.com/magento/magento2/pull/16838)*. [GitHub-5067](https://github.com/magento/magento2/issues/5067)

<!--- ENGCOM-2185-->

*  You can now add a product with a price of zero (0) to a wishlist.  *Fix submitted by Vishal Gelani in pull request [16537](https://github.com/magento/magento2/pull/16537)*. [GitHub-16479](https://github.com/magento/magento2/issues/16479)

<!--- ENGCOM-2116-->

*  Magento now maintains the default products sort order of “newest first” when you upgrade your Magento deployment. Previously, after upgrade, the default products order in categories changed from “newest first” to “oldest first”. [GitHub-15627](https://github.com/magento/magento2/issues/15627)

<!--- ENGCOM-2612-->

*  An error with the template notation for `Magento_CatalogWidget` module has been fixed. *Fix submitted by Vishal Gelani in pull request [16856](https://github.com/magento/magento2/pull/16856)*. [GitHub-16529](https://github.com/magento/magento2/issues/16529)

<!--- MAGETWO-85695-->

*  Magento no longer throws an error when you re-save a product attribute with a new name. *Fix submitted by Raul Mateos in pull request  [11619](https://github.com/magento/magento2/pull/11619)*. [GitHub-6770](https://github.com/magento/magento2/issues/6770)

<!--- MAGETWO-67509-->

*  The grouped product page now  shows the lowest price for a simple product. *Fix submitted by evgk in pull request  [9266](https://github.com/magento/magento2/pull/9266)*. [GitHub-9265](https://github.com/magento/magento2/issues/9265)

<!--- MAGETWO-85016-->

*  You can now add a new product with custom attributes that has the same name and attributes as a previously deleted product. Previously, Magento did not let you add this new product because a `request_path` with the same value already existed in `table url_rewrite` from the previous product. *Fix submitted by Nickolas Malyovanets in pull request [12538](https://github.com/magento/magento2/pull/12538)*. [GitHub-12110](https://github.com/magento/magento2/issues/12110)

<!---MAGETWO-83065 -->

*  Magento now saves the assigned background color for images correctly. Previously, if you updated the background color of a product image, the background color was always black. *Fix submitted by Raul Mateos in pull request [11888](https://github.com/magento/magento2/pull/11888)*. [GitHub-8799](https://github.com/magento/magento2/issues/8799)

<!--- MAGETWO-83038-->

*  You can now assign and save a custom option assigned a price of 0. *Fix submitted by Raul Mateos in pull request [11842](https://github.com/magento/magento2/pull/11842)*.[GitHub-4808](https://github.com/magento/magento2/issues/4808)

<!--- 82202-->

*  The ProductRepository SKU cache is no longer corrupted when the value assigned to `cacheLimit` is reached. *Fix submitted by Thomas in pull request 11537*.

<!--- MAGETWO-80828-->

*  The price filter on a product category page now works as expected. Previously, if you applied this filter to a category listing, Magento displayed redundant product listings and unrelated products.  *Fix submitted by Mayank Zalavadia in pull request 11206*. [GitHub-11139](https://github.com/magento/magento2/issues/11139)

<!--- MAGETWO-87614-->

*  You can now successfully create a product from API Product Management in deployments where the Update by Schedule indexer mode is set.

<!--- MAGETWO-72620-->

*  Configurable products are no longer displayed on a category page when all children are disabled by mass action and the **display out-of-stock products** setting is off.

<!--- MAGETWO-85618-->

*  Magento no longer displays a 404 error when you change category permissions from Product Detail pages when multistore view is enabled.

<!---MAGETWO-85617 -->

*  Magento no longer throws an exception when you add a product with a tiered price reduced to $0.00 to your shopping cart.

<!---MAGETWO-90804 -->

*  The **Hide from Product Page** option now works for the child product of a configurable product.

<!---MAGETWO-87359 -->

*  Translation functionality has been added  to customer attribute labels in the Admin, making it possible to translate a label as appropriate for the locale of an Admin  user. *Fix submitted by Christian Münch in pull request [13251](https://github.com/magento/magento2/pull/13251)*.

<!---MAGETWO-87358 -->

*  Magento now displays the Catalog Products List widget  on the storefront. *Fix submitted by Rostislav Sabischenko in pull request [12765](https://github.com/magento/magento2/pull/12765)*.

<!---MAGETWO-85519 -->

*  Magento now respects the maximum depth setting for category navigation. *Fix submitted by Arnoud Beekman in pull request [12640](https://github.com/magento/magento2/pull/12640)*.

<!---MAGETWO-84933 -->

*  Category page X-Magento-Tags headers no longer contain product cache identities  when category display mode is set to **Static block only** when Varnish is selected as the cache engine.

<!---MAGETWO-93306 -->

*  You can now specify a negative value for a product in the orders **Quantity** field when editing the order from the Admin.

<!-- MAGETWO-93188 -->

*  You can now create a product date attribute that contains a day value than exceeds 12 (in the format dd/mm/yyyy). Previously, when you created a product attribute with a default date specifying a day greater than 12, Magento did not save the attribute, but instead displayed this error, `Invalid default date`.

<!--- MAGETWO-90293 -->

*  Sort by Price now works as expected on the catalog search page. *Fix submitted by Roman K. in pull request [929](https://github.com/magento/magento2/pull/929)*.  [GitHub-12468](https://github.com/magento/magento2/issues/12468)

<!--- MAGETWO-87564 -->

*  Magento now correctly sets a `product_links` position attribute even when the attribute value is not set in a GET request. Previously, only the first two of each link type was shown in the backend or in a GET request response, even though Magento correctly added the product links to the database. *Fix submitted by Mohammad Haj-Salem in pull request [12650](https://github.com/magento/magento2/pull/12650)*.

<!-- MAGETWO-60823 -->

*  You can now unset a category image on the store-view level when the image is defined on all store views.

<!-- MAGETWO-94060 -->

*  Usage of EAV indexer tables in the CatalogWidget module has been removed.

<!--- MAGETWO-91575 -->

*  Magento now correctly renders print previews of product compare pages. Previously, the print view did not display text from the right side of the product compare page.

<!--- MAGETWO-91848 -->

*  The validation hint on the product custom option page  text field now updates as expected with the number of characters left before hitting the maximum.

<!--- MAGETWO-91837 -->

*  The `PUT /V1/products/:sku/media/:entryId` call updates a product's media gallery as expected.

<!--- MAGETWO-91743 -->

*  Products no longer disappear from the Admin Product grid  after you delete its active schedule update.

<!--- MAGETWO-91689 -->

*  Single quotation marks in attribute values are no longer  auto-converted to HTML when saved.

<!--- MAGETWO-91608 -->

*  The SEO-friendly URL for category pages now works as expected.

<!--- MAGETWO-45950 -->

*  We've optimized queries on loading product attributes when store scope is used.

<!--- MAGETWO-91497 -->

*  Products are no longer automatically assigned to websites based on store scope. If a product is assigned to one website only, that relationship is maintained even after the product is saved from the Admin.

<!--- MAGETWO-91595 -->

*  Product Display Pages (PDPs) now load as expected when a product name contains a double quotation mark. Previously, Magento did not load the image if its name contained double quotation marks.

<!--- MAGETWO-91529 -->

*  A restricted administrative user who is authorized to access only designated websites can no longer remove products from undesignated websites.

<!--- MAGETWO-91504 -->

*  Customers viewing a storefront on a mobile device  can now see the text displayed when clicking on the "More Information" accordion anchor without having to scroll back up. Previously, the Mobile PDP accordion widget did not work as expected on mobile devices.

<!--- MAGETWO-91473 -->

*  Magento now maintains designated sort order for products after saving a product in a category. Previously, product sort order reverted to sorting by product ID.

<!--- MAGETWO-91450 -->

*  You can now filter successfully by date from the Admin on products in multistore environments. Previously, values in the product creation date field (that is, the date set when **Set Product as New from Date** is selected)  were arbitrarily changed, and filtering did not work.

<!--- MAGETWO-91440 -->

*  Attributes with no assigned values on a product are no longer displayed with a  value of N/A in the Compare Products page or block as expected.

<!--- MAGETWO-91439 -->

*  Prices are now visible as expected on the category page for a configurable product when you re-enable them from the Admin. Previously, when you re-enabled a previously disabled product and assigned it to a different store, Magento did not display its price on the category or product page.

<!--- MAGETWO-91435 -->

*  Category smart rules now work as expected for partial values when conditions include using a dropdown attribute and "contains”.

<!--- MAGETWO-91434 -->

*  Magento now correctly sets the default option for the `status` attribute when a merchant creates a product. Previously, Magento changed a default setting of disabled (**No**) to **Yes** during product creation.

<!--- MAGETWO-69949 -->

*  `auto_increment` values are now preserved after restarting the MySQL server.

<!--- MAGETWO-91436 -->

*  You can now successfully save a product with custom options to a different website in multisite deployments. Previously, when you added another site to a product with customizable options, Magento corrupted these options by splitting into multiple options or duplicating an option.

<!--- MAGETWO-62310 -->

*  A product’s **Use Default Value** check box for attributes is now unchecked by default when you add a new website to a product’s scope.

<!--- MAGETWO-90332 -->

*  The subcategory URL path is now updated for a store view according to the URL path of its parent category.

<!--- ENGCOM-956 -->

*  Magento now displays drop-down attribute values in the catalog product grid after applying filtering  on drop-down/select attributes. *Fix submitted by Dmytro Paidych in pull request [14174](https://github.com/magento/magento2/pull/14174)*. [GitHub-13006](https://github.com/magento/magento2/issues/13006)

<!--- ENGCOM-1030 -->

*  The JavaScript address converter no longer mutates the function's `address.street` argument. (The argument remains an array as expected.) *Fix submitted by Mastiuhin Oleksandr in pull request [14250](https://github.com/magento/magento2/pull/14250)*.

<!--- MAGETWO-94068 -->

*  You can now see category changes on the storefront as expected after the changes have been saved. Previously, Magento did not display changes to product categories on the storefront until reindexing occurred even if **update on schedule** was set and the cache had been cleaned.

<!--- MAGETWO-94056 -->

*  Product attribute are now displayed as expected in layered navigation with Elasticsearch 5.0+.

<!--- ENGCOM-2874-->

*  Product pages now show the product name as the browser title and include meta title tag in the HTML source.  (The title and meta title tags can now be used independently.)  *Fix submitted by Malyovanets Nickolas in pull request [17771](https://github.com/magento/magento2/pull/17771)*.  [GitHub-15501](https://github.com/magento/magento2/issues/15501)

### Catalog Rule

<!---MAGETWO-90784 -->

*  Catalog rules are now applied as expected when products are sorted by price.

### Cleanup and simple code refactoring

<!--- MAGETWO-87442 -->

*  Zoom is no longer abnormally active when a mouse hovers over the category dropdown menu on the product page. [GitHub-5129](https://github.com/magento/magento2/issues/5129)

<!--- MAGETWO-87523 -->

*  `getAttributeText($attributeCode)`  now returns the correct return type. [GitHub-11691](https://github.com/magento/magento2/issues/11691)

<!--- MAGETWO-87176 -->

*  All references to Magento Connect has been removed from the Find Partners & Extensions links. [GitHub-12632](https://github.com/magento/magento2/issues/12632)

<!--- MAGETWO-87176 -->

*  Method name `getDispretionPath` has been corrected to `getDispersionPath` in  `\lib\internal\Magento\Framework\File\Uploader.php`. [GitHub-12506](https://github.com/magento/magento2/issues/12506)

<!---MAGETWO-88019 -->

*  Unused temporary variable `$data` has been removed from the `app/code/Magento/Catalog/Controller/Adminhtml/Category/Save.php` method. *Fix submitted by Malyovanets Nickolas in pull request [13733](https://github.com/magento/magento2/pull/13733)*.

<!---MAGETWO-88255 -->

*  addres has been corrected to address in `app/code/Magento/Customer/etc/events.xml`. *Fix submitted by Malyovanets Nickolas in pull request [13794](https://github.com/magento/magento2/pull/13794)*.

<!---MAGETWO-87896 -->

*  Code formatting in `app/code/Magento/Swagger/view/frontend/templates/swagger-ui/index.phtml` has been updated. *Fix submitted by p-bystritsky in pull request [13616](https://github.com/magento/magento2/pull/13616)*.

<!---MAGETWO-87895 -->

*  The edit cart product input validators have been changed from hardcoded to dynamic in `app/code/Magento/Checkout/view/frontend/templates/cart/item/configure/updatecart.phtml`.  *Fix submitted by p-bystritsky in pull request [13615](https://github.com/magento/magento2/pull/13615)*.

<!---MAGETWO-87162 -->

*  Typos have been corrected throughout the code base. *Fix submitted by Aki Ojalehto in pull request [13300](https://github.com/magento/magento2/pull/13300)*.

<!---MAGETWO-87254 -->

*  Redundant code has been removed for clarity in `app/code/Magento/AdminNotification/Model/Feed.php`. *Fix submitted by Aki Ojalehto in pull request [13303](https://github.com/magento/magento2/pull/13303)*.

<!---MAGETWO-87035 -->

*  Misspellings in method names have been fixed, and deprecated methods removed in several adminhtml files. *Fix submitted by Aki Ojalehto in pull request [13304](https://github.com/magento/magento2/pull/13304)*.

<!---MAGETWO-87034 -->

*  A typo in the database column comment of `app/code/Magento/Catalog/Setup/InstallSchema.php` has been fixed. *Fix submitted by Aki Ojalehto in pull request [13318](https://github.com/magento/magento2/pull/13318)*.

<!---MAGETWO-86984 -->

*  Typos throughout the code base have been corrected. *Fix submitted by Aki Ojalehto in pull request [13283](https://github.com/magento/magento2/pull/13283)*.

<!---MAGETWO-86899 -->

*  A misspelled method name in `\Magento\BundleImportExport\Model\Import\Product\Type\Bundle` has been corrected. *Fix submitted by Aki Ojalehto in pull request [13187](https://github.com/magento/magento2/pull/13187)*.

<!---MAGETWO-86798 -->

*  A misspelled parameter name in `\Magento\Weee\Test\Unit\Model\TaxTest::testGetWeeeAmountExclTax` has been corrected. *Fix submitted by Aki Ojalehto in pull request [13189](https://github.com/magento/magento2/pull/13189)*.

<!---MAGETWO-86585 -->

*  Catelog has been corrected to catalog throughout the code base. *Fix submitted by Danny Verkade in pull request [13097](https://github.com/magento/magento2/pull/13097)*.

<!---MAGETWO-86402 -->

*  Consturctor has been corrected to constructor in the `app/code/Magento/Ui/view/base/web/js/lib/core/class.js` JavaScript class. *Fix submitted by Danny Verkade in pull request [12976](https://github.com/magento/magento2/pull/12976)*.

<!---ENGCOM-1254 -->

*  The syntax of `expectException()` calls has been improved. *Fix submitted by Mastiuhin Oleksandr in pull request [14621](https://github.com/magento/magento2/pull/14621)*. [GitHub-11059](https://github.com/magento/magento2/issues/11059)

<!---ENGCOM-1698 -->

*  JavaScript in the Tav module has been refactored to meet Magento code standards. *Fix submitted by Vishal Gelani in pull request [15560](https://github.com/magento/magento2/pull/15560)*. [GitHub-15352](https://github.com/magento/magento2/issues/15352)

<!---ENGCOM-1155 -->

*  Magento no longer unexpectedly empties a customer's shopping cart during checkout when concurrent requests occur. *Fix submitted by adrian-martinez-interactiv4 in pull request [14429](https://github.com/magento/magento2/pull/14429)*. [GitHub-4301](https://github.com/magento/magento2/issues/4301)

<!---MAGETWO-86330 -->

*  `@codingStandardsIgnoreFile` has been removed from the `TypeLocatorTest` file header.  *Fix submitted by Danny Verkade in pull request [12977](https://github.com/magento/magento2/pull/12977)*.

<!---MAGETWO-86275 -->

*  Redundant spaces have been removed from the "configure your" phrase throughout the code base. *Fix submitted by Danny Verkade in pull request [12961](https://github.com/magento/magento2/pull/12961)*.

<!---MAGETWO-86036 -->

*  An unused `if` statement has been removed from `app/code/Magento/Sales/Controller/Adminhtml/Order/Invoice/Save.php`. *Fix submitted by JeroenVanLeusden in pull request [12888](https://github.com/magento/magento2/pull/12888)*.

<!---ENGCOM-1814 -->

*  Magento no longer displays duplicate element IDs for gift messages in the checkout page. *Fix submitted by Julien Anquetil in pull request [15705](https://github.com/magento/magento2/pull/15705)*. [GitHub-13415](https://github.com/magento/magento2/issues/13415)

<!---ENGCOM-1824 -->

*  Magento now correctly aligns submenus. *Fix submitted by hitesh-wagento in pull request [15764](https://github.com/magento/magento2/pull/15764)*. [GitHub-7897](https://github.com/magento/magento2/issues/7897)

<!---ENGCOM-1823 -->

*  The `app/code/Magento/CurrencySymbol/view/adminhtml/templates/grid.phtml` file has been refactored to remove redundant function calls. *Fix submitted by Vishal Gelani in pull request [15763](https://github.com/magento/magento2/pull/15763)*. [GitHub-15355](https://github.com/magento/magento2/issues/15355)

<!---ENGCOM-1900 2082-->

*  Client-side email validation now works in Internet Explorer 11.x the same way as it does in Chrome. Previously, a leading or trailing space on the following pages resulted in  client-side validation failure in Magento stores deployed on Internet Explorer 11.x.  *Fix submitted by Piyush Dankhara in pull request [15884](https://github.com/magento/magento2/pull/15884)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!---ENGCOM-1893 -->

*  Magento now correctly aligns page elements on  the home page and category page of the Hot Seller section.  *Fix submitted by Chirag Matholiya in pull request [15896](https://github.com/magento/magento2/pull/15896)*.  [GitHub-15213](https://github.com/magento/magento2/issues/15213)

<!---ENGCOM-1986 -->

*  Extraneous margins on the product list  and product entries have been removed. *Fix submitted by Chirag Matholiya in pull request [15975](https://github.com/magento/magento2/pull/15975)*. [GitHub-15308](https://github.com/magento/magento2/issues/15308)

<!---ENGCOM-2005 -->

*  `inline-block` issues with space and font-size in the Name form have been resolved. *Fix submitted by Daniel Ruf in pull request [16097](https://github.com/magento/magento2/pull/16097)*. [GitHub-16047](https://github.com/magento/magento2/issues/16047)

<!---ENGCOM-2147 -->

*  The Shipping and Estimate Tax page now correctly displays country, city, and postal code fields. *Fix submitted by [Alexander Kras'ko](https://github.com/0m3r) in pull request [16429](https://github.com/magento/magento2/pull/16429)*. [GitHub-8222](https://github.com/magento/magento2/issues/8222)

<!---ENGCOM-2462 -->

*  Unneeded JavaScript was removed from `logout.phtml` and replaced with a new JavaScript component.  *Fix submitted by Ihor Sviziev in pull request [16993](https://github.com/magento/magento2/pull/16993)*.  [GitHub-13692](https://github.com/magento/magento2/issues/13692)

<!---ENGCOM-2593 -->

*  Template syntax errors in `app/code/Magento/Theme/Block/Html/Breadcrumbs.php` have been corrected. *Fix submitted by Vishal Gelani in pull request [16805](https://github.com/magento/magento2/pull/16805)*. [GitHub-15345](https://github.com/magento/magento2/issues/15345)

<!---ENGCOM-2692 -->

*  Magento now disables the **Shop By** button on the search page when a customer sets additional search filters. *Fix submitted by Pratik Oza in pull request [17418](https://github.com/magento/magento2/pull/17418)*. [GitHub-13445](https://github.com/magento/magento2/issues/13445)

<!---ENGCOM-2731 -->

*  Product image zoom now works as expected in stores running on Safari. *Fix submitted by Pratik Oza in pull request [17418](https://github.com/magento/magento2/pull/17418)*. [GitHub-13445](https://github.com/magento/magento2/issues/13445)

<!---ENGCOM-2786 -->

*  The `$keepRation` parameter in the `Magento\Cms\Model\Wysiwyg\Images\Storage` class has been renamed to `$keepRatio`. *Fix submitted by Eduard Chitoraga in pull request [17596](https://github.com/magento/magento2/pull/17596)*. [GitHub-17587](https://github.com/magento/magento2/issues/17587)

<!---ENGCOM-2816 -->

*  A typo in `gallery.php` has been fixed. *Fix submitted by Daniël van der Linden in pull request [17659](https://github.com/magento/magento2/pull/17659)*.

<!---ENGCOM-2859 -->

*  The delete operation `entity_manager_delete_before`  transaction event  is no longer dispatched twice unnecessarily. *Fix submitted by p-bystritsky in pull request [17720](https://github.com/magento/magento2/pull/17720)*. [GitHub-17715](https://github.com/magento/magento2/issues/17715)

<!---ENGCOM-2231 -->

*  Unnecessary space has been trimmed from the email address field in the forgot password, check out, log in,  and email to a friend forms. *Fix submitted by Vishal Gelani in pull request [16640](https://github.com/magento/magento2/pull/16640)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!---ENGCOM-1807 -->

*  The JavaScript code in the `spli.phtml` template file for the button widget has been refactored. *Fix submitted by Vijay Golani in pull request [15731](https://github.com/magento/magento2/pull/15731)*. [GitHub-15354](https://github.com/magento/magento2/issues/15354)

<!---ENGCOM-1817 -->

*  The JavaScript code for the UrlRewrite module edit page has been refactored. *Fix submitted by Vijay Golani in pull request [15747](https://github.com/magento/magento2/pull/15747)*. [GitHub-15356](https://github.com/magento/magento2/issues/15356)

<!---ENGCOM-1772, 1771 -->

*  The annotation for the `formatDateTime` function in the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file has been corrected. The `locale` and `timezone` have been changed to `param string|null $locale` and `@param string|null $timezone`. [GitHub-15668](https://github.com/magento/magento2/issues/15668)

<!--- ENGCOM-2065 -->

*  Magento now displays the Contact Us page on the menu as expected. Previously, Magento displayed unnecessary space between the category page and the main footer. *Fix submitted by Sanjay Patel in pull request [15726](https://github.com/magento/magento2/pull/15726)*. [GitHub-12601](https://github.com/magento/magento2/issues/12601)

<!--- MAGETWO-93982 -->

*  Magento now displays category images consistently.  Previously, category images disappeared then reappeared after every save.

<!--- MAGETWO-75328-->

*  We’ve fixed the display of calculated tax for a logged-in customer when billing and shipping address differed.

### CMS content

<!-- MAGETWO-93705-->

*  Page layout issues that resulted from incorrect module sequencing have been corrected. Previously, the  `Magento_theme`  module was loaded too late, which resulted in unexpected display issues.

<!-- MAGETWO-91645 -->

*  Magento no longer unexpectedly locks up CMS pages when a merchant changes a scheduler end date. Previously, when a merchant updated the end date for a CMS page after the current scheduler ended, Magento generated an error, and the merchant could no longer access any CMS page from the Admin.

<!-- MAGETWO-80077 -->

*  We've added `EvenPrefix` and `EventObject` for CMS Collections to instantiate the observer for `$this->_eventPrefix . '_load_after'` and `$this->_eventPrefix . '_load_before'`. [GitHub-9900](https://github.com/magento/magento2/issues/9900)

<!-- MAGETWO-75313 -->

*  There is now an API interface for retrieving CMS pages and blocks by identifiers and store ID. [GitHub-10414](https://github.com/magento/magento2/issues/10414)

<!--- ENGCOM-2413 -->

*  Disabling a product now removes it from the flat index as expected.  *Fix submitted by Vishal Gelani in pull request [16791](https://github.com/magento/magento2/pull/16791)*. [GitHub-14966](https://github.com/magento/magento2/issues/14966)

<!--- ENGCOM-2032 -->

*  Breadcrumbs now work as expected when a product name contains quotation marks. Previously, the breadcrumbs on the product details page caused this syntax error to be thrown: `SyntaxError: Unexpected token x in JSON`. *Fix submitted by Jignesh Baldha in pull request [16148](https://github.com/magento/magento2/pull/16148)*. [GitHub-15037](https://github.com/magento/magento2/issues/15037)

<!-- MAGETWO-83101 -->

*  CMS blocks are now validated to prevent multiple blocks from having the same store view  and identifier.

<!---MAGETWO-70412 -->

*  You can now configure the native WYSIWYG toolbar to display only applicable controls. See [Using the Editor](https://docs.magento.com/m2/ce/user_guide/cms/editor.html) for more information.

<!-- MAGETWO-51484-->

*  The **Store** > **Attributes** > **Product** **Input type** field now supports the use of  the WYSIWYG editor as an input method when configuring custom product attributes.

### Configurable products

<!--- MAGETWO-87153 -->

*  The product configuration creator now warns about invalid SKUs. [GitHub-11953](https://github.com/magento/magento2/issues/11953)

<!--- MAGETWO-87176 -->

*  The currency symbol no longer  overlaps with an attribute option's price during configurable product creation. [GitHub-12713](https://github.com/magento/magento2/issues/12713)

<!--- MAGETWO-85177 -->

*  Magento now displays the price of a configurable product as expected even when its simple products are out-of-stock. Previously, Magento displayed a price of 0 for any configurable product price when its simple products were out-of-stock. [GitHub-12578](https://github.com/magento/magento2/issues/12578)

<!--- MAGETWO-70491 -->

*  Magento now displays the correct price for a product when its special-price option has not been selected. Previously, Magento displayed the expired `special_price` value for a configurable product even when you did not select the product option associated with that price. *Fix submitted by Sergey P in pull request [9796](https://github.com/magento/magento2/pull/9796)*. [GitHub-6457](https://github.com/magento/magento2/issues/6457)

<!--- MAGETWO-70491 -->

*  Configurable product prices now correctly reflect VAT amounts as set by tax rule settings. Previously, Magento displayed a configurable product's old price without the VAT.  *Fix submitted by Sergey P in pull request [9796](https://github.com/magento/magento2/pull/9796)*. [GitHub-6729](https://github.com/magento/magento2/issues/6729)

<!--- MAGETWO-70491 -->

*  `LowestPriceOptionsProvider` now works as expected. Previously, Magento displayed expired special prices for configurable products, and displayed other problematic behaviors when working with special prices and configurable products.  *Fix submitted by Sergey P in pull request [9796](https://github.com/magento/magento2/pull/9796)*. [GitHub-7362](https://github.com/magento/magento2/issues/7362)

<!--- MAGETWO-71670 -->

*  You can now successfully add a new product that contains a custom attribute set with a multiselect attribute from the Admin.  *Fix submitted by Teun Lassche in pull request [10575](https://github.com/magento/magento2/pull/10575)*. [GitHub-10565](https://github.com/magento/magento2/issues/10565)

<!-- MAGETWO-91562-->

*  Configurable products are now sorted by visible prices as expected. Previously, sorting a catalog by price produced  sort results that included the prices of out-of-stock products and disabled child products.

<!--- MAGETWO-72512 -->

*  Magento no longer displays an inappropriate  product price when a configurable product has two price options. Previously, Magento displayed the  out-of-stock price of a configurable product when both an out-of-stock and in-stock price were configured.

<!--- MAGETWO-86428 -->

*  Magento now reorders configurable attribute options as expected on the product page. *Fix submitted by wardcapp in pull request [12962](https://github.com/magento/magento2/pull/12962)*. [GitHub-7441](https://github.com/magento/magento2/issues/7441)

<!--- MAGETWO-77744 -->

*  Magento now displays a helpful error when  a merchant attempts to upload a file in an unsupported file format.

<!--- MAGETWO-8709 -->

*  The wishlist now displays the appropriate product image for configurable products with selected options. Previously, Magento displayed the parent image instead of the image of the selected child product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)

<!--- ENGCOM-1096 -->

*  The OptionsRepository API test now tests for the use of attribute ID instead of attribute code in the request body.  *Fix submitted by Bettina in pull request [14345](https://github.com/magento/magento2/pull/14345)*. [GitHub-5580](https://github.com/magento/magento2/issues/5580)

<!--- MAGETWO-87524 -->

*  Prices are now readable when you assign prices that use a  custom price symbol to a configurable product. Previously, the custom price symbol obscured the product price. [GitHub-12430](https://github.com/magento/magento2/issues/12430)

<!--- MAGETWO-87615 -->

*  Magento now saves multiselect attributes for a product in the Admin when it has a related product that uses another attribute set.  [GitHub-12699](https://github.com/magento/magento2/issues/12699)

<!--- MAGETWO-87251 -->

*  Magento no longer lets a customer select a configurable product with an out-of-stock option to add to their cart.  *Fix submitted by Alexander Shkurko in pull request [13417](https://github.com/magento/magento2/pull/13417)*.

<!--- MAGETWO-87524 -->

*  You can now add customizable options to a product as expected. [GitHub-11792](https://github.com/magento/magento2/issues/11792)

<!--- ENGCOM-1069 -->

*  The orders page now displays the correct URL when you navigate back to it after having viewed a specific order page.  Previously, the URL of the orders page displayed the previous order ID when you navigated back to it.  *Fix submitted by Vinay Shah in pull request [13390](https://github.com/magento/magento2/pull/13390)*.[GitHub-13295](https://github.com/magento/magento2/issues/13295)

### Cookies

<!-- MAGETWO-93790 -->

*  Customer data is now fully loaded after restarting the browser during an unexpired user session. Previously,  the `section_data_ids` section of the session cookie was not properly completed. [GitHub-14912](https://github.com/magento/magento2/issues/14912)

<!--- ENGCOM-1089 -->

*  Cookies can now be modified by extension. *Fix submitted by rostyslav-hymon in pull request [14366](https://github.com/magento/magento2/pull/14366)*.

### Customers

<!-- MAGETWO-91802 -->

*  Magento now uses the correct amounts when creating a credit memo for an order that was placed using store credit, a gift card, or reward points.

<!-- MAGETWO-60144 -->

*  Administrators can see all customers when the **Share Customer Accounts** value is set to Global.

<!--- MAGETWO-94406 -->

*  Magento now loads customer private data only once when system state changes. Previously, "Directory Data" and "Cart" were loaded twice after a user logged in to the system, which caused additional server load and traffic.

<!--- MAGETWO-91760 -->

*  Magento now correctly displays both the default and additional shipping addresses  provided during checkout. Previously, Magento displayed attributes with dropdown and multiple select types with incorrect values (option IDs instead of labels) for shipping addresses on checkout.

<!--- MAGETWO-70775 -->

*  We have replaced `Zend_Json`  with `\Magento\Framework\Serialize\JsonConverter::convert` in customer data.  [GitHub-10259](https://github.com/magento/magento2/issues/10259)

<!--- ENGCOM-1493 -->

*  In multi-site deployments, a customer requesting a password reset on a non-default store should receive the password reset email from the non-default, not the primary, store. Previously, this password reset email was sent from the default store. *Fix submitted by Yaroslav Rogoza in pull request [15095](https://github.com/magento/magento2/pull/15095)*. [GitHub-5726](https://github.com/magento/magento2/issues/5726)

<!--- ENGCOM-2481 -->

*  Unnecessary leading and trailing spaces have been removed from the customer account login page email field. *Fix submitted by Vishal Gelani in pull request [16956](https://github.com/magento/magento2/pull/16956)*. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!--- ENGCOM-2067 -->

*  Table alias prefixes in field mappings for customer group filter and sorting processors that were previously missing have been restored. Previous to this restoration, Magento threw this error when a merchant opened  **Customers** > **All Customers**: `SQL Error: ambiguous column 'customer_group_id' in 'All customers' page in admin when extension attribute table is joined`.  *Fix submitted by hitesh-wagento in pull request [15842](https://github.com/magento/magento2/pull/15842)*. [GitHub-15822](https://github.com/magento/magento2/issues/15822)

<!--- ENGCOM-2060 -->

*  Customer accounts are now unlocked as expected after a password reset. [GitHub-15534](https://github.com/magento/magento2/issues/15534)

<!--- MAGETWO-86545 -->

*  The  `adminhtml` customer edit page  now displays any customer address validation errors.  *Fix submitted by Adrian Martinez in pull request [12937](https://github.com/magento/magento2/pull/12937)*.

<!--- MAGETWO-72539 -->

*  You can now successfully send email to customer email addresses that contain special characters when initiating email but clicking the **Resend Confirmation Mail** button on the customer account page.

<!--- MAGETWO-82633 -->

*  Magento no longer displays the  `Too many password reset requests` message when an administrator attempts to change a customer’s password from the Admin and the **max wait time between password resets** setting has been disabled in the store configuration settings. [GitHub-11409](https://github.com/magento/magento2/issues/11409)

<!--- MAGETWO-84237 -->

*  We’ve added methods to support setting text values for data pulled from the `customer_grid_flat` table during CSV export. [GitHub-10765](https://github.com/magento/magento2/issues/10765)

<!--- MAGETWO-84374 -->

*  The Confirmed email and Account Lock columns of the customer table CSV export are now populated with values as expected. [GitHub-10765](https://github.com/magento/magento2/issues/10765)

<!--- MAGETWO-82529 -->

*  Customer objects are now properly differentiated from each other after a `customer_save_after_data_object` event.  Previously, the `orig_customer_data_object` and `customer_data_object` objects remained identical even after customer information was changed on the storefront. [GitHub-7915](https://github.com/magento/magento2/issues/7915)

<!--- ENGCOM-980 -->

*  We’ve improved the error message that Magento displays when an administrator is redirected to a forced password change from the Admin user account page. *Fix submitted by dimonovp in pull request [14199](https://github.com/magento/magento2/pull/14199)*. [GitHub-13768](https://github.com/magento/magento2/issues/13768)

<!-- MAGETWO-93714 -->

*  Customer attributes are now correctly validated on the Admin Order form. Previously, Magento validated attribute length  after an order has been submitted, but not on the Admin Order form.

<!--- MAGETWO-90143 -->

*  A user who has been denied permissions for negotiable quote editing can now create customer addresses.

<!--- MAGETWO-86530 -->

*  Magento now trims trailing and leading spaces when saving the name of a new contact. *Fix submitted by wardcapp in pull request [12964](https://github.com/magento/magento2/pull/12964)*. [GitHub-10415](https://github.com/magento/magento2/issues/10415)

<!--- MAGETWO-71432 -->

*  We’ve added cast to string for `GroupInterface::CUST_GROUP_ALL` in the customer group source model. [GitHub-10436](https://github.com/magento/magento2/issues/10436)

<!--- ENGCOM-1268 -->

*  Magento now always returns the user data for the current logged user. Previously, you could get another customer’s session information from sections controller without a timestamp. *Fix submitted by rostyslav-hymon in pull request  [14661](https://github.com/magento/magento2/pull/14661)*. [GitHub-14049](https://github.com/magento/magento2/issues/14049)

<!--- ENGCOM-1146 MAGETWO-85968 -->

*  The PayPal module no longer automatically sets the customer dashboard page to Billing Agreements. *Fix submitted by Mike Whitby in pull request  [14322](https://github.com/magento/magento2/pull/14322)*. [GitHub-7816](https://github.com/magento/magento2/issues/7816)

<!--- ENGCOM-2782 -->

*  The Customer group menu is now displayed under Customers when you create a user role for a customer group. *Fix submitted by Jignesh Baldha in pull request  [17574](https://github.com/magento/magento2/pull/17574)*. [GitHub-16499](https://github.com/magento/magento2/issues/16499)

<!--- ENGCOM-2682 -->

*  The welcome email sent to new customers is now based on the ID of the selected store. Previously, Magento did not check if the selected store from which to send the welcome email was associated with website when creating a customer account in the Admin.  *Fix submitted by Jason Evans in pull request  [17375](https://github.com/magento/magento2/pull/17375)*. [GitHub-10411](https://github.com/magento/magento2/issues/10411)

### Customer attributes

<!--- MAGETWO-94058 -->

*  You can now clear the **Date of Birth** field in the customer edit page when accessed from the Admin.

<!--- MAGETWO-93754 -->

*  Merchants can now create attributes  for customer addresses (**Stores** > **Attributes** > **Customer Address**) as expected. Previously, a merchant could create an attribute, but Magento did not save or display it.

<!--- MAGETWO-91519 -->

*  Magento now adds the address entered during checkout to a new account when a custom address attribute is required when creating a user account after checkout.

<!--- MAGETWO-91509 -->

*  User-defined customer attributes are now copied to the `magento_customercustomattributes_sales_flat_order`  table after placing an order as expected.

<!-- MAGETWO-91737 -->

*  Magento no longer validates customer address attribute value length when the minimum/maximum length fields are not displayed on the Admin.

### Dashboard

<!--- MAGETWO-88013 -->

*  Comments for `StorageInterface.php` have been updated for accuracy.  *Fix submitted by Malyovanets Nickolas in pull request [13729](https://github.com/magento/magento2/pull/13729)*.

<!--- MAGETWO-48 -->

*  You can now search for configuration settings from the Admin.

<!--- MAGETWO-82734 -->

*  Long input field labels now wrap by word, not letter.

<!--- ENGCOM-1770 -->

*  The dashboard last order table now shows the correct  table for the specified store view in a multisite deployment where storefronts use different currencies. *Fix submitted by Ankur Raiyani in pull request [15682](https://github.com/magento/magento2/pull/15682)*. [GitHub-15660](https://github.com/magento/magento2/issues/15660)

<!--- MAGETWO-82561 -->

*  When you edit an administrative  user role, Magento now displays the Customer Groups section under the Customers section as expected. Previously, Magento displayed the Customer Groups section under the **Stores** > **Other settings** section.

### Directory

<!--- ENGCOM-993 -->

*  When sorting by price, Magento now displays the same number of products no matter how it sorts products in the Catalog Product list. Previously, Magento reduced the product count by the number of disabled products when sorting by price. *Fix submitted by AlexWorking in pull request [14215](https://github.com/magento/magento2/pull/14215)*. [GitHub-13899](https://github.com/magento/magento2/issues/13899)

<!--- MAGETWO-93761 -->

*  Currency conversion rate services now work as expected in the Admin.

<!--- ENGCOM-2719 -->

*  The new Currency Converter API supports retrieving TWD currency rates. Previously, the currency rates services that Magento connected to by default could not retrieve TWD rates. *Fix submitted by Hirokazu Nishi in pull request [15542](https://github.com/magento/magento2/pull/15542)*.[GitHub-15541](https://github.com/magento/magento2/issues/15541)

<!--- ENGCOM-982 -->

*  Magento now displays the default country selection when you add a new address as part of creating a new customer from the Admin.  *Fix submitted by rostyslav-hymon in pull request [14204](https://github.com/magento/magento2/pull/14204)* [GitHub-3483](https://github.com/magento/magento2/issues/3483)

### dotmailer

*  dotmailer now displays the first and last purchase categories in the customer sales data fields.

### EAV

<!--- ENGCOM-2708 -->

*  The Product Attribute Repository's incorrect return values have been replaced with values that now adhere to `Magento\Catalog\Api\ProductAttributeRepositoryInterface (extends Magento\Framework\Api\MetadataServiceInterface)` as expected. *Fix submitted by julianvdrielen in pull request [15723](https://github.com/magento/magento2/pull/15723)*.  [GitHub-4803](https://github.com/magento/magento2/issues/4803)

<!--- MAGETWO-94070 -->

*  When Elasticsearch is configured as the search engine, you can now enable and disable the EAV indexer from the Enable EAV Indexer field (**Stores** > **Settings** > **Configuration** > **General** > **Catalog**  > **Catalog Search**).

<!--- MAGETWO-91580 -->

*  Magento no longer displays empty product attributes of type `dropdown` or `swatch` as having a value of **no** on the storefront.

<!--- MAGETWO-72472 -->

*  You can now perform a mass update on products that have more than 60 attributes.

<!--- MAGETWO-91570 -->

*  Magento now displays an error message when  it does not save dropdown values as you create them. Previously, Magento did not save the options, and did not alert you in a message.

<!--- MAGETWO-87036 -->

*  The `@see` tag now identifies a deprecated property in `app/code/Magento/Eav/Model/AttributeManagement.php`.  *Fix submitted by Aki Ojalehto in pull request [13301](https://github.com/magento/magento2/pull/13301)*.

<!--- MAGETWO-87851 -->

*  When a product is saved, the `beforeSave` method now encodes the attribute value only if the value is not encoded already. Previously, if you saved a product multiple times,  then the JSON-encoded attribute value was also encoded multiple times, which causes problems during subsequent loads.

<!--- ENGCOM-1000 -->

*  Magento no longer displays an SQL query in the browser when an exception occurs. *Fix submitted by rostyslav-hymon in pull request [14223](https://github.com/magento/magento2/pull/14223)*. [GitHub-13385](https://github.com/magento/magento2/issues/13385)

<!--- ENGCOM-1250 -->

*  You can now filter an EAV collection before loading by specifying that the value of the attribute is null. [GitHub-14312](https://github.com/magento/magento2/issues/14312), [GitHub-14355](https://github.com/magento/magento2/issues/14355)

### Email

<!--- MAGETWO-87523 -->

*  Nonfunctioning links in the order confirmation email have been corrected. [GitHub-12261](https://github.com/magento/magento2/issues/12261)

### Frameworks

<!--- MAGETWO-95595 -->

*  Declared index names in `db_schema.xml` are no longer ignored by declarative schema.  Previously, index names were autogenerated based on table and column names.

<!--- MAGETWO-86283 -->

*  The `htmlentities` function has been replaced with the `htmlspecialchars` function.

<!---MAGETWO-94991 -->

*  Magnifier now works as expected on any supported operating system and browser. Previously, Magnifier did not hover correctly on devices running Windows Chrome or FireFox.

<!---MAGETWO-94989 -->

*  Magnifier now turns off as expected when a user moves the cursor off an image.

<!---MAGETWO-90358 -->

*  The `ExtensionAttributes` object is now autogenerated.

<!---MAGETWO-88259 -->

*  `ObserverInterface` has been added to @api. Previously, creating an observer that uses `ObserverInterface` triggered a patch-level dependency on `magento/framework`. *Fix submitted by Malyovanets Nickolas in pull request [13786](https://github.com/magento/magento2/pull/13786)*.

<!---MAGETWO-87260 -->

*  The doc block of the `walk` method in a collection now correctly reflects that this method will accept an array. *Fix submitted by ByteCreation in pull request [13374](https://github.com/magento/magento2/pull/13374)*.

<!---MAGETWO-87116 -->

*  `getFrontName` has been refactored to return `getModuleName`'s return values. *Fix submitted by Aki Ojalehto in pull request [13299](https://github.com/magento/magento2/pull/13299)*.

<!---MAGETWO-87128 -->

*  Emogrifier dependency has been updated to ^2.0.0.  *Fix submitted by Oliver Klee in pull request [13351](https://github.com/magento/magento2/pull/13351)*.

<!---MAGETWO-86711 -->

*  The log message created when Magento throws an exception when opening an image now tells you which file triggered the exception.  *Fix submitted by Patrick McLain in pull request [13144](https://github.com/magento/magento2/pull/13144)*.

<!---MAGETWO-86645 -->

*  `Zend_Json` has been removed from the JSON result controller. [GitHub-9236](https://github.com/magento/magento2/issues/9236)

<!---MAGETWO-86568 -->

*  `\Magento\TestFramework\Annotation\AppArea` no longer breaks when it encounters valid values. *Fix submitted by Malyovanets Nickolas in pull request 12992*. [GitHub-2907](https://github.com/magento/magento2/issues/2907)

<!---MAGETWO-86299 -->

*  `Zend_Service` has been upgraded from v.1 to v.2, including these specific changes:

   *  Removed `Magento\Framework\Locale\CurrencyInterfac` from the `setService` method and changed it to `\Zend_Currency_CurrencyInterface`, which must be the provider to this function.

   *  Changed return type to `\Zend_Currency_CurrencyInterface`, the given instance of the service is returned by the `setService` function.

   *  Removed `\Zend_Service` from the `getService` method and changed it to `\Zend_Currency_CurrencyInterface`.

   *  Added `@deprecated` tags to both methods and added `@see` annotation to the methods. Referenced the corresponding interface `\Magento\Directory\Model\Currency\Import\ImportInterface`. *Fix submitted by Danny Verkade in pull request [12957](https://github.com/magento/magento2/pull/12957)*. [GitHub-9243](https://github.com/magento/magento2/issues/9243)

<!---MAGETWO-85063 -->

*  The ReleaseNotification module has been added to support the display of new release highlights.

<!---MAGETWO-81339 -->

*  Magento now saves date and time correctly for different timezones and locales. *Fix submitted by Raul Mateos in pull request [11306](https://github.com/magento/magento2/pull/11306)*. [GitHub-10485](https://github.com/magento/magento2/issues/10485), [GitHub-10580](https://github.com/magento/magento2/issues/10580), [GitHub-10754](https://github.com/magento/magento2/issues/10754)

<!---MAGETWO-70886 -->

*  The `Zend_Feed::importArray` static call has been replaced with a new interface. This concrete class takes the `Zend_Feed` object and returns its own result in the form of a wrapper around `Zend_Feed_Abstract`. *Fix submitted by Dusan Lukic in pull request [9347](https://github.com/magento/magento2/pull/9347)*.  [GitHub-9240](https://github.com/magento/magento2/issues/9240)

<!---MAGETWO-91328 -->

*  Customers can now successfully check out  when the AdBlock extension and Google Analytics are enabled.

<!--- MAGETWO-90316 -->

*  Product records inside the `catalog_product_super_link` table are no longer updated needlessly when you save a configurable product. Previously, saving a configurable product erased and then reinserted records in the `catalog_product_super_link` table even when child products were not changed. This practice quickly resulted in an unnecessarily large `catalog_product_super_link` table, especially in multi-website installations.

<!---MAGETWO-87952 -->

*  Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.

<!---MAGETWO-71034 -->

*  We’ve replaced the usage of `Zend_Json::encode`  in the setup marketplace tests. [GitHub-9236](https://github.com/magento/magento2/issues/9236)

<!---ENGCOM-1173 -->

*  The `Magento\Framework\Json\Helper\Data` class has been deprecated and removed from the `Magento\AdminNotification` module. [GitHub-10329](https://github.com/magento/magento2/issues/10329)

<!---MAGETWO-81276 -->

*  An entry for `compiled_config` cache  has been added to the `cache.xml` file. [GitHub-11295](https://github.com/magento/magento2/issues/11295)

<!---ENGCOM-976 -->

*  The report page now returns a 500 status code (internal server error) instead of a 503 status code when an unexpected error happens,  such as an event that generates the report format pages. *Fix submitted by AlexWorking in pull request [14190](https://github.com/magento/magento2/pull/14190)*. [GitHub-11512](https://github.com/magento/magento2/issues/11512)

<!---ENGCOM-983 -->

*  You can now use the layout update XML field to include custom CSS in CMS pages. [GitHub-4454](https://github.com/magento/magento2/issues/4454)

<!---ENGCOM-1199 -->

*  The `$params` parameter for the post method of  `\Magento\Framework\HTTP\ClientInterface` has been updated to support string type. *Fix submitted by Sergey P in pull request [14481](https://github.com/magento/magento2/pull/14481)*. [GitHub-3489](https://github.com/magento/magento2/issues/3489)

<!---ENGCOM-1122 -->

*  We've added JSON and XML support to the post method in the `\Magento\Framework\HTTP\Client\Socket` class. *Fix submitted by Sergey P in pull request [14169](https://github.com/magento/magento2/pull/14169)*. [GitHub-3489](https://github.com/magento/magento2/issues/3489)

<!---ENGCOM-1261 -->

*  After restart of MySQL, changelog tables now always contain at least one record. Previously, changelog tables were empty, which resulted in a loss of the last `auro_increment` value for the product 'version_id'. *Fix submitted by Ihor Sviziev in pull request [14636](https://github.com/magento/magento2/pull/14636)*. [GitHub-14465](https://github.com/magento/magento2/issues/14465)

<!---ENGCOM-1369 -->

*  Magento now displays two distinct widgets on the homepage as expected when you create two widgets of type `Catalog Product List` to the `CMS homepage` at location `content.bottom` with different titles, but the same condition. Previously, the first widget loaded was displayed twice depending on sort order. *Fix submitted by Ihor Sviziev in pull request [14816](https://github.com/magento/magento2/pull/14816)*. [GitHub-4389](https://github.com/magento/magento2/issues/4389)

<!---ENGCOM-1416 -->

*  The Change Password warning message no longer appears twice when Magento prompts you to change your password in the Admin. *Fix submitted by Riccardo Tempesta in pull request [14897](https://github.com/magento/magento2/pull/14897)*. [GitHub-14895](https://github.com/magento/magento2/issues/14895)

<!---ENGCOM-1508 -->

*  Pages are now successfully rendered when the `meta title` page configuration parameter is set. *Fix submitted by Lorenzo Stramaccia in pull request [11368](https://github.com/magento/magento2/pull/11368)*. [GitHub-2956](https://github.com/magento/magento2/issues/2956)

<!---ENGCOM-2250 -->

*  CSS code is now automatically updated in the browser. Previously, users had to press **CTRL+F5**  to see CSS changes. [GitHub-11354](https://github.com/magento/magento2/issues/11354)

<!--- ENGCOM-943 -->

*  `\Magento\Framework\Encryption\Encryptor::getHash` now uses the specified hashing algorithm version. *Fix submitted by Mads Nielsen in pull request [13885](https://github.com/magento/magento2/pull/13885)*. [GitHub-5463](https://github.com/magento/magento2/issues/5463)

<!---ENGCOM-1806 -->

*  The **Multiple Payment Methods Enabled** setting now works as expected. Previously, Magento threw this error when this setting was enabled: `Found 3 Elements with non-unique Id`. [GitHub-15348](https://github.com/magento/magento2/issues/15348)

<!--- ENGCOM-1274 -->

*  The `setAttributeFilter` method  now specifies a table when calling the `addFieldToFilter` method to add a field to the filter for the collection `Eav/Model/ResourceModel/Entity/Attribute/Option/Collection.php`. *Fix submitted by rostyslav-hymon in pull request [14676](https://github.com/magento/magento2/pull/14676)*. [GitHub-14572](https://github.com/magento/magento2/issues/14572)

<!---MAGETWO-86728 -->

*  Categories are now populated as expected. Previously,   `catalog_category_product_index` did not contain all category product relations that are in `catalog_category_product`. The highest category IDs per type were missing from the index. *Fix submitted by Anton Evers in pull request [12624](https://github.com/magento/magento2/pull/12624)*.

<!---MAGETWO-86653 -->

*  `vendor/magento/framework/composer.json` now declare a dependency on `\Zend_Db_Select`.  *Fix submitted by Ihor Sviziev in pull request [12992](https://github.com/magento/magento2/pull/12992)*.  [GitHub-12967](https://github.com/magento/magento2/issues/12967)

<!---MAGETWO-75326 -->

*  The Magento Admin no longer falls into a redirect loop when an administrator logs in with a role that has no resources assigned.  [GitHub-10611](https://github.com/magento/magento2/issues/10611)

<!---MAGETWO-82428 -->

*  You can now successfully print out an invoice from the Admin without including order details. Previously,  Magento threw a fatal error because the `Zend_Pdf_Color_RGB` class  was not found in the `_drawHeader` method. [GitHub-11581](https://github.com/magento/magento2/issues/11581)

<!---ENGCOM-1397 -->

*  The **Stores** > **Settings** > **Terms and Conditions** table now displays the names of all store views and conditions as expected. *Fix submitted by rostyslav-hymon in pull request [14868](https://github.com/magento/magento2/pull/14868)*. [GitHub-13944](https://github.com/magento/magento2/issues/13944)

<!---ENGCOM-2232 -->

*  We’ve fixed backward-incompatible changes to transport variable event parameters that had previously resulted in neither the email or the `$transport` variable being changed as expected.  *Fix submitted by gwharton in pull request [16600](https://github.com/magento/magento2/pull/16600)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

<!---ENGCOM-2088 -->

*  The sodium library now handles all new encryption and decryption  while supporting encryption and decryption of legacy values with mcrypt. *Fix submitted by Patrick McLain in pull request [135](https://github.com/magento-engcom/php-7.2-support#135)*.[GitHub-128](https://github.com/magento/magento2/issues/128), [GitHub-124](https://github.com/magento/magento2/issues/124), [GitHub-129](https://github.com/magento/magento2/issues/129)

#### Application framework

<!---MAGETWO-83091 -->

*  We've removed undefined fields from files in `/lib`. *Fix submitted by adrian-martinez-interactiv4 in pull request [11662](https://github.com/magento/magento2/pull/11662)*.

<!---MAGETWO-83034 -->

*  The doc block that describes `setValue` in `FilterBuilder` now reflects that this method will accept an array. *Fix submitted by ByteCreation in pull request [11855](https://github.com/magento/magento2/pull/11855)*.

<!--- MAGETWO-82664-->

*  Magento now uses valid ISO language codes in HTML headers. *Fix submitted by Cristian Sanclemente in pull request  [11644](https://github.com/magento/magento2/pull/11644)*. [GitHub-11540](https://github.com/magento/magento2/issues/11540)

<!--- MAGETWO-70736-->

*  Magento can now generate unsecure URLs if the current URL is secure. [GitHub-6175](https://github.com/magento/magento2/issues/6175)

<!--- MAGETWO-82235-->

*  The `php bin/magento app:config:dump` command no longer adds an extra space to multiline array values every time it runs. Previously, this command inserted extra spaces, which triggered Github to commit these files as changed. *Fix submitted by adrian-martinez-interactiv4 in pull request [11452](https://github.com/magento/magento2/pull/11452)*. [GitHub-11328](https://github.com/magento/magento2/issues/11328)

<!--- MAGETWO-82007-->

*  The `StockItemCriteriaInterface` method `setProductsFilter` now accepts an array of IDs. Previously, this method accepted either a single integer or an array, but returned only one item. *Fix submitted by Kirill Morozov in pull request [11503](https://github.com/magento/magento2/pull/11503)*.[GitHub-7678](https://github.com/magento/magento2/issues/7678)

<!--- MAGETWO-93723,  MAGETWO-92185-->

*  The Magento application framework has been updated to address a jQuery security issue.

<!--- MAGETWO-71062 -->

*  We’ve removed the usage of `Zend_Json` from the JSON controller. [GitHub-10342](https://github.com/magento/magento2/issues/10342)

<!--- MAGETWO-71060-->

*  The `\Magento\Framework\Serialize\Serializer\Json` class has replaced `Zend_Json usage in Framework/Module/PackageInfo.php`. [GitHub-9236](https://github.com/magento/magento2/issues/9236)

<!--- MAGETWO-70966-->

*  `Zend_Json` has been removed from the  `DataObject` class. [GitHub-9236](https://github.com/magento/magento2/issues/9236)

<!---MAGETWO-93969 -->

*  We’ve added a declarative mechanism to limit the HTTP methods that a controller can process by implementing one or more `Http<Method>ActionInterface`.

<!--- MAGETWO-71059  MAGETWO-71040-->

*  `Zend_Json` has been removed from setup and `Webapi` and replaced by `Serializer\Json` in `PackagesAuth`.

<!--- MAGETWO-71933-->

*  Classes that contain a *–*  are now rendered as added to the XML. Previously,  *–*  were  replaced with a single *-*.  [GitHub-10645](https://github.com/magento/magento2/issues/10645)

#### Configuration framework

<!---MAGETWO-83083 -->

*  An order's `relation_child_id` and `relation_child_real_id` fields are now accurately set during edit operations. *Fix submitted by Roman K. in pull request [11909](https://github.com/magento/magento2/pull/11909)*. [GitHub-10195](https://github.com/magento/magento2/issues/10195)

<!--- MAGETWO-82998-->

*  Pages that contain layout files with `block_id` arguments that contain whitespace now load correctly. Previously, Magento threw an error when loading these pages. *Fix submitted by Ihor Sviziev in pull request [11849](https://github.com/magento/magento2/pull/11849)*.[GitHub-7640](https://github.com/magento/magento2/issues/7640)

<!---MAGETWO-81310 -->

*  The config array can now read  all settings from `config`. Previously, the config array was hardcoded to read three settings only. *Fix submitted by Vova Yatsyuk in pull request [11302](https://github.com/magento/magento2/pull/11302)*.

<!---MAGETWO-75458 -->

*  You can now assign a default value to config fields of type `image` or `file`.  *Fix submitted by Anton Evers in pull request [10253](https://github.com/magento/magento2/pull/10253)*.[GitHub-10252](https://github.com/magento/magento2/issues/10252)

#### Database framework

<!---MAGETWO-94306 -->

*  The `getSize` function now reflects item and page count totals for filtered product collections on the category page.

#### JavaScript framework

<!--- MAGETWO-85096-->

*  Magento now displays video and images as expected when you select a video or click to view a full-screen image for a configurable product. *Fix submitted by Chumak Roman in pull request [12556](https://github.com/magento/magento2/pull/12556)*. [GitHub-12268](https://github.com/magento/magento2/issues/12268)

<!---MAGETWO-81426 -->

*  We've removed duplicate parameters from a Magento UI LESS library mixin. *Fix submitted by Bartek Igielski in pull request  [11276](https://github.com/magento/magento2/pull/11276)*.

<!---ENGCOM-1456 -->

*  You can now disable the full-screen gallery on mobile devices. [GitHub-12490](https://github.com/magento/magento2/issues/12490), [GitHub-12285](https://github.com/magento/magento2/issues/12285)

<!---ENGCOM-2105 -->

*  The calendar widget (`jQuery UI DatePicker`) now correctly displays more than one month. [GitHub-7379](https://github.com/magento/magento2/issues/7379)

<!---ENGCOM-2895 -->

*  JavaScript files are now located inside the `web/js` directory.

<!---ENGCOM-1793 -->

*  Menus with nested elements now align correctly. [GitHub-7897](https://github.com/magento/magento2/issues/7897)

<!---MAGETWO-71647 -->

*  Magento no longer incorrectly overly encodes UTF-8 files when JavaScript bundling is enabled. Previously, this issue resulted in poor character encoding on the storefront. [GitHub-10562](https://github.com/magento/magento2/issues/10562), [GitHub-6733](https://github.com/magento/magento2/issues/6733)

<!--- ENGCOM-774 -->

*  `jquery.mobile.custom.js` is now compatible with jQuery 3.x. *Fix submitted by Kirill Morozov in pull request  [13688](https://github.com/magento/magento2/pull/13688)*.

<!---ENGCOM-1006 -->

*  The Fotorama gallery now works as expected on Android devices. *Fix submitted by Danilo Argentiero in pull request  [14123](https://github.com/magento/magento2/pull/14123)*. [GitHub-7906](https://github.com/magento/magento2/issues/7906)

<!---MAGETWO-85958 -->

*  The dataprovider constructor has been changed to the `RendererInterface`, making it compatible with custom translators (which can be injected as an argument for `\Magento\Framework\Phrase\Renderer\Composite`).  *Fix submitted by Danny Verkade in pull request [12007](https://github.com/magento/magento2/pull/12007)*. [GitHub-2156](https://github.com/magento/magento2/issues/2156)

<!---ENGCOM-1368 -->

*  You can now place an order for a  grouped product where the subproducts quantity is less than one. *Fix submitted by Ihor Sviziev in pull request [14814](https://github.com/magento/magento2/pull/14814)*.  [GitHub-14692](https://github.com/magento/magento2/issues/14692)

<!---ENGCOM-1723 -->

*  A JavaScript error in `dropdowns.js` has been fixed by properly initializing the `el` variable. You can now set `options.autoclose` to `false`.  *Fix submitted by Dmytro Cheshun in pull request [15607](https://github.com/magento/magento2/pull/15607)*.  [GitHub-15469](https://github.com/magento/magento2/issues/15469)

#### Session framework

<!--- MAGETWO-87153 -->

*  The `sid` variable (`?sid`) no longer appears in the URL even if it is disabled in the Admin. [GitHub-9453](https://github.com/magento/magento2/issues/9453)

<!--- MAGETWO-88084 -->

*  We’ve removed the 30-second timeout limit for the session locking mechanism when Redis is used for session storage.

<!--- MAGETWO-87754 -->

*  `colinmollenhour/php-redis-session-abstract` has been updated to support PHP 7.2. *Fix submitted by Patrick McLain in pull request [39](https://github.com/magento-engcom/php-7.2-support/pull/39)*.

<!--- MAGETWO-83289 -->

*  When you add a product to your wish list after logging out, Magento now redirects you to your account Wish list page and adds the product. Previously, you were redirected to your wishlist page, but Magento did not add the product. [GitHub-11825](https://github.com/magento/magento2/issues/11825)

<!---ENGCOM-2794 -->

*  The shopping cart no longer empties unexpectedly due to concurrent requests during checkout. *Fix submitted by Jignesh Baldha in pull request [17608](https://github.com/magento/magento2/pull/17608)*. [GitHub-12362](https://github.com/magento/magento2/issues/12362)

### General fixes

<!--- MAGETWO-84853-->

*  Magento now validates  custom layout update XML against the schema file when you save the XML. *Fix submitted by adrian-martinez-interactiv4 in pull request [11859](https://github.com/magento/magento2/pull/11859)*.

<!--- MAGETWO-88973-->

*  You can now successfully close full-screen zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if you chose full screen zoom for any product image, you could not close the full screen zoom.

<!--- MAGETWO-72508-->

*  Deleting a customer from the Admin  no longer causes fatal errors upon storefront login or registration.

<!---MAGETWO-85662 -->

*  The **Modified** date field is now updated as expected when you save a page in a deployment running Magento 2.2.1.  *Fix submitted by Oscar Recio in pull request  [12637](https://github.com/magento/magento2/pull/12637)*. [GitHub-12625](https://github.com/magento/magento2/issues/12625)

<!--- MAGETWO-85673-->

*  When the **Redirect Customer to Account Dashboard after Logging in** setting is disabled, Magento now includes the login URL (including the referrer in base64 encoding) from the `window.checkout` object as expected (for example, https://myshop.com/customer/account/login/referrer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0).

<!--- MAGETWO-85539-->

*  Magento now correctly handles `file` or `image` type customer attributes. Previously, when you tried to save customer information when one of these customer attributes were set, Magento threw an exception and did not save the file. *Fix submitted by Franciszek Wawrzak in pull request  [11267](https://github.com/magento/magento2/pull/11267)*. [GitHub-11252](https://github.com/magento/magento2/issues/11252)

<!--- MAGETWO-83276-->

*  You can now use uppercase letters in store codes. *Fix submitted by Manu Gonzalez Rodriguez in pull request  [12010](https://github.com/magento/magento2/pull/12010)*. [GitHub-11996](https://github.com/magento/magento2/issues/11996)

<!--- MAGETWO-83002 -->

*  You can now add a new attribute class to a page's XML root by adding an HTML node. Previously, adding an HTML node caused a validation error. *Fix submitted by Adrian Martinez in pull request 11862*. [GitHub-11697](https://github.com/magento/magento2/issues/11697)

<!--- MAGETWO-84317 -->

*  The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in the `catalog_product_entity` table. Previously, Magento loaded quote items with non-existing products.

<!---MAGETWO-81969 -->

*  Magento now correctly renders the download link in invoice emails. *Fix submitted by Jakob Meissner in pull request   [11024](https://github.com/magento/magento2/pull/11024)*.

<!--- MAGETWO-82342-->

*  `AuthenticationInterface` now contains API interceptors that enhance user authentication, making it possible (for example) to implement a different hashing algorithm for non-Magento to Magento migrations. *Fix submitted by Navarr Barnier in pull request 11546*.

<!---MAGETWO-82667 -->

*  The Magento UI mixins have been edited to improve performance. Changes include:

   *  removing all fallbacks to variables that don't exist in the global scope

   *  defining all variables that are used inside mixins as parameters

   *  adding all missing parameters to the areas of the code where mixins are invoked

   *  moving and simplifying mixins used only once. *Fix submitted by Bartek Igielski in pull request [11371](https://github.com/magento/magento2/pull/11371)*.

<!---MAGETWO-82760 -->

*  The dashboard y-axis range has been enhanced by the addition of an index for y-axis range values. *Fix submitted by Oscar Recio in pull request [11752](https://github.com/magento/magento2/pull/11752)*. [GitHub-7927](https://github.com/magento/magento2/issues/7927)

<!---MAGETWO-81622 -->

*  Lengths for the following fields in the `quote_address` database table have been expanded: `telephone`, `fax`, `region`, and `city`. *Fix submitted by Yaroslav Rogoza in pull request [11286](https://github.com/magento/magento2/pull/11286)*. [GitHub-10869](https://github.com/magento/magento2/issues/10869)

<!--- MAGETWO-81329-->

*  `Magento\Framework\Escaper` now contains the `escapeDollarSign` method, which looks for `${` and replaces `$` with `$`  during save actions involving the page and block controller. *Fix submitted by Lorenzo Stramaccia in pull request [11286](https://github.com/magento/magento2/pull/11286)*. [GitHub-10501](https://github.com/magento/magento2/issues/10501)

<!--- MAGETWO-70758-->

*  Magento now displays product review summaries only when a product has at least one review. *Fix submitted by Jan Schlosser in pull request [10248](https://github.com/magento/magento2/pull/10248)*. [GitHub-4530](https://github.com/magento/magento2/issues/4530)

<!--- MAGETWO-70797-->

*  Magento now uses the config field backend model (`system.xml`) to generate default configuration values on the Admin. Previously, the `afterLoad()` method was evoked only after loading the configuration value from the database, and not after loading the configuration from `config.xml`. This caused the default configuration from `config.xml` to be passed to the form element as `string` instead of `Array`, which resulted in empty configuration fields in the Admin. *Fix submitted by kweij in pull request [7742](https://github.com/magento/magento2/pull/7742)*. [GitHub-4530](https://github.com/magento/magento2/issues/7741)

<!--- MAGETWO-80193-->

*  Magento now selects the `CUST_GROUP_ALL` customer group in `adminhtml` after saving an attribute, and all `$customerGroups['value']` are now of type `string`. *Fix submitted by Manuel Schmid in pull request [10475](https://github.com/magento/magento2/pull/10475)*. [GitHub-10436](https://github.com/magento/magento2/issues/10436)

<!--- MAGETWO-71544-->

*  Session cookies now last until the session closes. Previously, Magento interpreted a `form_key` cookie lifetime of 0 to determine the duration of the cookie lifetime, and the cookie expired immediately. *Fix submitted by Eero Kuusela in pull request [10528](https://github.com/magento/magento2/pull/10528)*. [GitHub-10527](https://github.com/magento/magento2/issues/10527)

<!--- MAGETWO-71544, MAGETWO-71539-->

*  Google Analytics has improved support of websites that conduct transactions in multiple currencies. Previously, payment providers that required different base currencies were configured as different websites in a multisite deployment,  and consequently had to send different base currency in Google Analytics.  *Fix submitted by DominicWatts in pull request [10508](https://github.com/magento/magento2/pull/10508)*. [GitHub-6709](https://github.com/magento/magento2/issues/6709), [GitHub-7471](https://github.com/magento/magento2/issues/7471)

<!--- MAGETWO-71642-->

*  Google Adwords now has the ability to provide transaction-specific conversion values in a conversion tracking tag. *Fix submitted by Dominic Watts in pull request [10558](https://github.com/magento/magento2/pull/10558)*. [GitHub-6708](https://github.com/magento/magento2/issues/6708)

<!--- MAGETWO-71833-->

*  The text in the authentication popup has been corrected to **Checkout as a new customer**. *Fix submitted by Parker Smith in pull request [10627](https://github.com/magento/magento2/pull/10627)*. [GitHub-9533](https://github.com/magento/magento2/issues/9533)

<!-- MAGETWO-93790 -->

*  Customer data is now fully loaded after restarting the browser during an unexpired user session. Previously,  the `section_data_ids` section of the session cookie was not properly completed. [GitHub-14912](https://github.com/magento/magento2/issues/14912)

<!--- MAGETWO-90308 -->

*  `X-Magento-Vary` and `PHPSESSID` now have the same expiration time. Previously, the  `X-Magento-Vary` cookie had an expiration of `session`, which meant it was not considered expired until the browser was closed. In contrast, the `PHPSESSID` cookie had a finite expiration time (not `session`). At times, this resulted in  Magento caching the wrong page for the logged-in user.

<!--- MAGETWO-90285 -->

*  You can now delete rows in the `dynamicRows` component. *Fix submitted by Roman K. in pull request [921](https://github.com/magento/magento2/pull/921)*. [GitHub-8830](https://github.com/magento/magento2/issues/8830)

<!--- MAGETWO-86233 -->

*  Creating new configuration attributes no longer causes naming collisions in the JavaScript UI registry. Previously, when you created a new default attribute and then subsequently created a new product, JavaScript errors occurred.  *Fix submitted by Volodymyr Zaets in pull request [12945](https://github.com/magento/magento2/pull/12945)*. [GitHub-12555](https://github.com/magento/magento2/issues/12555)

<!--- MAGETWO-81646 -->

*  The `\Magento\Test\Php\LiveCodeTest::testCodeStyle`  method now uses whitelist files. *Fix submitted by Adrian Martinez in pull request [11376](https://github.com/magento/magento2/pull/11376)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!--- MAGETWO-91762 -->

*  Magento now processes the oldest message queue entries first instead of last.

<!--- MAGETWO-67627 -->

*  You can successfully save a CMS page with same URL key as another store on a different website but with the same hierarchy.

<!--- MAGETWO-66489 -->

*  You can now successfully preview a Registry Update email template. Previously, Magento threw a fatal error when you tried to preview this template.

<!--- MAGETWO-64854 -->

*  Enterprise Rewards no longer permit double refunds. Previously, problems with the refund logic permitted the inadvertent creation of a double refund.

<!--- MAGETWO-59789 -->

*  Swatch images now resize as expected. Previously, even when a product attribute with Catalog Input Type for Store Owner was set to **Visual swatch**, the image size did not adjust as expected.

<!--- ENGCOM-1271 -->

*  Customers with an empty **Date of Birth** field can now be saved even when the field is not marked (or checked on the JavaScript side) as mandatory.  [GitHub-12146](https://github.com/magento/magento2/issues/12146)

<!--- ENGCOM-2375 -->

*  Store view home pages in multistore deployments no longer display breadcrumbs. Previously, the first store view in a multistore deployment looked fine, but the other store views included unnecessary breadcrumbs on the home page. [GitHub-6504](https://github.com/magento/magento2/issues/6504)

<!--- ENGCOM-2729 -->

*  You can now enable logs as expected (through the use of **Stores** > **Settings** > **Configuration** > **Advanced** > **Developer** > **Debug** > **Log to file**) when switching from production mode to developer mode.

<!--- ENGCOM-2505 -->

*  `magnifier.js` now works no matter which mode is set. (`magnifier.js` offers the option of setting mode to 'inside' for an in-frame zoom.) [GitHub-4977](https://github.com/magento/magento2/issues/4977)

<!--- ENGCOM-2279 -->

*  The `timestamp` fields in `oauth_nonce` now include indexes to avoid deadlocks while erasing old records. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!---MAGETWO-87066 -->

*  The search bar now closes as expected when a user enters a search term in the mobile search bar, does not submit the search term, and then taps the search icon to close the search bar. [GitHub-11231](https://github.com/magento/magento2/issues/11231)

<!---MAGETWO-93766 -->

*  Magento now throws a descriptive error as expected when using a negative value that contains an invalid minus symbol to update reward points on a customer account.

<!---MAGETWO-91338 -->

*  The My Invitations page for a customer account now displays the correct reward points amount.

<!--- MAGETWO-87066 -->

*  The `404 forbidden` error message has been corrected for accuracy to `404 not found` in `/app/code/Magento/Backend/Controller/Adminhtml/Noroute/Index.php`. [GitHub-10775](https://github.com/magento/magento2/issues/10775)

<!--- ENGCOM-1857 -->

*  The Module Manager module grid list is now displayed correctly (**System** > **Tools** > **Web Setup Wizard**  >  **Module Manager**).  *Fix submitted by Vijay Golani in pull request [15755](https://github.com/magento/magento2/pull/15755)*. [GitHub-15192](https://github.com/magento/magento2/issues/15192)

<!--- MAGETWO-87176 -->

*  Layered navigation now shows the correct product count. Previously, Magento counted only in-stock product.  [GitHub-11946](https://github.com/magento/magento2/issues/11946)

<!--- MAGETWO-87449 -->

*  DatePicker date format now reflects the  user's locale as expected. [GitHub-6858](https://github.com/magento/magento2/issues/6858)

<!--- MAGETWO-87523 -->

*  Currency rates are now imported for Allowed Currencies as expected. Previously, selecting `Use system value` for `Base Currency` during currency set up resulted in a configuration error.  [GitHub-8003](https://github.com/magento/magento2/issues/8003)

<!--- MAGETWO-87562 -->

*  Problems with the double column layout on the home page have been resolved. [GitHub-11796](https://github.com/magento/magento2/issues/11796)

<!-- MAGETWO-87152 -->

*  Merchants can now successfully delete the default welcome message. [GitHub-9742](https://github.com/magento/magento2/issues/9742)

<!--- MAGETWO-87176 -->

*  The **Track Order** link on the order page in the Admin now works correctly. Previously, the URL that Magento generated for an order did not include the store that the order originated in. [GitHub-12206](https://github.com/magento/magento2/issues/12206)

<!-- MAGETWO-87151 -->

*  Magento no longer rounds product quantity to the nearest whole number when trying to invoice an order that has products with quantity decimals. [GitHub-11941](https://github.com/magento/magento2/issues/11941)

<!-- MAGETWO-87064 -->

*  `health_check.php` has been added into the `nginx.conf.sample` file.  [GitHub-11157](https://github.com/magento/magento2/issues/11157)

<!---ENGCOM-1229 -->

*  The Google Analytics block code has been moved to the  <code><head></code> tag on the **Stores** > **Settings** > **Configuration** > **Sales** > **Google API** page.   [GitHub-8837](https://github.com/magento/magento2/issues/8837)

<!--- MAGETWO-88018-->

*  Magento now displays a more helpful message when you misspell the name of a new module in `registration.php`.  *Fix submitted by Malyovanets Nickolas in pull request [13731](https://github.com/magento/magento2/pull/13731)*.

<!--- MAGETWO-86251-->

*  The  `Learn More Link` widget option in a Recently Viewed Products widget now respects its setting. *Fix submitted by JeroenVanLeusden in pull request [12947](https://github.com/magento/magento2/pull/12947)*.

<!--- ENGCOM-1256 -->

*  You can now use the WYSIWYG  editor to upload images even when the media directory is a symlink. *Fix submitted by Mike Whitby in pull request  [14353](https://github.com/magento/magento2/pull/14353)*.  [GitHub-13929](https://github.com/magento/magento2/issues/13929)

<!--- ENGCOM-1707 -->

*  Dependency on  the `mageMenu` widget dependency in the breadcrumbs component has been removed.  Previously, breadcrumbs on the product page were invisible when the `mageMenu` widget was not used.  *Fix submitted by Vova Yatsyuk in pull request  [15478](https://github.com/magento/magento2/pull/15478)*.

<!--- ENGCOM-957 -->

*  Magento no longer uses strings in evaluation of `setTimeout`.  *Fix submitted by Jonathan Kingston in pull request  [14173](https://github.com/magento/magento2/pull/14173)*. [GitHub-14172](https://github.com/magento/magento2/issues/14172)

<!-- MAGETWO-87057 -->

*  Magento no longer displays the `Something Went Wrong` error whenever an administrator with limited privilege logs into the Admin and tries to navigate to a page. [GitHub-11700](https://github.com/magento/magento2/issues/11700)

<!--- ENGCOM-1970 -->

*  The `magento setup:install` command no longer halts with an error  at `Magento_Catalog`.  *Fix submitted by Lorenzo Stramaccia in pull request  [15982](https://github.com/magento/magento2/pull/15982)*.  [GitHub-1350](https://github.com/magento/magento2/issues/1350)

<!---MAGETWO-87066 -->

*  Magento no longer throw the `Data key is missing: code-entity` error when you try to create and edit a page. [GitHub-11163](https://github.com/magento/magento2/issues/11163)

<!--- MAGETWO-87153 -->

*  Customers are now redirected to the Sign In form as expected when they navigate to this form using the **Back** button on this browser.  [GitHub-12715](https://github.com/magento/magento2/issues/12715)

<!--- MAGETWO-87153 -->

*  The welcome message now displays the new customer’s first and last name after they have confirmed their account by clicking  the **Confirm Your Account** button in the confirmation email.  [GitHub-12719](https://github.com/magento/magento2/issues/12719)

<!--- MAGETWO-87442 -->

*  You can now enable debugging (log to file) in production mode. [GitHub-11882](https://github.com/magento/magento2/issues/11882)

<!--- MAGETWO-87449 -->

*  Datepicker now uses the store locale as expected. [GitHub-6350](https://github.com/magento/magento2/issues/6350)

<!--- MAGETWO-87449 -->

*  When you click on a row with inline editing mode enabled while creating an Admin listing, the date column is now converted to the correct value in the date picker. Previously, the date value displayed in the date picker UI always showed the value of the current date instead of the actual column value. [GitHub-6831](https://github.com/magento/magento2/issues/6831)

### Gift cards

<!---MAGETWO-90335 -->

*  Magento now includes a gift card recipient's email address in the gift card account history. Previously, Magento did not include the gift card recipient's name and email address in the gift card account history, even though Magento successfully sent the email.

<!-- MAGETWO-93791 -->

*  Magento no longer permits users to save a new gift card  without first completing the required values. Previously, when creating a gift card, users could save the card without having designated an amount, but the card could not be purchased. Magento also created a `report.CRITICAL: Warning` error message in the `system.log`.

<!-- MAGETWO-93716 -->

*  Magento now maintains relationships among new gift card accounts when a customer purchases several gift cards in the same order.

<!-- MAGETWO-93707 -->

*  You can now save gift cards when the price has been changed on the Admin to an unacceptable format. Previously, Magento tried to save amounts in unacceptable formats (such as the inclusion of a comma in a four-digit price), which triggered an error.

<!--- MAGETWO-90791 -->

*  Magento now displays the correct subtotal when a customer adds multiple gift cards of different amounts to his cart.

<!--- MAGETWO-88274 -->

*  The password strength meter has been refactored to perform an email comparison only if an email field exists in the same form on which the meter exists. Previously, Magento threw a JavaScript error under these conditions. *Fix submitted by serhii-balko in pull request [13819](https://github.com/magento/magento2/pull/13819)*. [GitHub-13429](https://github.com/magento/magento2/issues/13429)

### Google Analytics

<!-- MAGETWO-87442 -->

*  The Google Analytics pageview is no longer triggered twice. [GitHub-12221](https://github.com/magento/magento2/issues/12221)

### Google Tag Manager

<!-- MAGETWO-93788 -->

*  The `addToCart` event triggers on the Google Task Manager console only when an item is added to the cart.  Previously, the event was triggered before the cart was updated.

<!-- MAGETWO-92126 -->

*  Google Tag Manager product category data is now fully reported. Previously, the Google Tag Manager product category (Enhanced Ecommerce) data did not report all information.

<!--- ENGCOM-633 -->

*  Magento now correctly displays product titles when displaying Sales information in Google Analytics.  Previously, Magento replaced spaces in product names with their HTML values (for example, `\u0020`).  *Fix submitted by Julien ANQUETIL in pull request [13907](https://github.com/magento/magento2/pull/13907)*.  [GitHub-13827](https://github.com/magento/magento2/issues/13827), [GitHub-13350](https://github.com/magento/magento2/issues/13350)

<!-- MAGETWO-91712 -->

*  All relevant attributes are now populated in the Google Tag Manager when a customer adds a product to their shopping cart. Previously, grouped, bundle, and configurable product attributes were missing in the Google Tag Manager.

### HTML

<!---MAGETWO-87351 -->

*  Magento now displays a newly created Contact Us form on a category page as expected. Previously, you could create a Contact Us form, but Magento  did not display it properly. [GitHub-12601](https://github.com/magento/magento2/issues/12601)

<!---ENGCOM-1990 -->

*  You can now change only the primary button `font-weight` without changing regular button `font-weight` with LESS variables.  *Fix submitted by Chirag Matholiya in pull request [16036](https://github.com/magento/magento2/pull/16036)*. [GitHub-15832](https://github.com/magento/magento2/issues/15832)

<!---ENGCOM-2112 -->

*  HTML minification now works as expected.  *Fix submitted by Lisovyi Yevhenii in pull request [16332](https://github.com/magento/magento2/pull/16332)*. [GitHub-5316](https://github.com/magento/magento2/issues/5316)

<!-- MAGETWO-87064 -->

*  The `name` attribute is no longer empty when you create custom fields during product creation. [GitHub-9944](https://github.com/magento/magento2/issues/9944)

### Image

<!---ENGCOM-2955 -->

*  You can now set values for `MAX_IMAGE_WIDTH` and `MAX_IMAGE_HEIGHT` in **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Images Configuration**, which supports the upload of larger images.  *Fix submitted by Malyovanets Nickolas in pull request [17826](https://github.com/magento/magento2/pull/17826)*. [GitHub-13747](https://github.com/magento/magento2/issues/13747)

<!---ENGCOM-2956 -->

*  `.png` images from the GD2 image library that have transparent backgrounds now retain their  transparent backgrounds after upload. Previously, these transparent backgrounds were rendered black when you displayed these images after upload. *Fix submitted by Eduard Chitoraga in pull request [17857](https://github.com/magento/magento2/pull/17857)*. [GitHub-14248](https://github.com/magento/magento2/issues/14248)

<!---ENGCOM-2802 -->

*  Magento now displays the background of transparent product image watermarks correctly.  *Fix submitted by Ronak Patel in pull request [16929](https://github.com/magento/magento2/pull/16929)*. [GitHub-16929](https://github.com/magento/magento2/issues/16929)

<!---ENGCOM-2698 -->

*  Product image zoom now works as expected in stores running on Safari.  *Fix submitted by Danny Nimmo in pull request [17426](https://github.com/magento/magento2/pull/17426)*. [GitHub-17416](https://github.com/magento/magento2/issues/17416)

<!-- MAGETWO-87057 -->

*  The cross-sell product placeholder image on the shopping cart page is now the same size as the  product listing page placeholder image. [GitHub-12017](https://github.com/magento/magento2/issues/12017)

<!-- MAGETWO-87936 -->

*  The WYSIWYG editor now displays image icons as expected. Previously, the WYSIWYG editor showed broken image icons only. [GitHub-10417](https://github.com/magento/magento2/issues/10417)

### Import/export

<!--- MAGETWO-90313 -->

*  When you import information about existing customers, Magento now changes only the specific rows for this customer. If rows for other customer attributes (for example, `group_id`, `store_id`, `created_at`) are absent in the import file, these values are included unchanged.

<!--- MAGETWO-90149 -->

*  You can now import or export a specific store view that includes custom options and bundle product options. Previously, the import/export feature did not include store view-level edits for  custom options.

<!--- MAGETWO-91594 -->

*  Import now completes successfully when a product’s CSV entry is split over two import “bunches”.  Previously, Magento threw this error: `Cannot add or update a child row: a foreign key constraint fails`, and import failed.

<!--- MAGETWO-87974 -->

*  You can now hide an image as expected by using the `hide_from_product_page` attribute during import.

<!--- ENGCOM-1514 -->

*  Product import now updates the **Enable Qty Increments** field as expected.  [GitHub-14351](https://github.com/magento/magento2/issues/14351)

<!--- MAGETWO-94206 -->

*  Magento now displays the correct execution time for an import operation on the **System** > **Data Transfer** > **Import History** page.

<!--- MAGETWO-87313 -->

*  The Admin product import feature can now import zero (0) values into the custom attribute field. [GitHub-12083](https://github.com/magento/magento2/issues/12083)

<!---MAGETWO-84222 -->

*  A grammar error in the "What is this" tooltip for the Braintree vault has been corrected.

<!---MAGETWO-82960 -->

*  The export process now correctly handles negative values in the exported XML file. [GitHub-11729](https://github.com/magento/magento2/issues/11729)

<!--- MAGETWO-87562 -->

*  Magento no longer throws an exception when importing  a product with a category field that begins with a comma. [GitHub-10697](https://github.com/magento/magento2/issues/10697)

<!---MAGETWO-83131 -->

*  `CatalogImportExport categoryProcessor` now supports escaped delimiters in category names.  [GitHub-6948](https://github.com/magento/magento2/issues/6948)

<!---MAGETWO-87188 -->

*  The customer import process no longer crashes due to an out-of-memory problem during import of a customer database containing 250,000 or more entries.

<!---MAGETWO-87017 -->

*  Support for multiselect attributes for both product and customer entities has been added. *Fix submitted by php4umagento in pull request [98](https://github.com/magento-engcom/import-export-improvements/pull/98)*.

<!---MAGETWO-86221-->

*  Images imported by URL now have conventional file paths.  *Fix submitted by Pieter Cappelle in pull request [12872](https://github.com/magento/magento2/pull/12872)*. [GitHub-12455](https://github.com/magento/magento2/issues/12455)

<!---MAGETWO-86044-->

*  Grouped products are now imported correctly. Previously, after import, simple products were no longer associated with their grouped products.  *Fix submitted by Pieter Cappelle in pull request [12853](https://github.com/magento/magento2/pull/12853)*. [GitHub-12793](https://github.com/magento/magento2/issues/12793)

<!---MAGETWO-86884-->

*  Error reporting for product image import has been improved.   *Fix submitted by Malyovanets Nickolas in pull request 1201*. [GitHub-4711](https://github.com/magento/magento2/issues/4711)

<!---ENGCOM-855 -->

*  `CatalogImportExport` now supports empty row values. [GitHub-7468](https://github.com/magento/magento2/issues/7468)

<!---ENGCOM-732 -->

*  You can now set `selection_can_change_qty` during the export or import of a bundle product with properties. *Fix submitted by Adam Paterson in pull request [100](https://github.com/magento-engcom/import-export-improvements/pull/100)*. [GitHub-9342](https://github.com/magento/magento2/issues/9342)

<!--- MAGETWO-87442 -->

*  Magento no longer throws an exception after successfully validating a `.csv` fil for import. Previously, an exception message was mistakenly passed as a exception description argument instead of exception message, which triggered the exception. [GitHub-6924](https://github.com/magento/magento2/issues/6924)

<!--- MAGETWO-87442 -->

*  The product export process now correctly considers `hide_for_product_page` setting for images. [GitHub-8255](https://github.com/magento/magento2/issues/8255)

<!--- MAGETWO-87439 -->

*  Magento no longer displays a success message when it fails to successfully import all products.  [GitHub-5846](https://github.com/magento/magento2/issues/5846)

<!--- MAGETWO-87562 -->

*  Magento no longer displays extraneous records for an order into the exported CSV file.  [GitHub-12714](https://github.com/magento/magento2/issues/12714)

<!---MAGETWO-87058 -->

*  Product import now fetches the relationship between product SKU and `entity_id` with improved efficiency when inserting attribute data. [GitHub-10920](https://github.com/magento/magento2/issues/10920)

<!--- MAGETWO-88240 -->

*  Magento now renames images during a bulk upload of products  with images. *Fix submitted by Umar Chaudhry in pull request [99](https://github.com/magento-engcom/import-export-improvements/pull/99)*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- MAGETWO-87933 -->

*  Report error CSV file now works when you  try to import a CSV file with a semicolon delimiter. *Fix submitted by Malyovanets Nickolas*.  [GitHub-5015](https://github.com/magento/magento2/issues/5015)

<!---ENGCOM-2468 -->

*  Magento now provides a validation failure during import when multiselect columns contain duplicate values. *Fix submitted by carstenpfeifer in pull request 117*.  [GitHub-103](https://github.com/magento/magento2/issues/103)

### Indexing

<!---MAGETWO-85225 -->

*  `indexer:status` now outputs information about the schedule `mview` backlog. *Fix submitted by Luke Rodgers in pull request  [12592](https://github.com/magento/magento2/pull/12592)*.

<!---MAGETWO-70883 -->

*  Magento no longer reindexes entities that have not been changed. Previously, Magento reindexed entries that were not changed but which had a MySQL UPDATE. *Fix submitted by Anton Evers in pull request [4893](https://github.com/magento/magento2/pull/4893)*.[GitHub-2987](https://github.com/magento/magento2/issues/2987)

<!--- MAGETWO-90109 -->

*  The customer grid indexer now works as expected.  Previously, this indexer did not work when reindexing using the command-line interface during the upgrade. *Fix submitted by Leonid Poluyanov in pull request [10838](https://github.com/magento/magento2/pull/10838)*. [GitHub-10838](https://github.com/magento/magento2/issues/10838)

<!--- MAGETWO-70835 -->

*  Tier pricing for a single product unit now works as expected. If a tier price is set for one product unit, and this price is lower than the product price or special price, then the product price index table is populated with the tier price.

### Infrastructure

<!-- MAGETWO-72139 -->

*  This release provides compatibility with PHP 7.2.x.

<!-- MAGETWO-92877 -->

*  You can now configure system logs to write to syslog, which supports subsequent re-streaming and minimizes storage needs.

<!-- MAGETWO-87313 -->

*  You can now set access to only integrations for Admin roles (rather than assign full access). Previously, access for integrations could be assigned only when  **Role Resources** was set to all. [GitHub-9684](https://github.com/magento/magento2/issues/9684)

<!--- MAGETWO-90103 -->

*  `expectException()` calls now accept two parameters (instead of one). *Fix submitted by Fabian Schmengler in pull request [11099](https://github.com/magento/magento2/pull/11099)*. [GitHub-11059](https://github.com/magento/magento2/issues/11059)

<!--- MAGETWO-93039 -->

*  Several components included by Composer have been updated to the latest patch versions.

<!--- MAGETWO-68802 -->

*  Customers can change product status by clicking on the toggle element or by clicking on label text, but not by clicking the area around a toggle element. Previously, if a customer  clicked on the area around a toggle element, Magento changed the state of the element. Unintended results could occur if a customer mistakenly clicked on the area around the element and didn't realize that the status had  changed.

<!--- MAGETWO-71007 -->

*  We’ve removed `Zend_Json` from the data object, test suite, and package information. [GitHub-10306](https://github.com/magento/magento2/issues/10306), [GitHub-10320](https://github.com/magento/magento2/issues/10320), [GitHub-10340](https://github.com/magento/magento2/issues/10340)

<!---ENGCOM-1904 -->

*  Changing the `@tab-content__border` variable in Blank theme now works as expected. [GitHub-14999](https://github.com/magento/magento2/issues/14999)

<!---ENGCOM-2463 -->

*  Corrected sticky footer in `page-main` container height on mobile devices. [GitHub-15118](https://github.com/magento/magento2/issues/15118)

<!---ENGCOM-2604 -->

*  Style groups for mobile devices (`max-width`) are now specified in the correct order. [GitHub-14476](https://github.com/magento/magento2/issues/14476)

<!---ENGCOM-2796 -->

*  The Web Setup wizard icon sidebar shortcut on the Admin now links as expected to the wizard. *Fix submitted by Arnoud Beekman in pull request [17610](https://github.com/magento/magento2/pull/17610)*. [GitHub-13948](https://github.com/magento/magento2/issues/13948)

<!--- ENGCOM-2884 -->

*  The condition category chooser now handles multiple nested categories as expected. Previously,  if a cart rule contained several nested categories, no categories appeared on the page, the page  became unresponsive,  and  Magento eventually crashed. *Fix submitted by Malyovanets Nickolas in pull request [17816](https://github.com/magento/magento2/pull/17816)*. [GitHub-15121](https://github.com/magento/magento2/issues/15121)

<!---MAGETWO-87056 -->

*  The `magento/module-widget/etc/widget.xsd` and `magento/module-widget/etc/widget_file.xsd` files have been updated to support multiple `depends` parameters. [GitHub-9783](https://github.com/magento/magento2/issues/9783)

<!---MAGETWO-85588 -->

*  Magento now requires that customers select State/Province when shipping orders to India,  and the checkout page now provides a drop-down field with appropriate values. *Fix submitted by p-bystritsky in pull request [12378](https://github.com/magento/magento2/pull/12378)*. [GitHub-12378](https://github.com/magento/magento2/issues/12378)

<!--- MAGETWO-85587-->

*  We fixed the invalid parameter configuration that was provided for the `$block` argument of `Magento\\Ui\\Component\\HtmlContent`. *Fix submitted by Tomasz Gregorczyk in pull request [12665](https://github.com/magento/magento2/pull/12665)*. [GitHub-12452](https://github.com/magento/magento2/issues/12452)

<!---MAGETWO-84908 -->

*  The`app/code/Magento/Downloadable/Helper/File.php` and `app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php` files no longer contain duplicate key arrays. *Fix submitted by Leandro F. L. in pull request [12520](https://github.com/magento/magento2/pull/12520)*.

<!-- MAGETWO-72091 -->

*  Magento now deselects only the attributes you choose to deselect when you set the **Use Default Value** setting on a store view to **no** for certain attributes. Previously, when you deselected the **Use Default Value** setting on a store view for certain attributes, Magento unselected other attributes as well.

<!--- MAGETWO-87449 -->

*  Additional blocks for footer links now line up with default footer links as expected. [GitHub-6712](https://github.com/magento/magento2/issues/6712)

<!--- MAGETWO-87442 -->

*  The Psr logger debug method now works by the default in developer mode. [GitHub-11509](https://github.com/magento/magento2/issues/11509)

<!---MAGETWO-89899 -->

*  Proxy/Interceptor generator now works as expected with  PHP 7.1 syntax.

<!---MAGETWO-89542 -->

*  Module composer versions are no longer mandatory in the GitHub repository.

<!---MAGETWO-88275 -->

*  The handling fee configuration for shipping methods is now silently casted to float. *Fix submitted by serhii-balko in pull request [13818](https://github.com/magento/magento2/pull/13818)*.

<!---MAGETWO-87512 -->

*  The  `create_function()` function has been deprecate and removed. *Fix submitted by Yevhen Sentiabov in pull request [32](https://github.com/magento-engcom/php-7.2-support/pull/32)*.

<!---ENGCOM-1366 -->

*  Magento now sets the `trigger_recollect` attribute  back to 0 after collecting total amounts for the quote. Previously, Magento timed out if a customer tried to reload a quote. *Fix submitted by Ihor Sviziev in pull request [14812](https://github.com/magento/magento2/pull/14812)*. [GitHub-9580](https://github.com/magento/magento2/issues/9580)

<!---MAGETWO-75321 -->

*  You can now add new columns to the item table  in the `admin sales_order_view` layout. [GitHub-10824](https://github.com/magento/magento2/issues/10824)

<!---MAGETWO-87058 -->

*  The Admin shipping report now shows the correct currency code. [GitHub-11793](https://github.com/magento/magento2/issues/11793)

<!---MAGETWO-87058 -->

*  `Configurable::getUsedProducts` returns a simple array as expected after product collections are cached [GitHub-11880](https://github.com/magento/magento2/issues/11880)

<!--- MAGETWO-87562 -->

*  The  input format of customer date of birth has been corrected. [GitHub-11332](https://github.com/magento/magento2/issues/11332)

<!-- MAGETWO-87064 -->

*  The **Add to cart** checkboxes in Related Products are no longer visible when `$canItemsAddToCart` is set to **false**.  [GitHub-6891](https://github.com/magento/magento2/issues/6891)

<!---MAGETWO-87056 -->

*  A  responsive design issue with the mobile landing page has been resolved. Previously, the Shop By and other page elements were positioned incorrectly. [GitHub-10941](https://github.com/magento/magento2/issues/10941)

<!---MAGETWO-87056 -->

*  We’ve fixed an issue with `addCrumb()`. [GitHub-11275](https://github.com/magento/magento2/issues/11275)

<!---MAGETWO-87056 -->

*  The `getChildren()` method now returns a list of IDs that is sorted by the `position` attribute.  [GitHub-11310](https://github.com/magento/magento2/issues/11310)

<!-- MAGETWO-87057 -->

*  Magento now allows the  setting of a custom  HTTP response status code in a redirection. [GitHub-9028](https://github.com/magento/magento2/issues/9028)

<!---MAGETWO-87058 -->

*  `Magento\Search\Helper\getSuggestUrl()` is now used as expected in the search template, which supports a custom autosuggest feature. [GitHub-6802](https://github.com/magento/magento2/issues/6802)

<!---MAGETWO-87058 -->

*  XHTML templates now use schema URNs.  [GitHub-6661](https://github.com/magento/magento2/issues/6661)

<!---MAGETWO-87058 -->

*  `SymLinksIfOwnerMatch` has replaced `FollowSymLinks` in htaccess templates. [GitHub-10811](https://github.com/magento/magento2/issues/10811)

<!-- MAGETWO-87057 -->

*  Magento no longer throws an error when using `Magento\Quote\Model\ResourceModel\QuoteItem\Collection::getItems()`  to load a quote item collection. [GitHub-8954](https://github.com/magento/magento2/issues/8954)

<!---ENGCOM-1851 -->

*  Merchants can now apply styling by changing LESS variables in the Luma theme as expected. *Fix submitted by hitesh-wagento in pull request [15794](https://github.com/magento/magento2/pull/15794)*. [GitHub-15608](https://github.com/magento/magento2/issues/15608)

<!--- MAGETWO-88148 -->

*  `sjparkinson/static-review` has been removed throughout the code base.

<!-- MAGETWO-75114 -->

*  The `@deprecated` tag has been added to `Magento\Store\Model\Store::$_isAdminSecure`.  [GitHub-4720](https://github.com/magento/magento2/issues/4720)

<!-- MAGETWO-80287 -->

*  A new static test detects blocks without the `name` attribute.

<!-- MAGETWO-87524 -->

*  The [Contribution Guide]({{ site.baseurl }}/contributor-guide/backward-compatible-development/ )  now suggests that contributors specify possible replacements for deprecated code. [GitHub-10133](https://github.com/magento/magento2/issues/10133)

<!---MAGETWO-87056 -->

*  You can now use the command-line interface to create a new administrator. Previously, Magento did not recognize configured tableprefix, which prevented Magento from creating the new user. [GitHub-11176](https://github.com/magento/magento2/issues/11176)

<!-- MAGETWO-87936 -->

*  The `getToolbarBlock()` method  has been refactored to permit removal of `product_list_toolbar`. [GitHub-9413](https://github.com/magento/magento2/issues/9413)

<!-- MAGETWO-87064 -->

*  When you use a UI component-based form and add a custom regular expression pattern validation to an input field, Magento now properly converts the supplied pattern from a string to a JavaScript RegEx object. [GitHub-9919](https://github.com/magento/magento2/issues/9919)

<!-- MAGETWO-87524 -->

*  The `hasDataChanges` function now returns false as expected when no data has been changed. [GitHub-12374](https://github.com/magento/magento2/issues/12374)

### Klarna Payments

*  The **Purchase** button is now disabled as expected if Klarna authorization is declined.

*  The unnecessary `span` element below the onboarding text has been removed.

### Locale

<!--- MAGETWO-94119-->

*  The DatePicker date filter on **Reports** > **Products** > **Ordered** now works as expected for administrators working in Australian English locales.

<!--- ENGCOM-1052 -->

*  The zip code pattern for Japan now permits only the seven-digit codes that the Japanese postal service accepts. *Fix submitted by Oscar Recio in pull request [14300](https://github.com/magento/magento2/pull/14300)* [GitHub-14072](https://github.com/magento/magento2/issues/14072)

<!--- MAGETWO-87449-->

*  Magento now correctly validates birth dates in stores running French locales.  [GitHub-9743](https://github.com/magento/magento2/issues/9743)

### Logging

<!--- MAGETWO-94267 -->

*  Admin action logs now list changes to product quantity as expected.

### Messages

<!--- MAGETWO-87351-->

*  The  Payment & Shipping Method area  of an order now displays an informative message if the payment method previously selected is no longer available. [GitHub-12209](https://github.com/magento/magento2/issues/12209)

<!--- MAGETWO-87449-->

*  Magento now displays an error message as expected when a user submits a registration form without first completing the required date of birth field. [GitHub-4248](https://github.com/magento/magento2/issues/4248)

<!--- MAGETWO-87313-->

*  The error message that Magento displays when a customer submits a product review without selecting a rating can now be translated.  [GitHub-10474](https://github.com/magento/magento2/issues/10474)

<!--- MAGETWO-87449-->

*  The message that Magento displays under the following circumstances has been improved:

   *  You download a database from a staging environment that has code deployed to it that upgrades the schema version, or

   *  You are on the master branch in your local environment, which is behind the database. [GitHub-9008](https://github.com/magento/magento2/issues/9008)

<!--- MAGETWO-87313-->

*  The exception message in `findAccessorMethodName()` of `Magento\Framework\Reflection\NameFinder` has been improved. [GitHub-9764](https://github.com/magento/magento2/issues/9764)

### Newsletter

<!--- MAGETWO-82942-->

*  Magento now sends confirmation-of-subscription email to new subscribers only. *Fix submitted by Oscar Recio in pull request [11604](https://github.com/magento/magento2/pull/11604*. [GitHub-5439](https://github.com/magento/magento2/issues/5439)

<!-- MAGETWO-93713 -->

*  Guest users can now sign up for newsletters for multiple stores. Previously, when a guest user signed up for a newsletter from multiple stores, Magento sent a subscription confirmation message, but did not successfully subscribe the user.

<!--- MAGETWO-91701 -->

*  A customer subscription on one store no longer depends on  the customer’s subscription on another store.

<!--- MAGETWO-84686 -->

*  Magento now sends the newsletter subscription success email as expected when a customer successfully subscribes to a newsletter. [GitHub-12439](https://github.com/magento/magento2/issues/12439)

<!--- ENGCOM-2478 -->

*  Magento now sends a confirmation request email to the customer when she unsubscribes to a newsletter. *Fix submitted by Ihor Sviziev in pull request [16995](https://github.com/magento/magento2/pull/16995)*. [GitHub-15218](https://github.com/magento/magento2/issues/15218)

<!--- ENGCOM-2006 -->

*  Magento now displays the newsletter subscription confirmation message  as expected after a customer clicks the confirmation link in the subscription confirmation email.  *Fix submitted by Rahul Kachhadiya in pull request [15861](https://github.com/magento/magento2/pull/15861)*. [GitHub-14747](https://github.com/magento/magento2/issues/14747)

<!--- MAGETWO-87442-->

*  Magento now uses an index to retrieve subscribers from the database instead of the slower `Using where` query.  [GitHub-12787](https://github.com/magento/magento2/issues/12787)

<!--- MAGETWO-87442-->

*  Magento no longer sends redundant newsletter subscription confirmation emails to a customer who creates an account after first logging in as a guest user. [GitHub-12876](https://github.com/magento/magento2/issues/12876)

<!--- MAGETWO-->

*  The title of the newsletter **Subscribe** button now wraps correctly.

<!-- MAGETWO-87151 -->

*  Newsletter subscriptions status is now specific to each store in a multistore deployment.  Previously, when a customer uses the same email address for each account on different stores, changes to the newsletter subscription for an account on one store affected the accounts on other stores. [GitHub-10014](https://github.com/magento/magento2/issues/10014)

<!-- MAGETWO-87057 -->

*  Syncing of newsletter subscribers now works correctly. Previously, the newsletter `create-date` and `change_status_at` values did not work as expected. [GitHub-4004](https://github.com/magento/magento2/issues/4004)

### Orders

<!--- MAGETWO-83496-->

*  Magento no longer copies every address that has `save_in_address_book` set to 0 to the customer address book. Previously, if you placed an order as a guest and set the `save_in_address_book` value for an address to 0, Magento still copied that address to the customer address book when it registered a new customer on the checkout success page. *Fix submitted by Roman K. in pull request [11903](https://github.com/magento/magento2/pull/11903)*. [GitHub-7691](https://github.com/magento/magento2/issues/7691)

<!--- MAGETWO-83154-->

*  Magento now displays new orders at the top of the orders list as expected when sorting order by purchase date. *Fix submitted by Ihor Sviziev in pull request [11931](https://github.com/magento/magento2/pull/11931)*.

<!---MAGETWO-82656 -->

*  The `getTracksCollection()` method  now returns collection objects. Previously, this method returned either collections or arrays. *Fix submitted by Roman K. in pull request [11680](https://github.com/magento/magento2/pull/11680)*. [GitHub-8022](https://github.com/magento/magento2/issues/8022)

<!--- MAGETWO-82653-->

*  When you place an order in the Admin, Magento now displays the form needed to enter information for  enabled payment methods. *Fix submitted by serhii-balko in pull request [11683](https://github.com/magento/magento2/pull/11683)*. [GitHub-11380](https://github.com/magento/magento2/issues/11380)

<!---MAGETWO-82187 -->

*  The Shipment API now adds a customer note to a shipment if the shipment was created through the API and `appendComment` is set to **true**. *Fix submitted by Jeroen Van Leusden in pull request [11519](https://github.com/magento/magento2/pull/11519)*. [GitHub-11207](https://github.com/magento/magento2/issues/11207)

<!---MAGETWO-80916 -->

*  Magento now displays the State/Province information  on **Order View** > **Information** > **Address Information**. *Fix submitted by Raul Mateos in pull request [11234](https://github.com/magento/magento2/pull/11234)*. [GitHub-10441](https://github.com/magento/magento2/issues/10441)

<!---MAGETWO-71360 -->

*  Magento now correctly calculates the value of the `base_shipping_discount_tax_compensation_amnt` field. *Fix submitted by Anton Evers in pull request [10435](https://github.com/magento/magento2/pull/10435)*. [GitHub-10255](https://github.com/magento/magento2/issues/10255)

<!--- MAGETWO-69913-->

*  The Products Ordered report now shows simple (child) products of configurable products. *Fix submitted by Ranjith VK in pull request [9908](https://github.com/magento/magento2/pull/9908)*. [GitHub-9196](https://github.com/magento/magento2/issues/9196)

<!--- MAGETWO-84980-->

*  The Products in Cart report no longer tries to retrieve the data of deleted products. Previously, when Magento tried to generate this report, it threw an exception. *Fix submitted by angelo983 in pull request [12540](https://github.com/magento/magento2/pull/12540)*.

<!--- MAGETWO-82176-->

*  Magento no longer throws a fatal error when you search for a customer from  **Reports** > Reviews > **By Customers**. *Fix submitted by Oscar Recio in pull request [11524](https://github.com/magento/magento2/pull/11524)*. [GitHub-10301](https://github.com/magento/magento2/issues/10301)

<!--- MAGETWO-86260 -->

*  The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock.  *Fix submitted by Danny Verkade in pull request [12952](https://github.com/magento/magento2/pull/12952)*. [GitHub-9969](https://github.com/magento/magento2/issues/9969)

<!--- MAGETWO-82563-->

*  Invoices and orders now show  consistent coupon codes and totals. Previously, invoices did not reflect coupon codes as expected. [GitHub-10168](https://github.com/magento/magento2/issues/10168)

<!--- ENGCOM-2201-->

*  Coupon codes now work as expected for orders created from the Admin for guest customers. *Fix submitted by Vishal Gelani in pull request [16562](https://github.com/magento/magento2/pull/16562)*.

<!--- ENGCOM-1002-->

*  Magento now sends order confirmation email as expected for orders made using PayPal. Previously, when a customer paid using a credit card, Magento sent email confirmation, but not when an order was paid for by PayPal. *Fix submitted by Dmytro Paidych in pull request [14225](https://github.com/magento/magento2/pull/14225)*. [GitHub-13778](https://github.com/magento/magento2/issues/13778), [GitHub-12792](https://github.com/magento/magento2/issues/12792)

<!--- MAGETWO-87615 -->

*  Magento now uses the  store values (prefix, suffix, increment ID, and sequence tables) from the correct store view when placing orders from a non-default store in a multistore deployment. [GitHub-9055](https://github.com/magento/magento2/issues/9055)

<!--- MAGETWO-87615 -->

*  Magento no longer throws error on the Admin order edit page when the order address has extension attributes. [GitHub-10438](https://github.com/magento/magento2/issues/10438)

<!--- MAGETWO-83496-->

*  When you place an order as a guest and set the `save_in_address_book` value to 0, Magento no longer copies that address to the customer address book if you subsequently register as a new customer on the checkout success page.

<!--- MAGETWO-75327-->

*  The `cancel` method no longer saves an order and returns **true**  if an order canceled with OrderService  cannot be canceled. [GitHub-10803](https://github.com/magento/magento2/issues/10803)

<!-- MAGETWO-87151 -->

*  You can now access the create order page from the customer edit page as expected. Previously, Magento threw a fatal error. [GitHub-11832](https://github.com/magento/magento2/issues/11832)

<!-- MAGETWO-87351 -->

*  New orders are now being saved as expected to the order grid. [GitHub-10128](https://github.com/magento/magento2/issues/10128)

<!---ENGCOM-1999 -->

*  Magento now correctly applies the designated frontend controller when store view URLs contain store codes (**Stores** > **Settings** > **Configuration** > **General**  > **Web** > **Url Options** > **Add Store Code to Urls** is set to **yes**).  *Fix submitted by Vishal Gelani in pull request [15759](https://github.com/magento/magento2/pull/15759)*. [GitHub-15565](https://github.com/magento/magento2/issues/15565)

<!--- MAGETWO-80095-->

*  Magento now checks if an invoice has been previously  canceled before canceling it.

### Page cache

*  Asynchronous rendering of blocks no longer corrupts layout cache. Previously, when an asynchronous request generated a layout `cacheId` based on same handle as a CMS page, but without loading the associated CMS page, the CMS page-related layout updates were lost. [GitHub-8554](https://github.com/magento/magento2/issues/8554), [GitHub-9050](https://github.com/magento/magento2/issues/9050)

### Payment methods

<!--- MAGETWO-83340 -->

*  Merchants can now provide customized error messages when a transaction fails at the payment stage. Previously, Magento displayed this default message when an error occurred: `Transaction has been declined. Please try again later.`

<!-- MAGETWO-87154 -->

*  Magento no longer throws a validation error at the payments step of check out when an agreements checkbox is present. [GitHub-11885](https://github.com/magento/magento2/issues/11885)

<!--- MAGETWO-94402-->

*  Magento now displays the correct billing address in the order confirmation email when  **Paypal Express Checkout** is enabled. Previously, Magento displayed the shipping address instead of the billing address.

<!--- MAGETWO-91610-->

*  Customers can now check out using PayPal when the **Request Billing Information** feature is not enabled. Previously, Magento threw this error when a customer tried to check out with Braintree through Paypal from the shopping cart,  `Undefined index: billingAddress in /app/aacdg4mgbgw24/vendor/magento/module-braintree/Model/PayPal/Helper/QuoteUpdater.php on line 138`.

<!--- MAGETWO-90327 -->

*  Magento now provides dedicated payment and shipping debug log files to store information specific to those functional areas.

<!--- MAGETWO-90310 -->

*  PayPal now works as expected with virtual products such as gift cards. Previously, when you tried to place an order for a virtual product using PayPal, Magento did not display the PayPal popup when you clicked **Continue PayPal** during checkout.

<!--- MAGETWO-90106 -->

*  You can now place orders using PayPal when **Payment Action = Order**. Previously, when **Payment Action = Order**, Magento displayed this error when you reached the order review page: `We can't place the order.`

<!--- MAGETWO-89990 -->

*  The multi-shipping checkout  flow now supports the CyberSource payment method. This payment method is supported by Magento Commerce only. However,  as part of the process of adding CyberSource support, we've made improvements to the Multi-shipping module to simplify integration process for other payment methods. Users of the CyberSource payment method should note that CyberSource uses the Magento Vault module only to store and retrieve tokens. Stored CyberSource tokens won't be displayed on the checkout page or customer account.

<!--- MAGETWO-89991 -->

*  Default AVS and CVV codes are now mapped as (null or empty string) instead of `U` for Signifyd.

<!--- MAGETWO-94402 -->

*  The **Billing Address** field now displays the designated billing address as expected  for a registered customer  when checking out with Paypal Express Checkout. Previously, Magento displayed the shipping address in the **Billing Address** field in both the order confirmation email and the Admin.

<!--- MAGETWO-91500 -->

*  Admin users that are not part of the Administrator group can now complete payment for an order using Braintree.

<!--- MAGETWO-89625 -->

*  Magento PayPal integration now supports the Indian Rupee currency (INR).

<!---ENGCOM-2954 -->

*  Magento now validates that the required **Purchase Order Number** field is  set as expected during checkout. *Fix submitted by Pratik Oza in pull request [17670](https://github.com/magento/magento2/pull/17670)*. [GitHub-6585](https://github.com/magento/magento2/issues/6585)

<!--- ENGCOM-2308 -->

*  A type error in the payment void method of the Authorizenet module has been fixed. *Fix submitted by Vishal Gelani in pull request [16603](https://github.com/magento/magento2/pull/16603)*. [GitHub-16184](https://github.com/magento/magento2/issues/16184)

<!--- MAGETWO-93763 -->

*  Magento no longer throws an error when you try to add a new shipping address to an order paid with using Braintree from the Admin.

<!--- MAGETWO-95512 -->

*  Magento now creates invoices as expected for orders created using Braintree PayPal. Previously, Magento threw an error when a merchant tried to create an invoice for an order from **Sales** > **Orders**.

<!-- MAGETWO-87154 -->

*  Magento no longer disables the **Place Order** button  after an attempt to validate a payment made with PayPal fails. [GitHub-12900](https://github.com/magento/magento2/issues/12900)

<!-- MAGETWO-87151 -->

*  Magento no longer throws an  error when you try to open an order page from the Admin or when setting the  transaction ID in a payment module. Previously, Magento threw this error: `Notice: Undefined index: value in /app/code/Magento/Backend/Block/Widget/Grid/Column/Filter/Select.php on line 72`. [GitHub-3596](https://github.com/magento/magento2/issues/3596)

<!--- MAGETWO-95512-->

*  Merchants can now create an invoice for an order placed  with PayPal.

<!--- MAGETWO-87519-->

*  The incorrect @return tag (PHPDocs)  in the `placeCheckoutOrder` method has been corrected. *Fix submitted by Aki Ojalehto in pull request [13356](https://github.com/magento/magento2/pull/13356)*.

<!---ENGCOM-1526 -->

*  The `getPaymentMethodList` method no longer sets the value of a group to null  in `$labelValues` if it already contains group-related values. Previously, the `Magento\Payment\Model\Config\Source\Allmethods` config source model did not display every available payment method. *Fix submitted by Matthias Zeis in pull request [15134](https://github.com/magento/magento2/pull/15134)*. [GitHub-13460](https://github.com/magento/magento2/issues/13460)

### Performance

<!-- MAGETWO-93753 -->

*  The price indexer is now scoped and multithreaded, which improves layered navigation, search, and indexing actions for complex sites with multiple websites and  many price books.

<!-- MAGETWO-91934 -->

*  You can change store locale without the exporting and importing configuration data. While Magento is in production mode and the `SCD_ON_DEMAND` is enabled, the Magento store and admin locale options are available. See [Change locales]({{ site.baseurl }}/cloud/live/sens-data-over.html#change-locales).

<!-- MAGETWO-90564 -->

*  The catalog rule re-indexing operation has been optimized, and average re-indexing time (which depends on rule conditions) has improved by more than  80%.  Previously, a full catalog rule re-index operation on a medium B2C store took more than 20 minutes.

### Pricing

<!-- MAGETWO-93698 -->

*  Magento now uses the current date as expected when setting the start date for a special price. Previously, Magento set the start date for a special price a few years in the future, which prevented the special price for being active.

<!-- MAGETWO-92136 -->

*  Tiered pricing and quantity increments now work as expected with decimal-based inventories.

<!--- MAGETWO-73136 -->

*  You can now add a bundle product that includes a simple product with a price of 0 (zero) to your cart. Previously, Magento threw an error. [GitHub-8969](https://github.com/magento/magento2/issues/8969)

<!--- ENGCOM-1689 -->

*  Magento now displays the correct  price on the product page for storefronts running Japanese locales. *Fix submitted by Hirokazu Nishi in pull request [15540](https://github.com/magento/magento2/pull/15540)*. [GitHub-11711](https://github.com/magento/magento2/issues/11711)

<!--- MAGETWO-87524 -->

*  Issues with configurable products with custom options and tier prices  have been resolved. Previously, the product page did not display the correct product price, but the shopping cart did. [GitHub-5774](https://github.com/magento/magento2/issues/5774)

### Product video

<!-- MAGETWO-94029 -->

*  Magento now populates the YouTube video URL and Title fields with the same values as are populated on the default store view on multisite deployments. (These fields are global scope attributes and should be the same on all storefronts.) Previously, Magento left these fields blank in multisite deployments.

<!-- MAGETWO-93270 -->

*  The product video embedding feature is now GDPR-complaint and allows the domain `youtube-nocookie.com`. Previously, when you tried to embed this URL, Magento threw an error.

### Quote

<!--- MAGETWO-84420 -->

*  You can now implement a product attribute that sets **Catalog Input Type for Store Owner** equal to  **Fixed Product Tax** in a multi-store environment. *Fix submitted by Danny Verkade in pull request 13019 [13019](https://github.com/magento/magento2/pull/13019)*.[GitHub-12393](https://github.com/magento/magento2/issues/12393)

<!--- ENGCOM-1519 -->

*  Magento now successfully saves the value of `REMOTE_IP` when a customer uses an IPV6 (Internet Protocol version 6) address. Previously, this value was only partially saved in the `sales_order` and `quote` tables. *Fix submitted by Dmytro Cheshun in pull request [15142](https://github.com/magento/magento2/pull/15142)*. [GitHub-10395](https://github.com/magento/magento2/issues/10395)

<!--- ENGCOM-2801 -->

*  A type error in `CartTotalRepository` has been resolved. Previously, `CartTotalRepository` could not handle extension attributes in quote addresses, and Magento threw a `PHP Fatal error:  Uncaught TypeError`. [GitHub-12993](https://github.com/magento/magento2/issues/12993), [GitHub-12819](https://github.com/magento/magento2/issues/12819)

<!--- ENGCOM-2482 -->

*  Magento now displays the correct product price for an order created from the Admin in multisite deployments. Previously, when an order was created from the Admin in a multisite deployment where products were assigned different prices per store view, Magento defaulted to the product price of the primary storeview if the order were edited or updated. *Fix submitted by Pratik Oza in pull request [16893](https://github.com/magento/magento2/pull/16893)*. [GitHub-14869](https://github.com/magento/magento2/issues/14869)

<!--- ENGCOM-1208 -->

*  An integrity constraint violation error no longer occurs after you reorder a product with custom options. *Fix submitted by Vinay Shah in pull request [13394](https://github.com/magento/magento2/pull/13394)*. [GitHub-12705](https://github.com/magento/magento2/issues/12705)

### Reports

<!--- MAGETWO-90338 -->

*  You can now successfully export the Ordered Products report to a CSV file. Previously, the export file contained no report data.

<!--- MAGETWO-94909-->

*  The scope selector for reports now works as expected. Previously, when a merchant set the scope to **All Websites**, the generated report showed  sales from only a subset of websites.

<!--- MAGETWO-94032-->

*  The `.csv` export of Coupon reports now shows the correct total for selected coupons. Previously, the total line in the `.csv` file showed the totals for all coupons in the selected time period, rather than just the selected coupons.

<!--- MAGETWO-63173 -->

*  Wishlist reports are available on the Admin as expected.

<!--- MAGETWO-75320 -->

*  The Low Stock report now accurately lists all out-of-stock products. Previously, this report was not accurate when the All Websites view was selected. [GitHub-10595](https://github.com/magento/magento2/issues/10595)

<!--- MAGETWO-82808 -->

*  The Admin's Most Viewed Products tab now displays all the products in all  attribute sets, not simply the default attribute set. [GitHub-9768](https://github.com/magento/magento2/issues/9768)

<!---ENGCOM-2169 -->

*  The timezone has been removed from the date when Magento retrieves the current month from a UTC timestamp. *Fix submitted by Michael Wylde in pull request [16492](https://github.com/magento/magento2/pull/16492)*. [GitHub-15940](https://github.com/magento/magento2/issues/15940)

<!--- ENGCOM-2765 -->

*  The **Year-to-date** dropdown accessed from **Stores** > **Settings** > **Configuration** > **General** > **Reports** > **Dashboard** now displays a numerical list that ranges from 01 to 12 as expected.  *Fix submitted by Ronak Patel in pull request [17495](https://github.com/magento/magento2/pull/17495)*. [GitHub-17289](https://github.com/magento/magento2/issues/17289)

<!--- MAGETWO-84811 -->

*  A valid  XML layout update handle is now preinstalled in the home page.  *Fix submitted by adrian-martinez-interactiv4 in pull request [11891](https://github.com/magento/magento2/pull/11891)*.

### Review

<!---ENGCOM-2858 -->

*  Magento now displays a `404 page not found` error when a customer tries to navigate to a product review that is not accessible. Previously, Magento displayed a PHP error code.  *Fix submitted by Malyovanets Nickolas in pull request [17721](https://github.com/magento/magento2/pull/17721)*.  [GitHub-13102](https://github.com/magento/magento2/issues/13102)

<!---ENGCOM-2380 -->

*  Magento no longer throws an error when a merchant edits a product from the Admin when reviews are disabled. *Fix submitted by Oleksandr Kravchuk*. [GitHub-6264](https://github.com/magento/magento2/issues/6264)

<!-- MAGETWO-91805 -->

*  When a customer creates a product review, the link to the product from the review in the customer's **My Account** > **My Product Review** is now SEO-friendly.

<!-- MAGETWO-95723 -->

*  The **Save and Next** and **Save and Previous**  buttons on **Marketing** > **User Content** > **All Reviews**  now work as expected.

<!---ENGCOM-1234 -->

*  Magento now checks if a product is assigned to a current website before displaying the write a review page. *Fix submitted by Mastiuhin Oleksandr in pull request [14528](https://github.com/magento/magento2/pull/14528)*. [GitHub-13010](https://github.com/magento/magento2/issues/13010)

#### Return Merchandise Authorizations (RMA)

*  `GET  V1/returns/:id` calls return tracks objects as expected.

<!-- MAGETWO-91567 -->

*  The `GET /V1/returns/:id` endpoint retrieves `tracks` arrays as expected.

<!-- MAGETWO-93787 -->

*  The `GET /V1/returns?searchCriteria` endpoint retrieves `tracks` arrays as expected.

<!-- MAGETWO-93711 -->

*  The RMA status label now shows on the email that Magento sends to customers when the status of an RMA changes.

<!-- MAGETWO-93708 -->

*  Magento now sends email when the status of a Return Merchandise Authorization (RMA) changes to Return Received, Approved, or Rejected. Previously, no email was sent to the customer who created the order.

<!-- MAGETWO-92125 -->

*  Return Merchandise Authorization (RMA) calls now return order items and comments as expected.

<!-- MAGETWO-93709 -->

*  Magento now sends email when the status of a Return Merchandise Authorization (RMA) changes to Return Received, Approved, or Rejected. Previously, no email was sent to the customer who created the order.

<!--- MAGETWO-90295 -->

*  `Magento/Rma/Block/Adminhtml/Rma/Edit/Item/Form/Element/Boolean` is a new block element that allows rendering ability for the Boolean RMA attributes on the Admin.

<!--- MAGETWO-94297 -->

*  The **Show/Hide** details button now works as expected on the Returns (RMA) page.

### Rule

<!--- MAGETWO-90329-->

*  Cart Price rules now correctly display  nesting levels for categories with nesting levels that exceed three levels.

### Sales

<!--- MAGETWO-90134 -->

*  Magento has added verification for previously set filters in `Magento/Ui/Component/Filters`, which has eliminated duplication of filters in the collection `where` conditions.

<!--- MAGETWO-90035 -->

*  Magento now shows all products as expected in the Recently Ordered list when a customer places an order that contains products from multiple stores. Previously, in installations with two storefronts, if a customer added products from both stores to the same shopping cart, and placed a single order, the recently ordered product list would not show all ordered products.

<!--- MAGETWO-91710 -->

*  The grand total for a credit memo now matches the invoiced total when a discount is applied to shipping charges.

<!--- MAGETWO-59632 -->

*  The Items Ordered list now updates as expected when the user clicks **OK** when changing the options of a configurable product during creation of an order from the Admin. Previously, the update did not occur until the user clicked **Update Items and Quantities**.

<!--- MAGETWO-91678 -->

*  Admin orders are no longer restricted by a minimum order amount. Previously, Magento required this minimum for both Admin and storefront users.

<!--- MAGETWO-70661 -->

*  Orders exported to a CSV file now display dates in a consistent format.

<!--- ENGCOM-1007 -->

*  Magento now displays text on the New Cart Rules page correctly. Previously, labels listed in the Store View Specific Labels section of this page was sometimes truncated or duplicated. *Fix submitted by rostyslav-hymon in pull request [14231](https://github.com/magento/magento2/pull/14231)*. [GitHub-12231](https://github.com/magento/magento2/issues/12231)

<!---ENGCOM-2654 -->

*  Magento now removes unneeded PDF files after generation. Previously, Magento saved a copy of every generated invoice PDF in `/var`.  *Fix submitted by Tiago Sampaio in pull request [17280](https://github.com/magento/magento2/pull/17280)*.  [GitHub-3535](https://github.com/magento/magento2/issues/3535), [GitHub-14517](https://github.com/magento/magento2/issues/14517)

<!--- MAGETWO-87066 -->

*  Magento no longer throws an error when a merchant sends an invoice for an order that contains grouped products. Previously, Magento invoiced the order but threw an error, and did not send the email. [GitHub-5105](https://github.com/magento/magento2/issues/5105)

<!---ENGCOM-1291 -->

*  Sales PDFs now support unicode fonts (GNU Free Font), which broadens language support in these PDFs. *Fix submitted by rossmc in pull request [14710](https://github.com/magento/magento2/pull/14710)*. [GitHub-9666](https://github.com/magento/magento2/issues/9666), [GitHub-12323](https://github.com/magento/magento2/issues/12323)

<!--- ENGCOM-1773 -->

*  Magento now creates  invoice numbers using the correct store view ID in a multistore environment. Previously, Magento always used the default store ID for all invoices created in a multistory environment. *Fix submitted by Vishal Gelani in pull request [15665](https://github.com/magento/magento2/pull/15665)*. [GitHub-14063](https://github.com/magento/magento2/issues/14063)

<!--- MAGETWO-89238 -->

*  Disabling invoice emails no longer degrades product performance.

<!--- ENGCOM-985 -->

*  The invoice grid now shows the correct subtotal for a partial invoice. Previously, it showed the entire order’s subtotal. *Fix submitted by AlexWorking in pull request [14209](https://github.com/magento/magento2/pull/14209)*. [GitHub-13804](https://github.com/magento/magento2/issues/13804)

<!--- ENGCOM-1110 -->

*  Magento now handles decimals properly in order quantities.  *Fix submitted by barbazul in pull request [14346](https://github.com/magento/magento2/pull/14346)*. [GitHub-14328](https://github.com/magento/magento2/issues/14328)

<!---MAGETWO-95315 -->

*  You can now filter orders by customer email. Previously, Magento threw an error when you tried to filter orders by customer email from **Sales** > **Orders**.

<!---MAGETWO-85522 -->

*  The wrong `entity_model` for `invoice` has been corrected in the `eav_entity_type` table.  *Fix submitted by Malyovanets Nickolas*.

<!--- ENGCOM-1054 -->

*  An incorrect return type in PHPdoc has been corrected. Previously, this return type resulted in multiple warnings in IDEs. *Fix submitted by julianvdrielen in pull request [14304](https://github.com/magento/magento2/pull/14304)*. [GitHub-13992](https://github.com/magento/magento2/issues/13992)

<!-- MAGETWO-87064 -->

*  Magento now syncs an order’s shipping and billing addresses as expected when a customer edits the billing address. [GitHub-10856](https://github.com/magento/magento2/issues/10856)

<!---ENGCOM-1466 -->

*  The transport variable can now be altered in the  `email_invoice_set_template_vars_before` event. *Fix submitted by gwharton*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)

### SalesRule

<!-- MAGETWO-93717 -->

*  Cart price rules with associated coupons are no longer affected by edits to scheduled updates.

<!-- MAGETWO-93692 -->

*  You can now use wildcard values in coupon codes.

<!---ENGCOM-1201 -->

*  We’ve fixed an error in discount calculations that prevented merchants from creating a rule that set a tex rate and 100% discount. Previously, when a tax rule was applied, and a  100% discount was also applied during check out, the shopping cart displayed a negative grand total. *Fix submitted by Stanislav Ilnytskyi in pull request [14468](https://github.com/magento/magento2/pull/14468)*. [GitHub-10790](https://github.com/magento/magento2/issues/10790)

### Sample data

<!---MAGETWO-85584 -->

*  The `sampledata:deploy` and `remove` commands now have `no-update` options. *Fix submitted by Fabian Schmengler in pull request [12663](https://github.com/magento/magento2/pull/12663)*.

### Search

<!---MAGETWO-70316 -->

*  The **Catalog** > **Products** page now contains a keyword search. *Fix submitted by Josef Behr in pull request   [10089](https://github.com/magento/magento2/pull/10089)*. [GitHub-5785](https://github.com/magento/magento2/issues/5785)

<!---MAGETWO-71801 -->

*  Magento no longer throws an asymmetric transaction error when you reindex in Magento deployments running Elasticsearch. *Fix submitted by Riccardo Tempesta in pull request [10610](https://github.com/magento/magento2/pull/10610)*. [GitHub-9930](https://github.com/magento/magento2/issues/9930)

<!--- MAGETWO-87064 86885 -->

*  You can now submit search criteria by clicking enter when initiating a product search from the Admin. *Fix submitted by Malyovanets Nickolas in pull request [1197](https://github.com/magento/magento2/pull/1197)*. [GitHub-4696](https://github.com/magento/magento2/issues/4696)

<!--- MAGETWO-93994 -->

*  Elasticsearch is now the default search engine in Magento. MySQL search has been deprecated.

<!--- MAGETWO-91625 -->

*  Elasticsearch now works as expected in Chinese locales.

<!--- MAGETWO-59305 -->

*  Elasticsearch no longer includes out-of-stock product options in search results.

<!--- MAGETWO-72142 -->

*  Support for Elasticsearch 5.x has been added. See [Install and configure Elasticsearch]({{ page.baseurl }}/config-guide/elasticsearch/es-overview.html) for more information about using Elasticsearch with Magento. *Fix submitted by Aurélien Foucret*.

<!--- ENGCOM-1057 -->

*  Magento no longer throws an error when a customer uses quick search to search on a term that does not exist in the search database. Previously, Magento returned this error: `TypeError: this._getFirstVisibleElement(...).addClass is not a function`.  *Fix submitted by Dragan Atanasov in pull request [14301](https://github.com/magento/magento2/pull/14301)*. [GitHub-14274](https://github.com/magento/magento2/issues/14274)

<!--- ENGCOM-969 -->

*  Magento no longer throws an error when you submit the search form in the header with an empty value.  *Fix submitted by Dmytro Paidych in pull request [14185](https://github.com/magento/magento2/pull/14185)*. [GitHub-13791](https://github.com/magento/magento2/issues/13791)

<!-- MAGETWO-91813 -->

*  Elasticsearch now correctly calculates the relevance of quick search results according to selected attribute search weights.

<!--- MAGETWO-90739 -->

*  Out-of-stock options for configurable products no longer show up in search and layered navigation results.

<!--- ENGCOM-1486 -->

*  You can now use an asterix when searching on customer names. Previously, if you used an asterix in a search query, Magento displayed this message: `Something went wrong with processing the default view and we have restored the filter to its original state.`  *Fix submitted by adrian-martinez-interactiv4 in pull request [15077](https://github.com/magento/magento2/pull/15077)*. [GitHub-14855](https://github.com/magento/magento2/issues/14855)

<!--- MAGETWO-91600 -->

*  Search synonyms are now available for all search engines deployed in your Magento store. Previously, search synonyms did not appear in the Admin menu when Elasticsearch 5.0+ was deployed.

<!--- MAGETWO-82423 -->

*  You can now limit the number of results in the search autocomplete. *Fix submitted by Max Chadwick in pull request [11572](https://github.com/magento/magento2/pull/11572)*.

<!--- ENGCOM-961 -->

*  The mini search field no longer loses focus after JavaScript is initialized. Previously, after mini search component's JavaScript loaded and initialized, search input lost focus. *Fix submitted by Mastiuhin Oleksandr in pull request [14180](https://github.com/magento/magento2/pull/14180)*.  [GitHub-13988](https://github.com/magento/magento2/issues/13988)

<!--- MAGETWO-93996 -->

*  CatalogSearch has been deprecated and replace with Elasticsearch.

<!--- MAGETWO-87587 -->

*  Sort by Product Name on the category page now works with all available filters. *Fix submitted by Ihor Sviziev in pull request [13468](https://github.com/magento/magento2/pull/13468)*.

<!--- MAGETWO-83092-->

*  An unnecessary `saveHandler` in the  CatalogSearch indexer declaration has been removed. *Fix submitted by Adrian Martinez in pull request [11626](https://github.com/magento/magento2/pull/11626)*.

<!--- MAGETWO-88082-->

*  Search synonyms in a group now can declare several words as synonyms. For example, "Elon Musk,tesla" is a valid synonym group, and a search on the phrase "Elon Musk" will also show results for the "tesla" keyword. Previously, you could declare synonyms for each word (for example, "Elon,Musk,Tesla"), but these words didn't work as a phrase. Synonyms are also now case-insensitive.

<!--- MAGETWO-72863-->

*  Searching for a value of an attribute set on the store-view level of a product now returns results. Previously, Magento returned results  only if the attribute value was entered on the all store-view levels.

<!--- MAGETWO-88082 -->

*  Search terms from the same synonym group now return the same results.

<!---ENGCOM-1815 -->

*  You can now use the **Enter** key to submit a search form. *Fix submitted by Vishal Gelani in pull request [15696](https://github.com/magento/magento2/pull/15696)*. [GitHub-13793](https://github.com/magento/magento2/issues/13793)

<!---ENGCOM-1910 -->

*  Search on MySQL-based entities has been improved. (This improvement does not provide a fulltext search, but simply the best way to search when a `SearchCriteria` with `fulltext` condition is provided over a MySQL table.) *Fix submitted by Riccardo Tempesta in pull request [15685](https://github.com/magento/magento2/pull/15685)*. [GitHub-1221](https://github.com/magento/magento2/issues/1221)

<!---ENGCOM-2588 -->

*  Magento now displays validation messages as needed on advanced searches. Previously, Magento did not display a message even after a customer submitted the advanced search form with no entries. *Fix submitted by Torben Höhn in pull request [17210](https://github.com/magento/magento2/pull/17210)*. [GitHub-8131](https://github.com/magento/magento2/issues/8131)

### Shipping

<!-- MAGETWO-93712 -->

*  The free shipping cart price rule now works as expected when **UPS shipping method** is enabled and **Free Shipping** is set to "For matching items only".

<!--- MAGETWO-94433 -->

*  The Magento UPS module has been updated to support new UPS API endpoints.

<!--- MAGETWO-59529 -->

*  You can now use `GET .V1/shipments` to search for shipments that contain a shipping label. Previously, using this call  caused Magento to throw an exception. [GitHub-6668](https://github.com/magento/magento2/issues/6668)

<!-- MAGETWO-91622 -->

*  Magento now successfully creates shipping labels for a return merchandise authorization (RMA) when using FedEx Smart Post as the shipping option. Previously, Magento threw an error under these circumstances.

<!--- ENGCOM-2326 -->

*  Multishipping checkout now works as expected. Previously, Magento displayed the `Shipping address is not set` error message  when checking out an order with multiple addresses. *Fix submitted by Dmytro Cheshun in pull request [16784](https://github.com/magento/magento2/pull/16784)*. [GitHub-16555](https://github.com/magento/magento2/issues/16555)

<!--- MAGETWO-60034 -->

*  Merchants can now ship the remaining items in an order in which some items require a credit memo.

<!--- MAGETWO-94329 -->

*  Customers can now view their completed order from the success page for orders that will be shipped to multiple addresses. Previously, when a customer took a link from the order success page to view their just-completed order, Magento displayed this error: **There has been an error processing your request**.

<!--- MAGETWO-94096 -->

*  The Shipment grid now displays the status of completed orders correctly. Previously, the Order Status column of the Shipment grid indicated that a completed was being processed.

<!--- MAGETWO-87057 -->

*  The checkout page now  displays address fields when the number of address lines has been left at the default. Previously, when the default value was configured, Magento did not display any ship-to address fields.  [GitHub-7995](https://github.com/magento/magento2/issues/7995)

<!-- MAGETWO-81976 -->

*  Shipping method radio buttons no longer have duplicate element IDs on the cart page, making it possible for customers to select a second shipping method.  [GitHub-10795](https://github.com/magento/magento2/issues/10795)

### Sitemap

<!--- MAGETWO-83292-->

*  Magento now correctly processes global product attributes when generating the sitemap. *Fix submitted by Ričards Zālītis in pull request [8999](https://github.com/magento/magento2/pull/8999)*. [GitHub-5941](https://github.com/magento/magento2/issues/5941)

<!--- MAGETWO-87562-->

*  The sitemap no longer contains `/home` in the URL generated for your store domain. [GitHub-12446](https://github.com/magento/magento2/issues/12446)

<!--- MAGETWO-87523-->

*  When an error is created during sitemap generation, Magento now sends an informative email to administrators. Previously, Magento threw a fatal error. [GitHub-10502](https://github.com/magento/magento2/issues/10502)

<!--- MAGETWO-87449-->

*  The lastmod value in the `sitemap.xml` file for a category now contains the `created_at` timestamp. Previously, this timestamp contained invalid dates.  [GitHub-9151](https://github.com/magento/magento2/issues/9151)

<!--- MAGETWO-71372-->

*  It's now easier to add additional items to a sitemap. Previously, `SitemapPlugin` worked inconsistently with large sitemaps. *Fix submitted by Piotr Kwiecinski in pull request [10442](https://github.com/magento/magento2/pull/10442)*. [GitHub-10045](https://github.com/magento/magento2/issues/10045)

<!--- MAGETWO-70707-->

*  Sitemap no longer crashes if the scope of the name attribute is set to global. [GitHub-5941](https://github.com/magento/magento2/issues/5941), [GitHub-8999](https://github.com/magento/magento2/issues/8999)

<!--- MAGETWO-70872-->

*  Sitemap no longer crashes if the scope of the name attribute is set to global. [GitHub-5941](https://github.com/magento/magento2/issues/5941), [GitHub-8999](https://github.com/magento/magento2/issues/8999)

<!---ENGCOM-2666 -->

*  Images in XML sitemap are no longer always linked to the primary store in a multistore deployment. *Fix submitted by Pratik Oza in pull request [16813](https://github.com/magento/magento2/pull/16813)*. [GitHub-15588](https://github.com/magento/magento2/issues/15588)

<!---ENGCOM-1351 -->

*  Magento now generates correct product URLS when you generate a sitemap of categories and products with **Use Categories Path for Product URLs** set to **no** ( **Stores** > **Settings** > **Configuration** > **Catalog** > **Catalog** > **Search Engine Optimization**). *Fix submitted by Mastiuhin Oleksandr in pull request [14786](https://github.com/magento/magento2/pull/14786)*. [GitHub-4788](https://github.com/magento/magento2/issues/4788)

### Staging

<!-- MAGETWO-93719 -->

*  Magento now rolls  back updated changes to their pre-update state  when a merchant deletes an active scheduled update. Previously, some products were removed from their assigned categories (and categories were removed from the Admin) when an active product update was deleted.

<!-- MAGETWO-93706 -->

*  You can now successfully re-order a configurable product. Previously, a schedule update for one configurable product affected other ordered configurable products.

<!-- MAGETWO-91743 -->

*  Magento no longer deletes products from the Admin product list after a merchant deletes its active schedule update. This deletion  appeared only after the scheduled update time.

### Store

<!-- MAGETWO-75322 -->

*  Returns from REST endpoint  `/V1/store/storeViews` calls now include  `is_active` values for stores. [GitHub-10922](https://github.com/magento/magento2/issues/10922)

<!---ENGCOM-2606 -->

*  The `getUrlInStore()` method no longer returns URLs that contain the store code, which has shortened the extremely long URLs it previously returned. *Fix submitted by Pratik Oza in pull request [17261](https://github.com/magento/magento2/pull/17261)*. [GitHub-16273](https://github.com/magento/magento2/issues/16273)

<!--- MAGETWO-87615 -->

*  You can now use an `admin_system_config_changed_section` event to subscribe to changes for all sections in **Stores** > **Settings** > **Configuration**. [GitHub-5035](https://github.com/magento/magento2/issues/5035)

<!--- MAGETWO-87938 -->

*  TinyMCE now loads successfully due to a refactoring of  the use of  `minify_exclude` configuration. *Fix submitted by Pieter Hoste in pull request [13687](https://github.com/magento/magento2/pull/13687)*. [GitHub-11577](https://github.com/magento/magento2/issues/11577)

### Swagger

<!--- MAGETWO-90787-->

*  Swagger now correctly renders POST/PUT operations. Previously, in Swagger, the text area that contained the payload structure of some POST and PUT operations was not displayed.

<!---ENGCOM-2811 -->

*  Swagger now works as expected when JavaScript minification is enabled. Previously, when JavaScript minification was enabled, the swagger-ui-bundle.js became corrupted, although Swagger worked fine when minification was subsequently disabled, and the files were redeployed. *Fix submitted by Pieter Hoste in pull request [17627](https://github.com/magento/magento2/pull/17627)*. [GitHub-16927](https://github.com/magento/magento2/issues/16927)

<!---ENGCOM-1934 -->

*  Swagger now handles `searchCriteria`-related requests as expected. *Fix submitted by Vishal Gelani in pull request [15946](https://github.com/magento/magento2/pull/15946)*. [GitHub-11477](https://github.com/magento/magento2/issues/11477)

<!--- MAGETWO-94046-->

*  Swagger now works as expected when JavaScript minification and merging are enabled.

### Swatches

<!-- MAGETWO-87155 -->

*  Visual swatches now display  swatch color in the Admin as expected. [GitHub-11828](https://github.com/magento/magento2/issues/11828)

<!-- MAGETWO-82558 -->

*  The dropdown menu that Magento displays when a user clicks on the **Add Swatch** button on the Manage Swatch tab now displays all possible options. [GitHub-11534](https://github.com/magento/magento2/issues/11534)

<!-- MAGETWO-87151 -->

*  Color attribute swatches are now visible when sorting is enabled. [GitHub-10628](https://github.com/magento/magento2/issues/10628)

<!--- MAGETWO-83292-->

*  You can now use REST to import visual swatch attribute options. Previously, you could not add swatch options using service contracts unless a swatch option already existed for the attribute. *Fix submitted by gonzalopelon in pull request [12044](https://github.com/magento/magento2/pull/12044)*. [GitHub-9410](https://github.com/magento/magento2/issues/9410), [GitHub-10707](https://github.com/magento/magento2/issues/10707), [GitHub-10737](https://github.com/magento/magento2/issues/10737), [GitHub-11032](https://github.com/magento/magento2/issues/11032)

<!--- MAGETWO-87869-->

*  The load and merge order of `view.xml` configuration in `\Magento\Swatches\Helper\Media` now matches `\Magento\Catalog\Helper\Image.` *Fix submitted by Patrick McLain in pull request [13506](https://github.com/magento/magento2/pull/13506)*. [GitHub-12647](https://github.com/magento/magento2/issues/12647)

<!--- MAGETWO-87935-->

*  We've replaced `.size()` with `.length` to be compatible with jQuery 3. *Fix submitted by Kirill Morozov in pull request [13686](https://github.com/magento/magento2/pull/13686)*.

<!--- ENGCOM-1128 -->

*  Swatch functionality that has been extended using JavaScript mixins now works as expected in Safari and Microsoft Edge. *Fix submitted by rostyslav-hymon in pull request [14247](https://github.com/magento/magento2/pull/14247)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!--- ENGCOM-1017 -->

*  You can now save a swatch attribute that has an empty option. *Fix submitted by enriquei4 in pull request [13220](https://github.com/magento/magento2/pull/13220)*. [GitHub-13117](https://github.com/magento/magento2/issues/13117)

<!--- ENGCOM-2870 -->

*  You can now change attribute type from `swatch` to `dropdown`. *Fix submitted by Malyovanets Nickolas in pull request [17750](https://github.com/magento/magento2/pull/17750)*. [GitHub-12695](https://github.com/magento/magento2/issues/12695), [GitHub-11703](https://github.com/magento/magento2/issues/11703), [GitHub-9307](https://github.com/magento/magento2/issues/9307), [GitHub-11403](https://github.com/magento/magento2/issues/11403), [GitHub-9923](https://github.com/magento/magento2/issues/9923)

### Tax

<!--- MAGETWO-83405 -->

*  Tax total amount is now equal to the sum of the tax details amounts. Previously, Magento displayed the wrong order tax amounts when using specific tax configurations. *Fix submitted by Pieter Cappelle in pull request [11594](https://github.com/magento/magento2/pull/11594)*. [GitHub-10347](https://github.com/magento/magento2/issues/10347)

<!---MAGETWO-87511 -->

*  `\Magento\Framework\Data\OptionSourceInterface::getAllOptions()` and `\Magento\Framework\Data\OptionSourceInterface::toOptionArray()` are now compatible with parent classes. *Fix submitted by Yevhen Sentiabov in pull request [34](https://github.com/magento-engcom/php-7.2-support/pull/34)*.

<!---MAGETWO-75865 -->

*  Double tags have been removed from the `config.xml` of the `Magento_Tax` module.

<!---ENGCOM-1555 -->

*  Magento no longer performs redundant tax calculations  for every price on category page, which has improved product performance. *Fix submitted by JeroenVanLeusden in pull request [15200](https://github.com/magento/magento2/pull/15200)*. [GitHub-14941](https://github.com/magento/magento2/issues/14941)

<!---MAGETWO-93394 -->

*  Magento now uses  the correct table rate shipment when creating a merchant creates an order through the Admin. Previously, when a merchant  created an order through the Admin and selected the shipping method table rate, Magento took the shipping rate table from the wrong website ID.

### Testing

<!-- MAGETWO-87154 -->

*  Integrations tests no longer throw `Cannot instantiate interface Magento\Framework\Interception\ObjectManager\ConfigInterface` errors. [GitHub-12844](https://github.com/magento/magento2/issues/12844)

<!-- MAGETWO-87064 -->

*  Integration tests now reset the integration test database as expected.  [GitHub-10025](https://github.com/magento/magento2/issues/10025)

<!---MAGETWO-82550 -->

*  A typo in `dev/tests/functional/tests/app/Magento/Paypal/Test/TestCase/OnePageCheckoutTest.xml` has been fixed. [GitHub-7591](https://github.com/magento/magento2/issues/7591)

<!---MAGETWO-87317 -->

*  Static tests now check for the deprecated `each()` function. *Fix submitted by Yevhen Sentiabov in pull request [31](https://github.com/magento-engcom/php-7.2-support/pull/31)*.

<!---MAGETWO-85993 -->

*  The `functional.suite.dist.yml` has been updated to handle custom backend names. (This value was previously hard-coded.) *Fix submitted by scribam in pull request [12848](https://github.com/magento/magento2/pull/12848)*.

<!---MAGETWO-85817 -->

*  The `validate_image_info_rollback.php` test suite has been updated. *Fix submitted by Harry Mumford-Turner in pull request [12800](https://github.com/magento/magento2/pull/12800)*.

<!---MAGETWO-90803 -->

*  `phpunit.xml` is now blacklisted during schema validation static tests, particularly `Magento/Test/Integrity/Xml/SchemaTest.php`.

<!--- MAGETWO-81646 -->

*  The `\Magento\Test\Php\LiveCodeTest::testCodeStyle`  method now uses whitelist files. *Fix submitted by Adrian Martinez in pull request [11376](https://github.com/magento/magento2/pull/11376)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!--- ENGCOM-1257 -->

*  Integration test coverage for the new extension point for New Shipment Controller has been added. *Fix submitted by Malyovanets Nickolas in pull request [14634](https://github.com/magento/magento2/pull/14634)*. [GitHub-788](https://github.com/magento/magento2/issues/788)

<!--- ENGCOM-1093 -->

*  `sjparkinson/static-review` and other obsolete tools  (including `dev/tools/Magento/Tools/Layout`, `dev/tools/Magento/Tools/StaticReview/pre-commit`, and `dev/tools/Magento/Tools/psr/phpcs_precommit_hook.sh`) have been removed from the test code base. *Fix submitted by rostyslav-hymon in pull request [14368](https://github.com/magento/magento2/pull/14368)*. [GitHub-14138](https://github.com/magento/magento2/issues/14138)

<!--- ENGCOM-1031 -->

*  Integration tests for product URL rewrite generation have been added.  *Fix submitted by rostyslav-hymon in pull request [14252](https://github.com/magento/magento2/pull/14252)*.

<!--- ENGCOM-2138 -->

*  The `ProcessCronQueueObserverTest.php` integration test now works correctly. *Fix submitted by Eino Keskitalo in pull request [16253](https://github.com/magento/magento2/pull/16253)*. [GitHub-16243](https://github.com/magento/magento2/issues/16243)

<!--- ENGCOM-2409 -->

*  `setCateroryIds([])` has been corrected to `setCategoryIds([])` throughout the test suites.  *Fix submitted by Pratik Oza in pull request [16926](https://github.com/magento/magento2/pull/16926)*. [GitHub-15590](https://github.com/magento/magento2/issues/15590)

<!--- ENGCOM-1968 -->

*  `CreateOrderBackendTest` has been refactored to support the  **Reorder** button when Inventory Management is enabled. *Fix submitted by Malyovanets Nickolas in pull request [16006](https://github.com/magento/magento2/pull/16006)*. [GitHub-680](https://github.com/magento/magento2/issues/680)

<!---MAGETWO-87058 -->

*  Unit tests have been refactored to no longer check for deleted file `app/code/Magento/Catalog/Model/ResourceModel/Product/Indexer/Eav/AbstractEav.php`. [GitHub-11230](https://github.com/magento/magento2/issues/11230)

<!--- ENGCOM-2028 -->

*  `CreateCreditMemoEntityTest` has been refactored to support the Inventory Management reservation mechanism.  *Fix submitted by Malyovanets Nickolas in pull request [16170](https://github.com/magento/magento2/pull/16170)*.

<!--- ENGCOM-2026 -->

*  `CreateOrderBackendPartOneTest` has been refactored to support the Inventory Management reservation mechanism. *Fix submitted by Malyovanets Nickolas in pull request [16153](https://github.com/magento/magento2/pull/16153)*.

### Theme

<!--- MAGETWO-88973 -->

*  Customers can now successfully close full-screen zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if a customer chose full-screen zoom for any product image, he could not close the full-screen zoom.

<!--- MAGETWO-88264 -->

*  The forced setting of `cache_lifetime` to `false`  has been changed to a default `cache_lifetime` value of 3600 for `Magento\Theme\Block\Html\Footer`. [GitHub-13595](https://github.com/magento/magento2/issues/13595)

<!--- ENGCOM-959 -->

*  The default storefront welcome message now works as expected when the **Translate Inline**  (**Stores > Settings > Configuration > Advanced > Developer >**) setting is enabled.  *Fix submitted by Dmytro Paidych in pull request [14177](https://github.com/magento/magento2/pull/14177)*.  [GitHub-12711](https://github.com/magento/magento2/issues/12711)

<!--- ENGCOM-775 -->

*  We've improved the display of the Payment Methods section of the checkout page on mobile devices. Previously, the layout of page elements was not correctly spaced.  *Fix submitted by Marcin Kwiatkowski in pull request [13979](https://github.com/magento/magento2/pull/13979)*. [GitHub-13315](https://github.com/magento/magento2/issues/13315)

### Translation and locales

<!---MAGETWO-82650 -->

*  The `<![CDATA[]]>` statement in `system.xml` now works as expected. *Fix submitted by Nickolas Malyovanets in pull request [11679](https://github.com/magento/magento2/pull/11679)*. [GitHub-7767](https://github.com/magento/magento2/issues/7767)

<!---MAGETWO-71380 -->

*  The JavaScript translation for validation messages now works for customer account pages. *Fix submitted by Anton Evers in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-5820](https://github.com/magento/magento2/issues/5820)

<!--- MAGETWO-71380-->

*  Messages on password strength are now translatable. *Fix submitted by Anton Evers in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-5509](https://github.com/magento/magento2/issues/5509)

<!--- 71380-->

*  The JavaScript translation regex no longer leads to unexpected results and untranslatable strings. *Fix submitted by Anton Evers in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-7403](https://github.com/magento/magento2/issues/7403)

<!--- MAGETWO-71380-->

*  All messages in Customer Account Create are now translatable. Previously, warning messages about password validation appeared in locale language only. *Fix submitted by Anton Evers in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-9967](https://github.com/magento/magento2/issues/9967)

<!-- MAGETWO-93708 -->

*  We've added  client-side caching of `js-translation.js`.

<!-- MAGETWO-94119 -->

*  The datepicker date filter on **Reports** > Products > **Ordered** now works as expected for administrators working in Australian English locales.

<!--- ENGCOM-1055 -->

*  Magento now supports Malaysian locales. *Fix submitted by Oscar Recio in pull request [14305](https://github.com/magento/magento2/pull/14305)*. [GitHub-14089](https://github.com/magento/magento2/issues/14089)

<!--- ENGCOM-2041 -->

*  The string for `moreButtonText` in `app/code/Magento/Swatches/view/frontend/web/js/swatch-renderer.js` can now be translated. *Fix submitted by Karla Saaremäe in pull request [16228](https://github.com/magento/magento2/pull/16228)*. [GitHub-16079](https://github.com/magento/magento2/issues/16079)

<!--- ENGCOM-2212 -->

*  Magento now displays the correct  price on the product page for storefronts running Japanese locales.  *Fix submitted by Volodymyr Kublytskyi in pull request [16588](https://github.com/magento/magento2/pull/16588)*.  [GitHub-11717](https://github.com/magento/magento2/issues/11717)

<!--- ENGCOM-2400 -->

*  The module responsible for generating the `js-translations.json` file now contains a routine that translates strings in tags. *Fix submitted by Pratik Oza in pull request [16892](https://github.com/magento/magento2/pull/16892)*. [GitHub-12081](https://github.com/magento/magento2/issues/12081)

<!-- MAGETWO-87066 -->

*  Magento now displays the correct payment method title on the payments page during checkout in multistore deployments where storeviews implement different locales. [GitHub-7582](https://github.com/magento/magento2/issues/7582)

<!-- MAGETWO-87066 -->

*  The hint provided for the global configuration field on the Admin configuration page has been corrected. [GitHub-8958](https://github.com/magento/magento2/issues/8958)

<!-- MAGETWO-87066 -->

*  `region_id` is no longer overridden when a customer edits their billing address from a country that requires a value for state to a country where one is not required. [GitHub-10317](https://github.com/magento/magento2/issues/10317)

### UI

<!-- MAGETWO-93715-->

*  Magento no longer sends duplicate delete requests as a result of an unstable Internet connection. Previously, unintentional mass deletion of products sometimes occurred as a result of an unstable Internet connection.

<!-- MAGETWO-91848 -->

*  As you type additional characters into the text field for a product's custom option, the hint showing the number of characters left before reaching the maximum now decreases as expected.

<!-- MAGETWO-83412 -->

*  Previously missing translation strings have been added to the UI module. *Fix submitted by Jeroen Van Leusden in pull request 11440*. [GitHub-5956](https://github.com/magento/magento2/issues/5956)

<!--- ENGCOM-1457 -->

*  Administrators who lack access to the CatalogRule module can now perform operations as expected in the Admin cart price rule edit page.  *Fix submitted by Prince Patel in pull request [16664](https://github.com/magento/magento2/pull/16664)*.  [GitHub-15009](https://github.com/magento/magento2/issues/15009), [GitHub-12285](https://github.com/magento/magento2/issues/12285)

<!--- ENGCOM-1541 -->

*  The UI component configuration XSD file (`ui-configuration.xsd`) now constrains settings so that `abstractSettings`, such as `<label>`, can only be placed and read from the top-level `<settings>` nodes, while component-specific settings, such as `<options>`, can only be placed and read from the appropriate `<settings>` descendent of `<formElements>`. *Fix submitted by Neill Robson in pull request 15161*. [GitHub-14140](https://github.com/magento/magento2/issues/14140)

<!--- ENGCOM-2219 -->

*  Users can now press the **Esc** button on  the delete-from-cart confirmation pop-up window  without generating a `jQuery` UI error. Previously, when a customer added a product to the shopping cart, then pressed the trash icon to delete it, Magento displayed this confirmation pop-up window, but threw an error when the customer pressed the window's **Esc** button. [GitHub-14593](https://github.com/magento/magento2/issues/14593)

<!--- ENGCOM-2243 -->

*  The `font-size` variable has been updated and standardized. *Fix submitted by Prince Patel in pull request [16664](https://github.com/magento/magento2/pull/16664)*.  [GitHub-7399](https://github.com/magento/magento2/issues/7399)

<!--- ENGCOM-2340 -->

*  We've added the `@navigation-level0-item__hover__color` missing variable for mobile and tablet view. *Fix submitted by hitesh-wagento in pull request [16796](https://github.com/magento/magento2/pull/16796)*.  [GitHub-15848](https://github.com/magento/magento2/issues/15848)

<!--- ENGCOM-2878 -->

*  Footers now behave as expected when displaying Magento on a mobile device. *Fix submitted by Malyovanets Nickolas in pull request [17809](https://github.com/magento/magento2/pull/17809)*. [GitHub-15118](https://github.com/magento/magento2/issues/15118)

<!--- ENGCOM-2690 -->

*  The unused totalbar block has been removed from the invoice create and credit memo create layouts. *Fix submitted by Danny Verkade in pull request 17414*. [GitHub-16653](https://github.com/magento/magento2/issues/16653), [GitHub-16655](https://github.com/magento/magento2/issues/16655)

<!--- ENGCOM-2824 -->

*  The JavaScript validation rule used to validate AM/PM time settings now works as expected when JavaScript is minified.  *Fix submitted by Dmytro Cheshun in pull request [17688](https://github.com/magento/magento2/pull/17688)*.[GitHub-17648](https://github.com/magento/magento2/issues/17648)

<!--- ENGCOM-2839 -->

*  The message list component message type now has a message type of success. Previously, this type was always `error` when the `parameters` property was specified.  *Fix submitted by Dmytro Cheshun in pull request [17703](https://github.com/magento/magento2/pull/17703)*. [GitHub-17700](https://github.com/magento/magento2/issues/17700)

<!--- ENGCOM-2918 -->

*  Magento now displays the wishlist icon on the shopping cart page on mobile devices. Previously, Magento cut off the wishlist icon on this page when viewed on a mobile device. *Fix submitted by hitesh-wagento in pull request [17911](https://github.com/magento/magento2/pull/17911)*. [GitHub-17851](https://github.com/magento/magento2/issues/17851)

<!--- ENGCOM-2861 -->

*  JavaScript validation rules no longer require validation of fields where completion is not required. Previously, customers could not complete forms unless non-required fields were completed.  *Fix submitted by Malyovanets Nickolas in pull request [17724](https://github.com/magento/magento2/pull/17724)*.[GitHub-16544](https://github.com/magento/magento2/issues/16544)

<!--- ENGCOM-2323 -->

*  When a user scrolls a page, the datepicker now retains its position relative to other page elements as expected. *Fix submitted by hitesh-wagento in pull request 16776*. [GitHub-7903](https://github.com/magento/magento2/issues/7903)

<!--- ENGCOM-2649 -->

*  The confirmation modal buttons that Magento displays when a customer sends a product to the trash are now translated as expected. *Fix submitted by torhoehn in pull request [17359](https://github.com/magento/magento2/pull/17359)*.[GitHub-17193](https://github.com/magento/magento2/issues/17193)

<!--- ENGCOM-1810 -->

*  The dropdown menu is now positioned as expected under the link on the UI Component listing. *Fix submitted by Vishal Gelani in pull request [15746](https://github.com/magento/magento2/pull/15746)*.  [GitHub-15660](https://github.com/magento/magento2/issues/15660)

<!---MAGETWO-82721 -->

*  Magento no longer displays the current date for a product when the `date` attribute is empty. [GitHub-9869](https://github.com/magento/magento2/issues/9869)

<!---MAGETWO-87066 -->

*  Magento no longer throws a JavaScript error when a user enters a special character (for example, `/` or `&`) while adding the `stripped-min-length` validation to a UI component. [GitHub-9920](https://github.com/magento/magento2/issues/9920)

<!---MAGETWO-87531 -->

*  Magento no longer throws an `Uncaught Error: Script error for: trackingCode` error on storefront pages. [GitHub-12828](https://github.com/magento/magento2/issues/12828)

<!---MAGETWO-87153 -->

*  `range-word` validation for form fields now works as expected. [GitHub-6113](https://github.com/magento/magento2/issues/6113)

### URL rewrites

<!--- MAGETWO-85026-->

*  Magento now sets the value of `Store_Code` from the current store when this information is included in a URL. *Fix submitted by Oscar Recio in pull request [12545](https://github.com/magento/magento2/pull/12545)*. [GitHub-12450](https://github.com/magento/magento2/issues/12450)

<!--- MAGETWO-82310-->

*  Magento now loads `urlrewrite` router before the Magento base router. Previously, the Magento custom URL rewrite functionality did not work when you added an additional redirection (for example, a custom redirection from `/customer/account/create` to another page). *Fix submitted by Marc Rodriguez in pull request [11471](https://github.com/magento/magento2/pull/11471)*. [GitHub-10231](https://github.com/magento/magento2/issues/10231)

<!--- MAGETWO-88091-->

*  Switching store views now works as expected. Previously, under some conditions, users were redirected to a 404 page.[GitHub-5416](https://github.com/magento/magento2/issues/5416)

<!--- MAGETWO-88091-->

*  You can now reset a form by clicking **Reset** in **Marketing** > SEO & Search > **URL Rewrites**. [GitHub-10459](https://github.com/magento/magento2/issues/10459)

<!-- MAGETWO-91808 -->

*  Categories of the Main menu in the different store view are now updated when Varnish is enabled.

<!--- MAGETWO-90798 -->

*  Magento no longer throws a 404 error when a customer navigates from the Catalog page of the default store to a custom Catalog page on a different store.

<!--- MAGETWO-71407 -->

*  The **Reset** button no longer causes a JavaScript error on the URL rewrite creation page. [GitHub-10462](https://github.com/magento/magento2/issues/10462)

<!--- ENGCOM-1210 -->

*  The Magento URL rewrite functionality now supports the use of special characters in category names. Previously, the category tree did not load if a category name contained a special character.  *Fix submitted by Vinay Shah in pull request [13402](https://github.com/magento/magento2/pull/13402)*.  [GitHub-13296](https://github.com/magento/magento2/issues/13296)

### Visual Merchandiser

<!--- MAGETWO-87846 -->

*  Visual Merchandiser now includes website scope when displaying the correct prices and availability of configurable products.

<!--- MAGETWO-72861 -->

*  We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).

### Web API

<!--- MAGETWO-82315  -->

*  When you use REST to update an existing product, Magento assigns the update only to the websites that they were assigned to before the update. Previously, updating a product using the REST API (`PUT /rest/all/V1/products/example_sku`) assigned the product update to all websites automatically. *Fix submitted by adrian-martinez-interactiv4 in pull request [11443](https://github.com/magento/magento2/pull/11443)*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- MAGETWO-90147  -->

*  When you create a credit memo comment with `POST /V1/creditmemo/:id/comments`, Magento now sends  credit memo update emails as expected. Previously,  Magento did not send this email, and no other transaction emails were sent to the customer.

<!--- MAGETWO-84319  -->

*  Magento no longer creates duplicate shipments for orders created via API. Previously, Magento created duplicate shipments when a merchant created a shipment via the API under certain conditions (mainly with bundled products).

<!--- MAGETWO-91540  -->

*  Product searches using `GET V1/products` return `extension_attributes` for configurable products as expected.

<!--- MAGETWO-91568  -->

*  You can now include custom attributes when filtering the responses of REST calls.

<!--- MAGETWO-94207  -->

*  Magento now returns a 404 error and includes a descriptive error message when a  REST search is performed on a non-existent cart.

<!--- MAGETWO-81910  -->

*  Magento now includes the filter groups and the sort order of the `$searchCriteria` parameter in the `searchCriteria` object that is provided for the EAV set repository. [GitHub-11022](https://github.com/magento/magento2/issues/11022)

<!--- MAGETWO-82315  -->

*  Updating a product with the REST API (`PUT /rest/all/V1/products/example_sku`) no longer assigns the product to all websites automatically. (Automatic assignment to all websites now occurs only when you create the product in All Store Views scope.) [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- ENGCOM-2066  -->

*  A generated Admin API token no longer expires immediately. Previously, when you created a token for an administrative user and have set   **Admin Token Lifetime (hours))**  to empty, Magento denied access  because the token immediately expired.  *Fix submitted by Vijay Golani in pull request [15564](https://github.com/magento/magento2/pull/15564)*. [GitHub-15564](https://github.com/magento/magento2/issues/15564)

<!-- MAGETWO-87057  -->

*  Magento now checks for the uniqueness of attribute option values for attributes created via REST. [GitHub-8846](https://github.com/magento/magento2/issues/8846)

<!--- MAGETWO-87152  -->

*  `salesRefundInvoiceV1` now saves the invoice ID as expected for a credit memo. [GitHub-11669](https://github.com/magento/magento2/issues/11669)

### Wishlist

<!--- MAGETWO-85627  -->

*  Magento now displays an error message if you try to add products to a wishlist without first logging in. *Fix submitted by Pieter Cappelle in pull request [12681](https://github.com/magento/magento2/pull/12681)*.

<!--- MAGETWO-86101  -->

*  Magento now stores product IDs and SKUs to locally stored customer data for wishlists. *Fix submitted by James Halsall in pull request [12896](https://github.com/magento/magento2/pull/12896)*.

<!--- MAGETWO-90297  -->

*  `SearchCriteriaBuilder` now has a check to determine if sort order should be applied. Previously, `SearchCriteriaBuilder` built the wrong criteria (`ORDER BY part`). *Fix submitted by Nickolas Malyovanets*. [GitHub-5738](https://github.com/magento/magento2/issues/5738)

<!--- MAGETWO-91615  -->

*  Registered users can now create new wishlists as expected when multiple wishlists are enabled. Previously, Magento displayed an error.

<!--- MAGETWO-91433  -->

*  Magento no longer changes the grid view to list view on the product list page when a customer adds a product from the wishlist section to the cart, and now displays the appropriate success message.

## Known issues

**Known issue:** After installing a module and running `setup:upgrade`, you must run `cache:clean config`.

**Known issue:** When installing or upgrading Magento and upgrading PHP to 7.2, you must specify an encryption key value of 32 symbols (256 bits) or Magento will throw an error, and any sensitive, unsaved configuration data will be lost. When upgrading Magento and upgrading  PHP to 7.2, make sure that your encryption key is exactly 32 symbols. To do this, navigate to  **System** > Other Settings > **Manage Encryption Key** and either enter a new key or generate a new one. To change the key, make sure that `app/etc/env.php` is writable.

**Known issue:** Magento throws the following error when you try to use the API to create two products with the same name without specifying the URL key: `URL key for specified store already exists.`  However, when you try to create these products through the Admin, Magento does not throw an error, but instead appends a number to the converted URL key if two products have the same name.

<!-- https://github.com/magento/inventory/issues/1890  -->**Known issue:** Currently, ElasticSearch is supported only in Single Source mode for the Default Source. It is not supported in Multi Source mode with custom sources.

**Known issue:** For Inventory Management, Single Source merchants may experience performance degradation with all products assigned to the Default Source and Default Stock. As a workaround for best performance, we recommend creating and assigning all products to one custom source and stock. This will affect bundled products support. To continue with bundled products, continue using Default Source and Stock in Single Source mode. We plan to have a resolution and bundled product multi-sourcing support in a later release. This does not affect Multi Source merchants. For details, see [Inventory Management](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html).

**Known issue:** For B2B merchants, please assign products to the Default Source and Default Stock for complete support. We will provide complete B2B support in a later release.

**Known issue:** The `bin/magento setup:install — convert-old-scripts` command, which is used to create declarative schema files, has the following limitations. These limitations will be addressed in a future release:

*  Only tables and columns are currently supported.

*  Renaming of tables is not supported.

**Known issue:** You cannot use the Magento Extension Manager to install extensions purchased from the Magento Marketplace. **Workaround**: Install extensions from the command line as described in [General CLI installation]({{ site.baseurl }}/extensions/install/).  See [Extension Manager shows no extensions in Magento Commerce 2.3.x](https://support.magento.com/hc/en-us/articles/360043980352).

## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-0-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-0-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements.html)

For more information, see [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.3.0  using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
