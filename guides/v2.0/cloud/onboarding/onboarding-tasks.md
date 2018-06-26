---
group: cloud
subgroup: 020_onboarding
title: Onboarding tasks
menu_title: Onboarding tasks
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/onboarding/onboarding-tasks.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /guides/v2.0/cloud/before/before-project-owner.html
---

After your company purchases a subscription plan for {{site.data.var.ece}}, the only person who initially has access to the project and code is the Project Owner.

To quickly onboard your project to start developing your site and going live, you need to complete specific set up steps and onboarding tasks. Typically, you need the Project Owner to start. Technical Admin(s) with super user access can continue.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you joined us with a 30-day free trial {{site.data.var.ece}} account, we completed the following first steps for you:

-   Created your Cloud account and project
-   Provisioned the initial environment with a cloned {{site.data.var.ece}} code base in a `master` branch
-   Created an environment for the `master` branch with a web server, database, and services
-   Added Magento authentication keys for the Project Owner
-   Add the `ADMIN_EMAIL` variable. You can [add additional variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var) for the default admin account to access the Magento Admin panel.
</div>

## Project access and users {#users}
The _Project Owner_ is typically a "business user" in your business or finance organization that purchased the subscription and is your point of contact with Magento regarding the account overall. The owner can add user accounts to provide access to code, manage branches, enter tickets, and support environments. These user accounts can include in-house development, consultants, and Magento solution specialists.

Typically, the only user the Project Owner must create is the _Technical Admin_. This user should have a user account with the Super User role. Your Technical Admin can create user accounts for developers, set environment permissions, and manage all branches and environments. Typically, the Technical Admin is a developer, consultant, a [Magento Solution Partner](https://magento.com/find-a-partner){:target="\_blank"}, or yourself.

## Sign up for a Magento Commerce (Cloud) account {#cloud-first-acct}
Don't have a {{site.data.var.ece}} account yet? Sign up for a [free 30-day trial](https://magento.com/trial){:target="\_blank"} for a Starter or Pro plan, or contact [Magento Sales](https://magento.com/explore/contact-sales){:target="\_blank"}. We will create your account and send you a welcome e-mail that provides instructions to access the project.

The person who signs up for a {{site.data.var.ece}} account is referred to as the _Project Owner_. You receive a welcome e-mail that enables you to set up the project initially. You can also access your project by [logging in to your account](https://accounts.magento.cloud){:target="\_blank"}.

## Your welcome e-mail {#email}
After you register for an account, Magento sends you a welcome e-mail at the address at which you registered. The e-mail contains a link to your {{site.data.var.ece}} project.

You can also access your project by [logging in to your account](https://accounts.magento.cloud){:target="\_blank"}.

## Get started with the Project Web Interface {#project-setup}
When you sign up for a Trial Pro or Starter subscription plan, we provision your initial environment with a template {{site.data.var.ece}} repository.

We provide a [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html) for you to manage your project, add user accounts, and get started developing your store(s). This interface provides a UI for the Project Owner, Technical Admin, and developers to manage all environments and branches, environment variables, environment settings, and routes.

We recommend creating a user account with Super User access as your Technical Admin. With super user access, they can help add user accounts, manage branches, and configure environments.

![Use the Project Web Interface to manage environments]({{ site.baseurl }}/common/images/cloud_project-access.png)

## Sign up for Magento status {#status}
We provide an {{site.data.var.ece}} environment and service status site. Anyone working on your site and project can subscribe on the site for email notifications and updates. We recommend subscribing and adding a bookmark to check the page daily or as needed.

The site location is [https://status.magento.cloud/](https://status.magento.cloud/){:target="\_blank"}. Scroll to the bottom and click [Subscribe](http://status.magento.cloud/subscribe){:target="\_blank"} at the bottom of the page. Complete the prompts with your email address and types of notifications you want to receive.

The page lists all component and service status. Any issues, updates, and notices are displayed below these status tables by date. For example, any slow issues, outages, or upgraded services are listed with important information and any updates as available.

![All status on the page]({{ site.baseurl }}/common/images/cloud_status.png)

## Access your Magento Admin panel {#admin}
When you initially create your project, you can access the Magento Admin panel to add users, configure your store, and more. To initially access the Magento Admin, you have a couple of options.

1.  Access the Admin panel to change the password:

    -   We send an email to the Project Owner with the link to your Magento Admin panel with instructions to click the Forgot Password link.

    -   Or you can access a store URL available through the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html). For the store URL, add /admin at the end. A login panel displays.

1.  Click the forgot Password link and complete the process to change the password.
1.  Login to the Admin panel using the username Admin and newly changed password.

If you receive an error, you may need to add admin variables for `ADMIN_EMAIL`, `ADMIN_USERNAME`, and `ADMIN_PASSWORD`. Trial accounts should already have the `ADMIN_EMAIL` variable configured for them.
