---
layout: default
group: install2
subgroup: Getting Started
title: What is a docroot?
menu_title: What is a docroot?
menu_node: 
menu_order: 200
version: 2.0
github_link: install-gde/basics/basics_docroot.md
redirect_from: /guides/v1.0/install-gde/basics/basics_docroot.html
---

The web server document root (often referred to as the *docroot*) is the web server's root directory; in other words, all pages it delivers are located in this directory and subdirectories of it. The path to your web server's docroot depends on:

*	What operating system you're using
*	The web server brand and version
*	Your hosting provider (if you use one)

This guide can't cover all the possibilities, but we'll help you get started figuring out where your docroot is. It's important; your Magento 2 installation directory is a subdirectory of your web server's docroot so if you don't know where the docroot is, you'll have a lot of trouble doing anything with Magento.

Look at the following sections in the order presented to locate your docroot.

## Contact your hosting provider
If you use one, contact your hosting provider to locate the web server docroot. For example, <a href="http://support.hostgator.com/articles/cpanel/what-is-a-document-root-folder" target="_blank">cPanel</a> typically uses `public_html` as its docroot but don't believe us! Contact your provider directly.

## Contact your network administrator
If you don't use a hosting provider, you're not technical, and you're not that familiar with how things are set up, contact your network administrator. 

## Find the docroot yourself
This section is for technical people who don't mind opening a <a href="{{page.baseurl}}install-gde/basics/basics_login.html">command prompt</a> and finding the docroot themselves.

<div class="bs-callout bs-callout-info" id="info">
  <p>This section assumes you have a simple web server setup with virtual hosts. An Apache <em>virtual host</em> refers to running more than one web site (such as <code>company1.example.com</code> and <code>company2.example.com</code>) on a single machine. A virtual host configuration can override the default docroot. For more information about virtual hosts, see <a href="http://httpd.apache.org/docs/2.2/mod/core.html#virtualhost" target="_blank">Apache 2.2</a> or <a href="http://httpd.apache.org/docs/2.4/mod/core.html#virtualhost" target="_blank">Apache 2.4</a> documentation.</p>
</div> 

To find the docroot:

1.	<a href="{{page.baseurl}}install-gde/basics/basics_os-version.html">Find what operating system you're using</a>.
2.	Find your web server version:

	*	Ubuntu: `apache2 -v`
	*	CentOS: `httpd -v`
	
3.	See one of the following sections:

	*	<a href="#basics-docroot-apache22">Find the docroot for Apache 2.2</a>
	*	<a href="#basics-docroot-apache24">Find the docroot for Apache 2.4</a>

<h2 id="basics-docroot-apache22">Find the docroot for Apache 2.2</h2>
To find the docroot for Apache 2.2:

1.	<a href="{{page.baseurl}}install-gde/basics/basics_login.html">Log in to your Magento server</a>.
2.	Open the following file in a text editor:

	*	Ubuntu:

			/etc/apache2/sites-available/default

	*	CentOS:

			/etc/httpd/httpd.conf

3.	Search the file for `DocumentRoot`. A typical result follows:

	*	Ubuntu:

			DocumentRoot /var/www

	*	CentOS:

			DocumentRoot /var/www/html


<h2 id="basics-docroot-apache24">Find the docroot for Apache 2.4</h2>
This section applies to Apache 2.4 on Ubuntu only. If you installed Apache 2.4 on CentOS, consult the documentation provided with your version of Apache for more information.

To find the docroot for Apache 2.4:

1.	<a href="{{page.baseurl}}install-gde/basics/basics_login.html">Log in to your Magento server</a>.
2.	Open the following file in a text editor:

		/etc/apache2/sites-available/default/000-default.conf

3.	Search the file for `DocumentRoot`. A typical result follows:

		DocumentRoot /var/www/html


