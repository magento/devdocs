---
layout: howtom2instgde_chapters
title: Troubleshooting your Magento 2 installation
---

<h1 id="instgde-tshoot">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/install/verify.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>



Problem: Cannot run 'composer install'

*	Copy `composer.phar` to the Magento 2 `setup` directory
*	Cd to composer install dir and enter `mv composer.phar /usr/local/bin/composer`

Problem: Error during install: `PHP Warning:  date(): It is not safe to rely on the system's timezone settings. [more]`

Solution: 


Problem: After install completes, error in browser


Whoops, it looks like you have an invalid PHP version.

Magento supports PHP 5.4.11 or newer. 

