---
layout: default
group: compman
subgroup: 50_trouble
title: Out of memory errors
menu_title: Out of memory errors
menu_node: 
menu_order: 4
version: 2.1
github_link: comp-mgr/trouble/cman/out-of-memory.md
---

## Out of memory errors
Sometimes when you attempt to install or update, you can encounter an error due to your system running out of physical memory. We recommend you create a swap file to avoid this error.

### Symptom
When installing or updating the Magento application or components like extensions, themes, or language packages, an error similar to the following displays:

	Could not complete update {"components":[
	{"name":"magento/module-bundle-sample-data","version":"100.1.0"}
	]} successfully: proc_open(): fork failed - Cannot allocate memory

The error `proc_open(): fork failed - Cannot allocate memory` can also display on the command line.

### Description
Because we recommend you allocate [2GB of memory to PHP]({{ page.baseurl }}install-gde/prereq/php-centos.html#instgde-prereq-timezone), this error can display on systems with less than 2GB of phyiscal memory. The error means you have exhausted the physical memory in your machine.

### Solution
First, make sure you allocated 2GB of memory for PHP; otherwise, your installation or upgrade might run out of memory even if your system has enough memory.

Next, create a swap file on your machine.

The following are suggestions only; other options might be available. Consult a network administrator or another knowledgeable resource before you continue. You must run all of the following commands as a user with `root` privileges.

#### Swap file on Ubuntu
Use the `fallocate` command as discussed in these references:

*	[How To Add Swap on Ubuntu 14.04 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04){:target="_blank"}
*	[How To Add Swap Space on Ubuntu 16.04 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04){:target="_blank"}
*	[SwapFaq (help.ubuntu.com)](https://help.ubuntu.com/community/SwapFaq){:target="_blank"}

#### Swap file on CentOS
Use the `mkswap` command as discussed in these references:

*	[How To Add Swap on CentOS 6 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-6){:target="_blank"}
*	[How To Add Swap on CentOS 7 (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-7){:target="_blank"}
*	[Swap Space (RedHat customer portal)](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Storage_Administration_Guide/ch-swapspace.html){:target="_blank"}