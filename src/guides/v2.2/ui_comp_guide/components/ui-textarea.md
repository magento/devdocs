---
group: ui-components-guide
title: Textarea component
---

The Textarea component implements the `<textarea>` form field.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `cols` | The number of columns that will be specified in the `cols` attribute of the textarea DOM element. | Number | `15` |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `'Magento_Ui/js/form/element/textarea'` |
| `elementTmpl` | The path to the `.html` template of the particular type of field (textarea). | String | `'ui/form/element/textarea'` |
| `label` | Label to be displayed in the field. | String | `''` |
| `rows` | The number of rows that will be specified in the `rows` attribute of the textarea DOM element. | Number | `2` |
| `template` | The path to the general field `.html` template. | String | `'ui/form/field'` |

## Source files

Extends [`Abstract`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js):

-  [app/code/Magento/Ui/view/base/web/js/form/element/textarea.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/textarea.js)
-  [app/code/Magento/Ui/view/base/web/templates/form/element/textarea.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/textarea.html)
-  [app/code/Magento/Ui/view/base/web/templates/form/field.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/field.html)

## Examples

### Integrate the Textarea component with the Form component

This example integrates the Textarea component with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component.

```xml
<form>
    ...
    <fieldset>
        ...
        <textarea name="textarea_example">
            <settings>
                <cols>15</cols>
                <rows>5</rows>
                <label translate="true">Textarea Field Example</label>
            </settings>
        </textarea>
    </fieldset>
</form>
```

#### Result

![Textarea Component example]({{ site.baseurl }}/common/images/ui_comps/ui-textarea-result.png)
