---
layout: default
group: release-notes
title: Release Notes
menu_title: Changes
menu_node: 
menu_order: 3
github_link: release-notes/changes.md
---

<h2 id="changes">Changes in this release</h2>

*   <a href="#change-devbeta-uninstall">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>
*   <a href="#change-devbeta-sampledata">Magento sample data is available only if you update composer.json</a>

<h3 id="misc">Miscellaneous changes</h3>

*	Refactored Catalog and related module to use mutable data object interface
*	Refactored Sales and related modules to use mutable data interfaces
* LESS Compiler
*    Added automatic update in "pub/static" of changed "css/js/images" after materialization
*    Variable names are renamed to meet Magento Code Standards
*    Added client-side LESS files compilation to reduce page load time in developer mode
*	Add to cart operation became asynchronous and doesn`t reload page (AJAX call)
*   JS template engine became unified on Backend and Frontend
*   Increased unit test coverage for Magento/Indexer module
*   Version number info became accessible at a public URL
*   Existing Builders were replaced with DataFactories in Customer and Tax modules
*   Refactored controller actions in the Checkout and CMS modules
*   Increased coverage with static tests for `.phtml` files
*   Moved Cookie related functionality from `Theme` and `Core` modules into a new `Cookie` module
*   Moved minfication configuration settings to the `View` library level


<h3 id="framework">Changes to the Magento framework</h3>
*    Moved/refactored Magento\IO\Sftp adapter into Filesystem library
*    Removed Magento IO library
*    Implemented Dynamic Types Binding in SOAP
*    Implemented Extensible Attributes generation
*    Improved Web API Related Code Quality
*    Moved Specific Helper Components From the Magento/Core Module to Magento/Framework
*    Replaced \Magento\Framework\Model\Exception with LocalizedException
*    Replaced obsolete exceptions
*    Config components are moved to new Magento_Config module
*    Variables components are moved to new Magento_Variable module
*    Preferences, shared instance creation and compiled factory accelerated by 3%
*    Fixed "HEADERS ALREADY SENT" error when controller action outputs directly
*    Layout Models are moved from Core module to appropriate modules
*    View components are moved from Core to Theme module
*    Rest of theme related configuration files are refactored
*    StoreManagerInterface is moved from Framework to App folder
*    ZF1 controller libraries are updated
*    Class definitions in multi-tenant mode are removed
*    DI configuration became more optimal: OM cached configuration uses the general pattern for all argument types in application
*    Varnish 4 configuration is updated
*    Layout Processing became more fast
*    HTML response minified
*    App Components and Specific Helper Components are moved from the Magento_Core Module
*   Added `setCustomAttribute` and `setCustomAttributes` methods to `ExtensibleDataInterface`
*   Added setter methods to data object interfaces
*   Replaced `Builders` with `Factories`
*   Added `DataObjectHelper.php` which contains the common set of methods of all builders
*   Refactored `__()` to return `Phrase` object
*   Allowed usage of `LocalizedException` on the framework's library level
*   Added expiration/lifetime management of frontend resources
*   Unified MTF configurations format for Framework, TestCase variations and TestCase scenario configurations

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



