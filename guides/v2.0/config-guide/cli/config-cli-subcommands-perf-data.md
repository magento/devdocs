---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Generate data for performance testing
menu_title: Generate data for performance testing
menu_node: 
menu_order: 800
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-perf-data.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-perf-data.html
---


#### Contents

*	<a href="#config-cli-perf-overview">Overview of performance testing data</a>
*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-perf-prof">About profiles</a>
*	<a href="#config-cli-perf-run">Run the data generator</a>

<h2 id="config-cli-perf-overview">Overview of performance testing data</h2>
To use the Magento performance toolkit or another tool for performance testing, you must generate a large amount of data (for example, stores, categories, products, and so on).

You can adjust the amount of data you create using *profiles* (small, medium, large, and extra large). The next section discusses profiles in more detail.

The following figure shows how a product displays on the storefront using the small profile:

<p><img src="{{ site.baseurl }}common/images/config_generate-data.png" alt="Sample storefront with generated data"></p>

This gives you an idea about what the data looks like.

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-perf-prof">About profiles</h2>
The following table provides details about the data generator profiles (small, medium, large, and extra large).

Profiles are located in `<your Magento install dir>/setup/performance-toolkit/profiles/<ce or ee>`

For example, `/var/www/html/magento2/setup/performance-toolkit/profiles/ce`

<table>
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Small profile</th>
			<th>Medium profile</th>
			<th>Large profile</th>
			<th>Extra large profile</th>
		</tr>
		
	<tr>
		<td><p>websites</p></td>
		<td><p>1</p></td>
		<td><p>1</p></td>
		<td><p>3</p></td>
		<td><p>5</p></td>
	</tr>
	<tr>
		<td><p>store_groups</p></td>
		<td><p>1</p></td>	
		<td><p>2</p></td>
		<td><p>3</p></td>
		<td><p>5</p></td>	
	</tr>
	<tr>
		<td><p>store_views</p></td>
		<td><p>1</p></td>	
		<td><p>2</p></td>
		<td><p>3</p></td>
		<td><p>5</p></td>	
	</tr>
	<tr>
		<td><p>simple_products</p></td>
		<td><p>800</p></td>	
		<td><p>16,000</p></td>
		<td><p>400,000</p></td>
		<td><p>800,000</p></td>	
	</tr>
	<tr>
		<td><p>configurable_products</p></td>
		<td><p>50</p></td>	
		<td><p>1,000</p></td>
		<td><p>25,000</p></td>
		<td><p>50,000</p></td>	
	</tr>
	<tr>
		<td><p>categories</p></td>
		<td><p>30</p></td>	
		<td><p>300</p></td>
		<td><p>1,000</p></td>
		<td><p>3,000</p></td>	
	</tr>
	<tr>
		<td><p>categories_nesting_level</p></td>
		<td><p>3</p></td>	
		<td><p>3</p></td>
		<td><p>3</p></td>
		<td><p>6</p></td>	
	</tr>
	<tr>
		<td><p>catalog_price_rules</p></td>
		<td><p>10</p></td>	
		<td><p>20</p></td>
		<td><p>50</p></td>
		<td><p>100</p></td>	
	</tr>
	<tr>
		<td><p>catalog_target_rules</p></td>
		<td><p>2</p></td>	
		<td><p>5</p></td>
		<td><p>10</p></td>
		<td><p>50</p></td>	
	</tr>
	<tr>
		<td><p>cart_price_rules</p></td>
		<td><p>10</p></td>	
		<td><p>20</p></td>
		<td><p>50</p></td>
		<td><p>100</p></td>		
	</tr>
	<tr>
		<td><p>cart_price_rules_floor</p></td>
		<td><p>2</p></td>	
		<td><p>2</p></td>
		<td><p>2</p></td>
		<td><p>5</p></td>		
	</tr>
	<tr>
		<td><p>customers</p></td>
		<td><p>20</p></td>	
		<td><p>200</p></td>
		<td><p>2,000</p></td>
		<td><p>5,000</p></td>		
	</tr>
	<tr>
		<td><p>tax rates</p></td>
		<td><p>40,000</p></td>	
		<td><p>40,000</p></td>
		<td><p>40,000</p></td>
		<td><p>40,000</p></td>		
	</tr>
	<tr>
		<td><p>orders</p></td>
		<td><p>80</p></td>	
		<td><p>1,600</p></td>
		<td><p>40,000</p></td>
		<td><p>80,000</p></td>		
	</tr>
	</tbody>
</table>

<h3 id="config-cli-perf-run">Run the data generator</h3>
Run the command as discussed in this section. After the command runs, it rebuilds indexers.

Command options:

	magento setup:perf:generate-fixtures {path to profile}

where `<path to profile>` specifies the absolute file system path to and name of a profile.

For example,

	magento setup:perf:generate-fixtures /var/www/html/magento2/setup/performance-toolkit/profiles/ce/small.xml

Sample output for the small profile:

	Generating profile with following params:
	 |- Websites: 1
	 |- Store Groups: 1
	 |- Store Views: 1
	 |- Categories: 30
	 |- Simple products: 800
	 |- Configurable products: 50
	 |- Customers: 20
	 |- Cart Price Rules: 10
	 |- Catalog Price Rules: 10
	 |- Orders: 80
	Generating websites, stores and store views...  done in <time>
	Generating categories...  done in <time>
	Generating simple products...  done in <time>
	Generating configurable EAV variations...  done in <time>
	... more ...


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
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
