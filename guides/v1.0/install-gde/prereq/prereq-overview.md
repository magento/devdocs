---
layout: howtom2instgde_chapters
title: Prerequisites for installing Magento 2
---

<h1 id="instgde-prereq">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/prereq/m2instgde-prereq-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="instgde-prereq-overview">Before you begin</h2>

Before you install Magento, you must do all of the following:

*	Set up one or more hosts that meet the <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento 2 system requirements</a>.
*	If you are setting up more than one web node with load balancing, set up and test that part of your system _before_ you install Magento.
*	Make sure you can back up your entire system at various points during the installation so you can roll back in the event of issues.

Magento _strongly _recommends you observe the following guidelines when you set up your Magento database:

*	Magento uses <a href="http://dev.mysql.com/doc/refman/5.0/en/triggers.html" target="_blank">MySQL database triggers</a> to improve database access during reindexing. Magento does not support any custom triggers in the Magento database because custom triggers can introduce incompatibilities with future Magento versions.
*	Familiarize yourself with <a href="http://dev.mysql.com/doc/mysql-reslimits-excerpt/5.1/en/stored-program-restrictions.html" target="_blank">these potential MySQL trigger limitations</a> before you continue.
*	If you use MySQL database replication, be aware that Magento does _not_ support MySQL statement-based replication. Make sure you use _only_ <a href="http://dev.mysql.com/doc/refman/5.1/en/replication-formats.html" target="_blank">row-based replication</a>.

#### Related Topics




