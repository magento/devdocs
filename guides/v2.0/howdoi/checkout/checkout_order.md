---
layout: default
group: howdoi
subgroup: checkout
title: Customize the view of a checkout step
menu_title: Customize the view of a checkout step
menu_order: 4
github_link: howdoi/checkout/checkout_order.md
---
<h2>What's in this topic</h2>

This topic describes how to add custom validations performed before the order is placed during checkout. Namely, the valiations which are performed after a shopper clicks the **Place Order** button. Writing the validator istself is not covered in this topic.

* TOC
{:toc}

## Create the validator

In your custom module directory, create a .js file implementing the validator. It should be located under `<your_module_dir>/js/view/` 
<p class="q">not sure about the path</p>

The following is a sample of the valdiation .js file:
<p class="q">What is the value of this sample?</p>
{%highlight js%}
define(
    [],
    function () {
        'use strict';
        return {
            /**
             * Validate something
             *
             * @returns {boolean}
             */
            validate: function() {
                //Put your validation logic here
                return true;
            }
        }
    }
);
{%endhighlight%}

For your checkout customization to be applied correctly, your custom module should depend on the Magento_Checkout module.

## Declare the validator in the checkout layout

In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. 
In this file, add the following:
{%highlight xml%}
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
                                <item name="billing-step" xsi:type="array">
                                    <item name="children" xsi:type="array">
                                        <item name="payment" xsi:type="array">
                                            <item name="children" xsi:type="array">
                                                <item name="additional-payment-validators" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <item name="module-validator" xsi:type="array">
                                                            <item name="component" xsi:type="string">%your_module_dir%/js/view/%your_validator%</item>
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

<p class="q">Is it all the required content?</p>