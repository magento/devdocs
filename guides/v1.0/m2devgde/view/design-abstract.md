---
layout: howtom2devgde_chapters
title: Using Design Abstractions
---
 
<h1 id="m2devgde-design-abstract">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/view/design-abstract.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-design-abstract-intro">Introduction to Design Abstractions</h2> 


A design abstraction is a layout file (a set of layout instructions) that does not have its own implementation as a page rendered by a certain controller action (page type), but could be used by one or more of such pages to define the look and feel of a page. Design abstractions are used to qualify pages by type providing business users the ability to customize design for certain type of pages. In particular design abstractions are used in the widget creation to define the types of pages where a widget can be displayed.

For example, there is a design abstraction defining a two-column page layout. So when creating a widget, you can select it to be displayed on all pages with two-column page layout. This article describes how design abstractions are declared, called in layout files, and used in widget creation in the Admin panel. This information is a practical reference for the frontend developers working with layouts, and is also useful for the wider audience of server-side and frontend developers who want to understand in depth how the layout concept is implemented in Magento 2.


<h2 id="m2devgde-design-abstract-what">What Are Design Abstractions?</h2>

Each design abstraction is a uniquely identified set of layout instructions, so design abstractions are one of the types of layout handles.

The "look and feel" defined in design abstractions might be determined by the purpose of pages or merely by design requirements.

For example, `page_three_column` is a design abstraction which defines a three-column layout for a page. Which can illustrated like this:

<p><img src="{{ site.baseurl }}common/images/view_da.png" alt="Three column layout"></p>

The other example is a `customer_account` design abstraction which adds menu items in the left side navigation column. The abstraction is used in layouts of the My Account section pages on the store front:

<p><img src="{{ site.baseurl }}common/images/view_da3.png" alt="My Account section on the storefront"></p>

The `app/code/Magento/Customer/view/frontend/layout/customer_account.xml` file is a design abstraction. The file belongs to the `Customer` module, so it defines only the links which relate to this module (see comments in the code):

<pre>
&lt;?xml&nbsp;version=&quot;1.0&quot;?&gt;
&lt;!--
/**
&nbsp;*&nbsp;{license_notice}
&nbsp;*
&nbsp;*&nbsp;@copyright&nbsp;&nbsp;&nbsp;{copyright}
&nbsp;*&nbsp;@license&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{license_link}
&nbsp;*/
--&gt;
&lt;layout&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;label=&quot;Customer&nbsp;My&nbsp;Account&nbsp;(All&nbsp;Pages)&quot;&nbsp;design_abstraction=&quot;custom&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;update&nbsp;handle=&quot;page_two_columns_left&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;root&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;addBodyClass&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;account&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceContainer&nbsp;name=&quot;left&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\View\Element\Html\Links&quot;&nbsp;name=&quot;customer_account_navigation&quot;&nbsp;before=&quot;-&quot;&nbsp;template=&quot;Magento_Customer::account/navigation.phtml&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Add&nbsp;the&nbsp;Account&nbsp;Dashboard&nbsp;link&nbsp;in&nbsp;the&nbsp;left-side&nbsp;navigation&nbsp;column--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\View\Element\Html\Link\Current&quot;&nbsp;name=&quot;customer-account-navigation-account-link&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Account&nbsp;Dashboard&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;path&quot;&nbsp;xsi:type=&quot;string&quot;&gt;customer/account&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Add&nbsp;the&nbsp;Account&nbsp;Information&nbsp;link&nbsp;in&nbsp;the&nbsp;left-side&nbsp;navigation&nbsp;column--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\View\Element\Html\Link\Current&quot;&nbsp;name=&quot;customer-account-navigation-account-edit-link&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Account&nbsp;Information&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;path&quot;&nbsp;xsi:type=&quot;string&quot;&gt;customer/account/edit&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Add&nbsp;the&nbsp;Address&nbsp;Book&nbsp;link&nbsp;in&nbsp;the&nbsp;left-side&nbsp;navigation&nbsp;column--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\View\Element\Html\Link\Current&quot;&nbsp;name=&quot;customer-account-navigation-address-link&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Address&nbsp;Book&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;path&quot;&nbsp;xsi:type=&quot;string&quot;&gt;customer/address&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceContainer&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;move&nbsp;element=&quot;catalog.compare.sidebar&quot;&nbsp;destination=&quot;left&quot;/&gt;
&lt;/layout&gt;
</pre>

Other links in the navigation column are added by layout files of other relevant modules. For example, the Gift Card link is added by the `app/code/Magento/GiftCardAccount/view/frontend/layout/customer_account.xml`. When a page is being rendered all `customer_account` layouts are merged, and the pages where the `customer_account` design abstraction is used contain the elements from all `customer_account.xml` files.

For details about how layout files are processed refer to XML Layouts for Frontend.

<h2 id="m2devgde-design-abstract-declare">Declaring Design Abstractions</h2>


According to the layout naming convention, the name of a layout file corresponds to the layout handle it defines.
To declare a layout file as a design abstraction, you need to set the layout handle (the root XML node of a file which represents a handle) attributes as follows:

<code>&lt;layout&nbsp;label=&quot;{your_custom_value}&quot;&nbsp;design_abstraction=&quot;custom&quot;&nbsp;/&gt;</code>

Note, that while you can put any string as label value, for the <code>design_abstraction</code> attribute <code>"custom"</code> is a mandatory value.
The label specified here is used for <a href="#m2devgde-design-abstract-widget">identifying a design abstraction during widget creation</a>.
If you look at the <code>&lt;layout&gt;</code> node of the <code>customer_account.xml</code> discussed in the previous section, you can see it is being declared a design abstraction:
<pre>
&lt;layout&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;label=&quot;Customer&nbsp;My&nbsp;Account&nbsp;(All&nbsp;Pages)&quot;&nbsp;design_abstraction=&quot;custom&quot;&gt;
</pre>


<h2 id="m2devgde-design-abstract-use">Using Design Abstractions</h2>
To use a design abstraction in a layout file, insert the following code:
<pre>
&lt;update&nbsp;handle=&quot;design_abstraction_name&quot;/&gt;
</pre>
Where <code>design_abstraction_name</code> is the name of the design abstraction layout file.

Example:

To complete the <code>customer_account.xml</code> design abstraction example, look at the customer_account_index.xml layout file which uses the customer_account design abstraction. This layout is used for rendering the My Dashboard page of the My Account section of a store. The actual content of the page in defined directly, while the left-hand navigation menu is defined by the <code>customer_account.xml</code> layout files:

<b><code>app\code\Magento\Customer\view\frontend\layout\customer_acccount_index.xml</code></b>
<pre>
&lt;?xml&nbsp;version=&quot;1.0&quot;?&gt;
&lt;!--
/**
&nbsp;*&nbsp;{license_notice}
&nbsp;*
&nbsp;*&nbsp;@copyright&nbsp;&nbsp;&nbsp;{copyright}
&nbsp;*&nbsp;@license&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{license_link}
&nbsp;*/
--&gt;
&lt;layout&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--Call&nbsp;the&nbsp;customer_account.xml&nbsp;design&nbsp;abstraction--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;update&nbsp;handle=&quot;customer_account&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;page.main.title&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setPageTitle&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;translate=&quot;true&quot;&nbsp;name=&quot;title&quot;&nbsp;xsi:type=&quot;string&quot;&gt;My&nbsp;Dashboard&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceContainer&nbsp;name=&quot;content&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\Dashboard\Hello&quot;&nbsp;name=&quot;customer_account_dashboard_hello&quot;&nbsp;as=&quot;hello&quot;&nbsp;template=&quot;account/dashboard/hello.phtml&quot;&nbsp;cacheable=&quot;false&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\View\Element\Template&quot;&nbsp;name=&quot;customer_account_dashboard_top&quot;&nbsp;as=&quot;top&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\Dashboard\Info&quot;&nbsp;name=&quot;customer_account_dashboard_info&quot;&nbsp;as=&quot;info&quot;&nbsp;template=&quot;account/dashboard/info.phtml&quot;&nbsp;cacheable=&quot;false&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\Dashboard\Address&quot;&nbsp;name=&quot;customer_account_dashboard_address&quot;&nbsp;as=&quot;address&quot;&nbsp;template=&quot;account/dashboard/address.phtml&quot;&nbsp;cacheable=&quot;false&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceContainer&gt;
&lt;/layout&gt;
</pre>

<h3 id="m2devgde-design-abstract-widget">Using Design Abstractions in Widget Creation</h3>
Specifying the pages where a widget is displayed is one of the required steps during widget creation. Widgets are added in the Admin under <b>Content/ Frontend App</b>. After choosing to create a new widget instance, a user specifies the widget type and the design theme. Then a page for configuring other widget options is displayed. To select a page where the widget should be displayed, you need to click <b>Add Layout Update</b>. Now you can specify pages by selecting the corresponding layout handles. If you want a widget to be displayed on pages with a certain layout, choose <b>Page Layouts</b>.

<img src="{{ site.baseurl }}common/images/view_da4.png" alt="Specifying page type">

Then in the **Page** drop-down list there are available layouts or, in other words, design abstractions. Among others, there is the **Customer My Account (All Pages) **option, which corresponds to the customer_account design abstraction.

<img src="{{ site.baseurl }}common/images/view_da5.png" alt="Specifying page">

