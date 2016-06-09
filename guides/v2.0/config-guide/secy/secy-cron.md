---
layout: default
group: config-guide
subgroup: 02_Security
title: Secure cron.php to run in a browser
menu_title: Secure cron.php to run in a browser
menu_order: 2
menu_node: 
version: 2.0
github_link: config-guide/secy/secy-cron.md
---

#### Contents
*	<a href="#config-cron-secure-over">Overview of securing cron</a>
*	<a href="#config-cron-secure-apache">Secure cron with Apache</a>
*	<a href="#config-cron-secure-nginx">Secure cron with nginx</a>
*	<a href="#config-cron-secure-apache-verify">Verify cron is secure</a>
*	<a href="#config-cli-cron-browser">Run cron from a web browser</a>

<h2 id="config-cron-secure-over">Overview of securing cron</h2>
The Magento cron job runs a number of scheduled tasks, including reindexing, generating e-mails, generating newsletters, generating sitemaps, and so on. cron is a vital part of your Magento configuration.

You can run a Magento cron job in the following ways:

*	Using the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-group"><code>magento cron:run</code></a> command, either from the command line or in a crontab
*	Running `<your Magento install dir>/pub/cron.php?[group=<name>]` in a web browser

This topic discusses securing `pub/cron.php` to prevent it from being used in a malicious exploit. If cron is unsecured, any user could potentially run cron to attack your Magento application.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You do not need to do anything if you use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-group"><code>magento cron:run</code></a> command to run cron. This command uses a different process that is already secure.</p></span>
</div>

The following sections discuss an example of securing cron using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication. You can optionally configure other types of authentication as well; we provide references for that information.

<h2 id="config-cron-secure-apache">Secure cron with Apache</h2>
This section discusses how to secure cron using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication with Apache. For more options, consult one of the following resources:

*	<a href="http://httpd.apache.org/docs/2.2/howto/auth.html" target="_blank">Apache 2.2 authentication and authorization tutorial</a>
*	<a href="http://httpd.apache.org/docs/2.4/howto/auth.html" target="_blank">Apache 2.4 authentication and authorization tutorial</a>

The instructions that follow are based on Apache 2.2 with CentOS 6:

*	<a href="#config-cron-secure-apache-pwd">Step 1: Create a password file</a>
*	<a href="#config-cron-secure-apache-group">Step 2: Optionally add users to create an authorized cron group</a>
*	<a href="#config-cron-secure-apache-htaccess">Step 3: Secure cron in <code>.htaccess</code></a>
*	<a href="#config-cron-secure-apache-verify">Step 4: Verify cron is secure</a>

<h3 id="config-cron-secure-apache-pwd">Step 1: Create a password file</h3>
For security reasons, you can locate the password file anywhere except your web server docroot. In this example, we show how to store the password file in a new directory.

Enter the following commands as a user with `root` privileges:

	mkdir -p /usr/local/apache/password
	htpasswd -c /usr/local/apache/password/passwords <username>

where `<username>` can be the web server user or another user. In this example, we use the web server user but the choice of user is up to you.

Follow the prompts on your screen to create a password for the user.

To add another user to your password file, enter the following command as a user with `root` privileges:

	htpasswd /usr/local/apache/password/passwords <username>

<h3 id="config-cron-secure-apache-group">Step 2: Optionally add users to create an authorized cron group</h3>
You can optionally enable more than one user to run cron by adding these users to your password file and to a group file you'll configure in the next section.

To add another user to your password file, enter the following command as a user with `root` privileges:

	htpasswd /usr/local/apache/password/passwords <username>

To create an authorized group, create a group file anywhere outside the web server docroot. The group file specifies the name of the group and the users in the group. In this example, the group name is `MagentoCronGroup`.

	vim /usr/local/apache/password/group

Contents of the file:

	MagentoCronGroup: <username1> ... <usernameN>

<h3 id="config-cron-secure-apache-htaccess">Step 3: Secure cron in <code>.htaccess</code></h3>
To add security for cron in Magento's `.htaccess`:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Open `<your Magento install dir>/pub/.htaccess` in a text editor.

	(Because `cron.php` is located in the `pub` directory, edit this `.htaccess` only.)

3.	*Cron access for one or more users.* Replace the existing `<Files cron.php>` directive with the following:

		<Files cron.php>
    		AuthType Basic
    		AuthName "Cron Authentication"
    		AuthUserFile /usr/local/apache/password/passwords
    		Require valid-user
		</Files>
3.	*Cron access for a group.* Replace the existing `<Files cron.php>` directive with the following:

		<Files cron.php>
    		AuthType Basic
    		AuthName "Cron Authentication"
    		AuthUserFile /usr/local/apache/password/passwords
    		AuthGroupFile <path to optional group file>
    		Require group <name>
		</Files>
4.	Save your changes to `.htaccess` and exit the text editor.
6.	Continue with <a href="#config-cron-secure-apache-verify">Verify cron is secure</a>.

<h2 id="config-cron-secure-nginx">Secure cron with nginx</h2>
This section discusses how to secure cron using the nginx web server. You must perform the following tasks:

1.	Set up an encrypted password file for nginx
2.	Modify your nginx configuration to reference the password file when accessing `pub/cron.php`

<h3 id="config-cron-secure-nginx-password">Step 1: Set up an encrypted password file for nginx</h3>
Consult a resource like the following:

*	<a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-nginx-on-ubuntu-14-04" target="_blank">How To Set Up Password Authentication with Nginx on Ubuntu 14.04 (digitalocean)</a>
*	<a href="https://www.howtoforge.com/basic-http-authentication-with-nginx" target="_blank">Basic HTTP Authentication With Nginx (howtoforge)</a>

<h3 id="config-cron-secure-nginx-config">Step 2: Modify the nginx configuration</h3>
Add the following to your `nginx.conf`:

	location cron\.php {
		auth_basic "Cron Authentication";
		auth_basic_user_file <path to password file>;
	} 

Restart nginx and continue with the next section.

<h2 id="config-cron-secure-apache-verify">Verify cron is secure</h2>
This section discusses how to verify that `pub/cron.php` is working by verifying that it's creating rows in the `cron_schedule` database table. This section shows how to use SQL commands but you can also use a tool like <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpmyadmin">phpmyadmin</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The <code>default</code> cron you're running in this example runs according to the schedule defined in <code>crontab.xml</code>. Some cron job runs only once a day. The first time you run cron from the browser, the <code>cron_schedule</code> table is updated but subsequent <code>pub/cron.php</code> requests run at the configured schedule.</p></span>
</div>

To verify cron:

1.	Log in to your Magento database as either the Magento database user or as `root`. 

	For example,

		mysql -u magento -p

2.	Use the Magento database:

		use <magento database name>;

	For example,

		use magento;
1.	Delete all rows from the `cron_schedule` database table:
	
		TRUNCATE TABLE cron_schedule 
3.	Run cron from a browser:

		http[s]://<magento hose name or ip>/pub/cron.php?group=default

	For example,

		http://magento.example.com/pub/cron.php?group=default

	When prompted, enter an authorized user's name and password. The following figure shows an example.

	<img src="{{ site.baseurl }}common/images/cron_auth.png" alt="Authorizing cron using HTTP Basic">
5.	Verify rows were added to the table:

		SELECT * from cron_schedule

	Verify that some rows are returned. If so, you're done!

<h2 id="config-cli-cron-browser">Run cron from a web browser</h2>
You can run cron anytime using a web browser (for example, during development).

<div class="bs-callout bs-callout-warning">
    <p>Do <em>not</em> run cron in a browser without securing it as discussed earlier in this topic.</p>
</div>

Before you run cron in the browser, remove the restriction from `.htaccess` as follows:

1.	Log in to your Magento server as a user with permissions to write to the Magento file system.
2.	Open any of the following in a text editor (depending on your entry point to Magento):

		<your Magento install dir>/pub/.htaccess
		<your Magento install dir>/.htaccess

3.	Delete or comment out the following:

		## Deny access to cron.php
    	<Files cron.php>
        	order allow,deny
        	deny from all
    	</Files>

    For example,

    	## Deny access  to cron.php
    	#<Files cron.php>
        #	order allow,deny
        #	deny from all
    	#</Files>

3.	Save your changes and exit the text editor.

You can then run cron in a web browser as follows:

	<your Magento host name or IP>/<Magento root>/pub/cron.php[?group=<group name>]

where

*	`<your Magento host name or IP>` is the host name or IP address of your Magento installation
*	`<Magento root>` is the web server docroot-relative directory to which you installed the Magento software

	The exact URL you use to run the Magento application depends on how you configured your web server and virtual host.
*	`<group name>` is any valid cron group name (optional)

For example,

	http://magento.example.com/magento2/pub/cron.php?group=index

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves.</p></span>
</div>

<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-group-conf">More information about cron groups</a>

