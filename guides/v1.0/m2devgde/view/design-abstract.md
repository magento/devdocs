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

*code_block*

Other links in the navigation column are added by layout files of other relevant modules. For example, the Gift Card link is added by the `app/code/Magento/GiftCardAccount/view/frontend/layout/customer_account.xml`. When a page is being rendered all `customer_account` layouts are merged, and the pages where the `customer_account` design abstraction is used contain the elements from all `customer_account.xml` files.

For details about how layout files are processed refer to XML Layouts for Frontend.

<h2 id="m2devgde-design-abstract-declare">Declaring Design Abstractions</h2>


According to the layout naming convention, the name of a layout file corresponds to the layout handle it defines.
To declare a layout file as a design abstraction, you need to set the layout handle (the root XML node of a file which represents a handle) attributes as follows:
<layout label="{your_custom_value}" design_abstraction="custom" />
Note, that while you can put any string as label value, for the design_abstraction attribute custom is a mandatory value.
The label specified here is used for identifying a design abstraction during widget creation.
If you look at the <layout> node of the customer_account.xml discussed in the previous section, you can see it is being declared a design abstraction:


Wiki reference: https://wiki.magento.com/display/MAGE2DOC/Design+Abstractions

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Please be patient with us while we map topics from the Magento wiki to Markdown. Or maybe this topic isn't written yet. Check back later.</p></span>
</div>

<h2 id="help">Helpful Aids for Writers</h2>

Writers, use information in this section to get started migrating content then delete the section. You can find this same information <a href="https://github.corp.ebay.com/stevjohnson/internal-documentation/blob/master/markdown-samples/complex-examples.md" target="_blank">here</a>.

### General Markdown Authoring Tips

*	<a href="http://daringfireball.net/projects/markdown/syntax" target="_blank">Daring Fireball</a>
*	<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown cheat sheet</a>
*	<a href="https://wiki.corp.x.com/display/WRI/Markdown+Authoring+Part+2%2C+Markdown+Authoring+Tips" target="_blank">Internal wiki page</a>

### Note, Tip, Important, Caution

There is an example of Note in the first section.

  <div class="bs-callout bs-callout-warning" id="warning">
    <img src="{{ site.baseurl }}common/images/icon_important.png" alt="note" align="left" width="40" />
	<span class="glyphicon-class">
    <p>This is important. </p></span>
  </div>
  
<div class="bs-callout bs-callout-warning" id="warning">
  <img src="{{ site.baseurl }}common/images/icon_tip.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>This is a tip. </p></span>
</div>

<div class="bs-callout bs-callout-danger" id="danger">
  <img src="{{ site.baseurl }}common/images/icon_caution.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>This is a caution. Use this only in very limited circumstances when discussing:
  <ul class="note"><li>Data loss</li>
  <li>Financial loss</li>
  <li>Legal liability</li></ul></p></span>
</div>

### Tables

There is no good solution right now. Suggest you either use <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables" target="_blank">Markdown tables</a> or HTML tables.

HTML table:

<table>
	<tbody>
		<tr>
			<th>Magento 1</th>
			<th>Magento 2</th>
		</tr>
	<tr>
		<td>The Address model contains both display and business logic.</td>
		<td>The Address service has business logic only so interacting with it is simpler.</td>
	</tr>
	<tr>
		<td>Sends a model back to the template. Because the model contains business logic, it's tempting process that logic in your templates. This can lead to confusing code that's hard to maintain.</td>
		<td>Sends only data back to the template. </td>
	</tr>
	<tr>
		<td>The model knows how to render itself so it has to send a <tt>render('html')</tt> call to the block to do that, which makes the coding more complex. </td>
		<td>The data object is rendered by the renderer block. The roles of the renderer block and the model are separate from each other, easier to understand, and easier to implement.</td>
	</tr>
	</tbody>
</table>

### Images

Whether you add a new image or move an image from the wiki, you must store the image in `common/images` using a naming convention discussed <a href="https://wiki.corp.x.com/display/WRI/Markdown+Authoring+Part+1%2C+Getting+Started#MarkdownAuthoringPart1%2CGettingStarted-BestPracticesforNamingMarkdownFilesandImages" target="_blank">here</a>.

To embed the link in a page, use either <a href="http://daringfireball.net/projects/markdown/syntax#img" target="_blank">Markdown</a> or HTML image links, it doesn't matter. Either way, you *should* add alt tags to your images to improve accessibility.

You can also use a title tag to provide a mouseover tooltip.

HTML example:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_addr-book_mage1.png" alt="This is additional information that might help someone who uses a screen reader"></p>

Markdown example using an alt tag:

![Click **System** > **Integrations** to start]({{ site.baseurl }}common/images/integration.png)

### Cross-References

All cross-references should look like the following:

*	Cross-reference to another topic in any of the guides: <a href="{{ site.gdeurl }}m2fedg/css/css-preprocess.html">Understanding Magento 2 CSS Preprocessing</a>
*	Cross-reference to Magento 2 code in the public GitHub: <a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/ObjectManager/ObjectManager.php" target="_blank">object manager</a>
*	Cross-reference for the "help us improve this topic" link at the top of every page (only for pages you create yourself): <p><a href="{{ site.githuburl }}m2fedg/fedg-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
* 	Cross-reference to an external site should, IMHO, include `target="_blank"` as in `<a href="http://daringfireball.net/projects/markdown/syntax#img" target="_blank">Markdown</a>`

