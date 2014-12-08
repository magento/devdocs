---
layout: default
group: fedg
subgroup: A_Themes
title: Create a theme
menu_title: Create a theme
menu_order: 2
github_link: frontend-dev-guide/themes/theme-create.md
---

<h2 id="layout_theme_how-to_overview">Overview</h2>

This topic discusses how to create the files that make up a theme, how to add a logo to a theme, how to size images, and how to preview a theme..

<h2 id="layout_theme_how-to_dirs">Create a theme directory</h2>

To create the directory for your theme:

1.	Go to `<your Magento install dir>/app/fronted`.

3.	Create a new directory named according to your vendor name: `/app/design/fronted/<Vendor>`. For built-in themes this directory is `app/design/frontend/Magento`.

4.	Under the vendor directory, create a directory named according to your theme.

<pre>
app/design/frontend/
├──&nbsp;&lt;Vendor&gt;/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──...&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;...
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;...
</pre>

The folder name conventionally equals to the theme code, any alphanumeric set of characters as the vendor sees fit. This convention is merely a recommendation, so nothing prevents calling this directory in any other way.

<h2 id="fedg_create_theme_how-to_declare">Declare your theme</h2>

After you create a directory for your theme, you must create `theme.xml` containing the theme declaration and name, version, and parent theme name (if your theme inherits from another theme).

1. Add or copy from an existing `theme.xml` to your theme directory `app/design/frontend/<Vendor>/<theme>`

2. Configure it using the following example:
<script src="https://gist.github.com/xcomSteveJohnson/52ba4e2571c9e1f5482b.js"></script>

To make sure the theme is recognized by the Magento application, log in to the Magento Admin and check if the theme is displayed in the grid under **Content** > **Design** > **Themes**.

<img src= "{{ site.baseurl }}common/images/layout_theme_new_admin.png" />


<h2 id="fedg_create_theme_composer">Make your theme a Composer package</h2>


Magento default themes are distributed as <a href="https://getcomposer.org/">Composer</a> packages.

To distribute your theme, add a `composer.json` file to the theme directory and register the package on a packaging server. A default public packaging server is <a href="https://packagist.org/" target="_blank" >https://packagist.org/</a>.

You can find details about the Composer integration in the Magento system in Composer Integration. <!--ADDLINK-->

If your theme supports Composer, the end users can install or uninstall it on their Magento systems.

<h2 id="fedg_create_theme_how-to-images">Configure images</h2>

If product image sizes of your theme differ from those of the default theme, you need to add a `view.xml` file which contains configuration of all product image sizes used on the storefront.

Use the following steps:

1.	Log in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the web server user.)

1.	Create the `etc` directory in your theme folder

2.	Copy `view.xml` from the `etc` directory of an existing theme (for example, from the Blank theme) to your theme's `etc` directory.

3.	Configure all storefront product image sizes in `view.xml`.
For example, you can make the category grid view product images square by specifying a size of 250 x 250 pixels, here is how the corresponding configuration would look like:

	<script src="https://gist.github.com/xcomSteveJohnson/6bd0d569248e5a925a10.js"></script>

<h2 id="fedg_theme_how-to_static">Create directories for static files</h2>

Your theme will likely contain several types of static files: styles, fonts, JavaScript and images.
Each type should be stored in a separate sub-directory of `web` in your theme folder:
<pre>
app/design/&lt;area&gt;/&lt;Vendor&gt;/&lt;theme&gt;/
├──&nbsp;web/
│&nbsp;├──&nbsp;css/
│&nbsp;│&nbsp;├──&nbsp;source/&nbsp;
│&nbsp;├──&nbsp;fonts/
│&nbsp;├──&nbsp;images/
│&nbsp;├──&nbsp;js/
</pre>


<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>In the <code>...&lt;theme&gt;/web/images</code> you store the general theme related static files, for example a theme logo is stored in <code>...&lt;theme&gt;/web/images</code>`.
Most probably your theme will also contain module-specific files, which are stored in the corresponding sub-directories, like `.../&lt;theme&gt;/&lt;Vendor_Module&gt;/web/css` and similar. Managing the module-specific theme files is discussed in the following sections of this Guide.</p></span>
</div>


<h2 id="fedg_theme_how-to_structure">Your theme directory structure now</h2>

At this point your theme file structure looks as follows:

<pre>
app/design/frontend/&lt;Vendor&gt;/
├──&nbsp;&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;├──&nbsp;etc/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;view.xml
│&nbsp;&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;images
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;logo.png
│&nbsp;&nbsp;&nbsp;├──&nbsp;theme.xml
│&nbsp;&nbsp;&nbsp;├──&nbsp;composer.json
</pre>


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>
