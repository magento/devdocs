---
layout: default
group: cloud
subgroup: 020_onboarding
title: Onboarding tasks
menu_title: Onboarding tasks
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/onboarding/onboarding-tasks.md
---

After your company purchases a subscription plan for {{site.data.var.ece}}, the only person who initially has access to the project and code is the Project Owner.

To quickly onboard your project to start developing your site and going live, you need to complete specific set up steps and onboarding tasks. Typically, you need the Project Owner to start. Technical Admin(s) with super user access can continue.

## Project access and users {#users}
The _Project Owner_ is typically a "business user" in your business or finance organization that purchased the subscription and is your point of contact with Magento regarding the account overall. The owner can add user accounts to provide access to code, manage branches, enter tickets, and support environments. These user accounts can include in-house development, consultants, and Magento solution specialists.

Typically, the only user the Project Owner must create is the _Technical Admin_. This user should have a user account with the Super User role. Your Technical Admin can create user accounts for developers, set environment permissions, and manage all branches and environments. Typically, the Technical Admin is a developer, consultant, a [Magento Solution Partner](https://magento.com/find-a-partner){:target="_blank"}, or yourself.

<!-- <div class="bs-callout bs-callout-info" id="info" markdown="1">
If you joined us with a 30 day free trial {{site.data.var.ece}} account, we took care of the first steps:

* Created your account
* Provisioned the initial environment with a cloned {{site.data.var.ece}} code base in a `master` branch
* Created an environment for the `master` branch
* Added Magento authentication keys for the Project Owner
</div> -->

## Sign up for a Magento Commerce (Cloud) account {#cloud-first-acct}
Don't have a {{site.data.var.ece}} account yet? Sign up for a [free 30-day trial](https://magento.com/trial){:target="_blank"} for a Starter or Pro plan, or contact [Magento Sales](https://magento.com/explore/contact-sales){:target="_blank"}. We will create your account and send you a welcome e-mail that provides instructions to access the project.

The person who signs up for a {{site.data.var.ece}} account is referred to as the _Project Owner_. You receive a welcome e-mail that enables you to set up the project initially. You can also access your project by [logging in to your account](https://accounts.magento.cloud){:target="_blank"}.

## Your welcome e-mail {#email}
After you register for an account, Magento sends you a welcome e-mail at the address at which you registered. The e-mail contains a link to your {{site.data.var.ece}} project.

You can also access your project by [logging in to your account](https://accounts.magento.cloud){:target="_blank"}.

## Get started with the Project Web Interface {#project-setup}
<!-- When you sign up for a trial Pro or Starter subscription plan, we provisioned your initial environment with a template {{site.data.var.ece}} repository. This repo is called `master` with a full environment in a Platform-as-a-Servie (PaaS) environment. Each active environment includes an active Git branch of code, web server, database, and services to fully test your Magento deployments. -->
We provide a Project Web Interface for you to create your project, add user accounts, and get started developing your store(s). This [web interface]({{page.baseurl}}cloud/env/environments.html) is helpful for the Technical Admin and developers to manage all environments and branches, environment variables, environment settings, and routes.

For details on these environments, see [Starter]({{page.baseurl}}cloud/basic-information/starter-architecture.html) and [Pro]({{page.baseurl}}cloud/reference/discover-arch.html) architecture information.

To access and manage your project environments, the Project Owner needs to:

* Create the project
* Add user accounts to invite developers to the project
* Generate and provide Magento authentication keys to added accounts
* Review credentials for integrated services

We recommend creating a user account with Super User access as your Technical Admin. With super user access, they can help add user accounts, manage branches, and configure environments.

For detailed instructions for setting up environments, see [Prepare project environments]({{page.baseurl}}cloud/before/before-project-owner.html). For more information on the interface, see [Manage your project]({{page.baseurl}}cloud/project/projects.html). This interface provides full project and environment management including environment settings, environment variables, routes, and deploying to Staging and Production for Starter and Pro.

![Use the Project Web Interface to manage environments]({{ site.baseurl }}common/images/cloud_project-access.png)

## Access your Magento Admin panel {#admin}
When you initially create your project, you can access the Magento Admin panel to add users, configure your store, and more. URLs to access your store are available through [Project Web Interface]({{page.baseurl}}cloud/project/projects.html).

For the store URL, add /admin at the end. A login panel displays. We provide an general Admin account to initially login. The default username is admin and password is admin12. You should immediately change the password.

These values are controlled through the Admin Panel and the environment application variables for ADMIN_USERNAME and ADMIN_PASSWORD. For details, see [Magento application environment variables]({{page.baseurl}}cloud/env/environment-vars_magento.html).

## Coming soon: Onboarding Portal {#portal}
<!-- (http://cloud.magento.com){:target="_blank"} -->
We will provide a new Onboarding Portal to initially set up your project and get you started. The portal will be a web interface allowing the Project Owner to initially start settings up the project and understand the onboarding process for {{site.data.var.ece}}.

This portal is helpful for business and technical users to review and manage a new project from creation to initial launch.

Depending on your subscription plan, you can:

* Add a technical admin with super user access
* (Pro) Complete a provisioning form for Staging and Production
* Review checklists for workflows including development, UAT testing, and launching live
* Create a high-level project schedule
* Access the [Project Web Interface](https://accounts.magento.cloud){:target="_blank"} for your environments
* Kick off going live
* Enter support tickets

<!-- For detailed information on the portal, see [Onboarding Portal management]({{page.baseurl}}cloud/onboarding/onboarding-portal.html).
-->
![Use the onboarding portal to get started]({{ site.baseurl }}common/images/cloud_onboard-portal.png)

#### Related topics
<!-- * [Onboarding Portal management]({{page.baseurl}}cloud/onboarding/onboarding-portal.html) -->
* [Prepare project environments]({{page.baseurl}}cloud/before/before-project-owner.html)
* [Starter architecture]({{page.baseurl}}cloud/basic-information/starter-architecture.html)
* [Pro architecture]({{page.baseurl}}cloud/reference/discover-arch.html)
* [Welcome to Magento Commerce (Cloud)]({{page.baseurl}}cloud/bk-cloud.html)
