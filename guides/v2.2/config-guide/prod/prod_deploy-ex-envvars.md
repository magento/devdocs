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

VAT Number and Store Name from **Stores** > Settings > **Configuration** > General > **General**

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

	![Switch websites]({{ site.baseurl }}common/images/config_split-deploy_switch-website.png){:width="250px"}
3.	In the right pane, expand **Store Information**.
4.	If necessary, clear the **Use Default** check box next to the **VAT Number** field.
5.	Enter a number in the field (for example, `12345`).
6.	In the **Store Name** field, enter a value (like `My Store`).
7.	Use the **Store View** list to select the **Default Config** as the following figure shows.

	![Switch to the default config]({{ site.baseurl }}common/images/config_split-deploy_default-config.png){:width="200px"}
8.	Clear the **Use Default** check box next to the **Send Emails** field.
9.	Enter an e-mail address in the field.
10.	Click **Save Config**.
11.	If prompted, flush the cache.

## Step 2: Update the configuration
Now that you've changed the configuration in the Magento Admin, write the shared configuration to a file as discussed in this section.

{% include config/split-deploy/example_save-shared-config.md %}

Note that even though `app/etc/env.php` (the system-specific configuration) was updated, don't check it in to source control. You'll create the same configuration settings on your production system later in this procedure.

## Step 3: Update your build system and generate files
Now that you've committed your changes to the shared configuration to source control, you can pull those changes in your build system, compile code, and generate static files. The last step is to pull those changes to your production system.

{% include config/split-deploy/example_build-sync.md %}

## Step 4: Update the production system
The last step in the process is to update your production system. You must do it in two parts:

*	[Update the sensitive and system-specific settings](#config-split-verify-sens)
*	[Update the shared settings](#config-split-verify-shared)

### Update the sensitive and system-specific settings {#config-split-verify-sens}
To set the sensitive and system-specific settings using environment variables, you must know the following:

*	Each setting's scope 

	If you followed the instructions in TBD, the scope for Send Emails To is global (that is, the Default Config scope) and the scope for Default Email Domain is website. 

	You must know the website's code to set the Default Email Domain configuration value. See TBD for more information on finding it.
*	Each setting's configuration path

	The configuration paths in this example follow:

	| Name  | Config path | 
	|--------------|--------------|
	| Send Emails To | `contact/email/recipient_email` |
	| Default Email Domain | `customer/create_account/email_domain` |

	You can find all sensitive and system-specific configuration paths in [Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html).

#### Convert configuration paths to variable names
As discussed in TBD, the format of variables is:

<pre class="no-copy">&lt;SCOPE>__&lt;SYSTEM__VARIABLE__NAME></pre>

The value of `<SCOPE>` is `CONFIG__DEFAULT__` for global scope or `CONFIG__WEBSITES__<WEBSITE CODE>` for website scope.

To find the value of `<SYSTEM__VARIABLE__NAME>`, replace each `/` character in the configuration path with two underscores.

The variable names follow:

	| Name  | Config path | Variable name |
	|--------------|--------------|--------------|
	| Send Emails To | `contact/email/recipient_email` | `CONFIG__DEFAULT__CONTACT__EMAIL__RECIPIENT_EMAIL` |
	| Default Email Domain | `customer/create_account/email_domain` | `CONFIG__WEBSITES__BASE__CUSTOMER__CREATE_ACCOUNT__EMAIL_DOMAIN` |



### Update the shared settings {#config-split-verify-shared}
This section discusses how to pull all the changes you made on your development and build systems, which updates the shared configuration settings (Store Name and VAT Number).

{% include config/split-deploy/example_update-prod.md %}

### Verify shared settings in the Magento Admin
This section discusses how you can verify the shared configuration settings in the Admin.

To verify shared settings