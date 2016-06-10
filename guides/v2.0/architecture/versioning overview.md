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

Magento  uses  software versioning to indicate the compatibility of changes in the code. By comparing two versions of the same component, you can tell whether it has any <a href="{{ site.gdeurl }}architecture/back-compatibility.html">backward-incompatible</a> changes in the public API or other significant code changes.

Versioning also helps:

* <b>track  software dependencies</b>. Managing dependencies can be a challenging task in a large, generously populated software environment like Magento, which ships with over 100 core modules. 


* <b>support compatibility verification and ease troubleshooting</b>. Well known and tested combinations of Magento 2 platform modules  can reduce the number of combinations that require testing in your installation. 


<h4>Supported specifications</h4>

Magento software versioning complies with these widely used specifications:

* [Semantic Versioning 2.0.0](http://semver.org/)
* [Versioning specification of Composer system](https://getcomposer.org/doc/04-schema.md#version)
* [PHP version_compare()](http://php.net/version_compare)

<h3>Version formats</h3>

Stable release versions are in the format `MAJOR.MINOR.PATCH`, where:

* MAJOR indicates incompatible API changes

* MINOR indicates backward-compatible functionality has been added

* PATCH indicates backward-compatible bug fixes


The pre-release version format is: `MAJOR.MINOR.PATCH-<alpha | beta | rc>n`, where `alpha`, `beta` or `rc` are stability indications, as described in the `version_compare()` specification, and
`n` is an increment number to distinguish releases of the non-stable versions.


<h3>Public APIs</h3>

Source code is considered part of the public API only if it is explicitly marked as such using the `@api` docblock tag. This designation indicates that the code can be used or customized by other components, such as formal interfaces and dependency injection points. Note that if you mark private code with `@api`, any change in this private interface will trigger a version change.

For PHP code, compatibility of `@api` can be tracked on the level of structural elements (class signatures, interfaces, methods, etc.). For other source code, compatibility is tracked only on the file level (for example, the file has been deleted or renamed).


<h3>Related topics</h3>
<a href="{{ site.gdeurl }}architecture/back-compatibility.html">Backward compatibility</a>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>




