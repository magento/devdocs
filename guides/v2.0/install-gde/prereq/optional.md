---
layout: default
group: install_pre
subgroup: Prerequisites
title: Optional software
menu_title: Optional software
menu_order: 400
version: 2.0
github_link: install-gde/prereq/optional.md
redirect_from: /guides/v1.0/install-gde/prereq/optional.html
---

#### Contents

*	<a href="#install-optional-intro">Magento optional software</a>
*	<a href="#install-optional-ntp">Installing and Configuring Network Time Protocol (NTP)</a>
*	<a href="#install-optional-phpinfo">Create phpinfo.php</a>
*	<a href="#install-optional-phpmyadmin">Install phpmyadmin</a>

<h2 id="install-optional-intro">Magento optional software</h2>
We strongly recommend you install NTP because otherwise, cron-related tasks might not perform properly. (Server dates could be in the past or future, for example.)

The other optional utilities discussed in this topic might assist you with your installation; however, they are not required to install or use Magento.

<h2 id="install-optional-ntp">Installing and Configuring Network Time Protocol (NTP)</h2>
<a href="http://www.ntp.org" target="_blank">NTP</a> enables servers to synchronize their system clocks using <a href="http://www.pool.ntp.org/en" target="_blank">globally available pool servers</a>. Magento recommends you use NTP servers you trust, whether they are dedicated hardware solutions your internal network or external, public servers.

If you are deploying Magento on multiple hosts, NTP is a simple way to guarantee their clocks are all synchronized, no matter what time zone the servers are in. Also, cron-related tasks (such as indexing and transactional e-mails) depend on the server clock being accurate.

See one of the following sections:

*	<a href="#install-optional-ntp-ubuntu">Install and configure NTP on Ubuntu</a>
*	<a href="#install-optional-ntp-centos">Install and configure NTP on CentOS</a>
*	<a href="#install-optional-ntp-servers">Use NTP pool servers</a>

<h3 id="install-optional-ntp-ubuntu">Install and configure NTP on Ubuntu</h3>

Enter the following command to install NTP:

	apt-get install ntp

Continue with <a href="#install-optional-ntp-servers">Use NTP pool servers</a>.

<h3 id="install-optional-ntp-centos">Install and configure NTP on CentOS</h3>

To install and configure NTP:

1.	Enter the following command to find the appropriate NTP software:

	<pre>yum search ntp</pre>

2.	Select a package to install. For example, <code>ntp.x86_64</code>.

2.	Install the package.

	<pre>yum -y install ntp.x86_64</pre>

3.	Enter the following command so that NTP starts when the server starts.

	<pre>chkconfig ntpd on</pre>

3.	Continue with the next section.

<h3 id="install-optional-ntp-servers">Use NTP pool servers</h3>
Selecting pool servers is up to you. If you use NTP pool servers, ntp.org recommends you use <a href="http://www.pool.ntp.org/en" target="_blank">pool servers</a> that are close to your servers' time zone as discussed on the <a href="http://www.pool.ntp.org/en/use.html" target="_blank">NTP pool project help page</a>. If you have a private NTP server that is available to all hosts in your Magento deployment, you can use that server instead.

1.	Open <code>/etc/ntp.conf</code> in a text editor.

2.	Look for lines similar to the following:

	<pre>server 0.centos.pool.ntp.org
	server 1.centos.pool.ntp.org
	server 2.centos.pool.ntp.org</pre>

3.	Replace those lines or add additional lines that specify your NTP pool server or other NTP servers. It's a good idea to specify more than one.

4.	An example of using three United States-based NTP servers follows:

	<pre>server 0.us.pool.ntp.org
	server 1.us.pool.ntp.org
	server 2.us.pool.ntp.org</pre>

5.	Save your changes to <code>/etc/ntp.conf</code> and exit the text editor.

4.	Restart the service.

	Ubuntu: <code>service ntp restart</code>

	CentOS: <code>service ntpd restart</code>

4.	Enter <code>date</code> to check the server's date.

	If the date is incorrect, make sure the NTP client port (typically, UDP 123) is open in your firewall.

	Try the <code>ntpdate <em>[pool server host name]</em></code> command. If it fails, search for the error it returns.

	If all else fails, try rebooting the server.

<h2 id="install-optional-phpinfo">Create phpinfo.php</h2>
<a href="http://php.net/manual/en/function.phpinfo.php" target="_blank"><code>phpinfo.php</code></a> displays a large amount of information about PHP and its extensions. Add the following code anywhere in your web server's docroot:
<pre>&lt;?php

// Show all information, defaults to INFO_ALL
phpinfo();</pre>

For more information, see the <a href="http://php.net/manual/en/function.phpinfo.php" target="_blank">phpinfo manual page</a>.

To view the results, enter the following URL in your browser's location or address field:

	http://<web server host or IP>/phpinfo.php

If a 404 (Not Found) error displays, check the following:

*	Start the web server if necessary.
*	Make sure your firewall allows traffic on port 80.

	<a href="https://help.ubuntu.com/community/UFW" target="_blank">Help for Ubuntu</a>

	<a href="http://wiki.centos.org/HowTos/Network/IPTables" target="_blank">Help for CentOS</a>

<h2 id="install-optional-phpmyadmin">Install phpmyadmin</h2>
`phpmyadmin` is an easy-to-use, free database administration utility. You can use it to check and manipulate the contents of your database. You must log in to <code>phpmyadmin</code> as the MySQL database administrative user.

For more information about `phpmyadmin`, see the <a href="http://www.phpmyadmin.net/home_page/index.php" target="_blank">phpmyadmin home page</a>.

For more detailed information about installation, see the <a href="http://docs.phpmyadmin.net/en/latest/setup.html#quick-install" target="_blank">phpmyadmin installation documentation</a>.

<h2 id="install-optional-phpmyadmin-ubuntu">Install phpmyadmin on Ubuntu</h2>
To install phpmyadmin on Ubuntu:

1.	Use the following command:

		apt-get install phpmyadmin

2.	Follow the prompts on your screen to complete the installation.

3.	To use phpmyadmin, enter the following URL in your browser's address or location field:

		http://<web server host or IP>/phpmyadmin

4.	When prompted, log in using your MySQL database <code>root</code> or administrative user's user name and password.

<h2 id="install-optional-phpmyadmin-centos">Install phpmyadmin on CentOS</h2>
To install phpmyadmin on CentOS:

1.	Download the epel RPM for the version of CentOS you're using. A sample follows.

		cd /tmp
		wget http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
		rpm -ivh epel-release-6-8.noarch.rpm

2.	Install `phpmyadmin` as follows:

		yum -y install phpmyadmin

3.	Authorize access to phpmyadmin from your machine's IP address.

	Open the following file for editing:

		vim /etc/httpd/conf.d/phpMyAdmin.conf

3.	Replace the following IP address with your IP address

		Require ip localhost

	For example,

		Require ip 192.51.100.101

4.	Replace the following IP with your IP address:

		Allow from localhost

	For example,

		Allow from 192.51.100.101

5.	Save your changes to `/etc/httpd/conf.d/phpMyAdmin.conf` and exit the text editor.

6.	Restart Apache.

		service httpd Restart

7.	To use phpmyadmin, enter the following command in your browser's address or location field:

		http://<web server host or IP>/phpmyadmin

8.	When prompted, log in using your MySQL database <code>root</code> or administrative user's user name and password.


#### Related topics:

*	<a href="{{page.baseurl}}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{page.baseurl}}install-gde/prereq/php-ubuntu.html">PHP 5.5, 5.6, or 7.0&mdash;Ubuntu</a>
*	<a href="{{page.baseurl}}install-gde/prereq/php-centos.html">PHP 5.5, 5.6, or 7.0&mdash;CentOS</a>
*	<a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/security.html">Configuring security options</a>
*	[How to get the Magento software]({{ page.baseurl }}install-gde/continue.html)
