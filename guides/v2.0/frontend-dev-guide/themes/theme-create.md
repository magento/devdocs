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

This topic discusses how to create the files that make up a theme, how to add a logo to a theme, and how to size images.

<h2 id="layout_theme_how-to_dirs">Create a theme directory</h2>

To create the directory for your theme:

1.	Go to `<your Magento install dir>/app/design/frontend`.

3.	Create a new directory named according to your vendor name: `/app/design/frontend/<Vendor>`. For built-in themes this directory is `app/design/frontend/Magento`.

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

After you create a directory for your theme, you must create `theme.xml` containing at least the theme name and the parent theme name (if the theme <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from one). Optionally you can specify where the theme preview image is stored.

1. Add or copy from an existing `theme.xml` to your theme directory `app/design/frontend/<Vendor>/<theme>`

2. Configure it using the following example:

	<pre>&lt;theme&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd&quot;&gt;
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;New&nbsp;theme&lt;/title&gt;&nbsp;&lt;!--&nbsp;your&nbsp;theme's&nbsp;name&nbsp;--&gt;
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;Magento/blank&lt;/parent&gt;&nbsp;&lt;!--&nbsp;the&nbsp;parent&nbsp;theme,&nbsp;in&nbsp;case&nbsp;your&nbsp;theme&nbsp;inherits&nbsp;from&nbsp;an&nbsp;existing&nbsp;theme&nbsp;--&gt;
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;media&gt;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;preview_image&gt;media/preview.jpg&lt;/preview_image&gt;&nbsp;&lt;!--&nbsp;the&nbsp;path&nbsp;to&nbsp;your&nbsp;theme's&nbsp;preview&nbsp;image&nbsp;--&gt;
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/media&gt;
	&lt;/theme&gt;</pre>

To make sure the theme is recognized by the Magento application, log in to the Magento Admin and check if the theme is displayed in the grid under **Content** > **Design** > **Themes**.

<img src= "{{ site.baseurl }}common/images/layout_theme_new_admin.png" />

Clicking on a theme record on Themes opens a page containing the information from the theme declaration file, and a preview image if available.

<h2 id="fedg_create_theme_composer">Make your theme a Composer package (optional)</h2>


Magento default themes are distributed as <a href="https://getcomposer.org/" target="_blank">Composer</a> packages.

To distribute your theme as a package, add a `composer.json` file to the theme directory and register the package on a packaging server. A default public packaging server is <a href="https://packagist.org/" target="_blank" >https://packagist.org/</a>.

`composer.json` provides theme dependency information.

Example of a theme `composer.json`:
<pre>
{
&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;magento/theme-frontend-luma&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&quot;description&quot;:&nbsp;&quot;N/A&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&quot;require&quot;:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;php&quot;:&nbsp;&quot;~5.4.11|~5.5.0&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;magento/theme-frontend-blank&quot;:&nbsp;&quot;0.42.0-beta1&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;magento/framework&quot;:&nbsp;&quot;0.42.0-beta1&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;magento/magento-composer-installer&quot;:&nbsp;&quot;*&quot;
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;magento2-theme&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&quot;version&quot;:&nbsp;&quot;0.42.0-beta1&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&quot;license&quot;:&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;OSL-3.0&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;AFL-3.0&quot;
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;&quot;extra&quot;:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;map&quot;:&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;*&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Magento/luma&quot;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;&nbsp;&nbsp;}
}
</pre> 


<!-- If your theme supports Composer, the end users can install or uninstall it on their Magento systems. -->

<!--ADDLINK You can find details about the Composer integration in the Magento system in Composer Integration. -->

<h2 id="fedg_create_theme_how-to-images">Configure images</h2>

If product image sizes of your theme differ from those of the parent theme, you need to add a `view.xml` file which contains configuration of all product image sizes used on the storefront.

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
<span class="glyphicon-class">
 <p>In the <code>...&lt;theme&gt;/web/images</code> you store the general theme related static files, for example a theme logo is stored in <code>...&lt;theme&gt;/web/images</code>.
Most probably your theme will also contain module-specific files, which are stored in the corresponding sub-directories, like <code>.../&lt;theme&gt;/&lt;Namespace_Module&gt;/web/css</code> and similar. Managing the module-specific theme files is discussed in the following sections of this Guide.</p></span>
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
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;logo.svg
│&nbsp;&nbsp;&nbsp;├──&nbsp;theme.xml
│&nbsp;&nbsp;&nbsp;├──&nbsp;composer.json
</pre>



<h2>Theme logo</h2>

In the Magento application, the default format and name of a logo image is <code>logo.svg</code>. When you put a <code>logo.svg</code> image to the conventional location, which is <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/images</code> directory, it is automatically recognized as theme logo. It is displayed in your store page header once the theme is <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-apply.html" target="_blank">applied</a>.

In your custom theme, you can use a logo file with other name and format, but you might need to declare it. 

The necessity of declaration depends on whether your theme has a <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">parent</a> theme and its logo image. The following cases are possible:
<ul>
<li>
Your theme does not have a parent theme:
<ul>
<li> if your logo image name and format is default, <code>logo.svg</code>, there is no need to declare it; </li>
<li>if you logo image name or format is not default, you need to <a href="#logo_declare">declare it in layout</a>.</li>
</ul>
</li>
<li>Your theme has a parent theme:
<ul>
<li>if your theme logo image has the same name and format as the parent's theme logo, there is no need to declare it;</li>
<li>if your logo image has different name or format, declare it in layout.</li>
</ul>
</li>
</ul>

<h3 id="logo_declare">Declaring theme logo</h3>

To declare a theme logo, add an <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/Magento_Theme/layout/default.xml</code> layout. 

For example, if your logo file is <code>my_logo.png</code>, you need to declare it as follows: 

<pre>
&lt;referenceBlock name=&quot;logo&quot;&gt;
	&lt;arguments&gt;
		&lt;argument name=&quot;logo_file&quot; xsi:type=&quot;string&quot;&gt;images/my_logo.png&lt;/argument&gt;
	&lt;/arguments&gt;
&lt;/referenceBlock&gt;
</pre>




To learn more about theme layouts, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html" target="_blank">Layout section</a> of this guide.

<!--

Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>

-->
