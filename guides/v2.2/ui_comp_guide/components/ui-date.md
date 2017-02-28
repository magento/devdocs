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
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/element/date</td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the .html template of the particular field type component (date).</td>
    <td>String</td>
    <td>ui/form/element/date</td>
  </tr>
  <tr>
    <td>inputDateFormat</td>
    <td>Format of the date received from the server (ICU Date Format). Used only in date picker mode (this.options.showsTime == false).</td>
    <td>String</td>
    <td>y-MM-dd</td>
  </tr>
  <tr>
    <td>outputDateFormat</td>
    <td>Format of the date sent to the server (ICU Date Format). Used only in date picker mode (this.options.showsTime == false)</td>
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
    <td>Date/time value shifted to corresponding timezone, according to this.storeTimeZone property. This value is sent to the server.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the general field .html template.</td>
    <td>String</td>
    <td>ui/form/field</td>
  </tr>
  <tr>
    <td>timezoneFormat</td>
    <td>Timezone format, required for the <a href="https://momentjs.com/">moment.js library</a> for conversion.</td>
    <td>String</td>
    <td>YYYY-MM-DD HH:mm</td>
  </tr>
</table>