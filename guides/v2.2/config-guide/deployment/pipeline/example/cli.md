---
group: config-guide
subgroup: 045_pipeline
title: Using CLI commands
menu_title: Using CLI commands
menu_node:
menu_order: 6200
level3_menu_node: level3child
level3_subgroup: deployment-examples
version: 2.2
github_link: config-guide/deployment/pipeline/example/cli.md
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
---

This example shows how to set shared, system-specific, and sensitive values in your development system, then set all the values in your production system using a combination of the shared configuration, `config.php`, and Magento CLI commands.

These configuration settings can be shared between the development and production systems:

VAT Number and Store Name from **Stores** > Settings > **Configuration** > General > **General**

These configuration settings are either system-specific or sensitive, as indicated:

*	Send Emails To (sensitive) from **Stores** > Settings > **Configuration** > General > **Contacts**
*	Default Email Domain (system-specific) from **Stores** > Settings > **Configuration** > Customers > **Customer Configuration** > **Create New Account Options**

You can use the same procedure to configure any settings in the following references:

*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html)
*	[Payment configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-payment.html)
*	[Other configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-most.html)
*	[Magento Enterprise B2B Extension configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-b2b.html)

## Before you begin
Before you begin, set up file system permissions and ownership as discussed in [Prerequisite for your development, build, and production systems]({{ page.baseurl }}/config-guide/deployment/pipeline/technical-details.html#config-deploy-prereq).

## Assumptions
This topic provides an example of modifying the production system configuration. You can choose different configuration options if you wish.

For the purposes of this example, we assume the following:

*	You use Git source control
*	The development system is available in a Git remote repository named `mconfig`
*	Your Git working branch is named `m2.2_deploy`

## Step 1: Set the configuration in the development system {#deploy-sens-setconfig}
To set the default locale and weight units in your development system:

1.	Log in to the Magento Admin.
2.	Click **Stores** > Settings > **Configuration** > General > **General**.
3.	If you have more than one website available, use the **Store View** list in the upper left corner to switch to a different website as the following figure shows.

	![Switch websites]({{ site.baseurl }}/common/images/config_split-deploy_switch-website.png){:width="250px"}
3.	In the right pane, expand **Store Information**.
4.	If necessary, clear the **Use Default** check box next to the **VAT Number** and **Store Name** fields.
5.	Enter a number in the field (for example, `12345`).
6.	In the **Store Name** field, enter a value (like `My Store`).
7.	Click **Save Config**.
9.	In the left navigation, under General, click **Contacts**.
10.	In the right pane, expand **Email Options**.
8.	If necessary, clear the **Use Default** check box next to the **Send Emails To** field.
9.	Enter an e-mail address in the field.
10.	Click **Save Config**.
8.	Use the **Store View** list to select the **Default Config** as the following figure shows.

	![Switch to the default config]({{ site.baseurl }}/common/images/config_split-deploy_default-config.png){:width="200px"}
11.	In the left pane, click Customers > **Customer Configuration**.
12.	In the right pane, expand **Create New Account Options**.
13.	If necessary, clear the **Use system value** check box next to the **Default Email Domain** field.
14.	Enter a domain name in the field.
15.	Click **Save Config**.
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

	If you followed the instructions in [Step 1](#deploy-sens-setconfig), the scope for Send Emails To is website and the scope for Default Email Domain is global (that is, the Default Config scope). 

	You must know the website's code to set the Send Emails To configuration value. See [Use environment variables to override configuration settings]({{ page.baseurl }}/config-guide/prod/config-reference-var-name.html) for more information on finding it.
*	Each setting's configuration path

	The configuration paths used in this example follow:

	| Setting name  | Configuration path | 
	|--------------|--------------|
	| Send Emails To | `contact/email/recipient_email` |
	| Default Email Domain | `customer/create_account/email_domain` |

	You can find all sensitive and system-specific configuration paths in [Sensitive and system-specific configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html).

### Set the variables using CLI commands
This section discusses how to the following commands to set system-specific and sensitive configuration settings:

*	`magento config:set` for system-specific settings
*	`magento config:sensitive:set` for sensitive settings

To set the system-specific setting Default Email Domain, which is in the default scope, the command to use is:

	php bin/magento config:set customer/create_account/email_domain <email domain>

You don't need to use the scope in the command because it's the default scope.

To set values for Send Emails To, however, you must know the scope type (`website`) and the scope code (which is likely different on every site).

An example follows:

	php bin/magento config:sensitive:set contact/email/recipient_email --scope=website --scope-code=<website code> <email address>

### Update the shared settings {#config-split-verify-shared}
This section discusses how to pull all the changes you made on your development and build systems, which updates the shared configuration settings (Store Name and VAT Number).

{% include config/split-deploy/example_update-prod.md %}

### Verify configuration settings in the Magento Admin
This section discusses how you can verify the configuration settings in your production system Admin.

To verify the configuration settings:

1.	Log in to your production system's Magento Admin.
2.	Click **Stores** > Settings > **Configuration** > General > **General**.
3.	Use the **Store View** list in the upper left corner to switch to a different website.

	The shared configuration options you set in the development system are displayed similar to the following.

	![Check settings in the production system]({{ site.baseurl }}/common/images/config_split-deploy_verify_storeinfo.png){:width="650px"}

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	The **Store Name** field is editable in the website scope but if you switch to the Default Config scope, it is not editable. This is the result of how you set the options in the development system.

	The value of **VAT Number** is not editable in website scope.
	</div>
4.	If you haven't already done so, switch to Default Config scope.
5.	In the left navigation, under General, click **Contacts**.

	The **Send Emails To** field is not editable, as the following figure shows. This is a sensitive setting.
	
	![Check settings in the production system]({{ site.baseurl }}/common/images/config_split-deploy_verify_contacts.png){:width="400px"}


7.	In the left pane, click Customers > **Customer Configuration**.
8.	In the right pane, expand **Create New Account Options**.

	The value of the **Default Email Domain** field is displayed as follows. This is a system-specific setting.

	![Check settings in the production system]({{ site.baseurl }}/common/images/config_split-defaultdomain.png){:width="400px"}
