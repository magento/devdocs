---
layout: default
group: mtf-guide
subgroup: 20_Installation
title: Installation of the Functional Testing Framework Entities
menu_title: INSTALLATION
menu_node: parent
version: 2.0
github_link: mtf/mtf_installation.md
---
<h2>Preface</h2>
Well, you are on the way to install the Functional Testing Framework!

Follow the next three steps:

- <a href="#mtf_install_pre">Check pre-installation conditions</a>

- <a href="#mtf_install_perform">Perform the installation</a>

- <a href="#mtf_install_check">Check the installation</a>

## Check pre-installation conditions {#mtf_install_pre}

### Install the Magento application you want to test {#mtf_install_pre_inst-magento}
To install the Magento application, see <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Magento Installation Guide</a>.

### Check if all required software installed and configured {#mtf_install_pre_tools}

#### PHP {#mtf_install_pre_tools_php}

For more details about PHP verification, installation and configuration (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">Ubuntu</a>, <a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">CentOS</a>).

<div class="bs-callout bs-callout-warning">
    <p>In <code>php.ini</code> file, make sure <code>extension=php_openssl.dll</code> is not commented out.</p>
</div>

#### Check if the Functional Testing Framework has been already installed {#mtf_install_pre_mtf-check}

1. Find directory `<magento2>/dev/tests/functional/`.
1. Find the `vendor` directory. If the directory exists, you already have the Functional Testing Framework installed in `vendor/magento/mtf`.

## Perform the installation {#mtf_install_perform}

The Functional Testing Framework requires Composer, which downloads libraries defined in `<magento2>/dev/tests/functional/composer.json`.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you're not sure that Composer is installed, see <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-install">Install Composer</a>.</p>
</div>

1.    <a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">Open a command prompt</a>.
1.    Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">the Magento file system owner</a>.)

    cd <magento2>/dev/tests/functional/
    composer install

<div class="bs-callout bs-callout-info" id="info">
  <p>If command failed, maybe <a href="https://getcomposer.org">Composer</a> hasn't been installed globally.<br/>
  Copy <code>composer.phar</code> to <code>/usr/local/bin/composer</code>.<br/>
  To run it locally put <code>composer.phar</code> into directory, where <code>composer.json</code> file is located (that is, <code>&lt;magento2&gt;/dev/tests/functional/</code>).<br/>
And run from this directory <code>php composer.phar install</code>.</p>
</div>


## Check the installation {#mtf_install_check}

### Find the Functional Testing Framework directory {#mtf_install_check_dir}

Check whether the `vendor` directory exists in `<magento2>/dev/tests/functional/`.

    cd <magento2>/dev/tests/functional/
    ls

Find the `mtf` directory.

    cd vendor/magento
    ls

### Verify the Functional Testing Framework version {#mtf_install_check_verify}

Open `<magento2>/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md`. The latest version in `CHANGELOG.md` is version of the FTF you installed.

<h2 id="mtf_install_next">Next Steps</h2> <a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_config.html">Adjust FTF configuration </a>
