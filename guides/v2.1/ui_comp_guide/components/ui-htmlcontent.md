---
group: ui-components-guide
subgroup: components
title: HtmlContent component
menu_title: HtmlContent component
---

The HtmlContent {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %} provides the ability to process and render a {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} structure or a Magento block directly inside a UI component configuration. Processing and rendering is executed on the {% glossarytooltip ebe2cd14-d6d4-4d75-b3d7-a4f2384e5af9 %}server side{% endglossarytooltip %}.

The layout structure inside HtmlContent must contain only one top-level block. The top-level block may contain as many child blocks or containers as required.
All blocks inside HtmlContent are integrated into the layout, so external blocks can refer to them and vice verse.

## Configuration options

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>additionalClasses</code></td>
    <td>Sets custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>component</code></td>
    <td>The path to the component’s JS constructor in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/components/html</code></td>
  </tr>
  <tr>
    <td><code>content</code></td>
    <td>HTML content to be displayed.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/content/content</code></td>
  </tr>
  <tr>
    <td><code>visible</code></td>
    <td>Initial component's visibility. When set to "false", the <code>display: none</code> CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
</table>

## Examples

### Render layout

{%highlight xml%}

<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <htmlContent name="customer_edit_tab_view">
       <block class="Magento\Customer\Block\Adminhtml\Edit\Tab\View" name="customer_edit_tab_view" template="Magento_Customer::tab/view.phtml">
         <arguments>
                <argument name="sort_order" xsi:type="number">10</argument>
                <argument name="tab_label" xsi:type="string" translate="true">Customer View</argument>
         </arguments>
         <block class="Magento\Customer\Block\Adminhtml\Edit\Tab\View\PersonalInfo" name="personal_info" template="Magento_Customer::tab/view/personal_info.phtml"/>
       </block>
    </htmlContent>
</form>
{%endhighlight%}

### Render simple Magento block

{%highlight xml%}

<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <htmlContent name="giftregistry">
        <block class="Magento\GiftRegistry\Block\Adminhtml\Customer\Edit\Tab\Giftregistry" name="giftregistry"/>
    </htmlContent>
</form>
{%endhighlight%}

## Source files

Extends `uiComponent`:

- [app/code/Magento/Ui/view/base/web/js/form/components/html.js]({{ site.mage2100url }}app/code/Magento/Ui/view/base/web/js/form/components/html.js)
- [app/code/Magento/Ui/view/base/web/templates/content/content.html]({{ site.mage2100url }}app/code/Magento/Ui/view/base/web/templates/content/content.html)
