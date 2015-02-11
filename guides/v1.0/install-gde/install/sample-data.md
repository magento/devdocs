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
  
#### Contents

*	<a href="#instgde-install-sample-intro">Introduction to Magento sample data</a>
*	<a href="#instgde-install-sample-enabling">Enable the use of sample data</a>
*   <a href="#instgde-install-sample-after">Complete the sample data package installation</a>

<h2 id="instgde-prereq-sample-intro">Introduction to Magento sample data</h2>
This section discusses how to enable you to install the optional Magento sample data. If you don't wish to use sample data, skip this topic and continue with:

*   <a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>
*   <a href="{{ site.gdeurl }}install-gde/install/install-web.html">Setup Wizard installation</a>
*   <a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>

Magento sample data uses the Luma theme to provide you with a sample storefront, complete with products, customers, products, CMS pages, and so on. You can use it to get the feel of a Magento storefront.

To enable sample data, you must edit `composer.json` in the Magento root installation directory to provide the location of the sample data package.

<h2 id="instgde-install-sample-enabling">Enable the use of sample data</h2>

To enable sample data, you must:

1.  Find the current versions of the `magento/sample-data` and `magento/sample-data-media` on <a href="http://packages.magento.com/#magento/sample-data" target="_blank">packages.magento.com</a>.
2.  Run the `composer package` and `composer require` commands to update `composer.json`.
3.  Run the Magento 2 installer to update the database.

<div class="bs-callout bs-callout-info" id="info">
   <p>The sample data Composer package recently changed. If you're using an alpha or beta1 Magento 2 build, we strongly recommend you update to a beta2 build to get the latest code.</p> 
<p>To update, see <a href="{{ site.gdeurl }}install-gde/install/install-cli.html#instgde-install-magento-update">Updating the Magento software</a>.</p></div>

To update `composer.json`:

1.	Go to <a href="http://packages.magento.com/#magento/sample-data" target="_blank">packages.magento.com</a> and write down suitable versions of `magento/sample-data` and `magento/sample-data-media` (typically, you should choose the most recent version).
1.  Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apacheweb">web server user</a> or as a user with `root` privileges.
2.  Change to your Magento installation directory.
3.  Enter the following command to reference Magento packages in `composer.json`:

        composer config repositories.magento composer http://packages.magento.com

3.  Enter the following command to require the current version of the sample data and media packages:

		composer require magento/sample-data:<version> magento/sample-data-media:<version> -dev

	where you found `<version>` in step 1.

	For example,

        composer require magento/sample-data:0.42.0-beta7 magento/sample-data-media:0.42.0-beta7 -dev

 4.  Wait while dependencies are installed.

5.  To optionally install sample data only if the Magento software is already installed, enter:

        php dev/tools/Magento/Tools/SampleData/install.php –admin_username=<user name>

6.  If you haven't already installed, see the following sections:

    *   <a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>
    *   <a href="{{ site.gdeurl }}install-gde/install/install-web.html">Setup Wizard installation</a>
