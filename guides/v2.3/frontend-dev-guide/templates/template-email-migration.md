---
group: frontend-developer-guide
title: Migrating custom email templates
functional_areas:
  - Frontend
---

{% raw %}
With the release of Magento 2.3.4, we made some changes to custom email templates and how they access data and methods for email content.
This topic describes the changes and provides instructions on how to convert your existing custom email templates.

## Changes to the custom email template workflow

In Magento 2.3.4, custom email templates are only allowed to use scalar values for variable data.
Direct calls to methods are no longer allowed.
To be more specific, methods can no longer be called from variables from either the `var` directive or when used as parameters. For example `{{var order.getEmailCustomerNote()}}` or `{{something myVar=$obj.method()}}` will fail to resolve.

A 'custom email template' is any template created in the Magento admin **Marketing** > Communications > **Email Templates** > **Add New Template** area.
Notice in the incorrect example, the `getConfirmationLink()` method is called directly.

-  Incorrect: `{{var subscriber.getConfirmationLink()}}`
-  Correct: `{{var subscriber_data.confirmation_link}}`

We refer to this as 'strict mode' for email templates.
All default templates have been converted to this strict mode.

All existing custom email templates will continue to work after upgrading to 2.3.4.
Any new email templates that are created after installing 2.3.4 must be written in strict mode.

With the new change, methods are now called in the email template model and passed to the template as a key/value pair in a data object.

## Abstraction example

Pre-2.3.4, the New Order email template had a line with a direct method call:

```html
<p class="greeting">{{trans "%customer_name," customer_name=$order.getCustomerName()}}</p>
```

As of 2.3.4, with the method call removed:

```html
<p class="greeting">{{trans "%customer_name," customer_name=$order_data.customer_name}}</p>
```

The `customer.name` is now being computed within the [model][] file.
Below, within the `$transport` block, we see `customer_name` defined in the `order_data` object and the method call place there.
This `order_data` object is passed to the view page as a `DataObject` and is referenced in the variable as above.

```php
public function send(Invoice $invoice, $forceSyncMode = false)
{
    $invoice->setSendEmail($this->identityContainer->isEnabled());
    if (!$this->globalConfig->getValue('sales_email/general/async_sending') || $forceSyncMode) {
        $order = $invoice->getOrder();
        $this->identityContainer->setStore($order->getStore());
        $transport = [
            'order' => $order,
            'invoice' => $invoice,
            'comment' => $invoice->getCustomerNoteNotify() ? $invoice->getCustomerNote() : '',
            'billing' => $order->getBillingAddress(),
            'payment_html' => $this->getPaymentHtml($order),
            'store' => $order->getStore(),
            'formattedShippingAddress' => $this->getFormattedShippingAddress($order),
            'formattedBillingAddress' => $this->getFormattedBillingAddress($order),
            'order_data' => [
                'customer_name' => $order->getCustomerName(),
                'is_not_virtual' => $order->getIsNotVirtual(),
                'email_customer_note' => $order->getEmailCustomerNote(),
                'frontend_status_label' => $order->getFrontendStatusLabel()
            ]
        ];
        $transportObject = new DataObject($transport);
```

## Create a custom abstraction

The above examples show changes to default Magento files. We do not recommend editing core files as changes may be lost when upgrading.
Instead, if you need to call a method for a custom email template variable, you can create your own files.
In this example, we will create and pass a `customer_email` custom value.

1. Create a class that implements `Magento\Framework\Filter\SimpleDirective\ProcessorInterface`:

   ```php
    class MySimpleDirective implements ProcessorInterface
    {
        public function getName(): string {return 'mydir';}
        public function process($value, array $parameters, ?string $html): string {
            return 'some code';
        }
        public function getDefaultFilters(): ?array {return ['somefilter'];}
    }
   ```

   and save the file to <Vendor>/<module>/model.

1. Add the new directive to the pool by adding this block to `di.xml`.

   ```xml
    <type name="Magento\Framework\Filter\SimpleDirective\ProcessorPool">
        <arguments>
            <argument name="processors" xsi:type="array">
                <item name="mydir" xsi:type="object">MyModule\Model\MySimpleDir</item>
            </argument>
        </arguments>
    </type>
   ```

1. Use the new variable in the email template: `{{var "some value" param1=foo|nl2br}}some content{{/mydir}}`.

## Data objects and getUrl

There are a couple of exceptions to strict mode.

One exception is for objects that extend from `DataObject`. These can still be called directly.
Even then, we do not actually call the getter method directly, but rather, resolve which key is needed and call `getData(<keyname>)` instead.

For example, if we have;

```php
$template->setVariables(['customer_data'=>new DataObject('mykey' => 'foo')]);
```

and in the template where we have

```php
{{somedir mydir mydir=$customer_data.getMyKey()}}
```

the directive will resolve to “foo”.

The same is true for `{{somedir blah blah=$customer_data.my_key()}}`.
But note that in both cases the DataObject will not have `getMyKey` invoked but rather `getData(‘my_key’)` is invoked instead.

The second exception is for `getUrl`.
Directives that use the format `{{var this.getUrl(params, go, here)}}` will still continue to work for now.

## Advanced filtering

As of 2.3.4, we have removed the limit of processing 2 filters per directive.
Now `{{var order_data.shipping_description|filter1|filter2|filter3}}` will work.

## Nested arrays

Getting data from nested arrays is now supported.
For example, if we have:

```php
$template->setVariables(['customer_data'=> ['name' => ['first_name' => 'John']]]);
```
and in the template:

```php
{{somedir blah blah=$customer_data.name.first_name}}
```
it will resolve to “John”.

This new syntax also works in combination with the `DataObject` exception.
For example, if we have:

```php
$template->setVariables(['customer_data'=> ['name' => new DataObject('first_name' => 'John')]]);
```
and in the template we have:

```php
{{somedir blah blah=$customer_data.name.first_name}}
```

it will resolve to “John”.

{% endraw %}

<!-- Link Definitions -->
[Insert Variable]: https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/templates/template-email.html#customize-content
[New Order email template]: https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/Sales/view/frontend/email/order_new.html
[model]: https://github.com/magento/magento2ce/blob/2.3-develop/app/code/Magento/Sales/Model/Order/Email/Sender/InvoiceSender.php
[1]: https://github.com/magento/magento2ce/blob/2.3-develop/app/code/Magento/Email/Model/AbstractTemplate.php
