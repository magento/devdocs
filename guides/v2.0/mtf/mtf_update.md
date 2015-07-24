---
layout: default
group: mtf-guide
subgroup: Update
title: Update the Magento Testing Framework
menu_title: UPDATE
menu_order: 4
menu_node: parent
github_link: mtf/mtf_update.md
redirect_from: /guides/v1.0/mtf/mtf_update.html
---
<h2 id="mtf_update">How to update</h2>

Two types of updates are available.

-     <a href="#mtf_update_install">Install a new version of the Magento Testing Framework</a>

<div class="bs-callout bs-callout-info" id="info">
<p>Use this type of update if the version of the Magento Testing Framework in <code>&lt;magento_root&gt;/dev/tests/functional/composer.json</code> and last version in <code>&lt;magento_root&gt;/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md</code> are different. For example, when you updated Magento.</p>
</div>

-    <a href="#mtf_update_depend">Update components from dependencies in <code>&lt;magento_root&gt;/dev/tests/functional/composer.json</code></a>

<div class="bs-callout bs-callout-info" id="info">
<p>Use this type of update if you want to update dependent software from <code>composer.json</code>, or changed <code>composer.json</code> dependencies.</p>
</div>


<h3 id="mtf_update_install">Install a new version of the Magento Testing Framework</h3>

Step 1.    To avoid conflicts with the previous version, remove directory <code>&lt;magento_root&gt;/dev/tests/functional/generate</code>.
     
    
Step 2.    Remove file <code>&lt;magento_root&gt;/dev/tests/functional/composer.lock</code>. 
 
<div class="bs-callout bs-callout-info" id="info">
  <p><b>Why:</b> Composer reads dependencies from <code>composer.lock</code> instead of reading <code>composer.json</code>. File <code>composer.lock</code> currently is not maintained.</p>
</div>
   
Step 3.    <a href="{{ site.gdeurl }}mtf/mtf_installation/mtf_install.html">Perform and check installation.</a>

<h3 id="mtf_update_depend">Update components from dependencies in <code>composer.json</code></h3>

1.    Open a command prompt.
1.    Change working directory to <code>&lt;magento_root&gt;/dev/tests/functional/</code>.
1.    Enter <code>composer update</code>.
