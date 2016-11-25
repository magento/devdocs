---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Versioning policy overview
menu_title: Versioning policy overview
menu_order: 2

level3_menu_node: level3child
level3_subgroup: versioning

version: 2.0
github_link: architecture/versioning_overview.md

---

<h2 id="verpol">Versioning policy overview</h2>

Magento  uses <i>software versioning</i> to identify the compatibility of changes in the public code. By comparing two versions of the same component, you can tell whether it has any <a href="{{page.baseurl}}architecture/back-compatibility.html">backward-incompatible</a> changes in the public API or other significant code changes.

Versioning also helps:

* <b>track  software dependencies</b>. Managing dependencies can be a challenging task in a large, generously populated software environment like Magento, which ships with more than 100 core modules.


* <b>support compatibility verification and ease troubleshooting</b>. Well known and tested combinations of Magento 2.x platform modules can reduce the number of combinations that require testing in your installation.


<h3>What is a public API?</h3>

<i>Source code is considered part of the public API only if it is explicitly marked by the `@api` docblock tag.</i> This designation indicates that the code can be used or customized by other components, such as formal interfaces and dependency injection points.


<div class="bs-callout bs-callout-warning">
    <p>Do not mark private code with <code>@api</code> or changes to this private interface  will trigger a version change.</p>
</div>

For PHP code, compatibility of <code>@api</code> can be tracked on the level of structural elements (such as class signatures, interfaces, or methods). For other source code, compatibility is tracked only on the file level (for example, the file has been deleted or renamed).



<h3>Related topics</h3>
<a href="{{page.baseurl}}architecture/versioning_spec_format.html">Supported versioning specifications and formats</a>

<a href="{{page.baseurl}}architecture/software_versions.html">Magento 2.0 software versions</a>

<a href="{{page.baseurl}}architecture/version_store.html">Where is version information stored?</a>

<a href="{{page.baseurl}}architecture/change_table.html">Changes to classes and method versions</a>


<a href="{{page.baseurl}}architecture/back-compatibility.html">Backward compatibility</a>
