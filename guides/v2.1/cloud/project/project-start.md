---
group: cloud
subgroup: 100_project
title: Project structure
menu_title: Project structure
menu_order: 10
menu_node:
version: 2.1
github_link: cloud/project/project-start.md
redirect_from:
  - /guides/v2.0/cloud/access-acct/first-time-setup_dir-structure.html
  - /guides/v2.1/cloud/access-acct/first-time-setup_dir-structure.html
  - /guides/v2.2/cloud/access-acct/first-time-setup_dir-structure.html
functional_areas:
  - Cloud
  - Configuration
---

When you create your project, you receive a cloned repository of {{site.data.var.ece}} code.

## Local project directory structure {#cloud-structure-local}
Not including the Magento application itself, your local project has the following structure:

{% highlight xml %}
├── .git
├── .gitignore
├── .magento
│   ├── routes.yaml
│   └── services.yaml
├── .magento.app.yaml
├── auth.json
├── composer.json
├── composer.lock
├── magento-vars.php
├── php.ini
└── README.md
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
  <p>When you push your local environment to the remote server, our deploy script uses the values defined by configuration files in the <code>.magento</code> directory, then the script deletes the directory and its contents. Your local development environment isn't affected.</p>
</div>

### .gitignore file {gitignore}
Depending on your {{site.data.var.ece}} version, you may need different information added to or commented out in your `.gitignore` file. Git uses this file to determine which files and directories to ignore, before you make a commit to your branches. A .gitignore file should be committed into your root Magento in the repository, in order to share the ignore rules with any other users that clone the repository.

We include a base `.gitignore` file with the project repository. For a review of the {{site.data.var.ece}} file, see [.gitignore file](https://github.com/magento/magento-cloud/blob/master/.gitignore){:target="\_blank"}. You can review the recommended files for your file in the [`.gitignore` reference](http://devdocs.magento.com/guides/v2.2/config-guide/prod/config-reference-gitignore.html).

## Magento application root directory {#rootdir}
The Magento application root directory is located in different locations depending on the environment.

For Starter:

-  Integration environment—the Magento application is located in the `/app` directory.
-  Production environment—the Magento application is located in the `/<project code>` directory.

For Pro:

-  Integration environment—the Magento application is located in the `/app` directory.
-  Staging environment—the Magento application is located in the `/<project code>_stg` directory.
-  Production environment—the Magento application is located in the ` /<project code>` directory.

## Writable directories {#write-dir}
In Integration, Staging, and Production, *only* the following directories are writable due to security reasons:

*	`var`
*	`pub/static`
*	`pub/media`
*	`app/etc`
*	`/tmp`

<div class="bs-callout bs-callout-info" id="info">
  <p>In Production, each node in the three-node cluster has a <code>/tmp</code> directory that is not shared with the other nodes.</p>
</div>

## Logs {#logs}
Logs for all environments are located under the `/var/log` directory. You can access that directory by opening an SSH tunnel to the environment using the `magento-cloud environment:ssh -e <environment id>` command.

For Pro, the deployment log for Staging and Production is located in `/var/log/platform/<project ID>`.

Magento logs are located in the `<magento root dir>/var/log` directory.

## Build logs {#build-log}
After pushing to your environment, you can see the results of the both hooks. Logs from the build hook are redirected to the output stream of `git push`, so you can observe them in the terminal or capture them (along with error messages) with `git push > build.log 2>&1`.

### Deploy logs {#deploy-log}
You can review these logs via SSH into the environment. Change to the directories listed below to review the logs.

Logs from the deploy hook are located on the server in the following locations:

*	Integration: `/var/log/deploy.log`
*	Staging: `/var/log/platform/<prodject ID>/post_deploy.log`
*	Production: `/var/log/platform/{1|2|3}.<prodject ID>/post_deploy.log`

The value of `<project ID>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging environment user is `yw1unoukjcawe_stg` and the Production environment user is `yw1unoukjcawe`.

For example, on the Staging environment for project `yw1unoukjcawe`, the deploy log is located at `/var/log/platform/yw1unoukjcawe_stg/post_deploy.log`.

For Production, you have a three node structure. Logs are available with specific information for that node. For example, on the Production environment for project `yw1unoukjcawe`, the deploy log is located at node 1 `/var/log/platform/1.yw1unoukjcawe/post_deploy.log`, node 2 `/var/log/platform/2.yw1unoukjcawe/post_deploy.log`, and node 3 `/var/log/platform/3.yw1unoukjcawe/post_deploy.log`.

Logs for all deployments that have occurred on this environment are appended to this file. Check the timestamps on log entries to verify and locate the logs you want for a specific deployment.

The actual log output is highly verbose to allow troubleshooting. The following is a condensed example:

{% highlight xml %}
[2016-10-11 22:15:38] Starting pre-deploy.
...
[2016-10-11 22:15:39] Pre-deploy complete.
[2016-10-11 22:15:42] Start deploy.
[2016-10-11 22:15:42] Preparing environment specific data.
[2016-10-11 22:15:42] Initializing routes.

... more ...

[2016-10-11 22:15:46] Deployment complete.
{% endhighlight %}

The deploy log contains start and stop messages for each of the two hooks:
`Starting pre-deploy`, `Pre-deploy complete.`, `Start deploy.`, and `Deployment complete.`.

### Application logs {#app-log}
To review other application logs in Staging or Production, you can access and review those logs in `/var/log/platform/ProjectID`.

For Pro plan Staging, the project ID has `_stg` at the end. For example, if you receive 500 errors in Staging and want to review the nginx logs, you can SSH to the Staging environment and locate the logs in `/var/log/platform/ProjectID_stg`.

For Pro plan Production, you have three nodes to check for logs.
