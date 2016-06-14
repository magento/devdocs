---
layout: default
group: install2
subgroup: Getting Started 
title: How do I log in to my Magento server using a terminal, command prompt, or SSH?
menu_title: How do I log in to my Magento server using a terminal, command prompt, or SSH?
menu_node: 
menu_order: 3
version: 2.1
github_link21: install-gde/basics/basics_login.md
---

 
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

Here's what it looks like when you're logged in to a server as the `root` user with Cygwin on Windows.

<img src="{{ site.baseurl }}common/images/install_cygwin.png" alt="Logging in with Cygwin on Windows">

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p><a href="http://en.wikipedia.org/wiki/Secure_Shell" target="_blank">Secure Shell (ssh)</a> is a protocol you can use to securely connect to a remote server without the user name or password being sent over the network.</p></span>
</div>
	
