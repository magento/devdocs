---
group: ui-components-guide
title: Text component
---

The Text component displays text data in the components like [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) and [DynamicRows]({{ page.baseurl }}/ui_comp_guide/components/ui-dynamicrows.html).

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `class` | The path to the component class. | String | `Magento\Ui\Component\Form\Element\DataType\Text` |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `Magento_Ui/js/form/element/text` |
| `disabled` | Initial component's state. When set to `true`, users can't take action on the element. | Boolean | `false` |
| `elementTmpl` | The path to the `.html` template of the particular field type. | String | `ui/form/element/text` |
| `label` | Label to be displayed in the field. | String | `''` |
| `links`.`value` | [Links]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html) the component's "value" property with provider using the declared in the "dataScope" property of the parent component. | String | `${ $.provider }:${ $.dataScope }` |
| `visible` | Initial component's visibility. When set to `false`, the "display: none" CSS style is added to the component's DOM block. | Boolean | `true` |

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/form/element/text.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/text.js)

## Examples

### Integrate Text component with Form component

The following example integrates the Text component with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component:

```xml
<form>
    ...
    <fieldset>
        ...
        <text name="text_example" template="ui/form/field">
            <settings>
                <label translate="true">Text Field Example</label>
                <visible>true</visible>
                <disabled>false</disabled>
                <elementTmpl>ui/form/element/text</elementTmpl>
                <value>The text value example</value>
            </settings>
        </text>
    </fieldset>
</form>
```

#### Result

![Text Component example]({{ site.baseurl }}/common/images/ui_comps/ui-text-result.png)
