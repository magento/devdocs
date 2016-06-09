---
layout: default
group: install_trouble
subgroup: Z_Other issues
title: Cannot run 'composer install'
menu_title: Cannot run 'composer install'
menu_node: 
menu_order: 1
version: 2.0
github_link: install-gde/trouble/tshoot_composer-install.md
redirect_from: /guides/v1.0/install-gde/trouble/tshoot_composer-install.html
---


<h2 id="install-trouble-composer-install">Cannot run <code>composer install</code></h2>

### Suggestion

Change to the directory in which you installed Composer and enter the following command:

`mv composer.phar /usr/local/bin/composer`

If you have issues with authenticating with the Magento 2 GitHub repository, see <a href="{{ site.gdeurl }}install-gde/prereq/connect-auth.html">Get your authentication keys</a>.

