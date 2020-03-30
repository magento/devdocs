---
group: software-update-guide
subgroup: 50_trouble
title: Out of memory errors
menu_title: Out of memory errors
menu_node:
menu_order: 4
functional_areas:
  - Upgrade
redirect_to: https://support.magento.com/hc/en-us/articles/360032980432
---

You may encounter an error, caused by your system running out of physical memory, when you attempt to install or update an extension or the latest Magento 2.3.x version. We recommend you create a swap file to avoid this error.

### Symptom

When installing or updating the Magento application or components like extensions, themes, or language packages, an error similar to the following displays:

```terminal
Could not complete update {"components":[
{"name":"magento/module-bundle-sample-data","version":"100.1.0"}
]} successfully: proc_open(): fork failed - Cannot allocate memory
```

The error `proc_open(): fork failed - Cannot allocate memory` can also display on the command line.

### Description

We recommend you allocate 2GB of memory to [PHP](https://glossary.magento.com/php) to make sure your installation or upgrade succeeds. The error might mean you have exhausted the physical memory in your machine and your system has no swap file available. At minimum, we recommend you have at least 2GB of RAM and an enabled swap file.

### Solution

First, make sure you allocated [2GB of memory to PHP]({{ page.baseurl }}/install-gde/prereq/php-settings.html); otherwise, your installation or upgrade might still run out of memory.

If you have already done that, create a swap file on your machine. A Linux machine uses *swap space* if it needs more memory resources and the RAM is full. The swap space is used for inactive pages in memory.

The following are suggestions only; other options might be available. Consult a network administrator or another knowledgeable resource before you continue. You must run the commands to create a swap file as a user with `root` privileges.

#### Swap file on Ubuntu

Use the `fallocate` command as discussed in these references:

*  [How To Add Swap on Ubuntu 14.04 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04){:target="_blank"}
*  [How To Add Swap Space on Ubuntu 16.04 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04){:target="_blank"}
*  [SwapFaq (help.ubuntu.com)](https://help.ubuntu.com/community/SwapFaq){:target="_blank"}

#### Swap file on CentOS

Use the `mkswap` command as discussed in these references:

*  [How To Add Swap on CentOS 6 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-6){:target="_blank"}
*  [How To Add Swap on CentOS 7 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-7){:target="_blank"}
*  [Swap Space (RedHat customer portal)](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Storage_Administration_Guide/ch-swapspace.html){:target="_blank"}
