---
layout: default
group: pattern
subgroup: Getting User Input
title: Admin Design Pattern Library
menu_title: Row Pattern (Table)
menu_order: 4
menu_node:
github_link: pattern-library/getting-user-input/row_pattern/row_pattern.md
---

<h2> Row Pattern </h2>
_(also known as "Table Light" and "Mini Grid")_

<h3>Contents</h3> 

* <a href="#overview">Overview</a>
* <a href="#anotomy">Anatomy</a>
* <a href="#behavior">Behavior and Interaction</a>
* <a href="#pagination">Pagination</a>
* <a href="#examples">Examples</a>
* <a href="#accessibility">Accessibility</a>
* <a href="#assets">Assets</a>

<h3 id="overview">Overview</h3>
The "Row Pattern" is used in the Magento Admin interface wherever the User is expected to want to input tabular data. This pattern allows the user to add as many rows of data as they desire. "Light tables" are used when the User needs to add/edit a relatively small amount of items (rows).

The pattern **supports** following actions:
- Add new row
- Remove row
- Rearrange/drag the rows
- Edit fields in a row
- Pagination (for 20 > more rows)

The pattern **does not support**:
- Filtering, sorting, searching the table
- Adding, removing, rearranging of _columns_

<h3 id="anatomy">Anatomy of a Row Pattern</h3>

May include any of the following elements:

* Table Body
* Table heading
* Row
* Text in the row
* Form elements inside the row
* Drag handle
* “Add row” button
* “Remove row” icon
* Pagination (for more than 20 rows)

All these elements are optional, depending on the functions needed.


<h3 id="behavior">Behavior and Interaction</h3>

* The Row Pattern, by default, will display one row to indicate to the User that data input is available (or required). A link beneath this initial input row will allow the User to add an additional row if desired.

* Each row will have a delete control on the far right, often represented by a _"trash can"_ icon. This will allow the User to remove any unwanted rows, along with any data that has been input into them (prior to saving the form).

* The delete contol _CAN_ allow the user to remove all rows, even the initial row displayed upon page load.

* The "Add" link however should always be present to allow the user to add a row, even in the event of deleting all rows.     

<img src="img/behavior.png">

<h3 id="pagination">Pagination</h3>
For better performance, the Row Pattern pagination should be enabled automatically whenever 20 (or more) rows are present. Once pagination is enabled an “Order” column should be appeneded to allow the user to rearrange the rows.

<img src="img/pagination.png">

Once pagination is enabled an “Order” column should be appeneded to allow the user to rearrange the rows.

<img src="img/drag.png">


<h3 id="examples">Examples</h3>
Typically the Row Pattern will span either 8 or 12 colums for the page grid, depending on the layout of the page or panel on which it appears. The Row Pattern should accomodate all typical form elements as are necessary, but discretion should be used to insure the elements within the row are easy to read and interact with and do not become to cramped within the space.

<img src="img/row-examples.png">


<h3 id="accessibility">Accessibility</h3>

The form drop down, scroll area, and selections should be accessible via keyboard.

Follow this form control accessibility guideline: 
 <a href="http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms">http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms <a>


<h3 id="assets">Assets</h3>
PSD files can be found here:
<a href="src/Magento_Row_pattern_src.zip">Download Row Pattern ZIP file</a>
