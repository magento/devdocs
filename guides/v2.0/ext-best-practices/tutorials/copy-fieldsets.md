---
layout: default
group: ext-best-practices
subgroup: Tutorials
title: Copying fieldsets
menu_title: Copying fieldsets
menu_order: 1000
version: 2.0
github_link: ext-best-practices/tutorials/copy-fieldsets.md
---

## Overview
In this tutorial, you will learn to copy custom data from a quote object to an order object using the [Magento/Framework/DataObject/Copy][0]{:target="_blank"} class.

## Step 1: Define your attributes
{:#step-1}

The following code defines a simple [extension attribute][1] named `demo` for the Cart and Order objects.

**extension_attributes.xml**

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="Api/etc/extension_attributes.xsd">
  <extension_attributes for="Magento\Quote\Api\Data\CartInterface">
    <attribute code="demo" type="string" />
  </extension_attributes>
  <extension_attributes for="Magento\Sales\Api\Data\OrderInterface">
      <attribute code="demo" type="string" />
  </extension_attributes>
</config>
{% endhighlight %}

## Step 2: Configure the fieldset
{:#step-2}

The following code adds the `demo` field to the `sales_convert_quote` fieldset with the `to_order` aspect.
The code snippet in the next step uses the name of the fieldset and aspect to specify which fields to copy.

**fieldset.xml**

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="DataObject/etc/fieldset.xsd">
  <scope id="global">
    <fieldset id="sales_convert_quote">
      <field name="demo">
        <aspect name="to_order" />
      </field>
    </fieldset>
  </scope>
</config>
{% endhighlight %}

## Step 3: Copy the fieldset
{:#step-3}

The following code snippets highlight the code pieces needed to copy a fieldset using the `\Magento\Framework\DataObject\Copy` class.

{% highlight php startinline %}
...

/**
 * @var \Magento\Framework\DataObject\Copy
 */
protected $objectCopyService;

...

/**
 * @param \Magento\Framework\DataObject\Copy $objectCopyService
  ...
 */
public function __construct(
  \Magento\Framework\DataObject\Copy $objectCopyService,
  ...
) {
    $this->objectCopyService = $objectCopyService;
    ...
  }

...

/**
 * @param $quote \Magento\Quote\Api\Data\CartInterface
 * @param $order Magento\Sales\Api\Data\Order
 */
private function copyQuoteToOrder($quote,$order)
{
  ...
  $copy->copyFieldsetToTarget('sales_convert_quote', 'to_order', $quote, $order);
  ...
}

...
{% endhighlight %}


In the code, an instance of the `Copy` class is obtained from the constructor using [dependency injection][2].
The `copyFieldsetToTarget` function call with the `$quote` and `$order` parameters copies the fieldset for the two objects..

[0]:https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/DataObject/Copy.php
[1]:{{page.baseurl}}extension-dev-guide/attributes.html
[2]:{{page.baseurl}}extension-dev-guide/depend-inj.html
