---
layout: default
group: pattern
subgroup: Controls
title: Admin Design Pattern Library
menu_title: Buttons
menu_order: 1
menu_node: 
version: 2.0
github_link: pattern-library/controls/buttons/buttons.md
redirect_from: /guides/v1.0/pattern-library/controls/buttons/buttons.html
---

## Buttons 
Buttons bring attention to actions on the screen. This article will cover the use of general buttons on Magento. 

For solutions not described in this topic, please refer to other related patterns or contact the Magento UX Design team.


<h3 id="when-to-use">When to Use</h3>
Buttons should be used anywhere a call to action(CTA) is needed. Discretion should be
used when deciding when to use a button vs. a hyperlink, icon, or another call to action.


<h3 id="when-not-to-use">When Not to Use</h3>
* Do not use buttons to indicate actions that are better suited as hyperlinks such     
  as "Cancel". Some exceptions may apply.
* Do not use more than one primary page level action on a single page for 
  different actions. Some exceptions may apply.
* Do not use buttons to indicate a link to more information or to a task not related 
  to primary flow.

<h3 id="variations">Variations</h3>

Variations of this pattern are as follows, and will be detailed in the section on Appearance and behavior:

* Page level buttons are to be used for calls to action on pages.
* Form level buttons are to be used on forms.
* Table level buttons are to be used within tables or data grids

<br>

Buttons will be take on one of the below variations.

<table>
	<thead>
		<th> Page Level </th>
		<th> Form Level </th>
		<th> Table Level </th>
	</thead>
	<tbody>
		<tr>
			<td>Primary</td>
			<td>Primary</td>
			<td>Regular</td>
		</tr>
		<tr>
			<td>Secondary</td>
			<td>Secondary</td>
			<td>Icon</td>
		</tr>
		<tr>
			<td>Toggle</td>
			<td>Toggle</td>
			<td>Toggle</td>
		</tr>
		<tr>
			<td>Tertiary</td>
			<td>Tertiary</td>
			<td>Tertiary</td>
		</tr>
		<tr>
			<td>Table Button</td>
			<td>Table Button</td>
			<td>Table Button</td>
		</tr>
		<tr>
			<td>Primary Dropdown</td>
			<td>Primary Dropdown</td>
			<td>Primary Dropdown</td>
		</tr>
		<tr>
			<td>Secondary Dropdown</td>
			<td>Secondary Dropdown</td>
			<td>Secondary Dropdown</td>
		</tr>
	</tbody>
</table>

CSS style classes will need to be established for any buttons that require a custom
defined style.

<h2 id="style_behavior">Styles and Behavior</h2>

#### 1. Page Level Button 

<img src="img/Button_grid01_primary.png">

**Font details**<br>
Family: Open Sans Semibold;<br>
Size: 17px; (or 1.125em based on 14px default font)<br>
Color: #ffffff<br>
<br>
**Background color**<br>
Primary: #eb5202; (CSS-$magento-orange-color)<br>
Secondary: #514943; (CSS-$magento-dark-brown)<br>
<br>
**Hover background color**<br>
Primary: # aa2d00;<br>
Secondary: # 282421;<br>
<br>
**Disabled style**<br>
Opacity: 50%<br>
<br>
**Page Level Button Padding**<br>
Top/Bottom: 11px<br>
Left/Right: 20px<br>
<br>
**Margin Spacing**<br>
Top/Bottom margin spacing should not be less than 10px<br>
Left/Right margin spacing should not be less than 20px<br>
<br>


#### 2. Dropdown Buttons

<img src="img/Button_grid03_dropdown.png" >

**Font details**<br>
Family: Open Sans Semibold;<br>
Size: 17px; (or 1.125em based on 14px default font)<br>
Color: #ffffff<br>
<br>
**Background color**<br>
Primary: #eb5202; (CSS-$magento-orange-color)<br>
Secondary: #514943; (CSS-$magento-dark-brown)<br>

<br>
**Hover background color**<br>
Primary: # aa2d00;<br>
Secondary: #28242;<br>
Dropdown stroke: #337ab7;<br>
Dropdown Highlight: #eeeeee<br>
<br>
**Disabled style**<br>
Opacity: 50%<br>
<br>
**Page Level Button Padding**<br>
Top/Bottom: 11px<br>
Left/Right: 20px<br>
<br>
**Margin Spacing**<br>
Top/Bottom margin spacing should not be less than 10px<br>
Left/Right margin spacing should not be less than 20px<br>

<br>


#### 3. Tertiary Buttons

<img src="img/Button_grid02_tertiary.png">

<br>
**Font details**<br>
Family: Open Sans Semibold;<br>
Size: 14px; (or .750em based on 14px default font)<br>
Color: #ffffff<br>
<br>
**Background colors**<br>
Secondary: #514943; (CSS-$magento-dark-brown)<br>
<br>
**Hover background color**<br>
Secondary: #28242;<br>
<br>
**Disabled style**<br>
Opacity: 50%<br>
<br>
**Tertiary Level Button Padding**<br>
Top/Bottom: 12px<br>
Left/Right: 30px<br>
<br>
**Margin Spacing**<br>
Top/Bottom margin spacing should not be less than 10px<br>
Left/Right margin spacing should not be less than 20px<br>
<br>

**Tertiary Button Example:**<br><br>
<img src="img/TertiaryExample.png">

<br>

####  4. Quaternary Buttons

<img src="img/Button_grid02_quaternary.png">

<br>
Quaternary buttons are only after all the buttons hierarchy have been used.<br>
<br>
**Font details**<br>
Family: Open Sans Semibold;<br>
Size: 13px; (or .750em based on 14px default font)<br>
Color: #322923<br>
<br>
**Background colors**<br>
Light: #dcdcdc;<br>
<br>
**Border**<br>
Solid<br>
Width: 1px;<br>
Border color: #9d9d9d;<br>
<br>
**Hover background color**<br>
Dark:#cccccc;<br>
<br>

**Disabled style**<br>
Opacity: 50%<br>
<br>
**Tertiary Level Button Padding**<br>
Top/Bottom: 12px<br>
Left/Right: 15px<br>
<br>
**Margin Spacing**<br>
Top/Bottom margin spacing should should not be less than 10px<br>
Left/Right margin spacing should not be less than 10px<br>
<br>
**Quaternary Button Example:**<br><br>
<img src="img/TableButtonExample.png">

####  5. Toggle Buttons
The toggle button acts like a checkbox. When you touch/click on it, the state toggles between "yes" and "no" and/or "on" and "off".<br>
<br>
**When to Use/When Not to Use**<br>
Use toggle for:<br>
* Binary selection (true/false) when only a single option can be set<br>
* When multiple non-required selections can be set<br>
* In relation to other form elements when needed<br>
<br>
Do not use checkboxes if:<br>
* Multiple options need visibility<br>

<br>
**Variations**<br>
No additional variations.<br>
<br>
**Font details**<br>
Family: Open Sans Semibold;<br>
Size: 13px; (or .750em based on 14px default font)<br>
Color: #322923<br>
<br>
**Background colors**<br>
Light: #dcdcdc;<br>
<br>
**Border**<br>
Solid<br>
Width: 1px;<br>
Border color: #9d9d9d;<br>
<br>
**Active background color**<br>
Dark:#cccccc;<br>
<br>
**Inactive background color**<br>
Dark:#cccccc;<br>
<br>
**Disabled style**<br>
Opacity: 50%<br>
<br>
**Tertiary Level Button Padding**<br>
Top/Bottom: 12px<br>
Left/Right: 15px<br>
<br>
**Margin Spacing**<br>
Top/Bottom margin spacing should should not be less than 10px<br>
Left/Right margin spacing should not be less than 10px<br>
<br>
**Examples of toggle buttons:**<br><br>
<img src="img/TableWToggle.png">

<h3 id="accessibility">Accessibility</h3>

PC: <a href="http://support.microsoft.com/kb/126449" target="blank">http://support.microsoft.com/kb/126449</a><br>
OS: <a href="http://support.apple.com/en-us/HT201236" target="blank">http://support.apple.com/en-us/HT201236</a><br>
(Keyboard shortcut same as checkbox)<br>

<h3 id="assets">Assets</h3>

Please reach out to the Magento UX Design team if you need anything else.

<a href="src/magento-buttons.psd">Download Button PSD source</a>

