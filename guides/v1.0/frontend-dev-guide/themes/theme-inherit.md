---
layout: howtom2devgde_chapters_fedg
title: Theme inheritance concept
---

<h1 id="theme-inherit">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/themes/theme-inherit.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="theme-inherit-over">Overview</h2>
When creating a custom theme, you may specify it to inherit from one of the existing themes. So you will only need to add overriding or extending files, and not need to duplicate those which you need to stay the same...
The level of inheritance is not limited.
<h2>Setting a parent theme</h2>
The parent theme is specified in the theme.xml of the child, under `<parent></parent>`.
Example:
The Orange theme inherits from the Blank theme:
<pre>
&lt;theme&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Magento&nbsp;Orange&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.1.0-alpha100&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;Magento/blank&lt;/parent&gt;
	&lt;media&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;preview_image&gt;media/preview.jpg&lt;/preview_image&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/media&gt;&nbsp;
&lt;/theme&gt;
</pre>
<h2 id="theme-inherit-fallback">Fallback</h2>
Theme inheritance is based on the fallback for static view files. 
Whenever a static view file path is requested from view subsystem, Magento searches in the following locations:

1. Current theme directory.
2. Iteratively in parent theme(s) directories, if any.
3. Module view files.

For more details about fallback mechanism see View Files Fallback. <!--ADDLINK -->

<h2 id="theme-inherit-css">CSS files inheritance</h2>
As other static theme files, .css and .less file are subject to the fallback mechanism, so if a requested css/less is not found in the current theme directory, it is searched for in the parent theme(s), and finally in the module view files.
But if you need to customize syles defined in the parent theme or in the module view files, you can override them by adding a css or less file with the same name in the relevant location in your theme folder. 

<h2 id="theme-inherit-layout">Layout inheritance</h2>
<h2 id="theme-inherit-template"></h2>