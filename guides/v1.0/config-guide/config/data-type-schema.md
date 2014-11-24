---
layout: default
group: dev-guide
subgroup: Configuration
title: Data types schema
menu_title: Data types schema
menu_order: 3
github_link: config-guide/config/data-type-schema.md
---

<h2 id="overview">Overview</h2>
<p class="q">Reviewer: I'm targeting this for removal from the Dev Guide. If you disagree, please provide a detailed answer why not. Why should this be a topic? Why would someone go to a guide to look for something like this? Wouldn't it be better to document the XSD in the XSD?</p>


<p>The Magento application uses the <code>lib/internal/Magento/Framework/Data/etc/argument/types.xsd</code> XML schema to validate argument data types.</p>
<h2 id="description">Description</h2>
<p>This table describes the <code>lib/internal/Magento/Framework/Data/etc/argument/types.xsd</code> XML schema:</p>
<table style="width:100%">
   <colgroup>
      <col width="15%">
      <col width="15%">
      <col width="15%">
      <col width="35%">
      <col width="20%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>Type</th>
         <th>Attribute</th>
         <th>Child element</th>
         <th>Description</th>
         <th>Implemented by</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>argumentType</code></td>
         <td><code>name</code> (Required)</td>
         <td>&nbsp;</td>
         <td>Abstract argument type.</td>
         <td>&nbsp;</td>
      </tr>
      <tr>
         <td><code>argumentsType</code></td>
         <td>&nbsp;</td>
         <td><code>argument</code></td>
         <td>Argument container type.</td>
         <td>&nbsp;</td>
      </tr>
      <tr>
         <td><code>array</code></td>
         <td>&nbsp;</td>
         <td><code>item</code></td>
         <td>Array data type. Array items are specified using item element, and can be of <code>array</code> type. Item names should be unique.</td>
         <td><code>Magento\Framework\Data\Argument\Interpreter\ArrayType</code></td>
      </tr>
      <tr>
         <td><code>boolean</code></td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>Boolean data type. Values: "1|0" or "true|false".</td>
         <td><code>Magento\Framework\Data\Argument\Interpreter\Boolean</code></td>
      </tr>
      <tr>
         <td><code>null</code></td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>A data type for an empty value.</td>
         <td><code>Magento\Framework\Data\Argument\Interpreter\NullType</code></td>
      </tr>
      <tr>
         <td><code>number</code></td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>A data type for a numeric value.</td>
         <td><code>Magento\Framework\Data\Argument\Interpreter\Number</code></td>
      </tr>
      <tr>
         <td><code>object</code></td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>A data type for passing a class name (should be specified according to PSR coding standard).</td>
         <td><code>Magento\Framework\Data\Argument\Interpreter\Object</code></td>
      </tr>
      <tr>
         <td><code>string</code></td>
         <td><code>translate = "true|false"</code></td>
         <td>&nbsp;</td>
         <td>String data type.</td>
         <td><code>Magento\Framework\Data\Argument\Interpreter\String</code></td>
      </tr>
   </tbody>
</table>

#### Related topics

<p><a href="../view/xml-schema-layout.html" target="_blank">XML Schema For Your Layout</a></p>