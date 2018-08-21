---
group: install_pre
title: Set up the updater
functional_areas:
  - Install
  - System
  - Setup
---

The Magento 2 Updater uses Composer to manage the Magento packages.

{:.bs-callout .bs-callout-info}
This topic is for contributing developers *only*; that is, anyone who clones the Magento 2 GitHub repository so they can contribute to the Magento 2 codebase.
If you did not clone the Magento repository, you should skip this topic.

## Clone the updater

Clone the [Magento 2 updater](https://github.com/magento/magento2-updater) to `<your Magento install dir>/update`.

Example:

```bash
cd ~/magento2
```
```bash
git clone git@github.com:magento/magento2-updater.git update
```

## Install the updater

The Magento 2 updater contains the `composer.json` with dependencies that it requires to process.
Install tthe dependencies using Composer:

```bash
cd update
```
```bash
composer install
```
    
## Next step

* [Installation options]({{ page.baseurl }}/install-gde/continue-to-install.html)

<!-- Link definitions -->

[Magento 2 updater]: https://github.com/magento/magento2-updater