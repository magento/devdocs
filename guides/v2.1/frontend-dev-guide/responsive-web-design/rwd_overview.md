---
group: fedg
title: Overview of responsive web design in Magento
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_overview.html
functional_areas:
  - Frontend
---

Responsive web design (RWD, also referred as *responsive design*) crafts web sites to provide an optimal viewing experience across a wide range of devices (from large, high-resolution desktop computer monitors to mobile phones).

The out of the box Magento Blank and Luma themes (Luma [inherits]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from Blank) use the mobile first RWD approach. It is ensured mostly by means of CSS and JavaScript.


The following image illustrates how the same page built on the Blank {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} looks on mobile, tablet and desktop devices.

![]({{site.baseurl}}/common/images/css_responsive1.jpg)

We recommend using the Blank theme, as a starting point for your customizations. That is, your custom theme should [inherit]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from Blank.

The articles in this chapter describe the particular approaches used in the Blank theme, and provide practical recommendations on how to use these approaches in your themes:

-   [CSS in Magento responsive design]
-   [JavaScript in Magento responsive design]
-   [Customizing RWD: illustration]
-   [Create a responsive mobile theme based on Blank]

## Terms used {#fedg_rwd_terms}
  Term           Description
  -------------- ---------------------------------------------------------------------------------
  *Breakpoint*   The width of the user's screen that causes your responsive layout to change.


## Recommended reading

*	[Magento Themes]({{ page.baseurl }}/frontend-dev-guide/themes/theme-general.html)


[CSS in Magento responsive design]: {{page.baseurl}}/frontend-dev-guide/responsive-web-design/rwd_css.html
[JavaScript in Magento responsive design]: {{page.baseurl}}/frontend-dev-guide/responsive-web-design/rwd_js.html
[Customizing RWD: illustration]: {{page.baseurl}}/frontend-dev-guide/responsive-web-design/rwd_practice.html
[Create a responsive mobile theme based on Blank]: {{page.baseurl}}/frontend-dev-guide/responsive-web-design/rwd_mobile.html