---
layout: default
group: install
subgroup: Z_Troubleshooting
title: During installation, fatal PDO error displays
menu_title: During installation, fatal PDO error displays
menu_node: 
menu_order: 21
github_link: install-gde/trouble/trouble/php/tshoot_pdo.md
---

<h2 id="install-trouble-pdo">During installation, fatal PDO error displays</h2>

	PHP Fatal error:  Class 'PDO' not found in /var/www/html/magento2/setup/module/Magento/Setup/src/Module/Setup/ConnectionFactory.php on line 44

### Solution:

Make sure you installed all required PHP extensions (<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">CentOS</a>, <a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">Ubuntu</a>). 

