---
group: mtf-guide
title: Update the Functional Testing Framework
---

Two types of updates are available.

-     [Install a new version of the Functional TestingFramework](#mtf_update_install)

<div class="bs-callout bs-callout-info" id="info">
<p>Use this type of update if the version of the Functional Testing Framework in <code>&lt;magento2&gt;/dev/tests/functional/composer.json</code> and last version in <code>&lt;magento2&gt;/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md</code> are different. For example, when you updated Magento.</p>
</div>

-    [Update components from dependencies in`<magento2>/dev/tests/functional/composer.json`](#mtf_update_depend)

<div class="bs-callout bs-callout-info" id="info">
<p>Use this type of update if you want to update dependent software from <code>composer.json</code>, or changed <code>composer.json</code> dependencies.</p>
</div>

### Install a new version of the Functional Testing Framework {#mtf_update_install}

Step 1.    To avoid conflicts with the previous version, remove directory `<magento2_root_dir>/dev/tests/functional/generate`.


Step 2.    Remove file `<magento2_root_dir>/dev/tests/functional/composer.lock`.

<div class="bs-callout bs-callout-info" id="info">
  <p><b>Why:</b> {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} reads dependencies from <code>composer.lock</code> instead of reading <code>composer.json</code>. File <code>composer.lock</code> currently is not maintained.</p>
</div>

Step 3.    [Perform and checkinstallation.]({{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_perform)

### Update components from dependencies in <code>composer.json</code> {#mtf_update_depend}

Enter in terminal:

    cd <magento2_root_dir>/dev/tests/functional/
    composer update
