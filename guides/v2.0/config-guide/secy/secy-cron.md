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

*	Using the TBD command
*	Running `<your Magento install dir>/pub/cron.php` either in a web browser or using a crontab

This topic discusses securing `pub/cron.php` to prevent it from being used in a malicious exploit. Any user could potentially use cron to attack your Magento application; securing cron as discussed in this topic helps prevent that.

@@@ NOTE ABOUT COMMAND LINE

The following sections discuss an example of securing cron using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication. You can optionally configure other types of authentication as well; we provide references for that information.

<h2 id="config-cron-secure-apache">Secure cron with Apache</h2>
This section discusses how to secure cron using <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication with Apache. For more options, consult one of the following resources:

*	<a href="http://httpd.apache.org/docs/2.2/howto/auth.html" target="_blank">Apache 2.2 authentication and authorization tutorial</a>
*	<a href="http://httpd.apache.org/docs/2.4/howto/auth.html" target="_blank">Apache 2.4 authentication and authorization tutorial</a>

The instructions that follow are based on Apache 2.2 with CentOS 6:

*	TBD
*	TBD
*	TBD

<h3 id="config-cron-secure-apache-pwd">Step 1: Create a password file</h3>
For security reasons, you can locate the password file anywhere except your Magento file system directory. In this example, we show how to store the password file in a new directory.

Enter the following commands as a user with `root` privileges:

	mkdir -p /usr/local/apache/password
	htpasswd -c /usr/local/apache/password/passwords <username>

where `<username>` can be the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a> or another user. In this example, we show how to create the password for the Magento file system owner because cron should run as that user. However, the choice of users is up to you. (Later, we show how to add more users to a group that can run cron.)

Follow the prompts on your screen to create a password for the user.

<h3 id="config-cron-secure-apache-group">Step 2: Optionally add users to create an authorized cron group</h3>
You can optionally enable more than one user to run cron by adding these users to your password file and to a group file you'll configure in the next section.

To add users to your password file, enter the following command as a user with `root` privileges:

	htpasswd /usr/local/apache/password/passwords <username1> ... <usernameN>

Create a group file anywhere outside the web server docroot. The group file specifies the name of the group and the users in the group. In this example, the group name is `MagentoCronGroup`.

	vim /usr/local/apache/password/group

Contents of the file:

	MagentoCronGroup: <username1> ... <usernameN>

<h3 id="config-cron-secure-apache-htaccess">Step 3: Secure cron in `.htaccess`</h3>
To add security for cron in Magento's `.htaccess`:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Open `<your Magento install dir>/pub/.htaccess` in a text editor.

	(Because `cron.php` is located in the `pub` directory, edit this `.htaccess` only.)

3.	Replace the existing `<Files cron.php>` with the following:

		<Files cron.php>
    		AuthType Basic
    		AuthName “Cron Authentication”
    		AuthUserFile /usr/local/apache/password/passwords
    		AuthGroupFile <path to optional group file>
    		Require valid-user
		</Files>
4.	Save your changes to `.htaccess` and exit the text editor.
5.	Restart Apache:

	CentOS: `service httpd restart`
	Ubuntu: `service apache2 restart`

<h2 id="config-cron-secure-nginx">Secure cron with nginx</h2>
TBD