---
group: ui-components-guide
title: Hidden component
---

The Hidden component is a form element that implements the [HTML](https://glossary.magento.com/html) `<input type="hidden">` field.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `component` | The path to the component’s JS constructor in terms of RequireJS. | String | `Magento_Ui/js/form/element/abstract` |
| `template` | The path to the component’s `.html` template. | String | `ui/form/element/hidden` |

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/form/element/abstract.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js)
-  [app/code/Magento/Ui/view/base/web/templates/form/element/hidden.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/hidden.html)

## Examples

### Integrate the Hidden component with the Form component

This example integrates the Hidden component with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component.

```xml
<form>
    ...
    <fieldset>
        ...
        <hidden name="hidden_example">
            <settings>
                <value>hidden value</value>
            </settings>
        </hidden>
    </fieldset>
</form>
```

### Result

![Hidden Component example]({{ site.baseurl }}/common/images/ui_comps/ui-hidden-result.png)
