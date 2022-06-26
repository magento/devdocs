---
group: frontend-developer-guide
title: Email templates layout handle
functional_areas:
  - Frontend
migrated_to: https://developer.adobe.com/commerce/frontend-core/guide/templates/email-layout-handle/
layout: migrated
---

{:.bs-callout-warning}
Magento 2.3.4 and above restricts the way that custom variables can be used within email templates.
See [Migrating custom email templates](template-email-migration.html) for more information.

## Email layout handle {#email-layout-handle}

In sales-related email templates (order, invoice, shipment, and credit memo templates), layout handles are used to render the ordered items and grand total sections.

![Email Order Item Details.]({{ page.baseurl }}/frontend-dev-guide/images/email-order-items-render.png)

For example, the `sales_email_order_items` layout handle is specified in `app/code/Magento/Sales/view/frontend/email/order_new.html`:

{% raw %}
```html
{{layout handle="sales_email_order_items" order_id=$order_id area="frontend"}}
```
{% endraw %}

The `sales_email_order_items` handle is an XML file located in `app/code/Magento/Sales/view/frontend/layout/sales_email_order_items.xml`

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd" label="Email Order Items List" design_abstraction="custom">
    <update handle="sales_email_order_renderers"/>
    <update handle="sales_email_item_price"/>
    <body>
        <block class="Magento\Sales\Block\Order\Email\Items" name="items" template="Magento_Sales::email/items.phtml" cacheable="false">
            <block class="Magento\Framework\View\Element\RendererList" name="sales.email.order.renderers" as="renderer.list"/>
            <block class="Magento\Sales\Block\Order\Totals" name="order_totals" template="Magento_Sales::order/totals.phtml">
                <arguments>
                    <argument name="label_properties" xsi:type="string">colspan="2"</argument>
                </arguments>
                <block class="Magento\Tax\Block\Sales\Order\Tax" name="tax" template="Magento_Tax::order/tax.phtml">
                    <action method="setIsPlaneMode">
                        <argument name="value" xsi:type="string">1</argument>
                    </action>
                </block>
            </block>
        </block>
        <block class="Magento\Framework\View\Element\Template" name="additional.product.info" template="Magento_Theme::template.phtml"/>
    </body>
</page>
```

{:.ref-header}
Related topics

*  [Extend a layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html)
*  [Layout instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html)
