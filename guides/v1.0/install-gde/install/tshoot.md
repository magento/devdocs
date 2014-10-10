---
layout: howtom2instgde_chapters
title: Troubleshoot your Magento 2 installation
---

<h1 id="instgde-tshoot">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/install/verify.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>



Problem: Cannot run 'composer install'

*	Copy `composer.phar` to the Magento 2 `setup` directory
*	Cd to composer install dir and enter `mv composer.phar /usr/local/bin/composer`