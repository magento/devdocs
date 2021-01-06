---
group: installation-guide
title: Create, edit, or unlock a Magento administrator account
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

-  [Create the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
-  [Enable at minimum the Magento_Authorization and Magento_User modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
-  Create the Magento [database schema](https://glossary.magento.com/database-schema)

{:.bs-callout-info}
The simplest way to create the database is to use the command `magento setup:upgrade`.

## Create or edit an administrator

Use this command to create a new administrator or to edit an existing administrator.

{:.bs-callout-tip}
If you're editing an administrator, only the `first name`, `last name`, and `password` can be edited.

Command usage:

```bash
bin/magento admin:user:create [--<parameter_name>=<value>, ...]
```

Where the following table defines parameters and values:

|Name|Value|Required?|
|--- |--- |--- |
|`--admin-firstname`|Magento administrator user's first name.|Yes|
|`--admin-lastname`|Magento administrator user's last name.|Yes|
|`--admin-email`|Magento administrator user's e-mail address.|Yes|
|`--admin-user`|Magento administrator username.|Yes|
|`--admin-password`|Magento administrator user password. The password must be at least 7 characters in length and must include at least one alphabetic and at least one numeric character. <br><br>We recommend a longer, more complex password. If the password string contains special characters that require literal interpretation (such as backslashes or spaces), enclose the password in single quotations.|Yes|
|`--magento-init-params`|Add to any command to customize Magento initialization parameters<br/><br/>For example: `MAGE_MODE=developer&MAGE_DIRS[base][path]=/var/www/example.com&MAGE_DIRS[cache][path]=/var/tmp/cache`|No|

Example of usage:

```bash
bin/magento admin:user:create --admin-firstname=John --admin-lastname=Doe --admin-email=j.doe@example.com --admin-user=j.doe --admin-password=A0b9%t3g
```

```terminal
Created Magento administrator user named j.doe
```

If you do not specify any of required params Magento will ask about them in the CLI:

```bash
bin/magento admin:user:create
```

```terminal
Admin user: John
Admin password:
Admin email: j.doe.young@example.com
Admin first name: John
Admin last name: Doe Young
```

```terminal
Created Magento administrator user named John
```

The following example updates `first name`, `last name`, and `password` of `j.doe` admin user:

```bash
bin/magento admin:user:create --admin-firstname="John X" --admin-lastname="Doe X" --admin-email=j.doe@example.com --admin-user=j.doe --admin-password=A1234567
```

```terminal
Created Magento administrator user named j.doe
```

## Unlock an administrator account

Use this command to unlock the account of an administrator that was locked, typically because of multiple incorrect login attempts.

```bash
bin/magento admin:user:unlock {username}
```

You must specify the administrator's username. Example:

```bash
bin/magento admin:user:unlock admin
```

```terminal
The user account "admin" has been unlocked
```

If the account is either not unlocked or if there was a problem, the following message displays:

```terminal
The user account "admin" was not locked or could not be unlocked
```

Verify the user is an administrator, the user is active, and that the account is currently locked. To view the list of locked users in the Admin, log in as an administrator and click **System** > **Permissions** > **Locked Users**.

If the account doesn't exist, the following message displays:

```terminal
Couldn't find the user account "bob"
```
