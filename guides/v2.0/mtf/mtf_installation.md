---
layout: default
group: mtf-guide
subgroup: B_Installation
title: Installation of the Magento Testing Framework Entities
menu_title: INSTALLATION
menu_node: parent
menu_order: 2
github_link: mtf/mtf_installation.md
---

Well, you are on the way to install the Magento testing Framework!

Follow the next three steps:

- <a href="#mtf_install_pre">Check pre-installation conditions</a>

- <a href="#mtf_install_perform">Perform the installation</a>

- <a href="#mtf_install_check">Check the installation</a>

<h2 id="mtf_install_pre">Check pre-installation conditions</h2>

<h3 id="mtf_install_pre_inst-magento">1. Install the Magento application you want to test</h3>
To install the Magento application, see <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Magento Installation Guide</a>.

<h3 id="mtf_install_pre_adj-magento">2. Adjust Magento application preferences</h3>

-    Log in to the Magento Admin as an administrator. Example of Magento Admin URL: `http://magento.example.com/admin_1sgfym`.
-    On the vertical navigation bar click **Stores &gt; Configuration &gt; Advanced &gt; Admin &gt; Security**.
-    Set **Add Secret Key to URLs** to **No**. This setting allows test to open pages using direct URLs and assures correct cURL requests.
-    Go back to the vertical navigation bar of Magento Admin page.
-    Click **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**.
-    Set **Enable WYSIWYG Editor** to **Disabled Completely** to enable you to work with Selenium. You can change the setting later after you're finished testing.

<h3 id="mtf_install_pre_tools">3. Check if all required software installed and configured</h3>

<h4 id="mtf_install_pre_tools_apache">PHP</h4>

For more details about PHP verification, installation and configuration (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">Ubuntu</a>, <a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">CentOS</a>).

<div class="bs-callout bs-callout-warning">
    <p>In <code>php.ini</code> file, make sure <code>extension=php_openssl.dll</code> is not commented out.</p>
</div>

<h3 id="mtf_install_pre_mtf-check">Check if the Magento Testing Framework has been already installed</h3>

1. Find directory `magento2ce/dev/tests/functional/`.
1. Find the `vendor` directory. If the directory exists, you already have the Magento Testing Framework installed in `vendor/magento/mtf`.

<h2 id="mtf_install_perform">Perform the installation</h2>

The Magento Testing Framework requires Composer, which downloads libraries defined in `magento2ce/dev/tests/functional/composer.json`.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you're not sure that Composer is installed, see <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-install">Install Composer</a>.</p>
</div>

1.    <a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">Open a command prompt</a>.
1.    Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically <a href="{{ site.gdeurl }}install-gde//install/prepare-install.html#install-update-depend-apache">the web server user</a>.)

    cd magento2ce/dev/tests/functional/
    composer install

<div class="bs-callout bs-callout-info" id="info">
  <p>If command failed, maybe <a href="https://getcomposer.org">Composer</a> hasn't been installed globally.<br/>
  Copy <code>composer.phar</code> to <code>/usr/local/bin/composer</code>.<br/>
  To run it locally put <code>composer.phar</code> into directory, where <code>composer.json</code> file is located (that is, <code>magento2ce/dev/tests/functional/</code>).<br/>
And run from this directory <code>php composer.phar install</code>.</p>
</div>


<h2 id="mtf_install_check">Check the installation</h2>

<h3 id="mtf_install_check_dir">Find the Magento Testing Framework directory</h3>

Check whether the `vendor` directory exists in `magento2ce/dev/tests/functional/`.

    cd magento2ce/dev/tests/functional/
    ls

Find the `mtf` directory.

    cd vendor/magento
    ls

<h3 id="mtf_install_check_verify">Verify the Magento Testing Framework version</h3>
Open `magento2ce/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md`. The latest version in `CHANGELOG.md` is version of the MTF you installed.

<h2 id="mtf_install_next">Next Steps</h2> <a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_config.html">Adjust MTF configuration </a>

