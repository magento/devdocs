---
layout: default
group: config-guide
subgroup: 04_CLI
title: Code compiler
menu_title: Code compiler
menu_node: 
menu_order: 175
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-compiler.md
redirect_from: 
  - /guides/v1.0/config-guide/cli/config-cli-subcommands-compiler-single.html
  - /guides/v2.0/config-guide/cli/config-cli-subcommands-compiler-single.html
  - /guides/v2.0/config-guide/cli/config-cli-subcommands-compiler-multi.html
---

#### Contents

*	<a href="#config-cli-subcommands-compile-overview">Overview of code compilation</a>
*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-single">Run the single-tenant compiler</a>
*	<a href="#config-cli-subcommands-run">Run the multi-tenant compiler</a>


<h2 id="config-cli-subcommands-compile-overview">Overview of code compilation</h2>
<p>This section discusses the basics of code compilation.</p>
<p>Code compilation consists of all of the following in no particular order:</p>
<ul><li>Application code generation (factories, proxies, and so on)</li>
<li>Area configuration aggregation (that is, optimized dependency injection configurations per area)</li>
<li>Interceptor generation (that is, optimized code generation of interceptors)</li>
<li>Interception cache generation</li>
<li>Repositories code generation (that is, generated code for APIs)</li>
<li>Service data attributes generation (that is, generated extension classes for data objects)</li></ul>
<p>You can find code compilation in classes in the <a href="{{ site.mage2000url }}setup/src/Magento/Setup/Module/Di/App/Task/Operation" target="_blank">\Magento\Setup\Module\Di\App\Task\Operation</a> namespace.</p> 

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-subcommands-single">Run the single-tenant compiler</h2>
Use this command if you have one website and store. If you have multiple websites and stores, use the <a href="#config-cli-subcommands-run">multi-tenant compiler</a> instead.

<div class="bs-callout bs-callout-warning">
    <p>There is a known issue with the single-tenant compiler; it does not currently compile proxies. Therefore, if you're preparing to deploy to production, you must use the multi-tenant compiler.</p>
</div>

Run the command as follows (there are no options):

	magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

<h2 id="config-cli-subcommands-run">Run the multi-tenant compiler</h2>
Use this command if you have multiple *tenants*, which means more than one independent Magento application. In other words:

*	There is one Magento 2 code base instance
*	There is one database instance per tenant
*	Independent configurations in the Magento Admin per tenant
*	The storefronts are independent of each other

If you do not have multiple tenants, use the <a href="#config-cli-subcommands-single">single-tenant compiler</a> instead.

Command options:

	magento setup:di:compile-multi-tenant [--serializer="{serialize|igbinary}"] [--extra-classes-file="<path>"] [--generation="<path and 
	filename>"] [--di="<path and filename>"] [--exclude-pattern="<regex>"]

The following table discusses the meanings of this command's parameters and values. 

<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		
	<tr>
		<td><p>--serializer</p></td>
		<td><p>Specify either <code>serialize</code> or <a href="https://github.com/phadej/igbinary" target="_blank">igbinary</a>. Default is <code>serialize</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--extra-classes-file</p></td>
		<td><p>Specify the absolute file system path to proxies and factories that are not declared in the dependency injection or code..</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--generation</p></td>
		<td><p>Absolute file system path to a directory for generated classes. Default is <code>&lt;your Magento install dir>/var/generation</code></p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--di</p></td>
		<td><p>Absolute file system path to a directory to generate the object manager configuration. Default is <code>&lt;your Magento install dir>/var/di</code></p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--exclude-pattern</p></td>
		<td><p>Regular expression that enables you to exclude paths from compilation. Default is <code>#[\\/]m1[\\/]#i)</code></p></td>
		<td><p>No</p></td>
	</tr>
	
	</tbody>
</table>

For example, to run the compiler and specify the `igbinary` serializer:

	magento setup:di:compile-multi-tenant --serializer=igbinary

Messages similar to the following display:

	Generated classes:
        Magento\Rss\Controller\Adminhtml\Feed\Interceptor
        Magento\Quote\Model\Quote\Config\Interceptor
        Magento\Checkout\Block\Cart\Shipping\Interceptor
        Magento\Framework\View\Layout\Interceptor
        Magento\Integration\Service\V1\Integration\Interceptor
        Magento\Catalog\Block\Product\Compare\ListCompare\Interceptor
        Magento\Framework\View\TemplateEngineFactory\Interceptor
        Magento\Catalog\Model\Product\Attribute\Backend\Price\Interceptor
        Magento\Catalog\Api\ProductRepositoryInterface\Interceptor
        Magento\Catalog\Model\Product\Interceptor
        Magento\Quote\Model\Quote\Item\ToOrderItem\Interceptor
        Magento\Catalog\Controller\Adminhtml\Product\Initialization\Helper\Interceptor
        Magento\Catalog\Model\Product\CartConfiguration\Interceptor
        Magento\Catalog\Model\Product\TypeTransitionManager\Interceptor
        Magento\Catalog\Model\Product\Type\Interceptor
        ... more messages ...
        On *nix systems, verify the Magento application has permissions to modify files created by the compiler in the "var" directory. 
        For instance, if you run the Magento application using Apache, the owner of the files in the "var" directory should be the Apache user 
        (example command: "chown -R www-data:www-data <MAGENTO_ROOT>/var" where MAGENTO_ROOT is the Magento root directory).

#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
