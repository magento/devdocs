---
layout: default
group: config-guide
subgroup: CLI
title: Multi-tenant compiler
menu_title: Multi-tenant compiler
menu_node: 
menu_order: 10
github_link: config-guide/cli/config-cli-subcommands-compiler-multi.md
---

#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-compile-overview">Overview of code compilation</a>
*	<a href="#config-cli-subcommands-multi">Overview of the multi-tenant compiler</a>
*	<a href="#config-cli-subcommands-run">Run the multi-tenant compiler</a>


<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-subcommands-compile-overview">Overview of code compilation</h2>
This section discusses the basics of code compilation (which is also referred to as *code generation*).

{% include install/cli_code-generation.html %}

<h2 id="config-cli-subcommands-multi">Overview of the multi-tenant compiler</h2>
Use this command if you have multiple *tenants*, which means more than one independent Magento application. In other words:

*	There is one Magento 2 code base instance
*	There is one database instance per tenant
*	Independent configurations in the Magneto Admin per tenant
*	The storefronts are independent of each other

If you do not have multiple tenants, use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">single-tenant compiler</a> instead.

{% include install/cli_tenant-compiler.html %}



<!-- The multi-tenant compiler does the following:

*	Generates factories declared in `<your Magento install dir>/app/code`
*	Generates proxies declared in `di.xml` files
*	Generates interceptors for all classes that have plug-ins declared in the `di.xml` configuration
*	Automatically compiles definitions for all modules and `<your Magento install dir>/lib/internal/Magento` directories.
*	Compiles class inheritance implementation relations to increase performance of configuration inheritance
*	Compiles plug-in definitions (that is, the list of declared public methods)

<div class="bs-callout bs-callout-warning">
    <p>The multi-tenant compiler does not analyze usage of auto-generated factory classes in files that are located in the <code>lib/internal/Magento</code> directory structure because use of auto-generated factory classes on the library level is prohibited. If you need to use a factory on the library level, please generate the class manually.</p>
</div>

### Tips

*	The only place where you can declare proxy is `di.xml`. It's better to use a type for virtualType or as an instance of the type parameter.
*	The only place where factory classes can be declared is in a `__construct` of PHP classes located under `app/code`.

### Naming rules
Naming Rules for auto-generated classes for a module:

*	Proxy classes: `VendorName\ModuleName\ModelName\Proxy`
*	Factory classes: `VendorName\ModuleName\ModelName\NameFactory`

<div class="bs-callout bs-callout-warning">
    <p>Failure to follow the preceding naming convention results in exceptions.</p>
</div> -->


<h2 id="config-cli-subcommands-run">Run the multi-tenant compiler</h2>
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
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">Clean the logs</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">Single-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create LESS from CSS</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>