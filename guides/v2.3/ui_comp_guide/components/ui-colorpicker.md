---
group: ui-components-guide
title: ColorPicker component
---

The ColorPicker component uses the [Spectrum](https://bgrins.github.io/spectrum/) and [tinycolor.js](https://bgrins.github.io/TinyColor/) libraries to make it easier to choose and implement color values.
The ColorPicker component must be a child of the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) or [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) components.

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>colorFormat</code></td>
    <td>Defines the color format displayed in the selection tool and input field. Valid formats: <code>hex</code>, <code>rgb</code>, <code>hsl</code>, <code>hsv</code>, <code>name</code>, <code>none</code></td>
    <td><code>string</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td><code>colorPickerMode</code></td>
    <td>Defines the mode that affects the available color picker functionality. Valid modes: <code>simple</code>, <code>full</code>, <code>noalpha</code>, <code>palette</code></td>
    <td><code>string</code></td>
    <td><code>-</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the <code>.html</code> template of the particular field type (color-picker).</td>
    <td><code>String</code></td>
    <td><code>ui/form/element/email</code></td>
  </tr>
</table>

## Sources files

- [app/code/Magento/Ui/view/base/ui_component/etc/definition/colorPicker.xsd]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/ui_component/etc/definition/colorPicker.xsd)
- [app/code/Magento/Ui/view/base/web/js/form/element/colorPicker.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/form/element/color-picker.js)
- [app/code/Magento/Ui/view/base/web/js/lib/knockout/bindings/colorPicker.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/lib/knockout/bindings/color-picker.js)
- [app/code/Magento/Ui/view/base/web/templates/form/element/colorPicker.html]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/templates/form/element/color-picker.html)
- [lib/web/jquery/spectrum/spectrum.js]({{ site.mage2bloburl }}/{{page.guide_version}}/lib/web/jquery/spectrum/spectrum.js)
- [lib/web/jquery/spectrum/tinycolor.js]({{ site.mage2bloburl }}/{{page.guide_version}}/lib/web/jquery/spectrum/tinycolor.js)

## Examples

```xml
    <form>
    ...
        <colorPicker name="colors_filter" class="Magento\Ui\Component\Form\Element\ColorPicker" component="Magento_Ui/js/form/element/color-picker" template="ui/form/field">
            <settings>
                <label translate="true">Color</label>
                <elementTmpl>ui/form/element/color-picker</elementTmpl>
                <colorFormat>rgb</colorFormat>
                <colorPickerMode>full</colorPickerMode>
                <dataScope>colors_filter</dataScope>
            </settings>
        </colorPicker>
    ...
    </form>
```

