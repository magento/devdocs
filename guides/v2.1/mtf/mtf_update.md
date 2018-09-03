---
group: mtf-guide
title: Update the Functional Testing Framework
---

Two types of updates are available.

-     [Install a new version of the Functional Testing Framework](#mtf_update_install)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Use this type of update if the version of the Functional Testing Framework in `<magento2>/dev/tests/functional/composer.json` and last version in `<magento2>/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md` are different. For example, when you updated Magento.
</div>

-    [Update components from dependencies in `<magento2>/dev/tests/functional/composer.json`](#mtf_update_depend)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Use this type of update if you want to update dependent software from `composer.json`, or changed `composer.json` dependencies.
</div>

### Install a new version of the Functional Testing Framework {#mtf_update_install}

Step 1.    To avoid conflicts with the previous version, remove directory `<magento2_root_dir>/dev/tests/functional/generate`.


Step 2.    Remove file `<magento2_root_dir>/dev/tests/functional/composer.lock`.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
**Why:** {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} reads dependencies from `composer.lock` instead of reading `composer.json`. File `composer.lock` currently is not maintained.
</div>

Step 3.    [Perform and check installation.]({{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_perform)

### Update components from dependencies in <code>composer.json</code> {#mtf_update_depend}

Enter in terminal:

    cd <magento2_root_dir>/dev/tests/functional/
    composer update
