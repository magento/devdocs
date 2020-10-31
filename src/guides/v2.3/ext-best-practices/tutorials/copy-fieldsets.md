---
group: extension-best-practices
subgroup: Tutorials
title: Copying fieldsets
menu_title: Copying fieldsets
menu_order: 1000
functional_areas:
  - Standards
---

## Overview

In this tutorial, you will learn to copy custom data from a [quote](https://glossary.magento.com/quote) object to an order object using the [Magento/Framework/DataObject/Copy][0]{:target="_blank"} class.

## Step 1: Define your attributes {#step-1}

The following code defines a simple [extension attribute][1] named `demo` for the Cart and Order objects.

**etc/extension_attributes.xml:**

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
  <extension_attributes for="Magento\Quote\Api\Data\CartInterface">
    <attribute code="demo" type="string" />
  </extension_attributes>
  <extension_attributes for="Magento\Sales\Api\Data\OrderInterface">
      <attribute code="demo" type="string" />
  </extension_attributes>
</config>
```

## Step 2: Configure the fieldset {#step-2}

The following code adds the `demo` field to the `sales_convert_quote` fieldset with the `to_order` aspect.
The code snippet in the next step uses the name of the fieldset and aspect to specify which fields to copy.

**etc/fieldset.xml:**

The following example shows how to copy `sales_convert_quote`.`demo` to `sales_order`.`demo`.

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:DataObject/etc/fieldset.xsd">
  <scope id="global">
    <fieldset id="sales_convert_quote">
      <field name="demo">
        <aspect name="to_order" />
      </field>
    </fieldset>
  </scope>
</config>
```

Use the `targetField` attribute to specify the destination field. The following example shows how to copy `sales_convert_quote`.`demo` to `sales_order`.`order_demo`.

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:DataObject/etc/fieldset.xsd">
  <scope id="global">
    <fieldset id="sales_convert_quote">
      <field name="demo">
        <aspect name="to_order" targetField="order_demo"/>
      </field>
    </fieldset>
  </scope>
</config>
```

Define a new `aspect` if you need to copy a field of a source table into multiple fields in a destination table.

The following example shows how to copy `sales_convert_quote`.`demo` into

-  `sales_order`.`demo`
-  `sales_order`.`order_demo`

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:DataObject/etc/fieldset.xsd">
  <scope id="global">
    <fieldset id="sales_convert_quote">
      <field name="demo">
        <aspect name="to_order"/>
        <aspect name="to_demo_order" targetField="order_demo"/>
      </field>
    </fieldset>
  </scope>
</config>
```

## Step 3: Copy the fieldset {#step-3}

For copying the fieldset, we'll observe the `sales_model_service_quote_submit_before` event by using the following code in our `etc/events.xml`:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="sales_model_service_quote_submit_before">
        <observer name="[vendor]_[module]_sales_model_service_quote_submit_before" instance="Vendor\Module\Observer\SaveOrderBeforeSalesModelQuoteObserver" />
    </event>
</config>
```

The following code snippets highlight the code pieces needed to copy a fieldset using the `\Magento\Framework\DataObject\Copy` class.

```php
<?php
namespace Vendor\Module\Observer;

use Magento\Framework\Event\ObserverInterface;

class SaveOrderBeforeSalesModelQuoteObserver implements ObserverInterface
{
    ...

    /**
     * @var \Magento\Framework\DataObject\Copy
     */
    protected $objectCopyService;

    ...

    /**
     * @param \Magento\Framework\DataObject\Copy $objectCopyService
     * ...
     */
    public function __construct(
      \Magento\Framework\DataObject\Copy $objectCopyService,
      ...
    ) {
        $this->objectCopyService = $objectCopyService;
        ...
    }

    /**
     * @param \Magento\Framework\Event\Observer $observer
     */
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
      /* @var \Magento\Sales\Model\Order $order */
      $order = $observer->getEvent()->getData('order');
      /* @var \Magento\Quote\Model\Quote $quote */
      $quote = $observer->getEvent()->getData('quote');

      $this->objectCopyService->copyFieldsetToTarget('sales_convert_quote', 'to_order', $quote, $order);
      ...

      return $this;
    }
}
```

In the code, an instance of the `Copy` class is obtained from the constructor using [dependency injection][2].
The `copyFieldsetToTarget` function call with the `$quote` and `$order` parameters copies the fieldset for the two objects.

## Step 4: Compile and cache clean

Compile the code with this command:

```bash
bin/magento setup:di:compile
```

and clean the cache with this command:

```bash
bin/magento cache:clean
```

[0]:{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DataObject/Copy.php
[1]:{{ page.baseurl }}/extension-dev-guide/attributes.html
[2]:{{ page.baseurl }}/extension-dev-guide/depend-inj.html
