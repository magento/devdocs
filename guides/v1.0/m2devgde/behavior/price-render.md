---
layout: howtom2devgde_chapters
title: How Magento Renders Prices
---
 
<h1 id="m2devgde-pricerend">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/behavior/price-render.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-pricerend-intro">Introduction to the Magento Price Rendering</h2> 

Wiki reference: https://wiki.magento.com/display/MAGE2DOC/Price+Rendering

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
		<tr class="table-headings">
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

You can use either <a href="http://daringfireball.net/projects/markdown/syntax#img" target="_blank">Markdown</a> or HTML image links, it doesn't matter. Either way, you *should* add alt tags to your images to improve accessibility.

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

