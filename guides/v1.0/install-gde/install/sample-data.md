---
layout: default
group: install
subgroup: R_Installation
title: Enable optional Magento sample data
menu_title: Enable optional Magento sample data
menu_order: 10
github_link: install-gde/install/sample-data.md
---

#### Contents

*	<a href="#instgde-install-sample-intro">Introduction to Magento sample data</a>
*	<a href="#instgde-install-sample-enabling">Enable the use of sample data</a>
*   <a href="#instgde-install-sample-after">Complete the sample data installation</a>

<h2 id="instgde-prereq-sample-intro">Introduction to Magento sample data</h2>
This section discusses how to enable you to install the optional Magento sample data. If you don't wish to use sample data, skip this topic and continue with <a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>.

Magento sample data uses the Luma theme to provide you with a sample storefront, complete with products, customers, products, CMS pages, and so on. You can use it to get the feel of a Magento storefront.

To enable sample data, you must edit `composer.json` in the Magento root installation directory to provide the location of the sample data package.

<h2 id="instgde-install-sample-enabling">Enable the use of sample data</h2>

To enable sample data, you must:

1.  Edit `composer.json` to reference the repository and packages that specify the Magento sample data.
2.  Run `composer update` to get the sample data packages.
3.  Run the Magento 2 installer to update the database.

<div class="bs-callout bs-callout-info" id="info">
   <p>The sample data Composer package recently changed. If you're using an alpha or beta1 Magento 2 build, we strongly recommend you update to a beta2 build to get the latest code.</p> 
<p>To upgrade, see <a href="{{ site.gdeurl }}install-gde/install/install-cli.html#instgde-install-magento-reinstall">Reinstalling the Magento software</a>.</p></div>

To edit `composer.json`:

1.  Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apacheweb">web server user</a> or as a user with `root` privileges.
2.  Change to your Magento installation directory.
3.  Open `<your Magento install dir>/composer.json` in a text editor.
4.  Search for a `"repositories":` section.

    If you have one, add the following block (without `"repositories":`) to it.
    
    If you have no `"repositories":` section, add one before the `"require":` section as follows:

        "repositories": [
            {
                "type": "composer",
                "url": "http://packages.magento.com/"
            }
            ],

    <div class="bs-callout bs-callout-info" id="info">
        <p>The keyword <code>repositories</code> must align with the keyword <code>require</code>.</p> </div>

5.  Add one of the following to the `"require":` section:

    *   Recent build (`beta2` from mid-December 2014, or later):

            "magento/sample-data": "0.42.0-beta2",
            "magento/sample-data-media": "~0.42.0-beta1",

    *   Older build (`alpha` or `beta1`):

            "magento/sample-data": "0.42.0-beta1",        
            "magento/sample-data-media": "0.42.0-beta1",

    <div class="bs-callout bs-callout-info" id="info">
        <p>Valid JSON requires that:
            <ul><li>The line before the preceding end with a comma. If you place the preceding block in the middle of the section, it must end with a comma as shown in the preceding.</li>
            <li>The names of all values in a section must align.</li></ul> </div>

6.  Save your changes to `composer.json` and exit the text editor.

<h2 id="instgde-install-sample-after">Complete the sample data installation</h2>
After you've installed the Magento software or run `composer install`, you can install the sample data as follows:

1.  Update `composer.json` as discussed in <a href="#instgde-install-sample-enabling">Enable the use of sample data</a>.
2.  As the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>:

    a.  Change to your Magento installation directory (for example, `/var/www/magento2`).

    b. Enter `composer update`

    <div class="bs-callout bs-callout-info" id="info">
        <p>The following error displays if you have run <code>composer update</code> recently. The error is normal; you can continue the installation.</p> 
        <pre>[ErrorException]
  Target ./dev/tools/Magento/Tools/SampleData/Installer.php already exists (set extra.magento-force to override)</pre></div>

3.  Run the Magento setup software (if you've already installed Magento, the setup software updates the database):

    *   <a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Install Magento software using the command line</a>
    *   <a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install Magento software using the Setup Wizard</a>


#### Next step

After running the setup software, see <a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>
