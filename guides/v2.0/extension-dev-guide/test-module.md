---
layout: default
group: extension-dev-guide
subgroup: 4_Validate
title: PHP Developer Guide
menu_title: Test your module
menu_order: 2
menu_node: 
github_link: extension-dev-guide/test-module.md

---

##{{page.menu_title}}

Test your module by deploying a Magento Community Edition and adding the module to the project's <code>composer.json</code>. Marshall the module into the <code>app/code</code> directory.

{% highlight JSON %}
"require": {
    "magento/magento-composer-installer": "*",
    "magento/product-community-edition": "2.0.0",
    "foovendor/module-one": "0.1.1"
},
{% endhighlight %}