---
layout: default
group: arch-guide
subgroup: 
title: Security overview
menu_title: Security 
menu_order: 
version: 2.1
github_link21: architecture/security_intro.md
---

<h2 id="security_intro">Security overview</h2>
Magento 2.0 includes the following security enhancements: 



* <b>Enhanced password management</b>. Magento has strengthened the hashing algorithms (SHA-256) used in password management. 


* <b>Improved prevention of cross-site scripting (XSS) attacks by making escaped data the default</b>. The Magento Framework has adopted conventions that regulate the escaping of data in output. These conventions include the ability to escape  output for HTML pages (HTML, JSON, and JavaScript) and email. Where possible, escaping is transparent to client code. See <a href="{{ site.gdeurl21 }}frontend-dev-guide/templates/template-security.html">Security measures against XSS attacks</a> in the Frontend Developer Guide. 

* <b>Restricted permissions for file access</b>. Ability to set discrete file access for production and developer  modes. This change tightens security on generated files, static files, and any files and directories created by Magento (including logs, backups, and reports). See <a href="{{ site.gdeurl21 }}install-gde/install/file-system-perms.html"> Set file system ownership and permissions </a> in the Installation Guide.

	Magento also provides  a CLI command that switches between developer mode and production mode. When you use the command to switch mode, the system also changes file system permissions. In production mode,   directory permissions are set to 750, and file permissions are set to 640. In developer mode, directory permissions are set to 770, and file permissions are set to 660. 
	
	(Permissions need to vary due to user need, of course. For example, the Magento file system owner must own the file system. In contrast, the web server user needs read access only to the file system and write access to some directories (such as `pub/media`). And the web server user should not have write access to the entire Magento file system. For more information, see <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html"> Create the magento file system owner</a>.)

* <b>Improved prevention of clickjacking exploits</b>. Magento safeguards your store from clickjacking attacks by using an X-Frame-Options HTTP request header. For more information, see <a href="{{ site.gdeurl21 }}config-guide/secy/secy-xframe.html"> X-Frame-Options header</a>.

* <b>Use of non-default admin URL</b>. A default admin URL makes it easy to target attacks on specific locations using automated password guessing. To prevent against this type of attack, Magento by default creates a random Admin URI when you install the product. The CLI is provided so that you can  see the password if you forget it. You can also use the CLI change this URI.  Although the use of a non-default admin URL will not secure the site, its use will help prevent large-scale automated attacks. See <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-adminurl.html"> Display or change the Admin URI</a> in Configuration Guide for more information. 




<h2>Related topics</h2>
<a href="{{ site.gdeurl21 }}config-guide/bk-config-guide.html">Configuration Guide</a>



