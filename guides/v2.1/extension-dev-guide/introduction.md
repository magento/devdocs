---
layout: default
group:
subgroup:
title: Introduction
menu_title: Introduction
menu_order: 1
version: 2.1
github_link21: extension-dev-guide/introduction.md
---
##{{page.menu_title}}


This guide is for developers that are building a new *component* from scratch for custom extension of Magento functionality.

##Magento is made up of the following types of components:

* Modules (extend Magento capabilities)
* Themes (change the look and feel of your storefront and Admin)
* Language packages (localize the storefront and Admin)
* Libraries (common code)


A Magento *module* is a discrete chunk of code that accomplishes a particular business function or handles a Magento feature. A module is typically a collection `.php` and `.xml` files, and the bulk of your work in modules will be in these files.  Modules interact with each other. A module also contains any user interface required for a user's interaction with the module, and any application interfaces that another module or code chunk might call, if you decide to expose any application interface to other Magento modules.

Themes can be applied to the module to change its appearance. So when you are building a module, you might also touch themes and language packages.

A *package* is a component that is wrapped up in a distributable form. Usually you will use Composer to do this.

An *extension* is a component that are packaged for sale on Magento Marketplace.

<div class="bs-callout bs-callout-info" id="info">
<p>You must follow a <a href="http://www.php-fig.org/psr/psr-4/">PSR compliant</a> structure when building a module.</p>
</div>


##Magento module example
Modules are declared in the module.xml file. Here is a minimal example:

{% highlight XML %}
    <?xml version="1.0"?>
        <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/Module/etc/module.xsd">
      <module name="Magento_SampleMinimal" setup_version="2.0.0">
      </module>
    </config>
{% endhighlight %}

##What's Next?

Get your feet wet quickly and build <a href="{{ site.gdeurl21 }}extension-dev-guide/build_a_simple_module.html">a simple Magento module</a>.

Or jump right in and use <a href="{{ site.gdeurl21 }}extension-dev-guide/worksheet.html">a worksheet</a> that steps you through a complete best practice method to build, test, and package a Magento module.
