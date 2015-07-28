---
layout: default
group: mtf-guide
subgroup: Installation
title: Installation of the Magento Testing Framework
menu_title: Perform and check installation
menu_order: 2
github_link: mtf/mtf_installation/mtf_install.md
redirect_from: /guides/v1.0/mtf/mtf_installation/mtf_install.html
---
<h3 id="mtf_install_pre_mtf-check">Check if the Magento Testing Framework has been already installed</h3>
1. Find directory <code>&lt;magento_root&gt;/dev/tests/functional/</code>.
1. Find there `vendor` directory. If the directory exists, you already have the Magento Testing Framework installed in `vendor/magento/mtf`.

<h2 id="mtf_install_pre">Perform installation</h2>

The Magento Testing Framework requires Composer, which downloads libraries defined in <code>&lt;magento_root&gt;/dev/tests/functional/composer.json</code>.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you're not sure if Composer is installed, see <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-install">Install Composer</a>.</p>
</div>

1.    <a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">Open a command prompt</a>.
1.    Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically <a href="{{ site.gdeurl }}install-gde//install/prepare-install.html#install-update-depend-apache">the web server user</a>.)
1.    Change working directory to <code>&lt;magento_root&gt;/dev/tests/functional/</code>.
1.    Enter <code>composer install</code>.

<div class="bs-callout bs-callout-info" id="info">
  <p>If command failed, maybe <a href="https://getcomposer.org">Composer</a> hasn't been installed globally.<br/>
  For Unix-like OS, to make it global, copy <code>composer.phar</code> to <code>/usr/local/bin/composer</code>.<br/>
   To run it locally put <code>composer.phar</code> into directory, where <code>composer.json</code> file is located (that is, <code>&lt;magento_root&gt;/dev/tests/functional/</code>).<br/>
Enter <code>php composer.phar install</code>.</p>
</div>

<h2 id="mtf_install_pre">Check installation</h2>
<h3 id="mtf_install_pre">Find the Magento Testing Framework directory</h3>
1.    Find <code> &lt;magento_root&gt;/dev/tests/functional/vendor/magento </code>.
1.    Find the <code>mtf</code> directory.

<h3 id="mtf_install_pre">Verify the Magento Testing Framework version</h3>
Open <code> &lt;magento_root&gt;/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md </code>. The latest version in <code>CHANGELOG.md</code> is version of the MTF you installed.
