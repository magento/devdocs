---
layout: default
group: cloud
subgroup: 04_setup
title: Import an existing Magento project
menu_title: Import an existing Magento project
menu_order: 5
menu_node: 
version: 2.0
github_link: cloud/access-acct/first-time-setup_import.md
---

## Import an existing Magento project {#cloud-first-empty}
This section discusses how to can start your Magento Enterprise Cloud Edition project from an existing Magento installation. We enable you to start in any of the following ways:

*	If you already have your Magento project in a Git repository, you'll add the Magento Enterprise Cloud Edition repository as a remote and continue working using your existing workflow.
*	If your Magento project is *not* in a Git repository, you can create one and add Magento to it later.

To access your project for the first time:

1.  If you followed the link from your [welcome e-mail]({{page.baseurl}}cloud/access-acct/first-time-setup.html#cloud-first-email), you might have to log in to your Magento Enterprise Cloud Edition project first.

    If necessary, click the **Projects** tab.
2.	When prompted, enter a name for your project and click **Next**.
3.	Click **Import your existing code** as the following figure shows.

	![Create a Magento project using an existing one]({{ site.baseurl }}common/images/cloud_import-existing.png){:width="650px"}
4.	Click **Continue**.
4.	Using a terminal application, log in to the machine on which your SSH key is stored.
5.	On the next Web Interface page, you have the following options:

	*	If your Magento project is *not* in a Git repository yet, use the commands in the top pane (that is, the commands starting with `touch README.md`).
	*	If your Magento project is in a Git repository, use the commands in the bottom pane.

<div class="bs-callout bs-callout-warning">
    <p>Don't push to your Git repository yet! Doing so might result in a failed deployment. See the next section before you push.</p>
</div>

## Before you push your imported project {#cloud-import-before}
Before you push your Magento project code, you *must* add `auth.json` to the project root directory and you *should* add configuration files as well.

### Add `auth.json`
Because the Composer repository that contains Magento Enterprise Cloud Edition requires authentication, you must add a file named `auth.json` to your project's root directory. This file contains your authentication keys. Without `auth.json`, the Magento software won't download.

Add `auth.json`, replacing the sample values with your public and private keys.

{% highlight json %}
{
   "http-basic": {
      "repo.magento.com": {
         "username": "<your public key>",
         "password": "<your private key>"
      }
   }
}
{% endhighlight %}

### Configuration files
Magento Enterprise Cloud Edition enables you to specify information like the Magento docroot, details about services (like the database, Redis, and so on), and routes in `yaml` files.

We recommend you create these files before you push to your repository; otherwise, Magento might not deploy at all or might behave unexpectedly.

<!-- https://docs.platform.sh/drupal_migrate/guides/configuration/drupal_application.html 
  https://docs.platform.sh/drupal_migrate/guides/type/php/drupal/migrate/import-database.html
  https://docs.platform.sh/drupal_migrate/guides/type/php/drupal/migrate/import-files.html -->

More information:

*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`.routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`.services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)

