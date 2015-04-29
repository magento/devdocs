

<h2 id="mode-production-view">Static view files deployment tool</h2>
The static view files deployment tool enables you to write static files to the Magento docroot when the Magento software is set for production mode.

Because static view files are not deployed on the fly in production mode, you must write static view files to the Magento docroot manually; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Static view files must be owned by the web server user; otherwise, Magento might have issues accessing the files. One way to do this in a development system is to run the tool as the web server user. For more information, see <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.</p></span>
</div>

See one of the following sections for more information:

*	<a href="#mode-production-view-run">Running the static view files deployment tool</a>
*	<a href="#view-file-trouble">Troubleshooting the static view files deployment tool</a>

<h3 id="mode-production-view-run">Running the static view files deployment tool</h3>

To deploy static view files:

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.

	In a more secure environment, you should make the web server user the owner of the files after running the tool.
2.	Delete the contents of `<your Magento install dir>/pub/static`.
3.	Run the static view files deployment tool from the `<your Magento install dir>/dev/tools/Magento/Tools/View` directory.
4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files.
	
	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>If you enable static view file merging in the Magento Admin, the <code>pub/static</code> directory system must be writable.</p></span>
	</div>

Following is the command syntax:

	php -f deploy.php -- [--langs=[language codes]] [--verbose=0|1] [--dry-run] [--help]

The following table discusses the meanings of the options:

<table>
	<col width="15%">
  <col width="555%">
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>--langs</td>
		<td><p>Comma-separated list of <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php" target="_blank">ISO-636</a> language codes for which to output static view files. <em>Do not</em> separate locales with a space. (Default is <code>en_US</code>.)</p>
		<p>You can find the list by running <code>php -f &lt;your Magento install dir>/setup/index.php help languages</code>.</p></td>
	</tr>
	<tr>
		<td>--verbose</td>
		<td><p>Omit to display errors only. Use <code>0</code> to suppress all output. Use <code>1</code> to display verbose output.</p></td>
	</tr>
	<tr>
		<td>--dry-run</td>
		<td><p>Include to view the files output by the tool without outputting anything.</p></td>
	</tr>
	<tr>
		<td>--help</td>
		<td><p>Display command help.</p></td>
	</tr>
</tbody>
</table>

For more information about specifying a mode, see <a href="#mode-specify">Specify a mode</a>.

<h3 id="view-file-trouble">Troubleshooting the static view files deployment tool</h3>
<a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Install the Magento software first</a>; otherwise, you cannot run the static view files deployment tool.

**Symptom**: The following error is displayed when you run the static view files deployment tool:

ERROR: You need to install the Magento application before running this utility.

**Solution**:

Use the following steps:

1.	Install the Magento software in any of the following ways:

	*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Setup wizard</a>

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.

	In a more secure environment, you should make the web server user the owner of the files after running the tool.
2.	Delete the contents of `<your Magento install dir>/pub/static` directory.
3.	Run the static view files deployment tool from the `<your Magento install dir>/dev/tools/Magento/Tools/View` directory.
4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files.
	
	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>If you enable static view file merging in the Magento Admin, the <code>pub/static</code> directory system must be writable.</p></span>
	</div>
