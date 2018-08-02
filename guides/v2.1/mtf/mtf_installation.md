---
group: mtf-guide
title: Installation of the Functional Testing Framework Entities
version: 2.1
github_link: mtf/mtf_installation.md
---

Well, you are on the way to install the Functional Testing Framework!

Follow the next three steps:

- [Check pre-installation conditions](#mtf_install_pre)

- [Perform the installation](#mtf_install_perform)

- [Check the installation](#mtf_install_check)

## Check pre-installation conditions {#mtf_install_pre}

### Install the Magento application {#mtf_install_pre_inst-magento}
To install the Magento application, see [Magento Installation Guide]({{ page.baseurl }}/install-gde/bk-install-guide.html).

### Check if all required software installed and configured {#mtf_install_pre_tools}

#### PHP {#mtf_install_pre_tools_php}

For more details about PHP verification, installation and configuration ([Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html), [CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html)).

<div class="bs-callout bs-callout-warning">
    <p>In <code>php.ini</code> file, make sure <code>extension=php_openssl.dll</code> is not commented out.</p>
</div>

#### Check if the Functional Testing Framework has been already installed {#mtf_install_pre_mtf-check}

1. Find directory `<magento2_root_dir>/dev/tests/functional/`.
1. Find the `vendor` directory. If the directory exists, you already have the Functional Testing Framework installed in `vendor/magento/mtf`.

## Perform the installation {#mtf_install_perform}

The Functional Testing Framework requires Composer, which downloads libraries defined in `<magento2_root_dir>/dev/tests/functional/composer.json`.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you're not sure that Composer is installed, see [Install Composer]({{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-install).</p>
</div>

1.    [Open a command prompt]({{ page.baseurl }}/install-gde/basics/basics_login.html).
1.    Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically [the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).)

    cd <magento2_root_dir>/dev/tests/functional/
    composer install

<div class="bs-callout bs-callout-info" id="info">
  <p>If command failed, maybe [Composer](https://getcomposer.org) hasn't been installed globally.<br/>
  Copy <code>composer.phar</code> to <code>/usr/local/bin/composer</code>.<br/>
  To run it locally put <code>composer.phar</code> into directory, where <code>composer.json</code> file is located (that is, <code>&lt;magento2&gt;/dev/tests/functional/</code>).<br/>
And run from this directory <code>php {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}composer{% endglossarytooltip %}.phar install</code>.</p>
</div>


## Check the installation {#mtf_install_check}

### Find the Functional Testing Framework directory {#mtf_install_check_dir}

Check whether the `vendor` directory exists in `<magento2_root_dir>/dev/tests/functional/`.

    cd <magento2_root_dir>/dev/tests/functional/
    ls

Find the `mtf` directory.

    cd vendor/magento
    ls

### Verify the Functional Testing Framework version {#mtf_install_check_verify}

Open `<magento2_root_dir>/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md`. The latest version in `CHANGELOG.md` is version of the FTF you installed.

## Next Steps {#mtf_install_next} [Adjust FTF configuration ]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html)
