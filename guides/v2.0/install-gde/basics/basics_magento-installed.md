---
layout: default
group: install2
subgroup: Getting Started
title: Is the Magento software installed already?
menu_title: Is the Magento software installed already?
menu_node: 
menu_order: 1
github_link: install-gde/basics/basics_magento-installed.md
redirect_from: /guides/v1.0/install-gde/basics/basics_magento-installed.html
---

To determine if the Magento software is installed already, you can access the Magento Admin (administration console) or storefront using a web browser.

**Prerequisite**: You must know the Magento server's host name or IP address, and the URL to access the Magento installation. If you're not sure, find the information from your system administrator or hosting provider.

Then open a web browser and go to the URL you were provided. Some examples follow:

	http://www.example.com/magento2/admin
	https://www.example.com/admin
	http://www.example.com
	
If a 404 (Not Found) error displays, Magento probably isn't installed. You should confirm that with your system administrator or hosting provider.

If Magento is installed, you should see something like the following after you log in:

Magento Admin:

<p><img src="{{ site.baseurl }}common/images/install_success_admin.png" alt="Magento Admin which verifies a successful installation"></p>


Magento storefront:

<p><img src="{{ site.baseurl }}common/images/install-success_store.png" alt="Magento storefront which verifies a successful installation"></p>


<h2 id="instgde-basics-terminal">How do I log in to my Magento server?</h2>
To complete almost all of the tasks in this guide, you must remotely log in to your Magento server. 

**Prerequisites**: You must have:

*	A terminal application

	Windows and Mac OS typically use different terminal applications. 
	
	*	Windows: A partial list: <a href="http://www.putty.org/" target="_blank">putty</a>, <a href="https://www.cygwin.com/" target="_blank">Cygwin</a>, <a href="http://apps.microsoft.com/windows/en-us/app/terminal-rt/d62a6b2a-bc53-4078-b688-3223bf310266" target="_blank">Terminal RT</a>
	*	Mac OS: You can use the built-in <a href="http://en.wikipedia.org/wiki/Terminal_(OS_X)" target="_blank">Terminal</a> application or any of the following: <a href="http://iterm2.com/" target="_blank">iTerm</a>, or <a href="http://computers.tutsplus.com/tutorials/beyond-terminal-4-os-x-terminal-alternatives--mac-56217" target="_blank">these</a>
	
*	A user name and password for the Magento server
	
	On a hosted system, this is likely a user who doesn't have administrative rights to the server; that's OK as long as the user can install system software, stop and start services like the web server, and so on. 
	
	If you have your own server, you or your system administrator can usually log in as the <a href="http://www.linfo.org/root.html" target="_blank">root</a> user, which on Linux, is the user with full administrative rights over the entire server.

To use a terminal application to remotely access the Magento server:

1.	Set up the terminal application according to its provided documentation.
2.	Start the terminal application.
3.	When prompted, enter your Magento server's host name or IP address.
4.	Log in to the server with the user name or password you were provided.

Here's what it looks like to log in to a server as the `root` user using Cygwin on Windows.

<p><img src="{{ site.baseurl }}common/images/install_cygwin.png" alt="Logging in using Cygwin on Windows"></p>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p><a href="http://en.wikipedia.org/wiki/Secure_Shell" target="_blank">Secure Shell (ssh)</a> is a protocol you can use to securely connect to a remote server without the user name or password being sent over the network.</p></span>
</div>
	
<h2 id="instgde-basics-software">What is the software that Magento needs to run?</h2>
The full list of software is listed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">System Requirements</a> but here are the essentials:

*	Web server to display web pages. Currently, we support <a href="http://en.wikipedia.org/wiki/Apache_HTTP_Server" target="_blank">Apache</a> but other web servers will be added in the near future.

*	Database management system for long-term data storage and retrieval. We support <a href="http://dev.mysql.com/doc/refman/4.1/en/what-is-mysql.html" target="_blank">MySQL</a>.

*	PHP, an acronym for PHP: Hypertext Preprocessor, an open source scripting language suited for web development because it can be embedded in HTML (the protocol of the web)

	For more information, see the <a href="http://php.net/manual/en/intro-whatis.php" target="_blank">PHP manual</a> or the <a href="http://en.wikipedia.org/wiki/PHP" target="_blank">Wikipedia page</a>.