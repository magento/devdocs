---
layout: default
group: install_pre
subgroup: S_Integrator
title: System Integrator installation first steps
menu_title: System Integrator installation first steps
menu_order: 1
menu_node: parent
github_link: install-gde/prereq/integrator_install.md
---


## System integration installation first steps
As an integrator, you want to manage each of your Magento core components and third-party components using the Component Manager and System Upgrade (*not released yet*.)

To do so, you start by creating a Composer project, which installs each component so it can be centrally managed after installation.

{% include install/composer-overview.html %}

## Create a Composer project
To get started:

1.	Log in to your Magento server as, or switch to, a user who has privileges to write to the web server docroot.
2.	Change to the web server docroot directory, or to a directory you've configured as a virtual host docroot.
3.	Enter the following command:

		composer create-project magento/product-community-edition --stability="beta" <installation directory name>

	This command creates the project defined in <a href="http://packages.magento.com/#!/community" target="_blank">packages.magento.com</a> and downloads dependencies for it. The project is in a directory named `<installation directory name>` if you provided the parameter or `product-community-edition` if you did not.

	If you configured a virtual host, `<installation directory name>` must match the docroot directory defined for it.

4.	Continue with <a href="{{ site.gdeurl }}install-gde/install/file-system-perms.html">Set file system ownership and permissions</a>.
