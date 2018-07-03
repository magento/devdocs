---
group: pattern
subgroup: Displaying and Dealing with Data
title: Admin Design Pattern Library
version: 2.1
github_link: pattern-library/displaying-data/datatable/datatable.md
---

## Data table
The data-table organizes {% glossarytooltip fd9ae55f-ccf5-480b-a7f3-bd2c80f0b2a4 %}complex data{% endglossarytooltip %} into a tabular view. Each data record has its own row with data elements presented in columns with meaningful column headings. This allows users to quickly scan and understand complex data and perform actions against the data. 

Data-table requirements for Magento 2 include:
<ul>
	<li>Improved search and filters</li>
	<li>Draggable columns</li>
	<li>Sortable columns</li>
	<li>Ability to add and remove columns</li>
	<li>Inline editing</li>
	<li>Support for thumbnails</li>
	<li>Consistent case and naming format</li>
	<li>Functional parity with the existing Magento application</li>
</ul>

## Data-table {#datatable}
This specification defines the following features for the data-table:
<ul>
	<li>Positioning of elements to allow for a more intuitive user experience</li>
	<li>Pagination</li>
	<li>Keyword Search</li>
	<li>Allowing for user-defined number of items per page</li>
	<li>Allowing users to go directly to a specific page</li>
	<li>Filtering</li>
	<li>Sortable columns</li>
	<li>Ability to add and/or remove columns</li>
	<li>Single item select and edit</li>
	<li>Multiple item select and edit</li>
	<li>Image/Thumbnail placement</li>
</ul>	
<br />
<br />
<img src="img/datatable01.jpg">
<br />
<br />

### Data-table Visual Architecture
The data-table will contain the following elements where applicable and as needed:
<ul>
	<li>Pagination controls</li>
	<li>Actions</li>
	<li>Settings, bookmarks and search</li>
	<li>Filters</li>
	<li>Column headers</li>
	<li>Data</li>
</ul>

## Modularity
The data-table will be designed in such a way that any of the above controls can be removed, collapsing the table gracefully.
<br />
<img src="img/datatable02.jpg">
<br />
<br />
<br />
<br />
<img src="img/datatable03.jpg">
<br />

## Pagination {#pagination}
Pagination controls allow the user to easily page through and organize data. Pagination controls will contain the following:
<ul>
	<li>Drop-down select for number of items per page	
	<ul>
		<li>Increments TBD</li>
		<li>Custom field for user-defined increments</li>
	</ul>
	</li>
	<li>Page number (skip to) field and action button</li>
	<li>‘Next’ button</li>
	<li>‘Previous’ button when applicable</li>
</ul>
<br />
<img src="img/datatable04.jpg">
<br />

### Pagination Rules
<ul>
	<li>The pagination controls will only be present if the number of table items exceeds the lowest increment
		for number of items per page.</li>
	<li>The ‘Previous’ button should be disabled when viewing the first page of results.</li>
	<li>The ‘Next’ button should be disabled when viewing the last page of results.</li>
	<li>The ‘Skip to’ field will allow only numeric values.</li>
	<li>‘Skip to’ will be instantiated once the value is changed and [Return] or [Tab] is clicked.</li>
	<li>A custom number of items per page can be set by selecting the "Custom" link which will allow users to specify a number. This number can be edited.</li>
</ul>
<br />
<br />
<img src="img/datatable05.jpg">
<br />
<br />
<br />
<img src="img/datatable06.jpg">
<br />
<br />
<br />
<img src="img/datatable07.jpg">
<br />
<br />
<br />

## Mass Actions {#massactions}
A common {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} across the existing Magento user experience includes mass actions that can be taken. This is a convention used on both data-table and non-data-table pages. Not all pages have these action buttons. This document will not attempt to capture all actions that appear here or how they might be redesigned for Magento 2. This document will make note that these actions exist on many of the data-table pages and will use the area directly above the table to indicate placement of such action buttons where they might be needed.
<br />
<br />
<img src="img/datatable08.jpg">
<br />
<br />
Actions will be positioned above the table . Each table  will have it’s own set of actions, some table s will have no actions. This new proposal removes the submit button which is currently visible next to the "Actions" drop down selector. In the {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} that any confirmations are needed for actions, modal dialogs will be used.
<br />
<br />
<br />
<img src="img/datatable09.jpg">
<br />
<br />

### Single Actions
These actions will appear within the data area of the table where applicable. When this action column is applicable, it will always appear on the far right of the table . Single actions will allow users to take action on a record within the table . In most cases, no more than one action will appear here. In the event that additional actions are needed, they will appear in the form of a drop down. These actions are specific to the single record in which they are associated. In the event that a user selects multiple items in the table, these actions will be disabled or hidden.
<br />
<br />
<br />
<img src="img/datatable10.jpg">
<br />
<br />
<br />

### Messaging and Confirmation {#message}
There are times when an action needs to be confirmed. In these cases, the user’s task will be interrupted with a message asking the user to confirm the operation before proceeding. This message is presented via a modal dialog.
<br />
<br />
<br />
<img src="img/datatable11.jpg">
<br />
<br />
<br />

Once an action is taken, success/fail messaging should appear as an overlay which fades away. Certain actions may  require that an Undo action be provided. This experience should be the same whether a single file is being deleted via the "actions" button for that record or 1 or more files have been selected via a checkbox and deleted via the mass actions delete.
<br />
<br />
<img src="img/datatable12.jpg">
<br />
<br />
<br />

## Table Control {#tablecontrol}
This section will cover the ability to set column visibility, save view state, and search. Filters will be covered in the following section.

### Keyword Search
A {% glossarytooltip caa46cea-25d7-4e4f-bce1-11430ada59dc %}keyword{% endglossarytooltip %} search will allow users to search on the data that has been loaded into the table  being viewed. This search is a part of the table, and is separate from the global record search in the page header. It will allow for exact phrases(using quotations) and the following boolean operators:

### Placement and Behavior
The keyword search function and table controls will be:
<ul>
	<li>Displayed above the table</li>
	<li>Actions</li>
	<li>Remain visibly persistent as the table scrolls</li>
</ul>

## Sticky Headers and Controls {#stickyheaders}
As the table  scrolls, the table controls will dynamically condense to a single row. All functionality of the controls will remain available.
<br />
<br />
<br />
<img src="img/datatable13.jpg">
<br />
<br />
<br />
The persistent header will reactivate when you scroll back up:
<br />
<br />
<br />
<img src="img/datatable14.jpg">
<br />
<br />
<br />

For details about component's implementation see <a href="{{ site.baseurl }}/guides/v2.0/ui-components/ui-secondary-header.html">Sticky Header Component</a>.

### Multiple Data-tables on Page
The header will stick to the first table until the user scrolls past the bottom of that table . The header will have the same behavior for each subsequent data-table.
<br />
<br />
<br />
<img src="img/datatable15.jpg">
<br />
<br />
<br />

### Interactions
The data-table will reset to the top of the table  when the user:
<ul>
	<li>Submits a search query</li>
	<li>Applies a filter</li>
	<li>Sorts a column</li>
	<li>Selects a mass action</li>
	<li>Loads up a saved view</li>
	<li>Clicks to the next page of results</li>
	<li>Changes the number of items per page</li>
</ul>
<br />
<br />
The data-table will remain in the current viewport when the user:
<ul>
	<li>Creates a new saved view</li>
	<li>Edits cells in-line</li>
</ul>

### Sticky First Column
The table can be scrolled horizontally. And to keep the row identifiable, the checkbox column and first column will be sticky. In creating the grid, the first column must always be an identifiable attribute such as name.
<br />
<br />
<br />
<img src="img/datatable16.jpg">
<br />
<br />
<br />
If there are more columns than can be shown in one view, the vertical scroll bar should appear for navigating to the rest of the column options as seen in the image below. Only 6 options should be shown per each vertical column, we should ensure that the all area of panel will be visible above the page fold.
<br />
<br />
<br />
<img src="img/datatable17.jpg">
<br />
<br />
<br />
In the example below, the first column is "Name" rather than "Customer ID."
This horizontal scroll should still work with page scroll and sticky header.
<br />
<br />
<br />
<img src="img/datatable18.jpg">
<br />
<br />
<br />

## Search {#search}
When the user enters a keyword in the search field and submits the query (by clicking the spyglass icon), the table will display only records that contain the designated keyword. The search term is displayed as a "chip" below the search field (and inline with any additional filters that were applied). In this layout, additional search terms can be paired with the initial term to further refine the results. Each time a term is submitted, the data is filtered, the term is displayed as a "chip" and the search field returns to it’s initial state (it does not retain the term entered my the user).
<br />
<br />
<br />
<img src="img/datatable19.jpg">
<br />
<br />
<br />
<img src="img/datatable20.jpg">
<br />
<br />
<br />

### Autocomplete
As text is added to the search field, the system will suggest terms and phrases based on data contained in the table being searched against.
<ul>
	<li>No more than 5 suggestions should be displayed at a time</li>
</ul>
<br />
<br />
<img src="img/datatable21.jpg">
<br />
<br />
<br />

### Search/Filter Tags
Once a search term or filter is applied and results are loaded into the table, the terms or parameters used to filter by are displayed in the minified version of the "filter chip(s)". If the user removes all the tags, the filters row would disappear.
<br />
<br />
<br />
<img src="img/datatable22.jpg">
<br />
<br />
<br />

### Error Checking/Validation
There will be no form validation or error checking for search queries since any combination of characters may be searched. Messaging will display in the data area when no results can be returned.
<br />
<br />
<br />
<img src="img/datatable23.jpg">
<br />
<br />
<br />

### User Flow
Upon conducting a query, a result set is returned based on the above rules. Once results are loaded, the keyword search field will be empty, and a chip for the keyword will appear. If a user clears the chip, the table will then refresh, reloading data based on any filters that are applied.

### Columns
The user will be able to select which columns are visible from here. Settings will also be contained in a panel that can be activated by clicking on the columns action. Users will also have the ability to cancel out of this prompt, as well as reset (restore) the table back to it’s default column view. These settings will be ‘sticky’ per table, so users returning to any particular table will see the table the way it was last configured. 
<br />
<br />
<br />
<img src="img/datatable24.jpg">
<br />
<br />
<img src="img/datatable25.jpg">
<br />
<br />

### Custom Views
Custom views allow the user to save the state of a table. When a view is saved, the table settings will be stored. These settings include column visibility and position, as well as any filter or search that has been applied to the table. Saving a ‘view’ will be done via a dropdown control. Saved views will be available per table.
<br />
<br />
<br />
<img src="img/datatable26.jpg">
<br />
<br />
<br />

### Editing Saved Views
Views can be named or deleted by clicking an edit icon. Refer to "Adding a custom value to drop down list" above for more detailed behavior.
<br />
<br />
<br />
<img src="img/datatable27.jpg">
<br />
<br />
<br />

## Filters {#filters}
Filters allow users to customize the display of information in an associated data-table. By entering desired parameters (for example, a date range) in the available filter input sections table returns a modified view, making visible only the records meeting the user-determined criteria.

### Advanced Filters
To access the Advanced Filters the user may click/tap the "Filters" button found in the table controls area. When activated, the button transforms into a tab and displays the available filters in a 'drawer' which opens between the table controls and the table data. The available filters are determined by the columns present in the table; therefore, if the user customizes the column visibility of the table to show some columns and hide others, the corresponding filters for these columns will display or hide in the filter 'drawer'.
<br />
<br />
<img src="img/filter_init.png">
<br />
<br /> 
{%
include note.html
type='tip'
content='Not all columns may be filtered (such as **Actions** or checkbox select) and therefore will not be presented in the list of filters even though their columns are visible in the data-table.'
%}

<br />
<br />
<img src="img/filter_drawer.png">
<br />
<br />
To apply filters, the user sets the desired parameters in the input fields of the appropriate filters. The action initiated by clicking/tapping the "Apply" button (found in the advanced filters area). When applied, the advanced filter 'drawer' closes and the data-table refreshes to display the filtered data. The applied filters are indicated to the user in the form of filter 'tags' that appear between the filter button and the table data. Filter 'tag' are listed in the order that they are applied and each individual 'tag' has a control for removing it.
<br />
<br />
<img src="img/filter_applied.png">
<br />
<br />

### Removing Filters {#remove}
Users may remove a filter setting by clicking/tapping the remove control next to the filter 'tag'. Doing so removes the particular filter from the *query*, the table refreshes and the data excluded by that filter then appears in the table. The user can quickly remove all applied filters by clicking/tapping the "clear all" link that follows the list of 'filter tags'.
<br />
<br />
<img src="img/filter_remove.png">
<br />
<br />
<br />

<!---
### Quick Filters
In some instances, pre-determined "quick filters" may be present in the form of links. These are filter shortcuts of common filtering attributes to assist users who may not readily consider filtering the table for results. Quick Filters are perhaps most useful for extracting ‘reports’ from tables.  These filters are elevated above the ‘advanced filters’.

<strong>Step 1:</strong> Starting state. User click on a quick filter link.
<br />
<br />
<br />
<img src="img/datatable35.jpg">
<br />
<br />
<br />
<strong>Step 2:</strong> Quick filter is applied.
Once user click on the quick filters, that quick filter is shown as a chip. The user can add additional quick filters.
<br />
<br />
<br />
<img src="img/datatable36.jpg">
<br />
<br />
<br />
<strong>Example:</strong> Quick filters and active filters are present.
<br />
<br />
<br />
<img src="img/datatable37.jpg">
<br />
<br />
<br />
-->
## Data Table Views {#datatableviews}
The data-table will support up to 30 columns, with up to 8 being visible by default. While there will be a default view for each data-table in the system, users will have the ability to show, hide, drag and change the order of columns. This interaction will include the ability to resize the width of columns.
<ul>
	<li>The only columns which cannot be moved are the checkbox(select) column and the action column. The select column will always appear on the far left while the action column will appear on the far right of the table </li>
</ul>

### View Stickiness
As a user rearranges, adds, and resizes the columns of a particular table , it’s view state should be saved so that when a user leaves and the returns to the table , it will appear the way the user last viewed it.
<br />
The following parameters will be saved:
<ul>
	<li>Columns displayed</li>
	<li>Column arrangement</li>
	<li>Column width</li>
	<li>Number of items per page </li>
</ul>
<br />
<br />	

### Resetting the View
This will be handled by the ‘Reset’ function in the settings drop down button. A modal dialog should appear, allowing the user to confirm the reset.

## Select All {#selectall}
This feature will allow users to make bulk selections to items within any given data-table. Because users may be dealing with many "pages" of data, this function needs to be specific in respect to what is being selected. Thus a drop down will be used to allow for multiple options for selecting records.
<br />
<br />
<br />
<img src="img/datatable38.jpg">
<br />
<br />
<br />
This drop down will include the following:
<ul>
	<li>Select all on a page, or all visible</li>
	<li>Select all on all pages</li>
	<li>Invert selection (appears only after a selection has been made)</li>
	<li>Deselect all</li>
</ul>	
This drop down only needs to appear where more than one page of data is available. In cases where only one page of data is available, only a checkbox allowing the user to select or deselect all is necessary. Options in the drop down select should be dynamic. For instance, deselect options should not be displayed if nothing is selected.

### Number of Records
The total number of records loaded into the table  will display above the column headers.
<br />
<br />
<br />
<img src="img/datatable39.jpg">
<br />
<br />
<br />
As items are selected on the gird, a count for the number of items selected should be displayed next to the total count. This will give the user confidence that records are selected though they may not be on the current page view.
<br />
<br />
<br />
<img src="img/datatable40.jpg">
<br />
<br />

### Select {#selecting}
For tables which require a select column:
<ul>
	<li>The select column will always be the first column appearing on the left side of 
		the table.</li>
	<li>This column will be fixed and stationary (it cannot be moved or resized).</li>
	<li>Users may select multiple rows by using the checkboxes or the select all function.</li>
	<li>Selected rows will be indicated by a checked box and a highlight and/or border 
		style which will delineate the selected rows from unselected rows.</li>
</ul>	
<br />
<br />
<br />
<img src="img/datatable41.jpg">
<br />
<br />
<br />

### Toggle Switches
Some data-tables will be used to display "settings" content. In these instances a checkbox is not ideal for the experience, as it can be confusing to the user when pre-selected settings are displayed. Switches make the action and intent more clear to the user for these tasks. Therefore, if switches are present, checkboxes should not; the two should never be used in the same table. Since switches replace the functionality of checkboxes they should be the first column of the data-table. 
<br />
<br />
<br />
<img src="img/datatable42.jpg">
<br />
<br />
<br />
### Single Select Button
The data table can also accommodate buttons in rows, and has a special case in the "Single Select" button.  This button functions not unlike a typical radio button control, but is used instead of the radio button when the task flow or experience in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} application are better served with the more implicit action of selecting a single choice from a data table. This provides greater visibility and imediate confirmation of the action to the user. The use of this should be carefully considered in the context of the experience to determine if it provides greater understanding to the user than radio buttons.
<br />
<br />
<br />
<img src="img/single_select_button.png">
<br />
<br />
<br />


## Editing {#editing}
Single item and multiple item edits are explained below.<br />
{%
include note.html
type='tip'
content='Not all data-tables will allow for inline editing.'
%}

### Single Item Select and Edit Interactions
<ul>
	<li>Inline editing can be instantiated by single clicking on the field to be edited. Once inline editing
		is instantiated, all appropriate fields within a row will be editable.</li>
	<li>Non-editable fields will require a disabled treatment.</li>
	<li>Once a row becomes editable, action buttons will appear below the row allowing a user to commit or
		cancel the edit.</li>
	<li>Editable fields will have a left-to-right tab order. [Tab] and [Enter] will set focus on the next 
		editable field in the tab order, unless the focus is set to the last field in the tab order in which case [Enter] will commit the edit while [Tab] will set focus to the Save button.</li>
</ul>
<br />
<br />
<br />
<img src="img/datatable43.jpg">
<br />	
<br />
<br />
<img src="img/datatable44.jpg">
<br />
<br />
<br />
Inline editing may require error handling on some fields. This should be done using real-time field validation.
Some fields may allow for only a specific set of values. In these instances, a select or multi-select interaction should be used.
<br />
<br />
<br />
<img src="img/datatable45.jpg">
<br />
<br />
<br />

## Miscellaneous Features {#misc}
This section will outline additional features which may be needed for some but not all tables in Magento.

### Drag and Drop Columns
Some data-tables will allow users to arrange columns in a customized order. A user "picks up" a column by click and hold or touch and hold of the column header, then drags the column into the desired position. A highlight appears between columns in the table to indicate where this column will appear when "dropped". Columns will not be allowed to precede the column of checkboxes in a table, likewise columns may not be positioned after the "Actions" column.  

When dropped on an area that is not highlighted (or off target of the highlighted area) the column will return to it’s original position. If the user wishes to maintain this position for future viewing, they must set a "Saved View", otherwise the default column order will prevail for following sessions.
<br />
<br />
<br />
<img src="img/datatable46.jpg">
<br />
<br />
<br />

### Drag and Drop Rows
Some data-tables will allow users to specify an order for the records within the table. If a position has been assigned to a record, the position number will display in the ‘Position’ column. Changing position order should always shift the greater numbers in an ascending fashion, and lesser numbers in a descending fashion. E.G., if position 5 is changed to 10, the previous position 10 would become position 11, shifting all ascending records up. Position 6 through 9 would then shift down in the same manner. 6 would become 5, 7 would become 6, so on and so forth. If the ‘Position’ column is sorted, users can drag and drop single or multiple(once selected) to a different position on the table.

{%
include note.html
type='tip'
content='Inline editing functionality should not be available for tables that require drag and drop functionality for table rows.'
%}

### Single rows may be arranged via drag and drop
<br />
<br />
<img src="img/datatable47.jpg">
<br />
<br />

### Multiple rows may also be arranged via drag and drop
<br />
<br />
<img src="img/datatable48.jpg">
<br />
<br />

### Thumbnails {#thumb}
In cases where an image is associated with the data, as in the case of a product, the data-table will display a thumbnail view of the primary or default image (typically the first image in a series of image). By default the thumbnail image will appear to the far left of the table (after select checkboxes when present). The thumbnail image is a ‘clickable target’ independent of the typical click behavior of the row.
<br />
<br />
<br />
<img src="img/datatable49.jpg">
<br />
<br />
<br />
When the thumbnail is clicked a modal is presented over the data-table to provide a larger, more detailed view of the image. This modal should contain a heading that corresponds to the associated product name; a close control for the modal; a hyperlink that redirects the user to the details page.
<br />
<br />
<br />
<img src="img/datatable50.jpg">
<br />
<br />
<br />

### Parent-Child relationships
The data-table will support parent-child relationships. Parent and child records will be delineated via style and/or iconography. Parent nodes will be expandable/collapsable.
<br />
<br />
<br />
<img src="img/datatable51.jpg">
<br />
<br />
<br />

## Interactions {#interactions}
General interaction should follow standard web conventions. Interaction around dragging and resizing columns will utilize the cursor to indicate when an area can be dragged or resized.

### Viewport Considerations
<ul>
	<li>The default data-table will display within a 1024px screen resolution without the need for horizontal 
		scrolling.</li>
	<li>Horizontal scrollbars will be present whenever the data-table’s width expands beyond the browser’s 
		viewport.</li>
	<li>The data-table controls should not expand with the table , instead the controls will float as the table  
		is scrolled in both the vertical and horizontal direction.</li>
</ul>
<br />
<br />
<img src="img/datatable52.jpg">
<br />
<br />

### Column Headers
<ul>
	<li>Clicking on a column header sorts the data ascending/descending.</li>
	<li>Column headers are draggable and can be re-sized.</li>
	<li>Can be added and removed using the settings action located on the list.</li>
	<li>Data can be displayed in ascending or descending order by selecting the column header</li>
	<li>The actively sorted column is indicated by style and an ascending/descending indicator
		(Style is TBD).</li>
	<li>Can be resized by dragging the edge of the column.</li>
</ul>	

### Cursors
Cursors will be used to indicate which actions the user can take in any particular situation. While cursors may differ slightly depending on operating system and browser, the below cursors are examples of what should be used per standard web conventions:
<br />
<br />
<img src="img/datatable53.jpg">
<br />
<br />

## Summary {#summary}
This specification proposes a new version of Magento’s administration data-table. Features of the existing data-table have been analyzed to best represent the existing functions of the data-table.

### Backwards Compatibility
This new version of the data-table will fully support the existing Magento data-table functionality. Where this document may not be explicit, it should be assumed that any existing function of the table  will be supported with this new version.

### Assets {#assets}
Download <a href="src/datatable-pattern-styles.zip">ZIP</a> of PhotoShop source files.
