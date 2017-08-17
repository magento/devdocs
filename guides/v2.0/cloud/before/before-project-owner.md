---
layout: default
group: cloud
subgroup: 060_setup
title: Account owner tasks
menu_title: Account owner tasks
menu_order: 1
menu_node: parent
version: 2.1
github_link: cloud/before/before-project-owner.md
---

The account owner has sole authority over Magento Commerce to manage your store, project and Git access, and more.

As the account owner, you must complete the following, required by development and technical resources:

* Access to the Magento Commerce (Cloud) project through added user accounts
* Generate Magento authentication keys
* Create the project
* Add a project admin account

## What is the account owner {#cloud-owner-over}
After your company licenses the Magento Commerce, the only person who has access to it is the *account owner*&mdash;the person who purchased the software. The account owner is typically a "business user"&mdash; someone in the business or finance organization. This is your point of contact with Magento regarding the account overall.

The owner can add accounts to provide access to code, manage branches, enter tickets, and support environments. These user accounts can include in-house development, consultants, and Magento solution specialists.

## Sign up for a Magento Cloud account {#cloud-first-acct}
To sign up for a Magento Commerce account, contact [Magento Sales](https://magento.com/explore/contact-sales){:target="_blank"}. They will create your account and send you a welcome e-mail that provides instructions to access the project.

The person who signs up for a Magento Commerce account is referred to as the *account owner*. You receive a welcome e-mail that enables you to set up the project initially.

## Your welcome e-mail {#cloud-first-email}
After you register for an account, Magento sends you a welcome e-mail at the address at which you registered. The e-mail contains a link to your Magento Commerce (Cloud) project.

You can also access your project by [logging in to your account](https://accounts.magento.cloud){:target="_blank"}.

## Generate authentication keys {#cloud-owner-keys}
To access the project, you need to generate Magento authentication keys (includes 1 public and 1 private) through your Magento Marketplace account. Only the account owner can create these keys and will be prompted to add them when creating the initial project.

As the account owner, you must create one set of keys for each technical person you expect will work on Magento Commerce. Each user must add these keys to their `auth.json` file, which is located in the project root directory. We recommend against providing the keys over e-mail because it isn't secure. Please find a secure method, working with your IT staff, for distributing the keys.

To create authentication keys through the Magento Marketplace:

1. Log in to the [Magento Marketplace](https://marketplace.magento.com).
2. Click your account name in the top-right of the page and select **My Profile**.
3. Click **Access Keys** in the Marketplace tab.
4. Click Create A New Access Key. Enter a specific name for the keys, for example CloudProductOwner or the name of the developer receiving the keys.
5. The keys generate  a Public and Private key you can click to copy. Save this information or keep the page open when creating your project.

## Create the project {#create-project}
If you are concerned with creating the Project, you can create a Project Administrator. This account with Super User access can create the project for you.

1.  Access your account. You can open the email you received from Magento Cloud, accounts@magento.cloud, and click the Access your project now link. Or you can log in to [your Magento Commerce account](https://accounts.magento.cloud){:target="_blank"}.
2.  Click the **Projects** tab. You should see an untitled new project.
3.  Click the name of your **[Untitled Project]** project and enter a name. Click **Next**.

	![Enter a name for your project]({{ site.baseurl }}common/images/cloud_project_name.png){:width="550px"}

4.  Click **Create a blank site from a template** and click **Continue**. We recommend always starting with the blank site from a template as your initial project option. Completely deploy this code across your entire environment from Integration to Staging to Production for a clear experience with deployment in Magento Commerce. If you have an existing Magento deployment, import code, extensions, themes, and data after fully deploying this base Magento code.

	When you initially set up a project from a template, we retrieve the code from the [`magento-cloud-configuration` repository](https://github.com/magento/magento-cloud-configuration){:target="_blank"}, build and deploy it as your Master branch.

	![Create a site using the sample Magento project]({{ site.baseurl }}common/images/cloud_project_template.png){:width="650px"}

5.  When prompted, enter your Magento EE [authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html) in the provided fields. You created these keys earlier in the Magento Marketplace. Enter the keys and click **Finish**.

	![Enter your authentication keys]({{ site.baseurl }}common/images/cloud-project-magento-auth-creds.png){:width="650px"}

6.  Wait a few minutes while the project deploys. A status of pending displays until completed, similar to the following:

	![Your sample Magento project]({{ site.baseurl }}common/images/cloud_project_template2.png){:width="650px"}

7.  After the project deploys, **Success** displays next to the name of your project.

You should create user accounts to this project for each developer, administrator, and consultant that needs access to the code.

## Create project admins and user accounts {#cloud-owner-admins}
As discussed in more detail in [Manage users]({{ page.baseurl }}cloud/project/user-admin.html), Magento Commerce (Cloud) has a number of user roles and permissions available project-wide or per environment.

Typically, the only user the account owner must create is the *project administrator* (also referred to as the super user). This user can create other users and delegate roles as desired.

Before you start, create a list of e-mail address for the users you want to add. New accounts receive an invitation to register with Magento Commerce (Cloud) and receive access based on the role. You can add and manage users at any time.

To create user accounts:

1.  Log in to [your Magento Commerce account](https://accounts.magento.cloud){:target="_blank"}.
2.  Click the **Projects** tab as the following figure shows.

	![Click the projects tab to access your Cloud project]({{ site.baseurl }}common/images/cloud_account_project.png){:width="550px"}
3.	Click the name of your project. If you have not named your project, click **Continue Later** to bypass and create a user.
4.	Click the configure project button next to project name in the top navigation bar as the following figure shows.

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

The users you add receive an e-mail inviting them to join the Magento Commerce project. The user must follow the prompts to register an account and verify their e-mail address. They receive access based on the set project and environment permissions.

## Blackfire and New Relic {#cloud-owner-creds}
Your project includes [Blackfire]({{ site.baseurl }}cloud/project/project-integrate-blackfire.html) and [New Relic]({{ site.baseurl }}cloud/project/project-integrate-github.html) services. Your project console displays your credentials for these services. Only the account owner has initial access to the credentials and services. You should provide these credentials to technical and developer resources as needed.

[Blackfire](https://blackfire.io/magento) provides tools for reviewing and optimizing Magento and your store in your environments. The profiler checks every method and call, determining what occurs with performance metrics per step.

[New Relic](https://newrelic.com) provides application metrics and performance information for Staging and Production environments.  This service is not the module or extension and does not provide infrastructure (hardware) monitoring. _Do not install_ the New Relic module with this service in Magento Commerce.

### Blackfire credentials
To get your Blackfire credentials:

1.	As the Magento Commerce (Cloud) account owner, [log in]({{ page.baseurl }}cloud/project/project-webint-basic.html#project-login) to your Magento Commerce project.
2.	In the upper right corner, click **&lt;your name>** > **Account Settings** as the following figure shows.

	![Go to account settings]({{ site.baseurl }}common/images/cloud_acct-settings-option.png){:width="650px"}
3.	On your account page, click **View Details** for your project as the following figure shows.

	![View your project details]({{ site.baseurl }}common/images/cloud_blackfire-edit-details.png){:width="200px"}
4.	On your project details page, expand **Blackfire**.

	Your Blackfire credentials display similar to the following.

	![Your Blackfire credentials]({{ site.baseurl }}common/images/cloud_blackfire-account-info.png){:width="450px"}

### New Relic credentials
Your New Relic credentials are displayed on the same page as Blackfire. You may receive the initial New Relic invitiation through an e-mail. You can create New Relic users and provide that information to your technical resources responsible for administering New Relic.

#### Related topics
[Set up a project and dev workspace]({{ page.baseurl }}cloud/access-acct/first-time-setup.html)
