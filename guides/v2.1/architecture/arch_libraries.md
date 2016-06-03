---
layout: default
group: 
subgroup: Architecture
title: Libraries
menu_title: Libraries
menu_order: 
github_link21: architecture/arch_libraries.md
---

<h2 id="m2arch-libraries-overview">Overview</h2>
The Magento software can use the following types of libraries:

*	Magento PHP libraries, which are discussed in the next section.
*	Magento UI libraries, which are located in the <a href="{{ site.mage2100url }}lib/web" target="_blank">lib/web</a> directory.

	For more information, see <a href="{{ site.mage2100url }}lib/web/css/docs/source/README.md" target="_blank">library documentation on GitHub</a> and <a href="{{ site.gdeurl21 }}architecture/view/view-lib.html">View Library</a>.
*	Third-party libraries<!-- , which are located in the <a href="{{ site.mage2100url }}lib/internal" target="_blank">lib/internal</a> directory -->. These libraries include all PHP code (including the Zend libraries).

	Third-party libraries are organized by vendor to be PSR-0 compliant.

<h2 id="m2arch-libraries-mage">Magento PHP libraries</h2>
<a href="{{ site.mage2100url }}lib/internal/Magento/Framework" target="_blank">Magento PHP libraries</a> include code that is designed to be independent libraries of code useful to a Magento application. Each library has minimal dependencies on any other library.

For example:

*	<a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Filesystem" target="_blank">Magento\Framework\Filesystem</a> has PHP libraries for file system operations such as read, write, directory listing, and so on. We provide drivers for <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Filesystem/Driver/File.php" target="_blank">file</a>, <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Filesystem/Driver/Http.php" target="_blank">HTTP</a>, <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Filesystem/Driver/Https.php" target="_blank">HTTPS</a>, and <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/Filesystem/Driver/Zlib.php" target="_blank">Zlib</a>.
*	<a href="{{ site.mage2100url }}lib/internal/Magento/Framework/App" target="_blank">Magento\Framework\App</a> is a special PHP library that is aware of Magento as an application. It represents a greater level of abstraction and provides the following:

	* <a href="{{ site.gdeurl21 }}architecture/modules/mod_and_areas.html">Application areas</a>
	* <a href="{{ site.gdeurl21}}extension-dev-guide/routing.html">Routing requests</a>
	* Application state

<div class="bs-callout bs-callout-info" id="info">
  <p>Other Magento libraries do not reference <code>Magento\Framework\App</code>.</p>
</div>

<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl21 }}architecture/arch_asmodsys.html">Magento as a modular system</a>
* <a href="{{ site.gdeurl21 }}architecture/modules/mod_intro.html">Modules</a>
* <a href="{{ site.gdeurl21 }}architecture/arch_themes.html">Themes</a>
* <a href="{{ site.gdeurl21 }}architecture/arch_translations.html">Language packages</a>

