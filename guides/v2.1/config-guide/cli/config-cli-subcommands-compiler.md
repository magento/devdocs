---
layout: default
group: config-guide
subgroup: 04_CLI
title: Code compiler
menu_title: Code compiler
menu_node: 
menu_order: 175
version: 2.1
github_link: config-guide/cli/config-cli-subcommands-compiler.md
---

#### Contents

*	<a href="#config-cli-subcommands-compile-overview">Overview of code compilation</a>
*	<a href="#config-cli-before">First steps</a>
*	[Optional. Compile code before installing the Magento application](#config-cli-subcommands-single-before)
*	<a href="#config-cli-subcommands-single">Compile code</a>

<h2 id="config-cli-subcommands-compile-overview">Overview of code compilation</h2>
<p>This section discusses the basics of code compilation.</p>
<p>Code compilation consists of all of the following in no particular order:</p>
<ul><li>Application code generation (factories, proxies, and so on)</li>
<li>Area configuration aggregation (that is, optimized dependency injection configurations per area)</li>
<li>Interceptor generation (that is, optimized code generation of interceptors)</li>
<li>Interception cache generation</li>
<li>Repositories code generation (that is, generated code for APIs)</li>
<li>Service data attributes generation (that is, generated extension classes for data objects)</li></ul>
<p>You can find code compilation in classes in the <a href="{{ site.mage2100url }}setup/src/Magento/Setup/Module/Di/App/Task/Operation" target="_blank">\Magento\Setup\Module\Di\App\Task\Operation</a> namespace.</p> 

<div class="bs-callout bs-callout-warning">
    <p>In this release, the Magento software doesn't support the multi-tenant compiler (that is, the <code>magento setup:di:compile-multi-tenant</code> command).</p>
</div>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

## Optional. Compile code before installing the Magento application {#config-cli-subcommands-single-before}
In some cases, you might want to compile code before you install the Magento application. To do that, you must first enable modules; otherwise, the compiler has nothing to do. To compile code for only some modules, enable only those modules.

The following command enables all modules:

	php bin/magento module:enable --all [-c|--clear-static-content]

Use the optional `[-c|--clear-static-content]` option to clear static content. This is necessary if you've previously enabled or disabled modules and you must clear static content previously generated for them.

[More information about enabling modules]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-enable.html).

<h2 id="config-cli-subcommands-single">Compile code</h2>
Use this command to compile code. 

Run the command as follows (there are no options):

	magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

#### Related topics

*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
