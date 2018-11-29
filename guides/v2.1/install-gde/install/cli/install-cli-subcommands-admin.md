---
group: installation-guide
title: Create, edit, or unlock a Magento administrator account
redirect_from: /guides/v2.0/install-gde/install/install-cli-subcommands-admin.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps
{% include install/first-steps-cli.md %}

In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites

Before you can use this command, you must do all of the following:

-   [Create the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
-   [Enable at minimum the Magento_Authorization and Magento_User modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
-   Create the Magento {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %}

{:.bs-callout .bs-callout-info}
The simplest way to create the database is to use the command `magento setup:upgrade`.

## Create or edit an administrator

Use this command to create a new administrator or to edit an existing administrator. If you're editing an administrator, only the first name, last name, and password can be edited.

Command usage:

	magento admin:user:create [--<parameter_name>=<value>, ...]

Where the following table defines parameters and values:

|Name|Value|Required?|
|--- |--- |--- |
|`--admin-firstname`|Magento administrator user's first name.|Yes|
|`--admin-lastname`|Magento administrator user's last name.|Yes|
|`--admin-email`|Magento administrator user's e-mail address.|Yes|
|`--admin-user`|Magento administrator username.|Yes|
|`--admin-password`|Magento administrator user password. The password must be at least 7 characters in length and must include at least one alphabetic and at least one numeric character. <br><br>We recommend a longer, more complex password. Enclose the entire password string in single quotes. For example, `--admin-password='A0b9%t3g'`.|Yes|
{:style="table-layout:auto;"}

## Unlock an administrator account

Use this command to unlock the account of an administrator that was locked, typically because of multiple incorrect login attempts.

	magento admin:user:unlock {username}

You must specify the administrator's username. Example:

	magento admin:user:unlock admin
	The user account "admin" has been unlocked

If the account is either not unlocked or if there was a problem, the following message displays:

	The user account "admin" was not locked or could not be unlocked

Verify the user is an administrator, the user is active, and that the account is currently locked. To view the list of locked users in the Admin, log in as an administrator and click **System** > **Permissions** > **Locked Users**.

If the account doesn't exist, the following message displays:

	Couldn't find the user account "bob"
