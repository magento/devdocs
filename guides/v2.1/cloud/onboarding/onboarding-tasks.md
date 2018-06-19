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

After your company purchases a subscription plan for {{site.data.var.ece}} and the initial project is created,
the Project Owner is the only person who can access the project and code.

To quickly onboard your project and develop your site for live deployment, you need to complete specific
set up steps and onboarding tasks. Typically, the Project Owner begins the process by securing Admin access and
setting up Technical Admin users with super user access. The Technical Admin users can continue with set up,
customization, and development work.


<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you joined us with a 30-day free trial {{site.data.var.ece}} account, we complete the following first steps
for you:

-   Create your Cloud account and project
-   Provision the initial environment with a cloned {{site.data.var.ece}} code base in a `master` branch
-   Create an environment for the `master` branch with a web server, database, and services
-   Add Magento authentication keys for the Project Owner
-   Add the `ADMIN_EMAIL` and `ADMIN_USERNAME` variables with both set to the
    default value, Project Owner email address. [Set environment and project variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).
</div>
 
The trial signup process also provides access to the Onboarding portal that guides you through the
process to build and launch your {{site.data.var.ece}} store.


## Sign up for a Magento Commerce (Cloud) account {#cloud-first-acct}
Don't have a {{site.data.var.ece}} account yet? Sign up for a [free 30-day trial](https://magento.com/trial){:target="_blank"}
for a Starter or Pro plan, or contact [Magento Sales](https://magento.com/explore/contact-sales){:target="_blank"}.
We will create your account and send a welcome e-mail that provides instructions to access the project.

The person who signs up for a {{site.data.var.ece}} account is referred to as the _Project Owner_.

## Project access and users {#users}

When you sign up for a {{site.data.var.ece}} account, the person who created the account
is the _Project Owner_. Typically, the Project Owner is someone in your business or
finance organization that manages payments and other business-related issues for the 
{site.data.var.ece}}. The Project Owner serves as the point of contact with Magento.

The owner can [add user accounts]({{ page.baseurl }}/cloud/project/user-admin.html#cloud-user-webinterface)
to provide access to code, manage branches, enter tickets, and support environments. These user accounts
can include in-house development, consultants, and Magento solution specialists.

Typically, the only user the Project Owner must create is the _Technical Admin_.
This user should have a user account with the Super User role.
Your Technical Admin can create user accounts for developers, set
environment permissions, and manage all branches and environments. Typically, the Technical Admin is a developer,
consultant, a [Magento Solution Partner](https://magento.com/find-a-partner){:target="\_blank"}, or yourself.

You can create a Technical Admin through the onboarding process, from
the Project web interface, or from the command line using the Magento Cloud CLI.
See [Create and manage users](({{ page.baseurl }}/cloud/project/user-admin.html).


## Your welcome e-mail {#email}
After you register for an account, Magento sends a welcome email to the email address
specified during the registration process. The e-mail contains a link to your {{site.data.var.ece}} project.
Use that link to access your project and complete the initial project set up.

You can also access your project by [logging in to your account](https://accounts.magento.cloud){:target="_blank"}.

## Get started with the Project Web Interface {#project-setup}

When you sign up for a Trial Pro or Starter subscription plan, we provision your initial
environment with a template {{site.data.var.ece}} repository.

We provide a [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html) for you to manage
your project, add user accounts, and get started developing your store(s). This interface provides a
UI for the Project Owner, Technical Admin, and developers to manage all environments and branches,
environment variables, environment settings, and routes.

We recommend creating a user account with Super User access as your Technical Admin.
With super user access, the Technical Admin can add user accounts, manage branches,
and configure environments.

![Use the Project Web Interface to manage environments]({{ site.baseurl }}/common/images/cloud_project-access.png)

## Sign up for Magento status {#status}

We provide a {{site.data.var.ece}} environment and service status site. Anyone working on your site and project can subscribe on the site for email notifications and updates. We recommend subscribing and adding a bookmark to check the page daily or as needed.

The site location is [https://status.magento.cloud/](https://status.magento.cloud/){:target="\_blank"}. Scroll to the bottom and click [Subscribe](http://status.magento.cloud/subscribe){:target="\_blank"} at the bottom of the page. Complete the prompts with your email address and types of notifications you want to receive.

The page lists all component and service status. Any issues, updates, and notices are displayed below these status tables by date. For example, any slow issues, outages, or upgraded services are listed with important information and any updates as available.

![All status on the page]({{ site.baseurl }}/common/images/cloud_status.png)

## Access your Magento Admin panel {#admin}

You use the Admin panel to manage your {{site.data.var.ece}} project. You can
add users, configure services for your store, set up your store, and more.

For a new project, the first step is to access the Admin panel and reset the
default password to secure your project. When you reset your password, use
the Project Owner email address

1. Access the Admin panel using either of the following methods: 

    -   Locate the welcome email sent to the Project Owner email address and
        click the link to your Magento Admin panel.
        
    -   Locate the store URL in the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html).
        Copy and paste the store URL into your browser address bar and add `/admin` the end of the URL
        to open the Admin login panel.

1.  Click **Forgot your password?** and complete the process to change the password.

If you receive an error, you might need configure your project to set or update
the project variables for `ADMIN_EMAIL`, `ADMIN_USERNAME`, and `ADMIN_PASSWORD`. See
[Set environment and project variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).
After setting these variables and waiting for the project to rebuild, you can log in to Admin
panel using the new values.


