---
group: ui-components-guide
subgroup: components
title: urlInput component
menu_title: urlInput component
---

The urlInput component implements the `<urlInput>` form field.

## Configuration options

<table>
  <tr>
    <th>
      Option
    </th>
    <th>
      Description
    </th>
    <th>
      Type
    </th>
    <th>
      Default
    </th>
  </tr>
  <tr>
    <td>
      <code>component</code>
    </td>
    <td>
      The path to the component’s .js file in terms of RequireJS.
    </td>
    <td>
      String
    </td>
    <td>
      <code>Magento_Ui/js/form/element/url-input</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>template</code>
    </td>
    <td>
      The path to the general field <code>.html</code> template.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/form/element/url-input</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>class</code>
    </td>
    <td>
      The path to the component class.
    </td>
    <td>
      Object
    </td>
    <td>
      <code>Magento\Ui\Component\Form\Element\UrlInput</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>settingTemplate</code>
    </td>
    <td>
      The path to the template to display an additional link setting. <em>Example:</em> Display in the new tab.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/form/element/urlInput/setting</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>typeSelectorTemplate</code>
    </td>
    <td>
      The path to the template to display link types.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/form/element/urlInput/typeSelector</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>isDisplayAdditionalSettings</code>
    </td>
    <td>
      The setting to define the display of an additional setting.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>urlTypes</code>
    </td>
    <td>
      Contains the required attribute class that specifies the array of configurations for every URL type.
    </td>
    <td>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
      <code>settingValue</code>
    </td>
    <td>
      The default value for the checkbox. Open in a new tab.
    </td>
    <td>
      Boolean
    </td>
    <td>
    </td>
  </tr>
</table>

## Examples

### Configure component

By default, you can use `Magento\Ui\Model\UrlInput\LinksConfigProvider`, which provides text input for URLs. `LinksConfigProvider` is composite and you can add new options to the `di.xml` file.

```
<type name="Magento\Ui\Model\UrlInput\LinksConfigProvider">
    <arguments>
        <argument name="linksConfiguration" xsi:type="array">
            <item name="default" xsi:type="string">Magento\Ui\Model\UrlInput\DefaultLink</item>
        </argument>
    </arguments>
</type>
```

The option `class` implements `\Magento\Ui\Model\UrlInput\ConfigInterface` and provides the child component configuration:

```
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
* `Magento\Catalog\Ui\Component\UrlInput\Category` for category
* `Magento\Catalog\Ui\Component\UrlInput\Product` for product
