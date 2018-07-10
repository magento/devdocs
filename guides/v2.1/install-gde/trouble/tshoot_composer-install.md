---
group: install_trouble
subgroup: 20_other
title: Cannot run 'composer install'
menu_title: Cannot run 'composer install'
menu_node:
menu_order: 550
version: 2.1
github_link: install-gde/trouble/tshoot_composer-install.md
redirect_from: /guides/v1.0/install-gde/trouble/tshoot_composer-install.html
functional_areas:
  - Install
  - System
  - Setup
---


### Suggestion

Change to the directory in which you installed {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} and enter the following command:

`mv composer.phar /usr/local/bin/composer`

If you have issues with authenticating with the Magento 2 GitHub repository, see <a href="{{ page.baseurl }}/install-gde/prereq/connect-auth.html">Get your authentication keys</a>.

