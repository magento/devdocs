---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Release types and version numbers
menu_title: Release types and version numbers
menu_order: 5

level3_menu_node: level3child
level3_subgroup: versioning

version: 2.0
github_link: architecture/release_types.md
---

## Overview

This topic describes how and when the software version numbers will be changed with releases.

The software version  always changes with any release of Magento source code.

## Development releases

In every development release ("pre-release" version), **the same value of version number will be propagated in all Magento components and their dependencies**.

Magento may update the `x.y.z` version in way prescribed by Semantic Versioning, but also could release the same `x.y.z` with different stability and/or index numbers, For example, `0.1.0-alpha1 -> 0.1.0-alpha2`, `0.1.0-alpha3` or `2.0.0-alpha3 -> 2.1.0-beta1 -> 2.1.0-beta2`

<table>
<tbody>
<tr>
<th></th>
<th>Previous Release</th>
<th>Next Release</th>
</tr>
<tr>
<td>Component Version</td>
<td><pre>
"name": "magento/foo",
"version": 0.1.0-alpha87</pre></td>
<td><pre>
"name": "magento/foo",
"version": 0.1.0-alpha88</pre></td></tr>
<tr>
<td>Dependency in Other Components</td>
<td><pre>"require": {
    "magento/foo": "0.1.0-alpha87"
}
</pre></td>
<td><pre>"require": {
    "magento/foo": "0.1.0-alpha88"
}
</pre></td></tr>
</tbody>
</table>

## Stable releases

In every stable release, the same value of version number is propagated in all components, but dependencies have a wildcard (*) pattern.

The `x.y.z` numbers will change according to Semantic Versioning policy provisions. For example, `1.0.0 -> 1.0.1 -> 1.1.0 -> 1.5.0 -> 1.5.1 -> 2.0.0 -> 2.1.0`. Also, Magento may decide to change the "minor" version instead of the "patch" version.

<table>
<tbody>
<tr>
<th></th>
<th>Previous Release</th>
<th>Next Release</th>
</tr>
<tr>
<td>Component Version</td>
<td><pre>"name": "magento/foo",
"version": ~1.2
</pre>
<p>This is equivalent to &gt;= 1.2 &lt; 2.0.0.</p></td>
<td><pre>"name": "magento/foo",
"version": 1.3.0
</pre></td></tr>
<tr>
<td>Dependency in Other Components</td>
<td><pre>"require": {
    "magento/foo": "1.2.*"
}
</pre></td>
<td><pre>"require": {
    "magento/foo": "1.3.*"
}
</pre></td>
</tr>
</tbody>
</table>

## Related topics

* <a href="{{page.baseurl}}architecture/back-compatibility.html">Backward compatibility</a>

* <a href="{{page.baseurl}}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>
