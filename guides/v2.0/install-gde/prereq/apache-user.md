---
layout: default
group: install_pre
subgroup: Prerequisites
title: Switch to the Apache user
menu_title: Switch to the Apache user
menu_node:
menu_order: 6
github_link: install-gde/prereq/apache-user.md
---

<h2 id="install-update-depend-apache">Switch to the Apache user</h2>

For the installation to work properly, all files written by Composer *must* be owned by the web server user. There are at least two ways to do this:

*	Run Composer as the web server user as discussed in this section
*	Run Composer as another user and change file ownership afterward (more secure)

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>We suggest running Composer in a web server shell in a development environment <em>only</em>. In a more secure environment, you should change ownership to the web server user after you run Composer.</p></span>
</div>

In the discussion that follows, it's assumed that the CentOS web server user is `apache` and the Ubuntu web server user is `www-data`.

<h3 id="install-update-depend-apache-ubuntu">Ubuntu</h3>

To switch to the web server user on Ubuntu:

1.	Enter the following command:

		su www-data

2.	If a password prompt displays but you don't know the user's password, continue with the next step; otherwise, continue with <a href="#install-composer-install">Running Composer to update dependencies</a>.

3.	To enable the `www-data` user's shell and to set a password, enter the following commands in the order shown:

		sudo chsh -s /bin/bash www-data && sudo passwd www-data

4.	Run the following command again and enter the user's password:

		su www-data

5.	Continue with <a href="#install-composer-install">Running Composer to update dependencies</a>.

<h3 id="install-update-depend-apache-centos">CentOS</h3>

To switch to the web server user on CentOS:

1.	Enter the following command:

		su - apache

	If you don't know the user's password or if the following error displays, continue with the next step; otherwise, continue with <a href="#install-composer-install">Running Composer to update dependencies</a>.

		This account is currently not available.

2.	To give `apache` a valid shell account so you can switch to it, enter the following command:

		sudo chsh -s /bin/bash apache && sudo passwd apache

3.	Run the following command again; this time, it should work:

		su - apache