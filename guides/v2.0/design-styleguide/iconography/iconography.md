---
layout: default
group: styleguide
subgroup: Style Guide
title: Admin Style Guide
menu_title: Iconography
menu_order: 4
menu_node:
version: 2.0
github_link: design-styleguide/iconography/iconography.md
---

<h2>Iconography</h2>

<h3>Contents</h3> 
* <a href="#overview">Overview</a>
* <a href="#how-icons-used">How icons are used</a>
* <a href="#icon-library">Icon Library</a>
* <a href="#creating-icons">Creating Icons</a>
* <a href="#icon-fonts">Icon Fonts</a>
* <a href="#accessibility">Accessibility</a>


<h3 id="overview">Overview</h3>

Icons are used throughout the Magento Admin interface, often as a controls to initiate a function (such as "Filter"), or to direct the user to section (such as "Account").

Icons are meant to provide a visual representation of functionality or content and should therefore bear some conceptual resemblance to them. Icons should be able to communicate their "use" to the user without the assistance of a text label, though labels should be used in the UI whenever possible to minimize ambiguity.


<h3 id="how-icons-used">How icons are used</h3>

Icons may appear in a variety of sizes within the interface as controls for tools and functions and to assist in "way-finding" within the application.  Principles of a "Touch-Friendly" UI should be observed; icons should be large enough to provide a reasonable "touch-target" for the user.  The icon may be scaled at something less than this optimal size when coupled with a "target" area that provides this optimal size, such as an expand control used where the entire header row is clickable/tappable.

The functionality associated with a particular icon should be used consistently throughout the application.

Typically icons should represent a single, unique concept and be used consistently in the UI. However some icons have a dual purpose and rely on size, placement and context to communicate their meaning to the user.  The "Error" icon is an example of this. When used in an "Alert", the supporting elements of copy, position, etc. help provide meaning.  This same icon can also be used as a remove or close control, and size, color, position and context differentiate its’ use for the user.  


<h3 id="icon-library">Icon Library</h3>

In the Magento Admin UI icons have a simple, flat, single-color, 2D, style. This style prevents the loss of detail at smaller sizes and makes the shapes easier to comprehend.

<a href="src/Magento-icon-library.ai"> Download Icon Library .ai file</a><br>
<a href="src/magento_icon_library.sketch"> Download Icon Library Sketch file</a>

<img src="img/Magento-icon-contact-sheet.png">


<h3 id="creating-icons">Creating Icons</h3>

**Rules**

*	Icons should be designed on the 300px by 300px icon grid. <a href="src/Magento_icon_grid_300x300.ai"> Download Icon Grid .ai file</a>

*	Icons should be monochromatic.

*	Icons should look like they are part of the "family" of icons.

*	Line weights should be consistent with other icons in the library.

*	Elements within the icon should be consistent with these elements icons in the library (i.e. "Arrows").

*	Cantered or rotated elements should observe a 45 degree angle.

*	A limited perspective should be used.

Any icon that is intended for general use in the UI should be submitted to the Magento Product Team for review and inclusion to the ‘icon font’.


**Guides**

Here is a guide to help you get started creating your own icon:

<img src="img/icon-construction-guide.png">


How to use the icon grid:

<a href="src/Magento_icon_grid_300x300.ai"> Download Icon Grid .ai file</a>

<img src="img/using-icon-grid.png">


<h3 id="icon-fonts">Icon Fonts</h3>

We recommend using icon fonts to get the best quality for your icons. The Magento icon fonts can be found here <a href="https://github.com/magento/magento2/tree/develop/app/design/adminhtml/Magento/backend/web/fonts/admin-icons" target="_blank"> https://github.com/magento/magento2/tree/develop/app/design/adminhtml/Magento/backend/web/fonts/admin-icons </a> 

If you want to add your own icons, each icon will need to be in its own SVG files. There are multiple ways to create icon fonts, here is one to get started:


1. Go to <a href="https://icomoon.io/app/" target="_blank"> https://icomoon.io/app/ </a> or download this app in Chrome web store  

2. Upload your icons in SVG format into the app. 

3. Specify desired font names and specify the Unicode characters to map the icons. Setting the icons to Private User Area will disable screen-readers or other accessibility tools to read your icon's characters (read "Unicode" section here). 

4. Then initialize a download in the app to generate the icon font and CSS style sheet. 



<h3 id="accessibility">Accessibility</h3>

Efforts should be made to optimize icons and/or icon fonts for assistive technology.  

Use "aria-hidden" attribute: 
Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. To avoid unintended and confusing output in screen readers hide them with the aria-hidden="true" attribute. 

From: <a href="http://getbootstrap.com/components/" target="_blank">http://getbootstrap.com/components/</a>


**Example of "aria-hidden" attribute:**

{% highlight php %}
<style>
  .icon-star:before { content: "★ "; }
</style>

<span><span class="icon-star" aria-hidden="true"></span>Favorite</span>

{% endhighlight %}

From: <a href="http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html" target="_blank">http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html</a>


**How to make your icon font accessible in three easy steps:**

Icons, if in fonts or not, should be very descriptive, especially if they stand on their own. If in doubt, add a descriptive text so users can find out what it means. (In the pre-touch era of web design I’d just have recommended a `title attribute, but those times are over.)

1.	Don’t ever use "regular letters" for icons. Use a service like Icomoon and use the private use area (PUA) of the font. Those areas are specifically made for this usage and don’t have any letters attached to it. Screen readers won’t read letters in the PUA.

2.	Use colors with enough contrast for your icons.

3.	Never use an icon without a text (that you may hide). As icons are not read out, we don’t have any hint for a screen reader user what actually is on the screen, an alternative text is important as long as the content doesn’t make sense without an icon at all. 

From: <a href="http://modernwebaccessibility.com/en/blog/demystify-speak-none" target="_blank"> http://modernwebaccessibility.com/en/blog/demystify-speak-none </a>


**Additional resources:**

<a href="https://yatil.net/the-best-way-to-use-icon-fonts/
" target="_blank">https://yatil.net/the-best-way-to-use-icon-fonts/</a>

<a href="http://pictos.cc/articles/using-icon-fonts/
" target="_blank">http://pictos.cc/articles/using-icon-fonts/</a>


