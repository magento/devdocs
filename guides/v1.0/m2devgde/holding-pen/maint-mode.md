---
layout: howtom2devgde_chapters
title: Maintenance mode
---
 
<h1 id="m2devgde-maint">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/holding-pen/maint-mode.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-maint-abt">Magento maintenance mode</h2>

<p class="q">Reviewer: Given that the Magento file system is being reworked, all file system paths must be verified.</p>

This section discusses how to put your store offline when you perform maintenance. 

When your store is in *maintenance mode*, all users (except users in your exception list) see an HTTP 503 (Service Unavailable) and customizable web page when they attempt to access the storefront.

<h2 id="m2devgde-maint-enable">Enable or disable maintenance mode</h2>

To enable maintenance mode, create a file named `maintenance.flag` file in the Magento root directory. The file can be empty or it can contain a list of allowed users as discussed in the next section.

To disable maintenance mode, delete or relocate the file.

<h2 id="m2devgde-maint-enable">Create a list of allowed users</h2>

You can optionally enable IP address-based access to the storefront while it's in maintenance mode. Enter a comma-separted list of IP addresses in `maintenance.flag` as follows:

<pre>127.0.0.1,10.249.15.100,192.168.1.1</pre>

<h2 id="m2devgde-maint-503">Customize the 503 (Service Unavailable) page</h2>

The default 503 (Service Unavailable) page displays the following: 

	The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.

To customize the page content, make your changes in the page template, `pub/errors/default/503.phtml`.


