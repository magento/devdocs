---
group: cloud
title: Onboarding tasks
version: 2.1
github_link: cloud/onboarding/onboarding-tasks.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /guides/v2.1/cloud/before/before-project-owner.html
  - /guides/v2.2/cloud/before/before-project-owner.html
  - /guides/v2.3/cloud/before/before-project-owner.html
---

After your company purchases a subscription plan for {{site.data.var.ece}}, the
only person who initially has access to the project and code is the Project Owner.

To quickly onboard your project so that you can start developing your site and go
live, you need to complete specific set up steps and onboarding tasks. Typically,
you need the Project Owner to start the process. Technical Admin(s) with super
user access can continue.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you joined us with a 30-day free trial {{site.data.var.ece}} account, we
completed the following first steps for you:

-   Created your Cloud account and project
-   Provisioned the initial environment with a cloned {{site.data.var.ece}} code
    base in a `master` branch
-   Created an environment for the `master` branch with a web server, database, and services
-   Added Magento authentication keys for the Project Owner
-   Added the `ADMIN_EMAIL` and `ADMIN_USERNAME` variables with both set to the
default value: Project Owner email address.
</div>

## Project access and users {#users}
The _Project Owner_ is typically a "business user" in your business or finance
organization that purchased the subscription who is the primary contact for the
Magento Cloud account. The owner can
[add user accounts]({{ page.baseurl }}/cloud/project/user-admin.html#cloud-user-webinterface)
to provide access to code, manage branches, enter tickets, and support
environments. These user accounts can include in-house development, consultants,
and Magento solution specialists.

Typically, the only user the Project Owner must create is the _Technical Admin_.
Set up the Technical Admin user with the Super User role so that the user can
create user accounts for developers, set environment permissions, and
manage all branches and environments. Typically, the Technical Admin is a
developer, consultant, a
[Magento Solution Partner](https://magento.com/find-a-partner){:target="\_blank"}, or yourself.

## Sign up for a Magento Commerce (Cloud) account {#cloud-first-acct}
Don't have a {{site.data.var.ece}} account yet? Sign up for a
[free 30-day trial](https://magento.com/trial){:target="\_blank"} for a Starter
or Pro plan, or contact
[Magento Sales](https://magento.com/explore/contact-sales){:target="\_blank"}.
We will create your account and send you an welcome email with information about
accessing your account.

The person who signs up for a {{site.data.var.ece}} account is referred to as
the _Project Owner_.

## Your welcome e-mail {#email}
After your account is created, Magento sends a welcome email to Project Owner
email address specified during registration. The e-mail contains a link
to the first {{site.data.var.ece}} project on the new account.

You can also access your project by [logging in to your account](https://accounts.magento.cloud){:target="\_blank"}.

## Get started with the Project Web Interface {#project-setup}
When you sign up for a Trial Pro or Starter subscription plan, we provision
your initial environment with a template {{site.data.var.ece}} repository to
develop, build, and manage a Magento Cloud project that can be customized
for your organization.

We provide a [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html)
to manage your project, add user accounts, and get started developing
your store(s). This interface provides a UI for the Project Owner, Technical
Admin, and developers to manage all environments and branches, environment
variables, environment settings, and routes.

After you log in to the new project, we recommend creating an account with Super
User access for a Technical Admin user. With super user access, the Technical
Admin can add user accounts, manage branches, and configure environments.

![Use the Project Web Interface to manage environments]({{ site.baseurl }}/common/images/cloud_project-access.png)

## Sign up for Magento status {#status}
We provide an {{site.data.var.ece}} environment and service status site.
Anyone working on your site and project can subscribe on the site for email
notifications and updates. We recommend subscribing and adding a bookmark to
check the page daily or as needed.

The site location is [https://status.magento.cloud/](https://status.magento.cloud/){:target="\_blank"}.
Scroll to the bottom and click
[Subscribe](http://status.magento.cloud/subscribe){:target="\_blank"} at the
bottom of the page. Complete the prompts with your email address and types of
notifications you want to receive.

The page lists all component and service status. Any issues, updates, and
notices are displayed below these status tables by date. For example, any
slow issues, outages, or upgraded services are listed with important information
and any updates as available.

![All status on the page]({{ site.baseurl }}/common/images/cloud_status.png)

## Access your Magento Admin panel {#admin}
After initial project creation, the first task is to access the Magento Admin
panel and change your password. After completing this task, you can
use the Admin panel to add users, configure your store, and more.

1.  Access the Admin panel to change the password:

    -   We send an email to the Project Owner with the link to your Magento
    Admin panel along with instructions to click the Forgot Password link.

    -   Or you can access a store URL available through the
    [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html).
    For the store URL, add /admin at the end. A login panel displays.

1.  Click the forgot Password link and complete the process to change the password.
1.  Login to the Admin panel using the default username (Project Owner email address)
and the newly changed password.

If you receive an error, you might need to
[set or override]({{ page.baseurl }}/cloud/env/environment-vars_magento.html) the
following variables that specify administrative credentials for the project:
`ADMIN_EMAIL`, `ADMIN_USERNAME`, and `ADMIN_PASSWORD`. These variables are set
automatically on trial accounts.
