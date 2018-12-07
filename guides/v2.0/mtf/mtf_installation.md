---
group: functional-testing-framework-guide
title: Installation of the Functional Testing Framework Entities
---

Well, you are on the way to install the Functional Testing Framework!

## Check pre-installation conditions {#mtf_install_pre}

### Install the Magento application {#mtf_install_pre_inst-magento}

To install the Magento application, see [Magento Installation Guide]({{ page.baseurl }}/install-gde/bk-install-guide.html).

### Check if all required software installed and configured {#mtf_install_pre_tools}

#### PHP {#mtf_install_pre_tools_php}

For more details about PHP verification, installation and configuration ([Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html), [CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html)).

{: .bs-callout .bs-callout-warning }
In `php.ini` file, make sure `extension=php_openssl.dll` is not commented out.

#### Check if the Functional Testing Framework has been already installed {#mtf_install_pre_mtf-check}

1. Find directory `<magento2_root_dir>/dev/tests/functional/`.
2. Find the `vendor` directory. If the directory exists, you already have the Functional Testing Framework installed in `vendor/magento/mtf`.

## Perform the installation {#mtf_install_perform}

The Functional Testing Framework requires Composer, which downloads libraries defined in `<magento2_root_dir>/dev/tests/functional/composer.json`.

{: .bs-callout .bs-callout-info }
If you're not sure that Composer is installed, see [Install Composer]({{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-install).

1. [Open a command prompt]({{ page.baseurl }}/install-gde/basics/basics_login.html).
1. Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically [the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).)

```bash
cd <magento2_root_dir>/dev/tests/functional/
```
```bash
composer install
```

{: .bs-callout .bs-callout-info }
If command failed, maybe [Composer](https://getcomposer.org) hasn't been installed globally.  
 Copy `composer.phar` to `/usr/local/bin/composer`.  
 To run it locally put `composer.phar` into directory, where `composer.json` file is located (that is, `<magento2>/dev/tests/functional/`).  
 And run from this directory `php {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}composer{% endglossarytooltip %}.phar install`.

## Check the installation {#mtf_install_check}

### Find the Functional Testing Framework directory {#mtf_install_check_dir}

Check whether the `vendor` directory exists in `<magento2_root_dir>/dev/tests/functional/`.

```bash
cd <magento2_root_dir>/dev/tests/functional/
```
```bash
ls
```

Find the `mtf` directory.

```bash
cd vendor/magento
```
```bash
ls
```

### Verify the Functional Testing Framework version {#mtf_install_check_verify}

Open `<magento2_root_dir>/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md`. The latest version in `CHANGELOG.md` is version of the FTF you installed.

## Next Steps   {#mtf_install_next}

[Adjust FTF configuration ]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html)

