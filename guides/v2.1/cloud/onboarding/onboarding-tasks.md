---
group: cloud-guide
title: Onboarding tasks
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

The _Project Owner_  is the person in your business or finance
organization that manages payments and other business-related issues for
the {{site.data.var.ece}} account. The Project Owner serves as the point of
contact with Magento.

To quickly onboard your project so you can develop your site for live
deployment, you need to complete specific set up steps and onboarding tasks.
Typically, the Project Owner begins the process by securing Admin access and
creating Technical Admin users that can help with set up, customization, and
development work.

## Project portal

Once you have an account, you can use the Magento Project Portal to manage the
project for your {{site.data.var.ece}} store. The portal provides a Getting Started guide
and an interactive workflow that helps project administrators, business users,
and developers with the tasks required to develop, build, test, and launch your
site.

**Open the Magento Project Portal**

1. Log in to your Magento account.

2. On the My Account page, click the Magento tab to see the projects in your account.

3. **Click View Project Page** in the
[Projects section](https://cloud.magento.com/cloud/project/subscriptions/).

## Sign up for a {{site.data.var.ece}} account {#cloud-first-acct}

Don't have a {{site.data.var.ece}} account yet? Contact [Magento Sales](https://magento.com/explore/contact-sales).
We will create your account and send you a welcome email that provides instructions to access the project.

The person who signs up for a {{site.data.var.ece}} account is referred to as
the _License Owner_.

## Your welcome e-mail {#email}

Magento sends a welcome email to the License Owner using the address that was
provided during the sign up process. The email contains a link to access your
{{site.data.var.ece}} project and complete initial project set up.

You can also access your project by [logging in to your account](https://accounts.magento.cloud).

## Project access and users {#users}

The License Owner can add user accounts to provide access to code, manage
branches, enter tickets, and support environments. These user accounts can
include in-house development, consultants, and Magento solution specialists.

Typically, the only user the License Owner must create is the _Technical Admin_.
The Technical Admin needs a user account with admin access to create user
accounts for developers, set environment permissions, and
manage all branches and environments. The Technical Admin can be a developer,
a consultant, a [Magento Solution Partner](https://magento.com/find-a-partner),
or yourself.

You can create a Technical Admin through the Project portal, from the Project
Web interface, or from the command line using the Magento Cloud CLI. For details
on using the web interface and command line,
see [Create and manage users]({{ page.baseurl }}/cloud/project/user-admin.html).

## Get started with the Project Web Interface {#project-setup}

When you sign up for a Pro or Starter subscription plan, we provision
your initial project environment with a template {{site.data.var.ece}}
repository to build and manage your site. For information about what is included
in Pro and Starter plans, see [Starter Architecture]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html) and [Pro Architecture]({{ page.baseurl }}/cloud/architecture/pro-architecture.html).

You can use the Project Web Interface to manage your project, add user accounts,
and begin developing your store(s). The License Owner, Technical Admin users,
and developers can use this interface to manage all environments and branches,
environment variables, environment settings, and routes.

![Use the Project Web Interface to manage environments]({{ site.baseurl }}/common/images/cloud_project-access.png)

For details, see [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html).

## Sign up for Magento status {#status}

Get updates about {{site.data.var.ece}}
platform environments and related services from the
[Status page](https://status.magento.cloud).

The page lists current status for all {{site.data.var.ece}} components and
services followed by notifications about incident reports, service upgrades,
planned outages, and more. These notifications are ordered by date.

![All status on the page]({{ site.baseurl }}/common/images/cloud_status.png)

Anyone working on your project can subscribe to the {{site.data.var.ece}}
status site to receive event notifications and updates through email. You can
customize your subscription to select only the platform and services that you
want to track. Sign up from the
[Subscription page](https://status.magento.cloud/subscribe).

## Access your Magento Admin panel {#admin}

Users that have administrative access to the Admin panel can add users, configure store services, complete store set up and customization work, and more.

For a new project, the first step after getting the welcome email is to secure Admin access to the project by changing the password on the License Owner
account. The default username for this account is the License Owner email address.

You can submit a password change request using either of the following methods:

-   Locate the welcome email sent to the License Owner email address and
    follow the link to change your password.

-   Copy the store URL from the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html)
    into a browser. Then, append `/admin` to the end of the URL to open
    the sign in page. Click the **Forgot password?** link to send a password
    change request to the License Owner email address.

After you submit the password change request, check your email for the password
reset notification. If you do not get the email, check your spam folder.

{: .bs-callout .bs-callout-tip}
If the password reset fails or you cannot sign in to the Admin panel, a user with admin access can connect to the project using ssh and add a new admin user using the Magento CLI [admin:user:create command]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html#create-or-edit-an-administrator).
