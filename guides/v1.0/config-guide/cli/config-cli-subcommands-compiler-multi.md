---
layout: default
group: config-guide
subgroup: CLI
title: Multi-store compiler
menu_title: Multi-store compiler
menu_node: 
menu_order: 10
github_link: config-guide/cli/config-cli-subcommands-compiler-multi.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-multi">Introduction to the multi-store compiler</a>
*	<a href="#config-cli-subcommands-run">Running the multi-store compiler</a>


<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="config-cli-subcommands-multi">Introduction to the multi-store compiler</h2>
Use this command if you have multiple websites and stores. If you have one website and store, use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">single-store compiler</a> instead.

{% include install/cli_tenant-compiler.html %}

The multi-store compiler does the following:

*	Generates factories declared in `<your Magento install dir>/app/code`
*	Generates proxies declared in `di.xml` files
*	Generates interceptors for all classes that have plug-ins declared in the `di.xml` configuration
*	Automatically compiles definitions for all modules and `<your Magento install dir>/lib/internal/Magento` directories.
*	Compiles class inheritance implementation relations to increase performance of configuration inheritance
*	Compiles plug-in definitions (that is, the list of declared public methods)

<div class="bs-callout bs-callout-warning">
    <p>The multi-store compiler does not analyze usage of auto-generated factory classes in files that are located in the <code>lib/internal/Magento</code> directory structure because use of auto-generated factory classes on the library level is prohibited. If you need to use a factory on the library level, please generate the class manually.</p>
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
</div>

<h2 id="config-cli-subcommands-run">Running the multi-store compiler</h2>
Command options:

	php magento setup:di:compile-multi-tenant [--serializer="{serialize|igbinary}"] [--extra-classes-file="<path>"] [--generation="<path and filename>"] [--di="<path and filename>"] [--exclude-pattern="<regex>"]

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
		<td><p>Absolute file system path to a directory for the object manager configuration. Default is <code>&lt;your Magento install dir>/var/di</code></p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--exclude-pattern</p></td>
		<td><p>Regular expression that enables you to exclude paths from compilation. Default is <code>#[\\/]m1[\\/]#i)</code></p></td>
		<td><p>No</p></td>
	</tr>
	
	</tbody>
</table>




#### Related topics


