---
group: UI_Components_guide
subgroup: components
title: Date component
menu_title: Date component
version: 2.2
---

## Overview

The Date component implements a custom date input field. It uses a date picker implementation provided by the [calendar widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_calendar.html).

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
    <td><code>component</code></td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/date</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the <code>.html</code> template of the particular field type component (date).</td>
    <td>String</td>
    <td><code>ui/form/element/date</code></td>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>The configuration object that is passed to the calendar widget.</td>
    <td>Object</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>inputDateFormat</code></td>
    <td>Format of the date received from the server (ICU Date Format). Used only in date picker mode (<code>this.options.showsTime == false</code>).</td>
    <td>String</td>
    <td><code>y-MM-dd</code></td>
  </tr>
  <tr>
    <td><code>outputDateFormat</code></td>
    <td>Format of the date sent to the server (ICU Date Format). Used only in date picker mode (<code>this.options.showsTime == false</code>)</td>
    <td>String</td>
    <td><code>MM/dd/y</code></td>
  </tr>
  <tr>
    <td><code>pickerDateTimeFormat</code></td>
    <td>Date/time format that is used to display date in the input field.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>shiftedValue</code></td>
    <td>Date/time value shifted to corresponding time zone, according to <code>this.storeTimeZone</code> property. This value is sent to the server.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>storeTimeZone</code></td>
    <td>The timezone used.</td>
    <td>String</td>
    <td><code>'UTC'</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the general field <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
  <tr>
    <td><code>timezoneFormat</code></td>
    <td>Timezone format, required for the <a href="https://momentjs.com/">moment.js library</a> for conversion.</td>
    <td>String</td>
    <td><code>YYYY-MM-DD HH:mm</code></td>
  </tr>
</table>
