---
group: extension-dev-guide
subgroup: 03_Build
title: Build
menu_title: Build
menu_order: 1
menu_node: parent
version: 2.0
redirect_from: /guides/v2.0/extension-dev-guide/build.html
---

Building your component involves laying out the file structure, creating the necessary configuration files, building out any needed {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} interfaces and services, and adding any {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} parts needed for your component.

## Prerequisites   {#create-component-basics}

Before you begin creating your new component, make sure that you have a working installation of Magento 2, and the Magento [System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

Also, Magento recommends that you disable caching while setting up the component file structure and adding configuration files.

The following details the component building process:

*	[Create composer.json]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html)
*	[Define your configuration files]({{ page.baseurl }}/extension-dev-guide/build/required-configuration-files.html)
*	[Create your component file structure]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html)
*	[Register your component]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html)
*	[URN schema validation]({{ page.baseurl }}/extension-dev-guide/build/XSD-XML-validation.html)
*	[Name your component]({{ page.baseurl }}/extension-dev-guide/build/create_component.html)
*	[Component load order]({{ page.baseurl }}/extension-dev-guide/build/module-load-order.html)
*	[Enable your component]({{ page.baseurl }}/extension-dev-guide/build/enable-module.html)
