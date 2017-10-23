---
layout: default
group: cloud
subgroup: 020_onboarding
title: Prepare project environments
menu_title: Prepare project environments
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/before/before-project-owner.md
---

To initially set up your {{site.data.var.ece}} project, you need the Project Owner to create the project, add a super user, and generate {{site.data.var.ee}} authentication keys. The account owner has sole authority over the project and account to manage your store, project and Git access, and more.

**Important:** The Project Owner is required to complete the following steps:

* Step 1: [Generate Magento authentication keys](#cloud-owner-keys)
* Step 2: [Add admin variables](#variables)
* Step 3: [Create the project](#create-project)
* Step 4: [Add a Technical Admin account](#cloud-owner-admins)

After you have completed those tasks, the Technical Admin can manage development and deployments for you.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you joined us with a 30 day free trial {{site.data.var.ece}} account, we took care of the following first steps. See [Onboarding Portal management]({{page.baseurl}}cloud/onboarding/onboarding-portal.html) for further information and steps.

* Created your Cloud account and project
* Provisioned the initial environment with a cloned {{site.data.var.ece}} code base in a `master` branch
* Created an environment for the `master` branch with a web server, database, and services
* Added Magento authentication keys for the Project Owner
* Add the `ADMIN_EMAIL` variable. You can [add additional variables]({{page.baseurl}}cloud/before/before-project-owner.html#variables) for the default admin account to access the Magento Admin panel.
</div>

## Step 1: Generate Magento authentication keys {#cloud-owner-keys}
Any developers or users that want to access the project require Magento authentication keys. The Project Owner needs to generate Magento authentication keys (includes 1 public and 1 private) through a Magento Marketplace account for the project. When you first create your project, you will be prompted to add them.

To create authentication keys through the Magento Marketplace:

1. Log in to the [Magento Marketplace](https://marketplace.magento.com). If you don't have an account, click **Register**.
2. Click your account name in the top-right of the page and select **My Profile**.
3. Click **Access Keys** in the Marketplace tab.

	![Click Access Keys]({{ site.baseurl }}common/images/cloud_access-key.png)
4. Click **Create A New Access Key**. Enter a specific name for the keys, for example CloudProductOwner or the name of the developer receiving the keys.
5. The keys generate a Public and Private key you can click to copy. Save this information or keep the page open when creating your project.

## Step 2: Add admin variables for Admin access {#variables}
Before creating the project, you must add a project variable for `ADMIN_EMAIL`. This sets the Magento Admin administrator account email. We use this email when resetting the administrator account password. The variable is added to the entire project and saved with every branch and environment.

You can set up the following variables:

* `ADMIN_EMAIL`: Required. You must enter an accessible email address for the default Magento Admin administrator account.
* `ADMIN_USERNAME`: The default hardcoded value is `admin`. You can optionally add a variable to change this username.
* `ADMIN_PASSWORD`: We generate a random password you are prompted to reset by email. You can optionally change the password by variable or use the _Forgot Password?_ link on the Magento Admin for the store.

To add project variables for the administrator account:

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the Configure environment gear icon ![Configure your environment]({{ site.baseurl }}common/images/cloud_edit-project.png) next to the Project name. If you are asked to create the project, click Continue Later.

	![Project without code]({{ site.baseurl }}common/images/cloud_project_empty.png)

4. Select the **Variables** tab.
5. Click **Add Variable**.
6. For the **Name**, enter `ADMIN_EMAIL`. For the **Value**, enter your Project Owner email address or another accessible email for resetting the password for the default admin account.

	![Project variable]({{ site.baseurl }}common/images/cloud_project_variable.png)

7. Click **Add variable**. After you add the variable, the environment will deploy. Wait until deployment completes before more edits.

Optionally, you can also add variables for ADMIN_USERNAME and ADMIN_PASSWORD. By default, the admin username is `admin`. You should have changed the admin password as an onboarding task, using an email link the Project Owner received.

* Name: `ADMIN_USERNAME`, Value: admin username of your choice
* Name: `ADMIN_PASSWORD`, Value: a password of your choice

## Step 3: Create the project {#create-project}
The project contains all of your code branches, environments from development to Production, and allows you to manage access and configurations. After the Project Owner has signed up for a plan and logged in from the email, they can begin creating and managing the project.

The Project Owner creates the project, selecting the option for a blank site, which is a fully functional Magento template of a store and code. When created, we do the following:

* Generate a `master` branch of Git code from the Magento template at [`magento-cloud-configuration` repository](https://github.com/magento/magento-cloud-configuration){:target="_blank"}
* Add the authentication key information to `auth.json` in your `master` Git branch. When you clone and branch from `master`, the Magento authentication keys are carried over in `auth.json`.
* For Starter, add it to a Production environment for `master`
* For Pro, add it to an Integration environment for `master`

If you are concerned with creating the Project, you can create a [Technical Admin](#cloud-owner-admins) and have them create the project. These instructions are for an account with one project. If you are a Magento Solution Partner,

1. Access your account. You can open the email you received from Magento Cloud (accounts@magento.cloud) and click the _Access your project now_ link. Or you can log in to [your Magento Commerce account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the _This project has no code yet_ link next to the Project name.

	![Project without code]({{ site.baseurl }}common/images/cloud_project_empty.png)

3. Enter a name for the project.

	![Project name]({{ site.baseurl }}common/images/cloud_project_name.png)

4. Click **Create a blank site from a template** and click **Continue**. We recommend starting with the Magento template as your initial project option. If you have an existing Magento deployment, you can later import code, extensions, themes, and data after fully deploying this base Magento code.

	![Create a site using the sample Magento project]({{ site.baseurl }}common/images/cloud_project_template.png){:width="650px"}

4. When prompted, enter your {{site.data.var.ee}} [Magento authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html) in the provided fields. You created these keys earlier in the Magento Marketplace. Enter the private and public keys and click **Finish**.

	![Enter your authentication keys]({{ site.baseurl }}common/images/cloud-project-magento-auth-creds.png){:width="650px"}

	The keys are added to the `auth.json` file in the repository `master` branch, required for all created branches and deployments.

5. Wait a few minutes while the project deploys. A status of _Pending_ displays until completed, similar to the following:

	![Your sample Magento project]({{ site.baseurl }}common/images/cloud_project_template2.png){:width="650px"}

6. After the project deploys, **Success** displays next to the name of your project.

## Step 4: Create project admins and user accounts {#cloud-owner-admins}
You can now create user accounts to this project for a Technical Admin (super user), developers, administrators, and consultants that need access to the code. As discussed in more detail in [Manage users]({{ page.baseurl }}cloud/project/user-admin.html), {{site.data.var.ece}} has a number of user roles and permissions available project-wide or per environment.

Typically, the only user the Project Owner must create is the Technical Admin. This user should have the Super User role. Your Technical Admin can create user accounts for developers, set environment permissions, and manage all branches and environments.

Before you start, create a list of e-mail address for the users you want to add. New accounts receive an invitation to register with {{site.data.var.ece}} and receive access based on the role. You can add and manage users at any time.

To create user accounts:

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the configure project button next to project name in the top navigation bar.

	![Configure the project]({{ site.baseurl }}common/images/cloud_project_gear.png){:width="184px"}
3. In the right pane, click **Add Users**.

	![Start creating users]({{ site.baseurl }}common/images/cloud_project-config.png){:width="500px"}
4. Click **Add User**.

	![Create the account]({{ site.baseurl }}common/images/cloud_project-add-superuser.png){:width="500px"}
5. Enter the user's e-mail address.
6. Select the access for the account:

	*	For a project administrator account, select the **Super User** check box. This provides Admin rights for all settings and environments, including creating the project. If not selected, the account has only view options for all environments on a project and requires branch specific permissions.
	*	Select permissions per specific environment (or branch):

		*	No access
		*	Admin (change settings, execute action, merge code)
		*	Contributor (push code), or Reader (view only)
7. Click **Add User**.

As you add environments and branches, you can modify user permissions as needed. Added users receive an e-mail inviting them to join the {{site.data.var.ece}} project. The user must follow the prompts to register an account and verify their e-mail address. They receive access based on the set project and environment permissions.

## Blackfire and New Relic {#cloud-owner-creds}
Your project includes [Blackfire]({{ site.baseurl }}cloud/project/project-integrate-blackfire.html) and [New Relic]({{ site.baseurl }}cloud/project/project-integrate-github.html) services. Your project console displays your credentials for these services. Only the account owner has initial access to the credentials and services. You should provide these credentials to technical and developer resources as needed.

[Blackfire.io Profiler](https://blackfire.io/magento) provides tools for reviewing and optimizing Magento and your store in your environments. The profiler checks every method and call, determining what occurs with performance metrics per step.

[New Relic APM](https://newrelic.com) provides application metrics and performance information for Staging and Production environments.  This service is not the module or extension and does not provide infrastructure (hardware) monitoring. _Do not install_ the New Relic module with this service in {{site.data.var.ece}}.

### Blackfire credentials
To get your Blackfire Profiler credentials:

1. As the {{site.data.var.ece}} account owner, [log in]({{ page.baseurl }}cloud/project/project-webint-basic.html#project-login) to your Magento Commerce project.
2. In the upper right corner, click **&lt;your name>** > **Account Settings** as the following figure shows.

	![Go to account settings]({{ site.baseurl }}common/images/cloud_acct-settings-option.png)
3. On your account page, click **View Details** for your project as the following figure shows.

	![View your project details]({{ site.baseurl }}common/images/cloud_blackfire-edit-details.png){:width="200px"}
4. On your project details page, expand **Blackfire**.

	Your Blackfire credentials display similar to the following.

	![Your Blackfire credentials]({{ site.baseurl }}common/images/cloud_blackfire-account-info.png){:width="450px"}

### New Relic credentials
Your New Relic APM credentials are displayed on the same page as Blackfire. You may receive the initial New Relic invitiation through an e-mail. You can create New Relic users and provide that information to your technical resources responsible for administering New Relic.

#### Related topics

*	[{{site.data.var.ece}} requirements]({{page.baseurl}}cloud/requirements/cloud-requirements.html)
*	Pro information:

	* [Pro Architecture]({{page.baseurl}}cloud/reference/discover-arch.html)
	*	[Pro Develop and Deploy Workflow]({{page.baseurl}}cloud/welcome/discover-workflow.html)
*	Starter information:

	* [Starter Architecture]({{page.baseurl}}cloud/basic-information/starter-architecture.html)
	*	[Starter Develop and Deploy Workflow]({{page.baseurl}}cloud/basic-information/starter-develop-deploy-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
* [First-time local environment setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html)
