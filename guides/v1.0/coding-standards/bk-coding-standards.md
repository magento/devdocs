---
layout: default
group: coding-standards
subgroup: A_intro
title: Coding Standards
menu_title: Introduction
menu_order: 1
menu_node: parent
github_link: coding-standards/bk-coding-standards.md
---

<p>Like many large projects, Magento has coding standards, documentation block standards, and a test framework.</p>
<h2 id="coding-standards">Coding standards</h2>
<p>To code extensions, follow the Magento standards for code:</p>
<ul>
<li><a href="{{ site.gdeurl }}coding-standards/coding-standard-demarcation.html">Code demarcation standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/code-standard-php.html">PHP coding standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/code-standard-javascript.html">JavaScript coding standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/coding-standard-jquery-widgets.html">jQuery widget coding standard</a></li>
</ul>
<h2 id="doc-block-standards">Documentation block standards</h2>
<p>To add or update documentation for extensions, follow the Magento standards for documentation blocks:</p>
<ul>
<li><a href="{{ site.gdeurl }}coding-standards/docblock-standard-general.html">DocBlock standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/docblock-standard-javascript-general.html">JavaScript DocBlock standard</a></li>
</ul>
<h2 id="testing">Testing</h2>

Use the Magento test framework (MTF) for testing. MTF enables you to run thorough and accurate tests of your Magento installation. To install and configure MTF, see [Installing and Configuring the Magento Test Framework (MTF)](https://github.com/magento/mtf/blob/master/docs/install-config.md).

<p>For JavaScript code, use the JsTestDriver test library. Additionally, use the ObjectManager public interface methods to create class instances with automatically mocked dependencies, list mocked constructor arguments, and create collection instances that contain specified elements.</p>



