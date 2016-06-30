---
layout: default
group: install_trouble
subgroup: Errors during installation
title: During installation, fatal PDO error displays
menu_title: During installation, fatal PDO error displays
menu_node: 
menu_order: 21
version: 2.0
github_link: install-gde/trouble/php/tshoot_pdo.md
redirect_from:
  -  /guides/v1.0/install-gde/trouble/tshoot_pdo.html
  -  /guides/v2.0/install-gde/trouble/tshoot_pdo.html
---

<h2 id="install-trouble-pdo">During installation, fatal PDO error displays</h2>

	PHP Fatal error:  Class 'PDO' not found in /var/www/html/magento2/setup/module/Magento/Setup/src/Module/Setup/ConnectionFactory.php on line 44

### Solution:

Make sure you installed all required PHP extensions (<a href="{{page.baseurl}}install-gde/prereq/php-centos.html">CentOS</a>, <a href="{{page.baseurl}}install-gde/prereq/php-ubuntu.html">Ubuntu</a>). 

