---
layout: default
group: arch-guide
subgroup: Components
title: Magento Themes 
menu_title: Themes 
menu_order: 8
version: 2.0
github_link: architecture/arch_perspectives/components/arch_themes.md
redirect_from: /guides/v1.0/architecture/arch_perspectives/themes_intro.html
---

<h2>Magento themes</h2>

A <i>theme</i> is a core Magento component whose primary purpose is to control the appearance of your storefront.  Themes use a combination of application elements, such as templates, layouts, styles, and images, and are highly extensible. 

<b>Custom theme development is one of two main methods of modifying Magento behavior and storefront appearance</b>. (Extending modules is the other primary way, and the main way to tailor Magento behavior.) Themes are the primary way to customize your Magento storefront appearance. Unlike modules, themes do not provide new business features (other than branding and web user experience).

Themes within a Magento installation relate to each other through <i>inheritance</i>, allowing you to customize an existing theme by defining it as a parent theme whose settings can be inherited by any designated child themes. Themes are also divided by area, allowing you to define themes that customize either the storefront or Magento Admin.


Magento 2.0 themes are also characterized by responsive web design. For more information on responsive design, see <a href="{{page.baseurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html">Overview of responsive web design in Magento</a>.

For detailed information about working with themes, refer to  <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-general.html">Themes</a> in the Frontend Developers Guide.

<h3>Theme location</h3>
 The location of a theme in your Magento installation depends upon how you installed your theme. Magento knows to look in both `vendor` and  `app/design` for themes. In Magento 2.0, each module and theme contain a `registration.php` file, which defines location information. 

 <i>Areas</i> also determine a theme's location. Themes that affect the storefront are placed in the `frontend` area, while themes that affect the Admin panel are placed in `adminhtml` directory. 

 <h4>Location of themes in GitHub repository</h4>
 In the Magento repository on GitHub, themes exist under `app/design/frontend`. For example, you can find the Magento Blank theme at https://github.com/magento/magento2/tree/develop/app/design/frontend/Magento/blank. 

<h4>Location of themes when installing with Composer</h4>

 We recommend using Composer to install your Magento application and components such as modules or themes. Composer places the theme you are installing under  `/vendor`. For example, `vendor/Magento/theme-frontend-blank` is the root directory of the Composer package holding the Blank theme. 

<h4>Location of custom themes</h4>
While developing a theme, place it under `app/design`.  If you've defined the theme for a local project (that is, you intend to install it in one project only),  place it under `app/design`. However, if you decide to sell the theme on Magento Marketplace, follow the instructions given there for uploading. When users download your theme from Magento Marketplace, they will use Composer to install the theme package, and Composer will automatically place it in `vendor`. (Essentially, `/vendor` holds all code that you have not written.)


<h3>Default Magento themes</h3>

The standard Magento installation provides two default themes: Luma theme (demonstration only) and Blank theme (boilerplate for theme customization).


* <b>Luma theme</b> is for demonstration purposes only. Do not use it as a parent theme in your installation.  Explore it to better understand Magento themes, but do not base customizations on it. 

* <b>Blank theme</b> is provided as a tool to aid your theme development. Use the Magento Blank theme as a basis for custom theme creation. Because Blank theme is built on principles of responsive web design, it makes an excellent starting point for developing responsive Magento themes.
    


<h2 id="m2arch-related">Related topics</h2>

<a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_intro.html">Modules</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/components/arch_libraries.html">Libraries</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/components/arch_translations.html">Language packages</a>

<a href="{{page.baseurl}}frontend-dev-guide/themes/theme-structure.html">Magento theme structure</a>
