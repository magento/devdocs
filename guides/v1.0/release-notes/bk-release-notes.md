---
layout: default
group: release-notes
title: Release Notes
menu_title: Highlights
menu_order: 1
menu_node: 
github_link: release-notes/bk-release-notes.md
---

<h2 id="highlights">Highlights</h2>

Welcome to Magento 2.0 documentation! And welcome to Magento 2.0!

For this first release of Magento 2.0, here is a summary of some important
features of the release.

<h3 id="highlights-devrc">Highlights of this release</h3>

*   Services are mutable
    *   Changed from Builders to Factory Pattern
    *   Interfaces now have setters
    *   Repository Objects can now be manipulated and passed
*   Services can pass extended attributes as an object rather than an array
    *   Easily extend existing service with additional data objects
    *   No generated code
*   Support for Varnish 4
*   Services can be exposed as a web API supporting both SOAP & REST
*   The version is part of the URL
*   Extended attribute objects are marked as optional in WSDL
*   <a href="{{ site.gdeurl }}release-notes/changes.html#change-devrc-unit">Unit tests</a> are now located in the module's directory
*   Backward compatibility policy; marked Public APIs coming next quarter
    *   Follows Semantic Versioning 2.0.0
    *   Backward compatible for classes and methods annotated with `@api`
    *   Backward compatible for all client users within minor and patch core updates
    *   We'll use  `@deprecated` to notify you of removal on the next major change
*   Refactored API code for:
    *   CatalogInventory module
    *   Tax module
*   Removed the `Magento_Core` module; moved functions to other modules


<h3 id="highlights-tech">Technology stack</h3>

-   PHP and MySQL. Magento 2 supports PHP 5.5 and 5.6, and MySQL 5.6. See [System
    requirements][1].

    [1]: <{{ site.gdeurl }}install-gde/system-requirements.html>

-   HTML5. The reference themes available out of the box are responsive and
    based on HTML5. See [Themes][2] and [Responsive web design.][3]

    [2]: <{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html>

    [3]: <{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_overview.html>

-   CSS3, and CSS preprocessing. The reference themes use CSS3. Magento 2 uses
    the LESS CSS pre-processor, or you can add support for Sass and Compass. See
    [Cascading style sheets][4], and [CSS pre-processor.][5]

    [4]: <{{ site.gdeurl }}frontend-dev-guide/css-topics/css-overview.html>

    [5]: <{{ site.gdeurl }}frontend-dev-guide/css-topics/css-preprocess.html>

-   jQuery. Magento 2 uses jQuery as the primary JavaScript library. Magento
    ships with an extensible set of jQuery widgets. See [Magento JQuery
    widgets][6].

    [6]: <{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widgets-about.html>
-   RequireJS. The RequireJS library helps load JS resources on demand to
    improve page load times. It's also intended to encourage modular design of
    frontend components. See [JavaScript resources][6].

    [6]: <{{ site.gdeurl }}config-guide/config/js-resources.html>

-   PSR Compliance. PSR compliance standardizes the use of PHP to allow
    different sets of code libraries to work together. See [PHP coding
    standard][7].

    [7]: <{{ site.gdeurl }}coding-standards/code-standard-php.html>

-   Modular architecture. Define your own set of modules. Cross-module
    dependencies are reduced, and interfaces among multiple extensions are
    cleaner and more discrete. See [What is Magento?][8], [Magento as a modular
    system][9], and [Service contracts][10].

    [8]: <{{ site.gdeurl }}architecture/arch_whatis.html>

    [9]: <{{ site.gdeurl }}architecture/arch_asmodsys.html>

    [10]: <{{ site.gdeurl }}extension-dev-guide/service-contracts/service-contracts.html>

-   Testing framework. Magento 2 includes a pre-packaged series of test scripts,
    including tests for integration, units, static environments, functional
    areas, and performance criteria. See [Magento Test Framework][11], and the
    [JavaScript unit tests][12].

    [11]: <https://github.com/magento/mtf/blob/master/docs/install-config.md>

    [12]: <{{ site.gdeurl }}extension-dev-guide/test/test_js-unit.html>



<h2 id="help">Help improve this documentation</h2>

Magento 2.0 product documentation is hosted on GitHub, and we welcome your
feedback there.

Click the **Edit this page on GitHub** link at the top of a documentation page to
open the file in our GitHub repository, where you are invited to suggest changes
by creating pull requests, or open a discussion by creating an issue.
Feel free to contact the documentation team directly at
<a href="mailto:DL-Magento-Doc-Feedback@ebay.com">DL-Magento-Doc-Feedback@ebay.com</a>
