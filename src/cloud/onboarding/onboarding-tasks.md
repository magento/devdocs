---
group: cloud-guide
title: Onboarding tasks
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/before/before-project-owner.html
  - /cloud/onboarding/onboarding-portal.html
---

After your company purchases a {{site.data.var.ece}} subscription, initial project and code access is available only to the person designated as the License Owner (Account Owner).

The _License Owner_ is the person in your business or finance organization that manages payments and other business-related issues for the {{site.data.var.ece}} account. This person serves as the point of contact with Magento.

To quickly onboard your project, so you can begin developing your site for live deployment, you must complete required setup and onboarding tasks. Typically, the License Owner begins the process by securing Admin access and creating Technical Admin users that can help with setup, customization, and development work.

{:.bs-callout-info}
If you need to change the License owner on your account, you must submit a Magento Support ticket.

## Sign up for a Cloud account {#cloud-first-acct}

If you do not have a {{site.data.var.ece}} account, contact [Magento Sales][]. We will create your account and send you a welcome email that provides instructions to access the project.

The person who signs up for a {{site.data.var.ece}} account is referred to as the _License Owner_.

## Your welcome email {#email}

Magento sends a welcome email to the License Owner using the address that was provided during the sign up process. The email contains a link to access your {{site.data.var.ece}} project so you can complete initial project setup.

You can access your project by logging in to [your {{site.data.var.ece}} account][].

## Cloud Project portal (Onboarding UI)

Use the {{site.data.var.ece}} Project Portal (Onboarding UI) to help project administrators, business users, and developers with the tasks required to develop, build, test, and launch your site.

-  Access your Cloud environments, site, and Magento Admin
-  Add a Technical Admin, a super user to help manage your project and branches
-  Access your project environments, including a link to the Project Web Interface
-  Provide your developer with a getting started workflow to set up their local development environments and begin developing
-  Complete a quick user acceptance test (UAT) checklist with links to further tests

{:.procedure}
To open the Cloud Project portal:

1. Log in to [your {{site.data.var.ece}} account][].

1. On the _My Account_ page, click the Magento tab to see the projects in your account.

1. **Click View Project Page** in the [Projects section][].

1. Click the name of your project to open the Cloud Project portal (Onboarding UI).

   ![Cloud project portal]({{ site.baseurl }}/common/images/cloud/cloud_project-onboarding-ui.png){:width="650px"}

   Browse through the portal to find helpful information and options to start planning your project, developing, code, and preparing for UAT and site launch.

## Project access and users {#users}

The License Owner can add user accounts to provide access to code, manage
branches, enter tickets, and support environments. These user accounts can include in-house development, consultants, and Magento solution specialists.

Typically, the only user the License Owner must create is the _Technical Admin_. The Technical Admin needs a user account with admin access to create user accounts for developers, set environment permissions, and manage all branches and environments. The Technical Admin can be a developer, a consultant, a [Magento Solution Partner][], or yourself.

You can create a Technical Admin through the Project portal, from the Project Web interface, or from the command line using the Magento Cloud CLI. For details on using the web interface and command line, see [Manage user access to Cloud projects][].

### User registration

You can only add registered Magento users to your {{site.data.var.ece}} projects and environments. If you have a user that is new to Magento, ask them to [register for an account][] and to provide the email address associated with their account profile.

### Set up shared account access

The License owner can set up shared access for the Magento account. Shared access allows trusted employees and service providers to use the Magento Help center to submit and track Support tickets related to your {{site.var.data.ece}} projects. For setup instructions, see the [Shared Access][] article in the Magento Help Center.

## Get started with the Project Web Interface {#project-setup}

When you sign up for a Pro or Starter subscription plan, we provision your initial project environment with a template {{site.data.var.ece}} repository to build and manage your site. For information about what is included in Pro and Starter plans, see [Starter Architecture][] and [Pro Architecture][].

You can use the Project Web Interface to manage your project, add user accounts, and begin developing your store(s). The License Owner, Technical Admin users, and developers can use this interface to manage all environments and branches, environment variables, environment settings, and routes.

![Use the Project Web Interface to manage environments]({{ site.baseurl }}/common/images/cloud/cloud_project-access.png)

See [Project Web Interface][].

## Access your Magento Admin panel {#admin}

Users that have administrative access to the Admin panel can add users, configure store services, complete store setup and customization work, and more.

For a new project, the first step after getting the welcome email is to secure Admin access to the project by changing the password on the License Owner account. The default username for this account is the License Owner email address.

You can submit a password change request using either of the following methods:

-  Locate the welcome email sent to the License Owner email address and follow the link to change your password.

-  Copy the store URL from the [Project Web Interface][] into a browser. Then, append `/admin` to the end of the URL to open the sign in page. Click the **Forgot password?** link to send a password change request to the License Owner email address.

After you submit the password change request, check your email for the password reset notification. If you do not get the email, check your spam folder.

{:.bs-callout-tip}
If the password reset fails or you cannot sign in to the Admin panel, a user with admin access can connect to the project using ssh and add a new admin user using the Magento CLI [admin:user:create command][].

## Sign up for Magento status {#status}

Get updates about {{site.data.var.ece}} platform environments and related services from the [Status page][].

The page lists current status for all {{site.data.var.ece}} components and services followed by notifications about incident reports, service upgrades, planned outages, and more. These notifications are ordered by date.

![All status on the page]({{ site.baseurl }}/common/images/cloud/cloud_status.png){:width="650px"}

Anyone working on your project can subscribe to the {{site.data.var.ece}} status site to receive event notifications and updates through email. You can customize your subscription to select only the platform and services that you want to track. Sign up from the [Subscription page][].

<!--Link references-->

[your {{site.data.var.ece}} account]: https://account.magento.com/customer/account/login
[Projects section]: https://cloud.magento.com/cloud/project/subscriptions/
[Magento Sales]: https://magento.com/explore/contact-sales
[Magento Solution Partner]: https://magento.com/partners/choose
[Manage user access to Cloud projects]: {{ site.baseurl }}/cloud/project/user-admin.html
[register for an account]: https://account.magento.com/customer/account/create/
[Shared Access]: https://support.magento.com/hc/en-us/articles/360000913794-Magento-Help-Center-User-Guide#shared-access
[Starter Architecture]: {{ site.baseurl }}/cloud/architecture/starter-architecture.html
[Pro Architecture]: {{ site.baseurl }}/cloud/architecture/pro-architecture.html
[Project Web Interface]: {{ site.baseurl }}/cloud/project/projects.html
[Status page]: https://status.adobe.com/products/3350
[Subscription page]: https://status.adobe.com/products/3350
[admin:user:create command]: {{ site.baseurl }}/guides/v2.3/install-gde/install/cli/install-cli-subcommands-admin.html#create-or-edit-an-administrator
