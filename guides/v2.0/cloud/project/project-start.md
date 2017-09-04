---
layout: default
group: cloud
subgroup: 100_project
title: Get started with a project
menu_title: Get started with a project
menu_order: 2
menu_node:
version: 2.0
github_link: cloud/project/project-start.md
redirect from:
  -  /guides/v2.0/cloud/access-acct/first-time-setup_dir-structure.html
  -  /guides/v2.1/cloud/access-acct/first-time-setup_dir-structure.html
  -  /guides/v2.1/cloud/access-acct/first-time-setup_dir-structure.html
---

This topic shows how to get started working on a project.

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

## Magento Commerce directories {#cloud-structure-cloud}
The following sections discuss information you need to know about directories in the systems deployed to Magento Commerce.

### Magento application root directory
The Magento application root directory is located in different locations depending on the environment:

* [Integration environment]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int): the Magento application is located in the `/app` directory.
* [Staging environment]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage): the Magento application is located in the `/<project code>_stg` directory.
* [production]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-prod): the Magento application is located in the ` /<project code>` directory.

### Writable directories
In Integration, Staging, and Production, *only* the following directories are writable due to security reasons:

*	`var`
*	`pub/static`
*	`pub/media`
*	`app/etc`
*	`/tmp`

<div class="bs-callout bs-callout-info" id="info">
  <p>In Production, each node in the three-node cluster has a <code>/tmp</code> directory that is not shared with the other nodes.</p>
</div>

### Logs
Logs for the integration, staging, and production environments are located under the `/var/log` directory. You can access that directory by opening an SSH tunnel to the environment using the `magento-cloud environment:ssh -e <environment id>` command.

In staging and production environments, the deployment log is located in `/var/log/platform/<project ID>`.

Magento logs are located in the `<magento root dir>/var/log` directory.

## Command summary {#cloud-proj-start-summ}
The following commands can be run from any directory. However, it's simpler to run them from a project directory. If so, you can omit the `-p <project ID>` parameter.

All commands are shown with required options only. Get help for any `magento-cloud` command by appending `--help`. For more commands, see [Magento Cloud CLI reference]({{page.baseurl}}cloud/reference/cli-ref-topic.html).

`git commit --allow-empty -m "redeploy" && git push <branch name>`
:  Push an empty commit to force a redeployment. Some actions, like adding a user for example, don't result in deployment.

`magento-cloud login`
:	Log in to the project

`magento-cloud project:list`
:	List project IDs

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud project:info -p <project ID>`
:	List information about the project, including ID, name, region, URL, and Git {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.

#### Related topics
*	[Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
