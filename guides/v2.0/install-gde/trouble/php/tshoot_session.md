---
layout: default
group: install_trouble
subgroup: Errors during installation
title: During installation, exception SessionHandler::read()
menu_title: During installation, exception SessionHandler::read()
menu_node: 
menu_order: 26
github_link: install-gde/trouble/tshoot_session.md
---

<h2>During last step of installation Exception - SessionHandler::read</h2>

{% highlight PHP %} 
exception 'Exception' with message 'Warning: SessionHandler::read():
open(..) failed: No such file or directory (2) ../magento2/lib/internal/Magento/Framework/Session/SaveHandler.php on line 74' 
in ../magento2/lib/internal/Magento/Framework/App/ErrorHandler.php:67
{% highlight PHP %} 

### Solution:

This happens when your session.save_handler php parameter set to some another session storage that "files" (redis, memcached etc.), to fix that you need 
to edit your php.ini and set 

{% highlight PHP %} 
session.save_handler = files
{% highlight PHP %} 

session.save_path can be just disabled for use default parameters or set to valid folder in your file system 

{% highlight PHP %} 
;session.save_path = /some/patch/here
{% highlight PHP %} 
