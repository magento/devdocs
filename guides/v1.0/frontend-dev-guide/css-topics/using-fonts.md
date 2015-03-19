---
layout: default
group: fedg
subgroup: D_CSS
title: Using custom fonts
menu_order: 6
github_link: frontend-dev-guide/css-topics/using-fonts.md
---
<h2>Overview</h2>
Magento application contains a set of built-in fonts, but you can easily include your own custom ones. This topic describes how to include a custom font in your Magento theme.

<p class="q">Are they called embedded fonts?</q>

<h2>What source font files do you need</h2>

<p class="q">Any restrictions on font file extension? Fonts for which browsers are mandatory? I see a .json file in luma, is it required?</p>
<p class="q">Where are the Blank fonts stored?</p>

<h2>Including custom fonts</h2>

To ensure stability and secure your customizations from being deleted during upgrade, we recommend not changing default Magento files. That is why custom fonts should be included in the CSS files of custom themes.

To include a custom font:

1. Place the font files to your theme directory under: app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/fonts
2. Include the font to your theme styles files by using one of the following approaches:

* If you build a theme using Magento UI library, use the <code>.font-face</code> mixin to include a font web/css/source/_typoghraphy:
<pre>
.font-face(
    @family-name,
    @font-path,
    @font-weight,
    @font-style
)
</pre>


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

* If your theme does not use the Magento UI library
You can include the font manually to your theme CSS, for example by using the <code>@font-face</code> CSS rule.

