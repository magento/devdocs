---
layout: default
group: arch-guide
subgroup: Components
title: 
menu_title: Module conventions
menu_order: 5
level3_menu_node: level3child
level3_subgroup: modules
version: 2.0
github_link: architecture/archi_perspectives/components/modules/mod_conventions.md
redirect_from: 
  - /guides/v1.0/architecture/modules/mod_conventions.html
  - /guides/v2.0/architecture/modules/mod_conventions.html
---

<h2 id="m2arch-module-conventions-overview"> Overview</h2>


Modules must conform to Magento conventions regarding code location and file names. Keep these conventions in mind when working with or developing modules. 

Be sure to research additional Magento conventions, beyond those applicable to modules. For  more information, see <a href="{{page.baseurl}}coding-standards/bk-coding-standards.html">Coding Standards</a>.

<h2 id="m2arch-module-conventions-location"> Module location conventions</h2>

The following table shows the *recommended* location within the Magento file system for specific components.

(A module must include a `registration.php` file in its root folder.) 

We refer to a component’s root directory as the top-level directory in which you develop component code. Typically, this directory is located in one of the following directories relative to the Magento root directory:

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
			<td colspan="1"><code>&lt;<your Magento install dir>/app/design/frontend (storefront themes) or &lt;Module&gt;/&lt;theme&gt;</code></td>
		</tr>
		<tr><td colspan="1">If you want to use a library</td>
			<td colspan="1"><code>&lt;your Magento install dir>/lib/&lt;Vendor_Library&gt;</code></td>
		</tr>
	</tbody>
</table>



