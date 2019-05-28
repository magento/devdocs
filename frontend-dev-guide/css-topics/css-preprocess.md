---
group: frontend-developer-guide
subgroup: D_CSS
title: CSS preprocessing
menu_order: 3
menu_title: CSS preprocessing
functional_areas:
  - Frontend
---

The topic describes how stylesheets are preprocessed and compiled to {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} in the Magento application. It provides the theoretical background a {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} developer needs to debug stylesheets effectively.

## Terms used {#css_preprocess_terms}

<table>
<tr>
<th>
Term
</th>
<th>
Description
</th>
</tr>
<tr>
<td>
<p>Root source files</p>
</td>
<td>
<p>The <code>.less</code> files from which the <code>.css</code> files <a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/css-themes.html" target="_blank">included in layout</a> are compiled.

For example, in one of the <a href="{{site.mage2bloburl}}2.0/app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml" target="_blank">layout files of the Magento Blank theme</a>, the following <code>.css</code> files are included:

<pre>
    &lt;head&gt;
        &lt;css src="css/styles-m.css" /&gt;
        &lt;css src="css/styles-l.css" media="screen and (min-width: 768px)"/&gt;
        &lt;css src="css/print.css" media="print" /&gt;
    &lt;/head&gt;
</pre>

The root source files for the Blank theme:

<ul>
<li><code><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/styles-m.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/styles-m.less</a></code></li>
<li><code><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/styles-l.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/styles-l.less</a></code></li>
<li><code><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/print.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/print.less</a></code></li>
</ul>
</p>
</td>
</tr>
</table>

## LESS compilation modes {#less_modes}

In the Magento application, the following modes of compiling <code>.less</code> files to CSS are implemented:

<ol>
<li>Server-side LESS compilation.<br>
This is the default compilation mode, and is the only option in <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode" target="_blank"> production application mode</a>.
In this case the compilation is performed on the server, using the <a href="https://github.com/oyejorge/less.php" target="_blank">LESS PHP library</a>.
</li>

<li>Client-side LESS compilation. <br>
When your application is not in the production mode, you can set Magento to compile <code>.less</code> files in a browser, using the <a href="http://lesscss.org/usage/#using-less-in-the-browser" target="_blank">native <code>less.js</code> library</a>
</li>
</ol>

To set the compilation mode, do the following:
<ol>
<li>In the Magento Admin, navigate to <b>Stores</b> > <b>Configuration</b> > ADVANCED > <b>Developer</b>.</li>
<li>In the <b>Store View</b> drop-down field, select <b>Default Config</b>.</li>
<li>Under <b>Frontend development workflow</b>, in the <b>Workflow type</b> field, select the compilation mode.</li>
<li>To save the settings, click <b>Save Config</b>.</li>

<li>Make sure that the same compilation mode is set for each configuration scope. That is, check the <b>Frontend development workflow</b> option having switched the <b>Store View</b> drop-down field to the {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} scope first, and then to the {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %}. Change the option to match the default config if it is different.</li>
</ol>

### Server-side LESS compilation {#server-side}

The following paragraph describes how the LESS preprocessor works in server-side compilation mode.
For each CSS file included in the layouts, LESS preprocessor does the following:

<ol>
<li>Checks if the requested <code>.css</code> file is found. If it is found, the preprocessor stops its execution. Otherwise, it proceeds to the next step.</li>
<li>Changes the {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} of the requested file to <code>.less</code> and tries to find the file using the <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static" target="_blank">Magento fallback mechanism</a>. If the <code>.less</code> file is not found, LESS preprocessor stops its execution. Otherwise, it proceeds to the next step.</li>
<li>Reads <code>.less</code> file contents and resolves <a href="#fedg_css-magento-import"><code>@magento_import</code></a> and default LESS <code>@import</code> directives.</li>

<li>Resolves all paths in <code>.less</code> files to relative paths in the system using the Magento fallback mechanism. All files resolved by the LESS preprocessor are copied to <code>var/view_preprocessed/less</code>. Imported files are processed recursively.</li>

<li id="compile_last">All source files are passed to the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} LESS compiler. The resulting compiled <code>.css</code> files are published to <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code>.</li>

</ol>

#### Styles debugging in server-side compilation mode {#css_debug_server}

In server-side LESS compilation mode, to have your changes applied, clear <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> by deleting the directory in the file system, and reload the store pages to trigger compilation and publication.

{: .bs-callout .bs-callout-info }
You might also need to clear the `var/cache` and `var/view_preprocessed` directories.

Alternatively, to streamline the process of applying and debugging styles customizations, in server-side compilation mode, you can use the <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a>.

See the [Compile LESS with Grunt]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html) topic for details on how to install, configure and use Grunt.

### Client-side LESS compilation {#client-side}

The client-side compilation flow is similar to server-side. The difference is in the set of files, published to <code>pub/static</code> on the <a href="#compile_last">last step</a>. In the client-side mode, the following files are published to the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory:

<ul>
<li>root source (.less) files with resolved <code>@magento_import</code> directive </li>
<li> <a href="http://en.wikipedia.org/wiki/Symbolic_link" target="_blank">symlinks</a> to the root source file that do not contain <code>@magento_import</code></li>
<li>symlinks to all other <code>.less</code> files imported recursively by the <code>@magento_import</code> and <code>@import</code> directives</li>
</ul>

{: .bs-callout .bs-callout-info }
Symlink is not created, and a copy of the processed file is published to `pub/static` instead, if the source file differs from the processed one. One of the reasons of this difference might be the usage of the `@import` directive without file extension in the source file. See [The @import directive usage](#fedg_css-import) for more details.

#### Styles debugging in client-side compilation mode {#css_debug_client}

Client-side LESS compilation is implemented using the native `less.js` {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %}. The default configuration is set in <code>lib/web/less/config.less.js</code>; you can change it as needed.

You can find the detailed information about the configuration and other options of the <code>less.js</code> used in a browser at <a href="http://lesscss.org/usage/#using-less-in-the-browser" target="_blank">http://lesscss.org/usage/#using-less-in-the-browser</a>.

In client-side compilation mode, most of the stylesheet customizations display immediately after you reload a page in a browser.

<span id="css_exception">There are certain types of changes</span>, that require you to clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory and trigger the compilation and <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">publication</a> processes anew.

This is required in the following cases:
<ul>
<li>If you change the <a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms" target="_blank">root source files</a> that contain the <code>@magento_import</code> directive, or the <code>@import</code> directive where the imported file is specified without extension.</li>
<li>If you rename, remove, or add a <code>.less</code> file imported with a <code>@magento_import</code> or <code>@import</code> directive but you did not correct the directives accordingly.</li>

</ul>

To clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory, delete the directory in the file system, and reload the store pages in a browser to trigger compilation and publication.

## The `@import` directive rules of usage {#fedg_css-import}

You can import local and remote `.less` and `.css` files in your `.less` Magento stylesheets by using the standard LESS [`@import` directive](http://lesscss.org/features/#import-directives-feature).
According to the `@import` syntax, specifying the file extension for the imported file is not mandatory. For example, the following notation is allowed:

{%highlight css%}
@import 'source/lib/_lib';
@import (css) 'styles';
{%endhighlight%}

But in process of resolving the file path, Magento adds the `.less` extension for the imported files in all `@import` entrees. So in the processed files, the statements from the previous example will look like following:

{%highlight css%}
@import 'source/lib/_lib.less';
@import (css) 'styles.less';
{%endhighlight%}

As a result, the processed files are different from the source files. So in the [client-side compilation mode](#client-side) or when using [grunt commands]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html), Magento cannot use symlinks to the source files. Instead it uses the copies of processed files, and they are published to the `pub/static` directory. In case of importing CSS resources, this also results in not finding and not importing the required files.

### Importing remote CSS files

If you need to import a remote CSS file in your `.less` source, use `url()` notation. For example, to import a Google font, use the following notation:

{%highlight css%}
@import url('//fonts.googleapis.com/css?family=Titillium+Web:400,300,200,600.css');
{%endhighlight%}

To [include the font]({{ page.baseurl }}/frontend-dev-guide/css-topics/using-fonts.html) in your theme's CSS files, use the `@font-face` CSS rule for the fastest loading time.

This way Magento will skip the `@import` directive while resolving paths to the local resources.

## The `@magento_import` directive {#fedg_css-magento-import}

<p><code>@magento_import</code> is a Magento-specific LESS directive that allows including multiple files by a name pattern. It is used to include files with the same name from the different locations, for example, different modules.
The standard <code>@import</code> directive includes a single file, which is found according to the <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static">static files fallback</a>.</p>


<code>@magento_import</code> can be used in the root source files of a {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} only.


### `@magento_import` rules of usage {#magento-import-usage}

To include a <code>.less</code> file using the <code>@magento_import</code> directive:

<ol>
<li><p>To avoid any conflicts with the original LESS syntax, <code>@magento_import</code> must be commented out with two slashes. Otherwise, the LESS preprocessor ignores it.</p>
<p><b>Example:</b></p>
<pre>
//  Comment in a LESS document

//  Standard LESS import directive
//  ---------------------------------------------

@import 'source/_reset';
@import '_styles';

//
//  Custom Magento LESS import directives
//  ---------------------------------------------

//@magento_import 'source/_module.less'; // Theme modules
//@magento_import 'source/_widgets.less'; // Theme widgets
//@magento_import 'source/_extend.less'; // Extend for minor customization
</pre>
</li>
<li><p><code>@magento_import</code> must contain the file path. The path is specified relatively to the file, where the directive is called and put in either single ('') or double quotes (""). </p>

The best practice is to specify the file extension in the path, though technically you can omit this.
</li>

</ol>

### `@magento_import` processing {#magento_import_example}

In the scope of static resources preprocessing, the built-in LESS preprocessor does the following:

<ol>
<li>Searches for all <code>@magento_import</code> directives.</li>
<li>Replaces the original <code>@magento_import</code> directives with the standard <code>@import</code> directives. The latter specify the paths to the particular files that correspond to the pattern specified in <code>@magento_import</code>.</li>
</ol>
Example of how <code>@magento_import</code> is used and processed in <code>&lt;Magento_Blank_theme_dir&gt;/web/css/styles-l.less</code>:

<table>
   <tbody>
      <tr>
         <th>Before</th>
         <th>After</th>
      </tr>
      <tr class="even">
         <td> In <code>&lt;Magento_Blank_theme_dir&gt;/web/css/styles-l.less</code> there's a following directive:
            <pre> ..
//@magento_import 'source/_widgets.less'; // Theme widgets
..
</pre>
         </td>
         <td> In the processed file, this results in the following:
            <pre>
@import '../Magento_Catalog/css/source/_widgets.less';
@import '../Magento_Cms/css/source/_widgets.less';
@import '../Magento_Reports/css/source/_widgets.less';
@import '../Magento_Sales/css/source/_widgets.less';
 // Theme widgets
</pre>
         </td>
      </tr>
   </tbody>
</table>
