---
group: fedg
subgroup: D_CSS
title: CSS preprocessing
menu_order: 3
menu_title: CSS preprocessing
version: 2.1
github_link: frontend-dev-guide/css-topics/css-preprocess.md
redirect_from: /guides/v1.0/frontend-dev-guide/css-topics/css-preprocess.html
functional_areas:
  - Frontend
---

The topic describes how stylesheets are preprocessed and compiled to {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} in the Magento application. It provides the theoretical background a {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} developer needs to effectively debug stylesheets.

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

For example, in one of the <a href="https://github.com/magento/magento2/blob/2.0/app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml" target="_blank">layout files of the Magento Blank theme</a>, the following <code>.css</code> files are included:

<pre>
    &lt;head&gt;
        &lt;css src=&quot;css/styles-m.css&quot; /&gt;
        &lt;css src=&quot;css/styles-l.css&quot; media=&quot;screen and (min-width: 768px)&quot;/&gt;
        &lt;css src=&quot;css/print.css&quot; media=&quot;print&quot; /&gt;
    &lt;/head&gt;
</pre>

The root source files for the Blank theme are:

<ul>
<li><code><a href="{{ site.mage2000url }}app/design/frontend/Magento/blank/web/css/styles-m.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/styles-m.less</a></code></li>
<li><code><a href="{{ site.mage2000url }}app/design/frontend/Magento/blank/web/css/styles-l.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/styles-l.less</a></code></li>
<li><code><a href="{{ site.mage2000url }}app/design/frontend/Magento/blank/web/css/print.less" target="_blank">&lt;Magento_Blank_theme_dir&gt;/web/css/print.less</a></code></li>
</ul>
</p>
</td>
</tr>
</table>


## LESS compilation modes {#less_modes}

In the Magento application, the following modes of compiling `.less` files to CSS are implemented:

1.  **Server-side LESS compilation** - This is the default compilation mode, and is the only option in [production application mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode). In this case the compilation is performed on the server, using the [LESS PHP library](https://github.com/oyejorge/less.php).
2.  **Client-side LESS compilation** - When your application is not in production mode, you can set Magento to compile `.less` files in a browser, using the [native `less.js` library](http://lesscss.org/usage/#using-less-in-the-browser)

To set the compilation mode:

1.  In the Magento Admin, navigate to **Stores** > **Configuration** > **Advanced** > **Developer**.
2.  In the **Store View** dropdown field, select **Default Config**.
3.  Under **Front-end development workflow**, in the **Workflow type** field, select the compilation mode.
4.  Click **Save Config**.
5.  Make sure that the same compilation mode is set for each configuration scope. Switch the **Store View** dropdown field to the {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} scope, and then to the {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %}, to check the **Front-end development workflow** option. Change the option to match the default config if it is different.

### Server-side LESS compilation {#server-side}

This section describes how the LESS preprocessor works in server-side compilation mode.
For each CSS file included in the layouts, LESS preprocessor:

1.  Checks if the requested `.css` file is found. If it is found, the pre-processor stops its execution. Otherwise, it proceeds to the next step.
2.  Changes the {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} of the requested file to `.less` and tries to find the file using the [Magento fallback mechanism]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static). If the `.less` file is not found, the LESS pre-processor stops its execution. Otherwise, it proceeds to the next step.
3.  Reads `.less` file contents and resolves [`@magento_import`](#fedg_css-magento-import) and default LESS `@import` directives.
4.  Resolves all paths in `.less` files to relative paths in the system using the Magento fallback mechanism. All files resolved by the LESS pre-processor are copied to `var/view_preprocessed/less`. Imported files are processed recursively.
5.  All source files are passed to the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} LESS compiler. The resulting compiled `.css` files are published to `pub/static/frontend/<Vendor>/<theme>/<locale>`.

#### Styles debugging in server-side compilation mode {#css_debug_server}

In server-side LESS compilation mode, to have your changes applied, clear `pub/static/frontend/<Vendor>/<theme>/<locale>` by deleting the directory in the file system, and reload the store pages to trigger compilation and publication.

<div class="bs-callout bs-callout-info" id="info">
<p>You might also need to clear the <code>var/cache</code> and <code>var/view_preprocessed</code> directories.</p>
</div>
Alternatively, to streamline the process of applying and debugging styles customizations, in server-side compilation mode, you can use the <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a>.

See the [Compile LESS with Grunt]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html) topic for details on how to install, configure, and use Grunt.

### Client-side LESS compilation {#client-side}

The client-side compilation flow is similar to the server-side flow. The difference is in the set of files, published to `pub/static` on the <a href="#compile_last">last step</a>. In the client-side mode, these files are published to the `pub/static/frontend/<Vendor>/<theme>/<locale>` directory:

*   Root source (.less) files with resolved `@magento_import` directive
*   [Symlinks](http://en.wikipedia.org/wiki/Symbolic_link){:target="_blank"} to the root source file that do not contain `@magento_import`
*   symlinks to all other `.less` files imported recursively by the `@magento_import` and `@import` directives

Symlink is not created, and a copy of the processed file is published to `pub/static` instead, if the source file differs from the processed one. One of the reasons for this difference might be the usage of the `@import` directive without the file extension in the source file. See [The @import directive usage](#fedg_css-import) for more details.


#### Styles debugging in client-side compilation mode {#css_debug_client}

Client-side LESS compilation is implemented using the native `less.js` {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %}. The default configuration is set in `lib/web/less/config.less.js`. You can change it as needed.

Find detailed information about the configuration and other options of the `less.js` used in a browser at [http://lesscss.org/usage/#using-less-in-the-browser](http://lesscss.org/usage/#using-less-in-the-browser){:target="_blank"}.

In client-side compilation mode, most of the stylesheet customizations display immediately after you reload a page in a browser.

There are certain types of changes, that require you to clear the `pub/static/frontend/<Vendor>/<theme>/<locale>` directory and trigger the compilation and [publication]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview) processes anew.

This is required if:
*   You change the [root source files]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms) that contain the `@magento_import` directive or the `@import` directive where the imported file is specified without extension.
*   You rename, remove, or add a `.less` file imported with a `@magento_import` or `@import` directive but you did not correct the directives accordingly.

To clear the `pub/static/frontend/<Vendor>/<theme>/<locale>` directory, delete the directory in the file system, and reload the store pages in a browser to trigger compilation and publication.

## The `@import` directive rules of usage {#fedg_css-import}
You can import local and remote `.less` and `.css` files in your `.less` Magento stylesheets by using the standard LESS [`@import` directive](http://lesscss.org/features/#import-directives-feature).
According to the `@import` syntax, specifying the file extension for the imported file is not mandatory. For example, the following notation is allowed:

{%highlight css%}
@import 'source/lib/_lib';
@import (css) 'styles';
{%endhighlight%}

In process of resolving the file path, Magento adds the `.less` extension for the imported files in all `@import` entrees. So in the processed files, the statements from the previous example will look like:

{%highlight css%}
@import 'source/lib/_lib.less';
@import (css) 'styles.less';
{%endhighlight%}

As a result, the processed files are different from the source files. So in the [client-side compilation mode](#client-side), or when using [grunt commands]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html), Magento cannot use symlinks to the source files. Instead it uses the copies of processed files, and they are published to the `pub/static` directory. In the case of importing CSS resources, this also results in not finding and not importing the required files.

### Import remote CSS files

If you need to import a remote CSS file in your `.less` source, use `url()` notation. For example, to import a Google font:

{%highlight css%}
@import url('//fonts.googleapis.com/css?family=Titillium+Web:400,300,200,600.css');
{%endhighlight%}

In this instance, Magento will skip the `@import` directive while resolving paths to the local resources.

## The `@magento_import` directive {#fedg_css-magento-import}

`@magento_import` is a Magento-specific LESS directive that allows including multiple files by a name pattern. It is used to include files with the same name from the different locations, such as different modules. The standard `@import` directive includes a single file, which is found according to the [static files fallback]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static).

`@magento_import`can be used in the root source files of a {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} only.

### `@magento_import` rules of usage {#magento-import-usage}

To include a `.less` file using the `@magento_import` directive:

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

In the scope of static resources preprocessing, the built-in LESS preprocessor:

<ol>
<li>Searches for all <code>@magento_import</code> directives.</li>
<li>Replaces the original <code>@magento_import</code> directives with the standard <code>@import</code> directives. The latter specify the paths to the particular files that correspond to the pattern specified in <code>@magento_import</code>.</li>
</ol>
<code>@magento_import</code> is used and processed in <code>&lt;Magento_Blank_theme_dir&gt;/web/css/styles-l.less</code>:

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
