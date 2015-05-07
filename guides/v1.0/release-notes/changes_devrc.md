---
layout: default
group: release-notes
title: Release Notes
menu_title: Changes in 0.74-beta1 (Developer RC) 
menu_node: 
menu_order: 3
github_link: release-notes/changes_devrc.md
---

<h2 id="changes-contents">Contents</h2>

*   <a href="#change-devrc-unit">Unit tests now located in module directories</a>
*   <a href="#change-devbeta-uninstall">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>
*   <a href="#change-devbeta-sampledata">Magento sample data is available only if you update composer.json</a>
*	<a href="#other">Other changes in this release</a>


<h2 id="change-devrc-unit">Unit tests now located in module directories</h2>
For you to run PHPUnit-based tests, you must first run `<your Magento root dir>/composer install` to download the PHPUnit component and create the `vendor/bin/phpunit` executable. 

This way, you no longer have to download PHPUnit for your operating system; you can use the one provided with Magento instead.

See the following sections for more information:

*	<a href="#change-devrc-unit-move">Relocate unit test code</a>
*	<a href="#change-devrc-unit-run">Run unit tests</a>

<h3 id="change-devrc-unit-move">Relocate unit test code</h3>
Code for unit tests must be located in a directory named `Test/Unit` in the module's directory structure. A sample follows:

	__/<Magento root dir>
	  |__/app/code/Magento/Catalog
	    |__/Controller
	    |__/Model
	    |__/Test
	      |__/Unit
	        |   |-- SomeUnitTest.php

To transition your existing tests to using the new directories, we recommend the following:

1. Resolve any conflicts between your working branch and the master or develop branch.
2. Refactor your tests by moving them to the directories.  

	Be sure to update the namespace of the test.

3. Fix any references to the `TestFramework` files because they moved from `Magento\TestFramework\` to `Magento\Framework\TestFramework\Unit\`

4. Fix any references to classes that were in the same namespace as your tests.  

	Because the test namespace changed, you must add an alias for the old namespace.

<h3 id="change-devrc-unit-run">Run unit tests</h3>
To run *all* unit tests, enter the following commands in the order shown:

	cd <your Magento install dir>/dev/Test/Unit
	../../../vendor/bin/phpunit .

	cd <your Magento install dir>/dev/Test/Integration
	../../../vendor/bin/phpunit .


*	This should automatically discover any tests as defined by that phpunit configuration file (which might in turn refer to a test suite implementation)
*	That test suite implementation searches for corresponding tests in known component locations

To run *individual* tests, enter the following commands in the order shown:

	cd <component root dir>
	../bin/phpunit Tests // run defined component tests

	cd <your Magento install dir>/app/code/Magento/Catalog/Test/Integration
	../../../../../../vendor/bin/phpunit . // run integration tests defined for the Magento_Catalog module


<h2 id="change-devbeta-uninstall">Updating to version 0.42.0-beta11 or later from beta10 or earlier</h2>
This change applies to the following situation only:

*   You currently have version 0.42.0-beta10 or earlier
*   You're updating to version 0.42.0-beta11 or later

<div class="bs-callout bs-callout-info" id="info">
    <p>As a result of this change, you must first <em>uninstall</em> the Magento software and then reinstall it.</p>
</div>
{% include install/versionbeta10upgr.html %}

For details, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html#instgde-install-magento-updatebeta11">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>

<h2 id="change-devbeta-sampledata">Magento sample data is available only if you update composer.json</h2>

To install the optional Magento 2 sample data, you must update `composer.json`, run `composer update`, and run the Magento 2 installer to update the database.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento 2 versions 0.42.0-beta10 and later require you to install only one sample data package instead of two. This package is currently named <code>"magento/sample-data": "0.42.0-beta10"</code>. Be sure to confirm the current version at <a href="http://packages.magento.com/#magento/sample-data" target="_blank">packages.magento.com</a>.</p>
<p>If you're installing sample data for an earlier version, see <a href="#installgde-install-sample-old">Sample data for earlier Magento versions</a>.</p></span>
</div>

See <a href="{{ site.gdeurl }}/install-gde/install/sample-data.html">Enable optional Magento sample data</a>.

<h2 id="other">Other changes in this release</h2>
For other changes in this release, see the <a href="{{ site.mage2000url }}CHANGELOG.md#0740-beta1" target="_blank">changelog</a>.