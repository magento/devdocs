---
layout: default
group: howdoi
subgroup: checkout
title: Add a custom template for a form field on Checkout page
menu_title: Add a custom template for a form field on Checkout page
menu_order: 7
github_link: howdoi/checkout/checkout_edit_form.md
---

<h2> What's in this topic</h2>
This topic describes how to change the HTML template of a form field used in the Checkout pages. This refer to the forms used on both steps of the Checkout: Shipping Information step and Review and Paymetns Information step. By changing the template you can change the way the field is displayed.

<p class="q">What else? Can we change the type of the field like this? What are real life user cases when a dev needs this?</p>

<p class="q">What about adding a new field to the existing form?</p>

## Overview

The view part of the forms used in Checkout are implemented using Knockout JS. 
<p class="q">Can we add link to the Form UI component http://devdocs.magento.com/guides/v2.0/ui-components/ui-form.html?</p>

To change the template of a Checkout form field, do the following:
1. [Implement a custom HTML template for knockout JS script that will render the form field](#template).
2. Specify the new template in the checkout page layout.

There are more details about each step in the following sections.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should [depend]({{site.gdeurl}}extension-dev-guide/composer-integration.html) on the Magento_Checkout module.


## Implement the HTML template for the field {#template}

Create the template in the following directory: <your_module_dir>/view/frontend/web/template/form/element/<your_template>.html

<div class="bs-callout bs-callout-info" id="info">
<p>Original templates of all form field types are located in  the `app/code/Magento/Ui/view/base/web/templates/form/element` directory.</p>
</div>

<p class="q">Should they view the original templates? is anything else we can advise here?</p>

## Specify the new template in layout

In your custom module directory, create a new `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file. 
In this file, add content similar to the following:

{% highlight xml%}
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
            <arguments>
                <argument name="jsLayout" xsi:type="array">
                    <item name="components" xsi:type="array">
                        <item name="checkout" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="steps" xsi:type="array">
                                    <item name="children" xsi:type="array">
                                        <item name="shipping-step" xsi:type="array">
                                            <item name="children" xsi:type="array">
                                                <item name="shippingAddress" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <item name="shipping-address-fieldset" xsi:type="array">
                                                            <item name="children" xsi:type="array">

                                                                <item name="telephone" xsi:type="array">
                                                                    <item name="config" xsi:type="array">
                                                                        <item name="elementTmpl" xsi:type="string">%MODULE_NAME%/form/element/%your_template%</item>
                                                                    </item>
                                                                </item>
                                                            </item>
                                                        </item>
                                                    </item>
                                                </item>
                                            </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
{%endhighlight%}



