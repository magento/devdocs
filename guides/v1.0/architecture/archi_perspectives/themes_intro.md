

---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Themes and Layouts
menu_title: Themes and Layouts
menu_order: 1
github_link: architecture/archi_perspectives/themes_intro.md
---




<h2>Themes and Layouts</h2>

 design packets are collections of related themes plus nondefault variants. 
 
 
 Magento supports multi theme model. Each theme resides in a unique directory. Themes are highly extensible. 
control 
1) the visual aspect of site design (skinning). Includes CSS, images, design/UI- specific Javascript
2) also control many functional aspects of site. Layouts control which default blocks/modules are available
    Templates control which data is shown and how

<h3>Theme content</h3>

Logical content of a theme

Magento Theme Components
Layout       :  This includes all your layout XML files. This defines which template file to load. Template :  This includes all your template files which are generally .phtml files. Skin              :  This includes all your static files like images, css and js. Local           :  This includes all your language related file. This will be used when you want to make your theme compatible with different languages.

Process flow: 
 In general Magento’s fallback technique for theme is as below:
Your Custom Package >> Default Package >> Base Package >> Error Message
From above hierarchy you can imagine that if any of the requested file is not available in your theme then it will look for default package first and after that look into Base package and at last it will show error message if requested file is not available in any of the package.

— page templates
— block templates
— layouts

No business logic included in themes.

Apart from the configuration file and theme metadata file, all theme files fall into the following two categories:
	•	Static view files. These theme files are returned by the server to a browser as is, without any processing, and are called the static files of a theme.
	•	Dynamic view files. View files that are processed or executed by the server in order to provide result to the client. These are: .less files, templates, layouts

Where do themes live?
 Themes live in two different directories:

/skin/frontend: contains images and CSS for a theme. 

/app/design/frontend: contains page templates and layouts

Base package provides hooks to all of Magento’s core features. 

Add override features rather than edit default theme files.

Theme inheritance  based on the fallback mechanism, which guarantees that if a view file is not found in the current theme, the system searches in the ancestor themes, module view files or library

 
 
 

Themes and layouts are discussed extensively in the 
<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

Presentation Layer






 
