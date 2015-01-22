---
layout: default
group: arch-guide
subgroup: Modules
title: Module naming and location conventions
menu_title: Module naming and location conventions
menu_order: 5
github_link: architecture/modules/mod_conventions.md
---

<h2 id="m2arch-module-conventions-overview"> Overview</h2>

When developing or working with modules, be aware of Magento standards and conventions, such as naming conventions and the location of modules within the file system.

Be sure to research additional Magento conventions, beyond those applicable to modules. For  more information, see <a href="{{ site.gdeurl }}coding-standards/bk-coding-standards.html">Coding Standards</a>.

<h2 id="m2arch-module-conventions-location"> Module location conventions</h2>

The following table shows the standard locating within the Magento file system for specific entities.

<table>
	<tbody>
		<tr>
			<th>Entity</th>
			<th>Location</th>
		</tr>
		<tr>
			<td>Code base of your custom module</td>
			<td><p><code>&lt;your Magento install dir>/app/code/&lt;Vendor&gt;/&lt;Module&gt;</code></p></td>
		</tr>
		<tr>
			<td colspan="1">Your custom theme files</td>
			<td colspan="1"><code>&lt;your Magento install dir>/app/design/&lt;Module&gt;/&lt;theme&gt;</code></td>
		</tr>
		<tr><td colspan="1">If you want to use a library</td>
			<td colspan="1"><code>&lt;your Magento install dir>/lib/&lt;Vendor_Library&gt;</code></td>
		</tr>
	</tbody>
</table>

<h2 id="m2arch-module-conventions-location">Module naming convention</h2>

Several modules in Magento have composite names. For example, when a name consists of several words with capitalized first letters. Because a module alias is in lowercase, there is no simple solution to convert module alias to module name. To solve this issue setup class contains correspondence array of modules with composite names and this array is used in class name generation.

Example: `catalogsearch` is the module alias of the `Magento_CatalogSearch` module.

<h2 id="m2arch-module-related"> Related topics</h2>
* <a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Module dependencies</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_relationships.html">Module relationships</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_and_areas.html">Modules and areas</a>


