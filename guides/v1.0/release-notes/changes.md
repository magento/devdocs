---
layout: default
group: release-notes
title: Release Notes
menu_title: Changes in this release
menu_node: 
menu_order: 3
github_link: release-notes/changes.md
---

<h2 id="changes-contents">Contents</h2>

*   <a href="#change-devbeta-uninstall">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>
*   <a href="#change-devbeta-sampledata">Magento sample data is available only if you update composer.json</a>
*	<a href="#admin">Improvments to the Magento Admin and Setup Wizard</a>
*	<a href="#framework">Changes to the Magento framework</a>
*	<a href="#misc">Miscellaneous changes</a>

<h3 id="change-devbeta-uninstall">Updating to version 0.42.0-beta11 or later from beta10 or earlier</h3>
This change applies to the following situation only:

*   You currently have version 0.42.0-beta10 or earlier
*   You're updating to version 0.42.0-beta11 or later

<div class="bs-callout bs-callout-info" id="info">
    <p>As a result of this change, you must first <em>uninstall</em> the Magento software and then reinstall it.</p>
</div>
{% include install/versionbeta10upgr.html %}

For details, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html#instgde-install-magento-updatebeta11">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>

<h3 id="change-devbeta-sampledata">Magento sample data is available only if you update composer.json</h3>

To install the optional Magento 2 sample data, you must update `composer.json`, run `composer update`, and run the Magento 2 installer to update the database.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento 2 versions 0.42.0-beta10 and later require you to install only one sample data package instead of two. This package is currently named <code>"magento/sample-data": "0.42.0-beta10"</code>. Be sure to confirm the current version at <a href="http://packages.magento.com/#magento/sample-data" target="_blank">packages.magento.com</a>.</p>
<p>If you're installing sample data for an earlier version, see <a href="#installgde-install-sample-old">Sample data for earlier Magento versions</a>.</p></span>
</div>

See <a href="{{ site.gdeurl }}/install-gde/install/sample-data.html">Enable optional Magento sample data</a>.

<h3 id="admin">Improvements to the Magento Admin and Setup Wizard</h3>
*    Compressed and resized images
*    Added new base styles for the Admin re-design
*    Added the WAI-ARIA attributes are to the Search Autocomplete on the storefront
*    Added visual style for the 'skip to content' attribute on the storefront 
*    Fixed the style of persistent login messages on the storefront for all themes 
*    Fixed the style of scrolling for Categories with long names in the Admin 
*    Fixed the "css/print.css" file path on the storefront pages for all themes 
    *	You can enable or disable modules during installation using either the CLI install or the Setup Wizard.
*	<a href="http://www.w3.org/WAI/intro/aria.php" target="_blank">WAI-ARIA</a> attributes are added to storefront Layered Navigation and Customer Dropdown, Frontend Product Page Tabs, Frontend Cart Summary collapsible panels, Frontend forms and notifications, Frontend Checkout pages
*    Updated the design of Enable Cookies CMS page

<h3 id="framework">Changes to the Magento framework</h3>
*    Moved/refactored the `Magento\IO\Sftp` adapter into the Filesystem library
*    Removed the Magento IO library
*    Implemented Extensible Attributes generation
*    Moved Specific Helper Components From `Magento/Core` to `Magento/Framework`
*    Replaced `\Magento\Framework\Model\Exception` with `LocalizedException`
*    Configuration components moved to new `Magento_Config` module
*    Variables components are moved to new `Magento_Variable` module
*    Preferences, shared instance creation and compiled factory accelerated by 3%
*    Fixed "HEADERS ALREADY SENT" error when controller action outputs directly
*    Layout Models are moved from Core module to appropriate modules
*    View components are moved from Core to Theme module
*    Rest of theme related configuration files are refactored
*    `StoreManagerInterface` is moved from `Framework` to `App` directory
*    ZF1 controller libraries are updated
*    HTML response minified
*   Added `setCustomAttribute` and `setCustomAttributes` methods to `ExtensibleDataInterface`
*   Added setter methods to data object interfaces
*   Replaced `Builders` with `Factories`
*   Added `DataObjectHelper.php` which contains the common set of methods of all builders
*   Refactored `__()` to return `Phrase` object
*   Allowed usage of `LocalizedException` on the framework's library level
*   Added expiration/lifetime management of frontend resources
*   Unified Magento Test Framework configurations format for Framework, TestCase variations and TestCase scenario configurations
*   JavaScript test suites divided into frontend, backend and lib suites 
*   Implemented image compression on server side upload
*   Implemented storefront page resources sorting 
*   Removed the Magic __call method usage in templates
*   Introduced Jasmine + PhantomJS JavaScript testing infrastructure
*    Refactored and covered with tests the classes with high CRAP value (>50) 
*    Moved Theme Management changes, Design changes, Design\Backend modules, and Observer components from the Core module to the Theme module
*    Moved Debug Hints models from the Core module to the newly added Developer module
*    Moved URL components, Factory, and EntityFactory from the Core module to the Magento Framework

<h3 id="misc">Miscellaneous changes</h3>
*	Refactored Catalog and related modules to use mutable data object interfaces
*	Refactored Sales and related modules to use mutable data interfaces
*    Added client-side LESS files compilation to reduce page load time in developer mode
*	Adding items to a cart no longer causes a page reload because it's now an Ajax call
*   Existing Builders were replaced with DataFactories in Customer and Tax modules
*   Refactored controller actions in the Checkout and CMS modules
*   Increased coverage with static tests for `.phtml` files
*   Moved Cookie related functionality from `Theme` and `Core` modules to a new `Cookie` module
*   Moved minfication configuration settings to the `View` library level
    Added Varnish 4 support 
*   Added CSS minification 
*    Implemented caching for WebAPI configuration 
*    Refactored controller actions in the Sales module 
*    Refactored controller actions in the Customer module 
*    Refactored API code for the CheckoutAgreements module 
*    Refactored API code for the GiftMessage module 
*    Refactored API for the Checkout module 
*    Implemented Sales Quote as a standalone Magento module
*    Performed custom EAV entities code and DB tables cleanup
*    Eliminated remnants of the Core module:
     *    Moved Application Emulation from the `Magento_Core` module to the `Magento_Store` module
     *    Moved Validator Factory from the `Magento_Core` module to the Magento Framework
*    Added PHPMD and PHPCS annotations to the codebase
*   Removed the ability to process online payments