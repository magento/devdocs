---
layout: default
group: howdoi
subgroup: PHPDev
title: How do I...?
menu_title: Clear directories and cache during development
menu_node: 
menu_order: 1
github_link: howdoi/php/php_clear-dirs.md
---

#### Contents
*	TBD
*	TBD
*	TBD

<h2 id="howdoi-clear-over">Overview of directory clearing</h2>
While you're developing Magento components (modules, themes, and language packages), your rapidly changing environment requires to you clear certain directories and caches. This topic provides guidelines on what directories and caches to clear and when to clear them.

<div class="bs-callout bs-callout-info" id="info">
  <p>This topic is not comprehensive. Please help us improve it by clicking <strong>Edit this page on GitHub</strong> at the top of this page. Watch this page for updates.</p>
</div> 

See one of the following topics for more information:

*	<a href="#howdoi-clear-over-dirs">Overview of development-related directories</a>
*	<a href="#howdoi-clear-over-cmds">Overview of development-related commands</a>

<h3 id="howdoi-clear-over-dirs">Overview of development-related directories</h3>
When you're developing Magento components (modules, themes, and language packages), the following directories contain temporary or generated files you can clear periodically:

<table>
	<tbody>
		<tr>
			<th>Directory</th>
			<th>What it contains</th>
		</tr>
	<tr>
		<td>var/cache</td>
		<td>All cacheable elements <em>except</em> the page cache.</td>
		
	<tr>
		<tr>
		<td>var/composer_home</td>
		<td><p>Home directory for the Magento Composer plug-in artifacts. Typically, you shouldn't touch this directory; clear it only if you're an experienced developer and are familiar with the Magento plug-in.</p>
			<p>For example, if the Component Manager or System Upgrade web-based utilities cannot find the correct components you can try clearing this directory; doing so adversely affects the performance of those utilities.</td>
		
	<tr>
	<tr>
		<td>var/di</td>
		<td><p>Together with <code>var/generation</code>, contains <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html#config-cli-subcommands-compile-overview">compiled code</a> (also referred to as <em>generated code</em>).</p>
			<p><code>var/di</code> contains TBD.</p></td>
		
	<tr>
		<td>var/generation</td>
		<td>Contains TBD.</p></td>
	</tr>
	<tr>
		<td>var/page_cache</td>
	<td>TBD</td>
	</tr>
	<tr>
		<td>var/view_preprocessed</td>
	<td>TBD</td>
	</tr>
</tbody>
</table>

<h3 id="howdoi-clear-over-cmds">Overview of development-related commands</h3>
TBD