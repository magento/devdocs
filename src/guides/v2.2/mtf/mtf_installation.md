---
group: functional-testing-framework-guide
title: Installation of the Functional Testing Framework Entities
---

 {:.bs-callout-info}
The Magento Testing Framework (MTF) is superseded by the Magento Functional Testing Framework ([MFTF][]).
While the MTF is still functional, all MTF tests are ported over to the MFTF. We recommend using the MFTF for testing.

Well, you are on the way to install the Functional Testing Framework!

## Check pre-installation conditions {#mtf_install_pre}

### Install the Magento application {#mtf_install_pre_inst-magento}

To install the Magento application, see [Magento Installation Guide][].

### Check if all required software installed and configured {#mtf_install_pre_tools}

#### PHP {#mtf_install_pre_tools_php}

For more details about PHP verification, installation and configuration see [PHP Settings][].

  {:.bs-callout-warning}
In `php.ini` file, make sure `extension=php_openssl.dll` is not commented out.

#### Check if the Functional Testing Framework has been already installed {#mtf_install_pre_mtf-check}

1. Find directory `<magento2_root_dir>/dev/tests/functional/`.
1. Find the `vendor` directory. If the directory exists, you already have the Functional Testing Framework installed in `vendor/magento/mtf`.

## Perform the installation {#mtf_install_perform}

The Functional Testing Framework requires Composer, which downloads libraries defined in `<magento2_root_dir>/dev/tests/functional/composer.json`.

 {:.bs-callout-info}
If you're not sure that Composer is installed, see [Install Composer][].

1. [Open a command prompt][].
1. Log in to your Magento server as a user with permissions to modify the Magento file system. (This is typically [the Magento file system owner][].)

```bash
cd <magento2_root_dir>/dev/tests/functional/
```

```bash
composer install
```

 {:.bs-callout-info}
If the command execution failed, check if [Composer][] is installed [globally][].

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

Open `<magento2_root_dir>/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md`.
The latest version in `CHANGELOG.md` is version of the FTF you installed.

{:.ref-header}
Related topics

[Adjust the FTF configuration ]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html)

<!-- Link defifnitions -->

[Adjust the FTF configuration ]: {{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html
[Composer]: https://getcomposer.org
[globally]: https://getcomposer.org/doc/00-intro.md#globally
[Install Composer]: {{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-install
[Magento Installation Guide]: {{ page.baseurl }}/install-gde/bk-install-guide.html
[Open a command prompt]: {{ page.baseurl }}/install-gde/basics/basics_login.html
[the Magento file system owner]: {{ page.baseurl }}/install-gde/prereq/apache-user.html
[PHP Settings]: {{ page.baseurl }}/install-gde/prereq/php-settings.html
[MFTF]: https://devdocs.magento.com/mftf/docs/introduction.html
