---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Security overview
menu_title: Security 
menu_order: 
version: 2.0
github_link: architecture/security_intro.md
---

<h2 id="security_intro">Security overview</h2>
Magento 2.0 includes the following security enhancements: 



* <b>Enhanced password management</b>. Magento has strengthened the hashing algorithms (SHA-256) used in password management. 


* <b>Improved prevention of cross-site scripting (XSS) attacks by making escaped data the default</b>. The Magento Framework has adopted conventions that regulate the escaping of data in output. These conventions include the ability to escape  output for HTML pages (HTML, JSON, and JavaScript) and email. Where possible, escaping is transparent to client code. See <a href="{{page.baseurl}}frontend-dev-guide/templates/template-security.html">Security measures against XSS attacks</a> in the Frontend Developer Guide. 

*	<b>More flexible file system ownership and permissions</b>. Starting in version 2.0.6, Magento no longer explicitly sets file system permissions. Instead, we recommend that certain files and directories be writable in a development environment and read-only in a production environment.

	To provide you with a simple way to restrict access to the file system in production, we provide the flexibility for you to further restrict those permissions using a [umask](http://www.cyberciti.biz/tips/understanding-linux-unix-umask-value-usage.html){:target="_blank"}.
	
	For an overview, see [Overview of ownership and permissions]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html).

	For details about ownership and permissions in development and production, see [Magento ownership and permissions in development and production]({{page.baseurl}}).

* <b>Improved prevention of clickjacking exploits</b>. Magento safeguards your store from clickjacking attacks by using an X-Frame-Options HTTP request header. For more information, see <a href="{{page.baseurl}}config-guide/secy/secy-xframe.html"> X-Frame-Options header</a>.

* <b>Use of non-default Magento Admin URL</b>. A simple Magento Admin URL (like `admin` or `backend`) makes it easy to target attacks on specific locations using automated password guessing. To prevent against this type of attack, Magento by default creates a random Admin URI when you install the product. The CLI is provided so that you can  see the password if you forget it. You can also use the CLI to change this URI.  Although the use of a non-default admin URL will not secure the site, its use will help prevent large-scale automated attacks. See <a href="{{page.baseurl}}install-gde/install/cli/install-cli-adminurl.html">Display or change the Admin URI</a> in Configuration Guide for more information. 




<h2>Related topics</h2>
<a href="{{page.baseurl}}config-guide/bk-config-guide.html">Configuration Guide</a>



