---
layout: default
group: install
subgroup: R_Installation
title: Enable optional Magento sample data
menu_title: Enable optional Magento sample data
menu_order: 4
github_link: install-gde/install/sample-data.md
---

#### Contents

*	<a href="#instgde-install-sample-intro">Introduction to Magento sample data</a>
*	<a href="#instgde-install-sample-enabling">Enable the use of sample data</a>
*   <a href="#instgde-install-sample-after">Enable sample data after installing the Magento software</a>

<h2 id="instgde-prereq-sample-intro">Introduction to Magento sample data</h2>
This section discusses how to enable you to install the optional Magento sample data. If you don't wish to use sample data, skip this topic and continue your installation. However, you can optionally install the sample data at a later time if you wish.

Magento sample data uses the Luma theme to provide you with a sample storefront, complete with products, customers, products, CMS pages, and so on. You can use it to get the feel of a Magento storefront.

To enable sample data, you must edit `composer.json` in the Magento root installation directory to provide the location of the sample data package.

<h2 id="instgde-install-sample-enabling">Enable the use of sample data</h2>

To edit `composer.json`:

1.  Log in to your Magento server as the web server user or as a user with `root` privileges.
2.  Change to your Magento installation directory.
3.  Open `composer.json` in a text editor.
4.  Search for a `"repositories":` section.

    If you have one, add the following block (without `"repositories":`) to it.
    
    If you have no `"repositories":` section, add one as follows before the `"require":` section:

        "repositories": [
            {
                "type": "composer",
                "url": "http://packages.magento.com/"
            }
        ],

5.  Add the following to the `"require":` section:

        "magento/sample-data": "0.42.0-beta1",        
        "magento/sample-data-media": "0.42.0-beta1

    <div class="bs-callout bs-callout-info" id="info">
        <p>Valid JSON requires the line before the preceding end with a comma. If you place the preceding block in the middle of the section, it must end with a comma. </div>

<h2 id="instgde-install-sample-after">Enable sample data after installing the Magento software</h2>
If you've already installed the Magento software, you can still use sample data as follows:

1.  Update `composer.json` as discussed in <a href="#instgde-install-sample-enabling">Enable the use of sample data</a>.
2.  As the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>, run `composer update` from your Magento installation directory (for example, `/var/www/magento2`).
3.  Install the Magento software again.


#### Next step

*   <a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>
*   <a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Install Magento software using the command line</a>