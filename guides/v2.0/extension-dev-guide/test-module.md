---
layout: default
group: extension-dev-guide
subgroup: 
title: Test your component
menu_title: Test your component
menu_order: 2
menu_node: 
github_link: extension-dev-guide/test-module.md

---

##{{page.menu_title}}

Test your component by deploying Magento Community Edition and adding the component to the project's <code>composer.json</code>. 

{% highlight JSON %}
"require": {
    "magento/magento-composer-installer": "*",
    "magento/product-community-edition": "2.0.0",
    "foovendor/module-one": "0.1.1"
},
{% endhighlight %}

Remember to [register]({{ site.gdurl }}extension-dev-guide/build/component-registration.html) your component as well, adding the location of your component. Confirm that your component works as expected and Magento functionality is not compromised.

For further testing with Magento testing frameworks, see 
[Magento Testing Framework]({{ site.gdeurl }}mtf/mtf.html).

##PHPUnit

PHPUnit is a PHP testing framework ideal for Magento programmers. Test your module with [PHPUnit](https://phpunit.de/){:target="_blank"}.

##More Information
For more information on testing in PHP and validating Magento components, see the following:

* [Validating Magento Extensions](http://www.gorillagroup.com/trending/insight/validating-magento-extensions-phpunit/){:target="_blank"}