---
layout: default
group: fedg
subgroup: D_CSS
title: Using custom fonts
menu_order: 6
github_link: frontend-dev-guide/css-topics/using-fonts.md
---
<h2>Overview</h2>
Magento application contains a set of built-in fonts, but you can easily include your own custom ones. This topic describes how to include a locally stored custom font in your Magento theme.


<h2>Font source files</h2>

Usually you need to have your font in several formats for different versions of browsers.

Place the font files to your theme directory under: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/fonts</code>

<h2>Including custom fonts</h2>

To ensure stability and secure your customizations from being deleted during upgrade, we recommend not changing default Magento files. That is why custom fonts should be included in the CSS files of custom themes.

To include a custom font use one of the following approaches:

<ul> 
<li>If you build a theme using Magento UI library, in the <code>web/css/source/_typoghraphy.less</code> in your theme directory, use the <code>.font-face</code> mixin:
<pre>
.font-face(
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
<li>If your theme does not use the Magento UI library, you can include the font manually to your theme CSS, for example by using the <code>@font-face</code> CSS rule.</li>
</ul>

