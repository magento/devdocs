---
layout: howtom2instgde_chapters
title: Troubleshooting your Magento 2 installation
---

<h1 id="instgde-tshoot">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/install/verify.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>



Problem: Cannot run 'composer install'

Cd to composer install dir and enter `mv composer.phar /usr/local/bin/composer`


Problem: Error during install: `PHP Warning:  date(): It is not safe to rely on the system's timezone settings. [more]`

Solution: 


Problem: After install completes, error in browser


Whoops, it looks like you have an invalid PHP version.

Magento supports PHP 5.4.11 or newer. 

Solution: Either upgrade PHP or restart Apache.


Problem: Errors accssing the store or Admin after install indicating an error with the previous install (e.g., --base-url=localhost).

Solution: Manually clear the cache and try again.


Problem:  Zend\Db\Adapter\Exception\RuntimeException
 Connect Error: SQLSTATE[28000] [1045] Access denied for user 'magento'@'localhost' (using password: YES)
(stack trace)

Solution: Create DB instance or DB credentials not correct


Problem:  Magento\Framework\Exception
 Command `/usr/bin/php5 -f '/var/www/magento2/dev/shell/maintenance.php' -- --set='1' 2>&1` returned non-zero exit code.
(stack trace)

Previous exception: 
 Exception
 exception 'PDOException' with message 'SQLSTATE[42S02]: Base table or view not found: 1146 Table 'magento.core_config_data' doesn't exist' in /var/www/magento2/lib/internal/Zend/Db/Statement/Pdo.php:228

 
 Problem: During `composer install`, this: Warning: The lock file is not up to date with the latest changes in composer.json. You may be getting outdated dependencies. Run update to update them.
 
 Solution: Run `composer update`