---
group: php-developer-guide
subgroup: 99_Module Development
title: Clear directories during development
menu_title: Clear directories during development
menu_node: 
menu_order: 200
---

## Overview of directory clearing {#howdoi-clear-over}

While you're developing Magento components (modules, themes, and language packages), your rapidly changing environment requires you to periodically clear certain directories and caches. Otherwise, your code runs with exceptions and won't function properly.

This topic provides guidelines on what directories to clear and when to clear them.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
* All directories discussed in this topic are default locations. It's possible to customize these locations but doing so is beyond the scope of this topic.
* This topic is not comprehensive. Please help us improve it by clicking **Edit this page on GitHub** at the top of this page. Watch this page for updates.
</div> 

When you're developing Magento components (modules, themes, and language packages), the following directories contain temporary or generated files you can clear periodically:

Directory | Description
--- | ---
`pub/static`| Contains `js` and `html` files for each store view.
`var/cache` | All cacheable objects <em>except</em> the page cache. (This directory is empty if you use a third-party cache storage like Redis.)
`var/composer_home` | Home directory for the Setup Wizard artifacts. Typically, you shouldn't touch this directory; clear it only if you're an experienced developer and are familiar with the Magento plug-in. For example, if the Component Manager or System Upgrade web-based utilities cannot find the correct components you can try clearing this directory; however, doing so adversely affects the performance of those utilities.
`var/di` | Contains the compiled dependency injection configuration for all modules.
`var/generation` | Contains [generated code]({{ page.baseurl }}/extension-dev-guide/code-generation.html)".
`var/page_cache` | Cached pages from the full page cache mechanism. (This directory is empty if you use a third-party HTTP accelerator like Varnish.)
`var/view_preprocessed` | Minified templates and compiled LESS (meaning LESS, CSS, and HTML).

## What directories to clear {#howdoi-clear-what}

The following table provides guidelines on what you should clear and when.

<table>
	<tbody>
		<tr>
			<th>For this activity...</th>
			<th>you should clear these directories</th>
		</tr>
	<tr>
		<td><ul><li>Change a class if there is a plug-in related to it.</li>
		<li>A change that results in generated factories or proxies (for example, a non-existent [factory]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Controller/Adminhtml/Category/Add.php#L22){:target="_blank"} declared in a class or a proxy declared in <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/etc/di.xml#L25" target="_blank"><code>di.xml</code></a>)</li></ul> </td>
		<td>var/di, var/generation</td>
	</tr>
	<tr>
		<td>Change any <code>di.xml</code></td>
		<td>var/di, var/generation; also, run the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html">code compiler</a> again</td>
	</tr>
	<tr>
		<td>Add, remove, enable, or disable modules</td>
		<td>var/di, var/generation, var/cache, var/page_cache</td>
	</tr>
	<tr>
		<td>Add or edit a layout or theme</td>
		<td>var/view_preprocessed, var/cache, var/page_cache</td>
	</tr>
	<tr>
		<td>Change LESS or templates</td>
		<td>var/view_preprocessed, var/cache, var/page_cache as well</td>
	</tr>
	<tr>
		<td>Change `*.js` or `*.html` files</td>
		<td>pub/static</td>
	</tr>
	<tr>
		<td>Add or edit a CMS page, cacheable block, or use the Magento Admin to change the configuration</td>
		<td>var/cache, var/page_cache</td>
	</tr>
</tbody>
</table>

## How to clear the directories {#howdoi-clear-how}

To only clear directories and not perform other actions, log in to the Magento server as the <a href="{{ page.baseurl }}/install-gde/prereq/apache-user.html">Magento file system owner</a> and clear directories using a command like the following:

```bash
rm -rf <magento_root>/var/di/* <magento_root>/var/generation/*
```

You can also use the following command-line tools clear some directories for you. These commands perform other tasks as well; consult the linked documentation for more details.

<table>
	<tbody>
		<tr>
			<th>Tool name</th>
			<th>Brief description</th>
			<th>What it clears</th>
		</tr>
	<tr>
		<td><a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html">magento setup:upgrade</a></td>
		<td>Updates the Magento database schema and data.</td>
		<td>var/di, var/generation</td>
	</tr>
	<tr>
		<td><a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html">magento setup:di:compile</a></td>
		<td>Generates code.</td>
		<td>var/generation (after which compiles code again)</td>
	</tr>
	<tr>
		<td><a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html">magento deploy:mode:set {mode}</a></td>
		<td>Changes from developer mode to production mode and vice versa.</td>
		<td>var/di, var/generation, var/view_preprocessed</td>
	</tr>
	<tr>
		<td><a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html">magento cache:clean [type]</a></td>
		<td>Cleans the cache.</td>
		<td>var/cache, var/page_cache</td>
	</tr>
</tbody>
</table>
