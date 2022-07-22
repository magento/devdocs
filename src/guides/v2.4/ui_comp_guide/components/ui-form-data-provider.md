---
group: ui-components-guide
title: FormDataProvider component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The FormDataProvider [UI component](https://glossary.magento.com/ui-component) is a data provider for the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component. It stores form data in a specific format that is shared among all UI components in the scope of [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component and provides the functionality for submitting the data.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `class` | Path to the [PHP](https://glossary.magento.com/php) class responsible for the [backend](https://glossary.magento.com/backend) implementation of the component | String | `Magento\Framework\View\Element\UiComponent\DataProvider\DataProvider` |
| `component` | The path to the component's `.js` file, relative to RequireJS. | String | `Magento_Ui/js/form/provider` |
| `clientConfig` | Configuration of the [FormClient]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/form/client.js) component. | Object | `urls: {save: '${ $.submit_url }',beforeSave: '${ $.validate_url }'}` |
| `submit_url` | Path to controller that will process the form data submitting request. | String | `-` |
| `validate_url` | Path to controller that will process the form data validation request. | String | `-` |

## Sources files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/form/provider.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/form/provider.js)

## Examples

### Integrate the FormDataProvider component with the Form component

This is an example of how the FormDataProvider component integrates with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component:

```xml
<form>
    <dataSource name="sales_rule_form_data_source">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
            </item>
        </argument>
        <settings>
            <submitUrl path="path/to/submit_form_data_controller"/>
            <validateUrl path="path/to/validate_form_data_controller"/>
        </settings>
    </dataSource>
</form>
```
