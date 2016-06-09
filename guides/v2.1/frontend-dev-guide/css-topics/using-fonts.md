---
layout: default
group: fedg
subgroup: D_CSS
title: Using custom fonts
menu_order: 6
version: 2.1
github_link: frontend-dev-guide/css-topics/using-fonts.md
---
<h2>What's in this topic</h2>
The Magento application contains a set of built-in fonts, but you can easily include custom fonts. This topic describes how to include a locally stored custom font in your Magento theme.


<h2 id="fonts_location">Font files location</h2>

<h3 id="local_fonts">Locally stored fonts</h3>
Place the font files to your theme directory under: <code>&lt;theme_dir&gt;/web/fonts</code>.

<h3 id="ext_fonts">External fonts</h3>
To use external fonts, include them in the page configuration file, as described in <a href="{{site.gdeurl21}}frontend-dev-guide/layouts/xml-manage.html#layout_markup_css" >Include static resources (JavaScript, CSS, fonts)</a>.

<h2 id="fonts">Include fonts</h2>

To ensure stability and secure your customizations from being deleted during upgrade, we recommend not changing default Magento files. That is why custom fonts should be included in the stylesheets of custom themes.

<h3 id="local_fonts">Include locally stored fonts</h3>
To include a custom font stored locally, use one of the following approaches:

<ul> 
<li>If you build a theme using Magento UI library, declare the font by adding the <code>.lib-font-face</code> mixin in the <code>&lt;theme_dir&gt;/web/css/source/_typography.less</code> file:
<pre>
.lib-font-face(
    @family-name:'&lt;any_font_name&gt;',
    @font-path: '@{baseDir}fonts/&lt;path_to_font_file&gt;',
    @font-weight: <a href="http://www.w3schools.com/cssref/pr_font_weight.asp" target="_blank">&lt;font_weight&gt;</a>,
    @font-style: <a href="http://www.w3schools.com/cssref/pr_font_font-style.asp" target="_blank">&lt;font_style&gt;</a>
)
</pre>

Where:
<ul>
	<li><code>{@baseDir}</code> stands for the <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web</code> directory.</li>
<li><code>&lt;path_to_font_file&gt;</code> includes the font file name, but without the extension. For example, <code>@font-path: '@{baseDir}fonts/Luma-Icons'</code> for the font stored in <code>web/fonts/Luma-Icons.woff</code></li>
</ul>

The mixin generates the CSS including font. For example, here is how the generated CSS looks for the Open Sans font used in the Blank theme:
<pre>
@font-face {
    font-family: 'Open Sans';
    src: url('../fonts/opensans/light/opensans-300.eot');
    src: url('../fonts/opensans/light/opensans-300.eot?#iefix') format('embedded-opentype'), url('../fonts/opensans/light/opensans-300.woff2') format('woff2'), url('../fonts/opensans/light/opensans-300.woff') format('woff'), url('../fonts/opensans/light/opensans-300.ttf') format('truetype'), url('../fonts/opensans/light/opensans-300.svg#Open Sans') format('svg');
    font-weight: 300;
    font-style: normal
}
</pre>
</li>
<li>If your theme does not use the Magento UI library, include the font in your theme <code>.css</code> files by the standard means of CSS, for example the <code>@font-face</code> rule.

</li>
</ul>

