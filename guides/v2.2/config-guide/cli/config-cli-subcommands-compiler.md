---
layout: default
group: config-guide
subgroup: 04_CLI
title: Code compiler
menu_title: Code compiler
menu_node:
menu_order: 175
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-compiler.md
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of code compilation {#config-cli-subcommands-compile-overview}
This section discusses the basics of code compilation. Code compilation consists of all of the following (in no particular order):

-   Application code generation (factories, proxies, and so on)
-   Area configuration aggregation (that is, optimized {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configurations per area)
-   Interceptor generation (that is, optimized code generation of interceptors)</li>
-   Interception {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} generation
-   Repositories code generation (that is, generated code for APIs)
-   Service data attributes generation (that is, generated {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} classes for data objects)

You can find code compilation in classes in the <a href="{{ site.mage2000url }}setup/src/Magento/Setup/Module/Di/App/Task/Operation" target="\_blank">\Magento\Setup\Module\Di\App\Task\Operation</a> {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %}.

<div class="bs-callout bs-callout-warning" markdown="1">
In this release, the Magento software doesn't support the multi-tenant compiler (that is, the `magento setup:di:compile-multi-tenant` command).
</div>

## Run the single-tenant compiler {#config-cli-subcommands-single}
Run the command as follows (there are no options):

	magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

## Run the code compiler {#config-cli-subcommands-run}
Command options:

	magento setup:di:compile [--serializer="{serialize|igbinary}"] [--extra-classes-file="<path>"] [--generation="<path and
	filename>"] [--di="<path and filename>"] [--exclude-pattern="<regex>"]

The following table explains this command's parameters and values.

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
		<td><p>Specify either <code>serialize</code> or <a href="https://github.com/phadej/igbinary" target="\_blank">igbinary</a>. Default is <code>serialize</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--extra-classes-file</p></td>
		<td><p>Specify the absolute file system path to proxies and factories that are not declared in the dependency injection or code..</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--generation</p></td>
		<td><p>Absolute file system path to a directory for generated classes. Default is <code>&lt;your Magento install dir>/generated/code</code></p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--di</p></td>
		<td><p>Absolute file system path to a directory to generate the object manager configuration. Default is <code>&lt;your Magento install dir>/generated/metadata</code></p></td>
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

	magento setup:di:compile --serializer=igbinary

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
        On \*nix systems, verify the Magento application has permissions to modify files created by the compiler in the "var" directory.
        For instance, if you run the Magento application using Apache, the owner of the files in the "var" directory should be the Apache user
        (example command: "chown -R www-data:www-data <MAGENTO_ROOT>/var" where MAGENTO_ROOT is the Magento root directory).

## Optional. Compile code before installing the Magento application {#config-cli-subcommands-single-before}
In some cases, you might want to compile code before you install the Magento application. To do that, you must first enable modules; otherwise, the compiler has nothing to do. To compile code for only some modules, enable only those modules.

The following command enables all modules:

	php bin/magento module:enable --all [-c|--clear-static-content]

Use the optional `[-c|--clear-static-content]` option to clear {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %}. This is necessary if you've previously enabled or disabled modules and you must clear static content previously generated for them.

[More information about enabling modules]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-enable.html).

<h2 id="config-cli-subcommands-single">Compile code</h2>
Use this command to compile code.

Run the command as follows (there are no options):

	magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

***Code compiling without a database***

Refer to [Deploy static view files without installing Magento]({{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#deploy_without_db) for more information.

#### Related topics

-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
-   <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
