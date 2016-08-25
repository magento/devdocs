<div markdown="1">

## Introduction to Magento sample data {#instgde-prereq-sample-intro}
Magento sample data provides a storefront based on the Luma theme outfitted with products, categories, customer registration, and so on. It functions just like a Magento storefront and you can manipulate prices, inventory, and promotional pricing rules using the Magento Admin.

You can install sample data either before or after installing the Magento software. When you're done with the sample data, you can either remove it or you can install it fresh as discussed in <a href="{{page.baseurl}}install-gde/install/sample-data-other-cmds.html">Remove sample data modules or update sample data</a>.

<div class="bs-callout bs-callout-warning">
    <p>There is currently no way to uninstall sample data. We recommend you use sample data only to learn about how Magento works. Avoid doing any development in a system in which you installed sample data.</p>
</div>

You can install optional sample data in any of the following ways:

<table>
	<tbody>
		<tr>
			<th>Installation method</th>
			<th>Description</th>
			<th>Required skill level</th>
		</tr>
		
	<tr>
		<td><p>Using Composer</p></td>
		<td><p>Modify Magento's root <code>composer.json</code> to enable sample data modules.</p></td>
		<td><p>Requires Composer knowledge and access to the Magento file system.</p></td>
	</tr>
	<tr>
		<td><p>Cloning repositories</p></td>
		<td><p>Clone the Magento 2 repository and the sample data repository, then link them together.</p></td>
		<td><p>For contributing developers only. Everyone else should use one of the preceding methods.</p></td>
	</tr>
	</tbody>
</table>


<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
*[Contributing developers]: Developers who contribute code to the Magento 2 CE codebase



