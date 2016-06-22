---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Convert layout XML files
menu_title: Convert layout XML files
menu_node: 
menu_order: 700
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-layout-xml.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-layout-xml.html
---


#### Contents

*	<a href="#config-cli-xml-overview">Overview of layout XML conversion</a>
*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-xml-run">Convert layout XML files</a>


<h2 id="config-cli-xml-overview">Overview of layout XML conversion</h2>
When XML schema are updated, you should update your layout XML files to match the new Extensible Stylesheet Language Transformations (XSLT) stylesheet. This command enables you to perform these updates.

For more information about layout XML files, see:

*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html">Layout instructions</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-types.html">Layout file types</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-xml-run">Convert layout XML files</h2>
Command options:

	magento dev:xml:convert [-o|--overwrite] {xml file} {xslt stylesheet}

where

*	`{xml file}` is the full path and file name of a layout XML file to convert (required)
*	`{xslt stylesheet}` is the full path and file name of an XSLT schema file to use for conversion (required)
*	`-o|--overwrite` include this option to overwrite the existing XML file

#### Related topics

*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
