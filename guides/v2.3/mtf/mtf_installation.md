---
group: mtf-guide
title: Installation of the Functional Testing Framework Entities
---

Well, you are on the way to install the Functional Testing Framework!

Follow the next three steps:

- [Check pre-installation conditions](#mtf_install_pre)

- [Perform the installation](#mtf_install_perform)

- [Check the installation](#mtf_install_check)

## Check pre-installation conditions {#mtf_install_pre}

### Install the Magento application {#mtf_install_pre_inst-magento}

To install the Magento application, see [Magento InstallationGuide]({{ page.baseurl }}/install-gde/bk-install-guide.html).

### Check if all required software installed and configured {#mtf_install_pre_tools}

#### PHP {#mtf_install_pre_tools_php}

For more details about PHP verification, installation and configuration ([Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-centos-ubuntu.html#php-for-ubuntu),[CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos-ubuntu.html#php-for-centos)).

<div class="bs-callout bs-callout-warning">
    <p>In <code>php.ini</code> file, make sure <code>extension=php_openssl.dll</code> is not commented out.</p>
</div>

#### Check if the Functional Testing Framework has been already installed {#mtf_install_pre_mtf-check}

1. Find directory `<magento2_root_dir>/dev/tests/functional/`.
1. Find the `vendor` directory. If the directory exists, you already have the Functional Testing Framework installed in `vendor/magento/mtf`.

## Perform the installation {#mtf_install_perform}

The Functional Testing Framework requires Composer, which downloads libraries defined in `<magento2_root_dir>/dev/tests/functional/composer.json`.

{: .bs-callout .bs-callout-info}
If you're not sure that Composer is installed, see [InstallComposer]({{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-install).

1.    [Open a commandprompt]({{ page.baseurl }}/install-gde/basics/basics_login.html).
1.    Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically [the Magento file systemowner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).)

    cd <magento2_root_dir>/dev/tests/functional/
    composer install

{: .bs-callout .bs-callout-info}
If command failed, maybe [Composer](https://getcomposer.org) hasn't been installed globally.
Copy `composer.phar` to `/usr/local/bin/composer`. To run it locally put `composer.phar` into the directory, where the `composer.json` file is located (that is, `<magento2>/dev/tests/functional/`). And run from this directory `php composer.phar install`.

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

## Next Steps {#mtf_install_next}

[Adjust FTFconfiguration]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html)
