---
layout: default
group: 
subgroup: 
title: PHP Developer Guide Introduction
menu_title: Introduction
menu_order: 1
github_link: extension-dev-guide/introduction.md

---


This guide is for developers that need to modify or customize an existing Magento module, or are building a new module from scratch for custom extension of Magento functionality. This guide is also for those who want to create an extension for Magento Connect, although it does not cover the publishing process.


##Magento is made up of components:

* Modules
* Themes
* Language packages


A Magento *module* is a discrete chunk of code that accomplishes a particular business function or handles a Magento feature. A module is typically a collection `.php` and `.xml` files, and the bulk of your work in modules will be in these files.  Modules are interactive with each other. A module also contains any user interface required for a user&#8217;s interaction with the module, and any application interfaces that another module or code chunk might call, if you decide to expose any application interface to other Magento modules.

Themes can be applied to the module to change its appearance. So when you are building a module, you may also touch themes and language packages.

A *package* is a module that is wrapped up in a distributable form. Usually you will use Composer to do this.

An *extension* is a module or modules that are packaged for sale on Magento Connect.


<div class="bs-callout bs-callout-info" id="info">
<p>You must follow a <a href="http://www.php-fig.org/psr/psr-4/">PSR compliant</a> structure when building a module.</p>
</div>


##Magento module example

At the very minimum, a Magento module could be called via XML file:

{% highlight XML %}
    <?xml version="1.0"?>
        <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/Module/etc/module.xsd">
      <module name="Magento_SampleMinimal" setup_version="2.0.0">
      </module>
    </config>
{% endhighlight %}

##What's Next?

Get your feet wet quickly and build <a href="{{ site.gdeurl }}extension-dev-guide/build_a_simple_module.html">a simple Magento module</a>.

Or jump right in and use <a href="{{ site.gdeurl }}extension-dev-guide/worksheet.html">a worksheet</a> that steps you through a complete best practice method to build, test, and package a Magento module.

