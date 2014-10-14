---
layout: howtom2instgde_chapters
title: Installing and configuring MySQL
---

<h1 id="instgde-prereq-mysql">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/prereq/mysql.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="instgde-prereq-mysql-intro">General guidelines</h2>

Magento _strongly _recommends you observe the following guidelines when you set up your Magento database:

*	Magento uses <a href="http://dev.mysql.com/doc/refman/5.0/en/triggers.html" target="_blank">MySQL database triggers</a> to improve database access during reindexing. Magento does not support any custom triggers in the Magento database because custom triggers can introduce incompatibilities with future Magento versions.
*	Familiarize yourself with <a href="http://dev.mysql.com/doc/mysql-reslimits-excerpt/5.1/en/stored-program-restrictions.html" target="_blank">these potential MySQL trigger limitations</a> before you continue.
*	If you use MySQL database replication, be aware that Magento does _not_ support MySQL statement-based replication. Make sure you use _only_ <a href="http://dev.mysql.com/doc/refman/5.1/en/replication-formats.html" target="_blank">row-based replication</a>.

<h2 id="instgde-prereq-mysql-ubuntu">Installing MySQL on Ubuntu</h2>

Use the guidelines on the <a href="https://help.ubuntu.com/12.04/serverguide/mysql.html" target="_blank">Ubuntu site</a>. 

Configure the database instance as discussed in TBD.

<h2 id="instgde-prereq-mysql-ubuntu">Installing and configuring MySQL on CentOS</h2>

Install and configure MySQL as discussed on the <a href="http://centoshelp.org/servers/database/installing-configuring-mysql-server/" target="_blank">CentOS help site</a>.

Configure the database instance as discussed in the next section.

<h2 id="instgde-prereq-mysql-instance">Configuring the Magento database instance</h2>

This section discusses how to create a new database instance for Magento. Although a new database instance is recommended, you can optionally install Magento into an existing database instance.

To configure a MySQL database instance:

1.	Log in to your database server as any user.
2.	Enter the following command to get to a MySQL command prompt:
	
	`mysql -u root -p`

3.	Enter the root user's password when prompted.
4.	Enter the following commands in the order shown to create a database instance named `magento`:
	<pre>create database magento;
GRANT USAGE ON *.* TO magento@localhost IDENTIFIED BY 'magento';
GRANT ALL ON magento.* TO magento@localhost;</pre>

5.	Enter `exit` to quit the command prompt.

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php.html">Installing PHP 5.4 and required extensions</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install.html">Installing and reinstalling Magento 2</a>