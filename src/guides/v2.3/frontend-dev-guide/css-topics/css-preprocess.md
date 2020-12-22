---
group: frontend-developer-guide
title: How CSS and Less files are preprocessed and how to debug them
functional_areas:
  - Frontend
---

## What's in this topic {#preproc_over}

The topic describes how stylesheets are preprocessed and compiled to [CSS](https://glossary.magento.com/css) in the Magento application. It provides the theoretical background a [frontend](https://glossary.magento.com/frontend) developer needs to debug stylesheets effectively.

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
            The <code>.less</code> files from which the <code>.css</code> files <a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/css-themes.html">included in layout</a> are compiled. For example, in one of the <a href="{{ site.mage2bloburl }}/2.2/app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml">layout files of the Magento Blank theme</a>, the following <code>.css</code> files are included in the <code>head</code>:
<pre>
&lt;head&gt;
    &lt;css src="css/styles-m.css"/&gt;
    &lt;css src="css/styles-l.css" media="screen and (min-width: 768px)"/&gt;
    &lt;css src="css/print.css" media="print"/&gt;
&lt;/head&gt;
</pre>
   The root source files for the Blank theme:
  <ul>
   <li><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/styles-m.less">Magento_Blank_theme_dir/web/css/styles-m.less</a></li>
   <li><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/styles-l.less">Magento_Blank_theme_dir/web/css/styles-l.less</a></li>
   <li><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/print.less">Magento_Blank_theme_dir/web/css/print.less</a></li>
  </ul>
 </td>
 </tr>
</table>

## Less compilation modes {#less_modes}

In the Magento application, the following modes of compiling `.less` files to CSS are implemented:

1. Server-side Less compilation.

   This is the default compilation mode, and is the only option in [production application mode]. In this case the compilation is performed on the server, using the [Less PHP library].

1. Client-side Less compilation.

   When your application is not in the production mode, you can set Magento to compile `.less` files in a browser, using the [native `less.js` library]

To set the compilation mode, do the following:

1. In the Magento Admin, navigate to **Stores** > **Settings** > **Configuration** > ADVANCED > **Developer**.
1. In the **Store View** drop-down field, select **Default Config**.
1. Under **Frontend development workflow**, in the **Workflow type** field, select the compilation mode.
1. To save the settings, click **Save Config**.

### Server-side Less compilation {#server-side}

The following paragraph describes how the Less preprocessor works in server-side compilation mode.
For each CSS file included in the layouts, Less preprocessor does the following:

1. Checks if the requested `.css` file is found. If it is found, the preprocessor stops its execution. Otherwise, it proceeds to the next step.
1. Changes the extension of the requested file to `.less` and tries to find the file using the [Magento fallback mechanism]. If the `.less` file is not found, Less preprocessor stops its execution. Otherwise, it proceeds to the next step.
1. Reads `.less` file contents and resolves [`@magento_import`](#fedg_css-magento-import) and default Less `@import` directives.

1. Resolves all paths in `.less` files to relative paths in the system using the Magento fallback mechanism. All files resolved by the Less preprocessor are copied to `var/view_preprocessed/less`. Imported files are processed recursively.

1. All source files are passed to the PHP Less compiler. The resulting compiled `.css` files are published to `pub/static/frontend/<Vendor>/<theme>/<locale>`.

#### Styles debugging in server-side compilation mode {#css_debug_server}

In server-side Less compilation mode, to have your changes applied, you need to do the following:

1. Clear `pub/static/frontend/<Vendor>/<theme>/<locale>` by deleting the directory in the file system (excluding .htaccess).
1. Clear the `var/cache` and `var/view_preprocessed` directories by deleting the directory in the file system. (if they already existed there).
1. Trigger [static files](https://glossary.magento.com/static-files) compilation and publication. This can be done in one of the following ways:

   -  Reloading the page where the modified styles are applied.
   -  Running the [static files deployment tool]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html).

Reloading the page only triggers compilation and publication of the styles used on this very page, and does not give you the information about the errors if any. So if you made changes in `.less` files used on many pages, and want to debug them, using the deployment tool is the better option.

##### Debugging using the static view files deployment tool

Once you save your changes, run the following command from your `<Magento_root>` directory:

```bash
bin/magento setup:static-content:deploy
```

The tool pre-processes (including compilation) and publishes the static view files.

{:.bs-callout-info}
Manual static content deployment is not required in "default" and "developer" modes. If you still want to deploy in these modes, use the -f option: `bin/magento setup:static-content:deploy -f`. Read more about the command in the [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html) section.

All errors occurring during `.less` files compilation are handled by the [`oyejorge/less.php`](https://github.com/oyejorge/less.php) third party library.

Errors are caught as exceptions and written to the system log (by default it is `var/log/system.log`) and displayed on the screen. For each error, the following information is written:

-  The path to the processed file in the `var/view_preprocessed` directory.
-  The error description, including the path to file where the actual error occurred. It might be either the processed file, or the imported file.
-  The error line and the column number.
-  The content of the `.less` code in the previous and following lines.

Example of an error message:

```terminal
Compilation from source: /var/www/magento2/app/design/adminhtml/Magento/backend/web/css/styles.less
variable @variable-x is undefined in file /var/www/magento2/var/view_preprocessed/css/adminhtml/Magento/backend/en_US/css/styles.less in styles.less on line 56, column 17
        margin-left: 0;
        width: 100%;
        height: @variable-x;
    }
    .menu-wrapper,
```

##### Debugging using Grunt

Alternatively, to streamline the process of applying and debugging styles customizations, in server-side compilation mode, you can

See the [Compile LESS with Grunt]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html) topic for details how to install, configure and use Grunt.

### Client-side LESS compilation {#client-side}

The client-side compilation flow is similar to [server-side](#server-side). The difference is in the set of files, published to `pub/static` on the last step. In the client-side mode, the following files are published to the `pub/static/frontend/<Vendor>/<theme>/<locale>` directory:

-  root source (.less) files with resolved `@magento_import` directive
-  [symlinks](http://en.wikipedia.org/wiki/Symbolic_link) to the root source file that do not contain `@magento_import`
-  symlinks to all other `.less` files imported recursively by the `@magento_import` and `@import` directives

{:.bs-callout-info}
Symlink is not created, and a copy of the processed file is published to `pub/static` instead, if the source file differs from the processed one. One of the reasons of this difference might be the usage of the `@import` directive without file extension in the source file. See [The @import directive usage](#fedg_css-import) for more details.

#### Styles debugging in client-side compilation mode {#css_debug_client}

Client-side LESS compilation is implemented using the native `less.js` library. The default configuration is set in `lib/web/less/config.less.js`; you can change it as needed.

You can find the detailed information about the configuration and other options of the `less.js` used in a browser at [http://lesscss.org/usage/#using-less-in-the-browser](http://lesscss.org/usage/#using-less-in-the-browser).

In client-side compilation mode, most of the stylesheet customizations display immediately after you reload a page in a browser.

With client-side compilation mode enabled, LESS files are compiled on every page load. This reduces page-loading performance.

##### When you need to clean static view files {#css_exception}

There are certain types of changes, that require you to clear the `pub/static/frontend/<Vendor>/<theme>/<locale>` directory and trigger the compilation and [publication] processes anew.

This is required in the following cases:

-  If you change the [root source files] that contain the `@magento_import` directive, or the `@import` directive where the imported file is specified without extension.
-  If you rename, remove, or add a `.less` file imported with a `@magento_import` or `@import` directive but you did not correct the directives accordingly.

To clear the `pub/static/frontend/<Vendor>/<theme>/<locale>` directory, delete the directory in the file system, and reload the store pages in a browser to trigger compilation and publication.

## The `@import` directive rules of usage {#fedg_css-import}

You can import local and remote `.less` and `.css` files in your `.less` Magento stylesheets by using the standard LESS [`@import` directive](http://lesscss.org/features/#import-directives-feature).
According to the `@import` syntax, specifying the file extension for the imported file is not mandatory. For example, the following notation is allowed:

```less
@import 'source/lib/_lib';
@import (css) 'styles';
```

But in process of resolving the file path, Magento adds the `.less` extension for the imported files in all `@import` entrees. So in the processed files, the statements from the previous example will look like following:

```less
@import 'source/lib/_lib.less';
@import (css) 'styles.less';
```

As a result, the processed files are different from the source files. So in the [client-side compilation mode](#client-side) or when using [grunt commands]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html), Magento cannot use symlinks to the source files. Instead it uses the copies of processed files, and they are published to the `pub/static` directory. In case of importing CSS resources, this also results in not finding and not importing the required files.

### Importing remote CSS files

If you need to import a remote CSS file in your `.less` source, use `url()` notation. For example, to import a Google font, use the following notation:

```less
@import url('//fonts.googleapis.com/css?family=Titillium+Web:400,300,200,600.css');
```

To [include the font]({{ page.baseurl }}/frontend-dev-guide/css-topics/using-fonts.html) in your theme's CSS files, use the `@font-face` CSS rule for the fastest loading time.

This way Magento will skip the `@import` directive while resolving paths to the local resources.

## The @magento_import directive {#fedg_css-magento-import}

`@magento_import` is a Magento-specific LESS directive that allows including multiple files by a name pattern. It is used to include files with the same name from the different locations, for example, different modules.
The standard `@import` directive includes a single file, which is found according to the [static files fallback].

`@magento_import` can be used in the root source files of a theme only.

### @magento_import rules of usage {#magento-import-usage}

To include a `.less` file using the `@magento_import` directive:

1. To avoid any conflicts with the original LESS syntax, `@magento_import` must be commented out with two slashes. Otherwise, the LESS preprocessor ignores it.

   **Example:**

   ```less
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
   ```

1. `@magento_import` must contain the file path. The path is specified relatively to the file, where the directive is called and put in either single ('') or double quotes (""). The best practice is to specify the file extension in the path, though technically you can omit this.

### @magento_import processing {#magento_import_example}

In the scope of static resources preprocessing, the built-in LESS preprocessor does the following:

1. Searches for all `@magento_import` directives.
1. Replaces the original `@magento_import` directives with the standard `@import` directives. The latter specify the paths to the particular files that correspond to the pattern specified in `@magento_import`.

Example of how `@magento_import` is used and processed in `<Magento_Blank_theme_dir>/web/css/styles-l.less`:

<table>
   <tbody>
      <tr>
         <th>Before</th>
         <th>After</th>
      </tr>
      <tr class="even">
         <td> In <code><Magento_Blank_theme_dir&gt;/web/css/styles-l.less</code> there's a following directive:
<pre>
..
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

[production application mode]: {{page.baseurl}}/config-guide/bootstrap/magento-modes.html#production-mode
[LESS PHP library]: https://github.com/oyejorge/less.php
[native `less.js` library]: http://lesscss.org/usage/#using-less-in-the-browser
[Magento fallback mechanism]: {{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static
[publication]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview
[root source files]: {{page.baseurl}}/frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms
[static files fallback]: {{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static
