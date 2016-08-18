---
layout: default
group: fedg
subgroup: D_CSS
title: CSS preprocessing
menu_order: 3
menu_title: CSS preprocessing
version: 2.0
github_link: frontend-dev-guide/css-topics/css-preprocess.md
redirect_from: /guides/v1.0/frontend-dev-guide/css-topics/css-preprocess.html
---

<h2 id="preproc_over">What's in this topic</h2>

The topic describes how stylesheets are preprocessed and compiled to CSS in the Magento application. It provides the theoretical background a frontend developer needs to debug stylesheets effectively. 



<h2 id="css_preprocess_terms">Terms used</h2>
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
<p>The <code>.less</code> files from which the <code>.css</code> files <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-themes.html" target="_blank">included in layout</a> are compiled. 

For example, in one of the <a href="https://github.com/magento/magento2/blob/develop/app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml" target="_blank">layout files of the Magento Blank theme</a>, the following <code>.css</code> files are included: 

<pre>
    &lt;head&gt;
        &lt;css src=&quot;css/styles-m.css&quot; /&gt;
        &lt;css src=&quot;css/styles-l.css&quot; media=&quot;screen and (min-width: 768px)&quot;/&gt;
        &lt;css src=&quot;css/print.css&quot; media=&quot;print&quot; /&gt;
    &lt;/head&gt;
</pre>

The root source files for the Blank theme:

<ul>
<li><code><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/css/styles-m.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/styles-m.less</a></code></li>
<li><code><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/css/styles-l.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/styles-l.less</a></code></li>
<li><code><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/css/print.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/print.less</a></code></li>
</ul>
</p>
</td>
</tr>
</table>


<h2 id="less_modes">LESS compilation modes</h2>

In the Magento application, the following modes of compiling <code>.less</code> files to CSS are implemented:

<ol>
<li>Server-side LESS compilation.<br>
This is the default compilation mode, and is the only option in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production" target="_blank"> production application mode</a>.
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
<li>Under <b>Front-end development workflow</b>, in the <b>Workflow type</b> field, select the compilation mode.</li>
<li>To save the settings, click <b>Save Config</b>.</li>

<li>Make sure that the same compilation mode is set for each configuration scope. That is, check the <b>Front-end development workflow</b> option having switched the <b>Store View</b> drop-down field to the website scope first, and then to the store view. Change the option to match the default config if it is different.</li>
</ol>

<h3 id="server-side">Server-side LESS compilation</h3>

The following paragraph describes how the LESS preprocessor works in server-side compilation mode.
For each CSS file included in the layouts, LESS preprocessor does the following: 

<ol>
<li>Checks if the requested <code>.css</code> file is found. If it is found, the preprocessor stops its execution. Otherwise, it proceeds to the next step.</li>
<li>Changes the extension of the requested file to <code>.less</code> and tries to find the file using the <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static" target="_blank">Magento fallback mechanism</a>. If the <code>.less</code> file is not found, LESS preprocessor stops its execution. Otherwise, it proceeds to the next step.</li>
<li>Reads <code>.less</code> file contents and resolves <a href="#fedg_css-magento-import"><code>@magento_import</code></a> and default LESS <code>@import</code> directives.</code></li>

<li>Resolves all paths in <code>.less</code> files to relative paths in the system using the Magento fallback mechanism. All files resolved by the LESS preprocessor are copied to <code>var/view_preprocessed/less</code>. Imported files are processed recursively.</li>

<li id="compile_last">All source files are passed to the PHP LESS compiler. The resulting compiled <code>.css</code> files are published to <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code>.</li>

</ol>

#### Styles debugging in server-side compilation mode {#css_debug_server}

In server-side LESS compilation mode, to have your changes applied, clear <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> by deleting the directory in the file system, and reload the store pages to trigger compilation and publication. 

<div class="bs-callout bs-callout-info" id="info">
  <p>You might also need to clear the <code>var/cache</code> and <code>var/view_preprocessing</code> directories.</p>
</div>

Alternatively, to streamline the process of applying and debugging styles customizations, in server-side compilation mode, you can use the <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a>.

See the [Compile LESS with Grunt]({{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html) topic for details how to install, configure and use Grunt.

<h3 id="client-side">Client-side LESS compilation</h3>
The client-side compilation flow is similar to server-side. The difference is in the set of files, published to <code>pub/static</code> on the <a href="#compile_last">last step</a>. In the client-side mode, the following files are published to the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory:

<ul>
<li>root source (.less) files with resolved <code>@magento_import</code> directive </li>
<li> <a href="http://en.wikipedia.org/wiki/Symbolic_link" target="_blank">symlinks</a> to the root source file that do not contain <code>@magento_import</code></li>
<li>symlinks to the <code>.less</code> files included to the root source files using the imported by <code>@magento_import</code> and <code>@import</code> directives</li>
</ul>

#### Styles debugging in client-side compilation mode {#css_debug_client}

Client-side LESS compilation is implemented using the native `less.js` library. The default configuration is set in <code>lib/web/less/config.less.js</code>; you can change it as needed. 

You can find the detailed information about the configuration and other options of the <code>less.js</code> used in a browser at <a href="http://lesscss.org/usage/#using-less-in-the-browser" target="_blank">http://lesscss.org/usage/#using-less-in-the-browser</a>.

In client-side compilation mode, most of the stylesheet customizations display immediately after you reload a page in a browser. 

<span id="css_exception">There are certain types of changes</span>, that require you to clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory and trigger the compilation and <a href="{{page.baseurl}}architecture/view/static-process.html#publish-static-view-files" target="_blank">publication</a> processes anew.

This is required in the following cases:
<ul>
<li>If you change the <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms" target="_blank">root source files</a> that contain the <code>@magento_import</code> directive, or the <code>@import</code> directive where the imported file is specified without extension.</li>
<li>If you rename, remove, or add a <code>.less</code> file imported with a <code>@magento_import</code> or <code>@import</code> directive but you did not correct the directives accordingly.</li>

</ul>

To clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory, delete the directory in the file system, and reload the store pages in a browser to trigger compilation and publication.

<h2 id="fedg_css-magento-import">The @magento_import directive</h2>

<p><code>@magento_import</code> is a Magento-specific LESS directive that allows including multiple files by a name pattern. It is used to include files with the same name from the different locations, for example, different modules.
The standard <code>@import</code> directive includes a single file, which is found according to the <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static">static files fallback</a>.</p>


<code>@magento_import</code> can be used in the root source files of a theme only. 


<h3 id="magento-import-usage">@magento_import rules of usage</h3>

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

<h3 id="magento_import_example">@magento_import processing</h3>

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

### Developer experience when working with LESS {#debugging_less_files}
  
 The preferred way to check modified `.less` files is using the [deploy static files tool]({{{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-subcommands-xlate-dict"}})


 +<p>Any errors occured during less compilations are handled by 3rd party library - <a href="https://github.com/oyejorge/less.php" target="_blank">oyejorge/less.php</a>.</p>
 +<p>
 +Errors are catched as exceptions and loged using psr logger with:
 +<ul>
 +<li>Full path to the source file</li>
 +<li>Path to processed file with error (in var/view_preprocessed folder), in case of import not the same as source file</li>
 +<li>Error description</li>
 +<li>Line and column of the error occurance</li>
 +<li>lines of the less code prior and next to the error</li>
 +</ul>
 +</p>
 +Error message example:
 +<pre>
 +Compilation from source: /var/www/magento2/app/design/adminhtml/Magento/backend/web/css/styles.less
 +variable @variable-x is undefined in file /var/www/magento2/var/view_preprocessed/css/adminhtml/Magento/backend/en_US/css/styles.less in styles.less on line 56, column 17
 +54|         margin-left: 0;
 +55|         width: 100%;
 +56|         height: @variable-x;
 +57|     }
 +58|
 +59|     .menu-wrapper,
 +</pre>
 +During deploy errors are shown to the stdout in addition to the log. 
