---
layout: default
group: UI_Components_guide
subgroup: components
title: Date component
menu_title: Date component
version: 2.2
github_link: ui_comp_guide/components/ui-date.md
---

## Date configuration

Extends all `abstract` configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/date</code></td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the <code>.html</code> template of the particular field type component (date).</td>
    <td>String</td>
    <td><code>ui/form/element/date</code></td>
  </tr>
  <tr>
    <td>inputDateFormat</td>
    <td>Format of the date received from the server (ICU Date Format). Used only in date picker mode (<code>this.options.showsTime == false</code>).</td>
    <td>String</td>
    <td>y-MM-dd</td>
  </tr>
  <tr>
    <td>outputDateFormat</td>
    <td>Format of the date sent to the server (ICU Date Format). Used only in date picker mode (<code>this.options.showsTime == false</code>)</td>
    <td>String</td>
    <td>MM/dd/y</td>
  </tr>
  <tr>
    <td>pickerDateTimeFormat</td>
    <td>Date/time format that is used to display date in the input field.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>shiftedValue</td>
    <td>Date/time value shifted to corresponding time zone, according to <code>this.storeTimeZone</code> property. This value is sent to the server.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the general field <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
  <tr>
    <td>timezoneFormat</td>
    <td>Timezone format, required for the <a href="https://momentjs.com/">moment.js library</a> for conversion.</td>
    <td>String</td>
    <td>YYYY-MM-DD HH:mm</td>
  </tr>
</table>
