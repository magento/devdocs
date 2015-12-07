---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: Component file structure
menu_title: Component file structure
menu_order: 2
github_link: extension-dev-guide/module-file-structure.md

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

####Main directories

The main module directories are:

* `Block`: contains PHP classes as part of MVC vertical implementation of module logic.
* `Controller`: contains PHP classes as part of MVC vertical implementation of module logic.
* `Helper`: contains PHP classes as part of MVC vertical implementation of module logic.
* `Model`: contains PHP classes as part of MVC vertical implementation of module logic.
* `Setup`: contains classes for module database structure and data setup which are invoked when installing or upgrading.

<div class="bs-callout bs-callout-info" id="info">
  <p>Be aware that the standard placement of the &lt;ModuleName> directory within the overall Magento file structure is <code>app/code/&lt;Vendor>/&lt;ModuleName>/etc/</code>. However, if you are creating a new module for distribution, you can just create the &lt;ModuleName> directory and the required directories under it. </p> 
</div>

####Additional directories

Additionally, there are directorys for configuration and other ancillary functions for items like plug-ins, internationalization, and front-end layout files.

* `Api`: contains any PHP classes exposed to the API.	
* `etc`: contains configuration files. 
* `i18n`: contains localization files.
* `Plugin`: contains any needed plugin files.
* `view`: contains non-object-oriented and non-static view level parts of the module such as design templates, email templates, and layout files.

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

####Main directories
The main theme directories are: 

*	`etc`: `view.xml` contains image configurations for all images and thumbnails.
*	`i18n`: <a href="{{ site.gdeurl }}frontend-dev-guide/translations/xlate.html#m2devgde-xlate-dictionaries">Translation dictionaries</a>, if any.
*	`media`: Theme preview (a screen capture of your theme).
*	`web`: Optional directory that contains static files organized into the following subdirectories:

	*	`css/source`: Theme's `less` configuration files that invoke mixins for global elements from the <a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>, and the `theme.less` file that overrides the default variables values.
	*	`css/source/lib`: View files that override the UI library files stored in `lib/web/css/source/lib`
	*	`fonts`: Fonts for your theme.
	*	`images`: Static images.
	*	`js`: JavaScript files.

<h3 id="file-struct-comp-lang">Magento 2 language package file structure</h3>
A typical directory structure for three language packages follows:

	├── de_de
	│   ├── composer.json
	│   ├── language.xml
	│   ├── LICENSE_AFL.txt
	│   ├── LICENSE.txt
	│   └── registration.php
	├── en_us
	│   ├── composer.json
	│   ├── language.xml
	│   ├── LICENSE_AFL.txt
	│   ├── LICENSE.txt
	│   └── registration.php
	├── pt_br
	│   ├── composer.json
	│   ├── language.xml
	│   ├── LICENSE_AFL.txt
	│   ├── LICENSE.txt
	│   └── registration.php
	
The only required directory for a language package is one that matches the <a href="http://www.iso.org/iso/home/standards/language_codes.htm" target="_blank">ISO</a> code to identify the locale. (This directory name *must be* lowercase.)

For more information about language packages, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>.	


##Next

[Define your configuration files](required-configuration-files.html)
