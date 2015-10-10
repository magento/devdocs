---
layout: default
group: config-guide
subgroup: B_Security
title: Secure cron.php
menu_title: Secure cron.php
menu_order: 2
menu_node: 
github_link: config-guide/secy/secy-cron.md
---

#### Contents
*	<a href="#config-cron-secure-over">Overview of securing cron</a>
*	<a href="#config-cron-secure-apache">Secure cron with Apache</a>
*	<a href="#config-cron-secure-nginx">Secure cron with nginx</a>

<h2 id="config-cron-secure-over">Overview of securing cron</h2>
The Magento cron job runs a number of scheduled tasks, including reindexing, generating e-mails, generating newsletters, generating sitemaps, and so on. cron is a vital part of your Magento configuration.

You can run a Magento cron job in the following ways:

*	Using the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-group"><code>magento cron:run</code></a> command
*	Running `<your Magento install dir>/pub/cron.php` either in a web browser or using a crontab

This topic discusses securing `pub/cron.php` to prevent it from being used in a malicious exploit. Any user could potentially use cron to attack your Magento application; securing cron as discussed in this topic helps prevent that.

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
For security reasons, you can locate the password file anywhere except your Magento file system directory. In this example, we show how to store the password file in a new directory.

Enter the following commands as a user with `root` privileges:

	mkdir -p /usr/local/apache/password
	htpasswd -c /usr/local/apache/password/passwords <username>

where `<username>` can be the web server user or another user. In this example, we use the web server user but the choice of user is up to you.

Follow the prompts on your screen to create a password for the user.

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
    		AuthGroupFile <path to optional group file>
    		Require group <name>
		</Files>
4.	Save your changes to `.htaccess` and exit the text editor.
5.	Restart Apache:

	CentOS: `service httpd restart`
	Ubuntu: `service apache2 restart`

<h3 id="config-cron-secure-apache-verify">Step 4: Verify cron is secure</h3>
To verify cron is secure, perform some task that requires scheduling, then run cron from a web browser and verify the action succeeded.

This example shows how to verify cron by verifying the indexers are being reindexed:

1.	Perform some task that causes the indexers to need to be reindexed (for example, add or edit a customer, customer group; product or product attribute; website; or store.)
2.	Verify indexers need to be reindexed.

	As the Magento file system owner, run the following command:

		php <your Magento install dir>/bin/magento indexer:status

	Look for at least one indexer with the status `Reindex required`

3.	Run cron from a browser:

		http[s]://<magento hose name or ip>/pub/cron.php

	For example,

		http://magento.example.com/pub/cron.php

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
		<p>You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves.</p></span>
	</div>

	When prompted, enter the authorized user's name and password. (Some authentication methods might not require a login; consult the Apache documentation for details.)

	If an HTTP 500 (Server Error) response displays in the browser and the following error displays in the Apache `error_log`, look for syntax or accented characters in `pub/.htaccess` (for example, non-UNIX line breaks or smart quotes instead of straight quotes):

		AuthName takes one argument, The authentication realm

5.	As the Magento file system owner, run the following command:

		php <your Magento install dir>/bin/magento indexer:status

	Make sure all indexers have the status `Ready`

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

Restart nginx.

<h3 id="config-cron-secure-nginx-verify">Step 4: Verify cron is secure</h3>
To verify cron is secure, perform some task that requires scheduling, then run cron from a web browser and verify the action succeeded.

This example shows how to verify cron by verifying the indexers are being reindexed:

1.	Perform some task that causes the indexers to need to be reindexed (for example, add or edit a customer, customer group; product or product attribute; website; or store.)
2.	Verify indexers need to be reindexed.

	As the Magento file system owner, run the following command:

		php <your Magento install dir>/bin/magento indexer:status

	Look for at least one indexer with the status `Reindex required`

3.	Run cron from a browser:

		http[s]://<magento hose name or ip>/pub/cron.php

	For example,

		http://magento.example.com/pub/cron.php

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
		<p>You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves.</p></span>
	</div>

	When prompted, enter the authorized user's name and password. (Some authentication methods might not require a login; consult the nginx documentation for details.)

5.	As the Magento file system owner, run the following command:

		php <your Magento install dir>/bin/magento indexer:status

	Make sure all indexers have the status `Ready`