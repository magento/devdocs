---
layout: default
group: fedg
subgroup: D_CSS
title: Use custom CSS preprocessor
menu_order: 2
github_link: frontend-dev-guide/css-topics/custom_preprocess.md
---

<h2>What's in this topic</h2>

This topic describes how to add a custom CSS preprocessor. Adding Sass preprocessor is used for illustration.


**Contents**

* TOC
{:toc} 

## Overview

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. When adding a custom CSS preprocess your custom module should [depend]({{site.gdeurl}}extension-dev-guide/build/composer-integration.html) on ... module.

<p class="q">should it necessary depend on a certain module?</p>

To add a custom preprocess, take the following steps:


1. Add your library in the `<your_module>/composer.json` file.

<p class="q">which one, global? in which section, require?</p>

2. Add the files required for integration with Magento:
 - In `<your_custom_module>/etc/di.xml`...
 - 3. Do something with `/Magento/Framework/View/Asset/PreProcessor/Pool.php`
 - Adapter class
 - Configure the pool generator where you specify the file type.
 - Preprocessor class. For example, scss.php. It should implement the processing of the @magento_import and @import directives.

## Sample data SasS module

Magento issued a sample [module-sample-scss](https://github.com/magento/magento2-samples/tree/master/module-sample-scss) module implementing the Sass preprocessor.

You can view it as example when adding your custom preprocessor. Or use as is if you need to add Sass preprocessing and use .sass styles.

How to add a module? 
