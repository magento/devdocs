---
group: install_trouble
subgroup: 03_install
title: During installation, Reflection Exception error
menu_title: During installation, Reflection Exception error
menu_node:
menu_order: 25
version: 2.1
redirect_from: /guides/v1.0/install-gde/trouble/tshoot_wrong-mysql.html
functional_areas:
  - Install
  - System
  - Setup
---

### Details

During the installation, a  message similar to the following displays: 

	[ERROR] exception 'ReflectionException' with message 'Class Magento\Framework\StoreManagerInterface does not exist' 
	in /<path>/lib/internal/Magento/Framework/Code/Reader/ClassReader.php

### Solution

Clear all directories and files under Magento's `var` subdirectory and install the Magento software again.

As the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) or as a user with `root` privileges, enter the following commands:

	cd <your Magento install directory>/var
	rm -rf cache/* di/* generation/* page_cache/*

#### Redis

If you use Redis and still get an error, clear the Redis cache as follows:

```bash
redis-cli FLUSHALL
```
