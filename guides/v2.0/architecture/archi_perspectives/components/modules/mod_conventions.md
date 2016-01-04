---
layout: default
group: arch-guide
subgroup: Components
title: 
menu_title: Module conventions
menu_order: 5
level3_menu_node: level3child
level3_subgroup: modules
github_link: architecture/components/modules/mod_conventions.md
redirect_from: /guides/v1.0/architecture/modules/mod_conventions.html
---

<h2 id="m2arch-module-conventions-overview"> Overview</h2>


Modules must conform to Magento conventions regarding code location and file names. Keep these conventions in mind when working with or developing modules. 

Be sure to research additional Magento conventions, beyond those applicable to modules. For  more information, see <a href="{{ site.gdeurl }}coding-standards/bk-coding-standards.html">Coding Standards</a>.

<h2 id="m2arch-module-conventions-location"> Module location conventions</h2>

The following table shows the standard location within the Magento file system for specific code entities.

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
Module names must start with a vendor name (for example, `Magento_Config.php`).


Several modules in Magento have composite names. For example,  a name can consist of several words with capitalized first letters. Because a module alias is in lowercase, there is no simple solution to convert module alias to module name. To solve this issue, the setup class contains a correspondence array of modules with composite names. This array is used in class name generation.

Example: `catalogsearch` is the module alias of the `Magento_CatalogSearch` module.

<h2 id="m2arch-module-related"> Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_intro.html">Module overview</a>



