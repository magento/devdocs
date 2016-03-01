---
layout: default
group: extension-dev-guide
subgroup: 06_Validate
title: Test your component
menu_title: Test your component
menu_order: 2
menu_node: 
github_link: extension-dev-guide/validate/test-module.md
redirect_from: 
  - /guides/v2.0/mktpl-quickstart/dev-test.html
  - /guides/v2.0/extension-dev-guide/test-module.html
---

##{{page.menu_title}}

#### Contents

*	[PHPUnit](#test-phpunit)
*	[Functional testing](#test-functional)
*	[Test installing your component](#test-install)

##PHPUnit {#test-phpunit}

PHPUnit is a PHP testing framework ideal for Magento programmers. Test your component with [PHPUnit](https://phpunit.de/){:target="_blank"}, available on GitHub at [https://github.com/sebastianbergmann/phpunit](https://github.com/sebastianbergmann/phpunit){:target="_blank"}.

## Functional testing {#test-functional}
For further testing with Magento testing frameworks, see 
[Magento Testing Framework]({{ site.gdeurl }}mtf/mtf_introduction.html).

## Test using Community Edition {#test-comm}
Test your component by deploying Magento Community Edition and adding the component to the project's <code>composer.json</code>. 

{% highlight JSON %}
"require": {
    "magento/magento-composer-installer": "*",
    "magento/product-community-edition": "2.0.0",
    "yourvendorname/module-one": "0.1.1"
},
{% endhighlight %}

Remember to [register]({{ site.gdeurl }}extension-dev-guide/build/component-registration.html) your component as well, adding the location of your component. Confirm that your component works as expected and Magento functionality is not compromised.

## Test installing your component {#test-install}
Before you publish your component, you should test installing it using the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Magento Component Manager</a> (part of the Magento Admin).

One way to do this follows:

1.	<a href="{{ site.gdeurl }}extension-dev-guide/package/package_module.html">Package your component</a> in a GitHub repository that's accessible by the machine on which you run the Magento Admin.
2.	On that machine, create a static route from `https://repo.magento.com` to your GitHub repository.

	To create a static route, add a line similar to the following to your `hosts` file:

		<IP or host name of your GitHub repository> https://repo.magento.com 

3.	<a href="{{ site.gdeurl }}comp-mgr/compman-main-pg.html#compman-access" target="_blank">Install your component</a> exactly like a merchant.
4.	Verify the component installed properly.







##More information
For more information on testing in PHP and validating Magento components, see the following:

* [PHP Reflection](http://php.net/manual/en/book.reflection.php){:target="_blank"}
* [PHP Reflection Tutorial](http://code.tutsplus.com/tutorials/reflection-in-php--net-31408){:target="_blank"}
* [Validating Magento Extensions](http://www.gorillagroup.com/trending/insight/validating-magento-extensions-phpunit/){:target="_blank"}