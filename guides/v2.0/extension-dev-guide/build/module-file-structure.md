---
layout: default
group: extension-dev-guide
subgroup: 03_Build
title: Create your component file structure 
menu_title: Create your component file structure 
menu_order: 3
github_link: extension-dev-guide/build/module-file-structure.md
redirect_from: /guides/v2.0/extension-dev-guide/module-file-structure.html
---

##{{page.menu_title}}

#### Contents
*	<a href="#file-struc-overview">Overview of the Magento component file structure</a>
*	<a href="#file-struct-comp">Magento 2 component file structure</a>

<h2 id="file-struc-overview">Overview of the Magento component file structure</h2>
Magento 2 looks for the files that make up a component, including configuration files, in particular places inside the module file structure. Follow the predefined file structure to ensure that your module works as expected.

{% include php-dev/component-root.md %}

<h2 id="file-struct-comp">Magento 2 component file structure</h2>
The following topics discuss a typical file structure for the following components:

*	<a href="#file-struct-comp-mod">Magento 2 module file structure</a>
*	<a href="#file-struct-comp-theme">Magento 2 theme file structure</a>
*	<a href="#file-struct-comp-lang">Magento 2 language package file structure</a>

<h3 id="file-struct-comp-mod">Magento 2 module file structure</h3>
A typical file structure for a Magento 2 module:
<p><img src="{{ site.baseurl }}common/images/pdg-config-file-structure.png" width="300" alt="A filesystem view of a typical file structure"></p>

####Typical directories
Typical module directories are:

* `Block`: contains PHP view classes as part of MVC vertical implementation of module logic.
* `Controller`: contains PHP controller classes as part of MVC vertical implementation of module logic.
* `etc`: contains configuration files; in particular, `module.xml`, which is required.
* `Model`: contains PHP model classes as part of MVC vertical implementation of module logic.
* `Setup`: contains classes for module database structure and data setup which are invoked when installing or upgrading.

####Additional directories
Additionally, there are directories for configuration and other ancillary functions for items like <a href="{{ site.gdeurl }}extension-dev-guide/plugins.html">plug-ins</a>, internationalization, and layout files.

* `Api`: contains any PHP classes exposed to the API.	
* `i18n`: contains localization files.
* `Plugin`: contains any needed <a href="{{ site.gdeurl }}extension-dev-guide/plugins.html">plug-ins</a>.
* `view`: contains view files, including static view files, design templates, email templates, and layout files.

<h3 id="file-struct-comp-theme">Magento 2 theme file structure</h3>
A typical theme file structure follows:

	├── composer.json
	├── etc
	│   └── view.xml
	├── i18n
	│   └── en_US.csv
	├── LICENSE_AFL.txt
	├── LICENSE.txt
	├── media
	│   └── preview.jpg
	├── registration.php
	└── web
	    ├── css
	    │   ├── email.less
	    │   ├── print.less
	    │   ├── source
	    │   │   ├── _actions-toolbar.less
	    │   │   ├── _breadcrumbs.less
	    │   │   ├── _buttons.less
	    │   │   ├── components
	    │   │   │   └── _modals_extend.less
	    │   │   ├── _icons.less
	    │   │   ├── _layout.less
	    │   │   ├── _theme.less
	    │   │   ├── _tooltips.less
	    │   │   ├── _typography.less
	    │   │   └── _variables.less
	    │   ├── _styles.less
	    │   ├── styles-l.less
	    │   └── styles-m.less
	    ├── images
	    │   └── logo.svg
	    └── js
	        ├── navigation-menu.js
	        ├── responsive.js
	        └── theme.js

####Typical directories
Typical theme directories are: 

*	`etc`: `view.xml` contains image configurations for all images and thumbnails.
*	`i18n`: <a href="{{ site.gdeurl }}frontend-dev-guide/translations/xlate.html#m2devgde-xlate-dictionaries">Translation dictionaries</a>, if any.
*	`media`: Theme preview (a screen capture of your theme).
*	`web`: Optional directory that contains static files organized into the following subdirectories:

	*	`css/source`: Theme's `less` configuration files that invoke mixins for global elements from the <a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>, and the `theme.less` file that overrides the default variables values.
	*	`css/source/lib`: View files that override the UI library files stored in `lib/web/css/source/lib`
	*	`fonts`: Fonts for your theme.
	*	`images`: Static images.
	*	`js`: JavaScript files.

{% include php-dev/lang-pack-file-struct.md %}


##Next

[Define your configuration files](required-configuration-files.html)
