

---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Magento Themes
menu_title: Magento Themes
menu_order: 1
version: 2.0
github_link: architecture/archi_perspectives/themes_intro.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/themes_intro.html
---


## Magento themes

A theme is a component of Magento application that provides a consistent look and feel (visual design) for entire application area (for example, storefront or Magento admin) using a combination of custom templates, layouts, styles or images.

Out-of-the-box Magento application provides two design themes: Luma, as a demonstration theme, and Blank as a basis for custom theme creation.

All theme files are stored under app/design/<area>/<Vendor>/<theme>/.

Apart from the configuration file and theme metadata file, all theme files fall into the following two categories:

* Static view files are a set of theme files that are returned by the server to a browser as is, without any processing, are called the static files of a theme.

* Dynamic view files are view files that are processed or executed by the server in order to provide result to the client. These are: .less files, templates, layouts .

Design packets are collections of related themes plus nondefault variants.


Magento supports multi theme model. . Themes are highly extensible.

control

1) the visual aspect of site design (skinning). Includes CSS, images, design/UI- specific Javascript
2) also control many functional aspects of site. Layouts control which default blocks/modules are available
    Templates control which data is shown and how

No business logic included in themes.

### Theme components

Magento theme components include:

Layout:  layout XML files. This defines which template file to load.

Template: template files which are generally .phtml files.

Skin: static files like images, css and js.

Local: language related file. This will be used when you want to make your theme compatible with different languages.

### Theme process flow

Process flow:

In general Magento’s fallback technique for theme is as below:

Your Custom Package >> Default Package >> Base Package >> Error Message

From above hierarchy you can imagine that if any of the requested file is not available in your theme then it will look for default package first and after that look into Base package and at last it will show error message if requested file is not available in any of the package.

Theme inheritance  based on the fallback mechanism, which guarantees that if a view file is not found in the current theme, the system searches in the ancestor themes, module view files or library

— page templates
— block templates
— layouts

Apart from the configuration file and theme metadata file, all theme files fall into the following two categories:

*	Static view files. These theme files are returned by the server to a browser as is, without any processing, and are called the static files of a theme.

*	Dynamic view files. View files that are processed or executed by the server in order to provide result to the client. These are: .less files, templates, layouts

Where do themes live?

Each theme resides in a unique directory

Themes live in two different directories:

* /skin/frontend: contains images and CSS for a theme.

* /app/design/frontend: contains page templates and layouts

Base package provides hooks to all of Magento’s core features.

Add override features rather than edit default theme files.

Themes and layouts are discussed extensively in the
<h2 id="related">Related topics</h2>
<a href="{{page.baseurl}}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>
