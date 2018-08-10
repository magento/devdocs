---
group:
subgroup:
title: Introduction
menu_title: Introduction
menu_order: 1
version: 2.1
redirect_from: /guides/v1.0/extension-dev-guide/introduction.html

---

This guide is for developers that are building a new *component* from scratch for custom {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} of Magento functionality.

## Magento is made up of the following types of components:

	*	Modules (extend Magento capabilities)
	*	Themes (change the look and feel of your storefront and Admin)
	*	Language packages (localize the storefront and Admin)
	*	Libraries (common code)

A Magento *module* is a discrete chunk of code that accomplishes a particular business function or handles a Magento feature. A {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is typically a collection `.php` and `.xml` files, and the bulk of your work in modules will be in these files.  Modules interact with each other. A module also contains any user interface required for a user's interaction with the module, and any application interfaces that another module or code chunk might call, if you decide to expose any application interface to other Magento modules.

Themes can be applied to the module to change its appearance. So when you are building a module, you might also touch themes and language packages.

A *package* is a component that is wrapped up in a distributable form. Usually you will use {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} to do this.

An *extension* is a component that are packaged for sale on Magento Marketplace.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento Marketplace is one way to distribute your components. This guide provide information about how to distribute your components using other means as well (such as a separate source control repository).</p>
</div>



<div class="bs-callout bs-callout-info" id="info">
<p>You must follow a <a href="http://www.php-fig.org/psr/psr-4/">PSR compliant</a> structure when building a module.</p>
</div>

## Magento module example

Modules are declared in the `module.xml` file. Here is a minimal example:

{% highlight XML %}
    <?xml version="1.0"?>
        <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
      <module name="Magento_SampleMinimal" setup_version="2.0.0">
      </module>
    </config>
{% endhighlight %}

## What's Next?

Get your feet wet quickly and build <a href="{{ page.baseurl }}/extension-dev-guide/build_a_simple_module.html">a simple Magento module</a>.

Or jump right in and use <a href="{{ page.baseurl }}/extension-dev-guide/worksheet.html">a worksheet</a> that steps you through a complete best practice method to build, test, and package a Magento module.
