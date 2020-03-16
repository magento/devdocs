---
group: installation-guide
subgroup: 03_install
title: During installation, Reflection Exception error
menu_title: During installation, Reflection Exception error
menu_node:
menu_order: 25
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360034633551
---

### Details

During the installation, a  message similar to the following displays:

```terminal
[ERROR] exception 'ReflectionException' with message 'Class Magento\Framework\StoreManagerInterface does not exist' in /<path>/lib/internal/Magento/Framework/Code/Reader/ClassReader.php
```

### Solution

Clear all directories and files under Magento's `var` subdirectory and install the Magento software again.

As the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) or as a user with `root` privileges, enter the following commands:

```bash
cd <your Magento install directory>/var
```

```bash
rm -rf cache/* di/* generation/* page_cache/*
```

#### Redis

If you use Redis and still get an error, clear the Redis cache as follows:

```bash
redis-cli FLUSHALL
```
