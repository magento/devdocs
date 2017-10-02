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

<!--
<div class="bs-callout bs-callout-info" id="info" markdown="1">
This information details the manually steps for setting up your project, account, and environment access for development. If you joined with a free trial, some of the provisioning steps were completed for you. In this case, you can review these steps or use the new onboarding portal.
</div>
-->

To initially set up your {{site.data.var.ece}} project, you need the Project Owner to create the project, add a super user, and generate {{site.data.var.ee}} authentication keys. The account owner has sole authority over the project and account to manage your store, project and Git access, and more.

As the Project Owner, you must complete the following, required by development and technical resources:

* Access to the {{site.data.var.ece}} project through added user accounts
* Generate Magento authentication keys
* Create the project
* Add a project admin account
* Add admin variables

After you have completed those tasks, the project admin can manage development and deployments for you.

## Generate Magento authentication keys {#cloud-owner-keys}
**Important:** This step is required for the Project Owner.

Any developers or users that want to access the project require Magento authentication keys. The Project Owner needs to generate Magento authentication keys (includes 1 public and 1 private) through a Magento Marketplace account for themselves and any other user. Only the Project Owner can create these keys. When you first create your project, you will be prompted to add them.

You must create one set of keys for each technical person you expect will work on {{site.data.var.ee}}. Each user must add these keys to their `auth.json` file, which is located in the project root directory. We recommend against providing the keys over e-mail because it isn't secure. Please find a secure method, working with your IT staff, for distributing the keys.

To create authentication keys through the Magento Marketplace:

1. Log in to the [Magento Marketplace](https://marketplace.magento.com). If you don't have an account, click **Register**.
2. Click your account name in the top-right of the page and select **My Profile**.
3. Click **Access Keys** in the Marketplace tab.

	![Click Access Keys]({{ site.baseurl }}common/images/cloud_access-key.png)
4. Click **Create A New Access Key**. Enter a specific name for the keys, for example CloudProductOwner or the name of the developer receiving the keys.
5. The keys generate a Public and Private key you can click to copy. Save this information or keep the page open when creating your project.

## Create the project {#create-project}
<!-- If the Project Owner did not have their account provisioned through the free trial subscription plan, you may need to create the project manually.-->
The project contains all of your code branches, environments from development to Production, and allows you to manage access and configurations. After the Project Owner has signed up for a plan and logged in from the email, they can begin creating and managing the project.

The Project Owner creates the project, selecting the option for a blank site, which is a fully functional Magento template of a store and code. When created, we generate a `master` branch of Git code from repo.magento.com and add it to a development environment. This environment is `master` production for Starter and `master` Integration for Pro.

If you are concerned with creating the Project, you can create a Technical Admin and have them create the project.

1.  Access your account. You can open the email you received from Magento Cloud, accounts@magento.cloud, and click the Access your project now link. Or you can log in to [your Magento Commerce account](https://accounts.magento.cloud){:target="_blank"}.
2.  Click the **Projects** tab. You should see an untitled new project.
3.  Click the name of your **[Untitled Project]** project and enter a name. Click **Next**.

	![Enter a name for your project]({{ site.baseurl }}common/images/cloud_project_name.png){:width="550px"}

4.  Click **Create a blank site from a template** and click **Continue**. We recommend always starting with the blank site from a template as your initial project option. You will deploy this code across all environments including Staging and Production as part of your [First-time development setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html). If you have an existing Magento deployment, you can later import code, extensions, themes, and data after fully deploying this base Magento code.

	When you initially set up a project from a template, we retrieve the code from the [`magento-cloud-configuration` repository](https://github.com/magento/magento-cloud-configuration){:target="_blank"}, build and deploy it as your Master branch.

	![Create a site using the sample Magento project]({{ site.baseurl }}common/images/cloud_project_template.png){:width="650px"}

5.  When prompted, enter your {{site.data.var.ee}} [authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html) in the provided fields. You created these keys earlier in the Magento Marketplace. Enter the keys and click **Finish**.

	![Enter your authentication keys]({{ site.baseurl }}common/images/cloud-project-magento-auth-creds.png){:width="650px"}

6.  Wait a few minutes while the project deploys. A status of pending displays until completed, similar to the following:

	![Your sample Magento project]({{ site.baseurl }}common/images/cloud_project_template2.png){:width="650px"}

7.  After the project deploys, **Success** displays next to the name of your project.

You should create user accounts to this project for each developer, administrator, and consultant that needs access to the code.

## Create project admins and user accounts {#cloud-owner-admins}
As discussed in more detail in [Manage users]({{ page.baseurl }}cloud/project/user-admin.html), {{site.data.var.ece}} has a number of user roles and permissions available project-wide or per environment.

Typically, the only user the Project Owner must create is the Technical Admin. This user should have the Super User role. Your Technical Admin can create user accounts for developers, set environment permissions, and manage all branches and environments.

Before you start, create a list of e-mail address for the users you want to add. New accounts receive an invitation to register with {{site.data.var.ece}} and receive access based on the role. You can add and manage users at any time.

To create user accounts:

1.  Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2.  Click the **Projects** tab.

	![Click the projects tab to access your Cloud project]({{ site.baseurl }}common/images/cloud_account_project.png){:width="550px"}
3.	Click the name of your project. If you have not named your project, click **Continue Later** to bypass and create a user.
4.	Click the configure project button next to project name in the top navigation bar.

	![Configure the project]({{ site.baseurl }}common/images/cloud_project_gear.png){:width="184px"}
5.	In the right pane, click **Add Users**.

	![Start creating users]({{ site.baseurl }}common/images/cloud_project-config.png){:width="500px"}
6.	Click **Add User**.

	The page displays as follows.

	![Create the account]({{ site.baseurl }}common/images/cloud_project-add-superuser.png){:width="500px"}
7.	Enter the user's e-mail address.
8.	Select the access for the account:

	*	For a project administrator account, select the **Super User** check box. This provides Admin rights for all settings and environments, including creating the project. If not selected, the account has only view options for all environments on a project and requires branch specific permissions.
	*	Select permissions per specific environment (or branch) in the Integration environment: No access, Admin (change settings, execute action, merge code), Contributor (push code), or Reader (view only). As you add active environments, you can modify permissions per user.
8.	Click **Add User**.

The users you add receive an e-mail inviting them to join the {{site.data.var.ece}} project. The user must follow the prompts to register an account and verify their e-mail address. They receive access based on the set project and environment permissions.

## Add admin variables for Admin access {#variables}
Prior to accessing the Magento Admin panel, you need to add Admin variables to the project.

1.  Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2.  Open your project and select a parent branch, for example `master`.
3. Click the Configure environment gear icon.

	![Configure the environment]({{ site.baseurl }}common/images/cloud_project_gear.png){:width="184px"}
4. Select the Variables tab.
5. Click Add Variable.
6. For the Name, enter ADMIN_EMAIL. For the value, enter your Project Owner email address.
7. Click **Add variable**.

After you add the variable, the environment will deploy. Wait until deployment completes before more edits.

Optionally, you can also add variables for ADMIN_USERNAME and ADMIN_PASSWORD. By default, the admin username is `admin`. You should have changed the admin password as an onboarding task, using an email link the Project Owner received.

* Name: ADMIN_USERNAME, Value: admin
* Name: ADMIN_PASSWORD, Value: a password of your choice

## Blackfire and New Relic {#cloud-owner-creds}
Your project includes [Blackfire]({{ site.baseurl }}cloud/project/project-integrate-blackfire.html) and [New Relic]({{ site.baseurl }}cloud/project/project-integrate-github.html) services. Your project console displays your credentials for these services. Only the account owner has initial access to the credentials and services. You should provide these credentials to technical and developer resources as needed.

[Blackfire.io Profiler](https://blackfire.io/magento) provides tools for reviewing and optimizing Magento and your store in your environments. The profiler checks every method and call, determining what occurs with performance metrics per step.

[New Relic APM](https://newrelic.com) provides application metrics and performance information for Staging and Production environments.  This service is not the module or extension and does not provide infrastructure (hardware) monitoring. _Do not install_ the New Relic module with this service in {{site.data.var.ece}}.

### Blackfire credentials
To get your Blackfire Profiler credentials:

1.	As the {{site.data.var.ece}} account owner, [log in]({{ page.baseurl }}cloud/project/project-webint-basic.html#project-login) to your Magento Commerce project.
2.	In the upper right corner, click **&lt;your name>** > **Account Settings** as the following figure shows.

	![Go to account settings]({{ site.baseurl }}common/images/cloud_acct-settings-option.png){:width="650px"}
3.	On your account page, click **View Details** for your project as the following figure shows.

	![View your project details]({{ site.baseurl }}common/images/cloud_blackfire-edit-details.png){:width="200px"}
4.	On your project details page, expand **Blackfire**.

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
* [First-time development setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html)
