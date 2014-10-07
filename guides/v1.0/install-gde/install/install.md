---
layout: howtom2instgde_chapters
title: Install Magento 2
---

<h1 id="instgde-install">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/install/install.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="instgde-install-intro">Introduction to installing Magento 2</h2>

TBD

<h2 id="instgde-install-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento 2 System Requirements (R)</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prequisites for installing Magento 2</a>.
3.	You installed Composer and cloned the Magento 2 GitHub repository as discussed in <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento 2 GitHub repository</a>.

<h2 id="instgde-install-start">Getting started with your installation</h2>

After you complete the tasks discussed in the preceding section, update Composer and run the installer:

1.	Log in to your Magento server as a user with <code>root</code> privileges.
2.	Change to the Magento 2 `setup` directory. For example,

	`cd /var/www/html/magento2/setup`
	
3.	Enter `composer install`.

	This command updates the Composer components and can take a few minutes to complete.
	
4.	Choose what to install:

	*	To install the Magento 2 system software, continue with the next section.
	*	To install or update only the database schema, see TBD
	*	To install or update only users and administrators, see TBD
	*	To only update existing Magento 2 components, see TBD
	
<h2 id="instgde-install-magento">Install the Magento 2 system software</h2>



