---
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Column Component
menu_title: Column Component
menu_node:
menu_order: 5
version: 2.0
redirect_from: /guides/v2.0/ui-library/ui-secondary-column.html

---

The Column component is a collection of columns and it provides an interface for such actions as showing and hiding columns. The interface contains the following information:

* Total number of all available columns in a grid
* Number of columns currently active/displayed

Another task of the Column component is to provide data about column state to the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}admin{% endglossarytooltip %}.

There is no need to duplicate information about the columns to be displayed in the Column component. You must define the append to element on every column child element and reference the parent using the appends.
Another way to give access to the child element is to give a link to it when defining the column container.
