---
layout: default
group: howdoi
subgroup: Checkout
title: Add a new checkout step
menu_title: Add a new checkout step
menu_order: 1
github_link: howdoi/checkout/checkout_new_step.md
---

The default Magento Checkout consists of two steps:

 - Shipping Information
 - Review and Paymetns Information

You can add a custom checkout step, it should be implemented as JavaScript component. For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code. To add customizations, create a custom module.


1. Add a module directory (not covered in this topic). See [Build your module]({{site.gdeurl}}extension-dev-guide/build.html) for details). All custom files must be stored there.
1. Create the `.js` file implementing the new step.
2. Create an html template for the component.
3. Declare the new step in the Checkout page layout.

##Add the JavaScript file implementing the new step {#component}

A new checkout step must be implemented as UI component. That is, its JavaScript implementation must be a JavaScript module. The file must be stored under the `<your_module_dir>/view` directory.
 
A sample `view/my-step-view.js` with comments follows:

{%highlight js%}

define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function (
        ko,
        Component,
        _,
        stepNavigator
    ) {
        'use strict';
             /**
             *
             * mystep - is the name of the component's .html template, 
             * your_module_dir - is the name of the your module directory.
             * 
             */
        return Component.extend({
            defaults: {
                template: 'your_module_dir/mystep'
            },
 
            //add here your logic to display step,
            isVisible: ko.observable(true),
 
            /**
             *
             * @returns {*}
             */
            initialize: function () {
                this._super();
                // register your step
                stepNavigator.registerStep(
                    //step code will be used as 'step content id' in the template
                    'step_code',
                    //step alias
                    null,
                    //step title value
                    'Step Title',
                    //observable property with logic when display step or hide step
                    this.isVisible,
                     
                    /**
                     */
                    _.bind(this.navigate, this),
 
                    /**
                     * sort order value
                     * 'sort order value' < 10: step displays before shipping step;
                     * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                     * 'sort order value' > 20 : step displays after payment step
                     */
                    15
                );
 
                return this;
            },
 
            /**
             * The navigate() method is responsible for navigation between checkout step
             * during checkout. You can add custom logic, for example some conditions
             * for switching to your custom step 
             */
            navigate: function () {
 
            },
 
            /**
             * @returns void
             */
            navigateToNextStep: function () {
                stepNavigator.next();
            }
        });
    }
);

{%endhighlight js%}


## Add the .html template

In the module directory, add the `.html` template for the component. It must be located under the <`your_module_dir>/view/frontend/web/template` directory.

A sample `mystep.html` follows:
{%highlight html%}

<!--id should be the same with step code-->
<li id="step_code" data-bind="fadeVisible: isVisible">
<div class="step-title" data-bind="i18n: 'Step Title'" data-role="title"></div>
    <div id="checkout-step-title"
         class="step-content"
         data-role="content">
 
        <form data-bind="submit: navigateToNextStep" novalidate="novalidate">
            <div class="actions-toolbar">
                <div class="primary">
                    <button data-role="opc-continue" type="submit" class="button action continue primary">
                        <span><!-- ko i18n: 'Next'--><!-- /ko --></span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</li>
{%endhighlight html%}

## Add your step to the Checkout page layout

For the new step to be displayed on the page, you need to declare it in the Checkout page layout, which is defined in `checkout_index_index.xml`. 

So you need to add an [extending]({{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html) `checkout_index_index.xml` layout file in the following location: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`

A sample `checkout_index_index.xml` follows:

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
                                            <item name="my-new-step" xsi:type="array">
                                                <item name="component" xsi:type="string">Magento_Your_Module_Name/js/view/my-step-view</item>
                                                    <!--To display step content before shipping step "sortOrder" value should be < 1-->
                                                    <!--To display step content between shipping step and payment step  1 < "sortOrder" < 2 -->
                                                    <!--To display step content after payment step "sortOrder" > 2 -->
                                                <item name="sortOrder" xsi:type="string">2</item>
                                                <item name="children" xsi:type="array">
                                                    <!--add here child component declaration for your step-->
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
{%endhighlight xml%}