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

The account owner has sole authority over Magento Enterprise Cloud Edition (ECE) to manage your store, project and Git access, and more.

As the account owner, you must complete the following, required by development and technical resources:

* Access to the ECE project through added user accounts
* Generate Magento licensed keys

## What is the account owner {#cloud-owner-over}
After your company licenses the Magento Enterprise Cloud Edition, the only person who has access to it is the *account owner*&mdash;the person who purchased the software. The account owner is typically a "business user"&mdash; someone in the business or finance organization. This is your point of contact with Magento regarding the ECE account overall.

The owner can add accounts to provide access to code, manage branches, enter tickets, and support environments. These user accounts can include in-house development, consultants, and Magento solution specialists.

## Sign up for a Magento EVE account {#cloud-first-acct}
To sign up for a Magento Enterprise Cloud Edition account, contact [Magento Sales](https://magento.com/explore/contact-sales){:target="_blank"}. They will create your account and send you a welcome e-mail that provides instructions to access the project.

The person who signs up for a Magento Enterprise Cloud Edition account is referred to as the *account owner*. You receive a welcome e-mail that enables you to set up the project initially.

## Your welcome e-mail {#cloud-first-email}
After you register for an account, Magento sends you a welcome e-mail at the address at which you registered. The e-mail contains a link to your Magento Enterprise Cloud Edition project.

You can also access your project by logging in to your Magento Enterprise Cloud Edition account.

## Generate authentication keys {#cloud-owner-keys}
Getting the Magento Enterprise Cloud Edition requires authentication keys. Only the account owner can create these keys.

As the account owner, you must create one set of keys for each technical person you expect will work on Magento Enterprise Cloud Edition. Each user must add these keys to their `auth.json` file, which is located in the project root directory.

We recommend against providing the keys over e-mail because it isn't secure; instead, use a company intranet portal or wiki.

To create authentication keys:

{% include cloud/auth-json.md %}

## Create project administrators {#cloud-owner-admins}
As discussed in more detail in [Manage users]({{ page.baseurl }}cloud/project/user-admin.html), Magento ECE has a number of user roles. Typically, the only user the account owner must create is the *project administrator* (also referred to as the super user). This user can create other users and delegate roles as desired.

Before you start, create a list of e-mail address for the users you want to add. New accounts receive an invitation to register with Magento ECE and receive access based on the role. You can add and manage users at any time.

To create project administrators:

1.  Log in to [your Magento Enterprise Cloud Edition account](https://accounts.magento.cloud){:target="_blank"}.
2.  Click the **Projects** tab as the following figure shows.

	![Click the projects tab to access your Cloud project]({{ site.baseurl }}common/images/cloud_account_project.png){:width="550px"}
3.	Click the name of your project (typically, **Untitled Project**).

	The Setting up your project page displays as follows.

	![Cancel project creation]({{ site.baseurl }}common/images/cloud_project_continue-later.png){:width="500px"}

3.  Click **Continue later**. (Someone else can create the project at a later time.)
4.	Click the configure project button next to **Project Title** in the top navigation bar as the following figure shows.

	![Configure the project]({{ site.baseurl }}common/images/cloud_project-configure.png){:width="300px"}
5.	In the right pane, click **Add Users**.

	![Start creating users]({{ site.baseurl }}common/images/cloud_project-config.png){:width="500px"}
6.	Click **Add User**.

	The page displays as follows.

	![]({{ site.baseurl }}common/images/cloud_project-add-superuser.png){:width="500px"}
7.	Enter the following information:

	*	In the first field, enter the user's e-mail address.
	*	Select the **Super User** check box.
8.	Click **Add User**.

The super users you add receive an e-mail inviting them to join the Magento Enterprise Cloud Edition project. The user must follow the prompts to register an account and verify their e-mail address.

Initially, a super user must create the project in any of the following ways:

*	[Create a sample Magento project from a template]({{ page.baseurl }}cloud/access-acct/first-time-setup.html) - **Recommended.** We recommend creating and deploying your initial project using a sample project. You can import existing Magento extensions, code, and data at a later time.
*	[Import an existing Magento project]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-first-steps.html) - Import from existing Magento code and data requires advanced experience.

## Blackfire and New Relic {#cloud-owner-creds}
Your project includes [Blackfire]({{ site.baseurl }}cloud/project/project-integrate-blackfire.html) and [New Relic]({{ site.baseurl }}cloud/project/project-integrate-github.html) services. Your project console displays your credentials for these services. Only the account owner has initial access to the credentials and services. You should provide these credentials to technical and developer resources as needed.

[Blackfire](https://blackfire.io/magento) provides tools for reviewing and optimizing Magento and your store in your environments. The profiler checks every method and call, determining what occurs with performance metrics per step.

[New Relic](https://newrelic.com) provides application metrics and performance information for Staging and Production environments.  This service is not the module or extension and does not provide infrastructure (hardware) monitoring. _Do not install_ the New Relic module with this service in ECE.

### Blackfire credentials
To get your Blackfire credentials:

1.	As the Magento Enterprise Cloud Edition account owner, [log in]({{ page.baseurl }}cloud/project/project-webint-basic.html#project-login) to your Magento Enterprise Cloud Edition project.
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
