---
group: extension-dev-guide
subgroup: 03_Build
title: URN schema validation
menu_title: URN schema validation
menu_order: 5000
version: 2.1
redirect_from: /guides/v2.0/extension-dev-guide/XSD-XML-validation.html
---

Each Magento {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} can contain XSD files for {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} validation.

Magento uses [Uniform Resource Names](https://en.wikipedia.org/wiki/Uniform_Resource_Name) (URNs) to reference XML schema declarations.

Magento supported URNs begin with `urn:magento`. Magento supports two XSD reference types:

* Module XSD
* Framework XSD

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You cannot change the XSD for any XML files provided with the Magento application.</p></span>
</div>

### Module XSD

The syntax for the module XSD is a colon separated declaration. An example follows:

`urn:magento:module:Magento_Flow:flows/content.xsd`

where

*  `urn:magento` is the URN identifier
*  `module` is the reference type identifier
*  `Magento_Flow` is the name of the module. This must be exactly the same as the module specified by ComponentRegistrar in the [registration.php]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html) file.
* `flows/content.xsd` is the relative path to the module&#8217;s directory.

### Framework XSD

The syntax for the framework XSD is a colon separated declaration. An example follows:

`urn:magento:framework:Api/etc/extension_attributes.xsd`

where

*  `urn:magento` is the URN identifier
*  `framework` is the reference type identifier. You can also add additional framework libraries as separate components with `framework-<sub-name>`
* `Api/etc/extension_attributes.xsd` is the relative path to the framework&#8217;s directory.

### Referencing a XSD from another XSD

Use URN notation to reference schema from inside a XSD document:

{% highlight XML %}

<xs:redefine schemaLocation="urn:magento:framework:Config/etc/view.xsd">


{% endhighlight %}

The URN resolution is invoked automatically by the libxml engine. Register the URN resolver by using `libxml_set_external_entity_loader`:

{% highlight XML %}
libxml_set_external_entity_loader(['Magento\Framework\Config\Dom\UrnResolver', 'registerEntityLoader']);
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The relative path to other XSDs cannot be used from inside the XSD file, because the {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} loader fails to resolve the relative path.</p></span>
</div>

#### Next
[Name your component]({{ page.baseurl }}/extension-dev-guide/build/create_component.html)
