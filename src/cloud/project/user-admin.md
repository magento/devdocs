---
group: cloud-guide
title: Manage user access to Cloud projects
functional_areas:
  - Cloud
  - Configuration
  - Account
  - Security

redirect_from:
  - /cloud/admin/admin-user-admin.html
  - /cloud/project/user-admin.html#cloud-role-acct-owner
  - /cloud/project/user-admin.html#cloud-role-env
  - /cloud/project/user-admin.html#cloud-role-project
---

You manage access to {{site.data.var.ece}} projects and certain environment types by adding users and assigning roles. Project level roles provide access to the entire project.

## Environment types and user access

Adobe Commerce on cloud infrastructure consists of three environments types: Production, Staging, and Integration. Access to an environment is granted by assigning a user the Admin, Contributor, Viewer, or None role.

| **Role**            | **Scope**  | **Access** |
|-|-|-|
| **Account owner** | Project | Perform any task in any project or environment, including deleting it.<br>Adobe assigns this role to the License Owner associated with the email address, name, and information of the person who registered the {{ site.data.var.ece }} account.  You submit a {{site.data.var.ee}} Support ticket to modify settings or change the Account owner. |
| **Super User** | Project | Administrator access to all project settings and Cloud environments. Super users can change settings and perform tasks on any environment, including creating and restoring [snapshots][] and managing users. |
| **Project viewer** | Project | View access to all project environments. Users with this role cannot perform tasks on any environment. However, you can configure environment-level permissions for users with this role to permit write access to a specific environment. |
| **Admin** | Environment | Change settings, push code, perform tasks and branch environments, including merging with the parent environment; SSH access |
| **Contributor** | Environment | Cannot change settings or execute actions; Can push code and branch the environment; SSH access |
| **Viewer** | Environment | View-only access to an environment; No SSH access |
| **None** | Environment | No access to an environment; No SSH access |

## Add user authentication requirements

For added security, Adobe provides project-level multi-factor authentication (MFA) enforcement to require two-factor authentication (2FA) for SSH access to {{ site.data.var.ece }} project source code and environments. See [Enable MFA for SSH].

When MFA enforcement is enabled on a {{site.data.var.ece}} project, all users with SSH access to an environment in that project must enable 2FA on their {{site.data.var.ece}} account. For automated processes, users must create an API token that machine users can use to authenticate from the command line. See [Enable user accounts for 2FA and SSH access](#update-account-security-settings).

## Add users and manage access

You add users and assign roles using the `magento-cloud` CLI or the Project Web Interface.

{:.bs-callout-tip}
Changing user configuration on an {{site.data.var.ece}} environment requires a site deployment for the changes to take effect, which takes your site offline until the deployment completes. For Production environments, Adobe recommends completing user administration tasks during off-peak hours to prevent service disruptions.

**Prerequisites:**

-  To add a user to a project or environment, you need the email address associated with an existing {{ site.data.var.ece }} account. New users can [register for an account][{{site.data.var.ece}} account] and provide the associated email address after completing account validation.

-  Users assigned the **Admin** role cannot manage users using the `magento-cloud` CLI. Only users that are granted the **Super User** or **Account Owner** role can manage users.

## Manage users with the `magento-cloud` CLI {#cloud-user-mg-cli}

Use the {{site.data.var.ece}} `magento-cloud` CLI to manage users and integrate with automated systems.

Available commands:

-  `magento-cloud user:add`–add a user to the project
-  `magento-cloud user:delete`–delete a user
-  `magento-cloud user:list [users]`–list project users
-  `magento-cloud user:role`–view or change the user role
-  `magento-cloud user:update`–update user role on a project

{:.bs-callout-tip}
The `magento-cloud list` command displays all the `magento-cloud` CLI commands. To view the command and parameters for a specific command and not the entire list, append the command  with a -help. For example, `magento-cloud` `environment:list`, you run `magento-cloud environment:list -help`.

The following examples use the `magento-cloud` CLI to add a user, configure roles, modify project assignments, and assign user roles.

### Add a user and assign roles

{:.procedure}
To add a user and assign roles:

1. Use the `magento-cloud` CLI to add the user.

   ```bash
   magento-cloud user:add
   ```
1. Follow the prompts to specify the user email address, set the project and environment type roles, and add the user:

   ```terminal
   Enter the user's email address: alice@example.com

   Email address: alice@example.com

   The user's project role can be admin (a) or viewer (v).

   Project role (default: viewer) [a/v]: viewer

   The user's environment type role(s) can be admin (a), viewer (v), contributor (c) or none (n).

   Role on type development (default: none) [a/v/c/n]: none
   Role on type production (default: none) [a/v/c/n]: admin
   Role on type staging (default: none) [a/v/c/n]: admin

   Adding the user alice@example.com to (project_id):
   Project role: viewer
     Role on type production: admin
     Role on type staging: admin

   Adding users can result in additional charges.

   Are you sure you want to add this user? [Y/n] y
   Adding the user to the project
   ```
   {:.no-copy}

   {%include cloud/note-prevent-site-availability-issues.md%}

   After you add the user, Adobe sends an email to the specified address with instructions for accessing the {{ site.data.var.ece }} project.

### View a user's project role

To view a user's project role:

```bash
magento-cloud user:get user@example.com

```

Sample response:

```terminal
Current role(s) of User (user@example.com) on Production (project_id):
  Project role: admin
```

### Add a user to multiple environments

To add a user as a `viewer` on a `Production` environment, and as a `contributor` on an `Integration` environment:

```bash
magento-cloud user:add user@example.com -r production:v -r integration:c

```

### Update user environment permissions

To update user environment permissions to `admin` on the `Production` environment:

```bash
magento-cloud user:update user@example.com -r production:a
```

## Manage users from the Project Web UI {#cloud-user-webinterface}

You add project-level and environment-level permissions from the Project Web UI, and use the _Edit_ feature to modify permissions for an existing user.

{:.bs-callout-tip}
After you add a user, the user receives an email inviting them to join the {{site.data.var.ece}} project.

### Add users from the Project Web UI

{:.procedure}
To add users from the Project Web UI:

1. Log in to [your {{site.data.var.ece}} account][{{site.data.var.ece}} account].

1. Click the **Projects** tab.

   ![Click the projects tab to access your Cloud project]({{ site.baseurl }}/common/images/cloud/cloud_account_project.png){:width="550px"}

1. Click your project name to open the Cloud project portal (Onboarding UI).

1. Click **Infrastructure access**, and then click **Project Access (Web UI)**.

   ![Cloud project portal]({{ site.baseurl }}/common/images/cloud/cloud-login-infrastructure-access.png){:width="550px"}

1. In the Project Web UI, add project-level users and environment-level users as needed.

### Add a project-level user

{:.procedure}
To add a project-level user:

1. In the Project Web UI, click the settings icon in the top navigation bar.

   ![Configure the project]({{ site.baseurl }}/common/images/cloud/cloud_project_gear.png){:width="184px"}

1. In the _Users_ tab, click **Add User**.

   ![Start creating users]({{ site.baseurl }}/common/images/cloud/cloud_project-config.png){:width="500px"}

1. Complete the _Add User_ form:

   ![Add users]({{ site.baseurl }}/common/images/cloud/cloud_project-add-super-user.png){:width="500px"}

   -  Enter the user e-mail address.

   -  Select the access for the account:

      For a project administrator account, select **Super User**. This role provides Admin rights to all settings and environments. If not selected, the account has only view options for all project environments.

   -  Select permissions per specific environment (or branch) in the Integration environment: _No access_, _Admin_ (change settings, execute action, merge code), _Contributor_ (push code), or _Viewer_ (view only). When you add active environments, you can modify permissions per user.

1. Click **Add User**.

   {:.bs-callout-warning}
   After adding project-level users, you must redeploy all environments to apply the changes. Adding a project user does not trigger a redeploy automatically.

 {:.bs-callout-warning}
   Only **Super Users** can manage users in any environment. To grant a user access to the **Users** tab when configuring the environment, another **Super User** or the **Account Owner** must assign that user the **Super User** role.

{%include cloud/note-prevent-site-availability-issues.md%}

## Update account security settings

After you add a user to a Cloud project, ask the user to review their account security settings and add the following security configuration as needed:

-  Enable 2FA

   Adobe recommends adding 2FA to all accounts to meet security and compliance standards. Projects configured with [MFA enforcement][Enable MFA for SSH] require 2FA on accounts that use SSH to access the projects.

-  Enable SSH keys

   Users that require access to {{site.data.var.ece}} source code repositories and infrastructure must enable SSH keys on their account. See [Enable SSH keys][].

-  Create an API token

   Users must generate an API token that is used for SSH access to an environment. You need the token to enable authentication workflows for automated processes.

   On projects with MFA enforcement enabled, you must use the API token to authenticate SSH access requests from automated accounts. The token allows automated processes to bypass authentication workflows which require 2FA.

### Enable 2FA for Cloud accounts

{{site.data.var.ece}} supports 2FA using any of the following applications:

-  [Google Authenticator (Android/iPhone)][]
-  [Authy (Android/iPhone)][]
-  [FreeOTP (Android)][]
-  [GAuth Authenticator (Firefox OS, desktop, others)][]

Instructions for installing the authenticator application and enabling 2FA are available on the {{site.data.var.ece}} _Account settings_ page in the Project Web UI.

{:.procedure}
To enable 2FA on your {{site.data.var.ece}} user account:

1. Log in to the [{{site.data.var.ece}} user account][{{site.data.var.ece}} account].

1. On the Cloud projects page, click the **Account settings** tab.

   ![Cloud projects page]({{ site.baseurl }}/common/images/cloud/cloud-account-settings-tab.png){:width="550px"}

1. Click **Security** to access the 2FA configuration settings. Then, click **Set up application**.

   ![Cloud Security settings]({{ site.baseurl }}/common/images/cloud/cloud_account_settings-tfa-setup-app.png){:width="550px"}

1. If you do not have an approved authenticator application on your mobile device, use the linked instructions to install one.

   ![Cloud Security settings]({{ site.baseurl }}/common/images/cloud/cloud_account_settings-tfa-setup-app-options.png){:width="550px"}

1. Add your {{site.data.var.ece}} account to the authenticator application.

   -  On your mobile device, open the authenticator application. Then, add the setup code to the application.

      For example, for Google Authenticator, click the + sign in the application. Then, enter the text code from Adobe in the application, or scan the QR code to enable {{site.data.var.ece}} 2FA.

      ![Cloud 2FA application device setup]({{ site.baseurl }}/common/images/cloud/cloud-2fa-settings-tfa-app-example.png){:width="400px"}

   -  On the _TFA set up - Application_ page, type the 2FA code from your mobile device in the **Application verification code** field.

      ![Cloud 2FA app device setup]({{ site.baseurl }}/common/images/cloud/cloud_account_settings-tfa-setup-steps.png){:width="550px"}

   -  Click **Verify and save**.

      If the code is valid, Adobe sends a notification to the account email address confirming that the account now has 2FA.

1. Optional. Enable _Trusted browser_ settings to cache the authentication code in the browser for 30 days.

   This configuration reduces the number of authentication challenges during project login.

1. Click **Save** or **Skip**.

1. Save the recovery codes.

   -  On the _2FA setup - Recovery_ codes page, copy and save the recovery codes so that you can log into your {{site.data.var.ece}} project when you cannot access your mobile device or authentication application.

     ![Cloud 2FA recovery codes]({{ site.baseurl }}/common/images/cloud/cloud-2fa-settings-tfa-recovery-codes.png){:width="550px"}

   -  Copy the recovery codes to another location or write them down in case you lose access to your device or authentication application.

   -  Click **Save** to save the codes to your account so you can view and manage them from your account security settings.

      {:.bs-callout-warning}
      If you lose access to an account with 2FA and have no recovery codes, you must contact your project administrator, or [submit a Support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) to reset the 2FA application.

1. After completing the 2FA setup, click **Save** to update your account.

1. Authenticate your current session with 2FA.

   -  Log out of your account.

   -  Log in with your username and password.

   -  When prompted, enter the 2FA code for the `accounts.magento.cloud` entry from the authenticator application on your mobile device.

### Manage 2FA configuration and recovery codes

You manage the 2FA configuration for a {{site.data.var.ece}} account from the _Security_ section on the _Account settings_ page.

1. Log in to the {{ site.data.var.ece }} user account.

1. On the Cloud projects page, click the **Account Settings** tab.

1. Click **Security** to view the 2FA configuration options.

   ![Cloud manage 2FA config]({{ site.baseurl }}/common/images/cloud/cloud-account-settings-manage-2fa-config.png){:width="550px"}

1. Use the available links to update the 2FA settings for your {{site.data.var.ece}} account:

   -  Disable 2FA
   -  Reset the authenticator application
   -  Add or remove trusted browsers
   -  View or refresh 2FA recovery codes on account

### Create an API token

An API token can be exchanged for an OAuth 2 access token, which can then be used to authenticate requests.

On projects that have MFA enforcement enabled, you must have an API token to enable SSH access for machine users and automated processes.

{%include cloud/cloud-secure-api-token.md%}

{:.procedure}
To create an API token:

1. Log in to the [{{site.data.var.ece}} account][].

1. On the Cloud projects page, click the **Account settings** tab.

   ![Cloud projects page]({{ site.baseurl }}/common/images/cloud/cloud-account-settings-tab.png){:width="550px"}

1. On the _Account settings_ tab, expand the **API Tokens** section. Then, click **Create an API token**.

   ![Cloud create API token]({{ site.baseurl }}/common/images/cloud/cloud_account_settings-create-api-token.png){:width="550px"}

1. Specify an **Application** name for the token, for example, specify a name that matches the machine user or automated process that uses the API token.

   ![Cloud create API token]({{ site.baseurl }}/common/images/cloud/cloud_account_settings-api-token-app-name.png){:width="550px"}

1. Click **Create API token** to generate the token.

   ![Cloud generate API token]({{ site.baseurl }}/common/images/cloud/cloud_account_settings-api-token-created.png){:width="550px"}

<!--Link references-->

[{{ site.data.var.ece }} account]: https://accounts.magento.cloud/user/
[{{ site.data.var.ece }} user account]: https://account.magento.cloud/user
[Authy (Android/iPhone)]: https://www.authy.com/app/
[enable SSH keys]: {{ site.baseurl }}/cloud/before/before-workspace-ssh.html
[FreeOTP (Android)]: https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp
[GAuth Authenticator (Firefox OS, desktop, others)]: https://github.com/gbraad/gauth
[Google Authenticator (Android/iPhone)]: https://support.google.com/accounts/answer/1066447?hl=en
[Enable MFA for SSH]: {{ site.baseurl }}/cloud/project/project-enable-mfa-enforcement.html
[snapshots]: {{ site.baseurl }}/cloud/project/project-webint-snap.html
