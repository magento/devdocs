<div markdown="1">

Use this section to enable Apache 2.2 rewrites and specify a setting for the <a href="http://httpd.apache.org/docs/current/howto/htaccess.html" target="_blank">distributed configuration file, <code>.htaccess</code></a>

Magento uses server rewrites and <code>.htaccess</code> to provide directory-level instructions for Apache.

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>Failure to enable these settings typically results in no styles displaying on your storefront or Admin.</p></span>
</div>

1.	Open the following file for editing.

	*	Ubuntu: <code>vim /etc/apache2/sites-available/default</code>
	*	CentOS: <code>vim /etc/httpd/conf/httpd.conf</code>

2.	Locate the block that starts with:

	*	Ubuntu 12: `<Directory /var/www/>`
	*	Ubuntu 14 or CentOS: `<Directory /var/www/html>`

3.	Change the value of `AllowOverride` to `<value from Apache site>`.

	An example for Ubuntu 12 follows.

		<Directory /var/www/>
		Options Indexes FollowSymLinks MultiViews
		AllowOverride <value from Apache site>
		Order allow,deny
		Allow from all
		<Directory>

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
		<p>The preceding values for <code>Order</code> might not work in all cases. For more information, see the Apache documentation (<a href="https://httpd.apache.org/docs/2.2/mod/mod_authz_host.html#order" target="_blank">2.2</a>, <a href="https://httpd.apache.org/docs/2.4/mod/mod_authz_host.html#order" target="_blank">2.4</a>).</p></span>
	</div>

4.	Save the file and exit the text editor.

	*	*Ubuntu only*. Configure Apache to use the `mod_rewrite` module.

			cd /etc/apache2/mods-enabled
			ln -s ../mods-available/rewrite.load
5.	If you changed Apache settings, restart Apache.

		service apache2 restart
