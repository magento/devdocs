---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Supported versioning specificiations and format
menu_title: Supported versioning specificiations and format
menu_order: 2

level3_menu_node: level3child
level3_subgroup: versioning

version: 2.1
github_link: architecture/versioning_spec_format.md

---

<h2 id="verpol">Supported versioning specifications and formats</h2>


<h3>Supported specifications</h3>

Magento software versioning policy complies with these widely used specifications:

* [Semantic Versioning 2.0.0](http://semver.org/)
* [Versioning specification of Composer system](https://getcomposer.org/doc/04-schema.md#version)
* [PHP version_compare()](http://php.net/version_compare)

<h3>Version formats</h3>

Stable release versions are in the format `MAJOR.MINOR.PATCH`, where:

* MAJOR indicates incompatible {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} changes

* MINOR indicates backward-compatible functionality has been added

* PATCH indicates backward-compatible bug fixes


The pre-release version format is: `MAJOR.MINOR.PATCH-<alpha | beta | rc>n`, where `alpha`, `beta` or `rc` are stability indications, as described in the `version_compare()` specification, and
`n` is an increment number to distinguish releases of the non-stable versions.

If you are an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developer, familiarize yourself about the types of code changes that will initiate a MAJOR-, MINOR-, or PATCH- level change.
