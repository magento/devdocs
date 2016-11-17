---
layout: default
group:
subgroup: View library
title: Page assets
menu_title: Page assets
menu_order:
version: 2.0
github_link: architecture/view/page-assets.md
redirect_from: /guides/v1.0/architecture/view/page-assets.html
---

<h2 id="m2devgde-page-assets-intro">Introduction to page assets</h2>

An _asset_ is a reference to a certain resource linked to an HTML page; that is, references to scripts, stylesheets, RSS feeds, and so on using `<head/>`, `<img/>`, `<object/>` elements.

This topic discusses how to work with Magento page assets (particularly interfaces and classes). The article is mostly aimed at developers
who have solid experience with PHP and are familiar with <a href="{{page.baseurl}}architecture/view/xml-schema-layout.html">Magento XML layouts</a>.

<h2 id="m2devgde-page-assets-interf">Asset interfaces</h2>

An asset is a reference to a certain resource linked to an HTML page. An asset is not a file itself; it's a set of information about the file. Magento has the following types of assets:

* Asset&mdash;a basic definition of an asset that consists of:

	* URL to the asset
	* Content type of the asset

* Local asset&mdash;an extended definition that, in addition to the preceding also provides information about:

	* Source file&mdash;an absolute path to the asset file in the local file system.
	* Relative path&mdash;a relative path to the asset file.

* Mergeable asset&mdash;a "marker" abstraction for local assets, indicating that their contents may be merged

These types are represented as interfaces in the
<a href="{{ site.mage2000url}}lib/internal/Magento/Framework/View" target="_blank">Magento/Framework/View</a> library:

<p><img src="{{ site.baseurl }}common/images/view_asset-interfaces.png" alt="Asset interfaces"></p>

The classes Implement the interfaces are responsible for:

* Remote: Implements an asset for which there is only URL and content type information. Used for rendering included RSS feeds, for example.
* File: Implements  a local asset that is referred using a relative path in Magento file system. The same relative path invariant is appended to the base URL when the full URL is requested. Because these assets are available locally, the Magento system can work with them in many ways; for example, transform the content, merge assets, or substitute with other assets.

<h2 id="m2devgde-page-assets-imp">Implement assets</h2>

This section discusses the following topics:

* <a href="#m2devgde-page-assets-imp-no-info">Assets with No Remote or Local Information</a>
* <a href="#m2devgde-page-assets-imp-local">Local Assets</a>
* <a href="#m2devgde-page-assets-imp-context">Context Implementations</a>

<h3 id="m2devgde-page-assets-imp-no-info">Assets without remote or local information</h3>

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Asset/Remote.php" target="_blank">\Magento\Framework\View\Asset\Remote</a> represents resources for which only the URL and content type are known, and which might reside in the local file system, or on a remote server. The class diagram for this asset implementation follows:

<p><img src="{{ site.baseurl }}common/images/view_asset-interface_no-local.png" alt="Assets with no remote or local information"></p>

It accepts URL and `content-type` in the constructor and serves only as a value object.

<h3 id="m2devgde-page-assets-imp-local">Local assets</h3>

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Asset/File.php" target="_blank">\Magento\Framework\View\Asset\File</a> represents resources that reside in the local file system and for which you know the absolute file system path and an invariant "file path".

This kind of asset accommodates arbitrary static view files that might be embedded in, or referred from, a web page. That might include anything from user-uploaded images to CSS files provided in Magento themes. Because these assets are available locally, the Magento software can manipulate them in many ways; for example, transform the content, merge assets, or substitute with other assets.

Its asset class diagram follows:

<p><img src="{{ site.baseurl }}common/images/view_asset-interface_local.png" alt="Local asset interface"></p>

`File` specifics:

* `File` accepts scalar data in the constructor and is immutable, but requires an instance of "source" for lazy loading of content or a source file.
* The `$context` argument in the constructor is a value object necessary for generating URLs. It contains the base URL and the context path that needs to be put in the beginning of the file path. See the next section for more information about context.

<h3 id="m2devgde-page-assets-imp-context">Context implementations</h3>

Magento supports the following implementations of context for the Asset\File object:

* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Asset/File/Context.php" target="_blank">\Magento\Framework\View\Asset\File\Context</a>: Basic implementation that has a bare minimum of base URL and arbitrary path.

	Using this context and, for example, a "media" base URL, this asset generates the following URL:

	<pre>http://example.com/pub/media/arbitrary_path/product/placeholder.jpg</pre>

* <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Asset/File/FallbackContext.php" target="_blank">\Magento\Framework\View\Asset\File\FallbackContext</a>: Extended implementation used for static view files that are subject to view files fallback.

	The URLs generated with this kind of context include fully qualified information necessary for files fallback:

	<pre>http://example.com/pub/static/frontend/magento_theme/en_US/Magento_Catalog/product/placeholder.jpg
http://example.com/pub/static/frontend/magento_theme/en_US/css-topics/styles.css</pre>

	The difference between the preceding URLs is that the first asset has a module context and in the second does not.

<h2 id="m2devgde-page-assets-static-view">Page assets and static view files</h2>

According to the Magento classification of view files, CSS, JavaScript, images, and other assets that are included in a web page and presented on the storefront without modification are _static view files_.

Like all Magento view files, static view files are located using the fallback mechanism. This mechanism implements inheritance of files from one directory to others. In this way, we enable you to extend or override view files of existing components with new components.

For example, a particular theme might extend or override files of its parent theme, all themes generally override module view files, and so on.

<h2 id="m2devgde-page-assets-static-manip">Manipulate page assets</h2>

This section discusses the following ways to work with view assets:

* <a href="#m2devgde-page-assets-static-manip-xml">Manipulating Assets Using Layout XML</a>
* <a href="#m2devgde-page-assets-api">Manipulating Assets Using the APIs</a>

<h3 id="m2devgde-page-assets-static-manip-xml">Use layout XML to manipulate assets</h3>

Although you can use the API to manipulate assets, frontend developers should use <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html">layout XML instructions</a> to register assets.

This method is preferred because it enables you to implement particular discriminators for assets, like browser matching and conditional loading.

Expand one of the following sections for more information:

<div id="accordion">
<h3>JavaScript assets</h3>
<div><strong>Layout instructions</strong>
<script src="https://gist.github.com/xcomSteveJohnson/82a10d4d61de9d832fcb.js"></script>
<strong>Rendered HTML Output</strong>
<script src="https://gist.github.com/xcomSteveJohnson/d87ce5934b80a56c7292.js"></script>
</div>
<h3>CSS assets</h3>
<div><strong>Layout instructions</strong>
<script src="https://gist.github.com/xcomSteveJohnson/5c8dc5e2eb1229c63406.js"></script>
<strong>Rendered HTML Output</strong>
<script src="https://gist.github.com/xcomSteveJohnson/118d51c5af7d371f809a.js"></script>
</div>
<h3>RSS feed assets</h3>
<div><strong>Layout instructions</strong>
<script src="https://gist.github.com/xcomSteveJohnson/6617872c0698ea1f5d07.js"></script>
<strong>Rendered HTML Output</strong>
<script src="https://gist.github.com/xcomSteveJohnson/7957c6bd6b8d893da2a1.js"></script>
</div>
</div>

<h4 id="m2devgde-page-assets-static-manip-xml-brows">Use layout XML to manipulate browser matching</h4>

Use _browser matching_ to change the behavior of JavaScript and CSS for certain browsers only (usually because of technology-specific workarounds). The following example illustrates using layout instructions to set using a CSS file only when a page is loaded in Internet Explorer:

Layout instructions:

<script src="https://gist.github.com/xcomSteveJohnson/b55a26d292d849551090.js"></script>

Rendered HTML:

<script src="https://gist.github.com/xcomSteveJohnson/f69e6fedd2a205f01186.js"></script>

<h4 id="m2devgde-page-assets-static-manip-xml-cond">Conditional rendering</h4>

Sometimes the decision of whether or not to link a resource depends on other actions that might happen (or not happen). To do that, associated a flag name with the resource. The flag name defines whether to perform rendering or not.

Magento sets the flag value when it executes.

Define the flag value dependency:

<script src="https://gist.github.com/xcomSteveJohnson/f7c0e61f62062867d43e.js"></script>

Give the flag a value:

<script src="https://gist.github.com/xcomSteveJohnson/3ad3919afba7f689faff.js"></script>

<h3 id="m2devgde-page-assets-api">Use APIs to manipulate assets</h3>

The Magento system uses _asset collections_ to process view assets. An asset collection is an object responsible for aggregating multiple assets and passing them to the page rendering subsystem.

That is why when you use PHP to work with assets, we recommended you add assets to an asset collection and then manipulate them as collection members.

The following classes implement Magento asset collections:

* <a href="{{site.mage2000url}}lib/internal/Magento/Framework/View/Asset/Collection.php" target="_blank">\Magento\Framework\View\Asset\Collection</a>&mdash;a basic collection that only stores references to the asset objects; is integrated to Magento application as a shared object.

* <a href="{{site.mage2000url}}lib/internal/Magento/Framework/View/Asset/GroupedCollection.php" target="_blank">\Magento\Framework\View\Asset\GroupedCollection</a>&mdash;an extended collection that also implements asset grouping by properties (for example by content type)

Asset collections enable you to:

* Add and remove assets
* Determine whether an asset is registered in a collection
* Get all assets
* Get assets for a specified group (for collections implemented by `GroupedCollection`)
* Get groups (for collections implemented by `GroupedCollection`)

To add an asset to a collection, use the following code:

<script src="https://gist.github.com/xcomSteveJohnson/f12c706d876f1a64a363.js"></script>

For example, to add a local JavaScript or CSS file to the page output:

<script src="https://gist.github.com/xcomSteveJohnson/e292aca8a49fdab644fc.js"></script>

#### Related topics

* <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
