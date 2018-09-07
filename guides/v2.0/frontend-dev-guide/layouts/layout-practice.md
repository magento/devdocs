---
group: frontend-developer-guide
subgroup: B_Layouts
title: Customizing layout illustration
menu_title: Customizing layout illustration
menu_order: 7
redirect_from: /guides/v1.0/frontend-dev-guide/layouts/layout-practice.html
functional_areas:
  - Frontend
---

## What's in this topic

This article features a step-by-step illustration of how a real-life {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} customization task is performed. Namely, it illustrates how to change the layout of customer account links in a Magento store page header.

## Moving customer account links

In their Orange theme, OrangeCo wants to transform the header links block to a drop-down, the way it is done in the Magento Luma theme:

![]({{ site.baseurl }}/common/images/layout_transform.png)

To do this, they need to wrap the list of header links with a container and add a greeting with a drop-down arrow before the list. 

The Orange {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} [inherits]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from Blank, so by default the rendered header links {% glossarytooltip 8f407f13-4350-449b-9dc5-217dcf01bc42 %}markup{% endglossarytooltip %} in Orange looks like following:

![]({{ site.baseurl }}/common/images/layout_code_before1.png)

<br>
The markup, that is needed for a drop-down:

![]({{ site.baseurl }}/common/images/layout_code_after.png)

#### Step 1: Define the blocks

OrangeCo [applies the Luma theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html){: target="_blank"}. Using the approach described in [Locate templates, layouts, and styles]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html){: target="_blank"} they find out that the blocks responsible for displaying the header links are defined in `<Magento_Customer_module_dir>/view/frontend/layout/default.xml`:

{%highlight xml%}
...
    <referenceBlock name="top.links">
        <block class="Magento\Customer\Block\Account\Link" name="my-account-link">
            <arguments>
                <argument name="label" xsi:type="string" translate="true">My Account</argument>
            </arguments>
        </block>
        <block class="Magento\Customer\Block\Account\RegisterLink" name="register-link">
            <arguments>
                <argument name="label" xsi:type="string" translate="true">Create an Account</argument>
            </arguments>
        </block>
        <block class="Magento\Customer\Block\Account\AuthorizationLink" name="authorization-link" template="account/link/authorization.phtml"/>
    </referenceBlock>
...
{%endhighlight xml%}

#### Step 2: Define the templates

Similar to the way they defined the layout on the previous step, OrangeCo 
defines the template which is used for rearranging the links:

`<Magento_Customer_module_dir>/view/frontend/templates/account/customer.phtml`

{%highlight html%}
<?php if($block->customerLoggedIn()): ?>
    <li class="customer-welcome">
        <span class="customer-name"
              role="link"
              tabindex="0"
              data-mage-init='{"dropdown":{}}'
              data-toggle="dropdown"
              data-trigger-keypress-button="true"
              data-bind="scope: 'customer'">
            <span data-bind="text: customer().fullname"></span>
            <button type="button"
                    class="action switch"
                    tabindex="-1"
                    data-action="customer-menu-toggle">
                <span><?php /* @escapeNotVerified */ echo __('Change')?></span>
            </button>
        </span>
        <script type="text/x-magento-init">
        {
            "*": {
                "Magento_Ui/js/core/app": {
                    "components": {
                        "customer": {
                            "component": "Magento_Customer/js/view/customer"
                        }
                    }
                }
            }
        }
        </script>
        <?php if($block->getChildHtml()):?>
        <div class="customer-menu" data-target="dropdown">
            <?php echo $block->getChildHtml();?>
        </div>
        <?php endif; ?>
    </li>
<?php endif; ?>
{%endhighlight php%}

#### Step 3: Extend the base layout to add a block

OrangeCo needs to create a new block, say, `header.links`, in the `header.panel` container, to move the links there. As the links can be added to this list by different modules, it is better to add this block to the `default.xml` page configuration of the `Magento_Theme` {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

So the following [extending]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html){: target="_blank"} layout is added in the Orange theme:

    app/design/frontend/OrangeCo/orange/Magento_Theme/layout/default.xml

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="header.panel">
            <block class="Magento\Framework\View\Element\Html\Links" name="header.links">
                <arguments>
                    <argument name="css_class" xsi:type="string">header links</argument>
                </arguments>
            </block>
        </referenceContainer>
    </body>
</page>
{%endhighlight xml%}

#### Step 4: Move links

To move the links to the `header.links` block, OrangeCo adds an extending layout:

`app/design/frontend/OrangeCo/orange/Magento_Customer/layout/default.xml`

{%highlight xml%}
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <body>
            <referenceBlock name="header.links">
                <block class="Magento\Customer\Block\Account\Customer" name="customer" template="account/customer.phtml" before="-"/>
                <block class="Magento\Customer\Block\Account\AuthorizationLink" name="authorization-link-login" template="account/link/authorization.phtml"/>
            </referenceBlock>
            <block class="Magento\Theme\Block\Html\Header" name="header" as="header">
                <arguments>
                    <argument name="show_part" xsi:type="string">welcome</argument>
                </arguments>
            </block>
            <move element="header" destination="header.links" before="-"/>
            <move element="register-link" destination="header.links"/>
            <move element="top.links" destination="customer"/>
            <move element="authorization-link" destination="top.links" after="-"/>
        </body>
    </page>
{%endhighlight xml%}

Now the customer links look like following:

![]({{ site.baseurl }}/common/images/layout_screen2.png)

<br>
The last touch is adding styles:

![]({{ site.baseurl }}/common/images/layout_screen3.png)
