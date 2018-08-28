---
group: extension-dev-guide
subgroup: 99_Module Development
title: Clear directories during development
---

While you're developing Magento components (modules, themes, and language packages), your rapidly changing environment requires you to periodically clear certain directories and caches. Otherwise, your code runs with exceptions and won't function properly.

This topic provides guidelines on what directories to clear and when to clear them.

<div class="bs-callout bs-callout-info" id="info">
  <ul><li>All directories discussed in this topic are default locations. It's possible to customize these locations but doing so is beyond the scope of this topic.</li>
  	<li>This topic is not comprehensive. Please help us improve it by clicking <strong>Edit this page on GitHub</strong> at the top of this page. Watch this page for updates.</li></ul>
</div> 

When you're developing Magento components (modules, themes, and language packages), the following directories contain temporary or generated files you can clear periodically:

<table>
	<col width="25%">
	<col width="75%">
	<tbody>
		<tr>
			<th>Directory</th>
			<th>What it contains</th>
		</tr>
	<tr>
		<td>var/page_cache</td>
		<td>Cached pages from the full page cache mechanism. (This directory is empty if you use a third-party HTTP accelerator like Varnish.)</td>
	</tr>
	<tr>
		<td>var/cache</td>
		<td>All cacheable objects <em>except</em> the page cache. (This directory is empty if you use a third-party cache storage like Redis.)</td>
	</tr>
	<tr>
		<td>var/composer_home</td>
		<td><p>Home directory for the Setup Wizard artifacts. Typically, you shouldn't touch this directory; clear it only if you're an experienced developer and are familiar with the Magento plug-in.</p>
			<p>For example, if the Component Manager or System Upgrade web-based utilities cannot find the correct components you can try clearing this directory; however, doing so adversely affects the performance of those utilities.</p></td>
	</tr>
	<tr>
		<td>generated/code</td>
		<td>Contains [generatedcode]({{ page.baseurl }}/extension-dev-guide/code-generation.html).</td>
	</tr>
	<tr>
		<td>generated/metadata</td>
		<td>Contains the compiled dependency injection configuration for all modules.</td>
	</tr>
	<tr>
		<td>var/view_preprocessed</td>
	<td>Minified templates and compiled LESS (meaning LESS, CSS, and HTML).</td>
	</tr>
</tbody>
</table>

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
		<li>A change that results in generated factories or proxies (for example, a non-existent [factory]({{ site.mage2000url }}app/code/Magento/Catalog/Controller/Adminhtml/Category/Add.php#L22)declared in a class or a proxy declared in[`di.xml`]({{ site.mage2000url }}app/etc/di.xml#L25))</li></ul> </td>
		<td>generated/metadata, generated/code</td>
	</tr>
	<tr>
		<td>Change any <code>di.xml</code></td>
		<td>generated/metadata, generated/code; also, run the [codecompiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html) again</td>
	</tr>
	<tr>
		<td>Add, remove, enable, or disable modules</td>
		<td>generated/metadata, generated/code, var/cache, var/page_cache</td>
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
		<td>Add or edit a CMS page, cacheable block, or use the Magento Admin to change the configuration</td>
		<td>var/cache, var/page_cache</td>
	</tr>
</tbody>
</table>

## How to clear the directories {#howdoi-clear-how}

To only clear directories and not perform other actions, log in to the Magento server as the [Magento file systemowner]({{ page.baseurl }}/install-gde/prereq/apache-user.html) and clear directories using a command like the following:

	rm -rf <your Magento install dir>/generated/metadata/* <your Magento install dir>/generated/code/*

You can also use the following command-line tools clear some directories for you. These commands perform other tasks as well; consult the linked documentation for more details.

<table>
	<tbody>
		<tr>
			<th>Tool name</th>
			<th>Brief description</th>
			<th>What it clears</th>
		</tr>
	<tr>
		<td>[magentosetup:upgrade]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)</td>
		<td>Updates the Magento database schema and data.</td>
		<td>generated/metadata, generated/code</td>
	</tr>
	<tr>
		<td>[magentosetup:di:compile]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)</td>
		<td>Generates code.</td>
		<td>generated/code (after which compiles code again)</td>
	</tr>
	<tr>
		<td>[magento deploy:mode:set{mode}]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)</td>
		<td>Changes from developer mode to production mode and vice versa.</td>
		<td>generated/metadata, generated/code, var/view_preprocessed</td>
	</tr>
	<tr>
		<td>[magento cache:clean\[type\]]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)</td>
		<td>Cleans the cache.</td>
		<td>var/cache, var/page_cache</td>
	</tr>
</tbody>
</table>
