---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Data set
menu_order: 8
github_link: mtf/mtf_entities/mtf_dataset.md
---

<h2>Data set</h2>

* TOC
{:toc}

##Data set overview
Data sets are used for filling test forms with prepared data.
A data set can have several variations.
Each variation has constraints that are checked at the end of the test flow.

This topic shows how to prepare data for the test.

##Data set structure

Data set is an XML file that contains test variations for a test case.
Variation includes:
- Data used during the test run
- [Constraints][] that will be called after test flow

The following table shows structure of the data set:

<table>
<col width="1*">
<col width="1*">
<col width="2*">
<tr><th>Node </th><th>Semantics </th><th>Attributes </th></tr>
<tr>
<td><code>config</code> </td>
<td>The root element that defines an XML namespace and an XML Schema. </td>
<td><ul>
<li><code> xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</code></li>
<li><code>xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/variations.xsd"</code></li>
</ul> </td>
</tr>
<tr>
<td><code>testCase</code> </td>
<td>Contains configuration data of a test case in attributes, and variations in child elements. </td>
<td><ul>
<li><code>name</code> - full name of a test case class. Required.</li>
<li><code>summary</code> - description of a test case. Optional.</li>
<li><code>ticketId</code> - identifier of related ticket. Optional.</li>
</ul> </td>
</tr>
<tr>
<td><code>variation</code></td>
<td>Contains in attributes the configuration data of the variation, and data with constraints in child elements.</td>
<td><ul>
<li><code>name</code> - a full name of a test case class. Required.</li>
<li><code>firstConstraint</code> - a full name of constraint that is performed first. Optional.</li>
<li><code>method</code> - a name of the test method from the test class. Optional.</li>
<li><code>summary</code> - description of the variation. Optional.</li>
<li><code>ticketId</code> - an identifier of the related ticket. Optional.</li>
</ul></td>
</tr>
<tr>
<td><code>data</code> </td>
<td>Data to be used by test case. </td>
<td><ul>
<li><code>name</code> - a reference to the element where data must be entered. A format is the following: <i>entity_name</i>/<code>data</code>/<i>name_of_the_field</i>, for example <code>product/data/name</code>. Optional.</li>
<li><code>xsi:type</code> - a full name of constraint class that is performed next in a queue. 
The following data types are available:
<ul>
<li><code>array</code></li>
<li><code>string</code></li>
<li><code>boolean</code></li>
<li><code>object</code></li>
<li><code>number</code></li>
<li><code>null</code></li>
</ul></li>Optional.
</ul> </td>
</tr>
<tr>
<td><code>constraint</code></td>
<td>Constraint that contains assertions performed after test flow.  </td>
<td><ul>
<li><code>name</code> - a full name of a test case class. Required.</li>
<li><code>next</code> - a full name of constraint class that is performed next in a queue. Optional.</li>
<li><code>prev</code> - a full name of constraint class that is performed previous in a queue. Optional.</li>
</ul></td></tr>
</table>

Variation should contain only data that is required for its flow.

<div class="bs-callout bs-callout-tip">
  <p>Data with name <code>tag</code> can be used to customize test suite run.</p>
</div>

##How to add data set to a test
To create a data set for Create simple product test:

1. Create .xml file with the same name as the test: `CreateSimpleProductEntityTest.xml` within TestCase directory.

2. Put data with different variations for your test into `CreateSimpleProductEntityTest.xml` file. As a result you'll have the following structure:

<p><a href="{{ site.baseurl }}common/images/Data set2.png"><img src="{{ site.baseurl }}common/images/Data set2.png"/></a></p> 

[Constraints]: {{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html
[constraint]: {{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html
[fixtures]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html

*[MTF]: Magento Testing Framework
