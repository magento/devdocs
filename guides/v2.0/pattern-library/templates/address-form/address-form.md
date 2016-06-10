---
layout: default
group: pattern
subgroup: Templates
title: Admin Design Pattern Library
menu_title: Address Form
menu_order: 1
menu_node: 
version: 2.0
github_link: pattern-library/templates/address-form/address-form.md
redirect_from: /guides/v1.0/pattern-library/templates/address-form/address-form.html
---

<h2> Address Form </h2>

<h3> Contents </h3>

* <a href="#overview">Overview</a>
* <a href="#when-to-use">When to Use / When Not to Use</a>
* <a href="#variations">Variations</a>
* <a href="#styling">Styling</a>
* <a href="#examples">Usage Example</a>
* <a href="#assets">Assets</a>

<h3 id="overview">Overview</h3>
This article will establish standards and rules for an address entry forms.<br>
For solutions not described in this article, please refer to other related patterns or contact the Magento UX Design team.


<h3 id="when-to-use">When to Use / When Not to Use</h3>
The address entry fields should be used whenever an address needs to be captured. This set of form elements will be universal across the Magento user experience. This pattern should follow rules established in the Form Elements and related patterns.

<h3 id="variations">Variations</h3>
The only variation of this pattern at this time is the North American Address Entry format. Users have the ability to create address entry formats for other locales within the system.

####Fields That Make Up Address Entry (in order)

<table>
	<thead>
		<th> Label</th>
		<th> Input Type </th>
		<th> Required? </th>
	</thead>
	<tbody>
		<tr>
			<td>Address Line 1</td>
			<td>Text Field</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Address Line 2</td>
			<td>Text Field</td>
			<td>No</td>
		</tr>
		<tr>
			<td>City</td>
			<td>Text Field</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>State/Province</td>
			<td>Dropdown (Default can be localized)</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>ZIP/Postal Code</td>
			<td>Text Field</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Country</td>
			<td>Dropdown (Default can be localized)</td>
			<td>Yes</td>
		</tr>
	</tbody>
</table>

<img src="img/AddressForm_example01.jpg">


<h3 id="styling">Styling</h3>
This pattern will follow the Form standards established in the Form Elements and related patterns. Refer to the Form Elements and related patterns for style information.


<h3 id="examples">Usage Example</h3>
<img src="img/AddressForm_example02.jpg">

<h3 id="assets">Assets</h3>
Source files associated with this article are currently attached the Form Elements Pattern.
