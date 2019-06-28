---
group: installation-guide
title: Set up the updater
functional_areas:
  - Install
  - System
  - Setup
---

The Magento 2 Updater enables you to use the Web Setup Wizard to manage the Magento system components.
The updater uses the cron jobs `update/cron.php` and `bin/magento setup:cron:run`.
Learn more about the cron setup in [Configure the Magento application].

## Clone the updater

Clone the [Magento 2 updater](https://github.com/magento/magento2-updater) to `<magento_root>/update`.

Example:

```bash
cd ~/magento2
```

```bash
git clone git@github.com:magento/magento2-updater.git update
```

## Install the updater

The Magento 2 updater contains the `composer.json` with dependencies that it requires to process.
Install the dependencies using Composer:

```bash
cd update
```

```bash
composer install
```
    
## Next step

* [Installation options]

<!-- Link definitions -->

[Configure the Magento application]: {{ page.baseurl }}/install-gde/install/post-install-config.html
[Installation options]: {{ page.baseurl }}/install-gde/continue-to-install.html