---
group: ui-components-guide
title: Date component
---

The Date component implements a custom date input field. It uses a date picker implementation provided by the [calendar widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_calendar.html).

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `'Magento_Ui/js/form/element/date'` |
| `elementTmpl` | The path to the `.html` template of the particular field type component (date). | String | `'ui/form/element/date'` |
| `options` | The configuration object that is passed to the calendar widget. | Object | `{}` |
| `inputDateFormat` | Format of the date received from the server (ICU Date Format). Used only in date picker mode (`this.options.showsTime == false`). | String | `'y-MM-dd'` |
| `outputDateFormat` | Format of the date sent to the server (ICU Date Format). Used only in date picker mode (`this.options.showsTime == false`) | String | `'MM/dd/y'` |
| `pickerDateTimeFormat` | Date/time format that is used to display date in the input field. | String | `''` |
| `shiftedValue` | Date/time value shifted to corresponding time zone, according to `this.storeTimeZone` property. This value is sent to the server. | String | `''` |
| `storeTimeZone` | The timezone used. | String | `'UTC'` |
| `template` | The path to the general field `.html` template. | String | `'ui/form/field'` |
| `timezoneFormat` | Timezone format, required for the [moment.js library](https://momentjs.com/) for conversion. | String | `YYYY-MM-DD HH:mm` |

## Source files

Extends [`Abstract`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js):

-  [`app/code/Magento/Ui/view/base/web/js/form/element/date.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/date.js)

## Example

```xml
<form>
    ...
    <fieldset>
        ...
        <field name="date_example" formElement="date">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">some_source</item>
                </item>
            </argument>
            <settings>
                <validation>
                    <rule name="validate-date" xsi:type="boolean">true</rule>
                </validation>
                <dataType>text</dataType>
                <label translate="true">Date Example</label>
                <visible>true</visible>
                <dataScope>some_scope</dataScope>
            </settings>
        </field>
        ...
    </fieldset>
    ...
</form>
```

## Result

![Date Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-date-result.png)
![Date Component Expanded Example]({{ site.baseurl }}/common/images/ui_comps/ui-date-expanded-result.png)
