---
group: ui-components-guide
title:  Email component
---

The Email component implements the [HTML](https://glossary.magento.com/html) `<input type="email">` form field.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `component` | The path to the component’s `.js` file. | String | `Magento_Ui/js/form/element/abstract` |
| `elementTmpl` | The path to the `.html` template of the particular field type. | String | `ui/form/element/email` |
| `template` | The path to the general field `.html` template. | String | `ui/form/field` |

## Source files

Extends [`Abstract`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js):

-  [app/code/Magento/Ui/view/base/web/js/form/element/abstract.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js)
-  [app/code/Magento/Ui/view/base/web/templates/form/element/email.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/email.html)
-  [app/code/Magento/Ui/view/base/web/templates/form/field.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/field.html)

## Examples

### Integrate the Email component with the Form component

This example integrates the Paging component with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component

```xml
<form>
    ...
    <fieldset>
        ...
        <email name="email_example">
            <settings>
                <label translate="true">Email Field Example</label>
            </settings>
        </email>
    </fieldset>
</form>
```

### Result

![Email Component example]({{ site.baseurl }}/common/images/ui_comps/ui-email-result.png)
