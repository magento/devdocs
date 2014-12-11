---
layout: default
group: fedg
subgroup: D_CSS
title: CSS preprocessing
menu_order: 2
menu_title: CSS preprocessing
github_link: frontend-dev-guide/css-topics/css-preprocess.md
---

<p>The Magento publisher supports CSS preprocessing and uses the composite CSS preprocessor.</p>
<p>The composite CSS preprocessor consists of these independent preprocessors:</p>

*	LESS preprocessor&mdash;enables the use of LESS in the Magento application.
*	CSS URL resolver&mdash;resolves links found in CSS source files. Corrects links that are not valid.

<p>By default, the Magento publisher finds and publishes CSS and other view static files in the <code><your Magento install dir>/pub</code> directory.</p>

<h2 id="fedg_css-less-intro">Leaner CSS (LESS) preprocessor</h2>

LESS brings dynamic behavior to CSS, and extends CSS with new features such as variables, functions, mixins, nested rules and others.

You can use the Magento fallback mechanism to override existing LESS files when the default instructions do not meet your needs, just as you can for regular CSS. As another option, you can extend existing libraries by creating a new LESS file that is automatically included by LESS preprocessing.

For example, if you need to change the color of some page element, you can do this by simply redefining the corresponding variable.

<p>The Magento system provides LESS preprocessor out of the box. It is located in your <code>[Magento install dir]/lib/internal/Magento/Framework/css/PreProcessor</code>.</p>

<p class="q">Reviewer: What does the reader need to know about the LESS preprocessor? The following list seems random to me and doesn't spell out how the user can use the LESS processor.</p>

The LESS preprocessor provides these benefits:

*	A built-in compilation in Magento to support multi-level theme inheritance and Magento publisher behavior.
*	Possible to use the client-side LESS.js compiler, which is the easiest way to get started and is good for developing with LESS.
*	Compatibility of extensions across all Magento instances.
*	Stable PHP LESS compiler that meets our internal quality requirements.
*	Ability to use regular CSS.
*	<p>LESS implementation does not extend Magento requirements with any external libraries such as <code>node.js</code>.</p>
*	<p>A third-party LESS library (Oyejorge LESS parser) is located in <code><your Magento install dir>/lib/internal/Magento/Framework/css/PreProcessor/Adapter</code>.</p>

<h3 id="fedg_css-magento-import">The @magento_import instruction</h3>

<p>Specify the <code>@magento_import</code> instruction to collect LESS files in a common library over your Magento system.</p>

<p>You do not need to worry about editing layouts or templates to include your custom styles.
</p>

To use the @magento_import feature:

<ol>
<li><p><code>@magento_import</code> must contain the file path. You can omit the file extension.</p>
<p>The file path can be written with either single or double quotes.</p>
<p><b>Example:</b></p>
<pre>//@magento_import "path_to/some/file";
//@magento_import 'path_to/some/other_file.less';</pre>
    </li>
<li><p>To avoid any conflicts with the original LESS syntax, <code>@magento_import</code> must be commented out with two slashes. Otherwise, the LESS preprocessor ignores it.</p>
<p><b>Example:</b></p>
<script src="https://gist.github.com/xcomSteveJohnson/f03b22f16fa2022cb0d7.js"></script></li>

<li><p>Create a file in a view folder of your module by the path specified by a <code>@magento_import</code> instruction.</p></li>
<li><p>Enable this module.</p></li>
</ol>

The LESS preprocessor:

1.	Searches for all `@magento_import` instructions.
2.	Aggregates LESS across all of Magento.
3.	Replaces the original `@magento_import` instructions one by one in a list of typical LESS imports.

Example before and after processing:

<table>
   <tbody>
      <tr>
         <th>Before</th>
         <th>After</th>
      </tr>
      <tr class="even">
         <td>
            <pre>//@magento_import "[id]";</pre>
         </td>
         <td>
            <pre>@import "path/to/dir1/some_file";
@import "path/to/file/file1.less";
@import "path/to/file/file2.less";</pre>
         </td>
      </tr>
   </tbody>
</table>


<h2 id="fedg_css-preprocess_less-example">LESS example</h2>

The LESS preprocessor:

1.	Checks if the requested CSS file is found. If the CSS file is found, LESS preprocessor stops its execution. Otherwise, continue with the next step.
2.	Changes the extension of the requested file to `.less` and tries to find the file using the Magento fallback mechanism. If the `.less` file is not found, LESS preprocessor stops its execution. Otherwise, continue with the next step.
3.	<p>Reads LESS file contents and resolves <code>@magento_import</code> and default LESS import instructions. Imported files are processed recursively.</p>
4.	Resolves all paths in `.less` files to absolute paths in the system using the Magento fallback mechanism. All files resolved by the LESS preprocessor are copied to `var/temp/less/` with a unique file path that covers theme, locale, area, and so on.

To compile LESS sources files into CSS, the Magento LESS preprocessor uses the LESS PHP adapter.

The LESS PHP adapter works with the Oyejorge LESS parser, which is compatible with `less.js` version 1.7.

The generated CSS file is located in the same directory where the compilation ran.

<h2 id="fedg_css-preprocess-url-resolver">CSS URL resolver</h2>

<p>The CSS URL resolver looks for links in CSS content (that is, links to images, fonts, backgrounds, and so on).</p>

<p>When links are found, the CSS URL resolver publishes them. After that, the CSS URL resolver replaces the old links with URLs to the published files.</p>
<p><b>Example:</b></p>
<table>
   <tbody>
      <tr>
         <th>Before</th>
         <th>After</th>
      </tr>
      <tr class="even">
         <td>
            <script src="https://gist.github.com/xcomSteveJohnson/00b91311155da6aa95fc.js"></script>
         </td>
         <td>
            <script src="https://gist.github.com/xcomSteveJohnson/840d2750624894c44f9a.js"></script>
         </td>
      </tr>
   </tbody>
</table>

#### Related topics:
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/css-themes.html">CSS in themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html">Themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>

