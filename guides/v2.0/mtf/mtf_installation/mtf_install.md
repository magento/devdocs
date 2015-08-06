---
layout: default
group: mtf-guide
subgroup: B_Installation
title: Installation of the Magento Testing Framework
menu_title: Perform and check installation
menu_order: 2
github_link: mtf/mtf_installation/mtf_install.md
redirect_from: /guides/v1.0/mtf/mtf_installation/mtf_install.html
---

<h3 id="mtf_install_pre_mtf-check">Check if the Magento Testing Framework has been already installed</h3>

1. Find directory `<magento_root>/dev/tests/functional/`.
1. Find the `vendor` directory. If the directory exists, you already have the Magento Testing Framework installed in `vendor/magento/mtf`.

<h3 id="mtf_install_pre_mtf-check">Check pre-installation conditions</h3>
Be sure that you met all <a href="{{site.gdeurl}}mtf/mtf_installation/mtf_preinstall.html">pre-installation conditions</a>.

<h2 id="mtf_install_pre">Perform installation</h2>

The Magento Testing Framework requires Composer, which downloads libraries defined in `<magento_root>/dev/tests/functional/composer.json`.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you're not sure, that Composer is installed, see <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-install">Install Composer</a>.</p>
</div>

1.    <a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">Open a command prompt</a>.
1.    Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically <a href="{{ site.gdeurl }}install-gde//install/prepare-install.html#install-update-depend-apache">the web server user</a>.)

    cd <magento_root>/dev/tests/functional/
    composer install

<div class="bs-callout bs-callout-info" id="info">
  <p>If command failed, maybe <a href="https://getcomposer.org">Composer</a> hasn't been installed globally.<br/>
  Copy <code>composer.phar</code> to <code>/usr/local/bin/composer</code>.<br/>
  To run it locally put <code>composer.phar</code> into directory, where <code>composer.json</code> file is located (that is, <code>&lt;magento_root&gt;/dev/tests/functional/</code>).<br/>
And run from this directory <code>php composer.phar install</code>.</p>
</div>


<h2 id="mtf_install_pre">Check the installation</h2>

<h3 id="mtf_install_pre">Find the Magento Testing Framework directory</h3>

Check whether the `vendor` directory exists in `<magento_root>/dev/tests/functional/`.

    cd <magento_root>/dev/tests/functional/
    ls

Find the `mtf` directory.

    cd vendor/magento
    ls

<h3 id="mtf_install_pre">Verify the Magento Testing Framework version</h3>
Open `<magento_root>/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md`. The latest version in `CHANGELOG.md` is version of the MTF you installed.

<h2 id="mtf_install_pre">Next Steps</h2> <a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_config.html">Adjust MTF configuration </a>
