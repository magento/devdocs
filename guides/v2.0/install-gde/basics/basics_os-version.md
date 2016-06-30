---
layout: default
group: install2
subgroup: Getting Started
title: What operating system is my server running?
menu_title: What operating system is my server running?
menu_node: 
menu_order: 4
version: 2.0
github_link: install-gde/basics/basics_os-version.md
redirect_from: /guides/v1.0/install-gde/basics/basics_os-version.html
---
 
 
How can you tell what operating system and version your Magento server runs? 

**Prerequisites**: You must access the server using a command prompt (an application that enables you to enter commands directly). 

If you can log in directly to the machine, the application is usually called Terminal. 

If you cannot log in directly, you can <a href="{{page.baseurl}}install-gde/basics/basics_magento-installed.html#instgde-basics-terminal">log in remotely</a>.

## Exact command or process of elimination?

If you already know you're running Ubuntu or CentOS but don't know the version, see one of the following sections. If you don't know that much, just use the process of elimination&mdash;run both commands until you find the one that works.

### CentOS

To find the CentOS version, enter the following command in Terminal:

	cat /etc/*release*

The following sample output shows you're running CentOS 6.5 (you can ignore most of the output):

	CentOS release 6.5 (Final)
	LSB_VERSION=base-4.0-amd64:base-4.0-noarch:core-4.0-amd64:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-noarch
	cat: /etc/lsb-release.d: Is a directory
	CentOS release 6.5 (Final)
	CentOS release 6.5 (Final)

### Ubuntu

To find the Ubuntu version, enter the following command in Terminal:

	lsb_release -a

The following sample output shows you're running Ubuntu 14:

	No LSB modules are available.
	Distributor ID: Ubuntu
	Description:    Ubuntu 14.04.1 LTS
	Release:        14.04
	Codename:       trusty



