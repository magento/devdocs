<h2> What's in this topic</h2>

This topic contains the basic information about how to add custom field on checkout page that will control other fields. Lets imagine that you want to add some checkbox that depending on self condition (checked/unchecked) will change conditions of others fields. What we need to do:

1. Create after plugin on LayoutProcessor process method
2. Create checkbox with custom logic

## Create after plugin on LayoutProcessor process method

In your custom module directory, create the following new file: `<your_module_dir>/Block/Checkout/SomeProcessor.php`. In this file, add the following:

``` php
<?php
namespace Magento\Checkout\Block\Checkout;

class SomeProcessor
{
    /**
     * Checkout LayoutProcessor after process plugin.
     *
     * @param \Magento\Checkout\Block\Checkout\LayoutProcessor $processor
     * @param array $jsLayout
     * @return array
     */
    public function afterProcess(\Magento\Checkout\Block\Checkout\LayoutProcessor $processor, $jsLayout)
    {
        $shippingConfiguration = &$jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']
            ['children']['shippingAddress']['children']['shipping-address-fieldset']['children'];
        $billingConfiguration = &$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']
        ['children']['payment']['children']['payments-list']['children'];

        //Checks if shipping step available.
        if (isset($shippingConfiguration)) {
            $shippingConfiguration = $this->processAddress(
                $shippingConfiguration,
                'shippingAddress',
                [
                    'checkoutProvider',
                    'checkout.steps.shipping-step.shippingAddress.shipping-address-fieldset.street',
                    'checkout.steps.shipping-step.shippingAddress.shipping-address-fieldset.city',
                    'checkout.steps.shipping-step.shippingAddress.shipping-address-fieldset.country_id'
                ]
            );
        }

        //Checks if billing step available.
        if (isset($billingConfiguration)) {
            //Iterate over billing forms.
            foreach($billingConfiguration as $key => &$billingForm) {
                //Exclude not billing forms
                if (!strpos($key, '-form')) {
                    continue;
                }

                $billingForm['children']['form-fields']['children'] = $this->processAddress(
                    $billingForm['children']['form-fields']['children'],
                    $billingForm['dataScopePrefix'],
                    [
                        'checkoutProvider',
                        'checkout.steps.billing-step.payment.payments-list.' . $key . '.form-fields.street',
                        'checkout.steps.billing-step.payment.payments-list.' . $key . '.form-fields.city',
                        'checkout.steps.billing-step.payment.payments-list.' . $key . '.form-fields.country_id'
                    ]
                );
            }
        }

        return $jsLayout;
    }

    /**
     * Process provided address to contains checkbox and have trackable address fields.
     *
     * @param $addressFieldset - Address fieldset config.
     * @param $dataScope - data scope
     * @param $deps - list of dependencies
     * @return array
     */
    private function processAddress($addressFieldset, $dataScope, $deps)
    {
        //Creates checkbox.
        $addressFieldset['custom_checkbox'] = [
            'component' => 'Magento_Checkout/js/single-checkbox',
            'config' => [
                'customScope' => $dataScope,
                'template' => 'ui/form/field',
                'prefer' => 'checkbox'
            ],
            'dataScope' => $dataScope . '.custom_checkbox',
            'deps' => $deps,
            'label' => __('Army Address'),
            'provider' => 'checkoutProvider',
            'visible' => true,
            'initialValue' => false,
            'sortOrder' => 10,
            'valueMap' => [
                'true' => true,
                'false' => false
            ]
        ];

        //Makes each address field label trackable.
        if (isset($addressFieldset['street']['children'])) {
            foreach($addressFieldset['street']['children'] as $key => $street) {
                $street['tracks']['label'] = true;
                //Remove .additional class. Can be removed, but style fix provided instead.
                $street['additionalClasses'] = '';
                $addressFieldset['street']['children'][$key] = $street;
            }
        }

        return $addressFieldset;
    }
}
?>
```

Above code it is plugin that add checkbox, makes street labels trackable and assign dependencies to checkbox.

Configure plugin in `<your_module_dir>/etc/frontend/di.xml`

``` xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Checkout\Block\Checkout\LayoutProcessor">
        <plugin name="ProcessAddressConfiguration" type="Magento\Checkout\Block\Checkout\SomeProcessor"/>
    </type>
</config>
```

## Create checkbox with custom logic

In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/web/js/single-checkbox.js`. In this file, add the following:

``` javascript
define([
    'Magento_Ui/js/form/element/single-checkbox',
    'mage/translate'
], function (AbstractField, $t) {
    'use strict';

    return AbstractField.extend({
        defaults: {
            streetLabels: [$t('Company / Section / Unit'), $t('Post Sector Type'), $t('Post Sector')],
            modules: {
                street: '${ $.parentName }.street',
                city: '${ $.parentName }.city',
                country: '${ $.parentName }.country_id'
            }
        },

        updateStreetLabels: function () {
            if (this.value()) {
                this.street().elems.each(function (street, key) {
                    this.street().elems()[key].set('label', this.streetLabels[key]);
                }.bind(this));
            } else {
                this.street().elems.each(function (street, key) {
                    this.street().elems()[key].set('label', '');
                }.bind(this));
            }
        },

        updateCity: function () {
            if (this.value()) {
                this.city().value('ARMEE');
                this.city().disabled(true);
            } else {
                this.city().value('');
                this.city().disabled(false);
            }
        },

        updateCountry: function () {
            if (this.value()) {
                this.country().value('ES');
                this.country().disabled(true);
            } else {
                this.country().value('');
                this.country().disabled(false);
            }
        },

        onCheckedChanged: function () {
            this._super();
            this.updateStreetLabels();
            this.updateCity();
            this.updateCountry();
        }
    });
});
```

Above code it is component that extends from `'Magento_Ui/js/form/element/single-checkbox.js'`. In method `onCheckedChanged` calls methods that updates street labels, change city and country values and disable these fields.
