---
layout: howtom2devgde_chapters_fedg
title: How To Create a Theme
---
 
<h1 id="layout_theme_how-to">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/layout/layout-how-to-theme.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="layout_theme_how-to_overview">Overview of Creating a Theme</h2>

This topic discusses how to start with the Magento 2 Blank theme and add to it a logo and some images. You can take the theme you created here and expand it further.

<h2 id="layout_theme_how-to_dirs">Setting Up Your Custom Theme Directory Structure</h2>

To create the directory structure for your common theme:

1.	Log in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the web server user.)

2.	Change to `[your Magento install dir]/app/[area]`, where `[area]` is typically `frontend`.

3.	Create a new directory named according to your vendor name (for example, `ExampleCorp`).

4.	Under the vendor directory, create a directory named according to your theme.

	A sample follows; yours will be different.
	
	<pre>app/design/[area]/
				├── [vendorName]/
						├──...[newTheme]/
						│   │   │   ├── ...</pre> 

<h2 id="fedg_layout_theme_how-to_declare">Declaring Your Theme</h2>

After you create a folder for your theme, you need to create `theme.xml` containing the theme declaration and name, version, and parent theme name (if your theme inherits another theme).

Add or copy from an existing `theme.xml` to your theme directory `app/design/[area]/[your vendor name]/[your theme name]` and add to it the following:

<script src="https://gist.github.com/xcomSteveJohnson/52ba4e2571c9e1f5482b.js"></script>

Log in to the Magento Admin and view the theme by clicking **Content** > **Design** > **Themes**.

A sample follows.

![Logging in to the Magento Admin enables you to see your new theme under Content > Design > Themes.]({{ site.baseurl }}common/images/layout_theme_new_admin.png)

<h2 id="fedg_layout_theme_how-to-images">Optionally Adding Images to your Theme</h2>

To add your own theme images, add `app/design/[area]/[vendorName]/[themeName]/etc/view.xml` that contains configuration of all product image sizes used in the storefront.

Use the following steps:

1.	Log in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the web server user.)

1.	Enter the following commands:

	<pre>cd [your Magento install dir]
	mkdir -p app/design/[area]/[vendorName]/[themeName]/etc</pre>

2.	Copy `view.xml` from the `etc` folder of an existing theme (for example, from the Blank theme) to your theme's `etc` directory. 

3.	Configure all storefront product image sizes your `view.xml` file. 

	For example, you can make the category grid view product images square by specifying a size of 250 x 250 pixels. 
	
	The following example shows an example:
	
	<script src="https://gist.github.com/xcomSteveJohnson/6bd0d569248e5a925a10.js"></script>
	
<h2 id="fedg_theme_how-to_static">Creating Directories for Static Files and Images</h2>

This section discusses how to add a folder for images. You can use the same procedure to add directories for other types of static files, such as CSS, fonts, and JavaScript.

In this section, the directory contains your store's logo.

1.	Log in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the web server user.)

1.	Enter the following commands:

	<pre>cd [your Magento install dir]
	mkdir -p app/design/[area]/[vendorName]/[themeName]/web/images</pre>

2.	Add a logo image to that directory. The default logo image name is `logo.gif`.

	Allowed file extensions are `jpg`, `jpeg`, `gif`, or `png`.

	The logo image has no restrictions on file size or dimensions.
	
3.	To add a logo image in a format besides `gif` or using a name other than `logo.gif`, declare the name in `app/design/[area]/[vendorName]/[themeName]/Magento_Theme/layout/default.xml` as follows:

	<script src="https://gist.github.com/xcomSteveJohnson/25a5d4121b4f4e259672.js"></script>
	
<h2 id="fedg_theme_how-to_preview">Previewing Your Theme</h2>

To preview your theme:

1.	og in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the web server user.)

1.	Enter the following commands:

	<pre>cd [your Magento install dir]
	mkdir app/design/[area]/[vendorName]/[themeName]/media</pre>
	
2.	Add a `preview.jpg` file to the directory. 

	We recommend that the file size is 800 x 800 pixels.

1.	Log in to the Magento Admin as an administrator.

2.	Click **Content** > **Design** > **Store Designer**.

3.	If necessary, change to the store view containing the preview.

	The following figure shows an example:
	
	![The Magento Store Designer displays a preview of your theme.]({{ site.baseurl }}common/images/layout_theme_new_designer.png)

<h2 id="fedg_theme_how-to_structure">Your Theme Directory Structure Now</h2>

At this point your theme file structure looks as follows:

<pre>app/design/[area]/[vendorName]/
			├── [yourTheme]/
			│   ├── theme.xml
			│   ├── etc/
			│   │   ├── view.xml
			│   ├── media/
			│   │   ├── preview.jpg
			│   ├── web/
			│   │   ├── images
			│   │   │   ├── logo.png</pre>





	
#### Related Topics:

