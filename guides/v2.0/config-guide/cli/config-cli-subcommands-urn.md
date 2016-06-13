---
layout: default
group: config-guide 
subgroup: 04_CLI
title: URN highlighter
menu_title: URN highlighter
menu_node: 
menu_order: 215
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-urn.md
---

#### Contents

*	<a href="#config-cli-urn-overview">Overview of the URN highlighter</a>
*	<a href="#urn-first">First steps</a>
*	<a href="#urn-command">Configure your IDE</a>


<h2 id="config-cli-urn-overview">Overview of URN highlighter</h2>
Magento code references all XSD schemas as <a href="https://www.ietf.org/rfc/rfc2141.txt" target="_blank">Uniform Resource Names (URNs)</a>. If you're developing code and need to reference XSDs, this command configures your integrated developer environment (IDE) to recognize and highlight URNs. This makes development easier.

By default, an IDE like PHPStorm is not configured to recognize URNs and, as a result, they display in red text as follows:

<img src="{{ site.baseurl }}common/images/config_urn_before.png" width="750px">

The `magento dev:urn-catalog:generate` command enables your IDE (currently, only PHPStorm) to recognize and highlight URNs like the following:

<img src="{{ site.baseurl }}common/images/config_urn_after.png" width="750px">

Specifically, this command creates the following PHPStorm configuration:

<img src="{{ site.baseurl }}common/images/config_urn_settings.png" width="750px">

<h2 id="urn-first">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="urn-command">Configure your IDE</h2>
Currently, only PHPStorm is supported.

Command syntax:

	magento dev:urn-catalog:generate <path>

where `<path>` is the path to your PHPStorm `misc.xml` file, which is located relative to your project root. Typically, `<path>` is `.idea/misc.xml`

#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
