---
layout: default
group: extension-dev-guide
subgroup: Tutorials
title: Copying fieldsets
menu_title: Copying fieldsets
menu_order: 1000
version: 2.0
github_link: extension-dev-guide/tutorials/copy-fieldsets.md
---

In this tutorial, you will learn to copy custom data from a quote object to an order object using the [Magento/Framework/DataObject/Copy](https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/DataObject/Copy.php){:target="_blank"} class.

## Define your attributes

The following code defines a simple [extension attribute]({{page.baseurl}}extension-dev-guide/attributes.html) named `demo` for the Cart and Order objects.

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

## Configure the fieldset

The following code adds the `demo` field to the `sales_convert_quote` fieldset with the `to_order` aspect.
The code snippet in the next section uses the name of the fieldset and aspect to specify which fields to copy.

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

## Copy the fieldset

The following code snippets highlight the steps needed to copy a fieldset using the `\Magento\Framework\DataObject\Copy` class.

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


In the code, an instance of the `Copy` class is obtained from the constructor using [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html).
The `copyFieldsetToTarget` function is called on the `$quote` and `$order` parameters to copy the fieldset.
