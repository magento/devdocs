---
group: pattern
subgroup: Graphics
title: Iconography in Magento Admin Pattern Library
menu_title: Iconography
menu_order: 1
menu_node:
version: 2.1
github_link: pattern-library/graphics/iconography/iconography.md
---

## Overview

Icons are used throughout the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} interface, often as a controls to initiate a function (such as "Filter"), or to direct the user to section (such as "Account").

Icons are meant to provide a visual representation of functionality or content and should therefore bear some conceptual resemblance to them. Icons should be able to communicate their "use" to the user without the assistance of a text label, though labels should be used in the UI whenever possible to minimize ambiguity.


## How icons are used {#how-icons-used}

Icons may appear in a variety of sizes within the interface as controls for tools and functions and to assist in "way-finding" within the application.  Principles of a "Touch-Friendly" UI should be observed; icons should be large enough to provide a reasonable "touch-target" for the user.  The icon may be scaled at something less than this optimal size when coupled with a "target" area that provides this optimal size, such as an expand control used where the entire header row is clickable/tappable.

The functionality associated with a particular icon should be used consistent throughout the application.

Typically icons should represent a single, unique concept and be used consistently in the UI. However some icons have a dual purpose and rely on size, placement and context to communicate their meaning to the user.  The "Error" icon is an example of this. When used in an "Alert", the supporting elements of copy, position, etc. help provide meaning.  This same icon can also be used as a remove or close control, and size, color, position and context differentiate its’ use for the user.  


## Icon Library

In the Magento {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} UI icons have a simple, flat, single-color, 2D, style. This style prevents the loss of detail at smaller sizes and makes the shapes easier to comprehend.

[Download Icon Library .ai file](src/Magento-icon-library.ai)
[Download Icon Library Sketch file](src/magento_icon_library.sketch)

![](img/Magento-icon-contact-sheet.png)


## Creating Icons

### Rules

*	Icons should be designed on the 300px by 300px icon grid. [Download Icon Grid .ai file](src/Magento_icon_grid_300x300.ai)

*	Icons should be monochromatic.

*	Icons should look like they are part of the "family" of icons.

*	Line weights should be consistent with other icons in the {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %}.

*	Elements within the icon should be consistent with these elements icons in the library (i.e. "Arrows").

*	Cantered or rotated elements should observe a 45 degree angle.

*	A limited perspective should be used.

Any icon that is intended for general use in the UI should be submitted to the Magento Product Team for review and inclusion to the ‘icon font’.


### Guides

Here is a guide to help you get started creating your own icon:

![](img/icon-construction-guide.png)


How to use the icon grid:

[Download Icon Grid .ai file](src/Magento_icon_grid_300x300.ai)

![](img/using-icon-grid.png)


## Icon Fonts

We recommend using icon fonts to get the best quality for your icons. The Magento icon fonts can be found in _app/design/adminhtml/Magento/backend/web/fonts/admin-icons_

{% include design/icon-fonts.md %}

## Accessibility

Efforts should be made to optimize icons and/or icon fonts for assistive technology.  

Use "aria-hidden" attribute:
Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. To avoid unintended and confusing output in screen readers hide them with the aria-hidden="true" attribute.

From: [http://getbootstrap.com/components/](http://getbootstrap.com/components/){:target="_blank}


### Example of "aria-hidden" attribute

```php?start_inline=1
<style>
  .icon-star:before { content: "★ "; }
</style>

<span><span class="icon-star" aria-hidden="true"></span>Favorite</span>
```

From: [http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html](http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html){:target="_blank"}


### How to make your icon font accessible in three easy steps

Icons, if in fonts or not, should be very descriptive, especially if they stand on their own. If in doubt, add a descriptive text so users can find out what it means. (In the pre-touch era of web design I’d just have recommended a `title attribute, but those times are over.)

1.	Don’t ever use "regular letters" for icons. Use a service like Icomoon and use the private use area (PUA) of the font. Those areas are specifically made for this usage and don’t have any letters attached to it. Screen readers won’t read letters in the PUA.

2.	Use colors with enough contrast for your icons.

3.	Never use an icon without a text (that you may hide). As icons are not read out, we don’t have any hint for a screen reader user what actually is on the screen, an alternative text is important as long as the content doesn’t make sense without an icon at all.

From: [http://modernwebaccessibility.com/en/blog/demystify-speak-none](http://modernwebaccessibility.com/en/blog/demystify-speak-none){:target="_blank"}


## Additional resources

[https://yatil.net/the-best-way-to-use-icon-fonts/](https://yatil.net/the-best-way-to-use-icon-fonts/){:target="_blank"}

[http://pictos.cc/articles/using-icon-fonts/](http://pictos.cc/articles/using-icon-fonts/){:target="_blank"}
