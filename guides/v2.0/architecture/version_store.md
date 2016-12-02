---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Where is version information stored?
menu_title: Where is version information stored?
menu_order: 4

level3_menu_node: level3child
level3_subgroup: versioning


version: 2.0
github_link: architecture/versioning.md
redirect_from: /guides/v1.0/architecture/version_store.html
---

## Where is version information stored? {#verpol}

Both software version numbers and product version numbers are found in the `version` field of the component's or metapackage's `composer.json` file.

For example, you can declare software version as a version of the component:

<pre>
"name": "acme/foo",
"version": 1.2.0
</pre>

Or you can use it to declare a dependency on a particular version of a component:

<pre>
"require": {
   "acme/foo": "1.2.*",
   "acme/bar": "2.2.0"
}
</pre>

## Related topics

* <a href="{{page.baseurl}}architecture/back-compatibility.html">Backward compatibility</a>

* <a href="{{page.baseurl}}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>
