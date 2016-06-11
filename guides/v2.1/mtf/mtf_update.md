---
layout: default
group: mtf-guide
subgroup: 60_Update
title: Update the Functional Testing Framework
menu_title: UPDATE
menu_node: parent
version: 2.1
github_link: mtf/mtf_update.md
---
<h2 id="mtf_update">How to update</h2>

Two types of updates are available.

-     <a href="#mtf_update_install">Install a new version of the Functional Testing Framework</a>

<div class="bs-callout bs-callout-info" id="info">
<p>Use this type of update if the version of the Functional Testing Framework in <code>&lt;magento2&gt;/dev/tests/functional/composer.json</code> and last version in <code>&lt;magento2&gt;/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md</code> are different. For example, when you updated Magento.</p>
</div>

-    <a href="#mtf_update_depend">Update components from dependencies in <code>&lt;magento2&gt;/dev/tests/functional/composer.json</code></a>

<div class="bs-callout bs-callout-info" id="info">
<p>Use this type of update if you want to update dependent software from <code>composer.json</code>, or changed <code>composer.json</code> dependencies.</p>
</div>


<h3 id="mtf_update_install">Install a new version of the Functional Testing Framework</h3>

Step 1.    To avoid conflicts with the previous version, remove directory `<magento2>/dev/tests/functional/generate`.


Step 2.    Remove file `<magento2>/dev/tests/functional/composer.lock`.

<div class="bs-callout bs-callout-info" id="info">
  <p><b>Why:</b> Composer reads dependencies from <code>composer.lock</code> instead of reading <code>composer.json</code>. File <code>composer.lock</code> currently is not maintained.</p>
</div>

Step 3.    <a href="{{ site.gdeurl21 }}mtf/mtf_installation.html#mtf_install_perform">Perform and check installation.</a>

<h3 id="mtf_update_depend">Update components from dependencies in <code>composer.json</code></h3>

Enter in terminal:

    cd <magento2>/dev/tests/functional/
    composer update
