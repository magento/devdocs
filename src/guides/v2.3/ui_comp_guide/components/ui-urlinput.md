---
group: ui-components-guide
subgroup: components
title: urlInput component
menu_title: urlInput component
---

The urlInput component implements the `<urlInput>` form field.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `class` | The path to the component class. | Object | `Magento\Ui\Component\Form\Element\UrlInput` |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `Magento_Ui/js/form/element/url-input` |
| `isDisplayAdditionalSettings` | The setting to define the display of an additional setting. | Boolean | `true` |
| `settingTemplate` | The path to the template to display an additional link setting. _Example:_ Display in the new tab. | String | `ui/form/element/urlInput/setting` |
| `settingValue` | The default value for the checkbox. Open in a new tab. | Boolean | `false` |
| `template` | The path to the general field `.html` template. | String | `ui/form/element/url-input` |
| `typeSelectorTemplate` | The path to the template to display link types. | String | `ui/form/element/urlInput/typeSelector` |
| `urlTypes` | Contains the required attribute class that specifies the array of configurations for every URL type. | Object | `{}` |

## Source files

Extends [`Abstract`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js):

-  [app/code/Magento/Ui/view/base/web/js/form/element/url-input.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/url-input.js)
-  [app/code/Magento/Ui/view/base/web/templates/form/element/urlInput/setting.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/urlInput/setting.html)
-  [app/code/Magento/Ui/view/base/web/templates/form/element/urlInput/typeSelector.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/urlInput/typeSelector.html)

## Examples

### Configure component

By default, you can use `Magento\Ui\Model\UrlInput\LinksConfigProvider`, which provides text input for URLs. `LinksConfigProvider` is composite and you can add new options to the `di.xml` file.

```xml
<type name="Magento\Ui\Model\UrlInput\LinksConfigProvider">
    <arguments>
        <argument name="linksConfiguration" xsi:type="array">
            <item name="default" xsi:type="string">Magento\Ui\Model\UrlInput\DefaultLink</item>
        </argument>
    </arguments>
</type>
```

The option `class` implements `\Magento\Ui\Model\UrlInput\ConfigInterface` and provides the child component configuration:

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

namespace Magento\Ui\Model\UrlInput;

class MyLink implements ConfigInterface
{

    /**
     * {@inheritdoc}
     */
    public function getConfig()
    {
        return [
            'label' => __('Select'),
            'component' => 'Magento_Ui/js/form/element/select',
            'template' => 'ui/form/element/select',
            'sortOrder' => 10,
            'options' => [
                [
                    'value' => 1,
                    'label' => 'hello'
                ],
                [
                    'value' => 2,
                    'label' => 'hello2'
                ]
            ],
            'validation' => [
                //'blacklist-url'=> //Add regexp to blacklist your URL here
                //Add custom validation rule here
                //validation.addRule
            ],
        ];
    }
}
```

Magento provides the ability to use two link types by default:

-  `Magento\Catalog\Ui\Component\UrlInput\Category` for category
-  `Magento\Catalog\Ui\Component\UrlInput\Product` for product

### Integrate the urlInput component with the Form component

This example integrates the urlInput component with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component.

```xml
<form>
    ...
    <fieldset>
        ...
        <urlInput name="url_input_example">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="urlTypes" xsi:type="object">Magento\Ui\Model\UrlInput\LinksConfigProvider</item>
                </item>
            </argument>
        </urlInput>
    </fieldset>
</form>
```

#### Result

![urlInput Component default link example]({{ site.baseurl }}/common/images/ui_comps/ui-urlinput-default-link-result.png)
![urlInput Component category link example]({{ site.baseurl }}/common/images/ui_comps/ui-urlinput-category-link-result.png)
![urlInput Component product link example]({{ site.baseurl }}/common/images/ui_comps/ui-urlinput-product-link-result.png)
