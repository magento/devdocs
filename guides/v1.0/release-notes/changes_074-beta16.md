---
layout: default
group: release-notes
title: Release Notes
menu_title: Changes in 0.74-beta16
menu_node: 
menu_order: 6
github_link: release-notes/changes_074-beta16.md
---

<h2 id="changes-contents">Contents</h2>

*	<a href="#rn-074b10-overview">Overview of the 0.74-beta16 release</a>
*	<a href="#rn-074b16-changes">Major changes in the 0.74-beta16 release</a>
*	<a href="#rn-074b16-compat">Backward-compatible changes</a>
*	<a href="#rn-074b16-incompat">Backward-incompatible changes</a>

<h2 id="rn-074b10-overview">Overview of the 0.74-beta10 release</h2>
These Release Notes discuss important changes in this release. For additional details, see the following:

*	<a href="{{ site.mage2000url }}CHANGELOG.md#0740-beta16" target="_blank">Changelog</a>
*	<a href="{{ site.gdeurl }}release-notes/known-issues.html">Known issues</a>
*	<a href="{{ site.gdeurl }}release-notes/bk-release-notes.html">Release highlights</a>

<h2 id="rn-074b16-changes">Major changes in the 0.74-beta16 release</h2>
We made the following changes in this release:

*	<a href="#rn-074b16-changes-join">Join directive</a>
*	TBD

<h3 id="rn-074b16-changes-join">Join directive</h3>
Created a Join directive, join process for tables, and XML configuration support to define a performant join for search services.


<h3 id="rn-074b16-changes-other">Other changes</h3>
*	Updated the "composer/composer" dependency to version "1.0.0-alpha10".
*	The <a href="http://php.net/manual/en/book.xsl.php" target="_blank">ext-xsl</a> PHP extension is now a requirement to install the Magento software.
*	We added the `tmp` directory to the list of allowed media resources.

	This means that, for example, when you upload an image using the product edit page, the image displays even if the product isn't saved.

*	The `pub/get.php` entry point now displays exceptions in <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a>.

This change also enables you to get a table prefix without injecting `Magento\Framework\App\Resource` into <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Api/ExtensionAttributesFactory.php" target="_blank">ExtensionAttributesFactory</a>.

<h2 id="rn-074b10-compat">Backward-compatible changes</h2>
This section discusses the backward-compatible changes we made in this release.

### Magento_Config


*	`\Magento\Config\Model\Config\Structure\Reader`

	Add new argument `\Magento\Framework\View\TemplateEngine\Xhtml\CompilerInterface $compiler` into `__construct;`

*	*\Magento\Payment\Model\Method\AbstractMethod`

	Add new argument `\Magento\Payment\Model\Method\Logger $logger` into `__construct;`

*	`\Magento\Payment\Model\Method\Cc`

	Add new argument `\Magento\Payment\Model\Method\Logger $logger` into `__construct;`

*	`\Magento\Payment\Model\Method\Free`

	Add new argument `\Magento\Payment\Model\Method\Logger $Logger` into `__construct;`

*	`\Magento\Payment\Model\Method\Logger`

	Replace arguments for method `debug` from `($logData, ConfigInterface $config)` to `(array $debugData, array $debugReplaceKeys, $debugFlag);`

