---
group: installation-guide
subgroup: Getting Started
title: Logging in to a Magento server
functional_areas:
  - Install
  - System
  - Setup
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core -->

To complete almost all of the tasks in this guide, you must remotely log in to your Magento server.

**Prerequisites:** You must have:

*  A terminal application

   Windows and Mac OS typically use different terminal applications.

   *  Windows: A partial list: [putty][], [Cygwin][]
   *  Mac OS: You can use the built-in [Terminal][] application or any of the following: [iTerm][], or [these][]
   *  Linux: Depending on your [Desktop Environment][] you can use CLI application your deskop environment is providing like [Konsole (KDE)][], [GNOME Shell][]  or [Xfce Terminal][]. You can also install and use deskop environment independent terminal application like [Xterm][].

*  A username and password for the Magento server

   On a hosted system, this is likely a user who does not have administrative rights to the server; that is OK as long as the user can install system software, stop and start services like the web server, and so on.

   If you have your own server, you or your system administrator can usually log in as the [root][] user, which on Linux, is the user with full administrative rights over the entire server.

To use a terminal application to remotely access the Magento server:

1. Set up the terminal application according to its provided documentation.
1. Start the terminal application.
1. When prompted, enter your Magento server's hostname or IP address.
1. Log in to the server with the username or password you were provided.

Here is what it looks like when you are logged in to a server as the `root` user with Cygwin on Windows.

![Logging in with Cygwin on Windows]({{ site.baseurl }}/common/images/install_cygwin.png)

 {:.bs-callout-info}
[Secure Shell (ssh)][] is a protocol you can use to securely connect to a remote server without the username or password being sent over the network.

<!-- Link definitions -->
[putty]: http://www.putty.org/
[Cygwin]: https://www.cygwin.com/
[Terminal]: http://en.wikipedia.org/wiki/Terminal_(OS_X)
[iTerm]: http://iterm2.com/
[these]: http://computers.tutsplus.com/tutorials/beyond-terminal-4-os-x-terminal-alternatives--mac-56217
[Desktop Environment]: https://en.wikipedia.org/wiki/Desktop_environment
[Konsole (KDE)]: https://en.wikipedia.org/wiki/Konsole
[GNOME Shell]: https://en.wikipedia.org/wiki/GNOME_Shell
[Xfce Terminal]: https://en.wikipedia.org/wiki/Xfce#Xfce_Terminal
[Xterm]: https://en.wikipedia.org/wiki/Xterm
[root]: http://www.linfo.org/root.html
[Secure Shell (ssh)]: http://en.wikipedia.org/wiki/Secure_Shell
