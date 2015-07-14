---
layout: default 
group: install
subgroup: T_SampleData
title: Optional Magento sample data
menu_title: Optional Magento sample data
menu_node: parent
menu_order: 1 
github_link: install-gde/install/sample-data.md
--- 

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: setup\view\magento\setup\customize-your-store.phtml owned by Ogres -->


#### Contents

*	<a href="#instgde-install-sample-intro">Introduction to Magento sample data</a>
*	<a href="#instgde-install-sample-enable-before">Enable sample data before you install the Magento software</a>
*	<a href="#instgde-install-sample-enable-after">Enable sample data after you install the Magento software</a>
*	<a href="#installgde-install-sample-old">Sample data for earlier Magento versions</a>
 

<h2 id="instgde-prereq-sample-intro">Introduction to Magento sample data</h2>
This section discusses how to enable you to install the optional Magento sample data. To enable sample data, you must update `composer.json` in the Magento root installation directory to provide the location of the sample data package. After that you can either run the Magento software installer or you can run a script to install the sample data.

Sample data is versioned like Magento code. Before you begin, you can either:

*	Find the exact version you want at <a href="http://packages.magento.com/#magento/sample-data" target="_blank">packages.magento.com</a>.
*	Install the latest version using Composer <a href="https://getcomposer.org/doc/01-basic-usage.md#next-significant-release-tilde-and-caret-operators-" target="_blank">next significant release syntax</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento 2 versions 0.74.0-beta9 and later require you to install only one sample data package instead of two. This package is currently named <code>"magento/sample-data": "0.74.0-beta9"</code>. Be sure to confirm the current version at <a href="http://packages.magento.com/#magento/sample-data" target="_blank">packages.magento.com</a>.</p>
<p>If you're installing sample data for an earlier version, see <a href="#installgde-install-sample-old">Sample data for earlier Magento versions</a>.</p></span>
</div>

<h2 id="instgde-install-sample-enable-before">Enable sample data before you install the Magento software</h2>
This section discusses how to install optional sample data *before* you install the Magento software. If you've already installed, see <a href="#instgde-install-sample-enable-after">Enable sample data after you install the Magento software</a>.

{% include install/sample-data.html %} 

Continue with one of the following topics:

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Setup Wizard installation</a>


<h2 id="instgde-install-sample-enable-after">Enable sample data after you install the Magento software</h2>
This section discusses how to install optional sample data *after* you install the Magento software. If have not installed yet, see <a href="#instgde-install-sample-enable-before">Enable sample data before you install the Magento software</a>.
 
{% include install/sample-data.html %}

To install the sample data, enter the following commands in the order shown:

	<path to Magento 2 bin dir>/magento setup:upgrade
	<path to Magento 2 bin dir>/magento sampledata:install <your Magento administrator user name>

For example,

	/var/www/magento2/bin/magento setup:upgrade
	/var/www/magento2/bin/magento sampledata:install admin

<h2 id="installgde-install-sample-old">Sample data for earlier Magento versions</h2>
{% include install/sample-data-note.html %}
