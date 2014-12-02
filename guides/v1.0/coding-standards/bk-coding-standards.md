---
layout: default
group: coding-standards
subgroup: A_intro
title: Coding standards
menu_title: Introduction
menu_order: 1
menu_node: parent
github_link: coding-standards/bk-coding-standards.md
---

<h2 id="coding-standards-intro">Introduction</h2>
<p>Like many large projects, Magento has coding standards, documentation block standards, and a test framework.</p>
<h3 id="coding-standards">Coding standards</h3>
<p>To code extensions, follow the Magento standards for code:</p>
<ul>
<li><a href="{{ site.gdeurl }}coding-standards/code-demarc-standards.html">Code demarcation standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/php-coding-standards.html">PHP coding standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/js-coding-standards.html">JavaScript coding standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/jquery-widget-guidelines.html">jQuery widget coding standard</a></li>
</ul>
<h3 id="doc-block-standards">Documentation block standards</h3>
<p>To add or update documentation for extensions, follow the Magento standards for documentation blocks:</p>
<ul>
<li><a href="{{ site.gdeurl }}coding-standards/docblock-standards.html">DocBlock standard</a></li>
<li><a href="{{ site.gdeurl }}coding-standards/js-docblock-standards.html">JavaScript DocBlock standard</a></li>
</ul>
<h3 id="testing">Testing</h3>

Use the Magento test framework (MTF) for testing. MTF enables you to run thorough and accurate tests of your Magento installation. To install and configure MTF, see [Installing and Configuring the Magento Test Framework (MTF)](https://github.com/magento/mtf/blob/master/docs/install-config.md).

<p>For JavaScript code, use the JsTestDriver test library. Additionally, use the ObjectManager public interface methods to create class instances with automatically mocked dependencies, list mocked constructor arguments, and create collection instances that contain specified elements.</p>



