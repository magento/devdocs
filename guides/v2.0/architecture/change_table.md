---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Changes to classes and method versions
menu_title: Changes to classes and method versions
menu_order: 5

level3_menu_node: level3child
level3_subgroup: versioning


github_link: architecture/versioning.md
redirect_from: /guides/v1.0/architecture/version_store.html
---

<h2>Changes to classes and method versions</h2>

The following table identifies typical Major, Minor and Patch level changes to interfaces and classes. 

<table>
<tbody>
<tr>
<th></th>
<th>Class</th>
<th>Interface</th>
</tr>
<tr>
<td><b>Major change</b></td>

<td><p>Class removed<br>Constant added, removed<br>Protected method added, removed<br>Protected method parameter changed<br>Protected property added, removed<br>Public method parameter changed<br>Public property added, removed<br>Public method added, removed</p></td>

<td><p>Constant added, removed<br>Interface added, removed<br>Method added, removed<br>Method parameter changed</p>
</td>
</tr>
<tr>
<td><b>Minor change</b></td>
<td>Class added</td>
<td></td>
</tr>
<tr>
<td><b>Patch change</b></td>
<td><p> Private method added, removed<br>Private method parameter changed<br>Private method parameter name changed<br>Private property added, removed<br>Protected method parameter name changed<br>Public method parameter name changed<br></p></td>
<td>Method parameter name changed</td></tr>
</tbody>
</table>

<h3>Related topics</h3>
<a href="{{ site.gdeurl }}architecture/versioning_overview.html">Versioning policy overview</a>


<a href="{{ site.gdeurl }}architecture/software_versions.html">Magento 2.0 software versions</a>

<a href="{{ site.gdeurl }}architecture/version_store.html">Where is version information stored?</a>
