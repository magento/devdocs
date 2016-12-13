---
layout: default
group:
subgroup: View library
title: Design abstractions
menu_title: Design abstractions
menu_order:
version: 2.0
github_link: architecture/view/design-abstract.md
redirect_from: /guides/v1.0/architecture/view/design-abstract.html
---

## Overview {#m2devgde-design-abstract-intro}

A *design abstraction* is a layout file (a set of layout instructions) that does not have its own implementation as a page rendered by a certain controller action (page type), but could be used by one or more of such pages to define the look and feel of a page. Design abstractions are used to qualify pages by type, providing business users the ability to customize designs for certain types of pages. In particular design abstractions are used in widget creation to define the types of pages where a widget can be displayed.

For example, there is a design abstraction defining a two-column page layout. So when creating a widget, you can select it to be displayed on all pages with two-column page layout. This article describes how design abstractions are declared, called in layout files, and used in widget creation in the Admin panel. This information is a practical reference for frontend developers working with layouts, and is also useful for the wider audience of server-side and frontend developers who want to understand how the Magento system implements layouts.

## About design abstractions {#m2devgde-design-abstract-what}

Each design abstraction is a uniquely identified set of layout instructions, so design abstractions are one of the types of layout handles.

The "look and feel" defined in design abstractions might be determined by the purpose of pages or merely by design requirements.

For example, `page_three_column` is a design abstraction that defines a three-column layout for a page. Example:

<p><img src="{{ site.baseurl }}common/images/view_da.png" alt="Three column layout"></p>

The other example is a `customer_account` design abstraction which adds menu items in the left side navigation column. The abstraction is used in layouts of the My Account section pages on the store front:

<p><img src="{{ site.baseurl }}common/images/view_da3.png" alt="My Account section on the storefront"></p>

<a href="{{ site.mage2000url }}app/code/Magento/Customer/view/frontend/layout/customer_account.xml" target="_blank">customer_account.xml</a> is a design abstraction. It defines only the links for the <a href="{{ site.mage2000url }}app/code/Magento/Customer" target="_blank">Magento_Customer</a> module:

Other links in the navigation column are added by layout files of other relevant modules. For example, the Review link is added by <a href="{{ site.mage2000url }}app/code/Magento/Review/view/frontend/layout/customer_account.xml" target="_blank">the Magento_Review module's customer_account.xml</a>.

When a page is rendered, all `customer_account` layouts are merged, and the pages where the `customer_account` design abstraction is used contain the elements from all `customer_account.xml` files.

## Declare design abstractions {#m2devgde-design-abstract-declare}

According to the layout naming convention, the name of a layout file corresponds to the layout handle it defines.
To declare a layout file as a design abstraction, you need to set the layout handle (the root XML node of a file which represents a handle) attributes as follows:

<code>&lt;layout&nbsp;label=&quot;{your_custom_value}&quot;&nbsp;design_abstraction=&quot;custom&quot;&nbsp;/&gt;</code>

Note, that while you can put any string as label value, for the <code>design_abstraction</code> attribute <code>"custom"</code> is a mandatory value.
The label specified here is used for <a href="#m2devgde-design-abstract-widget">identifying a design abstraction during widget creation</a>.
If you look at the <code>&lt;layout&gt;</code> node of the <code>customer_account.xml</code> discussed in the previous section, you can see it is being declared a design abstraction:

<pre>
&lt;layout&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;label=&quot;Customer&nbsp;My&nbsp;Account&nbsp;(All&nbsp;Pages)&quot;&nbsp;design_abstraction=&quot;custom&quot;&gt;
</pre>

## How to use design abstractions {#m2devgde-design-abstract-use}

To use a design abstraction in a layout file, insert the following code:

<pre>
&lt;update&nbsp;handle=&quot;design_abstraction_name&quot;/&gt;
</pre>

where <code>design_abstraction_name</code> is the name of the design abstraction layout file.

To complete the `customer_account.xml` design abstraction example, look at <a href="{{ site.mage2000url }}app/code/Magento/Review/view/frontend/layout/review_customer_index.xml" target="_blank">customer_account_index.xml</a>, which uses the `customer_account` design abstraction. This layout is used for rendering the My Dashboard page of the My Account section of a store. The actual content of the page is defined directly, while the left-hand navigation menu is defined by <a href="{{ site.mage2000url }}app/code/Magento/Review/view/frontend/layout/customer_account.xml" target="_blank">customer_account.xml</a>.

### Design abstractions in widget creation {#m2devgde-design-abstract-widget}

Specifying the pages where a widget is displayed is one of the required steps during widget creation. Widgets are added in the Admin under <b>Content/ Frontend App</b>. After choosing to create a new widget instance, a user specifies the widget type and the design theme. Then a page for configuring other widget options is displayed. To select a page where the widget should be displayed, you need to click <b>Add Layout Update</b>. Now you can specify pages by selecting the corresponding layout handles. If you want a widget to be displayed on pages with a certain layout, choose <b>Page Layouts</b>.

<img src="{{ site.baseurl }}common/images/view_da4.png" alt="Specifying page type">

Then in the **Page** list there are available layouts or, in other words, design abstractions. Among others, there is the **Customer My Account (All Pages)** option, which corresponds to the `customer_account` design abstraction.

<img src="{{ site.baseurl }}common/images/view_da5.png" alt="Specifying page">
