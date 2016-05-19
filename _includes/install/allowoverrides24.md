<h3 id="apache-rewrites2.4">Enable rewrites and .htaccess for Apache 2.4</h3>
<p>Use this section to enable Apache 2.4 rewrites and specify a setting for the <a href="http://httpd.apache.org/docs/current/howto/htaccess.html" target="_blank">distributed configuration file, <code>.htaccess</code></a></p>
<p>Magento uses server rewrites and <code>.htaccess</code> to provide directory-level instructions for Apache.</p>
<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>Failure to enable these settings typically results in no styles displaying on your storefront or Admin.</p></span>
</div>
<ol><li>To enable the Apache rewrite module, enter the following command:
<pre>a2enmod rewrite</pre></li>
<li>To enable Magento to use the distributed configuration file <code>.htaccess</code>see the guidelines in the <a href="http://httpd.apache.org/docs/current/mod/mod_rewrite.html" target="_blank">Apache 2.4 documentation</a>.<br>
	Note that in Apache 2.4, the server's default site configuration file is <code>/etc/apache2/sites-available/000-default.conf</code><br>
	For example, you can add the following to the end of <code>000-default.conf</code>:</br>
	<pre>
&lt;Directory "/var/www/html">
	AllowOverride  &lt;value from Apache site>
&lt;/Directory></pre></li>
	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
		<p>In some cases, additional parameters might be required. For more information, see the <a href="https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#order" target="_blank">Apache 2.4 documentation</a>.</p></span>
	</div>

<li>If you changed Apache settings, restart Apache:
	<pre>service apache2 restart</pre></li></ol>

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<ul><li>If you upgraded from an earlier Apache version, first look for <code>&lt;Directory "/var/www/html"></code> or <code>&lt;Directory "/var/www"></code> in <code>000-default.conf</code>.</li>
	<li>You must change the value of <code>AllowOverride</code> in the directive for the directory to which you expect to install the Magento software. For example, to install in the web server docroot, edit the directive in <code>&lt;Directory /var/www></code>.</li></ul></span>
</div>