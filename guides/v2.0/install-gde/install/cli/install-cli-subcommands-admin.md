---
group: install_cli
title: Create, edit, or unlock a Magento administrator account
version: 2.0
redirect_from: /guides/v2.0/install-gde/install/install-cli-subcommands-admin.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps
{% include install/first-steps-cli.html %}

In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites

Before you can use this command, you must do all of the following:

-   [Create the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
-   [Enable at minimum the Magento_Authorization and Magento_User modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
-   Create the Magento {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The simplest way to create the database is to use the command `magento setup:upgrade`.
</div>

## Create or edit an administrator

Use this command to create a new administrator or to edit an existing administrator. If you're editing an administrator, only the first name, last name, and password can be edited.

Command usage:

	magento admin:user:create [--<parameter_name>=<value>, ...]

Where the following table defines parameters and values:

<table>
  <col width="20%">
  <col width="55%">
  <col width="15%">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Required?</th>
    </tr>
    <tr>
      <td>
        <p>--admin-firstname</p>
      </td>
      <td>
        <p>Magento administrator user's first name.</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>--admin-lastname</p>
      </td>
      <td>
        <p>Magento administrator user's last name.</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>--admin-email</p>
      </td>
      <td>
        <p>Magento administrator user's e-mail address.</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>--admin-user</p>
      </td>
      <td>
        <p>Magento administrator username.</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>--admin-password</p>
      </td>
      <td>
        <p>Magento administrator user password.</p>
        <p>The password must be at least 7 characters in length and must include at least one alphabetic and at least one numeric character.</p>
        <p>We recommend a longer, more complex password. Enclose the entire password string in single quotes. For example, <code>--admin-password=''A0b9%t_3g'</code>.</p>
      </td>
      <td>
        <p>Yes</p>
      </td>
    </tr>
  </tbody>
</table>

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

#### Related topics

-   [Installing the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
-   [Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
-   [Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
-   [Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
-   [Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
-   [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
-   [Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html)
-   [Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)
-   [Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
-   [Configure the store]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html)
-   [Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
-   [Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
-   [Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
-   [Uninstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall)
-   [Update the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
-   [Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall)
