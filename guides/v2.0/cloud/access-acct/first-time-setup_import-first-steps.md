---
layout: default
group: cloud
subgroup: 080_setup
title: Import existing code into a project
menu_title: Import existing code into a project
menu_order: 151
menu_node:
level3_menu_node: level3child
level3_subgroup: import
version: 2.0
github_link: cloud/access-acct/first-time-setup_import-first-steps.md
redirect_from:
  - /guides/v2.0/cloud/access-acct/first-time-setup_import-prereq.html
  - /guides/v2.1/cloud/access-acct/first-time-setup_import-prereq.html
  - /guides/v2.2/cloud/access-acct/first-time-setup_import-prereq.html
  - /guides/v2.3/cloud/access-acct/first-time-setup_import-prereq.html
functional_areas:
  - Cloud
  - Setup
---

When first creating your {{site.data.var.ece}} project, you may have a choice of a blank template or importing existing code. We highly recommend always starting with a blank template to receive the {{site.data.var.ece}} codebase to build on. You can start adding custom code, extensions and modules, themes, and more in branches from this codebase.

For trial Starter and Pro projects, we automatically provision your project with the latest version of {{site.data.var.ece}}. You do not have an option of creating a project by importing. Not to worry, if you still want to fully import your existing codebase and overwrite the Git `master` branch for your project, these instructions will walk through the process.

These instructions primarily include information and instructions to import existing Magento code and data into a blank {{site.data.var.ece}} template project.

If you have the option of creating a project using existing code,

## Prerequisites for importing code {#prereqs}
Before you continue, make sure you have done all of the following:

* Your existing {{site.data.var.ee}} code must be in Git. You need to have a Git account with a repository and your code added to it. If you do not have this set up, we recommend using [GitHub]({{page.baseurl}}cloud/project/project-integrate-github.html). You must have a Git branch with your code pushed to it before continuing with these instructions.
* You should have a fully installed and configured local development environment. For details, follow the instructions for [Local environment setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html).

## Required information for your import {#info}
You need to locate and gather the information required information to import {{site.data.var.ee}} into {{site.data.var.ece}}, including:

* SSH access to the cloud environment for the target database
* Database credentials

### SSH access to cloud environments {#ssh}
To transfer the database dump and files to {{site.data.var.ece}}, you must know the SSH URL. You can locate the SSH access using the CLI or Project Web Interface:

* On your local, you can locate the SSH information using the command: `magento-cloud environment:ssh --pipe`
* The [Project Web Interface]({{page.baseurl}}cloud/project/project-webint-basic.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must enter all {{site.data.var.ece}} commands on the machine on which your Cloud SSH keys are stored. For more information, see [Enable SSH keys]({{page.baseurl}}cloud/before/before-workspace-ssh.html) and [SSH and sFTP]({{page.baseurl}}cloud/env/environments-ssh.html).
</div>

### Database credentials {#db-creds}
Collect the credentials for your databases.

For the {{site.data.var.ee}} database, you need the name of the database and user credentials (username and password) to access the database.

For the {{site.data.var.ece}} database, you need credentials and data for the cloud database to import your data. The name of the database can be found in the `$MAGENTO_CLOUD_RELATIONSHIPS` environment variable.

To find {{site.data.var.ece}} database access information:

1. SSH to into your environment:

        magento-cloud ssh -p <project ID> -e <environment ID>
2. Use the following command to list all database information:

        echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp

The database connection information is displayed:

<pre class="no-copy">database" : [
      {
         "username" : "user",
         "query" : {
            "is_master" : true
         },
         "path" : "main",
         "port" : 3306,
         "host" : "database.internal",
         "password" : "",
         "scheme" : "mysql",
         "ip" : "192.0.2.150"
      }
   ]</pre>

This information provides the following: the database name is `main`, its listen port is `3306`, its host name is `database.internal`, its root user name is `user`, and the user has no password.

### Cloud unsecure base URL {#cloud-import-pre-baseurl}
After you import the {{site.data.var.ee}} database into {{site.data.var.ece}}, you must change the base URL so you can access the Magento Admin and storefront.

Locate the base URL:

*   The command line:

        magento-cloud url

*   The [ProjectWeb Interface]({{page.baseurl}}cloud/project/project-webint-basic.html).

## Import workflow for existing code {#import}
The complete workflow for importing existing code includes the following steps.

1.  If you do not have a project created and available, create a new [project from a template](#cloud-import-proj). This new project has files and directories specific to {{site.data.var.ece}}.
2.  [Replace the contents]({{page.baseurl}}cloud/access-acct/first-time-setup_import-import.html) of this project with your code using Git.
3.  [Import your Magento database]({{page.baseurl}}cloud/access-acct/first-time-setup_import-import.html#cloud-import-db) into your {{site.data.var.ece}} project.
4.  [Import your static files]({{page.baseurl}}cloud/access-acct/first-time-setup_import-import.html#cloud-import-media) into your {{site.data.var.ece}} project.
5.  Copy your {{site.data.var.ee}} [encryption key]({{page.baseurl}}cloud/access-acct/first-time-setup_import-import.html#cloud-import-key) to your {{site.data.var.ece}} project. This key is required for data migration and access.
6.  Clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} and verify the project imported successfully.

## Create a new, empty Magento Enterprise Edition project {#cloud-import-proj}
If you do not have a provisioned project created and available, you need to create your project selecting the

{% include cloud/new-project-from-template.md %}

#### Next step
