---
layout: howtom2devgde_chapters_fedg
title: Understanding Magento 2 CSS Preprocessing
---
 
<h1 id="fedg_css-preprocess-overview">Understanding Magento 2 CSS Preprocessing</h1>

<p><a href="{{ site.githuburl }}m2fedg/css/css-preprocess.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

This article discusses a list of preprocessors defined for CSS. By default, Magento publishes CSS as well as other view static files under the <code>[your Magento install dir]/pub</code> directory. The  publishing mechanism (or publisher) is responsible for finding and publishing these files. 

The Magento publisher supports preprocessing and it operates with number of preprocessors.

One of them is the composite CSS preprocessor which consists of two independent preprocessors: 

*	LESS preprocessor&mdash;enables the use of LESS in Magento application thanks to implementation of LESS PHP adapter.
*	CSS URL resolver&mdash;resolves links found in CSS source files using the publisher and replaces them with correct ones.

<h2 id="fedg_css-less-intro">About the Leaner CSS (LESS) Preprocessor</h2>

LESS brings dynamic behavior to CSS, and extends CSS with new features such as variables, functions, mixins, nested rules and others. 

You can use the Magento fallback mechanism to override existing LESS files when the default instructions do not meet your needs, just as you can for regular CSS. As another option, you can extend existing libraries by creating a new LESS file that is automatically included by LESS preprocessing. 

For example, if you need to change the color of some page element, you can do this by simply redefining the corresponding variable.

Magento 2 provides LESS preprocessor out of the box. It is located in your <code>[Magento install dir]/lib/internal/Magento/Framework/Css/PreProcessor</code>.

We chose the LESS preprocessor was chosen for the following reasons:  

*	A built-in compilation in Magento to support multi-level theme inheritance and Magento publisher behavior.
*	Possible to use the client-side LESS.js compiler, which is the easiest way to get started and is good for developing with LESS.
*	Compatibility of extensions across all Magento 2 instances.
*	Stable PHP LESS compiler that meets our internal quality requirements.
*	Ability to use regular CSS.
*	LESS implementation does not extend Magento 2 requirements with any external libraries such as <code>node.js</code>.
*	A third-party LESS library (Oyejorge LESS parser) is located in <code>[your Magento install dir]/lib/internal/Magento/Framework/Css/PreProcessor/Adapter</code>. 

<h2 id="fedg_css-magento-import">Using the @magento_import Instruction</h2>

<code>@magento_import</code> collects LESS files belonging to a common library over your Magento system. This means you don't need to worry about editing layouts or templates to include your custom styles. The only thing you need is to create a file in a view folder of your module by the path specified by a <code>@magento_import</code> instruction. It is a recommended way to add or extend global system CSS styles. Just keep in mind that this module must be enabled.

To avoid any conflicts with the original LESS syntax, `@magento_import` must be commented out with two slashes; otherwise, the LESS preprocessor ignores it.

An example follows:

<script src="https://gist.github.com/xcomSteveJohnson/f03b22f16fa2022cb0d7.js"></script>

Every `@magento_import` gets replaced with a set of typical LESS import instructions before LESS compilation.

The LESS preprocessor:

1.	Searches for all `@magento_import` instructions.
2.	Aggregates LESS across all of Magento.
3.	Replaces the original `@magento_import` instructions one by one in a list of typical LESS imports. 

Example before and after processing:

<table>
	<tbody>
		<tr class="table-headings">
			<th>Before</th>
			<th>After</th>
		</tr>
	<tr class="even">
		<td><pre>//@magento_import "[id]";</pre></td> 
		<td><pre>@import "path/to/dir1/some_file";
@import "path/to/file/file1.less";
@import "path/to/file/file2.less";</pre></td>
	</tr>
	</tbody>
</table>

Keep the following in mind:

*	<code>@magento_import</code> must contain the file path. You can omit the file extension.
*	The file path can be written with either single or double quotes.

<p>Example:</p>

<pre>//@magento_import "path_to/some/file";
//@magento_import 'path_to/some/other_file.less';</pre>

<h2 id="fedg_css-preprocess_less-example">Example of Using LESS</h2>

Here's how LESS preprocessing actually works:

1.	The LESS preprocessor checks if the requested CSS file is found. If the CSS file is found, LESS preprocessor stops its execution. Otherwise, continue with the next step. 
2.	The LESS preprocessor changes the extension of the requested file to `.less` and tries to find the file using the Magento fallback mechanism. If the `.less` file is not found, LESS preprocessor stops its execution. Otherwise, continue with the next step.
3.	The LESS preprocessor reads LESS file contents and resolves <code>@magento_import</code> and default LESS import instructions. Imported files are processed recursively.
4.	The LESS preprocessor resolves all paths in `.less` files to absolute paths in the system using the Magento fallback mechanism. All files resolved by the LESS preprocessor are copied to `var/temp/less/` with a unique file path that covers theme, locale, area, and so on.
5.	To compile LESS sources files into CSS, the Magento LESS preprocessor uses the <a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Css/PreProcessor/AdapterInterface.php" target="_blank">LESS PHP adapter</a>. The LESS PHP adapter works with the <a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Css/PreProcessor/Adapter/Oyejorge.php" target="_blank">Oyejorge LESS parser</a> that is compatible with `less.js` version 1.7. 
6.  The generated CSS file is located in the same directory in which compilation was executed. 

<h2 id="fedg_css-preprocess-url-resolver">About the CSS URL Resolver</h2>
<p>The CSS URL Resolver looks for links in CSS content (that is, links to images, fonts, backgrounds, and so on).</p>
<p>When links are found, the CSS URL Resolver publishes them. After that, the CSS URL Resolver replaces the old links with URLs to the published files. </p>
<p>Example:</p>

<table>
	<tbody>
		<tr class="table-headings">
			<th>Before</th>
			<th>After</th>
		</tr>
	<tr class="even">
		<td><script src="https://gist.github.com/xcomSteveJohnson/00b91311155da6aa95fc.js"></script></td>
		<td><script src="https://gist.github.com/xcomSteveJohnson/840d2750624894c44f9a.js"></script></td>
	</tr>
	</tbody>
</table>

#### Related Topics:

*	<a href="{{ site.gdeurl }}m2fedg/css/css-themes.html">Using CSS in Themes</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-overview.html">Introduction to Magento 2 Theming </a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-xml-page-markup.html">Using XML to Manage Your Page Markup</a>

