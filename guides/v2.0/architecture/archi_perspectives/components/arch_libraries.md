---
layout: default
group: arch-guide
subgroup: Logical View
title: Magento libraries
menu_title: Magento libraries
menu_order: 3
version: 2.0
github_link: architecture/archi_perspectives/components/arch_libraries.md
redirect_from: /guides/v1.0/architecture/arch_libraries.html
---

## Magento libraries overview {#m2arch-libraries-overview}
Magento uses the following types of libraries:

*	Magento PHP libraries, which are discussed in the next section
*	Magento UI libraries, which are located in the <a href="{{ site.mage2000url }}lib/web" target="_blank">lib/web</a> directory

	For more information, see <a href="{{ site.mage2000url }}lib/web/css/docs/source/README.md" target="_blank">library documentation on GitHub</a> and <a href="{{page.baseurl}}architecture/view/view-lib.html">View Library</a>.

*	<a href="{{page.baseurl}}architecture/archi_perspectives/third-party-libs.html">Third-party libraries</a>. These libraries include JavaScript libraries as well as PHP-based ones (including the Zend libraries).

	Third-party libraries are organized by vendor to be PSR-0 compliant.

## Magento PHP libraries {#m2arch-libraries-mage}

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework" target="_blank">Magento PHP libraries</a> include independent libraries of code useful to a Magento application. Each library has minimal dependencies on other library.

For example:

*	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem" target="_blank">Magento\Framework\Filesystem</a> has PHP libraries for file system operations such as read, write, and directory listing. We provide drivers for <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/File.php" target="_blank">file</a>, <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/Http.php" target="_blank">HTTP</a>, <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/Https.php" target="_blank">HTTPS</a>, and <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/Zlib.php" target="_blank">Zlib</a>.

*	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App" target="_blank">Magento\Framework\App</a> is a special PHP library that is aware of Magento as an application. It represents a greater level of abstraction and provides the following:

	* <a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_and_areas.html">Application areas</a>
	* <a href="{{page.baseurl}}extension-dev-guide/routing.html">Routing requests</a>
	* Application state

<div class="bs-callout bs-callout-info" id="info">
  <p>Other Magento libraries do not reference <code>Magento\Framework\App</code>.</p>
</div>

## Related topics {#m2arch-related}

<a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_intro.html">Modules</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/components/arch_themes.html">Themes</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/components/arch_translations.html">Language packages</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/third-party-libs.html">Third-party libraries</a>
