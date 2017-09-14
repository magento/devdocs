---
layout: default
group: cloud
subgroup: 100_project
title: Project structure
menu_title: Project structure
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/project/project-start.md
redirect from:
  -  /guides/v2.0/cloud/access-acct/first-time-setup_dir-structure.html
  -  /guides/v2.1/cloud/access-acct/first-time-setup_dir-structure.html
  -  /guides/v2.1/cloud/access-acct/first-time-setup_dir-structure.html
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

## Magento application root directory
The Magento application root directory is located in different locations depending on the environment.

For Starter:

* [Integration environment]({{ page.baseurl }}cloud/basic-information/starter-architecture.html#cloud-arch-int): the Magento application is located in the `/app` directory.
* [Production environment]({{ page.baseurl }}cloud/basic-information/starter-architecture.html#cloud-arch-prod): the Magento application is located in the `/<project code>` directory.

For Pro:

* [Integration environment]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int) the Magento application is located in the `/app` directory.
* [Staging environment]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage) the Magento application is located in the `/<project code>_stg` directory.
* [Production environment]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-prod) the Magento application is located in the ` /<project code>` directory.

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

## Cloud CLI summary {#cloud-proj-start-summ}
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
