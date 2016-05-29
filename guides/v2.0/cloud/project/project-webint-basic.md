---
layout: default
group: cloud
subgroup: 07_project
title: Basic project information
menu_title: Basic project information
menu_order: 4
menu_node: 
level3_menu_node: level3child
level3_subgroup: project
github_link: cloud/project/project-webint-basic.md
---

## Basic project information {#project-basic}
This topic discusses how to use the Web Interface to:

*	Log in to the project
*	Access your site
*	Get started configuring the project
*	Get started configuring an environment

## Log in to your project {#project-login}
The Web Interface URL for your project is available in the following ways:

*	Your welcome e-mail
*	The Magento Enterprise Cloud Edition command-line interface (CLI)

### Find the project URL using the CLI
To find the project URL using the CLI:

1.	Log in to the machine on which your SSH keys are stored.
2.	Log in to your project:

		magento-cloud login
3.	Enter the following command:

		magento-cloud project:list

	A sample result follows:

		Your projects are:

		+---------------+--------------+---------------------------------------------------+
		| ID            | Title        | URL                                               |
		+---------------+--------------+---------------------------------------------------+
		| pwga254dhx97o | Magento 2    | https://us.magento.cloud/#/projects/pwga254dhx97o |
		+---------------+--------------+---------------------------------------------------+
4.	Enter the value in the URL column in a web browser.

### Log in to your project
In a web browser, enter the project URL from your welcome e-mail or that you found using the CLI. When prompted, log in to your project using Bitbucket, GitHub, Google, or a e-mail address and password.

![Log in to a project]({{ site.baseurl }}common/images/cloud_project-login.png){:width="450px"}

## Access your project and environments {#project-access}
The Web Interface provides several ways to access your project and environments:

*	Your storefront URL (every environment, or branch, has a different URL)
*	Secure Shell (SSH), a way to interact with services using a command terminal
*	Clone the project using the Magento Enterprise Cloud Edition CLI
*	Clone the project using Git

