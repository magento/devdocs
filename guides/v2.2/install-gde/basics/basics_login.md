---
group: installation-guide
subgroup: Getting Started
title: How do I log in to my Magento server using a terminal, command prompt, or SSH?
menu_title: How do I log in to my Magento server using a terminal, command prompt, or SSH?
menu_node:
menu_order: 105
level3_menu_node: level3child
level3_subgroup: basics
functional_areas:
  - Install
  - System
  - Setup
---

<!-- This topic is referred to from Magento 2 code! Don't change the [URL](https://glossary.magento.com/url) without informing engineering! -->
<!-- Referring file: README.md owned by core -->

To complete almost all of the tasks in this guide, you must remotely log in to your Magento server.

**Prerequisites**: You must have:

*	A terminal application

	Windows and Mac OS typically use different terminal applications.

	*	Windows: A partial list: [putty](http://www.putty.org/){:target="_blank"}, [Cygwin](https://www.cygwin.com/){:target="_blank"}

	*	Mac OS: You can use the built-in [Terminal](http://en.wikipedia.org/wiki/Terminal_(OS_X)){:target="_blank"} application or any of the following: [iTerm](http://iterm2.com/){:target="_blank"}, or [these](http://computers.tutsplus.com/tutorials/beyond-terminal-4-os-x-terminal-alternatives--mac-56217){:target="_blank"}

*	A username and password for the Magento server

	On a hosted system, this is likely a user who doesn't have administrative rights to the server; that's OK as long as the user can install system software, stop and start services like the web server, and so on.

	If you have your own server, you or your system administrator can usually log in as the [root](http://www.linfo.org/root.html){:target="_blank"} user, which on Linux, is the user with full administrative rights over the entire server.

To use a terminal application to remotely access the Magento server:

1.	Set up the terminal application according to its provided documentation.
2.	Start the terminal application.
3.	When prompted, enter your Magento server's hostname or IP address.
4.	Log in to the server with the username or password you were provided.

Here's what it looks like when you're logged in to a server as the `root` user with Cygwin on Windows.

![Logging in with Cygwin on Windows]({{ site.baseurl }}/common/images/install_cygwin.png)

{:.bs-callout .bs-callout-info}
[Secure Shell (ssh)](http://en.wikipedia.org/wiki/Secure_Shell){:target="_blank"} is a protocol you can use to securely connect to a remote server without the username or password being sent over the network.

