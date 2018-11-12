---
group: release-notes
title: Magento Commerce 2.3.0 Release Notes
---

*Release notes published November 27, 2018.*



We are pleased to present Magento Commerce 2.3.0 General Availability. This release includes numerous functional fixes and enhancements. tml). 


## Highlights

Magento Commerce 2.3.0 includes a wealth of new features as well as hundreds of enhancements and fixes to the core product. Look for the following highlights in this release:

### New features

This release introduces significant tools to improve the developer experience: PWA Studio, alternatives to SOAP and REST, and a flexible frontend  API for frontend, headless, and mobile development.

* **PageBuilder** is a drag-and-drop visual content editing tool that lets merchants customize the appearance of their storefront without writing any HTML or CSS. PageBuilder Beta code will be available in 2018 Q4. Registered participants will be able to install PageBuilder Beta on Magento 2.3.0 Commerce code.  Watch this space for more information about participating in the PageBuilder Beta program plus installation instructions. 


* **PWA Studio** is a set of tools that support the development, deployment and maintenance of progressive web applications. See [Magento PWA documentation](https://magento-research.github.io/pwa-studio/) for information about this toolset as well as information about contributing to this ongoing project.  


* **Declarative schema** simplifies installation and upgrade procedures for Magento and extensions. Declarative schema reduce the need for many database scripts, eliminating the need to maintain these scripts. And here's a big advantage: This features enables Magento to roll out database schema changes in patch releases (not currently possible). This feature supports split and shared database structures and database structure validation. 


* **GraphQL API** provides an alternative to REST and SOAP web APIs for frontend development. See [GraphQL Developer Guide]({{site.baseurl}}/guides/v2.3/graphql/index.html) for more information about Magento's implementation of this data query language. 


* **Inventory Management (MSI)** lets merchants manage physical inventory across locations in Magento. Merchants can represent multiple locations (sources) for physical inventory in Magento. Sources can be grouped into stocks to create inventory pools that can be defined for one or more websites. Merchants can manipulate inventory based on sources. Magento also provides an API for source operations that helps merchants customize inventory actions or third-party order management systems to perform the same actions in an automated way. 

### Core product improvements

* **Updates to Magento's tech stack (including upgraded PHP support)** include upgrades to Redis, MySQL, Elasticsearch, compatibility with PHP 7.2. 

* **Improvements to import and export**  focus on enhancements to existing processes, including the  addition of new object types. 

* **Elasticsearch support for Magento Community version**. Elasticsearch support was previously provided in Magento Commerce only. 

* **Improvements to release packaging** plus an increase in test automation, results in a faster, more efficient release process and improved product quality. 

* **CMS enhancements** include banner enhancements. You can now create banner content in native Magento WYSIWYG or Page Builder. (Within the product interface, we now use the term  “dynamic block” instead of  “banner”.) We've also updated the WYSIWYG editor to use TinyMCE 4.6. (TinyMCE is now integrated into Magento through an adapter that allows it to be replaced with any other WYSIWYG editor.) 

* **Security enhancements** 

    * Cache flush ACL provides granular access to cache management settings to prevent accidental changes that could potentially affect system performance. This ACL also lets merchants control which administrative users can clear site caches. 

    * 2FA/CAPTCHA protects the Admin panel against against stolen passwords and protects stores against bots.

* **Change in versioning for B2B product** to match the versioning of the core product. 

## Known issues



## Fixed issues

We've fixed hundreds of issues for Magento 2.3.0. 

### Installation, upgrade, deployment
 
<!--- MAGETWO-83409, MAGETWO-81578-->* The `bin/magento setup` command now provides a rollback option that prompts the user to optionally retain files for future rollbacks. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request 11750*. [GitHub-6460](https://github.com/magento/magento2/issues/6460)

<!--- MAGETWO-82781-->* The `user.ini` files now recommend the correct values for `php_value memory_limit`. 
*Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [11760](https://github.com/magento/magento2/pull/11760)*. [GitHub-11322](https://github.com/magento/magento2/issues/11322)

<!--- MAGETWO-81992-->* You can now use the `bin/magento cron:install`  and `cron:remove` commands to install or uninstall cron across multiple Magento installations with the same crontab. Previously, you could not create different crontab entries for multiple Magento installations that were in different folders because they used the same `#~ MAGENTO START` and `#~ MAGENTO END` suffixes. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11360](https://github.com/magento/magento2/pull/11360)*. 

<!--- MAGETWO-81965-->* The default time setting for `cron` success  and failure history is now seven days. *Fix submitted by [Max Chadwick](https://github.com/mpchadwick) in pull request [11463](https://github.com/magento/magento2/pull/11463)*.

<!--- MAGETWO-82752-->* In Magento deployments using multiple languages, the `Framework/translation.php` constructor that sets a store's locale now uses the correct locale. *Fix submitted by [Wiard van Rij](https://github.com/wiardvanrij) in pull request [10913](https://github.com/magento/magento2/pull/10913)*. [GitHub-10673](https://github.com/magento/magento2/issues/10673)

<!--- MAGETWO-82294-->* The `.htaccess` template now uses apache2.4 syntax. *Fix submitted by [Jonas Hünig](https://github.com/jonashrem) in pull request [11466](https://github.com/magento/magento2/pull/11466)*. [GitHub-10810](https://github.com/magento/magento2/issues/10810)

<!--- MAGETWO-69895-->* When a callback during commit throws an exception, the calling plugin can now distinguish this exception from a unsuccessful commit, and logs an exception. Previously, Magento threw an “Asymmetric transaction rollback error”. *Fix submitted by [Wayne Theisinger](https://github.com/waynetheisinger) in pull request [9955](https://github.com/magento/magento2/pull/9955)*.  [GitHub-6497](https://github.com/magento/magento2/issues/6497)

<!---MAGETWO-71744 -->* The links that the Admin panel provides to backup packages now link to the expected packages. Previously, these links permitted you to download only the latest backup package. *Fix submitted by [will-b](https://github.com/will-b) in pull request [10593](https://github.com/magento/magento2/pull/10593)*.  [GitHub-10032](https://github.com/magento/magento2/issues/10032)

<!---MAGETWO-71359 -->* All `cron` schedule times are now saved in UTC and then displayed to the user in the expected time zone. Previously, the `cron` schedule times in the database were in local date time formats and not UTC, while the other system dates and times were saved as UTC in the database. This resulted in varying and potentially confusing *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10432](https://github.com/magento/magento2/pull/10432)*. [GitHub-4237](https://github.com/magento/magento2/issues/4237)

<!---MAGETWO-94844 -->* You can install and deploy Magento without first creating an administrator account. 

<!---MAGETWO-93699 -->* Improved the cron job management process during the deploy phase to prevent database locks and other critical issues. Now, all cron jobs stop during the deploy phase and restart after deployment completes

<!---MAGETWO-91863 -->* Statistics collection for the Reports module is now disabled by default. To enable or partially disable it, see **System Configuration** > **General** > **Reports**. Note that certain product features, such as  Magento Commerce dynamic customer segments (specifically the ones based on viewed products), rely on Reports data collection to function properly. 

<!---MAGETWO-88281 -->* You can now add a new IP address to an existing list by appending the new address with the `- add` flag rather than replacing a former address with a new one.  *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request [13783](https://github.com/magento/magento2/pull/13783)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!---MAGETWO-88045 -->* Magento now provides an input/output helper object that supports easier access to styling objects in the Symfony console. (This helper is instantiated inside a command object's methods (usually interact and execute but not limited to) like this: `$io = new MagentoStyle($input,$output);`.) *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13741](https://github.com/magento/magento2/pull/13741)*. 

<!---MAGETWO-88258 -->* The `.htaccess` file in the `pub/static` folder now includes a `RewriteBase` directive, which supports the installation of Magento under a directory inside the web root. Note: Setting this directive in the `.htaccess` file in Magento root  without setting it in `.htaccess` under `pub/static`  will result in a missing file.  *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13788](https://github.com/magento/magento2/pull/13788)*. 

<!---MAGETWO-88017 -->* The list of IP addresses for maintenance status no longer includes commas, which facilitates directly copy and pasting the addresses as needed.  *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13727](https://github.com/magento/magento2/pull/13727)*. 

<!---MAGETWO-86717 -->* All existing installation and data scripts have been converted into declarative schema data patches for easier deployment. 

<!---MAGETWO-86567 -->* `PhpFormatter` has been refactored to recursively return the array representation using short array syntax `[]` instead of long `array()`. If the given variable is not an array, it uses the standard `var_export` behavior. This change support Magento coding standards. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [1193](https://github.com/magento/magento2/pull/1193)*. [GitHub-758](https://github.com/magento/magento2/issues/758)

<!---MAGETWO-86276 -->* The icons that represent the Extension Manager and Module Manager in the main area and left-hand menu of the Web Setup Wizard have been refactored for consistency with Magento UI guidelines. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12960](https://github.com/magento/magento2/pull/12960)*. [GitHub-11236](https://github.com/magento/magento2/issues/11236)

<!--- MAGETWO-87025 -->*  You can now deploy static content on demand while in production mode.

<!--- MAGETWO-84646 -->* Magento now restarts cron jobs as needed after a cron job was terminated during execution.

<!--- MAGETWO-88212 85273 -->* The `CrontabManager.php` file has been updated as follows: If `crontab` has already been populated, the `bin/magento cron:install` command adds `#~ MAGENTO START` and the rest of code directly to the last row of crontab without any spaces. *Fix submitted by [Michele Fantetti](https://github.com/WaPoNe) in pull request [12609](https://github.com/magento/magento2/pull/12609)*.

<!--- MAGETWO-71059 -->* `Zend_Json` in the setup `PackagesAuth` has been replaced with the new Serializer\Json. [GitHub-9236](https://github.com/magento/magento2/issues/9236)

<!--- MAGETWO-71896 -->* Static versioning and minification no longer  break email font styles. [GitHub-8241](https://github.com/magento/magento2/issues/8241)

<!--- MAGETWO-82461 -->* We've fixed an issue with using the command line to install or remove `crontab`. Previously, installing or removing `crontab` via the command line appended `2>&1` to entries, even those not related to Magento. [GitHub-11586](https://github.com/magento/magento2/issues/11586)

<!--- ENGCOM-1187 -->* The **Back** button that was previously accessible during the first step of installation has been disabled. *Fix submitted by [Mastiuhin Oleksandr](https://github.com/mastiuhin-olexandr) in pull request  [14460](https://github.com/magento/magento2/pull/14460)*. [GitHub-14307](https://github.com/magento/magento2/issues/14307)

<!--- ENGCOM-1108 -->* Multifields that previously lacked labels in forms now display labels. *Fix submitted by [Rostyslav](https://github.com/rostyslav-hymon) in pull request  [14383](https://github.com/magento/magento2/pull/14383)*. [GitHub-7428](https://github.com/magento/magento2/issues/7428)

<!--- ENGCOM-1360 -->* The `app:config:dump` command now has an argument that supports dumping only the specified settings that are required to prepare static content on a build system, not all system settings. This new option (`config-types`) makes it possible to dump scopes and themes automatically (which are needed for a build system) while managing system settings manually using `config:set --lock-config`. [GitHub-11396](https://github.com/magento/magento2/issues/11396) 


<!--- MAGETWO-86569 -->* You can now switch to default mode from production mode. Previously, if you tried to switch back to default mode, Magento displayed this error, `Cannot switch into given mode 'default'`. [GitHub-4292](https://github.com/magento/magento2/issues/4292) 

<!--- MAGETWO-87152 -->*  The Web Setup wizard no loads successfully when session storage is configured to use memcache in `env.php`. [GitHub-9633](https://github.com/magento/magento2/issues/9633)

<!--- MAGETWO-87562 -->*  Triggers now work as expected during database backup. Previously, triggers were missing, which resulted in incorrect indexing. [GitHub-9036](https://github.com/magento/magento2/issues/9036)

<!--- MAGETWO-87562 -->*  Magento no longer automatically disables maintenance mode during a scheduled back up. [GitHub-9918](https://github.com/magento/magento2/issues/9918)

<!--- MAGETWO-87562 -->*  Database rollback with SSH now works as expected. [GitHub-12064](https://github.com/magento/magento2/issues/12064)

<!---MAGETWO-87524 -->*  New command-line interface commands that support enabling and disabling the Magento Profiler have been added. See [Enable profiling (MAGE_PROFILER)](https://devdocs.magento.com/guides/v2.2/config-guide/bootstrap/mage-profiler.html) for more information. [GitHub-9277](https://github.com/magento/magento2/issues/9277)



#### Web server configuration

<!---MAGETWO-87916 -->* `web/unsecure/base_url` config has been added to website and store scope. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [13659](https://github.com/magento/magento2/pull/13659)*. 

<!---MAGETWO-87748 -->* The `static/` string has been removed from the `resource` parameter, allowing `static.php` to generate the specified resource correctly. *Fix submitted by [Daniel](https://github.com/nieltg) in pull request [13361](https://github.com/magento/magento2/pull/13361)*. 

<!---MAGETWO-94349 -->* Fixed an issue with the shared configuration settings in `app/etc/config.php` that caused `recursion detected` errors during deployment.

<!---MAGETWO-70764 -->* You can now set a default value to fields with config field type `image` or `file`. [GitHub-10253](https://github.com/magento/magento2/issues/10253)

<!---MAGETWO-71061 -->* We’ve removed `Zend_Json` from `Setup/Migration.php`. [GitHub-10341](https://github.com/magento/magento2/issues/10341)

<!--- ENGCOM-2610 -->* The licenses listed in `composer.json` have been updated for accuracy. *Fix submitted by [Marcel Hauri](https://github.com/mhauri) in pull request  [17268](https://github.com/magento/magento2/pull/17268)*. [GitHub-17225](https://github.com/magento/magento2/issues/17225)

<!--- ENGCOM-2125 -->* Magento multi-store installations now use the store view-specific values from the Store Configuration if they differ from the global default configuration settings. Previously, Magento loaded the wrong home page in multi-store deployments. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request  [16046](https://github.com/magento/magento2/pull/16046)*. [GitHub-15205](https://github.com/magento/magento2/issues/15205), [GitHub-15245](https://github.com/magento/magento2/issues/15245)

<!--- ENGCOM-748 -->* Magento no longer displays deprecated currencies in the currency dropdown menu displayed during the setup process. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request  [13782](https://github.com/magento/magento2/pull/13782)*. [GitHub-13760](https://github.com/magento/magento2/issues/13760)

<!--- ENGCOM-838 -->* You can no successfully create a new store view from the Admin. Previously, Magento displayed this message when you attempted to create a new storeview, `Requested store is not found`. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request  [14043](https://github.com/magento/magento2/pull/14043)*. [GitHub-12421](https://github.com/magento/magento2/issues/12421), [GitHub-12405](https://github.com/magento/magento2/issues/12405)

<!--- ENGCOM-850 -->* Magento now send order sent email as expected. *Fix submitted by [pawcioma](https://github.com/pawcioma) in pull request  [14051](https://github.com/magento/magento2/pull/14051)*. [GitHub-13769](https://github.com/magento/magento2/issues/12421), [GitHub-12405](https://github.com/magento/magento2/issues/13769)

<!--- ENGCOM-805 -->* The output of the `setup:static-content:deploy` command has been  changed to a less alarming color. [GitHub-12404](https://github.com/magento/magento2/issues/12404)

<!--- ENGCOM-1419 -->* XML sitemap generation can now be scheduled. [GitHub-5768](https://github.com/magento/magento2/issues/5768)

<!--- MAGETWO-87155-->*  Issues with the database backup command have been resolved. [GitHub-1287](https://github.com/magento/magento2/issues/12877) 



<!---MAGETWO-87449 -->*  [GitHub-9981](https://github.com/magento/magento2/issues/9981)   M2 suggests running setup:upgrade if version number of module is higher than expected



<!---MAGETWO-87154 -->*  Disabling the **State is Required for** field from **Admin** > **Stores** > **Configuration** > **General** now works as expected. [GitHub-12894](https://github.com/magento/magento2/issues/12894)






### AdminGS

<!-- MAGETWO-91337 -->* Admin global search preview now works as expected. Previously, this feature worked inconsistently, and search results  differed depending on which area was being searched  (for example, Products, Categories, or Customers). 

<!--- MAGETWO-91565 -->*  Restricted Admin users can now successfully create and save product attributes.

<!--- MAGETWO-91616 -->*  Restricted Admins can now create and edit CMS blocks as expected. Previously, Magento displayed this error message when a administrator with restricted privileges tries to create a new CMS block: `Warning: array_intersect(): Argument #1 is not an array in /var/www/html/magento2ee/app/code/Magento/AdminGws/Model/Models.php on line 1075`.

<!--- ENGCOM-1143 -->* The `Magento_Authorization` module is now installed after `Magento_Authorization` to satisfy `Magento_Authorization`'s dependency upon authorisation tables. *Fix submitted by [Anton Evers](https://github.com/AntonEvers) in pull request [56](https://github.com/magento-partners/magento2ee/pull/56)*. 



### Analytics

<!---MAGETWO-87520-->* PHPDocs have been added as needed for methods throughout the code base. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13337](https://github.com/magento/magento2/pull/13337)*. 

<!--- MAGETWO-85059 -->* Users are now subscribed by default to the Advanced Reporting service.



### Backend

<!---ENGCOM-1831 -->* Customers can now successfully download and export PDFs after logging in. Previously, customers were redirected to the Admin when trying to download or export data to a PDF right after logging in. [GitHub-15510](https://github.com/magento/magento2/issues/15510)

<!---ENGCOM-2158 -->* Admin tabs order now works as expected. Previous;y, when you used the addTabAfter method to add two or more tabs to the Admin (for example, the order view page), the sort order of the tabs was incorrect. [GitHub-16174](https://github.com/magento/magento2/issues/16174)

<!---ENGCOM-2339 -->* The headers of the User Agent Rules table now align as expected with the content of the table's rows. [GitHub-16703](https://github.com/magento/magento2/issues/16703)



<!---ENGCOM-2838 -->* The backend security key for controllers with frontname not equal to route ID now works as expected. Previously, 





Use route ID when creating secret keys in backend menus instead of route name #17650

If you use a different route ID and front name in the adminhtml/routes.xml file, you will get redirected to the dashboard when clicking on the menu link.

This is because the route front name is used to generate the secret key when creating the menu, and route ID is used to generate the secret key for key validation.


*Fix submitted by [Laura Folco](https://github.com/lfolco) in pull request  [17650](https://github.com/magento/magento2/pull/17650)*. [GitHub-7557](https://github.com/magento/magento2/issues/7557)


title: Use route ID when creating secret keys in backend menus instead of route name


Backend Security key broken for controllers with frontname not equal to route ID





<!---ENGCOM-2919 -->* The **Enter** button on the customer grid now filters the table as expected. Previously, clicking **Enter**  did not filter contents but simply changed the display to the next page of the grid.  *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request  [17650](https://github.com/magento/magento2/pull/17650)*. [GitHub-17789](https://github.com/magento/magento2/issues/17789)

<!--- ENGCOM-870 -->* The **Report an Issue** link on Admin pages now opens in a new tab. *Fix submitted by [Danilo Argentiero](https://github.com/DaniloEmpire) in pull request  [14016](https://github.com/magento/magento2/pull/14016)*. [GitHub-14010](https://github.com/magento/magento2/issues/14010)





### Banner

<!---MAGETWO-42047-->* Dynamic Block (former Banner) content can be created in WYSIWYG 
Store specific content for Dynamic Block is created by switching between scopes in Magento Scope Selector (same as content for Products)

<!---MAGETWO-71816-->* Magento CMS Banner is renamed to Dynamic Block to better reflect the essence of the functionality
Banners from Content>Banners are renamed across Admin panel and code base into Dynamic Block
Magento widget Banner Rotator type from Content>Widget>Widget type is renamed across Admin panel and code base into Dynamic Blocks Rotator


### B2B

<!---MAGETWO-94031 -->*  Magento now opens a new window for edit purposes when a merchant selects **Edit User in New Tab** from the Company Users page. Previously. when a merchant tried to edit Company users from the storefront by selecting **Edit User in New Tab**, Magento threw a JSON error. 

<!---MAGETWO-93695 -->* Administrators with appropriate permissions can now change the status of a company to **Rejected**. Previously, Magento did not save the change in status, and threw an error.

<!-- MAGETWO-93784 -->* Guests can now view products as expected when shared catalogs are enabled. Previously, if a merchant added a product when shared catalogs were enabled, guest users could not view the product, even when shared catalogs were later disabled. 

<!-- MAGETWO-93721 -->* Category pages now display as expected all products whose SKUs contain either single or double quotation marks. Previously, Magento threw an error when trying to set pricing and structure on a shared catalog when product SKUs contained these characters. 


<!-- MAGETWO-93704 -->* You can now successfully search for products  when the **Shared Catalog** setting is enabled.


<!-- MAGETWO-92951 -->* Customers can now use the **Add Product By SKU** button to add configurable products to a sales order. 

<!-- MAGETWO-92124 -->* Access to the Companies resource can now be explicitly set on the Roles Resources page in Admin. Previously, this resource was available only to top-level administrators with all resources selected.  

<!--- MAGETWO-90133 -->* Magento now displays information messages about both successful and failed actions when a company administrator adds or deletes entries in the  Company Users section. Previously, Magento displayed this error message, `Something went wrong`  in the response body, and did not display a message.


<!--- MAGETWO-91697 -->* Tier prices for already added products no longer change when a merchant adds additional products to an order from the Admin. Previously, the tier price of products in an order changed when the merchant added more products to the order, applied  a custom price to one of the products, or when applied a coupon code to the order.


<!--- MAGETWO-91648 -->* Merchants can now create a company for which the region or state is not required. Previously, Magento did not create this company, and displayed this error, `Invalid value of "" provided for the region_id field`. 


<!--- MAGETWO-90288 -->* Magento now displays the orders that are associated with customer accounts on the Orders page.  Previously, in the Admin display of customer accounts that have orders associated with them, Magento did not display  orders on the  Orders tab but instead displayed a blank page.


### Bundle

<!---MAGETWO-87524 -->*  You can now successfully save updates to bundle products. [GitHub-6916](https://github.com/magento/magento2/issues/6916)

<!---MAGETWO-86659 -->* Unused `count()` methods have been removed from template files throughout the code base. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [13138](https://github.com/magento/magento2/pull/13138)*. 

<!--- MAGETWO-90797 -->* You can now successfully delete an option from a bundle product. 

<!---ENGCOM-1389 -->* Imported bundle products are now assigned stock status as expected. Previously, when you imported a new or replacement bundle product, Magento did not generate an entry  in `cataloginventory_stock_status`, and as a result,  Magento could not successfully display the product on the storefront. *Fix submitted by [Adam Paterson](https://github.com/adam-paterson) in pull request  [14016](https://github.com/magento-engcom/import-export-improvements/pull/104)*. [GitHub-12330](https://github.com/magento/magento2/issues/12330)

<!---ENGCOM-1830 -->* Magento no longer includes expired special prices for bundle options when displaying product price ranges. *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request [15768](https://github.com/magento/magento2/pull/15768)*.  [GitHub-15457](https://github.com/magento/magento2/issues/15457)

 <!---MAGETWO-87058 -->*  Reports now handle bundle and group products as expected. Previously, when a merchant viewed the Products in cart report, the report gives error if the cart contains a bundle or a grouped product. [GitHub-12079](https://github.com/magento/magento2/issues/12079)

 

### CAPTCHA

<!-- MAGETWO-93718 -->* Customers can now successfully log in when guest checkout is disabled and CAPTCHA is enabled. Previously, Magento threw the `Provided form does not exist` error when a customer tried to log in under these conditions. 

<!-- MAGETWO-92127 -->* CAPTCHA validation now works when the **Website Restrictions** setting is enabled. 


### Cart and checkout

<!--- MAGETWO-87524 -->*  Magento no longer displays an integrity constraint violation error after when a customer reorders a  product with custom options. [GitHub-12705](https://github.com/magento/magento2/issues/12705)


<!--- MAGETWO-87176 -->* 

[GitHub-7241](https://github.com/magento/magento2/issues/7241)

If you configure both/either Prefix and Suffix as Optional, and then populate the configuration list, there is no option to allow a blank option (if they choose not to select an option, it defaults to the first option in the list). Even if you precursor the list with a space and ";" it defaults to the first option after the first semi-colon.




 No option to start with blank option for prefix and suffix in checkout. 



<!--- MAGETWO-87152 -->*  You can now save emoji in custom product options. [GitHub-12058](https://github.com/magento/magento2/issues/12058)

<!--- MAGETWO-90132 -->* Magento no longer caches warning messages as often as a customer clicks the **Update Shopping Cart** button while the shopping cart page loads. Previously, Magento cached a warning message each time a customer clicked this button while the page loaded in Firefox or Chrome, and this action resulted in multiple warning messages appearing on the top of the shopping cart page.


<!--- MAGETWO-87126 -->*  Magento now displays the expected state in the Multishipping New Address form when a customer enters information on the Ship to Multiple Addresses page. *Fix submitted by [enriquei4](https://github.com/enriquei4) in pull request [13367](https://github.com/magento/magento2/pull/13367)*. [GitHub-8069](https://github.com/magento/magento2/issues/8069)

<!---MAGETWO-83562 -->* `update button.phtml` has been simplified to optimize translation. *Fix submitted by [Karla Saaremäe](https://github.com/ChuckyK) in pull request 12155*. 

<!--- MAGETWO-83196-->* You can now enter zip codes that contain no spaces for locations in the Netherlands. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [11961](https://github.com/magento/magento2/pull/11961)*. [GitHub-11898](https://github.com/magento/magento2/issues/11898)

<!--- MAGETWO-81823-->* The text that appears above the billing address field on the checkout page has been edited to remove redundancy. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request [11399](https://github.com/magento/magento2/pull/11399)* 

<!--- MAGETWO-81175-->* The One Touch Ordering feature allows users to place orders without going through full checkout. *Fix submitted by [Daniel Korzeniowski](https://github.com/danielkorzeniowski)*. 

<!--- MAGETWO-71761-->* You can now delete the last product in your shopping cart even when the **Minimum Order Amount** setting (**Admin** > **Sales**) is enabled. Previously, if you tried to delete the last item in your cart under these circumstances, Magento would throw an exception. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10601](https://github.com/magento/magento2/pull/10601)* [GitHub-6151](https://github.com/magento/magento2/issues/6151)

<!--- MAGETWO-86894-->* The CheckoutAgreements getList  was refactored to include a new listing interface that supports the ability to set search criteria. *Fix submitted by [Stanislav Idolov](https://github.com/sidolov) in pull request [13221](https://github.com/magento/magento2/pull/13221)*. 

<!--- MAGETWO-86787-->* The shopping cart totals description on the checkout page now displays the discount labels as expected. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [13223](https://github.com/magento/magento2/pull/13223)*. 

<!--- MAGETWO-85890-->* The checkout controller's JSON usage has been updated to use `$this->resultFactory->create(ResultFactory::TYPE_JSON);` instead of the object manager. 

<!-- MAGETWO-92137 -->* Refreshing the checkout page no longer deletes the shipping address when a guest checks out. Previously, when the persistent shopping cart was enabled, refreshing the checkout out page affected information entered into form fields for a guest checkout. 

<!-- MAGETWO-91771 -->* Cart price rule condition values now handle commas as expected. 

<!--- MAGETWO-90296 -->* When a customer is on the payment page and tries to reorder or retrace her steps backward through the checkout process, Magento now displays all the relevant shipping methods. Previously, Magento displayed only one shipping method under these circumstances.

<!--- MAGETWO-90294 -->* You can now successfully change currency for an order before you complete the order. Previously, if you changed currency, when you  proceeded to checkout by choosing a Bank Transfer Payment as Payment Method, Magento displayed, **Your credit card will be charged for**. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [993](https://github.com/magento/magento2/pull/993)*. [GitHub-12526](https://github.com/magento/magento2/issues/12526)

<!--- MAGETWO-90292 -->* Magento no longer combines the Custom Checkout and Shipping steps when Magento loads the checkout page. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [975](https://github.com/magento/magento2/pull/975)*.

<!--- MAGETWO-60846 -->* Magento now alerts customers when a previously applied gift card has been removed during checkout. 

<!--- MAGETWO-91734 -->*   Guest orders placed with gift cards can now be canceled as expected.

<!--- MAGETWO-91624 -->*  Braintree now permits customers to change the billing addresses on orders when paying with a saved card. Previously, Braintree used the same address for both billing and shipping. 

<!--- MAGETWO-91465 -->*  Customers can now change an existing  value in the checkout page’s  **State/Province** field to an alphanumeric value. Previously, when a customer tried to edit this field in this way, Magento did not place the order, and displayed a descriptive error message. 

<!--- MAGETWO-90971 -->*  Magento now successfully processes an order that contains products that will be shipped to multiple shipping addresses. Previously, Magento did not complete the order, but displayed an error message. 

<!--- MAGETWO-62891 -->*  Magento now saves the address that a customer enters during checkout if the customer selects **Save in address book**.  Previously, Magento saved the address, but left the default billing address field empty.

<!--- ENGCOM-1347 -->* Excess requests on checkout cart page have been removed. Previously, `customer/section/load` was called four times when Magento loaded the cart for the first time. *Fix submitted by [Andrey Bezyazychnyy](https://github.com/andrewbess) in pull request [14782](https://github.com/magento/magento2/pull/14782)*.  [GitHub-15457](https://github.com/magento/magento2/issues/15457)




<!--- ENGCOM-1474 -->*  Empty Checkout Agreement Edit Form when Single Store Mode is enabled


title: [2.3-develop][Forwardport] #7822 Empty Checkout Agreement Edit Form when Single Store Mode is enabled

Empty Checkout Agreement Edit Form when Single Store Mode is enabled

Goto Stores->Terms & Conditions
Add new Condition
Try to edit Condition (works)
Switch to Single Store Mode
Try to edit Condition (does not work)
Add new Condition
Try edit new condition (does not work)

Expected result
Show the prefilled edit form for checkout agreements
Actual result
When in Production Mode there is no form displayed when clicking edit on an existing agreement


 *Fix submitted by [gwharton](https://github.com/gwharton) in pull request [15063](https://github.com/magento/magento2/pull/15063)*.  [GitHub-7822](https://github.com/magento/magento2/issues/7822)



<!--- ENGCOM-1716 -->* The alignment of the **Purchased Order Form** button on the Review & Payments page has been corrected. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [15577](https://github.com/magento/magento2/pull/15577)*.  [GitHub-15334](https://github.com/magento/magento2/issues/15334)

<!--- ENGCOM-1039 -->* $.browser has been deprecated and removed from the code base. *Fix submitted by [Jonathan Kingston](https://github.com/jonathanKingston) in pull request [14270](https://github.com/magento/magento2/pull/14270)*.  [GitHub-14267](https://github.com/magento/magento2/issues/14267)

<!--- ENGCOM-978 -->* The minicart now updates as expected when a customer adds a configurable product to the cart while accessing the storefront on a device running Internet Explorer 11.x. *Fix submitted by [Mastiuhin Oleksandr](https://github.com/mastiuhin-olexandr) in pull request [14192](https://github.com/magento/magento2/pull/14192)*.  [GitHub-13820](https://github.com/magento/magento2/issues/13820)

<!--- ENGCOM-2959 -->* Magento no longer unchecks **My billing and shipping address are the same** checkbox when a customer uses an offline custom payment method for an order. Previously, when a customer used an offline custom payment method for an order, Magento unchecked this  checkbox on payment step if the shipping address was updated.

<!--- ENGCOM-2833 -->* Magento no longer displays an undefined string on the Order Summary page.

<!--- ENGCOM-2017 -->* Unnecessary blank lines have been renoved from `app/code/Magento/Catalog/etc/adminhtml/menu.xml`. *Fix submitted by [Namrata](https://github.com/sanganinamrata) in pull request [16180](https://github.com/magento/magento2/pull/16180)*.  

<!--- ENGCOM-2181 -->* Placeholders for the password field  no longer suggest that a password is optional. Previously, the placeholder for the password field in the checkout page suggested that the password was optional, but after validation, Magento indicated that the password field  was mandatory. [GitHub-16378](https://github.com/magento/magento2/issues/16378)

<!--- ENGCOM-861 -->* The minicart now correctly displays product titles that contain special characters. *Fix submitted by [afirlejczyk](https://github.com/afirlejczyk) in pull request [13802](https://github.com/magento/magento2/pull/13802)*.  [GitHub-13652](https://github.com/magento/magento2/issues/13652)

<!--- ENGCOM-2027 -->* A shipment step has been added to `OnePageCheckoutOfflinePaymentMethodsTest` to support MSI. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [16164](https://github.com/magento/magento2/pull/16164)*.  [GitHub-1164](https://github.com/magento/magento2/issues/1164)

<!-- MAGETWO-87057 -->*   Newly registered customers can now successfully complete an order after entering a new address. Previously, Magento displayed this message on the checkout page, `An error occurred on the server. Please try to place the order again.` [GitHub-10583](https://github.com/magento/magento2/issues/10583)

<!-- MAGETWO-87442 -->*  Merchants can now successfully add products to the shopping cart using REST. Previously, the shopping cart displayed a total price of zero (0) for products creating from the Admin using REST. [GitHub-2991](https://github.com/magento/magento2/issues/2991)

<!-- MAGETWO-87449 -->* Customers can now successfully sign in after first clicking the **Checkout** button. [GitHub-10834](https://github.com/magento/magento2/issues/10834)




#### Cart Price rules

<!--- MAGETWO-94407 -->*  The cart price rule now uses specified conditions correctly when applying discounts on configurable products. 

<!-- MAGETWO-87064 -->* Magento no longer throws an error when a customer applies a discount code on the checkout page. [GitHub-9763](https://github.com/magento/magento2/issues/9763)




<!-- MAGETWO-87151 -->* [GitHub-10477](https://github.com/magento/magento2/issues/10477)

Cart price rule has failed if use dropdown attribute

Steps to reproduce
Create a new cart price rule
Customer Groups select all
Set Conditions
If total quantity greater than 2 for a subselection of items in cart matching ALL of these conditions:
-- Color is red

set Actions
Apply: Percent of product price discount
Discount Amount: 10

Save and Navigate to storefront as a guest
Add 3 products with red color
View cart and no discount
Test other attribute 8.11

add new product attribute (text field type) eg: vendor
add vendor to the default attribute set
set vendor in product detail page. eg: addas
update rule change color to vendor. eg: vendor is addas
back to shopping cart and update
it works
Expected result
buy a special color (red) and total greater than 2, have 10% discount

Actual result
no discount


### Catalog

<!--- MAGETWO-87153 -->*  [GitHub-5188](https://github.com/magento/magento2/issues/5188)
Error generating URN-catalog when blank one exists


Steps to reproduce
Install Magento from develop branch.
Create a blank misc.xml file inside of the .idea folder (if using php storm)
Run 'bin/magento dev:urn-catalog:generate --ide="phpstorm" ./.idea/misc.xml'
Expected result
A new URN catalog for the project should get generated
Actual result
User receives the error "Warning: DOMDocument::loadXML(): Empty string supplied as input in /Sites/magento2ce/app/code/Magento/Developer/Model/XmlCatalog/Format/PhpStorm.php on line 61"





<!--- MAGETWO-87313 -->*  [GitHub-11329](https://github.com/magento/magento2/issues/11329) 

Unable to proceed massaction "Update attributes" with required multiple select attribute

Steps to reproduce
clean install
create product attribute Multiple Select with id "test_multiselect" and set required values to true
fill some options values
create product with previously created multiple select attribute
save product
In Adminhtml -> Catalog -> Products grid select product and do massaction "Update attributes"
click on SAVE
Expected result
Saving must be processed without error
Actual result
Error "The value of attribute "test_multiselect" must be set" is shown



<!--- MAGETWO-87562 -->*   [GitHub-12127](https://github.com/magento/magento2/issues/12127) 

Apostrophe in attribute option value in admin is not handled properly

Steps to reproduce
As an admin, go to Stores -> Attributes -> Products -> Manufacturer
Add a new attribute option called "Nature's Way Supplements"
Hit "Save and continue"
Hit "Save and continue" again
Expected result
In the admin, the attribute option value text input should say "Nature's Way Supplements"
If you check the value in the database, it should be "Nature's Way Supplements"
Actual result
The text input says: Nature&#039;s Way Supplements
The database entry says: Nature&#039;s Way Supplements




<!-- MAGETWO-87151 -->*  [GitHub-11532](https://github.com/magento/magento2/issues/11532) 

Duplicate Simple Product Throws Error: Undefined offset: 0 in SaveHandler.php on line 122 

Steps to reproduce
Click on an existing simple product in the catalog manager
Click the "Save & Duplicate" option
Expected result
The product saves and creates a duplicate item
Actual result
Saves the product but doesn't duplicate it. Throws the following error:
Notice: Undefined offset: 0 in /home/store/public_html/vendor/magento/module-catalog/Model/Category/Link/SaveHandler.php on line 122



<!--- ENGCOM-1226 -->*  225 1179 

title: [Forwardport] Issue #13582 show message for qty minAllowed, maxAllowed, qtyIncremen?

https://github.com/magento/magento2/issues/13582

Magento default validation message for "validate-item-quantity" not showing. 


 *Fix submitted by [Mastiuhin Oleksandr](https://github.com/mastiuhin-olexandr) in pull request [14508](https://github.com/magento/magento2/pull/14508)*.  [GitHub-13582](https://github.com/magento/magento2/issues/13582)



<!--- ENGCOM-1103 -->*  The `Magento\Catalog\Model\ResourceModel\Category\Collection::joinUrlRewrite` method now uses the `storeId` value  set on the actual collection of the store rather than the `storeId` retrieved from the store manager.  [GitHub-13704](https://github.com/magento/magento2/issues/13704)

<!--- MAGETWO-71832 -->* Magento no longer displays unused product attributes  with a value of N/A or NO on the storefront.


<!--- ENGCOM-1174-->*  225 

Problem related to products with configured backorder.
If you place order with backorder product from frontend - everything work properly: backorder order items will have status 'Backordered'.
But when you try to place order/edit/reorder from backoffice, backorder products will not have 'Backorder' status.


Editing order with backordered items results in new order not correctly marking order items as backordered



 *Fix submitted by [Mastiuhin Oleksandr](https://github.com/mastiuhin-olexandr) in pull request [14444](https://github.com/magento/magento2/pull/14444)*.  [GitHub-10057](https://github.com/magento/magento2/issues/10057)


<!--- ENGCOM-1188-->*  

title: [Forwardport] precision for price overriding by js


Mastiuhin Oleksandr

When using more then 2 digits ex(9.4880 will be displayed as 9.49) for the price the js will override this value and it will format using the round for 2 digits.



When using more then 2 digits ex(9.4880 will be displayed as 9.49) for the price the js will override this value and it will format using the round for 2 digits.

 *Fix submitted by [Mastiuhin Oleksandr](https://github.com/mastiuhin-olexandr) in pull request [14461](https://github.com/magento/magento2/pull/14461)*.  [GitHub-14249](https://github.com/magento/magento2/issues/14249)



<!--- ENGCOM-2345 -->*  Magento now throws an exception as expected  when a user tries to submit a product review without selecting a star rating. Previously, if a user submitted a product review without selecting a star rating, Magento assigned a one-star rating. 
 

<!--- ENGCOM-1126-->*   not needed

add one configurable product to a new category

Add a configuration product with a SKU greater than 70 characters
Configure the product based on two different attributes in the configuration options.
save the products
Expected result
save it successfully


https://github.com/magento/magento2/issues/14409

Product with SKU `"a long sku***" does not exist`

Steps to reproduce
Add a configuration product with a SKU greater than 70 characters
Configure the product based on two different attributes in the configuration options.
save the products
Expected result
save it successfully

actual : error


<!--- ENGCOM-1295-->*  itle: [Forwardport] 6879 - Unable to change country of manufacture default label value
url: magento/magento2#14714
contributor name: @rostyslav-hymon
contributor link: https://github.com/rostyslav-hymon


Rostyslav

https://github.com/magento/magento2/issues/6879

Unable to change country of manufacture default label value

Navigate to product attributes in admin panel
Edit country of manufacture attribute
Try to change default label
Hit save



I can't save labels for county_of_manufacture, status, tax_class_id, and so on..
For new custom created attributes , It is working fine.




<!--- ENGCOM-963-->*   225 797

itle: [Forwardport] Fix for Issue-13556 - Sorting in Product Listing via Quantity not work
url: magento/magento2#14179
contributor name: @dimonovp
contributor link: https://github.com/dimonovp

Dmytro Paidych

https://github.com/magento/magento2/issues/13556

Sorting in Product Listing via Quantity not work


Go to Category Page on storefront and try sort via Quantity.

Expected result
Product are sorted from the lowest to the highest quantity or from the highest to the lowest quantity.
Actual result
Products are sorted via Position.





<!--- ENGCOM-1653-->*   

title: 15210-Fixed product tier pricing pagination issue in admin
url: magento/magento2#15360
contributor name: @saravananvelu
contributor link: https://github.com/saravananvelu

saravananvelu

https://github.com/magento/magento2/issues/15210

There is a product which has more than 25 tier price (customer group price) in Advanced Pricing section.

Magento creates the pagination automatically if there are more than 20 customer group price row.

If I click on a next/previous button of pagination, it works properly and navigates the pricing page. But if I enter any page number in the input field and press enter button, it keeps on loading.



Resolved product tier price pagination loader issue in admin

Description:

Navigate Admin => Catalog => Products => Create New / Edit Product.

Go to Advanced Pricing link under Price text field.
Add tier price more than a page and do save.
Jump to other pages by directly editing the pagination text box.



<!--- MAGETWO-93949-->*  Magento now alerts you to an error when a merchant tries to save a product without completed required fields. 


<!--- MAGETWO-75328-->* copy from 221 80511

Change the method argument getRateRequest with actual method


RateRequest method argument change

Change the method argument getRateRequest with actual method





<!--- MAGETWO-75329-->* Make default sorting fully working when setup on category level

Problem is that category has own configuration to setup Default Sort Attribute, but method to get default sorting attribute didn't take it into consideration and get it from config only.

Unable to sort by store configuration default field when different to category's default sorting field

Unable to sort by store configuration default field when different to category's default sorting field

One is unable to sort by store configuration default field when it differs from category default sort by setting. I found that the underlying issue lies within Magento\Catalog\Block\Product\ProductList::getWidgetOptionsJson() which uses the productListHelper to determine the 'orderDefault' setting, though that helper only returns the stores configuration value and doesn't take the default sorting field of the current category into account.

https://github.com/magento/magento2/issues/10772


<!--- MAGETWO-80770-->*



https://github.com/magento/magento2/issues/10738

Empty attribute label is displayed on product page when other language used.

Go to product page.
See attribute label ('none' translated to your foreign language) in the attributes section/
Expected result
'none' label translated to other languages i.e. polish lang - 'brak' should not be displayed
comparisson in line 37 of app/code/Magento/Catalog/view/frontend/templates/product/view/attribute.phtml is changed to `if ($_attributeLabel != __('none'))` in order to not display 'none' translated to foreign language
Actual result
In the template app/code/Magento/Catalog/view/frontend/templates/product/view/attribute.phtml line 37 you have followin comparisson: `if ($_attributeLabel != 'none')` but at this part of code `$_attributeLabel` is already translated.


PR fix issue when attribute label name in app/code/Magento/Catalog/view/frontend/layout/catalog_product_view.xml defined as none to hide from rendering, but there is translation for none in another locale, which force rendering the label.

Only layout instruction can define "none" as keyword for skip rendering label in attrubute.phtml template. If an attribute has label "none" defined in admin attribute settings, it must be generated as defined, and template must not read it as instruction to hide.



<!--- MAGETWO-81966-->*

Show the product alerts in the admin panel when a customer is subscribed to the stock or price of a product

https://github.com/magento/magento2/issues/10007






<!--- ENGCOM-2874-->* 224 2378

title: [Forwardport] Fix Missing meta title tag and doesn't show product name if meta title is empty
url: magento/magento2#17771
contributor name: @nmalevanec
contributor link: https://github.com/nmalevanec

Malyovanets Nickolas

should show product name as brower title and should have meta title tag in html source


https://github.com/magento/magento2/issues/15501

Steps to reproduce
fresh install via composer
install sample data
Expected result
should show product name as brower title and should have meta title tag in html source




<!--- ENGCOM-2869-->* The `data-container` class name is now based on view mode. [GitHub-15319](https://github.com/magento/magento2/issues/15319)

<!--- ENGCOM-2852-->* Parent theme image height settings (specified in `view.xml`) no longer override the height settings assigned to individual images.

<!--- ENGCOM-2793-->* You can now save a title for a product from the **Product** > **Customizable Options** page.

<!--- ENGCOM-2792-->* You can now add a custom fieldset  to the Admin category editor without changing the position of  the General section (that is, the section that contains the **Enable category**, **Include in Menu**, and **Category Name** fields). Previously, Magento moved the General section to the last position of the form.

<!--- ENGCOM-2751-->*  Magento now maintains product image roles as expected after upgrade. Previously, image roles randomly disappeared from product pages after upgrade.



<!--- ENGCOM-2302-->* REST search queries in which the `condition_type` is set to `in` or `nin` now return results for all specified values. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request  [16742](https://github.com/magento/magento2/pull/16742)*. [GitHub-14035](https://github.com/magento/magento2/issues/14035)

<!--- ENGCOM-2373-->* A type error in the payment void method of the Authorizenet module has been fixed. [GitHub-16184](https://github.com/magento/magento2/issues/16184)


<!--- ENGCOM-2185-->* You can now add a product with a price of zero (0) to a wishlist.


<!--- ENGCOM-2116-->* Magento now maintains the default products sort order of “newest first” when you upgrade your Magento deployment to 2.2.4. Previously, after upgrade, the default products order in categories changed from “newest first” to “oldest first”. [GitHub-15627](https://github.com/magento/magento2/issues/15627)


<!--- ENGCOM-2612-->* An error with the template notation for `Magento_CatalogWidget` module has been fixed. [GitHub-16529](https://github.com/magento/magento2/issues/16529)


<!--- MAGETWO-85695-->*  Magento no longer throws an error when you re-save a product attribute with a new name. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request  [11619](https://github.com/magento/magento2/pull/11619)*. [GitHub-6770](https://github.com/magento/magento2/issues/6770)

<!--- MAGETWO-67509-->* The grouped product page now  shows the lowest price for a simple product. *Fix submitted by [evgk](https://github.com/evgk) in pull request  [9266](https://github.com/magento/magento2/pull/9266)*. [GitHub-9265](https://github.com/magento/magento2/issues/9265)


<!--- MAGETWO-85016-->* You can now add a new product with custom attributes that has the same name and attributes as a previously deleted product. Previously, Magento did not let you add this new product because a `request_path` with the same value already existed in `table url_rewrite` from the previous product. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request [12538](https://github.com/magento/magento2/pull/12538)*. [GitHub-12110](https://github.com/magento/magento2/issues/12110)

<!---MAGETWO-83065 -->* Magento now saves the assigned background color for images correctly. Previously, if you updated the background color of a product image, the background color was always black. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request 11888 [11888](https://github.com/magento/magento2/pull/11888)*. [GitHub-8799](https://github.com/magento/magento2/issues/8799)

<!--- MAGETWO-83038-->* You can now assign and save a custom option assigned a price of 0. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request [11842](https://github.com/magento/magento2/pull/11842)*.[GitHub-4808](https://github.com/magento/magento2/issues/4808)

<!--- 82202-->* The ProductRepository SKU cache is no longer corrupted when the value assigned to `cacheLimit` is reached. 
*Fix submitted by [Thomas](https://github.com/heldchen) in pull request 11537*.

<!--- MAGETWO-80828-->* The price filter on a product category page now works as expected. Previously, if you applied this filter to a category listing, Magento displayed redundant product listings and unrelated products.  *Fix submitted by [Mayank Zalavadia](https://github.com/mayankzalavadia) in pull request 11206*. [GitHub-11139](https://github.com/magento/magento2/issues/11139)

<!--- MAGETWO-87614-->* You can now successfully create a product from API Product Management in deployments where the "Update by Schedule" indexer mode is set. 

<!--- MAGETWO-72620-->* Configurable products are no longer displayed on a category page when all children are disabled by mass action and the **display out-of-stock products** setting is off.

<!--- MAGETWO-85618-->* Magento no longer displays a 404 error when you change category permissions from Product Detail pages when multistore view is enabled.
<!---MAGETWO-85617 -->* Magento no longer throws an exception when you add a product with a tiered price reduced to $0.00 to your shopping cart. 

<!---MAGETWO-90804 -->* The **Hide from Product Page** option now works for the child product of a configurable product. 



<!---MAGETWO-87979 -->* [GitHub-13497](https://github.com/magento/magento2/issues/13497) 

Method getUrl in Magento\Catalog\Model\Product\Attribute\Frontend\Image
 




Method getUrl in Magento\Catalog\Model\Product\Attribute\Frontend returns image url with double slash

 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13635](https://github.com/magento/magento2/pull/13635)*. 


<!---MAGETWO-87359 -->* Translate attribute label with default translation helper function

Adds the translation function to customer attribute labels in Magento
admin. This gives a chance to translate a label in the locale of a
backend user.

A custom attribute is created.
We have different frontend labels for the attribute. Store views with different locale settings exist.
Admin users are speaking different languages and need a localized attribute label.
This is not possible.


 *Fix submitted by [Christian Münch](https://github.com/cmuench) in pull request [13251](https://github.com/magento/magento2/pull/13251)*. 




<!---MAGETWO-87358 -->* Catalog Products List widget is not displayed on Storefront


 *Fix submitted by [Rostislav Sabischenko](https://github.com/RostislavS) in pull request [12765](https://github.com/magento/magento2/pull/12765)*. 


 Expected result
Widget is visible on Storefront

Actual result
Widget is not visible on Storefront, following error persists in support_report.log:


<!---MAGETWO-85519 -->* Respect Category Top Navigation Max Depth setting


  *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [12640](https://github.com/magento/magento2/pull/12640)*. 


Category Top Navigation / Maximal Depth configuration not working

Expected result
Expect only to see Category 1 in top navigation. When hoover over Category 1 do not expect to see child categories and children of children
Actual result
Can see all categories from top menu




<!---MAGETWO-84933 -->* Category page X-Magento-Tags headers contains product cache identities even which category display mode is set to "Static block only"

When varnish is selected as the cache engine, If there are products associated to a respective category, and the category display mode is set to Static block only, on the category page X-Magento-Tags headers contains product item cache identities even when no product is displayed for the page.



<!---MAGETWO-93306 -->* You can now specify a negative value for a product in the orders **Quantity** field when editing the order from the Admin. 





<!-- MAGETWO-93188 -->* You can now create a product date attribute that contains a day value than exceeds 12 (in the format dd/mm/yyyy). Previously, when you created a product attribute with a default date specifying a day greater than 12, Magento did not save the attribute, but instead displayed this error, `Invalid default date`. 

<!--- MAGETWO-90293 -->* Sort by Price now works as expected on the catalog search page. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [929](https://github.com/magento/magento2/pull/929)*.  [GitHub-12468](https://github.com/magento/magento2/issues/12468)

<!--- MAGETWO-87564 -->* Magento now correctly sets a `product_links` position attribute even when the attribute value is not set in a GET request. Previously, only the first two of each link type was shown in the backend or in a GET request response, even though Magento correctly added the product links to the database. *Fix submitted by [Mohammad Haj-Salem](https://github.com/mohammedsalem) in pull request [12650](https://github.com/magento/magento2/pull/12650)*.

<!-- MAGETWO-60823 -->* You can now unset a category image on the store-view level when the image is defined on all store views.

<!-- MAGETWO-94060 -->* Eliminated usage of EAV Indexer tables in CatalogWidget module




<!--- MAGETWO-91575 -->*  Magento now correctly renders print previews of product compare pages. Previously, the print view did not display text from the right side of the product compare page. 

<!--- MAGETWO-91848 -->*  The validation hint on the product custom option page  text field now updates as expected with the number of characters left before hitting the maximum.


<!--- MAGETWO-91837 -->* The `PUT /V1/products/:sku/media/:entryId` call updates a product's media gallery as expected.


<!--- MAGETWO-91743 -->* Products no longer disappear from the Admin Product grid  after you delete its active schedule update.
 ee only

<!--- MAGETWO-91689 -->* Single quotation marks in attribute values are no longer  auto-converted to HTML when saved. 


<!--- MAGETWO-91608 -->* The SEO-friendly URL for category pages now works as expected. 

<!--- MAGETWO-45950 -->*  We've optimized queries on loading product attributes when store scope is used.

<!--- MAGETWO-91497 -->*  Products are no longer automatically assigned to websites based on store scope. If a product is assigned to one website only, that relationship is maintained even after the product is saved from the Admin. 


<!--- MAGETWO-91595 -->* Product Display Pages (PDPs) now load as expected when a product name contains a double quotation mark. 
Previously, Magento did not load the image if its name contained double quotation marks.

<!--- MAGETWO-91529 -->* A restricted Admin user who is authorized to access only designated websites can no longer remove products from undesignated websites. 


<!--- MAGETWO-91504 -->* Customers viewing a storefront on a mobile device  can now see the text displayed when clicking on the "More Information" accordion anchor without having to scroll back up. Previously, the Mobile PDP accordion widget did not work as expected on mobile devices. 



<!--- MAGETWO-91473 -->* Magento now maintains designated sort order for products after saving a product in a category. Previously, product sort order reverted to sorting by product ID.

<!--- MAGETWO-91450 -->* You can now filter successfully by date from the Admin on products in multistore environments. Previously, values in the product creation date field (that is, the date set when **Set Product as New from Date** is selected)  were arbitrarily changed, and filtering did not work. 

<!--- MAGETWO-91440 -->*  Attributes with no assigned values on a product are no longer displayed with a  value of N/A in the Compare Products page or block as expected. 



<!--- MAGETWO-91439 -->* Prices are now visible as expected on the category page for a configurable product when you re-enable them from the Admin. Previously, when you re-enabled a previously disabled product and assigned it to a different store, Magento did not display its price on the category or product page. 



<!--- MAGETWO-91435 -->* Category smart rules now work as expected for partial values when conditions include using a dropdown attribute and "contains”.


<!--- MAGETWO-91434 -->* Magento now correctly sets the default option for the `status` attribute when a merchant creates a product. Previously, Magento changed a default setting of disabled (**No**) to **Yes** during product creation.


<!--- MAGETWO-69949 -->* `auto_increment` values are now preserved after restarting the MySQL server.


<!--- MAGETWO-91436 -->* You can now successfully save a product with custom options to a different website in multisite deployments. Previously, when you added another site to a product with customizable options, Magento corrupted these options. by splitting into multiple options or duplicating an option.


<!--- MAGETWO-62310 -->* A product’s **Use Default Value** check box for attributes is now unchecked by default when you add a new website to a product’s scope.

<!--- MAGETWO-90332 -->* The subcategory URL path is now updated for a store view according to the URL path of its parent category.

<!--- ENGCOM-2773 -->* 

title: Fix wrong return type in StockRegistryInterface API
url: magento/magento2#17562
contributor name: @vasilii-b
contributor link: https://github.com/vasilii-b

Burlacu Vasilii

https://github.com/magento/magento2/issues/15085

he return docblock for getLowStockItems() in \Magento\CatalogInventory\Api\StockRegistryInterface just needs to be updated to return \Magento\CatalogInventory\Api\Data\StockItemCollectionInterface instead of \Magento\CatalogInventory\Api\Data\StockStatusCollectionInterface



<!--- ENGCOM-956 -->* 2115 2511

title: [Forwardport] Solved this issue : Drop down values are not showing in catalog produ?
url: magento/magento2#14174
contributor name: @dimonovp
contributor link: https://github.com/dimonovp

Dmytro Paidych

https://github.com/magento/magento2/issues/13006

Drop down values are not showing in catalog product grid magento2

Drop down values are not showing in catalog product grid magento2 after applying filter and sorting on respected attribute.





<!--- ENGCOM-1030 -->* 224 632

title: [Forwardport] Fix JS address converter function from mutating its argument
url: magento/magento2#14250
contributor name: @mastiuhin-olexandr
contributor link: https://github.com/mastiuhin-olexandr

https://github.com/magento/magento2/issues/13216

`quoteAddressToFormAddressData` mutates the argument

Steps to reproduce
Require 'Magento_Checkout/js/model/address-converter' inside any JavaScript module.
Call quoteAddressToFormAddressData method with some address.
Expected result
address.street should remain as an array. Eg. ['Sesame Street']
Actual result
address.street becomes an object. Eg. {0: 'Sesame Street'}


### Catalog Rule

<!---MAGETWO-90784 -->* Catalog rules are now applied as expected when products are sorted by price. 




### Cleanup and simple code refactoring

<!--- MAGETWO-87442 -->*  Zoom is no longer abnormally active when when the mouse is hovering on the category dropdown menu on the product page. [GitHub-5129](https://github.com/magento/magento2/issues/5129) 

<!--- MAGETWO-87523 -->*  `getAttributeText($attributeCode)`  now returns the correct return type. [GitHub-11691](https://github.com/magento/magento2/issues/11691) 

<!--- MAGETWO-87176 -->*  All references to Magento Connect has been removed from the Find partners & extensions links. [GitHub-12632](https://github.com/magento/magento2/issues/12632)   

<!--- MAGETWO-87176 -->*  Method name `getDispretionPath` has been corrected to `getDispersionPath` in  `\lib\internal\Magento\Framework\File\Uploader.php`. [GitHub-12506](https://github.com/magento/magento2/issues/12506)  

<!---MAGETWO-88019 -->* Unused temporary variable `$data` has been removed from the `app/code/Magento/Catalog/Controller/Adminhtml/Category/Save.php` method. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13733](https://github.com/magento/magento2/pull/13733)*. 

<!---MAGETWO-88255 -->* addres has been corrected to address in `app/code/Magento/Customer/etc/events.xml`. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13794](https://github.com/magento/magento2/pull/13794)*. 

<!---MAGETWO-87896 -->* Code formatting in `app/code/Magento/Swagger/view/frontend/templates/swagger-ui/index.phtml` has been updated. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [13616](https://github.com/magento/magento2/pull/13616)*. 

<!---MAGETWO-87895 -->* The edit cart product input validators have been changed from hardcoded to dynamic in `app/code/Magento/Checkout/view/frontend/templates/cart/item/configure/updatecart.phtml`.  *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [13615](https://github.com/magento/magento2/pull/13615)*. 

<!---MAGETWO-87162 -->* Typos have been cleaned up throughout the code base. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13300](https://github.com/magento/magento2/pull/13300)*. 

<!---MAGETWO-87254 -->* Redundant code has been removed for clarity in `app/code/Magento/AdminNotification/Model/Feed.php`. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13303](https://github.com/magento/magento2/pull/13303)*. 

<!---MAGETWO-87035 -->* Misspellings in method names have been fixed, and deprecate methods removed in several adminhtml files. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13304](https://github.com/magento/magento2/pull/13304)*. 

<!---MAGETWO-87034 -->* A typo in the database column comment of `app/code/Magento/Catalog/Setup/InstallSchema.php` has been fixed. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13318](https://github.com/magento/magento2/pull/13318)*. 

<!---MAGETWO-86984 -->* Typos throughout the code base have been corrected. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13283](https://github.com/magento/magento2/pull/13283)*. 

<!---MAGETWO-86899 -->* A misspelled method name in `\Magento\BundleImportExport\Model\Import\Product\Type\Bundle` has been corrected. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13187](https://github.com/magento/magento2/pull/13187)*. 

<!---MAGETWO-86798 -->* A misspelled parameter name in `\Magento\Weee\Test\Unit\Model\TaxTest::testGetWeeeAmountExclTax` has been corrected. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13189](https://github.com/magento/magento2/pull/13189)*. 

<!---MAGETWO-86585 -->* Catelog has been corrected to catalog throughout the code base. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [13097](https://github.com/magento/magento2/pull/13097)*. 

<!---MAGETWO-86402 -->* Consturctor has been corrected to constructor in the `app/code/Magento/Ui/view/base/web/js/lib/core/class.js` JavaScript class. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12976](https://github.com/magento/magento2/pull/12976)*. 

<!---ENGCOM-1254 -->* The syntax of expectException() calls has been improved. *Fix submitted by [Mastiuhin Oleksandr](https://github.com/mastiuhin-olexandr) in pull request [14621](https://github.com/magento/magento2/pull/14621)*. [GitHub-11059](https://github.com/magento/magento2/issues/11059) 

<!---ENGCOM-1698 -->* JavaScript in the Tav module has been refactored to meet Magento code standards. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15560](https://github.com/magento/magento2/pull/15560)*. [GitHub-15352](https://github.com/magento/magento2/issues/15352)





<!---ENGCOM-1396 -->*  Found 2 elements with non-unique id #email



Found 2 elements with non-unique id #email: magento 2 contact

*Fix submitted by [Julien Anquetil](https://github.com/julienanquetil) in pull request [14867](https://github.com/magento/magento2/pull/14867)*. [GitHub-14850](https://github.com/magento/magento2/issues/14850) 



<!---ENGCOM-1155 -->* Magento no longer unexpectedly empties a customer's shopping cart during checkout when concurrent requests occur.




<!---MAGETWO-86330 -->* 

Fixed Coding Standards in the TypeLocatorTest file. This is the last file with a @codingstandardsignorefile code in it.
Removed @codingStandardsIgnoreFile from file header
Changed line length


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12977](https://github.com/magento/magento2/pull/12977)*. 



<!---MAGETWO-86275 -->* Changed typo where a string to be translated used double space "configure your" instead of "configure your".
Checked all files and changed the string everywhere to a single space.


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12961](https://github.com/magento/magento2/pull/12961)*. 




<!---MAGETWO-86036 -->* The unused `if` statement in order invoice save


 $shippingResponse is undefined in scope.

 *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [12888](https://github.com/magento/magento2/pull/12888)*. 


<!---ENGCOM-1814 -->* Magento no longer displays duplicate element IDs for gift messages in the checkout page. [GitHub-13415](https://github.com/magento/magento2/issues/13415)

<!---ENGCOM-1824 -->* Magento now correctly aligns submenus. [GitHub-7897](https://github.com/magento/magento2/issues/7897)


<!---ENGCOM-1823 -->* title: [Forwardport] Function unnecessarily called multiple time
url: magento/magento2#15763
contributor name: @vgelani
contributor link: https://github.com/vgelani

https://github.com/magento/magento2/issues/15355

Function is unnecessarily called multiple time.
app/code/Magento/CurrencySymbol/view/adminhtml/templates/grid.phtml


<!---ENGCOM-1900 -->* Client-side email validation now works in Internet Explorer 11.x the same way as it does in Chrome. Previously, a leading or trailing space on the following pages resulted in  client-side validation failure in Magento stores deployed on Internet Explorer 11.x. GitHub-6058](https://github.com/magento/magento2/issues/6058)


<!---ENGCOM-2082 -->* Client-side email validation now works in Internet Explorer 11.x the same way as it does in Chrome. Previously, a leading or trailing space on the following pages resulted in  client-side validation failure in Magento stores deployed on Internet Explorer 11.x. [GitHub-6058](https://github.com/magento/magento2/issues/6058)

<!---ENGCOM-1893 -->* Magento now correctly aligns page elements on  the home page and category page of the Hot Seller section. [GitHub-15213](https://github.com/magento/magento2/issues/15213)

<!---ENGCOM-1986 -->* title: [Forwardport] #15308 removed extraneous margin
url: magento/magento2#15975
contributor name: @chirag-wagento
contributor link: https://github.com/chirag-wagento

https://github.com/magento/magento2/issues/15308

extraneous margins on product list and product list items

<!---ENGCOM-2005 -->* `inline-block` issues with space and font-size in the Name form have been resolved. 

<!---ENGCOM-2147 -->* The Shipping and Estimate Tax page now correctly displays country, city, and postal code fields. [GitHub-8222](https://github.com/magento/magento2/issues/8222)

<!---ENGCOM-2462 -->* Unneeded JavaScript was removed from `logout.phtml` and replaced with a new JavaScript component.

<!---ENGCOM-2593 -->* Template syntax errors in `app/code/Magento/Theme/Block/Html/Breadcrumbs.php` have been corrected. [GitHub-15345](https://github.com/magento/magento2/issues/15345)

<!---ENGCOM-2692 -->* Magento now disables the **Shop By** button on the search page when a customer sets additional search filters.

<!---ENGCOM-2731 -->* Product image zoom now works as expected in stores running on Safari.


<!---ENGCOM-2786 -->*  The `$keepRation` parameter in the `Magento\Cms\Model\Wysiwyg\Images\Storage` class has been renamed to `$keepRatio`.

<!---ENGCOM-2816 -->* Typo in Gallery.php

title: Fix #17579 Typo in Gallery.php
url: magento/magento2#17659
contributor name: @Spaggel
contributor link: https://github.com/Spaggel

Typo in vendor/magento/module-catalog/Block/Adminhtml/Product/Helper/Form/Gallery.php


<!---ENGCOM-2859 -->* duplicate event in Delete operation transaction "entity_manager_delete_before

title: [Forwardport] ISSUE-17715: Duplicate event in Delete operation transa?
url: magento/magento2#17720
contributor name: @p-bystritsky
contributor link: https://github.com/p-bystritsky

Actual result
'entity_manager_delete_before' event dispatched twice.


[GitHub-17715](https://github.com/magento/magento2/issues/17715)

<!---ENGCOM-2231 -->* Trim email address in newsletter, forgot password, checkout login and email to a friend form 

 

<!---ENGCOM-1807 -->* Refactored the  JavaScript code of the button split widget . [GitHub-15354](https://github.com/magento/magento2/issues/15354)

<!---ENGCOM-1817 -->* Refactor JavsScript for UrlRewrite module edit page

title: [Forwardport] Refactor JavsScript for UrlRewrite module edit page
url: magento/magento2#15747
contributor name: @vijay-wagento
contributor link: https://github.com/vijay-wagento

Vijay Golani



[GitHub-15356](https://github.com/magento/magento2/issues/15356)



<!---ENGCOM-1772 -->* The annotation for the `formatDateTime` function in the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file has been corrected. The `locale` and `timezone` have been changed to `param string|null $locale` and `@param string|null $timezone`. 

<!---ENGCOM-1771 -->* The annotation for the `formatDateTime` function in the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface.php` file has been corrected. The `locale` and `timezone` have been changed to `param string|null $locale` and `@param string|null $timezone`. [GitHub-15668](https://github.com/magento/magento2/issues/15668)

<!--- ENGCOM-2065 -->* Magento now displays the Contact Us page on the menu as expected. Previously, Magento displayed unnecessary space between the category page and the main footer. [GitHub-12601](https://github.com/magento/magento2/issues/12601)

### Cookie

<!-- MAGETWO-93790 -->* Customer data is now fully loaded after restarting the browser during an unexpired user session. Previously,  the `section_data_ids` section of the session cookie was not properly completed. [GitHub-14912](https://github.com/magento/magento2/issues/14912)

<!--- ENGCOM-1089 -->* Allow modification of cookies via extension 

title: [Forwardport] ISSUE-14109: Allow modification of cookies via extension
url: magento/magento2#14366
contributor name: @rostyslav-hymon
contributor link: https://github.com/rostyslav-hymon

Rostyslav

rostyslav-hymon

`MAX_NUM_COOKIES` doesn't follow the open-closed principle

Steps to reproduce
open `Magento\Framework\Stdlib\Cookie\PhpCookieManager::checkAbilityToSendCookie`
See PhpCookieManager::MAX_NUM_COOKIES
Expected result
Should bind using static::MAX_NUM_COOKIES
Actual result
I cannot change the outcome of this class without rewriting 3 methods


### CMS content

<!---MAGETWO-70412 -->* Magento native WYSIWYG toolbar is configured to show the same buttons by default. That can be changed in the configuration for each place where the plugin is used

<!-- MAGETWO-93705-->* Page layout issues that resulted from incorrect module sequence have been corrected. Previously, the  `Magento_theme` module was loaded too late, which resulted in unexpected display issues. 


<!-- MAGETWO-51484-->* Magento changed the way how product input type that require WYSIWYG is set up. Currently it's a separate option _Text Editor_ that Admin user can choose when configure custom product attribute

<!-- MAGETWO-91645 -->* Magento no longer unexpectedly locks up CMS pages when a merchant changes a scheduler end date. Previously, when a merchant updated the end date for a CMS page after the current scheduler ended, Magento generated an error, and the merchant could no longer access any CMS page from the Admin. 


Magento changed the way how product input type that require WYSIWYG is set up. Currently it's a separate option _Text Editor_ that Admin user can choose when configure custom product attribute

<!-- MAGETWO-80077 -->* Add EventPrefix and EventObject to CMS Page/Block Collection

Added EvenPrefix and EventObject for CMS Collections for instantiate observer for `$this->_eventPrefix . '_load_after'` and `$this->_eventPrefix . '_load_before'`

GH issue  9900



<!-- MAGETWO-83101 -->* CMS blocks are not validated against having same store and identifier

GH 8236



<!-- MAGETWO-75313 -->* Add ability to load block and pages by identifiers

As a Magento develop I would like to have a @api interface to get CMS pages and blocks by identifiers and store id.

Introduce BlockManagementInterface and PageManagementInterface to provide an ability get CMS pages and blocks by identifiers and store id.



GH 10414




<!--- ENGCOM-2413 -->* Disabling a product now removes it from the flat index as expected. [GitHub-14966](https://github.com/magento/magento2/issues/14966)

<!--- ENGCOM-2032 -->* Breadcrumbs now work as expected when a product name contains quotation marks. Previously, the breadcrumbs on the product details page caused this syntax error to be thrown, `SyntaxError: Unexpected token x in JSON`. [GitHub-15037](https://github.com/magento/magento2/issues/15037)


### Configurable products

<!--- MAGETWO-87154 -->*  [GitHub-12294](https://github.com/magento/magento2/issues/12294)     

Adding Custom Attribute - The value of Admin scope can't be empty

<!--- MAGETWO-87153 -->*    [GitHub-11953](https://github.com/magento/magento2/issues/11953)  

Product configuration creator does not warn about invalid SKUs

<!--- MAGETWO-87524 -->*     [GitHub-12430](https://github.com/magento/magento2/issues/12430) 

While assigning prices to configurable products, prices aren's readable when using custom price symbol.

<!--- MAGETWO-87524 -->*  [GitHub-11792](https://github.com/magento/magento2/issues/11792)   

 Can't add customizable options to product


<!--- MAGETWO-87615 -->*  [GitHub-12699](https://github.com/magento/magento2/issues/12699)   

Multiselect Attribute is not saved for a product in the admin panel when it has a related product using another attribute set 


<!--- MAGETWO-87176 -->*   [GitHub-12713](https://github.com/magento/magento2/issues/12713) 

Currency symbol overlaps entered attribute option's price while creating Configurable Product ( 

<!--- MAGETWO-85177 -->* Magento now displays the price of a configurable product as expected even when its simple products are out-of-stock. Previously, Magento displayed a price of 0 for any configurable product price when its simple products were out-of-stock. [GitHub-12578](https://github.com/magento/magento2/issues/12578)

<!--- MAGETWO-70491 -->*  Magento now displays the correct price of product when its special-price option has not been selected. Previously, Magento displayed the expired `special_price` value for a configurable product even when you did not select the product option associated with that price. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [9796](https://github.com/magento/magento2/pull/9796)*. [GitHub-6457](https://github.com/magento/magento2/issues/6457)

<!--- MAGETWO-70491 -->* Configurable product prices now correctly reflect VAT amounts as set by tax rule settings. Previously, magento displayed a configurable product's old price without the VAT.  *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [9796](https://github.com/magento/magento2/pull/9796)*. [GitHub-6729](https://github.com/magento/magento2/issues/6729)

<!--- MAGETWO-70491 -->* `LowestPriceOptionsProvider` now works as expected. Previously, Magento displayed expired special prices for configurable products, and displayed other problematic behaviors when working with special prices and configurable products.  *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [9796](https://github.com/magento/magento2/pull/9796)*. [GitHub-7362](https://github.com/magento/magento2/issues/7362)

<!--- MAGETWO-71670 -->* You can now successfully add a new product that contains a custom attribute set with a multiselect attribute from the Admin.  *Fix submitted by [Teun Lassche](https://github.com/thlassche) in pull request [10575](https://github.com/magento/magento2/pull/10575)*. [GitHub-10565](https://github.com/magento/magento2/issues/10565)

<!--- MAGETWO-87251 -->* when a configurable product has 2 options and one of the values of this option is out-of-stock but enabled it will be visible as in stock and can be selected. It will not be added to cart but cause incorrect behaviour.

 *Fix submitted by [Alexander Shkurko](https://github.com/Coderimus) in pull request [13417](https://github.com/magento/magento2/pull/13417)*. 


<!-- MAGETWO-91562-->* Configurable products are now sorted by visible prices as expected. Previously, sorting a catalog by price produced  sort results that included the prices of out-of-stock products and disabled child products.

<!--- MAGETWO-72512 -->* Magento no longer displays the inappropriate  product price when a configurable product has two price options. Previously, Magento displayed the  out-of-stock price of a configurable product when both an out-of-stock and in-stock price were configured. 

<!--- MAGETWO-86428 -->*   Magento now reorders configurable attribute options as expected on the product page. *Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request [12962](https://github.com/magento/magento2/pull/12962)*. [GitHub-7441](https://github.com/magento/magento2/issues/7441)


<!--- MAGETWO-77744 -->* Magento now displays a helpful error when  a merchant attempts to upload a file in an unsupported file format. 


<!--- MAGETWO-8709 -->* The wishlist now displays the appropriate product image for configurable products with selected options. Previously, Magento displayed the parent image instead of the image of the selected child product. [GitHub-8168](https://github.com/magento/magento2/issues/8168)

<!--- ENGCOM-1069 -->* Order grid page showing previous order id in URL while coming back from order view page

title: magento/magento2#13295:Order grid page showing previous order id in URL while coming back from order view page
url: magento/magento2#13390
contributor name: @vinayshah
contributor link: https://github.com/vinayshah

Steps to reproduce
Open Order Page From order grid page
After order view page is opened click on the back button provided on action bar
Expected result
The URL on the page should not have old order id.
Actual result
The URL on order grid page show old order id.


Vinay Shah


[GitHub-13295](https://github.com/magento/magento2/issues/13295)




<!--- ENGCOM-1096 -->* 

Fix OptionsRepository API test to add option by attribute_id

title: Fix OptionsRepository API test to add option by attribute_id
url: magento/magento2#14345
contributor name: @bcerban
contributor link: https://github.com/bcerban

Bettina


[GitHub-5580](https://github.com/magento/magento2/issues/5580)

Cannot add multiple options to configurable product via REST API





### Customers

<!--- MAGETWO-94406 -->* Directory Data" and "Cart" sections are loaded twice after user logged in	
The customer private data must be loaded only once and requested again only if system state was changed.
Currently "Directory Data" and "Cart" are loaded twice after user logged in into the system which caused additional server load and traffic

The customer/section/load gets called 4 times when loading the cart for the first time. 3 of those times, cart data gets returned. On Magento 2.1, I believe only two calls are made to customer/section/load.

[GitHub-13765](https://github.com/magento/magento2/issues/13765)


<!--- MAGETWO-86545 -->* When multiple validation errors are found trying to save a customer address, errors are not properly shown in adminhtml customer edit page

Handle multiple errors in customer address validation when shown in adminhtml customer edit page


 *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [12937](https://github.com/magento/magento2/pull/12937)*. 


<!-- MAGETWO-91802 -->* Magento now uses the correct amounts when creating a credit memo for an order that was placed using store credit, a gift card, or reward points. 

<!-- MAGETWO-60144 -->* Administrators can see all customers when the **Share Customer Accounts** value is set to Global. 


<!--- MAGETWO-94406 -->*  Magento now loads customer private data only once when system state changes. Previously, "Directory Data" and "Cart" were loaded twice after a user logged in to the system, which caused additional server load and traffic.


<!--- MAGETWO-91760 -->*  Magento now correctly displays both the default and additional shipping addresses  provided during checkout.
Previously, Magento displayed attributes with dropdown and multiple select types with incorrect values (option IDs instead of labels) for shipping addresses on checkout.

<!--- MAGETWO-71432 -->*  copy 93801 from 221

Add cast to string for CUST_GROUP_ALL 

Add cast to string for GroupInterface::CUST_GROUP_ALL in customer group source model and adjust test


[GitHub-10436](https://github.com/magento/magento2/issues/10436)

Steps to reproduce
Call method \Magento\Customer\Model\Customer\Source\Group::toOptionArray
Expected result
All $customerGroups['value'] should be of type string
Actual result
First customer group value (\Magento\Customer\Api\Data\GroupInterface::CUST_GROUP_ALL) is integer




<!--- MAGETWO-70775 -->*  We have replaced `Zend_Json`  with `\Magento\Framework\Serialize\JsonConverter::convert` in customer data.  [GitHub-10259](https://github.com/magento/magento2/issues/10259)

<!--- MAGETWO-72539 -->* 


There is an error while click on "resend confirmation mail". The mail address will transfered without special chars like "+". This is important for the new gmail feature which provides simply adding aliases.





<!--- MAGETWO-82633 -->* 

Too many password reset requests even when disabled in settings 


When attempting to reset a customer's password via the admin, the system tells me 'Too many password reset requests' even when I have disabled the 'max wait time between password resets' in the store configuration settings.


[GitHub-11409](https://github.com/magento/magento2/issues/11409)



<!--- MAGETWO-84237 -->* 

Export data from grid not adding custom rendered data magento2 


Adding methods to set text values for data pulled from customer_grid_flat table during CSV export

Steps to reproduce
login to admin panel.
Go to customer panel, and click on export button to export details in CSV format.
Expected result
in CSV, columns Confirmed email and Account Lock, values should be displayed as in customer grid.
Actual result
Not displaying and value in Confirmed email and Account Lock columns of CSV. it just gives a blank value.
exporting not adding the values which are rendered by prepareDataSource function(ui/component/listing classes).

https://github.com/magento/magento2/issues/10765





<!--- MAGETWO-84374 -->*  add confirmation and lock expires data to customer grid CSV export 
Adding methods to set text values for data pulled from customer_grid_flat table during CSV export



[GitHub-10765](https://github.com/magento/magento2/issues/10765)

Steps to reproduce
login to admin panel.
Go to customer panel, and click on export button to export details in CSV format.
Expected result
in CSV, columns Confirmed email and Account Lock, values should be displayed as in customer grid.
Actual result
Not displaying and value in Confirmed email and Account Lock columns of CSV. it just gives a blank value.
exporting not adding the values which are rendered by prepareDataSource function(ui/component/listing classes).



<!--- MAGETWO-82529 -->*  customer objects are equal to eachother after observing event customer_save_after_data_object


[GitHub-7915](https://github.com/magento/magento2/issues/7915)

Steps to reproduce
Log in with existing user in frontend.
Change first name of customer to 'test35'.
Observe the event 'customer_save_after_data_object'. Two objects are given called : 'orig_customer_data_object' & 'customer_data_object'.
Those two objects are identical to each other. First name in both objects is equal to 'test35'
Expected result
'customer_data_object' firstname should not be equal to 'orig_customer_data_object'
Actual result
orig_customer_data_object and customer_data_object are equal to each other





<!--- ENGCOM-980 -->* 2115 2664
 Fixed error messages on admin user account page after redirect for force password change



 title: [Forwardport] Issue-13768 Fixed error messages on admin user account page after redirect for force password change
url: magento/magento2#14199
contributor name: @dimonovp
contributor link: https://github.com/dimonovp





[GitHub-13768](https://github.com/magento/magento2/issues/13768)

Steps to reproduce
Create any backend user.
Wait/set the password as expired
Log in
You will get an error popup with Attention: Something went wrong. Also it will show A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later.
After change password, the error messages are gone.
Expected result
Error popup saying your password has expired. No Technical error message.
Actual result
You will get an error popup with Attention: Something went wrong.



<!--- ENGCOM-1268 -->* Replace the existing headers with the no cache headers

title: [Forwardport] Replace the existing headers with the no cache headers
url: magento/magento2#14661
contributor name: @rostyslav-hymon
contributor link: https://github.com/rostyslav-hymon



[GitHub-14049](https://github.com/magento/magento2/issues/14049)

Retrieve session information from another customer under /customer/section/load/sections=&update_section_id=true

Actual result
It is possible to get another customer session information from sections controller, without timestamp.
Sometimes, this url is trigged from knockout without timestamp, and shows another customer name in the store header.

Expected result
Always return the user data for the current logged user.
In case of no session, return no data from cache.





<!--- ENGCOM-1493 -->* In multi-site deployments, a customer requesting a password reset on a non-default store should receive the password reset email from the non-default, not the primary, store. Previously, this password reset email was sent from the default store. [GitHub-5726](https://github.com/magento/magento2/issues/5726)



<!--- ENGCOM-1146 -->* Customer_account.xml file abused

title: #7816: Customer_account.xml file abused (2.3)
url: magento/magento2#14322
contributor name: @mikewhitby
contributor link: https://github.com/mikewhitby

Mike Whitby


[GitHub-7816](https://github.com/magento/magento2/issues/7816)





<!--- ENGCOM-2481 -->* Unnecessary leading and trailing spaces have been removed from the customer account login page email field. [GitHub-6058](https://github.com/magento/magento2/issues/6058)


<!--- ENGCOM-2067 -->* Table alias prefixes in field mappings for customer group filter and sorting processors that were previously missing have been restored. Previous to this restoration, Magento threw this error when a merchant opened **Admin** > **Customers** > **All Customers**: `SQL Error: ambiguous column 'customer_group_id' in 'All customers' page in admin when extension attribute table is joined`.

<!--- ENGCOM-2060 -->* Customer accounts are now unlocked as expected after a password reset. [GitHub-15534](https://github.com/magento/magento2/issues/15534)

<!--- ENGCOM-2782 -->* 2116 2805

title: [Forwardport] Solution for User role issue with customer group
url: magento/magento2#17574
contributor name: @jignesh-baldha
contributor link: https://github.com/jignesh-baldha

Jignesh Baldha


[GitHub-16499](https://github.com/magento/magento2/issues/16499)

User role issue with customer group

While creating a user role for the “customer group”, issue with “customer group” menu for user role(ACL file).
The “customer group” menu is displayed under "customers" menu on the admin side, whereas it is displayed under store > other setting menu while assigning user role.

Expected result
"Customer group" menu should be displayed under "customers" while Store menu should not be displayed.

[Screenshots, logs or description]
Actual result
Customer group is displaying under customer while Store menu is blank.





<!--- ENGCOM-2682 -->* 

title: Issue #10411 - Change account management to check if store is in website.
url: magento/magento2#17375
contributor name: @jasonevans1
contributor link: https://github.com/jasonevans1

Jason Evans


[GitHub-10411](https://github.com/magento/magento2/issues/10411)

Customer Store ID is tied to the Welcome Email when creating in admin

Expected result
It should not be possible for a customer to be associated to website 1 and store 2.
Perhaps welcome email options should be restricted based on the website chosen.
Or at the very least make it clear that the customer will be associated with the store chosen in the welcome email.
And don't default the dropdown to a particular store. This should be explicitly chosen (and required) because it is way too easy to forget to update that field from the default. It's not even in the same place as the website dropdown right now.
Actual result
Welcome email is sent from Store2 and customer_entity gets website_id 1 and store_id 2 in the database.





### Customer attributes


<!--- MAGETWO-94058 -->* You can now clear the **Date of Birth** field in the customer edit page when accessed from the Admin. 

<!--- MAGETWO-93754 -->*  Merchants can now create attributes  for customer addresses (**Stores** > **Attributes** > **Customer Address**) as expected. Previously, a merchant could create an attribute, but Magento did not save or display it. 

<!--- MAGETWO-91519 -->*  Magento now adds the address entered during checkout to a new account when a custom address attribute is required when creating a user account after checkout. 

<!--- MAGETWO-91509 -->*  User-defined customer attributes are now copied to the `magento_customercustomattributes_sales_flat_order` table after placing an order as expected. 

<!-- MAGETWO-91737 -->* Magento no longer validates customer address attribute value length when the minimum/maximum length fields are not displayed on the Admin. 



### Dashboard

<!--- MAGETWO-82734 -->* Some long labels break by letter, that was a UX problem to some users and confusiing. I've edited a styless-old.less to fix it.

Go to any page that has long input field labels, such as when adding a new product attribute (also depends of your resolution)
2. Now the labels break by word instead by letter.

Fixed Issues (if relevant)
Admin: field labels wrapping poorly #7099


<!--- MAGETWO-88013 -->* Update StorageInterface.php


 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13729](https://github.com/magento/magento2/pull/13729)*. 



<!--- MAGETWO-48 -->* Added search by the configuration in the admin backend. It makes possible to find needed configuration setting using the search.

This feature will provide a possibility to find the config fields in Magento in a fast and easy way (e.g. live search).



<!--- MAGETWO-82561 -->* Moved Customer Groups Menu Item from Other settings to Customers

Currently the Customer Groups are located in the Magento Admin under Stores > Other Settings > Customer Groups. But this is strange because in Magento 1 it was under Customers > Customer Groups


<!--- ENGCOM-1770 -->* Wrong Last orders amount on dashboard

title: [Forwardport] Wrong Last orders amount on dashboard #15660
url: magento/magento2#15682
contributor name: @ankurvr
contributor link: https://github.com/ankurvr

Ankur Raiyani

Wrong order amount on dashboard on Last orders listing when having more than one website with different currencies

On Dashboard Last order's table shows wrong table for specific store view dashboard when you have multiple websites and both have different currencies.


[GitHub-15660](https://github.com/magento/magento2/issues/15660)




### Developer

<!--- MAGETWO-81618 -->* 

Only prompt for deploy command in production mode

After running `setup:upgrade` command, the message "Please rerun Magento compile command" only shows up in production mode

Fixed Issues (if relevant)
1. magento/magento2#11044: magento setup:upgrade prompts to run compilation, even in developer mode

https://github.com/magento/magento2/issues/11044

In developer mode, setup:di:compile is not necessary and should not be executed. The setup:upgrade command asks for it independent of the current mode, which is confusing and misleading, especially for developers new to the platform.


[GitHub-11044](https://github.com/magento/magento2/issues/11044)

Steps to reproduce
Run bin/magento setup:upgrade
Expected result
Migrations are executed
Actual result
Migrations are executed
The message "Please re-run Magento compile command. Use the command "setup:di:compile" appears




### Directory

<!--- ENGCOM-993 -->*  When sorting by price, Magento now displays the same number of products no matter how it sorts products in the Catalog Product list. Previously, Magento reduced the product count by the number of disabled products when sorting by price.

<!--- ENGCOM-982 -->* 225 699
resolved default country selection issue while creating new customer …

title: [Forwardport] resolved default country selection issue while creating new customer ? #5
url: magento/magento2#14204
contributor name: @rostyslav-hymon
contributor link: https://github.com/rostyslav-hymon


[GitHub-3483](https://github.com/magento/magento2/issues/3483)

Default country selection issue while creating new customer from backend

While creating a new customer from back-end default country selection doesn't display on adding a new address.

To reproduct this step

Login into magento admin panel
Go to Customers > All Customers > Add New Customer > Click on left tab [Addresses]
Click on Add New Addresses [ On country dropdown it display blank]



<!--- ENGCOM-2719 -->*

Add Currency Converter API connecting feature #15542	

title: Add Currency Converter API connecting feature
url: magento/magento2#15542
contributor name: @HirokazuNishi
contributor link: https://github.com/HirokazuNishi

Hirokazu Nishi


[GitHub-15541](https://github.com/magento/magento2/issues/15541)

This PR aims to add "Currency Converter API" connecting feature for retrieving TWD currency rate.
Currency rates services that Magento can connect by default can't retrieve TWD rates.




### EAV 

<!---MAGETWO-87851 -->* Fix json encoded attribute backend type to not encode attribute value multiple time


  *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13640](https://github.com/magento/magento2/pull/13640)*. 


<!---MAGETWO-87036 -->* Add @see tag to deprecated property

Add @see tag to deprecated property to point out the desired property


   *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13301](https://github.com/magento/magento2/pull/13301)*. 


<!---MAGETWO-86176 -->* REST API - Attribute option creation -> no ID returned

I have changed return type of add function and set value to option. So when we do REST or SOAP api then it will return option_id in 'value' field to attributeoptioninterface return type.



   *Fix submitted by [Sanjay Patel](https://github.com/sanjay-wagento) in pull request [12920](https://github.com/magento/magento2/pull/12920)*. 


<!--- MAGETWO-91580 -->* Magento no longer displays empty product attributes of dropdown or swatch type as having a value of **no** on the storefront. 


<!--- MAGETWO-91570 -->* Magento now displays an error message as expected when  it does not save dropdown values as you create them. Previously, Magento did not save the options, but did not alert you in a message. 

<!--- MAGETWO-72472 -->* You can now perform a mass update on products that have more than 60 attributes.



<!--- ENGCOM-1250 -->* 
It is not possible to filter an EAV collection by an attribute being null.





Use `LEFT JOIN` When Checking for `null` Attributes

title: Use `LEFT JOIN` When Checking for `null` Attributes
url: magento/magento2#14356
contributor name: @maxbucknell
contributor link: https://github.com/maxbucknell

Max Bucknell


When loading an EAV collection, such as a product collection, it is impossible to filter a collection by specifying that the value of the attribute is null. This is because the collection generates an INNER JOIN, when it should be generating at least a LEFT JOIN.


[GitHub-14312](https://github.com/magento/magento2/issues/14312), [GitHub-14355](https://github.com/magento/magento2/issues/14355)

GraphQL `ProductFilterInput` Requires Field to be a String

Every field of the ProductFilterInput input field in Magento_CatagolGraphQl::etc/graphql.xml has the type FilterTypeInput. The problem here is that FilterTypeInput requires most of its arguments to be strings.









<!--- ENGCOM-1000 -->* SQL query is printed into browser in case of exception

title: [Forwardport] SQL query is printed into browser in case of exception
url: magento/magento2#14223
contributor name: @rostyslav-hymon
contributor link: https://github.com/rostyslav-hymon

Rostyslav


[GitHub-13385](https://github.com/magento/magento2/issues/13385)

SQL query is printed into browser in case of exception

2. Open some category page in a browser.

Expected result
No SQL query is printed in a browser
Actual result
SQL query is printed in a browser


[GitHub-13385](https://github.com/magento/magento2/issues/13385)


<!--- ENGCOM-2708 -->* The Product Attribute Repository's incorrect return values have been replaced with values that now adhere to `Magento\Catalog\Api\ProductAttributeRepositoryInterface (extends Magento\Framework\Api\MetadataServiceInterface)` as expected.


### Email

<!--- MAGETWO-87523 -->*  Nonfunctioning links in the order confirmation email have been corrected. [GitHub-12261](https://github.com/magento/magento2/issues/12261) 



<!--- MAGETWO-87351 -->*  [GitHub-11936](https://github.com/magento/magento2/issues/11936) 

required attribute set id filter on attribute group repository getList 



### Frameworks


<!--- ENGCOM-1274 -->* 225 1252

Specify the table when adding field to filter

title: [Forwardport] Specify the table when adding field to filter
url: magento/magento2#14676
contributor name: @rostyslav-hymon
contributor link: https://github.com/rostyslav-hymon

Rostyslav


[GitHub-14572](https://github.com/magento/magento2/issues/14572)

Specify the table when adding field to filter for the collection Eav/Model/ResourceModel/Entity/Attribute/Option/Collection.php

Actual result
1.error 'ambiguous column name'

About the collection vendor/magento/module-eav/Model/ResourceModel/Entity/Attribute/Option/Collection.php, the method setAttribbuteFilter call the method addFieldToFilter without specify the table.
So, when we join some tables with a column 'attribute_id' (example: 'catalog_product_entity_int'), we have the error 'ambiguous column name'.



<!--- MAGETWO-86283 -->*  The `htmlentities` function has been replaced with the `htmlspecialchars` function.

<!---MAGETWO-94991 -->* Magnifier now works as expected on any supported operating system and browser. Previously, Magnifier did not hover correctly on devices running Windows Chrome or FireFox. 





<!---MAGETWO-94989 -->* The magnifier tool now turns off as expected when a user moves the cursor off an image.







<!---MAGETWO-90358 -->* The `ExtensionAttributes` object is now autogenerated. 

<!---MAGETWO-88259 -->*   `ObserverInterface` has been added to @api. Previously, creating an observer that uses `ObserverInterface` triggered a patch-level dependency on `magento/framework`. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13786](https://github.com/magento/magento2/pull/13786)*. 

<!---MAGETWO-87260 -->* The doc block of the `walk` method in a collection now correctly reflects that this method will accept an array. *Fix submitted by [bytecreation](https://github.com/ByteCreation) in pull request [13374](https://github.com/magento/magento2/pull/13374)*. 

<!---MAGETWO-87116 -->* `getFrontName` has been refactored to return `getModuleName`'s return values. *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13299](https://github.com/magento/magento2/pull/13299)*. 

<!---MAGETWO-87128 -->* Emogrifier dependency has been updated to ^2.0.0.  *Fix submitted by [Oliver Klee](https://github.com/oliverklee) in pull request [13351](https://github.com/magento/magento2/pull/13351)*. 


<!---MAGETWO-86728 -->* 


Ranged selects always miss the last range 


 I found this bug because some of my categories were empty. catalog_category_product_index did not contain all category product relations that are in catalog_category_product. Per category type (anchor, non-anchor) the highest category id's were missing from the index.


  *Fix submitted by [Anton Evers](https://github.com/AntonEvers) in pull request [12624](https://github.com/magento/magento2/pull/12624)*. 




<!---MAGETWO-86711 -->* The log message created when Magento throws an exception when opening an image now tells you which file triggered the exception.  *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [13144](https://github.com/magento/magento2/pull/13144)*. 




<!---MAGETWO-86653 -->* Fix undeclared dependency magento/zendframework1 by magento/framework



 *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [12992](https://github.com/magento/magento2/pull/12992)*. 
[GitHub-12967](https://github.com/magento/magento2/issues/12967)


 Add dependency magento/framework to zendframework1

Expected result
vendor/magento/framework/composer.json should declare a dependency containing \Zend_Db_Select
Actual result
vendor/magento/framework/composer.json declares no dependency containing \Zend_Db_Select
This causes packages depending on magento/framework to fail execution



<!---MAGETWO-86645 -->* `Zend_Json` has been removed from the JSON result controller. [GitHub-9236](https://github.com/magento/magento2/issues/9236)



<!---MAGETWO-86568 -->* `\Magento\TestFramework\Annotation\AppArea` no longer breaks when it encounters valid values. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [12992](https://github.com/magento-engcom/magento2ce/pull/1194)*. [GitHub-2907](https://github.com/magento/magento2/issues/2907)
 

<!---MAGETWO-86299 -->* `Zend_Service` has been upgraded from v.1 to v.2, including these specific changes: 

	* Removed `Magento\Framework\Locale\CurrencyInterfac` from the `setService` method and changed it to `\Zend_Currency_CurrencyInterface`, which must be the provider to this function.

	* Changed return type to `\Zend_Currency_CurrencyInterface`, the given instance of the service is returned by the `setService` function.

	* Removed `\Zend_Service` from the `getService` method and changed it to `\Zend_Currency_CurrencyInterface`.

	* Added `@deprecated` tags to both methods and added `@see` annotation to the methods. Referenced the corresponding interface `\Magento\Directory\Model\Currency\Import\ImportInterface`. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12957](https://github.com/magento/magento2/pull/12957)*. [GitHub-9243](https://github.com/magento/magento2/issues/9243)

<!---MAGETWO-85063 -->* The ReleaseNotification module has been added to support the display of new release highlights. 

<!---MAGETWO-81339 -->* Magento now saves date and time correctly for different timezones and locales. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request [11306](https://github.com/magento/magento2/pull/11306)*. [GitHub-10485](https://github.com/magento/magento2/issues/10485), [GitHub-10580](https://github.com/magento/magento2/issues/10580), [GitHub-10686](https://github.com/magentomagento2/issues/10686), [GitHub-10754](https://github.com/magento/magento2/issues/10754)

<!---MAGETWO-70886 -->* The `Zend_Feed::importArray` static call has been replaced with a new interface. This concrete class takes the `Zend_Feed` object and returns its own result in the form of a wrapper around `Zend_Feed_Abstract`. *Fix submitted by [Dusan Lukic](https://github.com/ldusan84) in pull request [9347](https://github.com/magento/magento2/pull/9347)*.  [GitHub-9240](https://github.com/magento/magento2/issues/9240)

<!---MAGETWO-91328 -->* Customers can now successfully check out  when the AdBlock extension and Google Analytics are enabled.

<!--- MAGETWO-90316 -->* Product records inside the `catalog_product_super_link` table are no longer updated needlessly when you save a configurable product. Previously, saving configurable product erased and then reinserted records in the `catalog_product_super_link` table even when child products were not changed. This practice quickly resulted in an unnecessarily large `catalog_product_super_link` table, especially in multi-website installations.

<!---MAGETWO-87952 -->* Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.

<!---MAGETWO-71034 -->* We’ve replaced the usage of `Zend_Json::encode`  in the setup marketplace tests. [GitHub-9236](https://github.com/magento/magento2/issues/9236)

<!---ENGCOM-1173 -->* The `Magento\Framework\Json\Helper\Data` class has been deprecated and removed from the` Magento\AdminNotification` module. [GitHub-10329](https://github.com/magento/magento2/issues/10329)





<!---MAGETWO-75326 -->* 


Ignore request key check for error page to avoid redirect loop

Problems described in the issue was caused by redirect occuring when request made to the application had incorrect URL key. This specific situation took place only when user had no access to any part of application. So finally trying to get access to `adminhtml/index` controller, he got redirected to `adminhtml/noroute/denied` that he also have no access because of incorrect URL key.


[GitHub-10611](https://github.com/magento/magento2/issues/10611)

Magento admin gets in redirect loop when I login with a role that has no resources assigned

Expected result
I would expect a redirect back to the login page with a message or a page that shows an error message or warning.

Actual result
I get an ERR_TOO_MANY_REDIRECTS error in Chrome, insinuating that the page is in a redirect loop. 



<!---MAGETWO-82428 -->*


[GitHub-11581](https://github.com/magento/magento2/issues/11581)

ence to wrong / non-existing class 

Steps to reproduce
In the method Magento\Sales\Model\Order\Pdf\Invoice::getPdf comment out the call to $this->insertOrder(
Go to the backend and print an invoice
Expected result
I should see the invoice without the order details
Actual result
I get a fatal error because the class Zend_Pdf_Color_RGB is not found in the `_drawHeader` method.




<!---MAGETWO-81276 -->* An entry for `compiled_config` cache  has been added to the `cache.xml` file. [GitHub-11295](https://github.com/magento/magento2/issues/11295)

<!---ENGCOM-976 -->* The report page now returns a 500 status code (internal server error) instead of a 503 status code when an unexpected error happens,  such as an event that generates the report format pages. *Fix submitted by [AlexWorking](https://github.com/AlexWorking) in pull request [14190](https://github.com/magento/magento2/pull/14190)*. [GitHub-11512](https://github.com/magento/magento2/issues/11512)

<!---ENGCOM-983 -->* You can now use the layout update XML field to include custom CSS in CMS pages. [GitHub-4454](https://github.com/magento/magento2/issues/4454)

<!---ENGCOM-1199 -->* The `$params` parameter for the post method of  `\Magento\Framework\HTTP\ClientInterface` has been updated to support string type. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [14481](https://github.com/magento/magento2/pull/14481)*. [GitHub-3489](https://github.com/magento/magento2/issues/3489)

<!---ENGCOM-1122 -->* We've added JSON and XML support to the post method in the `\Magento\Framework\HTTP\Client\Socket` class. *Fix submitted by [Sergey P](https://github.com/simpleadm) in pull request [14169](https://github.com/magento/magento2/pull/14169)*. [GitHub-3489](https://github.com/magento/magento2/issues/3489)

<!---ENGCOM-1261 -->*  After restart of MySQL, changelog tables now always contain at least one record. Previously, changelog tables were empty, which resulted in a loss of the last 'auro_increment' value for the product 'version_id'. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [14636](https://github.com/magento/magento2/pull/14636)*. [GitHub-14465](https://github.com/magento/magento2/issues/14465)

<!---ENGCOM-1369 -->* Magento now displays two distinct widgets on the homepage as expected when you create two widgets of type `Catalog Product List` to the `CMS homepage` at location `content.bottom` with different titles, but the same condition. Previously, the first widget loaded was displayed twice depending on sort order. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [14816](https://github.com/magento/magento2/pull/14816)*. [GitHub-4389](https://github.com/magento/magento2/issues/4389)



<!---ENGCOM-1397 -->* Show Store Views in Terms and Conditions grid. 


*Fix submitted by [Rostyslav](https://github.com/rostyslav-hymon) in pull request [14868](https://github.com/magento/magento2/pull/14868)*. [GitHub-13944](https://github.com/magento/magento2/issues/13944)



Go to "Stores -> Terms and Conditions" and create new Condition
Do this for different Store Views
No Store View in Column "Store View"
Expected result
Store View should be shown in Column "Store View"




<!---ENGCOM-1416 -->* The Change Password warning message no longer appears twice when Magento prompts you to change your password in the Admin. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [14897](https://github.com/magento/magento2/pull/14897)*. [GitHub-14895](https://github.com/magento/magento2/issues/14895)

<!---ENGCOM-2232 -->* We fixed backward-incompatible changes to transport variable event parameters that had previously resulted in neither the email or the `$transport` variable being changed

Previously, neither the email or the `$transport` variable was changed.

*Fix submitted by [gwharton](https://github.com/gwharton) in pull request [16600](https://github.com/magento/magento2/pull/16600)*. [GitHub-10210](https://github.com/magento/magento2/issues/10210)


We waht to change the payment_html for banktransfer invoices. Unfortunately the instruction is also sent in invioce email. And there the customer already has paid the bill.

Expected result
Email should be modified and new or changed variables should be output in email.
Actual result
Email is unchanged, and $transport variable seems not to be changed.



<!---ENGCOM-1508 -->* Pages are now successfully rendered when the `meta title` page configuration parameter is set. *Fix submitted by [Lorenzo Stramaccia](https://github.com/slackerzz) in pull request [11368](https://github.com/magento/magento2/pull/11368)*. [GitHub-2956](https://github.com/magento/magento2/issues/2956)

<!---ENGCOM-2250 -->* CSS code is now automatically updated in the browser. Previously, users had to press **CTRL+F5**  to see CSS changes. [GitHub-11354](https://github.com/magento/magento2/issues/11354)




<!---ENGCOM-2088 -->* 




Of course advanced users can do some research and choose a backend that best suits their needs, but the default backend (Zend_Cache_Backend_File) is widely used simply because it is the default despite it having terrible performance with cleaning tags. For example there are several forum threads where users recommend shop owners to clear their cache periodically to maintain good performance. Clearing cache should not be necessary to maintain good performance for a small store. Also, if there is a better solution with no drawbacks, why not use it?

I recommend changing the default to Cm_Cache_Backend_File which has the same basic requirements (write access to var/cache) but does not rape the file system when clearing cache entries by tag. It does perform one append-only write for each tag when a cache item is saved, but overall utilizes the disk much more conservatively (way fewer inodes, way fewer file reads)


Change default cache backend

*Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [135](https://github.com/magento-engcom/php-7.2-support#135)*.

[GitHub-128](https://github.com/magento/magento2/issues/128), [GitHub-124](https://github.com/magento/magento2/issues/124), [GitHub-129](https://github.com/magento/magento2/issues/129)



Config and basics for all shipping: Ability to enable/disable for frontend of backend specifically

Ability to enable/disable shipping method on frontend and/or backend or both

Usecase: we want to enable free shipping or pickup only in the backend (for the admin to use, not the customers)

Moves all new encryption to the sodium library. Supports decryption using legacy mcrypt ciphers. This PR ensures new values are (en-de)crypted with sodium and legacy values can be decrypted using mcrypt.




<!--- ENGCOM-943 -->* `\Magento\Framework\Encryption\Encryptor::getHash` now uses the specified hashing algorithm version. *Fix submitted by [Mads Nielsen](https://github.com/k4emic) in pull request [13885](https://github.com/magento/magento2/pull/13885)*. [GitHub-5463](https://github.com/magento/magento2/issues/5463)

<!---ENGCOM-1806 -->* The **Multiple Payment Methods Enabled** setting now works as expected. Previously, Magento threw this error when this setting was enabled: `Found 3 Elements with non-unique Id`. [GitHub-15348](https://github.com/magento/magento2/issues/15348)



#### Application framework

<!---MAGETWO-83091 -->* We've removed undefined fields from files in `/lib`. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11662](https://github.com/magento/magento2/pull/11662)*. 

<!---MAGETWO-83034 -->* The doc block that describes `setValue` in `FilterBuilder` now reflects that this method will accept an array. *Fix submitted by [bytecreation](https://github.com/ByteCreation) in pull request [11855](https://github.com/magento/magento2/pull/11855)*.

<!--- MAGETWO-82664-->* Magento now uses valid ISO language codes in HTML headers. *Fix submitted by [Cristian Sanclemente](https://github.com/crissanclick) in pull request  [11644](https://github.com/magento/magento2/pull/11644)*. [GitHub-11540](https://github.com/magento/magento2/issues/11540)

<!--- MAGETWO-70736-->* Magento can now generate unsecure URLs if the current URL is secure. [GitHub-6175](https://github.com/magento/magento2/issues/6175)

<!--- MAGETWO-82235-->* The `php bin/magento app:config:dump` command no longer adds an extra space to multiline array values every time it runs. Previously, this command inserted extra spaces, which triggered Github to commit these files as changed. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11452](https://github.com/magento/magento2/pull/11452)*. [GitHub-11328](https://github.com/magento/magento2/issues/11328)

<!--- MAGETWO-82007-->* The `StockItemCriteriaInterface` method `setProductsFilter` now accepts an array of IDs. Previously, this method accepted either a single integer or an array, but returned only one item. *Fix submitted by [Kirill Morozov](https://github.com/kirmorozov) in pull request [11503](https://github.com/magento/magento2/pull/11503)*.[GitHub-7678](https://github.com/magento/magento2/issues/7678)


<!--- MAGETWO-93723,  MAGETWO-92185-->* The Magento application framework has been updated to address a jQuery security issue.

<!--- MAGETWO-71060-->* 

Replace Zend_Json usage in Framework/Module/PackageInfo.php …

inject the new \Magento\Framework\Serialize\Serializer\Json class,
update the load method to use the Serializer,
update the load method to catch the InvalidArgumentException exception

Upgrade components from ZF1 to ZF2

As a long term goal, we would like to eliminate knowledge about 3rd party libraries from Magento code base. Magento code still can use 3rd party libraries, but they must be wrapped by Magento interfaces and classes (adapters) so that 3rd party libraries can be easily substituted by newest versions or alternative implementations.


[GitHub-9236](https://github.com/magento/magento2/issues/9236)


<!--- MAGETWO-70966-->* 

The DataObject class has a method `toJson` that uses `Zend_Json`. Since this at EOF we should replace the usage. Unfortunately in this case that is not so "simple" after some discussion with @okorshenko it was decided to create a new static class for this single case. This should not be used in other places but for this case it is "ok".

https://github.com/magento/magento2/issues/9236

As a long term goal, we would like to eliminate knowledge about 3rd party libraries from Magento code base. Magento code still can use 3rd party libraries, but they must be wrapped by Magento interfaces and classes (adapters) so that 3rd party libraries can be easily substituted by newest versions or alternative implementations.



Upgrade ZF components. Zend_Json 




<!--- MAGETWO-71040-->* copy from 221 80181

Remove Zend_Json from the Webapi

ade ZF components. Zend_Jso

Upgrade components from ZF1 to ZF2

As a long term goal, we would like to eliminate knowledge about 3rd party libraries from Magento code base. Magento code still can use 3rd party libraries, but they must be wrapped by Magento interfaces and classes (adapters) so that 3rd party libraries can be easily substituted by newest versions or alternative implementations.



<!--- MAGETWO-71059 -->* copy from 221 80182

Remove Zend_Json from setup

Replace Zend_Json in the setup PackagesAuth with the new Serializer\Json

Replace Zend_Json in the setup PackagesAuth with the new Serializer\Json





<!--- MAGETWO-71062 -->* We’ve removed the usage of `Zend_Json` from the JSON controller. [GitHub-10342](https://github.com/magento/magento2/issues/10342)

<!--- MAGETWO-71933-->* 

Allow BEM class via attribute tag

Before the fix, classes with – in them was replaced with a single - so result with input class--1 appears as class-1, breaking the BEM convention.

Adding BEM class in XML via attribute tag causes class to be rewritten

Steps to reproduce
Go to default.xml
Add attribute tag with a class to the body element i.e. <attribute name="class" value="background-color--white"/>
Clear cache and reload page
Expected result
Class should be rendered as it is added in the XML i.e. background-color--white
Actual result
Classes with -- in them are replaced with a single - so result appears as background-color-white


[GitHub-10645](https://github.com/magento/magento2/issues/10645)


#### Configuration framework

<!---MAGETWO-83083 -->* An order's `relation_child_id` and `relation_child_real_id` fields are now accurately set during edit operations. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [11909](https://github.com/magento/magento2/pull/11909)*. [GitHub-10195](https://github.com/magento/magento2/issues/10195)

<!--- MAGETWO-82998-->* Pages that contain layout files with `block_id` arguments that contain whitespace now load correctly. Previously, Magento threw an error when loading these pages. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [11849](https://github.com/magento/magento2/pull/11849)*.[GitHub-7640](https://github.com/magento/magento2/issues/7640)

<!---MAGETWO-81310 -->* The config array can now read  all settings from `config`. Previously, the config array was hardcoded to read three settings only. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request [11302](https://github.com/magento/magento2/pull/11302)*.


<!---MAGETWO-75458 -->* You can now assign a default value to config fields of type `image` or `file`.  *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10253](https://github.com/magento/magento2/pull/10253)*.[GitHub-10252](https://github.com/magento/magento2/issues/10252)

#### Customer accounts

<!-- MAGETWO-93714 -->* Customer attributes are now correctly validated on the Admin Order form. Previously, Magento validated attributes\length  after an order has been submitted, but not on the Admin Order form.

<!--- MAGETWO-90143 -->* A user who has been denied permissions for negotiable quote editing can now create customer addresses.

<!--- MAGETWO-86530 -->* Magento now trims trailing and leading spaces when saving the name of a new contact. *Fix submitted by [wardcapp](https://github.com/wardcapp) in pull request [12964](https://github.com/magento/magento2/pull/12964)*. [GitHub-10415](https://github.com/magento/magento2/issues/10415)



#### JavaScript framework

<!--- MAGETWO-85096-->* Magento now displays video and images as expected when you select a video or click to view a full-screen image for a configurable product. *Fix submitted by [Chumak Roman](https://github.com/roma84) in pull request [12556](https://github.com/magento/magento2/pull/12556)*. [GitHub-12268](https://github.com/magento/magento2/issues/12268)

<!---MAGETWO-81426 -->* We've removed duplicate parameters from a Magento UI LESS library mixin. *Fix submitted by [Bartek Igielski](https://github.com/Igloczek) in pull request  [11276](https://github.com/magento/magento2/pull/11276)*.

<!---MAGETWO-85958 -->* changed dataprovider constructor to the RendererInterface
Changed InlineTest to a Inline class object (which is instantiated) and not a Translate class object

Previously: This lead to the 2 problems:

Inline translation does not work for Knockout templates.
Custom translators (which can be injected as an argument for \Magento\Framework\Phrase\Renderer\Composite) do not work for Knockout templates.

Agree, but RendererInterface should be used instead of Renderer\Composite


changed dataprovider constructor to the RendererInterface
Changed InlineTest to a Inline class object (which is instantiated) and not a Translate class object


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12007](https://github.com/magento/magento2/pull/12007)*. 
[GitHub-2156](https://github.com/magento/magento2/issues/2156)

<!---MAGETWO-71647 -->* Magento no longer incorrectly overly encodes UTF-8 files when JavaScript Bundling is enabled. Previously, this issue resulted in poor character encoding on the storefront. [GitHub-10562](https://github.com/magento/magento2/issues/10562), [GitHub-6733](https://github.com/magento/magento2/issues/6733)

<!---ENGCOM-1368 -->* ix to allow use decimals less then 1 in subproducts 

title: [Forwardport] Fix to allow use decimals less then 1 in subproducts qty.
url: magento/magento2#14814
contributor name: @ihor-sviziev
contributor link: https://github.com/ihor-sviziev

Ihor Sviziev


[GitHub-14692](https://github.com/magento/magento2/issues/14692)

'validate-grouped-qty' validation is meaningless

Seems that this 'validate-grouped-qty' validation haven't sense because validation should be done on the child elements.

And seems that current implementation is buggy. Seems that sense of this validation is check that sum of qty for all products is more then one. But what sense in it?

Grouped Product can contains simple products with "Qty Uses Decimals" = Yes and "Minimum Qty Allowed in Shopping Cart" less than 1 (for example 0.05). As result sum of qty would be 0 (because of
using parseInt()).

Seems that 'validate-grouped-qty' should be deleted at all or rewritten to just call subproduct's validators.

Quick fix to allow use decimals less then 1 in subproducts qty.



There is impossible to place order from grouped product where subproducts qty less then one.



<!---ENGCOM-1723 -->* 

Javascript error dropdowns.js 

title: [Forwardport] Issue 15469: Javascript error dropdowns.js
url: magento/magento2#15607
contributor name: @dmytro-ch
contributor link: https://github.com/dmytro-ch

Dmytro Cheshun

[GitHub-15469](https://github.com/magento/magento2/issues/15469)

Magento's lib/web/mage/dropdowns.js has a bug that prevents a developer from specifying autoclose: false as an option for the dropdown function.

Fixes Javascript error in dropdowns.js by properly initializing the el variable. options.autoclose can now be set to false







<!---ENGCOM-1456 -->* You can now disable the full-screen gallery on mobile devices. [GitHub-12490](https://github.com/magento/magento2/issues/12490), [GitHub-12285](https://github.com/magento/magento2/issues/12285)

<!---ENGCOM-1006 -->* Change photo only if user swipe horizontally #14123

title: Change photo only if user swipe horizontally
url: magento/magento2#14123
contributor name: @DaniloEmpire
contributor link: https://github.com/DaniloEmpire

Danilo Argentiero


[GitHub-7906](https://github.com/magento/magento2/issues/7906)

I think this happend after Chrome update...(something changed in chrome)
Everything used to work fine...i think until couple of days ago...i noticed my chrome got updated on my android phone and so seems to be my pc chrome.'


It's bad because if you try to scroll down, it always triggers the swipe...



<!---ENGCOM-2105 -->*  The calendar widget (`jQuery UI DatePicker`) now correctly displays more than one month. [GitHub-7379](https://github.com/magento/magento2/issues/7379)


<!---ENGCOM-2895 -->*  JavaScript files are now located inside the `web/js` directory. 

<!---ENGCOM-1793 -->*  Menus with nested elements now align correctly. [GitHub-7897](https://github.com/magento/magento2/issues/7897)


<!--- ENGCOM-774 -->* Upgrade jquery.mobile.custom.js to be compatible with jQuery 3.x

title: #13685 Upgrade jquery.mobile.custom.js to be compatible with jQuery 3.x
url: magento/magento2#13688
contributor name: @kirmorozov
contributor link: https://github.com/kirmorozov


#### Session framework

<!--- MAGETWO-87153 -->* The `sid` variable (`?sid`) no longer appears in the URL even if it's disabled in backend. [GitHub-9453](https://github.com/magento/magento2/issues/9453)  

<!--- MAGETWO-88084 -->* We’ve removed the 30-second timeout limit for the session locking mechanism when Redis is used for session storage.

<!--- MAGETWO-87754 -->* 


Update colinmollenhour/php-redis-session-abstract to version supporting PHP 7.2.

 *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [39](https://github.com/magento-engcom/php-7.2-support/pull/39)*. 

<!--- MAGETWO-83289 -->* When you add a product to your wish list after logging out, Magento now redirects you to your account Wish list page and adds the product. Previously, you were redirected to your wishlist page, but Magento did not add the product. [GitHub-11825](https://github.com/magento/magento2/issues/11825)



<!---ENGCOM-2794 -->* Fix unstable session manager

title: [Forwardport] Fix unstable session manager
url: magento/magento2#17608
contributor name: @jignesh-baldha
contributor link: https://github.com/jignesh-baldha

Jignesh Baldha


[GitHub-12362](https://github.com/magento/magento2/issues/12362)

Concurrent (quick reload) requests on checkout cause cart to empty - related to session_regenerate_id

Steps to reproduce
Add product to cart
Navigate to checkout
Reload the page as quick as possible (F5 multiple times)
Expected result
Reload the checkout as usual
Cart contains session items
Actual result
Redirects to empty cart
session_id() is old session id (previous request regenerated a new session_id, but this request has old session_id)



### General fixes

<!--- MAGETWO-87153 -->*  [GitHub-12715](https://github.com/magento/magento2/issues/12715)  

Storefront Back to Sign in button does not work as expected 



Steps to reproduce
Go to Storefront as a guest
Start creating new customer
Fill in all the required fields
Click Create an Account
Click click here from message `Please check your email for the confirmation link or click here for a new link`
Click Back to Sign In button


Expected result
Customer is redirected to Sign In form

Actual result
Page is just reloaded




<!--- MAGETWO-87153 -->*   [GitHub-12719](https://github.com/magento/magento2/issues/12719) 

Welcome message is shown with customer's first and last names after confirming account

Steps to reproduce
Go to Storefront as a guest
Start creating new customer
Fill in all the required fields
Click Create an Account
Open confirmation email and click the Confirm Your Account button
Expected result
Website loads with customer logged in, welcome message contains customer's first and last names

Actual result
Website loads with customer logged in, welcome message does not contain customer's first and last names





<!--- MAGETWO-87442 -->*  [GitHub-11882](https://github.com/magento/magento2/issues/11882) 

It's not possible to enable "log to file" (debugging) in production mode

It's not possible to change the "dev/debug/debug_logging" sys config field while in production mode. It should definitely be set to "No" as default (like when switching from developer/default to production) but you should be allowed to change this value even while in production mode.

Steps to reproduce
Switch to production mode
Expected result
From the admin, go into "Stores/Configuration/Advanced/Developer/Debug/Log to file"
Try to change the dropdown value, but you can't because the input is disabled
Actual result
From the admin, go into "Stores/Configuration/Advanced/Developer/Debug/Log to file"
You can change the dropdown value




<!--- MAGETWO-87449 -->*    [GitHub-6350](https://github.com/magento/magento2/issues/6350) 

Frontend: Datepicker/calendar control does not use the store locale 

the frontend datepicker control (for example for the DOB field) is not localized: month names, day names and week start date are all using en_US.



Steps to reproduce
Admin > Settings > Configuration > Customer > Customer Configuration > "Show Date of Birth: Require"
Admin > Settings > Configuration > General > Locale Options > "First Day of Week: Monday"
clear cache / rebuild static assets if needed
in the frontend, edit your account and use the datepicker of the DoB control
Expected result
the month names in the dropdown are translated
the weekday names are translated
the week starts with monday
Actual result
the month names are in english
the weekday names are in english
the week starts with sunday




<!--- MAGETWO-87449 -->*   [GitHub-6858](https://github.com/magento/magento2/issues/6858)

DatePicker date format does not reflect user's locale

Steps to reproduce
Find any date field in Magento, e.g. customer edit form Date of Birth, and choose a date.

Expected result
The date is in the current user's locale's standard date format.

Actual result
The date is in the format mm/dd/yyyy.



<!--- MAGETWO-87449 -->*  [GitHub-6831](https://github.com/magento/magento2/issues/6831)  

Magento 2.1.1 Invalid input date format 'Invalid date' 

Steps to reproduce
Create an admin listing by using Ui component
There are date type column
Enable the inlineEdit function for the date type column
Expected result
When row is clicked and the inline editing mode enabled, the date column should be converted to the correct value in date picker UI
Save the row should have no error
Actual result
in editing mode, the date value showed in the Date Picker Ui will always shows the value of current date instead of the actual column value
Randomly error Invalid input date format 'Invalid date' will show up, but if clicking the date picker something else seem to be triggered and then it would be fine to save from inlineEdit mode



<!--- MAGETWO-87523 -->*  [GitHub-8003](https://github.com/magento/magento2/issues/8003)  


Using System Value for Base Currency Results in Config Error

Using System Value for Base Currency Results in Config Error

Checking Use system value for the base currency in the currency options results in a configuration error when importing currency rates.

Expected result
Currency rates are imported for Allowed Currencies
Actual result
You must first configure currency options before being able to see currency rates. is displayed on Currency Rates page and user is unable to import rates via any of the services.




<!--- MAGETWO-87562 -->*  

[GitHub-11796](https://github.com/magento/magento2/issues/11796)   

 Magento2.2.0 home page product grid issues

double column layout  where one column is blank





<!-- MAGETWO-87152 -->*  Merchants can now successfully delete the default welcome message 




[GitHub-9742](https://github.com/magento/magento2/issues/9742)   


Default welcome message returns after being deleted



Steps to reproduce
Go to Content > Configuration > Click Edit on theme being used
Expand Header section to reveal "Welcome Text" field
Field will be populated with "Default welcome msg!"
Delete the text, and click save (or save and continue edit)
Repeat steps 1 to 3.
Examine same form field - contents will reappear (seemingly not deleted, although front end at this stage will not display it).
Click save again
8 Welcome text has been saved to default value again and will reappear on the website.


Expected result
Default value, once deleted, should not reappear.


Actual result
Default value reappears, and is applied next time you click save.
Same thing happens with the Footer default copyright notice.




<!--- MAGETWO-87176 -->*  [GitHub-12206](https://github.com/magento/magento2/issues/12206)  


Tracking link returns 404 page in admin panel

Expected result
Url should be generated for store where order was placed

Actual result
Url generated for admin URL, as result - we have 404 page




 
<!--- MAGETWO-87176 -->*  [GitHub-11946](https://github.com/magento/magento2/issues/11946)  

Layer navigation showing wrong product count 


Actual result:
count calculation based on backend stock setting.
Getting errors -
Layer navigation count wrong due to Magento count only in-stock product.



<!-- MAGETWO-87151 -->*   [GitHub-11941](https://github.com/magento/magento2/issues/11941) 


Invoice for products that use qty decimal rounds down to whole number 

This is a new issue in Magento 2.2.0. This feature works as expected in all previous versions. Use check/money order for payment. When trying to invoice an order that has products with quantity decimals, the invoice rounds down to the nearest whole number. Example, ordered 6.5 of a product but the invoice uses 6. The ultimate reason this is not working is in the table sales_order_item column is_qty_decimal is not being set to 1.

Expected result
Invoice should automatically use the QTY ordered such as 6.5
Ability to edit of a quantity similar to 5.5
Button to update the invoice to show the changes if modified from the original
Review the database table sales_order_item and column is_qty_decimal = 1
Actual result
Quantity is rounded down to the nearest whole number and unable to edit the qty to be invoiced
Inspecting the database sales_order_item I noticed that is_qty_decimal was set to 0, changing that to 1 made the invoice show 6.5 for the quantity.
Ability to edit a check/money order quantity should be available by default, rather than having to do a new module that sets the flag `$_canCapturePartial = true;`






<!-- MAGETWO-87064 -->*  [GitHub-11157](https://github.com/magento/magento2/issues/11157)  

nginx.sample.conf missing heath_check.php?

I've updated to 2.2, and regularly get the error below in my nginx error logs. I believe it's because health_check which is used in varnish config is not catered for in the nginx sample vhost configuration

Expected result
No errors
Actual result
nginx error log



<!--- MAGETWO-84853-->* Magento now validates  custom layout update XML against the schema file when you save the XML. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11859](https://github.com/magento/magento2/pull/11859)*. 

<!--- MAGETWO-88973-->* You can now successfully close full-screen zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if you chose full screen zoom for any product image, you could not close the full screen zoom.

<!--- MAGETWO-72508-->* Deleting a customer in Admin Panel no longer causes fatal errors upon storefront login or registration.

<!---MAGETWO-85662 -->* The **Modified** date field is now updated as expected when you save a page in a deployment running Magento 2.2.1.  *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request  [12637](https://github.com/magento/magento2/pull/12637)*. [GitHub-12625](https://github.com/magento/magento2/issues/12625)

<!--- MAGETWO-85673-->* When the **Redirect Customer to Account Dashboard after Logging in** setting is disabled, Magento now includes the login URL (including the referer in base64 encoding) from the `window.checkout` object as expected (for example, https://myshop.com/customer/account/login/referer/aHR0cHM6Ly9teXNob3AuY29tL2NoZWNrb3V0). 

<!--- MAGETWO-85539-->* Magento now correctly handles `file` or `image` type customer attributes. Previously, when you tried to save customer information when one of these customer attributes were set, Magento threw an exception and did not save the file. *Fix submitted by [Franciszek Wawrzak](https://github.com/fsw) in pull request  [11267](https://github.com/magento/magento2/pull/11267)*. [GitHub-11252](https://github.com/magento/magento2/issues/11252)

<!--- MAGETWO-83276-->*  You can now use uppercase letters in store codes. *Fix submitted by [Manu Gonzalez Rodriguez](https://github.com/manuelson) in pull request  [12010](https://github.com/magento/magento2/pull/12010)*. [GitHub-11996](https://github.com/magento/magento2/issues/11996)

<!--- MAGETWO-83002 -->* You can now add a new attribute class to a page's XML root by adding an HTML node. Previously, adding an HTML node caused a validation error. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request 11862*. [GitHub-11697](https://github.com/magento/magento2/issues/11697)

<!--- MAGETWO-84317 -->* The `\Magento\Quote\Model\ResourceModel\Quote\Item\Collection` now returns items that have only existing relations in the `catalog_product_entity` table. Previously, Magento loaded quote items with non-existing products.

<!---MAGETWO-81969 -->* Magento now correctly renders the download link in invoice emails. *Fix submitted by [Jakob Meissner](https://github.com/skymeissner) in pull request   [11024](https://github.com/magento/magento2/pull/11024)*.

<!--- MAGETWO-82342-->* `AuthenticationInterface` now contains API interceptors that enhance user authentication, making it possible (for example) to implement a different hashing algorithm for non-Magento to Magento migrations. *Fix submitted by [Navarr Barnier](https://github.com/navarr) in pull request 11546*.

<!---MAGETWO-82667 -->* The Magento UI mixins have been edited to improve performance. Changes include: 
    * removing all fallbacks to variables that don't exist in the global scope
    * defining all variables that are used inside mixins as parameters
    * adding all missing parameters to the areas of the code where mixins are invoked
    * moving and simplifying mixins used only once *Fix submitted by [Bartek Igielski](https://github.com/Igloczek) in pull request [11371](https://github.com/magento/magento2/pull/11371)*.


<!---MAGETWO-82760 -->* The dashboard y-axis range has been enhanced by the addition of an index for y-axis range values. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [11752](https://github.com/magento/magento2/pull/11752)*. [GitHub-7927](https://github.com/magento/magento2/issues/7927)

<!---MAGETWO-81622 -->* Lengths for the following fields in the `quote_address` database table have been expanded: `telephone`, `fax`, `region`, and `city`. *Fix submitted by [Yaroslav Rogoza](https://github.com/rogyar) in pull request [11286](https://github.com/magento/magento2/pull/11286)*. [GitHub-10869](https://github.com/magento/magento2/issues/10869)

<!--- MAGETWO-81329-->* `Magento\Framework\Escaper` now contains the `escapeDollarSign` method, which looks for `${` and replaces `$` with `$`  during save actions involving the page and block controller. *Fix submitted by [Lorenzo Stramaccia](https://github.com/slackerzz) in pull request [11286](https://github.com/magento/magento2/pull/11286)*. [GitHub-10501](https://github.com/magento/magento2/issues/10501)

<!--- MAGETWO-70758-->* Magento now displays product review summaries only when a product has at least one review. *Fix submitted by [Jan Schlosser](https://github.com/decius7bc) in pull request [10248](https://github.com/magento/magento2/pull/10248)*. [GitHub-4530](https://github.com/magento/magento2/issues/4530)

<!--- MAGETWO-70797-->*   Magento now uses the config field backend model (`system.xml`) to generate default configuration values on the Admin. Previously, The `afterLoad()` method was evoked only after loading the configuration value from the database, and not after loading the configuration from `config.xml`. This caused the default configuration from `config.xml` to be passed to the form-element as `string` instead of `Array`, which resulted in empty configuration fields in the Admin. *Fix submitted by [kweij](https://github.com/kweij) in pull request [7742](https://github.com/magento/magento2/pull/7742)*. [GitHub-4530](https://github.com/magento/magento2/issues/7741)

<!--- MAGETWO-80193-->* Magento now selects the `CUST_GROUP_ALL` customer group in `adminhtml` after saving an attribute, and all `$customerGroups['value']` is now of type `string`. *Fix submitted by [Manuel Schmid](https://github.com/mash1t) in pull request [10475](https://github.com/magento/magento2/pull/10475)*. [GitHub-10436](https://github.com/magento/magento2/issues/10436)

<!--- MAGETWO-71544-->* Session cookies now last until the session closes. Previously, Magento interpreted a `form_key` cookie lifetime of 0 to determine the duration of the cookie lifetime, and the cookie expired immediately. *Fix submitted by [Eero Kuusela](https://github.com/ekuusela) in pull request [10528](https://github.com/magento/magento2/pull/10528)*. [GitHub-10527](https://github.com/magento/magento2/issues/10527)

<!--- MAGETWO-71544, MAGETWO-71539-->* Google Analytics has improved support of websites that conduct transactions in multiple currencies. Previously, payment providers that required different base currencies were configured as different websites in a multisite deployment,  and consequently had to send different base currency in Google Analytics.  *Fix submitted by [DominicWatts](https://github.com/DominicWatts) in pull request [10508](https://github.com/magento/magento2/pull/10508)*. [GitHub-6709](https://github.com/magento/magento2/issues/6709), [GitHub-7471](https://github.com/magento/magento2/issues/7471)

<!--- MAGETWO-71642-->*  Google Adwords now has the ability to provide transaction-specific conversion values in a conversion tracking tag. *Fix submitted by [DominicWatts](https://github.com/DominicWatts) in pull request [10558](https://github.com/magento/magento2/pull/10558)*. [GitHub-6708](https://github.com/magento/magento2/issues/6708)

<!--- MAGETWO-71833-->* The text in the authentication popup has been corrected to **Checkout as a new customer**. *Fix submitted by [Parker Smith](https://github.com/insanityfarm) in pull request [10627](https://github.com/magento/magento2/pull/10627)*. [GitHub-9533](https://github.com/magento/magento2/issues/9533)


<!---ENGCOM-1229 -->* 

Expected result
The Google Analytics code should be rendered near the top of the <head> tag on the page (at least, inside the <head> tag)

Actual result
The Google Analytics code is rendered near the top of the <body> tag (inside the <body> tag)
Moved Google Analytics block code to head tag


https://github.com/magento/magento2/issues/8837





<!--- MAGETWO-88039-->*   

Method mentioned above tried to select field value from joined variable_value table (which doesn't exist). I've replaced incorrect field with two proper ones: plain_value and html_value.





Fix adding values to system variable collection



Changed select fields in joined variable value table in Magento\Variable\Model\ResourceModel\Variable\Collection#addValuesToResult() method to match DB schema


 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13735](https://github.com/magento/magento2/pull/13735)*.

 Changed select fields in joined variable value table in Magento\Variable\Model\ResourceModel\Variable\Collection#addValuesToResult() method to match DB schema

Description
Method mentioned above tried to select field value from joined variable_value table (which doesn't exist). I've replaced incorrect field with two proper ones: plain_value and html_value.



<!--- MAGETWO-88018-->*    


Display a more meaningful error message in case of misspelt module name


[LogicException] Component 'VendorA_ModuleB' of type '' is not correctly registered.
instead of
[Magento\Framework\Exception\FileSystemException] The file "/composer.json" doesn't exist

 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13731](https://github.com/magento/magento2/pull/13731)*.



<!--- MAGETWO-86251-->*    Respect "Learn More Link" in Recently Viewed Products widget options

Manual testing scenarios
Create Recently Viewed Products widget.
In Widget Options > Product attributes to show, enable Name, Image and Price.
On frontend the widget will also display the Learn More Link.


`Learn More Link` widget option in a Recently Viewed Products widget isn't respecting its setting.

 *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [12947](https://github.com/magento/magento2/pull/12947)*.



<!--- MAGETWO-85968-->*   Remove title ?Billing Agreements? from customer_account.xml. After logging in the dashboard title will be 'Billing Agreements' because of inheritance.



Remove title “Billing Agreements

[GitHub-7816](https://github.com/magento/magento2/issues/7816)



Customer_account.xml file abused

From the Magento Paypal module, this is added in its customer_account.xml file:

<head>
    <title>Billing Agreements</title>
</head>
This is very unwise since the benefit of having the customer_account is that all the pages on there use it to update for the convenience of getting all of the dashboard links and updates.

 Remove title ?Billing Agreements? from customer_account.xml. After logging in the dashboard title will be 'Billing Agreements' because of inheritance.

look up 225 engcom-1063



<!-- MAGETWO-93790 -->* Customer data is now fully loaded after restarting the browser during an unexpired user session. Previously,  the `section_data_ids` section of the session cookie was not properly completed. [GitHub-14912](https://github.com/magento/magento2/issues/14912)

<!--- MAGETWO-90308 -->* `X-Magento-Vary` and `PHPSESSID` now have the same expiration time. Previously, the  `X-Magento-Vary` cookie had an expiration of `session`, which meant it was not considered expired until the browser was closed. In contrast, the `PHPSESSID` cookie had a finite expiration time (not `session`). At times, this resulted in  Magento caching the wrong page for the logged-in user.

<!--- MAGETWO-90285 -->* You can now delete rows in the `dynamicRows` component. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [921](https://github.com/magento/magento2/pull/921)*. [GitHub-8830](https://github.com/magento/magento2/issues/8830)


<!--- MAGETWO-86233 -->* Creating new configuration attributes no longer causes naming collisions in the JavaScript UI registry. Previously, when you created a new default attribute and then subsequently created a new product, JavaScript errors occurred.  *Fix submitted by [Volodymyr Zaets](https://github.com/VladimirZaets) in pull request [12945](https://github.com/magento/magento2/pull/12945)*. [GitHub-12555](https://github.com/magento/magento2/issues/12555)

<!--- MAGETWO-81646 -->* The `\Magento\Test\Php\LiveCodeTest::testCodeStyle`  method now uses whitelist files. *Fix submitted by [Adrian Martinez](https://github.com/adrian-martinez-interactiv4) in pull request [11376](https://github.com/magento/magento2/pull/11376)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)



<!--- MAGETWO-91762 -->* Magento now processes the oldest message queue entries first instead of last.

<!--- MAGETWO-67627 -->* You can successfully save a CMS page with same URL key as another store on a different website but with the same hierarchy. 

<!--- MAGETWO-66489 -->* You can now successfully preview a Registry Update email template. Previously, Magento threw a fatal error when you tried to preview this template. 


<!--- MAGETWO-64854 -->* Enterprise Rewards no longer permit double refunds. Previously, problems with the refund logic permitted the inadvertent creation of a double refund. 


<!--- MAGETWO-59789 -->* Swatch images now resize as expected. Previously, even when a product attribute with Catalog Input Type for Store Owner was set to **Visual swatch**, the image size did not adjust as expected. 

<!--- ENGCOM-1271 -->* Customers with an empty **Date of Birth** field can now be saved even when the field is not marked (or checked on the JavaScript side) as mandatory.  [GitHub-12146](https://github.com/magento/magento2/issues/12146)

<!--- ENGCOM-1256 -->*  Images can't be uploaded using WYSIWYG if media directory is a symlink

title: magento/magento2#13929: Images can't be uploaded using WYSIWYG if media directory is a symlink
url: magento/magento2#14353
contributor name: @mikewhitby
contributor link: https://github.com/mikewhitby

Mike Whitby



[GitHub-13929](https://github.com/magento/magento2/issues/13929)

As of 2.2.3, it's not possible to upload images via the WYSIWYG if the media directory is a symlink. This is due to this new file.




<!--- ENGCOM-1707 -->*  Removed mageMenu widget dependency from breadcrumbs component

title: [Forwardport] Removed mageMenu widget dependency from breadcrumbs component #15178
url: magento/magento2#15478
contributor name: @vovayatsyuk
contributor link: https://github.com/vovayatsyuk

Invisible breadcrumbs at product page when mageMenu widget is not used

Steps to reproduce
Open app/code/Magento/Theme/view/frontend/templates/html/topmenu.phtml
Remove the following code from the template:
data-mage-init='{"menu":{"responsive":true, "expanded":true, "position":{"my":"left top","at":"left bottom"}}}'
Navigate to the product page
Expected result
Breadcrumbs should remain visible
Actual result
Breadcrumbs are not rendered


<!--- ENGCOM-957 -->*

Expected result
No strings passed to setTimeout
Actual result
Magento uses strings in evaluation of setTimeout, this could escalate into being a security issue and will restrict the use of strict Content Security Policies.




title: 2.3 devel 14172 set timeout
url: magento/magento2#14173
contributor name: @jonathanKingston
contributor link: https://github.com/jonathanKingston
Jonathan Kingston

Restrict usage of setTimeout evaluation to allow the usage of a CSP and restrict evaluation exploits.




[GitHub-14172](https://github.com/magento/magento2/issues/14172)


Remove use of setTimeout eval

app/code/Magento/Integration/Controller/Adminhtml/Integration/LoginSuccessCallback.php
Should be replaced for function () {...}
app/code/Magento/Ui/view/base/web/js/lib/view/utils/raf.js
Should throw if the callback isn't a function




<!--- ENGCOM-1857 -->* Error 500 in Module Manager


Steps to reproduce
I've installed latest Magento ver 2.2.4
Module Manager doesn't show module grid when going through below step:
System > Tools > Web Setup Wizard > Module Manager
Expected result
It should show manage module grid.




title: [Forwardport] Error 500 in Module Manager
url: magento/magento2#15755
contributor name: @vijay-wagento
contributor link: https://github.com/vijay-wagento

Vijay Golani


[GitHub-15192](https://github.com/magento/magento2/issues/15192)

Module Manager module grid is not working

System > Tools > Web Setup Wizard > Module Manager





<!--- ENGCOM-1970 -->*

Fix Magento\Sales\Service\V1\ShipmentGetTest::testShipmentGet 

title: Fix Magento\Sales\Service\V1\ShipmentGetTest::testShipmentGet
url: magento/magento2#15982
contributor name: @slackerzz
contributor link: https://github.com/slackerzz

Lorenzo Stramaccia


[GitHub-1350](https://github.com/magento/magento2/issues/1350)

Install Quits on install on Magento_Catalog


This has now been solved by increasing the wait_timeout, connect_timeout and also delayed_insert_timeout



<!--- ENGCOM-2375 -->* Store view home pages in multistore deployments no longer display breadcrumbs. Previously, the first store view in a multistore deployment looked fine, but the other store views included unnecessary breadcrumbs on the home page. [GitHub-6504](https://github.com/magento/magento2/issues/6504)

<!--- ENGCOM-2729 -->* You can now enable logs as expected (through the use of **Stores** > **Configuration** > **Advanced** > **Developer** > **Debug** > **Log to file**) when switching from production mode to developer mode.

<!--- ENGCOM-2505 -->*  `magnifier.js` now works no matter which mode is set. (`magnifier.js` offers the option of setting mode to 'inside' for an in-frame zoom.) [GitHub-4977](https://github.com/magento/magento2/issues/4977)

<!--- ENGCOM-2279 -->* The `timestamp` fields in `oauth_nonce` now include indexes to avoid deadlocks while erasing old records. [GitHub-10346](https://github.com/magento/magento2/issues/10346)

<!---MAGETWO-87066 -->* The search bar now closes as expected when a user enters a search term in the mobile search bar, does not submit the search term, and then taps the search icon to close the search bar. [GitHub-11231](https://github.com/magento/magento2/issues/11231) 




<!---MAGETWO-87066 -->*  The 


[GitHub-10775](https://github.com/magento/magento2/issues/10775)

404 Forbidden sounds not right (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 

magento2/app/code/Magento/Backend/Controller/Adminhtml/Noroute/Index.php


"404 forbidden" error message has been corrected for accuracy to "404 not found" in 

Login into admin area

Call non existing admin action with ajax.





<!---MAGETWO-87066 -->*  [GitHub-11163](https://github.com/magento/magento2/issues/11163)

Magento 2.2.0 Pages showing error: Data key is missing: code-entity (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 

Not able to create or edit any page only showing this message:

Data key is missing: code-entity

Also have the same issue with creating pages after upgraded to 2.2.
Data key is missing: code-entity
When you click create page, that shows. Listing current pages works fine, but when adding, you come to page with just that.

rror: Data key missing: code entity
When creating a New page or editing an exisiting one.



<!-- MAGETWO-87057 -->*  [GitHub-11700](https://github.com/magento/magento2/issues/11700)

"Something Went Wrong" error for limited access admin user 

Steps to reproduce
Login as an admin user with limited access
Something went wrong error pops up after every page load
Server Logs and Magento Logs don't record any errors
Expected result
Logs should point to the error.
Actual result
[Screenshot, logs]



### Gift cards

<!---MAGETWO-90335 -->* `Magento now includes a gift card recipient's email address in the gift card account history. Previously, Magento did not include the gift card recipient's name and email address in the gift card account history, even though Magento successfully sent the email.

<!-- MAGETWO-93791 -->* Magento no longer permits users to save a new gift card  without first completing the required values. Previously, when creating a gift card, users could save the card without having designated an amount, but the card could not be purchased. Magento also created a `report.CRITICAL: Warning` error message in the `system.log`.

<!-- MAGETWO-93716 -->* Magento now maintains relationships between new gift card accounts when a customer purchases several gift cards in the same order. 

<!-- MAGETWO-93707 -->*  You can now save gift cards without the price being changed on the Admin to an unacceptable format. Previously, Magento tried to save amounts in unacceptable formats (such as the inclusion of a comma in a four-digit price), which triggered an error.  

<!--- MAGETWO-90791 -->* Magento now displays the correct subtotal when a customer adds multiple gift cards of different amounts to his cart. 

<!--- MAGETWO-88274 -->* The password strength meter has been refactored to perform an email comparison only if an email field exists in the same form on which the meter exists. Previously, Magento threw a JavaScript error under these conditions. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request [13819](https://github.com/magento/magento2/pull/13819)*. [GitHub-13429](https://github.com/magento/magento2/issues/13429)


### Google Analytics

<!-- MAGETWO-87442 -->* The Google Analytics pageview is no longer triggered twice. [GitHub-12221](https://github.com/magento/magento2/issues/12221) 


### Google Tag Manager

<!-- MAGETWO-93788 -->* The `addToCart` event triggers on the Google Task Manager console only when an item is added to the cart.  Previously, the event was triggered before the cart was updated. 

<!-- MAGETWO-92126 -->* Google Tag Manager product category data is now fully reported. Previously, the Google Tag Manager product category (Enhanced Ecommerce) data did not report all information. 

<!--- ENGCOM-1872 -->* Google analytics pageview is no longer triggered twice. [GitHub-12221](https://github.com/magento/magento2/issues/12221)

<!--- ENGCOM-633 -->*  Magento now correctly displays product titles when displaying Sales information in Google Analytics.  Previously, Magento replaced spaces in product names with their HTML values (for example, `\u0020`). [GitHub-13827](https://github.com/magento/magento2/issues/13827), [GitHub-13350](https://github.com/magento/magento2/issues/13350)







### GraphQL

<!---MAGETWO-83853 -->* 


Websites object was added to products results documented in the graphql SDL
GraphQL response returns null for website_ids


<!---ENGCOM-2318 -->* Category queries return category `id` and `name` values as expected.

<!---ENGCOM-2445 -->* Added the GraphQL StoreConfig query

<!---ENGCOM-2320 -->* The `CatalogGraphQl` module now calculates the depth of child notes in a category tree correctly.


### HTML

<!---MAGETWO-87351 -->* Magento now displays a newly created contact us form on a category page as expected. Previously, you could create a contact us form, but Magento  did not display it properly. [GitHub-12601](https://github.com/magento/magento2/issues/12601)

<!---ENGCOM-1990 -->* You can now change only the primary button `font-weight` without changing regular button `font-weight` with LESS variables. [GitHub-15832](https://github.com/magento/magento2/issues/15832)

<!---ENGCOM-2112 -->* HTML minification now works as expected. [GitHub-5316](https://github.com/magento/magento2/issues/5316)

<!-- MAGETWO-87064 -->* The `name` attribute is no longer empty when you create custom fields during product creation. [GitHub-9944](https://github.com/magento/magento2/issues/9944) 



### Infrastructure



<!-- MAGETWO-87313 -->*  You can now set access to only integrations for Admin roles (rather than assign full access). Previously, access for integrations could be assigned only when  Role Resources is set to all. [GitHub-9684](https://github.com/magento/magento2/issues/9684)  



<!-- MAGETWO-87153 -->*  Magento now retrieves a list of attribute groups based on my search criteria as expected when 


calling Magento\Eav\Model\Attribute\GroupRepository::getList with a \Magento\Framework\Api\SearchCriteriaInterface parameter that does not contain a filter for attribute_set_id
Previously, when you called this method under these circumstances, Magento threw an error. 



[GitHub-11936](https://github.com/magento/magento2/issues/11936) 


required attribute set id filter on attribute group repository getList

Steps to reproduce
Try calling Magento\Eav\Model\Attribute\GroupRepository::getList with a \Magento\Framework\Api\SearchCriteriaInterface parameter that does not contain a filter for attribute_set_id
Expected result
I Should get as response the list of attribute groups based on my search criteria

error message




<!-- MAGETWO-87524 -->* [GitHub-10133](https://github.com/magento/magento2/issues/10133)

Please add your expectations for @deprecated annotations 

I try to create own code based on the \Magento\Checkout\Controller\Cart\Add class. I see that this class uses \Magento\Checkout\Model\Cart class that has @deprecated annotation. I could use other class in my code but I don't know your expectations - which other class does Magento team use instead of deprecated \Magento\Checkout\Model\Cart?

It would be more pleasantly if @deprecated annotations will have comments that point to expected replacements. 

documented this expectation in https://devdocs.magento.com/guides/v2.0/contributor-guide/backward-compatible-development/ 





<!-- MAGETWO-87524 -->*  [GitHub-12374](https://github.com/magento/magento2/issues/12374)

Model hasDataChanges always true 

Expected result
hasDataChanges returns false because no data has been changed
Actual result
hasDataChanges returns true
Performance impact on $category->save()


Expected result
hasDataChanges returns false because no data has been changed
Actual result
hasDataChanges returns true
Performance impact on $category->save()




Execute:
...
`$collection = $collectionFactory->create();                              
$collection->addAttributeToSelect('*');
$category = $collection->getFirstItem();
var_dump($category->hasDataChanges());
$category->save();`


<!-- MAGETWO-87936 -->*   [GitHub-13327](https://github.com/magento/magento2/issues/13327)

Menu ui-state-active not removed from previous opened menu item

Steps to reproduce
In your browser switch to mobile view so you have the mobile menu
Open the menu
Expand the menu item Women
Now expand the menu item Men
You will see that the ui-state-active class is still also on Women
Expected result
The previous opened main menu item should not have the class ui-state-active
Actual result
The previous opened main menu item has the class ui-state-active




<!-- MAGETWO-87936 -->*   [GitHub-9413](https://github.com/magento/magento2/issues/9413) 

Cannot remove product_list_toolbar in XML

Thw toolbar is now removed as expected by setting remove="true" in  


getToolbarBlock() method  has been refactored to permit removal of product_list_toolbar.



<!-- MAGETWO-87064 -->*   [GitHub-9919](https://github.com/magento/magento2/issues/9919) 

Pattern Validation via UI Component Fails to Interpret String as RegEx Pattern 


When using a UI Component based form and adding a custom regular expression pattern validation to an input field, the supplied pattern is not properly converted from a string to a javascript RegEx object.




<!-- MAGETWO-92877 -->*  Adds possibility to configure logs output into syslog

As a developer, I want to be able writing core application's logs to Syslog, so I can later re-stream them easily and do not use storage to keep the logs.

Background:

We released possibility for ECE-Tools to write logs to Syslog ( MAGECLOUD-1571 )

Core application uses same logging library is core does, so potentially core application cal also write logs to Syslog



<!--- MAGETWO-90103 -->*  `expectException()` calls now accept two parameters (instead of one). *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request [11099](https://github.com/magento/magento2/pull/11099)*. [GitHub-11059](https://github.com/magento/magento2/issues/11059)



<!--- MAGETWO-88176 -->* 

Making block class not mandatory by adding a default a configurable xml by area class for block generator




<!--- MAGETWO-72139 -->* Add support for PHP 7.2.x 



<!--- MAGETWO-72365 -->* 


Native Magento WYSIWYG editor to use in 3d party functionality
Any 3d party module can use native Magento WYSIWYG with no extra effort
As a Developer I want utilize native Magento WYSIWYG editor in custom Magento module So that I don't duplicate functionality and maintain user experience consistency across all Magento functionality




<!--- MAGETWO-93039 -->Note: Several components included by Composer have been updated to the latest patch versions. 
upgrade all libraries included by composer.json where there is only minor version change



<!--- MAGETWO-68802 -->* Customers can change product status by clicking on the toggle element or by clicking on label text, but not by clicking the area around a toggle element. Previously, if a customer  clicked on the area around a toggle element, Magento changed the state of the element. Unintended results could occur if a customer mistakenly clicked on the area around the element and didn't realize that the status had  changed.




<!--- MAGETWO-88257 -->* Use a selector to only select the correct tax rate sel


Customer & Product Tax class wrongly styled


 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13795](https://github.com/magento/magento2/pull/13795)*. 


[GitHub-12791](https://github.com/magento/magento2/issues/12791)


I'm having a weird issue on the production environment of one of our webshops. The styling of the Customer & Product Tax class UI components are getting the styling of the tax rate UI component.




<!--- MAGETWO-88256 -->* Ensure DeploymentConfig Reader always returns an array 



 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13792](https://github.com/magento/magento2/pull/13792)*. 

 When a empty configuration file is ready, this could result in loading invalid configuration, eg. just 1 instead of an array. This will lead to problems with other code, expecting a valid array.



<!--- MAGETWO-88148 -->* Removed sjparkinson/static-review throughout the code base

<!--- MAGETWO-71007 -->* We’ve removed `Zend_Json` from the data object, test suite, and package information. [GitHub-10306](https://github.com/magento/magento2/issues/10306), [GitHub-10320](https://github.com/magento/magento2/issues/10320), [GitHub-10340](https://github.com/magento/magento2/issues/10340)




<!-- MAGETWO-75114 -->* added `@depreated` tag to unused protected property

Deprecated `Magento\Store\Model\Store::$_isAdminSecure`

[GitHub-4720](https://github.com/magento/magento2/issues/4720)

This property is never used protected `$_isAdminSecure = null;`



isAdminSecure never used or missing code 

This property is never used protected `$_isAdminSecure = null;`


   
1  app/code/Magento/Store/Model/Store.php



<!-- MAGETWO-80287 -->* 

Add static test to detect blocks without name attribute

This change covers an issue when block doesn't contain name attribute in layout file.





<!---ENGCOM-1137 -->* 

This fix will allow the Magento Framework to no longer explicitly set file/directory permissions from the default cache backend by removing use of the hashed_directory_umask option
'hashed_directory_umask' => 0777,
from code within the file
lib/internal/Magento/Framework/App/Cache/Frontend/Factory.php.




Removed hashed_directory_umask option because it caused Cm_Cache_Backend_File class to explicitly set permissions using chmod, ignoring umask and setgid bit.
Zend_Cache_Backend_File class deprecated and removed hashed_directory_umask option from Zend Framework v1.12+
Magento Framework does not explicitly set file & directory permissions as of v2.0.6+

itle: [FORWARDPORT 2.3] Removed cache backend option which explicitly set file permissions
url: magento/magento2#14416
contributor name: @xtremeperf
contributor link: https://github.com/xtremeperf





[GitHub-11930](https://github.com/magento/magento2/issues/11930) 

setup:di:compile's generated cache files inaccessible by the web-server user



[GitHub-10700](https://github.com/magento/magento2/issues/10700) 

Magento 2 Admin panel show loading on each page




<!---ENGCOM-1303 -->* update Magento 2 core to support MSI


title: 758: update Magento 2 core to support MSI
url: magento/magento2#14675
contributor name: @nmalevanec
contributor link: https://github.com/nmalevanec

Malyovanets Nickolas


[GitHub-758](https://github.com/magento/magento2/issues/758) 


<!---ENGCOM-1851 -->* Merchants can now apply styling by changing LESS variables in the Luma theme as expected. [GitHub-15608](https://github.com/magento/magento2/issues/15608)





<!---ENGCOM-1882 -->* title: [Forwardport] [Resolved : limiter float too generic]
url: magento/magento2#15879
contributor name: @hitesh-wagento
contributor link: https://github.com/hitesh-wagento

Hitesh


[GitHub-15323](https://github.com/magento/magento2/issues/15323) 


Steps to reproduce
inspect toolbar in product list
compare styles of .limiter and .pages
Expected result
.limiter should have the same parent selectors like .pages to prevent clashes between styles and layouts
Actual result
.limiter is too generic and is used as single selector for floating the element

limiter float too generic


Steps to reproduce
inspect toolbar in product list
compare styles of .limiter and .pages
Expected result
.limiter should have the same parent selectors like .pages to prevent clashes between styles and layouts
Actual result
.limiter is too generic and is used as single selector for floating the element

.limiter should have the same parent selectors like .pages to prevent clashes between styles and layouts

<!---ENGCOM-1904 -->*  Changing the `@tab-content__border` variable in Blank theme now works as expected. [GitHub-14999](https://github.com/magento/magento2/issues/14999)

<!---ENGCOM-2463 -->* Corrected sticky footer in `page-main` container height on mobile devices. [GitHub-15118](https://github.com/magento/magento2/issues/15118)

<!---ENGCOM-2604 -->* Style groups for mobile devices (`max-width`) are now specified in the correct order. [GitHub-14476](https://github.com/magento/magento2/issues/14476)

<!---ENGCOM-2796 -->* The Web Setup wizard icon sidebar shortcut on the Admin now links as expected to the wizard. 


<!---ENGCOM-2891 -->* 
CSS load order incorrect using default_head_blocks.xml

title: [Forwardport] CSS load order incorrect using default_head_blocks.xml #1821
url: magento/magento2#17829
contributor name: @nmalevanec
contributor link: https://github.com/nmalevanec

Malyovanets Nickolas



[GitHub-1821](https://github.com/magento/magento2/issues/1821) 

CSS load order incorrect using default_head_blocks.xml #1821

Added new attribute 'order' for set loading order .
Those attribute resolve issue about render files for some order.





<!--- ENGCOM-2884 -->* The condition category chooser now handles multiple nested categories as expected. Previously,  if a cart rule contained several nested categories, no categories appeared on the page, the page  became unresponsive,  and  eventually crashed. [GitHub-15121](https://github.com/magento/magento2/issues/15121)

<!---MAGETWO-87056 -->*  The `magento/module-widget/etc/widget.xsd` and `magento/module-widget/etc/widget_file.xsd` files have been updated to support multiple `depends` parameters. [GitHub-9783](https://github.com/magento/magento2/issues/9783) 






<!---MAGETWO-87056 -->*  [GitHub-10941](https://github.com/magento/magento2/issues/10941) 

Responsive Design Issue on Mobile with Magento 2.1.9 (fixed in magento-engcom/magento2ce#1283 by @magento-engcom-team)	

The Shop By and other contents positioned incorrectly and it happens only at the landing page





<!---MAGETWO-87056 -->*  [GitHub-11166](https://github.com/magento/magento2/issues/11166)  

ReindexAll -> getState() is not correct if the Indexer broke with PHP fatal error

If some fatal PHP error happens in the indexing process. The status is not correct reset
to StateInterface::STATUS_INVALID

Steps to reproduce
Implement Indexer -> fatal error in executeFull()
executebin/magento indexer:reindex **your_index_name**
Expected result
Status is not working in Magento\Indexer\Model\Indexer line 404
Actual result
Status is working in Magento\Indexer\Model\Indexer line 404



<!---MAGETWO-87056 -->*  [GitHub-11176](https://github.com/magento/magento2/issues/11176)

Configured table prefix is not recognized in CLI admin:user:create 

Configured table prefix is not recognized in CLI admin:user:create

I have installed Magento via the CLI and then wanted to create a new admin user via the CLI.

Steps to reproduce
 php bin/magento admin:user:create --admin-user=user --admin-password=pass --admin-email=mail@mail.com --admin-firstname=fname --admin-lastname=lname
Expected result
A new User should be created
The tableprefix should be properly prepended to tablenames
Actual result
The user could no be created because the table was not found.


<!---MAGETWO-87056 -->*   [GitHub-11275](https://github.com/magento/magento2/issues/11275)

Call to a member function addCrumb() (fixed i

 create custom Theme
2- create default.xml
3- add <referenceBlock name="breadcrumbs" remove="true" />
4- navigate to your Magento installation root url .../sales/guest/form/

5- error: 500

breadcrumbs


<!---MAGETWO-87056 -->*  [GitHub-11310](https://github.com/magento/magento2/issues/11310)  

Method "getChildren" sort ordering

With the following Method:
getChildren()

Expected result
You will get a list of Ids of the children categories.
This list is sorted by the "position" attribute.

Actual result
You will get a list of Ids of the Children Categories.
This list is sorted by entity-id attribute.

I dont see any special case where you would need the sorting by the entity_id. More usual you will need them sorted in the same order as in the Backend(by the position attribute).



<!---MAGETWO-87058 -->*  [GitHub-6802](https://github.com/magento/magento2/issues/6802)   


Magento\Search\Helper\getSuggestUrl() not used in search template

Steps to reproduce
Create a plugin for Magento\Search\Helper\getSuggestUrl() to add custom autosuggest feature
Type something in the search box
Expected result
the custom URL should be used
Actual result
the default "search/ajax/suggest" URL is used




<!---MAGETWO-87058 -->*   [GitHub-6661](https://github.com/magento/magento2/issues/6661)  

XHTML templates Don't Use Schema URNs

Improve the urn of xhtml templates.



Expected result
I see a urn style path (xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd")
Actual result
I see an upwards directory traversal path (../../../../../../Ui/etc/ui_template.xsd)




<!---MAGETWO-87058 -->*  [GitHub-10811](https://github.com/magento/magento2/issues/10811) 

Replace FollowSymLinks with SymLinksIfOwnerMatch 
In htaccess templates we should use more save from security view symlink command - SymLinksIfOwnerMatch




<!-- MAGETWO-87057 -->* [GitHub-9028](https://github.com/magento/magento2/issues/9028)  

You cannot set a 303 redirect response using a result factory

Steps to reproduce
Perform a 303 redirect from any controller (see code below)
Send a request to that controller endpoint
Examine the response code
Expected result
A 303 response code should be returned
Actual result
A 302 response code is used instead


<!-- MAGETWO-87057 -->* [GitHub-8954](https://github.com/magento/magento2/issues/8954)   

Error While Trying To Load Quote Item Collection Using Magento\Quote\Model\ResourceModel\QuoteItem\Collection::getItems() 

Steps to reproduce
Load Quote Item Collection using Magento\Quote\Model\ResourceModel\QuoteItem\Collection::getItems()
$quoteItemCollection = $this->quoteItemCollectionFactory->create()->getItems();

Expected result
I get array of Quote Items
Actual result
Thrown an error:


<!-- MAGETWO-87064 -->* [GitHub-6891](https://github.com/magento/magento2/issues/6891)    

Add-to-cart checkbox still visible when $canItemsAddToCart = false 

Steps to reproduce
Edit vendor\magento\module-catalog\view\frontend\templates\product\list\items.phtml
Set all instances of $canItemsAddToCart to false
Go to a product page (e.g., /caesar-warm-up-pant.html)
Expected result
The add-to-cart checkboxes in Related Products should not be visible.
Actual result
The add-to-cart checkboxes in Related Products are still visible:


### Image

<!---ENGCOM-2955 -->* You can now set values for `MAX_IMAGE_WIDTH` and `MAX_IMAGE_HEIGHT` in **Stores** > **Configuration** > **Advanced** > **System** > **Images Configuration**, which supports the upload of larger images. 

<!---ENGCOM-2956 -->* The WYSIWYG editor now displays the backgrounds of .PNG thumbnail images as expected. Previously, transparent background were displayed as black.

<!---ENGCOM-2802 -->*  Magento now displays the background of transparent product image watermarks correctly.

<!---ENGCOM-2698 -->* Product image zoom now works as expected in stores running on Safari.

<!-- MAGETWO-87057 -->* The cross-sell product placeholder image on the shopping cart page is now the same size as the  product listing page placeholder image. [GitHub-12017](https://github.com/magento/magento2/issues/12017) 

<!-- MAGETWO-87936 -->*  The WYSIWYG editor now displays image icons as expected. Previously, the WYSIWYG editor showed broken image icons only. [GitHub-10417](https://github.com/magento/magento2/issues/10417) 




### Import/export

<!--- MAGETWO-87313 -->* [GitHub-12083](https://github.com/magento/magento2/issues/12083)   

Cannot import zero (0) value into custom attribute

When using the Admin product import feature it is not possible to import a zero (0) value into custom attribute field. Instead the value is unchanged.





<!--- MAGETWO-87442 -->* [GitHub-6924](https://github.com/magento/magento2/issues/6924)    

Magento 2.1.0 - "General system exception happened" on Import .csv 

Steps to reproduce
Login to Magento admin panel
Select "System" -> "Import"
Entity type = "products", Import Behaviour = "Add/Update" - "Stop on error", Allowed errors count = "10", Field Seperator = ",", Multi value seperator ",", Select file to import = myfile, Image files directory = "pub/media/import/"
(Remove quotation marks).

Expected result
.CSV should be validated successfully, with 4065 lines (not including headers). Then the products should be imported successfully after clicking "Import"
Actual result
After uploading .CSV, I see a red "General system exception happened"

<!--- MAGETWO-87442 -->* [GitHub-8255](https://github.com/magento/magento2/issues/8255) 


Export Products action doesn't consider hide_for_product_page value 

Steps to reproduce
Create a simple product and upload an image.
Change the scope to 1 store view.
Set the image as Hide for product page in that store view.
Got to System -> Export.
Select Products and then Continue.
Expected result
The CSV files should have 2 lines. The default values at the first row of values.
The second lines should contain values on sku, store_view_code and hide_from_product_page columns
Actual result
I've created my simple product with an image. Same values for both store views.





<!--- MAGETWO-87439 -->* [GitHub-5846](https://github.com/magento/magento2/issues/5846) 

Product import doesn't import all products, but still gives success message


Steps to reproduce
Run Check Data on product CSV. Check Data returns valid
Import products. Magento shows success
Expected result
Products are imported
Actual result
Not all products are imported



<!--- MAGETWO-87562 -->*  [GitHub-12714](https://github.com/magento/magento2/issues/12714) 

Extra records are in exported CSV file for order


Steps to reproduce
Log in to Admin
Go to Sales > Orders
Open one of the orders from preconditions
Go to Invoices tab
Click Export and select CSV
Open exported CSV file
Expected result
Information related to one invoice only is displayed in CSV file

Actual result
Information related to both invoices from both orders is displayed in CSV file



<!---MAGETWO-87058 -->*  [GitHub-10920](https://github.com/magento/magento2/issues/10920) 

Sku => Entity_id relations are fetched inefficiently when inserting attributes values during product import 

Product import is not fetching relation between products sku and entity_id efficiently when inserting attributes data.



Steps to reproduce
Run import of products from sample csv
Expected result
All relations are loaded using one query per bunch
Actual result
Relations are loaded one by one (multiple times for multiple attributes types



<!---MAGETWO-84222 -->*  Corrected grammar error in the "What is this" tooltip for the Braintree vault.



<!---MAGETWO-82960 -->* 
$dataType need to be set to 'String' instead 'Number' when value contain space (eg negative number with added space)

Fixed problem with negative values in exported XML file


[GitHub-11729](https://github.com/magento/magento2/issues/11729)  


XML excel generator class contain error causing file can't be opened by MS Office.




<!--- MAGETWO-87562 -->*  [GitHub-10697](https://github.com/magento/magento2/issues/10697)  

Product Import: Additional data: Invalid URL key

When performing a product import with a category field which begins with a comma, a General Exception is raised with a spurious error message and no rows are imported.


Steps to reproduce
System > Import > Products
Choose "Add/Update
Select a CSV file containing a "categories" column with a comma as the first character
Click Check Data then Import
Expected Result
I would expect the error message to indicate an issue with the clearly invalid category field (column 5 in my file) rather than pointing at the url_key field (column 18 in my file).







<!---MAGETWO-83131 -->* CatalogImportExport categoryProcessor does not support escaped delimiter 


Allow export/import category name with category delimiter character.
After apply this fix, when exporting, the delimiter character in category mane will be quoted.



[GitHub-6948](https://github.com/magento/magento2/issues/6948)  

When trying to import a category with an escaped '/' through the import functionality of MG2, the import will create an unwanted extra category because there is no support for escaped delimiters.



<!---MAGETWO-87188 -->* `Memory error on customer import


 With the following settings a customer import would crash with an out of memory problem.

Current database of 250k customers (can be created using bin/magento setup:perf:generate-fixtures setup/performance-toolkit/profiles/ce/small.xml and editing the small.xml to setup 250000 customers)
Memory limit set via .htaccess to 268M



<!---MAGETWO-87017 -->* `added support for multiselect attribute for both product and customer entity

Export: Unable to Filter Data by Attribute With Input …


 *Fix submitted by [php4umagento](https://github.com/php4umagento) in pull request [98](https://github.com/magento-engcom/import-export-improvements/pull/98)*. 



<!---MAGETWO-87123-->* Dynamically fill the image keys


 *Fix submitted by [Vincent Marmiesse](https://github.com/VincentMarmiesse) in pull request [15012](https://github.com/magento-engcom/import-export-improvements/pull/94)*. 




I've created a custom image attribute and added to my attribute set as image. The thing is that when you try to import the attribute the same way you import images vis csv it only writes the value as text.


[GitHub-103](https://github.com/magento-engcom/import-export-improvements/issues/42)



Steps to reproduce
Create a custom image attribute and add it to your attribute set (new_image)
Go to any product of that attribute set and assign the attribute to any image
Export that product it and see the value of the new_image attribute on additional attributes
Now let's say you want import a new image and assign to that image the new_image attribute. Let's say the image name is image01.jpg and it has been uploaded to pub/media/import
On the csv change the value of new_image=image01.jpg and add image01.jpg to additional images.
Import the csv and set the path to /pub/media/import
Expected result
Now if you export the same product the value should be new_image=/i/m/image01.jpg. You expect Magento to copy the image to the product media folder.
Actual result
Actually the attribute value is new_image=image01.jpg if you export the product again



<!---MAGETWO-86221-->* Fix import from external jpeg images 


  *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request [12872](https://github.com/magento/magento2/pull/12872)*. [GitHub-12455](https://github.com/magento/magento2/issues/12455)


Images imported via URL have crazy file paths

When importing hundreds of thousands of products/images you end up with literally hundreds of thousands of files just under one folder: [magento]/pub/media/catalog/product/h/t/. So the file distribution logic of directory hierarchy creation based on the first two characters of the filename is futile/wasted - as the files will always be stored under /h/t/.


Import uploader does not check Content-Disposition header

Steps to reproduce
Create a product import CSV with an image URL (which does not have a proper image extension) leading to an image being force downloaded by HTTP headers (for example: https://gist.github.com/brasofilo/2863355 (example gist))

Import it

Expected result
Magento properly checks the headers, downloads the file to the filename given in the headers and then imports it
Actual result
Magento does not check the headers and downloads the file 

Unable to import external jpeg images from a CDN with dynamic URLs.

Unable to import products with external jpeg images hosted on a CDN with dynamic URLs not ending with ".jpg" or ".jpeg", e.g.






<!---MAGETWO-86044-->* Fix import grouped products



  *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request [12853](https://github.com/magento/magento2/pull/12853)*. [GitHub-12793](https://github.com/magento/magento2/issues/12793)

 As of 2.2, group products no longer import properly. Using the sample data given on the system->import page, it will import the group product (the product type is correct), but no longer associate the simple products to the grouped product. This was confirmed working in 2.1.7, but looks to be broken in 2.2.1 and 2.2.2.






<!--- MAGETWO-90313 -->* When you import information about existing customers, Magento now changes only the specific rows for this customer. If rows for other customer attributes (for example, `group_id`, `store_id`, `created_at`) are absent in the import file, these values are included unchanged.

<!--- MAGETWO-90149 -->* You can now import or export a specific store view that includes custom options and bundle product options. Previously, the import/export feature did not include store view-level edits for  custom options.

<!---MAGETWO-86884-->* Improve error reporting for products images import


  *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [1201](https://github.com/magento-engcom/magento2ce/pull/1201)*. [GitHub-4711](https://github.com/magento/magento2/issues/4711)



When importing products using the System -> Import Products feature, if there problems importing the images, Magento just fails with:



<!--- MAGETWO-91594 -->* Import now completes successfully when a product’s CSV entry is split over two import “bunches”.  Previously, Magento threw this error, `Cannot add or update a child row: a foreign key constraint fails`, and import failed. 

<!--- MAGETWO-87974 -->* You can now hide an image as expected by using the `hide_from_product_page` attribute during import.



<!--- MAGETWO-88240 -->* 

product images with same name overwrite previous image


 Images were not being renamed while uploading bulk products with images. For example, while importing images from paths a/b.jpg, b/b.jpg, c/b.jpg for three different products were overwriting the same file b.jpg in magento 2. I allowed to rename file if was already existed in Magento 2 catalog product folder. So there is no overwriting while uploading same image name with different folders.


*Fix submitted by [Umar Chaudhry](https://github.com/umarch06) in pull request [99](https://github.com/magento-engcom/import-export-improvements/pull/99)*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)




<!--- MAGETWO-87933 -->* Report error csv doesn't work when trying to import a csv file with semicolon delimiter[forwardport]. 

Expected result
Import is stopped and all errors are printed.
We can download the report error csv file.
Actual result
Import is stopped but only General system exception happened is printed.
We cannot download the report error csv file because the link doesn't appear.




 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [1203](https://github.com/magento-engcom/magento2ce/pull/1203)*.  

[GitHub-5015](https://github.com/magento/magento2/issues/5015)


<!---ENGCOM-2468 -->* magento-engcom/import-export-improvements#103 Fail product import validation when multiselect columns contain duplicate values

url: magento-engcom/import-export-improvements#117
contributor name: @pogster
contributor link: https://github.com/pogster

carstenpfeifer


[GitHub-103](https://github.com/magento/magento2/issues/103)

Introduced a validation failure with message on product import attribute validation of multiselect columns that contain the same value multiple times.

Without this, in 2.2.2 there were reportedly errors on the indexing run. On 2.3, the indexer errors could not be reproduced, but the values are still saved to catalog_product_entity_varchar multiple times.



<!---ENGCOM-855 -->* Allow import of empty attributes


[GitHub-7468](https://github.com/magento/magento2/issues/7468)

CatalogImportExport doesn't support empty row values #7468


If you have an attribute that has a value and you import an empty string because the value needs to be empty, the attribute will not be overwritten with the empty string.





<!--- ENGCOM-1514 -->* Product import now updates the **Enable Qty Increments** field as expected.  [GitHub-14351](https://github.com/magento/magento2/issues/14351)

<!--- ENGCOM-732 -->* title: MAGETWO-70390 selection can change qty
url: magento-engcom/import-export-improvements#100
contributor name: @adam-paterson
contributor link: https://github.com/adam-paterson

Adam Paterson

[GitHub-9342](https://github.com/magento/magento2/issues/9342)

Provides support for selection_can_change_qty during import and export

Description
Adds bundle selection properties for use during import and export.

### Indexing

<!---MAGETWO-85225 -->* `indexer:status` now outputs information about the schedule mview backlog. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request  [12592](https://github.com/magento/magento2/pull/12592)*.

<!---MAGETWO-70883 -->* Magento no longer reindexes entities that have not been changed. Previously, Magento reindexed entries that were not changed but which had a MySQL UPDATE. *Fix submitted by [Anton Evers](https://github.com/AntonEvers) in pull request [4893](https://github.com/magento/magento2/pull/4893)*.[GitHub-2987](https://github.com/magento/magento2/issues/2987)

<!--- MAGETWO-90109 -->* The customer grid indexer now works as expected.  Previously, this indexer did not work when reindexing using the command-line interface during the upgrade. *Fix submitted by [Leonid Poluyanov](https://github.com/le0n4eg) in pull request [10838](https://github.com/magento/magento2/pull/10838)*. [GitHub-10838](https://github.com/magento/magento2/issues/10838)

<!--- MAGETWO-70835 -->* Tier pricing for a single product unit now works as expected. If a tier price is set for one product unit, and this price is lower than the product price or special price, then the product price index table is populated with the tier price.




<!--- MAGETWO-93753 -->* Implement sharding and parallelization for Price Indexer

The price indexer is now scoped and multithreaded, which improves layered navigation, search, and indexing actions for complex sites with multiple websites and have many price books 




<!--- MAGETWO-94070 -->* Enable/disable EAV indexer from configuration

Added functionality to enable/disable EAV indexer from configuration




### Infrastructure

<!--- MAGETWO-87449 -->*  [GitHub-6712](https://github.com/magento/magento2/issues/6712)  

Footer Links Widget CSS Issue 


Steps to reproduce
Install Magento with sample content
OR

Add a block/widget for additional footer links
Expected result
Additional footer links block should line up with default footer links

Actual result
Additional footer links block do not line up with default footer links. There is a 20px margin




<!--- MAGETWO-87442 -->*   [GitHub-11509](https://github.com/magento/magento2/issues/11509)

Psr logger debug method does not work by the default in developer mode 

Psr logger debug method does not work by the default when you just install & switch to the developer mode.
To make that works store config switcher should be turned on (see attached img, by the default, it's turned off).

Steps to reproduce
Install Magento 2.2.0
Switch to developer mode.
Use Psr logger debug method.
File var/debug.log is not created.
Until you turn on "log to file" boolean switcher in store configuration advanced developer debug section.
Expected result
In developer mode Psr logger debug method should write logs to var/debug.log without addition switches in store config.
Actual result
Happens opposite to expected result. It needs addition store configuring to make psr logger debug log to debug.log file being in developer mode.



<!--- MAGETWO-87562 -->*  [GitHub-11332](https://github.com/magento/magento2/issues/11332)

How to Fix the wrong input format of Customer date of birth


Login to frontend
Edit Customer information
Expected result
The year of birth date should be in the format: yyyy.
Actual result
The actual format is yy



<!---MAGETWO-85588 -->* Magento now requires that customers select State/Province when shipping orders to India,  and the checkout page now provides a drop-down field with appropriate values. *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [12378](https://github.com/magento/magento2/pull/12378)*. [GitHub-12378](https://github.com/magento/magento2/issues/12378)

<!--- MAGETWO-85587-->* We fixed the invalid parameter configuration that was provided for the `$block` argument of `Magento\\Ui\\Component\\HtmlContent`. *Fix submitted by [Tomasz Gregorczyk](https://github.com/Tomasz-Silpion) in pull request [12665](https://github.com/magento/magento2/pull/12665)*. [GitHub-12452](https://github.com/magento/magento2/issues/12452)

<!---MAGETWO-84908 -->* The`app/code/Magento/Downloadable/Helper/File.php` and `app/code/Magento/Bundle/Block/Adminhtml/Catalog/Product/Edit/Tab/Attributes/Extend.php` files no longer contain duplicate key arrays. *Fix submitted by [Leandro F. L.](https://github.com/lfluvisotto) in pull request [12520](https://github.com/magento/magento2/pull/12520)*.


<!---MAGETWO-89899 -->* Proxy/Interceptor generator does not understand PHP 7.1 syntax

DI Proxy generator now supports PHP 7.1 syntax

When trying to use proxy of a class that has methods using nullable typehint or void return type the generated proxy class would strip void typehint and make nullable typehint not nullable (remove "?" sign).



<!---MAGETWO-89542 -->* Eliminate module versions in Git

There are couple issues with module composer versions being mandatory in Git repository:

They are not used unless project is created via composer
They are confusing for internal and external developers, because are changed by tools during release publication. 3rd party developers cannot rely on them while developing their extensions until GA



<!---MAGETWO-88275 -->* Cast handling fee to float



 *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request [13818](https://github.com/magento/magento2/pull/13818)*. 



PHP 7.1 complains with a warning if non-numeric strings are used in calculations

The handling fee configuration of shipping methods is often an empty string. Prior to PHP 7.1 it was silently casted to 0, now this should happen explicitly to avoid warnings.



<!---MAGETWO-87512 -->* Removed `create_function()` function usage



 *Fix submitted by [Yevhen Sentiabov](https://github.com/joni-jones) in pull request [32](https://github.com/magento-engcom/php-7.2-support/pull/32)*. 



 Deprecated: Function create_function() is deprecated

<!---MAGETWO-84354 -->* Copy EQP sniffs to Magento 2 Core repo

- added LanguageConstructsSniff 
- added ExecutableRegExSni

our EQP sniffs with severity 10 which are not aligned with M2 sniffs.

M2 Core repo destination - https://github.com/magento/magento2ce/tree/develop/dev/tests/static/framework/Magento/Sniffs

Move as is sniffs with remark "Needs to be added" to the M2 repo.
Other sniffs with severity 10 please change and also copy to M2 repo.


<!-- MAGETWO-72091 -->* Magento now deselects only the attributes you choose to deselect when you set the **Use Default Value** setting on a store view to **no** for certain attributes. Previously, when you deselected the **Use Default Value** setting on a store view for certain attributes, Magento unselected other attributes as well. 


<!---MAGETWO-88275 -->* Cast handling fee to float

 title: [Forwardport] Cast handling fee to float
 - key: magento/magento2#13818
 - url: https://github.com/magento/magento2/pull/13818
 - contributor name: @serhii-balko
 - contributor link: https://github.com/serhii-balko


 Serhii

 The handling fee configuration of shipping methods is often an empty string. Prior to PHP 7.1 it was silently casted to 0, now this should happen explicitly to avoid warnings.



<!---MAGETWO-75321 -->* Add name for default renderer block of order items to allow other modules reference it.

https://github.com/magento/magento2/issues/10824

Cannot add new columns to item grid in admin sales_order_view layout 

I am trying to add a new column to item grid in admin sales/order/view .
The problem is that in the layout the default renderer does not have a name attribute, only the as attribute, thus not allowing to add new column content. Even though I can add new column headers to the layout, using <referenceBlock name="order_items"> directive, I cannot add the column's content using the same aproach.


<!---ENGCOM-1366 -->* Magento now sets the `trigger_recollect` attribute  back to 0 after collecting total amounts for the quote. Previously, Magento timed out if a customer tried to reload a quote. [GitHub-9580](https://github.com/magento/magento2/issues/9580)


<!---MAGETWO-87058 -->*   [GitHub-11793](https://github.com/magento/magento2/issues/11793)

Magento2.1.5 admin shipping report shows wrong currency code

I have working magento2.1.5 version in admin side Shipping Report had currency issues.
admin->Reports->Sales->Shipping
if i have switch to another store it is showing default currency only. the actual result should show the switched store currency only.




 <!---MAGETWO-87058 -->*  [GitHub-11880](https://github.com/magento/magento2/issues/11880)  

Steps to reproduce
Load a configurable product
Observe the returned array $usedProducts
clean the collections cache (bin/magento cache:clean collections)
Reload the same configurable product
Observer again the returned array $usedProducts
Expected result
The array $usedProducts should contain the same indexes->values where indexes are the product children ids.
Actual result
Before cleaning the collections cache, the returned array is a simple array indexes->values where indexes are incremental.
After cleaning the collections cache, the returned array is an associative array where the indexes are the product children ids.


Magento 2.1.9 Configurable::getUsedProducts returns a different array after product collections is cached



### Locale

<!--- MAGETWO-94119-->* The DatePicker date filter on **Reports** > **Products** > **Ordered** now works as expected for administrators working in Australian English locales. 

<!--- ENGCOM-1052 -->* updated Zip Pattern for Japan to permit only the 7 digit codes that the Japanese postal service accepts.



title: [ForwardPort 2.3] 14072 Add Zip Pattern for Japan JP
url: magento/magento2#14300
contributor name: @osrecio
contributor link: https://github.com/osrecio

Oscar Recio

Expected result
"1234567" or "123-4567" only can pass the validation. Since 1998, Japanese postoffice only uses 7 digits for zipcode.
Actual result
123 is not a valid pattern, but actually recognized as a valid pattern. 7 digits of number should be allowed instead of existing pattern_2.
[GitHub-14072](https://github.com/magento/magento2/issues/14072)



<!--- MAGETWO-87449-->*  [GitHub-9743](https://github.com/magento/magento2/issues/9743)

Invalid date when customer validate with French locale

Set Backoffice to French locale : account settings ->language French (France)
Modify a customer and set date of birthday (for example : 04/17/1973)
Expected result
Customer validation with new DOB
Actual result
Error message "Invalid date"




### Message

<!--- MAGETWO-87351-->* [GitHub-12209](https://github.com/magento/magento2/issues/12209) 


Substitution payment method - Incorrect message

Steps to reproduce
Go to Admin panel and look at existing order
View "Payment & Shipping Method" section
Expected result
We should have message "<payment_method_name> is not available. You still can process offline actions." OR we should have message "Payment method is not available. You still can process offline actions.

Actual result
We have message "is not available. You still can process offline actions."





<!--- MAGETWO-87449-->*  [GitHub-9008](https://github.com/magento/magento2/issues/9008) 

Error Message Is Confusing When Code Base Is Behind Database Module Version 

lease upgrade your database: Run "bin/magento setup:upgrade" from the Magento root directory.
The following modules are outdated: Foo_Bar schema: current version - 1.0.4, required version - 1.0.0

Preconditions
This can happen when...

You download a database dump from a staging environment that has had code deployed to it which upgrades schema version (e.g. "develop" brand(
In your local environment, you are on the "master" branch, which is behind the database.
In this case running bin/magento setup:upgrade does not resolve the issue, and upgrading the database is not really correct (you actually need to downgrade).





<!--- MAGETWO-87449-->*  [GitHub-4248](https://github.com/magento/magento2/issues/4248) 


Validations not working on customer registration on DOB field

Install Magento from develop branch.
From Magento backend using store configuration set DOB in customer form as required.
Go to frontend on registration page and hit submit without filling any entry.
DOB field has an star mentioned as required but no validation messages is populating for this but working fine for other fields.
Expected result
Error should show when someone submits the form without filling the DOB.





<!--- MAGETWO-87313-->* [GitHub-9764](https://github.com/magento/magento2/issues/9764) 

exception message is wrong and misleading in findAccessorMethodName() of Magento\Framework\Reflection\NameFinder 

When there is no getter, findAccessorMethodName() generates an exception with message:
' ... does not have corresponding setter in class ... '

When there is no getter, findAccessorMethodName() generates an exception with message:
' ... does not have corresponding setter in class ... '

This function gets getter name. and It call findAccessorMethodName()
This exception is wrong and misleading.





<!--- MAGETWO-87313-->* [GitHub-10474](https://github.com/magento/magento2/issues/10474) 

Error message in product review form not being translated

Submit review without setting rating
Expected result
Error 'Please select one of each of the ratings above.' should be translated
Actual result
Error is always in english



### Newsletter

<!--- MAGETWO-87442-->*   [GitHub-12787](https://github.com/magento/magento2/issues/12787) 

Steps to reproduce
Call $subscriber->loadByEmail($email) with debugger or profiler
Inspect SQL query
Inspect execution plan EXPLAIN SELECT * FROM newsletter_subscriber WHERE subscriber_email='...'
Expected result
An index should be use to retrieve the subscriber instantly
Actual result
No index is used, resulting in a slow "Using where" query


Newsletter\Model\Subscriber::loadByEmail() does not use MySQL index





<!--- MAGETWO-87442-->*  [GitHub-12876](https://github.com/magento/magento2/issues/12876)  

Multiple newsletter confirmation emails sent

Sign Up for Newsletter

Expected result
There are a couple different results that I'll leave to the Magento core team:

If someone signed up for a Newsletter subscription as a guest, have confirmed that subscription, and then create an account with the same email—then the Magento application could update the Newsletter Subscribers with the customer data and leave the status as Subscribed, thus no Need to Confirm email is sent since they've already confirmed they wanted to receive the newsletter.
The Magento application could change the guest email status to STATUS_UNCONFIRMED, update the guest email with the customer data, and send the Need to Confirm email for the new account.
Actual result
Three Need to Confirm emails are received.





<!--- MAGETWO-87155 87936-->* [GitHub-12320](https://github.com/magento/magento2/issues/12320)   

Newsletter subscribe button title wrapped

newsletter subscribe button's title now wraps correctly




<!--- MAGETWO-82942-->* Magento now sends confirmation-of-subscription email to new subscribers only. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [11604](https://github.com/magento/magento2/pull/11604*. [GitHub-5439](https://github.com/magento/magento2/issues/5439)

<!-- MAGETWO-93713 -->* Guest users can now sign up for newsletters for multiple stores. Previously, when a guest user signed up for a newsletter from multiple stores, Magento sent a subscription confirmation message, but did not successfully subscribe the user. 

<!--- MAGETWO-91701 -->* A customer subscription on one store no longer depends on  the customer’s subscription on another store.

<!--- MAGETWO-84686 -->* Magento now sends the newsletter subscription success email as expected when a customer successfully subscribes to a newsletter. [GitHub-12439](https://github.com/magento/magento2/issues/12439)


<!--- ENGCOM-2478 -->* Magento now sends a confirmation request email to the customer when she unsubscribes to a newsletter. [GitHub-15218](https://github.com/magento/magento2/issues/15218)

<!--- ENGCOM-2006 -->* Magento now displays the newsletter subscription confirmation message  as expected after a customer clicks the confirmation link in the subscription confirmation email. [GitHub-14747](https://github.com/magento/magento2/issues/14747)






<!-- MAGETWO-87057 -->*  

[GitHub-4004](https://github.com/magento/magento2/issues/4004) 

Newsletter Subscriber create-date not set, and change_status_at broken

Steps to reproduce
Register a newsletter subscriber via the front-end, with no confirmation of email address needed.
Check database.
Unsubscribe user via admin interface.
Resubscribe user via admin interfa... oh wait, this option is missing. If you make a mistake (no confirmation dialog) you can't correct it without going into the DB.
Expected result
After creation set change_status_at to creation date (confirmation of email if enabled, or just registration time if no confirmation email is sent).
change_status_at is set to when user is subscribed.
Expect change_status_at to contain the date of the status change.
Actual result
I want to sync new newsletter subscribers, so I expect a datetime to filter on, to get new newsletter subscribers. This is not set.
change_status_at is null. It would be nice if this were initialized to the registration date.
User is unsubscribed, status 3, but change_status_at remains null. Integration can't detect user is unsubscribed now.





<!-- MAGETWO-87151 -->*    [GitHub-10014](https://github.com/magento/magento2/issues/10014) 

Newsletter subscriptions status not isolated between multi stores 

When a customer with the same email address has an account on different multi stores in the same Magento installation, changes to the newsletter subscription in one account affect the other.







### Orders

<!--- MAGETWO-87615 -->*   in multistore deployments.

[GitHub-9055](https://github.com/magento/magento2/issues/9055) 
 
Default Store is always used when retrieving sequence value's for sales entity's.

Steps to reproduce
Setup a clean install of Magento 2.1.5 with sample data
Add a second store view to the default website
Place an order on the second store view
Expected result
An increment id using the prefix from the new store view, and an entry in the sequence_order_2 table
Actual result
An increment id using the prefix from the default store view, and an entry in the sequence_order_1 table





<!--- MAGETWO-87615 -->*   [GitHub-10438](https://github.com/magento/magento2/issues/10438) 

Potential error on order edit page when address has extension attributes 

Suppose you init extension attributes of the order address on the sales_order_address_load_after event (any other way is also ok):

Go to order's admin panel and click "Edit"




Expected result
Order edit page opens
Actual result
Order edit page fails with the following error:



<!--- MAGETWO-83496-->* Magento no longer copies every address that has `save_in_address_book` set to 0 to the customer address book. Previously, if you placed an order as a guest and set the `save_in_address_book` value for an address to 0, Magento still copied that address to the customer address book when it registered a new customer on the checkout success page. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [11903](https://github.com/magento/magento2/pull/11903)*. [GitHub-7691](https://github.com/magento/magento2/issues/7691)

<!--- MAGETWO-83154-->* Magento now displays new orders at the top of the orders list as expected when sorting order by purchase date. *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [11931](https://github.com/magento/magento2/pull/11931)*.

<!---MAGETWO-82656 -->* The `getTracksCollection()` method  now returns collection objects. Previously, this method returned either collections or arrays. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [11680](https://github.com/magento/magento2/pull/11680)*. [GitHub-8022](https://github.com/magento/magento2/issues/8022)

<!--- MAGETWO-82653-->* When you place an order in the Admin, Magento now displays the form needed to enter information for  enabled payment methods. *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request [11683](https://github.com/magento/magento2/pull/11683)*. [GitHub-11380](https://github.com/magento/magento2/issues/11380)

<!---MAGETWO-82187 -->* The Shipment API now adds a customer note to a shipment if the shipment was created through the API and `appendComment` is set to **true**. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [11519](https://github.com/magento/magento2/pull/11519)*. [GitHub-11207](https://github.com/magento/magento2/issues/11207)

<!---MAGETWO-80916 -->* Magento now displays the State/Province information  on **Order View > Information > Address Information**. *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request [11234](https://github.com/magento/magento2/pull/11234)*. [GitHub-10441](https://github.com/magento/magento2/issues/10441)

<!---MAGETWO-71360 -->* Magento now correctly calculates the value of the `base_shipping_discount_tax_compensation_amnt` field. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10435](https://github.com/magento/magento2/pull/10435)*. [GitHub-10255](https://github.com/magento/magento2/issues/10255)

<!--- MAGETWO-69913-->* The Products Ordered report now shows simple (child) products of configurable products. *Fix submitted by [Ranjith VK](https://github.com/vkranjith) in pull request [9908](https://github.com/magento/magento2/pull/9908)*. [GitHub-9196](https://github.com/magento/magento2/issues/9196)

<!--- MAGETWO-84980-->* The Products in Cart report no longer tries to retrieve the data of deleted products. Previously, when Magento tried to generate this report, it threw an exception. *Fix submitted by [angelo983](https://github.com/angelo983) in pull request [12540](https://github.com/magento/magento2/pull/12540)*.

<!--- MAGETWO-82176-->* Magento no longer throws a fatal error when you search for a customer from  **Reports > By Customers**. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [11524](https://github.com/magento/magento2/pull/11524)*. [GitHub-10301](https://github.com/magento/magento2/issues/10301)

<!--- MAGETWO-86260 -->* The cancel order and restore quote methods now accurately calculate the amount of stock to be returned to inventory when an order is canceled. Previously, when you canceled an order, some of these methods did not accurately calculate the amount of restored stock.  *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12952](https://github.com/magento/magento2/pull/12952)*. [GitHub-9969](https://github.com/magento/magento2/issues/9969)

<!--- MAGETWO-83496-->*  address with saveInAddressBook 0 are still being added to the address book for new customers

If you place an order as a guest and set the save_in_address_book for an address on 0, that address will still be copied to the customer address book when registering as a new customer on the checkout success page.


[GitHub-7691](https://github.com/magento/magento2/issues/7691)

If you place an order as a guest and set the save_in_address_book for an address on 0, that address will still be copied to the customer address book when registering as a new customer on the checkout success page.



Steps to reproduce
Place an order as a guest and set the save_in_address_book for your shipping address to 0
Click the register link on the checkout success page
Expected result
Every address that has save_in_address_book set to 0 should not be copied to the customer address book
Actual result
Addresses with save_in_address_book set to 0 are still copied to the new customer address book.




<!--- MAGETWO-75327-->* copy from 221 80509

Magento/Sales/Model/Service/OrderService::cancel method was returning always true even if cancel method in Magento/Sales/Model/Order didn't do anything cause of canCancel validation.
OrderService cancel method will invoke canCancel to check if order can be canceled and return correct value.


[GitHub-10803](https://github.com/magento/magento2/issues/10803)


When canceling order with OrderService, the cancel method always saves the order and returns true, even if the order can not be canceled. 


<!--- MAGETWO-80095-->* Prevent invoice cancelation multiple times

The invoice gets canceled twice, so order amounts are also being adjusted twice.







<!--- MAGETWO-82563-->* Invoices and orders now show the consistent coupon codes and totals. Previously, invoices did not reflect coupon codes as expected. [GitHub-10168](https://github.com/magento/magento2/issues/10168)



### Page cache

Asynchronous rendering of blocks no longer corrupts layout cache. Previously, when a asynchronous request generated a layout `cacheId` based on same handle as a CMS page, but without loading the associated CMS page, the CMS page-related layout updates were lost. [GitHub-8554](https://github.com/magento/magento2/issues/8554), [GitHub-9050](https://github.com/magento/magento2/issues/9050)


### Search 

<!--- MAGETWO-83092-->* The unneeded `saveHandler` in the  CatalogSearch indexer declaration has been removed. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11626](https://github.com/magento/magento2/pull/11626)*.

<!--- MAGETWO-88082-->* Search synonyms in a group now can declare several words as synonyms. For example, "Elon Musk,tesla" is a valid synonym group, and a search on the phrase "Elon Musk" will also show results for the "tesla" keyword. Previously, you could declare synonyms for each word (for example, "Elon,Musk,Tesla"), but these words didn't work as a phrase. Synonyms are also now case-insensitive.

<!--- MAGETWO-72863-->* Searching for a value of an attribute set on the store-view level of a product now returns results. Previously, Magento returned results  only if the attribute value was entered on the all store-view levels.

<!--- MAGETWO-88082 -->* Search terms from the same synonym group now return the same results.

<!---ENGCOM-1815 -->* You can now use the **Enter** key to submit a search form. [GitHub-13793](https://github.com/magento/magento2/issues/13793)

<!---ENGCOM-1910 -->* Search on MySQL-based entities has been improved. (This improvment does not provide a fulltext search, but simply the best way to search when a `SearchCriteria` with `fulltext` condition is provided over a MySQL table.) *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [15685](https://github.com/magento/magento2/pull/15685)*. [GitHub-1221](https://github.com/magento/magento2/issues/1221)

<!---ENGCOM-2588 -->* Magento now displays validation messages as needed on advanced searches. Previously, Magento did not display a message even after a customer submitted the advanced search form with no entries. [GitHub-8131](https://github.com/magento/magento2/issues/8131)


### Store

<!--- MAGETWO-87938 -->*  TinyMCE now loads successfully due to a refactoring of how the `minify_exclude` configurations can be used. *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [13687](https://github.com/magento/magento2/pull/13687)*. [GitHub-11577](https://github.com/magento/magento2/issues/11577)


### Orders

<!-- MAGETWO-87151 -->* You can now access the create order page from the customer edit page as expected. Previously, Magento threw a fatal error. [GitHub-11832](https://github.com/magento/magento2/issues/11832)  

<!-- MAGETWO-87351 -->* New Orders are now being saved as expected to the order grid. [GitHub-10128](https://github.com/magento/magento2/issues/10128)    


### Payment methods


<!-- MAGETWO-87154 -->*  [GitHub-11885](https://github.com/magento/magento2/issues/11885) 



Magento 2.2 Paypal Can't Accept Checkout Agreements Before Routing to PayPal 



<!-- MAGETWO-87154 -->*    [GitHub-12900](https://github.com/magento/magento2/issues/12900)  

Braintree "Place Order" button is disabled after failed validation 


<!-- MAGETWO-87151 -->*  [GitHub-3596](https://github.com/magento/magento2/issues/3596)   

Notice: Undefined index: value in /app/code/Magento/Backend/Block/Widget/Grid/Column/Filter/Select.php on line 72


<!--- MAGETWO-95512-->* Unable to create invoice for an order via Braintree PayPal

<!--- MAGETWO-94402-->* PayPal Billing Address for Registered Customers

STEPS TO REPLICATE: 
1. Enable Paypal Express Checkout
2. Get Paypal support to enable Require Customer Billing Address on your paypal account before enabling it in the admin
3. Checkout using paypal
4. Check the billing and shipping address in the confirmation email and in the admin panel

EXPECTED RESULTS:
Billing Address should show the Billing address entered

ACTUAL RESULTS:
Billing address is showing the Shipping address



<!--- MAGETWO-91610-->* Billing Address in Braintree PayPal response is absent
Unable to checkout with Braintree through Paypal from the shopping cart (both standard and mini-shopping cart dropdown) due to this error:

Undefined index: billingAddress in /app/aacdg4mgbgw24/vendor/magento/module-braintree/Model/PayPal/Helper/QuoteUpdater.php on line 138

However, you are able to checkout after going through the regular checkout steps





<!--- MAGETWO-87519-->* Fix incorrect @return tag



 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13356](https://github.com/magento/magento2/pull/13356)*. 

 placeCheckoutOrder method had a @return string in PHPDocs even though it never returns anything.



<!--- MAGETWO-90327 -->* Magento now provides dedicated payment and shipping debug log files to store information specific to those functional areas.

<!--- MAGETWO-90310 -->* PayPal now works as expected with virtual products such as gift cards. Previously, when you tried to place an order for a virtual product using PayPal, Magento did not display the PayPal popup when you clicked **Continue PayPal** during checkout.

<!--- MAGETWO-90106 -->* You can now place orders using PayPal when **Payment Action = Order**. Previously, when **Payment Action = Order**, Magento displayed this error when you reached the order review page: `We can't place the order.`

<!--- MAGETWO-89990 -->* The multi-shipping checkout  flow now supports the CyberSource payment method. This payment method is supported by Magento Commerce only. However,  as part of the process of adding CyberSource support, we've made improvements to the Multi-shipping module to simplify integration process for other payment methods.

Users of the CyberSource payment method should note that CyberSource uses the Magento Vault module only to store and retrieve tokens. Stored CyberSource tokens won't be displayed on the checkout page or customer account.

<!--- MAGETWO-83340 -->* Added possibility to customer error codes from payment gateways. 
For more details, please, see http://devdocs.magento.com/guides/v2.3/payments-integrations/payment-gateway/error-code-mapper.html. 




<!--- MAGETWO-89991 -->* Default AVS and CVV codes are now mapped as (null or empty string) instead of "U". for Signifyd

<!--- MAGETWO-94402 -->* The **Billing Address** field now displays the designated billing address as expected  for a registered customer  when checking out with Paypal Express Checkout. Previously, Magento displayed the shipping address in the **Billing Address** field in both the order confirmation email and the Admin.


<!--- MAGETWO-91500 -->* Admin users that are not part of the Administrator group can now complete payment for an order using Braintree.

<!--- MAGETWO-89625 -->* Magento PayPal integration now supports the Indian Rupee currency (INR).




<!---ENGCOM-1526 -->* Fix overriding of payment methods in getPaymentMethodList 

title: [Forwardport] [TASK] Fix overriding of payment methods in getPaymentMethodList
url: magento/magento2#15134
contributor name: @mzeis
contributor link: https://github.com/mzeis

Matthias Zeis



[GitHub-13460](https://github.com/magento/magento2/issues/13460)


The Magento\Payment\Model\Config\Source\Allmethods config source model does not display every available payment method.



<!---ENGCOM-2954 -->* Magento now validates that the required **Purchase Order Number** field is  set as expected during checkout.

<!--- ENGCOM-2308 -->* A type error in the payment void method of the Authorizenet module has been fixed.


### Product video

<!-- MAGETWO-94029 -->* Magento now populates the YouTube video URL and Title fields with the same values as are populated on the default store view on multisite deployments. (These fields are global scope attributes and should be the same on all storefronts.) Previously, Magento left these fields blank in multisite deployments. 


### Performance


<!-- MAGETWO-91934 -->* You can change store locale without the exporting and importing configuration process. While Magento is in Production and the `SCD_ON_DEMAND` is enabled, the Magento store and admin locale options are available. See [Change locales](https://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html#change-locales).

<!-- MAGETWO-90564 -->* The catalog rule re-indexing operation has been optimized, and average re-indexing time (which depends on rule conditions) has improved by more than  80%.  Previously, a full catalog rule re-index operation on a medium B2C store took more than 20 minutes. 

<!-- MAGETWO-91164 -->* The `catalog:image:resize` command execution time has been reduced by up to 90% in the release. However, this improvement necessitates these additional steps after upgrading your Magento instance to 2.2.6:

    * Remove   `pub/media/catalog/product/cache` . (Removing this folder frees up space.)

    * Run `bin/magento catalog:image:resize`  to generate a new image cache.  (This step is necessary because we’ve changed the path to cached images and must remove the previously cached images.)


### Pricing 

<!--- MAGETWO-73136-->* Now customer can add to cart bundle product with zero price

[GitHub-8969](https://github.com/magento/magento2/issues/8969)


COPY FROM 222

<!-- MAGETWO-93698 -->* Magento now uses the current date as expected when setting the start date for a special price. Previously, Magento set the start date for a special price a few years in the future, which prevented the special price for being active.

<!-- MAGETWO-92136 -->* Tiered pricing and quantity increments now work as expected with decimal-based inventories. 

<!--- MAGETWO-73136 -->* You can now add a bundle product that includes a simple product with a price of 0 (zero) to your cart. Previously, Magento threw an error. [GitHub-8969](https://github.com/magento/magento2/issues/8969)

<!--- ENGCOM-1689 -->* Magento now displays the correct  price on the product page for storefronts running Japanese locales. [GitHub-11711](https://github.com/magento/magento2/issues/11711)

<!--- MAGETWO-87524 -->*   [GitHub-5774](https://github.com/magento/magento2/issues/5774)    

Tier price and custom options give bad results 


### Quote

<!--- MAGETWO-84420 -->* You can now implement a product attribute that sets **Catalog Input Type for Store Owner** equal to  **Fixed Product Tax** in a multi-store environment. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 13019 [13019](https://github.com/magento/magento2/pull/13019)*.[GitHub-12393](https://github.com/magento/magento2/issues/12393)

<!--- ENGCOM-1519 -->* Magento now successfully saves the value of `REMOTE_IP` when a customer uses an IPV6 (Internet Protocol version 6) address. Previously, this value was only partially saved in the `sales_order` and `quote` tables. [GitHub-10395](https://github.com/magento/magento2/issues/10395)

<!--- ENGCOM-1002 -->* 225 643

<!--- ENGCOM-2801 -->* A type error in `CartTotalRepository` has been resolved. Previously, `CartTotalRepository` could not handle extension attributes in quote addresses, and Magento threw a `PHP Fatal error:  Uncaught TypeError`. [GitHub-12993](https://github.com/magento/magento2/issues/12993), [GitHub-12819](https://github.com/magento/magento2/issues/12819)

<!--- ENGCOM-2482 -->* Magento now displays the correct product price for an order created from the Admin in multisite deployments. Previously, when an order was created from the Admin in a multisite deployment where products were assigned different prices per store view, Magento defaulted to the product price of the primary storeview if the order was edited or updated. [GitHub-14869](https://github.com/magento/magento2/issues/14869)

<!--- ENGCOM-2201 -->* 
title: issue/14056 - Coupon API not working for guest user
url: magento/magento2#16562
contributor name: @gelanivishal
contributor link: https://github.com/gelanivishal



<!--- ENGCOM-1208 -->* An integrity constraint violation error no longer occurs after you reorder a product with custom options. [GitHub-12705](https://github.com/magento/magento2/issues/12705)


### Reports

<!--- MAGETWO-90338 -->* You can now successfully export the Ordered Products report to a CSV file. Previously, the export file contained no report data.


<!--- MAGETWO-94909-->* The scope selector for reports now works as expected. Previously, when a merchant set the scope to **All Websites** , the generated report showed  sales from only a subset of websites.


<!--- MAGETWO-94032-->* The `.csv` export of Coupon reports now shows the correct total for selected coupons. Previously, the total line in the `.csv` file showed the totals for all coupons in the selected time period, rather than just the selected coupons. 

<!--- MAGETWO-84811-->* Update wrong layout update xml handle installed in CMS Home Page by default

 *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11891](https://github.com/magento/magento2/pull/11891)*. 


 Update wrong layout update xml handle installed in CMS Home Page by default

 Previously, Preinstalled xml layout update handle in Home Page is invalid


<!--- MAGETWO-63173 -->* Wishlist reports are available on the Admin as expected. 


<!--- MAGETWO-75320 -->* The Low Stock report now accurately lists all out-of-stock products. Previously, this report was not accurate when the All Websites view was selected. [GitHub-10595](https://github.com/magento/magento2/issues/10595)

<!--- MAGETWO-82808 -->* The Admin's Most Viewed Products tab now displays all the products in all  attribute sets, not simply the default attribute set. [GitHub-9768](https://github.com/magento/magento2/issues/9768)

<!---ENGCOM-2169 -->*  The timezone has been removed from the date when Magento retrieves the current month from a UTC timestamp. [GitHub-15940](https://github.com/magento/magento2/issues/15940)

<!--- ENGCOM-2765 -->* The **Year-to-date** dropdown accessed from **Stores** > **Configuration** > **General** > **Reports** > **Dashboard** now displays a numerical list that ranges from 01 to 12 as expected.



### Reward

<!-- MAGETWO-91338 -->* Send Invitation Reward Point Details displays percent sign instead of number

When viewing the My Invitations page in the customer account, messages are displaying '%' instead of the reward points amount.

EXPECTED RESULTS
Amount of points reward some appear in the messages.

ACTUAL RESULTS
Percent sign (%) appears instead of amounts.

### Review

<!---MAGETWO-95723 -->* Product Review "Save and Next" and "Save and Previous" not working
The buttons "Save and Next" and "Save and Previous" in Marketing > Reviews does not work as expected.


<!---ENGCOM-1234 -->* title: [Forwardport] Fix issue #13010. Check if product is assigned to current website.
url: magento/magento2#14528
contributor name: @mastiuhin-olexandr
contributor link: https://github.com/mastiuhin-olexandr

Mastiuhin Oleksandr


[GitHub-13010](https://github.com/magento/magento2/issues/13010)

Write a Review page works on multistore for products that are not assigned to that store

Expected result
Return a 404 page similar to the product page on /catalog/product/view/id/1
Actual result
The page shows up as it would on website 1 with the review form, product image, title, description, add to cart (which throws an error if you try to use it), etc.
View details about a product from store 1 on store 2's frontend.


<!---ENGCOM-2858 -->* Magento now displays a `404 page not found` error when a customer tries to navigate to a product review that is not accessible. Previously. Magento displayed a PHP error code.

<!---ENGCOM-2380 -->* Magento no longer throws an error when a merchant edits a product from the Admin when reviews are disabled. [GitHub-6264](https://github.com/magento/magento2/issues/6264)




<!-- MAGETWO-91805 -->* When a customer creates a product review, the link to the product from the review in the customer's **My Account** > **My Product Review** is now SEO friendly.

#### Return Merchandise Authorizations (RMA)

`GET  V1/returns/:id` calls return tracks objects as expected.  

<!-- MAGETWO-91567 -->* The `GET /V1/returns/:id` endpoint retrieves `tracks` arrays as expected.

<!---MAGETWO-94297 -->* On Returns(RMA) details, Show/Hide details button does nothing

On Returns(RMA) details, Show/Hide details button does nothing.




<!-- MAGETWO-93787 -->* The `GET /V1/returns?searchCriteria` endpoint retrieves `tracks` arrays as expected.

<!-- MAGETWO-93711 -->* The RMA status label now shows on the email that Magento sends to customers when the status of an RMA changes.

<!-- MAGETWO-93708 -->* Magento now sends email when the status of a Return Merchandise Authorization (RMA) changes to Return Received, Approved, or Rejected. Previously, no email was sent to the customer who created the order.

<!-- MAGETWO-92125 -->* Return Merchandise Authorization (RMA) calls now return order items and comments as expected. 

<!-- MAGETWO-93709 -->* Magento now sends email when the status of a Return Merchandise Authorization (RMA) changes to Return Received, Approved, or Rejected. Previously, no email was sent to the customer who created the order.

<!--- MAGETWO-90295 -->* `Magento/Rma/Block/Adminhtml/Rma/Edit/Item/Form/Element/Boolean` is a new block element that allows rendering ability for the Boolean RMA attributes on the Admin.


### Rule

<!--- MAGETWO-90329-->*  Magento now correctly displays in Cart Price rules the nesting levels for categories with nesting levels that exceed three levels.


### Sales

<!---MAGETWO-95315 -->* Joins to grid collections causes MySQL exception due to ambiguous where clause



<!---MAGETWO-85522 -->* 


 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [997](https://github.com/magento-engcom/magento2ce/pull/997)*. 



 Steps to reproduce
Install Magento 2 from archive
In table eav_entity_type for entity_type_code = "invoice" the 'entity_model' is Magento\Sales\Model\ResourceModel\Order
Expected result
Shouldn't it be Magento\Sales\Model\ResourceModel\Order\Invoice (with \Invoice at the end). I see shipment and creditmemo entity_model classes have at the end \Creditmemo and \Shipment
Actual result
'entity_model' is Magento\Sales\Model\ResourceModel\Order





<!--- MAGETWO-90134 -->* Magento has added verification for previously set filters in `Magento/Ui/Component/Filters`, which has eliminated duplication of filters in the collection `where` conditions.

<!--- MAGETWO-90035 -->* Magento now shows all products as expected in the Recently Ordered list when a customer places an order that contains products from multiple stores. Previously, in installations with two storefronts, if a customer added products from both stores to the same shopping cart, and placed a single order, the recently ordered product list would not show all ordered products.



<!--- MAGETWO-60034 -->* Cannot ship remaining items in an order for several of one product if credit memo is made for some


Totally refunded orders still can be shipped.

<!--- MAGETWO-91710 -->* The grand total for a credit memo now matches the invoiced total when a discount is applied to shipping charges.

<!--- MAGETWO-59632 -->* The Items Ordered list now updates as expected when the user clicks **OK** when changing the options of a configurable product during creation of an order from the Admin. Previously, the update did not occur until the user clicked **Update Items and Quantities**.

<!--- MAGETWO-91678 -->*  Admin orders are no longer restricted by a minimum order amount. Previously, Magento required this minimum for both Admin and storefront users. 

<!--- MAGETWO-70661 -->* Orders exported to a CSV file now display dates in a consistent format. 


<!--- MAGETWO-93394 -->* Table rate shipment is taken from wrong website ID when creating an order through the admin

When I create an order through the admin panel and select my shipping method table rate it takes the shipping rate table from the wrong website ID.

EXPECTED RESULT
Table rate prices are taken from the correct website id

ACTUAL RESULT
Shipment price is always taken from the table rate website id 1



<!--- 89238 -->* Disabled invoice emails produce performance issue
When merchant disables option sales_email/invoice/enabled on store/website level tables sales_invoice will be populated with a number of invoices that will have email_sent = NULL always.

EXPECTED RESULT
Entities excluded from 'email send' process and there no lags with Cron and in Admin panel
ACTUAL RESULT
We observe that page loads to long when the option will be switched in the admin panel. The behavior will be the same for Cron, because same functionality is in use.



<!---ENGCOM-1291 -->* Sales PDFs now support unicode fonts (GNU Free Font), which broadens language support in these PDFs. 


title: added GNU Free Font to be used by sales PDFs
url: magento/magento2#14710
contributor name: @rossmc
contributor link: https://github.com/rossmc


Ross

[GitHub-9666](https://github.com/magento/magento2/issues/9666), [GitHub-12323](https://github.com/magento/magento2/issues/12323)




<!---ENGCOM-1466 -->* Transport variable can now be altered in `email_invoice_set_template_vars_before Event

gwharton

title: [2.3-develop][Forwardport] Transport variable can not be altered in email_invoice_set_template_vars_before Event
url: magento/magento2#15039
contributor name: @gwharton
contributor link: https://github.com/gwharton

We waht to change the payment_html for banktransfer invoices. Unfortunately the instruction is also sent in invioce email. And there the customer already has paid the bill.



[GitHub-10210](https://github.com/magento/magento2/issues/10210)



<!---ENGCOM-1110 -->* Fixed decimal handling in order quantities

title: Fixed decimal handling in order quantities
url: magento/magento2#14346
contributor name: @barbazul
contributor link: https://github.com/barbazul

I am using rounding to a large number of decimals (8) to orders that cannot be completed due to strict equal to zero comparisons on item qty
Also added test coverage to getSimpleQtyToShip and getQtyToInvoice




[GitHub-14328](https://github.com/magento/magento2/issues/14328)


When working with products set up with is_qty_decimal, getQtyToShip and getQtyToInvoice sometimes return wrong values and cause orders to not be able to be completed







<!--- ENGCOM-985 -->* 225 793

Invoice grid shows wrong subtotal for partial items invoice. It shows order's subtotal instead if invoiced item's subtotal 

title: [Forwardport] Invoice grid shows wrong subtotal for partial items invoice. It shows order's subtotal instead if invoiced item's subtotal
url: magento/magento2#14209
contributor name: @AlexWorking
contributor link: https://github.com/AlexWorking

Invoice grid shows wrong subtotal for partial items invoice. It shows order's subtotal instead if invoiced item's subtotal


[GitHub-13804](https://github.com/magento/magento2/issues/13804)

Invoice grid shows wrong subtotal for partial items invoice. It shows order's subtotal instead if invoiced item's subtotal

Steps to reproduce
Place order with multiple taxable items
Generate separate invoice for each items. (In short generate multiple invoices for same order with different items)
Do check value of Subtotal column value in Invoice grid.
Expected result
In Invoice grid it should show Subtotal of invoiced items only, not order's subtotal
Actual result
In Invoice grid it shows order's Subtotal instead of invoiced item's Subtotal




<!--- ENGCOM-1007 -->* Magento now displays text on the New Cart Rules page correctly. Previously, labels listed in the Store View Specific Labels section of this page was sometimes truncated or duplicated. [GitHub-12231](https://github.com/magento/magento2/issues/12231)



<!--- ENGCOM-1054 -->* 225 1058

title: Resolves PHPdoc issue in ticket #13992
url: magento/magento2#14304
contributor name: @julianvdrielen
contributor link: https://github.com/julianvdrielen

julianvdrielen
Incorrect PHPdoc causes warnings in IDE. I just changed the return type to the type it actually returns in the PHPdoc.


[GitHub-13992](https://github.com/magento/magento2/issues/13992)

Phpdoc references the return object as Magento\Sales\Model\Order\Invoice\Item but it should be Magento\Sales\Model\Order\Shipment\Item.

Causes incorrect type warnings in IDEs.




<!---ENGCOM-1773 -->* title: [Forwardport] Wrong invoice prefix in multistore setup due to default store
url: magento/magento2#15665
contributor name: @vgelani
contributor link: https://github.com/gelanivishal

I have taken correct store id from store object.

[GitHub-14063](https://github.com/magento/magento2/issues/14063)


Wrong invoice prefix in multistore setup due to default store id 

Expected result
I would like to set the correct invoice prefix when I try to create a new invoice from a specific store view.

Actual result
Magento creates the invoice number using the default store view id


Vishal Gelani



<!---ENGCOM-2026 -->*  CreateOrderBackendPartOneTest rework to support MSI reservation mechanism.

title: 1190: CreateOrderBackendPartOneTest rework to support MSI reservation mechanism.
url: magento/magento2#16153
contributor name: @nmalevanec
contributor link: https://github.com/nmalevanec


Malyovanets Nickolas

Add shipment step to CreateOrderBackendPartOneTest in order to support MSI reservation mechanism.





<!---ENGCOM-2028 -->* 
CreateCreditMemoEntityTest rework to support MSI reservation mechanism

title: 1163: CreateCreditMemoEntityTest rework to support MSI reservation mechanism.
url: magento/magento2#16170
contributor name: @nmalevanec
contributor link: https://github.com/nmalevanec

Malyovanets Nickolas







<!---ENGCOM-2654 -->* Magento now removes unneeded PDF files after generation. Previously, Magento saved a copy of every generated invoice PDF in `/var`. [GitHub-3535](https://github.com/magento/magento2/issues/3535), [GitHub-14517](https://github.com/magento/magento2/issues/14517)

<!-- MAGETWO-87066 -->* [GitHub-5105](https://github.com/magento/magento2/issues/5105) 

Error While send Invoice with Grouped Products (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 


<!-- MAGETWO-87064 -->*  [GitHub-10856](https://github.com/magento/magento2/issues/10856) 

Sync billing with shipping address on Admin Reorder and Admin Customer Create Order page does not work for Existing address selected


### SalesRule

<!-- MAGETWO-93717 -->* Cart price rules with associated coupons are no longer affected by edits to scheduled updates. 

<!---ENGCOM-1201 -->* 

Try to fix discount calculation

title: Try to fix discount calculation #10790
url: magento/magento2#14468
contributor name: @ilnytskyi
contributor link: https://github.com/ilnytskyi


Stanislav Ilnytskyi

[GitHub-10790](https://github.com/magento/magento2/issues/10790)



Tax rate + 100% discount results in negative grand total

Setting up tax a rule and applying 100% discount in the shopping cart results in a negative grand total.








### Sample data

<!---MAGETWO-85584 -->* The `sampledata:deploy` and `remove` commands now have `no-update` options. *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request [12663](https://github.com/magento/magento2/pull/12663)*.

### Search

<!-- MAGETWO-87064 -->*   magento/magento2#10275: Admin global search - submit by enter doesn't work

<!---MAGETWO-70316 -->* The **Catalog > Products** page now contains a keyword search. *Fix submitted by [Josef Behr](https://github.com/josefbehr) in pull request   [10089](https://github.com/magento/magento2/pull/10089)*. [GitHub-5785](https://github.com/magento/magento2/issues/5785)

<!---MAGETWO-71801 -->* Magento no longer throws an asymmetric transaction error when you reindex in Magento deployments running Elasticsearch. *Fix submitted by [Riccardo Tempesta](https://github.com/phoenix128) in pull request [10610](https://github.com/magento/magento2/pull/10610)*. [GitHub-9930](https://github.com/magento/magento2/issues/9930)

<!---MAGETWO-86885 -->* Admin product search - Pressing enter does not submit
Login to the admin
Go to products > catalog



<!---MAGETWO-82423 -->* Add The Ability To Limit Autocomplete Results


  *Fix submitted by [Max Chadwick](https://github.com/mpchadwick) in pull request [11572](https://github.com/magento/magento2/pull/11572)*. 


 Adds the ability to limit the number of results in the search autocomplete. Defaults to 8

<!-- MAGETWO-91813 -->* Elasticsearch now correctly calculates the relevance of quick search results according to selected attribute search weights.

<!--- MAGETWO-90739 -->* Out-of-stock options for configurable products no longer show up in search and layered navigation results.

<!--- MAGETWO-87587 -->* Sort by Product Name doesn't work with Ancor and available filters

Sort by Product Name doesn't work with Ancor and available filters

On the category page when we have filters (as example - we need to define color for products) + "Ancor" is enabled for category - sorting by product name doesn't work correct.


 *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [13468](https://github.com/magento/magento2/pull/13468)*. 


<!--- MAGETWO-93994 -->*  Elasticsearch is now the default search engine in Magento. MySQL search has been deprecated. 

<!--- MAGETWO-91625 -->*  Elasticsearch now works as expected in Chinese locales. 

<!--- MAGETWO-59305 -->*  Elasticsearch no longer includes out-of-stock product options in search results. 

<!--- MAGETWO-93996 -->* Deprecate CatalogSearch	CatalogSearch is deprecated. ElasticSearch should be used instead 

<!--- MAGETWO-72142 -->* **Support for Elasticsearch 5.x**. See [Install and configure Elasticsearch]({{ site.baseurl }}/guides/v2.2/config-guide/elasticsearch/es-overview.html) for more information about using Elasticsearch with Magento. *Fix submitted by [Aurélien Foucret](https://github.com/afoucret) in pull request [2202](https://github.com/magento/magento2ce/pull/2202)*. 


<!--- ENGCOM-1057 -->* Magento no longer throws an error when a customer uses quick search to search on a term that does not exist in the search database. Previously, Magento returned this error, `TypeError: this._getFirstVisibleElement(...).addClass is not a function`. [GitHub-14274](https://github.com/magento/magento2/issues/14274)


<!--- ENGCOM-969 -->* Magento no longer throws an error when you submit the search form in the header with an empty value. [GitHub-13791](https://github.com/magento/magento2/issues/13791)

<!--- ENGCOM-961 -->* 2115 2509

title: [Forwardport] Act better on existing input focus instead of removing it
url: magento/magento2#14180
contributor name: @mastiuhin-olexandr
contributor link: https://github.com/mastiuhin-olexandr

Mastiuhin Oleksandr

[GitHub-13988](https://github.com/magento/magento2/issues/13988)


Mini search field looses focus after its JavaScript is initialized

Steps to reproduce
Open Magento 2 shop.
Focus mini search field before JavaScript manages to load and optionally start writing some query there.
Expected result
The focus is maintained when the component is initialized.
Actual result
After mini search component's JavaScript loads and initializes, search input loses focus and user has to focus it again.



<!--- ENGCOM-1486 -->* You can now use an asterix when searching on customer names. Previously, if you used an asterix in a search query, Magento displayed this message, `Something went wrong with processing the default view and we have restored the filter to its original state.` [GitHub-14855](https://github.com/magento/magento2/issues/14855)


### Sitemap

<!--- MAGETWO-83292-->* Magento now correctly processes global product attributes when generating the sitemap. *Fix submitted by [Ričards Zālītis](https://github.com/therool) in pull request [8999](https://github.com/magento/magento2/pull/8999)*. [GitHub-5941](https://github.com/magento/magento2/issues/5941)


<!--- MAGETWO-71372-->* It's now easier to add additional items to a sitemap. Previously, `SitemapPlugin` worked inconsistently with large sitemaps. *Fix submitted by [Piotr Kwiecinski](https://github.com/piotrkwiecinski) in pull request [10442](https://github.com/magento/magento2/pull/10442)*. [GitHub-10045](https://github.com/magento/magento2/issues/10045)

<!--- MAGETWO-70707-->* Sitemap no longer crashes if the scope of the name attribute is set to global. [GitHub-5941](https://github.com/magento/magento2/issues/5941), [GitHub-8999](https://github.com/magento/magento2/issues/8999)

<!--- MAGETWO-70872-->* Sitemap no longer crashes if the scope of the name attribute is set to global. [GitHub-5941](https://github.com/magento/magento2/issues/5941), [GitHub-8999](https://github.com/magento/magento2/issues/8999)
<!--- ENGCOM-1351 -->*

<!---ENGCOM-2666 -->* Images in XML sitemap are no longer always linked to the primary store in a multistore deployment. [GitHub-15588](https://github.com/magento/magento2/issues/15588)


<!--- MAGETWO-87562 -->*   [GitHub-12446](https://github.com/magento/magento2/issues/12446) 

Remove /home from the sitemap.xml 


<!--- MAGETWO-87523 -->*  [GitHub-10502](https://github.com/magento/magento2/issues/10502)

Fatal error: Call getTranslateInline of null when generating some sitemap with errors


<!--- MAGETWO-87449 -->*  [GitHub-9151](https://github.com/magento/magento2/issues/9151) 

Sitemap.xml: lastmod timestamp can contain invalid dates



### Sample data

<!--- MAGETWO-87646-->* Fixed fatal error on "magento sampledata:deploy" when magento is not installed


 *Fix submitted by [Quaternion](https://github.com/4quaternion) in pull request [13571](https://github.com/magento/magento2/pull/13571)*. 


Quaternion

checkout Magento from 2.3-develop branch
Run bin/magento sampledata:deploy (with no errors)



### Shipping

<!-- MAGETWO-93712 -->* The free shipping cart price rule now works as expected when **UPS shipping method** is enabled and **Free Shipping** is set to "For matching items only".

<!--- MAGETWO-94433 -->*  The Magento UPS module has been updated to support new UPS API endpoints.

<!--- MAGETWO-59529 -->*  You can now use `GET .V1/shipments` to search for shipments that contain a shipping label. Previously, using this call  caused Magento to throw an exception. [GitHub-6668](https://github.com/magento/magento2/issues/6668)

<!-- MAGETWO-91622 -->* Magento now successfully creates shipping labels for a return merchandise authorization (RMA) when using FedEx Smart Post as the shipping option. Previously, Magento threw an error under these circumstances. 


<!-- MAGETWO-81976 -->*


Added carrier code to ID to distinguish shipping methods

Added carrier code to ID to distinguish shipping methods with the same method name but differing carrier code


[GitHub-10795](https://github.com/magento/magento2/issues/10795)


Shipping method radios have duplicate IDs on cart page

Added carrier code to ID to distinguish shipping methods with the same method name but differing carrier code

Shipping method radios have duplicate element IDs on cart page, which makes it impossible to select the second method.

Description
Make the element ID unique by adding in the carrier code into the ID.



<!--- ENGCOM-2326 -->* Multishipping checkout now works as expected. Previously, Magento displayed the `Shipping address is not set` error message  when checking out an order with multiple addresses.


<!-- MAGETWO-87057 -->*  [GitHub-7995](https://github.com/magento/magento2/issues/7995) 

If you leave as default, shipping lines disappear



### Store

<!-- MAGETWO-75322 -->*  Returns from REST endpoint  `/V1/store/storeViews` calls now include as expected `is_active` values for stores. [GitHub-10922](https://github.com/magento/magento2/issues/10922)





<!---ENGCOM-1999 -->* Getting wrong frontend-controller, when using storecodes in urls

Create a Store with 2 StoreViews like "de" and "en". "de" is the default storeview
Set 'Stores' > 'Configuration' > 'General' > 'Web' > 'Add Store Code to Urls' to 'Yes'
Set "web/default/front" from Store "en" to somehing different like "catalog/product/view/id/productid"
Go to "domain.com/en"
Expected result
I will see the product page

Actual result
I see the default CMS-Page




*Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [15759](https://github.com/magento/magento2/pull/15759)*. [GitHub-15565](https://github.com/magento/magento2/issues/15565)

<!---ENGCOM-2606 -->* The `getUrlInStore()` method no longer returns URLs that contain the store code, which has shortened the extremely long URLs it previously returned. [GitHub-16273](https://github.com/magento/magento2/issues/16273)

<!--- MAGETWO-87615 -->*  You can now use an `admin_system_config_changed_section` event to subscribe to changes for all sections in **Stores** > **Configuration**. [GitHub-5035](https://github.com/magento/magento2/issues/5035)  


### Staging

<!-- MAGETWO-93719 -->* Magento now rolls  back updated changes to their pre-update state  when a merchant deletes an active Scheduled Update. Previously, some products were removed from their assigned categories (and categories were removed from the Amdin) when an active product update was deleted.  

<!-- MAGETWO-93706 -->* You can now successfully re-order a configurable product. Previously, a schedule update for one configurable product affected other ordered configurable products. 

<!-- MAGETWO-91743 -->* Magento no longer deletes products from the Admin product list after a merchant deletes its active schedule update. This deletion only appeared after the scheduled update time. 



### Swagger

<!--- MAGETWO-90787-->* Swagger now correctly renders correctly POST/PUT operations. Previously, in Swagger, the text area that contained the payload structure of some POST and PUT operations was not displayed. 

<!---ENGCOM-2811 -->* Swagger now works as expected when JavaScript minification is enabled. Previously, when JavaScript minification was enabled, the swagger-ui-bundle.js became corrupted, although Swagger worked fine when minification was subsequently disabled, and the files were redeployed.

<!---ENGCOM-1934 -->*  Swagger now handles `searchCriteria`-related requests as expected. [GitHub-15322](https://github.com/magento/magento2/issues/15322)




### Swatches

<!-- MAGETWO-87155 -->* Visual swatches now display  swatch color in the Admin as expected. [GitHub-11828](https://github.com/magento/magento2/issues/11828) 

<!-- MAGETWO-87151 -->* Color attribute swatches are now visible when sorting is enabled. [GitHub-10628](https://github.com/magento/magento2/issues/10628) 

<!--- MAGETWO-83292-->* You can now use REST to import visual swatch attribute options. Previously, you could not add swatch options using service contracts unless a swatch option already existed for the attribute. *Fix submitted by [gonzalopelon](https://github.com/gomencal) in pull request [12044](https://github.com/magento/magento2/pull/12044)*. [GitHub-9410](https://github.com/magento/magento2/issues/9410), [GitHub-10707](https://github.com/magento/magento2/issues/10707), [GitHub-10737](https://github.com/magento/magento2/issues/10737), [GitHub-11032](https://github.com/magento/magento2/issues/11032)

<!--- MAGETWO-87869-->* The load and merge order of `view.xml` configuration in `\Magento\Swatches\Helper\Media` now matches `\Magento\Catalog\Helper\Image.` *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [13506](https://github.com/magento/magento2/pull/13506)*. [GitHub-12647](https://github.com/magento/magento2/issues/12647)

<!--- MAGETWO-87935-->* Replaced .size() with .length to be compatible with jQuery 3.*. *Fix submitted by [Kirill Morozov](https://github.com/kirmorozov) in pull request [13686](https://github.com/magento/magento2/pull/13686)*. 

<!--- ENGCOM-1128 -->* Swatch functionality that has been extended using JavaScript mixins now works as expected in Safari and Microsoft Edge. *Fix submitted by [Rostyslav](https://github.com/rostyslav-hymon) in pull request [14247](https://github.com/magento/magento2/pull/14247)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!--- ENGCOM-1017 -->* You can now save a swatch attribute that has an empty option. *Fix submitted by [enriquei4](https://github.com/enriquei4) in pull request [13220](https://github.com/magento/magento2/pull/13220)*. [GitHub-13117](https://github.com/magento/magento2/issues/13117)

<!--- ENGCOM-2870 -->* You can now change attribute type from `swatch` to `dropdown`. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [17750](https://github.com/magento/magento2/pull/17750)*. [GitHub-12695](https://github.com/magento/magento2/issues/12695), [GitHub-11703](https://github.com/magento/magento2/issues/11703), [GitHub-9307](https://github.com/magento/magento2/issues/9307), [GitHub-11403](https://github.com/magento/magento2/issues/11403), [GitHub-9923](https://github.com/magento/magento2/issues/9923)





<!---MAGETWO-82558 -->*

Steps to reproduce
Go to Admin
Open Stores > Attributes > Product
Add New Attribute with Catalog Input Type for Store Owner: Visual Swatch
In Tab Manage Swatch (Values of Your Attribute) click Add Swatch button
Press to chose color or file
Expected result
Drop down menu is show all items

FIX show visual swatches in admin - product attribute

Visual swatch wasn't shown full menu, I only fix some CSS to show full menu. Now the menu is showed correctly.





[GitHub-11534](https://github.com/magento/magento2/issues/11534)

Values of Visual Swatch Attribute drop down is not work correct






### Tax

<!--- MAGETWO-83405 -->* Tax total amount is now equal to the sum of the tax details amounts. Previously, Magento displayed the wrong order tax amounts when using specific tax configurations. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request [11594](https://github.com/magento/magento2/pull/11594)*. [GitHub-10347](https://github.com/magento/magento2/issues/10347)

<!---MAGETWO-82746 -->*  You can now successfully upgrade from 2.1.x to 2.2.0. Previously, when you tried to upgrade from 2.1.9 to 2.2.0, Magento displayed the  **postcode is a required field** error message, and `setup:upgrade` failed. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [11735](https://github.com/magento/magento2/pull/11735)*.

<!---MAGETWO-87511 -->*  `\Magento\Framework\Data\OptionSourceInterface::getAllOptions()` and `\Magento\Framework\Data\OptionSourceInterface::toOptionArray()` are now compatible with parent classes. *Fix submitted by [Yevhen Sentiabov](https://github.com/joni-jones) in pull request [34](https://github.com/magento-engcom/php-7.2-support/pull/34)*. 

<!---MAGETWO-75865 -->* Double tags have been removed from the `config.xml` of the `Magento_Tax` module.

<!---ENGCOM-1555 -->* Magento no longer performs redundant tax calculations  for every price on category page, which has improved product performance. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [15200](https://github.com/magento/magento2/pull/15200)*. [GitHub-14941](https://github.com/magento/magento2/issues/14941)




### Testing

<!-- MAGETWO-87154 -->*  Integrations tests no longer throw "Cannot instantiate interface Magento\Framework\Interception\ObjectManager\ConfigInterface" errors. [GitHub-12844](https://github.com/magento/magento2/issues/12844)  

<!-- MAGETWO-87064 -->* Integration tests now reset the integration test database as expected.  [GitHub-10025](https://github.com/magento/magento2/issues/10025)  

<!---MAGETWO-82550 -->* A typo in `dev/tests/functional/tests/app/Magento/Paypal/Test/TestCase/OnePageCheckoutTest.xml` has been fixed. [GitHub-7591](https://github.com/magento/magento2/issues/7591) 

<!---MAGETWO-87317 -->* Static tests now check for the deprecated `each()` function. *Fix submitted by [Yevhen Sentiabov](https://github.com/joni-jones) in pull request [31](https://github.com/magento-engcom/php-7.2-support/pull/31)*. 

<!---MAGETWO-85993 -->*  The functional.suite.dist.yml has been updated to handle custom backend names. (This value was previously hard-coded.) *Fix submitted by [scribam](https://github.com/scribam) in pull request [12848](https://github.com/magento/magento2/pull/12848)*. 

<!---MAGETWO-85817 -->*  THe `validate_image_info_rollback.php` test suite has been updated. *Fix submitted by [Harry Mumford-Turner](https://github.com/harrymt) in pull request [12800](https://github.com/magento/magento2/pull/12800)*. 

<!---MAGETWO-90803 -->*  `phpunit.xml` is now blacklisted during schema validation static tests, particularly `Magento/Test/Integrity/Xml/SchemaTest.php`.

<!--- MAGETWO-81646 -->* The `\Magento\Test\Php\LiveCodeTest::testCodeStyle`  method now uses whitelist files. *Fix submitted by [Adrian Martinez](https://github.com/adrian-martinez-interactiv4) in pull request [11376](https://github.com/magento/magento2/pull/11376)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!--- ENGCOM-1257 -->*  Integration test coverage for new extension point for New Shipment Controller has been added. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [14634](https://github.com/magento/magento2/pull/14634)*. [GitHub-788](https://github.com/magento/magento2/issues/788)

<!--- ENGCOM-1093 -->* `sjparkinson/static-review` and other obsolete tools  (including `dev/tools/Magento/Tools/Layout`, `dev/tools/Magento/Tools/StaticReview/pre-commit`, and `dev/tools/Magento/Tools/psr/phpcs_precommit_hook.sh`) have been removed from the test code base. *Fix submitted by [Rostyslav](https://github.com/rostyslav-hymon) in pull request [14368](https://github.com/magento/magento2/pull/14368)*. [GitHub-14138](https://github.com/magento/magento2/issues/14138)

<!--- ENGCOM-1031 -->* Integration tests for product URL rewrite generation have been added.  *Fix submitted by [Rostyslav](https://github.com/rostyslav-hymon) in pull request [14252](https://github.com/magento/magento2/pull/14252)*.

<!--- ENGCOM-2138 -->* The `ProcessCronQueueObserverTest.php` integration test now works correctly.

<!--- ENGCOM-2409 -->* `setCateroryIds([])` has been corrected to `setCategoryIds([])` throughout the test suites. [GitHub-15590](https://github.com/magento/magento2/issues/15590)

<!--- ENGCOM-1968 -->*  CreateOrderBackendTest has been refactored to support  **Reorder** button when MSI is enabled. *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [16006](https://github.com/magento/magento2/pull/16006)*. [GitHub-680](https://github.com/magento/magento2/issues/680)

<!---MAGETWO-87058 -->*  Unit tests have been refactored to no longer check for deleted file `app/code/Magento/Catalog/Model/ResourceModel/Product/Indexer/Eav/AbstractEav.php`. [GitHub-11230](https://github.com/magento/magento2/issues/11230) 





### Theme

<!--- MAGETWO-88973 -->* Customers can now successfully close full-screen zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if a customer chose full-screen zoom for any product image, he could not close the full-screen zoom.

<!--- MAGETWO-88264 -->* The forced setting of `cache_lifetime` to `false`  has been changed to a default `cache_lifetime` value of 3600 for `Magento\Theme\Block\Html\Footer`. [GitHub-13595](https://github.com/magento/magento2/issues/13595)

<!--- ENGCOM-959 -->* The default storefront welcome message now works as expected when the **Translate Inline**  (**Stores > Configuration > Advanced > Developer >**) setting is enabled. [GitHub-12711](https://github.com/magento/magento2/issues/12711)

<!--- ENGCOM-775 -->* We've improved the display of the Payment Methods section of the checkout page on mobile devices. Previously, the layout of page elements was not correctly spaced. [GitHub-13315](https://github.com/magento/magento2/issues/13315)



### Translation and locales

<!---MAGETWO-82650 -->* The `<![CDATA[]]>` statement in `system.xml` now works as expected. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request [11679](https://github.com/magento/magento2/pull/11679)*. [GitHub-7767](https://github.com/magento/magento2/issues/7767)

<!---MAGETWO-71380 -->* The JavaScript translation for validation messages now work for customer account pages. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-5820](https://github.com/magento/magento2/issues/5820)

<!--- MAGETWO-71380-->* Messages on password strength are now translatable. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-5509](https://github.com/magento/magento2/issues/5509)

<!--- 71380-->* The JavaScript translation regex no longer leads to unexpected results and untranslatable strings. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-7403](https://github.com/magento/magento2/issues/7403)

<!--- MAGETWO-71380-->* All messages in Customer Account Create are now translatable. Previously, warning messages about password validation appeared in locale language only. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-9967](https://github.com/magento/magento2/issues/9967)


<!-- MAGETWO-93708 -->* We've added  client-side caching of `js-translation.js`.

<!-- MAGETWO-94119 -->* The datepicker date filter on **Reports** > **Products** > **Ordered** now works as expected for administrators working in Australian English locales. 

<!--- ENGCOM-1055 -->* Magento now supports Malaysian locales. [GitHub-14089](https://github.com/magento/magento2/issues/14089)


<!--- ENGCOM-2041 -->* The string for `moreButtonText` in `app/code/Magento/Swatches/view/frontend/web/js/swatch-renderer.js` can now be translated. [GitHub-16079](https://github.com/magento/magento2/issues/16079)

<!--- ENGCOM-2212 -->* Magento now displays the correct  price on the product page for storefronts running Japanese locales. [GitHub-11711](https://github.com/magento/magento2/issues/11711)


<!--- ENGCOM-2400 -->* The module responsible for generating the `js-translations.json` file now contains a routine that translates strings in tags. [GitHub-12081](https://github.com/magento/magento2/issues/12081)


<!-- MAGETWO-87066 -->*  Magento now displays the correct payment method title on the payments page during checkout in multistore deployments where storeviews implement different locales. [GitHub-7582](https://github.com/magento/magento2/issues/7582)  

<!-- MAGETWO-87066 -->*  The hint provided for the global configuration field on the Admin configuration page has been corrected. [GitHub-8958](https://github.com/magento/magento2/issues/8958)

<!-- MAGETWO-87066 -->*  `region_id` is no longer overridden when a customer edits their billing address from a country that requires a value for state to a country where one is not required. [GitHub-10317](https://github.com/magento/magento2/issues/10317)



### UI

<!-- MAGETWO-93715-->*  Magento no longer sends duplicate delete requests as a result of an unstable Internet connection. Previously, unintentional mass deletion of products sometimes occurred as a result of an unstable Internet connection. 

<!-- MAGETWO-91848 -->* As you type additional characters into the text field for a product's custom option, the hint showing the number of characters left before reaching the maximum now decreases as expected.

<!-- MAGETWO-83412 -->*  Previously missing translation strings have been added to the UI module. *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request 11440*. [GitHub-5956](https://github.com/magento/magento2/issues/5956)

<!--- ENGCOM-1457 -->* Administrators who lack access to the CatalogRule module can now perform operations as expected in the Admin cart price rule edit page. 


<!--- ENGCOM-1541 -->* Clarify XSD for formElements allowed settings


*Fix submitted by [Neill Robson](https://github.com/neillrobson) in pull request 15161*. [GitHub-14140](https://github.com/magento/magento2/issues/14140)



<!--- ENGCOM-2219 -->* Users can now press the **Esc** button on  the delete-from-cart confirmation pop-up window  without generating a `jQuery` UI error. Previously, when a customer added a product to the shopping cart, then pressed the trash icon to delete it, Magento displayed this confirmation pop-up window, but threw an error when the customer pressed the window's **Esc** button. [GitHub-14593](https://github.com/magento/magento2/issues/14593)

<!--- ENGCOM-2243 -->* The `font-size` variable has been updated and standardized. 

<!--- ENGCOM-2340 -->* We've added `@navigation-level0-item__hover__color` missing variable for mobile and tablet view. [GitHub-15848](https://github.com/magento/magento2/issues/15848)


<!--- ENGCOM-2878 -->* Footers now behave as expected when displaying Magento on a mobile device. [GitHub-15118](https://github.com/magento/magento2/issues/15118)

<!--- ENGCOM-2690 -->* The unused totalbar block has been removed from the invoice create and credit memo create layouts. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 17414*. [GitHub-16653](https://github.com/magento/magento2/issues/16653), [GitHub-16655](https://github.com/magento/magento2/issues/16655)

<!--- ENGCOM-2824 -->* The JavaScript validation rule used to validate AM/PM time settings now works as expected when JavaScript is minified.

<!--- ENGCOM-2839 -->* The message list component message type now has a message type of success. Previously, this type was always `error` when the `parameters` property was specified. 

<!--- ENGCOM-2918 -->* Magento now displays the wishlist icon on the shopping cart page on mobile devices. Previously, Magento cut off the wishlist icon on this page when viewed on a mobile device.

<!--- ENGCOM-2861 -->* JavaScript validation rules no longer require validation of fields where completion is not required. Previously, customers could not complete forms unless non-required fields were completed.

<!--- ENGCOM-2323 -->* When a user scrolls a page, the datepicker now retains its position relative to other page elements as expected. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request 16776*. [GitHub-7903](https://github.com/magento/magento2/issues/7903)

<!--- ENGCOM-2649 -->* The confirmation modal buttons that Magento displays when a customer sends a product to the trash are now translated as expected.

<!--- ENGCOM-1810 -->* The dropdown menu is now positioned as expected under the link on the UI Component listing. [GitHub-15660](https://github.com/magento/magento2/issues/15660)

<!---MAGETWO-82721 -->* Magento no longer displays the current date for a product when the `date` attribute is empty. [GitHub-9869](https://github.com/magento/magento2/issues/9869)

<!---MAGETWO-87066 -->*  Magento no longer throws a JavaScript error when a user enters a special character (for example, `/` or `&`) while adding the `stripped-min-length` validation to a UI component. [GitHub-9920](https://github.com/magento/magento2/issues/9920)

<!---MAGETWO-87531 -->*  Magento no longer throws an `Uncaught Error: Script error for: trackingCode` error on storefront pages. [GitHub-12828](https://github.com/magento/magento2/issues/12828)

<!---MAGETWO-87153 -->*  `range-word` validation for form fields now works as expected. [GitHub-6113](https://github.com/magento/magento2/issues/6113)




### URL rewrites

<!--- MAGETWO-85026-->* Magento now sets the value of `Store_Code` from the current store when this information is included in a URL. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [12545](https://github.com/magento/magento2/pull/12545)*. [GitHub-12450](https://github.com/magento/magento2/issues/12450)

<!--- MAGETWO-82310-->* Magento now loads `urlrewrite` router before the Magento base router. Previously, the Magento custom URL rewrite functionality did not work when you added an additional redirection (for example, a custom redirection from `/customer/account/create` to another page). *Fix submitted by [Marc Rodriguez](https://github.com/mrodespin) in pull request [11471](https://github.com/magento/magento2/pull/11471)*. [GitHub-10231](https://github.com/magento/magento2/issues/10231)

<!--- MAGETWO-88091-->* Switching store views now works as expected. Previously, under some conditions, users were redirected to a 404 page.[GitHub-5416](https://github.com/magento/magento2/issues/5416)

<!--- MAGETWO-88091-->* You can now reset a form by clicking **Reset** in **Marketing > SEO & Search > URL Rewrites**. [GitHub-10459](https://github.com/magento/magento2/issues/10459)

<!-- MAGETWO-91808 -->* Categories of the Main menu in the different store view are now updated when Varnish is enabled. 

<!--- MAGETWO-90798 -->* Magento no longer throws a 404 error when a customer navigates from the Catalog page of the default store to a custom Catalog page on a different store. 

<!--- MAGETWO-71407 -->* The **Reset** button no longer causes a JavaScript error on the URL rewrite creation page. [GitHub-10462](https://github.com/magento/magento2/issues/10462)

<!--- ENGCOM-1210 -->* The Magento URL rewrite functionality now supports the use of special characters in category names. Previously, the category tree did not load if a category name contained a special character. [GitHub-13296](https://github.com/magento/magento2/issues/13296)



### Visual Merchandiser

<!--- MAGETWO-87846 -->* Visual Merchandiser now includes website scope when displaying the correct prices and availability of configurable products.

<!--- MAGETWO-72861 -->* We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).




### Web API

<!--- MAGETWO-82315 -->* When you use REST to update an existing product, Magento assigns the update only to the websites that they were assigned to before the update. Previously, updating a product using the REST API (`PUT /rest/all/V1/products/example_sku`) assigned the product update to all websites automatically. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11443](https://github.com/magento/magento2/pull/11443)*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- MAGETWO-90147 -->* When you create a credit memo comment with `POST /V1/creditmemo/:id/comments`, Magento now sends  credit memo update emails as expected. Previously,  Magento did not send this email, and no other transaction emails were sent to the customer.

<!--- MAGETWO-84319 -->* Magento no longer creates duplicate shipments for orders created via API. Previously, Magento created duplicate shipments when a merchant created a shipment via the API under certain conditions (mainly with bundled products).

<!--- MAGETWO-64316 -->*  When you create a product with `POST V1/products` whose name matches an existing product, Magento changes the URL key of the new product to a unique value. This matches the behavior that occurs when you create a product in Admin. [GitHub-8188](https://github.com/magento/magento2/issues/8188)


<!--- MAGETWO-91540 -->*  Product searches using `GET V1/products` return `extension_attributes` for configurable products as expected.

<!--- MAGETWO-91568 -->*  You can now include custom attributes when filtering the responses of REST calls.

<!--- MAGETWO-94207 -->*  Magento now returns a 404 error and includes a descriptive error message when a  REST search is performed on a non-existent cart.

<!--- MAGETWO-81910 -->*   Magento now includes the filter groups and the sort order of the `$searchCriteria` parameter in the `searchCriteria` Object that is provided for the EAV set repository. [GitHub-11022](https://github.com/magento/magento2/issues/11022)


<!--- MAGETWO-82315 -->* Updating a product with the REST API (`PUT /rest/all/V1/products/example_sku`) no longer assigns the product to all websites automatically. (Automatic assignment to all websites now occurs only when you create the product in All Store Views scope.) [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- ENGCOM-2066 -->* A generated admin API token no longer expires immediately. Previously, when you created a token for an Admin user and have set   **Admin Token Lifetime (hours))**  to empty, Magento denied access  because the token immediately expired. [GitHub-15564](https://github.com/magento/magento2/issues/15564)



<!-- MAGETWO-87057 -->* Magento now checks for the uniqueness of attribute option values for attributes created via REST. [GitHub-8846](https://github.com/magento/magento2/issues/8846) 


<!--- MAGETWO-87152 -->*  `salesRefundInvoiceV1` now saves the invoice ID as expected for a credit memo. [GitHub-11669](https://github.com/magento/magento2/issues/11669) 



### Wishlist

<!--- MAGETWO-85627 -->* Magento now displays an error message if you try to add products to a wishlist without first logging in. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request [12681](https://github.com/magento/magento2/pull/12681)*. 

<!--- MAGETWO-86101 -->* Magento now stores product ID and SKU to locally stored customer data for wishlists. *Fix submitted by [James Halsall](https://github.com/jameshalsall) in pull request [12896](https://github.com/magento/magento2/pull/12896)*. 

<!--- MAGETWO-90297 -->* `SearchCriteriaBuilder` now has a check to determine if sort order should be applied. Previously, `SearchCriteriaBuilder` built wrong criteria (`ORDER BY part`). *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request [1003](https://github.com/magento/magento2ce/pull/1003)*. [GitHub-5738](https://github.com/magento/magento2/issues/5738)

<!--- MAGETWO-91615 -->*  Registered users can now create new wishlists as expected when multiple wishlists are enabled. Previously, Magento displayed an error.

<!--- MAGETWO-91433 -->*  Magento no longer changes the grid view to list view on the product list page when a customer adds a product from the wishlist section to the cart, and now displays the appropriate success message. 



## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:


* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.


### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html)


 For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.3 Beta  using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.





<!--- DUPLICATE MAGETWO-42158 MAGETWO-85224 MAGETWO-84105 MAGETWO-83192 -->

<!--- CANNOT REPRODUCE MAGETWO-83798 MAGETWO-83772  MAGETWO-84068 MAGETWO-84067 MAGETWO-84065 MAGETWO-84044 MAGETWO-84027 MAGETWO-83991 MAGETWO-83985 MAGETWO-83978 MAGETWO-83971 MAGETWO-83969 MAGETWO-83962 MAGETWO-83915 MAGETWO-83909 MAGETWO-83879 MAGETWO-83436 MAGETWO-83536 MAGETWO-83615 MAGETWO-83295 MAGETWO-83297 MAGETWO-83348 MAGETWO-83357 MAGETWO-83387 MAGETWO-83433 MAGETWO-83520 MAGETWO-83557 MAGETWO-83758 MAGETWO-83750 MAGETWO-83748 MAGETWO-83721 MAGETWO-83719 MAGETWO-83715 MAGETWO-83468 MAGETWO-83713 MAGETWO-83712 MAGETWO-83666 MAGETWO-83665 MAGETWO-83623 MAGETWO-83620 MAGETWO-83618 MAGETWO-82510 MAGETWO-83223 MAGETWO-83220 MAGETWO-83213 MAGETWO-83210 MAGETWO-83179 MAGETWO-83098 MAGETWO-83097 MAGETWO-83080 MAGETWO-83015 MAGETWO-82955 MAGETWO-82964 MAGETWO-82575 MAGETWO-82571 MAGETWO-82534 MAGETWO-82909 MAGETWO-82870 MAGETWO-82834 MAGETWO-82822 MAGETWO-82783 MAGETWO-82777 MAGETWO-82775 MAGETWO-82469 MAGETWO-82726 MAGETWO-82719 MAGETWO-82718 MAGETWO-82714 MAGETWO-82703 MAGETWO-82700 MAGETWO-82699 MAGETWO-82697 MAGETWO-82693 MAGETWO-82688 MAGETWO-82644 MAGETWO-82626 MAGETWO-82606 MAGETWO-82604 MAGETWO-82602 MAGETWO-82600 MAGETWO-82594 MAGETWO-82585 MAGETWO-82583 MAGETWO-82514 MAGETWO-82490 MAGETWO-82488 MAGETWO-82482 MAGETWO-82472 MAGETWO-82458 MAGETWO-82454 MAGETWO-82424 MAGETWO-82419 MAGETWO-82410 MAGETWO-82408 MAGETWO-82404 MAGETWO-82401 MAGETWO-82390 MAGETWO-82378 MAGETWO-82376 MAGETWO-82372 MAGETWO-82368 MAGETWO-82362 MAGETWO-82358 MAGETWO-82356 MAGETWO-82350 MAGETWO-82345 MAGETWO-82293 MAGETWO-92135 MAGETWO-92135 MAGETWO-92129 MAGETWO-90304 84761 84736--> 

<!--- INTERNAL ONLY MAGETWO-85926 MAGETWO-82817 MAGETWO-82811 MAGETWO-82225 MAGETWO-81033 MAGETWO-81528 MAGETWO-81532 MAGETWO-81803 MAGETWO-84172 MAGETWO-84131 MAGETWO-85606 MAGETWO-85572 MAGETWO-85517 MAGETWO-85189 MAGETWO-85070 MAGETWO-84197 MAGETWO-84168 MAGETWO-84152 MAGETWO-84131 MAGETWO-84110 MAGETWO-84123 MAGETWO-84068 MAGETWO-84067 MAGETWO-84065 MAGETWO-84044 MAGETWO-84027 MAGETWO-83991 MAGETWO-83985 MAGETWO-83978 MAGETWO-83972 MAGETWO-83971 MAGETWO-83969 MAGETWO-83962 MAGETWO-83915 MAGETWO-83909 MAGETWO-83830 MAGETWO-84079 MAGETWO-86066 MAGETWO-83890 MAGETWO-83821 MAGETWO-83807 MAGETWO-83776 MAGETWO-83699 MAGETWO-81799 MAGETWO-85068 MAGETWO-83187 MAGETWO-83039 MAGETWO-85521 MAGETWO-85515 MAGETWO-85513 MAGETWO-85262 MAGETWO-85259 MAGETWO-85243 MAGETWO-85240 MAGETWO-85237 MAGETWO-85203 MAGETWO-85191 MAGETWO-85147 MAGETWO-85131 MAGETWO-85010 MAGETWO-84906 MAGETWO-84905 MAGETWO-84904 MAGETWO-85057 MAGETWO-83673 MAGETWO-85737 MAGETWO-84976 MAGETWO-85563 MAGETWO-85001 MAGETWO-83040 MAGETWO-83260 MAGETWO-88191 MAGETWO-82951 87615 87562 87531 87524 87523 87442 87439 87351 87313 87176 87155 87154 87153 87152 87151 87066 87064 87062 87058 87057 87056 87615--> 


<!--- WON'T FIX MAGETWO-85927 MAGETWO-85616 MAGETWO-51484 MAGETWO-85605 MAGETWO-85244 MAGETWO-84928 MAGETWO-85132 MAGETWO-83890 MAGETWO-83821 MAGETWO-83807 MAGETWO-82779 MAGETWO-82509 MAGETWO-83188 MAGETWO-82566 MAGETWO-88058 MAGETWO-84465 -->

<!--- INVALID/NOT A BUG MAGETWO-83422 MAGETWO-83299 MAGETWO-90107 MAGETWO-90034--> 


