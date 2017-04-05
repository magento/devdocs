---
layout: default
group: config-guide
subgroup: 999_prod
title: Set configuration values using environment variables
menu_title: Set configuration values using environment variables
menu_node: 
menu_order: 53
level3_menu_node: level3child
level3_subgroup: deploy-ex
version: 2.2
github_link: config-guide/prod/prod_deploy-envvars.md
---

This example shows how to set shared, system-specific, and sensitive values in your development system, then set all the values in your production system using a combination of the shared configuration, `config.php`, and PHP environment variables.

These configuration settings can be shared between the development and production systems:

*	VAT Number from **Stores** > Settings > **Configuration** > General > **General**
*	Email Sender from **Stores** > Settings > **Configuration** > General > **Contacts**

These configuration settings are either system-specific or sensitive, as indicated:

*	Send Emails To (sensitive) from **Stores** > Settings > **Configuration** > **General** > **Contacts**
*	Default Email Domain (system-specific) from **Stores** > Settings > **Configuration** > **Customers** > **Customer Configuration**

You can use the same procedure to configure any settings in the following references:

*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)
*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-b2b.html)

## Before you begin
Before you begin, set up file system permissions and ownership as discussed in [Prerequisite for your development, build, and production systems]({{ page.baseurl }}config-guide/prod/prod_deploy-over-tech.html##config-deploy-prereq).

## Assumptions
This topic provides an example of modifying the production system configuration. You can choose different configuration options if you wish.

For the purposes of this example, we assume the following:

*	You use Git source control
*	The development system is available in a Git remote named `mconfig`
*	Your Git working branch is named `m2.2_deploy`

## Step 1: Set the configuration in the development system
To set the default locale and weight units in your development system:

1.	Log in to the Magento Admin.
2.	Click **Stores** > Settings > **Configuration** > General > **General**.
3.	If you have more than one website available, use the **Store View** list in the upper left corner to switch to a different website as the following figure shows.

	![Switch websites]({{ site.baseurl }}common/images/config_split-deploy_switch-websites.png)
3.	In the right pane, expand **Store Information**.
4.	If necessary, clear the **Use Default** check box next to the **VAT Number** field.
5.	Enter a number in the field (for example, `12345`).
6.	In the left pane, under General, click **Contacts**.
7.	Use the **Store View** list to select the **Default Config** as the following figure shows.

	![Switch to the default config]({{ site.baseurl }}common/images/config_split-deploy_default-config.png)
8.	Clear the **Use Default** check box next to the **Send Emails** field.
9.	Enter an e-mail address in the field.
10.	Click **Save Config**.
11.	If prompted, flush the cache.

## Step 2: Update the configuration
Now that you've changed the configuration in the Magento Admin, write the shared configuration to a file as discussed in this section.

{% include config/split-deploy/example_save-shared-config.md %}