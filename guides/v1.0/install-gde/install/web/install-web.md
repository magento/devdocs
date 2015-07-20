---
layout: default 
group: install_wiz 
subgroup: A_Introduction
title: Installing the Magento software using the Setup Wizard
menu_title: Installing the Magento software using the Setup Wizard
menu_node: parent
menu_order: 1
github_link: install-gde/install/web/web/install-web.md
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core and setup\view\magento\setup\landing.phtml owned by Ogres -->


<h4>Contents</h4>   

See one of the following sections:

*	<a href="#instgde-install-over">What is the Magento Setup Wizard?</a>
*	<a href="#instgde-install-prereq">Before you start your installation</a>
*	<a href="#instgde-install-magento-web">Running the Setup Wizard</a>

This section discusses how to install the Magento software using a web-based wizard interface. To install Magento from the command line, see <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html">Install Magento software using the command line</a>.

<h2 id="instgde-install-over">What is the Magento Setup Wizard?</h2>
TODO, talk about everything the Setup Wizard does. Point back to CLI installation.

<h2 id="instgde-install-prereq">Before you start your installation</h2>
Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento System Requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prerequisites</a>.

<h3 id="instgde-install-web-enable-mod">Enabling and disabling modules</h3>
The Setup Wizard allows you to enable or disable modules before you install the Magento software. Before you do so, make sure you understand the following.

{% include install/enable-disable-modules.html %}

<h2 id="instgde-install-magento-web">Running the Setup Wizard</h2>
The Setup Wizard is a multi-page wizard that enables you to go back and forward one page at a time. You *cannot* skip pages, and you must enter all required information on every page before you can proceed to the next page.

In the event of errors, you can run the installer again or you can return to a previous page to fix errors on that page.

See one of the following sections for more information:

*	<a href="#instgde-install-magento-web-step0">Getting started</a>
*	<a href="install-gde/install/web/install-web_1-readiness.html">Step 1. Readiness Check</a>
*	<a href="{{ site.gdeurl}}install-gde/install/web/install-web_2-db.html">Step 2. Add a Database</a>
*	<a href="{{ site.gdeurl}}install-gde/install/web/install-web_3-web-conf.html">Step 3. Web Configuration</a>
*	<a href="{{ site.gdeurl}}install-gde/install/web/install-web_4-customize-store.html">Step 4. Customize Your Store</a>
*	<a href="{{ site.gdeurl}}install-gde/install/web/install-web_5-create-admin.html">Step 5. Create Admin Account</a>
*	<a href="{{ site.gdeurl}}install-gde/install/web/install-web_6-install.html">Step 6. Install</a>

<h3 id="instgde-install-magento-web-step0">Getting started</h3>

To install the Magento software using the Setup Wizard:

1.	Start a web browser.

2.	Enter the following URL in the browser's address or location bar:

		http://<Magento host or IP>/<path to Magento root>/setup
	
	For example, if the Magento server's IP address is 192.0.2.10 and you installed Magento 2 in the <code>magento2</code> directory relative to the web server's docroot, and you did not configure a Virtual Host, enter:
	
		http://192.0.2.10/magento2/setup
	
3.	On the initial page, click **Agree and Set Up Magento**.

3.	Continue with <a href="{{ site.gdeurl }}install-gde/install/web/install-web_1-readiness.html">Step 1. Readiness Check</a>.