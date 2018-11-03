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


* **MultiSource Inventory (MSI)** lets merchants manage physical inventory across locations in Magento. Merchants can represent multiple locations (sources) for physical inventory in Magento. Sources can be grouped into stocks to create inventory pools that can be defined for one or more websites. Merchants can manipulate inventory based on sources. Magento also provides an API for source operations that helps merchants customize inventory actions or third-party order management systems to perform the same actions in an automated way. 

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

We've fixed hundreds of issues for Magento 2.3.0. Here's an incomplete list of these fixes. Subsequent versions of these release notes will include a more comprehensive list. 

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

<!---MAGETWO-94844 -->* Magento can be installed without creating an administrator.To simplify deployment process on Cloud, we need to make admin user creation optional, so initial deployment happens without admin created.

Background:

Currently initial installation needs admin user to be created
If not using setup wizard, on Cloud this user has same username & random password for every customer
^ is potential security issues and would be better if we can run deployment without creating random admin users


<!---MAGETWO-93699 -->* Add possibility to disable running cron jobs

There is a new configuration was added to Magento cron/enabled with default value is 1. 
This configuration may be stored in configuration file (app/etc/env.php). 
When cron is disabled - this configuration has value 0 - CLI command cron:run won't be executed, customer will receive message that cron is disabled.



<!---MAGETWO-91863 -->* Disable statistic collecting for Reports module
A new configuration setting is introduced in System Configuration: General -> Reports -> General Options, which allows to disable Magento Reports completely or partially. Magento recommends to disable Reports functionality for performance reasons if merchants' business functions do not require this capability. 

Note that some features like Magento Commerce dynamic customer segments (specifically ones based on viewed products) rely on Reports data collection to function properly. 

Also was fixed issues with inserting data into "customer_visitor" table on each request. Now data persisted only for POST requests

Add ability to disable statistic collecting for Reports module by default.

Add flag to system configuration (System Configuration -> General -> Reports) that will disable statistic collecting in general.






<!---MAGETWO-88281 -->* [Forwardport] Add option to add IP address to existing list + add test #13783

 When adding a new IP-address, you have to copy the existing ones. This adds a --add flag to just append the addresses, instead of replacing

 *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request [13783](https://github.com/magento/magento2/pull/13783)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)




<!---MAGETWO-88045 -->* Add MagentoStyle as Console Input/output helper object to allow easier access to io helpers in symfony/console 

*Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13741](https://github.com/magento/magento2/pull/13741)*. 


<!---MAGETWO-88258 -->* Add RewriteBase directive template in .htaccess file into pub/static folder 

 This PR adds RewriteBase directive into .htaccess file into pub/static folder, in case the need is to install Magento code under a directory inside the web root. Setting this directive into .htaccess file in Magento root and without setting it into .htaccess under pub/static folder cause a file missing (js and css) by Apache Web Server


*Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13788](https://github.com/magento/magento2/pull/13788)*. 


<!---MAGETWO-88017 -->* Show maintenance IP-address without commas


 When looking at existing IP-address for the maintenance status, they are shown with commas. But when setting them, commas are not accepted. This is a pretty trivial change, but makes it easier to copy, modify and paste the list of IP-addresses.

*Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13727](https://github.com/magento/magento2/pull/13727)*. 


<!---MAGETWO-86717 -->* Data Patches conversion

InstallData and UpgradeData scripts are converted into data patches.

As a Magento developer, I want to convert all existing install/upgrade data scripts to declarative data patches so that sequential module versioning is eliminated.

In scope:
Convert existing install/upgrade scripts to data patches


<!---MAGETWO-86567 -->* Format generated config files using the short array syntax[forwardport]. #1193



 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [1193](https://github.com/magento/magento2/pull/1193)*. [GitHub-758](https://github.com/magento/magento2/issues/758)


auto-generated config doesn't match the required standards to be checked in. The change made in this PR is to modify `PhpFormatter` to recursively return the array representation using short array syntax `[]` instead of long `array()`. If the given variable is not an array, it uses the standard `var_export` behavior.




<!---MAGETWO-86276 -->* Web Setup Wizard Icon Inconsistency #12960


 The Icons for "Extension Manager" and "Module Manager" are inconsistent in the main content area and left-hand menu of the Web Setup Wizard.


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12960](https://github.com/magento/magento2/pull/12960)*. [GitHub-11236](https://github.com/magento/magento2/issues/11236)



<!---MAGETWO-85273 -->* Update CrontabManager.php


 *Fix submitted by [Michele Fantetti](https://github.com/WaPoNe) in pull request [12609](https://github.com/magento/magento2/pull/12609)*. 


 If crontab is already populated, 'php bin/magento cron:install' adds '#~ MAGENTO START' and the rest of code directly to the last row of crontab without any spaces.





<!--- MAGETWO-87025 -->*  You can now deploy static content on demand while in production mode.

<!--- MAGETWO-84646 -->* Magento now restarts cron jobs as needed after a cron job was terminated during execution.


<!--- MAGETWO-88212 -->* The `CrontabManager.php` file has been updated as follows: If `crontab` has already been populated, the `bin/magento cron:install` command adds `#~ MAGENTO START` and the rest of code directly to the last row of crontab without any spaces. *Fix submitted by [Michele Fantetti](https://github.com/WaPoNe) in pull request*.

<!--- MAGETWO-71059 -->* copy from 221 80182


<!--- MAGETWO-71896 -->* copy from 222 80209

<!--- MAGETWO-82461 -->* copy from 222 

<!--- ENGCOM-1187 -->* 225 1148

<!--- ENGCOM-1108 -->* 225 1083

<!--- ENGCOM-1360 -->* 226 84651

<!--- MAGETWO-86569 -->* 224 86337

<!--- MAGETWO-87152 -->*  [GitHub-9633](https://github.com/magento/magento2/issues/9633)


 Web Setup Wizard 500 error when session storage is configured to use memcache

<!--- MAGETWO-87562 -->*  [GitHub-9036](https://github.com/magento/magento2/issues/9036)

Database backup doesn't include triggers

<!--- MAGETWO-87562 -->*  [GitHub-9918](https://github.com/magento/magento2/issues/9918)

Magento 2 automatically disables maintenance mode after certain action


<!--- MAGETWO-87562 -->*  [GitHub-12064](https://github.com/magento/magento2/issues/12064)


Database Rollback not working with magento 2.1.9?

<!---MAGETWO-87524 -->*  [GitHub-9277](https://github.com/magento/magento2/issues/9277)

Create new CLI command: enable/disable Magento Profiler 


#### Web server configuration

<!---MAGETWO-87916 -->* Show redirect_to_base config in store scope

 *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [13659](https://github.com/magento/magento2/pull/13659)*. 

 Add web/unsecure/base_url config to website and store scope



<!---MAGETWO-87748 -->* 

 *Fix submitted by [Daniel](https://github.com/nieltg) in pull request [13361](https://github.com/magento/magento2/pull/13361)*. 

 Unresolved static assets are generated by passing some part of URL as `resource=` parameter to `pub/static.php`. But PHP in-development server's router, `router.php`, wrongly passes the parameter.

Instead of `frontend/Magento/luma/en_US/images/logo.svg`, PHP in-development server's router uses `static/frontend/Magento/luma/en_US/images/logo.svg` for `resource=` parameter.

Because of that, resources can't be resolved when Magento runs on PHP in-development server.

Description
<!--- Provide a description of the changes proposed in the pull request -->
This pull request removes `static/` string from the `resource=` parameter, so `static.php` can generate the specified resource correctly.

This pull request also changes command to start PHP in-development server in the documentation. The previous command in the documentation is:
```
$ php -S 127.0.0.1:8082 -t ./pub/ ./phpserver/router.php
```
which results an error because PHP is unable to find `router.php`.
```
PHP 7.1.13 Development Server started at Thu Jan 25 19:50:01 2018
Listening on http://127.0.0.1:8082
Document root is /mnt/d/Projects/Magento/magento2/pub
Press Ctrl-C to quit.
[Thu Jan 25 19:50:07 2018] PHP Warning: Unknown: failed to open stream: No such file or directory in Unknown on line 0
[Thu Jan 25 19:50:07 2018] PHP Fatal error: Unknown: Failed opening required '/mnt/d/Projects/Magento/magento2/pub/./phpserver/router.php' (include_path='.:') in Unknown on line 0
```

<!---MAGETWO-94349 -->* copy from 227 94764

<!---MAGETWO-70764 -->* copy from 221 75458

<!---MAGETWO-71061 -->* copy from 221 80186

<!--- ENGCOM-2610 -->*

<!--- ENGCOM-2125 -->* 226 1924

<!--- ENGCOM-748 -->* 

<!--- ENGCOM-838 -->* 

<!--- ENGCOM-850 -->* 2115 2510 

<!--- ENGCOM-805 -->* 224 685

<!--- ENGCOM-850 -->* 2115 2510

<!--- ENGCOM-1419 -->* 2115 1528

<!--- MAGETWO-87155-->*  [GitHub-12877](https://github.com/magento/magento2/issues/12877) 


[2.2.1] Magento Database Backup Command Fails 

<!---MAGETWO-87449 -->*  [GitHub-9981](https://github.com/magento/magento2/issues/9981)   M2 suggests running setup:upgrade if version number of module is higher than expected

<!---MAGETWO-87154 -->*   [GitHub-12894](https://github.com/magento/magento2/issues/12894)

Can't remove State is required for all countries 


### AdminGS

<!-- MAGETWO-91337 -->* Admin global search preview now works as expected. Previously, this feature worked inconsistently, and search results  differed depending on which area was being searched  (for example, Products, Categories, or Customers). 

<!--- MAGETWO-91565 -->*  Restricted Admin users can now successfully create and save product attributes.

<!--- MAGETWO-91616 -->*  Restricted Admins can now create and edit CMS blocks as expected. Previously, Magento displayed this error message when a administrator with restricted privileges tries to create a new CMS block: `Warning: array_intersect(): Argument #1 is not an array in /var/www/html/magento2ee/app/code/Magento/AdminGws/Model/Models.php on line 1075`.

<!--- ENGCOM-1143 -->* 


### Analytics

<!---MAGETWO-87520-->* Add missing PHPDocs for methods.

 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13337](https://github.com/magento/magento2/pull/13337)*. 



<!--- MAGETWO-85059 -->* Users are now subscribed by default to the Advanced Reporting service.

### Backend

<!---ENGCOM-1831 -->* 2115 1859

<!---ENGCOM-2158 -->* 2115 2410

<!---ENGCOM-2339 -->* 226 2263

<!---ENGCOM-2838 -->* 

<!---ENGCOM-2919 -->* 

<!--- ENGCOM-870 -->* 225 930


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

<!---MAGETWO-87524 -->*  [GitHub-6916](https://github.com/magento/magento2/issues/6916)

Update Bundle Product without changes in bundle items

<!---MAGETWO-86659 -->* Remove not used count() from templates + Fix issue with continue in templates. 

 *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [13138](https://github.com/magento/magento2/pull/13138)*. 


<!--- MAGETWO-90797 -->* You can now successfully delete an option from a bundle product. 


<!---ENGCOM-1389 -->* 

<!---ENGCOM-1830 -->* 

 <!---MAGETWO-87058 -->*     [GitHub-12079](https://github.com/magento/magento2/issues/12079)

 Products in cart report error when we have grouped or bundle product

### CAPTCHA

<!-- MAGETWO-93718 -->* Customers can now successfully log in when guest checkout is disabled and CAPTCHA is enabled. Previously, Magento threw the `Provided form does not exist` error when a customer tried to log in under these conditions. 

<!-- MAGETWO-92127 -->* CAPTCHA validation now works when the **Website Restrictions** setting is enabled. 


### Cart and checkout

<!--- MAGETWO-87524 -->*  [GitHub-12705](https://github.com/magento/magento2/issues/12705)

Integrity constraint violation error after reordering product with custom options

<!--- MAGETWO-87176 -->* [GitHub-7241](https://github.com/magento/magento2/issues/7241)


 No option to start with blank option for prefix and suffix in checkout. 

<!--- MAGETWO-87152 -->*  [GitHub-12058](https://github.com/magento/magento2/issues/12058)


Can't save emoji in custom product options

<!--- MAGETWO-90132 -->* Magento no longer caches warning messages as often as a customer clicks the **Update Shopping Cart** button while the shopping cart page loads. Previously, Magento cached a warning message each time a customer clicked this button while the page loaded in Firefox or Chrome, and this action resulted in multiple warning messages appearing on the top of the shopping cart page.


<!--- MAGETWO-87126 -->*  Magento now displays the expected state in the Multishipping New Address form when a customer enters information on the Ship to Multiple Addresses page. *Fix submitted by [enriquei4](https://github.com/enriquei4) in pull request [13367](https://github.com/magento/magento2/pull/13367)*. [GitHub-8069](https://github.com/magento/magento2/issues/8069)


<!---MAGETWO-83562 -->* `update button.phtml` has been simplified to optimize translation. *Fix submitted by [Karla Saaremäe](https://github.com/ChuckyK) in pull request 12155*. 

<!--- MAGETWO-83196-->* You can now enter zip codes that contain no spaces for locations in the Netherlands. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [11961](https://github.com/magento/magento2/pull/11961)*. [GitHub-11898](https://github.com/magento/magento2/issues/11898)

<!--- MAGETWO-81823-->* The text that appears above the billing address field on the checkout page has been edited to remove redundancy. *Fix submitted by [Vova Yatsyuk](https://github.com/vovayatsyuk) in pull request [11399](https://github.com/magento/magento2/pull/11399)* 

<!--- MAGETWO-81175-->* The One Touch Ordering feature allows users to place orders without going through full checkout. *Fix submitted by [Daniel Korzeniowski](https://github.com/danielkorzeniowski)*. 

<!--- MAGETWO-71761-->* You can now delete the last product in your shopping cart even when the **Minimum Order Amount** setting (**Admin** > **Sales**) is enabled. Previously, if you tried to delete the last item in your cart under these circumstances, Magento would throw an exception. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10601](https://github.com/magento/magento2/pull/10601)* [GitHub-6151](https://github.com/magento/magento2/issues/6151)

<!--- MAGETWO-86894-->* CheckoutAgreements getList refactoring

Introduced new listing interface for Checkout Agreements with ability to set search criteria.

The discount label was not being shown in the shopping cart totals description


 *Fix submitted by [Stanislav Idolov](https://github.com/sidolov) in pull request [13221](https://github.com/magento/magento2/pull/13221)*. 



<!--- MAGETWO-86787-->* Fix missing discount label in checkout

 Cart Price Rule Label is not working

 Steps to reproduce
While creating the cart price rule, I have given the Label value as "Buy 2 and Get 1 Free".
In front end, Checkout page, It will show only the label as "Discount" not the given name has been reflected.
Expected result
I need the exact label value that was given in the Admin end while creating the cart price rule
Actual result
Label value has been shown as "Discount".

Discount Rule does not show Default Rule Label

 *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [13223](https://github.com/magento/magento2/pull/13223)*. 



<!--- MAGETWO-85890-->* 

Update checkout controller json usage


 The controller app/code/Magento/Checkout/Controller/Account/Create.php uses the object manager directly when building it's json response. I have replaced the usage of object manager with the usage of $this->resultFactory->create(ResultFactory::TYPE_JSON);


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

<!--- ENGCOM-1347 -->* 

<!--- ENGCOM-1474 -->*  226 1400

<!--- ENGCOM-1716 -->* 

<!--- ENGCOM-1039 -->* 

<!--- ENGCOM-978 -->* 

<!--- ENGCOM-2959 -->* 227 2789

<!--- ENGCOM-2833 -->* 227 2743

<!--- ENGCOM-2017 -->* 

<!--- ENGCOM-2181 -->* 226 2126

<!--- ENGCOM-861 -->* 225 1277

<!--- ENGCOM-2027 -->*


<!-- MAGETWO-87057 -->*   [GitHub-10583](https://github.com/magento/magento2/issues/10583)


Checkout place order exception when using a new address 

<!-- MAGETWO-87152 -->*   

<!-- MAGETWO-87442 -->*  [GitHub-2991](https://github.com/magento/magento2/issues/2991)

Products added to cart with REST API give total prices equal to zero

<!-- MAGETWO-87449 -->*   [GitHub-10834](https://github.com/magento/magento2/issues/10834)

signing in after selecting checkout button, will not end up to checkout page


#### Cart Price rules

<!--- MAGETWO-94407 -->*  The cart price rule now uses specified conditions correctly when applying discounts on configurable products. 

<!-- MAGETWO-87064 -->* [GitHub-9763](https://github.com/magento/magento2/issues/9763)

When go checkout,Cart Price Rules 25%test coupon code can go wrong

<!-- MAGETWO-87151 -->* [GitHub-10477](https://github.com/magento/magento2/issues/10477)

Cart price rule has failed if use dropdown attribute


### Catalog

<!--- MAGETWO-87153 -->*  [GitHub-5188](https://github.com/magento/magento2/issues/5188)
Error generating URN-catalog when blank one exists

<!--- MAGETWO-87313 -->*  [GitHub-11329](https://github.com/magento/magento2/issues/11329) 

Unable to proceed massaction "Update attributes" with required multiple select attribute

<!--- MAGETWO-87562 -->*   [GitHub-12127](https://github.com/magento/magento2/issues/12127) 

Apostrophe in attribute option value in admin is not handled properly

<!-- MAGETWO-87151 -->*  [GitHub-11532](https://github.com/magento/magento2/issues/11532) 

Duplicate Simple Product Throws Error: Undefined offset: 0 in SaveHandler.php on line 122 

<!--- ENGCOM-1226 -->*  225 1179 

<!--- ENGCOM-1103 -->*  2115 1685 

<!--- MAGETWO-71832 -->* 224 84411


<!--- ENGCOM-1174-->*  225 

<!--- ENGCOM-1188-->*  


<!--- ENGCOM-2345 -->*  226 2313 

<!--- ENGCOM-1126-->*   

<!--- ENGCOM-1295-->*  225 1061 


<!--- ENGCOM-963-->*   225 797


<!--- ENGCOM-1653-->*   



<!--- MAGETWO-93949-->*  copy from 227 92036


<!--- MAGETWO-75328-->* copy from 221 80511

<!--- MAGETWO-75329-->*


<!--- MAGETWO-80770-->*

<!--- MAGETWO-81966-->*

<!--- ENGCOM-2874-->* 224 2378

<!--- ENGCOM-2869-->* 226 1622

<!--- ENGCOM-2852-->* 227 2650

<!--- ENGCOM-2793-->* 227 1605

<!--- ENGCOM-2792-->* 227 2758

<!--- ENGCOM-2751-->* 227 2672

<!--- ENGCOM-2302-->* 225 1247

<!--- ENGCOM-2373-->* 226 2021

<!--- ENGCOM-2185-->* 227 2675


<!--- ENGCOM-2116-->* 226 2042


<!--- ENGCOM-2612-->* 226 2211


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



<!---MAGETWO-93306 -->* It's impossible to specify negative value in "Quantity" field for product
STEPS
Go to storefront
Add Simple Product to shopping cart with Qty = 3
Place Order
Login to admin
Open Simple Product for edit
Pay attention to Quantity field (with value -2, and js validation message - Please enter a valid number in this field.)
Try to Save product





<!-- MAGETWO-93188 -->* You can now create a product date attribute that contains a day value than exceeds 12 (in the format dd/mm/yyyy). Previously, when you created a product attribute with a default date specifying a day greater than 12, Magento did not save the attribute, but instead displayed this error, `Invalid default date`. 

<!--- MAGETWO-90293 -->* Sort by Price now works as expected on the catalog search page. *Fix submitted by [Roman K.](https://github.com/RomaKis) in pull request [929](https://github.com/magento/magento2/pull/929)*.  [GitHub-12468](https://github.com/magento/magento2/issues/12468)

<!--- MAGETWO-87564 -->* Magento now correctly sets a `product_links` position attribute even when the attribute value is not set in a GET request. Previously, only the first two of each link type was shown in the backend or in a GET request response, even though Magento correctly added the product links to the database. *Fix submitted by [Mohammad Haj-Salem](https://github.com/mohammedsalem) in pull request [12650](https://github.com/magento/magento2/pull/12650)*.

<!-- MAGETWO-60823 -->* You can now unset a category image on the store-view level when the image is defined on all store views.

<!-- MAGETWO-94060 -->* copy from 227 64471


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


<!--- ENGCOM-956 -->* 2115 2511

<!--- ENGCOM-1030 -->* 224 632


### Catalog Rule

<!---MAGETWO-90784 -->* Catalog Rule is not applied	
Fix sorting by price products with applied catalog rule






### Cleanup and simple code refactoring

<!--- MAGETWO-87442 -->*    [GitHub-5129](https://github.com/magento/magento2/issues/5129) 

Product details page zoom issue when dropdown menu have overlap area with it.

<!--- MAGETWO-87523 -->*   [GitHub-11691](https://github.com/magento/magento2/issues/11691) 

Wrong return type for getAttributeText($attributeCode) 

<!--- MAGETWO-87176 -->*  [GitHub-12632](https://github.com/magento/magento2/issues/12632)   

Magento Connect no longer exist 

<!--- MAGETWO-87176 -->*  [GitHub-12506](https://github.com/magento/magento2/issues/12506)  

Fixup typo getDispretionPath -> getDispersionPath


<!---MAGETWO-88019 -->* Refactoring: remove unuseful temporary variable since there is no usage of $data in this method


app/code/Magento/Catalog/Controller/Adminhtml/Category/Save.php

 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13733](https://github.com/magento/magento2/pull/13733)*. 



<!---MAGETWO-88255 -->* Typo (address not addres)


  app/code/Magento/Customer/etc/events.xml

 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13794](https://github.com/magento/magento2/pull/13794)*. 


<!---MAGETWO-87896 -->* Update code formatting in Swagger Block

 *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [13616](https://github.com/magento/magento2/pull/13616)*. 


app/code/Magento/Swagger/view/frontend/templates/swagger-ui/index.phtml


<!---MAGETWO-87895 -->* Switch updatecart qty input validators to dynamic instead of hardcoding


2  app/code/Magento/Checkout/view/frontend/templates/cart/item/configure/updatecart.phtml

 *Fix submitted by [p-bystritsky](https://github.com/p-bystritsky) in pull request [13615](https://github.com/magento/magento2/pull/13615)*. 





<!---MAGETWO-87162 -->* 
Typo cleanup throughtout the code base


 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13300](https://github.com/magento/magento2/pull/13300)*. 



<!---MAGETWO-87254 -->* Remove redundant code for clarity


 $curl->read() will always return a string even if curl_exec fails because there is preg_replace at the end. Because the $data can never be identical to false so I think this redundant piece of code should be removed.

 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13303](https://github.com/magento/magento2/pull/13303)*. 


<!---MAGETWO-87035 -->* Fix misspellings in method names and deprecate old ones


 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13304](https://github.com/magento/magento2/pull/13304)*. 




<!---MAGETWO-87034 -->* Fix typo in database column comment


app/code/Magento/Catalog/Setup/InstallSchema.php

 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13318](https://github.com/magento/magento2/pull/13318)*. 



<!---MAGETWO-86984 -->* 

Typo cleanup throughout the code base

 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13283](https://github.com/magento/magento2/pull/13283)*. 


<!---MAGETWO-86899 -->* Fix a misspelled method name in Bundle


 Found a misspelled method name in \Magento\BundleImportExport\Model\Import\Product\Type\Bundle

 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13187](https://github.com/magento/magento2/pull/13187)*. 


<!---MAGETWO-86798 -->* 


 Found a misspelled parameter name in \Magento\Weee\Test\Unit\Model\TaxTest::testGetWeeeAmountExclTax

 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13189](https://github.com/magento/magento2/pull/13189)*. 




<!---MAGETWO-86585 -->* There is a typo in a event name, changed "catelog" to "catalog". Checked complete Magento core code and the wrongly spelled "catelog" string is not found in other places, so this is safe to merge.


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [13097](https://github.com/magento/magento2/pull/13097)*. 


<!---MAGETWO-86402 -->* Changed variable with typo consturctor to constructor

Changed constructor typo in Javascript class

app/code/Magento/Ui/view/base/web/js/lib/core/class.js


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12976](https://github.com/magento/magento2/pull/12976)*. 

<!---ENGCOM-1254 -->* 

<!---ENGCOM-1396 -->* 

<!---ENGCOM-1155 -->* 227 1440




<!---MAGETWO-86330 -->* 

Fixed Coding Standards in the TypeLocatorTest file. This is the last file with a @codingstandardsignorefile code in it.
Removed @codingStandardsIgnoreFile from file header
Changed line length


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12977](https://github.com/magento/magento2/pull/12977)*. 



<!---MAGETWO-86275 -->* Changed typo where a string to be translated used double space "configure your" instead of "configure your".
Checked all files and changed the string everywhere to a single space.


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12961](https://github.com/magento/magento2/pull/12961)*. 




<!---MAGETWO-86036 -->* Remove unused if statement in order invoice save


 $shippingResponse is undefined in scope.

 *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [12888](https://github.com/magento/magento2/pull/12888)*. 


<!---ENGCOM-1814 -->* 2.1.1.5 2080

<!---ENGCOM-1824 -->* 2.1.1.5 1796


<!---ENGCOM-1823 -->* 2.1.1.5 2312


<!---ENGCOM-1900 -->* 2.1.1.5 1930


<!---ENGCOM-2082 -->* 2.1.1.5 1930

<!---ENGCOM-1893 -->* 2.1.1.5 2084

<!---ENGCOM-1986 -->* 2.1.1.5 2659

<!---ENGCOM-2005 -->* 226 1958

<!---ENGCOM-2147 -->* 2.1.15 2167

<!---ENGCOM-2462 -->* 226 1988

<!---ENGCOM-2593 -->* 226 1611

<!---ENGCOM-2692 -->* 227 2628

<!---ENGCOM-2731 -->* 227 2737


<!---ENGCOM-2786 -->* 227 2872

<!---ENGCOM-2816 -->* 

<!---ENGCOM-2859 -->* 

<!---ENGCOM-2231 -->* 

<!---ENGCOM-1807 -->* 226 1640

<!---ENGCOM-1817 -->* 2115 2457

<!---ENGCOM-1772 -->* 2115 1777

<!---ENGCOM-1771 -->* 2115 1777

<!--- ENGCOM-2065 -->* 224 86431

### Cookie

<!-- MAGETWO-93790 -->* Customer data is now fully loaded after restarting the browser during an unexpired user session. Previously,  the `section_data_ids` section of the session cookie was not properly completed. [GitHub-14912](https://github.com/magento/magento2/issues/14912)

<!--- ENGCOM-1089 -->* 225 1019


### CMS content

<!---MAGETWO-70412 -->* Magento native WYSIWYG toolbar is configured to show the same buttons by default. That can be changed in the configuration for each place where the plugin is used

<!-- MAGETWO-93705-->* Page layout issues that resulted from incorrect module sequence have been corrected. Previously, the  `Magento_theme` module was loaded too late, which resulted in unexpected display issues. 


<!-- MAGETWO-51484-->* Magento changed the way how product input type that require WYSIWYG is set up. Currently it's a separate option _Text Editor_ that Admin user can choose when configure custom product attribute

<!-- MAGETWO-91645 -->* Magento no longer unexpectedly locks up CMS pages when a merchant changes a scheduler end date. Previously, when a merchant updated the end date for a CMS page after the current scheduler ended, Magento generated an error, and the merchant could no longer access any CMS page from the Admin. 


Magento changed the way how product input type that require WYSIWYG is set up. Currently it's a separate option _Text Editor_ that Admin user can choose when configure custom product attribute

<!-- MAGETWO-80077 -->* 

<!-- MAGETWO-83101 -->* 

<!-- MAGETWO-75313 -->* 

<!--- ENGCOM-2413 -->* 226 1463

<!--- ENGCOM-2032 -->* 226 1617


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

<!--- ENGCOM-1069 -->* 

<!--- ENGCOM-1096 -->* 



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

<!--- MAGETWO-71432 -->*  copy 93 801 from 221

<!--- MAGETWO-70775 -->*  copy from 221 80177

<!--- MAGETWO-72539 -->* 

<!--- MAGETWO-82633 -->* 

<!--- MAGETWO-84237 -->* 

<!--- MAGETWO-84374 -->* 

<!--- MAGETWO-82529 -->* 

<!--- MAGETWO-84237 -->* 


<!--- MAGETWO-84374 -->* 

<!--- ENGCOM-980 -->* 2115 2664

<!--- ENGCOM-1268 -->* 225 1241

<!--- ENGCOM-1493 -->* 226 1356

<!--- ENGCOM-1146 -->* 225 1063

<!--- ENGCOM-2481 -->* 226 1680

<!--- ENGCOM-2067 -->* 226 1864

<!--- ENGCOM-2060 -->* 226 1987

<!--- ENGCOM-2782 -->* 2116 2805

<!--- ENGCOM-2682 -->* 


### Customer attributes


<!--- MAGETWO-94058 -->* You can now clear the **Date of Birth** field in the customer edit page when accessed from the Admin. 

<!--- MAGETWO-93754 -->*  Merchants can now create attributes  for customer addresses (**Stores** > **Attributes** > **Customer Address**) as expected. Previously, a merchant could create an attribute, but Magento did not save or display it. 

<!--- MAGETWO-91519 -->*  Magento now adds the address entered during checkout to a new account when a custom address attribute is required when creating a user account after checkout. 

<!--- MAGETWO-91509 -->*  User-defined customer attributes are now copied to the `magento_customercustomattributes_sales_flat_order` table after placing an order as expected. 

<!-- MAGETWO-91737 -->* Magento no longer validates customer address attribute value length when the minimum/maximum length fields are not displayed on the Admin. 



### Dashboard

<!--- MAGETWO-82734 -->* 


<!--- MAGETWO-88013 -->* Update StorageInterface.php


 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13729](https://github.com/magento/magento2/pull/13729)*. 



<!--- MAGETWO-48 -->* Added search by the configuration in the admin backend. It makes possible to find needed configuration setting using the search.

This feature will provide a possibility to find the config fields in Magento in a fast and easy way (e.g. live search).

<!--- MAGETWO-82561 -->* Moved Customer Groups Menu Item from Other settings to Customers

Currently the Customer Groups are located in the Magento Admin under Stores > Other Settings > Customer Groups. But this is strange because in Magento 1 it was under Customers > Customer Groups


<!--- ENGCOM-1770 -->* 2115 2051

### Developer

<!--- MAGETWO-81618 -->* 

### Directory

<!--- ENGCOM-993 -->* 224 696

<!--- ENGCOM-982 -->* 225 699

<!--- ENGCOM-2719 -->*


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

<!--- ENGCOM-1000 -->* 225 839

<!--- ENGCOM-2708 -->* 227 2642

### Email

<!--- MAGETWO-87523 -->*  [GitHub-12261](https://github.com/magento/magento2/issues/12261) 

Order confirmation email contains non functioning links 

<!--- MAGETWO-87351 -->*  [GitHub-11936](https://github.com/magento/magento2/issues/11936) 

required attribute set id filter on attribute group repository getList 

### Frameworks


<!--- ENGCOM-1274 -->* 225 1252

<!--- MAGETWO-87936 -->* 221 80514


<!--- MAGETWO-86283 -->*  The `htmlentities` function has been replaced with the `htmlspecialchars` function.


<!---MAGETWO-94991 -->* Magnifier works on any supported OS and browser when hovering on product images




Magnifier does not work with Windows Chrome/FF

The magnifier no longer works on Windows Chrome or Firefox.




<!---MAGETWO-94989 -->* Magnifier function does not disappear after mouse-off the image from the bottom

The magnifier module does not turn off when you mouse-off the image from below
If you mouse-off the image to the left or right, it correctly turns off
EXPECTED RESULTS:
The magnifier tool turns off when the cursor mouses off the image

ACTUAL RESULTS:
The magnifier does not turn off when you mouse-off below the image.






<!---MAGETWO-90358 -->* Auto-generate ExtensionAttributes object

There is no need to check if Extension Attributes object has been initialized before using it.

To improve developer experience, ExtensionInterface should be auto-generated.



<!---MAGETWO-88259 -->* Add ObserverInterface to the api


 Creating an observer that uses ObserverInterface should not trigger a patch level dependency on magento/framework.

 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13786](https://github.com/magento/magento2/pull/13786)*. 



<!---MAGETWO-87260 -->* Edited doc block of the walk method in a Collection



 *Fix submitted by [bytecreation](https://github.com/ByteCreation) in pull request [13374](https://github.com/magento/magento2/pull/13374)*. 

Edited doc block of the walk method in a Collection to reflect that this method will accept an array.

The following callback is created by passing an array that consists of an object and a string. The method of that object will be used in the callback, and each model in the collection will be passed to the method as the first parameter. While this results in a successful callback, the doc block of the walk method of a collection incorrectly reports that it will only accept a string, while the following example uses an array.

<!---MAGETWO-87116 -->* Small refactor of getFrontName


 getFrontName is an alias of getModuleName so we might as well return it's return value.
Both seems to be in use, but maybe one or the other should be deprecated?

 *Fix submitted by [Aki Ojalehto](https://github.com/akiojalehto) in pull request [13299](https://github.com/magento/magento2/pull/13299)*. 


<!---MAGETWO-87128 -->* Update the Emogrifier dependency to ^2.0.0

Emogrifer 2.0.0 does not introduce any backwards-compatibilty-breaking
API changes. This version adds new features, fixes bugs and improves
the resulting HTML. So the update should be reasonably safe.




 *Fix submitted by [Oliver Klee](https://github.com/oliverklee) in pull request [13351](https://github.com/magento/magento2/pull/13351)*. 


<!---MAGETWO-86728 -->* Ranged selects always miss the last range 


 I found this bug because some of my categories were empty. catalog_category_product_index did not contain all category product relations that are in catalog_category_product. Per category type (anchor, non-anchor) the highest category id's were missing from the index.


  *Fix submitted by [Anton Evers](https://github.com/AntonEvers) in pull request [12624](https://github.com/magento/magento2/pull/12624)*. 


<!---MAGETWO-86711 -->* Log file path when image open throws exception 


   *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [13144](https://github.com/magento/magento2/pull/13144)*. 


 Log the offending file when opening an image throws an exception. The current exception message does a good job describing the problem, but does not tell you which file caused the issue. The proposed change would alter the log entry from: 
`Unsupported image format.` 
to: 
`Unsupported image format.: /path/to/my/bad/file.png`

<!---MAGETWO-86653 -->* Fix undeclared dependency magento/zendframework1 by magento/framework



 *Fix submitted by [Ihor Sviziev](https://github.com/ihor-sviziev) in pull request [12992](https://github.com/magento/magento2/pull/12992)*. 
[GitHub-12967](https://github.com/magento/magento2/issues/12967)


 Add dependency magento/framework to zendframework1

Expected result
vendor/magento/framework/composer.json should declare a dependency containing \Zend_Db_Select
Actual result
vendor/magento/framework/composer.json declares no dependency containing \Zend_Db_Select
This causes packages depending on magento/framework to fail execution

<!---MAGETWO-86645 -->* Remove zend json from json result controller

[GitHub-9236](https://github.com/magento/magento2/issues/9236)

 As a long term goal, we would like to eliminate knowledge about 3rd party libraries from Magento code base. Magento code still can use 3rd party libraries, but they must be wrapped by Magento interfaces and classes (adapters) so that 3rd party libraries can be easily substituted by newest versions or alternative implementations.



<!---MAGETWO-86568 -->* Integration Test Annotation magentoAppArea breaks with some valid values[forwardport]. 


[GitHub-2907](https://github.com/magento/magento2/issues/2907)


 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [12992](https://github.com/magento-engcom/magento2ce/pull/1194)*. 


<!---MAGETWO-86299 -->* Upgrade ZF components. Zend_Service 


 *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [12957](https://github.com/magento/magento2/pull/12957)*. 


[GitHub-9243](https://github.com/magento/magento2/issues/9243)



Upgrade components from ZF1 to ZF2

As a long term goal, we would like to eliminate knowledge about 3rd party libraries from Magento code base. Magento code still can use 3rd party libraries, but they must be wrapped by Magento interfaces and classes (adapters) so that 3rd party libraries can be easily substituted by newest versions or alternative implementations.

Since this is @api interface we cannot remove any methods from the contract.
We need to modify doc blocks for the following methods:

    /**
     * Returns the set service class
     *
     * @return \Zend_Service
     */
    public function getService();

    /**
     * Sets a new exchange service
     *
     * @param string|\Magento\Framework\Locale\CurrencyInterface $service Service class
     * @return \Magento\Framework\CurrencyInterface
     */
    public function setService($service);
Remove Magento\Framework\Locale\CurrencyInterface from setService method and add align it with \Zend_Currency signatures
Remove \Zend_Service from getService method and add align it with \Zend_Currency signatures
Add @deprecated tags to both methods and add @see annotation to the methods. Please, reference corresponding interface from \Magento\Directory\Model\Currency\Import namespace that must be used instead these methods
We would like to cleanup entire interface, we can't deprecate other methods without suggested alternative implementations. So let's stop on these two methods for now




<!---MAGETWO-85063 -->* Create a framework for dynamically composing what's new content

ReleaseNotification module is added to display new release highlights.

Create a framework that can take the content dynamically that will display content to this flash screen



<!---MAGETWO-81339 -->* 

title: Error date time to save



 *Fix submitted by [Raul Mateos](https://github.com/raumatbel) in pull request [11306](https://github.com/magento/magento2/pull/11306)*. 

[GitHub-10485](https://github.com/magento/magento2/issues/10485)

[GitHub-10580](https://github.com/magento/magento2/issues/10580)

[GitHub-10686](https://github.com/magento/magento2/issues/10686)

[GitHub-10754](https://github.com/magento/magento2/issues/10754)


Save date time correctly in different timezone and locale


Steps to reproduce
Login to Magento admin
Open an existing product for edit
Click save
Expected result
Product is saved successfully as no changes are made from the previous state of the product
Actual result
An error Invalid input datetime format of value '25/07/+00201717' appears and the product is not saved


Steps to reproduce
Create product
Set product new from and new to dates to be 1st Aug 2017 to 1st Sep 2017
Expected result
Product is listed as new in "New products Widget" if viewed during August 2017
Actual result
Product is not listed as new in "New products Widget"

Cart Rules date is invalid format in French


<!---MAGETWO-70886 -->* 

Refactoring in order to move hardcoded Zend_Feed dependency into interface for further refactoring. Ticket #9240


 *Fix submitted by [Dusan Lukic](https://github.com/ldusan84) in pull request [9347](https://github.com/magento/magento2/pull/9347)*. 


I have created an interface that replaces Zend_Feed::importArray static call. The concrete class takes Zend_Feed object and returns it's own result that's a wrapper around Zend_Feed_Abstract.


[GitHub-9240](https://github.com/magento/magento2/issues/9240)


<!---MAGETWO-91328 -->* Fixed issue: checkout doesn't work when AdBlock extension enabled and Google Analytics is enabled



<!--- MAGETWO-90316 -->* Product records inside the `catalog_product_super_link` table are no longer updated needlessly when you save a configurable product. Previously, saving configurable product erased and then reinserted records in the `catalog_product_super_link` table even when child products were not changed. This practice quickly resulted in an unnecessarily large `catalog_product_super_link` table, especially in multi-website installations.

<!---MAGETWO-87952 -->* Magento now caches popular search results for faster response time on popular searches. A system administrator can configure how many top search queries can be cached.

<!---MAGETWO-71034 -->* copy from 221 80180


<!---ENGCOM-1173 -->* copy from 221 80180


<!---MAGETWO-75326 -->* 

<!---MAGETWO-82428 -->*

<!---MAGETWO-81276 -->*

<!---ENGCOM-976 -->* 2115 2565

<!---ENGCOM-983 -->* 224 88340

<!---ENGCOM-1199 -->* 2114 947

<!---ENGCOM-1122 -->* 2114 947

<!---ENGCOM-1261 -->* 

<!---ENGCOM-1369 -->* 

<!---ENGCOM-1397 -->* 

<!---ENGCOM-1416 -->* 

<!---ENGCOM-2232 -->* 

<!---ENGCOM-1508 -->* 


<!---ENGCOM-2250 -->* 226 1520


<!---ENGCOM-2088 -->* 

<!--- ENGCOM-943 -->* 225 618

<!---ENGCOM-1806 -->* 2115 1870



#### Application framework

<!---MAGETWO-83091 -->* We've removed undefined fields from files in `/lib`. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11662](https://github.com/magento/magento2/pull/11662)*. 

<!---MAGETWO-83034 -->* The doc block that describes `setValue` in `FilterBuilder` now reflects that this method will accept an array. *Fix submitted by [bytecreation](https://github.com/ByteCreation) in pull request [11855](https://github.com/magento/magento2/pull/11855)*.

<!--- MAGETWO-82664-->* Magento now uses valid ISO language codes in HTML headers. *Fix submitted by [Cristian Sanclemente](https://github.com/crissanclick) in pull request  [11644](https://github.com/magento/magento2/pull/11644)*. [GitHub-11540](https://github.com/magento/magento2/issues/11540)

<!--- MAGETWO-70736-->* Magento can now generate unsecure URLs if the current URL is secure. [GitHub-6175](https://github.com/magento/magento2/issues/6175)

<!--- MAGETWO-82235-->* The `php bin/magento app:config:dump` command no longer adds an extra space to multiline array values every time it runs. Previously, this command inserted extra spaces, which triggered Github to commit these files as changed. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11452](https://github.com/magento/magento2/pull/11452)*. [GitHub-11328](https://github.com/magento/magento2/issues/11328)

<!--- MAGETWO-82007-->* The `StockItemCriteriaInterface` method `setProductsFilter` now accepts an array of IDs. Previously, this method accepted either a single integer or an array, but returned only one item. *Fix submitted by [Kirill Morozov](https://github.com/kirmorozov) in pull request [11503](https://github.com/magento/magento2/pull/11503)*.[GitHub-7678](https://github.com/magento/magento2/issues/7678)


<!--- MAGETWO-93723,  MAGETWO-92185-->* The Magento application framework has been updated to address a jQuery security issue.

<!--- MAGETWO-71060-->* 

<!--- MAGETWO-70966-->* 

<!--- MAGETWO-71040-->* copy from 221 80181

<!--- MAGETWO-71059 -->* copy from 221 80182

<!--- MAGETWO-71062 -->* copy from 221 80187

<!--- MAGETWO-71933-->* 


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

<!---MAGETWO-71647 -->* copy from 222 80207

<!---ENGCOM-1368 -->* 

<!---ENGCOM-1723 -->* 

<!---ENGCOM-1456 -->* 224 85549

<!---ENGCOM-1006 -->* 

<!---ENGCOM-2105 -->*  226 2107


<!---ENGCOM-2895 -->*  227 2415

<!---ENGCOM-1793 -->*  226 1762

<!--- ENGCOM-774 -->* 


#### Session framework

<!--- MAGETWO-87153 -->* [GitHub-9453](https://github.com/magento/magento2/issues/9453)  

Reopened: '?SID' in URL even if disabled 

<!--- MAGETWO-88084 -->* We’ve removed the 30-second timeout limit for the session locking mechanism when Redis is used for session storage.

<!--- MAGETWO-87754 -->* 


Update colinmollenhour/php-redis-session-abstract to version supporting PHP 7.2.

 *Fix submitted by [Patrick McLain](https://github.com/pmclain) in pull request [39](https://github.com/magento-engcom/php-7.2-support/pull/39)*. 

<!--- MAGETWO-83289 -->* 224 83287

<!---ENGCOM-2794 -->* 

### General fixes

<!--- MAGETWO-87153 -->*  [GitHub-12715](https://github.com/magento/magento2/issues/12715)  

Storefront Back to Sign in button does not work as expected 

<!--- MAGETWO-87153 -->*   [GitHub-12719](https://github.com/magento/magento2/issues/12719) 

Welcome message is shown with customer's first and last names after confirming account



<!--- MAGETWO-87442 -->*  [GitHub-11882](https://github.com/magento/magento2/issues/11882) 

It's not possible to enable "log to file" (debugging) in production mode

<!--- MAGETWO-87449 -->*    [GitHub-6350](https://github.com/magento/magento2/issues/6350) 

Frontend: Datepicker/calendar control does not use the store locale 

<!--- MAGETWO-87449 -->*   [GitHub-6858](https://github.com/magento/magento2/issues/6858)

DatePicker date format does not reflect user's locale


<!--- MAGETWO-87449 -->*  [GitHub-6831](https://github.com/magento/magento2/issues/6831)  

Magento 2.1.1 Invalid input date format 'Invalid date' 




<!--- MAGETWO-87523 -->*  [GitHub-8003](https://github.com/magento/magento2/issues/8003)  


Using System Value for Base Currency Results in Config Error


<!--- MAGETWO-87562 -->*  [GitHub-11796](https://github.com/magento/magento2/issues/11796)   

 Magento2.2.0 home page product grid issues

<!-- MAGETWO-87152 -->*  [GitHub-9742](https://github.com/magento/magento2/issues/9742)   


Default welcome message returns after being deleted


<!--- MAGETWO-87176 -->*  [GitHub-12206](https://github.com/magento/magento2/issues/12206)  


Tracking link returns 404 page in admin panel


 
<!--- MAGETWO-87176 -->*  [GitHub-11946](https://github.com/magento/magento2/issues/11946)  

Layer navigation showing wrong product count 

<!-- MAGETWO-87151 -->*   [GitHub-11941](https://github.com/magento/magento2/issues/11941) 


Invoice for products that use qty decimal rounds down to whole number 

<!-- MAGETWO-87151 -->*  [GitHub-11140](https://github.com/magento/magento2/issues/11140)

Going to '/admin' while using storecodes in url and a different adminhtml url will throw exception


<!-- MAGETWO-87064 -->*  [GitHub-11157](https://github.com/magento/magento2/issues/11157)  

nginx.sample.conf missing heath_check.php?

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

<!---ENGCOM-1229 -->* 225 1050


<!--- MAGETWO-88039-->*   Fix adding values to system variable collection



Changed select fields in joined variable value table in Magento\Variable\Model\ResourceModel\Variable\Collection#addValuesToResult() method to match DB schema


 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13735](https://github.com/magento/magento2/pull/13735)*.

 Changed select fields in joined variable value table in Magento\Variable\Model\ResourceModel\Variable\Collection#addValuesToResult() method to match DB schema

Description
Method mentioned above tried to select field value from joined variable_value table (which doesn't exist). I've replaced incorrect field with two proper ones: plain_value and html_value.



<!--- MAGETWO-88018-->*    Display a more meaningful error message in case of misspelt module name

 *Fix submitted by [Malyovanets Nickolas](https://github.com/nmalevanec) in pull request [13731](https://github.com/magento/magento2/pull/13731)*.



<!--- MAGETWO-86251-->*    Respect "Learn More Link" in Recently Viewed Products widget options


`Learn More Link` widget option in a Recently Viewed Products widget isn't respecting its setting.

 *Fix submitted by [Jeroen](https://github.com/JeroenVanLeusden) in pull request [12947](https://github.com/magento/magento2/pull/12947)*.



<!--- MAGETWO-85968-->*  Remove title “Billing Agreements

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

<!--- ENGCOM-1271 -->* 224 84016

<!--- ENGCOM-1256 -->* 


<!--- ENGCOM-1707 -->* 

<!--- ENGCOM-957 -->*


<!--- ENGCOM-1857 -->*

<!--- ENGCOM-1970 -->*

<!--- ENGCOM-2375 -->*. 226 2336

<!--- ENGCOM-2729 -->* 227 2673

<!--- ENGCOM-2505 -->* 226 1659

<!--- ENGCOM-2279 -->* 226 87120


<!---MAGETWO-87066 -->* [GitHub-11231](https://github.com/magento/magento2/issues/11231) 

Can't close mobile search bar once typed (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team)

<!---MAGETWO-87066 -->*  [GitHub-10775](https://github.com/magento/magento2/issues/10775)

404 Forbidden sounds not right (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 

<!---MAGETWO-87066 -->*  [GitHub-11163](https://github.com/magento/magento2/issues/11163)

Magento 2.2.0 Pages showing error: Data key is missing: code-entity (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 


<!-- MAGETWO-87057 -->*  [GitHub-11700](https://github.com/magento/magento2/issues/11700)

"Something Went Wrong" error for limited access admin user 


### Gift cards

<!---MAGETWO-90335 -->* `Magento now includes a gift card recipient's email address in the gift card account history. Previously, Magento did not include the gift card recipient's name and email address in the gift card account history, even though Magento successfully sent the email.

<!-- MAGETWO-93791 -->* Magento no longer permits users to save a new gift card  without first completing the required values. Previously, when creating a gift card, users could save the card without having designated an amount, but the card could not be purchased. Magento also created a `report.CRITICAL: Warning` error message in the `system.log`.


<!-- MAGETWO-93716 -->* Magento now maintains relationships between new gift card accounts when a customer purchases several gift cards in the same order. 

<!-- MAGETWO-93707 -->*  You can now save gift cards without the price being changed on the Admin to an unacceptable format. Previously, Magento tried to save amounts in unacceptable formats (such as the inclusion of a comma in a four-digit price), which triggered an error.  

<!--- MAGETWO-90791 -->* Magento now displays the correct subtotal when a customer adds multiple gift cards of different amounts to his cart. 

<!--- MAGETWO-88274 -->* 



 *Fix submitted by [Serhii](https://github.com/serhii-balko) in pull request [13819](https://github.com/magento/magento2/pull/13819)*. 



Expected result
Strength meter starts working, showing a different password strength as I type
Actual result
Strength meter doesn't work.
Error on the console.

[GitHub-13429](https://github.com/magento/magento2/issues/13429)


### Google Analytics

<!-- MAGETWO-87442 -->* [GitHub-12221](https://github.com/magento/magento2/issues/12221) 

Google analytics pageview being triggered twice


### Google Tag Manager

<!-- MAGETWO-93788 -->* The `addToCart` event triggers on the Google Task Manager console only when an item is added to the cart.  Previously, the event was triggered before the cart was updated. 

<!-- MAGETWO-92126 -->* Google Tag Manager product category data is now fully reported. Previously, the Google Tag Manager product category (Enhanced Ecommerce) data did not report all information. 

<!--- ENGCOM-1872 -->* 226 1825

<!--- ENGCOM-633 -->*  224 8843



### GraphQL

<!---MAGETWO-83853 -->* `Websites object was added to products results documented in the graphql SDL
GraphQL response returns null for website_ids


<!---ENGCOM-2318 -->* Category queries return category `id` and `name` values as expected.

<!---ENGCOM-2445 -->* Added the GraphQL StoreConfig query

<!---ENGCOM-2320 -->* The `CatalogGraphQl` module now calculates the depth of child notes in a category tree correctly.


### HTML

<!---MAGETWO-87351 -->* [GitHub-12601](https://github.com/magento/magento2/issues/12601)

A space between the category page and the main footer when applying specific settings

<!---ENGCOM-1990 -->* 226 1952

<!---ENGCOM-2112 -->* 226 2412

<!-- MAGETWO-87064 -->* [GitHub-9944](https://github.com/magento/magento2/issues/9944) 

Name attribute shows empty when creating custom fields on product creation form


### Infrastructure



<!-- MAGETWO-87313 -->*  [GitHub-9684](https://github.com/magento/magento2/issues/9684)  

No ACL set for integrations 

<!-- MAGETWO-87153 -->*  [GitHub-11936](https://github.com/magento/magento2/issues/11936) 

required attribute set id filter on attribute group repository getList

<!-- MAGETWO-87524 -->* [GitHub-10133](https://github.com/magento/magento2/issues/10133)

Please add your expectations for @deprecated annotations 

<!-- MAGETWO-87524 -->*  [GitHub-12374](https://github.com/magento/magento2/issues/12374)

Model hasDataChanges always true 


<!-- MAGETWO-87936 -->*   [GitHub-13327](https://github.com/magento/magento2/issues/13327)

Menu ui-state-active not removed from previous opened menu item

<!-- MAGETWO-87936 -->*   [GitHub-9413](https://github.com/magento/magento2/issues/9413) 

Cannot remove product_list_toolbar in XML

<!-- MAGETWO-87064 -->*   [GitHub-9919](https://github.com/magento/magento2/issues/9919) 

Pattern Validation via UI Component Fails to Interpret String as RegEx Pattern (

<!-- MAGETWO-92877 -->*  Adds possibility to configure logs output into syslog

As a developer, I want to be able writing core application's logs to Syslog, so I can later re-stream them easily and do not use storage to keep the logs.

Background:

We released possibility for ECE-Tools to write logs to Syslog ( MAGECLOUD-1571 )

Core application uses same logging library is core does, so potentially core application cal also write logs to Syslog



<!--- MAGETWO-90103 -->*  `expectException()` calls now accept two parameters (instead of one). *Fix submitted by [Fabian Schmengler](https://github.com/schmengler) in pull request [11099](https://github.com/magento/magento2/pull/11099)*. [GitHub-11059](https://github.com/magento/magento2/issues/11059)

<!--- MAGETWO-88176 -->* Making block class not mandatory by adding a default a configurable xml by area class for block generator


<!--- MAGETWO-72139 -->* Add support for PHP 7.2.x 

<!--- MAGETWO-72365 -->* Native Magento WYSIWYG editor to use in 3d party functionality
Any 3d party module can use native Magento WYSIWYG with no extra effort
As a Developer I want utilize native Magento WYSIWYG editor in custom Magento module So that I don't duplicate functionality and maintain user experience consistency across all Magento functionality




<!--- MAGETWO-93039 -->Note: Several components included by Composer have been updated to the latest patch versions. 

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

<!--- MAGETWO-71007 -->* copy from 221 80179


<!-- MAGETWO-75114 -->* 


<!-- MAGETWO-80287 -->* 

<!---ENGCOM-1137 -->* 225 1079


<!---ENGCOM-1303 -->*

<!---ENGCOM-1851 -->* 226 1805

<!---ENGCOM-1882 -->*


<!---ENGCOM-1904 -->* 226 1922

<!---ENGCOM-2463 -->* 226 2476

<!---ENGCOM-2604 -->* 226 2480

<!---ENGCOM-2796 -->* 227 2783


<!---ENGCOM-2891 -->* 226 1219

<!--- ENGCOM-2884 -->* 226 1583

<!--- ENGCOM-1259 -->*

<!---MAGETWO-87056 -->*   [GitHub-9783](https://github.com/magento/magento2/issues/9783) 

Multiple <depends> parameters in widget.xml not allowed (fixed in magento-engcom/magento2ce#1283 


<!---MAGETWO-87056 -->*  [GitHub-10941](https://github.com/magento/magento2/issues/10941) 

Responsive Design Issue on Mobile with Magento 2.1.9 (fixed in magento-engcom/magento2ce#1283 by @magento-engcom-team)	

<!---MAGETWO-87056 -->*  [GitHub-11166](https://github.com/magento/magento2/issues/11166)  

ReindexAll -> getState() is not correct if the Indexer broke with PHP fatal error

<!---MAGETWO-87056 -->*  [GitHub-11176](https://github.com/magento/magento2/issues/11176)

Configured table prefix is not recognized in CLI admin:user:create 


<!---MAGETWO-87056 -->*   [GitHub-11275](https://github.com/magento/magento2/issues/11275)

Call to a member function addCrumb() (fixed i


<!---MAGETWO-87056 -->*  [GitHub-11310](https://github.com/magento/magento2/issues/11310)  

Method "getChildren" sort ordering

<!---MAGETWO-87058 -->*  [GitHub-6802](https://github.com/magento/magento2/issues/6802)   


Magento\Search\Helper\getSuggestUrl() not used in search template

<!---MAGETWO-87058 -->*   [GitHub-6661](https://github.com/magento/magento2/issues/6661)  

XHTML templates Don't Use Schema URNs


<!---MAGETWO-87058 -->*  [GitHub-10811](https://github.com/magento/magento2/issues/10811) 

Replace FollowSymLinks with SymLinksIfOwnerMatch 


<!-- MAGETWO-87057 -->* [GitHub-9028](https://github.com/magento/magento2/issues/9028)  

You cannot set a 303 redirect response using a result factory


<!-- MAGETWO-87057 -->* [GitHub-8954](https://github.com/magento/magento2/issues/8954)   

Error While Trying To Load Quote Item Collection Using Magento\Quote\Model\ResourceModel\QuoteItem\Collection::getItems() 


<!-- MAGETWO-87064 -->* [GitHub-6891](https://github.com/magento/magento2/issues/6891)    

Add-to-cart checkbox still visible when $canItemsAddToCart = false 


### Image

<!---ENGCOM-2955 -->* 227 2070

<!---ENGCOM-2956 -->* 227 2855

<!---ENGCOM-2802 -->* 227 2785

<!---ENGCOM-2698 -->* 227 2737

<!-- MAGETWO-87057 -->* [GitHub-12017](https://github.com/magento/magento2/issues/12017) 


Cross-sell product placeholder image size issue 


<!-- MAGETWO-87936 -->*  [GitHub-10417](https://github.com/magento/magento2/issues/10417) 


Wysywig editor shows broken image icons


### Import/export

<!--- MAGETWO-87313 -->* [GitHub-12083](https://github.com/magento/magento2/issues/12083)   

Cannot import zero (0) value into custom attribute


<!--- MAGETWO-87442 -->* [GitHub-6924](https://github.com/magento/magento2/issues/6924)    

Magento 2.1.0 - "General system exception happened" on Import .csv 



<!--- MAGETWO-87442 -->* [GitHub-8255](https://github.com/magento/magento2/issues/8255) 


Export Products action doesn't consider hide_for_product_page value 


<!--- MAGETWO-87439 -->* [GitHub-5846](https://github.com/magento/magento2/issues/5846) 

Product import doesn't import all products, but still gives success message


<!--- MAGETWO-87562 -->*  [GitHub-12714](https://github.com/magento/magento2/issues/12714) 

Extra records are in exported CSV file for order


<!---MAGETWO-87058 -->*  [GitHub-10920](https://github.com/magento/magento2/issues/10920) 

Sku => Entity_id relations are fetched inefficiently when inserting attributes values during product import 



<!---MAGETWO-84222 -->* 226 1715

<!---MAGETWO-82960 -->*

<!--- MAGETWO-87562 -->*  [GitHub-10697](https://github.com/magento/magento2/issues/10697)  

Product Import: Additional data: Invalid URL key

<!---MAGETWO-83131 -->*

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

https://github.com/magento-engcom/import-export-improvements/issues/42

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


<!---ENGCOM-2468 -->* 

<!---ENGCOM-855 -->* 

<!--- ENGCOM-1514 -->* 226 2304

<!--- ENGCOM-732 -->* 

### Indexing

<!---MAGETWO-85225 -->* `indexer:status` now outputs information about the schedule mview backlog. *Fix submitted by [Luke Rodgers](https://github.com/convenient) in pull request  [12592](https://github.com/magento/magento2/pull/12592)*.

<!---MAGETWO-70883 -->* Magento no longer reindexes entities that have not been changed. Previously, Magento reindexed entries that were not changed but which had a MySQL UPDATE. *Fix submitted by [Anton Evers](https://github.com/AntonEvers) in pull request [4893](https://github.com/magento/magento2/pull/4893)*.[GitHub-2987](https://github.com/magento/magento2/issues/2987)

<!--- MAGETWO-90109 -->* The customer grid indexer now works as expected.  Previously, this indexer did not work when reindexing using the command-line interface during the upgrade. *Fix submitted by [Leonid Poluyanov](https://github.com/le0n4eg) in pull request [10838](https://github.com/magento/magento2/pull/10838)*. [GitHub-10838](https://github.com/magento/magento2/issues/10838)

<!--- MAGETWO-70835 -->* Tier pricing for a single product unit now works as expected. If a tier price is set for one product unit, and this price is lower than the product price or special price, then the product price index table is populated with the tier price.


<!--- MAGETWO-93753 -->* Implement sharding and parallelization for Price Indexer

The price indexer is now scoped and multithreaded, which improves layered navigation, search, and indexing actions for complex sites with multiple websites and have many price books 

<!--- MAGETWO-94070 -->* copy from 227 64471



### Infrastructure

<!--- MAGETWO-87449 -->*  [GitHub-6712](https://github.com/magento/magento2/issues/6712)  

Footer Links Widget CSS Issue 

<!--- MAGETWO-87442 -->*   [GitHub-11509](https://github.com/magento/magento2/issues/11509)

Psr logger debug method does not work by the default in developer mode 

<!--- MAGETWO-87562 -->*  [GitHub-11332](https://github.com/magento/magento2/issues/11332)

How to Fix the wrong input format of Customer date of birth

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


<!---MAGETWO-88275 -->* 

<!---MAGETWO-75321 -->* 


<!---ENGCOM-1366 -->* 2115 1699

<!---MAGETWO-87058 -->*   [GitHub-11793](https://github.com/magento/magento2/issues/11793)

Magento2.1.5 admin shipping report shows wrong currency code


 <!---MAGETWO-87058 -->*  [GitHub-11880](https://github.com/magento/magento2/issues/11880)  


Magento 2.1.9 Configurable::getUsedProducts returns a different array after product collections is cached



### Locale

<!--- MAGETWO-94119-->* The DatePicker date filter on **Reports** > **Products** > **Ordered** now works as expected for administrators working in Australian English locales. 

<!--- ENGCOM-1052 -->*

<!--- MAGETWO-87449-->*  [GitHub-9743](https://github.com/magento/magento2/issues/9743)

Invalid date when customer validate with French locale


### Message

<!--- MAGETWO-87351-->* [GitHub-12209](https://github.com/magento/magento2/issues/12209) 


Substitution payment method - Incorrect message


<!--- MAGETWO-87449-->*  [GitHub-9008](https://github.com/magento/magento2/issues/9008) 

Error Message Is Confusing When Code Base Is Behind Database Module Version 


<!--- MAGETWO-87449-->*  [GitHub-4248](https://github.com/magento/magento2/issues/4248) 


Validations not working on customer registration on DOB field


<!--- MAGETWO-87313-->* [GitHub-9764](https://github.com/magento/magento2/issues/9764) 

exception message is wrong and misleading in findAccessorMethodName() of Magento\Framework\Reflection\NameFinder 


<!--- MAGETWO-87313-->* [GitHub-10474](https://github.com/magento/magento2/issues/10474) 

Error message in product review form not being translated



### Newsletter

<!--- MAGETWO-87442-->*   [GitHub-12787](https://github.com/magento/magento2/issues/12787) 

Newsletter\Model\Subscriber::loadByEmail() does not use MySQL index


<!--- MAGETWO-87442-->*  [GitHub-12876](https://github.com/magento/magento2/issues/12876)  

Multiple newsletter confirmation emails sent


<!--- MAGETWO-87155 87936-->* [GitHub-12320](https://github.com/magento/magento2/issues/12320)   

Newsletter subscribe button title wrapped



<!--- MAGETWO-82942-->* Magento now sends confirmation-of-subscription email to new subscribers only. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [11604](https://github.com/magento/magento2/pull/11604*. [GitHub-5439](https://github.com/magento/magento2/issues/5439)

<!-- MAGETWO-93713 -->* Guest users can now sign up for newsletters for multiple stores. Previously, when a guest user signed up for a newsletter from multiple stores, Magento sent a subscription confirmation message, but did not successfully subscribe the user. 

<!--- MAGETWO-91701 -->* A customer subscription on one store no longer depends on  the customer’s subscription on another store.

<!--- MAGETWO-84686 -->* 224 85783

<!--- ENGCOM-2478 -->* 226 2144

<!--- ENGCOM-2006 -->* 2.1.15 2046

<!-- MAGETWO-87057 -->*  [GitHub-4004](https://github.com/magento/magento2/issues/4004) 

Newsletter Subscriber create-date not set, and change_status_at broken

<!-- MAGETWO-87151 -->*    [GitHub-10014](https://github.com/magento/magento2/issues/10014) 

Newsletter subscriptions status not isolated between multi stores 


### Orders

<!--- MAGETWO-87615 -->*   [GitHub-9055](https://github.com/magento/magento2/issues/9055) 
 
Default Store is always used when retrieving sequence value's for sales entity's.


<!--- MAGETWO-87615 -->*   [GitHub-10438](https://github.com/magento/magento2/issues/10438) 

Potential error on order edit page when address has extension attributes 


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

<!--- MAGETWO-83496-->* 

<!--- MAGETWO-75327-->* copy from 221 80509

<!--- MAGETWO-80095-->* 



<!--- MAGETWO-82563-->* 

### Page cache

<!--- MAGETWO-80647-->* 

### Search 

<!--- MAGETWO-83092-->* The unneeded `saveHandler` in the  CatalogSearch indexer declaration has been removed. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11626](https://github.com/magento/magento2/pull/11626)*.

<!--- MAGETWO-88082-->* Search synonyms in a group now can declare several words as synonyms. For example, "Elon Musk,tesla" is a valid synonym group, and a search on the phrase "Elon Musk" will also show results for the "tesla" keyword. Previously, you could declare synonyms for each word (for example, "Elon,Musk,Tesla"), but these words didn't work as a phrase. Synonyms are also now case-insensitive.

<!--- MAGETWO-72863-->* Searching for a value of an attribute set on the store-view level of a product now returns results. Previously, Magento returned results  only if the attribute value was entered on the all store-view levels.

<!--- MAGETWO-88082 -->* Search terms from the same synonym group now return the same results.


<!---ENGCOM-1815 -->* 2115 2079

<!---ENGCOM-1910 -->* 

<!---ENGCOM-2588 -->* 226 2455




### Store

<!--- MAGETWO-87938 -->*  Change the way the minify_exclude configurations can be used. #13687



 *Fix submitted by [Pieter Hoste](https://github.com/hostep) in pull request [13687](https://github.com/magento/magento2/pull/13687)*.

 [GitHub-11577](https://github.com/magento/magento2/issues/11577)


 Expected result
TinyMCE is loaded succesfully
Actual result
TinyMCE is trying to load its dependencies but the url from which it is trying to retrieve these dependencies is incorrect. Which causes TinyMCE failing to load.

### Orders

<!-- MAGETWO-87151 -->* [GitHub-11832](https://github.com/magento/magento2/issues/11832)  

 Create order (on Customer edit page) - not working from admin environment

<!-- MAGETWO-87351 -->* [GitHub-10128](https://github.com/magento/magento2/issues/10128)    

New Orders not being saved to order grid



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

<!--- MAGETWO-89990 -->* Added possibility to use Cybersource on multi-shipping. 
Added "Authorize and Capture" payment action for Cybersource.

COPY FROM 224

<!--- MAGETWO-83340 -->* Added possibility to customer error codes from payment gateways. 
For more details, please, see http://devdocs.magento.com/guides/v2.3/payments-integrations/payment-gateway/error-code-mapper.html. 




<!--- MAGETWO-89991 -->* Default AVS and CVV codes are now mapped as (null or empty string) instead of "U". for Signifyd

<!--- MAGETWO-94402 -->* The **Billing Address** field now displays the designated billing address as expected  for a registered customer  when checking out with Paypal Express Checkout. Previously, Magento displayed the shipping address in the **Billing Address** field in both the order confirmation email and the Admin.


<!--- MAGETWO-91500 -->* Admin users that are not part of the Administrator group can now complete payment for an order using Braintree.

<!--- MAGETWO-89625 -->* Magento PayPal integration now supports the Indian Rupee currency (INR).

<!---ENGCOM-1526 -->* 222 394

<!---ENGCOM-2954 -->* 227 2382

<!--- ENGCOM-2308 -->* 226 2021


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

<!--- ENGCOM-1689 -->* 226 2193

<!--- MAGETWO-87524 -->*   [GitHub-5774](https://github.com/magento/magento2/issues/5774)    

Tier price and custom options give bad results 


### Quote

<!--- MAGETWO-84420 -->* You can now implement a product attribute that sets **Catalog Input Type for Store Owner** equal to  **Fixed Product Tax** in a multi-store environment. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request 13019 [13019](https://github.com/magento/magento2/pull/13019)*.[GitHub-12393](https://github.com/magento/magento2/issues/12393)

<!--- ENGCOM-1519 -->* 226 1441

<!--- ENGCOM-1002 -->* 225 643

<!--- ENGCOM-2801 -->* 224 86886

<!--- ENGCOM-2482 -->* 226 1414

<!--- ENGCOM-2201 -->* 2116 2324

<!--- ENGCOM-1208 -->* 224 86595


### Reports

<!--- MAGETWO-90338 -->* You can now successfully export the Ordered Products report to a CSV file. Previously, the export file contained no report data.


<!--- MAGETWO-94909-->* The scope selector for reports now works as expected. Previously, when a merchant set the scope to **All Websites** , the generated report showed  sales from only a subset of websites.


<!--- MAGETWO-94032-->* The `.csv` export of Coupon reports now shows the correct total for selected coupons. Previously, the total line in the `.csv` file showed the totals for all coupons in the selected time period, rather than just the selected coupons. 

<!--- MAGETWO-84811-->* Update wrong layout update xml handle installed in CMS Home Page by default

 *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11891](https://github.com/magento/magento2/pull/11891)*. 


 Update wrong layout update xml handle installed in CMS Home Page by default

 Previously, Preinstalled xml layout update handle in Home Page is invalid


<!--- MAGETWO-63173 -->* Wishlist reports are available on the Admin as expected. 


<!--- MAGETWO-75320 -->* copy from  224 88116

<!--- MAGETWO-82808 -->* copy from  222 83540

<!---ENGCOM-2169 -->* 226 2215

<!--- ENGCOM-2765 -->* 227 2724



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


<!---ENGCOM-1234 -->* 


<!---ENGCOM-2858 -->* 227 2720

<!---ENGCOM-2380 -->* 226 2335




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

<!---ENGCOM-1291 -->* 

<!---ENGCOM-1466 -->* 

<!---ENGCOM-1110 -->* 

<!---ENGCOM-1110 -->* 

<!--- ENGCOM-985 -->* 225 793

<!--- ENGCOM-1007 -->* 224 689

<!--- ENGCOM-1054 -->* 225 1058


<!---ENGCOM-1773 -->* 

<!---ENGCOM-2026 -->* 

<!---ENGCOM-2028 -->* 


<!---ENGCOM-2654 -->* 226 2240

<!-- MAGETWO-87066 -->* [GitHub-5105](https://github.com/magento/magento2/issues/5105) 

Error While send Invoice with Grouped Products (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 


<!-- MAGETWO-87064 -->*  [GitHub-10856](https://github.com/magento/magento2/issues/10856) 

Sync billing with shipping address on Admin Reorder and Admin Customer Create Order page does not work for Existing address selected


### SalesRule

<!-- MAGETWO-93717 -->* Cart price rules with associated coupons are no longer affected by edits to scheduled updates. 

<!---ENGCOM-1201 -->* 




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


<!--- ENGCOM-1057 -->* 226 1381

<!--- ENGCOM-969 -->* 224 88331

<!--- ENGCOM-961 -->* 2115 2509

<!--- ENGCOM-1486 -->* 226 1415

### Sitemap

<!--- MAGETWO-83292-->* Magento now correctly processes global product attributes when generating the sitemap. *Fix submitted by [Ričards Zālītis](https://github.com/therool) in pull request [8999](https://github.com/magento/magento2/pull/8999)*. [GitHub-5941](https://github.com/magento/magento2/issues/5941)


<!--- MAGETWO-71372-->* It's now easier to add additional items to a sitemap. Previously, `SitemapPlugin` worked inconsistently with large sitemaps. *Fix submitted by [Piotr Kwiecinski](https://github.com/piotrkwiecinski) in pull request [10442](https://github.com/magento/magento2/pull/10442)*. [GitHub-10045](https://github.com/magento/magento2/issues/10045)

<!--- MAGETWO-70707-->* copy from 221 75459

<!--- MAGETWO-70872-->* copy from 221 75459

<!--- ENGCOM-1351 -->*

<!---ENGCOM-2666 -->* 226 1866

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

<!--- ENGCOM-2326 -->* 227 2704


<!-- MAGETWO-87057 -->*  [GitHub-7995](https://github.com/magento/magento2/issues/7995) 

If you leave as default, shipping lines disappear



### Store

<!-- MAGETWO-75322 -->* 

<!---ENGCOM-1999 -->* 


<!---ENGCOM-2606 -->* 226 2530

<!--- MAGETWO-87615 -->*  [GitHub-5035](https://github.com/magento/magento2/issues/5035)  

I can not to subscribe on change of all sections in Stores ->Configuration using event admin_system_config_changed_section


### Staging

<!-- MAGETWO-93719 -->* Magento now rolls  back updated changes to their pre-update state  when a merchant deletes an active Scheduled Update. Previously, some products were removed from their assigned categories (and categories were removed from the Amdin) when an active product update was deleted.  

<!-- MAGETWO-93706 -->* You can now successfully re-order a configurable product. Previously, a schedule update for one configurable product affected other ordered configurable products. 

<!-- MAGETWO-91743 -->* Magento no longer deletes products from the Admin product list after a merchant deletes its active schedule update. This deletion only appeared after the scheduled update time. 



### Swagger

<!--- MAGETWO-90787-->* Swagger does not render correctly for many POST/PUT operations.

Previously, In Swagger, the text area that contains the payload structure of some POST and PUT operations is not displayed. If a fraction of the text area is displayed, you can click on it to display the payload structure in a text area in the center of the page. If the text area is not displayed at all, then you cannot access the payload structure. 


<!---ENGCOM-2811 -->* 227 2837

<!---ENGCOM-1934 -->* 226 1887



### Swatches


<!-- MAGETWO-87155 -->* [GitHub-11828](https://github.com/magento/magento2/issues/11828) 

Visual Swatches not showing swatch color in admin

<!-- MAGETWO-87151 -->*  [GitHub-10628](https://github.com/magento/magento2/issues/10628) 

Color attribute swatches are not visible if sorting is enabled

<!--- MAGETWO-83292-->* You can now use REST to import visual swatch attribute options. Previously, you could not add swatch options using service contracts unless a swatch option already existed for the attribute. *Fix submitted by [gonzalopelon](https://github.com/gomencal) in pull request [12044](https://github.com/magento/magento2/pull/12044)*. [GitHub-9410](https://github.com/magento/magento2/issues/9410), [GitHub-10707](https://github.com/magento/magento2/issues/10707), [GitHub-10737](https://github.com/magento/magento2/issues/10737), [GitHub-11032](https://github.com/magento/magento2/issues/11032)



<!--- MAGETWO-87869-->* Fix load order of view.xml when loading Swatch config 

[GitHub-12647](https://github.com/magento/magento2/issues/12647)


Image Swatch size change not working

Expected result
The background image used for the visual swatch has the dimensions 250x250

Actual result
The background image used for the visual swatch has the dimensions 30x20 which represents the default setting


<!--- MAGETWO-87935-->* Replaced .size() with .length to be compatible with jQuery 3.* 


 *Fix submitted by [Kirill Morozov](https://github.com/kirmorozov) in pull request [13686](https://github.com/magento/magento2/pull/13686)*. 


Provide replacement of .size() call as of jQuery documentation.

<!--- ENGCOM-1128 -->* 225 86332

<!--- ENGCOM-1017 -->* 225 845

<!--- ENGCOM-2870 -->* 

<!---MAGETWO-82558 -->*




### Tax

<!--- MAGETWO-83405 -->* Tax total amount is now equal to the sum of the tax details amounts. Previously, Magento displayed the wrong order tax amounts when using specific tax configurations. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request [11594](https://github.com/magento/magento2/pull/11594)*. [GitHub-10347](https://github.com/magento/magento2/issues/10347)

<!---MAGETWO-82746 -->*  You can now successfully upgrade from 2.1.x to 2.2.0. Previously, when you tried to upgrade from 2.1.9 to 2.2.0, Magento displayed the  **postcode is a required field** error message, and `setup:upgrade` failed. *Fix submitted by [Mr. Lewis](https://github.com/lewisvoncken) in pull request [11735](https://github.com/magento/magento2/pull/11735)*.

<!---MAGETWO-87511 -->*  Made `getAllOptions()` and `toOptionArray()` compatible



  *Fix submitted by [Yevhen Sentiabov](https://github.com/joni-jones) in pull request [34](https://github.com/magento-engcom/php-7.2-support/pull/34)*. 


 Implementations of \Magento\Framework\Data\OptionSourceInterface::toOptionArray() are often incompatible with the interface and/or parent class, which causes fatal error in PHP 7.2.
Fix implementations so that interfaces are compatible.


<!---MAGETWO-75865 -->*  

<!---ENGCOM-1698 -->* 

<!---ENGCOM-1555 -->* 



### Testing

<!-- MAGETWO-87154 -->*  [GitHub-12844](https://github.com/magento/magento2/issues/12844)  

"Cannot instantiate interface Magento\Framework\Interception\ObjectManager\ConfigInterface" error in integration tests


<!-- MAGETWO-87064 -->*  [GitHub-10025](https://github.com/magento/magento2/issues/10025)  

Integration tests don't reset the database 


<!---MAGETWO-82550 -->* 

<!---MAGETWO-87317 -->*  Removed `each()` function usage -- deprecated
Removed each() function usage
Updated static test to check each() usage

  *Fix submitted by [Yevhen Sentiabov](https://github.com/joni-jones) in pull request [31](https://github.com/magento-engcom/php-7.2-support/pull/31)*. 




<!---MAGETWO-85993 -->*  Update functional.suite.dist.yml to handle a custom backend name


  *Fix submitted by [scribam](https://github.com/scribam) in pull request [12848](https://github.com/magento/magento2/pull/12848)*. 


 In the file functional.suite.dist.yml, the value for the backend_name configuration is hardcoded. We should be able to customize the value by using the variable MAGENTO_BACKEND_NAME defined in the .env file.

<!---MAGETWO-85817 -->*  Update testsuite validate_image_info_rollback.php



   *Fix submitted by [Harry Mumford-Turner](https://github.com/harrymt) in pull request [12800](https://github.com/magento/magento2/pull/12800)*. 


 Minor tweak of @var comment, added\ infront of /** @var Magento\Catalog\...




<!---MAGETWO-90803 -->*  phpunit.xml is blacklisted during schema validation static tests, particularly Magento/Test/Integrity/Xml/SchemaTest.php

Extension developers still use old MFTF and the only option for them to have tests distributed along with the code, is to provide custom phpunit.xml.

Since phpunit.xml is not regular Magento configuration file, it should be blacklisted during some schema validation static tests, particularly Magento/Test/Integrity/Xml/SchemaTest.php

The issue has high priority because it causes builds failures when bundled extensions are installed (e.g. Vertex_Tax), and thus blocks bundled extensions release.



<!--- MAGETWO-81646 -->* The `\Magento\Test\Php\LiveCodeTest::testCodeStyle`  method now uses whitelist files. *Fix submitted by [Adrian Martinez](https://github.com/adrian-martinez-interactiv4) in pull request [11376](https://github.com/magento/magento2/pull/11376)*. [GitHub-10559](https://github.com/magento/magento2/issues/10559)

<!--- ENGCOM-1257 -->* 
<!--- ENGCOM-1093 -->* 

<!--- ENGCOM-1031 -->* 

<!--- ENGCOM-2138 -->* 227 2616

<!--- ENGCOM-2409 -->* 226 1767

<!--- ENGCOM-1968 -->* 

<!---MAGETWO-87058 -->*  [GitHub-11230](https://github.com/magento/magento2/issues/11230) 

Unit test fails after fresh installation



### Theme

<!--- MAGETWO-88973 -->* Customers can now successfully close full-screen zoomed product images displayed on an iPhone 4s, 5s, 6, or 6s with the Safari browser. Previously, if a customer chose full-screen zoom for any product image, he could not close the full-screen zoom.

<!--- MAGETWO-88264 -->* Remove forced setting of cache_lifetime to false in constructor and set default cache_lifetime to 3600
loadCache for Block Magento\Theme\Block\Html\Footer dont work
Steps to reproduce
Disable Full page caching in Backend
Reload the Category Page

Expected result
`\Magento\Framework\View\Element\AbstractBlock::_loadCache
$cacheData = $this->_cache->load($cacheKey); return a result for the second Page reload`

Actual result
`\Magento\Framework\View\Element\AbstractBlock::_loadCache
$cacheData = $this->_cache->load($cacheKey); return false`


[GitHub-13595](https://github.com/magento/magento2/issues/13595)

<!--- ENGCOM-959 -->* 224 86448

<!--- ENGCOM-775 -->* 224 88235



### Translation and locales

<!---MAGETWO-82650 -->* The `<![CDATA[]]>` statement in `system.xml` now works as expected. *Fix submitted by [Nickolas Malyovanets](https://github.com/nmalevanec) in pull request [11679](https://github.com/magento/magento2/pull/11679)*. [GitHub-7767](https://github.com/magento/magento2/issues/7767)

<!---MAGETWO-71380 -->* The JavaScript translation for validation messages now work for customer account pages. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-5820](https://github.com/magento/magento2/issues/5820)

<!--- MAGETWO-71380-->* Messages on password strength are now translatable. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-5509](https://github.com/magento/magento2/issues/5509)

<!--- 71380-->* The JavaScript translation regex no longer leads to unexpected results and untranslatable strings. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-7403](https://github.com/magento/magento2/issues/7403)

<!--- MAGETWO-71380-->* All messages in Customer Account Create are now translatable. Previously, warning messages about password validation appeared in locale language only. *Fix submitted by [Anton Evers](https://github.com/ajpevers) in pull request [10445](https://github.com/magento/magento2/pull/10445)*. [GitHub-9967](https://github.com/magento/magento2/issues/9967)


<!-- MAGETWO-93708 -->* We've added  client-side caching of `js-translation.js`.

<!-- MAGETWO-94119 -->* copy from 227 94075

<!--- ENGCOM-1055 -->* 2115 1908


<!--- ENGCOM-2041 -->* 226 2020

<!--- ENGCOM-2212 -->* 226 2193

<!--- ENGCOM-2400 -->* 224 87575

<!-- MAGETWO-87066 -->*  [GitHub-7582](https://github.com/magento/magento2/issues/7582)  

Payment methods in payments title in wrong language (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team)


<!-- MAGETWO-87066 -->*  [GitHub-8958](https://github.com/magento/magento2/issues/8958)

Hint mistake in english language (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 

<!-- MAGETWO-87066 -->*  [GitHub-10317](https://github.com/magento/magento2/issues/10317)

Region is being overridden when changing from a required-state country to one that is not required (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team)


### UI

<!-- MAGETWO-93715-->*  Magento no longer sends duplicate delete requests as a result of an unstable Internet connection. Previously, unintentional mass deletion of products sometimes occurred as a result of an unstable Internet connection. 

<!-- MAGETWO-91848 -->* As you type additional characters into the text field for a product's custom option, the hint showing the number of characters left before reaching the maximum now decreases as expected.

<!-- MAGETWO-83412 -->* copy from 222 81970

<!--- ENGCOM-1457 -->* 226 2007


<!--- ENGCOM-1541 -->* 


<!--- ENGCOM-2219 -->* 226 2155

<!--- ENGCOM-2243 -->* 226 1542

<!--- ENGCOM-2340 -->* 226 2288

<!--- ENGCOM-2878 -->* 226 1606

<!--- ENGCOM-2690 -->* 2116 2691

<!--- ENGCOM-2824 -->* 227 2812

<!--- ENGCOM-2839 -->* 227 2834

<!--- ENGCOM-2918 -->* 227 2901

<!--- ENGCOM-2861 -->* 227 2291

<!--- ENGCOM-2323 -->* 2111 83320

<!--- ENGCOM-2649 -->* 227 2607

<!--- ENGCOM-1810 -->* 226 1679

<!---MAGETWO-82721 -->*

<!---MAGETWO-87066 -->*  [GitHub-9920](https://github.com/magento/magento2/issues/9920)

stripped-min-length Validation via UI Component Fails with "special" characters (fixed in magento-engcom/magento2ce#1282 by @magento-engcom-team) 


<!---MAGETWO-87531 -->*  [GitHub-12828](https://github.com/magento/magento2/issues/12828)

Uncaught Error: Script error for: trackingCode error on every frontend page


<!---MAGETWO-87153 -->*  [GitHub-6113](https://github.com/magento/magento2/issues/6113)


 Validate range-words in Form component (UI Component) 


### URL rewrites

<!--- MAGETWO-85026-->* Magento now sets the value of `Store_Code` from the current store when this information is included in a URL. *Fix submitted by [Oscar Recio](https://github.com/osrecio) in pull request [12545](https://github.com/magento/magento2/pull/12545)*. [GitHub-12450](https://github.com/magento/magento2/issues/12450)

<!--- MAGETWO-82310-->* Magento now loads *urlrewrite* router before the Magento base router. Previously, the Magento custom URL rewrites functionality did not work when you added an additional redirection (for example, a custom redirection from `/customer/account/create` to another page). *Fix submitted by [Marc Rodriguez](https://github.com/mrodespin) in pull request [11471](https://github.com/magento/magento2/pull/11471)*. [GitHub-10231](https://github.com/magento/magento2/issues/10231)

<!--- MAGETWO-88091-->* Switching store views now works as expected. Previously, under some conditions, users were redirected to a 404 page.[GitHub-5416](https://github.com/magento/magento2/issues/5416)

<!--- MAGETWO-88091-->* You can now reset a form by clicking **Reset** in **Marketing > SEO & Search > URL Rewrites**. [GitHub-10459](https://github.com/magento/magento2/issues/10459)

<!-- MAGETWO-91808 -->* Categories of the Main menu in the different store view are now updated when Varnish is enabled. 

<!--- MAGETWO-90798 -->* Magento no longer throws a 404 error when a customer navigates from the Catalog page of the default store to a custom Catalog page on a different store. 

<!--- MAGETWO-71407 -->* copy from 221 80192

<!--- ENGCOM-1210 -->* 226 1283


### Visual Merchandiser

<!--- MAGETWO-87846 -->* Visual Merchandiser now includes website scope when displaying the correct prices and availability of configurable products.

<!--- MAGETWO-72861 -->* We’ve improved the performance of editing or saving products in large categories (more than 18,000 products per category).




### Web API

<!--- MAGETWO-82315 -->* When you use REST to update an existing product, Magento assists the update only to the websites that the was assigned to pre-update. Previously, updating a product using the REST API (`PUT /rest/all/V1/products/example_sku`) assigned the product update to all websites automatically. *Fix submitted by [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4) in pull request [11443](https://github.com/magento/magento2/pull/11443)*. [GitHub-11324](https://github.com/magento/magento2/issues/11324)

<!--- MAGETWO-90147 -->* When you create a credit memo comment with `POST /V1/creditmemo/:id/comments`, Magento now sends  credit memo update emails as expected. Previously,  Magento did not send this email, and no other transaction emails were sent to the customer.

<!--- MAGETWO-84319 -->* Duplicate Shipment getting created

Duplicate shipments are no longer created when creating shipments with bundled products via API 

When creating shipments via the API in certain scenarios (mainly with bundled products) duplicate shipments can be created.

<!--- MAGETWO-64316 -->*  When you create a product with `POST V1/products` whose name matches an existing product, Magento changes the URL key of the new product to a unique value. This matches the behavior when you create a product in Admin. [GitHub-8188](https://github.com/magento/magento2/issues/8188)


<!--- MAGETWO-91540 -->*  Product searches using `GET V1/products` return extension_attributes for configurable products as expected.

<!--- MAGETWO-91568 -->*  You can now include custom attributes when filtering the responses of REST calls.

<!--- MAGETWO-94207 -->*  Magento now returns a 404 error and includes a descriptive error message when a  REST search is performed on a non-existent cart.

<!--- MAGETWO-81910 -->*  copy from 222 81904


<!--- MAGETWO-82315 -->* 224 82313

<!--- ENGCOM-2066 -->* 226 1720

<!-- MAGETWO-87057 -->* [GitHub-8846](https://github.com/magento/magento2/issues/8846) 

Attribute option value uniqueness is not checked if created via REST Api 

<!--- MAGETWO-87152 -->* [GitHub-11669](https://github.com/magento/magento2/issues/11669) 

  API salesRefundInvoiceV1 does no save invoice ID on credit memo


### Wishlist

<!--- MAGETWO-85627 -->* Magento now displays an error message if you try to add products to a wishlist without first logging in. *Fix submitted by [Pieter Cappelle](https://github.com/PieterCappelle) in pull request [12681](https://github.com/magento/magento2/pull/12681)*. 

<!--- MAGETWO-86101 -->* Add product ID and SKU to wishlist customer data



  *Fix submitted by [James Halsall](https://github.com/jameshalsall) in pull request [12896](https://github.com/magento/magento2/pull/12896)*. 


 This adds a product's ID and SKU to the wishlist customer data stored in local storage.



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


