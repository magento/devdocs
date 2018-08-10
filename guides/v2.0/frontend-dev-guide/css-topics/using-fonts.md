---
group: fedg
subgroup: D_CSS
title: Using custom fonts
menu_order: 6
version: 2.0
redirect_from: /guides/v1.0/frontend-dev-guide/css-topics/using-fonts.html
functional_areas:
  - Frontend
---
## What's in this topic

The Magento application contains a set of built-in fonts, but you can easily include custom fonts. This topic describes how to include a locally stored custom font in your Magento {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.

## Font files location   {#fonts_location}

### Locally stored fonts   {#local_fonts}

Place the font files to your theme directory under: <code>&lt;theme_dir&gt;/web/fonts</code>.

### External fonts   {#ext_fonts}

To use external fonts, include them in the page configuration file, as described in <a href="{{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#layout_markup_css" >Include static resources (JavaScript, CSS, fonts)</a>.

## Include fonts   {#fonts}

To ensure stability and secure your customizations from being deleted during upgrade, we recommend not changing default Magento files. That is why custom fonts should be included in the stylesheets of custom themes.

### Include locally stored fonts   {#local_fonts}

To include a custom font stored locally, use one of the following approaches:

<ul> 
<li>If you build a theme using Magento UI library, declare the font by adding the <code>.lib-font-face</code> {% glossarytooltip 1a305bdb-9be8-44aa-adad-98758821d6a7 %}mixin{% endglossarytooltip %} in the <code>&lt;theme_dir&gt;/web/css/source/_typography.less</code> file:
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
<li><code>&lt;path_to_font_file&gt;</code> includes the font file name, but without the {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %}. For example, <code>@font-path: '@{baseDir}fonts/Luma-Icons'</code> for the font stored in <code>web/fonts/Luma-Icons.woff</code></li>
</ul>

The mixin generates the {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} including font. For example, here is how the generated CSS looks for the Open Sans font used in the Blank theme:
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

