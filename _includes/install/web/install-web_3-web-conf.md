<div markdown="1">

<h2 id="instgde-install-magento-web-step3">Step 3: Web Configuration</h2>

1.	Enter the following information:

	<table>
	<tbody>
		<tr>
			<th>Item</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Your Store Address </td>
		<td><p>Enter the URL, <em>including scheme and trailing slash</em>, by which users access your storefront.</p>
		<p>For example, if your storefront host name is <tt>http://www.example.com</tt>, enter <tt>http://www.example.com/</tt></p></td>
	</tr>
	<tr>
		<td>Magento Admin Address </td>
		<td>Enter the relative URL by which to access the Magento Admin.</td>
	</tr>
	</tbody>
	</table>
	
2.	Optionally click **Advanced Options** and enter the following information:

	<table>
	<tbody>
	<tr>
			<th>Item</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>HTTPS Options</td>
		<td>Select the check box to enable the use of Secure Sockets Layer (SSL) in the indicated URL. Make sure your web server supports SSL before you select either check box.</td>
	</tr>
	<tr>
		<td>Apache Rewrites</td>
		<td>Select this check box to use Apache rewrites. We support this option only if you enabled server rewrites when you installed <a href="{{ site.gdeurl}}install-gde/prereq/apache.html">Apache</a>.</td>
	</tr>
	<tr>
		<td>Encryption Key</td>
		<td><p>Magento uses an encryption key to encrypt <a href="#sens-data">sensitive data</a> in the database.</p>
		<p>Click <strong>I want to use a Magento generated key</strong> to have Magento generate an encryption key for you.</p>
		<p>Click <strong>I want to use my own encryption key</strong> if you already have an encryption key.</p></td>
	</tr>
	<tr>
		<td>Session Save</td>
		<td><p>From the list, click the option corresponding to how to store session data.</p>
			<p>The default is <strong>Files</strong>, which means session data is saved in the <code>var/session</code> subdirectory of the Magento file system.</p>
			<p>You can also choose <strong>Db</strong>, which means session data is stored in the database. </td>
	</tr>
	</tbody>
	</table>
	
12.	Click **Next**.

{% include install/sens-data.md %}