---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Supported versioning specificiations and format
menu_title: Supported versioning specificiations and format
menu_order: 2

level3_menu_node: level3child
level3_subgroup: versioning

github_link21: architecture/versioning_overview.md

---

<h2 id="verpol">Supported versioning specifications and formats</h2>


<h3>Supported specifications</h3>

Magento software versioning policy complies with these widely used specifications:

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

If you are an extension developer, familiarize yourself about the types of code changes that will initiate a MAJOR-, MINOR-, or PATCH- level change. See <a href="{{ site.gdeurl21 }}architecture/change_table.html">Changes to classes and method versions</a>.

<h3>Schema version formats</h3>




<h3>Related topics</h3>
<a href="{{ site.gdeurl21 }}architecture/versioning_overview.html">Versioning policy overview</a>


<a href="{{ site.gdeurl21 }}architecture/software_versions.html">Magento 2.0 software versions</a>

<a href="{{ site.gdeurl21 }}architecture/version_store.html">Where is version information stored?</a>

<a href="{{ site.gdeurl21 }}architecture/change_table.html">Changes to classes and method versions</a>


<a href="{{ site.gdeurl21 }}architecture/back-compatibility.html">Backward compatibility</a>


<a href="{{ site.gdeurl21 }}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>




